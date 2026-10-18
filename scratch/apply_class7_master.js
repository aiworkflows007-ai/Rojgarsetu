/**
 * apply_class7_master.js
 * Injects NCERT Class 7 Notes, Quizzes, and Tests into data/db.json
 * Preserves all Class 5 and Class 6 content with complete validation.
 */

const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'db.json');
const backupPath = path.join(__dirname, '..', 'data', 'db.json.bak_c7');

// 1. Load Part 1, 2, 3, 4
const mathP1 = require('./build_class7_math_p1.js');
const mathP2 = require('./build_class7_math_p2.js');
const mathP3 = require('./build_class7_math_p3.js');
const sciSstHin = require('./build_class7_sci_sst_hindi.js');
const allClass7Chapters = [...mathP1, ...mathP2, ...mathP3, ...sciSstHin];

// 2. Generate Quizzes and Tests
const genQuizzesAndTests = require('./build_class7_quizzes_tests.js');
const { quizzes: class7Quizzes, testSeries: class7TestSeries } = genQuizzesAndTests(allClass7Chapters);

console.log(`Prepared ${allClass7Chapters.length} Class 7 Chapters.`);
console.log(`Prepared ${class7Quizzes.length} Class 7 Quizzes.`);
console.log(`Prepared ${class7TestSeries.length} Class 7 Mock Tests.`);

// 3. Load DB
const rawDb = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(rawDb);

// Backup
fs.writeFileSync(backupPath, rawDb, 'utf8');
console.log(`Backed up original db.json to ${backupPath}`);

// 4. Filter existing notes, quizzes, tests (keep Class 5, Class 6, and others, replace/insert Class 7)
const isClass7 = item => {
  const str = String(item.classLevel || item.exam || item.examTag || item.id || '');
  return str.includes('Class 7') || str.includes('c7') || str.includes('class7');
};

const existingNotes = (db.notes || []).filter(n => !isClass7(n));
const existingQuizzes = (db.quizzes || []).filter(q => !isClass7(q));
const existingTestSeries = (db.testSeries || []).filter(t => !isClass7(t));

console.log(`Existing non-Class 7: Notes=${existingNotes.length}, Quizzes=${existingQuizzes.length}, Tests=${existingTestSeries.length}`);

// 5. Combine
db.notes = [...existingNotes, ...allClass7Chapters];
db.quizzes = [...existingQuizzes, ...class7Quizzes];
db.testSeries = [...existingTestSeries, ...class7TestSeries];

// 6. Rigorous Validation
let errors = 0;
let totalClass7Questions = 0;

allClass7Chapters.forEach((ch, idx) => {
  if (!ch.id || !ch.title || !ch.titleHi || !ch.sections || ch.sections.length === 0) {
    console.error(`[ERROR] Chapter #${idx+1} (${ch.id}) missing basic fields.`);
    errors++;
  }
  if (!Array.isArray(ch.practiceQuestions) || ch.practiceQuestions.length < 30) {
    console.error(`[ERROR] Chapter #${idx+1} (${ch.id}) has ${ch.practiceQuestions ? ch.practiceQuestions.length : 0} questions (less than 30).`);
    errors++;
  } else {
    totalClass7Questions += ch.practiceQuestions.length;
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

class7Quizzes.forEach(q => {
  totalClass7Questions += q.questions.length;
  if (!q.questions || q.questions.length !== 15) {
    console.error(`[ERROR] Quiz ${q.id} has ${q.questions ? q.questions.length : 0} questions instead of 15.`);
    errors++;
  }
});

class7TestSeries.forEach(t => {
  totalClass7Questions += t.questions.length;
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
console.log(`Total Class 7 Questions added: ${totalClass7Questions} (480 practice + 240 quiz + 60 test)`);
console.log(`New DB Totals: Notes=${db.notes.length}, Quizzes=${db.quizzes.length}, Tests=${db.testSeries.length}`);

// 7. Write to db.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully written to ${dbPath}!`);
