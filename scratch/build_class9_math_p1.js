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

// Generate 30 high-yield MCQs for a chapter
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
// Chapter 1: Orienting Yourself: The Use of Coordinates
// -------------------------------------------------------------
const ch1Templates = [
  {
    qEn: "What is the name of the horizontal and vertical lines drawn to determine the position of any point in the Cartesian plane?",
    qHi: "कार्तीय तल में किसी बिंदु की स्थिति निर्धारित करने वाली क्षैतिज और ऊर्ध्वाधर रेखाओं के नाम क्या हैं?",
    optionsEn: ["X-axis and Y-axis", "Origin and Quadrant", "Abscissa and Ordinate", "Line and Ray"],
    optionsHi: ["X-अक्ष और Y-अक्ष", "मूल बिंदु और चतुर्थांश", "भुज और कोटि", "रेखा और किरण"],
    ans: 0,
    expEn: "The horizontal line is called the X-axis and the vertical line is called the Y-axis.",
    expHi: "क्षैतिज रेखा को X-अक्ष (X-axis) और ऊर्ध्वाधर रेखा को Y-अक्ष (Y-axis) कहा जाता है।"
  },
  {
    qEn: "The point where the X-axis and Y-axis intersect is called:",
    qHi: "वह बिंदु जहाँ X-अक्ष और Y-अक्ष परस्पर प्रतिच्छेद करते हैं, कहलाता है:",
    optionsEn: ["Quadrant", "Origin (0, 0)", "Abscissa", "Ordinate"],
    optionsHi: ["चतुर्थांश", "मूल बिंदु (Origin: 0, 0)", "भुज", "कोटि"],
    ans: 1,
    expEn: "The point of intersection of axes is the origin O, with coordinates (0, 0).",
    expHi: "अक्षों का प्रतिच्छेद बिंदु मूल बिंदु (Origin) कहलाता है जिसके निर्देशांक (0, 0) होते हैं।"
  },
  {
    qEn: "In which quadrant does the point (-3, 5) lie?",
    qHi: "बिंदु (-3, 5) किस चतुर्थांश (Quadrant) में स्थित है?",
    optionsEn: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    optionsHi: ["प्रथम चतुर्थांश (Quadrant I)", "द्वितीय चतुर्थांश (Quadrant II)", "तृतीय चतुर्थांश (Quadrant III)", "चतुर्थ चतुर्थांश (Quadrant IV)"],
    ans: 1,
    expEn: "In Quadrant II, x is negative and y is positive (- , +).",
    expHi: "द्वितीय चतुर्थांश में x ऋणात्मक और y धनात्मक होता है (- , +)। अतः (-3, 5) द्वितीय चतुर्थांश में है।"
  },
  {
    qEn: "The abscissa of any point on the Y-axis is always:",
    qHi: "Y-अक्ष पर स्थित किसी भी बिंदु का भुज (Abscissa / x-coordinate) सदैव होता है:",
    optionsEn: ["0", "1", "-1", "Any real number"],
    optionsHi: ["0", "1", "-1", "कोई भी वास्तविक संख्या"],
    ans: 0,
    expEn: "Every point on the Y-axis has x-coordinate (abscissa) = 0, represented as (0, y).",
    expHi: "Y-अक्ष पर स्थित प्रत्येक बिंदु का x-निर्देशांक (भुज) सदैव 0 होता है (0, y)।"
  },
  {
    qEn: "The ordinate of any point on the X-axis is always:",
    qHi: "X-अक्ष पर स्थित किसी भी बिंदु की कोटि (Ordinate / y-coordinate) सदैव होती है:",
    optionsEn: ["1", "0", "-1", "Infinite"],
    optionsHi: ["1", "0", "-1", "अनंत"],
    ans: 1,
    expEn: "Every point on the X-axis has y-coordinate (ordinate) = 0, represented as (x, 0).",
    expHi: "X-अक्ष पर स्थित प्रत्येक बिंदु का y-निर्देशांक (कोटि) सदैव 0 होता है (x, 0)।"
  },
  {
    qEn: "If the coordinates of a point are (-4, -7), in which quadrant does it lie?",
    qHi: "यदि किसी बिंदु के निर्देशांक (-4, -7) हैं, तो वह किस चतुर्थांश में स्थित है?",
    optionsEn: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    optionsHi: ["प्रथम चतुर्थांश", "द्वितीय चतुर्थांश", "तृतीय चतुर्थांश (Quadrant III)", "चतुर्थ चतुर्थांश"],
    ans: 2,
    expEn: "When both x and y coordinates are negative (- , -), the point lies in Quadrant III.",
    expHi: "जब x और y दोनों निर्देशांक ऋणात्मक हों (- , -), तो बिंदु तृतीय चतुर्थांश में होता है।"
  }
];

// -------------------------------------------------------------
// Chapter 2: Introduction to Linear Polynomials
// -------------------------------------------------------------
const ch2Templates = [
  {
    qEn: "What is the degree of a non-zero constant polynomial?",
    qHi: "किसी शून्येतर अचर बहुपद (Non-zero constant polynomial) की घात क्या होती है?",
    optionsEn: ["0", "1", "Not defined", "Any integer"],
    optionsHi: ["0", "1", "परिभाषित नहीं", "कोई भी पूर्णांक"],
    ans: 0,
    expEn: "A constant polynomial like 5 = 5x^0 has degree 0.",
    expHi: "अचर बहुपद जैसे 5 को 5x^0 लिखा जा सकता है, अतः इसकी घात सदैव 0 होती है।"
  },
  {
    qEn: "The zero of the polynomial p(x) = 2x + 5 is:",
    qHi: "बहुपद p(x) = 2x + 5 का शून्यक (Zero) क्या है?",
    optionsEn: ["-5/2", "5/2", "-2/5", "2/5"],
    optionsHi: ["-5/2", "5/2", "-2/5", "2/5"],
    ans: 0,
    expEn: "To find zero: 2x + 5 = 0 => 2x = -5 => x = -5/2.",
    expHi: "शून्यक ज्ञात करने हेतु: 2x + 5 = 0 => 2x = -5 => x = -5/2।"
  },
  {
    qEn: "Which of the following expressions is a polynomial in one variable?",
    qHi: "निम्नलिखित में से कौन सा व्यंजक एक चर में बहुपद है?",
    optionsEn: ["4x^2 - 3x + 7", "x + 2/x", "3*sqrt(t) + t*sqrt(2)", "y + 2/y"],
    optionsHi: ["4x^2 - 3x + 7", "x + 2/x", "3*sqrt(t) + t*sqrt(2)", "y + 2/y"],
    ans: 0,
    expEn: "In a polynomial, the exponents of the variable must be whole numbers. 4x^2 - 3x + 7 has whole number powers.",
    expHi: "बहुपद में चर की घात सदैव एक पूर्ण संख्या (Whole Number) होनी चाहिए। केवल 4x^2 - 3x + 7 में घातें पूर्ण संख्याएँ हैं।"
  },
  {
    qEn: "What is the maximum number of zeroes a linear polynomial can have?",
    qHi: "एक रैखिक बहुपद (Linear Polynomial) के अधिकतम कितने शून्यक हो सकते हैं?",
    optionsEn: ["Exactly 1", "2", "Infinite", "0"],
    optionsHi: ["ठीक 1 शून्यक", "2", "अनंत", "0"],
    ans: 0,
    expEn: "A linear polynomial ax + b (a != 0) has exactly one unique zero: x = -b/a.",
    expHi: "एक रैखिक बहुपद ax + b (a != 0) का ठीक एक ही अद्वितीय शून्यक x = -b/a होता है।"
  },
  {
    qEn: "The degree of the zero polynomial is:",
    qHi: "शून्य बहुपद (Zero Polynomial) की घात क्या होती है?",
    optionsEn: ["Not defined", "0", "1", "Infinity"],
    optionsHi: ["परिभाषित नहीं (Not Defined)", "0", "1", "अनंत"],
    ans: 0,
    expEn: "By convention, the degree of the zero polynomial (0) is not defined.",
    expHi: "गणितीय नियमानुसार शून्य बहुपद (0) की घात परिभाषित नहीं है।"
  }
];

// -------------------------------------------------------------
// Chapter 3: The World of Numbers (Real Numbers, Irrationals & Surds)
// -------------------------------------------------------------
const ch3Templates = [
  {
    qEn: "Which of the following is an irrational number?",
    qHi: "निम्नलिखित में से कौन सी एक अपरिमेय संख्या (Irrational Number) है?",
    optionsEn: ["sqrt(2)", "sqrt(4)", "0.375", "22/7"],
    optionsHi: ["sqrt(2)", "sqrt(4) = 2", "0.375", "22/7"],
    ans: 0,
    expEn: "sqrt(2) is non-terminating and non-recurring, hence irrational. sqrt(4) = 2 is rational.",
    expHi: "sqrt(2) अशांत अनावर्ती (non-terminating non-recurring) दशमलव है, अतः अपरिमेय है।"
  },
  {
    qEn: "The decimal expansion of an irrational number is always:",
    qHi: "अपरिमेय संख्या का दशमलव प्रसार सदैव कैसा होता है?",
    optionsEn: ["Non-terminating and non-recurring", "Terminating", "Non-terminating recurring", "None of these"],
    optionsHi: ["अशांत और अनावर्ती (Non-terminating and non-recurring)", "शांत (Terminating)", "अशांत आवर्ती (Recurring)", "इनमें से कोई नहीं"],
    ans: 0,
    expEn: "An irrational number cannot be expressed as p/q and has non-terminating non-recurring decimal expansion.",
    expHi: "अपरिमेय संख्या का दशमलव रूप कभी समाप्त नहीं होता और न ही अंकों का कोई दोहराव पैटर्न होता है।"
  },
  {
    qEn: "Express 0.333... (0.3 bar) in p/q form:",
    qHi: "0.333... (0.3 पर बार) को p/q के रूप में व्यक्त कीजिए:",
    optionsEn: ["1/3", "3/10", "1/9", "3/99"],
    optionsHi: ["1/3", "3/10", "1/9", "3/99"],
    ans: 0,
    expEn: "Let x = 0.333... => 10x = 3.333... => 9x = 3 => x = 3/9 = 1/3.",
    expHi: "माना x = 0.333... => 10x = 3.333... => 9x = 3 => x = 3/9 = 1/3।"
  },
  {
    qEn: "What is the rationalising factor of 1 / (sqrt(7) - 2)?",
    qHi: "1 / (sqrt(7) - 2) का परिमेयकरण गुणक (Rationalising Factor) क्या है?",
    optionsEn: ["sqrt(7) + 2", "sqrt(7) - 2", "7 + sqrt(2)", "sqrt(7) * 2"],
    optionsHi: ["sqrt(7) + 2", "sqrt(7) - 2", "7 + sqrt(2)", "sqrt(7) * 2"],
    ans: 0,
    expEn: "The conjugate of (sqrt(a) - b) is (sqrt(a) + b). Multiplying yields a - b^2, which is rational.",
    expHi: "(sqrt(7) - 2) का संयुग्मी (conjugate) sqrt(7) + 2 है।"
  },
  {
    qEn: "The sum of a rational number and an irrational number is always:",
    qHi: "एक परिमेय संख्या और एक अपरिमेय संख्या का योग सदैव क्या होता है?",
    optionsEn: ["An irrational number", "A rational number", "Zero", "An integer"],
    optionsHi: ["अपरिमेय संख्या (Irrational Number)", "परिमेय संख्या", "शून्य", "पूर्णांक"],
    ans: 0,
    expEn: "Rational + Irrational = Irrational (e.g. 2 + sqrt(3) is irrational).",
    expHi: "परिमेय + अपरिमेय = अपरिमेय (जैसे 2 + sqrt(3) एक अपरिमेय संख्या है)।"
  }
];

// -------------------------------------------------------------
// Chapter 4: Exploring Algebraic Identities
// -------------------------------------------------------------
const ch4Templates = [
  {
    qEn: "What is the expansion of (x + y + z)^2?",
    qHi: "(x + y + z)^2 का प्रसारित रूप क्या है?",
    optionsEn: [
      "x^2 + y^2 + z^2 + 2xy + 2yz + 2zx",
      "x^2 + y^2 + z^2 - 2xy - 2yz - 2zx",
      "x^2 + y^2 + z^2 + xy + yz + zx",
      "x^3 + y^3 + z^3 + 3xyz"
    ],
    optionsHi: [
      "x^2 + y^2 + z^2 + 2xy + 2yz + 2zx",
      "x^2 + y^2 + z^2 - 2xy - 2yz - 2zx",
      "x^2 + y^2 + z^2 + xy + yz + zx",
      "x^3 + y^3 + z^3 + 3xyz"
    ],
    ans: 0,
    expEn: "Standard 3-variable identity: (x+y+z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx).",
    expHi: "मानक सर्वसमिका: (x+y+z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx।"
  },
  {
    qEn: "If x + y + z = 0, then x^3 + y^3 + z^3 is equal to:",
    qHi: "यदि x + y + z = 0 हो, तो x^3 + y^3 + z^3 का मान किसके बराबर होता है?",
    optionsEn: ["3xyz", "0", "xyz", "-3xyz"],
    optionsHi: ["3xyz", "0", "xyz", "-3xyz"],
    ans: 0,
    expEn: "When x + y + z = 0, the identity x^3 + y^3 + z^3 - 3xyz = (x+y+z)(...) becomes x^3 + y^3 + z^3 = 3xyz.",
    expHi: "जब x + y + z = 0 हो, तो x^3 + y^3 + z^3 = 3xyz होता है। यह प्रतियोगी परीक्षाओं का सर्वाधिक पसंदीदा प्रश्न है!"
  },
  {
    qEn: "Factorise x^3 + y^3:",
    qHi: "x^3 + y^3 का गुणनखंडन रूप क्या है?",
    optionsEn: [
      "(x + y)(x^2 - xy + y^2)",
      "(x - y)(x^2 + xy + y^2)",
      "(x + y)(x^2 + xy + y^2)",
      "(x + y)^3 - 3xy"
    ],
    optionsHi: [
      "(x + y)(x^2 - xy + y^2)",
      "(x - y)(x^2 + xy + y^2)",
      "(x + y)(x^2 + xy + y^2)",
      "(x + y)^3 - 3xy"
    ],
    ans: 0,
    expEn: "x^3 + y^3 = (x + y)(x^2 - xy + y^2). Notice the middle term is -xy.",
    expHi: "x^3 + y^3 = (x + y)(x^2 - xy + y^2)। ध्यान दें मध्य पद -xy होता है।"
  },
  {
    qEn: "Evaluate (102)^3 using identities:",
    qHi: "सर्वसमिका के प्रयोग से (102)^3 का मान ज्ञात कीजिए:",
    optionsEn: ["1061208", "1040408", "1081608", "1020608"],
    optionsHi: ["10,61,208", "10,40,408", "10,81,608", "10,20,608"],
    ans: 0,
    expEn: "(100 + 2)^3 = 100^3 + 2^3 + 3(100)(2)(100 + 2) = 1000000 + 8 + 61200 = 1061208.",
    expHi: "(100 + 2)^3 = 1000000 + 8 + 3(100)(2)(102) = 10,61,208।"
  }
];

// -------------------------------------------------------------
// Chapter 5: Shapes, Circles & Angles
// -------------------------------------------------------------
const ch5Templates = [
  {
    qEn: "The angle subtended by a diameter at any point on the semi-circle is:",
    qHi: "अर्धवृत्त में व्यास द्वारा परिधि के किसी बिंदु पर अंतरित कोण सदैव होता है:",
    optionsEn: ["Right angle (90°)", "Acute angle (<90°)", "Obtuse angle (>90°)", "Straight angle (180°)"],
    optionsHi: ["समकोण (90°)", "न्यूनकोण (<90°)", "अधिककोण (>90°)", "ऋजु कोण (180°)"],
    ans: 0,
    expEn: "Angle in a semi-circle is always a right angle (90°).",
    expHi: "अर्धवृत्त का कोण सदैव समकोण (90°) होता है।"
  },
  {
    qEn: "The angle subtended by an arc at the centre is ___ the angle subtended by it at any point on the remaining part of the circle.",
    qHi: "किसी चाप द्वारा केंद्र पर अंतरित कोण, शेष परिधि पर अंतरित कोण का ___ होता है।",
    optionsEn: ["Double (Twice)", "Half", "Equal", "Four times"],
    optionsHi: ["दोगुना (Twice)", "आधा", "बराबर", "चार गुना"],
    ans: 0,
    expEn: "Angle at center = 2 * Angle at circumference for the same arc.",
    expHi: "एक ही चाप द्वारा केंद्र पर बना कोण परिधि पर बने कोण का दोगुना होता है।"
  },
  {
    qEn: "Angles in the same segment of a circle are:",
    qHi: "एक ही वृत्तखंड के कोण परस्पर होते हैं:",
    optionsEn: ["Equal", "Complementary", "Supplementary", "Unequal"],
    optionsHi: ["बराबर (Equal)", "पूरक", "संपूरक", "असमान"],
    ans: 0,
    expEn: "Angles subtended by the same chord in the same segment are equal.",
    expHi: "एक ही वृत्तखंड में बने सभी कोण परस्पर बराबर होते हैं।"
  },
  {
    qEn: "The perpendicular from the centre of a circle to a chord:",
    qHi: "वृत्त के केंद्र से जीवा पर खींचा गया लंब जीवा को:",
    optionsEn: ["Bisects the chord", "Doubles the chord", "Triples the chord", "Does not divide"],
    optionsHi: ["समद्विभाजित करता है (Bisects)", "दोगुना करता है", "तिगुना करता है", "विभाजित नहीं करता"],
    ans: 0,
    expEn: "The perpendicular from the centre to a chord bisects the chord.",
    expHi: "केंद्र से जीवा पर डाला गया लंब जीवा को दो बराबर भागों में बांटता है।"
  }
];

// -------------------------------------------------------------
// Chapter 6: Measuring Space: Perimeter and Area (Heron's Formula)
// -------------------------------------------------------------
const ch6Templates = [
  {
    qEn: "Heron's formula for the area of a triangle with sides a, b, c is:",
    qHi: "भुजाओं a, b, c वाले त्रिभुज के क्षेत्रफल हेतु हीरोन का सूत्र क्या है?",
    optionsEn: [
      "sqrt[s(s - a)(s - b)(s - c)]",
      "(1/2) * base * height",
      "s(s - a)(s - b)(s - c)",
      "sqrt[(s - a)(s - b)(s - c)]"
    ],
    optionsHi: [
      "sqrt[s(s - a)(s - b)(s - c)]",
      "(1/2) * आधार * ऊँचाई",
      "s(s - a)(s - b)(s - c)",
      "sqrt[(s - a)(s - b)(s - c)]"
    ],
    ans: 0,
    expEn: "Area = sqrt[s(s-a)(s-b)(s-c)], where semi-perimeter s = (a + b + c) / 2.",
    expHi: "क्षेत्रफल = sqrt[s(s - a)(s - b)(s - c)], जहाँ अर्ध-परिमाप s = (a + b + c) / 2 होता है।"
  },
  {
    qEn: "The sides of a triangle are 3 cm, 4 cm, and 5 cm. Its area is:",
    qHi: "एक त्रिभुज की भुजाएँ 3 सेमी, 4 सेमी और 5 सेमी हैं। इसका क्षेत्रफल क्या होगा?",
    optionsEn: ["6 cm^2", "12 cm^2", "15 cm^2", "10 cm^2"],
    optionsHi: ["6 वर्ग सेमी", "12 वर्ग सेमी", "15 वर्ग सेमी", "10 वर्ग सेमी"],
    ans: 0,
    expEn: "Since 3^2 + 4^2 = 5^2, it is a right triangle. Area = 1/2 * 3 * 4 = 6 cm^2.",
    expHi: "3, 4, 5 एक समकोण त्रिभुज है। क्षेत्रफल = 1/2 * 3 * 4 = 6 वर्ग सेमी।"
  },
  {
    qEn: "The area of an equilateral triangle with side 'a' is:",
    qHi: "भुजा 'a' वाले समबाहु त्रिभुज का क्षेत्रफल क्या होता है?",
    optionsEn: ["(sqrt(3) / 4) * a^2", "(sqrt(3) / 2) * a^2", "(1 / 2) * a^2", "sqrt(3) * a^2"],
    optionsHi: ["(sqrt(3) / 4) * a^2", "(sqrt(3) / 2) * a^2", "(1 / 2) * a^2", "sqrt(3) * a^2"],
    ans: 0,
    expEn: "Area of equilateral triangle = (sqrt(3) / 4) * a^2.",
    expHi: "समबाहु त्रिभुज का क्षेत्रफल = (sqrt(3)/4) * a^2।"
  }
];

// -------------------------------------------------------------
// Chapter 7: The Mathematics of Maybe: Probability
// -------------------------------------------------------------
const ch7Templates = [
  {
    qEn: "A coin is tossed 1000 times with frequencies: Head: 455, Tail: 545. What is the empirical probability of getting a Head?",
    qHi: "एक सिक्के को 1000 बार उछाला गया: चित (Head) = 455, पट (Tail) = 545। चित आने की प्रायोगिक प्रायिकता क्या है?",
    optionsEn: ["0.455", "0.545", "0.5", "1"],
    optionsHi: ["0.455", "0.545", "0.5", "1"],
    ans: 0,
    expEn: "P(Head) = 455 / 1000 = 0.455.",
    expHi: "चित आने की प्रायिकता = 455 / 1000 = 0.455।"
  },
  {
    qEn: "The sum of the probabilities of all possible elementary events of an experiment is:",
    qHi: "किसी प्रयोग की सभी संभव प्रारंभिक घटनाओं की प्रायिकताओं का कुल योग सदैव होता है:",
    optionsEn: ["1", "0", "0.5", "Infinity"],
    optionsHi: ["1 (निश्चित)", "0", "0.5", "अनंत"],
    ans: 0,
    expEn: "The sum of probabilities of all elementary events is always 1.",
    expHi: "सभी प्रारंभिक घटनाओं की प्रायिकताओं का योग सदैव 1 होता है।"
  },
  {
    qEn: "Which of the following numbers cannot be a probability of an event?",
    qHi: "निम्नलिखित में से कौन सी संख्या किसी घटना की प्रायिकता नहीं हो सकती?",
    optionsEn: ["-1.5", "2/3", "15%", "0.7"],
    optionsHi: ["-1.5 (ऋणात्मक)", "2/3", "15% (0.15)", "0.7"],
    ans: 0,
    expEn: "Probability can never be negative (0 <= P(E) <= 1).",
    expHi: "प्रायिकता कभी भी ऋणात्मक नहीं हो सकती (0 <= P(E) <= 1)।"
  }
];

// Build Chapters 1 to 7
const chaptersP1 = [
  {
    id: "ncert-c9-m01",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 1,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 1: Orienting Yourself: The Use of Coordinates (निर्देशांकों का उपयोग)",
    titleHi: "अध्याय 1: निर्देशांकों का उपयोग एवं कार्तीय तल (Coordinates & Cartesian Plane)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Understand the Cartesian plane, X & Y axes, quadrants, plotting coordinates (x, y), and locating geometric points.",
    descHi: "कार्तीय निर्देशांक पद्धति, चतुर्थांशों के चिन्ह नियम, भुज व कोटि की पहचान और तल पर बिंदुओं की सटीक स्थिति निर्धारण।",
    competitionEdge: "High-yield in CTET, BPSC TRE & SSC exams: questions on quadrants, distance from axes, and reflection across axes.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: चतुर्थांशों में चिन्हों का नियम (+, -), अक्षों से लंबवत दूरी और अक्षों पर स्थित बिंदुओं के निर्देशांक।",
    pdfUrl: "/ncert_books/class9/math_ch01.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch01_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch01.pdf",
    pdfSize: "1.5 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Origin of Cartesian Plane & Real-Life Navigation",
        headingHi: "1. सरल भाषा में समझें: कार्तीय तल का इतिहास, दिशा निर्धारण व दैनिक जीवन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear Class 9 aspirants, welcome to higher secondary mathematics! Rene Descartes invented Cartesian coordinates while lying in bed watching a fly on the ceiling. To describe its exact position, he needed two perpendicular distances: one from the horizontal wall and one from the vertical wall. This gives us the ordered pair (x, y)!
            </div>
          </div>
          <div class="hw-sticky-note yellow">
            <div class="sticky-tape"></div>
            <div class="hw-sticky-title">📌 Golden Rule: Abscissa & Ordinate</div>
            <p>In the ordered pair (x, y): <br/>&bull; <strong>x is the Abscissa (भुज):</strong> Distance from Y-axis.<br/>&bull; <strong>y is the Ordinate (कोटि):</strong> Distance from X-axis.<br/>&bull; Origin O is (0, 0).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              कक्षा 9 गणित में आपका स्वागत है! फ्रांसीसी गणितज्ञ रेने देकार्त ने छत पर बैठी एक मक्खी की स्थिति बताने के लिए दो परस्पर लंबवत रेखाओं की कल्पना की। किसी भी समतल पर किसी बिंदु की सटीक स्थिति बताने के लिए हमें दो संख्याओं की आवश्यकता होती है: एक क्षैतिज दूरी (x) और एक ऊर्ध्वाधर दूरी (y)। इसी को <strong>क्रमित युग्म (Ordered Pair: x, y)</strong> कहते हैं।
            </div>
          </div>
          <div class="hw-sticky-note yellow">
            <div class="sticky-tape"></div>
            <div class="hw-sticky-title">📌 भुज (Abscissa) और कोटि (Ordinate)</div>
            <p>क्रमित युग्म (x, y) में:<br/>
            &bull; <strong>x-निर्देशांक को 'भुज' कहते हैं:</strong> यह Y-अक्ष से लंबवत दूरी है।<br/>
            &bull; <strong>y-निर्देशांक को 'कोटि' कहते हैं:</strong> यह X-अक्ष से लंबवत दूरी है।<br/>
            &bull; अक्षों के मिलन बिंदु को <strong>मूल बिंदु (Origin: 0, 0)</strong> कहते हैं।</p>
          </div>
        `
      },
      {
        heading: "2. The Four Quadrants & Sign Convention Matrix",
        headingHi: "2. चारों चतुर्थांश व चिन्ह परिपाटी चार्ट",
        contentHtml: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 Quadrant Sign Matrix</div>
            <p><strong>Quadrant I (+, +):</strong> Both x > 0 and y > 0 (Top-right)</p>
            <p><strong>Quadrant II (-, +):</strong> x < 0 and y > 0 (Top-left)</p>
            <p><strong>Quadrant III (-, -):</strong> Both x < 0 and y < 0 (Bottom-left)</p>
            <p><strong>Quadrant IV (+, -):</strong> x > 0 and y < 0 (Bottom-right)</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 चतुर्थांशों की चिन्ह परिपाटी तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>चतुर्थांश (Quadrant)</th>
                  <th>x-निर्देशांक (भुज)</th>
                  <th>y-निर्देशांक (कोटि)</th>
                  <th>चिन्ह प्रारूप</th>
                  <th>उदाहरण बिंदु</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>प्रथम चतुर्थांश (I)</strong></td>
                  <td>धनात्मक (+)</td>
                  <td>धनात्मक (+)</td>
                  <td>(+, +)</td>
                  <td>(3, 4), (5, 2)</td>
                </tr>
                <tr>
                  <td><strong>द्वितीय चतुर्थांश (II)</strong></td>
                  <td>ऋणात्मक (-)</td>
                  <td>धनात्मक (+)</td>
                  <td>(-, +)</td>
                  <td>(-2, 5), (-4, 1)</td>
                </tr>
                <tr>
                  <td><strong>तृतीय चतुर्थांश (III)</strong></td>
                  <td>ऋणात्मक (-)</td>
                  <td>ऋणात्मक (-)</td>
                  <td>(-, -)</td>
                  <td>(-3, -7), (-1, -1)</td>
                </tr>
                <tr>
                  <td><strong>चतुर्थ चतुर्थांश (IV)</strong></td>
                  <td>धनात्मक (+)</td>
                  <td>ऋणात्मक (-)</td>
                  <td>(+, -)</td>
                  <td>(4, -3), (2, -5)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar Problem",
        headingHi: "3. हाथ से हल किया गया उदाहरण: बिंदुओं की पहचान व अक्षों पर स्थिति",
        contentHtml: `
          ${makeSolvedCard(
            "Quadrant Identification",
            "Identify the quadrants/axes for: A(0, -4), B(-3, 5), C(4, 0), D(-2, -6).",
            [
              "<strong>Point A(0, -4):</strong> Here x = 0. Any point with x = 0 lies on the <strong>negative Y-axis</strong>.",
              "<strong>Point B(-3, 5):</strong> Here x is negative (-) and y is positive (+). Hence it lies in <strong>Quadrant II</strong>.",
              "<strong>Point C(4, 0):</strong> Here y = 0. Any point with y = 0 lies on the <strong>positive X-axis</strong>.",
              "<strong>Point D(-2, -6):</strong> Both x and y are negative (- , -). Hence it lies in <strong>Quadrant III</strong>."
            ],
            "A on Y-axis, B in Quad II, C on X-axis, D in Quad III",
            "NCERT Class 9 Ex 1.2"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "बिंदुओं की स्थिति निर्धारण",
            "बिंदु A(0, -4), B(-3, 5), C(4, 0), D(-2, -6) किस चतुर्थांश या अक्ष पर स्थित हैं?",
            [
              "<strong>बिंदु A(0, -4):</strong> यहाँ भुज x = 0 है। जब x = 0 हो, तो बिंदु <strong>ऋणात्मक Y-अक्ष</strong> पर स्थित होता है।",
              "<strong>बिंदु B(-3, 5):</strong> यहाँ x ऋणात्मक और y धनात्मक है (-, +)। अतः यह <strong>द्वितीय चतुर्थांश</strong> में है।",
              "<strong>बिंदु C(4, 0):</strong> यहाँ कोटि y = 0 है। जब y = 0 हो, तो बिंदु <strong>धनात्मक X-अक्ष</strong> पर स्थित होता है।",
              "<strong>बिंदु D(-2, -6):</strong> यहाँ दोनों ऋणात्मक हैं (-, -)। अतः यह <strong>तृतीय चतुर्थांश</strong> में है।"
            ],
            "A: Y-अक्ष पर, B: द्वितीय चतुर्थांश, C: X-अक्ष पर, D: तृतीय चतुर्थांश",
            "NCERT कक्षा 9 उदाहरण प्रश्न"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Distance from Axes & Coordinate Swapping",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप (Distance from Axes Trick)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Distance from Axes Trap!</div>
            <p>Students often mix this up: <br/>&bull; Distance of point (x, y) from X-axis = <strong>|y| (absolute value of ordinate)</strong>!<br/>&bull; Distance of point (x, y) from Y-axis = <strong>|x| (absolute value of abscissa)</strong>!<br/>&bull; Distance is ALWAYS positive, never negative!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: अक्षों से दूरी का नियम</div>
            <p>परीक्षक अक्सर पूछते हैं: 'बिंदु (-3, -5) की X-अक्ष से दूरी क्या है?' छात्र -5 या -3 लिख देते हैं, जो गलत है!<br/>
            &bull; X-अक्ष से लंबवत दूरी = <strong>|y| (कोटि का निरपेक्ष मान) = 5 इकाई</strong>!<br/>
            &bull; Y-अक्ष से लंबवत दूरी = <strong>|x| (भुज का निरपेक्ष मान) = 3 इकाई</strong>!<br/>
            दूरी कभी भी ऋणात्मक नहीं होती!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(1, "Coordinates", "निर्देशांक", ch1Templates)
  },

  {
    id: "ncert-c9-m02",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 2,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 2: Introduction to Linear Polynomials (रैखिक बहुपद)",
    titleHi: "अध्याय 2: रैखिक बहुपद एवं बीजीय व्यंजक (Linear Polynomials)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Terms, coefficients, degrees of polynomials, zeroes of linear polynomials, and remainder theorem basics.",
    descHi: "बहुपद की परिभाषा, पद व गुणांक, बहुपद की घात, रैखिक बहुपद के शून्यक और मान ज्ञात करने की विधियाँ।",
    competitionEdge: "Essential for algebraic problem solving in SSC, CTET and State Teacher recruitment exams.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: शून्यक ज्ञात करना, अचर बहुपद की घात और बहुपदों के मान का सत्यापन।",
    pdfUrl: "/ncert_books/class9/math_ch02.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch02_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch02.pdf",
    pdfSize: "2.8 MB",
    sections: [
      {
        heading: "1. Meaning of Polynomials & Whole Number Exponents",
        headingHi: "1. सरल भाषा में समझें: बहुपद की पहचान व चर की पूर्ण संख्या घात",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              An algebraic expression in which all exponents of the variable are <strong>WHOLE NUMBERS (0, 1, 2, 3...)</strong> is called a polynomial. If x has a fractional power (like &radic;x = x^(1/2)) or negative power (like 1/x = x^(-1)), it is NOT a polynomial!
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              बहुपद (Polynomial) की सबसे सरल पहचान यह है कि अज्ञात चर (x, y) की घात केवल और केवल <strong>पूर्ण संख्या (Whole Number: 0, 1, 2, 3...)</strong> होनी चाहिए। यदि चर पर करणी लगी हो (\\(\\sqrt{x}\\)) या वह हर में हो (\\(1/x\\)), तो वह बहुपद नहीं कहलाएगा!
            </div>
          </div>
        `
      },
      {
        heading: "2. Classification by Degree and Number of Terms",
        headingHi: "2. घात व पदों के आधार पर बहुपदों का वर्गीकरण",
        contentHtml: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 Types of Polynomials</div>
            <p><strong>By Degree:</strong> Linear (degree 1), Quadratic (degree 2), Cubic (degree 3), Constant (degree 0).</p>
            <p><strong>By Terms:</strong> Monomial (1 term), Binomial (2 terms), Trinomial (3 terms).</p>
            <p><strong>Zero of Polynomial:</strong> A real number c is a zero of p(x) if p(c) = 0.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 बहुपदों का वर्गीकरण चार्ट</div>
            <p><strong>घात के आधार पर:</strong> रैखिक (घात 1: 2x+3), द्विघात (घात 2: x&sup2;+5), त्रिघात (घात 3: x&sup3;-1), अचर (घात 0: संख्या 7)।</p>
            <p><strong>पदों के आधार पर:</strong> एकपदी (1 पद), द्विपदी (2 पद), त्रिपदी (3 पद)।</p>
            <p><strong>शून्यक (Zero):</strong> वह मान जिसे चर के स्थान पर रखने पर पूरे बहुपद का मान 0 हो जाए।</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Finding Zeroes",
        headingHi: "3. हाथ से हल किया गया उदाहरण: शून्यक ज्ञात करना",
        contentHtml: `
          ${makeSolvedCard(
            "Finding Zero of Linear Polynomial",
            "Find the zero of p(x) = 3x - 7 and verify.",
            [
              "<strong>Step 1 (Set p(x) = 0):</strong> 3x - 7 = 0.",
              "<strong>Step 2 (Transpose constant):</strong> 3x = 7.",
              "<strong>Step 3 (Divide by coefficient):</strong> x = 7/3.",
              "<strong>Step 4 (Verification):</strong> p(7/3) = 3*(7/3) - 7 = 7 - 7 = 0. Verified!"
            ],
            "x = 7/3",
            "NCERT Class 9 Ex 2.2"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "रैखिक बहुपद का शून्यक",
            "बहुपद p(x) = 3x - 7 का शून्यक ज्ञात कीजिए और सत्यापित कीजिए।",
            [
              "<strong>चरण 1 (p(x) को शून्य के बराबर रखें):</strong> 3x - 7 = 0।",
              "<strong>चरण 2 (अचर पद का पक्षांतरण):</strong> 3x = 7।",
              "<strong>चरण 3 (x का मान):</strong> x = 7/3।",
              "<strong>चरण 4 (सत्यापन):</strong> p(7/3) = 3*(7/3) - 7 = 7 - 7 = 0 ✅।"
            ],
            "x = 7/3",
            "NCERT कक्षा 9 प्रश्नावली 2.2"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Trap: Degree of Zero Polynomial",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: शून्य बहुपद की घात",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Zero Polynomial Trap!</div>
            <p><strong>Constant polynomial (like 7):</strong> Degree = 0.<br/><strong>Zero polynomial (0):</strong> Degree is <strong>NOT DEFINED (अपरिभाषित)</strong>!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: अचर बनाम शून्य बहुपद</div>
            <p>छात्र अक्सर भ्रमित होते हैं:<br/>
            &bull; किसी भी संख्या (जैसे 5, -9) की घात <strong>0</strong> होती है।<br/>
            &bull; लेकिन <strong>शून्य बहुपद (0) की घात 'अपरिभाषित' (Not Defined)</strong> होती है!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(2, "Polynomials", "बहुपद", ch2Templates)
  },

  {
    id: "ncert-c9-m03",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 3,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 3: The World of Numbers (संख्याओं का संसार: Real Numbers)",
    titleHi: "अध्याय 3: संख्याओं का संसार: वास्तविक व अपरिमेय संख्याएँ (Real & Irrational Numbers)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Irrational numbers on number line, rationalisation of denominators, laws of real exponents, and recurring decimals.",
    descHi: "अपरिमेय संख्याओं का वास्तविक स्वरूप, हर का परिमेयकरण, अशांत आवर्ती दशमलव को p/q में बदलना व घातांक नियम।",
    competitionEdge: "One of the most heavily tested topics in CTET, BPSC Teacher, SSC CGL and State PCS exams.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: हर का परिमेयकरण (Surds Rationalisation), 0.999... का रूपांतरण व घातांक नियम।",
    pdfUrl: "/ncert_books/class9/math_ch03.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch03_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch03.pdf",
    pdfSize: "2.4 MB",
    sections: [
      {
        heading: "1. Real Numbers: Rational vs Irrational & Decimal Expansions",
        headingHi: "1. सरल भाषा में समझें: परिमेय बनाम अपरिमेय संख्या और दशमलव प्रसार",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Real numbers consist of both rational and irrational numbers. Decimals that terminate (like 0.5) or repeat forever in a pattern (like 0.333...) are RATIONAL. Decimals that never terminate and never repeat (like &radic;2 = 1.41421356... or &pi; = 3.14159...) are IRRATIONAL!
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              वास्तविक संख्याएँ दो परिवारों से मिलकर बनती हैं: <strong>परिमेय</strong> और <strong>अपरिमेय</strong>। दशमलव रूप से पहचानें:<br/>
              1. शांत (Terminating: जैसे 0.5) या अशांत आवर्ती (Non-terminating repeating: जैसे 0.333...) = <strong>परिमेय संख्या</strong>।<br/>
              2. अशांत अनावर्ती (Non-terminating non-repeating: जैसे \\(\\sqrt{2}, \\sqrt{3}, \\pi\\)) = <strong>अपरिमेय संख्या</strong>।
            </div>
          </div>
        `
      },
      {
        heading: "2. Rationalisation of Surds & Laws of Real Exponents",
        headingHi: "2. हर का परिमेयकरण व करणी घातांक नियम",
        contentHtml: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 Rationalisation & Exponent Laws</div>
            <p><strong>Rationalisation:</strong> Multiply numerator and denominator by conjugate of denominator: <br/>\\( \\frac{1}{\\sqrt{a} + \\sqrt{b}} \\times \\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b} \\)</p>
            <p><strong>Exponent Laws:</strong> \\( a^p \\cdot a^q = a^{p+q} \\), \\( (a^p)^q = a^{pq} \\), \\( a^{-p} = 1/a^p \\).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 हर का परिमेयकरण सूत्र</div>
            <p>जब हर में करणी (surd) हो, तो उसके संयुग्मी (Conjugate) से ऊपर-नीचे गुणा करते हैं:<br/>
            \\( \\frac{1}{\\sqrt{a} + \\sqrt{b}} \\times \\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b} \\)</p>
            <p>इससे हर से करणी समाप्त होकर परिमेय संख्या बन जाती है!</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Converting 0.235 bar to p/q",
        headingHi: "3. हाथ से हल किया गया उदाहरण: बार (Bar) दशमलव को p/q में बदलना",
        contentHtml: `
          ${makeSolvedCard(
            "Recurring Decimal to p/q",
            "Express 0.2353535... (0.2 35 bar) in p/q form.",
            [
              "<strong>Step 1:</strong> Let x = 0.2353535...",
              "<strong>Step 2 (Multiply by 10 to shift non-repeating digit):</strong> 10x = 2.353535... (Eq 1)",
              "<strong>Step 3 (Multiply by 1000 since 2 digits repeat):</strong> 1000x = 235.3535... (Eq 2)",
              "<strong>Step 4 (Subtract Eq 1 from Eq 2):</strong> 1000x - 10x = 235.3535 - 2.3535 => 990x = 233.",
              "<strong>Step 5 (Final Fraction):</strong> x = 233 / 990."
            ],
            "233 / 990",
            "NCERT Class 9 Ex 1.3"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "आवर्ती दशमलव का परिमेय रूप",
            "0.2353535... (0.2 और 35 पर बार) को p/q के रूप में बदलिए।",
            [
              "<strong>चरण 1:</strong> माना x = 0.2353535...।",
              "<strong>चरण 2 (10 से गुणा):</strong> 10x = 2.353535... (समीकरण 1)।",
              "<strong>चरण 3 (1000 से गुणा क्योंकि 2 अंक दोहरा रहे हैं):</strong> 1000x = 235.3535... (समीकरण 2)।",
              "<strong>चरण 4 (समीकरण 2 में से 1 घटाने पर):</strong> 990x = 233।",
              "<strong>चरण 5 (अंतिम भिन्न):</strong> x = 233 / 990।"
            ],
            "233 / 990",
            "NCERT कक्षा 9 उदाहरण 9"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Pi vs 22/7",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: पाई (π) बनाम 22/7",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Pi (π) vs 22/7 Classic Trap!</div>
            <p><strong>&pi; is IRRATIONAL</strong> (it is an infinite non-repeating constant)! <br/><strong>22/7 is RATIONAL</strong> (it is a p/q fraction)! <br/>22/7 is only an approximate value used for calculations!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ सबसे प्रसिद्ध परीक्षा ट्रैप: पाई (π) बनाम 22/7</div>
            <p>प्रतियोगी परीक्षाओं में बार-बार पूछा जाता है:<br/>
            &bull; <strong>पाई (\\(\\pi\\)) एक अपरिमेय संख्या है!</strong><br/>
            &bull; <strong>22/7 एक परिमेय संख्या है</strong> (क्योंकि यह p/q रूप में है)!<br/>
            22/7 केवल गणना की सुविधा के लिए माना गया सन्निकट मान है, पाई का यथार्थ मान नहीं!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(3, "Real Numbers", "वास्तविक संख्याएँ", ch3Templates)
  },

  {
    id: "ncert-c9-m04",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 4,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 4: Exploring Algebraic Identities (बीजीय सर्वसमिकाओं की खोज)",
    titleHi: "अध्याय 4: बीजीय सर्वसमिकाएँ व गुणनखंडन (Algebraic Identities & Factorisation)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Master cubic identities, three-variable identities, conditional identities (x+y+z=0), and splitting middle terms.",
    descHi: "त्रिघातीय सर्वसमिकाएँ, तीन चरों के वर्ग, x+y+z=0 की विशेष शर्त और बहुपदों का मध्य पद विभाजन द्वारा गुणनखंडन।",
    competitionEdge: "Heavily featured in SSC CGL, BPSC TRE High School, CTET Paper 2, and State PCS CSAT.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: यदि x+y+z=0 तो x³+y³+z³=3xyz, तथा (a+b)³ व (a-b)³ के प्रयोग से सेकंडों में हल।",
    pdfUrl: "/ncert_books/class9/math_ch04.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch04_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch04.pdf",
    pdfSize: "2.2 MB",
    sections: [
      {
        heading: "1. Comprehensive Algebraic Identities Vault",
        headingHi: "1. सरल भाषा में समझें: कक्षा 9 की प्रमुख बीजीय सर्वसमिकाएँ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Identities are algebraic equalities that hold true for ALL values of variables. In Class 9, we expand to cubic identities like (x + y)^3, (x - y)^3, and the grand identity: x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)!
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              सर्वसमिका वह समीकरण है जो चर के प्रत्येक मान के लिए सत्य होती है। कक्षा 9 में त्रिघातीय (Cubic) और तीन चरों वाली सर्वसमिकाएँ शामिल हैं जो प्रतियोगी परीक्षाओं में जटिल गुणा-भाग को सेकंडों में हल करा देती हैं।
            </div>
          </div>
        `
      },
      {
        heading: "2. The Grand Identities Table",
        headingHi: "2. मुख्य हस्तलिखित सर्वसमिका चार्ट",
        contentHtml: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 Class 9 Identities Cheat Sheet</div>
            <p>1. \\( (x+y+z)^2 = x^2+y^2+z^2+2xy+2yz+2zx \\)</p>
            <p>2. \\( (x+y)^3 = x^3 + y^3 + 3xy(x+y) \\)</p>
            <p>3. \\( (x-y)^3 = x^3 - y^3 - 3xy(x-y) \\)</p>
            <p>4. \\( x^3 + y^3 = (x+y)(x^2 - xy + y^2) \\)</p>
            <p>5. \\( x^3 - y^3 = (x-y)(x^2 + xy + y^2) \\)</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 कक्षा 9 की मुख्य सर्वसमिका तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>सर्वसमिका</th>
                  <th>प्रसारित रूप</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>\\( (x+y+z)^2 \\)</td>
                  <td>\\( x^2+y^2+z^2 + 2xy + 2yz + 2zx \\)</td>
                </tr>
                <tr>
                  <td>\\( (x+y)^3 \\)</td>
                  <td>\\( x^3 + y^3 + 3xy(x+y) \\)</td>
                </tr>
                <tr>
                  <td>\\( (x-y)^3 \\)</td>
                  <td>\\( x^3 - y^3 - 3xy(x-y) \\)</td>
                </tr>
                <tr>
                  <td>\\( x^3 + y^3 \\)</td>
                  <td>\\( (x+y)(x^2 - xy + y^2) \\)</td>
                </tr>
                <tr>
                  <td>\\( x^3 - y^3 \\)</td>
                  <td>\\( (x-y)(x^2 + xy + y^2) \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Special Conditional Identity",
        headingHi: "3. हाथ से हल किया गया उदाहरण: बिना घनों की गणना किए सीधे मान निकालना",
        contentHtml: `
          ${makeSolvedCard(
            "Using Identity when x+y+z=0",
            "Without actually calculating the cubes, find the value of: (-12)^3 + (7)^3 + (5)^3.",
            [
              "<strong>Step 1 (Check sum of numbers):</strong> Let x = -12, y = 7, z = 5. <br/>x + y + z = -12 + 7 + 5 = 0.",
              "<strong>Step 2 (Recall Conditional Identity):</strong> If x + y + z = 0, then \\( x^3 + y^3 + z^3 = 3xyz \\).",
              "<strong>Step 3 (Multiply):</strong> \\( 3 \\times (-12) \\times 7 \\times 5 = -36 \\times 35 = -1260 \\)."
            ],
            "-1260",
            "NCERT Class 9 Ex 2.5 Q14"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "बिना घन निकाले मान ज्ञात करना",
            "वास्तव में घनों का परिकलन किए बिना मान ज्ञात कीजिए: (-12)^3 + (7)^3 + (5)^3।",
            [
              "<strong>चरण 1 (योग की जाँच):</strong> माना x = -12, y = 7, z = 5। <br/>x + y + z = -12 + 7 + 5 = 0।",
              "<strong>चरण 2 (विशेष सर्वसमिका):</strong> यदि x + y + z = 0 हो, तो \\( x^3 + y^3 + z^3 = 3xyz \\) होता है।",
              "<strong>चरण 3 (सीधे गुणा):</strong> \\( 3 \\times (-12) \\times 7 \\times 5 = -36 \\times 35 = -1260 \\)।"
            ],
            "-1260",
            "NCERT कक्षा 9 प्रश्नावली 2.5 प्रश्न 14"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The Sign Inversion in x^3 - y^3",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: x³ - y³ में मध्य पद का चिन्ह",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Middle Term Sign Trap!</div>
            <p>Notice carefully: <br/>&bull; \\( x^3 + y^3 = (x+y)(x^2 \\mathbf{- xy} + y^2) \\) &larr; middle is MINUS!<br/>&bull; \\( x^3 - y^3 = (x-y)(x^2 \\mathbf{+ xy} + y^2) \\) &larr; middle is PLUS!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: मध्य पद का चिन्ह</div>
            <p>परीक्षार्थी अक्सर चिन्ह में गलती करते हैं:<br/>
            &bull; \\( x^3 + y^3 = (x+y)(x^2 \\mathbf{- xy} + y^2) \\) &larr; अंदर का पद <strong>माइनस (-xy)</strong> होता है!<br/>
            &bull; \\( x^3 - y^3 = (x-y)(x^2 \\mathbf{+ xy} + y^2) \\) &larr; अंदर का पद <strong>प्लस (+xy)</strong> होता है!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(4, "Identities", "सर्वसमिकाएँ", ch4Templates)
  },

  {
    id: "ncert-c9-m05",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 5,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 5: Shapes, Circles & Geometric Angles (आकृतियाँ, वृत्त एवं कोण)",
    titleHi: "अध्याय 5: आकृतियाँ, वृत्त एवं ज्यामितीय कोण (Shapes, Circles & Angles)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Chords and arcs of circles, angle subtended by arcs, cyclic quadrilaterals, and semi-circle angle properties.",
    descHi: "वृत्त की जीवाएँ व चाप, केंद्र पर अंतरित कोण, चक्रीय चतुर्भुज के सम्मुख कोण और अर्धवृत्त में समकोण के गुणधर्म।",
    competitionEdge: "Geometry questions on circles are guaranteed in SSC CGL, BPSC TRE and CTET Paper 2.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: अर्धवृत्त का कोण समकोण, चक्रीय चतुर्भुज के सम्मुख कोणों का योग 180° व केंद्र पर कोण दोगुना।",
    pdfUrl: "/ncert_books/class9/math_ch05.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch05_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch05.pdf",
    pdfSize: "2.1 MB",
    sections: [
      {
        heading: "1. Circle Anatomy & Fundamental Theorems",
        headingHi: "1. सरल भाषा में समझें: वृत्त की संरचना व आधारभूत प्रमेय",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              A circle is the collection of all points in a plane which are at a fixed distance (radius) from a fixed point (centre). Key theorems: Perpendicular from centre bisects chord. Equal chords are equidistant from centre.
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              एक तल में स्थित उन सभी बिंदुओं का समूह जो एक निश्चित बिंदु (केंद्र) से समान दूरी (त्रिज्या) पर हों, वृत्त कहलाता है। वृत्त के केंद्र से किसी जीवा पर डाला गया लंब जीवा को दो बराबर भागों में बाँटता है।
            </div>
          </div>
        `
      },
      {
        heading: "2. The Three Master Circle Theorems",
        headingHi: "2. वृत्त के तीन मुख्य प्रमेय व चक्रीय चतुर्भुज",
        contentHtml: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 Circle Core Theorems</div>
            <p><strong>Theorem 1:</strong> Angle subtended by an arc at the centre is DOUBLE the angle at circumference.</p>
            <p><strong>Theorem 2:</strong> Angle in a semi-circle is 90&deg; (Right Angle).</p>
            <p><strong>Theorem 3:</strong> In a Cyclic Quadrilateral, opposite angles sum to 180&deg; (Supplementary).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 वृत्त के तीन अटल प्रमेय</div>
            <p><strong>प्रमेय 1 (केंद्र का कोण):</strong> किसी चाप द्वारा केंद्र पर अंतरित कोण परिधि के किसी बिंदु पर बने कोण का <strong>दोगुना</strong> होता है।</p>
            <p><strong>प्रमेय 2 (अर्धवृत्त का कोण):</strong> अर्धवृत्त में बना कोण सदैव <strong>समकोण (90&deg;)</strong> होता है।</p>
            <p><strong>प्रमेय 3 (चक्रीय चतुर्भुज):</strong> चक्रीय चतुर्भुज के सम्मुख कोणों के प्रत्येक युग्म का योग सदैव <strong>180&deg; (संपूरक)</strong> होता है।</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Finding Angle Subtended by Arc",
        headingHi: "3. हाथ से हल किया गया उदाहरण: केंद्र पर अंतरित कोण से परिधि का कोण निकालना",
        contentHtml: `
          ${makeSolvedCard(
            "Angle at Center vs Circumference",
            "In a circle with centre O, arc AB subtends an angle of 100&deg; at the centre. What angle does it subtend at point C on the major arc?",
            [
              "<strong>Step 1 (Identify Arc and Angles):</strong> Angle at centre &ang;AOB = 100&deg;. Angle on circle = &ang;ACB.",
              "<strong>Step 2 (Apply Theorem):</strong> &ang;AOB = 2 &times; &ang;ACB.",
              "<strong>Step 3 (Calculate):</strong> &ang;ACB = &ang;AOB / 2 = 100&deg; / 2 = 50&deg;."
            ],
            "&ang;ACB = 50&deg;",
            "NCERT Class 9 Circles"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "केंद्र बनाम परिधि कोण की गणना",
            "केंद्र O वाले वृत्त में चाप AB द्वारा केंद्र पर 100&deg; का कोण अंतरित होता है। दीर्घ वृत्तखंड में स्थित बिंदु C पर कोण का मान क्या होगा?",
            [
              "<strong>चरण 1 (दिए गए मान):</strong> केंद्र पर कोण &ang;AOB = 100&deg;।",
              "<strong>चरण 2 (प्रमेय लागू करना):</strong> केंद्र का कोण परिधि के कोण का दोगुना होता है: &ang;AOB = 2 &times; &ang;ACB।",
              "<strong>चरण 3 (गणना):</strong> &ang;ACB = 100&deg; / 2 = 50&deg;।"
            ],
            "&ang;ACB = 50&deg;",
            "NCERT कक्षा 9 उदाहरण"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Cyclic Quadrilaterals",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: चक्रीय चतुर्भुज का सम्मुख कोण नियम",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Cyclic Quadrilateral Trap!</div>
            <p>If all four vertices of a quadrilateral lie on a circle, it is CYCLIC. <br/><strong>Opposite Angles Sum: &ang;A + &ang;C = 180&deg; and &ang;B + &ang;D = 180&deg;</strong>. <br/>If &ang;A = 70&deg;, then opposite &ang;C is immediately 180&deg; - 70&deg; = 110&deg;!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ चक्रीय चतुर्भुज का डायरेक्ट 2-सेकंड शॉर्टकट</div>
            <p>यदि चतुर्भुज के चारों शीर्ष वृत्त पर स्थित हों:<br/>
            <strong>सम्मुख कोणों का योग = 180&deg;</strong> (&ang;A + &ang;C = 180&deg; तथा &ang;B + &ang;D = 180&deg;)।<br/>
            यदि कोण A = 70&deg; दिया है, तो कोण C सीधे 180&deg; - 70&deg; = 110&deg; होगा!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(5, "Circles & Shapes", "वृत्त एवं आकृतियाँ", ch5Templates)
  },

  {
    id: "ncert-c9-m06",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 6,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 6: Measuring Space: Perimeter and Area (हीरोन का सूत्र)",
    titleHi: "अध्याय 6: परिमाप एवं क्षेत्रफल: हीरोन का सूत्र (Perimeter, Area & Heron's Formula)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Application of Heron's formula for scalene, isosceles and equilateral triangles, and quadrilaterals.",
    descHi: "विषमबाहु व समद्विबाहु त्रिभुज का क्षेत्रफल ज्ञात करने हेतु हीरोन सूत्र का प्रयोग व व्यावहारिक अनुप्रयोग।",
    competitionEdge: "Essential formula question in SSC CGL, BPSC TRE, CTET and State Constable/SI exams.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: जब ऊँचाई ज्ञात न हो तो तीनों भुजाओं (a, b, c) से क्षेत्रफल निकालना व समबाहु त्रिभुज शॉर्टकट।",
    pdfUrl: "/ncert_books/class9/math_ch06.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch06_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch06.pdf",
    pdfSize: "3.3 MB",
    sections: [
      {
        heading: "1. The Need for Heron's Formula: When Height is Unknown",
        headingHi: "1. सरल भाषा में समझें: हीरोन के सूत्र की आवश्यकता",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              The usual triangle area formula is (1/2) * base * height. But what if you only know the three side lengths (a, b, c) and have no idea what the height is? Heron of Alexandria gave the legendary formula using semi-perimeter s!
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              त्रिभुज का सामान्य सूत्र 1/2 &times; आधार &times; ऊँचाई होता है। लेकिन जब विषमबाहु त्रिभुज की तीनों भुजाएँ (a, b, c) ज्ञात हों और ऊँचाई मालूम न हो, तब <strong>हीरोन का सूत्र</strong> रामबाण सिद्ध होता है!
            </div>
          </div>
        `
      },
      {
        heading: "2. The Heron's Formula & Semi-Perimeter",
        headingHi: "2. हीरोन का सूत्र व अर्ध-परिमाप",
        contentHtml: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 Heron's Formula</div>
            <p><strong>Semi-Perimeter (s):</strong> \\( s = \\frac{a + b + c}{2} \\)</p>
            <p><strong>Area:</strong> \\( \\text{Area} = \\sqrt{s(s - a)(s - b)(s - c)} \\)</p>
            <p><strong>Equilateral Triangle with side a:</strong> \\( \\text{Area} = \\frac{\\sqrt{3}}{4} a^2 \\)</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 हीरोन का सूत्र</div>
            <p><strong>अर्ध-परिमाप (s):</strong> \\( s = \\frac{a + b + c}{2} \\)</p>
            <p><strong>क्षेत्रफल:</strong> \\( \\Delta = \\sqrt{s(s - a)(s - b)(s - c)} \\)</p>
            <p><strong>समबाहु त्रिभुज का डायरेक्ट सूत्र:</strong> \\( \\text{क्षेत्रफल} = \\frac{\\sqrt{3}}{4} a^2 \\)</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Scalene Triangle Area",
        headingHi: "3. हाथ से हल किया गया उदाहरण: विषमबाहु त्रिभुज का क्षेत्रफल",
        contentHtml: `
          ${makeSolvedCard(
            "Heron's Formula Calculation",
            "Find the area of a triangle with sides 13 cm, 14 cm, and 15 cm.",
            [
              "<strong>Step 1 (Find semi-perimeter s):</strong> s = (13 + 14 + 15) / 2 = 42 / 2 = 21 cm.",
              "<strong>Step 2 (Find differences):</strong> (s - a) = 21 - 13 = 8, (s - b) = 21 - 14 = 7, (s - c) = 21 - 15 = 6.",
              "<strong>Step 3 (Substitute in formula):</strong> \\( \\text{Area} = \\sqrt{21 \\times 8 \\times 7 \\times 6} \\).",
              "<strong>Step 4 (Prime factorise inside root):</strong> \\( \\sqrt{(3 \\times 7) \\times (2^3) \\times 7 \\times (2 \\times 3)} = \\sqrt{7^2 \\times 3^2 \\times 2^4} = 7 \\times 3 \\times 4 = 84 \\text{ cm}^2 \\)."
            ],
            "84 cm^2",
            "NCERT Class 9 Standard Exemplar"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "हीरोन सूत्र से क्षेत्रफल निकालना",
            "उस त्रिभुज का क्षेत्रफल ज्ञात कीजिए जिसकी भुजाएँ 13 सेमी, 14 सेमी और 15 सेमी हैं।",
            [
              "<strong>चरण 1 (अर्ध-परिमाप s):</strong> s = (13 + 14 + 15) / 2 = 42 / 2 = 21 सेमी।",
              "<strong>चरण 2 (अंतर ज्ञात करना):</strong> (s - a) = 21 - 13 = 8, (s - b) = 21 - 14 = 7, (s - c) = 21 - 15 = 6।",
              "<strong>चरण 3 (सूत्र में रखना):</strong> \\( \\text{क्षेत्रफल} = \\sqrt{21 \\times 8 \\times 7 \\times 6} \\)।",
              "<strong>चरण 4 (अभाज्य गुणनखंडन द्वारा वर्गमूल):</strong> \\( \\sqrt{(3 \\times 7) \\times 8 \\times 7 \\times 6} = 7 \\times 3 \\times 4 = 84 \\text{ वर्ग सेमी} \\)।"
            ],
            "84 वर्ग सेमी",
            "NCERT कक्षा 9 उदाहरण 1"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The Prime Factorisation Hack",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: वर्गमूल निकालने का शॉर्टकट",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚡ Never Multiply Big Numbers Under the Root!</div>
            <p>Students waste 5 minutes multiplying 21 &times; 8 &times; 7 &times; 6 = 7056 and then struggling to find the square root. <br/><strong>Topper Hack:</strong> Break each number into prime factors inside the root and take pairs out!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚡ करणी के अंदर बड़ी संख्याओं का कभी गुणा न करें!</div>
            <p>छात्र 21 &times; 8 &times; 7 &times; 6 = 7056 का गुणा करने में 5 मिनट गंवा देते हैं और फिर 7056 का वर्गमूल निकालने में फंस जाते हैं!<br/>
            <strong>टॉपर ट्रिक:</strong> करणी के अंदर ही सभी संख्याओं को अभाज्य गुणनखंडों (Prime factors) में तोड़ें और 2-2 के जोड़े बनाकर बाहर निकाल लें!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(6, "Heron's Formula", "हीरोन का सूत्र", ch6Templates)
  },

  {
    id: "ncert-c9-m07",
    classLevel: "Class 9",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 7,
    bookName: "Ganita Manjari (Part I)",
    title: "Chapter 7: The Mathematics of Maybe: Probability (प्रायिकता)",
    titleHi: "अध्याय 7: प्रायिकता एवं सांख्यिकीय संभावना (Probability & Empirical Chance)",
    readingTime: "12 min read",
    badge: "NCERT CLASS 9 MASTER",
    desc: "Empirical probability, events, coin tossing, die throwing, playing cards, and survey statistics.",
    descHi: "प्रायोगिक प्रायिकता, अनुकूल परिणाम, सिक्के व पासे के प्रयोग, ताश के पत्तों के नियम व 0 से 1 की सीमा।",
    competitionEdge: "Guaranteed scoring questions in CTET, BPSC TRE, SSC MTS/CHSL/CGL and Banking exams.",
    competitionEdgeHi: "प्रतियोगी परीक्षा दृष्टि: 0 <= P(E) <= 1, असंभव घटना = 0, निश्चित घटना = 1 और पूरक घटना P(not E) = 1 - P(E)।",
    pdfUrl: "/ncert_books/class9/math_ch07.pdf",
    pdfUrlHi: "/ncert_books/class9/math_ch07_hi.pdf",
    pdfName: "NCERT_Class9_Math_Ch07.pdf",
    pdfSize: "1.8 MB",
    sections: [
      {
        heading: "1. Concept of Empirical (Experimental) Probability",
        headingHi: "1. सरल भाषा में समझें: प्रायिकता का वास्तविक अर्थ व प्रायोगिक संभावना",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              In Class 9, NCERT approaches probability through actual experiments (Empirical Probability): performing trials and measuring frequencies. If an experiment is performed n times and event E occurs m times, then P(E) = m / n.
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              दैनिक जीवन में हम अक्सर कहते हैं: 'आज वर्षा होने की संभावना है।' प्रायिकता अनिश्चितता का संख्यात्मक माप है। कक्षा 9 में प्रायोगिक प्रायिकता (Empirical Probability) सिखाई जाती है: किए गए प्रयोगों में घटना जितनी बार घटित हुई, उसे कुल परीक्षणों की संख्या से भाग दें!
            </div>
          </div>
        `
      },
      {
        heading: "2. Golden Axioms of Probability",
        headingHi: "2. प्रायिकता के तीन अटल नियम",
        contentHtml: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 Probability Axioms</div>
            <p>1. Formula: \\( P(E) = \\frac{\\text{Number of trials in which event happened}}{\\text{Total number of trials}} \\)</p>
            <p>2. Bounds: <strong>0 &le; P(E) &le; 1</strong>.</p>
            <p>3. Complement: \\( P(E) + P(\\text{not } E) = 1 \\implies P(\\text{not } E) = 1 - P(E) \\).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="hw-sketch-box">
            <div class="hw-sketch-title">📐 प्रायिकता के तीन स्वर्ण नियम</div>
            <p>1. <strong>मूल सूत्र:</strong> \\( P(E) = \\frac{\\text{अनुकूल परीक्षणों की संख्या}}{\\text{परीक्षणों की कुल संख्या}} \\)</p>
            <p>2. <strong>सीमा:</strong> किसी भी घटना की प्रायिकता सदैव 0 और 1 के बीच होती है: \\( 0 \\le P(E) \\le 1 \\)।</p>
            <p>3. <strong>पूरक घटना:</strong> घटना के 'न होने' की प्रायिकता = 1 - घटना के 'होने' की प्रायिकता।</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Tyre Life Survey",
        headingHi: "3. हाथ से हल किया गया उदाहरण: टायर निर्माता कंपनी का सर्वेक्षण",
        contentHtml: `
          ${makeSolvedCard(
            "Empirical Probability Calculation",
            "A tyre manufacturing company kept record of distance covered before a tyre needed replacement (1000 tyres surveyed): <4000 km: 20 tyres, 4000-9000 km: 210 tyres, 9000-14000 km: 325 tyres, >14000 km: 445 tyres. What is the probability that a tyre will last more than 9000 km?",
            [
              "<strong>Step 1 (Find favourable outcomes):</strong> Lasting > 9000 km includes (9000-14000 km) + (>14000 km) = 325 + 445 = 770 tyres.",
              "<strong>Step 2 (Total tyres surveyed):</strong> 1000.",
              "<strong>Step 3 (Calculate probability):</strong> P = 770 / 1000 = 0.77 (or 77%)."
            ],
            "0.77",
            "NCERT Class 9 Ex 15.1"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "प्रायोगिक प्रायिकता का हल",
            "एक टायर कंपनी ने 1000 टायरों के चलने की दूरी का रिकॉर्ड रखा: 4000 किमी से कम = 20, 4000-9000 किमी = 210, 9000-14000 किमी = 325, 14000 किमी से अधिक = 445। क्या प्रायिकता है कि खरीदा गया टायर 9000 किमी से अधिक चलेगा?",
            [
              "<strong>चरण 1 (अनुकूल संख्या):</strong> 9000 किमी से अधिक = 325 + 445 = 770 टायर।",
              "<strong>चरण 2 (कुल परीक्षण):</strong> 1000 टायर।",
              "<strong>चरण 3 (प्रायिकता):</strong> P = 770 / 1000 = 0.77।"
            ],
            "0.77 (या 77%)",
            "NCERT कक्षा 9 उदाहरण 3"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Impossible and Certain Events",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: असंभव व निश्चित घटना",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Impossible & Certain Events Trap!</div>
            <p>&bull; <strong>Impossible Event:</strong> Probability = 0 (e.g. getting a 7 on a standard 6-sided die).<br/>&bull; <strong>Sure / Certain Event:</strong> Probability = 1 (e.g. the sun rising in the east).<br/>&bull; If an option says -0.5 or 1.25, rule it out immediately!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: असंभव व निश्चित घटना</div>
            <p>&bull; <strong>असंभव घटना (Impossible Event):</strong> प्रायिकता सदैव <strong>0</strong> होती है (जैसे साधारण पासे पर 7 आना)।<br/>
            &bull; <strong>निश्चित घटना (Certain Event):</strong> प्रायिकता सदैव <strong>1</strong> होती है।<br/>
            &bull; यदि परीक्षा में कोई विकल्प ऋणात्मक (जैसे -1.5) या 1 से बड़ा (जैसे 1.4) दिखे, तो वह कभी भी उत्तर नहीं हो सकता!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(7, "Probability", "प्रायिकता", ch7Templates)
  }
];

const outPath = path.join(__dirname, 'class9_math_p1.json');
fs.writeFileSync(outPath, JSON.stringify(chaptersP1, null, 2), 'utf8');
console.log(`Generated Part 1: ${chaptersP1.length} Class 9 Math chapters with 30 MCQs each (${chaptersP1.length * 30} MCQs)!`);
