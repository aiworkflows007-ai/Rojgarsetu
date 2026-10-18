/**
 * scratch/build_class7_math_p1.js
 * NCERT Class 7 Mathematics - Chapters 1 to 5
 * Ch 1: Integers (पूर्णांक)
 * Ch 2: Fractions and Decimals (भिन्न एवं दशमलव)
 * Ch 3: Data Handling (आंकड़ों का प्रबंधन)
 * Ch 4: Simple Equations (सरल समीकरण)
 * Ch 5: Lines and Angles (रेखा एवं कोण)
 * 
 * Exactly 30 bilingual competition-grade MCQs per chapter (150 MCQs total).
 */

module.exports = [
  // ==========================================
  // CHAPTER 1: Integers (पूर्णांक)
  // ==========================================
  {
    id: "ncert-c7-m01",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 1,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 1: Integers (पूर्णांक)",
    titleHi: "अध्याय 1: पूर्णांक (Integers एवं उनके नियम)",
    readingTime: "22 mins read",
    badge: "Core Algebra & Arithmetic",
    desc: "Comprehensive NCERT Class 7 notes on Integers: Properties of addition, subtraction, multiplication, and division, sign rules, distributive property, and competitive shortcuts.",
    descHi: "एनसीईआरटी कक्षा 7 पूर्णांक का संपूर्ण विश्लेषण: योग, व्यवकलन, गुणन एवं भाग के गुणधर्म, चिन्ह नियम, वितरण गुणधर्म एवं प्रतियोगी परीक्षाओं के ट्रिक्स।",
    competitionEdge: "Foundational for CTET Paper 2, BPSC TRE Middle School, SSC CGL/CHSL, and State TETs. Frequent questions on sign multiplication, distributive law shortcuts, and division properties.",
    competitionEdgeHi: "CTET पेपर 2, BPSC TRE 4.0 मध्य विद्यालय (6-8), SSC एवं रेलवे के लिए अति-महत्वपूर्ण। गुणन के चिन्ह नियम, वितरण नियम से गणना सरल करना, और शून्य से भाग के नियमों पर बार-बार प्रश्न पूछे जाते हैं।",
    pdfUrl: "/ncert_books/class7/math_ch01.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch01_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch01_Integers.pdf",
    pdfSize: "1.31 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Understanding Integers & Number Line",
        headingHi: "1. एनसीईआरटी मूल पाठ: पूर्णांकों की समझ एवं संख्या रेखा",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! Integers ($\mathbb{Z}$) form the backbone of competitive mathematics. In Class 6, we learned addition and subtraction on the number line. In Class 7, NCERT introduces the rigorous multiplication and division rules, closure, commutative, associative, and distributive properties. Mastery of sign conventions here prevents silly negative-marking errors in exams!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Concept: What are Integers?</div>
            <p>Integers consist of whole numbers and negative numbers: <code>... -3, -2, -1, 0, 1, 2, 3 ...</code></p>
            <ul>
              <li><strong>Positive Integers:</strong> $1, 2, 3, 4, \dots$</li>
              <li><strong>Negative Integers:</strong> $-1, -2, -3, -4, \dots$</li>
              <li><strong>Zero ($0$):</strong> Neither positive nor negative, but an integer.</li>
              <li><strong>Number Line Movement:</strong> Adding positive $\to$ move RIGHT; adding negative $\to$ move LEFT; subtracting negative $\to$ move RIGHT!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय अभ्यर्थियों! पूर्णांक ($\mathbb{Z}$) संपूर्ण बीजगणित और अंकगणित की नींव हैं। कक्षा 6 में हमने संख्या रेखा पर जोड़-घटाव सीखा था। कक्षा 7 एनसीईआरटी में गुणन एवं भाग के कठोर नियम, संवृत (Closure), क्रमविनिमेय (Commutative), साहचर्य (Associative) और वितरण (Distributive) गुणधर्म आते हैं। चिन्हों के नियमों को कंठस्थ करने से परीक्षा में निगेटिव मार्किंग से 100% बचा जा सकता है!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 एनसीईआरटी अवधारणा: पूर्णांक क्या हैं?</div>
            <p>पूर्णांकों में सभी पूर्ण संख्याएँ और उनके ऋणात्मक रूप शामिल होते हैं: <code>... -3, -2, -1, 0, 1, 2, 3 ...</code></p>
            <ul>
              <li><strong>धनात्मक पूर्णांक:</strong> $1, 2, 3, 4, \dots$</li>
              <li><strong>ऋणात्मक पूर्णांक:</strong> $-1, -2, -3, -4, \dots$</li>
              <li><strong>शून्य ($0$):</strong> न तो धनात्मक है और न ही ऋणात्मक, लेकिन एक पूर्णांक है।</li>
              <li><strong>संख्या रेखा पर संचलन:</strong> धनात्मक जोड़ना $\to$ दाईं ओर; ऋणात्मक जोड़ना $\to$ बाईं ओर; ऋणात्मक घटाना $\to$ दाईं ओर चलना!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Properties of Addition, Subtraction & Multiplication",
        headingHi: "2. योग, व्यवकलन एवं गुणन के महत्वपूर्ण गुणधर्म",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Algebraic Laws of Integers Matrix</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Property (गुणधर्म)</th>
                  <th>Addition (योग)</th>
                  <th>Subtraction (व्यवकलन)</th>
                  <th>Multiplication (गुणन)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Closure (संवृत)</strong></td>
                  <td>$a + b \in \mathbb{Z}$ (YES)</td>
                  <td>$a - b \in \mathbb{Z}$ (YES)</td>
                  <td>$a \times b \in \mathbb{Z}$ (YES)</td>
                </tr>
                <tr>
                  <td><strong>Commutative (क्रमविनिमेय)</strong></td>
                  <td>$a + b = b + a$ (YES)</td>
                  <td>$a - b \ne b - a$ (NO)</td>
                  <td>$a \times b = b \times a$ (YES)</td>
                </tr>
                <tr>
                  <td><strong>Associative (साहचर्य)</strong></td>
                  <td>$(a + b) + c = a + (b + c)$ (YES)</td>
                  <td>$(a - b) - c \ne a - (b - c)$ (NO)</td>
                  <td>$(a \times b) \times c = a \times (b \times c)$ (YES)</td>
                </tr>
                <tr>
                  <td><strong>Identity Element</strong></td>
                  <td>$0$ (Additive Identity: $a + 0 = a$)</td>
                  <td>None</td>
                  <td>$1$ (Multiplicative Identity: $a \times 1 = a$)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Common Exam Pitfall: Subtraction & Division are NOT Commutative!</div>
            <p>In competitive exams, assertions like <em>"Integers are closed under division"</em> or <em>"Subtraction of integers is associative"</em> frequently appear. Remember: $5 - 3 = 2$, but $3 - 5 = -2$! Thus subtraction is NOT commutative. Also, $6 \div 0$ is undefined, so integers are <strong>NOT closed under division</strong>!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ पूर्णांकों के गणितीय नियमों की मास्टर तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>गुणधर्म (Property)</th>
                  <th>योग (Addition)</th>
                  <th>घटाव (Subtraction)</th>
                  <th>गुणन (Multiplication)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>संवृत (Closure)</strong></td>
                  <td>$a + b \in \mathbb{Z}$ (हाँ)</td>
                  <td>$a - b \in \mathbb{Z}$ (हाँ)</td>
                  <td>$a \times b \in \mathbb{Z}$ (हाँ)</td>
                </tr>
                <tr>
                  <td><strong>क्रमविनिमेय (Commutative)</strong></td>
                  <td>$a + b = b + a$ (हाँ)</td>
                  <td>$a - b \ne b - a$ (नहीं)</td>
                  <td>$a \times b = b \times a$ (हाँ)</td>
                </tr>
                <tr>
                  <td><strong>साहचर्य (Associative)</strong></td>
                  <td>$(a + b) + c = a + (b + c)$ (हाँ)</td>
                  <td>नहीं</td>
                  <td>$(a \times b) \times c = a \times (b \times c)$ (हाँ)</td>
                </tr>
                <tr>
                  <td><strong>तत्समक अवयव (Identity)</strong></td>
                  <td>$0$ (योज्य तत्समक: $a + 0 = a$)</td>
                  <td>कोई नहीं</td>
                  <td>$1$ (गुणनात्मक तत्समक: $a \times 1 = a$)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा जाल: घटाव और भाग क्रमविनिमेय नहीं होते!</div>
            <p>CTET और BPSC में बहुविकल्पीय कथन पूछे जाते हैं: <em>"क्या पूर्णांक भाग के अंतर्गत संवृत हैं?"</em> याद रखें: $6 \div 0$ अपरिभाषित है, और $3 \div 4 = 0.75$ जो पूर्णांक नहीं है! अतः पूर्णांक भाग के अंतर्गत संवृत नहीं हैं।</p>
          </div>
        `
      },
      {
        heading: "3. Distributive Property & Multiplication Rules of Signs",
        headingHi: "3. वितरण नियम (Distributive Law) एवं चिन्हों का गुणन",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Multiplication Rules of Signs</div>
            <ul>
              <li>$(+) \times (+) = (+)$</li>
              <li>$(-) \times (-) = (+)$ (Product of two negative integers is always POSITIVE!)</li>
              <li>$(+) \times (-) = (-)$ and $(-) \times (+) = (-)$</li>
              <li><strong>General Rule for $n$ Negative Numbers:</strong> If count of negative factors is <strong>EVEN</strong>, product is <strong>POSITIVE</strong>. If count is <strong>ODD</strong>, product is <strong>NEGATIVE</strong>!</li>
              <li><strong>Distributive Property of Multiplication over Addition/Subtraction:</strong><br/>
                $$\mathbf{a \times (b + c) = a \times b + a \times c}$$
                $$\mathbf{a \times (b - c) = a \times b - a \times c}$$
              </li>
              <li><strong>Exam Shortcut Example:</strong> Compute $(-48) \times 105$.<br/>
                $$(-48) \times (100 + 5) = (-48 \times 100) + (-48 \times 5) = -4800 - 240 = \mathbf{-5040}$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ चिन्हों के गुणन का नियम व वितरण गुणधर्म</div>
            <ul>
              <li>$(+) \times (+) = (+)$</li>
              <li>$(-) \times (-) = (+)$ (दो ऋणात्मक पूर्णांकों का गुणनफल सदैव धनात्मक होता है!)</li>
              <li>$(+) \times (-) = (-)$ एवं $(-) \times (+) = (-)$</li>
              <li><strong>$n$ ऋणात्मक संख्याओं के गुणन का सामान्य नियम:</strong> यदि ऋणात्मक चिन्हों की संख्या <strong>सम (EVEN)</strong> है तो उत्तर <strong>धनात्मक</strong> होगा। यदि संख्या <strong>विषम (ODD)</strong> है तो उत्तर <strong>ऋणात्मक</strong> होगा!</li>
              <li><strong>योग एवं व्यवकलन पर गुणन का वितरण नियम:</strong><br/>
                $$\mathbf{a \times (b + c) = a \times b + a \times c}$$
                $$\mathbf{a \times (b - c) = a \times b - a \times c}$$
              </li>
              <li><strong>प्रतियोगी परीक्षा ट्रिक:</strong> $(-48) \times 105$ का मान निकालें:<br/>
                $$(-48) \times (100 + 5) = -4800 + (-240) = \mathbf{-5040}$$ (मात्र 5 सेकंड में!)
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the product of (-1) multiplied by itself 99 times, i.e., (-1)^99?",
        qHi: "(-1) को स्वयं से 99 बार गुणा करने पर अर्थात् (-1)^99 का मान क्या होगा?",
        options: ["1", "-1", "99", "-99"],
        optionsHi: ["1", "-1", "99", "-99"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math & BPSC TRE 6-8",
        explanation: "(-1)^n = -1 when n is odd, and +1 when n is even. Since 99 is odd, (-1)^99 = -1.",
        explanationHi: "जब घात विषम संख्या होती है, तो (-1) की घात का मान सदैव -1 होता है। यहाँ 99 विषम है, अतः (-1)^99 = -1।"
      },
      {
        id: 2,
        q: "Which of the following operations is NOT commutative for integers?",
        qHi: "पूर्णांकों के लिए निम्नलिखित में से कौन-सी संक्रिया क्रमविनिमेय नहीं है?",
        options: ["Addition", "Multiplication", "Subtraction", "Both Addition and Multiplication"],
        optionsHi: ["योग", "गुणन", "व्यवकलन (घटाव)", "योग और गुणन दोनों"],
        ans: 2,
        pyqRef: "UPTET Paper 2 & REET Level 2",
        explanation: "For integers, a - b != b - a (e.g., 5 - 3 = 2, but 3 - 5 = -2). Hence, subtraction is not commutative.",
        explanationHi: "पूर्णांकों के लिए a - b != b - a होता है (जैसे 5 - 3 = 2, परंतु 3 - 5 = -2)। अतः घटाव क्रमविनिमेय नहीं है।"
      },
      {
        id: 3,
        q: "Evaluate: (-25) * 102 using distributive property.",
        qHi: "वितरण गुणधर्म का उपयोग करके (-25) * 102 का मान ज्ञात कीजिए।",
        options: ["-2550", "-2500", "-2450", "-2600"],
        optionsHi: ["-2550", "-2500", "-2450", "-2600"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & State TET",
        explanation: "(-25) * (100 + 2) = (-25 * 100) + (-25 * 2) = -2500 - 50 = -2550.",
        explanationHi: "(-25) * (100 + 2) = (-25 * 100) + (-25 * 2) = -2500 - 50 = -2550।"
      },
      {
        id: 4,
        q: "What is the additive inverse of (-45)?",
        qHi: "(-45) का योज्य प्रतिलोम (Additive Inverse) क्या होगा?",
        options: ["-45", "45", "0", "1"],
        optionsHi: ["-45", "45", "0", "1"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Railway Group D",
        explanation: "The additive inverse of an integer a is -a because a + (-a) = 0. Additive inverse of -45 is -(-45) = +45.",
        explanationHi: "किसी पूर्णांक a का योज्य प्रतिलोम -a होता है क्योंकि a + (-a) = 0। अतः -45 का योज्य प्रतिलोम 45 है।"
      },
      {
        id: 5,
        q: "What is the value of 0 divided by (-7), i.e., 0 / (-7)?",
        qHi: "0 को (-7) से भाग देने पर, अर्थात् 0 / (-7) का मान क्या होगा?",
        options: ["0", "-7", "Undefined", "1"],
        optionsHi: ["0", "-7", "अपरिभाषित", "1"],
        ans: 0,
        pyqRef: "SSC CHSL & DSSSB TGT",
        explanation: "0 divided by any non-zero integer is 0. (Note: division BY 0 is undefined, but 0 divided by any number is 0).",
        explanationHi: "शून्य को किसी भी गैर-शून्य संख्या से भाग देने पर उत्तर 0 आता है। (शून्य से भाग देना अपरिभाषित होता है, परंतु 0 में भाग देना 0 होता है)।"
      },
      {
        id: 6,
        q: "What is the value of (-18) / 0?",
        qHi: "(-18) / 0 का मान क्या है?",
        options: ["0", "-18", "Not Defined (Undefined)", "1"],
        optionsHi: ["0", "-18", "परिभाषित नहीं (अपरिभाषित)", "1"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Division of any integer by zero is not defined in mathematics.",
        explanationHi: "गणित में किसी भी पूर्णांक को शून्य से विभाजित करना अपरिभाषित (Not Defined) है।"
      },
      {
        id: 7,
        q: "Find the product: (-3) * (-6) * (-2) * (-1).",
        qHi: "मान ज्ञात कीजिए: (-3) * (-6) * (-2) * (-1)।",
        options: ["-36", "36", "-72", "72"],
        optionsHi: ["-36", "36", "-72", "72"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "There are 4 negative signs (even count), so the product is positive: 3 * 6 * 2 * 1 = 36.",
        explanationHi: "यहाँ 4 ऋणात्मक संख्याएँ (सम संख्या) हैं, इसलिए गुणनफल धनात्मक होगा: 3 * 6 * 2 * 1 = 36।"
      },
      {
        id: 8,
        q: "In a class test containing 15 questions, 4 marks are given for every correct answer and (-2) marks for every incorrect answer. Gurpreet attempts all questions but only 9 of her answers are correct. What is her total score?",
        qHi: "एक कक्षा परीक्षा में 15 प्रश्न हैं। प्रत्येक सही उत्तर के लिए 4 अंक और प्रत्येक गलत उत्तर के लिए (-2) अंक दिए जाते हैं। गुरप्रीत ने सभी प्रश्न हल किए परंतु केवल 9 सही हुए। उसका कुल प्राप्तांक क्या है?",
        options: ["24", "26", "28", "30"],
        optionsHi: ["24", "26", "28", "30"],
        ans: 0,
        pyqRef: "NCERT Class 7 Exemplar & CTET Paper 2",
        explanation: "Correct answers = 9, Marks = 9 * 4 = 36. Incorrect answers = 15 - 9 = 6, Marks = 6 * (-2) = -12. Total score = 36 + (-12) = 24.",
        explanationHi: "सही उत्तर = 9, अंक = 9 * 4 = 36। गलत उत्तर = 15 - 9 = 6, अंक = 6 * (-2) = -12। कुल अंक = 36 - 12 = 24।"
      },
      {
        id: 9,
        q: "Which property is illustrated by: (-8) * [(-2) + 7] = [(-8) * (-2)] + [(-8) * 7]?",
        qHi: "(-8) * [(-2) + 7] = [(-8) * (-2)] + [(-8) * 7] किस गुणधर्म को दर्शाता है?",
        options: ["Associative property", "Commutative property", "Distributive property of multiplication over addition", "Closure property"],
        optionsHi: ["साहचर्य गुणधर्म", "क्रमविनिमेय गुणधर्म", "योग पर गुणन का वितरण गुणधर्म", "संवृत गुणधर्म"],
        ans: 2,
        pyqRef: "REET & UPTET Paper 2",
        explanation: "a * (b + c) = (a * b) + (a * c) is the distributive property of multiplication over addition.",
        explanationHi: "a * (b + c) = (a * b) + (a * c) योग पर गुणन के वितरण गुणधर्म को दर्शाता है।"
      },
      {
        id: 10,
        q: "What is the multiplicative identity for integers?",
        qHi: "पूर्णांकों के लिए गुणनात्मक तत्समक (Multiplicative Identity) क्या है?",
        options: ["0", "1", "-1", "Any integer"],
        optionsHi: ["0", "1", "-1", "कोई भी पूर्णांक"],
        ans: 1,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "For any integer a, a * 1 = 1 * a = a. Hence, 1 is the multiplicative identity.",
        explanationHi: "किसी भी पूर्णांक a के लिए a * 1 = 1 * a = a होता है। अतः 1 गुणनात्मक तत्समक है।"
      },
      {
        id: 11,
        q: "What is the additive identity for integers?",
        qHi: "पूर्णांकों के लिए योज्य तत्समक (Additive Identity) क्या है?",
        options: ["0", "1", "-1", "None"],
        optionsHi: ["0", "1", "-1", "कोई नहीं"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "For any integer a, a + 0 = 0 + a = a. Hence, 0 is the additive identity.",
        explanationHi: "किसी भी पूर्णांक a के लिए a + 0 = 0 + a = a होता है। अतः 0 योज्य तत्समक है।"
      },
      {
        id: 12,
        q: "Calculate: [(-36) / 12] / 3.",
        qHi: "मान निकालिए: [(-36) / 12] / 3।",
        options: ["-1", "1", "-3", "3"],
        optionsHi: ["-1", "1", "-3", "3"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "(-36) / 12 = -3. Then (-3) / 3 = -1.",
        explanationHi: "(-36) / 12 = -3। फिर (-3) / 3 = -1।"
      },
      {
        id: 13,
        q: "A cement company earns a profit of ₹8 per bag of white cement sold and a loss of ₹5 per bag of grey cement sold. If the company sells 3,000 bags of white cement and 5,000 bags of grey cement in a month, what is its profit or loss?",
        qHi: "एक सीमेंट कंपनी को सफेद सीमेंट बेचने पर ₹8 प्रति बोरी लाभ और स्लेटी सीमेंट पर ₹5 प्रति बोरी हानि होती है। यदि कंपनी 3,000 बोरी सफेद और 5,000 बोरी स्लेटी सीमेंट बेचती है, तो लाभ या हानि क्या होगी?",
        options: ["Profit of ₹1,000", "Loss of ₹1,000", "Profit of ₹2,000", "No profit no loss"],
        optionsHi: ["₹1,000 का लाभ", "₹1,000 की हानि", "₹2,000 का लाभ", "न लाभ न हानि"],
        ans: 1,
        pyqRef: "NCERT Class 7 Exercise 1.3 & CTET",
        explanation: "Profit = 3000 * 8 = ₹24,000. Loss = 5000 * 5 = ₹25,000. Net = 24000 - 25000 = -₹1,000 (Loss of ₹1,000).",
        explanationHi: "लाभ = 3000 * 8 = ₹24,000। हानि = 5000 * 5 = ₹25,000। कुल = 24000 - 25000 = -₹1,000 (₹1,000 की हानि)।"
      },
      {
        id: 14,
        q: "If a * (-1) = -30, what is the integer a?",
        qHi: "यदि a * (-1) = -30 है, तो पूर्णांक a का मान क्या होगा?",
        options: ["-30", "30", "1", "-1"],
        optionsHi: ["-30", "30", "1", "-1"],
        ans: 1,
        pyqRef: "State TET & SSC MTS",
        explanation: "a * (-1) = -a. If -a = -30, then a = 30.",
        explanationHi: "a * (-1) = -a। यदि -a = -30 है, तो a = 30।"
      },
      {
        id: 15,
        q: "Which pair of integers has a difference of (-5)?",
        qHi: "पूर्णांकों के किस युग्म का अंतर (-5) है?",
        options: ["(2, 7)", "(7, 2)", "(-2, 7)", "(-7, 2)"],
        optionsHi: ["(2, 7)", "(7, 2)", "(-2, 7)", "(-7, 2)"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "Difference = 2 - 7 = -5.",
        explanationHi: "अंतर = 2 - 7 = -5।"
      },
      {
        id: 16,
        q: "Simplify: (-10) * [6 + (-2)].",
        qHi: "सरल कीजिए: (-10) * [6 + (-2)]।",
        options: ["-40", "40", "-80", "80"],
        optionsHi: ["-40", "40", "-80", "80"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "6 + (-2) = 4. Then (-10) * 4 = -40.",
        explanationHi: "6 + (-2) = 4। फिर (-10) * 4 = -40।"
      },
      {
        id: 17,
        q: "What is (-1) * (-1) * (-1) ... 50 times equal to?",
        qHi: "(-1) * (-1) * (-1) ... 50 बार गुणा करने पर क्या प्राप्त होगा?",
        options: ["-1", "1", "50", "-50"],
        optionsHi: ["-1", "1", "50", "-50"],
        ans: 1,
        pyqRef: "Railway NTPC & SSC CGL",
        explanation: "Since 50 is an even number, (-1)^50 = 1.",
        explanationHi: "चूँकि 50 एक सम संख्या है, अतः (-1)^50 = 1 होगा।"
      },
      {
        id: 18,
        q: "Is subtraction of integers associative? i.e., is (a - b) - c = a - (b - c)?",
        qHi: "क्या पूर्णांकों का व्यवकलन (घटाव) साहचर्य होता है? अर्थात् क्या (a - b) - c = a - (b - c) है?",
        options: ["Yes, always", "No, never in general", "Only when numbers are positive", "Only when c = 0"],
        optionsHi: ["हाँ, सदैव", "नहीं, सामान्यतः नहीं", "केवल जब संख्याएँ धनात्मक हों", "केवल जब c = 0 हो"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy & Math",
        explanation: "Subtraction is NOT associative. Example: (5 - 3) - 2 = 2 - 2 = 0, but 5 - (3 - 2) = 5 - 1 = 4. 0 != 4.",
        explanationHi: "व्यवकलन साहचर्य नहीं होता। उदाहरण: (5 - 3) - 2 = 0, परंतु 5 - (3 - 2) = 4। अतः 0 != 4।"
      },
      {
        id: 19,
        q: "The temperature at 12 noon was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time will the temperature be 8°C below zero (-8°C)?",
        qHi: "दोपहर 12 बजे तापमान शून्य से 10°C ऊपर था। यदि यह 2°C प्रति घंटे की दर से घटता है, तो किस समय तापमान शून्य से 8°C नीचे (-8°C) होगा?",
        options: ["8 PM", "9 PM", "10 PM", "11 PM"],
        optionsHi: ["रात 8 बजे", "रात 9 बजे", "रात 10 बजे", "रात 11 बजे"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 Example & CTET",
        explanation: "Total decrease needed = 10 - (-8) = 18°C. Rate of decrease = 2°C/hr. Time required = 18 / 2 = 9 hours. 12 noon + 9 hours = 9 PM.",
        explanationHi: "तापमान में कुल गिरावट = 10 - (-8) = 18°C। घटने की दर = 2°C प्रति घंटा। आवश्यक समय = 18 / 2 = 9 घंटे। दोपहर 12 बजे + 9 घंटे = रात 9 बजे।"
      },
      {
        id: 20,
        q: "What is the result of (-100) / 5?",
        qHi: "(-100) / 5 का परिणाम क्या होगा?",
        options: ["20", "-20", "50", "-50"],
        optionsHi: ["20", "-20", "50", "-50"],
        ans: 1,
        pyqRef: "State TET & Bihar Police",
        explanation: "(-100) / 5 = -20.",
        explanationHi: "(-100) / 5 = -20।"
      },
      {
        id: 21,
        q: "Which of the following is true for any integer a?",
        qHi: "किसी भी पूर्णांक a के लिए निम्नलिखित में से कौन-सा सत्य है?",
        options: ["a / 1 = a", "a / (-1) = a", "a / 0 = 0", "1 / a = a"],
        optionsHi: ["a / 1 = a", "a / (-1) = a", "a / 0 = 0", "1 / a = a"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "Any integer divided by 1 gives the integer itself (a / 1 = a).",
        explanationHi: "किसी भी पूर्णांक को 1 से विभाजित करने पर वही संख्या प्राप्त होती है (a / 1 = a)।"
      },
      {
        id: 22,
        q: "Find the value of (-20) * (-10) * (-5) * (-1).",
        qHi: "(-20) * (-10) * (-5) * (-1) का मान ज्ञात कीजिए।",
        options: ["-1000", "1000", "-500", "500"],
        optionsHi: ["-1000", "1000", "-500", "500"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "4 negative signs = positive. Product = 20 * 10 * 5 * 1 = 1000.",
        explanationHi: "4 ऋणात्मक चिन्ह (सम संख्या) = धनात्मक परिणाम। 20 * 10 * 5 * 1 = 1000।"
      },
      {
        id: 23,
        q: "Evaluate: (-30) / [(-20) + (-10)].",
        qHi: "मान ज्ञात कीजिए: (-30) / [(-20) + (-10)]।",
        options: ["1", "-1", "3", "-3"],
        optionsHi: ["1", "-1", "3", "-3"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "[(-20) + (-10)] = -30. Then (-30) / (-30) = 1.",
        explanationHi: "[(-20) + (-10)] = -30। अतः (-30) / (-30) = 1।"
      },
      {
        id: 24,
        q: "If x is a negative integer and y is a positive integer, then x * y is always:",
        qHi: "यदि x एक ऋणात्मक पूर्णांक है और y एक धनात्मक पूर्णांक है, तो x * y सदैव होगा:",
        options: ["Positive", "Negative", "Zero", "Cannot be determined"],
        optionsHi: ["धनात्मक", "ऋणात्मक", "शून्य", "निर्धारित नहीं किया जा सकता"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "The product of a negative integer and a positive integer is always negative: (-) * (+) = (-).",
        explanationHi: "एक ऋणात्मक और एक धनात्मक पूर्णांक का गुणनफल सदैव ऋणात्मक होता है: (-) * (+) = (-)।"
      },
      {
        id: 25,
        q: "Compute using distributive property: 625 * (-35) + (-625) * 65.",
        qHi: "वितरण नियम से मान निकालें: 625 * (-35) + (-625) * 65।",
        options: ["-62500", "62500", "-50000", "-6250"],
        optionsHi: ["-62500", "62500", "-50000", "-6250"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 1 & BPSC TRE 6-8",
        explanation: "625 * (-35) + 625 * (-65) = 625 * [(-35) + (-65)] = 625 * (-100) = -62,500.",
        explanationHi: "625 * [(-35) + (-65)] = 625 * (-100) = -62,500।"
      },
      {
        id: 26,
        q: "An elevator descends into a mine shaft at the rate of 6 m/min. If the descent starts from 10 m above the ground level, how long will it take to reach -350 m?",
        qHi: "एक लिफ्ट किसी खान कूपक में 6 मीटर प्रति मिनट की दर से नीचे जाती है। यदि यह भूमि तल से 10 मीटर ऊपर से शुरू होती है, तो -350 मीटर पहुँचने में कितना समय लगेगा?",
        options: ["50 minutes", "60 minutes (1 hour)", "70 minutes", "80 minutes"],
        optionsHi: ["50 मिनट", "60 मिनट (1 घंटा)", "70 मिनट", "80 मिनट"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 Exercise & CTET",
        explanation: "Total distance to descend = 10 - (-350) = 360 m. Speed = 6 m/min. Time = 360 / 6 = 60 minutes = 1 hour.",
        explanationHi: "तय की जाने वाली कुल दूरी = 10 - (-350) = 360 मीटर। चाल = 6 मीटर/मिनट। समय = 360 / 6 = 60 मिनट = 1 घंटा।"
      },
      {
        id: 27,
        q: "Which integer has no reciprocal (multiplicative inverse)?",
        qHi: "किस पूर्णांक का कोई व्युत्क्रम (गुणनात्मक प्रतिलोम) नहीं होता?",
        options: ["0", "1", "-1", "2"],
        optionsHi: ["0", "1", "-1", "2"],
        ans: 0,
        pyqRef: "CTET Paper 2 & DSSSB",
        explanation: "Zero (0) has no reciprocal because 1/0 is undefined.",
        explanationHi: "शून्य (0) का कोई व्युत्क्रम नहीं होता क्योंकि 1/0 अपरिभाषित है।"
      },
      {
        id: 28,
        q: "What is (-1) * a equal to for any integer a?",
        qHi: "किसी भी पूर्णांक a के लिए (-1) * a किसके बराबर है?",
        options: ["a", "-a", "1", "-1"],
        optionsHi: ["a", "-a", "1", "-1"],
        ans: 1,
        pyqRef: "UPTET Paper 2",
        explanation: "(-1) * a = -a.",
        explanationHi: "(-1) * a = -a।"
      },
      {
        id: 29,
        q: "Simplify: (-30) + 15 - (-25) - 10.",
        qHi: "सरल कीजिए: (-30) + 15 - (-25) - 10।",
        options: ["0", "10", "-10", "20"],
        optionsHi: ["0", "10", "-10", "20"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "-30 + 15 + 25 - 10 = (-40) + 40 = 0.",
        explanationHi: "-30 + 15 + 25 - 10 = (-40) + 40 = 0।"
      },
      {
        id: 30,
        q: "If the product of two integers is -180 and one of them is 12, what is the other integer?",
        qHi: "यदि दो पूर्णांकों का गुणनफल -180 है और उनमें से एक संख्या 12 है, तो दूसरी संख्या क्या होगी?",
        options: ["-15", "15", "-12", "18"],
        optionsHi: ["-15", "15", "-12", "18"],
        ans: 0,
        pyqRef: "Railway NTPC & State TET",
        explanation: "Let the other integer be x. 12 * x = -180 => x = -180 / 12 = -15.",
        explanationHi: "माना दूसरी संख्या x है। 12 * x = -180 => x = -180 / 12 = -15।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 2: Fractions and Decimals (भिन्न एवं दशमलव)
  // ==========================================
  {
    id: "ncert-c7-m02",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 2,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 2: Fractions and Decimals (भिन्न एवं दशमलव)",
    titleHi: "अध्याय 2: भिन्न एवं दशमलव (Fractions & Decimals)",
    readingTime: "24 mins read",
    badge: "Arithmetic Foundation",
    desc: "NCERT Class 7 Chapter 2: Multiplication and division of fractions, proper/improper fractions, reciprocal of fractions, multiplication and division of decimal numbers, power of 10 shifts.",
    descHi: "एनसीईआरटी कक्षा 7 भिन्न एवं दशमलव: भिन्नों का गुणन एवं भाग, उचित एवं अनुचित भिन्न, भिन्नों का व्युत्क्रम, दशमलव संख्याओं का गुणन व भाग, 10 की घातों का दशमलव खिसकाव।",
    competitionEdge: "Heavily tested in CTET Paper 2, BPSC TRE 4.0, SSC CGL/CHSL, and Railways. Core questions on fraction operations, comparison of fractions, and decimal point placements.",
    competitionEdgeHi: "CTET पेपर 2, BPSC TRE मध्य विद्यालय, SSC और रेलवे में बार-बार पूछे जाने वाले प्रश्न: भिन्नों का गुणनफल उनके घटकों से छोटा/बड़ा होना, दशमलव का बाईं व दाईं ओर खिसकना।",
    pdfUrl: "/ncert_books/class7/math_ch02.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch02_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch02_Fractions_Decimals.pdf",
    pdfSize: "1.64 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Multiplication & Nature of Fractions",
        headingHi: "1. एनसीईआरटी मूल पाठ: भिन्नों का गुणन एवं उनकी प्रकृति",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear students! While whole number multiplication always gives an equal or larger number ($3 \times 4 = 12$), fraction multiplication behaves fundamentally differently when proper fractions are involved! For example, $\\frac{1}{2} \times \\frac{1}{3} = \\frac{1}{6}$, which is smaller than BOTH $\\frac{1}{2}$ and $\\frac{1}{3}$! This counter-intuitive property is tested in almost every teacher recruitment and aptitude exam.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 The Golden NCERT Discovery: Product of Fractions</div>
            <ul>
              <li><strong>Product of Two Proper Fractions:</strong> ALWAYS less than each of the two fractions multiplied! Example: $\\frac{2}{3} \times \\frac{4}{5} = \\frac{8}{15} < \\frac{2}{3}$ and $< \\frac{4}{5}$.</li>
              <li><strong>Product of Two Improper Fractions:</strong> ALWAYS greater than each of the two fractions multiplied! Example: $\\frac{5}{3} \times \\frac{7}{4} = \\frac{35}{12} > \\frac{5}{3}$ and $> \\frac{7}{4}$.</li>
              <li><strong>Fraction as an Operator 'of':</strong> 'of' represents multiplication: $\\frac{1}{2} \\text{ of } 24 = \\frac{1}{2} \times 24 = 12$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय छात्रों! पूर्ण संख्याओं में गुणा करने पर मान हमेशा बड़ा या बराबर होता है ($3 \times 4 = 12$), लेकिन उचित भिन्नों (Proper Fractions) में गुणा करने पर परिणाम दोनों मूल भिन्नों से भी छोटा हो जाता है! जैसे $\\frac{1}{2} \times \\frac{1}{3} = \\frac{1}{6}$, जो $\\frac{1}{2}$ और $\\frac{1}{3}$ दोनों से छोटा है! शिक्षक भर्ती परीक्षाओं में यह वैचारिक प्रश्न अक्सर पूछा जाता है।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 एनसीईआरटी स्वर्णिम नियम: भिन्नों के गुणनफल का व्यवहार</div>
            <ul>
              <li><strong>दो उचित भिन्नों का गुणनफल:</strong> दोनों भिन्नों में से प्रत्येक से छोटा होता है! उदाहरण: $\\frac{2}{3} \times \\frac{4}{5} = \\frac{8}{15} < \\frac{2}{3}$ और $< \\frac{4}{5}$।</li>
              <li><strong>दो अनुचित भिन्नों का गुणनफल:</strong> दोनों भिन्नों में से प्रत्येक से बड़ा होता है! उदाहरण: $\\frac{5}{3} \times \\frac{7}{4} = \\frac{35}{12} > \\frac{5}{3}$ और $> \\frac{7}{4}$।</li>
              <li><strong>संकारक 'का' (of) के रूप में भिन्न:</strong> 'का' का अर्थ गुणन होता है: $24$ का $\\frac{1}{2} = \\frac{1}{2} \times 24 = 12$।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Reciprocal & Division of Fractions",
        headingHi: "2. भिन्नों का व्युत्क्रम एवं भाग के नियम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Reciprocal & Division Formula Chest</div>
            <ul>
              <li><strong>Reciprocal (व्युत्क्रम):</strong> The non-zero numbers whose product with each other is $1$. The reciprocal of $\\frac{a}{b}$ is $\\frac{b}{a}$ because $\\frac{a}{b} \times \\frac{b}{a} = 1$.</li>
              <li><strong>Reciprocal of a Proper Fraction:</strong> Is always an <strong>improper fraction</strong> (e.g., reciprocal of $\\frac{3}{7}$ is $\\frac{7}{3}$).</li>
              <li><strong>Division of Fraction by another Fraction:</strong><br/>
                $$\mathbf{\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c}}$$
                Multiply the first fraction by the reciprocal of the divisor fraction!
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ व्युत्क्रम एवं भाग के मास्टर सूत्र</div>
            <ul>
              <li><strong>व्युत्क्रम (Reciprocal):</strong> ऐसी दो शून्येतर संख्याएँ जिनका गुणनफल $1$ हो। $\\frac{a}{b}$ का व्युत्क्रम $\\frac{b}{a}$ होता है क्योंकि $\\frac{a}{b} \times \\frac{b}{a} = 1$।</li>
              <li><strong>उचित भिन्न का व्युत्क्रम:</strong> सदैव एक <strong>अनुचित भिन्न</strong> होता है (जैसे $\\frac{3}{7}$ का व्युत्क्रम $\\frac{7}{3}$ है)।</li>
              <li><strong>भिन्न का भिन्न से भाग:</strong><br/>
                $$\mathbf{\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c}}$$
                पहले भिन्न को भाजक भिन्न के व्युत्क्रम से गुणा कर दें!
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Decimal Multiplication & Division Rules",
        headingHi: "3. दशमलव संख्याओं का गुणन एवं भाग के नियम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Decimal Point Shift Rules</div>
            <ul>
              <li><strong>Multiplication by 10, 100, 1000:</strong> The decimal point shifts to the <strong>RIGHT</strong> by as many places as there are zeroes. Example: $0.07 \times 100 = 7.0$.</li>
              <li><strong>Division by 10, 100, 1000:</strong> The decimal point shifts to the <strong>LEFT</strong> by as many places as there are zeroes. Example: $31.5 \div 100 = 0.315$.</li>
              <li><strong>Dividing a Decimal by another Decimal:</strong> Convert divisor to a whole number by multiplying both numerator and denominator by powers of 10. Example:<br/>
                $$\\frac{7.75}{0.25} = \\frac{7.75 \\times 100}{0.25 \\times 100} = \\frac{775}{25} = 31$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ दशमलव बिंदु खिसकाव के गुरु-मंत्र</div>
            <ul>
              <li><strong>10, 100, 1000 से गुणन:</strong> दशमलव बिंदु <strong>दाईं ओर (RIGHT)</strong> उतने स्थान खिसकता है जितने शून्य हों। उदाहरण: $0.07 \times 100 = 7$।</li>
              <li><strong>10, 100, 1000 से भाग:</strong> दशमलव बिंदु <strong>बाईं ओर (LEFT)</strong> उतने स्थान खिसकता है जितने शून्य हों। उदाहरण: $31.5 \div 100 = 0.315$।</li>
              <li><strong>दशमलव को दशमलव से भाग:</strong> अंश और हर दोनों को 10 की घात से गुणा करके भाजक को पूर्ण संख्या बनाएँ। उदाहरण: $\\frac{7.75}{0.25} = \\frac{775}{25} = 31$।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is 2/5 of 15/8?",
        qHi: "15/8 का 2/5 क्या होगा?",
        options: ["3/4", "3/8", "4/3", "1/2"],
        optionsHi: ["3/4", "3/8", "4/3", "1/2"],
        ans: 0,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "(2/5) * (15/8) = (2 * 15) / (5 * 8) = 30 / 40 = 3/4.",
        explanationHi: "(2/5) * (15/8) = (2 * 15) / (5 * 8) = 30 / 40 = 3/4।"
      },
      {
        id: 2,
        q: "Which of the following statements is TRUE regarding the product of two proper fractions?",
        qHi: "दो उचित भिन्नों के गुणनफल के संबंध में निम्नलिखित में से कौन-सा कथन सत्य है?",
        options: ["Product is greater than both fractions", "Product is less than both fractions", "Product is equal to 1", "Product is always an improper fraction"],
        optionsHi: ["गुणनफल दोनों भिन्नों से बड़ा होता है", "गुणनफल दोनों भिन्नों से छोटा होता है", "गुणनफल 1 के बराबर होता है", "गुणनफल सदैव एक अनुचित भिन्न होता है"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy & BPSC 6-8",
        explanation: "The product of two proper fractions is always less than each of the two fractions multiplied (e.g., 1/2 * 1/3 = 1/6 < 1/2 and < 1/3).",
        explanationHi: "दो उचित भिन्नों का गुणनफल सदैव उन दोनों भिन्नों में से प्रत्येक से छोटा होता है (उदा. 1/2 * 1/3 = 1/6 जो दोनों से छोटा है)।"
      },
      {
        id: 3,
        q: "What is the reciprocal of the fraction 3 2/5 (three and two-fifths)?",
        qHi: "मिश्रित भिन्न 3 2/5 का व्युत्क्रम क्या होगा?",
        options: ["17/5", "5/17", "15/2", "2/15"],
        optionsHi: ["17/5", "5/17", "15/2", "2/15"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "3 2/5 = (3 * 5 + 2) / 5 = 17/5. The reciprocal of 17/5 is 5/17.",
        explanationHi: "3 2/5 = (3 * 5 + 2) / 5 = 17/5। 17/5 का व्युत्क्रम 5/17 है।"
      },
      {
        id: 4,
        q: "Solve: (7/9) / (14/27).",
        qHi: "हल कीजिए: (7/9) / (14/27)।",
        options: ["2/3", "3/2", "1/2", "3/4"],
        optionsHi: ["2/3", "3/2", "1/2", "3/4"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CHSL",
        explanation: "(7/9) * (27/14) = (7/14) * (27/9) = (1/2) * 3 = 3/2 = 1 1/2.",
        explanationHi: "(7/9) * (27/14) = (7/14) * (27/9) = (1/2) * 3 = 3/2 = 1 1/2।"
      },
      {
        id: 5,
        q: "A car covers a distance of 89.1 km in 2.2 hours. What is the average distance covered by it in 1 hour?",
        qHi: "एक कार 2.2 घंटे में 89.1 किमी की दूरी तय करती है। 1 घंटे में उसके द्वारा तय की गई औसत दूरी क्या है?",
        options: ["40.5 km", "40.0 km", "41.5 km", "42.5 km"],
        optionsHi: ["40.5 किमी", "40.0 किमी", "41.5 किमी", "42.5 किमी"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 2 Exercise & CTET",
        explanation: "Average distance = 89.1 / 2.2 = 891 / 22 = 40.5 km.",
        explanationHi: "औसत दूरी = 89.1 / 2.2 = 891 / 22 = 40.5 किमी।"
      },
      {
        id: 6,
        q: "What is 0.03 * 1000?",
        qHi: "0.03 * 1000 का मान क्या है?",
        options: ["0.3", "3", "30", "300"],
        optionsHi: ["0.3", "3", "30", "300"],
        ans: 2,
        pyqRef: "SSC MTS & Railway NTPC",
        explanation: "Multiplying by 1000 shifts the decimal point 3 places to the right: 0.03 -> 30.",
        explanationHi: "1000 से गुणा करने पर दशमलव 3 स्थान दाईं ओर खिसकता है: 0.03 -> 30।"
      },
      {
        id: 7,
        q: "What is 2.7 / 100?",
        qHi: "2.7 / 100 का मान क्या होगा?",
        options: ["0.27", "0.027", "0.0027", "27"],
        optionsHi: ["0.27", "0.027", "0.0027", "27"],
        ans: 1,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "Dividing by 100 shifts the decimal 2 places to the left: 2.7 / 100 = 0.027.",
        explanationHi: "100 से भाग देने पर दशमलव 2 स्थान बाईं ओर खिसकता है: 2.7 / 100 = 0.027।"
      },
      {
        id: 8,
        q: "The side of an equilateral triangle is 3.5 cm. What is its perimeter?",
        qHi: "एक समबाहु त्रिभुज की भुजा 3.5 सेमी है। उसका परिमाप क्या होगा?",
        options: ["7.0 cm", "10.5 cm", "12.25 cm", "14.0 cm"],
        optionsHi: ["7.0 सेमी", "10.5 सेमी", "12.25 सेमी", "14.0 सेमी"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 2 & BPSC TRE 6-8",
        explanation: "Perimeter of equilateral triangle = 3 * side = 3 * 3.5 = 10.5 cm.",
        explanationHi: "समबाहु त्रिभुज का परिमाप = 3 * भुजा = 3 * 3.5 = 10.5 सेमी।"
      },
      {
        id: 9,
        q: "Evaluate: 7 / (2/5).",
        qHi: "मान ज्ञात कीजिए: 7 / (2/5)।",
        options: ["14/5", "35/2", "10/7", "7/10"],
        optionsHi: ["14/5", "35/2", "10/7", "7/10"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "7 / (2/5) = 7 * (5/2) = 35/2 = 17 1/2.",
        explanationHi: "7 / (2/5) = 7 * (5/2) = 35/2 = 17 1/2।"
      },
      {
        id: 10,
        q: "What is 11.2 * 0.15?",
        qHi: "11.2 * 0.15 का मान क्या होगा?",
        options: ["1.68", "16.8", "0.168", "168"],
        optionsHi: ["1.68", "16.8", "0.168", "168"],
        ans: 0,
        pyqRef: "SSC CGL & CHSL",
        explanation: "112 * 15 = 1680. Total decimal digits = 1 + 2 = 3. So 1.680 = 1.68.",
        explanationHi: "112 * 15 = 1680। दशमलव अंक = 1 + 2 = 3। अतः 1.680 = 1.68।"
      },
      {
        id: 11,
        q: "Which fraction is the reciprocal of an improper fraction?",
        qHi: "अनुचित भिन्न का व्युत्क्रम कौन-सी भिन्न होती है?",
        options: ["Proper fraction", "Improper fraction", "Mixed fraction", "None"],
        optionsHi: ["उचित भिन्न", "अनुचित भिन्न", "मिश्रित भिन्न", "कोई नहीं"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "The reciprocal of an improper fraction (where numerator > denominator) is a proper fraction (where numerator < denominator). Example: reciprocal of 7/3 is 3/7.",
        explanationHi: "अनुचित भिन्न (जहाँ अंश > हर) का व्युत्क्रम सदैव उचित भिन्न (अंश < हर) होता है। जैसे 7/3 का व्युत्क्रम 3/7 है।"
      },
      {
        id: 12,
        q: "Which of the following is the largest: 0.5, 0.05, 0.55, 0.505?",
        qHi: "निम्नलिखित में से सबसे बड़ी संख्या कौन-सी है: 0.5, 0.05, 0.55, 0.505?",
        options: ["0.5", "0.05", "0.55", "0.505"],
        optionsHi: ["0.5", "0.05", "0.55", "0.505"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Comparing like decimals: 0.500, 0.050, 0.550, 0.505. Clearly, 0.550 (0.55) is the largest.",
        explanationHi: "समान दशमलव में बदलने पर: 0.500, 0.050, 0.550, 0.505। अतः 0.55 सबसे बड़ा है।"
      },
      {
        id: 13,
        q: "If 1 meter of cloth costs ₹35.50, what is the cost of 4.5 meters of cloth?",
        qHi: "यदि 1 मीटर कपड़े का मूल्य ₹35.50 है, तो 4.5 मीटर कपड़े का मूल्य क्या होगा?",
        options: ["₹159.75", "₹160.25", "₹158.50", "₹161.00"],
        optionsHi: ["₹159.75", "₹160.25", "₹158.50", "₹161.00"],
        ans: 0,
        pyqRef: "Railway NTPC & State TET",
        explanation: "Cost = 35.50 * 4.5 = ₹159.75.",
        explanationHi: "कुल मूल्य = 35.50 * 4.5 = ₹159.75।"
      },
      {
        id: 14,
        q: "What is 5/6 divided by 5?",
        qHi: "5/6 को 5 से भाग देने पर क्या प्राप्त होगा?",
        options: ["1/6", "6", "25/6", "5/30"],
        optionsHi: ["1/6", "6", "25/6", "5/30"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "(5/6) / 5 = (5/6) * (1/5) = 1/6.",
        explanationHi: "(5/6) / 5 = (5/6) * (1/5) = 1/6।"
      },
      {
        id: 15,
        q: "Express 7 paise in rupees using decimals.",
        qHi: "दशमलव का उपयोग करते हुए 7 पैसे को रुपये में व्यक्त कीजिए।",
        options: ["₹0.7", "₹0.07", "₹0.007", "₹7.0"],
        optionsHi: ["₹0.7", "₹0.07", "₹0.007", "₹7.0"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 2 & BPSC TRE",
        explanation: "1 Rupee = 100 paise. 7 paise = 7/100 = ₹0.07.",
        explanationHi: "1 रुपया = 100 पैसे। अतः 7 पैसे = 7/100 = ₹0.07।"
      },
      {
        id: 16,
        q: "Express 5 cm in kilometers.",
        qHi: "5 सेमी को किलोमीटर में व्यक्त कीजिए।",
        options: ["0.0005 km", "0.00005 km", "0.005 km", "0.05 km"],
        optionsHi: ["0.0005 किमी", "0.00005 किमी", "0.005 किमी", "0.05 किमी"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC MTS",
        explanation: "1 km = 1000 m = 100,000 cm. 5 cm = 5 / 100,000 = 0.00005 km.",
        explanationHi: "1 किमी = 100,000 सेमी। अतः 5 सेमी = 5 / 100,000 = 0.00005 किमी।"
      },
      {
        id: 17,
        q: "What is the product of 0.2 * 0.2 * 0.2?",
        qHi: "0.2 * 0.2 * 0.2 का गुणनफल क्या होगा?",
        options: ["0.8", "0.08", "0.008", "0.0008"],
        optionsHi: ["0.8", "0.08", "0.008", "0.0008"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & Railways",
        explanation: "2 * 2 * 2 = 8. Sum of decimal places = 1 + 1 + 1 = 3. So 0.008.",
        explanationHi: "2 * 2 * 2 = 8। कुल दशमलव स्थान = 1 + 1 + 1 = 3। अतः 0.008।"
      },
      {
        id: 18,
        q: "Solve: 76.5 / 0.15.",
        qHi: "हल कीजिए: 76.5 / 0.15।",
        options: ["51", "510", "5.1", "5100"],
        optionsHi: ["51", "510", "5.1", "5100"],
        ans: 1,
        pyqRef: "SSC CGL / CHSL",
        explanation: "76.5 / 0.15 = 7650 / 15 = 510.",
        explanationHi: "76.5 / 0.15 = 7650 / 15 = 510।"
      },
      {
        id: 19,
        q: "How many 1/4 kg packets can be made from 3 1/2 kg of sugar?",
        qHi: "3 1/2 किग्रा चीनी से 1/4 किग्रा के कितने पैकेट बनाए जा सकते हैं?",
        options: ["12", "14", "16", "18"],
        optionsHi: ["12", "14", "16", "18"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Total sugar = 3 1/2 = 7/2 kg. Number of packets = (7/2) / (1/4) = (7/2) * 4 = 14.",
        explanationHi: "कुल चीनी = 3 1/2 = 7/2 किग्रा। पैकेटों की संख्या = (7/2) / (1/4) = (7/2) * 4 = 14 पैकेट।"
      },
      {
        id: 20,
        q: "Which fraction is equivalent to 0.125?",
        qHi: "0.125 के समतुल्य कौन-सी भिन्न है?",
        options: ["1/4", "1/8", "1/6", "1/12"],
        optionsHi: ["1/4", "1/8", "1/6", "1/12"],
        ans: 1,
        pyqRef: "Railway NTPC & State TET",
        explanation: "0.125 = 125 / 1000 = 1/8.",
        explanationHi: "0.125 = 125 / 1000 = 1/8।"
      },
      {
        id: 21,
        q: "Find the area of a rectangle whose length is 5.7 cm and breadth is 3 cm.",
        qHi: "उस आयत का क्षेत्रफल ज्ञात कीजिए जिसकी लंबाई 5.7 सेमी और चौड़ाई 3 सेमी है।",
        options: ["17.1 cm²", "17.4 cm²", "15.7 cm²", "18.1 cm²"],
        optionsHi: ["17.1 सेमी²", "17.4 सेमी²", "15.7 सेमी²", "18.1 सेमी²"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 2 Exercise",
        explanation: "Area = Length * Breadth = 5.7 * 3 = 17.1 cm².",
        explanationHi: "क्षेत्रफल = लंबाई * चौड़ाई = 5.7 * 3 = 17.1 सेमी²।"
      },
      {
        id: 22,
        q: "What is 4/5 * 5/4 equal to?",
        qHi: "4/5 * 5/4 का मान क्या होगा?",
        options: ["1", "0", "16/25", "25/16"],
        optionsHi: ["1", "0", "16/25", "25/16"],
        ans: 0,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "A fraction multiplied by its reciprocal is always equal to 1.",
        explanationHi: "किसी भिन्न को उसके व्युत्क्रम से गुणा करने पर परिणाम सदैव 1 होता है।"
      },
      {
        id: 23,
        q: "A two-wheeler covers a distance of 55.3 km in 1 liter of petrol. How much distance will it cover in 10 liters of petrol?",
        qHi: "एक दोपहिया वाहन 1 लीटर पेट्रोल में 55.3 किमी दूरी तय करता है। 10 लीटर पेट्रोल में वह कितनी दूरी तय करेगा?",
        options: ["553 km", "55.3 km", "5530 km", "5.53 km"],
        optionsHi: ["553 किमी", "55.3 किमी", "5530 किमी", "5.53 किमी"],
        ans: 0,
        pyqRef: "NCERT Class 7 Exercise & BPSC TRE",
        explanation: "Distance = 55.3 * 10 = 553 km.",
        explanationHi: "दूरी = 55.3 * 10 = 553 किमी।"
      },
      {
        id: 24,
        q: "What is the product of two improper fractions?",
        qHi: "दो अनुचित भिन्नों का गुणनफल क्या होता है?",
        options: ["Greater than each fraction", "Less than each fraction", "Equal to 1", "Always less than 0"],
        optionsHi: ["प्रत्येक भिन्न से बड़ा", "प्रत्येक भिन्न से छोटा", "1 के बराबर", "सदैव 0 से छोटा"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "The product of two improper fractions is always greater than each of the two fractions multiplied (e.g., 3/2 * 4/3 = 12/6 = 2 > 3/2 and > 4/3).",
        explanationHi: "दो अनुचित भिन्नों का गुणनफल उन दोनों भिन्नों में से प्रत्येक से बड़ा होता है (जैसे 3/2 * 4/3 = 2 जो दोनों से बड़ा है)।"
      },
      {
        id: 25,
        q: "Solve: (3/7) + (2/5).",
        qHi: "हल कीजिए: (3/7) + (2/5)।",
        options: ["5/12", "29/35", "31/35", "1/35"],
        optionsHi: ["5/12", "29/35", "31/35", "1/35"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "LCM(7, 5) = 35. (3 * 5 + 2 * 7) / 35 = (15 + 14) / 35 = 29/35.",
        explanationHi: "ल.स.प.(7, 5) = 35। (3 * 5 + 2 * 7) / 35 = (15 + 14) / 35 = 29/35।"
      },
      {
        id: 26,
        q: "Solve: 8.4 / 4.",
        qHi: "8.4 / 4 का मान क्या है?",
        options: ["2.1", "21", "0.21", "4.2"],
        optionsHi: ["2.1", "21", "0.21", "4.2"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "8.4 / 4 = 2.1.",
        explanationHi: "8.4 / 4 = 2.1।"
      },
      {
        id: 27,
        q: "Which fraction lies between 1/3 and 1/2?",
        qHi: "1/3 और 1/2 के बीच में कौन-सी भिन्न स्थित है?",
        options: ["5/12", "1/4", "3/4", "7/12"],
        optionsHi: ["5/12", "1/4", "3/4", "7/12"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "1/3 = 4/12 and 1/2 = 6/12. Between 4/12 and 6/12 lies 5/12.",
        explanationHi: "1/3 = 4/12 और 1/2 = 6/12। 4/12 और 6/12 के बीच 5/12 स्थित है।"
      },
      {
        id: 28,
        q: "Convert 250 grams to kilograms.",
        qHi: "250 ग्राम को किलोग्राम में बदलिए।",
        options: ["2.5 kg", "0.25 kg", "0.025 kg", "25 kg"],
        optionsHi: ["2.5 किग्रा", "0.25 किग्रा", "0.025 किग्रा", "25 किग्रा"],
        ans: 1,
        pyqRef: "State TET & SSC MTS",
        explanation: "1 kg = 1000 g. 250 g = 250 / 1000 = 0.25 kg.",
        explanationHi: "1 किग्रा = 1000 ग्राम। 250 ग्राम = 250 / 1000 = 0.25 किग्रा।"
      },
      {
        id: 29,
        q: "What is 100 divided by 0.01?",
        qHi: "100 को 0.01 से भाग देने पर क्या प्राप्त होगा?",
        options: ["1", "100", "1,000", "10,000"],
        optionsHi: ["1", "100", "1,000", "10,000"],
        ans: 3,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "100 / 0.01 = 100 / (1/100) = 100 * 100 = 10,000.",
        explanationHi: "100 / 0.01 = 100 / (1/100) = 100 * 100 = 10,000।"
      },
      {
        id: 30,
        q: "If 1/3 of a number is 24, what is 1/2 of that number?",
        qHi: "यदि किसी संख्या का 1/3 भाग 24 है, तो उस संख्या का 1/2 भाग क्या होगा?",
        options: ["36", "48", "72", "12"],
        optionsHi: ["36", "48", "72", "12"],
        ans: 0,
        pyqRef: "Railway NTPC & CTET Paper 2",
        explanation: "Let number be x. x/3 = 24 => x = 72. Then 1/2 of 72 = 36.",
        explanationHi: "माना संख्या x है। x/3 = 24 => x = 72। उस संख्या का 1/2 = 72 / 2 = 36।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 3: Data Handling (आंकड़ों का प्रबंधन)
  // ==========================================
  {
    id: "ncert-c7-m03",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 3,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 3: Data Handling (आंकड़ों का प्रबंधन)",
    titleHi: "अध्याय 3: आंकड़ों का प्रबंधन (Mean, Median, Mode & Probability)",
    readingTime: "25 mins read",
    badge: "Statistics & Probability",
    desc: "NCERT Class 7 Chapter 3: Arithmetic mean, range, mode, median, double bar graphs, chance and probability, empirical formula, and frequency distribution.",
    descHi: "एनसीईआरटी कक्षा 7 आंकड़ों का प्रबंधन: समांतर माध्य (Mean), परिसर (Range), बहुलक (Mode), माध्यक (Median), दोहरा दंड आलेख (Double Bar Graph), प्रायिकता (Probability)।",
    competitionEdge: "Guaranteed 2-3 questions in CTET Paper 2, BPSC TRE Middle School (6-8), and State TETs. Critical focus on Median calculation for odd/even n, Mode multiplicity, and Range.",
    competitionEdgeHi: "CTET पेपर 2, BPSC शिक्षक भर्ती और SSC में 2 से 3 प्रश्न अनिवार्य रूप से आते हैं: विषम व सम पदों के लिए माध्यक की गणना, बहुलक की बहुलता, परिसर (Range = Max - Min) और प्रायिकता।",
    pdfUrl: "/ncert_books/class7/math_ch03.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch03_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch03_Data_Handling.pdf",
    pdfSize: "1.33 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Representative Values (Mean, Range, Mode, Median)",
        headingHi: "1. एनसीईआरटी मूल पाठ: केंद्रीय प्रवृत्तियों के प्रतिनिधि मान",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Aspirants! Single representative values help us understand and summarize voluminous data. NCERT Class 7 introduces the four cardinal pillars of basic statistics:
              <strong>1. Arithmetic Mean:</strong> Average of all data points.
              <strong>2. Range:</strong> Spread of data ($\text{Highest} - \text{Lowest}$).
              <strong>3. Mode:</strong> Most frequently occurring observation.
              <strong>4. Median:</strong> The exact middle observation when data is arranged in ascending or descending order!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Statistical Formulas</div>
            <ul>
              <li><strong>Arithmetic Mean:</strong><br/>
                $$\mathbf{\\bar{x} = \\frac{\\text{Sum of all observations}}{\\text{Total number of observations}} = \\frac{\\sum x_i}{n}}$$
              </li>
              <li><strong>Range:</strong><br/>
                $$\mathbf{\\text{Range} = \\text{Highest Observation} - \\text{Lowest Observation}}$$
              </li>
              <li><strong>Mode:</strong> The observation with the highest frequency. A dataset can have <strong>one mode (unimodal), two modes (bimodal), or multi-modes</strong>!</li>
              <li><strong>Median:</strong>
                <ul>
                  <li>When $n$ is <strong>ODD</strong>: $\\text{Median} = \\left(\\frac{n + 1}{2}\\right)^{\\text{th}} \\text{ observation}$.</li>
                  <li>When $n$ is <strong>EVEN</strong>: $\\text{Median} = \\text{Mean of } \\left(\\frac{n}{2}\\right)^{\\text{th}} \\text{ and } \\left(\\frac{n}{2} + 1\\right)^{\\text{th}} \\text{ observations}$.</li>
                </ul>
              </li>
              <li><strong>Karl Pearson's Empirical Relationship:</strong><br/>
                $$\\mathbf{\\text{Mode} = 3 \\times \\text{Median} - 2 \\times \\text{Mean}}$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय अभ्यर्थियों! सांख्यिकी के ये चार स्तंभ CTET और BPSC शिक्षक भर्ती में हर साल आते हैं:
              <strong>1. समांतर माध्य (Mean):</strong> सभी प्रेक्षणों का औसत।
              <strong>2. परिसर (Range):</strong> अधिकतम मान और न्यूनतम मान का अंतर।
              <strong>3. बहुलक (Mode):</strong> जो प्रेक्षण सबसे अधिक बार आया हो।
              <strong>4. माध्यक (Median):</strong> आरोही या अवरोही क्रम में व्यवस्थित करने पर ठीक बीच का मान!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ सांख्यिकी के मास्टर सूत्र</div>
            <ul>
              <li><strong>समांतर माध्य (Mean):</strong><br/>
                $$\\mathbf{\\text{माध्य} = \\frac{\\text{सभी प्रेक्षणों का योग}}{\\text{प्रेक्षणों की कुल संख्या}}}$$
              </li>
              <li><strong>परिसर (Range):</strong><br/>
                $$\\mathbf{\\text{परिसर} = \\text{अधिकतम प्रेक्षण} - \\text{न्यूनतम प्रेक्षण}}$$
              </li>
              <li><strong>बहुलक (Mode):</strong> सबसे अधिक बारंबारता वाला प्रेक्षण। एक आंकड़े में एक से अधिक बहुलक भी हो सकते हैं!</li>
              <li><strong>माध्यक (Median):</strong>
                <ul>
                  <li>जब $n$ <strong>विषम</strong> हो: $\\text{माध्यक} = \\left(\\frac{n + 1}{2}\\right)\\text{-वाँ प्रेक्षण}$।</li>
                  <li>जब $n$ <strong>सम</strong> हो: $\\text{माध्यक} = \\frac{\\left(\\frac{n}{2}\\right)\\text{-वाँ} + \\left(\\frac{n}{2} + 1\\right)\\text{-वाँ प्रेक्षण}}{2}$।</li>
                </ul>
              </li>
              <li><strong>कार्ल पियर्सन का अनुभवजन्य सूत्र (Empirical Relation):</strong><br/>
                $$\\mathbf{\\text{बहुलक (Mode)} = 3 \\times \\text{माध्यक (Median)} - 2 \\times \\text{माध्य (Mean)}}$$
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Chance and Probability (संभावना एवं प्रायिकता)",
        headingHi: "2. संयोग एवं प्रायिकता (Probability) के नियम",
        contentHtml: `
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Probability Fundamentals</div>
            <p>Events that have many possible outcomes, but cannot be predicted with certainty in advance, are governed by <strong>Probability</strong>:</p>
            <ul>
              <li><strong>Probability Formula:</strong><br/>
                $$\mathbf{P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}}$$
              </li>
              <li><strong>Bounds of Probability:</strong> For any event $E$, $\mathbf{0 \\le P(E) \\le 1}$.</li>
              <li><strong>Impossible Event:</strong> $P = 0$ (e.g., getting a 7 on a standard 6-sided die).</li>
              <li><strong>Certain / Sure Event:</strong> $P = 1$ (e.g., Sun rising in the east tomorrow).</li>
              <li><strong>Tossing a Coin:</strong> Total outcomes = $\{H, T\} = 2$. $P(\\text{Head}) = \\frac{1}{2}$, $P(\\text{Tail}) = \\frac{1}{2}$.</li>
              <li><strong>Rolling a Die:</strong> Total outcomes = $\{1, 2, 3, 4, 5, 6\} = 6$. $P(\\text{Prime number: } 2, 3, 5) = \\frac{3}{6} = \\frac{1}{2}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="ncert-activity-box">
            <div class="activity-title">📚 एनसीईआरटी प्रायिकता के मूल सिद्धांत</div>
            <p>जिन घटनाओं के परिणाम पहले से निश्चित नहीं होते, उनके गणितीय विश्लेषण को <strong>प्रायिकता (Probability)</strong> कहते हैं:</p>
            <ul>
              <li><strong>प्रायिकता सूत्र:</strong><br/>
                $$\\mathbf{P(E) = \\frac{\\text{अनुकूल परिणामों की संख्या}}{\\text{कुल संभावित परिणामों की संख्या}}}$$
              </li>
              <li><strong>प्रायिकता की सीमा:</strong> किसी भी घटना की प्रायिकता सदैव $0$ और $1$ के बीच होती है: $\\mathbf{0 \\le P(E) \\le 1}$।</li>
              <li><strong>असंभव घटना (Impossible Event):</strong> $P = 0$ (जैसे पासे पर 7 आने की प्रायिकता)।</li>
              <li><strong>निश्चित घटना (Certain Event):</strong> $P = 1$ (जैसे सूर्य का पूर्व से उगना)।</li>
              <li><strong>सिक्का उछालना:</strong> कुल परिणाम = $\{H, T\} = 2$। $P(\\text{चित}) = \\frac{1}{2}$, $P(\\text{पट}) = \\frac{1}{2}$।</li>
              <li><strong>पासा फेंकना:</strong> कुल परिणाम = $\{1, 2, 3, 4, 5, 6\} = 6$। $P(\\text{अभाज्य संख्या: } 2, 3, 5) = \\frac{3}{6} = \\frac{1}{2}$।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the mean of the first 5 prime numbers (2, 3, 5, 7, 11)?",
        qHi: "प्रथम 5 अभाज्य संख्याओं (2, 3, 5, 7, 11) का समांतर माध्य क्या होगा?",
        options: ["5.2", "5.6", "5.8", "6.0"],
        optionsHi: ["5.2", "5.6", "5.8", "6.0"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "Sum = 2 + 3 + 5 + 7 + 11 = 28. Mean = 28 / 5 = 5.6.",
        explanationHi: "योग = 2 + 3 + 5 + 7 + 11 = 28। माध्य = 28 / 5 = 5.6।"
      },
      {
        id: 2,
        q: "Find the range of the following data: 32, 41, 28, 54, 35, 26, 33, 23, 38, 40.",
        qHi: "दिए गए आंकड़ों का परिसर (Range) ज्ञात कीजिए: 32, 41, 28, 54, 35, 26, 33, 23, 38, 40।",
        options: ["31", "32", "33", "34"],
        optionsHi: ["31", "32", "33", "34"],
        ans: 0,
        pyqRef: "UPTET Paper 2 & State TET",
        explanation: "Highest value = 54, Lowest value = 23. Range = 54 - 23 = 31.",
        explanationHi: "अधिकतम मान = 54, न्यूनतम मान = 23। परिसर = 54 - 23 = 31।"
      },
      {
        id: 3,
        q: "Find the mode of the following numbers: 1, 3, 2, 5, 1, 4, 6, 2, 5, 2, 2, 2, 4, 1, 2, 3, 1, 1, 2.",
        qHi: "दी गई संख्याओं का बहुलक ज्ञात कीजिए: 1, 3, 2, 5, 1, 4, 6, 2, 5, 2, 2, 2, 4, 1, 2, 3, 1, 1, 2।",
        options: ["1", "2", "3", "5"],
        optionsHi: ["1", "2", "3", "5"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Number 2 occurs 7 times, which is more frequent than any other number. Hence, mode is 2.",
        explanationHi: "संख्या 2 सबसे अधिक 7 बार आई है। अतः बहुलक 2 है।"
      },
      {
        id: 4,
        q: "Find the median of the data: 24, 36, 46, 17, 18, 25, 35.",
        qHi: "आंकड़ों का माध्यक ज्ञात कीजिए: 24, 36, 46, 17, 18, 25, 35।",
        options: ["24", "25", "35", "36"],
        optionsHi: ["24", "25", "35", "36"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Arrange in ascending order: 17, 18, 24, 25, 35, 36, 46. n = 7 (odd). Middle term = (7 + 1)/2 = 4th term = 25.",
        explanationHi: "आरोही क्रम: 17, 18, 24, 25, 35, 36, 46। n = 7 (विषम)। चौथा पद = 25।"
      },
      {
        id: 5,
        q: "What is the probability of getting an even prime number when a standard 6-sided die is thrown once?",
        qHi: "एक मानक पासा एक बार फेंकने पर एक सम अभाज्य संख्या प्राप्त होने की प्रायिकता क्या होगी?",
        options: ["1/6", "1/3", "1/2", "2/3"],
        optionsHi: ["1/6", "1/3", "1/2", "2/3"],
        ans: 0,
        pyqRef: "State TET & SSC CGL",
        explanation: "The only even prime number is 2. Favorable outcomes = {2} (1 outcome). Total outcomes = 6. Probability = 1/6.",
        explanationHi: "एकमात्र सम अभाज्य संख्या 2 है। अनुकूल परिणाम = {2} (1 परिणाम)। कुल परिणाम = 6। प्रायिकता = 1/6।"
      },
      {
        id: 6,
        q: "If the mean of 5 observations x, x+2, x+4, x+6, x+8 is 11, what is the value of x?",
        qHi: "यदि 5 प्रेक्षणों x, x+2, x+4, x+6, x+8 का समांतर माध्य 11 है, तो x का मान क्या होगा?",
        options: ["5", "7", "9", "11"],
        optionsHi: ["5", "7", "9", "11"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & Railway NTPC",
        explanation: "Mean = (5x + 20) / 5 = x + 4. x + 4 = 11 => x = 7.",
        explanationHi: "माध्य = (5x + 20) / 5 = x + 4। x + 4 = 11 => x = 7।"
      },
      {
        id: 7,
        q: "A die is thrown once. What is the probability of getting a number greater than 4?",
        qHi: "एक पासा एक बार फेंका जाता है। 4 से बड़ी संख्या प्राप्त करने की प्रायिकता क्या है?",
        options: ["1/6", "1/3", "1/2", "2/3"],
        optionsHi: ["1/6", "1/3", "1/2", "2/3"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Numbers greater than 4 on a die are 5 and 6 (2 outcomes). Probability = 2/6 = 1/3.",
        explanationHi: "4 से बड़ी संख्याएँ 5 और 6 हैं (2 परिणाम)। प्रायिकता = 2/6 = 1/3।"
      },
      {
        id: 8,
        q: "What is the median of the first 8 natural numbers (1, 2, 3, 4, 5, 6, 7, 8)?",
        qHi: "प्रथम 8 प्राकृत संख्याओं (1, 2, 3, 4, 5, 6, 7, 8) का माध्यक क्या होगा?",
        options: ["4", "4.5", "5", "5.5"],
        optionsHi: ["4", "4.5", "5", "5.5"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "n = 8 (even). Median = average of 4th and 5th terms = (4 + 5) / 2 = 9 / 2 = 4.5.",
        explanationHi: "n = 8 (सम)। माध्यक = चौथे और पाँचवें पद का औसत = (4 + 5) / 2 = 4.5।"
      },
      {
        id: 9,
        q: "Using Karl Pearson's empirical formula: Mode = 3*Median - 2*Mean. If Median = 20 and Mean = 18, what is the Mode?",
        qHi: "कार्ल पियर्सन के सूत्र (बहुलक = 3*माध्यक - 2*माध्य) का प्रयोग करें। यदि माध्यक = 20 और माध्य = 18 है, तो बहुलक क्या होगा?",
        options: ["22", "24", "26", "28"],
        optionsHi: ["22", "24", "26", "28"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CHSL",
        explanation: "Mode = 3 * 20 - 2 * 18 = 60 - 36 = 24.",
        explanationHi: "बहुलक = 3 * 20 - 2 * 18 = 60 - 36 = 24।"
      },
      {
        id: 10,
        q: "Which of the following can NEVER be the probability of an event?",
        qHi: "निम्नलिखित में से कौन-सी किसी घटना की प्रायिकता कभी नहीं हो सकती?",
        options: ["0.7", "-1.5", "15%", "2/3"],
        optionsHi: ["0.7", "-1.5", "15%", "2/3"],
        ans: 1,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "Probability of an event can never be negative (0 <= P <= 1). Hence, -1.5 is impossible.",
        explanationHi: "किसी घटना की प्रायिकता कभी ऋणात्मक नहीं हो सकती (0 <= P <= 1)। अतः -1.5 संभव नहीं है।"
      },
      {
        id: 11,
        q: "There are 6 marbles in a box with numbers from 1 to 6 marked on each of them. What is the probability of drawing a marble with number 5?",
        qHi: "एक डिब्बे में 6 कंचे हैं जिन पर 1 से 6 तक संख्याएँ लिखी हैं। संख्या 5 वाला कंचा निकालने की प्रायिकता क्या है?",
        options: ["1/6", "5/6", "1/2", "1/3"],
        optionsHi: ["1/6", "5/6", "1/2", "1/3"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 3 & CTET",
        explanation: "There is only one marble with number 5. P(5) = 1/6.",
        explanationHi: "संख्या 5 वाला केवल 1 कंचा है। प्रायिकता = 1/6।"
      },
      {
        id: 12,
        q: "What is the probability of a SURE event?",
        qHi: "एक निश्चित घटना (Sure Event) की प्रायिकता क्या होती है?",
        options: ["0", "0.5", "1", "Infinity"],
        optionsHi: ["0", "0.5", "1", "अनंत"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "The probability of a sure (certain) event is always 1.",
        explanationHi: "निश्चित घटना की प्रायिकता सदैव 1 होती है।"
      },
      {
        id: 13,
        q: "Can a dataset have more than one mode?",
        qHi: "क्या किसी आंकड़े में एक से अधिक बहुलक हो सकते हैं?",
        options: ["Yes", "No", "Only if numbers are negative", "Only if mean is 0"],
        optionsHi: ["हाँ", "नहीं", "केवल जब संख्याएँ ऋणात्मक हों", "केवल जब माध्य 0 हो"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Yes, data can be bimodal or multimodal if two or more observations have the same highest frequency.",
        explanationHi: "हाँ, यदि दो या अधिक संख्याएँ समान अधिकतम बार आई हों, तो एक से अधिक बहुलक (Bimodal/Multimodal) हो सकते हैं।"
      },
      {
        id: 14,
        q: "What is the mean of the first 5 whole numbers (0, 1, 2, 3, 4)?",
        qHi: "प्रथम 5 पूर्ण संख्याओं (0, 1, 2, 3, 4) का समांतर माध्य क्या है?",
        options: ["2", "2.5", "3", "3.5"],
        optionsHi: ["2", "2.5", "3", "3.5"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 3 & BPSC TRE",
        explanation: "Sum = 0 + 1 + 2 + 3 + 4 = 10. Mean = 10 / 5 = 2.",
        explanationHi: "योग = 0 + 1 + 2 + 3 + 4 = 10। माध्य = 10 / 5 = 2।"
      },
      {
        id: 15,
        q: "Find the mode and median of: 13, 16, 12, 14, 19, 12, 14, 13, 14.",
        qHi: "13, 16, 12, 14, 19, 12, 14, 13, 14 का बहुलक और माध्यक क्या होगा?",
        options: ["Mode = 14, Median = 14", "Mode = 12, Median = 13", "Mode = 14, Median = 13", "Mode = 13, Median = 14"],
        optionsHi: ["बहुलक = 14, माध्यक = 14", "बहुलक = 12, माध्यक = 13", "बहुलक = 14, माध्यक = 13", "बहुलक = 13, माध्यक = 14"],
        ans: 0,
        pyqRef: "NCERT Class 7 Exercise & State TET",
        explanation: "Sorted: 12, 12, 13, 13, 14, 14, 14, 16, 19. 14 occurs most often (3 times) => Mode = 14. 5th term = 14 => Median = 14.",
        explanationHi: "आरोही क्रम: 12, 12, 13, 13, 14, 14, 14, 16, 19। 14 सबसे अधिक (3 बार) आया => बहुलक = 14। 5वाँ पद = 14 => माध्यक = 14।"
      },
      {
        id: 16,
        q: "A batsman scored the following number of runs in six innings: 36, 35, 50, 46, 60, 55. What is his mean score?",
        qHi: "एक बल्लेबाज ने छह पारियों में 36, 35, 50, 46, 60, 55 रन बनाए। उसका औसत (माध्य) स्कोर क्या है?",
        options: ["45", "47", "49", "51"],
        optionsHi: ["45", "47", "49", "51"],
        ans: 1,
        pyqRef: "NCERT Class 7 Exercise & Railway",
        explanation: "Total runs = 36 + 35 + 50 + 46 + 60 + 55 = 282. Mean = 282 / 6 = 47.",
        explanationHi: "कुल रन = 36 + 35 + 50 + 46 + 60 + 55 = 282। माध्य = 282 / 6 = 47।"
      },
      {
        id: 17,
        q: "What is the probability of flipping a coin and getting tails?",
        qHi: "एक सिक्का उछालने पर पट (Tails) आने की प्रायिकता क्या है?",
        options: ["1/4", "1/2", "3/4", "1"],
        optionsHi: ["1/4", "1/2", "3/4", "1"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Total outcomes = 2 {H, T}. Favorable = 1 {T}. P = 1/2.",
        explanationHi: "कुल परिणाम = 2। अनुकूल परिणाम = 1। प्रायिकता = 1/2।"
      },
      {
        id: 18,
        q: "What type of graph is best suited to compare two collections of data at a glance?",
        qHi: "एक ही नज़र में दो डेटा संग्रहों की तुलना करने के लिए कौन-सा आलेख सबसे उपयुक्त है?",
        options: ["Pie chart", "Single bar graph", "Double bar graph", "Histogram"],
        optionsHi: ["पाई चार्ट", "एकल दंड आलेख", "दोहरा दंड आलेख (Double Bar Graph)", "आयतचित्र"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 3 Theory & CTET",
        explanation: "A double bar graph helps to compare two collections of data at a glance (e.g., marks in Term 1 vs Term 2).",
        explanationHi: "दोहरा दंड आलेख (Double Bar Graph) एक साथ दो सूचनाओं की तुलना करने के लिए सबसे उपयुक्त होता है।"
      },
      {
        id: 19,
        q: "If the mean of 6, 8, 5, 7, x and 4 is 7, what is the value of x?",
        qHi: "यदि 6, 8, 5, 7, x और 4 का माध्य 7 है, तो x का मान क्या है?",
        options: ["10", "11", "12", "14"],
        optionsHi: ["10", "11", "12", "14"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Sum = 6 + 8 + 5 + 7 + x + 4 = 30 + x. Total = 7 * 6 = 42. x = 42 - 30 = 12.",
        explanationHi: "योग = 30 + x। कुल = 7 * 6 = 42। x = 42 - 30 = 12।"
      },
      {
        id: 20,
        q: "Find the median of the data: 3, 1, 5, 6, 3, 4, 5.",
        qHi: "3, 1, 5, 6, 3, 4, 5 का माध्यक क्या है?",
        options: ["3", "4", "5", "6"],
        optionsHi: ["3", "4", "5", "6"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "Sorted: 1, 3, 3, 4, 5, 5, 6. n = 7 (odd). 4th term = 4.",
        explanationHi: "आरोही क्रम: 1, 3, 3, 4, 5, 5, 6। 4वाँ पद = 4।"
      },
      {
        id: 21,
        q: "The heights of 10 girls were measured in cm and the results are: 135, 150, 139, 128, 151, 132, 146, 149, 143, 141. What is the height of the tallest girl?",
        qHi: "10 लड़कियों की लंबाई सेमी में मापी गई: 135, 150, 139, 128, 151, 132, 146, 149, 143, 141। सबसे लंबी लड़की की लंबाई क्या है?",
        options: ["150 cm", "151 cm", "149 cm", "146 cm"],
        optionsHi: ["150 सेमी", "151 सेमी", "149 सेमी", "146 सेमी"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 3 Exercise",
        explanation: "Maximum value in the dataset is 151 cm.",
        explanationHi: "आंकड़ों में सबसे अधिक मान 151 सेमी है।"
      },
      {
        id: 22,
        q: "What is the range of heights of the 10 girls in question 21?",
        qHi: "प्रश्न 21 की 10 लड़कियों की लंबाइयों का परिसर (Range) क्या है?",
        options: ["21 cm", "23 cm", "25 cm", "27 cm"],
        optionsHi: ["21 सेमी", "23 सेमी", "25 सेमी", "27 सेमी"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 3 Exercise",
        explanation: "Tallest = 151 cm, Shortest = 128 cm. Range = 151 - 128 = 23 cm.",
        explanationHi: "अधिकतम = 151 सेमी, न्यूनतम = 128 सेमी। परिसर = 151 - 128 = 23 सेमी।"
      },
      {
        id: 23,
        q: "When a coin is tossed, what is the probability that it lands on either heads or tails?",
        qHi: "जब एक सिक्का उछाला जाता है, तो या तो चित या पट आने की प्रायिकता क्या है?",
        options: ["0", "0.5", "1", "2"],
        optionsHi: ["0", "0.5", "1", "2"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "It is a certain event that it lands either head or tail. Probability = 2/2 = 1.",
        explanationHi: "चित या पट आना एक निश्चित घटना है। प्रायिकता = 2/2 = 1।"
      },
      {
        id: 24,
        q: "What is the mode of numbers: 2, 2, 2, 3, 3, 3, 4, 5?",
        qHi: "संख्याओं 2, 2, 2, 3, 3, 3, 4, 5 का बहुलक क्या होगा?",
        options: ["Only 2", "Only 3", "Both 2 and 3", "No mode"],
        optionsHi: ["केवल 2", "केवल 3", "2 और 3 दोनों", "कोई बहुलक नहीं"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Both 2 and 3 appear 3 times (highest frequency). The data is bimodal with modes 2 and 3.",
        explanationHi: "2 और 3 दोनों 3-3 बार आए हैं। अतः यह द्वि-बहुलकीय (Bimodal) है, बहुलक 2 और 3 दोनों हैं।"
      },
      {
        id: 25,
        q: "What is the probability of drawing a red card from a well-shuffled standard deck of 52 playing cards?",
        qHi: "52 ताश के पत्तों की गड्डी में से एक लाल पत्ता निकालने की प्रायिकता क्या होगी?",
        options: ["1/4", "1/2", "1/13", "1/26"],
        optionsHi: ["1/4", "1/2", "1/13", "1/26"],
        ans: 1,
        pyqRef: "SSC CGL & Railway NTPC",
        explanation: "A standard deck has 26 red cards (13 hearts + 13 diamonds). Probability = 26 / 52 = 1/2.",
        explanationHi: "ताश में 26 लाल पत्ते होते हैं (13 पान + 13 ईंट)। प्रायिकता = 26 / 52 = 1/2।"
      },
      {
        id: 26,
        q: "If the mean of 4, 7, 8, 9, x is 7, what is the value of x?",
        qHi: "यदि 4, 7, 8, 9, x का समांतर माध्य 7 है, तो x का मान क्या होगा?",
        options: ["6", "7", "8", "9"],
        optionsHi: ["6", "7", "8", "9"],
        ans: 1,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "Sum = 4 + 7 + 8 + 9 + x = 28 + x. Total = 7 * 5 = 35. x = 35 - 28 = 7.",
        explanationHi: "योग = 28 + x। कुल = 7 * 5 = 35। x = 35 - 28 = 7।"
      },
      {
        id: 27,
        q: "What is the median of numbers: 10, 20, 30, 40, 50, 60?",
        qHi: "संख्याओं 10, 20, 30, 40, 50, 60 का माध्यक क्या होगा?",
        options: ["30", "35", "40", "45"],
        optionsHi: ["30", "35", "40", "45"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "n = 6 (even). Median = (30 + 40) / 2 = 70 / 2 = 35.",
        explanationHi: "n = 6 (सम)। माध्यक = (30 + 40) / 2 = 35।"
      },
      {
        id: 28,
        q: "What is the probability of rolling a number less than 1 on a standard die?",
        qHi: "एक मानक पासे पर 1 से छोटी संख्या आने की प्रायिकता क्या है?",
        options: ["0", "1/6", "1/2", "1"],
        optionsHi: ["0", "1/6", "1/2", "1"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "Numbers on a die are 1, 2, 3, 4, 5, 6. Getting a number < 1 is an impossible event, so P = 0.",
        explanationHi: "पासे पर 1 से छोटी कोई संख्या नहीं होती। यह एक असंभव घटना है, अतः प्रायिकता = 0।"
      },
      {
        id: 29,
        q: "In an empirical relationship, if Mode = 14 and Mean = 5, what is the Median?",
        qHi: "अनुभवजन्य संबंध (Mode = 3*Median - 2*Mean) में, यदि बहुलक = 14 और माध्य = 5 है, तो माध्यक क्या होगा?",
        options: ["7", "8", "9", "10"],
        optionsHi: ["7", "8", "9", "10"],
        ans: 1,
        pyqRef: "SSC CHSL & DSSSB",
        explanation: "14 = 3 * Median - 2 * 5 => 14 = 3 * Median - 10 => 3 * Median = 24 => Median = 8.",
        explanationHi: "14 = 3 * माध्यक - 10 => 3 * माध्यक = 24 => माध्यक = 8।"
      },
      {
        id: 30,
        q: "Find the mean of the first five multiples of 3 (3, 6, 9, 12, 15).",
        qHi: "3 के प्रथम पाँच गुणजों (3, 6, 9, 12, 15) का समांतर माध्य क्या है?",
        options: ["6", "9", "12", "15"],
        optionsHi: ["6", "9", "12", "15"],
        ans: 1,
        pyqRef: "Railway NTPC & State TET",
        explanation: "Sum = 3 + 6 + 9 + 12 + 15 = 45. Mean = 45 / 5 = 9.",
        explanationHi: "योग = 3 + 6 + 9 + 12 + 15 = 45। माध्य = 45 / 5 = 9।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 4: Simple Equations (सरल समीकरण)
  // ==========================================
  {
    id: "ncert-c7-m04",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 4,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 4: Simple Equations (सरल समीकरण)",
    titleHi: "अध्याय 4: सरल समीकरण (Linear Equations in One Variable)",
    readingTime: "22 mins read",
    badge: "Linear Algebra",
    desc: "NCERT Class 7 Chapter 4: Setting up simple equations, solving linear equations by transposition, word problems on ages, numbers, consecutive integers, and geometric perimeters.",
    descHi: "एनसीईआरटी कक्षा 7 सरल समीकरण: समीकरण निर्माण, पक्षांतरण (Transposition) द्वारा हल, आयु संबंधी प्रश्न, क्रमागत संख्याओं एवं ज्यामितीय परिमाप के व्यावहारिक प्रश्न।",
    competitionEdge: "High-weightage chapter for CTET Paper 2, BPSC TRE Middle School, SSC, and State Exams. Word problems on ages, digit interchanging, and consecutive numbers are recurring favorites.",
    competitionEdgeHi: "CTET पेपर 2, BPSC शिक्षक भर्ती एवं SSC में सर्वाधिक अंक दिलाने वाला अध्याय। पिता-पुत्र की आयु वाले प्रश्न, क्रमागत सम/विषम संख्याएँ और पक्षांतरण के नियम सीधे पूछे जाते हैं।",
    pdfUrl: "/ncert_books/class7/math_ch04.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch04_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch04_Simple_Equations.pdf",
    pdfSize: "1.16 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Setting up an Equation & The Concept of Equality",
        headingHi: "1. एनसीईआरटी मूल पाठ: समीकरण का निर्माण एवं समानता की संकल्पना",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! An equation is a condition on a variable such that two algebraic expressions are equal ($LHS = RHS$). The sign of equality ($=$) is like a balanced weighing scale: whatever operation you do on LHS, you must do on RHS to maintain equilibrium! In competitive exams, mastering <strong>Transposition</strong> turns 2-minute word problems into 15-second oral calculations.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 The Golden Rule of Transposition</div>
            <p>Transposing means moving a term from one side of the equation to the other by changing its mathematical operator:</p>
            <ul>
              <li>$\mathbf{+}$ becomes $\mathbf{-}$ on the other side: $x + 5 = 12 \implies x = 12 - 5 = 7$.</li>
              <li>$\mathbf{-}$ becomes $\mathbf{+}$ on the other side: $x - 7 = 15 \implies x = 15 + 7 = 22$.</li>
              <li>$\mathbf{\times}$ becomes $\mathbf{\div}$ on the other side: $4x = 28 \implies x = \frac{28}{4} = 7$.</li>
              <li>$\mathbf{\div}$ becomes $\mathbf{\times}$ on the other side: $\frac{x}{3} = 9 \implies x = 9 \times 3 = 27$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय शिक्षक अभ्यर्थियों! समीकरण एक चर पर ऐसा प्रतिबंध है जिसके दोनों पक्ष ($LHS$ और $RHS$) समान होते हैं। बराबर का चिन्ह ($=$) तराजू के संतुलन की तरह होता है। जो संक्रिया आप बाईं ओर करेंगे, वही दाईं ओर करनी होगी। पक्षांतरण (Transposition) के नियमों को समझ लेने से परीक्षा के जटिल शाब्दिक प्रश्न चुटकियों में हल हो जाते हैं!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 पक्षांतरण (Transposition) के स्वर्णिम नियम</div>
            <p>पक्षांतरण का अर्थ है किसी पद को बराबर के चिन्ह के दूसरी ओर ले जाना, जिससे उसका चिन्ह उल्टा हो जाता है:</p>
            <ul>
              <li>$\mathbf{+}$ दूसरी तरफ जाकर $\mathbf{-}$ बन जाता है: $x + 5 = 12 \implies x = 12 - 5 = 7$।</li>
              <li>$\mathbf{-}$ दूसरी तरफ जाकर $\mathbf{+}$ बन जाता है: $x - 7 = 15 \implies x = 15 + 7 = 22$।</li>
              <li>$\mathbf{\times}$ दूसरी तरफ जाकर $\mathbf{\div}$ बन जाता है: $4x = 28 \implies x = \frac{28}{4} = 7$।</li>
              <li>$\mathbf{\div}$ दूसरी तरफ जाकर $\mathbf{\times}$ बन जाता है: $\frac{x}{3} = 9 \implies x = 9 \times 3 = 27$।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Solving Real-Life Word Problems (Ages & Consecutive Numbers)",
        headingHi: "2. व्यावहारिक प्रश्नों का समाधान (आयु एवं क्रमागत संख्याएँ)",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Word Problem Conversion Matrix</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Word Statement (कथन)</th>
                  <th>Algebraic Equation (बीजीय रूप)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sum of two consecutive natural numbers is $S$</td>
                  <td>$x + (x + 1) = S \implies 2x + 1 = S$</td>
                </tr>
                <tr>
                  <td>Sum of two consecutive even/odd numbers is $S$</td>
                  <td>$x + (x + 2) = S \implies 2x + 2 = S$</td>
                </tr>
                <tr>
                  <td>Father is 3 times as old as son; sum of ages is 48</td>
                  <td>Son = $x$, Father = $3x \implies x + 3x = 48 \implies 4x = 48 \implies x = 12$</td>
                </tr>
                <tr>
                  <td>Age $n$ years ago / $n$ years hence</td>
                  <td>Past: $(x - n)$; Future: $(x + n)$</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ व्यावहारिक प्रश्नों के समीकरण निर्माण की तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>शाब्दिक कथन (Word Statement)</th>
                  <th>बीजीय समीकरण (Algebraic Equation)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>दो क्रमागत प्राकृत संख्याओं का योग $S$ है</td>
                  <td>$x + (x + 1) = S \implies 2x + 1 = S$</td>
                </tr>
                <tr>
                  <td>दो क्रमागत सम या विषम संख्याओं का योग $S$ है</td>
                  <td>$x + (x + 2) = S \implies 2x + 2 = S$</td>
                </tr>
                <tr>
                  <td>पिता की आयु पुत्र से 3 गुनी है; दोनों का योग 48 है</td>
                  <td>पुत्र = $x$, पिता = $3x \implies 4x = 48 \implies x = 12$ वर्ष</td>
                </tr>
                <tr>
                  <td>$n$ वर्ष पहले / $n$ वर्ष बाद की आयु</td>
                  <td>भूतकाल: $(x - n)$; भविष्य: $(x + n)$</td>
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
        q: "Solve the equation: 3n + 7 = 25.",
        qHi: "समीकरण हल कीजिए: 3n + 7 = 25।",
        options: ["n = 5", "n = 6", "n = 7", "n = 8"],
        optionsHi: ["n = 5", "n = 6", "n = 7", "n = 8"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "3n = 25 - 7 = 18 => n = 18 / 3 = 6.",
        explanationHi: "3n = 25 - 7 = 18 => n = 18 / 3 = 6।"
      },
      {
        id: 2,
        q: "Laxmi's father is 49 years old. He is 4 years older than three times Laxmi's age. What is Laxmi's age?",
        qHi: "लक्ष्मी के पिता की आयु 49 वर्ष है। उनकी आयु लक्ष्मी की आयु के तीन गुने से 4 वर्ष अधिक है। लक्ष्मी की आयु क्या है?",
        options: ["13 years", "14 years", "15 years", "16 years"],
        optionsHi: ["13 वर्ष", "14 वर्ष", "15 वर्ष", "16 वर्ष"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 4 Example & CTET Paper 2",
        explanation: "Let Laxmi's age be y. 3y + 4 = 49 => 3y = 45 => y = 15 years.",
        explanationHi: "माना लक्ष्मी की आयु y है। 3y + 4 = 49 => 3y = 45 => y = 15 वर्ष।"
      },
      {
        id: 3,
        q: "The sum of three consecutive multiples of 11 is 363. What is the smallest multiple?",
        qHi: "11 के तीन क्रमागत गुणजों का योग 363 है। सबसे छोटा गुणज क्या है?",
        options: ["110", "121", "132", "99"],
        optionsHi: ["110", "121", "132", "99"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Let multiples be x, x+11, x+22. 3x + 33 = 363 => 3x = 330 => x = 110.",
        explanationHi: "माना गुणज x, x+11, x+22 हैं। 3x + 33 = 363 => 3x = 330 => x = 110।"
      },
      {
        id: 4,
        q: "Solve: (m/4) - 7 = 3.",
        qHi: "हल कीजिए: (m/4) - 7 = 3।",
        options: ["m = 16", "m = 28", "m = 40", "m = 44"],
        optionsHi: ["m = 16", "m = 28", "m = 40", "m = 44"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "m/4 = 3 + 7 = 10 => m = 10 * 4 = 40.",
        explanationHi: "m/4 = 3 + 7 = 10 => m = 10 * 4 = 40।"
      },
      {
        id: 5,
        q: "If 4(m + 3) = 18, what is the value of m?",
        qHi: "यदि 4(m + 3) = 18 है, तो m का मान क्या है?",
        options: ["1.5", "2.0", "2.5", "3.0"],
        optionsHi: ["1.5", "2.0", "2.5", "3.0"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "m + 3 = 18/4 = 4.5 => m = 4.5 - 3 = 1.5.",
        explanationHi: "m + 3 = 18/4 = 4.5 => m = 4.5 - 3 = 1.5।"
      },
      {
        id: 6,
        q: "The perimeter of a rectangular swimming pool is 154 m. Its length is 2 m more than twice its breadth. What are the length and breadth of the pool?",
        qHi: "एक आयताकार तरणताल का परिमाप 154 मीटर है। उसकी लंबाई चौड़ाई के दोगुने से 2 मीटर अधिक है। लंबाई और चौड़ाई क्या है?",
        options: ["L = 52 m, B = 25 m", "L = 50 m, B = 27 m", "L = 48 m, B = 29 m", "L = 54 m, B = 23 m"],
        optionsHi: ["लंबाई = 52 मी, चौड़ाई = 25 मी", "लंबाई = 50 मी, चौड़ाई = 27 मी", "लंबाई = 48 मी, चौड़ाई = 29 मी", "लंबाई = 54 मी, चौड़ाई = 23 मी"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 4 & BPSC TRE 6-8",
        explanation: "Breadth = b, Length = 2b + 2. Perimeter = 2(2b + 2 + b) = 154 => 2(3b + 2) = 154 => 3b + 2 = 77 => 3b = 75 => b = 25 m. Length = 2(25) + 2 = 52 m.",
        explanationHi: "चौड़ाई = b, लंबाई = 2b + 2। परिमाप = 2(3b + 2) = 154 => 3b + 2 = 77 => 3b = 75 => b = 25 मीटर। लंबाई = 52 मीटर।"
      },
      {
        id: 7,
        q: "If 10 is subtracted from half of a number, the result is 4. What is the number?",
        qHi: "यदि किसी संख्या के आधे में से 10 घटाया जाए, तो परिणाम 4 आता है। वह संख्या क्या है?",
        options: ["24", "28", "32", "36"],
        optionsHi: ["24", "28", "32", "36"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC MTS",
        explanation: "(x / 2) - 10 = 4 => x / 2 = 14 => x = 28.",
        explanationHi: "(x / 2) - 10 = 4 => x / 2 = 14 => x = 28।"
      },
      {
        id: 8,
        q: "People of Sundargram planted trees in the village garden. The number of non-fruit trees was two more than three times the number of fruit trees. If there were 77 non-fruit trees, what was the number of fruit trees?",
        qHi: "सुंदरग्राम के लोगों ने उद्यान में पेड़ लगाए। गैर-फलदार पेड़ों की संख्या फलदार पेड़ों की संख्या के तीन गुने से 2 अधिक थी। यदि गैर-फलदार पेड़ 77 थे, तो फलदार पेड़ कितने थे?",
        options: ["23", "24", "25", "26"],
        optionsHi: ["23", "24", "25", "26"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 4 Exercise",
        explanation: "Let fruit trees be x. 3x + 2 = 77 => 3x = 75 => x = 25.",
        explanationHi: "माना फलदार पेड़ x हैं। 3x + 2 = 77 => 3x = 75 => x = 25।"
      },
      {
        id: 9,
        q: "Solve: -4(2 - x) = 9.",
        qHi: "हल कीजिए: -4(2 - x) = 9।",
        options: ["x = 4.25", "x = -4.25", "x = 0.25", "x = -0.25"],
        optionsHi: ["x = 4.25", "x = -4.25", "x = 0.25", "x = -0.25"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "-8 + 4x = 9 => 4x = 17 => x = 17/4 = 4.25.",
        explanationHi: "-8 + 4x = 9 => 4x = 17 => x = 17/4 = 4.25।"
      },
      {
        id: 10,
        q: "The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. If the highest score is 87, what is the lowest score?",
        qHi: "शिक्षिका बताती हैं कि कक्षा में अधिकतम अंक न्यूनतम अंक के दोगुने से 7 अधिक हैं। यदि अधिकतम अंक 87 हैं, तो न्यूनतम अंक क्या हैं?",
        options: ["38", "40", "42", "45"],
        optionsHi: ["38", "40", "42", "45"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 4 Exercise & CTET",
        explanation: "2L + 7 = 87 => 2L = 80 => L = 40.",
        explanationHi: "2L + 7 = 87 => 2L = 80 => L = 40।"
      },
      {
        id: 11,
        q: "In an isosceles triangle, the base angles are equal. The vertex angle is 40°. What are the base angles?",
        qHi: "एक समद्विबाहु त्रिभुज में आधार कोण बराबर हैं। शीर्ष कोण 40° है। आधार कोणों का मान क्या होगा?",
        options: ["60° each", "70° each", "80° each", "50° each"],
        optionsHi: ["प्रत्येक 60°", "प्रत्येक 70°", "प्रत्येक 80°", "प्रत्येक 50°"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 4 & State TET",
        explanation: "Let base angles be b. b + b + 40° = 180° => 2b = 140° => b = 70°.",
        explanationHi: "माना आधार कोण b है। b + b + 40° = 180° => 2b = 140° => b = 70°।"
      },
      {
        id: 12,
        q: "Solve the equation: 5x + 9 = 5 + 3x.",
        qHi: "समीकरण हल कीजिए: 5x + 9 = 5 + 3x।",
        options: ["x = 2", "x = -2", "x = 4", "x = -4"],
        optionsHi: ["x = 2", "x = -2", "x = 4", "x = -4"],
        ans: 1,
        pyqRef: "Railway NTPC & SSC MTS",
        explanation: "5x - 3x = 5 - 9 => 2x = -4 => x = -2.",
        explanationHi: "5x - 3x = 5 - 9 => 2x = -4 => x = -2।"
      },
      {
        id: 13,
        q: "A number added to its two-thirds is equal to 35. Find the number.",
        qHi: "एक संख्या और उसके दो-तिहाई का योग 35 है। वह संख्या ज्ञात कीजिए।",
        options: ["20", "21", "24", "25"],
        optionsHi: ["20", "21", "24", "25"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & CTET",
        explanation: "x + (2x / 3) = 35 => (5x / 3) = 35 => x = (35 * 3) / 5 = 21.",
        explanationHi: "x + (2x / 3) = 35 => 5x / 3 = 35 => x = (35 * 3) / 5 = 21।"
      },
      {
        id: 14,
        q: "Which of the following equations represents: 'Thrice a number x added to 9 gives 24'?",
        qHi: "निम्नलिखित में से कौन-सा समीकरण 'एक संख्या x के तिगुने में 9 जोड़ने पर 24 प्राप्त होता है' को दर्शाता है?",
        options: ["3x - 9 = 24", "3x + 9 = 24", "x + 9 = 24/3", "3(x + 9) = 24"],
        optionsHi: ["3x - 9 = 24", "3x + 9 = 24", "x + 9 = 24/3", "3(x + 9) = 24"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Thrice x is 3x. Adding 9 gives 3x + 9 = 24.",
        explanationHi: "x का तिगुना 3x है। 9 जोड़ने पर 3x + 9 = 24 बनता है।"
      },
      {
        id: 15,
        q: "Solve: (x - 5) / 3 = (x - 3) / 5.",
        qHi: "हल कीजिए: (x - 5) / 3 = (x - 3) / 5।",
        options: ["x = 6", "x = 7", "x = 8", "x = 9"],
        optionsHi: ["x = 6", "x = 7", "x = 8", "x = 9"],
        ans: 2,
        pyqRef: "SSC CGL & BPSC TRE 6-8",
        explanation: "Cross multiplying: 5(x - 5) = 3(x - 3) => 5x - 25 = 3x - 9 => 2x = 16 => x = 8.",
        explanationHi: "वज्र-गुणन करने पर: 5(x - 5) = 3(x - 3) => 5x - 25 = 3x - 9 => 2x = 16 => x = 8।"
      },
      {
        id: 16,
        q: "If 7x - 14 = 0, what is the value of 2x + 5?",
        qHi: "यदि 7x - 14 = 0 है, तो 2x + 5 का मान क्या होगा?",
        options: ["7", "9", "11", "13"],
        optionsHi: ["7", "9", "11", "13"],
        ans: 1,
        pyqRef: "Railway Group D & State TET",
        explanation: "7x = 14 => x = 2. Then 2(2) + 5 = 4 + 5 = 9.",
        explanationHi: "7x = 14 => x = 2। अतः 2(2) + 5 = 9।"
      },
      {
        id: 17,
        q: "The sum of two numbers is 95. If one exceeds the other by 15, find the smaller number.",
        qHi: "दो संख्याओं का योग 95 है। यदि एक संख्या दूसरी से 15 अधिक है, तो छोटी संख्या ज्ञात कीजिए।",
        options: ["35", "40", "45", "55"],
        optionsHi: ["35", "40", "45", "55"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE",
        explanation: "x + (x + 15) = 95 => 2x = 80 => x = 40.",
        explanationHi: "x + (x + 15) = 95 => 2x = 80 => x = 40।"
      },
      {
        id: 18,
        q: "Solve: 0.25(4y - 3) = 0.05(10y - 9).",
        qHi: "हल कीजिए: 0.25(4y - 3) = 0.05(10y - 9)।",
        options: ["y = 0.6", "y = 0.8", "y = 1.0", "y = 1.2"],
        optionsHi: ["y = 0.6", "y = 0.8", "y = 1.0", "y = 1.2"],
        ans: 0,
        pyqRef: "SSC CHSL & BPSC Middle School",
        explanation: "Multiply both sides by 100: 25(4y - 3) = 5(10y - 9) => 100y - 75 = 50y - 45 => 50y = 30 => y = 30/50 = 0.6.",
        explanationHi: "दोनों पक्षों को 100 से गुणा करें: 25(4y - 3) = 5(10y - 9) => 100y - 75 = 50y - 45 => 50y = 30 => y = 0.6।"
      },
      {
        id: 19,
        q: "Three consecutive integers add up to 51. What are the integers?",
        qHi: "तीन क्रमागत पूर्णांकों का योग 51 है। वे पूर्णांक क्या हैं?",
        options: ["15, 16, 17", "16, 17, 18", "17, 18, 19", "18, 19, 20"],
        optionsHi: ["15, 16, 17", "16, 17, 18", "17, 18, 19", "18, 19, 20"],
        ans: 1,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "x + (x + 1) + (x + 2) = 51 => 3x + 3 = 51 => 3x = 48 => x = 16. Integers are 16, 17, 18.",
        explanationHi: "3x + 3 = 51 => 3x = 48 => x = 16। संख्याएँ 16, 17, 18 हैं।"
      },
      {
        id: 20,
        q: "What is the degree of a simple linear equation in one variable?",
        qHi: "एक चर वाले रैखिक समीकरण (Linear Equation) की घात (Degree) क्या होती है?",
        options: ["0", "1", "2", "Any integer"],
        optionsHi: ["0", "1", "2", "कोई भी पूर्णांक"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "The highest power of the variable in a linear equation is always 1.",
        explanationHi: "रैखिक समीकरण में चर की अधिकतम घात सदैव 1 होती है।"
      },
      {
        id: 21,
        q: "Solve: (3x / 2) = 1/3.",
        qHi: "हल कीजिए: (3x / 2) = 1/3।",
        options: ["x = 2/9", "x = 9/2", "x = 1/2", "x = 2/3"],
        optionsHi: ["x = 2/9", "x = 9/2", "x = 1/2", "x = 2/3"],
        ans: 0,
        pyqRef: "Railway Group D & State TET",
        explanation: "3x = 2 / 3 => x = 2 / 9.",
        explanationHi: "3x = 2 / 3 => x = 2 / 9।"
      },
      {
        id: 22,
        q: "If 15 is subtracted from a number and the result is multiplied by 4, we get 20. What is the number?",
        qHi: "यदि किसी संख्या में से 15 घटाकर परिणाम को 4 से गुणा किया जाए, तो 20 प्राप्त होता है। वह संख्या क्या है?",
        options: ["18", "20", "22", "25"],
        optionsHi: ["18", "20", "22", "25"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "4(x - 15) = 20 => x - 15 = 5 => x = 20.",
        explanationHi: "4(x - 15) = 20 => x - 15 = 5 => x = 20।"
      },
      {
        id: 23,
        q: "A sum of ₹800 is in the form of ₹10 and ₹20 notes. If the total number of notes is 50, how many ₹10 notes are there?",
        qHi: "₹800 की राशि ₹10 और ₹20 के नोटों के रूप में है। यदि नोटों की कुल संख्या 50 है, तो ₹10 के कितने नोट हैं?",
        options: ["15", "20", "25", "30"],
        optionsHi: ["15", "20", "25", "30"],
        ans: 1,
        pyqRef: "SSC CGL / CHSL & CTET",
        explanation: "Let ₹10 notes be x. ₹20 notes = 50 - x. 10x + 20(50 - x) = 800 => 10x + 1000 - 20x = 800 => -10x = -200 => x = 20.",
        explanationHi: "माना ₹10 के नोट x हैं। 10x + 20(50 - x) = 800 => -10x = -200 => x = 20 नोट।"
      },
      {
        id: 24,
        q: "Solve: (x / 3) + 1 = 7/15.",
        qHi: "हल कीजिए: (x / 3) + 1 = 7/15।",
        options: ["x = -8/5", "x = 8/5", "x = -7/5", "x = 7/5"],
        optionsHi: ["x = -8/5", "x = 8/5", "x = -7/5", "x = 7/5"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "x/3 = 7/15 - 1 = -8/15 => x = 3 * (-8/15) = -8/5.",
        explanationHi: "x/3 = 7/15 - 1 = -8/15 => x = 3 * (-8/15) = -8/5।"
      },
      {
        id: 25,
        q: "A grandfather is 10 times older than his granddaughter. He is also 54 years older than her. What is the granddaughter's age?",
        qHi: "दादाजी की आयु अपनी पोती की आयु से 10 गुनी है। वे उससे 54 वर्ष बड़े भी हैं। पोती की आयु क्या है?",
        options: ["5 years", "6 years", "7 years", "8 years"],
        optionsHi: ["5 वर्ष", "6 वर्ष", "7 वर्ष", "8 वर्ष"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & State TET",
        explanation: "Let granddaughter be x. 10x = x + 54 => 9x = 54 => x = 6 years.",
        explanationHi: "माना पोती की आयु x है। 10x = x + 54 => 9x = 54 => x = 6 वर्ष।"
      },
      {
        id: 26,
        q: "If 2x - 3 = x + 2, what is x?",
        qHi: "यदि 2x - 3 = x + 2 है, तो x का मान क्या है?",
        options: ["3", "4", "5", "6"],
        optionsHi: ["3", "4", "5", "6"],
        ans: 2,
        pyqRef: "Railway NTPC & SSC MTS",
        explanation: "2x - x = 2 + 3 => x = 5.",
        explanationHi: "2x - x = 2 + 3 => x = 5।"
      },
      {
        id: 27,
        q: "The ages of Rahul and Haroon are in the ratio 5:7. Four years later the sum of their ages will be 56 years. What are their present ages?",
        qHi: "राहुल और हारून की वर्तमान आयु में 5:7 का अनुपात है। 4 वर्ष बाद उनकी आयु का योग 56 वर्ष होगा। उनकी वर्तमान आयु क्या है?",
        options: ["20 and 28 years", "15 and 21 years", "25 and 35 years", "10 and 14 years"],
        optionsHi: ["20 और 28 वर्ष", "15 और 21 वर्ष", "25 और 35 वर्ष", "10 और 14 वर्ष"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 4 & CTET Paper 2",
        explanation: "Ages = 5x, 7x. (5x + 4) + (7x + 4) = 56 => 12x + 8 = 56 => 12x = 48 => x = 4. Ages = 5(4) = 20, 7(4) = 28.",
        explanationHi: "आयु = 5x, 7x। 12x + 8 = 56 => 12x = 48 => x = 4। राहुल = 20 वर्ष, हारून = 28 वर्ष।"
      },
      {
        id: 28,
        q: "Solve: (7y + 4) / (y + 2) = -4/3.",
        qHi: "हल कीजिए: (7y + 4) / (y + 2) = -4/3।",
        options: ["y = -4/5", "y = 4/5", "y = -2", "y = 2"],
        optionsHi: ["y = -4/5", "y = 4/5", "y = -2", "y = 2"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "3(7y + 4) = -4(y + 2) => 21y + 12 = -4y - 8 => 25y = -20 => y = -20/25 = -4/5.",
        explanationHi: "3(7y + 4) = -4(y + 2) => 21y + 12 = -4y - 8 => 25y = -20 => y = -4/5।"
      },
      {
        id: 29,
        q: "If 1/5 of a number minus 4 gives 3, what is the number?",
        qHi: "यदि किसी संख्या के 1/5 भाग में से 4 घटाने पर 3 प्राप्त होता है, तो वह संख्या क्या है?",
        options: ["25", "30", "35", "40"],
        optionsHi: ["25", "30", "35", "40"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "x/5 - 4 = 3 => x/5 = 7 => x = 35.",
        explanationHi: "x/5 - 4 = 3 => x/5 = 7 => x = 35।"
      },
      {
        id: 30,
        q: "How many solutions does a linear equation in one variable have?",
        qHi: "एक चर वाले रैखिक समीकरण के कितने हल होते हैं?",
        options: ["No solution", "Exactly one unique solution", "Two solutions", "Infinitely many solutions"],
        optionsHi: ["कोई हल नहीं", "सटीक एक अद्वितीय हल", "दो हल", "अनंत हल"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "A linear equation in one variable always has exactly one unique solution.",
        explanationHi: "एक चर वाले रैखिक समीकरण का सदैव केवल एक अद्वितीय (Unique) हल होता है।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 5: Lines and Angles (रेखा एवं कोण)
  // ==========================================
  {
    id: "ncert-c7-m05",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 5,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 5: Lines and Angles (रेखा एवं कोण)",
    titleHi: "अध्याय 5: रेखा एवं कोण (Lines, Angles & Transversals)",
    readingTime: "24 mins read",
    badge: "Core Geometry",
    desc: "NCERT Class 7 Chapter 5: Complementary angles, supplementary angles, adjacent angles, linear pair, vertically opposite angles, transversal lines, parallel lines, alternate and corresponding angles.",
    descHi: "एनसीईआरटी कक्षा 7 रेखा एवं कोण: पूरक कोण (90°), संपूरक कोण (180°), आसन्न कोण, रैखिक युग्म, शीर्षाभिमुख कोण, तिर्यक छेदी रेखा, समांतर रेखाएँ, एकांतर एवं संगत कोण।",
    competitionEdge: "Guaranteed 2-3 questions in CTET Paper 2, BPSC TRE Middle School, SSC CGL/CHSL, and State TETs. Angle calculations with parallel line transversals (F, Z, C shapes) are recurring favorites.",
    competitionEdgeHi: "CTET पेपर 2, BPSC शिक्षक भर्ती और SSC में 100% पूछे जाने वाले प्रश्न: पूरक व संपूरक कोणों के अनुपात, तिर्यक रेखा के एकांतर अंतःकोण, संगत कोण और तिर्यक रेखा के एक ही ओर के अंतःकोणों का योग 180°।",
    pdfUrl: "/ncert_books/class7/math_ch05.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch05_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch05_Lines_Angles.pdf",
    pdfSize: "1.17 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Pairs of Angles",
        headingHi: "1. एनसीईआरटी मूल पाठ: कोणों के युग्म (Pairs of Angles)",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Geometry begins with angle pairs! Aspirants often confuse complementary ($90^\circ$) with supplementary ($180^\circ$). Remember this mnemonic: <strong>C comes before S, and 90 comes before 180!</strong> Thus, <strong>C</strong>omplementary = $90^\circ$, <strong>S</strong>upplementary = $180^\circ$. Let's master all essential pairs!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Angle Pairs Definition & Formula Matrix</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Angle Pair</th>
                  <th>Definition & Formula</th>
                  <th>Key Exam Invariant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Complementary Angles (पूरक कोण)</strong></td>
                  <td>Sum of measures is $90^\circ$: $\angle A + \angle B = 90^\circ$</td>
                  <td>Angle equal to its complement = $45^\circ$</td>
                </tr>
                <tr>
                  <td><strong>Supplementary Angles (संपूरक कोण)</strong></td>
                  <td>Sum of measures is $180^\circ$: $\angle A + \angle B = 180^\circ$</td>
                  <td>Angle equal to its supplement = $90^\circ$</td>
                </tr>
                <tr>
                  <td><strong>Adjacent Angles (आसन्न कोण)</strong></td>
                  <td>Common vertex, common arm, non-common arms on either side</td>
                  <td>No overlap of interiors</td>
                </tr>
                <tr>
                  <td><strong>Linear Pair (रैखिक युग्म)</strong></td>
                  <td>Pair of adjacent angles whose non-common arms are opposite rays</td>
                  <td>Sum is always $180^\circ$: $\angle 1 + \angle 2 = 180^\circ$</td>
                </tr>
                <tr>
                  <td><strong>Vertically Opposite Angles (शीर्षाभिमुख कोण)</strong></td>
                  <td>Formed when two lines intersect: non-adjacent opposite angles</td>
                  <td>Vertically opposite angles are <strong>ALWAYS EQUAL</strong>!</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              ज्यामिति की शुरुआत कोणों के जोड़ों से होती है! छात्र अक्सर पूरक कोण ($90^\circ$) और संपूरक कोण ($180^\circ$) में भ्रमित होते हैं। अंग्रेजी में याद रखें: <strong>C</strong> (Complementary) पहले आता है तो $90^\circ$, <strong>S</strong> (Supplementary) बाद में आता है तो $180^\circ$! हिंदी में: पूरक (छोटा नाम = $90^\circ$), संपूरक (बड़ा नाम = $180^\circ$)।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ कोण युग्मों की परिभाषा एवं सूत्र तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>कोण युग्म</th>
                  <th>परिभाषा एवं सूत्र</th>
                  <th>परीक्षा में पूछे जाने वाले तथ्य</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>पूरक कोण (Complementary)</strong></td>
                  <td>दोनों कोणों का योग $90^\circ$ होता है: $\angle A + \angle B = 90^\circ$</td>
                  <td>वह कोण जो अपने पूरक के बराबर है = $45^\circ$</td>
                </tr>
                <tr>
                  <td><strong>संपूरक कोण (Supplementary)</strong></td>
                  <td>दोनों कोणों का योग $180^\circ$ होता है: $\angle A + \angle B = 180^\circ$</td>
                  <td>वह कोण जो अपने संपूरक के बराबर है = $90^\circ$</td>
                </tr>
                <tr>
                  <td><strong>रैखिक युग्म (Linear Pair)</strong></td>
                  <td>ऐसे आसन्न कोण जिनकी अ-उभयनिष्ठ भुजाएँ विपरीत किरणें हों</td>
                  <td>योग सदैव $180^\circ$ होता है: $\angle 1 + \angle 2 = 180^\circ$</td>
                </tr>
                <tr>
                  <td><strong>शीर्षाभिमुख कोण (Vertically Opposite)</strong></td>
                  <td>दो प्रतिच्छेदी रेखाओं द्वारा बने आमने-सामने के कोण</td>
                  <td>शीर्षाभिमुख कोण <strong>सदैव समान</strong> होते हैं!</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Parallel Lines Intersected by a Transversal (तिर्यक रेखा एवं समांतर रेखाएँ)",
        headingHi: "2. समांतर रेखाओं को काटती तिर्यक रेखा के कोण नियम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ The 3 Visual Transversal Rules (F, Z, C Shapes)</div>
            <p>When two parallel lines $l \parallel m$ are cut by a transversal $t$:</p>
            <ul>
              <li><strong>1. Corresponding Angles ('F' Shape):</strong> Lie in matching positions at each intersection. They are <strong>EQUAL</strong>! ($\angle 1 = \angle 5$, $\angle 2 = \angle 6$).</li>
              <li><strong>2. Alternate Interior Angles ('Z' Shape):</strong> Lie on opposite sides of transversal inside parallel lines. They are <strong>EQUAL</strong>! ($\angle 3 = \angle 5$, $\angle 4 = \angle 6$).</li>
              <li><strong>3. Co-Interior Angles ('C' or 'U' Shape):</strong> Interior angles on the SAME side of transversal. They are <strong>SUPPLEMENTARY</strong> ($\text{Sum} = 180^\circ$):<br/>
                $$\mathbf{\angle 3 + \angle 6 = 180^\circ} \quad \text{and} \quad \mathbf{\angle 4 + \angle 5 = 180^\circ}$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ तिर्यक रेखा के 3 जादुई नियम (F, Z, C आकृतियाँ)</div>
            <p>जब दो समांतर रेखाओं $l \parallel m$ को एक तिर्यक रेखा $t$ काटती है:</p>
            <ul>
              <li><strong>1. संगत कोण (Corresponding Angles - 'F' आकृति):</strong> तिर्यक रेखा के एक ही तरफ संगत स्थानों पर होते हैं। ये <strong>समान</strong> होते हैं!</li>
              <li><strong>2. एकांतर अंतःकोण (Alternate Interior - 'Z' आकृति):</strong> दोनों समांतर रेखाओं के बीच विपरीत दिशा में होते हैं। ये <strong>समान</strong> होते हैं!</li>
              <li><strong>3. तिर्यक रेखा के एक ही ओर के अंतःकोण ('C' या 'U' आकृति):</strong> इनका योग सदैव <strong>$180^\circ$ (संपूरक)</strong> होता है:<br/>
                $$\mathbf{\angle 3 + \angle 6 = 180^\circ} \quad \text{एवं} \quad \mathbf{\angle 4 + \angle 5 = 180^\circ}$$
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the measure of an angle which is equal to its complement?",
        qHi: "उस कोण की माप क्या है जो अपने पूरक कोण के बराबर है?",
        options: ["30°", "45°", "60°", "90°"],
        optionsHi: ["30°", "45°", "60°", "90°"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "Let the angle be x. x + x = 90° => 2x = 90° => x = 45°.",
        explanationHi: "माना कोण x है। x + x = 90° => 2x = 90° => x = 45°।"
      },
      {
        id: 2,
        q: "What is the measure of an angle which is equal to its supplement?",
        qHi: "उस कोण की माप क्या है जो अपने संपूरक कोण के बराबर है?",
        options: ["45°", "90°", "180°", "60°"],
        optionsHi: ["45°", "90°", "180°", "60°"],
        ans: 1,
        pyqRef: "UPTET Paper 2 & State TET",
        explanation: "Let the angle be y. y + y = 180° => 2y = 180° => y = 90°.",
        explanationHi: "माना कोण y है। y + y = 180° => 2y = 180° => y = 90°।"
      },
      {
        id: 3,
        q: "Two complementary angles are in the ratio 4:5. What are the angles?",
        qHi: "दो पूरक कोणों में 4:5 का अनुपात है। वे कोण क्या हैं?",
        options: ["30° and 60°", "40° and 50°", "36° and 54°", "45° and 45°"],
        optionsHi: ["30° और 60°", "40° और 50°", "36° और 54°", "45° और 45°"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "4x + 5x = 90° => 9x = 90° => x = 10°. Angles = 4(10) = 40° and 5(10) = 50°.",
        explanationHi: "4x + 5x = 90° => 9x = 90° => x = 10°। कोण = 40° और 50°।"
      },
      {
        id: 4,
        q: "An angle is 24° more than its complement. What is its measure?",
        qHi: "एक कोण अपने पूरक कोण से 24° अधिक है। उस कोण का मान क्या है?",
        options: ["33°", "57°", "66°", "48°"],
        optionsHi: ["33°", "57°", "66°", "48°"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Let complement be x. Angle = x + 24°. x + (x + 24°) = 90° => 2x = 66° => x = 33°. Angle = 33° + 24° = 57°.",
        explanationHi: "माना पूरक x है। कोण = x + 24°। x + x + 24° = 90° => 2x = 66° => x = 33°। अभीष्ट कोण = 33° + 24° = 57°।"
      },
      {
        id: 5,
        q: "Two supplementary angles differ by 44°. What is the measure of the smaller angle?",
        qHi: "दो संपूरक कोणों में 44° का अंतर है। छोटे कोण की माप क्या है?",
        options: ["68°", "72°", "112°", "56°"],
        optionsHi: ["68°", "72°", "112°", "56°"],
        ans: 0,
        pyqRef: "State TET & Railway NTPC",
        explanation: "x + (x + 44°) = 180° => 2x = 136° => x = 68°.",
        explanationHi: "x + (x + 44°) = 180° => 2x = 136° => x = 68°।"
      },
      {
        id: 6,
        q: "Two lines intersect at point O. If one of the vertically opposite angles is 65°, what is the measure of the adjacent linear pair angle?",
        qHi: "दो रेखाएँ बिंदु O पर प्रतिच्छेद करती हैं। यदि एक शीर्षाभिमुख कोण 65° है, तो आसन्न रैखिक युग्म कोण का मान क्या होगा?",
        options: ["65°", "115°", "125°", "180°"],
        optionsHi: ["65°", "115°", "125°", "180°"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 5 & CTET",
        explanation: "Angles in a linear pair add up to 180°. Angle = 180° - 65° = 115°.",
        explanationHi: "रैखिक युग्म के कोणों का योग 180° होता है। कोण = 180° - 65° = 115°।"
      },
      {
        id: 7,
        q: "If two parallel lines are cut by a transversal, what is the sum of interior angles on the same side of the transversal?",
        qHi: "यदि दो समांतर रेखाओं को एक तिर्यक रेखा काटती है, तो तिर्यक रेखा के एक ही ओर के अंतःकोणों का योग क्या होता है?",
        options: ["90°", "180°", "270°", "360°"],
        optionsHi: ["90°", "180°", "270°", "360°"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy & BPSC 6-8",
        explanation: "Interior angles on the same side of the transversal are supplementary (sum = 180°).",
        explanationHi: "तिर्यक रेखा के एक ही ओर के अंतःकोण संपूरक होते हैं (योग = 180°)।"
      },
      {
        id: 8,
        q: "Two parallel lines l and m are cut by a transversal. If one interior alternate angle is 75°, what is the other alternate interior angle?",
        qHi: "दो समांतर रेखाओं l और m को एक तिर्यक रेखा काटती है। यदि एक एकांतर अंतःकोण 75° है, तो दूसरा एकांतर अंतःकोण क्या होगा?",
        options: ["75°", "105°", "180°", "15°"],
        optionsHi: ["75°", "105°", "180°", "15°"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "Alternate interior angles formed by parallel lines and a transversal are ALWAYS equal. Hence, it is 75°.",
        explanationHi: "समांतर रेखाओं के एकांतर अंतःकोण सदैव बराबर होते हैं। अतः यह भी 75° होगा।"
      },
      {
        id: 9,
        q: "If angle (2x + 10)° and (3x - 20)° form a linear pair, find the value of x.",
        qHi: "यदि कोण (2x + 10)° और (3x - 20)° एक रैखिक युग्म बनाते हैं, तो x का मान ज्ञात कीजिए।",
        options: ["36°", "38°", "40°", "42°"],
        optionsHi: ["36°", "38°", "40°", "42°"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CHSL",
        explanation: "(2x + 10) + (3x - 20) = 180 => 5x - 10 = 180 => 5x = 190 => x = 38.",
        explanationHi: "5x - 10 = 180 => 5x = 190 => x = 38।"
      },
      {
        id: 10,
        q: "Can two obtuse angles be supplementary?",
        qHi: "क्या दो अधिक कोण (Obtuse Angles) आपस में संपूरक हो सकते हैं?",
        options: ["Yes, always", "No, never", "Only when both are 95°", "Only when one is 100°"],
        optionsHi: ["हाँ, सदैव", "नहीं, कभी नहीं", "केवल जब दोनों 95° हों", "केवल जब एक 100° हो"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "An obtuse angle is > 90°. The sum of two angles each > 90° is always > 180°. Hence, they can NEVER be supplementary.",
        explanationHi: "अधिक कोण 90° से बड़ा होता है। दो 90° से बड़े कोणों का योग सदैव 180° से अधिक होगा, अतः वे कभी संपूरक नहीं हो सकते।"
      },
      {
        id: 11,
        q: "Can two acute angles be supplementary?",
        qHi: "क्या दो न्यून कोण (Acute Angles) संपूरक हो सकते हैं?",
        options: ["Yes", "No", "Sometimes", "Only in equilateral triangles"],
        optionsHi: ["हाँ", "नहीं", "कभी-कभी", "केवल समबाहु त्रिभुज में"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "An acute angle is < 90°. The sum of two acute angles is always < 180°, so they can never be supplementary.",
        explanationHi: "न्यून कोण 90° से छोटा होता है। दो न्यून कोणों का योग 180° से सदैव कम रहेगा, अतः वे कभी संपूरक नहीं हो सकते।"
      },
      {
        id: 12,
        q: "Can two right angles be supplementary?",
        qHi: "क्या दो समकोण (Right Angles) संपूरक हो सकते हैं?",
        options: ["Yes, always", "No", "Sometimes", "Only when lines are perpendicular"],
        optionsHi: ["हाँ, सदैव", "नहीं", "कभी-कभी", "केवल जब रेखाएँ लंबवत हों"],
        ans: 0,
        pyqRef: "State TET & BPSC TRE",
        explanation: "90° + 90° = 180°. Yes, two right angles are always supplementary.",
        explanationHi: "90° + 90° = 180°। हाँ, दो समकोण सदैव संपूरक होते हैं।"
      },
      {
        id: 13,
        q: "Find the measure of angle x if its supplement is three times its complement.",
        qHi: "उस कोण x की माप ज्ञात कीजिए जिसका संपूरक उसके पूरक का तीन गुना है।",
        options: ["30°", "45°", "60°", "75°"],
        optionsHi: ["30°", "45°", "60°", "75°"],
        ans: 1,
        pyqRef: "SSC CGL & BPSC TRE 6-8",
        explanation: "Supplement = 180° - x. Complement = 90° - x. 180 - x = 3(90 - x) => 180 - x = 270 - 3x => 2x = 90 => x = 45°.",
        explanationHi: "180 - x = 3(90 - x) => 180 - x = 270 - 3x => 2x = 90 => x = 45°।"
      },
      {
        id: 14,
        q: "In the figure of two parallel lines cut by a transversal, if corresponding angle 1 is 120°, what is co-interior angle 2 on the same side?",
        qHi: "तिर्यक रेखा द्वारा काटी गई दो समांतर रेखाओं में, यदि संगत कोण 120° है, तो उसी तरफ का सह-अंतःकोण (Co-interior angle) क्या होगा?",
        options: ["60°", "120°", "90°", "180°"],
        optionsHi: ["60°", "120°", "90°", "180°"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "The alternate interior to the corresponding angle forms a linear pair, so co-interior angle = 180° - 120° = 60°.",
        explanationHi: "सह-अंतःकोण संपूरक होते हैं: 180° - 120° = 60°।"
      },
      {
        id: 15,
        q: "What is the complement of 65°?",
        qHi: "65° का पूरक कोण क्या होगा?",
        options: ["25°", "35°", "115°", "125°"],
        optionsHi: ["25°", "35°", "115°", "125°"],
        ans: 0,
        pyqRef: "Railway Group D",
        explanation: "Complement = 90° - 65° = 25°.",
        explanationHi: "पूरक = 90° - 65° = 25°।"
      },
      {
        id: 16,
        q: "What is the supplement of 105°?",
        qHi: "105° का संपूरक कोण क्या होगा?",
        options: ["65°", "75°", "85°", "95°"],
        optionsHi: ["65°", "75°", "85°", "95°"],
        ans: 1,
        pyqRef: "State TET & CTET",
        explanation: "Supplement = 180° - 105° = 75°.",
        explanationHi: "संपूरक = 180° - 105° = 75°।"
      },
      {
        id: 17,
        q: "If two adjacent angles form a linear pair, what is their sum?",
        qHi: "यदि दो आसन्न कोण एक रैखिक युग्म बनाते हैं, तो उनका योग क्या होता है?",
        options: ["90°", "180°", "270°", "360°"],
        optionsHi: ["90°", "180°", "270°", "360°"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "A linear pair of angles always adds up to 180°.",
        explanationHi: "रैखिक युग्म के कोणों का योग सदैव 180° होता है।"
      },
      {
        id: 18,
        q: "If line l is parallel to line m and line m is parallel to line n, what is the relation between l and n?",
        qHi: "यदि रेखा l रेखा m के समांतर है और रेखा m रेखा n के समांतर है, तो रेखा l और n में क्या संबंध है?",
        options: ["l is perpendicular to n", "l is parallel to n", "l intersects n", "None"],
        optionsHi: ["l रेखा n के लंबवत है", "l रेखा n के समांतर है", "l रेखा n को प्रतिच्छेद करती है", "कोई नहीं"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "Lines parallel to the same line are parallel to each other (l || n).",
        explanationHi: "एक ही रेखा के समांतर खींची गई रेखाएँ आपस में भी समांतर होती हैं (l || n)।"
      },
      {
        id: 19,
        q: "In two intersecting lines, if vertically opposite angle A is 40°, what are the measures of the other three angles?",
        qHi: "दो प्रतिच्छेदी रेखाओं में, यदि शीर्षाभिमुख कोण A = 40° है, तो अन्य तीन कोणों के मान क्या होंगे?",
        options: ["40°, 140°, 140°", "40°, 40°, 140°", "140°, 140°, 140°", "50°, 50°, 130°"],
        optionsHi: ["40°, 140°, 140°", "40°, 40°, 140°", "140°, 140°, 140°", "50°, 50°, 130°"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 5 & State TET",
        explanation: "Vertically opposite angle = 40°. The two adjacent linear pair angles are 180° - 40° = 140° each.",
        explanationHi: "सामने का शीर्षाभिमुख कोण = 40°। दोनों आसन्न कोण = 180° - 40° = 140° और 140°।"
      },
      {
        id: 20,
        q: "If two parallel lines are intersected by a transversal, each pair of alternate exterior angles is:",
        qHi: "यदि दो समांतर रेखाओं को एक तिर्यक रेखा काटती है, तो एकांतर बाह्य कोणों का प्रत्येक युग्म होता है:",
        options: ["Complementary", "Supplementary", "Equal", "Unequal"],
        optionsHi: ["पूरक", "संपूरक", "बराबर", "असमान"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Alternate exterior angles formed by parallel lines and a transversal are equal.",
        explanationHi: "समांतर रेखाओं पर एकांतर बाह्य कोण सदैव बराबर होते हैं।"
      },
      {
        id: 21,
        q: "What is the angle between the hands of a clock at 3 o'clock?",
        qHi: "घड़ी में 3 बजे दोनों सुइयों के बीच कितने अंश का कोण बनता है?",
        options: ["45°", "60°", "90°", "120°"],
        optionsHi: ["45°", "60°", "90°", "120°"],
        ans: 2,
        pyqRef: "Railway NTPC & SSC MTS",
        explanation: "At 3 o'clock, the minute hand is at 12 and hour hand is at 3. Angle = 3 * 30° = 90° (Right angle).",
        explanationHi: "3 बजे मिनट की सुई 12 पर और घंटे की सुई 3 पर होती है। कोण = 3 * 30° = 90°।"
      },
      {
        id: 22,
        q: "If the ratio of an angle to its complement is 2:3, what is the angle?",
        qHi: "यदि किसी कोण और उसके पूरक कोण का अनुपात 2:3 है, तो वह कोण क्या है?",
        options: ["36°", "54°", "45°", "30°"],
        optionsHi: ["36°", "54°", "45°", "30°"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "2x + 3x = 90° => 5x = 90° => x = 18°. Angle = 2(18°) = 36°.",
        explanationHi: "2x + 3x = 90° => 5x = 90° => x = 18°। कोण = 2 * 18° = 36°।"
      },
      {
        id: 23,
        q: "If an angle is five times its supplement, what is the measure of the angle?",
        qHi: "यदि कोई कोण अपने संपूरक कोण का 5 गुना है, तो उस कोण की माप क्या है?",
        options: ["120°", "140°", "150°", "160°"],
        optionsHi: ["120°", "140°", "150°", "160°"],
        ans: 2,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "x = 5(180° - x) => x = 900° - 5x => 6x = 900° => x = 150°.",
        explanationHi: "x = 5(180° - x) => 6x = 900° => x = 150°।"
      },
      {
        id: 24,
        q: "What is the angle between the two bisectors of a linear pair of angles?",
        qHi: "एक रैखिक युग्म के दोनों कोणों के समद्विभाजकों के बीच का कोण कितना होता है?",
        options: ["45°", "60°", "90°", "180°"],
        optionsHi: ["45°", "60°", "90°", "180°"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Let the linear pair be 2a and 2b. 2a + 2b = 180° => a + b = 90°. Angle between bisectors is a + b = 90° (Right angle).",
        explanationHi: "रैखिक युग्म = 2a + 2b = 180° => a + b = 90°। समद्विभाजकों के बीच का कोण = 90°।"
      },
      {
        id: 25,
        q: "If two parallel lines are intersected by a transversal, then corresponding angles lie on the '___' shape:",
        qHi: "यदि दो समांतर रेखाओं को एक तिर्यक रेखा काटती है, तो संगत कोण किस अंग्रेजी अक्षर की आकृति बनाते हैं?",
        options: ["Z shape", "F shape", "C shape", "X shape"],
        optionsHi: ["Z आकृति", "F आकृति", "C आकृति", "X आकृति"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Corresponding angles lie in the 'F' shape configuration.",
        explanationHi: "संगत कोण अंग्रेजी के 'F' आकार की बनावट में होते हैं।"
      },
      {
        id: 26,
        q: "Alternate interior angles lie on the '___' shape:",
        qHi: "एकांतर अंतःकोण किस अंग्रेजी अक्षर की आकृति बनाते हैं?",
        options: ["Z shape", "F shape", "C shape", "U shape"],
        optionsHi: ["Z आकृति", "F आकृति", "C आकृति", "U आकृति"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Alternate interior angles lie on the 'Z' shape configuration.",
        explanationHi: "एकांतर अंतःकोण अंग्रेजी के 'Z' आकार में स्थित होते हैं।"
      },
      {
        id: 27,
        q: "An angle is 1/3 of its supplement. What is the angle?",
        qHi: "एक कोण अपने संपूरक कोण का 1/3 है। वह कोण क्या है?",
        options: ["30°", "45°", "60°", "90°"],
        optionsHi: ["30°", "45°", "60°", "90°"],
        ans: 1,
        pyqRef: "Railway NTPC & State TET",
        explanation: "x = (180° - x) / 3 => 3x = 180° - x => 4x = 180° => x = 45°.",
        explanationHi: "3x = 180° - x => 4x = 180° => x = 45°।"
      },
      {
        id: 28,
        q: "If an angle is 10° less than twice its complement, what is the angle?",
        qHi: "यदि कोई कोण अपने पूरक कोण के दोगुने से 10° कम है, तो उस कोण का मान क्या है?",
        options: ["50°", "56.6°", "60°", "40°"],
        optionsHi: ["50°", "56.6°", "60°", "40°"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "x = 2(90° - x) - 10° => x = 180° - 2x - 10° => 3x = 170° => x = 170/3 = 56.67°.",
        explanationHi: "x = 2(90 - x) - 10 => 3x = 170 => x = 56.67°।"
      },
      {
        id: 29,
        q: "If line AB is perpendicular to line CD, what is the measure of the angle between them?",
        qHi: "यदि रेखा AB रेखा CD पर लंबवत (Perpendicular) है, तो उनके बीच का कोण क्या होगा?",
        options: ["0°", "45°", "90°", "180°"],
        optionsHi: ["0°", "45°", "90°", "180°"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Perpendicular lines intersect at right angles (90°).",
        explanationHi: "लंबवत रेखाओं के बीच का कोण सदैव 90° (समकोण) होता है।"
      },
      {
        id: 30,
        q: "Can two adjacent angles both be obtuse?",
        qHi: "क्या दो आसन्न कोण दोनों ही अधिक कोण हो सकते हैं?",
        options: ["Yes", "No, never in a straight line", "Yes, if they don't form a linear pair", "Only when sum is 360°"],
        optionsHi: ["हाँ", "नहीं, सीधी रेखा में कभी नहीं", "हाँ, यदि वे रैखिक युग्म न बना रहे हों", "केवल जब योग 360° हो"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Two adjacent angles can both be obtuse as long as they do not form a linear pair (their sum would exceed 180°).",
        explanationHi: "हाँ, दो आसन्न कोण अधिक कोण हो सकते हैं यदि वे सीधी रेखा (रैखिक युग्म) पर न हों।"
      }
    ]
  }
];
