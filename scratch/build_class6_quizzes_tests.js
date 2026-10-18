/**
 * build_class6_quizzes_tests.js
 * Generates 13 Speed Quizzes (15 questions each) and 2 Grand Mock Tests (30 questions each)
 * for NCERT Class 6 from the 13 chapters.
 */

function generateQuizzesAndTests(allChapters) {
  const quizzes = [];

  // 1. Generate 13 Chapter Speed Quizzes
  allChapters.forEach(ch => {
    const quizId = ch.id.replace('ncert-', 'quiz-');
    // Take 15 questions from practice questions (e.g. questions 1 to 15)
    const quizQuestions = ch.practiceQuestions.slice(0, 15).map((q, idx) => ({
      ...q,
      id: idx + 1
    }));

    const quiz = {
      id: quizId,
      classLevel: "Class 6",
      exam: "Class 6",
      examTag: `Class 6 • ${ch.bookName.split('(')[0].trim()}`,
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
  // 4 Qs from Math Ch 1, 4 Qs from Math Ch 2, 4 Qs from Math Ch 3, 4 Qs from Math Ch 4, 4 Qs from Math Ch 5 (20 Qs)
  // + 3 Qs from Science, 4 Qs from SST, 3 Qs from Hindi (10 Qs) = 30 Qs.
  const term1Questions = [];
  const mathChsP1 = allChapters.filter(c => c.subjectCode === 'MATH' && c.chapterNo <= 5);
  mathChsP1.forEach(c => {
    // pick questions 16 to 19 from practiceQuestions
    const picked = c.practiceQuestions.slice(15, 19);
    term1Questions.push(...picked);
  });
  const sciCh = allChapters.find(c => c.subjectCode === 'EVS');
  if (sciCh) term1Questions.push(...sciCh.practiceQuestions.slice(15, 19));
  const sstCh = allChapters.find(c => c.subjectCode === 'SST');
  if (sstCh) term1Questions.push(...sstCh.practiceQuestions.slice(15, 18));
  const hinCh = allChapters.find(c => c.subjectCode === 'HINDI');
  if (hinCh) term1Questions.push(...hinCh.practiceQuestions.slice(15, 18));

  const testTerm1 = {
    id: "mock-ncert-c6-term1",
    classLevel: "Class 6",
    exam: "Class 6",
    examTag: "NCERT Class 6 Term-1",
    subject: "ALL",
    subjectCode: "ALL",
    title: "NCERT Class 6 All Subjects: Term-1 Full Mock Test Paper (Maths, Science, SST, Hindi)",
    titleHi: "NCERT कक्षा 6 सर्व-विषय: प्रथम सत्र सम्पूर्ण मॉक टेस्ट पेपर (गणित, विज्ञान, सामाजिक, हिन्दी)",
    totalMarks: 30,
    timeLimit: 30,
    questionsCount: 30,
    badge: "30-MCQ FULL MOCK",
    difficulty: "Moderate to High",
    questions: term1Questions.slice(0, 30).map((q, idx) => ({ ...q, id: idx + 1 }))
  };

  // Term 2 Mock Test (30 questions):
  // 4 Qs each from Math Ch 6 to 10 (20 Qs) + 3 Qs Science, 4 Qs SST, 3 Qs Hindi = 30 Qs
  const term2Questions = [];
  const mathChsP2 = allChapters.filter(c => c.subjectCode === 'MATH' && c.chapterNo >= 6);
  mathChsP2.forEach(c => {
    const picked = c.practiceQuestions.slice(20, 24);
    term2Questions.push(...picked);
  });
  if (sciCh) term2Questions.push(...sciCh.practiceQuestions.slice(20, 24));
  if (sstCh) term2Questions.push(...sstCh.practiceQuestions.slice(20, 23));
  if (hinCh) term2Questions.push(...hinCh.practiceQuestions.slice(20, 23));

  const testTerm2 = {
    id: "mock-ncert-c6-term2",
    classLevel: "Class 6",
    exam: "Class 6",
    examTag: "NCERT Class 6 Term-2",
    subject: "ALL",
    subjectCode: "ALL",
    title: "NCERT Class 6 All Subjects: Annual Grand Mock Test Paper (Maths Ch 6-10, Science, SST, Hindi)",
    titleHi: "NCERT कक्षा 6 सर्व-विषय: वार्षिक मुख्य मॉक टेस्ट पेपर (गणित अध्याय 6-10, विज्ञान, सामाजिक, हिन्दी)",
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
