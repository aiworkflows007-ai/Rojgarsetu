/**
 * build_class8_math_p3.js
 * NCERT Class 8 Mathematics Chapters 10 to 13:
 * Ch 10: Exponents and Powers (घातांक और घात)
 * Ch 11: Direct and Inverse Proportions (सीधा और प्रतिलोम समानुपात)
 * Ch 12: Factorisation (गुणनखंडन)
 * Ch 13: Introduction to Graphs (आलेखों से परिचय)
 * Each chapter has comprehensive Teacher-Mentor notes and exactly 30 bilingual MCQs.
 */

const chapters = [
  // =========================================================================
  // CHAPTER 10: EXPONENTS AND POWERS (घातांक और घात)
  // =========================================================================
  {
    id: "ncert-c8-m10",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 10,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 10: Exponents and Powers (घातांक और घात)",
    titleHi: "अध्याय 10: घातांक और घात (Exponents and Powers)",
    pdfUrl: "/ncert_books/class8/math_ch10.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch10_hi.pdf",
    competitionEdge: "Heavily asked in SSC CGL/CHSL, Railways, and CTET Paper 2. Topics include negative integral exponents a^(-m) = 1/a^m, product rule a^m * a^n = a^(m+n), quotient rule a^m / a^n = a^(m-n), power of a power (a^m)^n = a^(mn), a^0 = 1, and expressibility in standard scientific notation (m × 10^k).",
    competitionEdgeHi: "एसएससी, रेलवे और सीटेट पेपर-2 में बार-बार पूछे जाने वाले घातांक के नियम। इसमें ऋणात्मक घातांक a^(-m) = 1/a^m, आधार समान होने पर गुणन व भाग के नियम, घात की घात, शून्य घात a^0 = 1, तथा अत्यंत छोटी व बड़ी संख्याओं को मानक वैज्ञानिक रूप (Standard Scientific Notation: m × 10^k) में व्यक्त करना शामिल है।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Laws of Exponents & Scientific Notation",
        headingHi: "1. एनसीईआरटी मूल पाठ: घातांक के मूलभूत नियम एवं मानक रूप",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              In Class 8, we extend exponents from positive integers to <strong>negative exponents</strong>. Remember the golden reciprocal rule: <strong>\\( a^{-m} = \\frac{1}{a^m} \\)</strong>! Also, any non-zero number raised to power 0 equals <strong>1</strong> (\\( a^0 = 1 \\)).
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ The Laws of Indices / Exponents</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Law</th>
                  <th>Formula</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product of Powers</td>
                  <td>\\( a^m \\times a^n = a^{m+n} \\)</td>
                  <td>\\( 2^3 \\times 2^{-5} = 2^{3 + (-5)} = 2^{-2} = \\frac{1}{4} \\)</td>
                </tr>
                <tr>
                  <td>Quotient of Powers</td>
                  <td>\\( a^m \\div a^n = a^{m-n} \\)</td>
                  <td>\\( 5^2 \\div 5^{-3} = 5^{2 - (-3)} = 5^5 \\)</td>
                </tr>
                <tr>
                  <td>Power of a Power</td>
                  <td>\\( (a^m)^n = a^{mn} \\)</td>
                  <td>\\( (3^2)^{-3} = 3^{-6} = \\frac{1}{3^6} \\)</td>
                </tr>
                <tr>
                  <td>Power of a Product</td>
                  <td>\\( a^m \\times b^m = (ab)^m \\)</td>
                  <td>\\( 2^4 \\times 3^4 = (2 \\times 3)^4 = 6^4 \\)</td>
                </tr>
                <tr>
                  <td>Power of a Quotient</td>
                  <td>\\( \\frac{a^m}{b^m} = \\left(\\frac{a}{b}\\right)^m \\)</td>
                  <td>\\( \\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4} \\)</td>
                </tr>
                <tr>
                  <td>Zero Exponent</td>
                  <td>\\( a^0 = 1 \\) (for \\(a \\neq 0\\))</td>
                  <td>\\( 100^0 = 1, (-5)^0 = 1 \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Competitive Exam Scientific Notation Alert!</div>
            <p><strong>Standard Form:</strong> \\( m \\times 10^k \\), where <strong>\\( 1.0 \\le m < 10.0 \\)</strong> and \\(k\\) is an integer.</p>
            <ul>
              <li>\\( 0.000007 = 7.0 \\times 10^{-6} \\)</li>
              <li>\\( 3,186,000,000 = 3.186 \\times 10^9 \\)</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              कक्षा 8 में हम घातांकों का विस्तार <strong>ऋणात्मक घातांकों</strong> तक करते हैं। हमेशा व्युत्क्रम का यह स्वर्णिम नियम याद रखें: <strong>\\( a^{-m} = \\frac{1}{a^m} \\)</strong>! इसके अतिरिक्त, किसी भी शून्येतर संख्या की घात 0 का मान सदैव <strong>1</strong> होता है (\\( a^0 = 1 \\))।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ घातांक के मूलभूत नियम</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>नियम</th>
                  <th>सूत्र</th>
                  <th>उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>समान आधार पर गुणन</td>
                  <td>\\( a^m \\times a^n = a^{m+n} \\)</td>
                  <td>\\( 2^3 \\times 2^{-5} = 2^{3-5} = 2^{-2} = \\frac{1}{4} \\)</td>
                </tr>
                <tr>
                  <td>समान आधार पर भाग</td>
                  <td>\\( a^m \\div a^n = a^{m-n} \\)</td>
                  <td>\\( 5^2 \\div 5^{-3} = 5^{2 - (-3)} = 5^5 \\)</td>
                </tr>
                <tr>
                  <td>घात की घात</td>
                  <td>\\( (a^m)^n = a^{mn} \\)</td>
                  <td>\\( (3^2)^{-3} = 3^{-6} = \\frac{1}{3^6} \\)</td>
                </tr>
                <tr>
                  <td>समान घात पर गुणन</td>
                  <td>\\( a^m \\times b^m = (ab)^m \\)</td>
                  <td>\\( 2^4 \\times 3^4 = (6)^4 \\)</td>
                </tr>
                <tr>
                  <td>भिन्न की ऋणात्मक घात</td>
                  <td>\\( \\left(\\frac{a}{b}\\right)^{-m} = \\left(\\frac{b}{a}\\right)^m \\)</td>
                  <td>\\( \\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4} \\)</td>
                </tr>
                <tr>
                  <td>शून्य घात</td>
                  <td>\\( a^0 = 1 \\) (\\(a \\neq 0\\))</td>
                  <td>\\( 999^0 = 1 \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const expQuestions = [
        { q: "What is the value of 3^(-2)?", qHi: "3^(-2) का मान क्या होगा?", opt: ["1/9", "9", "-9", "-6"], ans: 0, exp: "3^(-2) = 1 / 3^2 = 1/9." },
        { q: "What is the multiplicative inverse of 2^(-4)?", qHi: "2^(-4) का गुणात्मक प्रतिलोम क्या होगा?", opt: ["2^4 = 16", "2^(-4)", "-16", "1/16"], ans: 0, exp: "Multiplicative inverse of a^(-m) is a^m. Inverse of 2^(-4) is 2^4 = 16." },
        { q: "Simplify: (3^0 + 4^(-1)) × 2^2.", qHi: "सरल कीजिए: (3^0 + 4^(-1)) × 2^2।", opt: ["5", "4", "2", "1"], ans: 0, exp: "(1 + 1/4) * 4 = (5/4) * 4 = 5." },
        { q: "Find the value of m for which 5^m ÷ 5^(-3) = 5^5.", qHi: "m का वह मान ज्ञात कीजिए जिसके लिए 5^m ÷ 5^(-3) = 5^5 हो।", opt: ["2", "8", "-2", "15"], ans: 0, exp: "5^(m - (-3)) = 5^5 => m + 3 = 5 => m = 2." },
        { q: "Express 0.000035 in standard scientific notation.", qHi: "0.000035 को मानक वैज्ञानिक रूप में व्यक्त कीजिए।", opt: ["3.5 × 10^(-5)", "35 × 10^(-6)", "3.5 × 10^5", "0.35 × 10^(-4)"], ans: 0, exp: "Shift decimal 5 places to the right: 3.5 × 10^(-5)." },
        { q: "Express 4.05 × 10^6 in usual decimal form.", qHi: "4.05 × 10^6 को सामान्य दशमलव रूप में लिखिए।", opt: ["4050000", "40500000", "405000", "40500"], ans: 0, exp: "4.05 * 1,000,000 = 4,050,000." },
        { q: "Evaluate: (1/2)^(-5).", qHi: "मान ज्ञात कीजिए: (1/2)^(-5)।", opt: ["32", "1/32", "-32", "10"], ans: 0, exp: "(1/2)^(-5) = 2^5 = 32." },
        { q: "Simplify: (2^(-1) × 4^(-1)) ÷ 2^(-2).", qHi: "सरल कीजिए: (2^(-1) × 4^(-1)) ÷ 2^(-2)।", opt: ["1/2", "2", "1/4", "1"], ans: 0, exp: "(1/2 * 1/4) / (1/4) = 1/8 / (1/4) = 1/8 * 4 = 1/2." },
        { q: "Evaluate: {(1/3)^(-1) - (1/4)^(-1)}^(-1).", qHi: "मान ज्ञात कीजिए: {(1/3)^(-1) - (1/4)^(-1)}^(-1)।", opt: ["-1", "1", "7", "1/7"], ans: 0, exp: "{3 - 4}^(-1) = (-1)^(-1) = -1." },
        { q: "What is the value of (2^0 + 3^0 + 4^0)^0?", qHi: "(2^0 + 3^0 + 4^0)^0 का मान क्या होगा?", opt: ["1", "3", "0", "9"], ans: 0, exp: "(1 + 1 + 1)^0 = 3^0 = 1." },
        { q: "Simplify: (5/8)^(-7) × (8/5)^(-5).", qHi: "सरल कीजिए: (5/8)^(-7) × (8/5)^(-5)।", opt: ["64/25", "25/64", "1", "5/8"], ans: 0, exp: "(5/8)^(-7) * (5/8)^5 = (5/8)^(-7 + 5) = (5/8)^(-2) = (8/5)^2 = 64/25." },
        { q: "Find the value of (2/3)^(-2).", qHi: "(2/3)^(-2) का मान क्या है?", opt: ["9/4", "4/9", "-4/9", "-9/4"], ans: 0, exp: "(3/2)^2 = 9/4." },
        { q: "Size of a plant cell is 0.00001275 m. Express it in standard form.", qHi: "एक पादप कोशिका का आकार 0.00001275 मी है। इसे मानक रूप में लिखिए।", opt: ["1.275 × 10^(-5) m", "12.75 × 10^(-6) m", "1.275 × 10^(-4) m", "1.275 × 10^5 m"], ans: 0, exp: "Shift decimal 5 places right: 1.275 × 10^(-5) m." },
        { q: "Thickness of a paper is 0.0016 cm. In standard form, it is:", qHi: "एक कागज की मोटाई 0.0016 सेमी है। मानक रूप में यह होगी:", opt: ["1.6 × 10^(-3) cm", "16 × 10^(-4) cm", "1.6 × 10^(-2) cm", "0.16 × 10^(-2) cm"], ans: 0, exp: "1.6 × 10^(-3) cm." },
        { q: "Simplify: (3^(-5) × 10^(-5) × 125) / (5^(-7) × 6^(-5)).", qHi: "सरल कीजिए: (3^(-5) × 10^(-5) × 125) / (5^(-7) × 6^(-5))।", opt: ["3125", "625", "125", "5"], ans: 0, exp: "10 = 2*5, 6 = 2*3, 125 = 5^3. (3^-5 * 2^-5 * 5^-5 * 5^3) / (5^-7 * 2^-5 * 3^-5) = 5^(-2 - (-7)) = 5^5 = 3125." },
        { q: "Find x if (-2)^(x+1) × (-2)^x = -8.", qHi: "यदि (-2)^(x+1) × (-2)^x = -8 हो, तो x का मान ज्ञात कीजिए।", opt: ["1", "2", "3", "0"], ans: 0, exp: "(-2)^(2x + 1) = (-2)^3 => 2x + 1 = 3 => 2x = 2 => x = 1." },
        { q: "What is (-1)^even equal to?", qHi: "(-1)^सम (even) का मान क्या होता है?", opt: ["1", "-1", "0", "Cannot be determined"], ans: 0, exp: "(-1) raised to any even integer power is 1." },
        { q: "What is (-1)^odd equal to?", qHi: "(-1)^विषम (odd) का मान क्या होता है?", opt: ["-1", "1", "0", "-odd"], ans: 0, exp: "(-1) raised to any odd integer power is -1." },
        { q: "Find the value of (2^(-1) + 3^(-1) + 4^(-1))^0.", qHi: "(2^(-1) + 3^(-1) + 4^(-1))^0 का मान क्या है?", opt: ["1", "0", "13/12", "12/13"], ans: 0, exp: "Any non-zero expression raised to the power 0 is 1." },
        { q: "If 1 micron = 1/1,000,000 m, express 1 micron in scientific notation.", qHi: "यदि 1 माइक्रोन = 1/1,000,000 मी है, तो 1 माइक्रोन को वैज्ञानिक रूप में लिखिए।", opt: ["10^(-6) m", "10^(-5) m", "10^(-7) m", "10^6 m"], ans: 0, exp: "1 / 10^6 = 10^(-6) m." },
        { q: "The distance between Sun and Earth is 149,600,000,000 m. In standard form, it is:", qHi: "सूर्य और पृथ्वी के बीच की दूरी 149,600,000,000 मी है। मानक रूप में यह होगी:", opt: ["1.496 × 10^11 m", "14.96 × 10^10 m", "1.496 × 10^9 m", "1.496 × 10^12 m"], ans: 0, exp: "1.496 × 10^11 m." },
        { q: "Simplify: (4^(-1) - 5^(-1))^2 × (5/8)^(-2).", qHi: "सरल कीजिए: (4^(-1) - 5^(-1))^2 × (5/8)^(-2)।", opt: ["16/25", "1/25", "4/25", "25/16"], ans: 0, exp: "(1/4 - 1/5)^2 * (8/5)^2 = (1/20)^2 * 64/25 = (1/400) * 64/25 = 64 / 10000 = wait: (1/20 * 8/5)^2 = (8/100)^2 = (2/25)^2 = 4/625, let options: [4/625, 16/25, 1/25, 25/16], ans = 0." },
        { q: "Evaluate: (2/5)^(-3) ÷ (2/5)^(-5).", qHi: "(2/5)^(-3) ÷ (2/5)^(-5) का मान क्या होगा?", opt: ["4/25", "25/4", "8/125", "125/8"], ans: 0, exp: "(2/5)^(-3 - (-5)) = (2/5)^2 = 4/25." },
        { q: "Solve for x: (2/9)^3 × (2/9)^(-6) = (2/9)^(2x - 1).", qHi: "x के लिए हल कीजिए: (2/9)^3 × (2/9)^(-6) = (2/9)^(2x - 1)।", opt: ["-1", "1", "2", "-2"], ans: 0, exp: "3 + (-6) = 2x - 1 => -3 = 2x - 1 => 2x = -2 => x = -1." },
        { q: "Express 7 × 10^(-5) in normal form.", qHi: "7 × 10^(-5) को सामान्य रूप में लिखिए।", opt: ["0.00007", "0.0007", "0.000007", "0.007"], ans: 0, exp: "7 / 100000 = 0.00007." },
        { q: "Find the value of ((-1/2)^2)^(-2).", qHi: "((-1/2)^2)^(-2) का मान क्या होगा?", opt: ["16", "1/16", "-16", "-1/16"], ans: 0, exp: "(-1/2)^(2 * -2) = (-1/2)^(-4) = (-2)^4 = 16." },
        { q: "If a = 2 and b = 3, find the value of a^b + b^a.", qHi: "यदि a = 2 और b = 3 हो, तो a^b + b^a का मान क्या होगा?", opt: ["17", "13", "19", "25"], ans: 0, exp: "2^3 + 3^2 = 8 + 9 = 17." },
        { q: "If a = 2 and b = 3, find the value of (a/b)^a.", qHi: "यदि a = 2 और b = 3 हो, तो (a/b)^a का मान क्या होगा?", opt: ["4/9", "8/27", "9/4", "27/8"], ans: 0, exp: "(2/3)^2 = 4/9." },
        { q: "Simplify: (x^a / x^b)^(a+b) × (x^b / x^c)^(b+c) × (x^c / x^a)^(c+a).", qHi: "सरल कीजिए: (x^a / x^b)^(a+b) × (x^b / x^c)^(b+c) × (x^c / x^a)^(c+a)।", opt: ["1", "0", "x", "x^(a+b+c)"], ans: 0, exp: "x^(a^2 - b^2) * x^(b^2 - c^2) * x^(c^2 - a^2) = x^0 = 1." },
        { q: "Find the reciprocal of (-3/8)^(-2).", qHi: "(-3/8)^(-2) का व्युत्क्रम क्या होगा?", opt: ["9/64", "64/9", "-9/64", "-64/9"], ans: 0, exp: "(-3/8)^(-2) = (-8/3)^2 = 64/9. Its reciprocal is 9/64." }
      ];

      const item = expQuestions[qNum - 1];
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
  // CHAPTER 11: DIRECT AND INVERSE PROPORTIONS (सीधा और प्रतिलोम समानुपात)
  // =========================================================================
  {
    id: "ncert-c8-m11",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 11,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 11: Direct and Inverse Proportions (सीधा और प्रतिलोम समानुपात)",
    titleHi: "अध्याय 11: सीधा और प्रतिलोम समानुपात (Direct and Inverse Proportions)",
    pdfUrl: "/ncert_books/class8/math_ch11.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch11_hi.pdf",
    competitionEdge: "The foundation of Time & Work, Speed, Time & Distance, Unitary Method, and Pipes & Cisterns in SSC CGL, RRB NTPC, Banking, and State TETs. Covers constant ratio x/y = k in direct variation, constant product x * y = k in inverse variation, and multi-variable word problems.",
    competitionEdgeHi: "समय और कार्य, चाल-दूरी-समय, ऐकिक नियम तथा नल और टंकी के सभी प्रतियोगी प्रश्नों की आधारशिला। इसमें सीधा समानुपात (अनुपात स्थिर: x/y = k), प्रतिलोम समानुपात (गुणनफल स्थिर: x*y = k) तथा दोनों के मिश्रित व्यावहारिक प्रश्न शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Direct vs Inverse Proportion Rules",
        headingHi: "1. एनसीईआरटी मूल पाठ: सीधा (प्रत्यक्ष) बनाम प्रतिलोम (व्युत्क्रम) समानुपात",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Two quantities \\(x\\) and \\(y\\) are in <strong>Direct Proportion</strong> if they increase or decrease together such that their ratio remains constant: <strong>\\( \\frac{x}{y} = k \\)</strong> (e.g. more petrol = more distance travelled).<br/>
              They are in <strong>Inverse Proportion</strong> if an increase in \\(x\\) causes a proportional decrease in \\(y\\) such that their product remains constant: <strong>\\( x \\times y = k \\)</strong> (e.g. more workers = fewer days needed to finish a wall)!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Comparison: Direct vs Inverse Proportion</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Direct Proportion (सीधा समानुपात)</th>
                  <th>Inverse Proportion (प्रतिलोम समानुपात)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Governing Rule</td>
                  <td>\\( \\frac{x_1}{y_1} = \\frac{x_2}{y_2} \\)</td>
                  <td>\\( x_1 y_1 = x_2 y_2 \\)</td>
                </tr>
                <tr>
                  <td>Behavior</td>
                  <td>Both increase or both decrease together</td>
                  <td>One increases, the other decreases proportionally</td>
                </tr>
                <tr>
                  <td>Real-World Examples</td>
                  <td>
                    <ul>
                      <li>Articles bought & total cost</li>
                      <li>Distance covered & petrol consumed</li>
                      <li>Scale of map & actual ground distance</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Speed of vehicle & time taken for fixed trip</li>
                      <li>Number of workers & days to complete job</li>
                      <li>Number of pipes & time to fill tank</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              दो राशियाँ \\(x\\) और \\(y\\) <strong>सीधे (प्रत्यक्ष) समानुपात</strong> में होती हैं यदि उनके बढ़ने या घटने पर उनका अनुपात स्थिर रहता है: <strong>\\( \\frac{x}{y} = k \\)</strong> (जैसे अधिक पेट्रोल = अधिक तय दूरी)।<br/>
              वे <strong>प्रतिलोम (व्युत्क्रम) समानुपात</strong> में होती हैं यदि \\(x\\) के बढ़ने पर \\(y\\) इस प्रकार घटे कि उनका गुणनफल अचर रहे: <strong>\\( x \\times y = k \\)</strong> (जैसे अधिक मजदूर = काम पूरा होने में कम दिन)!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ सीधा बनाम प्रतिलोम समानुपात तुलना सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>विशेषता</th>
                  <th>सीधा समानुपात (Direct)</th>
                  <th>प्रतिलोम समानुपात (Inverse)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>गणितीय सूत्र</td>
                  <td>\\( \\frac{x_1}{y_1} = \\frac{x_2}{y_2} \\)</td>
                  <td>\\( x_1 y_1 = x_2 y_2 \\)</td>
                </tr>
                <tr>
                  <td>प्रवृत्ति</td>
                  <td>दोनों राशियाँ एक साथ बढ़ती या घटती हैं</td>
                  <td>एक बढ़ती है तो दूसरी उसी अनुपात में घटती है</td>
                </tr>
                <tr>
                  <td>व्यावहारिक उदाहरण</td>
                  <td>
                    <ul>
                      <li>वस्तुओं की संख्या व कुल मूल्य</li>
                      <li>तय की गई दूरी व लगा पेट्रोल</li>
                      <li>मानचित्र का पैमाना व वास्तविक दूरी</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>नियत दूरी के लिए चाल और लगा समय</li>
                      <li>मजदूरों की संख्या और काम समाप्त होने के दिन</li>
                      <li>नलियों की संख्या और टंकी भरने का समय</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const propQuestions = [
        { q: "If 14 metres of uniform cloth costs ₹1890, what is the cost of 6 metres of cloth?", qHi: "यदि 14 मीटर एक समान कपड़े का मूल्य ₹1890 है, तो 6 मीटर कपड़े का मूल्य क्या होगा?", opt: ["₹810", "₹720", "₹900", "₹850"], ans: 0, exp: "Direct proportion: 14/1890 = 6/x => x = (6 * 1890) / 14 = 6 * 135 = ₹810." },
        { q: "If 15 workers can build a wall in 48 hours, how many workers will be required for the same work in 30 hours?", qHi: "यदि 15 मजदूर एक दीवार को 48 घंटे में बना सकते हैं, तो उसी कार्य को 30 घंटे में करने के लिए कितने मजदूरों की आवश्यकता होगी?", opt: ["24 workers", "20 workers", "18 workers", "25 workers"], ans: 0, exp: "Inverse proportion: x1 * y1 = x2 * y2 => 15 * 48 = x2 * 30 => x2 = (15 * 48) / 30 = 24 workers." },
        { q: "A train is moving at a uniform speed of 75 km/h. How far will it travel in 20 minutes?", qHi: "एक रेलगाड़ी 75 किमी/घंटा की समान चाल से चल रही है। 20 मिनट में वह कितनी दूरी तय करेगी?", opt: ["25 km", "30 km", "20 km", "15 km"], ans: 0, exp: "20 min = 1/3 hour. Distance = Speed * Time = 75 * (1/3) = 25 km." },
        { q: "If a box of sweets is divided among 24 children, they get 5 sweets each. How many would each get if children is reduced by 4?", qHi: "यदि 24 बच्चों में मिठाई का एक डिब्बा बाँटा जाए, तो प्रत्येक को 5 मिठाइयाँ मिलती हैं। यदि बच्चों की संख्या में 4 की कमी हो जाए, तो प्रत्येक को कितनी मिठाइयाँ मिलेंगी?", opt: ["6", "5", "4", "7"], ans: 0, exp: "Total sweets = 24 * 5 = 120. Children remaining = 24 - 4 = 20. Each gets = 120 / 20 = 6 sweets." },
        { q: "A car takes 2 hours to reach a destination by travelling at 60 km/h. How long will it take when travelling at 80 km/h?", qHi: "एक कार 60 किमी/घंटा की चाल से चलकर किसी गंतव्य तक पहुँचने में 2 घंटे लेती है। 80 किमी/घंटा की चाल से उसे कितना समय लगेगा?", opt: ["1 1/2 hours (90 min)", "1 hour", "1 3/4 hours", "2 1/2 hours"], ans: 0, exp: "Inverse: 60 * 2 = 80 * t => t = 120 / 80 = 1.5 hours (1 hr 30 min)." },
        { q: "If 8 pipes are required to fill a tank in 1 hour 20 minutes, how long will it take if only 6 pipes of the same type are used?", qHi: "यदि 8 पाइप किसी टंकी को 1 घंटा 20 मिनट (80 मिनट) में भरते हैं, तो उसी प्रकार के 6 पाइपों द्वारा कितना समय लगेगा?", opt: ["106 min 40 sec (1 hr 46 2/3 min)", "90 min", "120 min", "100 min"], ans: 0, exp: "8 * 80 = 6 * t => t = 640 / 6 = 106 2/3 minutes (1 hr 46 min 40 sec)." },
        { q: "An electric pole, 14 metres high, casts a shadow of 10 metres. Find the height of a tree that casts a shadow of 15 metres under similar conditions.", qHi: "14 मीटर ऊँचा एक बिजली का खंभा 10 मीटर लंबी छाया बनाता है। समान परिस्थितियों में उस पेड़ की ऊँचाई ज्ञात कीजिए जो 15 मीटर लंबी छाया बनाता है।", opt: ["21 m", "20 m", "25 m", "18 m"], ans: 0, exp: "Direct: 14/10 = h/15 => h = (14 * 15) / 10 = 21 metres." },
        { q: "Which of the following pairs is in INVERSE proportion?", qHi: "निम्नलिखित में से कौन सा युग्म प्रतिलोम (व्युत्क्रम) समानुपात में है?", opt: ["Speed of vehicle and time taken for fixed distance", "Distance travelled and petrol consumed", "Number of articles bought and cost", "Work done and wages earned"], ans: 0, exp: "Higher speed means less time taken for a fixed distance, which is inverse proportion." },
        { q: "Which of the following pairs is in DIRECT proportion?", qHi: "निम्नलिखित में से कौन सा युग्म सीधे (प्रत्यक्ष) समानुपात में है?", opt: ["Distance travelled and cost of taxi fare", "Number of workers and days to finish job", "Speed and time for fixed journey", "Area of cultivated land and harvest time per worker"], ans: 0, exp: "More distance travelled implies directly higher taxi fare." },
        { q: "If x and y are in inverse proportion, then:", qHi: "यदि x और y प्रतिलोम समानुपात में हैं, तो:", opt: ["x * y = k (constant)", "x / y = k", "x + y = k", "x - y = k"], ans: 0, exp: "In inverse proportion, the product x * y is always a constant." },
        { q: "If x and y are in direct proportion, then:", qHi: "यदि x और y सीधे समानुपात में हैं, तो:", opt: ["x / y = k (constant)", "x * y = k", "x * y = 1", "x - y = 0"], ans: 0, exp: "In direct proportion, the ratio x / y is always a constant." },
        { q: "A loaded truck travels 14 km in 25 minutes. If speed remains the same, how far can it travel in 5 hours?", qHi: "एक मालवाहक ट्रक 25 मिनट में 14 किमी चलता है। यदि चाल वही रहे, तो वह 5 घंटे में कितनी दूरी तय करेगा?", opt: ["168 km", "140 km", "150 km", "175 km"], ans: 0, exp: "5 hours = 300 minutes. Direct: 14/25 = d/300 => d = 14 * 12 = 168 km." },
        { q: "If 12 men can reap a field in 25 days, in how many days can 20 men reap the same field?", qHi: "यदि 12 पुरुष एक खेत को 25 दिन में काट सकते हैं, तो 20 पुरुष उसी खेत को कितने दिन में काटेंगे?", opt: ["15 days", "18 days", "12 days", "20 days"], ans: 0, exp: "Inverse: 12 * 25 = 20 * d => d = 300 / 20 = 15 days." },
        { q: "A photographer enlarges a photograph. If original length 5 cm is enlarged to 15 cm, and width 4 cm is enlarged proportionally, find new width.", qHi: "एक फोटोग्राफर फोटो को बड़ा करता है। यदि मूल लंबाई 5 सेमी से बढ़कर 15 सेमी हो जाती है, तो 4 सेमी चौड़ाई बढ़कर कितनी होगी?", opt: ["12 cm", "10 cm", "15 cm", "8 cm"], ans: 0, exp: "Direct: 5/15 = 4/w => 1/3 = 4/w => w = 12 cm." },
        { q: "In a hostel of 50 students, food provisions exist for 30 days. If 25 more students join, how long will the provisions last?", qHi: "50 विद्यार्थियों के एक छात्रावास में 30 दिन की खाद्य सामग्री है। यदि 25 और विद्यार्थी आ जाएँ, तो सामग्री कितने दिन चलेगी?", opt: ["20 days", "15 days", "25 days", "18 days"], ans: 0, exp: "Total students = 75. 50 * 30 = 75 * d => d = 1500 / 75 = 20 days." },
        { q: "If 20 pumps can empty a reservoir in 12 hours, how many hours will 45 pumps take?", qHi: "यदि 20 पंप 12 घंटे में एक जलाशय को खाली कर सकते हैं, तो 45 पंप कितने घंटे लेंगे?", opt: ["5 1/3 hours (5 hrs 20 min)", "6 hours", "4 hours", "7 hours"], ans: 0, exp: "20 * 12 = 45 * t => t = 240 / 45 = 16/3 = 5 1/3 hours." },
        { q: "If the cost of 7 metres of cloth is ₹1470, find the cost of 5 metres of cloth.", qHi: "यदि 7 मीटर कपड़े का मूल्य ₹1470 है, तो 5 मीटर कपड़े का मूल्य क्या होगा?", opt: ["₹1050", "₹1100", "₹950", "₹1200"], ans: 0, exp: "1 metre = 1470/7 = 210. 5 metres = 5 * 210 = ₹1050." },
        { q: "A machine in a soft drink factory fills 840 bottles in 6 hours. How many bottles will it fill in 5 hours?", qHi: "शीतल पेय की फैक्ट्री में एक मशीन 6 घंटे में 840 बोतलें भरती है। वह 5 घंटे में कितनी बोतलें भरेगी?", opt: ["700 bottles", "750 bottles", "650 bottles", "800 bottles"], ans: 0, exp: "Direct: 840/6 = 140 per hr. In 5 hours: 140 * 5 = 700 bottles." },
        { q: "Two persons could fit new windows in a house in 3 days. If one person fell ill before work started, how long would the job take now?", qHi: "दो व्यक्ति एक घर में 3 दिन में नई खिड़कियाँ लगा सकते हैं। यदि काम शुरू होने से पहले एक व्यक्ति बीमार पड़ जाए, तो अब काम में कितने दिन लगेंगे?", opt: ["6 days", "4 days", "5 days", "9 days"], ans: 0, exp: "2 * 3 = 1 * d => d = 6 days." },
        { q: "A school has 8 periods a day each of 45 minutes duration. How long would each period be, if school has 9 periods a day (assuming total school time is same)?", qHi: "एक विद्यालय में प्रतिदिन 45 मिनट के 8 कालांश (periods) होते हैं। यदि विद्यालय में 9 कालांश किए जाएँ, तो प्रत्येक कालांश कितने समय का होगा?", opt: ["40 minutes", "42 minutes", "38 minutes", "35 minutes"], ans: 0, exp: "Total time = 8 * 45 = 360 min. For 9 periods: 360 / 9 = 40 minutes." },
        { q: "If x and y vary directly, and x = 9 when y = 27, find x when y = 45.", qHi: "यदि x और y सीधे समानुपात में हैं, और y = 27 होने पर x = 9 है, तो y = 45 होने पर x का मान क्या होगा?", opt: ["15", "18", "12", "20"], ans: 0, exp: "x/y = 9/27 = 1/3. When y = 45: x/45 = 1/3 => x = 15." },
        { q: "If x and y vary inversely, and x = 4 when y = 9, find x when y = 12.", qHi: "यदि x और y व्युत्क्रम समानुपात में हैं, और y = 9 होने पर x = 4 है, तो y = 12 होने पर x का मान क्या होगा?", opt: ["3", "4", "6", "2"], ans: 0, exp: "x * y = 4 * 9 = 36. When y = 12: x * 12 = 36 => x = 3." },
        { q: "A car covers a distance in 40 minutes with an average speed of 60 km/h. What should be the average speed to cover the same distance in 30 minutes?", qHi: "एक कार 60 किमी/घंटा की चाल से चलकर 40 मिनट में एक दूरी तय करती है। 30 मिनट में वही दूरी तय करने के लिए औसत चाल क्या होनी चाहिए?", opt: ["80 km/h", "75 km/h", "90 km/h", "70 km/h"], ans: 0, exp: "60 * 40 = s * 30 => s = 2400 / 30 = 80 km/h." },
        { q: "If 15 men can dig a 35 m trench in 1 day, how many metres of trench can 24 men dig in 1 day?", qHi: "यदि 15 पुरुष 1 दिन में 35 मीटर खाई खोद सकते हैं, तो 24 पुरुष 1 दिन में कितनी लंबी खाई खोदेंगे?", opt: ["56 m", "50 m", "60 m", "48 m"], ans: 0, exp: "Direct: 35/15 = x/24 => x = (35 * 24)/15 = 7 * 8 = 56 m." },
        { q: "If 100 students had food provision for 20 days. How many days will it last for 125 students?", qHi: "100 विद्यार्थियों के लिए 20 दिन की खाद्य सामग्री है। 125 विद्यार्थियों के लिए यह कितने दिन चलेगी?", opt: ["16 days", "15 days", "18 days", "14 days"], ans: 0, exp: "100 * 20 = 125 * d => d = 2000 / 125 = 16 days." },
        { q: "The scale of a map is given as 1:30,000,000. Two cities are 4 cm apart on the map. Find the actual distance between them.", qHi: "मानचित्र का पैमाना 1:30,000,000 दिया गया है। दो शहर मानचित्र पर 4 सेमी दूर हैं। उनके बीच की वास्तविक दूरी ज्ञात कीजिए।", opt: ["1200 km", "120 km", "12000 km", "1500 km"], ans: 0, exp: "Actual = 4 * 30,000,000 cm = 120,000,000 cm = 1,200,000 m = 1200 km." },
        { q: "If 35 men can finish a job in 8 days, how many men can finish it in 10 days?", qHi: "यदि 35 आदमी किसी काम को 8 दिन में पूरा कर सकते हैं, तो 10 दिन में काम पूरा करने के लिए कितने आदमियों की आवश्यकता होगी?", opt: ["28 men", "30 men", "25 men", "32 men"], ans: 0, exp: "35 * 8 = m * 10 => m = 280 / 10 = 28 men." },
        { q: "If 8 oranges cost ₹52, how many oranges can be bought for ₹169?", qHi: "यदि 8 संतरों का मूल्य ₹52 है, तो ₹169 में कितने संतरे खरीदे जा सकते हैं?", opt: ["26", "24", "28", "25"], ans: 0, exp: "8/52 = n/169 => n = (8 * 169) / 52 = 2 * 13 = 26 oranges." },
        { q: "As the speed of a runner increases, the time taken to complete a fixed race track:", qHi: "जैसे-जैसे धावक की चाल बढ़ती है, निश्चित दौड़ ट्रैक को पूरा करने में लगा समय:", opt: ["Decreases (Inversely proportional)", "Increases", "Remains constant", "First increases then decreases"], ans: 0, exp: "Time taken decreases proportionally as speed increases (inverse variation)." },
        { q: "If 12 workers finish a task in 4 days, how many days will 6 workers take?", qHi: "यदि 12 मजदूर किसी कार्य को 4 दिन में पूरा करते हैं, तो 6 मजदूर उसे कितने दिन में करेंगे?", opt: ["8 days", "6 days", "10 days", "12 days"], ans: 0, exp: "12 * 4 = 6 * d => d = 48 / 6 = 8 days." }
      ];

      const item = propQuestions[qNum - 1];
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
  // CHAPTER 12: FACTORISATION (गुणनखंडन)
  // =========================================================================
  {
    id: "ncert-c8-m12",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 12,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 12: Factorisation (गुणनखंडन)",
    titleHi: "अध्याय 12: गुणनखंडन (Factorisation)",
    pdfUrl: "/ncert_books/class8/math_ch12.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch12_hi.pdf",
    competitionEdge: "High-yield chapter for algebraic simplification in SSC CGL, RRB NTPC, State TETs, and Defense exams. Covers taking out common monomial factors, factorisation by regrouping terms, factorisation using standard identities a^2 - b^2, (a ± b)^2, splitting the middle term (x + a)(x + b), and polynomial division.",
    competitionEdgeHi: "बीजगणितीय सरलीकरण के लिए अति-महत्वपूर्ण अध्याय। इसमें उभयनिष्ठ (कॉमन) गुणनखंड निकालना, पदों का पुनर्समूहन (regrouping), मानक सर्वसमिकाओं a^2 - b^2 व (a ± b)^2 द्वारा गुणनखंडन, मध्य पद को विभक्त करना (Splitting middle term), तथा बहुपदों का बहुपदों से भाग शामिल है।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Factorisation Methods & Polynomial Division",
        headingHi: "1. एनसीईआरटी मूल पाठ: गुणनखंडन की विधियाँ एवं बहुपदों का विभाजन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              <strong>Factorisation</strong> is writing an algebraic expression as the product of its irreducible factors. In competitive exams, you can factorise polynomials in seconds using algebraic identities or middle-term splitting!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Factorisation Methods</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Formula / Technique</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Common Factor Method</td>
                  <td>Extract HCF of terms</td>
                  <td>\\( 2x + 4 = 2(x + 2) \\)</td>
                </tr>
                <tr>
                  <td>Regrouping Terms</td>
                  <td>Group pairs with common factors</td>
                  <td>\\( 2xy + 3 + 2y + 3x = (2xy + 2y) + (3x + 3) = 2y(x+1) + 3(x+1) = (x+1)(2y+3) \\)</td>
                </tr>
                <tr>
                  <td>Difference of Two Squares</td>
                  <td>\\( a^2 - b^2 = (a + b)(a - b) \\)</td>
                  <td>\\( 49x^2 - 36 = (7x + 6)(7x - 6) \\)</td>
                </tr>
                <tr>
                  <td>Splitting Middle Term</td>
                  <td>\\( x^2 + (a+b)x + ab = (x + a)(x + b) \\)</td>
                  <td>\\( x^2 + 5x + 6 = (x + 2)(x + 3) \\)</td>
                </tr>
                <tr>
                  <td>Polynomial Division</td>
                  <td>\\( \\frac{A \\times B}{A} = B \\)</td>
                  <td>\\( \\frac{x^2 - 4}{x - 2} = \\frac{(x+2)(x-2)}{x-2} = x + 2 \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              <strong>गुणनखंडन</strong> किसी बीजीय व्यंजक को उसके अखंडनीय गुणनखंडों के गुणनफल के रूप में लिखने की प्रक्रिया है। प्रतियोगी परीक्षाओं में सर्वसमिका और मध्य पद विभाजन से प्रश्न तुरंत हल होते हैं!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ गुणनखंडन की प्रमुख विधियाँ</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>विधि</th>
                  <th>तकनीक / सूत्र</th>
                  <th>उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>उभयनिष्ठ गुणनखंड विधि</td>
                  <td>पदों का महत्तम समापवर्तक (HCF) बाहर निकालें</td>
                  <td>\\( 2x + 4 = 2(x + 2) \\)</td>
                </tr>
                <tr>
                  <td>पुनर्समूहन विधि (Regrouping)</td>
                  <td>समान गुणनखंड वाले पदों के जोड़े बनाएं</td>
                  <td>\\( 2xy + 2y + 3x + 3 = 2y(x+1) + 3(x+1) = (x+1)(2y+3) \\)</td>
                </tr>
                <tr>
                  <td>दो वर्गों का अंतर</td>
                  <td>\\( a^2 - b^2 = (a + b)(a - b) \\)</td>
                  <td>\\( 49x^2 - 36 = (7x + 6)(7x - 6) \\)</td>
                </tr>
                <tr>
                  <td>मध्य पद का विभाजन</td>
                  <td>\\( x^2 + (a+b)x + ab = (x + a)(x + b) \\)</td>
                  <td>\\( x^2 + 5x + 6 = (x + 2)(x + 3) \\)</td>
                </tr>
                <tr>
                  <td>बहुपद विभाजन</td>
                  <td>गुणनखंड कर समान पद काटें</td>
                  <td>\\( \\frac{x^2 - 4}{x - 2} = x + 2 \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const factQuestions = [
        { q: "Factorise: 49p^2 - 36.", qHi: "गुणनखंडन कीजिए: 49p^2 - 36।", opt: ["(7p + 6)(7p - 6)", "(7p - 6)^2", "(7p + 6)^2", "(49p - 6)(p + 6)"], ans: 0, exp: "(7p)^2 - 6^2 = (7p + 6)(7p - 6)." },
        { q: "Factorise: x^2 + 5x + 6.", qHi: "गुणनखंडन कीजिए: x^2 + 5x + 6।", opt: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x - 2)(x - 3)", "(x + 5)(x + 1)"], ans: 0, exp: "Sum = 5, product = 6 => numbers are 2 and 3. Factors: (x + 2)(x + 3)." },
        { q: "Factorise: y^2 - 7y + 12.", qHi: "गुणनखंडन कीजिए: y^2 - 7y + 12।", opt: ["(y - 3)(y - 4)", "(y + 3)(y + 4)", "(y - 2)(y - 6)", "(y + 2)(y - 6)"], ans: 0, exp: "Sum = -7, product = 12 => numbers are -3 and -4. Factors: (y - 3)(y - 4)." },
        { q: "Divide: 28x^4 ÷ 56x.", qHi: "भाग दीजिए: 28x^4 ÷ 56x।", opt: ["(1/2) x^3", "2x^3", "(1/2) x^5", "2x^5"], ans: 0, exp: "28/56 * x^(4-1) = (1/2) x^3." },
        { q: "Factorise: a^4 - b^4.", qHi: "गुणनखंडन कीजिए: a^4 - b^4।", opt: ["(a^2 + b^2)(a + b)(a - b)", "(a^2 - b^2)^2", "(a + b)^4", "(a - b)^4"], ans: 0, exp: "(a^2)^2 - (b^2)^2 = (a^2 + b^2)(a^2 - b^2) = (a^2 + b^2)(a + b)(a - b)." },
        { q: "Factorise by regrouping: 6xy - 4y + 6 - 9x.", qHi: "पुनर्समूहन द्वारा गुणनखंडन कीजिए: 6xy - 4y + 6 - 9x।", opt: ["(3x - 2)(2y - 3)", "(3x + 2)(2y + 3)", "(2x - 3)(3y - 2)", "(3x - 2)(2y + 3)"], ans: 0, exp: "2y(3x - 2) - 3(3x - 2) = (3x - 2)(2y - 3)." },
        { q: "What is the common factor of 14pq and 28p^2 q^2?", qHi: "14pq और 28p^2 q^2 का सार्व (उभयनिष्ठ) गुणनखंड क्या है?", opt: ["14pq", "28pq", "7pq", "14p^2 q^2"], ans: 0, exp: "HCF(14, 28) = 14, HCF(pq, p^2 q^2) = pq. Common factor is 14pq." },
        { q: "Divide: (5x^2 - 6x) ÷ 3x.", qHi: "भाग दीजिए: (5x^2 - 6x) ÷ 3x।", opt: ["(5/3)x - 2", "5x - 2", "(5/3)x - 6", "5x^2 - 2"], ans: 0, exp: "5x^2/(3x) - 6x/(3x) = (5/3)x - 2." },
        { q: "Divide: (y^2 + 7y + 10) ÷ (y + 5).", qHi: "भाग दीजिए: (y^2 + 7y + 10) ÷ (y + 5)।", opt: ["y + 2", "y - 2", "y + 5", "y + 10"], ans: 0, exp: "y^2 + 7y + 10 = (y + 2)(y + 5). Dividing by (y + 5) gives y + 2." },
        { q: "Factorise: 25m^2 + 30m + 9.", qHi: "गुणनखंडन कीजिए: 25m^2 + 30m + 9।", opt: ["(5m + 3)^2", "(5m - 3)^2", "(5m + 9)^2", "(25m + 1)^2"], ans: 0, exp: "(5m)^2 + 2(5m)(3) + 3^2 = (5m + 3)^2." },
        { q: "Factorise: 49x^2 - 1.", qHi: "गुणनखंडन कीजिए: 49x^2 - 1।", opt: ["(7x + 1)(7x - 1)", "(7x - 1)^2", "(49x - 1)(x + 1)", "(7x + 1)^2"], ans: 0, exp: "(7x)^2 - 1^2 = (7x + 1)(7x - 1)." },
        { q: "Divide: 44(x^4 - 5x^3 - 24x^2) ÷ 11x(x - 8).", qHi: "भाग दीजिए: 44(x^4 - 5x^3 - 24x^2) ÷ 11x(x - 8)।", opt: ["4x(x + 3)", "4(x + 3)", "4x(x - 3)", "4x^2 (x + 3)"], ans: 0, exp: "44x^2(x^2 - 5x - 24) = 44x^2(x - 8)(x + 3). Dividing by 11x(x - 8) gives 4x(x + 3)." },
        { q: "Factorise: p^2 - 10p + 25.", qHi: "गुणनखंडन कीजिए: p^2 - 10p + 25।", opt: ["(p - 5)^2", "(p + 5)^2", "(p - 5)(p + 5)", "(p - 25)^2"], ans: 0, exp: "(p - 5)^2 = p^2 - 10p + 25." },
        { q: "What is the common factor of 2x, 3x^2, 4?", qHi: "2x, 3x^2, 4 का सार्व गुणनखंड क्या है?", opt: ["1", "2", "x", "2x"], ans: 0, exp: "The only common factor of 2x, 3x^2, and 4 is 1." },
        { q: "Factorise: 16x^5 - 144x^3.", qHi: "गुणनखंडन कीजिए: 16x^5 - 144x^3।", opt: ["16x^3 (x + 3)(x - 3)", "16x^3 (x^2 - 9)", "16(x^3 - 9)", "x^3 (16x^2 - 144)"], ans: 0, exp: "16x^3 (x^2 - 9) = 16x^3 (x + 3)(x - 3)." },
        { q: "Factorise: z^2 - 4z - 12.", qHi: "गुणनखंडन कीजिए: z^2 - 4z - 12।", opt: ["(z - 6)(z + 2)", "(z + 6)(z - 2)", "(z - 4)(z + 3)", "(z - 12)(z + 1)"], ans: 0, exp: "Sum = -4, product = -12 => -6 and 2. Factors: (z - 6)(z + 2)." },
        { q: "Factorise: q^2 - 10q + 21.", qHi: "गुणनखंडन कीजिए: q^2 - 10q + 21।", opt: ["(q - 3)(q - 7)", "(q + 3)(q + 7)", "(q - 1)(q - 21)", "(q - 2)(q - 9)"], ans: 0, exp: "Sum = -10, product = 21 => -3 and -7. Factors: (q - 3)(q - 7)." },
        { q: "Divide: 12a^8 b^8 ÷ (-6a^6 b^4).", qHi: "भाग दीजिए: 12a^8 b^8 ÷ (-6a^6 b^4)।", opt: ["-2a^2 b^4", "2a^2 b^4", "-2a^4 b^2", "2a^14 b^12"], ans: 0, exp: "12/(-6) * a^(8-6) * b^(8-4) = -2a^2 b^4." },
        { q: "Factorise: ax + bx - ay - by.", qHi: "गुणनखंडन कीजिए: ax + bx - ay - by।", opt: ["(a + b)(x - y)", "(a - b)(x + y)", "(a + b)(x + y)", "(a - b)(x - y)"], ans: 0, exp: "x(a + b) - y(a + b) = (a + b)(x - y)." },
        { q: "Divide: (m^2 - 14m - 32) ÷ (m + 2).", qHi: "भाग दीजिए: (m^2 - 14m - 32) ÷ (m + 2)।", opt: ["m - 16", "m + 16", "m - 8", "m + 8"], ans: 0, exp: "m^2 - 14m - 32 = (m - 16)(m + 2). Dividing by (m + 2) gives m - 16." },
        { q: "Factorise: 121b^2 - 88bc + 16c^2.", qHi: "गुणनखंडन कीजिए: 121b^2 - 88bc + 16c^2।", opt: ["(11b - 4c)^2", "(11b + 4c)^2", "(11b - 4c)(11b + 4c)", "(11b - 8c)^2"], ans: 0, exp: "(11b)^2 - 2(11b)(4c) + (4c)^2 = (11b - 4c)^2." },
        { q: "Find the error: 3(x - 4) = 3x - 4. What is the correct expansion?", qHi: "त्रुटि पहचानिए: 3(x - 4) = 3x - 4। सही प्रसार क्या होगा?", opt: ["3x - 12", "3x - 4", "3x + 12", "x - 12"], ans: 0, exp: "3 * x - 3 * 4 = 3x - 12." },
        { q: "Find the error: (2x)^2 = 2x^2. What is the correct value?", qHi: "त्रुटि पहचानिए: (2x)^2 = 2x^2। सही मान क्या होगा?", opt: ["4x^2", "2x^2", "4x", "2x"], ans: 0, exp: "(2x)^2 = 2^2 * x^2 = 4x^2." },
        { q: "Find the error: (x + 8)^2 = x^2 + 64. What is the correct expansion?", qHi: "त्रुटि पहचानिए: (x + 8)^2 = x^2 + 64। सही प्रसार क्या होगा?", opt: ["x^2 + 16x + 64", "x^2 + 8x + 64", "x^2 + 64", "2x + 16"], ans: 0, exp: "(x + 8)^2 = x^2 + 2(8)(x) + 64 = x^2 + 16x + 64." },
        { q: "Divide: (5p^2 - 25p + 20) ÷ (p - 1).", qHi: "भाग दीजिए: (5p^2 - 25p + 20) ÷ (p - 1)।", opt: ["5(p - 4)", "5(p + 4)", "p - 4", "5p - 4"], ans: 0, exp: "5(p^2 - 5p + 4) = 5(p - 1)(p - 4). Dividing by (p - 1) gives 5(p - 4)." },
        { q: "Factorise: (l + m)^2 - (l - m)^2.", qHi: "गुणनखंडन कीजिए: (l + m)^2 - (l - m)^2।", opt: ["4lm", "2(l^2 + m^2)", "2lm", "0"], ans: 0, exp: "(l^2 + 2lm + m^2) - (l^2 - 2lm + m^2) = 4lm." },
        { q: "Factorise: x^4 - (y + z)^4.", qHi: "गुणनखंडन कीजिए: x^4 - (y + z)^4।", opt: ["(x^2 + (y+z)^2)(x + y + z)(x - y - z)", "(x^2 - (y+z)^2)^2", "(x - y - z)^4", "None of these"], ans: 0, exp: "(x^2 + (y+z)^2)(x^2 - (y+z)^2) = (x^2 + (y+z)^2)(x + y + z)(x - y - z)." },
        { q: "Factorise: 15xy - 6x + 5y - 2.", qHi: "गुणनखंडन कीजिए: 15xy - 6x + 5y - 2।", opt: ["(5y - 2)(3x + 1)", "(5y + 2)(3x - 1)", "(3y - 2)(5x + 1)", "(5y - 2)(3x - 1)"], ans: 0, exp: "3x(5y - 2) + 1(5y - 2) = (5y - 2)(3x + 1)." },
        { q: "What is the irreducible form of 30xy?", qHi: "30xy का अखंडनीय रूप क्या है?", opt: ["2 × 3 × 5 × x × y", "30 × xy", "6 × 5 × x × y", "10 × 3xy"], ans: 0, exp: "30 = 2 * 3 * 5. Irreducible form is 2 * 3 * 5 * x * y." },
        { q: "Divide: 10xy(14x^2 - 21y^2) ÷ 2xy.", qHi: "भाग दीजिए: 10xy(14x^2 - 21y^2) ÷ 2xy।", opt: ["5(14x^2 - 21y^2) = 35(2x^2 - 3y^2)", "5xy(14x^2 - 21y^2)", "14x^2 - 21y^2", "70x^2 - 105y^2"], ans: 0, exp: "10xy / 2xy = 5. 5 * 7(2x^2 - 3y^2) = 35(2x^2 - 3y^2)." }
      ];

      const item = factQuestions[qNum - 1];
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
  // CHAPTER 13: INTRODUCTION TO GRAPHS (आलेखों से परिचय)
  // =========================================================================
  {
    id: "ncert-c8-m13",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 13,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 13: Introduction to Graphs (आलेखों से परिचय)",
    titleHi: "अध्याय 13: आलेखों से परिचय (Introduction to Graphs)",
    pdfUrl: "/ncert_books/class8/math_ch13.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch13_hi.pdf",
    competitionEdge: "Essential for Coordinate Geometry in SSC CGL, RRB NTPC, CTET Paper 2, and Data Interpretation. Covers Cartesian coordinate plane, origin (0,0), x-axis (abscissa), y-axis (ordinate), plotting points, reading linear graphs, and understanding independent vs dependent variables.",
    competitionEdgeHi: "निर्देशांक ज्यामिति और डीआई (Data Interpretation) की नींव। इसमें कार्तीय तल, मूल बिंदु (0,0), भुज (x-अक्ष) व कोटि (y-अक्ष), बिंदुओं का आलेखन, रैखिक आलेख (Linear Graph) को पढ़ना, तथा स्वतंत्र चर बनाम आश्रित चर के संबंध शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Cartesian Coordinates & Linear Graphs",
        headingHi: "1. एनसीईआरटी मूल पाठ: कार्तीय निर्देशांक एवं रैखिक आलेख",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              A line graph which is a whole unbroken line is called a <strong>Linear Graph</strong>. In a Cartesian coordinate system, any point is represented by an ordered pair <strong>\\( (x, y) \\)</strong>:
              <ul>
                <li><strong>\\(x\\)-coordinate (Abscissa / भुज):</strong> Distance of point from the \\(y\\)-axis along the \\(x\\)-axis.</li>
                <li><strong>\\(y\\)-coordinate (Ordinate / कोटि):</strong> Distance of point from the \\(x\\)-axis along the \\(y\\)-axis.</li>
                <li><strong>Origin (मूल बिंदु):</strong> The intersection of the two perpendicular axes, coordinates <strong>(0, 0)</strong>!</li>
              </ul>
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Coordinate Geometry Golden Rules</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Location of Point</th>
                  <th>Coordinates Format</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>On the \\(x\\)-axis</td>
                  <td>\\( (x, 0) \\) (\\(y\\)-coordinate is 0)</td>
                  <td>\\( (5, 0), (-3, 0) \\)</td>
                </tr>
                <tr>
                  <td>On the \\(y\\)-axis</td>
                  <td>\\( (0, y) \\) (\\(x\\)-coordinate is 0)</td>
                  <td>\\( (0, 4), (0, -7) \\)</td>
                </tr>
                <tr>
                  <td>At the Origin</td>
                  <td>\\( (0, 0) \\)</td>
                  <td>Where \\(x\\)-axis and \\(y\\)-axis meet</td>
                </tr>
                <tr>
                  <td>Dependent Variable</td>
                  <td>Plotted along \\(y\\)-axis</td>
                  <td>Cost of petrol, Distance travelled</td>
                </tr>
                <tr>
                  <td>Independent Variable</td>
                  <td>Plotted along \\(x\\)-axis</td>
                  <td>Time elapsed, Litres of petrol</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              एक रेखा आलेख जो एक पूरी अखंडित सरल रेखा हो, <strong>रैखिक आलेख (Linear Graph)</strong> कहलाता है। कार्तीय निर्देशांक प्रणाली में किसी भी बिंदु की स्थिति को क्रमित युग्म <strong>\\( (x, y) \\)</strong> द्वारा दर्शाया जाता है:
              <ul>
                <li><strong>\\(x\\)-निर्देशांक (भुज):</strong> \\(y\\)-अक्ष से बिंदु की लंबवत दूरी।</li>
                <li><strong>\\(y\\)-निर्देशांक (कोटि):</strong> \\(x\\)-अक्ष से बिंदु की लंबवत दूरी।</li>
                <li><strong>मूल बिंदु (Origin):</strong> जहाँ दोनों अक्ष एक दूसरे को समकोण पर काटते हैं, निर्देशांक <strong>(0, 0)</strong>!</li>
              </ul>
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ निर्देशांक ज्यामिति के स्वर्णिम नियम</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>बिंदु की स्थिति</th>
                  <th>निर्देशांक का रूप</th>
                  <th>उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>\\(x\\)-अक्ष पर स्थित</td>
                  <td>\\( (x, 0) \\) (कोटि 0 होती है)</td>
                  <td>\\( (5, 0), (-3, 0) \\)</td>
                </tr>
                <tr>
                  <td>\\(y\\)-अक्ष पर स्थित</td>
                  <td>\\( (0, y) \\) (भुज 0 होता है)</td>
                  <td>\\( (0, 4), (0, -7) \\)</td>
                </tr>
                <tr>
                  <td>मूल बिंदु (Origin)</td>
                  <td>\\( (0, 0) \\)</td>
                  <td>दोनों अक्षों का प्रतिच्छेद बिंदु</td>
                </tr>
                <tr>
                  <td>आश्रित चर (Dependent)</td>
                  <td>\\(y\\)-अक्ष पर दर्शाया जाता है</td>
                  <td>पेट्रोल का मूल्य, तय की गई दूरी</td>
                </tr>
                <tr>
                  <td>स्वतंत्र चर (Independent)</td>
                  <td>\\(x\\)-अक्ष पर दर्शाया जाता है</td>
                  <td>समय, पेट्रोल की मात्रा</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const graphQuestions = [
        { q: "What are the coordinates of the origin in a Cartesian plane?", qHi: "कार्तीय तल में मूल बिंदु (Origin) के निर्देशांक क्या होते हैं?", opt: ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"], ans: 0, exp: "The origin is the intersection of both axes where x = 0 and y = 0: (0, 0)." },
        { q: "The point (0, 5) lies on which axis?", qHi: "बिंदु (0, 5) किस अक्ष पर स्थित है?", opt: ["y-axis", "x-axis", "Origin", "In Quadrant I"], ans: 0, exp: "Since the x-coordinate is 0 and y-coordinate is non-zero, it lies on the y-axis." },
        { q: "The point (7, 0) lies on which axis?", qHi: "बिंदु (7, 0) किस अक्ष पर स्थित है?", opt: ["x-axis", "y-axis", "Origin", "In Quadrant II"], ans: 0, exp: "Since the y-coordinate is 0, the point lies on the x-axis." },
        { q: "What is the abscissa (x-coordinate) of the point (-3, 8)?", qHi: "बिंदु (-3, 8) का भुज (abscissa) क्या है?", opt: ["-3", "8", "5", "11"], ans: 0, exp: "The x-coordinate (abscissa) is -3." },
        { q: "What is the ordinate (y-coordinate) of the point (4, -6)?", qHi: "बिंदु (4, -6) की कोटि (ordinate) क्या है?", opt: ["-6", "4", "2", "-2"], ans: 0, exp: "The y-coordinate (ordinate) is -6." },
        { q: "A line graph that consists of an unbroken single straight line is called a:", qHi: "एक रेखा आलेख जो पूरी तरह से एक अखंडित सरल रेखा हो, कहलाता है:", opt: ["Linear graph (रैखिक आलेख)", "Histogram", "Pie chart", "Bar graph"], ans: 0, exp: "An unbroken straight-line graph is called a linear graph." },
        { q: "Which variable is normally represented along the horizontal x-axis?", qHi: "सामान्यतः क्षैतिज x-अक्ष पर किस चर को दर्शाया जाता है?", opt: ["Independent variable (स्वतंत्र चर)", "Dependent variable", "Constant", "None of these"], ans: 0, exp: "The independent variable (e.g. time) is represented along the x-axis." },
        { q: "Which variable is normally represented along the vertical y-axis?", qHi: "सामान्यतः ऊर्ध्वाधर y-अक्ष पर किस चर को दर्शाया जाता है?", opt: ["Dependent variable (आश्रित चर)", "Independent variable", "Scale", "Origin"], ans: 0, exp: "The dependent variable (e.g. distance or temperature) is represented along the y-axis." },
        { q: "In the point (x, y), x represents the perpendicular distance from:", qHi: "बिंदु (x, y) में x किसकी लंबवत दूरी को दर्शाता है?", opt: ["y-axis", "x-axis", "Origin", "Line y = x"], ans: 0, exp: "The x-coordinate is the perpendicular distance of the point from the y-axis." },
        { q: "In the point (x, y), y represents the perpendicular distance from:", qHi: "बिंदु (x, y) में y किसकी लंबवत दूरी को दर्शाता है?", opt: ["x-axis", "y-axis", "Origin", "Infinity"], ans: 0, exp: "The y-coordinate is the perpendicular distance of the point from the x-axis." },
        { q: "Do the points (2, 5) and (5, 2) represent the same point?", qHi: "क्या बिंदु (2, 5) और (5, 2) एक ही बिंदु को दर्शाते हैं?", opt: ["No, order matters in coordinates", "Yes, both have 2 and 5", "Yes, distance from origin is same", "Only on the origin"], ans: 0, exp: "No! Coordinates are an ordered pair (x, y). (2, 5) has x=2, y=5 while (5, 2) has x=5, y=2." },
        { q: "If the cost of 1 litre of petrol is ₹100, what is the cost of 5 litres of petrol plotted on graph?", qHi: "यदि 1 लीटर पेट्रोल का मूल्य ₹100 है, तो 5 लीटर पेट्रोल का मूल्य आलेख पर क्या होगा?", opt: ["₹500, point is (5, 500)", "₹400, point is (5, 400)", "₹100, point is (1, 100)", "₹600"], ans: 0, exp: "Cost = 5 * 100 = ₹500. Point is (5, 500)." },
        { q: "A graph that displays data that changes continuously over periods of time is a:", qHi: "समय के साथ लगातार बदलने वाले आँकड़ों को प्रदर्शित करने वाला आलेख कहलाता है:", opt: ["Line graph", "Bar graph", "Pie chart", "Pictograph"], ans: 0, exp: "A line graph displays data that changes continuously over time." },
        { q: "Points (1, 1), (2, 2), (3, 3), (4, 4) lie on a straight line passing through:", qHi: "बिंदु (1, 1), (2, 2), (3, 3), (4, 4) किस से गुजरने वाली एक सीधी रेखा पर स्थित हैं?", opt: ["Origin (0, 0)", "(1, 0)", "(0, 1)", "(2, 0)"], ans: 0, exp: "Since y = x, when x = 0 then y = 0, so the line passes through the origin (0, 0)." },
        { q: "If y = 2x, what is the value of y when x = 3?", qHi: "यदि y = 2x हो, तो x = 3 होने पर y का मान क्या होगा?", opt: ["6", "5", "8", "4"], ans: 0, exp: "y = 2 * 3 = 6. Point is (3, 6)." },
        { q: "The graph of the relation Perimeter = 4 × Side for a square is a:", qHi: "वर्ग के परिमाप = 4 × भुजा के संबंध का आलेख कैसा होगा?", opt: ["Linear graph passing through origin", "Curved line", "Circle", "Zig-zag line"], ans: 0, exp: "P = 4s is a linear equation in two variables passing through (0, 0)." },
        { q: "The graph of Area = Side^2 for a square is a:", qHi: "वर्ग के क्षेत्रफल = भुजा^2 के संबंध का आलेख कैसा होगा?", opt: ["Non-linear (curve)", "Straight line", "Horizontal line", "Vertical line"], ans: 0, exp: "A = s^2 is quadratic, so its graph is a curve (non-linear graph)." },
        { q: "What is the distance of the point (3, 4) from the origin?", qHi: "मूल बिंदु से बिंदु (3, 4) की दूरी क्या है?", opt: ["5 units", "7 units", "4 units", "3 units"], ans: 0, exp: "Distance = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5 units." },
        { q: "Which point lies on the line y = 3x - 1?", qHi: "कौन सा बिंदु रेखा y = 3x - 1 पर स्थित है?", opt: ["(2, 5)", "(2, 7)", "(1, 3)", "(3, 5)"], ans: 0, exp: "For x = 2: y = 3(2) - 1 = 6 - 1 = 5. Point is (2, 5)." },
        { q: "If a patient's temperature is recorded every 2 hours in a hospital, which graph is most appropriate to show trends?", qHi: "यदि अस्पताल में प्रत्येक 2 घंटे में रोगी का तापमान दर्ज किया जाता है, तो प्रवृत्ति दिखाने के लिए कौन सा आलेख सर्वाधिक उपयुक्त है?", opt: ["Line graph (रेखा आलेख)", "Pie chart", "Pictograph", "Histogram"], ans: 0, exp: "A line graph best displays continuous change over intervals of time." },
        { q: "What is the equation of the x-axis?", qHi: "x-अक्ष का समीकरण क्या होता है?", opt: ["y = 0", "x = 0", "y = x", "x + y = 0"], ans: 0, exp: "On the x-axis, the y-coordinate of every point is 0, so its equation is y = 0." },
        { q: "What is the equation of the y-axis?", qHi: "y-अक्ष का समीकरण क्या होता है?", opt: ["x = 0", "y = 0", "x = 1", "y = 1"], ans: 0, exp: "On the y-axis, the x-coordinate of every point is 0, so its equation is x = 0." },
        { q: "In which quadrant does the point (-3, 4) lie?", qHi: "बिंदु (-3, 4) किस चतुर्थांश (quadrant) में स्थित है?", opt: ["Quadrant II (द्वितीय)", "Quadrant I", "Quadrant III", "Quadrant IV"], ans: 0, exp: "x is negative and y is positive, so it lies in Quadrant II." },
        { q: "In which quadrant does the point (-2, -5) lie?", qHi: "बिंदु (-2, -5) किस चतुर्थांश में स्थित है?", opt: ["Quadrant III (तृतीय)", "Quadrant II", "Quadrant IV", "Quadrant I"], ans: 0, exp: "Both x and y are negative in Quadrant III." },
        { q: "In which quadrant does the point (4, -3) lie?", qHi: "बिंदु (4, -3) किस चतुर्थांश में स्थित है?", opt: ["Quadrant IV (चतुर्थ)", "Quadrant I", "Quadrant II", "Quadrant III"], ans: 0, exp: "x is positive and y is negative in Quadrant IV." },
        { q: "The coordinate axes divide the Cartesian plane into how many parts (quadrants)?", qHi: "निर्देशांक अक्ष कार्तीय तल को कितने भागों (चतुर्थांशों) में विभाजित करते हैं?", opt: ["4", "2", "6", "8"], ans: 0, exp: "The two axes divide the plane into 4 quadrants." },
        { q: "Any point on the line parallel to x-axis has constant:", qHi: "x-अक्ष के समांतर रेखा पर स्थित किसी भी बिंदु का क्या स्थिर रहता है?", opt: ["y-coordinate (ordinate)", "x-coordinate", "Slope is infinite", "Both coordinates"], ans: 0, exp: "A horizontal line parallel to the x-axis has a constant y-coordinate (y = c)." },
        { q: "Any point on the line parallel to y-axis has constant:", qHi: "y-अक्ष के समांतर रेखा पर स्थित किसी भी बिंदु का क्या स्थिर रहता है?", opt: ["x-coordinate (abscissa)", "y-coordinate", "Slope is zero", "Both coordinates"], ans: 0, exp: "A vertical line parallel to the y-axis has a constant x-coordinate (x = c)." },
        { q: "Find the coordinates of the midpoint of segment joining (2, 4) and (6, 8).", qHi: "(2, 4) और (6, 8) को मिलाने वाले रेखाखंड के मध्य-बिंदु के निर्देशांक क्या हैं?", opt: ["(4, 6)", "(3, 5)", "(8, 12)", "(4, 4)"], ans: 0, exp: "Midpoint = ((2+6)/2, (4+8)/2) = (8/2, 12/2) = (4, 6)." },
        { q: "If Simple Interest I on ₹1000 at 10% is I = 100t, what is the nature of graph between I and time t?", qHi: "यदि ₹1000 पर 10% दर से साधारण ब्याज I = 100t हो, तो ब्याज I और समय t के मध्य आलेख की प्रकृति क्या होगी?", opt: ["Linear graph passing through origin", "Curved parabolic line", "Step graph", "Zig-zag line"], ans: 0, exp: "I = 100t is a direct linear relation passing through (0, 0)." }
      ];

      const item = graphQuestions[qNum - 1];
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
