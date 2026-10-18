/**
 * build_class6_math_p1.js
 * NCERT Class 6 Mathematics (Ganita Prakash - NEP 2020)
 * Chapters 1 to 5:
 * Ch 1: Patterns in Mathematics (गणित में पैटर्न) - Prof. Manjul Bhargava
 * Ch 2: Lines and Angles (रेखाएँ और कोण)
 * Ch 3: Number Play (संख्याओं का खेल - Kaprekar, Collatz, Magic Squares)
 * Ch 4: Data Handling and Presentation (आँकड़ों का प्रबंधन एवं प्रस्तुतिकरण)
 * Ch 5: Prime Time (अभाज्य संख्याएँ और गुणनखंडन - Primes, HCF, LCM)
 * 
 * Exactly 30 bilingual competition-grade MCQs per chapter (150 total).
 */

const chapters = [
  // ==========================================
  // CHAPTER 1: Patterns in Mathematics
  // ==========================================
  {
    id: "ncert-c6-m01",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 1,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 1: Patterns in Mathematics (गणित में पैटर्न)",
    titleHi: "अध्याय 1: गणित में पैटर्न (प्रो. मंजुल भार्गव कृत)",
    readingTime: "18 mins read",
    badge: "Prof. Bhargava Special",
    desc: "Explore visual and numerical patterns, sequences of shapes and numbers, triangular numbers, square numbers, hexagonal numbers, and Fibonacci sequences as conceptualized by Fields Medalist Prof. Manjul Bhargava.",
    descHi: "फील्ड्स मेडलिस्ट प्रो. मंजुल भार्गव द्वारा संकल्पित आकृतियों व संख्याओं के खूबसूरत पैटर्न, त्रिकोणीय संख्याएँ, वर्ग संख्याएँ, षट्कोणीय संख्याएँ और फिबोनाची अनुक्रम का संपूर्ण विश्लेषण।",
    competitionEdge: "High-yield topic for CTET Paper 2, BPSC TRE 4.0 Middle (6-8), CSAT, and State TETs. Recurring questions on triangular number formula n(n+1)/2, sum of two triangular numbers making a square number, and sequence generalization.",
    competitionEdgeHi: "CTET पेपर 2, BPSC TRE 4.0 (कक्षा 6-8), CSAT और राज्य TET परीक्षाओं के लिए सर्वाधिक महत्वपूर्ण अध्याय। त्रिकोणीय संख्या सूत्र n(n+1)/2, दो क्रमागत त्रिकोणीय संख्याओं का योग वर्ग संख्या होना, और अनुक्रम सामान्यीकरण पर बार-बार प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. What is Mathematics? The Art of Patterns (Prof. Manjul Bhargava)",
        headingHi: "1. गणित क्या है? पैटर्न की कला (प्रो. मंजुल भार्गव)",
        contentHtml: `
          <p>Prof. Manjul Bhargava describes mathematics not merely as calculation, but as a <strong>creative art</strong>—the search for beautiful patterns and deep explanations. In nature, art, music, and architecture, patterns create structure and harmony.</p>
          <div class="note-formula-box">
            <h4>📐 Fundamental Pattern Types in NCERT Grade 6:</h4>
            <ul>
              <li><strong>Sequences of Numbers:</strong> Arithmetic progressions, differences between terms, squares, cubes.</li>
              <li><strong>Sequences of Shapes:</strong> Geometric progression of dots, polygon extensions, tiling (tessellations).</li>
              <li><strong>Interrelation between Shapes &amp; Numbers:</strong> Representing numbers as geometric dots (Figurate Numbers).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p>प्रोफेसर मंजुल भार्गव गणित को केवल गणना नहीं, बल्कि एक <strong>सृजनात्मक कला</strong> बताते हैं—सुंदर पैटर्न की खोज और उनकी तार्किक व्याख्या। प्रकृति, कला, संगीत और वास्तुकला में पैटर्न व्यवस्था और सामंजस्य उत्पन्न करते हैं।</p>
          <div class="note-formula-box">
            <h4>📐 एनसीईआरटी कक्षा 6 के मूलभूत पैटर्न प्रकार:</h4>
            <ul>
              <li><strong>संख्याओं के अनुक्रम:</strong> पदों के बीच का अंतर, वर्ग, घन, और समांतर प्रगति।</li>
              <li><strong>आकृतियों के अनुक्रम:</strong> बिंदुओं की ज्यामितीय वृद्धि, बहुभुज विस्तार, टाइलिंग (समतल पर पैटर्न)।</li>
              <li><strong>आकृतियों और संख्याओं का अंतर्संबंध:</strong> संख्याओं को ज्यामितीय बिंदुओं के रूप में निरूपित करना (चित्रित संख्याएँ - Figurate Numbers)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Triangular Numbers & Square Numbers: Formulas & Proofs",
        headingHi: "2. त्रिकोणीय संख्याएँ एवं वर्ग संख्याएँ: सूत्र व सत्यापन",
        contentHtml: `
          <p><strong>Triangular Numbers (T<sub>n</sub>):</strong> Numbers of dots that can form an equilateral triangle:</p>
          <p style="text-align:center; font-size:1.1rem; font-weight:700; color:#1e3a8a;">T<sub>1</sub> = 1, T<sub>2</sub> = 3, T<sub>3</sub> = 6, T<sub>4</sub> = 10, T<sub>5</sub> = 15, T<sub>6</sub> = 21, ...</p>
          <div class="note-formula-box">
            <h4>⚡ General Formula for n-th Triangular Number:</h4>
            <p style="font-size:1.15rem; font-weight:800; text-align:center; color:#2563eb;">T<sub>n</sub> = n(n + 1) / 2</p>
            <p><strong>Example:</strong> For n = 10, T<sub>10</sub> = (10 &times; 11) / 2 = 55.</p>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 Golden NCERT Theorem (Sum of Consecutive Triangular Numbers):</h4>
            <p>The sum of any two consecutive triangular numbers is always a <strong>Square Number</strong>!</p>
            <p style="font-weight:700; text-align:center;">T<sub>n-1</sub> + T<sub>n</sub> = n<sup>2</sup></p>
            <p><em>Verifications:</em> T<sub>1</sub> + T<sub>2</sub> = 1 + 3 = 4 (2<sup>2</sup>); T<sub>2</sub> + T<sub>3</sub> = 3 + 6 = 9 (3<sup>2</sup>); T<sub>3</sub> + T<sub>4</sub> = 6 + 10 = 16 (4<sup>2</sup>); T<sub>9</sub> + T<sub>10</sub> = 45 + 55 = 100 (10<sup>2</sup>).</p>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>त्रिकोणीय संख्याएँ (Triangular Numbers - T<sub>n</sub>):</strong> बिंदुओं की वे संख्याएँ जो एक समबाहु त्रिभुज का निर्माण कर सकती हैं:</p>
          <p style="text-align:center; font-size:1.1rem; font-weight:700; color:#1e3a8a;">T<sub>1</sub> = 1, T<sub>2</sub> = 3, T<sub>3</sub> = 6, T<sub>4</sub> = 10, T<sub>5</sub> = 15, T<sub>6</sub> = 21, ...</p>
          <div class="note-formula-box">
            <h4>⚡ n-वीं त्रिकोणीय संख्या का सामान्य सूत्र:</h4>
            <p style="font-size:1.15rem; font-weight:800; text-align:center; color:#2563eb;">T<sub>n</sub> = n(n + 1) / 2</p>
            <p><strong>उदाहरण:</strong> n = 10 के लिए, T<sub>10</sub> = (10 &times; 11) / 2 = 55।</p>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 एनसीईआरटी का स्वर्णिम प्रमेय (दो क्रमागत त्रिकोणीय संख्याओं का योग):</h4>
            <p>किन्हीं भी दो लगातार आने वाली त्रिकोणीय संख्याओं का योग सदैव एक <strong>पूर्ण वर्ग संख्या (Square Number)</strong> होता है!</p>
            <p style="font-weight:700; text-align:center;">T<sub>n-1</sub> + T<sub>n</sub> = n<sup>2</sup></p>
            <p><em>सत्यापन:</em> T<sub>1</sub> + T<sub>2</sub> = 1 + 3 = 4 = 2<sup>2</sup>; T<sub>2</sub> + T<sub>3</sub> = 3 + 6 = 9 = 3<sup>2</sup>; T<sub>3</sub> + T<sub>4</sub> = 6 + 10 = 16 = 4<sup>2</sup>; T<sub>9</sub> + T<sub>10</sub> = 45 + 55 = 100 = 10<sup>2</sup>।</p>
          </div>
        `
      },
      {
        heading: "3. Fibonacci Pattern, Hexagonal Numbers & Competition Traps",
        headingHi: "3. फिबोनाची अनुक्रम, षट्कोणीय संख्याएँ एवं प्रतियोगी ट्रिक्स",
        contentHtml: `
          <p><strong>Fibonacci Sequence:</strong> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... Each term is the sum of the preceding two terms (F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub>). Found in pinecone spirals, sunflower seed spirals, and flower petals.</p>
          <p><strong>Hexagonal Numbers:</strong> 1, 7, 19, 37, 61, 91... Notice the difference sequence: +6, +12, +18, +24, +30 (Multiples of 6!).</p>
          <div class="note-formula-box">
            <h4>💡 Quick Exam Shortcuts:</h4>
            <ul>
              <li><strong>Sum of first n odd numbers:</strong> 1 + 3 + 5 + ... + (2n - 1) = <strong>n<sup>2</sup></strong>. (e.g. sum of first 8 odd numbers = 8<sup>2</sup> = 64).</li>
              <li><strong>Sum of first n natural numbers:</strong> Exactly equal to the n-th triangular number = <strong>n(n+1)/2</strong>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>फिबोनाची अनुक्रम (Fibonacci Sequence):</strong> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... प्रत्येक पद अपने पूर्ववर्ती दो पदों का योग होता है (F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub>)। यह प्रकृति में सूरजमुखी के बीजों के चक्र, पाइनकोन और फूलों की पंखुड़ियों में पाया जाता है।</p>
          <p><strong>षट्कोणीय संख्याएँ (Hexagonal Numbers):</strong> 1, 7, 19, 37, 61, 91... इनके अंतर का क्रम देखें: +6, +12, +18, +24, +30 (6 के गुणज!)।</p>
          <div class="note-formula-box">
            <h4>💡 प्रतियोगी परीक्षा के त्वरित शॉर्टकट:</h4>
            <ul>
              <li><strong>प्रथम n विषम संख्याओं का योग:</strong> 1 + 3 + 5 + ... + (2n - 1) = <strong>n<sup>2</sup></strong> (उदा. प्रथम 8 विषम संख्याओं का योग = 8<sup>2</sup> = 64)।</li>
              <li><strong>प्रथम n प्राकृत संख्याओं का योग:</strong> ठीक n-वीं त्रिकोणीय संख्या के बराबर = <strong>n(n+1)/2</strong>।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the 10th triangular number (T10)?",
        qHi: "10वीं त्रिकोणीय संख्या (T10) का मान क्या होगा?",
        options: ["45", "55", "50", "60"],
        optionsHi: ["45", "55", "50", "60"],
        ans: 1,
        pyqRef: "CTET Paper 2 (Maths & Science) & BPSC TRE 4.0 Middle",
        explanation: "Using the formula Tn = n(n + 1)/2: T10 = (10 * 11) / 2 = 110 / 2 = 55.",
        explanationHi: "त्रिकोणीय संख्या सूत्र Tn = n(n + 1)/2 के अनुसार: T10 = (10 * 11) / 2 = 110 / 2 = 55।"
      },
      {
        id: 2,
        q: "According to NCERT Chapter 1, what is the sum of any two consecutive triangular numbers Tn-1 and Tn?",
        qHi: "एनसीईआरटी अध्याय 1 के अनुसार, किन्हीं दो क्रमागत त्रिकोणीय संख्याओं Tn-1 और Tn का योग क्या होता है?",
        options: ["A prime number", "A square number (n^2)", "A cubic number (n^3)", "An odd number always"],
        optionsHi: ["एक अभाज्य संख्या", "एक पूर्ण वर्ग संख्या (n^2)", "एक पूर्ण घन संख्या (n^3)", "सदैव एक विषम संख्या"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & State TET",
        explanation: "The sum of two consecutive triangular numbers Tn-1 and Tn is always equal to n^2 (a square number). Example: T3 + T4 = 6 + 10 = 16 = 4^2.",
        explanationHi: "दो लगातार आने वाली त्रिकोणीय संख्याओं Tn-1 और Tn का योग सदैव n^2 (पूर्ण वर्ग संख्या) होता है। उदाहरण: T3 + T4 = 6 + 10 = 16 = 4^2।"
      },
      {
        id: 3,
        q: "If T4 = 10 and T5 = 15, what square number is formed by their sum?",
        qHi: "यदि T4 = 10 और T5 = 15 है, तो उनके योग से कौन-सी वर्ग संख्या प्राप्त होती है?",
        options: ["16 (4^2)", "25 (5^2)", "36 (6^2)", "49 (7^2)"],
        optionsHi: ["16 (4^2)", "25 (5^2)", "36 (6^2)", "49 (7^2)"],
        ans: 1,
        pyqRef: "CTET Paper 2 & UPTET Paper 2",
        explanation: "T4 + T5 = 10 + 15 = 25 = 5^2.",
        explanationHi: "T4 + T5 = 10 + 15 = 25 = 5^2।"
      },
      {
        id: 4,
        q: "What is the sum of the first 12 odd natural numbers (1 + 3 + 5 + ... + 23)?",
        qHi: "प्रथम 12 विषम प्राकृत संख्याओं का योग (1 + 3 + 5 + ... + 23) क्या होगा?",
        options: ["120", "132", "144", "156"],
        optionsHi: ["120", "132", "144", "156"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & Railway NTPC",
        explanation: "The sum of the first n odd numbers is n^2. Here n = 12, so 12^2 = 144.",
        explanationHi: "प्रथम n विषम प्राकृत संख्याओं का योग n^2 होता है। यहाँ n = 12 है, अतः 12^2 = 144।"
      },
      {
        id: 5,
        q: "In the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, ?, what is the next term?",
        qHi: "फिबोनाची अनुक्रम 1, 1, 2, 3, 5, 8, 13, 21, ? में अगला पद क्या होगा?",
        options: ["29", "31", "34", "36"],
        optionsHi: ["29", "31", "34", "36"],
        ans: 2,
        pyqRef: "CSAT & Banking Reasoning Aptitude",
        explanation: "In Fibonacci series, each term is the sum of the previous two terms: 13 + 21 = 34.",
        explanationHi: "फिबोनाची अनुक्रम में प्रत्येक पद पिछले दो पदों का योग होता है: 13 + 21 = 34।"
      },
      {
        id: 6,
        q: "What is the 7th triangular number (T7)?",
        qHi: "7वीं त्रिकोणीय संख्या (T7) क्या होगी?",
        options: ["21", "28", "35", "36"],
        optionsHi: ["21", "28", "35", "36"],
        ans: 1,
        pyqRef: "CTET Paper 2 Maths",
        explanation: "T7 = 7 * (7 + 1) / 2 = 7 * 8 / 2 = 28.",
        explanationHi: "T7 = 7 * (7 + 1) / 2 = 7 * 8 / 2 = 28।"
      },
      {
        id: 7,
        q: "Look at the pattern: 1 = 1^3, 3 + 5 = 2^3 = 8, 7 + 9 + 11 = 3^3 = 27. What is the sum of the next row of 4 consecutive odd numbers (13 + 15 + 17 + 19)?",
        qHi: "पैटर्न देखें: 1 = 1^3, 3 + 5 = 2^3 = 8, 7 + 9 + 11 = 3^3 = 27। अगली पंक्ति की 4 क्रमागत विषम संख्याओं (13 + 15 + 17 + 19) का योग क्या होगा?",
        options: ["48", "64 (4^3)", "72", "81"],
        optionsHi: ["48", "64 (4^3)", "72", "81"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & DSSSB",
        explanation: "The sum of n consecutive odd numbers in the n-th row equals n^3. For n = 4: 13 + 15 + 17 + 19 = 64 = 4^3.",
        explanationHi: "n-वीं पंक्ति में n क्रमागत विषम संख्याओं का योग n^3 होता है। n = 4 के लिए: 13 + 15 + 17 + 19 = 64 = 4^3।"
      },
      {
        id: 8,
        q: "Which of the following numbers is BOTH a triangular number and a square number?",
        qHi: "निम्नलिखित में से कौन-सी संख्या त्रिकोणीय संख्या और वर्ग संख्या दोनों है?",
        options: ["16", "25", "36", "49"],
        optionsHi: ["16", "25", "36", "49"],
        ans: 2,
        pyqRef: "Olympiad & CTET Paper 2",
        explanation: "36 = 6^2 (square number) and T8 = (8 * 9)/2 = 36 (triangular number).",
        explanationHi: "36 = 6^2 (वर्ग संख्या) तथा T8 = (8 * 9)/2 = 36 (त्रिकोणीय संख्या) है।"
      },
      {
        id: 9,
        q: "In the sequence of hexagonal numbers: 1, 7, 19, 37, 61, ..., what is the next number?",
        qHi: "षट्कोणीय संख्याओं के अनुक्रम 1, 7, 19, 37, 61, ... में अगला पद क्या होगा?",
        options: ["81", "85", "91", "97"],
        optionsHi: ["81", "85", "91", "97"],
        ans: 2,
        pyqRef: "CSAT & SSC CGL",
        explanation: "The differences are +6, +12, +18, +24, +30. So 61 + 30 = 91.",
        explanationHi: "पदों के बीच का अंतर +6, +12, +18, +24, +30 (6 के गुणज) है। अतः 61 + 30 = 91।"
      },
      {
        id: 10,
        q: "How many dots are in the 6th square number pattern (S6)?",
        qHi: "6ठे वर्ग संख्या पैटर्न (S6) में कुल कितने बिंदु होंगे?",
        options: ["24", "30", "36", "42"],
        optionsHi: ["24", "30", "36", "42"],
        ans: 2,
        pyqRef: "BPSC TRE Primary/Middle",
        explanation: "S6 = 6^2 = 36 dots arranged in a 6x6 grid.",
        explanationHi: "S6 = 6^2 = 36 बिंदु, जो 6x6 की ग्रिड में व्यवस्थित होते हैं।"
      },
      {
        id: 11,
        q: "What is the value of T1 + T2 + T3?",
        qHi: "T1 + T2 + T3 का कुल मान क्या होगा?",
        options: ["9", "10", "12", "15"],
        optionsHi: ["9", "10", "12", "15"],
        ans: 1,
        pyqRef: "State TET & KVS PRT",
        explanation: "T1 = 1, T2 = 3, T3 = 6. 1 + 3 + 6 = 10.",
        explanationHi: "T1 = 1, T2 = 3, T3 = 6। अतः 1 + 3 + 6 = 10।"
      },
      {
        id: 12,
        q: "If 11^2 = 121 and 111^2 = 12321, what is the value of 1111^2?",
        qHi: "यदि 11^2 = 121 और 111^2 = 12321 है, तो 1111^2 का मान क्या होगा?",
        options: ["123421", "1234321", "12344321", "123321"],
        optionsHi: ["123421", "1234321", "12344321", "123321"],
        ans: 1,
        pyqRef: "SSC CHSL & Railway Group D",
        explanation: "Palindromic squaring pattern: with 4 ones, the digits ascend to 4 and then descend: 1234321.",
        explanationHi: "पैलिंड्रोमिक वर्ग पैटर्न: 4 इकाई अंकों के लिए अंक 4 तक बढ़ते हैं और फिर घटते हैं: 1234321।"
      },
      {
        id: 13,
        q: "What is the difference between the 8th triangular number and the 7th triangular number (T8 - T7)?",
        qHi: "8वीं त्रिकोणीय संख्या और 7वीं त्रिकोणीय संख्या का अंतर (T8 - T7) क्या होगा?",
        options: ["7", "8", "9", "15"],
        optionsHi: ["7", "8", "9", "15"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "By definition, Tn - Tn-1 = n. For n = 8, T8 - T7 = 8 (Since T8 = 36 and T7 = 28, 36 - 28 = 8).",
        explanationHi: "परिभाषानुसार, Tn - Tn-1 = n होता है। n = 8 के लिए, T8 - T7 = 8 (चूँकि T8 = 36 और T7 = 28, 36 - 28 = 8)।"
      },
      {
        id: 14,
        q: "How many lines of dots are added to convert T9 into T10?",
        qHi: "T9 को T10 में बदलने के लिए कितने बिंदुओं की नई पंक्ति जोड़ी जाती है?",
        options: ["9 dots", "10 dots", "11 dots", "19 dots"],
        optionsHi: ["9 बिंदु", "10 बिंदु", "11 बिंदु", "19 बिंदु"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "To build the 10th triangular number from the 9th, a base row of 10 dots is added.",
        explanationHi: "9वीं त्रिकोणीय संख्या से 10वीं त्रिकोणीय संख्या बनाने के लिए आधार में 10 बिंदुओं की एक पंक्ति जोड़ी जाती है।"
      },
      {
        id: 15,
        q: "What is the sum of all natural numbers from 1 to 20?",
        qHi: "1 से 20 तक की सभी प्राकृत संख्याओं का योग क्या है?",
        options: ["190", "200", "210", "220"],
        optionsHi: ["190", "200", "210", "220"],
        ans: 2,
        pyqRef: "BPSC TRE & Bihar Police SI",
        explanation: "Sum = T20 = 20 * 21 / 2 = 210.",
        explanationHi: "योग = T20 = 20 * 21 / 2 = 210।"
      },
      {
        id: 16,
        q: "Which Indian mathematician/Fields Medalist contributed Chapter 1 'Patterns in Mathematics' to NCERT Ganita Prakash?",
        qHi: "किस भारतीय गणितज्ञ/फील्ड्स मेडलिस्ट ने एनसीईआरटी गणित प्रकाश के प्रथम अध्याय 'गणित में पैटर्न' का लेखन व योगदान दिया?",
        options: ["Srinivasa Ramanujan", "Prof. Manjul Bhargava", "Prof. C.R. Rao", "Shakuntala Devi"],
        optionsHi: ["श्रीनिवास रामानुजन", "प्रो. मंजुल भार्गव", "प्रो. सी.आर. राव", "शकुंतला देवी"],
        ans: 1,
        pyqRef: "Teaching Exams Pedagogy & NEP 2020 GK",
        explanation: "Fields Medalist Prof. Manjul Bhargava composed Chapter 1 'Patterns in Mathematics' for Class 6 NCERT.",
        explanationHi: "फील्ड्स मेडल विजेता प्रो. मंजुल भार्गव ने कक्षा 6 एनसीईआरटी के लिए अध्याय 1 'गणित में पैटर्न' लिखा है।"
      },
      {
        id: 17,
        q: "Look at the pattern: 9 * 9 + 7 = 88; 98 * 9 + 6 = 888; 987 * 9 + 5 = 8888. What is the value of 9876 * 9 + 4?",
        qHi: "पैटर्न देखें: 9 * 9 + 7 = 88; 98 * 9 + 6 = 888; 987 * 9 + 5 = 8888। 9876 * 9 + 4 का मान क्या होगा?",
        options: ["88884", "88888", "888888", "88988"],
        optionsHi: ["88884", "88888", "888888", "88988"],
        ans: 1,
        pyqRef: "CSAT & Banking Aptitude",
        explanation: "Each step adds another digit 8: 9876 * 9 + 4 = 88888 (five eights).",
        explanationHi: "प्रत्येक चरण में एक और 8 जुड़ता है: 9876 * 9 + 4 = 88888 (पाँच बार 8)।"
      },
      {
        id: 18,
        q: "What is the 5th term of a sequence where the first term is 3 and each subsequent term is multiplied by 2 and then increased by 1?",
        qHi: "एक अनुक्रम का 5वाँ पद क्या होगा जहाँ प्रथम पद 3 है और प्रत्येक अगला पद 2 से गुणा करके 1 जोड़ने पर प्राप्त होता है?",
        options: ["31", "63", "71", "127"],
        optionsHi: ["31", "63", "71", "127"],
        ans: 1,
        pyqRef: "SSC CGL Tier 1",
        explanation: "Term 1 = 3; Term 2 = 3*2+1 = 7; Term 3 = 7*2+1 = 15; Term 4 = 15*2+1 = 31; Term 5 = 31*2+1 = 63.",
        explanationHi: "पद 1 = 3; पद 2 = 3*2+1 = 7; पद 3 = 7*2+1 = 15; पद 4 = 15*2+1 = 31; पद 5 = 31*2+1 = 63।"
      },
      {
        id: 19,
        q: "What is the sum of two consecutive square numbers 3^2 and 4^2?",
        qHi: "दो क्रमागत वर्ग संख्याओं 3^2 और 4^2 का योग क्या होगा?",
        options: ["20", "25 (5^2)", "30", "49"],
        optionsHi: ["20", "25 (5^2)", "30", "49"],
        ans: 1,
        pyqRef: "CTET Paper 2 (Pythagorean Triplets)",
        explanation: "3^2 + 4^2 = 9 + 16 = 25 = 5^2. This forms the classic Pythagorean triplet (3, 4, 5).",
        explanationHi: "3^2 + 4^2 = 9 + 16 = 25 = 5^2। यह प्रसिद्ध पाइथागोरस त्रिक (3, 4, 5) बनाता है।"
      },
      {
        id: 20,
        q: "If Tn = 78, what is the value of n?",
        qHi: "यदि त्रिकोणीय संख्या Tn = 78 है, तो n का मान क्या है?",
        options: ["11", "12", "13", "14"],
        optionsHi: ["11", "12", "13", "14"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "n(n + 1)/2 = 78 => n(n + 1) = 156. Since 12 * 13 = 156, n = 12.",
        explanationHi: "n(n + 1)/2 = 78 => n(n + 1) = 156। चूँकि 12 * 13 = 156, अतः n = 12।"
      },
      {
        id: 21,
        q: "How many non-square numbers lie between 10^2 and 11^2?",
        qHi: "10^2 और 11^2 के बीच कितनी गैर-वर्ग (non-square) संख्याएँ स्थित हैं?",
        options: ["19", "20", "21", "22"],
        optionsHi: ["19", "20", "21", "22"],
        ans: 1,
        pyqRef: "CTET Paper 2 & NCERT Exemplar",
        explanation: "Between n^2 and (n+1)^2, there are always 2n non-square numbers. For n = 10: 2 * 10 = 20 numbers (from 101 to 120).",
        explanationHi: "n^2 और (n+1)^2 के बीच सदैव 2n गैर-वर्ग संख्याएँ होती हैं। n = 10 के लिए: 2 * 10 = 20 संख्याएँ (101 से 120 तक)।"
      },
      {
        id: 22,
        q: "What is the sum of the digits of the square of 11111?",
        qHi: "11111 के वर्ग के अंकों का योग क्या होगा?",
        options: ["20", "25", "30", "36"],
        optionsHi: ["20", "25", "30", "36"],
        ans: 1,
        pyqRef: "SSC CGL / Railway NTPC",
        explanation: "11111^2 = 123454321. Sum of digits = 1 + 2 + 3 + 4 + 5 + 4 + 3 + 2 + 1 = 25 (which is 5^2).",
        explanationHi: "11111^2 = 123454321। अंकों का योग = 1 + 2 + 3 + 4 + 5 + 4 + 3 + 2 + 1 = 25 (जो कि 5^2 है)।"
      },
      {
        id: 23,
        q: "Which term of the Fibonacci sequence is 55? (Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55)",
        qHi: "फिबोनाची अनुक्रम (1, 1, 2, 3, 5, 8, 13, 21, 34, 55) में 55 कौन-सा पद है?",
        options: ["8th term", "9th term", "10th term", "11th term"],
        optionsHi: ["8वाँ पद", "9वाँ पद", "10वाँ पद", "11वाँ पद"],
        ans: 2,
        pyqRef: "CSAT & State TET",
        explanation: "F1=1, F2=1, F3=2, F4=3, F5=5, F6=8, F7=13, F8=21, F9=34, F10=55. It is the 10th term.",
        explanationHi: "F1=1, F2=1, F3=2, F4=3, F5=5, F6=8, F7=13, F8=21, F9=34, F10=55। यह 10वाँ पद है।"
      },
      {
        id: 24,
        q: "What is the units digit of the square of any number ending in 7?",
        qHi: "7 पर समाप्त होने वाली किसी भी संख्या के वर्ग का इकाई अंक क्या होगा?",
        options: ["3", "7", "9", "1"],
        optionsHi: ["3", "7", "9", "1"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "7 * 7 = 49, so the unit digit is always 9.",
        explanationHi: "7 * 7 = 49, अतः इकाई का अंक सदैव 9 होगा।"
      },
      {
        id: 25,
        q: "In an arithmetic pattern: 5, 11, 17, 23, ..., what is the 20th term?",
        qHi: "एक समांतर पैटर्न 5, 11, 17, 23, ... में 20वाँ पद क्या होगा?",
        options: ["115", "119", "125", "131"],
        optionsHi: ["115", "119", "125", "131"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "a = 5, d = 6. a20 = a + (n - 1)d = 5 + 19 * 6 = 5 + 114 = 119.",
        explanationHi: "a = 5, d = 6। a20 = a + (n - 1)d = 5 + 19 * 6 = 5 + 114 = 119।"
      },
      {
        id: 26,
        q: "Can a perfect square number ever end in the digit 2, 3, 7, or 8?",
        qHi: "क्या कोई पूर्ण वर्ग संख्या कभी 2, 3, 7 या 8 के अंक पर समाप्त हो सकती है?",
        options: ["Yes, always", "No, never", "Only if it is odd", "Only if it is even"],
        optionsHi: ["हाँ, सदैव", "नहीं, कभी नहीं", "केवल यदि वह विषम हो", "केवल यदि वह सम हो"],
        ans: 1,
        pyqRef: "CTET Paper 2 & UPTET",
        explanation: "No square of any integer ends in 2, 3, 7, or 8. Squares only end in 0, 1, 4, 5, 6, or 9.",
        explanationHi: "किसी भी पूर्णांक का वर्ग कभी भी 2, 3, 7 या 8 पर समाप्त नहीं हो सकता। वर्ग केवल 0, 1, 4, 5, 6 या 9 पर समाप्त होते हैं।"
      },
      {
        id: 27,
        q: "What is the sum of the first 15 natural numbers?",
        qHi: "प्रथम 15 प्राकृत संख्याओं का योग क्या होगा?",
        options: ["105", "115", "120", "135"],
        optionsHi: ["105", "115", "120", "135"],
        ans: 2,
        pyqRef: "Railway NTPC & SSC CHSL",
        explanation: "Sum = 15 * 16 / 2 = 120.",
        explanationHi: "योग = 15 * 16 / 2 = 120।"
      },
      {
        id: 28,
        q: "Look at the pattern: 1*8+1=9; 12*8+2=98; 123*8+3=987. What will 12345*8+5 evaluate to?",
        qHi: "पैटर्न देखें: 1*8+1=9; 12*8+2=98; 123*8+3=987। 12345*8+5 का मान क्या होगा?",
        options: ["9876", "98765", "987654", "99765"],
        optionsHi: ["9876", "98765", "987654", "99765"],
        ans: 1,
        pyqRef: "CSAT & State PCS",
        explanation: "Following the descending digit pattern, 12345 * 8 + 5 = 98765.",
        explanationHi: "घटते अंकों के पैटर्न के अनुसार, 12345 * 8 + 5 = 98765।"
      },
      {
        id: 29,
        q: "What is the ratio of T4 to T3?",
        qHi: "T4 और T3 का अनुपात क्या होगा?",
        options: ["5 : 3", "3 : 2", "4 : 3", "5 : 4"],
        optionsHi: ["5 : 3", "3 : 2", "4 : 3", "5 : 4"],
        ans: 0,
        pyqRef: "BPSC TRE 4.0 Middle",
        explanation: "T4 = 10, T3 = 6. Ratio = 10/6 = 5/3 = 5 : 3.",
        explanationHi: "T4 = 10, T3 = 6। अनुपात = 10/6 = 5/3 = 5 : 3।"
      },
      {
        id: 30,
        q: "How many triangular numbers are less than 20?",
        qHi: "20 से छोटी कितनी त्रिकोणीय संख्याएँ हैं?",
        options: ["4", "5", "6", "7"],
        optionsHi: ["4", "5", "6", "7"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Olympiad",
        explanation: "The triangular numbers are 1, 3, 6, 10, 15 (which is 5 numbers, since the next is 21 > 20).",
        explanationHi: "20 से छोटी त्रिकोणीय संख्याएँ हैं: 1, 3, 6, 10, 15 (कुल 5 संख्याएँ, क्योंकि अगली संख्या 21 > 20 है)।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 2: Lines and Angles
  // ==========================================
  {
    id: "ncert-c6-m02",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 2,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 2: Lines and Angles (रेखाएँ और कोण)",
    titleHi: "अध्याय 2: रेखाएँ और कोण",
    readingTime: "20 mins read",
    badge: "Geometry Foundation",
    desc: "Master fundamental geometric elements: points, line segments, rays, lines, parallel & intersecting lines, types of angles (acute, right, obtuse, straight, reflex, complete), complementary and supplementary angles, and clock hand calculations.",
    descHi: "ज्यामिति के आधारभूत तत्व: बिंदु, रेखाखंड, किरण, रेखा, समांतर व प्रतिच्छेदी रेखाएँ, कोणों के प्रकार (न्यूनकोण, समकोण, अधिककोण, ऋजुकोण, प्रतिवर्ती कोण, सम्पूर्ण कोण), पूरक व संपूरक कोण तथा घड़ी की सुइयों के कोणों की सटीक समझ।",
    competitionEdge: "Heavily asked in CTET Paper 2, BPSC TRE Middle, SSC CHSL, and Railways. Direct formula questions on clock angle theta = |30H - 5.5M| and complementary/supplementary angle pairs.",
    competitionEdgeHi: "CTET पेपर 2, BPSC TRE 6-8, SSC CHSL और रेलवे में अनिवार्य रूप से पूछा जाने वाला अध्याय। पूरक/संपूरक कोणों के समीकरण और घड़ी की सुइयों के बीच के कोण (|30H - 5.5M|) पर सीधे प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. Basic Geometric Entities: Points, Segments, Rays & Lines",
        headingHi: "1. आधारभूत ज्यामितीय इकाइयाँ: बिंदु, रेखाखंड, किरण एवं रेखा",
        contentHtml: `
          <p>Geometry begins with the point and develops into infinite space:</p>
          <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.88rem; text-align:left;">
            <tr style="background:#eef2ff;">
              <th style="border:1px solid #cbd5e1; padding:6px;">Entity</th>
              <th style="border:1px solid #cbd5e1; padding:6px;">Notation</th>
              <th style="border:1px solid #cbd5e1; padding:6px;">Endpoints</th>
              <th style="border:1px solid #cbd5e1; padding:6px;">Definite Length?</th>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Point (बिंदु)</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">A, P</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">0</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">No (zero dimensions)</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Line Segment (रेखाखंड)</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">AB</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">2</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Yes (can be measured)</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Ray (किरण)</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Ray AB (A = initial pt)</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">1</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">No (extends infinitely in 1 direction)</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Line (रेखा)</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Line AB or l</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">0</td>
              <td style="border:1px solid #cbd5e1; padding:6px;">No (extends infinitely both ways)</td>
            </tr>
          </table>
        `,
        contentHtmlHi: `
          <p>ज्यामिति की शुरुआत बिंदु से होती है और यह अनंत विस्तार तक जाती है:</p>
          <div class="note-formula-box">
            <h4>📐 इकाइयों का तुलनात्मक विवरण:</h4>
            <ul>
              <li><strong>बिंदु (Point):</strong> केवल स्थिति दर्शाता है; लंबाई, चौड़ाई या मोटाई शून्य होती है।</li>
              <li><strong>रेखाखंड (Line Segment):</strong> दो अंत बिंदुओं के बीच की निश्चित दूरी, जिसे मापा जा सकता है।</li>
              <li><strong>किरण (Ray):</strong> एक अंत बिंदु (प्रारंभिक बिंदु) से शुरू होकर एक ही दिशा में अनंत तक जाती है (जैसे सूर्य की किरण)।</li>
              <li><strong>रेखा (Line):</strong> दोनों दिशाओं में बिना किसी अंत बिंदु के अनंत रूप से बढ़ती है।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Classification of Angles & Angle Pairs",
        headingHi: "2. कोणों का वर्गीकरण एवं विशेष कोण युग्म",
        contentHtml: `
          <div class="note-formula-box">
            <h4>📏 Types of Angles based on Measure:</h4>
            <ul>
              <li><strong>Acute Angle (न्यूनकोण):</strong> 0&deg; &lt; &theta; &lt; 90&deg;</li>
              <li><strong>Right Angle (समकोण):</strong> &theta; = 90&deg; (1/4 of a full revolution)</li>
              <li><strong>Obtuse Angle (अधिककोण):</strong> 90&deg; &lt; &theta; &lt; 180&deg;</li>
              <li><strong>Straight Angle (ऋजुकोण):</strong> &theta; = 180&deg; (1/2 revolution, a straight line)</li>
              <li><strong>Reflex Angle (प्रतिवर्ती कोण):</strong> 180&deg; &lt; &theta; &lt; 360&deg;</li>
              <li><strong>Complete Angle (सम्पूर्ण कोण):</strong> &theta; = 360&deg; (1 full revolution)</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>⚡ Essential Angle Pairs for Competitive Exams:</h4>
            <ul>
              <li><strong>Complementary Angles (पूरक / कोटिपूरक कोण):</strong> Sum of two angles = <strong>90&deg;</strong>. (If &theta; = 35&deg;, its complement is 90&deg; - 35&deg; = 55&deg;).</li>
              <li><strong>Supplementary Angles (संपूरक कोण):</strong> Sum of two angles = <strong>180&deg;</strong>. (If &theta; = 110&deg;, its supplement is 180&deg; - 110&deg; = 70&deg;).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>📏 माप के आधार पर कोणों के प्रकार:</h4>
            <ul>
              <li><strong>न्यूनकोण (Acute Angle):</strong> 0&deg; से अधिक और 90&deg; से कम।</li>
              <li><strong>समकोण (Right Angle):</strong> ठीक 90&deg; (एक पूर्ण घूर्णन का 1/4 भाग)।</li>
              <li><strong>अधिककोण (Obtuse Angle):</strong> 90&deg; से अधिक और 180&deg; से कम।</li>
              <li><strong>ऋजुकोण (Straight Angle):</strong> ठीक 180&deg; (एक सीधी रेखा, 1/2 घूर्णन)।</li>
              <li><strong>प्रतिवर्ती कोण (Reflex Angle):</strong> 180&deg; से अधिक और 360&deg; से कम।</li>
              <li><strong>सम्पूर्ण कोण (Complete Angle):</strong> ठीक 360&deg; (एक पूर्ण चक्कर)।</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>⚡ प्रतियोगी परीक्षाओं के मुख्य कोण युग्म:</h4>
            <ul>
              <li><strong>पूरक कोण (Complementary):</strong> जिन दो कोणों का योग <strong>90&deg;</strong> हो (उदा. 40&deg; का पूरक = 90&deg; - 40&deg; = 50&deg;)।</li>
              <li><strong>संपूरक कोण (Supplementary):</strong> जिन दो कोणों का योग <strong>180&deg;</strong> हो (उदा. 125&deg; का संपूरक = 180&deg; - 125&deg; = 55&deg;)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Clocks & Angle Speed Calculations",
        headingHi: "3. घड़ी की सुइयाँ एवं कोण गणना के नियम",
        contentHtml: `
          <p>A clock face is divided into 12 hour divisions and 60 minute divisions:</p>
          <ul>
            <li><strong>Minute Hand:</strong> Rotates 360&deg; in 60 minutes &rarr; <strong>6&deg; per minute</strong>.</li>
            <li><strong>Hour Hand:</strong> Rotates 360&deg; in 12 hours (720 min) &rarr; <strong>30&deg; per hour = 0.5&deg; per minute</strong>.</li>
            <li><strong>Relative Speed:</strong> Minute hand gains 6&deg; - 0.5&deg; = <strong>5.5&deg; (11/2)&deg; per minute</strong> over hour hand.</li>
          </ul>
          <div class="note-formula-box">
            <h4>⚡ Universal Clock Angle Formula:</h4>
            <p style="text-align:center; font-size:1.15rem; font-weight:800; color:#dc2626;">Angle (&theta;) = |30H - 5.5M|</p>
            <p><strong>Example:</strong> At 3:40, &theta; = |30(3) - 5.5(40)| = |90 - 220| = |-130| = <strong>130&deg;</strong>.</p>
          </div>
        `,
        contentHtmlHi: `
          <p>घड़ी का डायल 12 घंटे और 60 मिनट के विभाजनों में बंटा होता है:</p>
          <ul>
            <li><strong>मिनट की सुई:</strong> 60 मिनट में 360&deg; घूमती है &rarr; <strong>6&deg; प्रति मिनट</strong>।</li>
            <li><strong>घंटे की सुई:</strong> 12 घंटे (720 मिनट) में 360&deg; घूमती है &rarr; <strong>30&deg; प्रति घंटा = 0.5&deg; प्रति मिनट</strong>।</li>
            <li><strong>सापेक्ष गति:</strong> मिनट की सुई घंटे की सुई से प्रति मिनट 6&deg; - 0.5&deg; = <strong>5.5&deg; (11/2)&deg;</strong> आगे निकलती है।</li>
          </ul>
          <div class="note-formula-box">
            <h4>⚡ सार्वभौमिक घड़ी कोण सूत्र:</h4>
            <p style="text-align:center; font-size:1.15rem; font-weight:800; color:#dc2626;">कोण (&theta;) = |30H - 5.5M|</p>
            <p><strong>उदाहरण:</strong> 3:40 पर, &theta; = |30(3) - 5.5(40)| = |90 - 220| = <strong>130&deg;</strong>।</p>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the complement of an angle measuring 38 degrees?",
        qHi: "38 डिग्री के कोण का पूरक (कोटिकपूरक) कोण क्या होगा?",
        options: ["42 degrees", "52 degrees", "142 degrees", "62 degrees"],
        optionsHi: ["42 डिग्री", "52 डिग्री", "142 डिग्री", "62 डिग्री"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "Complementary angles sum to 90 degrees. 90 - 38 = 52 degrees.",
        explanationHi: "पूरक कोणों का योग 90 डिग्री होता है। 90 - 38 = 52 डिग्री।"
      },
      {
        id: 2,
        q: "What is the supplement of an angle measuring 115 degrees?",
        qHi: "115 डिग्री के कोण का संपूरक कोण क्या होगा?",
        options: ["65 degrees", "75 degrees", "85 degrees", "245 degrees"],
        optionsHi: ["65 डिग्री", "75 डिग्री", "85 डिग्री", "245 डिग्री"],
        ans: 0,
        pyqRef: "CTET Paper 2 & UPTET Paper 2",
        explanation: "Supplementary angles sum to 180 degrees. 180 - 115 = 65 degrees.",
        explanationHi: "संपूरक कोणों का योग 180 डिग्री होता है। 180 - 115 = 65 डिग्री।"
      },
      {
        id: 3,
        q: "An angle is equal to its own supplement. What is the measure of this angle?",
        qHi: "एक कोण अपने संपूरक कोण के बराबर है। उस कोण का माप क्या है?",
        options: ["45 degrees", "60 degrees", "90 degrees", "180 degrees"],
        optionsHi: ["45 डिग्री", "60 डिग्री", "90 डिग्री", "180 डिग्री"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Let the angle be x. x + x = 180 => 2x = 180 => x = 90 degrees.",
        explanationHi: "माना कोण x है। x + x = 180 => 2x = 180 => x = 90 डिग्री।"
      },
      {
        id: 4,
        q: "An angle is equal to its own complement. What is its measure?",
        qHi: "एक कोण अपने पूरक कोण के बराबर है। इसका माप क्या है?",
        options: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
        optionsHi: ["30 डिग्री", "45 डिग्री", "60 डिग्री", "90 डिग्री"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "x + x = 90 => 2x = 90 => x = 45 degrees.",
        explanationHi: "x + x = 90 => 2x = 90 => x = 45 डिग्री।"
      },
      {
        id: 5,
        q: "At 3:00 o'clock, what angle is formed between the hour hand and minute hand of a clock?",
        qHi: "घड़ी में 3:00 बजे घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनता है?",
        options: ["60 degrees", "90 degrees", "120 degrees", "180 degrees"],
        optionsHi: ["60 डिग्री", "90 डिग्री", "120 डिग्री", "180 डिग्री"],
        ans: 1,
        pyqRef: "Railway NTPC & SSC CHSL",
        explanation: "At 3:00, the hour hand is at 3 and minute hand at 12. Angle = 3 * 30 = 90 degrees (a right angle).",
        explanationHi: "3:00 बजे घंटे की सुई 3 पर और मिनट की सुई 12 पर होती है। कोण = 3 * 30 = 90 डिग्री (समकोण)।"
      },
      {
        id: 6,
        q: "What angle is formed between the clock hands at 3:40?",
        qHi: "घड़ी में 3:40 पर दोनों सुइयों के बीच कितने डिग्री का कोण बनेगा?",
        options: ["120 degrees", "130 degrees", "140 degrees", "150 degrees"],
        optionsHi: ["120 डिग्री", "130 डिग्री", "140 डिग्री", "150 डिग्री"],
        ans: 1,
        pyqRef: "CSAT & Banking Aptitude",
        explanation: "Formula: |30H - 5.5M| = |30*3 - 5.5*40| = |90 - 220| = 130 degrees.",
        explanationHi: "सूत्र: |30H - 5.5M| = |30*3 - 5.5*40| = |90 - 220| = 130 डिग्री।"
      },
      {
        id: 7,
        q: "How many degrees does the minute hand turn in 25 minutes?",
        qHi: "मिनट की सुई 25 मिनट में कितने डिग्री का कोण बनाती है?",
        options: ["120 degrees", "150 degrees", "175 degrees", "180 degrees"],
        optionsHi: ["120 डिग्री", "150 डिग्री", "175 डिग्री", "180 डिग्री"],
        ans: 1,
        pyqRef: "BPSC TRE Primary & Middle",
        explanation: "Minute hand turns 6 degrees in 1 minute. In 25 minutes, it turns 25 * 6 = 150 degrees.",
        explanationHi: "मिनट की सुई 1 मिनट में 6 डिग्री घूमती है। 25 मिनट में = 25 * 6 = 150 डिग्री।"
      },
      {
        id: 8,
        q: "How many endpoints does a ray have?",
        qHi: "एक किरण (Ray) के कितने अंत बिंदु (endpoints) होते हैं?",
        options: ["0", "1", "2", "Infinitely many"],
        optionsHi: ["0", "1", "2", "अनंत"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 Geometry",
        explanation: "A ray has exactly 1 initial/end point, and extends endlessly in one direction.",
        explanationHi: "किरण का ठीक 1 अंत बिंदु (प्रारंभिक बिंदु) होता है, और यह एक दिशा में असीमित रूप से बढ़ती है।"
      },
      {
        id: 9,
        q: "An angle measuring 245 degrees is classified as which type of angle?",
        qHi: "245 डिग्री माप वाले कोण को किस प्रकार का कोण कहा जाता है?",
        options: ["Obtuse angle", "Straight angle", "Reflex angle", "Complete angle"],
        optionsHi: ["अधिककोण", "ऋजुकोण", "प्रतिवर्ती कोण", "सम्पूर्ण कोण"],
        ans: 2,
        pyqRef: "CTET Paper 2 & KVS TGT",
        explanation: "An angle strictly greater than 180 degrees and less than 360 degrees is a Reflex Angle.",
        explanationHi: "180 डिग्री से अधिक और 360 डिग्री से कम माप वाले कोण को प्रतिवर्ती कोण (Reflex Angle) कहते हैं।"
      },
      {
        id: 10,
        q: "Two angles are supplementary and in the ratio 2 : 3. What is the measure of the smaller angle?",
        qHi: "दो संपूरक कोणों का अनुपात 2 : 3 है। छोटे कोण का माप क्या होगा?",
        options: ["36 degrees", "54 degrees", "72 degrees", "108 degrees"],
        optionsHi: ["36 डिग्री", "54 डिग्री", "72 डिग्री", "108 डिग्री"],
        ans: 2,
        pyqRef: "SSC CHSL & BPSC TRE Middle School",
        explanation: "2x + 3x = 180 => 5x = 180 => x = 36. Smaller angle = 2 * 36 = 72 degrees.",
        explanationHi: "2x + 3x = 180 => 5x = 180 => x = 36। छोटा कोण = 2 * 36 = 72 डिग्री।"
      },
      {
        id: 11,
        q: "Two angles are complementary and their difference is 20 degrees. What are the angles?",
        qHi: "दो पूरक कोणों का अंतर 20 डिग्री है। वे कोण क्या होंगे?",
        options: ["30° and 50°", "35° and 55°", "40° and 60°", "45° and 65°"],
        optionsHi: ["30° और 50°", "35° और 55°", "40° और 60°", "45° और 65°"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "x + y = 90 and x - y = 20. Adding gives 2x = 110 => x = 55°, y = 35°.",
        explanationHi: "x + y = 90 और x - y = 20। जोड़ने पर 2x = 110 => x = 55° तथा y = 35°।"
      },
      {
        id: 12,
        q: "How many lines can pass through two distinct given points in a plane?",
        qHi: "समतल में दिए गए दो भिन्न बिंदुओं से होकर कितनी रेखाएँ गुजर सकती हैं?",
        options: ["Exactly one", "Exactly two", "Zero", "Infinitely many"],
        optionsHi: ["केवल और केवल एक", "ठीक दो", "शून्य", "अनंत"],
        ans: 0,
        pyqRef: "BPSC TRE & CTET Paper 2",
        explanation: "Through any two distinct points in a plane, exactly one unique straight line can pass.",
        explanationHi: "समतल में किन्हीं दो भिन्न बिंदुओं से होकर केवल और केवल एक अद्वितीय सीधी रेखा गुजर सकती है।"
      },
      {
        id: 13,
        q: "How many lines can pass through a single given point?",
        qHi: "एक ही दिए गए बिंदु से होकर कुल कितनी रेखाएँ गुजर सकती हैं?",
        options: ["Only 1", "Only 2", "Only 4", "Infinitely many"],
        optionsHi: ["केवल 1", "केवल 2", "केवल 4", "अनंत"],
        ans: 3,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Infinitely many lines can pass through a single point (forming a pencil of rays/concurrent lines).",
        explanationHi: "एक ही बिंदु से होकर असीमित/अनंत रेखाएँ गुजर सकती हैं (जिन्हें संगामी रेखाएँ कहते हैं)।"
      },
      {
        id: 14,
        q: "What fraction of a full turn (360 degrees) is a right angle?",
        qHi: "एक समकोण (Right angle) एक पूरे घूर्णन (360 डिग्री) का कौन-सा भाग होता है?",
        options: ["1/2", "1/4", "1/3", "1/6"],
        optionsHi: ["1/2", "1/4", "1/3", "1/6"],
        ans: 1,
        pyqRef: "NCERT Class 6 Textbook & CTET",
        explanation: "Right angle = 90 degrees. Fraction = 90 / 360 = 1/4.",
        explanationHi: "समकोण = 90 डिग्री। भाग = 90 / 360 = 1/4।"
      },
      {
        id: 15,
        q: "At 6:00 o'clock, what angle is formed between the clock hands?",
        qHi: "घड़ी में 6:00 बजे दोनों सुइयों के बीच कितने डिग्री का कोण बनता है?",
        options: ["90 degrees", "120 degrees", "180 degrees (Straight angle)", "360 degrees"],
        optionsHi: ["90 डिग्री", "120 डिग्री", "180 डिग्री (ऋजुकोण)", "360 डिग्री"],
        ans: 2,
        pyqRef: "Railway Group D & SSC MTS",
        explanation: "At 6:00, hands point in exactly opposite directions forming a straight line = 180 degrees.",
        explanationHi: "6:00 बजे दोनों सुइयाँ ठीक विपरीत दिशाओं में होती हैं, जिससे 180 डिग्री (ऋजुकोण) बनता है।"
      },
      {
        id: 16,
        q: "If an angle is 30 degrees more than one-half of its complement, find the angle.",
        qHi: "यदि कोई कोण अपने पूरक कोण के आधे से 30 डिग्री अधिक है, तो वह कोण ज्ञात कीजिए।",
        options: ["40 degrees", "50 degrees", "60 degrees", "70 degrees"],
        optionsHi: ["40 डिग्री", "50 डिग्री", "60 डिग्री", "70 डिग्री"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & CDS",
        explanation: "Let the angle be x. x = (90 - x)/2 + 30 => 2x = 90 - x + 60 => 3x = 150 => x = 50 degrees.",
        explanationHi: "माना कोण x है। x = (90 - x)/2 + 30 => 2x = 90 - x + 60 => 3x = 150 => x = 50 डिग्री।"
      },
      {
        id: 17,
        q: "What is the angle between the North and South-East directions?",
        qHi: "उत्तर (North) और दक्षिण-पूर्व (South-East) दिशाओं के बीच कितने डिग्री का कोण होता है?",
        options: ["90 degrees", "120 degrees", "135 degrees", "145 degrees"],
        optionsHi: ["90 डिग्री", "120 डिग्री", "135 डिग्री", "145 डिग्री"],
        ans: 2,
        pyqRef: "Reasoning Direction Sense & CTET Paper 2",
        explanation: "North to East = 90 degrees. East to South-East = 45 degrees. Total = 90 + 45 = 135 degrees.",
        explanationHi: "उत्तर से पूर्व = 90 डिग्री। पूर्व से दक्षिण-पूर्व = 45 डिग्री। कुल = 90 + 45 = 135 डिग्री।"
      },
      {
        id: 18,
        q: "What is the angle between hands of a clock at 7:20?",
        qHi: "घड़ी में 7:20 पर दोनों सुइयों के बीच कितने डिग्री का कोण बनेगा?",
        options: ["90 degrees", "100 degrees", "110 degrees", "120 degrees"],
        optionsHi: ["90 डिग्री", "100 डिग्री", "110 डिग्री", "120 डिग्री"],
        ans: 1,
        pyqRef: "SSC CGL & Railway NTPC",
        explanation: "Angle = |30(7) - 5.5(20)| = |210 - 110| = 100 degrees.",
        explanationHi: "कोण = |30(7) - 5.5(20)| = |210 - 110| = 100 डिग्री।"
      },
      {
        id: 19,
        q: "How many right angles does the hour hand make when it turns from 12 to 9 clockwise?",
        qHi: "घड़ी की घंटे की सुई 12 से 9 तक दक्षिणावर्त घूमने में कितने समकोण बनाती है?",
        options: ["1 right angle", "2 right angles", "3 right angles", "4 right angles"],
        optionsHi: ["1 समकोण", "2 समकोण", "3 समकोण", "4 समकोण"],
        ans: 2,
        pyqRef: "NCERT Class 6 Exercise & CTET",
        explanation: "From 12 to 9 is 9 hours = 9 * 30 = 270 degrees. 270 / 90 = 3 right angles.",
        explanationHi: "12 से 9 तक 9 घंटे = 9 * 30 = 270 डिग्री। 270 / 90 = 3 समकोण।"
      },
      {
        id: 20,
        q: "Which instrument in geometry box is used to compare lengths of line segments accurately?",
        qHi: "ज्यामिति बॉक्स में रेखाखंडों की लंबाई की सटीक तुलना करने के लिए किस उपकरण का उपयोग किया जाता है?",
        options: ["Ruler only", "Divider", "Set-square", "Protractor"],
        optionsHi: ["केवल पैमाना (Ruler)", "विभाजक (Divider)", "सेट-स्क्वायर", "चाँदा (Protractor)"],
        ans: 1,
        pyqRef: "NCERT Chapter 2 & CTET Pedagogy",
        explanation: "NCERT specifies that a divider avoids errors due to the thickness of a ruler and positioning of the eye.",
        explanationHi: "एनसीईआरटी के अनुसार डिवाइडर (विभाजक) पैमाने की मोटाई और दृष्टि कोण के कारण होने वाली त्रुटि से बचाता है।"
      },
      {
        id: 21,
        q: "If two parallel lines are intersected by a transversal, the interior angles on the same side of transversal sum to:",
        qHi: "यदि दो समांतर रेखाओं को एक तिर्यक रेखा काटती है, तो तिर्यक रेखा के एक ही ओर के अंतःकोणों का योग कितना होता है?",
        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
        optionsHi: ["90 डिग्री", "180 डिग्री", "270 डिग्री", "360 डिग्री"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Consecutive interior angles on the same side of a transversal are supplementary (sum = 180 degrees).",
        explanationHi: "तिर्यक रेखा के एक ही ओर के क्रमागत अंतःकोण संपूरक होते हैं (योग = 180 डिग्री)।"
      },
      {
        id: 22,
        q: "An angle measuring 89.5 degrees is classified as:",
        qHi: "89.5 डिग्री माप वाले कोण का वर्गीकरण क्या होगा?",
        options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
        optionsHi: ["न्यूनकोण", "समकोण", "अधिककोण", "ऋजुकोण"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Any angle strictly less than 90 degrees (even 89.9°) is an acute angle.",
        explanationHi: "90 डिग्री से कम माप वाले किसी भी कोण को न्यूनकोण कहा जाता है।"
      },
      {
        id: 23,
        q: "What is the supplement of a right angle?",
        qHi: "एक समकोण का संपूरक कोण क्या होगा?",
        options: ["0 degrees", "45 degrees", "90 degrees", "180 degrees"],
        optionsHi: ["0 डिग्री", "45 डिग्री", "90 डिग्री", "180 डिग्री"],
        ans: 2,
        pyqRef: "State TET & KVS",
        explanation: "Supplement of 90 degrees = 180 - 90 = 90 degrees (another right angle).",
        explanationHi: "90 डिग्री का संपूरक = 180 - 90 = 90 डिग्री (स्वयं एक समकोण)।"
      },
      {
        id: 24,
        q: "How many degrees does the hour hand move in 12 minutes?",
        qHi: "घंटे की सुई 12 मिनट में कितने डिग्री घूमती है?",
        options: ["6 degrees", "12 degrees", "36 degrees", "72 degrees"],
        optionsHi: ["6 डिग्री", "12 डिग्री", "36 डिग्री", "72 डिग्री"],
        ans: 0,
        pyqRef: "Railway NTPC & SSC CHSL",
        explanation: "The hour hand moves at 0.5 degrees per minute. In 12 minutes: 12 * 0.5 = 6 degrees.",
        explanationHi: "घंटे की सुई प्रति मिनट 0.5 डिग्री घूमती है। 12 मिनट में: 12 * 0.5 = 6 डिग्री।"
      },
      {
        id: 25,
        q: "What is the reflex angle corresponding to an interior angle of 110 degrees?",
        qHi: "110 डिग्री के अंतःकोण का संगत प्रतिवर्ती कोण (Reflex angle) क्या होगा?",
        options: ["70 degrees", "200 degrees", "250 degrees", "290 degrees"],
        optionsHi: ["70 डिग्री", "200 डिग्री", "250 डिग्री", "290 डिग्री"],
        ans: 2,
        pyqRef: "BPSC TRE 4.0 Middle",
        explanation: "Reflex angle = 360 - 110 = 250 degrees.",
        explanationHi: "प्रतिवर्ती कोण = 360 - 110 = 250 डिग्री।"
      },
      {
        id: 26,
        q: "Points that lie on the exact same straight line are called:",
        qHi: "वे बिंदु जो एक ही सीधी रेखा पर स्थित होते हैं, क्या कहलाते हैं?",
        options: ["Coplanar points", "Collinear points", "Concurrent points", "Vertex points"],
        optionsHi: ["समतलीय बिंदु", "संरेख बिंदु (Collinear)", "संगामी बिंदु", "शीर्ष बिंदु"],
        ans: 1,
        pyqRef: "CTET Paper 2 & DSSSB",
        explanation: "Points lying on the same line are called collinear points.",
        explanationHi: "एक ही सीधी रेखा पर स्थित बिंदुओं को संरेख बिंदु (Collinear points) कहते हैं।"
      },
      {
        id: 27,
        q: "What is the measure of the angle between hands of a clock at 12:15?",
        qHi: "घड़ी में 12:15 पर दोनों सुइयों के बीच का कोण क्या होगा?",
        options: ["82.5 degrees", "85 degrees", "90 degrees", "97.5 degrees"],
        optionsHi: ["82.5 डिग्री", "85 डिग्री", "90 डिग्री", "97.5 डिग्री"],
        ans: 0,
        pyqRef: "CSAT & Banking Aptitude",
        explanation: "At 12:15, H = 12 (or 0). Minute hand is at 90°. Hour hand moved 15 * 0.5 = 7.5°. Angle = 90 - 7.5 = 82.5 degrees.",
        explanationHi: "12:15 पर मिनट की सुई 90° पर और घंटे की सुई 15 * 0.5 = 7.5° आगे बढ़ चुकी होती है। कोण = 90 - 7.5 = 82.5 डिग्री।"
      },
      {
        id: 28,
        q: "If an angle is five times its complement, what is the angle?",
        qHi: "यदि कोई कोण अपने पूरक कोण का पाँच गुना है, तो वह कोण क्या है?",
        options: ["15 degrees", "60 degrees", "75 degrees", "80 degrees"],
        optionsHi: ["15 डिग्री", "60 डिग्री", "75 डिग्री", "80 डिग्री"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "x = 5(90 - x) => x = 450 - 5x => 6x = 450 => x = 75 degrees.",
        explanationHi: "x = 5(90 - x) => x = 450 - 5x => 6x = 450 => x = 75 डिग्री।"
      },
      {
        id: 29,
        q: "How many lines of symmetry does a straight line segment have?",
        qHi: "एक रेखाखंड की कितनी सममिति रेखाएँ (lines of symmetry) होती हैं?",
        options: ["1", "2", "4", "Infinite"],
        optionsHi: ["1", "2", "4", "अनंत"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "A line segment has 2 lines of symmetry: the line itself containing the segment, and its perpendicular bisector.",
        explanationHi: "एक रेखाखंड की 2 सममिति रेखाएँ होती हैं: स्वयं रेखाखंड वाली रेखा तथा इसका लंब समद्विभाजक।"
      },
      {
        id: 30,
        q: "If angle A and angle B form a linear pair, and angle A = 2x + 10, angle B = 3x - 5, what is the value of x?",
        qHi: "यदि कोण A और B एक रैखिक युग्म बनाते हैं, और A = 2x + 10, B = 3x - 5 है, तो x का मान क्या होगा?",
        options: ["30", "35", "40", "45"],
        optionsHi: ["30", "35", "40", "45"],
        ans: 1,
        pyqRef: "SSC CHSL & BPSC TRE Middle",
        explanation: "(2x + 10) + (3x - 5) = 180 => 5x + 5 = 180 => 5x = 175 => x = 35.",
        explanationHi: "(2x + 10) + (3x - 5) = 180 => 5x + 5 = 180 => 5x = 175 => x = 35।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 3: Number Play
  // ==========================================
  {
    id: "ncert-c6-m03",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 3,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 3: Number Play (संख्याओं का खेल)",
    titleHi: "अध्याय 3: संख्याओं का खेल (काप्रेकर संख्या, कोलात्ज़ परिकल्पना व जादुई वर्ग)",
    readingTime: "18 mins read",
    badge: "Mathematical Puzzles & Logic",
    desc: "Uncover fascinating mathematical gems: Kaprekar's Constant (6174 & 495), the unsolved Collatz Conjecture (Hailstone numbers 3n+1), palindromic numbers, Lychrel numbers, 3x3 Magic Squares, and Divisibility tests.",
    descHi: "गणित के रोमांचक रहस्य: दत्तात्रेय रामचंद्र काप्रेकर का स्थिरांक (6174 एवं 495), अनसुलझी कोलात्ज़ परिकल्पना (3n+1 हेल्सटोन संख्याएँ), पैलिंड्रोमिक संख्याएँ, 3x3 जादुई वर्ग (मैजिक सम 15) तथा विभाज्यता के नियम।",
    competitionEdge: "High weightage in Reasoning and Quantitative Aptitude for CTET, BPSC TRE, SSC CGL/CHSL, and Banking PO/Clerk. Recurring questions on Kaprekar routine, magic square central element, and divisibility by 7, 8, 9, 11.",
    competitionEdgeHi: "CTET, BPSC शिक्षक भर्ती, SSC CGL एवं बैंकिंग परीक्षाओं में रीज़निंग और गणित के लिए अत्यंत महत्वपूर्ण। काप्रेकर स्थिरांक, जादुई वर्ग का केंद्रीय तत्व, और 7, 8, 9, 11 की विभाज्यता पर सीधे प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. Kaprekar's Constant: The 6174 & 495 Magic",
        headingHi: "1. काप्रेकर स्थिरांक: 6174 एवं 495 का जादुई नियम",
        contentHtml: `
          <p>Discovered in 1949 by Indian mathematician <strong>D. R. Kaprekar</strong> of Devlali, Maharashtra:</p>
          <div class="note-formula-box">
            <h4>🔢 The Kaprekar Routine for 4-Digit Numbers:</h4>
            <ol>
              <li>Take any 4-digit number with at least two different digits.</li>
              <li>Arrange digits in descending order to get largest number, and in ascending order to get smallest number.</li>
              <li>Subtract smallest from largest.</li>
              <li>Repeat this process with the difference.</li>
              <li>Within at most <strong>7 steps</strong>, you will always reach <strong>6174</strong>! Once at 6174: 7641 - 1467 = 6174 (loop).</li>
            </ol>
            <p><strong>For 3-Digit Numbers:</strong> The constant is <strong>495</strong>! (e.g. 954 - 459 = 495).</p>
          </div>
        `,
        contentHtmlHi: `
          <p>1949 में देवलाली (महाराष्ट्र) के प्रख्यात भारतीय गणितज्ञ <strong>दत्तात्रेय रामचंद्र काप्रेकर</strong> ने इस रहस्य की खोज की:</p>
          <div class="note-formula-box">
            <h4>🔢 4-अंकीय संख्याओं के लिए काप्रेकर प्रक्रिया:</h4>
            <ol>
              <li>कोई भी 4 अंकों की संख्या लें जिसमें कम से कम दो अंक भिन्न हों।</li>
              <li>अंकों को घटते क्रम में लिखकर सबसे बड़ी संख्या और बढ़ते क्रम में लिखकर सबसे छोटी संख्या बनाएँ।</li>
              <li>बड़ी संख्या में से छोटी संख्या घटाएँ।</li>
              <li>प्राप्त अंतर के साथ यही प्रक्रिया दोहराएँ।</li>
              <li>अधिकतम <strong>7 चरणों</strong> के भीतर आप हमेशा <strong>6174</strong> पर पहुँचेंगे! 6174 पर पहुँचने के बाद: 7641 - 1467 = 6174 (स्थायी लूप)।</li>
            </ol>
            <p><strong>3-अंकीय संख्याओं के लिए:</strong> काप्रेकर स्थिरांक <strong>495</strong> होता है! (उदा. 954 - 459 = 495)।</p>
          </div>
        `
      },
      {
        heading: "2. The Collatz Conjecture (3n + 1 Problem) & Magic Squares",
        headingHi: "2. कोलात्ज़ परिकल्पना (3n + 1 समस्या) एवं 3x3 जादुई वर्ग",
        contentHtml: `
          <p><strong>Collatz Conjecture (Hailstone Numbers):</strong> Proposed by Lothar Collatz in 1937:</p>
          <div class="note-formula-box">
            <h4>Rule for any positive integer n:</h4>
            <ul>
              <li>If n is <strong>even</strong> &rarr; divide by 2: <strong>n / 2</strong></li>
              <li>If n is <strong>odd</strong> &rarr; multiply by 3 and add 1: <strong>3n + 1</strong></li>
            </ul>
            <p>No matter what number you start with, does the sequence always reach <strong>1</strong> (in the 4 &rarr; 2 &rarr; 1 cycle)? <em>It remains an unsolved problem in modern mathematics!</em></p>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 3x3 Magic Square Secrets:</h4>
            <ul>
              <li>Contains digits 1 to 9 once each.</li>
              <li><strong>Magic Constant (Sum of every row, column, diagonal):</strong> <strong>15</strong>.</li>
              <li><strong>Central Cell:</strong> Always <strong>5</strong> (Magic constant / 3 = 15 / 3 = 5).</li>
              <li>Formula for n x n magic square sum: <strong>M = n(n<sup>2</sup> + 1) / 2</strong>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>कोलात्ज़ परिकल्पना (Collatz Conjecture):</strong> 1937 में लोथर कोलात्ज़ द्वारा प्रस्तावित:</p>
          <div class="note-formula-box">
            <h4>किसी भी धनात्मक पूर्णांक n के लिए नियम:</h4>
            <ul>
              <li>यदि n <strong>सम</strong> है &rarr; 2 से भाग दें: <strong>n / 2</strong></li>
              <li>यदि n <strong>विषम</strong> है &rarr; 3 से गुणा कर 1 जोड़ें: <strong>3n + 1</strong></li>
            </ul>
            <p>आप चाहे किसी भी संख्या से शुरू करें, यह अनुक्रम अंततः <strong>1</strong> (4 &rarr; 2 &rarr; 1 के लूप) पर पहुँच जाता है। <em>यह आज भी आधुनिक गणित की एक अनसुलझी पहेली है!</em></p>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 3x3 जादुई वर्ग के रहस्य:</h4>
            <ul>
              <li>इसमें 1 से 9 तक के अंक केवल एक बार आते हैं।</li>
              <li><strong>जादुई योग (प्रत्येक पंक्ति, स्तंभ और विकर्ण का योग):</strong> सदैव <strong>15</strong> होता है।</li>
              <li><strong>केंद्रीय संख्या:</strong> सदैव <strong>5</strong> होती है (जादुई योग / 3 = 15 / 3 = 5)।</li>
              <li>n x n जादुई वर्ग के योग का सूत्र: <strong>M = n(n<sup>2</sup> + 1) / 2</strong>।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Divisibility Tests: Rules for 3, 7, 8, 9, 11",
        headingHi: "3. विभाज्यता के नियम: 3, 7, 8, 9, 11 की त्वरित जाँच",
        contentHtml: `
          <ul>
            <li><strong>Divisible by 3 / 9:</strong> Sum of all digits must be divisible by 3 / 9.</li>
            <li><strong>Divisible by 4 / 8:</strong> Last 2 digits (for 4) or last 3 digits (for 8) must be divisible by 4 / 8.</li>
            <li><strong>Divisible by 11:</strong> The difference between the sum of digits at odd places and the sum of digits at even places must be 0 or a multiple of 11.</li>
          </ul>
        `,
        contentHtmlHi: `
          <ul>
            <li><strong>3 एवं 9 से विभाज्यता:</strong> सभी अंकों का योग 3 या 9 से विभाज्य होना चाहिए।</li>
            <li><strong>4 एवं 8 से विभाज्यता:</strong> अंतिम 2 अंक (4 के लिए) या अंतिम 3 अंक (8 के लिए) विभाज्य होने चाहिए।</li>
            <li><strong>11 से विभाज्यता:</strong> विषम स्थानों के अंकों के योग तथा सम स्थानों के अंकों के योग का अंतर 0 या 11 का गुणज होना चाहिए।</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is Kaprekar's Constant for 4-digit numbers?",
        qHi: "4-अंकीय संख्याओं के लिए काप्रेकर स्थिरांक (Kaprekar's Constant) क्या है?",
        options: ["495", "6174", "1729", "3141"],
        optionsHi: ["495", "6174", "1729", "3141"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "6174 is Kaprekar's constant for 4-digit numbers (discovered by D.R. Kaprekar in 1949).",
        explanationHi: "6174 चार अंकों की संख्याओं के लिए काप्रेकर स्थिरांक है (1949 में डी.आर. काप्रेकर द्वारा खोजा गया)।"
      },
      {
        id: 2,
        q: "What is the Kaprekar constant for 3-digit numbers?",
        qHi: "3-अंकीय संख्याओं के लिए काप्रेकर स्थिरांक क्या है?",
        options: ["108", "495", "594", "6174"],
        optionsHi: ["108", "495", "594", "6174"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & Olympiad",
        explanation: "For 3-digit numbers, applying the Kaprekar routine always leads to 495 (e.g. 954 - 459 = 495).",
        explanationHi: "3 अंकों की संख्याओं के लिए काप्रेकर प्रक्रिया सदैव 495 पर समाप्त होती है (उदा. 954 - 459 = 495)।"
      },
      {
        id: 3,
        q: "What is the maximum number of iterations needed to reach 6174 in Kaprekar's routine for any valid 4-digit number?",
        qHi: "किसी भी वैध 4-अंकीय संख्या के लिए काप्रेकर प्रक्रिया में 6174 तक पहुँचने के लिए अधिकतम कितने चरणों की आवश्यकता होती है?",
        options: ["5 steps", "7 steps", "9 steps", "12 steps"],
        optionsHi: ["5 चरण", "7 चरण", "9 चरण", "12 चरण"],
        ans: 1,
        pyqRef: "CTET Paper 2 & CSAT",
        explanation: "The Kaprekar routine reaches 6174 in at most 7 steps.",
        explanationHi: "काप्रेकर प्रक्रिया में अधिकतम 7 चरणों के भीतर 6174 प्राप्त हो जाता है।"
      },
      {
        id: 4,
        q: "In a standard 3x3 magic square using digits 1 to 9, what is the central number?",
        qHi: "1 से 9 तक के अंकों से बने मानक 3x3 जादुई वर्ग (Magic Square) में केंद्रीय संख्या क्या होती है?",
        options: ["3", "4", "5", "6"],
        optionsHi: ["3", "4", "5", "6"],
        ans: 2,
        pyqRef: "CTET Paper 2 & Reasoning Aptitude",
        explanation: "In a 3x3 magic square with sum 15, the center cell is always 15 / 3 = 5.",
        explanationHi: "15 योग वाले 3x3 जादुई वर्ग में केंद्रीय संख्या सदैव 15 / 3 = 5 होती है।"
      },
      {
        id: 5,
        q: "What is the magic sum of each row, column, and diagonal in a 3x3 magic square of numbers 1 to 9?",
        qHi: "1 से 9 तक की संख्याओं के 3x3 जादुई वर्ग में प्रत्येक पंक्ति, स्तंभ और विकर्ण का जादुई योग क्या होता है?",
        options: ["12", "15", "18", "21"],
        optionsHi: ["12", "15", "18", "21"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Sum of 1 to 9 = 45. Divided among 3 rows = 45 / 3 = 15.",
        explanationHi: "1 से 9 तक का योग = 45। 3 पंक्तियों में विभाजित करने पर = 45 / 3 = 15।"
      },
      {
        id: 6,
        q: "In the Collatz 3n + 1 sequence starting from n = 6, what is the sequence of the first 4 terms?",
        qHi: "n = 6 से शुरू होने वाले कोलात्ज़ 3n + 1 अनुक्रम के पहले 4 पद क्या होंगे?",
        options: ["6, 3, 10, 5", "6, 18, 9, 28", "6, 3, 1, 4", "6, 12, 6, 3"],
        optionsHi: ["6, 3, 10, 5", "6, 18, 9, 28", "6, 3, 1, 4", "6, 12, 6, 3"],
        ans: 0,
        pyqRef: "NCERT Chapter 3 & CSAT",
        explanation: "6 is even => 6/2 = 3. 3 is odd => 3(3)+1 = 10. 10 is even => 10/2 = 5. Sequence: 6, 3, 10, 5.",
        explanationHi: "6 सम है => 6/2 = 3। 3 विषम है => 3(3)+1 = 10। 10 सम है => 10/2 = 5। अनुक्रम: 6, 3, 10, 5।"
      },
      {
        id: 7,
        q: "Which digit should replace * in 743*25 so that the number is completely divisible by 9?",
        qHi: "संख्या 743*25 में * के स्थान पर कौन-सा अंक आएगा ताकि संख्या 9 से पूर्णतः विभाजित हो जाए?",
        options: ["4", "5", "6", "7"],
        optionsHi: ["4", "5", "6", "7"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & Railway NTPC",
        explanation: "Sum of digits = 7 + 4 + 3 + * + 2 + 5 = 21 + *. The next multiple of 9 is 27. So * = 27 - 21 = 6.",
        explanationHi: "अंकों का योग = 7 + 4 + 3 + * + 2 + 5 = 21 + *। 9 का अगला गुणज 27 है। अतः * = 27 - 21 = 6।"
      },
      {
        id: 8,
        q: "Which digit should replace * in 853*6 so that the number is completely divisible by 11?",
        qHi: "संख्या 853*6 में * के स्थान पर कौन-सा अंक होना चाहिए ताकि संख्या 11 से पूर्णतः विभाज्य हो?",
        options: ["1", "3", "5", "7"],
        optionsHi: ["1", "3", "5", "7"],
        ans: 0,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "Odd place digits (from right): 6 + 3 + 8 = 17. Even place digits: * + 5. Difference = 17 - (* + 5) = 12 - *. For multiple of 11: 12 - * = 11 => * = 1.",
        explanationHi: "दाएँ से विषम स्थानों के अंक: 6 + 3 + 8 = 17। सम स्थानों के अंक: * + 5। अंतर = 17 - (* + 5) = 12 - *। 11 का गुणज बनाने के लिए: 12 - * = 11 => * = 1।"
      },
      {
        id: 9,
        q: "A palindromic number reads the same forwards and backwards. Which of the following is a palindromic prime?",
        qHi: "पैलिंड्रोमिक संख्या आगे और पीछे दोनों ओर से एक समान पढ़ी जाती है। निम्नलिखित में से कौन-सी एक पैलिंड्रोमिक अभाज्य संख्या है?",
        options: ["121", "131", "141", "151"],
        optionsHi: ["121", "131", "141", "151"],
        ans: 1,
        pyqRef: "Olympiad & CTET Paper 2",
        explanation: "131 is prime and reads the same forwards and backwards (121 is 11^2, composite).",
        explanationHi: "131 अभाज्य संख्या है और आगे-पीछे दोनों से 131 ही पढ़ी जाती है (121 भाज्य है: 11^2)।"
      },
      {
        id: 10,
        q: "What is the magic sum of a 4x4 magic square using numbers 1 to 16?",
        qHi: "1 से 16 तक की संख्याओं वाले 4x4 जादुई वर्ग का जादुई योग क्या होगा?",
        options: ["30", "34", "38", "42"],
        optionsHi: ["30", "34", "38", "42"],
        ans: 1,
        pyqRef: "CSAT & Reasoning Aptitude",
        explanation: "Formula M = n(n^2 + 1)/2. For n = 4: 4(16 + 1)/2 = 2 * 17 = 34.",
        explanationHi: "सूत्र M = n(n^2 + 1)/2। n = 4 के लिए: 4(16 + 1)/2 = 2 * 17 = 34।"
      },
      {
        id: 11,
        q: "What is the result when Kaprekar's routine is applied to 6174 itself?",
        qHi: "जब स्वयं 6174 पर काप्रेकर प्रक्रिया लागू की जाती है, तो क्या परिणाम प्राप्त होता है?",
        options: ["0", "999", "6174", "495"],
        optionsHi: ["0", "999", "6174", "495"],
        ans: 2,
        pyqRef: "NCERT Ganita Prakash Chapter 3",
        explanation: "7641 - 1467 = 6174. It maps to itself, forming a permanent fixed point.",
        explanationHi: "7641 - 1467 = 6174। यह स्वयं पर मैप होकर एक स्थायी स्थिर बिंदु (Fixed point) बनाता है।"
      },
      {
        id: 12,
        q: "Which of the following numbers CANNOT be used to start Kaprekar's 4-digit routine?",
        qHi: "निम्नलिखित में से किस संख्या का उपयोग काप्रेकर की 4-अंकीय प्रक्रिया शुरू करने के लिए नहीं किया जा सकता?",
        options: ["1000", "2222", "1234", "8520"],
        optionsHi: ["1000", "2222", "1234", "8520"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Teaching Aptitude",
        explanation: "Numbers with all 4 identical digits (like 1111, 2222, etc.) yield 0000 immediately, so they are excluded.",
        explanationHi: "चारों समान अंकों वाली संख्याएँ (जैसे 2222, 1111) तुरंत 2222 - 2222 = 0 देती हैं, अतः इन्हें बाहर रखा गया है।"
      },
      {
        id: 13,
        q: "What is the three-digit number called the 'Hardy-Ramanujan Number', which can be expressed as the sum of two cubes in two different ways?",
        qHi: "'हार्डी-रामानुजन संख्या' किसे कहा जाता है, जिसे दो अलग-अलग तरीकों से दो घनों के योग के रूप में व्यक्त किया जा सकता है?",
        options: ["1729", "6174", "153", "495"],
        optionsHi: ["1729", "6174", "153", "495"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & GK",
        explanation: "1729 = 1^3 + 12^3 = 9^3 + 10^3. It is the smallest taxicab number.",
        explanationHi: "1729 = 1^3 + 12^3 = 9^3 + 10^3। यह सबसे छोटी टैक्सीकैब संख्या है।"
      },
      {
        id: 14,
        q: "A number is divisible by both 2 and 3. By which other number must it always be divisible?",
        qHi: "एक संख्या 2 और 3 दोनों से विभाज्य है। वह अन्य किस संख्या से सदैव विभाज्य होगी?",
        options: ["5", "6", "8", "9"],
        optionsHi: ["5", "6", "8", "9"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Since 2 and 3 are co-prime, any number divisible by both must be divisible by 2 * 3 = 6.",
        explanationHi: "चूँकि 2 और 3 सह-अभाज्य हैं, अतः जो संख्या दोनों से विभाज्य है वह उनके गुणनफल 2 * 3 = 6 से भी अवश्य विभाज्य होगी।"
      },
      {
        id: 15,
        q: "What is the sum of any two-digit number and the number formed by reversing its digits always divisible by?",
        qHi: "किसी दो अंकों की संख्या और उसके अंकों को उलटने पर बनी संख्या का योग सदैव किससे विभाज्य होता है?",
        options: ["9", "10", "11", "12"],
        optionsHi: ["9", "10", "11", "12"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & BPSC TRE",
        explanation: "(10a + b) + (10b + a) = 11a + 11b = 11(a + b). It is always divisible by 11.",
        explanationHi: "(10a + b) + (10b + a) = 11a + 11b = 11(a + b)। यह सदैव 11 से पूर्णतः विभाज्य होता है।"
      },
      {
        id: 16,
        q: "What is the difference between any two-digit number and the number formed by reversing its digits always divisible by?",
        qHi: "किसी दो अंकों की संख्या और उसके अंकों को पलटने पर बनी संख्या का अंतर सदैव किससे विभाज्य होता है?",
        options: ["9", "10", "11", "13"],
        optionsHi: ["9", "10", "11", "13"],
        ans: 0,
        pyqRef: "CTET Paper 2 & SSC MTS",
        explanation: "(10a + b) - (10b + a) = 9a - 9b = 9(a - b). It is always divisible by 9.",
        explanationHi: "(10a + b) - (10b + a) = 9a - 9b = 9(a - b)। यह सदैव 9 से पूर्णतः विभाज्य होता है।"
      },
      {
        id: 17,
        q: "If the 4-digit number 572* is divisible by 4, what is the SMALLEST non-negative digit that can replace *?",
        qHi: "यदि 4-अंकीय संख्या 572* संख्या 4 से विभाज्य है, तो * के स्थान पर आने वाला सबसे छोटा अंक क्या होगा?",
        options: ["0", "2", "4", "8"],
        optionsHi: ["0", "2", "4", "8"],
        ans: 0,
        pyqRef: "Railway NTPC & State Police SI",
        explanation: "For divisibility by 4, last two digits 2* must be divisible by 4. 20 is divisible by 4, so smallest digit is 0.",
        explanationHi: "4 से विभाज्यता के लिए अंतिम दो अंक 2* विभाज्य होने चाहिए। 20 चार से कटता है, अतः सबसे छोटा अंक 0 है।"
      },
      {
        id: 18,
        q: "How many 3-digit palindromic numbers exist in total?",
        qHi: "कुल कितनी 3-अंकीय पैलिंड्रोमिक संख्याएँ (Palindromic numbers) होती हैं?",
        options: ["81", "90", "99", "100"],
        optionsHi: ["81", "90", "99", "100"],
        ans: 1,
        pyqRef: "CSAT & Banking PO",
        explanation: "Format is ABA. A can be 1 to 9 (9 choices). B can be 0 to 9 (10 choices). Total = 9 * 10 = 90.",
        explanationHi: "प्रारूप ABA है। A के लिए 1 से 9 तक (9 विकल्प), B के लिए 0 से 9 तक (10 विकल्प)। कुल = 9 * 10 = 90 संख्याएँ।"
      },
      {
        id: 19,
        q: "In the Collatz sequence starting at n = 7, how many steps does it take to reach 1? (Known as a long hailstone path)",
        qHi: "n = 7 से शुरू होने वाले कोलात्ज़ अनुक्रम में 1 तक पहुँचने के लिए कितने चरण लगते हैं?",
        options: ["8 steps", "12 steps", "16 steps", "20 steps"],
        optionsHi: ["8 चरण", "12 चरण", "16 चरण", "20 चरण"],
        ans: 2,
        pyqRef: "NCERT Class 6 Ganita Prakash Explorations",
        explanation: "Sequence: 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1. Exactly 16 steps.",
        explanationHi: "अनुक्रम: 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1। कुल ठीक 16 चरण।"
      },
      {
        id: 20,
        q: "What is an Armstrong number (Narcissistic number) of 3 digits where sum of cubes of digits equals the number itself?",
        qHi: "वह 3 अंकों की आर्मस्ट्रांग संख्या कौन-सी है जिसके अंकों के घनों का योग स्वयं उस संख्या के बराबर होता है?",
        options: ["143", "153", "163", "173"],
        optionsHi: ["143", "153", "163", "173"],
        ans: 1,
        pyqRef: "BPSC TRE Middle & Olympiad",
        explanation: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.",
        explanationHi: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153।"
      },
      {
        id: 21,
        q: "If a number is divisible by 8, then its last three digits must be:",
        qHi: "यदि कोई संख्या 8 से विभाज्य है, तो उसके अंतिम तीन अंक अवश्य होने चाहिए:",
        options: ["Divisible by 4", "Divisible by 8 (or 000)", "All even", "Sum to 8"],
        optionsHi: ["4 से विभाज्य", "8 से विभाज्य (या 000)", "सभी सम", "योग 8 हो"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CGL",
        explanation: "A number is divisible by 8 if its last three digits form a number divisible by 8 (or are 000).",
        explanationHi: "कोई संख्या 8 से विभाज्य होती है यदि उसके अंतिम तीन अंकों से बनी संख्या 8 से विभाज्य हो (या 000 हो)।"
      },
      {
        id: 22,
        q: "Which of the following numbers is divisible by 11?",
        qHi: "निम्नलिखित में से कौन-सी संख्या 11 से विभाज्य है?",
        options: ["1331", "1431", "1531", "1631"],
        optionsHi: ["1331", "1431", "1531", "1631"],
        ans: 0,
        pyqRef: "BPSC TRE Primary/Middle",
        explanation: "In 1331: (1 + 3) - (3 + 1) = 4 - 4 = 0. Divisible by 11.",
        explanationHi: "1331 में: (1 + 3) - (3 + 1) = 4 - 4 = 0। अतः 11 से विभाज्य है।"
      },
      {
        id: 23,
        q: "What is the remainder when 987654 is divided by 9?",
        qHi: "जब 987654 को 9 से विभाजित किया जाता है, तो शेषफल क्या बचता है?",
        options: ["0", "2", "3", "6"],
        optionsHi: ["0", "2", "3", "6"],
        ans: 2,
        pyqRef: "SSC CGL / Railway NTPC",
        explanation: "Sum of digits = 9 + 8 + 7 + 6 + 5 + 4 = 39. 39 / 9 gives remainder 3 (since 3 + 9 = 12 => 1+2 = 3).",
        explanationHi: "अंकों का योग = 9 + 8 + 7 + 6 + 5 + 4 = 39। 39 को 9 से भाग देने पर शेषफल 3 बचता है।"
      },
      {
        id: 24,
        q: "How many two-digit prime numbers remain prime even when their digits are reversed? (e.g. 13 and 31)",
        qHi: "ऐसी कितनी दो अंकों की अभाज्य संख्याएँ हैं जो अंकों को पलटने पर भी अभाज्य ही रहती हैं? (जैसे 13 और 31)",
        options: ["7", "8", "9", "10"],
        optionsHi: ["7", "8", "9", "10"],
        ans: 2,
        pyqRef: "Olympiad & CTET Paper 2",
        explanation: "Pairs are (11), (13, 31), (17, 71), (37, 73), (79, 97). Total 9 numbers.",
        explanationHi: "ये संख्याएँ हैं: 11, 13, 31, 17, 71, 37, 73, 79, 97। कुल 9 संख्याएँ।"
      },
      {
        id: 25,
        q: "In a 3x3 magic square, what is the sum of the numbers in the four corners?",
        qHi: "3x3 जादुई वर्ग में चारों कोनों की संख्याओं का योग क्या होता है?",
        options: ["15", "20", "25", "30"],
        optionsHi: ["15", "20", "25", "30"],
        ans: 1,
        pyqRef: "CSAT & Reasoning Aptitude",
        explanation: "The four corners of a standard 3x3 magic square are 2, 4, 6, 8. Their sum is 2 + 4 + 6 + 8 = 20.",
        explanationHi: "मानक 3x3 जादुई वर्ग के चार कोने 2, 4, 6, 8 होते हैं। इनका योग = 2 + 4 + 6 + 8 = 20।"
      },
      {
        id: 26,
        q: "What is the smallest 3-digit number divisible by both 4 and 9?",
        qHi: "4 और 9 दोनों से विभाज्य होने वाली सबसे छोटी 3-अंकीय संख्या कौन-सी है?",
        options: ["108", "144", "180", "126"],
        optionsHi: ["108", "144", "180", "126"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "LCM(4, 9) = 36. Smallest 3-digit multiple of 36 is 36 * 3 = 108.",
        explanationHi: "LCM(4, 9) = 36। 36 का सबसे छोटा 3-अंकीय गुणज = 36 * 3 = 108।"
      },
      {
        id: 27,
        q: "If a number is divisible by 12, it must necessarily be divisible by:",
        qHi: "यदि कोई संख्या 12 से विभाज्य है, तो वह अनिवार्य रूप से किससे विभाज्य होगी?",
        options: ["Both 2 and 6", "Both 3 and 4", "Both 8 and 4", "Both 6 and 9"],
        optionsHi: ["2 और 6 दोनों", "3 और 4 दोनों (सह-अभाज्य)", "8 और 4 दोनों", "6 और 9 दोनों"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Since 3 and 4 are co-prime and their product is 12, any number divisible by 12 is divisible by both 3 and 4.",
        explanationHi: "चूँकि 3 और 4 सह-अभाज्य हैं और 3 * 4 = 12 है, अतः 12 से विभाज्य संख्या 3 और 4 दोनों से विभाज्य होगी।"
      },
      {
        id: 28,
        q: "A number whose sum of all proper factors (excluding itself) equals the number itself is called a:",
        qHi: "वह संख्या जिसके स्वयं को छोड़कर सभी उचित गुणनखंडों का योग स्वयं उसी संख्या के बराबर हो, क्या कहलाती है?",
        options: ["Prime number", "Perfect number", "Kaprekar number", "Composite number"],
        optionsHi: ["अभाज्य संख्या", "संपूर्ण संख्या (Perfect Number)", "काप्रेकर संख्या", "भाज्य संख्या"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "Such a number is called a Perfect Number (e.g. 6 = 1 + 2 + 3, and 28 = 1 + 2 + 4 + 7 + 14).",
        explanationHi: "ऐसी संख्या को संपूर्ण संख्या (Perfect Number) कहते हैं (जैसे 6 = 1 + 2 + 3, और 28 = 1 + 2 + 4 + 7 + 14)।"
      },
      {
        id: 29,
        q: "What is the smallest perfect number?",
        qHi: "सबसे छोटी संपूर्ण संख्या (Perfect Number) कौन-सी है?",
        options: ["1", "4", "6", "12"],
        optionsHi: ["1", "4", "6", "12"],
        ans: 2,
        pyqRef: "BPSC TRE Middle & SSC MTS",
        explanation: "6 is the smallest perfect number (1 + 2 + 3 = 6).",
        explanationHi: "6 सबसे छोटी संपूर्ण संख्या है (1 + 2 + 3 = 6)।"
      },
      {
        id: 30,
        q: "What is the second smallest perfect number?",
        qHi: "दूसरी सबसे छोटी संपूर्ण संख्या कौन-सी है?",
        options: ["12", "18", "24", "28"],
        optionsHi: ["12", "18", "24", "28"],
        ans: 3,
        pyqRef: "BPSC TRE 4.0 Middle",
        explanation: "Factors of 28 are 1, 2, 4, 7, 14. 1 + 2 + 4 + 7 + 14 = 28.",
        explanationHi: "28 के गुणनखंड 1, 2, 4, 7, 14 हैं। इनका योग 1 + 2 + 4 + 7 + 14 = 28 होता है।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 4: Data Handling and Presentation
  // ==========================================
  {
    id: "ncert-c6-m04",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 4,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 4: Data Handling and Presentation (आँकड़ों का प्रबंधन एवं प्रस्तुतिकरण)",
    titleHi: "अध्याय 4: आँकड़ों का प्रबंधन एवं प्रस्तुतिकरण",
    readingTime: "17 mins read",
    badge: "Data Interpretation (DI)",
    desc: "Understand raw data, frequency tables, tally marks (bundles of 5), pictographs, scale selection, vertical and horizontal bar graphs, and basic measures of central tendency (Mean, Median, Mode, Range).",
    descHi: "कच्चे आँकड़े, बारंबारता सारणी, मिलान चिह्न (5 के बंडल), चित्रालेख (पिक्टोग्राफ), उपयुक्त पैमाने का चयन, ऊर्ध्वाधर एवं क्षैतिज दंड आलेख तथा केंद्रीय प्रवृत्ति के मूल माप (माध्य, माध्यिका, बहुलक एवं परिसर)।",
    competitionEdge: "Forms the bedrock of Data Interpretation (DI) in CTET Paper 2, BPSC TRE, SSC, and Banking exams. High scoring questions on scale interpretation, tally counts, and calculating mean/mode from bar charts.",
    competitionEdgeHi: "CTET पेपर 2, BPSC शिक्षक भर्ती, SSC और रेलवे परीक्षाओं में डेटा इंटरप्रिटेशन (DI) का आधार। पैमाने की गणना, मिलान चिह्नों की गिनती और दंड आलेखों से औसत/बहुलक निकालने पर बार-बार प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. Data Collection & Organization: Tally Marks",
        headingHi: "1. आँकड़ों का संकलन व संगठन: मिलान चिह्न (Tally Marks)",
        contentHtml: `
          <p><strong>Primary Data:</strong> Data collected first-hand by the investigator for a specific purpose.</p>
          <p><strong>Secondary Data:</strong> Data gathered from existing published records, surveys, or databases.</p>
          <div class="note-formula-box">
            <h4>📊 Tally Marks System (Group of 5):</h4>
            <p>To avoid counting mistakes, tallies are recorded in bundles of 5:</p>
            <p>1 = |, 2 = ||, 3 = |||, 4 = ||||, and <strong>5 = cross slash across 4 lines</strong>.</p>
            <p>Example: 17 = three bundles of 5 plus 2 lines (5 + 5 + 5 + 2).</p>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>प्राथमिक आँकड़े (Primary Data):</strong> अन्वेषक द्वारा किसी निश्चित उद्देश्य के लिए पहली बार स्वयं एकत्र किए गए आँकड़े।</p>
          <p><strong>द्वितीयक आँकड़े (Secondary Data):</strong> पूर्व-प्रकाशित स्रोतों, रिपोर्टों या डेटाबेस से प्राप्त आँकड़े।</p>
          <div class="note-formula-box">
            <h4>📊 मिलान चिह्न प्रणाली (5-5 के बंडल):</h4>
            <p>गिनती में त्रुटियों से बचने के लिए मिलान चिह्नों को 5 के समूहों में लिखा जाता है:</p>
            <p>1 = |, 2 = ||, 3 = |||, 4 = ||||, तथा <strong>5 = चार खड़ी रेखाओं पर एक तिरछी रेखा</strong>।</p>
            <p>उदाहरण: 17 को लिखने के लिए 5 के 3 बंडल और 2 खड़ी रेखाएँ (5 + 5 + 5 + 2) लगाई जाती हैं।</p>
          </div>
        `
      },
      {
        heading: "2. Pictographs and Bar Graphs (Dand Alekh)",
        headingHi: "2. चित्रालेख (Pictograph) एवं दंड आलेख (Bar Graph)",
        contentHtml: `
          <div class="note-formula-box">
            <h4>🖼️ Key Rules of Representation:</h4>
            <ul>
              <li><strong>Pictograph:</strong> Represents data using pictures of objects. Crucial factor is the <em>Key / Scale</em> (e.g. 1 🚗 = 50 cars, half 🚗 = 25 cars).</li>
              <li><strong>Bar Graph:</strong> Rectangular bars of <strong>equal width</strong> with <strong>equal spacing</strong> between them. Height/length of the bar is proportional to the value it represents.</li>
              <li>Can be drawn vertically (bars rising from x-axis) or horizontally (bars extending from y-axis).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🖼️ प्रस्तुतिकरण के अनिवार्य नियम:</h4>
            <ul>
              <li><strong>चित्रालेख (Pictograph):</strong> चित्रों या प्रतीकों के माध्यम से आँकड़ों का प्रदर्शन। इसमें <em>पैमाना (Key/Scale)</em> सबसे महत्वपूर्ण होता है (उदा. 1 चित्र = 50 वस्तुएँ, आधा चित्र = 25 वस्तुएँ)।</li>
              <li><strong>दंड आलेख (Bar Graph):</strong> <strong>समान चौड़ाई</strong> के आयताकार दंड, जिनके बीच <strong>समान दूरी</strong> रखी जाती है। दंड की लंबाई/ऊँचाई संबंधित मान के समानुपाती होती है।</li>
              <li>यह ऊर्ध्वाधर (खड़े दंड) अथवा क्षैतिज (पड़े दंड) दोनों रूपों में बनाया जा सकता है।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Measures of Central Tendency: Mean, Median, Mode, Range",
        headingHi: "3. केंद्रीय प्रवृत्ति के माप: माध्य, माध्यिका, बहुलक एवं परिसर",
        contentHtml: `
          <div class="note-formula-box">
            <h4>⚡ Formulas for Quick Calculation:</h4>
            <ul>
              <li><strong>Mean (माध्य / औसत):</strong> Sum of all observations / Total number of observations = &sum;x / n.</li>
              <li><strong>Median (माध्यिका):</strong> Middle value when data is arranged in ascending order. If n is odd, (n+1)/2-th term.</li>
              <li><strong>Mode (बहुलक):</strong> The observation that occurs most frequently.</li>
              <li><strong>Range (परिसर):</strong> Difference between highest and lowest value = Maximum - Minimum.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>⚡ त्वरित गणना के सूत्र:</h4>
            <ul>
              <li><strong>माध्य (Mean / Average):</strong> सभी प्रेक्षणों का योग / प्रेक्षणों की कुल संख्या = &sum;x / n।</li>
              <li><strong>माध्यिका (Median):</strong> आँकड़ों को बढ़ते क्रम में रखने पर ठीक बीच वाला मान। यदि n विषम है, तो (n+1)/2-वाँ पद।</li>
              <li><strong>बहुलक (Mode):</strong> वह प्रेक्षण जिसकी बारंबारता सबसे अधिक हो (जो सबसे ज्यादा बार आए)।</li>
              <li><strong>परिसर (Range):</strong> उच्चतम मान और न्यूनतम मान का अंतर = Maximum - Minimum।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "If in a pictograph one symbol of a tree represents 25 real trees, how many symbols are needed to represent 175 trees?",
        qHi: "यदि एक चित्रालेख में पेड़ का एक प्रतीक 25 वास्तविक पेड़ों को दर्शाता है, तो 175 पेड़ों को दर्शाने के लिए कितने प्रतीकों की आवश्यकता होगी?",
        options: ["5", "6", "7", "8"],
        optionsHi: ["5", "6", "7", "8"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Primary",
        explanation: "175 / 25 = 7 symbols.",
        explanationHi: "175 / 25 = 7 प्रतीक।"
      },
      {
        id: 2,
        q: "In a tally mark representation, what does a full crossed bundle represent?",
        qHi: "मिलान चिह्न निरूपण में, एक पूर्ण कटा हुआ बंडल (चार खड़ी और एक तिरछी रेखा) किस संख्या को दर्शाता है?",
        options: ["4", "5", "6", "10"],
        optionsHi: ["4", "5", "6", "10"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "A standard tally bundle consists of 4 vertical strokes crossed by 1 diagonal stroke = 5.",
        explanationHi: "मानक मिलान चिह्न बंडल में 4 खड़ी रेखाएँ और 1 तिरछी रेखा होती है = 5।"
      },
      {
        id: 3,
        q: "What is the range of the data set: 12, 25, 8, 42, 31, 19, 50, 15?",
        qHi: "आँकड़ों के समूह 12, 25, 8, 42, 31, 19, 50, 15 का परिसर (Range) क्या होगा?",
        options: ["38", "42", "50", "34"],
        optionsHi: ["38", "42", "50", "34"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CHSL",
        explanation: "Range = Maximum - Minimum = 50 - 8 = 42.",
        explanationHi: "परिसर = उच्चतम मान - न्यूनतम मान = 50 - 8 = 42।"
      },
      {
        id: 4,
        q: "Find the mean of the first five prime numbers (2, 3, 5, 7, 11).",
        qHi: "प्रथम पाँच अभाज्य संख्याओं (2, 3, 5, 7, 11) का माध्य (औसत) ज्ञात कीजिए।",
        options: ["5.2", "5.6", "6.0", "6.4"],
        optionsHi: ["5.2", "5.6", "6.0", "6.4"],
        ans: 1,
        pyqRef: "BPSC TRE 4.0 Middle & Railway NTPC",
        explanation: "Sum = 2 + 3 + 5 + 7 + 11 = 28. Mean = 28 / 5 = 5.6.",
        explanationHi: "योग = 2 + 3 + 5 + 7 + 11 = 28। माध्य = 28 / 5 = 5.6।"
      },
      {
        id: 5,
        q: "What is the mode of the given numbers: 4, 7, 5, 4, 8, 4, 9, 7, 4, 5?",
        qHi: "दिए गए आँकड़ों 4, 7, 5, 4, 8, 4, 9, 7, 4, 5 का बहुलक (Mode) क्या है?",
        options: ["4", "5", "7", "8"],
        optionsHi: ["4", "5", "7", "8"],
        ans: 0,
        pyqRef: "CTET Paper 2 & UPTET",
        explanation: "The number 4 appears 4 times (highest frequency), so mode is 4.",
        explanationHi: "संख्या 4 सबसे अधिक 4 बार आई है, अतः बहुलक 4 है।"
      },
      {
        id: 6,
        q: "What is the median of the data set: 15, 7, 22, 13, 9, 18, 25?",
        qHi: "आँकड़ों के समूह 15, 7, 22, 13, 9, 18, 25 की माध्यिका (Median) क्या होगी?",
        options: ["13", "15", "18", "16"],
        optionsHi: ["13", "15", "18", "16"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Arrange in ascending order: 7, 9, 13, 15, 18, 22, 25. The middle (4th) term is 15.",
        explanationHi: "आरोही क्रम: 7, 9, 13, 15, 18, 22, 25। ठीक बीच वाला (चौथा) पद 15 है।"
      },
      {
        id: 7,
        q: "In a bar graph, what must always remain uniform/equal for all bars?",
        qHi: "एक दंड आलेख (Bar Graph) में सभी दंडों के लिए क्या सदैव एकसमान रहना चाहिए?",
        options: ["Height of the bars", "Width of the bars and spacing between them", "Color of the bars", "Area of the bars"],
        optionsHi: ["दंडों की ऊँचाई", "दंडों की चौड़ाई एवं उनके बीच की दूरी", "दंडों का रंग", "दंडों का क्षेत्रफल"],
        ans: 1,
        pyqRef: "NCERT Class 6 Ganita Prakash & CTET Pedagogy",
        explanation: "In a bar graph, bars must have equal width and equal gap/spacing between them. Only heights vary.",
        explanationHi: "दंड आलेख में सभी दंडों की चौड़ाई और उनके बीच का अंतराल एकसमान होना चाहिए। केवल ऊँचाई भिन्न होती है।"
      },
      {
        id: 8,
        q: "On a bar graph, if 1 cm represents 100 students, how long should the bar be to represent 450 students?",
        qHi: "दंड आलेख पर यदि 1 सेमी = 100 विद्यार्थी है, तो 450 विद्यार्थियों को दर्शाने वाले दंड की लंबाई क्या होगी?",
        options: ["4.0 cm", "4.5 cm", "5.0 cm", "5.5 cm"],
        optionsHi: ["4.0 सेमी", "4.5 सेमी", "5.0 सेमी", "5.5 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "450 / 100 = 4.5 cm.",
        explanationHi: "450 / 100 = 4.5 सेमी।"
      },
      {
        id: 9,
        q: "If the mean of five numbers 10, 12, 16, x, 20 is 15, what is the value of x?",
        qHi: "यदि पाँच संख्याओं 10, 12, 16, x, 20 का माध्य 15 है, तो x का मान क्या होगा?",
        options: ["15", "17", "18", "19"],
        optionsHi: ["15", "17", "18", "19"],
        ans: 1,
        pyqRef: "SSC CHSL & BPSC TRE Middle",
        explanation: "Sum = 15 * 5 = 75. 10 + 12 + 16 + 20 + x = 58 + x = 75 => x = 75 - 58 = 17.",
        explanationHi: "कुल योग = 15 * 5 = 75। 10 + 12 + 16 + 20 + x = 58 + x = 75 => x = 75 - 58 = 17।"
      },
      {
        id: 10,
        q: "A student scored 65, 70, 75, 80, 85 in five subjects. What is their average score?",
        qHi: "एक छात्र ने पाँच विषयों में 65, 70, 75, 80, 85 अंक प्राप्त किए। उसका औसत अंक क्या है?",
        options: ["70", "75", "78", "80"],
        optionsHi: ["70", "75", "78", "80"],
        ans: 1,
        pyqRef: "Railway NTPC & State TET",
        explanation: "For numbers in arithmetic progression with equal difference, the mean is the middle term = 75.",
        explanationHi: "समान अंतर वाले समांतर अनुक्रम के लिए औसत ठीक बीच वाला पद होता है = 75।"
      },
      {
        id: 11,
        q: "How many tally marks are there in 4 bundles of five plus 3 individual lines?",
        qHi: "पाँच के 4 बंडल और 3 अलग खड़ी रेखाओं द्वारा निरूपित कुल संख्या क्या है?",
        options: ["19", "21", "23", "25"],
        optionsHi: ["19", "21", "23", "25"],
        ans: 2,
        pyqRef: "CTET Paper 1",
        explanation: "4 * 5 + 3 = 20 + 3 = 23.",
        explanationHi: "4 * 5 + 3 = 20 + 3 = 23।"
      },
      {
        id: 12,
        q: "What is the median of the first six positive integers (1, 2, 3, 4, 5, 6)?",
        qHi: "प्रथम छह धनात्मक पूर्णांकों (1, 2, 3, 4, 5, 6) की माध्यिका क्या होगी?",
        options: ["3.0", "3.5", "4.0", "4.5"],
        optionsHi: ["3.0", "3.5", "4.0", "4.5"],
        ans: 1,
        pyqRef: "CTET Paper 2 & DSSSB",
        explanation: "With even n = 6, median is the average of 3rd and 4th terms: (3 + 4)/2 = 3.5.",
        explanationHi: "सम n = 6 होने पर माध्यिका तीसरे और चौथे पद का औसत होती है: (3 + 4)/2 = 3.5।"
      },
      {
        id: 13,
        q: "If each observation in a data set is increased by 5, what happens to the mean?",
        qHi: "यदि आँकड़ों के समूह के प्रत्येक प्रेक्षण में 5 जोड़ दिया जाए, तो माध्य पर क्या प्रभाव पड़ेगा?",
        options: ["Remains unchanged", "Increases by 5", "Multiplies by 5", "Increases by 5n"],
        optionsHi: ["अपरिवर्तित रहेगा", "5 बढ़ जाएगा", "5 गुना हो जाएगा", "5n बढ़ जाएगा"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "If every value increases by a constant k, the new mean increases by exactly k.",
        explanationHi: "यदि प्रत्येक मान में k जोड़ा जाता है, तो नया माध्य भी ठीक k बढ़ जाता है।"
      },
      {
        id: 14,
        q: "If each observation in a data set is multiplied by 3, what happens to the mean?",
        qHi: "यदि प्रत्येक प्रेक्षण को 3 से गुणा कर दिया जाए, तो माध्य पर क्या प्रभाव पड़ेगा?",
        options: ["Increases by 3", "Multiplies by 3", "Divides by 3", "Remains same"],
        optionsHi: ["3 बढ़ जाएगा", "3 गुना हो जाएगा", "3 से भाग हो जाएगा", "समान रहेगा"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "The mean is multiplied by 3.",
        explanationHi: "माध्य भी 3 गुना हो जाएगा।"
      },
      {
        id: 15,
        q: "What is the mode of: 2, 3, 3, 4, 4, 5, 6?",
        qHi: "आँकड़ों 2, 3, 3, 4, 4, 5, 6 का बहुलक क्या होगा?",
        options: ["Only 3", "Only 4", "Bimodal: Both 3 and 4", "No mode"],
        optionsHi: ["केवल 3", "केवल 4", "द्वि-बहुलक: 3 और 4 दोनों", "कोई बहुलक नहीं"],
        ans: 2,
        pyqRef: "BPSC TRE 4.0 Middle",
        explanation: "Both 3 and 4 appear twice (equal highest frequency). The data is bimodal.",
        explanationHi: "3 और 4 दोनों समान रूप से 2-2 बार आए हैं। यह द्वि-बहुलक (Bimodal) है।"
      },
      {
        id: 16,
        q: "Which representation is BEST suited for comparing quantities across different categories at a glance?",
        qHi: "विभिन्न श्रेणियों की मात्राओं की एक नज़र में तुलना करने के लिए कौन-सा निरूपण सर्वोत्तम है?",
        options: ["Raw text paragraph", "Bar graph", "Tally sheet alone", "Single average value"],
        optionsHi: ["कच्चा गद्यांश", "दंड आलेख (Bar graph)", "केवल मिलान पत्रक", "एकल औसत मान"],
        ans: 1,
        pyqRef: "CTET Pedagogy",
        explanation: "Bar graphs provide immediate visual comparison of heights/lengths across categories.",
        explanationHi: "दंड आलेख विभिन्न श्रेणियों की ऊँचाइयों/लंबाईयों की तुरंत दृश्य तुलना प्रस्तुत करता है।"
      },
      {
        id: 17,
        q: "In a survey, 120 people like Tea, 80 like Coffee, and 40 like Juice. What fraction of people like Coffee?",
        qHi: "एक सर्वेक्षण में 120 लोग चाय, 80 लोग कॉफी और 40 लोग जूस पसंद करते हैं। कॉफी पसंद करने वाले लोगों का भिन्न क्या है?",
        options: ["1/4", "1/3", "1/2", "2/5"],
        optionsHi: ["1/4", "1/3", "1/2", "2/5"],
        ans: 1,
        pyqRef: "Railway NTPC & SSC MTS",
        explanation: "Total people = 120 + 80 + 40 = 240. Fraction for coffee = 80 / 240 = 1/3.",
        explanationHi: "कुल लोग = 120 + 80 + 40 = 240। कॉफी का भिन्न = 80 / 240 = 1/3।"
      },
      {
        id: 18,
        q: "What is the average of all prime numbers between 10 and 20 (11, 13, 17, 19)?",
        qHi: "10 और 20 के बीच की सभी अभाज्य संख्याओं (11, 13, 17, 19) का औसत क्या होगा?",
        options: ["14", "15", "16", "17"],
        optionsHi: ["14", "15", "16", "17"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Sum = 11 + 13 + 17 + 19 = 60. Average = 60 / 4 = 15.",
        explanationHi: "योग = 11 + 13 + 17 + 19 = 60। औसत = 60 / 4 = 15।"
      },
      {
        id: 19,
        q: "If the range of a data set is 28 and the lowest value is 14, what is the highest value?",
        qHi: "यदि आँकड़ों के समूह का परिसर 28 है और सबसे छोटा मान 14 है, तो सबसे बड़ा मान क्या होगा?",
        options: ["32", "42", "46", "52"],
        optionsHi: ["32", "42", "46", "52"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Range = Max - Min => 28 = Max - 14 => Max = 28 + 14 = 42.",
        explanationHi: "परिसर = उच्चतम - न्यूनतम => 28 = Max - 14 => Max = 28 + 14 = 42।"
      },
      {
        id: 20,
        q: "The heights of 5 players are 160 cm, 162 cm, 165 cm, 168 cm, and 170 cm. What is the median height?",
        qHi: "5 खिलाड़ियों की ऊँचाई 160 सेमी, 162 सेमी, 165 सेमी, 168 सेमी और 170 सेमी है। माध्यिका ऊँचाई क्या होगी?",
        options: ["162 cm", "165 cm", "166 cm", "168 cm"],
        optionsHi: ["162 सेमी", "165 सेमी", "166 सेमी", "168 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Data is already ordered. The middle (3rd) term is 165 cm.",
        explanationHi: "आँकड़े पहले से क्रमबद्ध हैं। तीसरा पद 165 सेमी है।"
      },
      {
        id: 21,
        q: "If a pictograph displays 3 and a half stars, and 1 full star = 20 books, how many books are shown?",
        qHi: "यदि एक चित्रालेख में 3 और आधा तारा दिखाया गया है, और 1 पूरा तारा = 20 पुस्तकें हैं, तो कुल कितनी पुस्तकें दिखाई गई हैं?",
        options: ["60 books", "70 books", "75 books", "80 books"],
        optionsHi: ["60 पुस्तकें", "70 पुस्तकें", "75 पुस्तकें", "80 पुस्तकें"],
        ans: 1,
        pyqRef: "CTET Paper 1",
        explanation: "3.5 * 20 = 70 books.",
        explanationHi: "3.5 * 20 = 70 पुस्तकें।"
      },
      {
        id: 22,
        q: "The mean of 4 numbers is 20. If one number 35 is excluded, what is the mean of the remaining 3 numbers?",
        qHi: "4 संख्याओं का माध्य 20 है। यदि एक संख्या 35 को निकाल दिया जाए, तो शेष 3 संख्याओं का माध्य क्या होगा?",
        options: ["12", "15", "16", "18"],
        optionsHi: ["12", "15", "16", "18"],
        ans: 1,
        pyqRef: "SSC CHSL & BPSC TRE Middle",
        explanation: "Total sum = 4 * 20 = 80. After removing 35, new sum = 80 - 35 = 45. New mean = 45 / 3 = 15.",
        explanationHi: "कुल योग = 4 * 20 = 80। 35 निकालने के बाद नया योग = 80 - 35 = 45। नया माध्य = 45 / 3 = 15।"
      },
      {
        id: 23,
        q: "Which measure of central tendency is most affected by extreme values (outliers)?",
        qHi: "चरम मानों (Outliers) से केंद्रीय प्रवृत्ति का कौन-सा माप सबसे अधिक प्रभावित होता है?",
        options: ["Mode", "Median", "Mean", "None of these"],
        optionsHi: ["बहुलक", "माध्यिका", "माध्य (Mean)", "इनमें से कोई नहीं"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "The Mean takes into account the magnitude of every observation, making it highly sensitive to outliers.",
        explanationHi: "माध्य प्रत्येक प्रेक्षण के परिमाण को शामिल करता है, इसलिए यह चरम मानों से अत्यधिक प्रभावित होता है।"
      },
      {
        id: 24,
        q: "Which measure of central tendency represents the most common shoe size sold in a store?",
        qHi: "एक जूते की दुकान में सबसे ज्यादा बिकने वाले जूते के आकार को दर्शाने के लिए केंद्रीय प्रवृत्ति का कौन-सा माप उपयुक्त है?",
        options: ["Mean", "Median", "Mode", "Range"],
        optionsHi: ["माध्य", "माध्यिका", "बहुलक (Mode)", "परिसर"],
        ans: 2,
        pyqRef: "NCERT Exemplar & CTET Pedagogy",
        explanation: "The shoe size sold most often is the Mode (highest frequency).",
        explanationHi: "दुकान में सबसे ज्यादा बिकने वाला आकार बहुलक (Mode - सर्वाधिक बारंबारता) द्वारा दर्शाया जाता है।"
      },
      {
        id: 25,
        q: "What is the mean of the factors of 12 (1, 2, 3, 4, 6, 12)?",
        qHi: "12 के सभी गुणनखंडों (1, 2, 3, 4, 6, 12) का माध्य क्या होगा?",
        options: ["4.0", "4.67", "5.0", "5.5"],
        optionsHi: ["4.0", "4.67", "5.0", "5.5"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Sum = 1 + 2 + 3 + 4 + 6 + 12 = 28. Mean = 28 / 6 = 4.67.",
        explanationHi: "योग = 1 + 2 + 3 + 4 + 6 + 12 = 28। माध्य = 28 / 6 = 4.67।"
      },
      {
        id: 26,
        q: "If the mode of 10, 12, 11, 10, 15, x, 14 is 10, then x cannot be:",
        qHi: "यदि 10, 12, 11, 10, 15, x, 14 का बहुलक 10 है, तो x का मान क्या नहीं हो सकता?",
        options: ["10", "11", "12", "12 (if it would make 12 equal to 10's frequency)"],
        optionsHi: ["10", "11", "13", "अन्य कोई मान"],
        ans: 0,
        pyqRef: "State TET & KVS",
        explanation: "10 appears twice. If x is 10, mode is strongly 10. (Any choice confirming 10 is the mode).",
        explanationHi: "10 दो बार आया है। यदि x = 10 हो, तो 10 की बारंबारता 3 हो जाएगी।"
      },
      {
        id: 27,
        q: "A bar graph has horizontal bars. What is represented along the vertical axis?",
        qHi: "एक क्षैतिज दंड आलेख (Horizontal Bar Graph) में ऊर्ध्वाधर अक्ष (Vertical axis) पर क्या दर्शाया जाता है?",
        options: ["Frequencies / Numerical values", "Categories / Variables", "Time period always", "Scale unit"],
        optionsHi: ["बारंबारता / संख्यात्मक मान", "श्रेणियाँ / चर (Categories)", "सदैव समयावधि", "पैमाना इकाई"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "In horizontal bar graphs, categories are listed on the vertical axis, and lengths (values) on the horizontal axis.",
        explanationHi: "क्षैतिज दंड आलेख में श्रेणियों को ऊर्ध्वाधर अक्ष पर और मानों (लंबाई) को क्षैतिज अक्ष पर दर्शाया जाता है।"
      },
      {
        id: 28,
        q: "What is the median of: 8, 3, 9, 12, 5, 7, 10, 2?",
        qHi: "आँकड़ों 8, 3, 9, 12, 5, 7, 10, 2 की माध्यिका क्या होगी?",
        options: ["7.0", "7.5", "8.0", "8.5"],
        optionsHi: ["7.0", "7.5", "8.0", "8.5"],
        ans: 1,
        pyqRef: "SSC CHSL & Railway NTPC",
        explanation: "Sorted: 2, 3, 5, 7, 8, 9, 10, 12. Total 8 items. Median = (7 + 8)/2 = 7.5.",
        explanationHi: "आरोही क्रम: 2, 3, 5, 7, 8, 9, 10, 12। कुल 8 पद। माध्यिका = (7 + 8)/2 = 7.5।"
      },
      {
        id: 29,
        q: "In a pie chart, what does a full circle of 360 degrees represent?",
        qHi: "वृत्त आलेख (पाई चार्ट) में 360 डिग्री का पूरा वृत्त किसे दर्शाता है?",
        options: ["50% of data", "100% of total data", "Average of data", "Highest frequency"],
        optionsHi: ["50% आँकड़े", "कुल आँकड़ों का 100%", "आँकड़ों का औसत", "सर्वाधिक बारंबारता"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "The complete 360° circle represents the whole (100%) of the data set.",
        explanationHi: "360° का पूरा वृत्त संपूर्ण आँकड़ों (100%) का प्रतिनिधित्व करता है।"
      },
      {
        id: 30,
        q: "What is the mean of first 10 whole numbers (0 to 9)?",
        qHi: "प्रथम 10 पूर्ण संख्याओं (0 से 9) का माध्य क्या होगा?",
        options: ["4.0", "4.5", "5.0", "5.5"],
        optionsHi: ["4.0", "4.5", "5.0", "5.5"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & UPTET",
        explanation: "Sum of 0 to 9 = 45. Mean = 45 / 10 = 4.5.",
        explanationHi: "0 से 9 तक का योग = 45। माध्य = 45 / 10 = 4.5।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 5: Prime Time
  // ==========================================
  {
    id: "ncert-c6-m05",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 5,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 5: Prime Time (अभाज्य संख्याएँ और गुणनखंडन)",
    titleHi: "अध्याय 5: अभाज्य संख्याएँ और गुणनखंडन",
    readingTime: "22 mins read",
    badge: "Core Number Theory",
    desc: "Master the building blocks of mathematics: Prime vs Composite numbers, Sieve of Eratosthenes (25 primes under 100), Twin Primes, Co-prime numbers, Prime Factorization, and HCF & LCM relationships.",
    descHi: "संख्या सिद्धांत का आधार: अभाज्य व भाज्य संख्याएँ, इराटोस्थनीज की छलनी (100 तक की 25 अभाज्य संख्याएँ), अभाज्य युग्म (Twin Primes), सह-अभाज्य संख्याएँ (Co-primes), अभाज्य गुणनखंडन तथा म.स.प. (HCF) एवं ल.स.प. (LCM) के स्वर्णिम नियम।",
    competitionEdge: "Top 3 highest weightage topics in CTET Paper 2, BPSC TRE 4.0 Middle (6-8), SSC CGL, and CDS. Directly tests HCF x LCM = Product of numbers, counting twin primes under 100, and co-prime properties.",
    competitionEdgeHi: "CTET पेपर 2, BPSC शिक्षक भर्ती (कक्षा 6-8) और SSC CGL में सर्वाधिक पूछे जाने वाले अध्यायों में शीर्ष स्थान। दो संख्याओं का गुणनफल = HCF &times; LCM, 100 तक अभाज्य युग्मों की संख्या, और सह-अभाज्य जोड़ों पर लगातार प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. Primes, Composites & The Sieve of Eratosthenes",
        headingHi: "1. अभाज्य, भाज्य संख्याएँ एवं इराटोस्थनीज की छलनी",
        contentHtml: `
          <div class="note-formula-box">
            <h4>🔢 Definitions &amp; Cardinal Rules:</h4>
            <ul>
              <li><strong>Prime Number:</strong> A natural number greater than 1 having <em>exactly two factors</em>: 1 and itself.</li>
              <li><strong>Composite Number:</strong> A natural number greater than 1 having <em>more than two factors</em>.</li>
              <li><strong>Special Number 1:</strong> 1 is <strong>neither prime nor composite</strong> (it has only one factor).</li>
              <li><strong>The Number 2:</strong> 2 is the <strong>smallest prime number</strong> and the <strong>only even prime number</strong>! All other primes are odd.</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 Primes Between 1 and 100 (Total = Exactly 25 Primes):</h4>
            <p style="font-weight:700; color:#1e3a8a;">2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.</p>
            <p><strong>Breakdown:</strong> 1 to 50 = 15 primes; 51 to 100 = 10 primes.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🔢 मूल परिभाषाएँ एवं महत्वपूर्ण नियम:</h4>
            <ul>
              <li><strong>अभाज्य संख्या (Prime Number):</strong> 1 से बड़ी वह प्राकृत संख्या जिसके <em>केवल और केवल दो गुणनखंड</em> हों: 1 और स्वयं वह संख्या।</li>
              <li><strong>भाज्य संख्या (Composite Number):</strong> 1 से बड़ी वह प्राकृत संख्या जिसके <em>दो से अधिक गुणनखंड</em> हों।</li>
              <li><strong>संख्या 1 का विशेष नियम:</strong> संख्या 1 <strong>न तो अभाज्य है और न ही भाज्य</strong> (क्योंकि इसका केवल 1 ही गुणनखंड है)।</li>
              <li><strong>संख्या 2 का महत्व:</strong> 2 <strong>सबसे छोटी अभाज्य संख्या</strong> है और <strong>एकमात्र सम अभाज्य संख्या</strong> है! अन्य सभी अभाज्य संख्याएँ विषम होती हैं।</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 1 से 100 तक की कुल अभाज्य संख्याएँ (कुल = ठीक 25):</h4>
            <p style="font-weight:700; color:#1e3a8a;">2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.</p>
            <p><strong>विभाजन:</strong> 1 से 50 तक = 15 अभाज्य; 51 से 100 तक = 10 अभाज्य संख्याएँ।</p>
          </div>
        `
      },
      {
        heading: "2. Twin Primes, Co-Primes & Prime Factorization",
        headingHi: "2. अभाज्य युग्म (Twin Primes), सह-अभाज्य एवं अभाज्य गुणनखंडन",
        contentHtml: `
          <div class="note-formula-box">
            <h4>⚡ Twin Primes (अभाज्य युग्म):</h4>
            <p>Two prime numbers with a difference of 2 are called Twin Primes. There are exactly <strong>8 pairs of twin primes</strong> between 1 and 100:</p>
            <p style="text-align:center; font-weight:700; color:#2563eb;">(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)</p>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>⚡ Co-Prime Numbers (सह-अभाज्य संख्याएँ):</h4>
            <p>Two numbers are co-prime if their only common factor is 1 (HCF = 1). <em>Note: The numbers themselves do not have to be prime!</em> Example: 8 (composite) and 9 (composite) are co-prime because HCF(8, 9) = 1.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>⚡ अभाज्य युग्म (Twin Primes):</h4>
            <p>वे दो अभाज्य संख्याएँ जिनके बीच का अंतर ठीक 2 हो, अभाज्य युग्म कहलाती हैं। 1 से 100 के बीच ठीक <strong>8 अभाज्य युग्म</strong> होते हैं:</p>
            <p style="text-align:center; font-weight:700; color:#2563eb;">(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)</p>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>⚡ सह-अभाज्य संख्याएँ (Co-Prime Numbers):</h4>
            <p>वे दो संख्याएँ जिनका उभयनिष्ठ गुणनखंड केवल 1 हो (म.स.प. = 1)। <em>ध्यान दें: इन संख्याओं का स्वयं अभाज्य होना आवश्यक नहीं है!</em> उदाहरण: 8 (भाज्य) और 9 (भाज्य) सह-अभाज्य हैं क्योंकि HCF(8, 9) = 1।</p>
          </div>
        `
      },
      {
        heading: "3. HCF, LCM & The Master Product Theorem",
        headingHi: "3. म.स.प., ल.स.प. एवं गुणनफल का मुख्य प्रमेय",
        contentHtml: `
          <div class="note-formula-box">
            <h4>🏆 Master Relationship for Any Two Numbers a and b:</h4>
            <p style="font-size:1.2rem; font-weight:800; text-align:center; color:#dc2626;">HCF(a, b) &times; LCM(a, b) = a &times; b</p>
            <p><strong>Crucial Properties:</strong></p>
            <ul>
              <li>HCF of two numbers is always a factor of their LCM.</li>
              <li>HCF of co-prime numbers is 1, and their LCM is their product (a &times; b).</li>
              <li>LCM of two prime numbers p and q is p &times; q.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🏆 किन्हीं दो संख्याओं a और b के लिए मुख्य संबंध:</h4>
            <p style="font-size:1.2rem; font-weight:800; text-align:center; color:#dc2626;">HCF(a, b) &times; LCM(a, b) = a &times; b</p>
            <p><strong>महत्वपूर्ण गुणधर्म:</strong></p>
            <ul>
              <li>किन्हीं दो संख्याओं का HCF सदैव उनके LCM का एक गुणनखंड होता है।</li>
              <li>सह-अभाज्य संख्याओं का HCF सदैव 1 तथा LCM उनका गुणनफल (a &times; b) होता है।</li>
              <li>दो अभाज्य संख्याओं p और q का LCM सदैव p &times; q होता है।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How many prime numbers are there between 1 and 100?",
        qHi: "1 से 100 के बीच कुल कितनी अभाज्य संख्याएँ (Prime numbers) हैं?",
        options: ["21", "24", "25", "26"],
        optionsHi: ["21", "24", "25", "26"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "There are exactly 25 prime numbers between 1 and 100 (15 up to 50, and 10 from 51 to 100).",
        explanationHi: "1 से 100 के बीच ठीक 25 अभाज्य संख्याएँ होती हैं (50 तक 15, तथा 51 से 100 तक 10)।"
      },
      {
        id: 2,
        q: "Which of the following is the only EVEN prime number?",
        qHi: "निम्नलिखित में से कौन-सी एकमात्र सम अभाज्य संख्या है?",
        options: ["0", "1", "2", "4"],
        optionsHi: ["0", "1", "2", "4"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "2 is the smallest prime number and the only even prime number in mathematics.",
        explanationHi: "2 सबसे छोटी अभाज्य संख्या है और गणित में एकमात्र सम अभाज्य संख्या है।"
      },
      {
        id: 3,
        q: "How many pairs of twin primes exist between 1 and 100?",
        qHi: "1 से 100 के बीच अभाज्य युग्मों (Twin Primes) के कुल कितने जोड़े हैं?",
        options: ["6 pairs", "7 pairs", "8 pairs", "10 pairs"],
        optionsHi: ["6 जोड़े", "7 जोड़े", "8 जोड़े", "10 जोड़े"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & UPTET Paper 2",
        explanation: "There are 8 pairs: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73).",
        explanationHi: "कुल 8 जोड़े होते हैं: (3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73)।"
      },
      {
        id: 4,
        q: "If the HCF of two numbers is 6 and their LCM is 72, and one number is 24, find the other number.",
        qHi: "यदि दो संख्याओं का म.स.प. (HCF) 6 और ल.स.प. (LCM) 72 है, तथा एक संख्या 24 है, तो दूसरी संख्या क्या होगी?",
        options: ["12", "18", "36", "48"],
        optionsHi: ["12", "18", "36", "48"],
        ans: 1,
        pyqRef: "SSC CGL / CHSL & BPSC TRE",
        explanation: "Product = HCF * LCM => 24 * b = 6 * 72 => b = 432 / 24 = 18.",
        explanationHi: "दो संख्याओं का गुणनफल = HCF * LCM => 24 * b = 6 * 72 => b = 432 / 24 = 18।"
      },
      {
        id: 5,
        q: "Which of the following pairs of numbers is CO-PRIME?",
        qHi: "निम्नलिखित में से संख्याओं का कौन-सा युग्म सह-अभाज्य (Co-prime) है?",
        options: ["14 and 35", "18 and 25", "31 and 93", "27 and 36"],
        optionsHi: ["14 और 35", "18 और 25", "31 और 93", "27 और 36"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "HCF(18, 25) = 1 (factors of 18: 1,2,3,6,9,18; factors of 25: 1,5,25). Only 1 is common.",
        explanationHi: "HCF(18, 25) = 1 है। इनमें केवल 1 ही उभयनिष्ठ गुणनखंड है, अतः ये सह-अभाज्य हैं।"
      },
      {
        id: 6,
        q: "What is the HCF of two consecutive natural numbers n and n + 1?",
        qHi: "दो क्रमागत प्राकृत संख्याओं n और n + 1 का म.स.प. (HCF) सदैव क्या होता है?",
        options: ["0", "1", "2", "n"],
        optionsHi: ["0", "1", "2", "n"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & CDS",
        explanation: "Any two consecutive integers have no common factor other than 1, so HCF is always 1.",
        explanationHi: "किन्हीं दो लगातार पूर्णांकों का 1 के अलावा कोई अन्य उभयनिष्ठ गुणनखंड नहीं होता, अतः HCF सदैव 1 होता है।"
      },
      {
        id: 7,
        q: "What is the LCM of two co-prime numbers a and b?",
        qHi: "दो सह-अभाज्य संख्याओं a और b का ल.स.प. (LCM) क्या होगा?",
        options: ["1", "a + b", "a * b", "a / b"],
        optionsHi: ["1", "a + b", "a * b", "a / b"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Since HCF(a, b) = 1, LCM = (a * b) / HCF = a * b.",
        explanationHi: "चूँकि HCF(a, b) = 1 होता है, अतः LCM = (a * b) / 1 = a * b।"
      },
      {
        id: 8,
        q: "What is the prime factorization of 72?",
        qHi: "72 का अभाज्य गुणनखंडन क्या है?",
        options: ["2^3 * 3^2", "2^2 * 3^3", "2^4 * 3", "8 * 9"],
        optionsHi: ["2^3 * 3^2", "2^2 * 3^3", "2^4 * 3", "8 * 9"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "72 = 8 * 9 = 2^3 * 3^2.",
        explanationHi: "72 = 8 * 9 = 2^3 * 3^2।"
      },
      {
        id: 9,
        q: "What is the smallest composite number?",
        qHi: "सबसे छोटी भाज्य संख्या (Composite number) कौन-सी है?",
        options: ["1", "2", "3", "4"],
        optionsHi: ["1", "2", "3", "4"],
        ans: 3,
        pyqRef: "BPSC TRE Primary/Middle",
        explanation: "1 is neither, 2 is prime, 3 is prime. 4 has factors 1, 2, 4 (more than 2 factors), so 4 is the smallest composite.",
        explanationHi: "1 न तो अभाज्य है न भाज्य, 2 अभाज्य है, 3 अभाज्य है। 4 के गुणनखंड 1, 2, 4 हैं, अतः 4 सबसे छोटी भाज्य संख्या है।"
      },
      {
        id: 10,
        q: "What is the HCF of 24, 36, and 60?",
        qHi: "24, 36 और 60 का म.स.प. (HCF) क्या होगा?",
        options: ["6", "12", "18", "24"],
        optionsHi: ["6", "12", "18", "24"],
        ans: 1,
        pyqRef: "SSC CHSL & Railway Group D",
        explanation: "24 = 12 * 2; 36 = 12 * 3; 60 = 12 * 5. Highest common factor is 12.",
        explanationHi: "24 = 12 * 2; 36 = 12 * 3; 60 = 12 * 5। सबसे बड़ा उभयनिष्ठ गुणनखंड 12 है।"
      },
      {
        id: 11,
        q: "What is the LCM of 12, 15, and 20?",
        qHi: "12, 15 और 20 का ल.स.प. (LCM) क्या होगा?",
        options: ["30", "60", "90", "120"],
        optionsHi: ["30", "60", "90", "120"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "12 = 2^2 * 3; 15 = 3 * 5; 20 = 2^2 * 5. LCM = 2^2 * 3 * 5 = 60.",
        explanationHi: "12 = 2^2 * 3; 15 = 3 * 5; 20 = 2^2 * 5। LCM = 2^2 * 3 * 5 = 60।"
      },
      {
        id: 12,
        q: "Three bells toll together at intervals of 9, 12, and 15 minutes respectively. After how much time will they toll together next?",
        qHi: "तीन घंटियाँ क्रमशः 9, 12 और 15 मिनट के अंतराल पर बजती हैं। वे अगली बार कितने समय बाद एक साथ बजेंगी?",
        options: ["60 minutes", "120 minutes", "180 minutes (3 hours)", "360 minutes"],
        optionsHi: ["60 मिनट", "120 मिनट", "180 मिनट (3 घंटे)", "360 मिनट"],
        ans: 2,
        pyqRef: "CTET Paper 2 & SSC CGL",
        explanation: "LCM(9, 12, 15) = 180 minutes = 3 hours.",
        explanationHi: "LCM(9, 12, 15) = 180 मिनट = 3 घंटे।"
      },
      {
        id: 13,
        q: "What is the largest 2-digit prime number?",
        qHi: "दो अंकों की सबसे बड़ी अभाज्य संख्या कौन-सी है?",
        options: ["91", "93", "97", "99"],
        optionsHi: ["91", "93", "97", "99"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2 & State Police",
        explanation: "97 is the largest 2-digit prime number (91 is 7*13, 93 is 3*31, 99 is 9*11).",
        explanationHi: "97 दो अंकों की सबसे बड़ी अभाज्य संख्या है (91 = 7*13, 93 = 3*31, 99 = 9*11)।"
      },
      {
        id: 14,
        q: "What is the smallest 3-digit prime number?",
        qHi: "तीन अंकों की सबसे छोटी अभाज्य संख्या कौन-सी है?",
        options: ["101", "103", "107", "109"],
        optionsHi: ["101", "103", "107", "109"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "101 is the smallest 3-digit prime number.",
        explanationHi: "101 तीन अंकों की सबसे छोटी अभाज्य संख्या है।"
      },
      {
        id: 15,
        q: "Can the HCF of two numbers be 15 and their LCM be 130?",
        qHi: "क्या किन्हीं दो संख्याओं का म.स.प. (HCF) 15 और ल.स.प. (LCM) 130 हो सकता है?",
        options: ["Yes, always", "No, because HCF must completely divide LCM", "Only if numbers are odd", "Only if one number is 15"],
        optionsHi: ["हाँ, सदैव", "नहीं, क्योंकि HCF को LCM को पूर्णतः विभाजित करना चाहिए", "केवल यदि संख्याएँ विषम हों", "केवल यदि एक संख्या 15 हो"],
        ans: 1,
        pyqRef: "CTET Paper 2 & NCERT Exemplar",
        explanation: "HCF must always divide LCM completely. 130 is not divisible by 15 (130/15 = 8.66), so it is impossible.",
        explanationHi: "HCF को सदैव LCM को पूर्णतः विभाजित करना चाहिए। 130 को 15 से भाग नहीं दिया जा सकता (130/15 = 8.66), अतः यह असंभव है।"
      },
      {
        id: 16,
        q: "What is the total number of factors of 36?",
        qHi: "36 के कुल कितने गुणनखंड (factors) होते हैं?",
        options: ["7", "8", "9", "10"],
        optionsHi: ["7", "8", "9", "10"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "36 = 2^2 * 3^2. Number of factors = (2 + 1)(2 + 1) = 3 * 3 = 9 (1, 2, 3, 4, 6, 9, 12, 18, 36).",
        explanationHi: "36 = 2^2 * 3^2। गुणनखंडों की संख्या = (2 + 1)(2 + 1) = 3 * 3 = 9 (1, 2, 3, 4, 6, 9, 12, 18, 36)।"
      },
      {
        id: 17,
        q: "What is the sum of all factors of 24?",
        qHi: "24 के सभी गुणनखंडों का योग क्या होगा?",
        options: ["48", "56", "60", "64"],
        optionsHi: ["48", "56", "60", "64"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. Sum = 1 + 2 + 3 + 4 + 6 + 8 + 12 + 24 = 60.",
        explanationHi: "24 के गुणनखंड 1, 2, 3, 4, 6, 8, 12, 24 हैं। योग = 1 + 2 + 3 + 4 + 6 + 8 + 12 + 24 = 60।"
      },
      {
        id: 18,
        q: "Which pair of numbers has an HCF of 18 and LCM of 108?",
        qHi: "संख्याओं के किस युग्म का म.स.प. 18 और ल.स.प. 108 है?",
        options: ["18 and 108", "36 and 54", "Both A and B can have HCF 18 and LCM 108", "None of these"],
        optionsHi: ["18 और 108", "36 और 54", "A और B दोनों युग्मों का", "इनमें से कोई नहीं"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "For (18, 108): HCF=18, LCM=108. For (36, 54): 36=18*2, 54=18*3, HCF=18, LCM=18*2*3=108. Both pairs are valid.",
        explanationHi: "(18, 108) तथा (36, 54) दोनों के लिए HCF 18 और LCM 108 ही होता है। अतः दोनों विकल्प सही हैं।"
      },
      {
        id: 19,
        q: "Find the greatest number which divides 64 and 80 leaving no remainder.",
        qHi: "वह सबसे बड़ी संख्या ज्ञात कीजिए जो 64 और 80 को बिना शेषफल छोड़े पूर्णतः विभाजित करती है।",
        options: ["8", "12", "16", "20"],
        optionsHi: ["8", "12", "16", "20"],
        ans: 2,
        pyqRef: "Railway NTPC & SSC MTS",
        explanation: "HCF(64, 80) = 16.",
        explanationHi: "HCF(64, 80) = 16।"
      },
      {
        id: 20,
        q: "Find the least number which when divided by 6, 8, and 12 leaves a remainder of 3 in each case.",
        qHi: "वह सबसे छोटी संख्या ज्ञात कीजिए जिसे 6, 8 और 12 से भाग देने पर प्रत्येक दशा में 3 शेष बचे।",
        options: ["21", "24", "27", "51"],
        optionsHi: ["21", "24", "27", "51"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "LCM(6, 8, 12) = 24. Required number = 24 + 3 = 27.",
        explanationHi: "LCM(6, 8, 12) = 24। अभीष्ट संख्या = 24 + 3 = 27।"
      },
      {
        id: 21,
        q: "How many primes are there between 90 and 100?",
        qHi: "90 और 100 के बीच कुल कितनी अभाज्य संख्याएँ हैं?",
        options: ["0", "1 (only 97)", "2", "3"],
        optionsHi: ["0", "1 (केवल 97)", "2", "3"],
        ans: 1,
        pyqRef: "CTET Paper 2 & UPTET",
        explanation: "Between 90 and 100, the only prime number is 97.",
        explanationHi: "90 और 100 के बीच एकमात्र अभाज्य संख्या 97 है।"
      },
      {
        id: 22,
        q: "A prime triplet is a set of three prime numbers of the form p, p+2, p+6 (or p, p+4, p+6). What is the ONLY set of primes of the form p, p+2, p+4?",
        qHi: "अभाज्य त्रिक p, p+2, p+4 के रूप में आने वाला एकमात्र अभाज्य संख्याओं का समुच्चय कौन-सा है?",
        options: ["1, 3, 5", "3, 5, 7", "5, 7, 9", "7, 9, 11"],
        optionsHi: ["1, 3, 5", "3, 5, 7", "5, 7, 9", "7, 9, 11"],
        ans: 1,
        pyqRef: "Olympiad & BPSC TRE Middle",
        explanation: "3, 5, 7 is the only set of prime numbers differing by 2 successively (since one of p, p+2, p+4 must be a multiple of 3).",
        explanationHi: "3, 5, 7 एकमात्र ऐसा अभाज्य त्रिक है जहाँ प्रत्येक में 2 का अंतर है (क्योंकि p, p+2, p+4 में से एक संख्या 3 का गुणज अवश्य होगी)।"
      },
      {
        id: 23,
        q: "What is the HCF of two prime numbers p and q?",
        qHi: "दो अभाज्य संख्याओं p और q का म.स.प. (HCF) क्या होगा?",
        options: ["0", "1", "p * q", "p + q"],
        optionsHi: ["0", "1", "p * q", "p + q"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Since prime numbers have no common factor other than 1, their HCF is always 1.",
        explanationHi: "चूँकि अभाज्य संख्याओं का 1 के अतिरिक्त कोई अन्य गुणनखंड नहीं होता, अतः HCF सदैव 1 होता है।"
      },
      {
        id: 24,
        q: "Which ancient Greek mathematician invented the sieve method to find prime numbers?",
        qHi: "अभाज्य संख्याओं को ज्ञात करने की छलनी विधि (Sieve method) का आविष्कार किस प्राचीन यूनानी गणितज्ञ ने किया था?",
        options: ["Pythagoras", "Euclid", "Eratosthenes", "Archimedes"],
        optionsHi: ["पाइथागोरस", "यूक्लिड", "इराटोस्थनीज (Eratosthenes)", "आर्किमिडीज"],
        ans: 2,
        pyqRef: "NCERT Class 6 Ganita Prakash History",
        explanation: "Eratosthenes of Cyrene (3rd century BCE) devised the Sieve of Eratosthenes.",
        explanationHi: "सायरिन के इराटोस्थनीज (तीसरी शताब्दी ईसा पूर्व) ने अभाज्य संख्याएँ खोजने की यह विधि विकसित की थी।"
      },
      {
        id: 25,
        q: "The HCF and LCM of two numbers are 12 and 144 respectively. If one number is 36, what is the other number?",
        qHi: "दो संख्याओं का म.स.प. 12 और ल.स.प. 144 है। यदि एक संख्या 36 है, तो दूसरी संख्या क्या है?",
        options: ["24", "48", "60", "72"],
        optionsHi: ["24", "48", "60", "72"],
        ans: 1,
        pyqRef: "SSC CHSL & Railway NTPC",
        explanation: "Other number = (12 * 144) / 36 = 12 * 4 = 48.",
        explanationHi: "दूसरी संख्या = (12 * 144) / 36 = 12 * 4 = 48।"
      },
      {
        id: 26,
        q: "If the product of two co-prime numbers is 117, what is their LCM?",
        qHi: "यदि दो सह-अभाज्य संख्याओं का गुणनफल 117 है, तो उनका ल.स.प. (LCM) क्या होगा?",
        options: ["1", "9", "13", "117"],
        optionsHi: ["1", "9", "13", "117"],
        ans: 3,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "For co-prime numbers, HCF = 1. LCM = Product / HCF = 117 / 1 = 117.",
        explanationHi: "सह-अभाज्य संख्याओं के लिए HCF = 1 होता है। LCM = गुणनफल / HCF = 117 / 1 = 117।"
      },
      {
        id: 27,
        q: "What is the HCF of 0 and 5?",
        qHi: "0 और 5 का म.स.प. (HCF) क्या होगा?",
        options: ["0", "1", "5", "Undefined"],
        optionsHi: ["0", "1", "5", "अपरिभाषित"],
        ans: 2,
        pyqRef: "Advanced Math & State TET",
        explanation: "Every non-zero number divides 0 (0 = 5 * 0). The greatest integer that divides both 5 and 0 is 5.",
        explanationHi: "प्रत्येक गैर-शून्य संख्या 0 को विभाजित करती है (0 = 5 * 0)। 5 और 0 दोनों को विभाजित करने वाला सबसे बड़ा पूर्णांक 5 है।"
      },
      {
        id: 28,
        q: "How many composite numbers are there between 1 and 20?",
        qHi: "1 और 20 के बीच कुल कितनी भाज्य संख्याएँ (Composite numbers) हैं?",
        options: ["10", "11", "12", "13"],
        optionsHi: ["10", "11", "12", "13"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Numbers 2 to 19 (total 18 numbers). Primes are 2, 3, 5, 7, 11, 13, 17, 19 (8 primes). Composite numbers = 18 - 8 = 10 (4, 6, 8, 9, 10, 12, 14, 15, 16, 18).",
        explanationHi: "2 से 19 तक कुल 18 संख्याएँ हैं। इनमें 8 अभाज्य हैं। अतः भाज्य संख्याएँ = 18 - 8 = 10 (4, 6, 8, 9, 10, 12, 14, 15, 16, 18)।"
      },
      {
        id: 29,
        q: "Two numbers are in the ratio 3 : 4 and their HCF is 4. What is their LCM?",
        qHi: "दो संख्याएँ 3 : 4 के अनुपात में हैं और उनका म.स.प. 4 है। उनका ल.स.प. (LCM) क्या होगा?",
        options: ["36", "48", "60", "72"],
        optionsHi: ["36", "48", "60", "72"],
        ans: 1,
        pyqRef: "SSC CGL / CHSL & Railway NTPC",
        explanation: "Numbers are 3 * 4 = 12 and 4 * 4 = 16. LCM(12, 16) = 48.",
        explanationHi: "संख्याएँ हैं 3 * 4 = 12 तथा 4 * 4 = 16। LCM(12, 16) = 48।"
      },
      {
        id: 30,
        q: "What is the smallest number which is divisible by all numbers from 1 to 10?",
        qHi: "वह सबसे छोटी संख्या कौन-सी है जो 1 से 10 तक की सभी संख्याओं से पूर्णतः विभाज्य है?",
        options: ["504", "1260", "2520", "5040"],
        optionsHi: ["504", "1260", "2520", "5040"],
        ans: 2,
        pyqRef: "BPSC TRE 4.0 Middle & CTET Paper 2",
        explanation: "LCM(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) = 2^3 * 3^2 * 5 * 7 = 8 * 9 * 5 * 7 = 2520.",
        explanationHi: "LCM(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) = 2^3 * 3^2 * 5 * 7 = 8 * 9 * 5 * 7 = 2520।"
      }
    ]
  }
];

module.exports = chapters;
