/**
 * SarkariResult.com Live Sync Scraper
 * ===================================
 * Fetches and parses live vacancies, results, admit cards, answer keys,
 * syllabi, admission, certificates, and marquees from https://www.sarkariresult.com/
 */

const https = require('https');
const { inferOfficialPortal } = require('./detailScraper');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHtml(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch ${url}, status: ${res.statusCode}`));
      }
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Request timed out')); });
  });
}

function inferQualification(title) {
  const t = title.toLowerCase();
  if (t.includes('10th') || t.includes('matric') || t.includes('high school') || t.includes('mts') || t.includes('anganwadi') || t.includes('helper') || t.includes('group d') || t.includes('safai')) {
    return '10th / Matric';
  }
  if (t.includes('12th') || t.includes('inter') || t.includes('10+2') || t.includes('chsl') || t.includes('constable') || t.includes('clerk') || t.includes('nda')) {
    return '12th / Inter';
  }
  if (t.includes('iti') || t.includes('diploma') || t.includes('polytechnic') || t.includes('je') || t.includes('junior engineer') || t.includes('alp') || t.includes('technician') || t.includes('apprentice')) {
    return 'ITI / Diploma';
  }
  if (t.includes('pg') || t.includes('post graduate') || t.includes('m.sc') || t.includes('m.a') || t.includes('m.tech') || t.includes('mba') || t.includes('pgt') || t.includes('net') || t.includes('specialist') || t.includes('professor') || t.includes('medical officer')) {
    return 'Post Graduate';
  }
  return 'Graduate';
}

function inferOrganization(title) {
  const t = title.toUpperCase();
  if (t.includes('BPSC')) return 'Bihar Public Service Commission (BPSC)';
  if (t.includes('BSSC')) return 'Bihar Staff Selection Commission (BSSC)';
  if (t.includes('BTSC')) return 'Bihar Technical Service Commission (BTSC)';
  if (t.includes('CSBC')) return 'Central Selection Board of Constable (CSBC Bihar)';
  if (t.includes('UPSSSC')) return 'Uttar Pradesh SSSC';
  if (t.includes('UPPSC')) return 'Uttar Pradesh Public Service Commission (UPPSC)';
  if (t.includes('SSC')) return 'Staff Selection Commission (SSC)';
  if (t.includes('RRB') || t.includes('RAILWAY')) return 'Railway Recruitment Board (RRB)';
  if (t.includes('UPSC')) return 'Union Public Service Commission (UPSC)';
  if (t.includes('IBPS')) return 'Institute of Banking Personnel Selection (IBPS)';
  if (t.includes('SBI')) return 'State Bank of India (SBI)';
  if (t.includes('NTA')) return 'National Testing Agency (NTA)';
  if (t.includes('ARMY') || t.includes('NAVY') || t.includes('AIR FORCE')) return 'Indian Armed Forces';
  if (t.includes('HIGH COURT') || t.includes('COURT')) return 'High Court Recruitment Cell';
  return 'Central / State Govt Department';
}

async function scrapeSarkariResult() {
  const html = await fetchHtml('https://www.sarkariresult.com/');

  // 1. Marquee Tickers
  const marquees = [];
  const marqueeMatches = html.match(/<marquee[^>]*>([\s\S]*?)<\/marquee>/g) || [];
  marqueeMatches.forEach(m => {
    const aTags = m.match(/<a[^>]+href=\"([^\"]+)\"[^>]*>([\s\S]*?)<\/a>/g) || [];
    aTags.forEach(a => {
      const href = a.match(/href=\"([^\"]+)\"/)?.[1];
      const title = a.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').trim();
      if (href && title) {
        marquees.push({ title, url: href });
      }
    });
  });

  // 2. Sections from <ul class="sarkari-quick-list">
  const parts = html.split('<ul class="sarkari-quick-list">');
  const sectionKeys = [
    'result',
    'admitCard',
    'latestJob',
    'answerKey',
    'syllabus',
    'admission',
    'certificate',
    'outsourcing',
    'important'
  ];

  const sarkariColumns = {
    result: [],
    admitCard: [],
    latestJob: [],
    answerKey: [],
    syllabus: [],
    admission: [],
    certificate: [],
    outsourcing: [],
    important: []
  };

  const govtJobs = [];

  for (let i = 1; i < parts.length && i <= sectionKeys.length; i++) {
    const key = sectionKeys[i - 1];
    const listContent = parts[i].split('</ul>')[0];
    const liMatches = listContent.match(/<li[^>]*>[\s\S]*?<\/li>/g) || [];

    liMatches.forEach((li, idx) => {
      const a = li.match(/<a[^>]+href=\"([^\"]+)\"[^>]*>([\s\S]*?)<\/a>/);
      if (!a) return;

      const url = a[1].trim();
      const rawTitle = a[2].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').trim();
      const qual = inferQualification(rawTitle);
      const org = inferOrganization(rawTitle);
      const officialUrl = inferOfficialPortal(rawTitle);

      const item = {
        id: `sr-${key}-${idx + 1}`,
        title: rawTitle,
        url,
        officialUrl,
        category: key,
        qual,
        org,
        sector: 'GOVT',
        isNew: idx < 6
      };

      sarkariColumns[key].push(item);

      // If it's a job, also add to govtJobs with extra detail
      if (key === 'latestJob' || key === 'outsourcing') {
        govtJobs.push({
          id: `job-live-${key}-${idx + 1}`,
          title: rawTitle,
          org,
          sector: 'GOVT',
          qual,
          vacancies: rawTitle.match(/\d+[\d,]*\s*Post/i)?.[0] || 'Multiple Vacancies',
          salary: 'As per Central/State 7th Pay Matrix',
          location: rawTitle.includes('Bihar') || rawTitle.includes('BPSC') || rawTitle.includes('BSSC') ? 'Bihar' :
                    rawTitle.includes('UP') || rawTitle.includes('UPPSC') || rawTitle.includes('UPSSSC') ? 'Uttar Pradesh' :
                    rawTitle.includes('Rajasthan') ? 'Rajasthan' :
                    rawTitle.includes('Delhi') ? 'Delhi' : 'All India',
          lastDate: 'Active Online 2026',
          fee: 'Gen/OBC: ₹100 | SC/ST/Women: ₹0',
          age: '18 to 35/40 Years (Relaxation as per rules)',
          url,
          officialUrl,
          isNew: idx < 8
        });
      }
    });
  }

  return {
    lastSyncedAt: new Date().toISOString(),
    marquees: marquees.length > 0 ? marquees : [
      { title: "Railway NTPC 10+2 Level Online Form 2026", url: "https://www.sarkariresult.com/railway/railway-rrb-ntpc-ug-level-07-2026/" },
      { title: "Army TGC 145 Online Form 2026", url: "https://www.sarkariresult.com/2026/army-tgc-145-sep26/" },
      { title: "UP Assistant Teacher Primary Super TET Online Form 2026", url: "https://www.sarkariresult.com/2026/upessc-up-primary-teacher-05-2026/" }
    ],
    sarkariColumns,
    govtJobs
  };
}

module.exports = {
  scrapeSarkariResult,
  inferQualification,
  inferOrganization
};

if (require.main === module) {
  scrapeSarkariResult().then(data => {
    console.log('✅ Scraped successfully at:', data.lastSyncedAt);
    console.log('Marquees:', data.marquees.length);
    Object.keys(data.sarkariColumns).forEach(k => {
      console.log(`- ${k}: ${data.sarkariColumns[k].length} links`);
    });
    console.log('Total Govt Jobs:', data.govtJobs.length);
  }).catch(err => {
    console.error('❌ Scraper error:', err);
  });
}
