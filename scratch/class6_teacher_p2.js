// Class 6 NCERT Teacher-Mentor Notes: Ganita Prakash Ch 6-10 + Science + SST + Hindi
module.exports = [
  {
    id: "ncert-c6-m06",
    title: "Chapter 6: Perimeter and Area (परिमाप और क्षेत्रफल)",
    titleHi: "अध्याय 6: परिमाप और क्षेत्रफल",
    desc: "NCERT Ganita Prakash Chapter 6: Perimeter as continuous boundary, regular polygons formulas, area of rectangles and squares, and the independence principle of perimeter and area.",
    descHi: "गणित प्रकाश अध्याय 6: परिमाप (सतत बाह्य सीमा), समबहुभुज परिमाप सूत्र, आयत व वर्ग का क्षेत्रफल और परिमाप व क्षेत्रफल की स्वतंत्रता का सिद्धांत।",
    competitionEdge: "Non-correlation principle (equal perimeters can have unequal areas), square encloses maximum area for fixed perimeter, and splitting irregular L/T shapes.",
    competitionEdgeHi: "परिमाप व क्षेत्रफल की स्वतंत्रता (समान परिमाप पर असमान क्षेत्रफल), निश्चित परिमाप पर वर्ग का अधिकतम क्षेत्रफल और L/T आकृतियों का विखंडन।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Boundary Wire vs. Floor Carpet",
        headingHi: "1. एनसीईआरटी मूल पाठ: बाड़ का तार (परिमाप) बनाम फर्श का कालीन (क्षेत्रफल)",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 6 establishes the fundamental geometric divide between 1D linear measure (Perimeter) and 2D surface coverage (Area). In CTET and BPSC TRE exams, candidates repeatedly confuse whether increasing the perimeter guarantees an increase in area. Let us master the true geometric facts!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Concept Distinction</div>
            <ul>
              <li><strong>Perimeter (परिमाप):</strong> The total length of the continuous boundary enclosing a closed planar shape. It is a <strong>1-Dimensional length</strong> measured in cm, m, or km.</li>
              <li><strong>Area (क्षेत्रफल):</strong> The amount of 2D surface enclosed within the boundary. It is a <strong>2-Dimensional region</strong> measured in square units ($\text{cm}^2, \text{m}^2$).</li>
              <li><strong>Regular Polygon Law:</strong> If a polygon has $n$ equal sides of length $s$, its $\\text{Perimeter} = \\mathbf{n \\times s}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय शिक्षक भर्ती प्रतियोगियों! अध्याय 6 एक-विमीय लंबाई (परिमाप) और द्वि-विमीय तल (क्षेत्रफल) के अंतर को गहराई से समझाता है। परीक्षा में पूछा जाने वाला सबसे बड़ा वैचारिक प्रश्न यही होता है कि क्या परिमाप बदलने पर क्षेत्रफल भी उसी अनुपात में बदलता है। आइए इसे सूत्रों और उदाहरणों से सिद्ध करें!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT परिमाप व क्षेत्रफल का मूलभूत अंतर</div>
            <ul>
              <li><strong>परिमाप (Perimeter):</strong> किसी बंद समतलीय आकृति की बाह्य सीमा की कुल लंबाई। यह एक <strong>एक-विमीय (1D) माप</strong> है जिसे सेमी, मीटर या किमी में मापा जाता है।</li>
              <li><strong>क्षेत्रफल (Area):</strong> सीमा के भीतर घिरे हुए समतल भाग का परिमाण। यह एक <strong>द्वि-विमीय (2D) क्षेत्र</strong> है जिसे वर्ग मात्रक ($\text{सेमी}^2, \text{मीटर}^2$) में मापा जाता है।</li>
              <li><strong>समबहुभुज का नियम:</strong> यदि किसी समबहुभुज की $n$ बराबर भुजाएं हों (प्रत्येक भुजा $s$), तो उसका $\\text{परिमाप} = \\mathbf{n \\times s}$ होगा।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Comprehensive Perimeter & Area Table",
        headingHi: "2. सूत्र एवं नियम संग्रह: परिमाप एवं क्षेत्रफल की संपूर्ण सूत्र सारणी",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Table: 2D Geometries</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>Shape</th><th>Perimeter Formula</th><th>Area Formula</th><th>Exam Memory Key</th></tr>
              </thead>
              <tbody>
                <tr><td>Square (वर्ग)</td><td>$P = 4s$</td><td>$A = s^2 = \\frac{1}{2}d^2$</td><td>Diagonal $d = s\\sqrt{2}$</td></tr>
                <tr><td>Rectangle (आयत)</td><td>$P = 2(l + b)$</td><td>$A = l \\times b$</td><td>Diagonal $d = \\sqrt{l^2 + b^2}$</td></tr>
                <tr><td>Equilateral Triangle (समबाहु)</td><td>$P = 3s$</td><td>$A = \\frac{\\sqrt{3}}{4}s^2$</td><td>Height $h = \\frac{\\sqrt{3}}{2}s$</td></tr>
                <tr><td>Regular Hexagon (सम-षट्भुज)</td><td>$P = 6s$</td><td>$A = 6 \\times \\frac{\\sqrt{3}}{4}s^2$</td><td>Made of 6 equilateral triangles!</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: 2D आकृतियों के परिमाप व क्षेत्रफल सूत्र</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>ज्यामितीय आकृति</th><th>परिमाप सूत्र</th><th>क्षेत्रफल सूत्र</th><th>परीक्षा गुरुमंत्र</th></tr>
              </thead>
              <tbody>
                <tr><td>वर्ग (Square)</td><td>$P = 4s$</td><td>$A = s^2 = \\frac{1}{2}d^2$</td><td>विकर्ण $d = s\\sqrt{2}$</td></tr>
                <tr><td>आयत (Rectangle)</td><td>$P = 2(l + b)$</td><td>$A = l \\times b$</td><td>विकर्ण $d = \\sqrt{l^2 + b^2}$</td></tr>
                <tr><td>समबाहु त्रिभुज (Equilateral)</td><td>$P = 3s$</td><td>$A = \\frac{\\sqrt{3}}{4}s^2$</td><td>ऊंचाई $h = \\frac{\\sqrt{3}}{2}s$</td></tr>
                <tr><td>सम-षट्भुज (Regular Hexagon)</td><td>$P = 6s$</td><td>$A = 6 \\times \\frac{\\sqrt{3}}{4}s^2$</td><td>6 समबाहु त्रिभुजों का समूह!</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: The Non-Correlation Principle in CTET & BPSC",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: परिमाप और क्षेत्रफल की स्वतंत्रता (Non-Correlation)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Independence Principle: Equal Perimeter &ne; Equal Area</div>
            <p><strong>Examiner's Favorite Trap:</strong> <em>"If two rectangles have the same perimeter, do they always have the same area?"</em> &rarr; <strong>NO! NEVER!</strong></p>
            <p><strong>Proof:</strong></p>
            <ul>
              <li>Rectangle 1: Length = 8 cm, Width = 2 cm &rarr; $P = 2(8+2) = 20$ cm, $\\text{Area} = 8 \\times 2 = \\mathbf{16 \\text{ cm}^2}$.</li>
              <li>Rectangle 2: Length = 6 cm, Width = 4 cm &rarr; $P = 2(6+4) = 20$ cm, $\\text{Area} = 6 \\times 4 = \\mathbf{24 \\text{ cm}^2}$.</li>
              <li>Square (side 5 cm): $P = 20$ cm, $\\text{Area} = 5 \\times 5 = \\mathbf{25 \\text{ cm}^2}$ (MAXIMUM!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ प्रतियोगी परीक्षा का अचूक जाल: समान परिमाप &ne; समान क्षेत्रफल</div>
            <p><strong>परीक्षक का सबसे पसंदीदा प्रश्न:</strong> <em>"यदि दो आकृतियों का परिमाप समान हो, तो क्या उनका क्षेत्रफल भी हमेशा समान होगा?"</em> &rarr; <strong>बिल्कुल नहीं!</strong></p>
            <p><strong>प्रत्यक्ष प्रमाण:</strong></p>
            <ul>
              <li>आयत 1: लंबाई 8 सेमी, चौड़ाई 2 सेमी &rarr; परिमाप $= 20$ सेमी, $\\text{क्षेत्रफल} = 8 \\times 2 = \\mathbf{16\\text{ वर्ग सेमी}}$।</li>
              <li>आयत 2: लंबाई 6 सेमी, चौड़ाई 4 सेमी &rarr; परिमाप $= 20$ सेमी, $\\text{क्षेत्रफल} = 6 \\times 4 = \\mathbf{24\\text{ वर्ग सेमी}}$।</li>
              <li>वर्ग (भुजा 5 सेमी): परिमाप $= 20$ सेमी, $\\text{क्षेत्रफल} = 5 \\times 5 = \\mathbf{25\\text{ वर्ग सेमी}}$ (अधिकतम!)।</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m07",
    title: "Chapter 7: Fractions (भिन्न)",
    titleHi: "अध्याय 7: भिन्न (इकाई भिन्न, तुल्य भिन्न एवं संक्रियाएँ)",
    desc: "NCERT Ganita Prakash Chapter 7: Fractions on the number line, proper/improper/mixed forms, equivalent fractions, cross-multiplication, and operations with unequal denominators.",
    descHi: "गणित प्रकाश अध्याय 7: संख्या रेखा पर भिन्न, उचित/अनुचित/मिश्रित रूप, तुल्य भिन्न, तिर्यक गुणन (Cross-Multiplication) और असमान हरों वाली भिन्नों का योग-घटाव।",
    competitionEdge: "Locating fractions on number line, cross multiplication trick ad vs bc, reducing to simplest form using HCF, and fraction word problems in TET exams.",
    competitionEdgeHi: "संख्या रेखा पर भिन्नों का स्थान निर्धारण, क्रॉस गुणन द्वारा तुरंत तुलना, म.स. द्वारा सरलतम रूप में बदलना और प्रतियोगी भिन्न पहेलियां।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Fractions as Division & Number Line Representation",
        headingHi: "1. एनसीईआरटी मूल पाठ: भाग के रूप में भिन्न एवं संख्या रेखा पर निरूपण",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, in Class 6 Ganita Prakash, fractions step beyond pizza slices into rigorous mathematical objects on the <strong>Number Line</strong>. A fraction $a/b$ is defined as dividing the unit interval between 0 and 1 into $b$ equal parts, and taking $a$ of those parts!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 Representation on Number Line</div>
            <ul>
              <li><strong>Proper Fractions ($a < b$):</strong> Always strictly lie strictly <strong>between 0 and 1</strong> (e.g. 1/4, 2/3, 5/8).</li>
              <li><strong>Improper Fractions ($a \\ge b$):</strong> Always lie at <strong>1 or to the right of 1</strong> on the number line (e.g. 7/4 = 1 ¾).</li>
              <li><strong>Simplest Form (न्यूनतम रूप):</strong> A fraction $a/b$ is in simplest form when $\\mathbf{\\text{HCF}(a, b) = 1}$ (i.e. numerator and denominator are co-prime!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! कक्षा 6 गणित प्रकाश में भिन्न केवल चित्र रंगने से आगे बढ़कर <strong>संख्या रेखा (Number Line)</strong> पर एक वास्तविक संख्या का स्थान लेती है। भिन्न $a/b$ का अर्थ है 0 और 1 के बीच की दूरी को $b$ बराबर भागों में बांटकर उनमें से $a$ भाग चुनना!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 संख्या रेखा पर भिन्नों की स्थिति</div>
            <ul>
              <li><strong>उचित भिन्न (Proper Fraction $a < b$):</strong> संख्या रेखा पर हमेशा <strong>0 और 1 के बीच</strong> स्थित होती है (जैसे 1/4, 2/3, 5/8)।</li>
              <li><strong>अनुचित भिन्न (Improper Fraction $a \\ge b$):</strong> संख्या रेखा पर हमेशा <strong>1 या 1 के दाईं ओर</strong> स्थित होती है (जैसे 7/4 = 1 ¾)।</li>
              <li><strong>सरलतम या मानक रूप (Simplest Form):</strong> जब अंश और हर का $\\mathbf{\\text{म.स.} (HCF) = 1}$ हो (यानी दोनों सह-अभाज्य हों)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Operations on Fractions with Unlike Denominators",
        headingHi: "2. सूत्र एवं नियम संग्रह: असमान हरों वाली भिन्नों का योग, घटाव व गुणा",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Chest: Fraction Arithmetic</div>
            <ul>
              <li><strong>Addition / Subtraction with Unlike Denominators:</strong><br/>
                $$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{a \\cdot (L/b) \\pm c \\cdot (L/d)}{L}, \\quad \\text{where } L = \\text{LCM}(b, d)$$
              </li>
              <li><strong>Multiplication of Fractions:</strong><br/>
                $$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d} = \\frac{\\text{Product of Numerators}}{\\text{Product of Denominators}}$$
              </li>
              <li><strong>Division of Fractions (Multiply by Reciprocal):</strong><br/>
                $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: भिन्नों की गणितीय संक्रियाएं</div>
            <ul>
              <li><strong>असमान हरों का योग व घटाव:</strong><br/>
                $$\\frac{a}{b} \\pm \\frac{c}{d} = \\frac{a \\cdot (L/b) \\pm c \\cdot (L/d)}{L}, \\quad (L = \\text{हरों का ल.स. LCM})$$
              </li>
              <li><strong>भिन्नों का गुणा:</strong><br/>
                $$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d} = \\frac{\\text{अंशों का गुणनफल}}{\\text{हरों का गुणनफल}}$$
              </li>
              <li><strong>भिन्नों का भाग (व्युत्क्रम से गुणा):</strong><br/>
                $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: The Reciprocal Division Blunder",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: भिन्न भाग में व्युत्क्रम (Reciprocal) की भूल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Common Mistake: Forgetting to Invert the Divisor</div>
            <p>Compute: $\\frac{3}{5} \\div \\frac{9}{10}$.</p>
            <p><strong>Correct Teacher's Step:</strong> Invert the SECOND fraction and change $\\div$ to $\\times$:<br/>
              $$\\frac{3}{5} \\times \\frac{10}{9} = \\frac{3 \\times 10}{5 \\times 9} = \\frac{30}{45} = \\mathbf{\\frac{2}{3}}!$$
            </p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ आम भूल: भाजक भिन्न को उलटना भूल जाना</div>
            <p>हल करें: $\\frac{3}{5} \\div \\frac{9}{10}$।</p>
            <p><strong>शिक्षक का सही चरण:</strong> दूसरी भिन्न को उलटें (व्युत्क्रम लें) और भाग के चिह्न को गुणा में बदलें:<br/>
              $$\\frac{3}{5} \\times \\frac{10}{9} = \\frac{3 \\times 10}{5 \\times 9} = \\frac{30}{45} = \\mathbf{\\frac{2}{3}}!$$
            </p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m08",
    title: "Chapter 8: Playing with Constructions (रचनाओं का खेल)",
    titleHi: "अध्याय 8: रचनाओं का खेल (पटरी, परकार व कोण रचना)",
    desc: "NCERT Ganita Prakash Chapter 8: Ruler and compass constructions, perpendicular bisector, angle bisector, and constructing exact 60°, 120°, 90°, 45°, 30° angles without a protractor.",
    descHi: "गणित प्रकाश अध्याय 8: पटरी और परकार से रचनाएं, रेखाखंड का लंब समद्विभाजक, कोण समद्विभाजक और बिना चांदे के 60°, 120°, 90°, 45°, 30° कोणों की सटीक रचना।",
    competitionEdge: "Geometric locus properties (points on perpendicular bisector are equidistant from segment endpoints), constructible angles condition (multiples of 15°), and compass theorems.",
    competitionEdgeHi: "लंब समद्विभाजक का बिंदुपथ गुणधर्म (अंत बिंदुओं से समान दूरी), परकार से रचना योग्य कोण (15° के गुणज) और रचना सिद्धांत।",
    sections: [
      {
        heading: "1. NCERT Core Activity: The Compass & Straightedge Philosophy",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: पटरी और परकार का ज्यामितीय दर्शन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 8 teaches classical Greek and Indian constructions using only two tools: an <strong>unmarked straightedge (ruler)</strong> and a <strong>pair of compasses</strong>. In CTET Paper 2 and BPSC exams, theoretical questions test which angles CAN be constructed using ruler and compass alone!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 The Golden Rule of Constructible Angles</div>
            <p>Using a compass, the natural angle created by setting the compass radius equal to the circle's radius and marking an arc on the circumference is <strong>exactly 60&deg;</strong> (an equilateral triangle!).</p>
            <ul>
              <li>By repeatedly bisecting and combining 60&deg; and 90&deg;, any angle that is a <strong>multiple of 15&deg;</strong> can be constructed!</li>
              <li><strong>Constructible:</strong> <code>15&deg;, 30&deg;, 45&deg;, 60&deg;, 75&deg;, 90&deg;, 105&deg;, 120&deg;, 135&deg;, 150&deg;, 165&deg;</code>.</li>
              <li><strong>NON-Constructible with compass alone:</strong> <code>20&deg;, 40&deg;, 50&deg;, 70&deg;, 80&deg;</code>! (Classic CTET Question!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 8 प्राचीन ज्यामिति के दो मूल उपकरणों—<strong>पटरी (Straightedge)</strong> और <strong>परकार (Compass)</strong>—के माध्यम से आकृतियों का निर्माण सिखाता है। CTET Paper 2 में सीधे प्रश्न आता है कि पटरी और परकार की सहायता से कौन-सा कोण नहीं बनाया जा सकता!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 रचना योग्य कोणों का स्वर्णिम नियम</div>
            <p>परकार की त्रिज्या को बदले बिना वृत्त की परिधि पर चाप काटने पर बना कोण <strong>ठीक 60&deg;</strong> होता है (समबाहु त्रिभुज की रचना!)।</p>
            <ul>
              <li>कोण समद्विभाजक की सहायता से <strong>15&deg; के सभी गुणज</strong> पटरी और परकार से बनाए जा सकते हैं!</li>
              <li><strong>रचना योग्य कोण:</strong> <code>15&deg;, 30&deg;, 45&deg;, 60&deg;, 75&deg;, 90&deg;, 105&deg;, 120&deg;, 135&deg;, 150&deg;, 165&deg;</code>।</li>
              <li><strong>रचना अयोग्य कोण (केवल परकार से संभव नहीं):</strong> <code>20&deg;, 40&deg;, 50&deg;, 70&deg;, 80&deg;</code>! (CTET का सबसे पसंदीदा प्रश्न!)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Perpendicular Bisector & Angle Bisector Theorems",
        headingHi: "2. सूत्र एवं नियम संग्रह: लंब समद्विभाजक एवं कोण समद्विभाजक के प्रमेय",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Theorems: Geometric Loci</div>
            <ul>
              <li><strong>Perpendicular Bisector Theorem:</strong> Any point $P$ lying on the perpendicular bisector of segment $AB$ is strictly <strong>equidistant</strong> from both endpoints: $\\mathbf{PA = PB}$.</li>
              <li><strong>Angle Bisector Theorem:</strong> Any point $Q$ lying on the angle bisector of $\\angle ABC$ is equidistant from the arms of the angle: $\\mathbf{QD_1 = QD_2}$.</li>
              <li><strong>Steps to Construct 90&deg;:</strong> Construct 60&deg; and 120&deg; arcs on a circle, then bisect the 60&deg; gap between them: $60&deg; + \\frac{60&deg;}{2} = \\mathbf{90&deg;}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: लंब समद्विभाजक व कोण समद्विभाजक प्रमेय</div>
            <ul>
              <li><strong>लंब समद्विभाजक का बिंदुपथ प्रमेय:</strong> रेखाखंड $AB$ के लंब समद्विभाजक पर स्थित कोई भी बिंदु $P$, दोनों अंत बिंदुओं से सदैव <strong>समान दूरी</strong> पर होता है: $\\mathbf{PA = PB}$।</li>
              <li><strong>कोण समद्विभाजक प्रमेय:</strong> किसी कोण के समद्विभाजक पर स्थित कोई भी बिंदु, उस कोण की दोनों भुजाओं से समान लंबवत दूरी पर होता है।</li>
              <li><strong>90&deg; बनाने का चरण:</strong> 60&deg; और 120&deg; के चाप बनाएं, फिर दोनों के बीच के 60&deg; के अंतर को समद्विभाजित करें: $60&deg; + 30&deg; = \\mathbf{90&deg;}$।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Constructible vs Non-Constructible Angles",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: 15° के गुणज की जांच (CTET Hack)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The 15-Degree Divisibility Hack</div>
            <p>Question: Which of the following angles CANNOT be constructed using a ruler and compass only? (A) 37.5&deg;, (B) 67.5&deg;, (C) 40&deg;, (D) 22.5&deg;.</p>
            <p><strong>Teacher's Hack:</strong> Check if doubling the angle gives a multiple of 15&deg;!</p>
            <ul>
              <li>$37.5&deg; \\times 2 = 75&deg;$ (Divisible by 15 ✅)</li>
              <li>$67.5&deg; \\times 2 = 135&deg;$ (Divisible by 15 ✅)</li>
              <li>$22.5&deg; \\times 2 = 45&deg;$ (Divisible by 15 ✅)</li>
              <li><strong>40&deg;:</strong> NOT a multiple of 15! Answer is <strong>(C) 40&deg;</strong>! Solved in 5 seconds!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ 15 डिग्री विभाज्यता हैक (CTET में 5 सेकंड में उत्तर!)</div>
            <p>प्रश्न: निम्न में से कौन-सा कोण केवल पटरी और परकार की सहायता से नहीं बनाया जा सकता? (A) 37.5&deg;, (B) 67.5&deg;, (C) 40&deg;, (D) 22.5&deg;।</p>
            <p><strong>शिक्षक का सुपरफास्ट हैक:</strong> कोण का दोगुना करके देखें कि क्या वह 15 का गुणज है!</p>
            <ul>
              <li>$37.5&deg; \\times 2 = 75&deg;$ (15 से विभाज्य ✅)</li>
              <li>$67.5&deg; \\times 2 = 135&deg;$ (15 से विभाज्य ✅)</li>
              <li>$22.5&deg; \\times 2 = 45&deg;$ (15 से विभाज्य ✅)</li>
              <li><strong>40&deg;:</strong> 15 का गुणज नहीं है! अतः सही उत्तर है: <strong>(C) 40&deg;</strong>!</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m09",
    title: "Chapter 9: Symmetry (सममिति)",
    titleHi: "अध्याय 9: सममिति (रैखिक एवं घूर्णन सममिति, क्रम व रंगोली पैटर्न)",
    desc: "NCERT Ganita Prakash Chapter 9: Reflection symmetry, rotational symmetry, angle of rotation, order of symmetry, and mirror reflection invariance.",
    descHi: "गणित प्रकाश अध्याय 9: परावर्तन (रैखिक) सममिति, घूर्णन सममिति, घूर्णन कोण, सममिति का क्रम और दर्पण परावर्तन के ज्यामितीय नियम।",
    competitionEdge: "Order of rotational symmetry formula Order = 360°/θ, figures with dual reflectional and rotational symmetry, and kaleidoscope geometry in competitive tests.",
    competitionEdgeHi: "घूर्णन सममिति क्रम सूत्र क्रम = 360°/θ, रैखिक व घूर्णन दोनों सममिति वाली आकृतियां और कैलिडोस्कोप ज्यामिति।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Mirror Reflection & Rotational Turns",
        headingHi: "1. एनसीईआरटी मूल पाठ: दर्पण परावर्तन एवं घूर्णन सममिति की खोज",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 9 elevates symmetry from paper folds to full dynamic <strong>Rotational Symmetry</strong>. While reflection symmetry flips a figure across an axis, rotational symmetry turns a figure about a central pivot. Both forms frequently appear in reasoning and geometry sections.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 Two Types of Symmetry in NCERT</div>
            <ul>
              <li><strong>Reflectional Symmetry (रैखिक सममिति):</strong> An axis divides the figure into two mirror-image halves.</li>
              <li><strong>Rotational Symmetry (घूर्णन सममिति):</strong> A figure rotates around a fixed center point $O$ by an angle $\\theta < 360&deg;$ such that it looks identical to its starting position.</li>
              <li><strong>Order of Rotational Symmetry:</strong> The number of matching positions during one complete 360&deg; turn. Every shape trivially has order 1 (at 360&deg;); a shape is said to have rotational symmetry only if its <strong>Order &ge; 2</strong>!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 9 सममिति को कागज़ मोड़ने से आगे ले जाकर <strong>घूर्णन सममिति (Rotational Symmetry)</strong> तक पहुंचाता है। रैखिक सममिति में आकृति दर्पण की तरह पलटती है, जबकि घूर्णन सममिति में आकृति एक निश्चित केंद्र के चारों ओर घूमती है। प्रतियोगी परीक्षाओं में दोनों के क्रम पूछे जाते हैं!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT में सममिति के दो मुख्य प्रकार</div>
            <ul>
              <li><strong>रैखिक / परावर्तन सममिति (Reflectional Symmetry):</strong> एक अक्ष आकृति को दो हूबहू दर्पण-प्रतिबिंब भागों में बांटती है।</li>
              <li><strong>घूर्णन सममिति (Rotational Symmetry):</strong> आकृति केंद्र के चारों ओर $360&deg;$ से कम कोण पर घूमने पर भी मूल अवस्था जैसी दिखाई देती है।</li>
              <li><strong>घूर्णन सममिति का क्रम (Order):</strong> $360&deg;$ के पूर्ण चक्कर में कितनी बार आकृति समान दिखाई देती है। गणितीय दृष्टि से घूर्णन सममिति केवल तभी मानी जाती है जब उसका <strong>क्रम 2 या 2 से अधिक हो</strong>!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Complete Symmetry Inventory for Polygons & Letters",
        headingHi: "2. सूत्र एवं नियम संग्रह: बहुभुजों एवं वर्णमाला की पूर्ण सममिति सारणी",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Table: Reflection Lines vs. Rotational Order</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>Geometric Figure</th><th>Lines of Symmetry</th><th>Smallest Rotation Angle &theta;</th><th>Rotational Order</th></tr>
              </thead>
              <tbody>
                <tr><td>Equilateral Triangle</td><td>3</td><td>120&deg;</td><td>3</td></tr>
                <tr><td>Square</td><td>4</td><td>90&deg;</td><td>4</td></tr>
                <tr><td>Rectangle</td><td>2</td><td>180&deg;</td><td>2</td></tr>
                <tr><td>Rhombus</td><td>2</td><td>180&deg;</td><td>2</td></tr>
                <tr><td>Parallelogram (General)</td><td><strong>0</strong> (Zero!)</td><td>180&deg;</td><td><strong>2</strong></td></tr>
                <tr><td>Regular Pentagon</td><td>5</td><td>72&deg;</td><td>5</td></tr>
                <tr><td>Regular Hexagon</td><td>6</td><td>60&deg;</td><td>6</td></tr>
                <tr><td>Circle</td><td>Infinite (&infin;)</td><td>Any angle</td><td>Infinite (&infin;)</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: सममिति रेखाएं बनाम घूर्णन क्रम सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>ज्यामितीय आकृति</th><th>रैखिक सममिति रेखाएं</th><th>न्यूनतम घूर्णन कोण &theta;</th><th>घूर्णन सममिति का क्रम</th></tr>
              </thead>
              <tbody>
                <tr><td>समबाहु त्रिभुज</td><td>3</td><td>120&deg;</td><td>3</td></tr>
                <tr><td>वर्ग (Square)</td><td>4</td><td>90&deg;</td><td>4</td></tr>
                <tr><td>आयत (Rectangle)</td><td>2</td><td>180&deg;</td><td>2</td></tr>
                <tr><td>समचतुर्भुज (Rhombus)</td><td>2</td><td>180&deg;</td><td>2</td></tr>
                <tr><td>समांतर चतुर्भुज (Parallelogram)</td><td><strong>0 (शून्य!)</strong></td><td>180&deg;</td><td><strong>2</strong></td></tr>
                <tr><td>सम-पंचभुज (Pentagon)</td><td>5</td><td>72&deg;</td><td>5</td></tr>
                <tr><td>सम-षट्भुज (Hexagon)</td><td>6</td><td>60&deg;</td><td>6</td></tr>
                <tr><td>वृत्त (Circle)</td><td>अनंत (&infin;)</td><td>कोई भी कोण</td><td>अनंत (&infin;)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: The Parallelogram Paradox in BPSC & CTET",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: समांतर चतुर्भुज का रहस्य (Parallelogram Trap)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Parallelogram Paradox</div>
            <p><strong>Examiner's Favorite Question:</strong> <em>"Name a quadrilateral that has Rotational Symmetry of Order 2, but ZERO lines of reflection symmetry."</em></p>
            <p><strong>Answer:</strong> A <strong>General Parallelogram (समांतर चतुर्भुज)</strong>!</p>
            <p>It cannot be folded along any line to match its halves, yet rotating it 180&deg; produces an identical shape. Master this distinction!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ समांतर चतुर्भुज का सबसे बड़ा परीक्षा जाल</div>
            <p><strong>CTET का बहुचर्चित प्रश्न:</strong> <em>"उस चतुर्भुज का नाम बताइए जिसमें घूर्णन सममिति का क्रम 2 है, परंतु रैखिक सममिति रेखाओं की संख्या शून्य (0) है?"</em></p>
            <p><strong>सही उत्तर:</strong> <strong>सामान्य समांतर चतुर्भुज (Parallelogram)</strong>!</p>
            <p>इसे किसी भी रेखा के अनुदिश मोड़ने पर दोनों भाग कभी समान नहीं बैठते (रैखिक सममिति = 0), परंतु 180&deg; घुमाने पर यह बिल्कुल अपनी मूल अवस्था में आ जाता है (घूर्णन क्रम = 2)!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-m10",
    title: "Chapter 10: The Other Side of Zero (शून्य के उस पार: Integers)",
    titleHi: "अध्याय 10: शून्य के उस पार (पूर्णांक एवं ब्रह्मगुप्त के नियम)",
    desc: "NCERT Ganita Prakash Chapter 10: Integers on the number line, negative numbers origin, Brahmagupta's ancient rules for fortunes and debts, and subtracting signed integers.",
    descHi: "गणित प्रकाश अध्याय 10: संख्या रेखा पर पूर्णांक, ऋणात्मक संख्याओं का उद्भव, ब्रह्मगुप्त के धन और ऋण के प्राचीन नियम और कोष्ठक वाले पूर्णांकों का घटाव।",
    competitionEdge: "Brahmagupta's 7th-century integer multiplication laws, double-negative subtraction rule a - (-b) = a + b, and absolute value inequalities in competitive exams.",
    competitionEdgeHi: "ब्रह्मगुप्त के 7वीं सदी के धन-ऋण गुणन नियम, दोहरे ऋणात्मक का घटाव a - (-b) = a + b और निरपेक्ष मान (Absolute Value) के प्रतियोगी नियम।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: The Need for Numbers Beyond Zero",
        headingHi: "1. एनसीईआरटी मूल पाठ: शून्य से नीचे की दुनिया एवं संख्या रेखा",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 10 introduces the complete set of <strong>Integers (पूर्णांक - $\\mathbb{Z}$)</strong>. NCERT explains why whole numbers fail when measuring sub-zero temperatures (e.g. -15&deg;C in Siachen), submarine depth below sea level, or financial debt. In CTET and BPSC exams, integer sign operations cause more errors than almost any other topic!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 The Historical Legacy of Brahmagupta (628 CE)</div>
            <p>NCERT honors the great 7th-century Indian mathematician <strong>Brahmagupta</strong>, who in his seminal work <em>Brahmasphutasiddhanta</em> was the first in world history to formalize complete arithmetic rules for Zero and Negative Numbers:</p>
            <ul>
              <li><strong>Fortune (धन / Positive):</strong> Assets or gains ($+a$).</li>
              <li><strong>Debt (ऋण / Negative):</strong> Liabilities or losses ($-a$).</li>
              <li><strong>Brahmagupta's Law of Subtraction:</strong> <em>"A debt subtracted from zero becomes a fortune!"</em> &rarr; $0 - (-a) = \\mathbf{+a}$!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 10 हमें <strong>पूर्णांकों (Integers - $\\mathbb{Z}$)</strong> के संसार में ले जाता है। जब शून्य से नीचे का तापमान (सियाचिन में -15&deg;C), समुद्र तल से गहराई, या आर्थिक घाटा नापना हो, तो पूर्ण संख्याएं असमर्थ हो जाती हैं। BPSC और CTET में ऋणात्मक चिह्नों के जोड़-घटाव में सबसे अधिक गलतियाँ होती हैं!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 महान गणितज्ञ ब्रह्मगुप्त (628 ईस्वी) का अमर योगदान</div>
            <p>NCERT 7वीं सदी के महान भारतीय गणितज्ञ <strong>ब्रह्मगुप्त</strong> का उल्लेख करती है, जिन्होंने अपने ग्रंथ <em>ब्राह्मस्फुटसिद्धान्त</em> में विश्व में पहली बार शून्य और ऋणात्मक संख्याओं के नियम प्रतिपादित किए:</p>
            <ul>
              <li><strong>धन (Fortune / Positive):</strong> संपत्ति या लाभ ($+a$)।</li>
              <li><strong>ऋण (Debt / Negative):</strong> देनदारी या हानि ($-a$)।</li>
              <li><strong>ब्रह्मगुप्त का घटाव नियम:</strong> <em>"शून्य में से ऋण घटाने पर वह धन बन जाता है!"</em> &rarr; $0 - (-a) = \\mathbf{+a}$!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Signed Integer Operations & Absolute Value",
        headingHi: "2. सूत्र एवं नियम संग्रह: पूर्णांक संक्रियाएं एवं निरपेक्ष मान (Absolute Value)",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Rules: Operations with Directed Numbers</div>
            <ul>
              <li><strong>Addition with Same Signs:</strong> Add absolute values and keep the common sign:<br/>
                $(-7) + (-5) = -(7 + 5) = \\mathbf{-12}$.
              </li>
              <li><strong>Addition with Different Signs:</strong> Subtract the smaller absolute value from the larger, and keep the sign of the larger:<br/>
                $(-15) + (+9) = -(15 - 9) = \\mathbf{-6}$.
              </li>
              <li><strong>The Master Subtraction Law (Add the Additive Inverse):</strong><br/>
                $$\\mathbf{a - b = a + (-b)} \\quad \\text{and} \\quad \\mathbf{a - (-b) = a + b}$$
              </li>
              <li><strong>Multiplication Sign Rules:</strong><br/>
                $(+) \\times (+) = (+), \\quad (-) \\times (-) = (+), \\quad (+) \\times (-) = (-), \\quad (-) \\times (+) = (-)$.
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: पूर्णांकों के जोड़, घटाव व गुणा के नियम</div>
            <ul>
              <li><strong>समान चिह्न वाले पूर्णांकों का योग:</strong> मान जोड़ें और वही चिह्न लगाएं:<br/>
                $(-7) + (-5) = -(7 + 5) = \\mathbf{-12}$।
              </li>
              <li><strong>असमान चिह्न वाले पूर्णांकों का योग:</strong> बड़े मान में से छोटा घटाएं और बड़े मान का चिह्न लगाएं:<br/>
                $(-15) + (+9) = -(15 - 9) = \\mathbf{-6}$।
              </li>
              <li><strong>घटाव का स्वर्णिम नियम (योज्य प्रतिलोम को जोड़ना):</strong><br/>
                $$\\mathbf{a - b = a + (-b)} \\quad \\text{तथा} \\quad \\mathbf{a - (-b) = a + b}$$
              </li>
              <li><strong>गुणा के चिह्न नियम:</strong><br/>
                समान चिह्नों का गुणा हमेशा <strong>धनात्मक (+)</strong>: $(-) \\times (-) = (+)$।<br/>
                विपरीत चिह्नों का गुणा हमेशा <strong>ऋणात्मक (-)</strong>: $(+) \\times (-) = (-)$।
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: The Double-Negative Subtraction Trap",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: दोहरे ऋण का कोष्ठक खोलने की भूल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Universal Negative Subtraction Blunder</div>
            <p>Compute: $(-25) - (-40)$.</p>
            <p><strong>The Mistake:</strong> Candidates see three negative signs and conclude the answer must be $-65$! <strong>DISASTROUS!</strong></p>
            <p><strong>Teacher's Correct Step:</strong> Two consecutive minus signs become PLUS:<br/>
              $(-25) - (-40) = -25 + 40 = \\mathbf{+15}$! Always convert $-( - )$ to $+$ first!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ सबसे बड़ी परीक्षा भूल: $(-25) - (-40)$ का हल</div>
            <p><strong>आम भूल:</strong> छात्र तीन ऋण चिह्न देखकर हड़बड़ी में $-65$ उत्तर लगा देते हैं! <strong>यह पूर्णतः गलत है!</strong></p>
            <p><strong>शिक्षक का सही चरण:</strong> कोष्ठक के बाहर और अंदर का ऋण मिलकर <strong>धन (+)</strong> बन जाता है:<br/>
              $(-25) - (-40) = -25 + 40 = \\mathbf{+15}$! परीक्षा में पहले $-( - )$ को $+$ में बदलें!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-sci01",
    title: "Science Chapter 1 & 2: Diversity in the Living World & Scientific Inquiry",
    titleHi: "विज्ञान अध्याय 1 व 2: सजीव जगत में विविधता एवं वैज्ञानिक अन्वेषण",
    desc: "NCERT Curiosity Science: Steps of scientific method, classification of materials (lustre, hardness, solubility, density, transparency), and complete methods of separating mixtures.",
    descHi: "NCERT जिज्ञासा विज्ञान: वैज्ञानिक अन्वेषण के चरण, पदार्थों का वर्गीकरण (द्युति, कठोरता, विलेयता, घनत्व, पारदर्शिता) और मिश्रणों के पृथक्करण की विधियां।",
    competitionEdge: "Separation methods summary (Winnowing vs Threshing vs Decantation vs Filtration), saturated solution solubility with temperature, and transparent/translucent/opaque materials.",
    competitionEdgeHi: "पृथक्करण विधियां (निष्पावन, थ्रेशिंग, निस्तारण, निस्यंदन), संतृप्त विलयन पर तापमान का प्रभाव और पारदर्शी, पारभासी व अपारदर्शी पदार्थ।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Scientific Inquiry & Material Properties",
        headingHi: "1. एनसीईआरटी मूल पाठ: वैज्ञानिक अन्वेषण और पदार्थों के भौतिक गुणधर्म",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, the new NCERT Class 6 Science textbook 'Curiosity' transforms science from rote facts into inquiry and experimentation. In CTET Paper 2 Science and BPSC Secondary Teacher exams, questions focus on <strong>properties of matter</strong> and <strong>separation of mixtures</strong>.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 Classification of Materials in NCERT</div>
            <ul>
              <li><strong>Lustre (द्युति / चमक):</strong> Freshly cut metals (gold, copper, iron) shine with metallic lustre; wood and chalk do not.</li>
              <li><strong>Hardness:</strong> Materials that can be easily compressed or scratched are soft (candle wax, sponge); materials difficult to scratch are hard (iron, diamond).</li>
              <li><strong>Solubility:</strong> Salt and sugar dissolve completely in water (soluble); sand, sawdust, and chalk do not (insoluble).</li>
              <li><strong>Transparency:</strong>
                <ul>
                  <li><strong>Transparent (पारदर्शी):</strong> Glass, clean water, air (light passes completely).</li>
                  <li><strong>Translucent (पारभासी):</strong> Butter paper, frosted glass, oily sheet (light passes partially).</li>
                  <li><strong>Opaque (अपारदर्शी):</strong> Wood, cardboard, metals (no light passes through).</li>
                </ul>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय विज्ञान शिक्षक भर्ती प्रतियोगियों! नई NCERT पुस्तक 'जिज्ञासा' विज्ञान को रटने के स्थान पर प्रायोगिक अन्वेषण बनाती है। CTET Paper 2 और BPSC शिक्षक भर्ती में <strong>पदार्थों के गुणधर्म</strong> और <strong>मिश्रणों के पृथक्करण</strong> से हर वर्ष 3 से 4 प्रश्न अवश्य आते हैं।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT पदार्थों का भौतिक वर्गीकरण</div>
            <ul>
              <li><strong>द्युति (Lustre / चमक):</strong> ताजी कटी धातुएं (लोहा, तांबा, सोना) चमकती हैं; लकड़ी और चॉक में चमक नहीं होती।</li>
              <li><strong>कठोरता (Hardness):</strong> जिन पदार्थों को आसानी से दबाया या खरोंचा जा सके वे कोमल हैं (मोम, स्पंज); जिन्हें खरोंचना कठिन हो वे कठोर हैं (लोहा, हीरा)।</li>
              <li><strong>विलेयता (Solubility):</strong> नमक और चीनी जल में पूरी तरह घुल जाते हैं (विलेय); रेत और लकड़ी का बुरादा नहीं घुलते (अविलेय)।</li>
              <li><strong>पारदर्शिता (Transparency):</strong>
                <ul>
                  <li><strong>पारदर्शी (Transparent):</strong> कांच, स्वच्छ जल, वायु (प्रकाश आर-पार निकल जाता है)।</li>
                  <li><strong>पारभासी (Translucent):</strong> बटर पेपर, घिसा हुआ कांच, तैलीय कागज़ (धुंधला दिखाई देता है)।</li>
                  <li><strong>अपारदर्शी (Opaque):</strong> लकड़ी, गत्ता, धातुएं (प्रकाश बिल्कुल पार नहीं होता)।</li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Comprehensive Table of Separation Methods",
        headingHi: "2. सूत्र एवं नियम संग्रह: पदार्थों के पृथक्करण की संपूर्ण विधियां सारणी",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Table: Separation of Substances</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>Separation Method</th><th>Principle / Difference in Properties</th><th>Real NCERT Example</th></tr>
              </thead>
              <tbody>
                <tr><td>Handpicking (हस्त चयन)</td><td>Difference in size, color, or shape</td><td>Separating stones and husk from rice/pulses</td></tr>
                <tr><td>Threshing (थ्रेशिंग)</td><td>Beating stalks to free grain seeds</td><td>Separating wheat grains from dry stalks</td></tr>
                <tr><td>Winnowing (निष्पावन)</td><td>Difference in weight / density by wind</td><td>Separating light husk from heavy grain by blowing wind</td></tr>
                <tr><td>Sieving (चालन)</td><td>Difference in particle size through mesh</td><td>Separating fine flour from coarse bran; sand at construction sites</td></tr>
                <tr><td>Sedimentation (अवसादन)</td><td>Heavier insoluble solid settles at bottom</td><td>Mud settling down in water</td></tr>
                <tr><td>Decantation (निस्तारण)</td><td>Pouring off clear top liquid without disturbing sediment</td><td>Separating oil and water; pouring off clean water after sedimentation</td></tr>
                <tr><td>Filtration (निस्यंदन)</td><td>Passing mixture through fine porous filter</td><td>Separating tea leaves using strainer; filter paper in lab</td></tr>
                <tr><td>Evaporation (वाष्पन)</td><td>Heating liquid to vapor to leave dissolved solid</td><td>Obtaining common salt from sea water</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: पदार्थों के पृथक्करण की संपूर्ण सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr><th>पृथक्करण की विधि</th><th>सिद्धांत / गुणधर्मों में अंतर</th><th>NCERT का वास्तविक उदाहरण</th></tr>
              </thead>
              <tbody>
                <tr><td>हस्त चयन (Handpicking)</td><td>आकार, रंग या रूप में अंतर</td><td>गेहूं या दाल से कंकड़-पत्थर बीनकर अलग करना</td></tr>
                <tr><td>थ्रेशिंग (Threshing)</td><td>डंडियों को पीटकर दानों को अलग करना</td><td>सूखे पौधों की डंडियों से गेहूं के दानों को अलग करना</td></tr>
                <tr><td>निष्पावन (Winnowing)</td><td>हवा के झोंके द्वारा भार (घनत्व) में अंतर</td><td>भारी अन्न के दानों से हल्के भूसे को हवा में उड़ाकर अलग करना</td></tr>
                <tr><td>चालन (Sieving)</td><td>छलनी के छिद्रों द्वारा कणों के आकार में अंतर</td><td>आटे से चोकर अलग करना; निर्माण स्थल पर रेत से कंकड़ छानना</td></tr>
                <tr><td>अवसादन (Sedimentation)</td><td>भारी अघुलनशील ठोस का तली में बैठना</td><td>गंदले पानी में मिट्टी का नीचे तली में बैठ जाना</td></tr>
                <tr><td>निस्तारण (Decantation)</td><td>तलछट को हिलाए बिना ऊपर के द्रव को उड़ेलना</td><td>तेल और जल के मिश्रण को अलग करना; अवसादन के बाद पानी निथारना</td></tr>
                <tr><td>निस्यंदन (Filtration)</td><td>महीन छिद्रयुक्त फिल्टर से छानना</td><td>छलनी से चाय की पत्तियां अलग करना; प्रयोगशाला में फिल्टर पेपर</td></tr>
                <tr><td>वाष्पन (Evaporation)</td><td>द्रव को गर्म करके वाष्प बनाना</td><td>समुद्र के जल से साधारण नमक (NaCl) प्राप्त करना</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Saturated Solutions & Temperature Effects",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: संतृप्त विलयन एवं तापमान का घुलनशीलता पर प्रभाव",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Saturated Solution Law in Science</div>
            <p><strong>Definition:</strong> A solution in which no more substance (solute) can be dissolved at that given temperature is called a <strong>Saturated Solution (संतृप्त विलयन)</strong>.</p>
            <p><strong>Effect of Temperature:</strong></p>
            <ul>
              <li><strong>Heating:</strong> INCREASES solubility! A saturated solution at 20&deg;C can dissolve MORE sugar when heated to 60&deg;C!</li>
              <li><strong>Cooling:</strong> DECREASES solubility! When a hot saturated solution cools, excess dissolved solute precipitates out as crystals!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ संतृप्त विलयन एवं तापमान प्रभाव का प्रतियोगी नियम</div>
            <p><strong>परिभाषा:</strong> वह विलयन जिसमें किसी दिए गए निश्चित तापमान पर और अधिक विलेय (पदार्थ) न घोला जा सके, <strong>संतृप्त विलयन (Saturated Solution)</strong> कहलाता है।</p>
            <p><strong>तापमान का अचूक प्रभाव:</strong></p>
            <ul>
              <li><strong>गर्म करने पर (Heating):</strong> घुलनशीलता <strong>बढ़ती है</strong>! 20&deg;C पर बना संतृप्त चाशनी का घोल 60&deg;C पर गर्म करने पर और अधिक चीनी घोल सकता है!</li>
              <li><strong>ठंडा करने पर (Cooling):</strong> घुलनशीलता <strong>घटती है</strong>! गर्म संतृप्त विलयन को ठंडा करने पर अतिरिक्त घुली चीनी के रवे (Crystals) बाहर निकल आते हैं!</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-sst01",
    title: "Social Science Chapter 1 & 2: Oceans, Continents, Latitudes & Longitudes",
    titleHi: "सामाजिक विज्ञान अध्याय 1 व 2: महासागर, महाद्वीप, अक्षांश एवं देशांतर",
    desc: "NCERT Exploring Society: Earth's Geoid shape, parallels of latitude, heat zones (Torrid, Temperate, Frigid), Prime Meridian, and calculating local time and Indian Standard Time (IST).",
    descHi: "NCERT समाज की खोज: पृथ्वी का भू-आभ (Geoid) आकार, अक्षांश रेखाएं, ताप कटिबंध (उष्ण, शीतोष्ण, शीत), प्रधान मध्याह्न रेखा और देशांतर से स्थानीय समय व भारतीय मानक समय (IST) की गणना।",
    competitionEdge: "Time calculation formula 1° longitude = 4 minutes, Prime Meridian at Greenwich (0°), Indian Standard Time 82°30' E = GMT + 5:30, and International Date Line 180°.",
    competitionEdgeHi: "समय गणना सूत्र 1° देशांतर = 4 मिनट, ग्रीनविच प्रधान मध्याह्न रेखा (0°), भारतीय मानक समय 82°30' पूर्व = GMT + 5:30 और अंतर्राष्ट्रीय तिथि रेखा 180°।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Earth's Shape & Parallels of Latitude",
        headingHi: "1. एनसीईआरटी मूल पाठ: पृथ्वी का आकार, भू-अक्ष एवं प्रमुख अक्षांश वृत्त",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 1 of NCERT 'Exploring Society: India and Beyond' begins our spatial understanding of our planet. The Earth is not a perfect sphere; it is flattened at the poles and bulges at the equator—a shape uniquely called a <strong>Geoid (भू-आभ - Earth-like)</strong>.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 The Five Critical Parallels of Latitude</div>
            <ul>
              <li><strong>Equator (विषुवत वृत्त - $0^\\circ$):</strong> The largest latitude; divides Earth into Northern and Southern Hemispheres.</li>
              <li><strong>Tropic of Cancer (कर्क रेखा - $23.5^\\circ\\text{ N}$ / $23^\\circ 30'\\text{ N}$):</strong> Passes through 8 Indian states (Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram).</li>
              <li><strong>Tropic of Capricorn (मकर रेखा - $23.5^\\circ\\text{ S}$ / $23^\\circ 30'\\text{ S}$).</strong></li>
              <li><strong>Arctic Circle (उत्तर ध्रुव वृत्त - $66.5^\\circ\\text{ N}$).</strong></li>
              <li><strong>Antarctic Circle (दक्षिण ध्रुव वृत्त - $66.5^\\circ\\text{ S}$).</strong></li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! NCERT सामाजिक विज्ञान की नई पुस्तक 'समाज की खोज' पृथ्वी के भौगोलिक आधार को समझाती है। हमारी पृथ्वी एकदम गोल गेंद नहीं है, बल्कि ध्रुवों पर थोड़ी चपटी और बीच (भूमध्य रेखा) में थोड़ी उभरी हुई है। इस विशिष्ट आकार को <strong>भू-आभ (Geoid)</strong> कहते हैं।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 पृथ्वी के 5 प्रमुख अक्षांश वृत्त (कंठस्थ रखें!)</div>
            <ul>
              <li><strong>विषुवत / भूमध्य रेखा (Equator - $0^\\circ$):</strong> सबसे बड़ा अक्षांश वृत्त; पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में बांटता है।</li>
              <li><strong>कर्क रेखा (Tropic of Cancer - $23^\\circ 30'\\text{ उ.}$):</strong> भारत के 8 राज्यों (गुजरात, राजस्थान, म.प्र., छत्तीसगढ़, झारखंड, प. बंगाल, त्रिपुरा, मिजोरम) से होकर गुजरती है।</li>
              <li><strong>मकर रेखा (Tropic of Capricorn - $23^\\circ 30'\\text{ द.}$)।</strong></li>
              <li><strong>उत्तर ध्रुव वृत्त (Arctic Circle - $66^\\circ 30'\\text{ उ.}$)।</strong></li>
              <li><strong>दक्षिण ध्रुव वृत्त (Antarctic Circle - $66^\\circ 30'\\text{ द.}$)।</strong></li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Longitude, Time Calculation & IST Formula",
        headingHi: "2. सूत्र एवं नियम संग्रह: देशांतर, समय गणना एवं भारतीय मानक समय (IST) सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Longitude to Time Conversion</div>
            <p>Earth rotates $360^\\circ$ on its axis in 24 hours:</p>
            <ul>
              <li>$$1 \\text{ Hour} = \\frac{360^\\circ}{24} = \\mathbf{15^\\circ \\text{ Longitude}}$$</li>
              <li>$$1^\\circ \\text{ Longitude} = \\frac{60 \\text{ minutes}}{15} = \\mathbf{4 \\text{ Minutes}}$$</li>
              <li><strong>Direction Rule (EGA / WLS):</strong><br/>
                Moving <strong>East</strong> &rarr; Time is <strong>AHEAD (Add 4 min per degree)</strong>.<br/>
                Moving <strong>West</strong> &rarr; Time is <strong>BEHIND (Subtract 4 min per degree)</strong>.
              </li>
              <li><strong>Indian Standard Time (IST):</strong> Based on the standard meridian of $82^\\circ 30'\\text{ E}$ (Mirzapur, UP):<br/>
                $$\\text{IST} = 82.5 \\times 4 = 330 \\text{ minutes} = \\mathbf{+5 \\text{ Hours } 30 \\text{ Minutes from GMT (Greenwich)}}!$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: देशांतर एवं समय गणना का मास्टर सूत्र</div>
            <p>पृथ्वी 24 घंटे में अपनी धुरी पर $360^\\circ$ घूमती है:</p>
            <ul>
              <li>$$1 \\text{ घंटा} = \\frac{360^\\circ}{24} = \\mathbf{15^\\circ \\text{ देशांतर}}$$</li>
              <li>$$1^\\circ \\text{ देशांतर} = \\frac{60 \\text{ मिनट}}{15} = \\mathbf{4 \\text{ मिनट}}$$</li>
              <li><strong>दिशा नियम (पूर्व आगे, पश्चिम पीछे):</strong><br/>
                ग्रीनविच से <strong>पूर्व (East)</strong> जाने पर समय <strong>आगे (जोड़ें)</strong> रहता है।<br/>
                ग्रीनविच से <strong>पश्चिम (West)</strong> जाने पर समय <strong>पीछे (घटाएं)</strong> रहता है।
              </li>
              <li><strong>भारतीय मानक समय (IST):</strong> भारत का मानक देशांतर $82^\\circ 30'\\text{ पूर्व}$ (मिर्जापुर/प्रयागराज, उप्र) है:<br/>
                $$\\text{IST} = 82.5 \\times 4 = 330 \\text{ मिनट} = \\mathbf{+5 \\text{ घंटे } 30 \\text{ मिनट (ग्रीनविच GMT से आगे)}}!$$
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: The Greenwich Noon Calculation Problem",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: लंदन 12 बजे तो भारत में समय (Classic Exam Numerical)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Classic Geography Numerical in BPSC & UPSC</div>
            <p>Question: If it is 12:00 Noon at Greenwich ($0^\\circ$), what will be the local time in India ($82^\\circ 30'\\text{ E}$)?</p>
            <p><strong>Step-by-Step Solution:</strong></p>
            <ul>
              <li>Difference in Longitude = $82.5^\\circ - 0^\\circ = 82.5^\\circ$ East.</li>
              <li>Difference in Time = $82.5 \\times 4 \\text{ min} = 330 \\text{ min} = 5 \\text{ hours } 30 \\text{ min}$.</li>
              <li>Since India is East of Greenwich, we ADD time: 12:00 Noon + 5h 30m = <strong>5:30 PM (Evening)</strong>!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ BPSC व प्रतियोगी परीक्षाओं का क्लासिक न्यूमेरिकल प्रश्न</div>
            <p>प्रश्न: जब ग्रीनविच ($0^\\circ$) पर दोपहर के 12:00 बजे हों, तो भारत ($82^\\circ 30'\\text{ पूर्व}$) में क्या समय होगा?</p>
            <p><strong>शिक्षक की चरणबद्ध व्याख्या:</strong></p>
            <ul>
              <li>देशांतर का अंतर = $82.5^\\circ$ पूर्व।</li>
              <li>समय का अंतर = $82.5 \\times 4 = 330\\text{ मिनट} = 5\\text{ घंटे } 30\\text{ मिनट}$।</li>
              <li>चूंकि भारत पूर्व में है, अतः समय जुड़ेगा: दोपहर 12:00 + 5 घंटे 30 मिनट = <strong>शाम के 5:30 बजे (5:30 PM)</strong>!</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c6-hin01",
    title: "Hindi Chapter 1: भाषा, लिपि, वर्तनी एवं व्यावहारिक व्याकरण",
    titleHi: "हिन्दी अध्याय 1: भाषा, लिपि, वर्ण-विचार एवं व्यावहारिक व्याकरण",
    desc: "NCERT Malhar Hindi Chapter 1: Phonetics, classification of consonants (Sparsha, Antahstha, Ushma, Sanyukta), Varnavichhed (syllable splitting), and Tatsam-Tadbhav word roots.",
    descHi: "NCERT मल्हार हिंदी अध्याय 1: ध्वनिविज्ञान, व्यंजनों का वैज्ञानिक वर्गीकरण (स्पर्श, अंतःस्थ, ऊष्म, संयुक्त), वर्ण विच्छेद और तत्सम-तद्भव शब्दों की पहचान।",
    competitionEdge: "Sparsha vyanjan 5 vargas (Ka to Pa varga), Varnavichhed rules, Tatsam to Tadbhav sound shift patterns (Ksha to Kha/Chha), and high-frequency idioms in BPSC TRE.",
    competitionEdgeHi: "स्पर्श व्यंजन के 5 वर्ग (क-वर्ग से प-वर्ग तक 25), वर्ण विच्छेद के नियम, तत्सम से तद्भव ध्वनि परिवर्तन नियम (क्ष का ख/छ बनना) और मुहावरे।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Scientific Architecture of Devanagari Phonetics",
        headingHi: "1. एनसीईआरटी मूल पाठ: देवनागरी ध्वनिविज्ञान की वैज्ञानिक संरचना",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, the new NCERT Class 6 textbook 'Malhar' begins with the phonetic perfection of the Hindi alphabet. Unlike the English alphabet which has arbitrary spelling (e.g. 'put' vs 'but'), Devanagari is strictly phonetic: <strong>what is articulated is written, and what is written is read</strong>!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 The Five Consonant Vargas (स्पर्श व्यंजन - 25)</div>
            <ul>
              <li><strong>क-वर्ग (क, ख, ग, घ, ङ):</strong> Pronounced from Throat &rarr; <strong>कंठ्य (Velar)</strong>.</li>
              <li><strong>च-वर्ग (च, छ, ज, झ, ञ):</strong> Pronounced from Palate &rarr; <strong>तालव्य (Palatal)</strong>.</li>
              <li><strong>ट-वर्ग (ट, ठ, ड, ढ, ण):</strong> Pronounced from Hard Palate &rarr; <strong>मूर्धन्य (Retroflex)</strong>.</li>
              <li><strong>त-वर्ग (त, थ, द, ध, न):</strong> Pronounced from Teeth &rarr; <strong>दंत्य (Dental)</strong>.</li>
              <li><strong>प-वर्ग (प, फ, ब, भ, म):</strong> Pronounced from Lips &rarr; <strong>ओष्ठ्य (Labial)</strong>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! NCERT की नई कक्षा 6 हिंदी पाठ्यपुस्तक 'मल्हार' देवनागरी लिपि के वैज्ञानिक ध्वनिविज्ञान से शुरू होती है। अंग्रेजी में उच्चारण और वर्तनी में भारी अंतर होता है, लेकिन देवनागरी पूर्णतः ध्वन्यात्मक है: <strong>जो बोला जाता है वही लिखा जाता है, और जो लिखा जाता है वही पढ़ा जाता है</strong>!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 स्पर्श व्यंजन के 5 वर्ग व उच्चारण स्थान (कंठस्थ रखें!)</div>
            <ul>
              <li><strong>क-वर्ग (क, ख, ग, घ, ङ):</strong> कंठ से उच्चारित &rarr; <strong>कंठ्य</strong> ध्वनि।</li>
              <li><strong>च-वर्ग (च, छ, ज, झ, ञ):</strong> तालु से उच्चारित &rarr; <strong>तालव्य</strong> ध्वनि।</li>
              <li><strong>ट-वर्ग (ट, ठ, ड, ढ, ण):</strong> मूर्धा से उच्चारित &rarr; <strong>मूर्धन्य</strong> ध्वनि।</li>
              <li><strong>त-वर्ग (त, थ, द, ध, न):</strong> दांतों से स्पर्श &rarr; <strong>दंत्य</strong> ध्वनि।</li>
              <li><strong>प-वर्ग (प, फ, ब, भ, म):</strong> दोनों होंठों से &rarr; <strong>ओष्ठ्य</strong> ध्वनि।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Conjunct Consonants & Syllable Splitting (वर्ण विच्छेद)",
        headingHi: "2. सूत्र एवं नियम संग्रह: संयुक्त व्यंजन एवं वर्ण विच्छेद के अचूक सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: The 4 Conjunct Consonants (संयुक्त व्यंजन)</div>
            <ul>
              <li>$$\\mathbf{क्ष = क् + ष् + अ} \\quad (\\text{e.g. क्षत्रिय, परीक्षा})\\$$</li>
              <li>$$\\mathbf{त्र = त् + र् + अ} \\quad (\\text{e.g. त्रिशूल, पत्र})\\$$</li>
              <li>$$\\mathbf{ज्ञ = ज् + ञ् + अ} \\quad (\\text{e.g. ज्ञान, विज्ञान - Notice it is 'ज् + ञ्', not 'ग् + य्'!})\\$$</li>
              <li>$$\\mathbf{श्र = श् + र् + अ} \\quad (\\text{e.g. श्रम, श्रीमान})\\$$</li>
              <li><strong>Varnavichhed Example:</strong> $\\text{विद्या} = \\text{व्} + \\text{इ} + \\text{द्} + \\text{य्} + \\text{आ}$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: चारों संयुक्त व्यंजन व वर्ण विच्छेद</div>
            <ul>
              <li>$$\\mathbf{क्ष = क् + ष् + अ} \\quad (\\text{जैसे: क्षत्रिय, परीक्षा})$$</li>
              <li>$$\\mathbf{त्र = त् + र् + अ} \\quad (\\text{जैसे: त्रिशूल, मित्र})$$</li>
              <li>$$\\mathbf{ज्ञ = ज् + ञ् + अ} \\quad (\\text{परीक्षा चेतावनी: यह 'ज् + ञ्' से बनता है, 'ग् + य्' से नहीं!})$$</li>
              <li>$$\\mathbf{श्र = श् + र् + अ} \\quad (\\text{जैसे: श्रम, परिश्रम})$$</li>
              <li><strong>वर्ण विच्छेद उदाहरण:</strong> $\\text{परीक्षा} = \\text{प्} + \\text{अ} + \\text{र्} + \\text{ई} + \\text{क्} + \\text{ष्} + \\text{आ}$।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Tatsam to Tadbhav Sound Shift Rules in BPSC TRE",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: तत्सम से तद्भव पहचानने की अचूक जादुई ट्रिक्स",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Magic Rules to Identify Tatsam vs. Tadbhav</div>
            <ul>
              <li><strong>Rule 1 (क्ष &rarr; ख / छ):</strong> If a word has 'क्ष', it is 99% <strong>Tatsam</strong> (संस्कृत)! In Tadbhav, 'क्ष' changes to 'ख' or 'छ': <code>अक्षि &rarr; आँख, मक्षिका &rarr; मक्खी, क्षीर &rarr; खीर</code>.</li>
              <li><strong>Rule 2 (व &rarr; ब):</strong> Tatsam 'व' usually becomes 'ब' in Tadbhav: <code>वानर &rarr; बंदर, विवाह &rarr; ब्याह, वधू &rarr; बहू</code>.</li>
              <li><strong>Rule 3 (श &rarr; स):</strong> Talavya 'श' becomes Dantya 'स': <code>श्यामल &rarr; सांवला, शाक &rarr; साग</code>.</li>
              <li><strong>Rule 4 (ऋ and ष्):</strong> Words with 'ऋ' (कृषक, घृत) or 'ष्' (ओष्ठ, काष्ठ) are ALWAYS <strong>Tatsam</strong>!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ BPSC शिक्षक भर्ती स्पेशल: तत्सम और तद्भव पहचानने की जादुई ट्रिक्स</div>
            <ul>
              <li><strong>नियम 1 (क्ष का ख या छ बनना):</strong> जिस शब्द में 'क्ष' आ जाए, वह 99% <strong>तत्सम</strong> (संस्कृत) होता है! तद्भव में यह 'ख' या 'छ' बन जाता है: <code>अक्षि &rarr; आँख, मक्षिका &rarr; मक्खी, क्षीर &rarr; खीर, क्षेत्र &rarr; खेत</code>।</li>
              <li><strong>नियम 2 (व का ब बनना):</strong> तत्सम का 'व' तद्भव में 'ब' बन जाता है: <code>वानर &rarr; बंदर, विवाह &rarr; ब्याह, विद्युत &rarr; बिजली</code>।</li>
              <li><strong>नियम 3 (श का स बनना):</strong> तालव्य 'श' तद्भव में दंत्य 'स' हो जाता है: <code>श्यामल &rarr; सांवला, श्वशुर &rarr; ससुर, शाक &rarr; साग</code>।</li>
              <li><strong>नियम 4 (ऋ और ष् की उपस्थिति):</strong> जिन शब्दों में 'ऋ' की मात्रा (कृषक, घृत, अमृत) या 'ष्' (ओष्ठ, काष्ठ) हो, वे अनिवार्य रूप से <strong>तत्सम</strong> होते हैं!</li>
            </ul>
          </div>
        `
      }
    ]
  }
];
