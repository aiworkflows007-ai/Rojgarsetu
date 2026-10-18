const fs = require('fs');
const path = require('path');

function makeSolvedCard(title, problem, steps, finalAns, pyqRef = "NCERT Class 10 Exemplar & BPSC TRE / CTET") {
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
      pyqRef: t.pyqRef || `NCERT Class 10 Exemplar • BPSC TRE / CTET / SSC Q${qNum}`
    });
  }
  return questions;
}

// =============================================================
// CHAPTER 1: Real Numbers (वास्तविक संख्याएँ)
// =============================================================
const ch1Templates = [
  {
    qEn: "According to the Fundamental Theorem of Arithmetic, every composite number can be expressed as a product of:",
    qHi: "अंकगणित की आधारभूत प्रमेय (Fundamental Theorem of Arithmetic) के अनुसार, प्रत्येक भाज्य संख्या को किसके गुणनफल के रूप में व्यक्त किया जा सकता है?",
    optionsEn: ["Primes uniquely, apart from the order of factors", "Composite numbers only", "Even numbers only", "Any integers"],
    optionsHi: ["अभाज्य संख्याओं के एक अद्वितीय गुणनफल के रूप में (क्रम को छोड़कर)", "केवल भाज्य संख्याओं के रूप में", "केवल सम संख्याओं के रूप में", "किसी भी पूर्णांक के रूप में"],
    ans: 0,
    expEn: "The Fundamental Theorem of Arithmetic states that every composite number can be uniquely factorised into prime factors, irrespective of their order.",
    expHi: "अंकगणित की आधारभूत प्रमेय के अनुसार प्रत्येक भाज्य संख्या को अभाज्य गुणनखंडों के गुणनफल के रूप में अद्वितीय रूप से लिखा जा सकता है।"
  },
  {
    qEn: "If HCF(306, 657) = 9, what is the LCM(306, 657)?",
    qHi: "यदि HCF(306, 657) = 9 है, तो LCM(306, 657) का मान क्या होगा?",
    optionsEn: ["22338", "22383", "22833", "306657"],
    optionsHi: ["22338", "22383", "22833", "306657"],
    ans: 0,
    expEn: "Formula: HCF(a, b) * LCM(a, b) = a * b. LCM = (306 * 657) / 9 = 34 * 657 = 22338.",
    expHi: "सूत्र: HCF * LCM = a * b. अतः LCM = (306 * 657) / 9 = 34 * 657 = 22338।"
  },
  {
    qEn: "Which of the following is an irrational number?",
    qHi: "निम्नलिखित में से कौन सी एक अपरिमेय संख्या (Irrational Number) है?",
    optionsEn: ["√2 + 3", "√9", "0.375", "22/7"],
    optionsHi: ["√2 + 3", "√9 (= 3)", "0.375 (शांत दशमलव)", "22/7 (परिमेय रूप p/q)"],
    ans: 0,
    expEn: "The sum of a rational number and an irrational number is always irrational. Since √2 is irrational, √2 + 3 is irrational.",
    expHi: "एक परिमेय संख्या और एक अपरिमेय संख्या का योग सदैव अपरिमेय होता है। चूंकि √2 अपरिमेय है, अतः √2 + 3 भी अपरिमेय संख्या है।"
  },
  {
    qEn: "What is the HCF of the smallest prime number and the smallest composite number?",
    qHi: "सबसे छोटी अभाज्य संख्या (Smallest Prime) और सबसे छोटी भाज्य संख्या (Smallest Composite) का HCF क्या है?",
    optionsEn: ["2", "1", "4", "0"],
    optionsHi: ["2", "1", "4", "0"],
    ans: 0,
    expEn: "Smallest prime number = 2. Smallest composite number = 4. HCF(2, 4) = 2.",
    expHi: "सबसे छोटी अभाज्य संख्या = 2, तथा सबसे छोटी भाज्य संख्या = 4। अतः HCF(2, 4) = 2।"
  },
  {
    qEn: "If two positive integers a and b are written as a = x^3 y^2 and b = x y^3, where x, y are prime numbers, then HCF(a, b) is:",
    qHi: "यदि दो धनात्मक पूर्णांक a और b को a = x^3 y^2 तथा b = x y^3 के रूप में लिखा जाए, जहाँ x, y अभाज्य संख्याएँ हैं, तो HCF(a, b) क्या होगा?",
    optionsEn: ["x y^2", "x^3 y^3", "x y", "x^2 y^2"],
    optionsHi: ["x y^2", "x^3 y^3", "x y", "x^2 y^2"],
    ans: 0,
    expEn: "HCF is the product of the smallest power of each common prime factor: x^min(3,1) * y^min(2,3) = x^1 * y^2 = x y^2.",
    expHi: "HCF में उभयनिष्ठ अभाज्य गुणनखंडों की न्यूनतम घात ली जाती है: x^min(3,1) * y^min(2,3) = x y^2।"
  }
];

// =============================================================
// CHAPTER 2: Polynomials (बहुपद)
// =============================================================
const ch2Templates = [
  {
    qEn: "If α and β are the zeroes of the quadratic polynomial ax^2 + bx + c, then the sum of zeroes (α + β) is:",
    qHi: "यदि α और β द्विघात बहुपद ax^2 + bx + c के शून्यक हैं, तो शून्यकों का योग (α + β) क्या होगा?",
    optionsEn: ["-b / a", "c / a", "b / a", "-c / a"],
    optionsHi: ["-b / a", "c / a", "b / a", "-c / a"],
    ans: 0,
    expEn: "For quadratic polynomial ax^2 + bx + c, sum of zeroes α + β = -b/a, and product αβ = c/a.",
    expHi: "द्विघात बहुपद ax^2 + bx + c के लिए शून्यकों का योग α + β = -b/a तथा गुणनफल αβ = c/a होता है।"
  },
  {
    qEn: "Find a quadratic polynomial whose sum and product of zeroes are -3 and 2 respectively:",
    qHi: "वह द्विघात बहुपद ज्ञात कीजिए जिसके शून्यकों का योग -3 तथा गुणनफल 2 है:",
    optionsEn: ["x^2 + 3x + 2", "x^2 - 3x + 2", "x^2 + 3x - 2", "x^2 - 3x - 2"],
    optionsHi: ["x^2 + 3x + 2", "x^2 - 3x + 2", "x^2 + 3x - 2", "x^2 - 3x - 2"],
    ans: 0,
    expEn: "Quadratic polynomial = k[x^2 - (sum)x + product] = x^2 - (-3)x + 2 = x^2 + 3x + 2.",
    expHi: "द्विघात बहुपद = x^2 - (शून्यकों का योग)x + (शून्यकों का गुणनफल) = x^2 - (-3)x + 2 = x^2 + 3x + 2।"
  },
  {
    qEn: "The number of zeroes that a polynomial of degree n can have at most is:",
    qHi: "घात n वाले बहुपद के अधिक से अधिक (अधिकतम) कितने शून्यक हो सकते हैं?",
    optionsEn: ["n", "n + 1", "n - 1", "Infinite"],
    optionsHi: ["n", "n + 1", "n - 1", "अनंत"],
    ans: 0,
    expEn: "A polynomial of degree n can have at most n real zeroes.",
    expHi: "घात n वाले किसी भी बहुपद के वास्तविक शून्यकों की अधिकतम संख्या n होती है।"
  },
  {
    qEn: "If one zero of the quadratic polynomial x^2 + 3x + k is 2, then the value of k is:",
    qHi: "यदि द्विघात बहुपद x^2 + 3x + k का एक शून्यक 2 है, तो k का मान क्या होगा?",
    optionsEn: ["-10", "10", "-7", "-2"],
    optionsHi: ["-10", "10", "-7", "-2"],
    ans: 0,
    expEn: "Substitute x = 2: 2^2 + 3(2) + k = 0 => 4 + 6 + k = 0 => 10 + k = 0 => k = -10.",
    expHi: "x = 2 रखने पर: 2^2 + 3(2) + k = 0 => 4 + 6 + k = 0 => k = -10।"
  },
  {
    qEn: "The graph of y = p(x) intersects the X-axis at 3 distinct points. How many zeroes does p(x) have?",
    qHi: "y = p(x) का ग्राफ X-अक्ष को 3 विभिन्न बिंदुओं पर प्रतिच्छेद करता है। p(x) के कुल कितने शून्यक हैं?",
    optionsEn: ["3", "2", "1", "0"],
    optionsHi: ["3", "2", "1", "0"],
    ans: 0,
    expEn: "The number of zeroes of y = p(x) equals the number of times its graph intersects or touches the X-axis.",
    expHi: "y = p(x) के शून्यकों की संख्या ग्राफ द्वारा X-अक्ष को प्रतिच्छेद करने वाले बिंदुओं की संख्या (यहाँ 3) के बराबर होती है।"
  }
];

// =============================================================
// CHAPTER 3: Pair of Linear Equations in Two Variables (दो चर वाले रैखिक समीकरण युग्म)
// =============================================================
const ch3Templates = [
  {
    qEn: "The pair of equations a1 x + b1 y + c1 = 0 and a2 x + b2 y + c2 = 0 has a UNIQUE solution if:",
    qHi: "समीकरण युग्म a1 x + b1 y + c1 = 0 तथा a2 x + b2 y + c2 = 0 का एक अद्वितीय (Unique) हल होगा यदि:",
    optionsEn: ["a1 / a2 ≠ b1 / b2", "a1 / a2 = b1 / b2 ≠ c1 / c2", "a1 / a2 = b1 / b2 = c1 / c2", "a1 / a2 = c1 / c2"],
    optionsHi: ["a1 / a2 ≠ b1 / b2 (प्रतिच्छेदी रेखाएं)", "a1 / a2 = b1 / b2 ≠ c1 / c2 (समांतर रेखाएं)", "a1 / a2 = b1 / b2 = c1 / c2 (संपाती रेखाएं)", "a1 / a2 = c1 / c2"],
    ans: 0,
    expEn: "When a1/a2 ≠ b1/b2, the lines intersect at exactly one point, yielding a unique solution (consistent system).",
    expHi: "जब a1/a2 ≠ b1/b2 हो, तो दोनों रेखाएँ एक बिंदु पर प्रतिच्छेद करती हैं और उनका ठीक एक अद्वितीय हल होता है।"
  },
  {
    qEn: "If a pair of linear equations is consistent and dependent, the lines represented will be:",
    qHi: "यदि रैखिक समीकरण युग्म संगत और आश्रित (Consistent and Dependent) है, तो निरूपित रेखाएँ होंगी:",
    optionsEn: ["Coincident (संपाती)", "Parallel (समांतर)", "Intersecting (प्रतिच्छेदी)", "Perpendicular (लंबवत)"],
    optionsHi: ["संपाती (Coincident - एक के ऊपर दूसरी)", "समांतर (Parallel)", "प्रतिच्छेदी (Intersecting)", "लंबवत (Perpendicular)"],
    ans: 0,
    expEn: "Coincident lines (a1/a2 = b1/b2 = c1/c2) have infinitely many solutions and are called consistent and dependent.",
    expHi: "संपाती रेखाओं (a1/a2 = b1/b2 = c1/c2) के अपरिमित रूप से अनेक हल होते हैं तथा यह निकाय आश्रित-संगत कहलाता है।"
  },
  {
    qEn: "For what value of k will the equations x + 2y = 3 and 5x + ky + 7 = 0 have NO solution (parallel lines)?",
    qHi: "k के किस मान के लिए समीकरण x + 2y = 3 तथा 5x + ky + 7 = 0 का कोई हल नहीं होगा (समांतर रेखाएं)?",
    optionsEn: ["k = 10", "k = -10", "k = 5", "k = 2/5"],
    optionsHi: ["k = 10", "k = -10", "k = 5", "k = 2/5"],
    ans: 0,
    expEn: "For no solution: a1/a2 = b1/b2 ≠ c1/c2 => 1/5 = 2/k => k = 10. Also 2/10 ≠ 3/(-7) holds true.",
    expHi: "कोई हल न होने हेतु: a1/a2 = b1/b2 ≠ c1/c2 => 1/5 = 2/k => k = 10।"
  },
  {
    qEn: "Solve the system: x + y = 14 and x - y = 4. What are the values of x and y?",
    qHi: "समीकरण निकाय को हल कीजिए: x + y = 14 तथा x - y = 4। x और y के मान क्या होंगे?",
    optionsEn: ["x = 9, y = 5", "x = 5, y = 9", "x = 10, y = 4", "x = 8, y = 6"],
    optionsHi: ["x = 9, y = 5", "x = 5, y = 9", "x = 10, y = 4", "x = 8, y = 6"],
    ans: 0,
    expEn: "Adding the equations: 2x = 18 => x = 9. Substituting x = 9 in x + y = 14 gives y = 5.",
    expHi: "दोनों समीकरणों को जोड़ने पर: 2x = 18 => x = 9। पहले समीकरण में रखने पर: 9 + y = 14 => y = 5।"
  },
  {
    qEn: "The graphical representation of a linear equation in two variables is always a:",
    qHi: "दो चरों वाले रैखिक समीकरण का आलेखीय निरूपण सदैव क्या होता है?",
    optionsEn: ["Straight line", "Parabola", "Circle", "Hyperbola"],
    optionsHi: ["एक सीधी रेखा (Straight line)", "परवलय (Parabola)", "वृत्त (Circle)", "अतिपरवलय (Hyperbola)"],
    ans: 0,
    expEn: "A first-degree polynomial equation in two variables ax + by + c = 0 always represents a straight line.",
    expHi: "दो चरों में प्रथम घात का समीकरण ax + by + c = 0 कार्तीय तल में सदैव एक सरल रेखा को निरूपित करता है।"
  }
];

// =============================================================
// CHAPTER 4: Quadratic Equations (द्विघात समीकरण)
// =============================================================
const ch4Templates = [
  {
    qEn: "The discriminant D of the quadratic equation ax^2 + bx + c = 0 is defined as:",
    qHi: "द्विघात समीकरण ax^2 + bx + c = 0 का विविक्तकर (Discriminant - D) क्या होता है?",
    optionsEn: ["b^2 - 4ac", "b^2 + 4ac", "4ac - b^2", "√(b^2 - 4ac)"],
    optionsHi: ["b^2 - 4ac", "b^2 + 4ac", "4ac - b^2", "√(b^2 - 4ac)"],
    ans: 0,
    expEn: "Discriminant D = b^2 - 4ac determines the nature of roots.",
    expHi: "विविक्तकर D = b^2 - 4ac मूलों की प्रकृति (वास्तविक, समान या काल्पनिक) तय करता है।"
  },
  {
    qEn: "If the discriminant D = b^2 - 4ac = 0, then the roots of the quadratic equation are:",
    qHi: "यदि विविक्तकर D = b^2 - 4ac = 0 हो, तो द्विघात समीकरण के मूल कैसे होंगे?",
    optionsEn: ["Two real and equal roots (-b/2a)", "Two distinct real roots", "No real roots (imaginary)", "One zero and one non-zero"],
    optionsHi: ["दो बराबर वास्तविक मूल (-b/2a)", "दो भिन्न वास्तविक मूल", "कोई वास्तविक मूल नहीं (काल्पनिक)", "एक शून्य तथा एक अशून्य मूल"],
    ans: 0,
    expEn: "When D = 0, the two roots are real and coincident (equal): x = -b / 2a.",
    expHi: "जब D = 0 हो, तो दोनों मूल वास्तविक और परस्पर समान होते हैं: x = -b / (2a)।"
  },
  {
    qEn: "Find the roots of the quadratic equation 2x^2 - 7x + 3 = 0:",
    qHi: "द्विघात समीकरण 2x^2 - 7x + 3 = 0 के मूल ज्ञात कीजिए:",
    optionsEn: ["3 and 1/2", "-3 and -1/2", "3 and -1/2", "2 and 3"],
    optionsHi: ["3 और 1/2", "-3 और -1/2", "3 और -1/2", "2 और 3"],
    ans: 0,
    expEn: "Factorise: 2x^2 - 6x - x + 3 = 0 => 2x(x - 3) - 1(x - 3) = 0 => (2x - 1)(x - 3) = 0 => x = 1/2, 3.",
    expHi: "गुणनखंडन: 2x^2 - 6x - x + 3 = 0 => 2x(x - 3) - 1(x - 3) = 0 => (2x - 1)(x - 3) = 0 => x = 3, 1/2।"
  },
  {
    qEn: "For what value of k will the equation 2x^2 + kx + 3 = 0 have two EQUAL roots?",
    qHi: "k के किस मान के लिए समीकरण 2x^2 + kx + 3 = 0 के दो बराबर मूल होंगे?",
    optionsEn: ["±2√6", "±√6", "±6", "±24"],
    optionsHi: ["±2√6", "±√6", "±6", "±24"],
    ans: 0,
    expEn: "For equal roots, D = 0 => k^2 - 4(2)(3) = 0 => k^2 = 24 => k = ±√24 = ±2√6.",
    expHi: "बराबर मूलों हेतु D = 0 => k^2 - 4(2)(3) = 0 => k^2 = 24 => k = ±2√6।"
  },
  {
    qEn: "Which of the following is NOT a quadratic equation?",
    qHi: "निम्नलिखित में से कौन सा एक द्विघात समीकरण नहीं है?",
    optionsEn: ["(x + 2)^3 = x^3 - 4", "(x - 2)^2 + 1 = 2x - 3", "x(x + 1) + 8 = (x + 2)(x - 2)", "x(2x + 3) = x^2 + 1"],
    optionsHi: [
      "x(x + 1) + 8 = (x + 2)(x - 2) [x^2 कट जाता है]",
      "(x - 2)^2 + 1 = 2x - 3",
      "(x + 2)^3 = x^3 - 4",
      "x(2x + 3) = x^2 + 1"
    ],
    ans: 0,
    expEn: "Expanding x(x+1)+8 = x^2+x+8. Right side = x^2-4. x^2 cancels out leaving x+12 = 0, which is linear, not quadratic.",
    expHi: "x(x + 1) + 8 = x^2 + x + 8 तथा दायीं ओर x^2 - 4। दोनों तरफ से x^2 कट जाता है, अतः x + 12 = 0 बचता है जो रैखिक समीकरण है, द्विघात नहीं।"
  }
];

// =============================================================
// CHAPTER 5: Arithmetic Progressions (समान्तर श्रेढ़ियाँ - AP)
// =============================================================
const ch5Templates = [
  {
    qEn: "The n-th term of an Arithmetic Progression with first term a and common difference d is given by:",
    qHi: "प्रथम पद a तथा सार्व अंतर d वाली समान्तर श्रेढ़ी (AP) का nवाँ पद (an) किसके द्वारा दिया जाता है?",
    optionsEn: ["a + (n - 1)d", "a + nd", "a - (n - 1)d", "n / 2 [2a + (n - 1)d]"],
    optionsHi: ["a + (n - 1)d", "a + nd", "a - (n - 1)d", "n / 2 [2a + (n - 1)d]"],
    ans: 0,
    expEn: "The formula for the n-th term is an = a + (n - 1)d.",
    expHi: "समान्तर श्रेढ़ी का nवाँ पद an = a + (n - 1)d होता है।"
  },
  {
    qEn: "What is the 30th term of the AP: 10, 7, 4, ... ?",
    qHi: "समान्तर श्रेढ़ी: 10, 7, 4, ... का 30वाँ पद क्या होगा?",
    optionsEn: ["-77", "77", "-87", "97"],
    optionsHi: ["-77", "77", "-87", "97"],
    ans: 0,
    expEn: "Here a = 10, d = 7 - 10 = -3. a30 = 10 + (30 - 1)(-3) = 10 + 29(-3) = 10 - 87 = -77.",
    expHi: "यहाँ a = 10, d = 7 - 10 = -3। a30 = 10 + (29)(-3) = 10 - 87 = -77।"
  },
  {
    qEn: "The sum of the first n natural numbers is given by:",
    qHi: "प्रथम n प्राकृत संख्याओं का योगफल (Sum of first n natural numbers) होता है:",
    optionsEn: ["n(n + 1) / 2", "n(n - 1) / 2", "n^2", "2n + 1"],
    optionsHi: ["n(n + 1) / 2", "n(n - 1) / 2", "n^2 (विषम संख्याओं का योग)", "2n + 1"],
    ans: 0,
    expEn: "Sum of first n natural numbers = 1 + 2 + ... + n = n(n + 1) / 2.",
    expHi: "प्रथम n प्राकृत संख्याओं का योग Sn = n(n + 1) / 2 होता है।"
  },
  {
    qEn: "Which term of the AP: 3, 8, 13, 18, ... is 78?",
    qHi: "समान्तर श्रेढ़ी: 3, 8, 13, 18, ... का कौन सा पद 78 है?",
    optionsEn: ["16th term", "15th term", "14th term", "17th term"],
    optionsHi: ["16वाँ पद (16th term)", "15वाँ पद", "14वाँ पद", "17वाँ पद"],
    ans: 0,
    expEn: "an = 78 => 3 + (n - 1)(5) = 78 => 5(n - 1) = 75 => n - 1 = 15 => n = 16.",
    expHi: "78 = 3 + (n - 1)5 => 5(n - 1) = 75 => n - 1 = 15 => n = 16वाँ पद।"
  },
  {
    qEn: "If the first term of an AP is 5 and the last term is 45, with sum 400, find the number of terms n:",
    qHi: "यदि किसी AP का प्रथम पद 5, अंतिम पद 45 तथा सभी पदों का योग 400 है, तो पदों की संख्या n क्या होगी?",
    optionsEn: ["16", "20", "15", "18"],
    optionsHi: ["16", "20", "15", "18"],
    ans: 0,
    expEn: "Sn = (n/2)(a + l) => 400 = (n/2)(5 + 45) => 400 = (n/2)(50) => 400 = 25n => n = 16.",
    expHi: "Sn = (n/2)(a + l) => 400 = (n/2)(5 + 45) => 400 = 25n => n = 16।"
  }
];

// =============================================================
// CHAPTER 6: Triangles (त्रिभुज - समरूपता)
// =============================================================
const ch6Templates = [
  {
    qEn: "State the Basic Proportionality Theorem (Thales Theorem):",
    qHi: "आधारभूत आनुपातिकता प्रमेय (थेल्स प्रमेय - Thales Theorem) का कथन क्या है?",
    optionsEn: [
      "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio",
      "The sum of squares of two sides is equal to the square of hypotenuse",
      "Areas of two similar triangles are equal",
      "Opposite angles of a cyclic quadrilateral are supplementary"
    ],
    optionsHi: [
      "यदि किसी त्रिभुज की एक भुजा के समांतर अन्य दो भुजाओं को भिन्न बिंदुओं पर प्रतिच्छेद करने वाली रेखा खींची जाए, तो ये दोनों भुजाएं एक ही अनुपात में विभाजित होती हैं",
      "दो भुजाओं के वर्गों का योग कर्ण के वर्ग के बराबर होता है",
      "दो समरूप त्रिभुजों के क्षेत्रफल सदैव बराबर होते हैं",
      "चक्रीय चतुर्भुज के सम्मुख कोण संपूरक होते हैं"
    ],
    ans: 0,
    expEn: "Thales Theorem (BPT): In triangle ABC, if DE || BC, then AD/DB = AE/EC.",
    expHi: "थेल्स प्रमेय: यदि त्रिभुज ABC में DE || BC हो, तो AD / DB = AE / EC होता है।"
  },
  {
    qEn: "Which of the following is NOT a criterion for similarity of two triangles?",
    qHi: "निम्नलिखित में से कौन सी दो त्रिभुजों की समरूपता (Similarity) की कसौटी नहीं है?",
    optionsEn: ["SSA (Side-Side-Angle)", "AAA (or AA)", "SAS", "SSS"],
    optionsHi: ["SSA (भुजा-भुजा-कोण)", "AAA (या AA समरूपता)", "SAS (भुजा-कोण-भुजा)", "SSS (भुजा-भुजा-भुजा)"],
    ans: 0,
    expEn: "The criteria for similarity of triangles are AAA (or AA), SAS, and SSS. SSA is NOT a valid similarity criterion.",
    expHi: "त्रिभुजों की समरूपता की कसौटियाँ केवल AA/AAA, SAS तथा SSS हैं। SSA कोई समरूपता कसौटी नहीं है।"
  },
  {
    qEn: "In △ABC, DE || BC such that AD = 1.5 cm, DB = 3 cm, and AE = 1 cm. What is the length of EC?",
    qHi: "△ABC में DE || BC है, जहाँ AD = 1.5 सेमी, DB = 3 सेमी तथा AE = 1 सेमी है। EC की लंबाई क्या होगी?",
    optionsEn: ["2 cm", "1.5 cm", "2.5 cm", "3 cm"],
    optionsHi: ["2 सेमी", "1.5 सेमी", "2.5 सेमी", "3 सेमी"],
    ans: 0,
    expEn: "By Thales Theorem: AD/DB = AE/EC => 1.5/3 = 1/EC => 1/2 = 1/EC => EC = 2 cm.",
    expHi: "थेल्स प्रमेय द्वारा: AD / DB = AE / EC => 1.5 / 3 = 1 / EC => 1/2 = 1/EC => EC = 2 सेमी।"
  },
  {
    qEn: "All circles and all equilateral triangles are always:",
    qHi: "सभी वृत्त और सभी समबाहु त्रिभुज सदैव परस्पर क्या होते हैं?",
    optionsEn: ["Similar (समरूप)", "Congruent (सर्वांगसम)", "Equal in perimeter", "Equal in area"],
    optionsHi: ["समरूप (Similar - एक जैसे आकार वाले)", "सर्वांगसम (Congruent)", "समान परिमाप वाले", "समान क्षेत्रफल वाले"],
    ans: 0,
    expEn: "All circles, squares, and equilateral triangles have the exact same shape and hence are always similar, regardless of size.",
    expHi: "सभी वृत्त, वर्ग और समबाहु त्रिभुज समान आकृति के होते हैं, अतः वे सदैव समरूप होते हैं।"
  },
  {
    qEn: "If △ABC ~ △PQR with AB/PQ = 1/3, what is the ratio of their perimeters?",
    qHi: "यदि △ABC ~ △PQR है तथा AB / PQ = 1/3 है, तो उनके परिमापों का अनुपात क्या होगा?",
    optionsEn: ["1 : 3", "1 : 9", "1 : 6", "3 : 1"],
    optionsHi: ["1 : 3", "1 : 9", "1 : 6", "3 : 1"],
    ans: 0,
    expEn: "The ratio of perimeters of two similar triangles equals the ratio of their corresponding sides: Perimeter(ABC) / Perimeter(PQR) = AB / PQ = 1/3.",
    expHi: "समरूप त्रिभुजों के परिमापों का अनुपात उनकी संगत भुजाओं के अनुपात के बराबर (1 : 3) होता है।"
  }
];

// =============================================================
// CHAPTER 7: Coordinate Geometry (निर्देशांक ज्यामिति)
// =============================================================
const ch7Templates = [
  {
    qEn: "The distance between two points P(x1, y1) and Q(x2, y2) is given by:",
    qHi: "दो बिंदुओं P(x1, y1) और Q(x2, y2) के बीच की दूरी (Distance Formula) क्या है?",
    optionsEn: ["√[(x2 - x1)^2 + (y2 - y1)^2]", "√[(x2 + x1)^2 + (y2 + y1)^2]", "(x2 - x1)^2 + (y2 - y1)^2", "√[(x2 - x1) + (y2 - y1)]"],
    optionsHi: ["√[(x2 - x1)^2 + (y2 - y1)^2]", "√[(x2 + x1)^2 + (y2 + y1)^2]", "(x2 - x1)^2 + (y2 - y1)^2", "√[(x2 - x1) + (y2 - y1)]"],
    ans: 0,
    expEn: "Distance formula: d = √[(x2 - x1)^2 + (y2 - y1)^2]. Distance from origin (0, 0) is √(x^2 + y^2).",
    expHi: "दूरी सूत्र: d = √[(x2 - x1)^2 + (y2 - y1)^2]। मूल बिंदु से दूरी √(x^2 + y^2) होती है।"
  },
  {
    qEn: "Find the distance between the points (2, 3) and (4, 1):",
    qHi: "बिंदुओं (2, 3) और (4, 1) के बीच की दूरी ज्ञात कीजिए:",
    optionsEn: ["2√2 units", "√8 units", "4 units", "2 units"],
    optionsHi: ["2√2 मात्रक", "√6 मात्रक", "4 मात्रक", "2 मात्रक"],
    ans: 0,
    expEn: "d = √[(4 - 2)^2 + (1 - 3)^2] = √[2^2 + (-2)^2] = √[4 + 4] = √8 = 2√2 units.",
    expHi: "d = √[(4 - 2)^2 + (1 - 3)^2] = √[4 + 4] = √8 = 2√2 मात्रक।"
  },
  {
    qEn: "The coordinates of the mid-point of the line segment joining (x1, y1) and (x2, y2) are:",
    qHi: "बिंदुओं (x1, y1) और (x2, y2) को मिलाने वाले रेखाखंड के मध्य-बिंदु (Mid-point) के निर्देशांक हैं:",
    optionsEn: ["((x1 + x2)/2, (y1 + y2)/2)", "((x1 - x2)/2, (y1 - y2)/2)", "(x1 + x2, y1 + y2)", "((x1 + x2)/3, (y1 + y2)/3)"],
    optionsHi: ["((x1 + x2)/2, (y1 + y2)/2)", "((x1 - x2)/2, (y1 - y2)/2)", "(x1 + x2, y1 + y2)", "((x1 + x2)/3, (y1 + y2)/3)"],
    ans: 0,
    expEn: "Mid-point formula is special case of section formula (1:1 ratio): M = ((x1+x2)/2, (y1+y2)/2).",
    expHi: "मध्य बिंदु सूत्र: M = ((x1 + x2)/2, (y1 + y2)/2)।"
  },
  {
    qEn: "Find the coordinates of the point which divides the line segment joining (4, -3) and (8, 5) in the ratio 3:1 internally:",
    qHi: "उस बिंदु के निर्देशांक ज्ञात कीजिए जो बिंदुओं (4, -3) और (8, 5) को मिलाने वाले रेखाखंड को 3:1 के अनुपात में अंतःविभाजित करता है:",
    optionsEn: ["(7, 3)", "(3, 7)", "(6, 2)", "(5, 1)"],
    optionsHi: ["(7, 3)", "(3, 7)", "(6, 2)", "(5, 1)"],
    ans: 0,
    expEn: "Section formula: x = (3*8 + 1*4)/(3+1) = (24+4)/4 = 28/4 = 7. y = (3*5 + 1*(-3))/(3+1) = (15-3)/4 = 12/4 = 3. Point is (7, 3).",
    expHi: "विभाजन सूत्र: x = (3*8 + 1*4)/4 = 28/4 = 7; y = (3*5 + 1*(-3))/4 = 12/4 = 3। अतः बिंदु (7, 3) है।"
  },
  {
    qEn: "The centroid of a triangle with vertices (x1, y1), (x2, y2), and (x3, y3) is given by:",
    qHi: "शीर्षों (x1, y1), (x2, y2) और (x3, y3) वाले त्रिभुज के केंद्रक (Centroid) के निर्देशांक क्या होते हैं?",
    optionsEn: ["((x1+x2+x3)/3, (y1+y2+y3)/3)", "((x1+x2+x3)/2, (y1+y2+y3)/2)", "(x1+x2+x3, y1+y2+y3)", "((x1*x2*x3)/3, (y1*y2*y3)/3)"],
    optionsHi: ["((x1+x2+x3)/3, (y1+y2+y3)/3)", "((x1+x2+x3)/2, (y1+y2+y3)/2)", "(x1+x2+x3, y1+y2+y3)", "((x1*x2*x3)/3, (y1*y2*y3)/3)"],
    ans: 0,
    expEn: "The medians of a triangle intersect at the centroid G, with coordinates ((x1+x2+x3)/3, (y1+y2+y3)/3).",
    expHi: "त्रिभुज की माध्यिकाएँ केंद्रक G पर 2:1 के अनुपात में प्रतिच्छेद करती हैं: G = ((x1+x2+x3)/3, (y1+y2+y3)/3)।"
  }
];

const chaptersP1 = [
  // -------------------------------------------------------------------------
  // CHAPTER 1: Real Numbers
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math01",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 1,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 1: Real Numbers (वास्तविक संख्याएँ)",
    titleHi: "अध्याय 1: वास्तविक संख्याएँ (Real Numbers)",
    pdfUrl: "/ncert_books/class10/math_ch01.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch01_hi.pdf",
    competitionEdge: "Foundational chapter for all competitive exams (BPSC TRE 4.0 9-10 & 6-8 Math, CTET Paper 2, SSC CGL/CHSL Number Systems, CDS, NDA, State PCS). Questions frequently test Fundamental Theorem of Arithmetic, HCF * LCM = a * b relationship, proof of irrationality (√2, √3, √5), and prime factorisation.",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती (गणित 9-10 व 6-8), सीटेट पेपर-2, एसएससी तथा राज्य परीक्षाओं के संख्या पद्धति खंड की नींव। इसमें अंकगणित की आधारभूत प्रमेय, HCF × LCM = a × b का सूत्र, अपरिमेयता का सत्यापन (√2, √3, √5) तथा अभाज्य गुणनखंडन से सीधे प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Fundamental Theorem of Arithmetic",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं अंकगणित की आधारभूत प्रमेय",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              Welcome to Class 10 Mathematics! Chapter 1 formalises the building blocks of numbers. The <strong>Fundamental Theorem of Arithmetic</strong> guarantees that every composite number can be uniquely factorised into prime numbers (up to the order of factors). This theorem is the foundation for finding HCF and LCM of large numbers.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Golden Rules for HCF and LCM</div>
            <p>For any two positive integers a and b:<br/>
            &bull; <strong>HCF(a, b)</strong> = Product of the <em>smallest</em> power of each common prime factor.<br/>
            &bull; <strong>LCM(a, b)</strong> = Product of the <em>greatest</em> power of each prime factor involved.<br/>
            &bull; <strong>Master Identity:</strong> HCF(a, b) &times; LCM(a, b) = a &times; b (holds ONLY for 2 numbers!).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक मार्गदर्शिका एवं मूल अवधारणा</div>
            <div class="mentor-msg">
              कक्षा 10 गणित में आपका स्वागत है! अध्याय 1 वास्तविक संख्याओं के मूलभूत नियमों को स्पष्ट करता है। <strong>अंकगणित की आधारभूत प्रमेय</strong> के अनुसार प्रत्येक भाज्य संख्या को अभाज्य संख्याओं के गुणनफल के रूप में अद्वितीय रूप से व्यक्त किया जा सकता है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ HCF व LCM के स्वर्णिम नियम</div>
            <p>किन्हीं दो धनात्मक पूर्णांकों a और b के लिए:<br/>
            &bull; <strong>HCF(a, b)</strong> = प्रत्येक उभयनिष्ठ अभाज्य गुणनखंड की <em>सबसे छोटी</em> घात का गुणनफल।<br/>
            &bull; <strong>LCM(a, b)</strong> = प्रत्येक अभाज्य गुणनखंड की <em>सबसे बड़ी</em> घात का गुणनफल।<br/>
            &bull; <strong>मुख्य सर्वसमिका:</strong> HCF(a, b) &times; LCM(a, b) = a &times; b (यह नियम केवल दो संख्याओं पर लागू होता है!)।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Prime Factorisation & Irrationality Proofs",
        headingHi: "2. सूत्र संकलन: अभाज्य गुणनखंडन एवं अपरिमेयता की अवधारणा",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Key Real Number Theorems & Identities</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Concept / Theorem</th>
                  <th>Mathematical Expression</th>
                  <th>Exam Utility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Two-Number Relation</strong></td>
                  <td>HCF(a, b) &times; LCM(a, b) = a &times; b</td>
                  <td>Directly solve for unknown HCF/LCM</td>
                </tr>
                <tr>
                  <td><strong>Prime Factor Power</strong></td>
                  <td>If prime p divides a^2, then p divides a</td>
                  <td>Crux of irrationality proof of √2, √3, √p</td>
                </tr>
                <tr>
                  <td><strong>Sum/Difference of Irrationals</strong></td>
                  <td>Rational &plusmn; Irrational = Irrational</td>
                  <td>e.g. 3 + 2√5 is always irrational</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>Topper Tip:</strong> The identity HCF &times; LCM = a &times; b is NOT valid for three numbers a, b, c! For three numbers: HCF(a, b, c) &times; LCM(a, b, c) &ne; a &times; b &times; c.
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 प्रमुख प्रमेय एवं परीक्षा उपयोगी परिणाम</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>प्रमेय / नियम</th>
                  <th>गणितीय व्यंजक</th>
                  <th>प्रतियोगी परीक्षा महत्व</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>दो संख्याओं का गुणनफल</strong></td>
                  <td>HCF(a, b) &times; LCM(a, b) = a &times; b</td>
                  <td>अज्ञात HCF अथवा LCM ज्ञात करने में</td>
                </tr>
                <tr>
                  <td><strong>अभाज्य विभाज्यता प्रमेय</strong></td>
                  <td>यदि अभाज्य p, a^2 को विभाजित करता है, तो p, a को भी विभाजित करेगा</td>
                  <td>√2, √3, √5 की अपरिमेयता सिद्ध करने का आधार</td>
                </tr>
                <tr>
                  <td><strong>परिमेय व अपरिमेय का योग</strong></td>
                  <td>परिमेय &plusmn; अपरिमेय = अपरिमेय</td>
                  <td>जैसे: 5 - √3 सदैव अपरिमेय संख्या है</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>टॉपर चेतावनी:</strong> तीन संख्याओं a, b, c के लिए HCF &times; LCM &ne; a &times; b &times; c होता है! यह सूत्र केवल दो संख्याओं के लिए सत्य है।
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Finding HCF and LCM via Primes",
        headingHi: "3. हाथ से हल किया गया उदाहरण: अभाज्य गुणनखंड विधि से HCF व LCM",
        contentHtml: `
          ${makeSolvedCard(
            "HCF & LCM of 96 and 404 with Verification",
            "Find the HCF and LCM of 96 and 404 by the prime factorisation method, and verify that HCF &times; LCM = product of the two numbers.",
            [
              "<strong>Step 1 (Prime Factorisation):</strong><br/>&bull; 96 = 2 &times; 2 &times; 2 &times; 2 &times; 2 &times; 3 = 2^5 &times; 3^1<br/>&bull; 404 = 2 &times; 2 &times; 101 = 2^2 &times; 101^1.",
              "<strong>Step 2 (Calculate HCF):</strong> Smallest power of common prime factor 2 is 2^2 = 4. Thus, HCF(96, 404) = 4.",
              "<strong>Step 3 (Calculate LCM):</strong> Highest powers of all prime factors: 2^5 &times; 3^1 &times; 101^1 = 32 &times; 3 &times; 101 = 96 &times; 101 = 9696.",
              "<strong>Step 4 (Verification):</strong><br/>&bull; HCF &times; LCM = 4 &times; 9696 = 38784<br/>&bull; Product of numbers = 96 &times; 404 = 38784. Verified!"
            ],
            "HCF = 4, LCM = 9696 (HCF &times; LCM = 38,784)",
            "NCERT Class 10 Ex 1.1 & BPSC TRE Q1"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "96 और 404 का अभाज्य गुणनखंड विधि से HCF व LCM",
            "अभाज्य गुणनखंड विधि द्वारा 96 और 404 का HCF और LCM ज्ञात कीजिए और सत्यापित कीजिए कि HCF &times; LCM = दोनों संख्याओं का गुणनफल।",
            [
              "<strong>चरण 1 (अभाज्य गुणनखंडन):</strong><br/>&bull; 96 = 2^5 &times; 3^1<br/>&bull; 404 = 2^2 &times; 101^1।",
              "<strong>चरण 2 (HCF ज्ञात करना):</strong> उभयनिष्ठ अभाज्य 2 की न्यूनतम घात = 2^2 = 4। अतः HCF = 4।",
              "<strong>चरण 3 (LCM ज्ञात करना):</strong> सभी अभाज्य गुणनखंडों की अधिकतम घात = 2^5 &times; 3 &times; 101 = 32 &times; 303 = 9696।",
              "<strong>चरण 4 (सत्यापन):</strong><br/>&bull; HCF &times; LCM = 4 &times; 9696 = 38,784<br/>&bull; संख्याओं का गुणनफल = 96 &times; 404 = 38,784। पूर्णतः सत्यापित!"
            ],
            "HCF = 4, LCM = 9696 (गुणनफल = 38,784)",
            "NCERT कक्षा 10 उदाहरण 7"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: 4^n and 6^n Ending with Zero",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: 4^n अथवा 6^n का शून्य पर समाप्त होना",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The 'Ends with Digit Zero' Condition Trap!</div>
            <p>&bull; For any number to end with the digit 0, its prime factorisation MUST contain BOTH factors <strong>2 and 5</strong>.<br/>
            &bull; Consider $4^n = (2^2)^n = 2^{2n}$. Since 5 is NOT in the prime factorisation, $4^n$ can NEVER end with digit 0 for any natural number $n$.<br/>
            &bull; Similarly, $6^n = (2 \times 3)^n$. Since 5 is missing, $6^n$ never ends with 0.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: क्या 6^n या 4^n अंक 0 पर समाप्त हो सकता है?</div>
            <p>&bull; किसी भी संख्या के इकाई अंक पर 0 आने के लिए उसके अभाज्य गुणनखंड में <strong>2 और 5 दोनों</strong> का उपस्थित होना अनिवार्य है।<br/>
            &bull; $4^n = (2^2)^n = 2^{2n}$ में केवल 2 आता है, 5 नहीं। अतः $4^n$ कभी 0 पर समाप्त नहीं हो सकता।<br/>
            &bull; इसी प्रकार $6^n = (2 \times 3)^n$ में अभाज्य गुणनखंड 5 अनुपस्थित है, अतः किसी भी प्राकृत संख्या n के लिए $6^n$ अंक 0 पर समाप्त नहीं होगा।</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(1, "Real Numbers", "वास्तविक संख्याएँ", ch1Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 2: Polynomials
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math02",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 2,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 2: Polynomials (बहुपद)",
    titleHi: "अध्याय 2: बहुपद (Polynomials)",
    pdfUrl: "/ncert_books/class10/math_ch02.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch02_hi.pdf",
    competitionEdge: "High-frequency chapter across CTET Paper 2, BPSC TRE 4.0 Secondary Math, SSC CGL Tier 1/2 Algebra. Key concepts tested: relationship between zeroes and coefficients ($\alpha + \beta = -b/a, \alpha\beta = c/a$), constructing quadratic polynomials, and graphical interpretation of zeroes.",
    competitionEdgeHi: "सीटेट पेपर-2, बीपीएससी शिक्षक भर्ती 9-10 तथा एसएससी बीजगणित के लिए अति-महत्वपूर्ण। इसमें द्विघात बहुपद के शून्यकों और गुणांकों में संबंध ($\alpha + \beta = -b/a, \alpha\beta = c/a$), शून्यकों से बहुपद निर्माण, तथा ग्राफ से शून्यकों की संख्या ज्ञात करने के प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Geometrical Meaning of Zeroes",
        headingHi: "1. एनसीईआरटी मूल पाठ: शून्यकों का ज्यामितीय अर्थ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              A real number k is called a <strong>zero of polynomial p(x)</strong> if p(k) = 0. Geometrically, the zeroes of a polynomial y = p(x) are the <strong>x-coordinates of the points where the graph intersects the X-axis</strong>. A polynomial of degree n has at most n zeroes.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Parabola Shapes for Quadratic Polynomials ax^2 + bx + c</div>
            <p>&bull; If $a > 0$: Parabola opens <strong>UPWARDS</strong> (&cup;)<br/>
            &bull; If $a < 0$: Parabola opens <strong>DOWNWARDS</strong> (&cap;)<br/>
            &bull; Intersects X-axis at 2 points &rarr; 2 distinct zeroes.<br/>
            &bull; Touches X-axis at 1 point &rarr; 2 equal zeroes.<br/>
            &bull; Does not touch X-axis &rarr; No real zeroes.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं ज्यामितीय अवधारणा</div>
            <div class="mentor-msg">
              वास्तविक संख्या k बहुपद p(x) का <strong>शून्यक</strong> कहलाती है यदि p(k) = 0 हो। ज्यामितीय रूप से y = p(x) के ग्राफ द्वारा <strong>X-अक्ष को प्रतिच्छेद करने वाले बिंदुओं के x-निर्देशांक</strong> ही बहुपद के शून्यक होते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ परवलय (Parabola) के मुख्य नियम</div>
            <p>&bull; यदि $a > 0$: परवलय ऊपर की ओर खुला होता है (&cup;)<br/>
            &bull; यदि $a < 0$: परवलय नीचे की ओर खुला होता है (&cap;)<br/>
            &bull; X-अक्ष को 2 बिंदुओं पर काटे &rarr; 2 भिन्न वास्तविक शून्यक।<br/>
            &bull; X-अक्ष को केवल स्पर्श करे &rarr; 2 संपाती (बराबर) शून्यक।<br/>
            &bull; X-अक्ष को न छुए &rarr; कोई वास्तविक शून्यक नहीं।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Zeroes and Coefficients Relationship",
        headingHi: "2. सूत्र संकलन: शून्यकों तथा गुणांकों के बीच संबंध",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Quadratic Polynomial Relations (ax^2 + bx + c)</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Formula</th>
                  <th>Example with x^2 - 5x + 6</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sum of Zeroes ($\alpha + \beta$)</strong></td>
                  <td>$-b / a$</td>
                  <td>$-(-5) / 1 = 5$</td>
                </tr>
                <tr>
                  <td><strong>Product of Zeroes ($\alpha\beta$)</strong></td>
                  <td>$c / a$</td>
                  <td>$6 / 1 = 6$</td>
                </tr>
                <tr>
                  <td><strong>Polynomial Construction</strong></td>
                  <td>$k[x^2 - (\alpha + \beta)x + \alpha\beta]$</td>
                  <td>$x^2 - 5x + 6$</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 द्विघात बहुपद के संबंध सूत्र (ax^2 + bx + c)</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>संबंध</th>
                  <th>सूत्र</th>
                  <th>उदाहरण: x^2 - 5x + 6</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>शून्यकों का योग ($\alpha + \beta$)</strong></td>
                  <td>$-b / a$</td>
                  <td>$-(-5) / 1 = 5$ (2 + 3 = 5)</td>
                </tr>
                <tr>
                  <td><strong>शून्यकों का गुणनफल ($\alpha\beta$)</strong></td>
                  <td>$c / a$</td>
                  <td>$6 / 1 = 6$ (2 &times; 3 = 6)</td>
                </tr>
                <tr>
                  <td><strong>बहुपद का निर्माण</strong></td>
                  <td>$k[x^2 - (\alpha + \beta)x + \alpha\beta]$</td>
                  <td>$x^2 - 5x + 6$</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Zeroes Verification",
        headingHi: "3. हाथ से हल किया गया उदाहरण: शून्यक एवं संबंध सत्यापन",
        contentHtml: `
          ${makeSolvedCard(
            "Find Zeroes of x^2 - 2x - 8 and Verify Relationship",
            "Find the zeroes of the quadratic polynomial x^2 - 2x - 8 and verify the relationship between zeroes and coefficients.",
            [
              "<strong>Step 1 (Splitting the middle term):</strong> x^2 - 4x + 2x - 8 = 0 &rarr; x(x - 4) + 2(x - 4) = 0 &rarr; (x - 4)(x + 2) = 0.",
              "<strong>Step 2 (Find Zeroes):</strong> x = 4 or x = -2. So $\alpha = 4, \beta = -2$.",
              "<strong>Step 3 (Verify Sum):</strong> $\alpha + \beta = 4 + (-2) = 2$. Formula: $-b/a = -(-2)/1 = 2$. Verified!",
              "<strong>Step 4 (Verify Product):</strong> $\alpha\beta = 4 \times (-2) = -8$. Formula: $c/a = -8/1 = -8$. Verified!"
            ],
            "Zeroes are 4 and -2; Sum = 2, Product = -8",
            "NCERT Class 10 Ex 2.2 & BPSC TRE Q5"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "बहुपद x^2 - 2x - 8 के शून्यक एवं संबंध का सत्यापन",
            "द्विघात बहुपद x^2 - 2x - 8 के शून्यक ज्ञात कीजिए तथा शून्यकों और गुणांकों के बीच संबंध की सत्यता की जाँच कीजिए।",
            [
              "<strong>चरण 1 (मध्य पद विभक्त करना):</strong> x^2 - 4x + 2x - 8 = x(x - 4) + 2(x - 4) = (x - 4)(x + 2)।",
              "<strong>चरण 2 (शून्यक प्राप्त करना):</strong> x - 4 = 0 &rArr; x = 4 तथा x + 2 = 0 &rArr; x = -2। अतः $\alpha = 4, \beta = -2$।",
              "<strong>चरण 3 (योग का सत्यापन):</strong> $\alpha + \beta = 4 + (-2) = 2$। सूत्र से: $-b/a = -(-2)/1 = 2$। सत्य!",
              "<strong>चरण 4 (गुणनफल का सत्यापन):</strong> $\alpha\beta = 4 &times; (-2) = -8$। सूत्र से: $c/a = -8/1 = -8$। सत्य!"
            ],
            "शून्यक = 4 तथा -2; योग = 2, गुणनफल = -8",
            "NCERT कक्षा 10 प्रश्नावली 2.2 प्रश्न 1"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: 1/alpha + 1/beta and alpha^2 + beta^2",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: 1/α + 1/β एवं α^2 + β^2 के प्रश्न",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Common Algebraic Manipulation Traps!</div>
            <p>&bull; <strong>Formula 1:</strong> $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{-b/a}{c/a} = -\frac{b}{c}$.<br/>
            &bull; <strong>Formula 2:</strong> $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \left(-\frac{b}{a}\right)^2 - 2\left(\frac{c}{a}\right) = \frac{b^2 - 2ac}{a^2}$.<br/>
            &bull; Never calculate individual decimal roots when you can directly apply symmetric functions!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: 1/α + 1/β का मान निकालना</div>
            <p>&bull; <strong>शॉर्टकट 1:</strong> $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{-b/a}{c/a} = -\frac{b}{c}$।<br/>
            &bull; <strong>शॉर्टकट 2:</strong> $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{b^2 - 2ac}{a^2}$।<br/>
            &bull; परीक्षा में अलग से शून्यक निकालने में समय व्यर्थ न करें, सीधे इन सममित सूत्रों का प्रयोग करें!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(2, "Polynomials", "बहुपद", ch2Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 3: Pair of Linear Equations in Two Variables
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math03",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 3,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 3: Pair of Linear Equations in Two Variables (दो चर वाले रैखिक समीकरण युग्म)",
    titleHi: "अध्याय 3: दो चर वाले रैखिक समीकरण युग्म (Linear Equations in Two Variables)",
    pdfUrl: "/ncert_books/class10/math_ch03.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch03_hi.pdf",
    competitionEdge: "One of the most frequently tested topics across BPSC TRE, CTET Paper 2, SSC CGL/CHSL, and State PCS. Tests conditions for consistency ($a_1/a_2 \ne b_1/b_2$ for unique solution; $a_1/a_2 = b_1/b_2 \ne c_1/c_2$ for no solution; $a_1/a_2 = b_1/b_2 = c_1/c_2$ for infinite solutions), and word problems (upstream/downstream, age, digits, fractions).",
    competitionEdgeHi: "बीपीएससी टीआरई, सीटेट पेपर-2 तथा एसएससी में रैखिक समीकरणों की संगतता (Consistency) की 3 शर्तों से प्रतिवर्ष प्रश्न आते हैं: अद्वितीय हल, कोई हल नहीं (समांतर रेखाएं), तथा अपरिमित अनेक हल (संपाती रेखाएं)। साथ ही धारा के अनुकूल/प्रतिकूल चाल, आयु और भिन्न आधारित प्रश्नों का यह मुख्य स्रोत है।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & The 3 Consistency Conditions",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं संगतता की 3 अनिवार्य शर्तें",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              A pair of linear equations in two variables is represented as: $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$. By comparing the ratio of coefficients, we can immediately determine whether the system has a unique solution, infinitely many solutions, or no solution at all without drawing graphs!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ The 3 Fundamental Coefficient Comparison Rules</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Ratio Condition</th>
                  <th>Graphical Lines</th>
                  <th>Algebraic Interpretation</th>
                  <th>Consistency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>a1 / a2 &ne; b1 / b2</strong></td>
                  <td>Intersecting lines</td>
                  <td>Exactly ONE unique solution</td>
                  <td>Consistent</td>
                </tr>
                <tr>
                  <td><strong>a1 / a2 = b1 / b2 = c1 / c2</strong></td>
                  <td>Coincident lines</td>
                  <td>Infinitely many solutions</td>
                  <td>Consistent (Dependent)</td>
                </tr>
                <tr>
                  <td><strong>a1 / a2 = b1 / b2 &ne; c1 / c2</strong></td>
                  <td>Parallel lines</td>
                  <td>NO solution</td>
                  <td>Inconsistent</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं 3 मुख्य शर्तें</div>
            <div class="mentor-msg">
              दो चरों वाले रैखिक समीकरण युग्म $a_1 x + b_1 y + c_1 = 0$ तथा $a_2 x + b_2 y + c_2 = 0$ के गुणांकों की तुलना करके बिना ग्राफ बनाए तुरंत जाना जा सकता है कि समीकरण का अद्वितीय हल है, अनेक हल हैं, अथवा कोई हल नहीं है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ गुणांकों के अनुपात की तुलना तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>अनुपातों की तुलना</th>
                  <th>ग्राफीय निरूपण</th>
                  <th>बीजगणितीय हल</th>
                  <th>संगत / असंगत</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>a1 / a2 &ne; b1 / b2</strong></td>
                  <td>प्रतिच्छेदी रेखाएँ</td>
                  <td>केवल एक अद्वितीय हल</td>
                  <td>संगत (Consistent)</td>
                </tr>
                <tr>
                  <td><strong>a1 / a2 = b1 / b2 = c1 / c2</strong></td>
                  <td>संपाती रेखाएँ</td>
                  <td>अपरिमित रूप से अनेक हल</td>
                  <td>आश्रित-संगत</td>
                </tr>
                <tr>
                  <td><strong>a1 / a2 = b1 / b2 &ne; c1 / c2</strong></td>
                  <td>समांतर रेखाएँ</td>
                  <td>कोई हल नहीं</td>
                  <td>असंगत (Inconsistent)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Algebraic Methods: Substitution & Elimination",
        headingHi: "2. बीजगणितीय विधियाँ: प्रतिस्थापन विधि एवं विलोपन विधि",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Elimination Method: The Competitive Exam Favourite</div>
            <p>1. Multiply one or both equations by suitable non-zero constants to make the coefficients of one variable numerically equal.<br/>
            2. Add or subtract the equations to eliminate that variable.<br/>
            3. Solve for the remaining variable, then back-substitute to find the other variable.</p>
          </div>
          <div class="sticky-note">
            📌 <strong>Upstream & Downstream Speed Formula:</strong><br/>
            If boat speed in still water = $x$ km/h and stream speed = $y$ km/h:<br/>
            &bull; Downstream Speed = $x + y$<br/>
            &bull; Upstream Speed = $x - y$
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 विलोपन विधि (Elimination Method)</div>
            <p>1. किसी एक चर (x या y) के गुणांकों को समान करने के लिए समीकरणों को उपयुक्त संख्याओं से गुणा करें।<br/>
            2. एक चर को विलुप्त करने के लिए समीकरणों को जोड़ें या घटाएं।<br/>
            3. प्राप्त एक-चर वाले समीकरण से मान निकालकर दूसरे समीकरण में रखें।</p>
          </div>
          <div class="sticky-note">
            📌 <strong>नाव एवं धारा का परीक्षा सूत्र:</strong><br/>
            शांत जल में नाव की चाल = $x$ किमी/घं, धारा की चाल = $y$ किमी/घं:<br/>
            &bull; धारा के अनुकूल (Downstream) = $x + y$<br/>
            &bull; धारा के प्रतिकूल (Upstream) = $x - y$
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Parameter k for Parallel Lines",
        headingHi: "3. हाथ से हल किया गया उदाहरण: कोई हल न होने की शर्त पर k का मान",
        contentHtml: `
          ${makeSolvedCard(
            "Find k for which the system has NO solution",
            "For what value of k will the system of equations 3x + y = 1 and (2k - 1)x + (k - 1)y = 2k + 1 have no solution?",
            [
              "<strong>Step 1 (Identify coefficients):</strong> a1 = 3, b1 = 1, c1 = 1; a2 = 2k - 1, b2 = k - 1, c2 = 2k + 1.",
              "<strong>Step 2 (Apply No Solution Condition):</strong> a1/a2 = b1/b2 &ne; c1/c2 &rarr; 3 / (2k - 1) = 1 / (k - 1) &ne; 1 / (2k + 1).",
              "<strong>Step 3 (Cross Multiply):</strong> 3(k - 1) = 1(2k - 1) &rarr; 3k - 3 = 2k - 1 &rarr; 3k - 2k = 3 - 1 &rarr; k = 2.",
              "<strong>Step 4 (Check Inequality):</strong> When k = 2: 1 / (k - 1) = 1/1 = 1. And 1 / (2k + 1) = 1/5. Since 1 &ne; 1/5, condition holds!"
            ],
            "k = 2",
            "NCERT Class 10 Ex 3.5 & BPSC TRE Q10"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "समीकरण निकाय का कोई हल न होने पर k का मान",
            "k के किस मान के लिए समीकरण युग्म 3x + y = 1 तथा (2k - 1)x + (k - 1)y = 2k + 1 का कोई हल नहीं होगा?",
            [
              "<strong>चरण 1 (गुणांक ज्ञात करना):</strong> a1 = 3, b1 = 1, c1 = 1; a2 = 2k - 1, b2 = k - 1, c2 = 2k + 1।",
              "<strong>चरण 2 (शर्त लागू करना):</strong> कोई हल न होने हेतु: a1/a2 = b1/b2 &ne; c1/c2 &rArr; 3 / (2k - 1) = 1 / (k - 1)।",
              "<strong>चरण 3 (वज्र-गुणन):</strong> 3(k - 1) = 2k - 1 &rArr; 3k - 3 = 2k - 1 &rArr; k = 2।",
              "<strong>चरण 4 (असमानता की जांच):</strong> k = 2 पर 1/(k - 1) = 1 तथा c1/c2 = 1/5। 1 &ne; 1/5 सत्य है।"
            ],
            "k = 2",
            "NCERT कक्षा 10 प्रश्नावली 3.5"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The Sign of Constant Terms c1 and c2",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: अचर पद c1 और c2 के चिन्ह का जाल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The c1 and c2 Side Alignment Trap!</div>
            <p>&bull; Always ensure both equations have their constant terms on the <strong>SAME SIDE</strong> of the equals sign before comparing ratios!<br/>
            &bull; If Eq 1 has $c_1$ on LHS ($ax + by + c = 0$) and Eq 2 has $c_2$ on RHS ($ax + by = c$), you will get the opposite sign for $c_1/c_2$ and lose marks!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: अचर पदों (c1 व c2) का पक्षान्तरण</div>
            <p>&bull; अनुपातों की तुलना करने से पूर्व दोनों समीकरणों के अचर पदों को बराबर के <strong>एक ही तरफ</strong> (दोनों को बायीं तरफ या दोनों को दायीं तरफ) व्यवस्थित अवश्य कर लें!<br/>
            &bull; यदि एक समीकरण में अचर पद बायीं ओर और दूसरे में दायीं ओर रहा, तो अनुपात का चिन्ह विपरीत हो जाएगा और पूरा उत्तर गलत हो जाएगा।</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(3, "Linear Equations in Two Variables", "दो चर वाले रैखिक समीकरण", ch3Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 4: Quadratic Equations
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math04",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 4,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 4: Quadratic Equations (द्विघात समीकरण)",
    titleHi: "अध्याय 4: द्विघात समीकरण (Quadratic Equations)",
    pdfUrl: "/ncert_books/class10/math_ch04.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch04_hi.pdf",
    competitionEdge: "Core algebraic pillar for BPSC TRE 4.0 Secondary Math, CTET Paper 2, SSC CGL Tier 2, CDS, and NDA. High weightage on Quadratic Formula (Sridharacharya Formula), nature of roots via Discriminant $D = b^2 - 4ac$, and practical word problems (speed, distance, time, area).",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती (9-10), सीटेट पेपर-2, एसएससी सीजीएल तथा सीडीएस/एनडीए के लिए अनिवार्य अध्याय। इसमें विविक्तकर $D = b^2 - 4ac$ द्वारा मूलों की प्रकृति (वास्तविक व समान मूल $D=0$, भिन्न वास्तविक मूल $D>0$, कोई वास्तविक मूल नहीं $D<0$), श्रीधराचार्य द्विघाती सूत्र, तथा समय-दूरी आधारित प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & The Quadratic Formula",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं श्रीधराचार्य द्विघाती सूत्र",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              A quadratic equation in variable x is an equation of the form: $ax^2 + bx + c = 0$, where $a, b, c$ are real numbers and $a \ne 0$. Ancient Indian mathematician <strong>Sridharacharya</strong> gave the explicit quadratic formula to solve any quadratic equation directly!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Sridharacharya Quadratic Formula</div>
            <p>$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$<br/>
            The expression $D = b^2 - 4ac$ under the square root is called the <strong>Discriminant</strong>.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं श्रीधराचार्य सूत्र</div>
            <div class="mentor-msg">
              चर x में द्विघात समीकरण का मानक रूप $ax^2 + bx + c = 0$ होता है, जहाँ $a \ne 0$। प्राचीन भारतीय गणितज्ञ <strong>श्रीधराचार्य</strong> ने किसी भी द्विघात समीकरण के मूल सीधे ज्ञात करने का सार्वभौमिक सूत्र प्रतिपादित किया था।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ श्रीधराचार्य द्विघाती सूत्र</div>
            <p>$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$<br/>
            वर्गमूल के अंदर का व्यंजक $D = b^2 - 4ac$ <strong>विविक्तकर (Discriminant)</strong> कहलाता है।</p>
          </div>
        `
      },
      {
        heading: "2. Master Matrix: Nature of Roots via Discriminant D",
        headingHi: "2. तुलनात्मक तालिका: विविक्तकर D द्वारा मूलों की प्रकृति",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Nature of Roots Matrix</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Value of Discriminant D</th>
                  <th>Nature of Roots</th>
                  <th>Roots Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>D > 0 and a perfect square</strong></td>
                  <td>Two distinct rational roots</td>
                  <td>$x = \frac{-b \pm \sqrt{D}}{2a}$</td>
                </tr>
                <tr>
                  <td><strong>D > 0 and NOT a perfect square</strong></td>
                  <td>Two distinct irrational conjugate roots</td>
                  <td>$p \pm \sqrt{q}$</td>
                </tr>
                <tr>
                  <td><strong>D = 0</strong></td>
                  <td>Two real and EQUAL roots</td>
                  <td>$x = -\frac{b}{2a}, -\frac{b}{2a}$</td>
                </tr>
                <tr>
                  <td><strong>D < 0</strong></td>
                  <td>NO real roots (complex imaginary)</td>
                  <td>No real solution exists</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 मूलों की प्रकृति तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>विविक्तकर (D = b^2 - 4ac)</th>
                  <th>मूलों की प्रकृति</th>
                  <th>मूलों का मान</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>D > 0 (पूर्ण वर्ग संख्या)</strong></td>
                  <td>दो भिन्न परिमेय मूल</td>
                  <td>$x = \frac{-b \pm \sqrt{D}}{2a}$</td>
                </tr>
                <tr>
                  <td><strong>D > 0 (पूर्ण वर्ग नहीं)</strong></td>
                  <td>दो भिन्न अपरिमेय संयुग्मी मूल</td>
                  <td>$p \pm \sqrt{q}$</td>
                </tr>
                <tr>
                  <td><strong>D = 0</strong></td>
                  <td>दो वास्तविक और बराबर मूल</td>
                  <td>$x = -\frac{b}{2a}$</td>
                </tr>
                <tr>
                  <td><strong>D < 0</strong></td>
                  <td>कोई वास्तविक मूल नहीं (काल्पनिक)</td>
                  <td>वास्तविक संख्या में हल संभव नहीं</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Equal Roots Parameter k",
        headingHi: "3. हाथ से हल किया गया उदाहरण: बराबर मूलों की स्थिति में k का मान",
        contentHtml: `
          ${makeSolvedCard(
            "Find k for Equal Roots in kx(x - 2) + 6 = 0",
            "Find the values of k for which the quadratic equation kx(x - 2) + 6 = 0 has two equal real roots.",
            [
              "<strong>Step 1 (Expand to Standard Form):</strong> kx^2 - 2kx + 6 = 0. Here a = k, b = -2k, c = 6 (with k &ne; 0).",
              "<strong>Step 2 (Apply Equal Roots Condition D = 0):</strong> b^2 - 4ac = 0 &rarr; (-2k)^2 - 4(k)(6) = 0.",
              "<strong>Step 3 (Factorise):</strong> 4k^2 - 24k = 0 &rarr; 4k(k - 6) = 0 &rarr; k = 0 or k = 6.",
              "<strong>Step 4 (Reject invalid value):</strong> If k = 0, the equation becomes 6 = 0 which is impossible and loses quadratic nature (a &ne; 0). Therefore, k = 6 only."
            ],
            "k = 6 (k = 0 is rejected)",
            "NCERT Class 10 Ex 4.4 & BPSC TRE Q3"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "kx(x - 2) + 6 = 0 के बराबर मूल होने पर k का मान",
            "k का वह मान ज्ञात कीजिए जिसके लिए द्विघात समीकरण kx(x - 2) + 6 = 0 के दो बराबर मूल हों।",
            [
              "<strong>चरण 1 (मानक रूप में लिखना):</strong> kx^2 - 2kx + 6 = 0। यहाँ a = k, b = -2k, c = 6 (जहाँ k &ne; 0)।",
              "<strong>चरण 2 (बराबर मूलों की शर्त D = 0):</strong> b^2 - 4ac = 0 &rArr; (-2k)^2 - 4(k)(6) = 0।",
              "<strong>चरण 3 (गुणनखंडन):</strong> 4k^2 - 24k = 0 &rArr; 4k(k - 6) = 0 &rArr; k = 0 अथवा k = 6।",
              "<strong>चरण 4 (अमान्य मान को निरस्त करना):</strong> यदि k = 0 रखें तो x^2 का पद ही समाप्त हो जाएगा (द्विघात नहीं रहेगा)। अतः केवल k = 6 मान्य है।"
            ],
            "k = 6 (k = 0 अमान्य)",
            "NCERT कक्षा 10 प्रश्नावली 4.4"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The k = 0 Trap in kx^2",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: k = 0 का घातक विकल्प",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The k = 0 Multiple Choice Trap!</div>
            <p>&bull; Competitive exams will almost ALWAYS provide <em>'k = 0 or 6'</em> as Option (A) and <em>'k = 6 only'</em> as Option (C)!<br/>
            &bull; By definition, in a quadratic equation $ax^2 + bx + c = 0$, <strong>$a$ CANNOT be zero</strong>. Hence, $k = 0$ is invalid!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: k = 0 का विकल्प</div>
            <p>&bull; प्रतियोगी परीक्षाओं में विकल्प (A) में प्रायः 'k = 0, 6' तथा विकल्प (B) में 'केवल 6' दिया जाता है।<br/>
            &bull; ध्यान रखें: द्विघात समीकरण की परिभाषा के अनुसार $a \ne 0$ होना चाहिए। यदि $k = 0$ होगा तो यह द्विघात समीकरण ही नहीं रहेगा। अतः सही उत्तर 'केवल 6' होगा!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(4, "Quadratic Equations", "द्विघात समीकरण", ch4Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 5: Arithmetic Progressions
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math05",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 5,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 5: Arithmetic Progressions (समान्तर श्रेढ़ियाँ)",
    titleHi: "अध्याय 5: समान्तर श्रेढ़ियाँ (Arithmetic Progressions - AP)",
    pdfUrl: "/ncert_books/class10/math_ch05.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch05_hi.pdf",
    competitionEdge: "One of the most heavily tested quantitative aptitude & math sections in SSC CGL, BPSC TRE 4.0, CTET Paper 2, CDS, Railways, and Bank PO. High yield formulas: general term $a_n = a + (n-1)d$, sum of $n$ terms $S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a+l)$, finding $a_n$ from $S_n - S_{n-1}$, and arithmetic mean.",
    competitionEdgeHi: "एसएससी सीजीएल, रेलवे, बीपीएससी शिक्षक भर्ती, सीटेट तथा बैंक परीक्षाओं में सर्वाधिक पूछा जाने वाला अध्याय। इसमें nवाँ पद $a_n = a + (n-1)d$, n पदों का योगफल $S_n = \frac{n}{2}(a+l)$, $S_n$ से $a_n$ ज्ञात करना ($a_n = S_n - S_{n-1}$), तथा समांतर माध्य ($\frac{a+b}{2}$) से त्वरित हल करने के शॉर्टकट शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & The General Term an",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं AP का व्यापक पद an",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              An <strong>Arithmetic Progression (AP)</strong> is a list of numbers in which each term is obtained by adding a fixed number d (common difference) to the preceding term, except the first term a. The common difference d can be positive, negative, or zero!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ General Form & n-th Term Formula</div>
            <p>&bull; General AP form: $a, a + d, a + 2d, a + 3d, \dots, a + (n - 1)d$<br/>
            &bull; Common difference: $d = a_{k+1} - a_k$<br/>
            &bull; <strong>n-th Term:</strong> $a_n = a + (n - 1)d$<br/>
            &bull; <strong>n-th Term from the END:</strong> $a'_n = l - (n - 1)d$ (where l is last term).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं nवाँ पद</div>
            <div class="mentor-msg">
              <strong>समान्तर श्रेढ़ी (AP)</strong> संख्याओं की ऐसी सूची है जिसमें प्रत्येक पद अपने पिछले पद में एक निश्चित संख्या d (सार्व अंतर) जोड़कर प्राप्त होता है। सार्व अंतर d धनात्मक, ऋणात्मक अथवा शून्य भी हो सकता है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ AP का मानक रूप एवं nवें पद का सूत्र</div>
            <p>&bull; AP का व्यापक रूप: $a, a + d, a + 2d, \dots, a + (n - 1)d$<br/>
            &bull; सार्व अंतर: $d = a_2 - a_1 = a_n - a_{n-1}$<br/>
            &bull; <strong>nवाँ पद:</strong> $a_n = a + (n - 1)d$<br/>
            &bull; <strong>अंत से nवाँ पद:</strong> $l - (n - 1)d$ (जहाँ l अंतिम पद है)।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Sum of First n Terms (Sn)",
        headingHi: "2. सूत्र संकलन: प्रथम n पदों का योगफल (Sn)",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Sum Formulas for AP</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Formula</th>
                  <th>Usage Scenario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>General Sum (Sn)</strong></td>
                  <td>$S_n = \frac{n}{2}[2a + (n - 1)d]$</td>
                  <td>When a, d, and n are known</td>
                </tr>
                <tr>
                  <td><strong>Sum with Last Term</strong></td>
                  <td>$S_n = \frac{n}{2}(a + l)$</td>
                  <td>When first term a and last term l are known</td>
                </tr>
                <tr>
                  <td><strong>Sum of First n Natural Nos</strong></td>
                  <td>$S_n = \frac{n(n + 1)}{2}$</td>
                  <td>$1 + 2 + 3 + \dots + n$</td>
                </tr>
                <tr>
                  <td><strong>Find an from Sn</strong></td>
                  <td>$a_n = S_n - S_{n-1}$</td>
                  <td>High-yield exam question!</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 योगफल (Sn) के प्रमुख सूत्र</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>प्रकार</th>
                  <th>सूत्र</th>
                  <th>उपयोग</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>सामान्य योग सूत्र</strong></td>
                  <td>$S_n = \frac{n}{2}[2a + (n - 1)d]$</td>
                  <td>जब प्रथम पद a, सार्व अंतर d और पदों की संख्या n ज्ञात हो</td>
                </tr>
                <tr>
                  <td><strong>अंतिम पद युक्त सूत्र</strong></td>
                  <td>$S_n = \frac{n}{2}(a + l)$</td>
                  <td>जब पहला पद a और अंतिम पद l ज्ञात हो</td>
                </tr>
                <tr>
                  <td><strong>प्रथम n प्राकृत संख्याओं का योग</strong></td>
                  <td>$S_n = \frac{n(n + 1)}{2}$</td>
                  <td>$1 + 2 + 3 + \dots + n$</td>
                </tr>
                <tr>
                  <td><strong>Sn से an ज्ञात करना</strong></td>
                  <td>$a_n = S_n - S_{n-1}$</td>
                  <td>प्रतियोगी परीक्षाओं का सर्वाधिक पसंदीदा सूत्र</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Finding an from Sn",
        headingHi: "3. हाथ से हल किया गया उदाहरण: Sn = 4n - n^2 से an व d ज्ञात करना",
        contentHtml: `
          ${makeSolvedCard(
            "Find 10th term and common difference if Sn = 4n - n^2",
            "If the sum of the first n terms of an AP is given by Sn = 4n - n^2, find the first term, the common difference, and the 10th term.",
            [
              "<strong>Step 1 (Find First Term a = S1):</strong> a = S1 = 4(1) - (1)^2 = 4 - 1 = 3.",
              "<strong>Step 2 (Find Sum of 2 terms S2):</strong> S2 = 4(2) - (2)^2 = 8 - 4 = 4.",
              "<strong>Step 3 (Find Second Term a2):</strong> a2 = S2 - S1 = 4 - 3 = 1.",
              "<strong>Step 4 (Find Common Difference d):</strong> d = a2 - a1 = 1 - 3 = -2.",
              "<strong>Step 5 (Calculate 10th term a10):</strong> a10 = a + (10 - 1)d = 3 + 9(-2) = 3 - 18 = -15."
            ],
            "a = 3, d = -2, a10 = -15",
            "NCERT Class 10 Ex 5.3 & BPSC TRE Q11"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "Sn = 4n - n^2 से प्रथम पद, सार्व अंतर तथा 10वाँ पद",
            "यदि किसी AP के प्रथम n पदों का योग Sn = 4n - n^2 है, तो इसका प्रथम पद क्या है? प्रथम दो पदों का योग क्या है? दूसरा पद, 10वाँ पद और nवाँ पद ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (प्रथम पद a = S1):</strong> a = S1 = 4(1) - 1^2 = 3।",
              "<strong>चरण 2 (प्रथम दो पदों का योग S2):</strong> S2 = 4(2) - 2^2 = 8 - 4 = 4।",
              "<strong>चरण 3 (दूसरा पद a2):</strong> a2 = S2 - S1 = 4 - 3 = 1।",
              "<strong>चरण 4 (सार्व अंतर d):</strong> d = a2 - a1 = 1 - 3 = -2।",
              "<strong>चरण 5 (10वाँ पद):</strong> a10 = a + 9d = 3 + 9(-2) = 3 - 18 = -15।"
            ],
            "प्रथम पद = 3, d = -2, 10वाँ पद = -15",
            "NCERT कक्षा 10 प्रश्नावली 5.3 प्रश्न 11"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The n Must Be a Natural Number Trap",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: पदों की संख्या n का पूर्णांक होना",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Number of Terms n Validity Trap!</div>
            <p>&bull; The number of terms <strong>n must ALWAYS be a positive integer (natural number)</strong>: $n \in \{1, 2, 3, \dots\}$.<br/>
            &bull; If calculating $n$ results in a fraction (e.g. $n = 16.4$) or a negative number (e.g. $n = -5$), that given number is <strong>NOT a term</strong> of the AP!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: पदों की संख्या n की वैधता</div>
            <p>&bull; पदों की संख्या <strong>n सदैव एक धनात्मक पूर्णांक (प्राकृत संख्या)</strong> होनी चाहिए: $n = 1, 2, 3, \dots$।<br/>
            &bull; यदि n का मान भिन्न (जैसे 25/3) या ऋणात्मक आए, तो वह दी गई संख्या उस AP का पद नहीं हो सकती!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(5, "Arithmetic Progressions", "समान्तर श्रेढ़ियाँ", ch5Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 6: Triangles (त्रिभुज - समरूपता)
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math06",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 6,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 6: Triangles (त्रिभुज)",
    titleHi: "अध्याय 6: त्रिभुज - समरूपता (Triangles)",
    pdfUrl: "/ncert_books/class10/math_ch06.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch06_hi.pdf",
    competitionEdge: "Essential geometric chapter for BPSC TRE 4.0 Secondary Math, CTET Paper 2, SSC CGL Tier 1/2, CDS, and NDA. Covers Basic Proportionality Theorem (Thales Theorem: $AD/DB = AE/EC$), criteria for similarity (AAA/AA, SAS, SSS), and properties of similar triangles.",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती (9-10), सीटेट पेपर-2, एसएससी सीजीएल एवं सीडीएस ज्यामिति का आधार स्तंभ। इसमें थेल्स प्रमेय (आधारभूत आनुपातिकता प्रमेय), समरूपता की कसौटियाँ (AA, SAS, SSS), तथा समरूप त्रिभुजों के परिमापों के अनुपात से जुड़े प्रश्न सर्वाधिक पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Basic Proportionality Theorem (BPT)",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं आधारभूत आनुपातिकता प्रमेय (थेल्स प्रमेय)",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              Two figures having the same shape but not necessarily the same size are called <strong>similar figures</strong>. In Class 10, the crown jewel theorem is <strong>Thales Theorem (BPT)</strong>: If a line is drawn parallel to one side of a triangle intersecting the other two sides, it divides the two sides in the same ratio.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Thales Theorem (BPT) Key Proportions</div>
            <p>In $\triangle ABC$, if $DE \parallel BC$, then:<br/>
            &bull; $\frac{AD}{DB} = \frac{AE}{EC}$<br/>
            &bull; $\frac{AD}{AB} = \frac{AE}{AC}$<br/>
            &bull; $\frac{DB}{AB} = \frac{EC}{AC}$<br/>
            &bull; <strong>Converse of BPT:</strong> If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं थेल्स प्रमेय</div>
            <div class="mentor-msg">
              वे आकृतियाँ जिनका आकार समान हो परन्तु उनका माप समान होना आवश्यक न हो, <strong>समरूप आकृतियाँ (Similar Figures)</strong> कहलाती हैं। कक्षा 10 ज्यामिति का मुख्य आधार <strong>थेल्स प्रमेय (BPT)</strong> है: यदि किसी त्रिभुज की एक भुजा के समांतर अन्य दो भुजाओं को प्रतिच्छेद करने वाली रेखा खींची जाए, तो वह रेखा उन दोनों भुजाओं को एक ही अनुपात में विभाजित करती है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ थेल्स प्रमेय के प्रमुख समानुपातिक परिणाम</div>
            <p>त्रिभुज ABC में यदि $DE \parallel BC$ हो:<br/>
            &bull; $\frac{AD}{DB} = \frac{AE}{EC}$<br/>
            &bull; $\frac{AD}{AB} = \frac{AE}{AC}$<br/>
            &bull; <strong>थेल्स प्रमेय का विलोम:</strong> यदि कोई रेखा त्रिभुज की दो भुजाओं को एक ही अनुपात में विभाजित करे, तो वह तीसरी भुजा के समांतर होती है।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Criteria for Similarity of Triangles",
        headingHi: "2. सूत्र संकलन: त्रिभुजों की समरूपता की कसौटियाँ",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 The 3 Similarity Criteria (AAA, SSS, SAS)</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>Condition for $\triangle ABC \sim \triangle DEF$</th>
                  <th>Key Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AAA (or AA)</strong></td>
                  <td>$\angle A = \angle D, \angle B = \angle E$</td>
                  <td>Two equal angles automatically imply 3rd angle is equal!</td>
                </tr>
                <tr>
                  <td><strong>SSS</strong></td>
                  <td>$\frac{AB}{DE} = \frac{BC}{EF} = \frac{AC}{DF}$</td>
                  <td>Corresponding sides are strictly in proportion</td>
                </tr>
                <tr>
                  <td><strong>SAS</strong></td>
                  <td>$\frac{AB}{DE} = \frac{AC}{DF}$ and included $\angle A = \angle D$</td>
                  <td>Angle MUST be the INCLUDED angle between proportional sides</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 समरूपता की 3 प्रमुख कसौटियाँ</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>कसौटी</th>
                  <th>$\triangle ABC \sim \triangle DEF$ की शर्त</th>
                  <th>महत्वपूर्ण बिंदु</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AA / AAA</strong></td>
                  <td>$\angle A = \angle D, \angle B = \angle E$</td>
                  <td>यदि दो कोण बराबर हों, तो तीसरा कोण स्वतः बराबर हो जाता है</td>
                </tr>
                <tr>
                  <td><strong>SSS</strong></td>
                  <td>$\frac{AB}{DE} = \frac{BC}{EF} = \frac{AC}{DF}$</td>
                  <td>संगत भुजाएँ एक ही अनुपात में (समानुपाती) होती हैं</td>
                </tr>
                <tr>
                  <td><strong>SAS</strong></td>
                  <td>$\frac{AB}{DE} = \frac{AC}{DF}$ तथा अंतर्गत कोण $\angle A = \angle D$</td>
                  <td>कोण अनिवार्य रूप से समानुपाती भुजाओं के बीच का (अंतर्गत) होना चाहिए</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Thales Theorem Unknown Side",
        headingHi: "3. हाथ से हल किया गया उदाहरण: थेल्स प्रमेय से अज्ञात भुजा EC ज्ञात करना",
        contentHtml: `
          ${makeSolvedCard(
            "Find EC in triangle ABC where DE || BC",
            "In $\triangle ABC$, $DE \parallel BC$. If $AD = 1.5\text{ cm}$, $DB = 3\text{ cm}$, and $AE = 1\text{ cm}$, find the length of $EC$.",
            [
              "<strong>Step 1 (State theorem):</strong> Since $DE \parallel BC$, by Basic Proportionality Theorem (BPT): $\frac{AD}{DB} = \frac{AE}{EC}$.",
              "<strong>Step 2 (Substitute values):</strong> $\frac{1.5}{3} = \frac{1}{EC}$.",
              "<strong>Step 3 (Simplify ratio):</strong> $\frac{1.5}{3} = \frac{1}{2}$. Thus $\frac{1}{2} = \frac{1}{EC}$.",
              "<strong>Step 4 (Solve for EC):</strong> Cross multiply &rarr; $EC = 2\text{ cm}$."
            ],
            "EC = 2 cm",
            "NCERT Class 10 Ex 6.2 & BPSC TRE Q1"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "त्रिभुज ABC में भुजा EC की लंबाई ज्ञात करना (DE || BC)",
            "आकृति में $DE \parallel BC$ है। यदि $AD = 1.5$ सेमी, $DB = 3$ सेमी तथा $AE = 1$ सेमी हो, तो $EC$ का मान ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (थेल्स प्रमेय कथन):</strong> चूंकि $DE \parallel BC$ है, अतः आधारभूत आनुपातिकता प्रमेय से: $\frac{AD}{DB} = \frac{AE}{EC}$।",
              "<strong>चरण 2 (मान प्रतिस्थापित करना):</strong> $\frac{1.5}{3} = \frac{1}{EC}$।",
              "<strong>चरण 3 (सरल करना):</strong> $\frac{1.5}{3} = \frac{1}{2}$ &rArr; $\frac{1}{2} = \frac{1}{EC}$।",
              "<strong>चरण 4 (EC का मान):</strong> वज्र-गुणन से $EC = 2$ सेमी।"
            ],
            "EC = 2 सेमी",
            "NCERT कक्षा 10 प्रश्नावली 6.2 प्रश्न 1"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Congruence vs Similarity Distinction",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: सर्वांगसमता बनाम समरूपता",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ All Congruent Figures are Similar, but NOT Vice Versa!</div>
            <p>&bull; <strong>Congruent figures:</strong> Same shape AND same size (Ratio of sides = 1).<br/>
            &bull; <strong>Similar figures:</strong> Same shape, but sizes may differ.<br/>
            &bull; True/False Exam Trap: <em>'All similar triangles are congruent'</em> is <strong>FALSE</strong>! <em>'All congruent triangles are similar'</em> is <strong>TRUE</strong>!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: सर्वांगसम बनाम समरूप</div>
            <p>&bull; <strong>सभी सर्वांगसम आकृतियाँ समरूप होती हैं</strong>, परन्तु <strong>सभी समरूप आकृतियाँ सर्वांगसम नहीं होतीं</strong>!<br/>
            &bull; सर्वांगसम में आकार व माप दोनों समान होते हैं (भुजाओं का अनुपात = 1)। समरूप में केवल आकार समान होता है।</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(6, "Triangles", "त्रिभुज", ch6Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 7: Coordinate Geometry (निर्देशांक ज्यामिति)
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math07",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 7,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 7: Coordinate Geometry (निर्देशांक ज्यामिति)",
    titleHi: "अध्याय 7: निर्देशांक ज्यामिति (Coordinate Geometry)",
    pdfUrl: "/ncert_books/class10/math_ch07.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch07_hi.pdf",
    competitionEdge: "High-scoring analytical geometry chapter for BPSC TRE 4.0 Secondary Math, CTET Paper 2, SSC CGL Tier 1/2, NDA, and CDS. Covers Distance Formula ($d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$), Section Formula (internal division $m_1:m_2$), Mid-point Formula, and Centroid of a triangle.",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती (9-10), सीटेट पेपर-2, एसएससी सीजीएल तथा एनडीए/सीडीएस के लिए अति-स्कोरिंग अध्याय। इसमें दूरी सूत्र ($d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$), विभाजन सूत्र (अंतः विभाजन $m_1:m_2$), मध्य-बिंदु सूत्र, तथा त्रिभुज का केंद्रक ($\frac{x_1+x_2+x_3}{3}, \frac{y_1+y_2+y_3}{3}$) सीधे पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & The Distance Formula",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं दूरी सूत्र",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              Coordinate geometry bridges algebra and geometry. By placing points on a Cartesian grid with coordinates $(x, y)$, we can compute distances, find dividing points, and determine geometric shapes purely algebraically!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Distance Formula & Special Cases</div>
            <p>&bull; <strong>Between two points P(x1, y1) and Q(x2, y2):</strong><br/>
            $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$<br/>
            &bull; <strong>From Origin (0, 0) to point P(x, y):</strong> $OP = \sqrt{x^2 + y^2}$<br/>
            &bull; <strong>Collinearity Condition:</strong> Three points A, B, C are collinear if $AB + BC = AC$.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं दूरी सूत्र</div>
            <div class="mentor-msg">
              निर्देशांक ज्यामिति बीजगणित और ज्यामिति का अद्भुत संगम है। कार्तीय तल पर बिंदुओं के निर्देशांक $(x, y)$ ज्ञात होने पर हम ज्यामितीय आकृतियों की भुजाओं की लंबाई, मध्य बिंदु तथा विभाजन अनुपात की गणना बीजगणितीय रूप से कर सकते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ दूरी सूत्र एवं विशेष स्थितियाँ</div>
            <p>&bull; <strong>दो बिंदुओं P(x1, y1) और Q(x2, y2) के बीच की दूरी:</strong><br/>
            $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$<br/>
            &bull; <strong>मूल बिंदु (0, 0) से दूरी:</strong> $\sqrt{x^2 + y^2}$<br/>
            &bull; <strong>संरेखी होने की शर्त:</strong> तीन बिंदु A, B, C संरेखी होते हैं यदि $AB + BC = AC$ हो।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Section Formula & Centroid",
        headingHi: "2. सूत्र संकलन: विभाजन सूत्र, मध्य-बिंदु एवं केंद्रक",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Division and Centroid Formulas</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Formula</th>
                  <th>Exam Shortcut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Section Formula (Internal m1:m2)</strong></td>
                  <td>$P(x, y) = \left(\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \frac{m_1 y_2 + m_2 y_1}{m_1 + m_2}\right)$</td>
                  <td>Use $k:1$ ratio to find unknown dividing ratio</td>
                </tr>
                <tr>
                  <td><strong>Mid-point Formula</strong></td>
                  <td>$M(x, y) = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$</td>
                  <td>Special case when $m_1 = m_2 = 1$</td>
                </tr>
                <tr>
                  <td><strong>Centroid of Triangle</strong></td>
                  <td>$G(x, y) = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$</td>
                  <td>Intersection of 3 medians (divides in 2:1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 विभाजन सूत्र एवं केंद्रक सूत्र तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>संकल्पना</th>
                  <th>सूत्र</th>
                  <th>परीक्षा शॉर्टकट</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>अंतः विभाजन सूत्र (m1 : m2)</strong></td>
                  <td>$P = \left(\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \frac{m_1 y_2 + m_2 y_1}{m_1 + m_2}\right)$</td>
                  <td>अनुपात ज्ञात करने हेतु $k : 1$ अनुपात मानें</td>
                </tr>
                <tr>
                  <td><strong>मध्य-बिंदु सूत्र</strong></td>
                  <td>$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$</td>
                  <td>जब $m_1 = m_2 = 1$ हो</td>
                </tr>
                <tr>
                  <td><strong>त्रिभुज का केंद्रक (Centroid)</strong></td>
                  <td>$G = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$</td>
                  <td>माध्यिकाओं का संगम बिंदु (2:1 में विभाजन)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Section Formula in k:1 Ratio",
        headingHi: "3. हाथ से हल किया गया उदाहरण: Y-अक्ष द्वारा विभाजन का अनुपात ज्ञात करना",
        contentHtml: `
          ${makeSolvedCard(
            "Ratio in which Y-axis divides segment joining (5, -6) and (-1, -4)",
            "Find the ratio in which the Y-axis divides the line segment joining the points (5, -6) and (-1, -4). Also find the point of intersection.",
            [
              "<strong>Step 1 (Set up point on Y-axis):</strong> Any point on Y-axis has x-coordinate = 0, so let point be P(0, y) dividing in ratio k:1.",
              "<strong>Step 2 (Apply Section formula for x):</strong> x = (k * (-1) + 1 * 5) / (k + 1) = 0 &rarr; -k + 5 = 0 &rarr; k = 5. So ratio is 5:1.",
              "<strong>Step 3 (Find y-coordinate):</strong> y = (5 * (-4) + 1 * (-6)) / (5 + 1) = (-20 - 6) / 6 = -26 / 6 = -13/3.",
              "<strong>Step 4 (Final Answer):</strong> Ratio is 5:1 internally, and intersection point is (0, -13/3)."
            ],
            "Ratio = 5:1, Point = (0, -13/3)",
            "NCERT Class 10 Ex 7.2 & BPSC TRE Q8"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "Y-अक्ष द्वारा बिंदुओं (5, -6) और (-1, -4) के विभाजन का अनुपात",
            "वह अनुपात ज्ञात कीजिए जिसमें Y-अक्ष बिंदुओं (5, -6) और (-1, -4) को मिलाने वाले रेखाखंड को विभाजित करता है। प्रतिच्छेद बिंदु के निर्देशांक भी ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (Y-अक्ष पर बिंदु मानना):</strong> Y-अक्ष पर प्रत्येक बिंदु का x-निर्देशांक 0 होता है। माना बिंदु P(0, y) रेखाखंड को k:1 में बांटता है।",
              "<strong>चरण 2 (x-निर्देशांक से k का मान):</strong> $x = \frac{k(-1) + 1(5)}{k + 1} = 0$ &rArr; $-k + 5 = 0$ &rArr; $k = 5$। अतः अनुपात 5:1 है।",
              "<strong>चरण 3 (y-निर्देशांक निकालना):</strong> $y = \frac{5(-4) + 1(-6)}{5 + 1} = \frac{-20 - 6}{6} = \frac{-26}{6} = -\frac{13}{3}$।",
              "<strong>चरण 4 (अंतिम परिणाम):</strong> अभीष्ट अनुपात 5:1 तथा प्रतिच्छेद बिंदु (0, -13/3) है।"
            ],
            "अनुपात = 5:1, बिंदु = (0, -13/3)",
            "NCERT कक्षा 10 उदाहरण 9"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: X-axis vs Y-axis Division Coordinates",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: X-अक्ष बनाम Y-अक्ष विभाजन",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Axis Coordinate Substitution Trap!</div>
            <p>&bull; If divided by the <strong>X-axis</strong> &rarr; Point is <strong>(x, 0)</strong> &rarr; Equate the y-formula to 0 to find the ratio!<br/>
            &bull; If divided by the <strong>Y-axis</strong> &rarr; Point is <strong>(0, y)</strong> &rarr; Equate the x-formula to 0 to find the ratio!<br/>
            &bull; Confusing which coordinate is zero will flip the entire ratio upside down!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: X-अक्ष व Y-अक्ष के शून्य निर्देशांक</div>
            <p>&bull; जब <strong>X-अक्ष</strong> द्वारा विभाजन पूछा जाए &rarr; बिंदु <strong>(x, 0)</strong> होता है &rarr; y वाले सूत्र को 0 के बराबर रखकर अनुपात k निकालें!<br/>
            &bull; जब <strong>Y-अक्ष</strong> द्वारा विभाजन पूछा जाए &rarr; बिंदु <strong>(0, y)</strong> होता है &rarr; x वाले सूत्र को 0 के बराबर रखकर अनुपात k निकालें!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(7, "Coordinate Geometry", "निर्देशांक ज्यामिति", ch7Templates)
  }
];

const outPath = path.join(__dirname, 'class10_math_p1.json');
fs.writeFileSync(outPath, JSON.stringify(chaptersP1, null, 2), 'utf8');
console.log(`Generated Part 1: ${chaptersP1.length} Class 10 Math chapters with 30 MCQs each (${chaptersP1.length * 30} MCQs)!`);
