const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'data', 'db.json');

// 1. Load questions parts
const part1 = require('./questions_data_part1.js');
const part2 = require('./questions_data_part2.js');
const part3Math = JSON.parse(fs.readFileSync(path.join(__dirname, 'math_part3_data.json'), 'utf8'));
const part3EvsHindi = JSON.parse(fs.readFileSync(path.join(__dirname, 'evs_hindi_data.json'), 'utf8'));

const allQuestions = {
  ...part1,
  ...part2,
  ...part3Math,
  ...part3EvsHindi
};

console.log('Total chapters with questions:', Object.keys(allQuestions).length);
let totalQ = 0;
for (const [chId, qs] of Object.entries(allQuestions)) {
  console.log(`- ${chId}: ${qs.length} questions`);
  totalQ += qs.length;
}
console.log(`Total question bank size: ${totalQ} questions (Expected: 510)`);

if (totalQ !== 510) {
  console.error('ERROR: Total questions is not 510!');
  process.exit(1);
}

// 2. Load db.json
const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));

// 3. Update notes practiceQuestions
let updatedNotesCount = 0;
db.notes.forEach(note => {
  if (allQuestions[note.id]) {
    note.practiceQuestions = allQuestions[note.id];
    updatedNotesCount++;
  } else {
    console.warn(`Warning: No questions found for note ${note.id}`);
  }
});

console.log(`Updated practiceQuestions for ${updatedNotesCount} notes.`);

// 4. Create comprehensive Chapter-wise Speed Quizzes (17 quizzes)
const chapterMeta = [
  { id: 'ncert-c5-math-ch1', name: 'Ch 1: We the Travellers — I (Large Numbers & Place Value)', nameHi: 'अध्याय 1: हम यात्री — I (बड़ी संख्याएँ और स्थानीय मान)' },
  { id: 'ncert-c5-math-ch2', name: 'Ch 2: Fractions (Part of a Whole & Equivalence)', nameHi: 'अध्याय 2: भिन्न (संपूर्ण का भाग और समतुल्य भिन्न)' },
  { id: 'ncert-c5-math-ch3', name: 'Ch 3: Angles as Turns (Geometry & Clocks)', nameHi: 'अध्याय 3: कोण और घुमाव (ज्यामिति और घड़ी)' },
  { id: 'ncert-c5-math-ch4', name: 'Ch 4: We the Travellers — II (Multiplication, Division & Timetables)', nameHi: 'अध्याय 4: हम यात्री — II (गुणा, भाग और समय-सारणी)' },
  { id: 'ncert-c5-math-ch5', name: 'Ch 5: Far and Near (Metric Conversions & Perimeter)', nameHi: 'अध्याय 5: दूर और पास (मीट्रिक रूपांतरण और परिमाप)' },
  { id: 'ncert-c5-math-ch6', name: 'Ch 6: The Dairy Farm (Capacity, Volume & Rates)', nameHi: 'अध्याय 6: डेयरी फार्म (धारिता, आयतन और दरें)' },
  { id: 'ncert-c5-math-ch7', name: 'Ch 7: Shapes and Patterns (Spatial Geometry & Sequences)', nameHi: 'अध्याय 7: आकृतियाँ और पैटर्न (ठोस ज्यामिति और अनुक्रम)' },
  { id: 'ncert-c5-math-ch8', name: 'Ch 8: Weight and Capacity (Mass Measurement & Scales)', nameHi: 'अध्याय 8: भार और धारिता (द्रव्यमान मापन और बाँट)' },
  { id: 'ncert-c5-math-ch9', name: 'Ch 9: Coconut Farm (Area vs. Perimeter & Costing)', nameHi: 'अध्याय 9: नारियल का खेत (क्षेत्रफल बनाम परिमाप और लागत)' },
  { id: 'ncert-c5-math-ch10', name: 'Ch 10: Symmetrical Designs (Lines of Symmetry & Rotations)', nameHi: 'अध्याय 10: सममितीय डिज़ाइन (सममिति रेखाएँ और घूर्णन)' },
  { id: 'ncert-c5-math-ch11', name: 'Ch 11: Grandmother’s Quilt (Decimals, Tenths & Hundredths)', nameHi: 'अध्याय 11: नानी की रजाई (दशमलव, दशांश और शतांश)' },
  { id: 'ncert-c5-math-ch12', name: 'Ch 12: Racing Seconds (Time Measurements & 24h Clocks)', nameHi: 'अध्याय 12: भागते सेकंड (समय मापन और 24-घंटे की घड़ी)' },
  { id: 'ncert-c5-math-ch13', name: 'Ch 13: Animal Jumps (Multiples, Factors, LCM & HCF)', nameHi: 'अध्याय 13: जानवरों की कूद (गुणज, गुणनखंड, ल.स. और म.स.)' },
  { id: 'ncert-c5-math-ch14', name: 'Ch 14: Maps and Locations (Map Scales & Directions)', nameHi: 'अध्याय 14: नक्शे और रास्ते (पैमाना और दिशाएँ)' },
  { id: 'ncert-c5-math-ch15', name: 'Ch 15: Data Through Pictures (Pictographs & Bar Graphs)', nameHi: 'अध्याय 15: चित्रों द्वारा आँकड़े (चित्रालेख और दण्ड आलेख)' },
  { id: 'ncert-c5-evs-ch1', name: 'EVS Ch 1: Super Senses of Animals & Animal Adaptation', nameHi: 'पर्यावरण अ. 1: जानवरों की सुपर ज्ञानेंद्रियाँ और अनुकूलन' },
  { id: 'ncert-c5-hindi-ch1', name: 'हिंदी व्याकरण: संज्ञा, सर्वनाम, विशेषण एवं मुहावरे', nameHi: 'हिंदी व्याकरण: संज्ञा, सर्वनाम, विशेषण एवं मुहावरे' }
];

const newQuizzes = chapterMeta.map((item, idx) => {
  const qs = allQuestions[item.id] || [];
  // Take 15 selected questions for standard timed quiz
  const quizQuestions = qs.slice(0, 15);
  const isEvs = item.id.includes('evs');
  const isHindi = item.id.includes('hindi');
  const subj = isEvs ? 'EVS' : isHindi ? 'HINDI' : 'MATH';

  return {
    id: `quiz-${item.id}`,
    title: `Class 5 ${item.name} Speed Quiz`,
    titleHi: `कक्षा 5 ${item.nameHi} स्पीड क्विज़`,
    examTag: 'NCERT Master Class 5',
    subject: subj,
    timeLimit: 15, // 15 mins for 15 Qs
    questionsCount: quizQuestions.length,
    badge: 'NCERT CHAPTER QUIZ',
    difficulty: idx < 5 ? 'Easy to Moderate' : idx < 12 ? 'Moderate' : 'Advanced (PYQ Linked)',
    questions: quizQuestions
  };
});

db.quizzes = newQuizzes;
console.log(`Generated ${db.quizzes.length} chapter-wise speed quizzes with 15 questions each.`);

// 5. Update Test Series Mock Papers (Term 1 & Term 2, 30 questions each)
const term1Pool = [
  ...allQuestions['ncert-c5-math-ch1'].slice(0, 5),
  ...allQuestions['ncert-c5-math-ch2'].slice(0, 5),
  ...allQuestions['ncert-c5-math-ch3'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch4'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch5'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch6'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch7'].slice(0, 4)
]; // 30 questions

const term2Pool = [
  ...allQuestions['ncert-c5-math-ch8'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch9'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch10'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch11'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch12'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch13'].slice(0, 4),
  ...allQuestions['ncert-c5-math-ch14'].slice(0, 3),
  ...allQuestions['ncert-c5-math-ch15'].slice(0, 3)
]; // 30 questions

db.testSeries = [
  {
    id: 'mock-ncert-c5-math-term1',
    title: 'NCERT Class 5 Mathematics: Term-1 Full Mock Test Paper (Chapters 1 to 7)',
    titleHi: 'NCERT कक्षा 5 गणित: प्रथम सत्र सम्पूर्ण मॉक टेस्ट पेपर (अध्याय 1 से 7)',
    examTag: 'NCERT Class 5 Term-1',
    subject: 'MATH',
    totalMarks: 30,
    timeLimit: 30,
    questionsCount: term1Pool.length,
    badge: '30-MCQ FULL MOCK',
    difficulty: 'Moderate to High',
    questions: term1Pool
  },
  {
    id: 'mock-ncert-c5-math-term2',
    title: 'NCERT Class 5 Mathematics: Term-2 Full Mock Test Paper (Chapters 8 to 15)',
    titleHi: 'NCERT कक्षा 5 गणित: द्वितीय सत्र सम्पूर्ण मॉक टेस्ट पेपर (अध्याय 8 से 15)',
    examTag: 'NCERT Class 5 Term-2',
    subject: 'MATH',
    totalMarks: 30,
    timeLimit: 30,
    questionsCount: term2Pool.length,
    badge: '30-MCQ FULL MOCK',
    difficulty: 'Moderate to High',
    questions: term2Pool
  }
];

console.log(`Updated Test Series: Term-1 has ${term1Pool.length} questions, Term-2 has ${term2Pool.length} questions.`);

// 6. Write db.json
fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully updated ${DB_PATH}! File size: ${fs.statSync(DB_PATH).size} bytes`);
