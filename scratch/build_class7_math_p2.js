/**
 * scratch/build_class7_math_p2.js
 * NCERT Class 7 Mathematics - Chapters 6 to 9
 * Ch 6: The Triangle and its Properties (त्रिभुज और उसके गुण)
 * Ch 7: Comparing Quantities (राशियों की तुलना)
 * Ch 8: Rational Numbers (परिमेय संख्याएँ)
 * Ch 9: Perimeter and Area (परिमाप और क्षेत्रफल)
 * 
 * Exactly 30 bilingual competition-grade MCQs per chapter (120 MCQs total).
 */

module.exports = [
  // ==========================================
  // CHAPTER 6: The Triangle and its Properties (त्रिभुज और उसके गुण)
  // ==========================================
  {
    id: "ncert-c7-m06",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 6,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 6: The Triangle and its Properties (त्रिभुज और उसके गुण)",
    titleHi: "अध्याय 6: त्रिभुज और उसके गुण (Medians, Angles & Pythagoras Theorem)",
    readingTime: "25 mins read",
    badge: "Geometry Theorem Core",
    desc: "NCERT Class 7 Chapter 6: Medians and altitudes of triangles, exterior angle property, angle sum property (180°), triangle inequality (sum of two sides > third side), right-angled triangle, and Pythagoras theorem.",
    descHi: "एनसीईआरटी कक्षा 7 त्रिभुज और उसके गुण: माध्यिकाएँ एवं शीर्षलंब, बाह्य कोण प्रमेय, कोण योग गुणधर्म (180°), त्रिभुज असमिका (दो भुजाओं का योग > तीसरी भुजा), समकोण त्रिभुज एवं पाइथागोरस प्रमेय।",
    competitionEdge: "Massive weightage in CTET Paper 2, BPSC TRE 4.0 Middle (6-8), SSC CGL/CHSL, and State TETs. Triangle inequality tests, Pythagorean triplets, and exterior angle calculations appear in every single sitting.",
    competitionEdgeHi: "CTET पेपर 2 और BPSC शिक्षक भर्ती में हर बार पूछे जाने वाले प्रश्न: त्रिभुज के अस्तित्व की शर्त (दो भुजाओं का अंतर < तीसरी भुजा < दो भुजाओं का योग), पाइथागोरस त्रिक (Triplets) और माध्यिकाओं का संगमन बिंदु (केन्द्रक)।",
    pdfUrl: "/ncert_books/class7/math_ch06.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch06_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch06_Triangle_Properties.pdf",
    pdfSize: "1.64 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Medians, Altitudes & Exterior Angles",
        headingHi: "1. एनसीईआरटी मूल पाठ: माध्यिकाएँ, शीर्षलंब एवं बाह्य कोण प्रमेय",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! Triangles are the most rigid polygons in nature. NCERT distinguishes between a <strong>Median</strong> (line connecting a vertex to the midpoint of the opposite side) and an <strong>Altitude</strong> (perpendicular dropped from a vertex to the opposite side). The point of concurrency of medians is called the <strong>Centroid</strong>, which always divides each median in the ratio $2:1$!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Fundamental Triangle Theorems</div>
            <ul>
              <li><strong>Exterior Angle Property:</strong> An exterior angle of a triangle is equal to the sum of its two interior opposite angles:<br/>
                $$\mathbf{\angle ACD = \angle A + \angle B}$$
              </li>
              <li><strong>Angle Sum Property:</strong> The total measure of the three angles of a triangle is always $180^\circ$:<br/>
                $$\mathbf{\angle A + \angle B + \angle C = 180^\circ}$$
              </li>
              <li><strong>Triangle Inequality Property:</strong> The sum of the lengths of any two sides of a triangle is strictly GREATER than the third side:<br/>
                $$\mathbf{a + b > c, \quad b + c > a, \quad c + a > b}$$
                Equivalently: The length of the third side must lie strictly between the difference and sum of the other two sides:
                $$\mathbf{|a - b| < c < a + b}$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय छात्रों! त्रिभुज प्रकृति की सबसे मजबूत बहुभुज आकृति है। एनसीईआरटी में <strong>माध्यिका (Median)</strong> और <strong>शीर्षलंब (Altitude)</strong> में स्पष्ट अंतर समझाया गया है: माध्यिका सम्मुख भुजा के मध्य-बिंदु को मिलाती है, जबकि शीर्षलंब सम्मुख भुजा पर $90^\circ$ का लंब होता है। माध्यिकाओं का मिलन बिंदु <strong>केन्द्रक (Centroid)</strong> कहलाता है जो प्रत्येक माध्यिका को $2:1$ के अनुपात में बांटता है!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ त्रिभुज के मूलभूत प्रमेय</div>
            <ul>
              <li><strong>बाह्य कोण प्रमेय (Exterior Angle Theorem):</strong> किसी त्रिभुज का बाह्य कोण उसके दोनों सम्मुख अंतःकोणों के योग के बराबर होता है:<br/>
                $$\\mathbf{\\angle ACD = \\angle A + \\angle B}$$
              </li>
              <li><strong>कोण योग गुणधर्म (Angle Sum Property):</strong> त्रिभुज के तीनों अंतःकोणों का योग सदैव $180^\circ$ होता है:<br/>
                $$\\mathbf{\\angle A + \\angle B + \\angle C = 180^\circ}$$
              </li>
              <li><strong>त्रिभुज असमिका (Triangle Inequality):</strong> त्रिभुज की किन्हीं दो भुजाओं का योग सदैव तीसरी भुजा से बड़ा होता है:<br/>
                $$\\mathbf{a + b > c, \\quad b + c > a, \\quad c + a > b}$$
                अर्थात्: तीसरी भुजा का मान शेष दो भुजाओं के अंतर से बड़ा और उनके योग से छोटा होना चाहिए:
                $$\\mathbf{|a - b| < c < a + b}$$
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Right-Angled Triangle & Pythagoras Property",
        headingHi: "2. समकोण त्रिभुज एवं पाइथागोरस प्रमेय (पाइथागोरियन त्रिक)",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Pythagoras Property: $H^2 = P^2 + B^2$</div>
            <p>In a right-angled triangle, the side opposite to the right angle is called the <strong>Hypotenuse (कर्ण)</strong>, which is the longest side. The other two sides are called its legs (Perpendicular and Base).</p>
            <p><strong>Theorem of Pythagoras:</strong> The square on the hypotenuse is equal to the sum of the squares on the legs:<br/>
              $$\mathbf{H^2 = P^2 + B^2} \implies \mathbf{H = \sqrt{P^2 + B^2}}$$
            </p>
            <div class="exam-trap-box">
              <div class="trap-title">⚡ Top 10 Pythagorean Triplets for 5-Second Exam Solves</div>
              <p>Memorize these triplets to solve exam questions without doing square roots:</p>
              <ul>
                <li>$(3, 4, 5)$ and multiples: $(6, 8, 10)$, $(9, 12, 15)$, $(12, 16, 20)$</li>
                <li>$(5, 12, 13)$ and multiples: $(10, 24, 26)$</li>
                <li>$(7, 24, 25)$</li>
                <li>$(8, 15, 17)$</li>
                <li>$(9, 40, 41)$</li>
                <li>$(11, 60, 61)$</li>
                <li>$(12, 35, 37)$</li>
                <li>$(20, 21, 29)$</li>
              </ul>
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ पाइथागोरस प्रमेय: कर्ण² = लंब² + आधार²</div>
            <p>समकोण त्रिभुज में $90^\circ$ के कोण के सम्मुख भुजा को <strong>कर्ण (Hypotenuse)</strong> कहते हैं, जो त्रिभुज की सबसे लंबी भुजा होती है।</p>
            <p><strong>पाइथागोरस प्रमेय:</strong> कर्ण का वर्ग शेष दोनों भुजाओं के वर्गों के योग के बराबर होता है:<br/>
              $$\\mathbf{\\text{कर्ण}^2 = \\text{लंब}^2 + \\text{आधार}^2} \\implies \\mathbf{H = \\sqrt{P^2 + B^2}}$$
            </p>
            <div class="exam-trap-box">
              <div class="trap-title">⚡ परीक्षा में 5 सेकंड में उत्तर लाने वाले पाइथागोरियन त्रिक</div>
              <p>इन्हें याद रखने से परीक्षा में वर्गमूल निकालने का समय बच जाता है:</p>
              <ul>
                <li>$(3, 4, 5)$ और इसके गुणज: $(6, 8, 10)$, $(9, 12, 15)$, $(12, 16, 20)$</li>
                <li>$(5, 12, 13)$ और $(10, 24, 26)$</li>
                <li>$(7, 24, 25)$</li>
                <li>$(8, 15, 17)$</li>
                <li>$(9, 40, 41)$</li>
                <li>$(11, 60, 61)$</li>
                <li>$(20, 21, 29)$</li>
              </ul>
            </div>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "In triangle ABC, if angle A = 70° and angle B = 50°, what is the measure of exterior angle ACD formed by extending side BC?",
        qHi: "त्रिभुज ABC में, यदि कोण A = 70° और कोण B = 50° है, तो भुजा BC को आगे बढ़ाने पर बने बाह्य कोण ACD का मान क्या होगा?",
        options: ["100°", "110°", "120°", "130°"],
        optionsHi: ["100°", "110°", "120°", "130°"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "Exterior angle = Sum of interior opposite angles = 70° + 50° = 120°.",
        explanationHi: "बाह्य कोण = सम्मुख अंतःकोणों का योग = 70° + 50° = 120°।"
      },
      {
        id: 2,
        q: "Which of the following sets of side lengths can NOT form a valid triangle?",
        qHi: "निम्नलिखित में से भुजाओं का कौन-सा समूह एक वास्तविक त्रिभुज नहीं बना सकता?",
        options: ["3 cm, 4 cm, 5 cm", "6 cm, 8 cm, 10 cm", "2 cm, 3 cm, 6 cm", "5 cm, 12 cm, 13 cm"],
        optionsHi: ["3 सेमी, 4 सेमी, 5 सेमी", "6 सेमी, 8 सेमी, 10 सेमी", "2 सेमी, 3 सेमी, 6 सेमी", "5 सेमी, 12 सेमी, 13 सेमी"],
        ans: 2,
        pyqRef: "CTET Paper 2 Math & UPTET",
        explanation: "By triangle inequality, sum of any two sides must be > third side. Here, 2 + 3 = 5, which is LESS than 6. Thus, no triangle can be formed.",
        explanationHi: "त्रिभुज असमिका के अनुसार, दो भुजाओं का योग तीसरी से बड़ा होना चाहिए। यहाँ 2 + 3 = 5, जो 6 से छोटा है। अतः त्रिभुज नहीं बन सकता।"
      },
      {
        id: 3,
        q: "A tree is broken at a height of 5 m from the ground and its top touches the ground at a distance of 12 m from the base of the tree. What was the original height of the tree?",
        qHi: "एक पेड़ भूमि से 5 मीटर की ऊँचाई पर टूट जाता है और उसका शीर्ष भूमि को तने से 12 मीटर की दूरी पर छूता है। पेड़ की मूल ऊँचाई क्या थी?",
        options: ["13 m", "17 m", "18 m", "20 m"],
        optionsHi: ["13 मीटर", "17 मीटर", "18 मीटर", "20 मीटर"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 6 Exercise & BPSC TRE",
        explanation: "The broken part forms a right-angled triangle with legs 5 m and 12 m. Hypotenuse = sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13 m. Original height = 5 + 13 = 18 m.",
        explanationHi: "टूटा हुआ भाग समकोण त्रिभुज का कर्ण बनाता है: sqrt(5^2 + 12^2) = sqrt(169) = 13 मीटर। पेड़ की कुल मूल ऊँचाई = 5 + 13 = 18 मीटर।"
      },
      {
        id: 4,
        q: "In a right-angled triangle, if the hypotenuse is 25 cm and one leg is 7 cm, what is the length of the other leg?",
        qHi: "एक समकोण त्रिभुज में यदि कर्ण 25 सेमी और एक भुजा 7 सेमी है, तो दूसरी भुजा की लंबाई क्या होगी?",
        options: ["20 cm", "22 cm", "24 cm", "26 cm"],
        optionsHi: ["20 सेमी", "22 सेमी", "24 सेमी", "26 सेमी"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & Railway NTPC",
        explanation: "Other leg = sqrt(25^2 - 7^2) = sqrt(625 - 49) = sqrt(576) = 24 cm.",
        explanationHi: "दूसरी भुजा = sqrt(25^2 - 7^2) = sqrt(576) = 24 सेमी।"
      },
      {
        id: 5,
        q: "The three angles of a triangle are in the ratio 1:2:3. What is the measure of the largest angle?",
        qHi: "त्रिभुज के तीनों कोणों का अनुपात 1:2:3 है। सबसे बड़े कोण का मान क्या होगा?",
        options: ["60°", "80°", "90°", "100°"],
        optionsHi: ["60°", "80°", "90°", "100°"],
        ans: 2,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "x + 2x + 3x = 180° => 6x = 180° => x = 30°. Largest angle = 3(30°) = 90°.",
        explanationHi: "6x = 180° => x = 30°। सबसे बड़ा कोण = 3 * 30° = 90°।"
      },
      {
        id: 6,
        q: "What is the point of intersection of the three medians of a triangle called?",
        qHi: "त्रिभुज की तीनों माध्यिकाओं के प्रतिच्छेद बिंदु को क्या कहते हैं?",
        options: ["Orthocenter", "Incenter", "Circumcenter", "Centroid"],
        optionsHi: ["लंबकेंद्र (Orthocenter)", "अंतःकेंद्र (Incenter)", "परिकेंद्र (Circumcenter)", "केन्द्रक (Centroid)"],
        ans: 3,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "The point of concurrence of the three medians of a triangle is called the Centroid.",
        explanationHi: "त्रिभुज की तीनों माध्यिकाओं के संगमन बिंदु को केन्द्रक (Centroid) कहते हैं।"
      },
      {
        id: 7,
        q: "In what ratio does the centroid divide each median from vertex to base?",
        qHi: "केन्द्रक प्रत्येक माध्यिका को शीर्ष से आधार की ओर किस अनुपात में विभाजित करता है?",
        options: ["1:1", "2:1", "3:1", "3:2"],
        optionsHi: ["1:1", "2:1", "3:1", "3:2"],
        ans: 1,
        pyqRef: "SSC CGL & BPSC Middle School",
        explanation: "The centroid divides each median in the ratio 2:1 from the vertex.",
        explanationHi: "केन्द्रक शीर्ष से आधार की ओर प्रत्येक माध्यिका को 2:1 के अनुपात में विभाजित करता है।"
      },
      {
        id: 8,
        q: "The lengths of two sides of a triangle are 6 cm and 8 cm. Between which two values must the length of the third side fall?",
        qHi: "एक त्रिभुज की दो भुजाओं की लंबाई 6 सेमी और 8 सेमी है। तीसरी भुजा की लंबाई किन दो मानों के बीच होनी चाहिए?",
        options: ["Between 2 cm and 14 cm", "Between 4 cm and 12 cm", "Between 1 cm and 15 cm", "Between 3 cm and 10 cm"],
        optionsHi: ["2 सेमी और 14 सेमी के बीच", "4 सेमी और 12 सेमी के बीच", "1 सेमी और 15 सेमी के बीच", "3 सेमी और 10 सेमी के बीच"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 6 Example & CTET",
        explanation: "Third side must be > (8 - 6 = 2 cm) and < (8 + 6 = 14 cm). So strictly between 2 cm and 14 cm.",
        explanationHi: "तीसरी भुजा (8 - 6 = 2 सेमी) से बड़ी और (8 + 6 = 14 सेमी) से छोटी होनी चाहिए।"
      },
      {
        id: 9,
        q: "Find the perimeter of a rectangle whose length is 40 cm and diagonal is 41 cm.",
        qHi: "उस आयत का परिमाप ज्ञात कीजिए जिसकी लंबाई 40 सेमी और विकर्ण 41 सेमी है।",
        options: ["82 cm", "90 cm", "98 cm", "102 cm"],
        optionsHi: ["82 सेमी", "90 सेमी", "98 सेमी", "102 सेमी"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 6 Exercise & Railway",
        explanation: "Breadth = sqrt(41^2 - 40^2) = sqrt(1681 - 1600) = sqrt(81) = 9 cm. Perimeter = 2(40 + 9) = 2(49) = 98 cm.",
        explanationHi: "चौड़ाई = sqrt(41^2 - 40^2) = sqrt(81) = 9 सेमी। परिमाप = 2(40 + 9) = 98 सेमी।"
      },
      {
        id: 10,
        q: "Can a triangle have two right angles?",
        qHi: "क्या किसी त्रिभुज में दो समकोण (Right Angles) हो सकते हैं?",
        options: ["Yes", "No", "Only in spherical geometry", "Only if sides are equal"],
        optionsHi: ["हाँ", "नहीं", "केवल गोलीय ज्यामिति में", "केवल जब भुजाएँ समान हों"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "If two angles are 90°, their sum is 180°, leaving 0° for the third angle. Hence, impossible in Euclidean plane.",
        explanationHi: "दो समकोणों का योग ही 180° हो जाएगा, तीसरे कोण के लिए 0° बचेगा जो असंभव है।"
      },
      {
        id: 11,
        q: "Can a triangle have two obtuse angles?",
        qHi: "क्या किसी त्रिभुज में दो अधिक कोण हो सकते हैं?",
        options: ["Yes", "No", "Sometimes", "In scalene triangles"],
        optionsHi: ["हाँ", "नहीं", "कभी-कभी", "विषमबाहु त्रिभुज में"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Two obtuse angles would sum to > 180°, which violates the angle sum property of a triangle.",
        explanationHi: "दो अधिक कोणों का योग 180° से अधिक हो जाएगा, जो त्रिभुज के कोण योग नियम का उल्लंघन है।"
      },
      {
        id: 12,
        q: "In triangle PQR, angle P = 35° and angle Q = 65°. What is the measure of angle R?",
        qHi: "त्रिभुज PQR में कोण P = 35° और कोण Q = 65° है। कोण R का मान क्या होगा?",
        options: ["70°", "80°", "85°", "90°"],
        optionsHi: ["70°", "80°", "85°", "90°"],
        ans: 1,
        pyqRef: "State TET & BPSC TRE",
        explanation: "Angle R = 180° - (35° + 65°) = 180° - 100° = 80°.",
        explanationHi: "कोण R = 180° - (35° + 65°) = 180° - 100° = 80°।"
      },
      {
        id: 13,
        q: "What is an altitude of a triangle?",
        qHi: "त्रिभुज का शीर्षलंब (Altitude) क्या होता है?",
        options: ["Line segment joining a vertex to midpoint of opposite side", "Perpendicular line segment from a vertex to opposite side", "Angle bisector of a vertex", "Perpendicular bisector of a side"],
        optionsHi: ["शीर्ष को सम्मुख भुजा के मध्य बिंदु से मिलाने वाला रेखाखंड", "शीर्ष से सम्मुख भुजा पर डाला गया लंबवत रेखाखंड", "शीर्ष कोण का समद्विभाजक", "भुजा का लंब समद्विभाजक"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "An altitude is the perpendicular line segment drawn from a vertex to the opposite side.",
        explanationHi: "शीर्ष से सम्मुख भुजा पर डाला गया लंब शीर्षलंब (Altitude) कहलाता है।"
      },
      {
        id: 14,
        q: "What is the point of intersection of the three altitudes of a triangle called?",
        qHi: "त्रिभुज के तीनों शीर्षलंबों के प्रतिच्छेद बिंदु को क्या कहते हैं?",
        options: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"],
        optionsHi: ["केन्द्रक (Centroid)", "लंबकेंद्र (Orthocenter)", "अंतःकेंद्र (Incenter)", "परिकेंद्र (Circumcenter)"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "The point of concurrence of altitudes is called the Orthocenter.",
        explanationHi: "तीनों शीर्षलंबों के संगमन बिंदु को लंबकेंद्र (Orthocenter) कहते हैं।"
      },
      {
        id: 15,
        q: "If the acute angles of a right-angled triangle are in the ratio 2:3, what is the smaller acute angle?",
        qHi: "यदि किसी समकोण त्रिभुज के दो न्यून कोणों का अनुपात 2:3 है, तो छोटा न्यून कोण क्या होगा?",
        options: ["30°", "36°", "45°", "54°"],
        optionsHi: ["30°", "36°", "45°", "54°"],
        ans: 1,
        pyqRef: "State TET & Railway NTPC",
        explanation: "The acute angles sum to 90°. 2x + 3x = 90° => 5x = 90° => x = 18°. Smaller angle = 2(18°) = 36°.",
        explanationHi: "समकोण त्रिभुज के दोनों न्यून कोणों का योग 90° होता है: 5x = 90° => x = 18°। छोटा कोण = 2 * 18° = 36°।"
      },
      {
        id: 16,
        q: "Which of the following is a Pythagorean triplet?",
        qHi: "निम्नलिखित में से कौन-सा एक पाइथागोरियन त्रिक (Pythagorean Triplet) है?",
        options: ["(5, 7, 9)", "(8, 15, 17)", "(6, 9, 11)", "(7, 10, 13)"],
        optionsHi: ["(5, 7, 9)", "(8, 15, 17)", "(6, 9, 11)", "(7, 10, 13)"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CGL",
        explanation: "8^2 + 15^2 = 64 + 225 = 289 = 17^2. Thus, (8, 15, 17) is a valid Pythagorean triplet.",
        explanationHi: "8^2 + 15^2 = 64 + 225 = 289 = 17^2। अतः (8, 15, 17) एक पाइथागोरियन त्रिक है।"
      },
      {
        id: 17,
        q: "In an equilateral triangle, what is the measure of each interior angle?",
        qHi: "एक समबाहु त्रिभुज (Equilateral Triangle) का प्रत्येक अंतःकोण कितने अंश का होता है?",
        options: ["45°", "60°", "90°", "120°"],
        optionsHi: ["45°", "60°", "90°", "120°"],
        ans: 1,
        pyqRef: "State TET & CTET",
        explanation: "All three sides and all three angles are equal: 180° / 3 = 60°.",
        explanationHi: "तीनों कोण बराबर होते हैं: 180° / 3 = 60°।"
      },
      {
        id: 18,
        q: "In an isosceles right-angled triangle, what are the measures of the angles?",
        qHi: "एक समद्विबाहु समकोण त्रिभुज के कोणों की माप क्या होती है?",
        options: ["60°, 60°, 60°", "45°, 45°, 90°", "30°, 60°, 90°", "50°, 50°, 80°"],
        optionsHi: ["60°, 60°, 60°", "45°, 45°, 90°", "30°, 60°, 90°", "50°, 50°, 80°"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "One angle is 90°, and the other two equal angles are (180° - 90°) / 2 = 45° each.",
        explanationHi: "एक कोण 90° और शेष दोनों बराबर कोण (90° / 2) = 45° और 45° होते हैं।"
      },
      {
        id: 19,
        q: "An exterior angle of a triangle measures 110°, and one of its interior opposite angles is 30°. Find the other interior opposite angle.",
        qHi: "एक त्रिभुज का बाह्य कोण 110° है और उसका एक सम्मुख अंतःकोण 30° है। दूसरा सम्मुख अंतःकोण क्या होगा?",
        options: ["70°", "80°", "90°", "100°"],
        optionsHi: ["70°", "80°", "90°", "100°"],
        ans: 1,
        pyqRef: "NCERT Class 7 Exercise & BPSC TRE",
        explanation: "Exterior angle = Sum of interior opposites => 110° = 30° + x => x = 80°.",
        explanationHi: "बाह्य कोण = 30° + x => 110° = 30° + x => x = 80°।"
      },
      {
        id: 20,
        q: "A 15 m long ladder reached a window 12 m high from the ground on placing it against a wall at a distance a. Find the distance of the foot of the ladder from the wall (a).",
        qHi: "15 मीटर लंबी एक सीढ़ी भूमि से 12 मीटर ऊँची खिड़की तक पहुँचती है। दीवार से सीढ़ी के पाद की दूरी (a) ज्ञात कीजिए।",
        options: ["7 m", "8 m", "9 m", "10 m"],
        optionsHi: ["7 मीटर", "8 मीटर", "9 मीटर", "10 मीटर"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 6 Exercise",
        explanation: "By Pythagoras theorem: a = sqrt(15^2 - 12^2) = sqrt(225 - 144) = sqrt(81) = 9 m.",
        explanationHi: "पाइथागोरस प्रमेय से: a = sqrt(15^2 - 12^2) = sqrt(81) = 9 मीटर।"
      },
      {
        id: 21,
        q: "Find the perimeter of a rhombus, the lengths of whose diagonals are 16 cm and 12 cm.",
        qHi: "उस समचतुर्भुज (Rhombus) का परिमाप ज्ञात कीजिए जिसके विकर्ण 16 सेमी और 12 सेमी हैं।",
        options: ["32 cm", "40 cm", "48 cm", "56 cm"],
        optionsHi: ["32 सेमी", "40 सेमी", "48 सेमी", "56 सेमी"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 6 Exercise & SSC CGL",
        explanation: "Diagonals of a rhombus bisect each other at right angles: half diagonals are 8 cm and 6 cm. Side = sqrt(8^2 + 6^2) = sqrt(64 + 36) = 10 cm. Perimeter = 4 * 10 = 40 cm.",
        explanationHi: "समचतुर्भुज के विकर्ण परस्पर लंब समद्विभाजित करते हैं: आधे विकर्ण = 8 सेमी और 6 सेमी। भुजा = sqrt(64 + 36) = 10 सेमी। परिमाप = 4 * 10 = 40 सेमी।"
      },
      {
        id: 22,
        q: "How many medians can a triangle have?",
        qHi: "एक त्रिभुज में कुल कितनी माध्यिकाएँ हो सकती हैं?",
        options: ["1", "2", "3", "Infinitely many"],
        optionsHi: ["1", "2", "3", "अनंत"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "A triangle has 3 vertices, so exactly 3 medians can be drawn.",
        explanationHi: "त्रिभुज में 3 शीर्ष होते हैं, अतः ठीक 3 माध्यिकाएँ खींची जा सकती हैं।"
      },
      {
        id: 23,
        q: "In an obtuse-angled triangle, where does the orthocenter lie?",
        qHi: "एक अधिककोण त्रिभुज (Obtuse Triangle) में लंबकेंद्र (Orthocenter) कहाँ स्थित होता है?",
        options: ["Inside the triangle", "Outside the triangle", "At the right angle vertex", "At the midpoint of hypotenuse"],
        optionsHi: ["त्रिभुज के अंदर", "त्रिभुज के बाहर (Outside)", "समकोण शीर्ष पर", "कर्ण के मध्य-बिंदु पर"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "In an obtuse triangle, the orthocenter always lies OUTSIDE the triangle.",
        explanationHi: "अधिककोण त्रिभुज में लंबकेंद्र सदैव त्रिभुज के बाहर (Outside) स्थित होता है।"
      },
      {
        id: 24,
        q: "The side lengths of a triangle are 7 cm, 24 cm, and 25 cm. What type of triangle is this?",
        qHi: "एक त्रिभुज की भुजाएँ 7 सेमी, 24 सेमी और 25 सेमी हैं। यह किस प्रकार का त्रिभुज है?",
        options: ["Acute angled", "Obtuse angled", "Right angled", "Equilateral"],
        optionsHi: ["न्यूनकोण त्रिभुज", "अधिककोण त्रिभुज", "समकोण त्रिभुज (Right Angled)", "समबाहु त्रिभुज"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "7^2 + 24^2 = 49 + 576 = 625 = 25^2. It satisfies Pythagoras theorem, so it is a Right-Angled Triangle.",
        explanationHi: "7^2 + 24^2 = 625 = 25^2। पाइथागोरस प्रमेय संतुष्ट होता है, अतः यह समकोण त्रिभुज है।"
      },
      {
        id: 25,
        q: "Can the sides of a right triangle be 1.5 cm, 2 cm, and 2.5 cm?",
        qHi: "क्या 1.5 सेमी, 2 सेमी और 2.5 सेमी एक समकोण त्रिभुज की भुजाएँ हो सकती हैं?",
        options: ["Yes", "No", "Only if perimeter is 10 cm", "Cannot be determined"],
        optionsHi: ["हाँ", "नहीं", "केवल जब परिमाप 10 सेमी हो", "निर्धारित नहीं किया जा सकता"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "1.5^2 + 2^2 = 2.25 + 4 = 6.25 = 2.5^2. Yes, they form a right-angled triangle (multiple of 3, 4, 5 by 0.5).",
        explanationHi: "1.5^2 + 2^2 = 2.25 + 4 = 6.25 = 2.5^2। हाँ, यह (3, 4, 5) त्रिक का आधा है।"
      },
      {
        id: 26,
        q: "In an isosceles triangle, if one of the equal angles is 50°, what is the vertex angle?",
        qHi: "एक समद्विबाहु त्रिभुज में, यदि समान कोणों में से एक कोण 50° है, तो शीर्ष कोण क्या होगा?",
        options: ["50°", "65°", "80°", "100°"],
        optionsHi: ["50°", "65°", "80°", "100°"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Sum of equal angles = 50° + 50° = 100°. Vertex angle = 180° - 100° = 80°.",
        explanationHi: "दोनों बराबर कोणों का योग = 50° + 50° = 100°। शीर्ष कोण = 180° - 100° = 80°।"
      },
      {
        id: 27,
        q: "If an exterior angle of a triangle is 100° and its interior opposite angles are equal to each other, what is the measure of each interior opposite angle?",
        qHi: "यदि किसी त्रिभुज का बाह्य कोण 100° है और उसके दोनों सम्मुख अंतःकोण आपस में बराबर हैं, तो प्रत्येक अंतःकोण की माप क्या होगी?",
        options: ["40°", "50°", "60°", "80°"],
        optionsHi: ["40°", "50°", "60°", "80°"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 6 & CTET",
        explanation: "x + x = 100° => 2x = 100° => x = 50°.",
        explanationHi: "x + x = 100° => 2x = 100° => x = 50°।"
      },
      {
        id: 28,
        q: "What is the longest side of a right-angled triangle?",
        qHi: "समकोण त्रिभुज की सबसे लंबी भुजा कौन-सी होती है?",
        options: ["Base", "Perpendicular", "Hypotenuse", "Median"],
        optionsHi: ["आधार (Base)", "लंब (Perpendicular)", "कर्ण (Hypotenuse)", "माध्यिका (Median)"],
        ans: 2,
        pyqRef: "State TET & Railway",
        explanation: "The hypotenuse is the side opposite to the largest angle (90°), hence it is always the longest side.",
        explanationHi: "कर्ण 90° के सबसे बड़े कोण के सम्मुख होता है, अतः यह सदैव सबसे लंबी भुजा होती है।"
      },
      {
        id: 29,
        q: "If two angles of a triangle are 30° and 80°, what is the third angle?",
        qHi: "यदि त्रिभुज के दो कोण 30° और 80° हैं, तो तीसरा कोण क्या होगा?",
        options: ["60°", "70°", "80°", "90°"],
        optionsHi: ["60°", "70°", "80°", "90°"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Third angle = 180° - (30° + 80°) = 180° - 110° = 70°.",
        explanationHi: "तीसरा कोण = 180° - (30° + 80°) = 70°।"
      },
      {
        id: 30,
        q: "The side lengths of a triangle are a, b, c. Which condition MUST be satisfied?",
        qHi: "त्रिभुज की भुजाएँ a, b, c हैं। कौन-सी शर्त अनिवार्य रूप से पूरी होनी चाहिए?",
        options: ["a + b = c", "a + b > c", "a + b < c", "a^2 + b^2 = c^2"],
        optionsHi: ["a + b = c", "a + b > c", "a + b < c", "a^2 + b^2 = c^2"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "For any triangle to exist, the sum of lengths of any two sides must be strictly greater than the third side (a + b > c).",
        explanationHi: "किसी भी त्रिभुज के अस्तित्व के लिए किन्हीं दो भुजाओं का योग सदैव तीसरी भुजा से बड़ा (a + b > c) होना चाहिए।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 7: Comparing Quantities (राशियों की तुलना)
  // ==========================================
  {
    id: "ncert-c7-m07",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 7,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 7: Comparing Quantities (राशियों की तुलना)",
    titleHi: "अध्याय 7: राशियों की तुलना (Ratio, Percentage, Profit & Loss, Simple Interest)",
    readingTime: "25 mins read",
    badge: "Commercial Math Core",
    desc: "NCERT Class 7 Chapter 7: Ratios, equivalent ratios, percentage conversion, percentage increase/decrease, profit and loss calculations, cost price, selling price, and Simple Interest (SI = PTR / 100).",
    descHi: "एनसीईआरटी कक्षा 7 राशियों की तुलना: अनुपात, समतुल्य अनुपात, प्रतिशत रूपांतरण, प्रतिशत वृद्धि व कमी, लाभ और हानि (क्रय मूल्य व विक्रय मूल्य), एवं साधारण ब्याज (SI = PTR / 100)।",
    competitionEdge: "Heavily featured across CTET Paper 2, BPSC TRE Middle School, SSC CGL/CHSL/MTS, Railways, and Banking. Guaranteed questions on Profit/Loss % and Simple Interest calculations.",
    competitionEdgeHi: "CTET पेपर 2, BPSC 6-8, SSC और रेलवे में 3-4 प्रश्न अनिवार्य रूप से आते हैं: लाभ/हानि प्रतिशत की क्रय मूल्य पर गणना, साधारण ब्याज में मिश्रधन ($A = P + SI$), और प्रतिशत के शॉर्टकट नियम।",
    pdfUrl: "/ncert_books/class7/math_ch07.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch07_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch07_Comparing_Quantities.pdf",
    pdfSize: "1.29 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Ratios, Percentages & Shortcuts",
        headingHi: "1. एनसीईआरटी मूल पाठ: अनुपात, प्रतिशत एवं शॉर्टकट तालिका",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Commercial mathematics in competitive exams is completely driven by <strong>Fraction-to-Percentage</strong> conversions! Memorizing fractions like $1/8 = 12.5\%$ and $1/6 = 16.67\%$ will let you solve percentage questions in under 10 seconds.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Standard Fraction to Percentage Conversion Matrix</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Fraction</th>
                  <th>Percentage</th>
                  <th>Fraction</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>$1/2$</td><td>$50\%$</td><td>$1/3$</td><td>$33.33\%$ ($33\\frac{1}{3}\\%$)</td></tr>
                <tr><td>$1/4$</td><td>$25\%$</td><td>$1/5$</td><td>$20\%$</td></tr>
                <tr><td>$1/6$</td><td>$16.67\%$ ($16\\frac{2}{3}\\%$)</td><td>$1/7$</td><td>$14.28\%$ ($14\\frac{2}{7}\\%$)</td></tr>
                <tr><td>$1/8$</td><td>$12.5\%$ ($12\\frac{1}{2}\\%$)</td><td>$1/9$</td><td>$11.11\%$ ($11\\frac{1}{9}\\%$)</td></tr>
                <tr><td>$1/10$</td><td>$10\%$</td><td>$1/12$</td><td>$8.33\%$ ($8\\frac{1}{3}\\%$)</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रतियोगी परीक्षाओं में अंकगणित को तेजी से हल करने का एकमात्र रहस्य <strong>भिन्न से प्रतिशत</strong> के मान याद रखना है! यदि आपको पता है कि $1/8 = 12.5\%$ और $1/6 = 16.67\%$ है, तो लाभ-हानि और ब्याज के प्रश्न बिना रफ कॉपी छुए हल हो जाते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ भिन्न से प्रतिशत रूपांतरण की मास्टर तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>भिन्न (Fraction)</th>
                  <th>प्रतिशत (Percentage)</th>
                  <th>भिन्न (Fraction)</th>
                  <th>प्रतिशत (Percentage)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>$1/2$</td><td>$50\%$</td><td>$1/3$</td><td>$33.33\%$ ($33\\frac{1}{3}\\%$)</td></tr>
                <tr><td>$1/4$</td><td>$25\%$</td><td>$1/5$</td><td>$20\%$</td></tr>
                <tr><td>$1/6$</td><td>$16.67\%$ ($16\\frac{2}{3}\\%$)</td><td>$1/7$</td><td>$14.28\%$ ($14\\frac{2}{7}\\%$)</td></tr>
                <tr><td>$1/8$</td><td>$12.5\%$ ($12\\frac{1}{2}\\%$)</td><td>$1/9$</td><td>$11.11\%$ ($11\\frac{1}{9}\\%$)</td></tr>
                <tr><td>$1/10$</td><td>$10\%$</td><td>$1/12$</td><td>$8.33\%$ ($8\\frac{1}{3}\\%$)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Profit, Loss & Simple Interest Master Formulas",
        headingHi: "2. लाभ-हानि एवं साधारण ब्याज के मास्टर सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Profit, Loss & Simple Interest Invariants</div>
            <ul>
              <li><strong>Cost Price (CP):</strong> Buying price + overhead expenses (transportation, repairs).</li>
              <li><strong>Selling Price (SP):</strong> Price at which article is sold.</li>
              <li><strong>Profit ($SP > CP$):</strong> $\mathbf{\\text{Profit} = SP - CP}$</li>
              <li><strong>Loss ($CP > SP$):</strong> $\mathbf{\\text{Loss} = CP - SP}$</li>
              <li><strong>Profit Percentage:</strong><br/>
                $$\mathbf{\\text{Profit \\%} = \\frac{\\text{Profit}}{CP} \\times 100}$$
              </li>
              <li><strong>Loss Percentage:</strong><br/>
                $$\mathbf{\\text{Loss \\%} = \\frac{\\text{Loss}}{CP} \\times 100}$$
                <em>Golden Rule: Profit% and Loss% are ALWAYS calculated on Cost Price (CP)!</em>
              </li>
              <li><strong>Simple Interest (SI) Formula:</strong><br/>
                $$\mathbf{SI = \\frac{P \\times R \\times T}{100}}$$
                Where $P$ = Principal, $R$ = Annual Rate of Interest, $T$ = Time in years.
              </li>
              <li><strong>Total Amount (मिश्रधन):</strong><br/>
                $$\mathbf{A = P + SI = P\\left(1 + \\frac{RT}{100}\\right)}$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ लाभ-हानि एवं साधारण ब्याज के सूत्र</div>
            <ul>
              <li><strong>क्रय मूल्य (CP):</strong> खरीद मूल्य + अतिरिक्त व्यय (भाड़ा, मरम्मत)।</li>
              <li><strong>विक्रय मूल्य (SP):</strong> जिस मूल्य पर वस्तु बेची गई।</li>
              <li><strong>लाभ ($SP > CP$):</strong> $\\mathbf{\\text{लाभ} = SP - CP}$</li>
              <li><strong>हानि ($CP > SP$):</strong> $\\mathbf{\\text{हानि} = CP - SP}$</li>
              <li><strong>लाभ प्रतिशत:</strong><br/>
                $$\\mathbf{\\text{लाभ \\%} = \\frac{\\text{लाभ}}{CP} \\times 100}$$
              </li>
              <li><strong>हानि प्रतिशत:</strong><br/>
                $$\\mathbf{\\text{हानि \\%} = \\frac{\\text{हानि}}{CP} \\times 100}$$
                <em>स्वर्णिम नियम: लाभ% एवं हानि% सदैव क्रय मूल्य (CP) पर ही निकाले जाते हैं!</em>
              </li>
              <li><strong>साधारण ब्याज (SI):</strong><br/>
                $$\\mathbf{SI = \\frac{P \\times R \\times T}{100}}$$
                जहाँ $P$ = मूलधन, $R$ = वार्षिक ब्याज दर, $T$ = समय (वर्षों में)।
              </li>
              <li><strong>मिश्रधन (Amount - A):</strong><br/>
                $$\\mathbf{A = P + SI = P\\left(1 + \\frac{RT}{100}\\right)}$$
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the ratio of 5 m to 10 km in simplest form?",
        qHi: "5 मीटर का 10 किमी से सरलतम रूप में अनुपात क्या होगा?",
        options: ["1:2", "1:20", "1:200", "1:2000"],
        optionsHi: ["1:2", "1:20", "1:200", "1:2000"],
        ans: 3,
        pyqRef: "NCERT Class 7 Ch 7 & CTET Paper 2",
        explanation: "Convert km to m: 10 km = 10 * 1000 = 10,000 m. Ratio = 5 / 10,000 = 1 / 2000 = 1:2000.",
        explanationHi: "10 किमी = 10,000 मीटर। अनुपात = 5 / 10000 = 1:2000।"
      },
      {
        id: 2,
        q: "Convert 3/4 to a percentage.",
        qHi: "3/4 को प्रतिशत में बदलिए।",
        options: ["60%", "70%", "75%", "80%"],
        optionsHi: ["60%", "70%", "75%", "80%"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "(3/4) * 100% = 75%.",
        explanationHi: "(3/4) * 100% = 75%।"
      },
      {
        id: 3,
        q: "A shopkeeper bought a chair for ₹375 and sold it for ₹400. What is his gain percentage?",
        qHi: "एक दुकानदार ने एक कुर्सी ₹375 में खरीदी और ₹400 में बेची। उसका लाभ प्रतिशत क्या है?",
        options: ["6 1/4%", "6 2/3%", "7 1/2%", "8%"],
        optionsHi: ["6 1/4%", "6 2/3%", "7 1/2%", "8%"],
        ans: 1,
        pyqRef: "NCERT Class 7 Exercise & BPSC TRE 6-8",
        explanation: "Profit = 400 - 375 = ₹25. Profit % = (25 / 375) * 100 = (1 / 15) * 100 = 100 / 15 = 6 2/3% (6.67%).",
        explanationHi: "लाभ = ₹25। लाभ % = (25 / 375) * 100 = 100/15 = 6 2/3%।"
      },
      {
        id: 4,
        q: "Find the Simple Interest on ₹5,000 at 12% per annum for 3 years.",
        qHi: "₹5,000 पर 12% वार्षिक दर से 3 वर्ष का साधारण ब्याज ज्ञात कीजिए।",
        options: ["₹1,500", "₹1,800", "₹2,000", "₹2,100"],
        optionsHi: ["₹1,500", "₹1,800", "₹2,000", "₹2,100"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CHSL",
        explanation: "SI = (P * R * T) / 100 = (5000 * 12 * 3) / 100 = 50 * 36 = ₹1,800.",
        explanationHi: "SI = (5000 * 12 * 3) / 100 = ₹1,800।"
      },
      {
        id: 5,
        q: "What amount will be paid at the end of 3 years on ₹5,000 at 12% per annum simple interest?",
        qHi: "₹5,000 पर 12% वार्षिक साधारण ब्याज की दर से 3 वर्ष के अंत में कितना मिश्रधन (Amount) देय होगा?",
        options: ["₹6,500", "₹6,800", "₹7,000", "₹7,200"],
        optionsHi: ["₹6,500", "₹6,800", "₹7,000", "₹7,200"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & Railways",
        explanation: "Amount = Principal + SI = ₹5,000 + ₹1,800 = ₹6,800.",
        explanationHi: "मिश्रधन = मूलधन + ब्याज = ₹5,000 + ₹1,800 = ₹6,800।"
      },
      {
        id: 6,
        q: "If 72% of 25 students are good in mathematics, how many are NOT good in mathematics?",
        qHi: "यदि 25 विद्यार्थियों में से 72% गणित में अच्छे हैं, तो कितने विद्यार्थी गणित में अच्छे नहीं हैं?",
        options: ["5", "7", "8", "9"],
        optionsHi: ["5", "7", "8", "9"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 7 & CTET",
        explanation: "Percentage not good = 100% - 72% = 28%. Number = 28% of 25 = (28/100) * 25 = 28 / 4 = 7 students.",
        explanationHi: "अच्छे नहीं = 100 - 72 = 28%। विद्यार्थियों की संख्या = 25 का 28% = (28 * 25) / 100 = 7।"
      },
      {
        id: 7,
        q: "An item marked at ₹840 is sold for ₹714. What is the discount percentage?",
        qHi: "एक वस्तु का अंकित मूल्य ₹840 है और यह ₹714 में बेची जाती है। बट्टा (Discount) प्रतिशत क्या है?",
        options: ["12%", "15%", "18%", "20%"],
        optionsHi: ["12%", "15%", "18%", "20%"],
        ans: 1,
        pyqRef: "SSC CGL & Railway NTPC",
        explanation: "Discount = 840 - 714 = ₹126. Discount % = (126 / 840) * 100 = 15%.",
        explanationHi: "बट्टा = 840 - 714 = ₹126। बट्टा % = (126 / 840) * 100 = 15%।"
      },
      {
        id: 8,
        q: "The population of a city decreased from 25,000 to 24,500. Find the percentage decrease.",
        qHi: "एक नगर की जनसंख्या 25,000 से घटकर 24,500 हो गई। प्रतिशत कमी ज्ञात कीजिए।",
        options: ["1.5%", "2.0%", "2.5%", "3.0%"],
        optionsHi: ["1.5%", "2.0%", "2.5%", "3.0%"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 7 Exercise",
        explanation: "Decrease = 25000 - 24500 = 500. % Decrease = (500 / 25000) * 100 = 2%.",
        explanationHi: "कमी = 500। % कमी = (500 / 25000) * 100 = 2%।"
      },
      {
        id: 9,
        q: "What sum of money will amount to ₹6,600 in 4 years at 8% per annum simple interest?",
        qHi: "कौन-सा मूलधन 8% वार्षिक साधारण ब्याज की दर से 4 वर्ष में ₹6,600 हो जाएगा?",
        options: ["₹4,800", "₹5,000", "₹5,200", "₹5,500"],
        optionsHi: ["₹4,800", "₹5,000", "₹5,200", "₹5,500"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "A = P(1 + RT/100) => 6600 = P(1 + 32/100) = P(132/100) => P = (6600 * 100) / 132 = 50 * 100 = ₹5,000.",
        explanationHi: "6600 = P(1 + 32/100) = P(132/100) => P = (6600 * 100) / 132 = ₹5,000।"
      },
      {
        id: 10,
        q: "Juhi sells a washing machine for ₹13,500. She loses 20% in the bargain. What was the cost price of the washing machine?",
        qHi: "जूही एक वाशिंग मशीन ₹13,500 में बेचती है और उसे 20% की हानि होती है। वाशिंग मशीन का क्रय मूल्य क्या था?",
        options: ["₹16,000", "₹16,500", "₹16,875", "₹17,000"],
        optionsHi: ["₹16,000", "₹16,500", "₹16,875", "₹17,000"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 7 Exercise & CTET",
        explanation: "SP = CP * (1 - Loss%/100) => 13500 = CP * 0.8 => CP = 13500 / 0.8 = ₹16,875.",
        explanationHi: "13500 = CP * (80/100) => CP = (13500 * 100) / 80 = ₹16,875।"
      },
      {
        id: 11,
        q: "Convert the ratio 3:4 into a percentage.",
        qHi: "अनुपात 3:4 को प्रतिशत में बदलिए।",
        options: ["60%", "70%", "75%", "80%"],
        optionsHi: ["60%", "70%", "75%", "80%"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "(3 / 4) * 100% = 75%.",
        explanationHi: "(3 / 4) * 100% = 75%।"
      },
      {
        id: 12,
        q: "If the cost of 6 cans of juice is ₹210, then what will be the cost of 4 cans of juice?",
        qHi: "यदि जूस के 6 डिब्बों का मूल्य ₹210 है, तो 4 डिब्बों का मूल्य क्या होगा?",
        options: ["₹120", "₹140", "₹150", "₹160"],
        optionsHi: ["₹120", "₹140", "₹150", "₹160"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 7 & CTET",
        explanation: "Cost of 1 can = 210 / 6 = ₹35. Cost of 4 cans = 35 * 4 = ₹140.",
        explanationHi: "1 डिब्बे का मूल्य = 210 / 6 = ₹35। 4 डिब्बों का मूल्य = 35 * 4 = ₹140।"
      },
      {
        id: 13,
        q: "At what rate of interest per annum will a sum of money double itself in 8 years under simple interest?",
        qHi: "साधारण ब्याज की किस वार्षिक दर से कोई धनराशि 8 वर्ष में स्वयं की दोगुनी हो जाएगी?",
        options: ["10%", "12.5%", "15%", "16.67%"],
        optionsHi: ["10%", "12.5%", "15%", "16.67%"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "SI = P. P = (P * R * 8) / 100 => R = 100 / 8 = 12.5%.",
        explanationHi: "SI = P। R = 100 / 8 = 12.5% वार्षिक।"
      },
      {
        id: 14,
        q: "If an article is bought for ₹120 and sold for ₹150, find the profit percentage.",
        qHi: "यदि कोई वस्तु ₹120 में खरीदकर ₹150 में बेची जाती है, तो लाभ प्रतिशत क्या होगा?",
        options: ["20%", "25%", "30%", "33.33%"],
        optionsHi: ["20%", "25%", "30%", "33.33%"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Profit = 150 - 120 = ₹30. Profit % = (30 / 120) * 100 = 1/4 * 100 = 25%.",
        explanationHi: "लाभ = ₹30। लाभ % = (30 / 120) * 100 = 25%।"
      },
      {
        id: 15,
        q: "Find 15% of 250.",
        qHi: "250 का 15% क्या होगा?",
        options: ["35", "37.5", "40", "42.5"],
        optionsHi: ["35", "37.5", "40", "42.5"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "(15 / 100) * 250 = (15 * 5) / 2 = 75 / 2 = 37.5.",
        explanationHi: "(15 / 100) * 250 = 37.5।"
      },
      {
        id: 16,
        q: "Find the whole quantity if 5% of it is 600.",
        qHi: "वह संपूर्ण राशि ज्ञात कीजिए जिसका 5% बराबर 600 है।",
        options: ["10,000", "12,000", "15,000", "18,000"],
        optionsHi: ["10,000", "12,000", "15,000", "18,000"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 7 Exercise & BPSC",
        explanation: "5% of x = 600 => (5/100) * x = 600 => x = (600 * 100) / 5 = 12,000.",
        explanationHi: "(5/100) * x = 600 => x = 600 * 20 = 12,000।"
      },
      {
        id: 17,
        q: "If selling price of 10 articles is equal to cost price of 12 articles, find the profit percentage.",
        qHi: "यदि 10 वस्तुओं का विक्रय मूल्य 12 वस्तुओं के क्रय मूल्य के बराबर है, तो लाभ प्रतिशत ज्ञात कीजिए।",
        options: ["16.67%", "20%", "25%", "30%"],
        optionsHi: ["16.67%", "20%", "25%", "30%"],
        ans: 1,
        pyqRef: "SSC CGL / CHSL & BPSC 6-8",
        explanation: "10 * SP = 12 * CP => SP / CP = 12 / 10 = 6 / 5. Profit % = [(6 - 5) / 5] * 100 = 1/5 * 100 = 20%.",
        explanationHi: "10 * SP = 12 * CP => SP / CP = 6 / 5। लाभ % = (1 / 5) * 100 = 20%।"
      },
      {
        id: 18,
        q: "What is 20% of 1 hour in minutes?",
        qHi: "1 घंटे का 20% कितने मिनट के बराबर होगा?",
        options: ["10 min", "12 min", "15 min", "20 min"],
        optionsHi: ["10 मिनट", "12 मिनट", "15 मिनट", "20 मिनट"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Railway NTPC",
        explanation: "1 hour = 60 minutes. 20% of 60 = (20/100) * 60 = 12 minutes.",
        explanationHi: "1 घंटा = 60 मिनट। 60 का 20% = 12 मिनट।"
      },
      {
        id: 19,
        q: "Meena gives an interest of ₹45 for one year at 9% rate per annum. What is the sum she has borrowed?",
        qHi: "मीना 9% वार्षिक दर से 1 वर्ष के लिए ₹45 ब्याज देती है। उसने कितना धन उधार लिया था?",
        options: ["₹450", "₹500", "₹550", "₹600"],
        optionsHi: ["₹450", "₹500", "₹550", "₹600"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 7 Exercise",
        explanation: "SI = (P * R * T) / 100 => 45 = (P * 9 * 1) / 100 => P = (45 * 100) / 9 = ₹500.",
        explanationHi: "45 = (P * 9 * 1) / 100 => P = (45 * 100) / 9 = ₹500।"
      },
      {
        id: 20,
        q: "A skirt was bought for ₹250 and sold at a loss of 12%. What was its selling price?",
        qHi: "एक स्कर्ट ₹250 में खरीदी गई और 12% की हानि पर बेची गई। उसका विक्रय मूल्य क्या था?",
        options: ["₹210", "₹220", "₹225", "₹230"],
        optionsHi: ["₹210", "₹220", "₹225", "₹230"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 7 Exercise & State TET",
        explanation: "Loss = 12% of 250 = (12/100) * 250 = ₹30. SP = 250 - 30 = ₹220.",
        explanationHi: "हानि = 250 का 12% = ₹30। विक्रय मूल्य = 250 - 30 = ₹220।"
      },
      {
        id: 21,
        q: "What is the ratio of 30 days to 36 hours?",
        qHi: "30 दिनों का 36 घंटों से क्या अनुपात होगा?",
        options: ["20:1", "15:2", "10:1", "5:1"],
        optionsHi: ["20:1", "15:2", "10:1", "5:1"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "30 days = 30 * 24 = 720 hours. Ratio = 720 / 36 = 20 / 1 = 20:1.",
        explanationHi: "30 दिन = 30 * 24 = 720 घंटे। अनुपात = 720 / 36 = 20:1।"
      },
      {
        id: 22,
        q: "If the salary of an employee is increased from ₹20,000 to ₹25,000, what is the percentage increase?",
        qHi: "यदि किसी कर्मचारी का वेतन ₹20,000 से बढ़कर ₹25,000 हो जाता है, तो प्रतिशत वृद्धि क्या है?",
        options: ["20%", "25%", "30%", "50%"],
        optionsHi: ["20%", "25%", "30%", "50%"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Increase = 25000 - 20000 = ₹5,000. % Increase = (5000 / 20000) * 100 = 25%.",
        explanationHi: "वृद्धि = ₹5,000। % वृद्धि = (5000 / 20000) * 100 = 25%।"
      },
      {
        id: 23,
        q: "Find the Simple Interest on ₹1,200 at 12% per annum for 1 month.",
        qHi: "₹1,200 पर 12% वार्षिक दर से 1 महीने का साधारण ब्याज क्या होगा?",
        options: ["₹10", "₹12", "₹14", "₹16"],
        optionsHi: ["₹10", "₹12", "₹14", "₹16"],
        ans: 1,
        pyqRef: "SSC MTS & Railway Group D",
        explanation: "T = 1/12 year. SI = (1200 * 12 * 1/12) / 100 = 1200 / 100 = ₹12.",
        explanationHi: "समय T = 1/12 वर्ष। SI = (1200 * 12 * 1/12) / 100 = ₹12।"
      },
      {
        id: 24,
        q: "If a person sells a bicycle for ₹1,800 and incurs a loss of 10%, at what price should he sell it to gain 10%?",
        qHi: "यदि कोई व्यक्ति एक साइकिल ₹1,800 में बेचकर 10% की हानि उठाता है, तो 10% लाभ कमाने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?",
        options: ["₹2,000", "₹2,100", "₹2,200", "₹2,400"],
        optionsHi: ["₹2,000", "₹2,100", "₹2,200", "₹2,400"],
        ans: 2,
        pyqRef: "BPSC TRE 6-8 & SSC CGL",
        explanation: "CP = 1800 / 0.9 = ₹2,000. For 10% gain, new SP = 2000 * 1.1 = ₹2,200.",
        explanationHi: "CP = 1800 / 0.9 = ₹2,000। 10% लाभ के लिए नया SP = 2000 * 1.1 = ₹2,200।"
      },
      {
        id: 25,
        q: "Out of 15,000 voters in a constituency, 60% voted. Find the number of voters who did NOT vote.",
        qHi: "एक निर्वाचन क्षेत्र के 15,000 मतदाताओं में से 60% ने मतदान किया। मतदान न करने वाले मतदाताओं की संख्या ज्ञात कीजिए।",
        options: ["5,000", "6,000", "7,500", "9,000"],
        optionsHi: ["5,000", "6,000", "7,500", "9,000"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 7 & CTET",
        explanation: "% Not voting = 40%. Number = 40% of 15,000 = (40/100) * 15,000 = 6,000.",
        explanationHi: "मतदान न करने वाले = 40%। संख्या = 15,000 का 40% = 6,000।"
      },
      {
        id: 26,
        q: "Convert 0.65 to a percentage.",
        qHi: "0.65 को प्रतिशत में बदलिए।",
        options: ["6.5%", "65%", "650%", "0.065%"],
        optionsHi: ["6.5%", "65%", "650%", "0.065%"],
        ans: 1,
        pyqRef: "State TET & Railway",
        explanation: "0.65 * 100% = 65%.",
        explanationHi: "0.65 * 100% = 65%।"
      },
      {
        id: 27,
        q: "What is 12 1/2% expressed as a fraction in simplest form?",
        qHi: "12 1/2% को सरलतम भिन्न के रूप में क्या लिखा जाएगा?",
        options: ["1/4", "1/6", "1/8", "1/10"],
        optionsHi: ["1/4", "1/6", "1/8", "1/10"],
        ans: 2,
        pyqRef: "CTET Paper 2 & SSC CHSL",
        explanation: "12.5% = 12.5 / 100 = 125 / 1000 = 1/8.",
        explanationHi: "12.5% = 125 / 1000 = 1/8।"
      },
      {
        id: 28,
        q: "If 10% of a number is 35, what is the number?",
        qHi: "यदि किसी संख्या का 10% बराबर 35 है, तो वह संख्या क्या है?",
        options: ["350", "300", "400", "700"],
        optionsHi: ["350", "300", "400", "700"],
        ans: 0,
        pyqRef: "Railway Group D & State TET",
        explanation: "x * (10/100) = 35 => x = 35 * 10 = 350.",
        explanationHi: "संख्या = 35 * 10 = 350।"
      },
      {
        id: 29,
        q: "A sum of ₹10,000 is borrowed at a rate of interest 15% per annum for 2 years. Find the simple interest.",
        qHi: "₹10,000 की राशि 15% वार्षिक दर से 2 वर्ष के लिए उधार ली जाती है। साधारण ब्याज ज्ञात कीजिए।",
        options: ["₹2,500", "₹3,000", "₹3,500", "₹4,000"],
        optionsHi: ["₹2,500", "₹3,000", "₹3,500", "₹4,000"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "SI = (10000 * 15 * 2) / 100 = 100 * 30 = ₹3,000.",
        explanationHi: "SI = (10000 * 15 * 2) / 100 = ₹3,000।"
      },
      {
        id: 30,
        q: "If CP = ₹80 and SP = ₹100, what is the profit percentage?",
        qHi: "यदि क्रय मूल्य ₹80 और विक्रय मूल्य ₹100 है, तो लाभ प्रतिशत क्या होगा?",
        options: ["20%", "25%", "30%", "35%"],
        optionsHi: ["20%", "25%", "30%", "35%"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Profit = 100 - 80 = ₹20. Profit % = (20 / 80) * 100 = 1/4 * 100 = 25%.",
        explanationHi: "लाभ = ₹20। लाभ % = (20 / 80) * 100 = 25%।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 8: Rational Numbers (परिमेय संख्याएँ)
  // ==========================================
  {
    id: "ncert-c7-m08",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 8,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 8: Rational Numbers (परिमेय संख्याएँ)",
    titleHi: "अध्याय 8: परिमेय संख्याएँ (Rational Numbers & Operations)",
    readingTime: "24 mins read",
    badge: "Number System Core",
    desc: "NCERT Class 7 Chapter 8: Definition of rational numbers (p/q, q != 0), positive and negative rationals, standard form, density property (infinitely many rationals), arithmetic operations.",
    descHi: "एनसीईआरटी कक्षा 7 परिमेय संख्याएँ: परिभाषा (p/q, q != 0), धनात्मक व ऋणात्मक परिमेय संख्याएँ, मानक रूप (Standard Form), सघनता गुणधर्म (अनंत परिमेय संख्याएँ), जोड़, घटाव, गुणा व भाग।",
    competitionEdge: "Foundational chapter for CTET Paper 2, BPSC TRE 4.0 Middle School, SSC, and State TETs. Standard form reduction, density property, and rational numbers between two rationals are recurring favorites.",
    competitionEdgeHi: "CTET पेपर 2, BPSC शिक्षक भर्ती और रेलवे में बार-बार पूछे जाने वाले प्रश्न: परिमेय संख्या का मानक रूप (हर सदैव धनात्मक और सह-अभाज्य), दो परिमेय संख्याओं के बीच अनंत संख्याएँ, और योज्य/गुणनात्मक प्रतिलोम।",
    pdfUrl: "/ncert_books/class7/math_ch08.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch08_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch08_Rational_Numbers.pdf",
    pdfSize: "1.44 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Definition & Standard Form",
        headingHi: "1. एनसीईआरटी मूल पाठ: परिमेय संख्याओं की परिभाषा एवं मानक रूप",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! The term 'rational' arises from the word 'ratio'. A rational number is defined as a number that can be expressed in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\ne 0$. Every natural number, whole number, and integer is a rational number because it can be written with denominator $1$ (e.g., $-5 = \\frac{-5}{1}$, $0 = \\frac{0}{1}$).
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Standard Form Criteria</div>
            <p>A rational number $\\frac{p}{q}$ is said to be in <strong>Standard Form</strong> if:</p>
            <ul>
              <li><strong>1. Denominator $q$ is POSITIVE:</strong> If denominator is negative, multiply both numerator and denominator by $-1$ (e.g., $\\frac{3}{-5} = \\frac{-3}{5}$).</li>
              <li><strong>2. Numerator and Denominator are Co-Prime:</strong> The only common factor between $p$ and $q$ is $1$ ($\text{HCF}(|p|, q) = 1$).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय छात्रों! 'परिमेय' शब्द अनुपात (Ratio) से बना है। वह संख्या जिसे $\\frac{p}{q}$ के रूप में लिखा जा सके, जहाँ $p$ और $q$ पूर्णांक हैं और $q \\ne 0$, <strong>परिमेय संख्या</strong> कहलाती है। सभी प्राकृत, पूर्ण संख्याएँ और पूर्णांक परिमेय संख्याएँ होते हैं क्योंकि सबके नीचे हर में $1$ लिखा जा सकता है (जैसे $-5 = \\frac{-5}{1}$, $0 = \\frac{0}{1}$)!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ मानक रूप (Standard Form) की दो अनिवार्य शर्तें</div>
            <p>कोई परिमेय संख्या $\\frac{p}{q}$ मानक रूप में तब कही जाती है जब:</p>
            <ul>
              <li><strong>1. हर (Denominator $q$) धनात्मक हो:</strong> यदि हर ऋणात्मक है तो अंश व हर को $-1$ से गुणा करें (जैसे $\\frac{3}{-5} = \\frac{-3}{5}$)।</li>
              <li><strong>2. अंश और हर सह-अभाज्य (Co-prime) हों:</strong> अर्थात् $p$ और $q$ में $1$ के अलावा कोई उभयनिष्ठ गुणनखंड न हो (सरलतम रूप)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Density Property & Arithmetic Operations",
        headingHi: "2. सघनता गुणधर्म (Density) एवं अंकगणितीय संक्रियाएँ",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Invariants of Rational Arithmetic</div>
            <ul>
              <li><strong>Density Property:</strong> Between any two distinct rational numbers, there are <strong>INFINITELY MANY</strong> rational numbers! (There is no concept of 'next' rational number).</li>
              <li><strong>Mean Method to insert a rational number between $a$ and $b$:</strong><br/>
                $$\mathbf{m = \\frac{a + b}{2}}$$
              </li>
              <li><strong>Additive Inverse of $\\frac{a}{b}$:</strong> $-\\frac{a}{b}$ because $\\frac{a}{b} + \\left(-\\frac{a}{b}\\right) = 0$.</li>
              <li><strong>Multiplicative Inverse (Reciprocal) of $\\frac{a}{b}$ ($a \\ne 0$):</strong> $\\frac{b}{a}$ because $\\frac{a}{b} \times \\frac{b}{a} = 1$.</li>
              <li><strong>Zero ($0$):</strong> Has NO reciprocal because $\\frac{1}{0}$ is undefined!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ परिमेय संख्याओं के संक्रिया नियम</div>
            <ul>
              <li><strong>सघनता गुणधर्म (Density Property):</strong> किन्हीं भी दो परिमेय संख्याओं के बीच <strong>अनंत (Infinitely Many)</strong> परिमेय संख्याएँ होती हैं! (परिमेय संख्याओं में 'अगली संख्या' की कोई संकल्पना नहीं होती)।</li>
              <li><strong>माध्य विधि (Mean Method):</strong> $a$ और $b$ के ठीक बीच की परिमेय संख्या निकालने का सूत्र: $\\mathbf{\\frac{a + b}{2}}$।</li>
              <li><strong>योज्य प्रतिलोम:</strong> $\\frac{a}{b}$ का योज्य प्रतिलोम $-\\frac{a}{b}$ होता है।</li>
              <li><strong>गुणनात्मक प्रतिलोम (व्युत्क्रम):</strong> $\\frac{a}{b}$ ($a \\ne 0$) का व्युत्क्रम $\\frac{b}{a}$ होता है।</li>
              <li><strong>शून्य ($0$):</strong> का कोई व्युत्क्रम नहीं होता क्योंकि $\\frac{1}{0}$ अपरिभाषित है!</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Which of the following is in standard form?",
        qHi: "निम्नलिखित में से कौन-सी परिमेय संख्या मानक रूप (Standard Form) में है?",
        options: ["-18/24", "24/-32", "-3/4", "9/12"],
        optionsHi: ["-18/24", "24/-32", "-3/4", "9/12"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "In -3/4, the denominator is positive (4) and HCF(3, 4) = 1. All other options can be simplified further.",
        explanationHi: "-3/4 में हर धनात्मक (4) है और अंश व हर सह-अभाज्य (HCF = 1) हैं। अन्य सभी को और काटा जा सकता है।"
      },
      {
        id: 2,
        q: "Reduce -45/30 to standard form.",
        qHi: "-45/30 को मानक रूप में व्यक्त कीजिए।",
        options: ["-3/2", "-9/6", "3/-2", "-15/10"],
        optionsHi: ["-3/2", "-9/6", "3/-2", "-15/10"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "Divide both numerator and denominator by HCF(45, 30) = 15: -45 / 15 = -3, 30 / 15 = 2. Standard form is -3/2.",
        explanationHi: "अंश और हर दोनों को HCF = 15 से भाग देने पर: -3/2 प्राप्त होता है।"
      },
      {
        id: 3,
        q: "How many rational numbers lie between 2/3 and 3/4?",
        qHi: "2/3 और 3/4 के बीच में कुल कितनी परिमेय संख्याएँ स्थित हैं?",
        options: ["None", "Exactly 1", "Exactly 10", "Infinitely many"],
        optionsHi: ["कोई नहीं", "ठीक 1", "ठीक 10", "अनंत (Infinitely Many)"],
        ans: 3,
        pyqRef: "CTET Paper 2 Pedagogy & BPSC",
        explanation: "By the density property of rational numbers, there are infinitely many rational numbers between any two distinct rational numbers.",
        explanationHi: "परिमेय संख्याओं के सघनता गुणधर्म के अनुसार, किन्हीं दो परिमेय संख्याओं के बीच अपरिमित रूप से अनेक (अनंत) परिमेय संख्याएँ होती हैं।"
      },
      {
        id: 4,
        q: "Find the sum: (-9/10) + (22/15).",
        qHi: "योग ज्ञात कीजिए: (-9/10) + (22/15)।",
        options: ["17/30", "13/30", "19/30", "11/30"],
        optionsHi: ["17/30", "13/30", "19/30", "11/30"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 8 Exercise & CTET",
        explanation: "LCM(10, 15) = 30. (-9 * 3 + 22 * 2) / 30 = (-27 + 44) / 30 = 17/30.",
        explanationHi: "ल.स.प.(10, 15) = 30। (-27 + 44) / 30 = 17/30।"
      },
      {
        id: 5,
        q: "What is the product: (-3/8) * (-7/13)?",
        qHi: "गुणनफल ज्ञात कीजिए: (-3/8) * (-7/13)।",
        options: ["-21/104", "21/104", "-21/52", "21/52"],
        optionsHi: ["-21/104", "21/104", "-21/52", "21/52"],
        ans: 1,
        pyqRef: "State TET & SSC CHSL",
        explanation: "Product of two negative rationals is positive: (-3 * -7) / (8 * 13) = 21 / 104.",
        explanationHi: "दो ऋणात्मक परिमेय संख्याओं का गुणनफल धनात्मक होता है: (-3 * -7) / (8 * 13) = 21/104।"
      },
      {
        id: 6,
        q: "Solve: (-4/5) / (-3).",
        qHi: "हल कीजिए: (-4/5) / (-3)।",
        options: ["-4/15", "4/15", "-12/5", "12/5"],
        optionsHi: ["-4/15", "4/15", "-12/5", "12/5"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "(-4/5) * (1 / -3) = (-4 * 1) / (5 * -3) = -4 / -15 = 4/15.",
        explanationHi: "(-4/5) * (1 / -3) = 4/15।"
      },
      {
        id: 7,
        q: "Which of the following is equal to -3/8?",
        qHi: "निम्नलिखित में से कौन -3/8 के बराबर है?",
        options: ["3/-8", "-6/16", "9/-24", "All of these"],
        optionsHi: ["3/-8", "-6/16", "9/-24", "ये सभी"],
        ans: 3,
        pyqRef: "CTET Paper 2 Math",
        explanation: "3/-8 = -3/8; -6/16 = -3/8; 9/-24 = -3/8. All are equivalent rational numbers.",
        explanationHi: "3/-8, -6/16 और 9/-24 सभी -3/8 के समतुल्य हैं। अतः 'ये सभी' सही है।"
      },
      {
        id: 8,
        q: "What is the additive inverse of -7/19?",
        qHi: "-7/19 का योज्य प्रतिलोम (Additive Inverse) क्या है?",
        options: ["-7/19", "7/19", "19/7", "-19/7"],
        optionsHi: ["-7/19", "7/19", "19/7", "-19/7"],
        ans: 1,
        pyqRef: "State TET & Railway NTPC",
        explanation: "Additive inverse of -a/b is a/b because (-7/19) + (7/19) = 0.",
        explanationHi: "-7/19 का योज्य प्रतिलोम +7/19 है।"
      },
      {
        id: 9,
        q: "Which rational number has no reciprocal?",
        qHi: "किस परिमेय संख्या का कोई व्युत्क्रम नहीं होता?",
        options: ["0", "1", "-1", "Any fraction"],
        optionsHi: ["0", "1", "-1", "कोई भी भिन्न"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Zero (0) has no reciprocal because 1/0 is undefined.",
        explanationHi: "शून्य (0) का कोई व्युत्क्रम नहीं होता क्योंकि 1/0 अपरिभाषित है।"
      },
      {
        id: 10,
        q: "Which rational numbers are their own reciprocals?",
        qHi: "कौन-सी परिमेय संख्याएँ अपने स्वयं के व्युत्क्रम के बराबर होती हैं?",
        options: ["0 and 1", "1 and -1", "-1 and 0", "2 and 1/2"],
        optionsHi: ["0 और 1", "1 और -1", "-1 और 0", "2 और 1/2"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "Reciprocal of 1 is 1/1 = 1. Reciprocal of -1 is 1/(-1) = -1.",
        explanationHi: "1 का व्युत्क्रम 1 और -1 का व्युत्क्रम -1 होता है।"
      },
      {
        id: 11,
        q: "Which of the two rational numbers is greater: -4/9 or -5/12?",
        qHi: "दो परिमेय संख्याओं -4/9 और -5/12 में से कौन-सी बड़ी है?",
        options: ["-4/9", "-5/12", "Both are equal", "Cannot be compared"],
        optionsHi: ["-4/9", "-5/12", "दोनों बराबर हैं", "तुलना नहीं की जा सकती"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "LCM(9, 12) = 36. -4/9 = -16/36. -5/12 = -15/36. Since -15 > -16, -5/12 is greater.",
        explanationHi: "समान हर 36 करने पर: -4/9 = -16/36 एवं -5/12 = -15/36। चूँकि -15 > -16, अतः -5/12 बड़ी है।"
      },
      {
        id: 12,
        q: "Simplify: (-2 1/3) + (4 3/5).",
        qHi: "सरल कीजिए: (-2 1/3) + (4 3/5)।",
        options: ["34/15 (2 4/15)", "32/15", "38/15", "2"],
        optionsHi: ["34/15 (2 4/15)", "32/15", "38/15", "2"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "-7/3 + 23/5 = (-35 + 69) / 15 = 34/15 = 2 4/15.",
        explanationHi: "-7/3 + 23/5 = (-35 + 69) / 15 = 34/15 = 2 4/15।"
      },
      {
        id: 13,
        q: "Evaluate: (3/13) / (-4/65).",
        qHi: "मान ज्ञात कीजिए: (3/13) / (-4/65)।",
        options: ["-15/4", "15/4", "-12/65", "12/65"],
        optionsHi: ["-15/4", "15/4", "-12/65", "12/65"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 8 & CTET",
        explanation: "(3/13) * (65 / -4) = (3 * 5) / (-4) = -15/4 = -3 3/4.",
        explanationHi: "(3/13) * (65 / -4) = 15 / -4 = -15/4।"
      },
      {
        id: 14,
        q: "Is 0 a rational number?",
        qHi: "क्या 0 एक परिमेय संख्या है?",
        options: ["Yes, because 0 = 0/1", "No, because 0 has no value", "Only in negative numbers", "Only in algebra"],
        optionsHi: ["हाँ, क्योंकि 0 = 0/1 लिखा जा सकता है", "नहीं, क्योंकि 0 का कोई मान नहीं होता", "केवल ऋणात्मक संख्याओं में", "केवल बीजगणित में"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Yes, 0 can be written as 0/1 where 0 and 1 are integers and denominator != 0.",
        explanationHi: "हाँ, 0 = 0/1 लिखा जा सकता है जहाँ 0 और 1 पूर्णांक हैं और हर शून्य नहीं है।"
      },
      {
        id: 15,
        q: "Find a rational number exactly halfway between 1/4 and 1/2.",
        qHi: "1/4 और 1/2 के ठीक बीच की परिमेय संख्या ज्ञात कीजिए।",
        options: ["3/8", "5/8", "1/3", "3/16"],
        optionsHi: ["3/8", "5/8", "1/3", "3/16"],
        ans: 0,
        pyqRef: "State TET & Railway NTPC",
        explanation: "Mean = (1/4 + 1/2) / 2 = (3/4) / 2 = 3/8.",
        explanationHi: "माध्य = (1/4 + 1/2) / 2 = (3/4) / 2 = 3/8।"
      },
      {
        id: 16,
        q: "What is the product of a rational number and its reciprocal?",
        qHi: "किसी शून्येतर परिमेय संख्या और उसके व्युत्क्रम का गुणनफल सदैव क्या होता है?",
        options: ["0", "1", "-1", "The number itself"],
        optionsHi: ["0", "1", "-1", "वही संख्या"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "(a/b) * (b/a) = 1 for any non-zero rational number.",
        explanationHi: "(a/b) * (b/a) = 1।"
      },
      {
        id: 17,
        q: "What should be added to -7/3 to get 3/7?",
        qHi: "-7/3 में क्या जोड़ा जाए ताकि 3/7 प्राप्त हो?",
        options: ["58/21", "-58/21", "40/21", "-40/21"],
        optionsHi: ["58/21", "-58/21", "40/21", "-40/21"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "x + (-7/3) = 3/7 => x = 3/7 + 7/3 = (9 + 49) / 21 = 58/21.",
        explanationHi: "x = 3/7 + 7/3 = (9 + 49) / 21 = 58/21।"
      },
      {
        id: 18,
        q: "What is the reciprocal of -1/5?",
        qHi: "-1/5 का व्युत्क्रम (Multiplicative Inverse) क्या होगा?",
        options: ["5", "-5", "1/5", "-1/5"],
        optionsHi: ["5", "-5", "1/5", "-1/5"],
        ans: 1,
        pyqRef: "State TET & CTET",
        explanation: "Reciprocal of -1/5 is 5 / (-1) = -5.",
        explanationHi: "-1/5 का व्युत्क्रम -5 है।"
      },
      {
        id: 19,
        q: "Evaluate: (-1/8) / (3/4).",
        qHi: "मान ज्ञात कीजिए: (-1/8) / (3/4)।",
        options: ["-1/6", "1/6", "-3/32", "3/32"],
        optionsHi: ["-1/6", "1/6", "-3/32", "3/32"],
        ans: 0,
        pyqRef: "Railway Group D & CTET",
        explanation: "(-1/8) * (4/3) = -4 / 24 = -1/6.",
        explanationHi: "(-1/8) * (4/3) = -4/24 = -1/6।"
      },
      {
        id: 20,
        q: "Which property is shown by: (a/b + c/d) is a rational number?",
        qHi: "कथन '(a/b + c/d) सदैव एक परिमेय संख्या होती है' किस गुणधर्म को दर्शाता है?",
        options: ["Commutative property", "Associative property", "Closure property", "Distributive property"],
        optionsHi: ["क्रमविनिमेय गुणधर्म", "साहचर्य गुणधर्म", "संवृत गुणधर्म (Closure Property)", "वितरण गुणधर्म"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Closure property states that the sum of two rational numbers is always a rational number.",
        explanationHi: "दो परिमेय संख्याओं का योग सदैव एक परिमेय संख्या होना संवृत गुणधर्म (Closure) कहलाता है।"
      },
      {
        id: 21,
        q: "Solve: (-5/7) * (7/5).",
        qHi: "हल कीजिए: (-5/7) * (7/5)।",
        options: ["1", "-1", "0", "25/49"],
        optionsHi: ["1", "-1", "0", "25/49"],
        ans: 1,
        pyqRef: "State TET & BPSC TRE",
        explanation: "(-5/7) * (7/5) = -1.",
        explanationHi: "(-5/7) * (7/5) = -1।"
      },
      {
        id: 22,
        q: "Write the negative rational number with numerator -3 and denominator 7.",
        qHi: "अंश -3 और हर 7 वाली परिमेय संख्या क्या होगी?",
        options: ["-3/7", "3/-7", "7/-3", "-7/3"],
        optionsHi: ["-3/7", "3/-7", "7/-3", "-7/3"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "The rational number is -3/7.",
        explanationHi: "परिमेय संख्या -3/7 है।"
      },
      {
        id: 23,
        q: "Find the value of (-2/13) - (-1/7).",
        qHi: "मान निकालिए: (-2/13) - (-1/7)।",
        options: ["-1/91", "1/91", "-27/91", "27/91"],
        optionsHi: ["-1/91", "1/91", "-27/91", "27/91"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "-2/13 + 1/7 = (-14 + 13) / 91 = -1/91.",
        explanationHi: "-2/13 + 1/7 = (-14 + 13) / 91 = -1/91।"
      },
      {
        id: 24,
        q: "What is the product of 0 and any rational number?",
        qHi: "शून्य (0) और किसी भी परिमेय संख्या का गुणनफल क्या होता है?",
        options: ["0", "1", "The rational number itself", "Undefined"],
        optionsHi: ["0", "1", "वही परिमेय संख्या", "अपरिभाषित"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "0 multiplied by any rational number is always 0.",
        explanationHi: "शून्य का किसी भी परिमेय संख्या से गुणनफल सदैव 0 होता है।"
      },
      {
        id: 25,
        q: "If the product of two rational numbers is -9/16 and one of them is -4/3, find the other.",
        qHi: "यदि दो परिमेय संख्याओं का गुणनफल -9/16 है और उनमें से एक संख्या -4/3 है, तो दूसरी संख्या क्या है?",
        options: ["27/64", "-27/64", "12/48", "3/4"],
        optionsHi: ["27/64", "-27/64", "12/48", "3/4"],
        ans: 0,
        pyqRef: "SSC CGL / CHSL & State TET",
        explanation: "x * (-4/3) = -9/16 => x = (-9/16) / (-4/3) = (-9/16) * (-3/4) = 27/64.",
        explanationHi: "x = (-9/16) * (-3/4) = 27/64।"
      },
      {
        id: 26,
        q: "Represent -5/8 on the number line. On which side of 0 does it lie?",
        qHi: "संख्या रेखा पर -5/8 शून्य (0) के किस ओर स्थित होगा?",
        options: ["To the right of 0", "To the left of 0", "At 0 itself", "Cannot be represented"],
        optionsHi: ["0 के दाईं ओर", "0 के बाईं ओर (Left)", "ठीक 0 पर", "निरूपित नहीं किया जा सकता"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "All negative numbers lie to the left of 0 on the number line.",
        explanationHi: "सभी ऋणात्मक संख्याएँ संख्या रेखा पर 0 के बाईं ओर (Left) स्थित होती हैं।"
      },
      {
        id: 27,
        q: "Which of the following rational numbers is positive?",
        qHi: "निम्नलिखित में से कौन-सी परिमेय संख्या धनात्मक (Positive) है?",
        options: ["-3/8", "3/-8", "-3/-8", "-5/7"],
        optionsHi: ["-3/8", "3/-8", "-3/-8", "-5/7"],
        ans: 2,
        pyqRef: "State TET & Railway Group D",
        explanation: "In -3/-8, both numerator and denominator are negative, so (-)/(-) = (+), making 3/8 positive.",
        explanationHi: "-3/-8 में दोनों चिन्ह ऋणात्मक हैं, अतः माइनस से माइनस कटकर धनात्मक 3/8 बनता है।"
      },
      {
        id: 28,
        q: "Divide 2/3 by -2/3.",
        qHi: "2/3 को -2/3 से भाग दीजिए।",
        options: ["1", "-1", "4/9", "-4/9"],
        optionsHi: ["1", "-1", "4/9", "-4/9"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "(2/3) / (-2/3) = (2/3) * (-3/2) = -1.",
        explanationHi: "(2/3) * (-3/2) = -1।"
      },
      {
        id: 29,
        q: "Is subtraction of rational numbers commutative?",
        qHi: "क्या परिमेय संख्याओं का व्यवकलन (घटाव) क्रमविनिमेय होता है?",
        options: ["Yes, always", "No, never in general", "Only for positive fractions", "Only when denominators are equal"],
        optionsHi: ["हाँ, सदैव", "नहीं, सामान्यतः नहीं", "केवल धनात्मक भिन्नों के लिए", "केवल जब हर बराबर हों"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Subtraction is NOT commutative for rational numbers (a - b != b - a).",
        explanationHi: "परिमेय संख्याओं के लिए घटाव क्रमविनिमेय नहीं होता है (a - b != b - a)।"
      },
      {
        id: 30,
        q: "What is the result of 7/11 - (-4/11)?",
        qHi: "7/11 - (-4/11) का परिणाम क्या होगा?",
        options: ["3/11", "1", "-1", "11/22"],
        optionsHi: ["3/11", "1", "-1", "11/22"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "7/11 + 4/11 = 11/11 = 1.",
        explanationHi: "7/11 + 4/11 = 11/11 = 1।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 9: Perimeter and Area (परिमाप और क्षेत्रफल)
  // ==========================================
  {
    id: "ncert-c7-m09",
    classLevel: "Class 7",
    subject: "Mathematics (गणित)",
    subjectCode: "MATH",
    chapterNo: 9,
    bookName: "Mathematics (NCERT Class 7)",
    title: "Chapter 9: Perimeter and Area (परिमाप और क्षेत्रफल)",
    titleHi: "अध्याय 9: परिमाप और क्षेत्रफल (Parallelogram, Triangle & Circle)",
    readingTime: "25 mins read",
    badge: "Mensuration Core",
    desc: "NCERT Class 7 Chapter 9: Area of parallelograms (b * h), triangles (1/2 * b * h), circumference (2 * pi * r) and area of circles (pi * r^2), path areas (cross paths and borders), unit conversions (hectares).",
    descHi: "एनसीईआरटी कक्षा 7 परिमाप और क्षेत्रफल: समांतर चतुर्भुज का क्षेत्रफल (b * h), त्रिभुज का क्षेत्रफल (1/2 * b * h), वृत्त की परिधि (2 * pi * r) एवं क्षेत्रफल (pi * r^2), रास्ते का क्षेत्रफल (चारों ओर एवं मध्य में), हेक्टेयर रूपांतरण।",
    competitionEdge: "Guaranteed 2-3 questions in CTET Paper 2, BPSC TRE Middle School, SSC CGL/CHSL, and Railways. Area of paths running around rectangular gardens, circular track revolutions, and unit conversions.",
    competitionEdgeHi: "CTET पेपर 2 और BPSC शिक्षक भर्ती में हर साल आने वाले प्रश्न: पार्क के चारों ओर और बीचों-बीच बने रास्तों का क्षेत्रफल, पहिए द्वारा तय दूरी में चक्रों की संख्या, और 1 हेक्टेयर = 10,000 वर्ग मीटर का प्रयोग।",
    pdfUrl: "/ncert_books/class7/math_ch09.pdf",
    pdfUrlHi: "/ncert_books/class7/math_ch09_hi.pdf",
    pdfName: "NCERT_Class7_Math_Ch09_Perimeter_Area.pdf",
    pdfSize: "1.60 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Parallelograms, Triangles & Circles",
        headingHi: "1. एनसीईआरटी मूल पाठ: समांतर चतुर्भुज, त्रिभुज एवं वृत्त",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Aspirants! In Class 6, we learned perimeter and area of squares and rectangles. In Class 7, NCERT introduces the elegant derivation: a parallelogram can be transformed into a rectangle of base $b$ and height $h$, giving $\text{Area} = b \times h$. A diagonal divides a parallelogram into two congruent triangles, each having $\text{Area} = \frac{1}{2} b \times h$!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Mensuration Formulas</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Geometric Figure</th>
                  <th>Perimeter / Circumference</th>
                  <th>Area Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Square (वर्ग)</strong></td>
                  <td>$4 \times \text{side}$</td>
                  <td>$\text{side}^2$</td>
                </tr>
                <tr>
                  <td><strong>Rectangle (आयत)</strong></td>
                  <td>$2(l + b)$</td>
                  <td>$l \times b$</td>
                </tr>
                <tr>
                  <td><strong>Parallelogram (समांतर चतुर्भुज)</strong></td>
                  <td>$2(a + b)$</td>
                  <td>$\mathbf{\text{Base} \times \text{Height} = b \times h}$</td>
                </tr>
                <tr>
                  <td><strong>Triangle (त्रिभुज)</strong></td>
                  <td>$a + b + c$</td>
                  <td>$\mathbf{\frac{1}{2} \times \text{Base} \times \text{Height} = \frac{1}{2} b \times h}$</td>
                </tr>
                <tr>
                  <td><strong>Circle (वृत्त)</strong></td>
                  <td>$\mathbf{C = 2\pi r = \pi d}$</td>
                  <td>$\mathbf{A = \pi r^2}$</td>
                </tr>
                <tr>
                  <td><strong>Semicircle (अर्धवृत्त)</strong></td>
                  <td>$\mathbf{\pi r + 2r = r(\pi + 2)}$</td>
                  <td>$\mathbf{\frac{1}{2} \pi r^2}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय अभ्यर्थियों! कक्षा 6 में हमने केवल वर्ग और आयत सीखा था। कक्षा 7 एनसीईआरटी में एक अद्भुत खोज है: किसी भी समांतर चतुर्भुज को काटकर आधार $b$ और ऊँचाई $h$ वाला आयत बनाया जा सकता है, अतः इसका क्षेत्रफल $\text{आधार} \times \text{ऊँचाई}$ होता है। इसका विकर्ण इसे दो सर्वांगसम त्रिभुजों में बांटता है, जिससे त्रिभुज का क्षेत्रफल $\frac{1}{2} \times \text{आधार} \times \text{ऊँचाई}$ बनता है!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ क्षेत्रमिति की मास्टर सूत्र तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>ज्यामितीय आकृति</th>
                  <th>परिमाप / परिधि</th>
                  <th>क्षेत्रफल का सूत्र</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>वर्ग (Square)</strong></td>
                  <td>$4 \times \text{भुजा}$</td>
                  <td>$\text{भुजा}^2$</td>
                </tr>
                <tr>
                  <td><strong>आयत (Rectangle)</strong></td>
                  <td>$2(\text{लंबाई} + \text{चौड़ाई})$</td>
                  <td>$\text{लंबाई} \times \text{चौड़ाई}$</td>
                </tr>
                <tr>
                  <td><strong>समांतर चतुर्भुज (Parallelogram)</strong></td>
                  <td>$2(a + b)$</td>
                  <td>$\\mathbf{\\text{आधार} \\times \\text{ऊँचाई} = b \\times h}$</td>
                </tr>
                <tr>
                  <td><strong>त्रिभुज (Triangle)</strong></td>
                  <td>तीनों भुजाओं का योग</td>
                  <td>$\\mathbf{\\frac{1}{2} \\times \\text{आधार} \\times \\text{ऊँचाई}}$</td>
                </tr>
                <tr>
                  <td><strong>वृत्त (Circle)</strong></td>
                  <td>$\\mathbf{C = 2\\pi r = \\pi d}$</td>
                  <td>$\\mathbf{A = \\pi r^2}$</td>
                </tr>
                <tr>
                  <td><strong>अर्धवृत्त (Semicircle)</strong></td>
                  <td>$\\mathbf{\\pi r + 2r}$</td>
                  <td>$\\mathbf{\\frac{1}{2} \\pi r^2}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "2. Path Problems & Unit Conversions (Hectares)",
        headingHi: "2. रास्ते का क्षेत्रफल एवं हेक्टेयर इकाई रूपांतरण",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Shortcut Formulas for Paths & Wheels</div>
            <ul>
              <li><strong>Path of width $w$ running OUTSIDE a rectangle ($l \times b$):</strong><br/>
                $$\mathbf{\text{Area of Path} = 2w(l + b + 2w)}$$
              </li>
              <li><strong>Path of width $w$ running INSIDE a rectangle ($l \times b$):</strong><br/>
                $$\mathbf{\text{Area of Path} = 2w(l + b - 2w)}$$
              </li>
              <li><strong>Two Central Cross Roads of width $w$ parallel to sides:</strong><br/>
                $$\mathbf{\text{Area of Roads} = w(l + b - w)}$$
              </li>
              <li><strong>Revolutions of a Circular Wheel:</strong><br/>
                $$\mathbf{\text{Number of Revolutions} = \\frac{\\text{Total Distance}}{\\text{Circumference}} = \\frac{\\text{Distance}}{2\\pi r}}$$
              </li>
              <li><strong>Unit Conversion Matrix:</strong><br/>
                $$1 \text{ cm}^2 = 100 \text{ mm}^2$$
                $$1 \text{ m}^2 = 10,000 \text{ cm}^2$$
                $$\mathbf{1 \text{ hectare} = 10,000 \text{ m}^2 = 100\text{ m} \times 100\text{ m}}$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ रास्ते का क्षेत्रफल एवं पहिए के चक्रों के शॉर्टकट</div>
            <ul>
              <li><strong>आयत ($l \times b$) के बाहर $w$ चौड़े रास्ते का क्षेत्रफल:</strong><br/>
                $$\\mathbf{\\text{रास्ते का क्षेत्रफल} = 2w(l + b + 2w)}$$
              </li>
              <li><strong>आयत के अंदर चारों ओर $w$ चौड़े रास्ते का क्षेत्रफल:</strong><br/>
                $$\\mathbf{\\text{रास्ते का क्षेत्रफल} = 2w(l + b - 2w)}$$
              </li>
              <li><strong>पार्क के बीचों-बीच बने दो क्रॉस रास्तों का क्षेत्रफल:</strong><br/>
                $$\\mathbf{\\text{रास्तों का क्षेत्रफल} = w(l + b - w)}$$
              </li>
              <li><strong>पहिए के चक्रों की संख्या:</strong><br/>
                $$\\mathbf{\\text{चक्रों की संख्या} = \\frac{\\text{कुल दूरी}}{\\text{पहिए की परिधि (2\\pi r)}}}$$
              </li>
              <li><strong>इकाई रूपांतरण (अति-महत्वपूर्ण):</strong><br/>
                $$1 \\text{ वर्ग मीटर} = 10,000 \\text{ वर्ग सेमी}$$
                $$\\mathbf{1 \\text{ हेक्टेयर} = 10,000 \\text{ वर्ग मीटर}}$$
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Find the area of a parallelogram with base 7 cm and corresponding height 4 cm.",
        qHi: "एक समांतर चतुर्भुज का क्षेत्रफल ज्ञात कीजिए जिसका आधार 7 सेमी और संगत ऊँचाई 4 सेमी है।",
        options: ["14 cm²", "28 cm²", "56 cm²", "22 cm²"],
        optionsHi: ["14 सेमी²", "28 सेमी²", "56 सेमी²", "22 सेमी²"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 9 & CTET Paper 2",
        explanation: "Area of parallelogram = Base * Height = 7 * 4 = 28 cm².",
        explanationHi: "समांतर चतुर्भुज का क्षेत्रफल = आधार * ऊँचाई = 7 * 4 = 28 सेमी²।"
      },
      {
        id: 2,
        q: "Find the area of a triangle with base 8 cm and height 3 cm.",
        qHi: "एक त्रिभुज का क्षेत्रफल ज्ञात कीजिए जिसका आधार 8 सेमी और ऊँचाई 3 सेमी है।",
        options: ["12 cm²", "24 cm²", "16 cm²", "11 cm²"],
        optionsHi: ["12 सेमी²", "24 सेमी²", "16 सेमी²", "11 सेमी²"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "Area = (1/2) * Base * Height = (1/2) * 8 * 3 = 12 cm².",
        explanationHi: "त्रिभुज का क्षेत्रफल = (1/2) * आधार * ऊँचाई = (1/2) * 8 * 3 = 12 सेमी²।"
      },
      {
        id: 3,
        q: "What is the circumference of a circle of radius 14 cm? (Take pi = 22/7)",
        qHi: "14 सेमी त्रिज्या वाले वृत्त की परिधि क्या होगी? (pi = 22/7 लें)",
        options: ["44 cm", "88 cm", "176 cm", "616 cm"],
        optionsHi: ["44 सेमी", "88 सेमी", "176 सेमी", "616 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE 6-8",
        explanation: "Circumference = 2 * pi * r = 2 * (22/7) * 14 = 2 * 22 * 2 = 88 cm.",
        explanationHi: "परिधि = 2 * (22/7) * 14 = 88 सेमी।"
      },
      {
        id: 4,
        q: "Find the area of a circle with radius 14 cm. (Take pi = 22/7)",
        qHi: "14 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा? (pi = 22/7)",
        options: ["88 cm²", "308 cm²", "616 cm²", "1232 cm²"],
        optionsHi: ["88 सेमी²", "308 सेमी²", "616 सेमी²", "1232 सेमी²"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & State TET",
        explanation: "Area = pi * r^2 = (22/7) * 14 * 14 = 22 * 2 * 14 = 616 cm².",
        explanationHi: "क्षेत्रफल = (22/7) * 14 * 14 = 616 सेमी²।"
      },
      {
        id: 5,
        q: "A rectangular park is 45 m long and 30 m wide. A path 2.5 m wide is constructed outside the park. Find the area of the path.",
        qHi: "एक आयताकार पार्क 45 मीटर लंबा और 30 मीटर चौड़ा है। इसके बाहर चारों ओर 2.5 मीटर चौड़ा रास्ता बनाया गया है। रास्ते का क्षेत्रफल ज्ञात कीजिए।",
        options: ["375 m²", "400 m²", "425 m²", "450 m²"],
        optionsHi: ["375 मी²", "400 मी²", "425 मी²", "450 मी²"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 9 Exercise & CTET",
        explanation: "Using formula 2w(l + b + 2w): w = 2.5. 2(2.5) * (45 + 30 + 5) = 5 * 80 = 400 m².",
        explanationHi: "सूत्र 2w(l + b + 2w) से: 2(2.5) * (45 + 30 + 5) = 5 * 80 = 400 वर्ग मीटर।"
      },
      {
        id: 6,
        q: "How many hectares are there in 50,000 m²?",
        qHi: "50,000 वर्ग मीटर में कितने हेक्टेयर होते हैं?",
        options: ["0.5 hectares", "5 hectares", "50 hectares", "500 hectares"],
        optionsHi: ["0.5 हेक्टेयर", "5 हेक्टेयर", "50 हेक्टेयर", "500 हेक्टेयर"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & Railways",
        explanation: "1 hectare = 10,000 m². 50,000 m² = 50,000 / 10,000 = 5 hectares.",
        explanationHi: "1 हेक्टेयर = 10,000 वर्ग मीटर। 50,000 / 10,000 = 5 हेक्टेयर।"
      },
      {
        id: 7,
        q: "If the circumference of a circular sheet is 154 m, find its radius. (Take pi = 22/7)",
        qHi: "यदि एक वृत्ताकार शीट की परिधि 154 मीटर है, तो उसकी त्रिज्या क्या होगी?",
        options: ["21 m", "24.5 m", "28 m", "49 m"],
        optionsHi: ["21 मी", "24.5 मी", "28 मी", "49 मी"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 9 Exercise & State TET",
        explanation: "2 * (22/7) * r = 154 => r = (154 * 7) / 44 = (7 * 7) / 2 = 49 / 2 = 24.5 m.",
        explanationHi: "2 * (22/7) * r = 154 => r = (154 * 7) / 44 = 24.5 मीटर।"
      },
      {
        id: 8,
        q: "How many times a wheel of radius 28 cm must rotate to cover a distance of 352 m? (Take pi = 22/7)",
        qHi: "28 सेमी त्रिज्या वाले पहिए को 352 मीटर की दूरी तय करने के लिए कितनी बार घूमना पड़ेगा?",
        options: ["100", "200", "300", "400"],
        optionsHi: ["100", "200", "300", "400"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 9 Exercise & SSC CGL",
        explanation: "Circumference = 2 * (22/7) * 28 = 176 cm = 1.76 m. Number of revolutions = 352 / 1.76 = 200.",
        explanationHi: "पहिए की परिधि = 2 * (22/7) * 28 = 176 सेमी = 1.76 मीटर। चक्रों की संख्या = 352 / 1.76 = 200 चक्र।"
      },
      {
        id: 9,
        q: "If the radius of a circle is doubled, what happens to its area?",
        qHi: "यदि किसी वृत्त की त्रिज्या को दोगुना कर दिया जाए, तो उसके क्षेत्रफल पर क्या प्रभाव पड़ेगा?",
        options: ["It is doubled", "It becomes four times", "It remains the same", "It becomes eight times"],
        optionsHi: ["यह दोगुना हो जाता है", "यह चार गुना हो जाता है (4 times)", "यह समान रहता है", "यह आठ गुना हो जाता है"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy & BPSC",
        explanation: "Area = pi * r^2. If r becomes 2r, new Area = pi * (2r)^2 = 4 * pi * r^2 = 4 times.",
        explanationHi: "त्रिज्या 2r होने पर क्षेत्रफल pi * (2r)^2 = 4 * pi * r^2 अर्थात् चार गुना हो जाता है।"
      },
      {
        id: 10,
        q: "If the radius of a circle is doubled, what happens to its circumference?",
        qHi: "यदि किसी वृत्त की त्रिज्या को दोगुना कर दिया जाए, तो उसकी परिधि पर क्या प्रभाव पड़ेगा?",
        options: ["It is doubled", "It becomes four times", "It remains unchanged", "It becomes halved"],
        optionsHi: ["यह दोगुनी हो जाती है", "यह चार गुना हो जाती है", "यह अपरिवर्तित रहती है", "यह आधी हो जाती है"],
        ans: 0,
        pyqRef: "State TET & Railway NTPC",
        explanation: "Circumference = 2 * pi * r. If r becomes 2r, new C = 2 * pi * (2r) = 2 * (2 * pi * r) = doubled.",
        explanationHi: "परिधि त्रिज्या के समानुपाती होती है, अतः त्रिज्या दोगुनी करने पर परिधि भी दोगुनी हो जाती है।"
      },
      {
        id: 11,
        q: "From a circular sheet of radius 4 cm, a circle of radius 3 cm is removed. Find the area of the remaining sheet. (Take pi = 3.14)",
        qHi: "4 सेमी त्रिज्या वाली वृत्ताकार शीट में से 3 सेमी त्रिज्या का एक वृत्त काट कर निकाल दिया जाता है। शेष शीट का क्षेत्रफल क्या होगा? (pi = 3.14)",
        options: ["21.98 cm²", "22.50 cm²", "25.12 cm²", "28.26 cm²"],
        optionsHi: ["21.98 सेमी²", "22.50 सेमी²", "25.12 सेमी²", "28.26 सेमी²"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 9 Exercise & CTET",
        explanation: "Area = pi * (R^2 - r^2) = 3.14 * (16 - 9) = 3.14 * 7 = 21.98 cm².",
        explanationHi: "शेष क्षेत्रफल = pi * (4^2 - 3^2) = 3.14 * 7 = 21.98 सेमी²।"
      },
      {
        id: 12,
        q: "The base of a triangle is 15 cm and its area is 60 cm². What is its corresponding altitude (height)?",
        qHi: "एक त्रिभुज का आधार 15 सेमी और क्षेत्रफल 60 सेमी² है। उसका शीर्षलंब (ऊँचाई) क्या होगा?",
        options: ["4 cm", "8 cm", "12 cm", "16 cm"],
        optionsHi: ["4 सेमी", "8 सेमी", "12 सेमी", "16 सेमी"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "Area = (1/2) * b * h => 60 = (1/2) * 15 * h => h = (60 * 2) / 15 = 8 cm.",
        explanationHi: "60 = (1/2) * 15 * h => h = 120 / 15 = 8 सेमी।"
      },
      {
        id: 13,
        q: "A wire is in the shape of a square of side 10 cm. If the wire is rebent into a rectangle of length 12 cm, find its breadth.",
        qHi: "एक तार 10 सेमी भुजा वाले वर्ग के आकार में है। यदि उसी तार को 12 सेमी लंबाई वाले आयत के रूप में मोड़ा जाए, तो उसकी चौड़ाई क्या होगी?",
        options: ["6 cm", "8 cm", "10 cm", "12 cm"],
        optionsHi: ["6 सेमी", "8 सेमी", "10 सेमी", "12 सेमी"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 9 & BPSC TRE 6-8",
        explanation: "Perimeter of square = 4 * 10 = 40 cm. Perimeter of rectangle = 2(12 + b) = 40 => 12 + b = 20 => b = 8 cm.",
        explanationHi: "वर्ग का परिमाप = 40 सेमी। 2(12 + b) = 40 => 12 + b = 20 => b = 8 सेमी।"
      },
      {
        id: 14,
        q: "In question 13, which shape encloses more area: the square or the rectangle?",
        qHi: "प्रश्न 13 में, किस आकृति का क्षेत्रफल अधिक है: वर्ग या आयत?",
        options: ["Square", "Rectangle", "Both have equal area", "Cannot be determined"],
        optionsHi: ["वर्ग (Square)", "आयत (Rectangle)", "दोनों का बराबर है", "निर्धारित नहीं किया जा सकता"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Area of square = 10^2 = 100 cm². Area of rectangle = 12 * 8 = 96 cm². The square encloses more area.",
        explanationHi: "वर्ग का क्षेत्रफल = 100 सेमी², आयत का = 96 सेमी²। वर्ग का क्षेत्रफल अधिक है।"
      },
      {
        id: 15,
        q: "What is the perimeter of a semicircle of radius 7 cm including its diameter? (Take pi = 22/7)",
        qHi: "7 सेमी त्रिज्या वाले अर्धवृत्त का व्यास सहित कुल परिमाप क्या होगा? (pi = 22/7)",
        options: ["22 cm", "29 cm", "36 cm", "44 cm"],
        optionsHi: ["22 सेमी", "29 सेमी", "36 सेमी", "44 सेमी"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "Perimeter of semicircle = pi * r + 2r = (22/7 * 7) + 2(7) = 22 + 14 = 36 cm.",
        explanationHi: "अर्धवृत्त का परिमाप = pi * r + 2r = 22 + 14 = 36 सेमी।"
      },
      {
        id: 16,
        q: "Two cross roads, each of width 2 m, run at right angles through the center of a rectangular park of length 70 m and breadth 45 m. Find the area of the roads.",
        qHi: "70 मीटर लंबे और 45 मीटर चौड़े पार्क के केंद्र से होकर परस्पर समकोण पर काटते हुए 2 मीटर चौड़े दो रास्ते जाते हैं। रास्तों का क्षेत्रफल ज्ञात कीजिए।",
        options: ["224 m²", "226 m²", "230 m²", "234 m²"],
        optionsHi: ["224 मी²", "226 मी²", "230 मी²", "234 मी²"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 9 Exercise & CTET",
        explanation: "Formula w(l + b - w) = 2(70 + 45 - 2) = 2(113) = 226 m².",
        explanationHi: "सूत्र w(l + b - w) से: 2 * (70 + 45 - 2) = 2 * 113 = 226 वर्ग मीटर।"
      },
      {
        id: 17,
        q: "What is the ratio of the area of a circle to the area of a semicircle with the same radius?",
        qHi: "समान त्रिज्या वाले वृत्त के क्षेत्रफल और अर्धवृत्त के क्षेत्रफल का अनुपात क्या होता है?",
        options: ["1:2", "2:1", "4:1", "1:1"],
        optionsHi: ["1:2", "2:1", "4:1", "1:1"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Area of circle = pi * r^2. Area of semicircle = (1/2) * pi * r^2. Ratio = 2:1.",
        explanationHi: "वृत्त = pi * r^2, अर्धवृत्त = (1/2) * pi * r^2। अनुपात = 2:1।"
      },
      {
        id: 18,
        q: "Find the area of a right-angled triangle with sides 6 cm, 8 cm, and 10 cm.",
        qHi: "6 सेमी, 8 सेमी और 10 सेमी भुजाओं वाले समकोण त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
        options: ["24 cm²", "30 cm²", "40 cm²", "48 cm²"],
        optionsHi: ["24 सेमी²", "30 सेमी²", "40 सेमी²", "48 सेमी²"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "Legs are 6 cm and 8 cm (10 cm is hypotenuse). Area = (1/2) * 6 * 8 = 24 cm².",
        explanationHi: "क्षेत्रफल = (1/2) * 6 * 8 = 24 सेमी²।"
      },
      {
        id: 19,
        q: "How many square centimeters are in 1 square meter?",
        qHi: "1 वर्ग मीटर में कितने वर्ग सेमी होते हैं?",
        options: ["100 cm²", "1,000 cm²", "10,000 cm²", "100,000 cm²"],
        optionsHi: ["100 सेमी²", "1,000 सेमी²", "10,000 सेमी²", "100,000 सेमी²"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "1 m = 100 cm => 1 m^2 = 100 cm * 100 cm = 10,000 cm².",
        explanationHi: "1 मीटर = 100 सेमी। 1 वर्ग मीटर = 100 * 100 = 10,000 वर्ग सेमी।"
      },
      {
        id: 20,
        q: "A circular garden has a diameter of 21 m. Find the cost of fencing it at ₹15 per meter. (Take pi = 22/7)",
        qHi: "एक वृत्ताकार बगीचे का व्यास 21 मीटर है। ₹15 प्रति मीटर की दर से इसके चारों ओर बाड़ लगाने का व्यय क्या होगा?",
        options: ["₹990", "₹1,020", "₹1,050", "₹1,100"],
        optionsHi: ["₹990", "₹1,020", "₹1,050", "₹1,100"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & Railways",
        explanation: "Circumference = pi * d = (22/7) * 21 = 66 m. Cost = 66 * 15 = ₹990.",
        explanationHi: "परिधि = (22/7) * 21 = 66 मीटर। कुल व्यय = 66 * 15 = ₹990।"
      },
      {
        id: 21,
        q: "The area of a square field is 225 m². What is its perimeter?",
        qHi: "एक वर्गाकार मैदान का क्षेत्रफल 225 वर्ग मीटर है। उसका परिमाप क्या होगा?",
        options: ["45 m", "60 m", "75 m", "90 m"],
        optionsHi: ["45 मीटर", "60 मीटर", "75 मीटर", "90 मीटर"],
        ans: 1,
        pyqRef: "State TET & SSC MTS",
        explanation: "Side = sqrt(225) = 15 m. Perimeter = 4 * 15 = 60 m.",
        explanationHi: "भुजा = sqrt(225) = 15 मीटर। परिमाप = 4 * 15 = 60 मीटर।"
      },
      {
        id: 22,
        q: "Find the height of a parallelogram whose area is 246 cm² and base is 20 cm.",
        qHi: "एक समांतर चतुर्भुज की ऊँचाई ज्ञात कीजिए जिसका क्षेत्रफल 246 सेमी² और आधार 20 सेमी है।",
        options: ["12.0 cm", "12.3 cm", "12.5 cm", "13.0 cm"],
        optionsHi: ["12.0 सेमी", "12.3 सेमी", "12.5 सेमी", "13.0 सेमी"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 9 Exercise",
        explanation: "Height = Area / Base = 246 / 20 = 12.3 cm.",
        explanationHi: "ऊँचाई = 246 / 20 = 12.3 सेमी।"
      },
      {
        id: 23,
        q: "If the area of a triangle is equal to the area of a parallelogram with the same base, how is the height of the triangle related to the height of the parallelogram?",
        qHi: "यदि समान आधार वाले एक त्रिभुज और समांतर चतुर्भुज का क्षेत्रफल बराबर है, तो त्रिभुज की ऊँचाई समांतर चतुर्भुज की ऊँचाई से किस प्रकार संबंधित होगी?",
        options: ["Equal", "Twice as large", "Half as large", "Four times as large"],
        optionsHi: ["बराबर", "दोगुनी (Twice as large)", "आधी", "चार गुना"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "(1/2) * b * H_tri = b * H_para => H_tri = 2 * H_para.",
        explanationHi: "(1/2) * b * H_tri = b * H_para => H_tri = 2 * H_para (त्रिभुज की ऊँचाई दोगुनी होगी)।"
      },
      {
        id: 24,
        q: "Find the circumference of a circle with diameter 10 cm. (Take pi = 3.14)",
        qHi: "10 सेमी व्यास वाले वृत्त की परिधि क्या होगी? (pi = 3.14)",
        options: ["31.4 cm", "15.7 cm", "62.8 cm", "78.5 cm"],
        optionsHi: ["31.4 सेमी", "15.7 सेमी", "62.8 सेमी", "78.5 सेमी"],
        ans: 0,
        pyqRef: "Railway Group D & CTET",
        explanation: "Circumference = pi * d = 3.14 * 10 = 31.4 cm.",
        explanationHi: "परिधि = 3.14 * 10 = 31.4 सेमी।"
      },
      {
        id: 25,
        q: "A path of width 1 m runs inside along the boundary of a square garden of side 30 m. Find the area of the path.",
        qHi: "30 मीटर भुजा वाले वर्गाकार बगीचे के अंदर चारों ओर 1 मीटर चौड़ा रास्ता बना है। रास्ते का क्षेत्रफल ज्ञात कीजिए।",
        options: ["112 m²", "116 m²", "120 m²", "124 m²"],
        optionsHi: ["112 मी²", "116 मी²", "120 मी²", "124 मी²"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "Outer square area = 30 * 30 = 900 m². Inner square side = 30 - 2 = 28 m. Inner area = 28 * 28 = 784 m². Path area = 900 - 784 = 116 m².",
        explanationHi: "बाहरी वर्ग = 900 वर्ग मीटर। भीतरी वर्ग = 28 * 28 = 784 वर्ग मीटर। रास्ते का क्षेत्रफल = 900 - 784 = 116 वर्ग मीटर।"
      },
      {
        id: 26,
        q: "What is the area of a circle inscribed in a square of side 14 cm? (Take pi = 22/7)",
        qHi: "14 सेमी भुजा वाले वर्ग के अंदर बने अंतःवृत्त का क्षेत्रफल क्या होगा? (pi = 22/7)",
        options: ["154 cm²", "196 cm²", "77 cm²", "308 cm²"],
        optionsHi: ["154 सेमी²", "196 सेमी²", "77 सेमी²", "308 सेमी²"],
        ans: 0,
        pyqRef: "SSC CGL & BPSC Middle School",
        explanation: "Diameter of inscribed circle = side of square = 14 cm => radius r = 7 cm. Area = (22/7) * 7 * 7 = 154 cm².",
        explanationHi: "अंतःवृत्त का व्यास = 14 सेमी => त्रिज्या r = 7 सेमी। क्षेत्रफल = (22/7) * 7 * 7 = 154 सेमी²।"
      },
      {
        id: 27,
        q: "If the area of a circle is 154 cm², find its diameter. (Take pi = 22/7)",
        qHi: "यदि किसी वृत्त का क्षेत्रफल 154 सेमी² है, तो उसका व्यास क्या होगा?",
        options: ["7 cm", "14 cm", "21 cm", "28 cm"],
        optionsHi: ["7 सेमी", "14 सेमी", "21 सेमी", "28 सेमी"],
        ans: 1,
        pyqRef: "State TET & Railway NTPC",
        explanation: "pi * r^2 = 154 => r^2 = (154 * 7) / 22 = 49 => r = 7 cm. Diameter = 2r = 14 cm.",
        explanationHi: "r^2 = 49 => r = 7 सेमी। व्यास = 2 * 7 = 14 सेमी।"
      },
      {
        id: 28,
        q: "Find the area of a triangle ABC with AB = 5 cm, BC = 12 cm, and angle B = 90°.",
        qHi: "त्रिभुज ABC का क्षेत्रफल ज्ञात कीजिए जिसमें AB = 5 सेमी, BC = 12 सेमी और कोण B = 90° है।",
        options: ["30 cm²", "60 cm²", "65 cm²", "17 cm²"],
        optionsHi: ["30 सेमी²", "60 सेमी²", "65 सेमी²", "17 सेमी²"],
        ans: 0,
        pyqRef: "CTET Paper 2 Math",
        explanation: "Area = (1/2) * AB * BC = (1/2) * 5 * 12 = 30 cm².",
        explanationHi: "क्षेत्रफल = (1/2) * 5 * 12 = 30 सेमी²।"
      },
      {
        id: 29,
        q: "What is the cost of tiling a rectangular hall of 12 m length and 8 m breadth at ₹25 per square meter?",
        qHi: "12 मीटर लंबाई और 8 मीटर चौड़ाई वाले कमरे में ₹25 प्रति वर्ग मीटर की दर से टाइल्स लगाने का व्यय क्या होगा?",
        options: ["₹2,200", "₹2,400", "₹2,600", "₹2,800"],
        optionsHi: ["₹2,200", "₹2,400", "₹2,600", "₹2,800"],
        ans: 1,
        pyqRef: "State TET & BPSC TRE",
        explanation: "Area = 12 * 8 = 96 m². Cost = 96 * 25 = ₹2,400.",
        explanationHi: "क्षेत्रफल = 96 वर्ग मीटर। कुल व्यय = 96 * 25 = ₹2,400।"
      },
      {
        id: 30,
        q: "If the ratio of the radii of two circles is 3:5, what is the ratio of their areas?",
        qHi: "यदि दो वृत्तों की त्रिज्याओं का अनुपात 3:5 है, तो उनके क्षेत्रफलों का अनुपात क्या होगा?",
        options: ["3:5", "6:10", "9:25", "27:125"],
        optionsHi: ["3:5", "6:10", "9:25", "27:125"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & CTET",
        explanation: "Ratio of areas = (r1/r2)^2 = (3/5)^2 = 9:25.",
        explanationHi: "क्षेत्रफलों का अनुपात त्रिज्याओं के वर्ग के अनुपात (3/5)^2 = 9:25 के बराबर होता है।"
      }
    ]
  }
];
