/**
 * scratch/build_class7_math_p3.js
 * NCERT Class 7 Mathematics - Chapters 10 to 13
 * Ch 10: Algebraic Expressions (बीजीय व्यंजक)
 * Ch 11: Exponents and Powers (घातांक और घात)
 * Ch 12: Symmetry (सममिति)
 * Ch 13: Visualising Solid Shapes (ठोस आकारों का चित्रण)
 * 
 * Exactly 30 bilingual competition-grade MCQs per chapter (120 MCQs total).
 */

module.exports = [
  // ==========================================
  // CHAPTER 10: Algebraic Expressions (बीजीय व्यंजक)
  // ==========================================
  {
    id: "ncert-c7-m10",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 10,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 10: Algebraic Expressions (बीजीय व्यंजक)",
    titleHi: "अध्याय 10: बीजीय व्यंजक (Terms, Factors & Evaluation)",
    readingTime: "22 mins read",
    badge: "Algebra Core",
    desc: "NCERT Class 7 Chapter 10: Terms, factors, coefficients, monomials, binomials, trinomials, like and unlike terms, addition and subtraction of algebraic expressions, evaluating expressions.",
    descHi: "एनसीईआरटी कक्षा 7 बीजीय व्यंजक: पद, गुणनखंड, गुणांक, एकपदी, द्विपद, त्रिपद, समान एवं असमान पद, बीजीय व्यंजकों का योग व व्यवकलन, चर के मान रखकर व्यंजक का मान ज्ञात करना।",
    competitionEdge: "Heavily tested in CTET Paper 2, BPSC TRE 4.0 Middle School, SSC CGL/CHSL, and State TETs. Distinguishing like vs unlike terms, algebraic evaluation, and perimeter/area formulas in algebra.",
    competitionEdgeHi: "CTET पेपर 2 और BPSC शिक्षक भर्ती में पूछे जाने वाले प्रमुख प्रश्न: समान पदों का संयोजन, संख्यात्मक गुणांक, बीजीय व्यंजकों का मान निकालना और ज्यामितीय सूत्रों का बीजीय निरूपण।",
    pdfUrl: "/ncert_books/class7/math_ch10.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch10_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch10_Algebraic_Expressions.pdf",
    pdfSize: "0.74 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Anatomy of an Algebraic Expression",
        headingHi: "1. एनसीईआरटी मूल पाठ: बीजीय व्यंजक की शारीरिक रचना (पद, गुणनखंड व गुणांक)",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! Algebra uses letters (variables) and numbers (constants) combined via operators ($+, -, \times, \div$). A common exam pitfall is confusing <strong>Terms</strong> with <strong>Factors</strong>: Terms are added to form expressions, while factors are multiplied to form terms!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Terminology Matrix</div>
            <ul>
              <li><strong>Term (पद):</strong> In $4x^2 - 3xy$, the terms are $4x^2$ and $-3xy$.</li>
              <li><strong>Factors (गुणनखंड):</strong> For the term $-3xy$, the factors are $-3$, $x$, and $y$.</li>
              <li><strong>Numerical Coefficient (संख्यात्मक गुणांक):</strong> The numerical factor in a term. In $-5x^2y$, the numerical coefficient is $\mathbf{-5}$.</li>
              <li><strong>Like Terms (समान पद):</strong> Terms having the exact same algebraic factors. Example: $7xy$ and $-5yx$ are LIKE terms! $7x^2y$ and $7xy^2$ are UNLIKE terms because variable powers differ!</li>
              <li><strong>Golden Addition/Subtraction Rule:</strong> <em>Only LIKE terms can be added or subtracted together!</em></li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय छात्रों! बीजगणित में चर (Variables) और अचर (Constants) मिलकर व्यंजक बनाते हैं। परीक्षा में छात्र <strong>पद (Terms)</strong> और <strong>गुणनखंड (Factors)</strong> में गलती करते हैं: पद आपस में जुड़कर व्यंजक बनाते हैं, जबकि गुणनखंड आपस में गुणा होकर एक पद का निर्माण करते हैं!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शब्दावली एवं नियम संकलन</div>
            <ul>
              <li><strong>पद (Term):</strong> $4x^2 - 3xy$ में दो पद हैं: $4x^2$ और $-3xy$।</li>
              <li><strong>गुणनखंड (Factors):</strong> पद $-3xy$ के गुणनखंड $-3$, $x$ और $y$ हैं।</li>
              <li><strong>संख्यात्मक गुणांक (Numerical Coefficient):</strong> पद का संख्यात्मक मान। $-5x^2y$ में संख्यात्मक गुणांक $\mathbf{-5}$ है।</li>
              <li><strong>समान पद (Like Terms):</strong> जिनके बीजीय गुणनखंड बिल्कुल समान हों। जैसे $7xy$ और $-5yx$ समान पद हैं! परंतु $7x^2y$ और $7xy^2$ असमान पद हैं क्योंकि घातें अलग हैं।</li>
              <li><strong>जोड़-घटाव का स्वर्णिम नियम:</strong> <em>केवल समान पदों को ही आपस में जोड़ा या घटाया जा सकता है!</em></li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Types of Polynomials & Formula Patterns",
        headingHi: "2. बहुपदों के प्रकार एवं व्यंजक का मान ज्ञात करना",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Classification of Expressions</div>
            <ul>
              <li><strong>Monomial (एकपदी):</strong> Expression containing exactly 1 term (e.g., $7x, -3y^2, 100$).</li>
              <li><strong>Binomial (द्विपद):</strong> Expression containing exactly 2 terms (e.g., $x + y, 4a - 5b$).</li>
              <li><strong>Trinomial (त्रिपद):</strong> Expression containing exactly 3 terms (e.g., $a + b + c, x^2 - 5x + 6$).</li>
              <li><strong>Polynomial (बहुपद):</strong> General expression having one or more terms with non-negative integral exponents.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ व्यंजकों का वर्गीकरण</div>
            <ul>
              <li><strong>एकपदी (Monomial):</strong> जिसमें केवल 1 पद हो (जैसे $7x, -3y^2, 100$)।</li>
              <li><strong>द्विपद (Binomial):</strong> जिसमें ठीक 2 पद हों (जैसे $x + y, 4a - 5b$)।</li>
              <li><strong>त्रिपद (Trinomial):</strong> जिसमें ठीक 3 पद हों (जैसे $x^2 - 5x + 6$)।</li>
              <li><strong>बहुपद (Polynomial):</strong> एक या अधिक पदों वाला ऐसा व्यंजक जिसमें चर की घातें अऋणात्मक पूर्णांक (पूर्ण संख्या) हों।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the numerical coefficient of the term -7x^2y in the expression 5 - 7x^2y?",
        qHi: "व्यंजक 5 - 7x^2y में पद -7x^2y का संख्यात्मक गुणांक क्या है?",
        options: ["7", "-7", "x^2y", "5"],
        optionsHi: ["7", "-7", "x^2y", "5"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "The numerical factor in -7x^2y is -7.",
        explanationHi: "-7x^2y में संख्यात्मक गुणनखंड -7 है।"
      },
      {
        id: 2,
        q: "Which of the following pairs contains LIKE terms?",
        qHi: "निम्नलिखित में से किस युग्म में समान पद (Like Terms) हैं?",
        options: ["7x, 7y", "-29x, -29y", "-7x, 5/2 x", "14xy, 42x^2y^2"],
        optionsHi: ["7x, 7y", "-29x, -29y", "-7x, 5/2 x", "14xy, 42x^2y^2"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 10 & State TET",
        explanation: "-7x and (5/2)x have the exact same algebraic factor (x), so they are like terms.",
        explanationHi: "-7x और (5/2)x दोनों में समान चर x है, अतः ये समान पद हैं।"
      },
      {
        id: 3,
        q: "What type of expression is 4p^2q - 4pq^2?",
        qHi: "व्यंजक 4p^2q - 4pq^2 किस प्रकार का व्यंजक है?",
        options: ["Monomial", "Binomial", "Trinomial", "Quadrinomial"],
        optionsHi: ["एकपदी", "द्विपद (Binomial)", "त्रिपद", "चतुष्पद"],
        ans: 1,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "It contains two unlike terms (4p^2q and -4pq^2), so it is a binomial.",
        explanationHi: "इसमें दो असमान पद हैं, अतः यह एक द्विपद (Binomial) है।"
      },
      {
        id: 4,
        q: "Find the value of the expression 2x^2 - x - 2 when x = -1.",
        qHi: "यदि x = -1 है, तो व्यंजक 2x^2 - x - 2 का मान ज्ञात कीजिए।",
        options: ["-1", "0", "1", "3"],
        optionsHi: ["-1", "0", "1", "3"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "2(-1)^2 - (-1) - 2 = 2(1) + 1 - 2 = 2 + 1 - 2 = 1.",
        explanationHi: "2(-1)^2 - (-1) - 2 = 2(1) + 1 - 2 = 1।"
      },
      {
        id: 5,
        q: "Simplify by combining like terms: 21b - 32 + 7b - 20b.",
        qHi: "समान पदों को मिलाकर सरल कीजिए: 21b - 32 + 7b - 20b।",
        options: ["8b - 32", "28b - 32", "8b + 32", "-32b + 8"],
        optionsHi: ["8b - 32", "28b - 32", "8b + 32", "-32b + 8"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 10 Exercise & CTET",
        explanation: "(21b + 7b - 20b) - 32 = (28b - 20b) - 32 = 8b - 32.",
        explanationHi: "(21 + 7 - 20)b - 32 = 8b - 32।"
      },
      {
        id: 6,
        q: "Subtract (a - b) from (a + b).",
        qHi: "(a + b) में से (a - b) को घटाइए।",
        options: ["2a", "2b", "0", "-2b"],
        optionsHi: ["2a", "2b", "0", "-2b"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "(a + b) - (a - b) = a + b - a + b = 2b.",
        explanationHi: "(a + b) - (a - b) = a + b - a + b = 2b।"
      },
      {
        id: 7,
        q: "What should be added to x^2 + xy + y^2 to obtain 2x^2 + 3xy?",
        qHi: "x^2 + xy + y^2 में क्या जोड़ा जाए ताकि 2x^2 + 3xy प्राप्त हो?",
        options: ["x^2 + 2xy - y^2", "x^2 - 2xy + y^2", "x^2 + 2xy + y^2", "-x^2 + 2xy - y^2"],
        optionsHi: ["x^2 + 2xy - y^2", "x^2 - 2xy + y^2", "x^2 + 2xy + y^2", "-x^2 + 2xy - y^2"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 10 Exercise & BPSC",
        explanation: "Required = (2x^2 + 3xy) - (x^2 + xy + y^2) = 2x^2 - x^2 + 3xy - xy - y^2 = x^2 + 2xy - y^2.",
        explanationHi: "(2x^2 + 3xy) - (x^2 + xy + y^2) = x^2 + 2xy - y^2।"
      },
      {
        id: 8,
        q: "What is the value of 5n - 2 when n = -2?",
        qHi: "यदि n = -2 है, तो 5n - 2 का मान क्या होगा?",
        options: ["-8", "-10", "-12", "8"],
        optionsHi: ["-8", "-10", "-12", "8"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "5(-2) - 2 = -10 - 2 = -12.",
        explanationHi: "5(-2) - 2 = -10 - 2 = -12।"
      },
      {
        id: 9,
        q: "How many terms are in the expression 4x^2 - 3xy + 7y - 5?",
        qHi: "व्यंजक 4x^2 - 3xy + 7y - 5 में कुल कितने पद हैं?",
        options: ["2", "3", "4", "5"],
        optionsHi: ["2", "3", "4", "5"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Terms are: 4x^2, -3xy, 7y, and -5 (4 terms).",
        explanationHi: "पद हैं: 4x^2, -3xy, 7y और -5 (कुल 4 पद)।"
      },
      {
        id: 10,
        q: "If a = 2 and b = -2, find the value of a^2 + ab + b^2.",
        qHi: "यदि a = 2 और b = -2 है, तो a^2 + ab + b^2 का मान ज्ञात कीजिए।",
        options: ["0", "4", "8", "12"],
        optionsHi: ["0", "4", "8", "12"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "(2)^2 + (2)(-2) + (-2)^2 = 4 - 4 + 4 = 4.",
        explanationHi: "2^2 + 2(-2) + (-2)^2 = 4 - 4 + 4 = 4।"
      },
      {
        id: 11,
        q: "Subtract -m^2 + 5mn from 4m^2 - 3mn + 8.",
        qHi: "4m^2 - 3mn + 8 में से (-m^2 + 5mn) को घटाइए।",
        options: ["5m^2 - 8mn + 8", "3m^2 + 2mn + 8", "5m^2 + 2mn + 8", "3m^2 - 8mn + 8"],
        optionsHi: ["5m^2 - 8mn + 8", "3m^2 + 2mn + 8", "5m^2 + 2mn + 8", "3m^2 - 8mn + 8"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 10 Exercise",
        explanation: "(4m^2 - 3mn + 8) - (-m^2 + 5mn) = 4m^2 + m^2 - 3mn - 5mn + 8 = 5m^2 - 8mn + 8.",
        explanationHi: "(4m^2 - 3mn + 8) - (-m^2 + 5mn) = 5m^2 - 8mn + 8।"
      },
      {
        id: 12,
        q: "What is the coefficient of x in the term -8xy?",
        qHi: "पद -8xy में x का गुणांक क्या है?",
        options: ["-8", "y", "-8y", "8y"],
        optionsHi: ["-8", "y", "-8y", "8y"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math",
        explanation: "The coefficient of x in -8xy is -8y.",
        explanationHi: "-8xy में x को छोड़कर शेष भाग -8y उसका गुणांक है।"
      },
      {
        id: 13,
        q: "Simplify: (3x - y + 11) + (-y - 11).",
        qHi: "सरल कीजिए: (3x - y + 11) + (-y - 11)।",
        options: ["3x - 2y", "3x + 22", "3x - 2y + 22", "3x"],
        optionsHi: ["3x - 2y", "3x + 22", "3x - 2y + 22", "3x"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "3x - y - y + 11 - 11 = 3x - 2y.",
        explanationHi: "3x - 2y + 0 = 3x - 2y।"
      },
      {
        id: 14,
        q: "If z = 10, find the value of z^3 - 3(z - 10).",
        qHi: "यदि z = 10 है, तो z^3 - 3(z - 10) का मान क्या होगा?",
        options: ["970", "1000", "1030", "0"],
        optionsHi: ["970", "1000", "1030", "0"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 10 & BPSC TRE",
        explanation: "10^3 - 3(10 - 10) = 1000 - 3(0) = 1000.",
        explanationHi: "10^3 - 3(0) = 1000 - 0 = 1000।"
      },
      {
        id: 15,
        q: "What is the perimeter of a regular hexagon of side a?",
        qHi: "भुजा a वाले सम-षट्भुज (Regular Hexagon) का परिमाप क्या होगा?",
        options: ["5a", "6a", "6a^2", "3a"],
        optionsHi: ["5a", "6a", "6a^2", "3a"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "A regular hexagon has 6 equal sides: Perimeter = 6 * a = 6a.",
        explanationHi: "सम-षट्भुज की 6 समान भुजाएँ होती हैं, अतः परिमाप = 6a।"
      },
      {
        id: 16,
        q: "What should be subtracted from 2a + 8b + 10 to get -3a + 7b + 16?",
        qHi: "2a + 8b + 10 में से क्या घटाया जाए ताकि -3a + 7b + 16 प्राप्त हो?",
        options: ["5a + b - 6", "-5a - b + 6", "5a - b + 6", "-a + 15b + 26"],
        optionsHi: ["5a + b - 6", "-5a - b + 6", "5a - b + 6", "-a + 15b + 26"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 10 Exercise & SSC",
        explanation: "(2a + 8b + 10) - (-3a + 7b + 16) = 2a + 3a + 8b - 7b + 10 - 16 = 5a + b - 6.",
        explanationHi: "(2a + 8b + 10) - (-3a + 7b + 16) = 5a + b - 6।"
      },
      {
        id: 17,
        q: "What is the general formula for the nth term of the sequence of odd numbers: 1, 3, 5, 7, 9 ...?",
        qHi: "विषम संख्याओं के अनुक्रम 1, 3, 5, 7, 9 ... के n-वें पद का सामान्य सूत्र क्या है?",
        options: ["2n", "2n - 1", "2n + 1", "n^2"],
        optionsHi: ["2n", "2n - 1", "2n + 1", "n^2"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC Middle School",
        explanation: "For n = 1: 2(1) - 1 = 1; for n = 2: 2(2) - 1 = 3. Formula is 2n - 1.",
        explanationHi: "विषम संख्याओं का n-वाँ पद = 2n - 1।"
      },
      {
        id: 18,
        q: "What is the general formula for the nth term of the sequence of even numbers: 2, 4, 6, 8, 10 ...?",
        qHi: "सम संख्याओं के अनुक्रम 2, 4, 6, 8, 10 ... के n-वें पद का सामान्य सूत्र क्या है?",
        options: ["2n", "2n + 2", "n + 2", "2n - 2"],
        optionsHi: ["2n", "2n + 2", "n + 2", "2n - 2"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "For n = 1: 2; n = 2: 4; n = 3: 6. Formula is 2n.",
        explanationHi: "सम संख्याओं का n-वाँ पद = 2n।"
      },
      {
        id: 19,
        q: "Find the value of 2a - 2b - 4 - 5 + a when a = 0 and b = -1.",
        qHi: "यदि a = 0 और b = -1 है, तो 2a - 2b - 4 - 5 + a का मान क्या होगा?",
        options: ["-7", "-9", "-11", "7"],
        optionsHi: ["-7", "-9", "-11", "7"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 10 & CTET",
        explanation: "Expression simplifies to 3a - 2b - 9. For a = 0, b = -1: 3(0) - 2(-1) - 9 = 2 - 9 = -7.",
        explanationHi: "3a - 2b - 9 में मान रखने पर: 3(0) - 2(-1) - 9 = 2 - 9 = -7।"
      },
      {
        id: 20,
        q: "Which of the following is a monomial?",
        qHi: "निम्नलिखित में से कौन-सा एक एकपदी (Monomial) है?",
        options: ["2x + 1", "7xy", "x^2 - y^2", "a + b + c"],
        optionsHi: ["2x + 1", "7xy", "x^2 - y^2", "a + b + c"],
        ans: 1,
        pyqRef: "State TET & CTET",
        explanation: "7xy has only 1 term, hence it is a monomial.",
        explanationHi: "7xy में केवल एक पद है, अतः यह एकपदी है।"
      },
      {
        id: 21,
        q: "Add the expressions: 7x^2 - 4x + 5 and 9x - 10.",
        qHi: "व्यंजकों 7x^2 - 4x + 5 और 9x - 10 का योग क्या होगा?",
        options: ["7x^2 + 5x - 5", "7x^2 - 5x + 5", "7x^2 + 13x - 15", "16x^2 - 5"],
        optionsHi: ["7x^2 + 5x - 5", "7x^2 - 5x + 5", "7x^2 + 13x - 15", "16x^2 - 5"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "7x^2 + (-4x + 9x) + (5 - 10) = 7x^2 + 5x - 5.",
        explanationHi: "7x^2 + 5x - 5।"
      },
      {
        id: 22,
        q: "What is the tree diagram used for in NCERT Chapter 10?",
        qHi: "एनसीईआरटी अध्याय 10 में ट्री डायग्राम (Tree Diagram) का उपयोग किसके लिए किया गया है?",
        options: ["To represent terms and their factors", "To graph linear equations", "To calculate probability", "To show fractions"],
        optionsHi: ["पदों और उनके गुणनखंडों को दर्शाने के लिए", "रैखिक समीकरण का आलेख बनाने के लिए", "प्रायिकता निकालने के लिए", "भिन्न दर्शाने के लिए"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "A tree diagram is used to represent an expression, breaking it into terms and then each term into its prime/algebraic factors.",
        explanationHi: "ट्री डायग्राम का उपयोग व्यंजक को पदों में और पदों को उनके गुणनखंडों में विभाजित करके दिखाने के लिए किया जाता है।"
      },
      {
        id: 23,
        q: "If the value of 2x^2 + x - a is 5 when x = 0, find the value of a.",
        qHi: "यदि x = 0 पर व्यंजक 2x^2 + x - a का मान 5 है, तो a का मान ज्ञात कीजिए।",
        options: ["5", "-5", "0", "1"],
        optionsHi: ["5", "-5", "0", "1"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 10 Exercise & SSC",
        explanation: "2(0)^2 + 0 - a = 5 => -a = 5 => a = -5.",
        explanationHi: "0 + 0 - a = 5 => -a = 5 => a = -5।"
      },
      {
        id: 24,
        q: "What is the numerical coefficient of y in the expression 4x - 3y?",
        qHi: "व्यंजक 4x - 3y में y का संख्यात्मक गुणांक क्या है?",
        options: ["3", "-3", "4", "-4"],
        optionsHi: ["3", "-3", "4", "-4"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "The numerical coefficient of y is -3.",
        explanationHi: "y का संख्यात्मक गुणांक -3 है।"
      },
      {
        id: 25,
        q: "Find the perimeter of an equilateral triangle of side x.",
        qHi: "भुजा x वाले समबाहु त्रिभुज का परिमाप क्या होगा?",
        options: ["x^2", "3x", "3x^2", "x/3"],
        optionsHi: ["x^2", "3x", "3x^2", "x/3"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Perimeter = x + x + x = 3x.",
        explanationHi: "परिमाप = 3 * x = 3x।"
      },
      {
        id: 26,
        q: "Are the terms 4xy and -5yx like terms?",
        qHi: "क्या पद 4xy और -5yx समान पद हैं?",
        options: ["Yes, because xy = yx", "No, order of variables is different", "Only if x = y", "Only if x and y are positive"],
        optionsHi: ["हाँ, क्योंकि xy = yx होता है", "नहीं, चरों का क्रम अलग है", "केवल जब x = y हो", "केवल जब x और y धनात्मक हों"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Multiplication is commutative (xy = yx). Since the algebraic factors are identical, they are like terms.",
        explanationHi: "गुणन क्रमविनिमेय होता है (xy = yx), अतः दोनों के बीजीय गुणनखंड समान हैं और ये समान पद हैं।"
      },
      {
        id: 27,
        q: "Simplify: p - (p - q) - q - (q - p).",
        qHi: "सरल कीजिए: p - (p - q) - q - (q - p)।",
        options: ["p - q", "q - p", "p + q", "0"],
        optionsHi: ["p - q", "q - p", "p + q", "0"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "p - p + q - q - q + p = (p - p + p) + (q - q - q) = p - q.",
        explanationHi: "p - p + q - q - q + p = p - q।"
      },
      {
        id: 28,
        q: "What is the degree of a constant term (like 7)?",
        qHi: "किसी अचर पद (जैसे 7) की घात (Degree) क्या होती है?",
        options: ["0", "1", "7", "Undefined"],
        optionsHi: ["0", "1", "7", "अपरिभाषित"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "A non-zero constant can be written as 7 * x^0. Hence, its degree is 0.",
        explanationHi: "किसी अचर को 7 * x^0 लिखा जा सकता है, अतः इसकी घात 0 होती है।"
      },
      {
        id: 29,
        q: "Simplify: a^2 + b^2 - a^2 - b^2.",
        qHi: "सरल कीजिए: a^2 + b^2 - a^2 - b^2।",
        options: ["0", "2a^2", "2b^2", "1"],
        optionsHi: ["0", "2a^2", "2b^2", "1"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "(a^2 - a^2) + (b^2 - b^2) = 0 + 0 = 0.",
        explanationHi: "a^2 - a^2 + b^2 - b^2 = 0।"
      },
      {
        id: 30,
        q: "If the length of a rectangle is l and breadth is b, what is the algebraic expression for its area?",
        qHi: "यदि किसी आयत की लंबाई l और चौड़ाई b है, तो उसके क्षेत्रफल का बीजीय व्यंजक क्या होगा?",
        options: ["l + b", "2(l + b)", "l * b (lb)", "l^2 + b^2"],
        optionsHi: ["l + b", "2(l + b)", "l * b (lb)", "l^2 + b^2"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Area of a rectangle = length * breadth = lb.",
        explanationHi: "आयत का क्षेत्रफल = लंबाई * चौड़ाई = lb।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 11: Exponents and Powers (घातांक और घात)
  // ==========================================
  {
    id: "ncert-c7-m11",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 11,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 11: Exponents and Powers (घातांक और घात)",
    titleHi: "अध्याय 11: घातांक और घात (Laws of Exponents & Scientific Notation)",
    readingTime: "24 mins read",
    badge: "Powers & Scientific Form",
    desc: "NCERT Class 7 Chapter 11: Base and exponent, laws of exponents (product rule, quotient rule, power of a power, power of a product), zero exponent (a^0 = 1), standard scientific notation.",
    descHi: "एनसीईआरटी कक्षा 7 घातांक और घात: आधार एवं घातांक, घातांक के नियम (गुणन नियम, भाग नियम, घात की घात, गुणन की घात), शून्य घातांक (a^0 = 1), मानक वैज्ञानिक संकेतन।",
    competitionEdge: "High-yield chapter across CTET Paper 2, BPSC TRE 4.0 Middle (6-8), SSC CGL/CHSL, and State TETs. Power of power traps ((a^m)^n vs a^(m^n)), large number scientific representation.",
    competitionEdgeHi: "CTET पेपर 2, BPSC मध्य विद्यालय और SSC में बार-बार पूछे जाने वाले प्रश्न: घातांक के 6 मूलभूत नियम, a^0 = 1, (-1) की सम व विषम घात, और मानक वैज्ञानिक रूप (k * 10^n जहाँ 1 <= k < 10)।",
    pdfUrl: "/ncert_books/class7/math_ch11.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch11_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch11_Exponents_Powers.pdf",
    pdfSize: "1.28 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Laws of Exponents",
        headingHi: "1. एनसीईआरटी मूल पाठ: घातांकों के 6 मूलभूत नियम",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! In $a^m$, $a$ is called the <strong>Base</strong> and $m$ is called the <strong>Exponent</strong> (or power). Exponents make handling astronomical and subatomic numbers effortless. Mastering the 6 laws of exponents ensures effortless calculation in algebra and number theory!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ The 6 Cardinal Laws of Exponents</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Law Name</th>
                  <th>Formula</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Product of Powers</strong></td>
                  <td>$\mathbf{a^m \times a^n = a^{m+n}}$</td>
                  <td>$2^3 \times 2^4 = 2^{3+4} = 2^7 = 128$</td>
                </tr>
                <tr>
                  <td><strong>2. Quotient of Powers</strong></td>
                  <td>$\mathbf{\frac{a^m}{a^n} = a^{m-n}}$ ($a \ne 0$)</td>
                  <td>$5^7 \div 5^4 = 5^{7-4} = 5^3 = 125$</td>
                </tr>
                <tr>
                  <td><strong>3. Power of a Power</strong></td>
                  <td>$\mathbf{(a^m)^n = a^{mn}}$</td>
                  <td>$(2^3)^2 = 2^{3 \times 2} = 2^6 = 64$</td>
                </tr>
                <tr>
                  <td><strong>4. Power of a Product</strong></td>
                  <td>$\mathbf{a^m \times b^m = (ab)^m}$</td>
                  <td>$2^3 \times 5^3 = (2 \times 5)^3 = 10^3 = 1000$</td>
                </tr>
                <tr>
                  <td><strong>5. Power of a Quotient</strong></td>
                  <td>$\mathbf{\frac{a^m}{b^m} = \left(\frac{a}{b}\right)^m}$</td>
                  <td>$\frac{6^3}{3^3} = \left(\frac{6}{3}\right)^3 = 2^3 = 8$</td>
                </tr>
                <tr>
                  <td><strong>6. Zero Exponent</strong></td>
                  <td>$\mathbf{a^0 = 1}$ ($a \ne 0$)</td>
                  <td>$7^0 = 1, \quad (-15)^0 = 1$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Deadliest Exam Trap: $(a^m)^n$ vs $a^{m^n}$</div>
            <p>Look at this classic CTET/SSC trap:<br/>
              $(2^3)^2 = 2^{3 \times 2} = 2^6 = \mathbf{64}$<br/>
              $2^{3^2} = 2^{(3^2)} = 2^9 = \mathbf{512}$!<br/>
              Brackets matter completely! Do not confuse power-of-a-power with tower-of-powers!
            </p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय छात्रों! $a^m$ में $a$ को <strong>आधार (Base)</strong> और $m$ को <strong>घातांक (Exponent)</strong> कहते हैं। घातांक बहुत बड़ी या बहुत छोटी संख्याओं को संक्षेप में लिखने का सशक्त साधन हैं। घातांकों के 6 नियम याद रखने से परीक्षा में बड़ी-बड़ी गणनाएँ बिना गुणा किए 5 सेकंड में हल हो जाती हैं!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ घातांकों के 6 अनिवार्य नियम</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>नियम का नाम</th>
                  <th>सूत्र (Formula)</th>
                  <th>उदाहरण (Example)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. गुणन नियम</strong></td>
                  <td>$\\mathbf{a^m \\times a^n = a^{m+n}}$</td>
                  <td>$2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$</td>
                </tr>
                <tr>
                  <td><strong>2. भाग नियम</strong></td>
                  <td>$\\mathbf{\\frac{a^m}{a^n} = a^{m-n}}$ ($a \\ne 0$)</td>
                  <td>$5^7 \\div 5^4 = 5^{7-4} = 5^3 = 125$</td>
                </tr>
                <tr>
                  <td><strong>3. घात की घात</strong></td>
                  <td>$\\mathbf{(a^m)^n = a^{mn}}$</td>
                  <td>$(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$</td>
                </tr>
                <tr>
                  <td><strong>4. गुणनफल की घात</strong></td>
                  <td>$\\mathbf{a^m \\times b^m = (ab)^m}$</td>
                  <td>$2^3 \\times 5^3 = (2 \\times 5)^3 = 10^3 = 1000$</td>
                </tr>
                <tr>
                  <td><strong>5. भागफल की घात</strong></td>
                  <td>$\\mathbf{\\frac{a^m}{b^m} = \\left(\\frac{a}{b}\\right)^m}$</td>
                  <td>$\\frac{6^3}{3^3} = \\left(\\frac{6}{3}\\right)^3 = 2^3 = 8$</td>
                </tr>
                <tr>
                  <td><strong>6. शून्य घातांक</strong></td>
                  <td>$\\mathbf{a^0 = 1}$ ($a \\ne 0$)</td>
                  <td>$7^0 = 1, \\quad (-15)^0 = 1$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ सबसे खतरनाक परीक्षा जाल: $(a^m)^n$ बनाम $a^{m^n}$</div>
            <p>CTET और BPSC का पसंदीदा प्रश्न:<br/>
              $(2^3)^2 = 2^{3 \\times 2} = 2^6 = \\mathbf{64}$<br/>
              $2^{3^2} = 2^9 = \\mathbf{512}$!<br/>
              कोष्ठक का अंतर 64 और 512 का अंतर बना देता है!
            </p>
          </div>
        `
      },
      {
        heading: "2. Standard Scientific Notation for Large Numbers",
        headingHi: "2. बड़ी संख्याओं का मानक वैज्ञानिक संकेतन",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Scientific Notation Standard</div>
            <p>Any number can be expressed as a decimal between $1.0$ and $10.0$ multiplied by a power of $10$:</p>
            <p>$$\mathbf{k \times 10^n \quad \text{where} \quad 1.0 \le k < 10.0 \quad \text{and} \quad n \in \mathbb{Z}}$$</p>
            <ul>
              <li><strong>Distance of Sun from Earth:</strong> $149,600,000,000 \text{ m} = \mathbf{1.496 \times 10^{11} \text{ m}}$.</li>
              <li><strong>Speed of Light:</strong> $300,000,000 \text{ m/s} = \mathbf{3.0 \times 10^8 \text{ m/s}}$.</li>
              <li><strong>Population of India (approx):</strong> $1,400,000,000 = \mathbf{1.4 \times 10^9}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ मानक वैज्ञानिक संकेतन (Scientific Notation)</div>
            <p>किसी भी संख्या को $1.0$ और $10.0$ के बीच की दशमलव संख्या और $10$ की घात के गुणनफल के रूप में लिखा जाता है:</p>
            <p>$$\\mathbf{k \\times 10^n \\quad \\text{जहाँ} \\quad 1.0 \\le k < 10.0 \\quad \\text{एवं} \\quad n \\in \\mathbb{Z}}$$</p>
            <ul>
              <li><strong>पृथ्वी से सूर्य की दूरी:</strong> $149,600,000,000 \\text{ मीटर} = \\mathbf{1.496 \\times 10^{11} \\text{ मीटर}}$।</li>
              <li><strong>प्रकाश की चाल:</strong> $300,000,000 \\text{ मी/से} = \\mathbf{3.0 \\times 10^8 \\text{ मी/से}}$।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the value of 2^0 + 3^0 + 4^0?",
        qHi: "2^0 + 3^0 + 4^0 का मान क्या होगा?",
        options: ["0", "1", "3", "9"],
        optionsHi: ["0", "1", "3", "9"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "Any non-zero number to power 0 is 1. 2^0 + 3^0 + 4^0 = 1 + 1 + 1 = 3.",
        explanationHi: "किसी भी शून्येतर संख्या की घात 0 का मान 1 होता है: 1 + 1 + 1 = 3।"
      },
      {
        id: 2,
        q: "What is the value of (2^0 * 3^0 * 4^0)?",
        qHi: "(2^0 * 3^0 * 4^0) का मान क्या होगा?",
        options: ["0", "1", "3", "24"],
        optionsHi: ["0", "1", "3", "24"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "1 * 1 * 1 = 1.",
        explanationHi: "1 * 1 * 1 = 1।"
      },
      {
        id: 3,
        q: "Simplify: (2^3)^2.",
        qHi: "सरल कीजिए: (2^3)^2।",
        options: ["32", "64", "128", "512"],
        optionsHi: ["32", "64", "128", "512"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "(2^3)^2 = 2^(3 * 2) = 2^6 = 64.",
        explanationHi: "(2^3)^2 = 2^(3 * 2) = 2^6 = 64।"
      },
      {
        id: 4,
        q: "What is 2^(3^2) equal to?",
        qHi: "2^(3^2) का मान क्या होगा?",
        options: ["64", "128", "256", "512"],
        optionsHi: ["64", "128", "256", "512"],
        ans: 3,
        pyqRef: "SSC CGL / CHSL & BPSC Middle School",
        explanation: "3^2 = 9. So 2^9 = 512.",
        explanationHi: "3^2 = 9। अतः 2^9 = 512।"
      },
      {
        id: 5,
        q: "Express 343 as a power of 7.",
        qHi: "343 को 7 की घात के रूप में व्यक्त कीजिए।",
        options: ["7^2", "7^3", "7^4", "7^5"],
        optionsHi: ["7^2", "7^3", "7^4", "7^5"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 11 & State TET",
        explanation: "7 * 7 * 7 = 343 = 7^3.",
        explanationHi: "7 * 7 * 7 = 343 = 7^3।"
      },
      {
        id: 6,
        q: "Simplify: (3^7 / 3^4) * 3^3.",
        qHi: "सरल कीजिए: (3^7 / 3^4) * 3^3।",
        options: ["3^5", "3^6", "3^7", "3^8"],
        optionsHi: ["3^5", "3^6", "3^7", "3^8"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 11 Exercise",
        explanation: "3^(7 - 4) * 3^3 = 3^3 * 3^3 = 3^(3 + 3) = 3^6.",
        explanationHi: "3^(7 - 4) * 3^3 = 3^3 * 3^3 = 3^6।"
      },
      {
        id: 7,
        q: "Express 59,000,000 in standard scientific notation.",
        qHi: "59,000,000 को मानक वैज्ञानिक संकेतन में व्यक्त कीजिए।",
        options: ["5.9 * 10^6", "5.9 * 10^7", "59 * 10^6", "0.59 * 10^8"],
        optionsHi: ["5.9 * 10^6", "5.9 * 10^7", "59 * 10^6", "0.59 * 10^8"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 11 & CTET",
        explanation: "Move decimal point 7 places to the left: 5.9 * 10^7.",
        explanationHi: "दशमलव 7 स्थान बाईं ओर खिसकाने पर: 5.9 * 10^7।"
      },
      {
        id: 8,
        q: "Which is greater: 2^3 or 3^2?",
        qHi: "2^3 और 3^2 में से कौन बड़ा है?",
        options: ["2^3", "3^2", "Both are equal", "Cannot be determined"],
        optionsHi: ["2^3", "3^2", "दोनों बराबर हैं", "निर्धारित नहीं किया जा सकता"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "2^3 = 8, while 3^2 = 9. Since 9 > 8, 3^2 is greater.",
        explanationHi: "2^3 = 8 और 3^2 = 9। चूँकि 9 > 8, अतः 3^2 बड़ा है।"
      },
      {
        id: 9,
        q: "Simplify: (-4)^3.",
        qHi: "(-4)^3 का मान क्या है?",
        options: ["64", "-64", "12", "-12"],
        optionsHi: ["64", "-64", "12", "-12"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "(-4) * (-4) * (-4) = 16 * (-4) = -64.",
        explanationHi: "(-4) * (-4) * (-4) = -64।"
      },
      {
        id: 10,
        q: "Simplify: (-3)^2 * (-5)^2.",
        qHi: "सरल कीजिए: (-3)^2 * (-5)^2।",
        options: ["-225", "225", "-75", "75"],
        optionsHi: ["-225", "225", "-75", "75"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "9 * 25 = 225. (Or [(-3) * (-5)]^2 = 15^2 = 225).",
        explanationHi: "9 * 25 = 225।"
      },
      {
        id: 11,
        q: "Simplify: (2^5)^2 * 7^3 / (8^3 * 7).",
        qHi: "सरल कीजिए: (2^5)^2 * 7^3 / (8^3 * 7)।",
        options: ["98", "49", "196", "14"],
        optionsHi: ["98", "49", "196", "14"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 11 Exercise & SSC",
        explanation: "(2^10 * 7^3) / ((2^3)^3 * 7) = (2^10 * 7^3) / (2^9 * 7) = 2^(10-9) * 7^(3-1) = 2^1 * 7^2 = 2 * 49 = 98.",
        explanationHi: "2^(10-9) * 7^(3-1) = 2 * 49 = 98।"
      },
      {
        id: 12,
        q: "What is (-1)^even_number equal to?",
        qHi: "(-1)^सम_संख्या का मान किसके बराबर होता है?",
        options: ["1", "-1", "0", "Even number"],
        optionsHi: ["1", "-1", "0", "सम संख्या"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Negative one raised to any even integer is always +1.",
        explanationHi: "(-1) की सम घात सदैव धनात्मक 1 होती है।"
      },
      {
        id: 13,
        q: "What is (-1)^odd_number equal to?",
        qHi: "(-1)^विषम_संख्या का मान किसके बराबर होता है?",
        options: ["1", "-1", "0", "Odd number"],
        optionsHi: ["1", "-1", "0", "विषम संख्या"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Negative one raised to any odd integer is always -1.",
        explanationHi: "(-1) की विषम घात सदैव -1 होती है।"
      },
      {
        id: 14,
        q: "Find the value of x if 2^(x - 3) = 1.",
        qHi: "यदि 2^(x - 3) = 1 है, तो x का मान ज्ञात कीजिए।",
        options: ["0", "1", "2", "3"],
        optionsHi: ["0", "1", "2", "3"],
        ans: 3,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "Since 2^0 = 1, x - 3 = 0 => x = 3.",
        explanationHi: "चूँकि 2^0 = 1 होता है, अतः x - 3 = 0 => x = 3।"
      },
      {
        id: 15,
        q: "Write 108 * 192 as prime factors in exponential form.",
        qHi: "108 * 192 को अभाज्य गुणनखंडों के घातांकी रूप में व्यक्त कीजिए।",
        options: ["2^8 * 3^4", "2^7 * 3^4", "2^8 * 3^5", "2^6 * 3^5"],
        optionsHi: ["2^8 * 3^4", "2^7 * 3^4", "2^8 * 3^5", "2^6 * 3^5"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 11 Exercise",
        explanation: "108 = 2^2 * 3^3. 192 = 2^6 * 3^1. Total = 2^(2+6) * 3^(3+1) = 2^8 * 3^4.",
        explanationHi: "108 = 2^2 * 3^3, 192 = 2^6 * 3^1। कुल = 2^8 * 3^4।"
      },
      {
        id: 16,
        q: "Simplify: (2^0 + 3^0) * 4^0.",
        qHi: "सरल कीजिए: (2^0 + 3^0) * 4^0।",
        options: ["1", "2", "3", "0"],
        optionsHi: ["1", "2", "3", "0"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "(1 + 1) * 1 = 2 * 1 = 2.",
        explanationHi: "(1 + 1) * 1 = 2 * 1 = 2।"
      },
      {
        id: 17,
        q: "Express 0.00007 in scientific notation (expanded knowledge).",
        qHi: "0.00007 को वैज्ञानिक संकेतन में क्या लिखा जाएगा?",
        options: ["7 * 10^-5", "7 * 10^-4", "0.7 * 10^-4", "70 * 10^-6"],
        optionsHi: ["7 * 10^-5", "7 * 10^-4", "0.7 * 10^-4", "70 * 10^-6"],
        ans: 0,
        pyqRef: "CTET Paper 2 & SSC CHSL",
        explanation: "Move decimal point 5 places to the right: 7.0 * 10^-5.",
        explanationHi: "दशमलव 5 स्थान दाईं ओर खिसकाने पर: 7 * 10^-5।"
      },
      {
        id: 18,
        q: "Simplify: 10^22 / 10^20.",
        qHi: "10^22 / 10^20 का मान क्या है?",
        options: ["10", "20", "100", "1000"],
        optionsHi: ["10", "20", "100", "1000"],
        ans: 2,
        pyqRef: "Railway NTPC & State TET",
        explanation: "10^(22 - 20) = 10^2 = 100.",
        explanationHi: "10^(22 - 20) = 10^2 = 100।"
      },
      {
        id: 19,
        q: "What is 4^3 * 2^2 equal to?",
        qHi: "4^3 * 2^2 किसके बराबर है?",
        options: ["2^7", "2^8", "2^9", "2^10"],
        optionsHi: ["2^7", "2^8", "2^9", "2^10"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "4^3 = (2^2)^3 = 2^6. 2^6 * 2^2 = 2^8.",
        explanationHi: "4^3 = (2^2)^3 = 2^6। 2^6 * 2^2 = 2^(6+2) = 2^8।"
      },
      {
        id: 20,
        q: "What is (a * b)^m equal to according to exponent laws?",
        qHi: "घातांक नियम के अनुसार (a * b)^m किसके बराबर है?",
        options: ["a^m + b^m", "a^m * b^m", "a^(mb)", "ab^m"],
        optionsHi: ["a^m + b^m", "a^m * b^m", "a^(mb)", "ab^m"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "(ab)^m = a^m * b^m (Power of a product law).",
        explanationHi: "(ab)^m = a^m * b^m।"
      },
      {
        id: 21,
        q: "Evaluate: (3^0 - 2^0) * (3^0 + 2^0).",
        qHi: "मान ज्ञात कीजिए: (3^0 - 2^0) * (3^0 + 2^0)।",
        options: ["0", "1", "2", "3"],
        optionsHi: ["0", "1", "2", "3"],
        ans: 0,
        pyqRef: "State TET & Railway",
        explanation: "(1 - 1) * (1 + 1) = 0 * 2 = 0.",
        explanationHi: "(1 - 1) * (1 + 1) = 0 * 2 = 0।"
      },
      {
        id: 22,
        q: "If 3^x = 81, what is the value of x?",
        qHi: "यदि 3^x = 81 है, तो x का मान क्या होगा?",
        options: ["2", "3", "4", "5"],
        optionsHi: ["2", "3", "4", "5"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "81 = 3^4. Since bases are equal, x = 4.",
        explanationHi: "81 = 3 * 3 * 3 * 3 = 3^4। अतः x = 4।"
      },
      {
        id: 23,
        q: "Express 729 as a power of 3.",
        qHi: "729 को 3 की घात के रूप में व्यक्त कीजिए।",
        options: ["3^5", "3^6", "3^7", "3^8"],
        optionsHi: ["3^5", "3^6", "3^7", "3^8"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 11",
        explanation: "3^6 = 729.",
        explanationHi: "3^6 = 729।"
      },
      {
        id: 24,
        q: "Simplify: (a^5 / a^3) * a^8.",
        qHi: "सरल कीजिए: (a^5 / a^3) * a^8।",
        options: ["a^9", "a^10", "a^11", "a^12"],
        optionsHi: ["a^9", "a^10", "a^11", "a^12"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "a^(5-3) * a^8 = a^2 * a^8 = a^(2+8) = a^10.",
        explanationHi: "a^(5-3) * a^8 = a^2 * a^8 = a^10।"
      },
      {
        id: 25,
        q: "Which is greater: 5^2 or 2^5?",
        qHi: "5^2 और 2^5 में से कौन बड़ा है?",
        options: ["5^2", "2^5", "Both are equal", "Cannot be determined"],
        optionsHi: ["5^2", "2^5", "दोनों बराबर हैं", "निर्धारित नहीं किया जा सकता"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "5^2 = 25, whereas 2^5 = 32. Since 32 > 25, 2^5 is greater.",
        explanationHi: "5^2 = 25, परंतु 2^5 = 32। अतः 2^5 बड़ा है।"
      },
      {
        id: 26,
        q: "Express 3.1865 * 10^5 in usual decimal form.",
        qHi: "3.1865 * 10^5 को सामान्य संख्या रूप में लिखिए।",
        options: ["31865", "318650", "3186500", "3186.5"],
        optionsHi: ["31865", "318650", "3186500", "3186.5"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 11 Exercise",
        explanation: "Shift decimal point 5 places to the right: 318,650.",
        explanationHi: "दशमलव 5 स्थान दाईं ओर खिसकाने पर: 318,650।"
      },
      {
        id: 27,
        q: "Simplify: (2 * 3^4 * 2^5) / (9 * 4^2).",
        qHi: "सरल कीजिए: (2 * 3^4 * 2^5) / (9 * 4^2)।",
        options: ["18", "36", "72", "144"],
        optionsHi: ["18", "36", "72", "144"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "(2^6 * 3^4) / (3^2 * (2^2)^2) = (2^6 * 3^4) / (3^2 * 2^4) = 2^(6-4) * 3^(4-2) = 2^2 * 3^2 = 4 * 9 = 36.",
        explanationHi: "2^(6-4) * 3^(4-2) = 4 * 9 = 36।"
      },
      {
        id: 28,
        q: "What is the base in the expression (-5)^4?",
        qHi: "व्यंजक (-5)^4 में आधार (Base) क्या है?",
        options: ["5", "-5", "4", "-4"],
        optionsHi: ["5", "-5", "4", "-4"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "The base inside the brackets is -5.",
        explanationHi: "कोष्ठक के अंदर आधार -5 है।"
      },
      {
        id: 29,
        q: "What is (-5)^4 equal to?",
        qHi: "(-5)^4 का मान क्या होगा?",
        options: ["-625", "625", "-20", "20"],
        optionsHi: ["-625", "625", "-20", "20"],
        ans: 1,
        pyqRef: "State TET & Railway",
        explanation: "Even power of a negative number is positive: (-5) * (-5) * (-5) * (-5) = 625.",
        explanationHi: "ऋणात्मक संख्या की सम घात धनात्मक होती है: 625।"
      },
      {
        id: 30,
        q: "Evaluate: (10^0 + 20^0 + 30^0) / 3.",
        qHi: "मान निकालिए: (10^0 + 20^0 + 30^0) / 3।",
        options: ["0", "1", "2", "3"],
        optionsHi: ["0", "1", "2", "3"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "(1 + 1 + 1) / 3 = 3 / 3 = 1.",
        explanationHi: "(1 + 1 + 1) / 3 = 3 / 3 = 1।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 12: Symmetry (सममिति)
  // ==========================================
  {
    id: "ncert-c7-m12",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 12,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 12: Symmetry (सममिति)",
    titleHi: "अध्याय 12: सममिति (Line Symmetry & Rotational Symmetry)",
    readingTime: "20 mins read",
    badge: "Geometric Transformation",
    desc: "NCERT Class 7 Chapter 12: Lines of symmetry for regular polygons, rotational symmetry, center and angle of rotation, order of rotation, alphabet symmetry (letters with both line and rotational symmetry).",
    descHi: "एनसीईआरटी कक्षा 7 सममिति: सम बहुभुजों की सममिति रेखाएँ, घूर्णन सममिति (Rotational Symmetry), घूर्णन का केंद्र व कोण, घूर्णन का क्रम, वर्णमाला के अक्षरों की सममिति (H, I, O, X, Z, S, N)।",
    competitionEdge: "Guaranteed 1-2 questions in CTET Paper 2, BPSC TRE Middle School, and State TETs. Letter symmetry questions (e.g. letters having rotational symmetry but NO line symmetry) are famous teacher-exam questions.",
    competitionEdgeHi: "CTET पेपर 2 और BPSC शिक्षक भर्ती में हर साल आने वाला प्रश्न: किस अक्षर में घूर्णन सममिति है परंतु रैखिक सममिति नहीं है (Z, S, N), और सम बहुभुज की सममिति रेखाओं की संख्या।",
    pdfUrl: "/ncert_books/class7/math_ch12.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch12_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch12_Symmetry.pdf",
    pdfSize: "3.43 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Line Symmetry & Regular Polygons",
        headingHi: "1. एनसीईआरटी मूल पाठ: रैखिक सममिति एवं सम बहुभुज",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              A figure has <strong>Line Symmetry</strong> if there is a line about which the figure may be folded so that the two parts fit exactly on top of each other. In Class 7, NCERT links line symmetry to <strong>Rotational Symmetry</strong>—turning a shape about a fixed center so that it looks exactly the same as in the original position before a full $360^\circ$ turn!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Regular Polygon Symmetry Invariant</div>
            <p><strong>Golden Invariant:</strong> Any regular polygon of $n$ sides has exactly $\mathbf{n}$ lines of symmetry and rotational symmetry of order $\mathbf{n}$!</p>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Regular Polygon</th>
                  <th>Sides ($n$)</th>
                  <th>Lines of Symmetry</th>
                  <th>Order of Rotational Symmetry</th>
                  <th>Angle of Rotation</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Equilateral Triangle</td><td>3</td><td>3</td><td>3</td><td>$120^\circ$ ($360^\circ / 3$)</td></tr>
                <tr><td>Square</td><td>4</td><td>4</td><td>4</td><td>$90^\circ$ ($360^\circ / 4$)</td></tr>
                <tr><td>Regular Pentagon</td><td>5</td><td>5</td><td>5</td><td>$72^\circ$ ($360^\circ / 5$)</td></tr>
                <tr><td>Regular Hexagon</td><td>6</td><td>6</td><td>6</td><td>$60^\circ$ ($360^\circ / 6$)</td></tr>
                <tr><td>Circle</td><td>$\infty$</td><td>$\infty$</td><td>$\infty$</td><td>Any angle</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय शिक्षक अभ्यर्थियों! जब किसी आकृति को किसी रेखा के अनुदिश मोड़ने पर दोनों भाग एक-दूसरे को पूरी तरह ढक लें, तो उसे <strong>रैखिक सममिति (Line Symmetry)</strong> कहते हैं। कक्षा 7 में इसके साथ <strong>घूर्णन सममिति (Rotational Symmetry)</strong> जुड़ती है—जब किसी आकृति को उसके केंद्र के परितः घुमाने पर वह $360^\circ$ का पूरा चक्कर लगाने से पहले भी मूल स्थिति जैसी ही दिखे!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ सम बहुभुजों का स्वर्णिम सममिति नियम</div>
            <p><strong>स्वर्णिम नियम:</strong> $n$ भुजाओं वाले किसी भी सम बहुभुज में ठीक $\mathbf{n}$ सममिति रेखाएँ और घूर्णन सममिति का क्रम $\mathbf{n}$ होता है!</p>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>सम बहुभुज</th>
                  <th>भुजाएँ ($n$)</th>
                  <th>सममिति रेखाएँ</th>
                  <th>घूर्णन सममिति का क्रम</th>
                  <th>घूर्णन कोण</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>समबाहु त्रिभुज</td><td>3</td><td>3</td><td>3</td><td>$120^\circ$ ($360^\circ / 3$)</td></tr>
                <tr><td>वर्ग (Square)</td><td>4</td><td>4</td><td>4</td><td>$90^\circ$ ($360^\circ / 4$)</td></tr>
                <tr><td>सम-पंचभुज</td><td>5</td><td>5</td><td>5</td><td>$72^\circ$ ($360^\circ / 5$)</td></tr>
                <tr><td>सम-षट्भुज</td><td>6</td><td>6</td><td>6</td><td>$60^\circ$ ($360^\circ / 6$)</td></tr>
                <tr><td>वृत्त (Circle)</td><td>$\infty$</td><td>$\infty$</td><td>$\infty$</td><td>कोई भी कोण</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Alphabet Symmetry Classification Matrix (Exam Special)",
        headingHi: "2. अंग्रेजी वर्णमाला के अक्षरों की सममिति (परीक्षा स्पेशल)",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Alphabet Letters Symmetry Matrix</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Letters</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Both Line & Rotational Symmetry</strong></td>
                  <td><strong>H, I, O, X</strong></td>
                  <td>Have 2 lines of symmetry and rotational symmetry of order 2 (O has infinite).</td>
                </tr>
                <tr>
                  <td><strong>Rotational Symmetry of Order 2, but NO Line Symmetry!</strong></td>
                  <td><strong>Z, S, N</strong></td>
                  <td>Top CTET Exam Favorite: Look the same after $180^\circ$ rotation, but cannot be folded symmetrically!</td>
                </tr>
                <tr>
                  <td><strong>Vertical Line Symmetry Only</strong></td>
                  <td><strong>A, M, T, U, V, W, Y</strong></td>
                  <td>Can be folded along vertical axis; order of rotation is 1.</td>
                </tr>
                <tr>
                  <td><strong>Horizontal Line Symmetry Only</strong></td>
                  <td><strong>B, C, D, E, K</strong></td>
                  <td>Can be folded along horizontal axis; order of rotation is 1.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ वर्णमाला के अक्षरों का सममिति वर्गीकरण</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>श्रेणी</th>
                  <th>अक्षर</th>
                  <th>विवरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>रैखिक एवं घूर्णन दोनों सममिति</strong></td>
                  <td><strong>H, I, O, X</strong></td>
                  <td>2 सममिति रेखाएँ और घूर्णन क्रम 2 (O में अनंत)।</td>
                </tr>
                <tr>
                  <td><strong>घूर्णन सममिति (क्रम 2) है, परंतु कोई रैखिक सममिति नहीं!</strong></td>
                  <td><strong>Z, S, N</strong></td>
                  <td>CTET परीक्षा का पसंदीदा प्रश्न: $180^\circ$ घुमाने पर समान दिखते हैं, परंतु मोड़ने पर नहीं ढकते!</td>
                </tr>
                <tr>
                  <td><strong>केवल ऊर्ध्वाधर रैखिक सममिति</strong></td>
                  <td><strong>A, M, T, U, V, W, Y</strong></td>
                  <td>ऊर्ध्वाधर अक्ष पर मोड़े जा सकते हैं।</td>
                </tr>
                <tr>
                  <td><strong>केवल क्षैतिज रैखिक सममिति</strong></td>
                  <td><strong>B, C, D, E, K</strong></td>
                  <td>क्षैतिज अक्ष पर मोड़े जा सकते हैं।</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How many lines of symmetry does a regular hexagon have?",
        qHi: "एक सम-षट्भुज (Regular Hexagon) में कुल कितनी सममिति रेखाएँ होती हैं?",
        options: ["3", "4", "6", "12"],
        optionsHi: ["3", "4", "6", "12"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "A regular polygon of n sides has exactly n lines of symmetry. For a regular hexagon, n = 6.",
        explanationHi: "किसी भी n-भुजाओं वाले सम बहुभुज में n सममिति रेखाएँ होती हैं। षट्भुज के लिए 6 होती हैं।"
      },
      {
        id: 2,
        q: "Which of the following English letters has rotational symmetry of order 2 but NO line of symmetry?",
        qHi: "निम्नलिखित में से किस अंग्रेजी अक्षर में क्रम 2 की घूर्णन सममिति है परंतु कोई सममिति रेखा नहीं है?",
        options: ["H", "O", "Z", "A"],
        optionsHi: ["H", "O", "Z", "A"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math & UPTET",
        explanation: "Letter Z has rotational symmetry of order 2 (looks identical after 180° turn), but has no line of symmetry.",
        explanationHi: "अक्षर Z को 180° घुमाने पर वह समान दिखता है (घूर्णन क्रम 2), परंतु इसकी कोई सममिति रेखा नहीं होती।"
      },
      {
        id: 3,
        q: "What is the angle of rotation for an equilateral triangle?",
        qHi: "एक समबाहु त्रिभुज के घूर्णन का कोण (Angle of Rotation) क्या होता है?",
        options: ["60°", "90°", "120°", "180°"],
        optionsHi: ["60°", "90°", "120°", "180°"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 12 & State TET",
        explanation: "Angle of rotation = 360° / 3 = 120°.",
        explanationHi: "घूर्णन कोण = 360° / 3 = 120°।"
      },
      {
        id: 4,
        q: "What is the order of rotational symmetry of a square?",
        qHi: "एक वर्ग की घूर्णन सममिति का क्रम (Order of Rotational Symmetry) क्या है?",
        options: ["2", "3", "4", "8"],
        optionsHi: ["2", "3", "4", "8"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "A square looks identical at 90°, 180°, 270°, and 360°. Hence, order of rotational symmetry is 4.",
        explanationHi: "वर्ग को 90°, 180°, 270° और 360° पर घुमाने पर समान दिखता है। अतः घूर्णन क्रम 4 है।"
      },
      {
        id: 5,
        q: "How many lines of symmetry does a circle have?",
        qHi: "एक वृत्त में कुल कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "4", "Infinitely many"],
        optionsHi: ["1", "2", "4", "अनंत (Infinitely Many)"],
        ans: 3,
        pyqRef: "State TET & Railway Group D",
        explanation: "Any diameter of a circle is a line of symmetry. Since a circle has infinitely many diameters, it has infinitely many lines of symmetry.",
        explanationHi: "वृत्त का प्रत्येक व्यास उसकी सममिति रेखा होता है। वृत्त में अनंत व्यास होते हैं, अतः अनंत सममिति रेखाएँ होती हैं।"
      },
      {
        id: 6,
        q: "Which letter has BOTH horizontal and vertical lines of symmetry?",
        qHi: "किस अक्षर में क्षैतिज और ऊर्ध्वाधर दोनों सममिति रेखाएँ होती हैं?",
        options: ["A", "B", "H", "M"],
        optionsHi: ["A", "B", "H", "M"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "Letter H has both a vertical and a horizontal line of symmetry.",
        explanationHi: "अक्षर H में ऊर्ध्वाधर और क्षैतिज दोनों सममिति रेखाएँ होती हैं।"
      },
      {
        id: 7,
        q: "What is the order of rotational symmetry of a circle?",
        qHi: "एक वृत्त की घूर्णन सममिति का क्रम क्या होता है?",
        options: ["1", "4", "360", "Infinite"],
        optionsHi: ["1", "4", "360", "अनंत (Infinite)"],
        ans: 3,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "A circle looks identical when rotated by ANY angle about its center. Its order of rotational symmetry is infinite.",
        explanationHi: "वृत्त को केंद्र के परितः किसी भी कोण पर घुमाने पर वह समान दिखता है। अतः इसका घूर्णन क्रम अनंत है।"
      },
      {
        id: 8,
        q: "How many lines of symmetry does an isosceles triangle have?",
        qHi: "एक समद्विबाहु त्रिभुज (Isosceles Triangle) में कितनी सममिति रेखाएँ होती हैं?",
        options: ["0", "1", "2", "3"],
        optionsHi: ["0", "1", "2", "3"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 12 & State TET",
        explanation: "An isosceles triangle with two equal sides has exactly 1 line of symmetry (the altitude to the base).",
        explanationHi: "समद्विबाहु त्रिभुज में ठीक 1 सममिति रेखा होती है।"
      },
      {
        id: 9,
        q: "How many lines of symmetry does a scalene triangle have?",
        qHi: "एक विषमबाहु त्रिभुज (Scalene Triangle) में कितनी सममिति रेखाएँ होती हैं?",
        options: ["0", "1", "2", "3"],
        optionsHi: ["0", "1", "2", "3"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "A scalene triangle has all sides unequal and has 0 lines of symmetry.",
        explanationHi: "विषमबाहु त्रिभुज की तीनों भुजाएँ असमान होती हैं, अतः इसमें 0 सममिति रेखा होती है।"
      },
      {
        id: 10,
        q: "What is the order of rotational symmetry of a rectangle?",
        qHi: "एक आयत की घूर्णन सममिति का क्रम क्या है?",
        options: ["1", "2", "4", "0"],
        optionsHi: ["1", "2", "4", "0"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "A rectangle matches its original shape after 180° and 360° rotations. Hence, order of rotational symmetry is 2.",
        explanationHi: "आयत 180° और 360° के घूर्णन पर मूल स्थिति जैसा दिखता है। अतः घूर्णन क्रम 2 है।"
      },
      {
        id: 11,
        q: "How many lines of symmetry does a rectangle have?",
        qHi: "एक आयत में कुल कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "4", "0"],
        optionsHi: ["1", "2", "4", "0"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 12 & CTET",
        explanation: "A rectangle has 2 lines of symmetry (joining the midpoints of opposite sides). Its diagonals are NOT lines of symmetry!",
        explanationHi: "आयत में 2 सममिति रेखाएँ होती हैं (सम्मुख भुजाओं के मध्य बिंदुओं को मिलाने वाली)। विकर्ण सममिति रेखाएँ नहीं होते!"
      },
      {
        id: 12,
        q: "How many lines of symmetry does a rhombus have?",
        qHi: "एक समचतुर्भुज (Rhombus) में कुल कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "4", "0"],
        optionsHi: ["1", "2", "4", "0"],
        ans: 1,
        pyqRef: "State TET & Railway NTPC",
        explanation: "The two diagonals of a rhombus are its 2 lines of symmetry.",
        explanationHi: "समचतुर्भुज के दोनों विकर्ण उसकी 2 सममिति रेखाएँ होते हैं।"
      },
      {
        id: 13,
        q: "Which of the following letters has only vertical line symmetry?",
        qHi: "निम्नलिखित में से किस अक्षर में केवल ऊर्ध्वाधर सममिति रेखा है?",
        options: ["B", "C", "M", "E"],
        optionsHi: ["B", "C", "M", "E"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Letter M has a vertical line of symmetry down its middle.",
        explanationHi: "अक्षर M में केवल ऊर्ध्वाधर सममिति रेखा होती है।"
      },
      {
        id: 14,
        q: "Which of the following letters has only horizontal line symmetry?",
        qHi: "निम्नलिखित में से किस अक्षर में केवल क्षैतिज सममिति रेखा है?",
        options: ["A", "T", "E", "V"],
        optionsHi: ["A", "T", "E", "V"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Letter E has a horizontal line of symmetry.",
        explanationHi: "अक्षर E में केवल क्षैतिज सममिति रेखा होती है।"
      },
      {
        id: 15,
        q: "Can a figure have rotational symmetry of order more than 1, with angle of rotation 45°?",
        qHi: "क्या किसी आकृति की घूर्णन सममिति का कोण 45° हो सकता है?",
        options: ["Yes, order is 8", "No, 45 is not allowed", "Only for triangles", "Only for pentagons"],
        optionsHi: ["हाँ, घूर्णन क्रम 8 होगा", "नहीं, 45° संभव नहीं है", "केवल त्रिभुज के लिए", "केवल पंचभुज के लिए"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 12 Exercise & BPSC",
        explanation: "Since 360° / 45° = 8 (a whole number), yes, it can have rotational symmetry of order 8 (e.g. regular octagon).",
        explanationHi: "चूँकि 360° / 45° = 8 (पूर्ण संख्या है), अतः घूर्णन क्रम 8 होगा (जैसे सम-अष्टभुज में)।"
      },
      {
        id: 16,
        q: "Can a figure have rotational symmetry of order more than 1 with angle of rotation 17°?",
        qHi: "क्या किसी आकृति की घूर्णन सममिति का कोण 17° हो सकता है?",
        options: ["Yes", "No, because 360 is not divisible by 17", "Only for circles", "Only for scalene shapes"],
        optionsHi: ["हाँ", "नहीं, क्योंकि 360° 17 से विभाज्य नहीं है", "केवल वृत्त के लिए", "केवल विषमबाहु आकृतियों के लिए"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 12 Exercise & CTET",
        explanation: "Since 360° is not evenly divisible by 17°, no figure can have an angle of rotation of 17°.",
        explanationHi: "चूँकि 360° 17 से पूरा विभाजित नहीं होता, अतः 17° घूर्णन कोण नहीं हो सकता।"
      },
      {
        id: 17,
        q: "What is the order of rotational symmetry of a regular pentagon?",
        qHi: "एक सम-पंचभुज (Regular Pentagon) की घूर्णन सममिति का क्रम क्या है?",
        options: ["3", "4", "5", "10"],
        optionsHi: ["3", "4", "5", "10"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "A regular pentagon has 5 sides, so its order of rotational symmetry is 5 (angle of rotation = 360° / 5 = 72°).",
        explanationHi: "सम-पंचभुज का घूर्णन क्रम 5 होता है (घूर्णन कोण = 72°)।"
      },
      {
        id: 18,
        q: "Which letter among the following has rotational symmetry of order 2?",
        qHi: "निम्नलिखित में से किस अक्षर में क्रम 2 की घूर्णन सममिति है?",
        options: ["N", "P", "F", "L"],
        optionsHi: ["N", "P", "F", "L"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CTET",
        explanation: "Letter N when rotated through 180° looks exactly identical. Hence, it has rotational symmetry of order 2.",
        explanationHi: "अक्षर N को 180° घुमाने पर वह समान दिखता है, अतः इसका घूर्णन क्रम 2 है।"
      },
      {
        id: 19,
        q: "What is the center of rotation of a square?",
        qHi: "एक वर्ग के घूर्णन का केंद्र (Center of Rotation) क्या होता है?",
        options: ["One of its vertices", "Midpoint of a side", "Point of intersection of its diagonals", "Any arbitrary point"],
        optionsHi: ["इसका कोई एक शीर्ष", "किसी भुजा का मध्य-बिंदु", "इसके विकर्णों का प्रतिच्छेद बिंदु", "कोई भी यादृच्छिक बिंदु"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "The center of rotation for a square is the point of intersection of its diagonals.",
        explanationHi: "वर्ग के घूर्णन का केंद्र उसके विकर्णों का प्रतिच्छेद बिंदु होता है।"
      },
      {
        id: 20,
        q: "How many lines of symmetry does a regular octagon have?",
        qHi: "एक सम-अष्टभुज (Regular Octagon) में कुल कितनी सममिति रेखाएँ होती हैं?",
        options: ["4", "6", "8", "16"],
        optionsHi: ["4", "6", "8", "16"],
        ans: 2,
        pyqRef: "State TET & SSC CGL",
        explanation: "A regular octagon has 8 sides, so it has 8 lines of symmetry.",
        explanationHi: "सम-अष्टभुज में 8 सममिति रेखाएँ होती हैं।"
      },
      {
        id: 21,
        q: "What is the angle of rotation for a regular hexagon?",
        qHi: "एक सम-षट्भुज के घूर्णन का कोण क्या होता है?",
        options: ["45°", "60°", "90°", "120°"],
        optionsHi: ["45°", "60°", "90°", "120°"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 12",
        explanation: "Angle of rotation = 360° / 6 = 60°.",
        explanationHi: "घूर्णन कोण = 360° / 6 = 60°।"
      },
      {
        id: 22,
        q: "A figure has both line symmetry and rotational symmetry of order > 1. Which of the following is such a figure?",
        qHi: "एक आकृति में रैखिक सममिति और 1 से अधिक क्रम की घूर्णन सममिति दोनों हैं। वह आकृति कौन-सी है?",
        options: ["Parallelogram", "Isosceles triangle", "Equilateral triangle", "Scalene triangle"],
        optionsHi: ["समांतर चतुर्भुज", "समद्विबाहु त्रिभुज", "समबाहु त्रिभुज (Equilateral)", "विषमबाहु त्रिभुज"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math",
        explanation: "An equilateral triangle has 3 lines of symmetry and rotational symmetry of order 3.",
        explanationHi: "समबाहु त्रिभुज में 3 सममिति रेखाएँ और क्रम 3 की घूर्णन सममिति दोनों होती हैं।"
      },
      {
        id: 23,
        q: "Does a general parallelogram have any line of symmetry?",
        qHi: "क्या किसी सामान्य समांतर चतुर्भुज में कोई सममिति रेखा होती है?",
        options: ["Yes, 2", "Yes, 4", "No, 0", "Yes, 1"],
        optionsHi: ["हाँ, 2", "हाँ, 4", "नहीं, 0", "हाँ, 1"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 12 & BPSC TRE",
        explanation: "A general parallelogram has NO line of symmetry (0 lines), although it has rotational symmetry of order 2.",
        explanationHi: "सामान्य समांतर चतुर्भुज में 0 सममिति रेखा होती है (यद्यपि इसमें क्रम 2 की घूर्णन सममिति होती है)।"
      },
      {
        id: 24,
        q: "What is the order of rotational symmetry of letter S?",
        qHi: "अक्षर S की घूर्णन सममिति का क्रम क्या है?",
        options: ["1", "2", "3", "4"],
        optionsHi: ["1", "2", "3", "4"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Letter S looks identical after half a turn (180°). Hence, order of rotational symmetry is 2.",
        explanationHi: "अक्षर S को 180° घुमाने पर वह समान दिखता है। अतः घूर्णन क्रम 2 है।"
      },
      {
        id: 25,
        q: "What is the order of rotational symmetry of letter X?",
        qHi: "अक्षर X की घूर्णन सममिति का क्रम क्या है?",
        options: ["1", "2", "3", "4"],
        optionsHi: ["1", "2", "3", "4"],
        ans: 1,
        pyqRef: "State TET & Railway",
        explanation: "Standard letter X has rotational symmetry of order 2 (or order 4 if perpendicular lines).",
        explanationHi: "अक्षर X की घूर्णन सममिति का क्रम 2 होता है।"
      },
      {
        id: 26,
        q: "A windmill with 4 identical blades has rotational symmetry of order:",
        qHi: "4 समान पंखों वाली पवनचक्की (Windmill) की घूर्णन सममिति का क्रम क्या होगा?",
        options: ["2", "4", "8", "1"],
        optionsHi: ["2", "4", "8", "1"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 12 Exercise",
        explanation: "A 4-bladed windmill looks identical after every 90° rotation. Order = 4.",
        explanationHi: "4 पंखों वाली पवनचक्की का प्रत्येक 90° पर वही रूप दिखता है, अतः क्रम = 4।"
      },
      {
        id: 27,
        q: "How many lines of symmetry does an equilateral triangle have?",
        qHi: "एक समबाहु त्रिभुज में कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "3", "6"],
        optionsHi: ["1", "2", "3", "6"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "An equilateral triangle has 3 lines of symmetry (along the three altitudes/medians).",
        explanationHi: "समबाहु त्रिभुज में 3 सममिति रेखाएँ होती हैं।"
      },
      {
        id: 28,
        q: "Every geometric figure has rotational symmetry of AT LEAST order:",
        qHi: "प्रत्येक ज्यामितीय आकृति में कम से कम किस क्रम की घूर्णन सममिति अवश्य होती है?",
        options: ["0", "1", "2", "360"],
        optionsHi: ["0", "1", "2", "360"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Every figure matches itself after a complete 360° turn. So every figure has at least order 1.",
        explanationHi: "प्रत्येक आकृति 360° के पूर्ण चक्कर के बाद मूल जैसी दिखती है, अतः प्रत्येक में न्यूनतम क्रम 1 होता है।"
      },
      {
        id: 29,
        q: "What is the angle of rotation for a figure with rotational symmetry of order 4?",
        qHi: "क्रम 4 की घूर्णन सममिति वाली आकृति का घूर्णन कोण क्या होता है?",
        options: ["45°", "60°", "90°", "180°"],
        optionsHi: ["45°", "60°", "90°", "180°"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Angle = 360° / 4 = 90°.",
        explanationHi: "घूर्णन कोण = 360° / 4 = 90°।"
      },
      {
        id: 30,
        q: "Which digit among 0 to 9 has both horizontal and vertical lines of symmetry?",
        qHi: "0 से 9 तक के अंकों में से किस अंक में क्षैतिज और ऊर्ध्वाधर दोनों सममिति रेखाएँ होती हैं?",
        options: ["0 and 8", "Only 0", "Only 8", "1 and 7"],
        optionsHi: ["0 और 8", "केवल 0", "केवल 8", "1 और 7"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Both digits 0 and 8 (when written symmetrically) have both vertical and horizontal lines of symmetry.",
        explanationHi: "अंक 0 और 8 दोनों में क्षैतिज व ऊर्ध्वाधर दोनों सममिति रेखाएँ होती हैं।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 13: Visualising Solid Shapes (ठोस आकारों का चित्रण)
  // ==========================================
  {
    id: "ncert-c7-m13",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 13,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 13: Visualising Solid Shapes (ठोस आकारों का चित्रण)",
    titleHi: "अध्याय 13: ठोस आकारों का चित्रण (Faces, Edges, Vertices & Euler's Formula)",
    readingTime: "22 mins read",
    badge: "3D Geometry & Euler Formula",
    desc: "NCERT Class 7 Chapter 13: 2D vs 3D shapes, faces, edges, and vertices (F, E, V), nets for building solids, oblique and isometric sketches, cross-sections, and Euler's Formula (F + V - E = 2).",
    descHi: "एनसीईआरटी कक्षा 7 ठोस आकारों का चित्रण: 2D एवं 3D आकृतियाँ, फलक, किनारे और शीर्ष (F, E, V), ठोस आकारों के जाल (Nets), तिर्यक एवं समदूरीक चित्र (Isometric), यूलर सूत्र (F + V - E = 2)।",
    competitionEdge: "Euler's Formula (F + V - E = 2) is a permanent question in CTET Paper 2, BPSC TRE Middle School, and State TETs. Net identification for cubes and count of vertices/edges/faces for prisms and pyramids.",
    competitionEdgeHi: "CTET पेपर 2 और BPSC शिक्षक भर्ती में हर बार पूछा जाने वाला प्रश्न: यूलर का सूत्र F + V - E = 2, प्रिज्म व पिरामिड के फलक, शीर्ष एवं किनारे, और पासे (Dice) के विपरीत फलकों का योग 7 होना।",
    pdfUrl: "/ncert_books/class7/math_ch13.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch13_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch13_Visualising_Solid_Shapes.pdf",
    pdfSize: "1.85 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: 3D Solids, Faces, Edges & Vertices",
        headingHi: "1. एनसीईआरटी मूल पाठ: त्रिविमीय ठोस, फलक, किनारे एवं शीर्ष",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! Solid shapes occupy space and have 3 dimensions: Length, Breadth, and Height/Depth. NCERT defines three core parts of polyhedra:
              <strong>1. Face (फलक):</strong> Flat polygonal surface.
              <strong>2. Edge (किनारा):</strong> Line segment where two faces meet.
              <strong>3. Vertex (शीर्ष):</strong> Point where edges meet!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Euler's Formula for Any Convex Polyhedron</div>
            <p>Leonhard Euler discovered the celebrated invariant connecting Faces ($F$), Vertices ($V$), and Edges ($E$):</p>
            <p>$$\mathbf{F + V - E = 2} \quad \text{or} \quad \mathbf{F + V = E + 2}$$</p>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Solid Shape</th>
                  <th>Faces ($F$)</th>
                  <th>Vertices ($V$)</th>
                  <th>Edges ($E$)</th>
                  <th>Euler Check: $F + V - E$</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Cube / Cuboid</td><td>6</td><td>8</td><td>12</td><td>$6 + 8 - 12 = 2$</td></tr>
                <tr><td>Triangular Prism</td><td>5</td><td>6</td><td>9</td><td>$5 + 6 - 9 = 2$</td></tr>
                <tr><td>Triangular Pyramid (Tetrahedron)</td><td>4</td><td>4</td><td>6</td><td>$4 + 4 - 6 = 2$</td></tr>
                <tr><td>Square Pyramid</td><td>5</td><td>5</td><td>8</td><td>$5 + 5 - 8 = 2$</td></tr>
                <tr><td>Pentagonal Prism</td><td>7</td><td>10</td><td>15</td><td>$7 + 10 - 15 = 2$</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय छात्रों! ठोस आकृतियाँ स्थान घेरती हैं और इनकी 3 विमाएँ (लंबाई, चौड़ाई, ऊँचाई) होती हैं। किसी भी बहुफलक (Polyhedron) के तीन मुख्य अंग होते हैं:
              <strong>1. फलक (Face):</strong> समतल बहुभुजीय सतह।
              <strong>2. किनारा (Edge):</strong> रेखाखंड जहाँ दो फलक मिलते हैं।
              <strong>3. शीर्ष (Vertex):</strong> वह बिंदु जहाँ किनारे मिलते हैं!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ यूलर का सार्वभौमिक सूत्र (Euler's Formula)</div>
            <p>महान गणितज्ञ लियोनार्ड यूलर ने किसी भी उत्तल बहुफलक के फलक ($F$), शीर्ष ($V$) और किनारे ($E$) के बीच यह अविभाज्य संबंध सिद्ध किया:</p>
            <p>$$\\mathbf{F + V - E = 2} \\quad \\text{या} \\quad \\mathbf{F + V = E + 2}$$</p>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>ठोस आकृति</th>
                  <th>फलक ($F$)</th>
                  <th>शीर्ष ($V$)</th>
                  <th>किनारे ($E$)</th>
                  <th>यूलर सत्यापन: $F + V - E$</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>घन / घनाभ (Cube/Cuboid)</td><td>6</td><td>8</td><td>12</td><td>$6 + 8 - 12 = 2$</td></tr>
                <tr><td>त्रिभुजाकार प्रिज्म</td><td>5</td><td>6</td><td>9</td><td>$5 + 6 - 9 = 2$</td></tr>
                <tr><td>त्रिभुजाकार पिरामिड (चतुष्फलक)</td><td>4</td><td>4</td><td>6</td><td>$4 + 4 - 6 = 2$</td></tr>
                <tr><td>वर्गाकार पिरामिड</td><td>5</td><td>5</td><td>8</td><td>$5 + 5 - 8 = 2$</td></tr>
                <tr><td>पंचभुजाकार प्रिज्म</td><td>7</td><td>10</td><td>15</td><td>$7 + 10 - 15 = 2$</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Nets of Solids & The Standard Die Invariant",
        headingHi: "2. ठोस आकारों के जाल (Nets) एवं मानक पासे का नियम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Standard Die (पासा) Rule</div>
            <p>A standard die is a cube whose numbers on opposite faces always add up to $\mathbf{7}$!</p>
            <ul>
              <li>Opposite to $1$ is $\mathbf{6}$ ($1 + 6 = 7$)</li>
              <li>Opposite to $2$ is $\mathbf{5}$ ($2 + 5 = 7$)</li>
              <li>Opposite to $3$ is $\mathbf{4}$ ($3 + 4 = 7$)</li>
            </ul>
            <p><strong>Net for a Cube:</strong> A 2D skeleton pattern that can be folded along edges to construct the 3D solid cube. A cube has 6 square faces.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ मानक पासे (Standard Dice) का स्वर्णिम नियम</div>
            <p>एक मानक पासा ऐसा घन होता है जिसके <strong>विपरीत फलकों पर लिखे अंकों का योग सदैव $7$</strong> होता है!</p>
            <ul>
              <li>$1$ के विपरीत $\\mathbf{6}$ होता है ($1 + 6 = 7$)</li>
              <li>$2$ के विपरीत $\\mathbf{5}$ होता है ($2 + 5 = 7$)</li>
              <li>$3$ के विपरीत $\\mathbf{4}$ होता है ($3 + 4 = 7$)</li>
            </ul>
            <p><strong>जाल (Net):</strong> एक ऐसा द्विविमीय खाका जिसे मोड़ने पर त्रिविमीय ठोस आकृति तैयार हो जाती है।</p>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Using Euler's formula F + V - E = 2, if a polyhedron has 6 faces and 8 vertices, how many edges does it have?",
        qHi: "यूलर के सूत्र F + V - E = 2 का प्रयोग करें। यदि एक बहुफलक के 6 फलक और 8 शीर्ष हैं, तो उसके कितने किनारे होंगे?",
        options: ["10", "12", "14", "16"],
        optionsHi: ["10", "12", "14", "16"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "F + V - E = 2 => 6 + 8 - E = 2 => 14 - E = 2 => E = 12.",
        explanationHi: "6 + 8 - E = 2 => 14 - E = 2 => E = 12 किनारे।"
      },
      {
        id: 2,
        q: "On a standard die, what number is always opposite to 3?",
        qHi: "एक मानक पासे पर, 3 के विपरीत फलक पर कौन-सी संख्या होती है?",
        options: ["2", "4", "5", "6"],
        optionsHi: ["2", "4", "5", "6"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 13 & State TET",
        explanation: "On a standard die, sum of numbers on opposite faces is 7. Opposite to 3 is 7 - 3 = 4.",
        explanationHi: "मानक पासे के विपरीत फलकों का योग 7 होता है: 7 - 3 = 4।"
      },
      {
        id: 3,
        q: "How many faces, vertices, and edges does a triangular pyramid (tetrahedron) have?",
        qHi: "एक त्रिभुजाकार पिरामिड (चतुष्फलक) में कितने फलक, शीर्ष और किनारे होते हैं?",
        options: ["F = 4, V = 4, E = 6", "F = 5, V = 5, E = 8", "F = 5, V = 6, E = 9", "F = 6, V = 8, E = 12"],
        optionsHi: ["F = 4, V = 4, E = 6", "F = 5, V = 5, E = 8", "F = 5, V = 6, E = 9", "F = 6, V = 8, E = 12"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "A triangular pyramid has 4 triangular faces, 4 vertices, and 6 edges.",
        explanationHi: "त्रिभुजाकार पिरामिड में 4 फलक, 4 शीर्ष और 6 किनारे होते हैं।"
      },
      {
        id: 4,
        q: "How many faces, vertices, and edges does a triangular prism have?",
        qHi: "एक त्रिभुजाकार प्रिज्म (Triangular Prism) में कितने फलक, शीर्ष और किनारे होते हैं?",
        options: ["F = 5, V = 6, E = 9", "F = 4, V = 4, E = 6", "F = 6, V = 8, E = 12", "F = 5, V = 5, E = 8"],
        optionsHi: ["F = 5, V = 6, E = 9", "F = 4, V = 4, E = 6", "F = 6, V = 8, E = 12", "F = 5, V = 5, E = 8"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CTET",
        explanation: "A triangular prism has 2 triangular bases and 3 rectangular faces (F = 5), 6 vertices (V = 6), and 9 edges (E = 9).",
        explanationHi: "त्रिभुजाकार प्रिज्म में 5 फलक (2 त्रिभुज + 3 आयत), 6 शीर्ष और 9 किनारे होते हैं।"
      },
      {
        id: 5,
        q: "Can a polyhedron have 10 faces, 20 edges, and 15 vertices?",
        qHi: "क्या किसी बहुफलक के 10 फलक, 20 किनारे और 15 शीर्ष हो सकते हैं?",
        options: ["Yes, satisfies Euler's formula", "No, violates Euler's formula", "Only if it is a sphere", "Only if faces are regular"],
        optionsHi: ["हाँ, यूलर सूत्र संतुष्ट होता है", "नहीं, यूलर सूत्र का उल्लंघन होता है", "केवल यदि यह गोला हो", "केवल यदि फलक समरूप हों"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 13 Exercise & CTET",
        explanation: "F + V - E = 10 + 15 - 20 = 25 - 20 = 5 != 2. Since it does not equal 2, such a polyhedron cannot exist.",
        explanationHi: "F + V - E = 10 + 15 - 20 = 5 != 2। यूलर सूत्र संतुष्ट नहीं होता, अतः ऐसा बहुफलक संभव नहीं है।"
      },
      {
        id: 6,
        q: "If a polyhedron has 20 faces and 12 vertices, how many edges does it have?",
        qHi: "यदि किसी बहुफलक के 20 फलक और 12 शीर्ष हैं, तो उसके किनारे कितने होंगे?",
        options: ["28", "30", "32", "34"],
        optionsHi: ["28", "30", "32", "34"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "F + V - E = 2 => 20 + 12 - E = 2 => 32 - E = 2 => E = 30.",
        explanationHi: "20 + 12 - E = 2 => 32 - E = 2 => E = 30 किनारे।"
      },
      {
        id: 7,
        q: "What cross-section do you get when you give a vertical cut to a round apple?",
        qHi: "एक गोल सेब को ऊर्ध्वाधर काटने पर कौन-सा अनुप्रस्थ काट (Cross-section) प्राप्त होता है?",
        options: ["Square", "Rectangle", "Circle", "Triangle"],
        optionsHi: ["वर्ग", "आयत", "वृत्त (Circle)", "त्रिभुज"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 13 Exercise & State TET",
        explanation: "A vertical or horizontal cut through a sphere/round object gives a circular cross-section.",
        explanationHi: "गोल वस्तु को काटने पर वृत्ताकार अनुप्रस्थ काट प्राप्त होता है।"
      },
      {
        id: 8,
        q: "What cross-section do you get when you give a horizontal cut to a cylinder?",
        qHi: "एक बेलन (Cylinder) को क्षैतिज काटने पर कौन-सा अनुप्रस्थ काट प्राप्त होता है?",
        options: ["Circle", "Rectangle", "Square", "Triangle"],
        optionsHi: ["वृत्त (Circle)", "आयत", "वर्ग", "त्रिभुज"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 13 & CTET",
        explanation: "A horizontal cut parallel to the circular base of a cylinder yields a circular cross-section.",
        explanationHi: "बेलन के आधार के समांतर क्षैतिज काटने पर वृत्ताकार अनुप्रस्थ काट मिलता है।"
      },
      {
        id: 9,
        q: "What cross-section do you get when you give a vertical cut to a cylinder?",
        qHi: "एक बेलन को ऊर्ध्वाधर (खड़ा) काटने पर कौन-सा अनुप्रस्थ काट प्राप्त होता है?",
        options: ["Circle", "Rectangle", "Triangle", "Oval"],
        optionsHi: ["वृत्त", "आयत (Rectangle)", "त्रिभुज", "दीर्घवृत्त"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "A vertical cut through a cylinder gives a rectangular cross-section.",
        explanationHi: "बेलन को ऊर्ध्वाधर काटने पर आयताकार अनुप्रस्थ काट मिलता है।"
      },
      {
        id: 10,
        q: "How many faces does a square pyramid have?",
        qHi: "एक वर्गाकार पिरामिड में कुल कितने फलक होते हैं?",
        options: ["4", "5", "6", "8"],
        optionsHi: ["4", "5", "6", "8"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "A square pyramid has 1 square base and 4 triangular lateral faces = 5 faces.",
        explanationHi: "वर्गाकार पिरामिड में 1 वर्गाकार आधार + 4 त्रिभुजाकार फलक = 5 फलक होते हैं।"
      },
      {
        id: 11,
        q: "What is the shadow cast by a ball (sphere) under an overhead lamp?",
        qHi: "ऊपर लगे लैंप के नीचे एक गेंद (गोले) की छाया किस आकृति की बनेगी?",
        options: ["Square", "Circle", "Triangle", "Line segment"],
        optionsHi: ["वर्ग", "वृत्त (Circle)", "त्रिभुज", "रेखाखंड"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 13 Exercise",
        explanation: "The 2D shadow of a sphere cast on the ground from directly above is a circle.",
        explanationHi: "गोले की भूमि पर बनने वाली द्विविमीय छाया वृत्ताकार होती है।"
      },
      {
        id: 12,
        q: "How many vertices does a cube have?",
        qHi: "एक घन में कुल कितने शीर्ष (Vertices) होते हैं?",
        options: ["6", "8", "12", "14"],
        optionsHi: ["6", "8", "12", "14"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "A cube has 8 vertices (corners).",
        explanationHi: "घन में 8 शीर्ष (कोने) होते हैं।"
      },
      {
        id: 13,
        q: "How many edges does a cuboid have?",
        qHi: "एक घनाभ में कुल कितने किनारे (Edges) होते हैं?",
        options: ["6", "8", "12", "16"],
        optionsHi: ["6", "8", "12", "16"],
        ans: 2,
        pyqRef: "State TET & Railway NTPC",
        explanation: "A cuboid has 12 edges.",
        explanationHi: "घनाभ में 12 किनारे होते हैं।"
      },
      {
        id: 14,
        q: "What is the net of a cylinder composed of?",
        qHi: "एक बेलन का जाल (Net) किन आकृतियों से मिलकर बनता है?",
        options: ["One rectangle and two circles", "Two rectangles and one circle", "Three circles", "Two triangles and one rectangle"],
        optionsHi: ["एक आयत और दो वृत्त", "दो आयत और एक वृत्त", "तीन वृत्त", "दो त्रिभुज और एक आयत"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "The net of a cylinder consists of one rectangular curved surface and two circular bases.",
        explanationHi: "बेलन का जाल एक आयत (वक्र पृष्ठ) और दो वृत्ताकार आधारों से मिलकर बनता है।"
      },
      {
        id: 15,
        q: "What is the net of a cone composed of?",
        qHi: "एक शंकु (Cone) का जाल किन आकृतियों से मिलकर बनता है?",
        options: ["A sector of a circle and a circle", "A triangle and a rectangle", "Two circles", "A square and a triangle"],
        optionsHi: ["वृत्त का एक त्रिज्यखंड (Sector) और एक वृत्त", "एक त्रिभुज और एक आयत", "दो वृत्त", "एक वर्ग और एक त्रिभुज"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "The net of a cone consists of a sector of a circle (for the curved surface) and a circle (for the base).",
        explanationHi: "शंकु का जाल वृत्त के एक त्रिज्यखंड और एक वृत्ताकार आधार से मिलकर बनता है।"
      },
      {
        id: 16,
        q: "On an isometric dot paper, dots are placed at the vertices of:",
        qHi: "समदूरीक बिंदु पत्र (Isometric Dot Paper) पर बिंदु किन आकृतियों के शीर्षों पर स्थित होते हैं?",
        options: ["Squares", "Equilateral triangles", "Rectangles", "Regular pentagons"],
        optionsHi: ["वर्ग", "समबाहु त्रिभुज (Equilateral Triangles)", "आयत", "सम-पंचभुज"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Isometric dot paper divides space into small equilateral triangles, with dots at each vertex.",
        explanationHi: "समदूरीक बिंदु पत्र पर बिंदु समबाहु त्रिभुजों के विन्यास में व्यवस्थित होते हैं।"
      },
      {
        id: 17,
        q: "What 2D shadow does a cube cast on the ground when light falls directly from above?",
        qHi: "जब प्रकाश ठीक ऊपर से गिरता है, तो एक घन की भूमि पर कौन-सी द्विविमीय छाया बनती है?",
        options: ["Rectangle", "Square", "Hexagon", "Triangle"],
        optionsHi: ["आयत", "वर्ग (Square)", "षट्भुज", "त्रिभुज"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 13",
        explanation: "The shadow of a cube from directly above is a square.",
        explanationHi: "ऊपर से पड़ने वाले प्रकाश में घन की छाया वर्गाकार होती है।"
      },
      {
        id: 18,
        q: "Can a polyhedron have 3 faces?",
        qHi: "क्या किसी बहुफलक के केवल 3 फलक हो सकते हैं?",
        options: ["Yes", "No, minimum is 4", "Only if it is flat", "Only in non-Euclidean space"],
        optionsHi: ["हाँ", "नहीं, न्यूनतम 4 फलक आवश्यक हैं", "केवल जब वह समतल हो", "केवल गैर-यूक्लिडियन ज्यामिति में"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "A polyhedron must enclose 3D space, which requires a minimum of 4 faces (a tetrahedron).",
        explanationHi: "त्रिविमीय ठोस को घेरने के लिए कम से कम 4 फलक (चतुष्फलक) अनिवार्य हैं।"
      },
      {
        id: 19,
        q: "On a standard die, what is the sum of dots on opposite faces?",
        qHi: "मानक पासे पर विपरीत फलकों के बिंदुओं का योग कितना होता है?",
        options: ["5", "6", "7", "8"],
        optionsHi: ["5", "6", "7", "8"],
        ans: 2,
        pyqRef: "State TET & Railway",
        explanation: "On any standard die, opposite faces always sum to 7.",
        explanationHi: "मानक पासे के विपरीत फलकों का योग सदैव 7 होता है।"
      },
      {
        id: 20,
        q: "If two dice are placed side-by-side touching with face 4 touching face 3, what is the sum of the numbers on the two outermost opposite faces?",
        qHi: "यदि दो पासे सटाकर रखे जाएँ जहाँ फलक 4 फलक 3 को छू रहा है, तो दोनों सबसे बाहरी विपरीत फलकों का योग क्या होगा?",
        options: ["5", "7", "10", "14"],
        optionsHi: ["5", "7", "10", "14"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 13 Exercise & CTET",
        explanation: "Opposite to 4 is 3. Opposite to 3 is 4. Outermost faces are 3 and 4. Sum = 3 + 4 = 7.",
        explanationHi: "4 के विपरीत 3 और 3 के विपरीत 4 होता है। बाहरी फलकों का योग 3 + 4 = 7 होगा।"
      },
      {
        id: 21,
        q: "What is an oblique sketch?",
        qHi: "एक तिर्यक चित्र (Oblique Sketch) क्या होता है?",
        options: ["A sketch where measurements are strictly to exact scale", "A sketch that gives visual impression of a 3D solid without exact proportional lengths", "A photograph of a solid", "A 2D plan of a building"],
        optionsHi: ["सटीक पैमाने पर बना चित्र", "एक ऐसा चित्र जो सटीक माप के बिना त्रिविमीय रूप का दृश्य प्रभाव देता है", "ठोस का फोटो", "भवन का 2D नक्शा"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "An oblique sketch gives a visual representation of 3D solids where dimensions are not necessarily proportional to scale.",
        explanationHi: "तिर्यक चित्र ठोस का ऐसा दृश्य निरूपण है जिसमें माप आनुपातिक होना अनिवार्य नहीं होता।"
      },
      {
        id: 22,
        q: "How many rectangular faces does a pentagonal prism have?",
        qHi: "एक पंचभुजाकार प्रिज्म (Pentagonal Prism) में कितने आयताकार फलक होते हैं?",
        options: ["2", "5", "7", "10"],
        optionsHi: ["2", "5", "7", "10"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "A pentagonal prism has 2 pentagonal bases and 5 rectangular lateral faces.",
        explanationHi: "पंचभुजाकार प्रिज्म में 2 पंचभुज आधार और 5 आयताकार पार्श्व फलक होते हैं।"
      },
      {
        id: 23,
        q: "What shape is the base of a hexagonal pyramid?",
        qHi: "एक षट्भुजाकार पिरामिड (Hexagonal Pyramid) का आधार किस आकार का होता है?",
        options: ["Triangle", "Pentagon", "Hexagon", "Square"],
        optionsHi: ["त्रिभुज", "पंचभुज", "षट्भुज (Hexagon)", "वर्ग"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math",
        explanation: "The base of a hexagonal pyramid is a hexagon.",
        explanationHi: "षट्भुजाकार पिरामिड का आधार एक षट्भुज होता है।"
      },
      {
        id: 24,
        q: "How many triangular faces does an octagonal pyramid have?",
        qHi: "एक अष्टभुजाकार पिरामिड (Octagonal Pyramid) में कितने त्रिभुजाकार पार्श्व फलक होते हैं?",
        options: ["6", "7", "8", "9"],
        optionsHi: ["6", "7", "8", "9"],
        ans: 2,
        pyqRef: "State TET & SSC CGL",
        explanation: "An n-gonal pyramid has n triangular lateral faces. For an octagonal pyramid, it has 8 triangular faces.",
        explanationHi: "अष्टभुजाकार पिरामिड में 8 त्रिभुजाकार पार्श्व फलक होते हैं।"
      },
      {
        id: 25,
        q: "What is the cross-section obtained when cutting a circular pipe vertically across its length?",
        qHi: "एक वृत्ताकार पाइप को उसकी लंबाई के लंबवत काटने पर कौन-सा अनुप्रस्थ काट प्राप्त होता है?",
        options: ["Ring (annulus)", "Circle", "Rectangle", "Square"],
        optionsHi: ["छल्ला (Ring / Annulus)", "ठोस वृत्त", "आयत", "वर्ग"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 13",
        explanation: "A hollow pipe cut across its length yields a circular ring (annulus) cross-section.",
        explanationHi: "खोखले पाइप को लंबवत काटने पर छल्ला (Ring) प्राप्त होता है।"
      },
      {
        id: 26,
        q: "How many cubes of side 2 cm can be cut from a cuboid of dimensions 6 cm * 4 cm * 2 cm?",
        qHi: "6 सेमी * 4 सेमी * 2 सेमी विमाओं वाले घनाभ में से 2 सेमी भुजा वाले कितने घन काटे जा सकते हैं?",
        options: ["6", "12", "18", "24"],
        optionsHi: ["6", "12", "18", "24"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "Volume of cuboid = 6 * 4 * 2 = 48 cm³. Volume of cube = 2^3 = 8 cm³. Number of cubes = 48 / 8 = 6.",
        explanationHi: "घनाभ का आयतन = 48 सेमी³। घन का आयतन = 8 सेमी³। घनों की संख्या = 48 / 8 = 6।"
      },
      {
        id: 27,
        q: "What 2D shadow is cast by a cylinder placed upright on the ground under horizontal sunlight?",
        qHi: "क्षैतिज सूर्य के प्रकाश में खड़े रखे एक बेलन की भूमि पर कौन-सी छाया बनती है?",
        options: ["Circle", "Rectangle", "Triangle", "Oval"],
        optionsHi: ["वृत्त", "आयत (Rectangle)", "त्रिभुज", "अंडाकार"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Horizontal light shining on an upright cylinder casts a rectangular shadow on a vertical wall, or rectangle on ground.",
        explanationHi: "बेलन की पार्श्व छाया आयताकार होती है।"
      },
      {
        id: 28,
        q: "Which solid has no flat faces and no straight edges?",
        qHi: "किस ठोस में कोई समतल फलक और कोई सीधा किनारा नहीं होता?",
        options: ["Cube", "Cylinder", "Sphere", "Cone"],
        optionsHi: ["घन", "बेलन", "गोला (Sphere)", "शंकु"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "A sphere has only a curved surface: F = 0 flat faces, E = 0 straight edges, V = 0 vertices.",
        explanationHi: "गोले में कोई समतल फलक और कोई सीधा किनारा नहीं होता।"
      },
      {
        id: 29,
        q: "In Euler's formula F + V - E = 2, what does the constant 2 represent?",
        qHi: "यूलर के सूत्र F + V - E = 2 में संख्या 2 क्या दर्शाती है?",
        options: ["Euler characteristic of a sphere/polyhedron", "Number of dimensions", "Number of right angles", "Scale factor"],
        optionsHi: ["बहुफलक का यूलर लाक्षणिक मान (Euler Characteristic)", "विमाओं की संख्या", "समकोणों की संख्या", "पैमाना"],
        ans: 0,
        pyqRef: "CTET Paper 2 & BPSC Middle School",
        explanation: "The constant 2 is the Euler characteristic (chi = 2) for any convex polyhedron homeomorphic to a sphere.",
        explanationHi: "2 किसी भी उत्तल बहुफलक का यूलर लाक्षणिक (Euler Characteristic) मान होता है।"
      },
      {
        id: 30,
        q: "How many faces does a hexagonal prism have in total?",
        qHi: "एक षट्भुजाकार प्रिज्म में कुल कितने फलक होते हैं?",
        options: ["6", "7", "8", "12"],
        optionsHi: ["6", "7", "8", "12"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "2 hexagonal bases + 6 rectangular sides = 8 faces.",
        explanationHi: "2 षट्भुज आधार + 6 आयताकार पार्श्व फलक = 8 फलक।"
      }
    ]
  }
];
