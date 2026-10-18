const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const c5p1 = require('./class5_teacher_p1.js');
const c5p2 = require('./class5_teacher_p2.js');
const c6p1 = require('./class6_teacher_p1.js');
const c6p2 = require('./class6_teacher_p2.js');

const allEnhanced = [...c5p1, ...c5p2, ...c6p1, ...c6p2];
console.log(`Total enhanced notes available: ${allEnhanced.length}`);

const enhancedMap = new Map();
allEnhanced.forEach(n => enhancedMap.set(n.id, n));

let updatedCount = 0;
db.notes = db.notes.map(note => {
  const enhanced = enhancedMap.get(note.id);
  if (!enhanced) {
    console.warn(`Warning: No enhancement found for note ID ${note.id}`);
    return note;
  }

  // Preserve practiceQuestions and metadata
  const originalQuestions = note.practiceQuestions || [];

  const updatedNote = {
    ...note,
    title: enhanced.title,
    titleHi: enhanced.titleHi,
    desc: enhanced.desc,
    descHi: enhanced.descHi,
    competitionEdge: enhanced.competitionEdge,
    competitionEdgeHi: enhanced.competitionEdgeHi,
    sections: enhanced.sections,
    practiceQuestions: originalQuestions
  };

  updatedCount++;
  return updatedNote;
});

console.log(`Successfully updated ${updatedCount} notes with Teacher-Mentor & Formula sections.`);

// Write back to db.json
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('db.json successfully saved.');

// Verification assertions
const verifyDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
console.log(`\n--- Verification Report ---`);
console.log(`Total Notes: ${verifyDb.notes.length}`);

let totalQuestions = 0;
let missingSections = 0;
let missingBilingual = 0;

verifyDb.notes.forEach((n, idx) => {
  const qCount = n.practiceQuestions ? n.practiceQuestions.length : 0;
  totalQuestions += qCount;

  if (!n.sections || n.sections.length < 3) {
    missingSections++;
    console.error(`Error in note ${n.id}: Less than 3 sections!`);
  }

  n.sections.forEach((sec, sIdx) => {
    if (!sec.heading || !sec.headingHi || !sec.contentHtml || !sec.contentHtmlHi) {
      missingBilingual++;
      console.error(`Error in note ${n.id} section ${sIdx}: Missing bilingual content!`);
    }
  });
});

console.log(`Total Practice Questions: ${totalQuestions}`);
console.log(`Quizzes Count: ${verifyDb.quizzes.length}`);
console.log(`Missing Sections: ${missingSections}`);
console.log(`Missing Bilingual Fields: ${missingBilingual}`);

if (missingSections === 0 && missingBilingual === 0 && totalQuestions === 900) {
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY! 100% SUCCESS.');
} else {
  console.error('VERIFICATION FAILED!');
  process.exit(1);
}
