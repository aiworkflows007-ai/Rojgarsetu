/**
 * build_class6_sci_sst_hindi.js
 * NCERT Class 6 Science, Social Science & Hindi (NEP 2020)
 * 
 * Ch 11: Science (Curiosity) - Diversity in the Living World & Science Method
 * Ch 12: Social Science (Exploring Society) - Oceans, Continents, Latitudes & Longitudes
 * Ch 13: Hindi (Malhar) - भाषा, लिपि, वर्तनी एवं व्यावहारिक व्याकरण
 * 
 * Exactly 30 bilingual competition-grade MCQs per chapter (90 total).
 */

const chapters = [
  // ==========================================
  // CHAPTER 11: Science (Curiosity)
  // ==========================================
  {
    id: "ncert-c6-sci01",
    classLevel: "Class 6",
    subject: "Science (Curiosity)",
    subjectCode: "EVS",
    chapterNo: 1,
    bookName: "Curiosity (Science - NEP 2020 Edition)",
    title: "Science Chapter 1 & 2: Diversity in the Living World & Scientific Inquiry",
    titleHi: "विज्ञान अध्याय 1 व 2: सजीव जगत में विविधता एवं वैज्ञानिक अन्वेषण",
    readingTime: "24 mins read",
    badge: "Life Science & Habitats",
    desc: "Explore living organisms and their habitats: terrestrial (deserts, mountains, forests) and aquatic (freshwater, marine), plant classification (herbs, shrubs, trees, creepers, climbers), animal adaptations, biotic and abiotic factors, and the scientific method of inquiry.",
    descHi: "सजीव एवं उनके प्राकृतिक आवास: स्थलीय (मरुस्थल, पर्वतीय, वन) एवं जलीय (अलवण जल, समुद्री), पादप वर्गीकरण (शाक, झाड़ी, वृक्ष, विसर्पी लता, आरोही लता), जीवों में अनुकूलन, जैव व अजैव घटक तथा वैज्ञानिक अन्वेषण विधि।",
    competitionEdge: "High-yield core for CTET Paper 2 (Maths & Science), BPSC TRE 4.0 Middle School (Science 6-8), KVS TGT Science, and State TETs. Frequent questions on desert and aquatic adaptations, root types (taproot vs fibrous), and venation relationships.",
    competitionEdgeHi: "CTET पेपर 2 (विज्ञान), BPSC शिक्षक भर्ती (कक्षा 6-8 विज्ञान), KVS और राज्य TET में सर्वाधिक प्रश्न। मरुस्थलीय व जलीय जीवों के अनुकूलन, मूसला जड़ बनाम रेशेदार जड़, और पत्ती के शिरा-विन्यास (समानांतर व जालिका) के संबंधों पर सीधे प्रश्न।",
    sections: [
      {
        heading: "1. Habitats (Awas) and Unique Adaptations",
        headingHi: "1. प्राकृतिक आवास एवं जीवों में विशिष्ट अनुकूलन",
        contentHtml: `
          <p><strong>Habitat (आवास):</strong> The physical environment in which an organism naturally lives, grows, and reproduces.</p>
          <div class="note-formula-box">
            <h4>🌿 Terrestrial &amp; Aquatic Adaptations:</h4>
            <ul>
              <li><strong>Desert Plants (Cactus / Nagphani):</strong>
                <ul>
                  <li>Leaves reduced to <strong>spines (thorn-like)</strong> to prevent transpiration loss.</li>
                  <li>Green, fleshy <strong>stem</strong> performs photosynthesis and stores water.</li>
                  <li>Stem is covered with a thick <strong>waxy cuticle</strong> to retain water.</li>
                  <li>Roots penetrate very deep into the soil to absorb moisture.</li>
                </ul>
              </li>
              <li><strong>Desert Animals (Camel / ऊँट):</strong>
                <ul>
                  <li>Long legs keep the body away from the hot sand.</li>
                  <li>Excretes very little urine and dry dung; does not sweat.</li>
                  <li>Wide padded feet prevent sinking in sand.</li>
                  <li>Fat stored in the <strong>hump</strong> provides energy when food is scarce.</li>
                </ul>
              </li>
              <li><strong>Aquatic Animals (Fish / मछली):</strong>
                <ul>
                  <li><strong>Streamlined body</strong> reduces water resistance.</li>
                  <li><strong>Gills</strong> extract dissolved oxygen from water.</li>
                  <li><strong>Fins and flat tail</strong> provide steering and balance.</li>
                  <li>Slippery scales coated with mucus protect the body.</li>
                </ul>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>आवास (Habitat):</strong> वह परिवेश जहाँ कोई सजीव स्वाभाविक रूप से रहता है, भोजन प्राप्त करता है और प्रजनन करता है।</p>
          <div class="note-formula-box">
            <h4>🌿 स्थलीय एवं जलीय जीवों के प्रमुख अनुकूलन:</h4>
            <ul>
              <li><strong>मरुस्थलीय पौधे (कैक्टस / नागफनी):</strong>
                <ul>
                  <li>वाष्पोत्सर्जन से जल हानि रोकने के लिए पत्तियाँ <strong>काँटों (Spines)</strong> में रूपांतरित।</li>
                  <li>हरा, गूदेदार <strong>तना</strong> प्रकाश संश्लेषण करता है और जल संग्रह करता है।</li>
                  <li>तने पर <strong>मोमी परत (Waxy layer)</strong> पाई जाती है।</li>
                  <li>जड़ें जल की खोज में मिट्टी में अत्यधिक गहराई तक जाती हैं।</li>
                </ul>
              </li>
              <li><strong>मरुस्थलीय जीव (ऊँट / रेगिस्तान का जहाज):</strong>
                <ul>
                  <li>लंबी टाँगें शरीर को रेत की गर्मी से दूर रखती हैं।</li>
                  <li>मूत्र की मात्रा बहुत कम, लीद सूखी होती है और पसीना नहीं आता।</li>
                  <li>चौड़े गद्देदार पैर रेत में धंसने से रोकते हैं।</li>
                  <li><strong>कूबड़</strong> में चर्बी (वसा) संचित रहती है जो भोजन न मिलने पर ऊर्जा देती है।</li>
                </ul>
              </li>
              <li><strong>जलीय जीव (मछली):</strong>
                <ul>
                  <li><strong>धारा-रेखीय शरीर (Streamlined body)</strong> तैरने में घर्षण कम करता है।</li>
                  <li><strong>गलफड़े (Gills)</strong> जल में घुली ऑक्सीजन ग्रहण करते हैं।</li>
                  <li><strong>पंख और पूंछ</strong> तैरने और दिशा बदलने में संतुलन बनाते हैं।</li>
                  <li>चिकने शल्क शरीर को सुरक्षित रखते हैं।</li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Plant Classification & The Golden Leaf-Root Relationship",
        headingHi: "2. पादपों का वर्गीकरण एवं पत्ती-जड़ का स्वर्णिम संबंध",
        contentHtml: `
          <div class="note-formula-box">
            <h4>🌱 Categories of Plants based on Habit:</h4>
            <ul>
              <li><strong>Herbs (शाक):</strong> Short plants with green, soft, tender stems (e.g. Tomato, Mint, Wheat).</li>
              <li><strong>Shrubs (झाड़ी):</strong> Medium-sized plants with hard woody stem branching close to the base (e.g. Rose, Lemon, Henna).</li>
              <li><strong>Trees (वृक्ष):</strong> Tall plants with hard, thick, woody brown trunk branching higher up (e.g. Neem, Mango, Banyan).</li>
              <li><strong>Creepers (विसर्पी लता):</strong> Weak stems that spread along the ground (e.g. Watermelon, Pumpkin).</li>
              <li><strong>Climbers (आरोही लता):</strong> Take support of neighboring structures to climb up using tendrils (e.g. Money plant, Pea, Grapes).</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 Master NCERT Exam Rule (Venation &amp; Root Type):</h4>
            <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.88rem; text-align:left;">
              <tr style="background:#fde047;">
                <th style="border:1px solid #ca8a04; padding:6px;">Leaf Venation (शिरा-विन्यास)</th>
                <th style="border:1px solid #ca8a04; padding:6px;">Root System (जड़ का प्रकार)</th>
                <th style="border:1px solid #ca8a04; padding:6px;">Cotyledon / Examples</th>
              </tr>
              <tr>
                <td style="border:1px solid #ca8a04; padding:6px;"><strong>Reticulate Venation</strong> (Net-like pattern)</td>
                <td style="border:1px solid #ca8a04; padding:6px;"><strong>Taproot (मूसला जड़)</strong> (One main root with lateral roots)</td>
                <td style="border:1px solid #ca8a04; padding:6px;">Dicot (Gram, Pea, Mustard, Mango, Rose)</td>
              </tr>
              <tr>
                <td style="border:1px solid #ca8a04; padding:6px;"><strong>Parallel Venation</strong> (Parallel veins)</td>
                <td style="border:1px solid #ca8a04; padding:6px;"><strong>Fibrous Root (रेशेदार जड़)</strong> (Cluster of hair-like roots from stem base)</td>
                <td style="border:1px solid #ca8a04; padding:6px;">Monocot (Wheat, Maize, Grass, Bamboo, Banana)</td>
              </tr>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🌱 संरचना के आधार पर पादप वर्गीकरण:</h4>
            <ul>
              <li><strong>शाक (Herbs):</strong> कोमल, हरे तने वाले छोटे पौधे (उदा. टमाटर, पुदीना, गेहूँ)।</li>
              <li><strong>झाड़ी (Shrubs):</strong> मध्यम ऊँचाई वाले काष्ठीय पौधे, जिनकी शाखाएँ तने के आधार के पास से निकलती हैं (उदा. गुलाब, नींबू, मेहंदी)।</li>
              <li><strong>वृक्ष (Trees):</strong> कठोर, मोटे भूरे तने (Trunk) वाले विशालकाय पौधे (उदा. नीम, आम, बरगद)।</li>
              <li><strong>विसर्पी लता (Creepers):</strong> कमजोर तने वाले पौधे जो भूमि पर फैलते हैं (उदा. तरबूज, कद्दू)।</li>
              <li><strong>आरोही लता (Climbers):</strong> सहारे की सहायता से ऊपर चढ़ने वाले पौधे (उदा. मनी प्लांट, मटर, अंगूर)।</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>🏆 एनसीईआरटी का स्वर्णिम नियम (शिरा-विन्यास व जड़ का सीधा संबंध):</h4>
            <p><strong>जालिका शिरा-विन्यास (Reticulate):</strong> मूसला जड़ (Taproot) होती है &rarr; द्विबीजपत्री (चना, मटर, आम, सरसों)।</p>
            <p><strong>समानांतर शिरा-विन्यास (Parallel):</strong> रेशेदार/झकड़ा जड़ (Fibrous root) होती है &rarr; एकबीजपत्री (गेहूँ, मक्का, घास, केला)।</p>
          </div>
        `
      },
      {
        heading: "3. Biotic vs Abiotic Factors & The Scientific Method",
        headingHi: "3. जैव बनाम अजैव घटक एवं वैज्ञानिक अन्वेषण विधि",
        contentHtml: `
          <p>An ecosystem comprises two interacting components:</p>
          <ul>
            <li><strong>Biotic Components (जैव घटक):</strong> All living entities—Producers (plants), Consumers (animals), Decomposers (bacteria, fungi).</li>
            <li><strong>Abiotic Components (अजैव घटक):</strong> Non-living physical and chemical factors—Sunlight, Air (O<sub>2</sub>, CO<sub>2</sub>), Water, Temperature, Soil, Rocks.</li>
            <li><strong>Scientific Method:</strong> Observation &rarr; Question &rarr; Hypothesis &rarr; Experimentation (Controlled vs Variable) &rarr; Data Collection &rarr; Conclusion &rarr; Peer Verification.</li>
          </ul>
        `,
        contentHtmlHi: `
          <p>पर्यावरण तंत्र दो परस्पर क्रियाशील घटकों से मिलकर बनता है:</p>
          <ul>
            <li><strong>जैव घटक (Biotic):</strong> सभी जीवित प्राणी—उत्पादक (पौधे), उपभोक्ता (जंतु), अपघटक (जीवाणु, कवक)।</li>
            <li><strong>अजैव घटक (Abiotic):</strong> निर्जीव भौतिक और रासायनिक कारक—सूर्य का प्रकाश, वायु, जल, तापमान, मिट्टी, चट्टानें।</li>
            <li><strong>वैज्ञानिक विधि:</strong> अवलोकन &rarr; प्रश्न पूछना &rarr; परिकल्पना बनाना &rarr; नियंत्रित प्रयोग &rarr; आँकड़ा संग्रह &rarr; निष्कर्ष &rarr; सत्यापन।</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "In a plant having leaves with reticulate venation, what kind of root system is found?",
        qHi: "जिन पौधों की पत्तियों में जालिका शिरा-विन्यास (Reticulate venation) होता है, उनकी जड़ें कैसी होती हैं?",
        options: ["Fibrous root (रेशेदार जड़)", "Taproot (मूसला जड़)", "Adventitious root only", "Tuberous root"],
        optionsHi: ["रेशेदार/झकड़ा जड़", "मूसला जड़ (Taproot)", "केवल अपस्थानिक जड़", "कंदयुक्त जड़"],
        ans: 1,
        pyqRef: "CTET Paper 2 (Maths & Science) & BPSC TRE Middle School",
        explanation: "Leaves with reticulate venation are always paired with a taproot system (e.g. gram, mustard, mango).",
        explanationHi: "जालिका शिरा-विन्यास वाली पत्तियों में सदैव मूसला जड़ (Taproot) पाई जाती है (जैसे चना, सरसों, आम)।"
      },
      {
        id: 2,
        q: "In a cactus plant, which part is modified into spines to reduce water loss?",
        qHi: "नागफनी (कैक्टस) के पौधे में जल की हानि कम करने के लिए कौन-सा भाग काँटों में रूपांतरित हो जाता है?",
        options: ["Stem", "Leaves", "Roots", "Flowers"],
        optionsHi: ["तना", "पत्तियाँ (Leaves)", "जड़ें", "पुष्प"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Primary/Middle",
        explanation: "In desert plants like cactus, leaves are modified into spines to minimize transpiration.",
        explanationHi: "कैक्टस जैसे मरुस्थलीय पौधों में वाष्पोत्सर्जन रोकने के लिए पत्तियाँ काँटों में बदल जाती हैं।"
      },
      {
        id: 3,
        q: "Which part of the cactus plant carries out photosynthesis?",
        qHi: "कैक्टस (नागफनी) में प्रकाश संश्लेषण का कार्य मुख्य रूप से कौन-सा भाग करता है?",
        options: ["Spines", "Fleshy green stem", "Deep taproot", "Bark"],
        optionsHi: ["काँटे", "हरा गूदेदार तना (Stem)", "गहरी मूसला जड़", "छाल"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "The stem of cactus becomes green and fleshy containing chlorophyll to perform photosynthesis and store water.",
        explanationHi: "कैक्टस का तना हरा और गूदेदार हो जाता है जिसमें क्लोरोफिल होता है और यह प्रकाश संश्लेषण करता है।"
      },
      {
        id: 4,
        q: "Which organ in fish extracts oxygen dissolved in water?",
        qHi: "मछली में जल में घुली ऑक्सीजन को ग्रहण करने वाला अंग कौन-सा है?",
        options: ["Lungs", "Skin", "Gills (गलफड़े)", "Fins"],
        optionsHi: ["फेफड़े", "त्वचा", "गलफड़े / क्लोम (Gills)", "पंख"],
        ans: 2,
        pyqRef: "CTET Paper 2 & Railway Group D",
        explanation: "Fish use gills (specialized respiratory organs) to absorb dissolved oxygen from water.",
        explanationHi: "मछलियाँ जल में घुली ऑक्सीजन को अवशोषित करने के लिए गलफड़ों (क्लोम) का उपयोग करती हैं।"
      },
      {
        id: 5,
        q: "Which of the following plants has PARALLEL venation in its leaves?",
        qHi: "निम्नलिखित में से किस पौधे की पत्तियों में समानांतर शिरा-विन्यास (Parallel venation) पाया जाता है?",
        options: ["Peepal", "Mango", "Wheat / Grass", "China Rose"],
        optionsHi: ["पीपल", "आम", "गेहूँ / घास", "गुड़हल"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "Wheat, maize, banana, and grasses have parallel veins and fibrous roots (monocots).",
        explanationHi: "गेहूँ, मक्का, केला और घास में समानांतर शिरा-विन्यास और रेशेदार जड़ें पाई जाती हैं।"
      },
      {
        id: 6,
        q: "Which of the following is an ABIOTIC component of a habitat?",
        qHi: "निम्नलिखित में से कौन-सा किसी आवास का एक अजैव घटक (Abiotic component) है?",
        options: ["Bacteria", "Sunlight and Water", "Fungi", "Earthworm"],
        optionsHi: ["जीवाणु", "सूर्य का प्रकाश एवं जल", "कवक", "केंचुआ"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & State TET",
        explanation: "Sunlight, water, air, temperature, and rocks are abiotic (non-living) components.",
        explanationHi: "सूर्य का प्रकाश, जल, वायु, तापमान और मिट्टी निर्जीव होने के कारण अजैव घटक हैं।"
      },
      {
        id: 7,
        q: "Why do mountain trees like pines and deodars have sloping branches and needle-like leaves?",
        qHi: "चीड़ और देवदार जैसे पर्वतीय वृक्षों की शाखाएँ तिरछी और पत्तियाँ सुई के समान नुकीली क्यों होती हैं?",
        options: ["To absorb more sunlight", "To allow snow and rainwater to slide off easily", "To prevent animals from eating", "To climb rocks"],
        optionsHi: ["अधिक धूप अवशोषित करने हेतु", "बर्फ और वर्षा के जल को आसानी से नीचे फिसलने देने हेतु", "जंतुओं से बचाव हेतु", "चट्टानों पर चढ़ने हेतु"],
        ans: 1,
        pyqRef: "NCERT Class 6 Curiosity & CTET Paper 2",
        explanation: "Sloping branches and needle-shaped leaves allow rainwater and heavy snow to slide off quickly without breaking branches.",
        explanationHi: "शंक्वाकार तिरछी शाखाएँ और सुई जैसी पत्तियाँ बर्फ और वर्षा के पानी को आसानी से नीचे फिसलने देती हैं।"
      },
      {
        id: 8,
        q: "Plants with weak stems that cannot stand upright and spread on the ground are called:",
        qHi: "कमजोर तने वाले पौधे जो सीधे खड़े नहीं हो सकते और भूमि पर फैल जाते हैं, क्या कहलाते हैं?",
        options: ["Climbers (आरोही)", "Creepers (विसर्पी लता)", "Shrubs", "Herbs"],
        optionsHi: ["आरोही लता", "विसर्पी लता (Creepers)", "झाड़ी", "शाक"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Creepers (like watermelon, pumpkin, sweet potato) spread along the ground.",
        explanationHi: "विसर्पी लताएँ (जैसे तरबूज, कद्दू) भूमि पर चारों ओर फैलती हैं।"
      },
      {
        id: 9,
        q: "Which plant uses tendrils to climb up walls or fences?",
        qHi: "दीवारों या बाड़ पर ऊपर चढ़ने के लिए कौन-सा पौधा प्रतान (Tendrils) का सहारा लेता है?",
        options: ["Watermelon", "Money Plant / Pea", "Coriander", "Mustard"],
        optionsHi: ["तरबूज", "मनी प्लांट / मटर (Pea)", "धनिया", "सरसों"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Climbers like peas and money plants use tendrils to support vertical growth.",
        explanationHi: "आरोही पौधे (जैसे मटर, मनी प्लांट) प्रतान (Tendrils) की मदद से सहारे पर ऊपर चढ़ते हैं।"
      },
      {
        id: 10,
        q: "What is the primary function of stomata present on the surface of leaves?",
        qHi: "पत्तियों की सतह पर पाए जाने वाले रंध्रों (Stomata) का मुख्य कार्य क्या है?",
        options: ["Absorption of soil nutrients", "Exchange of gases (O2/CO2) and transpiration", "Transport of food", "Root anchoring"],
        optionsHi: ["मृदा पोषक तत्वों का अवशोषण", "गैसों का आदान-प्रदान (O2/CO2) एवं वाष्पोत्सर्जन", "भोजन का संवहन", "पौधे को जमाना"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CGL Biology",
        explanation: "Stomata regulate gas exchange for photosynthesis/respiration and water vapor loss during transpiration.",
        explanationHi: "रंध्र प्रकाश संश्लेषण व श्वसन के लिए गैसों का आदान-प्रदान और वाष्पोत्सर्जन को नियंत्रित करते हैं।"
      },
      {
        id: 11,
        q: "Which of the following animals breathes through moist skin as well as lungs?",
        qHi: "निम्नलिखित में से कौन-सा जंतु नम त्वचा और फेफड़ों दोनों से श्वसन कर सकता है?",
        options: ["Fish", "Frog (मेंढक)", "Snake", "Pigeon"],
        optionsHi: ["मछली", "मेंढक (Frog)", "साँप", "कबूतर"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Railway NTPC",
        explanation: "Frogs breathe through lungs on land and through moist cutaneous skin in water.",
        explanationHi: "मेंढक स्थल पर फेफड़ों से और जल में अपनी नम त्वचा (त्वचीय श्वसन) से सांस लेता है।"
      },
      {
        id: 12,
        q: "What is the green pigment in leaves responsible for trapping sunlight during photosynthesis?",
        qHi: "प्रकाश संश्लेषण में सूर्य के प्रकाश को अवशोषित करने वाला पत्तियों का हरा वर्णक कौन-सा है?",
        options: ["Carotene", "Chlorophyll (पर्णहरित)", "Xanthophyll", "Haemoglobin"],
        optionsHi: ["कैरोटीन", "क्लोरोफिल (पर्णहरित)", "जैंथोफिल", "हीमोग्लोबिन"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Primary",
        explanation: "Chlorophyll traps solar energy to synthesize glucose from CO2 and water.",
        explanationHi: "क्लोरोफिल (पर्णहरित) प्रकाश संश्लेषण के लिए सौर ऊर्जा का अवशोषण करता है।"
      },
      {
        id: 13,
        q: "What is the first step in the scientific inquiry method?",
        qHi: "वैज्ञानिक अन्वेषण विधि (Scientific Inquiry) का पहला चरण क्या है?",
        options: ["Drawing conclusions", "Observation and asking a question", "Writing the research paper", "Formulating mathematical formulas"],
        optionsHi: ["निष्कर्ष निकालना", "अवलोकन करना एवं प्रश्न पूछना", "शोध पत्र लिखना", "गणितीय सूत्र बनाना"],
        ans: 1,
        pyqRef: "NCERT Class 6 Curiosity Chapter 1 & Science Pedagogy",
        explanation: "Scientific inquiry begins with keen observation of surroundings and formulating a question.",
        explanationHi: "वैज्ञानिक अन्वेषण की शुरुआत परिवेश के सूक्ष्म अवलोकन और तार्किक प्रश्न पूछने से होती है।"
      },
      {
        id: 14,
        q: "What are the tiny pores on the stem of woody trees through which exchange of gases occurs called?",
        qHi: "काष्ठीय वृक्षों के तनों पर पाए जाने वाले छोटे छिद्र क्या कहलाते हैं जिनसे गैसों का विनिमय होता है?",
        options: ["Stomata", "Lenticels (वातरंध्र)", "Hydathodes", "Guard cells"],
        optionsHi: ["रंध्र", "वातरंध्र (Lenticels)", "जल रंध्र", "द्वार कोशिकाएँ"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School Science",
        explanation: "Woody stems exchange gases through tiny pores called lenticels.",
        explanationHi: "काष्ठीय तनों में गैसों का विनिमय वातरंध्रों (Lenticels) के माध्यम से होता है।"
      },
      {
        id: 15,
        q: "Which adaptation helps aquatic plants like lotus float on water?",
        qHi: "कमल जैसे जलीय पौधों को जल पर तैरने में कौन-सा अनुकूलन मदद करता है?",
        options: ["Heavy solid stems", "Spongy, hollow petioles filled with air spaces", "Thick woody bark", "Deep taproots"],
        optionsHi: ["भारी ठोस तना", "वायु कोष्ठों से युक्त खोखले व स्पंजी पर्णवृंत", "मोटी काष्ठीय छाल", "गहरी मूसला जड़ें"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Hollow, spongy stems and petioles contain air chambers that provide buoyancy to float on water.",
        explanationHi: "खोखले और स्पंजी तने में हवा भरी होती है, जिससे पौधा हल्का होकर पानी की सतह पर तैरता है।"
      },
      {
        id: 16,
        q: "Which test is used to detect the presence of starch in a leaf?",
        qHi: "पत्ती में मंड (Starch) की उपस्थिति का परीक्षण करने के लिए किस घोल का उपयोग किया जाता है?",
        options: ["Copper sulphate solution", "Iodine solution", "Caustic soda solution", "Litmus paper"],
        optionsHi: ["कॉपर सल्फेट घोल", "आयोडीन घोल (Iodine solution)", "कास्टिक सोडा घोल", "लिटमस पत्र"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "Iodine turns blue-black in the presence of starch.",
        explanationHi: "आयोडीन का घोल मंड (स्टार्च) के संपर्क में आने पर नीला-काला रंग देता है।"
      },
      {
        id: 17,
        q: "What is the male reproductive part of a flower called?",
        qHi: "पुष्प के नर जनन अंग को क्या कहा जाता है?",
        options: ["Pistil (स्त्रीकेसर)", "Stamen (पुंकेसर)", "Petal (पंखुड़ी)", "Sepal (बाह्यदल)"],
        optionsHi: ["स्त्रीकेसर (Pistil)", "पुंकेसर (Stamen)", "पंखुड़ी", "बाह्यदल"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "The male reproductive part is the stamen (consisting of anther and filament).",
        explanationHi: "पुष्प का नर जनन अंग पुंकेसर (Stamen) कहलाता है, जिसमें परागकोश और तंतु होते हैं।"
      },
      {
        id: 18,
        q: "What are the three main parts of a Pistil (female reproductive organ of a flower)?",
        qHi: "पुष्प के मादा जनन अंग (स्त्रीकेसर) के तीन मुख्य भाग कौन-से हैं?",
        options: ["Anther, Filament, Pollen", "Stigma, Style, Ovary", "Sepal, Petal, Receptacle", "Root, Stem, Leaf"],
        optionsHi: ["परागकोश, तंतु, परागकण", "वर्तिकाग्र, वर्तिका, अंडाशय (Stigma, Style, Ovary)", "बाह्यदल, दल, पुष्पासन", "जड़, तना, पत्ती"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "The pistil comprises Stigma (sticky top), Style (slender tube), and Ovary (swollen base containing ovules).",
        explanationHi: "स्त्रीकेसर के तीन भाग हैं: वर्तिकाग्र (Stigma), वर्तिका (Style) और अंडाशय (Ovary)।"
      },
      {
        id: 19,
        q: "Which animal has thick layers of fat (blubber) beneath its skin to survive freezing polar conditions?",
        qHi: "ध्रुवीय क्षेत्रों की अत्यधिक ठंड में जीवित रहने के लिए किस जीव की त्वचा के नीचे वसा की मोटी परत (ब्लबर) होती है?",
        options: ["Camel", "Polar Bear / Seal", "Desert Fox", "Zebra"],
        optionsHi: ["ऊँट", "ध्रुवीय भालू / सील (Polar Bear)", "मरुस्थलीय लोमड़ी", "जेब्रा"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Polar bears and seals have a thick layer of fat (blubber) and dense fur that insulate them against extreme cold.",
        explanationHi: "ध्रुवीय भालू और सील की त्वचा के नीचे वसा की मोटी परत (Blubber) होती है जो उन्हें अत्यधिक ठंड से बचाती है।"
      },
      {
        id: 20,
        q: "The process by which plants release excess water as vapor through stomata is called:",
        qHi: "पौधों द्वारा रंध्रों के माध्यम से अतिरिक्त जल को वाष्प के रूप में बाहर निकालने की क्रिया क्या कहलाती है?",
        options: ["Respiration", "Transpiration (वाष्पोत्सर्जन)", "Photosynthesis", "Precipitation"],
        optionsHi: ["श्वसन", "वाष्पोत्सर्जन (Transpiration)", "प्रकाश संश्लेषण", "वर्षण"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Water vapor is released through leaf stomata by transpiration.",
        explanationHi: "पत्तियों के रंध्रों से जल वाष्प के रूप में बाहर निकलने की प्रक्रिया वाष्पोत्सर्जन कहलाती है।"
      },
      {
        id: 21,
        q: "What type of venation is found in the leaves of a Mango tree?",
        qHi: "आम के पेड़ की पत्तियों में किस प्रकार का शिरा-विन्यास पाया जाता है?",
        options: ["Parallel venation", "Reticulate venation (जालिका शिरा-विन्यास)", "Circular venation", "No venation"],
        optionsHi: ["समानांतर शिरा-विन्यास", "जालिका शिरा-विन्यास (Reticulate)", "वृत्ताकार शिरा-विन्यास", "कोई शिरा-विन्यास नहीं"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Mango is a dicotyledonous plant with reticulate venation and a taproot.",
        explanationHi: "आम एक द्विबीजपत्री वृक्ष है, जिसकी पत्तियों में जालिका शिरा-विन्यास और मूसला जड़ होती है।"
      },
      {
        id: 22,
        q: "Which of the following is a nocturnal animal adapted to desert conditions by staying in deep burrows during the day?",
        qHi: "निम्नलिखित में से कौन-सा रात्रिचर जीव दिन में गहरी बिलों में रहकर मरुस्थल की गर्मी से बचता है?",
        options: ["Camel", "Desert Rat / Kangaroo Rat", "Elephant", "Mountain Goat"],
        optionsHi: ["ऊँट", "रेगिस्तानी चूहा / कंगारू रैट", "हाथी", "पर्वतीय बकरी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Desert rats and snakes stay deep in underground cool burrows during the day and come out at night.",
        explanationHi: "रेगिस्तानी चूहे और साँप दिन में ठंडी गहरी बिलों में रहते हैं और केवल रात में बाहर आते हैं।"
      },
      {
        id: 23,
        q: "What do the ovules present inside the ovary of a flower develop into after fertilization?",
        qHi: "निषेचन के बाद पुष्प के अंडाशय के अंदर स्थित बीजांड (Ovules) किसमें विकसित होते हैं?",
        options: ["Fruit", "Seed (बीज)", "Petal", "Flower"],
        optionsHi: ["फल", "बीज (Seed)", "पंखुड़ी", "पुष्प"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "After fertilization, ovules develop into seeds, while the ovary ripens into the fruit.",
        explanationHi: "निषेचन के बाद बीजांड 'बीज' में बदलते हैं, जबकि अंडाशय पककर 'फल' बनता है।"
      },
      {
        id: 24,
        q: "The swollen bottom part of the pistil containing ovules is known as:",
        qHi: "स्त्रीकेसर का फूला हुआ निचला आधार भाग जिसमें बीजांड होते हैं, क्या कहलाता है?",
        options: ["Stigma", "Style", "Ovary (अंडाशय)", "Thalamus"],
        optionsHi: ["वर्तिकाग्र", "वर्तिका", "अंडाशय (Ovary)", "पुष्पासन"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "The swollen basal part is the ovary.",
        explanationHi: "स्त्रीकेसर का फूला हुआ आधार भाग अंडाशय कहलाता है।"
      },
      {
        id: 25,
        q: "Which gas is absorbed by green plants during the process of photosynthesis?",
        qHi: "प्रकाश संश्लेषण की क्रिया में हरे पौधों द्वारा कौन-सी गैस अवशोषित की जाती है?",
        options: ["Oxygen", "Carbon dioxide (CO2)", "Nitrogen", "Argon"],
        optionsHi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड (CO2)", "नाइट्रोजन", "आर्गन"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Plants absorb carbon dioxide from air and release oxygen during photosynthesis.",
        explanationHi: "पौधे प्रकाश संश्लेषण में कार्बन डाइऑक्साइड लेते हैं और ऑक्सीजन छोड़ते हैं।"
      },
      {
        id: 26,
        q: "What do we call animals that eat both plants and other animals?",
        qHi: "वे जंतु जो पौधों और अन्य जंतुओं दोनों को खाते हैं, क्या कहलाते हैं?",
        options: ["Herbivores (शाकाहारी)", "Carnivores (माँसाहारी)", "Omnivores (सर्वाहारी)", "Decomposers"],
        optionsHi: ["शाकाहारी", "माँसाहारी", "सर्वाहारी (Omnivores)", "अपघटक"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Animals eating both plant and animal matter (like humans, bears, crows) are Omnivores.",
        explanationHi: "पौधों और मांस दोनों को खाने वाले जंतु सर्वाहारी (जैसे मनुष्य, भालू, कौआ) कहलाते हैं।"
      },
      {
        id: 27,
        q: "In which habitat would you find an animal with thick fur, layer of subcutaneous fat, and hooves suited for steep rocky slopes?",
        qHi: "मोटी फर, त्वचा के नीचे वसा की परत, और ढलान वाली चट्टानों पर चलने के लिए मजबूत खुर वाला जीव किस आवास में पाया जाएगा?",
        options: ["Desert", "Mountain Habitat (पर्वतीय आवास)", "Tropical Rainforest", "Open Ocean"],
        optionsHi: ["मरुस्थल", "पर्वतीय आवास (Mountain Habitat)", "उष्णकटिबंधीय वर्षावन", "खुला समुद्र"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "Mountain goats and snow leopards possess these adaptations for steep, cold terrain.",
        explanationHi: "पर्वतीय बकरियों और हिम तेंदुओं में पथरीली ढलानों और ठंड के लिए ये अनुकूलन होते हैं।"
      },
      {
        id: 28,
        q: "Which part of a plant absorbs water and mineral nutrients from the soil?",
        qHi: "पौधे का कौन-सा भाग मिट्टी से जल और खनिज लवणों का अवशोषण करता है?",
        options: ["Leaves", "Stem", "Roots (जड़ें)", "Flowers"],
        optionsHi: ["पत्तियाँ", "तना", "जड़ें (Roots)", "पुष्प"],
        ans: 2,
        pyqRef: "CTET Paper 1",
        explanation: "Root hairs absorb water and dissolved mineral nutrients from the soil.",
        explanationHi: "जड़ों के मूलरोम मिट्टी से जल और खनिज लवणों को अवशोषित करते हैं।"
      },
      {
        id: 29,
        q: "Why do desert snakes lack limbs (legs)?",
        qHi: "मरुस्थलीय साँपों में पैरों का अभाव क्यों होता है?",
        options: ["Loss due to disease", "Adaptation for slithering easily on sand and entering narrow burrows", "They do not need to move", "None of these"],
        optionsHi: ["रोग के कारण", "रेत पर आसानी से रेंगने और संकरी बिलों में घुसने के लिए अनुकूलन", "उन्हें गति की आवश्यकता नहीं होती", "इनमें से कोई नहीं"],
        ans: 1,
        pyqRef: "CTET Paper 2 Science",
        explanation: "A limbless streamlined cylindrical body allows swift burrowing and movement through loose sand.",
        explanationHi: "पैर-विहीन बेलनाकार शरीर रेत में फिसलने और संकरी बिलों में प्रवेश करने के लिए अनुकूलित है।"
      },
      {
        id: 30,
        q: "Which Indian scientist is celebrated for proving that plants respond to external stimuli like living creatures?",
        qHi: "किस महान भारतीय वैज्ञानिक ने क्रेशकोग्राफ यंत्र बनाकर यह सिद्ध किया था कि पौधे भी सजीवों की तरह बाह्य उद्दीपनों के प्रति प्रतिक्रिया करते हैं?",
        options: ["C.V. Raman", "Jagadish Chandra Bose", "Homi J. Bhabha", "Satyendra Nath Bose"],
        optionsHi: ["सी.वी. रमन", "जगदीश चंद्र बसु (J.C. Bose)", "होमी जहांगीर भाभा", "सत्येंद्र नाथ बोस"],
        ans: 1,
        pyqRef: "NCERT Class 6 Curiosity Scientist Spotlight & GK",
        explanation: "Sir J. C. Bose invented the crescograph and demonstrated electrical responses in plant tissues.",
        explanationHi: "आचार्य जगदीश चंद्र बसु ने क्रेशकोग्राफ बनाया और सिद्ध किया कि पौधों में भी संवेदनाएँ होती हैं।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 12: Social Science (Exploring Society)
  // ==========================================
  {
    id: "ncert-c6-sst01",
    classLevel: "Class 6",
    subject: "Social Science (Exploring Society)",
    subjectCode: "SST",
    chapterNo: 1,
    bookName: "Exploring Society: India and Beyond (NEP 2020 Edition)",
    title: "Social Science Chapter 1 & 2: Oceans, Continents, Latitudes & Longitudes",
    titleHi: "सामाजिक विज्ञान अध्याय 1 व 2: महासागर, महाद्वीप, अक्षांश एवं देशांतर",
    readingTime: "24 mins read",
    badge: "Earth Geography Foundation",
    desc: "Understand Earth in space: Earth's geoid shape, rotation and revolution, Equator (0°), Tropics of Cancer & Capricorn (23.5° N/S), Arctic & Antarctic Circles, Prime Meridian (0° Greenwich), International Date Line (180°), time zone calculation (15° = 1 hour, 1° = 4 mins), Indian Standard Time (82.5° E), and the 7 Continents and 5 Oceans.",
    descHi: "अंतरिक्ष में पृथ्वी की समझ: भू-आभ (Geoid) आकृति, घूर्णन व परिक्रमण, विषुवत वृत्त (0°), कर्क व मकर रेखा (23.5° उ/द), आर्कटिक व अंटार्कटिक वृत्त, प्रधान मध्याह्न रेखा (0° ग्रीनविच), 180° अंतर्राष्ट्रीय तिथि रेखा, समय गणना (15° = 1 घंटा, 1° = 4 मिनट), भारतीय मानक समय (82.5° पू. मिर्जापुर), तथा 7 महाद्वीप व 5 महासागर।",
    competitionEdge: "One of the most frequently asked sections in CTET Paper 2 (Social Studies), BPSC TRE 4.0 Middle (SST 6-8), BPSC Civil Services Prelims, SSC CGL, and CDS. Directly tests time zone difference between Greenwich and IST (5 hrs 30 mins) and latitude heat zones.",
    competitionEdgeHi: "CTET पेपर 2 (सामाजिक अध्ययन), BPSC TRE शिक्षक भर्ती (कक्षा 6-8 सामाजिक विज्ञान) और BPSC सिविल सेवा में सर्वाधिक पूछा जाने वाला अध्याय। ग्रीनविच और भारतीय मानक समय (IST) में 5 घंटे 30 मिनट का अंतर, 1° देशांतर = 4 मिनट, और ताप कटिबंधों पर बार-बार प्रश्न आते हैं।",
    sections: [
      {
        heading: "1. The Shape of Earth & Parallels of Latitude",
        headingHi: "1. पृथ्वी का आकार एवं अक्षांश रेखाएँ",
        contentHtml: `
          <p><strong>Geoid (भू-आभ):</strong> Earth is not a perfect sphere; it is slightly flattened at the North and South Poles and bulges at the Equator.</p>
          <div class="note-formula-box">
            <h4>🌐 Important Parallels of Latitude:</h4>
            <ul>
              <li><strong>Equator (विषुवत वृत्त):</strong> 0&deg; latitude. Divides Earth into Northern and Southern Hemispheres.</li>
              <li><strong>Tropic of Cancer (कर्क रेखा):</strong> 23&frac12;&deg; N (Passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram).</li>
              <li><strong>Tropic of Capricorn (मकर रेखा):</strong> 23&frac12;&deg; S.</li>
              <li><strong>Arctic Circle (उत्तर ध्रुव वृत्त):</strong> 66&frac12;&deg; N.</li>
              <li><strong>Antarctic Circle (दक्षिण ध्रुव वृत्त):</strong> 66&frac12;&deg; S.</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>☀️ Earth's Three Heat Zones (ताप कटिबंध):</h4>
            <ul>
              <li><strong>Torrid Zone (उष्ण कटिबंध):</strong> Between Tropic of Cancer (23.5&deg; N) and Tropic of Capricorn (23.5&deg; S). Receives maximum vertical sunlight; hottest zone.</li>
              <li><strong>Temperate Zones (शीतोष्ण कटिबंध):</strong> Between Tropics and Polar Circles (23.5&deg; to 66.5&deg; in both hemispheres). Sun rays are slanting; moderate temperature.</li>
              <li><strong>Frigid Zones (शीत कटिबंध):</strong> Beyond Arctic and Antarctic Circles (66.5&deg; to 90&deg; Poles). Sun never rises high; extreme cold.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>भू-आभ (Geoid):</strong> पृथ्वी पूरी तरह गोल नहीं है; यह उत्तरी और दक्षिणी ध्रुवों पर थोड़ी चपटी और बीच में (विषुवत वृत्त पर) थोड़ी उभरी हुई है।</p>
          <div class="note-formula-box">
            <h4>🌐 महत्वपूर्ण अक्षांश रेखाएँ:</h4>
            <ul>
              <li><strong>विषुवत वृत्त (Equator):</strong> 0&deg; अक्षांश। पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में बाँटता है।</li>
              <li><strong>कर्क रेखा (Tropic of Cancer):</strong> 23&frac12;&deg; उत्तरी अक्षांश (भारत के 8 राज्यों से गुजरती है: गुजरात, राजस्थान, म.प्र., छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा, मिजोरम)।</li>
              <li><strong>मकर रेखा (Tropic of Capricorn):</strong> 23&frac12;&deg; दक्षिणी अक्षांश।</li>
              <li><strong>उत्तर ध्रुव वृत्त (Arctic Circle):</strong> 66&frac12;&deg; उत्तर।</li>
              <li><strong>दक्षिण ध्रुव वृत्त (Antarctic Circle):</strong> 66&frac12;&deg; दक्षिण।</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#fefce8; border-color:#eab308;">
            <h4>☀️ पृथ्वी के तीन ताप कटिबंध:</h4>
            <ul>
              <li><strong>उष्ण कटिबंध (Torrid Zone):</strong> कर्क व मकर रेखा के बीच (23.5&deg; उ से 23.5&deg; द)। सूर्य वर्ष में कम से कम एक बार ठीक सिर के ऊपर चमकता है; सर्वाधिक गर्मी।</li>
              <li><strong>शीतोष्ण कटिबंध (Temperate Zone):</strong> कर्क वृत्त से आर्कटिक वृत्त तथा मकर वृत्त से अंटार्कटिक वृत्त तक। सूर्य की किरणें तिरछी पड़ती हैं; मध्यम तापमान।</li>
              <li><strong>शीत कटिबंध (Frigid Zone):</strong> 66.5&deg; से ध्रुवों तक। अत्यधिक ठंड; सूर्य क्षितिज से अधिक ऊपर नहीं आ पाता।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Longitudes, Local Time & Indian Standard Time (IST)",
        headingHi: "2. देशांतर, स्थानीय समय एवं भारतीय मानक समय (IST)",
        contentHtml: `
          <p><strong>Meridians of Longitude (देशांतर याम्योत्तर):</strong> Semicircles running from North Pole to South Pole, all of equal length.</p>
          <div class="note-formula-box">
            <h4>⚡ Time Calculation Rules:</h4>
            <ul>
              <li>Earth rotates <strong>360&deg; in 24 hours</strong>.</li>
              <li>Speed of rotation: 360&deg; / 24 = <strong>15&deg; per hour</strong>.</li>
              <li>Time for 1&deg; longitude: 60 minutes / 15 = <strong>4 minutes</strong>!</li>
              <li><strong>East is Ahead, West is Behind:</strong> As you go East of Greenwich, add 4 minutes per degree; going West, subtract 4 minutes per degree.</li>
              <li><strong>Prime Meridian:</strong> 0&deg; longitude passing through the Royal Observatory at Greenwich, London.</li>
              <li><strong>International Date Line:</strong> Approximately along 180&deg; meridian (zig-zag to avoid dividing island nations).</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>🇮🇳 Indian Standard Time (IST):</h4>
            <p>India's Standard Meridian is <strong>82&deg;30' E (82.5&deg; E)</strong> passing through Mirzapur (near Prayagraj, UP).</p>
            <p><strong>Time Difference from GMT:</strong> 82.5 &times; 4 minutes = 330 minutes = <strong>+5 hours 30 minutes ahead of Greenwich Mean Time (GMT)</strong>!</p>
          </div>
        `,
        contentHtmlHi: `
          <p><strong>देशांतर याम्योत्तर (Longitudes):</strong> उत्तरी ध्रुव से दक्षिणी ध्रुव को मिलाने वाले अर्धवृत्त, जिनकी लंबाई एकसमान होती है।</p>
          <div class="note-formula-box">
            <h4>⚡ समय गणना के अचूक नियम:</h4>
            <ul>
              <li>पृथ्वी <strong>24 घंटे में 360&deg;</strong> घूमती है।</li>
              <li>घूर्णन गति: 360&deg; / 24 = <strong>15&deg; प्रति घंटा</strong>।</li>
              <li>1&deg; देशांतर घूमने में समय: 60 मिनट / 15 = <strong>4 मिनट</strong>!</li>
              <li><strong>पूर्व का समय आगे, पश्चिम का पीछे:</strong> ग्रीनविच से पूर्व जाने पर प्रति डिग्री 4 मिनट जुड़ता है; पश्चिम जाने पर घटता है।</li>
              <li><strong>प्रधान याम्योत्तर (Prime Meridian):</strong> 0&deg; देशांतर जो ग्रीनविच (लंदन) से गुजरती है।</li>
              <li><strong>अंतर्राष्ट्रीय तिथि रेखा:</strong> लगभग 180&deg; याम्योत्तर के अनुदिश (देशों के समय विभाजन से बचने के लिए टेढ़ी-मेढ़ी)।</li>
            </ul>
          </div>
          <div class="note-formula-box" style="background:#f0fdf4; border-color:#22c55e;">
            <h4>🇮🇳 भारतीय मानक समय (IST):</h4>
            <p>भारत का मानक याम्योत्तर <strong>82&deg;30' पूर्वी देशांतर (82.5&deg; E)</strong> है, जो मिर्जापुर (प्रयागराज के समीप, उत्तर प्रदेश) से गुजरती है।</p>
            <p><strong>ग्रीनविच से समय अंतर:</strong> 82.5 &times; 4 मिनट = 330 मिनट = <strong>ग्रीनविच (GMT) से 5 घंटे 30 मिनट आगे (+5:30)</strong>!</p>
          </div>
        `
      },
      {
        heading: "3. The 7 Continents and 5 Oceans of Planet Earth",
        headingHi: "3. पृथ्वी के 7 महाद्वीप एवं 5 महासागर",
        contentHtml: `
          <table style="width:100%; border-collapse:collapse; margin:8px 0; font-size:0.86rem; text-align:left;">
            <tr style="background:#eef2ff;">
              <th style="border:1px solid #cbd5e1; padding:6px;">Continent</th>
              <th style="border:1px solid #cbd5e1; padding:6px;">Key Features</th>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Asia (एशिया)</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Largest continent (1/3 of total land area). Separated from Europe by Ural Mountains. Tropic of Cancer passes through it.</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Africa (अफ्रीका)</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Second largest. <em>ONLY continent through which Equator, Tropic of Cancer, and Tropic of Capricorn ALL pass!</em> Home to Nile and Sahara.</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>North America</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Third largest. Linked to South America by Isthmus of Panama.</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>South America</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Home to Andes (longest mountain range) and Amazon (largest river).</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Antarctica</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Huge frozen continent around South Pole. Indian research stations: <em>Maitri, Bharati, Dakshin Gangotri</em>.</td>
            </tr>
            <tr>
              <td style="border:1px solid #cbd5e1; padding:6px;"><strong>Europe &amp; Australia</strong></td>
              <td style="border:1px solid #cbd5e1; padding:6px;">Australia is the smallest continent, completely in Southern Hemisphere (Island Continent).</td>
            </tr>
          </table>
          <p><strong>Oceans:</strong> Pacific (largest, deepest with Mariana Trench), Atlantic ('S' shaped, busiest commercial ocean), Indian (only ocean named after a country), Southern, Arctic (smallest, surrounding North Pole).</p>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🌍 महाद्वीपों की प्रमुख विशेषताएँ:</h4>
            <ul>
              <li><strong>एशिया:</strong> सबसे बड़ा महाद्वीप (पृथ्वी के 1/3 भूभाग पर)। यूराल पर्वत इसे यूरोप से अलग करता है।</li>
              <li><strong>अफ्रीका:</strong> दूसरा सबसे बड़ा महाद्वीप। <em>एकमात्र ऐसा महाद्वीप जिससे कर्क रेखा, मकर रेखा और विषुवत वृत्त तीनों गुजरते हैं!</em> विश्व की सबसे लंबी नदी नील और सबसे बड़ा मरुस्थल सहारा यहीं स्थित है।</li>
              <li><strong>उत्तरी अमेरिका:</strong> तीसरा सबसे बड़ा। पनामा जलडमरूमध्य द्वारा दक्षिण अमेरिका से जुड़ा है।</li>
              <li><strong>दक्षिण अमेरिका:</strong> विश्व की सबसे लंबी पर्वत श्रृंखला एंडीज और सबसे बड़ी नदी अमेजन यहाँ स्थित है।</li>
              <li><strong>अंटार्कटिका:</strong> दक्षिणी ध्रुव पर स्थित हिमाच्छादित महाद्वीप। भारत के शोध केंद्र: <em>मैत्री, भारती, दक्षिण गंगोत्री</em>।</li>
              <li><strong>ऑस्ट्रेलिया:</strong> सबसे छोटा महाद्वीप, पूरी तरह दक्षिणी गोलार्ध में (द्वीपीय महाद्वीप)।</li>
            </ul>
          </div>
          <p><strong>5 महासागर:</strong> प्रशांत महासागर (सबसे बड़ा व गहरा, मेरियाना गर्त 11,022 मी), अटलांटिक ('S' आकार, सबसे व्यस्त व्यापारिक महासागर), हिंद महासागर (एकमात्र महासागर जिसका नाम किसी देश पर है), दक्षिणी महासागर, आर्कटिक महासागर (सबसे छोटा)।</p>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the standard meridian of India upon which Indian Standard Time (IST) is based?",
        qHi: "भारतीय मानक समय (IST) किस मानक याम्योत्तर देशांतर पर आधारित है?",
        options: ["80°30' E", "82°30' E (82.5° E)", "85°00' E", "90°15' E"],
        optionsHi: ["80°30' पूर्वी", "82°30' पूर्वी (82.5° E)", "85°00' पूर्वी", "90°15' पूर्वी"],
        ans: 1,
        pyqRef: "CTET Paper 2 (Social Studies) & BPSC Civil Services Prelims",
        explanation: "IST is based on 82°30' E longitude passing through Mirzapur near Prayagraj (UP).",
        explanationHi: "भारतीय मानक समय 82°30' पूर्वी देशांतर पर आधारित है, जो मिर्जापुर (प्रयागराज के पास, उप्र) से गुजरती है।"
      },
      {
        id: 2,
        q: "How much time is Indian Standard Time (IST) ahead of Greenwich Mean Time (GMT)?",
        qHi: "भारतीय मानक समय (IST) ग्रीनविच माध्य समय (GMT) से कितने समय आगे है?",
        options: ["4 hours 30 minutes", "5 hours 00 minutes", "5 hours 30 minutes", "6 hours 00 minutes"],
        optionsHi: ["4 घंटे 30 मिनट", "5 घंटे 00 मिनट", "5 घंटे 30 मिनट (+5:30)", "6 घंटे 00 मिनट"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School SST",
        explanation: "82.5 degrees * 4 minutes = 330 minutes = 5 hours 30 minutes ahead of GMT.",
        explanationHi: "82.5 डिग्री * 4 मिनट = 330 मिनट = ग्रीनविच से 5 घंटे 30 मिनट आगे।"
      },
      {
        id: 3,
        q: "How many minutes does Earth take to rotate through 1 degree of longitude?",
        qHi: "पृथ्वी को 1 डिग्री देशांतर घूमने में कुल कितना समय लगता है?",
        options: ["1 minute", "4 minutes", "15 minutes", "60 minutes"],
        optionsHi: ["1 मिनट", "4 मिनट", "15 मिनट", "60 मिनट"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CGL",
        explanation: "Earth rotates 360° in 1440 minutes (24 hours). 1440 / 360 = 4 minutes per degree.",
        explanationHi: "पृथ्वी 24 घंटे (1440 मिनट) में 360° घूमती है। 1440 / 360 = 4 मिनट प्रति डिग्री।"
      },
      {
        id: 4,
        q: "If it is 12:00 noon at Greenwich (0° longitude), what is the local time at 60° East longitude?",
        qHi: "यदि ग्रीनविच (0° देशांतर) पर दोपहर के 12:00 बजे हैं, तो 60° पूर्वी देशांतर पर स्थानीय समय क्या होगा?",
        options: ["8:00 AM", "4:00 PM", "6:00 PM", "2:00 PM"],
        optionsHi: ["प्रातः 8:00 बजे", "अपराह्न 4:00 बजे (4:00 PM)", "सायं 6:00 बजे", "दोपहर 2:00 बजे"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "60° East = 60 * 4 = 240 minutes = 4 hours ahead. 12:00 noon + 4 hours = 4:00 PM.",
        explanationHi: "60° पूर्व = 60 * 4 = 240 मिनट = 4 घंटे आगे। 12:00 + 4 घंटे = अपराह्न 4:00 बजे (4:00 PM)।"
      },
      {
        id: 5,
        q: "Which is the ONLY continent through which the Equator, the Tropic of Cancer, and the Tropic of Capricorn all pass?",
        qHi: "विश्व का एकमात्र ऐसा महाद्वीप कौन-सा है जिससे विषुवत वृत्त, कर्क रेखा और मकर रेखा तीनों गुजरती हैं?",
        options: ["Asia", "Africa", "South America", "Australia"],
        optionsHi: ["एशिया", "अफ्रीका (Africa)", "दक्षिण अमेरिका", "ऑस्ट्रेलिया"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC Prelims & UPSC CDS",
        explanation: "Africa is the only continent traversed by all three major latitude lines: Equator, Tropic of Cancer, and Tropic of Capricorn.",
        explanationHi: "अफ्रीका एकमात्र ऐसा महाद्वीप है जिससे कर्क रेखा, मकर रेखा और विषुवत वृत्त तीनों गुजरते हैं।"
      },
      {
        id: 6,
        q: "What is the true shape of the Earth called?",
        qHi: "पृथ्वी के वास्तविक आकार को क्या कहा जाता है?",
        options: ["Perfect Sphere", "Geoid (भू-आभ)", "Flat disc", "Oval"],
        optionsHi: ["पूर्ण गोला", "भू-आभ (Geoid)", "चपटी तश्तरी", "अंडाकार"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "Earth is slightly flattened at the poles and bulges at the equator, a shape called 'Geoid' (Earth-like).",
        explanationHi: "ध्रुवों पर थोड़ी चपटी और भूमध्य रेखा पर उभरी हुई आकृति को 'भू-आभ' (Geoid) कहा जाता है।"
      },
      {
        id: 7,
        q: "Which zone of the Earth receives the maximum amount of solar heat?",
        qHi: "पृथ्वी का कौन-सा ताप कटिबंध सूर्य की सर्वाधिक ऊष्मा प्राप्त करता है?",
        options: ["Torrid Zone (उष्ण कटिबंध)", "North Temperate Zone", "South Temperate Zone", "Frigid Zone"],
        optionsHi: ["उष्ण कटिबंध (Torrid Zone)", "उत्तरी शीतोष्ण कटिबंध", "दक्षिणी शीतोष्ण कटिबंध", "शीत कटिबंध"],
        ans: 0,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "The Torrid Zone (between 23.5° N and 23.5° S) receives direct overhead rays of the sun, absorbing maximum heat.",
        explanationHi: "उष्ण कटिबंध (कर्क व मकर रेखा के बीच) पर सूर्य की सीधी किरणें पड़ती हैं, अतः यह सर्वाधिक ऊष्मा प्राप्त करता है।"
      },
      {
        id: 8,
        q: "What is the latitude of the Tropic of Cancer?",
        qHi: "कर्क रेखा का अक्षांश मान क्या है?",
        options: ["23.5° S", "23.5° N (23°30' N)", "66.5° N", "0°"],
        optionsHi: ["23.5° दक्षिणी", "23.5° उत्तरी (23°30' N)", "66.5° उत्तरी", "0°"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Tropic of Cancer is 23°30' N (23.5° North).",
        explanationHi: "कर्क रेखा 23°30' उत्तरी (23.5° N) अक्षांश पर स्थित है।"
      },
      {
        id: 9,
        q: "Through how many Indian states does the Tropic of Cancer pass?",
        qHi: "कर्क रेखा भारत के कुल कितने राज्यों से होकर गुजरती है?",
        options: ["6 states", "7 states", "8 states", "9 states"],
        optionsHi: ["6 राज्य", "7 राज्य", "8 राज्य", "9 राज्य"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & Bihar Police SI",
        explanation: "8 states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.",
        explanationHi: "8 राज्य: गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा, मिजोरम।"
      },
      {
        id: 10,
        q: "Which mountain range separates Europe from Asia?",
        qHi: "कौन-सी पर्वत श्रृंखला यूरोप को एशिया से अलग करती है?",
        options: ["Himalayas", "Andes", "Ural Mountains (यूराल पर्वत)", "Alps"],
        optionsHi: ["हिमालय", "एंडीज", "यूराल पर्वत (Ural Mountains)", "आल्प्स"],
        ans: 2,
        pyqRef: "CTET Paper 2 & SSC CGL",
        explanation: "The Ural Mountains and Ural River form the physical boundary separating Europe from Asia.",
        explanationHi: "यूराल पर्वतमाला यूरोप और एशिया महाद्वीप को अलग करती है।"
      },
      {
        id: 11,
        q: "Which narrow strip of land joins North America to South America?",
        qHi: "उत्तरी अमेरिका को दक्षिण अमेरिका से जोड़ने वाला संकरा स्थल भाग कौन-सा है?",
        options: ["Isthmus of Suez", "Isthmus of Panama (पनामा स्थलसंधि)", "Strait of Gibraltar", "Bering Strait"],
        optionsHi: ["स्वेज स्थलसंधि", "पनामा स्थलसंधि (Isthmus of Panama)", "जिब्राल्टर जलसंधि", "बेरिंग जलसंधि"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "The Isthmus of Panama connects North and South America.",
        explanationHi: "पनामा स्थलसंधि (Isthmus of Panama) उत्तरी अमेरिका को दक्षिण अमेरिका से जोड़ती है।"
      },
      {
        id: 12,
        q: "What is the deepest trench on Earth, located in the Pacific Ocean?",
        qHi: "प्रशांत महासागर में स्थित पृथ्वी का सबसे गहरा गर्त (खाई) कौन-सा है?",
        options: ["Java Trench", "Mariana Trench (मेरियाना गर्त)", "Puerto Rico Trench", "Sunda Trench"],
        optionsHi: ["जावा गर्त", "मेरियाना गर्त (Mariana Trench)", "प्यूर्टो रिको गर्त", "सुंडा गर्त"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Railway NTPC",
        explanation: "Mariana Trench (Challenger Deep) in the Pacific Ocean has a depth of about 11,022 meters.",
        explanationHi: "प्रशांत महासागर में स्थित मेरियाना गर्त लगभग 11,022 मीटर गहरा है।"
      },
      {
        id: 13,
        q: "Which is the ONLY ocean named after a specific country?",
        qHi: "विश्व का एकमात्र ऐसा महासागर कौन-सा है जिसका नाम किसी देश के नाम पर रखा गया है?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean (हिंद महासागर)", "Arctic Ocean"],
        optionsHi: ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर (Indian Ocean)", "आर्कटिक महासागर"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "The Indian Ocean is named after India (Bharat/Hindustan).",
        explanationHi: "हिंद महासागर का नाम भारत देश (हिंदुस्तान) के नाम पर रखा गया है।"
      },
      {
        id: 14,
        q: "What is the 'S' shaped ocean, known as the busiest commercial ocean in the world?",
        qHi: "'S' आकार का वह महासागर कौन-सा है जो विश्व का सबसे व्यस्त व्यापारिक महासागर माना जाता है?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        optionsHi: ["प्रशांत महासागर", "अटलांटिक महासागर (Atlantic)", "हिंद महासागर", "आर्कटिक महासागर"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "The Atlantic Ocean has an 'S' shape flanked by America on west and Europe/Africa on east, carrying heaviest shipping traffic.",
        explanationHi: "अटलांटिक महासागर 'S' आकार का है और विश्व का सबसे व्यस्त व्यापारिक जलमार्ग है।"
      },
      {
        id: 15,
        q: "What are India's permanent scientific research stations located in Antarctica called?",
        qHi: "अंटार्कटिका में स्थित भारत के स्थायी वैज्ञानिक शोध केंद्रों के क्या नाम हैं?",
        options: ["Aryabhata and Rohini", "Maitri and Bharati (and Dakshin Gangotri)", "Vikram and Pragyan", "Saryu and Yamuna"],
        optionsHi: ["आर्यभट्ट व रोहिणी", "मैत्री, भारती एवं दक्षिण गंगोत्री", "विक्रम व प्रज्ञान", "सरयू व यमुना"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC Civil Services & SSC",
        explanation: "India's Antarctic stations are Dakshin Gangotri, Maitri, and Bharati.",
        explanationHi: "अंटार्कटिका में भारत के शोध केंद्र दक्षिण गंगोत्री, मैत्री और भारती हैं।"
      },
      {
        id: 16,
        q: "Which is the smallest continent in the world, completely situated in the Southern Hemisphere?",
        qHi: "विश्व का सबसे छोटा महाद्वीप कौन-सा है जो पूरी तरह से दक्षिणी गोलार्ध में स्थित है?",
        options: ["Europe", "Antarctica", "Australia (द्वीपीय महाद्वीप)", "South America"],
        optionsHi: ["यूरोप", "अंटार्कटिका", "ऑस्ट्रेलिया (Australia)", "दक्षिण अमेरिका"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Australia is the smallest continent, surrounded on all sides by oceans and seas (Island Continent).",
        explanationHi: "ऑस्ट्रेलिया सबसे छोटा महाद्वीप है, जो चारों ओर से समुद्र से घिरा है (द्वीपीय महाद्वीप)।"
      },
      {
        id: 17,
        q: "What is the approximate time difference between Dwarka in Gujarat (western India) and Dibrugarh in Assam (eastern India)?",
        qHi: "गुजरात के द्वारका (पश्चिमी छोर) और असम के डिब्रूगढ़ (पूर्वी छोर) के स्थानीय समय में लगभग कितना अंतर है?",
        options: ["45 minutes", "1 hour", "1 hour 45 minutes (approx 2 hours)", "3 hours"],
        optionsHi: ["45 मिनट", "1 घंटा", "1 घंटा 45 मिनट (लगभग 2 घंटे)", "3 घंटे"],
        ans: 2,
        pyqRef: "NCERT Class 6 Chapter 2 Geography & CTET Paper 2",
        explanation: "Longitudinal difference is about 30 degrees (68° E to 97° E). 30 * 4 = 120 minutes = approx 1 hr 45 min to 2 hrs.",
        explanationHi: "देशांतरीय विस्तार लगभग 30° है (68° E से 97° E)। 30 * 4 = 120 मिनट = लगभग 1 घंटा 45 मिनट।"
      },
      {
        id: 18,
        q: "What is the value of the Prime Meridian (Greenwich meridian)?",
        qHi: "प्रधान मध्याह्न रेखा (Prime Meridian) का मान क्या है?",
        options: ["0° longitude", "90° longitude", "180° longitude", "23.5° longitude"],
        optionsHi: ["0° देशांतर", "90° देशांतर", "180° देशांतर", "23.5° देशांतर"],
        ans: 0,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "The Prime Meridian is designated as 0° longitude.",
        explanationHi: "प्रधान याम्योत्तर (मध्याह्न रेखा) 0° देशांतर होती है।"
      },
      {
        id: 19,
        q: "What is the line of longitude directly opposite to the Prime Meridian that serves as the International Date Line?",
        qHi: "प्रधान याम्योत्तर के ठीक विपरीत स्थित देशांतर रेखा कौन-सी है जो अंतर्राष्ट्रीय तिथि रेखा का कार्य करती है?",
        options: ["90° W", "180° longitude", "360°", "45° E"],
        optionsHi: ["90° पश्चिम", "180° देशांतर रेखा", "360°", "45° पूर्व"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CGL",
        explanation: "180° East and 180° West is the exact same line, forming the International Date Line.",
        explanationHi: "180° देशांतर रेखा अंतर्राष्ट्रीय तिथि रेखा (International Date Line) के रूप में कार्य करती है।"
      },
      {
        id: 20,
        q: "What is a narrow passage of water connecting two large water bodies (like seas or oceans) called?",
        qHi: "दो बड़े जलाशयों (जैसे समुद्रों या महासागरों) को जोड़ने वाले जल के संकरे मार्ग को क्या कहते हैं?",
        options: ["Isthmus (स्थलसंधि)", "Strait (जलसंधि / जलडमरूमध्य)", "Peninsula", "Gulf"],
        optionsHi: ["स्थलसंधि", "जलसंधि / जलडमरूमध्य (Strait)", "प्रायद्वीप", "खाड़ी"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle School",
        explanation: "A Strait connects two large bodies of water (e.g. Palk Strait between India and Sri Lanka).",
        explanationHi: "जलसंधि (जलडमरूमध्य) दो बड़े जल निकायों को जोड़ती है (जैसे भारत और श्रीलंका के बीच पाक जलसंधि)।"
      },
      {
        id: 21,
        q: "Which strait separates India from Sri Lanka?",
        qHi: "भारत को श्रीलंका से अलग करने वाली जलसंधि कौन-सी है?",
        options: ["Malacca Strait", "Palk Strait (पाक जलसंधि)", "Gibraltar Strait", "Bering Strait"],
        optionsHi: ["मलक्का जलसंधि", "पाक जलसंधि (Palk Strait)", "जिब्राल्टर जलसंधि", "बेरिंग जलसंधि"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC Civil Services",
        explanation: "Palk Strait and Gulf of Mannar lie between Tamil Nadu (India) and Sri Lanka.",
        explanationHi: "पाक जलसंधि (Palk Strait) भारत और श्रीलंका के मध्य स्थित है।"
      },
      {
        id: 22,
        q: "What is a piece of land surrounded by water on three sides called?",
        qHi: "तीन ओर से जल से घिरे स्थल भाग को क्या कहा जाता है?",
        options: ["Island (द्वीप)", "Peninsula (प्रायद्वीप)", "Isthmus", "Lagoon"],
        optionsHi: ["द्वीप (Island)", "प्रायद्वीप (Peninsula)", "स्थलसंधि", "लैगून"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "A peninsula is surrounded by water on three sides (e.g. the Indian Peninsula).",
        explanationHi: "तीन ओर से पानी से घिरे भूभाग को प्रायद्वीप (Peninsula) कहते हैं (उदा. भारतीय प्रायद्वीप)।"
      },
      {
        id: 23,
        q: "Which is the largest continent on Earth by both land area and population?",
        qHi: "क्षेत्रफल और जनसंख्या दोनों की दृष्टि से पृथ्वी का सबसे बड़ा महाद्वीप कौन-सा है?",
        options: ["Africa", "Asia (एशिया)", "North America", "Europe"],
        optionsHi: ["अफ्रीका", "एशिया (Asia)", "उत्तरी अमेरिका", "यूरोप"],
        ans: 1,
        pyqRef: "CTET Paper 1",
        explanation: "Asia covers about one-third of the total land area of Earth and hosts about 60% of world population.",
        explanationHi: "एशिया महाद्वीप पृथ्वी के लगभग एक-तिहाई भूभाग पर फैला है और सबसे बड़ा है।"
      },
      {
        id: 24,
        q: "What is the longest river in the world, flowing through the continent of Africa?",
        qHi: "अफ्रीका महाद्वीप से होकर बहने वाली विश्व की सबसे लंबी नदी कौन-सी है?",
        options: ["Amazon River", "Nile River (नील नदी)", "Ganga River", "Yangtze River"],
        optionsHi: ["अमेजन नदी", "नील नदी (Nile)", "गंगा नदी", "यांग्त्से नदी"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CHSL",
        explanation: "The Nile River in Africa is the longest river in the world (about 6,650 km).",
        explanationHi: "अफ्रीका की नील नदी विश्व की सबसे लंबी नदी है (लगभग 6,650 किमी)।"
      },
      {
        id: 25,
        q: "What is the world's largest river by water volume, flowing through South America?",
        qHi: "जल के बहाव व आयतन की दृष्टि से विश्व की सबसे बड़ी नदी कौन-सी है जो दक्षिण अमेरिका में बहती है?",
        options: ["Nile", "Amazon (अमेजन नदी)", "Mississippi", "Congo"],
        optionsHi: ["नील नदी", "अमेजन नदी (Amazon)", "मिसिसिपी", "कांगो नदी"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE Middle",
        explanation: "The Amazon River in South America is the largest river by water discharge and drainage basin.",
        explanationHi: "दक्षिण अमेरिका की अमेजन नदी जल प्रवाह की दृष्टि से विश्व की सबसे बड़ी नदी है।"
      },
      {
        id: 26,
        q: "Which latitude circle represents 66.5° South?",
        qHi: "66.5° दक्षिणी अक्षांश रेखा किस वृत्त को दर्शाती है?",
        options: ["Arctic Circle", "Antarctic Circle (दक्षिण ध्रुव वृत्त)", "Tropic of Capricorn", "Equator"],
        optionsHi: ["उत्तर ध्रुव वृत्त", "दक्षिण ध्रुव वृत्त (Antarctic Circle)", "मकर रेखा", "विषुवत वृत्त"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "The Antarctic Circle lies at 66°30' S (66.5° South).",
        explanationHi: "दक्षिण ध्रुव वृत्त (Antarctic Circle) 66.5° दक्षिणी अक्षांश पर स्थित है।"
      },
      {
        id: 27,
        q: "In which hemisphere does the continent of Antarctica lie entirely?",
        qHi: "अंटार्कटिका महाद्वीप पूर्णतः किस गोलार्ध में स्थित है?",
        options: ["Northern Hemisphere", "Southern Hemisphere (दक्षिणी गोलार्ध)", "Eastern only", "Western only"],
        optionsHi: ["उत्तरी गोलार्ध", "दक्षिणी गोलार्ध (Southern Hemisphere)", "केवल पूर्वी", "केवल पश्चिमी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "Antarctica surrounds the South Pole and lies completely within the Southern Frigid Zone.",
        explanationHi: "अंटार्कटिका पूरी तरह से दक्षिणी गोलार्ध के शीत कटिबंध में स्थित है।"
      },
      {
        id: 28,
        q: "What happens when a traveler crosses the International Date Line heading EAST towards the Americas?",
        qHi: "जब कोई यात्री 180° अंतर्राष्ट्रीय तिथि रेखा को पार करके पूर्व दिशा (अमेरिका की ओर) जाता है, तो क्या होता है?",
        options: ["Gains a day (repeats the date)", "Loses a day (advances by one day)", "Time remains unchanged", "Hour changes by 12 only"],
        optionsHi: ["एक दिन का लाभ होता है (वही तिथि दोहराई जाती है)", "एक दिन का नुकसान होता है (तिथि एक दिन आगे बढ़ जाती है)", "कोई परिवर्तन नहीं होता", "केवल 12 घंटे बदलते हैं"],
        ans: 0,
        pyqRef: "BPSC Civil Services & CDS",
        explanation: "Crossing eastward into the Western Hemisphere means repeating/gaining a calendar day.",
        explanationHi: "पश्चिम से पूर्व की ओर अंतर्राष्ट्रीय तिथि रेखा पार करने पर 1 दिन का लाभ होता है (तिथि 1 दिन पीछे होती है)।"
      },
      {
        id: 29,
        q: "Which state of India is the FIRST to witness sunrise every morning?",
        qHi: "भारत के किस राज्य में प्रतिदिन प्रातः सूर्य की पहली किरण सबसे पहले पड़ती है?",
        options: ["Assam", "Arunachal Pradesh (डोंग घाटी)", "Manipur", "Sikkim"],
        optionsHi: ["असम", "अरुणाचल प्रदेश (Arunachal Pradesh)", "मणिपुर", "सिक्किम"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Arunachal Pradesh ('Land of the Dawn-lit Mountains') is India's easternmost state (Dong Valley).",
        explanationHi: "अरुणाचल प्रदेश भारत का सबसे पूर्वी राज्य है जहाँ सूर्योदय सबसे पहले होता है (डोंग गाँव)।"
      },
      {
        id: 30,
        q: "The Frigid Zone remains extremely cold throughout the year because:",
        qHi: "शीत कटिबंध (Frigid Zone) पूरे वर्ष अत्यधिक ठंडा क्यों रहता है?",
        options: ["Sun never rises above the horizon and rays are extremely slanting", "It is covered with volcanic ash", "Atmosphere is absent there", "It has no clouds"],
        optionsHi: ["सूर्य कभी क्षितिज से अधिक ऊपर नहीं आता और किरणें अत्यधिक तिरछी पड़ती हैं", "यह ज्वालामुखी राख से ढका है", "वहाँ वायुमंडल नहीं है", "वहाँ बादल नहीं होते"],
        ans: 0,
        pyqRef: "CTET Paper 2 Social Studies",
        explanation: "In polar regions, sun rays hit at an extreme acute angle and spread over vast area, delivering minimal solar energy.",
        explanationHi: "ध्रुवों के समीप सूर्य की किरणें अत्यधिक तिरछी पड़ती हैं, जिससे बहुत कम ऊष्मा पहुँचती है।"
      }
    ]
  },

  // ==========================================
  // CHAPTER 13: Hindi (Malhar & Grammar)
  // ==========================================
  {
    id: "ncert-c6-hin01",
    classLevel: "Class 6",
    subject: "Hindi (Malhar & Vyakaran)",
    subjectCode: "HINDI",
    chapterNo: 1,
    bookName: "Malhar (Hindi - NEP 2020 Edition)",
    title: "Hindi Chapter 1: भाषा, लिपि, वर्तनी एवं व्यावहारिक व्याकरण",
    titleHi: "हिन्दी अध्याय 1: भाषा, लिपि, वर्ण-विचार एवं व्यावहारिक व्याकरण",
    readingTime: "24 mins read",
    badge: "Language & Grammar Foundation",
    desc: "Master Hindi language foundation: forms of language (oral, written, symbolic), scripts (Devanagari, Brahmi, Gurmukhi), 22 official languages in the 8th Schedule, Varn-Vichar (swar: hrasva, deergh, pluta; vyanjan: sparsh, antastha, ooshma, sanyukt), Sandhi basics (Deergh, Gun, Vriddhi), Sangya, Sarvanam, Visheshan, and common Idioms & Proverbs.",
    descHi: "हिन्दी व्याकरण का आधार: भाषा के रूप (मौखिक, लिखित, सांकेतिक), लिपियाँ (देवनागरी, ब्राह्मी, गुरुमुखी), 8वीं अनुसूची की 22 भाषाएँ, वर्ण-विचार (स्वर: ह्रस्व, दीर्घ, प्लुत; व्यंजन: स्पर्श, अंतःस्थ, ऊष्म, संयुक्त), स्वर संधि परिचय (दीर्घ, गुण, वृद्धि), संज्ञा, सर्वनाम, विशेषण तथा महत्वपूर्ण मुहावरे व लोकोक्तियाँ।",
    competitionEdge: "Mandatory qualifying and scoring paper for CTET Paper 1 & 2 (Hindi Language 1/2), BPSC TRE 4.0 Language Qualifying Paper (30 marks), Bihar STET, and State Police. Focuses on sandhi-viched, identifying swar/vyanjan types, and accurate Devanagari rules.",
    competitionEdgeHi: "CTET पेपर 1 व 2 (हिन्दी), BPSC शिक्षक भर्ती भाषा अहर्ता पेपर (30 अंक अनिवार्य), बिहार STET और दरोगा भर्ती के लिए अनिवार्य। संधि-विच्छेद, स्वर/व्यंजन के भेद, तत्सम-तद्भव और मुहावरों पर सटीक प्रश्न।",
    sections: [
      {
        heading: "1. भाषा, लिपि एवं भारतीय संविधान की 8वीं अनुसूची",
        headingHi: "1. भाषा, लिपि एवं भारतीय संविधान की 8वीं अनुसूची",
        contentHtml: `
          <div class="note-formula-box">
            <h4>📖 भाषा एवं लिपि के मूल तत्व:</h4>
            <ul>
              <li><strong>भाषा के रूप:</strong>
                <ul>
                  <li><strong>मौखिक भाषा:</strong> बोलकर भाव प्रकट करना (अस्थायी रूप, जैसे बातचीत, भाषण)।</li>
                  <li><strong>लिखित भाषा:</strong> लिखकर विचारों को सुरक्षित रखना (स्थायी रूप, जैसे पुस्तक, पत्र)।</li>
                  <li><strong>सांकेतिक भाषा:</strong> संकेतों द्वारा भाव संप्रेषण।</li>
                </ul>
              </li>
              <li><strong>लिपि (Script):</strong> किसी भी भाषा के लिखने के ढंग या ध्वनि-चिह्नों को लिपि कहते हैं:
                <ul>
                  <li><strong>देवनागरी लिपि:</strong> हिन्दी, संस्कृत, मराठी, नेपाली, कोंकणी, बोडो, मैथिली। (बाएँ से दाएँ लिखी जाती है, अक्षरात्मक लिपि)।</li>
                  <li><strong>गुरुमुखी:</strong> पंजाबी भाषा।</li>
                  <li><strong>रोमन:</strong> अंग्रेजी, फ्रेंच, जर्मन।</li>
                  <li><strong>फारसी:</strong> उर्दू (दाएँ से बाएँ लिखी जाती है)।</li>
                </ul>
              </li>
              <li><strong>संविधान की 8वीं अनुसूची (22 भाषाएँ):</strong> असमिया, बाँग्ला, बोडो, डोगरी, गुजराती, हिन्दी, कन्नड़, कश्मीरी, कोंकणी, मैथिली, मलयालम, मणिपुरी, मराठी, नेपाली, ओड़िआ, पंजाबी, संस्कृत, संथाली, सिंधी, तमिल, तेलुगु, उर्दू।</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>📖 भाषा एवं लिपि के मूल तत्व:</h4>
            <ul>
              <li><strong>भाषा के रूप:</strong>
                <ul>
                  <li><strong>मौखिक भाषा:</strong> बोलकर विचार प्रकट करना (अस्थायी रूप)।</li>
                  <li><strong>लिखित भाषा:</strong> लिखकर विचार संचित रखना (दीर्घकालिक व स्थायी रूप)।</li>
                </ul>
              </li>
              <li><strong>प्रमुख लिपियाँ:</strong>
                <ul>
                  <li><strong>देवनागरी:</strong> हिन्दी, संस्कृत, मराठी, नेपाली, मैथिली (बाएँ से दाएँ)।</li>
                  <li><strong>गुरुमुखी:</strong> पंजाबी।</li>
                  <li><strong>फारसी:</strong> उर्दू (दाएँ से बाएँ)।</li>
                  <li><strong>रोमन:</strong> अंग्रेजी।</li>
                </ul>
              </li>
              <li><strong>8वीं अनुसूची की 22 भाषाएँ:</strong> भारतीय संविधान में 22 भाषाओं को मान्यता प्राप्त है। (मूल संविधान में 14 भाषाएँ थीं)।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. वर्ण-विचार: स्वर, व्यंजन एवं संयुक्त व्यंजन",
        headingHi: "2. वर्ण-विचार: स्वर, व्यंजन एवं संयुक्त व्यंजन",
        contentHtml: `
          <div class="note-formula-box">
            <h4>🔤 वर्णमाला वर्गीकरण (कुल 52 वर्ण):</h4>
            <ul>
              <li><strong>स्वर (11):</strong> अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ।
                <ul>
                  <li><strong>ह्रस्व स्वर (4 - मूल स्वर):</strong> अ, इ, उ, ऋ (उच्चारण में एक मात्रा का समय)।</li>
                  <li><strong>दीर्घ स्वर (7):</strong> आ, ई, ऊ, ए, ऐ, ओ, औ (दो मात्रा का समय)।</li>
                </ul>
              </li>
              <li><strong>अयोगवाह (2):</strong> अनुस्वार (ं) एवं विसर्ग (ः)।</li>
              <li><strong>व्यंजन (33 मूल व्यंजन):</strong>
                <ul>
                  <li><strong>स्पर्श व्यंजन (25):</strong> क-वर्ग, च-वर्ग, ट-वर्ग, त-वर्ग, प-वर्ग (क से म तक)।</li>
                  <li><strong>अंतःस्थ व्यंजन (4):</strong> य, र, ल, व।</li>
                  <li><strong>ऊष्म व्यंजन (4):</strong> श, ष, स, ह।</li>
                </ul>
              </li>
              <li><strong>संयुक्त व्यंजन (4):</strong>
                <ul>
                  <li><strong>क्ष</strong> = क् + ष् + अ</li>
                  <li><strong>त्र</strong> = त् + र् + अ</li>
                  <li><strong>ज्ञ</strong> = ज् + ञ् + अ</li>
                  <li><strong>श्र</strong> = श् + र् + अ</li>
                </ul>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>🔤 वर्णमाला का वैज्ञानिक वर्गीकरण:</h4>
            <ul>
              <li><strong>स्वर (11):</strong>
                <ul>
                  <li>ह्रस्व स्वर (4): अ, इ, उ, ऋ (एक मात्रा)।</li>
                  <li>दीर्घ स्वर (7): आ, ई, ऊ, ए, ऐ, ओ, औ (दो मात्रा)।</li>
                </ul>
              </li>
              <li><strong>व्यंजन भेद:</strong>
                <ul>
                  <li>स्पर्श व्यंजन (25): कण्ठ्य (क-वर्ग), तालव्य (च-वर्ग), मूर्धन्य (ट-वर्ग), दन्त्य (त-वर्ग), ओष्ठ्य (प-वर्ग)।</li>
                  <li>अंतःस्थ व्यंजन (4): य, र, ल, व।</li>
                  <li>ऊष्म व्यंजन (4): श, ष, स, ह।</li>
                  <li>संयुक्त व्यंजन (4): क्ष, त्र, ज्ञ, श्र।</li>
                </ul>
              </li>
            </ul>
          </div>
        `
      },
      {
        heading: "3. स्वर संधि एवं पद परिचय (संज्ञा, सर्वनाम, विशेषण)",
        headingHi: "3. स्वर संधि एवं पद परिचय (संज्ञा, सर्वनाम, विशेषण)",
        contentHtml: `
          <div class="note-formula-box">
            <h4>⚡ स्वर संधि के 5 मुख्य भेद:</h4>
            <ul>
              <li><strong>दीर्घ संधि:</strong> अ/आ + अ/आ = आ (हिम + आलय = हिमालय; विद्या + अर्थी = विद्यार्थी)।</li>
              <li><strong>गुण संधि:</strong> अ/आ + इ/ई = ए (नर + ईश = नरेश); अ/आ + उ/ऊ = ओ (महा + उत्सव = महोत्सव); अ/आ + ऋ = अर् (सप्त + ऋषि = सप्तर्षि)।</li>
              <li><strong>वृद्धि संधि:</strong> अ/आ + ए/ऐ = ऐ (एक + एक = एकैक); अ/आ + ओ/औ = औ (महा + औषधि = महौषधि)।</li>
              <li><strong>यण संधि:</strong> इ/ई + अन्य स्वर = य् (इति + आदि = इत्यादि); उ/ऊ + अन्य स्वर = व् (सु + आगत = स्वागत)।</li>
              <li><strong>अयादि संधि:</strong> ए/ऐ/ओ/औ + स्वर = अय्/आय्/अव्/आव् (ने + अन = नयन; पौ + अक = पावक)।</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="note-formula-box">
            <h4>⚡ स्वर संधि के प्रमुख उदाहरण:</h4>
            <ul>
              <li><strong>दीर्घ:</strong> देव + आलय = देवालय; भानु + उदय = भानूदय।</li>
              <li><strong>गुण:</strong> महा + इंद्र = महेंद्र; सूर्य + उदय = सूर्योदय।</li>
              <li><strong>वृद्धि:</strong> सदा + एव = सदैव; मत + ऐक्य = मतैक्य।</li>
              <li><strong>यण:</strong> यदि + अपि = यद्यपि; अनु + अय = अन्वय।</li>
              <li><strong>अयादि:</strong> पो + अन = पवन; गै + अक = गायक।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "हिन्दी भाषा की लिपि कौन-सी है?",
        qHi: "हिन्दी भाषा की लिपि कौन-सी है?",
        options: ["गुरुमुखी", "देवनागरी", "रोमन", "फारसी"],
        optionsHi: ["गुरुमुखी", "देवनागरी", "रोमन", "फारसी"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Language Paper",
        explanation: "हिन्दी भाषा देवनागरी लिपि में लिखी जाती है, जो बाएँ से दाएँ लिखी जाती है।",
        explanationHi: "हिन्दी भाषा देवनागरी लिपि में लिखी जाती है, जो बाएँ से दाएँ लिखी जाती है।"
      },
      {
        id: 2,
        q: "भारतीय संविधान की 8वीं अनुसूची में कुल कितनी भाषाओं को मान्यता दी गई है?",
        qHi: "भारतीय संविधान की 8वीं अनुसूची में कुल कितनी भाषाओं को मान्यता दी गई है?",
        options: ["18 भाषाएँ", "20 भाषाएँ", "22 भाषाएँ", "24 भाषाएँ"],
        optionsHi: ["18 भाषाएँ", "20 भाषाएँ", "22 भाषाएँ", "24 भाषाएँ"],
        ans: 2,
        pyqRef: "CTET Paper 2 & BPSC Civil Services & Bihar STET",
        explanation: "भारतीय संविधान की 8वीं अनुसूची में वर्तमान में कुल 22 प्रादेशिक भाषाएँ शामिल हैं।",
        explanationHi: "भारतीय संविधान की 8वीं अनुसूची में वर्तमान में कुल 22 प्रादेशिक भाषाएँ शामिल हैं।"
      },
      {
        id: 3,
        q: "हिन्दी वर्णमाला में कुल कितने स्वर होते हैं?",
        qHi: "हिन्दी वर्णमाला में कुल कितने स्वर होते हैं?",
        options: ["9", "11", "13", "14"],
        optionsHi: ["9", "11", "13", "14"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & State TET",
        explanation: "हिन्दी में 11 स्वर माने जाते हैं: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ। (अं और अः अयोगवाह हैं)।",
        explanationHi: "हिन्दी में 11 स्वर माने जाते हैं: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ। (अं और अः अयोगवाह हैं)।"
      },
      {
        id: 4,
        q: "'हिमालय' शब्द का सही संधि-विच्छेद क्या होगा?",
        qHi: "'हिमालय' शब्द का सही संधि-विच्छेद क्या होगा?",
        options: ["हिम + लय", "हिम + आलय", "हिमा + लय", "हिम् + आलय"],
        optionsHi: ["हिम + लय", "हिम + आलय (दीर्घ स्वर संधि)", "हिमा + लय", "हिम् + आलय"],
        ans: 1,
        pyqRef: "CTET Paper 1 & BPSC TRE",
        explanation: "हिम + आलय = हिमालय (अ + आ = आ, दीर्घ स्वर संधि)।",
        explanationHi: "हिम + आलय = हिमालय (अ + आ = आ, दीर्घ स्वर संधि)।"
      },
      {
        id: 5,
        q: "संयुक्त व्यंजन 'क्ष' किन वर्णों के मेल से बना है?",
        qHi: "संयुक्त व्यंजन 'क्ष' किन वर्णों के मेल से बना है?",
        options: ["क् + छ्", "क् + ष्", "च् + छ्", "क् + स्"],
        optionsHi: ["क् + छ्", "क् + ष् (क् + ष् + अ)", "च् + छ्", "क् + स्"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Bihar Police SI",
        explanation: "क्ष = क् + ष् + अ (क् और मूर्धन्य ष् के योग से बनता है)।",
        explanationHi: "क्ष = क् + ष् + अ (क् और मूर्धन्य ष् के योग से बनता है)।"
      },
      {
        id: 6,
        q: "निम्नलिखित में से कौन-सा अंतःस्थ व्यंजन (Semi-vowel) है?",
        qHi: "निम्नलिखित में से कौन-सा अंतःस्थ व्यंजन (Semi-vowel) है?",
        options: ["श", "य", "प", "क"],
        optionsHi: ["श", "य (य, र, ल, व)", "प", "क"],
        ans: 1,
        pyqRef: "CTET Paper 2 & UPTET",
        explanation: "य, र, ल, व चार अंतःस्थ व्यंजन कहलाते हैं।",
        explanationHi: "य, र, ल, व चार अंतःस्थ व्यंजन कहलाते हैं।"
      },
      {
        id: 7,
        q: "'सूर्योदय' में कौन-सी संधि है?",
        qHi: "'सूर्योदय' में कौन-सी संधि है?",
        options: ["दीर्घ संधि", "गुण संधि", "वृद्धि संधि", "यण संधि"],
        optionsHi: ["दीर्घ संधि", "गुण संधि (अ + उ = ओ)", "वृद्धि संधि", "यण संधि"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School Language",
        explanation: "सूर्य + उदय = सूर्योदय (अ + उ = ओ, गुण स्वर संधि)।",
        explanationHi: "सूर्य + उदय = सूर्योदय (अ + उ = ओ, गुण स्वर संधि)।"
      },
      {
        id: 8,
        q: "निम्नलिखित में से भाववाचक संज्ञा कौन-सी है?",
        qHi: "निम्नलिखित में से भाववाचक संज्ञा कौन-सी है?",
        options: ["लड़का", "सुंदरता", "गंगा", "किताब"],
        optionsHi: ["लड़का", "सुंदरता (भाववाचक)", "गंगा", "किताब"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "'सुंदरता' एक अमूर्त गुण/भाव को व्यक्त करती है, अतः यह भाववाचक संज्ञा है।",
        explanationHi: "'सुंदरता' एक अमूर्त गुण/भाव को व्यक्त करती है, अतः यह भाववाचक संज्ञा है।"
      },
      {
        id: 9,
        q: "'इत्यादि' का सही संधि-विच्छेद क्या है?",
        qHi: "'इत्यादि' का सही संधि-विच्छेद क्या है?",
        options: ["इत + आदि", "इति + आदि", "इत्या + दि", "इत् + यादि"],
        optionsHi: ["इत + आदि", "इति + आदि (यण संधि)", "इत्या + दि", "इत् + यादि"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC TRE",
        explanation: "इति + आदि = इत्यादि (इ + आ = या, यण स्वर संधि)।",
        explanationHi: "इति + आदि = इत्यादि (इ + आ = या, यण स्वर संधि)।"
      },
      {
        id: 10,
        q: "संयुक्त व्यंजन 'ज्ञ' किन वर्णों के योग से बना है?",
        qHi: "संयुक्त व्यंजन 'ज्ञ' किन वर्णों के योग से बना है?",
        options: ["ग् + य्", "ज् + ञ्", "ग् + न्", "द् + य्"],
        optionsHi: ["ग् + य्", "ज् + ञ् (ज् + ञ् + अ)", "ग् + न्", "द् + य्"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & State TET",
        explanation: "ज्ञ = ज् + ञ् + अ।",
        explanationHi: "ज्ञ = ज् + ञ् + अ।"
      },
      {
        id: 11,
        q: "मुहावरे 'अंगूठा दिखाना' का सही अर्थ क्या है?",
        qHi: "मुहावरे 'अंगूठा दिखाना' का सही अर्थ क्या है?",
        options: ["मदद करना", "साफ इनकार करना / मना करना", "चिढ़ाना", "स्वागत करना"],
        optionsHi: ["मदद करना", "साफ इनकार करना (मना करना)", "चिढ़ाना", "स्वागत करना"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & SSC MTS Hindi",
        explanation: "अंगूठा दिखाना अर्थात समय पर किसी काम के लिए साफ मना कर देना।",
        explanationHi: "अंगूठा दिखाना अर्थात समय पर किसी काम के लिए साफ मना कर देना।"
      },
      {
        id: 12,
        q: "'पवन' शब्द का सही संधि-विच्छेद क्या होगा?",
        qHi: "'पवन' शब्द का सही संधि-विच्छेद क्या होगा?",
        options: ["प + वन", "पो + अन", "पौ + अन", "पव + न"],
        optionsHi: ["प + वन", "पो + अन (अयादि संधि)", "पौ + अन", "पव + न"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & UPTET",
        explanation: "पो + अन = पवन (ओ + अ = अव्, अयादि स्वर संधि)। (पौ + अक = पावक होता है)।",
        explanationHi: "पो + अन = पवन (ओ + अ = अव्, अयादि स्वर संधि)। (पौ + अक = पावक होता है)।"
      },
      {
        id: 13,
        q: "ऊष्म व्यंजन (Sibilants) की कुल संख्या कितनी है?",
        qHi: "ऊष्म व्यंजन की कुल संख्या कितनी है?",
        options: ["2", "3", "4", "5"],
        optionsHi: ["2", "3", "4 (श, ष, स, ह)", "5"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "श, ष, स, ह ये चार ऊष्म व्यंजन होते हैं, जिनके उच्चारण में मुख से गर्म वायु घर्षण के साथ निकलती है।",
        explanationHi: "श, ष, स, ह ये चार ऊष्म व्यंजन होते हैं, जिनके उच्चारण में मुख से गर्म वायु घर्षण के साथ निकलती है।"
      },
      {
        id: 14,
        q: "'सदा + एव' की संधि क्या होगी?",
        qHi: "'सदा + एव' की संधि क्या होगी?",
        options: ["सदाएव", "सदैव", "सदेव", "सदाव"],
        optionsHi: ["सदाएव", "सदैव (वृद्धि स्वर संधि)", "सदेव", "सदाव"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "सदा + एव = सदैव (आ + ए = ऐ, वृद्धि स्वर संधि)।",
        explanationHi: "सदा + एव = सदैव (आ + ए = ऐ, वृद्धि स्वर संधि)।"
      },
      {
        id: 15,
        q: "संज्ञा के स्थान पर प्रयुक्त होने वाले शब्दों को क्या कहते हैं?",
        qHi: "संज्ञा के स्थान पर प्रयुक्त होने वाले शब्दों को क्या कहते हैं?",
        options: ["विशेषण", "सर्वनाम", "क्रिया", "अव्यय"],
        optionsHi: ["विशेषण", "सर्वनाम (Pronoun)", "क्रिया", "अव्यय"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "संज्ञा के स्थान पर बोले जाने वाले शब्द (जैसे वह, तुम, मैं, यह) सर्वनाम कहलाते हैं।",
        explanationHi: "संज्ञा के स्थान पर बोले जाने वाले शब्द (जैसे वह, तुम, मैं, यह) सर्वनाम कहलाते हैं।"
      },
      {
        id: 16,
        q: "सर्वनाम के कुल कितने भेद होते हैं?",
        qHi: "सर्वनाम के कुल कितने भेद होते हैं?",
        options: ["4", "5", "6", "8"],
        optionsHi: ["4", "5", "6 भेद", "8"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & CTET",
        explanation: "सर्वनाम के 6 भेद हैं: पुरुषवाचक, निश्चयवाचक, अनिश्चयवाचक, संबंधवाचक, प्रश्नवाचक, निजवाचक।",
        explanationHi: "सर्वनाम के 6 भेद हैं: पुरुषवाचक, निश्चयवाचक, अनिश्चयवाचक, संबंधवाचक, प्रश्नवाचक, निजवाचक।"
      },
      {
        id: 17,
        q: "'स्वागत' शब्द का सही संधि-विच्छेद क्या है?",
        qHi: "'स्वागत' शब्द का सही संधि-विच्छेद क्या है?",
        options: ["स्वा + गत", "सु + आगत", "स्व + आगत", "सुवा + गत"],
        optionsHi: ["स्वा + गत", "सु + आगत (यण संधि)", "स्व + आगत", "सुवा + गत"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CHSL",
        explanation: "सु + आगत = स्वागत (उ + आ = वा, यण स्वर संधि)।",
        explanationHi: "सु + आगत = स्वागत (उ + आ = वा, यण स्वर संधि)।"
      },
      {
        id: 18,
        q: "हिन्दी दिवस प्रतिवर्ष किस तिथि को मनाया जाता है?",
        qHi: "हिन्दी दिवस प्रतिवर्ष किस तिथि को मनाया जाता है?",
        options: ["10 जनवरी", "14 सितम्बर", "15 अगस्त", "26 जनवरी"],
        optionsHi: ["10 जनवरी", "14 सितम्बर (National Hindi Day)", "15 अगस्त", "26 जनवरी"],
        ans: 1,
        pyqRef: "CTET GK & Teaching Exams",
        explanation: "14 सितम्बर 1949 को संविधान सभा ने हिन्दी को राजभाषा का दर्जा दिया था, अतः प्रतिवर्ष 14 सितम्बर को हिन्दी दिवस मनाया जाता है। (10 जनवरी विश्व हिन्दी दिवस है)।",
        explanationHi: "14 सितम्बर 1949 को संविधान सभा ने हिन्दी को संघ की राजभाषा स्वीकार किया था, अतः 14 सितम्बर को राष्ट्रीय हिन्दी दिवस मनाया जाता है।"
      },
      {
        id: 19,
        q: "क से म तक के 25 व्यंजनों को किस नाम से जाना जाता है?",
        qHi: "क से म तक के 25 व्यंजनों को किस नाम से जाना जाता है?",
        options: ["अंतःस्थ व्यंजन", "ऊष्म व्यंजन", "स्पर्श व्यंजन", "संयुक्त व्यंजन"],
        optionsHi: ["अंतःस्थ व्यंजन", "ऊष्म व्यंजन", "स्पर्श व्यंजन (25)", "संयुक्त व्यंजन"],
        ans: 2,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "क से म तक के 25 वर्ण पाँच वर्गों में बंटे होते हैं और इन्हें स्पर्श व्यंजन कहते हैं।",
        explanationHi: "क से म तक के 25 वर्ण पाँच वर्गों में बंटे होते हैं और इन्हें स्पर्श व्यंजन कहते हैं।"
      },
      {
        id: 20,
        q: "'आँखों का तारा होना' मुहावरे का सही अर्थ क्या है?",
        qHi: "'आँखों का तारा होना' मुहावरे का सही अर्थ क्या है?",
        options: ["नेत्र दोष होना", "बहुत प्यारा होना", "दूर की वस्तु देखना", "तारे गिनना"],
        optionsHi: ["नेत्र दोष होना", "बहुत प्यारा होना (अत्यधिक प्रिय)", "दूर की वस्तु देखना", "तारे गिनना"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "आँखों का तारा होना अर्थात बहुत प्यारा या दुलारा होना।",
        explanationHi: "आँखों का तारा होना अर्थात बहुत प्यारा या दुलारा होना।"
      },
      {
        id: 21,
        q: "निम्नलिखित में से कौन-सा शब्द 'जल' का पर्यायवाची नहीं है?",
        qHi: "निम्नलिखित में से कौन-सा शब्द 'जल' का पर्यायवाची नहीं है?",
        options: ["नीर", "वारि", "तोय", "अनल"],
        optionsHi: ["नीर", "वारि", "तोय", "अनल (अग्नि का पर्यायवाची)"],
        ans: 3,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "'अनल' अग्नि (आग) का पर्यायवाची है। नीर, वारि, तोय, सलिल जल के पर्यायवाची हैं।",
        explanationHi: "'अनल' अग्नि (आग) का पर्यायवाची है। नीर, वारि, तोय जल के पर्यायवाची हैं।"
      },
      {
        id: 22,
        q: "'उत्थान' शब्द का सही विलोम शब्द क्या होगा?",
        qHi: "'उत्थान' शब्द का सही विलोम शब्द क्या होगा?",
        options: ["पतन", "विनाश", "अवनति", "विराम"],
        optionsHi: ["पतन (Fall)", "विनाश", "अवनति", "विराम"],
        ans: 0,
        pyqRef: "BPSC TRE Language & State TET",
        explanation: "उत्थान का सटीक विलोम शब्द 'पतन' होता है।",
        explanationHi: "उत्थान का सटीक विलोम शब्द 'पतन' होता है।"
      },
      {
        id: 23,
        q: "संज्ञा या सर्वनाम की विशेषता बताने वाले शब्दों को क्या कहते हैं?",
        qHi: "संज्ञा या सर्वनाम की विशेषता बताने वाले शब्दों को क्या कहते हैं?",
        options: ["क्रिया", "विशेषण", "क्रियाविशेषण", "कारक"],
        optionsHi: ["क्रिया", "विशेषण (Adjective)", "क्रियाविशेषण", "कारक"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "जो शब्द संज्ञा अथवा सर्वनाम के गुण, दोष, संख्या या परिमाण की विशेषता बताते हैं, उन्हें विशेषण कहते हैं।",
        explanationHi: "जो शब्द संज्ञा अथवा सर्वनाम के गुण, दोष, संख्या या परिमाण की विशेषता बताते हैं, उन्हें विशेषण कहते हैं।"
      },
      {
        id: 24,
        q: "ह्रस्व स्वर (मूल स्वर) कितने होते हैं?",
        qHi: "ह्रस्व स्वर (मूल स्वर) कितने होते हैं?",
        options: ["3", "4 (अ, इ, उ, ऋ)", "7", "11"],
        optionsHi: ["3", "4 (अ, इ, उ, ऋ)", "7", "11"],
        ans: 1,
        pyqRef: "CTET Paper 2 & UPTET",
        explanation: "ह्रस्व स्वर 4 होते हैं: अ, इ, उ, ऋ।",
        explanationHi: "ह्रस्व स्वर 4 होते हैं: अ, इ, उ, ऋ।"
      },
      {
        id: 25,
        q: "'नाच न जाने आँगन टेढ़ा' लोकोक्ति का सही अर्थ क्या है?",
        qHi: "'नाच न जाने आँगन टेढ़ा' लोकोक्ति का सही अर्थ क्या है?",
        options: ["आँगन का टेढ़ा होना", "अपनी अयोग्यता छिपाने के लिए साधनों में दोष निकालना", "नाचना न आना", "बहाना बनाना"],
        optionsHi: ["आँगन का टेढ़ा होना", "अपनी अयोग्यता छिपाने के लिए साधनों पर दोष मढ़ना", "नाचना न आना", "बहाना बनाना"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "काम न आने पर दूसरों या परिस्थिति में कमी निकालना।",
        explanationHi: "काम न आने पर दूसरों या परिस्थिति में कमी निकालना।"
      },
      {
        id: 26,
        q: "भाषा की सबसे छोटी इकाई जिसके टुकड़े नहीं किए जा सकते, क्या कहलाती है?",
        qHi: "भाषा की सबसे छोटी इकाई जिसके टुकड़े नहीं किए जा सकते, क्या कहलाती है?",
        options: ["शब्द", "वर्ण (ध्वनि)", "वाक्य", "पद"],
        optionsHi: ["शब्द", "वर्ण / ध्वनि (Letter)", "वाक्य", "पद"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE",
        explanation: "वर्ण भाषा की सबसे छोटी अखंडित ध्वनि इकाई है।",
        explanationHi: "वर्ण भाषा की सबसे छोटी अखंडित ध्वनि इकाई है।"
      },
      {
        id: 27,
        q: "संयुक्त व्यंजन 'श्र' किन वर्णों के मेल से बनता है?",
        qHi: "संयुक्त व्यंजन 'श्र' किन वर्णों के मेल से बनता है?",
        options: ["ष् + र्", "श् + र्", "स् + र्", "छ् + र्"],
        optionsHi: ["ष् + र्", "श् + र् (श् + र् + अ)", "स् + र्", "छ् + र्"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "श्र = तालव्य श् + र् + अ (जैसे 'श्रीमान', 'श्रम')।",
        explanationHi: "श्र = तालव्य श् + र् + अ (जैसे 'श्रीमान', 'श्रम')।"
      },
      {
        id: 28,
        q: "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन-सा है?",
        qHi: "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द कौन-सा है?",
        options: ["उज्जवल", "उज्ज्वल", "उज्वल", "ऊज्ज्वल"],
        optionsHi: ["उज्जवल", "उज्ज्वल (शुद्ध रूप)", "उज्वल", "ऊज्ज्वल"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2 & BPSC TRE Language Paper",
        explanation: "उद् + ज्वल = उज्ज्वल (दोनों 'ज' आधे होते हैं)।",
        explanationHi: "उद् + ज्वल = उज्ज्वल (दोनों 'ज' आधे होते हैं)।"
      },
      {
        id: 29,
        q: "'ईंट का जवाब पत्थर से देना' मुहावरे का क्या अर्थ है?",
        qHi: "'ईंट का जवाब पत्थर से देना' मुहावरे का क्या अर्थ है?",
        options: ["ईंट फेंकना", "कड़ा और करारा मुकाबला करना", "चुपचाप सहना", "लड़ाई टालना"],
        optionsHi: ["ईंट फेंकना", "कड़ा और करारा मुकाबला करना", "चुपचाप सहना", "लड़ाई टालना"],
        ans: 1,
        pyqRef: "CTET Paper 1 & 2",
        explanation: "शत्रु के आक्रमण का उससे भी अधिक कठोरता से प्रतिकार करना।",
        explanationHi: "शत्रु के आक्रमण का उससे भी अधिक कठोरता से प्रतिकार करना।"
      },
      {
        id: 30,
        q: "संविधान के किस अनुच्छेद में हिन्दी को संघ की राजभाषा और देवनागरी को लिपि घोषित किया गया है?",
        qHi: "संविधान के किस अनुच्छेद में हिन्दी को संघ की राजभाषा और देवनागरी को लिपि घोषित किया गया है?",
        options: ["अनुच्छेद 343(1)", "अनुच्छेद 351", "अनुच्छेद 352", "अनुच्छेद 370"],
        optionsHi: ["अनुच्छेद 343(1) (Article 343)", "अनुच्छेद 351", "अनुच्छेद 352", "अनुच्छेद 370"],
        ans: 0,
        pyqRef: "CTET Paper 2 & BPSC Civil Services & Bihar STET",
        explanation: "संविधान के अनुच्छेद 343(1) के अनुसार: 'संघ की राजभाषा हिन्दी और लिपि देवनागरी होगी।'",
        explanationHi: "संविधान के अनुच्छेद 343(1) के अनुसार: 'संघ की राजभाषा हिन्दी और लिपि देवनागरी होगी।'"
      }
    ]
  }
];

module.exports = chapters;
