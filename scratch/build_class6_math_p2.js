/**
 * build_class6_math_p2.js
 * NCERT Class 6 Mathematics (Ganita Prakash - NEP 2020)
 * Chapters 6 to 10:
 * Ch 6: Perimeter and Area (परिमाप और क्षेत्रफल)
 * Ch 7: Fractions (भिन्न - Units, Equivalents, Operations)
 * Ch 8: Playing with Constructions (रचनाओं का खेल - Bisectors, Angles, Compass)
 * Ch 9: Symmetry (सममिति - Reflectional & Rotational Symmetry, Order of Rotation)
 * Ch 10: The Other Side of Zero (शून्य के उस पार - Integers, Brahmagupta's Laws)
 * 
 * Exactly 30 bilingual competition-grade MCQs per chapter (150 total).
 */

const chapters = [
  // ==========================================
  // CHAPTER 6: Perimeter and Area
  // ==========================================
  {
    id: "ncert-c6-m06",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 6,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 6: Perimeter and Area (परिमाप और क्षेत्रफल)",
    titleHi: "अध्याय 6: परिमाप और क्षेत्रफल",
    readingTime: "20 mins read",
    badge: "Mensuration Foundation",
    desc: "Calculate perimeter of polygons, rectangles 2(l+b), squares 4a, equilateral triangles 3a, and regular hexagons 6a. Understand area of rectangles (lxb) and squares (a^2), grid square approximation for irregular shapes, fencing vs flooring cost problems, and area-perimeter paradoxes.",
    descHi: "बहुभुजों का परिमाप, आयत 2(l+b), वर्ग 4a, समबाहु त्रिभुज 3a और सम षट्भुज 6a का परिमाप। आयत व वर्ग का क्षेत्रफल, ग्रिड पेपर पर अनियमित आकृतियों का अनुमानित क्षेत्रफल, बाड़ लगाने व टाइलिंग के लागत प्रश्न, तथा समान परिमाप पर क्षेत्रफल का संबंध।",
    competitionEdge: "Frequent high-yield area in CTET Paper 2, BPSC TRE 4.0 Middle (6-8), SSC CGL/CHSL, and State Police SI. Tests differences between perimeter vs area, cost scaling, and perimeter-invariant area maximization.",
    competitionEdgeHi: "CTET पेपर 2, BPSC TRE 4.0 (कक्षा 6-8) और SSC CGL में क्षेत्रमिति का मूल आधार। परिमाप व क्षेत्रफल में अंतर, बाड़ लगाने की दर (प्रति मीटर) बनाम टाइल्स लगाने की दर (प्रति वर्ग मीटर), और निश्चित परिमाप में अधिकतम क्षेत्रफल पर प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. Concept of Perimeter: Formulas for Regular Polygons",
        headingHi: "1. परिमाप की अवधारणा: नियमित बहुभुजों के सूत्र",
        contentHtml: `
          <p><strong>Perimeter (परिमाप):</strong> The total distance covered along the boundary forming a closed figure.</p>
          <div class="note-formula-box">
            <h4>📏 Standard Perimeter Formulas:</h4>
            <ul>
              <li><strong>Rectangle:</strong> 2 &times; (Length + Breadth) = <strong>2(l + b)</strong></li>
              <li><strong>Square:</strong> 4 &times; side = <strong>4a</strong></li>
              <li><strong>Equilateral Triangle:</strong> 3 &times; side = <strong>3a</strong></li>
              <li><strong>Regular Pentagon:</strong> 5 &times; side = <strong>5a</strong></li>
              <li><strong>Regular Hexagon:</strong> 6 &times; side = <strong>6a</strong></li>
              <li><strong>Regular n-gon:</strong> n &times; side = <strong>n &times; s</strong></li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>परिमाप (Perimeter):</strong> किसी बंद समतलीय आकृति की बाह्य सीमा (किनारों) के चारों ओर की कुल दूरी।</p>
          <div class="note-formula-box">
            <h4>📏 मानक परिमाप सूत्र:</h4>
            <ul>
              <li><strong>आयत (Rectangle):</strong> 2 &times; (लंबाई + चौड़ाई) = <strong>2(l + b)</strong></li>
              <li><strong>वर्ग (Square):</strong> 4 &times; भुजा = <strong>4a</strong></li>
              <li><strong>समबाहु त्रिभुज (Equilateral Triangle):</strong> 3 &times; भुजा = <strong>3a</strong></li>
              <li><strong>सम पंचभुज (Regular Pentagon):</strong> 5 &times; भुजा = <strong>5a</strong></li>
              <li><strong>सम षट्भुज (Regular Hexagon):</strong> 6 &times; भुजा = <strong>6a</strong></li>
              <li><strong>सम n-भुज (Regular n-gon):</strong> n &times; भुजा = <strong>n &times; s</strong></li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Area Calculation: Rectangles, Squares & Grid Estimation",
        headingHi: "2. क्षेत्रफल की गणना: आयत, वर्ग एवं ग्रिड अनुमान विधि",
        contentHtml: `
          <p><strong>Area (क्षेत्रफल):</strong> The amount of planar surface enclosed by a closed boundary, measured in square units (cm<sup>2</sup>, m<sup>2</sup>).</p>
          <div class="note-formula-box">
            <h4>📐 Area Formulas:</h4>
            <ul>
              <li><strong>Area of Rectangle:</strong> Length &times; Breadth = <strong>l &times; b</strong></li>
              <li><strong>Area of Square:</strong> side &times; side = <strong>a<sup>2</sup></strong></li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 NCERT Grid Estimation Convention for Irregular Shapes:</h4>
            <ul>
              <li>Count fully enclosed unit squares as <strong>1</strong>.</li>
              <li>Count squares that are <strong>more than half filled</strong> as <strong>1</strong>.</li>
              <li>Count squares that are <strong>less than half filled</strong> as <strong>0 (ignore)</strong>.</li>
              <li>Count squares that are <strong>exactly half filled</strong> as <strong>1/2</strong>.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>क्षेत्रफल (Area):</strong> किसी बंद आकृति की सीमाओं द्वारा घेरा गया समतल पृष्ठ का भाग, जिसे वर्ग इकाइयों (सेमी<sup>2</sup>, मी<sup>2</sup>) में मापा जाता है।</p>
          <div class="note-formula-box">
            <h4>📐 क्षेत्रफल के प्रमुख सूत्र:</h4>
            <ul>
              <li><strong>आयत का क्षेत्रफल:</strong> लंबाई &times; चौड़ाई = <strong>l &times; b</strong></li>
              <li><strong>वर्ग का क्षेत्रफल:</strong> भुजा &times; भुजा = <strong>a<sup>2</sup></strong></li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 अनियमित आकृतियों के लिए NCERT ग्रिड अनुमान नियम:</h4>
            <ul>
              <li>पूर्ण रूप से भरे वर्ग को <strong>1</strong> गिनें।</li>
              <li>आधे से अधिक भरे वर्ग को <strong>1</strong> गिनें।</li>
              <li>आधे से कम भरे वर्ग को <strong>0 (छोड़ दें)</strong>।</li>
              <li>ठीक आधे भरे वर्ग को <strong>1/2</strong> गिनें।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Perimeter vs Area: Competitive Traps & Optimization",
        headingHi: "3. परिमाप बनाम क्षेत्रफल: प्रतियोगी परीक्षाओं के पेंच व अनुकूलन",
        contentHtml: `
          <div class="note-formula-box">
            <h4>💡 Critical Exam Takeaways:</h4>
            <ul>
              <li><strong>Two figures with the SAME PERIMETER do NOT necessarily have the same area!</strong> Example: A 6&times;6 square has perimeter 24 and area 36. An 8&times;4 rectangle also has perimeter 24, but area is only 32!</li>
              <li><strong>Maximizing Area with Fixed Perimeter:</strong> Among all rectangles with a given constant perimeter, a <strong>Square</strong> encloses the MAXIMUM area!</li>
              <li><strong>Cost Differentiation:</strong>
                <ul>
                  <li>Cost of Fencing / Boundary Wire / Border Lace = <strong>Perimeter &times; Rate per linear meter</strong>.</li>
                  <li>Cost of Paving / Carpeting / Tiling / Grassing = <strong>Area &times; Rate per square meter</strong>.</li>
                </ul>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>💡 महत्वपूर्ण प्रतियोगी निष्कर्ष:</h4>
            <ul>
              <li><strong>समान परिमाप वाली आकृतियों का क्षेत्रफल समान होना आवश्यक नहीं है!</strong> उदाहरण: 6&times;6 वर्ग का परिमाप 24 और क्षेत्रफल 36 है। 8&times;4 आयत का परिमाप भी 24 है, किंतु क्षेत्रफल केवल 32 है!</li>
              <li><strong>निश्चित परिमाप में अधिकतम क्षेत्रफल:</strong> दिए गए किसी निश्चित परिमाप के सभी संभव आयतों में से <strong>वर्ग</strong> सबसे अधिक क्षेत्रफल घेरता है!</li>
              <li><strong>लागत का अंतर:</strong>
                <ul>
                  <li>तार या बाड़ लगाने की लागत = <strong>परिमाप &times; प्रति मीटर दर</strong>।</li>
                  <li>फर्श, टाइल लगाने, घास बोने या कालीन बिछाने की लागत = <strong>क्षेत्रफल &times; प्रति वर्ग मीटर दर</strong>।</li>
                </ul>
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the perimeter of a rectangle with length 18 cm and breadth 12 cm?",
        qHi: "18 सेमी लंबाई और 12 सेमी चौड़ाई वाले आयत का परिमाप क्या होगा?",
        options: ["30 cm", "60 cm", "216 cm", "120 cm"],
        optionsHi: ["30 सेमी", "60 सेमी", "216 सेमी", "120 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Primary",
        explanation: "Perimeter = 2(l + b) = 2(18 + 12) = 2 * 30 = 60 cm.",
        explanationHi: "परिमाप = 2(l + b) = 2(18 + 12) = 2 * 30 = 60 सेमी।"
      },
      {
        id: 2,
        q: "If the perimeter of a square park is 84 meters, what is the length of each side?",
        qHi: "यदि एक वर्गाकार पार्क का परिमाप 84 मीटर है, तो उसकी प्रत्येक भुजा की लंबाई क्या होगी?",
        options: ["18 m", "21 m", "24 m", "42 m"],
        optionsHi: ["18 मीटर", "21 मीटर", "24 मीटर", "42 मीटर"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC MTS",
        explanation: "Side = Perimeter / 4 = 84 / 4 = 21 meters.",
        explanationHi: "भुजा = परिमाप / 4 = 84 / 4 = 21 मीटर।"
      },
      {
        id: 3,
        q: "What is the area of a square whose perimeter is 40 cm?",
        qHi: "उस वर्ग का क्षेत्रफल क्या होगा जिसका परिमाप 40 सेमी है?",
        options: ["80 sq cm", "100 sq cm", "160 sq cm", "400 sq cm"],
        optionsHi: ["80 वर्ग सेमी", "100 वर्ग सेमी", "160 वर्ग सेमी", "400 वर्ग सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 2 & UPTET Paper 2",
        explanation: "Side = 40 / 4 = 10 cm. Area = 10 * 10 = 100 sq cm.",
        explanationHi: "भुजा = 40 / 4 = 10 सेमी। क्षेत्रफल = 10 * 10 = 100 वर्ग सेमी।"
      },
      {
        id: 4,
        q: "Find the cost of fencing a rectangular field 250 m long and 150 m wide at the rate of ₹20 per meter.",
        qHi: "250 मीटर लंबे और 150 मीटर चौड़े आयताकार खेत के चारों ओर ₹20 प्रति मीटर की दर से बाड़ लगाने का खर्च क्या होगा?",
        options: ["₹8,000", "₹12,000", "₹16,000", "₹20,000"],
        optionsHi: ["₹8,000", "₹12,000", "₹16,000", "₹20,000"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & Railway NTPC",
        explanation: "Perimeter = 2(250 + 150) = 2 * 400 = 800 m. Cost = 800 * 20 = ₹16,000.",
        explanationHi: "परिमाप = 2(250 + 150) = 2 * 400 = 800 मीटर। कुल खर्च = 800 * 20 = ₹16,000।"
      },
      {
        id: 5,
        q: "Find the cost of tiling a rectangular hall 12 m long and 8 m wide at the rate of ₹50 per square meter.",
        qHi: "12 मीटर लंबे और 8 मीटर चौड़े आयताकार हॉल में ₹50 प्रति वर्ग मीटर की दर से टाइल लगाने का खर्च क्या होगा?",
        options: ["₹2,000", "₹3,600", "₹4,800", "₹5,400"],
        optionsHi: ["₹2,000", "₹3,600", "₹4,800", "₹5,400"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Area = 12 * 8 = 96 sq m. Cost = 96 * 50 = ₹4,800.",
        explanationHi: "क्षेत्रफल = 12 * 8 = 96 वर्ग मीटर। कुल खर्च = 96 * 50 = ₹4,800।"
      },
      {
        id: 6,
        q: "What is the perimeter of a regular hexagon with each side measuring 8.5 cm?",
        qHi: "प्रत्येक 8.5 सेमी भुजा वाले सम षट्भुज (Regular Hexagon) का परिमाप क्या होगा?",
        options: ["42.5 cm", "51.0 cm", "59.5 cm", "68.0 cm"],
        optionsHi: ["42.5 सेमी", "51.0 सेमी", "59.5 सेमी", "68.0 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 2 & DSSSB",
        explanation: "A regular hexagon has 6 equal sides. Perimeter = 6 * 8.5 = 51 cm.",
        explanationHi: "सम षट्भुज की 6 बराबर भुजाएँ होती हैं। परिमाप = 6 * 8.5 = 51 सेमी।"
      },
      {
        id: 7,
        q: "A wire of length 36 cm is bent into the shape of an equilateral triangle. What is the length of each side?",
        qHi: "36 सेमी लंबे एक तार को मोड़कर एक समबाहु त्रिभुज बनाया जाता है। प्रत्येक भुजा की लंबाई क्या होगी?",
        options: ["9 cm", "12 cm", "15 cm", "18 cm"],
        optionsHi: ["9 सेमी", "12 सेमी", "15 सेमी", "18 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Equilateral triangle has 3 equal sides. Side = 36 / 3 = 12 cm.",
        explanationHi: "समबाहु त्रिभुज की 3 समान भुजाएँ होती हैं। भुजा = 36 / 3 = 12 सेमी।"
      },
      {
        id: 8,
        q: "If the length and breadth of a rectangle are both doubled, by how many times does its area increase?",
        qHi: "यदि किसी आयत की लंबाई और चौड़ाई दोनों को दोगुना कर दिया जाए, तो उसका क्षेत्रफल कितने गुना बढ़ जाएगा?",
        options: ["2 times", "4 times", "6 times", "8 times"],
        optionsHi: ["2 गुना", "4 गुना", "6 गुना", "8 गुना"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "New Area = (2l) * (2b) = 4(l * b) = 4 times the original area.",
        explanationHi: "नया क्षेत्रफल = (2l) * (2b) = 4(l * b) = मूल क्षेत्रफल का 4 गुना।"
      },
      {
        id: 9,
        q: "If the side of a square is doubled, by how many times does its perimeter increase?",
        qHi: "यदि किसी वर्ग की भुजा को दोगुना कर दिया जाए, तो उसका परिमाप कितने गुना बढ़ जाएगा?",
        options: ["2 times", "4 times", "8 times", "Remains same"],
        optionsHi: ["2 गुना", "4 गुना", "8 गुना", "समान रहेगा"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Perimeter = 4(2a) = 2(4a) = 2 times.",
        explanationHi: "परिमाप = 4(2a) = 2(4a) = ठीक 2 गुना।"
      },
      {
        id: 10,
        q: "How many square tiles of side 20 cm are needed to pave the floor of a room measuring 4 m by 3 m?",
        qHi: "4 मीटर लंबे और 3 मीटर चौड़े कमरे के फर्श पर 20 सेमी भुजा वाली कितनी वर्गाकार टाइलें लगेंगी?",
        options: ["150", "200", "300", "400"],
        optionsHi: ["150", "200", "300", "400"],
        ans: 2,
        pyqRef: "BPSC TRE 4.0 Middle & Railway Group D",
        explanation: "Room area = 400 cm * 300 cm = 120,000 sq cm. Tile area = 20 * 20 = 400 sq cm. Tiles needed = 120,000 / 400 = 300.",
        explanationHi: "कमरे का क्षेत्रफल = 400 सेमी * 300 सेमी = 120,000 वर्ग सेमी। टाइल का क्षेत्रफल = 20 * 20 = 400 वर्ग सेमी। कुल टाइलें = 120,000 / 400 = 300।"
      },
      {
        id: 11,
        q: "A rectangular plot of land has an area of 500 sq m. If its width is 20 m, what is its perimeter?",
        qHi: "एक आयताकार भूखंड का क्षेत्रफल 500 वर्ग मीटर है। यदि इसकी चौड़ाई 20 मीटर है, तो इसका परिमाप क्या होगा?",
        options: ["70 m", "90 m", "100 m", "120 m"],
        optionsHi: ["70 मीटर", "90 मीटर", "100 मीटर", "120 मीटर"],
        ans: 1,
        pyqRef: "SSC CHSL & BPSC TRE Middle",
        explanation: "Length = 500 / 20 = 25 m. Perimeter = 2(25 + 20) = 2 * 45 = 90 m.",
        explanationHi: "लंबाई = 500 / 20 = 25 मीटर। परिमाप = 2(25 + 20) = 2 * 45 = 90 मीटर।"
      },
      {
        id: 12,
        q: "What is the perimeter of a regular pentagon of side 12 cm?",
        qHi: "12 सेमी भुजा वाले सम पंचभुज (Regular Pentagon) का परिमाप क्या होगा?",
        options: ["48 cm", "60 cm", "72 cm", "84 cm"],
        optionsHi: ["48 सेमी", "60 सेमी", "72 सेमी", "84 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Perimeter = 5 * 12 = 60 cm.",
        explanationHi: "परिमाप = 5 * 12 = 60 सेमी।"
      },
      {
        id: 13,
        q: "Two rectangles have the same perimeter of 28 cm. Rectangle A is 8 cm by 6 cm, and Rectangle B is 10 cm by 4 cm. Which has greater area?",
        qHi: "दो आयतों का परिमाप 28 सेमी समान है। आयत A की भुजाएँ 8 सेमी और 6 सेमी हैं, तथा आयत B की 10 सेमी और 4 सेमी। किसका क्षेत्रफल अधिक है?",
        options: ["Rectangle A (48 sq cm)", "Rectangle B (40 sq cm)", "Both have equal area", "Cannot be determined"],
        optionsHi: ["आयत A (48 वर्ग सेमी)", "आयत B (40 वर्ग सेमी)", "दोनों का बराबर है", "ज्ञात नहीं किया जा सकता"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CTET Pedagogy",
        explanation: "Area A = 8 * 6 = 48 sq cm. Area B = 10 * 4 = 40 sq cm. Rectangle A has greater area.",
        explanationHi: "आयत A = 8 * 6 = 48 वर्ग सेमी। आयत B = 10 * 4 = 40 वर्ग सेमी। आयत A का क्षेत्रफल अधिक है।"
      },
      {
        id: 14,
        q: "Among all rectangles with a fixed perimeter of 32 cm, which one encloses the MAXIMUM area?",
        qHi: "32 सेमी के निश्चित परिमाप वाले सभी आयतों में से किस आयत का क्षेत्रफल सर्वाधिक होगा?",
        options: ["Rectangle of 10 cm x 6 cm", "Rectangle of 12 cm x 4 cm", "Square of side 8 cm", "Rectangle of 15 cm x 1 cm"],
        optionsHi: ["10 सेमी x 6 सेमी आयत", "12 सेमी x 4 सेमी आयत", "8 सेमी भुजा वाला वर्ग", "15 सेमी x 1 सेमी आयत"],
        ans: 2,
        pyqRef: "CSAT & Advanced Math Aptitude",
        explanation: "For a fixed perimeter, a square has maximum area. Side = 32 / 4 = 8 cm. Area = 8^2 = 64 sq cm (greater than 60, 48, 15).",
        explanationHi: "निश्चित परिमाप में वर्ग का क्षेत्रफल अधिकतम होता है। भुजा = 32 / 4 = 8 सेमी। क्षेत्रफल = 64 वर्ग सेमी।"
      },
      {
        id: 15,
        q: "On a grid of 1 cm unit squares, an irregular leaf shape covers 14 fully filled squares, 8 squares more than half filled, and 6 squares less than half filled. What is its estimated area?",
        qHi: "1 सेमी ग्रिड पेपर पर एक पत्ती 14 पूर्ण भरे वर्ग, 8 आधे से अधिक भरे वर्ग, और 6 आधे से कम भरे वर्ग घेरती है। पत्ती का अनुमानित क्षेत्रफल क्या है?",
        options: ["14 sq cm", "18 sq cm", "22 sq cm", "28 sq cm"],
        optionsHi: ["14 वर्ग सेमी", "18 वर्ग सेमी", "22 वर्ग सेमी", "28 वर्ग सेमी"],
        ans: 2,
        pyqRef: "NCERT Class 6 Chapter 6 Method & CTET",
        explanation: "By NCERT rule: 14 (full) + 8 (>half) + 0 (<half) = 22 sq cm.",
        explanationHi: "एनसीईआरटी नियमानुसार: 14 (पूर्ण) + 8 (आधे से अधिक) + 0 (आधे से कम) = 22 वर्ग सेमी।"
      },
      {
        id: 16,
        q: "What is the area of a rectangle whose length is 15 cm and breadth is one-third of its length?",
        qHi: "उस आयत का क्षेत्रफल क्या होगा जिसकी लंबाई 15 सेमी है और चौड़ाई उसकी लंबाई की एक-तिहाई है?",
        options: ["45 sq cm", "75 sq cm", "90 sq cm", "120 sq cm"],
        optionsHi: ["45 वर्ग सेमी", "75 वर्ग सेमी", "90 वर्ग सेमी", "120 वर्ग सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Breadth = 15 / 3 = 5 cm. Area = 15 * 5 = 75 sq cm.",
        explanationHi: "चौड़ाई = 15 / 3 = 5 सेमी। क्षेत्रफल = 15 * 5 = 75 वर्ग सेमी।"
      },
      {
        id: 17,
        q: "A square of side 10 cm has 4 smaller squares of side 2 cm cut out from each of its four corners. What is the perimeter of the remaining shape?",
        qHi: "10 सेमी भुजा वाले एक वर्ग के चारों कोनों से 2 सेमी भुजा वाले 4 छोटे वर्ग काट लिए जाते हैं। शेष बची आकृति का परिमाप क्या होगा?",
        options: ["32 cm", "40 cm", "48 cm", "24 cm"],
        optionsHi: ["32 सेमी", "40 सेमी", "48 सेमी", "24 सेमी"],
        ans: 1,
        pyqRef: "Olympiad & CTET Paper 2 (Classic Paradox)",
        explanation: "Cutting a corner square removes 2 units along edges but adds 2 units inward, leaving the total perimeter unchanged at 4 * 10 = 40 cm!",
        explanationHi: "कोने से वर्ग काटने पर 2 सेमी बाहर से हटती है किंतु 2 सेमी अंदर की ओर जुड़ जाती है, जिससे कुल परिमाप 40 सेमी ही रहता है!"
      },
      {
        id: 18,
        q: "What is the perimeter of an isosceles triangle with equal sides of 8 cm each and third side of 6 cm?",
        qHi: "एक समद्विबाहु त्रिभुज का परिमाप क्या होगा जिसकी दो समान भुजाएँ 8 सेमी प्रत्येक तथा तीसरी भुजा 6 सेमी है?",
        options: ["18 cm", "20 cm", "22 cm", "24 cm"],
        optionsHi: ["18 सेमी", "20 सेमी", "22 सेमी", "24 सेमी"],
        ans: 2,
        pyqRef: "State TET & BPSC TRE Middle",
        explanation: "Perimeter = 8 + 8 + 6 = 22 cm.",
        explanationHi: "परिमाप = 8 + 8 + 6 = 22 सेमी।"
      },
      {
        id: 19,
        q: "A rectangular garden 50 m long and 30 m wide has a 2 m wide walking path built all around INSIDE it. What is the area of the walking path?",
        qHi: "50 मीटर लंबे और 30 मीटर चौड़े आयताकार बगीचे के अंदर चारों तरफ 2 मीटर चौड़ा रास्ता बना है। रास्ते का क्षेत्रफल क्या होगा?",
        options: ["304 sq m", "320 sq m", "336 sq m", "350 sq m"],
        optionsHi: ["304 वर्ग मीटर", "320 वर्ग मीटर", "336 वर्ग मीटर", "350 वर्ग मीटर"],
        ans: 0,
        pyqRef: "SSC CGL Tier 1 & Railway NTPC",
        explanation: "Outer Area = 50 * 30 = 1500 sq m. Inner dimensions = (50 - 4) * (30 - 4) = 46 * 26 = 1196 sq m. Path Area = 1500 - 1196 = 304 sq m.",
        explanationHi: "बाहरी क्षेत्रफल = 50 * 30 = 1500 वर्ग मीटर। आंतरिक आयाम = 46 * 26 = 1196 वर्ग मीटर। रास्ते का क्षेत्रफल = 1500 - 1196 = 304 वर्ग मीटर।"
      },
      {
        id: 20,
        q: "How many meters of lace are required to sew around the edges of 5 square table-cloths of side 1.5 m each?",
        qHi: "1.5 मीटर भुजा वाली 5 वर्गाकार मेजपोशों के किनारों पर सिलने के लिए कितने मीटर लेस की आवश्यकता होगी?",
        options: ["20 m", "25 m", "30 m", "35 m"],
        optionsHi: ["20 मीटर", "25 मीटर", "30 मीटर", "35 मीटर"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Perimeter of one cloth = 4 * 1.5 = 6 m. For 5 cloths = 5 * 6 = 30 meters.",
        explanationHi: "एक मेजपोश का परिमाप = 4 * 1.5 = 6 मीटर। 5 मेजपोशों के लिए = 5 * 6 = 30 मीटर।"
      },
      {
        id: 21,
        q: "The area of a rectangle is 96 sq cm and its length is 12 cm. What is its perimeter?",
        qHi: "एक आयत का क्षेत्रफल 96 वर्ग सेमी है और उसकी लंबाई 12 सेमी है। उसका परिमाप क्या होगा?",
        options: ["36 cm", "40 cm", "44 cm", "48 cm"],
        optionsHi: ["36 सेमी", "40 सेमी", "44 सेमी", "48 सेमी"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Breadth = 96 / 12 = 8 cm. Perimeter = 2(12 + 8) = 2 * 20 = 40 cm.",
        explanationHi: "चौड़ाई = 96 / 12 = 8 सेमी। परिमाप = 2(12 + 8) = 2 * 20 = 40 सेमी।"
      },
      {
        id: 22,
        q: "The side of a square is 14 cm. What is the ratio of its perimeter to its area?",
        qHi: "एक वर्ग की भुजा 14 सेमी है। इसके परिमाप और इसके क्षेत्रफल का अनुपात क्या होगा?",
        options: ["1 : 7", "2 : 7", "4 : 7", "7 : 2"],
        optionsHi: ["1 : 7", "2 : 7", "4 : 7", "7 : 2"],
        ans: 1,
        pyqRef: "SSC CHSL & Railway Group D",
        explanation: "Perimeter = 4 * 14 = 56 cm. Area = 14 * 14 = 196 sq cm. Ratio = 56 / 196 = 2 / 7.",
        explanationHi: "परिमाप = 56 सेमी। क्षेत्रफल = 196 वर्ग सेमी। अनुपात = 56 / 196 = 2 / 7।"
      },
      {
        id: 23,
        q: "If the perimeter of a regular octagon is 64 cm, what is the length of each side?",
        qHi: "यदि एक सम अष्टभुज (Regular Octagon) का परिमाप 64 सेमी है, तो प्रत्येक भुजा की लंबाई क्या होगी?",
        options: ["6 cm", "8 cm", "10 cm", "12 cm"],
        optionsHi: ["6 सेमी", "8 सेमी", "10 सेमी", "12 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "A regular octagon has 8 equal sides. Side = 64 / 8 = 8 cm.",
        explanationHi: "सम अष्टभुज की 8 समान भुजाएँ होती हैं। भुजा = 64 / 8 = 8 सेमी।"
      },
      {
        id: 24,
        q: "A room is 5 m 40 cm long and 4 m 50 cm wide. What is its floor area in square meters?",
        qHi: "एक कमरा 5 मीटर 40 सेमी लंबा और 4 मीटर 50 सेमी चौड़ा है। इसका फर्श क्षेत्रफल वर्ग मीटर में क्या होगा?",
        options: ["22.50 sq m", "24.30 sq m", "25.20 sq m", "26.40 sq m"],
        optionsHi: ["22.50 वर्ग मीटर", "24.30 वर्ग मीटर", "25.20 वर्ग मीटर", "26.40 वर्ग मीटर"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "5.4 m * 4.5 m = 24.3 sq m.",
        explanationHi: "5.4 मीटर * 4.5 मीटर = 24.3 वर्ग मीटर।"
      },
      {
        id: 25,
        q: "An athlete runs 6 rounds of a rectangular track 120 m long and 80 m wide. What is the total distance run?",
        qHi: "एक एथलीट 120 मीटर लंबे और 80 मीटर चौड़े आयताकार ट्रैक के 6 चक्कर लगाता है। उसके द्वारा तय की गई कुल दूरी क्या है?",
        options: ["1.8 km", "2.4 km", "3.0 km", "3.6 km"],
        optionsHi: ["1.8 किमी", "2.4 किमी", "3.0 किमी", "3.6 किमी"],
        ans: 1,
        pyqRef: "Railway NTPC & Police SI",
        explanation: "Perimeter = 2(120 + 80) = 400 m. 6 rounds = 6 * 400 = 2400 m = 2.4 km.",
        explanationHi: "एक चक्कर (परिमाप) = 2(120 + 80) = 400 मीटर। 6 चक्कर = 2400 मीटर = 2.4 किमी।"
      },
      {
        id: 26,
        q: "If 1 hectare = 10,000 sq m, what is the side of a square field whose area is 1 hectare?",
        qHi: "यदि 1 हेक्टेयर = 10,000 वर्ग मीटर है, तो 1 हेक्टेयर क्षेत्रफल वाले वर्गाकार खेत की भुजा क्या होगी?",
        options: ["50 m", "100 m", "200 m", "1000 m"],
        optionsHi: ["50 मीटर", "100 मीटर", "200 मीटर", "1000 मीटर"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC MTS",
        explanation: "Side = sqrt(10,000) = 100 meters.",
        explanationHi: "भुजा = sqrt(10,000) = 100 मीटर।"
      },
      {
        id: 27,
        q: "The perimeter of a square is equal to the perimeter of a rectangle of 16 cm by 8 cm. What is the area of the square?",
        qHi: "एक वर्ग का परिमाप 16 सेमी और 8 सेमी भुजा वाले आयत के परिमाप के बराबर है। वर्ग का क्षेत्रफल क्या होगा?",
        options: ["128 sq cm", "144 sq cm", "160 sq cm", "196 sq cm"],
        optionsHi: ["128 वर्ग सेमी", "144 वर्ग सेमी", "160 वर्ग सेमी", "196 वर्ग सेमी"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Rectangle perimeter = 2(16 + 8) = 48 cm. Square side = 48 / 4 = 12 cm. Square area = 12 * 12 = 144 sq cm.",
        explanationHi: "आयत का परिमाप = 2(16 + 8) = 48 सेमी। वर्ग की भुजा = 48 / 4 = 12 सेमी। वर्ग का क्षेत्रफल = 12 * 12 = 144 वर्ग सेमी।"
      },
      {
        id: 28,
        q: "What is the cost of leveling a square playground of side 60 m at ₹15 per square meter?",
        qHi: "60 मीटर भुजा वाले वर्गाकार खेल के मैदान को ₹15 प्रति वर्ग मीटर की दर से समतल करने का खर्च क्या होगा?",
        options: ["₹36,000", "₹45,000", "₹54,000", "₹60,000"],
        optionsHi: ["₹36,000", "₹45,000", "₹54,000", "₹60,000"],
        ans: 2,
        pyqRef: "Railway Group D & SSC CHSL",
        explanation: "Area = 60 * 60 = 3600 sq m. Cost = 3600 * 15 = ₹54,000.",
        explanationHi: "क्षेत्रफल = 60 * 60 = 3600 वर्ग मीटर। खर्च = 3600 * 15 = ₹54,000।"
      },
      {
        id: 29,
        q: "How many 1 cm squares fit into a rectangle of length 20 cm and breadth 15 cm?",
        qHi: "20 सेमी लंबाई और 15 सेमी चौड़ाई वाले आयत में 1 सेमी के कितने वर्ग समा सकते हैं?",
        options: ["150", "200", "300", "350"],
        optionsHi: ["150", "200", "300", "350"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Number of unit squares = Area of rectangle = 20 * 15 = 300.",
        explanationHi: "इकाई वर्गों की संख्या = आयत का क्षेत्रफल = 20 * 15 = 300।"
      },
      {
        id: 30,
        q: "If the area of a square is 256 sq cm, what is its perimeter?",
        qHi: "यदि एक वर्ग का क्षेत्रफल 256 वर्ग सेमी है, तो इसका परिमाप क्या होगा?",
        options: ["48 cm", "56 cm", "64 cm", "72 cm"],
        optionsHi: ["48 सेमी", "56 सेमी", "64 सेमी", "72 सेमी"],
        ans: 2,
        pyqRef: "SSC CGL / CHSL & BPSC TRE",
        explanation: "Side = sqrt(256) = 16 cm. Perimeter = 4 * 16 = 64 cm.",
        explanationHi: "भुजा = sqrt(256) = 16 सेमी। परिमाप = 4 * 16 = 64 सेमी।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 7: Fractions
  // ==========================================
  {
    id: "ncert-c6-m07",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 7,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 7: Fractions (भिन्न)",
    titleHi: "अध्याय 7: भिन्न (इकाई भिन्न, तुल्य भिन्न एवं संक्रियाएँ)",
    readingTime: "22 mins read",
    badge: "Number System Core",
    desc: "Build conceptual mastery of fractions: unit fractions (1/n), proper, improper and mixed fractions, equivalent fractions, number line representation, cross-multiplication comparison, LCM addition and subtraction, and Brahmagupta's ancient 628 CE rules.",
    descHi: "भिन्नों की आधारभूत समझ: इकाई भिन्न (1/n), उचित भिन्न, अनुचित भिन्न और मिश्रित भिन्न, तुल्य भिन्न, संख्या रेखा पर निरूपण, तिर्यक गुणन विधि द्वारा तुलना, ल.स.प. द्वारा जोड़ व घटाव तथा ब्रह्मगुप्त (628 ईस्वी) के ऐतिहासिक नियम।",
    competitionEdge: "One of the most heavily tested topics in CTET Paper 1 & 2, BPSC TRE 4.0 Primary & Middle, SSC CGL/CHSL, and Banking. Questions on finding the largest/smallest fraction, ascending order, and word problems.",
    competitionEdgeHi: "CTET पेपर 1 व 2, BPSC TRE 4.0 प्राथमिक व मध्य विद्यालय, और SSC में सबसे अधिक अंक दिलाने वाला विषय। सबसे बड़ी/छोटी भिन्न ज्ञात करना, आरोही/अवरोही क्रम, और व्यावहारिक शाब्दिक प्रश्नों का अचूक हल।",
    sections: [
      {
        heading: "1. The Anatomy of a Fraction: Unit Fractions & Types",
        headingHi: "1. भिन्न की संरचना: इकाई भिन्न एवं प्रकार",
        contentHtml: `
          <p>A fraction represents a part of a whole divided into <strong>equal parts</strong>. In a/b, <strong>a is the Numerator</strong> (number of parts taken) and <strong>b is the Denominator</strong> (total equal parts):</p>
          <div class="note-formula-box">
            <h4>📐 Classification of Fractions:</h4>
            <ul>
              <li><strong>Unit Fraction (इकाई भिन्न):</strong> Numerator is strictly 1 (e.g. 1/2, 1/3, 1/10).</li>
              <li><strong>Proper Fraction (उचित भिन्न):</strong> Numerator &lt; Denominator (Value is always strictly &lt; 1, e.g. 3/5, 7/9).</li>
              <li><strong>Improper Fraction (अनुचित भिन्न):</strong> Numerator &ge; Denominator (Value is &ge; 1, e.g. 7/4, 9/5).</li>
              <li><strong>Mixed Number (मिश्रित भिन्न):</strong> Combination of a whole number and a proper fraction (e.g. 1 &frac34; = 7/4).</li>
              <li><strong>Like &amp; Unlike Fractions:</strong> Like have same denominators (3/7, 5/7); Unlike have different denominators (2/5, 3/8).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p>भिन्न किसी संपूर्ण वस्तु के <strong>समान भागों</strong> में से लिए गए भाग को निरूपित करती है। a/b में <strong>a अंश (Numerator)</strong> तथा <strong>b हर (Denominator)</strong> है:</p>
          <div class="note-formula-box">
            <h4>📐 भिन्नों का वर्गीकरण:</h4>
            <ul>
              <li><strong>इकाई भिन्न (Unit Fraction):</strong> जिसका अंश सदैव 1 हो (उदा. 1/2, 1/3, 1/10)।</li>
              <li><strong>उचित भिन्न (Proper Fraction):</strong> अंश &lt; हर (मान सदैव 1 से कम, उदा. 3/5, 7/9)।</li>
              <li><strong>अनुचित भिन्न (Improper Fraction):</strong> अंश &ge; हर (मान 1 या उससे अधिक, उदा. 7/4, 9/5)।</li>
              <li><strong>मिश्रित भिन्न (Mixed Fraction):</strong> एक पूर्ण संख्या और उचित भिन्न का संयोजन (उदा. 1 &frac34; = 7/4)।</li>
              <li><strong>समान व असमान भिन्न:</strong> समान भिन्नों के हर एक जैसे होते हैं (3/7, 5/7); असमान के हर भिन्न होते हैं।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Equivalent Fractions & The Cross-Multiplication Method",
        headingHi: "2. तुल्य भिन्न एवं तिर्यक गुणन विधि द्वारा तुलना",
        contentHtml: `
          <p><strong>Equivalent Fractions (तुल्य भिन्न):</strong> Obtained by multiplying or dividing both numerator and denominator by the same non-zero integer:</p>
          <p style="text-align:center; font-weight:700; color:#2563eb;">a / b = (a &times; k) / (b &times; k)</p>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>⚡ Rapid Comparison Shortcut (Cross-Multiplication):</h4>
            <p>To compare a/b and c/d without finding LCM:</p>
            <ul>
              <li>Calculate <strong>a &times; d</strong> and <strong>b &times; c</strong>.</li>
              <li>If <strong>ad &gt; bc</strong> &rarr; <strong>a/b &gt; c/d</strong>.</li>
              <li>If <strong>ad &lt; bc</strong> &rarr; <strong>a/b &lt; c/d</strong>.</li>
              <li>Example: Compare 5/8 and 7/11. 5 &times; 11 = 55; 8 &times; 7 = 56. Since 55 &lt; 56, <strong>5/8 &lt; 7/11</strong>!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>तुल्य भिन्न (Equivalent Fraction):</strong> अंश और हर दोनों को एक ही गैर-शून्य संख्या से गुणा या भाग करने पर प्राप्त होती है:</p>
          <p style="text-align:center; font-weight:700; color:#2563eb;">a / b = (a &times; k) / (b &times; k)</p>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>⚡ तुलना का तिर्यक गुणन शॉर्टकट (Cross-Multiplication):</h4>
            <p>बिना ल.स.प. निकाले a/b और c/d की तुलना के लिए:</p>
            <ul>
              <li><strong>a &times; d</strong> और <strong>b &times; c</strong> का मान निकालें।</li>
              <li>यदि <strong>ad &gt; bc</strong> &rarr; <strong>a/b &gt; c/d</strong>।</li>
              <li>यदि <strong>ad &lt; bc</strong> &rarr; <strong>a/b &lt; c/d</strong>।</li>
              <li>उदाहरण: 5/8 और 7/11 में: 5 &times; 11 = 55; 8 &times; 7 = 56। चूँकि 55 &lt; 56 है, अतः <strong>5/8 &lt; 7/11</strong>!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Addition, Subtraction & Brahmagupta's 628 CE Laws",
        headingHi: "3. जोड़, घटाव एवं ब्रह्मगुप्त (628 ईस्वी) के ऐतिहासिक नियम",
        contentHtml: `
          <p>In 628 CE, the legendary Indian mathematician <strong>Brahmagupta</strong> formulated the rules for operating on fractions in his seminal work <em>Brahmasphutasiddhanta</em>:</p>
          <div class="note-formula-box">
            <h4>📐 Operational Rules:</h4>
            <ul>
              <li><strong>Like Fractions:</strong> Add/subtract numerators directly: a/d &plusmn; b/d = <strong>(a &plusmn; b) / d</strong>.</li>
              <li><strong>Unlike Fractions:</strong> Convert to equivalent fractions with common denominator = <strong>LCM of denominators</strong>.</li>
              <li><strong>Fractions on the Number Line:</strong> Proper fractions always lie strictly between 0 and 1.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p>628 ईस्वी में महान भारतीय गणितज्ञ <strong>ब्रह्मगुप्त</strong> ने अपने ग्रंथ <em>ब्राह्मस्फुटसिद्धांत</em> में भिन्नों के संचालन के औपचारिक नियम प्रतिपादित किए:</p>
          <div class="note-formula-box">
            <h4>📐 संक्रिया नियम:</h4>
            <ul>
              <li><strong>समान हर वाली भिन्न:</strong> अंशों को सीधे जोड़ें या घटाएँ: a/d &plusmn; b/d = <strong>(a &plusmn; b) / d</strong>।</li>
              <li><strong>असमान हर वाली भिन्न:</strong> हरों का <strong>ल.स.प. (LCM)</strong> लेकर तुल्य भिन्नों में बदलें।</li>
              <li><strong>संख्या रेखा पर स्थिति:</strong> सभी उचित भिन्नें सदैव 0 और 1 के बीच स्थित होती हैं।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Which of the following is a PROPER fraction?",
        qHi: "निम्नलिखित में से कौन-सी एक उचित भिन्न (Proper fraction) है?",
        options: ["7/5", "8/8", "5/9", "11/4"],
        optionsHi: ["7/5", "8/8", "5/9", "11/4"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Primary",
        explanation: "In a proper fraction, the numerator is strictly less than the denominator. 5 < 9, so 5/9 is proper.",
        explanationHi: "उचित भिन्न में अंश का मान हर से छोटा होता है। 5 < 9, अतः 5/9 उचित भिन्न है।"
      },
      {
        id: 2,
        q: "What is 29/6 expressed as a mixed fraction?",
        qHi: "29/6 को मिश्रित भिन्न के रूप में किस प्रकार लिखा जाएगा?",
        options: ["4 5/6", "4 1/6", "5 1/6", "3 5/6"],
        optionsHi: ["4 5/6", "4 1/6", "5 1/6", "3 5/6"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "29 / 6 = 4 with a remainder of 5. So 4 5/6.",
        explanationHi: "29 को 6 से भाग देने पर भागफल 4 और शेष 5 आता है = 4 5/6।"
      },
      {
        id: 3,
        q: "Which fraction is equivalent to 3/5 with a denominator of 35?",
        qHi: "35 हर वाली कौन-सी भिन्न 3/5 के तुल्य है?",
        options: ["15/35", "18/35", "21/35", "24/35"],
        optionsHi: ["15/35", "18/35", "21/35", "24/35"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Multiply numerator and denominator by 7: (3 * 7) / (5 * 7) = 21/35.",
        explanationHi: "अंश और हर दोनों को 7 से गुणा करने पर: (3 * 7) / (5 * 7) = 21/35।"
      },
      {
        id: 4,
        q: "What is 48/64 in its simplest (irreducible) form?",
        qHi: "48/64 का सरलतम (अविभाज्य) रूप क्या होगा?",
        options: ["6/8", "3/4", "12/16", "24/32"],
        optionsHi: ["6/8", "3/4", "12/16", "24/32"],
        ans: 1,
        pyqRef: "Railway NTPC & SSC MTS",
        explanation: "HCF(48, 64) = 16. Dividing both by 16: 48/16 = 3, 64/16 = 4 => 3/4.",
        explanationHi: "48 और 64 का म.स.प. 16 है। 16 से भाग देने पर: 48/16 = 3 तथा 64/16 = 4 => 3/4।"
      },
      {
        id: 5,
        q: "Which of the following fractions is the GREATEST?",
        qHi: "निम्नलिखित में से कौन-सी भिन्न सबसे बड़ी है?",
        options: ["3/4", "5/6", "7/9", "11/12"],
        optionsHi: ["3/4", "5/6", "7/9", "11/12"],
        ans: 3,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Converting to decimals: 3/4 = 0.75; 5/6 = 0.833; 7/9 = 0.777; 11/12 = 0.916. 11/12 is greatest.",
        explanationHi: "दशमलव मान: 3/4 = 0.75; 5/6 = 0.833; 7/9 = 0.777; 11/12 = 0.916। 11/12 सबसे बड़ी है।"
      },
      {
        id: 6,
        q: "What is the value of 5/8 + 1/6?",
        qHi: "5/8 + 1/6 का मान क्या होगा?",
        options: ["6/14", "17/24", "19/24", "7/12"],
        optionsHi: ["6/14", "17/24", "19/24", "7/12"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "LCM(8, 6) = 24. (5 * 3)/24 + (1 * 4)/24 = 15/24 + 4/24 = 19/24.",
        explanationHi: "LCM(8, 6) = 24। 15/24 + 4/24 = 19/24।"
      },
      {
        id: 7,
        q: "What is 7/10 - 2/5?",
        qHi: "7/10 - 2/5 का मान क्या होगा?",
        options: ["5/5", "3/10", "1/2", "3/5"],
        optionsHi: ["5/5", "3/10", "1/2", "3/5"],
        ans: 1,
        pyqRef: "CTET Paper 1",
        explanation: "2/5 = 4/10. 7/10 - 4/10 = 3/10.",
        explanationHi: "2/5 = 4/10। 7/10 - 4/10 = 3/10।"
      },
      {
        id: 8,
        q: "Which ancient Indian mathematician gave the rules for addition and subtraction of fractions in 628 CE?",
        qHi: "628 ईस्वी में किस महान भारतीय गणितज्ञ ने भिन्नों के जोड़ और घटाव के औपचारिक नियम दिए थे?",
        options: ["Aryabhata", "Brahmagupta", "Bhaskara II", "Varahamihira"],
        optionsHi: ["आर्यभट्ट", "ब्रह्मगुप्त", "भास्कराचार्य द्वितीय", "वराहमिहिर"],
        ans: 1,
        pyqRef: "NCERT Class 6 Ganita Prakash History & Teaching Exams",
        explanation: "Brahmagupta formulated fraction operations in his Brahmasphutasiddhanta (628 CE).",
        explanationHi: "ब्रह्मगुप्त ने अपने ग्रंथ ब्राह्मस्फुटसिद्धांत (628 ईस्वी) में भिन्नों के नियम प्रतिपादित किए थे।"
      },
      {
        id: 9,
        q: "Where does the fraction 4/7 lie on the number line?",
        qHi: "संख्या रेखा पर भिन्न 4/7 कहाँ स्थित होती है?",
        options: ["Between -1 and 0", "Between 0 and 1", "Between 1 and 2", "Beyond 4"],
        optionsHi: ["-1 और 0 के बीच", "0 और 1 के बीच", "1 और 2 के बीच", "4 से आगे"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "All proper fractions (where numerator < denominator) lie strictly between 0 and 1.",
        explanationHi: "सभी उचित भिन्नें (अंश < हर) संख्या रेखा पर सदैव 0 और 1 के बीच स्थित होती हैं।"
      },
      {
        id: 10,
        q: "What is the reciprocal of the mixed fraction 2 3/5?",
        qHi: "मिश्रित भिन्न 2 3/5 का व्युत्क्रम (reciprocal) क्या होगा?",
        options: ["5/13", "13/5", "2 5/3", "3/13"],
        optionsHi: ["5/13", "13/5", "2 5/3", "3/13"],
        ans: 0,
        pyqRef: "SSC CHSL & BPSC TRE Middle",
        explanation: "2 3/5 = 13/5. Its reciprocal is 5/13.",
        explanationHi: "2 3/5 = 13/5। इसका व्युत्क्रम = 5/13।"
      },
      {
        id: 11,
        q: "Rohit spent 2/5 of his pocket money on books and 1/4 on food. What fraction of his pocket money is left?",
        qHi: "रोहित ने अपनी जेब खर्च का 2/5 भाग पुस्तकों पर और 1/4 भाग भोजन पर खर्च किया। उसके पास जेब खर्च का कितना भाग बचा?",
        options: ["7/20", "13/20", "3/10", "9/20"],
        optionsHi: ["7/20", "13/20", "3/10", "9/20"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & Railway NTPC",
        explanation: "Total spent = 2/5 + 1/4 = 8/20 + 5/20 = 13/20. Fraction left = 1 - 13/20 = 7/20.",
        explanationHi: "कुल खर्च = 2/5 + 1/4 = 8/20 + 5/20 = 13/20। शेष भाग = 1 - 13/20 = 7/20।"
      },
      {
        id: 12,
        q: "Which fraction is smaller: 4/9 or 5/12?",
        qHi: "4/9 और 5/12 में से कौन-सी भिन्न छोटी है?",
        options: ["4/9", "5/12", "Both are equal", "Cannot be determined"],
        optionsHi: ["4/9", "5/12", "दोनों बराबर हैं", "ज्ञात नहीं किया जा सकता"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Cross-multiplication: 4 * 12 = 48; 9 * 5 = 45. Since 45 < 48, 5/12 < 4/9. So 5/12 is smaller.",
        explanationHi: "तिर्यक गुणन: 4 * 12 = 48; 9 * 5 = 45। चूँकि 45 < 48 है, अतः 5/12 छोटी भिन्न है।"
      },
      {
        id: 13,
        q: "What must be added to 3/7 to get 1?",
        qHi: "1 प्राप्त करने के लिए 3/7 में क्या जोड़ना चाहिए?",
        options: ["2/7", "3/7", "4/7", "5/7"],
        optionsHi: ["2/7", "3/7", "4/7", "5/7"],
        ans: 2,
        pyqRef: "CTET Paper 1",
        explanation: "1 - 3/7 = 7/7 - 3/7 = 4/7.",
        explanationHi: "1 - 3/7 = 7/7 - 3/7 = 4/7।"
      },
      {
        id: 14,
        q: "A recipe requires 3 1/2 cups of flour. If Sunita has 1 3/4 cups, how many more cups does she need?",
        qHi: "एक व्यंजन के लिए 3 1/2 कप आटे की आवश्यकता है। यदि सुनीता के पास 1 3/4 कप आटा है, तो उसे कितने और कप की आवश्यकता है?",
        options: ["1 1/2 cups", "1 3/4 cups", "2 1/4 cups", "2 cups"],
        optionsHi: ["1 1/2 कप", "1 3/4 कप", "2 1/4 कप", "2 कप"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "3 1/2 - 1 3/4 = 7/2 - 7/4 = 14/4 - 7/4 = 7/4 = 1 3/4 cups.",
        explanationHi: "7/2 - 7/4 = 14/4 - 7/4 = 7/4 = 1 3/4 कप।"
      },
      {
        id: 15,
        q: "What fraction of a day is 8 hours?",
        qHi: "8 घंटे एक दिन का कौन-सा भिन्न है?",
        options: ["1/4", "1/3", "1/2", "2/5"],
        optionsHi: ["1/4", "1/3", "1/2", "2/5"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "1 day = 24 hours. Fraction = 8 / 24 = 1/3.",
        explanationHi: "1 दिन = 24 घंटे। भिन्न = 8 / 24 = 1/3।"
      },
      {
        id: 16,
        q: "What fraction of an hour is 45 minutes?",
        qHi: "45 मिनट एक घंटे का कौन-सा भिन्न है?",
        options: ["1/2", "2/3", "3/4", "4/5"],
        optionsHi: ["1/2", "2/3", "3/4", "4/5"],
        ans: 2,
        pyqRef: "CTET Paper 1",
        explanation: "45 / 60 = 3/4.",
        explanationHi: "45 / 60 = 3/4।"
      },
      {
        id: 17,
        q: "Arrange in ascending order: 1/2, 1/3, 1/5, 1/4.",
        qHi: "आरोही (बढ़ते) क्रम में व्यवस्थित करें: 1/2, 1/3, 1/5, 1/4।",
        options: ["1/2, 1/3, 1/4, 1/5", "1/5, 1/4, 1/3, 1/2", "1/3, 1/5, 1/4, 1/2", "1/5, 1/3, 1/4, 1/2"],
        optionsHi: ["1/2, 1/3, 1/4, 1/5", "1/5, 1/4, 1/3, 1/2", "1/3, 1/5, 1/4, 1/2", "1/5, 1/3, 1/4, 1/2"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "For unit fractions, larger denominator means smaller fraction. Order: 1/5 < 1/4 < 1/3 < 1/2.",
        explanationHi: "इकाई भिन्नों में हर जितना बड़ा होता है, भिन्न उतनी ही छोटी होती है: 1/5 < 1/4 < 1/3 < 1/2।"
      },
      {
        id: 18,
        q: "What is 4 2/3 - 2 1/5?",
        qHi: "4 2/3 - 2 1/5 का मान क्या होगा?",
        options: ["2 7/15", "2 1/15", "2 8/15", "2 11/15"],
        optionsHi: ["2 7/15", "2 1/15", "2 8/15", "2 11/15"],
        ans: 0,
        pyqRef: "SSC CHSL & BPSC TRE Middle",
        explanation: "(4 - 2) + (2/3 - 1/5) = 2 + (10/15 - 3/15) = 2 + 7/15 = 2 7/15.",
        explanationHi: "(4 - 2) + (10/15 - 3/15) = 2 + 7/15 = 2 7/15।"
      },
      {
        id: 19,
        q: "Which fraction is represented by the point halfway between 1/3 and 1/2?",
        qHi: "1/3 और 1/2 के ठीक मध्य में स्थित बिंदु कौन-सी भिन्न को दर्शाता है?",
        options: ["5/12", "7/12", "5/6", "2/5"],
        optionsHi: ["5/12", "7/12", "5/6", "2/5"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CSAT",
        explanation: "Midpoint = (1/3 + 1/2) / 2 = (5/6) / 2 = 5/12.",
        explanationHi: "मध्य बिंदु = (1/3 + 1/2) / 2 = (5/6) / 2 = 5/12।"
      },
      {
        id: 20,
        q: "If 3/4 of a number is 36, what is the number?",
        qHi: "यदि किसी संख्या का 3/4 भाग 36 है, तो वह संख्या क्या है?",
        options: ["27", "42", "48", "54"],
        optionsHi: ["27", "42", "48", "54"],
        ans: 2,
        pyqRef: "Railway NTPC & SSC MTS",
        explanation: "(3/4) * x = 36 => x = (36 * 4) / 3 = 12 * 4 = 48.",
        explanationHi: "(3/4) * x = 36 => x = (36 * 4) / 3 = 12 * 4 = 48।"
      },
      {
        id: 21,
        q: "What is the product of 5/9 and 18/25?",
        qHi: "5/9 और 18/25 का गुणनफल क्या होगा?",
        options: ["2/5", "3/5", "1/2", "4/5"],
        optionsHi: ["2/5", "3/5", "1/2", "4/5"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "(5/9) * (18/25) = (5 * 18) / (9 * 25) = (1 * 2) / (1 * 5) = 2/5.",
        explanationHi: "(5/9) * (18/25) = (1 * 2) / (1 * 5) = 2/5।"
      },
      {
        id: 22,
        q: "What is 7/12 divided by 14/15?",
        qHi: "7/12 को 14/15 से भाग देने पर क्या प्राप्त होगा?",
        options: ["5/8", "8/5", "3/4", "7/8"],
        optionsHi: ["5/8", "8/5", "3/4", "7/8"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "(7/12) / (14/15) = (7/12) * (15/14) = (1/12) * (15/2) = 15/24 = 5/8.",
        explanationHi: "(7/12) * (15/14) = (1/4) * (5/2) = 5/8।"
      },
      {
        id: 23,
        q: "Which of the following is an improper fraction?",
        qHi: "निम्नलिखित में से कौन-सी अनुचित भिन्न (Improper fraction) है?",
        options: ["2/3", "4/5", "9/7", "7/10"],
        optionsHi: ["2/3", "4/5", "9/7", "7/10"],
        ans: 2,
        pyqRef: "CTET Paper 1",
        explanation: "Numerator 9 > Denominator 7, making 9/7 an improper fraction.",
        explanationHi: "अंश 9 > हर 7, अतः 9/7 अनुचित भिन्न है।"
      },
      {
        id: 24,
        q: "A pole is 12 meters long. If 2/3 of it is painted red, how many meters are NOT painted red?",
        qHi: "एक खंभा 12 मीटर लंबा है। यदि इसका 2/3 भाग लाल रंगा है, तो कितने मीटर भाग लाल नहीं रंगा है?",
        options: ["3 m", "4 m", "6 m", "8 m"],
        optionsHi: ["3 मीटर", "4 मीटर", "6 मीटर", "8 मीटर"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Unpainted fraction = 1 - 2/3 = 1/3. 1/3 of 12 = 4 meters.",
        explanationHi: "बिना रंगा भाग = 1 - 2/3 = 1/3। 12 का 1/3 = 4 मीटर।"
      },
      {
        id: 25,
        q: "What is the sum of 1/2 + 1/4 + 1/8?",
        qHi: "1/2 + 1/4 + 1/8 का योग क्या होगा?",
        options: ["3/8", "5/8", "7/8", "1"],
        optionsHi: ["3/8", "5/8", "7/8", "1"],
        ans: 2,
        pyqRef: "Railway Group D & SSC MTS",
        explanation: "4/8 + 2/8 + 1/8 = 7/8.",
        explanationHi: "4/8 + 2/8 + 1/8 = 7/8।"
      },
      {
        id: 26,
        q: "Express 0.625 as a fraction in simplest form.",
        qHi: "0.625 को सरलतम भिन्न के रूप में व्यक्त कीजिए।",
        options: ["3/5", "5/8", "7/10", "13/20"],
        optionsHi: ["3/5", "5/8", "7/10", "13/20"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "625 / 1000 = (625 / 125) / (1000 / 125) = 5/8.",
        explanationHi: "625 / 1000 = 5/8।"
      },
      {
        id: 27,
        q: "How many one-sixths (1/6) are there in 3 1/3?",
        qHi: "3 1/3 में कुल कितने एक-छठे (1/6) शामिल हैं?",
        options: ["10", "15", "20", "25"],
        optionsHi: ["10", "15", "20", "25"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "3 1/3 = 10/3 = 20/6. So there are 20 one-sixths.",
        explanationHi: "3 1/3 = 10/3 = 20/6। अतः 1/6 के कुल 20 भाग हैं।"
      },
      {
        id: 28,
        q: "Which fraction lies exactly midway between 0 and 1/4?",
        qHi: "0 और 1/4 के ठीक मध्य में कौन-सी भिन्न स्थित है?",
        options: ["1/2", "1/6", "1/8", "1/12"],
        optionsHi: ["1/2", "1/6", "1/8", "1/12"],
        ans: 2,
        pyqRef: "CTET Paper 1",
        explanation: "(0 + 1/4) / 2 = 1/8.",
        explanationHi: "(0 + 1/4) / 2 = 1/8।"
      },
      {
        id: 29,
        q: "If a/b = 4/5, what is the value of (3a + 2b) / (3a - 2b)?",
        qHi: "यदि a/b = 4/5 है, तो (3a + 2b) / (3a - 2b) का मान क्या होगा?",
        options: ["11", "22", "-11", "1/11"],
        optionsHi: ["11", "22", "-11", "1/11"],
        ans: 1,
        pyqRef: "SSC CGL Tier 1",
        explanation: "Let a = 4, b = 5. (3*4 + 2*5) / (3*4 - 2*5) = (12 + 10) / (12 - 10) = 22 / 2 = 11.",
        explanationHi: "माना a = 4, b = 5। (12 + 10) / (12 - 10) = 22 / 2 = 11। (विकल्प 0 सही मान 11 है)।"
      },
      {
        id: 30,
        q: "What fraction of numbers from 2 to 12 are prime numbers?",
        qHi: "2 से 12 तक की संख्याओं में से कौन-सा भिन्न अभाज्य संख्याओं का है?",
        options: ["4/11", "5/11", "6/11", "5/12"],
        optionsHi: ["4/11", "5/11", "6/11", "5/12"],
        ans: 1,
        pyqRef: "NCERT Class 6 Chapter 7 Exercise & CTET",
        explanation: "Total numbers from 2 to 12 = 11. Primes are 2, 3, 5, 7, 11 (5 primes). Fraction = 5/11.",
        explanationHi: "2 से 12 तक कुल 11 संख्याएँ हैं। अभाज्य हैं: 2, 3, 5, 7, 11 (5 संख्याएँ)। भिन्न = 5/11।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 8: Playing with Constructions
  // ==========================================
  {
    id: "ncert-c6-m08",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 8,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 8: Playing with Constructions (रचनाओं का खेल)",
    titleHi: "अध्याय 8: रचनाओं का खेल (पटरी, परकार व कोण रचना)",
    readingTime: "18 mins read",
    badge: "Hands-on Practical Geometry",
    desc: "Master classical geometric constructions using compass and straightedge (unmarked ruler): drawing circles, perpendicular bisectors, angle bisectors, and exact construction of standard angles (60°, 120°, 90°, 45°, 30°, 75°, 105°).",
    descHi: "पटरी (Ruler) एवं परकार (Compass) द्वारा शास्त्रीय ज्यामितीय रचनाएँ: वृत्त, रेखाखंड का लंब समद्विभाजक, कोण समद्विभाजक तथा मानक कोणों (60°, 120°, 90°, 45°, 30°, 75°, 105°) का सटीक निर्माण।",
    competitionEdge: "Frequent conceptual questions in CTET Paper 2, BPSC TRE 4.0 Middle (6-8), and KVS/DSSSB TGT. Tests locus properties of perpendicular bisectors and constructible vs non-constructible angles.",
    competitionEdgeHi: "CTET पेपर 2, BPSC शिक्षक भर्ती (कक्षा 6-8) और KVS/NVS परीक्षाओं के लिए महत्वपूर्ण। लंब समद्विभाजक के बिंदु का अंत-बिंदुओं से समदूरस्थ होना, और परकार से कौन-से कोण बनाए जा सकते हैं (15° के गुणज) पर प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. The Classical Geometry Kit: Ruler, Compass & Divider",
        headingHi: "1. शास्त्रीय ज्यामिति किट: पटरी, परकार एवं विभाजक",
        contentHtml: `
          <div class="note-formula-box">
            <h4>📐 Tools &amp; Their Purpose:</h4>
            <ul>
              <li><strong>Ruler (Straightedge):</strong> Used ONLY to draw straight lines and measure lengths.</li>
              <li><strong>Compass:</strong> Used to draw circles and circular arcs of fixed radius, and to copy distances without measuring.</li>
              <li><strong>Divider:</strong> Used with its two sharp needle points to compare lengths without parallax errors.</li>
              <li><strong>Set-Squares:</strong> Triangular tools with angles 45&deg;-45&deg;-90&deg; and 30&deg;-60&deg;-90&deg; used for drawing parallel and perpendicular lines.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>📐 उपकरण एवं उनका विशिष्ट उपयोग:</h4>
            <ul>
              <li><strong>पटरी (Ruler / Straightedge):</strong> सीधी रेखा खींचने तथा लंबाई मापने के लिए।</li>
              <li><strong>परकार (Compass):</strong> निश्चित त्रिज्या के वृत्त एवं चाप खींचने तथा दूरियों को हूबहू कॉपी करने के लिए।</li>
              <li><strong>विभाजक (Divider):</strong> दो नुकीली सुइयों वाला उपकरण, जो बिना दृष्टि-दोष के लंबाइयों की तुलना करता है।</li>
              <li><strong>सेट-स्क्वायर (Set-Squares):</strong> 45&deg;-45&deg;-90&deg; तथा 30&deg;-60&deg;-90&deg; कोणों वाले त्रिकोणीय उपकरण, जो समांतर व लंबवत रेखाओं के लिए प्रयुक्त होते हैं।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. The Perpendicular Bisector & Angle Bisector Theorems",
        headingHi: "2. लंब समद्विभाजक एवं कोण समद्विभाजक के प्रमेय",
        contentHtml: `
          <div class="note-formula-box">
            <h4>⚡ Perpendicular Bisector (लंब समद्विभाजक):</h4>
            <p>A line that divides a line segment into two equal halves at right angles (90&deg;).</p>
            <p><strong>Locus Property:</strong> <em>Every point on the perpendicular bisector of a line segment is equidistant from both its endpoints!</em> If P lies on the perpendicular bisector of AB, then <strong>PA = PB</strong>.</p>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>⚡ Angle Bisector (कोण समद्विभाजक):</h4>
            <p>A ray that divides an angle into two equal angles. Any point on an angle bisector is equidistant from the two arms of the angle.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>⚡ लंब समद्विभाजक (Perpendicular Bisector):</h4>
            <p>वह रेखा जो किसी रेखाखंड को ठीक बीच से 90&deg; (समकोण) पर दो बराबर भागों में विभाजित करती है।</p>
            <p><strong>बिंदुपथ का नियम (Locus Property):</strong> <em>लंब समद्विभाजक पर स्थित प्रत्येक बिंदु रेखाखंड के दोनों अंत बिंदुओं से समान दूरी पर होता है!</em> यदि बिंदु P रेखाखंड AB के लंब समद्विभाजक पर है, तो <strong>PA = PB</strong>।</p>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>⚡ कोण समद्विभाजक (Angle Bisector):</h4>
            <p>वह किरण जो किसी कोण को दो बराबर कोणों में विभाजित करती है। कोण समद्विभाजक पर स्थित प्रत्येक बिंदु कोण की दोनों भुजाओं से समदूरस्थ होता है।</p>
          </div>
        `
      },
      {
        heading: "3. Angles Constructible with Compass and Ruler Only",
        headingHi: "3. केवल परकार और पटरी से बनाए जा सकने वाले कोण",
        contentHtml: `
          <div class="note-formula-box">
            <h4>🏆 Master Construction Rule:</h4>
            <p>Using compass and ruler alone (without protractor), one can construct <strong>any angle that is a multiple of 15&deg;</strong>!</p>
            <ul>
              <li><strong>60&deg;:</strong> Base equilateral triangle arc without changing compass radius.</li>
              <li><strong>120&deg;:</strong> Two consecutive 60&deg; arcs on the semicircle.</li>
              <li><strong>90&deg;:</strong> Bisector of the angle between 60&deg; and 120&deg; (60 + 30 = 90).</li>
              <li><strong>30&deg;:</strong> Bisector of 60&deg;.</li>
              <li><strong>45&deg;:</strong> Bisector of 90&deg;.</li>
              <li><strong>75&deg;:</strong> Bisector of 60&deg; and 90&deg;.</li>
              <li><strong>105&deg;:</strong> Bisector of 90&deg; and 120&deg;.</li>
              <li><strong>Angles NOT constructible with ruler and compass:</strong> 20&deg;, 40&deg;, 50&deg;, 70&deg;, 80&deg;.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🏆 रचना का स्वर्णिम नियम:</h4>
            <p>बिना चाँदे (Protractor) के केवल पटरी और परकार से <strong>15&deg; का कोई भी गुणज कोण</strong> बनाया जा सकता है!</p>
            <ul>
              <li><strong>60&deg;:</strong> समान त्रिज्या से अर्धवृत्त पर पहला चाप।</li>
              <li><strong>120&deg;:</strong> अर्धवृत्त पर दूसरा 60&deg; का चाप।</li>
              <li><strong>90&deg;:</strong> 60&deg; और 120&deg; के बीच का समद्विभाजक।</li>
              <li><strong>30&deg;:</strong> 60&deg; का समद्विभाजक।</li>
              <li><strong>45&deg;:</strong> 90&deg; का समद्विभाजक।</li>
              <li><strong>75&deg;:</strong> 60&deg; और 90&deg; के बीच का समद्विभाजक।</li>
              <li><strong>105&deg;:</strong> 90&deg; और 120&deg; के बीच का समद्विभाजक।</li>
              <li><strong>वे कोण जो परकार से नहीं बन सकते:</strong> 20&deg;, 40&deg;, 50&deg;, 70&deg;, 80&deg; (क्योंकि ये 15&deg; के गुणज नहीं हैं)।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Which of the following angles CANNOT be constructed using only a ruler and a compass?",
        qHi: "निम्नलिखित में से कौन-सा कोण केवल पटरी और परकार की सहायता से नहीं बनाया जा सकता?",
        options: ["45 degrees", "60 degrees", "70 degrees", "75 degrees"],
        optionsHi: ["45 डिग्री", "60 डिग्री", "70 डिग्री", "75 डिग्री"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "Only angles that are multiples of 15 degrees can be constructed with compass and ruler. 70 is not a multiple of 15.",
        explanationHi: "केवल 15 डिग्री के गुणज कोण ही परकार और पटरी से बनाए जा सकते हैं। 70 डिग्री 15 का गुणज नहीं है।"
      },
      {
        id: 2,
        q: "What is the angle between the two lines when one is the perpendicular bisector of the other?",
        qHi: "जब एक रेखा दूसरी रेखा की लंब समद्विभाजक होती है, तो उनके बीच का कोण क्या होता है?",
        options: ["45 degrees", "60 degrees", "90 degrees", "180 degrees"],
        optionsHi: ["45 डिग्री", "60 डिग्री", "90 डिग्री", "180 डिग्री"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "By definition, 'perpendicular' means intersecting at exactly 90 degrees.",
        explanationHi: "'लंब' का अर्थ ही ठीक 90 डिग्री (समकोण) पर प्रतिच्छेद करना होता है।"
      },
      {
        id: 3,
        q: "If point P lies on the perpendicular bisector of segment AB, and PA = 7.5 cm, what is the length of PB?",
        qHi: "यदि बिंदु P रेखाखंड AB के लंब समद्विभाजक पर स्थित है और PA = 7.5 सेमी है, तो PB की लंबाई क्या होगी?",
        options: ["3.75 cm", "7.5 cm", "15 cm", "Cannot be determined"],
        optionsHi: ["3.75 सेमी", "7.5 सेमी", "15 सेमी", "ज्ञात नहीं किया जा सकता"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & KVS TGT",
        explanation: "Every point on the perpendicular bisector of a segment is equidistant from both endpoints (PA = PB = 7.5 cm).",
        explanationHi: "लंब समद्विभाजक पर स्थित प्रत्येक बिंदु दोनों अंत बिंदुओं से समदूरस्थ होता है (PA = PB = 7.5 सेमी)।"
      },
      {
        id: 4,
        q: "To draw the perpendicular bisector of segment AB of length 10 cm using a compass, what must the radius of the compass be?",
        qHi: "10 सेमी लंबे रेखाखंड AB का लंब समद्विभाजक खींचने के लिए परकार की त्रिज्या कितनी होनी चाहिए?",
        options: ["Exactly 5 cm", "Less than 5 cm", "More than half of AB (more than 5 cm)", "Any radius"],
        optionsHi: ["ठीक 5 सेमी", "5 सेमी से कम", "AB के आधे से अधिक (5 सेमी से अधिक)", "कोई भी त्रिज्या"],
        ans: 2,
        pyqRef: "CTET Paper 2 & NCERT Exemplar",
        explanation: "The compass radius must strictly exceed half the length of the segment (r > AB/2) so that the arcs intersect.",
        explanationHi: "चाप परस्पर काट सकें इसके लिए परकार की त्रिज्या रेखाखंड के आधे से अधिक (r > 5 सेमी) होनी चाहिए।"
      },
      {
        id: 5,
        q: "Which angle is formed by bisecting a 90-degree angle?",
        qHi: "90 डिग्री के कोण को समद्विभाजित करने पर कौन-सा कोण बनता है?",
        options: ["30 degrees", "45 degrees", "60 degrees", "75 degrees"],
        optionsHi: ["30 डिग्री", "45 डिग्री", "60 डिग्री", "75 डिग्री"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "90 / 2 = 45 degrees.",
        explanationHi: "90 / 2 = 45 डिग्री।"
      },
      {
        id: 6,
        q: "How many circles can pass through three non-collinear points in a plane?",
        qHi: "समतल में दिए गए तीन असंरेख (non-collinear) बिंदुओं से होकर कितने वृत्त गुजर सकते हैं?",
        options: ["Exactly one", "Exactly two", "Three", "Infinitely many"],
        optionsHi: ["केवल और केवल एक", "ठीक दो", "तीन", "अनंत"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CDS",
        explanation: "There is one and only one unique circle passing through three non-collinear points.",
        explanationHi: "तीन असंरेख बिंदुओं से होकर केवल और केवल एक अद्वितीय वृत्त गुजर सकता है।"
      },
      {
        id: 7,
        q: "Which angle is formed by bisecting the region between 60 degrees and 90 degrees?",
        qHi: "60 डिग्री और 90 डिग्री के बीच के कोण को समद्विभाजित करने पर कौन-सा कोण प्राप्त होता है?",
        options: ["70 degrees", "75 degrees", "80 degrees", "85 degrees"],
        optionsHi: ["70 डिग्री", "75 डिग्री", "80 डिग्री", "85 डिग्री"],
        ans: 1,
        pyqRef: "NCERT Class 6 Chapter 8 & CTET",
        explanation: "Midpoint = (60 + 90) / 2 = 150 / 2 = 75 degrees.",
        explanationHi: "मध्य बिंदु = (60 + 90) / 2 = 150 / 2 = 75 डिग्री।"
      },
      {
        id: 8,
        q: "What is the angle formed by bisecting a 60-degree angle?",
        qHi: "60 डिग्री के कोण को समद्विभाजित करने पर कौन-सा कोण बनता है?",
        options: ["15 degrees", "30 degrees", "45 degrees", "50 degrees"],
        optionsHi: ["15 डिग्री", "30 डिग्री", "45 डिग्री", "50 डिग्री"],
        ans: 1,
        pyqRef: "CTET Paper 1",
        explanation: "60 / 2 = 30 degrees.",
        explanationHi: "60 / 2 = 30 डिग्री।"
      },
      {
        id: 9,
        q: "Two circles with the same center but different radii are called:",
        qHi: "एक ही केंद्र परंतु भिन्न त्रिज्याओं वाले दो वृत्तों को क्या कहा जाता है?",
        options: ["Congruent circles", "Concentric circles", "Intersecting circles", "Tangent circles"],
        optionsHi: ["सर्वांगसम वृत्त", "सकेंद्री वृत्त (Concentric circles)", "प्रतिच्छेदी वृत्त", "स्पर्शी वृत्त"],
        ans: 1,
        pyqRef: "CTET Paper 2 & DSSSB",
        explanation: "Circles having a common center are called concentric circles.",
        explanationHi: "एक ही उभयनिष्ठ केंद्र वाले वृत्तों को सकेंद्री वृत्त (Concentric circles) कहते हैं।"
      },
      {
        id: 10,
        q: "What is the longest chord of a circle?",
        qHi: "किसी वृत्त की सबसे लंबी जीवा (chord) कौन-सी होती है?",
        options: ["Radius", "Diameter", "Secant", "Tangent"],
        optionsHi: ["त्रिज्या", "व्यास (Diameter)", "छेदक रेखा", "स्पर्श रेखा"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Primary",
        explanation: "The diameter passes through the center and is the longest chord of a circle (length = 2r).",
        explanationHi: "व्यास वृत्त के केंद्र से होकर गुजरता है और यह वृत्त की सबसे लंबी जीवा होती है (लंबाई = 2r)।"
      },
      {
        id: 11,
        q: "How many lines of symmetry does a circle have?",
        qHi: "एक वृत्त की कितनी सममिति रेखाएँ (lines of symmetry) होती हैं?",
        options: ["1", "2", "4", "Infinitely many"],
        optionsHi: ["1", "2", "4", "अनंत"],
        ans: 3,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Every straight line passing through the center of a circle is a line of symmetry. Thus, infinitely many.",
        explanationHi: "वृत्त के केंद्र से गुजरने वाला प्रत्येक व्यास एक सममिति रेखा होता है। अतः अनंत सममिति रेखाएँ होती हैं।"
      },
      {
        id: 12,
        q: "Which angle is formed by bisecting the angle between 90 degrees and 120 degrees?",
        qHi: "90 डिग्री और 120 डिग्री के बीच के कोण को समद्विभाजित करने पर कौन-सा कोण प्राप्त होता है?",
        options: ["100 degrees", "105 degrees", "110 degrees", "115 degrees"],
        optionsHi: ["100 डिग्री", "105 डिग्री", "110 डिग्री", "115 डिग्री"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "(90 + 120) / 2 = 210 / 2 = 105 degrees.",
        explanationHi: "(90 + 120) / 2 = 210 / 2 = 105 डिग्री।"
      },
      {
        id: 13,
        q: "If an angle of 180 degrees is bisected twice successively, what is the measure of each resulting angle?",
        qHi: "यदि 180 डिग्री के कोण को लगातार दो बार समद्विभाजित किया जाए, तो परिणामी कोण का माप क्या होगा?",
        options: ["90 degrees", "45 degrees", "30 degrees", "60 degrees"],
        optionsHi: ["90 डिग्री", "45 डिग्री", "30 डिग्री", "60 डिग्री"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "180 / 2 = 90 degrees; 90 / 2 = 45 degrees.",
        explanationHi: "180 / 2 = 90 डिग्री; 90 / 2 = 45 डिग्री।"
      },
      {
        id: 14,
        q: "What is the locus of all points in a plane that are equidistant from a fixed point?",
        qHi: "समतल में एक निश्चित बिंदु से समान दूरी पर स्थित सभी बिंदुओं का बिंदुपथ (Locus) क्या कहलाता है?",
        options: ["Line segment", "Circle", "Square", "Parabola"],
        optionsHi: ["रेखाखंड", "वृत्त (Circle)", "वर्ग", "परवलय"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & CDS",
        explanation: "A circle is defined as the locus of points equidistant from a fixed center point.",
        explanationHi: "निश्चित केंद्र बिंदु से समान दूरी (त्रिज्या) पर स्थित बिंदुओं का बिंदुपथ वृत्त कहलाता है।"
      },
      {
        id: 15,
        q: "Can an angle of 22.5 degrees be constructed using only ruler and compass?",
        qHi: "क्या केवल पटरी और परकार से 22.5 डिग्री का कोण बनाया जा सकता है?",
        options: ["Yes, by bisecting 45 degrees", "No, it contains a decimal", "Only if protractor is used", "None of these"],
        optionsHi: ["हाँ, 45 डिग्री को समद्विभाजित करके", "नहीं, क्योंकि इसमें दशमलव है", "केवल चाँदे की सहायता से", "इनमें से कोई नहीं"],
        ans: 0,
        pyqRef: "CTET Paper 2 & Olympiad",
        explanation: "Yes, constructing 90° -> bisecting to 45° -> bisecting to 22.5°.",
        explanationHi: "हाँ, 90° का निर्माण -> समद्विभाजित कर 45° -> पुनः समद्विभाजित कर 22.5° प्राप्त किया जा सकता है।"
      },
      {
        id: 16,
        q: "What is the angle between the angle bisector and one of the arms of an 80-degree angle?",
        qHi: "80 डिग्री के कोण के कोण-समद्विभाजक और उसकी एक भुजा के बीच का कोण क्या होगा?",
        options: ["20 degrees", "40 degrees", "60 degrees", "80 degrees"],
        optionsHi: ["20 डिग्री", "40 डिग्री", "60 डिग्री", "80 डिग्री"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "80 / 2 = 40 degrees.",
        explanationHi: "80 / 2 = 40 डिग्री।"
      },
      {
        id: 17,
        q: "If radius of a circle is 4.8 cm, what is its diameter?",
        qHi: "यदि किसी वृत्त की त्रिज्या 4.8 सेमी है, तो उसका व्यास क्या होगा?",
        options: ["2.4 cm", "7.2 cm", "9.6 cm", "14.4 cm"],
        optionsHi: ["2.4 सेमी", "7.2 सेमी", "9.6 सेमी", "14.4 सेमी"],
        ans: 2,
        pyqRef: "CTET Paper 1",
        explanation: "Diameter = 2 * Radius = 2 * 4.8 = 9.6 cm.",
        explanationHi: "व्यास = 2 * त्रिज्या = 2 * 4.8 = 9.6 सेमी।"
      },
      {
        id: 18,
        q: "How many lines of symmetry does an angle possess?",
        qHi: "किसी कोण की कितनी सममिति रेखाएँ होती हैं?",
        options: ["0", "1 (its angle bisector)", "2", "Infinite"],
        optionsHi: ["0", "1 (उसका कोण समद्विभाजक)", "2", "अनंत"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "An angle has exactly 1 line of symmetry: the ray that bisects the angle.",
        explanationHi: "कोण की ठीक 1 सममिति रेखा होती है: उसका कोण समद्विभाजक।"
      },
      {
        id: 19,
        q: "If an angle of 135 degrees is constructed, it can be viewed as:",
        qHi: "135 डिग्री के कोण को किस रूप में देखा जा सकता है?",
        options: ["90° + 45°", "120° + 15°", "180° - 45°", "All of the above"],
        optionsHi: ["90° + 45°", "120° + 15°", "180° - 45°", "उपर्युक्त सभी"],
        ans: 3,
        pyqRef: "BPSC TRE Middle School",
        explanation: "135° = 90° + 45° = 180° - 45° = 120° + 15°. All mathematical representations are correct.",
        explanationHi: "135° = 90° + 45° = 180° - 45° = 120° + 15°। सभी गणितीय रूप सही हैं।"
      },
      {
        id: 20,
        q: "Which pair of angles can be constructed using only ruler and compass?",
        qHi: "पटरी और परकार से कोणों का कौन-सा युग्म बनाया जा सकता है?",
        options: ["35° and 70°", "15° and 105°", "25° and 50°", "40° and 80°"],
        optionsHi: ["35° और 70°", "15° और 105°", "25° और 50°", "40° और 80°"],
        ans: 1,
        pyqRef: "CTET Paper 2 & KVS TGT",
        explanation: "Both 15° and 105° are multiples of 15° (15*1 and 15*7), so both are constructible.",
        explanationHi: "15° और 105° दोनों 15° के गुणज हैं, अतः दोनों बनाए जा सकते हैं।"
      },
      {
        id: 21,
        q: "When drawing a perpendicular bisector of AB = 8 cm, the two arcs intersect at X and Y. The line joining X and Y cuts AB at M. What is the length of AM?",
        qHi: "AB = 8 सेमी का लंब समद्विभाजक खींचने पर दोनों चाप X और Y पर काटते हैं। XY रेखा AB को M पर काटती है। AM की लंबाई क्या होगी?",
        options: ["2 cm", "4 cm", "6 cm", "8 cm"],
        optionsHi: ["2 सेमी", "4 सेमी", "6 सेमी", "8 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "M is the midpoint of AB. AM = 8 / 2 = 4 cm.",
        explanationHi: "M, AB का मध्य बिंदु है। AM = 8 / 2 = 4 सेमी।"
      },
      {
        id: 22,
        q: "What is the radius of a circle if its diameter is 15 cm?",
        qHi: "यदि किसी वृत्त का व्यास 15 सेमी है, तो उसकी त्रिज्या क्या होगी?",
        options: ["7.5 cm", "30 cm", "5 cm", "10 cm"],
        optionsHi: ["7.5 सेमी", "30 सेमी", "5 सेमी", "10 सेमी"],
        ans: 0,
        pyqRef: "CTET Paper 1",
        explanation: "Radius = Diameter / 2 = 15 / 2 = 7.5 cm.",
        explanationHi: "त्रिज्या = व्यास / 2 = 15 / 2 = 7.5 सेमी।"
      },
      {
        id: 23,
        q: "What is the measure of each angle of a set-square with equal legs?",
        qHi: "समान भुजाओं वाले सेट-स्क्वायर के प्रत्येक कोण का माप क्या होता है?",
        options: ["30°, 60°, 90°", "45°, 45°, 90°", "60°, 60°, 60°", "30°, 30°, 120°"],
        optionsHi: ["30°, 60°, 90°", "45°, 45°, 90°", "60°, 60°, 60°", "30°, 30°, 120°"],
        ans: 1,
        pyqRef: "NCERT Class 6 Chapter 8 Geometry Tools",
        explanation: "The isosceles set-square has angles 45°, 45°, and 90°.",
        explanationHi: "समद्विबाहु सेट-स्क्वायर के कोण 45°, 45° और 90° होते हैं।"
      },
      {
        id: 24,
        q: "What are the angles of the other standard set-square in the geometry box?",
        qHi: "ज्यामिति बॉक्स के दूसरे मानक सेट-स्क्वायर के कोण क्या होते हैं?",
        options: ["30°, 60°, 90°", "45°, 45°, 90°", "30°, 30°, 60°", "20°, 70°, 90°"],
        optionsHi: ["30°, 60°, 90°", "45°, 45°, 90°", "30°, 30°, 60°", "20°, 70°, 90°"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "The second standard set-square has angles of 30°, 60°, and 90°.",
        explanationHi: "दूसरे मानक सेट-स्क्वायर के कोण 30°, 60° और 90° होते हैं।"
      },
      {
        id: 25,
        q: "If an angle of 150 degrees is constructed, which two standard angles can be bisected to get it?",
        qHi: "150 डिग्री का कोण प्राप्त करने के लिए किन दो कोणों के बीच का समद्विभाजक खींचा जाता है?",
        options: ["120° and 180°", "90° and 180°", "100° and 200°", "140° and 160°"],
        optionsHi: ["120° और 180°", "90° और 180°", "100° और 200°", "140° और 160°"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "(120 + 180) / 2 = 300 / 2 = 150 degrees.",
        explanationHi: "(120 + 180) / 2 = 300 / 2 = 150 डिग्री।"
      },
      {
        id: 26,
        q: "A line segment of length 14 cm is divided into 4 equal parts by successive perpendicular bisectors. What is the length of each part?",
        qHi: "14 सेमी लंबे रेखाखंड को क्रमिक लंब समद्विभाजकों द्वारा 4 बराबर भागों में बाँटा जाता है। प्रत्येक भाग की लंबाई क्या होगी?",
        options: ["2.5 cm", "3.5 cm", "4.5 cm", "7.0 cm"],
        optionsHi: ["2.5 सेमी", "3.5 सेमी", "4.5 सेमी", "7.0 सेमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "14 / 4 = 3.5 cm.",
        explanationHi: "14 / 4 = 3.5 सेमी।"
      },
      {
        id: 27,
        q: "How many lines can be drawn perpendicular to a given line from a point NOT lying on it?",
        qHi: "किसी रेखा पर बाहर स्थित बिंदु से उस रेखा पर कितने लंब खींचे जा सकते हैं?",
        options: ["Exactly one", "Exactly two", "Zero", "Infinitely many"],
        optionsHi: ["केवल और केवल एक", "ठीक दो", "शून्य", "अनंत"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CDS",
        explanation: "From an external point, exactly one perpendicular line can be drawn to a given straight line.",
        explanationHi: "बाहरी बिंदु से किसी रेखा पर केवल और केवल एक ही लंब रेखा खींची जा सकती है।"
      },
      {
        id: 28,
        q: "What is the region enclosed by an arc and the two radii joining its endpoints to the center of a circle called?",
        qHi: "वृत्त के एक चाप और उसके सिरों को केंद्र से मिलाने वाली दो त्रिज्याओं से घिरे क्षेत्र को क्या कहते हैं?",
        options: ["Segment (वृत्तखंड)", "Sector (त्रिज्यखंड)", "Chord (जीवा)", "Secant"],
        optionsHi: ["वृत्तखंड (Segment)", "त्रिज्यखंड (Sector)", "जीवा (Chord)", "छेदक रेखा"],
        ans: 1,
        pyqRef: "CTET Paper 2 & UPTET",
        explanation: "The region bounded by two radii and the arc is called a Sector (like a slice of pizza).",
        explanationHi: "दो त्रिज्याओं और संगत चाप के बीच के क्षेत्र को त्रिज्यखंड (Sector) कहते हैं।"
      },
      {
        id: 29,
        q: "What is the region between a chord and its corresponding arc called?",
        qHi: "वृत्त की किसी जीवा और उसके संगत चाप के बीच के क्षेत्र को क्या कहते हैं?",
        options: ["Sector", "Segment (वृत्तखंड)", "Quadrant", "Semi-circle"],
        optionsHi: ["त्रिज्यखंड", "वृत्तखंड (Segment)", "चतुर्थांश", "अर्धवृत्त"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "The region bounded by a chord and an arc is called a Segment of the circle.",
        explanationHi: "जीवा और चाप से घिरे क्षेत्र को वृत्तखंड (Segment) कहते हैं।"
      },
      {
        id: 30,
        q: "If an angle of 30 degrees is bisected, what is the measure of each new angle?",
        qHi: "यदि 30 डिग्री के कोण को समद्विभाजित किया जाए, तो प्रत्येक नए कोण का माप क्या होगा?",
        options: ["10 degrees", "15 degrees", "20 degrees", "25 degrees"],
        optionsHi: ["10 डिग्री", "15 डिग्री", "20 डिग्री", "25 डिग्री"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "30 / 2 = 15 degrees.",
        explanationHi: "30 / 2 = 15 डिग्री।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 9: Symmetry
  // ==========================================
  {
    id: "ncert-c6-m09",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 9,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 9: Symmetry (सममिति)",
    titleHi: "अध्याय 9: सममिति (रैखिक एवं घूर्णन सममिति, क्रम व रंगोली पैटर्न)",
    readingTime: "18 mins read",
    badge: "Visual Art & Geometry",
    desc: "Master reflectional symmetry (line of symmetry), multiple lines of symmetry in geometric figures (triangles, squares, rectangles, regular polygons, circle), English alphabet symmetries, rotational symmetry, angle and order of rotation, and traditional Indian Kolam/Rangoli art.",
    descHi: "रैखिक सममिति (दर्पण रेखा), ज्यामितीय आकृतियों में सममिति रेखाएँ (त्रिभुज, वर्ग, आयत, सम बहुभुज, वृत्त), अंग्रेजी वर्णमाला के अक्षरों की सममिति, घूर्णन सममिति (घूर्णन कोण व क्रम) तथा पारंपरिक भारतीय कोलम व रंगोली कला में सममिति।",
    competitionEdge: "Heavily featured in Non-Verbal Reasoning and Pedagogy for CTET Paper 1 & 2, BPSC TRE, SSC CGL/CHSL, and State TETs. Frequent questions on order of rotational symmetry of regular shapes and letters like H, I, O, X, Z.",
    competitionEdgeHi: "CTET पेपर 1 व 2, BPSC शिक्षक भर्ती और SSC की नॉन-वर्बल रीज़निंग में सर्वाधिक पूछे जाने वाले विषयों में से एक। नियमित बहुभुजों की सममिति रेखाएँ, घूर्णन सममिति का क्रम (Order of rotation), और H, I, O, X, Z जैसे अक्षरों की सममिति पर प्रश्न।",
    sections: [
      {
        heading: "1. Line Symmetry (Reflectional Symmetry) in Geometric Shapes",
        headingHi: "1. ज्यामितीय आकृतियों में रैखिक सममिति (परावर्तन सममिति)",
        contentHtml: `
          <p>A figure has <strong>Line Symmetry</strong> if it can be folded along a line such that the two halves coincide exactly. That line is called the <strong>Axis / Line of Symmetry</strong>.</p>
          <div class="note-formula-box">
            <h4>📐 Number of Lines of Symmetry in Key Figures:</h4>
            <ul>
              <li><strong>Scalene Triangle (विषमबाहु त्रिभुज):</strong> 0 lines</li>
              <li><strong>Isosceles Triangle (समद्विबाहु त्रिभुज):</strong> 1 line (altitude from vertex)</li>
              <li><strong>Equilateral Triangle (समबाहु त्रिभुज):</strong> 3 lines (medians/altitudes)</li>
              <li><strong>Rectangle (आयत):</strong> <strong>2 lines</strong> (joining midpoints of opposite sides; diagonals are NOT lines of symmetry!)</li>
              <li><strong>Rhombus (समचतुर्भुज):</strong> 2 lines (along diagonals)</li>
              <li><strong>Square (वर्ग):</strong> <strong>4 lines</strong> (2 midpoints + 2 diagonals)</li>
              <li><strong>Regular Pentagon:</strong> 5 lines</li>
              <li><strong>Regular Hexagon:</strong> 6 lines</li>
              <li><strong>Regular n-gon (सम n-भुज):</strong> Exactly <strong>n lines of symmetry</strong>!</li>
              <li><strong>Circle (वृत्त):</strong> <strong>Infinitely many lines</strong> (any diameter).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p>किसी आकृति में <strong>रैखिक सममिति</strong> तब होती है जब उसे किसी रेखा के अनुदिश मोड़ने पर दोनों भाग एक-दूसरे को पूरी तरह ढक लें। उस रेखा को <strong>सममिति अक्ष</strong> कहते हैं।</p>
          <div class="note-formula-box">
            <h4>📐 प्रमुख आकृतियों में सममिति रेखाओं की संख्या:</h4>
            <ul>
              <li><strong>विषमबाहु त्रिभुज:</strong> 0 रेखाएँ</li>
              <li><strong>समद्विबाहु त्रिभुज:</strong> 1 रेखा</li>
              <li><strong>समबाहु त्रिभुज:</strong> 3 रेखाएँ</li>
              <li><strong>आयत (Rectangle):</strong> <strong>2 रेखाएँ</strong> (विपरीत भुजाओं के मध्य बिंदुओं को मिलाने वाली; विकर्ण सममिति रेखाएँ नहीं होते!)</li>
              <li><strong>समचतुर्भुज (Rhombus):</strong> 2 रेखाएँ (विकर्णों के अनुदिश)</li>
              <li><strong>वर्ग (Square):</strong> <strong>4 रेखाएँ</strong> (2 मध्य बिंदु + 2 विकर्ण)</li>
              <li><strong>सम पंचभुज:</strong> 5 रेखाएँ</li>
              <li><strong>सम षट्भुज:</strong> 6 रेखाएँ</li>
              <li><strong>सम n-भुज:</strong> ठीक <strong>n सममिति रेखाएँ</strong>!</li>
              <li><strong>वृत्त:</strong> <strong>अनंत सममिति रेखाएँ</strong> (कोई भी व्यास)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Symmetry in English Capital Letters",
        headingHi: "2. अंग्रेजी वर्णमाला के बड़े अक्षरों में सममिति",
        contentHtml: `
          <div class="note-formula-box">
            <h4>🔤 Alphabet Classification for Competitive Exams:</h4>
            <ul>
              <li><strong>Vertical Line Symmetry only:</strong> A, M, T, U, V, W, Y</li>
              <li><strong>Horizontal Line Symmetry only:</strong> B, C, D, E, K</li>
              <li><strong>Both Vertical &amp; Horizontal Lines of Symmetry:</strong> <strong>H, I, O, X</strong> (O has infinitely many lines if circular)</li>
              <li><strong>No Line Symmetry, but Rotational Symmetry (180&deg;):</strong> <strong>N, S, Z</strong></li>
              <li><strong>No Symmetry at all:</strong> F, G, J, L, P, Q, R</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🔤 प्रतियोगी परीक्षाओं हेतु वर्णमाला वर्गीकरण:</h4>
            <ul>
              <li><strong>केवल ऊर्ध्वाधर सममिति रेखा (Vertical):</strong> A, M, T, U, V, W, Y</li>
              <li><strong>केवल क्षैतिज सममिति रेखा (Horizontal):</strong> B, C, D, E, K</li>
              <li><strong>क्षैतिज और ऊर्ध्वाधर दोनों सममिति रेखाएँ:</strong> <strong>H, I, O, X</strong></li>
              <li><strong>रैखिक सममिति शून्य, परंतु घूर्णन सममिति (180&deg;):</strong> <strong>N, S, Z</strong></li>
              <li><strong>कोई सममिति नहीं:</strong> F, G, J, L, P, Q, R</li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Rotational Symmetry & Order of Rotation",
        headingHi: "3. घूर्णन सममिति एवं घूर्णन का क्रम (Order of Rotation)",
        contentHtml: `
          <p>When an object rotates around a central point and matches its original shape before completing a full 360&deg; turn, it has <strong>Rotational Symmetry</strong>.</p>
          <div class="note-formula-box">
            <h4>⚡ Key Terms &amp; Formulas:</h4>
            <ul>
              <li><strong>Center of Rotation:</strong> The fixed point around which rotation happens.</li>
              <li><strong>Angle of Rotation:</strong> The smallest angle by which the figure is rotated to match itself.</li>
              <li><strong>Order of Rotational Symmetry:</strong> Number of times the figure looks identical in one full 360&deg; rotation:
                <p style="text-align:center; font-weight:800; color:#dc2626;">Order = 360&deg; / Angle of Rotation</p>
              </li>
              <li><strong>Examples:</strong>
                <ul>
                  <li>Equilateral Triangle: Angle = 120&deg; &rarr; <strong>Order = 3</strong></li>
                  <li>Square: Angle = 90&deg; &rarr; <strong>Order = 4</strong></li>
                  <li>Rectangle: Angle = 180&deg; &rarr; <strong>Order = 2</strong></li>
                  <li>Regular Hexagon: Angle = 60&deg; &rarr; <strong>Order = 6</strong></li>
                </ul>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p>जब कोई आकृति एक निश्चित बिंदु के चारों ओर घूमने पर 360&deg; के पूर्ण चक्कर से पहले ही अपनी मूल स्थिति जैसी दिखाई दे, तो उसमें <strong>घूर्णन सममिति</strong> होती है।</p>
          <div class="note-formula-box">
            <h4>⚡ प्रमुख शब्द एवं सूत्र:</h4>
            <ul>
              <li><strong>घूर्णन केंद्र:</strong> वह स्थिर बिंदु जिसके परितः आकृति घूमती है।</li>
              <li><strong>घूर्णन कोण:</strong> वह न्यूनतम कोण जिससे घुमाने पर आकृति पहले जैसी दिखे।</li>
              <li><strong>घूर्णन का क्रम (Order of Rotation):</strong> 360&deg; के एक पूरे चक्कर में आकृति कितनी बार मूल रूप जैसी दिखती है:
                <p style="text-align:center; font-weight:800; color:#dc2626;">क्रम = 360&deg; / घूर्णन कोण</p>
              </li>
              <li><strong>प्रमुख उदाहरण:</strong>
                <ul>
                  <li>समबाहु त्रिभुज: कोण = 120&deg; &rarr; <strong>क्रम = 3</strong></li>
                  <li>वर्ग: कोण = 90&deg; &rarr; <strong>क्रम = 4</strong></li>
                  <li>आयत: कोण = 180&deg; &rarr; <strong>क्रम = 2</strong></li>
                  <li>सम षट्भुज: कोण = 60&deg; &rarr; <strong>क्रम = 6</strong></li>
                </ul>
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How many lines of symmetry does a regular hexagon have?",
        qHi: "एक सम षट्भुज (Regular Hexagon) की कुल कितनी सममिति रेखाएँ होती हैं?",
        options: ["3", "4", "6", "12"],
        optionsHi: ["3", "4", "6", "12"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "A regular n-sided polygon always has exactly n lines of symmetry. For a hexagon, n = 6.",
        explanationHi: "किसी भी सम n-भुज की ठीक n सममिति रेखाएँ होती हैं। षट्भुज के लिए n = 6।"
      },
      {
        id: 2,
        q: "How many lines of symmetry does a rectangle have?",
        qHi: "एक आयत (Rectangle) की कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "4", "Infinite"],
        optionsHi: ["1", "2", "4", "अनंत"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "A rectangle has exactly 2 lines of symmetry (connecting opposite midpoints). Its diagonals are NOT lines of symmetry.",
        explanationHi: "आयत की ठीक 2 सममिति रेखाएँ होती हैं (विपरीत भुजाओं के मध्य बिंदुओं को मिलाने वाली)। इसके विकर्ण सममिति रेखाएँ नहीं होते।"
      },
      {
        id: 3,
        q: "Which English capital letter has BOTH horizontal and vertical lines of symmetry?",
        qHi: "किस अंग्रेजी बड़े अक्षर में क्षैतिज और ऊर्ध्वाधर दोनों सममिति रेखाएँ होती हैं?",
        options: ["A", "B", "H", "M"],
        optionsHi: ["A", "B", "H", "M"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2 & Reasoning",
        explanation: "Letter H can be reflected both vertically and horizontally onto itself. (Letters with both: H, I, O, X).",
        explanationHi: "अक्षर H को क्षैतिज और ऊर्ध्वाधर दोनों अक्षों के अनुदिश मोड़ा जा सकता है (H, I, O, X में दोनों रेखाएँ होती हैं)।"
      },
      {
        id: 4,
        q: "What is the order of rotational symmetry of a square?",
        qHi: "एक वर्ग की घूर्णन सममिति का क्रम (Order of rotational symmetry) क्या होता है?",
        options: ["1", "2", "3", "4"],
        optionsHi: ["1", "2", "3", "4"],
        ans: 3,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "A square looks identical at 90°, 180°, 270°, and 360°. Order = 360° / 90° = 4.",
        explanationHi: "वर्ग 90°, 180°, 270° और 360° पर बिल्कुल समान दिखता है। क्रम = 360° / 90° = 4।"
      },
      {
        id: 5,
        q: "What is the angle of rotation of an equilateral triangle?",
        qHi: "एक समबाहु त्रिभुज का घूर्णन कोण (Angle of rotation) क्या होता है?",
        options: ["60 degrees", "90 degrees", "120 degrees", "180 degrees"],
        optionsHi: ["60 डिग्री", "90 डिग्री", "120 डिग्री", "180 डिग्री"],
        ans: 2,
        pyqRef: "CTET Paper 2 & SSC CGL Reasoning",
        explanation: "Angle of rotation = 360° / 3 = 120 degrees.",
        explanationHi: "घूर्णन कोण = 360° / 3 = 120 डिग्री।"
      },
      {
        id: 6,
        q: "Which letter has rotational symmetry of order 2 but NO line of symmetry?",
        qHi: "किस अक्षर में क्रम 2 की घूर्णन सममिति होती है परंतु कोई रैखिक सममिति नहीं होती?",
        options: ["E", "M", "Z", "T"],
        optionsHi: ["E", "M", "Z", "T"],
        ans: 2,
        pyqRef: "CSAT & Reasoning Aptitude",
        explanation: "Letter Z has no line of symmetry, but after 180° rotation it looks identical (order 2).",
        explanationHi: "अक्षर Z में कोई सममिति रेखा नहीं होती, किंतु 180° घुमाने पर यह मूल रूप जैसा दिखता है (क्रम 2)।"
      },
      {
        id: 7,
        q: "How many lines of symmetry does a scalene triangle have?",
        qHi: "एक विषमबाहु त्रिभुज की कितनी सममिति रेखाएँ होती हैं?",
        options: ["0", "1", "2", "3"],
        optionsHi: ["0", "1", "2", "3"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "A scalene triangle has all sides unequal, hence 0 lines of symmetry.",
        explanationHi: "विषमबाहु त्रिभुज की सभी भुजाएँ असमान होती हैं, अतः इसमें 0 सममिति रेखाएँ होती हैं।"
      },
      {
        id: 8,
        q: "How many lines of symmetry does a rhombus have?",
        qHi: "एक समचतुर्भुज (Rhombus) की कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "4", "8"],
        optionsHi: ["1", "2", "4", "8"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "A rhombus has 2 lines of symmetry, which lie along its two diagonals.",
        explanationHi: "समचतुर्भुज की 2 सममिति रेखाएँ होती हैं, जो इसके विकर्णों के अनुदिश होती हैं।"
      },
      {
        id: 9,
        q: "What is the order of rotational symmetry of a regular pentagon?",
        qHi: "एक सम पंचभुज की घूर्णन सममिति का क्रम क्या होता है?",
        options: ["3", "4", "5", "10"],
        optionsHi: ["3", "4", "5", "10"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Order of rotational symmetry of a regular n-gon is always n. For pentagon, order = 5 (angle = 72°).",
        explanationHi: "सम n-भुज की घूर्णन सममिति का क्रम n होता है। पंचभुज के लिए क्रम = 5 (कोण = 72°)।"
      },
      {
        id: 10,
        q: "Which letter among the following has ONLY a vertical line of symmetry?",
        qHi: "निम्नलिखित में से किस अक्षर में केवल एक ऊर्ध्वाधर सममिति रेखा होती है?",
        options: ["B", "C", "M", "D"],
        optionsHi: ["B", "C", "M", "D"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Letter M has a vertical line of symmetry down its middle (B, C, D have horizontal).",
        explanationHi: "अक्षर M के ठीक बीच से ऊर्ध्वाधर सममिति रेखा गुजरती है (B, C, D में क्षैतिज रेखा होती है)।"
      },
      {
        id: 11,
        q: "What is the angle of rotational symmetry of a ceiling fan with 3 equally spaced blades?",
        qHi: "3 समान दूरी वाले पंखों (ब्लेड्स) वाले छत के पंखे का घूर्णन कोण क्या होगा?",
        options: ["60 degrees", "90 degrees", "120 degrees", "180 degrees"],
        optionsHi: ["60 डिग्री", "90 डिग्री", "120 डिग्री", "180 डिग्री"],
        ans: 2,
        pyqRef: "NCERT Class 6 Chapter 9 Everyday Life & CTET",
        explanation: "360 / 3 = 120 degrees.",
        explanationHi: "360 / 3 = 120 डिग्री।"
      },
      {
        id: 12,
        q: "What is the order of rotational symmetry of a ceiling fan with 4 equally spaced blades?",
        qHi: "4 ब्लेड्स वाले छत के पंखे की घूर्णन सममिति का क्रम क्या होगा?",
        options: ["2", "4", "6", "8"],
        optionsHi: ["2", "4", "6", "8"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Order = 4 (Angle = 360 / 4 = 90 degrees).",
        explanationHi: "क्रम = 4 (कोण = 360 / 4 = 90 डिग्री)।"
      },
      {
        id: 13,
        q: "How many lines of symmetry does a regular octagon have?",
        qHi: "एक सम अष्टभुज (Regular Octagon) की कितनी सममिति रेखाएँ होती हैं?",
        options: ["4", "6", "8", "16"],
        optionsHi: ["4", "6", "8", "16"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "A regular octagon has 8 lines of symmetry.",
        explanationHi: "सम अष्टभुज की ठीक 8 सममिति रेखाएँ होती हैं।"
      },
      {
        id: 14,
        q: "Which geometrical figure has an infinite order of rotational symmetry?",
        qHi: "किस ज्यामितीय आकृति में घूर्णन सममिति का क्रम अनंत होता है?",
        options: ["Square", "Regular Decagon", "Circle", "Equilateral Triangle"],
        optionsHi: ["वर्ग", "सम दशभुज", "वृत्त (Circle)", "समबाहु त्रिभुज"],
        ans: 2,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "A circle matches itself at ANY rotation angle around its center, so it has infinite order.",
        explanationHi: "वृत्त अपने केंद्र के परितः किसी भी कोण पर घुमाने पर मूल रूप में ही रहता है, अतः इसका क्रम अनंत है।"
      },
      {
        id: 15,
        q: "What is the order of rotational symmetry of a rectangle (non-square)?",
        qHi: "एक आयत (गैर-वर्ग) की घूर्णन सममिति का क्रम क्या होता है?",
        options: ["1", "2", "4", "8"],
        optionsHi: ["1", "2", "4", "8"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CHSL",
        explanation: "A rectangle looks identical after 180° and 360°. Order = 2.",
        explanationHi: "आयत 180° और 360° पर मूल रूप जैसा दिखता है। क्रम = 2।"
      },
      {
        id: 16,
        q: "Which word among the following reads the SAME in a plane mirror? (All vertical symmetry letters)",
        qHi: "समतल दर्पण में देखने पर निम्नलिखित में से कौन-सा शब्द बिल्कुल समान दिखेगा?",
        options: ["BOOK", "MOM", "CAT", "MATH"],
        optionsHi: ["BOOK", "MOM", "CAT", "MATH"],
        ans: 1,
        pyqRef: "Reasoning Mirror Image & CTET Paper 2",
        explanation: "M and O have vertical line symmetry, and MOM is a palindrome, so it looks identical in a mirror.",
        explanationHi: "M और O में ऊर्ध्वाधर सममिति है और MOM पैलिंड्रोम है, अतः दर्पण में बिल्कुल समान दिखेगा।"
      },
      {
        id: 17,
        q: "How many lines of symmetry does an equilateral triangle have?",
        qHi: "एक समबाहु त्रिभुज की कुल कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "3", "6"],
        optionsHi: ["1", "2", "3", "6"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "An equilateral triangle has 3 lines of symmetry (the 3 altitudes/medians).",
        explanationHi: "समबाहु त्रिभुज की 3 सममिति रेखाएँ होती हैं (तीनों शीर्षलंब/माध्यिकाएँ)।"
      },
      {
        id: 18,
        q: "What is the angle of rotation for a regular hexagon?",
        qHi: "एक सम षट्भुज का घूर्णन कोण क्या होता है?",
        options: ["30 degrees", "45 degrees", "60 degrees", "120 degrees"],
        optionsHi: ["30 डिग्री", "45 डिग्री", "60 डिग्री", "120 डिग्री"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "360 / 6 = 60 degrees.",
        explanationHi: "360 / 6 = 60 डिग्री।"
      },
      {
        id: 19,
        q: "Which of the following capital letters has NO line of symmetry and NO rotational symmetry?",
        qHi: "निम्नलिखित में से किस बड़े अक्षर में न तो कोई सममिति रेखा है और न ही कोई घूर्णन सममिति?",
        options: ["F", "H", "N", "O"],
        optionsHi: ["F", "H", "N", "O"],
        ans: 0,
        pyqRef: "Reasoning Aptitude & CTET",
        explanation: "Letter F has neither line symmetry nor rotational symmetry (order = 1, which means trivial).",
        explanationHi: "अक्षर F में न तो कोई सममिति रेखा है और न ही घूर्णन सममिति।"
      },
      {
        id: 20,
        q: "What is the order of rotational symmetry of letter S?",
        qHi: "अक्षर S की घूर्णन सममिति का क्रम क्या है?",
        options: ["1", "2", "3", "4"],
        optionsHi: ["1", "2", "3", "4"],
        ans: 1,
        pyqRef: "CSAT & Banking Reasoning",
        explanation: "Rotating S by 180° produces the same letter S. Order = 2.",
        explanationHi: "S को 180° घुमाने पर वही अक्षर S प्राप्त होता है। क्रम = 2।"
      },
      {
        id: 21,
        q: "How many lines of symmetry does a parallelogram (general) have?",
        qHi: "एक सामान्य समांतर चतुर्भुज की कितनी सममिति रेखाएँ होती हैं?",
        options: ["0", "1", "2", "4"],
        optionsHi: ["0", "1", "2", "4"],
        ans: 0,
        pyqRef: "CTET Paper 2 & NCERT Exemplar",
        explanation: "A general parallelogram has 0 lines of symmetry (it has rotational symmetry of order 2, but no reflection lines).",
        explanationHi: "सामान्य समांतर चतुर्भुज में 0 सममिति रेखाएँ होती हैं (इसमें केवल क्रम 2 की घूर्णन सममिति होती है)।"
      },
      {
        id: 22,
        q: "Which traditional Indian art form is famous for using grid-based dots and symmetry in Tamil Nadu?",
        qHi: "तमिलनाडु में ग्रिड आधारित बिंदुओं और सममिति का उपयोग करने के लिए कौन-सी पारंपरिक भारतीय कला प्रसिद्ध है?",
        options: ["Madhubani", "Kolam", "Warli", "Pattachitra"],
        optionsHi: ["मधुबनी", "कोलम (Kolam)", "वारली", "पट्टचित्र"],
        ans: 1,
        pyqRef: "NCERT Class 6 Ganita Prakash Chapter 9 Art Link & NEP GK",
        explanation: "Kolam uses dot lattices and intricate rotational/reflectional symmetries.",
        explanationHi: "कोलम कला में बिंदुओं के ग्रिड और जटिल घूर्णन व परावर्तन सममिति का उपयोग किया जाता है।"
      },
      {
        id: 23,
        q: "Can a figure have rotational symmetry of order more than 1 if its angle of rotation is 45 degrees?",
        qHi: "यदि किसी आकृति का घूर्णन कोण 45 डिग्री है, तो उसकी घूर्णन सममिति का क्रम क्या होगा?",
        options: ["4", "6", "8", "12"],
        optionsHi: ["4", "6", "8", "12"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Order = 360 / 45 = 8.",
        explanationHi: "क्रम = 360 / 45 = 8।"
      },
      {
        id: 24,
        q: "Can a figure have an angle of rotation equal to 17 degrees?",
        qHi: "क्या किसी आकृति का घूर्णन कोण 17 डिग्री हो सकता है?",
        options: ["Yes, for any shape", "No, because 360 is not divisible by 17", "Only for circles", "Only in 3D"],
        optionsHi: ["हाँ, किसी भी आकृति के लिए", "नहीं, क्योंकि 360 संख्या 17 से विभाजित नहीं होती", "केवल वृत्त के लिए", "केवल 3D में"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "For rotational symmetry of order n, 360° must be divisible by the angle. 360/17 is not an integer.",
        explanationHi: "घूर्णन सममिति के लिए 360° को कोण से पूर्णतः विभाजित होना चाहिए। 360/17 एक पूर्णांक नहीं है।"
      },
      {
        id: 25,
        q: "How many lines of symmetry does an isosceles trapezium have?",
        qHi: "एक समद्विबाहु समलंब (Isosceles Trapezium) की कितनी सममिति रेखाएँ होती हैं?",
        options: ["0", "1", "2", "4"],
        optionsHi: ["0", "1", "2", "4"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "An isosceles trapezium has exactly 1 line of symmetry joining the midpoints of its parallel sides.",
        explanationHi: "समद्विबाहु समलंब की समांतर भुजाओं के मध्य बिंदुओं को जोड़ने वाली ठीक 1 सममिति रेखा होती है।"
      },
      {
        id: 26,
        q: "How many lines of symmetry does a regular kite shape have?",
        qHi: "एक मानक पतंग (Kite) आकृति की कितनी सममिति रेखाएँ होती हैं?",
        options: ["1", "2", "4", "0"],
        optionsHi: ["1", "2", "4", "0"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "A kite has exactly 1 line of symmetry along its main diagonal.",
        explanationHi: "पतंग की उसके मुख्य विकर्ण के अनुदिश ठीक 1 सममिति रेखा होती है।"
      },
      {
        id: 27,
        q: "What is the order of rotational symmetry of an equilateral triangle?",
        qHi: "एक समबाहु त्रिभुज की घूर्णन सममिति का क्रम क्या है?",
        options: ["1", "2", "3", "6"],
        optionsHi: ["1", "2", "3", "6"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Order = 360 / 120 = 3.",
        explanationHi: "क्रम = 360 / 120 = 3।"
      },
      {
        id: 28,
        q: "Which letter among the following has only HORIZONTAL line symmetry?",
        qHi: "निम्नलिखित में से किस अक्षर में केवल क्षैतिज सममिति रेखा होती है?",
        options: ["A", "D", "M", "V"],
        optionsHi: ["A", "D", "M", "V"],
        ans: 1,
        pyqRef: "Reasoning & CTET",
        explanation: "Letter D can be folded horizontally across its middle.",
        explanationHi: "अक्षर D को उसके बीच से क्षैतिज रूप से मोड़ा जा सकता है।"
      },
      {
        id: 29,
        q: "If an object looks identical after a 1/4 turn, what is its angle of rotation and order?",
        qHi: "यदि कोई वस्तु 1/4 चक्कर (turn) के बाद मूल रूप जैसी दिखती है, तो उसका घूर्णन कोण और क्रम क्या है?",
        options: ["90° and order 4", "180° and order 2", "45° and order 8", "60° and order 6"],
        optionsHi: ["90° और क्रम 4", "180° और क्रम 2", "45° और क्रम 8", "60° और क्रम 6"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "1/4 turn = 360 / 4 = 90 degrees. Order = 4.",
        explanationHi: "1/4 चक्कर = 360 / 4 = 90 डिग्री। क्रम = 4।"
      },
      {
        id: 30,
        q: "If a shape has both line symmetry and rotational symmetry of order > 1, where must its center of rotation lie?",
        qHi: "यदि किसी आकृति में रैखिक सममिति और क्रम > 1 की घूर्णन सममिति दोनों हैं, तो उसका घूर्णन केंद्र कहाँ स्थित होना चाहिए?",
        options: ["Anywhere on the boundary", "At the intersection of its lines of symmetry", "Outside the shape", "At any vertex"],
        optionsHi: ["सीमा पर कहीं भी", "उसकी सममिति रेखाओं के प्रतिच्छेद बिंदु पर", "आकृति के बाहर", "किसी भी शीर्ष पर"],
        ans: 1,
        pyqRef: "BPSC TRE 4.0 Middle School & Olympiad",
        explanation: "The center of rotation always lies at the intersection point of all its lines of symmetry.",
        explanationHi: "घूर्णन केंद्र सदैव उसकी सभी सममिति रेखाओं के प्रतिच्छेद बिंदु पर स्थित होता है।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 10: The Other Side of Zero
  // ==========================================
  {
    id: "ncert-c6-m10",
    classLevel: "Class 6",
    subject: "Mathematics (Ganita Prakash)",
    subjectCode: "MATH",
    chapterNo: 10,
    bookName: "Ganita Prakash (NEP 2020 Edition)",
    title: "Chapter 10: The Other Side of Zero (शून्य के उस पार: Integers)",
    titleHi: "अध्याय 10: शून्य के उस पार (पूर्णांक एवं ब्रह्मगुप्त के नियम)",
    readingTime: "22 mins read",
    badge: "Integers & Negative Numbers",
    desc: "Journey beyond zero: negative numbers in the real world (temperatures, sea depth, debt/profit), representation of integers (Z) on the number line, ordering and absolute value, addition and subtraction rules, and Brahmagupta's foundational laws of signs (628 CE).",
    descHi: "शून्य से आगे की यात्रा: वास्तविक दुनिया में ऋणात्मक संख्याएँ (तापमान, समुद्र तल से गहराई, लाभ-हानि), संख्या रेखा पर पूर्णांकों (Z) का निरूपण, तुलना एवं निरपेक्ष मान, जोड़-घटाव के नियम तथा ब्रह्मगुप्त (628 ईस्वी) के चिह्न नियम।",
    competitionEdge: "Foundational topic for CTET Paper 2, BPSC TRE Middle, SSC CGL, and Railways. Direct questions on integer operations, additive inverse, Brahmagupta's debt/fortune rules, and number line movement.",
    competitionEdgeHi: "CTET पेपर 2, BPSC TRE (कक्षा 6-8) और SSC में बीजगणित का मूल प्रवेश बिंदु। पूर्णांकों के जोड़-घटाव, योज्य प्रतिलोम (Additive Inverse), ब्रह्मगुप्त के ऋण-धन नियम, और संख्या रेखा पर विस्थापन पर प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. Why Negative Numbers? Real-World Meaning & Number Line",
        headingHi: "1. ऋणात्मक संख्याओं की आवश्यकता: व्यावहारिक अर्थ व संख्या रेखा",
        contentHtml: `
          <p>Real-world situations demand numbers on both sides of a reference zero:</p>
          <div class="note-formula-box">
            <h4>🌡️ Real-Life Opposites:</h4>
            <ul>
              <li><strong>Temperature:</strong> Above 0&deg;C is positive (+25&deg;C); below 0&deg;C is negative (-10&deg;C in Ladakh/Siachen).</li>
              <li><strong>Elevation:</strong> Height above sea level (+8848 m for Mt Everest); depth below sea level (-10,994 m for Mariana Trench).</li>
              <li><strong>Finance:</strong> Profit / Deposit = +₹500; Loss / Withdrawal = -₹500.</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>📏 Integers Set (&Z;) on the Number Line:</h4>
            <p style="text-align:center; font-weight:700; color:#1e3a8a;">... -4, -3, -2, -1, 0, +1, +2, +3, +4 ...</p>
            <ul>
              <li><strong>Zero (0):</strong> Neither positive nor negative. It is the neutral origin.</li>
              <li><strong>Golden Direction Rule:</strong> Moving <strong>Right = Greater / Addition</strong>; Moving <strong>Left = Smaller / Subtraction</strong>.</li>
              <li><strong>Ordering:</strong> For negative numbers, larger absolute value means smaller integer! (e.g. <strong>-50 &lt; -2</strong>).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p>वास्तविक जीवन की स्थितियों में संदर्भ शून्य के दोनों ओर संख्याओं की आवश्यकता होती है:</p>
          <div class="note-formula-box">
            <h4>🌡️ वास्तविक जीवन के विपरीत युग्म:</h4>
            <ul>
              <li><strong>तापमान:</strong> 0&deg;C से ऊपर धनात्मक (+35&deg;C); 0&deg;C से नीचे ऋणात्मक (-15&deg;C सियाचिन/लद्दाख में)।</li>
              <li><strong>ऊँचाई व गहराई:</strong> समुद्र तल से ऊपर ऊँचाई (+8848 मी माउंट एवरेस्ट); समुद्र तल से नीचे गहराई (-10,994 मी मेरियाना गर्त)।</li>
              <li><strong>वित्तीय लेन-देन:</strong> लाभ / जमा = +₹1000; हानि / निकासी = -₹1000।</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>📏 संख्या रेखा पर पूर्णांक समुच्चय (&Z;):</h4>
            <p style="text-align:center; font-weight:700; color:#1e3a8a;">... -4, -3, -2, -1, 0, +1, +2, +3, +4 ...</p>
            <ul>
              <li><strong>शून्य (0):</strong> न तो धनात्मक है और न ही ऋणात्मक। यह तटस्थ मूल बिंदु है।</li>
              <li><strong>दिशा का स्वर्णिम नियम:</strong> संख्या रेखा पर <strong>दाएँ जाना = बड़ा मान / जोड़</strong>; <strong>बाएँ जाना = छोटा मान / घटाव</strong>।</li>
              <li><strong>तुलना नियम:</strong> ऋणात्मक संख्याओं में जो संख्या संख्यात्मक रूप से बड़ी दिखती है, वह वास्तव में छोटी होती है! (उदा. <strong>-50 &lt; -2</strong>)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Additive Inverse & Absolute Value",
        headingHi: "2. योज्य प्रतिलोम (Additive Inverse) एवं निरपेक्ष मान",
        contentHtml: `
          <div class="note-formula-box">
            <h4>⚡ Definitions &amp; Properties:</h4>
            <ul>
              <li><strong>Additive Inverse (योज्य प्रतिलोम):</strong> The number that when added to a gives zero: <strong>a + (-a) = 0</strong>.
                <ul>
                  <li>Additive inverse of +7 is <strong>-7</strong>.</li>
                  <li>Additive inverse of -15 is <strong>+15</strong>.</li>
                  <li>Additive inverse of 0 is <strong>0</strong>.</li>
                </ul>
              </li>
              <li><strong>Absolute Value (|x| - निरपेक्ष मान):</strong> Distance from zero on the number line regardless of direction (always non-negative).
                <ul>
                  <li>|+8| = 8; |-8| = 8; |0| = 0.</li>
                </ul>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>⚡ परिभाषाएँ एवं प्रमुख गुणधर्म:</h4>
            <ul>
              <li><strong>योज्य प्रतिलोम (Additive Inverse):</strong> वह संख्या जिसे किसी संख्या में जोड़ने पर योगफल शून्य (0) प्राप्त हो: <strong>a + (-a) = 0</strong>।
                <ul>
                  <li>+7 का योज्य प्रतिलोम <strong>-7</strong> है।</li>
                  <li>-15 का योज्य प्रतिलोम <strong>+15</strong> है।</li>
                  <li>0 का योज्य प्रतिलोम स्वयं <strong>0</strong> है।</li>
                </ul>
              </li>
              <li><strong>निरपेक्ष मान (|x| - Absolute Value):</strong> संख्या रेखा पर शून्य से उस संख्या की दूरी (सदैव अऋणात्मक/धनात्मक)।
                <ul>
                  <li>|+8| = 8; |-8| = 8; |0| = 0।</li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. Brahmagupta's Laws of Addition and Subtraction (628 CE)",
        headingHi: "3. ब्रह्मगुप्त के जोड़ व घटाव के नियम (628 ईस्वी)",
        contentHtml: `
          <p>In 628 CE, <strong>Brahmagupta</strong> formulated the complete arithmetic of positive (fortune/dhanam), negative (debt/rnam), and zero (kham) in <em>Brahmasphutasiddhanta</em>:</p>
          <div class="note-formula-box">
            <h4>🏆 Brahmagupta's Original Sanskrit Sutras Explained:</h4>
            <ul>
              <li><strong>Debt + Debt = Greater Debt:</strong> (-a) + (-b) = <strong>-(a + b)</strong>. Example: (-5) + (-7) = -12.</li>
              <li><strong>Fortune + Fortune = Greater Fortune:</strong> (+a) + (+b) = <strong>+(a + b)</strong>. Example: (+8) + (+4) = +12.</li>
              <li><strong>Debt + Fortune = Difference:</strong> Subtract the smaller magnitude from the larger, and keep the sign of the larger magnitude. Example: (-9) + (+4) = -5.</li>
              <li><strong>Subtracting a Negative is Adding a Positive:</strong> a - (-b) = <strong>a + b</strong>! (Removing a debt is equivalent to gaining a fortune).</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p>628 ईस्वी में <strong>ब्रह्मगुप्त</strong> ने अपने ग्रंथ <em>ब्राह्मस्फुटसिद्धांत</em> में धन (धनात्मक), ऋण (ऋणात्मक) और खम (शून्य) के संचालन के सार्वभौमिक नियम दिए:</p>
          <div class="note-formula-box">
            <h4>🏆 ब्रह्मगुप्त के मूल सूत्रों की व्याख्या:</h4>
            <ul>
              <li><strong>ऋण + ऋण = बड़ा ऋण:</strong> (-a) + (-b) = <strong>-(a + b)</strong>। उदाहरण: (-5) + (-7) = -12।</li>
              <li><strong>धन + धन = बड़ा धन:</strong> (+a) + (+b) = <strong>+(a + b)</strong>। उदाहरण: (+8) + (+4) = +12।</li>
              <li><strong>ऋण + धन = अंतर:</strong> बड़े परिमाण में से छोटा परिमाण घटाएँ और बड़े का चिह्न लगाएँ। उदाहरण: (-9) + (+4) = -5।</li>
              <li><strong>ऋण को घटाना = धन को जोड़ना:</strong> a - (-b) = <strong>a + b</strong>! (ऋण को समाप्त करना धन प्राप्त करने के समान है)।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the value of (-15) + (-28)?",
        qHi: "(-15) + (-28) का मान क्या होगा?",
        options: ["-13", "-43", "+43", "-33"],
        optionsHi: ["-13", "-43", "+43", "-33"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Middle",
        explanation: "Sum of two negative integers is negative: -(15 + 28) = -43.",
        explanationHi: "दो ऋणात्मक पूर्णांकों का योग सदैव ऋणात्मक होता है: -(15 + 28) = -43।"
      },
      {
        id: 2,
        q: "What is the value of (-35) - (-18)?",
        qHi: "(-35) - (-18) का मान क्या होगा?",
        options: ["-53", "-17", "+17", "+53"],
        optionsHi: ["-53", "-17", "+17", "+53"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CHSL",
        explanation: "Subtracting a negative is adding: -35 - (-18) = -35 + 18 = -17.",
        explanationHi: "ऋणात्मक संख्या घटाना जोड़ने के समान है: -35 - (-18) = -35 + 18 = -17।"
      },
      {
        id: 3,
        q: "Which of the following integers is the GREATEST?",
        qHi: "निम्नलिखित पूर्णांकों में से सबसे बड़ा पूर्णांक कौन-सा है?",
        options: ["-25", "-8", "-1", "-100"],
        optionsHi: ["-25", "-8", "-1", "-100"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "-1 lies furthest to the right on the number line among all options. It is the greatest negative integer.",
        explanationHi: "-1 संख्या रेखा पर सबसे दाईं ओर स्थित है। यह सबसे बड़ा ऋणात्मक पूर्णांक है।"
      },
      {
        id: 4,
        q: "What is the additive inverse of -47?",
        qHi: "-47 का योज्य प्रतिलोम (Additive Inverse) क्या होगा?",
        options: ["0", "1", "+47", "-1"],
        optionsHi: ["0", "1", "+47", "-1"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School",
        explanation: "The additive inverse of -x is +x. -47 + 47 = 0.",
        explanationHi: "-x का योज्य प्रतिलोम +x होता है। -47 + 47 = 0।"
      },
      {
        id: 5,
        q: "In a quiz, team A scored -30, 20, 0, and team B scored 20, 0, -30 in three successive rounds. Which team scored more?",
        qHi: "एक प्रश्नोत्तरी में टीम A ने -30, 20, 0 और टीम B ने 20, 0, -30 अंक प्राप्त किए। किस टीम का कुल स्कोर अधिक रहा?",
        options: ["Team A", "Team B", "Both scored equally (-10)", "Cannot be compared"],
        optionsHi: ["टीम A", "टीम B", "दोनों का स्कोर बराबर रहा (-10)", "तुलना नहीं हो सकती"],
        ans: 2,
        pyqRef: "NCERT Class 6 Ganita Prakash Chapter 10 & CTET",
        explanation: "Team A: -30 + 20 + 0 = -10. Team B: 20 + 0 + (-30) = -10. Addition is commutative.",
        explanationHi: "टीम A = -10। टीम B = -10। पूर्णांकों का योग क्रमविनिमेय (commutative) होता है, दोनों का बराबर स्कोर रहा।"
      },
      {
        id: 6,
        q: "A submarine is moving at a depth of 800 meters below sea level. If it ascends 250 meters, what is its new depth?",
        qHi: "एक पनडुब्बी समुद्र तल से 800 मीटर नीचे चल रही है। यदि यह 250 मीटर ऊपर उठती है, तो इसकी नई गहराई क्या होगी?",
        options: ["-1050 m", "-550 m (550 m below sea level)", "+550 m", "-650 m"],
        optionsHi: ["-1050 मीटर", "-550 मीटर (समुद्र तल से 550 मीटर नीचे)", "+550 मीटर", "-650 मीटर"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "-800 + 250 = -550 meters (550 meters below sea level).",
        explanationHi: "-800 + 250 = -550 मीटर (समुद्र तल से 550 मीटर नीचे)।"
      },
      {
        id: 7,
        q: "What is the successor of -19?",
        qHi: "-19 का परवर्ती (Successor) क्या होगा?",
        options: ["-20", "-18", "+18", "+20"],
        optionsHi: ["-20", "-18", "+18", "+20"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Successor = n + 1. -19 + 1 = -18.",
        explanationHi: "परवर्ती = n + 1। -19 + 1 = -18।"
      },
      {
        id: 8,
        q: "What is the predecessor of -25?",
        qHi: "-25 का पूर्ववर्ती (Predecessor) क्या होगा?",
        options: ["-24", "-26", "+24", "+26"],
        optionsHi: ["-24", "-26", "+24", "+26"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Predecessor = n - 1. -25 - 1 = -26.",
        explanationHi: "पूर्ववर्ती = n - 1। -25 - 1 = -26।"
      },
      {
        id: 9,
        q: "According to Brahmagupta (628 CE), what is 'Debt + Debt' equal to?",
        qHi: "ब्रह्मगुप्त (628 ईस्वी) के अनुसार 'ऋण + ऋण' किसके बराबर होता है?",
        options: ["Fortune (धन)", "Greater Debt (ऋण)", "Zero (शून्य)", "Undefined"],
        optionsHi: ["धन (Fortune)", "बड़ा ऋण (Debt)", "शून्य", "अपरिभाषित"],
        ans: 1,
        pyqRef: "NCERT Chapter 10 Historical Note & Teaching Pedagogy",
        explanation: "Brahmagupta formulated: The sum of two debts is a greater debt (ऋण + ऋण = ऋण).",
        explanationHi: "ब्रह्मगुप्त का सूत्र: दो ऋणों का योग एक बड़ा ऋण होता है।"
      },
      {
        id: 10,
        q: "What is the value of | -18 | - | 12 |?",
        qHi: "| -18 | - | 12 | का मान क्या होगा?",
        options: ["-30", "-6", "6", "30"],
        optionsHi: ["-30", "-6", "6", "30"],
        ans: 2,
        pyqRef: "SSC CHSL & Railway NTPC",
        explanation: "|-18| = 18 and |12| = 12. 18 - 12 = 6.",
        explanationHi: "|-18| = 18 तथा |12| = 12। 18 - 12 = 6।"
      },
      {
        id: 11,
        q: "The temperature of Srinagar was -5°C on Monday and it dropped by 2°C on Tuesday. What was the temperature on Tuesday?",
        qHi: "श्रीनगर का तापमान सोमवार को -5°C था और मंगलवार को 2°C और गिर गया। मंगलवार को तापमान क्या था?",
        options: ["-3°C", "-7°C", "+3°C", "-10°C"],
        optionsHi: ["-3°C", "-7°C", "+3°C", "-10°C"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Dropping means subtracting: -5 - 2 = -7°C.",
        explanationHi: "तापमान गिरने का अर्थ घटाना है: -5 - 2 = -7°C।"
      },
      {
        id: 12,
        q: "What is the sum of -50, -200, and 300?",
        qHi: "-50, -200 और 300 का योग क्या होगा?",
        options: ["-550", "-50", "+50", "+550"],
        optionsHi: ["-550", "-50", "+50", "+550"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "(-50) + (-200) + 300 = -250 + 300 = 50.",
        explanationHi: "(-50) + (-200) + 300 = -250 + 300 = 50।"
      },
      {
        id: 13,
        q: "How many integers lie strictly between -4 and +4?",
        qHi: "-4 और +4 के बीच में ठीक कितने पूर्णांक स्थित हैं?",
        options: ["7", "8", "9", "6"],
        optionsHi: ["7", "8", "9", "6"],
        ans: 0,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "The integers are -3, -2, -1, 0, 1, 2, 3 (total 7 integers).",
        explanationHi: "ये पूर्णांक हैं: -3, -2, -1, 0, 1, 2, 3 (कुल 7 पूर्णांक)।"
      },
      {
        id: 14,
        q: "What is the value of 30 - (-12) - 18?",
        qHi: "30 - (-12) - 18 का मान क्या होगा?",
        options: ["0", "24", "42", "60"],
        optionsHi: ["0", "24", "42", "60"],
        ans: 1,
        pyqRef: "Railway Group D & SSC MTS",
        explanation: "30 + 12 - 18 = 42 - 18 = 24.",
        explanationHi: "30 + 12 - 18 = 42 - 18 = 24।"
      },
      {
        id: 15,
        q: "If an elevator at the 5th floor goes down 8 floors, which floor does it reach?",
        qHi: "यदि 5वीं मंजिल पर स्थित लिफ्ट 8 मंजिल नीचे जाती है, तो वह किस तल पर पहुँचती है?",
        options: ["3rd basement (-3)", "13th floor", "2nd basement (-2)", "Ground floor (0)"],
        optionsHi: ["तहखाना 3 (-3)", "13वीं मंजिल", "तहखाना 2 (-2)", "भूतल (0)"],
        ans: 0,
        pyqRef: "NCERT Class 6 Ganita Prakash Example & CTET",
        explanation: "5 - 8 = -3 (3rd basement floor).",
        explanationHi: "5 - 8 = -3 (तहखाना 3 या तीसरी बेसमेंट मंजिल)।"
      },
      {
        id: 16,
        q: "What is the additive inverse of 0?",
        qHi: "0 का योज्य प्रतिलोम (Additive Inverse) क्या होगा?",
        options: ["1", "-1", "0", "Does not exist"],
        optionsHi: ["1", "-1", "0", "अस्तित्व में नहीं है"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "0 + 0 = 0. The additive inverse of 0 is 0 itself.",
        explanationHi: "0 + 0 = 0। 0 का योज्य प्रतिलोम स्वयं 0 ही होता है।"
      },
      {
        id: 17,
        q: "Which expression has the SMALLEST value?",
        qHi: "निम्नलिखित में से किस व्यंजक का मान सबसे छोटा है?",
        options: ["-10 + 5", "-10 - 5", "-10 + (-5)", "-5 - (-10)"],
        optionsHi: ["-10 + 5", "-10 - 5", "-10 + (-5)", "-5 - (-10)"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "-10 - 5 = -15 (and -10 + (-5) is also -15, which is the smallest).",
        explanationHi: "-10 - 5 = -15 सबसे छोटा मान है।"
      },
      {
        id: 18,
        q: "What is the distance between -8 and +5 on the number line?",
        qHi: "संख्या रेखा पर -8 और +5 के बीच की दूरी कितनी है?",
        options: ["3 units", "13 units", "-3 units", "-13 units"],
        optionsHi: ["3 इकाई", "13 इकाई", "-3 इकाई", "-13 इकाई"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Distance = |5 - (-8)| = |5 + 8| = 13 units (distance is always positive).",
        explanationHi: "दूरी = |5 - (-8)| = |5 + 8| = 13 इकाई (दूरी सदैव धनात्मक होती है)।"
      },
      {
        id: 19,
        q: "What is the value of (-1) + (-1) + (-1) ... added 50 times?",
        qHi: "(-1) को 50 बार जोड़ने पर (-1) + (-1) + (-1)... क्या प्राप्त होगा?",
        options: ["-50", "+50", "0", "1"],
        optionsHi: ["-50", "+50", "0", "1"],
        ans: 0,
        pyqRef: "SSC CHSL & Railway NTPC",
        explanation: "50 * (-1) = -50.",
        explanationHi: "50 * (-1) = -50।"
      },
      {
        id: 20,
        q: "What is the value of (-1)^50 (meaning -1 multiplied 50 times)?",
        qHi: "(-1)^50 का मान क्या होगा?",
        options: ["-50", "-1", "+1", "+50"],
        optionsHi: ["-50", "-1", "+1", "+50"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "-1 raised to an even power is always +1.",
        explanationHi: "-1 की सम घात सदैव +1 होती है।"
      },
      {
        id: 21,
        q: "What is the value of (-1)^51?",
        qHi: "(-1)^51 का मान क्या होगा?",
        options: ["-51", "-1", "+1", "0"],
        optionsHi: ["-51", "-1", "+1", "0"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "-1 raised to an odd power is always -1.",
        explanationHi: "-1 की विषम घात सदैव -1 होती है।"
      },
      {
        id: 22,
        q: "Which property is shown by: (-8) + (+5) = (+5) + (-8)?",
        qHi: "(-8) + (+5) = (+5) + (-8) द्वारा कौन-सा गुणधर्म प्रदर्शित होता है?",
        options: ["Associative property", "Commutative property of addition", "Closure property", "Distributive property"],
        optionsHi: ["सहचर्य गुणधर्म", "जोड़ का क्रमविनिमेय गुणधर्म", "संवृत्त गुणधर्म", "वितरण गुणधर्म"],
        ans: 1,
        pyqRef: "CTET Pedagogy & BPSC TRE Middle",
        explanation: "Changing order of addends without changing sum is the Commutative Property of Addition.",
        explanationHi: "जोड़ने के क्रम को बदलने पर भी योग समान रहना क्रमविनिमेय गुणधर्म (Commutative Property) कहलाता है।"
      },
      {
        id: 23,
        q: "If x is a negative integer, what is the sign of -x?",
        qHi: "यदि x एक ऋणात्मक पूर्णांक है, तो -x का चिह्न क्या होगा?",
        options: ["Always negative", "Always positive", "Zero", "Cannot be determined"],
        optionsHi: ["सदैव ऋणात्मक", "सदैव धनात्मक", "शून्य", "ज्ञात नहीं किया जा सकता"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Olympiad",
        explanation: "If x = -k (where k > 0), then -x = -(-k) = +k (positive).",
        explanationHi: "यदि x = -k है, तो -x = -(-k) = +k (सदैव धनात्मक)।"
      },
      {
        id: 24,
        q: "What is the sum of an integer and its additive inverse?",
        qHi: "किसी पूर्णांक और उसके योज्य प्रतिलोम का योग क्या होता है?",
        options: ["1", "-1", "0", "2x"],
        optionsHi: ["1", "-1", "0", "2x"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "By definition, a + (-a) = 0.",
        explanationHi: "परिभाषानुसार, a + (-a) = 0 होता है।"
      },
      {
        id: 25,
        q: "A plane is flying at a height of 5000 m above sea level. At a particular point, it is exactly above a submarine floating at 1200 m below sea level. What is the vertical distance between them?",
        qHi: "एक हवाई जहाज समुद्र तल से 5000 मीटर की ऊँचाई पर उड़ रहा है। ठीक उसी समय वह समुद्र तल से 1200 मीटर नीचे तैरती पनडुब्बी के ठीक ऊपर है। दोनों के बीच की ऊर्ध्वाधर दूरी क्या है?",
        options: ["3800 m", "4800 m", "6200 m", "7200 m"],
        optionsHi: ["3800 मीटर", "4800 मीटर", "6200 मीटर", "7200 मीटर"],
        ans: 2,
        pyqRef: "NCERT Class 6 Chapter 10 & BPSC TRE Middle",
        explanation: "Distance = 5000 - (-1200) = 5000 + 1200 = 6200 meters.",
        explanationHi: "ऊर्ध्वाधर दूरी = 5000 - (-1200) = 5000 + 1200 = 6200 मीटर।"
      },
      {
        id: 26,
        q: "What is the value of 50 - (-40) - (-10)?",
        qHi: "50 - (-40) - (-10) का मान क्या होगा?",
        options: ["0", "80", "100", "-100"],
        optionsHi: ["0", "80", "100", "-100"],
        ans: 2,
        pyqRef: "Railway NTPC & SSC CHSL",
        explanation: "50 + 40 + 10 = 100.",
        explanationHi: "50 + 40 + 10 = 100।"
      },
      {
        id: 27,
        q: "Which integer has no predecessor in the set of WHOLE NUMBERS (W)?",
        qHi: "पूर्ण संख्याओं (Whole Numbers - W) के समुच्चय में किस संख्या का कोई पूर्ववर्ती नहीं होता?",
        options: ["0", "1", "-1", "None"],
        optionsHi: ["0", "1", "-1", "कोई नहीं"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "In whole numbers {0, 1, 2, ...}, 0 is the smallest and has no predecessor (in integers, it does: -1).",
        explanationHi: "पूर्ण संख्याओं {0, 1, 2...} में 0 का कोई पूर्ववर्ती नहीं होता (पूर्णांकों में -1 होता है)।"
      },
      {
        id: 28,
        q: "What is the value of (-12) + (+12)?",
        qHi: "(-12) + (+12) का मान क्या होगा?",
        options: ["-24", "0", "+24", "1"],
        optionsHi: ["-24", "0", "+24", "1"],
        ans: 1,
        pyqRef: "CTET Paper 1",
        explanation: "Sum of a number and its opposite is 0.",
        explanationHi: "किसी संख्या और उसके विपरीत का योग 0 होता है।"
      },
      {
        id: 29,
        q: "Arrange in ascending order: -9, 0, -3, 5, -12, 7.",
        qHi: "आरोही (बढ़ते) क्रम में व्यवस्थित करें: -9, 0, -3, 5, -12, 7।",
        options: ["-12, -9, -3, 0, 5, 7", "-3, -9, -12, 0, 5, 7", "7, 5, 0, -3, -9, -12", "0, -3, 5, -9, 7, -12"],
        optionsHi: ["-12, -9, -3, 0, 5, 7", "-3, -9, -12, 0, 5, 7", "7, 5, 0, -3, -9, -12", "0, -3, 5, -9, 7, -12"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "On the number line: -12 < -9 < -3 < 0 < 5 < 7.",
        explanationHi: "संख्या रेखा पर: -12 < -9 < -3 < 0 < 5 < 7।"
      },
      {
        id: 30,
        q: "What is the difference between the largest negative integer and the smallest positive integer?",
        qHi: "सबसे बड़े ऋणात्मक पूर्णांक और सबसे छोटे धनात्मक पूर्णांक का अंतर क्या होगा?",
        options: ["0", "-2", "+2", "-1"],
        optionsHi: ["0", "-2", "+2", "-1"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Largest negative integer = -1. Smallest positive integer = +1. Difference = -1 - (+1) = -2.",
        explanationHi: "सबसे बड़ा ऋणात्मक पूर्णांक = -1। सबसे छोटा धनात्मक पूर्णांक = +1। अंतर = -1 - (+1) = -2।"
      }
    ]
  }
];

module.exports = chapters;
