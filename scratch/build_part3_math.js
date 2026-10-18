const fs = require('fs');
const path = require('path');

const { ch11, ch12 } = require('./build_ch11_12.js');

const ch13 = [
  {
    id: 1,
    q: "Which of the following numbers is a multiple of 6?",
    qHi: "निम्नलिखित में से कौन सी संख्या 6 का गुणज (Multiple) है?",
    options: ["16", "28", "42", "52"],
    optionsHi: ["16", "28", "42", "52"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE Primary",
    explanation: "6 × 7 = 42. Hence, 42 is a multiple of 6.",
    explanationHi: "6 × 7 = 42। अतः 42, 6 का एक गुणज है।"
  },
  {
    id: 2,
    q: "What is the Least Common Multiple (LCM) of 4 and 6?",
    qHi: "4 और 6 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    options: ["8", "12", "18", "24"],
    optionsHi: ["8", "12", "18", "24"],
    ans: 1,
    pyqRef: "CTET Paper 1 & UPTET",
    explanation: "Multiples of 4: 4, 8, 12, 16... Multiples of 6: 6, 12, 18... Smallest common is 12.",
    explanationHi: "4 के गुणज: 4, 8, 12... 6 के गुणज: 6, 12, 18... सबसे छोटा उभयनिष्ठ गुणज 12 है।"
  },
  {
    id: 3,
    q: "How many total factors does the number 12 have?",
    qHi: "संख्या 12 के कुल कितने गुणनखंड (Factors) होते हैं?",
    options: ["4", "5", "6", "8"],
    optionsHi: ["4", "5", "6", "8"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "Factors of 12 are 1, 2, 3, 4, 6, 12 (6 factors).",
    explanationHi: "12 के गुणनखंड हैं: 1, 2, 3, 4, 6, 12 (कुल 6 गुणनखंड)।"
  },
  {
    id: 4,
    q: "What is the Highest Common Factor (HCF) of 18 and 24?",
    qHi: "18 और 24 का महत्तम समापवर्तक (HCF / म.स.) क्या है?",
    options: ["3", "4", "6", "12"],
    optionsHi: ["3", "4", "6", "12"],
    ans: 2,
    pyqRef: "BPSC TRE 2.0 & JNVST",
    explanation: "Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Greatest common factor = 6.",
    explanationHi: "18 और 24 का सबसे बड़ा उभयनिष्ठ गुणनखंड 6 है।"
  },
  {
    id: 5,
    q: "Which is the smallest prime number?",
    qHi: "सबसे छोटी अभाज्य संख्या (Prime number) कौन सी है?",
    options: ["0", "1", "2", "3"],
    optionsHi: ["0", "1", "2", "3"],
    ans: 2,
    pyqRef: "CTET Paper 1 (Repeated PYQ)",
    explanation: "2 is the smallest prime number and also the only even prime number.",
    explanationHi: "2 सबसे छोटी अभाज्य संख्या है और यह एकमात्र सम अभाज्य संख्या भी है।"
  },
  {
    id: 6,
    q: "Two numbers having only 1 as their common factor are called:",
    qHi: "वे दो संख्याएँ जिनका उभयनिष्ठ गुणनखंड केवल 1 होता है, क्या कहलाती हैं?",
    options: ["Twin primes", "Co-prime numbers", "Composite numbers", "Perfect numbers"],
    optionsHi: ["जुड़वाँ अभाज्य", "सह-अभाज्य संख्याएँ (Co-prime)", "भाज्य संख्याएँ", "सम्पूर्ण संख्याएँ"],
    ans: 1,
    pyqRef: "CTET Paper 1 & DSSSB PRT",
    explanation: "Numbers whose HCF is 1 are defined as co-prime numbers (e.g., 8 and 9).",
    explanationHi: "जिन संख्याओं का म.स. (HCF) 1 होता है, उन्हें सह-अभाज्य (Co-prime) संख्याएँ कहते हैं।"
  },
  {
    id: 7,
    q: "Find the LCM of 12, 15, and 20.",
    qHi: "12, 15 और 20 का लघुत्तम समापवर्त्य (LCM) ज्ञात कीजिए।",
    options: ["30", "45", "60", "120"],
    optionsHi: ["30", "45", "60", "120"],
    ans: 2,
    pyqRef: "BPSC TRE Primary & SSC MTS",
    explanation: "12 = 2² × 3, 15 = 3 × 5, 20 = 2² × 5. LCM = 2² × 3 × 5 = 60.",
    explanationHi: "12, 15 और 20 का ल.स. = 2² × 3 × 5 = 60।"
  },
  {
    id: 8,
    q: "The HCF of two numbers is 5 and their LCM is 60. If one number is 15, what is the other number?",
    qHi: "दो संख्याओं का म.स. 5 और ल.स. 60 है। यदि एक संख्या 15 है, तो दूसरी संख्या क्या होगी?",
    options: ["18", "20", "24", "25"],
    optionsHi: ["18", "20", "24", "25"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE 3.0",
    explanation: "Product of numbers = LCM × HCF. Other number = (60 × 5) ÷ 15 = 300 ÷ 15 = 20.",
    explanationHi: "संख्याओं का गुणनफल = ल.स. × म.स.। दूसरी संख्या = (60 × 5) ÷ 15 = 20।"
  },
  {
    id: 9,
    q: "A frog jumps 3 steps at a time and a rabbit jumps 5 steps at a time. Both start jumping from 0. At which step will they land together for the first time?",
    qHi: "एक मेंढक एक बार में 3 कदम कूदता है और खरगोश 5 कदम कूदता है। दोनों 0 से कूदना शुरू करते हैं। वे पहली बार किस कदम पर एक साथ मिलेंगे?",
    options: ["8", "12", "15", "30"],
    optionsHi: ["8", "12", "15", "30"],
    ans: 2,
    pyqRef: "NCERT Class 5 Ch 13 & CTET",
    explanation: "They will meet at the LCM of 3 and 5. Since 3 and 5 are prime, LCM = 3 × 5 = 15.",
    explanationHi: "वे 3 और 5 के ल.स. (LCM) पर मिलेंगे: LCM = 3 × 5 = 15।"
  },
  {
    id: 10,
    q: "Three temple bells ring at intervals of 10, 15, and 20 minutes respectively. If they ring together at 8:00 AM, at what time will they ring together next?",
    qHi: "मंदिर की तीन घंटियाँ क्रमशः 10, 15 और 20 मिनट के अंतराल पर बजती हैं। यदि वे सुबह 8:00 AM पर एक साथ बजीं, तो अगली बार वे किस समय एक साथ बजेंगी?",
    options: ["8:30 AM", "8:45 AM", "9:00 AM", "9:30 AM"],
    optionsHi: ["8:30 AM", "8:45 AM", "9:00 AM (1 घंटे बाद)", "9:30 AM"],
    ans: 2,
    pyqRef: "CTET Paper 1 & State TET",
    explanation: "LCM(10, 15, 20) = 60 minutes = 1 hour. 8:00 AM + 1 hour = 9:00 AM.",
    explanationHi: "10, 15, 20 का ल.स. = 60 मिनट = 1 घंटा। 8:00 AM + 1 घंटा = 9:00 AM।"
  },
  {
    id: 11,
    q: "Find the HCF of 36, 54, and 72.",
    qHi: "36, 54 और 72 का महत्तम समापवर्तक (HCF) ज्ञात कीजिए।",
    options: ["9", "12", "18", "36"],
    optionsHi: ["9", "12", "18", "36"],
    ans: 2,
    pyqRef: "BPSC TRE 2.0 & Sainik School",
    explanation: "36 = 18 × 2, 54 = 18 × 3, 72 = 18 × 4. The greatest common divisor is 18.",
    explanationHi: "36 = 18 × 2, 54 = 18 × 3, 72 = 18 × 4। सबसे बड़ा उभयनिष्ठ भाजक 18 है।"
  },
  {
    id: 12,
    q: "Which of the following numbers is a composite number?",
    qHi: "निम्नलिखित में से कौन सी संख्या एक भाज्य संख्या (Composite number) है?",
    options: ["19", "23", "29", "33"],
    optionsHi: ["19", "23", "29", "33"],
    ans: 3,
    pyqRef: "CTET Paper 1 & KVS PRT",
    explanation: "33 has factors 1, 3, 11, 33 (more than 2 factors), so it is composite.",
    explanationHi: "33 के गुणनखंड 1, 3, 11, 33 हैं (2 से अधिक), अतः यह भाज्य संख्या है।"
  },
  {
    id: 13,
    q: "What is the sum of all prime numbers between 1 and 10?",
    qHi: "1 से 10 के बीच की सभी अभाज्य संख्याओं का योग क्या है?",
    options: ["15", "17", "18", "21"],
    optionsHi: ["15", "17", "18", "21"],
    ans: 1,
    pyqRef: "CTET Paper 1 & REET",
    explanation: "Prime numbers between 1 and 10 are 2, 3, 5, 7. Sum = 2 + 3 + 5 + 7 = 17.",
    explanationHi: "1 से 10 के बीच अभाज्य संख्याएँ हैं: 2, 3, 5, 7। योग = 2 + 3 + 5 + 7 = 17।"
  },
  {
    id: 14,
    q: "Which pair of numbers represents 'Twin Primes'?",
    qHi: "कौन सा युग्म 'जुड़वाँ अभाज्य' (Twin Primes) को दर्शाता है?",
    options: ["(3, 7)", "(5, 7)", "(7, 9)", "(11, 15)"],
    optionsHi: ["(3, 7)", "(5, 7)", "(7, 9)", "(11, 15)"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "Twin primes are prime numbers that differ by 2. 5 and 7 are both prime and 7 - 5 = 2.",
    explanationHi: "जुड़वाँ अभाज्य वे अभाज्य संख्याएँ हैं जिनमें 2 का अंतर होता है। 5 और 7 दोनों अभाज्य हैं और 7 - 5 = 2।"
  },
  {
    id: 15,
    q: "What is the prime factorization of 60?",
    qHi: "60 का अभाज्य गुणनखंडन (Prime factorization) क्या है?",
    options: ["2 × 3 × 10", "2 × 2 × 3 × 5", "4 × 3 × 5", "2 × 30"],
    optionsHi: ["2 × 3 × 10", "2 × 2 × 3 × 5", "4 × 3 × 5", "2 × 30"],
    ans: 1,
    pyqRef: "JNVST Class 6 Entrance",
    explanation: "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5 (all factors must be prime).",
    explanationHi: "60 = 2 × 2 × 3 × 5 (सभी गुणनखंड अभाज्य होने चाहिए)।"
  },
  {
    id: 16,
    q: "What is the greatest number that divides 28 and 42 without leaving any remainder?",
    qHi: "वह सबसे बड़ी संख्या कौन सी है जो 28 और 42 को बिना कोई शेष छोड़े पूर्णतः विभाजित करती है?",
    options: ["7", "14", "21", "28"],
    optionsHi: ["7", "14", "21", "28"],
    ans: 1,
    pyqRef: "BPSC TRE 1.0 & CTET",
    explanation: "HCF(28, 42) = 14.",
    explanationHi: "28 और 42 का म.स. (HCF) = 14।"
  },
  {
    id: 17,
    q: "What is the smallest 3-digit number that is exactly divisible by 4, 6, and 8?",
    qHi: "वह सबसे छोटी 3-अंकीय संख्या कौन सी है जो 4, 6 और 8 से पूर्णतः विभाज्य है?",
    options: ["100", "120", "144", "160"],
    optionsHi: ["100", "120", "144", "160"],
    ans: 1,
    pyqRef: "CTET Paper 1 & SSC MTS",
    explanation: "LCM(4, 6, 8) = 24. Multiples of 24: 24, 48, 72, 96, 120. Smallest 3-digit is 120.",
    explanationHi: "4, 6, 8 का ल.स. = 24। 24 का पहला 3-अंकीय गुणज = 120।"
  },
  {
    id: 18,
    q: "A teacher wants to distribute 36 pens and 48 pencils equally among students without any leftovers. What is the maximum number of students who can receive an equal share?",
    qHi: "एक शिक्षक 36 पेन और 48 पेंसिल छात्रों में बिना कुछ बचाए बराबर बाँटना चाहते हैं। समान हिस्सा पाने वाले छात्रों की अधिकतम संख्या क्या हो सकती है?",
    options: ["6", "12", "18", "24"],
    optionsHi: ["6", "12", "18", "24"],
    ans: 1,
    pyqRef: "CTET Paper 1 & KVS PRT",
    explanation: "Maximum number = HCF(36, 48) = 12 students.",
    explanationHi: "अधिकतम संख्या = 36 और 48 का म.स. = 12 छात्र।"
  },
  {
    id: 19,
    q: "Which of the following numbers is divisible by 9?",
    qHi: "निम्नलिखित में से कौन सी संख्या 9 से विभाज्य है?",
    options: ["5471", "5472", "5473", "5474"],
    optionsHi: ["5471", "5472", "5473", "5474"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & CTET",
    explanation: "Sum of digits of 5472 = 5 + 4 + 7 + 2 = 18, which is divisible by 9.",
    explanationHi: "5472 के अंकों का योग = 5 + 4 + 7 + 2 = 18, जो 9 से विभाज्य है।"
  },
  {
    id: 20,
    q: "According to the divisibility rules, a number is divisible by 6 if and only if:",
    qHi: "विभाज्यता के नियमों के अनुसार, कोई संख्या 6 से विभाज्य तभी होती है जब:",
    options: ["It ends with 6", "It is divisible by both 2 and 3", "It is divisible by 3 only", "Sum of its digits is 6"],
    optionsHi: ["यह 6 पर समाप्त होती है", "यह 2 और 3 दोनों से विभाज्य हो", "यह केवल 3 से विभाज्य हो", "इसके अंकों का योग 6 हो"],
    ans: 1,
    pyqRef: "CTET Paper 1 & UPTET",
    explanation: "Since 6 = 2 × 3 (co-prime factors), a number must be divisible by both 2 and 3 to be divisible by 6.",
    explanationHi: "चूंकि 6 = 2 × 3, अतः किसी संख्या को 6 से विभाज्य होने के लिए 2 और 3 दोनों से विभाज्य होना आवश्यक है।"
  },
  {
    id: 21,
    q: "What is the LCM of two co-prime numbers 'a' and 'b'?",
    qHi: "दो सह-अभाज्य संख्याओं 'a' और 'b' का लघुत्तम समापवर्त्य (LCM) क्या होता है?",
    options: ["1", "a + b", "a × b", "(a × b) / 2"],
    optionsHi: ["1", "a + b", "a × b (दोनों का गुणनफल)", "(a × b) / 2"],
    ans: 2,
    pyqRef: "CTET Paper 1 & Bihar STET",
    explanation: "For co-prime numbers, HCF = 1. Therefore, LCM = Product ÷ HCF = a × b.",
    explanationHi: "सह-अभाज्य संख्याओं का HCF = 1 होता है। अतः LCM = a × b।"
  },
  {
    id: 22,
    q: "What is the HCF of any two consecutive natural numbers (such as 14 and 15)?",
    qHi: "किन्हीं दो क्रमागत प्राकृतिक संख्याओं (जैसे 14 और 15) का महत्तम समापवर्तक (HCF) सदैव क्या होता है?",
    options: ["0", "1", "2", "Their product"],
    optionsHi: ["0", "1", "2", "उनका गुणनफल"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "Consecutive integers have no common factors greater than 1; their HCF is always 1.",
    explanationHi: "दो क्रमागत संख्याओं में 1 के अतिरिक्त कोई उभयनिष्ठ गुणनखंड नहीं होता, अतः HCF सदैव 1 होता है।"
  },
  {
    id: 23,
    q: "A number is called a 'perfect number' if the sum of all its proper factors equals the number itself. Which is the smallest perfect number?",
    qHi: "यदि किसी संख्या के सभी उचित गुणनखंडों का योग उस संख्या के बराबर हो, तो उसे 'सम्पूर्ण संख्या' (Perfect number) कहते हैं। सबसे छोटी सम्पूर्ण संख्या कौन सी है?",
    options: ["4", "6", "8", "12"],
    optionsHi: ["4", "6", "8", "12"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy & BPSC TRE",
    explanation: "Factors of 6 other than 6 are 1, 2, 3. Sum = 1 + 2 + 3 = 6. Hence, 6 is the smallest perfect number.",
    explanationHi: "6 के उचित गुणनखंड 1, 2, 3 हैं। योग = 1 + 2 + 3 = 6। अतः 6 सबसे छोटी सम्पूर्ण संख्या है।"
  },
  {
    id: 24,
    q: "Find the least number which when divided by 6, 8, and 12 leaves a remainder of 3 in each case.",
    qHi: "वह सबसे छोटी संख्या ज्ञात कीजिए जिसे 6, 8 और 12 से भाग देने पर प्रत्येक दशा में 3 शेष बचे।",
    options: ["21", "27", "45", "51"],
    optionsHi: ["21", "27", "45", "51"],
    ans: 1,
    pyqRef: "CTET Paper 1 & Sainik School",
    explanation: "LCM(6, 8, 12) = 24. Required number = LCM + remainder = 24 + 3 = 27.",
    explanationHi: "6, 8, 12 का ल.स. = 24। अभीष्ट संख्या = 24 + 3 = 27।"
  },
  {
    id: 25,
    q: "Which digit should replace * in 34*2 so that the number becomes divisible by 3?",
    qHi: "संख्या 34*2 में * के स्थान पर कौन सा सबसे छोटा अंक आए ताकि संख्या 3 से विभाज्य हो जाए?",
    options: ["0", "1", "2", "3"],
    optionsHi: ["0", "1", "2", "3"],
    ans: 0,
    pyqRef: "BPSC TRE 2.0 & UPTET",
    explanation: "Sum of known digits = 3 + 4 + 2 = 9 (already divisible by 3). Smallest digit is 0 (3+4+0+2=9).",
    explanationHi: "ज्ञात अंकों का योग = 3 + 4 + 2 = 9 (पहले से 3 से विभाज्य)। सबसे छोटा अंक 0 होगा।"
  },
  {
    id: 26,
    q: "How many prime numbers exist between 1 and 20?",
    qHi: "1 और 20 के बीच कुल कितनी अभाज्य संख्याएँ हैं?",
    options: ["6", "7", "8", "9"],
    optionsHi: ["6", "7", "8", "9"],
    ans: 2,
    pyqRef: "CTET Paper 1 & REET",
    explanation: "The primes are 2, 3, 5, 7, 11, 13, 17, 19 (total 8 prime numbers).",
    explanationHi: "अभाज्य संख्याएँ हैं: 2, 3, 5, 7, 11, 13, 17, 19 (कुल 8 अभाज्य संख्याएँ)।"
  },
  {
    id: 27,
    q: "What is the HCF of any two distinct prime numbers 'p' and 'q'?",
    qHi: "किन्हीं दो भिन्न अभाज्य संख्याओं 'p' और 'q' का महत्तम समापवर्तक (HCF) क्या होता है?",
    options: ["0", "1", "p × q", "p + q"],
    optionsHi: ["0", "1", "p × q", "p + q"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & CTET",
    explanation: "Prime numbers only have 1 and themselves as factors. Common factor between two distinct primes is always 1.",
    explanationHi: "दो भिन्न अभाज्य संख्याओं का उभयनिष्ठ गुणनखंड केवल 1 होता है, अतः HCF = 1।"
  },
  {
    id: 28,
    q: "Which of the following is divisible by 11?",
    qHi: "निम्नलिखित में से कौन सी संख्या 11 से विभाज्य है?",
    options: ["1331", "1341", "1321", "1351"],
    optionsHi: ["1331", "1341", "1321", "1351"],
    ans: 0,
    pyqRef: "CTET Paper 1 & SSC GD",
    explanation: "In 1331: (1+3) - (3+1) = 4 - 4 = 0. Divisible by 11 (11³ = 1331).",
    explanationHi: "1331 में: (1+3) - (3+1) = 0। अतः यह 11 से पूर्णतः विभाज्य है।"
  },
  {
    id: 29,
    q: "Find the common factors of 15 and 25.",
    qHi: "15 और 25 के सार्व गुणनखंड (Common factors) ज्ञात कीजिए।",
    options: ["1 and 3", "1 and 5", "3 and 5", "1, 3, 5"],
    optionsHi: ["1 और 3", "1 और 5", "3 और 5", "1, 3, 5"],
    ans: 1,
    pyqRef: "JNVST Class 6 Entrance",
    explanation: "Factors of 15: 1, 3, 5, 15. Factors of 25: 1, 5, 25. Common factors are 1 and 5.",
    explanationHi: "15 और 25 दोनों को विभाजित करने वाले अंक 1 और 5 हैं।"
  },
  {
    id: 30,
    q: "What is the smallest number having four different prime factors?",
    qHi: "चार भिन्न अभाज्य गुणनखंडों वाली सबसे छोटी संख्या कौन सी है?",
    options: ["60", "120", "210", "330"],
    optionsHi: ["60", "120", "210", "330"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "Smallest 4 primes are 2, 3, 5, 7. Product = 2 × 3 × 5 × 7 = 210.",
    explanationHi: "चार सबसे छोटी अभाज्य संख्याएँ 2, 3, 5, 7 हैं। गुणनफल = 2 × 3 × 5 × 7 = 210।"
  }
];

const ch14 = [
  {
    id: 1,
    q: "On a state road map, the scale is 1 cm = 10 km. If the distance between two towns on the map is 4.5 cm, what is the actual distance?",
    qHi: "सड़क के एक नक्शे पर पैमाना 1 cm = 10 km है। यदि नक्शे पर दो शहरों के बीच की दूरी 4.5 cm है, तो वास्तविक दूरी क्या होगी?",
    options: ["35 km", "40 km", "45 km", "50 km"],
    optionsHi: ["35 km", "40 km", "45 km", "50 km"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE Primary",
    explanation: "Actual distance = 4.5 × 10 km = 45 km.",
    explanationHi: "वास्तविक दूरी = 4.5 × 10 km = 45 किमी।"
  },
  {
    id: 2,
    q: "In standard cartography (map reading), which direction is conventionally at the top of the map?",
    qHi: "मानक मानचित्र पठन (Cartography) में मानचित्र के शीर्ष (ऊपरी भाग) पर कौन सी दिशा दर्शायी जाती है?",
    options: ["East", "West", "North", "South"],
    optionsHi: ["पूर्व (East)", "पश्चिम (West)", "उत्तर (North)", "दक्षिण (South)"],
    ans: 2,
    pyqRef: "CTET Paper 1 Pedagogy & BPSC TRE",
    explanation: "By convention, maps are oriented with North pointing directly towards the top.",
    explanationHi: "मानक परंपरा के अनुसार मानचित्र का ऊपरी भाग सदैव उत्तर (North) दिशा को दर्शाता है।"
  },
  {
    id: 3,
    q: "On a map with scale 1 cm = 5 km, two tourist spots are actually 35 km apart. What will be the distance between them on the map?",
    qHi: "1 cm = 5 km पैमाने वाले नक्शे पर दो पर्यटन स्थल वास्तव में 35 km दूर हैं। नक्शे पर उनके बीच की दूरी क्या होगी?",
    options: ["5 cm", "6 cm", "7 cm", "8 cm"],
    optionsHi: ["5 cm", "6 cm", "7 cm", "8 cm"],
    ans: 2,
    pyqRef: "CTET Paper 1 & UPTET",
    explanation: "Map distance = 35 ÷ 5 = 7 cm.",
    explanationHi: "नक्शे पर दूरी = 35 ÷ 5 = 7 cm।"
  },
  {
    id: 4,
    q: "The direction located midway between North and East is known as:",
    qHi: "उत्तर (North) और पूर्व (East) के ठीक मध्य में स्थित दिशा को क्या कहा जाता है?",
    options: ["North-East (उत्तर-पूर्व / ईशान)", "North-West (उत्तर-पश्चिम)", "South-East (दक्षिण-पूर्व)", "South-West (दक्षिण-पश्चिम)"],
    optionsHi: ["उत्तर-पूर्व (ईशान)", "उत्तर-पश्चिम", "दक्षिण-पूर्व", "दक्षिण-पश्चिम"],
    ans: 0,
    pyqRef: "CTET Paper 1 & DSSSB PRT",
    explanation: "The intermediate direction between North and East is North-East (NE).",
    explanationHi: "उत्तर और पूर्व के बीच की दिशा को उत्तर-पूर्व (NE) कहा जाता है।"
  },
  {
    id: 5,
    q: "If you are facing North and you turn 90° clockwise, which direction are you now facing?",
    qHi: "यदि आपका मुख उत्तर दिशा की ओर है और आप घड़ी की सुई की दिशा (Clockwise) में 90° घूमते हैं, तो अब आपका मुख किस दिशा में होगा?",
    options: ["West", "East", "South", "North-East"],
    optionsHi: ["पश्चिम", "पूर्व (East)", "दक्षिण", "उत्तर-पूर्व"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & JNVST",
    explanation: "90° clockwise turn from North points directly towards East.",
    explanationHi: "उत्तर से दक्षिणावर्त 90° घूमने पर मुख पूर्व दिशा की ओर होगा।"
  },
  {
    id: 6,
    q: "If a person faces East and makes a half-turn (180° rotation), which direction will they face?",
    qHi: "यदि कोई व्यक्ति पूर्व की ओर मुख करके खड़ा है और 180° का आधा घुमाव करता है, तो उसका मुख किस दिशा में होगा?",
    options: ["North", "South", "West", "North-West"],
    optionsHi: ["उत्तर", "दक्षिण", "पश्चिम (West)", "उत्तर-पश्चिम"],
    ans: 2,
    pyqRef: "CTET Paper 1 & REET",
    explanation: "180° turn reverses direction completely. Opposite of East is West.",
    explanationHi: "180° घुमाने पर दिशा बिल्कुल विपरीत हो जाती है। पूर्व का विपरीत पश्चिम है।"
  },
  {
    id: 7,
    q: "What is the angle between North and East directions?",
    qHi: "उत्तर और पूर्व दिशाओं के बीच कितने अंश का कोण होता है?",
    options: ["45°", "60°", "90°", "180°"],
    optionsHi: ["45°", "60°", "90° (समकोण)", "180°"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "The four cardinal directions are separated by 90° right angles each.",
    explanationHi: "चारों मुख्य दिशाओं के मध्य 90° (समकोण) का कोण होता है।"
  },
  {
    id: 8,
    q: "What is the angle between North and North-East?",
    qHi: "उत्तर और उत्तर-पूर्व के बीच कितने अंश का कोण होता है?",
    options: ["30°", "45°", "60°", "90°"],
    optionsHi: ["30°", "45°", "60°", "90°"],
    ans: 1,
    pyqRef: "CTET Paper 1 & KVS PRT",
    explanation: "North-East bisects the 90° angle between North and East: 90° ÷ 2 = 45°.",
    explanationHi: "उत्तर-पूर्व कोण को समद्विभाजित करता है: 90° ÷ 2 = 45°।"
  },
  {
    id: 9,
    q: "A scale on a blueprint is 1 cm = 2 m. A bedroom measures 3 cm in length and 2.5 cm in breadth on the print. What are the actual dimensions?",
    qHi: "एक नक्शे पर पैमाना 1 cm = 2 m है। नक्शे पर एक शयनकक्ष 3 cm लंबा और 2.5 cm चौड़ा है। इसके वास्तविक आयाम क्या हैं?",
    options: ["5 m by 4 m", "6 m by 5 m", "6 m by 4 m", "8 m by 6 m"],
    optionsHi: ["5 m × 4 m", "6 m × 5 m", "6 m × 4 m", "8 m × 6 m"],
    ans: 1,
    pyqRef: "BPSC TRE 3.0 & CTET",
    explanation: "Length = 3 × 2 = 6 m. Breadth = 2.5 × 2 = 5 m.",
    explanationHi: "लंबाई = 3 × 2 = 6 m। चौड़ाई = 2.5 × 2 = 5 m।"
  },
  {
    id: 10,
    q: "A person walks 4 km North, then turns East and walks 3 km. How far is the person from the starting point?",
    qHi: "एक व्यक्ति 4 किमी उत्तर की ओर चलता है, फिर पूर्व की ओर मुड़कर 3 किमी चलता है। वह प्रारंभिक बिंदु से कितनी दूरी पर है?",
    options: ["5 km", "6 km", "7 km", "8 km"],
    optionsHi: ["5 किमी", "6 किमी", "7 किमी", "8 किमी"],
    ans: 0,
    pyqRef: "CTET Paper 1 & SSC MTS",
    explanation: "Using Pythagoras theorem: √(4² + 3²) = √(16 + 9) = √25 = 5 km.",
    explanationHi: "पाइथागोरस प्रमेय से: √(4² + 3²) = √25 = 5 किमी।"
  },
  {
    id: 11,
    q: "In the morning at sunrise, in which direction does the shadow of a vertical flagpost fall?",
    qHi: "सुबह सूर्योदय के समय किसी ऊर्ध्वाधर ध्वजदंड की छाया किस दिशा में पड़ती है?",
    options: ["East", "West", "North", "South"],
    optionsHi: ["पूर्व", "पश्चिम (West)", "उत्तर", "दक्षिण"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & Math",
    explanation: "Sun rises in the East, so shadows fall in the opposite direction, which is West.",
    explanationHi: "सूर्य पूर्व में उगता है, अतः छाया इसके ठीक विपरीत पश्चिम दिशा में पड़ती है।"
  },
  {
    id: 12,
    q: "In a magnetic compass, towards which direction does the coloured magnetic needle point at rest?",
    qHi: "चुंबकीय कम्पास में विराम अवस्था में रंगीन चुंबकीय सुई किस दिशा की ओर संकेत करती है?",
    options: ["Geographic East", "Magnetic North", "Magnetic South", "Magnetic West"],
    optionsHi: ["भौगोलिक पूर्व", "चुंबकीय उत्तर (North)", "चुंबकीय दक्षिण", "चुंबकीय पश्चिम"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "The north-seeking pole of the compass needle points towards the Earth's magnetic North.",
    explanationHi: "कम्पास की सुई सदैव उत्तर (North) दिशा की ओर संकेत करती है।"
  },
  {
    id: 13,
    q: "Which Indian state is located directly to the South of Bihar?",
    qHi: "कौन सा भारतीय राज्य बिहार के ठीक दक्षिण में स्थित है?",
    options: ["Uttar Pradesh", "West Bengal", "Jharkhand", "Odisha"],
    optionsHi: ["उत्तर प्रदेश", "पश्चिम बंगाल", "झारखंड", "ओडिशा"],
    ans: 2,
    pyqRef: "BPSC TRE Primary & Bihar STET",
    explanation: "Jharkhand lies to the South of Bihar (carved out of southern Bihar in 2000).",
    explanationHi: "झारखंड बिहार के दक्षिण में स्थित है।"
  },
  {
    id: 14,
    q: "Which neighbouring country shares an international border with Bihar to its North?",
    qHi: "बिहार के उत्तर में कौन सा पड़ोसी देश अंतर्राष्ट्रीय सीमा साझा करता है?",
    options: ["Bhutan", "Nepal", "Bangladesh", "Myanmar"],
    optionsHi: ["भूटान", "नेपाल", "बांग्लादेश", "म्यांमार"],
    ans: 1,
    pyqRef: "BPSC TRE 1.0 & Bihar Special",
    explanation: "Nepal borders Bihar along its northern frontier.",
    explanationHi: "बिहार के उत्तर में नेपाल देश स्थित है।"
  },
  {
    id: 15,
    q: "What direction is directly opposite to South-East?",
    qHi: "दक्षिण-पूर्व (South-East) के ठीक विपरीत कौन सी दिशा होती है?",
    options: ["North-East", "North-West", "South-West", "East-North"],
    optionsHi: ["उत्तर-पूर्व", "उत्तर-पश्चिम (North-West)", "दक्षिण-पश्चिम", "पूर्व-उत्तर"],
    ans: 1,
    pyqRef: "CTET Paper 1 & DSSSB",
    explanation: "Opposite of South is North, opposite of East is West. Hence, North-West.",
    explanationHi: "दक्षिण का विपरीत उत्तर और पूर्व का विपरीत पश्चिम है। अतः उत्तर-पश्चिम।"
  },
  {
    id: 16,
    q: "If the scale on a city map is 1 cm = 20 km, and the distance between Patna and Gaya is shown as 5 cm, what is the actual distance?",
    qHi: "यदि शहर के नक्शे का पैमाना 1 cm = 20 km है और पटना तथा गया के बीच की दूरी 5 cm दर्शायी गई है, तो वास्तविक दूरी क्या है?",
    options: ["80 km", "100 km", "120 km", "150 km"],
    optionsHi: ["80 km", "100 km", "120 km", "150 km"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & CTET",
    explanation: "Actual distance = 5 × 20 km = 100 km.",
    explanationHi: "वास्तविक दूरी = 5 × 20 km = 100 किमी।"
  },
  {
    id: 17,
    q: "A boy walks 10 m South, then turns right and walks 10 m West, then turns right and walks 10 m North. In which direction is he now from his starting point?",
    qHi: "एक लड़का 10 m दक्षिण चलता है, फिर दाएँ मुड़कर 10 m पश्चिम चलता है, फिर दाएँ मुड़कर 10 m उत्तर चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में है?",
    options: ["North", "South", "East", "West"],
    optionsHi: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम (West)"],
    ans: 3,
    pyqRef: "CTET Paper 1 & State TET",
    explanation: "The South and North movements cancel out (10 m down and 10 m up). He is exactly 10 m to the West.",
    explanationHi: "दक्षिण और उत्तर की दूरियाँ परस्पर कट जाती हैं। वह प्रारंभिक बिंदु से ठीक पश्चिम दिशा में 10 m दूर है।"
  },
  {
    id: 18,
    q: "If you are facing the setting sun in the evening (facing West), which cardinal direction is to your right-hand side?",
    qHi: "यदि शाम को आपका मुख ढलते सूरज (पश्चिम) की ओर है, तो आपके दाएँ हाथ की ओर कौन सी दिशा होगी?",
    options: ["North", "South", "East", "North-West"],
    optionsHi: ["उत्तर (North)", "दक्षिण", "पूर्व", "उत्तर-पश्चिम"],
    ans: 0,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "When facing West, North is to your right and South is to your left.",
    explanationHi: "पश्चिम की ओर मुख करने पर दायाँ हाथ उत्तर (North) और बायाँ हाथ दक्षिण की ओर होता है।"
  },
  {
    id: 19,
    q: "What does the symbol of parallel lines with small perpendicular hatches represent on a survey map?",
    qHi: "सर्वेक्षण मानचित्र पर छोटी आड़ी रेखाओं वाली समानांतर पटरियों का प्रतीक क्या दर्शाता है?",
    options: ["Highway", "River", "Railway track", "Boundary wall"],
    optionsHi: ["राष्ट्रीय राजमार्ग", "नदी", "रेलवे लाइन (Railway track)", "सीमा दीवार"],
    ans: 2,
    pyqRef: "CTET Paper 1 EVS/Map",
    explanation: "In conventional map symbols, parallel lines with cross ties depict a railway line.",
    explanationHi: "मानचित्र पर पटरियों वाला यह प्रतीक रेलवे लाइन को दर्शाता है।"
  },
  {
    id: 20,
    q: "A map scale is given as 1 : 50,000. How many kilometres on the ground does 2 cm on this map represent?",
    qHi: "एक नक्शे का पैमाना 1 : 50,000 दिया गया है। इस नक्शे पर 2 cm जमीन पर कितने किलोमीटर को दर्शाता है?",
    options: ["0.5 km", "1 km", "2 km", "5 km"],
    optionsHi: ["0.5 km", "1 km", "2 km", "5 km"],
    ans: 1,
    pyqRef: "BPSC TRE 3.0 & CTET",
    explanation: "2 cm on map = 2 × 50,000 cm = 100,000 cm = 1,000 m = 1 km.",
    explanationHi: "2 cm = 2 × 50,000 cm = 100,000 cm = 1,000 m = 1 km।"
  },
  {
    id: 21,
    q: "In a coordinate grid map, the point where the horizontal X-axis and vertical Y-axis intersect is called:",
    qHi: "निर्देशांक ग्रिड मानचित्र में जहाँ क्षैतिज X-अक्ष और ऊर्ध्वाधर Y-अक्ष परस्पर काटते हैं, उस बिंदु को क्या कहते हैं?",
    options: ["Quadrant", "Origin (0,0)", "Centroid", "Apex"],
    optionsHi: ["चतुर्थांश", "मूल बिंदु / Origin (0,0)", "केंद्रक", "शीर्ष"],
    ans: 1,
    pyqRef: "CTET Paper 1 & Bihar STET",
    explanation: "The intersection of the axes is defined as the Origin (0, 0).",
    explanationHi: "दोनों अक्षों के प्रतिच्छेदन बिंदु को मूल बिंदु (Origin) कहते हैं।"
  },
  {
    id: 22,
    q: "Starting from home at (2, 3) on a grid, Ritu moves 3 units East and 2 units North. What are her new coordinates?",
    qHi: "ग्रिड पर (2, 3) से शुरू करके रितु 3 इकाई पूर्व और 2 इकाई उत्तर चलती है। उसके नए निर्देशांक क्या होंगे?",
    options: ["(5, 5)", "(5, 1)", "(1, 5)", "(4, 6)"],
    optionsHi: ["(5, 5)", "(5, 1)", "(1, 5)", "(4, 6)"],
    ans: 0,
    pyqRef: "CTET Paper 1 & KVS PRT",
    explanation: "East increases x by 3: 2 + 3 = 5. North increases y by 2: 3 + 2 = 5. New coordinates = (5, 5).",
    explanationHi: "पूर्व में x + 3 = 5। उत्तर में y + 2 = 5। नए निर्देशांक = (5, 5)।"
  },
  {
    id: 23,
    q: "If a person turns 270° clockwise from North, which direction are they facing?",
    qHi: "यदि कोई व्यक्ति उत्तर से दक्षिणावर्त 270° घूमता है, तो उसका मुख किस दिशा में होगा?",
    options: ["East", "South", "West", "North-East"],
    optionsHi: ["पूर्व", "दक्षिण", "पश्चिम (West)", "उत्तर-पूर्व"],
    ans: 2,
    pyqRef: "JNVST Class 6 Entrance",
    explanation: "270° clockwise is equivalent to 90° counter-clockwise. North to 90° anti-clockwise points West.",
    explanationHi: "270° दक्षिणावर्त = 90° वामावर्त। उत्तर से 90° वामावर्त पश्चिम दिशा होती है।"
  },
  {
    id: 24,
    q: "Which state is located immediately to the West of Bihar?",
    qHi: "बिहार के ठीक पश्चिम में कौन सा राज्य स्थित है?",
    options: ["West Bengal", "Uttar Pradesh", "Madhya Pradesh", "Jharkhand"],
    optionsHi: ["पश्चिम बंगाल", "उत्तर प्रदेश (UP)", "मध्य प्रदेश", "झारखंड"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & Bihar GK",
    explanation: "Uttar Pradesh shares the western border of Bihar.",
    explanationHi: "बिहार के पश्चिम में उत्तर प्रदेश राज्य स्थित है।"
  },
  {
    id: 25,
    q: "Which state is located immediately to the East of Bihar?",
    qHi: "बिहार के ठीक पूर्व में कौन सा राज्य स्थित है?",
    options: ["Assam", "West Bengal", "Odisha", "Jharkhand"],
    optionsHi: ["असम", "पश्चिम बंगाल", "ओडिशा", "झारखंड"],
    ans: 1,
    pyqRef: "BPSC TRE Primary",
    explanation: "West Bengal is situated to the East of Bihar.",
    explanationHi: "बिहार के पूर्व में पश्चिम बंगाल स्थित है।"
  },
  {
    id: 26,
    q: "What is the ratio between distance on a map and the corresponding distance on the ground called?",
    qHi: "मानचित्र पर मापी गई दूरी और जमीन पर उसकी वास्तविक दूरी के अनुपात को क्या कहा जाता है?",
    options: ["Legend", "Scale of map", "Elevation", "Grid reference"],
    optionsHi: ["संकेतिका", "मानचित्र का पैमाना (Scale)", "उन्नतांश", "ग्रिड संदर्भ"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "The ratio of map distance to real ground distance is called the Map Scale.",
    explanationHi: "मानचित्र दूरी और वास्तविक धरातलीय दूरी के अनुपात को पैमाना (Scale) कहते हैं।"
  },
  {
    id: 27,
    q: "If 1 cm on a map represents 50 metres on ground, how many square metres are represented by a 2 cm × 2 cm square on the map?",
    qHi: "यदि नक्शे पर 1 cm जमीन पर 50 मीटर को दर्शाता है, तो नक्शे पर 2 cm × 2 cm का वर्ग जमीन पर कितने वर्ग मीटर को दर्शाएगा?",
    options: ["100 m²", "1,000 m²", "10,000 m²", "40,000 m²"],
    optionsHi: ["100 m²", "1,000 m²", "10,000 m²", "40,000 m²"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "2 cm on map = 2 × 50 = 100 m on ground. Area = 100 m × 100 m = 10,000 m².",
    explanationHi: "2 cm = 100 मीटर। क्षेत्रफल = 100 m × 100 m = 10,000 m²।"
  },
  {
    id: 28,
    q: "What is the direction midway between South and West?",
    qHi: "दक्षिण और पश्चिम के ठीक मध्य की दिशा को क्या कहते हैं?",
    options: ["South-East", "South-West (नैऋत्य)", "North-West", "West-South"],
    optionsHi: ["दक्षिण-पूर्व", "दक्षिण-पश्चिम (नैऋत्य)", "उत्तर-पश्चिम", "पश्चिम-दक्षिण"],
    ans: 1,
    pyqRef: "CTET Paper 1 & State TET",
    explanation: "The intermediate direction is South-West (SW).",
    explanationHi: "दक्षिण और पश्चिम के मध्य की दिशा दक्षिण-पश्चिम (SW) कहलाती है।"
  },
  {
    id: 29,
    q: "Which component of a map helps users identify what different symbols, colours, and lines mean?",
    qHi: "मानचित्र का कौन सा घटक उपयोगकर्ताओं को विभिन्न प्रतीकों, रंगों और रेखाओं के अर्थ समझने में मदद करता है?",
    options: ["Title", "Scale", "Legend / Key", "Compass rose"],
    optionsHi: ["शीर्षक", "पैमाना", "संकेतिका / कुंजी (Legend / Key)", "दिशा सूचक"],
    ans: 2,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "The Legend (or Key) explains the meaning of all symbols, colours, and markers on a map.",
    explanationHi: "संकेतिका (Legend / Key) नक्शे पर प्रयुक्त सभी प्रतीकों और रंगों के अर्थ को स्पष्ट करती है।"
  },
  {
    id: 30,
    q: "If an ant starts at (0, 0) and moves 4 units East, then 5 units North, then 4 units West, where is the ant now?",
    qHi: "यदि एक चींटी (0, 0) से शुरू करके 4 इकाई पूर्व, फिर 5 इकाई उत्तर, फिर 4 इकाई पश्चिम चलती है, तो चींटी अब कहाँ स्थित है?",
    options: ["(0, 5)", "(4, 5)", "(0, 0)", "(5, 0)"],
    optionsHi: ["(0, 5)", "(4, 5)", "(0, 0)", "(5, 0)"],
    ans: 0,
    pyqRef: "CTET Paper 1 & BPSC TRE Primary",
    explanation: "X-coordinate: 0 + 4 - 4 = 0. Y-coordinate: 0 + 5 = 5. Current position = (0, 5).",
    explanationHi: "X-अक्ष: 0 + 4 - 4 = 0। Y-अक्ष: 0 + 5 = 5। वर्तमान स्थिति = (0, 5)।"
  }
];

const ch15 = [
  {
    id: 1,
    q: "What is a graphical representation of data using pictures or icons called?",
    qHi: "चित्रों या प्रतीकों का उपयोग करके आँकड़ों के चित्रात्मक निरूपण को क्या कहा जाता है?",
    options: ["Bar graph", "Pictograph (चित्रालेख)", "Tally chart", "Histogram"],
    optionsHi: ["दण्ड आलेख (Bar graph)", "चित्रालेख (Pictograph)", "मिलान चिह्न चार्ट", "आयतचित्र"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE Primary",
    explanation: "A pictograph represents numerical data visually using pictures or symbols.",
    explanationHi: "चित्रों या प्रतीकों द्वारा आँकड़ों के निरूपण को चित्रालेख (Pictograph) कहते हैं।"
  },
  {
    id: 2,
    q: "In a school pictograph, 1 smiley icon represents 5 students. How many students are represented by 6 smiley icons?",
    qHi: "विद्यालय के एक चित्रालेख में 1 स्माइली प्रतीक 5 छात्रों को दर्शाता है। 6 स्माइली प्रतीक कितने छात्रों को दर्शाते हैं?",
    options: ["25 students", "30 students", "35 students", "40 students"],
    optionsHi: ["25 छात्र", "30 छात्र", "35 छात्र", "40 छात्र"],
    ans: 1,
    pyqRef: "CTET Paper 1 & UPTET",
    explanation: "6 smileys × 5 students/smiley = 30 students.",
    explanationHi: "6 × 5 = 30 छात्र।"
  },
  {
    id: 3,
    q: "If 1 book icon represents 10 books in a library chart, how many icons are needed to represent 45 books?",
    qHi: "यदि पुस्तकालय चार्ट में 1 पुस्तक का प्रतीक 10 पुस्तकों को दर्शाता है, तो 45 पुस्तकों को दर्शाने के लिए कितने प्रतीकों की आवश्यकता होगी?",
    options: ["4 full icons", "4.5 icons (4 full and 1 half)", "5 full icons", "40 icons"],
    optionsHi: ["4 पूरे प्रतीक", "4.5 प्रतीक (4 पूरे और 1 आधा)", "5 पूरे प्रतीक", "40 प्रतीक"],
    ans: 1,
    pyqRef: "NCERT Class 5 Ch 15 & CTET",
    explanation: "45 ÷ 10 = 4.5 icons (4 complete book icons and 1 half book icon).",
    explanationHi: "45 ÷ 10 = 4.5 प्रतीक (4 पूरे और 1 आधा प्रतीक)।"
  },
  {
    id: 4,
    q: "In tally marks notation, how is the number 8 represented?",
    qHi: "मिलान चिह्नों (Tally marks) में संख्या 8 को कैसे लिखा जाता है?",
    options: ["||||||||", "卌 |||", "卌 卌", "|||| ||||"],
    optionsHi: ["||||||||", "卌 ||| (एक 5 का बंडल + 3 डंडे)", "卌 卌", "|||| ||||"],
    ans: 1,
    pyqRef: "CTET Paper 1 & DSSSB PRT",
    explanation: "5 is represented by 4 vertical strokes with 1 diagonal stroke across them, followed by 3 individual strokes: 卌 |||.",
    explanationHi: "5 का एक बंडल और 3 अलग डंडे = 卌 |||।"
  },
  {
    id: 5,
    q: "How is the number 14 represented in standard tally marks?",
    qHi: "मानक मिलान चिह्नों में संख्या 14 को किस प्रकार दर्शाया जाता है?",
    options: ["卌 卌 ||||", "卌 卌 卌", "卌 |||| ||||", "卌 卌 |||"],
    optionsHi: ["卌 卌 |||| (दो 5 के बंडल + 4 डंडे)", "卌 卌 卌", "卌 |||| ||||", "卌 卌 |||"],
    ans: 0,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "14 = 5 + 5 + 4 = two bundles of 5 and four individual strokes (卌 卌 ||||).",
    explanationHi: "14 = 5 + 5 + 4 = 5 के दो बंडल और 4 अलग डंडे (卌 卌 ||||)।"
  },
  {
    id: 6,
    q: "In a vertical bar graph, what does the height of each bar indicate?",
    qHi: "एक ऊर्ध्वाधर दण्ड आलेख (Bar graph) में प्रत्येक दण्ड (बार) की ऊँचाई क्या दर्शाती है?",
    options: ["Width of data", "Frequency or magnitude of the category", "Number of bars", "Scale of the axis"],
    optionsHi: ["आँकड़ों की चौड़ाई", "श्रेणी की बारंबारता या मान (Frequency / Value)", "दण्डों की संख्या", "अक्ष का पैमाना"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "The height of each bar is proportional to the frequency or numerical value of that category.",
    explanationHi: "प्रत्येक दण्ड की ऊँचाई उस वर्ग की बारंबारता या मान के समानुपाती होती है।"
  },
  {
    id: 7,
    q: "In a correctly drawn bar graph, which property must remain uniform and equal for all bars?",
    qHi: "सही ढंग से बनाए गए दण्ड आलेख में सभी दण्डों के लिए कौन सी विशेषता एकसमान और बराबर होनी चाहिए?",
    options: ["Height of bars", "Width of bars and spacing between them", "Colour of bars", "Number of labels"],
    optionsHi: ["दण्डों की ऊँचाई", "दण्डों की चौड़ाई और उनके बीच की दूरी", "दण्डों का रंग", "लेबल की संख्या"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy & BPSC TRE",
    explanation: "All bars must have equal width and equal spacing between adjacent bars.",
    explanationHi: "सभी दण्डों की चौड़ाई और उनके बीच का अंतराल सदैव एकसमान होना चाहिए।"
  },
  {
    id: 8,
    q: "The value that appears most frequently in a given set of observations is called the:",
    qHi: "दिए गए प्रेक्षणों के समूह में सबसे अधिक बार आने वाला मान क्या कहलाता है?",
    options: ["Mean (माध्य)", "Median (माध्यिका)", "Mode (बहुलक)", "Range (परिसर)"],
    optionsHi: ["माध्य (Mean)", "माध्यिका (Median)", "बहुलक (Mode)", "परिसर (Range)"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE Primary",
    explanation: "The observation with the highest frequency is called the Mode.",
    explanationHi: "सर्वाधिक बारंबारता वाले प्रेक्षण को बहुलक (Mode) कहा जाता है।"
  },
  {
    id: 9,
    q: "Find the mean (average) of the numbers: 10, 15, 20, 25, 30.",
    qHi: "संख्याओं 10, 15, 20, 25, 30 का माध्य (औसत) ज्ञात कीजिए।",
    options: ["18", "20", "22", "25"],
    optionsHi: ["18", "20", "22", "25"],
    ans: 1,
    pyqRef: "CTET Paper 1 & JNVST",
    explanation: "Sum = 10 + 15 + 20 + 25 + 30 = 100. Mean = 100 ÷ 5 = 20.",
    explanationHi: "योग = 100। माध्य = 100 ÷ 5 = 20।"
  },
  {
    id: 10,
    q: "In a class survey of 40 students, favorite sports are: Cricket 16, Football 12, Badminton 8, Chess 4. Which sport is the mode of this dataset?",
    qHi: "40 छात्रों के एक सर्वेक्षण में पसंदीदा खेल हैं: क्रिकेट 16, फुटबॉल 12, बैडमिंटन 8, शतरंज 4। इस आँकड़े का बहुलक कौन सा खेल है?",
    options: ["Football", "Badminton", "Cricket", "Chess"],
    optionsHi: ["फुटबॉल", "बैडमिंटन", "क्रिकेट (Cricket)", "शतरंज"],
    ans: 2,
    pyqRef: "CTET Paper 1 & REET",
    explanation: "Cricket has the highest frequency (16 students), so Cricket is the mode.",
    explanationHi: "क्रिकेट की बारंबारता सबसे अधिक (16) है, अतः क्रिकेट बहुलक है।"
  },
  {
    id: 11,
    q: "If a bar representing 20 vehicles is drawn with a height of 4 cm, what scale was used?",
    qHi: "यदि 20 वाहनों को दर्शाने वाले दण्ड की ऊँचाई 4 cm खींची गई है, तो किस पैमाने का उपयोग किया गया था?",
    options: ["1 cm = 4 vehicles", "1 cm = 5 vehicles", "1 cm = 10 vehicles", "1 cm = 20 vehicles"],
    optionsHi: ["1 cm = 4 वाहन", "1 cm = 5 वाहन", "1 cm = 10 वाहन", "1 cm = 20 वाहन"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & CTET",
    explanation: "20 vehicles ÷ 4 cm = 5 vehicles per 1 cm.",
    explanationHi: "20 ÷ 4 = 5 वाहन प्रति सेंटीमीटर (1 cm = 5 वाहन)।"
  },
  {
    id: 12,
    q: "On a bar graph scale where 1 unit length = 50 people, how many people are represented by a bar of 7 units length?",
    qHi: "दण्ड आलेख के पैमाने पर 1 इकाई लंबाई = 50 व्यक्ति है। 7 इकाई लंबाई वाले दण्ड द्वारा कितने व्यक्ति दर्शाए गए हैं?",
    options: ["300 people", "350 people", "400 people", "450 people"],
    optionsHi: ["300 व्यक्ति", "350 व्यक्ति", "400 व्यक्ति", "450 व्यक्ति"],
    ans: 1,
    pyqRef: "CTET Paper 1 & KVS PRT",
    explanation: "7 units × 50 people/unit = 350 people.",
    explanationHi: "7 × 50 = 350 व्यक्ति।"
  },
  {
    id: 13,
    q: "What is the range of the following dataset: 14, 28, 9, 35, 18, 42, 21?",
    qHi: "निम्नलिखित आँकड़ों का परिसर (Range) क्या है: 14, 28, 9, 35, 18, 42, 21?",
    options: ["28", "33", "35", "42"],
    optionsHi: ["28", "33", "35", "42"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE 1.0",
    explanation: "Range = Maximum value - Minimum value = 42 - 9 = 33.",
    explanationHi: "परिसर = उच्चतम मान - न्यूनतम मान = 42 - 9 = 33।"
  },
  {
    id: 14,
    q: "In a pie chart (circular graph), what does the entire complete circle represent in terms of angle?",
    qHi: "एक वृत्त आलेख (Pie chart) में पूरा वृत्त कोण के रूप में कितने अंश को दर्शाता है?",
    options: ["90°", "180°", "270°", "360°"],
    optionsHi: ["90°", "180°", "270°", "360°"],
    ans: 3,
    pyqRef: "CTET Paper 1 Pedagogy & BPSC TRE",
    explanation: "A complete circle has an angle of 360° representing 100% of the data.",
    explanationHi: "एक पूर्ण वृत्त का कुल केंद्रीय कोण 360° (100% आँकड़े) होता है।"
  },
  {
    id: 15,
    q: "In a circular pie chart, a sector with a right angle (90°) represents what percentage of the total data?",
    qHi: "एक वृत्त आलेख में 90° (समकोण) वाला त्रिज्यखंड कुल आँकड़ों का कितने प्रतिशत दर्शाता है?",
    options: ["20%", "25%", "33.3%", "50%"],
    optionsHi: ["20%", "25%", "33.3%", "50%"],
    ans: 1,
    pyqRef: "CTET Paper 1 & DSSSB",
    explanation: "90° ÷ 360° = 1/4 = 25%.",
    explanationHi: "90° ÷ 360° = 1/4 = 25%।"
  },
  {
    id: 16,
    q: "Find the mean (average) of the first five prime numbers (2, 3, 5, 7, 11).",
    qHi: "प्रथम पाँच अभाज्य संख्याओं (2, 3, 5, 7, 11) का माध्य ज्ञात कीजिए।",
    options: ["5.0", "5.4", "5.6", "6.0"],
    optionsHi: ["5.0", "5.4", "5.6", "6.0"],
    ans: 2,
    pyqRef: "CTET Paper 1 & BPSC TRE 3.0",
    explanation: "Sum = 2 + 3 + 5 + 7 + 11 = 28. Mean = 28 ÷ 5 = 5.6.",
    explanationHi: "योग = 2 + 3 + 5 + 7 + 11 = 28। माध्य = 28 ÷ 5 = 5.6।"
  },
  {
    id: 17,
    q: "In a frequency table, if the tally mark shows 4 bundles of 5 and 3 single strokes, what is the frequency?",
    qHi: "एक बारंबारता तालिका में यदि मिलान चिह्न 5 के 4 बंडल और 3 अलग डंडे दिखाता है, तो बारंबारता क्या है?",
    options: ["20", "22", "23", "25"],
    optionsHi: ["20", "22", "23", "25"],
    ans: 2,
    pyqRef: "CTET Paper 1 & UPTET",
    explanation: "Frequency = (4 × 5) + 3 = 20 + 3 = 23.",
    explanationHi: "बारंबारता = (4 × 5) + 3 = 20 + 3 = 23।"
  },
  {
    id: 18,
    q: "What is the median of the following set of test scores: 5, 8, 12, 15, 20, 22, 25?",
    qHi: "परीक्षा अंकों के निम्नलिखित समूह की माध्यिका (Median) क्या है: 5, 8, 12, 15, 20, 22, 25?",
    options: ["12", "15", "18", "20"],
    optionsHi: ["12", "15", "18", "20"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & SSC MTS",
    explanation: "Data is already ordered. There are 7 values. The middle (4th) value is 15.",
    explanationHi: "7 मानों में ठीक बीच का (चौथा) मान 15 है, अतः माध्यिका 15 है।"
  },
  {
    id: 19,
    q: "In a Cartesian bar chart, the horizontal base line is designated as the:",
    qHi: "दण्ड आलेख में क्षैतिज आधार रेखा को क्या कहा जाता है?",
    options: ["X-axis", "Y-axis", "Z-axis", "Origin line"],
    optionsHi: ["X-अक्ष (X-axis)", "Y-अक्ष (Y-axis)", "Z-अक्ष", "मूल रेखा"],
    ans: 0,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "The horizontal axis is called the X-axis.",
    explanationHi: "क्षैतिज अक्ष को X-अक्ष कहा जाता है।"
  },
  {
    id: 20,
    q: "In a Cartesian bar chart, the vertical line displaying frequency scale is designated as the:",
    qHi: "दण्ड आलेख में बारंबारता पैमाना दर्शाने वाली ऊर्ध्वाधर रेखा को क्या कहा जाता है?",
    options: ["X-axis", "Y-axis", "Baseline", "Grid"],
    optionsHi: ["X-अक्ष", "Y-अक्ष (Y-axis)", "आधार रेखा", "ग्रिड"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "The vertical axis is called the Y-axis.",
    explanationHi: "ऊर्ध्वाधर अक्ष को Y-अक्ष कहा जाता है।"
  },
  {
    id: 21,
    q: "Ramesh scored 65, 70, 75, 80, and 90 marks in 5 subjects. What is his mean percentage score?",
    qHi: "रमेश ने 5 विषयों में 65, 70, 75, 80 और 90 अंक प्राप्त किए। उसके औसत अंक क्या हैं?",
    options: ["74", "76", "78", "80"],
    optionsHi: ["74", "76", "78", "80"],
    ans: 1,
    pyqRef: "JNVST Class 6 Entrance",
    explanation: "Sum = 65 + 70 + 75 + 80 + 90 = 380. Mean = 380 ÷ 5 = 76.",
    explanationHi: "योग = 380। माध्य = 380 ÷ 5 = 76।"
  },
  {
    id: 22,
    q: "In an orchard pictograph, 3 tree icons represent 18 mango trees. How many trees are represented by 7 tree icons?",
    qHi: "बगीचे के एक चित्रालेख में 3 पेड़ के प्रतीक 18 आम के पेड़ों को दर्शाते हैं। 7 पेड़ के प्रतीक कितने पेड़ों को दर्शाएंगे?",
    options: ["35 trees", "42 trees", "48 trees", "54 trees"],
    optionsHi: ["35 पेड़", "42 पेड़", "48 पेड़", "54 पेड़"],
    ans: 1,
    pyqRef: "CTET Paper 1 & REET",
    explanation: "1 icon = 18 ÷ 3 = 6 trees. 7 icons = 7 × 6 = 42 trees.",
    explanationHi: "1 प्रतीक = 18 ÷ 3 = 6 पेड़। 7 प्रतीक = 7 × 6 = 42 पेड़।"
  },
  {
    id: 23,
    q: "Find the mode of the following data: 4, 6, 7, 6, 8, 6, 9, 7, 6.",
    qHi: "निम्नलिखित आँकड़ों का बहुलक (Mode) ज्ञात कीजिए: 4, 6, 7, 6, 8, 6, 9, 7, 6.",
    options: ["4", "6", "7", "8"],
    optionsHi: ["4", "6 (4 बार आया)", "7", "8"],
    ans: 1,
    pyqRef: "CTET Paper 1 & BPSC TRE",
    explanation: "The number 6 appears 4 times, which is more than any other number. Mode = 6.",
    explanationHi: "संख्या 6 सबसे अधिक 4 बार आई है, अतः बहुलक = 6।"
  },
  {
    id: 24,
    q: "What type of graph is specially designed to compare two sets of related data simultaneously (e.g. marks of boys vs girls across subjects)?",
    qHi: "दो संबंधित आँकड़ों की एक साथ तुलना करने के लिए किस प्रकार का आलेख विशेष रूप से उपयुक्त होता है (जैसे विषयों में लड़कों बनाम लड़कियों के अंक)?",
    options: ["Single bar graph", "Double bar graph", "Line graph only", "Pictograph"],
    optionsHi: ["एकल दण्ड आलेख", "द्वि-दण्ड आलेख (Double bar graph)", "केवल रेखा आलेख", "चित्रालेख"],
    ans: 1,
    pyqRef: "CTET Paper 1 & NCERT Class 5 Ch 15",
    explanation: "A double bar graph displays two sets of bars side by side for direct comparison.",
    explanationHi: "द्वि-दण्ड आलेख (Double bar graph) दो समूहों की सीधी तुलना के लिए प्रयुक्त होता है।"
  },
  {
    id: 25,
    q: "What is the difference between the maximum and minimum observations of a dataset termed as?",
    qHi: "किसी आँकड़ा समूह के अधिकतम और न्यूनतम मान के अंतर को क्या कहा जाता है?",
    options: ["Frequency", "Range (परिसर)", "Mean", "Class interval"],
    optionsHi: ["बारंबारता", "परिसर (Range)", "माध्य", "वर्ग अंतराल"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "Range = Maximum value - Minimum value.",
    explanationHi: "अधिकतम और न्यूनतम मान के अंतर को परिसर (Range) कहते हैं।"
  },
  {
    id: 26,
    q: "If 1 apple symbol represents 8 apples in a fruit store chart, how many apples do 3.5 symbols represent?",
    qHi: "यदि 1 सेब का प्रतीक 8 सेबों को दर्शाता है, तो 3.5 प्रतीक कितने सेबों को दर्शाते हैं?",
    options: ["24 apples", "26 apples", "28 apples", "32 apples"],
    optionsHi: ["24 सेब", "26 सेब", "28 सेब", "32 सेब"],
    ans: 2,
    pyqRef: "JNVST Class 6 Entrance",
    explanation: "3.5 × 8 = 28 apples.",
    explanationHi: "3.5 × 8 = 28 सेब।"
  },
  {
    id: 27,
    q: "Information systematically collected in numerical form for a specific inquiry or investigation is defined as:",
    qHi: "किसी विशिष्ट उद्देश्य के लिए संख्यात्मक रूप में व्यवस्थित ढंग से एकत्र की गई जानकारी को क्या कहा जाता है?",
    options: ["Hypothesis", "Data (आँकड़े)", "Formula", "Variable"],
    optionsHi: ["परिकल्पना", "आँकड़े (Data)", "सूत्र", "चर"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy & BPSC TRE",
    explanation: "A collection of numerical facts and figures gathered for an inquiry is called Data.",
    explanationHi: "संख्यात्मक रूप में एकत्रित तथ्यों को आँकड़े (Data) कहा जाता है।"
  },
  {
    id: 28,
    q: "The temperatures recorded at 5 cities are: 28°C, 32°C, 35°C, 30°C, 25°C. What is the average temperature?",
    qHi: "5 शहरों का दर्ज तापमान है: 28°C, 32°C, 35°C, 30°C, 25°C। औसत तापमान क्या है?",
    options: ["29°C", "30°C", "31°C", "32°C"],
    optionsHi: ["29°C", "30°C", "31°C", "32°C"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & CTET",
    explanation: "Sum = 28 + 32 + 35 + 30 + 25 = 150°C. Average = 150 ÷ 5 = 30°C.",
    explanationHi: "योग = 150°C। औसत = 150 ÷ 5 = 30°C।"
  },
  {
    id: 29,
    q: "Which graph is most suitable to display continuous variation of body temperature over 24 hours of hospital observation?",
    qHi: "अस्पताल में 24 घंटों के दौरान शरीर के तापमान में निरंतर उतार-चढ़ाव को दर्शाने के लिए कौन सा आलेख सर्वाधिक उपयुक्त है?",
    options: ["Bar graph", "Line graph (रेखा आलेख)", "Pictograph", "Tally chart"],
    optionsHi: ["दण्ड आलेख", "रेखा आलेख (Line graph)", "चित्रालेख", "मिलान चिह्न तालिका"],
    ans: 1,
    pyqRef: "CTET Paper 1 Pedagogy",
    explanation: "A line graph best visualizes continuous changes over time intervals.",
    explanationHi: "समय के साथ निरंतर परिवर्तन को दर्शाने के लिए रेखा आलेख (Line graph) सबसे उपयुक्त होता है।"
  },
  {
    id: 30,
    q: "In an election between two candidates, Candidate A received 60% of votes and Candidate B received 40% of votes. What would be the central angles of their sectors in a pie chart?",
    qHi: "दो उम्मीदवारों के चुनाव में उम्मीदवार A को 60% और B को 40% वोट मिले। पाई चार्ट में उनके त्रिज्यखंडों के केंद्रीय कोण क्या होंगे?",
    options: ["180° and 180°", "216° and 144°", "200° and 160°", "240° and 120°"],
    optionsHi: ["180° और 180°", "216° और 144°", "200° और 160°", "240° और 120°"],
    ans: 1,
    pyqRef: "BPSC TRE 1.0 & SSC CGL / CTET",
    explanation: "Candidate A: 60% of 360° = 0.60 × 360° = 216°. Candidate B: 40% of 360° = 144°.",
    explanationHi: "उम्मीदवार A: 360° का 60% = 216°। उम्मीदवार B: 360° का 40% = 144°।"
  }
];

const mathPart3Data = {
  'ncert-c5-math-ch11': ch11,
  'ncert-c5-math-ch12': ch12,
  'ncert-c5-math-ch13': ch13,
  'ncert-c5-math-ch14': ch14,
  'ncert-c5-math-ch15': ch15
};

const outPath = path.join(__dirname, 'math_part3_data.json');
fs.writeFileSync(outPath, JSON.stringify(mathPart3Data, null, 2), 'utf8');
console.log("Successfully wrote math_part3_data.json! Chapters:", Object.keys(mathPart3Data));
for (const k in mathPart3Data) {
  console.log(k, mathPart3Data[k].length);
}
