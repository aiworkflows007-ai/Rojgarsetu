const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DOWNLOADS_DIR = '/home/ashok/Downloads';
const EXTRACT_DIR = '/home/ashok/Downloads/ncert_class7';

if (!fs.existsSync(EXTRACT_DIR)) {
  fs.mkdirSync(EXTRACT_DIR, { recursive: true });
}

const books = [
  {
    code: 'gemh1dd',
    name: 'Class 7 Math (English)',
    folder: 'math_english',
    url: 'https://ncert.nic.in/textbook/pdf/gemh1dd.zip'
  },
  {
    code: 'ghmh1dd',
    name: 'Class 7 Math (गणित - Hindi)',
    folder: 'math_hindi',
    url: 'https://ncert.nic.in/textbook/pdf/ghmh1dd.zip'
  },
  {
    code: 'gesc1dd',
    name: 'Class 7 Science (English)',
    folder: 'science_english',
    url: 'https://ncert.nic.in/textbook/pdf/gesc1dd.zip'
  },
  {
    code: 'ghsc1dd',
    name: 'Class 7 Science (विज्ञान - Hindi)',
    folder: 'science_hindi',
    url: 'https://ncert.nic.in/textbook/pdf/ghsc1dd.zip'
  },
  {
    code: 'gess2dd',
    name: 'Class 7 Geography (Our Environment - English)',
    folder: 'sst_geography_english',
    url: 'https://ncert.nic.in/textbook/pdf/gess2dd.zip'
  },
  {
    code: 'ghss2dd',
    name: 'Class 7 Geography (हमारा पर्यावरण - Hindi)',
    folder: 'sst_geography_hindi',
    url: 'https://ncert.nic.in/textbook/pdf/ghss2dd.zip'
  },
  {
    code: 'ghvs1dd',
    name: 'Class 7 Hindi (वसंत भाग 2 - Hindi Vasant)',
    folder: 'hindi_vasant',
    url: 'https://ncert.nic.in/textbook/pdf/ghvs1dd.zip'
  }
];

books.forEach((book, idx) => {
  const zipPath = path.join(DOWNLOADS_DIR, `${book.code}.zip`);
  const outFolder = path.join(EXTRACT_DIR, book.folder);

  console.log(`\n[${idx + 1}/${books.length}] Downloading ${book.name}...`);
  if (fs.existsSync(zipPath) && fs.statSync(zipPath).size > 1000000) {
    console.log(`  Existing file found: ${zipPath} (${(fs.statSync(zipPath).size / (1024*1024)).toFixed(2)} MB)`);
  } else {
    try {
      execSync(`curl -k -L --retry 3 --connect-timeout 15 -o "${zipPath}" "${book.url}"`, { stdio: 'inherit' });
      console.log(`  Download completed: ${zipPath} (${(fs.statSync(zipPath).size / (1024*1024)).toFixed(2)} MB)`);
    } catch (err) {
      console.error(`  Error downloading ${book.name}:`, err.message);
      return;
    }
  }

  // Unzip
  if (!fs.existsSync(outFolder)) {
    fs.mkdirSync(outFolder, { recursive: true });
  }
  try {
    execSync(`unzip -o -q "${zipPath}" -d "${outFolder}"`, { stdio: 'inherit' });
    const files = fs.readdirSync(outFolder);
    console.log(`  Extracted to ${outFolder} (items: ${files.length})`);
  } catch (err) {
    console.error(`  Error unzipping ${book.code}.zip:`, err.message);
  }
});

console.log('\n=========================================');
console.log('Class 7 NCERT books download & extraction complete!');
console.log(`ZIP Archives: ${DOWNLOADS_DIR}`);
console.log(`Extracted Folders: ${EXTRACT_DIR}`);
console.log('=========================================');
