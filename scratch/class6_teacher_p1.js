// Class 6 NCERT Teacher-Mentor Notes: Ganita Prakash Chapters 1 to 5
module.exports = [
  {
    id: "ncert-c6-m01",
    title: "Chapter 1: Patterns in Mathematics (गणित में पैटर्न)",
    titleHi: "अध्याय 1: गणित में पैटर्न (प्रो. मंजुल भार्गव कृत)",
    desc: "NCERT Ganita Prakash Chapter 1: Triangular numbers (Tn), square numbers (Sn), visual dot patterns, sum of consecutive triangular numbers, and sequence algebra.",
    descHi: "गणित प्रकाश अध्याय 1: त्रिकोणीय संख्याएं (Tn), वर्ग संख्याएं (Sn), बिंदु पैटर्न, दो क्रमागत त्रिकोणीय संख्याओं का योग और अनुक्रमों का बीजगणित।",
    competitionEdge: "Triangular number formula Tn = n(n+1)/2, invariant Tn-1 + Tn = n², sum of first n odd numbers = n², and finding the general nth term in exams.",
    competitionEdgeHi: "त्रिकोणीय संख्या सूत्र Tn = n(n+1)/2, दो क्रमागत त्रिकोणों का योग Tn-1 + Tn = n², प्रथम n विषम संख्याओं का योग = n² और n-वां पद ज्ञात करना।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Beautiful Patterns & Geometric Numbers",
        headingHi: "1. एनसीईआरटी मूल पाठ: सुंदर पैटर्न एवं ज्यामितीय संख्याएं (प्रो. मंजुल भार्गव समिति)",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 1 of the new NCERT Class 6 textbook 'Ganita Prakash' was conceptualized under the chairmanship of Fields Medalist Prof. Manjul Bhargava. Instead of starting with dry definitions, it begins with the joy of visual patterns. In CTET Paper 2, BPSC TRE Middle School, and SSC exams, questions on Triangular and Square numbers appear repeatedly!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Dot Arrays: Triangular & Square Numbers</div>
            <p>Dots can be arranged to form symmetric geometric figures:</p>
            <ul>
              <li><strong>Triangular Numbers ($T_n$):</strong> Dots arranged in an equilateral triangular grid: <code>1, 3, 6, 10, 15, 21, 28, 36, 45, 55...</code></li>
              <li><strong>Square Numbers ($S_n$):</strong> Dots arranged in a square grid ($n \\times n$): <code>1, 4, 9, 16, 25, 36, 49, 64, 81, 100...</code></li>
              <li><strong>The Marvelous Discovery:</strong> If you merge two consecutive triangular dot configurations, say $T_2$ (3 dots) and $T_3$ (6 dots), you get exactly 9 dots = $3^2 = S_3$!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय शिक्षक भर्ती व प्रतियोगी छात्रों! नई NCERT कक्षा 6 की पुस्तक 'गणित प्रकाश' का पहला अध्याय विश्व प्रसिद्ध गणितज्ञ प्रो. मंजुल भार्गव की देखरेख में तैयार किया गया है। यह अध्याय गणित को रटने के बजाय चित्रों और आकृतियों में छिपे रहस्यों को देखना सिखाता है। CTET Paper 2 और BPSC 6-8 में त्रिकोणीय संख्याओं से सीधे सवाल पूछे जाते हैं!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT बिंदु विन्यास: त्रिकोणीय एवं वर्ग संख्याएं</div>
            <p>बिंदुओं (Dots) को सममित आकृतियों में सजाने पर संख्याएं जन्म लेती हैं:</p>
            <ul>
              <li><strong>त्रिकोणीय संख्याएं (Triangular Numbers - $T_n$):</strong> त्रिभुज के रूप में व्यवस्थित बिंदु: <code>1, 3, 6, 10, 15, 21, 28, 36, 45, 55...</code></li>
              <li><strong>वर्ग संख्याएं (Square Numbers - $S_n$):</strong> $n \\times n$ वर्ग के रूप में बिंदु: <code>1, 4, 9, 16, 25, 36, 49, 64, 81, 100...</code></li>
              <li><strong>अद्भुत NCERT खोज:</strong> किन्हीं भी दो लगातार त्रिकोणीय संख्याओं को जोड़ने पर हमेशा एक पूर्ण वर्ग संख्या बनती है! जैसे $T_2 (3) + T_3 (6) = 9 = 3^2$!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Triangular & Square Number Master Formulas",
        headingHi: "2. सूत्र एवं नियम संग्रह: त्रिकोणीय व वर्ग संख्याओं के मास्टर सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Chest: Sequence Invariants</div>
            <ul>
              <li><strong>nth Triangular Number Formula:</strong><br/>
                $$\\mathbf{T_n = \\frac{n(n + 1)}{2}} = 1 + 2 + 3 + \\dots + n$$
              </li>
              <li><strong>Sum of Two Consecutive Triangular Numbers:</strong><br/>
                $$\\mathbf{T_{n-1} + T_n = n^2}$$
              </li>
              <li><strong>Sum of First $n$ Consecutive Odd Numbers:</strong><br/>
                $$1 + 3 + 5 + 7 + \\dots + (2n - 1) = \\mathbf{n^2}$$
                Example: $1 + 3 + 5 = 9 = 3^2$. $1 + 3 + 5 + 7 + 9 = 25 = 5^2$!
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: अनुक्रम एवं ज्यामितीय संख्या सूत्र</div>
            <ul>
              <li><strong>n-वीं त्रिकोणीय संख्या का सूत्र:</strong><br/>
                $$\\mathbf{T_n = \\frac{n(n + 1)}{2}} = 1 + 2 + 3 + \\dots + n$$
              </li>
              <li><strong>दो क्रमागत त्रिकोणीय संख्याओं का योग:</strong><br/>
                $$\\mathbf{T_{n-1} + T_n = n^2} \\quad (\\text{हमेशा एक पूर्ण वर्ग संख्या!})$$
              </li>
              <li><strong>प्रथम $n$ विषम संख्याओं का योग:</strong><br/>
                $$1 + 3 + 5 + 7 + \\dots + (2n - 1) = \\mathbf{n^2}$$
                जैसे: $1 + 3 + 5 = 9 = 3^2$। $1 + 3 + 5 + 7 + 9 = 25 = 5^2$ (सीधे 1 सेकंड में योग!)।
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Handshakes & Round-Robin Matches in TET/BPSC",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: हाथ मिलाने और लीग मैचों के क्लासिक प्रश्न",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Real Exam Application: The Handshake Problem</div>
            <p>Question: In a conference of 10 people, everyone shakes hands with everyone else once. How many total handshakes occur?</p>
            <p><strong>Teacher's Solution:</strong> Total handshakes = 9th Triangular Number = $\\frac{10 \\times 9}{2} = \\mathbf{45 \\text{ handshakes}}$!</p>
            <p>Formula: $\\frac{n(n-1)}{2}$. Always remember that round-robin tournament matches and handshakes are direct applications of Triangular Numbers!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ प्रतियोगी परीक्षा का प्रसिद्ध प्रश्न: हाथ मिलाने और मैचों की संख्या</div>
            <p>प्रश्न: एक कमरे में 10 लोग उपस्थित हैं। प्रत्येक व्यक्ति अन्य सभी से ठीक एक बार हाथ मिलाता है। कुल कितने हाथ मिलाए गए?</p>
            <p><strong>शिक्षक का समाधान:</strong> कुल हाथ मिलाना = 9वीं त्रिकोणीय संख्या = $\\frac{10 \\times 9}{2} = \\mathbf{45\\text{ बार}}$!</p>
            <p>सूत्र: $\\frac{n(n-1)}{2}$। क्रिकेट टूर्नामेंट में टीमों के आपस में मैच या हाथ मिलाने वाले सभी प्रश्न सीधे त्रिकोणीय संख्या पर आधारित होते हैं!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m02",
    title: "Chapter 2: Lines and Angles (रेखाएँ और कोण)",
    titleHi: "अध्याय 2: रेखाएँ और कोण",
    desc: "NCERT Ganita Prakash Chapter 2: Fundamental elements (point, line, ray, segment), intersecting vs parallel lines, angle classifications, and complementary/supplementary angle pairs.",
    descHi: "गणित प्रकाश अध्याय 2: ज्यामिति के मूल तत्व (बिंदु, रेखा, किरण, रेखाखंड), प्रतिच्छेदी व समांतर रेखाएं, कोणों का वर्गीकरण और पूरक व संपूरक कोण युग्म।",
    competitionEdge: "Complementary (90°) vs Supplementary (180°) angle word problems, vertically opposite angles equality, and linear pair axiom in TET & SSC exams.",
    competitionEdgeHi: "पूरक (90°) बनाम संपूरक (180°) कोण के सवाल, शीर्षाभिमुख कोणों की समानता और रैखिक युग्म अभिगृहीत।",
    sections: [
      {
        heading: "1. NCERT Core Activity: The Foundation of Geometry — Point to Ray",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: ज्यामिति का उद्गम — बिंदु से किरण तक",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 2 builds the rigorous foundations of geometry. In exams, questions don't just ask definitions; they test properties—like whether a ray has a definite length, how many lines can pass through two distinct points, and the relationships between complementary and supplementary pairs.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Geometric Elements Table</div>
            <ul>
              <li><strong>Point (बिंदु):</strong> A dimensionless location having zero length, width, or height.</li>
              <li><strong>Line Segment (रेखाखंड $AB$):</strong> Shortest path between two points; has <strong>2 endpoints</strong> and a <strong>definite length</strong>.</li>
              <li><strong>Ray (किरण $\\vec{AB}$):</strong> Starts at an initial point $A$ and extends indefinitely in one direction; has <strong>1 endpoint</strong>.</li>
              <li><strong>Line (रेखा $\\overleftrightarrow{AB}$):</strong> Extends indefinitely in both directions; has <strong>0 endpoints</strong>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 2 ज्यामिति की नींव रखता है। प्रतियोगी परीक्षाओं में परीक्षक रेखा, रेखाखंड और किरण के अंत बिंदुओं (Endpoints) और उनकी लंबाई के आधार पर भ्रामक कथन-कारण (Assertion-Reason) वाले प्रश्न बनाते हैं। इसे ध्यान से समझें!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT ज्यामितीय तत्व सारणी</div>
            <ul>
              <li><strong>बिंदु (Point):</strong> केवल स्थिति दर्शाने वाला चिह्न, जिसकी न लंबाई होती है, न चौड़ाई और न मोटाई (विमाहीन)।</li>
              <li><strong>रेखाखंड (Line Segment $AB$):</strong> दो बिंदुओं के बीच का सीधा भाग; इसके <strong>2 अंत बिंदु</strong> होते हैं और <strong>निश्चित लंबाई</strong> होती है।</li>
              <li><strong>किरण (Ray $\\vec{AB}$):</strong> एक निश्चित बिंदु से शुरू होकर एक ही दिशा में अनंत तक जाती है; इसका <strong>1 अंत बिंदु</strong> होता है।</li>
              <li><strong>रेखा (Line $\\overleftrightarrow{AB}$):</strong> दोनों दिशाओं में बिना किसी सीमा के बढ़ती है; इसका <strong>कोई अंत बिंदु नहीं (0 endpoints)</strong> होता है।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Angle Pairs & The Complementary / Supplementary Formulas",
        headingHi: "2. सूत्र एवं नियम संग्रह: कोण युग्म, पूरक एवं संपूरक कोण के सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Angle Pairs</div>
            <ul>
              <li><strong>Complementary Angles (पूरक कोण / कोटिपूरक कोण):</strong> Two angles whose sum is exactly <strong>90&deg;</strong>.<br/>
                $$\\text{Complement of } x = \\mathbf{90^\\circ - x}$$
              </li>
              <li><strong>Supplementary Angles (संपूरक कोण):</strong> Two angles whose sum is exactly <strong>180&deg;</strong>.<br/>
                $$\\text{Supplement of } x = \\mathbf{180^\\circ - x}$$
              </li>
              <li><strong>Linear Pair Axiom (रैखिक युग्म):</strong> Adjacent angles on a straight line add up to <strong>180&deg;</strong>.</li>
              <li><strong>Vertically Opposite Angles (शीर्षाभिमुख कोण):</strong> Always equal when two lines intersect: $\\angle 1 = \\angle 3$ and $\\angle 2 = \\angle 4$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: पूरक व संपूरक कोण सूत्र</div>
            <ul>
              <li><strong>पूरक कोण / कोटिपूरक कोण (Complementary Angles):</strong> जिन दो कोणों का योग <strong>90&deg;</strong> हो।<br/>
                $$x \\text{ का पूरक कोण} = \\mathbf{90^\\circ - x}$$
              </li>
              <li><strong>संपूरक कोण (Supplementary Angles):</strong> जिन दो कोणों का योग <strong>180&deg;</strong> हो।<br/>
                $$x \\text{ का संपूरक कोण} = \\mathbf{180^\\circ - x}$$
              </li>
              <li><strong>रैखिक युग्म अभिगृहीत (Linear Pair):</strong> एक सरल रेखा पर बने आसन्न कोणों का योग हमेशा <strong>180&deg;</strong> होता है।</li>
              <li><strong>शीर्षाभिमुख कोण (Vertically Opposite Angles):</strong> जब दो रेखाएं परस्पर काटती हैं, तो आमने-सामने के कोण सदैव <strong>बराबर</strong> होते हैं।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Complement vs Supplement Algebraic Equations",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: पूरक व संपूरक के समीकरण वाले कठिन प्रश्न",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Classic BPSC/CTET Algebraic Trap</div>
            <p>Question: An angle is 24&deg; more than its complement. What is the angle?</p>
            <p><strong>Solution:</strong> Let angle be $x$. Its complement is $90 - x$.<br/>
              $$x = (90 - x) + 24 \\implies 2x = 114 \\implies x = \\mathbf{57^\\circ}!$$
            </p>
            <p>Check: Complement = $90 - 57 = 33&deg;$. Difference = $57 - 33 = 24&deg;$. Fast and foolproof!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ CTET व शिक्षक भर्ती का बीजगणितीय कोण प्रश्न</div>
            <p>प्रश्न: एक कोण अपने पूरक (कोटिपूरक) कोण से 24&deg; बड़ा है। उस कोण का मान क्या होगा?</p>
            <p><strong>शिक्षक का समाधान:</strong> माना कोण $x$ है, तो पूरक $= 90 - x$।<br/>
              $$x = (90 - x) + 24 \\implies 2x = 114 \\implies x = \\mathbf{57^\\circ}!$$
            </p>
            <p>जांच: पूरक $= 90 - 57 = 33&deg;$, अंतर $= 57 - 33 = 24&deg;$, बिल्कुल सही!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m03",
    title: "Chapter 3: Number Play (संख्याओं का खेल)",
    titleHi: "अध्याय 3: संख्याओं का खेल (काप्रेकर संख्या, कोलात्ज़ परिकल्पना व जादुई वर्ग)",
    desc: "NCERT Ganita Prakash Chapter 3: Kaprekar's constant (6174), Collatz 3n+1 conjecture, 3x3 magic square formula, divisibility rules for 2 to 11, and co-prime numbers.",
    descHi: "गणित प्रकाश अध्याय 3: काप्रेकर स्थिरांक (6174), कोलात्ज़ 3n+1 परिकल्पना, 3x3 जादुई वर्ग सूत्र, 2 से 11 तक की विभाज्यता के नियम और सह-अभाज्य संख्याएं।",
    competitionEdge: "Divisibility rule for 11 (alternating sum), counting total number of factors using prime factorization exponents, and Kaprekar routine steps.",
    competitionEdgeHi: "11 की विभाज्यता का एकांतर योग नियम, अभाज्य गुणनखंड घातों से कुल गुणनखंडों की संख्या ज्ञात करना और काप्रेकर चक्र के चरण।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Indian Mathematical Marvels — Kaprekar & Collatz",
        headingHi: "1. एनसीईआरटी मूल पाठ: भारतीय गणितज्ञों के चमत्कार — काप्रेकर व कोलात्ज़",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 3 is one of the most delightful chapters in NCERT Ganita Prakash! It introduces the work of Indian school teacher and mathematician D.R. Kaprekar (Kaprekar's Constant 6174) and Lothar Collatz's 3n+1 conjecture. Competitive examiners love using these number routines to test mental agility.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 Kaprekar's Constant (6174 Routine)</div>
            <p>Pick any 4-digit number with at least two distinct digits (e.g., 3524):</p>
            <ol>
              <li>Arrange digits descending: <code>5432</code></li>
              <li>Arrange digits ascending: <code>2345</code></li>
              <li>Subtract: <code>5432 - 2345 = 3087</code></li>
              <li>Repeat: <code>8730 - 0378 = 8352</code> &rarr; <code>8532 - 2358 = 6174</code>!</li>
            </ol>
            <p>In at most <strong>7 iterations</strong>, every valid 4-digit number lands on <strong>6174</strong>, which then loops on itself forever ($7641 - 1467 = 6174$)!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! NCERT गणित प्रकाश का यह तीसरा अध्याय भारतीय गणित शिक्षक डी.आर. काप्रेकर के विश्व प्रसिद्ध 'काप्रेकर स्थिरांक 6174' और कोलात्ज़ परिकल्पना से परिचित कराता है। यह अध्याय संख्याओं के साथ खेलने और विभाज्यता के गहरे नियमों को समझने का माध्यम है।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 काप्रेकर स्थिरांक (6174 की जादुई प्रक्रिया)</div>
            <p>कोई भी 4 अंकों की संख्या लें जिसमें कम से कम दो अंक भिन्न हों (उदा. 3524):</p>
            <ol>
              <li>अंकों को घटते क्रम में लिखें: <code>5432</code></li>
              <li>अंकों को बढ़ते क्रम में लिखें: <code>2345</code></li>
              <li>घटाएं: <code>5432 - 2345 = 3087</code></li>
              <li>प्रक्रिया दोहराएं: <code>8730 - 0378 = 8352</code> &rarr; <code>8532 - 2358 = 6174</code>!</li>
            </ol>
            <p>अधिकतम <strong>7 चरणों</strong> में प्रत्येक वैध 4-अंकीय संख्या <strong>6174</strong> पर पहुंच जाती है, जो कि गणित का एक अद्भुत स्थिरांक है!</p>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Comprehensive Divisibility Rules (2 to 11)",
        headingHi: "2. सूत्र एवं नियम संग्रह: 2 से 11 तक की विभाज्यता के संपूर्ण नियम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Divisibility Rules Table</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>Divisor</th><th>Condition / Rule</th><th>Quick Example</th></tr>
              </thead>
              <tbody>
                <tr><td>2</td><td>Last digit is even (0, 2, 4, 6, 8)</td><td>4,578 (ends in 8 ✅)</td></tr>
                <tr><td>3</td><td>Sum of all digits is divisible by 3</td><td>7,341 (Sum = 15 &divide; 3 = 5 ✅)</td></tr>
                <tr><td>4</td><td>Last two digits form a number divisible by 4</td><td>9,536 (36 &divide; 4 = 9 ✅)</td></tr>
                <tr><td>5</td><td>Last digit is 0 or 5</td><td>1,245 (ends in 5 ✅)</td></tr>
                <tr><td>6</td><td>Divisible by BOTH 2 and 3</td><td>8,412 (even & sum = 15 ✅)</td></tr>
                <tr><td>8</td><td>Last three digits form a number divisible by 8</td><td>5,824 (824 &divide; 8 = 103 ✅)</td></tr>
                <tr><td>9</td><td>Sum of all digits is divisible by 9</td><td>6,579 (Sum = 27 &divide; 9 = 3 ✅)</td></tr>
                <tr><td>10</td><td>Last digit is strictly 0</td><td>4,980 ✅</td></tr>
                <tr><td>11</td><td>Difference between sum of odd-place and even-place digits is 0 or divisible by 11</td><td>9,18,082: (9+8+8) - (1+0+2) = 25 - 3 = 22 &divide; 11 ✅</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: 2 से 11 तक विभाज्यता की अचूक सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>भाजक</th><th>विभाज्यता की शर्त / नियम</th><th>त्वरित उदाहरण</th></tr>
              </thead>
              <tbody>
                <tr><td>2</td><td>अंतिम अंक सम (0, 2, 4, 6, 8) हो</td><td>4,578 (अंतिम अंक 8 ✅)</td></tr>
                <tr><td>3</td><td>सभी अंकों का योग 3 से विभाज्य हो</td><td>7,341 (योग = 15, 3 से विभाज्य ✅)</td></tr>
                <tr><td>4</td><td>अंतिम दो अंकों से बनी संख्या 4 से विभाज्य हो</td><td>9,536 (36 &divide; 4 = 9 ✅)</td></tr>
                <tr><td>5</td><td>इकाई का अंक 0 या 5 हो</td><td>1,245 (इकाई 5 ✅)</td></tr>
                <tr><td>6</td><td>संख्या 2 और 3 दोनों से एक साथ विभाज्य हो</td><td>8,412 (सम है और योग 15 है ✅)</td></tr>
                <tr><td>8</td><td>अंतिम तीन अंकों से बनी संख्या 8 से विभाज्य हो</td><td>5,824 (824 &divide; 8 = 103 ✅)</td></tr>
                <tr><td>9</td><td>सभी अंकों का योग 9 से विभाज्य हो</td><td>6,579 (योग = 27, 9 से विभाज्य ✅)</td></tr>
                <tr><td>10</td><td>इकाई का अंक अनिवार्य रूप से 0 हो</td><td>4,980 ✅</td></tr>
                <tr><td>11</td><td>विषम स्थानों के अंकों का योग - सम स्थानों के अंकों का योग = 0 या 11 का गुणज हो</td><td>9,18,082 &rarr; (9+8+8) - (1+0+2) = 25 - 3 = 22 (11 का गुणज ✅)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Finding the Missing Digit in Divisibility by 11",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: 11 से विभाज्यता में अज्ञात अंक ज्ञात करना",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Missing Digit Question in BPSC & CTET</div>
            <p>Question: If the number <code>54*32</code> is completely divisible by 11, find the missing digit *.</p>
            <p><strong>Step-by-Step Solution:</strong></p>
            <ul>
              <li>Sum of odd places (from right): $2 + * + 5 = 7 + *$</li>
              <li>Sum of even places (from right): $3 + 4 = 7$</li>
              <li>Difference: $(7 + *) - 7 = *$</li>
              <li>For difference to be 0 or 11, $*$ must be <strong>0</strong> (since $*$ is a single digit)!</li>
              <li>Check: 54032 &divide; 11 = 4912 exactly!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा का लोकप्रिय प्रश्न: 11 से विभाज्यता में लुप्त अंक (*)</div>
            <p>प्रश्न: यदि संख्या <code>54*32</code>, 11 से पूर्णतः विभाज्य हो, तो तारांकित अंक * का मान क्या होगा?</p>
            <p><strong>शिक्षक का समाधान:</strong></p>
            <ul>
              <li>दाईं ओर से विषम स्थानों का योग: $2 + * + 5 = 7 + *$</li>
              <li>दाईं ओर से सम स्थानों का योग: $3 + 4 = 7$</li>
              <li>अंतर: $(7 + *) - 7 = *$</li>
              <li>अंतर 0 या 11 होने के लिए $*$ का मान अनिवार्य रूप से <strong>0</strong> होना चाहिए!</li>
              <li>जांच: $54032 \\div 11 = 4912$ पूर्णतः विभाज्य!</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m04",
    title: "Chapter 4: Data Handling and Presentation (आँकड़ों का प्रबंधन एवं प्रस्तुतिकरण)",
    titleHi: "अध्याय 4: आँकड़ों का प्रबंधन एवं प्रस्तुतिकरण",
    desc: "NCERT Ganita Prakash Chapter 4: Data collection, organization, tally marks, pictographs, bar graph construction rules (uniform bar width, equal spacing), and data interpretation.",
    descHi: "गणित प्रकाश अध्याय 4: आंकड़ों का संग्रह व संगठन, मिलान चिह्न, चित्रालेख, दंड आलेख निर्माण नियम (समान चौड़ाई, समान अंतराल) और आंकड़ों का विश्लेषण।",
    competitionEdge: "Uniform width of bars and equal gaps as mandatory pedagogical rules, scale selection on vertical axis, and range/mean questions in competitive exams.",
    competitionEdgeHi: "दंड आलेख में बार की समान चौड़ाई और समान अंतराल का अनिवार्य नियम, ऊर्ध्वाधर अक्ष पर पैमाने का चयन और परिसर व औसत पर आधारित प्रश्न।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: School Library Records & Visual Representation",
        headingHi: "1. एनसीईआरटी मूल पाठ: विद्यालय पुस्तकालय के आंकड़े एवं दृश्य प्रस्तुति",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 4 guides students from raw unorganized lists to structured visual bar graphs. In CTET pedagogy and BPSC exams, questions test <strong>why graphs are preferred over tables</strong> (instant pattern recognition) and the <strong>mandatory geometric rules of drawing a bar graph</strong>.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Mandatory Rules for Bar Graphs</div>
            <ul>
              <li><strong>Uniform Width of Bars:</strong> The width of every bar must be identical (bar width does NOT represent any numerical data).</li>
              <li><strong>Equal Spacing Between Bars:</strong> The gap between any two consecutive bars must be uniform.</li>
              <li><strong>Height Proportional to Value:</strong> Only the <strong>height (or length)</strong> of the bar represents the frequency!</li>
              <li><strong>Zero Baseline:</strong> The vertical axis must start at zero (omitting zero creates a misleading visual distortion!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 4 अव्यवस्थित आंकड़ों से सुव्यवस्थित दंड आलेख (Bar Graph) बनाने की यात्रा है। शिक्षक भर्ती परीक्षा में पेडागोजी के तहत अक्सर पूछा जाता है कि बार ग्राफ बनाते समय कौन-से नियम अनिवार्य हैं। इन चार नियमों को कभी न भूलें!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT दंड आलेख (Bar Graph) के 4 अनिवार्य नियम</div>
            <ul>
              <li><strong>दंडों की चौड़ाई एकसमान हो:</strong> सभी दंडों की चौड़ाई समान होनी चाहिए (चौड़ाई किसी संख्या को नहीं दर्शाती)।</li>
              <li><strong>दंडों के बीच समान दूरी:</strong> किन्हीं भी दो लगातार दंडों के बीच का खाली स्थान (Gap) हमेशा बराबर होना चाहिए।</li>
              <li><strong>ऊंचाई मान के समानुपाती हो:</strong> केवल दंड की <strong>ऊंचाई (Height)</strong> ही संबंधित आंकड़े या बारंबारता को दर्शाती है!</li>
              <li><strong>शून्य आधार रेखा (Zero Baseline):</strong> ऊर्ध्वाधर अक्ष की शुरुआत अनिवार्य रूप से 0 से होनी चाहिए!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Data Handling Terms & Calculations",
        headingHi: "2. सूत्र एवं नियम संग्रह: सांख्यिकी शब्दावली एवं महत्वपूर्ण गणना सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Core Statistical Metrics</div>
            <ul>
              <li>$$\\text{Range (परिसर / परास)} = \\text{Highest Value} - \\text{Lowest Value}$$</li>
              <li>$$\\text{Arithmetic Mean (समांतर माध्य)} = \\frac{\\sum x_i}{N} = \\frac{\\text{Sum of all entries}}{\\text{Total entries}}$$</li>
              <li><strong>Tally Mark 5-Bundle Rule:</strong> <code>| = 1, || = 2, ||| = 3, |||| = 4, <s>||||</s> = 5</code>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: सांख्यिकी सूत्र एवं परिभाषाएं</div>
            <ul>
              <li>$$\\text{परास / परिसर (Range)} = \\text{अधिकतम मान} - \\text{न्यूनतम मान}$$</li>
              <li>$$\\text{समांतर माध्य (Arithmetic Mean)} = \\frac{\\text{सभी मानों का योग}}{\\text{कुल पदों की संख्या}}$$</li>
              <li><strong>मिलान चिह्न 5 का बंडल नियम:</strong> <code>| = 1, || = 2, ||| = 3, |||| = 4, <s>||||</s> = 5</code>।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Misleading Bar Charts with Broken Scales",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: भ्रामक आलेख एवं पैमाने की विसंगति",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Truncated Y-Axis Misconception</div>
            <p>If a bar graph starts its vertical axis at 80 instead of 0, a score of 90 looks 5 times taller than a score of 82, creating an optical illusion of a massive difference. Examiners ask: <em>"Why is this graph misleading?"</em> &rarr; <strong>Because the Y-axis does not start from zero!</strong></p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ कटी हुई अक्ष (Truncated Axis) का भ्रामक ग्राफ</div>
            <p>यदि कोई दंड आलेख 0 के बजाय 80 से शुरू किया जाए, तो 90 का मान 82 के मान से 5 गुना बड़ा दिखाई देने लगता है। CTET में पूछा गया प्रश्न: <em>"यह ग्राफ पाठक को किस प्रकार भ्रमित करता है?"</em> &rarr; <strong>क्योंकि इसकी Y-अक्ष शून्य से शुरू नहीं हुई है!</strong></p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m05",
    title: "Chapter 5: Prime Time (अभाज्य संख्याएँ और गुणनखंडन)",
    titleHi: "अध्याय 5: अभाज्य संख्याएँ और गुणनखंडन",
    desc: "NCERT Ganita Prakash Chapter 5: Sieve of Eratosthenes, prime vs composite numbers, twin primes, unique prime factorization, factor trees, and HCF-LCM algorithms.",
    descHi: "गणित प्रकाश अध्याय 5: इराटोस्थनीज की छलनी, अभाज्य बनाम भाज्य संख्याएं, जुड़वां अभाज्य, अभाज्य गुणनखंड वृक्ष और म.स.-ल.स. की विधियां।",
    competitionEdge: "Total primes between 1 to 100 (exactly 25 primes!), the 8 pairs of twin primes, Fundamental Theorem of Arithmetic, and HCF × LCM = A × B application.",
    competitionEdgeHi: "1 से 100 के बीच कुल 25 अभाज्य संख्याएं, जुड़वां अभाज्य के 8 जोड़े, अंकगणित की आधारभूत प्रमेय और म.स. × ल.स. = A × B का अनुप्रयोग।",
    sections: [
      {
        heading: "1. NCERT Core Activity: The Sieve of Eratosthenes & The 25 Primes",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: इराटोस्थनीज की छलनी एवं 1 से 100 तक की 25 अभाज्य संख्याएं",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 5 is the mathematical powerhouse of Class 6! Prime numbers are the "atoms" of arithmetic because every whole number can be uniquely built by multiplying prime numbers. The Greek mathematician Eratosthenes developed a simple mechanical filter: the <strong>Sieve of Eratosthenes (इराटोस्थनीज की छलनी)</strong>.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 The 25 Prime Numbers between 1 and 100</div>
            <p>By crossing out multiples of 2, 3, 5, and 7, exactly 25 prime numbers remain between 1 and 100:</p>
            <p style="font-weight:700; color:#1e40af; line-height:1.8;">
              2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
            </p>
            <ul>
              <li><strong>Only Even Prime:</strong> <strong>2</strong> is the only even prime number (and the smallest prime!).</li>
              <li><strong>Number 1:</strong> 1 is <strong>NEITHER prime NOR composite</strong> (it has only one factor, itself!).</li>
              <li><strong>Twin Primes (Differ by 2):</strong> Exactly 8 pairs: <code>(3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73)</code>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय शिक्षक भर्ती प्रतियोगियों! अध्याय 5 अंकगणित का हृदय है। अभाज्य संख्याएं गणित के 'परमाणु' (Atoms) हैं क्योंकि प्रत्येक संख्या इन्हीं के गुणन से बनती है। यूनानी गणितज्ञ इराटोस्थनीज ने 1 से 100 तक की संख्याओं में से अभाज्य संख्याओं को अलग करने के लिए एक अद्भुत छलनी बनाई थी।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 1 से 100 के बीच कुल 25 अभाज्य संख्याएं (कंठस्थ रखें!)</div>
            <p>2, 3, 5, 7 के गुणजों को काटने के बाद ठीक 25 अभाज्य संख्याएं बचती हैं:</p>
            <p style="font-weight:700; color:#1e40af; line-height:1.8;">
              2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
            </p>
            <ul>
              <li><strong>एकमात्र सम अभाज्य संख्या:</strong> <strong>2</strong> सबसे छोटी और एकमात्र सम अभाज्य संख्या है।</li>
              <li><strong>संख्या 1:</strong> 1 <strong>न तो अभाज्य है और न ही भाज्य</strong> (क्योंकि इसका केवल एक ही गुणनखंड होता है)।</li>
              <li><strong>जुड़वां अभाज्य (Twin Primes):</strong> जिन अभाज्य संख्याओं का अंतर 2 हो (कुल 8 जोड़े): <code>(3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73)</code>।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Prime Factorization, HCF & LCM Algorithms",
        headingHi: "2. सूत्र एवं नियम संग्रह: अभाज्य गुणनखंडन, म.स. व ल.स. निकालने के अचूक सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: HCF & LCM by Prime Powers</div>
            <p>Express numbers in prime factor power forms: $A = 2^{a_1} \\times 3^{a_2} \\dots$ and $B = 2^{b_1} \\times 3^{b_2} \\dots$</p>
            <ul>
              <li><strong>HCF (Highest Common Factor):</strong> Product of the <strong>SMALLEST powers</strong> of each COMMON prime factor:<br/>
                $$\\text{HCF} = 2^{\\min(a_1, b_1)} \\times 3^{\\min(a_2, b_2)} \\dots$$
              </li>
              <li><strong>LCM (Lowest Common Multiple):</strong> Product of the <strong>GREATEST powers</strong> of ALL prime factors involved:<br/>
                $$\\text{LCM} = 2^{\\max(a_1, b_1)} \\times 3^{\\max(a_2, b_2)} \\dots$$
              </li>
              <li><strong>Total Number of Factors Formula:</strong> If $N = p^a \\cdot q^b \\cdot r^c$, then total factors = $\\mathbf{(a + 1)(b + 1)(c + 1)}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: घात विधि द्वारा म.स. व ल.स.</div>
            <p>संख्याओं को अभाज्य गुणनखंडों की घातों के रूप में लिखें:</p>
            <ul>
              <li><strong>म.स. (HCF - महत्तम समापवर्तक):</strong> प्रत्येक उभयनिष्ठ अभाज्य गुणनखंड की <strong>सबसे छोटी घात (Minimum Power)</strong> का गुणनफल।</li>
              <li><strong>ल.स. (LCM - लघुत्तम समापवर्त्य):</strong> उपस्थित सभी अभाज्य गुणनखंडों की <strong>सबसे बड़ी घात (Maximum Power)</strong> का गुणनफल।</li>
              <li><strong>कुल गुणनखंडों की संख्या का जादुई सूत्र:</strong> यदि संख्या का अभाज्य गुणनखंडन $N = p^a \\cdot q^b \\cdot r^c$ हो, तो कुल गुणनखंड = $\\mathbf{(a + 1)(b + 1)(c + 1)}$।<br/>
                उदाहरण: $72 = 2^3 \\times 3^2 \\implies (3+1)(2+1) = 4 \\times 3 = \\mathbf{12\\text{ गुणनखंड}}$!
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Co-Prime Numbers & Smallest Composite Number",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: सह-अभाज्य संख्याएं एवं सबसे छोटी भाज्य संख्या",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ High-Yield Exam Traps</div>
            <ul>
              <li><strong>Smallest Composite Number:</strong> The smallest composite number is <strong>4</strong> (NOT 2, NOT 1!).</li>
              <li><strong>Co-Prime Myth:</strong> "Do numbers have to be prime to be co-prime?" <strong>NO!</strong> For example, 8 and 9 are both composite, but their HCF = 1, so <strong>(8, 9) are Co-Prime!</strong></li>
              <li><strong>Consecutive Integers:</strong> Any two consecutive integers $n$ and $n+1$ are ALWAYS co-prime!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ प्रतियोगी परीक्षा के सबसे घातक भ्रम</div>
            <ul>
              <li><strong>सबसे छोटी भाज्य संख्या (Composite):</strong> सबसे छोटी भाज्य संख्या <strong>4</strong> है (1 या 2 नहीं!)।</li>
              <li><strong>सह-अभाज्य (Co-Prime) का भ्रम:</strong> "क्या सह-अभाज्य होने के लिए दोनों संख्याओं का अभाज्य होना जरूरी है?" <strong>बिल्कुल नहीं!</strong> उदाहरण: 8 और 9 दोनों भाज्य संख्याएं हैं, परंतु उनका म.स. (HCF) = 1 है, अतः <strong>(8, 9) सह-अभाज्य युग्म है!</strong></li>
              <li><strong>लगातार संख्याएं:</strong> किन्हीं भी दो लगातार पूर्णांकों ($n$ और $n+1$) का म.स. हमेशा 1 होता है (वे सदैव सह-अभाज्य होती हैं)!</li>
            </ul>
          </div>
        `
      }
    ]
  }
];
