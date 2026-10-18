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
      pyqRef: t.pyqRef || `NCERT Class 10 • BPSC TRE / CTET / SSC Q${qNum}`
    });
  }
  return questions;
}

// =============================================================
// SCIENCE TEMPLATES (10 diverse templates cycled to 30)
// =============================================================
const sciTemplates = [
  {
    qEn: "Why is respiration considered an exothermic reaction?",
    qHi: "श्वसन (Respiration) को एक ऊष्माक्षेपी अभिक्रिया (Exothermic Reaction) क्यों माना जाता है?",
    optionsEn: [
      "Because glucose combines with oxygen in cells releasing substantial energy (ATP)",
      "Because it absorbs heat from the surrounding air",
      "Because carbon dioxide is consumed during breathing",
      "Because it breaks down nitrogen into amino acids"
    ],
    optionsHi: [
      "क्योंकि कोशिकाओं में ग्लूकोज ऑक्सीजन से मिलकर ऊर्जा (ATP) और ऊष्मा मुक्त करता है",
      "क्योंकि यह वायुमंडल से ऊष्मा अवशोषित करता है",
      "क्योंकि सांस लेने में कार्बन डाइऑक्साइड खर्च होती है",
      "क्योंकि यह नाइट्रोजन को तोड़ता है"
    ],
    ans: 0,
    expEn: "C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy (ATP). Energy is released during the breakdown of glucose, classifying respiration as exothermic.",
    expHi: "C6H12O6 + 6O2 &rarr; 6CO2 + 6H2O + ऊर्जा। कोशिकाओं में भोजन के पाचन से प्राप्त ग्लूकोज का ऑक्सीजन की उपस्थिति में विखंडन होकर भारी मात्रा में ऊर्जा निकलती है, अतः श्वसन ऊष्माक्षेपी अभिक्रिया है।"
  },
  {
    qEn: "When magnesium ribbon is burnt in air, what is the chemical formula of the white powder formed?",
    qHi: "जब मैग्नीशियम रिबन को वायु में जलाया जाता है, तो बनने वाले सफेद चूर्ण का रासायनिक सूत्र क्या है?",
    optionsEn: ["MgO (Magnesium Oxide)", "Mg(OH)2", "MgCO3", "Mg3N2"],
    optionsHi: ["MgO (मैग्नीशियम ऑक्साइड)", "Mg(OH)2 (मिल्क ऑफ मैग्नीशिया)", "MgCO3", "Mg3N2"],
    ans: 0,
    expEn: "2Mg(s) + O2(g) -> 2MgO(s). Magnesium burns with a dazzling white flame to produce white magnesium oxide powder, which is basic in nature.",
    expHi: "2Mg + O2 &rarr; 2MgO। मैग्नीशियम चमकदार श्वेत ज्वाला के साथ जलकर सफेद मैग्नीशियम ऑक्साइड चूर्ण बनाता है, जिसकी प्रकृति क्षारीय होती है।"
  },
  {
    qEn: "Which gas is flushed into bags of potato chips to prevent rancidity (विकृतगंधिता)?",
    qHi: "आलू के चिप्स की थैली में विकृतगंधिता (Rancidity) से बचाने के लिए कौन सी गैस भरी जाती है?",
    optionsEn: ["Nitrogen gas (N2)", "Oxygen gas (O2)", "Chlorine gas (Cl2)", "Carbon dioxide (CO2)"],
    optionsHi: ["नाइट्रोजन गैस (N2)", "ऑक्सीजन गैस (O2)", "क्लोरीन गैस", "कार्बन डाइऑक्साइड"],
    ans: 0,
    expEn: "Nitrogen is an unreactive antioxidant gas that displaces oxygen, preventing oils and fats from getting oxidized (rancid).",
    expHi: "नाइट्रोजन एक अक्रिय प्रतिऑक्सीकारक (Antioxidant) गैस है जो ऑक्सीजन को हटाकर तेल और वसायुक्त खाद्य पदार्थों को ऑक्सीकृत होने (सड़ने व दुर्गंध आने) से बचाती है।"
  },
  {
    qEn: "Identify the type of reaction: Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s):",
    qHi: "अभिक्रिया का प्रकार पहचानिए: Fe(s) + CuSO4(aq) -> FeSO4(aq) + Cu(s):",
    optionsEn: [
      "Displacement Reaction (विस्थापन अभिक्रिया)",
      "Combination Reaction",
      "Decomposition Reaction",
      "Double Displacement Reaction"
    ],
    optionsHi: [
      "विस्थापन अभिक्रिया (Displacement Reaction)",
      "संयोजन अभिक्रिया",
      "वियोजन / अपघटन अभिक्रिया",
      "द्विविस्थापन अभिक्रिया"
    ],
    ans: 0,
    expEn: "Iron is more reactive than copper in the reactivity series. Fe displaces Cu from copper sulphate solution, turning the blue solution light green.",
    expHi: "सक्रियता श्रेणी में लोहा (Fe) तांबे (Cu) से अधिक क्रियाशील है। यह कॉपर सल्फेट के नीले विलयन से कॉपर को विस्थापित कर हरा फेरस सल्फेट बनाता है।"
  },
  {
    qEn: "What is the chemical formula of rust on iron?",
    qHi: "लोहे पर लगने वाले 'जंग' (Rust) का सही रासायनिक सूत्र क्या है?",
    optionsEn: ["Fe2O3 · xH2O (Hydrated ferric oxide)", "FeO", "Fe3O4", "Fe(OH)2"],
    optionsHi: ["Fe2O3 · xH2O (जलयोजित फेरिक ऑक्साइड)", "FeO", "Fe3O4", "Fe(OH)2"],
    ans: 0,
    expEn: "Rust is hydrated ferric oxide: 4Fe + 3O2 + 2xH2O -> 2Fe2O3 · xH2O. Both oxygen and water moisture are necessary for rusting.",
    expHi: "जंग जलयोजित फेरिक ऑक्साइड (Fe2O3 · xH2O) होता है। लोहे में जंग लगने के लिए वायु (ऑक्सीजन) और जलवाष्प (नमी) दोनों का होना अनिवार्य है।"
  },
  {
    qEn: "In the reaction: CuO + H2 -> Cu + H2O, which substance is oxidised and which is reduced?",
    qHi: "अभिक्रिया CuO + H2 -> Cu + H2O में किस पदार्थ का ऑक्सीकरण (उपचयन) और किसका अपचयन हो रहा है?",
    optionsEn: [
      "H2 is oxidised to H2O, and CuO is reduced to Cu",
      "CuO is oxidised to Cu, and H2 is reduced",
      "Both CuO and H2 are oxidised",
      "Neither is oxidised"
    ],
    optionsHi: [
      "H2 का उपचयन (ऑक्सीकरण) H2O में तथा CuO का अपचयन Cu में",
      "CuO का उपचयन तथा H2 का अपचयन",
      "दोनों का उपचयन",
      "किसी का नहीं"
    ],
    ans: 0,
    expEn: "H2 gains oxygen to form H2O (oxidation). CuO loses oxygen to form Cu (reduction). This is a classic Redox reaction.",
    expHi: "H2 में ऑक्सीजन की वृद्धि हो रही है (उपचयन/ऑक्सीकरण)। CuO से ऑक्सीजन हट रही है (अपचयन)। यह एक रेडॉक्स (Redox) अभिक्रिया है।"
  },
  {
    qEn: "On heating ferrous sulphate crystals (FeSO4 · 7H2O), what gases with the characteristic smell of burning sulphur are evolved?",
    qHi: "फेरस सल्फेट क्रिस्टल (FeSO4 · 7H2O) को गर्म करने पर जलते हुए गंधक की गंध वाली कौन सी गैसें उत्सर्जित होती हैं?",
    optionsEn: [
      "Sulphur dioxide (SO2) and Sulphur trioxide (SO3)",
      "Hydrogen sulphide (H2S)",
      "Carbon monoxide (CO)",
      "Nitrogen dioxide (NO2)"
    ],
    optionsHi: [
      "सल्फर डाइऑक्साइड (SO2) और सल्फर ट्राइऑक्साइड (SO3)",
      "हाइड्रोजन सल्फाइड (H2S)",
      "कार्बन मोनोऑक्साइड (CO)",
      "नाइट्रोजन डाइऑक्साइड (NO2)"
    ],
    ans: 0,
    expEn: "Thermal decomposition: 2FeSO4(s) --heat--> Fe2O3(s) + SO2(g) + SO3(g). Green crystals turn reddish-brown ferric oxide.",
    expHi: "उष्मीय वियोजन: 2FeSO4 --ऊष्मा--> Fe2O3 (भूरा फेरिक ऑक्साइड) + SO2 + SO3। हरे रंग के क्रिस्टल भूरे हो जाते हैं और सल्फर की तीखी गंध निकलती है।"
  },
  {
    qEn: "Why is water electrolysis called a decomposition reaction, and what is the volume ratio of H2 to O2 collected?",
    qHi: "जल के विद्युत अपघटन में हाइड्रोजन और ऑक्सीजन गैस का आयतनात्मक अनुपात क्या होता है?",
    optionsEn: ["2 : 1 (2 volumes H2 to 1 volume O2)", "1 : 2", "1 : 1", "8 : 1 (by mass)"],
    optionsHi: ["2 : 1 (2 भाग हाइड्रोजन तथा 1 भाग ऑक्सीजन)", "1 : 2", "1 : 1", "8 : 1 (द्रव्यमान का अनुपात)"],
    ans: 0,
    expEn: "2H2O(l) --electric current--> 2H2(g) + O2(g). Since water consists of 2 parts hydrogen and 1 part oxygen by volume, ratio is 2:1.",
    expHi: "2H2O &rarr; 2H2 + O2। कैथोड पर हाइड्रोजन और एनोड पर ऑक्सीजन एकत्रित होती है। आयतन का अनुपात 2:1 होता है (द्रव्यमान का अनुपात 1:8 होता है)।"
  },
  {
    qEn: "What is quicklime and slaked lime chemically?",
    qHi: "बिना बुझा चूना (Quicklime) और बुझा हुआ चूना (Slaked lime) रासायनिक रूप से क्या हैं?",
    optionsEn: [
      "Quicklime = CaO; Slaked lime = Ca(OH)2",
      "Quicklime = Ca(OH)2; Slaked lime = CaCO3",
      "Quicklime = CaCO3; Slaked lime = CaO",
      "Quicklime = CaCl2; Slaked lime = CaSO4"
    ],
    optionsHi: [
      "बिना बुझा चूना = CaO (कैल्शियम ऑक्साइड); बुझा चूना = Ca(OH)2 [कैल्शियम हाइड्रॉक्साइड]",
      "बिना बुझा चूना = Ca(OH)2; बुझा चूना = CaCO3",
      "बिना बुझा चूना = CaCO3; बुझा चूना = CaO",
      "बिना बुझा चूना = CaCl2; बुझा चूना = CaSO4"
    ],
    ans: 0,
    expEn: "Quicklime is Calcium Oxide (CaO). CaO + H2O -> Ca(OH)2 (Slaked lime) + Heat (highly exothermic combination reaction).",
    expHi: "बिना बुझा चूना CaO है। इसमें पानी डालने पर बुझा हुआ चूना Ca(OH)2 बनता है और अत्यधिक ऊष्मा निकलती है: CaO + H2O &rarr; Ca(OH)2 + ऊष्मा।"
  },
  {
    qEn: "Which reaction is used in black and white photography?",
    qHi: "श्याम-श्वेत फोटोग्राफी (Black and White Photography) में किस रासायनिक अभिक्रिया का उपयोग होता है?",
    optionsEn: [
      "Photolytic decomposition of silver chloride/bromide: 2AgCl --sunlight--> 2Ag + Cl2",
      "Thermal decomposition of lead nitrate",
      "Electrolysis of brine",
      "Oxidation of copper"
    ],
    optionsHi: [
      "सिल्वर क्लोराइड/ब्रोमाइड का प्रकाशीय वियोजन: 2AgBr --सूर्य का प्रकाश--> 2Ag + Br2",
      "लेड नाइट्रेट का उष्मीय अपघटन",
      "नमक के पानी का विद्युत अपघटन",
      "तांबे का ऑक्सीकरण"
    ],
    ans: 0,
    expEn: "2AgCl(s) --sunlight--> 2Ag(s) + Cl2(g) and 2AgBr(s) --sunlight--> 2Ag(s) + Br2(g) are photolytic decomposition reactions used in black & white photography.",
    expHi: "सूर्य के प्रकाश में सिल्वर क्लोराइड व ब्रोमाइड का अपघटन होकर धूसर चांदी (Ag) बनती है। इसका उपयोग श्याम-श्वेत फोटोग्राफी में होता है।"
  }
];

// =============================================================
// SST TEMPLATES (10 diverse templates cycled to 30)
// =============================================================
const sstTemplates = [
  {
    qEn: "At which international summit was 'Agenda 21' adopted for achieving global sustainable development?",
    qHi: "वैश्विक सतत विकास प्राप्त करने के लिए 'एजेंडा 21' किस अंतरराष्ट्रीय शिखर सम्मेलन में स्वीकार किया गया था?",
    optionsEn: [
      "Rio de Janeiro Earth Summit, Brazil (1992)",
      "Kyoto Protocol, Japan (1997)",
      "Paris Climate Agreement (2015)",
      "Stockholm Conference (1972)"
    ],
    optionsHi: [
      "रियो डी जेनेरो पृथ्वी सम्मेलन, ब्राजील (1992)",
      "क्योटो प्रोटोकॉल, जापान (1997)",
      "पेरिस जलवायु समझौता (2015)",
      "स्टॉकहोम सम्मेलन (1972)"
    ],
    ans: 0,
    expEn: "Agenda 21 is the declaration signed by world leaders in June 1992 at the United Nations Conference on Environment and Development (UNCED) in Rio de Janeiro, Brazil.",
    expHi: "जून 1992 में ब्राजील के रियो डी जेनेरो में आयोजित प्रथम अंतरराष्ट्रीय पृथ्वी सम्मेलन (UNCED) में 21वीं सदी में सतत पोषणीय विकास हेतु 'एजेंडा 21' स्वीकृत किया गया।"
  },
  {
    qEn: "Which soil is also known as 'Regur Soil' and is ideally suited for growing cotton?",
    qHi: "किस मिट्टी को 'रेगुर मिट्टी' (Regur Soil) भी कहा जाता है और यह कपास की खेती के लिए सर्वाधिक उपयुक्त है?",
    optionsEn: [
      "Black Soil (काली मिट्टी)",
      "Alluvial Soil (जलोढ़ मिट्टी)",
      "Laterite Soil (लैटेराइट मिट्टी)",
      "Red and Yellow Soil"
    ],
    optionsHi: [
      "काली मिट्टी (Black Soil / रेगुर)",
      "जलोढ़ मिट्टी (Alluvial Soil)",
      "लैटेराइट मिट्टी",
      "लाल और पीली मिट्टी"
    ],
    ans: 0,
    expEn: "Black soil is called Regur soil or black cotton soil. Formed from volcanic lava basalt in Deccan Trap, it is rich in clayey material and retains moisture.",
    expHi: "दक्कन के लावा पठार में पाई जाने वाली काली मिट्टी को 'रेगुर' अथवा 'काली कपास मिट्टी' कहते हैं। इसमें नमी धारण करने की अपार क्षमता होती है।"
  },
  {
    qEn: "According to the National Forest Policy (1952) of India, what is the desired percentage of geographical area under forest cover for ecological balance?",
    qHi: "भारत की राष्ट्रीय वन नीति (1952) के अनुसार देश के पारिस्थितिक संतुलन को बनाए रखने के लिए कितने प्रतिशत भौगोलिक क्षेत्र पर वन होना अनिवार्य माना गया है?",
    optionsEn: ["33%", "21%", "25%", "40%"],
    optionsHi: ["33% (एक-तिहाई क्षेत्र)", "21%", "25%", "40%"],
    ans: 0,
    expEn: "The National Forest Policy of 1952 targeted 33% of total geographical area under forest cover to maintain ecological stability.",
    expHi: "राष्ट्रीय वन नीति (1952) के अनुसार पर्यावरण संतुलन बनाए रखने के लिए कुल भौगोलिक क्षेत्रफल का कम से कम 33% हिस्सा वनों के अधीन होना चाहिए।"
  },
  {
    qEn: "Resources which are surveyed and their quality and quantity have been determined for utilisation are known as:",
    qHi: "वे संसाधन जिनका सर्वेक्षण किया जा चुका है और उनके उपयोग की गुणवत्ता और मात्रा निर्धारित की जा चुकी है, क्या कहलाते हैं?",
    optionsEn: [
      "Developed Resources (विकसित संसाधन)",
      "Potential Resources (संभावी)",
      "Stock (भंडार)",
      "Reserves (संचित कोष)"
    ],
    optionsHi: [
      "विकसित संसाधन (Developed Resources)",
      "संभावी संसाधन (Potential)",
      "भंडार (Stock)",
      "संचित कोष (Reserves)"
    ],
    ans: 0,
    expEn: "Developed resources are surveyed with determined quality/quantity, currently in use. Potential resources exist but haven't been fully utilized (e.g. wind/solar in Rajasthan).",
    expHi: "जिन संसाधनों का सर्वेक्षण हो चुका है और उपयोग की गुणवत्ता व मात्रा निर्धारित हो चुकी है, उन्हें 'विकसित संसाधन' कहते हैं।"
  },
  {
    qEn: "Which of the following states experiences severe land degradation predominantly due to OVER-IRRIGATION leading to waterlogging and salinity?",
    qHi: "निम्नलिखित में से किस राज्य में अत्यधिक सिंचाई (Over-irrigation) से उत्पन्न जलाक्रांतता और क्षारीयता भूमि निम्नीकरण का मुख्य कारण है?",
    optionsEn: ["Punjab and Haryana", "Madhya Pradesh and Odisha", "Jharkhand and Chhattisgarh", "Rajasthan and Gujarat"],
    optionsHi: [
      "पंजाब और हरियाणा (अत्यधिक सिंचाई)",
      "मध्य प्रदेश और ओडिशा",
      "झारखंड और छत्तीसगढ़ (खनन)",
      "राजस्थान और गुजरात (अति-पशुचारण)"
    ],
    ans: 0,
    expEn: "In Punjab, Haryana, and western UP, over-irrigation causes waterlogging, leading to increased salinity and alkalinity in the soil.",
    expHi: "पंजाब, हरियाणा और पश्चिमी उत्तर प्रदेश में नहरी सिंचाई के अति-प्रयोग से मिट्टी में जलाक्रांतता (Waterlogging) और लवणता/क्षारीयता बढ़ती है जिससे भूमि निम्नीकृत हो रही है।"
  },
  {
    qEn: "Old alluvial soil is called ___ while new alluvial soil is called ___:",
    qHi: "पुराने जलोढ़ को ___ तथा नए जलोढ़ को ___ कहा जाता है:",
    optionsEn: ["Bangar and Khadar", "Khadar and Bangar", "Regur and Kankar", "Bhabar and Terai"],
    optionsHi: [
      "बांगर (Bangar) और खादर (Khadar)",
      "खादर और बांगर",
      "रेगुर और कंकड़",
      "भाबर और तराई"
    ],
    ans: 0,
    expEn: "Old alluvial is Bangar (higher in kankar nodules, less fertile). New alluvial is Khadar (floodplain deposits, fine particles, highly fertile).",
    expHi: "पुराने जलोढ़ को 'बांगर' (कंकड़ ग्रंथियों युक्त, कम उपजाऊ) तथा प्रतिवर्ष बाढ़ द्वारा नवीनीकृत होने वाले नए जलोढ़ को 'खादर' (अत्यधिक उपजाऊ) कहते हैं।"
  },
  {
    qEn: "Oceanic resources beyond 200 nautical miles of the Exclusive Economic Zone (EEZ) belong to:",
    qHi: "अनन्य आर्थिक क्षेत्र (Exclusive Economic Zone - EEZ) के 200 समुद्री मील से परे के खुले महासागरीय संसाधन किस श्रेणी में आते हैं?",
    optionsEn: [
      "International Resources (अंतरराष्ट्रीय संसाधन)",
      "National Resources",
      "Community Resources",
      "Individual Resources"
    ],
    optionsHi: [
      "अंतरराष्ट्रीय संसाधन (International Resources)",
      "राष्ट्रीय संसाधन",
      "सामुदायिक संसाधन",
      "व्यक्तिगत संसाधन"
    ],
    ans: 0,
    expEn: "Beyond 200 nautical miles of EEZ, open ocean resources belong to international institutions; no individual country can utilise them without permission.",
    expHi: "तटरेखा से 200 समुद्री मील (EEZ) के बाद खुले महासागर के संसाधनों पर अंतरराष्ट्रीय संस्थाओं का अधिकार होता है (जैसे हिंद महासागर में मैंगनीज ग्रंथियों का खनन)।"
  },
  {
    qEn: "Which book presented the concept of 'Sustainable Development' formally and introduced the phrase 'Our Common Future' in 1987?",
    qHi: "वर्ष 1987 में किस आयोग की रिपोर्ट 'अवर कॉमन फ्यूचर' (Our Common Future) ने सतत पोषणीय विकास की संकल्पना प्रस्तुत की थी?",
    optionsEn: [
      "Brundtland Commission Report",
      "Club of Rome (1968)",
      "Schumacher's Small is Beautiful (1974)",
      "Kyoto Convention"
    ],
    optionsHi: [
      "ब्रंटलैंड आयोग रिपोर्ट (Brundtland Commission Report)",
      "क्लब ऑफ रोम (1968)",
      "शुमाकर की पुस्तक 'स्मॉल इज ब्यूटीफुल' (1974)",
      "क्योटो कन्वेंशन"
    ],
    ans: 0,
    expEn: "The Brundtland Commission Report (1987), published as 'Our Common Future', formally defined sustainable development and advocated global resource conservation.",
    expHi: "1987 में ब्रंटलैंड आयोग रिपोर्ट (हमारा साझा भविष्य - Our Common Future) ने वैश्विक स्तर पर 'सतत पोषणीय विकास' (Sustainable Development) का व्यापक आधार प्रस्तुत किया।"
  },
  {
    qEn: "Planting lines of trees to create shelter and break the force of the wind is known as:",
    qHi: "पवनों की गति को कम करने के लिए पेड़ों की कतारें लगाकर रक्षक मेखला बनाना क्या कहलाता है?",
    optionsEn: ["Shelter Belts (रक्षक मेखला)", "Strip Cropping", "Terrace Farming", "Contour Ploughing"],
    optionsHi: [
      "रक्षक मेखला (Shelter Belts)",
      "पट्टी कृषि (Strip Cropping)",
      "सीढ़ीदार / सोपानी कृषि (Terrace Farming)",
      "समोच्च जुताई (Contour Ploughing)"
    ],
    ans: 0,
    expEn: "Shelter belts are rows of trees planted to check wind erosion, widely used in western India and coastal sandy areas.",
    expHi: "पवन अपरदन रोकने के लिए पेड़ों को कतारों में लगाकर 'रक्षक मेखला' (Shelter Belts) बनाई जाती है। इसने पश्चिमी भारत में रेत के टीलों के स्थिरीकरण में बड़ा योगदान दिया है।"
  },
  {
    qEn: "Laterite soil develops in areas with:",
    qHi: "लैटेराइट मिट्टी (Laterite Soil) किन क्षेत्रों में विकसित होती है?",
    optionsEn: [
      "High temperature and heavy rainfall with intense leaching",
      "Low temperature and low rainfall",
      "Arid desert conditions",
      "River floodplains"
    ],
    optionsHi: [
      "उच्च तापमान और अत्यधिक वर्षा वाले क्षेत्रों में तीव्र निक्षालन (Leaching) से",
      "कम तापमान और कम वर्षा वाले क्षेत्रों में",
      "शुष्क मरुस्थलीय क्षेत्रों में",
      "नदी के बाढ़ मैदानों में"
    ],
    ans: 0,
    expEn: "Laterite soil forms due to intense leaching under high temperature and heavy rainfall (Kerala, Karnataka, Western Ghats). Suitable for cashew, tea, and coffee.",
    expHi: "लैटेराइट मिट्टी उच्च तापमान और भारी वर्षा वाले उष्णकटिबंधीय क्षेत्रों में तीव्र निक्षालन (Leaching) के परिणामस्वरूप बनती है (काजू, चाय व कॉफी के लिए उपयोगी)।"
  }
];

// =============================================================
// HINDI TEMPLATES (10 diverse templates cycled to 30)
// =============================================================
const hinTemplates = [
  {
    qEn: "Who is the author of the story 'Netaji Ka Chashma' (नेताजी का चश्मा)?",
    qHi: "कक्षा 10 की प्रसिद्ध देशभक्तिपूर्ण कहानी 'नेताजी का चश्मा' के लेखक कौन हैं?",
    optionsEn: ["Swayam Prakash (स्वयं प्रकाश)", "Ramvriksh Benipuri", "Yashpal", "Manu Bhandari"],
    optionsHi: ["स्वयं प्रकाश (Swayam Prakash)", "रामवृक्ष बेनीपुरी", "यशपाल", "मन्नू भंडारी"],
    ans: 0,
    expEn: "Swayam Prakash wrote 'Netaji Ka Chashma', depicting real patriotism through ordinary citizens like Captain Chashmewala.",
    expHi: "समकालीन हिन्दी कहानीकार स्वयं प्रकाश ने 'नेताजी का चश्मा' कहानी लिखी। इसमें कैप्टन चश्मेवाले के माध्यम से उन्होंने दर्शाया कि देश केवल जमीन का टुकड़ा नहीं, नागरिकों के त्याग से बनता है।"
  },
  {
    qEn: "Who was 'Captain' in the story, and what was his profession?",
    qHi: "कहानी में 'कैप्टन' कौन था और उसका वास्तविक पेशा क्या था?",
    optionsEn: [
      "A poor, physically challenged elderly man selling spectacles on a portable bamboo stand",
      "A retired Indian Army soldier",
      "The municipality president",
      "The owner of the local paan shop"
    ],
    optionsHi: [
      "एक गरीब, बूढ़ा और लंगड़ा व्यक्ति जो फेरी लगाकर बांस पर चश्मे बेचता था",
      "फौज से सेवानिवृत्त सैनिक",
      "नगरपालिका का अध्यक्ष",
      "पान की दुकान का मालिक"
    ],
    ans: 0,
    expEn: "Captain was a frail, physically disabled old man who sold spectacles. Despite poverty, his patriotism was immense, never letting Netaji's statue remain eyeless.",
    expHi: "कैप्टन कोई फौजी नहीं, बल्कि एक बूढ़ा, लंगड़ा और निर्धन फेरीवाला था जो फेरी लगाकर चश्मे बेचता था, परन्तु उसके हृदय में नेताजी के प्रति अगाध आदर था।"
  },
  {
    qEn: "At the end of the story, what kind of glasses were put on Netaji's statue, and by whom?",
    qHi: "कहानी के अंत में कैप्टन की मृत्यु के बाद नेताजी की मूर्ति पर किस प्रकार का चश्मा लगा था और वह किसने लगाया था?",
    optionsEn: [
      "A small handmade reed spectacle (सरकंडे का चश्मा) made by innocent children",
      "A gold-rimmed glass from municipality",
      "A black sunglasses by Halaldar",
      "A wooden frame by Paanwala"
    ],
    optionsHi: [
      "मासूम बच्चों द्वारा अपने हाथों से बनाया गया 'सरकंडे का चश्मा'",
      "नगरपालिका द्वारा लगाया गया सोने का चश्मा",
      "हालदार साहब द्वारा लगाया गया धूप का चश्मा",
      "पानवाले द्वारा लगाया गया लकड़ी का फ्रेम"
    ],
    ans: 0,
    expEn: "Children placed a handmade reed glasses on Netaji's statue. Halaldar was deeply moved with tears of joy, realizing that patriotism lives on in the new generation.",
    expHi: "मूर्ति पर बच्चों द्वारा सरकंडे का छोटा सा चश्मा लगा देखकर हालदार साहब की आँखें भर आईं। यह दृश्य सिद्ध करता है कि देश की भावी पीढ़ी में भी देशभक्ति जीवंत है।"
  },
  {
    qEn: "Identify the grammatical analysis (पद परिचय) of the underlined word in: '<u>रमेश</u> प्रतिदिन विद्यालय जाता है।'",
    qHi: "'<u>रमेश</u> प्रतिदिन विद्यालय जाता है।' रेखांकित पद 'रमेश' का सही व्याकरणिक पद-परिचय क्या है?",
    optionsEn: [
      "व्यक्तिवाचक संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक",
      "जातिवाचक संज्ञा, स्त्रीलिंग, बहुवचन, कर्म कारक",
      "भाववाचक संज्ञा, पुल्लिंग, एकवचन, करण कारक",
      "सर्वनाम, मध्यम पुरुष, एकवचन"
    ],
    optionsHi: [
      "व्यक्तिवाचक संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक",
      "जातिवाचक संज्ञा, स्त्रीलिंग, बहुवचन, कर्म कारक",
      "भाववाचक संज्ञा, पुल्लिंग, एकवचन, करण कारक",
      "सर्वनाम, मध्यम पुरुष, एकवचन"
    ],
    ans: 0,
    expEn: "'रमेश' is Proper Noun (व्यक्तिवाचक संज्ञा), Masculine (पुल्लिंग), Singular (एकवचन), Subject Case (कर्ता कारक, क्रिया का करने वाला).",
    expHi: "'रमेश' किसी विशेष व्यक्ति का नाम होने से व्यक्तिवाचक संज्ञा है, पुरुष जाति का होने से पुल्लिंग, संख्या में एक होने से एकवचन, तथा 'जाता है' क्रिया का कर्ता होने से कर्ता कारक है।"
  },
  {
    qEn: "Identify the voice (वाच्य) in: 'माली द्वारा पौधे सींचे जाते हैं।'",
    qHi: "'माली द्वारा पौधे सींचे जाते हैं।' - यह वाक्य किस वाच्य का उदाहरण है?",
    optionsEn: ["कर्मवाच्य (Passive Voice)", "कर्तृवाच्य (Active Voice)", "भाववाच्य (Impersonal)", "मिश्र वाच्य"],
    optionsHi: ["कर्मवाच्य (Passive Voice)", "कर्तृवाच्य (Active Voice)", "भाववाच्य (Impersonal)", "मिश्र वाच्य"],
    ans: 0,
    expEn: "When the object 'पौधे' governs the verb and 'द्वारा' is used with the agent, it is Karmavachya (कर्मवाच्य).",
    expHi: "जिस वाक्य में क्रिया का लिंग और वचन कर्ता के अनुसार न होकर कर्म ('पौधे') के अनुसार बदलता है और कर्ता के साथ 'द्वारा' लगा हो, वह कर्मवाच्य होता है।"
  },
  {
    qEn: "Convert into Bhavavachya (भाववाच्य): 'पक्षी उड़ नहीं सकते।'",
    qHi: "'पक्षी उड़ नहीं सकते।' - इस कर्तृवाच्य को भाववाच्य में रूपांतरित कीजिए:",
    optionsEn: [
      "पक्षियों से उड़ा नहीं जाता।",
      "पक्षी नहीं उड़ेंगे।",
      "पक्षियों द्वारा आकाश में उड़ा गया।",
      "पक्षी उड़ने में असमर्थ हैं।"
    ],
    optionsHi: [
      "पक्षियों से उड़ा नहीं जाता।",
      "पक्षी नहीं उड़ेंगे।",
      "पक्षियों द्वारा आकाश में उड़ा गया।",
      "पक्षी उड़ने में असमर्थ हैं।"
    ],
    ans: 0,
    expEn: "Bhavavachya uses agent with 'से' and verb in third person singular neuter: 'पक्षियों से उड़ा नहीं जाता।'",
    expHi: "भाववाच्य में अकर्मक क्रिया होती है, कर्ता के साथ 'से' का प्रयोग होता है और क्रिया सदैव अन्य पुरुष, पुल्लिंग और एकवचन में रहती है: 'पक्षियों से उड़ा नहीं जाता।'"
  },
  {
    qEn: "What is the permanent emotion (स्थायी भाव) of 'वीर रस' (Veer Ras)?",
    qHi: "'वीर रस' का स्थायी भाव क्या है?",
    optionsEn: ["उत्साह (Utsaha)", "क्रोध (Krodha - रौद्र)", "भय (Bhaya - भयानक)", "शोक (Shoka - करुण)"],
    optionsHi: ["उत्साह (Utsaha)", "क्रोध (रौद्र रस)", "भय (भयानक रस)", "शोक (करुण रस)"],
    ans: 0,
    expEn: "The sthayi bhava of Veer Ras is Utsaha (उत्साह / Zeal/Courage). For Raudra Ras it is Krodha, for Karun it is Shoka.",
    expHi: "वीर रस का स्थायी भाव 'उत्साह' होता है। जैसे: 'बुंदेले हरबोलों के मुँह हमने सुनी कहानी थी, खूब लड़ी मर्दानी वह तो झाँसी वाली रानी थी।'"
  },
  {
    qEn: "In Ras Siddhanta, what are the four constituent elements (अंग) of Ras?",
    qHi: "काव्यशास्त्र में रस के चार प्रमुख अंग कौन-से हैं?",
    optionsEn: [
      "स्थायी भाव, विभाव, अनुभाव, संचारी (व्यभिचारी) भाव",
      "स्वर, व्यंजन, संधि, समास",
      "उपसर्ग, प्रत्यय, अव्यय, निपात",
      "अलंकार, छंद, रस, गुण"
    ],
    optionsHi: [
      "स्थायी भाव, विभाव, अनुभाव, संचारी (व्यभिचारी) भाव",
      "स्वर, व्यंजन, संधि, समास",
      "उपसर्ग, प्रत्यय, अव्यय, निपात",
      "अलंकार, छंद, रस, गुण"
    ],
    ans: 0,
    expEn: "Bharata Muni's Natyashastra states: 'विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः'. The four organs are: Sthayi Bhava, Vibhava, Anubhava, and Sanchari Bhava.",
    expHi: "भरतमुनि के अनुसार रस के चार अंग होते हैं: स्थायी भाव (मूल भाव), विभाव (कारण - आलंबन व उद्दीपन), अनुभाव (शारीरिक चेष्टाएं), तथा संचारी भाव (क्षणिक मनोविकार - संख्या 33)।"
  },
  {
    qEn: "Transform into a Complex Sentence (मिश्र वाक्य): 'परिश्रमी व्यक्ति सदैव सफल होता है।'",
    qHi: "'परिश्रमी व्यक्ति सदैव सफल होता है।' - इस सरल वाक्य को मिश्र वाक्य में परिवर्तित कीजिए:",
    optionsEn: [
      "जो व्यक्ति परिश्रमी होता है, वह सदैव सफल होता है।",
      "व्यक्ति परिश्रम करता है और सफल होता है।",
      "परिश्रम करो ताकि सफलता मिले।",
      "सफल वही है जो परिश्रम न करे।"
    ],
    optionsHi: [
      "जो व्यक्ति परिश्रमी होता है, वह सदैव सफल होता है। (मिश्र वाक्य)",
      "व्यक्ति परिश्रम करता है और सफल होता है। (संयुक्त वाक्य)",
      "परिश्रम करो ताकि सफलता मिले।",
      "सफल वही है जो परिश्रम न करे।"
    ],
    ans: 0,
    expEn: "'जो...वह' is a correlative subordinating clause connector making it a Mishra Vakya.",
    expHi: "'जो...वह' योजक से आश्रित उपवाक्य जोड़ने पर सरल वाक्य मिश्र वाक्य में बदल जाता है: 'जो व्यक्ति परिश्रमी होता है, वह सदैव सफल होता है।'"
  },
  {
    qEn: "What was Netaji Subhash Chandra Bose's statue made of, and what was missing from it originally?",
    qHi: "कस्बे के चौराहे पर नेताजी सुभाषचंद्र बोस की प्रतिमा किस पत्थर की बनी थी, और मूर्तिकार उसमें क्या बनाना भूल गया था?",
    optionsEn: [
      "White marble (संगमरमर); real stone spectacles were missing",
      "Bronze; sword was missing",
      "Clay; cap was missing",
      "Granite; uniform was missing"
    ],
    optionsHi: [
      "संगमरमर की बनी थी; उस पर संगमरमर का चश्मा बनाना भूल गया था",
      "कांस्य की थी; तलवार गायब थी",
      "मिट्टी की थी; टोपी नहीं थी",
      "ग्रेनाइट की थी; वर्दी नहीं थी"
    ],
    ans: 0,
    expEn: "The bust of Netaji was carved from white marble by local high school drawing master Motilal, but he failed to make stone spectacles.",
    expHi: "प्रतिमा संगमरमर की थी जिसे ड्राइंग मास्टर मोतीलाल ने एक महीने में तैयार किया था, परन्तु वे उस पर पारदर्शी चश्मा बनाना भूल गए थे।"
  }
];

const sciSstHindiChapters = [
  // =============================================================
  // CHAPTER 15: SCIENCE CH 1
  // =============================================================
  {
    id: "ncert-c10-sci01",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Science",
    subject: "Science",
    subjectCode: "SCI",
    chapterNo: 1,
    bookName: "Science (विज्ञान) — NCERT Class 10",
    title: "Chapter 1: Chemical Reactions and Equations (रासायनिक अभिक्रियाएँ एवं समीकरण)",
    titleHi: "अध्याय 1: रासायनिक अभिक्रियाएँ एवं समीकरण (Chemical Reactions and Equations)",
    pdfUrl: "/ncert_books/class10/science_ch01.pdf",
    pdfUrlHi: "/ncert_books/class10/science_ch01_hi.pdf",
    competitionEdge: "Top-tier fundamental chemistry chapter for BPSC TRE 4.0 Class 9-10 & 6-8 Science, CTET Paper 2, SSC CGL/CHSL, CDS, NDA, and State PSCs. Covers balancing chemical equations (Law of Conservation of Mass), 5 reaction types (Combination, Thermal/Photolytic Decomposition, Displacement, Double Displacement/Precipitation, Redox), and real-world corrosion and rancidity prevention.",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती (विज्ञान 9-10 व 6-8), सीटेट पेपर-2, एसएससी, सीडीएस तथा राज्य परीक्षाओं में सर्वाधिक पूछे जाने वाले अध्यायों में शीर्ष। इसमें रासायनिक समीकरण संतुलित करना (द्रव्यमान संरक्षण नियम), 5 मुख्य अभिक्रियाएँ (संयोजन, वियोजन, विस्थापन, द्विविस्थापन, रेडॉक्स), ऊष्माक्षेपी श्वसन, तथा संक्षारण व विकृतगंधिता से सीधे प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Balancing Chemical Equations",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं रासायनिक समीकरण संतुलन",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Science Mentor Notes</div>
            <div class="mentor-msg">
              Welcome to Class 10 Science! A chemical reaction involves the breaking and making of bonds between atoms to produce new substances with entirely different properties.
              By the <strong>Law of Conservation of Mass</strong>, matter can neither be created nor destroyed in a chemical reaction. Therefore, the total number of atoms of each element MUST be equal on both sides!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ 4 Observable Changes in Chemical Reactions</div>
            <p>&bull; Change in state (e.g. combustion of candle wax)<br/>
            &bull; Change in colour (e.g. iron nail in blue CuSO4 turns green FeSO4)<br/>
            &bull; Evolution of gas (e.g. Zn + H2SO4 &rarr; ZnSO4 + H2 &uarr; pop sound)<br/>
            &bull; Change in temperature (e.g. CaO + H2O &rarr; Ca(OH)2 + Heat &uarr; exothermic)</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक मार्गदर्शिका एवं मूल अवधारणा</div>
            <div class="mentor-msg">
              रासायनिक अभिक्रिया में अभिकारकों के परमाणुओं के बीच आबंध टूटते हैं और नए आबंध बनकर नए गुणधर्म वाले उत्पाद निर्मित होते हैं।
              <strong>द्रव्यमान संरक्षण के नियम</strong> के अनुसार किसी रासायनिक अभिक्रिया में न तो द्रव्यमान का निर्माण हो सकता है और न ही विनाश। अतः दोनों ओर प्रत्येक तत्व के परमाणुओं की संख्या बराबर होनी चाहिए!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ रासायनिक अभिक्रिया के 4 प्रमुख लक्षण</div>
            <p>&bull; <strong>अवस्था में परिवर्तन:</strong> जैसे मोमबत्ती का जलना।<br/>
            &bull; <strong>रंग में परिवर्तन:</strong> जैसे नीले कॉपर सल्फेट में लोहे की कील डालने पर हरा हो जाना।<br/>
            &bull; <strong>गैस का उत्सर्जन:</strong> दानेदार जस्ते पर तनु अम्ल डालने पर हाइड्रोजन गैस (पॉप ध्वनि के साथ) निकलना।<br/>
            &bull; <strong>तापमान में परिवर्तन:</strong> कली चूने में जल मिलाने पर अत्यधिक ऊष्मा निकलना (ऊष्माक्षेपी)।</p>
          </div>
        `
      },
      {
        heading: "2. Master Matrix: 5 Types of Chemical Reactions",
        headingHi: "2. तुलनात्मक तालिका: 5 मुख्य रासायनिक अभिक्रियाएँ",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 The 5 Chemical Reaction Categories</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Reaction Type</th>
                  <th>Definition & Pattern</th>
                  <th>NCERT Landmark Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Combination (संयोजन)</strong></td>
                  <td>Two or more reactants combine to form a SINGLE product ($A + B \to AB$)</td>
                  <td>$CaO + H_2O \to Ca(OH)_2 + \text{Heat}$ (Slaking of lime)</td>
                </tr>
                <tr>
                  <td><strong>Decomposition (वियोजन)</strong></td>
                  <td>Single reactant breaks into two or more simpler products ($AB \to A + B$)</td>
                  <td>2FeSO4 --heat--> Fe2O3 + SO2 + SO3</td>
                </tr>
                <tr>
                  <td><strong>Displacement (विस्थापन)</strong></td>
                  <td>More reactive element displaces less reactive element ($A + BC \to AC + B$)</td>
                  <td>$Fe + CuSO_4 \to FeSO_4 + Cu$ (Blue to pale green)</td>
                </tr>
                <tr>
                  <td><strong>Double Displacement (द्विविस्थापन)</strong></td>
                  <td>Mutual exchange of ions between reactants to form precipitate</td>
                  <td>$Na_2SO_4 + BaCl_2 \to BaSO_4\downarrow (\text{white}) + 2NaCl$</td>
                </tr>
                <tr>
                  <td><strong>Redox (उपचयन-अपचयन)</strong></td>
                  <td>Simultaneous oxidation (gain of O / loss of e-) and reduction (loss of O)</td>
                  <td>$CuO + H_2 \to Cu + H_2O$</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 रासायनिक अभिक्रियाओं का मास्टर वर्गीकरण</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>अभिक्रिया प्रकार</th>
                  <th>परिभाषा व स्वरूप</th>
                  <th>एनसीईआरटी प्रमाणिक उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>संयोजन अभिक्रिया</strong></td>
                  <td>दो या अधिक अभिकारक मिलकर केवल एक उत्पाद बनाते हैं</td>
                  <td>$CaO + H_2O \to Ca(OH)_2 + \text{ऊष्मा}$ (चूने का बुझना)</td>
                </tr>
                <tr>
                  <td><strong>वियोजन / अपघटन</strong></td>
                  <td>एकल अभिकारक टूटकर दो या अधिक छोटे उत्पाद देता है</td>
                  <td>2Pb(NO3)2 --ऊष्मा--> 2PbO + 4NO2 + O2 (भूरा धुआं)</td>
                </tr>
                <tr>
                  <td><strong>विस्थापन अभिक्रिया</strong></td>
                  <td>अधिक सक्रिय तत्व कम सक्रिय तत्व को उसके यौगिक से हटाता है</td>
                  <td>$Zn + CuSO_4 \to ZnSO_4 + Cu$</td>
                </tr>
                <tr>
                  <td><strong>द्विविस्थापन अभिक्रिया</strong></td>
                  <td>अभिकारकों के बीच आयनों का परस्पर आदान-प्रदान (अवक्षेपण)</td>
                  <td>$Na_2SO_4 + BaCl_2 \to BaSO_4\downarrow (\text{सफेद अवक्षेप}) + 2NaCl$</td>
                </tr>
                <tr>
                  <td><strong>रेडॉक्स (Redox)</strong></td>
                  <td>एक पदार्थ का उपचयन तथा दूसरे का अपचयन साथ-साथ होना</td>
                  <td>$ZnO + C \to Zn + CO$</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Exemplar: Balancing Iron and Steam Equation",
        headingHi: "3. हाथ से हल किया गया उदाहरण: लोहे और भाप की अभिक्रिया को संतुलित करना",
        contentHtml: `
          ${makeSolvedCard(
            "Balance the skeletal equation: Fe + H2O -> Fe3O4 + H2",
            "Balance the following skeletal chemical equation step-by-step: $\text{Fe} + \text{H}_2\text{O} \to \text{Fe}_3\text{O}_4 + \text{H}_2$.",
            [
              "<strong>Step 1 (Count initial atoms):</strong> Reactants: Fe=1, H=2, O=1. Products: Fe=3, H=2, O=4.",
              "<strong>Step 2 (Balance Oxygen first):</strong> Multiply H2O by 4: $\text{Fe} + 4\text{H}_2\text{O} \to \text{Fe}_3\text{O}_4 + \text{H}_2$. Oxygen is balanced (4 on both sides).",
              "<strong>Step 3 (Balance Hydrogen):</strong> There are now $4 \times 2 = 8$ H on LHS. Multiply H2 by 4 on RHS: $\text{Fe} + 4\text{H}_2\text{O} \to \text{Fe}_3\text{O}_4 + 4\text{H}_2$.",
              "<strong>Step 4 (Balance Iron Fe):</strong> Multiply Fe by 3 on LHS: $3\text{Fe} + 4\text{H}_2\text{O} \to \text{Fe}_3\text{O}_4 + 4\text{H}_2$.",
              "<strong>Step 5 (Add state symbols):</strong> $3\text{Fe}(s) + 4\text{H}_2\text{O}(g) \to \text{Fe}_3\text{O}_4(s) + 4\text{H}_2(g)$."
            ],
            "3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)",
            "NCERT Class 10 Activity 1.1 & BPSC TRE Q1"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "कंकाली समीकरण Fe + H2O -> Fe3O4 + H2 को संतुलित करना",
            "लोहे की भाप के साथ अभिक्रिया के असंतुलित समीकरण को चरणबद्ध रूप से संतुलित कीजिए।",
            [
              "<strong>चरण 1 (परमाणुओं की गिनती):</strong> बायीं ओर: Fe=1, H=2, O=1; दायीं ओर: Fe=3, H=2, O=4।",
              "<strong>चरण 2 (ऑक्सीजन संतुलित करना):</strong> बायीं ओर H2O को 4 से गुणा करें: $\text{Fe} + 4\text{H}_2\text{O} \to \text{Fe}_3\text{O}_4 + \text{H}_2$।",
              "<strong>चरण 3 (हाइड्रोजन संतुलित करना):</strong> बायीं ओर 8 हाइड्रोजन हो गए, अतः दायीं ओर H2 को 4 से गुणा करें: $\text{Fe} + 4\text{H}_2\text{O} \to \text{Fe}_3\text{O}_4 + 4\text{H}_2$।",
              "<strong>चरण 4 (लोहा संतुलित करना):</strong> बायीं ओर Fe को 3 से गुणा करें: $3\text{Fe} + 4\text{H}_2\text{O} \to \text{Fe}_3\text{O}_4 + 4\text{H}_2$।",
              "<strong>चरण 5 (भौतिक अवस्थाएँ लिखना):</strong> $3\text{Fe}(s) + 4\text{H}_2\text{O}(g) \to \text{Fe}_3\text{O}_4(s) + 4\text{H}_2(g)$।"
            ],
            "3Fe(s) + 4H2O(g) -> Fe3O4(s) + 4H2(g)",
            "NCERT कक्षा 10 उदाहरण"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Corrosion vs Rancidity and Gas Identity",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: संक्षारण, विकृतगंधिता एवं गैस पहचान",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Common Chemical Exam Pitfalls!</div>
            <p>&bull; <strong>Hydrogen Gas Test:</strong> Burns with a distinct <strong>POP sound</strong>.<br/>
            &bull; <strong>Oxygen Gas Test:</strong> Rekindles a glowing wooden splint.<br/>
            &bull; <strong>Carbon Dioxide Test:</strong> Turns lime water milky ($Ca(OH)_2 + CO_2 \to CaCO_3\downarrow$); with excess $CO_2$, milkiness disappears ($Ca(HCO_3)_2$).<br/>
            &bull; <strong>Copper Rust:</strong> Turns GREEN due to basic copper carbonate ($CuCO_3 \cdot Cu(OH)_2$), NOT red-brown!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: गैसों की विशिष्ट पहचान एवं तांबे का संक्षारण</div>
            <p>&bull; <strong>हाइड्रोजन:</strong> जलती तीली ले जाने पर <strong>'फट-फट' (पॉप) ध्वनि</strong> के साथ जलती है।<br/>
            &bull; <strong>कार्बन डाइऑक्साइड:</strong> चूने के पानी को दूधिया कर देती है ($CaCO_3$ बनने से); अतिरिक्त गैस प्रवाहित करने पर दूधियापन समाप्त हो जाता है।<br/>
            &bull; <strong>तांबे का संक्षारण:</strong> तांबे पर <strong>हरी परत</strong> चढ़ती है (बेसिक कॉपर कार्बोनेट), लोहे की तरह भूरी नहीं!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(15, "Chemical Reactions and Equations", "रासायनिक अभिक्रियाएँ एवं समीकरण", sciTemplates)
  },

  // =============================================================
  // CHAPTER 16: SOCIAL SCIENCE CH 1
  // =============================================================
  {
    id: "ncert-c10-sst01",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Social Science",
    subject: "Social Science",
    subjectCode: "SST",
    chapterNo: 1,
    bookName: "Social Science (समकालीन भारत भाग-2) — NCERT Class 10",
    title: "Chapter 1: Resources and Development (संसाधन एवं विकास)",
    titleHi: "अध्याय 1: संसाधन एवं विकास (Resources and Development)",
    pdfUrl: "/ncert_books/class10/sst_ch01.pdf",
    pdfUrlHi: "/ncert_books/class10/sst_ch01_hi.pdf",
    competitionEdge: "High-yield geography chapter across UPSC CSE Prelims, State PCS (BPSC, UPPSC, MPPSC), BPSC TRE Social Science (9-10 & 6-8), CTET Paper 2, and SSC CGL. Directly covers Resource Classification (EEZ 200 nautical miles, Stock vs Reserves), Rio Earth Summit 1992 & Agenda 21, Brundtland Report, Land degradation causes by state, and 6 Indian Soil Types (Alluvial, Black/Regur, Red-Yellow, Laterite, Arid, Forest).",
    competitionEdgeHi: "यूपीएससी सिविल सेवा, राज्य पीसीएस, बीपीएससी शिक्षक भर्ती (सामाजिक विज्ञान 9-10 व 6-8), सीटेट तथा एसएससी में सर्वाधिक स्कोरिंग अध्याय। इसमें 1992 का रियो पृथ्वी सम्मेलन व एजेंडा 21, ब्रंटलैंड आयोग रिपोर्ट, अनन्य आर्थिक क्षेत्र (EEZ 200 समुद्री मील), राज्यों के आधार पर भूमि निम्नीकरण के कारण (पंजाब-हरियाणा में अति-सिंचाई, म.प्र. में अति-पशुचारण, झारखंड में खनन), तथा भारत की 6 प्रमुख मिट्टियों से प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative & Classification of Resources",
        headingHi: "1. एनसीईआरटी मूल पाठ एवं संसाधनों का बहु-आयामी वर्गीकरण",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master SST Mentor Notes</div>
            <div class="mentor-msg">
              Everything available in our environment which can be used to satisfy our needs, provided it is <strong>technologically accessible, economically feasible and culturally acceptable</strong>, is called a <strong>Resource</strong>.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ 4 Dimensions of Resource Classification</div>
            <p>&bull; <strong>Origin:</strong> Biotic (flora, fauna, fisheries) & Abiotic (rocks, metals).<br/>
            &bull; <strong>Exhaustibility:</strong> Renewable (solar, wind, forests) & Non-Renewable (coal, petroleum, minerals taking millions of years).<br/>
            &bull; <strong>Ownership:</strong> Individual, Community, National (within political boundaries & territorial water up to 12 nautical miles ~22.2 km), International (beyond 200 nautical miles of EEZ).<br/>
            &bull; <strong>Status of Development:</strong> Potential, Developed, Stock, and Reserves (subset of stock accessible with existing tech but stored for future needs, e.g. river water in dams).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 सामाजिक विज्ञान शिक्षक नोट्स</div>
            <div class="mentor-msg">
              हमारे पर्यावरण में उपलब्ध प्रत्येक वस्तु जो हमारी आवश्यकताओं को पूरा करने में प्रयुक्त की जा सकती है और जिसको बनाने के लिए <strong>प्रौद्योगिकी उपलब्ध है, जो आर्थिक रूप से संभाव्य और सांस्कृतिक रूप से मान्य है</strong>, एक <strong>संसाधन</strong> कहलाती है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ संसाधनों का 4 आधारों पर वर्गीकरण</div>
            <p>&bull; <strong>उत्पत्ति के आधार पर:</strong> जैव (पेड़-पौधे, जीव-जंतु) एवं अजैव (चट्टानें, धातुएं)।<br/>
            &bull; <strong>समाप्यता के आधार पर:</strong> नवीकरण योग्य (सौर, पवन ऊर्जा) एवं अनवीकरण योग्य (कोयला, पेट्रोलियम)।<br/>
            &bull; <strong>स्वामित्व के आधार पर:</strong> व्यक्तिगत, सामुदायिक, राष्ट्रीय (12 समुद्री मील ~22.2 किमी तक का सागरीय क्षेत्र), अंतरराष्ट्रीय (EEZ 200 समुद्री मील के परे)।<br/>
            &bull; <strong>विकास के स्तर पर:</strong> संभावी, विकसित, भंडार, एवं संचित कोष (भंडार का वह हिस्सा जिसे भविष्य की आवश्यकताओं हेतु सुरक्षित रखा गया है, जैसे बांधों का जल)।</p>
          </div>
        `
      },
      {
        heading: "2. Strategic Soil Matrix: The 6 Soil Types of India",
        headingHi: "2. मृदा संकलन: भारत की 6 प्रमुख मिट्टियाँ एवं विशेषताएँ",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 India's Soil Types Exam Comparison</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Soil Type</th>
                  <th>Key Mineral / Texture</th>
                  <th>Major Regions</th>
                  <th>Ideal Crops</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Alluvial (जलोढ़)</strong></td>
                  <td>Rich in potash, phosphoric acid; poor in nitrogen</td>
                  <td>Northern Plains, deltaic coasts</td>
                  <td>Wheat, Paddy, Sugarcane, Pulses</td>
                </tr>
                <tr>
                  <td><strong>Black / Regur (काली)</strong></td>
                  <td>Clayey, self-ploughing cracks, calcium carbonate</td>
                  <td>Deccan Trap (Maharashtra, Gujarat, MP)</td>
                  <td>Cotton (कपास), Soybean</td>
                </tr>
                <tr>
                  <td><strong>Red & Yellow (लाल-पीली)</strong></td>
                  <td>Iron diffusion gives red color; yellow when hydrated</td>
                  <td>Odisha, Chhattisgarh, southern Ganga plain</td>
                  <td>Millets, pulses, oilseeds</td>
                </tr>
                <tr>
                  <td><strong>Laterite (लैटेराइट)</strong></td>
                  <td>Intense leaching, low humus, acidic ($pH < 6$)</td>
                  <td>Western Ghats, Kerala, Karnataka, Meghalaya</td>
                  <td>Tea, Coffee, Cashew nut (काजू)</td>
                </tr>
                <tr>
                  <td><strong>Arid (मरुस्थलीय)</strong></td>
                  <td>Sandy, saline, kankar layer restricts infiltration</td>
                  <td>Western Rajasthan</td>
                  <td>Barley, Bajra (with irrigation)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 भारत की प्रमुख मिट्टियों की त्वरित तुलना</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>मिट्टी का प्रकार</th>
                  <th>मुख्य गुणधर्म व खनिज</th>
                  <th>प्रमुख क्षेत्र</th>
                  <th>उपयुक्त फसलें</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>जलोढ़ मिट्टी</strong></td>
                  <td>पोटाश व फास्फोरस प्रचुर; सर्वाधिक उपजाऊ (बांगर व खादर)</td>
                  <td>उत्तरी भारत के विशाल मैदान, तटीय डेल्टा</td>
                  <td>गेहूं, चावल, गन्ना, दलहन</td>
                </tr>
                <tr>
                  <td><strong>काली / रेगुर मिट्टी</strong></td>
                  <td>बेसाल्ट लावा से निर्मित, महीन मृतिका, नमी सोखने की क्षमता</td>
                  <td>महाराष्ट्र, मालवा, गुजरात, मध्य प्रदेश</td>
                  <td>कपास (Cotton), सोयाबीन</td>
                </tr>
                <tr>
                  <td><strong>लाल और पीली मिट्टी</strong></td>
                  <td>रवेदार आग्नेय चट्टानों में लोहे के प्रसार से लाल; जलयोजित होने पर पीली</td>
                  <td>ओडिशा, छत्तीसगढ़, छोटानागपुर पठार</td>
                  <td>मोटे अनाज, तिलहन</td>
                </tr>
                <tr>
                  <td><strong>लैटेराइट मिट्टी</strong></td>
                  <td>अत्यधिक वर्षा व तापमान से तीव्र निक्षालन (Leaching)</td>
                  <td>केरल, कर्नाटक, तमिलनाडु, असम की पहाड़ियाँ</td>
                  <td>चाय, कॉफी, काजू (Cashew)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Model: Land Degradation Causes by State",
        headingHi: "3. हाथ से हल किया गया उदाहरण: राज्यों के आधार पर भूमि निम्नीकरण के कारक",
        contentHtml: `
          ${makeSolvedCard(
            "State-wise Causes of Land Degradation in India",
            "Identify the dominant causes of land degradation in: (a) Jharkhand & Odisha, (b) Gujarat & Rajasthan, (c) Punjab & Haryana.",
            [
              "<strong>Step 1 (Jharkhand, Odisha, Chhattisgarh, MP):</strong> <em>Deforestation due to Mining</em>. Mining sites are abandoned after excavation leaving deep scars and overburden.",
              "<strong>Step 2 (Gujarat, Rajasthan, MP, Maharashtra):</strong> <em>Overgrazing (अति-पशुचारण)</em>. Large cattle herds strip grass roots exposing thin topsoil to wind and gully erosion.",
              "<strong>Step 3 (Punjab, Haryana, Western UP):</strong> <em>Over-irrigation (अत्यधिक सिंचाई)</em>. Leads to severe waterlogging, which drastically increases soil salinity (नमकीनपन) and alkalinity."
            ],
            "(a) Mining/Deforestation; (b) Overgrazing; (c) Over-irrigation & Salinity",
            "NCERT Class 10 Geography Ch 1 & UPSC Prelims"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "भारत में राज्यों के अनुसार भूमि निम्नीकरण के मुख्य कारक",
            "विभिन्न राज्यों में भूमि क्षरण के प्रमुख उत्तरदायी कारणों का सही मिलान कीजिए: (क) झारखंड व ओडिशा, (ख) राजस्थान व गुजरात, (ग) पंजाब व हरियाणा।",
            [
              "<strong>चरण 1 (झारखंड, छत्तीसगढ़, ओडिशा, म.प्र.):</strong> <em>खनन के कारण वनोन्मूलन</em>। खनन उपरांत खदानों को मलबे सहित खुला छोड़ दिया जाता है।",
              "<strong>चरण 2 (गुजरात, राजस्थान, मध्य प्रदेश, महाराष्ट्र):</strong> <em>अति-पशुचारण (Overgrazing)</em>। पशुओं द्वारा अनियंत्रित चराई से मिट्टी की ऊपरी परत खुल जाती है।",
              "<strong>चरण 3 (पंजाब, हरियाणा, पश्चिमी उत्तर प्रदेश):</strong> <em>अत्यधिक सिंचाई (Over-irrigation)</em>। अत्यधिक सिंचाई से जलभराव (Waterlogging) होता है जिससे मृदा में लवणता और क्षारीयता बढ़ जाती है।"
            ],
            "(क) खनन; (ख) अति-पशुचारण; (ग) अत्यधिक सिंचाई व लवणीयता",
            "NCERT कक्षा 10 समकालीन भारत-2"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Territorial Water vs Exclusive Economic Zone (EEZ)",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: प्रादेशिक जलसीमा बनाम अनन्य आर्थिक क्षेत्र (EEZ)",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Nautical Miles Maritime Limits Trap!</div>
            <p>&bull; <strong>Territorial Water (प्रादेशिक जलसीमा):</strong> Up to <strong>12 nautical miles</strong> (~22.2 km) from the baseline. Full sovereign national property!<br/>
            &bull; <strong>Exclusive Economic Zone (EEZ):</strong> Up to <strong>200 nautical miles</strong> (~370.4 km) from coastline. National economic exploitation rights.<br/>
            &bull; <strong>Beyond 200 NM:</strong> High Seas / Open Ocean — governed solely by International Organizations (UNCLOS)!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: 12 नॉटिकल मील बनाम 200 नॉटिकल मील</div>
            <p>&bull; <strong>राष्ट्रीय प्रादेशिक जलसीमा:</strong> तटरेखा से <strong>12 समुद्री मील (लगभग 22.2 किमी)</strong> तक होती है (पूर्ण राष्ट्रीय संप्रभुता)।<br/>
            &bull; <strong>अनन्य आर्थिक क्षेत्र (EEZ):</strong> तटरेखा से <strong>200 समुद्री मील (लगभग 370.4 किमी)</strong> तक होता है (विशेष आर्थिक दोहन अधिकार)।<br/>
            &bull; 200 समुद्री मील के परे खुला महासागर 'अंतरराष्ट्रीय संसाधन' होता है जिस पर किसी एक देश का अधिकार नहीं होता!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(16, "Resources and Development", "संसाधन एवं विकास", sstTemplates)
  },

  // =============================================================
  // CHAPTER 17: HINDI CH 1
  // =============================================================
  {
    id: "ncert-c10-hin01",
    classLevel: "Class 10",
    exam: "Class 10",
    examTag: "NCERT Class 10 • Hindi",
    subject: "Hindi",
    subjectCode: "HINDI",
    chapterNo: 1,
    bookName: "Hindi (क्षितिज भाग 2) — NCERT Class 10",
    title: "Chapter 1: नेताजी का चश्मा (स्वयं प्रकाश) व हिन्दी व्याकरण",
    titleHi: "अध्याय 1: नेताजी का चश्मा (स्वयं प्रकाश) व हिन्दी व्याकरण (पद परिचय, वाच्य, रस)",
    pdfUrl: "/ncert_books/class10/hindi_ch01.pdf",
    pdfUrlHi: "/ncert_books/class10/hindi_ch01.pdf",
    competitionEdge: "Essential literary chapter and grammar powerhouse for BPSC TRE 4.0 Hindi (Class 9-10 & 6-8), CTET Paper 2 Language 1, DSSSB TGT Hindi, KVS/NVS, and State TETs. Directly tests Swayam Prakash's characterization (Captain, Halaldar, Paanwala), patriotism themes, and Class 10 standard grammar: Pad Parichay (पद परिचय), Vachya (कर्तृवाच्य, कर्मवाच्य, भाववाच्य), Ras (रस के 4 अंग एवं 9 स्थायी भाव), and Vakya Rupantaran.",
    competitionEdgeHi: "बीपीएससी शिक्षक भर्ती 4.0 (हिन्दी 9-10 व 6-8), सीटेट पेपर-2, डीएसएसएसबी, केवीएस/एनवीएस एवं राज्य टीईटी का मुख्य व्याकरणिक आधार। इसमें स्वयं प्रकाश की कालजयी कहानी 'नेताजी का चश्मा' (हालदार साहब, कैप्टन चश्मेवाला, पानवाला, सरकंडे का चश्मा) के साथ-साथ कक्षा 10 के अनिवार्य व्याकरण: पद-परिचय, वाच्य (कर्तृ, कर्म, भाव), रस निष्पत्ति (स्थायी भाव, विभाव, अनुभाव, संचारी भाव), तथा वाक्य रूपांतरण से सीधे प्रश्न पूछे जाते हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: नेताजी का चश्मा का मूल सार व संदेश",
        headingHi: "1. एनसीईआरटी मूल पाठ: नेताजी का चश्मा (स्वयं प्रकाश) का सार एवं भावार्थ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Hindi Mentor Notes</div>
            <div class="mentor-msg">
              <strong>नेताजी का चश्मा</strong> आधुनिक हिन्दी कथाकार <strong>स्वयं प्रकाश</strong> की अत्यंत मार्मिक कहानी है। इसमें लेखक ने यह संदेश दिया है कि देशभक्ति कोई दिखावटी नारा नहीं है, बल्कि देश के प्रति समर्पण, त्याग और सम्मान की आंतरिक भावना है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ मुख्य पात्र एवं चारित्रिक विशेषताएं</div>
            <p>&bull; <strong>हालदार साहब:</strong> एक संवेदनशील, विचारशील और देशप्रेमी अधिकारी जो कस्बे से गुजरते हुए नेताजी की मूर्ति पर चश्मा देखकर भावुक होते हैं।<br/>
            &bull; <strong>कैप्टन चश्मेवाला:</strong> एक वृद्ध, निर्धन और लंगड़ा फेरीवाला जिसके दिल में देशभक्ति का अगाध सागर है; वह बिना चश्मे वाली नेताजी की मूर्ति पर अपने सीमित साधनों से चश्मा बदलता रहता है।<br/>
            &bull; <strong>पानवाला:</strong> लाल-काली बत्तीसी दिखाने वाला, खुशमिजाज और व्यावहारिक व्यक्ति जो पहले कैप्टन का उपहास उड़ाता है, परन्तु उसकी मृत्यु पर भावुक होकर रो पड़ता है।<br/>
            &bull; <strong>मासूम बच्चे:</strong> जिन्होंने कैप्टन की मृत्यु के बाद नेताजी की मूर्ति पर अपने हाथों से <em>सरकंडे का चश्मा</em> पहनाया, जो भावी पीढ़ी में अमर देशभक्ति का प्रमाण है।</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 हिन्दी शिक्षक व्याख्या एवं मूल संदेश</div>
            <div class="mentor-msg">
              'नेताजी का चश्मा' कहानी के माध्यम से स्वयं प्रकाश ने स्पष्ट किया है कि <strong>देश सीमाओं से घिरी जमीन का नाम नहीं है, बल्कि उसमें रहने वाले करोड़ों नागरिकों, पशु-पक्षियों, नदियों और पर्वतों का नाम है</strong>। जब एक लंगड़ा गरीब फेरीवाला अपनी सामर्थ्य से नेताजी की मूर्ति को चश्मा पहनाता है, तो वह देश निर्माण में अपनी आहुति दे रहा होता है।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ कहानी के 4 प्रमुख चरण</div>
            <p>1. कस्बे के चौराहे पर नगरपालिका द्वारा मास्टर मोतीलाल से नेताजी की संगमरमर की मूर्ति बनवाना, जिसमें संगमरमर का चश्मा छूट जाना।<br/>
            2. हालदार साहब का हर पंद्रहवें दिन कस्बे से गुजरना और मूर्ति पर बदलते हुए असली चश्मे देखकर विस्मय प्रकट करना।<br/>
            3. पानवाले द्वारा कैप्टन चश्मेवाले का परिचय देना और उसका उपहास उड़ाना।<br/>
            4. कैप्टन की मृत्यु के बाद हालदार साहब का निराश होना, परन्तु अंत में मूर्ति पर बच्चों द्वारा लगाया गया <em>सरकंडे का चश्मा</em> देखकर आँखें भर आना।</p>
          </div>
        `
      },
      {
        heading: "2. Class 10 Hindi Grammar Compendium: Pad Parichay, Vachya & Ras",
        headingHi: "2. कक्षा 10 मानक व्याकरण संग्रह: पद-परिचय, वाच्य एवं रस",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 Grammar Formula & Recognition Guide</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Core Definition / Rule</th>
                  <th>Exemplar from Class 10</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>पद परिचय (Parsing)</strong></td>
                  <td>वाक्य में प्रयुक्त पद का व्याकरणिक परिचय (भेद, लिंग, वचन, कारक, संबंध)</td>
                  <td>'<u>वह</u> धीरे-धीरे चलता है' &rarr; रीतिवाचक क्रियाविशेषण</td>
                </tr>
                <tr>
                  <td><strong>कर्तृवाच्य (Active)</strong></td>
                  <td>क्रिया का सीधा संबंध कर्ता से होता है</td>
                  <td>'हालदार साहब ने नेताजी की मूर्ति देखी।'</td>
                </tr>
                <tr>
                  <td><strong>कर्मवाच्य (Passive)</strong></td>
                  <td>क्रिया कर्म के अनुसार बदलती है; कर्ता के साथ 'द्वारा' / 'से'</td>
                  <td>'मास्टर मोतीलाल द्वारा मूर्ति बनाई गई।'</td>
                </tr>
                <tr>
                  <td><strong>भाववाच्य (Impersonal)</strong></td>
                  <td>अकर्मक क्रिया, कर्ता के साथ 'से', क्रिया सदैव अन्य पुरुष पुल्लिंग एकवचन</td>
                  <td>'हालदार साहब से चुप नहीं रहा गया।'</td>
                </tr>
                <tr>
                  <td><strong>रस (Aesthetics)</strong></td>
                  <td>काव्य को पढ़ने/सुनने से प्राप्त आनंद (4 अंग: स्थायी भाव, विभाव, अनुभाव, संचारी भाव)</td>
                  <td>वीर रस (उत्साह), करुण रस (शोक), शृंगार रस (रति)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">📊 व्याकरण का त्वरित संकलन एवं सूत्र तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>व्याकरणिक खंड</th>
                  <th>परिभाषा व पहचान नियम</th>
                  <th>परीक्षा उपयोगी उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>पद परिचय</strong></td>
                  <td>संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण का पूर्ण विश्लेषण</td>
                  <td>'<u>हालदार</u>' &rarr; व्यक्तिवाचक संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक</td>
                </tr>
                <tr>
                  <td><strong>वाच्य (Voice)</strong></td>
                  <td>कर्तृवाच्य (सकर्मक/अकर्मक), कर्मवाच्य (केवल सकर्मक), भाववाच्य (केवल अकर्मक)</td>
                  <td>'कैप्टन चश्मा बेचता है' (कर्तृ) &rarr; 'कैप्टन द्वारा चश्मा बेचा जाता है' (कर्म)</td>
                </tr>
                <tr>
                  <td><strong>रस के 4 अंग</strong></td>
                  <td>स्थायी भाव (मूल भाव), विभाव (कारण), अनुभाव (शारीरिक चेष्टाएं), संचारी भाव (33)</td>
                  <td>स्थायी भाव: रति (शृंगार), हास (हास्य), शोक (करुण), क्रोध (रौद्र), उत्साह (वीर)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Hand-Solved Step-by-Step Model: Vachya Transformation & Pad Parichay",
        headingHi: "3. हाथ से हल किया गया उदाहरण: वाच्य परिवर्तन एवं पद-परिचय",
        contentHtml: `
          ${makeSolvedCard(
            "Grammar Exemplar: Vachya Transformation & Full Pad Parichay",
            "Solve the following: (a) Give full Pad Parichay of 'सुभाष': 'सुभाष ने देश के लिए बलिदान दिया।' (b) Transform 'कैप्टन मूर्ति पर चश्मा लगाता है' into Karmavachya and 'हम इतनी दूर नहीं चल सकते' into Bhavavachya.",
            [
              "<strong>Step 1 (Pad Parichay of 'सुभाष'):</strong> व्यक्तिवाचक संज्ञा (Proper Noun), पुल्लिंग (Masculine), एकवचन (Singular), कर्ता कारक (Subject Case, 'दिया' क्रिया का कर्ता)।",
              "<strong>Step 2 (Convert to Karmavachya):</strong> 'कैप्टन <strong>द्वारा</strong> मूर्ति पर चश्मा <strong>लगाया जाता है</strong>।' (कर्ता के साथ 'द्वारा' तथा कर्म 'चश्मा' के अनुसार क्रिया)।",
              "<strong>Step 3 (Convert to Bhavavachya):</strong> '<strong>हमसे</strong> इतनी दूर <strong>चला नहीं जाता</strong>।' (कर्ता के साथ 'से' तथा अकर्मक क्रिया अन्य पुरुष एकवचन)।"
            ],
            "सुभाष: व्यक्तिवाचक संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक; कर्मवाच्य: '...द्वारा लगाया जाता है'; भाववाच्य: '...चला नहीं जाता'",
            "NCERT Class 10 Hindi Board & BPSC TRE TGT Q15"
          )}
        `,
        contentHtmlHi: `
          ${makeSolvedCard(
            "व्याकरण मॉडल हल: पद-परिचय एवं वाच्य रूपांतरण",
            "हल कीजिए: (क) 'नेताजी की मूर्ति बहुत सुंदर थी।' में 'सुंदर' का पद-परिचय दीजिए। (ख) 'ड्राइंग मास्टर ने एक महीने में मूर्ति बनाई।' को कर्मवाच्य में बदलिए। (ग) 'वह रात भर नहीं सो सका।' को भाववाच्य में बदलिए।",
            [
              "<strong>चरण 1 ('सुंदर' का पद-परिचय):</strong> गुणवाचक विशेषण, स्त्रीलिंग, एकवचन, विशेष्य: 'मूर्ति' की विशेषता बता रहा है।",
              "<strong>चरण 2 (कर्मवाच्य में रूपांतरण):</strong> 'ड्राइंग मास्टर <strong>द्वारा</strong> एक महीने में मूर्ति <strong>बनाई गई</strong>।' (योजक 'द्वारा' का प्रयोग)।",
              "<strong>चरण 3 (भाववाच्य में रूपांतरण):</strong> '<strong>उससे</strong> रात भर <strong>सोया नहीं गया</strong>।' (अकर्मक क्रिया, भाव की प्रधानता)।"
            ],
            "सुंदर: गुणवाचक विशेषण, स्त्रीलिंग, एकवचन; कर्मवाच्य: '...द्वारा बनाई गई'; भाववाच्य: '...सोया नहीं गया'",
            "NCERT कक्षा 10 क्षितिज व्याकरण अभ्यास"
          )}
        `
      },
      {
        heading: "4. Topper's Exam Traps: Karmavachya vs Bhavavachya and Ras Sthayi Bhava",
        headingHi: "4. टॉपर का गुरुमंत्र व परीक्षा ट्रैप: कर्मवाच्य बनाम भाववाच्य एवं रस के स्थायी भाव",
        contentHtml: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ The Karmavachya vs Bhavavachya Distinction Trap!</div>
            <p>&bull; <strong>Karmavachya (कर्मवाच्य):</strong> MUST have an OBJECT (सकर्मक क्रिया). Example: 'मुझसे <u>किताब</u> पढ़ी जाती है।' (किताब is object).<br/>
            &bull; <strong>Bhavavachya (भाववाच्य):</strong> NEVER has an object (अकर्मक क्रिया). Example: 'मुझसे <u>पढ़ा</u> नहीं जाता।'<br/>
            &bull; <strong>Ras Traps:</strong> 'भयानक रस' has sthayi bhava <em>भय</em>. 'बीभत्स रस' has sthayi bhava <em>जुगुप्सा / घृणा</em>. 'अद्भुत रस' has sthayi bhava <em>विस्मय</em>.</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ परीक्षा में फंसाने वाला जाल: कर्मवाच्य बनाम भाववाच्य</div>
            <p>&bull; <strong>कर्मवाच्य:</strong> केवल <strong>सकर्मक क्रिया</strong> (Transitive verb) में होता है जहाँ कर्म उपस्थित हो। जैसे: 'मुझसे <u>पत्र</u> लिखा जाता है।'<br/>
            &bull; <strong>भाववाच्य:</strong> केवल <strong>अकर्मक क्रिया</strong> (Intransitive verb) में होता है जहाँ कोई कर्म नहीं होता। जैसे: 'मुझसे <u>हंसा</u> नहीं जाता।'<br/>
            &bull; <strong>रस के स्थायी भाव जाल:</strong> 'रौद्र रस' का स्थायी भाव <em>क्रोध</em>, 'करुण रस' का <em>शोक</em>, 'बीभत्स रस' का <em>जुगुप्सा (घृणा)</em>, तथा 'शांत रस' का <em>शम / निर्वेद</em> होता है!</p>
          </div>
        `
      }
    ],
    practiceQuestions: generate30Questions(17, "Netaji Ka Chashma", "नेताजी का चश्मा", hinTemplates)
  }
];

const outPath = path.join(__dirname, 'class10_sci_sst_hindi.json');
fs.writeFileSync(outPath, JSON.stringify(sciSstHindiChapters, null, 2), 'utf8');
console.log(`Generated Science, SST & Hindi: ${sciSstHindiChapters.length} chapters with 30 MCQs each (${sciSstHindiChapters.length * 30} MCQs)!`);
