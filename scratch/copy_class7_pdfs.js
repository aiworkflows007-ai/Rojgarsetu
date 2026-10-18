const fs = require('fs');
const path = require('path');

const targetBase = path.join(__dirname, '../public/ncert_books');
const c7Target = path.join(targetBase, 'class7');

fs.mkdirSync(c7Target, { recursive: true });

const copyJobs = [];

// 1. Class 7 Math (1 to 13)
for (let i = 1; i <= 13; i++) {
  const codeNum = String(i).padStart(2, '0');
  const srcEn = path.join('/home/ashok/Downloads/ncert_class7/math_english', `gemh1${codeNum}.pdf`);
  const destEn = path.join(c7Target, `math_ch${codeNum}.pdf`);

  const srcHi = path.join('/home/ashok/Downloads/ncert_class7/math_hindi', `ghmh1${codeNum}.pdf`);
  const destHi = path.join(c7Target, `math_ch${codeNum}_hi.pdf`);

  copyJobs.push({ src: srcEn, dest: destEn, label: `Class 7 Math Ch ${i} (En)` });
  copyJobs.push({ src: srcHi, dest: destHi, label: `Class 7 Math Ch ${i} (Hi)` });
}

// 2. Class 7 Science Ch 1 (Nutrition in Plants / पादपों में पोषण)
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class7/science_english/gesc101.pdf',
  dest: path.join(c7Target, 'science_ch01.pdf'),
  label: 'Class 7 Science Ch 1 (En)'
});
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class7/science_hindi/ghsc101.pdf',
  dest: path.join(c7Target, 'science_ch01_hi.pdf'),
  label: 'Class 7 Science Ch 1 (Hi)'
});

// 3. Class 7 SST Geography Ch 1 (Environment / पर्यावरण)
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class7/sst_geography_english/gess201.pdf',
  dest: path.join(c7Target, 'sst_ch01.pdf'),
  label: 'Class 7 SST Ch 1 (En)'
});
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class7/sst_geography_hindi/ghss201.pdf',
  dest: path.join(c7Target, 'sst_ch01_hi.pdf'),
  label: 'Class 7 SST Ch 1 (Hi)'
});

// 4. Class 7 Hindi Vasant Ch 1 (हम पंछी उन्मुक्त गगन के)
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class7/hindi_vasant/ghvs101.pdf',
  dest: path.join(c7Target, 'hindi_ch01.pdf'),
  label: 'Class 7 Hindi Ch 1'
});

console.log(`Prepared ${copyJobs.length} PDF copy jobs for Class 7.`);

let successCount = 0;
let failCount = 0;

copyJobs.forEach(job => {
  if (fs.existsSync(job.src)) {
    fs.copyFileSync(job.src, job.dest);
    const sizeMb = (fs.statSync(job.dest).size / (1024 * 1024)).toFixed(2);
    console.log(`✅ [${job.label}] -> ${path.relative(targetBase, job.dest)} (${sizeMb} MB)`);
    successCount++;
  } else {
    console.error(`❌ Source missing for [${job.label}]: ${job.src}`);
    failCount++;
  }
});

console.log(`\nCopy Complete: ${successCount} copied, ${failCount} failed.`);
