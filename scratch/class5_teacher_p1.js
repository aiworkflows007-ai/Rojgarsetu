// Class 5 NCERT Teacher-Mentor Notes: Chapters 1 to 8
module.exports = [
  {
    id: "ncert-c5-math-ch1",
    title: "Chapter 1: We the Travellers — I (Large Numbers & Place Value)",
    titleHi: "अध्याय 1: हम यात्री — I (बड़ी संख्याएं और स्थानीय मान)",
    desc: "NCERT textbook story of human travel through ages, place value chart up to 10,000 and 1,00,000, Indian vs. International numeration, and speed-distance estimation.",
    descHi: "मानव यात्रा का इतिहास, 10,000 और 1,00,000 का आगमन, भारतीय व अंतर्राष्ट्रीय संख्या प्रणाली, स्थानीय मान बनाम अंकित मान और गति-दूरी अनुमान।",
    competitionEdge: "Mastering Indian vs. International comma rules (3:2:2 vs 3:3:3), place value vs. face value difference traps, and 1 million = 10 lakhs conversion for CTET & BPSC TRE.",
    competitionEdgeHi: "भारतीय व अंतर्राष्ट्रीय अल्पविराम नियम (3:2:2 बनाम 3:3:3), स्थानीय मान व जातीय मान के अंतर के सवाल और 1 मिलियन = 10 लाख का कन्वर्जन नियम।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: The Story of Human Travel & The Leap to 10,000",
        headingHi: "1. एनसीईआरटी मूल पाठ: मानव यात्रा की कहानी और 10,000 का आगमन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, this introductory chapter connects real-world movement (walking, cycling, bus, train) with the necessity of large numbers. In competitive exams like CTET and BPSC TRE Primary, examiners frequently test how large numbers are read, grouped, and converted across systems. Pay special attention to the transition from 9,999 to 10,000 and 99,999 to 1,00,000!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Textbook Activity: How Humans Counted Travel Distance</div>
            <p>Thousands of years ago, humans travelled on foot or used animal carts and boats. Boats were invented much before bullock carts! When calculating the number of vehicles in a district or state, counting in hundreds is no longer enough.</p>
            <p><strong>The Leap to 10,000:</strong> If we start from 1,000 and keep adding 1,000 sequentially: 1,000 &rarr; 2,000 &rarr; ... &rarr; 9,000. When we add another 1,000 to 9,000, we obtain <strong>Ten Thousand (10,000)</strong>.</p>
            <p>In the standard place value chart, NCERT introduces the new column: <strong>TTh (Ten Thousands)</strong>. Each step to the left increases the value by <strong>&times; 10</strong>.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्यारे विद्यार्थियों! यह पहला अध्याय मानव यात्रा के इतिहास (पैदल, बैलगाड़ी, नाव, ट्रेन) के जरिए बड़ी संख्याओं की आवश्यकता को समझाता है। CTET और BPSC शिक्षक भर्ती में परीक्षक सीधे परिभाषा नहीं पूछते, बल्कि 10,000 और 1,00,000 के निर्माण, स्थानीय मान और अल्पविराम (Comma) के नियमों से प्रश्न तैयार करते हैं। आइए इसे आसान भाषा में समझें!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT पाठ्यपुस्तक गतिविधि: मानव यात्रा और 10,000 का आगमन</div>
            <p>प्राचीन काल में मनुष्य पैदल या पशुओं की मदद से लंबी दूरियां तय करता था। नावों का आविष्कार बैलगाड़ी से भी बहुत पहले हुआ था! जब किसी पूरे राज्य या जिले के वाहनों की गिनती करनी होती है, तो हमें सैकड़ों से आगे हजारों और लाखों की आवश्यकता पड़ती है।</p>
            <p><strong>10,000 का निर्माण:</strong> जब हम 1,000 में हजार-हजार जोड़ते हैं: 1,000 &rarr; 2,000 &rarr; ... &rarr; 9,000। 9,000 में 1,000 और जोड़ने पर हमें प्राप्त होता है: <strong>दस हजार (10,000)</strong>।</p>
            <p>NCERT स्थान मान तालिका में नया स्तंभ जोड़ती है: <strong>TTh (दस हजार / Ten Thousands)</strong>। तालिका में बाईं ओर प्रत्येक कदम जाने पर मान <strong>&times; 10 गुना</strong> बढ़ जाता है।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Indian vs. International Place Value & Comma Rules",
        headingHi: "2. सूत्र एवं नियम संग्रह: भारतीय एवं अंतर्राष्ट्रीय संख्या प्रणाली तथा अल्पविराम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Chest: Numeration Systems</div>
            <p>Always remember the grouping rules when placing commas:</p>
            <ul>
              <li><strong>Indian System:</strong> First comma after 3 digits from the right (Hundreds), then after every 2 digits (Thousands, Lakhs, Crores). Pattern: <code>3 : 2 : 2 : 2</code></li>
              <li><strong>International System:</strong> Commas placed after every 3 digits from the right throughout. Pattern: <code>3 : 3 : 3</code></li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr>
                <th>Indian Term</th>
                <th>Scientific Notation</th>
                <th>International Equivalent</th>
                <th>Zeros Count</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1 Thousand</td><td>1,000 = 10³</td><td>1 Thousand (1K)</td><td>3 Zeros</td></tr>
              <tr><td>10 Thousand</td><td>10,000 = 10⁴</td><td>10 Thousand</td><td>4 Zeros</td></tr>
              <tr><td>1 Lakh</td><td>1,00,000 = 10⁵</td><td>100 Thousand</td><td>5 Zeros</td></tr>
              <tr><td>10 Lakh</td><td>10,00,000 = 10⁶</td><td>1 Million (1 M)</td><td>6 Zeros</td></tr>
              <tr><td>1 Crore</td><td>1,00,00,000 = 10⁷</td><td>10 Million</td><td>7 Zeros</td></tr>
              <tr><td>10 Crore</td><td>10,00,00,000 = 10⁸</td><td>100 Million</td><td>8 Zeros</td></tr>
              <tr><td>100 Crore</td><td>1,00,00,00,000 = 10⁹</td><td>1 Billion (1 B)</td><td>9 Zeros</td></tr>
            </tbody>
          </table>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: संख्या प्रणाली व अल्पविराम का अचूक नियम</div>
            <p>परीक्षा में अल्पविराम (Comma) लगाने के नियम को हमेशा इस ट्रिक से याद रखें:</p>
            <ul>
              <li><strong>भारतीय प्रणाली:</strong> दाईं ओर से पहला अल्पविराम 3 अंक बाद (सैकड़े पर), उसके बाद प्रत्येक 2-2 अंक बाद (हजार, लाख, करोड़)। प्रारूप: <code>3 : 2 : 2 : 2</code></li>
              <li><strong>अंतर्राष्ट्रीय प्रणाली:</strong> दाईं ओर से हमेशा 3-3 अंकों के समूह पर अल्पविराम लगाया जाता है (हजार, मिलियन, बिलियन)। प्रारूप: <code>3 : 3 : 3</code></li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr>
                <th>भारतीय मान</th>
                <th>संख्यात्मक रूप</th>
                <th>अंतर्राष्ट्रीय समकक्ष</th>
                <th>शून्य (Zeros) की संख्या</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1 हजार (One Thousand)</td><td>1,000 (10³)</td><td>1 Thousand</td><td>3 शून्य</td></tr>
              <tr><td>10 हजार (Ten Thousand)</td><td>10,000 (10⁴)</td><td>10 Thousand</td><td>4 शून्य</td></tr>
              <tr><td>1 लाख (One Lakh)</td><td>1,00,000 (10⁵)</td><td>100 Thousand</td><td>5 शून्य</td></tr>
              <tr><td>10 लाख (Ten Lakhs)</td><td>10,00,000 (10⁶)</td><td>1 Million (1 मिलियन)</td><td>6 शून्य</td></tr>
              <tr><td>1 करोड़ (One Crore)</td><td>1,00,00,000 (10⁷)</td><td>10 Million</td><td>7 शून्य</td></tr>
              <tr><td>10 करोड़ (Ten Crores)</td><td>10,00,00,000 (10⁸)</td><td>100 Million</td><td>8 शून्य</td></tr>
              <tr><td>1 अरब / 100 करोड़</td><td>1,00,00,00,000 (10⁹)</td><td>1 Billion (1 बिलियन)</td><td>9 शून्य</td></tr>
            </tbody>
          </table>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Place Value vs. Face Value & Travel Estimates",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: स्थानीय मान बनाम अंकित मान और चाल-दूरी अनुमान",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Common Exam Pitfall: Place Value vs. Face Value (अंकित मान)</div>
            <p>In competitive exams, examiners frequently ask: <em>"Find the difference between the place value and face value of 7 in 8,76,543."</em></p>
            <ul>
              <li><strong>Place Value (स्थानीय मान):</strong> Depends on the position = <code>7 &times; 10,000 = 70,000</code>.</li>
              <li><strong>Face Value (अंकित या जातीय मान):</strong> The digit itself = <code>7</code>.</li>
              <li><strong>Difference:</strong> <code>70,000 - 7 = 69,993</code>. (Never make the mistake of taking face value as 700 or 70!)</li>
            </ul>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">🚴 NCERT Travel Estimation Problem</div>
            <p>NCERT compares travel modes: A cyclist rides at 12 km/h, while an express train covers 80 km/h. If travelling from Patna to Gaya (100 km), how much time is saved by taking the train?</p>
            <p><strong>Cycle Time:</strong> 100 / 12 = 8 hours 20 minutes. <strong>Train Time:</strong> 100 / 80 = 1 hour 15 minutes. <strong>Time Saved:</strong> 7 hours 5 minutes!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: स्थानीय मान बनाम अंकित (जातीय) मान</div>
            <p>शिक्षक भर्ती (BPSC TRE / CTET) का सबसे पसंदीदा प्रश्न: <em>"संख्या 8,76,543 में 7 के स्थानीय मान और अंकित मान का अंतर ज्ञात कीजिए।"</em></p>
            <ul>
              <li><strong>स्थानीय मान (Place Value):</strong> स्थान के अनुसार मान = <code>7 &times; 10,000 = 70,000</code></li>
              <li><strong>अंकित/जातीय मान (Face Value):</strong> अंक का अपना वास्तविक मान = <code>7</code> (यह कभी नहीं बदलता!)</li>
              <li><strong>अंतर (Difference):</strong> <code>70,000 - 7 = 69,993</code> (परीक्षार्थी हड़बड़ी में 70,000 - 700 कर देते हैं, जो बिल्कुल गलत है!)</li>
            </ul>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">🚴 NCERT यात्रा अनुमान समस्या: चाल, दूरी और समय</div>
            <p>किताब में दी गई यात्रा गति: एक साइकिल सवार 12 किमी/घंटा चलता है, जबकि एक्सप्रेस ट्रेन 80 किमी/घंटा चलती है। 100 किमी की यात्रा में ट्रेन से कितने समय की बचत होगी?</p>
            <p><strong>साइकिल का समय:</strong> 100 &divide; 12 = 8 घंटे 20 मिनट। <strong>ट्रेन का समय:</strong> 100 &divide; 80 = 1 घंटा 15 मिनट। <strong>बचा हुआ समय:</strong> 7 घंटे 5 मिनट!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch2",
    title: "Chapter 2: Fractions (Part of a Whole & Equivalence)",
    titleHi: "अध्याय 2: भिन्न (Fractions: हिस्से और पूर्ण, समतुल्य भिन्न)",
    desc: "NCERT Tamanna's chocolate puzzle, condition for fraction comparison, unit fractions, visual 10x10 grids, and equivalent fraction rules.",
    descHi: "तमन्ना की चॉकलेट पहेली, भिन्न तुलना की पूर्व-शर्त (समान पूर्ण), इकाई भिन्न, 10x10 ग्रिड पर छायांकन और समतुल्य भिन्न के नियम।",
    competitionEdge: "Condition of identical wholes for fraction comparison, cross-multiplication comparison trick (ad vs bc), and reducing fractions to lowest terms in under 10 seconds.",
    competitionEdgeHi: "समान पूर्ण की पूर्व-शर्त, क्रॉस-गुणन तुलना ट्रिक (ad बनाम bc) और भिन्नों को न्यूनतम रूप में बदलने का शॉर्टकट।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Tamanna's Chocolate & The Golden Rule of Comparison",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: तमन्ना की चॉकलेट और भिन्न तुलना का स्वर्णिम नियम",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Welcome aspirants! Fractions form the bedrock of arithmetic in CTET, BPSC, and State TETs. Chapter 2 opens with an eye-opening question by Tamanna that traps thousands of candidates. Let us see why a fraction is never an isolated number, but always a part of a specific "Whole"!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Textbook Scenario: Tamanna's Two Chocolates</div>
            <p>Tamanna has two chocolate bars of <em>different sizes</em>: a large bar and a mini bar. She claims that <strong>1/3 of the large chocolate bar is bigger than 1/2 of the mini chocolate bar</strong>. Is she correct?</p>
            <p><strong>The Answer is YES!</strong> Because the two "wholes" are different in size! If the large bar is 150 grams, 1/3 of it is 50 grams. If the mini bar is 60 grams, 1/2 of it is only 30 grams. Hence 50 g > 30 g.</p>
            <p><strong>NCERT's Golden Law:</strong> <em>"To compare two fractions, the wholes from which the fractions are derived must be identical in size!"</em></p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रतियोगी छात्रों का स्वागत है! भिन्न (Fractions) अंकगणित का दिल है। NCERT कक्षा 5 का यह अध्याय तमन्ना की एक बहुत ही व्यावहारिक पहेली से शुरू होता है। इस अवधारणा को समझ लेने के बाद आप परीक्षा में 'भिन्न तुलना' के किसी भी भ्रामक प्रश्न में कभी नहीं अटकेंगे।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT पाठ्यपुस्तक गतिविधि: तमन्ना की दो चॉकलेट</div>
            <p>तमन्ना के पास अलग-अलग आकार की दो चॉकलेट हैं: एक बड़ी और एक छोटी। वह कहती है कि <strong>बड़ी चॉकलेट का 1/3 भाग, छोटी चॉकलेट के 1/2 भाग से बड़ा है</strong>। क्या वह सही है?</p>
            <p><strong>उत्तर है: हाँ, वह बिल्कुल सही है!</strong> क्योंकि दोनों 'पूर्ण' (Wholes) समान नहीं हैं! यदि बड़ी चॉकलेट 150 ग्राम की है, तो उसका 1/3 भाग = 50 ग्राम होगा। यदि छोटी चॉकलेट 60 ग्राम की है, तो उसका 1/2 भाग = 30 ग्राम ही होगा। 50 ग्राम > 30 ग्राम!</p>
            <p><strong>NCERT का स्वर्णिम नियम:</strong> <em>"दो भिन्नों की तुलना केवल तभी की जा सकती है जब वे दोनों समान आकार के पूर्ण (Whole) से लिए गए हों!"</em></p>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Equivalent Fractions, Simplest Form & Cross Multiplication",
        headingHi: "2. सूत्र एवं नियम संग्रह: समतुल्य भिन्न, सरलतम रूप व तिर्यक गुणन (Cross Multiplication)",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Chest: Fraction Operations</div>
            <p>Keep these fundamental formulas at your fingertips:</p>
            <ul>
              <li><strong>Equivalent Fraction Rule:</strong> Multiplying or dividing both numerator and denominator by the same non-zero integer leaves the value unchanged: <br/><code>a/b = (a &times; k) / (b &times; k) = (a &divide; m) / (b &divide; m)</code></li>
              <li><strong>Fast Comparison (Cross Multiplication):</strong> To compare <code>a/b</code> and <code>c/d</code>, compute products <code>a &times; d</code> and <code>b &times; c</code>:<br/>
                If <code>a &times; d > b &times; c</code>, then <code>a/b > c/d</code>.<br/>
                If <code>a &times; d = b &times; c</code>, then <code>a/b = c/d</code>.
              </li>
              <li><strong>Fraction of a Collection:</strong> <code>(a/b) &times; Total Quantity</code>.</li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>Fraction Type</th><th>Mathematical Condition</th><th>NCERT Example</th><th>Exam Shortcut</th></tr>
            </thead>
            <tbody>
              <tr><td>Proper Fraction (उचित भिन्न)</td><td>Numerator < Denominator</td><td>3/5, 7/10</td><td>Value always < 1</td></tr>
              <tr><td>Improper Fraction (अनुचित भिन्न)</td><td>Numerator &ge; Denominator</td><td>7/4, 9/5</td><td>Value always &ge; 1</td></tr>
              <tr><td>Mixed Fraction (मिश्रित भिन्न)</td><td>Whole Number + Proper Fraction</td><td>1 ¾, 2 ⅗</td><td>Convert: (Whole &times; D + N) / D</td></tr>
              <tr><td>Unit Fraction (इकाई भिन्न)</td><td>Numerator = 1</td><td>½, ⅓, ¼, ⅕</td><td>Larger denominator = Smaller fraction</td></tr>
            </tbody>
          </table>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: समतुल्य भिन्न व तिर्यक गुणन सूत्र</div>
            <p>परीक्षा में समय बचाने के लिए इन सूत्रों को कंठस्थ रखें:</p>
            <ul>
              <li><strong>समतुल्य भिन्न का नियम:</strong> किसी भिन्न के अंश (Numerator) और हर (Denominator) दोनों में एक ही अशून्य संख्या से गुणा या भाग करने पर मान अपरिवर्तित रहता है: <br/><code>a/b = (a &times; k) / (b &times; k)</code></li>
              <li><strong>तिर्यक गुणन (Cross Multiplication) ट्रिक:</strong> दो भिन्नों <code>a/b</code> और <code>c/d</code> की तुलना के लिए <code>a &times; d</code> और <code>b &times; c</code> निकालें:<br/>
                यदि <code>a &times; d > b &times; c</code>, तो <code>a/b > c/d</code> होगा।<br/>
                उदाहरण: 5/7 और 7/10 में &rarr; 5&times;10=50 और 7&times;7=49 &rarr; 50 > 49 &rarr; अत: <code>5/7 > 7/10</code> (मात्र 3 सेकंड में हल!)
              </li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>भिन्न का प्रकार</th><th>गणितीय शर्त</th><th>NCERT उदाहरण</th><th>प्रतियोगी परीक्षा नियम</th></tr>
            </thead>
            <tbody>
              <tr><td>उचित भिन्न (Proper)</td><td>अंश < हर (Numerator < Denominator)</td><td>3/5, 7/10</td><td>मान सदैव 1 से छोटा होता है</td></tr>
              <tr><td>अनुचित भिन्न (Improper)</td><td>अंश &ge; हर (Numerator &ge; Denominator)</td><td>7/4, 9/5</td><td>मान सदैव 1 या 1 से बड़ा होता है</td></tr>
              <tr><td>मिश्रित भिन्न (Mixed)</td><td>पूर्ण संख्या + उचित भिन्न</td><td>1 ¾, 2 ⅗</td><td>अनुचित में बदलें: (पूर्ण &times; हर + अंश) / हर</td></tr>
              <tr><td>इकाई भिन्न (Unit Fraction)</td><td>अंश = 1 (Numerator = 1)</td><td>½, ⅓, ¼, ⅕</td><td>हर जितना बड़ा होगा, भिन्न उतनी ही छोटी होगी!</td></tr>
            </tbody>
          </table>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Ascending / Descending Order Traps",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: आरोही व अवरोही क्रम में फंसाने वाले प्रश्न",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Top Exam Mistake: Comparing Fractions with Same Numerator</div>
            <p>Question: Arrange in ascending order: <code>3/7, 3/4, 3/11, 3/5</code>.</p>
            <p><strong>The Trap:</strong> Candidates think 11 is largest so 3/11 must be largest. WRONG! When numerators are identical, dividing by a larger denominator creates smaller pieces!</p>
            <p><strong>Correct Ascending Order:</strong> <code>3/11 < 3/7 < 3/5 < 3/4</code>.</p>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📐 NCERT 10x10 Grid Shading Application</div>
            <p>On a 100-square grid, shading 1/2 covers 50 squares; shading 1/4 covers 25 squares; shading 1/5 covers 20 squares. If 1/10 is shaded blue and 2/5 is shaded green, total shaded = 10 + 40 = 50 squares (exactly 1/2 of the whole grid)!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में सबसे आम भूल: समान अंश वाली भिन्नों की तुलना</div>
            <p>प्रश्न: आरोही क्रम (Ascending Order) में व्यवस्थित करें: <code>3/7, 3/4, 3/11, 3/5</code>।</p>
            <p><strong>परीक्षार्थी का भ्रम:</strong> कई छात्र सोचते हैं कि हर में 11 सबसे बड़ा है तो 3/11 सबसे बड़ा होगा। यह बिल्कुल उल्टा है! जब अंश समान हों, तो हर जितना बड़ा होगा, प्रत्येक हिस्सा उतना ही छोटा होगा!</p>
            <p><strong>सही आरोही क्रम:</strong> <code>3/11 < 3/7 < 3/5 < 3/4</code>।</p>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📐 NCERT 10x10 ग्रिड छायांकन गतिविधि</div>
            <p>100 वर्गों वाले ग्रिड में 1/2 का अर्थ है 50 वर्ग; 1/4 का अर्थ है 25 वर्ग; 1/5 का अर्थ है 20 वर्ग। यदि ग्रिड का 1/10 भाग नीला और 2/5 भाग हरा रंगा गया है, तो कुल रंगा भाग = 10 + 40 = 50 वर्ग (यानी पूरा आधा ग्रिड)!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch3",
    title: "Chapter 3: Angles as Turns (Geometry & Clock Trigonometry)",
    titleHi: "अध्याय 3: कोण और घुमाव (Angles as Turns: ज्यामिति व घड़ी त्रिकोणमिति)",
    desc: "NCERT Statue game, turns as rotations (1/4, 1/2, 3/4, full turn), angles classification (acute, right, obtuse, straight, reflex), and clock hand angle formulas.",
    descHi: "स्टैच्यू खेल, घुमाव के रूप में कोण (1/4, 1/2, 3/4 व पूर्ण चक्र), कोणों का वर्गीकरण (न्यून, सम, अधिक, ऋजु, पुनर्युक्त कोण) और घड़ी की सुइयों का कोण सूत्र।",
    competitionEdge: "Clock hands angular velocity formula |30H - 5.5M|, angle at 3:00, 6:00, 9:00, reflex angles (>180°), and supplementary angle sums in geometry.",
    competitionEdgeHi: "घड़ी की सुइयों का कोण सूत्र |30H - 5.5M|, 3:00, 6:00 व 9:00 बजे का कोण, पुनर्युक्त कोण (>180°) और संपूरक कोणों का योग।",
    sections: [
      {
        heading: "1. NCERT Core Activity: The 'Statue' Game & Rotation as Angles",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: 'स्टैच्यू' खेल और घूर्णन द्वारा कोणों की उत्पत्ति",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, most traditional textbooks teach angles as static line intersections. But NCERT defines an angle dynamically as a <strong>"Turn" (घुमाव)</strong>! This rotational perspective directly unlocks clock problems, compass direction changes, and polygon exterior angles in competitive exams.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Game: Statue & Turning Around</div>
            <p>Children play the 'Statue' game by standing in one spot and turning around on command:</p>
            <ul>
              <li><strong>Quarter Turn (1/4 turn):</strong> Turning from North to East = <strong>Right Angle = 90&deg;</strong>.</li>
              <li><strong>Half Turn (1/2 turn):</strong> Turning from North to South (facing the opposite direction) = <strong>Straight Angle = 180&deg;</strong> (Two right angles).</li>
              <li><strong>Three-Quarter Turn (3/4 turn):</strong> Turning through 3 right angles = <strong>270&deg;</strong>.</li>
              <li><strong>Full Turn (1 complete turn):</strong> Turning all the way back to the starting point = <strong>Complete Angle = 360&deg;</strong> (Four right angles).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! पारंपरिक किताबों में कोण को केवल दो रेखाओं का झुकाव बताया जाता है, लेकिन NCERT इसे <strong>'घुमाव' (Turn)</strong> के रूप में प्रस्तुत करती है। घुमाव की यह समझ आपको परीक्षा में घड़ी की सुइयों और दिशा-परीक्षण (Direction Sense) के प्रश्नों को चुटकियों में हल करने में मदद करेगी।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT गतिविधि: स्टैच्यू खेल और घुमाव</div>
            <p>बच्चे एक स्थान पर खड़े होकर आदेश मिलने पर घूमते हैं:</p>
            <ul>
              <li><strong>एक-चौथाई घुमाव (1/4 Turn):</strong> उत्तर से पूर्व की ओर घूमना = <strong>समकोण (Right Angle) = 90&deg;</strong>।</li>
              <li><strong>आधा घुमाव (1/2 Turn):</strong> उत्तर से ठीक विपरीत दक्षिण की ओर घूमना = <strong>ऋजु कोण / सरल कोण (Straight Angle) = 180&deg;</strong> (दो समकोण)।</li>
              <li><strong>तीन-चौथाई घुमाव (3/4 Turn):</strong> तीन समकोणों के बराबर घूमना = <strong>270&deg;</strong>।</li>
              <li><strong>पूर्ण घुमाव (Full Turn):</strong> घूमकर पुनः अपनी मूल दिशा में आ जाना = <strong>संपूर्ण कोण (Complete Angle) = 360&deg;</strong> (चार समकोण)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Clock Angle Master Formula & Angle Classification",
        headingHi: "2. सूत्र एवं नियम संग्रह: घड़ी की सुइयों का कोण सूत्र एवं कोणों का वर्गीकरण",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula: Clock Hands Angle Formula</div>
            <p>The angle $\\theta$ between the hour hand and minute hand at $H$ hours and $M$ minutes is given by:</p>
            <p style="font-size:1.15rem; font-weight:800; color:#b45309; text-align:center;">
              $$\\theta = |30H - 5.5M| \\quad \\text{or} \\quad \\theta = \\left|30H - \\frac{11}{2}M\\right|$$
            </p>
            <p><strong>Note:</strong> If the calculated angle exceeds 180&deg;, the minor angle is <code>360&deg; - \\theta</code> (and \\theta is the reflex angle!).</p>
            <p><strong>Speed of Hands:</strong> Minute hand moves at <strong>6&deg; per minute</strong>. Hour hand moves at <strong>0.5&deg; per minute</strong>.</p>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>Angle Name</th><th>Degree Measure Range</th><th>Clock Position Example</th><th>Exam Trap</th></tr>
            </thead>
            <tbody>
              <tr><td>Acute Angle (न्यून कोण)</td><td>0&deg; < &theta; < 90&deg;</td><td>2:00 (60&deg;), 1:00 (30&deg;)</td><td>Strictly less than 90&deg;</td></tr>
              <tr><td>Right Angle (समकोण)</td><td>&theta; = 90&deg;</td><td>3:00, 9:00</td><td>Exactly 1/4 turn</td></tr>
              <tr><td>Obtuse Angle (अधिक कोण)</td><td>90&deg; < &theta; < 180&deg;</td><td>4:00 (120&deg;), 5:00 (150&deg;)</td><td>Between 90&deg; and 180&deg;</td></tr>
              <tr><td>Straight Angle (ऋजु कोण)</td><td>&theta; = 180&deg;</td><td>6:00</td><td>Opposite straight line</td></tr>
              <tr><td>Reflex Angle (पुनर्युक्त कोण)</td><td>180&deg; < &theta; < 360&deg;</td><td>Exterior angle at 3:00 (270&deg;)</td><td>Frequently confused with obtuse!</td></tr>
            </tbody>
          </table>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: घड़ी की सुइयों का मास्टर कोण सूत्र</div>
            <p>किसी भी समय $H$ बजकर $M$ मिनट पर घंटे और मिनट की सुई के बीच का कोण निकालने का अचूक सूत्र:</p>
            <p style="font-size:1.15rem; font-weight:800; color:#b45309; text-align:center;">
              $$\\theta = |30H - 5.5M| \\quad \\text{या} \\quad \\theta = \\left|30H - \\frac{11}{2}M\\right|$$
            </p>
            <p><strong>विशेष नियम:</strong> यदि गणना के बाद कोण 180&deg; से अधिक आता है, तो आंतरिक (छोटा) कोण <code>360&deg; - \\theta</code> होगा और आया हुआ कोण बाह्य (पुनर्युक्त कोण) होगा।</p>
            <p><strong>सुइयों की चाल:</strong> मिनट की सुई 1 मिनट में <strong>6&deg;</strong> चलती है। घंटे की सुई 1 मिनट में <strong>0.5&deg; (½&deg;)</strong> चलती है।</p>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>कोण का नाम</th><th>माप का विस्तार</th><th>घड़ी का उदाहरण</th><th>प्रतियोगी परीक्षा नियम</th></tr>
            </thead>
            <tbody>
              <tr><td>न्यून कोण (Acute Angle)</td><td>0&deg; से अधिक, 90&deg; से कम</td><td>2:00 बजे (60&deg;), 1:00 बजे (30&deg;)</td><td>समकोण से छोटा</td></tr>
              <tr><td>समकोण (Right Angle)</td><td>ठीक 90&deg; (1/4 घुमाव)</td><td>3:00 बजे, 9:00 बजे</td><td>L-आकार की आकृति</td></tr>
              <tr><td>अधिक कोण (Obtuse Angle)</td><td>90&deg; से अधिक, 180&deg; से कम</td><td>4:00 बजे (120&deg;), 5:00 बजे (150&deg;)</td><td>समकोण व ऋजु कोण के मध्य</td></tr>
              <tr><td>ऋजु कोण / सरल कोण</td><td>ठीक 180&deg; (1/2 घुमाव)</td><td>6:00 बजे</td><td>दोनों सुइयां एक सीधी रेखा में विपरीत</td></tr>
              <tr><td>पुनर्युक्त कोण (Reflex Angle)</td><td>180&deg; से अधिक, 360&deg; से कम</td><td>3:00 बजे का बाहरी कोण (270&deg;)</td><td>परीक्षार्थी अक्सर इसे अधिक कोण समझ लेते हैं!</td></tr>
            </tbody>
          </table>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Clock Calculations at Non-Zero Minutes",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: जब मिनट शून्य न हों (जैसे 3:30 पर कोण)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Classic Trap: Angle at 3:30</div>
            <p><strong>Common Mistake:</strong> Candidates think at 3:30, minute hand is at 6 (180&deg;) and hour hand is at 3 (90&deg;), so the angle must be 90&deg;! <strong>ABSOLUTELY WRONG!</strong></p>
            <p><strong>Teacher's Solution:</strong> In 30 minutes, the hour hand moves: <code>30 &times; 0.5&deg; = 15&deg;</code> towards 4!</p>
            <p>Using Formula: <code>|30(3) - 5.5(30)| = |90 - 165| = 75&deg;</code>. The angle at 3:30 is <strong>75&deg;</strong>, which is an acute angle, NOT a right angle!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा का क्लासिक जाल: 3:30 बजे का कोण</div>
            <p><strong>सामान्य भूल:</strong> कई परीक्षार्थी सोचते हैं कि 3:30 बजे मिनट की सुई 6 पर है और घंटे की सुई 3 पर है, इसलिए कोण 90&deg; होगा। <strong>यह पूर्णतः गलत है!</strong></p>
            <p><strong>शिक्षक का समाधान:</strong> 30 मिनट में घंटे की सुई भी 3 से 4 की ओर आगे बढ़ेगी: <code>30 &times; 0.5&deg; = 15&deg;</code>!</p>
            <p>सूत्र द्वारा: <code>|30(3) - 5.5(30)| = |90 - 165| = 75&deg;</code>। अतः 3:30 बजे कोण <strong>75&deg; (न्यून कोण)</strong> होता है, समकोण नहीं!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch4",
    title: "Chapter 4: We the Travellers — II (Multiplication, Division & Timetables)",
    titleHi: "अध्याय 4: हम यात्री — II (गुणा, भाग, ऐकिक नियम और ट्रेन समय-सारणी)",
    desc: "NCERT Making Sums Equal puzzle, train timetable readings, 24-hour clock conversions, speed-distance-time unitary method, and average speed formulas.",
    descHi: "संख्याओं का योग बराबर करना पहेली, रेलवे समय-सारणी अध्ययन, 24-घंटे की घड़ी, चाल-दूरी-समय का ऐकिक नियम और औसत चाल के सूत्र।",
    competitionEdge: "Average speed formula 2xy/(x+y) for equal distances, 24-hour railway clock elapsed time calculations, and unitary method ticket fare problems.",
    competitionEdgeHi: "समान दूरी के लिए औसत चाल सूत्र 2xy/(x+y), रेलवे 24-घंटे की समय गणना और ऐकिक नियम द्वारा किराया निर्धारण।",
    sections: [
      {
        heading: "1. NCERT Core Activity: 'Making Sums Equal' & Train Timetables",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: 'योग बराबर करना' पहेली एवं ट्रेन समय-सारणी",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 4 bridges mathematical puzzles with real-world train journeys. In CTET Paper 1 and BPSC TRE Primary, at least one question is guaranteed on <strong>"Railway Timetable Reading & Elapsed Time"</strong>. Let us understand the concept of number balance and 24-hour railway schedules.
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Puzzle: Making Sums Equal with Minimum Moves</div>
            <p>Two groups of numbers are given: Group A = {2, 7, 9} (Sum = 18) and Group B = {5, 6, 11} (Sum = 22). Total sum = 40. Target sum for each group = 40 / 2 = 20.</p>
            <p><strong>Teacher's Principle:</strong> To balance the sums, we need to transfer a difference of <code>(22 - 18) / 2 = 2</code> from Group B to Group A! By interchanging <strong>7 from Group A with 9 from Group B</strong>, or <strong>interchanging 5 (from B) with 7 (from A)</strong>: Group A becomes {2, 9, 9} or {2, 5, 13}. The minimal swap is swapping a pair whose difference is exactly 2!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय प्रतियोगियों! अध्याय 4 गणितीय संतुलन और रेलवे यात्रा का अद्भुत संगम है। CTET और BPSC शिक्षक भर्ती में <strong>'ट्रेन समय-सारणी और यात्रा अवधि'</strong> पर 1 प्रश्न निश्चित रूप से पूछा जाता है। 24-घंटे की घड़ी और औसत चाल के नियमों को ध्यान से समझें!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT पहेली: न्यूनतम चाल में योग बराबर करना</div>
            <p>दो समूह दिए गए हैं: समूह A = {2, 7, 9} (योग = 18) और समूह B = {5, 6, 11} (योग = 22)। कुल योग = 40। दोनों का अभीष्ट योग = 40 &divide; 2 = 20 होना चाहिए।</p>
            <p><strong>संतुलन का नियम:</strong> समूह B का योग 4 अधिक है, अतः B से A में शुद्ध अंतर <code>4 &divide; 2 = 2</code> का होना चाहिए। यदि हम समूह A के 7 और समूह B के 9 की अदला-बदली कर दें, तो: समूह A = {2, 9, 9} = 20 और समूह B = {5, 6, 7} ? नहीं, ऐसे दो अंक चुनें जिनका अंतर 2 हो! जैसे B से 5 और A से 7 (अंतर 2)!</p>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Speed, Distance, Time & The Average Speed Trap",
        headingHi: "2. सूत्र एवं नियम संग्रह: चाल, दूरी, समय एवं औसत चाल का अचूक सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Chest: Speed, Distance & Time</div>
            <ul>
              <li><strong>Basic Relations:</strong><br/>
                $$\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}, \\quad \\text{Distance} = \\text{Speed} \\times \\text{Time}, \\quad \\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$$
              </li>
              <li><strong>Unit Conversion:</strong><br/>
                $$1 \\text{ km/h} = \\frac{5}{18} \\text{ m/s}, \\quad 1 \\text{ m/s} = \\frac{18}{5} \\text{ km/h}$$
              </li>
              <li><strong>Average Speed (Equal Distances):</strong> If a train travels from A to B at speed $x$ and returns from B to A at speed $y$:<br/>
                $$\\text{Average Speed} = \\frac{2xy}{x + y} \\quad (\\text{Harmonic Mean!})$$
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: चाल, दूरी, समय एवं औसत चाल सूत्र</div>
            <ul>
              <li><strong>मूल सूत्र:</strong><br/>
                $$\\text{चाल (Speed)} = \\frac{\\text{दूरी (Distance)}}{\\text{समय (Time)}}, \\quad \\text{दूरी} = \\text{चाल} \\times \\text{समय}, \\quad \\text{समय} = \\frac{\\text{दूरी}}{\\text{चाल}}$$
              </li>
              <li><strong>मात्रक परिवर्तन ट्रिक (Unit Conversion):</strong><br/>
                किमी/घंटा को मी/सेकंड में बदलने के लिए <strong>&times; 5/18</strong> करें।<br/>
                मी/सेकंड को किमी/घंटा में बदलने के लिए <strong>&times; 18/5</strong> करें।
              </li>
              <li><strong>समान दूरी के लिए औसत चाल:</strong> यदि कोई व्यक्ति स्टेशन A से B तक $x$ की चाल से जाए और वापस $y$ की चाल से लौटे:<br/>
                $$\\text{औसत चाल (Average Speed)} = \\frac{2xy}{x + y}$$
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: 24-Hour Railway Clock & Average Speed Pitfalls",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: 24-घंटे की रेलवे घड़ी व औसत चाल का घातक जाल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Trap 1: The Arithmetic Mean Trap in Average Speed</div>
            <p>Question: A train goes at 60 km/h and returns at 40 km/h. What is the average speed?</p>
            <p><strong>The Trap:</strong> Candidates calculate $(60 + 40)/2 = 50$ km/h. <strong>WRONG!</strong></p>
            <p><strong>Correct Solution:</strong> $\\frac{2 \\times 60 \\times 40}{60 + 40} = \\frac{4800}{100} = 48$ km/h!</p>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Trap 2: Railway 24-Hour Clock Midnight Crossing</div>
            <p>A train departs New Delhi at 21:45 on Monday and arrives at Patna at 07:15 on Tuesday. What is the travel duration?</p>
            <p><strong>Step 1:</strong> Time left on Monday: 24:00 - 21:45 = 2 hours 15 minutes.</p>
            <p><strong>Step 2:</strong> Time elapsed on Tuesday: 07 hours 15 minutes.</p>
            <p><strong>Total Duration:</strong> 2h 15m + 7h 15m = <strong>9 hours 30 minutes</strong>.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ जाल 1: औसत चाल में साधारण औसत $(x+y)/2$ का प्रयोग</div>
            <p>प्रश्न: एक ट्रेन 60 किमी/घंटा की गति से जाती है और 40 किमी/घंटा की गति से लौटती है। पूरी यात्रा की औसत चाल क्या है?</p>
            <p><strong>घातक भूल:</strong> परीक्षार्थी $(60 + 40)/2 = 50$ किमी/घंटा उत्तर लगा देते हैं। <strong>यह गलत है!</strong></p>
            <p><strong>सही उत्तर:</strong> $\\frac{2 \\times 60 \\times 40}{60 + 40} = \\frac{4800}{100} = \\mathbf{48\\text{ किमी/घंटा}}$!</p>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ जाल 2: मध्यरात्रि पार करने वाली ट्रेन यात्रा की समय गणना</div>
            <p>ट्रेन सोमवार को रात 21:45 पर नई दिल्ली से चलती है और मंगलवार सुबह 07:15 पर पटना पहुंचती है। यात्रा का कुल समय क्या है?</p>
            <p><strong>चरण 1:</strong> सोमवार को मध्यरात्रि तक का समय: 24:00 - 21:45 = 2 घंटे 15 मिनट।</p>
            <p><strong>चरण 2:</strong> मंगलवार की सुबह का समय: 7 घंटे 15 मिनट।</p>
            <p><strong>कुल यात्रा अवधि:</strong> 2 घंटे 15 मिनट + 7 घंटे 15 मिनट = <strong>9 घंटे 30 मिनट</strong>।</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch5",
    title: "Chapter 5: Far and Near (Metric Conversions & Perimeter)",
    titleHi: "अध्याय 5: दूर और पास (Far and Near: मीट्रिक प्रणाली व परिमाप)",
    desc: "NCERT unit selection guidelines, the metric conversion staircase (km, hm, dam, m, dm, cm, mm), area vs length units, and real-world distance estimates.",
    descHi: "उपयुक्त मात्रक का चयन, मीट्रिक प्रणाली की सीढ़ी (किमी, हेमी, डेमी, मी, डेसी, सेमी, मिमी), लंबाई बनाम क्षेत्रफल मात्रक और दूरी अनुमान।",
    competitionEdge: "Metric conversion staircase mnemonic, converting cm² to m² and mm³ to cm³, and CTET questions on measuring ribbons, wire boundaries, and road lengths.",
    competitionEdgeHi: "मीट्रिक रूपांतरण सीढ़ी ट्रिक, वर्ग सेमी से वर्ग मीटर और घन मिमी से घन सेमी में बदलना और तार की बाड़ व रिबन मापन पर आधारित प्रश्न।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Selecting the Appropriate Metric Unit",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: उपयुक्त मापन मात्रक का चयन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Aspirants, Chapter 5 introduces the concept that choosing the wrong unit leads to absurd numbers. NCERT asks students: Would you measure the thickness of a coin in kilometers, or the distance between Delhi and Kolkata in millimeters? In competitive exams, unit conversion is the easiest place to score full marks if you master the decimal staircase!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Unit Selection Table</div>
            <ul>
              <li><strong>Thickness of a pencil lead / coin:</strong> Millimeters (mm).</li>
              <li><strong>Length of an eraser / notebook:</strong> Centimeters (cm).</li>
              <li><strong>Height of a classroom door / length of saree:</strong> Meters (m).</li>
              <li><strong>Distance between two cities / railway track:</strong> Kilometers (km).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 5 हमें सिखाता है कि गलत मात्रक चुनने से गणना कितनी हास्यास्पद हो सकती है। क्या आप सिक्के की मोटाई किलोमीटर में नापेंगे, या दिल्ली से कोलकाता की दूरी मिलीमीटर में? शिक्षक भर्ती और अन्य प्रतियोगी परीक्षाओं में मात्रक परिवर्तन (Unit Conversion) पूरे अंक दिलाने वाला सबसे आसान विषय है!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT मात्रक चयन सूची</div>
            <ul>
              <li><strong>पेंसिल की नोक / सिक्के की मोटाई:</strong> मिलीमीटर (mm)।</li>
              <li><strong>रबर (Eraser) की लंबाई / पुस्तक की चौड़ाई:</strong> सेंटीमीटर (cm)।</li>
              <li><strong>कमरे के दरवाजे की ऊंचाई / साड़ी की लंबाई:</strong> मीटर (m)।</li>
              <li><strong>दो शहरों के बीच की दूरी / राष्ट्रीय राजमार्ग:</strong> किलोमीटर (km)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: The Metric Staircase & Conversion Formulas",
        headingHi: "2. सूत्र एवं नियम संग्रह: मीट्रिक प्रणाली की सीढ़ी एवं रूपांतरण सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Mnemonic: The Metric Staircase</div>
            <p>Remember this phrase from top to bottom (Step = &times;10 down, &divide;10 up):</p>
            <p style="text-align:center; font-weight:800; color:#1e40af;">
              <strong>K</strong>ing <strong>H</strong>enry <strong>D</strong>ied <strong>M</strong>other <strong>D</strong>idn't <strong>C</strong>ry <strong>M</strong>uch<br/>
              (Kilo &rarr; Hecto &rarr; Deca &rarr; [Meter/Gram/Liter] &rarr; Deci &rarr; Centi &rarr; Milli)
            </p>
            <ul>
              <li>$1 \\text{ km} = 10 \\text{ hm} = 100 \\text{ dam} = 1,000 \\text{ m}$</li>
              <li>$1 \\text{ m} = 10 \\text{ dm} = 100 \\text{ cm} = 1,000 \\text{ mm}$</li>
              <li>$1 \\text{ cm} = 10 \\text{ mm}$</li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>Prefix</th><th>Symbol</th><th>Factor of Base (Meter)</th><th>Example Conversion</th></tr>
            </thead>
            <tbody>
              <tr><td>Kilo (किलो)</td><td>k</td><td>1,000 &times; Base</td><td>1 km = 1,000 m</td></tr>
              <tr><td>Hecto (हेक्टो)</td><td>h</td><td>100 &times; Base</td><td>1 hm = 100 m</td></tr>
              <tr><td>Deca (डेका)</td><td>da</td><td>10 &times; Base</td><td>1 dam = 10 m</td></tr>
              <tr><td>Base (मीटर/लीटर/ग्राम)</td><td>m / L / g</td><td>1 &times; Base</td><td>1 m = 100 cm</td></tr>
              <tr><td>Deci (डेसी)</td><td>d</td><td>0.1 (1/10)</td><td>1 dm = 0.1 m = 10 cm</td></tr>
              <tr><td>Centi (सेंटी)</td><td>c</td><td>0.01 (1/100)</td><td>1 cm = 0.01 m = 10 mm</td></tr>
              <tr><td>Milli (मिली)</td><td>m</td><td>0.001 (1/1,000)</td><td>1 mm = 0.001 m = 0.1 cm</td></tr>
            </tbody>
          </table>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: मीट्रिक प्रणाली सीढ़ी ट्रिक</div>
            <p>मीट्रिक इकाइयों के क्रम को हमेशा इस पंक्ति से याद रखें:</p>
            <p style="text-align:center; font-weight:800; color:#1e40af;">
              <strong>किलो &rarr; हेक्टो &rarr; डेका &rarr; [मीटर / ग्राम / लीटर] &rarr; डेसी &rarr; सेंटी &rarr; मिली</strong><br/>
              (ऊपर से नीचे आते समय प्रत्येक पद पर <strong>&times; 10</strong> करें; नीचे से ऊपर जाते समय <strong>&divide; 10</strong> करें)
            </p>
            <ul>
              <li>$1 \\text{ किमी} = 1,000 \\text{ मीटर}$</li>
              <li>$1 \\text{ मीटर} = 100 \\text{ सेमी} = 1,000 \\text{ मिमी}$</li>
              <li>$1 \\text{ सेमी} = 10 \\text{ मिमी}$</li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>उपसर्ग (Prefix)</th><th>संकेत</th><th>आधार मात्रक से संबंध</th><th>रूपांतरण उदाहरण</th></tr>
            </thead>
            <tbody>
              <tr><td>किलो (Kilo)</td><td>k</td><td>1,000 &times; आधार</td><td>1 किमी = 1,000 मीटर</td></tr>
              <tr><td>हेक्टो (Hecto)</td><td>h</td><td>100 &times; आधार</td><td>1 हेमी = 100 मीटर</td></tr>
              <tr><td>डेका (Deca)</td><td>da</td><td>10 &times; आधार</td><td>1 डेकामी = 10 मीटर</td></tr>
              <tr><td>मूल इकाई (Meter/L/g)</td><td>m / L / g</td><td>1 &times; आधार</td><td>1 मीटर = 100 सेमी</td></tr>
              <tr><td>डेसी (Deci)</td><td>d</td><td>1/10 (0.1)</td><td>1 डेसीमी = 10 सेमी = 0.1 मीटर</td></tr>
              <tr><td>सेंटी (Centi)</td><td>c</td><td>1/100 (0.01)</td><td>1 सेमी = 10 मिमी = 0.01 मीटर</td></tr>
              <tr><td>मिली (Milli)</td><td>m</td><td>1/1,000 (0.001)</td><td>1 मिमी = 0.1 सेमी = 0.001 मीटर</td></tr>
            </tbody>
          </table>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Square and Cubic Unit Conversions",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: वर्ग मात्रक एवं घन मात्रक का खतरनाक जाल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Square Meter to Square Centimeter Blunder</div>
            <p><strong>The Mistake:</strong> Candidates know $1 \\text{ m} = 100 \\text{ cm}$, so they falsely assume $1 \\text{ m}^2 = 100 \\text{ cm}^2$! <strong>DISASTROUS ERROR!</strong></p>
            <p><strong>Teacher's Law of Dimensions:</strong></p>
            <ul>
              <li><strong>Length:</strong> $1 \\text{ m} = 100 \\text{ cm}$</li>
              <li><strong>Area:</strong> $1 \\text{ m}^2 = (100 \\text{ cm}) \\times (100 \\text{ cm}) = \\mathbf{10,000 \\text{ cm}^2}$ (Ten Thousand cm²)!</li>
              <li><strong>Volume:</strong> $1 \\text{ m}^3 = 100 \\times 100 \\times 100 = \\mathbf{1,000,000 \\text{ cm}^3}$ (One Million cm³)!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ वर्ग मीटर और वर्ग सेंटीमीटर का घातक जाल</div>
            <p><strong>सबसे बड़ी भूल:</strong> छात्र जानते हैं कि 1 मीटर = 100 सेमी होता है, इसलिए परीक्षा में वे 1 वर्ग मीटर = 100 वर्ग सेमी लिख देते हैं! <strong>यह भयंकर भूल है!</strong></p>
            <p><strong>विमाओं (Dimensions) का स्वर्णिम नियम:</strong></p>
            <ul>
              <li><strong>लंबाई (Length):</strong> $1 \\text{ मीटर} = 100 \\text{ सेमी}$</li>
              <li><strong>क्षेत्रफल (Area):</strong> $1 \\text{ वर्ग मीटर} = 100 \\text{ सेमी} \\times 100 \\text{ सेमी} = \\mathbf{10,000 \\text{ वर्ग सेमी}}$ (दस हजार वर्ग सेमी)!</li>
              <li><strong>आयतन (Volume):</strong> $1 \\text{ घन मीटर} = 100 \\times 100 \\times 100 = \\mathbf{10,00,000 \\text{ घन सेमी}}$ (दस लाख घन सेमी = 1,000 लीटर)!</li>
            </ul>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch6",
    title: "Chapter 6: The Dairy Farm (Capacity, Volume & Rates)",
    titleHi: "अध्याय 6: डेयरी फार्म (The Dairy Farm: धारिता, आयतन व मिश्रण)",
    desc: "NCERT dairy production tracking, box multiplication method, lattice multiplication algorithm, and unit digit calculation shortcuts.",
    descHi: "डेयरी दूध उत्पादन ट्रैकिंग, बॉक्स/ग्रिड गुणा विधि, लेटिस गुणा और इकाई अंक निकालने की जादुई ट्रिक्स।",
    competitionEdge: "Box method of breaking numbers by place value, Vedic math shortcuts for multiplying by 11, 25, 99, and cyclicity of unit digits in competitive tests.",
    competitionEdgeHi: "स्थानीय मान के आधार पर बॉक्स गुणा विधि, 11, 25, 99 से गुणा के वैदिक शॉर्टकट और इकाई अंक की चक्रीयता के नियम।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Milk Yield Calculations & The Box Multiplication Method",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: दुग्ध उत्पादन गणना एवं बॉक्स (ग्रिड) गुणा विधि",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Aspirants, Chapter 6 takes a dairy farm's morning and evening milk collection to teach large multiplications. Instead of rote columnar multiplication, NCERT emphasizes the <strong>Box (or Area) Method</strong>, which decomposes numbers into place values. This conceptual decomposition is exactly what modern pedagogy and CTET test!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Box Method: Multiplying 65 &times; 34</div>
            <p>Split 65 into <code>60 + 5</code> and 34 into <code>30 + 4</code>. Form a 2&times;2 grid:</p>
            <ul>
              <li>Cell 1 (60 &times; 30) = <strong>1,800</strong></li>
              <li>Cell 2 (60 &times; 4) = <strong>240</strong></li>
              <li>Cell 3 (5 &times; 30) = <strong>150</strong></li>
              <li>Cell 4 (5 &times; 4) = <strong>20</strong></li>
            </ul>
            <p>Summing all four partial products: <code>1,800 + 240 + 150 + 20 = 2,210</code>. Simple, zero-error, and transparent!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय प्रतियोगियों! अध्याय 6 एक डेयरी फार्म के सुबह और शाम के दूध उत्पादन के माध्यम से गुणा की संक्रिया सिखाता है। NCERT पारंपरिक रट्टा मार गुणन के स्थान पर <strong>बॉक्स (या ग्रिड) विधि</strong> सिखाती है, जो संख्याओं को स्थानीय मान में तोड़कर गुणा करती है। CTET पेडागोजी में यह प्रश्न बार-बार आता है!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT बॉक्स विधि: $65 \\times 34$ का गुणन</div>
            <p>65 को <code>60 + 5</code> में और 34 को <code>30 + 4</code> में तोड़ें। एक 2&times;2 का ग्रिड बनाएं:</p>
            <ul>
              <li>कोशिका 1 (60 &times; 30) = <strong>1,800</strong></li>
              <li>कोशिका 2 (60 &times; 4) = <strong>240</strong></li>
              <li>कोशिका 3 (5 &times; 30) = <strong>150</strong></li>
              <li>कोशिका 4 (5 &times; 4) = <strong>20</strong></li>
            </ul>
            <p>चारों भागों का योग: <code>1,800 + 240 + 150 + 20 = 2,210</code>। बिना किसी हासिल (carry) की भूल के शत-प्रतिशत सटीक परिणाम!</p>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Vedic Math Multiplications & Mental Arithmetic",
        headingHi: "2. सूत्र एवं नियम संग्रह: वैदिक गुणा शॉर्टकट व मानसिक अंकगणित ट्रिक्स",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Tricks: Fast Multiplications</div>
            <ul>
              <li><strong>Multiplying by 11:</strong> For a 2-digit number $ab$, the product is $a (a+b) b$. Example: $43 \\times 11 = 4(4+3)3 = 473$. If sum &ge; 10, carry 1 to the left: $78 \\times 11 = 7(15)8 = 858$.</li>
              <li><strong>Multiplying by 25:</strong> Divide by 4 and add two zeros (since $25 = 100/4$). Example: $64 \\times 25 = (64/4) \\times 100 = 1,600$.</li>
              <li><strong>Multiplying by 99:</strong> Multiply by 100 and subtract the number itself: $47 \\times 99 = 4,700 - 47 = 4,653$.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: सुपरफास्ट गुणा शॉर्टकट ट्रिक्स</div>
            <ul>
              <li><strong>11 से गुणा करने की ट्रिक:</strong> दो अंकों की संख्या $ab$ के लिए बीच में दोनों का योग लिख दें: $a (a+b) b$। उदाहरण: $43 \\times 11 = 4(4+3)3 = 473$। यदि योग 10 या अधिक हो तो 1 हासिल आगे जोड़ें: $78 \\times 11 = 7(15)8 = 858$।</li>
              <li><strong>25 से गुणा की ट्रिक:</strong> संख्या को 4 से भाग देकर आगे दो शून्य लगा दें ($25 = 100/4$): उदाहरण: $64 \\times 25 = (64/4) \\times 100 = 1,600$ (मात्र 1 सेकंड में!)।</li>
              <li><strong>99 से गुणा की ट्रिक:</strong> संख्या में 100 से गुणा करके स्वयं वही संख्या घटा लें: $47 \\times 99 = 4,700 - 47 = 4,653$।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Finding the Unit Digit of Large Products",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: बड़े गुणनफलों में इकाई अंक (Unit Digit) ज्ञात करना",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Unit Digit Golden Rule in BPSC & SSC</div>
            <p>Question: Find the unit digit of $346 \\times 279 \\times 415 \\times 832$.</p>
            <p><strong>The Golden Trick:</strong> Look for a combination of <strong>5</strong> with ANY <strong>even number</strong>! Here $5 \\times 2 = 10$. Any number multiplied by 10 ends in <strong>0</strong>! Therefore, the unit digit is instantly <strong>0</strong> without performing any calculation!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ इकाई अंक (Unit Digit) का स्वर्णिम प्रतियोगी नियम</div>
            <p>प्रश्न: गुणनफल $346 \\times 279 \\times 415 \\times 832$ का इकाई का अंक क्या होगा?</p>
            <p><strong>गुरुमंत्र ट्रिक:</strong> गुणनफल में हमेशा <strong>5</strong> और किसी भी <strong>सम संख्या (Even Number)</strong> का जोड़ा ढूंढें! यहाँ 415 का इकाई अंक 5 है और 832 का 2 है। $5 \\times 2 = 10$। 10 से किसी भी संख्या का गुणा होने पर अंत में सदैव <strong>0</strong> आता है! अतः बिना कोई गुणा किए उत्तर सीधा <strong>0</strong> होगा!</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch7",
    title: "Chapter 7: Shapes and Patterns (Spatial Geometry & Sequences)",
    titleHi: "अध्याय 7: आकृतियां और पैटर्न (2D/3D आकृतियां, यूलर सूत्र व जाली)",
    desc: "NCERT mat weaving activity, tessellations, rotational symmetry (1/2, 1/4, 1/3, 1/6 turns), and arithmetic progression patterns.",
    descHi: "चटाई की बुनाई गतिविधि, टेसेलेशन (टाइलिंग), घूर्णन सममिति (1/2, 1/4, 1/3, 1/6 घुमाव) और अंकगणितीय पैटर्न के व्यापक नियम।",
    competitionEdge: "Tessellating regular polygons condition (interior angle must divide 360°), Euler's formula V - E + F = 2, and finding the nth term of number patterns.",
    competitionEdgeHi: "नियमित बहुभुज टाइलिंग शर्त (आंतरिक कोण 360° का भाजक होना चाहिए), यूलर सूत्र V - E + F = 2 और पैटर्न का n-वां पद ज्ञात करना।",
    sections: [
      {
        heading: "1. NCERT Core Activity: Weaving Mats with Paper Strips & Tessellations",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: कागज़ की पट्टियों से चटाई की बुनाई एवं टेसेलेशन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 7 connects traditional Indian handicrafts (weaving mats with bamboo or paper strips) with advanced spatial geometry. NCERT shows how repeating simple 2D shapes without overlapping and without leaving any gaps covers a surface completely. This is mathematically known as a <strong>Tessellation</strong>!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Weaving Activity & Floor Tiling</div>
            <p>When weaving a mat with alternating colored strips, a repeating geometric motif emerges. When tiling a bathroom or kitchen floor:</p>
            <ul>
              <li><strong>Tessellation Definition:</strong> Covering a plane using one or more geometric shapes with <em>no overlaps and no gaps</em>.</li>
              <li><strong>Which Regular Polygons Tessellate Alone?</strong> Only three: <strong>Equilateral Triangles (60&deg;)</strong>, <strong>Squares (90&deg;)</strong>, and <strong>Regular Hexagons (120&deg;)</strong>!</li>
              <li><strong>Why not Regular Pentagons (108&deg;)?</strong> Because 360&deg; is not divisible by 108&deg; (360 / 108 = 3.33). Gaps will inevitably remain!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 7 भारतीय पारंपरिक हस्तशिल्प (कागज़ या बांस की पट्टियों से चटाई बुनना) को उच्च स्तरीय ज्यामिति से जोड़ता है। जब किसी तल को बिना किसी खाली स्थान के और बिना एक-दूसरे पर चढ़ाए ढका जाता है, तो उसे गणित में <strong>टेसेलेशन (Tessellation या टाइलिंग)</strong> कहते हैं। CTET और BPSC में यह सीधा पूछा जाता है!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT बुनाई गतिविधि एवं फर्श की टाइलिंग</div>
            <p>जब अलग-अलग रंगों की पट्टियों को एकांतर क्रम में बुना जाता है, तो एक दोहरावदार पैटर्न बनता है:</p>
            <ul>
              <li><strong>टेसेलेशन (Tessellation) की परिभाषा:</strong> किसी समतल को ज्यामितीय आकृतियों द्वारा इस प्रकार ढकना कि कोई खाली स्थान (Gap) न बचे और न ही आकृतियां एक-दूसरे पर चढ़ें।</li>
              <li><strong>अकेले कौन-से समबहुभुज टेसेलेट कर सकते हैं?</strong> केवल तीन: <strong>समबाहु त्रिभुज (60&deg;)</strong>, <strong>वर्ग (90&deg;)</strong> और <strong>सम-षट्भुज (120&deg;)</strong>!</li>
              <li><strong>सम-पंचभुज (108&deg;) क्यों नहीं कर सकता?</strong> क्योंकि 360&deg; को 108&deg; से पूरा-पूरा भाग नहीं दिया जा सकता ($360/108 = 3.33$)। अतः खाली जगह जरूर छूटेगी!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Rotational Symmetry Order & Euler's Formula",
        headingHi: "2. सूत्र एवं नियम संग्रह: घूर्णन सममिति का क्रम एवं 3D आकृतियों हेतु यूलर सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Chest: Symmetry & Polyhedra</div>
            <ul>
              <li><strong>Order of Rotational Symmetry:</strong> Number of times a figure matches its original orientation in one full 360&deg; rotation:<br/>
                $$\\text{Order} = \\frac{360^\\circ}{\\text{Smallest Angle of Rotation } \\theta}$$
              </li>
              <li><strong>Euler's Polyhedron Formula (यूलर का सूत्र):</strong> For any convex 3D solid having $V$ vertices, $E$ edges, and $F$ faces:<br/>
                $$\\mathbf{V - E + F = 2} \\quad \\text{or} \\quad F + V = E + 2$$
              </li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>3D Solid</th><th>Faces (F)</th><th>Vertices (V)</th><th>Edges (E)</th><th>Check V - E + F</th></tr>
            </thead>
            <tbody>
              <tr><td>Cube / Cuboid (घन/घनाभ)</td><td>6</td><td>8</td><td>12</td><td>8 - 12 + 6 = 2 ✅</td></tr>
              <tr><td>Triangular Prism (त्रिभुजाकार प्रिज्म)</td><td>5</td><td>6</td><td>9</td><td>6 - 9 + 5 = 2 ✅</td></tr>
              <tr><td>Square Pyramid (पिरामिड)</td><td>5</td><td>5</td><td>8</td><td>5 - 8 + 5 = 2 ✅</td></tr>
              <tr><td>Tetrahedron (चतुष्फलक)</td><td>4</td><td>4</td><td>6</td><td>4 - 6 + 4 = 2 ✅</td></tr>
            </tbody>
          </table>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: सममिति क्रम एवं यूलर सूत्र</div>
            <ul>
              <li><strong>घूर्णन सममिति का क्रम (Order of Rotational Symmetry):</strong> 360&deg; के पूर्ण चक्कर में आकृति कितनी बार मूल अवस्था के समान दिखाई देती है:<br/>
                $$\\text{क्रम (Order)} = \\frac{360^\\circ}{\\text{घूर्णन का न्यूनतम कोण } \\theta}$$
              </li>
              <li><strong>यूलर का सूत्र (Euler's Formula):</strong> किसी भी 3D ठोस जिसमें शीर्ष (Vertices $V$), किनारे (Edges $E$) और फलक (Faces $F$) हों:<br/>
                $$\\mathbf{F + V - E = 2} \\quad \\text{या} \\quad \\mathbf{F + V = E + 2}$$
              </li>
            </ul>
          </div>
          <table class="teacher-formula-table">
            <thead>
              <tr><th>3D ठोस आकृति</th><th>फलक (Faces F)</th><th>शीर्ष (Vertices V)</th><th>किनारे (Edges E)</th><th>यूलर सत्यापन (F + V - E)</th></tr>
            </thead>
            <tbody>
              <tr><td>घन / घनाभ (Cube/Cuboid)</td><td>6</td><td>8</td><td>12</td><td>6 + 8 - 12 = 2 ✅</td></tr>
              <tr><td>त्रिभुजाकार प्रिज्म (Prism)</td><td>5</td><td>6</td><td>9</td><td>5 + 6 - 9 = 2 ✅</td></tr>
              <tr><td>वर्गाकार पिरामिड (Pyramid)</td><td>5</td><td>5</td><td>8</td><td>5 + 5 - 8 = 2 ✅</td></tr>
              <tr><td>सम-चतुष्फलक (Tetrahedron)</td><td>4</td><td>4</td><td>6</td><td>4 + 4 - 6 = 2 ✅</td></tr>
            </tbody>
          </table>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Finding the Missing Face/Edge in TET Exams",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: अज्ञात फलक या शीर्ष ज्ञात करने के प्रश्न",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Guaranteed Euler Question in CTET</div>
            <p>Question: A polyhedron has 30 edges and 12 vertices. How many faces does it have?</p>
            <p><strong>Applying Euler's Formula:</strong> $F + V = E + 2 \\implies F + 12 = 30 + 2 = 32 \\implies F = 32 - 12 = \\mathbf{20}$ faces! (This is an icosahedron!).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ CTET व शिक्षक भर्ती का निश्चित यूलर प्रश्न</div>
            <p>प्रश्न: एक बहुफलक (Polyhedron) के 30 किनारे और 12 शीर्ष हैं। उसके फलकों (Faces) की संख्या कितनी होगी?</p>
            <p><strong>यूलर सूत्र से 5 सेकंड में हल:</strong> $F + V = E + 2 \\implies F + 12 = 30 + 2 = 32 \\implies F = 32 - 12 = \\mathbf{20}$ फलक! (यह एक बीस-फलकी आकृति / Icosahedron है)।</p>
          </div>
        `
      }
    ]
  },
  {
    id: "ncert-c5-math-ch8",
    title: "Chapter 8: Weight and Capacity (Mass Measurement & Scales)",
    titleHi: "अध्याय 8: भार और धारिता (द्रव्यमान मापन, तराजू व वाट)",
    desc: "NCERT Anu's weight checklist, common sense estimation of mass, weight units (kg, g, mg), capacity units (L, mL), and water displacement for volume.",
    descHi: "अनु की वजन जांच सूची, द्रव्यमान का व्यावहारिक अनुमान, भार की इकाइयां (किग्रा, ग्रा, मिग्रा), धारिता (ली, मिली) और जल विस्थापन विधि।",
    competitionEdge: "Mass vs weight distinction, 1 liter = 1000 cm³ equivalence, water displacement Archimedes principle, and pan balance equilibrium problems.",
    competitionEdgeHi: "द्रव्यमान व भार का अंतर, 1 लीटर = 1000 घन सेमी का संबंध, जल विस्थापन द्वारा अनियमित ठोस का आयतन और तुला संतुलन पहेलियां।",
    sections: [
      {
        heading: "1. NCERT Core Activity: 'Check! Check!' Anu's Weight Audit",
        headingHi: "1. एनसीईआरटी मूल गतिविधि: 'जाँचो! जाँचो!' अनु की वजन ऑडिट",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Teacher's Guidance Note</div>
            <div class="mentor-msg">
              Dear aspirants, Chapter 8 begins with a fun checklist where Anu recorded weights of household objects with absurd units (e.g. Iron Almirah = 40 grams!). NCERT uses this to develop <strong>numerical intuition and sense of magnitude</strong>. Competitive examinations frequently test whether candidates know the realistic physical range of objects!
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT Activity: Auditing Anu's Records</div>
            <ul>
              <li><strong>Iron Almirah:</strong> Anu wrote 40 g &rarr; <em>ABSURD!</em> Correct unit: <strong>40 kg to 60 kg</strong>.</li>
              <li><strong>Bag of Rice:</strong> Anu wrote 5 kg &rarr; <em>CORRECT!</em> Standard family rice bag is 5 kg to 10 kg.</li>
              <li><strong>Postage Stamp / Mustard seed:</strong> Measured in <strong>Milligrams (mg)</strong>.</li>
              <li><strong>Smartphone / Apple:</strong> Measured in <strong>Grams (g)</strong> (Approx. 150 g - 200 g).</li>
              <li><strong>Truck / Elephant:</strong> Measured in <strong>Quintals (100 kg)</strong> or <strong>Metric Tonnes (1,000 kg)</strong>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन</div>
            <div class="mentor-msg">
              प्रिय छात्रों! अध्याय 8 एक मनोरंजक गतिविधि से शुरू होता है जहाँ अनु ने घर के सामान का वजन लिखते समय अजीब गलतियाँ कीं (जैसे लोहे की अलमारी = 40 ग्राम!)। NCERT इसके जरिए छात्र में <strong>मात्रात्मक समझ और वास्तविक अनुमान</strong> विकसित करती है। CTET में सीधे प्रश्न आता है कि किसी वस्तु के लिए सबसे उपयुक्त भार क्या होगा।
            </div>
          </div>
          <div class="ncert-activity-box">
            <div class="activity-title">📚 NCERT गतिविधि: अनु के रिकॉर्ड की जांच</div>
            <ul>
              <li><strong>लोहे की अलमारी:</strong> अनु ने 40 ग्राम लिखा &rarr; <em>हास्यास्पद!</em> सही मान: <strong>40 किग्रा से 60 किग्रा</strong>।</li>
              <li><strong>चावल की बोरी:</strong> अनु ने 5 किग्रा लिखा &rarr; <em>बिल्कुल सही!</em></li>
              <li><strong>सरसों का दाना / डाक टिकट:</strong> मिलीग्राम (mg) में मापा जाता है।</li>
              <li><strong>स्मार्टफोन / सेब:</strong> ग्राम (g) में मापा जाता है (लगभग 150-200 ग्राम)।</li>
              <li><strong>हाथी / लोडेड ट्रक:</strong> क्विंटल (100 किग्रा) या मीट्रिक टन (1,000 किग्रा) में मापा जाता है।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Formula Section: Mass, Volume & The 1 Liter = 1,000 cm³ Golden Link",
        headingHi: "2. सूत्र एवं नियम संग्रह: द्रव्यमान, धारिता एवं 1 लीटर = 1,000 घन सेमी का स्वर्णिम सूत्र",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Master Formula Chest: Weight & Capacity Conversions</div>
            <ul>
              <li>$1 \\text{ Metric Tonne} = 10 \\text{ Quintals} = 1,000 \\text{ kg}$</li>
              <li>$1 \\text{ Quintal} = 100 \\text{ kg}$</li>
              <li>$1 \\text{ kg} = 1,000 \\text{ g}, \\quad 1 \\text{ g} = 1,000 \\text{ mg}$</li>
              <li><strong>The Great Bridge between Length, Volume & Capacity:</strong><br/>
                $$\\mathbf{1 \\text{ Liter} = 1,000 \\text{ mL} = 1,000 \\text{ cm}^3} \\quad \\implies \\quad 1 \\text{ mL} = 1 \\text{ cm}^3$$
              </li>
              <li>$1 \\text{ m}^3 = 1,000 \\text{ Liters}$ (A water tank of 1 m &times; 1 m &times; 1 m holds exactly 1,000 liters!).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ शिक्षक का गुरुमंत्र: भार व धारिता रूपांतरण का स्वर्णिम सूत्र</div>
            <ul>
              <li>$1 \\text{ मीट्रिक टन} = 10 \\text{ क्विंटल} = 1,000 \\text{ किग्रा}$</li>
              <li>$1 \\text{ क्विंटल} = 100 \\text{ किग्रा}$</li>
              <li>$1 \\text{ किग्रा} = 1,000 \\text{ ग्राम}, \\quad 1 \\text{ ग्राम} = 1,000 \\text{ मिलीग्राम}$</li>
              <li><strong>लंबाई, आयतन व धारिता का महा-सेतु:</strong><br/>
                $$\\mathbf{1 \\text{ लीटर} = 1,000 \\text{ मिली} = 1,000 \\text{ घन सेमी (cm}^3)} \\quad \\implies \\quad \\mathbf{1 \\text{ मिली} = 1 \\text{ घन सेमी}}$$
              </li>
              <li>$1 \\text{ घन मीटर (m}^3) = 1,000 \\text{ लीटर}$ (1 मी &times; 1 मी &times; 1 मी आकार की पानी की टंकी में ठीक 1,000 लीटर पानी आता है!)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Exam Alerts & Traps: Water Displacement & Pan Balance Puzzles",
        headingHi: "3. परीक्षा चेतावनी एवं शॉर्टकट: जल विस्थापन विधि व तराजू संतुलन पहेली",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Water Displacement Method (Archimedes Principle)</div>
            <p>Question: A measuring cylinder is filled with water up to 250 mL. When a stone is submerged, the water level rises to 380 mL. What is the volume of the stone?</p>
            <p><strong>Solution:</strong> $\\text{Volume} = 380 - 250 = 130 \\text{ mL}$. Since $1 \\text{ mL} = 1 \\text{ cm}^3$, the volume of the stone is exactly <strong>130 cm³</strong>!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ जल विस्थापन विधि (आर्किमिडीज सिद्धांत का आधार)</div>
            <p>प्रश्न: एक मापक बेलन में 250 मिली तक पानी भरा है। उसमें एक पत्थर डुबाने पर जल स्तर 380 मिली तक चढ़ जाता है। पत्थर का आयतन क्या होगा?</p>
            <p><strong>समाधान:</strong> $\\text{विस्थापित जल} = 380 - 250 = 130 \\text{ मिली}$। चूंकि $1 \\text{ मिली} = 1 \\text{ सेमी}^3$, इसलिए पत्थर का आयतन ठीक <strong>130 घन सेमी</strong> होगा!</p>
          </div>
        `
      }
    ]
  }
];
