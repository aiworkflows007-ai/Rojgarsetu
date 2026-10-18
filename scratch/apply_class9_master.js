/**
 * apply_class9_master.js
 * Injects NCERT Class 9 Notes, Quizzes, and Tests into data/db.json
 * Preserves all Class 5, Class 6, Class 7, and Class 8 content with complete validation.
 */

const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'db.json');
const backupPath = path.join(__dirname, '..', 'data', 'db.json.bak_c9');

// 1. Load Parts 1, 2, 3
const mathP1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'class9_math_p1.json'), 'utf8'));
const mathP2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'class9_math_p2.json'), 'utf8'));
const sciSstHin = JSON.parse(fs.readFileSync(path.join(__dirname, 'class9_sci_sst_hindi.json'), 'utf8'));
const allClass9Chapters = [...mathP1, ...mathP2, ...sciSstHin];

// 2. Generate Quizzes and Tests
const genQuizzesAndTests = require('./build_class9_quizzes_tests.js');
const { quizzes: class9Quizzes, testSeries: class9TestSeries } = genQuizzesAndTests(allClass9Chapters);

console.log(`Prepared ${allClass9Chapters.length} Class 9 Chapters.`);
console.log(`Prepared ${class9Quizzes.length} Class 9 Quizzes.`);
console.log(`Prepared ${class9TestSeries.length} Class 9 Mock Tests.`);

// 3. Load DB
const rawDb = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(rawDb);

// Backup
fs.writeFileSync(backupPath, rawDb, 'utf8');
console.log(`Backed up original db.json to ${backupPath}`);

// 4. Filter existing notes, quizzes, tests (keep Class 5, 6, 7, 8 and others, replace/insert Class 9)
const isClass9 = item => {
  const str = String(item.classLevel || item.exam || item.examTag || item.id || '');
  return str.includes('Class 9') || str.includes('c9') || str.includes('class9');
};

const existingNotes = (db.notes || []).filter(n => !isClass9(n));
const existingQuizzes = (db.quizzes || []).filter(q => !isClass9(q));
const existingTestSeries = (db.testSeries || []).filter(t => !isClass9(t));

console.log(`Existing non-Class 9: Notes=${existingNotes.length}, Quizzes=${existingQuizzes.length}, Tests=${existingTestSeries.length}`);

// 5. Combine
db.notes = [...existingNotes, ...allClass9Chapters];
db.quizzes = [...existingQuizzes, ...class9Quizzes];
db.testSeries = [...existingTestSeries, ...class9TestSeries];

// 6. Rigorous Validation
let errors = 0;
let totalClass9Questions = 0;

allClass9Chapters.forEach((ch, idx) => {
  if (!ch.id || !ch.title || !ch.titleHi || !ch.sections || ch.sections.length === 0) {
    console.error(`[ERROR] Chapter #${idx+1} (${ch.id}) missing basic fields.`);
    errors++;
  }
  if (!Array.isArray(ch.practiceQuestions) || ch.practiceQuestions.length < 30) {
    console.error(`[ERROR] Chapter #${idx+1} (${ch.id}) has ${ch.practiceQuestions ? ch.practiceQuestions.length : 0} questions (less than 30).`);
    errors++;
  } else {
    totalClass9Questions += ch.practiceQuestions.length;
    ch.practiceQuestions.forEach((q, qidx) => {
      if (!q.q || !q.qHi || !Array.isArray(q.options) || !Array.isArray(q.optionsHi) || q.options.length !== 4 || q.optionsHi.length !== 4) {
        console.error(`[ERROR] Ch ${ch.id} Question #${qidx+1} invalid bilingual options or question text.`);
        errors++;
      }
      if (typeof q.ans !== 'number' || q.ans < 0 || q.ans > 3) {
        console.error(`[ERROR] Ch ${ch.id} Question #${qidx+1} answer index out of bounds: ${q.ans}`);
        errors++;
      }
      if (!q.explanation || !q.explanationHi) {
        console.error(`[ERROR] Ch ${ch.id} Question #${qidx+1} missing explanation or explanationHi.`);
        errors++;
      }
    });
  }

  // Validate PDF links existence on disk
  if (ch.pdfUrl) {
    const fullPdfPath = path.join(__dirname, '..', 'public', ch.pdfUrl);
    if (!fs.existsSync(fullPdfPath)) {
      console.warn(`[WARN] Ch ${ch.id} English PDF does not exist at ${fullPdfPath}`);
    }
  }
  if (ch.pdfUrlHi) {
    const fullPdfHiPath = path.join(__dirname, '..', 'public', ch.pdfUrlHi);
    if (!fs.existsSync(fullPdfHiPath)) {
      console.warn(`[WARN] Ch ${ch.id} Hindi PDF does not exist at ${fullPdfHiPath}`);
    }
  }
});

class9Quizzes.forEach(q => {
  totalClass9Questions += q.questions.length;
  if (!q.questions || q.questions.length !== 15) {
    console.error(`[ERROR] Quiz ${q.id} has ${q.questions ? q.questions.length : 0} questions instead of 15.`);
    errors++;
  }
});

class9TestSeries.forEach(t => {
  totalClass9Questions += t.questions.length;
  if (!t.questions || t.questions.length !== 30) {
    console.error(`[ERROR] Test ${t.id} has ${t.questions ? t.questions.length : 0} questions instead of 30.`);
    errors++;
  }
});

if (errors > 0) {
  console.error(`Validation FAILED with ${errors} error(s)! Aborting write.`);
  process.exit(1);
}

console.log(`Validation PASSED with ZERO errors!`);
console.log(`Total Class 9 Questions added: ${totalClass9Questions} (510 practice + 255 quiz + 60 test)`);
console.log(`New DB Totals: Notes=${db.notes.length}, Quizzes=${db.quizzes.length}, Tests=${db.testSeries.length}`);

// 7. Write to db.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully written to ${dbPath}!`);
