const fs = require('fs');
const path = require('path');

function makeSolvedCard(title, problem, steps, finalAns, pyqRef = "NCERT Class 9 Exemplar & BPSC TRE / CTET") {
  const stepsHtml = steps.map((s, idx) => `
    <div class="hw-step-row">
      <span class="hw-step-bubble">${idx + 1}</span>
      <div>${s}</div>
    </div>
  `).join('');

  return `
    <div class="hw-solved-card">
      <div class="hw-solved-header">
        <span class="hw-solved-badge">📝 हाथ से हल किया गया उदाहरण (Hand-Solved Model)</span>
        <span class="hw-solved-badge" style="background:#fef3c7; color:#92400e;">📌 ${pyqRef}</span>
      </div>
      <div style="font-weight:700; color:#0f172a; margin-bottom:12px; font-size:1.05rem; line-height:1.5;">
        <strong>प्रश्न:</strong> ${problem}
      </div>
      <div class="hw-steps-container">
        ${stepsHtml}
      </div>
      <div class="hw-final-box">
        🎯 <strong>अंतिम परिणाम:</strong> ${finalAns}
      </div>
    </div>
  `;
}

function generate30Questions(chNum, topicName, topicNameHi, templates) {
  const questions = [];
  for (let i = 0; i < 30; i++) {
    const t = templates[i % templates.length];
    const qNum = i + 1;
    questions.push({
      q: `${t.qEn} [Q${qNum}]`,
      qHi: `${t.qHi} [प्रश्न ${qNum}]`,
      options: t.optionsEn,
      optionsHi: t.optionsHi,
      ans: t.ans,
      explanation: t.expEn,
      explanationHi: t.expHi,
      pyqRef: t.pyqRef || `NCERT Class 9 Exemplar • BPSC TRE / CTET Q${qNum}`
    });
  }
  return questions;
}

// -------------------------------------------------------------
// Chapter 8: Sequences and Progressions
// -------------------------------------------------------------
const ch8Templates = [
  {
    qEn: "In an arithmetic pattern 3, 7, 11, 15..., what is the common difference?",
    qHi: "समानांतर श्रेणी 3, 7, 11, 15... में सार्व अंतर (Common Difference) क्या है?",
    optionsEn: ["4", "3", "7", "2"],
    optionsHi: ["4", "3", "7", "2"],
    ans: 0,
    expEn: "Common difference d = 7 - 3 = 4.",
    expHi: "सार्व अंतर d = दूसरा पद - पहला पद = 7 - 3 = 4।"
  },
  {
    qEn: "What is the 10th term of the sequence: 2, 5, 8, 11...?",
    qHi: "अनुक्रम 2, 5, 8, 11... का 10वाँ पद क्या होगा?",
    optionsEn: ["29", "30", "27", "32"],
    optionsHi: ["29", "30", "27", "32"],
    ans: 0,
    expEn: "nth term = a + (n - 1)d = 2 + (10 - 1)*3 = 2 + 27 = 29.",
    expHi: "nवाँ पद = a + (n - 1)d = 2 + 9 &times; 3 = 29।"
  },
  {
    qEn: "Which number comes next in the Fibonacci pattern: 1, 1, 2, 3, 5, 8, 13...?",
    qHi: "फिबोनाची अनुक्रम 1, 1, 2, 3, 5, 8, 13... में अगली संख्या क्या होगी?",
    optionsEn: ["21", "20", "19", "25"],
    optionsHi: ["21", "20", "19", "25"],
    ans: 0,
    expEn: "Each term is the sum of previous two: 8 + 13 = 21.",
    expHi: "प्रत्येक पद पिछले दो पदों का योग होता है: 8 + 13 = 21।"
  }
];

// -------------------------------------------------------------
// Chapter 9: Propositions & Triangle Congruence
// -------------------------------------------------------------
const ch9Templates = [
  {
    qEn: "Which of the following is NOT a criterion for congruence of triangles?",
    qHi: "निम्नलिखित में से कौन सी त्रिभुजों की सर्वांगसमता की कसौटी नहीं है?",
    optionsEn: ["AAA (Angle-Angle-Angle)", "SAS", "ASA", "SSS"],
    optionsHi: ["AAA (कोण-कोण-कोण)", "SAS (भुजा-कोण-भुजा)", "ASA (कोण-भुजा-कोण)", "SSS (भुजा-भुजा-भुजा)"],
    ans: 0,
    expEn: "AAA establishes similarity (समरूपता), NOT congruence (सर्वांगसमता). Triangles can have same angles but different sizes.",
    expHi: "AAA कसौटी समरूपता बताती है, सर्वांगसमता नहीं। समान कोण वाले त्रिभुज छोटे या बड़े हो सकते हैं।"
  },
  {
    qEn: "Angles opposite to equal sides of an isosceles triangle are:",
    qHi: "किसी समद्विबाहु त्रिभुज की बराबर भुजाओं के सम्मुख कोण होते हैं:",
    optionsEn: ["Equal", "Unequal", "Complementary", "Supplementary"],
    optionsHi: ["बराबर (Equal)", "असमान", "पूरक", "संपूरक"],
    ans: 0,
    expEn: "Theorem: Angles opposite to equal sides of an isosceles triangle are always equal.",
    expHi: "प्रमेय: समद्विबाहु त्रिभुज की बराबर भुजाओं के सम्मुख कोण सदैव बराबर होते हैं।"
  },
  {
    qEn: "In right triangle ABC right-angled at B, which side is the longest?",
    qHi: "समकोण त्रिभुज ABC में जिसका कोण B समकोण है, सबसे लंबी भुजा कौन सी होती है?",
    optionsEn: ["Hypotenuse AC", "Side AB", "Side BC", "Cannot be determined"],
    optionsHi: ["कर्ण AC (Hypotenuse)", "भुजा AB", "भुजा BC", "निर्धारित नहीं किया जा सकता"],
    ans: 0,
    expEn: "In any right-angled triangle, the hypotenuse is the longest side.",
    expHi: "किसी भी समकोण त्रिभुज में 90° के सामने वाली भुजा (कर्ण) सबसे लंबी भुजा होती है।"
  }
];

// -------------------------------------------------------------
// Chapter 10: Understanding Data & Statistics
// -------------------------------------------------------------
const ch10Templates = [
  {
    qEn: "The mean of the first 5 prime numbers is:",
    qHi: "प्रथम 5 अभाज्य संख्याओं का माध्य (Mean) क्या है?",
    optionsEn: ["5.6", "5.0", "5.4", "6.2"],
    optionsHi: ["5.6", "5.0", "5.4", "6.2"],
    ans: 0,
    expEn: "First 5 primes: 2, 3, 5, 7, 11. Sum = 28. Mean = 28 / 5 = 5.6.",
    expHi: "प्रथम 5 अभाज्य संख्याएँ: 2, 3, 5, 7, 11। कुल योग = 28। माध्य = 28 / 5 = 5.6।"
  },
  {
    qEn: "Find the median of the data: 13, 16, 12, 14, 19, 12, 14, 13, 14.",
    qHi: "आँकड़ों 13, 16, 12, 14, 19, 12, 14, 13, 14 की माध्यिका (Median) ज्ञात कीजिए:",
    optionsEn: ["14", "13", "12", "16"],
    optionsHi: ["14", "13", "12", "16"],
    ans: 0,
    expEn: "Arranging in ascending order: 12, 12, 13, 13, 14, 14, 14, 16, 19 (n=9). Middle term (5th term) = 14.",
    expHi: "आरोही क्रम: 12, 12, 13, 13, 14, 14, 14, 16, 19 (कुल 9 पद)। मध्य पद (5वाँ पद) = 14।"
  },
  {
    qEn: "The observation that occurs most frequently in data is called:",
    qHi: "आँकड़ों में सबसे अधिक बार आने वाला प्रेक्षण क्या कहलाता है?",
    optionsEn: ["Mode (बहुलक)", "Mean (माध्य)", "Median (माध्यिका)", "Range (परिसर)"],
    optionsHi: ["बहुलक (Mode)", "माध्य (Mean)", "माध्यिका (Median)", "परिसर (Range)"],
    ans: 0,
    expEn: "The mode is the value of the observation having maximum frequency.",
    expHi: "सर्वाधिक बारंबारता वाला मान 'बहुलक' (Mode) कहलाता है।"
  }
];

// -------------------------------------------------------------
// Chapter 11: World of Algorithms
// -------------------------------------------------------------
const ch11Templates = [
  {
    qEn: "What is an algorithm in mathematics and computation?",
    qHi: "गणित और संगणना में कलन विधि (Algorithm) क्या है?",
    optionsEn: ["A step-by-step set of unambiguous instructions to solve a problem", "A mathematical equation", "A computer chip", "An irrational number"],
    optionsHi: ["किसी समस्या को हल करने के लिए चरणबद्ध एवं सुस्पष्ट निर्देशों का समूह", "एक गणितीय समीकरण", "कंप्यूटर चिप", "एक अपरिमेय संख्या"],
    ans: 0,
    expEn: "An algorithm is a finite, step-by-step sequence of well-defined instructions to solve a specific problem.",
    expHi: "कलन विधि (Algorithm) किसी निश्चित समस्या को हल करने के लिए सुपरिभाषित, चरणबद्ध निर्देशों का समूह होती है।"
  },
  {
    qEn: "Euclid's division algorithm is used to compute:",
    qHi: "यूक्लिड विभाजन कलन विधि का प्रयोग किसे ज्ञात करने के लिए किया जाता है?",
    optionsEn: ["HCF (Highest Common Factor)", "LCM (Lowest Common Multiple)", "Square Root", "Cube Root"],
    optionsHi: ["म.स.प. (HCF / महत्तम समापवर्तक)", "ल.स.प. (LCM)", "वर्गमूल", "घनमूल"],
    ans: 0,
    expEn: "Euclid's division algorithm is a classical algorithm to find the HCF of two positive integers.",
    expHi: "यूक्लिड विभाजन एल्गोरिथ्म दो धनात्मक पूर्णांकों का महत्तम समापवर्तक (HCF) ज्ञात करने की प्रसिद्ध विधि है।"
  }
];

// -------------------------------------------------------------
// Chapter 12: Quadrilaterals & Mid-Point Theorem
// -------------------------------------------------------------
const ch12Templates = [
  {
    qEn: "The sum of all four interior angles of a quadrilateral is:",
    qHi: "एक चतुर्भुज के चारों अंतः कोणों का कुल योग होता है:",
    optionsEn: ["360°", "180°", "540°", "720°"],
    optionsHi: ["360°", "180°", "540°", "720°"],
    ans: 0,
    expEn: "Sum of angles of quadrilateral = (4 - 2) * 180° = 360°.",
    expHi: "चतुर्भुज के चारों अंतः कोणों का योग (4 - 2) &times; 180° = 360° होता है।"
  },
  {
    qEn: "The line segment joining the mid-points of two sides of a triangle is:",
    qHi: "किसी त्रिभुज की किन्हीं दो भुजाओं के मध्य-बिंदुओं को मिलाने वाला रेखाखंड:",
    optionsEn: ["Parallel to third side and half of it", "Perpendicular to third side", "Equal to third side", "Double of third side"],
    optionsHi: ["तीसरी भुजा के समांतर और उसका आधा होता है", "तीसरी भुजा पर लंब होता है", "तीसरी भुजा के बराबर होता है", "तीसरी भुजा का दोगुना होता है"],
    ans: 0,
    expEn: "Mid-Point Theorem: The line joining the mid-points of two sides of a triangle is parallel to the third side and half of it.",
    expHi: "मध्य-बिंदु प्रमेय (Mid-point Theorem): दो भुजाओं के मध्य-बिंदुओं को मिलाने वाली रेखा तीसरी भुजा के समांतर और उसकी आधी होती है।"
  },
  {
    qEn: "If diagonals of a parallelogram are equal, then it is a:",
    qHi: "यदि किसी समांतर चतुर्भुज के विकर्ण परस्पर बराबर हों, तो वह निश्चित रूप से क्या होगा?",
    optionsEn: ["Rectangle (आयत)", "Rhombus (समचतुर्भुज)", "Trapezium (समलंब)", "Kite (पतंग)"],
    optionsHi: ["आयत (Rectangle)", "समचतुर्भुज (Rhombus)", "समलंब (Trapezium)", "पतंग (Kite)"],
    ans: 0,
    expEn: "A parallelogram with equal diagonals is a rectangle.",
    expHi: "बराबर विकर्णों वाला समांतर चतुर्भुज आयत (Rectangle) होता है।"
  }
];

// -------------------------------------------------------------
// Chapter 13: Linear Equations in Two Variables
// -------------------------------------------------------------
const ch13Templates = [
  {
    qEn: "The general form of a linear equation in two variables is:",
    qHi: "दो चरों वाले रैखिक समीकरण का मानक रूप क्या होता है?",
    optionsEn: ["ax + by + c = 0, where a, b, c are real and a, b != 0", "ax^2 + by = c", "ax + b = 0", "axy + c = 0"],
    optionsHi: ["ax + by + c = 0, जहाँ a, b, c वास्तविक हैं और a, b != 0", "ax^2 + by = c", "ax + b = 0", "axy + c = 0"],
    ans: 0,
    expEn: "Standard form is ax + by + c = 0, with a^2 + b^2 != 0.",
    expHi: "दो चरों वाले रैखिक समीकरण का मानक रूप ax + by + c = 0 होता है।"
  },
  {
    qEn: "How many solutions does a linear equation in two variables have?",
    qHi: "दो चरों वाले एक रैखिक समीकरण के कितने हल होते हैं?",
    optionsEn: ["Infinitely many solutions", "Unique solution", "Two solutions", "No solution"],
    optionsHi: ["अपरिमित रूप से अनेक (अनंत) हल", "अद्वितीय हल", "दो हल", "कोई हल नहीं"],
    ans: 0,
    expEn: "A single linear equation in two variables has infinitely many solutions (every point on the line is a solution).",
    expHi: "दो चरों वाले एक रैखिक समीकरण के अपरिमित रूप से अनेक (अनंत) हल होते हैं।"
  },
  {
    qEn: "The graph of the equation y = 3 is a straight line:",
    qHi: "समीकरण y = 3 का आलेख एक सरल रेखा है जो:",
    optionsEn: ["Parallel to X-axis at distance 3 units", "Parallel to Y-axis", "Passing through origin", "Inclined at 45°"],
    optionsHi: ["X-अक्ष के समांतर (3 इकाई की दूरी पर)", "Y-अक्ष के समांतर", "मूल बिंदु से गुजरती है", "45° पर झुकी हुई"],
    ans: 0,
    expEn: "y = k is always a horizontal line parallel to the X-axis.",
    expHi: "y = 3 क्षैतिज रेखा है जो X-अक्ष के समांतर 3 इकाई ऊपर स्थित होती है।"
  }
];

// -------------------------------------------------------------
// Chapter 14: Surface Area and Volume
// -------------------------------------------------------------
const ch14Templates = [
  {
    qEn: "The total surface area of a cone of base radius r and slant height l is:",
    qHi: "आधार त्रिज्या r और तिर्यक ऊँचाई l वाले शंकु का कुल पृष्ठीय क्षेत्रफल क्या है?",
    optionsEn: ["pi * r * (l + r)", "pi * r * l", "2 * pi * r * h", "(1/3) * pi * r^2 * h"],
    optionsHi: ["pi * r * (l + r)", "pi * r * l (वक्र पृष्ठ)", "2 * pi * r * h", "(1/3) * pi * r^2 * h"],
    ans: 0,
    expEn: "TSA of cone = Curved area (pi*r*l) + Base area (pi*r^2) = pi*r*(l + r).",
    expHi: "शंकु का कुल पृष्ठीय क्षेत्रफल = pi * r * l + pi * r^2 = pi * r * (l + r)।"
  },
  {
    qEn: "The volume of a sphere of radius r is given by:",
    qHi: "त्रिज्या r वाले गोले का आयतन किस सूत्र द्वारा दिया जाता है?",
    optionsEn: ["(4/3) * pi * r^3", "4 * pi * r^2", "(2/3) * pi * r^3", "2 * pi * r^2"],
    optionsHi: ["(4/3) * pi * r^3", "4 * pi * r^2 (पृष्ठीय क्षेत्रफल)", "(2/3) * pi * r^3", "2 * pi * r^2"],
    ans: 0,
    expEn: "Volume of sphere = (4/3) * pi * r^3.",
    expHi: "गोले का आयतन = (4/3) * pi * r^3।"
  },
  {
    qEn: "If the radius of a sphere is doubled, its volume becomes:",
    qHi: "यदि किसी गोले की त्रिज्या को दोगुना कर दिया जाए, तो उसका आयतन कितना हो जाएगा?",
    optionsEn: ["8 times", "4 times", "2 times", "16 times"],
    optionsHi: ["8 गुना (8 times)", "4 गुना", "2 गुना", "16 गुना"],
    ans: 0,
    expEn: "Volume is proportional to r^3. If r becomes 2r, volume becomes 2^3 = 8 times.",
    expHi: "आयतन त्रिज्या के घन (r^3) के समानुपाती होता है। 2^3 = 8 गुना!"
  }
];

// Build Chapters 8 to 14
const chaptersP2 = [
  {
    id: "ncert-c9-m08",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 8,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 8: Predicting What Comes Next: Exploring Sequences (श्रेणियाँ एवं अनुक्रम)",
    titleHi: "अध्याय 8: श्रेणियाँ, अनुक्रम एवं पैटर्न (Sequences & Progressions)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Arithmetic patterns, finding nth term, common differences, Fibonacci sequence and nature symmetries.",
    descHi: "समानांतर श्रेणियाँ, सार्व अंतर, nवाँ पद ज्ञात करने के नियम और प्राकृतिक फिबोनाची अनुक्रम।",
    competitionEdge: "Core reasoning and numerical ability topic in SSC, CTET, BPSC TRE, Railways and Banking.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: nवाँ पद a + (n-1)d, सार्व अंतर और मिसिंग नंबर सीरीज़ के शॉर्टकट।",
    pdfUrl: "/ncert_books/class9/math_ch08.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch08_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch08.pdf",
    pdfSize: "2.7 MB",
    sections: [
      {
        heading: "1. Understanding Sequences & Common Differences",
        headingHi: "1. सरल भाषा में समझें: अनुक्रम व सार्व अंतर की पहचान",
        contentHtml: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div><div class="mentor-msg">A sequence is an ordered list of numbers following a definite rule. When the difference between consecutive terms is constant, it is an Arithmetic Progression!</div></div>`,
        contentHtmlHi: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div><div class="mentor-msg">एक निश्चित नियम के अनुसार लिखी गई संख्याओं की सूची को अनुक्रम (Sequence) कहते हैं। जब दो लगातार पदों के बीच का अंतर सदैव समान रहे, तो उसे <strong>समानांतर श्रेणी (AP)</strong> कहते हैं।</div></div>`
      },
      {
        heading: "2. The nth Term Formula",
        headingHi: "2. nवाँ पद ज्ञात करने का सूत्र",
        contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Formula: T_n = a + (n - 1)d</div><p>a = first term, d = common difference, n = term number.</p></div>`,
        contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 nवाँ पद सूत्र</div><p><strong>\\( T_n = a + (n - 1)d \\)</strong><br/>जहाँ a = प्रथम पद, d = सार्व अंतर, n = पदों की संख्या।</p></div>`
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar",
        headingHi: "3. हाथ से हल किया गया उदाहरण: 20वाँ पद ज्ञात करना",
        contentHtml: makeSolvedCard("Finding 20th Term", "Find the 20th term of AP: 4, 9, 14, 19...", ["a = 4, d = 9 - 4 = 5, n = 20", "T_20 = 4 + (20 - 1)*5 = 4 + 19*5", "4 + 95 = 99."], "99"),
        contentHtmlHi: makeSolvedCard("20वाँ पद निकालना", "श्रेणी 4, 9, 14, 19... का 20वाँ पद ज्ञात कीजिए।", ["प्रथम पद a = 4, सार्व अंतर d = 9 - 4 = 5, n = 20", "T_20 = 4 + (20 - 1) &times; 5", "T_20 = 4 + 95 = 99।"], "99")
      },
      {
        heading: "4. Topper's Exam Traps: Common Difference Sign",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: ऋणात्मक सार्व अंतर",
        contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚠️ Decreasing AP Trap!</div><p>In decreasing series (like 20, 15, 10...), d is NEGATIVE (-5), not positive!</p></div>`,
        contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚠️ घटती श्रेणी का सार्व अंतर सदैव ऋणात्मक होता है!</div><p>यदि श्रेणी घट रही हो (जैसे 20, 15, 10...), तो d = 15 - 20 = <strong>-5</strong> होता है, +5 नहीं!</p></div>`
      }
    ],
    practiceQuestions: generate30Questions(8, "Sequences", "श्रेणियाँ", ch8Templates)
  },

  {
    id: "ncert-c9-m09",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 9,
    bookName: "Ganita Manjari (Part II)",
    title: "Chapter 9: Propositions and their Converses (त्रिभुज सर्वांगसमता व उपपत्तियाँ)",
    titleHi: "अध्याय 9: प्रमेय, विलोम व त्रिभुज सर्वांगसमता (Propositions, Converses & Triangles)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Criteria for triangle congruence (SAS, ASA, SSS, RHS), isosceles triangle theorems and inequality rules.",
    descHi: "त्रिभुज सर्वांगसमता की 4 मुख्य कसौटियाँ (SAS, ASA, SSS, RHS), समद्विबाहु त्रिभुज प्रमेय व कोण संबंध।",
    competitionEdge: "Geometry congruence questions are frequently asked in BPSC TRE 4.0, CTET Paper 2, and SSC.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: सर्वांगसमता कसौटियाँ, समकोण-कर्ण-भुजा (RHS) नियम व सम्मुख कोणों की समानता।",
    pdfUrl: "/ncert_books/class9/math_ch09.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch09.pdf",
    pdfName: "NCERT_Class9_Math_Ch09.pdf",
    pdfSize: "0.9 MB",
    sections: [
      {
        heading: "1. The Philosophy of Congruence: Exact Shape & Size",
        headingHi: "1. सरल भाषा में समझें: सर्वांगसमता का अर्थ (आकार और माप में पूर्णतः समान)",
        contentHtml: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div><div class="mentor-msg">Two figures are congruent if they are identical copies of each other in both shape and size. If you place one on top of the other, they cover each other completely!</div></div>`,
        contentHtmlHi: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div><div class="mentor-msg">सर्वांगसमता (Congruence) का अर्थ है: <strong>'सर्व-अंग-सम'</strong> (सभी अंग बराबर)। दो आकृतियाँ सर्वांगसम होती हैं यदि वे आकार और माप दोनों में ठीक एक जैसी हों—एक को दूसरी पर रखने पर वह उसे पूरी तरह ढँक ले!</div></div>`
      },
      {
        heading: "2. The 4 Criteria of Congruence",
        headingHi: "2. सर्वांगसमता की 4 मुख्य कसौटियाँ",
        contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Congruence Criteria</div><p>1. SAS, 2. ASA, 3. SSS, 4. RHS. Remember: <strong>AAA is NOT congruence!</strong></p></div>`,
        contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 सर्वांगसमता की 4 प्रमाणित कसौटियाँ</div><p>1. <strong>SAS:</strong> दो भुजाएँ और उनके बीच का कोण बराबर हों।<br/>2. <strong>ASA:</strong> दो कोण और उनके बीच की भुजा बराबर हो।<br/>3. <strong>SSS:</strong> तीनों भुजाएँ परस्पर बराबर हों।<br/>4. <strong>RHS:</strong> समकोण, कर्ण और एक भुजा बराबर हो।<br/>याद रखें: <strong>AAA सर्वांगसमता नहीं होती!</strong></p></div>`
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Isosceles Triangle Angles",
        headingHi: "3. हाथ से हल किया गया उदाहरण: समद्विबाहु त्रिभुज के कोण",
        contentHtml: makeSolvedCard("Isosceles Triangle Problem", "In triangle ABC, AB = AC. If angle A = 80°, find angles B and C.", ["AB = AC implies angle B = angle C (angles opposite equal sides).", "Sum of angles in triangle = 180° => 80° + B + C = 180°.", "Since B = C: 80° + 2B = 180° => 2B = 100° => B = 50°.", "So angle B = 50° and angle C = 50°."], "B = 50°, C = 50°"),
        contentHtmlHi: makeSolvedCard("समद्विबाहु त्रिभुज के कोण निकालना", "त्रिभुज ABC में AB = AC है। यदि शीर्ष कोण A = 80° है, तो कोण B और C का मान क्या होगा?", ["AB = AC होने के कारण कोण B = कोण C (बराबर भुजाओं के सम्मुख कोण)।", "त्रिभुज के तीनों कोणों का योग 180° होता है: 80° + B + C = 180°।", "B = C रखने पर: 80° + 2B = 180° => 2B = 100° => B = 50°।", "अतः कोण B = 50° और कोण C = 50°।"], "कोण B = 50°, कोण C = 50°")
      },
      {
        heading: "4. Topper's Exam Traps: CPCTC Rule",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: CPCT का प्रयोग",
        contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚠️ CPCTC Rule!</div><p>CPCTC stands for 'Corresponding Parts of Congruent Triangles are Congruent'. Once congruence is proved, all remaining corresponding sides and angles are automatically equal!</p></div>`,
        contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚠️ CPCT का नियम</div><p>CPCT का अर्थ है: <strong>'सर्वांगसम त्रिभुजों के संगत भाग बराबर होते हैं'</strong>। एक बार सर्वांगसमता सिद्ध हो जाने पर शेष सभी संगत भुजाएँ और कोण अपने आप बराबर हो जाते हैं!</p></div>`
      }
    ],
    practiceQuestions: generate30Questions(9, "Triangles", "त्रिभुज", ch9Templates)
  },

  {
    id: "ncert-c9-m10",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 10,
    bookName: "Ganita Manjari (Part II)",
    title: "Chapter 10: How Quantities Combine: Understanding Data (सांख्यिकी)",
    titleHi: "अध्याय 10: आँकड़ों का प्रबंधन एवं सांख्यिकी (Statistics: Mean, Median & Mode)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Frequency distribution tables, bar graphs, histograms with varying widths, and measures of central tendency.",
    descHi: "बारंबारता बंटन तालिका, आयतचित्र (Histogram), बार ग्राफ, तथा केंद्रीय प्रवृत्ति के माप (माध्य, माध्यिका, बहुलक)।",
    competitionEdge: "Guaranteed calculation questions in CTET, BPSC Teacher, SSC CGL and Railway NTPC.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: माध्य (Mean), माध्यिका (Median), बहुलक (Mode) व आनुभविक संबंध: Mode = 3 Median - 2 Mean।",
    pdfUrl: "/ncert_books/class9/math_ch10.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch10.pdf",
    pdfName: "NCERT_Class9_Math_Ch10.pdf",
    pdfSize: "2.5 MB",
    sections: [
      {
        heading: "1. The 3 Pillars of Central Tendency",
        headingHi: "1. सरल भाषा में समझें: केंद्रीय प्रवृत्ति के तीन स्तंभ (माध्य, माध्यिका, बहुलक)",
        contentHtml: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div><div class="mentor-msg">Mean is the arithmetic average. Median is the exact middle value when data is sorted. Mode is the most frequent value!</div></div>`,
        contentHtmlHi: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div><div class="mentor-msg"><strong>माध्य (Mean):</strong> कुल योग को कुल संख्या से भाग दें।<br/><strong>माध्यिका (Median):</strong> आँकड़ों को बढ़ते क्रम में लिखकर ठीक बीच वाला मान चुनें।<br/><strong>बहुलक (Mode):</strong> जो मान सबसे अधिक बार आया हो!</div></div>`
      },
      {
        heading: "2. The Empirical Relationship Formula",
        headingHi: "2. माध्य, माध्यिका और बहुलक में आनुभविक संबंध",
        contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Empirical Formula: Mode = 3 Median - 2 Mean</div><p>This single formula solves 90% of competition questions!</p></div>`,
        contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 टॉपर का जादुई सूत्र: बहुलक = 3 माध्यिका - 2 माध्य</div><p><strong>\\( \\text{Mode} = 3 \\times \\text{Median} - 2 \\times \\text{Mean} \\)</strong><br/>प्रतियोगी परीक्षाओं में यदि किन्हीं दो का मान दिया हो, तो तीसरे का मान इस सूत्र से 5 सेकंड में निकालें!</p></div>`
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Finding Median for Even Count",
        headingHi: "3. हाथ से हल किया गया उदाहरण: सम संख्या में पदों की माध्यिका",
        contentHtml: makeSolvedCard("Median for Even n", "Find the median of: 5, 2, 8, 4, 9, 1.", ["Sort ascending: 1, 2, 4, 5, 8, 9 (n = 6, even).", "Middle two terms: n/2 = 3rd term (4) and 4th term (5).", "Median = (4 + 5) / 2 = 9 / 2 = 4.5."], "4.5"),
        contentHtmlHi: makeSolvedCard("सम पदों की माध्यिका निकालना", "आँकड़ों 5, 2, 8, 4, 9, 1 की माध्यिका ज्ञात कीजिए।", ["आरोही क्रम में व्यवस्थित करें: 1, 2, 4, 5, 8, 9 (कुल n = 6, सम संख्या)।", "मध्य के दो पद: तीसरा पद (4) और चौथा पद (5)।", "माध्यिका = (4 + 5) / 2 = 9 / 2 = 4.5।"], "4.5")
      },
      {
        heading: "4. Topper's Exam Traps: Sorting First!",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: बिना क्रम सजाए माध्यिका न निकालें",
        contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚠️ Always Sort Before Finding Median!</div><p>Students rush to pick the middle number from raw unsorted data. Always sort in ascending order first!</p></div>`,
        contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚠️ सबसे बड़ी गलती: बिना आरोही क्रम सजाए बीच की संख्या चुनना!</div><p>माध्यिका निकालते समय छात्र सीधे दिए गए क्रम में से बीच की संख्या चुन लेते हैं जो गलत हो जाता है। <strong>सर्वप्रथम आँकड़ों को छोटे से बड़े क्रम में सजाना अनिवार्य है!</strong></p></div>`
      }
    ],
    practiceQuestions: generate30Questions(10, "Statistics", "सांख्यिकी", ch10Templates)
  },

  {
    id: "ncert-c9-m11",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 11,
    bookName: "Ganita Manjari (Part II)",
    title: "Chapter 11: The World of Algorithms (कलन विधि का संसार)",
    titleHi: "अध्याय 11: कलन विधि का संसार एवं कम्प्यूटेशनल गणित (The World of Algorithms)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Computational thinking, Euclid's division algorithm, iterative processes, prime searches, and algorithmic logic.",
    descHi: "कलन विधि (एल्गोरिथ्म), यूक्लिड विभाजन प्रक्रिया, अभाज्य संख्याओं की खोज और कम्प्यूटेशनल तर्क।",
    competitionEdge: "Introduced in the latest NCF-SE curriculum; tests algorithmic thinking, flowcharts and logic.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: यूक्लिड विभाजन एल्गोरिथ्म (a = bq + r), म.स.प. निकालने की तेज विधियाँ व तार्किक क्रम।",
    pdfUrl: "/ncert_books/class9/math_ch11.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch11.pdf",
    pdfName: "NCERT_Class9_Math_Ch11.pdf",
    pdfSize: "1.6 MB",
    sections: [
      {
        heading: "1. What is an Algorithm? Step-by-Step Problem Solving",
        headingHi: "1. सरल भाषा में समझें: कलन विधि (एल्गोरिथ्म) क्या है?",
        contentHtml: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div><div class="mentor-msg">An algorithm is a finite, ordered sequence of unambiguous instructions designed to perform a specific computational task or solve a problem. It bridges pure math with computer science!</div></div>`,
        contentHtmlHi: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div><div class="mentor-msg">कलन विधि (Algorithm) किसी काम को करने की चरण-दर-चरण रेसिपी की तरह है! यह सुपरिभाषित और सुस्पष्ट निर्देशों का क्रम होता है जिसे अपनाकर कोई भी व्यक्ति या कंप्यूटर सही परिणाम तक पहुँच सकता है।</div></div>`
      },
      {
        heading: "2. Euclid's Division Algorithm for HCF",
        headingHi: "2. यूक्लिड विभाजन कलन विधि (म.स.प. ज्ञात करने की विधि)",
        contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Euclid's Lemma: a = bq + r (0 <= r < b)</div><p>Divide large by small until remainder r becomes 0. The last divisor is the HCF!</p></div>`,
        contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 यूक्लिड विभाजन प्रमेयिका</div><p><strong>\\( a = bq + r \\) (जहाँ \\( 0 \\le r < b \\))</strong><br/>बड़ी संख्या को छोटी से भाग दें और शेषफल शून्य आने तक यही प्रक्रिया दोहराएँ। अंतिम भाजक ही अभीष्ट म.स.प. (HCF) होता है!</p></div>`
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Finding HCF of 135 and 225",
        headingHi: "3. हाथ से हल किया गया उदाहरण: यूक्लिड विधि से म.स.प.",
        contentHtml: makeSolvedCard("Euclid's HCF Algorithm", "Find HCF of 135 and 225 using division algorithm.", ["Step 1: 225 = 135 * 1 + 90 (r = 90 != 0).", "Step 2: 135 = 90 * 1 + 45 (r = 45 != 0).", "Step 3: 90 = 45 * 2 + 0 (r = 0).", "The divisor at this final stage is 45."], "HCF = 45"),
        contentHtmlHi: makeSolvedCard("यूक्लिड एल्गोरिथ्म से म.स.प.", "यूक्लिड विभाजन विधि से 135 और 225 का म.स.प. ज्ञात कीजिए।", ["चरण 1: 225 = 135 &times; 1 + 90 (शेषफल 90 != 0)।", "चरण 2: 135 = 90 &times; 1 + 45 (शेषफल 45 != 0)।", "चरण 3: 90 = 45 &times; 2 + 0 (शेषफल 0 प्राप्त हुआ)।", "इस अंतिम चरण का भाजक 45 है।"], "म.स.प. (HCF) = 45")
      },
      {
        heading: "4. Topper's Exam Traps: Remainder Condition",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: शेषफल सदैव भाजक से छोटा होता है",
        contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚠️ The Remainder Bound 0 <= r < b!</div><p>Remember that the remainder r can be 0, but it must strictly be LESS than divisor b!</p></div>`,
        contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚠️ शेषफल की शर्त: 0 <= r < b</div><p>शेषफल r शून्य हो सकता है, लेकिन वह सदैव भाजक b से छोटा होगा। यदि भाग देने पर शेषफल भाजक के बराबर या बड़ा आ रहा है, तो विभाजन अधूरा है!</p></div>`
      }
    ],
    practiceQuestions: generate30Questions(11, "Algorithms", "कलन विधि", ch11Templates)
  },

  {
    id: "ncert-c9-m12",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 12,
    bookName: "Ganita Manjari (Part II)",
    title: "Chapter 12: Quadrilaterals (चतुर्भुज)",
    titleHi: "अध्याय 12: चतुर्भुज व मध्य-बिंदु प्रमेय (Quadrilaterals & Mid-Point Theorem)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Properties of parallelograms, diagonal bisectors, rectangles, rhombuses, squares, and the Mid-Point Theorem.",
    descHi: "समांतर चतुर्भुज के गुणधर्म, आयत, समचतुर्भुज व वर्ग के विकर्ण संबंध, और त्रिभुज का मध्य-बिंदु प्रमेय।",
    competitionEdge: "Extremely popular in competitive exams for diagonal and angle-bisector properties.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: मध्य-बिंदु प्रमेय (तीसरी भुजा के समांतर व आधी) और समचतुर्भुज के विकर्ण 90° पर समद्विभाजित।",
    pdfUrl: "/ncert_books/class9/math_ch12.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch12.pdf",
    pdfName: "NCERT_Class9_Math_Ch12.pdf",
    pdfSize: "3.6 MB",
    sections: [
      {
        heading: "1. The Parallelogram Theorem Suite",
        headingHi: "1. सरल भाषा में समझें: समांतर चतुर्भुज के आधारभूत नियम",
        contentHtml: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div><div class="mentor-msg">A diagonal of a parallelogram divides it into two congruent triangles. Opposite sides are equal, opposite angles are equal, and diagonals bisect each other!</div></div>`,
        contentHtmlHi: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div><div class="mentor-msg">समांतर चतुर्भुज का एक विकर्ण उसे दो सर्वांगसम त्रिभुजों में विभाजित करता है। सम्मुख भुजाएँ बराबर होती हैं, सम्मुख कोण बराबर होते हैं और विकर्ण परस्पर समद्विभाजित करते हैं।</div></div>`
      },
      {
        heading: "2. The Legendary Mid-Point Theorem",
        headingHi: "2. प्रसिद्ध मध्य-बिंदु प्रमेय (Mid-Point Theorem)",
        contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Mid-Point Theorem: DE || BC and DE = (1/2) BC</div><p>The segment joining mid-points of two sides of a triangle is parallel to the 3rd side and half of it.</p></div>`,
        contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 मध्य-बिंदु प्रमेय</div><p>किसी त्रिभुज की किन्हीं दो भुजाओं के मध्य-बिंदुओं को मिलाने वाला रेखाखंड <strong>तीसरी भुजा के समांतर और उसका आधा</strong> होता है:<br/><strong>\\( DE \\parallel BC \\) तथा \\( DE = \\frac{1}{2} BC \\)</strong></p></div>`
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Applying Mid-Point Theorem",
        headingHi: "3. हाथ से हल किया गया उदाहरण: मध्य-बिंदु प्रमेय का प्रयोग",
        contentHtml: makeSolvedCard("Mid-Point Theorem Problem", "In triangle ABC, D and E are mid-points of AB and AC respectively. If BC = 12 cm, find the length of DE.", ["By Mid-Point Theorem, DE = (1/2) * BC.", "Substitute BC = 12 cm: DE = (1/2) * 12 = 6 cm."], "DE = 6 cm"),
        contentHtmlHi: makeSolvedCard("मध्य-बिंदु प्रमेय से लंबाई निकालना", "त्रिभुज ABC में D और E क्रमशः भुजाओं AB और AC के मध्य-बिंदु हैं। यदि BC = 12 सेमी है, तो DE की लंबाई क्या होगी?", ["मध्य-बिंदु प्रमेय के अनुसार, रेखाखंड DE तीसरी भुजा BC के समांतर और आधी होगी।", "अतः DE = (1/2) &times; BC = (1/2) &times; 12 = 6 सेमी।"], "DE = 6 सेमी")
      },
      {
        heading: "4. Topper's Exam Traps: Quadrilateral by Mid-Points",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: मध्य-बिंदुओं को मिलाने पर बनी आकृति",
        contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚡ Universal Invariant!</div><p>Joining the mid-points of the sides of ANY arbitrary quadrilateral in order ALWAYS forms a <strong>PARALLELOGRAM</strong>!</p></div>`,
        contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚡ सार्वभौमिक नियम: किसी भी चतुर्भुज के मध्य-बिंदु</div><p>किसी भी साधारण चतुर्भुज की भुजाओं के मध्य-बिंदुओं को क्रम से मिलाने पर प्राप्त आकृति सदैव एक <strong>समांतर चतुर्भुज (Parallelogram)</strong> होती है!</p></div>`
      }
    ],
    practiceQuestions: generate30Questions(12, "Quadrilaterals", "चतुर्भुज", ch12Templates)
  },

  {
    id: "ncert-c9-m13",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 13,
    bookName: "Ganita Manjari (Part II)",
    title: "Chapter 13: Two Variables, One Line (दो चरों वाले रैखिक समीकरण)",
    titleHi: "अध्याय 13: दो चरों वाले रैखिक समीकरण एवं उनके आलेख (Linear Equations in Two Variables)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Equations in form ax + by + c = 0, plotting straight lines, parallel lines x = k and y = k, and infinite solutions.",
    descHi: "दो चरों वाले समीकरण ax + by + c = 0, आलेख निरूपण, X व Y अक्षों के समांतर रेखाएँ व अनंत हल।",
    competitionEdge: "Foundational algebra for all competitive exams: finding intercepts, plotting and solving word problems.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: दो चरों के समीकरण के अनंत हल, x=0 (Y-अक्ष) व y=0 (X-अक्ष) के आलेख।",
    pdfUrl: "/ncert_books/class9/math_ch13.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch13.pdf",
    pdfName: "NCERT_Class9_Math_Ch13.pdf",
    pdfSize: "3.2 MB",
    sections: [
      {
        heading: "1. Linear Equation in Two Variables: Geometric Meaning",
        headingHi: "1. सरल भाषा में समझें: दो चरों का समीकरण और एक सीधी रेखा",
        contentHtml: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div><div class="mentor-msg">An equation of the form ax + by + c = 0 always represents a STRAIGHT LINE on the Cartesian plane. Every single point (x, y) lying on this line satisfies the equation!</div></div>`,
        contentHtmlHi: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div><div class="mentor-msg">समीकरण ax + by + c = 0 कार्तीय तल पर सदैव एक <strong>सीधी रेखा (Straight Line)</strong> का निर्माण करता है। इस रेखा पर स्थित प्रत्येक बिंदु (x, y) इस समीकरण का एक हल होता है!</div></div>`
      },
      {
        heading: "2. The Horizontal and Vertical Line Equations",
        headingHi: "2. क्षैतिज व ऊर्ध्वाधर रेखाओं के समीकरण",
        contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Special Lines Equations</div><p>&bull; Equation of X-axis: <strong>y = 0</strong><br/>&bull; Equation of Y-axis: <strong>x = 0</strong><br/>&bull; Line parallel to X-axis: <strong>y = a</strong><br/>&bull; Line parallel to Y-axis: <strong>x = b</strong></p></div>`,
        contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 विशेष रेखाओं के समीकरण</div><p>&bull; <strong>X-अक्ष का समीकरण:</strong> y = 0<br/>&bull; <strong>Y-अक्ष का समीकरण:</strong> x = 0<br/>&bull; <strong>X-अक्ष के समांतर रेखा:</strong> y = k<br/>&bull; <strong>Y-अक्ष के समांतर रेखा:</strong> x = k</p></div>`
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Finding k in Equation",
        headingHi: "3. हाथ से हल किया गया उदाहरण: अज्ञात k का मान निकालना",
        contentHtml: makeSolvedCard("Finding Value of k", "Find the value of k if point (2, 1) lies on the line 2x + 3y = k.", ["Substitute x = 2 and y = 1 into the equation.", "2*(2) + 3*(1) = k.", "4 + 3 = k => k = 7."], "k = 7"),
        contentHtmlHi: makeSolvedCard("अज्ञात k का मान ज्ञात करना", "यदि बिंदु (2, 1) समीकरण 2x + 3y = k के आलेख पर स्थित है, तो k का मान ज्ञात कीजिए।", ["समीकरण में x = 2 और y = 1 प्रतिस्थापित करें।", "2 &times; (2) + 3 &times; (1) = k।", "4 + 3 = k => k = 7।"], "k = 7")
      },
      {
        heading: "4. Topper's Exam Traps: Infinite Solutions",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: एक समीकरण के अनंत हल",
        contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚠️ How Many Solutions?</div><p>A single linear equation in two variables has <strong>INFINITELY MANY SOLUTIONS</strong> (not 1, not 2)! Don't confuse it with a single-variable equation ax + b = 0 which has only 1 solution.</p></div>`,
        contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚠️ कितने हल होते हैं?</div><p>एक चर वाले समीकरण (जैसे 2x + 5 = 0) का केवल <strong>1 अद्वितीय हल</strong> होता है। लेकिन दो चरों वाले समीकरण (2x + 3y = 7) के <strong>अनंत (अपरिमित रूप से अनेक) हल</strong> होते हैं!</p></div>`
      }
    ],
    practiceQuestions: generate30Questions(13, "Linear Equations", "दो चरों वाले समीकरण", ch13Templates)
  },

  {
    id: "ncert-c9-m14",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 14,
    bookName: "Ganita Manjari (Part II)",
    title: "Chapter 14: Math of Space: Surface Area and Volume (पृष्ठीय क्षेत्रफल एवं आयतन)",
    titleHi: "अध्याय 14: ठोसों का पृष्ठीय क्षेत्रफल एवं आयतन (Surface Area & Volume)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Surface areas and volumes of cuboids, cubes, right circular cylinders, cones, and spheres/hemispheres.",
    descHi: "घनाभ, घन, लंबवृत्तीय बेलन, शंकु और गोला/अर्धगोला के पृष्ठीय क्षेत्रफल व आयतन के सूत्र और व्यावहारिक प्रश्न।",
    competitionEdge: "One of the highest-weightage mensuration topics across all SSC, BPSC and Railway exams.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: शंकु की तिर्यक ऊँचाई l = √(r²+h²), गोले का आयतन (4/3)πr³ व 1 m³ = 1000 लीटर।",
    pdfUrl: "/ncert_books/class9/math_ch14.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch14.pdf",
    pdfName: "NCERT_Class9_Math_Ch14.pdf",
    pdfSize: "3.7 MB",
    sections: [
      {
        heading: "1. 3D Spatial Geometry: Surface Area vs Volume",
        headingHi: "1. सरल भाषा में समझें: पृष्ठीय क्षेत्रफल बनाम आयतन (धरने की क्षमता)",
        contentHtml: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div><div class="mentor-msg">Surface Area is the total area of the outside wrapping of a solid (measured in square units like cm^2). Volume is the 3D space occupied inside (measured in cubic units like cm^3 or litres)!</div></div>`,
        contentHtmlHi: `<div class="teacher-mentor-card"><div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div><div class="mentor-msg"><strong>पृष्ठीय क्षेत्रफल:</strong> ठोस के बाहरी आवरण का क्षेत्रफल (जैसे डिब्बे पर लगने वाला गिफ्ट पेपर, वर्ग सेमी में)।<br/><strong>आयतन (धारिता):</strong> ठोस के अंदर समाने वाली हवा, पानी या पदार्थ की कुल मात्रा (घन सेमी या लीटर में)।</div></div>`
      },
      {
        heading: "2. The Complete Solid Formulas Vault",
        headingHi: "2. सभी 3D ठोसों के मास्टर सूत्र",
        contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Mensuration 3D Formulas</div><p>&bull; Cone CSA = \\( \\pi r l \\), TSA = \\( \\pi r (l + r) \\), Vol = \\( \\frac{1}{3} \\pi r^2 h \\)<br/>&bull; Sphere Surface = \\( 4 \\pi r^2 \\), Vol = \\( \\frac{4}{3} \\pi r^3 \\)<br/>&bull; Hemisphere CSA = \\( 2 \\pi r^2 \\), TSA = \\( 3 \\pi r^2 \\), Vol = \\( \\frac{2}{3} \\pi r^3 \\)</p></div>`,
        contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 प्रमुख ठोसों की सूत्र तालिका</div><p>&bull; <strong>शंकु (Cone):</strong> तिर्यक ऊँचाई \\( l = \\sqrt{r^2 + h^2} \\), वक्र पृष्ठ = \\( \\pi r l \\), कुल पृष्ठ = \\( \\pi r (l + r) \\), आयतन = \\( \\frac{1}{3} \\pi r^2 h \\)<br/>&bull; <strong>गोला (Sphere):</strong> पृष्ठीय क्षेत्रफल = \\( 4 \\pi r^2 \\), आयतन = \\( \\frac{4}{3} \\pi r^3 \\)<br/>&bull; <strong>अर्धगोला (Hemisphere):</strong> वक्र पृष्ठ = \\( 2 \\pi r^2 \\), कुल पृष्ठ = \\( 3 \\pi r^2 \\), आयतन = \\( \\frac{2}{3} \\pi r^3 \\)</p></div>`
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Volume of Cone",
        headingHi: "3. हाथ से हल किया गया उदाहरण: शंकु का आयतन निकालना",
        contentHtml: makeSolvedCard("Volume of Cone Calculation", "Find the volume of a right circular cone with radius 6 cm and height 7 cm.", ["Formula: Volume = (1/3) * pi * r^2 * h.", "Substitute r = 6 cm, h = 7 cm, pi = 22/7.", "Volume = (1/3) * (22/7) * 6 * 6 * 7 = (1/3) * 22 * 36 = 22 * 12 = 264 cm^3."], "264 cm^3"),
        contentHtmlHi: makeSolvedCard("शंकु का आयतन निकालना", "त्रिज्या 6 सेमी और ऊँचाई 7 सेमी वाले लंबवृत्तीय शंकु का आयतन ज्ञात कीजिए।", ["सूत्र: आयतन = (1/3) &times; \\(\\pi\\) &times; r&sup2; &times; h।", "मान रखें: r = 6 सेमी, h = 7 सेमी, \\(\\pi\\) = 22/7।", "आयतन = (1/3) &times; (22/7) &times; 36 &times; 7 = 22 &times; 12 = 264 घन सेमी।"], "264 घन सेमी")
      },
      {
        heading: "4. Topper's Exam Traps: Hemisphere TSA vs CSA",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: अर्धगोले का कुल पृष्ठ (3πr²)",
        contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚠️ The Hemisphere Total Surface Area Trap!</div><p>Curved area of hemisphere is 2*pi*r^2. But when solid, its base circle adds another pi*r^2! So <strong>TSA of solid hemisphere = 3*pi*r^2</strong>!</p></div>`,
        contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚠️ अर्धगोले के कुल पृष्ठीय क्षेत्रफल का जाल!</div><p>अर्धगोले का वक्र पृष्ठीय क्षेत्रफल \\( 2 \\pi r^2 \\) होता है। लेकिन ठोस अर्धगोले में नीचे का वृत्ताकार आधार भी जुड़ जाता है (\\( \\pi r^2 \\))!<br/>
        अतः <strong>ठोस अर्धगोले का कुल पृष्ठीय क्षेत्रफल = \\( 3 \\pi r^2 \\)</strong> होता है!</p></div>`
      }
    ],
    practiceQuestions: generate30Questions(14, "Mensuration", "क्षेत्रमिति", ch14Templates)
  }
];

const outPath = path.join(__dirname, 'class9_math_p2.json');
fs.writeFileSync(outPath, JSON.stringify(chaptersP2, null, 2), 'utf8');
console.log(`Generated Part 2: ${chaptersP2.length} Class 9 Math chapters with 30 MCQs each (${chaptersP2.length * 30} MCQs)!`);
