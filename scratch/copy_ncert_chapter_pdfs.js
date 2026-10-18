const fs = require('fs');
const path = require('path');

const targetBase = path.join(__dirname, '../public/ncert_books');
const c5Target = path.join(targetBase, 'class5');
const c6Target = path.join(targetBase, 'class6');

fs.mkdirSync(c5Target, { recursive: true });
fs.mkdirSync(c6Target, { recursive: true });

const copyJobs = [];

// 1. Class 5 Math
for (let i = 1; i <= 15; i++) {
  const code = `eemm1${String(i).padStart(2, '0')}.pdf`;
  const src = path.join(__dirname, 'ncert_class5_math', code);
  const dest = path.join(c5Target, `math_ch${String(i).padStart(2, '0')}.pdf`);
  copyJobs.push({ src, dest, label: `Class 5 Math Ch ${i}`, id: `ncert-c5-math-ch${i}` });
}

// 2. Class 5 EVS
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class5/evs_looking_around/eeap101.pdf',
  dest: path.join(c5Target, 'evs_ch01.pdf'),
  label: 'Class 5 EVS Ch 1',
  id: 'ncert-c5-evs-ch1'
});

// 3. Class 5 Hindi
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class5/hindi_rimjhim/ehhn101.pdf',
  dest: path.join(c5Target, 'hindi_ch01.pdf'),
  label: 'Class 5 Hindi Ch 1',
  id: 'ncert-c5-hindi-ch1'
});

// 4. Class 6 Math (English & Hindi)
for (let i = 1; i <= 10; i++) {
  const codeEn = `fegp1${String(i).padStart(2, '0')}.pdf`;
  const srcEn = path.join('/home/ashok/Downloads/ncert_class6/math_english_ganita_prakash/fegp1dd', codeEn);
  const destEn = path.join(c6Target, `math_ch${String(i).padStart(2, '0')}.pdf`);
  
  const codeHi = `fhgp1${String(i).padStart(2, '0')}.pdf`;
  const srcHi = path.join('/home/ashok/Downloads/ncert_class6/math_hindi_ganita_prakash', codeHi);
  const destHi = path.join(c6Target, `math_ch${String(i).padStart(2, '0')}_hi.pdf`);

  copyJobs.push({ src: srcEn, dest: destEn, label: `Class 6 Math Ch ${i} (En)`, id: `ncert-c6-m${String(i).padStart(2, '0')}`, lang: 'en' });
  copyJobs.push({ src: srcHi, dest: destHi, label: `Class 6 Math Ch ${i} (Hi)`, id: `ncert-c6-m${String(i).padStart(2, '0')}`, lang: 'hi' });
}

// 5. Class 6 Science (English & Hindi)
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class6/science_english_curiosity/fecu101.pdf',
  dest: path.join(c6Target, 'science_ch01.pdf'),
  label: 'Class 6 Science Ch 1 (En)',
  id: 'ncert-c6-sci01',
  lang: 'en'
});
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class6/science_hindi_jigyasa/fhcu101.pdf',
  dest: path.join(c6Target, 'science_ch01_hi.pdf'),
  label: 'Class 6 Science Ch 1 (Hi)',
  id: 'ncert-c6-sci01',
  lang: 'hi'
});

// 6. Class 6 SST (English & Hindi)
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class6/social_science_english/fees1dd/fees101.pdf',
  dest: path.join(c6Target, 'sst_ch01.pdf'),
  label: 'Class 6 SST Ch 1 (En)',
  id: 'ncert-c6-sst01',
  lang: 'en'
});
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class6/social_science_hindi/fhes1dd/fhes101.pdf',
  dest: path.join(c6Target, 'sst_ch01_hi.pdf'),
  label: 'Class 6 SST Ch 1 (Hi)',
  id: 'ncert-c6-sst01',
  lang: 'hi'
});

// 7. Class 6 Hindi Malhar
copyJobs.push({
  src: '/home/ashok/Downloads/ncert_class6/hindi_malhar/fhml101.pdf',
  dest: path.join(c6Target, 'hindi_ch01.pdf'),
  label: 'Class 6 Hindi Ch 1',
  id: 'ncert-c6-hin01',
  lang: 'hi'
});

console.log(`Prepared ${copyJobs.length} PDF copy jobs.`);

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
