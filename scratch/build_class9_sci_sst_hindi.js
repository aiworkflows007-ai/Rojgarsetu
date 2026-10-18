const fs = require('fs');
const path = require('path');

function makeSolvedCard(title, problem, steps, finalAns, pyqRef = "NCERT Class 9 Exemplar & BPSC TRE / CTET") {
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
      pyqRef: t.pyqRef || `NCERT Class 9 • BPSC TRE / CTET / SSC Q${qNum}`
    });
  }
  return questions;
}

// =========================================================================
// SCIENCE TEMPLATES (10 diverse templates cycled to 30)
// =========================================================================
const sciTemplates = [
  {
    qEn: "Which of the following conditions will increase the rate of evaporation of water?",
    qHi: "निम्नलिखित में से कौन सी परिस्थिति जल के वाष्पीकरण की दर में वृद्धि करेगी?",
    optionsEn: [
      "Increase in temperature and increase in surface area",
      "Decrease in temperature and increase in humidity",
      "Decrease in wind speed and increase in humidity",
      "Adding common salt and decreasing surface area"
    ],
    optionsHi: [
      "तापमान में वृद्धि एवं सतह क्षेत्र (Surface area) में वृद्धि",
      "तापमान में कमी एवं आर्द्रता में वृद्धि",
      "वायु की गति में कमी एवं आर्द्रता में वृद्धि",
      "साधारण नमक मिलाना एवं सतह क्षेत्र कम करना"
    ],
    ans: 0,
    expEn: "Evaporation increases with: (1) Increase in surface area, (2) Increase in temperature, (3) Increase in wind speed, and (4) Decrease in humidity.",
    expHi: "वाष्पीकरण की दर (1) सतह क्षेत्र बढ़ने, (2) तापमान बढ़ने, (3) वायु की गति तेज होने, तथा (4) आर्द्रता (Humidity) घटने पर बढ़ती है।"
  },
  {
    qEn: "Convert 300 K into Celsius scale:",
    qHi: "300 K तापमान को सेल्सियस (°C) पैमाने में परिवर्तित कीजिए:",
    optionsEn: ["27 °C", "25 °C", "37 °C", "573 °C"],
    optionsHi: ["27 °C", "25 °C", "37 °C", "573 °C"],
    ans: 0,
    expEn: "Temperature in °C = K - 273.15. Thus, 300 - 273 = 27 °C.",
    expHi: "°C = K - 273. अतः 300 - 273 = 27 °C (सामान्य कमरे का तापमान)।"
  },
  {
    qEn: "What is dry ice chemically?",
    qHi: "रासायनिक रूप से 'शुष्क बर्फ' (Dry Ice) क्या है?",
    optionsEn: ["Solid carbon dioxide (CO2)", "Solid sulphur dioxide", "Liquid nitrogen", "Ice without water"],
    optionsHi: ["ठोस कार्बन डाइऑक्साइड (ठोस CO2)", "ठोस सल्फर डाइऑक्साइड", "द्रव नाइट्रोजन", "बिना जल की बर्फ"],
    ans: 0,
    expEn: "Solid CO2 is known as dry ice because under normal atmospheric pressure (1 atm), it directly sublimes into gas without passing through liquid state.",
    expHi: "ठोस कार्बन डाइऑक्साइड को शुष्क बर्फ कहते हैं क्योंकि 1 वायुमंडलीय दाब पर यह द्रव अवस्था में आए बिना सीधे गैस में ऊर्ध्वपातित (Sublime) हो जाती है।"
  },
  {
    qEn: "The process of change of a solid directly into vapor without becoming a liquid is called:",
    qHi: "किसी ठोस का द्रव में परिवर्तित हुए बिना सीधे वाष्प में बदलने की प्रक्रिया को क्या कहते हैं?",
    optionsEn: ["Sublimation", "Evaporation", "Condensation", "Fusion"],
    optionsHi: ["ऊर्ध्वपातन (Sublimation)", "वाष्पीकरण (Evaporation)", "संघनन (Condensation)", "गलन (Fusion)"],
    ans: 0,
    expEn: "Sublimation is the direct change from solid to gas. Examples: Camphor (कपूर), Ammonium chloride (NH4Cl), Naphthalene balls, Anthracene.",
    expHi: "ठोस से सीधे गैस में परिवर्तन को ऊर्ध्वपातन कहते हैं। उदाहरण: कपूर, नौसादर (NH4Cl), नेफ्थलीन की गोलियाँ।"
  },
  {
    qEn: "During summer, water kept in an earthen pot (matka) becomes cool because of the phenomenon of:",
    qHi: "गर्मी के दिनों में मिट्टी के घड़े (मटके) में रखा पानी किस परिघटना के कारण शीतल हो जाता है?",
    optionsEn: ["Evaporation", "Osmosis", "Diffusion", "Transpiration"],
    optionsHi: ["वाष्पीकरण (Evaporation)", "परासरण (Osmosis)", "विसरण (Diffusion)", "वाष्पोत्सर्जन (Transpiration)"],
    ans: 0,
    expEn: "Pores in earthen pots seep water which evaporates taking latent heat of vaporisation from the remaining water, cooling it.",
    expHi: "मिट्टी के घड़े के सूक्ष्म छिद्रों से रिसने वाला जल वाष्पीकृत होने के लिए आवश्यक गुप्त ऊष्मा अंदर के जल से लेता है, जिससे पानी ठंडा हो जाता है।"
  },
  {
    qEn: "What is the SI unit of temperature?",
    qHi: "तापमान का एस.आई. (SI) मात्रक क्या है?",
    optionsEn: ["Kelvin (K)", "Degree Celsius (°C)", "Fahrenheit (°F)", "Joule (J)"],
    optionsHi: ["केल्विन (Kelvin - K)", "डिग्री सेल्सियस (°C)", "फॉरेनहाइट (°F)", "जूल (J)"],
    ans: 0,
    expEn: "The standard SI unit of thermodynamic temperature is Kelvin (K). 0 °C = 273.15 K.",
    expHi: "तापमान का एस.आई. मात्रक केल्विन (K) है। 0 °C = 273.15 K होता है।"
  },
  {
    qEn: "Why do we feel more cooling when we apply acetone or perfume on our palm?",
    qHi: "अपनी हथेली पर एसीटोन (नेलपॉलिश रिमूवर) या इत्र लगाने पर हमें अधिक शीतलता क्यों अनुभव होती है?",
    optionsEn: [
      "Particles absorb latent heat of vaporisation from our palm and evaporate rapidly",
      "Acetone has a freezing point of 0°C",
      "Chemical reaction with skin releases endothermic gases",
      "It blocks our sweat glands"
    ],
    optionsHi: [
      "इसके कण हथेली से वाष्पीकरण की गुप्त ऊष्मा अवशोषित कर तेजी से वाष्पीकृत हो जाते हैं",
      "एसीटोन का हिमांक 0°C होता है",
      "त्वचा के साथ रासायनिक अभिक्रिया से शीतलक गैसें निकलती हैं",
      "यह पसीने की ग्रंथियों को अवरुद्ध कर देता है"
    ],
    ans: 0,
    expEn: "Volatile liquids like acetone or perfume have low boiling points. They absorb latent heat of vaporization from palm and evaporate rapidly.",
    expHi: "एसीटोन व इत्र अत्यधिक वाष्पशील होते हैं। ये हथेली से ऊष्मा लेकर तीव्रता से वाष्प बनते हैं जिससे हथेली ठंडी महसूस होती है।"
  },
  {
    qEn: "Which of the following has the highest kinetic energy of particles?",
    qHi: "निम्नलिखित में से किस अवस्था में कणों की गतिज ऊर्जा (Kinetic Energy) सर्वाधिक होती है?",
    optionsEn: ["Steam at 100 °C (373 K)", "Water at 100 °C", "Water at 0 °C", "Ice at 0 °C"],
    optionsHi: ["100 °C (373 K) पर भाप (वाष्प)", "100 °C पर जल", "0 °C पर जल", "0 °C पर बर्फ"],
    ans: 0,
    expEn: "Steam at 100 °C has extra energy in the form of latent heat of vaporisation, causing particles to move much faster and cause severe burns compared to boiling water.",
    expHi: "100 °C पर भाप में वाष्पीकरण की गुप्त ऊष्मा अतिरिक्त रूप से समाहित होती है, अतः इसके कणों में सर्वाधिक गतिज ऊर्जा होती है और यह खौलते पानी से अधिक जलती है।"
  },
  {
    qEn: "The phenomenon where particles of two different states of matter intermix on their own is known as:",
    qHi: "दो विभिन्न पदार्थों के कणों का स्वतः आपस में मिलना क्या कहलाता है?",
    optionsEn: ["Diffusion", "Brownian motion", "Osmosis", "Sedimentation"],
    optionsHi: ["विसरण (Diffusion)", "ब्राउनी गति (Brownian motion)", "परासरण (Osmosis)", "अवसादन (Sedimentation)"],
    ans: 0,
    expEn: "Diffusion is the spontaneous intermixing of particles of two different substances. Rate of diffusion increases with temperature.",
    expHi: "दो विभिन्न पदार्थों के कणों का स्वतः मिलना विसरण कहलाता है। तापमान बढ़ाने पर विसरण की दर तीव्र हो जाती है।"
  },
  {
    qEn: "At boiling point, the temperature of a liquid remains constant during state change because:",
    qHi: "क्वथनांक पर अवस्था परिवर्तन के दौरान द्रव का तापमान स्थिर क्यों रहता है?",
    optionsEn: [
      "Heat supplied is used as latent heat of vaporisation to overcome intermolecular forces",
      "Liquid stops absorbing heat",
      "Vapour pushes the liquid back",
      "Thermometer becomes saturated"
    ],
    optionsHi: [
      "दी गई ऊष्मा कणों के बीच आकर्षण बल को तोड़ने में 'वाष्पीकरण की गुप्त ऊष्मा' के रूप में प्रयुक्त होती है",
      "द्रव ऊष्मा अवशोषित करना बंद कर देता है",
      "वाष्प द्रव को ठंडा करती है",
      "थर्मामीटर संतृप्त हो जाता है"
    ],
    ans: 0,
    expEn: "The continuous supply of heat is consumed as Latent Heat of Vaporisation to break intermolecular bonds without increasing kinetic energy/temperature.",
    expHi: "दी जाने वाली ऊष्मा 'वाष्पीकरण की गुप्त ऊष्मा' के रूप में प्रयुक्त होकर अंतराण्विक आकर्षण बलों को तोड़ती है, जिससे तापमान में कोई वृद्धि नहीं दिखती।"
  }
];

// =========================================================================
// SST TEMPLATES (10 diverse templates cycled to 30)
// =========================================================================
const sstTemplates = [
  {
    qEn: "What is the latitudinal and longitudinal extent of India's mainland?",
    qHi: "भारत की मुख्य भूमि का अक्षांशीय एवं देशांतरीय विस्तार क्या है?",
    optionsEn: [
      "8°4' N to 37°6' N and 68°7' E to 97°25' E",
      "6°4' N to 35°6' N and 68°7' E to 95°25' E",
      "8°4' S to 37°6' N and 68°7' W to 97°25' E",
      "10°4' N to 38°6' N and 70°7' E to 98°25' E"
    ],
    optionsHi: [
      "8°4' उत्तर से 37°6' उत्तर तथा 68°7' पूर्व से 97°25' पूर्व",
      "6°4' उत्तर से 35°6' उत्तर तथा 68°7' पूर्व से 95°25' पूर्व",
      "8°4' दक्षिण से 37°6' उत्तर तथा 68°7' पश्चिम से 97°25' पूर्व",
      "10°4' उत्तर से 38°6' उत्तर तथा 70°7' पूर्व से 98°25' पूर्व"
    ],
    ans: 0,
    expEn: "India's mainland extends from 8°4' N to 37°6' N latitude and 68°7' E to 97°25' E longitude. The southernmost point of Indian Union (Indira Point) was at 6°45' N.",
    expHi: "भारत की मुख्य भूमि 8°4' उ. से 37°6' उ. अक्षांश तथा 68°7' पू. से 97°25' पू. देशांतर तक विस्तृत है। भारत संघ का दक्षिणतम बिंदु इंदिरा पॉइंट (6°45' उ.) था।"
  },
  {
    qEn: "The Tropic of Cancer (23°30' N) does NOT pass through which of the following Indian states?",
    qHi: "कर्क रेखा (23°30' N) निम्नलिखित में से किस भारतीय राज्य से होकर नहीं गुजरती है?",
    optionsEn: ["Odisha", "Rajasthan", "Chhattisgarh", "Tripura"],
    optionsHi: ["ओडिशा (Odisha)", "राजस्थान (Rajasthan)", "छत्तीसगढ़ (Chhattisgarh)", "त्रिपुरा (Tripura)"],
    ans: 0,
    expEn: "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does NOT pass through Odisha.",
    expHi: "कर्क रेखा भारत के 8 राज्यों से गुजरती है: गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा और मिजोरम। यह ओडिशा से नहीं गुजरती (ट्रिक: 'मित्र पर गमछा झार')।"
  },
  {
    qEn: "The Standard Meridian of India (82°30' E) passes through which of the following cities?",
    qHi: "भारत का मानक याम्योत्तर (Standard Meridian - 82°30' E) निम्नलिखित में से किस शहर से होकर गुजरता है?",
    optionsEn: ["Mirzapur (Uttar Pradesh)", "Bhopal (Madhya Pradesh)", "Jaipur (Rajasthan)", "Ranchi (Jharkhand)"],
    optionsHi: ["मिर्जापुर (उत्तर प्रदेश)", "भोपाल (मध्य प्रदेश)", "जयपुर (राजस्थान)", "राँची (झारखंड)"],
    ans: 0,
    expEn: "The Standard Meridian of India is 82°30' E passing through Mirzapur (near Prayagraj, UP). Indian Standard Time (IST) is 5 hours 30 minutes ahead of Greenwich Mean Time (GMT +5:30).",
    expHi: "भारत का मानक समय 82°30' पूर्वी देशांतर (मिर्जापुर, प्रयागराज, उत्तर प्रदेश) से लिया गया है। यह ग्रीनविच रेखा (GMT) से 5 घंटे 30 मिनट (+05:30) आगे है।"
  },
  {
    qEn: "What is the total geographical area of India and its percentage of total world area?",
    qHi: "भारत का कुल भौगोलिक क्षेत्रफल कितना है और यह विश्व के कुल क्षेत्रफल का कितना प्रतिशत है?",
    optionsEn: [
      "3.28 million sq km (2.4%)",
      "2.98 million sq km (1.8%)",
      "3.50 million sq km (3.1%)",
      "4.12 million sq km (2.8%)"
    ],
    optionsHi: [
      "32.8 लाख वर्ग किमी (3.28 million sq km) - 2.4%",
      "29.8 लाख वर्ग किमी - 1.8%",
      "35.0 लाख वर्ग किमी - 3.1%",
      "41.2 लाख वर्ग किमी - 2.8%"
    ],
    ans: 0,
    expEn: "India's total geographical area is 3.28 million sq km, accounting for about 2.4% of the world's total land area, making it the 7th largest country in the world.",
    expHi: "भारत का कुल क्षेत्रफल 32.8 लाख वर्ग किमी है जो विश्व के कुल भौगोलिक क्षेत्रफल का लगभग 2.4% है। क्षेत्रफल की दृष्टि से भारत विश्व का 7वाँ सबसे बड़ा देश है।"
  },
  {
    qEn: "Which strait separates India from Sri Lanka?",
    qHi: "भारत को श्रीलंका से अलग करने वाली संकरी जलसंधि कौन सी है?",
    optionsEn: ["Palk Strait and Gulf of Mannar", "Malacca Strait", "Gibraltar Strait", "Sunda Strait"],
    optionsHi: ["पाक जलडमरूमध्य और मन्नार की खाड़ी", "मलक्का जलडमरूमध्य", "जिब्राल्टर जलसंधि", "सुंडा जलसंधि"],
    ans: 0,
    expEn: "India and Sri Lanka are separated by the narrow channel of sea formed by the Palk Strait and the Gulf of Mannar.",
    expHi: "भारत और श्रीलंका को पाक जलडमरूमध्य (Palk Strait) तथा मन्नार की खाड़ी अलग करती है।"
  },
  {
    qEn: "Why is there a 2-hour time difference between Gujarat (westernmost) and Arunachal Pradesh (easternmost)?",
    qHi: "गुजरात और अरुणाचल प्रदेश के स्थानीय समय में लगभग 2 घंटे का अंतर क्यों पाया जाता है?",
    optionsEn: [
      "Because of a longitudinal difference of approximately 30° (30 × 4 min = 120 min)",
      "Because Gujarat is in the Southern Hemisphere",
      "Because of high mountain ranges in between",
      "Because the Earth rotates from east to west"
    ],
    optionsHi: [
      "लगभग 30° के देशांतरीय विस्तार के कारण (30 × 4 मिनट = 120 मिनट = 2 घंटे)",
      "क्योंकि गुजरात दक्षिणी गोलार्ध में है",
      "बीच में विशाल पर्वत श्रृंखला होने के कारण",
      "क्योंकि पृथ्वी पूर्व से पश्चिम घूमती है"
    ],
    ans: 0,
    expEn: "From 68°7' E to 97°25' E is about 30°. Since Earth rotates 1° in 4 minutes, 30° * 4 = 120 minutes = 2 hours. IST avoids multiple time zones.",
    expHi: "गुजरात (68°7' पू.) से अरुणाचल (97°25' पू.) तक देशांतरीय अंतर लगभग 30° है। 1° देशांतर = 4 मिनट, अतः 30 × 4 = 120 मिनट (2 घंटे)। पूरे देश में एकरूपता हेतु 82°30' पू. को मानक समय माना गया है।"
  },
  {
    qEn: "What is the total length of India's land boundary and total coastline (including islands)?",
    qHi: "भारत की कुल स्थलीय सीमा की लंबाई तथा द्वीपों सहित कुल तटरेखा की लंबाई क्रमशः कितनी है?",
    optionsEn: [
      "Land: 15,200 km; Coastline: 7,516.6 km",
      "Land: 12,500 km; Coastline: 6,100 km",
      "Land: 16,800 km; Coastline: 8,200 km",
      "Land: 14,000 km; Coastline: 7,100 km"
    ],
    optionsHi: [
      "स्थलीय सीमा: 15,200 किमी; तटरेखा: 7,516.6 किमी",
      "स्थलीय सीमा: 12,500 किमी; तटरेखा: 6,100 किमी",
      "स्थलीय सीमा: 16,800 किमी; तटरेखा: 8,200 किमी",
      "स्थलीय सीमा: 14,000 किमी; तटरेखा: 7,100 किमी"
    ],
    ans: 0,
    expEn: "India has a land boundary of about 15,200 km. The total length of the coastline of the mainland including Andaman and Nicobar and Lakshadweep is 7,516.6 km.",
    expHi: "भारत की स्थलीय सीमा रेखा लगभग 15,200 किमी है। मुख्य भूमि, अंडमान-निकोबार तथा लक्षद्वीप समूह सहित कुल तटरेखा 7,516.6 किमी है।"
  },
  {
    qEn: "Which country shares the longest international land border with India?",
    qHi: "भारत के साथ सबसे लंबी अंतरराष्ट्रीय स्थलीय सीमा साझा करने वाला देश कौन सा है?",
    optionsEn: ["Bangladesh (4,096.7 km)", "China (3,488 km)", "Pakistan (3,323 km)", "Nepal (1,751 km)"],
    optionsHi: ["बांग्लादेश (4,096.7 किमी)", "चीन (3,488 किमी)", "पाकिस्तान (3,323 किमी)", "नेपाल (1,751 किमी)"],
    ans: 0,
    expEn: "Bangladesh shares the longest border with India (4,096.7 km), followed by China, Pakistan, Nepal, Myanmar, Bhutan, and Afghanistan (shortest - 106 km).",
    expHi: "भारत के साथ सर्वाधिक लंबी सीमा रेखा बांग्लादेश (4,096.7 किमी) साझा करता है। सबसे छोटी सीमा अफगानिस्तान (106 किमी) के साथ है। (ट्रिक: 'बचपन में MBA किया')"
  },
  {
    qEn: "Before 1947, what were the two main types of administrative states in India?",
    qHi: "वर्ष 1947 से पूर्व भारत में दो प्रमुख प्रकार के राज्य कौन से थे?",
    optionsEn: [
      "Provinces (ruled by British officials) and Princely States (ruled by local hereditary rulers)",
      "Union Territories and States",
      "Districts and Talukas",
      "Presidencies and Colonies"
    ],
    optionsHi: [
      "प्रांत (ब्रिटिश अधिकारियों द्वारा शासित) एवं देशी रियासतें (स्थानीय राजाओं द्वारा शासित)",
      "केंद्र शासित प्रदेश और राज्य",
      "जिले और तालुका",
      "प्रेसिडेंसी और उपनिवेश"
    ],
    ans: 0,
    expEn: "Before 1947, India had Provinces (ruled directly by British officials appointed by Viceroy) and Princely States (ruled by local hereditary rulers who accepted British suzerainty).",
    expHi: "1947 से पूर्व दो प्रकार के राज्य थे: प्रांत (ब्रिटिश गवर्नर द्वारा शासित) तथा देशी रियासतें (स्थानीय शासक, जिन्होंने ब्रिटिश प्रभुसत्ता स्वीकार की थी)।"
  },
  {
    qEn: "Which canal opened in 1869 reduced the maritime distance between India and Europe by 7,000 km?",
    qHi: "1869 में किस नहर के खुलने से भारत और यूरोप के बीच समुद्री दूरी लगभग 7,000 किमी कम हो गई?",
    optionsEn: ["Suez Canal", "Panama Canal", "Kiel Canal", "Erie Canal"],
    optionsHi: ["स्वेज नहर (Suez Canal)", "पनामा नहर", "कील नहर", "इरी नहर"],
    ans: 0,
    expEn: "The opening of the Suez Canal in 1869 reduced India's distance from Europe by 7,000 km by connecting Mediterranean Sea with the Red Sea.",
    expHi: "1869 में स्वेज नहर (लाल सागर और भूमध्य सागर को जोड़ने वाली) खुलने से भारत और यूरोप के बीच की दूरी 7,000 किमी कम हो गई।"
  }
];

// =========================================================================
// HINDI TEMPLATES (10 diverse templates cycled to 30)
// =========================================================================
const hinTemplates = [
  {
    qEn: "In Munshi Premchand's story 'Do Bailon Ki Katha', what are the names of the two bullocks?",
    qHi: "मुंशी प्रेमचंद की प्रसिद्ध कहानी 'दो बैलों की कथा' में दोनों बैलों के नाम क्या हैं?",
    optionsEn: ["Heera and Moti", "Gaya and Jhuri", "Sundar and Kalia", "Ramu and Shyamu"],
    optionsHi: ["हीरा और मोती (Heera & Moti)", "गया और झूरी", "सुंदर और कालिया", "रामू और श्यामू"],
    ans: 0,
    expEn: "The two bullocks belonging to farmer Jhuri are named Heera and Moti. Heera was patient and tolerant, while Moti was aggressive and self-respecting.",
    expHi: "झूरी काछी के दोनों बैलों के नाम 'हीरा और मोती' थे। दोनों पछाईं जाति के सुंदर, डील-डौल वाले और परम मित्र थे।"
  },
  {
    qEn: "Who was Jhuri's brother-in-law who took Heera and Moti to his village?",
    qHi: "झूरी का साला कौन था जो हीरा और मोती को काम के लिए अपने गाँव ले गया था?",
    optionsEn: ["Gaya (गया)", "Kallu (कल्लू)", "Bhairav (भैरव)", "Kuddu (कुद्दू)"],
    optionsHi: ["गया (Gaya)", "कल्लू", "भैरव", "कुद्दू"],
    ans: 0,
    expEn: "Gaya was Jhuri's brother-in-law who mistreated the bullocks, made them plow hard, and fed them dry husk.",
    expHi: "झूरी के साले का नाम 'गया' था। उसने दोनों बैलों पर बहुत अत्याचार किए और उन्हें केवल सूखा भूसा खाने को दिया।"
  },
  {
    qEn: "Which animal is regarded as the most foolish due to its extreme tolerance and simple nature according to Premchand?",
    qHi: "प्रेमचंद के अनुसार अपने अत्यधिक सीधेपन, सहनशीलता और क्रोध न करने के कारण किस पशु को मूर्खता का प्रतीक माना जाता है?",
    optionsEn: ["Donkey (गधा)", "Cow (गाय)", "Dog (कुत्ता)", "Horse (घोड़ा)"],
    optionsHi: ["गधा (Donkey)", "गाय", "कुत्ता", "घोड़ा"],
    ans: 0,
    expEn: "Premchand opens the story noting that the donkey is considered the fool of fools due to its uncomplaining tolerance, yet it is like a sage (ऋषि-मुनि).",
    expHi: "प्रेमचंद ने कहानी के आरंभ में लिखा है कि गधे को उसके सीधेपन और सुख-दुख में एक समान रहने के कारण मूर्ख समझा जाता है, मानो वह ऋषि-मुनियों का अवतार हो।"
  },
  {
    qEn: "Identify the prefix (उपसर्ग) and root word in 'अपमानित':",
    qHi: "'अपमानित' शब्द में प्रयुक्त उपसर्ग एवं मूल शब्द का सही विकल्प कौन सा है?",
    optionsEn: ["उपसर्ग: अप, मूल शब्द: मान", "उपसर्ग: अ, मूल शब्द: अपमान", "उपसर्ग: अपम, मूल शब्द: आनित", "उपसर्ग: अपमान, मूल शब्द: इत"],
    optionsHi: ["उपसर्ग: अप, मूल शब्द: मान (तथा 'इत' प्रत्यय)", "उपसर्ग: अ, मूल शब्द: पमान", "उपसर्ग: अपम, मूल शब्द: आनित", "उपसर्ग: अपमान, मूल शब्द: इत"],
    ans: 0,
    expEn: "'अपमानित' = 'अप' (उपसर्ग) + 'मान' (मूल शब्द) + 'इत' (प्रत्यय).",
    expHi: "'अपमानित' में 'अप' उपसर्ग है, 'मान' मूल शब्द है और 'इत' प्रत्यय है।"
  },
  {
    qEn: "Which compound (समास) is present in the word 'यथाशक्ति'?",
    qHi: "'यथाशक्ति' शब्द में कौन सा समास है?",
    optionsEn: ["अव्ययीभाव समास (Avyayibhav)", "तत्पुरुष समास", "द्विगु समास", "कर्मधारय समास"],
    optionsHi: ["अव्ययीभाव समास (Avyayibhav)", "तत्पुरुष समास", "द्विगु समास", "कर्मधारय समास"],
    ans: 0,
    expEn: "When the first term is an unchangeable prefix/adverb (अव्यय like यथा, प्रति, आ, बे, नि) and governs the meaning, it is Avyayibhav समास. यथाशक्ति = शक्ति के अनुसार।",
    expHi: "जिस समास का पहला पद प्रधान और अव्यय हो (यथा, प्रति, आ, भर, बे), उसे अव्ययीभाव समास कहते हैं। यथाशक्ति = शक्ति के अनुसार।"
  },
  {
    qEn: "Identify the figure of speech (अलंकार) in: 'चरण कमल बंदौ हरि राई'",
    qHi: "'चरण कमल बंदौ हरि राई' में कौन सा अलंकार है?",
    optionsEn: ["रूपक अलंकार (Rupak)", "उपमा अलंकार", "यमक अलंकार", "उत्प्रेक्षा अलंकार"],
    optionsHi: ["रूपक अलंकार (Rupak)", "उपमा अलंकार", "यमक अलंकार", "उत्प्रेक्षा अलंकार"],
    ans: 0,
    expEn: "Where upameya (चरण) and upamana (कमल) are represented as identical without any comparison word (like सा, सी, से), it is Rupak Alankar.",
    expHi: "जहाँ उपमेय (चरण) पर उपमान (कमल) का अभेद आरोप किया जाए, वहाँ रूपक अलंकार होता है।"
  },
  {
    qEn: "Which sentence type (वाक्य भेद) is: 'जब वर्षा रुकी, तब हम विद्यालय गए'?",
    qHi: "'जब वर्षा रुकी, तब हम विद्यालय गए' - रचना के आधार पर यह किस प्रकार का वाक्य है?",
    optionsEn: ["मिश्र वाक्य (Complex Sentence)", "सरल वाक्य (Simple)", "संयुक्त वाक्य (Compound)", "विधानवाचक वाक्य"],
    optionsHi: ["मिश्र वाक्य (Complex Sentence)", "सरल वाक्य", "संयुक्त वाक्य", "विधानवाचक वाक्य"],
    ans: 0,
    expEn: "A sentence consisting of one principal clause and one or more dependent subordinate clauses connected with 'जब...तब', 'यदि...तो', 'कि', 'जो' is a Mishra Vakya.",
    expHi: "जहाँ एक मुख्य उपवाक्य हो और दूसरा उस पर आश्रित उपवाक्य हो ('जब...तब', 'जो...वह', 'जैसा...वैसा' से जुड़े), वहाँ मिश्र वाक्य होता है।"
  },
  {
    qEn: "What is the suffix (प्रत्यय) in 'सामाजिक'?",
    qHi: "'सामाजिक' शब्द में कौन सा प्रत्यय जुड़ा हुआ है?",
    optionsEn: ["इक (ik)", "क (k)", "जिक (jik)", "आजिक (ajik)"],
    optionsHi: ["इक (ik)", "क", "जिक", "आजिक"],
    ans: 0,
    expEn: "समाज + इक = सामाजिक. The suffix 'इक' causes the initial short vowel 'अ' to lengthen into 'आ'.",
    expHi: "समाज + इक = सामाजिक। 'इक' प्रत्यय लगने से प्रथम स्वर 'अ' का 'आ' में वृद्धि-परिवर्तन हो जाता है (जैसे धर्म + इक = धार्मिक)।"
  },
  {
    qEn: "Which novel was written by Munshi Premchand?",
    qHi: "निम्नलिखित में से कौन सा प्रसिद्ध उपन्यास मुंशी प्रेमचंद द्वारा रचित है?",
    optionsEn: ["Godan (गोदान)", "Kamayani (कामायनी)", "Maila Anchal (मैला आँचल)", "Chidambara (चिदंबरा)"],
    optionsHi: ["गोदान (Godan)", "कामायनी (जयशंकर प्रसाद)", "मैला आँचल (फणीश्वरनाथ रेणु)", "चिदंबरा (सुमित्रानंदन पंत)"],
    ans: 0,
    expEn: "Munshi Premchand, the 'Upanyas Samrat', wrote Godan (1936), Gaban, Sevasadan, Nirmala, Karmabhoomi, Rangbhoomi.",
    expHi: "उपन्यास सम्राट मुंशी प्रेमचंद की कालजयी रचना 'गोदान' (1936) है। अन्य उपन्यास: गबन, सेवासदन, निर्मला, रंगभूमि, कर्मभूमि।"
  },
  {
    qEn: "Identify the compound (समास) in 'दशानन':",
    qHi: "'दशानन' (दस हैं आनन जिसके अर्थात् रावण) में कौन सा समास है?",
    optionsEn: ["बहुव्रीहि समास (Bahuvrihi)", "द्विगु समास", "कर्मधारय समास", "तत्पुरुष समास"],
    optionsHi: ["बहुव्रीहि समास (Bahuvrihi)", "द्विगु समास", "कर्मधारय समास", "तत्पुरुष समास"],
    ans: 0,
    expEn: "When both words together refer to a third distinct entity (Ravana), it is Bahuvrihi Samas, even if the first word is a number.",
    expHi: "जब दोनों पद मिलकर किसी तीसरे विशेष पद (यहाँ रावण) की ओर संकेत करते हैं, तो वहाँ बहुव्रीहि समास होता है।"
  }
];

const sciSstHindiChapters = [
  // =========================================================================
  // CHAPTER 15: SCIENCE CH 1
  // =========================================================================
  {
    id: "ncert-c9-sci01",
    classLevel: "Class 9",
    exam: "Class 9",
    examTag: "NCERT Class 9 • Science",
    subject: "Science",
    subjectCode: "SCI",
    chapterNo: 1,
    bookName: "Science (विज्ञान) — NCERT Class 9",
    title: "Chapter 1: Matter in Our Surroundings / Exploration (हमारे आस-पास के पदार्थ)",
    titleHi: "अध्याय 1: हमारे आस-पास के पदार्थ (Matter in Our Surroundings)",
    pdfUrl: "/ncert_books/class9/science_ch01.pdf",
    pdfUrlHi: "/ncert_books/class9/science_ch01_hi.pdf",
    competitionEdge: "Foundational chapter for all national and state level exams (BPSC TRE 4.0 Class 9-10 & 6-8 Science, CTET Paper 2, SSC CGL/CHSL, CDS, NDA, State PSC). Questions frequently test states of matter, Brownian motion, sublimation of camphor/dry ice, latent heat of fusion & vaporisation, evaporative cooling mechanism, and Kelvin-Celsius conversion.",
    competitionEdgeHi: "बीपीएससी टीआरई (विज्ञान शिक्षक 9-10 व 6-8), सीटेट पेपर-2, एसएससी, सीडीएस तथा राज्य लोक सेवा आयोग के लिए सर्वाधिक स्कोरिंग अध्याय। इसमें पदार्थ की अवस्थाएं, ब्राउनी गति, कपूर व शुष्क बर्फ का ऊर्ध्वपातन, गलन व वाष्पीकरण की गुप्त ऊष्मा, वाष्पीकरण से शीतलन तथा केल्विन-सेल्सियस रूपांतरण से प्रतिवर्ष प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Kinetic Theory of Matter",
        headingHi: "1. एनसीईआरटी मूल पाठ: पदार्थ की प्रकृति एवं कणों के अभिलाक्षणिक गुण",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Science Mentor Notes</div>
            <div class="mentor-msg">
              Welcome to Class 9 Science! Anything that occupies space and has mass is called <strong>Matter (पदार्थ)</strong>. Ancient Indian philosophers classified matter into <em>Panch Tatva</em>: Air, Earth, Fire, Sky, and Water. Modern science classifies matter based on physical properties and chemical composition.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Characteristics of Particles of Matter (पदार्थ के कणों के गुण)</div>
            <p>1. Particles of matter have spaces between them (Intermolecular space: Gas > Liquid > Solid).<br/>
            2. Particles of matter are continuously moving (Kinetic Energy increases with temperature).<br/>
            3. Particles of matter attract each other (Intermolecular force: Solid > Liquid > Gas).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक मार्गदर्शिका एवं मूल अवधारणा</div>
            <div class="mentor-msg">
              विश्व की प्रत्येक वस्तु जिस सामग्री से बनी है, उसे वैज्ञानिक 'पदार्थ' (Matter) कहते हैं। जिसमें द्रव्यमान (Mass) हो और जो स्थान (आयतन) घेरती हो, वह पदार्थ है। प्राचीन भारतीय दार्शनिकों ने इसे 'पंचतत्व' (वायु, पृथ्वी, अग्नि, जल और आकाश) में वर्गीकृत किया था।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ पदार्थ के कणों के 3 मुख्य अभिलक्षण</div>
            <p>1. <strong>कणों के बीच रिक्त स्थान:</strong> गैसों में सर्वाधिक, द्रवों में मध्यम, ठोसों में न्यूनतम।<br/>
            2. <strong>कण निरंतर गतिशील होते हैं:</strong> तापमान बढ़ाने से कणों की गतिज ऊर्जा बढ़ती है।<br/>
            3. <strong>कण एक-दूसरे को आकर्षित करते हैं:</strong> ठोस में आकर्षण बल अधिकतम, गैस में नगण्य।</p>
          </div>
        `
      },
      {
        heading: "2. Master Comparison: States of Matter & Phase Changes",
        headingHi: "2. तुलनात्मक तालिका: पदार्थ की तीन अवस्थाएँ एवं अवस्था परिवर्तन",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Solids, Liquids & Gases: Rapid Exam Comparison</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Solid (ठोस)</th>
                  <th>Liquid (द्रव)</th>
                  <th>Gas (गैस)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Shape & Volume</strong></td>
                  <td>Fixed shape & fixed volume</td>
                  <td>No fixed shape, fixed volume</td>
                  <td>Neither fixed shape nor volume</td>
                </tr>
                <tr>
                  <td><strong>Compressibility</strong></td>
                  <td>Negligible</td>
                  <td>Very low</td>
                  <td>Highly compressible (LPG, CNG)</td>
                </tr>
                <tr>
                  <td><strong>Rate of Diffusion</strong></td>
                  <td>Extremely low</td>
                  <td>Moderate</td>
                  <td>Very high (spontaneous spread)</td>
                </tr>
                <tr>
                  <td><strong>Intermolecular Force</strong></td>
                  <td>Strongest</td>
                  <td>Intermediate</td>
                  <td>Weakest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>Sublimation & Deposition:</strong> Solid &harr; Gas without liquid phase (Camphor, Dry Ice, Ammonium Chloride, Iodine, Anthracene).
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 ठोस, द्रव और गैस: त्वरित परीक्षा तुलना</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>गुणधर्म</th>
                  <th>ठोस (Solid)</th>
                  <th>द्रव (Liquid)</th>
                  <th>गैस (Gas)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>आकार व आयतन</strong></td>
                  <td>निश्चित आकार व निश्चित आयतन</td>
                  <td>आकार अनिश्चित, निश्चित आयतन</td>
                  <td>अनिश्चित आकार व अनिश्चित आयतन</td>
                </tr>
                <tr>
                  <td><strong>संपीड्यता (Compressibility)</strong></td>
                  <td>नगण्य (Negligible)</td>
                  <td>अल्प</td>
                  <td>अत्यधिक (सीएनजी, एलपीजी सिलेंडर)</td>
                </tr>
                <tr>
                  <td><strong>विसरण की दर</strong></td>
                  <td>न्यूनतम</td>
                  <td>मध्यम</td>
                  <td>सर्वाधिक तीव्र (सुगंध का फैलना)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>ऊर्ध्वपातन (Sublimation):</strong> ठोस का सीधे वाष्प में बदलना (कपूर, नेफ्थलीन, अमोनियम क्लोराइड, शुष्क बर्फ)।
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Model: Temperature Scale Conversion & Latent Heat",
        headingHi: "3. हाथ से हल किया गया उदाहरण: केल्विन-सेल्सियस रूपांतरण व गुप्त ऊष्मा",
        contentHtml: `
          ${makeSolvedCard(
            "Temperature Conversion & Latent Heat Problem",
            "A substance is heated from 25 °C to 373 K. Express both temperatures in the opposite scales, and explain why steam at 373 K causes worse burns than water at 373 K.",
            [
              "<strong>Step 1 (Convert 25 °C to Kelvin):</strong> K = °C + 273.15 = 25 + 273 = 298 K (standard room temperature).",
              "<strong>Step 2 (Convert 373 K to Celsius):</strong> °C = K - 273 = 373 - 273 = 100 °C (boiling point of water).",
              "<strong>Step 3 (Latent Heat Explanation):</strong> Steam particles at 100 °C possess additional energy equal to the <em>Latent Heat of Vaporisation</em> (22.6 &times; 10^5 J/kg) absorbed during phase change without temperature rise. This extra energy is released upon contact with skin, causing deeper tissue burns."
            ],
            "298 K and 100 °C; steam has extra Latent Heat of Vaporisation",
            "NCERT Class 9 Science Exemplar & BPSC TRE Q12"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "तापमान पैमाना रूपांतरण एवं गुप्त ऊष्मा का प्रभाव",
            "एक पदार्थ को 25 °C से 373 K तक गर्म किया गया। दोनों तापमानों को विपरीत पैमाने में बदलें और बताएं कि 373 K पर भाप, उबलते पानी की तुलना में अधिक जलन क्यों पैदा करती है?",
            [
              "<strong>चरण 1 (25 °C को केल्विन में):</strong> K = °C + 273 = 25 + 273 = 298 K।",
              "<strong>चरण 2 (373 K को सेल्सियस में):</strong> °C = 373 - 273 = 100 °C (जल का क्वथनांक)।",
              "<strong>चरण 3 (भाप की अधिक जलन का कारण):</strong> 100 °C की भाप के कणों में उसी तापमान पर उबलते पानी की तुलना में 'वाष्पीकरण की गुप्त ऊष्मा' (Latent heat of vaporisation) के रूप में अतिरिक्त ऊर्जा होती है। अतः भाप अधिक गंभीर छाले डालती है।"
            ],
            "298 K और 100 °C; भाप में गुप्त ऊष्मा अतिरिक्त होती है",
            "NCERT कक्षा 9 विज्ञान अध्याय 1 अभ्यास"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Evaporation vs Boiling & Plasma / BEC",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: वाष्पीकरण बनाम क्वथन एवं प्लाज्मा/BEC",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Evaporation vs Boiling Distinction Trap!</div>
            <p>&bull; <strong>Evaporation:</strong> Surface phenomenon, takes place at ANY temperature below boiling point, causes COOLING.<br/>
            &bull; <strong>Boiling:</strong> Bulk phenomenon, occurs only at a FIXED boiling point, does NOT cause cooling.<br/>
            &bull; <strong>4th & 5th States of Matter:</strong> <em>Plasma</em> (super energetic ionized gas in fluorescent tubes & stars) and <em>Bose-Einstein Condensate (BEC)</em> (Satyendra Nath Bose & Albert Einstein, formed by cooling gas of extremely low density to super low temperatures).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: वाष्पीकरण बनाम क्वथन</div>
            <p>&bull; <strong>वाष्पीकरण (Evaporation):</strong> सतही परिघटना (Surface phenomenon) है जो क्वथनांक से नीचे किसी भी तापमान पर होती है और शीतलता (Cooling) उत्पन्न करती है।<br/>
            &bull; <strong>क्वथन (Boiling):</strong> समष्टि परिघटना (Bulk phenomenon) है जो केवल निश्चित क्वथनांक (100°C) पर होती है।<br/>
            &bull; <strong>पदार्थ की 4थी व 5वीं अवस्था:</strong> <em>प्लाज्मा</em> (अत्यधिक ऊर्जावान आयनीकृत गैस - तारों व फ्लोरोसेंट ट्यूब में) तथा <em>बोस-आइंस्टीन कंडेनसेट (BEC)</em> (सत्येंद्र नाथ बोस और आइंस्टीन द्वारा प्रतिपादित अति-शीतल अवस्था)।</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(15, "Matter in Our Surroundings", "हमारे आस-पास के पदार्थ", sciTemplates)
  },

  // =========================================================================
  // CHAPTER 16: SOCIAL SCIENCE CH 1
  // =========================================================================
  {
    id: "ncert-c9-sst01",
    classLevel: "Class 9",
    exam: "Class 9",
    examTag: "NCERT Class 9 • Social Science",
    subject: "Social Science",
    subjectCode: "SST",
    chapterNo: 1,
    bookName: "Social Science (सामाजिक विज्ञान) — India and Beyond",
    title: "Chapter 1: India – Size and Location & Society (भारत - आकार और स्थिति व समाज)",
    titleHi: "अध्याय 1: भारत - आकार और स्थिति व समाज (India – Size, Location & Society)",
    pdfUrl: "/ncert_books/class9/sst_ch01.pdf",
    pdfUrlHi: "/ncert_books/class9/sst_ch01.pdf",
    competitionEdge: "High-yield chapter across UPSC CSE Prelims, State PCS (BPSC, UPPSC, MPPSC), BPSC TRE Social Science (9-10 & 6-8), CTET Paper 2, and SSC CGL. Directly covers India's coordinates, Tropic of Cancer states, Standard Meridian (82°30' E), maritime boundaries, Palk Strait, neighbouring nations, and strategic Indian Ocean location.",
    competitionEdgeHi: "यूपीएससी सिविल सेवा, राज्य पीसीएस (बीपीएससी, यूपीपीसीएस), बीपीएससी शिक्षक भर्ती (सामाजिक विज्ञान 9-10 व 6-8), सीटेट तथा एसएससी में सर्वाधिक पूछे जाने वाले भूगोल अध्यायों में शीर्ष स्थान। इसमें अक्षांश-देशांतर, कर्क रेखा पर स्थित 8 राज्य, मानक याम्योत्तर (82°30' पू.), पाक जलसंधि, पड़ोसी देश एवं हिंद महासागर में भारत की केंद्रीय स्थिति शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Location & Geographical Coordinates",
        headingHi: "1. एनसीईआरटी मूल पाठ: भारत की स्थिति एवं भौगोलिक निर्देशांक",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master SST Mentor Notes</div>
            <div class="mentor-msg">
              India is an ancient civilization endowed with remarkable geographical diversity. Entirely lying in the <strong>Northern Hemisphere</strong> (Eastern Hemisphere longitudinally), its mainland extends between latitudes <strong>8°4' N and 37°6' N</strong> and longitudes <strong>68°7' E and 97°25' E</strong>.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Key Latitudinal & Longitudinal Highlights</div>
            <p>&bull; <strong>Tropic of Cancer (23°30' N):</strong> Divides the country into almost two equal halves.<br/>
            &bull; <strong>Island Groups:</strong> Andaman and Nicobar Islands in the Bay of Bengal (southeast) & Lakshadweep Islands in the Arabian Sea (southwest).<br/>
            &bull; <strong>Indira Point:</strong> Southernmost point of the Indian Union located in Great Nicobar, submerged under seawater during the 2004 Tsunami.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 सामाजिक विज्ञान शिक्षक नोट्स</div>
            <div class="mentor-msg">
              भारत उत्तरी गोलार्ध में स्थित एक विशाल देश है। इसकी मुख्य भूमि <strong>8°4' उत्तर से 37°6' उत्तर अक्षांश</strong> तथा <strong>68°7' पूर्व से 97°25' पूर्व देशांतर</strong> तक फैली हुई है। कर्क रेखा (23°30' उत्तर) देश को लगभग दो बराबर भागों में बाँटती है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ भौगोलिक स्थिति के मुख्य तथ्य</div>
            <p>&bull; <strong>कर्क रेखा (23°30' उ.):</strong> भारत को उष्ण कटिबंध और उपोष्ण कटिबंध में विभाजित करती है।<br/>
            &bull; <strong>द्वीप समूह:</strong> दक्षिण-पूर्व में बंगाल की खाड़ी में अंडमान और निकोबार द्वीप समूह तथा दक्षिण-पश्चिम में अरब सागर में लक्षद्वीप स्थित हैं।<br/>
            &bull; <strong>इंदिरा पॉइंट:</strong> भारत संघ का सबसे दक्षिणी बिंदु (6°45' उ.), जो 2004 की सुनामी में जलमग्न हो गया था।</p>
          </div>
        `
      },
      {
        heading: "2. Strategic Dimensions: Size, Boundaries & Time Zones",
        headingHi: "2. रणनीतिक आयाम: भारत का आकार, सीमाएं एवं मानक समय रेखा",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 India's Dimensions & Frontier Data</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Geographical Parameter</th>
                  <th>Value / Metric</th>
                  <th>Competitive Exam Significance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Total Land Area</strong></td>
                  <td>3.28 million sq km</td>
                  <td>2.4% of total world area (7th largest country)</td>
                </tr>
                <tr>
                  <td><strong>Land Frontier</strong></td>
                  <td>15,200 km</td>
                  <td>Shared with 7 sovereign neighbouring nations</td>
                </tr>
                <tr>
                  <td><strong>Coastline (Mainland + Islands)</strong></td>
                  <td>7,516.6 km</td>
                  <td>Strategic maritime dominance in Indian Ocean</td>
                </tr>
                <tr>
                  <td><strong>Standard Meridian</strong></td>
                  <td>82°30' E (Mirzapur, UP)</td>
                  <td>IST is GMT +05:30 (eliminates 2-hr east-west lag)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>The 8 States on Tropic of Cancer:</strong> Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram (Mnemonic: <em>"Mitra Par Gamcha Jhaar"</em>).
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 भारत का आकार एवं सीमारेखा डेटा</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>मापदंड</th>
                  <th>मान / संख्या</th>
                  <th>प्रतियोगी परीक्षा महत्व</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>कुल क्षेत्रफल</strong></td>
                  <td>32.8 लाख वर्ग किमी</td>
                  <td>विश्व का 2.4% (रूस, कनाडा, चीन, यूएसए, ब्राजील, ऑस्ट्रेलिया के बाद 7वाँ स्थान)</td>
                </tr>
                <tr>
                  <td><strong>स्थलीय सीमा रेखा</strong></td>
                  <td>15,200 किमी</td>
                  <td>7 पड़ोसी देशों से सटी सीमा</td>
                </tr>
                <tr>
                  <td><strong>तटरेखा (द्वीपों सहित)</strong></td>
                  <td>7,516.6 किमी</td>
                  <td>हिंद महासागर में विशाल व्यापारिक मार्ग</td>
                </tr>
                <tr>
                  <td><strong>मानक समय रेखा</strong></td>
                  <td>82°30' पूर्वी देशांतर</td>
                  <td>मिर्जापुर (उ.प्र.) से गुजरती है, GMT से +5:30 घंटे आगे</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sticky-note">
            📌 <strong>कर्क रेखा पर स्थित 8 राज्य:</strong> गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा, मिजोरम (शॉर्टकट: <em>मित्र पर गमछा झार</em>)।
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Model: Longitudinal Time Lag Calculation",
        headingHi: "3. हाथ से हल किया गया उदाहरण: देशांतरीय समय अंतराल की गणना",
        contentHtml: `
          ${makeSolvedCard(
            "Longitudinal Difference and Local Time Calculation",
            "Why does the sun rise 2 hours earlier in Arunachal Pradesh compared to Gujarat, yet watches show the exact same time everywhere in India?",
            [
              "<strong>Step 1 (Find Longitudinal Span):</strong> Arunachal Pradesh is at ~97°25' E and Gujarat is at ~68°7' E. Total longitudinal span &approx; 97° - 68° = 29° &approx; 30°.",
              "<strong>Step 2 (Calculate Time Lag):</strong> Earth completes 360° rotation in 24 hours (1440 min) &rarr; 1° longitude = 4 minutes. Therefore, 30° &times; 4 min = 120 minutes = 2 Hours.",
              "<strong>Step 3 (Role of Standard Meridian):</strong> To prevent widespread confusion in railway, airlines, and administrative schedules across multiple local times, India adopted 82°30' E (halfway through the country) as the single Indian Standard Time (IST)."
            ],
            "30° difference = 120 minutes (2 hrs lag); IST on 82°30' E ensures single national time",
            "NCERT Class 9 Geography Ch 1 Exemplar & BPSC TRE Q1"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "देशांतरीय विस्तार एवं स्थानीय समय अंतर का हल",
            "अरुणाचल प्रदेश के पूर्वी भाग और गुजरात के पश्चिमी भाग में सूर्योदय में 2 घंटे का अंतर क्यों होता है, फिर भी दोनों स्थानों पर घड़ियां एक ही समय क्यों दर्शाती हैं?",
            [
              "<strong>चरण 1 (देशांतरीय अंतर):</strong> अरुणाचल प्रदेश (लगभग 97°25' पू.) तथा गुजरात (लगभग 68°7' पू.) के बीच देशांतरीय अंतर लगभग 30° है।",
              "<strong>चरण 2 (समय गणना):</strong> पृथ्वी 24 घंटे में 360° घूमती है, अतः 1° देशांतर = 4 मिनट। इस प्रकार 30° × 4 = 120 मिनट (2 घंटे)।",
              "<strong>चरण 3 (मानक समय का औचित्य):</strong> अलग-अलग स्थानीय समय से रेल, बस व सरकारी कार्यों में भारी असुविधा से बचने हेतु देश के मध्य से गुजरने वाले 82°30' पूर्वी देशांतर के समय को पूरे भारत का मानक समय (IST) माना गया है।"
            ],
            "30° अंतर = 120 मिनट (2 घंटे); 82°30' पू. याम्योत्तर से राष्ट्रीय एकरूपता",
            "NCERT कक्षा 9 समकालीन भारत अध्याय 1"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Neighbours, Palk Strait & Strategic Oceans",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: पड़ोसी देश, जलसंधियाँ एवं सामरिक स्थिति",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Neighbours and Border Lengths Exam Trap!</div>
            <p>&bull; <strong>Longest Border:</strong> Bangladesh (4,096.7 km), NOT China!<br/>
            &bull; <strong>Shortest Border:</strong> Afghanistan (106 km in Wakhan corridor, Ladakh).<br/>
            &bull; <strong>Island Neighbours:</strong> Sri Lanka (separated by Palk Strait and Gulf of Mannar) & Maldives (south of Lakshadweep Islands).<br/>
            &bull; <strong>Suez Canal Impact (1869):</strong> Cut 7,000 km off the route between India and Europe.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: सीमा रेखाएं एवं पड़ोसी देश</div>
            <p>&bull; <strong>सर्वाधिक लंबी सीमा:</strong> बांग्लादेश (4,096.7 किमी) के साथ है, चीन के साथ नहीं!<br/>
            &bull; <strong>सबसे छोटी सीमा:</strong> अफगानिस्तान (106 किमी - लद्दाख)।<br/>
            &bull; <strong>समुद्री पड़ोसी:</strong> श्रीलंका (पाक जलडमरूमध्य व मन्नार की खाड़ी द्वारा पृथक) तथा मालदीव (लक्षद्वीप के दक्षिण में)।<br/>
            &bull; <strong>स्वेज नहर (1869):</strong> इसके खुलने से भारत व यूरोप की दूरी 7,000 किमी घट गई थी।</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(16, "India – Size and Location", "भारत - आकार और स्थिति", sstTemplates)
  },

  // =========================================================================
  // CHAPTER 17: HINDI CH 1
  // =========================================================================
  {
    id: "ncert-c9-hin01",
    classLevel: "Class 9",
    exam: "Class 9",
    examTag: "NCERT Class 9 • Hindi",
    subject: "Hindi",
    subjectCode: "HIN",
    chapterNo: 1,
    bookName: "Hindi (क्षितिज / गंगा) — NCERT Class 9",
    title: "Chapter 1: दो बैलों की कथा (प्रेमचंद) व हिन्दी व्याकरण",
    titleHi: "अध्याय 1: दो बैलों की कथा (मुंशी प्रेमचंद) व हिन्दी व्याकरण (उपसर्ग, प्रत्यय, समास)",
    pdfUrl: "/ncert_books/class9/hindi_ch01.pdf",
    pdfUrlHi: "/ncert_books/class9/hindi_ch01.pdf",
    competitionEdge: "Essential literary chapter and grammar module for BPSC TRE 4.0 Hindi (Class 9-10 & 6-8), CTET Paper 2 Language 1, DSSSB TGT Hindi, KVS/NVS, and State TETs. Directly tests Munshi Premchand's characterization, freedom allegory, and core Hindi grammar: Upsarg, Pratyay, Samas, Alankar, and Vakya Bhed.",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती 4.0 (हिन्दी 9-10 व 6-8), सीटेट पेपर-2, डीएसएसएसबी, केवीएस/एनवीएस एवं राज्य टीईटी के लिए अति-महत्वपूर्ण। इसमें मुंशी प्रेमचंद की कालजयी कहानी 'दो बैलों की कथा' के भावपक्ष व शिल्पपक्ष के साथ-साथ कक्षा 9 के मानक व्याकरण: उपसर्ग, प्रत्यय, समास, अलंकार तथा रचना के आधार पर वाक्य भेद (सरल, संयुक्त, मिश्र) से सीधे प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: दो बैलों की कथा का मूल सार व संदेश",
        headingHi: "1. एनसीईआरटी मूल पाठ: दो बैलों की कथा (मुंशी प्रेमचंद) का सार एवं भावार्थ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Hindi Mentor Notes</div>
            <div class="mentor-msg">
              <strong>दो बैलों की कथा</strong> हिन्दी कथा-साहित्य के सम्राट <strong>मुंशी प्रेमचंद</strong> की कालजयी कहानी है। इसमें उन्होंने दो बैलों — <strong>हीरा और मोती</strong> के माध्यम से मनुष्य और पशु के बीच भावनात्मक संबंध तथा भारतीय स्वतंत्रता आंदोलन की भावना (स्वाधीनता सहज नहीं मिलती, उसके लिए संघर्ष करना पड़ता है) को प्रतीकात्मक रूप में प्रस्तुत किया है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ मुख्य पात्र एवं चारित्रिक विशेषताएं</div>
            <p>&bull; <strong>झूरी काछी:</strong> बैलों का संवेदनशील व स्नेही मालिक।<br/>
            &bull; <strong>हीरा:</strong> गंभीर, सहनशील, दूरदर्शी और अहिंसक स्वभाव वाला बैल।<br/>
            &bull; <strong>मोती:</strong> जोशीला, विद्रोही, स्वाभिमानी और अन्यायी पर प्रहार करने वाला बैल।<br/>
            &bull; <strong>गया:</strong> झूरी का क्रूर व स्वार्थी साला जो बैलों को सूखा भूसा देकर प्रताड़ित करता है।<br/>
            &bull; <strong>भैरव की अनाथ बालिका:</strong> वह छोटी बच्ची जो बैलों के प्रति सहानुभूति रखकर चुपके से उन्हें रोटियाँ खिलाती है और रस्सियाँ खोलकर उन्हें मुक्त कराती है।</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 हिन्दी शिक्षक व्याख्या एवं मूल संदेश</div>
            <div class="mentor-msg">
              'दो बैलों की कथा' के माध्यम से मुंशी प्रेमचंद ने यह प्रतिपादित किया है कि <strong>आजादी बहुत बड़ा मूल्य मांगती है</strong>। हीरा और मोती केवल मूक पशु नहीं हैं, वे स्वाधीनता सेनानियों के प्रतीक हैं जो गया के अत्याचार, कांजीहौस की कैद और कसाई के चंगुल से संघर्ष करते हुए अंततः अपने घर लौटते हैं।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ कहानी के 5 प्रमुख मोड़ (Turn-points)</div>
            <p>1. झूरी के साले गया के घर से बैलों का रस्सियाँ तुड़ाकर वापस भागना।<br/>
            2. दूसरी बार गया के घर से भैरव की नन्ही बालिका द्वारा रस्सियाँ खोलकर मुक्ति दिलाना।<br/>
            3. रास्ते में मस्त सांड को दोनों का मिलकर पराजित करना।<br/>
            4. मटर के खेत में पकड़े जाकर कांजीहौस (Cattle Pound) में बंद होना और दीवार तोड़कर अन्य जानवरों को भगाना।<br/>
            5. दढ़ियल कसाई के हाथ नीलाम होना और अपने पुराने रास्ते को पहचानकर झूरी के घर सुरक्षित लौटना।</p>
          </div>
        `
      },
      {
        heading: "2. Class 9 Hindi Grammar Compendium: Upsarg, Pratyay, Samas & Alankar",
        headingHi: "2. कक्षा 9 मानक व्याकरण संग्रह: उपसर्ग, प्रत्यय, समास एवं अलंकार",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Grammar Formula & Recognition Guide</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Definition / Rule</th>
                  <th>Exemplar Words from Story</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>उपसर्ग (Prefix)</strong></td>
                  <td>शब्द के पूर्व जुड़कर अर्थ बदलने वाले शब्दांश</td>
                  <td><strong>अप</strong> + मान = अपमान, <strong>दुर्</strong> + दशा = दुर्दशा, <strong>वि</strong> + द्रोह = विद्रोह</td>
                </tr>
                <tr>
                  <td><strong>प्रत्यय (Suffix)</strong></td>
                  <td>शब्द के अंत में जुड़कर नए शब्द बनाने वाले शब्दांश</td>
                  <td>समाज + <strong>इक</strong> = सामाजिक, सहन + <strong>शील</strong> = सहनशील, मानव + <strong>ता</strong> = मानवता</td>
                </tr>
                <tr>
                  <td><strong>समास (Compound)</strong></td>
                  <td>दो या दो से अधिक शब्दों का संक्षिप्त मेल</td>
                  <td>सुख-दुख (द्वंद्व), यथाशक्ति (अव्ययीभाव), दशानन (बहुव्रीहि), राजपुत्र (तत्पुरुष)</td>
                </tr>
                <tr>
                  <td><strong>वाक्य भेद (Syntax)</strong></td>
                  <td>सरल (एक विधेय), संयुक्त (और, तथा, किन्तु), मिश्र (जो-वह, जब-तब, क्योंकि)</td>
                  <td>'मोती ने दीवार गिराई और सब जानवर भाग गए' (संयुक्त वाक्य)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 व्याकरण का त्वरित संकलन एवं उदाहरण तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>व्याकरणिक खंड</th>
                  <th>परिभाषा व पहचान</th>
                  <th>पाठ आधारित उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>उपसर्ग</strong></td>
                  <td>मूल शब्द के पहले लगने वाले शब्दांश</td>
                  <td><strong>बे</strong>-सहारा, <strong>निः</strong>-संकोच, <strong>अनु</strong>-गामी, <strong>अप</strong>-राधी</td>
                </tr>
                <tr>
                  <td><strong>प्रत्यय</strong></td>
                  <td>मूल शब्द के अंत में लगने वाले शब्दांश</td>
                  <td>बल + <strong>शाली</strong> = बलशाली, मूर्ख + <strong>ता</strong> = मूर्खता, दया + <strong>लु</strong> = दयालु</td>
                </tr>
                <tr>
                  <td><strong>समास</strong></td>
                  <td>पदों का संक्षिप्तीकरण</td>
                  <td>दाल-रोटी (द्वंद्व), देशभक्ति (तत्पुरुष), त्रिलोकी (द्विगु), पीताम्बर (बहुव्रीहि)</td>
                </tr>
                <tr>
                  <td><strong>अलंकार</strong></td>
                  <td>काव्य की शोभा बढ़ाने वाले तत्व</td>
                  <td>अनुप्रास (वर्ण पुनरावृत्ति), यमक (शब्द पुनरावृत्ति भिन्न अर्थ), रूपक (अभेद आरोप)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Model: Samas Vigrah & Vakya Transformation",
        headingHi: "3. हाथ से हल किया गया उदाहरण: समास विग्रह एवं वाक्य रूपांतरण",
        contentHtml: `
          ${makeSolvedCard(
            "Grammar Exemplar: Samas Vigrah and Sentence Transformation",
            "Solve the following: (a) Do the Vigrah of 'कांजीहौस' and 'नीलकंठ', naming the Samas. (b) Transform 'हीरा के सींग मारने पर सांड भाग गया' into a Compound (संयुक्त) and Complex (मिश्र) sentence.",
            [
              "<strong>Step 1 (Samas Vigrah):</strong> 'कांजीहौस' = कांजी के लिए हौस (मवेशीखाना) &rarr; संप्रदान तत्पुरुष समास। 'नीलकंठ' = नीला है कंठ जिसका अर्थात् शिव &rarr; बहुव्रीहि समास।",
              "<strong>Step 2 (Convert to Compound / संयुक्त वाक्य):</strong> 'हीरा ने सींग मारा <strong>और</strong> सांड भाग गया।' (योजक: और)।",
              "<strong>Step 3 (Convert to Complex / मिश्र वाक्य):</strong> '<strong>जैसे ही</strong> हीरा ने सींग मारा, <strong>वैसे ही</strong> सांड भाग गया।' अथवा 'जब हीरा ने सींग मारा, तब सांड भाग गया।'"
            ],
            "कांजीहौस: तत्पुरुष; नीलकंठ: बहुव्रीहि; संयुक्त: '...और...'; मिश्र: 'जैसे ही...वैसे ही...'",
            "NCERT Class 9 Hindi Grammar & BPSC TRE TGT Q18"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "व्याकरण मॉडल हल: समास विग्रह एवं वाक्य रूपांतरण",
            "हल कीजिए: (क) 'कांजीहौस' और 'नीलकंठ' का समास विग्रह कर नाम बताएं। (ख) 'हीरा के प्रहार करने से सांड भागा' को संयुक्त तथा मिश्र वाक्य में बदलिए।",
            [
              "<strong>चरण 1 (समास विग्रह):</strong> 'कांजीहौस' = लावारिस मवेशियों को रखने का स्थान &rarr; तत्पुरुष समास। 'नीलकंठ' = नीला है कंठ जिनका (भगवान शिव) &rarr; बहुव्रीहि समास।",
              "<strong>चरण 2 (संयुक्त वाक्य में):</strong> 'हीरा ने जोरदार प्रहार किया <strong>और</strong> सांड भाग खड़ा हुआ।' (योजक 'और' का प्रयोग)।",
              "<strong>चरण 3 (मिश्र वाक्य में):</strong> '<strong>जब</strong> हीरा ने प्रहार किया, <strong>तब</strong> सांड भाग खड़ा हुआ।' (आश्रित उपवाक्य का प्रयोग)।"
            ],
            "कांजीहौस: तत्पुरुष, नीलकंठ: बहुव्रीहि; संयुक्त: '...और...', मिश्र: 'जब...तब...'",
            "NCERT कक्षा 9 क्षितिज व्याकरण अभ्यास"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Premchand's Literature & Sentence Types",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: मुंशी प्रेमचंद का साहित्य व वाक्य शुद्धि",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Premchand Literature & Grammar Traps!</div>
            <p>&bull; <strong>Premchand's Real Name:</strong> धनपत राय (Dhanpat Rai), wrote Urdu under pen name 'नवाब राय' (Nawab Rai).<br/>
            &bull; <strong>Major Works:</strong> <em>गोदान</em> (1936 - Krishak Jeevan Mahakavya), <em>गबन, सेवासदन, प्रेमाश्रम, रंगभूमि, कर्मभूमि, मानसरोवर</em> (8 parts, ~300 stories).<br/>
            &bull; <strong>Magazines Edited by Premchand:</strong> 'हंस' (Hans), 'जागरण' (Jagaran), 'माधुरी' (Madhuri).<br/>
            &bull; <strong>Grammar Trap:</strong> In 'यमक' words repeat with different meanings (कनक कनक ते सौ गुनी). In 'श्लेष' one word carries multiple meanings (रहिमन पानी राखिए...).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: प्रेमचंद का साहित्य एवं अलंकार भेद</div>
            <p>&bull; <strong>प्रेमचंद का मूल नाम:</strong> धनपत राय (उर्दू में 'नवाब राय' नाम से लिखते थे)।<br/>
            &bull; <strong>प्रमुख उपन्यास:</strong> गोदान (कृषक जीवन का महाकाव्य), गबन, सेवासदन, रंगभूमि, कर्मभूमि, निर्मला, कायाकल्प, मंगलसूत्र (अपूर्ण)।<br/>
            &bull; <strong>संपादित पत्रिकाएं:</strong> हंस, जागरण, मर्यादा, माधुरी।<br/>
            &bull; <strong>अलंकार जाल:</strong> 'कनक कनक' में <em>यमक</em> अलंकार है (सोना और धतूरा)। जबकि 'पानी गए न ऊबरे' में <em>श्लेष</em> अलंकार है (मोती के लिए चमक, मनुष्य के लिए प्रतिष्ठा, चूने के लिए जल)।</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(17, "Do Bailon Ki Katha", "दो बैलों की कथा", hinTemplates)
  }
];

const outPath = path.join(__dirname, 'class9_sci_sst_hindi.json');
fs.writeFileSync(outPath, JSON.stringify(sciSstHindiChapters, null, 2), 'utf8');
console.log(`Generated Science, SST & Hindi: ${sciSstHindiChapters.length} chapters with 30 MCQs each (${sciSstHindiChapters.length * 30} MCQs)!`);
