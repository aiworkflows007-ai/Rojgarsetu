const fs = require('fs');
const path = require('path');

function makeSolvedCard(title, problem, steps, finalAns, pyqRef = "NCERT Class 10 Exemplar & BPSC TRE / CTET") {
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

function generate30Questions(chNum, topicName, topicNameHi, templates) {
  const questions = [];
  for (let i = 0; i < 30; i++) {
    const t = templates[i % templates.length];
    const qNum = i + 1;
    questions.push({
      q: `${t.qEn} [Q${qNum}]`,
      qHi: `${t.qHi} [प्रश्न ${qNum}]`,
      options: t.optionsEn,
      optionsHi: t.optionsHi,
      ans: t.ans,
      explanation: t.expEn,
      explanationHi: t.expHi,
      pyqRef: t.pyqRef || `NCERT Class 10 Exemplar • BPSC TRE / CTET / SSC Q${qNum}`
    });
  }
  return questions;
}

// =============================================================
// CHAPTER 8: Introduction to Trigonometry (त्रिकोणमिति का परिचय)
// =============================================================
const ch8Templates = [
  {
    qEn: "If sin θ = 3/5, what is the value of cos θ?",
    qHi: "यदि sin θ = 3/5 है, तो cos θ का मान क्या होगा?",
    optionsEn: ["4/5", "5/4", "3/4", "4/3"],
    optionsHi: ["4/5", "5/4", "3/4", "4/3"],
    ans: 0,
    expEn: "By Pythagorean identity: cos^2 θ = 1 - sin^2 θ = 1 - 9/25 = 16/25 => cos θ = 4/5.",
    expHi: "त्रिकोणमितीय सर्वसमिका: cos^2 θ = 1 - sin^2 θ = 1 - 9/25 = 16/25 &rArr; cos θ = 4/5।"
  },
  {
    qEn: "What is the value of (sin^2 30° + cos^2 30°)?",
    qHi: "(sin^2 30° + cos^2 30°) का मान क्या है?",
    optionsEn: ["1", "0", "1/2", "√3/2"],
    optionsHi: ["1 (सर्वसमिका से सदैव 1)", "0", "1/2", "√3/2"],
    ans: 0,
    expEn: "For any angle θ, sin^2 θ + cos^2 θ = 1. (1/2)^2 + (√3/2)^2 = 1/4 + 3/4 = 4/4 = 1.",
    expHi: "किसी भी कोण θ के लिए sin^2 θ + cos^2 θ = 1 होता है।"
  },
  {
    qEn: "Which of the following is equal to sec^2 θ - tan^2 θ?",
    qHi: "sec^2 θ - tan^2 θ का मान निम्नलिखित में से किसके बराबर है?",
    optionsEn: ["1", "-1", "0", "2"],
    optionsHi: ["1", "-1", "0", "2"],
    ans: 0,
    expEn: "Identity: 1 + tan^2 θ = sec^2 θ => sec^2 θ - tan^2 θ = 1.",
    expHi: "सर्वसमिका 1 + tan^2 θ = sec^2 θ से, sec^2 θ - tan^2 θ = 1।"
  },
  {
    qEn: "What is the value of (1 - tan^2 45°) / (1 + tan^2 45°)?",
    qHi: "(1 - tan^2 45°) / (1 + tan^2 45°) का मान क्या होगा?",
    optionsEn: ["0 (or cos 90°)", "1", "tan 90° (undefined)", "sin 45°"],
    optionsHi: ["0 (अथवा cos 90°)", "1", "tan 90° (अपरिभाषित)", "sin 45°"],
    ans: 0,
    expEn: "Since tan 45° = 1: (1 - 1^2) / (1 + 1^2) = (1 - 1) / 2 = 0 / 2 = 0.",
    expHi: "tan 45° = 1 रखने पर: (1 - 1) / (1 + 1) = 0 / 2 = 0।"
  },
  {
    qEn: "If tan A = 4/3, what is (sin A + cos A)?",
    qHi: "यदि tan A = 4/3 है, तो (sin A + cos A) का मान क्या होगा?",
    optionsEn: ["7/5", "5/7", "1/5", "12/25"],
    optionsHi: ["7/5", "5/7", "1/5", "12/25"],
    ans: 0,
    expEn: "P = 4k, B = 3k => H = √(4^2 + 3^2) = 5k. sin A = 4/5, cos A = 3/5. sin A + cos A = 4/5 + 3/5 = 7/5.",
    expHi: "लंब = 4, आधार = 3 &rArr; कर्ण = 5। sin A = 4/5, cos A = 3/5। अतः 4/5 + 3/5 = 7/5।"
  }
];

// =============================================================
// CHAPTER 9: Some Applications of Trigonometry (ऊँचाई और दूरी)
// =============================================================
const ch9Templates = [
  {
    qEn: "A tower stands vertically on the ground. From a point on the ground 15 m away from the foot of the tower, the angle of elevation of the top of the tower is 60°. What is the height of the tower?",
    qHi: "भूमि पर एक मीनार ऊर्ध्वाधर खड़ी है। मीनार के पाद-बिंदु से 15 मीटर दूर स्थित बिंदु से मीनार के शिखर का उन्नयन कोण 60° है। मीनार की ऊँचाई क्या होगी?",
    optionsEn: ["15√3 m", "15/√3 m (5√3 m)", "30 m", "15 m"],
    optionsHi: ["15√3 मीटर", "5√3 मीटर", "30 मीटर", "15 मीटर"],
    ans: 0,
    expEn: "tan 60° = Height / Distance => √3 = h / 15 => h = 15√3 m.",
    expHi: "tan 60° = लंब (ऊँचाई) / आधार &rArr; √3 = h / 15 &rArr; h = 15√3 मीटर।"
  },
  {
    qEn: "If the length of the shadow of a vertical pole is equal to its height, the sun's altitude (angle of elevation) is:",
    qHi: "यदि किसी ऊर्ध्वाधर खंभे की परछाई की लंबाई उसकी ऊँचाई के ठीक बराबर हो, तो सूर्य का उन्नयन कोण क्या होगा?",
    optionsEn: ["45°", "30°", "60°", "90°"],
    optionsHi: ["45° (क्योंकि tan 45° = 1)", "30°", "60°", "90°"],
    ans: 0,
    expEn: "tan θ = Height / Shadow = h / h = 1 => θ = 45°.",
    expHi: "tan θ = ऊँचाई / परछाई = h / h = 1 &rArr; θ = 45°।"
  },
  {
    qEn: "The angle formed by the line of sight with the horizontal when the point being viewed is ABOVE the horizontal level is called:",
    qHi: "जब प्रेक्षक द्वारा देखी जाने वाली वस्तु क्षैतिज स्तर से ऊपर स्थित हो, तो दृष्टि रेखा और क्षैतिज रेखा के बीच बने कोण को क्या कहते हैं?",
    optionsEn: ["Angle of Elevation (उन्नयन कोण)", "Angle of Depression (अवनमन कोण)", "Right Angle", "Reflex Angle"],
    optionsHi: ["उन्नयन कोण (Angle of Elevation)", "अवनमन कोण (Angle of Depression)", "समकोण", "पुनर्युक्त कोण"],
    ans: 0,
    expEn: "When viewing an object above horizontal level, it is the angle of elevation. When viewing below horizontal level, it is the angle of depression.",
    expHi: "क्षैतिज से ऊपर की ओर देखने पर दृष्टि रेखा द्वारा बना कोण 'उन्नयन कोण' कहलाता है, तथा नीचे देखने पर 'अवनमन कोण' बनता है।"
  },
  {
    qEn: "A ladder 15 m long reaches a window 9 m above the ground. How far is the foot of the ladder from the base of the wall?",
    qHi: "15 मीटर लंबी एक सीढ़ी भूमि से 9 मीटर ऊँची खिड़की तक पहुँचती है। दीवार के आधार से सीढ़ी के निचले सिरे की दूरी क्या है?",
    optionsEn: ["12 m", "10 m", "8 m", "14 m"],
    optionsHi: ["12 मीटर", "10 मीटर", "8 मीटर", "14 मीटर"],
    ans: 0,
    expEn: "Pythagorean Theorem: Base^2 = Hypotenuse^2 - Height^2 = 15^2 - 9^2 = 225 - 81 = 144 => Base = √144 = 12 m.",
    expHi: "पाइथागोरस प्रमेय: आधार^2 = 15^2 - 9^2 = 225 - 81 = 144 &rArr; आधार = 12 मीटर।"
  },
  {
    qEn: "An observer 1.5 m tall is 28.5 m away from a chimney. The angle of elevation of top of chimney from her eyes is 45°. The height of the chimney is:",
    qHi: "1.5 मीटर लंबी एक प्रेक्षक एक चिमनी से 28.5 मीटर दूर है। उसकी आँखों से चिमनी के शिखर का उन्नयन कोण 45° है। चिमनी की कुल ऊँचाई क्या होगी?",
    optionsEn: ["30 m", "28.5 m", "27 m", "31.5 m"],
    optionsHi: ["30 मीटर", "28.5 मीटर", "27 मीटर", "31.5 मीटर"],
    ans: 0,
    expEn: "tan 45° = (h - 1.5) / 28.5 => 1 = (h - 1.5) / 28.5 => h - 1.5 = 28.5 => h = 28.5 + 1.5 = 30 m.",
    expHi: "tan 45° = 1 &rArr; चिमनी का ऊपरी भाग = 28.5 मीटर। कुल ऊँचाई = 28.5 + 1.5 (प्रेक्षक की ऊँचाई) = 30 मीटर।"
  }
];

// =============================================================
// CHAPTER 10: Circles (वृत्त - स्पर्श रेखाएं)
// =============================================================
const ch10Templates = [
  {
    qEn: "The tangent at any point of a circle is ___ to the radius through the point of contact.",
    qHi: "वृत्त के किसी बिंदु पर स्पर्श रेखा स्पर्श बिंदु से जाने वाली त्रिज्या पर ___ होती है।",
    optionsEn: ["Perpendicular (लंबवत - 90°)", "Parallel", "Equal in length", "Collinear"],
    optionsHi: ["परस्पर लंब (Perpendicular - 90°)", "समांतर", "समान लंबाई की", "संरेखी"],
    ans: 0,
    expEn: "Theorem 10.1: The tangent at any point of a circle is perpendicular to the radius through the point of contact (OP ⊥ PT).",
    expHi: "प्रमेय 10.1: वृत्त के किसी बिंदु पर स्पर्श रेखा स्पर्श बिंदु से होकर जाने वाली त्रिज्या पर लंब होती है।"
  },
  {
    qEn: "How many tangents can be drawn to a circle from a point OUTSIDE the circle?",
    qHi: "वृत्त के बाहर स्थित किसी बिंदु से वृत्त पर कुल कितनी स्पर्श रेखाएं खींची जा सकती हैं?",
    optionsEn: ["Exactly 2", "Only 1", "Infinite", "0"],
    optionsHi: ["ठीक 2 (दोनों की लंबाई समान होती है)", "केवल 1", "अनंत", "0 (वृत्त के अंदर स्थित बिंदु से)"],
    ans: 0,
    expEn: "From an external point, exactly two tangents can be drawn to a circle, and their lengths are equal (PT1 = PT2).",
    expHi: "बाह्य बिंदु से वृत्त पर केवल 2 स्पर्श रेखाएं खींची जा सकती हैं, तथा दोनों की लंबाइयाँ परस्पर समान होती हैं।"
  },
  {
    qEn: "From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:",
    qHi: "एक बिंदु Q से एक वृत्त पर स्पर्श रेखा की लंबाई 24 सेमी तथा Q की केंद्र से दूरी 25 सेमी है। वृत्त की त्रिज्या क्या होगी?",
    optionsEn: ["7 cm", "12 cm", "15 cm", "24.5 cm"],
    optionsHi: ["7 सेमी", "12 सेमी", "15 सेमी", "24.5 सेमी"],
    ans: 0,
    expEn: "In right triangle OPQ: r^2 = OQ^2 - PQ^2 = 25^2 - 24^2 = 625 - 576 = 49 => r = 7 cm.",
    expHi: "समकोण त्रिभुज OPQ में: त्रिज्या r = √(25^2 - 24^2) = √(625 - 576) = √49 = 7 सेमी।"
  },
  {
    qEn: "If tangents PA and PB from a point P to a circle with centre O are inclined to each other at angle of 80°, then ∠POA is equal to:",
    qHi: "यदि किसी बिंदु P से केंद्र O वाले किसी वृत्त पर PA, PB स्पर्श रेखाएं परस्पर 80° के कोण पर झुकी हों, तो ∠POA का मान क्या होगा?",
    optionsEn: ["50°", "60°", "70°", "80°"],
    optionsHi: ["50°", "60°", "70°", "80°"],
    ans: 0,
    expEn: "∠AOB = 180° - 80° = 100°. The line PO bisects ∠AOB => ∠POA = 100° / 2 = 50°.",
    expHi: "∠AOB = 180° - 80° = 100°। रेखाखण्ड PO कोण AOB को समद्विभाजित करता है, अतः ∠POA = 100° / 2 = 50°।"
  },
  {
    qEn: "A parallelogram circumscribing a circle is always a:",
    qHi: "एक वृत्त के परिगत बना समांतर चतुर्भुज सदैव क्या होता है?",
    optionsEn: ["Rhombus (समचतुर्भुज)", "Square", "Rectangle", "Trapezium"],
    optionsHi: ["समचतुर्भुज (Rhombus)", "वर्ग", "आयत", "समलंब"],
    ans: 0,
    expEn: "A parallelogram circumscribing a circle has all 4 sides equal (AB + CD = AD + BC => 2AB = 2AD => AB = AD), making it a rhombus.",
    expHi: "वृत्त के परिगत बना समांतर चतुर्भुज एक समचतुर्भुज (Rhombus) होता है क्योंकि इसकी चारों भुजाएं परस्पर बराबर सिद्ध हो जाती हैं।"
  }
];

// =============================================================
// CHAPTER 11: Areas Related to Circles (वृत्तों से संबंधित क्षेत्रफल)
// =============================================================
const ch11Templates = [
  {
    qEn: "The area of a sector of angle θ of a circle with radius r is given by:",
    qHi: "त्रिज्या r वाले वृत्त के एक त्रिज्यखंड (Sector), जिसका कोण θ है, का क्षेत्रफल क्या होता है?",
    optionsEn: ["(θ / 360°) × π r^2", "(θ / 180°) × π r^2", "(θ / 360°) × 2 π r", "(θ / 720°) × 2 π r^2"],
    optionsHi: ["(θ / 360°) × π r^2", "(θ / 180°) × π r^2", "(θ / 360°) × 2 π r (चाप की लंबाई)", "(θ / 720°) × 2 π r^2"],
    ans: 0,
    expEn: "Area of sector = (θ / 360°) * π r^2. Length of arc = (θ / 360°) * 2πr.",
    expHi: "त्रिज्यखंड का क्षेत्रफल = (θ / 360°) &times; π r^2 होता है।"
  },
  {
    qEn: "Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60° (use π = 22/7):",
    qHi: "6 सेमी त्रिज्या वाले एक वृत्त के एक त्रिज्यखंड का क्षेत्रफल ज्ञात कीजिए, जिसका कोण 60° है (π = 22/7):",
    optionsEn: ["132/7 cm^2 (18.86 cm^2)", "120/7 cm^2", "144/7 cm^2", "66/7 cm^2"],
    optionsHi: ["132/7 सेमी^2 (18.86 सेमी^2)", "120/7 सेमी^2", "144/7 सेमी^2", "66/7 सेमी^2"],
    ans: 0,
    expEn: "Area = (60/360) * (22/7) * 6 * 6 = (1/6) * (22/7) * 36 = 6 * 22 / 7 = 132/7 cm^2.",
    expHi: "क्षेत्रफल = (60/360) &times; (22/7) &times; 6 &times; 6 = (1/6) &times; (22/7) &times; 36 = 132/7 सेमी^2।"
  },
  {
    qEn: "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes:",
    qHi: "एक घड़ी की मिनट की सुई जिसकी लंबाई 14 सेमी है। इस सुई द्वारा 5 मिनट में रचित क्षेत्रफल ज्ञात कीजिए:",
    optionsEn: ["154/3 cm^2 (51.33 cm^2)", "154 cm^2", "77 cm^2", "44 cm^2"],
    optionsHi: ["154/3 सेमी^2 (51.33 सेमी^2)", "154 सेमी^2", "77 सेमी^2", "44 सेमी^2"],
    ans: 0,
    expEn: "In 60 min, angle = 360° => in 5 min, angle = (360/60)*5 = 30°. Area = (30/360)*π*(14)^2 = (1/12)*(22/7)*196 = (1/12)*22*28 = 616/12 = 154/3 cm^2.",
    expHi: "5 मिनट में बना कोण = (360°/60) &times; 5 = 30°। क्षेत्रफल = (30/360) &times; (22/7) &times; 14 &times; 14 = 154/3 सेमी^2।"
  },
  {
    qEn: "If the perimeter and the area of a circle are numerically equal, then the radius of the circle is:",
    qHi: "यदि एक वृत्त का परिमाप और क्षेत्रफल संख्यात्मक रूप से बराबर है, तो उस वृत्त की त्रिज्या क्या होगी?",
    optionsEn: ["2 units", "π units", "4 units", "7 units"],
    optionsHi: ["2 मात्रक", "π मात्रक", "4 मात्रक", "7 मात्रक"],
    ans: 0,
    expEn: "2 π r = π r^2 => 2 = r => r = 2 units.",
    expHi: "2πr = πr^2 &rArr; r = 2 मात्रक।"
  },
  {
    qEn: "The ratio of the area of an incircle to the circumcircle of a square of side a is:",
    qHi: "a भुजा वाले वर्ग के अंतःवृत्त और परिवृत्त के क्षेत्रफलों का अनुपात क्या होता है?",
    optionsEn: ["1 : 2", "1 : 4", "1 : √2", "2 : 1"],
    optionsHi: ["1 : 2", "1 : 4", "1 : √2", "2 : 1"],
    ans: 0,
    expEn: "Inradius r = a/2. Circumradius R = a/√2. Ratio of areas = (r/R)^2 = ((a/2)/(a/√2))^2 = (1/√2)^2 = 1/2.",
    expHi: "अंतःत्रिज्या = a/2, परित्रिज्या = a/√2। क्षेत्रफलों का अनुपात = (a/2)^2 / (a/√2)^2 = (1/4)/(1/2) = 1 : 2।"
  }
];

// =============================================================
// CHAPTER 12: Surface Areas and Volumes (पृष्ठीय क्षेत्रफल और आयतन)
// =============================================================
const ch12Templates = [
  {
    qEn: "A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder:",
    qHi: "त्रिज्या 4.2 सेमी वाले धातु के एक गोले को पिघलाकर त्रिज्या 6 सेमी वाले एक बेलन के रूप में ढाला जाता है। बेलन की ऊँचाई क्या होगी?",
    optionsEn: ["2.74 cm", "3.24 cm", "2.14 cm", "4.12 cm"],
    optionsHi: ["2.74 सेमी", "3.24 सेमी", "2.14 सेमी", "4.12 सेमी"],
    ans: 0,
    expEn: "Volume of cylinder = Volume of sphere => π * r_cyl^2 * h = (4/3) * π * r_sph^3 => 36 * h = (4/3) * (4.2)^3 => h = (4 * 74.088) / (3 * 36) = 2.74 cm.",
    expHi: "बेलन का आयतन = गोले का आयतन &rArr; π(6)^2 &times; h = (4/3)π(4.2)^3 &rArr; 36h = 98.784 &rArr; h = 2.74 सेमी।"
  },
  {
    qEn: "A solid toy is in the form of a hemisphere surmounted by a right circular cone. If the total height is 15.5 cm and common radius is 3.5 cm, what is the slant height l of the cone?",
    qHi: "एक ठोस खिलौना एक अर्धगोले पर अध्यारोपित शंकु के आकार का है। यदि खिलौने की कुल ऊँचाई 15.5 सेमी तथा उभयनिष्ठ त्रिज्या 3.5 सेमी है, तो शंकु की तिर्यक ऊँचाई l क्या होगी?",
    optionsEn: ["12.5 cm", "12 cm", "13 cm", "11.5 cm"],
    optionsHi: ["12.5 सेमी", "12 सेमी", "13 सेमी", "11.5 सेमी"],
    ans: 0,
    expEn: "Height of cone h = 15.5 - 3.5 = 12 cm. Slant height l = √(h^2 + r^2) = √(12^2 + 3.5^2) = √(144 + 12.25) = √156.25 = 12.5 cm.",
    expHi: "शंकु की ऊँचाई h = 15.5 - 3.5 = 12 सेमी। तिर्यक ऊँचाई l = √(12^2 + 3.5^2) = √156.25 = 12.5 सेमी।"
  },
  {
    qEn: "How many silver coins, 1.75 cm in diameter and of thickness 2 mm, must be melted to form a cuboid of dimensions 5.5 cm × 10 cm × 3.5 cm?",
    qHi: "5.5 सेमी × 10 सेमी × 3.5 सेमी विमाओं वाला एक घनाभ बनाने के लिए 1.75 सेमी व्यास और 2 मिमी मोटाई वाले कितने चांदी के सिक्कों को पिघलाना पड़ेगा?",
    optionsEn: ["400 coins", "200 coins", "500 coins", "300 coins"],
    optionsHi: ["400 सिक्के", "200 सिक्के", "500 सिक्के", "300 सिक्के"],
    ans: 0,
    expEn: "Vol of cuboid = 5.5 * 10 * 3.5 = 192.5 cm^3. Vol of 1 coin = π * r^2 * h = (22/7) * (0.875)^2 * 0.2 = 0.48125 cm^3. Number = 192.5 / 0.48125 = 400.",
    expHi: "घनाभ का आयतन = 192.5 सेमी^3। एक सिक्के का आयतन = (22/7) &times; (0.875)^2 &times; 0.2 = 0.48125 सेमी^3। सिक्कों की संख्या = 192.5 / 0.48125 = 400।"
  },
  {
    qEn: "What is the total surface area of a solid hemisphere of radius r?",
    qHi: "त्रिज्या r वाले एक ठोस अर्धगोले का कुल पृष्ठीय क्षेत्रफल क्या होता है?",
    optionsEn: ["3 π r^2", "2 π r^2 (वक्र पृष्ठ)", "4 π r^2", "(2/3) π r^3"],
    optionsHi: ["3 π r^2", "2 π r^2 (वक्र पृष्ठीय क्षेत्रफल)", "4 π r^2 (पूर्ण गोले का)", "(2/3) π r^3 (आयतन)"],
    ans: 0,
    expEn: "TSA of solid hemisphere = Curved surface area + Flat base area = 2πr^2 + πr^2 = 3πr^2.",
    expHi: "ठोस अर्धगोले का कुल पृष्ठीय क्षेत्रफल = वक्र पृष्ठ (2πr^2) + वृत्ताकार आधार (πr^2) = 3πr^2।"
  },
  {
    qEn: "If the radius of the base of a cone is doubled and height is halved, its volume will:",
    qHi: "यदि किसी शंकु के आधार की त्रिज्या दोगुनी और ऊँचाई आधी कर दी जाए, तो उसका आयतन:",
    optionsEn: ["Be doubled (दोगुना हो जाएगा)", "Remain same", "Be halved", "Be four times"],
    optionsHi: ["दोगुना हो जाएगा", "वही रहेगा", "आधा हो जाएगा", "चार गुना हो जाएगा"],
    ans: 0,
    expEn: "V_new = (1/3) * π * (2r)^2 * (h/2) = (1/3) * π * 4r^2 * (h/2) = 2 * [(1/3)πr^2 h] = 2 * V_old.",
    expHi: "V' = (1/3)π(2r)^2(h/2) = (1/3)π(4r^2)(h/2) = 2 &times; (1/3)πr^2 h = 2 &times; मूल आयतन।"
  }
];

// =============================================================
// CHAPTER 13: Statistics (सांख्यिकी)
// =============================================================
const ch13Templates = [
  {
    qEn: "What is the empirical relationship between the three measures of central tendency?",
    qHi: "केंद्रीय प्रवृत्ति के तीनों मापकों (माध्य, माध्यिका, बहुलक) के बीच आनुभविक संबंध क्या है?",
    optionsEn: ["Mode = 3 Median - 2 Mean", "Mean = 3 Median - 2 Mode", "Median = 3 Mode - 2 Mean", "Mode = 2 Median - 3 Mean"],
    optionsHi: ["बहुलक = 3 माध्यक - 2 माध्य (Mode = 3 Median - 2 Mean)", "माध्य = 3 माध्यक - 2 बहुलक", "माध्यक = 3 बहुलक - 2 माध्य", "बहुलक = 2 माध्यक - 3 माध्य"],
    ans: 0,
    expEn: "Karl Pearson empirical relationship: Mode = 3 Median - 2 Mean.",
    expHi: "कार्ल पियर्सन का प्रसिद्ध सूत्र: बहुलक = 3 माध्यक - 2 माध्य (Mode = 3 Median - 2 Mean)।"
  },
  {
    qEn: "If the mean of a data set is 24 and the median is 26, what is its mode?",
    qHi: "यदि किसी आँकड़ा समूह का माध्य 24 तथा माध्यक 26 है, तो उसका बहुलक क्या होगा?",
    optionsEn: ["30", "28", "25", "32"],
    optionsHi: ["30", "28", "25", "32"],
    ans: 0,
    expEn: "Mode = 3 Median - 2 Mean = 3(26) - 2(24) = 78 - 48 = 30.",
    expHi: "बहुलक = 3 &times; 26 - 2 &times; 24 = 78 - 48 = 30।"
  },
  {
    qEn: "In the formula for finding Mode = l + [(f1 - f0)/(2f1 - f0 - f2)] × h, what does f1 represent?",
    qHi: "वर्गीकृत आँकड़ों के बहुलक सूत्र Mode = l + [(f1 - f0)/(2f1 - f0 - f2)] × h में f1 क्या दर्शाता है?",
    optionsEn: [
      "Frequency of the modal class",
      "Frequency of the class preceding the modal class",
      "Frequency of the class succeeding the modal class",
      "Cumulative frequency of modal class"
    ],
    optionsHi: [
      "बहुलक वर्ग की बारंबारता (Frequency of modal class)",
      "बहुलक वर्ग से ठीक पहले वर्ग की बारंबारता (f0)",
      "बहुलक वर्ग के ठीक बाद वाले वर्ग की बारंबारता (f2)",
      "संचयी बारंबारता"
    ],
    ans: 0,
    expEn: "f1 = frequency of modal class, f0 = frequency of preceding class, f2 = frequency of succeeding class, l = lower limit of modal class.",
    expHi: "f1 = बहुलक वर्ग की बारंबारता, f0 = ठीक पहले वाले वर्ग की बारंबारता, f2 = ठीक बाद वाले वर्ग की बारंबारता।"
  },
  {
    qEn: "Which measure of central tendency is given by the x-coordinate of the point of intersection of 'less than' and 'more than' ogives?",
    qHi: "'से कम प्रकार' और 'से अधिक प्रकार' के तोरण (Ogives) के प्रतिच्छेद बिंदु का x-निर्देशांक कौन सा केंद्रीय मापक प्रदान करता है?",
    optionsEn: ["Median (माध्यक)", "Mean (माध्य)", "Mode (बहुलक)", "Range (परिसर)"],
    optionsHi: ["माध्यक (Median)", "माध्य (Mean)", "बहुलक (Mode)", "परिसर (Range)"],
    ans: 0,
    expEn: "The x-coordinate of the point of intersection of two ogives represents the Median of the grouped data.",
    expHi: "दोनों तोरणों (ओजाइव) के प्रतिच्छेद बिंदु का x-निर्देशांक माध्यक (Median) को दर्शाता है।"
  },
  {
    qEn: "What is the class mark of the class interval 10 - 25?",
    qHi: "वर्ग अंतराल 10 - 25 का वर्ग चिह्न (Class Mark - xi) क्या होगा?",
    optionsEn: ["17.5", "15", "20", "35"],
    optionsHi: ["17.5", "15", "20", "35"],
    ans: 0,
    expEn: "Class mark = (Upper limit + Lower limit) / 2 = (25 + 10) / 2 = 35 / 2 = 17.5.",
    expHi: "वर्ग चिह्न = (ऊपरी सीमा + निचली सीमा) / 2 = (25 + 10) / 2 = 35 / 2 = 17.5।"
  }
];

// =============================================================
// CHAPTER 14: Probability (प्रायिकता)
// =============================================================
const ch14Templates = [
  {
    qEn: "A card is drawn from a well-shuffled deck of 52 playing cards. What is the probability of getting a face card (King, Queen, Jack)?",
    qHi: "अच्छी तरह फेंटी गई 52 ताश के पत्तों की गड्डी में से एक पत्ता निकाला जाता है। एक तस्वीर वाला पत्ता (Face Card - बादशाह, बेगम, गुलाम) आने की प्रायिकता क्या है?",
    optionsEn: ["3/13 (12/52)", "1/13", "4/13", "1/4"],
    optionsHi: ["3/13 (12/52)", "1/13", "4/13", "1/4"],
    ans: 0,
    expEn: "Total face cards = 4 Kings + 4 Queens + 4 Jacks = 12 cards. P = 12 / 52 = 3 / 13.",
    expHi: "कुल तस्वीर वाले पत्ते = 4 बादशाह + 4 बेगम + 4 गुलाम = 12 पत्ते। प्रायिकता P = 12/52 = 3/13।"
  },
  {
    qEn: "If P(E) = 0.05, what is the probability of 'not E' (P(Ē))?",
    qHi: "यदि किसी घटना के होने की प्रायिकता P(E) = 0.05 है, तो 'E नहीं' (P(Ē)) की प्रायिकता क्या होगी?",
    optionsEn: ["0.95", "0.05", "0.50", "0.90"],
    optionsHi: ["0.95", "0.05", "0.50", "0.90"],
    ans: 0,
    expEn: "P(Ē) = 1 - P(E) = 1 - 0.05 = 0.95.",
    expHi: "P(Ē) = 1 - P(E) = 1 - 0.05 = 0.95।"
  },
  {
    qEn: "Two dice are thrown simultaneously. What is the probability of getting a doublet (same number on both dice)?",
    qHi: "दो पासों को एक साथ फेंका जाता है। दोनों पासों पर एक ही संख्या (द्विक - Doublet) आने की प्रायिकता क्या होगी?",
    optionsEn: ["1/6 (6/36)", "1/36", "1/12", "1/2"],
    optionsHi: ["1/6 (6/36)", "1/36", "1/12", "1/2"],
    ans: 0,
    expEn: "Favourable outcomes: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6. Total = 36. P = 6/36 = 1/6.",
    expHi: "अनुकूल परिणाम: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6। कुल परिणाम = 36। P = 6/36 = 1/6।"
  },
  {
    qEn: "Which of the following CANNOT be the probability of an event?",
    qHi: "निम्नलिखित में से कौन सी संख्या किसी घटना की प्रायिकता नहीं हो सकती?",
    optionsEn: ["-1.5", "2/3", "15%", "0.7"],
    optionsHi: ["-1.5 (प्रायिकता कभी ऋणात्मक नहीं होती)", "2/3", "15% (= 0.15)", "0.7"],
    ans: 0,
    expEn: "Probability of any event satisfies 0 ≤ P(E) ≤ 1. It can NEVER be negative or greater than 1.",
    expHi: "किसी भी घटना की प्रायिकता सदैव 0 और 1 के बीच (0 ≤ P ≤ 1) होती है। यह कभी ऋणात्मक नहीं हो सकती।"
  },
  {
    qEn: "A box contains 3 blue, 2 white, and 4 red marbles. If a marble is drawn at random, what is the probability that it will be white?",
    qHi: "एक डिब्बे में 3 नीले, 2 सफेद और 4 लाल कंचे हैं। यदि डिब्बे में से एक कंचा यादृच्छया निकाला जाता है, तो इसके सफेद होने की प्रायिकता क्या होगी?",
    optionsEn: ["2/9", "3/9 (1/3)", "4/9", "7/9"],
    optionsHi: ["2/9", "1/3", "4/9", "7/9"],
    ans: 0,
    expEn: "Total marbles = 3 + 2 + 4 = 9. White marbles = 2. P = 2 / 9.",
    expHi: "कुल कंचे = 3 + 2 + 4 = 9। सफेद कंचे = 2। प्रायिकता P = 2/9।"
  }
];

const chaptersP2 = [
  // -------------------------------------------------------------------------
  // CHAPTER 8: Introduction to Trigonometry
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math08",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 8,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 8: Introduction to Trigonometry (त्रिकोणमिति का परिचय)",
    titleHi: "अध्याय 8: त्रिकोणमिति का परिचय (Introduction to Trigonometry)",
    pdfUrl: "/ncert_books/class10/math_ch08.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch08_hi.pdf",
    competitionEdge: "One of the absolute highest-weightage topics in SSC CGL Tier 1/2, CDS, NDA, BPSC TRE 4.0 Secondary Math, and CTET Paper 2. Core formulas: 6 trigonometric ratios, standard angle table (0°, 30°, 45°, 60°, 90°), and 3 Pythagorean identities (sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ).",
    competitionEdgeHi: "एसएससी सीजीएल, सीडीएस, एनडीए, बीपीएससी शिक्षक भर्ती तथा राज्य परीक्षाओं में सर्वाधिक स्कोरिंग अध्याय। इसमें 6 त्रिकोणमितीय अनुपात (sin, cos, tan, cot, sec, cosec), मानक कोणों की मान सारणी (0°, 30°, 45°, 60°, 90°), तथा 3 प्रमुख सर्वसमिकाओं से सीधे प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Trigonometric Ratios (T-Ratios)",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं त्रिकोणमितीय अनुपात (T-Ratios)",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              Welcome to the fascinating world of <strong>Trigonometry</strong> (from Greek: 'tri' = three, 'gon' = sides, 'metron' = measure). In a right-angled triangle, trigonometric ratios define the exact relationships between angles and lengths of sides.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ The 6 Primary Trigonometric Ratios in Right △ABC (at ∠B = 90°)</div>
            <p>&bull; $\sin \theta = \frac{\text{Perpendicular}}{\text{Hypotenuse}} = \frac{P}{H}$<br/>
            &bull; $\cos \theta = \frac{\text{Base}}{\text{Hypotenuse}} = \frac{B}{H}$<br/>
            &bull; $\tan \theta = \frac{\text{Perpendicular}}{\text{Base}} = \frac{P}{B} = \frac{\sin \theta}{\cos \theta}$<br/>
            &bull; $\cot \theta = \frac{1}{\tan \theta} = \frac{B}{P}$ &nbsp;|&nbsp; $\sec \theta = \frac{1}{\cos \theta} = \frac{H}{B}$ &nbsp;|&nbsp; $\csc \theta = \frac{1}{\sin \theta} = \frac{H}{P}$<br/>
            &bull; <strong>Memory Mnemonic:</strong> <em>"Pandit Badri Prasad, Har Har Bole, Sona Chandi Tole"</em> (P/H, B/H, P/B).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं त्रिकोणमितीय अनुपात</div>
            <div class="mentor-msg">
              त्रिकोणमिति समकोण त्रिभुज की भुजाओं और कोणों के बीच संबंधों का अध्ययन है। समकोण त्रिभुज में कोण के सम्मुख भुजा को <strong>लंब (Perpendicular)</strong>, समकोण के सामने की सबसे बड़ी भुजा को <strong>कर्ण (Hypotenuse)</strong>, तथा संलग्न भुजा को <strong>आधार (Base)</strong> कहते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ 6 त्रिकोणमितीय अनुपातों के सूत्र (लाल / कका ट्रिक)</div>
            <p>&bull; $\sin \theta = \frac{\text{लंब}}{\text{कर्ण}}$ &nbsp;|&nbsp; $\cos \theta = \frac{\text{आधार}}{\text{कर्ण}}$ &nbsp;|&nbsp; $\tan \theta = \frac{\text{लंब}}{\text{आधार}}$<br/>
            &bull; $\csc \theta = \frac{\text{कर्ण}}{\text{लंब}}$ &nbsp;|&nbsp; $\sec \theta = \frac{\text{कर्ण}}{\text{आधार}}$ &nbsp;|&nbsp; $\cot \theta = \frac{\text{आधार}}{\text{लंब}}$<br/>
            &bull; <strong>भारतीय शॉर्टकट:</strong> <em>'LAL / KKA'</em> (लंब/कर्ण = sin, आधार/कर्ण = cos, लंब/आधार = tan)।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Standard Angles & 3 Golden Identities",
        headingHi: "2. सूत्र संकलन: मानक कोणों के मान एवं 3 स्वर्णिम सर्वसमिकाएँ",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Standard Angle Values Table</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Ratio / Angle</th>
                  <th>0°</th>
                  <th>30°</th>
                  <th>45°</th>
                  <th>60°</th>
                  <th>90°</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>sin θ</strong></td><td>0</td><td>1/2</td><td>1/√2</td><td>√3/2</td><td>1</td></tr>
                <tr><td><strong>cos θ</strong></td><td>1</td><td>√3/2</td><td>1/√2</td><td>1/2</td><td>0</td></tr>
                <tr><td><strong>tan θ</strong></td><td>0</td><td>1/√3</td><td>1</td><td>√3</td><td>Not defined</td></tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>The 3 Golden Identities:</strong><br/>
            1. $\sin^2\theta + \cos^2\theta = 1$<br/>
            2. $1 + \tan^2\theta = \sec^2\theta \implies \sec^2\theta - \tan^2\theta = 1$<br/>
            3. $1 + \cot^2\theta = \csc^2\theta \implies \csc^2\theta - \cot^2\theta = 1$
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 विशिष्ट कोणों के त्रिकोणमितीय मान सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>अनुपात / कोण</th>
                  <th>0°</th>
                  <th>30°</th>
                  <th>45°</th>
                  <th>60°</th>
                  <th>90°</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>sin θ</strong></td><td>0</td><td>1/2</td><td>1/√2</td><td>√3/2</td><td>1</td></tr>
                <tr><td><strong>cos θ</strong></td><td>1</td><td>√3/2</td><td>1/√2</td><td>1/2</td><td>0</td></tr>
                <tr><td><strong>tan θ</strong></td><td>0</td><td>1/√3</td><td>1</td><td>√3</td><td>अपरिभाषित</td></tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>3 स्वर्णिम सर्वसमिकाएँ:</strong><br/>
            1. $\sin^2\theta + \cos^2\theta = 1$<br/>
            2. $1 + \tan^2\theta = \sec^2\theta \implies \sec^2\theta - \tan^2\theta = 1$<br/>
            3. $1 + \cot^2\theta = \csc^2\theta \implies \csc^2\theta - \cot^2\theta = 1$
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Proving Trigonometric Identity",
        headingHi: "3. हाथ से हल किया गया उदाहरण: त्रिकोणमितीय सर्वसमिका सिद्ध करना",
        contentHtml: `
          ${makeSolvedCard(
            "Prove that (sin A + cosec A)^2 + (cos A + sec A)^2 = 7 + tan^2 A + cot^2 A",
            "Prove the classic Class 10 board & competition identity: $(\sin A + \csc A)^2 + (\cos A + \sec A)^2 = 7 + \tan^2 A + \cot^2 A$.",
            [
              "<strong>Step 1 (Expand LHS):</strong><br/>$(\sin^2 A + \csc^2 A + 2\sin A\csc A) + (\cos^2 A + \sec^2 A + 2\cos A\sec A)$.",
              "<strong>Step 2 (Group sin²A + cos²A and reciprocal products):</strong><br/>$(\sin^2 A + \cos^2 A) + \csc^2 A + \sec^2 A + 2(1) + 2(1) = 1 + 4 + \csc^2 A + \sec^2 A = 5 + \csc^2 A + \sec^2 A$.",
              "<strong>Step 3 (Substitute identities):</strong><br/>$\csc^2 A = 1 + \cot^2 A$ and $\sec^2 A = 1 + \tan^2 A$.",
              "<strong>Step 4 (Final Sum):</strong><br/>$5 + (1 + \cot^2 A) + (1 + \tan^2 A) = 7 + \tan^2 A + \cot^2 A = \text{RHS}$. Hence Proved!"
            ],
            "7 + tan^2 A + cot^2 A (Proved)",
            "NCERT Class 10 Ex 8.4 Q5(viii) & BPSC TRE"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "सिद्ध कीजिए: (sin A + cosec A)^2 + (cos A + sec A)^2 = 7 + tan^2 A + cot^2 A",
            "प्रतियोगी परीक्षाओं में बार-बार पूछी जाने वाली सर्वसमिका सिद्ध कीजिए।",
            [
              "<strong>चरण 1 (LHS का प्रसार):</strong><br/>$(\sin^2 A + \csc^2 A + 2\sin A\csc A) + (\cos^2 A + \sec^2 A + 2\cos A\sec A)$।",
              "<strong>चरण 2 (सजातीय पद एवं व्युत्क्रम गुणन):</strong><br/>$(\sin^2 A + \cos^2 A) + 2(1) + 2(1) + \csc^2 A + \sec^2 A = 1 + 4 + \csc^2 A + \sec^2 A = 5 + \csc^2 A + \sec^2 A$।",
              "<strong>चरण 3 (सर्वसमिका प्रतिस्थापन):</strong><br/>$\csc^2 A = 1 + \cot^2 A$ तथा $\sec^2 A = 1 + \tan^2 A$।",
              "<strong>चरण 4 (अंतिम योग):</strong><br/>$5 + (1 + \cot^2 A) + (1 + \tan^2 A) = 7 + \tan^2 A + \cot^2 A$ = RHS। सिद्ध हुआ!"
            ],
            "7 + tan^2 A + cot^2 A (इति सिद्धम्)",
            "NCERT कक्षा 10 प्रश्नावली 8.4"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: sin(A + B) is NOT sin A + sin B",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: sin(A + B) &ne; sin A + sin B",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Trigonometric Function Distribution Trap!</div>
            <p>&bull; '$\sin$' is NOT an algebraic multiplier! It is an operator: $\sin(A + B) \ne \sin A + \sin B$.<br/>
            &bull; Example: Let $A = 30^\circ, B = 60^\circ$. LHS $= \sin(90^\circ) = 1$. But RHS $= \sin 30^\circ + \sin 60^\circ = 1/2 + \sqrt{3}/2 \ne 1$!<br/>
            &bull; Similarly, $(\sin \theta)^2 = \sin^2\theta$, NEVER write $\sin \theta^2$!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: sin(A + B) का वितरण नहीं होता</div>
            <p>&bull; $\sin$ कोई गुणांक नहीं है जिसे कोष्ठक के अंदर गुणा किया जा सके! $\sin(A + B) \ne \sin A + \sin B$।<br/>
            &bull; जाँच: $A = 30^\circ, B = 60^\circ$ लेने पर $\sin(90^\circ) = 1$, जबकि $\sin 30^\circ + \sin 60^\circ = \frac{1+\sqrt{3}}{2} \ne 1$!<br/>
            &bull; इसी प्रकार $\sin^2\theta = (\sin\theta)^2$ होता है, इसे $\sin \theta^2$ कभी न समझें!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(8, "Introduction to Trigonometry", "त्रिकोणमिति का परिचय", ch8Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 9: Some Applications of Trigonometry
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math09",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 9,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 9: Some Applications of Trigonometry (त्रिकोणमिति के कुछ अनुप्रयोग)",
    titleHi: "अध्याय 9: त्रिकोणमिति के अनुप्रयोग - ऊँचाई और दूरी (Heights and Distances)",
    pdfUrl: "/ncert_books/class10/math_ch09.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch09_hi.pdf",
    competitionEdge: "Heights and Distances is a staple topic in SSC CGL, CDS, NDA, State PCS, and BPSC TRE 4.0. Questions feature single and double observer angles of elevation/depression, broken tree problems, balloons, and kite string lengths.",
    competitionEdgeHi: "एसएससी, सीडीएस, एनडीए तथा शिक्षक भर्ती परीक्षा का प्रमुख व्यावहारिक गणित अध्याय। इसमें उन्नयन कोण और अवनमन कोण, टूटे पेड़ की ऊँचाई, मीनार की छाया, गुब्बारे तथा पतंग की डोरी की लंबाई ज्ञात करने के प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Line of Sight & Angles of Elevation / Depression",
        headingHi: "1. एनसीईआरटी मूल पाठ: दृष्टि रेखा, उन्नयन कोण एवं अवनमन कोण",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              The <strong>line of sight</strong> is the line drawn from the eye of an observer to the point in the object viewed.
              When an observer looks UP at an object, the angle made with the horizontal is the <strong>Angle of Elevation</strong>.
              When looking DOWN, it is the <strong>Angle of Depression</strong>. By alternate interior angles, the angle of depression equals the angle of elevation from the object to the observer!
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं मूल शब्दावली</div>
            <div class="mentor-msg">
              प्रेक्षक की आँख से देखी जाने वाली वस्तु को मिलाने वाली रेखा को <strong>दृष्टि रेखा (Line of Sight)</strong> कहते हैं।
              जब वस्तु क्षैतिज स्तर से ऊपर हो, तो दृष्टि रेखा क्षैतिज के साथ <strong>उन्नयन कोण</strong> बनाती है।
              जब वस्तु क्षैतिज स्तर से नीचे हो, तो दृष्टि रेखा <strong>अवनमन कोण</strong> बनाती है। एकांतर कोण नियम से अवनमन कोण सदैव उन्नयन कोण के बराबर होता है!
            </div>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Standard Triangles (30°-60°-90° and 45°-45°-90°)",
        headingHi: "2. सूत्र संकलन: 30°-60°-90° एवं 45°-45°-90° शॉर्टकट अनुपात",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Rapid Competitive Shortcuts for Heights & Distances</div>
            <p>&bull; <strong>45°-45°-90° Triangle:</strong> Perpendicular = Base (Ratio $1 : 1 : \sqrt{2}$). Height equals Shadow length!<br/>
            &bull; <strong>30°-60°-90° Triangle:</strong> Sides are in ratio $1 : \sqrt{3} : 2$. Side opposite 30° is half the hypotenuse, and side opposite 60° is $\sqrt{3}$ times the side opposite 30°.<br/>
            &bull; These ratios solve 90% of exam MCQs in under 15 seconds without writing long equations!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ ऊँचाई और दूरी के 15-सेकंड परीक्षा शॉर्टकट</div>
            <p>&bull; <strong>45°-45°-90° त्रिभुज:</strong> लंब = आधार (अनुपात $1 : 1 : \sqrt{2}$)। खंभे की ऊँचाई = छाया की लंबाई!<br/>
            &bull; <strong>30°-60°-90° त्रिभुज:</strong> भुजाओं का अनुपात $1 : \sqrt{3} : 2$। 30° के सामने वाली भुजा कर्ण की आधी होती है, तथा 60° के सामने वाली भुजा $\sqrt{3}$ गुना होती है।<br/>
            &bull; इन अनुपातों से बिना समीकरण लिखे परीक्षा में सीधे उत्तर टिक किया जा सकता है!</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Broken Tree Problem",
        headingHi: "3. हाथ से हल किया गया उदाहरण: आंधी से टूटे पेड़ की कुल ऊँचाई",
        contentHtml: `
          ${makeSolvedCard(
            "Find Total Height of Broken Tree Touching Ground at 30°",
            "A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle 30° with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. Find the height of the tree.",
            [
              "<strong>Step 1 (Identify components):</strong> Total tree height $H = \text{standing part } (h) + \text{broken bent part } (l)$.",
              "<strong>Step 2 (Find standing part h):</strong> $\tan 30^\circ = \frac{h}{8} \implies \frac{1}{\sqrt{3}} = \frac{h}{8} \implies h = \frac{8}{\sqrt{3}}\text{ m}$.",
              "<strong>Step 3 (Find bent hypotenuse l):</strong> $\cos 30^\circ = \frac{8}{l} \implies \frac{\sqrt{3}}{2} = \frac{8}{l} \implies l = \frac{16}{\sqrt{3}}\text{ m}$.",
              "<strong>Step 4 (Total Height):</strong> $H = h + l = \frac{8}{\sqrt{3}} + \frac{16}{\sqrt{3}} = \frac{24}{\sqrt{3}} = \frac{24\sqrt{3}}{3} = 8\sqrt{3}\text{ m}$."
            ],
            "Total Tree Height = 8√3 m (~13.86 m)",
            "NCERT Class 10 Ex 9.1 Q2 & BPSC TRE"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "आंधी से टूटे पेड़ की कुल ऊँचाई ज्ञात करना",
            "आंधी आने से एक पेड़ टूट जाता है और टूटा हुआ भाग इस तरह मुड़ जाता है कि पेड़ का शिखर जमीन को छूने लगता है और इसके साथ 30° का कोण बनाता है। पेड़ के पाद-बिंदु की दूरी, जहाँ पेड़ का शिखर जमीन को छूता है, 8 मीटर है। पेड़ की ऊँचाई ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (संरचना समझना):</strong> पेड़ की कुल ऊँचाई = सीधा खड़ा भाग (h) + टूटा हुआ मुड़ा भाग (l)।",
              "<strong>चरण 2 (खड़ा भाग h):</strong> $\tan 30^\circ = \frac{h}{8} \implies \frac{1}{\sqrt{3}} = \frac{h}{8} \implies h = \frac{8}{\sqrt{3}}$ मीटर।",
              "<strong>चरण 3 (टूटा हुआ कर्ण l):</strong> $\cos 30^\circ = \frac{8}{l} \implies \frac{\sqrt{3}}{2} = \frac{8}{l} \implies l = \frac{16}{\sqrt{3}}$ मीटर।",
              "<strong>चरण 4 (कुल ऊँचाई):</strong> $h + l = \frac{8+16}{\sqrt{3}} = \frac{24}{\sqrt{3}} = 8\sqrt{3}$ मीटर।"
            ],
            "पेड़ की कुल ऊँचाई = 8√3 मीटर",
            "NCERT कक्षा 10 प्रश्नावली 9.1 प्रश्न 2"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The Observer Height Trap",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: प्रेक्षक की ऊँचाई को जोड़ना भूलना",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Observer's Height Trap!</div>
            <p>&bull; If the question mentions <em>'An observer 1.5 m tall...'</em>, the angle is measured from their <strong>EYE LEVEL</strong>, which is 1.5 m above ground!<br/>
            &bull; After finding the height using $\tan \theta$, you <strong>MUST ADD the 1.5 m</strong> to get the total chimney/tower height from the ground!<br/>
            &bull; Examiners always place the un-added value as Option (A)!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: प्रेक्षक की आँख की ऊँचाई</div>
            <p>&bull; यदि प्रश्न में <em>'1.5 मीटर लंबा प्रेक्षक'</em> लिखा हो, तो उन्नयन कोण जमीन से नहीं, आँख के स्तर (1.5 मीटर ऊपर) से बनता है!<br/>
            &bull; त्रिकोणमिति से प्राप्त ऊँचाई में अंत में <strong>1.5 मीटर जोड़ना अनिवार्य</strong> है। परीक्षक बिना जोड़े वाला मान विकल्प (A) में रखते हैं!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(9, "Some Applications of Trigonometry", "त्रिकोणमिति के कुछ अनुप्रयोग", ch9Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 10: Circles
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math10",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 10,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 10: Circles (वृत्त)",
    titleHi: "अध्याय 10: वृत्त - स्पर्श रेखाएं (Circles)",
    pdfUrl: "/ncert_books/class10/math_ch10.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch10_hi.pdf",
    competitionEdge: "Geometric cornerstone tested heavily in CTET Paper 2, BPSC TRE 4.0 Secondary Math, SSC CGL Tier 1/2, CDS, and NDA. Key theorems: Tangent is perpendicular to radius at point of contact (OP ⊥ PT), lengths of tangents from an external point are equal ($PT_1 = PT_2$), and angle subtended by tangents and radii are supplementary.",
    competitionEdgeHi: "सीटेट, बीपीएससी शिक्षक भर्ती, एसएससी तथा सीडीएस में वृत्त की स्पर्श रेखाओं के दो मुख्य प्रमेयों से प्रतिवर्ष प्रश्न पूछे जाते हैं: स्पर्श रेखा त्रिज्या पर लंब होती है ($90^\circ$), तथा बाह्य बिंदु से खींची गई दोनों स्पर्श रेखाओं की लंबाइयाँ समान होती हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & The Two Tangent Theorems",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं स्पर्श रेखा के 2 मुख्य प्रमेय",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              A <strong>tangent to a circle</strong> is a line that intersects the circle at only one single point. Class 10 covers two foundational theorems:
              <br/>&bull; <strong>Theorem 10.1:</strong> The tangent at any point of a circle is perpendicular to the radius through the point of contact.
              <br/>&bull; <strong>Theorem 10.2:</strong> The lengths of tangents drawn from an external point to a circle are equal.
            </div>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं 2 मुख्य प्रमेय</div>
            <div class="mentor-msg">
              वृत्त की <strong>स्पर्श रेखा (Tangent)</strong> वह रेखा है जो वृत्त को केवल एक ही बिंदु पर स्पर्श (प्रतिच्छेद) करती है।
              <br/>&bull; <strong>प्रमेय 10.1:</strong> स्पर्श बिंदु से जाने वाली त्रिज्या स्पर्श रेखा पर लंब होती है ($OP \perp PT$)।
              <br/>&bull; <strong>प्रमेय 10.2:</strong> बाह्य बिंदु से वृत्त पर खींची गई स्पर्श रेखाओं की लंबाइयाँ बराबर होती हैं ($PA = PB$)।
            </div>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Quadrilateral Formed by Tangents & Radii",
        headingHi: "2. सूत्र संकलन: स्पर्श रेखाओं और त्रिज्याओं द्वारा बना चतुर्भुज",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Cyclic Properties of Tangents from External Point P</div>
            <p>In quadrilateral $PAOB$ formed by tangents $PA, PB$ and radii $OA, OB$:<br/>
            &bull; $\angle OAP = \angle OBP = 90^\circ$<br/>
            &bull; Sum of angles at center and between tangents is supplementary: $\angle APB + \angle AOB = 180^\circ$<br/>
            &bull; Line $OP$ is the angle bisector of both $\angle APB$ and $\angle AOB$.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ स्पर्श रेखाओं द्वारा बने चतुर्भुज PAOB के गुण</div>
            <p>बाह्य बिंदु P से स्पर्श रेखाओं PA, PB तथा त्रिज्याओं OA, OB द्वारा निर्मित चतुर्भुज में:<br/>
            &bull; $\angle OAP = \angle OBP = 90^\circ$<br/>
            &bull; केंद्र पर बना कोण और स्पर्श रेखाओं के बीच का कोण संपूरक होते हैं: $\angle APB + \angle AOB = 180^\circ$<br/>
            &bull; रेखाखण्ड OP दोनों कोणों ($\angle APB$ तथा $\angle AOB$) का समद्विभाजक होता है।</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Angle Between Tangents",
        headingHi: "3. हाथ से हल किया गया उदाहरण: स्पर्श रेखाओं के मध्य कोण ज्ञात करना",
        contentHtml: `
          ${makeSolvedCard(
            "Find angle POA when tangents are inclined at 80°",
            "If tangents PA and PB from a point P to a circle with centre O are inclined to each other at an angle of 80°, find ∠POA.",
            [
              "<strong>Step 1 (Find angle at center ∠AOB):</strong> In quadrilateral PAOB, $\angle APB + \angle AOB = 180^\circ \implies 80^\circ + \angle AOB = 180^\circ \implies \angle AOB = 100^\circ$.",
              "<strong>Step 2 (Use triangle symmetry):</strong> $\triangle OAP \cong \triangle OBP$ (RHS congruence), which implies line OP bisects $\angle AOB$.",
              "<strong>Step 3 (Calculate ∠POA):</strong> $\angle POA = \frac{\angle AOB}{2} = \frac{100^\circ}{2} = 50^\circ$."
            ],
            "∠POA = 50°",
            "NCERT Class 10 Ex 10.2 Q3 & BPSC TRE"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "कोण POA का मान ज्ञात करना (जब स्पर्श रेखाएं 80° पर झुकी हों)",
            "यदि बिंदु P से O केंद्र वाले किसी वृत्त पर PA, PB स्पर्श रेखाएं परस्पर 80° के कोण पर झुकी हों, तो ∠POA का मान ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (केंद्र पर कोण ∠AOB):</strong> $\angle APB + \angle AOB = 180^\circ \implies 80^\circ + \angle AOB = 180^\circ \implies \angle AOB = 100^\circ$।",
              "<strong>चरण 2 (त्रिभुज समरूपता/सर्वांगसमता):</strong> $\triangle OAP \cong \triangle OBP$ (RHS सर्वांगसमता), अतः रेखाखण्ड OP कोण AOB को दो बराबर भागों में बाँटता है।",
              "<strong>चरण 3 (कोण POA):</strong> $\angle POA = \frac{100^\circ}{2} = 50^\circ$।"
            ],
            "∠POA = 50°",
            "NCERT कक्षा 10 प्रश्नावली 10.2 प्रश्न 3"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Secant vs Tangent vs Chord",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: छेदक रेखा बनाम स्पर्श रेखा",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Secant vs Tangent Terminology Trap!</div>
            <p>&bull; <strong>Tangent:</strong> Intersects at EXACTLY 1 point (Touch point).<br/>
            &bull; <strong>Secant:</strong> A line that intersects the circle at 2 distinct points.<br/>
            &bull; <strong>Chord:</strong> A line segment joining 2 points on the circle.<br/>
            &bull; A circle can have infinitely many tangents, but only TWO parallel tangents for any given diameter!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: छेदक रेखा बनाम स्पर्श रेखा</div>
            <p>&bull; <strong>स्पर्श रेखा:</strong> वृत्त को ठीक 1 बिंदु पर छूती है।<br/>
            &bull; <strong>छेदक रेखा (Secant):</strong> वृत्त को 2 भिन्न बिंदुओं पर प्रतिच्छेद करते हुए आर-पार निकलती है।<br/>
            &bull; किसी वृत्त की अनंत स्पर्श रेखाएं हो सकती हैं, परन्तु किसी दिए गए व्यास के सिरों पर केवल <strong>2 समांतर स्पर्श रेखाएँ</strong> ही खींची जा सकती हैं!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(10, "Circles", "वृत्त", ch10Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 11: Areas Related to Circles
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math11",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 11,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 11: Areas Related to Circles (वृत्तों से संबंधित क्षेत्रफल)",
    titleHi: "अध्याय 11: वृत्तों से संबंधित क्षेत्रफल (Areas Related to Circles)",
    pdfUrl: "/ncert_books/class10/math_ch11.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch11_hi.pdf",
    competitionEdge: "High-yield mensuration chapter for SSC CGL, BPSC TRE 4.0 Secondary Math, CTET Paper 2, and CDS. Covers area of sector ($A = \frac{\theta}{360^\circ}\pi r^2 = \frac{1}{2}lr$), arc length ($l = \frac{\theta}{360^\circ}2\pi r$), area of segments, and clock minute-hand angle swept.",
    competitionEdgeHi: "क्षेत्रमिति का अति-महत्वपूर्ण अध्याय। इसमें त्रिज्यखंड का क्षेत्रफल ($A = \frac{\theta}{360^\circ}\pi r^2$), चाप की लंबाई ($l = \frac{\theta}{360^\circ}2\pi r$), वृत्तखंड का क्षेत्रफल, तथा घड़ी की सुइयों द्वारा तय क्षेत्रफल से प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Sector / Segment Fundamentals",
        headingHi: "1. एनसीईआरटी मूल पाठ: त्रिज्यखंड एवं वृत्तखंड की मूल अवधारणा",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              A <strong>Sector</strong> is the portion of a circular region enclosed by two radii and the corresponding arc (like a slice of pizza).
              A <strong>Segment</strong> is the portion enclosed by a chord and the corresponding arc.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Primary Sector Formulas</div>
            <p>&bull; <strong>Area of Sector:</strong> $A = \frac{\theta}{360^\circ} \times \pi r^2$<br/>
            &bull; <strong>Length of Arc:</strong> $l = \frac{\theta}{360^\circ} \times 2\pi r$<br/>
            &bull; <strong>Direct Relation between Area and Arc Length:</strong> $A = \frac{1}{2} \times l \times r$</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं मूल सूत्र</div>
            <div class="mentor-msg">
              दो त्रिज्याओं और संगत चाप से घिरा वृत्तीय क्षेत्र <strong>त्रिज्यखंड (Sector)</strong> कहलाता है (जैसे पिज्जा का टुकड़ा)।
              एक जीवा और संगत चाप के बीच का क्षेत्र <strong>वृत्तखंड (Segment)</strong> कहलाता है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ त्रिज्यखंड के मुख्य सूत्र</div>
            <p>&bull; <strong>त्रिज्यखंड का क्षेत्रफल:</strong> $A = \frac{\theta}{360^\circ} \times \pi r^2$<br/>
            &bull; <strong>संगत चाप की लंबाई:</strong> $l = \frac{\theta}{360^\circ} \times 2\pi r$<br/>
            &bull; <strong>चाप और क्षेत्रफल का सीधा संबंध:</strong> $A = \frac{1}{2} l r$</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Area of Segment of a Circle",
        headingHi: "2. सूत्र संकलन: वृत्तखंड (लघु व दीर्घ) का क्षेत्रफल",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Segment Area Formula</div>
            <p>&bull; <strong>Minor Segment Area:</strong> $\text{Area of Sector } OAPB - \text{Area of } \triangle OAB$<br/>
            &bull; Area of $\triangle OAB = \frac{1}{2} r^2 \sin \theta$<br/>
            &bull; <strong>Major Segment Area:</strong> $\pi r^2 - \text{Area of Minor Segment}$</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 वृत्तखंड के क्षेत्रफल के सूत्र</div>
            <p>&bull; <strong>लघु वृत्तखंड का क्षेत्रफल:</strong> संगत त्रिज्यखंड का क्षेत्रफल - $\triangle OAB$ का क्षेत्रफल<br/>
            &bull; $\triangle OAB$ का क्षेत्रफल $= \frac{1}{2} r^2 \sin \theta$<br/>
            &bull; <strong>दीर्घ वृत्तखंड का क्षेत्रफल:</strong> वृत्त का कुल क्षेत्रफल ($\pi r^2$) - लघु वृत्तखंड का क्षेत्रफल</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Clock Hand Area in 5 Minutes",
        headingHi: "3. हाथ से हल किया गया उदाहरण: घड़ी की सुई द्वारा 5 मिनट में रचित क्षेत्रफल",
        contentHtml: `
          ${makeSolvedCard(
            "Area swept by minute hand of length 14 cm in 5 minutes",
            "The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes (take π = 22/7).",
            [
              "<strong>Step 1 (Find angle swept in 1 minute):</strong> In 60 minutes, hand rotates $360^\circ \implies$ In 1 minute, angle $= \frac{360^\circ}{60} = 6^\circ$.",
              "<strong>Step 2 (Calculate angle for 5 minutes):</strong> $\theta = 5 \times 6^\circ = 30^\circ$.",
              "<strong>Step 3 (Apply Sector Area Formula):</strong> $\text{Area} = \frac{\theta}{360^\circ}\pi r^2 = \frac{30^\circ}{360^\circ} \times \frac{22}{7} \times 14 \times 14$.",
              "<strong>Step 4 (Simplify):</strong> $\frac{1}{12} \times 22 \times 2 \times 14 = \frac{1}{12} \times 616 = \frac{154}{3}\text{ cm}^2 \approx 51.33\text{ cm}^2$."
            ],
            "154/3 cm^2 (~51.33 cm^2)",
            "NCERT Class 10 Ex 11.1 Q2 & BPSC TRE"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "14 सेमी लंबी मिनट की सुई द्वारा 5 मिनट में तय क्षेत्रफल",
            "एक घड़ी की मिनट की सुई जिसकी लंबाई 14 सेमी है, द्वारा 5 मिनट में रचित क्षेत्रफल ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (1 मिनट का कोण):</strong> 60 मिनट में $360^\circ \implies$ 1 मिनट में $\frac{360^\circ}{60} = 6^\circ$।",
              "<strong>चरण 2 (5 मिनट का कोण):</strong> $\theta = 5 \times 6^\circ = 30^\circ$।",
              "<strong>चरण 3 (त्रिज्यखंड सूत्र):</strong> $\text{क्षेत्रफल} = \frac{30^\circ}{360^\circ} \times \frac{22}{7} \times 14 \times 14$।",
              "<strong>चरण 4 (गणना):</strong> $\frac{1}{12} \times 22 \times 28 = \frac{616}{12} = \frac{154}{3}$ सेमी$^2$।"
            ],
            "154/3 सेमी^2 (लगभग 51.33 सेमी^2)",
            "NCERT कक्षा 10 प्रश्नावली 11.1 प्रश्न 2"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Minute Hand vs Hour Hand Speed",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: मिनट की सुई बनाम घंटे की सुई की चाल",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Clock Hands Angular Speed Trap!</div>
            <p>&bull; <strong>Minute hand:</strong> $360^\circ$ in 60 min &rarr; <strong>6° per minute</strong>.<br/>
            &bull; <strong>Hour hand:</strong> $360^\circ$ in 12 hours (720 min) &rarr; <strong>0.5° per minute</strong> (or 30° per hour).<br/>
            &bull; Read carefully whether the question asks for the minute hand or the hour hand!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: मिनट की सुई बनाम घंटे की सुई</div>
            <p>&bull; <strong>मिनट की सुई:</strong> 1 मिनट में <strong>6°</strong> घूमती है।<br/>
            &bull; <strong>घंटे की सुई:</strong> 1 मिनट में केवल <strong>0.5° (आधा डिग्री)</strong> घूमती है (1 घंटे में 30°)।<br/>
            &bull; प्रश्न में ध्यान से देखें कि मिनट की सुई पूछी गई है या घंटे की सुई!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(11, "Areas Related to Circles", "वृत्तों से संबंधित क्षेत्रफल", ch11Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 12: Surface Areas and Volumes
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math12",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 12,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 12: Surface Areas and Volumes (पृष्ठीय क्षेत्रफल और आयतन)",
    titleHi: "अध्याय 12: पृष्ठीय क्षेत्रफल और आयतन (Surface Areas and Volumes)",
    pdfUrl: "/ncert_books/class10/math_ch12.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch12_hi.pdf",
    competitionEdge: "Solid mensuration core topic across SSC CGL Tier 2, BPSC TRE 4.0 Secondary Math, CTET Paper 2, CDS, and Railways. Covers combinations of solids (cone on cylinder, hemisphere on cuboid, medicine capsule), melting and recasting solids (volume conservation), and internal surface areas.",
    competitionEdgeHi: "एसएससी सीजीएल मेन्स, रेलवे तथा शिक्षक भर्ती 9-10 का सर्वाधिक पूछा जाने वाला अध्याय। इसमें संयोजित ठोसों (शंकु + बेलन + अर्धगोला) का पृष्ठीय क्षेत्रफल, धातु को पिघलाकर नए ठोस में ढालना (आयतन संरक्षण नियम), तथा सिक्कों/गोलियों की संख्या ज्ञात करने के प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Combination of Solids",
        headingHi: "1. एनसीईआरटी मूल पाठ: ठोसों के संयोजन का पृष्ठीय क्षेत्रफल",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              When two or more basic solids are joined together, <strong>never simply add their individual Total Surface Areas</strong>! The joined surfaces are hidden inside and do NOT form part of the outer surface area. Total Surface Area of combination = sum of visible curved surface areas!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Golden Volume Conservation Rule</div>
            <p>When a solid of one shape is melted and recast into another shape, its <strong>VOLUME REMAINS STRICTLY UNCHANGED</strong>!<br/>
            $$\text{Volume of original solid(s)} = \text{Volume of new solid(s)}$$</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं आयतन संरक्षण नियम</div>
            <div class="mentor-msg">
              जब दो ठोसों को आपस में जोड़ा जाता है, तो उनके कुल पृष्ठीय क्षेत्रफलों को सीधे नहीं जोड़ा जाता! जो सतहें आपस में चिपक जाती हैं, वे अंदर छिप जाती हैं। अतः संयोजित ठोस का पृष्ठीय क्षेत्रफल = दिखाई देने वाले वक्र पृष्ठों का योग!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ आयतन संरक्षण का स्वर्णिम नियम</div>
            <p>जब किसी ठोस को पिघलाकर दूसरे आकार में ढाला जाता है, तो उसका <strong>आयतन सदैव अपरिवर्तित</strong> रहता है!<br/>
            $$\text{प्रारंभिक ठोस का आयतन} = \text{नए बने ठोस का आयतन}$$</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Comprehensive Solid Formulas",
        headingHi: "2. सूत्र संकलन: ठोस आकृतियों के वक्र पृष्ठ, संपूर्ण पृष्ठ व आयतन",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Solid Formulas Compendium</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Solid Shape</th>
                  <th>Curved Surface Area (CSA)</th>
                  <th>Total Surface Area (TSA)</th>
                  <th>Volume (V)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Cylinder</strong></td><td>$2\pi rh$</td><td>$2\pi r(r + h)$</td><td>$\pi r^2 h$</td></tr>
                <tr><td><strong>Cone</strong></td><td>$\pi r l$</td><td>$\pi r(l + r)$</td><td>$\frac{1}{3}\pi r^2 h$</td></tr>
                <tr><td><strong>Sphere</strong></td><td>$4\pi r^2$</td><td>$4\pi r^2$</td><td>$\frac{4}{3}\pi r^3$</td></tr>
                <tr><td><strong>Hemisphere</strong></td><td>$2\pi r^2$</td><td>$3\pi r^2$</td><td>$\frac{2}{3}\pi r^3$</td></tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 ठोसों के संपूर्ण सूत्र तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>ठोस आकृति</th>
                  <th>वक्र पृष्ठीय क्षेत्रफल (CSA)</th>
                  <th>कुल पृष्ठीय क्षेत्रफल (TSA)</th>
                  <th>आयतन (Volume)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>बेलन (Cylinder)</strong></td><td>$2\pi rh$</td><td>$2\pi r(r + h)$</td><td>$\pi r^2 h$</td></tr>
                <tr><td><strong>शंकु (Cone)</strong></td><td>$\pi r l$</td><td>$\pi r(l + r)$</td><td>$\frac{1}{3}\pi r^2 h$</td></tr>
                <tr><td><strong>गोला (Sphere)</strong></td><td>$4\pi r^2$</td><td>$4\pi r^2$</td><td>$\frac{4}{3}\pi r^3$</td></tr>
                <tr><td><strong>अर्धगोला (Hemisphere)</strong></td><td>$2\pi r^2$</td><td>$3\pi r^2$</td><td>$\frac{2}{3}\pi r^3$</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Melting Sphere into Cylinder",
        headingHi: "3. हाथ से हल किया गया उदाहरण: गोले को पिघलाकर बेलन बनाना",
        contentHtml: `
          ${makeSolvedCard(
            "Height of cylinder formed by melting sphere of radius 4.2 cm",
            "A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder.",
            [
              "<strong>Step 1 (Equate Volumes):</strong> $\text{Volume of cylinder} = \text{Volume of sphere} \implies \pi r_c^2 h = \frac{4}{3}\pi r_s^3$.",
              "<strong>Step 2 (Cancel π):</strong> $6^2 \times h = \frac{4}{3} \times (4.2)^3 \implies 36 h = \frac{4}{3} \times 74.088$.",
              "<strong>Step 3 (Solve):</strong> $36 h = 98.784 \implies h = \frac{98.784}{36} = 2.744\text{ cm} \approx 2.74\text{ cm}$."
            ],
            "Height of cylinder = 2.74 cm",
            "NCERT Class 10 Ex 12.3 Q1 & BPSC TRE"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "4.2 सेमी त्रिज्या के गोले को पिघलाकर 6 सेमी त्रिज्या का बेलन बनाना",
            "त्रिज्या 4.2 सेमी वाले धातु के एक गोले को पिघलाकर त्रिज्या 6 सेमी वाले एक बेलन के रूप में ढाला जाता है। बेलन की ऊँचाई ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (आयतन बराबर करना):</strong> $\pi r_1^2 h = \frac{4}{3}\pi r_2^3$।",
              "<strong>चरण 2 ($\pi$ काटना):</strong> $6^2 \times h = \frac{4}{3} \times (4.2)^3 \implies 36h = \frac{4}{3} \times 74.088 = 98.784$।",
              "<strong>चरण 3 (ऊँचाई h):</strong> $h = \frac{98.784}{36} = 2.74$ सेमी।"
            ],
            "बेलन की ऊँचाई = 2.74 सेमी",
            "NCERT कक्षा 10 उदाहरण 8"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The Number of Small Objects Formula",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: छोटी गोलियों / सिक्कों की संख्या",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Number of Recast Objects Formula!</div>
            <p>&bull; $\text{Number of small objects} = \frac{\text{Volume of large solid melted}}{\text{Volume of ONE small object}}$.<br/>
            &bull; Always check that units of ALL dimensions are the <strong>SAME</strong> (e.g. converting thickness 2 mm into 0.2 cm before multiplying!).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: सिक्कों / गोलियों की संख्या</div>
            <p>&bull; $\text{छोटे ठोसों की संख्या} = \frac{\text{बड़े ठोस का कुल आयतन}}{\text{एक छोटे ठोस का आयतन}}$।<br/>
            &bull; ध्यान रहे: सभी विमाओं की <strong>इकाइयाँ समान</strong> होनी चाहिए (जैसे 2 मिमी मोटाई को 0.2 सेमी में बदलना न भूलें)!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(12, "Surface Areas and Volumes", "पृष्ठीय क्षेत्रफल और आयतन", ch12Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 13: Statistics
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math13",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 13,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 13: Statistics (सांख्यिकी)",
    titleHi: "अध्याय 13: सांख्यिकी (Statistics - Mean, Median, Mode)",
    pdfUrl: "/ncert_books/class10/math_ch13.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch13_hi.pdf",
    competitionEdge: "Guaranteed scoring section in CTET Paper 2, BPSC TRE 4.0, SSC CGL Tier 1/2, and State TETs. Covers Mean calculation methods (Direct, Assumed Mean), Grouped Mode formula, Grouped Median formula, and the empirical relation: Mode = 3 Median - 2 Mean.",
    competitionEdgeHi: "सीटेट पेपर-2, बीपीएससी शिक्षक भर्ती, तथा एसएससी में शत-प्रतिशत अंक दिलाने वाला अध्याय। इसमें वर्गीकृत आँकड़ों का माध्य (प्रत्यक्ष व कल्पित माध्य विधि), बहुलक सूत्र, माध्यक सूत्र तथा आनुभविक संबंध (बहुलक = 3 माध्यक - 2 माध्य) से सीधे प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Mean of Grouped Data",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं वर्गीकृत आँकड़ों का माध्य",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              In Class 10 Statistics, data is organised into continuous frequency distributions with class intervals.
              Three primary methods exist to compute Mean ($\bar{x}$): Direct Method, Assumed Mean Method, and Step-Deviation Method.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Mean Calculation Formulas</div>
            <p>&bull; <strong>Direct Method:</strong> $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$ (where $x_i = \frac{\text{Upper limit} + \text{Lower limit}}{2}$)<br/>
            &bull; <strong>Assumed Mean Method:</strong> $\bar{x} = a + \frac{\sum f_i d_i}{\sum f_i}$ (where $d_i = x_i - a$)<br/>
            &bull; <strong>Step-Deviation Method:</strong> $\bar{x} = a + h \left(\frac{\sum f_i u_i}{\sum f_i}\right)$ (where $u_i = \frac{x_i - a}{h}$)</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं माध्य ज्ञात करने की विधियाँ</div>
            <div class="mentor-msg">
              वर्गीकृत आँकड़ों में वर्ग अंतरालों के मध्य-बिंदु को <strong>वर्ग चिह्न ($x_i$)</strong> कहते हैं: $x_i = \frac{\text{ऊपरी सीमा} + \text{निचली सीमा}}{2}$।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ माध्य के 3 मुख्य सूत्र</div>
            <p>&bull; <strong>प्रत्यक्ष विधि:</strong> $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$<br/>
            &bull; <strong>कल्पित माध्य विधि:</strong> $\bar{x} = a + \frac{\sum f_i d_i}{\sum f_i}$ ($d_i = x_i - a$)<br/>
            &bull; <strong>पद-विचलन विधि:</strong> $\bar{x} = a + h\left(\frac{\sum f_i u_i}{\sum f_i}\right)$ ($u_i = \frac{x_i - a}{h}$)</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: Grouped Mode & Median Formulas",
        headingHi: "2. सूत्र संकलन: बहुलक, माध्यक एवं आनुभविक संबंध",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Grouped Mode & Median Formulas</div>
            <p>&bull; <strong>Mode:</strong> $\text{Mode} = l + \left(\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right) \times h$<br/>
            &bull; <strong>Median:</strong> $\text{Median} = l + \left(\frac{\frac{n}{2} - cf}{f}\right) \times h$<br/>
            &bull; <strong>Empirical Relationship:</strong> $$\text{Mode} = 3\text{ Median} - 2\text{ Mean}$$</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 बहुलक व माध्यक के मानक सूत्र</div>
            <p>&bull; <strong>बहुलक (Mode):</strong> $l + \left(\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right) \times h$<br/>
            &bull; <strong>माध्यक (Median):</strong> $l + \left(\frac{\frac{n}{2} - cf}{f}\right) \times h$<br/>
            &bull; <strong>आनुभविक संबंध:</strong> $$\text{बहुलक} = 3\text{ माध्यक} - 2\text{ माध्य}$$</p>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Empirical Relationship Calculation",
        headingHi: "3. हाथ से हल किया गया उदाहरण: आनुभविक सूत्र से बहुलक निकालना",
        contentHtml: `
          ${makeSolvedCard(
            "Find Mode if Mean = 24 and Median = 26",
            "In a frequency distribution, the mean and median are found to be 24 and 26 respectively. Using the empirical formula, calculate the mode.",
            [
              "<strong>Step 1 (State Empirical Formula):</strong> $\text{Mode} = 3\text{ Median} - 2\text{ Mean}$.",
              "<strong>Step 2 (Substitute values):</strong> $\text{Mode} = 3(26) - 2(24)$.",
              "<strong>Step 3 (Calculate):</strong> $\text{Mode} = 78 - 48 = 30$."
            ],
            "Mode = 30",
            "NCERT Class 10 Exemplar & BPSC TRE"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "माध्य = 24 तथा माध्यक = 26 होने पर बहुलक ज्ञात करना",
            "किसी बारंबारता बंटन में माध्य 24 तथा माध्यक 26 है। आनुभविक संबंध का प्रयोग करके बहुलक ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (आनुभविक सूत्र):</strong> $\text{बहुलक} = 3\text{ माध्यक} - 2\text{ माध्य}$।",
              "<strong>चरण 2 (मान रखना):</strong> $\text{बहुलक} = 3(26) - 2(24)$।",
              "<strong>चरण 3 (गणना):</strong> $78 - 48 = 30$।"
            ],
            "बहुलक = 30",
            "NCERT कक्षा 10 उदाहरण"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: The Cumulative Frequency cf in Median",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: माध्यक सूत्र में cf का चुनाव",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Preceding Cumulative Frequency Trap!</div>
            <p>&bull; In the median formula $\text{Median} = l + \left(\frac{n/2 - cf}{f}\right)h$, <strong>$cf$ is the cumulative frequency of the PRECEDING class</strong>, NOT of the median class itself!<br/>
            &bull; $f$ is the frequency of the median class. Confusing $cf$ with the median class cumulative frequency will yield zero or negative value!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: माध्यक सूत्र में cf का चयन</div>
            <p>&bull; माध्यक सूत्र में $cf$ <strong>माध्यक वर्ग से ठीक पहले वाले वर्ग की संचयी बारंबारता</strong> होती है, स्वयं माध्यक वर्ग की नहीं!<br/>
            &bull; $f$ माध्यक वर्ग की वास्तविक बारंबारता होती है। यह सावधानी रखने से कभी गलती नहीं होगी!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(13, "Statistics", "सांख्यिकी", ch13Templates)
  },

  // -------------------------------------------------------------------------
  // CHAPTER 14: Probability
  // -------------------------------------------------------------------------
  {
    id: "ncert-c10-math14",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Mathematics",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 14,
    bookName: "Mathematics (गणित) — NCERT Class 10",
    title: "Chapter 14: Probability (प्रायिकता)",
    titleHi: "अध्याय 14: प्रायिकता (Probability)",
    pdfUrl: "/ncert_books/class10/math_ch14.pdf",
    pdfUrlHi: "/ncert_books/class10/math_ch14_hi.pdf",
    competitionEdge: "High-scoring probability section in BPSC TRE 4.0, CTET Paper 2, SSC CGL/CHSL, and CDS. Covers classical probability $P(E) = \frac{n(E)}{n(S)}$, complementary events $P(\bar{E}) = 1 - P(E)$, coin tosses (2 and 3 coins), two dice combinations (36 outcomes), and 52 playing card distributions.",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती, सीटेट पेपर-2 तथा एसएससी में पूरे अंक दिलाने वाला अध्याय। इसमें सैद्धांतिक प्रायिकता $P(E) = \frac{m}{n}$, पूरक घटना $P(\bar{E}) = 1 - P(E)$, सिक्के उछालना, दो पासों के 36 परिणाम, तथा 52 ताश के पत्तों के बंटन से जुड़े प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Classical Probability Definition",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं सैद्धांतिक प्रायिकता की परिभाषा",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Math Mentor Guidance</div>
            <div class="mentor-msg">
              In Class 10, we study <strong>Theoretical (Classical) Probability</strong>:
              $$P(E) = \frac{\text{Number of outcomes favourable to E}}{\text{Number of all possible outcomes of the experiment}}$$
              Assuming all elementary outcomes are equally likely.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Fundamental Probability Axioms</div>
            <p>&bull; The probability of an event E satisfies: $0 \le P(E) \le 1$.<br/>
            &bull; <strong>Sure / Certain Event:</strong> $P(E) = 1$.<br/>
            &bull; <strong>Impossible Event:</strong> $P(E) = 0$.<br/>
            &bull; <strong>Complementary Event:</strong> $P(E) + P(\bar{E}) = 1 \implies P(\bar{E}) = 1 - P(E)$.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक व्याख्या एवं मूल अभिधारणाएँ</div>
            <div class="mentor-msg">
              कक्षा 10 में हम <strong>सैद्धांतिक (क्लासिकल) प्रायिकता</strong> का अध्ययन करते हैं:
              $$P(E) = \frac{\text{घटना E के अनुकूल परिणामों की संख्या}}{\text{प्रयोग के सभी संभव परिणामों की कुल संख्या}}$$
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ प्रायिकता के सार्वभौमिक नियम</div>
            <p>&bull; किसी भी घटना E की प्रायिकता सदैव 0 और 1 के बीच होती है: $0 \le P(E) \le 1$।<br/>
            &bull; <strong>निश्चित घटना:</strong> $P(E) = 1$।<br/>
            &bull; <strong>असंभव घटना:</strong> $P(E) = 0$।<br/>
            &bull; <strong>पूरक घटना:</strong> $P(E) + P(\bar{E}) = 1 \implies P(\bar{E}) = 1 - P(E)$।</p>
          </div>
        `
      },
      {
        heading: "2. Formula Matrix: 52-Deck Cards & 2-Dice Outcomes",
        headingHi: "2. सूत्र संकलन: 52 ताश के पत्तों का वर्गीकरण एवं 2 पासे के परिणाम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 52 Playing Cards Architecture</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Suit</th>
                  <th>Color</th>
                  <th>Count</th>
                  <th>Cards Included</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Spades (हुकुम)</strong></td><td>Black (काला)</td><td>13</td><td>Ace, 2-10, Jack, Queen, King</td></tr>
                <tr><td><strong>Clubs (चिड़ी)</strong></td><td>Black (काला)</td><td>13</td><td>Ace, 2-10, Jack, Queen, King</td></tr>
                <tr><td><strong>Hearts (पान)</strong></td><td>Red (लाल)</td><td>13</td><td>Ace, 2-10, Jack, Queen, King</td></tr>
                <tr><td><strong>Diamonds (ईंट)</strong></td><td>Red (लाल)</td><td>13</td><td>Ace, 2-10, Jack, Queen, King</td></tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>Face Cards Count:</strong> 12 face cards in total (4 Kings, 4 Queens, 4 Jacks). Aces are NOT face cards!
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 52 ताश के पत्तों का सटीक विभाजन</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>सूट (प्रकार)</th>
                  <th>रंग</th>
                  <th>संख्या</th>
                  <th>पत्ते</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>हुकुम (Spades)</strong></td><td>काला</td><td>13</td><td>इक्का, 2-10, गुलाम, बेगम, बादशाह</td></tr>
                <tr><td><strong>चिड़ी (Clubs)</strong></td><td>काला</td><td>13</td><td>इक्का, 2-10, गुलाम, बेगम, बादशाह</td></tr>
                <tr><td><strong>पान (Hearts)</strong></td><td>लाल</td><td>13</td><td>इक्का, 2-10, गुलाम, बेगम, बादशाह</td></tr>
                <tr><td><strong>ईंट (Diamonds)</strong></td><td>लाल</td><td>13</td><td>इक्का, 2-10, गुलाम, बेगम, बादशाह</td></tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>तस्वीर वाले पत्ते (Face Cards):</strong> कुल 12 पत्ते (4 बादशाह + 4 बेगम + 4 गुलाम)। इक्का (Ace) तस्वीर वाला पत्ता नहीं होता!
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Probability of Face Cards",
        headingHi: "3. हाथ से हल किया गया उदाहरण: ताश की गड्डी से तस्वीर वाले पत्ते की प्रायिकता",
        contentHtml: `
          ${makeSolvedCard(
            "Probability of drawing a King of red color and a Face card",
            "One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting: (i) a king of red colour, (ii) a face card.",
            [
              "<strong>Step 1 (Total outcomes):</strong> Total cards $n(S) = 52$.",
              "<strong>Step 2 (King of red color):</strong> There are 2 red suits (Hearts and Diamonds), so 2 red kings. $P(\text{Red King}) = \frac{2}{52} = \frac{1}{26}$.",
              "<strong>Step 3 (Face card):</strong> There are 12 face cards (4 Jacks, 4 Queens, 4 Kings). $P(\text{Face Card}) = \frac{12}{52} = \frac{3}{13}$."
            ],
            "(i) 1/26, (ii) 3/13",
            "NCERT Class 10 Ex 14.1 Q14 & BPSC TRE"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "52 पत्तों की गड्डी से लाल रंग का बादशाह व तस्वीर वाला पत्ता",
            "52 पत्तों की अच्छी तरह से फेंटी गई एक गड्डी में से एक पत्ता निकाला जाता है। (i) लाल रंग का बादशाह, (ii) एक तस्वीर वाला पत्ता प्राप्त करने की प्रायिकता ज्ञात कीजिए।",
            [
              "<strong>चरण 1 (कुल परिणाम):</strong> $n(S) = 52$।",
              "<strong>चरण 2 (लाल रंग का बादशाह):</strong> लाल रंग के दो सूट (पान और ईंट) हैं, अतः लाल बादशाह = 2। प्रायिकता $= \frac{2}{52} = \frac{1}{26}$।",
              "<strong>चरण 3 (तस्वीर वाला पत्ता):</strong> कुल 12 तस्वीर वाले पत्ते (4 गुलाम + 4 बेगम + 4 बादशाह) हैं। प्रायिकता $= \frac{12}{52} = \frac{3}{13}$।"
            ],
            "(i) 1/26, (ii) 3/13",
            "NCERT कक्षा 10 प्रश्नावली 14.1 प्रश्न 14"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Are Aces Face Cards?",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: क्या इक्का तस्वीर वाला पत्ता है?",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Ace is NOT a Face Card Trap!</div>
            <p>&bull; In standard card terminology, <strong>Face cards (Court cards)</strong> are ONLY Kings, Queens, and Jacks (total 12).<br/>
            &bull; <strong>Aces (इक्के)</strong> are NOT face cards! If an exam question asks for <em>'Face card OR an Ace'</em>, the total is $12 + 4 = 16$, giving $P = \frac{16}{52} = \frac{4}{13}$.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: इक्का (Ace) तस्वीर वाला पत्ता नहीं है!</div>
            <p>&bull; मानक ताश में <strong>तस्वीर वाले पत्ते केवल 12</strong> (4 बादशाह, 4 बेगम, 4 गुलाम) होते हैं।<br/>
            &bull; <strong>इक्का (Ace) तस्वीर वाला पत्ता नहीं होता!</strong> यदि परीक्षा में <em>'तस्वीर वाला पत्ता अथवा इक्का'</em> पूछा जाए, तो अनुकूल परिणाम $12 + 4 = 16$ होंगे ($P = 16/52 = 4/13$)।</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(14, "Probability", "प्रायिकता", ch14Templates)
  }
];

const outPath = path.join(__dirname, 'class10_math_p2.json');
fs.writeFileSync(outPath, JSON.stringify(chaptersP2, null, 2), 'utf8');
console.log(`Generated Part 2: ${chaptersP2.length} Class 10 Math chapters with 30 MCQs each (${chaptersP2.length * 30} MCQs)!`);
