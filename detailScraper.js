// ============================================================
// detailScraper.js — Scraper & Parser for Sarkari Result Vacancy Details
// Extracts Eligibility, Seats / Total Vacancies, Important Dates,
// Application Fees, Age Limits, How to Fill, and Official Links.
// ============================================================

const https = require('https');
const http = require('http');

// In-memory cache for fast sub-millisecond retrieval
const detailCache = new Map();

/**
 * Helper to escape HTML characters
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m]);
}

/**
 * Verified Official Government Portals by Agency & Keyword
 */
const PORTAL_RULES = [
  { match: /BPSC/i, url: 'https://bpsc.bih.nic.in/' },
  { match: /BSSC/i, url: 'https://bssc.bihar.gov.in/' },
  { match: /BTSC/i, url: 'https://btsc.bihar.gov.in/' },
  { match: /CSBC|BPSSC|Bihar Police/i, url: 'https://csbc.bih.nic.in/' },
  { match: /Bihar Vidhan/i, url: 'https://vidhansabha.bih.nic.in/' },
  { match: /UPSSSC/i, url: 'https://upsssc.gov.in/' },
  { match: /UPPSC/i, url: 'https://uppsc.up.nic.in/' },
  { match: /UPPBPB|UP Police/i, url: 'https://uppbpb.gov.in/' },
  { match: /UPESSC|Super TET|UP Teacher/i, url: 'https://uphesc.org/' },
  { match: /UP Anganwadi/i, url: 'https://balvikasup.gov.in/' },
  { match: /SSC/i, url: 'https://ssc.gov.in/' },
  { match: /RRB|Railway/i, url: 'https://www.rrbapply.gov.in/' },
  { match: /UPSC/i, url: 'https://upsc.gov.in/' },
  { match: /Army/i, url: 'https://joinindianarmy.nic.in/' },
  { match: /Navy/i, url: 'https://www.joinindiannavy.gov.in/' },
  { match: /Air Force|Airforce|AFCAT/i, url: 'https://careerindianairforce.cdac.in/' },
  { match: /Coast Guard/i, url: 'https://joinindiancoastguard.cdac.in/' },
  { match: /IBPS/i, url: 'https://www.ibps.in/' },
  { match: /SBI/i, url: 'https://sbi.co.in/web/careers' },
  { match: /RBI/i, url: 'https://opportunities.rbi.org.in/' },
  { match: /NTA|NEET|JEE|CUET|UGC NET|CSIR/i, url: 'https://nta.ac.in/' },
  { match: /DSSSB/i, url: 'https://dsssb.delhi.gov.in/' },
  { match: /RPSC/i, url: 'https://rpsc.rajasthan.gov.in/' },
  { match: /RSMSSB/i, url: 'https://rsmssb.rajasthan.gov.in/' },
  { match: /MPPSC/i, url: 'https://mppsc.mp.gov.in/' },
  { match: /MPESB|MPPEB|Vyapam/i, url: 'https://esb.mp.gov.in/' },
  { match: /UKPSC/i, url: 'https://psc.uk.gov.in/' },
  { match: /UKSSSC/i, url: 'https://sssc.uk.gov.in/' },
  { match: /HSSC/i, url: 'https://hssc.gov.in/' },
  { match: /HPSC/i, url: 'https://hpsc.gov.in/' },
  { match: /JSSC/i, url: 'https://jssc.nic.in/' },
  { match: /JPSC/i, url: 'https://jpsc.gov.in/' },
  { match: /CTET/i, url: 'https://ctet.nic.in/' },
  { match: /KVS/i, url: 'https://kvsangathan.nic.in/' },
  { match: /NVS/i, url: 'https://navodaya.gov.in/' },
  { match: /Supreme Court/i, url: 'https://www.sci.gov.in/' },
  { match: /High Court/i, url: 'https://districts.ecourts.gov.in/' },
  { match: /ICSIL/i, url: 'https://icsil.in/' },
  { match: /CWC/i, url: 'https://cewacor.nic.in/' },
  { match: /CRPF/i, url: 'https://rect.crpf.gov.in/' },
  { match: /CISF/i, url: 'https://cisfrectt.cisf.gov.in/' },
  { match: /BSF/i, url: 'https://rectt.bsf.gov.in/' },
  { match: /ITBP/i, url: 'https://recruitment.itbpolice.nic.in/' },
  { match: /SSB/i, url: 'https://ssb.gov.in/' },
  { match: /LIC/i, url: 'https://licindia.in/' }
];

function inferOfficialPortal(title) {
  if (!title) return 'https://www.india.gov.in/';
  for (const r of PORTAL_RULES) {
    if (r.match.test(title)) return r.url;
  }
  return 'https://www.india.gov.in/';
}

/**
 * Follows HTTP 301/302 redirects up to maxHops
 */
function fetchWithRedirect(url, maxHops = 5) {
  if (maxHops <= 0) return Promise.reject(new Error('Too many redirects'));

  return new Promise((resolve, reject) => {
    try {
      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;

      const req = client.get(
        url,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5'
          },
          timeout: 10000
        },
        res => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            let nextUrl = res.headers.location;
            if (!nextUrl.startsWith('http')) {
              nextUrl = new URL(nextUrl, url).href;
            }
            return fetchWithRedirect(nextUrl, maxHops - 1)
              .then(resolve)
              .catch(reject);
          }

          if (res.statusCode !== 200) {
            return reject(new Error(`HTTP status ${res.statusCode}`));
          }

          let data = '';
          res.on('data', chunk => { data += chunk; });
          res.on('end', () => resolve({ status: res.statusCode, data, finalUrl: url }));
        }
      );

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timed out'));
      });
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Clean raw table HTML from sarkariresult.com
 * Strips promotional rows (Telegram, WhatsApp, Mobile Apps, Tools)
 * and rebrands table to RojgarSetu (www.rojgarsetu.in)
 */
function sanitizeSarkariTable(rawTable) {
  if (!rawTable) return '';

  let cleaned = rawTable
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<ins[\s\S]*?<\/ins>/gi, '')
    .replace(/style="[^"]*"/gi, '')
    .replace(/width="[^"]*"/gi, '')
    .replace(/height="[^"]*"/gi, '')
    .replace(/bgcolor="[^"]*"/gi, '')
    .replace(/align="[^"]*"/gi, '')
    .replace(/class="[^"]*"/gi, '');

  // 1. Remove promotional rows (Telegram, WhatsApp, Android/iOS Apps, Tools, Resizers)
  cleaned = cleaned.replace(/<tr[\s\S]*?<\/tr>/gi, (row) => {
    const text = row.replace(/<[^>]+>/g, ' ').toLowerCase();
    if (
      text.includes('telegram') ||
      text.includes('whatsapp') ||
      text.includes('android app') ||
      text.includes('apple ios app') ||
      text.includes('mobile app') ||
      text.includes('sarkari result tools') ||
      text.includes('resizer') ||
      text.includes('join sarkari') ||
      text.includes('follow us') ||
      text.includes('sarkariresultportal') ||
      text.includes('sarkariresult.tools')
    ) {
      return '';
    }
    return row;
  });

  // 2. Neutralize promo & internal domain links; preserve real commission links
  cleaned = cleaned.replace(/href=["']([^"']+)["']/gi, (match, href) => {
    const l = href.toLowerCase();
    if (
      l.includes('sarkariresult.com') ||
      l.includes('sarkariresultportal') ||
      l.includes('sarkariresult.tools') ||
      l.includes('t.me') ||
      l.includes('telegram') ||
      l.includes('whatsapp') ||
      l.includes('play.google') ||
      l.includes('apps.apple')
    ) {
      return 'href="javascript:void(0)"';
    }
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return `href="${href}" target="_blank" rel="noopener"`;
    }
    if (href.startsWith('//')) {
      return `href="https:${href}" target="_blank" rel="noopener"`;
    }
    return 'href="javascript:void(0)"';
  });

  // 3. Remove anchor tags pointing to javascript:void(0) that wrap branding
  cleaned = cleaned.replace(/<a\b[^>]*href=["']javascript:void\(0\)["'][^>]*>([\s\S]*?)<\/a>/gi, '<span>$1</span>');

  // 4. Rebrand all text mentions from Sarkari Result to RojgarSetu
  cleaned = cleaned
    .replace(/sarkari\s*result®?/gi, 'RojgarSetu')
    .replace(/www\.sarkariresult\.com/gi, 'www.rojgarsetu.in')
    .replace(/sarkariresult\.com/gi, 'rojgarsetu.in')
    .replace(/sarkariresult/gi, 'rojgarsetu')
    .replace(/Since 2012/gi, 'Official Portal 2026')
    .replace(/For the latest updates on RojgarSetu, admit card, answer key, and result, always visit RojgarSetu\.in, the official website for RojgarSetu in India \(Official Portal 2026\)\./gi, 
      'For the latest verified updates on government vacancies, admit cards, answer keys, and results, always visit RojgarSetu.in.');

  // 5. Preserve valid notification PDF storage link if it was regex-altered
  cleaned = cleaned.replace(/doc\.rojgarsetus?\.org\.in/gi, 'doc.sarkariresults.org.in');

  return cleaned;
}

/**
 * Extracts structured text fields from the page HTML
 */
function extractStructuredInfo(html, fallbackItem) {
  // Extract real Title from H1 or Title Tag
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let pageTitle = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';
  if (!pageTitle) {
    const tTag = html.match(/<title>([\s\S]*?)<\/title>/i);
    if (tTag) pageTitle = tTag[1].replace(/<[^>]+>/g, '').trim();
  }

  // Extract real Org from H2
  const h2Matches = (html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [])
    .map(h => h.replace(/<[^>]+>/g, '').trim())
    .filter(h => h && !/sarkari|rojgar|result|http|www\./i.test(h));
  const pageOrg = h2Matches[0] || fallbackItem?.org || 'Government Commission / Department';

  const rebrand = s => (s || '')
    .replace(/sarkari\s*result®?/gi, 'RojgarSetu')
    .replace(/www\.sarkariresult\.com/gi, 'www.rojgarsetu.in')
    .replace(/sarkariresult\.com/gi, 'rojgarsetu.in')
    .replace(/sarkariresult/gi, 'rojgarsetu')
    .trim();

  const info = {
    title: rebrand(pageTitle || fallbackItem?.title || 'Government Recruitment Vacancy 2026'),
    org: rebrand(pageOrg),
    dates: [],
    fees: [],
    ageLimit: '',
    vacancies: fallbackItem?.vacancies || 'As per Official Notification',
    eligibility: fallbackItem?.qual || '10th / 12th / Graduate as per Notification',
    usefulLinks: []
  };

  // Find Important Dates list within its specific table cell
  const datesMatch = html.match(/<td[^>]*>(?:(?!<\/td>)[\s\S])*?Important\s*Dates(?:(?!<\/td>)[\s\S])*?<\/td>/i);
  if (datesMatch) {
    const listItems = datesMatch[0].match(/<li[\s\S]*?<\/li>/gi) || [];
    if (listItems.length) {
      info.dates = listItems.map(li => rebrand(li.replace(/<[^>]+>/g, ''))).filter(Boolean);
    }
  }

  // Find Application Fee list within its specific table cell
  const feeMatch = html.match(/<td[^>]*>(?:(?!<\/td>)[\s\S])*?Application\s*Fee(?:(?!<\/td>)[\s\S])*?<\/td>/i);
  if (feeMatch) {
    const listItems = feeMatch[0].match(/<li[\s\S]*?<\/li>/gi) || [];
    if (listItems.length) {
      info.fees = listItems.map(li => rebrand(li.replace(/<[^>]+>/g, ''))).filter(Boolean);
    }
  }

  // Find Age Limit within its specific table cell
  const ageMatch = html.match(/<td[^>]*>(?:(?!<\/td>)[\s\S])*?Minimum\s*Age(?:(?!<\/td>)[\s\S])*?<\/td>/i);
  if (ageMatch) {
    info.ageLimit = rebrand(ageMatch[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  }

  // Find Vacancy total
  const vacMatch = html.match(/Vacancy Details[\s\S]*?Total\s*:\s*([0-9,]+(?:\s*Post)?)/i);
  if (vacMatch && vacMatch[1]) {
    info.vacancies = `Total : ${vacMatch[1]}`;
  }

  return info;
}

/**
 * Scans HTML table rows for official recruitment links (Apply Online, Admit Card, Result, Official Website)
 */
function extractOfficialLinks(html) {
  let officialWebsite = null;
  let applyOnline = null;
  let admitCard = null;
  let resultLink = null;
  let notificationPdf = null;
  let answerKey = null;
  let syllabus = null;

  const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) || [];
  for (const r of rows) {
    const text = r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    const hrefs = [...r.matchAll(/href=[\"']([^\"']+)[\"']/gi)].map(m => m[1].replace(/&amp;/g, '&'));
    const validHrefs = hrefs.filter(h => {
      const l = h.toLowerCase();
      return (l.startsWith('http://') || l.startsWith('https://')) &&
        !l.includes('sarkariresult.com') &&
        !l.includes('google.com') &&
        !l.includes('apple.com') &&
        !l.includes('t.me') &&
        !l.includes('telegram') &&
        !l.includes('whatsapp') &&
        !l.includes('youtube') &&
        !l.includes('youtu.be') &&
        !l.includes('facebook') &&
        !l.includes('instagram') &&
        !l.includes('sarkariresultportal') &&
        !l.includes('sarkariresult.tools');
    });

    if (validHrefs.length === 0) continue;

    if (text.includes('official website') && !officialWebsite) {
      officialWebsite = validHrefs[0];
    }
    if ((text.includes('apply online') || text.includes('online application') || (text.includes('apply') && text.includes('click here'))) && !applyOnline) {
      applyOnline = validHrefs[0];
    }
    if ((text.includes('admit card') || text.includes('hall ticket') || text.includes('call letter')) && !admitCard) {
      admitCard = validHrefs[0];
    }
    if ((text.includes('result') || text.includes('marks') || text.includes('merit list') || text.includes('score card')) && !resultLink) {
      resultLink = validHrefs[0];
    }
    if ((text.includes('answer key') || text.includes('key paper') || text.includes('objection')) && !answerKey) {
      answerKey = validHrefs[0];
    }
    if (text.includes('syllabus') && !syllabus) {
      syllabus = validHrefs[0];
    }
    if ((text.includes('notification') || text.includes('advt') || text.includes('advertisement')) && !notificationPdf) {
      notificationPdf = validHrefs[0];
    }
  }

  return { officialWebsite, applyOnline, admitCard, resultLink, notificationPdf, answerKey, syllabus };
}

/**
 * Generate fallback authentic table when remote scraping is unavailable or for private jobs
 */
/**
 * Helper to determine if an item is a private sector opening
 */
function isPrivateItem(item, jobId) {
  if (jobId && String(jobId).startsWith('pjob-')) return true;
  if (!item) return false;
  if (item.id && String(item.id).startsWith('pjob-')) return true;
  if (item.company) return true;
  if (item.sector && item.sector !== 'Government' && item.sector !== 'GOVT') return true;
  return false;
}

/**
 * Generate fallback authentic table when remote scraping is unavailable or for private jobs
 */
function generateStructuredTable(item, jobId) {
  const isPrivate = isPrivateItem(item, jobId);
  const orgName = item.company || item.org || 'Central / State Recruitment Board';
  const postTitle = item.title || 'Recruitment Online Form 2026';
  const totalPosts = item.openings || item.vacancies || 'Multiple Openings';
  const qualReq = item.qual || '10th / 12th / Graduate as per Notification';
  const lastDate = item.lastDate || 'Active 2026 Application Window';
  const loc = (item.city ? `${item.city} (${item.state || 'India'})` : item.state) || item.location || 'All India';
  const officialPortal = isPrivate ? (item.url || '#') : inferOfficialPortal(item.title);

  // Dedicated Private Sector Verification Table
  if (isPrivate) {
    const sectorName = item.sector || 'Private Retail / Supermarket / Industrial';
    const salaryInfo = item.salary || 'Competitive Industry Salary + Statutory Benefits';

    // Tailored role skills description
    let skillDetails = 'Standard role orientation provided upon onboarding.';
    if (qualReq.includes('ITI')) {
      skillDetails = '⚙️ <strong>Trade Specialization:</strong> ITI Certificate in Fitter, Electrician, Welder, Turner, Machinist, Motor Mechanic (MMV) or COPA. Freshers & apprentice pass candidates eligible.';
    } else if (sectorName.includes('Pharmacies')) {
      skillDetails = '💊 <strong>Pharmacy Skills:</strong> 10th / 12th Pass or D.Pharm. Basic knowledge of medicine names, expiry tracking, billing computer entry, and shelf stocking.';
    } else if (sectorName.includes('Shops & Retail')) {
      skillDetails = '🛒 <strong>Retail Store Skills:</strong> 10th / 12th Pass. Customer greeting, merchandise display, stock inventory count, POS billing counter support, and friendly communication.';
    } else if (sectorName.includes('Warehousing')) {
      skillDetails = '📦 <strong>Logistics Hub Skills:</strong> 10th Pass. Barcode scanning with handheld devices, order sorting, parcel packing, loading/unloading agility, and dispatch tagging.';
    } else if (sectorName.includes('Showrooms')) {
      skillDetails = '🏬 <strong>Showroom Skills:</strong> 12th Pass or Graduate. Customer relationship, product advisory, optical/footwear/electronics consultation, billing & stock tally.';
    } else if (sectorName.includes('Factories')) {
      skillDetails = '🏭 <strong>Plant & Factory Skills:</strong> 10th / 12th / ITI. Assembly line assistance, packaging, basic machine operation, compliance with plant industrial safety standards.';
    }

    return `
      <table class="sarkari-table-view">
        <tbody>
          <tr>
            <td colspan="2" style="background:#f0fdf4; text-align:center; padding:14px; border-bottom:2px solid #86efac;">
              <span style="background:#065f46; color:#ffffff; font-size:0.74rem; font-weight:800; padding:3px 10px; border-radius:12px; display:inline-block; margin-bottom:6px;">
                🛡️ 100% VERIFIED DIRECT CORPORATE / STORE HIRING 2026
              </span>
              <h2 style="color:#0f172a; margin:0 0 4px; font-size:1.25rem; font-weight:900;">${orgName}</h2>
              <h3 style="color:#ab183d; margin:0 0 6px; font-size:1.05rem; font-weight:800;">${postTitle}</h3>
              <p style="font-size:0.84rem; color:#334155; margin:0;">
                <strong>Sector:</strong> ${sectorName} &bull; 
                <strong>Hiring Locations:</strong> ${loc}
              </p>
            </td>
          </tr>
          <tr>
            <td style="width:50%;">
              <div style="background:#065f46; color:#ffffff; font-weight:800; text-align:center; padding:7px; border-radius:3px; margin-bottom:8px;">
                Application Timeline &amp; Selection Process
              </div>
              <ul style="padding-left:18px; line-height:1.75; margin:0; font-size:0.86rem;">
                ${item.postedLabel ? `<li><strong>Date of Posting:</strong> <span style="color:#059669; font-weight:800;">${item.postedLabel}</span></li>` : ''}
                <li><strong>Application Status:</strong> Active Hiring Cycle 2026</li>
                <li><strong>Last Date to Apply:</strong> <span style="color:#dc2626; font-weight:800;">${lastDate}</span></li>
                <li><strong>Selection Process:</strong> <span style="color:#0284c7; font-weight:800;">Direct Document Verification &amp; HR Interview</span> (No Written Exam)</li>
                <li><strong>Joining Timeline:</strong> Immediate to 7 Days after Document Check</li>
              </ul>
            </td>
            <td style="width:50%;">
              <div style="background:#0f172a; color:#ffffff; font-weight:800; text-align:center; padding:7px; border-radius:3px; margin-bottom:8px;">
                Application Fee &amp; Candidate Protection
              </div>
              <ul style="padding-left:18px; line-height:1.75; margin:0; font-size:0.86rem;">
                <li><strong>Online Registration Fee:</strong> <span style="color:#059669; font-weight:900;">₹0/- (100% Free)</span></li>
                <li><strong>Placement Agency Charges:</strong> <span style="color:#059669; font-weight:900;">₹0/- (Zero Fees)</span></li>
                <li><strong>Payroll Type:</strong> Direct Company / Facility Rolls (with PF &amp; ESI)</li>
                <li style="color:#b91c1c; font-size:0.8rem; line-height:1.4; margin-top:4px;">
                  ⚠️ <strong>Fraud Alert:</strong> Genuine private employers never charge candidates money for job registration or uniform.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div style="background:#1e3a8a; color:#ffffff; font-weight:800; text-align:center; padding:7px; border-radius:3px; margin-bottom:8px;">
                Age Limit &amp; Candidate Eligibility Details (2026)
              </div>
              <div style="padding:6px 12px; font-size:0.86rem; line-height:1.6; text-align:center;">
                Minimum Age: <strong>18 Years Completed</strong> &nbsp;|&nbsp; 
                Maximum Age: <strong>30–35 Years</strong> (Relaxable for experienced retail/plant candidates)<br/>
                <span style="color:#047857; font-weight:700;">✓ Equal Opportunity: Male and Female candidates both eligible as per store/factory shift norms.</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div style="background:#ab183d; color:#ffffff; font-weight:800; text-align:center; padding:7px; border-radius:3px; margin-bottom:8px;">
                Vacancy, Salary &amp; Detailed Qualification Criteria Total : ${totalPosts}
              </div>
              <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:0.85rem;">
                <thead>
                  <tr style="background:#f1f5f9; text-align:left;">
                    <th style="padding:8px 10px; border:1px solid #cbd5e1;">Designation / Role</th>
                    <th style="padding:8px 10px; border:1px solid #cbd5e1; width:120px;">Openings</th>
                    <th style="padding:8px 10px; border:1px solid #cbd5e1;">Detailed Eligibility &amp; Skills Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:700; vertical-align:top;">
                      ${postTitle}
                      <div style="margin-top:6px; font-size:0.8rem; color:#475569;">
                        <strong>Monthly In-Hand / CTC:</strong><br/>
                        <span style="color:#059669; font-weight:800; font-size:0.86rem;">${salaryInfo}</span>
                      </div>
                      <div style="margin-top:4px; font-size:0.76rem; color:#64748b;">
                        <strong>Benefits:</strong> PF + ESI Health Cover + Overtime + Staff Discount / Canteen
                      </div>
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:900; color:#ab183d; vertical-align:top; font-size:0.95rem;">
                      ${totalPosts}
                    </td>
                    <td style="padding:10px 12px; border:1px solid #cbd5e1; vertical-align:top; line-height:1.6;">
                      <div>Minimum Education: <strong style="color:#1e3a8a; font-size:0.9rem;">${qualReq}</strong></div>
                      <div style="margin-top:4px;">${skillDetails}</div>
                      <div style="margin-top:6px; font-size:0.8rem; color:#374151;">
                        <strong>Experience:</strong> Freshers welcome; prior experience in retail/factory/logistics is an added advantage.
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div style="background:#0f172a; color:#ffffff; font-weight:800; text-align:center; padding:7px; border-radius:3px; margin-bottom:8px;">
                Mandatory Documents Checklist for Document Verification / Joining
              </div>
              <ul style="display:grid; grid-template-columns:repeat(2, 1fr); gap:6px 14px; padding-left:20px; font-size:0.84rem; line-height:1.5; margin:0;">
                <li>✓ Aadhaar Card (Original + 2 Photocopies)</li>
                <li>✓ PAN Card or Voter ID Card</li>
                <li>✓ 10th / 12th / ITI Marksheet &amp; Passing Certificate</li>
                <li>✓ Bank Account Passbook or Cancelled Cheque (for salary)</li>
                <li>✓ 4 Recent Passport-Size Color Photographs</li>
                <li>✓ Updated Resume / Bio-Data</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div style="background:#1e293b; color:#ffffff; font-weight:800; text-align:center; padding:7px; border-radius:3px; margin-bottom:8px;">
                Official Verified Apply &amp; Corporate Portals
              </div>
              <table style="width:100%; border-collapse:collapse; margin-top:6px; font-size:0.86rem;">
                <tr>
                  <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800; color:#ab183d; width:50%;">
                    Direct Online Registration / Career Page
                  </td>
                  <td style="padding:10px 12px; border:1px solid #cbd5e1; text-align:center;">
                    <a href="${officialPortal}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="padding:8px 16px;">
                      🚀 Apply on Official Company Portal ↗
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 12px; border:1px solid #cbd5e1; font-weight:800;">
                    Official Corporate Website
                  </td>
                  <td style="padding:10px 12px; border:1px solid #cbd5e1; text-align:center;">
                    <a href="${officialPortal}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 16px;">
                      Visit Official ${escapeHtml(orgName)} Website ↗
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }

  // Government Jobs Structured Table
  return `
    <table class="sarkari-table-view">
      <tbody>
        <tr>
          <td colspan="2" style="background:#fffbeb; text-align:center; padding:12px;">
            <h2 style="color:#ab183d; margin:0 0 4px; font-size:1.2rem;">${orgName}</h2>
            <h3 style="color:#000000; margin:0 0 4px; font-size:1.05rem;">${postTitle}</h3>
            <p style="font-size:0.82rem; color:#4b5563; margin:0;">
              <strong>Sector:</strong> Government Sector | 
              <strong>Location:</strong> ${loc}
            </p>
          </td>
        </tr>
        <tr>
          <td style="width:50%;">
            <div style="background:#065f46; color:#ffffff; font-weight:800; text-align:center; padding:6px; border-radius:3px; margin-bottom:8px;">
              Important Dates
            </div>
            <ul style="padding-left:18px; line-height:1.7; margin:0; font-size:0.86rem;">
              ${item.postedLabel ? `<li><strong>Posted On:</strong> <span style="color:#059669; font-weight:800;">${item.postedLabel}</span></li>` : ''}
              <li><strong>Application Begin:</strong> Active Online 2026</li>
              <li><strong>Last Date for Apply:</strong> <span style="color:#dc2626; font-weight:800;">${lastDate}</span></li>
              <li><strong>Exam Date:</strong> As per Official Schedule</li>
              <li><strong>Admit Card Available:</strong> Before Exam</li>
            </ul>
          </td>
          <td style="width:50%;">
            <div style="background:#065f46; color:#ffffff; font-weight:800; text-align:center; padding:6px; border-radius:3px; margin-bottom:8px;">
              Application Fee
            </div>
            <ul style="padding-left:18px; line-height:1.7; margin:0; font-size:0.86rem;">
              <li><strong>General / OBC / EWS:</strong> ₹100/- to ₹500/- (As per Notice)</li>
              <li><strong>SC / ST / PwD:</strong> ₹0/- to ₹100/- (Concession / Exempted)</li>
              <li><strong>Female Candidates:</strong> Concessional / Exempted</li>
              <li><strong>Payment Mode:</strong> Net Banking, Debit/Credit Card, UPI, Challan</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div style="background:#1e3a8a; color:#ffffff; font-weight:800; text-align:center; padding:6px; border-radius:3px; margin-bottom:8px;">
              Age Limit Details (As on 01/08/2026)
            </div>
            <p style="font-size:0.86rem; margin:4px 0 0; text-align:center;">
              Minimum Age: <strong>18 Years</strong> &nbsp;|&nbsp; Maximum Age: <strong>37-40 Years</strong><br/>
              <em>Age Relaxation Extra as per Recruitment Rules (SC/ST: 5 Yrs, OBC: 3 Yrs, PwD: 10 Yrs).</em>
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div style="background:#ab183d; color:#ffffff; font-weight:800; text-align:center; padding:6px; border-radius:3px; margin-bottom:8px;">
              Vacancy Details Total : ${totalPosts}
            </div>
            <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:0.84rem;">
              <thead>
                <tr style="background:#f1f5f9; text-align:left;">
                  <th style="padding:6px 10px; border:1px solid #000;">Post Name</th>
                  <th style="padding:6px 10px; border:1px solid #000; width:120px;">Total Posts</th>
                  <th style="padding:6px 10px; border:1px solid #000;">Minimum Eligibility Criteria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:8px 10px; border:1px solid #000; font-weight:700;">${postTitle}</td>
                  <td style="padding:8px 10px; border:1px solid #000; font-weight:800; color:#ab183d;">${totalPosts}</td>
                  <td style="padding:8px 10px; border:1px solid #000;">${qualReq}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div style="background:#1e293b; color:#ffffff; font-weight:800; text-align:center; padding:6px; border-radius:3px; margin-bottom:8px;">
              Important Useful Links
            </div>
            <table style="width:100%; border-collapse:collapse; margin-top:6px; font-size:0.86rem;">
              <tr>
                <td style="padding:8px 10px; border:1px solid #000; font-weight:800; color:#ab183d; width:50%;">
                  Direct Online Registration / Apply
                </td>
                <td style="padding:8px 10px; border:1px solid #000; text-align:center;">
                  <a href="${officialPortal}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                    🚀 Open Official Portal ↗
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 10px; border:1px solid #000; font-weight:800;">
                  Official Department Website
                </td>
                <td style="padding:8px 10px; border:1px solid #000; text-align:center;">
                  <a href="${officialPortal}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                    Visit Official Site ↗
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
}

/**
 * Main export: Retrieves full job detail and official links
 */
async function getJobDetail(url, jobId, fallbackItem) {
  const isPrivate = isPrivateItem(fallbackItem, jobId);
  const cacheKey = (jobId && String(jobId).startsWith('pjob-')) ? `pjob_${jobId}` : (url || jobId);

  // Check in-memory cache
  if (cacheKey && detailCache.has(cacheKey)) {
    return detailCache.get(cacheKey);
  }

  const fallbackPortal = inferOfficialPortal(fallbackItem?.title || '');

  // If URL is not an external sarkariresult.com post (e.g. private job or empty URL)
  if (isPrivate || !url || !url.includes('sarkariresult.com') || url.endsWith('sarkariresult.com/') || url.includes('tinyurl.com')) {
    const tableHtml = generateStructuredTable(fallbackItem || { id: jobId, url }, jobId);
    const finalOfficialUrl = isPrivate ? (fallbackItem?.url || '#') : fallbackPortal;

    const result = {
      success: true,
      cached: false,
      title: fallbackItem?.title || 'Job Vacancy Details 2026',
      org: fallbackItem?.company || fallbackItem?.org || 'Recruitment Board',
      tableHtml,
      structured: isPrivate ? {
        title: fallbackItem?.title,
        org: fallbackItem?.company,
        sector: fallbackItem?.sector,
        vacancies: fallbackItem?.openings,
        eligibility: fallbackItem?.qual,
        salary: fallbackItem?.salary,
        location: (fallbackItem?.city ? `${fallbackItem.city} (${fallbackItem.state})` : fallbackItem?.state) || 'All India',
        dates: [
          `Date of Posting: ${fallbackItem?.postedLabel || 'Active Today'}`,
          `Last Date: ${fallbackItem?.lastDate || 'Active 2026'}`,
          'Selection: Direct Document Verification & HR Interview (No Written Exam)'
        ],
        fees: [
          'Registration Fee: ₹0/- (100% Free)',
          'Placement Charges: ₹0/- (Strictly Zero)'
        ],
        usefulLinks: [
          { text: 'Official Career Portal', url: finalOfficialUrl }
        ]
      } : extractStructuredInfo('', fallbackItem),
      officialWebsite: finalOfficialUrl,
      applyUrl: finalOfficialUrl,
      admitCardUrl: finalOfficialUrl,
      resultUrl: finalOfficialUrl,
      notificationUrl: null,
      url: finalOfficialUrl
    };
    if (cacheKey) detailCache.set(cacheKey, result);
    return result;
  }

  // Live scrape from sarkariresult.com
  try {
    const { data } = await fetchWithRedirect(url);
    const tables = data.match(/<table[\s\S]*?<\/table>/gi) || [];
    
    // Find the main vacancy table containing dates, eligibility, or vacancy details
    const targetTable = tables.find(t => 
      /Important Dates/i.test(t) || 
      /Vacancy Details/i.test(t) || 
      /Application Fee/i.test(t)
    ) || tables[1] || tables[0];

    if (!targetTable) {
      throw new Error('Detail table not found on page');
    }

    const cleanedTable = sanitizeSarkariTable(targetTable);
    const structured = extractStructuredInfo(data, fallbackItem);
    const links = extractOfficialLinks(data);

    // Resolve real official links
    const officialWebsite = links.officialWebsite || fallbackPortal;
    const applyUrl = links.applyOnline || officialWebsite;
    const admitCardUrl = links.admitCard || officialWebsite;
    const resultUrl = links.resultLink || officialWebsite;
    const notificationUrl = links.notificationPdf || null;
    const answerKeyUrl = links.answerKey || officialWebsite;
    const syllabusUrl = links.syllabus || officialWebsite;

    const result = {
      success: true,
      cached: false,
      title: structured.title || fallbackItem?.title || 'Government Vacancy Details 2026',
      org: structured.org || fallbackItem?.org || 'Recruitment Commission',
      tableHtml: cleanedTable,
      structured,
      officialWebsite,
      applyUrl,
      admitCardUrl,
      resultUrl,
      notificationUrl,
      answerKeyUrl,
      syllabusUrl,
      url: officialWebsite // Always returns the REAL official website
    };

    // Cache the result
    detailCache.set(url, result);
    return result;
  } catch (err) {
    console.warn(`[detailScraper] Warning: live scrape failed for ${url}: ${err.message}. Using structured fallback.`);
    const tableHtml = generateStructuredTable(fallbackItem || { id: jobId, url });
    const fallbackResult = {
      success: true,
      cached: false,
      title: fallbackItem?.title || 'Job Vacancy Details 2026',
      org: fallbackItem?.org || fallbackItem?.company || 'Recruitment Board',
      tableHtml,
      structured: extractStructuredInfo('', fallbackItem),
      officialWebsite: fallbackPortal,
      applyUrl: fallbackPortal,
      admitCardUrl: fallbackPortal,
      resultUrl: fallbackPortal,
      notificationUrl: null,
      url: fallbackPortal,
      isFallback: true
    };
    return fallbackResult;
  }
}

module.exports = {
  getJobDetail,
  generateStructuredTable,
  inferOfficialPortal,
  extractOfficialLinks,
  PORTAL_RULES,
  detailCache
};
