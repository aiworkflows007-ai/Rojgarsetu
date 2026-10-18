/**
 * build_class8_math_p2.js
 * NCERT Class 8 Mathematics Chapters 6 to 9:
 * Ch 6: Cube and Cube Roots (घन और घनमूल)
 * Ch 7: Comparing Quantities (राशियों की तुलना)
 * Ch 8: Algebraic Expressions and Identities (बीजीय व्यंजक एवं सर्वसमिकाएँ)
 * Ch 9: Mensuration (क्षेत्रमिति)
 * Each chapter has comprehensive Teacher-Mentor notes and exactly 30 bilingual MCQs.
 */

const chapters = [
  // =========================================================================
  // CHAPTER 6: CUBE AND CUBE ROOTS (घन और घनमूल)
  // =========================================================================
  {
    id: "ncert-c8-m06",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 6,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 6: Cube and Cube Roots (घन और घनमूल)",
    titleHi: "अध्याय 6: घन और घनमूल (Cube and Cube Roots)",
    pdfUrl: "/ncert_books/class8/math_ch06.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch06_hi.pdf",
    competitionEdge: "Essential for number sense, mental math, and calculation speed in SSC, Railway RRB, and CTET Paper 2. Covers unit digits of cubes, triplets of prime factors, Hardy-Ramanujan numbers (1729, 4104), and finding cube roots by estimation and prime factorisation.",
    competitionEdgeHi: "एसएससी, रेलवे और सीटेट पेपर-2 में त्वरित गणना के लिए अत्यंत महत्वपूर्ण। इसमें घन संख्याओं के इकाई अंक, अभाज्य गुणनखंडों के त्रिक (triplets), हार्डी-रामानुजन संख्याएँ (1729, 4104), तथा अनुमान विधि व अभाज्य गुणनखंडन द्वारा घनमूल ज्ञात करने की विधियाँ शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Properties of Cubes & Cube Roots",
        headingHi: "1. एनसीईआरटी मूल पाठ: घन संख्याओं के गुणधर्म एवं घनमूल की विधियाँ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Numbers obtained when a number is multiplied by itself three times are called <strong>Cube Numbers</strong> (\\(n^3 = n \\times n \\times n\\)). Did you know? <strong>1729</strong> is the smallest <strong>Hardy-Ramanujan Number</strong> because it can be expressed as the sum of two cubes in two different ways: \\(1729 = 1^3 + 12^3 = 9^3 + 10^3\\)!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Cube Roots & Unit Digit Mapping</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Number ending in</th>
                  <th>Cube ends in</th>
                  <th>Memory Trick</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1, 4, 5, 6, 9, 0</td>
                  <td>Same: 1, 4, 5, 6, 9, 0</td>
                  <td>Unchanged unit digits!</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>8</td>
                  <td>\\(2 + 8 = 10\\)</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>2</td>
                  <td>\\(8 + 2 = 10\\)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>7</td>
                  <td>\\(3 + 7 = 10\\)</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>3</td>
                  <td>\\(7 + 3 = 10\\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              जब किसी संख्या को स्वयं से तीन बार गुणा किया जाए, तो प्राप्त संख्या <strong>घन संख्या</strong> कहलाती है (\\(n^3 = n \\times n \\times n\\))। क्या आप जानते हैं? <strong>1729</strong> सबसे छोटी <strong>हार्डी-रामानुजन संख्या</strong> है क्योंकि इसे दो अलग-अलग प्रकार से दो घनों के योग के रूप में लिखा जा सकता है: \\(1729 = 1^3 + 12^3 = 9^3 + 10^3\\)!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ इकाई अंक मैपिंग और घनमूल की शॉर्टकट ट्रिक</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>संख्या का अंतिम अंक</th>
                  <th>घन का अंतिम अंक</th>
                  <th>याद रखने का नियम</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1, 4, 5, 6, 9, 0</td>
                  <td>वही: 1, 4, 5, 6, 9, 0</td>
                  <td>इकाई अंक अपरिवर्तित रहता है</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>8</td>
                  <td>\\(2 + 8 = 10\\)</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>2</td>
                  <td>\\(8 + 2 = 10\\)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>7</td>
                  <td>\\(3 + 7 = 10\\)</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>3</td>
                  <td>\\(7 + 3 = 10\\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const cubeQuestions = [
        { q: "What is the smallest Hardy-Ramanujan number?", qHi: "सबसे छोटी हार्डी-रामानुजन संख्या कौन सी है?", opt: ["1729", "4104", "13832", "20683"], ans: 0, exp: "1729 = 1^3 + 12^3 = 9^3 + 10^3 is the smallest number expressible as the sum of two cubes in two different ways." },
        { q: "Which of the following numbers is a perfect cube?", qHi: "निम्नलिखित में से कौन सी संख्या एक पूर्ण घन (perfect cube) है?", opt: ["216", "243", "342", "500"], ans: 0, exp: "6^3 = 6 * 6 * 6 = 216." },
        { q: "What is the unit digit of the cube of a number ending in 8?", qHi: "8 पर समाप्त होने वाली संख्या के घन का इकाई अंक क्या होगा?", opt: ["2", "8", "4", "6"], ans: 0, exp: "8^3 = 512, which ends in 2." },
        { q: "Find the cube root of 13824 by prime factorisation.", qHi: "अभाज्य गुणनखंडन द्वारा 13824 का घनमूल क्या होगा?", opt: ["24", "26", "22", "28"], ans: 0, exp: "13824 = 2^9 * 3^3. Sqrt3 = 2^3 * 3 = 8 * 3 = 24." },
        { q: "What is the smallest number by which 675 must be multiplied so that the product is a perfect cube?", qHi: "675 को किस सबसे छोटी संख्या से गुणा किया जाए कि गुणनफल एक पूर्ण घन बन जाए?", opt: ["5", "3", "25", "9"], ans: 0, exp: "675 = 3 * 3 * 3 * 5 * 5. Factor 5 needs one more 5 to make a triplet, so multiply by 5." },
        { q: "Find the cube root of -2744.", qHi: "-2744 का घनमूल क्या होगा?", opt: ["-14", "14", "-16", "-12"], ans: 0, exp: "(-14)^3 = -2744. Cube root of a negative number is negative: -14." },
        { q: "What is the smallest number by which 704 must be divided to obtain a perfect cube?", qHi: "704 को किस सबसे छोटी संख्या से भाग दिया जाए कि भागफल एक पूर्ण घन बन जाए?", opt: ["11", "7", "4", "2"], ans: 0, exp: "704 = 2^6 * 11. 11 does not form a triplet, so divide by 11 to get 2^6 = 64 = 4^3." },
        { q: "What is the value of 0.2 cubed (0.2^3)?", qHi: "0.2 के घन (0.2^3) का मान क्या होगा?", opt: ["0.008", "0.08", "0.8", "0.0008"], ans: 0, exp: "0.2 * 0.2 * 0.2 = 0.008." },
        { q: "If the volume of a cubical box is 512 cm^3, find the length of each edge.", qHi: "यदि एक घनाकार डिब्बे का आयतन 512 घन सेमी है, तो उसकी प्रत्येक भुजा की लंबाई क्या होगी?", opt: ["8 cm", "6 cm", "12 cm", "16 cm"], ans: 0, exp: "Edge = cbrt(512) = 8 cm." },
        { q: "A number ending in 7 will have its cube ending in:", qHi: "7 पर समाप्त होने वाली संख्या का घन किस अंक पर समाप्त होगा?", opt: ["3", "7", "9", "1"], ans: 0, exp: "7^3 = 343, so the cube ends in 3." },
        { q: "Evaluate: cbrt(27 * 64).", qHi: "मान ज्ञात कीजिए: cbrt(27 * 64)।", opt: ["12", "18", "24", "16"], ans: 0, exp: "cbrt(27) * cbrt(64) = 3 * 4 = 12." },
        { q: "How many zeros will be at the end of the cube of 50?", qHi: "50 के घन के अंत में कितने शून्य होंगे?", opt: ["3", "2", "1", "4"], ans: 0, exp: "50^3 = 125,000, so there are 3 zeros." },
        { q: "The cube of an odd natural number is always:", qHi: "एक विषम प्राकृत संख्या का घन सदैव ________ होता है:", opt: ["Odd", "Even", "Zero", "Negative"], ans: 0, exp: "Cube of an odd number is always odd (e.g. 3^3 = 27, 5^3 = 125)." },
        { q: "The cube of an even natural number is always:", qHi: "एक सम प्राकृत संख्या का घन सदैव ________ होता है:", opt: ["Even", "Odd", "Prime", "Fractional"], ans: 0, exp: "Cube of an even number is always even (e.g. 2^3 = 8, 4^3 = 64)." },
        { q: "What is the cube root of 17576 by estimation method?", qHi: "अनुमान विधि द्वारा 17576 का घनमूल क्या है?", opt: ["26", "24", "36", "16"], ans: 0, exp: "Group 576 ends in 6 => units digit is 6. Group 17 lies between 2^3 (8) and 3^3 (27) => tens digit is 2. Number is 26." },
        { q: "Which of the following is NOT a perfect cube?", qHi: "निम्नलिखित में से कौन सी संख्या एक पूर्ण घन नहीं है?", opt: ["100", "1000", "1", "8"], ans: 0, exp: "100 has 2 zeros, but a cube of 10 must have a multiple of 3 zeros (like 1000). 100 is not a perfect cube." },
        { q: "What is the value of cbrt(0.000125)?", qHi: "cbrt(0.000125) का मान क्या है?", opt: ["0.05", "0.5", "0.005", "0.25"], ans: 0, exp: "125 / 1000000 => cbrt(125)/cbrt(10^6) = 5/100 = 0.05." },
        { q: "Parikshit makes a cuboid of plasticine of sides 5 cm, 2 cm, 5 cm. How many such cuboids are needed to form a cube?", qHi: "परीक्षित प्लास्टिसिन का एक घनाभ बनाता है जिसकी भुजाएँ 5 सेमी, 2 सेमी और 5 सेमी हैं। एक घन बनाने के लिए ऐसे कितने घनाभों की आवश्यकता होगी?", opt: ["20", "10", "50", "25"], ans: 0, exp: "Volume = 5 * 2 * 5. To make triplets: we need one 5 and two 2s. Required cuboids = 5 * 2 * 2 = 20." },
        { q: "Find the cube root of 91125.", qHi: "91125 का घनमूल ज्ञात कीजिए।", opt: ["45", "35", "55", "42"], ans: 0, exp: "45^3 = 91125." },
        { q: "What is the value of 11^3 - 10^3?", qHi: "11^3 - 10^3 का मान क्या है?", opt: ["331", "300", "271", "361"], ans: 0, exp: "Formula: 1 + 11*10*3 = 1 + 330 = 331 (or 1331 - 1000 = 331)." },
        { q: "What is the cube root of 3375?", qHi: "3375 का घनमूल क्या है?", opt: ["15", "25", "35", "5"], ans: 0, exp: "15^3 = 3375." },
        { q: "A number ending in 2 will have its cube ending in:", qHi: "2 पर समाप्त होने वाली संख्या का घन किस पर समाप्त होगा?", opt: ["8", "2", "4", "6"], ans: 0, exp: "2^3 = 8." },
        { q: "Find the smallest number by which 128 must be divided to obtain a perfect cube.", qHi: "128 को किस सबसे छोटी संख्या से भाग दिया जाए कि वह एक पूर्ण घन बन जाए?", opt: ["2", "4", "8", "16"], ans: 0, exp: "128 = 2^7 = 2^6 * 2. Divide by 2 to get 2^6 = 64 = 4^3." },
        { q: "The value of cbrt(8) + cbrt(27) + cbrt(64) is:", qHi: "cbrt(8) + cbrt(27) + cbrt(64) का मान क्या है?", opt: ["9", "12", "8", "10"], ans: 0, exp: "2 + 3 + 4 = 9." },
        { q: "What is the cube root of 10648?", qHi: "10648 का घनमूल क्या है?", opt: ["22", "18", "24", "26"], ans: 0, exp: "22^3 = 10648." },
        { q: "Find the value of (cbrt(-125)) * (cbrt(216)).", qHi: "(cbrt(-125)) * (cbrt(216)) का मान क्या होगा?", opt: ["-30", "30", "-25", "-36"], ans: 0, exp: "(-5) * 6 = -30." },
        { q: "Is 4104 a Hardy-Ramanujan number?", qHi: "क्या 4104 एक हार्डी-रामानुजन संख्या है?", opt: ["Yes, 4104 = 2^3 + 16^3 = 9^3 + 15^3", "No", "Only 1729 is Hardy-Ramanujan", "None of these"], ans: 0, exp: "Yes, 4104 is the second Hardy-Ramanujan number: 2^3 + 16^3 = 8 + 4096 = 4104, and 9^3 + 15^3 = 729 + 3375 = 4104." },
        { q: "Find the cube root of 0.064.", qHi: "0.064 का घनमूल क्या है?", opt: ["0.4", "0.04", "0.16", "0.8"], ans: 0, exp: "cbrt(64/1000) = 4/10 = 0.4." },
        { q: "Which of the following is equal to cbrt(a/b)?", qHi: "cbrt(a/b) किसके बराबर है?", opt: ["cbrt(a) / cbrt(b)", "cbrt(a) * cbrt(b)", "cbrt(a - b)", "a / b"], ans: 0, exp: "cbrt(a/b) = cbrt(a) / cbrt(b)." },
        { q: "What is the cube root of 5832?", qHi: "5832 का घनमूल क्या है?", opt: ["18", "16", "22", "24"], ans: 0, exp: "18^3 = 5832." }
      ];

      const item = cubeQuestions[qNum - 1];
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
  // CHAPTER 7: COMPARING QUANTITIES (राशियों की तुलना)
  // =========================================================================
  {
    id: "ncert-c8-m07",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 7,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 7: Comparing Quantities (राशियों की तुलना)",
    titleHi: "अध्याय 7: राशियों की तुलना (Comparing Quantities)",
    pdfUrl: "/ncert_books/class8/math_ch07.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch07_hi.pdf",
    competitionEdge: "One of the absolute highest-weightage topics in SSC CGL, RRB NTPC, Banking, and State PSCs. Covers Profit & Loss, Marked Price and Discount %, Sales Tax/GST, and the complete mechanics of Compound Interest (Annually, Semi-Annually) and Population Growth/Depreciation.",
    competitionEdgeHi: "एसएससी, रेलवे, बैंकिंग और राज्य पीएससी में सर्वाधिक पूछे जाने वाले अध्यायों में से एक। इसमें लाभ-हानि, अंकित मूल्य व बट्टा (Discount %), जीएसटी, तथा चक्रवृद्धि ब्याज (वार्षिक व अर्धवार्षिक संयोजन) और जनसंख्या वृद्धि/मूल्यह्रास के प्रत्यक्ष प्रश्न शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Discount, Taxes & Compound Interest Formula",
        headingHi: "1. एनसीईआरटी मूल पाठ: बट्टा, बिक्री कर/GST एवं चक्रवृद्धि ब्याज के सूत्र",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              In commercial arithmetic, <strong>Discount</strong> is always calculated on the <strong>Marked Price (MP)</strong>: \\( \\text{Discount} = \\text{MP} - \\text{SP} \\). In <strong>Compound Interest (CI)</strong>, the interest earned in each period is added to the principal to calculate interest for the next period!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Commercial Math Formulas</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Formula</th>
                  <th>Key Examination Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Discount %</td>
                  <td>\\( \\frac{\\text{Discount}}{\\text{Marked Price}} \\times 100 \\)</td>
                  <td>Discount is NEVER calculated on Cost Price (CP)!</td>
                </tr>
                <tr>
                  <td>Compound Interest (Compounded Annually)</td>
                  <td>\\( A = P \\left(1 + \\frac{R}{100}\\right)^n \\)</td>
                  <td>\\( \\text{CI} = A - P \\)</td>
                </tr>
                <tr>
                  <td>Compounded Half-Yearly (अर्धवार्षिक)</td>
                  <td>\\( A = P \\left(1 + \\frac{R/2}{100}\\right)^{2n} \\)</td>
                  <td>Rate is halved (\\(R/2\\)), Time is doubled (\\(2n\\))!</td>
                </tr>
                <tr>
                  <td>Depreciation / Decay Formula</td>
                  <td>\\( V = P \\left(1 - \\frac{R}{100}\\right)^n \\)</td>
                  <td>Used for value of machines, vehicles, and decreasing populations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              व्यावसायिक गणित में, <strong>बट्टा (Discount)</strong> सदैव <strong>अंकित मूल्य (Marked Price)</strong> पर दिया जाता है: \\( \\text{बट्टा} = \\text{अंकित मूल्य} - \\text{विक्रय मूल्य} \\)। <strong>चक्रवृद्धि ब्याज</strong> में प्रत्येक अवधि का ब्याज मूलधन में जुड़कर अगली अवधि का नया मूलधन बन जाता है!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ व्यावसायिक गणित के अचूक सूत्र</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>संकल्पना</th>
                  <th>सूत्र</th>
                  <th>प्रतियोगी परीक्षा के लिए विशेष</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>बट्टा प्रतिशत (Discount %)</td>
                  <td>\\( \\frac{\\text{बट्टा}}{\\text{अंकित मूल्य}} \\times 100 \\)</td>
                  <td>बट्टे की गणना कभी भी क्रय मूल्य पर नहीं होती!</td>
                </tr>
                <tr>
                  <td>चक्रवृद्धि मिश्रधन (वार्षिक)</td>
                  <td>\\( A = P \\left(1 + \\frac{R}{100}\\right)^n \\)</td>
                  <td>\\( \\text{CI} = A - P \\)</td>
                </tr>
                <tr>
                  <td>अर्धवार्षिक संयोजन (Half-Yearly)</td>
                  <td>\\( A = P \\left(1 + \\frac{R/2}{100}\\right)^{2n} \\)</td>
                  <td>दर आधी (\\(R/2\\)) और समय दोगुना (\\(2n\\)) हो जाता है!</td>
                </tr>
                <tr>
                  <td>मूल्यह्रास (Depreciation)</td>
                  <td>\\( V = P \\left(1 - \\frac{R}{100}\\right)^n \\)</td>
                  <td>मशीनों के मूल्य और घटती जनसंख्या के लिए ऋण चिन्ह का प्रयोग।</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const compQuestions = [
        { q: "An item marked at ₹840 is sold for ₹714. What is the discount percentage?", qHi: "₹840 अंकित मूल्य वाली एक वस्तु ₹714 में बेची जाती है। बट्टा प्रतिशत क्या है?", opt: ["15%", "12%", "18%", "20%"], ans: 0, exp: "Discount = 840 - 714 = ₹126. Discount % = (126/840) * 100 = 15%." },
        { q: "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.", qHi: "₹10,000 पर 2 वर्ष के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज क्या होगा (वार्षिक संयोजित)?", opt: ["₹2,100", "₹2,000", "₹1,200", "₹2,210"], ans: 0, exp: "A = 10000 * (1 + 10/100)^2 = 10000 * 1.21 = ₹12,100. CI = 12100 - 10000 = ₹2,100." },
        { q: "When interest is compounded half-yearly, the rate per period becomes:", qHi: "जब ब्याज अर्धवार्षिक संयोजित होता है, तो प्रति छमाही ब्याज दर क्या हो जाती है?", opt: ["Half of annual rate (R/2)", "Double the annual rate (2R)", "Same as annual rate", "One fourth (R/4)"], ans: 0, exp: "When compounded semi-annually, rate becomes R/2 and time becomes 2n." },
        { q: "A VCR and TV were bought for ₹8,000 each. The shopkeeper made a loss of 4% on VCR and profit of 8% on TV. Find the overall gain or loss percent.", qHi: "एक वीसीआर और टीवी प्रत्येक को ₹8,000 में खरीदा गया। दुकानदार को वीसीआर पर 4% हानि और टीवी पर 8% लाभ हुआ। कुल लाभ या हानि प्रतिशत ज्ञात कीजिए।", opt: ["2% Gain", "2% Loss", "4% Gain", "No gain no loss"], ans: 0, exp: "Total CP = 16,000. Loss on VCR = 320, Profit on TV = 640. Net profit = 320. Profit % = (320/16000)*100 = 2% Gain." },
        { q: "A scooter was bought at ₹42,000. Its value depreciated at the rate of 8% per annum. Find its value after one year.", qHi: "एक स्कूटर ₹42,000 में खरीदा गया। 8% वार्षिक दर से इसके मूल्य का अवमूल्यन (depreciation) हुआ। 1 वर्ष बाद इसका मूल्य क्या होगा?", opt: ["₹38,640", "₹39,200", "₹37,800", "₹40,000"], ans: 0, exp: "Value = 42000 * (1 - 8/100) = 42000 * 0.92 = ₹38,640." },
        { q: "The population of a city was 20,000 in the year 2020. It increased at the rate of 5% p.a. Find the population at the end of 2021.", qHi: "2020 में एक शहर की जनसंख्या 20,000 थी। यह 5% वार्षिक दर से बढ़ी। 2021 के अंत में जनसंख्या क्या होगी?", opt: ["21,000", "22,000", "20,500", "21,500"], ans: 0, exp: "Pop = 20000 * (1 + 5/100) = 20000 * 1.05 = 21,000." },
        { q: "If 12% GST is included on an article bought for ₹1,120, what is the original price before GST?", qHi: "यदि ₹1,120 में खरीदी गई वस्तु में 12% जीएसटी शामिल है, तो जीएसटी से पहले का मूल मूल्य क्या था?", opt: ["₹1,000", "₹1,008", "₹980", "₹1,050"], ans: 0, exp: "Price * 1.12 = 1120 => Price = 1120 / 1.12 = ₹1,000." },
        { q: "What is the simple interest on ₹5,000 at 8% per annum for 3 years?", qHi: "₹5,000 पर 8% वार्षिक दर से 3 वर्ष का साधारण ब्याज क्या होगा?", opt: ["₹1,200", "₹1,000", "₹1,500", "₹800"], ans: 0, exp: "SI = (P * R * T)/100 = (5000 * 8 * 3)/100 = ₹1,200." },
        { q: "What is the difference between CI and SI on ₹1,000 for 2 years at 10% per annum?", qHi: "₹1,000 पर 10% वार्षिक दर से 2 वर्ष के चक्रवृद्धि ब्याज और साधारण ब्याज में क्या अंतर है?", opt: ["₹10", "₹20", "₹5", "₹1"], ans: 0, exp: "Difference for 2 years = P*(R/100)^2 = 1000 * (10/100)^2 = 1000 * 0.01 = ₹10." },
        { q: "A fan marked at ₹1,500 is offered at a discount of 20%. What is its selling price?", qHi: "₹1,500 अंकित मूल्य वाले पंखे पर 20% बट्टा दिया जाता है। इसका विक्रय मूल्य क्या है?", opt: ["₹1,200", "₹1,300", "₹1,100", "₹1,250"], ans: 0, exp: "Discount = 20% of 1500 = ₹300. SP = 1500 - 300 = ₹1,200." },
        { q: "Find the amount if ₹8,000 is lent at 5% p.a. compound interest for 2 years.", qHi: "यदि ₹8,000 को 5% वार्षिक चक्रवृद्धि ब्याज पर 2 वर्ष के लिए दिया जाए, तो मिश्रधन क्या होगा?", opt: ["₹8,820", "₹8,800", "₹8,900", "₹9,000"], ans: 0, exp: "A = 8000 * (21/20)^2 = 8000 * 441/400 = 20 * 441 = ₹8,820." },
        { q: "If cost price is ₹250 and selling price is ₹300, find profit percentage.", qHi: "यदि क्रय मूल्य ₹250 और विक्रय मूल्य ₹300 हो, तो लाभ प्रतिशत ज्ञात कीजिए।", opt: ["20%", "25%", "15%", "10%"], ans: 0, exp: "Profit = 50. Profit % = (50/250)*100 = 20%." },
        { q: "Discount is always calculated on which price?", qHi: "बट्टा (Discount) सदैव किस मूल्य पर आकलित किया जाता है?", opt: ["Marked Price (अंकित मूल्य)", "Cost Price (क्रय मूल्य)", "Selling Price (विक्रय मूल्य)", "None of these"], ans: 0, exp: "Discount is calculated strictly on Marked Price (MP)." },
        { q: "Sales tax or GST is always calculated on which price?", qHi: "बिक्री कर या जीएसटी सदैव किस मूल्य पर लगाया जाता है?", opt: ["Selling Price / Bill Amount", "Cost Price", "Marked Price only", "Profit"], ans: 0, exp: "Sales Tax/GST is added to the sale price (selling price of the item)." },
        { q: "A sum of ₹10,000 is invested at 8% per annum compounded half-yearly for 1 year. The number of compounding periods is:", qHi: "₹10,000 को 1 वर्ष के लिए 8% वार्षिक दर से अर्धवार्षिक संयोजित किया जाता है। ब्याज संयोजन अवधियों की संख्या क्या होगी?", opt: ["2", "1", "4", "12"], ans: 0, exp: "In 1 year, there are two half-years (periods = 2)." },
        { q: "Convert the ratio 3:4 to percentage.", qHi: "अनुपात 3:4 को प्रतिशत में बदलिए।", opt: ["75%", "60%", "80%", "25%"], ans: 0, exp: "(3/4) * 100% = 75%." },
        { q: "72% of 25 students are good in mathematics. How many are NOT good in mathematics?", qHi: "25 विद्यार्थियों में से 72% गणित में अच्छे हैं। कितने विद्यार्थी गणित में अच्छे नहीं हैं?", opt: ["7", "18", "6", "8"], ans: 0, exp: "Not good % = 100 - 72 = 28%. Students = 28% of 25 = (28/100)*25 = 7." },
        { q: "A football team won 10 matches out of the total matches they played. If their win percentage was 40%, how many matches did they play in all?", qHi: "एक फुटबॉल टीम ने कुल खेले गए मैचों में से 10 जीते। यदि उनकी जीत का प्रतिशत 40 था, तो उन्होंने कुल कितने मैच खेले?", opt: ["25", "30", "20", "40"], ans: 0, exp: "40% of Total = 10 => Total = 10 * 100 / 40 = 25 matches." },
        { q: "If Chameli had ₹600 left after spending 75% of her money, how much did she have in the beginning?", qHi: "यदि चमेली के पास अपने धन का 75% खर्च करने के बाद ₹600 बचे, तो शुरू में उसके पास कितने रुपए थे?", opt: ["₹2,400", "₹1,800", "₹3,000", "₹2,000"], ans: 0, exp: "Remaining = 25% = ₹600. Total = 600 * 100 / 25 = ₹2,400." },
        { q: "Find the compound interest on ₹12,600 for 2 years at 10% per annum compounded annually.", qHi: "₹12,600 पर 2 वर्ष के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज क्या होगा?", opt: ["₹2,646", "₹2,520", "₹2,700", "₹3,000"], ans: 0, exp: "A = 12600 * (11/10)^2 = 12600 * 1.21 = ₹15,246. CI = 15246 - 12600 = ₹2,646." },
        { q: "At what rate percent per annum will a sum double itself in 8 years at simple interest?", qHi: "साधारण ब्याज की किस वार्षिक दर से कोई धनराशि 8 वर्ष में दोगुनी हो जाएगी?", opt: ["12.5%", "10%", "15%", "8%"], ans: 0, exp: "SI = P. P = (P * R * 8)/100 => R = 100/8 = 12.5%." },
        { q: "In the formula A = P(1 + R/100)^n, what does 'n' represent?", qHi: "सूत्र A = P(1 + R/100)^n में 'n' क्या दर्शाता है?", opt: ["Number of conversion periods", "Total money", "Rate of interest", "Principal"], ans: 0, exp: "n represents the number of compounding time periods." },
        { q: "A table marked at ₹15,000 is available for ₹14,400. Find the discount percent.", qHi: "₹15,000 अंकित मूल्य वाली मेज ₹14,400 में उपलब्ध है। बट्टा प्रतिशत ज्ञात कीजिए।", opt: ["4%", "5%", "6%", "3%"], ans: 0, exp: "Discount = 600. Discount % = (600/15000)*100 = 4%." },
        { q: "If an almirah is sold at ₹13,600 after 15% discount, find its marked price.", qHi: "यदि एक अलमारी 15% बट्टे के बाद ₹13,600 में बेची जाती है, तो इसका अंकित मूल्य ज्ञात कीजिए।", opt: ["₹16,000", "₹15,000", "₹18,000", "₹17,000"], ans: 0, exp: "85% of MP = 13600 => MP = 13600 * 100 / 85 = ₹16,000." },
        { q: "The cost of an article was ₹15,500. ₹450 were spent on its repairs. If it is sold for a profit of 15%, find the selling price.", qHi: "एक वस्तु का मूल्य ₹15,500 था। ₹450 इसकी मरम्मत पर खर्च किए गए। यदि इसे 15% लाभ पर बेचा जाए, तो विक्रय मूल्य क्या होगा?", opt: ["₹18,342.50", "₹18,000", "₹17,500", "₹18,500"], ans: 0, exp: "Total CP = 15500 + 450 = ₹15,950. SP = 15950 * 1.15 = ₹18,342.50." },
        { q: "A milkman sold two of his buffaloes for ₹20,000 each. On one he made a gain of 5% and on the other a loss of 10%. Overall result is:", qHi: "एक दूधवाले ने अपनी दो भैंसों को ₹20,000 प्रति भैंस की दर से बेचा। एक पर 5% लाभ और दूसरी पर 10% हानि हुई। कुल मिलाकर क्या हुआ?", opt: ["Overall loss of ₹1,269.84", "Overall profit of ₹1,000", "No loss no gain", "Overall loss of ₹2,000"], ans: 0, exp: "CP1 = 20000/1.05 = 19047.62. CP2 = 20000/0.90 = 22222.22. Total CP = 41269.84. Total SP = 40000. Loss = ₹1269.84." },
        { q: "Find the CI paid when a sum of ₹10,000 is invested for 1 year and 3 months at 8 1/2% per annum compounded annually.", qHi: "₹10,000 पर 1 वर्ष 3 माह के लिए 8 1/2% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए।", opt: ["₹1,109.28", "₹1,000", "₹1,250", "₹950"], ans: 0, exp: "A = 10000 * (1 + 17/200) * (1 + (1/4)*(17/200)) = 10000 * (217/200) * (817/800) = ₹11,109.28. CI = ₹1,109.28." },
        { q: "What is 20% of ₹2,500?", qHi: "₹2,500 का 20% कितना होगा?", opt: ["₹500", "₹250", "₹750", "₹400"], ans: 0, exp: "(20/100) * 2500 = ₹500." },
        { q: "If the price of petrol increases by 25%, by what percent must a driver reduce consumption so expenditure remains same?", qHi: "यदि पेट्रोल के मूल्य में 25% की वृद्धि हो जाए, तो चालक को अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए ताकि खर्च समान रहे?", opt: ["20%", "25%", "15%", "10%"], ans: 0, exp: "Reduction % = [r / (100 + r)] * 100 = (25/125)*100 = 20%." },
        { q: "Find the ratio of 5 m to 10 km.", qHi: "5 मीटर का 10 किमी से अनुपात ज्ञात कीजिए।", opt: ["1 : 2000", "1 : 200", "1 : 20", "1 : 2"], ans: 0, exp: "10 km = 10,000 m. Ratio = 5 / 10000 = 1 : 2000." }
      ];

      const item = compQuestions[qNum - 1];
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
  // CHAPTER 8: ALGEBRAIC EXPRESSIONS AND IDENTITIES (बीजीय व्यंजक एवं सर्वसमिकाएँ)
  // =========================================================================
  {
    id: "ncert-c8-m08",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 8,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 8: Algebraic Expressions and Identities (बीजीय व्यंजक एवं सर्वसमिकाएँ)",
    titleHi: "अध्याय 8: बीजीय व्यंजक एवं सर्वसमिकाएँ (Algebraic Expressions and Identities)",
    pdfUrl: "/ncert_books/class8/math_ch08.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch08_hi.pdf",
    competitionEdge: "Core algebra chapter forming the backbone of all advanced exams. Covers terms, factors, like/unlike terms, addition/subtraction, binomial multiplication, and the four standard algebraic identities: (a+b)^2, (a-b)^2, (a+b)(a-b)=a^2-b^2, and (x+a)(x+b)=x^2+(a+b)x+ab.",
    competitionEdgeHi: "उन्नत बीजगणित की रीढ़। इसमें पद, गुणनखंड, सजातीय व विजातीय पद, व्यंजकों का जोड़-घटाव व गुणा, तथा चार मानक सर्वसमिकाएँ: (a+b)^2 = a^2+2ab+b^2, (a-b)^2 = a^2-2ab+b^2, (a+b)(a-b) = a^2-b^2 तथा (x+a)(x+b) = x^2+(a+b)x+ab का अनुप्रयोग शामिल है।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Standard Identities & Polynomial Arithmetic",
        headingHi: "1. एनसीईआरटी मूल पाठ: मानक सर्वसमिकाएँ एवं बहुपदों का गुणन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              An <strong>Identity</strong> is an equality which is true for ALL values of the variables. An equation is true only for certain values of the variable!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ The 4 Golden Algebraic Identities</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Identity Number</th>
                  <th>Algebraic Identity</th>
                  <th>Numerical Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identity I</strong></td>
                  <td>\\( (a + b)^2 = a^2 + 2ab + b^2 \\)</td>
                  <td>\\( 103^2 = (100+3)^2 = 10000 + 600 + 9 = 10609 \\)</td>
                </tr>
                <tr>
                  <td><strong>Identity II</strong></td>
                  <td>\\( (a - b)^2 = a^2 - 2ab + b^2 \\)</td>
                  <td>\\( 99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801 \\)</td>
                </tr>
                <tr>
                  <td><strong>Identity III</strong></td>
                  <td>\\( (a + b)(a - b) = a^2 - b^2 \\)</td>
                  <td>\\( 102 \\times 98 = (100+2)(100-2) = 10000 - 4 = 9996 \\)</td>
                </tr>
                <tr>
                  <td><strong>Identity IV</strong></td>
                  <td>\\( (x + a)(x + b) = x^2 + (a + b)x + ab \\)</td>
                  <td>\\( 103 \\times 104 = (100+3)(100+4) = 10000 + 700 + 12 = 10712 \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              <strong>सर्वसमिका (Identity)</strong> ऐसी समिका होती है जो अपने चरों के <strong>सभी मानों के लिए सत्य</strong> होती है। जबकि सामान्य समीकरण केवल कुछ विशिष्ट मानों के लिए ही सत्य होता है!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ 4 मुख्य मानक सर्वसमिकाएँ</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>सर्वसमिका</th>
                  <th>बीजीय रूप</th>
                  <th>संख्यात्मक उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>सर्वसमिका I</strong></td>
                  <td>\\( (a + b)^2 = a^2 + 2ab + b^2 \\)</td>
                  <td>\\( 103^2 = (100+3)^2 = 10000 + 600 + 9 = 10609 \\)</td>
                </tr>
                <tr>
                  <td><strong>सर्वसमिका II</strong></td>
                  <td>\\( (a - b)^2 = a^2 - 2ab + b^2 \\)</td>
                  <td>\\( 99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801 \\)</td>
                </tr>
                <tr>
                  <td><strong>सर्वसमिका III</strong></td>
                  <td>\\( (a + b)(a - b) = a^2 - b^2 \\)</td>
                  <td>\\( 102 \\times 98 = (100+2)(100-2) = 10000 - 4 = 9996 \\)</td>
                </tr>
                <tr>
                  <td><strong>सर्वसमिका IV</strong></td>
                  <td>\\( (x + a)(x + b) = x^2 + (a + b)x + ab \\)</td>
                  <td>\\( 103 \\times 104 = (100+3)(100+4) = 10000 + 700 + 12 = 10712 \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const algQuestions = [
        { q: "Using identity (a - b)^2 = a^2 - 2ab + b^2, evaluate 99^2.", qHi: "सर्वसमिका (a - b)^2 का प्रयोग कर 99^2 का मान ज्ञात कीजिए।", opt: ["9801", "9810", "9901", "9701"], ans: 0, exp: "(100 - 1)^2 = 10000 - 200 + 1 = 9801." },
        { q: "Evaluate 105 × 95 using the identity (a + b)(a - b) = a^2 - b^2.", qHi: "सर्वसमिका (a + b)(a - b) = a^2 - b^2 द्वारा 105 × 95 का मान ज्ञात कीजिए।", opt: ["9975", "9985", "9950", "9925"], ans: 0, exp: "(100 + 5)(100 - 5) = 100^2 - 5^2 = 10000 - 25 = 9975." },
        { q: "What is the product of (2x + 3y) and (2x - 3y)?", qHi: "(2x + 3y) और (2x - 3y) का गुणनफल क्या होगा?", opt: ["4x^2 - 9y^2", "4x^2 + 9y^2", "4x^2 - 12xy + 9y^2", "4x - 9y"], ans: 0, exp: "By identity (a+b)(a-b) = a^2 - b^2: (2x)^2 - (3y)^2 = 4x^2 - 9y^2." },
        { q: "How many terms are there in a trinomial?", qHi: "एक त्रिपद (trinomial) में कितने पद होते हैं?", opt: ["3", "1", "2", "4"], ans: 0, exp: "A trinomial contains exactly three non-zero terms." },
        { q: "What are the like terms in: 7x, 14, -13x, 5x^2, 7y, 7xy?", qHi: "7x, 14, -13x, 5x^2, 7y, 7xy में समान (like) पद कौन से हैं?", opt: ["7x and -13x", "7x and 7y", "7x and 5x^2", "7x, 7y, 7xy"], ans: 0, exp: "Like terms have the exact same algebraic factors: 7x and -13x." },
        { q: "Simplify: (a + b)^2 + (a - b)^2.", qHi: "सरल कीजिए: (a + b)^2 + (a - b)^2।", opt: ["2(a^2 + b^2)", "4ab", "2a^2", "2b^2"], ans: 0, exp: "(a^2 + 2ab + b^2) + (a^2 - 2ab + b^2) = 2a^2 + 2b^2 = 2(a^2 + b^2)." },
        { q: "Simplify: (a + b)^2 - (a - b)^2.", qHi: "सरल कीजिए: (a + b)^2 - (a - b)^2।", opt: ["4ab", "2(a^2 + b^2)", "2ab", "0"], ans: 0, exp: "(a^2 + 2ab + b^2) - (a^2 - 2ab + b^2) = 4ab." },
        { q: "Find the coefficient of y in the expression 4x - 3y + 5.", qHi: "व्यंजक 4x - 3y + 5 में y का गुणांक क्या है?", opt: ["-3", "3", "4", "5"], ans: 0, exp: "The numerical factor multiplying y is -3." },
        { q: "Evaluate: (103)^2 using algebraic identities.", qHi: "बीजीय सर्वसमिका द्वारा (103)^2 का मान क्या है?", opt: ["10609", "10606", "10909", "10309"], ans: 0, exp: "(100 + 3)^2 = 10000 + 600 + 9 = 10609." },
        { q: "Multiply the monomials: (4p) × (-7q^2) × (-p).", qHi: "एकपदों का गुणा कीजिए: (4p) × (-7q^2) × (-p)।", opt: ["28p^2 q^2", "-28p^2 q^2", "28pq^2", "-28pq"], ans: 0, exp: "4 * (-7) * (-1) = 28. p * p * q^2 = p^2 q^2. Product = 28p^2 q^2." },
        { q: "Find the value of (x + 1/x)^2 if x + 1/x = 5.", qHi: "यदि x + 1/x = 5 हो, तो (x + 1/x)^2 का मान क्या होगा?", opt: ["25", "23", "27", "21"], ans: 0, exp: "(x + 1/x)^2 = 5^2 = 25." },
        { q: "If x + 1/x = 5, what is the value of x^2 + 1/x^2?", qHi: "यदि x + 1/x = 5 हो, तो x^2 + 1/x^2 का मान क्या होगा?", opt: ["23", "25", "27", "21"], ans: 0, exp: "x^2 + 1/x^2 = (x + 1/x)^2 - 2 = 25 - 2 = 23." },
        { q: "If x - 1/x = 4, find x^2 + 1/x^2.", qHi: "यदि x - 1/x = 4 हो, तो x^2 + 1/x^2 का मान क्या होगा?", opt: ["18", "16", "14", "20"], ans: 0, exp: "(x - 1/x)^2 + 2 = 4^2 + 2 = 16 + 2 = 18." },
        { q: "Evaluate 501 × 502 using (x + a)(x + b) = x^2 + (a + b)x + ab.", qHi: "सर्वसमिका (x + a)(x + b) द्वारा 501 × 502 का मान क्या होगा?", opt: ["251502", "251002", "250502", "252002"], ans: 0, exp: "(500 + 1)(500 + 2) = 250000 + 500(3) + 2 = 250000 + 1500 + 2 = 251502." },
        { q: "What must be added to 4x^2 + 9y^2 to make it a perfect square trinomial?", qHi: "4x^2 + 9y^2 को एक पूर्ण वर्ग त्रिपद बनाने के लिए इसमें क्या जोड़ना चाहिए?", opt: ["12xy", "6xy", "24xy", "36xy"], ans: 0, exp: "(2x)^2 + (3y)^2 + 2(2x)(3y) = 4x^2 + 9y^2 + 12xy." },
        { q: "Add: 7xy + 5yz - 3zx and 4yz + 9zx - 4y.", qHi: "जोड़िए: 7xy + 5yz - 3zx और 4yz + 9zx - 4y।", opt: ["7xy + 9yz + 6zx - 4y", "7xy + 9yz + 12zx", "11xyz", "7xy + yz + 6zx"], ans: 0, exp: "7xy + (5yz + 4yz) + (-3zx + 9zx) - 4y = 7xy + 9yz + 6zx - 4y." },
        { q: "Subtract 4a - 7ab + 3b + 12 from 12a - 9ab + 5b - 3.", qHi: "12a - 9ab + 5b - 3 में से 4a - 7ab + 3b + 12 को घटाइए।", opt: ["8a - 2ab + 2b - 15", "8a + 2ab + 2b + 9", "16a - 16ab + 8b + 9", "8a - 2ab - 2b - 15"], ans: 0, exp: "(12a - 4a) + (-9ab + 7ab) + (5b - 3b) + (-3 - 12) = 8a - 2ab + 2b - 15." },
        { q: "Find the volume of a rectangular box with length 2ax, breadth 3by, and height 5cz.", qHi: "लंबाई 2ax, चौड़ाई 3by और ऊँचाई 5cz वाले आयताकार बक्से का आयतन क्या होगा?", opt: ["30abcxyz", "10abcxyz", "60abcxyz", "15abcxyz"], ans: 0, exp: "Volume = l * b * h = (2ax) * (3by) * (5cz) = 30abcxyz." },
        { q: "What is the degree of the polynomial 5x^3 - 4x^2 + 7x - 2?", qHi: "बहुपद 5x^3 - 4x^2 + 7x - 2 की घात (degree) क्या है?", opt: ["3", "2", "1", "0"], ans: 0, exp: "The highest power of the variable x is 3." },
        { q: "Simplify: a(a^2 + a + 1) + 5 and find its value for a = 0.", qHi: "सरल कीजिए: a(a^2 + a + 1) + 5 और a = 0 के लिए इसका मान ज्ञात कीजिए।", opt: ["5", "0", "1", "6"], ans: 0, exp: "a^3 + a^2 + a + 5. For a = 0: 0 + 0 + 0 + 5 = 5." },
        { q: "An algebraic expression having only one term is called a:", qHi: "केवल एक पद वाले बीजीय व्यंजक को क्या कहते हैं?", opt: ["Monomial (एकपद)", "Binomial", "Trinomial", "Polynomial"], ans: 0, exp: "An expression with a single term is a monomial." },
        { q: "An algebraic expression having two unlike terms is called a:", qHi: "दो असमान पदों वाले बीजीय व्यंजक को क्या कहते हैं?", opt: ["Binomial (द्विपद)", "Monomial", "Trinomial", "Constant"], ans: 0, exp: "An expression with two terms is a binomial." },
        { q: "What is the value of (a + b)(a - b) + (b + c)(b - c) + (c + a)(c - a)?", qHi: "(a + b)(a - b) + (b + c)(b - c) + (c + a)(c - a) का मान क्या होगा?", opt: ["0", "a^2 + b^2 + c^2", "2(a^2 + b^2 + c^2)", "1"], ans: 0, exp: "(a^2 - b^2) + (b^2 - c^2) + (c^2 - a^2) = 0." },
        { q: "If a + b = 9 and ab = 20, find a^2 + b^2.", qHi: "यदि a + b = 9 और ab = 20 हो, तो a^2 + b^2 का मान ज्ञात कीजिए।", opt: ["41", "81", "61", "51"], ans: 0, exp: "a^2 + b^2 = (a + b)^2 - 2ab = 9^2 - 2(20) = 81 - 40 = 41." },
        { q: "If a - b = 5 and ab = 14, find a^2 + b^2.", qHi: "यदि a - b = 5 और ab = 14 हो, तो a^2 + b^2 का मान ज्ञात कीजिए।", opt: ["53", "25", "39", "43"], ans: 0, exp: "a^2 + b^2 = (a - b)^2 + 2ab = 5^2 + 2(14) = 25 + 28 = 53." },
        { q: "Expand: (2x + 5)^2.", qHi: "(2x + 5)^2 का प्रसार कीजिए।", opt: ["4x^2 + 20x + 25", "4x^2 + 25", "4x^2 + 10x + 25", "2x^2 + 20x + 25"], ans: 0, exp: "(2x)^2 + 2(2x)(5) + 5^2 = 4x^2 + 20x + 25." },
        { q: "Expand: (3a - 1/2)^2.", qHi: "(3a - 1/2)^2 का प्रसार कीजिए।", opt: ["9a^2 - 3a + 1/4", "9a^2 + 1/4", "9a^2 - 6a + 1/4", "9a^2 - 3a - 1/4"], ans: 0, exp: "(3a)^2 - 2(3a)(1/2) + (1/2)^2 = 9a^2 - 3a + 1/4." },
        { q: "Find the product: (x - 4)(x - 2).", qHi: "(x - 4)(x - 2) का गुणनफल क्या होगा?", opt: ["x^2 - 6x + 8", "x^2 + 6x + 8", "x^2 - 6x - 8", "x^2 - 8"], ans: 0, exp: "x^2 + (-4 - 2)x + (-4)(-2) = x^2 - 6x + 8." },
        { q: "What is the value of 78 × 82 using identities?", qHi: "सर्वसमिका द्वारा 78 × 82 का मान क्या होगा?", opt: ["6396", "6400", "6384", "6392"], ans: 0, exp: "(80 - 2)(80 + 2) = 80^2 - 2^2 = 6400 - 4 = 6396." },
        { q: "Evaluate 8.9^2 using algebraic identity.", qHi: "बीजीय सर्वसमिका द्वारा 8.9^2 का मान ज्ञात कीजिए।", opt: ["79.21", "80.21", "78.21", "79.11"], ans: 0, exp: "(9 - 0.1)^2 = 81 - 1.8 + 0.01 = 79.21." }
      ];

      const item = algQuestions[qNum - 1];
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
  // CHAPTER 9: MENSURATION (क्षेत्रमिति)
  // =========================================================================
  {
    id: "ncert-c8-m09",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 9,
    bookName: "Mathematics (गणित) — NCERT Class 8",
    title: "Chapter 9: Mensuration (क्षेत्रमिति)",
    titleHi: "अध्याय 9: क्षेत्रमिति (Mensuration)",
    pdfUrl: "/ncert_books/class8/math_ch09.pdf",
    pdfUrlHi: "/ncert_books/class8/math_ch09_hi.pdf",
    competitionEdge: "One of the most practical chapters in all competitive exams (SSC, State TETs, Railways, Defense). Formulas include Area of Trapezium (1/2*(a+b)*h), Area of Rhombus (1/2*d1*d2), Total & Curved Surface Area and Volume of Cuboid, Cube, and Right Circular Cylinder, along with metric unit conversions (1 L = 1000 cm^3, 1 m^3 = 1000 L).",
    competitionEdgeHi: "प्रतियोगी परीक्षाओं (एसएससी, टीईटी, रेलवे) का सर्वाधिक स्कोरिंग अध्याय। इसमें समलंब का क्षेत्रफल 1/2*(a+b)*h, समचतुर्भुज का क्षेत्रफल 1/2*d1*d2, घनाभ, घन एवं लंबवृत्तीय बेलन के वक्र व संपूर्ण पृष्ठ क्षेत्रफल तथा आयतन, और मात्रक रूपांतरण (1 लीटर = 1000 घन सेमी, 1 घन मीटर = 1000 लीटर) शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: 2D Quadrilaterals & 3D Solids Formulas",
        headingHi: "1. एनसीईआरटी मूल पाठ: द्विविमीय एवं त्रिविमीय आकृतियों के क्षेत्रफल व आयतन के सूत्र",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Mensuration measures length, area, and volume. Memorize the 2D plane formulas and 3D solid formulas with crystal clarity!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Table: 2D & 3D Mensuration</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Solid / Shape</th>
                  <th>Curved / Lateral Surface Area</th>
                  <th>Total Surface Area (TSA)</th>
                  <th>Volume (V)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Trapezium (समलंब)</strong></td>
                  <td>—</td>
                  <td>\\( \\text{Area} = \\frac{1}{2}(a + b)h \\)</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>Rhombus (समचतुर्भुज)</strong></td>
                  <td>—</td>
                  <td>\\( \\text{Area} = \\frac{1}{2} d_1 d_2 \\)</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>Cuboid (घनाभ)</strong></td>
                  <td>\\( 2(l + b)h \\)</td>
                  <td>\\( 2(lb + bh + hl) \\)</td>
                  <td>\\( l \\times b \\times h \\)</td>
                </tr>
                <tr>
                  <td><strong>Cube (घन)</strong></td>
                  <td>\\( 4a^2 \\)</td>
                  <td>\\( 6a^2 \\)</td>
                  <td>\\( a^3 \\)</td>
                </tr>
                <tr>
                  <td><strong>Cylinder (बेलन)</strong></td>
                  <td>\\( 2\\pi rh \\)</td>
                  <td>\\( 2\\pi r(r + h) \\)</td>
                  <td>\\( \\pi r^2 h \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Competitive Exam Unit Conversion Traps!</div>
            <p><strong>Trap 1 (Capacity & Volume):</strong></p>
            <ul>
              <li>\\( 1\\text{ cm}^3 = 1\\text{ mL} \\)</li>
              <li>\\( 1000\\text{ cm}^3 = 1\\text{ Litre} \\)</li>
              <li>\\( 1\\text{ m}^3 = 1000\\text{ Litres} = 1\\text{ kiloLitre} \\)</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              क्षेत्रमिति में लंबाई, क्षेत्रफल और आयतन की गणना की जाती है। 2D आकृतियों और 3D ठोसों के सूत्रों को कंठस्थ रखें!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ क्षेत्रमिति के रामबाण सूत्र</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>आकृति / ठोस</th>
                  <th>पार्श्व / वक्र पृष्ठ क्षेत्रफल</th>
                  <th>कुल पृष्ठ क्षेत्रफल (TSA)</th>
                  <th>आयतन (Volume)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>समलंब (Trapezium)</strong></td>
                  <td>—</td>
                  <td>\\( \\frac{1}{2}(\\text{समांतर भुजाओं का योग}) \\times \\text{ऊँचाई} \\)</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>समचतुर्भुज (Rhombus)</strong></td>
                  <td>—</td>
                  <td>\\( \\frac{1}{2} d_1 d_2 \\)</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td><strong>घनाभ (Cuboid)</strong></td>
                  <td>\\( 2(l + b)h \\)</td>
                  <td>\\( 2(lb + bh + hl) \\)</td>
                  <td>\\( l \\times b \\times h \\)</td>
                </tr>
                <tr>
                  <td><strong>घन (Cube)</strong></td>
                  <td>\\( 4a^2 \\)</td>
                  <td>\\( 6a^2 \\)</td>
                  <td>\\( a^3 \\)</td>
                </tr>
                <tr>
                  <td><strong>बेलन (Cylinder)</strong></td>
                  <td>\\( 2\\pi rh \\)</td>
                  <td>\\( 2\\pi r(r + h) \\)</td>
                  <td>\\( \\pi r^2 h \\)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ मात्रक रूपांतरण ट्रैप अलर्ट!</div>
            <ul>
              <li>\\( 1\\text{ cm}^3 = 1\\text{ mL} \\)</li>
              <li>\\( 1000\\text{ cm}^3 = 1\\text{ लीटर} \\)</li>
              <li>\\( 1\\text{ m}^3 = 1000\\text{ लीटर} = 1\\text{ किलोलीटर} \\)</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const mensQuestions = [
        { q: "The parallel sides of a trapezium are 10 cm and 20 cm, and the distance between them is 8 cm. Find its area.", qHi: "एक समलंब की समांतर भुजाएँ 10 सेमी और 20 सेमी हैं, तथा उनके बीच की दूरी 8 सेमी है। इसका क्षेत्रफल क्या होगा?", opt: ["120 cm^2", "240 cm^2", "100 cm^2", "80 cm^2"], ans: 0, exp: "Area = 1/2 * (a + b) * h = 1/2 * (10 + 20) * 8 = 1/2 * 30 * 8 = 120 cm^2." },
        { q: "The diagonals of a rhombus are 7.5 cm and 12 cm. Find its area.", qHi: "एक समचतुर्भुज के विकर्ण 7.5 सेमी और 12 सेमी हैं। इसका क्षेत्रफल ज्ञात कीजिए।", opt: ["45 cm^2", "90 cm^2", "50 cm^2", "36 cm^2"], ans: 0, exp: "Area = 1/2 * d1 * d2 = 1/2 * 7.5 * 12 = 45 cm^2." },
        { q: "Find the total surface area of a cube whose edge is 10 cm.", qHi: "10 सेमी भुजा वाले एक घन का कुल पृष्ठीय क्षेत्रफल क्या होगा?", opt: ["600 cm^2", "400 cm^2", "1000 cm^2", "100 cm^2"], ans: 0, exp: "TSA = 6 * a^2 = 6 * 10^2 = 600 cm^2." },
        { q: "Find the volume of a cylinder with radius 7 cm and height 10 cm. (Take pi = 22/7)", qHi: "7 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले एक बेलन का आयतन क्या होगा?", opt: ["1540 cm^3", "770 cm^3", "440 cm^3", "3080 cm^3"], ans: 0, exp: "Volume = pi * r^2 * h = (22/7) * 7 * 7 * 10 = 1540 cm^3." },
        { q: "A cuboidal water tank is 6 m long, 5 m wide, and 4.5 m deep. How many litres of water can it hold?", qHi: "एक घनाभाकार पानी की टंकी 6 मीटर लंबी, 5 मीटर चौड़ी और 4.5 मीटर गहरी है। इसमें कितने लीटर पानी समा सकता है?", opt: ["1,35,000 Litres", "13,500 Litres", "1,350 Litres", "13,50,000 Litres"], ans: 0, exp: "Volume = 6 * 5 * 4.5 = 135 m^3. Since 1 m^3 = 1000 L, capacity = 135 * 1000 = 1,35,000 Litres." },
        { q: "What is the curved surface area of a cylinder of radius 14 cm and height 20 cm?", qHi: "14 सेमी त्रिज्या और 20 सेमी ऊँचाई वाले बेलन का वक्र पृष्ठीय क्षेत्रफल क्या है?", opt: ["1760 cm^2", "880 cm^2", "3520 cm^2", "2000 cm^2"], ans: 0, exp: "CSA = 2 * pi * r * h = 2 * (22/7) * 14 * 20 = 2 * 22 * 2 * 20 = 1760 cm^2." },
        { q: "How many small cubes of edge 2 cm can be fit into a cuboid of dimensions 8 cm × 6 cm × 4 cm?", qHi: "8 सेमी × 6 सेमी × 4 सेमी विमाओं वाले घनाभ में 2 सेमी भुजा वाले कितने छोटे घन रखे जा सकते हैं?", opt: ["24", "12", "48", "96"], ans: 0, exp: "Volume of cuboid = 8*6*4 = 192 cm^3. Volume of cube = 2^3 = 8 cm^3. Number of cubes = 192 / 8 = 24." },
        { q: "Find the area of a trapezium where area is 34 cm^2, one parallel side is 10 cm, and height is 4 cm. What is the other parallel side?", qHi: "एक समलंब का क्षेत्रफल 34 सेमी^2, एक समांतर भुजा 10 सेमी और ऊँचाई 4 सेमी है। दूसरी समांतर भुजा क्या होगी?", opt: ["7 cm", "6 cm", "8 cm", "5 cm"], ans: 0, exp: "34 = 1/2 * (10 + b) * 4 => 34 = 2(10 + b) => 17 = 10 + b => b = 7 cm." },
        { q: "The lateral surface area of a hollow cylinder is 4224 cm^2. It is cut along its height and formed into a rectangular sheet of width 33 cm. Find the perimeter of the sheet.", qHi: "एक खोखले बेलन का वक्र पृष्ठ क्षेत्रफल 4224 सेमी^2 है। इसे ऊँचाई के अनुदिश काटकर 33 सेमी चौड़ाई वाली आयताकार चादर बनाई जाती है। चादर का परिमाप क्या है?", opt: ["322 cm", "161 cm", "644 cm", "256 cm"], ans: 0, exp: "Area = l * b => 4224 = l * 33 => l = 128 cm. Perimeter = 2(128 + 33) = 2(161) = 322 cm." },
        { q: "Find the height of a cuboid whose volume is 275 cm^3 and base area is 25 cm^2.", qHi: "उस घनाभ की ऊँचाई ज्ञात कीजिए जिसका आयतन 275 सेमी^3 और आधार का क्षेत्रफल 25 सेमी^2 है।", opt: ["11 cm", "12 cm", "10 cm", "15 cm"], ans: 0, exp: "Height = Volume / Base Area = 275 / 25 = 11 cm." },
        { q: "What is 1 litre equal to in cubic centimetres?", qHi: "1 लीटर कितने घन सेंटीमीटर (cm^3) के बराबर होता है?", opt: ["1000 cm^3", "100 cm^3", "10,000 cm^3", "10 cm^3"], ans: 0, exp: "1 L = 1000 cm^3." },
        { q: "What is the formula for lateral surface area of a cuboid?", qHi: "घनाभ के पार्श्व पृष्ठीय क्षेत्रफल का सूत्र क्या है?", opt: ["2(l + b)h", "2(lb + bh + hl)", "lbh", "4a^2"], ans: 0, exp: "LSA of cuboid (area of 4 walls) = 2(l + b)h." },
        { q: "If the edge of a cube is doubled, its volume increases by how many times?", qHi: "यदि किसी घन की भुजा को दोगुना कर दिया जाए, तो उसका आयतन कितने गुना बढ़ जाएगा?", opt: ["8 times", "4 times", "2 times", "16 times"], ans: 0, exp: "V' = (2a)^3 = 8a^3 = 8 times original volume." },
        { q: "If the edge of a cube is doubled, its surface area increases by how many times?", qHi: "यदि किसी घन की भुजा को दोगुना कर दिया जाए, तो उसका पृष्ठीय क्षेत्रफल कितने गुना बढ़ जाएगा?", opt: ["4 times", "2 times", "8 times", "6 times"], ans: 0, exp: "SA' = 6*(2a)^2 = 4*(6a^2) = 4 times." },
        { q: "Find the total surface area of a cylinder of radius 7 cm and height 8 cm.", qHi: "7 सेमी त्रिज्या और 8 सेमी ऊँचाई वाले बेलन का कुल पृष्ठीय क्षेत्रफल क्या होगा?", opt: ["660 cm^2", "352 cm^2", "704 cm^2", "550 cm^2"], ans: 0, exp: "TSA = 2 * pi * r * (r + h) = 2 * (22/7) * 7 * (7 + 8) = 44 * 15 = 660 cm^2." },
        { q: "The floor of a building consists of 3000 tiles which are rhombus shaped and each of its diagonals are 45 cm and 30 cm. Find total cost of polishing the floor at ₹4 per m^2.", qHi: "एक भवन के फर्श में 3000 समचतुर्भुजाकार टाइलें हैं और प्रत्येक के विकर्ण 45 सेमी व 30 सेमी हैं। ₹4 प्रति वर्ग मीटर की दर से फर्श को पॉलिश करने का कुल खर्च ज्ञात कीजिए।", opt: ["₹810", "₹1620", "₹405", "₹8100"], ans: 0, exp: "Area of 1 tile = 1/2 * 45 * 30 = 675 cm^2. Total area = 3000 * 675 = 20,25,000 cm^2 = 202.5 m^2. Cost = 202.5 * 4 = ₹810." },
        { q: "Find the volume of a cube whose total surface area is 486 cm^2.", qHi: "उस घन का आयतन ज्ञात कीजिए जिसका कुल पृष्ठीय क्षेत्रफल 486 सेमी^2 है।", opt: ["729 cm^3", "512 cm^3", "343 cm^3", "1000 cm^3"], ans: 0, exp: "6a^2 = 486 => a^2 = 81 => a = 9 cm. Volume = 9^3 = 729 cm^3." },
        { q: "A road roller takes 750 complete revolutions to move once over to level a road. Find the area of the road if diameter of road roller is 84 cm and length is 1 m.", qHi: "सड़क को समतल करने के लिए एक रोड रोलर को 750 चक्कर लगाने पड़ते हैं। यदि रोलर का व्यास 84 सेमी और लंबाई 1 मीटर हो, तो सड़क का क्षेत्रफल ज्ञात कीजिए।", opt: ["1980 m^2", "198 m^2", "3960 m^2", "990 m^2"], ans: 0, exp: "r = 42 cm = 0.42 m, h = 1 m. CSA = 2 * (22/7) * 0.42 * 1 = 2.64 m^2. Road area = 750 * 2.64 = 1980 m^2." },
        { q: "Find the diagonal of a cuboid of dimensions 12 cm × 9 cm × 8 cm.", qHi: "12 सेमी × 9 सेमी × 8 सेमी विमाओं वाले घनाभ के विकर्ण की लंबाई क्या होगी?", opt: ["17 cm", "15 cm", "19 cm", "21 cm"], ans: 0, exp: "d = sqrt(12^2 + 9^2 + 8^2) = sqrt(144 + 81 + 64) = sqrt(289) = 17 cm." },
        { q: "How many litres of water can a cylinder of radius 1 m and height 7 m hold?", qHi: "1 मीटर त्रिज्या और 7 मीटर ऊँचाई वाला बेलनाकार बर्तन कितने लीटर पानी रख सकता है?", opt: ["22,000 Litres", "2,200 Litres", "220 Litres", "2,20,000 Litres"], ans: 0, exp: "Volume = (22/7) * 1 * 1 * 7 = 22 m^3. Since 1 m^3 = 1000 L: 22 * 1000 = 22,000 Litres." },
        { q: "The ratio of radii of two cylinders is 2:3 and their heights are in ratio 5:3. The ratio of their volumes is:", qHi: "दो बेलनों की त्रिज्याओं का अनुपात 2:3 और उनकी ऊँचाइयों का अनुपात 5:3 है। उनके आयतनों का अनुपात क्या होगा?", opt: ["20 : 27", "10 : 9", "4 : 9", "25 : 9"], ans: 0, exp: "V1/V2 = (r1/r2)^2 * (h1/h2) = (2/3)^2 * (5/3) = (4/9) * (5/3) = 20/27." },
        { q: "What is the area of a square whose diagonal is 10 cm?", qHi: "उस वर्ग का क्षेत्रफल क्या होगा जिसका विकर्ण 10 सेमी है?", opt: ["50 cm^2", "100 cm^2", "25 cm^2", "75 cm^2"], ans: 0, exp: "Area = 1/2 * d^2 = 1/2 * 10^2 = 50 cm^2." },
        { q: "What is the area of a general quadrilateral with diagonal d = 10 cm and perpendicular offsets h1 = 5 cm, h2 = 3 cm?", qHi: "विकर्ण d = 10 सेमी तथा लंब h1 = 5 सेमी, h2 = 3 सेमी वाले एक सामान्य चतुर्भुज का क्षेत्रफल क्या है?", opt: ["40 cm^2", "80 cm^2", "50 cm^2", "30 cm^2"], ans: 0, exp: "Area = 1/2 * d * (h1 + h2) = 1/2 * 10 * (5 + 3) = 5 * 8 = 40 cm^2." },
        { q: "A cube has a volume of 1331 cm^3. What is its total surface area?", qHi: "एक घन का आयतन 1331 सेमी^3 है। इसका कुल पृष्ठीय क्षेत्रफल क्या होगा?", opt: ["726 cm^2", "600 cm^2", "846 cm^2", "512 cm^2"], ans: 0, exp: "a = cbrt(1331) = 11 cm. TSA = 6 * 11^2 = 6 * 121 = 726 cm^2." },
        { q: "The circumference of the base of a cylindrical vessel is 132 cm and its height is 25 cm. How many litres of water can it hold?", qHi: "एक बेलनाकार बर्तन के आधार की परिधि 132 सेमी और ऊँचाई 25 सेमी है। इसमें कितने लीटर पानी आ सकता है?", opt: ["34.65 Litres", "346.5 Litres", "3.465 Litres", "3465 Litres"], ans: 0, exp: "2*pi*r = 132 => r = 21 cm. Volume = (22/7)*21*21*25 = 34,650 cm^3 = 34.65 Litres." },
        { q: "Find the ratio of lateral surface area to total surface area of a cube.", qHi: "एक घन के पार्श्व पृष्ठीय क्षेत्रफल और कुल पृष्ठीय क्षेत्रफल का अनुपात क्या है?", opt: ["2 : 3", "1 : 2", "3 : 4", "4 : 5"], ans: 0, exp: "LSA / TSA = 4a^2 / 6a^2 = 4/6 = 2:3." },
        { q: "The dimensions of a cinema hall are 100 m × 50 m × 18 m. How many persons can sit in the hall, if each person requires 150 m^3 of air?", qHi: "एक सिनेमा हॉल की माप 100 मी × 50 मी × 18 मी है। यदि प्रत्येक व्यक्ति को 150 घन मीटर वायु चाहिए, तो हॉल में कितने व्यक्ति बैठ सकते हैं?", opt: ["600", "500", "750", "450"], ans: 0, exp: "Volume = 100 * 50 * 18 = 90,000 m^3. Persons = 90,000 / 150 = 600 persons." },
        { q: "If the radius of a cylinder is doubled keeping height same, its volume becomes:", qHi: "यदि किसी बेलन की त्रिज्या को दोगुना कर दिया जाए जबकि ऊँचाई वही रहे, तो उसका आयतन हो जाएगा:", opt: ["4 times", "2 times", "8 times", "Half"], ans: 0, exp: "V' = pi * (2r)^2 * h = 4 * pi * r^2 * h = 4 times." },
        { q: "Find the area of a rhombus whose side is 5 cm and altitude is 4.8 cm.", qHi: "एक समचतुर्भुज का क्षेत्रफल ज्ञात कीजिए जिसकी भुजा 5 सेमी और शीर्षलंब 4.8 सेमी है।", opt: ["24 cm^2", "48 cm^2", "20 cm^2", "12 cm^2"], ans: 0, exp: "A rhombus is a parallelogram: Area = Base * Altitude = 5 * 4.8 = 24 cm^2." },
        { q: "Convert 50 m^3 into litres.", qHi: "50 घन मीटर को लीटर में बदलिए।", opt: ["50,000 Litres", "5,000 Litres", "500 Litres", "5,00,000 Litres"], ans: 0, exp: "1 m^3 = 1000 L, so 50 m^3 = 50 * 1000 = 50,000 Litres." }
      ];

      const item = mensQuestions[qNum - 1];
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
