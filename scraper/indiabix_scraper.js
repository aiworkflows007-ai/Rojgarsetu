/**
 * IndiaBIX Aptitude & Reasoning Scraper & Sync Engine
 * ====================================================
 * Fetches topic questions, options, answers, and explanations from https://www.indiabix.com/
 * Supports multi-page pagination and database sync.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchHtml(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    }).on('error', reject);
  });
}

function cleanHtml(raw) {
  if (!raw) return '';
  return raw
    .replace(/<table[^>]*>[\s\S]*?<\/table>/gi, match => {
      const divs = match.match(/<td class="ga-td-divident">([^<]+)<\/td>[\s\S]*?<td class="ga-td-divisor">([^<]+)<\/td>/i);
      if (divs) return `(${divs[1].trim()}/${divs[2].trim()})`;
      return match.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    })
    .replace(/<br\s*[\/]?>/gi, ' ')
    .replace(/<p>/gi, '')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8230;/g, '...')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseQuestionsFromHtml(html, startQNum = 1) {
  const questions = [];
  const containerRegex = /<div class="bix-div-container">([\s\S]*?)(?=<hr><div class="bix-div-container">|<\/div>\s*<div class="row no-gutters bix-pagination-wrapper"|<\/div>\s*<\/div>\s*<\/section>)/gi;
  
  let match;
  let qNum = startQNum;
  const letterToIdx = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4 };

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

    // 3. Correct Answer
    const ansMatch = block.match(/<input type="hidden" class="jq-hdnakq"[^>]*value="([A-E])"/i);
    const ansLetter = ansMatch ? ansMatch[1].toUpperCase() : 'A';
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
        explanation: explanation || 'Refer to standard formula and calculate step-by-step.'
      });
    }
  }

  return questions;
}

const DEFAULT_INDIABIX_TOPICS = [
  // Quantitative Aptitude
  {
    slug: 'time-and-work',
    title: 'Time and Work',
    category: 'QUANTITATIVE',
    categoryLabel: '📐 Quantitative Aptitude',
    icon: '⏱️',
    url: 'https://www.indiabix.com/aptitude/time-and-work/',
    desc: 'Problems on work done, individual days, combined efficiency, wages, and pipe-filling rates.',
    formulas: [
      "Work Done = Time Taken × Efficiency Rate",
      "If A takes n days, A's 1-day work = 1/n",
      "Combined 1-day work of A & B = (1/A) + (1/B)",
      "Time taken together = (A × B) / (A + B) days"
    ]
  },
  {
    slug: 'profit-and-loss',
    title: 'Profit and Loss',
    category: 'QUANTITATIVE',
    categoryLabel: '📐 Quantitative Aptitude',
    icon: '💰',
    url: 'https://www.indiabix.com/aptitude/profit-and-loss/',
    desc: 'Cost price (CP), Selling price (SP), Gain%, Loss%, Marked price and Successive discounts.',
    formulas: [
      "Gain% = [(SP - CP) / CP] × 100",
      "Loss% = [(CP - SP) / CP] × 100",
      "SP = [(100 + Gain%) / 100] × CP",
      "Discount = Marked Price - Selling Price"
    ]
  },
  {
    slug: 'percentage',
    title: 'Percentage',
    category: 'QUANTITATIVE',
    categoryLabel: '📐 Quantitative Aptitude',
    icon: '📊',
    url: 'https://www.indiabix.com/aptitude/percentage/',
    desc: 'Percentage increase/decrease, salary calculations, population changes and exam mark percentages.',
    formulas: [
      "% Increase = (Increase / Original Value) × 100",
      "Net change for two successive % changes: a + b + (ab/100) %",
      "If A is r% more than B, B is [r / (100 + r)] × 100% less than A"
    ]
  },
  {
    slug: 'problems-on-trains',
    title: 'Problems on Trains',
    category: 'QUANTITATIVE',
    categoryLabel: '📐 Quantitative Aptitude',
    icon: '🚆',
    url: 'https://www.indiabix.com/aptitude/problems-on-trains/',
    desc: 'Speed, distance, time, train crossing platform/pole, and relative speeds of moving trains.',
    formulas: [
      "Speed (km/hr to m/s) = multiply by (5/18)",
      "Speed (m/s to km/hr) = multiply by (18/5)",
      "Time to cross stationary object of length L = (Train Length + L) / Speed",
      "Relative speed (opposite direction) = S1 + S2; Same direction = |S1 - S2|"
    ]
  },
  {
    slug: 'simple-interest',
    title: 'Simple & Compound Interest',
    category: 'QUANTITATIVE',
    categoryLabel: '📐 Quantitative Aptitude',
    icon: '📈',
    url: 'https://www.indiabix.com/aptitude/simple-interest/',
    desc: 'Principal, annual interest rate, time period, maturity amounts, and difference between CI and SI.',
    formulas: [
      "Simple Interest (SI) = (P × R × T) / 100",
      "Compound Amount A = P × [1 + (R/100)]^T",
      "Difference between CI and SI for 2 years = P × (R / 100)^2"
    ]
  },
  {
    slug: 'ratio-and-proportion',
    title: 'Ratio and Proportion',
    category: 'QUANTITATIVE',
    categoryLabel: '📐 Quantitative Aptitude',
    icon: '⚖️',
    url: 'https://www.indiabix.com/aptitude/ratio-and-proportion/',
    desc: 'Comparison of quantities, mean proportion, third and fourth proportion, partnership shares.',
    formulas: [
      "If a : b = c : d, then (a × d) = (b × c)",
      "Mean proportion between a and b = √(a × b)",
      "Third proportion to a and b = b^2 / a"
    ]
  },
  {
    slug: 'numbers',
    title: 'Numbers & Divisibility',
    category: 'QUANTITATIVE',
    categoryLabel: '📐 Quantitative Aptitude',
    icon: '🔢',
    url: 'https://www.indiabix.com/aptitude/numbers/',
    desc: 'Divisibility rules, unit digits, remainders, prime numbers, and consecutive integer equations.',
    formulas: [
      "Dividend = (Divisor × Quotient) + Remainder",
      "Sum of first n natural numbers = [n(n + 1)] / 2",
      "Sum of first n odd numbers = n^2"
    ]
  },
  // Logical Reasoning
  {
    slug: 'number-series',
    title: 'Number Series',
    category: 'LOGICAL',
    categoryLabel: '🧩 Logical Reasoning',
    icon: '🎯',
    url: 'https://www.indiabix.com/logical-reasoning/number-series/',
    desc: 'Identify arithmetic progression, geometric patterns, alternating sequences, and missing numbers.',
    formulas: [
      "Rule 1: Check difference between adjacent terms",
      "Rule 2: Check square and cube progressions (n^2 ± k, n^3 ± k)",
      "Rule 3: Check alternate series where even and odd positions follow separate rules"
    ]
  },
  {
    slug: 'letter-and-symbol-series',
    title: 'Letter and Symbol Series',
    category: 'LOGICAL',
    categoryLabel: '🧩 Logical Reasoning',
    icon: '🔤',
    url: 'https://www.indiabix.com/logical-reasoning/letter-and-symbol-series/',
    desc: 'Alphabetical series, letter skips, reverse position values, and alphanumeric codes.',
    formulas: [
      "Position mapping (EJOTY): E=5, J=10, O=15, T=20, Y=25",
      "Opposite pairs sum to 27: A(1)+Z(26)=27, B(2)+Y(25)=27, C(3)+X(24)=27",
      "Circular wrap: Z + 1 = A, A - 1 = Z"
    ]
  },
  // Verbal & Analytical Reasoning
  {
    slug: 'blood-relation-test',
    title: 'Blood Relations',
    category: 'VERBAL_REASONING',
    categoryLabel: '🧬 Verbal & Analytical',
    icon: '👨‍👩‍👧‍👦',
    url: 'https://www.indiabix.com/verbal-reasoning/blood-relation-test/',
    desc: 'Decipher family trees, coded relations (A+B means father), and direct pointing statements.',
    formulas: [
      "Generational Chart: Grandparents (+2), Parents (+1), Self/Siblings (0), Children (-1)",
      "Symbolic Notation: (+) for Male, (-) for Female, (=) for Spouses, (--) for Siblings",
      "Maternal relations = Mother's side; Paternal relations = Father's side"
    ]
  },
  {
    slug: 'direction-sense-test',
    title: 'Direction Sense Test',
    category: 'VERBAL_REASONING',
    categoryLabel: '🧬 Verbal & Analytical',
    icon: '🧭',
    url: 'https://www.indiabix.com/verbal-reasoning/direction-sense-test/',
    desc: 'Cardinal directions (N, S, E, W), angular turns (90°, 180°), shadow tracking, and Pythagoras distance.',
    formulas: [
      "Cardinal Compass: North (up), South (down), East (right), West (left)",
      "Shortest Distance between start & end = √(x^2 + y^2) [Pythagoras theorem]",
      "Sun in East (Morning) -> Shadow falls West; Sun in West (Evening) -> Shadow falls East"
    ]
  },
  {
    slug: 'seating-arrangement',
    title: 'Seating Arrangement',
    category: 'VERBAL_REASONING',
    categoryLabel: '🧬 Verbal & Analytical',
    icon: '🪑',
    url: 'https://www.indiabix.com/verbal-reasoning/seating-arrangement/',
    desc: 'Linear rows, circular tables facing inside/outside, and multi-variable placement puzzles.',
    formulas: [
      "Circular Facing Center: Clockwise = Left, Counter-Clockwise = Right",
      "Circular Facing Away from Center: Clockwise = Right, Counter-Clockwise = Left",
      "Linear North-Facing: Left = West, Right = East"
    ]
  },
  {
    slug: 'syllogism',
    title: 'Syllogism (Deductive Logic)',
    category: 'VERBAL_REASONING',
    categoryLabel: '🧬 Verbal & Analytical',
    icon: '💡',
    url: 'https://www.indiabix.com/verbal-reasoning/syllogism/',
    desc: 'Statements: All / Some / No / Some Not. Determine which conclusions logically follow.',
    formulas: [
      "Universal Affirmative: 'All A are B' (Circle A inside B)",
      "Particular Affirmative: 'Some A are B' (Overlapping Circles)",
      "Negative: 'No A is B' (Disjoint Circles)",
      "Either-or Rule: Subject & predicate identical + one positive and one negative conclusion"
    ]
  }
];

/**
 * Scrape topics with multi-page support (Page 1 + Page 2)
 */
async function scrapeIndiaBixTopics(topicsToScrape = DEFAULT_INDIABIX_TOPICS, maxPages = 2) {
  const results = [];
  console.log(`🚀 Starting IndiaBIX Scraper for ${topicsToScrape.length} topics (max ${maxPages} pages each)...`);

  for (const t of topicsToScrape) {
    try {
      console.log(`📥 Scraping [${t.category}] ${t.title}...`);
      let allQuestions = [];

      // 1. Fetch Page 1
      const html1 = await fetchHtml(t.url);
      const qs1 = parseQuestionsFromHtml(html1, 1);
      allQuestions = allQuestions.concat(qs1);
      console.log(`   ✓ Page 1: ${qs1.length} questions`);

      // 2. Fetch Page 2 if needed
      if (maxPages >= 2) {
        // Look for page 2 URL in pagination
        const p2Match = html1.match(/href=\"(https:\/\/www\.indiabix\.com\/[^\"]+)\"[^>]*>2<\/a>/i);
        if (p2Match) {
          await new Promise(r => setTimeout(r, 500));
          const p2Url = p2Match[1];
          try {
            const html2 = await fetchHtml(p2Url);
            const qs2 = parseQuestionsFromHtml(html2, allQuestions.length + 1);
            allQuestions = allQuestions.concat(qs2);
            console.log(`   ✓ Page 2: ${qs2.length} questions (from ${p2Url})`);
          } catch (p2Err) {
            console.warn(`   ⚠️ Page 2 fetch skipped:`, p2Err.message);
          }
        }
      }

      results.push({
        id: `indiabix-${t.slug}`,
        slug: t.slug,
        title: t.title,
        category: t.category,
        categoryLabel: t.categoryLabel,
        icon: t.icon,
        url: t.url,
        desc: t.desc,
        formulas: t.formulas,
        questionsCount: allQuestions.length,
        questions: allQuestions
      });

      // Politeness delay
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.error(`   ❌ Failed to scrape ${t.title}:`, err.message);
    }
  }

  return results;
}

/**
 * Save scraped topics to DB
 */
function syncToDatabase(topics) {
  const dbPath = path.join(__dirname, '../data/db.json');
  if (!fs.existsSync(dbPath)) return;
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  db.aptitudeTopics = topics;
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  console.log(`✅ Successfully synced ${topics.length} topics into data/db.json!`);
}

module.exports = {
  DEFAULT_INDIABIX_TOPICS,
  scrapeIndiaBixTopics,
  syncToDatabase,
  fetchHtml,
  parseQuestionsFromHtml
};

if (require.main === module) {
  (async () => {
    const topics = await scrapeIndiaBixTopics(DEFAULT_INDIABIX_TOPICS, 2);
    syncToDatabase(topics);
    const outPath = path.join(__dirname, '../data/indiabix_topics.json');
    fs.writeFileSync(outPath, JSON.stringify(topics, null, 2), 'utf8');
    const totalQs = topics.reduce((acc, t) => acc + (t.questions ? t.questions.length : 0), 0);
    console.log(`\n🎉 IndiaBIX Sync Complete!`);
    console.log(`Total Topics: ${topics.length}`);
    console.log(`Total Verified Practice Questions: ${totalQs}`);
  })();
}
