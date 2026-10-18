/**
 * build_class8_quizzes_tests.js
 * Generates 16 Speed Quizzes (15 questions each) and 2 Grand Mock Tests (30 questions each)
 * for NCERT Class 8 from the 16 chapters.
 */

function generateQuizzesAndTests(allChapters) {
  const quizzes = [];

  // 1. Generate 16 Chapter Speed Quizzes
  allChapters.forEach(ch => {
    const quizId = ch.id.replace('ncert-', 'quiz-');
    // Take 15 questions from practice questions (0 to 14)
    const quizQuestions = ch.practiceQuestions.slice(0, 15).map((q, idx) => ({
      ...q,
      id: idx + 1
    }));

    const quiz = {
      id: quizId,
      classLevel: "Class 8",
      exam: "Class 8",
      examTag: `Class 8 • ${ch.bookName ? ch.bookName.split('(')[0].trim() : 'NCERT'}`,
      subject: ch.subjectCode,
      title: `${ch.title.split(':')[0]}: 15-Minute Speed Quiz`,
      titleHi: `${ch.titleHi.split(':')[0]}: 15-मिनट स्पीड क्विज़`,
      timeLimit: 12,
      questionsCount: quizQuestions.length,
      badge: "SPEED QUIZ • 15 Qs",
      difficulty: "Moderate",
      questions: quizQuestions
    };

    quizzes.push(quiz);
  });

  // 2. Generate 2 Grand Mock Tests
  // Term 1 Mock Test (30 questions):
  // 3 Qs each from Math Ch 1 to 6 (18 Qs) + 4 Qs Science, 4 Qs SST, 4 Qs Hindi = 30 Qs.
  const term1Questions = [];
  const mathChsP1 = allChapters.filter(c => c.subjectCode === 'MATH' && c.chapterNo <= 6);
  mathChsP1.forEach(c => {
    const picked = c.practiceQuestions.slice(15, 18);
    term1Questions.push(...picked);
  });
  const sciCh = allChapters.find(c => c.subjectCode === 'SCI' || c.subjectCode === 'EVS');
  if (sciCh) term1Questions.push(...sciCh.practiceQuestions.slice(15, 19));
  const sstCh = allChapters.find(c => c.subjectCode === 'SST');
  if (sstCh) term1Questions.push(...sstCh.practiceQuestions.slice(15, 19));
  const hinCh = allChapters.find(c => c.subjectCode === 'HINDI');
  if (hinCh) term1Questions.push(...hinCh.practiceQuestions.slice(15, 19));

  const testTerm1 = {
    id: "mock-ncert-c8-term1",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 Term-1",
    subject: "ALL",
    subjectCode: "ALL",
    title: "NCERT Class 8 All Subjects: Term-1 Full Mock Test Paper (Maths Ch 1-6, Science, SST, Hindi)",
    titleHi: "NCERT कक्षा 8 सर्व-विषय: प्रथम सत्र सम्पूर्ण मॉक टेस्ट पेपर (गणित अध्याय 1-6, विज्ञान, सामाजिक, हिन्दी)",
    totalMarks: 30,
    timeLimit: 30,
    questionsCount: 30,
    badge: "30-MCQ FULL MOCK",
    difficulty: "Moderate to High",
    questions: term1Questions.slice(0, 30).map((q, idx) => ({ ...q, id: idx + 1 }))
  };

  // Term 2 Mock Test (30 questions):
  // 3 Qs each from Math Ch 7 to 13 (21 Qs) + 3 Qs Science, 3 Qs SST, 3 Qs Hindi = 30 Qs
  const term2Questions = [];
  const mathChsP2 = allChapters.filter(c => c.subjectCode === 'MATH' && c.chapterNo >= 7);
  mathChsP2.forEach(c => {
    const picked = c.practiceQuestions.slice(20, 23);
    term2Questions.push(...picked);
  });
  if (sciCh) term2Questions.push(...sciCh.practiceQuestions.slice(20, 23));
  if (sstCh) term2Questions.push(...sstCh.practiceQuestions.slice(20, 23));
  if (hinCh) term2Questions.push(...hinCh.practiceQuestions.slice(20, 23));

  const testTerm2 = {
    id: "mock-ncert-c8-term2",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 Term-2",
    subject: "ALL",
    subjectCode: "ALL",
    title: "NCERT Class 8 All Subjects: Annual Grand Mock Test Paper (Maths Ch 7-13, Science, SST, Hindi)",
    titleHi: "NCERT कक्षा 8 सर्व-विषय: वार्षिक मुख्य मॉक टेस्ट पेपर (गणित अध्याय 7-13, विज्ञान, सामाजिक, हिन्दी)",
    totalMarks: 30,
    timeLimit: 30,
    questionsCount: 30,
    badge: "30-MCQ GRAND MOCK",
    difficulty: "High (Competition Grade)",
    questions: term2Questions.slice(0, 30).map((q, idx) => ({ ...q, id: idx + 1 }))
  };

  return {
    quizzes,
    testSeries: [testTerm1, testTerm2]
  };
}

module.exports = generateQuizzesAndTests;
