const fs = require('fs');
const path = require('path');

const ch6 = [
  {
    id: 1,
    q: "How many millilitres (mL) are there in 1 Litre?",
    qHi: "1 लीटर में कितने मिलीलीटर (mL) होते हैं?",
    options: ["100 mL", "500 mL", "1000 mL", "10000 mL"],
    optionsHi: ["100 mL", "500 mL", "1000 mL", "10000 mL"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE Primary",
    explanation: "Standard metric conversion: 1 Litre (L) = 1,000 millilitres (mL).",
    explanationHi: "मानक मीट्रिक प्रणाली के अनुसार: 1 लीटर (L) = 1,000 मिलीलीटर (mL) होता है।"
  },
  {
    id: 2,
    q: "How many 250 mL milk packets can be filled completely from a 2-litre milk can?",
    qHi: "2 लीटर दूध के डिब्बे से 250 mL वाले दूध के कितने पैकेट पूरी तरह भरे जा सकते हैं?",
    options: ["4", "6", "8", "10"],
    optionsHi: ["4", "6", "8", "10"],
    ans: 2,
    pyqRef: "CTET Paper 1 & UPTET",
    explanation: "2 Litres = 2000 mL. Number of packets = 2000 ÷ 250 = 8 packets.",
    explanationHi: "2 लीटर = 2000 mL। पैकेटों की संख्या = 2000 ÷ 250 = 8 पैकेट।"
  },
  {
    id: 3,
    q: "What is the millilitre equivalent of 3/4 litre of milk?",
    qHi: "3/4 लीटर दूध कितने मिलीलीटर के बराबर होता है?",
    options: ["250 mL", "500 mL", "750 mL", "800 mL"],
    optionsHi: ["250 mL", "500 mL", "750 mL", "800 mL"],
    ans: 2,
    pyqRef: "BPSC TRE 2.0 & JNVST Class 6",
    explanation: "3/4 of 1000 mL = (3 × 1000) / 4 = 3000 / 4 = 750 mL.",
    explanationHi: "1000 mL का 3/4 = (3 × 1000) / 4 = 3000 / 4 = 750 mL।"
  },
  {
    id: 4,
    q: "A milkman has measuring jars of 1 L, 500 mL, and 100 mL. What is the minimum number of measurements to measure exactly 1800 mL?",
    qHi: "एक ग्वाले के पास 1 L, 500 mL और 100 mL के माप हैं। ठीक 1800 mL दूध नापने के लिए कम-से-कम कितनी बार नापना होगा?",
    options: ["4", "5", "6", "8"],
    optionsHi: ["4", "5", "6", "8"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy & Math",
    explanation: "1800 mL = 1 L (1 time) + 500 mL (1 time) + 100 mL (3 times) = 1 + 1 + 3 = 5 measurements.",
    explanationHi: "1800 mL = 1 L (1 बार) + 500 mL (1 बार) + 100 mL (3 बार) = 1 + 1 + 3 = 5 बार।"
  },
  {
    id: 5,
    q: "If 1 litre of milk costs ₹56, what is the cost of 250 mL of milk?",
    qHi: "यदि 1 लीटर दूध का मूल्य ₹56 है, तो 250 mL दूध का मूल्य क्या होगा?",
    options: ["₹12", "₹14", "₹16", "₹28"],
    optionsHi: ["₹12", "₹14", "₹16", "₹28"],
    ans: 1,
    pyqRef: "Bihar STET & DSSSB PRT",
    explanation: "250 mL = 1/4 Litre. Cost = ₹56 ÷ 4 = ₹14.",
    explanationHi: "250 mL = 1/4 लीटर। मूल्य = ₹56 ÷ 4 = ₹14।"
  },
  {
    id: 6,
    q: "A tank has a capacity of 45 litres. If it already contains 28 L 350 mL, how much more milk is needed to fill it completely?",
    qHi: "एक टंकी की धारिता 45 लीटर है। यदि इसमें पहले से 28 L 350 mL दूध है, तो इसे पूरा भरने के लिए कितने और दूध की आवश्यकता है?",
    options: ["16 L 350 mL", "16 L 650 mL", "17 L 650 mL", "15 L 750 mL"],
    optionsHi: ["16 L 350 mL", "16 L 650 mL", "17 L 650 mL", "15 L 750 mL"],
    ans: 1,
    pyqRef: "CTET Paper 1 & REET Level 1",
    explanation: "45 L 000 mL - 28 L 350 mL = 16 L 650 mL.",
    explanationHi: "45 L 000 mL - 28 L 350 mL = 16 L 650 mL।"
  },
  {
    id: 7,
    q: "A cow yields 12 L 500 mL milk in the morning and 9 L 750 mL in the evening daily. What is the total yield in 1 week?",
    qHi: "एक गाय प्रतिदिन सुबह 12 L 500 mL और शाम को 9 L 750 mL दूध देती है। 1 सप्ताह में कुल कितना दूध मिलेगा?",
    options: ["145 L 250 mL", "155 L 750 mL", "150 L 500 mL", "160 L 000 mL"],
    optionsHi: ["145 L 250 mL", "155 L 750 mL", "150 L 500 mL", "160 L 000 mL"],
    ans: 1,
    pyqRef: "BPSC TRE 3.0 & CTET",
    explanation: "Daily = 12.500 + 9.750 = 22.250 L (22 L 250 mL). In 7 days = 22.250 × 7 = 155.750 L = 155 L 750 mL.",
    explanationHi: "प्रतिदिन = 12.500 + 9.750 = 22.250 L (22 L 250 mL)। 7 दिनों में = 22.250 × 7 = 155.750 L = 155 L 750 mL।"
  },
  {
    id: 8,
    q: "Convert 6850 mL into litres and millilitres.",
    qHi: "6850 mL को लीटर और मिलीलीटर में बदलिए।",
    options: ["68 L 50 mL", "6 L 850 mL", "60 L 85 mL", "6 L 85 mL"],
    optionsHi: ["68 L 50 mL", "6 L 850 mL", "60 L 85 mL", "6 L 85 mL"],
    ans: 1,
    pyqRef: "JNVST Class 6 Entrance",
    explanation: "6850 ÷ 1000 = Quotient 6 (Litres), Remainder 850 (millilitres) = 6 L 850 mL.",
    explanationHi: "6850 ÷ 1000 = भागफल 6 (लीटर), शेषफल 850 (मिलीलीटर) = 6 L 850 mL।"
  },
  {
    id: 9,
    q: "Which of the following is equal to 1.5 litres?",
    qHi: "निम्न में से कौन 1.5 लीटर के बराबर है?",
    options: ["150 mL", "1005 mL", "1500 mL", "15000 mL"],
    optionsHi: ["150 mL", "1005 mL", "1500 mL", "15000 mL"],
    ans: 2,
    pyqRef: "Sainik School Class 6",
    explanation: "1.5 × 1000 mL = 1500 mL.",
    explanationHi: "1.5 × 1000 mL = 1500 mL।"
  },
  {
    id: 10,
    q: "If 4 glasses of 250 mL each can fill a jug, how many glasses are required to fill 3.5 litres of liquid?",
    qHi: "यदि 250 mL के 4 गिलास से एक जग भरता है, तो 3.5 लीटर द्रव भरने के लिए कितने गिलासों की आवश्यकता होगी?",
    options: ["12", "14", "16", "18"],
    optionsHi: ["12", "14", "16", "18"],
    ans: 1,
    pyqRef: "CTET Paper 1 & HTET",
    explanation: "3.5 L = 3500 mL. Number of glasses = 3500 ÷ 250 = 14 glasses.",
    explanationHi: "3.5 L = 3500 mL। गिलासों की संख्या = 3500 ÷ 250 = 14 गिलास।"
  },
  {
    id: 11,
    q: "A family buys 1 litre 500 mL of milk daily at ₹60 per litre. What will be their total milk bill for the month of June (30 days)?",
    qHi: "एक परिवार ₹60 प्रति लीटर की दर से प्रतिदिन 1 लीटर 500 mL दूध खरीदता है। जून माह (30 दिन) में उनका कुल बिल क्या होगा?",
    options: ["₹2500", "₹2700", "₹3000", "₹2400"],
    optionsHi: ["₹2500", "₹2700", "₹3000", "₹2400"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & SSC MTS",
    explanation: "Daily expense = 1.5 × ₹60 = ₹90. For 30 days = 30 × ₹90 = ₹2700.",
    explanationHi: "दैनिक खर्च = 1.5 × ₹60 = ₹90। 30 दिनों के लिए = 30 × ₹90 = ₹2700।"
  },
  {
    id: 12,
    q: "A medicine bottle contains 200 mL of tonic. If a patient takes 5 mL three times a day, for how many full days will the tonic last?",
    qHi: "दवा की एक शीशी में 200 mL टॉनिक है। यदि एक मरीज दिन में तीन बार 5 mL लेता है, तो यह टॉनिक कितने पूरे दिन चलेगा?",
    options: ["12 days", "13 days", "14 days", "15 days"],
    optionsHi: ["12 दिन", "13 दिन", "14 दिन", "15 दिन"],
    ans: 1,
    pyqRef: "CTET Paper 1 & KVS PRT",
    explanation: "Daily intake = 3 × 5 mL = 15 mL. Full days = 200 ÷ 15 = 13.33 -> 13 complete days.",
    explanationHi: "दैनिक खुराक = 3 × 5 mL = 15 mL। पूरे दिन = 200 ÷ 15 = 13.33 -> 13 पूरे दिन।"
  },
  {
    id: 13,
    q: "If 5 identical buckets can hold a total of 42 litres 500 mL of water, what is the capacity of one bucket?",
    qHi: "यदि 5 एक जैसी बाल्टियों में कुल 42 लीटर 500 mL पानी आता है, तो एक बाल्टी की धारिता क्या है?",
    options: ["8 L 250 mL", "8 L 500 mL", "7 L 500 mL", "9 L 000 mL"],
    optionsHi: ["8 L 250 mL", "8 L 500 mL", "7 L 500 mL", "9 L 000 mL"],
    ans: 1,
    pyqRef: "BPSC TRE 1.0 & UPTET",
    explanation: "42,500 mL ÷ 5 = 8,500 mL = 8 L 500 mL.",
    explanationHi: "42,500 mL ÷ 5 = 8,500 mL = 8 L 500 mL।"
  },
  {
    id: 14,
    q: "8 litres of curd costs ₹320. How much will 12.5 litres of curd cost at the same rate?",
    qHi: "8 लीटर दही का मूल्य ₹320 है। उसी दर से 12.5 लीटर दही का मूल्य क्या होगा?",
    options: ["₹450", "₹480", "₹500", "₹520"],
    optionsHi: ["₹450", "₹480", "₹500", "₹520"],
    ans: 2,
    pyqRef: "SSC CHSL & CTET Paper 1",
    explanation: "Rate per litre = 320 ÷ 8 = ₹40. Cost of 12.5 L = 12.5 × 40 = ₹500.",
    explanationHi: "प्रति लीटर दर = 320 ÷ 8 = ₹40। 12.5 L का मूल्य = 12.5 × 40 = ₹500।"
  },
  {
    id: 15,
    q: "A dairy tanker carries 15,000 litres of milk. How many 500 mL pouches can be filled from this tanker?",
    qHi: "एक डेयरी टैंकर में 15,000 लीटर दूध है। इस टैंकर से 500 mL वाले कितने पाउच भरे जा सकते हैं?",
    options: ["7,500", "15,000", "30,000", "60,000"],
    optionsHi: ["7,500", "15,000", "30,000", "60,000"],
    ans: 2,
    pyqRef: "BPSC TRE 2.0 & JNVST",
    explanation: "15,000 L = 15,000,000 mL. Number of pouches = 15,000,000 ÷ 500 = 30,000 pouches.",
    explanationHi: "15,000 L = 15,000,000 mL। पाउचों की संख्या = 15,000,000 ÷ 500 = 30,000 पाउच।"
  },
  {
    id: 16,
    q: "What is 2/5 of a litre in millilitres?",
    qHi: "एक लीटर का 2/5 भाग कितने मिलीलीटर होता है?",
    options: ["200 mL", "250 mL", "400 mL", "500 mL"],
    optionsHi: ["200 mL", "250 mL", "400 mL", "500 mL"],
    ans: 2,
    pyqRef: "CTET Paper 1",
    explanation: "2/5 × 1000 mL = (2 × 1000) / 5 = 2000 / 5 = 400 mL.",
    explanationHi: "1000 mL का 2/5 = (2 × 1000) / 5 = 2000 / 5 = 400 mL।"
  },
  {
    id: 17,
    q: "A tea stall uses 20 mL of milk for each cup of tea. How many cups of tea can be prepared using 3 litres of milk?",
    qHi: "एक चाय वाला प्रति कप चाय में 20 mL दूध डालता है। 3 लीटर दूध से कितनी कप चाय तैयार की जा सकती है?",
    options: ["60", "120", "150", "300"],
    optionsHi: ["60", "120", "150", "300"],
    ans: 2,
    pyqRef: "BPSC TRE Primary & SSC GD",
    explanation: "3 Litres = 3000 mL. Cups = 3000 ÷ 20 = 150 cups.",
    explanationHi: "3 लीटर = 3000 mL। चाय के कप = 3000 ÷ 20 = 150 कप।"
  },
  {
    id: 18,
    q: "What is the sum of 4 L 75 mL and 2 L 950 mL?",
    qHi: "4 L 75 mL और 2 L 950 mL का योग क्या होगा?",
    options: ["6 L 1025 mL", "7 L 25 mL", "7 L 125 mL", "6 L 975 mL"],
    optionsHi: ["6 L 1025 mL", "7 L 25 mL", "7 L 125 mL", "6 L 975 mL"],
    ans: 1,
    pyqRef: "CTET Paper 1 & MPTET",
    explanation: "4 L 75 mL + 2 L 950 mL = 6 L 1025 mL = 7 L 25 mL (since 1000 mL = 1 L).",
    explanationHi: "4 L 75 mL + 2 L 950 mL = 6 L 1025 mL = 7 L 25 mL (चूंकि 1000 mL = 1 L)।"
  },
  {
    id: 19,
    q: "Find the difference between 10 Litres and 4 L 380 mL.",
    qHi: "10 लीटर और 4 L 380 mL के बीच का अंतर ज्ञात कीजिए।",
    options: ["5 L 620 mL", "6 L 620 mL", "5 L 720 mL", "6 L 380 mL"],
    optionsHi: ["5 L 620 mL", "6 L 620 mL", "5 L 720 mL", "6 L 380 mL"],
    ans: 0,
    pyqRef: "BPSC TRE 3.0 & DSSSB",
    explanation: "10 L 000 mL - 4 L 380 mL = 9 L 1000 mL - 4 L 380 mL = 5 L 620 mL.",
    explanationHi: "10 L 000 mL - 4 L 380 mL = 9 L 1000 mL - 4 L 380 mL = 5 L 620 mL।"
  },
  {
    id: 20,
    q: "A container has 3 L 600 mL of juice. If 40% of it is served to guests, how much juice remains in the container?",
    qHi: "एक बर्तन में 3 L 600 mL जूस है। यदि इसका 40% भाग मेहमानों को परोस दिया जाए, तो बर्तन में कितना जूस बचेगा?",
    options: ["1 L 440 mL", "2 L 160 mL", "2 L 400 mL", "1 L 800 mL"],
    optionsHi: ["1 L 440 mL", "2 L 160 mL", "2 L 400 mL", "1 L 800 mL"],
    ans: 1,
    pyqRef: "CTET Paper 1 & Sainik School",
    explanation: "Remaining = 60% of 3600 mL = 0.60 × 3600 = 2160 mL = 2 L 160 mL.",
    explanationHi: "शेष भाग = 3600 mL का 60% = 0.60 × 3600 = 2160 mL = 2 L 160 mL।"
  },
  {
    id: 21,
    q: "What fraction of 2 litres is 500 millilitres?",
    qHi: "2 लीटर का 500 मिलीलीटर कौन सा भिन्न है?",
    options: ["1/2", "1/4", "1/5", "1/8"],
    optionsHi: ["1/2", "1/4", "1/5", "1/8"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & CTET",
    explanation: "500 mL ÷ 2000 mL = 500/2000 = 1/4.",
    explanationHi: "500 mL ÷ 2000 mL = 500/2000 = 1/4।"
  },
  {
    id: 22,
    q: "Convert 0.05 litres into millilitres.",
    qHi: "0.05 लीटर को मिलीलीटर में बदलिए।",
    options: ["5 mL", "50 mL", "500 mL", "0.5 mL"],
    optionsHi: ["5 mL", "50 mL", "500 mL", "0.5 mL"],
    ans: 1,
    pyqRef: "JNVST Class 6 Entrance",
    explanation: "0.05 × 1000 mL = 50 mL.",
    explanationHi: "0.05 × 1000 mL = 50 mL।"
  },
  {
    id: 23,
    q: "If 1 Litre = 1000 cubic centimetres (cm³), what is the volume of 250 mL in cm³?",
    qHi: "यदि 1 लीटर = 1000 घन सेंटीमीटर (cm³) हो, तो 250 mL का आयतन कितने cm³ होगा?",
    options: ["25 cm³", "250 cm³", "2500 cm³", "0.25 cm³"],
    optionsHi: ["25 cm³", "250 cm³", "2500 cm³", "0.25 cm³"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "Since 1 L = 1000 mL = 1000 cm³, 1 mL = 1 cm³. Therefore, 250 mL = 250 cm³.",
    explanationHi: "चूंकि 1 L = 1000 mL = 1000 cm³, अतः 1 mL = 1 cm³। इसलिए 250 mL = 250 cm³।"
  },
  {
    id: 24,
    q: "A leaking tap wastes 25 mL of water every minute. How much water will be wasted in 4 hours?",
    qHi: "एक टपकते नल से प्रति मिनट 25 mL पानी व्यर्थ बहता है। 4 घंटे में कितना पानी बर्बाद होगा?",
    options: ["3 Litres", "4 Litres", "6 Litres", "8 Litres"],
    optionsHi: ["3 लीटर", "4 लीटर", "6 लीटर", "8 लीटर"],
    ans: 2,
    pyqRef: "CTET Paper 1 & State TET",
    explanation: "4 hours = 4 × 60 = 240 minutes. Water wasted = 240 × 25 mL = 6000 mL = 6 Litres.",
    explanationHi: "4 घंटे = 4 × 60 = 240 मिनट। बर्बाद पानी = 240 × 25 mL = 6000 mL = 6 लीटर।"
  },
  {
    id: 25,
    q: "Rohan buys 7 bottles of mango shake. Each bottle contains 750 mL. What is the total volume in litres and mL?",
    qHi: "रोहन मैंगो शेक की 7 बोतलें खरीदता है। प्रत्येक बोतल में 750 mL है। कुल आयतन लीटर और mL में क्या होगा?",
    options: ["4 L 250 mL", "5 L 250 mL", "5 L 750 mL", "6 L 150 mL"],
    optionsHi: ["4 L 250 mL", "5 L 250 mL", "5 L 750 mL", "6 L 150 mL"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & UPTET",
    explanation: "7 × 750 mL = 5250 mL = 5 L 250 mL.",
    explanationHi: "7 × 750 mL = 5250 mL = 5 L 250 mL।"
  },
  {
    id: 26,
    q: "In a 40-litre mixture of milk and water, the ratio of water to milk is 1 : 3. How many litres of water are there?",
    qHi: "दूध और पानी के 40 लीटर मिश्रण में पानी और दूध का अनुपात 1 : 3 है। इसमें कितने लीटर पानी है?",
    options: ["10 Litres", "15 Litres", "20 Litres", "30 Litres"],
    optionsHi: ["10 लीटर", "15 लीटर", "20 लीटर", "30 लीटर"],
    ans: 0,
    pyqRef: "SSC MTS & BPSC TRE",
    explanation: "Total parts = 1 + 3 = 4. Water = (1/4) × 40 = 10 Litres.",
    explanationHi: "कुल भाग = 1 + 3 = 4। पानी = (1/4) × 40 = 10 लीटर।"
  },
  {
    id: 27,
    q: "A vendor buys 35 L of pure milk at ₹50/L, adds 5 L of free water, and sells the entire mixture at ₹50/L. What is his profit?",
    qHi: "एक विक्रेता ₹50/L की दर से 35 L शुद्ध दूध खरीदता है, उसमें 5 L मुफ्त पानी मिलाता है और पूरे मिश्रण को ₹50/L की दर से बेचता है। उसका लाभ क्या है?",
    options: ["₹150", "₹200", "₹250", "₹300"],
    optionsHi: ["₹150", "₹200", "₹250", "₹300"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "CP = 35 × ₹50 = ₹1750. SP = (35 + 5) × ₹50 = 40 × ₹50 = ₹2000. Profit = ₹2000 - ₹1750 = ₹250 (value of added 5 L water).",
    explanationHi: "क्रय मूल्य = 35 × ₹50 = ₹1750। विक्रय मूल्य = (35 + 5) × ₹50 = 40 × ₹50 = ₹2000। लाभ = ₹2000 - ₹1750 = ₹250 (मिलाए गए 5 L पानी का मूल्य)।"
  },
  {
    id: 28,
    q: "Which instrument or unit is NOT used to measure liquid capacity?",
    qHi: "तरल पदार्थों की धारिता मापने के लिए किस उपकरण या इकाई का उपयोग नहीं किया जाता है?",
    options: ["Measuring cylinder", "Litre can", "Metre scale", "Graduated beaker"],
    optionsHi: ["मापक बेलन", "लीटर का पैमाना", "मीटर पैमाना", "अंशांकित बीकर"],
    ans: 2,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "A metre scale measures length, not liquid capacity or volume.",
    explanationHi: "मीटर पैमाना लंबाई मापने के लिए प्रयुक्त होता है, धारिता या आयतन के लिए नहीं।"
  },
  {
    id: 29,
    q: "How many millilitres must be added to 385 mL to make exactly 1 Litre?",
    qHi: "ठीक 1 लीटर बनाने के लिए 385 mL में कितने मिलीलीटर जोड़ने होंगे?",
    options: ["515 mL", "615 mL", "715 mL", "625 mL"],
    optionsHi: ["515 mL", "615 mL", "715 mL", "625 mL"],
    ans: 1,
    pyqRef: "BPSC TRE 3.0 & CTET",
    explanation: "1000 mL - 385 mL = 615 mL.",
    explanationHi: "1000 mL - 385 mL = 615 mL।"
  },
  {
    id: 30,
    q: "A family of 4 members drinks 250 mL of milk each per day. How many total litres of milk do they consume in the month of April (30 days)?",
    qHi: "4 सदस्यों का एक परिवार प्रतिदिन प्रति सदस्य 250 mL दूध पीता है। अप्रैल माह (30 दिन) में वे कुल कितने लीटर दूध का उपभोग करेंगे?",
    options: ["25 Litres", "30 Litres", "35 Litres", "40 Litres"],
    optionsHi: ["25 लीटर", "30 लीटर", "35 लीटर", "40 लीटर"],
    ans: 1,
    pyqRef: "CTET Paper 1 & KVS PRT",
    explanation: "Daily = 4 × 250 mL = 1000 mL = 1 Litre. In 30 days = 30 × 1 L = 30 Litres.",
    explanationHi: "प्रतिदिन = 4 × 250 mL = 1000 mL = 1 लीटर। 30 दिनों में = 30 × 1 L = 30 लीटर।"
  }
];

console.log("Chapter 6 questions count:", ch6.length);
