const fs = require('fs');
const path = require('path');

const evsCh1 = [
  {
    id: 1,
    q: "As ants march forward, what do they leave behind on the ground that helps other ants find the way?",
    qHi: "चींटियाँ चलते समय जमीन पर क्या छोड़ती हैं जिससे पीछे आने वाली चींटियों को रास्ता मिल जाता है?",
    options: ["Footprints", "A specific scent/smell (Pheromones)", "Colored trail", "Sound signals"],
    optionsHi: ["पदचिह्न", "एक विशेष गंध (फेरोमोन)", "रंगीन निशान", "ध्वनि संकेत"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Repeated PYQ)",
    explanation: "Ants leave behind chemical scent trails (pheromones) on the ground which other ants follow using their antennae.",
    explanationHi: "चींटियाँ चलते समय जमीन पर गंध (फेरोमोन) छोड़ती जाती हैं, जिसे सूँघकर बाकी चींटियों को रास्ता मिल जाता है।"
  },
  {
    id: 2,
    q: "Which group of birds can see things from 4 times farther away than humans?",
    qHi: "पक्षियों का कौन सा समूह हमसे (मनुष्यों से) 4 गुना अधिक दूरी तक देख सकता है?",
    options: ["Crow, Pigeon, Sparrow", "Kite, Eagle, Vulture", "Peacock, Parrot, Duck", "Owl, Bat, Bulbul"],
    optionsHi: ["कौआ, कबूतर, गौरैया", "चील, बाज़, गिद्ध", "मोर, तोता, बत्तख", "उल्लू, चमगादड़, बुलबुल"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & BPSC TRE 1.0",
    explanation: "Kites, eagles, and vultures have sharp binocular eyesight that allows them to spot prey from 4 times the human distance (8 metres away for what humans see at 2 metres).",
    explanationHi: "चील, बाज़ और गिद्ध जैसे पक्षी हमसे 4 गुना अधिक दूरी से वस्तुओं को स्पष्ट देख सकते हैं।"
  },
  {
    id: 3,
    q: "Which animal spends almost 17 hours a day sleeping hanging upside down from a tree branch?",
    qHi: "कौन सा जानवर दिन के लगभग 17 घंटे पेड़ों की शाखा से उलटे लटककर मस्ती से सोता है?",
    options: ["Panda", "Sloth", "Koala", "Chimpanzee"],
    optionsHi: ["पांडा", "स्लॉथ (Sloth)", "कोआला", "चिम्पैंजी"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Crucial Core Concept)",
    explanation: "Sloths sleep for about 17 hours upside down on trees. They live for around 40 years and change only about 8 trees in their lifetime.",
    explanationHi: "स्लॉथ भालू जैसा दिखता है पर भालू नहीं है। यह दिन में लगभग 17 घंटे पेड़ पर उलटा लटककर सोता है और 40 वर्ष के जीवन में मुश्किल से 8 पेड़ों पर घूमता है।"
  },
  {
    id: 4,
    q: "At night, a tiger can see how many times better than ordinary human vision?",
    qHi: "रात के समय बाघ (Tiger) की दृष्टि मनुष्य की तुलना में कितने गुना बेहतर होती है?",
    options: ["2 times", "4 times", "6 times", "10 times"],
    optionsHi: ["2 गुना", "4 गुना", "6 गुना (6 times)", "10 गुना"],
    ans: 2,
    pyqRef: "CTET Paper 1 EVS & BPSC TRE Primary",
    explanation: "A tiger can see 6 times better at night than most human beings.",
    explanationHi: "बाघ की रात में देखने की क्षमता हम मनुष्यों से 6 गुना बेहतर होती है।"
  },
  {
    id: 5,
    q: "Which sensory feature of a tiger vibrates with air movements and helps it navigate and catch prey in total darkness?",
    qHi: "बाघ की कौन सी ज्ञानेंद्रिय हवा में हुए कंपन को तुरंत भाँप लेती है और घने अंधेरे में शिकार ढूँढने में मदद करती है?",
    options: ["Sharp claws", "Sensitive whiskers (मूँछें)", "Striped fur", "Tail movements"],
    optionsHi: ["तेज पंजे", "संवेदनशील मूँछें (Whiskers)", "धारीदार बाल", "पूँछ का हिलना"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & UPTET",
    explanation: "A tiger's whiskers are extremely sensitive and can sense movement or vibrations in the air.",
    explanationHi: "बाघ की मूँछें हवा में हुए कंपन को तुरंत भाँप लेती हैं, जिससे उसे अंधेरे में रास्ता तय करने और शिकार की सही स्थिति का पता लगाने में मदद मिलती है।"
  },
  {
    id: 6,
    q: "How does a tiger mark and demarcate its own territory in the forest?",
    qHi: "जंगल में एक बाघ अपने इलाके (टेरिटरी) का निर्धारण किस प्रकार करता है?",
    options: ["By roaring loudly", "With its urine scent", "By scratching every tree", "By leaving prey remains"],
    optionsHi: ["जोर से दहाड़कर", "अपने मूत्र (पेशाब) की गंध से", "पेड़ों को खरोंचकर", "शिकार के अवशेष छोड़कर"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & KVS PRT",
    explanation: "Tigers mark their territory of several kilometres with their urine smell, which other tigers recognize immediately.",
    explanationHi: "बाघ अपने इलाके में अपने मूत्र की गंध छोड़ते हैं। दूसरा बाघ इस गंध से तुरंत पहचान लेता है कि यह किसी अन्य बाघ का इलाका है।"
  },
  {
    id: 7,
    q: "Snakes do not have external ears. How do they detect approaching footsteps or sound vibrations?",
    qHi: "साँपों के बाहरी कान नहीं होते। वे किसी पदचाप या ध्वनि का पता कैसे लगाते हैं?",
    options: ["Through their eyes", "By feeling ground vibrations through their body/jawbones", "By smelling air", "Through their forked tongue only"],
    optionsHi: ["आँखों से देखकर", "जमीन पर होने वाले कंपन (Vibrations) को महसूस करके", "हवा सूँघकर", "अपनी दोमुँही जीभ से"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & BPSC TRE",
    explanation: "Snakes perceive ground-borne sound vibrations through their skin and jawbones.",
    explanationHi: "साँप जमीन पर होने वाले कंपन को अपनी त्वचा और हड्डियों द्वारा महसूस करते हैं।"
  },
  {
    id: 8,
    q: "Which animal perches high in treetops and gives a special warning alarm call to alert others against tigers or leopards?",
    qHi: "जंगल में ऊँचे पेड़ पर बैठकर कौन सा जानवर बाघ या चीते को देखकर एक खास चेतावनी भरी आवाज निकालता है?",
    options: ["Peacock", "Langur", "Squirrel", "Parrot"],
    optionsHi: ["मोर", "लंगूर (Langur)", "गिलहरी", "तोता"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & NCERT Class 5",
    explanation: "Langurs sit on high branches and produce special alarm warning calls when predators like tigers or leopards approach.",
    explanationHi: "लंगूर पेड़ की ऊँची शाखा पर बैठकर खास चेतावनी भरी आवाज (अलार्म कॉल) निकालकर साथियों को सावधान करता है।"
  },
  {
    id: 9,
    q: "Why do many birds like sparrows and pigeons turn their necks repeatedly?",
    qHi: "गौरैया और कबूतर जैसे कई पक्षी अपनी गर्दन को बार-बार क्यों घुमाते हैं?",
    options: ["To stretch their neck muscles", "Because their eyeballs are fixed and cannot move in sockets", "To fly faster", "To look handsome"],
    optionsHi: ["गर्दन की मांसपेशियों को आराम देने के लिए", "क्योंकि उनकी आँखों की पुतली स्थिर होती है और घूम नहीं सकती", "तेज उड़ने के लिए", "आकर्षक दिखने के लिए"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Repeated PYQ)",
    explanation: "Unlike humans, most birds cannot rotate their eyes inside their sockets. To look around, they must turn their entire head.",
    explanationHi: "अधिकतर पक्षियों की आँखों की पुतली घूम नहीं सकती, वह स्थिर होती है। इसलिए चारों तरफ देखने के लिए उन्हें अपनी गर्दन पूरी घुमानी पड़ती है।"
  },
  {
    id: 10,
    q: "Animals that are awake only during the night (nocturnal animals like owls) can see objects only in which colours?",
    qHi: "रात में जागने वाले जानवर (जैसे उल्लू, चमगादड़) हर वस्तु को केवल किन रंगों में देख पाते हैं?",
    options: ["Red and Green", "Black and White", "Blue and Yellow", "All rainbow colours"],
    optionsHi: ["लाल और हरा", "केवल काला और सफेद (Black and White)", "नीला और पीला", "इंद्रधनुष के सभी रंग"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Repeated PYQ)",
    explanation: "Nocturnal animals have mostly rod cells and perceive objects in shades of black and white only.",
    explanationHi: "रात में जागने वाले जानवर वस्तुओं को केवल सफेद और काले (Black and White) रंगों में ही देख पाते हैं।"
  },
  {
    id: 11,
    q: "According to NCERT Class 5 EVS, approximately how many hours does a cow sleep each day?",
    qHi: "NCERT कक्षा 5 पर्यावरण के अनुसार एक गाय 24 घंटे में लगभग कितने घंटे सोती है?",
    options: ["2 hours", "4 hours", "8 hours", "12 hours"],
    optionsHi: ["2 घंटे", "4 घंटे (4 hours)", "8 घंटे", "12 घंटे"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & State TET",
    explanation: "A cow sleeps for approximately 4 hours per day.",
    explanationHi: "गाय दिन में लगभग 4 घंटे सोती है।"
  },
  {
    id: 12,
    q: "Which animal has the shortest sleeping duration among mammals, sleeping only about 2 hours a day?",
    qHi: "स्तनधारियों में किस जानवर की नींद सबसे कम (दिन में मात्र लगभग 2 घंटे) होती है?",
    options: ["Elephant", "Giraffe", "Cow", "Horse"],
    optionsHi: ["हाथी", "जिराफ (Giraffe)", "गाय", "घोड़ा"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & BPSC TRE",
    explanation: "Giraffes sleep for only about 2 hours in a 24-hour cycle.",
    explanationHi: "जिराफ 24 घंटे में मात्र 2 घंटे ही सोता है।"
  },
  {
    id: 13,
    q: "According to the NCERT sleeping circle chart, how many hours does a python sleep per day?",
    qHi: "NCERT स्लीपिंग चार्ट के अनुसार एक अजगर (Python) 24 घंटे में कितने घंटे सोता है?",
    options: ["8 hours", "12 hours", "18 hours", "20 hours"],
    optionsHi: ["8 घंटे", "12 घंटे", "18 घंटे (18 hours)", "20 घंटे"],
    ans: 2,
    pyqRef: "CTET Paper 1 EVS & REET",
    explanation: "A python sleeps for about 18 hours out of 24 hours.",
    explanationHi: "अजगर 24 घंटे में लगभग 18 घंटे सोता है।"
  },
  {
    id: 14,
    q: "A male silkworm can locate his female moth from several kilometres away using which extraordinary sense?",
    qHi: "एक नर रेशम का कीड़ा (Silkworm) अपनी मादा को कई किलोमीटर दूर से ही किस ज्ञानेंद्रिय की मदद से पहचान लेता है?",
    options: ["Her special chirping sound", "Her distinct body smell", "Her bright wings", "Heat vibrations"],
    optionsHi: ["उसकी आवाज से", "उसकी विशिष्ट गंध (Smell) से", "उसके चमकीले पंखों से", "ऊष्मा तरंगों से"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Direct NCERT line)",
    explanation: "Male silkworms possess highly sensitive antennae that detect female pheromone scents from miles away.",
    explanationHi: "रेशम का कीड़ा अपनी मादा को उसकी गंध से कई किलोमीटर दूर से ही पहचान लेता है।"
  },
  {
    id: 15,
    q: "How do mosquitoes easily find human beings even in total darkness inside a room?",
    qHi: "मच्छर घने अंधेरे कमरे में भी मनुष्यों को बड़ी आसानी से कैसे ढूँढ लेते हैं?",
    options: ["Through night-vision eyes", "By the smell of our body, heat, and the warmth of the soles of our feet", "By our heartbeat sound", "By electrical currents"],
    optionsHi: ["नाइट-विज़न आँखों से", "शरीर की गंध, शरीर की गर्मी और पैरों के तलवे की गंध से", "हृदय की धड़कन सुनकर", "विद्युत धारा से"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & DSSSB PRT",
    explanation: "Mosquitoes track exhaled CO2, body heat, and the specific smell of human skin and feet soles.",
    explanationHi: "मच्छर हमारे शरीर की गंध, सांस (CO2), शरीर की गर्मी और पैरों के तलवों की गंध से हमें अंधेरे में भी ढूँढ लेते हैं।"
  },
  {
    id: 16,
    q: "Street dogs mark their own territory along roads and lanes using:",
    qHi: "सड़क के कुत्ते गलियों में अपने इलाके का निर्धारण किस आधार पर करते हैं?",
    options: ["Barking patterns", "The smell of their urine and feces (potty)", "Burying bones", "Fighting other dogs"],
    optionsHi: ["भौंकने की आवाज", "अपने पेशाब और मल (लैट्रिन) की गंध से", "हड्डियाँ दबाकर", "लड़ाई करके"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & NCERT Class 5",
    explanation: "Dogs mark their boundary with urine and stool scent, and detect intruder dogs instantly by smelling the area.",
    explanationHi: "कुत्ते अपने इलाके में पेशाब और मल त्याग करते हैं और गंध से पहचान लेते हैं कि कोई बाहरी कुत्ता उनके इलाके में आया था।"
  },
  {
    id: 17,
    q: "Jim Corbett National Park, India's oldest national park known for Royal Bengal Tigers, is located in which state?",
    qHi: "रॉयल बंगाल टाइगर्स के लिए प्रसिद्ध भारत का सबसे पुराना राष्ट्रीय उद्यान 'जिम कॉर्बेट नेशनल पार्क' किस राज्य में स्थित है?",
    options: ["Madhya Pradesh", "Uttarakhand", "Rajasthan", "Assam"],
    optionsHi: ["मध्य प्रदेश", "उत्तराखंड (Uttarakhand)", "राजस्थान", "असम"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & CTET Paper 1",
    explanation: "Jim Corbett National Park (established 1936 as Hailey NP) is located in Nainital/Pauri Garhwal district of Uttarakhand.",
    explanationHi: "जिम कॉर्बेट नेशनल पार्क उत्तराखंड राज्य में स्थित है।"
  },
  {
    id: 18,
    q: "The famous 'Ghana Bird Sanctuary' (Keoladeo National Park) mentioned in NCERT Grade 5 is situated in which district of Rajasthan?",
    qHi: "NCERT कक्षा 5 में उल्लिखित प्रसिद्ध 'घाना पक्षी विहार' (केवलादेव राष्ट्रीय उद्यान) राजस्थान के किस जिले में स्थित है?",
    options: ["Jaipur", "Bharatpur", "Jodhpur", "Udaipur"],
    optionsHi: ["जयपुर", "भरतपुर (Bharatpur)", "जोधपुर", "उदयपुर"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & REET",
    explanation: "Ghana (Keoladeo) Bird Sanctuary is situated in Bharatpur district, Rajasthan.",
    explanationHi: "घाना पक्षी अभयारण्य राजस्थान के भरतपुर जिले में स्थित है।"
  },
  {
    id: 19,
    q: "How many species of snakes found in India are genuinely poisonous to humans?",
    qHi: "भारत में पाए जाने वाले साँपों की प्रजातियों में से केवल कितनी प्रजातियाँ जहरीली (विषैली) होती हैं?",
    options: ["2 types", "4 types", "8 types", "15 types"],
    optionsHi: ["2 प्रकार", "4 प्रकार (4 types)", "8 प्रकार", "15 प्रकार"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Repeated PYQ)",
    explanation: "According to NCERT Class 5 EVS, only 4 types of poisonous snakes are found in India: Cobra (नाग), Common Krait (करैत), Russell's Viper (दुबोइया), and Saw-scaled Viper (अफाई).",
    explanationHi: "NCERT कक्षा 5 के अनुसार भारत में पाए जाने वाले साँपों में से केवल 4 तरह के साँप ही जहरीले होते हैं: नाग (Cobra), करैत, दुबोइया और अफाई।"
  },
  {
    id: 20,
    q: "The hollow poisonous teeth of a snake used to inject venom into a victim's body are called:",
    qHi: "साँप के वे दो खोखले जहरीले दाँत, जिनसे वह जहर शिकार के शरीर में पहुँचाता है, क्या कहलाते हैं?",
    options: ["Incisors", "Fangs (विषदंत)", "Molars", "Canines"],
    optionsHi: ["कृंतक", "विषदंत (Fangs)", "चर्वणक", "रदनक"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & BPSC TRE",
    explanation: "Snakes inject venom through two hollow specialized teeth called Fangs.",
    explanationHi: "साँप के दो खोखले जहर वाले दाँत होते हैं जिन्हें 'विषदंत' (Fangs) कहते हैं।"
  },
  {
    id: 21,
    q: "Antivenom medicine (सिरम) administered to treat snake bites is manufactured using which substance?",
    qHi: "साँप के काटने पर दी जाने वाली जीवनरक्षक दवा (सीरम/Anti-venom) किससे बनाई जाती है?",
    options: ["Herbal plant roots", "Snake's own venom (poison)", "Neem leaf extracts", "Charcoal powder"],
    optionsHi: ["जड़ी-बूटियों की जड़ से", "साँप के ही जहर (Venom) से", "नीम के अर्क से", "कोयले के चूर्ण से"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & State TET",
    explanation: "Snake antivenom serum is produced by hyper-immunizing donor animals with small doses of the snake's own venom.",
    explanationHi: "साँप के काटने की दवा (सीरम) साँप के जहर से ही बनाई जाती है और सभी सरकारी अस्पतालों में उपलब्ध होती है।"
  },
  {
    id: 22,
    q: "The musical instruments 'Been', 'Tumba', and 'Khanjari' used by snake charmers are traditionally crafted from:",
    qHi: "कालबेलिया सपेरों द्वारा बजाए जाने वाले बीन, तुम्बा और खंजरी जैसे वाद्ययंत्र पारंपरिक रूप से किससे बनाए जाते हैं?",
    options: ["Bamboo sticks", "Dried bottle gourd (सूखी लौकी)", "Teak wood", "Clay pots"],
    optionsHi: ["बांस की लकड़ी", "सूखी लौकी (Dried bottle gourd)", "सागवान की लकड़ी", "मिट्टी के घड़े"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & KVS PRT",
    explanation: "In Kalbeliya tradition, 'Been', 'Tumba', and 'Khanjari' are made from dried bottle gourd (सूखी लौकी), except the Dhol.",
    explanationHi: "ढोल के अलावा बीन, तुम्बा और खंजरी तीनों वाद्ययंत्र सूखी लौकी से बनाए जाते हैं।"
  },
  {
    id: 23,
    q: "The traditional community of snake charmers and folk dancers in Rajasthan is known as:",
    qHi: "राजस्थान में साँपों को पालने और बीन बजाने वाले सपेरों के पारंपरिक समुदाय को किस नाम से जाना जाता है?",
    options: ["Bhil", "Gond", "Kalbeliya (कालबेलिया)", "Santhal"],
    optionsHi: ["भील", "गोंड", "कालबेलिया (Kalbeliya)", "संथाल"],
    ans: 2,
    pyqRef: "CTET Paper 1 EVS & BPSC TRE",
    explanation: "The snake-charming and dance community in Rajasthan is known as the Kalbeliyas.",
    explanationHi: "सपेरों की इस पारंपरिक जाति को कालबेलिया (Kalbeliya) कहा जाता है।"
  },
  {
    id: 24,
    q: "Why are non-venomous snakes considered useful friends to farmers in rural agriculture?",
    qHi: "गाँवों में कृषि कार्य में साँपों को किसानों का मित्र क्यों माना जाता है?",
    options: ["They enrich the soil", "They eat rats that destroy standing grain crops", "They scare away birds", "They provide fertilizer"],
    optionsHi: ["वे मिट्टी उपजाऊ बनाते हैं", "वे फसलों को नुकसान पहुँचाने वाले चूहों को खा जाते हैं", "वे पक्षियों को भगाते हैं", "वे खाद प्रदान करते हैं"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (NCERT Core Concept)",
    explanation: "Snakes eat rats in crop fields, preventing major destruction of stored food grains and crops.",
    explanationHi: "साँप खेतों में फसलों को बर्बाद करने वाले चूहों को खा जाते हैं, जिससे फसल की रक्षा होती है।"
  },
  {
    id: 25,
    q: "Which folk dance form of Rajasthan has body steps and postures resembling the movements of a dancing snake?",
    qHi: "राजस्थान के किस लोकनृत्य में मुद्राएँ और चाल साँप की गति के समान होती हैं?",
    options: ["Ghoomar", "Kalbeliya dance", "Bhangra", "Kathak"],
    optionsHi: ["घूमर", "कालबेलिया नृत्य (Kalbeliya dance)", "भांगड़ा", "कथक"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & Art & Culture",
    explanation: "Kalbeliya dance movements imitate the serpentine sways and quick turns of a cobra.",
    explanationHi: "कालबेलिया नृत्य में साँप जैसी लचीली मुद्राएँ और चालें होती हैं।"
  },
  {
    id: 26,
    q: "Which bird has eyes placed in front of its head just like human beings?",
    qHi: "किस पक्षी की आँखें मनुष्यों की तरह उसके सिर के बिल्कुल सामने होती हैं?",
    options: ["Owl (उल्लू)", "Eagle", "Sparrow", "Crow"],
    optionsHi: ["उल्लू (Owl)", "चील", "गौरैया", "कौआ"],
    ans: 0,
    pyqRef: "CTET Paper 1 EVS (Repeated PYQ)",
    explanation: "Owls have forward-facing eyes situated at the front of their skull, giving them binocular vision like humans.",
    explanationHi: "उल्लू एकमात्र ऐसा पक्षी है जिसकी आँखें इंसानों की तरह सिर के बिल्कुल सामने होती हैं।"
  },
  {
    id: 27,
    q: "Which bird can rotate its neck backwards up to almost 360° (or significantly further than any other bird)?",
    qHi: "कौन सा पक्षी अपनी गर्दन को काफी पीछे तक (लगभग 270° से 360° तक) घुमा सकता है?",
    options: ["Maina", "Owl (उल्लू)", "Pigeon", "Woodpecker"],
    optionsHi: ["मैना", "उल्लू (Owl)", "कबूतर", "कठफोड़वा"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Repeated PYQ)",
    explanation: "The owl can rotate its neck backwards to an extraordinary angle of ~270°.",
    explanationHi: "उल्लू अपनी गर्दन को काफी पीछे तक आसानी से घुमा सकता है।"
  },
  {
    id: 28,
    q: "Which bird moves its neck forward and backward with a sudden jerk (झटके से)?",
    qHi: "कौन सा पक्षी झटके से अपनी गर्दन आगे-पीछे करता है?",
    options: ["Owl", "Maina (मैना)", "Eagle", "Parrot"],
    optionsHi: ["उल्लू", "मैना (Maina)", "चील", "तोता"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS (Classic CTET Question)",
    explanation: "The Maina moves its neck forward and backward with a sharp jerk.",
    explanationHi: "मैना झटके से अपनी गर्दन आगे-पीछे करती है।"
  },
  {
    id: 29,
    q: "Which animal has huge fan-like ears that it constantly flaps to cool its body down in summer heat?",
    qHi: "किस जानवर के कान पंखे जैसे बड़े होते हैं जिन्हें वह हवा करके अपने शरीर को ठंडा रखने के लिए हिलाता रहता है?",
    options: ["Rabbit", "Elephant (हाथी)", "Deer", "Buffalo"],
    optionsHi: ["खरगोश", "हाथी (Elephant)", "हिरण", "भैंस"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & NCERT Class 5",
    explanation: "Elephants flap their large ears to dissipate heat and cool down blood flowing through ear veins.",
    explanationHi: "हाथी अपने पंखे जैसे बड़े कानों को हिलाकर हवा करता है और अपने शरीर को ठंडा रखता है।"
  },
  {
    id: 30,
    q: "A poacher illegally kills an elephant primarily to obtain and trade which body part?",
    qHi: "एक शिकारी (Poacher) अवैध रूप से हाथी का शिकार मुख्य रूप से उसके किस अंग को प्राप्त करने के लिए करता है?",
    options: ["Its skin", "Its ivory tusks (दाँत)", "Its hooves", "Its ears"],
    optionsHi: ["उसकी खाल", "उसके हाथीदाँत (Tusks / Ivory)", "उसके खुर", "उसके कान"],
    ans: 1,
    pyqRef: "CTET Paper 1 EVS & BPSC TRE Primary",
    explanation: "Elephants are poached for their valuable ivory tusks, rhinos for horns, tigers and snakes for skins.",
    explanationHi: "हाथी को उसके कीमती दाँतों (Tusks) के लिए, गैंडे को सींग के लिए तथा बाघ और साँप को उनकी खाल के लिए मारा जाता है।"
  }
];

const hindiCh1 = [
  {
    id: 1,
    q: "किसी व्यक्ति, वस्तु, स्थान, प्राणी या भाव के नाम को व्याकरण में क्या कहते हैं?",
    qHi: "किसी व्यक्ति, वस्तु, स्थान, प्राणी या भाव के नाम को व्याकरण में क्या कहते हैं?",
    options: ["विशेषण", "संज्ञा (Noun)", "सर्वनाम", "क्रिया"],
    optionsHi: ["विशेषण", "संज्ञा (Noun)", "सर्वनाम", "क्रिया"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & CTET Hindi Paper 1",
    explanation: "किसी व्यक्ति, वस्तु, स्थान, जाति या भाव के नाम का बोध कराने वाले शब्द संज्ञा कहलाते हैं।",
    explanationHi: "किसी व्यक्ति, वस्तु, स्थान, जाति या भाव के नाम का बोध कराने वाले शब्द संज्ञा कहलाते हैं।"
  },
  {
    id: 2,
    q: "'गंगा', 'हिमालय', 'पटना' और 'महात्मा गाँधी' किस प्रकार की संज्ञा के उदाहरण हैं?",
    qHi: "'गंगा', 'हिमालय', 'पटना' और 'महात्मा गाँधी' किस प्रकार की संज्ञा के उदाहरण हैं?",
    options: ["जातिवाचक संज्ञा", "व्यक्तिवाचक संज्ञा (Proper Noun)", "भाववाचक संज्ञा", "द्रव्यवाचक संज्ञा"],
    optionsHi: ["जातिवाचक संज्ञा", "व्यक्तिवाचक संज्ञा", "भाववाचक संज्ञा", "द्रव्यवाचक संज्ञा"],
    ans: 1,
    pyqRef: "Bihar STET & BPSC TRE 1.0",
    explanation: "जो शब्द किसी विशेष व्यक्ति, वस्तु या स्थान का बोध कराते हैं, उन्हें व्यक्तिवाचक संज्ञा कहते हैं।",
    explanationHi: "जो शब्द किसी विशेष व्यक्ति, वस्तु या स्थान का बोध कराते हैं, उन्हें व्यक्तिवाचक संज्ञा कहते हैं।"
  },
  {
    id: 3,
    q: "'नदी', 'पहाड़', 'शहर', 'बालक' किस संज्ञा के उदाहरण हैं?",
    qHi: "'नदी', 'पहाड़', 'शहर', 'बालक' किस संज्ञा के उदाहरण हैं?",
    options: ["व्यक्तिवाचक संज्ञा", "जातिवाचक संज्ञा (Common Noun)", "समूहवाचक संज्ञा", "भाववाचक संज्ञा"],
    optionsHi: ["व्यक्तिवाचक संज्ञा", "जातिवाचक संज्ञा", "समूहवाचक संज्ञा", "भाववाचक संज्ञा"],
    ans: 1,
    pyqRef: "CTET Hindi & UPTET",
    explanation: "जिस संज्ञा शब्द से उसकी पूरी जाति या वर्ग का बोध होता है, उसे जातिवाचक संज्ञा कहते हैं।",
    explanationHi: "जिस संज्ञा शब्द से उसकी पूरी जाति या वर्ग का बोध होता है, उसे जातिवाचक संज्ञा कहते हैं।"
  },
  {
    id: 4,
    q: "'बचपन', 'मिठास', 'सुंदरता', 'ईमानदारी' किस संज्ञा के भेद के अंतर्गत आते हैं?",
    qHi: "'बचपन', 'मिठास', 'सुंदरता', 'ईमानदारी' किस संज्ञा के भेद के अंतर्गत आते हैं?",
    options: ["जातिवाचक संज्ञा", "भाववाचक संज्ञा (Abstract Noun)", "द्रव्यवाचक संज्ञा", "व्यक्तिवाचक संज्ञा"],
    optionsHi: ["जातिवाचक संज्ञा", "भाववाचक संज्ञा", "द्रव्यवाचक संज्ञा", "व्यक्तिवाचक संज्ञा"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & DSSSB",
    explanation: "जिन शब्दों से किसी गुण, दशा, स्वभाव या भाव का बोध होता है, उन्हें भाववाचक संज्ञा कहते हैं।",
    explanationHi: "जिन शब्दों से किसी गुण, दशा, स्वभाव या भाव का बोध होता है, उन्हें भाववाचक संज्ञा कहते हैं।"
  },
  {
    id: 5,
    q: "संज्ञा के स्थान पर प्रयुक्त होने वाले शब्दों को क्या कहते हैं?",
    qHi: "संज्ञा के स्थान पर प्रयुक्त होने वाले शब्दों को क्या कहते हैं?",
    options: ["विशेषण", "सर्वनाम (Pronoun)", "क्रिया", "अव्यय"],
    optionsHi: ["विशेषण", "सर्वनाम (Pronoun)", "क्रिया", "अव्यय"],
    ans: 1,
    pyqRef: "CTET Hindi & REET",
    explanation: "संज्ञा शब्दों के बार-बार प्रयोग से बचने के लिए उनके स्थान पर आने वाले शब्द सर्वनाम कहलाते हैं।",
    explanationHi: "संज्ञा शब्दों के बार-बार प्रयोग से बचने के लिए उनके स्थान पर आने वाले शब्द सर्वनाम कहलाते हैं।"
  },
  {
    id: 6,
    q: "'मैं', 'तुम', 'आप', 'वह' किस सर्वनाम के उदाहरण हैं?",
    qHi: "'मैं', 'तुम', 'आप', 'वह' किस सर्वनाम के उदाहरण हैं?",
    options: ["निश्चयवाचक सर्वनाम", "पुरुषवाचक सर्वनाम (Personal Pronoun)", "निजवाचक सर्वनाम", "संबंधवाचक सर्वनाम"],
    optionsHi: ["निश्चयवाचक सर्वनाम", "पुरुषवाचक सर्वनाम", "निजवाचक सर्वनाम", "संबंधवाचक सर्वनाम"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & CTET",
    explanation: "बोलने वाले, सुनने वाले या किसी अन्य व्यक्ति के लिए प्रयुक्त सर्वनाम पुरुषवाचक सर्वनाम कहलाते हैं।",
    explanationHi: "बोलने वाले, सुनने वाले या किसी अन्य व्यक्ति के लिए प्रयुक्त सर्वनाम पुरुषवाचक सर्वनाम कहलाते हैं।"
  },
  {
    id: 7,
    q: "'यह मेरी पुस्तक है' — इस वाक्य में 'यह' कौन सा सर्वनाम है?",
    qHi: "'यह मेरी पुस्तक है' — इस वाक्य में 'यह' कौन सा सर्वनाम है?",
    options: ["अनिश्चयवाचक सर्वनाम", "निश्चयवाचक सर्वनाम (Demonstrative Pronoun)", "संबंधवाचक सर्वनाम", "प्रश्नवाचक सर्वनाम"],
    optionsHi: ["अनिश्चयवाचक सर्वनाम", "निश्चयवाचक सर्वनाम", "संबंधवाचक सर्वनाम", "प्रश्नवाचक सर्वनाम"],
    ans: 1,
    pyqRef: "UPTET & BPSC TRE",
    explanation: "जो सर्वनाम किसी निश्चित वस्तु या व्यक्ति की ओर संकेत करते हैं, वे निश्चयवाचक सर्वनाम कहलाते हैं।",
    explanationHi: "जो सर्वनाम किसी निश्चित वस्तु या व्यक्ति की ओर संकेत करते हैं, वे निश्चयवाचक सर्वनाम कहलाते हैं।"
  },
  {
    id: 8,
    q: "'दरवाजे पर कोई खड़ा है' — इस वाक्य में 'कोई' किस प्रकार का सर्वनाम है?",
    qHi: "'दरवाजे पर कोई खड़ा है' — इस वाक्य में 'कोई' किस प्रकार का सर्वनाम है?",
    options: ["निश्चयवाचक सर्वनाम", "अनिश्चयवाचक सर्वनाम (Indefinite Pronoun)", "निजवाचक सर्वनाम", "संबंधवाचक सर्वनाम"],
    optionsHi: ["निश्चयवाचक सर्वनाम", "अनिश्चयवाचक सर्वनाम", "निजवाचक सर्वनाम", "संबंधवाचक सर्वनाम"],
    ans: 1,
    pyqRef: "CTET Hindi & KVS PRT",
    explanation: "'कोई' या 'कुछ' से किसी निश्चित व्यक्ति या वस्तु का बोध नहीं होता, अतः यह अनिश्चयवाचक सर्वनाम है।",
    explanationHi: "'कोई' या 'कुछ' से किसी निश्चित व्यक्ति या वस्तु का बोध नहीं होता, अतः यह अनिश्चयवाचक सर्वनाम है।"
  },
  {
    id: 9,
    q: "'जो परिश्रम करेगा, वह सफल होगा' — में 'जो...वह' कौन सा सर्वनाम है?",
    qHi: "'जो परिश्रम करेगा, वह सफल होगा' — में 'जो...वह' कौन सा सर्वनाम है?",
    options: ["पुरुषवाचक", "संबंधवाचक सर्वनाम (Relative Pronoun)", "निजवाचक", "निश्चयवाचक"],
    optionsHi: ["पुरुषवाचक", "संबंधवाचक सर्वनाम", "निजवाचक", "निश्चयवाचक"],
    ans: 1,
    pyqRef: "BPSC TRE 3.0 & CTET",
    explanation: "परस्पर दो वाक्यों या उपवाक्यों में संबंध जोड़ने वाले सर्वनाम संबंधवाचक सर्वनाम कहलाते हैं।",
    explanationHi: "परस्पर दो वाक्यों या उपवाक्यों में संबंध जोड़ने वाले सर्वनाम संबंधवाचक सर्वनाम कहलाते हैं।"
  },
  {
    id: 10,
    q: "'मैं अपना गृहकार्य स्वयं करूँगा' — में 'स्वयं' किस सर्वनाम का भेद है?",
    qHi: "'मैं अपना गृहकार्य स्वयं करूँगा' — में 'स्वयं' किस सर्वनाम का भेद है?",
    options: ["मध्यम पुरुष", "निजवाचक सर्वनाम (Reflexive Pronoun)", "अनिश्चयवाचक", "निश्चयवाचक"],
    optionsHi: ["मध्यम पुरुष", "निजवाचक सर्वनाम", "अनिश्चयवाचक", "निश्चयवाचक"],
    ans: 1,
    pyqRef: "CTET Hindi & Bihar STET",
    explanation: "जहाँ कर्ता अपने लिए 'स्वयं', 'खुद', 'अपने आप' शब्दों का प्रयोग करता है, वहाँ निजवाचक सर्वनाम होता है।",
    explanationHi: "जहाँ कर्ता अपने लिए 'स्वयं', 'खुद', 'अपने आप' शब्दों का प्रयोग करता है, वहाँ निजवाचक सर्वनाम होता है।"
  },
  {
    id: 11,
    q: "संज्ञा या सर्वनाम की विशेषता (गुण, दोष, संख्या, परिमाण) बताने वाले शब्द क्या कहलाते हैं?",
    qHi: "संज्ञा या सर्वनाम की विशेषता (गुण, दोष, संख्या, परिमाण) बताने वाले शब्द क्या कहलाते हैं?",
    options: ["क्रिया", "विशेषण (Adjective)", "कारक", "उपसर्ग"],
    optionsHi: ["क्रिया", "विशेषण (Adjective)", "कारक", "उपसर्ग"],
    ans: 1,
    pyqRef: "CTET Hindi & BPSC TRE Primary",
    explanation: "संज्ञा अथवा सर्वनाम की विशेषता प्रकट करने वाले शब्दों को विशेषण कहा जाता है।",
    explanationHi: "संज्ञा अथवा सर्वनाम की विशेषता प्रकट करने वाले शब्दों को विशेषण कहा जाता है।"
  },
  {
    id: 12,
    q: "'मीठा सेब' और 'ईमानदार बालक' में 'मीठा' और 'ईमानदार' कौन से विशेषण हैं?",
    qHi: "'मीठा सेब' और 'ईमानदार बालक' में 'मीठा' और 'ईमानदार' कौन से विशेषण हैं?",
    options: ["संख्यावाचक विशेषण", "गुणवाचक विशेषण (Adjective of Quality)", "परिमाणवाचक विशेषण", "सार्वनामिक विशेषण"],
    optionsHi: ["संख्यावाचक विशेषण", "गुणवाचक विशेषण", "परिमाणवाचक विशेषण", "सार्वनामिक विशेषण"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & UPTET",
    explanation: "रंग, रूप, आकार, स्वाद, गुण-दोष बताने वाले विशेषण गुणवाचक विशेषण कहलाते हैं।",
    explanationHi: "रंग, रूप, आकार, स्वाद, गुण-दोष बताने वाले विशेषण गुणवाचक विशेषण कहलाते हैं।"
  },
  {
    id: 13,
    q: "'चार किलो गेहूँ' में 'चार किलो' किस प्रकार का विशेषण है?",
    qHi: "'चार किलो गेहूँ' में 'चार किलो' किस प्रकार का विशेषण है?",
    options: ["गुणवाचक", "निश्चित परिमाणवाचक विशेषण", "अनिश्चित परिमाणवाचक", "संख्यावाचक"],
    optionsHi: ["गुणवाचक", "निश्चित परिमाणवाचक विशेषण", "अनिश्चित परिमाणवाचक", "संख्यावाचक"],
    ans: 1,
    pyqRef: "CTET Hindi Paper 1",
    explanation: "माप-तौल की निश्चित मात्रा का बोध कराने वाले शब्द निश्चित परिमाणवाचक विशेषण होते हैं।",
    explanationHi: "माप-तौल की निश्चित मात्रा का बोध कराने वाले शब्द निश्चित परिमाणवाचक विशेषण होते हैं।"
  },
  {
    id: 14,
    q: "'कक्षा में चालीस छात्र उपस्थित हैं' — में 'चालीस' किस विशेषण का उदाहरण है?",
    qHi: "'कक्षा में चालीस छात्र उपस्थित हैं' — में 'चालीस' किस विशेषण का उदाहरण है?",
    options: ["परिमाणवाचक", "निश्चित संख्यावाचक विशेषण", "अनिश्चित संख्यावाचक", "गुणवाचक"],
    optionsHi: ["परिमाणवाचक", "निश्चित संख्यावाचक विशेषण", "अनिश्चित संख्यावाचक", "गुणवाचक"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & DSSSB",
    explanation: "छात्रों की निश्चित संख्या (40) को गिनने का बोध हो रहा है, अतः यह निश्चित संख्यावाचक विशेषण है।",
    explanationHi: "छात्रों की निश्चित संख्या (40) को गिनने का बोध हो रहा है, अतः यह निश्चित संख्यावाचक विशेषण है।"
  },
  {
    id: 15,
    q: "निम्नलिखित में से 'सूर्य' का पर्यायवाची शब्द कौन सा है?",
    qHi: "निम्नलिखित में से 'सूर्य' का पर्यायवाची शब्द कौन सा है?",
    options: ["शशि", "दिनकर (रवि / भानु)", "वारिद", "पयोद"],
    optionsHi: ["शशि", "दिनकर (रवि / भानु)", "वारिद", "पयोद"],
    ans: 1,
    pyqRef: "CTET Hindi & BPSC TRE",
    explanation: "सूर्य के पर्यायवाची शब्द: दिनकर, दिवाकर, रवि, भानु, भास्कर, आदित्य।",
    explanationHi: "सूर्य के पर्यायवाची शब्द: दिनकर, दिवाकर, रवि, भानु, भास्कर, आदित्य।"
  },
  {
    id: 16,
    q: "निम्नलिखित में से 'कमल' का सही पर्यायवाची शब्द कौन सा है?",
    qHi: "निम्नलिखित में से 'कमल' का सही पर्यायवाची शब्द कौन सा है?",
    options: ["जलद", "जलज (पंकज / नीरज)", "दामिनी", "अंबर"],
    optionsHi: ["जलद", "जलज (पंकज / नीरज)", "दामिनी", "अंबर"],
    ans: 1,
    pyqRef: "CTET Hindi & Bihar STET",
    explanation: "कमल के पर्यायवाची: जलज, पंकज, नीरज, सरोज, अरविंद, राजीव।",
    explanationHi: "कमल के पर्यायवाची: जलज, पंकज, नीरज, सरोज, अरविंद, राजीव।"
  },
  {
    id: 17,
    q: "'अमृत' शब्द का सही विलोम (विपरीतार्थक) शब्द क्या है?",
    qHi: "'अमृत' शब्द का सही विलोम (विपरीतार्थक) शब्द क्या है?",
    options: ["पीयूष", "विष (गरल)", "सुधा", "अमी"],
    optionsHi: ["पीयूष", "विष (गरल)", "सुधा", "अमी"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & UPTET",
    explanation: "अमृत का विलोम शब्द 'विष' अथवा 'गरल' होता है।",
    explanationHi: "अमृत का विलोम शब्द 'विष' अथवा 'गरल' होता है।"
  },
  {
    id: 18,
    q: "'आकाश' शब्द का विलोम शब्द क्या है?",
    qHi: "'आकाश' शब्द का विलोम शब्द क्या है?",
    options: ["धरती", "पाताल", "अंबर", "व्योम"],
    optionsHi: ["धरती", "पाताल", "अंबर", "व्योम"],
    ans: 1,
    pyqRef: "CTET Hindi & REET",
    explanation: "आकाश का मानक विलोम शब्द 'पाताल' होता है।",
    explanationHi: "आकाश का मानक विलोम शब्द 'पाताल' होता है।"
  },
  {
    id: 19,
    q: "'आँखों का तारा होना' मुहावरे का सही अर्थ क्या है?",
    qHi: "'आँखों का तारा होना' मुहावरे का सही अर्थ क्या है?",
    options: ["आँख में दर्द होना", "अत्यधिक प्रिय / प्यारा होना", "तारे देखना", "धोखा देना"],
    optionsHi: ["आँख में दर्द होना", "अत्यधिक प्रिय / प्यारा होना", "तारे देखना", "धोखा देना"],
    ans: 1,
    pyqRef: "CTET Hindi & BPSC TRE 1.0",
    explanation: "'आँखों का तारा होना' का अर्थ है बहुत अधिक प्रिय या दुलारा होना।",
    explanationHi: "'आँखों का तारा होना' का अर्थ है बहुत अधिक प्रिय या दुलारा होना।"
  },
  {
    id: 20,
    q: "'दाँत खट्टे करना' मुहावरे का सही अर्थ क्या है?",
    qHi: "'दाँत खट्टे करना' मुहावरे का सही अर्थ क्या है?",
    options: ["नींबू खाना", "पराजित करना / हरा देना", "क्रोधित होना", "डर जाना"],
    optionsHi: ["नींबू खाना", "पराजित करना / बुरी तरह हरा देना", "क्रोधित होना", "डर जाना"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & KVS PRT",
    explanation: "भारतीय सैनिकों ने युद्ध में शत्रुओं के दाँत खट्टे कर दिए अर्थात उन्हें पराजित कर दिया।",
    explanationHi: "भारतीय सैनिकों ने युद्ध में शत्रुओं के दाँत खट्टे कर दिए अर्थात उन्हें पराजित कर दिया।"
  },
  {
    id: 21,
    q: "'अंगूठा दिखाना' मुहावरे का उपयुक्त अर्थ क्या है?",
    qHi: "'अंगूठा दिखाना' मुहावरे का उपयुक्त अर्थ क्या है?",
    options: ["मदद करना", "साफ मना करना / इनकार करना", "अंगूठे की प्रशंसा करना", "चिढ़ाना"],
    optionsHi: ["मदद करना", "साफ मना करना / ऐन वक्त पर इनकार करना", "अंगूठे की प्रशंसा करना", "चिढ़ाना"],
    ans: 1,
    pyqRef: "CTET Hindi & DSSSB",
    explanation: "'अंगूठा दिखाना' का अर्थ समय पर साफ इनकार कर देना होता है।",
    explanationHi: "'अंगूठा दिखाना' का अर्थ समय पर साफ इनकार कर देना होता है।"
  },
  {
    id: 22,
    q: "'नौ दो ग्यारह होना' मुहावरे का क्या अर्थ है?",
    qHi: "'नौ दो ग्यारह होना' मुहावरे का क्या अर्थ है?",
    options: ["गणित सीखना", "रफूचक्कर होना / भाग जाना", "जोड़ करना", "चुप हो जाना"],
    optionsHi: ["गणित सीखना", "रफूचक्कर होना / भाग जाना", "जोड़ करना", "चुप हो जाना"],
    ans: 1,
    pyqRef: "CTET Hindi & BPSC TRE",
    explanation: "पुलिस को देखते ही चोर नौ दो ग्यारह हो गए (अर्थात भाग गए)।",
    explanationHi: "पुलिस को देखते ही चोर नौ दो ग्यारह हो गए (अर्थात भाग गए)।"
  },
  {
    id: 23,
    q: "'ईद का चाँद होना' मुहावरे का सही अर्थ क्या है?",
    qHi: "'ईद का चाँद होना' मुहावरे का सही अर्थ क्या है?",
    options: ["ईद मनाना", "बहुत दिनों बाद दिखाई देना", "सुंदर दिखना", "चाँद की पूजा करना"],
    optionsHi: ["ईद मनाना", "बहुत दिनों बाद दिखाई देना", "सुंदर दिखना", "चाँद की पूजा करना"],
    ans: 1,
    pyqRef: "BPSC TRE 3.0 & CTET",
    explanation: "जो व्यक्ति बहुत लंबे समय के बाद दिखाई देता है, उसे 'ईद का चाँद होना' कहते हैं।",
    explanationHi: "जो व्यक्ति बहुत लंबे समय के बाद दिखाई देता है, उसे 'ईद का चाँद होना' कहते हैं।"
  },
  {
    id: 24,
    q: "'हाथ मलना' मुहावरे का क्या तात्पर्य है?",
    qHi: "'हाथ मलना' मुहावरे का क्या तात्पर्य है?",
    options: ["हाथ धोना", "पछताना (Repent)", "सफाई करना", "हाथ जोड़ना"],
    optionsHi: ["हाथ धोना", "पछताना (Repent)", "सफाई करना", "हाथ जोड़ना"],
    ans: 1,
    pyqRef: "CTET Hindi & UPTET",
    explanation: "समय निकल जाने के बाद हाथ मलने (पछताने) से कोई लाभ नहीं होता।",
    explanationHi: "समय निकल जाने के बाद हाथ मलने (पछताने) से कोई लाभ नहीं होता।"
  },
  {
    id: 25,
    q: "'जिसका कोई शत्रु न जन्मा हो' — इस वाक्यांश के लिए एक शब्द क्या होगा?",
    qHi: "'जिसका कोई शत्रु न जन्मा हो' — इस वाक्यांश के लिए एक शब्द क्या होगा?",
    options: ["अजेय", "अजातशत्रु", "शत्रुघ्न", "अविनाशी"],
    optionsHi: ["अजेय", "अजातशत्रु", "शत्रुघ्न", "अविनाशी"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & Bihar STET",
    explanation: "जिसका कोई शत्रु न जन्मा हो उसे 'अजातशत्रु' कहा जाता है।",
    explanationHi: "जिसका कोई शत्रु न जन्मा हो उसे 'अजातशत्रु' कहा जाता है।"
  },
  {
    id: 26,
    q: "'सदा सत्य बोलने वाला' — इस वाक्यांश के लिए एक शब्द क्या है?",
    qHi: "'सदा सत्य बोलने वाला' — इस वाक्यांश के लिए एक शब्द क्या है?",
    options: ["सत्यवादी", "सत्याग्रही", "सत्यप्रिय", "साधु"],
    optionsHi: ["सत्यवादी", "सत्याग्रही", "सत्यप्रिय", "साधु"],
    ans: 0,
    pyqRef: "CTET Hindi & REET",
    explanation: "हमेशा सत्य बोलने वाले को 'सत्यवादी' कहा जाता है (जैसे सत्यवादी हरिश्चंद्र)।",
    explanationHi: "हमेशा सत्य बोलने वाले को 'सत्यवादी' कहा जाता है (जैसे सत्यवादी हरिश्चंद्र)।"
  },
  {
    id: 27,
    q: "'नाच न जाने आँगन टेढ़ा' — इस लोकोक्ति का वास्तविक अर्थ क्या है?",
    qHi: "'नाच न जाने आँगन टेढ़ा' — इस लोकोक्ति का वास्तविक अर्थ क्या है?",
    options: ["आँगन का टेढ़ा होना", "अपनी कमी छुपाने के लिए साधन या परिस्थिति में दोष निकालना", "नाचना न आना", "दूसरों की मदद न करना"],
    optionsHi: ["आँगन का टेढ़ा होना", "अपनी कमी छुपाने के लिए साधन में दोष निकालना", "नाचना न आना", "दूसरों की मदद न करना"],
    ans: 1,
    pyqRef: "CTET Hindi & BPSC TRE",
    explanation: "अपनी अयोग्यता को स्वीकार न करके दूसरों या परिस्थिति को दोष देना।",
    explanationHi: "अपनी अयोग्यता को स्वीकार न करके दूसरों या परिस्थिति को दोष देना।"
  },
  {
    id: 28,
    q: "'अधजल गगरी छलकत जाए' — इस कहावत का सही अर्थ क्या है?",
    qHi: "'अधजल गगरी छलकत जाए' — इस कहावत का सही अर्थ क्या है?",
    options: ["गगरी से पानी गिरना", "अल्प ज्ञानी व्यक्ति अधिक दिखावा या डींग हांकता है", "गगरी आधी भरी होना", "कम पानी पीना"],
    optionsHi: ["गगरी से पानी गिरना", "अल्प ज्ञानी व्यक्ति अधिक दिखावा या डींग हांकता है", "गगरी आधी भरी होना", "कम पानी पीना"],
    ans: 1,
    pyqRef: "BPSC TRE 2.0 & DSSSB",
    explanation: "कम ज्ञान या योग्यता वाला व्यक्ति अधिक दिखावा करता है।",
    explanationHi: "कम ज्ञान या योग्यता वाला व्यक्ति अधिक दिखावा करता है।"
  },
  {
    id: 29,
    q: "'जो सब कुछ जानता हो' — इस वाक्यांश के लिए एक शब्द क्या है?",
    qHi: "'जो सब कुछ जानता हो' — इस वाक्यांश के लिए एक शब्द क्या है?",
    options: ["अल्पज्ञ", "सर्वज्ञ", "विद्वान", "ज्ञानी"],
    optionsHi: ["अल्पज्ञ", "सर्वज्ञ", "विद्वान", "ज्ञानी"],
    ans: 1,
    pyqRef: "CTET Hindi & KVS PRT",
    explanation: "जो सब कुछ जानता हो उसे 'सर्वज्ञ' कहते हैं (कम जानने वाले को अल्पज्ञ कहते हैं)।",
    explanationHi: "जो सब कुछ जानता हो उसे 'सर्वज्ञ' कहते हैं (कम जानने वाले को अल्पज्ञ कहते हैं)।"
  },
  {
    id: 30,
    q: "'घोड़े बेचकर सोना' — इस प्रसिद्ध मुहावरे का क्या अर्थ है?",
    qHi: "'घोड़े बेचकर सोना' — इस प्रसिद्ध मुहावरे का क्या अर्थ है?",
    options: ["घोड़ों का व्यापार करना", "निश्चिंत होकर गहरी नींद सोना", "आलसी होना", "रात भर जागना"],
    optionsHi: ["घोड़ों का व्यापार करना", "निश्चिंत होकर गहरी नींद सोना", "आलसी होना", "रात भर जागना"],
    ans: 1,
    pyqRef: "BPSC TRE Primary & CTET Hindi",
    explanation: "'घोड़े बेचकर सोना' का अर्थ है किसी चिंता या दायित्व से पूरी तरह मुक्त होकर गहरी नींद में सोना।",
    explanationHi: "'घोड़े बेचकर सोना' का अर्थ है किसी चिंता या दायित्व से पूरी तरह मुक्त होकर गहरी नींद में सोना।"
  }
];

const evsHindiData = {
  'ncert-c5-evs-ch1': evsCh1,
  'ncert-c5-hindi-ch1': hindiCh1
};

const outPath = path.join(__dirname, 'evs_hindi_data.json');
fs.writeFileSync(outPath, JSON.stringify(evsHindiData, null, 2), 'utf8');
console.log("Successfully wrote evs_hindi_data.json! Keys:", Object.keys(evsHindiData));
for (const k in evsHindiData) {
  console.log(k, evsHindiData[k].length);
}
