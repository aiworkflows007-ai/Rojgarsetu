const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Helper to wrap solved steps
function makeSolvedCard(title, problem, steps, finalAns, pyqRef = "NCERT Exemplar & BPSC TRE / CTET") {
  const stepsHtml = steps.map((s, idx) => `
    <div class="hw-step-row">
      <span class="hw-step-bubble">${idx + 1}</span>
      <div>${s}</div>
    </div>
  `).join('');

  return `
    <div class="hw-solved-card">
      <div class="hw-solved-header">
        <span class="hw-solved-badge">📝 हाथ से हल किया गया उदाहरण (Hand-Solved Model)</span>
        <span class="hw-solved-badge" style="background:#fef3c7; color:#92400e;">📌 ${pyqRef}</span>
      </div>
      <div style="font-weight:700; color:#0f172a; margin-bottom:12px; font-size:1.05rem; line-height:1.5;">
        <strong>प्रश्न:</strong> ${problem}
      </div>
      <div class="hw-steps-container">
        ${stepsHtml}
      </div>
      <div class="hw-final-box">
        🎯 <strong>अंतिम परिणाम:</strong> ${finalAns}
      </div>
    </div>
  `;
}

// 16 Enriched Class 8 Chapters
const c8Enrichments = {
  "ncert-c8-m01": [
    {
      heading: "1. NCERT Core Narrative: The Meaning & Real-Life Sense of Rational Numbers",
      headingHi: "1. सरल भाषा में समझें: परिमेय संख्या का वास्तविक अर्थ व दैनिक जीवन",
      contentHtml: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
          <div class="mentor-msg">
            Dear aspirants, why do we need rational numbers? Natural numbers count sheep and rupees. Integers count debt and freezing weather. But what when you divide 3 chapatis among 4 children? You get 3/4! Any number that can be expressed as <strong>p/q</strong> where p and q are integers and <strong>q &ne; 0</strong> is a rational number.
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 Golden Rule of Rational Numbers</div>
          <p>Every natural number, whole number, and integer is a rational number because any integer <em>n</em> can be written as <em>n/1</em>. Zero is also a rational number (0/1). But <strong>division by zero is undefined</strong>, so q cannot be 0!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
          <div class="mentor-msg">
            प्यारे विद्यार्थियों! परिमेय संख्या की आवश्यकता क्यों पड़ी? प्राकृत संख्याएँ वस्तुओं को गिनने के काम आती हैं (1, 2, 3)। पूर्णांक उधारी या शून्य से नीचे तापमान बताते हैं (-5, 0, 5)। लेकिन जब 3 रोटियों को 4 बच्चों में बराबर बांटना हो, तब हमें <strong>3/4</strong> की जरूरत पड़ती है! वह प्रत्येक संख्या जिसे <strong>\\( \\frac{p}{q} \\)</strong> के रूप में लिखा जा सके, जहाँ p और q पूर्णांक हैं और <strong>q &ne; 0</strong>, <mark class="hw-highlight yellow">परिमेय संख्या (Rational Number)</mark> कहलाती है।
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 टॉपर हस्तलिखित नोट्स: क्या शून्य परिमेय है?</div>
          <p>हाँ! <strong>शून्य (0) एक परिमेय संख्या है</strong> क्योंकि इसे \\( \\frac{0}{1} \\) लिखा जा सकता है। प्रत्येक प्राकृत संख्या और पूर्णांक भी परिमेय संख्या है। लेकिन <strong>किसी भी संख्या को शून्य से भाग नहीं दिया जा सकता (Undefined)</strong>, इसलिए हर (denominator) कभी 0 नहीं हो सकता!</p>
        </div>
      `
    },
    {
      heading: "2. Core Handwritten Properties: Closure, Commutative & Distributive Laws",
      headingHi: "2. मुख्य हस्तलिखित नियम: संवृत, क्रमविनिमेय, साहचर्य व वितरकता नियम",
      contentHtml: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 Key Algebraic Properties Matrix</div>
          <p><strong>1. Closure:</strong> Rational numbers are closed under +, -, &times;. Not closed under &divide; because division by 0 is not defined.</p>
          <p><strong>2. Commutativity:</strong> a + b = b + a and a &times; b = b &times; a. Subtraction and division are NOT commutative!</p>
          <p><strong>3. Distributivity:</strong> a(b + c) = ab + ac. This is the master tool for fast competitive multiplication!</p>
          <p><strong>4. Identities:</strong> 0 is Additive Identity (a + 0 = a). 1 is Multiplicative Identity (a &times; 1 = a).</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 हस्तलिखित नियम व फॉर्मूला चार्ट</div>
          <table class="teacher-formula-table">
            <thead>
              <tr>
                <th>प्रगुण (Property)</th>
                <th>योग (+)</th>
                <th>वकलन (-)</th>
                <th>गुणन (&times;)</th>
                <th>भाग (&divide;)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>संवृत (Closure)</strong></td>
                <td>✅ संवृत है</td>
                <td>✅ संवृत है</td>
                <td>✅ संवृत है</td>
                <td>❌ संवृत नहीं (0 से भाग)</td>
              </tr>
              <tr>
                <td><strong>क्रमविनिमेय (Commutative)</strong></td>
                <td>✅ a + b = b + a</td>
                <td>❌ a - b &ne; b - a</td>
                <td>✅ ab = ba</td>
                <td>❌ a &divide; b &ne; b &divide; a</td>
              </tr>
              <tr>
                <td><strong>साहचर्य (Associative)</strong></td>
                <td>✅ a+(b+c) = (a+b)+c</td>
                <td>❌ साहचर्य नहीं</td>
                <td>✅ a(bc) = (ab)c</td>
                <td>❌ साहचर्य नहीं</td>
              </tr>
              <tr>
                <td><strong>तत्समक (Identity)</strong></td>
                <td>0 योज्य तत्समक है</td>
                <td>—</td>
                <td>1 गुणात्मक तत्समक है</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      heading: "3. Hand-Solved Step-by-Step Exemplar Problems",
      headingHi: "3. हाथ से हल किया गया उदाहरण: वितरकता नियम व बीच की परिमेय संख्याएँ",
      contentHtml: `
        ${makeSolvedCard(
          "Using Properties",
          "Find the value of \\( -\\frac{2}{3} \\times \\frac{3}{5} + \\frac{5}{2} - \\frac{3}{5} \\times \\frac{1}{6} \\) using appropriate properties.",
          [
            "<strong>Step 1 (Rearranging by Commutative Law):</strong> Bring terms with common factor \\( \\frac{3}{5} \\) together: <br/>\\( = \\left(-\\frac{2}{3} \\times \\frac{3}{5}\\right) - \\left(\\frac{3}{5} \\times \\frac{1}{6}\\right) + \\frac{5}{2} \\)",
            "<strong>Step 2 (Applying Distributive Property):</strong> Take \\( -\\frac{3}{5} \\) common: <br/>\\( = -\\frac{3}{5} \\left( \\frac{2}{3} + \\frac{1}{6} \\right) + \\frac{5}{2} \\)",
            "<strong>Step 3 (Solving bracket):</strong> LCM of 3 and 6 is 6. \\( \\frac{4 + 1}{6} = \\frac{5}{6} \\). <br/>Now: \\( -\\frac{3}{5} \\times \\frac{5}{6} + \\frac{5}{2} = -\\frac{1}{2} + \\frac{5}{2} \\)",
            "<strong>Step 4 (Final Addition):</strong> \\( \\frac{-1 + 5}{2} = \\frac{4}{2} = 2 \\)."
          ],
          "2",
          "NCERT Class 8 Ex 1.1 Q1"
        )}
      `,
      contentHtmlHi: `
        ${makeSolvedCard(
          "गुणधर्मों का प्रयोग",
          "उचित गुणधर्मों के उपयोग से मान ज्ञात कीजिए: \\( -\\frac{2}{3} \\times \\frac{3}{5} + \\frac{5}{2} - \\frac{3}{5} \\times \\frac{1}{6} \\)",
          [
            "<strong>चरण 1 (क्रमविनिमेयता से पुनर्व्यवस्थित करना):</strong> उभयनिष्ठ पद \\( \\frac{3}{5} \\) वाले पदों को एक साथ लाएँ: <br/>\\( = \\left(-\\frac{2}{3} \\times \\frac{3}{5}\\right) - \\left(\\frac{3}{5} \\times \\frac{1}{6}\\right) + \\frac{5}{2} \\)",
            "<strong>चरण 2 (वितरकता नियम लागू करना):</strong> \\( -\\frac{3}{5} \\) को उभयनिष्ठ (common) लें: <br/>\\( = -\\frac{3}{5} \\left[ \\frac{2}{3} + \\frac{1}{6} \\right] + \\frac{5}{2} \\)",
            "<strong>चरण 3 (कोष्ठक हल करना):</strong> 3 और 6 का ल.स. 6 है: \\( \\frac{4 + 1}{6} = \\frac{5}{6} \\). <br/>अब: \\( -\\frac{3}{5} \\times \\frac{5}{6} + \\frac{5}{2} = -\\frac{1}{2} + \\frac{5}{2} \\)",
            "<strong>चरण 4 (अंतिम योग):</strong> \\( \\frac{-1 + 5}{2} = \\frac{4}{2} = 2 \\)."
          ],
          "2",
          "NCERT कक्षा 8 प्रश्नावली 1.1 प्रश्न 1"
        )}
      `
    },
    {
      heading: "4. Topper's Exam Traps & 5-Second Shortcut Secrets",
      headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप (5-Second Exam Secrets)",
      contentHtml: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ Competitive Exam Traps to Beware Of</div>
          <p><strong>Trap 1: Reciprocal of 0:</strong> Does 0 have a reciprocal? <strong>NEVER!</strong> 1/0 is undefined. Only 1 and -1 are their own reciprocals.</p>
          <p><strong>Trap 2: Numbers Between Two Rationals:</strong> How many rational numbers lie between 3/5 and 4/5? Students often say 'none', but the correct answer is <strong>INFINITELY MANY (अनंत)</strong>!</p>
          <p><strong>Shortcut (Mean Method):</strong> A rational number between a and b is always \\( \\frac{a + b}{2} \\).</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ प्रतियोगी परीक्षा ट्रैप अलर्ट! (सावधान रहें)</div>
          <p><strong>ट्रैप 1 (शून्य का व्युत्क्रम):</strong> क्या 0 का कोई व्युत्क्रम (reciprocal) होता है? <strong>कदापि नहीं!</strong> \\( \\frac{1}{0} \\) अपरिभाषित है। केवल <strong>1 और -1 ऐसी संख्याएँ हैं जो स्वयं का व्युत्क्रम हैं</strong>।</p>
          <p><strong>ट्रैप 2 (बीच की संख्याएँ):</strong> 3/5 और 4/5 के बीच कितनी परिमेय संख्याएँ होती हैं? छात्र प्रायः 'कोई नहीं' चुनते हैं, जबकि सही उत्तर है <strong>अनंत (Infinitely Many)</strong>!</p>
          <p><strong>शॉर्टकट (माध्य विधि):</strong> किन्हीं दो संख्याओं a और b के बीच ठीक मध्य की संख्या सदैव \\( \\frac{a + b}{2} \\) होती है।</p>
        </div>
      `
    }
  ],

  "ncert-c8-m02": [
    {
      heading: "1. Understanding Linear Equations: The Balance Scale Analogy",
      headingHi: "1. सरल भाषा में समझें: तराजू का नियम व एक चर वाले रैखिक समीकरण",
      contentHtml: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
          <div class="mentor-msg">
            An equation is like a balanced weighing scale. Whatever operation you perform on the Left Hand Side (LHS), you must perform identically on the Right Hand Side (RHS). In a 'Linear' equation, the highest power of the variable is strictly 1!
          </div>
        </div>
        <div class="hw-sticky-note cyan">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 Golden Rule of Transposition (पक्षांतरण)</div>
          <p>When a term crosses the equal sign (=): <br/>&bull; (+) becomes (-) <br/>&bull; (-) becomes (+) <br/>&bull; (&times;) becomes (&divide;) <br/>&bull; (&divide;) becomes (&times;)</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
          <div class="mentor-msg">
            समीकरण को सब्जी वाले के तराजू की तरह समझें! यदि तराजू संतुलित है, तो दोनों पलड़ों में समान वजन जोड़ने या घटाने से संतुलन नहीं बिगड़ता। 'रैखिक' (Linear) का अर्थ है कि अज्ञात चर (x, y, t) की <strong>अधिकतम घात सदैव 1</strong> होती है (जैसे 2x + 3 = 7, लेकिन \\(x^2\\) नहीं)।
          </div>
        </div>
        <div class="hw-sticky-note cyan">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 पक्षांतरण (Transposition) का अटल नियम</div>
          <p>जब कोई पद बराबर चिन्ह (=) को पार करता है तो उसका चिन्ह उलट जाता है:<br/>&bull; प्लस (+) बन जाता है माइनस (-)<br/>&bull; माइनस (-) बन जाता है प्लस (+)<br/>&bull; गुणा (&times;) बन जाता है भाग (&divide;)<br/>&bull; भाग (&divide;) बन जाता है गुणा (&times;)</p>
        </div>
      `
    },
    {
      heading: "2. Cross Multiplication & Solving Equations with Variables on Both Sides",
      headingHi: "2. मुख्य नियम: दोनों पक्षों में चर व वज्र-गुणन (Cross-Multiplication)",
      contentHtml: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 Standard Form & Cross Multiplication Rule</div>
          <p>If \\( \\frac{ax + b}{cx + d} = \\frac{m}{n} \\), then by cross-multiplication: <br/><strong>n &times; (ax + b) = m &times; (cx + d)</strong></p>
          <p>Collect all variable terms on LHS and constants on RHS to isolate x!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 वज्र-गुणन (Cross-Multiplication) सूत्र</div>
          <p>जब समीकरण भिन्न रूप में हो: \\( \\frac{ax + b}{cx + d} = \\frac{p}{q} \\), तब तिरछा गुणा करें:<br/>
          <strong>q &times; (ax + b) = p &times; (cx + d)</strong></p>
          <p>इसके बाद सभी x वाले पदों को बाईं ओर (LHS) और संख्याओं को दाईं ओर (RHS) ले जाकर x का मान ज्ञात करें।</p>
        </div>
      `
    },
    {
      heading: "3. Hand-Solved Step-by-Step Exemplar Word Problem",
      headingHi: "3. हाथ से हल किया गया उदाहरण: आयु संबंधी वास्तविक प्रश्न",
      contentHtml: `
        ${makeSolvedCard(
          "Age Word Problem",
          "Sahil's mother's present age is 3 times Sahil's present age. After 5 years, the sum of their ages will be 66 years. Find their present ages.",
          [
            "<strong>Step 1 (Let the variable):</strong> Let Sahil's present age = x years. <br/>Then mother's present age = 3x years.",
            "<strong>Step 2 (Ages after 5 years):</strong> Sahil will be (x + 5) years. Mother will be (3x + 5) years.",
            "<strong>Step 3 (Forming the equation):</strong> Sum of their ages = 66. <br/>\\( (x + 5) + (3x + 5) = 66 \\implies 4x + 10 = 66 \\)",
            "<strong>Step 4 (Transposing and Solving):</strong> \\( 4x = 66 - 10 = 56 \\implies x = 56 / 4 = 14 \\).",
            "<strong>Step 5 (Finding both ages):</strong> Sahil = 14 years, Mother = 3 &times; 14 = 42 years."
          ],
          "Sahil = 14 years, Mother = 42 years",
          "NCERT Class 8 Word Problems & SSC/CTET Favorite"
        )}
      `,
      contentHtmlHi: `
        ${makeSolvedCard(
          "आयु संबंधी प्रश्न",
          "साहिल की माँ की वर्तमान आयु साहिल की वर्तमान आयु की 3 गुनी है। 5 वर्ष बाद उन दोनों की आयु का योग 66 वर्ष हो जाएगा। दोनों की वर्तमान आयु ज्ञात कीजिए।",
          [
            "<strong>चरण 1 (माना अज्ञात चर x):</strong> माना साहिल की वर्तमान आयु = x वर्ष। <br/>तब माँ की वर्तमान आयु = 3x वर्ष।",
            "<strong>चरण 2 (5 वर्ष बाद दोनों की आयु):</strong> साहिल की आयु = (x + 5) वर्ष, माँ की आयु = (3x + 5) वर्ष।",
            "<strong>चरण 3 (समीकरण बनाना):</strong> प्रश्नानुसार दोनों का योग = 66 वर्ष। <br/>\\( (x + 5) + (3x + 5) = 66 \\implies 4x + 10 = 66 \\)",
            "<strong>चरण 4 (पक्षांतरण व हल):</strong> \\( 4x = 66 - 10 = 56 \\implies x = \\frac{56}{4} = 14 \\).",
            "<strong>चरण 5 (अंतिम उत्तर):</strong> साहिल की वर्तमान आयु = 14 वर्ष, माँ की वर्तमान आयु = 3 &times; 14 = 42 वर्ष।"
          ],
          "साहिल = 14 वर्ष, माँ = 42 वर्ष (जाँच: 5 वर्ष बाद 19 + 47 = 66 वर्ष ✅)",
          "NCERT कक्षा 8 उदाहरण 5 व प्रतियोगी परीक्षा प्रश्न"
        )}
      `
    },
    {
      heading: "4. Topper's Exam Traps: Two-Digit Numbers & Units Digit Reversal",
      headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: दो अंकों की संख्या (10x + y)",
      contentHtml: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ The Two-Digit Number Trap!</div>
          <p>Never write a two-digit number with digits x and y as 'xy' (that means x multiplied by y!). <br/>Always express as: <strong>Original Number = 10x + y</strong>. <br/>When digits are reversed: <strong>Reversed Number = 10y + x</strong>.</p>
          <p><strong>5-Second Verification Hack:</strong> Always substitute your answer back into the original word problem text, not into your algebraic equation!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: दो अंकों की संख्या का नियम</div>
          <p>परीक्षक अक्सर पूछते हैं: 'दो अंकों की संख्या के अंकों का स्थान बदलने पर...'. छात्र गलती से संख्या को 'xy' मान लेते हैं जो गलत है! <br/><strong>मूल संख्या = 10x + y</strong> (जहाँ x दहाई और y इकाई अंक है)। <br/><strong>अंक पलटने पर संख्या = 10y + x</strong>।</p>
          <p><strong>टॉपर वेरिफिकेशन ट्रिक:</strong> परीक्षा में समय बचाने के लिए प्राप्त उत्तर को सीधे प्रश्न के कथन में रखकर तुरंत सत्यापित करें!</p>
        </div>
      `
    }
  ],

  "ncert-c8-m03": [
    {
      heading: "1. Polygons: Classification, Interior and Exterior Angles",
      headingHi: "1. सरल भाषा में समझें: बहुभुज व अंतः तथा बाह्य कोणों का जादू",
      contentHtml: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
          <div class="mentor-msg">
            A simple closed curve made up of only line segments is called a polygon. Triangle (3), Quadrilateral (4), Pentagon (5), Hexagon (6), Octagon (8). If all interior angles are less than 180&deg;, it is Convex. If any angle is reflex (> 180&deg;), it is Concave!
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 Universal Exterior Angle Theorem</div>
          <p>No matter how many sides a polygon has (3, 4, 100, or 1000 sides!), the <strong>sum of its exterior angles is ALWAYS 360&deg;</strong>!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
          <div class="mentor-msg">
            केवल रेखाखंडों से बनी सरल बंद आकृति को <strong>बहुभुज (Polygon)</strong> कहते हैं। त्रिभुज (3 भुजाएँ), चतुर्भुज (4), पंचभुज (5), षट्भुज (6)। यदि सभी अंतःकोण 180&deg; से कम हों और कोई कोना अंदर की ओर न धंसा हो, तो वह <strong>उत्तल बहुभुज (Convex)</strong> कहलाता है।
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 बाह्य कोणों का सार्वभौमिक नियम</div>
          <p>चाहे त्रिभुज हो, चतुर्भुज हो या 100 भुजाओं वाला बहुभुज—किसी भी बहुभुज के <strong>सभी बाह्य कोणों का योग सदैव 360&deg;</strong> होता है!</p>
        </div>
      `
    },
    {
      heading: "2. Master Formulas: Angle Sum, Number of Diagonals & Regular Polygons",
      headingHi: "2. मुख्य हस्तलिखित सूत्र: अंतःकोण योग, विकर्णों की संख्या व सम बहुभुज",
      contentHtml: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 Polygon Master Formulas</div>
          <p><strong>1. Sum of Interior Angles:</strong> \\( (n - 2) \\times 180^\\circ \\)</p>
          <p><strong>2. Each Interior Angle of Regular Polygon:</strong> \\( \\frac{(n - 2) \\times 180^\\circ}{n} = 180^\\circ - \\text{Exterior Angle} \\)</p>
          <p><strong>3. Each Exterior Angle:</strong> \\( \\frac{360^\\circ}{n} \\)</p>
          <p><strong>4. Number of Diagonals:</strong> \\( \\frac{n(n - 3)}{2} \\) (Favorite formula in competitive exams!)</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 बहुभुज के अचूक हस्तलिखित सूत्र</div>
          <table class="teacher-formula-table">
            <thead>
              <tr>
                <th>अवधारणा</th>
                <th>सूत्र (n भुजाओं के लिए)</th>
                <th>उदाहरण (षट्भुज n = 6)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>अंतःकोणों का कुल योग</strong></td>
                <td>\\( (n - 2) \\times 180^\\circ \\)</td>
                <td>(6-2) &times; 180&deg; = 720&deg;</td>
              </tr>
              <tr>
                <td><strong>बाह्य कोणों का कुल योग</strong></td>
                <td>सदैव 360&deg;</td>
                <td>360&deg;</td>
              </tr>
              <tr>
                <td><strong>सम बहुभुज का प्रत्येक बाह्य कोण</strong></td>
                <td>\\( \\frac{360^\\circ}{n} \\)</td>
                <td>360&deg; / 6 = 60&deg;</td>
              </tr>
              <tr>
                <td><strong>सम बहुभुज का प्रत्येक अंतःकोण</strong></td>
                <td>\\( 180^\\circ - \\frac{360^\\circ}{n} \\)</td>
                <td>180&deg; - 60&deg; = 120&deg;</td>
              </tr>
              <tr>
                <td><strong>विकर्णों (Diagonals) की संख्या</strong></td>
                <td>\\( \\frac{n(n - 3)}{2} \\)</td>
                <td>6(3)/2 = 9 विकर्ण</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      heading: "3. Hand-Solved Step-by-Step Exemplar: Exterior Angles & Sides",
      headingHi: "3. हाथ से हल किया गया उदाहरण: भुजाओं की संख्या व समांतर चतुर्भुज",
      contentHtml: `
        ${makeSolvedCard(
          "Finding Number of Sides",
          "Find the number of sides of a regular polygon whose each exterior angle has a measure of 45&deg;.",
          [
            "<strong>Step 1 (Recall Formula):</strong> Total measure of all exterior angles = 360&deg;.",
            "<strong>Step 2 (Measure of each exterior angle):</strong> Given = 45&deg;.",
            "<strong>Step 3 (Calculate sides n):</strong> \\( n = \\frac{360^\\circ}{\\text{measure of each exterior angle}} = \\frac{360^\\circ}{45^\\circ} \\).",
            "<strong>Step 4 (Division):</strong> \\( 360 / 45 = 8 \\). The polygon is a regular octagon."
          ],
          "8 sides (अष्टभुज / Regular Octagon)",
          "NCERT Class 8 Ex 3.2 Q2"
        )}
      `,
      contentHtmlHi: `
        ${makeSolvedCard(
          "भुजाओं की संख्या ज्ञात करना",
          "एक सम बहुभुज की भुजाओं की संख्या ज्ञात कीजिए जिसका प्रत्येक बाह्य कोण 45&deg; का है।",
          [
            "<strong>चरण 1 (मूल सूत्र स्मरण):</strong> किसी भी सम बहुभुज के सभी बाह्य कोणों का योग = 360&deg;।",
            "<strong>चरण 2 (दिए गए मान):</strong> प्रत्येक बाह्य कोण का माप = 45&deg;।",
            "<strong>चरण 3 (भुजाओं की संख्या n):</strong> \\( n = \\frac{360^\\circ}{\\text{प्रत्येक बाह्य कोण}} = \\frac{360^\\circ}{45^\\circ} \\)",
            "<strong>चरण 4 (गणना):</strong> \\( \\frac{360}{45} = 8 \\). अतः बहुभुज में 8 भुजाएँ हैं (अष्टभुज)।"
          ],
          "8 भुजाएँ (अष्टभुज / Octagon)",
          "NCERT कक्षा 8 प्रश्नावली 3.2 प्रश्न 2"
        )}
      `
    },
    {
      heading: "4. The Quadrilateral Family Tree & Diagonal Invariants",
      headingHi: "4. चतुर्भुज परिवार चार्ट व विकर्णों के गुणधर्म (Exam Special)",
      contentHtml: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ Special Quadrilaterals & Diagonal Properties</div>
          <p><strong>Parallelogram:</strong> Opposite sides equal, opposite angles equal, diagonals BISECT each other.</p>
          <p><strong>Rhombus (समचतुर्भुज):</strong> All 4 sides equal. Diagonals bisect each other at <strong>RIGHT ANGLES (90&deg;)</strong>!</p>
          <p><strong>Rectangle (आयत):</strong> Diagonals are EQUAL and bisect each other.</p>
          <p><strong>Square (वर्ग):</strong> King of all! All sides equal, all angles 90&deg;, diagonals EQUAL and bisect at RIGHT ANGLES (90&deg;)!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ विशेष चतुर्भुजों के विकर्ण गुणधर्म (सीधे पूछे जाने वाले प्रश्न)</div>
          <p><strong>समांतर चतुर्भुज:</strong> सम्मुख भुजाएँ व कोण बराबर, विकर्ण एक-दूसरे को <strong>समद्विभाजित (bisect)</strong> करते हैं।</p>
          <p><strong>समचतुर्भुज (Rhombus):</strong> चारों भुजाएँ बराबर, विकर्ण एक-दूसरे को <strong>90&deg; (समकोण) पर समद्विभाजित</strong> करते हैं!</p>
          <p><strong>आयत (Rectangle):</strong> सभी कोण 90&deg;, <strong>विकर्ण आपस में बराबर होते हैं</strong> और परस्पर समद्विभाजित करते हैं।</p>
          <p><strong>वर्ग (Square):</strong> सभी गुणों का राजा! चारों भुजाएँ बराबर, चारों कोण 90&deg;, विकर्ण <strong>बराबर भी होते हैं और 90&deg; पर समद्विभाजित</strong> भी करते हैं!</p>
        </div>
      `
    }
  ],

  "ncert-c8-m04": [
    {
      heading: "1. Data Organisation, Grouping and Class Intervals",
      headingHi: "1. सरल भाषा में समझें: आँकड़ों का संगठन, वर्ग अंतराल व बारंबारता",
      contentHtml: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
          <div class="mentor-msg">
            Raw data is confusing. To understand large data (like exam scores of 1000 candidates), we group them into Class Intervals: 0-10, 10-20, 20-30. In interval 10-20: 10 is the Lower Limit, 20 is the Upper Limit. The difference (20 - 10 = 10) is the Class Width / Size.
          </div>
        </div>
        <div class="hw-sticky-note cyan">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 Where does 20 go?</div>
          <p>In continuous intervals (0-10, 10-20, 20-30), the upper limit is NOT included! A score of 20 goes into interval <strong>20-30</strong>, not 10-20!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
          <div class="mentor-msg">
            कच्चे आँकड़े (Raw data) बिखरे हुए होते हैं। जब हजारों परीक्षार्थियों के अंकों को समझना हो, तो हम उन्हें <strong>वर्ग अंतरालों (Class Intervals)</strong> में समूहित करते हैं (जैसे 0-10, 10-20, 20-30)। वर्ग 10-20 में 10 निम्न वर्ग सीमा (Lower limit) और 20 उच्च वर्ग सीमा (Upper limit) है। दोनों का अंतर (20 - 10 = 10) <strong>वर्ग माप (Class size)</strong> कहलाता है।
          </div>
        </div>
        <div class="hw-sticky-note cyan">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 20 किस वर्ग में जाएगा?</div>
          <p>सतत अंतरालों में उच्च सीमा को उस वर्ग में शामिल नहीं किया जाता। अतः 20 अंक प्राप्त करने वाले छात्र को 10-20 में नहीं बल्कि <strong>20-30</strong> में गिना जाएगा!</p>
        </div>
      `
    },
    {
      heading: "2. Pie Chart (Circle Graph) & Central Angle Formula",
      headingHi: "2. पाई चार्ट (वृत्त आलेख) व केंद्रीय कोण (Central Angle) का अचूक सूत्र",
      contentHtml: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 Central Angle Master Formula</div>
          <p>A circle total angle is 360&deg;. Each sector's angle represents its proportion:</p>
          <p style="font-size:1.15rem; font-weight:800; color:#1e40af;">
            \\( \\text{Central Angle} = \\left( \\frac{\\text{Value of Component}}{\\text{Total Value}} \\right) \\times 360^\\circ \\)
          </p>
          <p>If percentages are given: \\( \\text{Angle} = \\text{Percentage} \\times 3.6^\\circ \\) (e.g. 25% = 25 &times; 3.6 = 90&deg;).</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 पाई चार्ट केंद्रीय कोण का मास्टर सूत्र</div>
          <p>वृत्त के केंद्र पर कुल कोण 360&deg; होता है। किसी भी मद का त्रिज्यखंड कोण (Sector Angle) निकालने का सूत्र:</p>
          <p style="font-size:1.15rem; font-weight:800; color:#1e40af;">
            \\( \\text{केंद्रीय कोण} = \\left( \\frac{\\text{घटक का मान}}{\\text{कुल मान}} \\right) \\times 360^\\circ \\)
          </p>
          <p><strong>प्रतिशत से कोण ट्रिक:</strong> यदि प्रतिशत दिया हो, तो सीधे 3.6 से गुणा करें! जैसे 25% = 25 &times; 3.6 = 90&deg; (समकोण)।</p>
        </div>
      `
    },
    {
      heading: "3. Hand-Solved Step-by-Step Exemplar: Probability & Pie Chart",
      headingHi: "3. हाथ से हल किया गया उदाहरण: केंद्रीय कोण व प्रायिकता गणना",
      contentHtml: `
        ${makeSolvedCard(
          "Central Angle Calculation",
          "In a school of 720 students, 180 choose Cricket, 240 choose Football, and the rest choose Badminton. Find the central angle for Badminton in a pie chart.",
          [
            "<strong>Step 1 (Find Badminton students):</strong> Total = 720. Cricket + Football = 180 + 240 = 420. <br/>Badminton = 720 - 420 = 300 students.",
            "<strong>Step 2 (Apply Formula):</strong> \\( \\text{Angle} = \\frac{300}{720} \\times 360^\\circ \\).",
            "<strong>Step 3 (Simplify):</strong> Notice \\( \\frac{360}{720} = \\frac{1}{2} \\). So \\( \\text{Angle} = \\frac{300}{2} = 150^\\circ \\)."
          ],
          "150&deg;",
          "NCERT Class 8 Pie Chart Exemplar"
        )}
      `,
      contentHtmlHi: `
        ${makeSolvedCard(
          "केंद्रीय कोण की गणना",
          "720 विद्यार्थियों के एक विद्यालय में 180 क्रिकेट, 240 फुटबॉल और शेष बैडमिंटन पसंद करते हैं। पाई चार्ट में बैडमिंटन का केंद्रीय कोण ज्ञात कीजिए।",
          [
            "<strong>चरण 1 (बैडमिंटन के छात्रों की संख्या):</strong> कुल छात्र = 720। क्रिकेट + फुटबॉल = 180 + 240 = 420। <br/>बैडमिंटन के छात्र = 720 - 420 = 300।",
            "<strong>चरण 2 (सूत्र लागू करना):</strong> \\( \\text{केंद्रीय कोण} = \\frac{300}{720} \\times 360^\\circ \\)",
            "<strong>चरण 3 (गणना):</strong> \\( \\frac{360}{720} = \\frac{1}{2} \\), अतः \\( \\text{कोण} = \\frac{300}{2} = 150^\\circ \\)।"
          ],
          "150&deg;",
          "NCERT कक्षा 8 उदाहरण 2"
        )}
      `
    },
    {
      heading: "4. Probability Basics & Dice/Card Traps",
      headingHi: "4. प्रायिकता (Probability) के नियम व ताश/पासे के महत्वपूर्ण प्रश्न",
      contentHtml: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ Probability Golden Bounds & Dice Traps</div>
          <p><strong>Formula:</strong> \\( P(E) = \\frac{\\text{Favourable Outcomes}}{\\text{Total Possible Outcomes}} \\)</p>
          <p><strong>Bounds:</strong> For any event, <strong>0 &le; P(E) &le; 1</strong>. Probability can NEVER be negative or greater than 1!</p>
          <p><strong>Die Toss (Single Die):</strong> Outcomes = {1, 2, 3, 4, 5, 6}. <br/>&bull; Prime numbers = {2, 3, 5} &rarr; P = 3/6 = 1/2. <br/>&bull; Remember: <strong>1 is NOT a prime number!</strong></p>
        </div>
      `,
      contentHtmlHi: `
        <div class="exam-trap-box">
          <div class="trap-title">⚠️ प्रायिकता के सार्वभौमिक नियम व पासे का ट्रैप</div>
          <p><strong>प्रायिकता सूत्र:</strong> \\( P(E) = \\frac{\\text{अनुकूल परिणामों की संख्या}}{\\text{कुल संभावित परिणामों की संख्या}} \\)</p>
          <p><strong>सीमा:</strong> किसी भी घटना की प्रायिकता सदैव <strong>0 और 1 के बीच</strong> होती है (\\( 0 \\le P(E) \\le 1 \\))। प्रायिकता कभी ऋणात्मक या 1 से बड़ी नहीं हो सकती!</p>
          <p><strong>पासे (Die) का ट्रैप:</strong> 1 पासा फेंकने पर कुल परिणाम = 6। अभाज्य संख्या आने की प्रायिकता: अभाज्य संख्याएँ {2, 3, 5} हैं &rarr; \\( P = \\frac{3}{6} = \\frac{1}{2} \\)। <br/>याद रखें: <strong>1 अभाज्य संख्या नहीं है!</strong></p>
        </div>
      `
    }
  ],

  "ncert-c8-m05": [
    {
      heading: "1. Properties of Square Numbers & Unit Digit Rules",
      headingHi: "1. सरल भाषा में समझें: पूर्ण वर्ग संख्या की पहचान व इकाई अंक का जादू",
      contentHtml: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
          <div class="mentor-msg">
            A natural number n is a perfect square if n = m&sup2;. Can a number ending in 7 be a square? NEVER! The unit digit of squares can only be 0, 1, 4, 5, 6, 9. Numbers ending in <strong>2, 3, 7, 8 are NEVER perfect squares</strong>!
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 Zeroes Rule</div>
          <p>A perfect square can only have an <strong>EVEN number of zeroes</strong> at the end (e.g. 100, 40000, 900). A number ending in odd zeroes (like 1000 or 90) is NEVER a square!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
          <div class="mentor-msg">
            जब किसी संख्या को स्वयं उसी से गुणा किया जाता है, तो प्राप्त संख्या <strong>पूर्ण वर्ग (Square)</strong> कहलाती है (जैसे 5 &times; 5 = 25)। क्या 1057 एक पूर्ण वर्ग हो सकता है? <strong>कदापि नहीं!</strong> पूर्ण वर्ग संख्याओं के इकाई अंक पर केवल 0, 1, 4, 5, 6, 9 आ सकते हैं। जिस संख्या के अंत में <strong>2, 3, 7 या 8</strong> हो, वह कभी भी पूर्ण वर्ग नहीं हो सकती!
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 शून्यों का नियम</div>
          <p>किसी भी पूर्ण वर्ग संख्या के अंत में शून्यों की संख्या सदैव <strong>सम (Even: 2, 4, 6 शून्य)</strong> होती है (जैसे 100, 900, 160000)। विषम शून्यों वाली संख्या (जैसे 10, 1000, 90) कभी पूर्ण वर्ग नहीं हो सकती!</p>
        </div>
      `
    },
    {
      heading: "2. Finding Square Roots: Prime Factorisation & Long Division Method",
      headingHi: "2. वर्गमूल ज्ञात करने की विधियाँ: अभाज्य गुणनखंडन व दीर्घ भाग विधि",
      contentHtml: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 Division Method for Large Square Roots</div>
          <p><strong>Step 1:</strong> Place bars over pairs of digits from right to left (e.g. 529 &rarr; 5 29).</p>
          <p><strong>Step 2:</strong> Find largest square &le; first pair (2&sup2; = 4 &le; 5). Remainder = 1.</p>
          <p><strong>Step 3:</strong> Bring down next pair (29) &rarr; new dividend = 129. Double divisor (2+2 = 4_).</p>
          <p><strong>Step 4:</strong> Find digit: 43 &times; 3 = 129! So \\( \\sqrt{529} = 23 \\).</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 भाग विधि (Long Division Method) से वर्गमूल</div>
          <p><strong>चरण 1:</strong> दाईं ओर से 2-2 अंकों के जोड़े बनाकर ऊपर बार (bar) लगाएँ (जैसे 4096 &rarr; 40 96)।</p>
          <p><strong>चरण 2:</strong> पहले जोड़े (40) से छोटी या बराबर सबसे बड़ी वर्ग संख्या चुनें: 6&sup2; = 36। शेष = 4।</p>
          <p><strong>चरण 3:</strong> अगला जोड़ा (96) नीचे लाएँ &rarr; नया भाज्य = 496। भाजक को दोगुना करें (6 + 6 = 12)।</p>
          <p><strong>चरण 4:</strong> 12 के आगे ऐसा अंक खोजें: 124 &times; 4 = 496! अतः \\( \\sqrt{4096} = 64 \\)।</p>
        </div>
      `
    },
    {
      heading: "3. Hand-Solved Step-by-Step Exemplar: Pythagorean Triplets",
      headingHi: "3. हाथ से हल किया गया उदाहरण: पाइथागोरस त्रिक (Pythagorean Triplet)",
      contentHtml: `
        ${makeSolvedCard(
          "Pythagorean Triplet",
          "Write a Pythagorean triplet whose smallest member is 8.",
          [
            "<strong>Step 1 (Formula for Triplet):</strong> For any natural number m > 1, the triplet is \\( (2m, m^2 - 1, m^2 + 1) \\).",
            "<strong>Step 2 (Equate smallest member to 2m):</strong> \\( 2m = 8 \\implies m = 4 \\).",
            "<strong>Step 3 (Calculate second member):</strong> \\( m^2 - 1 = 4^2 - 1 = 16 - 1 = 15 \\).",
            "<strong>Step 4 (Calculate third member):</strong> \\( m^2 + 1 = 4^2 + 1 = 16 + 1 = 17 \\).",
            "<strong>Step 5 (Verification):</strong> \\( 8^2 + 15^2 = 64 + 225 = 289 = 17^2 \\). Perfect!"
          ],
          "(8, 15, 17)",
          "NCERT Class 8 Ex 5.2 Q2"
        )}
      `,
      contentHtmlHi: `
        ${makeSolvedCard(
          "पाइथागोरस त्रिक ज्ञात करना",
          "एक पाइथागोरस त्रिक लिखिए जिसका सबसे छोटा सदस्य 8 है।",
          [
            "<strong>चरण 1 (त्रिक का मानक रूप):</strong> किसी प्राकृत संख्या m > 1 के लिए त्रिक \\( (2m, m^2 - 1, m^2 + 1) \\) होता है।",
            "<strong>चरण 2 (m का मान निकालना):</strong> सबसे छोटा सदस्य \\( 2m = 8 \\implies m = 4 \\)।",
            "<strong>चरण 3 (दूसरा सदस्य):</strong> \\( m^2 - 1 = 4^2 - 1 = 16 - 1 = 15 \\)।",
            "<strong>चरण 4 (तीसरा सदस्य):</strong> \\( m^2 + 1 = 4^2 + 1 = 16 + 1 = 17 \\)।",
            "<strong>चरण 5 (सत्यापन):</strong> \\( 8^2 + 15^2 = 64 + 225 = 289 = 17^2 \\) ✅।"
          ],
          "(8, 15, 17)",
          "NCERT कक्षा 8 प्रश्नावली 5.2 प्रश्न 2"
        )}
      `
    },
    {
      heading: "4. Topper's 5-Second Speed Trick: Squaring Numbers Ending in 5",
      headingHi: "4. टॉपर 5-सेकंड ट्रिक: 5 पर समाप्त होने वाली संख्याओं का वर्ग",
      contentHtml: `
        <div class="exam-trap-box">
          <div class="trap-title">⚡ 5-Second Mental Squaring Trick!</div>
          <p>For any number ending in 5 (let tens digit be n): <br/><strong>(n5)&sup2; = [n &times; (n + 1)] followed by 25</strong></p>
          <p>&bull; 35&sup2; = (3 &times; 4) | 25 = <strong>1225</strong></p>
          <p>&bull; 75&sup2; = (7 &times; 8) | 25 = <strong>5625</strong></p>
          <p>&bull; 95&sup2; = (9 &times; 10) | 25 = <strong>9025</strong></p>
          <p><strong>Between Consecutive Squares:</strong> Between n&sup2; and (n+1)&sup2;, there are exactly <strong>2n non-perfect square numbers</strong>!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="exam-trap-box">
          <div class="trap-title">⚡ वैदिक गणित ट्रिक: 5 पर समाप्त संख्याओं का वर्ग बिना पेन उठाए</div>
          <p>इकाई अंक 5 वाली किसी संख्या का वर्ग: <strong>दहाई अंक n &times; (n + 1) के आगे 25 लिखें</strong>:<br/>
          &bull; \\( 25^2 = (2 \\times 3) | 25 = 625 \\)<br/>
          &bull; \\( 65^2 = (6 \\times 7) | 25 = 4225 \\)<br/>
          &bull; \\( 85^2 = (8 \\times 9) | 25 = 7225 \\)</p>
          <p><strong>क्रमागत वर्गों के बीच संख्याएँ:</strong> \\( n^2 \\) और \\( (n+1)^2 \\) के बीच ठीक <strong>2n गैर-वर्ग संख्याएँ</strong> होती हैं (जैसे 12&sup2; और 13&sup2; के बीच 2 &times; 12 = 24 संख्याएँ)।</p>
        </div>
      `
    }
  ],

  "ncert-c8-m06": [
    {
      heading: "1. Cube Numbers, Unit Digit Invariants & Hardy-Ramanujan Number",
      headingHi: "1. सरल भाषा में समझें: पूर्ण घन, इकाई अंक चक्र व हार्डी-रामानुजन संख्या",
      contentHtml: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
          <div class="mentor-msg">
            A cube number is obtained by multiplying a number by itself three times (n &times; n &times; n = n&sup3;). 1&sup3;=1, 2&sup3;=8, 3&sup3;=27, 4&sup3;=64, 5&sup3;=125. Notice the units digit behaviour: digits 0, 1, 4, 5, 6, 9 keep their own identity, while 2 &harr; 8 and 3 &harr; 7 swap!
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 1729: Hardy-Ramanujan Number</div>
          <p><strong>1729</strong> is the smallest number expressible as the sum of two cubes in two different ways: <br/>&bull; \\( 1729 = 1^3 + 12^3 \\) (1 + 1728) <br/>&bull; \\( 1729 = 9^3 + 10^3 \\) (729 + 1000)</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
          <div class="mentor-msg">
            जब किसी संख्या को स्वयं से तीन बार गुणा किया जाता है, तो प्राप्त संख्या <strong>पूर्ण घन (Cube)</strong> कहलाती है (\\( n \\times n \\times n = n^3 \\))। घन संख्याओं में <strong>इकाई अंक का चक्र</strong> अत्यंत रोचक है: 0, 1, 4, 5, 6, 9 के घन का इकाई अंक वही रहता है, जबकि <strong>2 का 8 और 8 का 2</strong> तथा <strong>3 का 7 और 7 का 3</strong> आपस में बदल जाते हैं!
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 हार्डी-रामानुजन संख्या 1729</div>
          <p><strong>1729</strong> वह सबसे छोटी संख्या है जिसे दो अलग-अलग तरीकों से दो घनों के योग के रूप में लिखा जा सकता है:<br/>
          &bull; \\( 1729 = 1^3 + 12^3 = 1 + 1728 \\)<br/>
          &bull; \\( 1729 = 9^3 + 10^3 = 729 + 1000 \\)</p>
        </div>
      `
    },
    {
      heading: "2. Finding Cube Roots by Prime Factorisation & Estimation Method",
      headingHi: "2. घनमूल ज्ञात करने की विधियाँ: अभाज्य गुणनखंडन व अनुमान विधि",
      contentHtml: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 Estimation Method for Large Cube Roots (5-Second Hack)</div>
          <p>Example: Find \\( \\sqrt[3]{17576} \\).</p>
          <p><strong>Group 1 (last 3 digits - 576):</strong> Unit digit is 6 &rarr; cube root unit digit must be <strong>6</strong>.</p>
          <p><strong>Group 2 (remaining digits - 17):</strong> We know 2&sup3; = 8 &le; 17 < 27 = 3&sup3;. Take smaller digit <strong>2</strong>.</p>
          <p>Combine: \\( \\sqrt[3]{17576} = 26 \\)! Solved in 3 seconds!</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 3-सेकंड अनुमान विधि (Estimation Method) से घनमूल</div>
          <p>उदाहरण: \\( \\sqrt[3]{17576} \\) का घनमूल ज्ञात करें।</p>
          <p><strong>समूह 1 (अंतिम 3 अंक - 576):</strong> इकाई अंक 6 है &rarr; घनमूल का इकाई अंक निश्चित रूप से <strong>6</strong> होगा।</p>
          <p><strong>समूह 2 (शेष अंक - 17):</strong> हम जानते हैं 2&sup3; = 8 &le; 17 < 3&sup3; = 27। छोटा अंक <strong>2</strong> लें।</p>
          <p>उत्तर: \\( \\sqrt[3]{17576} = 26 \\)! बिना गुणनखंडन किए सेकंडों में उत्तर!</p>
        </div>
      `
    },
    {
      heading: "3. Hand-Solved Step-by-Step Exemplar: Making a Number a Perfect Cube",
      headingHi: "3. हाथ से हल किया गया उदाहरण: पूर्ण घन बनाने हेतु गुणा/भाग",
      contentHtml: `
        ${makeSolvedCard(
          "Smallest Multiplier for Perfect Cube",
          "Find the smallest number by which 675 must be multiplied so that the product is a perfect cube.",
          [
            "<strong>Step 1 (Prime Factorisation of 675):</strong> <br/>675 &divide; 3 = 225 &divide; 3 = 75 &divide; 3 = 25 &divide; 5 = 5 &divide; 5 = 1. <br/>\\( 675 = 3 \\times 3 \\times 3 \\times 5 \\times 5 \\).",
            "<strong>Step 2 (Group into triplets):</strong> Factor 3 forms a complete triplet \\( (3 \\times 3 \\times 3) \\). Factor 5 has only two members \\( (5 \\times 5) \\).",
            "<strong>Step 3 (Find missing factor):</strong> One more 5 is required to complete the triplet of 5.",
            "<strong>Step 4 (Conclusion):</strong> The smallest number to multiply is 5."
          ],
          "5 (Product = 675 &times; 5 = 3375 = 15&sup3;)",
          "NCERT Class 8 Ex 6.1 Q3"
        )}
      `,
      contentHtmlHi: `
        ${makeSolvedCard(
          "पूर्ण घन बनाने हेतु न्यूनतम गुणक",
          "वह सबसे छोटी संख्या ज्ञात कीजिए जिससे 675 को गुणा करने पर गुणनफल एक पूर्ण घन प्राप्त हो जाए।",
          [
            "<strong>चरण 1 (675 का अभाज्य गुणनखंडन):</strong> <br/>675 = 3 &times; 3 &times; 3 &times; 5 &times; 5।",
            "<strong>चरण 2 (3-3 के त्रिक बनाना):</strong> अभाज्य गुणनखंड 3 तीन बार आता है (त्रिक पूरा है)। गुणनखंड 5 केवल दो बार आता है।",
            "<strong>चरण 3 (अपेक्षित गुणनखंड):</strong> 5 का त्रिक पूरा करने के लिए एक और 5 की आवश्यकता है।",
            "<strong>चरण 4 (निष्कर्ष):</strong> अतः अभीष्ट सबसे छोटी संख्या 5 है।"
          ],
          "5 (गुणनफल = 675 &times; 5 = 3375 = 15&sup3;)",
          "NCERT कक्षा 8 प्रश्नावली 6.1 प्रश्न 3"
        )}
      `
    },
    {
      heading: "4. Exam Traps & Consecutive Odd Numbers Sum Trick",
      headingHi: "4. परीक्षा ट्रैप व क्रमागत विषम संख्याओं के योग का नियम",
      contentHtml: `
        <div class="exam-trap-box">
          <div class="trap-title">⚡ Cubes as Sum of Consecutive Odd Numbers</div>
          <p>Every cube n&sup3; can be expressed as the sum of n consecutive odd numbers:</p>
          <p>&bull; 1&sup3; = 1 (1 number)<br/>&bull; 2&sup3; = 3 + 5 = 8 (2 numbers)<br/>&bull; 3&sup3; = 7 + 9 + 11 = 27 (3 numbers)<br/>&bull; 4&sup3; = 13 + 15 + 17 + 19 = 64 (4 numbers)</p>
          <p><strong>First term formula:</strong> The first odd number in the sum for n&sup3; is always <strong>n(n - 1) + 1</strong>.</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="exam-trap-box">
          <div class="trap-title">⚡ क्रमागत विषम संख्याओं के योग का नियम</div>
          <p>किसी भी संख्या \\( n^3 \\) को ठीक n क्रमागत विषम संख्याओं के योग के रूप में लिखा जा सकता है:<br/>
          &bull; 1&sup3; = 1 (1 संख्या)<br/>
          &bull; 2&sup3; = 3 + 5 = 8 (2 संख्याएँ)<br/>
          &bull; 3&sup3; = 7 + 9 + 11 = 27 (3 संख्याएँ)<br/>
          &bull; 4&sup3; = 13 + 15 + 17 + 19 = 64 (4 संख्याएँ)</p>
          <p><strong>प्रथम पद का सूत्र:</strong> \\( n^3 \\) की श्रृंखला का पहला विषम पद सदैव <strong>\\( n(n - 1) + 1 \\)</strong> होता है!</p>
        </div>
      `
    }
  ],

  "ncert-c8-m07": [
    {
      heading: "1. Discount, Sales Tax / GST and Marked Price Formulas",
      headingHi: "1. सरल भाषा में समझें: अंकित मूल्य, बट्टा (Discount) व जीएसटी (GST)",
      contentHtml: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
          <div class="mentor-msg">
            When you buy clothes, the price written on the tag is the <strong>Marked Price (MP)</strong>. The reduction given by the shopkeeper is <strong>Discount</strong>. Discount is ALWAYS calculated on Marked Price! Tax (GST) is added to the sale price.
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 Discount & Sale Price Formula</div>
          <p>&bull; Discount = MP - Sale Price (SP)<br/>&bull; Discount % = \\( \\left(\\frac{\\text{Discount}}{\\text{MP}}\\right) \\times 100 \\)<br/>&bull; SP with GST = SP + (GST % of SP)</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="teacher-mentor-card">
          <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
          <div class="mentor-msg">
            दुकान पर कपड़े खरीदते समय टैग पर छपा मूल्य <strong>अंकित मूल्य (Marked Price / MP)</strong> होता है। दुकानदार जो छूट देता है उसे <strong>बट्टा (Discount)</strong> कहते हैं। याद रखें: बट्टा सदैव अंकित मूल्य पर ही निकाला जाता है! और सरकार द्वारा लगाया जाने वाला टैक्स (GST) बिक्री मूल्य में जुड़ता है।
          </div>
        </div>
        <div class="hw-sticky-note yellow">
          <div class="sticky-tape"></div>
          <div class="hw-sticky-title">📌 बट्टा व बिक्री मूल्य सूत्र</div>
          <p>&bull; बट्टा = अंकित मूल्य (MP) - विक्रय मूल्य (SP)<br/>
          &bull; बट्टा % = \\( \\left(\\frac{\\text{बट्टा}}{\\text{अंकित मूल्य}}\\right) \\times 100 \\)<br/>
          &bull; विक्रय मूल्य = \\( \\text{MP} \\times \\left(1 - \\frac{\\text{Discount}\\%}{100}\\right) \\)</p>
        </div>
      `
    },
    {
      heading: "2. Compound Interest (CI) vs Simple Interest (SI) Master Formula",
      headingHi: "2. चक्रवृद्धि ब्याज (CI) बनाम साधारण ब्याज (SI) मास्टर सूत्र",
      contentHtml: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 Compound Interest Formula Matrix</div>
          <p><strong>Annual Compounding:</strong> \\( A = P \\left(1 + \\frac{R}{100}\\right)^n \\)</p>
          <p><strong>Half-Yearly Compounding:</strong> Rate becomes \\( \\frac{R}{2} \\) and periods become \\( 2n \\): <br/>\\( A = P \\left(1 + \\frac{R/2}{100}\\right)^{2n} \\)</p>
          <p><strong>Compound Interest:</strong> \\( \\text{CI} = A - P \\)</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="hw-sketch-box">
          <div class="hw-sketch-title">📐 चक्रवृद्धि ब्याज (CI) के अचूक सूत्र</div>
          <table class="teacher-formula-table">
            <thead>
              <tr>
                <th>संयोजन का प्रकार</th>
                <th>दर (Rate)</th>
                <th>समय (Period)</th>
                <th>मिश्रधन (Amount A)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>वार्षिक (Annually)</strong></td>
                <td>R %</td>
                <td>n वर्ष</td>
                <td>\\( A = P \\left(1 + \\frac{R}{100}\\right)^n \\)</td>
              </tr>
              <tr>
                <td><strong>अर्धवार्षिक (Half-Yearly)</strong></td>
                <td>\\( \\frac{R}{2} \\) %</td>
                <td>2n छमाही</td>
                <td>\\( A = P \\left(1 + \\frac{R}{200}\\right)^{2n} \\)</td>
              </tr>
              <tr>
                <td><strong>त्रैमासिक (Quarterly)</strong></td>
                <td>\\( \\frac{R}{4} \\) %</td>
                <td>4n तिमाही</td>
                <td>\\( A = P \\left(1 + \\frac{R}{400}\\right)^{4n} \\)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      heading: "3. Hand-Solved Step-by-Step Exemplar: CI & Reverse GST",
      headingHi: "3. हाथ से हल किया गया उदाहरण: चक्रवृद्धि ब्याज व जीएसटी युक्त मूल्य",
      contentHtml: `
        ${makeSolvedCard(
          "Compound Interest Calculation",
          "Calculate the amount and compound interest on ₹10,800 for 3 years at 12.5% per annum compounded annually.",
          [
            "<strong>Step 1 (Given values):</strong> P = ₹10,800, n = 3 years, R = 12.5% = 25/2 %.",
            "<strong>Step 2 (Apply Amount formula):</strong> <br/>\\( A = 10800 \\left(1 + \\frac{25/2}{100}\\right)^3 = 10800 \\left(1 + \\frac{1}{8}\\right)^3 = 10800 \\times \\left(\\frac{9}{8}\\right)^3 \\).",
            "<strong>Step 3 (Calculate):</strong> \\( A = 10800 \\times \\frac{729}{512} = ₹15,377.34 \\).",
            "<strong>Step 4 (Find CI):</strong> \\( \\text{CI} = A - P = 15377.34 - 10800 = ₹4,577.34 \\)."
          ],
          "Amount = ₹15,377.34, CI = ₹4,577.34",
          "NCERT Class 8 Ex 7.2 Q1"
        )}
      `,
      contentHtmlHi: `
        ${makeSolvedCard(
          "चक्रवृद्धि ब्याज की गणना",
          "₹10,800 पर 3 वर्ष के लिए 12.5% वार्षिक दर से वार्षिक रूप से संयोजित करने पर कुल मिश्रधन व चक्रवृद्धि ब्याज ज्ञात कीजिए।",
          [
            "<strong>चरण 1 (दिए गए मान):</strong> P = ₹10,800, n = 3 वर्ष, R = 12.5% = 25/2 %।",
            "<strong>चरण 2 (मिश्रधन सूत्र):</strong> <br/>\\( A = 10800 \\left(1 + \\frac{25}{200}\\right)^3 = 10800 \\left(\\frac{9}{8}\\right)^3 \\)",
            "<strong>चरण 3 (गणना):</strong> \\( A = 10800 \\times \\frac{729}{512} = ₹15,377.34 \\)।",
            "<strong>चरण 4 (ब्याज निकालना):</strong> \\( \\text{CI} = A - P = 15377.34 - 10800 = ₹4,577.34 \\)।"
          ],
          "मिश्रधन = ₹15,377.34, चक्रवृद्धि ब्याज = ₹4,577.34",
          "NCERT कक्षा 8 प्रश्नावली 7.2 प्रश्न 1"
        )}
      `
    },
    {
      heading: "4. Topper's Shortcut: Difference between CI and SI for 2 & 3 Years",
      headingHi: "4. टॉपर शॉर्टकट: 2 वर्ष और 3 वर्ष के लिए CI और SI का अंतर",
      contentHtml: `
        <div class="exam-trap-box">
          <div class="trap-title">⚡ 10-Second Master Exam Formulas for CI - SI</div>
          <p><strong>For 2 Years:</strong> Difference between CI and SI = \\( P \\times \\left(\\frac{R}{100}\\right)^2 \\)</p>
          <p><strong>For 3 Years:</strong> Difference = \\( P \\times \\left(\\frac{R}{100}\\right)^2 \\times \\left(\\frac{300 + R}{100}\\right) \\)</p>
          <p><strong>Reverse GST Trick:</strong> If price after 18% GST is ₹X, original price before GST = \\( \\frac{X}{1.18} \\).</p>
        </div>
      `,
      contentHtmlHi: `
        <div class="exam-trap-box">
          <div class="trap-title">⚡ प्रतियोगी परीक्षा स्पेशल: CI और SI के अंतर का डायरेक्ट फॉर्मूला</div>
          <p><strong>2 वर्ष के लिए अंतर:</strong> \\( \\text{CI} - \\text{SI} = P \\times \\left(\\frac{R}{100}\\right)^2 \\)</p>
          <p><strong>3 वर्ष के लिए अंतर:</strong> \\( \\text{CI} - \\text{SI} = P \\times \\left(\\frac{R}{100}\\right)^2 \\times \\left(\\frac{300 + R}{100}\\right) \\)</p>
          <p><strong>जीएसटी रिवर्स ट्रिक:</strong> यदि 18% GST सहित कोई वस्तु ₹X में खरीदी गई, तो वास्तविक मूल्य = \\( \\frac{X}{1.18} \\) (सीधे 1.18 से भाग दें)।</p>
        </div>
      `
    }
  ]
};

// Process other Math, Science, SST, Hindi chapters for Class 8
const c8OtherChapters = {
  "ncert-c8-m08": {
    sec2: "सर्वसमिकाएँ: (a+b)² = a² + 2ab + b², (a-b)² = a² - 2ab + b², (a+b)(a-b) = a² - b², (x+a)(x+b) = x² + (a+b)x + ab",
    sec3: "उदाहरण: 103 × 104 = (100+3)(100+4) = 10000 + 700 + 12 = 10,712",
    sec4: "शॉर्टकट: (a+b)² - (a-b)² = 4ab. परीक्षा में बिना वर्ग निकाले सेकंडों में उत्तर पाएँ!"
  },
  "ncert-c8-m09": {
    sec2: "ठोसों के सूत्र: घनाभ आयतन = lbh, पृष्ठीय = 2(lb+bh+hl); बेलन आयतन = πr²h, वक्र पृष्ठ = 2πrh, कुल पृष्ठ = 2πr(r+h)",
    sec3: "उदाहरण: 14 सेमी चौड़े कागज को मोड़कर 20 सेमी त्रिज्या का बेलन बनाया गया, आयतन = 22/7 × 20² × 14 = 17,600 सेमी³ = 17.6 लीटर",
    sec4: "ट्रैप: 1 m³ = 1,000 लीटर, 1 लीटर = 1,000 cm³, 1 हेक्टेयर = 10,000 m²"
  },
  "ncert-c8-m10": {
    sec2: "घातांक नियम: a^m × a^n = a^(m+n), a^m / a^n = a^(m-n), (a^m)^n = a^(mn), a^(-m) = 1/a^m, a^0 = 1",
    sec3: "उदाहरण: 0.0000000000085 को मानक रूप में = 8.5 × 10^(-12)",
    sec4: "ट्रैप: (-1)^विषम = -1, (-1)^सम = +1. 0^0 अपरिभाषित है!"
  },
  "ncert-c8-m11": {
    sec2: "समानुपात: सीधा समानुपात x/y = k (क्रॉस गुणा); प्रतिलोम समानुपात x × y = k (समानांतर गुणा)",
    sec3: "उदाहरण: 60 किमी/घंटा से 2 घंटे लगते हैं, तो 80 किमी/घंटा से समय = (60 × 2)/80 = 1.5 घंटे = 1 घंटा 30 मिनट",
    sec4: "सारणी ट्रिक: काम और मजदूर सदैव प्रतिलोम (Inverse) होते हैं!"
  },
  "ncert-c8-m12": {
    sec2: "गुणनखंडन विधियाँ: सार्व गुणनखंड, पुनर्समूहन, सर्वसमिकाएँ व मध्य पद विभाजन (Splitting the middle term)",
    sec3: "उदाहरण: z² - 4z - 12 = (z - 6)(z + 2)",
    sec4: "सामान्य त्रुटि: 3x² / 3x² = 1 होता है, 0 नहीं!"
  },
  "ncert-c8-m13": {
    sec2: "कार्तीय निर्देशांक: X-अक्ष (भुज / Abscissa), Y-अक्ष (कोटि / Ordinate), मूल बिंदु O(0,0)",
    sec3: "उदाहरण: बिंदु (4, 3) का अर्थ X पर 4 इकाई और Y पर 3 इकाई",
    sec4: "ग्राफ ढाल ट्रिक: समय-दूरी ग्राफ की ढाल (Slope) = चाल (Speed)!"
  },
  "ncert-c8-sci01": {
    sec2: "कृषि पद्धतियाँ: मिट्टी तैयार करना, बुआई (सीड ड्रिल), खाद व उर्वरक, सिंचाई (ड्रिप/स्प्रिंकलर), खरपतवार नियंत्रण, कटाई, भंडारण",
    sec3: "उदाहरण: खरीफ (धान, मक्का - वर्षा ऋतु) बनाम रबी (गेहूं, चना, सरसों - शीत ऋतु)",
    sec4: "नाइट्रोजन स्थिरीकरण: लेग्यूम पौधों की जड़ों में राइजोबियम (Rhizobium) जीवाणु"
  },
  "ncert-c8-sst01": {
    sec2: "संसाधन वर्गीकरण: प्राकृतिक (नवीकरणीय - सौर/पवन; अनवीकरणीय - कोयला/पेट्रोलियम), मानव निर्मित, मानव संसाधन",
    sec3: "सतत पोषणीय विकास: वर्तमान जरूरतों को पूरा करते हुए भविष्य की पीढ़ियों के लिए संरक्षण",
    sec4: "3R सिद्धांत: Reduce (कम करना), Reuse (पुनः उपयोग), Recycle (पुनर्चक्रण)"
  },
  "ncert-c8-hin01": {
    sec2: "व्याकरण सूत्र: संधि के भेद (स्वर, व्यंजन, विसर्ग), समास के 6 भेद",
    sec3: "ध्वनि कविता: 'अभी न होगा मेरा अंत, अभी-अभी ही तो आया है मेरे वन में मृदुल वसंत'",
    sec4: "प्रतियोगी परीक्षा: छायावाद के चार स्तंभ - जयशंकर प्रसाद, सूर्यकांत त्रिपाठी 'निराला', सुमित्रानंदन पंत, महादेवी वर्मा"
  }
};

let enrichedCount = 0;

db.notes.forEach(note => {
  if (note.classLevel === 'Class 8') {
    if (c8Enrichments[note.id]) {
      note.sections = c8Enrichments[note.id];
      enrichedCount++;
    } else if (c8OtherChapters[note.id]) {
      const data = c8OtherChapters[note.id];
      // Expand into 4 rich sections
      const baseSec = note.sections[0] || {};
      note.sections = [
        {
          heading: baseSec.heading || "1. NCERT Core Narrative & Intuitive Concept",
          headingHi: baseSec.headingHi || "1. सरल भाषा में समझें: मूल पाठ व अवधारणा",
          contentHtml: baseSec.contentHtml || "",
          contentHtmlHi: baseSec.contentHtmlHi || ""
        },
        {
          heading: "2. Handwritten Formulas, Laws & Concept Matrix",
          headingHi: "2. मुख्य हस्तलिखित नियम, सूत्र व अवधारणा चार्ट",
          contentHtml: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 Key Rules & Formulas</div><p>${data.sec2}</p></div>`,
          contentHtmlHi: `<div class="hw-sketch-box"><div class="hw-sketch-title">📐 मुख्य हस्तलिखित नियम व फॉर्मूला चार्ट</div><p>${data.sec2}</p></div>`
        },
        {
          heading: "3. Step-by-Step Hand-Solved Model Exemplar",
          headingHi: "3. हाथ से हल किया गया उदाहरण: स्टेप-बाई-स्टेप समाधान",
          contentHtml: `<div class="hw-solved-card"><div class="hw-solved-header"><span class="hw-solved-badge">📝 Hand-Solved Exemplar</span></div><p>${data.sec3}</p></div>`,
          contentHtmlHi: `<div class="hw-solved-card"><div class="hw-solved-header"><span class="hw-solved-badge">📝 हाथ से हल किया गया मॉडल उदाहरण</span></div><p>${data.sec3}</p></div>`
        },
        {
          heading: "4. Topper's Exam Traps & Fast Shortcut Hacks",
          headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप (5-Second Shortcut)",
          contentHtml: `<div class="exam-trap-box"><div class="trap-title">⚠️ Topper's Shortcut & Traps</div><p>${data.sec4}</p></div>`,
          contentHtmlHi: `<div class="exam-trap-box"><div class="trap-title">⚠️ टॉपर का गुरुमंत्र व परीक्षा ट्रैप</div><p>${data.sec4}</p></div>`
        }
      ];
      enrichedCount++;
    }
  }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log(`Successfully enriched ${enrichedCount} Class 8 chapters into deep 4-section handwritten notes!`);
