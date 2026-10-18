// Class 5 NCERT Teacher-Mentor Notes: Chapters 9 to 15 + EVS + Hindi
module.exports = [
  {
    id: "ncert-c5-math-ch9",
    title: "Chapter 9: Coconut Farm (Area vs. Perimeter & Costing)",
    titleHi: "अध्याय 9: नारियल का बगीचा (क्षेत्रफल बनाम परिमाप व लागत)",
    desc: "NCERT coconut farm array arrangements, division facts (35 ÷ 7 = 5), division algorithm with remainder, and packaging cost calculations.",
    descHi: "नारियल बगीचे में कतार व्यवस्था, भाग के बुनियादी तथ्य (35 ÷ 7 = 5), यूक्लिड विभाजन प्रमेय व शेषफल, और पैकेजिंग लागत निर्धारण।",
    competitionEdge: "Euclid division lemma Dividend = Divisor × Quotient + Remainder, remainder condition 0 ≤ R < D, and repetitive subtraction division logic.",
    competitionEdgeHi: "भाज्य = भाजक × भागफल + शेषफल का संबंध, शेषफल की शर्त 0 ≤ R < भाजक और सतत घटाव द्वारा भाग का प्रतियोगी नियम।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Coconut Arrays & The Essence of Division",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: नारियल की कतारें और भाग का बुनियादी अर्थ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Welcome aspirants! Chapter 9 uses a lush coconut farm to explain that <strong>Division is the inverse of Multiplication</strong>, and geometrically represents finding the missing side of a rectangle or array. When 35 coconuts are arranged in 7 equal rows, how many coconuts stand in each row? Let us explore!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Farm Observation: Array of Coconuts</div>
            <p>From the multiplication fact $7 \\times 5 = 35$, NCERT derives two independent division facts:</p>
            <ul>
              <li><strong>Fact 1:</strong> $35 \\div 7 = 5$ (35 split into 7 equal rows has 5 coconuts in each row).</li>
              <li><strong>Fact 2:</strong> $35 \\div 5 = 7$ (35 split into groups of 5 makes 7 full groups).</li>
              <li><strong>Division as Repeated Subtraction:</strong> Dividing 35 by 7 means subtracting 7 continuously until zero remains: <code>35 - 7 - 7 - 7 - 7 - 7 = 0</code> (Done 5 times!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 9 एक नारियल के बगीचे की कतारों के माध्यम से भाग (Division) की मूल अवधारणा समझाता है। भाग वास्तव में <strong>गुणा की उल्टी संक्रिया</strong> और <strong>सतत घटाव (Repeated Subtraction)</strong> है। शिक्षक भर्ती में पेडागोजी के तहत यह प्रश्न पूछा जाता है कि भाग को बच्चों के सामने कैसे प्रस्तुत किया जाए।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT बगीचा गतिविधि: नारियल की कतारें और भाग के तथ्य</div>
            <p>गुणा के तथ्य $7 \\times 5 = 35$ से NCERT भाग के दो स्वतंत्र तथ्य तैयार करती है:</p>
            <ul>
              <li><strong>तथ्य 1:</strong> $35 \\div 7 = 5$ (35 नारियलों को 7 बराबर कतारों में बांटने पर प्रत्येक कतार में 5 नारियल होंगे)।</li>
              <li><strong>तथ्य 2:</strong> $35 \\div 5 = 7$ (35 नारियलों के 5-5 के ढेर बनाने पर कुल 7 ढेर बनेंगे)।</li>
              <li><strong>सतत घटाव के रूप में भाग:</strong> 35 में से 7 को तब तक घटाना जब तक शून्य न बचे: <code>35 - 7 - 7 - 7 - 7 - 7 = 0</code> (ठीक 5 बार घटाया गया!)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: The Division Algorithm & Remainder Properties",
        headingHi: "2. सूत्र एवं नियम संग्रह: विभाजन प्रमेय एवं शेषफल के अनिवार्य गुणधर्म",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: The Division Algorithm</div>
            <p style="font-size:1.1rem; font-weight:800; color:#b45309; text-align:center;">
              $$\\mathbf{\\text{Dividend} = (\\text{Divisor} \\times \\text{Quotient}) + \\text{Remainder}}$$
              $$\\mathbf{\\text{भाज्य} = (\\text{भाजक} \\times \\text{भागफल}) + \\text{शेषफल}}$$
            </p>
            <p><strong>Crucial Mathematical Invariant:</strong> The remainder must strictly satisfy:</p>
            <p style="text-align:center; font-weight:800; color:#1e40af;">
              $$0 \\le \\text{Remainder} < \\text{Divisor}$$
            </p>
            <p>If dividing by 7, the only possible remainders are <code>0, 1, 2, 3, 4, 5, 6</code>. The remainder can NEVER be 7 or greater!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: यूक्लिड विभाजन प्रमेय व शेषफल नियम</div>
            <p style="font-size:1.1rem; font-weight:800; color:#b45309; text-align:center;">
              $$\\mathbf{\\text{भाज्य (Dividend)} = [\\text{भाजक (Divisor)} \\times \\text{भागफल (Quotient)}] + \\text{शेषफल (Remainder)}}$$
            </p>
            <p><strong>अनिवार्य गणितीय शर्त:</strong> शेषफल का मान सदैव शून्य के बराबर या बड़ा, लेकिन भाजक से हमेशा छोटा होना चाहिए:</p>
            <p style="text-align:center; font-weight:800; color:#1e40af;">
              $$0 \\le \\text{शेषफल} < \\text{भाजक}$$
            </p>
            <p>यदि किसी संख्या को 7 से भाग दिया जाए, तो संभावित शेषफल केवल <code>0, 1, 2, 3, 4, 5, 6</code> ही हो सकते हैं। शेषफल कभी भी 7 या 7 से बड़ा नहीं हो सकता!</p>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Divisor-Remainder Word Problems in BPSC & CTET",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: परीक्षा में पूछे गए भाजक-शेषफल संबंध प्रश्न",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Classic Examination Problem</div>
            <p>Question: In a division sum, the divisor is 5 times the quotient and twice the remainder. If the remainder is 15, what is the dividend?</p>
            <p><strong>Step-by-Step Teacher's Solution:</strong></p>
            <ul>
              <li>Remainder $R = 15$.</li>
              <li>Divisor $D = 2 \\times R = 2 \\times 15 = 30$.</li>
              <li>Divisor is 5 times Quotient $\\implies 30 = 5 \\times Q \\implies Q = 6$.</li>
              <li>$\\text{Dividend} = (D \\times Q) + R = (30 \\times 6) + 15 = 180 + 15 = \\mathbf{195}$!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ शिक्षक भर्ती का क्लासिक प्रश्न: भाजक-भागफल-शेषफल संबंध</div>
            <p>प्रश्न: भाग के एक प्रश्न में, भाजक भागफल का 5 गुना है और शेषफल का दोगुना है। यदि शेषफल 15 है, तो भाज्य ज्ञात कीजिए।</p>
            <p><strong>शिक्षक की चरणबद्ध व्याख्या:</strong></p>
            <ul>
              <li>शेषफल $R = 15$।</li>
              <li>भाजक $D = 2 \\times 15 = 30$।</li>
              <li>भाजक भागफल का 5 गुना है $\\implies 30 = 5 \\times Q \\implies Q = 6$ (भागफल = 6)।</li>
              <li>भाज्य $= (30 \\times 6) + 15 = 180 + 15 = \\mathbf{195}$! (परीक्षा में 30 सेकंड में हल!)</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch10",
    title: "Chapter 10: Symmetrical Designs (Lines of Symmetry & Rotations)",
    titleHi: "अध्याय 10: सममित डिज़ाइन (Symmetrical Designs: सममिति रेखाएं व घूर्णन)",
    desc: "NCERT Prem and Manu's alphabet cutout banner, vertical vs horizontal lines of symmetry, mirror reflection test, and capital English letters analysis.",
    descHi: "प्रेम और मनु का हैप्पी बर्थडे कटआउट बैनर, ऊर्ध्वाधर व क्षैतिज सममिति रेखाएं, दर्पण परीक्षण और अंग्रेजी के बड़े अक्षरों की सममिति।",
    competitionEdge: "Lines of symmetry for 26 capital letters, letters with dual symmetry (H, I, O, X), letters with no symmetry, and mirror reflection invariance.",
    competitionEdgeHi: "अंग्रेजी वर्णमाला के 26 बड़े अक्षरों की सममिति रेखाएं, दोहरी सममिति वाले अक्षर (H, I, O, X) और दर्पण परावर्तन के प्रतियोगी नियम।",
    sections: [
      {
        heading: "1. NCERT Core Activity: The 'Happy Birthday' Paper Cutouts",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: 'हैप्पी बर्थडे' अक्षरों की कटिंग व सममिति",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 10 uses paper folding and cutout art to discover lines of symmetry. When Prem and Manu cut out the letter 'A' for Lali's birthday, they folded the paper vertically down the middle, cut one half, and unfolded a perfect symmetrical letter! This fold line is the <strong>Line of Symmetry (सममिति रेखा)</strong>.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Cutout Logic: Fold & Cut</div>
            <ul>
              <li><strong>Vertical Line of Symmetry:</strong> Folding paper vertically. Left half coincides exactly with right half. Example: Letter <code>A, M, T, U, V, W, Y</code>.</li>
              <li><strong>Horizontal Line of Symmetry:</strong> Folding paper horizontally. Top half coincides exactly with bottom half. Example: Letter <code>B, C, D, E, K</code>.</li>
              <li><strong>Both Vertical & Horizontal Lines:</strong> Letter <code>H, I, O, X</code> (Each has 2 lines of symmetry!).</li>
              <li><strong>Zero Lines of Symmetry (Asymmetric):</strong> Letter <code>F, G, J, L, P, Q, R, S, Z</code>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 10 कागज़ को मोड़कर काटने की कला के माध्यम से सममिति रेखाएं सिखाता है। लाली के जन्मदिन के लिए 'HAPPY BIRTHDAY' लिखते समय प्रेम और मनु ने अक्षर 'A' को बीच से लंबवत मोड़कर काटा और एकदम सटीक सममित अक्षर प्राप्त किया! वह मोड़ने वाली रेखा ही <strong>सममिति की रेखा (Line of Symmetry)</strong> कहलाती है।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT कटआउट तर्क: मोड़ना और काटना</div>
            <ul>
              <li><strong>ऊर्ध्वाधर सममिति रेखा (Vertical):</strong> बायां भाग दाएं भाग पर पूरी तरह बैठ जाता है। उदाहरण: <code>A, M, T, U, V, W, Y</code>।</li>
              <li><strong>क्षैतिज सममिति रेखा (Horizontal):</strong> ऊपरी भाग निचले भाग पर पूरी तरह बैठ जाता है। उदाहरण: <code>B, C, D, E, K</code>।</li>
              <li><strong>दोनों (ऊर्ध्वाधर व क्षैतिज दोनों रेखाएं):</strong> <code>H, I, O, X</code> (प्रत्येक में 2 सममिति रेखाएं होती हैं!)।</li>
              <li><strong>शून्य सममिति रेखा (असममित अक्षर):</strong> <code>F, G, J, L, P, Q, R, S, Z</code> (इन्हें मोड़ने पर दोनों भाग कभी समान नहीं बैठते)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Complete Symmetry Table for English Alphabet & Polygons",
        headingHi: "2. सूत्र एवं नियम संग्रह: अंग्रेजी वर्णमाला व ज्यामितीय आकृतियों की सममिति सारणी",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Table: Symmetry of Geometric Figures</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>Shape</th><th>Lines of Symmetry</th><th>Type of Lines</th><th>Exam Memory Trick</th></tr>
              </thead>
              <tbody>
                <tr><td>Equilateral Triangle (समबाहु)</td><td>3</td><td>Altitudes / Medians</td><td>3 equal sides = 3 lines</td></tr>
                <tr><td>Isosceles Triangle (समद्विबाहु)</td><td>1</td><td>Angle bisector of unequal angle</td><td>Only 1 line!</td></tr>
                <tr><td>Scalene Triangle (विषमबाहु)</td><td>0</td><td>None</td><td>No equal sides = 0 lines</td></tr>
                <tr><td>Square (वर्ग)</td><td>4</td><td>2 midpoints + 2 diagonals</td><td>4 equal sides = 4 lines</td></tr>
                <tr><td>Rectangle (आयत)</td><td>2</td><td>Connecting opposite midpoints only!</td><td>Diagonals are NOT lines of symmetry!</td></tr>
                <tr><td>Rhombus (समचतुर्भुज)</td><td>2</td><td>Diagonals only</td><td>Diagonals are perpendicular bisectors</td></tr>
                <tr><td>Circle (वृत्त)</td><td>Infinite (&infin;)</td><td>Any diameter passing through center</td><td>Countless diameters</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: ज्यामितीय आकृतियों की सममिति सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>ज्यामितीय आकृति</th><th>सममिति रेखाओं की संख्या</th><th>रेखाओं का प्रकार</th><th>परीक्षा याद रखने की ट्रिक</th></tr>
              </thead>
              <tbody>
                <tr><td>समबाहु त्रिभुज (Equilateral)</td><td>3</td><td>तीनों शीर्षलंब / माध्यिकाएं</td><td>3 बराबर भुजाएं = 3 सममिति रेखाएं</td></tr>
                <tr><td>समद्विबाहु त्रिभुज (Isosceles)</td><td>1</td><td>असमान भुजा पर लंब</td><td>केवल 1 रेखा!</td></tr>
                <tr><td>विषमबाहु त्रिभुज (Scalene)</td><td>0</td><td>कोई नहीं</td><td>कोई भुजा बराबर नहीं = 0 रेखाएं</td></tr>
                <tr><td>वर्ग (Square)</td><td>4</td><td>2 भुजाओं के मध्य बिंदु + 2 विकर्ण</td><td>4 बराबर भुजाएं = 4 रेखाएं</td></tr>
                <tr><td>आयत (Rectangle)</td><td>2</td><td>केवल विपरीत भुजाओं के मध्य बिंदु!</td><td>आयत के विकर्ण सममिति रेखा नहीं होते!</td></tr>
                <tr><td>समचतुर्भुज (Rhombus)</td><td>2</td><td>केवल 2 विकर्ण</td><td>विकर्ण परस्पर लंबवत होते हैं</td></tr>
                <tr><td>वृत्त (Circle)</td><td>अनंत (&infin;)</td><td>केंद्र से गुजरने वाला प्रत्येक व्यास</td><td>अनगिनत व्यास संभव हैं</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: The Rectangle Diagonal Fallacy in CTET",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: आयत के विकर्ण का सबसे बड़ा भ्रम",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The #1 Trap: Is a Rectangle's Diagonal a Line of Symmetry?</div>
            <p><strong>Common Mistake:</strong> Over 70% of candidates assume a rectangle has 4 lines of symmetry like a square. <strong>WRONG!</strong></p>
            <p><strong>Teacher's Proof:</strong> Take a rectangular sheet of paper and fold it along the diagonal. The adjacent edges will stick out at an angle—they do NOT overlap! A rectangle has only <strong>2 lines of symmetry</strong> (the two lines joining the midpoints of opposite sides).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा का नंबर-1 जाल: क्या आयत का विकर्ण सममिति रेखा है?</div>
            <p><strong>सबसे बड़ा भ्रम:</strong> CTET में 70% छात्र आयत में 4 सममिति रेखाएं लगा देते हैं। <strong>यह बिल्कुल गलत है!</strong></p>
            <p><strong>शिक्षक का प्रत्यक्ष प्रमाण:</strong> A4 साइज के आयताकार कागज़ को विकर्ण (तिरछा) मोड़कर देखिए। दोनों कोने बाहर निकल आएंगे, वे एक-दूसरे पर कभी नहीं बैठेंगे! अतः आयत में केवल <strong>2 सममिति रेखाएं</strong> होती हैं (विपरीत भुजाओं के मध्य बिंदुओं को मिलाने वाली रेखाएं)।</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch11",
    title: "Chapter 11: Grandmother’s Quilt (Decimals, Tenths & Hundredths)",
    titleHi: "अध्याय 11: दादी की रजाई (दाशमिक प्रणाली: दशांश, शतांश, रुपये व पैसे)",
    desc: "NCERT grandmother's quilt lace decoration, boundary length (perimeter), patch area, tenths (0.1), hundredths (0.01), and rupees-paise decimal notation.",
    descHi: "दादी की रजाई पर गोटा/लेस सजावट, घेरा लंबाई (परिमाप), पैच क्षेत्रफल, दशांश (0.1), शतांश (0.01) और रुपये-पैसे का दाशमिक निरूपण।",
    competitionEdge: "Perimeter vs area independence principle, decimal place value conversions, and 1 paisa = ₹0.01, 1 mm = 0.1 cm CTET application.",
    competitionEdgeHi: "समान परिमाप होने पर क्षेत्रफल भिन्न होने का नियम, दाशमिक स्थानीय मान और 1 पैसा = ₹0.01, 1 मिमी = 0.1 सेमी का रूपांतरण।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Grandmother's Quilt Border Lace & Patchwork",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: दादी की रजाई का गोटा (लेस) और पैचवर्क",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 11 beautifully integrates two vital topics: <strong>Perimeter (the boundary border)</strong> and <strong>Decimals (Tenths & Hundredths of currency and metric measures)</strong>. When grandmother wants to sew a colorful lace along the boundary of her quilt, she needs its Perimeter!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Lace Selection Problem</div>
            <p>Preetha and Adrit's grandmother stitched a quilt of length 2.5 meters and width 1.5 meters. How much lace is needed to cover the entire border?</p>
            <p><strong>Boundary = Perimeter:</strong> $2 \\times (\\text{Length} + \\text{Width}) = 2 \\times (2.5 + 1.5) = 2 \\times 4.0 = \\mathbf{8.0 \\text{ meters}}$.</p>
            <p>If lace costs ₹12.50 per meter, total cost = $8 \\times 12.50 = \\mathbf{\\text{₹}100.00}$.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 11 दो महत्वपूर्ण विषयों को जोड़ता है: <strong>परिमाप (चारों ओर का घेरा)</strong> और <strong>दशमलव (दशांश और शतांश)</strong>। जब दादी अपनी रजाई के चारों कोनों पर गोटा या लेस लगाना चाहती हैं, तो उन्हें रजाई के परिमाप की आवश्यकता होती है!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT लेस मापन समस्या</div>
            <p>प्रीथा और अद्रित की दादी ने 2.5 मीटर लंबी और 1.5 मीटर चौड़ी रजाई बनाई। पूरी सीमा पर लगाने के लिए कितने मीटर लेस की आवश्यकता होगी?</p>
            <p><strong>सीमा = परिमाप:</strong> $2 \\times (\\text{लंबाई} + \\text{चौड़ाई}) = 2 \\times (2.5 + 1.5) = 2 \\times 4.0 = \\mathbf{8.0\\text{ मीटर}}$।</p>
            <p>यदि लेस का मूल्य ₹12.50 प्रति मीटर है, तो कुल खर्च = $8 \\times 12.50 = \\mathbf{\\text{₹}100.00}$ होगा।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Perimeter, Area & Decimal Place Values",
        headingHi: "2. सूत्र एवं नियम संग्रह: परिमाप, क्षेत्रफल एवं दाशमिक स्थानीय मान",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Perimeter & Decimals</div>
            <ul>
              <li><strong>Perimeter of Rectangle:</strong> $P = 2(l + w)$</li>
              <li><strong>Area of Rectangle:</strong> $A = l \\times w$</li>
              <li><strong>Tenth (दशांश):</strong> $\\frac{1}{10} = 0.1$. Example: $1 \\text{ mm} = 0.1 \\text{ cm}$.</li>
              <li><strong>Hundredth (शतांश):</strong> $\\frac{1}{100} = 0.01$. Example: $1 \\text{ Paisa} = \\text{₹}0.01$.</li>
              <li><strong>Thousandth (सहस्रांश):</strong> $\\frac{1}{1000} = 0.001$. Example: $1 \\text{ g} = 0.001 \\text{ kg}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: परिमाप व दाशमिक मान सूत्र</div>
            <ul>
              <li><strong>आयत का परिमाप:</strong> $P = 2(\\text{लंबाई} + \\text{चौड़ाई})$</li>
              <li><strong>आयत का क्षेत्रफल:</strong> $A = \\text{लंबाई} \\times \\text{चौड़ाई}$</li>
              <li><strong>दशांश (Tenth):</strong> $\\frac{1}{10} = 0.1$। जैसे: 1 मिमी = 0.1 सेमी।</li>
              <li><strong>शतांश (Hundredth):</strong> $\\frac{1}{100} = 0.01$। जैसे: 1 पैसा = ₹0.01 (₹1 में 100 पैसे होते हैं)।</li>
              <li><strong>सहस्रांश (Thousandth):</strong> $\\frac{1}{1000} = 0.001$। जैसे: 1 ग्राम = 0.001 किग्रा।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Same Perimeter, Wildly Different Areas",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: समान परिमाप होने पर भी क्षेत्रफल अलग होना",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Counter-Intuitive Area-Perimeter Independence</div>
            <p>Consider two quilts, both having a border lace (Perimeter) of <strong>20 meters</strong>:</p>
            <ul>
              <li><strong>Quilt A (Square):</strong> Side = 5 m. $\\text{Area} = 5 \\times 5 = \\mathbf{25 \\text{ m}^2}$.</li>
              <li><strong>Quilt B (Long Rectangle):</strong> Length = 9 m, Width = 1 m. $\\text{Area} = 9 \\times 1 = \\mathbf{9 \\text{ m}^2}$.</li>
            </ul>
            <p><strong>Crucial Exam Takeaway:</strong> For a fixed perimeter, a <strong>Square always encloses the maximum area</strong>! Never assume equal perimeter means equal area!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परिमाप व क्षेत्रफल की स्वतंत्रता का प्रतियोगी नियम</div>
            <p>दो रजाइयों पर विचार करें, दोनों का परिमाप (गोटा) ठीक <strong>20 मीटर</strong> है:</p>
            <ul>
              <li><strong>रजाई A (वर्गाकार):</strong> भुजा = 5 मी। $\\text{क्षेत्रफल} = 5 \\times 5 = \\mathbf{25\\text{ वर्ग मीटर}}$।</li>
              <li><strong>रजाई B (लंबी आयताकार):</strong> लंबाई = 9 मी, चौड़ाई = 1 मी। $\\text{क्षेत्रफल} = 9 \\times 1 = \\mathbf{9\\text{ वर्ग मीटर}}$।</li>
            </ul>
            <p><strong>परीक्षा गुरुमंत्र:</strong> परिमाप समान होने पर <strong>वर्ग का क्षेत्रफल हमेशा अधिकतम होता है</strong>! CTET में यह अवधारणा बार-बार पूछी जाती है!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch12",
    title: "Chapter 12: Racing Seconds (Time Measurements & Elapsed Time)",
    titleHi: "अध्याय 12: दौड़ते सेकंड (Racing Seconds: समय मापन व बीता हुआ समय)",
    desc: "NCERT yoga stopwatch timings (01:56), converting minutes to seconds, sexagesimal (base-60) arithmetic, and elapsed time calculation.",
    descHi: "योग स्टॉपवॉच समय मापन (01:56), मिनट से सेकंड रूपांतरण, 60-आधारित समय संक्रियाएं और बीता हुआ समय ज्ञात करना।",
    competitionEdge: "Base-60 borrowing and carrying in time addition/subtraction, leap year rules (century years divisible by 400), and day-finding calendar tricks.",
    competitionEdgeHi: "समय के जोड़-घटाव में 60 के आधार पर हासिल लेना, लीप वर्ष का नियम (शताब्दी वर्ष 400 से विभाज्य) और कैलेंडर में दिन निकालने की ट्रिक।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Raghav's Morning Yoga & The Stopwatch",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: राघव का सुबह का योग और स्टॉपवॉच पठन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Aspirants, time is a unique mathematical domain because unlike metric systems that work on base 10, time operates on the ancient Babylonian <strong>Sexagesimal (Base 60)</strong> system! When borrowing 1 in time subtraction, you borrow 60, not 10!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Stopwatch Activity</div>
            <p>Raghav practices yoga poses: Vrikshasana for 1 min 56 sec, and Bhujangasana for 2 min 25 sec. What is his total yoga time?</p>
            <p><strong>Addition:</strong> 56 sec + 25 sec = 81 sec = 1 min 21 sec. Total time = 1 + 2 + 1 min 21 sec = <strong>4 min 21 sec</strong>.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! समय अंकगणित का एक अनूठा हिस्सा है क्योंकि मीट्रिक प्रणाली की तरह 10 के आधार पर काम करने के बजाय, समय <strong>60 के आधार (Base 60)</strong> पर चलता है! अतः समय घटाते समय हासिल 10 नहीं, बल्कि पूरा 60 मिलता है!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT स्टॉपवॉच गतिविधि: योग का समय</div>
            <p>राघव योगाभ्यास करता है: वृक्षासन 1 मिनट 56 सेकंड, और भुजंगासन 2 मिनट 25 सेकंड। कुल समय क्या होगा?</p>
            <p><strong>जोड़:</strong> 56 सेकंड + 25 सेकंड = 81 सेकंड = 1 मिनट 21 सेकंड। कुल समय = 1 + 2 + 1 मिनट 21 सेकंड = <strong>4 मिनट 21 सेकंड</strong>।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Sexagesimal Conversion & Calendar Rules",
        headingHi: "2. सूत्र एवं नियम संग्रह: षट्दशमलव समय रूपांतरण एवं कैलेंडर नियम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Time Units & Leap Years</div>
            <ul>
              <li>$1 \\text{ Day} = 24 \\text{ Hours} = 1,440 \\text{ Minutes} = 86,400 \\text{ Seconds}$</li>
              <li>$1 \\text{ Hour} = 60 \\text{ Minutes} = 3,600 \\text{ Seconds}$</li>
              <li><strong>Leap Year Rule:</strong> A normal year is a leap year if divisible by 4. However, a <strong>Century Year</strong> (ending in 00) is a leap year ONLY if divisible by <strong>400</strong>! (e.g. 2000 was a leap year, but 1900 was NOT!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: समय मात्रक एवं लीप वर्ष का नियम</div>
            <ul>
              <li>$1 \\text{ दिन} = 24 \\text{ घंटे} = 1,440 \\text{ मिनट} = 86,400 \\text{ सेकंड}$</li>
              <li>$1 \\text{ घंटा} = 60 \\text{ मिनट} = 3,600 \\text{ सेकंड}$</li>
              <li><strong>लीप वर्ष का नियम:</strong> सामान्य वर्ष 4 से विभाज्य होने पर लीप वर्ष होता है। परंतु <strong>शताब्दी वर्ष (Century Year)</strong> केवल तभी लीप वर्ष होता है जब वह <strong>400 से विभाज्य</strong> हो! (उदा. वर्ष 2000 लीप वर्ष था, लेकिन वर्ष 1900 लीप वर्ष नहीं था!)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Base-60 Subtraction Errors",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: समय घटाव में हासिल लेने की भयंकर भूल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Base-10 vs Base-60 Subtraction Trap</div>
            <p>Subtract 3 hours 45 minutes from 5 hours 20 minutes.</p>
            <p><strong>The Trap:</strong> Candidates borrow 1 hour and write 20 as 120 or add 10 to get 30! <strong>WRONG!</strong></p>
            <p><strong>Teacher's Correct Method:</strong> Borrowing 1 hour gives <strong>60 minutes</strong>. The 20 minutes becomes $20 + 60 = 80$ minutes! Then: $80 - 45 = 35$ minutes, and $4 - 3 = 1$ hour. Answer: <strong>1 hour 35 minutes</strong>!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ समय घटाव में 10 बनाम 60 का घातक भ्रम</div>
            <p>5 घंटे 20 मिनट में से 3 घंटे 45 मिनट घटाइए।</p>
            <p><strong>आम भूल:</strong> छात्र 5 घंटे से 1 घंटा उधार लेते हैं और 20 मिनट को 30 या 120 समझ लेते हैं! <strong>यह गलत है!</strong></p>
            <p><strong>शिक्षक का सही तरीका:</strong> 1 घंटा उधार लेने पर <strong>60 मिनट</strong> मिलते हैं। 20 मिनट बढ़कर $20 + 60 = 80$ मिनट हो जाएंगे! अब: $80 - 45 = 35$ मिनट और $4 - 3 = 1$ घंटा। सही उत्तर: <strong>1 घंटा 35 मिनट</strong>!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch13",
    title: "Chapter 13: Animal Jumps (Multiples, Factors, LCM & HCF)",
    titleHi: "अध्याय 13: जानवरों की छलांग (गुणज, गुणनखंड, ल.स. LCM व म.स. HCF)",
    desc: "NCERT frog and rabbit jumps on the number line, common landing spots (multiples), LCM and HCF definitions, and simultaneous tolling bell word problems.",
    descHi: "संख्या रेखा पर मेंढक व खरगोश की छलांगें, उभयनिष्ठ पड़ाव (सार्व गुणज), ल.स. (LCM) व म.स. (HCF) और एक साथ बजने वाली घंटियों के सवाल।",
    competitionEdge: "LCM × HCF = Product of two numbers formula, prime factorization algorithm, and simultaneous recurring events (bells, traffic lights, circular tracks).",
    competitionEdgeHi: "ल.स. × म.स. = दोनों संख्याओं का गुणनफल सूत्र, अभाज्य गुणनखंडन और एक साथ बजने वाली घंटियों व ट्रैफिक बत्तियों के सवाल।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Animal Jumps on the Number Line",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: संख्या रेखा पर मेंढक और खरगोश की छलांग",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 13 introduces LCM (Least Common Multiple) not through dry definitions, but through animals jumping along a numbered path. A frog jumps 3 steps at a time, while a rabbit jumps 5 steps. Where will they both land on the same number?
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Activity: Meeting Points on the Number Line</div>
            <ul>
              <li><strong>Frog's Landings (Multiples of 3):</strong> 3, 6, 9, 12, <strong>15</strong>, 18, 21, 24, 27, <strong>30</strong>, 33...</li>
              <li><strong>Rabbit's Landings (Multiples of 5):</strong> 5, 10, <strong>15</strong>, 20, 25, <strong>30</strong>, 35...</li>
              <li><strong>Common Meeting Points (Common Multiples):</strong> 15, 30, 45, 60...</li>
              <li><strong>First Common Landing = LCM:</strong> <strong>15</strong>!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 13 ल.स. (लघुत्तम समापवर्त्य) को किसी नीरस परिभाषा से नहीं, बल्कि संख्या रेखा पर मेंढक और खरगोश की छलांगों से समझाता है। मेंढक 3-3 कदम कूदता है और खरगोश 5-5 कदम। वे दोनों पहली बार किस संख्या पर एक साथ मिलेंगे?
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT गतिविधि: संख्या रेखा पर मिलन बिंदु</div>
            <ul>
              <li><strong>मेंढक के पड़ाव (3 के गुणज):</strong> 3, 6, 9, 12, <strong>15</strong>, 18, 21, 24, 27, <strong>30</strong>...</li>
              <li><strong>खरगोश के पड़ाव (5 के गुणज):</strong> 5, 10, <strong>15</strong>, 20, 25, <strong>30</strong>...</li>
              <li><strong>उभयनिष्ठ मिलन बिंदु (सार्व गुणज):</strong> 15, 30, 45, 60...</li>
              <li><strong>सबसे पहला साझा बिंदु = ल.स. (LCM):</strong> <strong>15</strong>!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: LCM & HCF Master Relationship",
        headingHi: "2. सूत्र एवं नियम संग्रह: ल.स. (LCM) एवं म.स. (HCF) का अमर संबंध",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Product of Two Numbers</div>
            <p style="font-size:1.15rem; font-weight:800; color:#b45309; text-align:center;">
              $$\\mathbf{\\text{LCM}(a, b) \\times \\text{HCF}(a, b) = a \\times b}$$
            </p>
            <p><strong>Note:</strong> This exact formula holds strictly for TWO numbers (does not apply directly to 3 numbers without adjustment!).</p>
            <p><strong>Co-prime Rule:</strong> If two numbers are co-prime ($\\text{HCF} = 1$), their $\\text{LCM} = a \\times b$.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: ल.स. और म.स. का अमर सूत्र</div>
            <p style="font-size:1.15rem; font-weight:800; color:#b45309; text-align:center;">
              $$\\mathbf{\\text{ल.स.} (LCM) \\times \\text{म.स.} (HCF) = \\text{पहली संख्या} \\times \\text{दूसरी संख्या}}$$
            </p>
            <p><strong>विशेष ध्यान:</strong> यह सूत्र केवल दो संख्याओं के लिए सत्य है!</p>
            <p><strong>सह-अभाज्य नियम:</strong> यदि दो संख्याएं सह-अभाज्य (Co-prime) हों (म.स. = 1), तो उनका ल.स. सीधे उनके गुणनफल के बराबर होता है!</p>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Bells Tolling Together Word Problems",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: घंटियों का एक साथ बजना (Classic Exam Problem)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Bells Tolling Problem in CTET & SSC</div>
            <p>Three bells toll at intervals of 12, 15, and 18 minutes. If they toll together at 8:00 AM, when will they toll together next?</p>
            <p><strong>Solution:</strong> Find $\\text{LCM}(12, 15, 18)$:</p>
            <ul>
              <li>$12 = 2^2 \\times 3$, $15 = 3 \\times 5$, $18 = 2 \\times 3^2$.</li>
              <li>$\\text{LCM} = 2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = \\mathbf{180 \\text{ minutes}} = \\mathbf{3 \\text{ hours}}$.</li>
              <li>Next tolling time: 8:00 AM + 3 hours = <strong>11:00 AM</strong>!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ शिक्षक भर्ती व SSC का निश्चित प्रश्न: घंटियों का एक साथ बजना</div>
            <p>तीन घंटियां क्रमशः 12, 15 और 18 मिनट के अंतराल पर बजती हैं। यदि वे सुबह 8:00 बजे एक साथ बजी हों, तो पुनः एक साथ कब बजेंगी?</p>
            <p><strong>समाधान:</strong> 12, 15, 18 का ल.स. (LCM) ज्ञात करें:</p>
            <ul>
              <li>$12 = 2^2 \\times 3$, $15 = 3 \\times 5$, $18 = 2 \\times 3^2$।</li>
              <li>ल.स. $= 2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = \\mathbf{180\\text{ मिनट}} = \\mathbf{3\\text{ घंटे}}$।</li>
              <li>अगली बार एक साथ बजने का समय: 8:00 AM + 3 घंटे = <strong>सुबह 11:00 बजे</strong>!</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch14",
    title: "Chapter 14: Maps and Locations (Map Scales & Directions)",
    titleHi: "अध्याय 14: मानचित्र और दिशाएं (Maps and Locations: पैमाना व ग्रिड)",
    desc: "NCERT Bharatpur sanctuary map, cardinal directions (N, S, E, W), map scale conversions (1 cm = 100 m / 50 km), and grid coordinates.",
    descHi: "भरतपुर अभयारण्य नक्शा, प्रमुख दिशाएं (उत्तर, दक्षिण, पूर्व, पश्चिम), पैमाना रूपांतरण (1 सेमी = 100 मी / 50 किमी) और ग्रिड निर्देशांक।",
    competitionEdge: "Map scale ratio calculation, direction sense turns (clockwise 90° = Right, counter-clockwise 90° = Left), and Pythagoras theorem in displacement.",
    competitionEdgeHi: "मानचित्र पैमाना अनुपात गणना, दिशा-परीक्षण में दाएं-बाएं मुड़ने के नियम और विस्थापन में पाइथागोरस प्रमेय का अनुप्रयोग।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Bharatpur Sanctuary Map & Direction Rose",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: भरतपुर पक्षी अभयारण्य का नक्शा व दिशा-चक्र",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Aspirants, map reading bridges geography with mathematics! A map without a scale is just a cartoon, but with a scale, it becomes a precise mathematical tool. NCERT uses a trip to Bharatpur Bird Sanctuary to introduce cardinal directions and scale interpretation.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Map Reading Rules</div>
            <ul>
              <li><strong>Top of Map:</strong> Always points to <strong>North (N)</strong>.</li>
              <li><strong>Bottom:</strong> South (S). <strong>Right:</strong> East (E). <strong>Left:</strong> West (W).</li>
              <li><strong>Scale Meaning:</strong> If the scale states <code>1 cm = 50 km</code>, a 4 cm line on paper represents $4 \\times 50 = \\mathbf{200 \\text{ km}}$ on actual ground!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! मानचित्र अध्ययन भूगोल और गणित का संगम है। बिना पैमाने का नक्शा सिर्फ एक चित्र होता है, लेकिन पैमाने के साथ वह एक सटीक गणितीय उपकरण बन जाता है। NCERT भरतपुर पक्षी अभयारण्य के नक्शे से दिशाओं और पैमाने का महत्व समझाती है।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT नक्शा पठन नियम</div>
            <ul>
              <li><strong>मानचित्र का शीर्ष (Top):</strong> सदैव <strong>उत्तर (North)</strong> दिशा दर्शाता है।</li>
              <li><strong>निचला भाग:</strong> दक्षिण (South)। <strong>दायां हाथ:</strong> पूर्व (East)। <strong>बायां हाथ:</strong> पश्चिम (West)।</li>
              <li><strong>पैमाने (Scale) का अर्थ:</strong> यदि नक्शे पर पैमाना <code>1 सेमी = 50 किमी</code> है, तो नक्शे पर 4 सेमी की दूरी जमीन पर $4 \\times 50 = \\mathbf{200\\text{ किमी}}$ होगी!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Scale Ratio & Pythagoras Displacement",
        headingHi: "2. सूत्र एवं नियम संग्रह: पैमाना अनुपात एवं पाइथागोरस विस्थापन सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Distance & Scale</div>
            <ul>
              <li>$$\\text{Actual Ground Distance} = \\text{Map Distance} \\times \\text{Scale Factor}$$</li>
              <li><strong>Representative Fraction (RF):</strong> $1 \\text{ cm to } 100 \\text{ m} = 1 : (100 \\times 100) = 1 : 10,000$.</li>
              <li><strong>Pythagoras Shortest Distance (Displacement):</strong> If a traveler walks 3 km North then 4 km East:<br/>
                $$\\text{Displacement} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = \\mathbf{5 \\text{ km (North-East)}}!$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: पैमाना एवं न्यूनतम विस्थापन सूत्र</div>
            <ul>
              <li>$$\\text{वास्तविक जमीनी दूरी} = \\text{नक्शे की दूरी} \\times \\text{पैमाना}$$</li>
              <li><strong>निरूपक भिन्न (RF):</strong> 1 सेमी = 100 मीटर का अनुपात $= 1 : (100 \\times 100) = 1 : 10,000$।</li>
              <li><strong>पाइथागोरस न्यूनतम विस्थापन:</strong> यदि कोई व्यक्ति 3 किमी उत्तर और फिर 4 किमी पूर्व चलता है:<br/>
                $$\\text{न्यूनतम दूरी} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = \\mathbf{5\\text{ किमी (उत्तर-पूर्व)}}!$$
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Direction Sense Turns in Competitive Reasoning",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: दिशा-परीक्षण में बाएं-दाएं मुड़ने का नियम",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Right vs Left Turn Clock Rules</div>
            <ul>
              <li><strong>Turning Right:</strong> Always a <strong>90&deg; Clockwise</strong> rotation.</li>
              <li><strong>Turning Left:</strong> Always a <strong>90&deg; Counter-Clockwise (Anticlockwise)</strong> rotation.</li>
              <li>If facing South, turning Right points to <strong>West</strong> (NOT East!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ दिशा-परीक्षण में दाएं और बाएं मुड़ने का नियम</div>
            <ul>
              <li><strong>दाएं मुड़ना (Right Turn):</strong> हमेशा <strong>90&deg; दक्षिणावर्त (Clockwise / घड़ी की दिशा में)</strong>।</li>
              <li><strong>बाएं मुड़ना (Left Turn):</strong> हमेशा <strong>90&deg; वामावर्त (Anticlockwise / घड़ी के विपरीत)</strong>।</li>
              <li>यदि आप दक्षिण (South) की ओर मुंह करके खड़े हैं, तो दाएं मुड़ने पर आपका मुंह <strong>पश्चिम (West)</strong> की ओर होगा (पूर्व नहीं!)।</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch15",
    title: "Chapter 15: Data Through Pictures (Pictographs & Bar Graphs)",
    titleHi: "अध्याय 15: चित्रों द्वारा आंकड़े (Data Interpretation: चित्रालेख व बार ग्राफ)",
    desc: "NCERT child TV reporter survey (35 friends), tally marks grouping by 5s, pictograph scaling, and reading bar charts.",
    descHi: "बाल टीवी रिपोर्टर सर्वेक्षण (35 मित्र), 5-5 के समूह में मिलान चिह्न (Tally marks), चित्रालेख पैमाना और दंड आलेख (Bar Graph) पठन।",
    competitionEdge: "Interpreting pictograph scaling factors, calculating mean, mode, range from raw frequency tables, and bar graph data interpretation.",
    competitionEdgeHi: "चित्रालेख पैमाना गुणांक, बारंबारता सारणी से माध्य (Mean), बहुलक (Mode) व परास (Range) की गणना और बार ग्राफ विश्लेषण।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Child TV Reporter Survey & Tally Marks",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: बाल टीवी रिपोर्टर सर्वेक्षण एवं मिलान चिह्न",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Data Handling is tested in every modern exam under 'Data Interpretation' (DI). NCERT introduces Samaira and Kabir, who acted as TV reporters and interviewed 35 friends about how many hours they watch TV daily. To organize raw messy answers, they use <strong>Tally Marks (मिलान चिह्न)</strong>!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Tally Mark Rules</div>
            <p>Tally marks are grouped in bundles of 5 for rapid human counting:</p>
            <ul>
              <li>1 = <code>|</code>, 2 = <code>||</code>, 3 = <code>|||</code>, 4 = <code>||||</code></li>
              <li>5 = Four vertical strokes crossed diagonally by the fifth: <code><s>||||</s></code>.</li>
              <li>A count of 18 is written as: <code><s>||||</s> <s>||||</s> <s>||||</s> |||</code> (3 bundles of 5 + 3 singles).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! सांख्यिकी और डेटा इंटरप्रिटेशन (DI) का आधार यहीं से शुरू होता है। समाइरा और कबीर ने 35 मित्रों का सर्वेक्षण किया कि वे प्रतिदिन कितने घंटे टीवी देखते हैं। बिखरे हुए आंकड़ों को व्यवस्थित करने के लिए उन्होंने <strong>मिलान चिह्नों (Tally Marks)</strong> का प्रयोग किया!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT मिलान चिह्न (Tally Mark) नियम</div>
            <p>मिलान चिह्नों को 5-5 के बंडल में समूहीकृत किया जाता है ताकि गिनती अत्यंत तीव्र हो सके:</p>
            <ul>
              <li>1 = <code>|</code>, 2 = <code>||</code>, 3 = <code>|||</code>, 4 = <code>||||</code></li>
              <li>5 = चार सीधी रेखाएं और पांचवीं तिरछी रेखा: <code><s>||||</s></code>।</li>
              <li>18 की संख्या को लिखेंगे: <code><s>||||</s> <s>||||</s> <s>||||</s> |||</code> (5 के 3 बंडल + 3 खुली रेखाएं)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Mean, Mode, Range & Pictograph Scale Factor",
        headingHi: "2. सूत्र एवं नियम संग्रह: माध्य, बहुलक, परास एवं चित्रालेख पैमाना सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Basic Statistics</div>
            <ul>
              <li>$$\\text{Mean (माध्य / औसत)} = \\frac{\\text{Sum of all observations}}{\\text{Total number of observations}} = \\frac{\\sum x}{N}$$</li>
              <li><strong>Mode (बहुलक):</strong> The observation that appears with the <em>highest frequency</em>.</li>
              <li>$$\\text{Range (परास / परिसर)} = \\text{Maximum Value} - \\text{Minimum Value}$$</li>
              <li><strong>Pictograph Scaling:</strong> If 1 symbol &#128522; = 10 students, then 4.5 symbols = $4.5 \\times 10 = \\mathbf{45 \\text{ students}}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: सांख्यिकी के मूल सूत्र</div>
            <ul>
              <li>$$\\text{माध्य (Mean / औसत)} = \\frac{\\text{सभी प्रेक्षणों का कुल योग}}{\\text{प्रेक्षणों की कुल संख्या}} = \\frac{\\sum x}{N}$$</li>
              <li><strong>बहुलक (Mode):</strong> वह मान जो आंकड़ों में <em>सबसे अधिक बार (उच्चतम बारंबारता)</em> आता है।</li>
              <li>$$\\text{परास / परिसर (Range)} = \\text{अधिकतम मान} - \\text{न्यूनतम मान}$$</li>
              <li><strong>चित्रालेख पैमाना:</strong> यदि 1 प्रतीक &#128522; = 10 विद्यार्थी दर्शाता है, तो 4.5 प्रतीक $= 4.5 \\times 10 = \\mathbf{45\\text{ विद्यार्थी}}$ दर्शाएंगे।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Scale Confusion in Pictographs",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: चित्रालेख पैमाने को न पढ़ने की सबसे बड़ी भूल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Pictograph Scale Ignorance Trap</div>
            <p><strong>The Mistake:</strong> In CTET, a pictograph question displays 6 book icons. Hurried candidates choose '6' as the answer without checking the key at the bottom which states: <em>Key: 1 Book Icon = 50 Books!</em></p>
            <p><strong>Correct Answer:</strong> $6 \\times 50 = \\mathbf{300 \\text{ books}}$! Always inspect the chart's legend first!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ चित्रालेख का पैमाना न देखने की सबसे बड़ी भूल</div>
            <p><strong>परीक्षार्थी की गलती:</strong> CTET में चित्रालेख में 6 पुस्तकें बनी देखकर कई परीक्षार्थी सीधे विकल्प '6' चुन लेते हैं, बिना नीचे दिए पैमाने को देखे जहाँ लिखा होता है: <em>पैमाना: 1 पुस्तक प्रतीक = 50 पुस्तकें!</em></p>
            <p><strong>सही उत्तर:</strong> $6 \\times 50 = \\mathbf{300\\text{ पुस्तकें}}$! प्रश्न देखते ही सबसे पहले पैमाना (Key/Legend) पढ़ें!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-evs-ch1",
    title: "EVS Chapter: Super Senses of Animals & Adaptation",
    titleHi: "पर्यावरण अध्ययन: जानवरों की अद्भुत इंद्रियां (Super Senses of Animals)",
    desc: "NCERT Looking Around Chapter 1: Senses of smell (ants, silk moth, dogs), vision (eagles, vultures, myna, owl), vibrations in snakes, sleep durations, and Jim Corbett / Kaziranga national parks.",
    descHi: "एनसीईआरटी 'आस-पास' अध्याय 1: सूंघने की क्षमता (चींटी, रेशम का कीड़ा, कुत्ता), दृष्टि (चील, बाज, मैना, उल्लू), सांप में कंपन, जानवरों के सोने की अवधि और राष्ट्रीय उद्यान।",
    competitionEdge: "High-yield CTET EVS facts: Myna jerks neck, Owl rotates neck 270°, birds see 4 times farther, sloth sleeps 17 hours upside down, and national parks geography.",
    competitionEdgeHi: "CTET पर्यावरण के अचूक तथ्य: मैना का झटके से गर्दन हिलाना, उल्लू की 270° गर्दन घूमना, चील-बाज की 4 गुना दूर दृष्टि, स्लॉथ का 17 घंटे उल्टा सोना और राष्ट्रीय उद्यान।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: The Extraordinary Animal Senses",
        headingHi: "1. एनसीईआरटी मूल पाठ: जानवरों की अद्भुत संवेदी शक्तियां",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, NCERT EVS Chapter 1 'Super Senses' contributes 2 to 3 direct questions in every single CTET Paper 1 and BPSC Primary Teacher Exam! From the way ants walk in a straight line to why owls can see at night, every line in this chapter is an exam goldmine.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Animal Senses Breakdown</div>
            <ul>
              <li><strong>Ants & Pheromones:</strong> As ants march, they leave a distinct chemical scent (pheromone) on the ground so following ants can track the path. When a guard ant recognizes an incoming ant, it identifies its scent.</li>
              <li><strong>Silk Moth:</strong> Male silkworm moth can locate the female moth from several kilometers away by her unique scent!</li>
              <li><strong>Birds' Vision:</strong> Birds of prey like <strong>Kites, Eagles, and Vultures</strong> can see <strong>4 times farther than humans</strong> (What we see from 2 meters, they see from 8 meters!).</li>
              <li><strong>Eye Positions:</strong> Most birds have eyes on opposite sides of their head, allowing them to focus on two distinct targets simultaneously. To focus on one object, both eyes must look ahead together.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय शिक्षक भर्ती प्रतियोगियों! NCERT पर्यावरण अध्ययन (EVS) का अध्याय 1 'अद्भुत इंद्रियां' हर CTET Paper 1 और BPSC प्राथमिक शिक्षक परीक्षा में 2 से 3 प्रश्न सीधे देता है! चींटियों की कतार से लेकर उल्लू की गर्दन तक, इस अध्याय की प्रत्येक पंक्ति परीक्षा के लिए अमूल्य है।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT पशु इंद्रियों का सार</div>
            <ul>
              <li><strong>चींटियां और फेरोमोन:</strong> चींटियां चलते समय जमीन पर एक विशेष गंध (फेरोमोन) छोड़ती हैं, जिससे पीछे आने वाली चींटियां रास्ता खोज लेती हैं। पहरेदार चींटी दूसरी चींटी को उसकी गंध से पहचानती है।</li>
              <li><strong>रेशम का कीड़ा (Silk Moth):</strong> नर रेशम का कीड़ा अपनी मादा को उसकी गंध से कई किलोमीटर दूर से पहचान लेता है!</li>
              <li><strong>पक्षियों की तीक्ष्ण दृष्टि:</strong> <strong>चील, बाज और गिद्ध</strong> हमसे <strong>4 गुना अधिक दूरी</strong> तक देख सकते हैं (जो चीज हम 2 मीटर से देखते हैं, वे 8 मीटर दूर से देख लेते हैं!)।</li>
              <li><strong>पक्षियों की आंखें:</strong> अधिकांश पक्षियों की आंखें उनके सिर के दोनों तरफ होती हैं, जिससे वे एक ही समय में दो अलग-अलग वस्तुओं पर नजर रख सकते हैं। जब वे सीधे सामने देखते हैं, तब दोनों आंखें एक ही वस्तु पर केंद्रित होती हैं।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Animal Sleep Cycles & Senses Summary Table",
        headingHi: "2. सूत्र एवं नियम संग्रह: पशुओं के सोने का समय एवं संवेदी सारणी",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Fact Table: Animal Sleeping Durations</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>Animal</th><th>Daily Sleep Duration</th><th>Unique NCERT Behavioral Trait</th></tr>
              </thead>
              <tbody>
                <tr><td>Sloth (स्लॉथ)</td><td><strong>17 Hours</strong></td><td>Hangs upside down on tree branches; lives ~40 years; changes trees only ~8 times in life!</td></tr>
                <tr><td>Python (अजगर)</td><td><strong>18 Hours</strong></td><td>Coils and sleeps deeply for three-quarters of the day.</td></tr>
                <tr><td>Cow (गाय)</td><td><strong>4 Hours</strong></td><td>Short sleep cycles while ruminating.</td></tr>
                <tr><td>Giraffe (जिराफ)</td><td><strong>2 Hours</strong></td><td>Shortest sleep among large land mammals.</td></tr>
                <tr><td>Cat (बिल्ली)</td><td><strong>12 Hours</strong></td><td>Multiple short daytime naps.</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: पशुओं की निद्रा अवधि एवं व्यवहार सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>जानवर</th><th>दैनिक सोने की अवधि</th><th>NCERT का विशिष्ट व्यवहारिक तथ्य</th></tr>
              </thead>
              <tbody>
                <tr><td>स्लॉथ (Sloth)</td><td><strong>17 घंटे</strong></td><td>पेड़ की डाल पर उल्टा लटककर सोता है; आयु लगभग 40 वर्ष; जीवन में केवल 8 पेड़ बदलता है!</td></tr>
                <tr><td>अजगर (Python)</td><td><strong>18 घंटे</strong></td><td>दिन के तीन-चौथाई हिस्से में गहरी नींद में रहता है।</td></tr>
                <tr><td>गाय (Cow)</td><td><strong>4 घंटे</strong></td><td>जुगाली करते हुए संक्षिप्त नींद लेती है।</td></tr>
                <tr><td>जिराफ (Giraffe)</td><td><strong>2 घंटे</strong></td><td>बड़े स्तनधारियों में सबसे कम नींद लेता है।</td></tr>
                <tr><td>बिल्ली (Cat)</td><td><strong>12 घंटे</strong></td><td>दिन में कई बार छोटी-छोटी झपकियां लेती है।</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Myna vs Owl & Snake Vibrations",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: मैना बनाम उल्लू और सांप के कान का सच",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Most Repeated CTET Neck Question: Myna vs. Owl</div>
            <ul>
              <li><strong>Question A:</strong> Which bird moves its neck backward and forward with a <em>jerk (झटके से)</em>? &rarr; <strong>Myna (मैना)</strong>!</li>
              <li><strong>Question B:</strong> Which bird can rotate its neck backward to a large extent (up to ~270&deg;)? &rarr; <strong>Owl (उल्लू)</strong>!</li>
              <li><strong>Do Snakes Have External Ears?</strong> NO! Snakes have no external ear openings. They only feel <strong>vibrations on the ground</strong>!</li>
              <li><strong>Protected Parks in NCERT:</strong> <strong>Jim Corbett National Park</strong> (Uttarakhand) and <strong>Ghana Bird Sanctuary</strong> (Bharatpur, Rajasthan).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ CTET का सबसे लोकप्रिय प्रश्न: मैना बनाम उल्लू की गर्दन</div>
            <ul>
              <li><strong>प्रश्न 1:</strong> कौन-सा पक्षी अपनी गर्दन को <em>झटके से (with a jerk)</em> आगे-पीछे करता है? &rarr; <strong>मैना (Myna)</strong>!</li>
              <li><strong>प्रश्न 2:</strong> कौन-सा पक्षी अपनी गर्दन काफी हद तक पीछे (लगभग 270&deg; तक) घुमा सकता है? &rarr; <strong>उल्लू (Owl)</strong>!</li>
              <li><strong>क्या सांप के बाहरी कान होते हैं?</strong> नहीं! सांप के बाहरी कान नहीं होते, वह जमीन पर होने वाले <strong>कंपन (Vibrations)</strong> को महसूस करता है!</li>
              <li><strong>NCERT में वर्णित अभयारण्य:</strong> <strong>जिम कॉर्बेट नेशनल पार्क</strong> (उत्तराखंड) और <strong>घाना पक्षी विहार</strong> (भरतपुर, राजस्थान)।</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-hindi-ch1",
    title: "Hindi Chapter 1: भाषा, लिपि, व्याकरण व मानक वर्तनी (भाषा विचार)",
    titleHi: "हिंदी व्याकरण: भाषा, लिपि, व्याकरण व मानक वर्तनी (Rimjhim Foundation)",
    desc: "NCERT Rimjhim Hindi Grammar: Forms of language (oral, written, symbolic), scripts (Devanagari, Gurmukhi, Roman), vowels/consonants classification, and Panchamakshar standard spelling rules.",
    descHi: "रिमझिम हिंदी व्याकरण: भाषा के रूप (मौखिक, लिखित, सांकेतिक), लिपियां (देवनागरी, गुरुमुखी, रोमन), स्वर व व्यंजन का वैज्ञानिक वर्गीकरण और पंचमाक्षर मानक वर्तनी के नियम।",
    competitionEdge: "Panchamakshar anusvara replacement rule (ङ्, ञ्, ण्, न्, म्), forms of 'र' (Ref vs Paden), Devanagari script origin (Brahmi), and BPSC TRE Hindi qualifying paper mastery.",
    competitionEdgeHi: "पंचमाक्षर अनुस्वार नियम (ङ्, ञ्, ण्, न्, म्), 'र' के विभिन्न रूप (रेफ व पदेन), देवनागरी की मूल लिपि (ब्राह्मी) और BPSC शिक्षक भर्ती हिंदी भाषा पेपर में सफलता।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Origin of Language & Devanagari Script",
        headingHi: "1. एनसीईआरटी मूल पाठ: भाषा का स्वरूप, लिपियां और देवनागरी का उद्भव",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, in BPSC TRE (Language Qualifying Paper) and CTET Hindi pedagogy, the scientific foundation of the Hindi language is tested rigorously. Language is the medium of communicating thoughts, and <strong>Script (लिपि)</strong> is the visual written code of spoken sounds.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Linguistic Classifications</div>
            <ul>
              <li><strong>Forms of Language:</strong> 1. Oral (मौखिक - spoken/heard), 2. Written (लिखित - permanent/standard), 3. Symbolic (सांकेतिक - traffic lights, gestures).</li>
              <li><strong>Major Languages & Scripts:</strong>
                <ul>
                  <li>Hindi, Sanskrit, Marathi, Nepali &rarr; <strong>Devanagari Script (देवनागरी)</strong> (Written left to right, derived from Brahmi script).</li>
                  <li>Punjabi &rarr; <strong>Gurmukhi Script (गुरुमुखी)</strong>.</li>
                  <li>English, French, German &rarr; <strong>Roman Script</strong>.</li>
                  <li>Urdu &rarr; <strong>Persian / Nastaliq Script (फ़ारसी)</strong> (Written right to left).</li>
                </ul>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय शिक्षक भर्ती प्रतियोगियों! BPSC TRE (भाषा अहर्ता परीक्षा) और CTET हिंदी में भाषा का वैज्ञानिक स्वरूप अत्यंत महत्वपूर्ण है। भाषा भावों और विचारों के आदान-प्रदान का साधन है, और ध्वनियों को लिखकर प्रकट करने के लिए निर्धारित चिह्नों को <strong>लिपि (Script)</strong> कहते हैं।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT भाषा व लिपि वर्गीकरण</div>
            <ul>
              <li><strong>भाषा के तीन रूप:</strong> 1. मौखिक (बोलना व सुनना), 2. लिखित (स्थायी व प्रामाणिक), 3. सांकेतिक (यातायात के संकेत, मूक-बधिर संवाद)।</li>
              <li><strong>प्रमुख भाषाएं और उनकी लिपियां:</strong>
                <ul>
                  <li>हिंदी, संस्कृत, मराठी, नेपाली &rarr; <strong>देवनागरी लिपि</strong> (बाईं से दाईं ओर लिखी जाती है, मूल स्रोत: ब्राह्मी लिपि)।</li>
                  <li>पंजाबी &rarr; <strong>गुरुमुखी लिपि</strong>।</li>
                  <li>अंग्रेजी, फ्रेंच, जर्मन &rarr; <strong>रोमन लिपि</strong>।</li>
                  <li>उर्दू &rarr; <strong>फ़ारसी लिपि</strong> (दाईं से बाईं ओर लिखी जाती है)।</li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Scientific Classification of Vowels & Consonants",
        headingHi: "2. सूत्र एवं नियम संग्रह: स्वर, व्यंजन एवं पंचमाक्षर के मानक नियम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Grammar Rules: Hindi Varnamala</div>
            <ul>
              <li><strong>Total Sounds in Devanagari:</strong> 52 characters (11 Vowels + 2 Ayogavaha + 33 Consonants + 4 Conjuncts + 2 Binary).</li>
              <li><strong>Vowels (स्वर - 11):</strong> Hrasva (अ, इ, उ, ऋ - 4) and Deergha (आ, ई, ऊ, ए, ऐ, ओ, औ - 7).</li>
              <li><strong>Panchamakshar Rule (पंचमाक्षर नियम):</strong> The 5th nasal letter of each varga (ङ्, ञ्, ण्, न्, म्) when followed by a letter of the same varga is standardized as <strong>Anusvara (ं)</strong> in modern Hindi:<br/>
                <code>गंगा (गङ्गा), चंचल (चञ्चल), पंडित (पण्डित), नंदन (नन्दन), संबंध (सम्बन्ध)</code>.
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: वर्णमाला एवं पंचमाक्षर का मानक नियम</div>
            <ul>
              <li><strong>देवनागरी वर्णमाला में कुल वर्ण:</strong> 52 वर्ण (11 स्वर + 2 अयोगवाह [ं, :] + 33 व्यंजन + 4 संयुक्त व्यंजन [क्ष, त्र, ज्ञ, श्र] + 2 द्विगुण व्यंजन [ड़, ढ़])।</li>
              <li><strong>स्वर (Vowels - 11):</strong> ह्रस्व स्वर (अ, इ, उ, ऋ - 1 मात्रा) एवं दीर्घ स्वर (आ, ई, ऊ, ए, ऐ, ओ, औ - 2 मात्राएं)।</li>
              <li><strong>पंचमाक्षर का स्वर्णिम नियम:</strong> प्रत्येक वर्ग का पांचवां नासिक्य वर्ण (ङ्, ञ्, ण्, न्, म्) अपने वर्ग के किसी वर्ण से पूर्व आने पर मानक हिंदी में <strong>अनुस्वार (ं)</strong> के रूप में लिखा जाता है:<br/>
                <code>गंगा (गङ्गा के स्थान पर), चंचल (चञ्चल के स्थान पर), पंडित (पण्डित के स्थान पर), संबंध (सम्बन्ध के स्थान पर)</code>।
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Forms of 'R' (रेफ vs पदेन) & Common Spelling Traps",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: 'र' के विभिन्न रूप (रेफ व पदेन) एवं शुद्ध वर्तनी",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Dual Forms of 'R' in Hindi Spelling</div>
            <ul>
              <li><strong>Ref (रेफ - ऊपर '):</strong> Half 'r' (स्वर रहित र्) placed on top of the NEXT letter: <code>कर्म (क् + अ + र् + म् + अ), धर्म, सूर्य</code>.</li>
              <li><strong>Paden (पदेन - नीचे / या ^):</strong> Full 'r' placed below a half consonant: <code>क्रम (क् + र् + अ), प्रकाश, राष्ट्र, ड्रम</code>.</li>
              <li><strong>High-Frequency Pure Spellings in BPSC:</strong> <code>उज्ज्वल</code> (दोनों 'ज' आधे!), <code>कवयित्री</code> (कवयित्री, न कि कवियत्री!), <code>आशीर्वाद</code> (रेफ 'व' के ऊपर, न कि 'श' के!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ BPSC व TET का सबसे बड़ा वर्तनी जाल: 'र' के रूप और शुद्ध वर्तनी</div>
            <ul>
              <li><strong>रेफ (Ref - सिर पर '):</strong> स्वर रहित आधा 'र्' जो अगले वर्ण के ऊपर बैठता है: <code>कर्म (क् + अ + र् + म् + अ), धर्म, सूर्य</code>।</li>
              <li><strong>पदेन (Paden - पैरों में / या ^):</strong> स्वर सहित पूरा 'र' जो आधे व्यंजन के नीचे लगता है: <code>क्रम (क् + र् + अ), प्रकाश, राष्ट्र, ड्रम</code>।</li>
              <li><strong>परीक्षा में बार-बार पूछे जाने वाले शुद्ध रूप:</strong><br/>
                - <code>उज्ज्वल</code> (दोनों 'ज्' आधे होते हैं!)<br/>
                - <code>कवयित्री</code> (कवयित्री शुद्ध है, कवियत्री सर्वथा अशुद्ध!)<br/>
                - <code>आशीर्वाद</code> (रेफ 'व' पर लगता है, शी पर नहीं!)
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
];
