const fs = require('fs');
const path = require('path');

const SRC_DIR = '/home/ashok/Downloads/ncert_class9';
const DEST_DIR = path.join(__dirname, '..', 'public', 'ncert_books', 'class9');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

console.log('Copying Class 9 NCERT PDFs into public/ncert_books/class9/...');

// 1. Math English Part 1 (iemh101 -> math_ch01.pdf)
const p1Eng = path.join(SRC_DIR, 'math_english_p1', 'iemh1dd');
if (fs.existsSync(p1Eng)) {
  for (let ch = 1; ch <= 8; ch++) {
    const padded = String(ch).padStart(2, '0');
    const srcFile = path.join(p1Eng, `iemh1${padded}.pdf`);
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, path.join(DEST_DIR, `math_ch${padded}.pdf`));
      console.log(`Copied: iemh1${padded}.pdf -> math_ch${padded}.pdf`);
    }
  }
}

// 2. Math Hindi Part 1 (ihmh101 -> math_ch01_hi.pdf)
const p1Hi = path.join(SRC_DIR, 'math_hindi_p1', 'ihmh1dd');
if (fs.existsSync(p1Hi)) {
  for (let ch = 1; ch <= 8; ch++) {
    const padded = String(ch).padStart(2, '0');
    const srcFile = path.join(p1Hi, `ihmh1${padded}.pdf`);
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, path.join(DEST_DIR, `math_ch${padded}_hi.pdf`));
      console.log(`Copied: ihmh1${padded}.pdf -> math_ch${padded}_hi.pdf`);
    }
  }
}

// 3. Math English Part 2 (iemh201 -> math_ch09.pdf to math_ch14.pdf)
const p2Eng = path.join(SRC_DIR, 'math_english_p2', 'iemh2dd');
if (fs.existsSync(p2Eng)) {
  for (let i = 1; i <= 6; i++) {
    const ch = i + 8;
    const padded = String(ch).padStart(2, '0');
    const srcFile = path.join(p2Eng, `iemh20${i}.pdf`);
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, path.join(DEST_DIR, `math_ch${padded}.pdf`));
      console.log(`Copied: iemh20${i}.pdf -> math_ch${padded}.pdf`);
    }
  }
}

// 4. Science English & Hindi
const sciDir = path.join(SRC_DIR, 'science');
if (fs.existsSync(path.join(sciDir, 'iesc101.pdf'))) {
  fs.copyFileSync(path.join(sciDir, 'iesc101.pdf'), path.join(DEST_DIR, 'science_ch01.pdf'));
  console.log('Copied: iesc101.pdf -> science_ch01.pdf');
}
if (fs.existsSync(path.join(sciDir, 'ihsc101.pdf'))) {
  fs.copyFileSync(path.join(sciDir, 'ihsc101.pdf'), path.join(DEST_DIR, 'science_ch01_hi.pdf'));
  console.log('Copied: ihsc101.pdf -> science_ch01_hi.pdf');
}

// 5. SST
const sstDir = path.join(SRC_DIR, 'sst');
if (fs.existsSync(path.join(sstDir, 'iest101.pdf'))) {
  fs.copyFileSync(path.join(sstDir, 'iest101.pdf'), path.join(DEST_DIR, 'sst_ch01.pdf'));
  console.log('Copied: iest101.pdf -> sst_ch01.pdf');
}

// 6. Hindi
const hinDir = path.join(SRC_DIR, 'hindi');
if (fs.existsSync(path.join(hinDir, 'ihga101.pdf'))) {
  fs.copyFileSync(path.join(hinDir, 'ihga101.pdf'), path.join(DEST_DIR, 'hindi_ch01.pdf'));
  console.log('Copied: ihga101.pdf -> hindi_ch01.pdf');
}

const copiedFiles = fs.readdirSync(DEST_DIR);
console.log(`\nAll done! Total ${copiedFiles.length} Class 9 chapter PDFs hosted in public/ncert_books/class9/`);
