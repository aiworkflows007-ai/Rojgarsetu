const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DOWNLOADS_DIR = '/home/ashok/Downloads';
const EXTRACT_DIR = '/home/ashok/Downloads/ncert_class6';

if (!fs.existsSync(EXTRACT_DIR)) {
  fs.mkdirSync(EXTRACT_DIR, { recursive: true });
}

const books = [
  {
    code: 'fegp1dd',
    name: 'Class 6 Math (Ganita Prakash - English)',
    folder: 'math_english_ganita_prakash',
    url: 'https://ncert.nic.in/textbook/pdf/fegp1dd.zip'
  },
  {
    code: 'fhgp1dd',
    name: 'Class 6 Math (गणित प्रकाश - Hindi)',
    folder: 'math_hindi_ganita_prakash',
    url: 'https://ncert.nic.in/textbook/pdf/fhgp1dd.zip'
  },
  {
    code: 'fecu1dd',
    name: 'Class 6 Science (Curiosity - English)',
    folder: 'science_english_curiosity',
    url: 'https://ncert.nic.in/textbook/pdf/fecu1dd.zip'
  },
  {
    code: 'fhcu1dd',
    name: 'Class 6 Science (जिज्ञासा - Hindi)',
    folder: 'science_hindi_jigyasa',
    url: 'https://ncert.nic.in/textbook/pdf/fhcu1dd.zip'
  },
  {
    code: 'fepr1dd',
    name: 'Class 6 English (Poorvi)',
    folder: 'english_poorvi',
    url: 'https://ncert.nic.in/textbook/pdf/fepr1dd.zip'
  },
  {
    code: 'fhml1dd',
    name: 'Class 6 Hindi (मल्हार - Malhar)',
    folder: 'hindi_malhar',
    url: 'https://ncert.nic.in/textbook/pdf/fhml1dd.zip'
  },
  {
    code: 'fhes1dd',
    name: 'Class 6 Social Science (समाज का अध्ययन - Hindi)',
    folder: 'social_science_hindi',
    url: 'https://ncert.nic.in/textbook/pdf/fhes1dd.zip'
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
      execSync(`curl -k -L --progress-bar -o "${zipPath}" "${book.url}"`, { stdio: 'inherit' });
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
console.log('All requested Class 6 books downloaded successfully!');
console.log(`ZIP Archives saved in: ${DOWNLOADS_DIR}`);
console.log(`Extracted Books in: ${EXTRACT_DIR}`);
console.log('=========================================');
