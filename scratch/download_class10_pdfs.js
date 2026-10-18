const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'ncert_books', 'class10');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [];

// 1. Math Chapters 1 to 14 (English and Hindi)
for (let i = 1; i <= 14; i++) {
  const pad = String(i).padStart(2, '0');
  downloads.push({
    url: `https://ncert.nic.in/textbook/pdf/jemh1${pad}.pdf`,
    dest: path.join(targetDir, `math_ch${pad}.pdf`),
    name: `Math Ch ${i} (EN)`
  });
  downloads.push({
    url: `https://ncert.nic.in/textbook/pdf/jhmh1${pad}.pdf`,
    dest: path.join(targetDir, `math_ch${pad}_hi.pdf`),
    name: `Math Ch ${i} (HI)`
  });
}

// 2. Science Ch 1 (Chemical Reactions & Equations)
downloads.push({
  url: 'https://ncert.nic.in/textbook/pdf/jesc101.pdf',
  dest: path.join(targetDir, 'science_ch01.pdf'),
  name: 'Science Ch 1 (EN)'
});
downloads.push({
  url: 'https://ncert.nic.in/textbook/pdf/jhsc101.pdf',
  dest: path.join(targetDir, 'science_ch01_hi.pdf'),
  name: 'Science Ch 1 (HI)'
});

// 3. SST Ch 1 (Resources & Development)
downloads.push({
  url: 'https://ncert.nic.in/textbook/pdf/jess101.pdf',
  dest: path.join(targetDir, 'sst_ch01.pdf'),
  name: 'SST Ch 1 (EN)'
});
downloads.push({
  url: 'https://ncert.nic.in/textbook/pdf/jhss101.pdf',
  dest: path.join(targetDir, 'sst_ch01_hi.pdf'),
  name: 'SST Ch 1 (HI)'
});

// 4. Hindi Ch 1 (नेताजी का चश्मा - Kshitij Part 2)
downloads.push({
  url: 'https://ncert.nic.in/textbook/pdf/jhks101.pdf',
  dest: path.join(targetDir, 'hindi_ch01.pdf'),
  name: 'Hindi Ch 1'
});

console.log(`Starting download of ${downloads.length} Class 10 NCERT PDFs into ${targetDir}...`);

let success = 0;
let failed = 0;

downloads.forEach((item, idx) => {
  if (fs.existsSync(item.dest) && fs.statSync(item.dest).size > 50000) {
    console.log(`[${idx + 1}/${downloads.length}] Already exists: ${path.basename(item.dest)} (${(fs.statSync(item.dest).size / 1024).toFixed(0)} KB)`);
    success++;
    return;
  }
  try {
    console.log(`[${idx + 1}/${downloads.length}] Fetching ${item.name} -> ${path.basename(item.dest)}...`);
    execSync(`curl -k -L -s --retry 3 --connect-timeout 15 -A "Mozilla/5.0" -o "${item.dest}" "${item.url}"`);
    const sz = fs.statSync(item.dest).size;
    if (sz < 10000) {
      console.warn(`[WARN] File suspiciously small: ${item.dest} (${sz} bytes)`);
      failed++;
    } else {
      console.log(`  Done: ${(sz / (1024*1024)).toFixed(2)} MB`);
      success++;
    }
  } catch (err) {
    console.error(`[ERROR] Failed to download ${item.name}:`, err.message);
    failed++;
  }
});

console.log(`\nDownload summary: ${success} succeeded, ${failed} failed.`);
