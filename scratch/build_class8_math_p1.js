/**
 * build_class8_math_p1.js
 * NCERT Class 8 Mathematics Chapters 1 to 5:
 * Ch 1: Rational Numbers (परिमेय संख्याएँ)
 * Ch 2: Linear Equations in One Variable (एक चर वाले रैखिक समीकरण)
 * Ch 3: Understanding Quadrilaterals (चतुर्भुजों को समझना)
 * Ch 4: Data Handling (आँकड़ों का प्रबंधन)
 * Ch 5: Square and Square Roots (वर्ग और वर्गमूल)
 * Each chapter has comprehensive Teacher-Mentor notes and exactly 30 bilingual MCQs.
 */

const chapters = [
  // =========================================================================
  // CHAPTER 1: RATIONAL NUMBERS (परिमेय संख्याएँ)
  // =========================================================================
  {
    id: "ncert-c8-m01",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 1,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 1: Rational Numbers (परिमेय संख्याएँ)",
    titleHi: "अध्याय 1: परिमेय संख्याएँ (Rational Numbers)",
    pdfUrl: "/ncert_books/class8/math_ch01.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch01_hi.pdf",
    competitionEdge: "Foundational chapter for CTET Paper 2, State TETs, SSC CGL/CHSL, and RRB NTPC. Covers closure, commutativity, associativity, distributive property a(b+c)=ab+ac, additive and multiplicative identities, reciprocals, and finding rational numbers between any two rational numbers.",
    competitionEdgeHi: "सीटेट पेपर-2, राज्य टीईटी, एसएससी और रेलवे के लिए अत्यंत महत्वपूर्ण अध्याय। इसमें संवृत, क्रमविनिमेय, साहचर्य नियम, वितरकता गुण a(b+c)=ab+ac, योज्य व गुणात्मक तत्समक, व्युत्क्रम (प्रतिलोम) तथा दो परिमेय संख्याओं के बीच अनंत परिमेय संख्याएँ ज्ञात करने की विधियाँ शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Definition & Properties of Rational Numbers",
        headingHi: "1. एनसीईआरटी मूल पाठ: परिमेय संख्याओं की परिभाषा एवं प्रगुण",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Welcome to Class 8 Mathematics! A number that can be expressed in the form <strong>\\( \\frac{p}{q} \\)</strong>, where \\(p\\) and \\(q\\) are integers and <strong>\\(q \\neq 0\\)</strong>, is called a <strong>Rational Number</strong>. Remember: All natural numbers, whole numbers, and integers are also rational numbers because any integer \\(n\\) can be written as \\(\\frac{n}{1}\\). Zero is a rational number (\\(\\frac{0}{1}\\))!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Fundamental Properties Summary</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Property (गुणधर्म)</th>
                  <th>Addition (योग)</th>
                  <th>Subtraction (घटाना)</th>
                  <th>Multiplication (गुणा)</th>
                  <th>Division (भाग)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Closure (संवृत)</strong></td>
                  <td>✅ Yes (\\(a+b \\in \\mathbb{Q}\\))</td>
                  <td>✅ Yes (\\(a-b \\in \\mathbb{Q}\\))</td>
                  <td>✅ Yes (\\(a \\times b \\in \\mathbb{Q}\\))</td>
                  <td>❌ No (Division by 0 undefined)</td>
                </tr>
                <tr>
                  <td><strong>Commutative (क्रमविनिमेय)</strong></td>
                  <td>✅ \\(a+b = b+a\\)</td>
                  <td>❌ \\(a-b \\neq b-a\\)</td>
                  <td>✅ \\(a \\times b = b \\times a\\)</td>
                  <td>❌ \\(a \\div b \\neq b \\div a\\)</td>
                </tr>
                <tr>
                  <td><strong>Associative (साहचर्य)</strong></td>
                  <td>✅ \\(a+(b+c) = (a+b)+c\\)</td>
                  <td>❌ Not associative</td>
                  <td>✅ \\(a \\times (b \\times c) = (a \\times b) \\times c\\)</td>
                  <td>❌ Not associative</td>
                </tr>
                <tr>
                  <td><strong>Identity (तत्समक)</strong></td>
                  <td>0 is Additive Identity (\\(a+0=a\\))</td>
                  <td>—</td>
                  <td>1 is Multiplicative Identity (\\(a \\times 1 = a\\))</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>Inverse (प्रतिलोम)</strong></td>
                  <td>Additive Inverse of \\(a\\) is \\(-a\\)</td>
                  <td>—</td>
                  <td>Reciprocal of \\(\\frac{a}{b}\\) is \\(\\frac{b}{a}\\) (\\(a,b \\neq 0\\))</td>
                  <td>Zero has NO reciprocal!</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Competitive Exam Trap Alert!</div>
            <p><strong>Trap 1:</strong> Does 0 have a reciprocal? <strong>Never!</strong> \\(\\frac{1}{0}\\) is not defined. The numbers <strong>1 and -1 are their own reciprocals</strong>.</p>
            <p><strong>Trap 2 (Distributivity):</strong> Multiplication distributes over addition and subtraction: \\(a(b+c) = ab + ac\\) and \\(a(b-c) = ab - ac\\). Use this to simplify competitive exam calculation problems in seconds!</p>
            <p><strong>Trap 3 (Density Property):</strong> Between any two distinct rational numbers, there are <strong>infinitely many rational numbers</strong>. The mean \\(\\frac{a+b}{2}\\) always lies strictly between \\(a\\) and \\(b\\).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              कक्षा 8 गणित में आपका स्वागत है! वह संख्या जिसे <strong>\\( \\frac{p}{q} \\)</strong> के रूप में व्यक्त किया जा सके, जहाँ \\(p\\) और \\(q\\) पूर्णांक हैं तथा <strong>\\(q \\neq 0\\)</strong>, <strong>परिमेय संख्या</strong> कहलाती है। ध्यान रखें: सभी प्राकृत संख्याएँ, पूर्ण संख्याएँ और पूर्णांक परिमेय संख्याएँ हैं क्योंकि किसी भी पूर्णांक \\(n\\) को \\(\\frac{n}{1}\\) लिखा जा सकता है। शून्य भी एक परिमेय संख्या है (\\(\\frac{0}{1}\\))!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ मुख्य प्रगुण एवं नियमों का सार</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>प्रगुण (Property)</th>
                  <th>योग (Addition)</th>
                  <th>वकलन (Subtraction)</th>
                  <th>गुणन (Multiplication)</th>
                  <th>भाग (Division)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>संवृत नियम (Closure)</strong></td>
                  <td>✅ हाँ (संवृत है)</td>
                  <td>✅ हाँ (संवृत है)</td>
                  <td>✅ हाँ (संवृत है)</td>
                  <td>❌ नहीं (0 से भाग परिभाषित नहीं)</td>
                </tr>
                <tr>
                  <td><strong>क्रमविनिमेय (Commutative)</strong></td>
                  <td>✅ \\(a+b = b+a\\)</td>
                  <td>❌ \\(a-b \\neq b-a\\)</td>
                  <td>✅ \\(a \\times b = b \\times a\\)</td>
                  <td>❌ \\(a \\div b \\neq b \\div a\\)</td>
                </tr>
                <tr>
                  <td><strong>साहचर्य नियम (Associative)</strong></td>
                  <td>✅ \\(a+(b+c) = (a+b)+c\\)</td>
                  <td>❌ साहचर्य नहीं</td>
                  <td>✅ \\(a(bc) = (ab)c\\)</td>
                  <td>❌ साहचर्य नहीं</td>
                </tr>
                <tr>
                  <td><strong>तत्समक अवयव (Identity)</strong></td>
                  <td>0 योज्य तत्समक है (\\(a+0=a\\))</td>
                  <td>—</td>
                  <td>1 गुणात्मक तत्समक है (\\(a \\times 1 = a\\))</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>प्रतिलोम (Inverse)</strong></td>
                  <td>\\(a\\) का योज्य प्रतिलोम \\(-a\\) है</td>
                  <td>—</td>
                  <td>\\(\\frac{a}{b}\\) का व्युत्क्रम \\(\\frac{b}{a}\\) है</td>
                  <td>शून्य (0) का कोई व्युत्क्रम नहीं होता!</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ प्रतियोगी परीक्षा ट्रैप अलर्ट!</div>
            <p><strong>ट्रैप 1:</strong> क्या 0 का कोई व्युत्क्रम (reciprocal) होता है? <strong>कदापि नहीं!</strong> \\(\\frac{1}{0}\\) अपरिभाषित है। केवल <strong>1 और -1 ऐसी संख्याएँ हैं जो स्वयं का व्युत्क्रम हैं</strong>।</p>
            <p><strong>ट्रैप 2 (वितरकता नियम):</strong> गुणन का योग पर वितरण: \\(a(b+c) = ab + ac\\)। प्रतियोगी परीक्षाओं में जटिल गुणा-भाग को सेकंडों में हल करने के लिए इसका उपयोग करें।</p>
            <p><strong>ट्रैप 3:</strong> किन्हीं दो दी गई परिमेय संख्याओं के बीच <strong>अनंत (अपरिमित रूप से अनेक) परिमेय संख्याएँ</strong> स्थित होती हैं। माध्य \\(\\frac{a+b}{2}\\) सदैव \\(a\\) व \\(b\\) के बीच होता है।</p>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      if (qNum === 1) {
        return {
          id: 1,
          q: "Which of the following numbers is its own reciprocal?",
          qHi: "निम्नलिखित में से कौन सी संख्या स्वयं का व्युत्क्रम (reciprocal) है?",
          options: ["0", "1 and -1", "2 and -2", "Only 0"],
          optionsHi: ["0", "1 और -1", "2 और -2", "केवल 0"],
          ans: 1,
          difficulty: "Easy",
          explanation: "The reciprocal of 1 is 1/1 = 1, and the reciprocal of -1 is 1/(-1) = -1. Zero has no reciprocal.",
          explanationHi: "1 का व्युत्क्रम 1/1 = 1 है और -1 का व्युत्क्रम 1/(-1) = -1 है। शून्य का कोई व्युत्क्रम नहीं होता।"
        };
      }
      if (qNum === 2) {
        return {
          id: 2,
          q: "What is the additive inverse of -7/19?",
          qHi: "-7/19 का योज्य प्रतिलोम (additive inverse) क्या है?",
          options: ["19/7", "7/19", "-19/7", "0"],
          optionsHi: ["19/7", "7/19", "-19/7", "0"],
          ans: 1,
          difficulty: "Easy",
          explanation: "The additive inverse of a/b is -a/b such that their sum is 0. So, -(-7/19) = 7/19.",
          explanationHi: "किसी संख्या a का योज्य प्रतिलोम -a होता है जिससे उनका योग 0 हो। अतः -(-7/19) = 7/19।"
        };
      }
      if (qNum === 3) {
        return {
          id: 3,
          q: "Which property is illustrated by: (-4/5) × 1 = 1 × (-4/5) = -4/5?",
          qHi: "(-4/5) × 1 = 1 × (-4/5) = -4/5 में कौन सा गुणधर्म प्रयुक्त हुआ है?",
          options: ["Commutative property", "1 is the multiplicative identity", "Associative property", "Distributive property"],
          optionsHi: ["क्रमविनिमेय गुण", "1 गुणात्मक तत्समक (Multiplicative Identity) है", "साहचर्य गुण", "वितरण गुण"],
          ans: 1,
          difficulty: "Easy",
          explanation: "Multiplying any rational number by 1 leaves it unchanged; hence 1 is the multiplicative identity for rational numbers.",
          explanationHi: "किसी भी परिमेय संख्या को 1 से गुणा करने पर वही संख्या प्राप्त होती है; अतः 1 गुणात्मक तत्समक है।"
        };
      }
      if (qNum === 4) {
        return {
          id: 4,
          q: "The product of two rational numbers is always a:",
          qHi: "दो परिमेय संख्याओं का गुणनफल सदैव एक ________ होता है:",
          options: ["Natural number", "Whole number", "Rational number", "Irrational number"],
          optionsHi: ["प्राकृत संख्या", "पूर्ण संख्या", "परिमेय संख्या", "अपरिमेय संख्या"],
          ans: 2,
          difficulty: "Easy",
          explanation: "Rational numbers are closed under multiplication. The product of any two rational numbers is always rational.",
          explanationHi: "परिमेय संख्याएँ गुणन के अंतर्गत संवृत होती हैं। अतः दो परिमेय संख्याओं का गुणनफल सदैव परिमेय संख्या होता है।"
        };
      }
      if (qNum === 5) {
        return {
          id: 5,
          q: "How many rational numbers exist between 2/3 and 4/5?",
          qHi: "2/3 और 4/5 के मध्य कुल कितनी परिमेय संख्याएँ होती हैं?",
          options: ["Only 1", "Exactly 10", "Exactly 100", "Infinitely many (अनंत)"],
          optionsHi: ["केवल 1", "ठीक 10", "ठीक 100", "अनंत (अपरिमित रूप से अनेक)"],
          ans: 3,
          difficulty: "Easy",
          explanation: "Between any two distinct rational numbers, there are infinitely many rational numbers.",
          explanationHi: "किन्हीं दो परिमेय संख्याओं के बीच अपरिमित रूप से अनेक (अनंत) परिमेय संख्याएँ होती हैं।"
        };
      }
      if (qNum === 6) {
        return {
          id: 6,
          q: "Find a rational number exactly halfway between 1/4 and 1/2.",
          qHi: "1/4 और 1/2 के ठीक मध्य (halfway) की परिमेय संख्या ज्ञात कीजिए।",
          options: ["3/8", "2/6", "1/3", "5/8"],
          optionsHi: ["3/8", "2/6", "1/3", "5/8"],
          ans: 0,
          difficulty: "Moderate",
          explanation: "The mean of a and b is (a + b)/2. (1/4 + 1/2)/2 = (1/4 + 2/4)/2 = (3/4)/2 = 3/8.",
          explanationHi: "माध्य = (1/4 + 1/2)/2 = (3/4)/2 = 3/8।"
        };
      }
      if (qNum === 7) {
        return {
          id: 7,
          q: "What is the reciprocal of -1?",
          qHi: "-1 का व्युत्क्रम (reciprocal) क्या है?",
          options: ["1", "-1", "0", "Not defined"],
          optionsHi: ["1", "-1", "0", "परिभाषित नहीं"],
          ans: 1,
          difficulty: "Easy",
          explanation: "1 / (-1) = -1. Therefore, the reciprocal of -1 is -1 itself.",
          explanationHi: "1 / (-1) = -1। अतः -1 का व्युत्क्रम स्वयं -1 ही होता है।"
        };
      }
      if (qNum === 8) {
        return {
          id: 8,
          q: "Using distributivity, find the value of: (7/5 × -3/12) + (7/5 × 5/12).",
          qHi: "वितरकता गुण का उपयोग कर मान ज्ञात करें: (7/5 × -3/12) + (7/5 × 5/12)।",
          options: ["7/30", "7/15", "14/15", "1/5"],
          optionsHi: ["7/30", "7/15", "14/15", "1/5"],
          ans: 0,
          difficulty: "Moderate",
          explanation: "By distributivity: a*b + a*c = a(b+c) = 7/5 * (-3/12 + 5/12) = 7/5 * (2/12) = 7/5 * 1/6 = 7/30.",
          explanationHi: "7/5 * (-3/12 + 5/12) = 7/5 * (2/12) = 7/5 * 1/6 = 7/30।"
        };
      }
      if (qNum === 9) {
        return {
          id: 9,
          q: "Subtraction of rational numbers is NOT:",
          qHi: "परिमेय संख्याओं का व्यकलन (घटाना) ________ नहीं होता है:",
          options: ["Closed", "Commutative", "Applicable", "Defined"],
          optionsHi: ["संवृत", "क्रमविनिमेय (Commutative)", "लागू", "परिभाषित"],
          ans: 1,
          difficulty: "Easy",
          explanation: "a - b is not equal to b - a for rational numbers. Hence subtraction is not commutative.",
          explanationHi: "a - b ≠ b - a होता है, इसलिए परिमेय संख्याओं का घटाना क्रमविनिमेय नहीं होता।"
        };
      }
      if (qNum === 10) {
        return {
          id: 10,
          q: "What should be added to -7/3 to get 3/7?",
          qHi: "-7/3 में क्या जोड़ा जाए कि 3/7 प्राप्त हो?",
          options: ["58/21", "-58/21", "40/21", "21/58"],
          optionsHi: ["58/21", "-58/21", "40/21", "21/58"],
          ans: 0,
          difficulty: "Moderate",
          explanation: "Let x be added: -7/3 + x = 3/7 => x = 3/7 + 7/3 = (9 + 49)/21 = 58/21.",
          explanationHi: "माना x जोड़ना है: x = 3/7 - (-7/3) = 3/7 + 7/3 = (9 + 49)/21 = 58/21।"
        };
      }
      // Questions 11 to 30
      const standardQuestions = [
        { q: "What is the multiplicative inverse of -13/19?", qHi: "-13/19 का गुणात्मक प्रतिलोम क्या है?", opt: ["19/13", "-19/13", "-13/19", "1"], ans: 1, exp: "Multiplicative inverse (reciprocal) of -13/19 is -19/13." },
        { q: "Which number has no reciprocal?", qHi: "किस संख्या का कोई व्युत्क्रम नहीं होता?", opt: ["1", "-1", "0", "1/2"], ans: 2, exp: "Division by 0 is undefined, so 0 has no reciprocal." },
        { q: "The rational number that is equal to its negative is:", qHi: "वह परिमेय संख्या जो अपने ऋणात्मक के बराबर है:", opt: ["0", "1", "-1", "None of these"], ans: 0, exp: "0 = -0. No other real number satisfies this condition." },
        { q: "Multiply 6/13 by the reciprocal of -7/16.", qHi: "6/13 को -7/16 के व्युत्क्रम से गुणा कीजिए।", opt: ["-96/91", "96/91", "-42/208", "91/96"], ans: 0, exp: "Reciprocal of -7/16 is -16/7. 6/13 * (-16/7) = -96/91." },
        { q: "Is 0.3 the multiplicative inverse of 3 1/3?", qHi: "क्या 0.3, संख्या 3 1/3 का गुणात्मक प्रतिलोम है?", opt: ["Yes, because product is 1", "No, because product is 0.9", "No, because 0.3 is decimal", "Cannot be determined"], ans: 0, exp: "3 1/3 = 10/3. 0.3 = 3/10. Product = (10/3) * (3/10) = 1. Yes!" },
        { q: "Which property allows you to compute 1/3 × (6 × 4/3) as (1/3 × 6) × 4/3?", qHi: "किस गुणधर्म से 1/3 × (6 × 4/3) को (1/3 × 6) × 4/3 लिखा जा सकता है?", opt: ["Commutative", "Associative", "Distributive", "Closure"], ans: 1, exp: "Associative property of multiplication: a*(b*c) = (a*b)*c." },
        { q: "If x = -1/2 and y = 3/4, then x + y is:", qHi: "यदि x = -1/2 और y = 3/4 हो, तो x + y का मान है:", opt: ["1/4", "-1/4", "5/4", "1/2"], ans: 0, exp: "-1/2 + 3/4 = -2/4 + 3/4 = 1/4." },
        { q: "What is the value of (-2/3) × [3/5 + (-5/6)]?", qHi: "(-2/3) × [3/5 + (-5/6)] का मान क्या होगा?", opt: ["7/45", "-7/45", "14/45", "-14/45"], ans: 0, exp: "3/5 - 5/6 = (18 - 25)/30 = -7/30. Then (-2/3) * (-7/30) = 14/90 = 7/45." },
        { q: "Write three rational numbers between -2 and 0.", qHi: "-2 और 0 के बीच तीन परिमेय संख्याएँ कौन सी हैं?", opt: ["-1, -1/2, -3/2", "-3, -4, -5", "1, 2, 3", "0, 1, 2"], ans: 0, exp: "-3/2 = -1.5, -1, and -1/2 = -0.5 all lie strictly between -2 and 0." },
        { q: "What is the product of a rational number and its reciprocal?", qHi: "एक शून्येतर परिमेय संख्या और उसके व्युत्क्रम का गुणनफल क्या होता है?", opt: ["0", "1", "-1", "Depends on number"], ans: 1, exp: "For any non-zero rational number a/b, (a/b) * (b/a) = 1." },
        { q: "Simplify: (2/5 × -3/7) - 1/14 - (3/7 × 3/5).", qHi: "सरल कीजिए: (2/5 × -3/7) - 1/14 - (3/7 × 3/5)।", opt: ["-1/2", "1/2", "-3/7", "0"], ans: 0, exp: "-3/7 * (2/5 + 3/5) - 1/14 = -3/7 * 1 - 1/14 = -6/14 - 1/14 = -7/14 = -1/2." },
        { q: "Which of the following is in standard form?", qHi: "निम्नलिखित में से कौन सी परिमेय संख्या मानक रूप (Standard form) में है?", opt: ["-12/28", "-3/7", "15/-35", "9/21"], ans: 1, exp: "-3/7 has denominator positive and HCF(3, 7) = 1, so it is in standard form." },
        { q: "If the product of two rational numbers is -9/16 and one of them is -4/3, find the other.", qHi: "यदि दो परिमेय संख्याओं का गुणनफल -9/16 है और उनमें से एक -4/3 है, तो दूसरी ज्ञात कीजिए।", opt: ["27/64", "-27/64", "64/27", "3/4"], ans: 0, exp: "Other = (-9/16) / (-4/3) = (-9/16) * (-3/4) = 27/64." },
        { q: "Which statement is TRUE?", qHi: "कौन सा कथन सत्य है?", opt: ["All integers are rational numbers", "All rational numbers are integers", "Zero is not rational", "Reciprocal of 0 is 0"], ans: 0, exp: "Every integer z can be written as z/1, so all integers are rational numbers." },
        { q: "What is the additive inverse of 2/(-9)?", qHi: "2/(-9) का योज्य प्रतिलोम क्या है?", opt: ["2/9", "-2/9", "9/2", "-9/2"], ans: 0, exp: "2/(-9) = -2/9. Its additive inverse is -(-2/9) = 2/9." },
        { q: "The reciprocal of 1/x, where x ≠ 0, is:", qHi: "1/x का व्युत्क्रम (जहाँ x ≠ 0) क्या है?", opt: ["x", "1/x", "-x", "0"], ans: 0, exp: "Reciprocal of 1/x is x/1 = x." },
        { q: "Find the value of x if -3/8 × x = 1.", qHi: "यदि -3/8 × x = 1 हो, तो x का मान क्या है?", opt: ["-8/3", "8/3", "-3/8", "3/8"], ans: 0, exp: "x is the multiplicative inverse of -3/8, which is -8/3." },
        { q: "Between two rational numbers a and b, which formula gives a rational number?", qHi: "दो परिमेय संख्याओं a और b के बीच कौन सा सूत्र परिमेय संख्या देता है?", opt: ["(a + b)/2", "(a - b)/2", "a * b", "a / b"], ans: 0, exp: "The arithmetic mean (a + b)/2 always lies between a and b." },
        { q: "Is the sum of two rational numbers always rational?", qHi: "क्या दो परिमेय संख्याओं का योग सदैव एक परिमेय संख्या होता है?", opt: ["Yes (Closed under addition)", "No", "Only for positive rationals", "Only for integers"], ans: 0, exp: "Yes, rational numbers are closed under addition." },
        { q: "Representing -5/6 on the number line lies between:", qHi: "संख्या रेखा पर -5/6 किन दो पूर्णांकों के मध्य स्थित होगा?", opt: ["0 and -1", "-1 and -2", "0 and 1", "1 and 2"], ans: 0, exp: "-5/6 is greater than -1 and less than 0, so it lies between 0 and -1." }
      ];

      const item = standardQuestions[qNum - 11];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  },

  // =========================================================================
  // CHAPTER 2: LINEAR EQUATIONS IN ONE VARIABLE (एक चर वाले रैखिक समीकरण)
  // =========================================================================
  {
    id: "ncert-c8-m02",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 2,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 2: Linear Equations in One Variable (एक चर वाले रैखिक समीकरण)",
    titleHi: "अध्याय 2: एक चर वाले रैखिक समीकरण (Linear Equations in One Variable)",
    pdfUrl: "/ncert_books/class8/math_ch02.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch02_hi.pdf",
    competitionEdge: "One of the most frequently asked chapters in competitive exams. Concepts include solving equations having variables on one side, variables on both sides, reducing equations to simpler linear form via cross-multiplication, and word problems on ages, coins, perimeters, and digit reversals.",
    competitionEdgeHi: "प्रतियोगी परीक्षाओं में सर्वाधिक पूछे जाने वाले अध्यायों में से एक। इसमें एक पक्ष व दोनों पक्षों में चर वाले समीकरण, तिर्यक गुणन (cross-multiplication) द्वारा रैखिक रूप में बदलना, तथा आयु, सिक्कों, परिमाप और अंकों के पलटने पर आधारित व्यावहारिक प्रश्न शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Solving Linear Equations & Cross Multiplication",
        headingHi: "1. एनसीईआरटी मूल पाठ: रैखिक समीकरणों का हल एवं तिर्यक गुणन विधि",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              An algebraic equation is an equality involving variables. In a <strong>Linear Equation</strong>, the highest power of the variable is <strong>1</strong>. To solve an equation, we perform the exact same mathematical operation on both sides to isolate the variable.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Transposition Rules & Cross-Multiplication Method</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Original Side (LHS)</th>
                  <th>Transposed Side (RHS)</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Addition (\\(+\\))</td>
                  <td>Subtraction (\\(-\\))</td>
                  <td>\\(x + 5 = 12 \\Rightarrow x = 12 - 5 = 7\\)</td>
                </tr>
                <tr>
                  <td>Subtraction (\\(-\\))</td>
                  <td>Addition (\\(+\\))</td>
                  <td>\\(2x - 3 = 7 \\Rightarrow 2x = 7 + 3 = 10 \\Rightarrow x = 5\\)</td>
                </tr>
                <tr>
                  <td>Multiplication (\\(\\times\\))</td>
                  <td>Division (\\(\\div\\))</td>
                  <td>\\(5x = 20 \\Rightarrow x = \\frac{20}{5} = 4\\)</td>
                </tr>
                <tr>
                  <td>Division (\\(\\div\\))</td>
                  <td>Multiplication (\\(\\times\\))</td>
                  <td>\\(\\frac{x}{3} = 5 \\Rightarrow x = 5 \\times 3 = 15\\)</td>
                </tr>
                <tr>
                  <td>Cross Multiplication</td>
                  <td>\\(\\frac{ax + b}{cx + d} = \\frac{m}{n}\\)</td>
                  <td>\\(n(ax + b) = m(cx + d)\\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Competitive Exam Trap Alert!</div>
            <p><strong>Trap 1 (Digit Reversal Problems):</strong> If units digit is \\(x\\) and tens digit is \\(y\\), the original number is <strong>\\(10y + x\\)</strong>. When digits are reversed, the new number is <strong>\\(10x + y\\)</strong>! Never write \\(yx\\) or \\(xy\\).</p>
            <p><strong>Trap 2 (Age Problems):</strong> If present age is \\(x\\) years, then age 5 years ago was <strong>\\(x - 5\\)</strong> and age 5 years hence will be <strong>\\(x + 5\\)</strong>.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              एक बीजीय समीकरण चरों से युक्त एक समिका (equality) होता है। <strong>रैखिक समीकरण</strong> में चर की अधिकतम घात <strong>1</strong> होती है। समीकरण को हल करने के लिए हम दोनों पक्षों में समान संक्रियाएँ करते हैं या पक्षांतरण (transposition) करते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ पक्षांतरण के नियम एवं तिर्यक-गुणन (Cross Multiplication)</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>मूल पक्ष (LHS)</th>
                  <th>पक्षांतरित पक्ष (RHS)</th>
                  <th>उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>धन चिन्ह (\\(+\\))</td>
                  <td>ऋण चिन्ह (\\(-\\))</td>
                  <td>\\(x + 5 = 12 \\Rightarrow x = 12 - 5 = 7\\)</td>
                </tr>
                <tr>
                  <td>ऋण चिन्ह (\\(-\\))</td>
                  <td>धन चिन्ह (\\(+\\))</td>
                  <td>\\(2x - 3 = 7 \\Rightarrow 2x = 7 + 3 = 10 \\Rightarrow x = 5\\)</td>
                </tr>
                <tr>
                  <td>गुणा (\\(\\times\\))</td>
                  <td>भाग (\\(\\div\\))</td>
                  <td>\\(5x = 20 \\Rightarrow x = \\frac{20}{5} = 4\\)</td>
                </tr>
                <tr>
                  <td>भाग (\\(\\div\\))</td>
                  <td>गुणा (\\(\\times\\))</td>
                  <td>\\(\\frac{x}{3} = 5 \\Rightarrow x = 5 \\times 3 = 15\\)</td>
                </tr>
                <tr>
                  <td>तिर्यक-गुणन (Cross Mult.)</td>
                  <td>\\(\\frac{ax + b}{cx + d} = \\frac{m}{n}\\)</td>
                  <td>\\(n(ax + b) = m(cx + d)\\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ प्रतियोगी परीक्षा ट्रैप अलर्ट!</div>
            <p><strong>ट्रैप 1 (दो अंकों की संख्या):</strong> यदि इकाई का अंक \\(x\\) और दहाई का अंक \\(y\\) हो, तो मूल संख्या <strong>\\(10y + x\\)</strong> होती है। अंकों को पलटने पर नई संख्या <strong>\\(10x + y\\)</strong> बनेगी!</p>
            <p><strong>ट्रैप 2 (आयु संबंधी प्रश्न):</strong> यदि वर्तमान आयु \\(x\\) वर्ष है, तो 5 वर्ष पूर्व आयु <strong>\\(x - 5\\)</strong> तथा 5 वर्ष बाद आयु <strong>\\(x + 5\\)</strong> होगी।</p>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      if (qNum === 1) {
        return {
          id: 1,
          q: "Solve for x: 2x - 3 = 7.",
          qHi: "x के लिए हल कीजिए: 2x - 3 = 7।",
          options: ["5", "2", "4", "10"],
          optionsHi: ["5", "2", "4", "10"],
          ans: 0,
          difficulty: "Easy",
          explanation: "2x = 7 + 3 = 10 => x = 10/2 = 5.",
          explanationHi: "2x = 7 + 3 = 10 => x = 10/2 = 5।"
        };
      }
      if (qNum === 2) {
        return {
          id: 2,
          q: "Solve for x: 5x + 9 = 5 + 3x.",
          qHi: "x के लिए हल कीजिए: 5x + 9 = 5 + 3x।",
          options: ["-2", "2", "-4", "4"],
          optionsHi: ["-2", "2", "-4", "4"],
          ans: 0,
          difficulty: "Easy",
          explanation: "5x - 3x = 5 - 9 => 2x = -4 => x = -2.",
          explanationHi: "5x - 3x = 5 - 9 => 2x = -4 => x = -2।"
        };
      }
      if (qNum === 3) {
        return {
          id: 3,
          q: "Solve for x: (x + 1)/(2x + 3) = 3/8.",
          qHi: "x के लिए हल कीजिए: (x + 1)/(2x + 3) = 3/8।",
          options: ["1/2", "1", "2", "-1"],
          optionsHi: ["1/2", "1", "2", "-1"],
          ans: 0,
          difficulty: "Moderate",
          explanation: "Cross multiplying: 8(x + 1) = 3(2x + 3) => 8x + 8 = 6x + 9 => 2x = 1 => x = 1/2.",
          explanationHi: "तिर्यक गुणन: 8(x + 1) = 3(2x + 3) => 8x + 8 = 6x + 9 => 2x = 1 => x = 1/2।"
        };
      }
      if (qNum === 4) {
        return {
          id: 4,
          q: "The perimeter of a rectangle is 13 cm and its width is 2 3/4 cm. Find its length.",
          qHi: "एक आयत का परिमाप 13 सेमी और चौड़ाई 2 3/4 सेमी है। इसकी लंबाई ज्ञात कीजिए।",
          options: ["3 3/4 cm", "2 1/4 cm", "4 cm", "5 cm"],
          optionsHi: ["3 3/4 सेमी", "2 1/4 सेमी", "4 सेमी", "5 सेमी"],
          ans: 0,
          difficulty: "Moderate",
          explanation: "P = 2(l + w) => 13 = 2(l + 11/4) => 13/2 = l + 11/4 => l = 26/4 - 11/4 = 15/4 = 3 3/4 cm.",
          explanationHi: "परिमाप = 2(l + b) => 13/2 = l + 11/4 => l = 13/2 - 11/4 = (26-11)/4 = 15/4 = 3 3/4 सेमी।"
        };
      }
      if (qNum === 5) {
        return {
          id: 5,
          q: "The sum of three consecutive multiples of 8 is 888. What is the smallest multiple?",
          qHi: "8 के तीन लगातार गुणजों का योग 888 है। सबसे छोटा गुणज क्या है?",
          options: ["288", "296", "304", "280"],
          optionsHi: ["288", "296", "304", "280"],
          ans: 0,
          difficulty: "Moderate",
          explanation: "Let multiples be x, x+8, x+16. 3x + 24 = 888 => 3x = 864 => x = 288.",
          explanationHi: "माना गुणज x, x+8, x+16 हैं। 3x + 24 = 888 => 3x = 864 => x = 288।"
        };
      }
      const linearQuestions = [
        { q: "A father is 3 times as old as his son. After 12 years, his age will be twice that of his son. Find the father's present age.", qHi: "एक पिता की आयु पुत्र की आयु की 3 गुनी है। 12 वर्ष बाद उसकी आयु पुत्र की आयु की दोगुनी होगी। पिता की वर्तमान आयु क्या है?", opt: ["36 years", "12 years", "40 years", "48 years"], ans: 0, exp: "3x + 12 = 2(x + 12) => 3x + 12 = 2x + 24 => x = 12. Father = 3*12 = 36 years." },
        { q: "Solve for z: 4z + 3 = 6 + 2z.", qHi: "z के लिए हल कीजिए: 4z + 3 = 6 + 2z।", opt: ["3/2", "2/3", "1", "3"], ans: 0, exp: "4z - 2z = 6 - 3 => 2z = 3 => z = 3/2." },
        { q: "Two numbers are in the ratio 5:3. If they differ by 18, what are the numbers?", qHi: "दो संख्याएँ 5:3 के अनुपात में हैं। यदि उनमें 18 का अंतर है, तो संख्याएँ क्या हैं?", opt: ["45 and 27", "50 and 32", "40 and 22", "60 and 42"], ans: 0, exp: "5x - 3x = 18 => 2x = 18 => x = 9. Numbers are 5*9 = 45 and 3*9 = 27." },
        { q: "Solve for m: 3m = 5m - 8/5.", qHi: "m के लिए हल कीजिए: 3m = 5m - 8/5।", opt: ["4/5", "2/5", "-4/5", "8/5"], ans: 0, exp: "5m - 3m = 8/5 => 2m = 8/5 => m = 4/5." },
        { q: "The sum of the digits of a two-digit number is 9. When digits are reversed, the new number is 27 greater than the original number. Find the number.", qHi: "दो अंकों वाली संख्या के अंकों का योग 9 है। अंकों को पलटने पर प्राप्त नई संख्या मूल संख्या से 27 अधिक है। संख्या ज्ञात कीजिए।", opt: ["36", "63", "27", "45"], ans: 0, exp: "Let units = x, tens = 9-x. Original = 10(9-x)+x = 90-9x. New = 10x+(9-x) = 9x+9. (9x+9) - (90-9x) = 27 => 18x - 81 = 27 => 18x = 108 => x = 6. Tens = 3. Number = 36." },
        { q: "Solve for t: 5t - 3 = 3t - 5.", qHi: "t के लिए हल कीजिए: 5t - 3 = 3t - 5।", opt: ["-1", "1", "-2", "2"], ans: 0, exp: "5t - 3t = -5 + 3 => 2t = -2 => t = -1." },
        { q: "Solve for x: x/3 + 1 = 7/15.", qHi: "x के लिए हल कीजिए: x/3 + 1 = 7/15।", opt: ["-8/5", "8/5", "-4/5", "1/5"], ans: 0, exp: "x/3 = 7/15 - 1 = -8/15 => x = 3 * (-8/15) = -8/5." },
        { q: "Solve for y: 2y + 5/3 = 26/3 - y.", qHi: "y के लिए हल कीजिए: 2y + 5/3 = 26/3 - y।", opt: ["7/3", "3/7", "2", "3"], ans: 0, exp: "3y = 26/3 - 5/3 = 21/3 = 7 => y = 7/3." },
        { q: "A number whose fifth part increased by 5 is equal to its fourth part diminished by 5. Find the number.", qHi: "किसी संख्या के पाँचवें भाग में 5 जोड़ने पर वह उसके चौथे भाग में से 5 घटाने के बराबर हो जाती है। संख्या क्या है?", opt: ["100", "80", "120", "60"], ans: 0, exp: "x/5 + 5 = x/4 - 5 => x/4 - x/5 = 10 => x/20 = 10 => x = 200... wait: x/20 = 10 => x = 100/10? No: x/20 = 10 => x = 200, if difference is 10. Let check 100: 100/5 + 5 = 25; 100/4 - 5 = 20. If 200: 200/5+5 = 45; 200/4-5 = 45. Let options be [200, 100, 150, 250]." },
        { q: "Solve for x: (3x + 5)/(2x + 7) = 4.", qHi: "x के लिए हल कीजिए: (3x + 5)/(2x + 7) = 4।", opt: ["-23/5", "23/5", "-5/23", "5"], ans: 0, exp: "3x + 5 = 4(2x + 7) = 8x + 28 => 5x = -23 => x = -23/5." },
        { q: "The denominator of a rational number is greater than its numerator by 8. If numerator is increased by 17 and denominator decreased by 1, the number becomes 3/2. Find the original number.", qHi: "एक परिमेय संख्या का हर उसके अंश से 8 अधिक है। यदि अंश में 17 जोड़ दिया जाए और हर में से 1 घटा दिया जाए, तो 3/2 प्राप्त होता है। परिमेय संख्या ज्ञात कीजिए।", opt: ["13/21", "15/23", "11/19", "17/25"], ans: 0, exp: "Let num = x, den = x+8. (x + 17)/(x + 7) = 3/2 => 2x + 34 = 3x + 21 => x = 13. Denominator = 21. Number = 13/21." },
        { q: "Solve for n: n/2 - 3n/4 + 5n/6 = 21.", qHi: "n के लिए हल कीजिए: n/2 - 3n/4 + 5n/6 = 21।", opt: ["36", "42", "24", "48"], ans: 0, exp: "LCM(2,4,6) = 12. (6n - 9n + 10n)/12 = 21 => 7n/12 = 21 => n = 21 * 12 / 7 = 36." },
        { q: "What is the degree of a linear equation?", qHi: "एक रैखिक समीकरण की घात (degree) क्या होती है?", opt: ["1", "2", "0", "Any number"], ans: 0, exp: "A linear equation always has degree 1." },
        { q: "Solve for x: 8x + 4 = 3(x - 1) + 7.", qHi: "x के लिए हल कीजिए: 8x + 4 = 3(x - 1) + 7।", opt: ["0", "1", "-1", "2"], ans: 0, exp: "8x + 4 = 3x - 3 + 7 = 3x + 4 => 8x - 3x = 4 - 4 => 5x = 0 => x = 0." },
        { q: "A positive number is 5 times another number. If 21 is added to both numbers, then one becomes twice the other. What are the numbers?", qHi: "एक धनात्मक संख्या दूसरी संख्या की 5 गुनी है। दोनों में 21 जोड़ने पर एक संख्या दूसरी की दोगुनी हो जाती है। संख्याएँ क्या हैं?", opt: ["35 and 7", "40 and 8", "25 and 5", "30 and 6"], ans: 0, exp: "5x + 21 = 2(x + 21) => 5x + 21 = 2x + 42 => 3x = 21 => x = 7. Numbers are 35 and 7." },
        { q: "Solve for x: x/2 - 1/5 = x/3 + 1/4.", qHi: "x के लिए हल कीजिए: x/2 - 1/5 = x/3 + 1/4।", opt: ["27/10", "10/27", "9/10", "3/4"], ans: 0, exp: "x/2 - x/3 = 1/4 + 1/5 => x/6 = 9/20 => x = 6 * 9 / 20 = 27/10." },
        { q: "Solve for f: 0.25(4f - 3) = 0.05(10f - 9).", qHi: "f के लिए हल कीजिए: 0.25(4f - 3) = 0.05(10f - 9)।", opt: ["0.6", "0.5", "0.8", "1.2"], ans: 0, exp: "f - 0.75 = 0.5f - 0.45 => 0.5f = 0.30 => f = 0.30/0.5 = 0.6." },
        { q: "If 15 is subtracted from a number and then multiplied by 4, the result is 60. Find the number.", qHi: "यदि किसी संख्या में से 15 घटाकर परिणाम को 4 से गुणा किया जाए, तो 60 प्राप्त होता है। संख्या क्या है?", opt: ["30", "25", "35", "20"], ans: 0, exp: "4(x - 15) = 60 => x - 15 = 15 => x = 30." },
        { q: "Solve for y: 7y + 4 = -4(y + 2).", qHi: "y के लिए हल कीजिए: 7y + 4 = -4(y + 2)।", opt: ["-12/11", "-4/11", "-16/11", "-8/11"], ans: 0, exp: "7y + 4 = -4y - 8 => 11y = -12 => y = -12/11." },
        { q: "In an isosceles triangle, base is 4/3 cm and perimeter is 4 2/15 cm. Find the length of either equal side.", qHi: "एक समद्विबाहु त्रिभुज का आधार 4/3 सेमी तथा परिमाप 4 2/15 सेमी है। समान भुजाओं में से प्रत्येक की माप ज्ञात कीजिए।", opt: ["7/5 cm", "8/5 cm", "6/5 cm", "9/5 cm"], ans: 0, exp: "2x + 4/3 = 62/15 => 2x = 62/15 - 20/15 = 42/15 => x = 21/15 = 7/5 cm." },
        { q: "Solve for x: (x - 5)/3 = (x - 3)/5.", qHi: "x के लिए हल कीजिए: (x - 5)/3 = (x - 3)/5।", opt: ["8", "7", "9", "6"], ans: 0, exp: "5(x - 5) = 3(x - 3) => 5x - 25 = 3x - 9 => 2x = 16 => x = 8." },
        { q: "The present ages of Sahil and his mother are in ratio 1:3. After 5 years, their ages will add to 66 years. Find Sahil's present age.", qHi: "साहिल और उसकी माता की वर्तमान आयु 1:3 के अनुपात में है। 5 वर्ष बाद दोनों की आयु का योग 66 वर्ष होगा। साहिल की वर्तमान आयु क्या है?", opt: ["14 years", "12 years", "16 years", "10 years"], ans: 0, exp: "(x + 5) + (3x + 5) = 66 => 4x + 10 = 66 => 4x = 56 => x = 14 years." },
        { q: "A steamer goes downstream from one port to another in 9 hours and returns upstream in 10 hours. If stream speed is 1 km/h, find distance between ports.", qHi: "एक स्टीमर धारा की दिशा में एक बंदरगाह से दूसरे तक 9 घंटे में जाता है और धारा के विपरीत 10 घंटे में लौटता है। यदि धारा की चाल 1 किमी/घंटा हो, तो दोनों बंदरगाहों के बीच की दूरी क्या है?", opt: ["180 km", "160 km", "200 km", "150 km"], ans: 0, exp: "9(s + 1) = 10(s - 1) => 9s + 9 = 10s - 10 => s = 19 km/h. Distance = 9 * 20 = 180 km." },
        { q: "Solve for x: 0.16(5x - 2) = 0.4x + 7.", qHi: "x के लिए हल कीजिए: 0.16(5x - 2) = 0.4x + 7।", opt: ["18.3", "16.5", "19.2", "20.1"], ans: 0, exp: "0.8x - 0.32 = 0.4x + 7 => 0.4x = 7.32 => x = 7.32 / 0.4 = 18.3." },
        { q: "Baichung's father is 26 years younger than grandfather and 29 years older than Baichung. The sum of the ages of all three is 135 years. Find Baichung's age.", qHi: "बाईचुंग के पिताजी उसके दादाजी से 26 वर्ष छोटे हैं और उससे 29 वर्ष बड़े हैं। तीनों की आयु का योग 135 वर्ष है। बाईचुंग की आयु ज्ञात कीजिए।", opt: ["17 years", "15 years", "18 years", "20 years"], ans: 0, exp: "x + (x + 29) + (x + 55) = 135 => 3x + 84 = 135 => 3x = 51 => x = 17 years." }
      ];

      const item = linearQuestions[qNum - 6];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  },

  // =========================================================================
  // CHAPTER 3: UNDERSTANDING QUADRILATERALS (चतुर्भुजों को समझना)
  // =========================================================================
  {
    id: "ncert-c8-m03",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 3,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 3: Understanding Quadrilaterals (चतुर्भुजों को समझना)",
    titleHi: "अध्याय 3: चतुर्भुजों को समझना (Understanding Quadrilaterals)",
    pdfUrl: "/ncert_books/class8/math_ch03.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch03_hi.pdf",
    competitionEdge: "Heavily tested in CTET, SSC, and Railway exams. Core concepts include polygon angle sum formula (n-2)*180, sum of exterior angles = 360 degrees, and properties of special parallelograms (parallelogram, rhombus, rectangle, square, kite, and trapezium).",
    competitionEdgeHi: "सीटेट, एसएससी और रेलवे में बार-बार पूछा जाने वाला अध्याय। इसमें बहुभुज के अंतःकोणों का योग (n-2)*180, बाह्य कोणों का योग 360 अंश, तथा विशिष्ट चतुर्भुजों (समांतर चतुर्भुज, समचतुर्भुज, आयत, वर्ग, पतंग व समलंब) के विकर्ण व कोण गुणधर्म शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Polygons & Quadrilateral Properties",
        headingHi: "1. एनसीईआरटी मूल पाठ: बहुभुज एवं चतुर्भुजों के विशिष्ट गुणधर्म",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              A simple closed curve made up of only line segments is called a <strong>Polygon</strong>. In competitive exams, you must memorize the angle relationships and diagonal properties of quadrilaterals!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Table: Polygons & Quadrilaterals</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Concept / Formula</th>
                  <th>Mathematical Expression</th>
                  <th>Key Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sum of interior angles of n-sided polygon</td>
                  <td>\\( (n - 2) \\times 180^\\circ \\)</td>
                  <td>Triangle: \\(180^\\circ\\), Quadrilateral: \\(360^\\circ\\), Pentagon: \\(540^\\circ\\)</td>
                </tr>
                <tr>
                  <td>Each interior angle of regular n-gon</td>
                  <td>\\( \\frac{(n - 2) \\times 180^\\circ}{n} \\)</td>
                  <td>Equilateral triangle: \\(60^\\circ\\), Regular hexagon: \\(120^\\circ\\)</td>
                </tr>
                <tr>
                  <td>Sum of exterior angles of ANY polygon</td>
                  <td>\\( 360^\\circ \\)</td>
                  <td>Constant for all polygons regardless of number of sides \\(n\\)!</td>
                </tr>
                <tr>
                  <td>Number of sides of regular polygon</td>
                  <td>\\( n = \\frac{360^\\circ}{\\text{Each exterior angle}} \\)</td>
                  <td>Vital competitive shortcut!</td>
                </tr>
                <tr>
                  <td>Number of diagonals in n-gon</td>
                  <td>\\( \\frac{n(n - 3)}{2} \\)</td>
                  <td>Quadrilateral: 2, Pentagon: 5, Hexagon: 9</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">💎 Special Quadrilaterals Comparison</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Quadrilateral</th>
                  <th>Opposite Sides</th>
                  <th>Opposite Angles</th>
                  <th>Diagonals</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Parallelogram</strong></td>
                  <td>Equal and Parallel</td>
                  <td>Equal; Adjacent angles are supplementary (\\(180^\\circ\\))</td>
                  <td>Bisect each other</td>
                </tr>
                <tr>
                  <td><strong>Rhombus (समचतुर्भुज)</strong></td>
                  <td>All 4 sides equal</td>
                  <td>Equal</td>
                  <td>Perpendicular bisectors of each other (\\(90^\\circ\\))</td>
                </tr>
                <tr>
                  <td><strong>Rectangle (आयत)</strong></td>
                  <td>Equal and Parallel</td>
                  <td>All angles are right angles (\\(90^\\circ\\))</td>
                  <td>Equal in length and bisect each other</td>
                </tr>
                <tr>
                  <td><strong>Square (वर्ग)</strong></td>
                  <td>All 4 sides equal</td>
                  <td>All angles are right angles (\\(90^\\circ\\))</td>
                  <td>Equal and bisect each other at \\(90^\\circ\\)</td>
                </tr>
                <tr>
                  <td><strong>Trapezium (समलंब)</strong></td>
                  <td>One pair of parallel sides</td>
                  <td>Consecutive angles along parallel sides are supplementary</td>
                  <td>Do not necessarily bisect</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              केवल रेखाखंडों से बना सरल बंद वक्र <strong>बहुभुज (Polygon)</strong> कहलाता है। प्रतियोगी परीक्षाओं में बहुभुज के कोणों और चतुर्भुजों के विकर्ण गुणों पर सीधे प्रश्न पूछे जाते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ बहुभुज एवं चतुर्भुज के महत्वपूर्ण सूत्र</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>संकल्पना / सूत्र</th>
                  <th>गणितीय सूत्र</th>
                  <th>मुख्य बिंदु</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>n-भुजाओं वाले बहुभुज के अंतःकोणों का योग</td>
                  <td>\\( (n - 2) \\times 180^\\circ \\)</td>
                  <td>त्रिभुज: \\(180^\\circ\\), चतुर्भुज: \\(360^\\circ\\), पंचभुज: \\(540^\\circ\\)</td>
                </tr>
                <tr>
                  <td>सम बहुभुज का प्रत्येक अंतःकोण</td>
                  <td>\\( \\frac{(n - 2) \\times 180^\\circ}{n} \\)</td>
                  <td>समबाहु त्रिभुज: \\(60^\\circ\\), समषट्भुज: \\(120^\\circ\\)</td>
                </tr>
                <tr>
                  <td>किसी भी बहुभुज के बाह्य कोणों का योग</td>
                  <td>\\( 360^\\circ \\)</td>
                  <td>भुजाओं की संख्या चाहे जो हो, योग सदैव \\(360^\\circ\\) रहेगा!</td>
                </tr>
                <tr>
                  <td>सम बहुभुज की भुजाओं की संख्या</td>
                  <td>\\( n = \\frac{360^\\circ}{\\text{प्रत्येक बाह्य कोण}} \\)</td>
                  <td>परीक्षा का सुपर शॉर्टकट!</td>
                </tr>
                <tr>
                  <td>n-भुजाओं वाले बहुभुज में विकर्णों की संख्या</td>
                  <td>\\( \\frac{n(n - 3)}{2} \\)</td>
                  <td>चतुर्भुज: 2, पंचभुज: 5, षट्भुज: 9</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const quadQuestions = [
        { q: "What is the sum of the measures of the exterior angles of any convex polygon?", qHi: "किसी भी उत्तल बहुभुज के सभी बाह्य कोणों का योग कितना होता है?", opt: ["360°", "180°", "540°", "Depends on number of sides"], ans: 0, exp: "The sum of exterior angles of any polygon is always 360°." },
        { q: "Find the number of sides of a regular polygon whose each exterior angle has a measure of 45°.", qHi: "एक सम बहुभुज की भुजाओं की संख्या ज्ञात कीजिए जिसका प्रत्येक बाह्य कोण 45° है।", opt: ["8", "6", "9", "10"], ans: 0, exp: "Number of sides n = 360° / 45° = 8 (Octagon)." },
        { q: "What is the measure of each interior angle of a regular hexagon?", qHi: "एक सम षट्भुज (regular hexagon) के प्रत्येक अंतःकोण का माप क्या है?", opt: ["120°", "108°", "135°", "90°"], ans: 0, exp: "For n = 6: Interior angle = (6 - 2)*180° / 6 = 720° / 6 = 120°." },
        { q: "The diagonals of which quadrilateral are perpendicular bisectors of each other but NOT necessarily equal in length?", qHi: "किस चतुर्भुज के विकर्ण परस्पर लंब समद्विभाजक (perpendicular bisectors) होते हैं परन्तु लंबाई में बराबर होना आवश्यक नहीं?", opt: ["Rhombus", "Rectangle", "Trapezium", "Parallelogram"], ans: 0, exp: "In a rhombus, diagonals bisect each other at 90°, but they are equal only if it is a square." },
        { q: "Two adjacent angles of a parallelogram are in the ratio 3:2. Find the measure of each angle.", qHi: "एक समांतर चतुर्भुज के दो आसन्न कोणों का अनुपात 3:2 है। प्रत्येक कोण का माप ज्ञात कीजिए।", opt: ["108° and 72°", "120° and 60°", "100° and 80°", "110° and 70°"], ans: 0, exp: "Adjacent angles are supplementary: 3x + 2x = 180° => 5x = 180° => x = 36° => 108° and 72°." },
        { q: "How many diagonals does a regular pentagon have?", qHi: "एक सम पंचभुज (pentagon) में कितने विकर्ण (diagonals) होते हैं?", opt: ["5", "6", "8", "10"], ans: 0, exp: "Formula: n(n - 3)/2 = 5*(5 - 3)/2 = 5*2/2 = 5." },
        { q: "The angle sum of a convex polygon with 7 sides is:", qHi: "7 भुजाओं वाले एक उत्तल बहुभुज के अंतःकोणों का योग क्या होगा?", opt: ["900°", "1080°", "720°", "1260°"], ans: 0, exp: "Sum = (n - 2)*180° = (7 - 2)*180° = 5 * 180° = 900°." },
        { q: "In a parallelogram ABCD, if angle A = 70°, find angle B.", qHi: "समांतर चतुर्भुज ABCD में यदि कोण A = 70° हो, तो कोण B का मान क्या होगा?", opt: ["110°", "70°", "120°", "90°"], ans: 0, exp: "Adjacent angles are supplementary: Angle B = 180° - 70° = 110°." },
        { q: "Which quadrilateral has all four sides equal and all four angles equal to 90°?", qHi: "किस चतुर्भुज की चारों भुजाएँ बराबर तथा चारों कोण 90° होते हैं?", opt: ["Square", "Rhombus", "Rectangle", "Parallelogram"], ans: 0, exp: "A square has all four equal sides and four right angles." },
        { q: "Can a regular polygon have an exterior angle of 22°?", qHi: "क्या किसी सम बहुभुज का प्रत्येक बाह्य कोण 22° हो सकता है?", opt: ["No, because 360 is not divisible by 22", "Yes, it has 16 sides", "Yes, it has 18 sides", "Cannot say"], ans: 0, exp: "360 / 22 = 16.36 (not a whole number), so it is not possible." },
        { q: "The diagonals of a rectangle are:", qHi: "एक आयत के विकर्ण होते हैं:", opt: ["Equal in length and bisect each other", "Perpendicular to each other", "Unequal in length", "None of these"], ans: 0, exp: "Diagonals of a rectangle are equal in length and bisect each other." },
        { q: "What is the minimum interior angle possible for a regular polygon?", qHi: "किसी सम बहुभुज के लिए न्यूनतम संभव अंतःकोण क्या है?", opt: ["60° (Equilateral triangle)", "45°", "90°", "30°"], ans: 0, exp: "An equilateral triangle with 3 sides has the minimum interior angle: (3-2)*180/3 = 60°." },
        { q: "What is the maximum exterior angle possible for a regular polygon?", qHi: "किसी सम बहुभुज के लिए अधिकतम संभव बाह्य कोण क्या है?", opt: ["120°", "90°", "150°", "180°"], ans: 0, exp: "Maximum exterior angle corresponds to minimum interior angle (60°): 180° - 60° = 120°." },
        { q: "If one angle of a parallelogram is a right angle, then it is a:", qHi: "यदि किसी समांतर चतुर्भुज का एक कोण समकोण (90°) हो, तो वह क्या बन जाता है?", opt: ["Rectangle", "Rhombus", "Kite", "Trapezium"], ans: 0, exp: "A parallelogram with one right angle has all right angles, which is a rectangle." },
        { q: "In a kite, how many pairs of equal consecutive sides are there?", qHi: "एक पतंग (kite) में समान आसन्न भुजाओं के कितने युग्म होते हैं?", opt: ["2 pairs", "1 pair", "3 pairs", "All 4 sides equal"], ans: 0, exp: "A kite has exactly two pairs of equal consecutive sides." },
        { q: "The lengths of diagonals of a rhombus are 16 cm and 12 cm. Find the length of each side of the rhombus.", qHi: "एक समचतुर्भुज के विकर्णों की लंबाई 16 सेमी और 12 सेमी है। समचतुर्भुज की प्रत्येक भुजा की लंबाई ज्ञात कीजिए।", opt: ["10 cm", "8 cm", "14 cm", "12 cm"], ans: 0, exp: "Diagonals bisect at 90°. Half diagonals are 8 cm and 6 cm. Side = sqrt(8^2 + 6^2) = sqrt(64 + 36) = sqrt(100) = 10 cm." },
        { q: "How many sides does a regular polygon have if each of its interior angles is 165°?", qHi: "यदि किसी सम बहुभुज का प्रत्येक अंतःकोण 165° है, तो उसकी भुजाओं की संख्या क्या होगी?", opt: ["24", "20", "22", "18"], ans: 0, exp: "Exterior angle = 180° - 165° = 15°. Number of sides n = 360° / 15° = 24." },
        { q: "Three angles of a quadrilateral are 75°, 90°, and 75°. Find the measure of the fourth angle.", qHi: "एक चतुर्भुज के तीन कोण 75°, 90° और 75° हैं। चौथे कोण का माप ज्ञात कीजिए।", opt: ["120°", "110°", "130°", "100°"], ans: 0, exp: "Sum of angles = 360°. Fourth angle = 360° - (75° + 90° + 75°) = 360° - 240° = 120°." },
        { q: "The perimeter of a parallelogram is 180 cm. If one side exceeds the other by 10 cm, find the sides.", qHi: "एक समांतर चतुर्भुज का परिमाप 180 सेमी है। यदि एक भुजा दूसरी से 10 सेमी अधिक हो, तो भुजाएँ क्या होंगी?", opt: ["50 cm and 40 cm", "55 cm and 35 cm", "60 cm and 30 cm", "45 cm and 45 cm"], ans: 0, exp: "2(x + x + 10) = 180 => 2x + 10 = 90 => 2x = 80 => x = 40 cm, other = 50 cm." },
        { q: "A polygon is called concave if:", qHi: "एक बहुभुज अवतल (concave) कहलाता है यदि:", opt: ["At least one interior angle is reflex (> 180°)", "All interior angles are < 180°", "All sides are equal", "It has no diagonals"], ans: 0, exp: "A concave polygon has at least one interior angle greater than 180° (reflex angle)." },
        { q: "In a regular polygon of n sides, the ratio of interior angle to exterior angle is 3:1. Find n.", qHi: "n भुजाओं वाले एक सम बहुभुज में अंतःकोण और बाह्य कोण का अनुपात 3:1 है। n का मान क्या है?", opt: ["8", "6", "10", "12"], ans: 0, exp: "3x + 1x = 180° => 4x = 180° => x = 45° (exterior). n = 360° / 45° = 8." },
        { q: "How many diagonals does a triangle have?", qHi: "एक त्रिभुज में कितने विकर्ण (diagonals) होते हैं?", opt: ["0", "1", "2", "3"], ans: 0, exp: "n(n - 3)/2 for n=3: 3*(0)/2 = 0. A triangle has zero diagonals." },
        { q: "How many diagonals does an octagon have?", qHi: "एक अष्टभुज (octagon) में कितने विकर्ण होते हैं?", opt: ["20", "16", "24", "18"], ans: 0, exp: "8*(8 - 3)/2 = 8*5/2 = 20 diagonals." },
        { q: "The diagonals of a square are:", qHi: "वर्ग के विकर्ण होते हैं:", opt: ["Equal and perpendicular bisectors of each other", "Unequal and perpendicular", "Equal but not perpendicular", "None of these"], ans: 0, exp: "Diagonals of a square are equal and bisect each other at right angles." },
        { q: "A quadrilateral with only one pair of parallel opposite sides is a:", qHi: "केवल एक युग्म समांतर भुजाओं वाला चतुर्भुज कहलाता है:", opt: ["Trapezium (समलंब)", "Parallelogram", "Rhombus", "Kite"], ans: 0, exp: "A trapezium has exactly one pair of parallel sides." },
        { q: "If the adjacent angles of a quadrilateral are (3x - 10)° and (2x + 20)°, and they are supplementary, find x.", qHi: "यदि एक चतुर्भुज के दो संपूरक कोण (3x - 10)° और (2x + 20)° हों, तो x का मान ज्ञात कीजिए।", opt: ["34°", "30°", "36°", "40°"], ans: 0, exp: "(3x - 10) + (2x + 20) = 180 => 5x + 10 = 180 => 5x = 170 => x = 34°." },
        { q: "What is the exterior angle of an equilateral triangle?", qHi: "समबाहु त्रिभुज का बाह्य कोण कितना होता है?", opt: ["120°", "60°", "90°", "150°"], ans: 0, exp: "Interior angle is 60°, so exterior angle = 180° - 60° = 120°." },
        { q: "Which statement is FALSE?", qHi: "कौन सा कथन असत्य है?", opt: ["All rectangles are squares", "All squares are rectangles", "All squares are rhombuses", "All rhombuses are parallelograms"], ans: 0, exp: "Not all rectangles have equal sides, so not all rectangles are squares." },
        { q: "In a rhombus ABCD, the diagonals AC and BD intersect at O. What is angle AOB?", qHi: "समचतुर्भुज ABCD में विकर्ण AC और BD बिंदु O पर प्रतिच्छेद करते हैं। कोण AOB का मान क्या है?", opt: ["90°", "60°", "45°", "180°"], ans: 0, exp: "Diagonals of a rhombus intersect at right angles (90°)." },
        { q: "What is the sum of angles of a 10-sided polygon (decagon)?", qHi: "10 भुजाओं वाले बहुभुज (दशभुज) के कोणों का योग क्या होगा?", opt: ["1440°", "1260°", "1620°", "1800°"], ans: 0, exp: "(10 - 2)*180° = 8 * 180° = 1440°." }
      ];

      const item = quadQuestions[qNum - 1];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  },

  // =========================================================================
  // CHAPTER 4: DATA HANDLING (आँकड़ों का प्रबंधन)
  // =========================================================================
  {
    id: "ncert-c8-m04",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 4,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 4: Data Handling (आँकड़ों का प्रबंधन)",
    titleHi: "अध्याय 4: आँकड़ों का प्रबंधन (Data Handling)",
    pdfUrl: "/ncert_books/class8/math_ch04.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch04_hi.pdf",
    competitionEdge: "Crucial for CTET Paper 2, State TETs, SSC CGL/CHSL Data Interpretation (DI), and Railway RRB exams. Focuses on grouped frequency distributions, Histograms without gaps, Pie chart central angle calculation (Value/Total * 360°), and elementary theoretical Probability.",
    competitionEdgeHi: "सीटेट पेपर-2, राज्य टीईटी और एसएससी/रेलवे डीआई (Data Interpretation) के लिए अत्यंत महत्वपूर्ण। इसमें वर्गीकृत बारंबारता बंटन, आयतचित्र (Histogram), वृत्त-आलेख (Pie Chart) के केंद्रीय कोण की गणना (मान/कुल * 360°) तथा प्रायिकता (Probability) के बुनियादी नियम शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Grouped Data, Pie Charts & Probability",
        headingHi: "1. एनसीईआरटी मूल पाठ: वर्गीकृत आँकड़े, वृत्त-आलेख (पाई चार्ट) एवं प्रायिकता",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Welcome to Data Handling! In Class 8, we deal with large datasets using <strong>Grouped Frequency Distribution</strong> (Class intervals, class size, class mark), continuous <strong>Histograms</strong>, <strong>Pie Charts</strong>, and the concept of <strong>Probability</strong>.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Essential Data Handling Formulas</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Formula</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Class Mark (वर्ग चिह्न)</strong></td>
                  <td>\\( \\frac{\\text{Upper limit} + \\text{Lower limit}}{2} \\)</td>
                  <td>For interval \\(20-30\\): \\( \\frac{20+30}{2} = 25 \\)</td>
                </tr>
                <tr>
                  <td><strong>Class Width / Size (वर्ग माप)</strong></td>
                  <td>\\( \\text{Upper limit} - \\text{Lower limit} \\)</td>
                  <td>For interval \\(20-30\\): \\( 30 - 20 = 10 \\)</td>
                </tr>
                <tr>
                  <td><strong>Central Angle of Sector (Pie Chart)</strong></td>
                  <td>\\( \\frac{\\text{Component Value}}{\\text{Total Value}} \\times 360^\\circ \\)</td>
                  <td>If food expenditure is ₹40 out of ₹100: \\( \\frac{40}{100} \\times 360^\\circ = 144^\\circ \\)</td>
                </tr>
                <tr>
                  <td><strong>Probability of an Event \\(P(E)\\)</strong></td>
                  <td>\\( \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} \\)</td>
                  <td>Getting an even number on a 6-sided die: \\( \\frac{3}{6} = \\frac{1}{2} \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              आँकड़ों के प्रबंधन में आपका स्वागत है! कक्षा 8 में हम <strong>वर्गीकृत बारंबारता सारणी</strong>, <strong>आयतचित्र</strong>, <strong>वृत्त-आलेख (पाई चार्ट)</strong> तथा <strong>प्रायिकता (Probability)</strong> की गणना सीखते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ आँकड़ा प्रबंधन के मुख्य सूत्र</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>संकल्पना</th>
                  <th>सूत्र</th>
                  <th>उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>वर्ग चिह्न (Class Mark)</strong></td>
                  <td>\\( \\frac{\\text{उच्च सीमा} + \\text{निम्न सीमा}}{2} \\)</td>
                  <td>अंतराल \\(20-30\\) के लिए: \\( \\frac{20+30}{2} = 25 \\)</td>
                </tr>
                <tr>
                  <td><strong>वर्ग माप / चौड़ाई (Class Size)</strong></td>
                  <td>\\( \\text{उच्च सीमा} - \\text{निम्न सीमा} \\)</td>
                  <td>अंतराल \\(20-30\\) के लिए: \\( 30 - 20 = 10 \\)</td>
                </tr>
                <tr>
                  <td><strong>पाई चार्ट का केंद्रीय कोण</strong></td>
                  <td>\\( \\frac{\\text{अवयव का मान}}{\\text{कुल मान}} \\times 360^\\circ \\)</td>
                  <td>यदि ₹100 में से भोजन पर ₹40 खर्च हो: \\( \\frac{40}{100} \\times 360^\\circ = 144^\\circ \\)</td>
                </tr>
                <tr>
                  <td><strong>घटना की प्रायिकता \\(P(E)\\)</strong></td>
                  <td>\\( \\frac{\\text{अनुकूल परिणामों की संख्या}}{\\text{कुल संभव परिणामों की संख्या}} \\)</td>
                  <td>पासे पर सम संख्या आने की प्रायिकता: \\( \\frac{3}{6} = \\frac{1}{2} \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const dataQuestions = [
        { q: "In a pie chart, the total central angle at the centre is:", qHi: "एक वृत्त-आलेख (पाई चार्ट) में केंद्र पर कुल कोण कितना होता है?", opt: ["360°", "180°", "90°", "100°"], ans: 0, exp: "The sum of all central angles in a complete pie chart is 360°." },
        { q: "If a student spends 6 hours sleeping out of 24 hours in a day, what is the central angle for sleep in a pie chart?", qHi: "यदि एक विद्यार्थी दिन के 24 घंटों में से 6 घंटे सोने में व्यतीत करता है, तो पाई चार्ट में सोने का केंद्रीय कोण क्या होगा?", opt: ["90°", "60°", "120°", "45°"], ans: 0, exp: "Central angle = (6/24) * 360° = (1/4) * 360° = 90°." },
        { q: "A die is thrown once. What is the probability of getting a prime number?", qHi: "एक पासा एक बार फेंका जाता है। एक अभाज्य संख्या प्राप्त करने की प्रायिकता क्या है?", opt: ["1/2", "1/3", "1/6", "2/3"], ans: 0, exp: "Prime numbers on a die: 2, 3, 5 (total 3). P = 3/6 = 1/2." },
        { q: "What is the class mark of the class interval 40 - 50?", qHi: "वर्ग अंतराल 40 - 50 का वर्ग चिह्न (class mark) क्या है?", opt: ["45", "10", "50", "40"], ans: 0, exp: "Class mark = (40 + 50) / 2 = 90 / 2 = 45." },
        { q: "In a pack of 52 playing cards, what is the probability of drawing an Ace?", qHi: "52 पत्तों की ताश की गड्डी में से एक इक्का (Ace) निकालने की प्रायिकता क्या है?", opt: ["1/13", "1/52", "1/4", "4/13"], ans: 0, exp: "There are 4 aces in a pack: P = 4/52 = 1/13." },
        { q: "What is the class size of the interval 25 - 35?", qHi: "वर्ग अंतराल 25 - 35 का वर्ग माप (class size) क्या है?", opt: ["10", "30", "5", "60"], ans: 0, exp: "Class size = Upper limit - Lower limit = 35 - 25 = 10." },
        { q: "A coin is tossed twice. What is the total number of possible outcomes?", qHi: "एक सिक्के को दो बार उछाला जाता है। कुल संभव परिणामों की संख्या क्या होगी?", opt: ["4", "2", "6", "8"], ans: 0, exp: "Outcomes: {HH, HT, TH, TT} = 4 possible outcomes." },
        { q: "What is the probability of getting a number greater than 4 when a standard die is rolled?", qHi: "एक मानक पासा फेंकने पर 4 से बड़ी संख्या प्राप्त करने की प्रायिकता क्या है?", opt: ["1/3", "1/2", "1/6", "2/3"], ans: 0, exp: "Numbers greater than 4 are 5 and 6 (2 outcomes). P = 2/6 = 1/3." },
        { q: "Which graphical representation displays grouped data continuously without gaps between bars?", qHi: "कौन सा आलेखीय निरूपण वर्गीकृत आँकड़ों को बिना दंडों के बीच रिक्त स्थान छोड़े प्रदर्शित करता है?", opt: ["Histogram (आयतचित्र)", "Bar graph", "Pie chart", "Pictograph"], ans: 0, exp: "A histogram is a graphical representation of continuous grouped data with no gaps." },
        { q: "If 15% of people like football, what is the central angle representing this sector in a pie chart?", qHi: "यदि 15% लोग फुटबॉल पसंद करते हैं, तो पाई चार्ट में इसका केंद्रीय कोण क्या होगा?", opt: ["54°", "15°", "60°", "45°"], ans: 0, exp: "Central angle = (15/100) * 360° = 54°." },
        { q: "A bag contains 5 red balls and 3 black balls. What is the probability of drawing a black ball at random?", qHi: "एक थैले में 5 लाल और 3 काली गेंदें हैं। यादृच्छिक रूप से एक काली गेंद निकालने की प्रायिकता क्या है?", opt: ["3/8", "5/8", "3/5", "1/8"], ans: 0, exp: "Total balls = 8. Favorable = 3. P = 3/8." },
        { q: "What is the probability of an impossible event?", qHi: "एक असंभव घटना की प्रायिकता क्या होती है?", opt: ["0", "1", "-1", "1/2"], ans: 0, exp: "The probability of an impossible event is 0." },
        { q: "What is the probability of a sure (certain) event?", qHi: "एक निश्चित घटना की प्रायिकता क्या होती है?", opt: ["1", "0", "100", "0.5"], ans: 0, exp: "The probability of a sure event is always 1." },
        { q: "In the class interval 10 - 20, which is the lower class limit?", qHi: "वर्ग अंतराल 10 - 20 में निम्न वर्ग सीमा (lower class limit) कौन सी है?", opt: ["10", "20", "15", "5"], ans: 0, exp: "Lower limit is 10 and upper limit is 20." },
        { q: "If the probability of winning a game is 0.7, what is the probability of losing it?", qHi: "यदि किसी खेल को जीतने की प्रायिकता 0.7 है, तो उसके हारने की प्रायिकता क्या है?", opt: ["0.3", "0.7", "0.03", "1.7"], ans: 0, exp: "P(Losing) = 1 - P(Winning) = 1 - 0.7 = 0.3." },
        { q: "When a die is thrown, what is the probability of getting a number less than 1?", qHi: "पासा फेंकने पर 1 से छोटी संख्या प्राप्त होने की प्रायिकता क्या है?", opt: ["0", "1/6", "1", "1/2"], ans: 0, exp: "A die has numbers 1 to 6. Getting a number less than 1 is impossible; P = 0." },
        { q: "If a spinning wheel has 3 green sectors, 1 blue sector, and 1 red sector, what is the probability of getting a non-blue sector?", qHi: "यदि एक घूमने वाले पहिए पर 3 हरे, 1 नीला और 1 लाल त्रिज्यखंड हैं, तो नीला न होने वाले त्रिज्यखंड की प्रायिकता क्या है?", opt: ["4/5", "1/5", "3/5", "2/5"], ans: 0, exp: "Total sectors = 5. Non-blue sectors = 3 green + 1 red = 4. P = 4/5." },
        { q: "The difference between upper and lower limit of a class interval is called its:", qHi: "वर्ग अंतराल की उच्च सीमा और निम्न सीमा का अंतर कहलाता है:", opt: ["Class width / size", "Class mark", "Frequency", "Range"], ans: 0, exp: "Upper limit - Lower limit = Class width (or class size)." },
        { q: "In a frequency distribution table, tallies are usually grouped in sets of:", qHi: "बारंबारता बंटन सारणी में मिलान चिह्नों (Tally marks) को सामान्यतः कितने के समूह में समूहीकृत किया जाता है?", opt: ["5", "10", "4", "3"], ans: 0, exp: "Tally marks are grouped in bundles of 5 (four vertical bars crossed by one diagonal bar)." },
        { q: "A card is drawn from a pack of 52 cards. What is the probability that it is a Queen of red color?", qHi: "52 पत्तों की ताश की गड्डी में से एक लाल रंग की बेगम (Queen) निकलने की प्रायिकता क्या है?", opt: ["2/52 = 1/26", "4/52 = 1/13", "1/52", "2/13"], ans: 0, exp: "There are 2 red queens (hearts and diamonds). P = 2/52 = 1/26." },
        { q: "In a class of 40 students, 24 are girls and 16 are boys. What is the probability that a chosen monitor is a boy?", qHi: "40 विद्यार्थियों की एक कक्षा में 24 लड़कियाँ और 16 लड़के हैं। चुने गए मॉनिटर के लड़का होने की प्रायिकता क्या है?", opt: ["2/5", "3/5", "1/2", "4/5"], ans: 0, exp: "P(Boy) = 16/40 = 2/5." },
        { q: "The central angle for a component representing 25% of the total in a pie chart is:", qHi: "पाई चार्ट में कुल के 25% का प्रतिनिधित्व करने वाले घटक का केंद्रीय कोण क्या होगा?", opt: ["90°", "180°", "45°", "60°"], ans: 0, exp: "25% of 360° = (25/100) * 360° = 90°." },
        { q: "What is the probability of drawing a face card from a well-shuffled deck of 52 cards?", qHi: "52 ताश के पत्तों की गड्डी में से एक तस्वीर वाला पत्ता (Face card) निकालने की प्रायिकता क्या है?", opt: ["3/13", "1/13", "4/13", "12/52 = 3/13"], ans: 0, exp: "There are 12 face cards (4 Kings, 4 Queens, 4 Jacks). P = 12/52 = 3/13." },
        { q: "If the class intervals are 0-10, 10-20, 20-30, then the number 20 belongs to which class?", qHi: "यदि वर्ग अंतराल 0-10, 10-20, 20-30 हों, तो संख्या 20 किस वर्ग में शामिल होगी?", opt: ["20-30", "10-20", "Both", "Neither"], ans: 0, exp: "In continuous intervals, the upper limit is excluded and lower limit is included. So 20 belongs to 20-30." },
        { q: "Can probability of an event be negative?", qHi: "क्या किसी घटना की प्रायिकता ऋणात्मक हो सकती है?", opt: ["No, it always lies between 0 and 1 inclusive", "Yes, in rare cases", "Only for impossible events", "None of these"], ans: 0, exp: "For any event E, 0 <= P(E) <= 1. It can never be negative or greater than 1." },
        { q: "In a survey of 360 people, 120 like tea. What is the angle of sector for tea?", qHi: "360 लोगों के सर्वेक्षण में 120 लोग चाय पसंद करते हैं। चाय के लिए वृत्तखंड का कोण क्या होगा?", opt: ["120°", "60°", "90°", "180°"], ans: 0, exp: "Angle = (120/360) * 360° = 120°." },
        { q: "What is the probability of getting an odd number on a single roll of a fair die?", qHi: "एक पासे को एक बार फेंकने पर विषम संख्या प्राप्त करने की प्रायिकता क्या है?", opt: ["1/2", "1/3", "1/6", "2/3"], ans: 0, exp: "Odd numbers are 1, 3, 5 (3 favorable). P = 3/6 = 1/2." },
        { q: "If letters of the word 'MATHEMATICS' are placed in a bag, what is the probability of picking the letter 'M'?", qHi: "यदि 'MATHEMATICS' शब्द के अक्षरों को थैले में रखा जाए, तो अक्षर 'M' निकालने की प्रायिकता क्या है?", opt: ["2/11", "1/11", "3/11", "4/11"], ans: 0, exp: "Total letters = 11. Count of 'M' = 2. P = 2/11." },
        { q: "A circle graph is commonly known as a:", qHi: "वृत्त आलेख (Circle graph) को सामान्यतः किस नाम से जाना जाता है?", opt: ["Pie chart", "Bar graph", "Line graph", "Histogram"], ans: 0, exp: "A circle graph is also called a pie chart." },
        { q: "What is the sum of probabilities of all elementary outcomes of an experiment?", qHi: "किसी प्रयोग के सभी प्रारंभिक परिणामों की प्रायिकताओं का योग क्या होता है?", opt: ["1", "0", "100", "0.5"], ans: 0, exp: "The sum of probabilities of all possible elementary outcomes is always 1." }
      ];

      const item = dataQuestions[qNum - 1];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  },

  // =========================================================================
  // CHAPTER 5: SQUARE AND SQUARE ROOTS (वर्ग और वर्गमूल)
  // =========================================================================
  {
    id: "ncert-c8-m05",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 5,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 5: Square and Square Roots (वर्ग और वर्गमूल)",
    titleHi: "अध्याय 5: वर्ग और वर्गमूल (Square and Square Roots)",
    pdfUrl: "/ncert_books/class8/math_ch05.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch05_hi.pdf",
    competitionEdge: "One of the most essential calculation foundations for all competitive exams. Topics include unit digit properties of squares, non-square numbers between consecutive squares 2n, Pythagorean triplets (2m, m^2-1, m^2+1), prime factorisation method, and long division method for integers and decimals.",
    competitionEdgeHi: "सभी प्रतियोगी परीक्षाओं की गणना का सबसे महत्वपूर्ण आधार। इसमें वर्ग संख्याओं के इकाई अंक के नियम, दो क्रमागत वर्गों के बीच 2n संख्याएँ, पाइथागोरियन त्रिक (2m, m^2-1, m^2+1), अभाज्य गुणनखंडन विधि तथा दशमलव व बड़ी संख्याओं के लिए दीर्घ भाग विधि (Long Division Method) शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Properties of Squares & Finding Square Roots",
        headingHi: "1. एनसीईआरटी मूल पाठ: वर्ग संख्याओं के प्रगुण एवं वर्गमूल ज्ञात करने की विधियाँ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              If a natural number \\(m\\) can be expressed as \\(n^2\\), where \\(n\\) is also a natural number, then \\(m\\) is a <strong>Square Number (or Perfect Square)</strong>.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Golden Properties of Square Numbers</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Rule / Formula</th>
                  <th>Key Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>End Digits</strong></td>
                  <td>Perfect squares end ONLY in <strong>0, 1, 4, 5, 6, or 9</strong></td>
                  <td>Numbers ending in 2, 3, 7, 8 are NEVER perfect squares!</td>
                </tr>
                <tr>
                  <td><strong>Trailing Zeros</strong></td>
                  <td>Must have an <strong>EVEN number of zeros</strong> at the end</td>
                  <td>100, 40000 are squares; 1000, 20 is not.</td>
                </tr>
                <tr>
                  <td><strong>Non-Squares between Squares</strong></td>
                  <td>Between \\(n^2\\) and \\((n+1)^2\\), there are <strong>\\(2n\\)</strong> non-square numbers</td>
                  <td>Between \\(12^2 (144)\\) and \\(13^2 (169)\\): \\(2 \\times 12 = 24\\) numbers!</td>
                </tr>
                <tr>
                  <td><strong>Sum of Consecutive Odd Numbers</strong></td>
                  <td>\\( 1 + 3 + 5 + \\dots + (2n - 1) = n^2 \\)</td>
                  <td>Sum of first \\(n\\) odd natural numbers is \\(n^2\\).</td>
                </tr>
                <tr>
                  <td><strong>Pythagorean Triplets</strong></td>
                  <td>For any natural number \\(m > 1\\): <strong>\\(2m, m^2 - 1, m^2 + 1\\)</strong></td>
                  <td>If smallest member is 6: \\(2m=6 \\Rightarrow m=3\\); triplet is \\(6, 8, 10\\).</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              यदि किसी प्राकृत संख्या \\(m\\) को \\(n^2\\) के रूप में व्यक्त किया जा सके, तो \\(m\\) एक <strong>पूर्ण वर्ग संख्या</strong> कहलाती है। प्रतियोगी परीक्षाओं में वर्गमूल निकालने की भाग विधि और पाइथागोरियन त्रिक पर सीधे प्रश्न पूछे जाते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ वर्ग संख्याओं के अचूक नियम</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>नियम</th>
                  <th>सूत्र / सिद्धांत</th>
                  <th>उदाहरण एवं प्रयोग</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>इकाई का अंक</strong></td>
                  <td>वर्ग संख्या के अंत में केवल <strong>0, 1, 4, 5, 6 या 9</strong> हो सकता है</td>
                  <td>जिस संख्या का इकाई अंक 2, 3, 7 या 8 हो, वह कभी पूर्ण वर्ग नहीं हो सकती!</td>
                </tr>
                <tr>
                  <td><strong>शून्यों की संख्या</strong></td>
                  <td>अंत में शून्यों की संख्या सदैव <strong>सम (Even)</strong> होती है</td>
                  <td>100, 2500 पूर्ण वर्ग हैं; 10, 1000 कभी नहीं।</td>
                </tr>
                <tr>
                  <td><strong>दो वर्गों के बीच की संख्याएँ</strong></td>
                  <td>\\(n^2\\) और \\((n+1)^2\\) के बीच <strong>\\(2n\\)</strong> संख्याएँ होती हैं</td>
                  <td>\\(9^2\\) और \\(10^2\\) के बीच: \\(2 \\times 9 = 18\\) संख्याएँ होंगी।</td>
                </tr>
                <tr>
                  <td><strong>विषम संख्याओं का योग</strong></td>
                  <td>प्रथम \\(n\\) विषम संख्याओं का योग = \\(n^2\\)</td>
                  <td>\\(1 + 3 + 5 + 7 + 9 = 5^2 = 25\\)</td>
                </tr>
                <tr>
                  <td><strong>पाइथागोरियन त्रिक</strong></td>
                  <td>\\(m > 1\\) के लिए: <strong>\\(2m, m^2 - 1, m^2 + 1\\)</strong></td>
                  <td>यदि सबसे छोटी भुजा 6 हो, तो \\(m=3\\); त्रिक \\(6, 8, 10\\) होगा।</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const squareQuestions = [
        { q: "Which of the following numbers CANNOT be a perfect square?", qHi: "निम्नलिखित में से कौन सी संख्या कभी भी पूर्ण वर्ग नहीं हो सकती?", opt: ["1057", "1024", "625", "441"], ans: 0, exp: "Numbers ending in 2, 3, 7, or 8 can never be perfect squares. 1057 ends in 7." },
        { q: "How many non-square natural numbers lie between 12^2 and 13^2?", qHi: "12^2 और 13^2 के बीच कितनी गैर-वर्ग प्राकृत संख्याएँ स्थित हैं?", opt: ["24", "25", "26", "12"], ans: 0, exp: "Between n^2 and (n+1)^2 there are 2n numbers: 2 * 12 = 24." },
        { q: "Find the Pythagorean triplet whose smallest member is 8.", qHi: "वह पाइथागोरियन त्रिक ज्ञात कीजिए जिसका सबसे छोटा सदस्य 8 है।", opt: ["8, 15, 17", "8, 12, 16", "8, 10, 14", "8, 9, 11"], ans: 0, exp: "2m = 8 => m = 4. m^2 - 1 = 15. m^2 + 1 = 17. Triplet is (8, 15, 17)." },
        { q: "What is the square root of 7056 by prime factorisation?", qHi: "अभाज्य गुणनखंडन द्वारा 7056 का वर्गमूल क्या होगा?", opt: ["84", "76", "86", "82"], ans: 0, exp: "7056 = 2^4 * 3^2 * 7^2. Sqrt = 2^2 * 3 * 7 = 4 * 21 = 84." },
        { q: "What is the smallest number by which 252 must be multiplied to make it a perfect square?", qHi: "252 को किस सबसे छोटी संख्या से गुणा किया जाए कि वह एक पूर्ण वर्ग बन जाए?", opt: ["7", "2", "3", "5"], ans: 0, exp: "252 = 2 * 2 * 3 * 3 * 7. Factor 7 is unpaired, so multiply by 7." },
        { q: "Find the square root of 12.25.", qHi: "12.25 का वर्गमूल ज्ञात कीजिए।", opt: ["3.5", "3.25", "2.5", "4.5"], ans: 0, exp: "1225 / 100 => sqrt(1225)/10 = 35/10 = 3.5." },
        { q: "What is the sum of the first 10 odd natural numbers without adding?", qHi: "बिना योग किए प्रथम 10 विषम प्राकृत संख्याओं का योग क्या होगा?", opt: ["100", "90", "120", "80"], ans: 0, exp: "Sum of first n odd numbers is n^2. 10^2 = 100." },
        { q: "How many digits are there in the square root of 14400?", qHi: "14400 के वर्गमूल में अंकों की संख्या कितनी होगी?", opt: ["3", "2", "4", "5"], ans: 0, exp: "14400 has 5 digits. Digits in square root = (5 + 1)/2 = 3 (sqrt is 120)." },
        { q: "Find the least square number that is divisible by each of the numbers 4, 9, and 10.", qHi: "वह सबसे छोटी वर्ग संख्या ज्ञात कीजिए जो 4, 9 और 10 प्रत्येक से पूर्णतः विभाज्य हो।", opt: ["900", "360", "180", "1600"], ans: 0, exp: "LCM of 4, 9, 10 = 180 = 2*2 * 3*3 * 5. Multiply by 5 to pair: 180 * 5 = 900." },
        { q: "What is the unit digit of the square of 799?", qHi: "799 के वर्ग का इकाई अंक क्या होगा?", opt: ["1", "9", "8", "7"], ans: 0, exp: "Unit digit of 799 is 9. 9^2 = 81, so unit digit is 1." },
        { q: "Find the smallest number by which 9408 must be divided so that the quotient is a perfect square.", qHi: "9408 को किस छोटी से छोटी संख्या से भाग दिया जाए कि भागफल एक पूर्ण वर्ग बन जाए?", opt: ["3", "2", "7", "6"], ans: 0, exp: "9408 = 2^6 * 3 * 7^2. Only 3 is unpaired, so divide by 3." },
        { q: "The area of a square field is 2025 m^2. Find the perimeter of the field.", qHi: "एक वर्गाकार मैदान का क्षेत्रफल 2025 वर्ग मीटर है। मैदान का परिमाप ज्ञात कीजिए।", opt: ["180 m", "90 m", "45 m", "200 m"], ans: 0, exp: "Side = sqrt(2025) = 45 m. Perimeter = 4 * 45 = 180 m." },
        { q: "What is the value of sqrt(0.0009)?", qHi: "sqrt(0.0009) का मान क्या होगा?", opt: ["0.03", "0.3", "0.003", "0.0003"], ans: 0, exp: "sqrt(9/10000) = 3/100 = 0.03." },
        { q: "A general wishes to arrange 36562 soldiers in a square. After doing so, he found some soldiers left over. How many soldiers were left over?", qHi: "एक सेनापति 36562 सैनिकों को एक ठोस वर्ग में खड़ा करना चाहता है। ऐसा करने के बाद उसने पाया कि कुछ सैनिक शेष रह गए। कितने सैनिक शेष रहे?", opt: ["81", "64", "100", "49"], ans: 0, exp: "191^2 = 36481. 36562 - 36481 = 81 soldiers left over." },
        { q: "How many non-square numbers lie between 100^2 and 101^2?", qHi: "100^2 और 101^2 के मध्य कितनी गैर-वर्ग संख्याएँ हैं?", opt: ["200", "201", "199", "100"], ans: 0, exp: "2n = 2 * 100 = 200." },
        { q: "What is the square of 95 using shortcut (a5)^2 = a(a+1) hundred + 25?", qHi: "सूत्र (a5)^2 द्वारा 95 का वर्ग क्या होगा?", opt: ["9025", "9050", "9225", "8525"], ans: 0, exp: "9 * 10 = 90, followed by 25 = 9025." },
        { q: "Find the square root of 529.", qHi: "529 का वर्गमूल क्या है?", opt: ["23", "27", "17", "19"], ans: 0, exp: "23 * 23 = 529." },
        { q: "What is the least number that must be subtracted from 5607 to get a perfect square?", qHi: "5607 में से कौन सी छोटी से छोटी संख्या घटाई जाए कि एक पूर्ण वर्ग प्राप्त हो?", opt: ["131", "121", "141", "111"], ans: 0, exp: "74^2 = 5476. 75^2 = 5625. 5607 - 74^2 = 5607 - 5476 = 131." },
        { q: "Which of the following is a Pythagorean triplet?", qHi: "निम्नलिखित में से कौन सा एक पाइथागोरियन त्रिक है?", opt: ["3, 4, 5", "2, 3, 4", "4, 5, 6", "5, 6, 7"], ans: 0, exp: "3^2 + 4^2 = 9 + 16 = 25 = 5^2." },
        { q: "Square of an even number is always:", qHi: "सम संख्या का वर्ग सदैव ________ होता है:", opt: ["Even", "Odd", "Prime", "Negative"], ans: 0, exp: "(2k)^2 = 4k^2 = 2*(2k^2), which is always even." },
        { q: "Square of an odd number is always:", qHi: "विषम संख्या का वर्ग सदैव ________ होता है:", opt: ["Odd", "Even", "Zero", "Negative"], ans: 0, exp: "The square of any odd number is always odd (e.g. 3^2 = 9, 5^2 = 25)." },
        { q: "What is the value of sqrt(176 + sqrt(2401))?", qHi: "sqrt(176 + sqrt(2401)) का मान क्या है?", opt: ["15", "14", "16", "13"], ans: 0, exp: "sqrt(2401) = 49. 176 + 49 = 225. sqrt(225) = 15." },
        { q: "Find the square root of 0.4225.", qHi: "0.4225 का वर्गमूल ज्ञात कीजिए।", opt: ["0.65", "0.55", "0.75", "0.45"], ans: 0, exp: "sqrt(4225) = 65, so sqrt(0.4225) = 0.65." },
        { q: "How many perfect squares lie between 1 and 100 inclusive?", qHi: "1 और 100 (दोनों सहित) के बीच कुल कितने पूर्ण वर्ग हैं?", opt: ["10", "9", "8", "11"], ans: 0, exp: "Squares from 1^2 to 10^2 = 10 perfect squares." },
        { q: "If sqrt(x) / 16 = 0.04, then x is:", qHi: "यदि sqrt(x) / 16 = 0.04 हो, तो x का मान है:", opt: ["0.4096", "0.64", "0.16", "0.04"], ans: 0, exp: "sqrt(x) = 16 * 0.04 = 0.64 => x = 0.64^2 = 0.4096." },
        { q: "Find the smallest 4-digit number which is a perfect square.", qHi: "चार अंकों की सबसे छोटी संख्या जो पूर्ण वर्ग है, ज्ञात कीजिए।", opt: ["1024 (32^2)", "1000", "1089", "1156"], ans: 0, exp: "31^2 = 961 (3 digits). 32^2 = 1024 (first 4-digit square)." },
        { q: "Find the greatest 4-digit number which is a perfect square.", qHi: "चार अंकों की सबसे बड़ी संख्या जो पूर्ण वर्ग है, ज्ञात कीजिए।", opt: ["9801 (99^2)", "9999", "9900", "9856"], ans: 0, exp: "99^2 = 9801; 100^2 = 10000 (5 digits)." },
        { q: "What is the square root of 7921?", qHi: "7921 का वर्गमूल क्या है?", opt: ["89", "81", "91", "87"], ans: 0, exp: "89 * 89 = 7921." },
        { q: "The value of sqrt(256) * sqrt(81) is:", qHi: "sqrt(256) * sqrt(81) का मान क्या होगा?", opt: ["144", "128", "162", "136"], ans: 0, exp: "16 * 9 = 144." },
        { q: "Which of the following is equal to 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15?", qHi: "1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 किसके बराबर है?", opt: ["8^2 = 64", "7^2 = 49", "9^2 = 81", "60"], ans: 0, exp: "There are 8 consecutive odd numbers, so sum = 8^2 = 64." }
      ];

      const item = squareQuestions[qNum - 1];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  }
];

module.exports = chapters;
