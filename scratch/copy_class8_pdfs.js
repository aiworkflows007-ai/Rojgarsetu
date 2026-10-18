const fs = require('fs');
const path = require('path');

const SRC_DIR = '/home/ashok/Downloads/ncert_class8';
const DEST_DIR = path.join(__dirname, '..', 'public', 'ncert_books', 'class8');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

console.log('Copying Class 8 NCERT PDFs into public/ncert_books/class8/...');

// 1. Math English (hemh101.pdf -> math_ch01.pdf, etc.)
const mathEngDir = path.join(SRC_DIR, 'math_english');
if (fs.existsSync(mathEngDir)) {
  const files = fs.readdirSync(mathEngDir);
  for (let ch = 1; ch <= 13; ch++) {
    const padded = String(ch).padStart(2, '0');
    const matched = files.find(f => f.toLowerCase() === `hemh1${padded}.pdf`);
    if (matched) {
      fs.copyFileSync(path.join(mathEngDir, matched), path.join(DEST_DIR, `math_ch${padded}.pdf`));
      console.log(`Copied: ${matched} -> math_ch${padded}.pdf`);
    } else {
      console.warn(`Math Eng Ch ${ch} not found in ${mathEngDir}`);
    }
  }
}

// 2. Math Hindi (hhmh101.pdf -> math_ch01_hi.pdf, etc.)
const mathHiDir = path.join(SRC_DIR, 'math_hindi');
if (fs.existsSync(mathHiDir)) {
  const files = fs.readdirSync(mathHiDir);
  for (let ch = 1; ch <= 13; ch++) {
    const padded = String(ch).padStart(2, '0');
    const matched = files.find(f => f.toLowerCase() === `hhmh1${padded}.pdf`);
    if (matched) {
      fs.copyFileSync(path.join(mathHiDir, matched), path.join(DEST_DIR, `math_ch${padded}_hi.pdf`));
      console.log(`Copied: ${matched} -> math_ch${padded}_hi.pdf`);
    } else {
      console.warn(`Math Hi Ch ${ch} not found in ${mathHiDir}`);
    }
  }
}

// 3. Science English (hesc101.pdf -> science_ch01.pdf)
const sciEngDir = path.join(SRC_DIR, 'science_english');
if (fs.existsSync(sciEngDir)) {
  const files = fs.readdirSync(sciEngDir);
  const matched = files.find(f => f.toLowerCase() === 'hesc101.pdf');
  if (matched) {
    fs.copyFileSync(path.join(sciEngDir, matched), path.join(DEST_DIR, 'science_ch01.pdf'));
    console.log(`Copied: ${matched} -> science_ch01.pdf`);
  }
}

// 4. Science Hindi (hhsc101.pdf -> science_ch01_hi.pdf)
const sciHiDir = path.join(SRC_DIR, 'science_hindi');
if (fs.existsSync(sciHiDir)) {
  const files = fs.readdirSync(sciHiDir);
  const matched = files.find(f => f.toLowerCase() === 'hhsc101.pdf');
  if (matched) {
    fs.copyFileSync(path.join(sciHiDir, matched), path.join(DEST_DIR, 'science_ch01_hi.pdf'));
    console.log(`Copied: ${matched} -> science_ch01_hi.pdf`);
  }
}

// 5. SST Geography English (hess401.pdf -> sst_ch01.pdf)
const sstEngDir = path.join(SRC_DIR, 'sst_geography_english');
if (fs.existsSync(sstEngDir)) {
  const files = fs.readdirSync(sstEngDir);
  const matched = files.find(f => f.toLowerCase() === 'hess401.pdf' || f.toLowerCase() === 'hess201.pdf');
  if (matched) {
    fs.copyFileSync(path.join(sstEngDir, matched), path.join(DEST_DIR, 'sst_ch01.pdf'));
    console.log(`Copied: ${matched} -> sst_ch01.pdf`);
  }
}

// 6. SST Geography Hindi (hhss401.pdf -> sst_ch01_hi.pdf)
const sstHiDir = path.join(SRC_DIR, 'sst_geography_hindi');
if (fs.existsSync(sstHiDir)) {
  const files = fs.readdirSync(sstHiDir);
  const matched = files.find(f => f.toLowerCase() === 'hhss401.pdf' || f.toLowerCase() === 'hhss101.pdf');
  if (matched) {
    fs.copyFileSync(path.join(sstHiDir, matched), path.join(DEST_DIR, 'sst_ch01_hi.pdf'));
    console.log(`Copied: ${matched} -> sst_ch01_hi.pdf`);
  }
}

// 7. Hindi Vasant (hhvs101.pdf -> hindi_ch01.pdf)
const hinDir = path.join(SRC_DIR, 'hindi_vasant');
if (fs.existsSync(hinDir)) {
  const files = fs.readdirSync(hinDir);
  const matched = files.find(f => f.toLowerCase() === 'hhvs101.pdf');
  if (matched) {
    fs.copyFileSync(path.join(hinDir, matched), path.join(DEST_DIR, 'hindi_ch01.pdf'));
    console.log(`Copied: ${matched} -> hindi_ch01.pdf`);
  }
}

console.log('All Class 8 PDFs copied successfully to public/ncert_books/class8/!');
