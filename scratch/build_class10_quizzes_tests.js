/**
 * build_class10_quizzes_tests.js
 * Generates 17 Speed Quizzes (15 questions each) and 2 Grand Mock Tests (30 questions each)
 * for NCERT Class 10 from the 17 chapters.
 */

function generateQuizzesAndTests(allChapters) {
  const quizzes = [];

  // 1. Generate 17 Chapter Speed Quizzes
  allChapters.forEach(ch => {
    const quizId = ch.id.replace('ncert-', 'quiz-');
    // Take 15 questions from practice questions (0 to 14)
    const quizQuestions = ch.practiceQuestions.slice(0, 15).map((q, idx) => ({
      ...q,
      id: idx + 1
    }));

    const quiz = {
      id: quizId,
      classLevel: "Class 10",
      exam: "Class 10",
      examTag: `Class 10 • ${ch.bookName ? ch.bookName.split('(')[0].trim() : 'NCERT'}`,
      subject: ch.subjectCode,
      title: `${ch.title.split(':')[0]}: 15-Minute Speed Quiz`,
      titleHi: `${ch.titleHi.split(':')[0]}: 15-मिनट स्पीड क्विज़`,
      timeLimit: 12,
      questionsCount: quizQuestions.length,
      badge: "SPEED QUIZ • 15 Qs",
      difficulty: "Moderate to Challenging",
      questions: quizQuestions
    };

    quizzes.push(quiz);
  });

  // 2. Generate 2 Grand Mock Tests
  // Term 1 Mock Test (30 questions):
  // 2 Qs each from Math Ch 1 to 7 (14 Qs) + 5 Qs Science, 5 Qs SST, 6 Qs Hindi = 30 Qs.
  const term1Questions = [];
  const mathChsP1 = allChapters.filter(c => c.subjectCode === 'MATH' && c.chapterNo <= 7);
  mathChsP1.forEach(c => {
    const picked = c.practiceQuestions.slice(15, 17);
    term1Questions.push(...picked);
  });
  const sciCh = allChapters.find(c => c.subjectCode === 'SCI');
  if (sciCh) term1Questions.push(...sciCh.practiceQuestions.slice(15, 20));
  const sstCh = allChapters.find(c => c.subjectCode === 'SST');
  if (sstCh) term1Questions.push(...sstCh.practiceQuestions.slice(15, 20));
  const hinCh = allChapters.find(c => c.subjectCode === 'HIN' || c.subjectCode === 'HINDI');
  if (hinCh) term1Questions.push(...hinCh.practiceQuestions.slice(15, 21));

  const testTerm1 = {
    id: "mock-ncert-c10-term1",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 Term-1",
    subject: "ALL",
    subjectCode: "ALL",
    title: "NCERT Class 10 All Subjects: Term-1 Full Mock Test Paper (Maths Ch 1-7, Science, SST, Hindi)",
    titleHi: "NCERT कक्षा 10 सर्व-विषय: प्रथम सत्र सम्पूर्ण मॉक टेस्ट पेपर (गणित अध्याय 1-7, विज्ञान, सामाजिक, हिन्दी)",
    totalMarks: 30,
    timeLimit: 30,
    questionsCount: 30,
    badge: "30-MCQ FULL MOCK",
    difficulty: "Moderate to High (Board & Competitive Grade)",
    questions: term1Questions.slice(0, 30).map((q, idx) => ({ ...q, id: idx + 1 }))
  };

  // Term 2 Mock Test (30 questions):
  // 2 Qs each from Math Ch 8 to 14 (14 Qs) + 5 Qs Science, 5 Qs SST, 6 Qs Hindi = 30 Qs
  const term2Questions = [];
  const mathChsP2 = allChapters.filter(c => c.subjectCode === 'MATH' && c.chapterNo >= 8);
  mathChsP2.forEach(c => {
    const picked = c.practiceQuestions.slice(20, 22);
    term2Questions.push(...picked);
  });
  if (sciCh) term2Questions.push(...sciCh.practiceQuestions.slice(20, 25));
  if (sstCh) term2Questions.push(...sstCh.practiceQuestions.slice(20, 25));
  if (hinCh) term2Questions.push(...hinCh.practiceQuestions.slice(20, 26));

  const testTerm2 = {
    id: "mock-ncert-c10-term2",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 Term-2",
    subject: "ALL",
    subjectCode: "ALL",
    title: "NCERT Class 10 All Subjects: Annual Board Grand Mock Test Paper (Maths Ch 8-14, Science, SST, Hindi)",
    titleHi: "NCERT कक्षा 10 सर्व-विषय: वार्षिक मुख्य मॉक टेस्ट पेपर (गणित अध्याय 8-14, विज्ञान, सामाजिक, हिन्दी)",
    totalMarks: 30,
    timeLimit: 30,
    questionsCount: 30,
    badge: "30-MCQ GRAND MOCK",
    difficulty: "High (Competition & Board Grade)",
    questions: term2Questions.slice(0, 30).map((q, idx) => ({ ...q, id: idx + 1 }))
  };

  return {
    quizzes,
    testSeries: [testTerm1, testTerm2]
  };
}

module.exports = generateQuizzesAndTests;
