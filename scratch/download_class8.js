const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DOWNLOADS_DIR = '/home/ashok/Downloads';
const EXTRACT_DIR = '/home/ashok/Downloads/ncert_class8';

if (!fs.existsSync(EXTRACT_DIR)) {
  fs.mkdirSync(EXTRACT_DIR, { recursive: true });
}

const books = [
  {
    code: 'hemh1dd',
    name: 'Class 8 Math (English)',
    folder: 'math_english',
    url: 'https://ncert.nic.in/textbook/pdf/hemh1dd.zip'
  },
  {
    code: 'hhmh1dd',
    name: 'Class 8 Math (गणित - Hindi)',
    folder: 'math_hindi',
    url: 'https://ncert.nic.in/textbook/pdf/hhmh1dd.zip'
  },
  {
    code: 'hesc1dd',
    name: 'Class 8 Science (English)',
    folder: 'science_english',
    url: 'https://ncert.nic.in/textbook/pdf/hesc1dd.zip'
  },
  {
    code: 'hhsc1dd',
    name: 'Class 8 Science (विज्ञान - Hindi)',
    folder: 'science_hindi',
    url: 'https://ncert.nic.in/textbook/pdf/hhsc1dd.zip'
  },
  {
    code: 'hess4dd',
    name: 'Class 8 Geography (Resources & Development - English)',
    folder: 'sst_geography_english',
    url: 'https://ncert.nic.in/textbook/pdf/hess4dd.zip'
  },
  {
    code: 'hhss4dd',
    name: 'Class 8 Geography (संसाधन एवं विकास - Hindi)',
    folder: 'sst_geography_hindi',
    url: 'https://ncert.nic.in/textbook/pdf/hhss4dd.zip'
  },
  {
    code: 'hhvs1dd',
    name: 'Class 8 Hindi (वसंत भाग 3 - Hindi Vasant)',
    folder: 'hindi_vasant',
    url: 'https://ncert.nic.in/textbook/pdf/hhvs1dd.zip'
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
console.log('Class 8 NCERT books download & extraction complete!');
console.log(`ZIP Archives: ${DOWNLOADS_DIR}`);
console.log(`Extracted Folders: ${EXTRACT_DIR}`);
console.log('=========================================');
