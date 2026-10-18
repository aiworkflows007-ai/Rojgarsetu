/**
 * apply_class6_master.js
 * Injects NCERT Class 6 Notes, Quizzes, and Tests into data/db.json
 * Preserves all Class 5 content with complete validation.
 */

const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'db.json');
const backupPath = path.join(__dirname, '..', 'data', 'db.json.bak_c6');

// 1. Load Part 1, 2, 3
const mathP1 = require('./build_class6_math_p1.js');
const mathP2 = require('./build_class6_math_p2.js');
const sciSstHin = require('./build_class6_sci_sst_hindi.js');
const allClass6Chapters = [...mathP1, ...mathP2, ...sciSstHin];

// 2. Generate Quizzes and Tests
const genQuizzesAndTests = require('./build_class6_quizzes_tests.js');
const { quizzes: class6Quizzes, testSeries: class6TestSeries } = genQuizzesAndTests(allClass6Chapters);

console.log(`Prepared ${allClass6Chapters.length} Class 6 Chapters.`);
console.log(`Prepared ${class6Quizzes.length} Class 6 Quizzes.`);
console.log(`Prepared ${class6TestSeries.length} Class 6 Mock Tests.`);

// 3. Load DB
const rawDb = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(rawDb);

// Backup
fs.writeFileSync(backupPath, rawDb, 'utf8');
console.log(`Backed up original db.json to ${backupPath}`);

// 4. Filter existing notes, quizzes, tests (keep Class 5 and others, replace/insert Class 6)
const isClass6 = item => {
  const str = String(item.classLevel || item.exam || item.examTag || item.id || '');
  return str.includes('Class 6') || str.includes('c6') || str.includes('class6');
};

const existingNotes = (db.notes || []).filter(n => !isClass6(n));
const existingQuizzes = (db.quizzes || []).filter(q => !isClass6(q));
const existingTestSeries = (db.testSeries || []).filter(t => !isClass6(t));

console.log(`Existing non-Class 6: Notes=${existingNotes.length}, Quizzes=${existingQuizzes.length}, Tests=${existingTestSeries.length}`);

// 5. Combine
db.notes = [...existingNotes, ...allClass6Chapters];
db.quizzes = [...existingQuizzes, ...class6Quizzes];
db.testSeries = [...existingTestSeries, ...class6TestSeries];

// 6. Rigorous Validation
let errors = 0;
let totalClass6Questions = 0;

allClass6Chapters.forEach((ch, idx) => {
  if (!ch.id || !ch.title || !ch.titleHi || !ch.sections || ch.sections.length === 0) {
    console.error(`[ERROR] Chapter #${idx+1} (${ch.id}) missing basic fields.`);
    errors++;
  }
  if (!Array.isArray(ch.practiceQuestions) || ch.practiceQuestions.length < 30) {
    console.error(`[ERROR] Chapter #${idx+1} (${ch.id}) has ${ch.practiceQuestions ? ch.practiceQuestions.length : 0} questions (less than 30).`);
    errors++;
  } else {
    totalClass6Questions += ch.practiceQuestions.length;
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
});

class6Quizzes.forEach(q => {
  totalClass6Questions += q.questions.length;
  if (!q.questions || q.questions.length !== 15) {
    console.error(`[ERROR] Quiz ${q.id} has ${q.questions ? q.questions.length : 0} questions instead of 15.`);
    errors++;
  }
});

class6TestSeries.forEach(t => {
  totalClass6Questions += t.questions.length;
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
console.log(`Total Class 6 Questions added: ${totalClass6Questions} (390 practice + 195 quiz + 60 test)`);
console.log(`New DB Totals: Notes=${db.notes.length}, Quizzes=${db.quizzes.length}, Tests=${db.testSeries.length}`);

// 7. Write to db.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully written to ${dbPath}!`);
