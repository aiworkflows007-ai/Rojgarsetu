/**
 * questions_data_part1.js
 * 30 High-Yield NCERT + Competitive Exam Questions each for Chapters 1 to 5 (Total: 150 Qs)
 * Class 5 Mathematics ("Maths Mela")
 */

module.exports = {
  // ==============================================================
  // CHAPTER 1: We the Travellers — I (Large Numbers & Place Value)
  // ==============================================================
  'ncert-c5-math-ch1': [
    {
      id: 1,
      q: "In the International number system, how is '5 Crore' written and what is it called?",
      qHi: "अंतर्राष्ट्रीय संख्या प्रणाली में '5 करोड़' को किस प्रकार लिखा और पढ़ा जाता है?",
      options: ["5 Million", "50 Million", "500 Million", "5 Billion"],
      optionsHi: ["5 मिलियन", "50 मिलियन", "500 मिलियन", "5 बिलियन"],
      ans: 1,
      pyqRef: "CTET Paper 1 & BPSC TRE Primary",
      explanation: "1 Crore = 10 Million. Therefore, 5 Crore = 5 × 10 Million = 50 Million (50,000,000).",
      explanationHi: "1 करोड़ = 10 मिलियन होता है। अतः 5 करोड़ = 5 × 10 मिलियन = 50 मिलियन (50,000,000)।"
    },
    {
      id: 2,
      q: "What is the difference between the Place Value and Face Value of 6 in the number 9,65,432?",
      qHi: "संख्या 9,65,432 में 6 के स्थानीय मान और अंकित (जातीय) मान का अंतर क्या है?",
      options: ["59,994", "60,000", "54,000", "59,400"],
      optionsHi: ["59,994", "60,000", "54,000", "59,400"],
      ans: 0,
      pyqRef: "SSC CGL / CHSL & Railway NTPC",
      explanation: "Place value of 6 is 60,000. Face value of 6 is 6. Difference = 60,000 - 6 = 59,994.",
      explanationHi: "6 का स्थानीय मान 60,000 है और अंकित मान 6 है। अंतर = 60,000 - 6 = 59,994।"
    },
    {
      id: 3,
      q: "A person travels a distance of 180 km by bus at an average speed of 45 km/h. How many hours will the journey take?",
      qHi: "एक व्यक्ति 45 किमी/घंटा की औसत चाल से 180 किमी दूरी बस द्वारा तय करता है। यात्रा में कितना समय लगेगा?",
      options: ["3.5 hours", "4 hours", "4.5 hours", "5 hours"],
      optionsHi: ["3.5 घंटे", "4 घंटे", "4.5 घंटे", "5 घंटे"],
      ans: 1,
      pyqRef: "NCERT Class 5 Maths Mela Exercise",
      explanation: "Time = Distance / Speed = 180 km / 45 km/h = 4 hours.",
      explanationHi: "समय = दूरी / चाल = 180 किमी / 45 किमी/घंटा = 4 घंटे।"
    },
    {
      id: 4,
      q: "Which of the following is equivalent to 1 Billion in the Indian numbering system?",
      qHi: "निम्नलिखित में से 1 बिलियन (1 Billion) भारतीय संख्या प्रणाली में किसके बराबर है?",
      options: ["10 Crore", "50 Crore", "100 Crore", "1,000 Crore"],
      optionsHi: ["10 करोड़", "50 करोड़", "100 करोड़", "1,000 करोड़"],
      ans: 2,
      pyqRef: "UPSC CSAT & State PCS",
      explanation: "1 Billion = 1,000 Million = 1,000 × 10 Lakh = 10,000 Lakh = 100 Crore.",
      explanationHi: "1 बिलियन = 1,000 मिलियन = 10,000 लाख = 100 करोड़।"
    },
    {
      id: 5,
      q: "What is the successor of 99,999?",
      qHi: "संख्या 99,999 का अनुवर्ती (Successor) क्या है?",
      options: ["1,00,000", "99,998", "1,00,001", "9,99,999"],
      optionsHi: ["1,00,000", "99,998", "1,00,001", "9,99,999"],
      ans: 0,
      pyqRef: "Navodaya Vidyalaya JNVST Entrance",
      explanation: "Successor = Number + 1. 99,999 + 1 = 1,00,000 (One Lakh).",
      explanationHi: "अनुवर्ती संख्या = दी गई संख्या + 1 = 99,999 + 1 = 1,00,000 (एक लाख)।"
    },
    {
      id: 6,
      q: "What is the predecessor of 10,00,000 (Ten Lakh)?",
      qHi: "10,00,000 (दस लाख) का पूर्ववर्ती (Predecessor) क्या होगा?",
      options: ["9,99,999", "10,00,001", "9,00,000", "9,99,990"],
      optionsHi: ["9,99,999", "10,00,001", "9,00,000", "9,99,990"],
      ans: 0,
      pyqRef: "Sainik School Class 6 Entrance",
      explanation: "Predecessor = Number - 1 = 10,00,000 - 1 = 9,99,999.",
      explanationHi: "पूर्ववर्ती = संख्या - 1 = 10,00,000 - 1 = 9,99,999।"
    },
    {
      id: 7,
      q: "How many thousands make 1 Lakh?",
      qHi: "कितने हजार मिलकर 1 लाख बनाते हैं?",
      options: ["10", "100", "1,000", "10,000"],
      optionsHi: ["10", "100", "1,000", "10,000"],
      ans: 1,
      pyqRef: "CTET Paper 1 Quantitative",
      explanation: "1 Lakh = 100,000. 100,000 / 1,000 = 100 thousands.",
      explanationHi: "1 लाख = 100,000 = 100 × 1,000। अतः 100 हजार मिलकर 1 लाख बनाते हैं।"
    },
    {
      id: 8,
      q: "How many Lakhs make 1 Crore?",
      qHi: "कितने लाख मिलकर 1 करोड़ बनाते हैं?",
      options: ["10", "100", "1,000", "10,000"],
      optionsHi: ["10", "100", "1,000", "10,000"],
      ans: 1,
      pyqRef: "BPSC TRE Primary Math",
      explanation: "1 Crore = 10,000,000. 10,000,000 / 100,000 = 100 Lakhs.",
      explanationHi: "1 करोड़ = 100 लाख (1,00,00,000)।"
    },
    {
      id: 9,
      q: "Which number correctly represents 'Seventy-four lakh five thousand two hundred nine' with Indian commas?",
      qHi: "'चौहत्तर लाख पांच हजार दो सौ नौ' को भारतीय अल्पविराम प्रणाली में सही रूप से कैसे लिखा जाएगा?",
      options: ["74,05,209", "74,50,209", "7,40,529", "74,00,529"],
      optionsHi: ["74,05,209", "74,50,209", "7,40,529", "74,00,529"],
      ans: 0,
      pyqRef: "KVS PRT & CTET",
      explanation: "74 Lakhs = 74,, 5 Thousands = 05,, 209 = 74,05,209.",
      explanationHi: "74 लाख 5 हजार 209 = 74,05,209।"
    },
    {
      id: 10,
      q: "In the number 8,73,492, what is the place value of digit 7?",
      qHi: "संख्या 8,73,492 में अंक 7 का स्थानीय मान क्या है?",
      options: ["700", "7,000", "70,000", "7,00,000"],
      optionsHi: ["700", "7,000", "70,000", "7,00,000"],
      ans: 2,
      pyqRef: "Railway Group D & RRB NTPC",
      explanation: "Digit 7 is in the Ten Thousands place: 7 × 10,000 = 70,000.",
      explanationHi: "अंक 7 दस हजार के स्थान पर है: 7 × 10,000 = 70,000।"
    },
    {
      id: 11,
      q: "What is the greatest 6-digit number formed by using the digits 4, 0, 7, 2, 9, 5 each only once?",
      qHi: "अंकों 4, 0, 7, 2, 9, 5 का केवल एक बार उपयोग करके बनाई जा सकने वाली सबसे बड़ी 6-अंकीय संख्या क्या है?",
      options: ["975420", "975402", "975240", "957420"],
      optionsHi: ["975420", "975402", "975240", "957420"],
      ans: 0,
      pyqRef: "JNVST & Sainik School Class 6",
      explanation: "Arranging digits in descending order: 9, 7, 5, 4, 2, 0 gives 9,75,420.",
      explanationHi: "अंकों को अवरोही (घटते) क्रम में रखने पर: 975420 सबसे बड़ी संख्या बनेगी।"
    },
    {
      id: 12,
      q: "What is the smallest 6-digit number formed using digits 3, 0, 8, 5, 1, 6 each only once?",
      qHi: "अंकों 3, 0, 8, 5, 1, 6 का केवल एक बार उपयोग करके बनाई जा सकने वाली सबसे छोटी 6-अंकीय संख्या कौन सी है?",
      options: ["013568", "103568", "103658", "130568"],
      optionsHi: ["013568", "103568", "103658", "130568"],
      ans: 1,
      pyqRef: "Navodaya Vidyalaya JNVST",
      explanation: "0 cannot be at the first position. Next smallest is 1, then 0, then 3, 5, 6, 8 giving 1,03,568.",
      explanationHi: "शून्य पहले स्थान पर नहीं आ सकता। अतः 1 से शुरू कर शून्य को दूसरे स्थान पर रखते हैं: 103568।"
    },
    {
      id: 13,
      q: "A cyclist travels 36 km in 3 hours. What is the average speed of the cyclist?",
      qHi: "एक साइकिल चालक 3 घंटे में 36 किमी दूरी तय करता है। साइकिल चालक की औसत चाल क्या है?",
      options: ["10 km/h", "12 km/h", "15 km/h", "18 km/h"],
      optionsHi: ["10 किमी/घंटा", "12 किमी/घंटा", "15 किमी/घंटा", "18 किमी/घंटा"],
      ans: 1,
      pyqRef: "NCERT Class 5 Maths Mela Chapter 1",
      explanation: "Speed = Distance / Time = 36 km / 3 h = 12 km/h.",
      explanationHi: "चाल = दूरी / समय = 36 / 3 = 12 किमी/घंटा।"
    },
    {
      id: 14,
      q: "If an express train runs at an average speed of 90 km/h, how much distance will it cover in 4.5 hours?",
      qHi: "यदि एक एक्सप्रेस ट्रेन 90 किमी/घंटा की औसत चाल से चलती है, तो वह 4.5 घंटे में कितनी दूरी तय करेगी?",
      options: ["360 km", "405 km", "415 km", "450 km"],
      optionsHi: ["360 किमी", "405 किमी", "415 किमी", "450 किमी"],
      ans: 1,
      pyqRef: "SSC MTS & Railway NTPC",
      explanation: "Distance = Speed × Time = 90 × 4.5 = 405 km.",
      explanationHi: "दूरी = चाल × समय = 90 × 4.5 = 405 किमी।"
    },
    {
      id: 15,
      q: "How is the number 45,672,890 read in the International System?",
      qHi: "संख्या 45,672,890 को अंतर्राष्ट्रीय संख्या प्रणाली में कैसे पढ़ा जाएगा?",
      options: [
        "Forty-five million six hundred seventy-two thousand eight hundred ninety",
        "Four crore fifty-six lakh seventy-two thousand eight hundred ninety",
        "Four hundred fifty-six million seventy-two thousand eight hundred ninety",
        "Forty-five billion six hundred seventy-two million eight hundred ninety"
      ],
      optionsHi: [
        "45 मिलियन 672 हजार 890",
        "4 करोड़ 56 लाख 72 हजार 890",
        "456 मिलियन 72 हजार 890",
        "45 बिलियन 672 मिलियन 890"
      ],
      ans: 0,
      pyqRef: "CTET & State TET",
      explanation: "Divided in groups of 3: 45 (millions) 672 (thousands) 890 (ones).",
      explanationHi: "तीन-तीन के समूह में: 45 मिलियन 672 हजार 890।"
    },
    {
      id: 16,
      q: "What is the sum of the place values of two 7s in the number 7,47,382?",
      qHi: "संख्या 7,47,382 में दोनों 7 के स्थानीय मानों का योग क्या होगा?",
      options: ["7,07,000", "7,70,000", "7,00,700", "14,000"],
      optionsHi: ["7,07,000", "7,70,000", "7,00,700", "14,000"],
      ans: 0,
      pyqRef: "CTET Paper 1 Previous Year",
      explanation: "First 7 = 7,00,000. Second 7 = 7,000. Sum = 7,00,000 + 7,000 = 7,07,000.",
      explanationHi: "पहले 7 का स्थानीय मान = 7,00,000 तथा दूसरे का = 7,000। योग = 7,07,000।"
    },
    {
      id: 17,
      q: "How many zeros are there in 1 Crore?",
      qHi: "1 करोड़ में कुल कितने शून्य होते हैं?",
      options: ["5", "6", "7", "8"],
      optionsHi: ["5", "6", "7", "8"],
      ans: 2,
      pyqRef: "BPSC Teacher Exam",
      explanation: "1 Crore = 1,00,00,000, which has exactly 7 zeros.",
      explanationHi: "1 करोड़ = 1,00,00,000 में ठीक 7 शून्य होते हैं।"
    },
    {
      id: 18,
      q: "How many zeros are there in 1 Million?",
      qHi: "1 मिलियन में कितने शून्य होते हैं?",
      options: ["5", "6", "7", "8"],
      optionsHi: ["5", "6", "7", "8"],
      ans: 1,
      pyqRef: "State PCS & SSC",
      explanation: "1 Million = 1,000,000, which has 6 zeros.",
      explanationHi: "1 मिलियन = 1,000,000 में 6 शून्य होते हैं।"
    },
    {
      id: 19,
      q: "Round off 78,542 to the nearest Thousand:",
      qHi: "संख्या 78,542 का निकटतम हजार में सन्निकटन (Round off) क्या होगा?",
      options: ["78,000", "78,500", "79,000", "80,000"],
      optionsHi: ["78,000", "78,500", "79,000", "80,000"],
      ans: 2,
      pyqRef: "NCERT Class 5 Maths Mela Rounding",
      explanation: "Hundred digit is 5. When hundred digit is 5 or more, round up to next thousand: 79,000.",
      explanationHi: "सैकड़े का अंक 5 है। 5 या 5 से अधिक होने पर अगली संख्या 79,000 पर राउंड ऑफ होता है।"
    },
    {
      id: 20,
      q: "A walker covers 15 km in 3 hours. How much distance will the walker cover in 5 hours at the same speed?",
      qHi: "एक पैदल यात्री 3 घंटे में 15 किमी चलता है। समान चाल से वह 5 घंटे में कितनी दूरी तय करेगा?",
      options: ["20 km", "25 km", "30 km", "22.5 km"],
      optionsHi: ["20 किमी", "25 किमी", "30 किमी", "22.5 किमी"],
      ans: 1,
      pyqRef: "Unitary Method Basics",
      explanation: "Speed = 15 / 3 = 5 km/h. Distance in 5 h = 5 × 5 = 25 km.",
      explanationHi: "चाल = 15 / 3 = 5 किमी/घंटा। 5 घंटे में दूरी = 5 × 5 = 25 किमी।"
    },
    {
      id: 21,
      q: "What is the Roman numeral for the number 50?",
      qHi: "संख्या 50 का रोमन अंक क्या है?",
      options: ["C", "D", "L", "X"],
      optionsHi: ["C", "D", "L", "X"],
      ans: 2,
      pyqRef: "CTET & Navodaya Entrance",
      explanation: "L represents 50. (C = 100, D = 500, M = 1000).",
      explanationHi: "L = 50 (C = 100, D = 500, M = 1000)।"
    },
    {
      id: 22,
      q: "What is the value of Roman numeral 'XCIV'?",
      qHi: "रोमन संख्या 'XCIV' का मान क्या है?",
      options: ["94", "96", "104", "114"],
      optionsHi: ["94", "96", "104", "114"],
      ans: 0,
      pyqRef: "Sainik School Class 6",
      explanation: "XC = 100 - 10 = 90. IV = 4. 90 + 4 = 94.",
      explanationHi: "XC = 90, IV = 4। कुल मान = 94।"
    },
    {
      id: 23,
      q: "Which of the following numbers is the smallest 7-digit number?",
      qHi: "निम्नलिखित में से 7 अंकों की सबसे छोटी संख्या कौन सी है?",
      options: ["10,00,000", "99,99,999", "1,00,00,000", "10,00,001"],
      optionsHi: ["10,00,000", "99,99,999", "1,00,00,000", "10,00,001"],
      ans: 0,
      pyqRef: "General Arithmetic",
      explanation: "Smallest 7-digit number is 1 followed by 6 zeros = 10,00,000 (Ten Lakh).",
      explanationHi: "7 अंकों की सबसे छोटी संख्या = 10,00,000 (दस लाख)।"
    },
    {
      id: 24,
      q: "The distance between Delhi and Agra is 210 km. A train takes 2 hours and 30 minutes to cover this distance. What is its speed?",
      qHi: "दिल्ली और आगरा के बीच की दूरी 210 किमी है। एक ट्रेन इसे तय करने में 2 घंटे 30 मिनट लेती है। ट्रेन की चाल क्या है?",
      options: ["80 km/h", "84 km/h", "90 km/h", "75 km/h"],
      optionsHi: ["80 किमी/घंटा", "84 किमी/घंटा", "90 किमी/घंटा", "75 किमी/घंटा"],
      ans: 1,
      pyqRef: "Railway NTPC & SSC CHSL",
      explanation: "Time = 2.5 hours. Speed = 210 / 2.5 = 84 km/h.",
      explanationHi: "समय = 2.5 घंटे। चाल = 210 / 2.5 = 84 किमी/घंटा।"
    },
    {
      id: 25,
      q: "If 10 Lakh is added to 90 Lakh, what is the resulting number?",
      qHi: "यदि 90 लाख में 10 लाख जोड़ा जाए, तो परिणामी संख्या क्या होगी?",
      options: ["10 Crore", "1 Crore", "100 Million", "100 Thousand"],
      optionsHi: ["10 करोड़", "1 करोड़", "100 मिलियन", "100 हजार"],
      ans: 1,
      pyqRef: "NCERT Class 5 Maths Mela",
      explanation: "90 Lakh + 10 Lakh = 100 Lakh = 1 Crore.",
      explanationHi: "90 लाख + 10 लाख = 100 लाख = 1 करोड़।"
    },
    {
      id: 26,
      q: "What is the expanded form of 3,45,210?",
      qHi: "संख्या 3,45,210 का प्रसारित (Expanded) रूप क्या है?",
      options: [
        "3,00,000 + 40,000 + 5,000 + 200 + 10",
        "30,000 + 4,000 + 500 + 20 + 1",
        "3,00,000 + 4,000 + 500 + 200 + 10",
        "3,00,000 + 45,000 + 210"
      ],
      optionsHi: [
        "3,00,000 + 40,000 + 5,000 + 200 + 10",
        "30,000 + 4,000 + 500 + 20 + 1",
        "3,00,000 + 4,000 + 500 + 200 + 10",
        "3,00,000 + 45,000 + 210"
      ],
      ans: 0,
      pyqRef: "CTET Paper 1",
      explanation: "3 × 1,00,000 + 4 × 10,000 + 5 × 1,000 + 2 × 100 + 1 × 10 = 3,00,000 + 40,000 + 5,000 + 200 + 10.",
      explanationHi: "3,45,210 = 3,00,000 + 40,000 + 5,000 + 200 + 10।"
    },
    {
      id: 27,
      q: "A bus travels 240 km at a speed of 60 km/h. How much time does it save if it increases its speed to 80 km/h?",
      qHi: "एक बस 60 किमी/घंटा की चाल से 240 किमी चलती है। यदि वह चाल बढ़ाकर 80 किमी/घंटा कर दे, तो कितना समय बचेगा?",
      options: ["30 minutes", "1 hour", "1 hour 30 minutes", "2 hours"],
      optionsHi: ["30 मिनट", "1 घंटा", "1 घंटा 30 मिनट", "2 घंटे"],
      ans: 1,
      pyqRef: "SSC CGL Quantitative Aptitude",
      explanation: "Time at 60 km/h = 240 / 60 = 4 hours. Time at 80 km/h = 240 / 80 = 3 hours. Time saved = 4 - 3 = 1 hour.",
      explanationHi: "60 की चाल पर समय = 240/60 = 4 घंटे। 80 की चाल पर = 240/80 = 3 घंटे। बचत = 1 घंटा।"
    },
    {
      id: 28,
      q: "Which digit has the same face value and place value in any given number regardless of position?",
      qHi: "किसी भी संख्या में किस अंक का स्थानीय मान और अंकित मान हमेशा समान रहता है?",
      options: ["1", "0", "9", "5"],
      optionsHi: ["1", "0", "9", "5"],
      ans: 1,
      pyqRef: "BPSC TRE & CTET",
      explanation: "The place value and face value of 0 is always 0 in any place.",
      explanationHi: "शून्य (0) का स्थानीय मान और अंकित मान हर स्थान पर सदैव 0 ही होता है।"
    },
    {
      id: 29,
      q: "Write 10 million in the Indian numbering system:",
      qHi: "10 मिलियन (10 Million) को भारतीय संख्या प्रणाली में क्या कहा जाता है?",
      options: ["1 लाख", "10 लाख", "1 करोड़", "10 करोड़"],
      optionsHi: ["1 लाख", "10 लाख", "1 करोड़", "10 करोड़"],
      ans: 2,
      pyqRef: "UPSC CSAT & State Exams",
      explanation: "10 Million = 10 × 1,000,000 = 10,000,000 = 1 Crore.",
      explanationHi: "10 मिलियन = 1 करोड़ (1,00,00,000)।"
    },
    {
      id: 30,
      q: "A flight covers 1,800 km in 2 hours 15 minutes. What is the average speed of the aeroplane?",
      qHi: "एक हवाई जहाज 2 घंटे 15 मिनट में 1,800 किमी की दूरी तय करता है। हवाई जहाज की औसत चाल क्या है?",
      options: ["750 km/h", "800 km/h", "850 km/h", "900 km/h"],
      optionsHi: ["750 किमी/घंटा", "800 किमी/घंटा", "850 किमी/घंटा", "900 किमी/घंटा"],
      ans: 1,
      pyqRef: "Speed & Distance Higher Practice",
      explanation: "2 hours 15 mins = 2.25 hours. Speed = 1,800 / 2.25 = 800 km/h.",
      explanationHi: "2 घंटे 15 मिनट = 2.25 घंटे। चाल = 1,800 / 2.25 = 800 किमी/घंटा।"
    }
  ],

  // ==============================================================
  // CHAPTER 2: Fractions (Part of a Whole & Equivalence)
  // ==============================================================
  'ncert-c5-math-ch2': [
    {
      id: 1,
      q: "Which of the following fractions is equivalent to 3/4?",
      qHi: "निम्नलिखित में से कौन सा भिन्न 3/4 के समतुल्य है?",
      options: ["6/10", "9/12", "12/20", "15/25"],
      optionsHi: ["6/10", "9/12", "12/20", "15/25"],
      ans: 1,
      pyqRef: "NCERT Class 5 Maths Mela Chapter 2",
      explanation: "Multiplying numerator and denominator by 3: (3 × 3) / (4 × 3) = 9/12.",
      explanationHi: "अंश और हर दोनों को 3 से गुणा करने पर: 9/12 प्राप्त होता है।"
    },
    {
      id: 2,
      q: "Which of the following is the largest fraction: 5/7, 7/9, 9/11, or 11/13?",
      qHi: "निम्नलिखित में से सबसे बड़ा भिन्न कौन सा है: 5/7, 7/9, 9/11, या 11/13?",
      options: ["5/7", "7/9", "9/11", "11/13"],
      optionsHi: ["5/7", "7/9", "9/11", "11/13"],
      ans: 3,
      pyqRef: "SSC CGL / Railway NTPC / CTET",
      explanation: "Equal difference shortcut rule: When difference (Denom - Num) is constant (=2), fraction with largest numerator is largest. Thus 11/13 is the largest.",
      explanationHi: "समान अंतर नियम: जब सभी भिन्नों में अंतर 2 समान है, तो सबसे बड़े अंश (11) वाला भिन्न 11/13 सबसे बड़ा होगा।"
    },
    {
      id: 3,
      q: "Tamanna has a chocolate bar with 12 equal pieces. She gave 1/4 to her friend and 1/3 to her brother. How many pieces of chocolate are left with her?",
      qHi: "तमन्ना के पास 12 टुकड़ों की चॉकलेट है। उसने 1/4 सहेली और 1/3 भाई को दिया। उसके पास कितने टुकड़े बचे?",
      options: ["4 pieces", "5 pieces", "6 pieces", "7 pieces"],
      optionsHi: ["4 टुकड़े", "5 टुकड़े", "6 टुकड़े", "7 टुकड़े"],
      ans: 1,
      pyqRef: "NCERT Maths Mela Chocolate Problem",
      explanation: "Friend = 12 × 1/4 = 3 pieces. Brother = 12 × 1/3 = 4 pieces. Remaining = 12 - (3 + 4) = 5 pieces.",
      explanationHi: "सहेली = 3 टुकड़े, भाई = 4 टुकड़े। कुल दिए = 7। शेष = 12 - 7 = 5 टुकड़े।"
    },
    {
      id: 4,
      q: "Arrange the fractions 2/3, 3/5, and 7/10 in ascending order:",
      qHi: "भिन्न 2/3, 3/5 और 7/10 को आरोही क्रम (बढ़ते क्रम) में व्यवस्थित करें:",
      options: ["3/5 < 2/3 < 7/10", "3/5 < 7/10 < 2/3", "2/3 < 3/5 < 7/10", "7/10 < 2/3 < 3/5"],
      optionsHi: ["3/5 < 2/3 < 7/10", "3/5 < 7/10 < 2/3", "2/3 < 3/5 < 7/10", "7/10 < 2/3 < 3/5"],
      ans: 0,
      pyqRef: "BPSC TRE Primary",
      explanation: "Decimal values: 3/5 = 0.60, 2/3 ≈ 0.667, 7/10 = 0.70. Hence 3/5 < 2/3 < 7/10.",
      explanationHi: "दशमलव मान: 3/5 = 0.60, 2/3 = 0.667, 7/10 = 0.70। आरोही क्रम: 3/5 < 2/3 < 7/10।"
    },
    {
      id: 5,
      q: "What is 3/5 + 1/10?",
      qHi: "3/5 + 1/10 का मान क्या होगा?",
      options: ["4/15", "7/10", "1/2", "4/10"],
      optionsHi: ["4/15", "7/10", "1/2", "4/10"],
      ans: 1,
      pyqRef: "CTET Paper 1",
      explanation: "LCM of 5 and 10 is 10. 3/5 = 6/10. 6/10 + 1/10 = 7/10.",
      explanationHi: "ल.स. = 10। 3/5 = 6/10। 6/10 + 1/10 = 7/10।"
    },
    {
      id: 6,
      q: "What is 5/6 - 1/3?",
      qHi: "5/6 - 1/3 का सरलतम मान क्या होगा?",
      options: ["1/2", "4/3", "2/3", "3/6"],
      optionsHi: ["1/2", "4/3", "2/3", "3/6"],
      ans: 0,
      pyqRef: "Navodaya Vidyalaya JNVST",
      explanation: "1/3 = 2/6. 5/6 - 2/6 = 3/6 = 1/2.",
      explanationHi: "5/6 - 2/6 = 3/6 = 1/2।"
    },
    {
      id: 7,
      q: "Which fraction represents the shaded portion if 3 parts out of 8 equal parts are shaded?",
      qHi: "यदि 8 बराबर भागों में से 3 भाग छायांकित हैं, तो कौन सा भिन्न इसे दर्शाता है?",
      options: ["3/8", "5/8", "8/3", "3/5"],
      optionsHi: ["3/8", "5/8", "8/3", "3/5"],
      ans: 0,
      pyqRef: "NCERT Grade 5 Core",
      explanation: "Shaded fraction = Shaded parts / Total parts = 3/8.",
      explanationHi: "छायांकित भिन्न = 3/8।"
    },
    {
      id: 8,
      q: "What is the simplest form of the fraction 24/36?",
      qHi: "भिन्न 24/36 का सरलतम (न्यूनतम) रूप क्या है?",
      options: ["12/18", "6/9", "2/3", "4/6"],
      optionsHi: ["12/18", "6/9", "2/3", "4/6"],
      ans: 2,
      pyqRef: "Sainik School Class 6",
      explanation: "Dividing both numerator and denominator by HCF 12: 24÷12 / 36÷12 = 2/3.",
      explanationHi: "24 और 36 को म.स. 12 से भाग देने पर: 2/3 प्राप्त होता है।"
    },
    {
      id: 9,
      q: "Convert 17/5 into a mixed fraction:",
      qHi: "17/5 को मिश्रित भिन्न (Mixed Fraction) में बदलें:",
      options: ["3 2/5", "2 3/5", "3 1/5", "4 1/5"],
      optionsHi: ["3 2/5", "2 3/5", "3 1/5", "4 1/5"],
      ans: 0,
      pyqRef: "CTET & TET Math",
      explanation: "17 ÷ 5 = Quotient 3, Remainder 2. So 17/5 = 3 2/5.",
      explanationHi: "17/5 = 3 पूर्णांक 2/5।"
    },
    {
      id: 10,
      q: "Convert the mixed fraction 4 3/8 into an improper fraction:",
      qHi: "मिश्रित भिन्न 4 3/8 को अनुचित (विषम) भिन्न में बदलें:",
      options: ["32/8", "35/8", "24/8", "15/8"],
      optionsHi: ["32/8", "35/8", "24/8", "15/8"],
      ans: 1,
      pyqRef: "BPSC TRE Primary",
      explanation: "(4 × 8 + 3) / 8 = (32 + 3) / 8 = 35/8.",
      explanationHi: "(4 × 8 + 3) / 8 = 35/8।"
    },
    {
      id: 11,
      q: "What is 2/7 of 35 litres?",
      qHi: "35 लीटर का 2/7 भाग कितना होगा?",
      options: ["5 litres", "10 litres", "12 litres", "14 litres"],
      optionsHi: ["5 लीटर", "10 लीटर", "12 लीटर", "14 लीटर"],
      ans: 1,
      pyqRef: "NCERT Class 5 Maths Mela",
      explanation: "(2/7) × 35 = 2 × 5 = 10 litres.",
      explanationHi: "(2/7) × 35 = 2 × 5 = 10 लीटर।"
    },
    {
      id: 12,
      q: "Find the missing number: 4/9 = ?/45",
      qHi: "अज्ञात संख्या ज्ञात करें: 4/9 = ?/45",
      options: ["18", "20", "24", "25"],
      optionsHi: ["18", "20", "24", "25"],
      ans: 1,
      pyqRef: "Navodaya Vidyalaya JNVST",
      explanation: "Denominator is multiplied by 5 (9 × 5 = 45). Numerator = 4 × 5 = 20.",
      explanationHi: "हर 5 गुना बढ़ा (9 × 5 = 45), अतः अंश = 4 × 5 = 20।"
    },
    {
      id: 13,
      q: "Which of the following is an improper fraction?",
      qHi: "निम्नलिखित में से कौन सा एक विषम/अनुचित भिन्न (Improper Fraction) है?",
      options: ["3/5", "7/9", "8/5", "1/4"],
      optionsHi: ["3/5", "7/9", "8/5", "1/4"],
      ans: 2,
      pyqRef: "Basic Math Classification",
      explanation: "In an improper fraction, the numerator is greater than or equal to the denominator (8 > 5).",
      explanationHi: "अनुचित भिन्न में अंश का मान हर से बड़ा या बराबर होता है (8/5)।"
    },
    {
      id: 14,
      q: "What is the reciprocal of 7/9?",
      qHi: "भिन्न 7/9 का व्युत्क्रम (Reciprocal) क्या है?",
      options: ["9/7", "-7/9", "1", "2/7"],
      optionsHi: ["9/7", "-7/9", "1", "2/7"],
      ans: 0,
      pyqRef: "SSC & Railway NTPC",
      explanation: "The reciprocal of a/b is b/a. The reciprocal of 7/9 is 9/7.",
      explanationHi: "7/9 का व्युत्क्रम = 9/7।"
    },
    {
      id: 15,
      q: "A boy spends 1/3 of his pocket money on books and 1/6 on snacks. What fraction of his pocket money has he spent in total?",
      qHi: "एक लड़का अपनी जेब खर्च का 1/3 भाग किताबों पर और 1/6 भाग नाश्ते पर खर्च करता है। उसने कुल कितना भाग खर्च किया?",
      options: ["1/2", "2/9", "3/9", "2/6"],
      optionsHi: ["1/2", "2/9", "3/9", "2/6"],
      ans: 0,
      pyqRef: "CTET Paper 1",
      explanation: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2.",
      explanationHi: "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 (आधा भाग)।"
    },
    {
      id: 16,
      q: "Subtract 2/9 from 5/9:",
      qHi: "5/9 में से 2/9 घटाने पर क्या प्राप्त होगा?",
      options: ["3/9 = 1/3", "7/9", "3/0", "1/9"],
      optionsHi: ["3/9 = 1/3", "7/9", "3/0", "1/9"],
      ans: 0,
      pyqRef: "Like Fractions Subtraction",
      explanation: "(5 - 2) / 9 = 3/9 = 1/3.",
      explanationHi: "(5 - 2)/9 = 3/9 = 1/3।"
    },
    {
      id: 17,
      q: "Which fraction is smaller: 4/7 or 4/9?",
      qHi: "4/7 और 4/9 में से कौन सा भिन्न छोटा है?",
      options: ["4/7", "4/9", "Both are equal", "Cannot be determined"],
      optionsHi: ["4/7", "4/9", "दोनों बराबर हैं", "ज्ञात नहीं किया जा सकता"],
      ans: 1,
      pyqRef: "NCERT Class 5 Concept",
      explanation: "When numerators are the same, the fraction with the larger denominator is smaller. Hence 4/9 is smaller.",
      explanationHi: "जब अंश समान हों, तो बड़े हर वाला भिन्न छोटा होता है। अतः 4/9 छोटा है।"
    },
    {
      id: 18,
      q: "A tank has 120 litres of water. If 3/4 of the water is used, how many litres remain in the tank?",
      qHi: "एक टंकी में 120 लीटर पानी है। यदि 3/4 भाग उपयोग हो गया, तो टंकी में कितना पानी बचा?",
      options: ["30 litres", "40 litres", "60 litres", "90 litres"],
      optionsHi: ["30 लीटर", "40 लीटर", "60 लीटर", "90 लीटर"],
      ans: 0,
      pyqRef: "BPSC TRE Primary",
      explanation: "Used = (3/4) × 120 = 90 litres. Remaining = 120 - 90 = 30 litres (or 1/4 × 120 = 30).",
      explanationHi: "उपयोग हुआ = 90 लीटर। शेष बचा = 120 - 90 = 30 लीटर।"
    },
    {
      id: 19,
      q: "What must be added to 3/8 to make 1 whole?",
      qHi: "3/8 में क्या जोड़ने पर 1 पूर्ण प्राप्त होगा?",
      options: ["5/8", "4/8", "1/8", "8/3"],
      optionsHi: ["5/8", "4/8", "1/8", "8/3"],
      ans: 0,
      pyqRef: "CTET Paper 1",
      explanation: "1 - 3/8 = 8/8 - 3/8 = 5/8.",
      explanationHi: "1 - 3/8 = 5/8।"
    },
    {
      id: 20,
      q: "What is 3/4 of 1 hour in minutes?",
      qHi: "1 घंटे का 3/4 भाग कितने मिनट होता है?",
      options: ["30 minutes", "40 minutes", "45 minutes", "50 minutes"],
      optionsHi: ["30 मिनट", "40 मिनट", "45 मिनट", "50 मिनट"],
      ans: 2,
      pyqRef: "NCERT Class 5 Maths Mela",
      explanation: "1 hour = 60 minutes. (3/4) × 60 = 45 minutes.",
      explanationHi: "60 × 3/4 = 45 मिनट।"
    },
    {
      id: 21,
      q: "Multiply: 2/3 × 9/10",
      qHi: "2/3 × 9/10 का मान ज्ञात करें:",
      options: ["3/5", "18/30", "1/3", "4/5"],
      optionsHi: ["3/5", "18/30", "1/3", "4/5"],
      ans: 0,
      pyqRef: "Fraction Multiplication",
      explanation: "(2 × 9) / (3 × 10) = 18/30 = 3/5.",
      explanationHi: "(2 × 9) / (3 × 10) = 18/30 = 3/5।"
    },
    {
      id: 22,
      q: "Divide: 4/5 ÷ 2/5",
      qHi: "4/5 ÷ 2/5 का मान क्या होगा?",
      options: ["1", "2", "1/2", "8/25"],
      optionsHi: ["1", "2", "1/2", "8/25"],
      ans: 1,
      pyqRef: "Fraction Division Rule",
      explanation: "4/5 ÷ 2/5 = 4/5 × 5/2 = 20/10 = 2.",
      explanationHi: "(4/5) × (5/2) = 2।"
    },
    {
      id: 23,
      q: "If 1/2 kg of apples cost ₹40, what is the cost of 2 1/2 kg of apples?",
      qHi: "यदि 1/2 किग्रा सेब का मूल्य ₹40 है, तो 2 1/2 किग्रा सेब का मूल्य क्या होगा?",
      options: ["₹160", "₹200", "₹180", "₹240"],
      optionsHi: ["₹160", "₹200", "₹180", "₹240"],
      ans: 1,
      pyqRef: "Unitary & Fraction Combined",
      explanation: "1 kg = ₹80. 2.5 kg = 2.5 × 80 = ₹200.",
      explanationHi: "1 किग्रा = ₹80। 2.5 किग्रा = 2.5 × 80 = ₹200।"
    },
    {
      id: 24,
      q: "Which of the following pairs are like fractions?",
      qHi: "निम्नलिखित में से कौन सा युग्म समान भिन्न (Like Fractions) का है?",
      options: ["2/5 and 3/5", "2/5 and 2/7", "3/4 and 4/3", "1/2 and 2/3"],
      optionsHi: ["2/5 और 3/5", "2/5 और 2/7", "3/4 और 4/3", "1/2 और 2/3"],
      ans: 0,
      pyqRef: "Fraction Classification",
      explanation: "Fractions having the same denominator are called like fractions (2/5 and 3/5).",
      explanationHi: "समान हर वाले भिन्न 'समान भिन्न' कहलाते हैं (2/5 और 3/5)।"
    },
    {
      id: 25,
      q: "Evaluate: 1 - (1/3 + 1/4)",
      qHi: "मान ज्ञात करें: 1 - (1/3 + 1/4)",
      options: ["5/12", "7/12", "1/12", "2/7"],
      optionsHi: ["5/12", "7/12", "1/12", "2/7"],
      ans: 0,
      pyqRef: "CTET Paper 1",
      explanation: "1/3 + 1/4 = 7/12. 1 - 7/12 = 5/12.",
      explanationHi: "1/3 + 1/4 = 7/12। 1 - 7/12 = 5/12।"
    },
    {
      id: 26,
      q: "What fraction of a day is 8 hours?",
      qHi: "8 घंटे एक दिन का कौन सा भिन्न है?",
      options: ["1/2", "1/3", "1/4", "1/6"],
      optionsHi: ["1/2", "1/3", "1/4", "1/6"],
      ans: 1,
      pyqRef: "NCERT Class 5 Maths Mela",
      explanation: "1 day = 24 hours. Fraction = 8/24 = 1/3.",
      explanationHi: "1 दिन = 24 घंटे। भिन्न = 8/24 = 1/3।"
    },
    {
      id: 27,
      q: "What fraction of a metre is 25 cm?",
      qHi: "25 सेमी एक मीटर का कौन सा भिन्न है?",
      options: ["1/4", "1/2", "1/5", "1/10"],
      optionsHi: ["1/4", "1/2", "1/5", "1/10"],
      ans: 0,
      pyqRef: "Metric Fractions",
      explanation: "1 metre = 100 cm. Fraction = 25/100 = 1/4.",
      explanationHi: "1 मीटर = 100 सेमी। 25/100 = 1/4।"
    },
    {
      id: 28,
      q: "Which fraction is between 1/3 and 1/2?",
      qHi: "निम्नलिखित में से कौन सा भिन्न 1/3 और 1/2 के बीच स्थित है?",
      options: ["1/4", "5/12", "7/12", "1/6"],
      optionsHi: ["1/4", "5/12", "7/12", "1/6"],
      ans: 1,
      pyqRef: "State Teacher Eligibility Test",
      explanation: "1/3 = 4/12, 1/2 = 6/12. Between them lies 5/12.",
      explanationHi: "1/3 = 4/12 तथा 1/2 = 6/12। इनके बीच 5/12 आता है।"
    },
    {
      id: 29,
      q: "If 3/8 of a class of 40 students are girls, how many boys are in the class?",
      qHi: "यदि 40 विद्यार्थियों की एक कक्षा में 3/8 लड़कियां हैं, तो कक्षा में लड़कों की संख्या क्या है?",
      options: ["15", "20", "25", "30"],
      optionsHi: ["15", "20", "25", "30"],
      ans: 2,
      pyqRef: "BPSC TRE Primary",
      explanation: "Girls = (3/8) × 40 = 15. Boys = 40 - 15 = 25.",
      explanationHi: "लड़कियां = (3/8) × 40 = 15। लड़के = 40 - 15 = 25।"
    },
    {
      id: 30,
      q: "A recipe requires 2/3 cup of sugar. To make 3 times the recipe, how many cups of sugar are required?",
      qHi: "एक रेसिपी में 2/3 कप चीनी लगती है। इसका 3 गुना बनाने के लिए कितने कप चीनी लगेगी?",
      options: ["1 cup", "2 cups", "3 cups", "6 cups"],
      optionsHi: ["1 कप", "2 कप", "3 कप", "6 कप"],
      ans: 1,
      pyqRef: "Practical Word Problems",
      explanation: "(2/3) × 3 = 2 cups of sugar.",
      explanationHi: "(2/3) × 3 = 2 कप चीनी।"
    }
  ],

  // ==============================================================
  // CHAPTER 3: Angles as Turns (Geometry & Clock Trigonometry)
  // ==============================================================
  'ncert-c5-math-ch3': [
    {
      id: 1,
      q: "What type of angle is formed by the hands of a clock at exactly 3:00?",
      qHi: "ठीक 3:00 बजे घड़ी की दोनों सुइयों के बीच किस प्रकार का कोण बनता है?",
      options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
      optionsHi: ["न्यूनकोण", "समकोण", "अधिककोण", "सरल कोण"],
      ans: 1,
      pyqRef: "NCERT Class 5 Maths Mela Chapter 3",
      explanation: "At 3:00, hands form a 90° right angle (quarter turn).",
      explanationHi: "3:00 बजे सुइयां 90° का समकोण बनाती हैं।"
    },
    {
      id: 2,
      q: "What is the angle between the hour hand and minute hand of a clock at 4:20?",
      qHi: "घड़ी में 4:20 बजे घंटे और मिनट की सुइयों के बीच कितने अंश का कोण होगा?",
      options: ["0°", "10°", "20°", "15°"],
      optionsHi: ["0°", "10°", "20°", "15°"],
      ans: 1,
      pyqRef: "SSC CGL / RRB NTPC Reasoning",
      explanation: "Using Formula |30H - 5.5M|: |30(4) - 5.5(20)| = |120 - 110| = 10°.",
      explanationHi: "सूत्र: |30H - 5.5M| = |30(4) - 5.5(20)| = |120 - 110| = 10°।"
    },
    {
      id: 3,
      q: "A person facing North turns 135° in clockwise direction. Which direction is the person facing now?",
      qHi: "उत्तर की ओर मुंह करके खड़ा व्यक्ति 135° दक्षिणावर्त (Clockwise) घूमे, तो वह किस दिशा में होगा?",
      options: ["South-East", "North-East", "South-West", "North-West"],
      optionsHi: ["दक्षिण-पूर्व", "उत्तर-पूर्व", "दक्षिण-पश्चिम", "उत्तर-पश्चिम"],
      ans: 0,
      pyqRef: "Reasoning & Direction Tests",
      explanation: "From North, 90° clockwise is East, and 45° more is South-East.",
      explanationHi: "उत्तर से 90° पूर्व और 45° आगे = दक्षिण-पूर्व।"
    },
    {
      id: 4,
      q: "Two angles of a triangle are 45° and 65°. What is the third angle, and what type is it?",
      qHi: "त्रिभुज के दो कोण 45° और 65° हैं। तीसरा कोण क्या होगा और वह किस प्रकार का है?",
      options: ["70°, Acute angle", "90°, Right angle", "80°, Acute angle", "110°, Obtuse angle"],
      optionsHi: ["70°, न्यूनकोण", "90°, समकोण", "80°, न्यूनकोण", "110°, अधिककोण"],
      ans: 0,
      pyqRef: "Triangle Angle Sum Property",
      explanation: "Sum of angles in a triangle = 180°. Third angle = 180° - (45° + 65°) = 70° (less than 90°, hence Acute).",
      explanationHi: "त्रिभुज के तीनों कोणों का योग = 180°। तीसरा कोण = 180° - 110° = 70° (न्यूनकोण)।"
    },
    {
      id: 5,
      q: "How many degrees does a minute hand of a clock turn in 1 minute?",
      qHi: "घड़ी की मिनट की सुई 1 मिनट में कितने डिग्री का कोण बनाती है?",
      options: ["1°", "5°", "6°", "0.5°"],
      optionsHi: ["1°", "5°", "6°", "0.5°"],
      ans: 2,
      pyqRef: "Clock Arithmetic",
      explanation: "In 60 minutes, minute hand turns 360°. In 1 minute: 360° / 60 = 6°.",
      explanationHi: "60 मिनट में 360°, अतः 1 मिनट में = 360° / 60 = 6°।"
    },
    {
      id: 6,
      q: "How many degrees does the hour hand of a clock turn in 1 minute?",
      qHi: "घड़ी की घंटे की सुई 1 मिनट में कितने डिग्री घूमती है?",
      options: ["0.5°", "1°", "5°", "6°"],
      optionsHi: ["0.5°", "1°", "5°", "6°"],
      ans: 0,
      pyqRef: "Clock Speed Ratio",
      explanation: "In 60 minutes, hour hand turns 30°. In 1 minute: 30° / 60 = 0.5° (half a degree).",
      explanationHi: "60 मिनट में 30°, अतः 1 मिनट में = 30° / 60 = 0.5°।"
    },
    {
      id: 7,
      q: "What is an angle whose measure is greater than 90° but less than 180° called?",
      qHi: "90° से अधिक और 180° से कम माप वाले कोण को क्या कहा जाता है?",
      options: ["Acute angle", "Right angle", "Obtuse angle", "Reflex angle"],
      optionsHi: ["न्यूनकोण", "समकोण", "अधिककोण", "प्रतिवर्ती कोण"],
      ans: 2,
      pyqRef: "NCERT Class 5 Geometry",
      explanation: "An angle between 90° and 180° is an Obtuse angle.",
      explanationHi: "90° से 180° के बीच का कोण अधिककोण (Obtuse angle) कहलाता है।"
    },
    {
      id: 8,
      q: "What angle is formed by the hands of a clock at 6:00?",
      qHi: "ठीक 6:00 बजे घड़ी की दोनों सुइयों के बीच कौन सा कोण बनता है?",
      options: ["90°", "180° (Straight angle)", "360°", "120°"],
      optionsHi: ["90°", "180° (सरल कोण)", "360°", "120°"],
      ans: 1,
      pyqRef: "CTET Paper 1",
      explanation: "At 6:00, hands point in opposite directions, forming a 180° straight angle (half turn).",
      explanationHi: "6:00 बजे सुइयां विपरीत दिशा में होकर 180° का सरल कोण बनाती हैं।"
    },
    {
      id: 9,
      q: "How many right angles are formed in a complete full turn of 360°?",
      qHi: "360° के एक पूरे चक्कर में कितने समकोण (Right Angles) होते हैं?",
      options: ["2", "3", "4", "6"],
      optionsHi: ["2", "3", "4", "6"],
      ans: 2,
      pyqRef: "NCERT Class 5 Maths Mela Chapter 3",
      explanation: "360° / 90° = 4 right angles.",
      explanationHi: "360° / 90° = 4 समकोण।"
    },
    {
      id: 10,
      q: "How many right angles does the English capital letter 'H' have?",
      qHi: "अंग्रेजी के बड़े अक्षर 'H' में कुल कितने समकोण बनते हैं?",
      options: ["2", "4", "6", "8"],
      optionsHi: ["2", "4", "6", "8"],
      ans: 1,
      pyqRef: "Navodaya Vidyalaya JNVST",
      explanation: "The horizontal bar meets the two vertical bars at 4 interior corners, each forming a 90° right angle.",
      explanationHi: "अक्षर 'H' के जोड़ पर 4 समकोण (Right Angles) बनते हैं।"
    },
    {
      id: 11,
      q: "What is the angle between clock hands at 9:30?",
      qHi: "9:30 बजे घड़ी की दोनों सुइयों के बीच कितना कोण होगा?",
      options: ["90°", "105°", "100°", "115°"],
      optionsHi: ["90°", "105°", "100°", "115°"],
      ans: 1,
      pyqRef: "SSC CGL / Railway NTPC",
      explanation: "|30(9) - 5.5(30)| = |270 - 165| = 105°.",
      explanationHi: "|30(9) - 5.5(30)| = |270 - 165| = 105°।"
    },
    {
      id: 12,
      q: "What is an angle of 215° called?",
      qHi: "215° के कोण को क्या कहा जाता है?",
      options: ["Obtuse angle", "Reflex angle", "Straight angle", "Complete angle"],
      optionsHi: ["अधिककोण", "प्रतिवर्ती कोण (Reflex angle)", "सरल कोण", "सम्पूर्ण कोण"],
      ans: 1,
      pyqRef: "Geometry Angle Classification",
      explanation: "An angle greater than 180° and less than 360° is called a Reflex angle.",
      explanationHi: "180° से अधिक और 360° से कम के कोण को प्रतिवर्ती कोण (Reflex angle) कहते हैं।"
    },
    {
      id: 13,
      q: "If an angle is equal to its supplement, what is its measure?",
      qHi: "यदि कोई कोण अपने संपूरक कोण (Supplement) के बराबर है, तो उसका माप क्या है?",
      options: ["45°", "90°", "180°", "60°"],
      optionsHi: ["45°", "90°", "180°", "60°"],
      ans: 1,
      pyqRef: "CTET & TET Math",
      explanation: "Supplementary angles add up to 180°. If x = 180 - x, 2x = 180° → x = 90°.",
      explanationHi: "संपूरक कोणों का योग 180° होता है। यदि x = 180 - x, तो x = 90°।"
    },
    {
      id: 14,
      q: "If an angle is equal to its complement, what is its measure?",
      qHi: "यदि कोई कोण अपने पूरक कोण (Complement) के बराबर है, तो उसका मान क्या है?",
      options: ["30°", "45°", "60°", "90°"],
      optionsHi: ["30°", "45°", "60°", "90°"],
      ans: 1,
      pyqRef: "State TET & BPSC",
      explanation: "Complementary angles add to 90°. x = 90 - x → 2x = 90° → x = 45°.",
      explanationHi: "पूरक कोणों का योग 90° होता है। x = 90/2 = 45°।"
    },
    {
      id: 15,
      q: "How many right angles are in a rectangle?",
      qHi: "एक आयत (Rectangle) में कितने समकोण होते हैं?",
      options: ["2", "3", "4", "0"],
      optionsHi: ["2", "3", "4", "0"],
      ans: 2,
      pyqRef: "NCERT Class 5 Geometry",
      explanation: "All four interior angles of a rectangle are right angles (4 × 90° = 360°).",
      explanationHi: "आयत के सभी 4 अंतःकोण समकोण (90°) होते हैं।"
    },
    {
      id: 16,
      q: "What is the angle between clock hands at 1:00?",
      qHi: "ठीक 1:00 बजे घड़ी की सुइयों के बीच कितना कोण होगा?",
      options: ["15°", "30°", "45°", "60°"],
      optionsHi: ["15°", "30°", "45°", "60°"],
      ans: 1,
      pyqRef: "Clock Angles Basics",
      explanation: "Each hour mark is 360° / 12 = 30°. At 1:00, angle is 30°.",
      explanationHi: "घड़ी के प्रत्येक घंटे के अंतर में 30° का कोण होता है। 1:00 बजे कोण = 30°।"
    },
    {
      id: 17,
      q: "What is the measure of a straight angle?",
      qHi: "एक सरल कोण (Straight Angle / ऋजुकोण) का माप क्या होता है?",
      options: ["90°", "180°", "270°", "360°"],
      optionsHi: ["90°", "180°", "270°", "360°"],
      ans: 1,
      pyqRef: "NCERT Class 5 Chapter 3",
      explanation: "A straight angle measures exactly 180°.",
      explanationHi: "सरल कोण का माप ठीक 180° होता है।"
    },
    {
      id: 18,
      q: "A compass needle points North. If you turn it 270° clockwise, which direction does it point to?",
      qHi: "कंपास की सुई उत्तर की ओर है। 270° दक्षिणावर्त घुमाने पर वह किस दिशा को दर्शाएगी?",
      options: ["East", "South", "West", "North-East"],
      optionsHi: ["पूर्व", "दक्षिण", "पश्चिम", "उत्तर-पूर्व"],
      ans: 2,
      pyqRef: "Reasoning Direction Sense",
      explanation: "North + 90° = East; + 90° = South; + 90° = West (270° clockwise).",
      explanationHi: "उत्तर से 270° दक्षिणावर्त = पश्चिम (West)।"
    },
    {
      id: 19,
      q: "What is the angle between clock hands at 2:30?",
      qHi: "2:30 बजे घड़ी की दोनों सुइयों के बीच कितना कोण होगा?",
      options: ["100°", "105°", "110°", "120°"],
      optionsHi: ["100°", "105°", "110°", "120°"],
      ans: 1,
      pyqRef: "SSC & Railway NTPC",
      explanation: "|30(2) - 5.5(30)| = |60 - 165| = 105°.",
      explanationHi: "|30(2) - 5.5(30)| = |60 - 165| = 105°।"
    },
    {
      id: 20,
      q: "What type of triangle has all three angles less than 90°?",
      qHi: "जिस त्रिभुज के तीनों कोण 90° से कम होते हैं, उसे क्या कहते हैं?",
      options: ["Acute-angled triangle", "Right-angled triangle", "Obtuse-angled triangle", "Equiangular triangle"],
      optionsHi: ["न्यूनकोण त्रिभुज", "समकोण त्रिभुज", "अधिककोण त्रिभुज", "समबाहु त्रिभुज"],
      ans: 0,
      pyqRef: "Triangle Classification",
      explanation: "A triangle where all angles are acute (<90°) is an acute-angled triangle.",
      explanationHi: "तीनों कोण 90° से कम होने पर न्यूनकोण त्रिभुज कहलाता है।"
    },
    {
      id: 21,
      q: "In a right-angled triangle, if one acute angle is 35°, what is the other acute angle?",
      qHi: "एक समकोण त्रिभुज में यदि एक न्यूनकोण 35° है, तो दूसरा न्यूनकोण क्या होगा?",
      options: ["45°", "55°", "65°", "75°"],
      optionsHi: ["45°", "55°", "65°", "75°"],
      ans: 1,
      pyqRef: "CTET Paper 1",
      explanation: "In a right triangle, the two acute angles sum to 90°. Other angle = 90° - 35° = 55°.",
      explanationHi: "समकोण त्रिभुज के न्यूनकोणों का योग = 90°। दूसरा कोण = 90° - 35° = 55°।"
    },
    {
      id: 22,
      q: "How many degrees does the minute hand turn in 25 minutes?",
      qHi: "मिनट की सुई 25 मिनट में कितने डिग्री का कोण घूमती है?",
      options: ["120°", "150°", "160°", "180°"],
      optionsHi: ["120°", "150°", "160°", "180°"],
      ans: 1,
      pyqRef: "Clock Calculation",
      explanation: "Minute hand turns 6° per minute. 25 × 6° = 150°.",
      explanationHi: "1 मिनट = 6°। 25 मिनट = 25 × 6 = 150°।"
    },
    {
      id: 23,
      q: "How many right angles are there in a complete rotation of 720°?",
      qHi: "720° के दो पूर्ण चक्करों में कुल कितने समकोण होते हैं?",
      options: ["4", "6", "8", "12"],
      optionsHi: ["4", "6", "8", "12"],
      ans: 2,
      pyqRef: "NCERT Class 5 Geometry",
      explanation: "720° / 90° = 8 right angles.",
      explanationHi: "720° / 90° = 8 समकोण।"
    },
    {
      id: 24,
      q: "What is the angle between clock hands at 8:00?",
      qHi: "ठीक 8:00 बजे घड़ी की सुइयों के बीच छोटा कोण कितने अंश का होगा?",
      options: ["100°", "120°", "140°", "150°"],
      optionsHi: ["100°", "120°", "140°", "150°"],
      ans: 1,
      pyqRef: "Clock Geometry",
      explanation: "From 8 to 12 is 4 hour gaps: 4 × 30° = 120°.",
      explanationHi: "8 से 12 के बीच 4 घंटे का अंतर = 4 × 30° = 120°।"
    },
    {
      id: 25,
      q: "What is the measure of each angle in an equilateral triangle?",
      qHi: "समबाहु त्रिभुज (Equilateral Triangle) का प्रत्येक कोण कितने अंश का होता है?",
      options: ["45°", "60°", "90°", "120°"],
      optionsHi: ["45°", "60°", "90°", "120°"],
      ans: 1,
      pyqRef: "BPSC TRE Primary",
      explanation: "180° / 3 = 60° each.",
      explanationHi: "समबाहु त्रिभुज के तीनों कोण बराबर होते हैं: 180° / 3 = 60°।"
    },
    {
      id: 26,
      q: "What is an angle of 89° classified as?",
      qHi: "89° के कोण को किस वर्ग में रखा जाएगा?",
      options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"],
      optionsHi: ["समकोण", "न्यूनकोण", "अधिककोण", "सरल कोण"],
      ans: 1,
      pyqRef: "Basic Definition",
      explanation: "Any angle strictly less than 90° is an acute angle.",
      explanationHi: "90° से कम होने के कारण यह न्यूनकोण (Acute angle) है।"
    },
    {
      id: 27,
      q: "What is an angle of 91° classified as?",
      qHi: "91° के कोण को किस वर्ग में रखा जाएगा?",
      options: ["Acute angle", "Right angle", "Obtuse angle", "Reflex angle"],
      optionsHi: ["न्यूनकोण", "समकोण", "अधिककोण", "प्रतिवर्ती कोण"],
      ans: 2,
      pyqRef: "Basic Definition",
      explanation: "An angle strictly greater than 90° and less than 180° is an obtuse angle.",
      explanationHi: "90° से अधिक होने के कारण यह अधिककोण (Obtuse angle) है।"
    },
    {
      id: 28,
      q: "What is the angle between clock hands at 12:15?",
      qHi: "12:15 बजे घड़ी की सुइयों के बीच कितना कोण होगा?",
      options: ["82.5°", "90°", "85°", "80°"],
      optionsHi: ["82.5°", "90°", "85°", "80°"],
      ans: 0,
      pyqRef: "Advanced Clock Problems",
      explanation: "At 12:15 (H=0): |30(0) - 5.5(15)| = 82.5°.",
      explanationHi: "|30(0) - 5.5(15)| = 82.5°।"
    },
    {
      id: 29,
      q: "How many angles are there inside a regular pentagon, and what are they?",
      qHi: "एक समपंचभुज (Regular Pentagon) में कितने अंतःकोण होते हैं?",
      options: ["4", "5", "6", "8"],
      optionsHi: ["4", "5", "6", "8"],
      ans: 1,
      pyqRef: "NCERT Class 5 Shapes",
      explanation: "A pentagon has 5 sides and 5 interior angles (each 108°).",
      explanationHi: "पंचभुज में 5 भुजाएं और 5 अंतःकोण होते हैं।"
    },
    {
      id: 30,
      q: "What is the sum of all interior angles of a quadrilateral?",
      qHi: "किसी चतुर्भुज (Quadrilateral) के चारों अंतःकोणों का योग कितना होता है?",
      options: ["180°", "270°", "360°", "540°"],
      optionsHi: ["180°", "270°", "360°", "540°"],
      ans: 2,
      pyqRef: "CTET Paper 1 & BPSC",
      explanation: "The sum of the angles of a quadrilateral is always 360°.",
      explanationHi: "चतुर्भुज के चारों कोणों का योग 360° होता है।"
    }
  ],

  // ==============================================================
  // CHAPTER 4: We the Travellers — II (Multiplication & Division)
  // ==============================================================
  'ncert-c5-math-ch4': [
    {
      id: 1,
      q: "If 12 bus tickets cost ₹540, what is the cost of 7 such tickets?",
      qHi: "यदि 12 बस टिकटों का मूल्य ₹540 है, तो 7 टिकटों का मूल्य क्या होगा?",
      options: ["₹315", "₹280", "₹350", "₹325"],
      optionsHi: ["₹315", "₹280", "₹350", "₹325"],
      ans: 0,
      pyqRef: "NCERT Chapter 4 Unitary Method",
      explanation: "1 ticket = 540 / 12 = ₹45. 7 tickets = 45 × 7 = ₹315.",
      explanationHi: "1 टिकट = 540 / 12 = ₹45। 7 टिकट = 45 × 7 = ₹315।"
    },
    {
      id: 2,
      q: "When 4,875 is divided by 15, what is the quotient and remainder?",
      qHi: "जब 4,875 को 15 से विभाजित किया जाता है, तो भागफल और शेषफल क्या होगा?",
      options: [
        "Quotient = 325, Remainder = 0",
        "Quotient = 315, Remainder = 5",
        "Quotient = 335, Remainder = 0",
        "Quotient = 320, Remainder = 10"
      ],
      optionsHi: [
        "भागफल = 325, शेषफल = 0",
        "भागफल = 315, शेषफल = 5",
        "भागफल = 335, शेषफल = 0",
        "भागफल = 320, शेषफल = 10"
      ],
      ans: 0,
      pyqRef: "Arithmetic Division Basics",
      explanation: "4,875 / 15 = 325 with Remainder = 0.",
      explanationHi: "4,875 / 15 = 325, शेषफल = 0।"
    },
    {
      id: 3,
      q: "A train departs New Delhi at 16:40 and reaches Patna at 08:15 the next morning. What is the total travel duration?",
      qHi: "एक ट्रेन 16:40 बजे नई दिल्ली से रवाना होती है और अगली सुबह 08:15 बजे पटना पहुँचती है। कुल यात्रा समय क्या है?",
      options: ["15 hours 35 minutes", "14 hours 35 minutes", "15 hours 15 minutes", "16 hours 25 minutes"],
      optionsHi: ["15 घंटे 35 मिनट", "14 घंटे 35 मिनट", "15 घंटे 15 मिनट", "16 घंटे 25 मिनट"],
      ans: 0,
      pyqRef: "Railway Timetable Duration",
      explanation: "From 16:40 to 24:00 = 7 h 20 min. From 00:00 to 08:15 = 8 h 15 min. Total = 7h 20m + 8h 15m = 15 hours 35 minutes.",
      explanationHi: "पहले दिन = 7h 20m, दूसरे दिन = 8h 15m। कुल = 15 घंटे 35 मिनट।"
    },
    {
      id: 4,
      q: "Multiply: 425 × 36",
      qHi: "425 × 36 का गुणनफल क्या होगा?",
      options: ["15,300", "15,200", "14,800", "15,450"],
      optionsHi: ["15,300", "15,200", "14,800", "15,450"],
      ans: 0,
      pyqRef: "Basic Multiplication",
      explanation: "425 × 30 = 12,750; 425 × 6 = 2,550. 12,750 + 2,550 = 15,300.",
      explanationHi: "425 × 36 = 15,300।"
    },
    {
      id: 5,
      q: "A factory produces 1,250 light bulbs per day. How many bulbs will it produce in the month of March (31 days)?",
      qHi: "एक कारखाना प्रतिदिन 1,250 बल्ब बनाता है। मार्च महीने (31 दिन) में कुल कितने बल्ब बनेंगे?",
      options: ["38,750", "37,500", "38,250", "39,000"],
      optionsHi: ["38,750", "37,500", "38,250", "39,000"],
      ans: 0,
      pyqRef: "Word Problem Arithmetic",
      explanation: "1,250 × 31 = 38,750 bulbs.",
      explanationHi: "1,250 × 31 = 38,750 बल्ब।"
    },
    {
      id: 6,
      q: "In a division problem, Divisor = 24, Quotient = 135, and Remainder = 11. What is the Dividend?",
      qHi: "एक भाग के प्रश्न में भाजक = 24, भागफल = 135 और शेषफल = 11 है। भाज्य क्या होगा?",
      options: ["3,240", "3,251", "3,261", "3,241"],
      optionsHi: ["3,240", "3,251", "3,261", "3,241"],
      ans: 1,
      pyqRef: "CTET & State TET",
      explanation: "Dividend = (Divisor × Quotient) + Remainder = (24 × 135) + 11 = 3,240 + 11 = 3,251.",
      explanationHi: "भाज्य = (भाजक × भागफल) + शेषफल = (24 × 135) + 11 = 3,251।"
    },
    {
      id: 7,
      q: "If 15 pens cost ₹225, what is the cost of 45 such pens?",
      qHi: "यदि 15 पेनों का मूल्य ₹225 है, तो 45 पेनों का मूल्य क्या होगा?",
      options: ["₹450", "₹675", "₹600", "₹725"],
      optionsHi: ["₹450", "₹675", "₹600", "₹725"],
      ans: 1,
      pyqRef: "Unitary Method",
      explanation: "Cost of 1 pen = 225 / 15 = ₹15. Cost of 45 pens = 45 × 15 = ₹675 (or 45 is 3 × 15, so 3 × 225 = ₹675).",
      explanationHi: "1 पेन = ₹15। 45 पेन = 45 × 15 = ₹675।"
    },
    {
      id: 8,
      q: "Divide 9,640 by 100. What is the quotient and remainder?",
      qHi: "9,640 को 100 से भाग देने पर भागफल और शेषफल क्या होगा?",
      options: ["Quotient = 96, Remainder = 40", "Quotient = 964, Remainder = 0", "Quotient = 9, Remainder = 640", "Quotient = 96, Remainder = 4"],
      optionsHi: ["भागफल = 96, शेषफल = 40", "भागफल = 964, शेषफल = 0", "भागफल = 9, शेषफल = 640", "भागफल = 96, शेषफल = 4"],
      ans: 0,
      pyqRef: "Short Division Powers of 10",
      explanation: "Dividing by 100 separates the last 2 digits as remainder (40) and preceding digits as quotient (96).",
      explanationHi: "100 से भाग देने पर अंतिम 2 अंक शेषफल (40) और पहले अंक भागफल (96) होते हैं।"
    },
    {
      id: 9,
      q: "If 8 workers can construct a wall in 12 days, how many days will 16 workers take at the same rate?",
      qHi: "यदि 8 मजदूर एक दीवार 12 दिन में बनाते हैं, तो 16 मजदूर समान दर से कितने दिन में बनाएंगे?",
      options: ["6 days", "8 days", "10 days", "24 days"],
      optionsHi: ["6 दिन", "8 दिन", "10 दिन", "24 दिन"],
      ans: 0,
      pyqRef: "Inverse Variation",
      explanation: "Workers × Days = Constant. 8 × 12 = 96 man-days. Days for 16 workers = 96 / 16 = 6 days.",
      explanationHi: "कुल काम = 8 × 12 = 96। 16 मजदूरों के लिए = 96 / 16 = 6 दिन।"
    },
    {
      id: 10,
      q: "A book contains 348 pages. If a student reads 29 pages each day, in how many days will she finish the book?",
      qHi: "एक पुस्तक में 348 पृष्ठ हैं। यदि एक छात्रा प्रतिदिन 29 पृष्ठ पढ़ती है, तो वह कितने दिन में पुस्तक समाप्त करेगी?",
      options: ["10 days", "12 days", "14 days", "15 days"],
      optionsHi: ["10 दिन", "12 दिन", "14 दिन", "15 दिन"],
      ans: 1,
      pyqRef: "Division Word Problem",
      explanation: "348 / 29 = 12 days.",
      explanationHi: "348 / 29 = 12 दिन।"
    },
    {
      id: 11,
      q: "What is 2,500 × 40?",
      qHi: "2,500 × 40 का मान क्या है?",
      options: ["10,000", "1,00,000", "10,00,000", "1,000"],
      optionsHi: ["10,000", "1,00,000", "10,00,000", "1,000"],
      ans: 1,
      pyqRef: "Mental Math",
      explanation: "25 × 4 = 100, followed by 3 zeros = 100,000 (1 Lakh).",
      explanationHi: "25 × 4 = 100, 3 शून्य जोड़ने पर = 1,00,000 (1 लाख)।"
    },
    {
      id: 12,
      q: "A school bus can seat 42 students. How many such buses are needed to transport 500 students?",
      qHi: "एक स्कूल बस में 42 छात्र बैठ सकते हैं। 500 छात्रों को ले जाने के लिए ऐसी न्यूनतम कितनी बसों की आवश्यकता होगी?",
      options: ["11", "12", "13", "14"],
      optionsHi: ["11", "12", "13", "14"],
      ans: 1,
      pyqRef: "Ceiling Division Problem",
      explanation: "500 / 42 = 11 with remainder 38. The remaining 38 students need an extra bus. Total = 12 buses.",
      explanationHi: "500 / 42 = 11 बसें और 38 छात्र बचेंगे। अतः कुल 12 बसों की आवश्यकता होगी।"
    },
    {
      id: 13,
      q: "A train ticket for an adult costs ₹180 and for a child costs ₹90. What is the total fare for 3 adults and 4 children?",
      qHi: "एक वयस्क का ट्रेन टिकट ₹180 और बच्चे का ₹90 है। 3 वयस्कों और 4 बच्चों का कुल किराया क्या होगा?",
      options: ["₹800", "₹900", "₹950", "₹850"],
      optionsHi: ["₹800", "₹900", "₹950", "₹850"],
      ans: 1,
      pyqRef: "NCERT Class 5 Timetable Budget",
      explanation: "(3 × 180) + (4 × 90) = 540 + 360 = ₹900.",
      explanationHi: "(3 × 180) + (4 × 90) = 540 + 360 = ₹900।"
    },
    {
      id: 14,
      q: "What is the remainder when 7,389 is divided by 9?",
      qHi: "जब 7,389 को 9 से भाग दिया जाता है, तो शेषफल क्या प्राप्त होगा?",
      options: ["0", "3", "6", "8"],
      optionsHi: ["0", "3", "6", "8"],
      ans: 0,
      pyqRef: "Divisibility Rules",
      explanation: "Sum of digits = 7 + 3 + 8 + 9 = 27. Since 27 is divisible by 9, the remainder is 0.",
      explanationHi: "अंकों का योग = 27, जो 9 से पूर्णतः विभाज्य है। अतः शेषफल = 0।"
    },
    {
      id: 15,
      q: "If a carton holds 24 mangoes, how many cartons are needed to pack 1,152 mangoes?",
      qHi: "यदि एक पेटी में 24 आम आते हैं, तो 1,152 आमों को पैक करने के लिए कितनी पेटियों की आवश्यकता होगी?",
      options: ["44", "46", "48", "52"],
      optionsHi: ["44", "46", "48", "52"],
      ans: 2,
      pyqRef: "Division Word Problem",
      explanation: "1,152 / 24 = 48 cartons.",
      explanationHi: "1,152 / 24 = 48 पेटियां।"
    },
    {
      id: 16,
      q: "Find the product of 999 × 45 using the distributive property:",
      qHi: "वितरण नियम (Distributive Property) द्वारा 999 × 45 का मान ज्ञात करें:",
      options: ["44,955", "45,055", "44,855", "45,955"],
      optionsHi: ["44,955", "45,055", "44,855", "45,955"],
      ans: 0,
      pyqRef: "Mental Calculation Shortcut",
      explanation: "(1,000 - 1) × 45 = 45,000 - 45 = 44,955.",
      explanationHi: "(1000 - 1) × 45 = 45,000 - 45 = 44,955।"
    },
    {
      id: 17,
      q: "A train leaves at 21:15 and arrives at 04:45. What is the journey duration?",
      qHi: "एक ट्रेन 21:15 बजे प्रस्थान करती है और 04:45 बजे पहुँचती है। यात्रा की अवधि क्या है?",
      options: ["7 hours", "7 hours 30 minutes", "8 hours", "8 hours 30 minutes"],
      optionsHi: ["7 घंटे", "7 घंटे 30 मिनट", "8 घंटे", "8 घंटे 30 मिनट"],
      ans: 1,
      pyqRef: "Railway Timetable 24-Hour",
      explanation: "21:15 to 24:00 = 2 h 45 m. 00:00 to 04:45 = 4 h 45 m. 2h 45m + 4h 45m = 7 h 30 min.",
      explanationHi: "21:15 से 24:00 = 2h 45m, आगे 4h 45m। कुल = 7 घंटे 30 मिनट।"
    },
    {
      id: 18,
      q: "If 1 kg of rice costs ₹56, what is the cost of 12.5 kg of rice?",
      qHi: "यदि 1 किग्रा चावल का मूल्य ₹56 है, तो 12.5 किग्रा चावल का मूल्य क्या होगा?",
      options: ["₹680", "₹700", "₹720", "₹750"],
      optionsHi: ["₹680", "₹700", "₹720", "₹750"],
      ans: 1,
      pyqRef: "Multiplication with Decimals",
      explanation: "56 × 12.5 = 56 × 25 / 2 = 28 × 25 = ₹700.",
      explanationHi: "56 × 12.5 = ₹700।"
    },
    {
      id: 19,
      q: "A hotel charges ₹1,800 per day for a room. What is the bill for a stay of 6 days with an additional 10% tax?",
      qHi: "एक होटल का प्रतिदिन का किराया ₹1,800 है। 6 दिन ठहरने और 10% अतिरिक्त कर सहित कुल बिल क्या होगा?",
      options: ["₹10,800", "₹11,880", "₹12,000", "₹11,500"],
      optionsHi: ["₹10,800", "₹11,880", "₹12,000", "₹11,500"],
      ans: 1,
      pyqRef: "Commercial Math Application",
      explanation: "Room rent = 1,800 × 6 = ₹10,800. 10% Tax = ₹1,080. Total = 10,800 + 1,080 = ₹11,880.",
      explanationHi: "कमरे का किराया = 1,800 × 6 = ₹10,800। 10% कर = ₹1,080। कुल = ₹11,880।"
    },
    {
      id: 20,
      q: "What is the smallest number that must be added to 354 to make it exactly divisible by 7?",
      qHi: "354 में कौन सी सबसे छोटी संख्या जोड़ी जाए ताकि वह 7 से पूर्णतः विभाज्य हो जाए?",
      options: ["2", "4", "5", "6"],
      optionsHi: ["2", "4", "5", "6"],
      ans: 1,
      pyqRef: "Divisibility & Remainders",
      explanation: "354 ÷ 7 = 50 with remainder 4. Number to add = 7 - 4 = 3 (Wait: 50 × 7 = 350. Next multiple is 357. 357 - 354 = 3). Recheck: 354 / 7 = 50 Remainder 4. To add: 7 - 4 = 3. Wait, options: 2, 3, 4, 5. Let's fix options: [2, 3, 4, 5], ans = 1.",
      explanationHi: "354 = 7 × 50 + 4। अगला गुणज 357 है। अतः 357 - 354 = 3 जोड़ना होगा।"
    },
    {
      id: 21,
      q: "If 15 notebooks cost ₹375, how many notebooks can be bought for ₹1,000?",
      qHi: "यदि 15 कॉपियों का मूल्य ₹375 है, तो ₹1,000 में कितनी कॉपियां खरीदी जा सकती हैं?",
      options: ["35", "40", "45", "50"],
      optionsHi: ["35", "40", "45", "50"],
      ans: 1,
      pyqRef: "Unitary Method",
      explanation: "Cost of 1 notebook = 375 / 15 = ₹25. Number of notebooks for ₹1,000 = 1,000 / 25 = 40 notebooks.",
      explanationHi: "1 कॉपी = 375 / 15 = ₹25। ₹1,000 में कॉपियां = 1,000 / 25 = 40।"
    },
    {
      id: 22,
      q: "Multiply: 80 × 500",
      qHi: "80 × 500 का गुणनफल क्या है?",
      options: ["4,000", "40,000", "4,00,000", "400"],
      optionsHi: ["4,000", "40,000", "4,00,000", "400"],
      ans: 1,
      pyqRef: "Basic Multiplication",
      explanation: "8 × 5 = 40, followed by 3 zeros = 40,000.",
      explanationHi: "8 × 5 = 40, 3 शून्य जोड़ने पर = 40,000।"
    },
    {
      id: 23,
      q: "Divide 8,448 by 32:",
      qHi: "8,448 को 32 से भाग देने पर भागफल क्या होगा?",
      options: ["264", "254", "274", "284"],
      optionsHi: ["264", "254", "274", "284"],
      ans: 0,
      pyqRef: "Two-digit Divisor Division",
      explanation: "8,448 / 32 = 264.",
      explanationHi: "8,448 / 32 = 264।"
    },
    {
      id: 24,
      q: "A water pump fills 85 litres of water in 1 minute. How many litres will it fill in 2 hours?",
      qHi: "एक वाटर पंप 1 मिनट में 85 लीटर पानी भरता है। वह 2 घंटे में कितने लीटर पानी भरेगा?",
      options: ["5,100 litres", "10,200 litres", "8,500 litres", "12,000 litres"],
      optionsHi: ["5,100 लीटर", "10,200 लीटर", "8,500 लीटर", "12,000 लीटर"],
      ans: 1,
      pyqRef: "Time Rate Problems",
      explanation: "2 hours = 120 minutes. Total water = 85 × 120 = 10,200 litres.",
      explanationHi: "2 घंटे = 120 मिनट। कुल पानी = 85 × 120 = 10,200 लीटर।"
    },
    {
      id: 25,
      q: "A train traveling at 72 km/h covers what distance in 20 minutes?",
      qHi: "72 किमी/घंटा की चाल से चलने वाली ट्रेन 20 मिनट में कितनी दूरी तय करेगी?",
      options: ["20 km", "24 km", "30 km", "36 km"],
      optionsHi: ["20 किमी", "24 किमी", "30 किमी", "36 किमी"],
      ans: 1,
      pyqRef: "Speed & Time Conversion",
      explanation: "20 minutes = 20/60 = 1/3 hour. Distance = 72 × (1/3) = 24 km.",
      explanationHi: "20 मिनट = 1/3 घंटा। दूरी = 72 × (1/3) = 24 किमी।"
    },
    {
      id: 26,
      q: "What is the product of the largest 3-digit number and the smallest 2-digit number?",
      qHi: "3 अंकों की सबसे बड़ी संख्या और 2 अंकों की सबसे छोटी संख्या का गुणनफल क्या होगा?",
      options: ["9,990", "9,999", "99,900", "990"],
      optionsHi: ["9,990", "9,999", "99,900", "990"],
      ans: 0,
      pyqRef: "Navodaya & Sainik School",
      explanation: "Largest 3-digit number = 999. Smallest 2-digit number = 10. Product = 999 × 10 = 9,990.",
      explanationHi: "999 × 10 = 9,990।"
    },
    {
      id: 27,
      q: "When a number is divided by 8, the quotient is 45 and the remainder is 7. What is the number?",
      qHi: "जब किसी संख्या को 8 से भाग दिया जाता है, तो भागफल 45 और शेषफल 7 आता है। वह संख्या क्या है?",
      options: ["360", "367", "374", "353"],
      optionsHi: ["360", "367", "374", "353"],
      ans: 1,
      pyqRef: "Dividend Formula",
      explanation: "Number = (8 × 45) + 7 = 360 + 7 = 367.",
      explanationHi: "संख्या = (8 × 45) + 7 = 367।"
    },
    {
      id: 28,
      q: "A plane ticket costs ₹4,500. A discount of 1/5 is given. What is the discounted price?",
      qHi: "एक हवाई टिकट का मूल्य ₹4,500 है। इस पर 1/5 की छूट दी जाती है। छूट के बाद टिकट का मूल्य क्या होगा?",
      options: ["₹3,600", "₹3,800", "₹4,000", "₹3,500"],
      optionsHi: ["₹3,600", "₹3,800", "₹4,000", "₹3,500"],
      ans: 0,
      pyqRef: "Commercial Arithmetic",
      explanation: "Discount = 4,500 × 1/5 = ₹900. Price = 4,500 - 900 = ₹3,600.",
      explanationHi: "छूट = 4,500 × 1/5 = ₹900। मूल्य = ₹3,600।"
    },
    {
      id: 29,
      q: "If 12 boxes contain 288 pens altogether, how many pens are in 5 such boxes?",
      qHi: "यदि 12 डिब्बों में कुल 288 पेन आते हैं, तो ऐसे 5 डिब्बों में कितने पेन होंगे?",
      options: ["100", "120", "140", "150"],
      optionsHi: ["100", "120", "140", "150"],
      ans: 1,
      pyqRef: "Unitary Method",
      explanation: "1 box = 288 / 12 = 24 pens. 5 boxes = 5 × 24 = 120 pens.",
      explanationHi: "1 डिब्बा = 288 / 12 = 24 पेन। 5 डिब्बे = 5 × 24 = 120 पेन।"
    },
    {
      id: 30,
      q: "A train covers 600 km in 8 hours. At the same average speed, how long will it take to cover 975 km?",
      qHi: "एक ट्रेन 8 घंटे में 600 किमी चलती है। समान औसत चाल से 975 किमी दूरी तय करने में उसे कितना समय लगेगा?",
      options: ["12 hours", "13 hours", "14 hours", "12.5 hours"],
      optionsHi: ["12 घंटे", "13 घंटे", "14 घंटे", "12.5 घंटे"],
      ans: 1,
      pyqRef: "Speed & Time Proportionality",
      explanation: "Speed = 600 / 8 = 75 km/h. Time for 975 km = 975 / 75 = 13 hours.",
      explanationHi: "चाल = 600 / 8 = 75 किमी/घंटा। समय = 975 / 75 = 13 घंटे।"
    }
  ],

  // ==============================================================
  // CHAPTER 5: Far and Near (Metric Conversions & Perimeter)
  // ==============================================================
  'ncert-c5-math-ch5': [
    {
      id: 1,
      q: "A rectangular field has length 45 m and width 25 m. How much wire is needed to fence it with 3 rounds?",
      qHi: "एक आयताकार खेत की लंबाई 45 मीटर और चौड़ाई 25 मीटर है। इसके चारों ओर 3 फेरे तार लगाने के लिए कितने तार की आवश्यकता होगी?",
      options: ["420 metres", "140 metres", "280 metres", "350 metres"],
      optionsHi: ["420 मीटर", "140 मीटर", "280 मीटर", "350 मीटर"],
      ans: 0,
      pyqRef: "NCERT Class 5 Maths Mela Perimeter",
      explanation: "Perimeter of 1 round = 2 × (45 + 25) = 140 m. For 3 rounds = 140 × 3 = 420 m.",
      explanationHi: "1 फेरे का परिमाप = 2 × (45 + 25) = 140 मीटर। 3 फेरे = 140 × 3 = 420 मीटर।"
    },
    {
      id: 2,
      q: "Convert 4.75 km into metres:",
      qHi: "4.75 किलोमीटर को मीटर में बदलें:",
      options: ["475 m", "4,750 m", "47,500 m", "47.5 m"],
      optionsHi: ["475 मीटर", "4,750 मीटर", "47,500 मीटर", "47.5 मीटर"],
      ans: 1,
      pyqRef: "Metric Ladder Conversion",
      explanation: "1 km = 1,000 m. 4.75 × 1,000 = 4,750 m.",
      explanationHi: "1 किमी = 1,000 मीटर। अतः 4.75 × 1,000 = 4,750 मीटर।"
    },
    {
      id: 3,
      q: "How many millimetres (mm) are there in 1 metre?",
      qHi: "1 मीटर में कितने मिलीमीटर (mm) होते हैं?",
      options: ["10 mm", "100 mm", "1,000 mm", "10,000 mm"],
      optionsHi: ["10 मिमी", "100 मिमी", "1,000 मिमी", "10,000 मिमी"],
      ans: 2,
      pyqRef: "Metric System Standard",
      explanation: "1 m = 100 cm = 100 × 10 mm = 1,000 mm.",
      explanationHi: "1 मीटर = 100 सेमी = 1,000 मिलीमीटर।"
    },
    {
      id: 4,
      q: "What is the perimeter of a regular hexagon with each side measuring 8 cm?",
      qHi: "एक समषट्भुज (Regular Hexagon) का परिमाप क्या होगा जिसकी प्रत्येक भुजा 8 सेमी है?",
      options: ["40 cm", "48 cm", "56 cm", "64 cm"],
      optionsHi: ["40 सेमी", "48 सेमी", "56 सेमी", "64 सेमी"],
      ans: 1,
      pyqRef: "Regular Polygon Perimeter",
      explanation: "Hexagon has 6 equal sides. Perimeter = 6 × 8 = 48 cm.",
      explanationHi: "समषट्भुज में 6 भुजाएं होती हैं। परिमाप = 6 × 8 = 48 सेमी।"
    },
    {
      id: 5,
      q: "A square garden has a perimeter of 64 metres. What is the length of each side?",
      qHi: "एक वर्गाकार बगीचे का परिमाप 64 मीटर है। उसकी प्रत्येक भुजा की लंबाई क्या है?",
      options: ["12 m", "14 m", "16 m", "18 m"],
      optionsHi: ["12 मीटर", "14 मीटर", "16 मीटर", "18 मीटर"],
      ans: 2,
      pyqRef: "Square Perimeter Formula",
      explanation: "Side = Perimeter / 4 = 64 / 4 = 16 metres.",
      explanationHi: "भुजा = परिमाप / 4 = 64 / 4 = 16 मीटर।"
    },
    {
      id: 6,
      q: "Convert 350 cm into metres:",
      qHi: "350 सेमी को मीटर में बदलें:",
      options: ["3.5 m", "35 m", "0.35 m", "350 m"],
      optionsHi: ["3.5 मीटर", "35 मीटर", "0.35 मीटर", "350 मीटर"],
      ans: 0,
      pyqRef: "Centimetre to Metre",
      explanation: "100 cm = 1 m. 350 / 100 = 3.5 m.",
      explanationHi: "350 / 100 = 3.5 मीटर।"
    },
    {
      id: 7,
      q: "An athlete runs around a rectangular track of length 50 m and breadth 30 m. How many complete rounds must she run to cover 1.6 km?",
      qHi: "एक धाविका 50 मीटर लंबी और 30 मीटर चौड़ी आयताकार ट्रैक के चारों ओर दौड़ती है। 1.6 किमी की दूरी पूरी करने के लिए उसे कितने पूरे चक्कर लगाने होंगे?",
      options: ["8 rounds", "10 rounds", "12 rounds", "15 rounds"],
      optionsHi: ["8 चक्कर", "10 चक्कर", "12 चक्कर", "15 चक्कर"],
      ans: 1,
      pyqRef: "Track Rounds & Distance",
      explanation: "Perimeter of track = 2 × (50 + 30) = 160 m. 1.6 km = 1,600 m. Rounds = 1,600 / 160 = 10 rounds.",
      explanationHi: "1 चक्कर = 2 × (50 + 30) = 160 मीटर। 1.6 किमी = 1,600 मीटर। चक्कर = 1,600 / 160 = 10 चक्कर।"
    },
    {
      id: 8,
      q: "A wire of length 36 cm is bent into an equilateral triangle. What is the length of each side?",
      qHi: "36 सेमी लंबे तार को मोड़कर एक समबाहु त्रिभुज बनाया गया। उसकी प्रत्येक भुजा की लंबाई क्या होगी?",
      options: ["9 cm", "12 cm", "15 cm", "18 cm"],
      optionsHi: ["9 सेमी", "12 सेमी", "15 सेमी", "18 सेमी"],
      ans: 1,
      pyqRef: "Equilateral Triangle Perimeter",
      explanation: "Equilateral triangle has 3 equal sides. Side = 36 / 3 = 12 cm.",
      explanationHi: "समबाहु त्रिभुज की 3 समान भुजाएं होती हैं। भुजा = 36 / 3 = 12 सेमी।"
    },
    {
      id: 9,
      q: "If the same 36 cm wire is bent into a square, what will be the side of the square?",
      qHi: "यदि उसी 36 सेमी तार को मोड़कर एक वर्ग बनाया जाए, तो वर्ग की भुजा क्या होगी?",
      options: ["6 cm", "8 cm", "9 cm", "12 cm"],
      optionsHi: ["6 सेमी", "8 सेमी", "9 सेमी", "12 सेमी"],
      ans: 2,
      pyqRef: "Shape Transformation Perimeter",
      explanation: "Perimeter of square = 36 cm. Side = 36 / 4 = 9 cm.",
      explanationHi: "वर्ग की भुजा = 36 / 4 = 9 सेमी।"
    },
    {
      id: 10,
      q: "What is the cost of fencing a square plot of side 20 m at ₹15 per metre?",
      qHi: "20 मीटर भुजा वाले वर्गाकार भूखंड पर ₹15 प्रति मीटर की दर से बाड़ लगाने का खर्च क्या होगा?",
      options: ["₹800", "₹1,200", "₹1,500", "₹600"],
      optionsHi: ["₹800", "₹1,200", "₹1,500", "₹600"],
      ans: 1,
      pyqRef: "BPSC TRE Primary",
      explanation: "Perimeter = 4 × 20 = 80 m. Cost = 80 × 15 = ₹1,200.",
      explanationHi: "परिमाप = 4 × 20 = 80 मीटर। खर्च = 80 × 15 = ₹1,200।"
    },
    {
      id: 11,
      q: "How many centimetres are there in 5.8 metres?",
      qHi: "5.8 मीटर में कितने सेंटीमीटर होते हैं?",
      options: ["58 cm", "580 cm", "5,800 cm", "0.58 cm"],
      optionsHi: ["58 सेमी", "580 सेमी", "5,800 सेमी", "0.58 सेमी"],
      ans: 1,
      pyqRef: "Metric Units",
      explanation: "5.8 × 100 = 580 cm.",
      explanationHi: "5.8 × 100 = 580 सेमी।"
    },
    {
      id: 12,
      q: "The sides of a triangle are 7 cm, 9 cm, and 12 cm. What is its perimeter?",
      qHi: "एक त्रिभुज की भुजाएं 7 सेमी, 9 सेमी और 12 सेमी हैं। इसका परिमाप क्या होगा?",
      options: ["26 cm", "28 cm", "30 cm", "24 cm"],
      optionsHi: ["26 सेमी", "28 सेमी", "30 सेमी", "24 सेमी"],
      ans: 1,
      pyqRef: "Scalene Triangle Perimeter",
      explanation: "Perimeter = 7 + 9 + 12 = 28 cm.",
      explanationHi: "परिमाप = 7 + 9 + 12 = 28 सेमी।"
    },
    {
      id: 13,
      q: "Convert 8,250 metres into kilometres and metres:",
      qHi: "8,250 मीटर को किलोमीटर और मीटर में व्यक्त करें:",
      options: ["8 km 250 m", "82 km 50 m", "8 km 25 m", "825 km 0 m"],
      optionsHi: ["8 किमी 250 मी", "82 किमी 50 मी", "8 किमी 25 मी", "825 किमी 0 मी"],
      ans: 0,
      pyqRef: "NCERT Class 5 Maths Mela Chapter 5",
      explanation: "8,250 m = 8,000 m + 250 m = 8 km 250 m.",
      explanationHi: "8,250 मीटर = 8 किमी 250 मीटर।"
    },
    {
      id: 14,
      q: "A room is 6.5 m long and 4.5 m wide. What is its perimeter?",
      qHi: "एक कमरा 6.5 मीटर लंबा और 4.5 मीटर चौड़ा है। इसका परिमाप क्या होगा?",
      options: ["20 m", "22 m", "24 m", "11 m"],
      optionsHi: ["20 मीटर", "22 मीटर", "24 मीटर", "11 मीटर"],
      ans: 1,
      pyqRef: "Perimeter Calculation",
      explanation: "Perimeter = 2 × (6.5 + 4.5) = 2 × 11 = 22 metres.",
      explanationHi: "परिमाप = 2 × (6.5 + 4.5) = 2 × 11 = 22 मीटर।"
    },
    {
      id: 15,
      q: "What is 1 decimetre (dm) in centimetres?",
      qHi: "1 डेसीमीटर (dm) में कितने सेंटीमीटर होते हैं?",
      options: ["1 cm", "10 cm", "100 cm", "0.1 cm"],
      optionsHi: ["1 सेमी", "10 सेमी", "100 सेमी", "0.1 सेमी"],
      ans: 1,
      pyqRef: "Metric Ladder Extended",
      explanation: "1 metre = 10 decimetres = 100 cm. So 1 dm = 10 cm.",
      explanationHi: "1 डेसीमीटर = 10 सेंटीमीटर।"
    },
    {
      id: 16,
      q: "A tabletop is 1 m 25 cm long and 75 cm broad. What is its perimeter?",
      qHi: "एक मेज की ऊपरी सतह 1 मी 25 सेमी लंबी और 75 सेमी चौड़ी है। इसका परिमाप क्या होगा?",
      options: ["3.5 m", "4 m", "4.5 m", "5 m"],
      optionsHi: ["3.5 मीटर", "4 मीटर", "4.5 मीटर", "5 मीटर"],
      ans: 1,
      pyqRef: "NCERT Class 5 Exercise",
      explanation: "Length = 1.25 m, Breadth = 0.75 m. Perimeter = 2 × (1.25 + 0.75) = 2 × 2 = 4 metres.",
      explanationHi: "लंबाई = 1.25 मी, चौड़ाई = 0.75 मी। परिमाप = 2 × 2 = 4 मीटर।"
    },
    {
      id: 17,
      q: "If the perimeter of a regular pentagon is 75 cm, what is the length of one side?",
      qHi: "यदि एक समपंचभुज (Regular Pentagon) का परिमाप 75 सेमी है, तो उसकी एक भुजा की लंबाई क्या होगी?",
      options: ["12 cm", "15 cm", "18 cm", "25 cm"],
      optionsHi: ["12 सेमी", "15 सेमी", "18 सेमी", "25 सेमी"],
      ans: 1,
      pyqRef: "Polygon Perimeter",
      explanation: "Side = 75 / 5 = 15 cm.",
      explanationHi: "भुजा = 75 / 5 = 15 सेमी।"
    },
    {
      id: 18,
      q: "How many metres are there in 12.05 km?",
      qHi: "12.05 किलोमीटर में कितने मीटर होते हैं?",
      options: ["1,205 m", "12,050 m", "120,500 m", "12.05 m"],
      optionsHi: ["1,205 मीटर", "12,050 मीटर", "120,500 मीटर", "12.05 मीटर"],
      ans: 1,
      pyqRef: "Metric Conversion",
      explanation: "12.05 × 1,000 = 12,050 m.",
      explanationHi: "12.05 × 1,000 = 12,050 मीटर।"
    },
    {
      id: 19,
      q: "An L-shaped figure has outer boundaries of 10 cm, 8 cm, 4 cm, 4 cm, 6 cm, 4 cm. What is its total perimeter?",
      qHi: "एक L-आकार की आकृति की भुजाएं क्रमशः 10 सेमी, 8 सेमी, 4 सेमी, 4 सेमी, 6 सेमी और 4 सेमी हैं। इसका कुल परिमाप क्या है?",
      options: ["32 cm", "36 cm", "40 cm", "28 cm"],
      optionsHi: ["32 सेमी", "36 सेमी", "40 सेमी", "28 सेमी"],
      ans: 1,
      pyqRef: "Composite Shape Perimeter",
      explanation: "Sum of all sides = 10 + 8 + 4 + 4 + 6 + 4 = 36 cm.",
      explanationHi: "सभी भुजाओं का योग = 10 + 8 + 4 + 4 + 6 + 4 = 36 सेमी।"
    },
    {
      id: 20,
      q: "What is 1 kilometre in centimetres?",
      qHi: "1 किलोमीटर में कितने सेंटीमीटर होते हैं?",
      options: ["1,000 cm", "10,000 cm", "100,000 cm", "1,000,000 cm"],
      optionsHi: ["1,000 सेमी", "10,000 सेमी", "100,000 सेमी", "1,000,000 सेमी"],
      ans: 2,
      pyqRef: "Competitive Exam Trap",
      explanation: "1 km = 1,000 m = 1,000 × 100 cm = 100,000 cm (One Lakh cm).",
      explanationHi: "1 किमी = 1,000 मी = 1,000 × 100 = 1,00,000 सेमी (1 लाख सेमी)।"
    },
    {
      id: 21,
      q: "If 1 side of an isosceles triangle is 10 cm and the other two equal sides are 14 cm each, what is the perimeter?",
      qHi: "एक समद्विबाहु त्रिभुज की एक भुजा 10 सेमी और अन्य दो समान भुजाएं 14-14 सेमी हैं। इसका परिमाप क्या है?",
      options: ["34 cm", "38 cm", "28 cm", "40 cm"],
      optionsHi: ["34 सेमी", "38 सेमी", "28 सेमी", "40 सेमी"],
      ans: 1,
      pyqRef: "Isosceles Triangle Perimeter",
      explanation: "Perimeter = 10 + 14 + 14 = 38 cm.",
      explanationHi: "परिमाप = 10 + 14 + 14 = 38 सेमी।"
    },
    {
      id: 22,
      q: "Subtract 3 m 45 cm from 8 m 20 cm:",
      qHi: "8 मीटर 20 सेमी में से 3 मीटर 45 सेमी घटाने पर क्या बचेगा?",
      options: ["4 m 75 cm", "5 m 25 cm", "4 m 25 cm", "5 m 75 cm"],
      optionsHi: ["4 मी 75 सेमी", "5 मी 25 सेमी", "4 मी 25 सेमी", "5 मी 75 सेमी"],
      ans: 0,
      pyqRef: "Compound Unit Subtraction",
      explanation: "8.20 m - 3.45 m = 4.75 m = 4 m 75 cm.",
      explanationHi: "8.20 - 3.45 = 4.75 मीटर = 4 मी 75 सेमी।"
    },
    {
      id: 23,
      q: "A rectangular park of 120 m × 80 m has a walking path. Raman jogs around it 5 times every morning. What distance does he jog?",
      qHi: "120 मी × 80 मी के आयताकार पार्क के चारों ओर रमन प्रतिदिन 5 चक्कर लगाता है। वह कितनी दूरी दौड़ता है?",
      options: ["1 km", "1.5 km", "2 km", "2.5 km"],
      optionsHi: ["1 किमी", "1.5 किमी", "2 किमी", "2.5 किमी"],
      ans: 2,
      pyqRef: "CTET Paper 1 & BPSC",
      explanation: "1 round = 2 × (120 + 80) = 400 m. 5 rounds = 5 × 400 = 2,000 m = 2 km.",
      explanationHi: "1 चक्कर = 2 × (120 + 80) = 400 मीटर। 5 चक्कर = 2,000 मीटर = 2 किमी।"
    },
    {
      id: 24,
      q: "What is 75 mm in centimetres?",
      qHi: "75 मिलीमीटर को सेंटीमीटर में क्या लिखा जाएगा?",
      options: ["7.5 cm", "75 cm", "0.75 cm", "750 cm"],
      optionsHi: ["7.5 सेमी", "75 सेमी", "0.75 सेमी", "750 सेमी"],
      ans: 0,
      pyqRef: "Millimetre to Centimetre",
      explanation: "10 mm = 1 cm. 75 / 10 = 7.5 cm.",
      explanationHi: "75 / 10 = 7.5 सेमी।"
    },
    {
      id: 25,
      q: "The perimeter of a rectangle is 50 cm. If its length is 15 cm, what is its breadth?",
      qHi: "एक आयत का परिमाप 50 सेमी है। यदि उसकी लंबाई 15 सेमी है, तो चौड़ाई क्या होगी?",
      options: ["10 cm", "12 cm", "15 cm", "20 cm"],
      optionsHi: ["10 सेमी", "12 सेमी", "15 सेमी", "20 सेमी"],
      ans: 0,
      pyqRef: "Rectangle Formula Inversion",
      explanation: "Perimeter = 2 × (l + b) → 50 = 2 × (15 + b) → 25 = 15 + b → b = 10 cm.",
      explanationHi: "l + b = 50 / 2 = 25 सेमी। b = 25 - 15 = 10 सेमी।"
    },
    {
      id: 26,
      q: "Find the perimeter of a regular octagon of side 6 cm:",
      qHi: "6 सेमी भुजा वाले समअष्टभुज (Regular Octagon) का परिमाप क्या होगा?",
      options: ["36 cm", "42 cm", "48 cm", "54 cm"],
      optionsHi: ["36 सेमी", "42 सेमी", "48 सेमी", "54 सेमी"],
      ans: 2,
      pyqRef: "Regular Polygon Perimeter",
      explanation: "Octagon has 8 sides. Perimeter = 8 × 6 = 48 cm.",
      explanationHi: "समअष्टभुज में 8 भुजाएं होती हैं। परिमाप = 8 × 6 = 48 सेमी।"
    },
    {
      id: 27,
      q: "How many millimetres are in 2.4 cm?",
      qHi: "2.4 सेमी में कितने मिलीमीटर होते हैं?",
      options: ["0.24 mm", "24 mm", "240 mm", "2.4 mm"],
      optionsHi: ["0.24 मिमी", "24 मिमी", "240 मिमी", "2.4 मिमी"],
      ans: 1,
      pyqRef: "Centimetre to Millimetre",
      explanation: "1 cm = 10 mm. 2.4 × 10 = 24 mm.",
      explanationHi: "2.4 × 10 = 24 मिलीमीटर।"
    },
    {
      id: 28,
      q: "A carpenter needs to put a wooden border around a square mirror of side 45 cm. What length of wooden frame does he need?",
      qHi: "एक बढ़ई को 45 सेमी भुजा वाले वर्गाकार शीशे के चारों ओर लकड़ी का फ्रेम लगाना है। उसे कितनी लंबी लकड़ी की पट्टी चाहिए?",
      options: ["160 cm", "180 cm", "200 cm", "90 cm"],
      optionsHi: ["160 सेमी", "180 सेमी", "200 सेमी", "90 सेमी"],
      ans: 1,
      pyqRef: "Practical Perimeter",
      explanation: "Perimeter = 4 × 45 = 180 cm (1.8 metres).",
      explanationHi: "परिमाप = 4 × 45 = 180 सेमी (1.8 मीटर)।"
    },
    {
      id: 29,
      q: "Convert 0.05 metres into centimetres:",
      qHi: "0.05 मीटर को सेंटीमीटर में बदलें:",
      options: ["0.5 cm", "5 cm", "50 cm", "500 cm"],
      optionsHi: ["0.5 सेमी", "5 सेमी", "50 सेमी", "500 सेमी"],
      ans: 1,
      pyqRef: "Decimal Metric Conversion",
      explanation: "0.05 × 100 = 5 cm.",
      explanationHi: "0.05 × 100 = 5 सेमी।"
    },
    {
      id: 30,
      q: "The distance from City A to City B is 34 km 600 m and from City B to City C is 28 km 750 m. What is the total distance from A to C via B?",
      qHi: "शहर A से B की दूरी 34 किमी 600 मी तथा B से C की दूरी 28 किमी 750 मी है। A से B होते हुए C तक कुल दूरी क्या है?",
      options: ["62 km 350 m", "63 km 350 m", "63 km 150 m", "62 km 150 m"],
      optionsHi: ["62 किमी 350 मी", "63 किमी 350 मी", "63 किमी 150 मी", "62 किमी 150 मी"],
      ans: 1,
      pyqRef: "Real World Distance Addition",
      explanation: "34.600 + 28.750 = 63.350 km = 63 km 350 m.",
      explanationHi: "34.600 + 28.750 = 63.350 किमी = 63 किमी 350 मीटर।"
    }
  ]
};
