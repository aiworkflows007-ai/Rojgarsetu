const https = require('https');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function cleanHtml(raw) {
  if (!raw) return '';
  return raw
    .replace(/<table[^>]*>[\s\S]*?<\/table>/gi, match => {
      // Clean simple tables if fraction
      const divs = match.match(/<td class="ga-td-divident">([^<]+)<\/td>[\s\S]*?<td class="ga-td-divisor">([^<]+)<\/td>/i);
      if (divs) return `(${divs[1].trim()} / ${divs[2].trim()})`;
      return match.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    })
    .replace(/<br\s*[\/]?>/gi, '\n')
    .replace(/<p>/gi, '')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8230;/g, '...')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseIndiaBixQuestions(html) {
  const questions = [];
  const containerRegex = /<div class="bix-div-container">([\s\S]*?)(?=<hr><div class="bix-div-container">|<\/div>\s*<div class="row no-gutters bix-pagination-wrapper"|<\/div>\s*<\/div>\s*<\/section>)/gi;
  
  let match;
  let qNum = 1;
  while ((match = containerRegex.exec(html)) !== null) {
    const block = match[1];

    // 1. Question text
    const qMatch = block.match(/<div class="bix-td-qtxt[^"]*">([\s\S]*?)<\/div>/i);
    const qText = qMatch ? cleanHtml(qMatch[1]) : '';

    // 2. Options
    const optRegex = /<div class="bix-td-option-val[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
    const options = [];
    let optMatch;
    while ((optMatch = optRegex.exec(block)) !== null) {
      options.push(cleanHtml(optMatch[1]));
    }

    // 3. Answer Letter
    const ansMatch = block.match(/<input type="hidden" class="jq-hdnakq"[^>]*value="([A-E])"/i);
    const ansLetter = ansMatch ? ansMatch[1].toUpperCase() : 'A';
    const letterToIdx = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4 };
    const ansIdx = letterToIdx[ansLetter] !== undefined ? letterToIdx[ansLetter] : 0;

    // 4. Explanation
    const expMatch = block.match(/<div class="bix-ans-description[^"]*">([\s\S]*?)<\/div>/i);
    const explanation = expMatch ? cleanHtml(expMatch[1]) : '';

    if (qText && options.length >= 2) {
      questions.push({
        id: qNum++,
        q: qText,
        options,
        ans: ansIdx,
        ansLetter,
        explanation
      });
    }
  }

  return questions;
}

(async () => {
  try {
    console.log('Fetching IndiaBIX Time and Work...');
    const html = await fetchHtml('https://www.indiabix.com/aptitude/time-and-work/');
    const qs = parseIndiaBixQuestions(html);
    console.log(`Parsed ${qs.length} questions!`);
    if (qs.length > 0) {
      console.log('Sample Q1:');
      console.log('Question:', qs[0].q);
      console.log('Options:', qs[0].options);
      console.log('Answer:', qs[0].ansLetter, '(Index:', qs[0].ans, ')');
      console.log('Explanation preview:', qs[0].explanation.substring(0, 150));
    }
  } catch (err) {
    console.error('Error:', err);
  }
})();
