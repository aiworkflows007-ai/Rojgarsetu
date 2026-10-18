/**
 * build_class8_sci_sst_hindi.js
 * NCERT Class 8:
 * - Science Ch 1: Crop Production and Management (फसल उत्पादन एवं प्रबंध)
 * - SST Geography Ch 1: Resources (संसाधन - संसाधन एवं विकास)
 * - Hindi Vasant Ch 1: ध्वनि (कविता - सूर्यकांत त्रिपाठी 'निराला') व हिन्दी व्याकरण
 * Each chapter has comprehensive Teacher-Mentor notes and exactly 30 bilingual MCQs.
 */

const chapters = [
  // =========================================================================
  // SCIENCE CHAPTER 1: CROP PRODUCTION AND MANAGEMENT (फसल उत्पादन एवं प्रबंध)
  // =========================================================================
  {
    id: "ncert-c8-sci01",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Science",
    subject: "Science",
    subjectCode: "SCI",
    chapterNo: 1,
    bookName: "Science (विज्ञान) — NCERT Class 8",
    title: "Chapter 1: Crop Production and Management (फसल उत्पादन एवं प्रबंध)",
    titleHi: "अध्याय 1: फसल उत्पादन एवं प्रबंध (Crop Production and Management)",
    pdfUrl: "/ncert_books/class8/science_ch01.pdf",
    pdfUrlHi: "/ncert_books/class8/science_ch01_hi.pdf",
    competitionEdge: "One of the most frequently tested chapters across CTET Paper 2 (Science & Math), State TETs, BPSC TRE 4.0 Middle School, UPSC/State PSC Agriculture sections, and SSC. Focuses on Kharif vs Rabi crops, 7 agricultural practices, Manure vs Fertilizers, modern irrigation methods (Drip and Sprinkler), Rhizobium nitrogen fixation, weedicides (2,4-D), and food preservation.",
    competitionEdgeHi: "सीटेट पेपर-2 (विज्ञान), राज्य टीईटी, बीपीएससी टीआरई 4.0 मध्य विद्यालय (6-8), तथा एसएससी/रेलवे के लिए अति-महत्वपूर्ण। इसमें खरीफ बनाम रबी फसलें, 7 चरणबद्ध कृषि पद्धतियाँ, खाद एवं उर्वरक में अंतर, आधुनिक सिंचाई प्रणालियाँ (ड्रिप व छिड़काव तंत्र), राइजोबियम द्वारा नाइट्रोजन स्थिरीकरण, खरपतवारनाशी (2,4-D) तथा अन्न भंडारण शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Crop Classification & Agricultural Practices",
        headingHi: "1. एनसीईआरटी मूल पाठ: फसलों का वर्गीकरण एवं चरणबद्ध कृषि पद्धतियाँ",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Welcome to Class 8 Science! When plants of the same kind are cultivated at one place on a large scale, it is called a <strong>Crop</strong>. Based on seasonality in India, crops are broadly categorised into two major classes: <strong>Kharif Crops</strong> (rainy season: June to September) and <strong>Rabi Crops</strong> (winter season: October to March).
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Kharif vs Rabi Crops: Comprehensive Comparison</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Kharif Crops (खरीफ फसलें)</th>
                  <th>Rabi Crops (रबी फसलें)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sowing Season</strong></td>
                  <td>Monsoon / Rainy Season (June – July)</td>
                  <td>Winter Season (October – November)</td>
                </tr>
                <tr>
                  <td><strong>Harvesting Season</strong></td>
                  <td>September – October</td>
                  <td>March – April</td>
                </tr>
                <tr>
                  <td><strong>Water Requirement</strong></td>
                  <td>High (needs heavy rainfall)</td>
                  <td>Moderate to low (requires cold, dry climate)</td>
                </tr>
                <tr>
                  <td><strong>Major Examples</strong></td>
                  <td><strong>Paddy (Rice), Maize, Soyabean, Groundnut, Cotton</strong></td>
                  <td><strong>Wheat, Gram (Chana), Pea (Matar), Mustard (Sarson), Linseed (Alsi)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">🌱 The 7 Step-by-Step Agricultural Practices</div>
            <ol>
              <li><strong>Preparation of Soil:</strong> Turning and loosening the soil with a plough or cultivator. Loosening allows roots to breathe deeply, brings nutrient-rich soil to the top, and aids earthworms and beneficial microbes.</li>
              <li><strong>Sowing:</strong> Selection of clean, healthy seeds of good variety. Good seeds sink in water, while damaged hollow seeds float! Modern method uses a <strong>Seed Drill</strong> (ensures seeds are sown at equal distance and depth, covered by soil to prevent bird damage).</li>
              <li><strong>Adding Manure and Fertilizers:</strong>
                <ul>
                  <li><strong>Manure (खाद):</strong> Organic substance obtained from decomposition of plant/animal wastes. Adds humus to soil, improves soil texture and water-retaining capacity.</li>
                  <li><strong>Fertilizers (उर्वरक):</strong> Inorganic chemical salts manufactured in factories (e.g. Urea, Ammonium sulphate, Super phosphate, Potash, NPK - Nitrogen, Phosphorus, Potassium). Excessive use causes water pollution and makes soil less fertile over time.</li>
                  <li><strong>Crop Rotation:</strong> Growing different crops alternately. Legumes (peas, pulses) have <em>Rhizobium</em> bacteria in their root nodules that fix atmospheric nitrogen!</li>
                </ul>
              </li>
              <li><strong>Irrigation:</strong> Supply of water to crops at regular intervals.
                <ul>
                  <li><strong>Traditional Methods:</strong> Moat (pulley system), Chain pump, Dhekli, Rahat (lever system). Cheaper but less efficient.</li>
                  <li><strong>Modern Methods:</strong>
                    <ul>
                      <li><strong>Sprinkler System (छिड़काव तंत्र):</strong> Perpendicular pipes with rotating nozzles. Ideal for uneven land and sandy soil.</li>
                      <li><strong>Drip System (ड्रिप तंत्र):</strong> Water falls drop by drop directly near the roots! Zero water wastage. A boon in water-scarce regions.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>Protection from Weeds:</strong> Weeds are undesirable plants (e.g. <em>Amaranthus</em>/Chaulai, <em>Chenopodium</em>/Bathua, wild oat). Removed manually with a <strong>Khurpi</strong> or chemically using weedicides like <strong>2,4-D</strong>.</li>
              <li><strong>Harvesting:</strong> Cutting of crop after it matures. Done manually using a <strong>Sickle</strong> or by machine called <strong>Harvester</strong>. In the harvested crop, the grain seeds need to be separated from the chaff, a process called <strong>Threshing</strong>. Combined machine is a <strong>Combine</strong>.</li>
              <li><strong>Storage:</strong> Grains must be dried in the sun to reduce moisture (preventing attack by fungi and insects). Large scale storage is done in <strong>Silos</strong> and <strong>Granaries</strong>. Dried neem leaves are used at home.</li>
            </ol>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ Competitive Exam Trap Alert!</div>
            <p><strong>Trap 1:</strong> Is Mustard a Kharif or Rabi crop? <strong>Rabi crop!</strong> It is grown in winter alongside wheat and gram.</p>
            <p><strong>Trap 2:</strong> What is 2,4-D? It is a selective <strong>Weedicide</strong> (auxin herbicide) that kills broad-leaved weeds without harming cereal crops.</p>
            <p><strong>Trap 3:</strong> What bacteria fix nitrogen in root nodules of leguminous plants? <strong>Rhizobium</strong> bacteria (symbiotic relationship)!</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              कक्षा 8 विज्ञान में आपका स्वागत है! जब एक ही किस्म के पौधे किसी स्थान पर बड़े पैमाने पर उगाए जाते हैं, तो इसे <strong>फसल (Crop)</strong> कहते हैं। भारत में ऋतुओं के आधार पर फसलों को मुख्य रूप से दो वर्गों में बांटा जाता है: <strong>खरीफ फसलें</strong> (वर्षा ऋतु: जून से सितंबर) और <strong>रबी फसलें</strong> (शीत ऋतु: अक्टूबर से मार्च)।
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ खरीफ बनाम रबी फसलें: संपूर्ण तुलना सारणी</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>विशेषता</th>
                  <th>खरीफ फसलें (Kharif)</th>
                  <th>रबी फसलें (Rabi)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>बुआई का समय</strong></td>
                  <td>वर्षा ऋतु (जून – जुलाई)</td>
                  <td>शीत ऋतु (अक्टूबर – नवंबर)</td>
                </tr>
                <tr>
                  <td><strong>कटाई का समय</strong></td>
                  <td>सितंबर – अक्टूबर</td>
                  <td>मार्च – अप्रैल</td>
                </tr>
                <tr>
                  <td><strong>जल की आवश्यकता</strong></td>
                  <td>अत्यधिक जल की आवश्यकता होती है</td>
                  <td>मध्यम से कम जल, शुष्क व ठंडी जलवायु</td>
                </tr>
                <tr>
                  <td><strong>प्रमुख उदाहरण</strong></td>
                  <td><strong>धान (चावल), मक्का, सोयाबीन, मूंगफली, कपास</strong></td>
                  <td><strong>गेहूँ, चना, मटर, सरसों, अलसी</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">🌱 कृषि की 7 चरणबद्ध पद्धतियाँ</div>
            <ol>
              <li><strong>मिट्टी तैयार करना:</strong> हल, कुदाली या कल्टीवेटर से मिट्टी को उलटना-पलटना व पोला करना। इससे जड़ें गहराई तक श्वसन कर पाती हैं और केंचुओं तथा सूक्ष्मजीवों की वृद्धि होती है।</li>
              <li><strong>बुआई:</strong> उत्तम किस्म के साफ एवं स्वस्थ बीजों का चयन। क्षतिग्रस्त खोखले बीज जल की सतह पर तैरने लगते हैं जबकि स्वस्थ बीज डूब जाते हैं। <strong>सीड-ड्रिल (Seed drill)</strong> से बीजों की समान दूरी व गहराई पर बुआई होती है।</li>
              <li><strong>खाद एवं उर्वरक देना:</strong>
                <ul>
                  <li><strong>खाद (जैविक):</strong> पादप एवं जन्तु अपशिष्टों के अपघटन से प्राप्त। यह मिट्टी को ह्यूमस देती है और उसकी जलधारण क्षमता बढ़ाती है।</li>
                  <li><strong>उर्वरक (रासायनिक):</strong> फैक्ट्रियों में निर्मित अकार्बनिक लवण (यूरिया, अमोनियम सल्फेट, सुपर फॉस्फेट, पोटाश, NPK - नाइट्रोजन, फास्फोरस, पोटेशियम)। अत्यधिक प्रयोग से मृदा व जल प्रदूषण होता है।</li>
                  <li><strong>फसल चक्रण:</strong> एक फसल के बाद दूसरी भिन्न किस्म की फसल उगाना। फलीदार (लेग्यूमिनस) पौधों की जड़ों की ग्रंथियों में <em>राइजोबियम (Rhizobium)</em> जीवाणु वायुमंडलीय नाइट्रोजन का स्थिरीकरण करते हैं।</li>
                </ul>
              </li>
              <li><strong>सिंचाई:</strong> निश्चित अंतराल पर फसलों को जल देना।
                <ul>
                  <li><strong>पारंपरिक तरीके:</strong> मोट (घिरनी), चेन पंप, ढेकली, रहट (उत्तोलक तंत्र)।</li>
                  <li><strong>आधुनिक विधियाँ:</strong>
                    <ul>
                      <li><strong>छिड़काव तंत्र (Sprinkler):</strong> असमतल भूमि और रेतीली मिट्टी के लिए अत्यंत उपयोगी।</li>
                      <li><strong>ड्रिप तंत्र (Drip system):</strong> जल बूंद-बूंद करके सीधे पौधों की जड़ों में गिरता है। जल की बिल्कुल बर्बादी नहीं होती। जल की कमी वाले क्षेत्रों के लिए वरदान!</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><strong>खरपतवार से सुरक्षा:</strong> फसल के साथ स्वतः उगने वाले अवांछित पौधे <strong>खरपतवार (Weeds)</strong> कहलाते हैं (उदा. चौलाई, बथुआ)। इन्हें खुरपी से या <strong>2,4-D</strong> जैसे खरपतवारनाशी रसायनों से नष्ट किया जाता है।</li>
              <li><strong>कटाई:</strong> पकी फसल को काटना। दरांती या <strong>हार्वेस्टर</strong> द्वारा। अनाज के दानों को भूसे से अलग करना <strong>थ्रेशिंग (Threshing)</strong> कहलाता है। संयुक्त मशीन <strong>कंबाइन (Combine)</strong> कहलाती है।</li>
              <li><strong>भंडारण:</strong> बीजों को सुखाकर नमी कम करना ताकि कवक व कीट न लगें। बड़े पैमाने पर भंडारण <strong>साइलो (Silos)</strong> और <strong>भंडार गृहों (Granaries)</strong> में किया जाता है। घरों में नीम की सूखी पत्तियाँ रखी जाती हैं।</li>
            </ol>
          </div>
          <div class="exam-trap-box">
            <div class="trap-title">⚠️ प्रतियोगी परीक्षा ट्रैप अलर्ट!</div>
            <p><strong>ट्रैप 1:</strong> क्या सरसों खरीफ फसल है या रबी? <strong>रबी फसल!</strong> यह शीतकाल में गेहूँ और चने के साथ उगाई जाती है।</p>
            <p><strong>ट्रैप 2:</strong> 2,4-D क्या है? यह एक रासायनिक <strong>खरपतवारनाशी (Weedicide)</strong> है जो मुख्य फसल को बिना नुकसान पहुँचाए खरपतवार नष्ट करता है।</p>
            <p><strong>ट्रैप 3:</strong> दलहनी पौधों की जड़ों में कौन सा जीवाणु नाइट्रोजन स्थिरीकरण करता है? <strong>राइजोबियम (Rhizobium)</strong> जीवाणु!</p>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const sciQuestions = [
        { q: "Which of the following is a Kharif crop?", qHi: "निम्नलिखित में से कौन सी एक खरीफ फसल है?", opt: ["Paddy (धान)", "Wheat (गेहूँ)", "Gram (चना)", "Mustard (सरसों)"], ans: 0, exp: "Paddy, maize, soyabean, groundnut, and cotton are Kharif crops grown in the rainy season." },
        { q: "Which of the following is a Rabi crop?", qHi: "निम्नलिखित में से कौन सी एक रबी फसल है?", opt: ["Wheat (गेहूँ)", "Paddy (धान)", "Maize (मक्का)", "Cotton (कपास)"], ans: 0, exp: "Wheat, gram, pea, mustard, and linseed are Rabi crops grown in winter (October to March)." },
        { q: "The process of loosening and turning the soil is called:", qHi: "मिट्टी को उलटने-पलटने एवं पोला करने की प्रक्रिया कहलाती है:", opt: ["Tilling or Ploughing (जुताई)", "Sowing (बुआई)", "Threshing (थ्रेशिंग)", "Harvesting (कटाई)"], ans: 0, exp: "Tilling or ploughing is the process of loosening and turning the soil." },
        { q: "Which of the following is an example of a chemical fertilizer?", qHi: "निम्नलिखित में से कौन सा एक रासायनिक उर्वरक का उदाहरण है?", opt: ["NPK (Nitrogen, Phosphorus, Potassium)", "Cow dung compost", "Green manure", "Vermicompost"], ans: 0, exp: "NPK, Urea, Ammonium sulphate, Super phosphate, and Potash are chemical fertilizers." },
        { q: "Which modern irrigation system is best suited for water-scarce regions as water falls drop by drop directly near roots?", qHi: "पानी की कमी वाले क्षेत्रों के लिए कौन सी आधुनिक सिंचाई प्रणाली सर्वोत्तम है, जिसमें जल बूंद-बूंद करके सीधे पौधों की जड़ों में गिरता है?", opt: ["Drip system (ड्रिप तंत्र)", "Sprinkler system (छिड़काव तंत्र)", "Chain pump", "Rahat"], ans: 0, exp: "The drip system delivers water directly to the plant roots drop by drop, eliminating water wastage." },
        { q: "What is 2,4-D?", qHi: "2,4-D क्या है?", opt: ["A weedicide (खरपतवारनाशी)", "An insecticide", "A fertilizer", "A high-yielding seed"], ans: 0, exp: "2,4-D is a selective chemical weedicide sprayed in fields to kill unwanted weeds." },
        { q: "The bacteria present in the root nodules of leguminous plants that fix atmospheric nitrogen is:", qHi: "दलहनी (लेग्यूमिनस) पौधों की जड़ों की ग्रंथियों में उपस्थित वह जीवाणु जो वायुमंडलीय नाइट्रोजन का स्थिरीकरण करता है:", opt: ["Rhizobium (राइजोबियम)", "Lactobacillus", "Yeast", "Penicillium"], ans: 0, exp: "Rhizobium bacteria live symbiotically in root nodules of leguminous plants and fix atmospheric nitrogen." },
        { q: "The machine which is a combined harvester and thresher is called:", qHi: "वह मशीन जो संयुक्त रूप से हार्वेस्टर और थ्रेशर दोनों का कार्य करती है, कहलाती है:", opt: ["Combine (कंबाइन)", "Cultivator", "Tractor", "Seed drill"], ans: 0, exp: "A Combine is a dual-function agricultural machine that harvests and threshes simultaneously." },
        { q: "Separation of grain seeds from the chaff using wind is known as:", qHi: "वायु (हवा) की सहायता से अनाज के दानों को भूसे से अलग करने की विधि कहलाती है:", opt: ["Winnowing (फटकना / निष्पावन)", "Threshing", "Ploughing", "Weeding"], ans: 0, exp: "Winnowing uses the blowing wind to separate lighter chaff from heavier grain seeds." },
        { q: "Large scale storage of grains is done in:", qHi: "अनाज का बड़े पैमाने पर भंडारण किसमें किया जाता है?", opt: ["Silos and Granaries (साइलो एवं भंडार गृह)", "Open fields", "Small clay pots", "Paper bags"], ans: 0, exp: "Silos and granaries protect harvested grains from pests, insects, and moisture on a large scale." },
        { q: "Which tool is used for modern mechanical sowing of seeds at uniform distance and depth?", qHi: "बीजों को समान दूरी और गहराई पर आधुनिक यांत्रिक रूप से बोने के लिए किस उपकरण का उपयोग किया जाता है?", opt: ["Seed drill (सीड ड्रिल)", "Sickle (दरांती)", "Plough (हल)", "Khurpi (खुरपी)"], ans: 0, exp: "A seed drill sows seeds uniformly at appropriate depths and covers them with soil." },
        { q: "Which of the following traditional irrigation methods uses a lever system?", qHi: "निम्नलिखित में से कौन सी पारंपरिक सिंचाई पद्धति उत्तोलक प्रणाली (lever system) पर आधारित है?", opt: ["Rahat (रहट)", "Moat", "Chain pump", "Dhekli"], ans: 0, exp: "Rahat is a traditional lever-system irrigation method operated with the help of animals." },
        { q: "Damaged and hollow seeds placed in water will:", qHi: "जल में डालने पर क्षतिग्रस्त और खोखले बीज:", opt: ["Float on the surface of water (सतह पर तैरेंगे)", "Sink to the bottom", "Dissolve in water", "Explode"], ans: 0, exp: "Damaged seeds become hollow and lighter, hence they float on top of water." },
        { q: "Growing of different crops alternately in the same field to replenish soil nutrients naturally is called:", qHi: "मृदा के पोषक तत्वों की प्राकृतिक पुनःपूर्ति के लिए एक ही खेत में विभिन्न फसलों को एकांतर क्रम में उगाना कहलाता है:", opt: ["Crop rotation (फसल चक्रण)", "Monoculture", "Deforestation", "Over-irrigation"], ans: 0, exp: "Crop rotation replenishes the soil with nutrients, particularly nitrogen when legumes are planted." },
        { q: "Which household natural product is commonly placed in stored grains to repel insects and pests?", qHi: "अनाज के घरेलू भंडारण में कीटों से सुरक्षा के लिए सामान्यतः क्या रखा जाता है?", opt: ["Dried neem leaves (नीम की सूखी पत्तियाँ)", "Salt", "Sugar crystals", "Rose petals"], ans: 0, exp: "Dried neem leaves act as a natural pest repellent in household grain storage." },
        { q: "Cod liver oil obtained from fish is rich in which vitamin?", qHi: "मछली से प्राप्त होने वाला कॉड लिवर तेल किस विटामिन से भरपूर होता है?", opt: ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin K"], ans: 0, exp: "Fish liver oil (Cod liver oil) is exceptionally rich in Vitamin D." },
        { q: "Organic manure is considered superior to chemical fertilizer because it:", qHi: "जैविक खाद को रासायनिक उर्वरक से बेहतर माना जाता है क्योंकि यह:", opt: ["Enhances the water-holding capacity and texture of soil", "Pollutes the groundwater", "Is non-biodegradable", "Contains zero nutrients"], ans: 0, exp: "Manure adds humus, improves soil texture, and increases water retention without chemical pollution." },
        { q: "The rearing of animals on a large scale for food and other products is called:", qHi: "भोजन एवं अन्य उत्पादों के लिए बड़े पैमाने पर पशुओं का पालन-पोषण कहलाता है:", opt: ["Animal husbandry (पशुपालन)", "Agriculture", "Pisciculture", "Sericulture"], ans: 0, exp: "Animal husbandry is the branch of agriculture concerned with animals raised for meat, milk, eggs, or wool." },
        { q: "Which of the following is NOT a Kharif crop?", qHi: "निम्नलिखित में से कौन सी खरीफ फसल नहीं है?", opt: ["Mustard (सरसों)", "Cotton (कपास)", "Soyabean (सोयाबीन)", "Groundnut (मूंगफली)"], ans: 0, exp: "Mustard is a Rabi crop sown in winter, while cotton, soyabean, and groundnut are Kharif crops." },
        { q: "Why should grains be thoroughly dried in the sun before storage?", qHi: "भंडारण से पहले अनाज को धूप में अच्छी तरह क्यों सुखाया जाना चाहिए?", opt: ["To reduce moisture content and prevent fungal/bacterial growth", "To make them change color", "To increase their weight", "To make them soft"], ans: 0, exp: "Moisture promotes fungal and insect growth; sun drying reduces moisture and prevents spoilage." },
        { q: "Sprinkler irrigation system is particularly useful on:", qHi: "छिड़काव सिंचाई प्रणाली (Sprinkler system) विशेष रूप से किसके लिए उपयोगी है?", opt: ["Uneven land and sandy soil", "Completely waterlogged land", "Flat clay soil", "Wetland paddy fields"], ans: 0, exp: "Sprinkler irrigation is ideal for uneven terrain and sandy soil where water seeps quickly." },
        { q: "Which implement is driven by a tractor to loosen soil quickly in modern farming?", qHi: "आधुनिक कृषि में मिट्टी को शीघ्रता से जोतने के लिए ट्रैक्टर चालित किस उपकरण का प्रयोग किया जाता है?", opt: ["Cultivator (कल्टीवेटर)", "Traditional wooden plough", "Khurpi", "Sickle"], ans: 0, exp: "Tractor-driven cultivators save significant labor and time compared to traditional bullock ploughs." },
        { q: "Which weed commonly infests wheat and cereal crops in India?", qHi: "भारत में गेहूँ की फसल के साथ सामान्यतः कौन सा खरपतवार उगता है?", opt: ["Wild oat / Bathua (Chenopodium)", "Rose", "Mango sprout", "Tulsi"], ans: 0, exp: "Bathua (Chenopodium) and wild oat are common weeds competing with wheat crops." },
        { q: "What is the primary danger of excessive use of chemical fertilizers?", qHi: "रासायनिक उर्वरकों के अत्यधिक प्रयोग का मुख्य दुष्प्रभाव क्या है?", opt: ["Soil becomes less fertile over time and causes water pollution", "Crops grow too fast", "Seeds become sweet", "Rainfall stops"], ans: 0, exp: "Overuse degrades soil texture, kills soil microbes, and leaches into water bodies causing eutrophication." },
        { q: "Which nutrient does Rhizobium supply to plants?", qHi: "राइजोबियम जीवाणु पौधों को कौन सा पोषक तत्व उपलब्ध कराते हैं?", opt: ["Nitrogen (नाइट्रोजन)", "Potassium", "Iron", "Calcium"], ans: 0, exp: "Rhizobium fixes atmospheric nitrogen (N2) into soluble nitrates that plants can absorb." },
        { q: "The supply of water to crops at regular intervals is termed as:", qHi: "निश्चित समयांतराल पर फसलों को जल देना कहलाता है:", opt: ["Irrigation (सिंचाई)", "Sowing", "Harvesting", "Transplantation"], ans: 0, exp: "Irrigation is the artificial application of water to land or soil at regular intervals." },
        { q: "What is transplantation in agriculture?", qHi: "कृषि में पौध रोपण (Transplantation) क्या है?", opt: ["Growing seedlings in a nursery and then planting them in main field", "Sowing seeds directly", "Cutting crops", "Storing seeds"], ans: 0, exp: "In crops like paddy and onion, seeds are first grown in a nursery and healthy seedlings are transplanted." },
        { q: "Which tool is traditionally used to manually remove weeds from fields?", qHi: "खेतों से खरपतवार को हाथ से हटाने के लिए पारंपरिक रूप से किस औजार का उपयोग किया जाता है?", opt: ["Khurpi (खुरपी)", "Combine", "Silo", "Sprinkler"], ans: 0, exp: "Khurpi is a small hand tool traditionally used for physical weeding and digging." },
        { q: "Paddy requires a lot of water. Therefore, it is grown only in:", qHi: "धान को बहुत अधिक पानी की आवश्यकता होती है। इसलिए इसे केवल किस ऋतु में उगाया जाता है?", opt: ["Rainy season (वर्षा ऋतु — खरीफ)", "Winter season (रबी)", "Summer season (जायद)", "Autumn"], ans: 0, exp: "Paddy is a Kharif crop grown during monsoon due to its high water requirement." },
        { q: "Which of the following is a bio-fertilizer / organic soil enricher?", qHi: "निम्नलिखित में से कौन सा एक जैविक उर्वरक / मृदा संवर्धक है?", opt: ["Vermicompost (केंचुआ खाद)", "Urea", "Potash", "Superphosphate"], ans: 0, exp: "Vermicompost is organic compost produced by earthworms decomposing organic matter." }
      ];

      const item = sciQuestions[qNum - 1];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  },

  // =========================================================================
  // SST GEOGRAPHY CHAPTER 1: RESOURCES (संसाधन — संसाधन एवं विकास)
  // =========================================================================
  {
    id: "ncert-c8-sst01",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Social Science (Geography)",
    subject: "Social Science",
    subjectCode: "SST",
    chapterNo: 1,
    bookName: "Resources and Development (संसाधन एवं विकास) — NCERT Class 8",
    title: "Chapter 1: Resources (संसाधन)",
    titleHi: "अध्याय 1: संसाधन (Resources — संसाधन एवं विकास)",
    pdfUrl: "/ncert_books/class8/sst_ch01.pdf",
    pdfUrlHi: "/ncert_books/class8/sst_ch01_hi.pdf",
    competitionEdge: "A bedrock chapter for UPSC Prelims, State PCS, CTET Paper 2 (Social Science), and SSC CGL. Covers Utility & Value, Natural Resources (Renewable vs Non-renewable, Biotic vs Abiotic, Actual vs Potential, Ubiquitous vs Localised), Human Resources & Human Resource Development, and the core principles of Sustainable Development.",
    competitionEdgeHi: "यूपीएससी, राज्य पीसीएस, सीटेट पेपर-2 (सामाजिक अध्ययन) और एसएससी के लिए अत्यंत महत्वपूर्ण अध्याय। इसमें उपयोगिता व मूल्य, प्राकृतिक संसाधन (नवीकरणीय व अनवीकरणीय, जैव व अजैव, वास्तविक व संभाव्य, सर्वव्यापक व स्थानिक), मानव संसाधन विकास, तथा सतत पोषणीय विकास (Sustainable Development) के सिद्धांत शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Meaning, Classification & Sustainable Development",
        headingHi: "1. एनसीईआरटी मूल पाठ: संसाधन की परिभाषा, वर्गीकरण एवं सतत पोषणीय विकास",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Anything that can be used to satisfy a human need is a <strong>Resource</strong>. A substance becomes a resource only when it has <strong>Utility (प्रयोज्यता)</strong>. Utility gives it <strong>Value (मूल्य)</strong>. Some resources have economic value (e.g. metals, petroleum), while others have aesthetic value (e.g. a beautiful landscape), but both are equally important!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Types of Resources: The Master Classification</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Basis of Classification</th>
                  <th>Category</th>
                  <th>Definition & Key Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2"><strong>Level of Development</strong></td>
                  <td><strong>Actual Resources (वास्तविक)</strong></td>
                  <td>Whose quantity is known and currently being used. (e.g. Coal in Ruhr region of Germany, Petroleum in West Asia, Dark soils of Deccan plateau).</td>
                </tr>
                <tr>
                  <td><strong>Potential Resources (संभाव्य)</strong></td>
                  <td>Entire quantity may not be known and not being used today due to lack of tech. (e.g. <strong>Uranium in Ladakh</strong>, high speed winds in past).</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>Origin (उत्पत्ति)</strong></td>
                  <td><strong>Abiotic (अजैव)</strong></td>
                  <td>Non-living resources: Soils, rocks, minerals.</td>
                </tr>
                <tr>
                  <td><strong>Biotic (जैव)</strong></td>
                  <td>Living resources: Plants, animals, humans, microorganisms.</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>Renewability (नवीकरणीयता)</strong></td>
                  <td><strong>Renewable (नवीकरणीय)</strong></td>
                  <td>Which get renewed or replenished quickly. (e.g. Solar energy, wind energy, water, forests).</td>
                </tr>
                <tr>
                  <td><strong>Non-Renewable (अनवीकरणीय)</strong></td>
                  <td>Limited stock; once exhausted may take thousands of years to renew (longer than human lifespans). (e.g. <strong>Coal, Petroleum, Natural Gas</strong>).</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>Distribution (वितरण)</strong></td>
                  <td><strong>Ubiquitous (सर्वव्यापक)</strong></td>
                  <td>Found everywhere on Earth. (e.g. <strong>Air we breathe, sunlight</strong>).</td>
                </tr>
                <tr>
                  <td><strong>Localised (स्थानिक)</strong></td>
                  <td>Found only in certain specific places. (e.g. <strong>Copper, Iron ore, Gold</strong>).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">🌿 Sustainable Development (सतत पोषणीय विकास)</div>
            <p><strong>Definition:</strong> Carefully utilizing resources so that besides meeting the requirements of the present, it also takes care of future generations.</p>
            <ul>
              <li><strong>The 3 Rs:</strong> Reduce consumption, Recycle materials, and Reuse items.</li>
              <li><strong>Golden Principles:</strong> Respect and care for all forms of life, improve quality of human life, conserve Earth's vitality and diversity, minimize the depletion of natural resources, change personal attitude towards the environment.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रत्येक वस्तु जिसका उपयोग आवश्यकताओं को पूरा करने के लिए किया जा सकता है, <strong>संसाधन (Resource)</strong> कहलाती है। किसी वस्तु की उपयोगिता (Utility) ही उसे मूल्य प्रदान करती है। कुछ संसाधनों का आर्थिक मूल्य होता है (जैसे धातुएं, खनिज तेल) और कुछ का सौंदर्यपरक मूल्य (जैसे सुंदर प्राकृतिक दृश्य), किन्तु दोनों ही मनुष्य के लिए अनिवार्य हैं!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ संसाधनों का संपूर्ण वर्गीकरण</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>वर्गीकरण का आधार</th>
                  <th>प्रकार</th>
                  <th>परिभाषा एवं प्रमुख उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="2"><strong>विकास एवं उपयोग</strong></td>
                  <td><strong>वास्तविक संसाधन (Actual)</strong></td>
                  <td>वे संसाधन जिनकी मात्रा ज्ञात है और इस समय उपयोग किया जा रहा है (जैसे जर्मनी के रूहर प्रदेश में कोयला, पश्चिम एशिया में पेट्रोलियम)।</td>
                </tr>
                <tr>
                  <td><strong>संभाव्य संसाधन (Potential)</strong></td>
                  <td>वे संसाधन जिनकी सम्पूर्ण मात्रा ज्ञात नहीं है और जिनका उपयोग भविष्य में किया जा सकता है (जैसे <strong>लद्दाख में पाया गया यूरेनियम</strong>)।</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>उत्पत्ति के आधार पर</strong></td>
                  <td><strong>अजैव (Abiotic)</strong></td>
                  <td>निर्जीव वस्तुएं (जैसे मृदा, चट्टानें, खनिज)।</td>
                </tr>
                <tr>
                  <td><strong>जैव (Biotic)</strong></td>
                  <td>सजीव वस्तुएं (जैसे वनस्पति, जीव-जंतु, मनुष्य)।</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>नवीकरणीयता के आधार पर</strong></td>
                  <td><strong>नवीकरणीय (Renewable)</strong></td>
                  <td>जो शीघ्रता से नवीकृत अथवा पुनःपूरित हो जाते हैं (जैसे सौर ऊर्जा, पवन ऊर्जा, जल)।</td>
                </tr>
                <tr>
                  <td><strong>अनवीकरणीय (Non-Renewable)</strong></td>
                  <td>जिनका भंडार सीमित है; एक बार समाप्त होने के बाद बनने में हजारों वर्ष लग जाते हैं (जैसे <strong>कोयला, पेट्रोलियम, प्राकृतिक गैस</strong>)।</td>
                </tr>
                <tr>
                  <td rowspan="2"><strong>वितरण के आधार पर</strong></td>
                  <td><strong>सर्वव्यापक (Ubiquitous)</strong></td>
                  <td>जो सभी जगह पाए जाते हैं (जैसे <strong>वायु, सूर्य का प्रकाश</strong>)।</td>
                </tr>
                <tr>
                  <td><strong>स्थानिक (Localised)</strong></td>
                  <td>जो निश्चित स्थानों पर ही पाए जाते हैं (जैसे <strong>तांबा, लौह अयस्क</strong>)।</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">🌿 सतत पोषणीय विकास (Sustainable Development)</div>
            <p><strong>परिभाषा:</strong> संसाधनों का सावधानीपूर्वक उपयोग ताकि न केवल वर्तमान पीढ़ी की आवश्यकताएं पूरी हों, अपितु भावी पीढ़ियों के लिए भी वे सुरक्षित रहें।</p>
            <ul>
              <li><strong>3 R का नियम:</strong> उपभोग कम करना (Reduce), पुनर्चक्रण (Recycle) और पुनः उपयोग (Reuse)।</li>
              <li><strong>मूल सिद्धांत:</strong> जीवन के सभी रूपों का आदर, मानव जीवन की गुणवत्ता बढ़ाना, पृथ्वी की जैव-विविधता का संरक्षण, तथा प्राकृतिक संसाधनों के ह्रास को न्यूनतम करना।</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const sstQuestions = [
        { q: "Which of the following makes an object or substance a resource?", qHi: "निम्नलिखित में से कौन सी विशेषता किसी वस्तु या पदार्थ को संसाधन बनाती है?", opt: ["Utility (प्रयोज्यता / उपयोगिता)", "Weight", "Color", "High cost"], ans: 0, exp: "Utility or usability is what gives an object or substance the status of a resource." },
        { q: "Uranium found in Ladakh is an example of which type of resource?", qHi: "लद्दाख में पाया गया यूरेनियम किस प्रकार के संसाधन का उदाहरण है?", opt: ["Potential resource (संभाव्य संसाधन)", "Actual resource", "Ubiquitous resource", "Biotic resource"], ans: 0, exp: "Ladakh's uranium is a potential resource whose full extent is not yet tapped with current technology." },
        { q: "Which of the following is a non-renewable resource?", qHi: "निम्नलिखित में से कौन सा एक अनवीकरणीय संसाधन (Non-renewable resource) है?", opt: ["Petroleum (पेट्रोलियम)", "Solar energy", "Wind energy", "Tidal energy"], ans: 0, exp: "Petroleum has limited reserves and takes millions of years to form, making it non-renewable." },
        { q: "Resources that are found everywhere, like the air we breathe, are called:", qHi: "वे संसाधन जो सभी जगह पाए जाते हैं, जैसे वह वायु जिसमें हम सांस लेते हैं, कहलाते हैं:", opt: ["Ubiquitous resources (सर्वव्यापक संसाधन)", "Localised resources", "Potential resources", "Abiotic resources"], ans: 0, exp: "Resources found everywhere on Earth (like air and sunlight) are ubiquitous resources." },
        { q: "Carefully utilizing resources so that besides meeting the requirements of present, it takes care of future generations is called:", qHi: "संसाधनों का सावधानीपूर्वक उपयोग ताकि वर्तमान आवश्यकताओं के साथ-साथ भावी पीढ़ियों की आवश्यकताओं का भी ध्यान रखा जाए, कहलाता है:", opt: ["Sustainable development (सतत पोषणीय विकास)", "Resource exhaustion", "Economic exploitation", "Industrialization"], ans: 0, exp: "Sustainable development balances resource use today with preservation for tomorrow." },
        { q: "Which of the following is a human-made resource?", qHi: "निम्नलिखित में से कौन सा एक मानव-निर्मित संसाधन है?", opt: ["Medicines to treat cancer (कैंसर उपचार की औषधियाँ)", "Spring water", "Tropical forests", "Iron ore deposits"], ans: 0, exp: "Technology, buildings, bridges, and medicines are human-made resources derived from natural substances." },
        { q: "Improving the quality of people's skills so that they are able to create more resources is known as:", qHi: "लोगों के कौशल में सुधार करना ताकि वे अधिक संसाधनों का निर्माण करने में समर्थ हो सकें, कहलाता है:", opt: ["Human Resource Development (मानव संसाधन विकास)", "Industrial growth", "Urbanization", "Resource depletion"], ans: 0, exp: "Human Resource Development (HRD) focuses on education and healthcare to enhance human capability." },
        { q: "Resources derived from non-living things (like rocks, soils, and minerals) are known as:", qHi: "निर्जीव वस्तुओं से प्राप्त संसाधन (जैसे चट्टानें, मृदा और खनिज) क्या कहलाते हैं?", opt: ["Abiotic resources (अजैव संसाधन)", "Biotic resources", "Renewable resources", "Human resources"], ans: 0, exp: "Abiotic resources originate from non-living physical substances." },
        { q: "Resources found only in certain specific places, such as copper and iron ore, are called:", qHi: "वे संसाधन जो केवल कुछ निश्चित स्थानों पर ही पाए जाते हैं, जैसे तांबा और लौह अयस्क, कहलाते हैं:", opt: ["Localised resources (स्थानिक संसाधन)", "Ubiquitous resources", "Actual resources", "Renewable resources"], ans: 0, exp: "Resources confined to specific geographical locations are localised resources." },
        { q: "Which of the following is NOT a principle of Sustainable Development?", qHi: "निम्नलिखित में से कौन सा सतत पोषणीय विकास का सिद्धांत नहीं है?", opt: ["Maximize the rapid depletion of natural resources (प्राकृतिक संसाधनों का तीव्र दोहन बढ़ाना)", "Respect and care for all forms of life", "Conserve the Earth's vitality and diversity", "Enable communities to care for their own environment"], ans: 0, exp: "Sustainable development seeks to MINIMIZE resource depletion, not maximize it." },
        { q: "Coal deposits in the Ruhr region of Germany are an example of:", qHi: "जर्मनी के रूहर क्षेत्र में कोयले के निक्षेप किस प्रकार के संसाधन का उदाहरण हैं?", opt: ["Actual resource (वास्तविक संसाधन)", "Potential resource", "Ubiquitous resource", "Abiotic potential"], ans: 0, exp: "Ruhr coal is an actual resource whose quantity is surveyed and currently under active exploitation." },
        { q: "Which factor can turn a substance into a resource over time?", qHi: "समय के साथ कौन सा कारक किसी पदार्थ को संसाधन में परिवर्तित कर सकता है?", opt: ["Time and Technology (समय और प्रौद्योगिकी)", "Color", "Weight", "Distance"], ans: 0, exp: "Time and technology are two critical factors that transform raw substances into valuable resources." },
        { q: "What does the 3 R formula in resource conservation stand for?", qHi: "संसाधन संरक्षण में 3 R सूत्र का क्या अर्थ है?", opt: ["Reduce, Reuse, Recycle", "Read, Retain, Recall", "Run, Rest, Repeat", "Real, Rational, Radical"], ans: 0, exp: "The 3 Rs stand for Reduce consumption, Reuse articles, and Recycle waste." },
        { q: "Renewable resources can still be depleted if:", qHi: "नवीकरणीय संसाधन भी समाप्त या प्रभावित हो सकते हैं यदि:", opt: ["They are used recklessly without giving time to replenish (जैसे अंधाधुंध जल दोहन)", "They are kept under ground", "Sunlight shines brightly", "Wind blows fast"], ans: 0, exp: "Careless overexploitation of water, soil, and forests can deplete even renewable stocks." },
        { q: "The stock of a resource refers to:", qHi: "संसाधन का भंडार (Stock of resource) किसे संदर्भित करता है?", opt: ["The amount of resources available for use (उपयोग के लिए उपलब्ध संसाधन की मात्रा)", "The money invested", "The price in market", "The weight of minerals"], ans: 0, exp: "Stock of resource is the total quantity of resources available for human utilization." },
        { q: "Why are humans considered the ultimate resource?", qHi: "मनुष्य को सबसे महत्वपूर्ण संसाधन क्यों माना जाता है?", opt: ["Because only humans can discover, develop, and utilize nature using knowledge and skill", "Because of large population", "Because humans consume resources", "Because humans are biotic"], ans: 0, exp: "Human knowledge, intelligence, and skill transform raw nature into usable wealth." },
        { q: "High speed winds, which were a potential resource 200 years ago, are now:", qHi: "तीव्र गति वाली पवनें, जो 200 वर्ष पूर्व एक संभाव्य संसाधन थीं, आज क्या बन चुकी हैं?", opt: ["An actual resource (वास्तविक संसाधन)", "Non-renewable resource", "Exhausted resource", "Abiotic fossil"], ans: 0, exp: "Windmills today actively generate electricity in Tamil Nadu and Netherlands, making wind an actual resource." },
        { q: "Which of the following is an abiotic, renewable resource?", qHi: "निम्नलिखित में से कौन सा एक अजैव और नवीकरणीय संसाधन है?", opt: ["Water (जल)", "Coal", "Petroleum", "Forests"], ans: 0, exp: "Water is non-living (abiotic) and naturally replenished via the hydrological cycle (renewable)." },
        { q: "Dark soils of the Deccan plateau in Maharashtra are an example of:", qHi: "महाराष्ट्र में दक्कन के पठार की काली मिट्टी किसका उदाहरण है?", opt: ["Actual resource", "Potential resource", "Ubiquitous resource", "Human-made resource"], ans: 0, exp: "Deccan black soil is an extensively cultivated, surveyed actual resource." },
        { q: "Value of a resource means its:", qHi: "संसाधन के 'मूल्य' (Value) का क्या तात्पर्य है?", opt: ["Worth / Importance (महत्व या उपयोगिता)", "Only monetary price", "Weight in kg", "Chemical formula"], ans: 0, exp: "Value signifies worth — which can be economic, ethical, or aesthetic." },
        { q: "Patent means:", qHi: "पेटेंट (Patent) का क्या अर्थ है?", opt: ["Exclusive right over an idea or invention (किसी विचार या आविष्कार पर एकमात्र अधिकार)", "Government tax", "Free sharing of idea", "Buying a shop"], ans: 0, exp: "A patent grants exclusive legal rights over an innovation or commercial process." },
        { q: "Biotic resources include:", qHi: "जैव संसाधनों में शामिल हैं:", opt: ["Flora and Fauna (वनस्पति एवं जीव-जंतु)", "Rocks and Minerals", "Metals", "Air and Sunlight"], ans: 0, exp: "Biotic resources are living organisms, including plants, wildlife, and marine life." },
        { q: "Which energy source is clean, non-polluting, and infinite in human timescale?", qHi: "कौन सा ऊर्जा स्रोत स्वच्छ, प्रदूषण-मुक्त और मानव समय-पैमाने पर असीमित है?", opt: ["Solar energy (सौर ऊर्जा)", "Coal", "Petroleum", "Diesel"], ans: 0, exp: "Solar energy is inexhaustible and emits no pollutants during operation." },
        { q: "Wind farms producing electricity in Nagercoil in Tamil Nadu are tapping:", qHi: "तमिलनाडु के नागरकोइल में पवन चक्कियों द्वारा बिजली का उत्पादन किस ऊर्जा का उपयोग है?", opt: ["Wind energy (पवन ऊर्जा — नवीकरणीय)", "Thermal energy", "Nuclear energy", "Geothermal energy"], ans: 0, exp: "Nagercoil wind farm utilizes renewable wind kinetic energy." },
        { q: "Which of the following causes depletion of the water table globally?", qHi: "वैश्विक स्तर पर भूजल स्तर के नीचे गिरने का मुख्य कारण क्या है?", opt: ["Reckless overuse and deforestation (अंधाधुंध दोहन एवं वनों की कटाई)", "Rainfall", "Afforestation", "Solar radiation"], ans: 0, exp: "Over-extraction of groundwater for irrigation and domestic use without replenishment depletes water tables." },
        { q: "The exclusive right to an invention protects:", qHi: "किसी आविष्कार पर विशेष अधिकार क्या सुरक्षा प्रदान करता है?", opt: ["Intellectual property from unauthorized commercial copying", "Government lands", "Mineral mines", "Air quality"], ans: 0, exp: "Patents protect intellectual property rights and incentivize research." },
        { q: "Which international day is observed every year on June 5 to promote environmental awareness?", qHi: "पर्यावरण जागरूकता को बढ़ावा देने के लिए प्रत्येक वर्ष 5 जून को कौन सा दिवस मनाया जाता है?", opt: ["World Environment Day (विश्व पर्यावरण दिवस)", "Earth Day", "Water Day", "Forest Day"], ans: 0, exp: "June 5 is celebrated globally as World Environment Day." },
        { q: "Resource conservation means:", qHi: "संसाधन संरक्षण का क्या तात्पर्य है?", opt: ["Using resources carefully and giving them time to get renewed", "Stopping the use of all resources forever", "Selling resources to other nations", "Burning resources"], ans: 0, exp: "Conservation implies judicious consumption alongside natural replenishment." },
        { q: "Petroleum is also affectionately referred to in commerce as:", qHi: "वाणिज्य में पेट्रोलियम को इसके अत्यधिक आर्थिक महत्व के कारण क्या कहा जाता है?", opt: ["Black Gold (काला सोना)", "Liquid Silver", "Brown Diamond", "Yellow Platinum"], ans: 0, exp: "Petroleum and its derivatives are called 'Black Gold' due to their enormous commercial value." },
        { q: "Sustainable development ensures that:", qHi: "सतत पोषणीय विकास यह सुनिश्चित करता है कि:", opt: ["Present needs are met without compromising future generations' ability to meet theirs", "Only present generation consumes all resources", "Technology is banned", "Economy is stopped"], ans: 0, exp: "It harmonizes environmental preservation with present human progress for lasting posterity." }
      ];

      const item = sstQuestions[qNum - 1];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  },

  // =========================================================================
  // HINDI VASANT PART 3 CHAPTER 1: ध्वनि (सूर्यकांत त्रिपाठी 'निराला') व व्याकरण
  // =========================================================================
  {
    id: "ncert-c8-hin01",
    classLevel: "Class 8",
    exam: "Class 8",
    examTag: "NCERT Class 8 • Hindi Vasant",
    subject: "Hindi",
    subjectCode: "HINDI",
    chapterNo: 1,
    bookName: "Vasant Part 3 (वसंत भाग-3) — NCERT Class 8",
    title: "Chapter 1: ध्वनि (कविता — सूर्यकांत त्रिपाठी 'निराला') व हिन्दी व्याकरण",
    titleHi: "अध्याय 1: ध्वनि (कविता — सूर्यकांत त्रिपाठी 'निराला') व हिन्दी व्याकरण",
    pdfUrl: "/ncert_books/class8/hindi_ch01.pdf",
    pdfUrlHi: "/ncert_books/class8/hindi_ch01.pdf",
    competitionEdge: "A must-study chapter for CTET Paper 1 & 2 (Hindi Language), BPSC Teacher Recruitment (TRE 4.0), State TETs, KVS/NVS TGT Hindi, and UP TGT/PGT. Covers Mahapran Nirala's life and poetic genius, themes of youth awakening and optimism, along with rigorous Hindi grammar: Varn Vichar (Swar, Vyanjan, Sthan of articulation), Sandhi, Upsarg-Pratyay, Vilom, and Paryayvachi.",
    competitionEdgeHi: "सीटेट पेपर 1 व 2 (हिन्दी भाषा), बीपीएससी शिक्षक भर्ती (TRE 4.0), केवीएस/एनवीएस टीजीटी, और यूपी टीजीटी के लिए अनिवार्य अध्याय। इसमें महाप्राण 'निराला' की काव्यगत विशेषताएँ, आशावाद व युवा चेतना का संदेश, तथा विस्तृत हिन्दी व्याकरण: वर्ण-विचार (स्वर, व्यंजन, उच्चारण स्थान), स्वर संधि, उपसर्ग-प्रत्यय, पर्यायवाची, विलोम व मुहावरे शामिल हैं।",
    sections: [
      {
        heading: "1. NCERT Core Narrative: ध्वनि कविता का मूल भाव एवं कवि परिचय",
        headingHi: "1. एनसीईआरटी मूल पाठ: 'ध्वनि' कविता का भावार्थ, निराला का जीवन दर्शन एवं व्याकरण",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              <strong>"अभी न होगा मेरा अंत, अभी-अभी ही तो आया है मेरे वन में मृदुल वसंत, अभी न होगा मेरा अंत।"</strong><br/>
              This inspiring poem 'Dhwani' was composed by the revolutionary poet of Hindi literature, <strong>Suryakant Tripathi 'Nirala'</strong>. The poem delivers a resolute message of boundless optimism, energy, and duty towards youth awakening, discarding all gloom and lethargy!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Mahapran Nirala & Poetic Concepts</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Core Information</th>
                  <th>Competitive Importance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Poet (कवि)</strong></td>
                  <td>Suryakant Tripathi 'Nirala' (सूर्यकांत त्रिपाठी 'निराला') (1896 – 1961)</td>
                  <td>Known as 'Mahapran' (महाप्राण). Pillar of Chhayavaad (छायावाद के चार स्तंभों में से एक).</td>
                </tr>
                <tr>
                  <td><strong>Major Works</strong></td>
                  <td>Anamika (अनामिका), Parimal (परिमल), Geetika (गीतिका), Kukurmutta (कुकुरमुत्ता), Saroj Smriti (सरोज स्मृति - Hindi's greatest elegy)</td>
                  <td>Repeatedly asked in CTET, BPSC, and State PSC examinations!</td>
                </tr>
                <tr>
                  <td><strong>Central Metaphor</strong></td>
                  <td>Spring (वसंत) represents youth, freshness, and creativity; Sleepy buds (निद्रित कलियाँ) represent despondent, inactive youth.</td>
                  <td>Theme of social rejuvenation and optimism.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">📚 Comprehensive Hindi Grammar: Varn Vichar & Sandhi</div>
            <ul>
              <li><strong>Varn Vichar (वर्ण विचार):</strong>
                <ul>
                  <li><strong>Swar (स्वर - 11):</strong> अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ।</li>
                  <li><strong>Vyanjan (व्यंजन - 33):</strong> Sparsh (स्पर्श - 25: क-वर्ग से प-वर्ग), Antahstha (अंतःस्थ - 4: य, र, ल, व), Ushma (ऊष्म - 4: श, ष, स, ह)।</li>
                  <li><strong>Sanyukt Vyanjan (संयुक्त व्यंजन - 4):</strong> क्ष (क्+ष्), त्र (त्+र्), ज्ञ (ज्+ञ्), श्र (श्+र्)।</li>
                </ul>
              </li>
              <li><strong>Swar Sandhi (स्वर संधि के 5 भेद):</strong>
                <ol>
                  <li><strong>दीर्घ संधि:</strong> अ/आ + अ/आ = आ (विद्या + आलय = विद्यालय)।</li>
                  <li><strong>गुण संधि:</strong> अ/आ + इ/ई = ए, अ/आ + उ/ऊ = ओ, अ/आ + ऋ = अर् (महा + उत्सव = महोत्सव, देव + ऋषि = देवर्षि)।</li>
                  <li><strong>वृद्धि संधि:</strong> अ/आ + ए/ऐ = ऐ, अ/आ + ओ/औ = औ (सदा + एव = सदैव, महा + औषधि = महौषधि)।</li>
                  <li><strong>यण संधि:</strong> इ/ई + असमान स्वर = य्, उ/ऊ + असमान स्वर = व् (यदि + अपि = यद्यपि, सु + आगत = स्वागत)।</li>
                  <li><strong>अयादि संधि:</strong> ए + स्वर = अय्, ओ + स्वर = अव् (ने + अन = नयन, पौ + अक = पावक)।</li>
                </ol>
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              <strong>"अभी न होगा मेरा अंत, अभी-अभी ही तो आया है मेरे वन में मृदुल वसंत, अभी न होगा मेरा अंत।"</strong><br/>
              'ध्वनि' कविता महाप्राण <strong>सूर्यकांत त्रिपाठी 'निराला'</strong> द्वारा रचित एक अत्यंत प्रेरणादायक कविता है। यह कविता युवा पीढ़ी को आलस्य, प्रमाद और निराशा त्यागकर उत्साहपूर्वक कर्मक्षेत्र में उतरने का ओजस्वी संदेश देती है!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ कवि परिचय एवं प्रमुख कृतियाँ</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>विषय</th>
                  <th>मुख्य तथ्य</th>
                  <th>परीक्षा उपयोगी बिंदु</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>कवि</strong></td>
                  <td>सूर्यकांत त्रिपाठी 'निराला' (1896 – 1961), जन्म: मेदिनीपुर (बंगाल), मूल निवासी: गढ़ाकोला (उन्नाव, उप्र)</td>
                  <td>हिन्दी साहित्य में 'महाप्राण' और मुक्त छंद के प्रवर्तक। छायावाद के प्रमुख चार स्तंभों (प्रसाद, पंत, निराला, महादेवी) में से एक।</td>
                </tr>
                <tr>
                  <td><strong>प्रमुख काव्य संग्रह</strong></td>
                  <td>अनामिका, परिमल, गीतिका, कुकुरमुत्ता, नए पत्ते, राम की शक्ति पूजा, सरोज स्मृति</td>
                  <td>'सरोज स्मृति' हिन्दी का सर्वश्रेष्ठ शोकगीत माना जाता है।</td>
                </tr>
                <tr>
                  <td><strong>कविता का प्रतीक विधान</strong></td>
                  <td>'वसंत' जीवन के यौवन, उल्लास और सृजन का प्रतीक है; 'निद्रित कलियाँ' आलसी व निराश युवाओं की प्रतीक हैं।</td>
                  <td>कवि अपने कोमल करों के स्पर्श से युवाओं में नवचेतना का संचार करना चाहता है।</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">📚 संपूर्ण हिन्दी व्याकरण: वर्ण-विचार एवं संधि</div>
            <ul>
              <li><strong>वर्ण-विचार:</strong>
                <ul>
                  <li><strong>स्वर (11):</strong> ह्रस्व (अ, इ, उ, ऋ) तथा दीर्घ (आ, ई, ऊ, ए, ऐ, ओ, औ)।</li>
                  <li><strong>व्यंजन (33):</strong> स्पर्श (25: कण्ठ्य, तालव्य, मूर्धन्य, दन्त्य, ओष्ठ्य), अंतःस्थ (य, र, ल, व), ऊष्म (श, ष, स, ह)।</li>
                  <li><strong>अयोगवाह (2):</strong> अनुस्वार (ं) और विसर्ग (ः)।</li>
                  <li><strong>संयुक्त व्यंजन (4):</strong> क्ष = क् + ष् + अ, त्र = त् + र् + अ, ज्ञ = ज् + ञ् + अ, श्र = श् + र् + अ।</li>
                </ul>
              </li>
              <li><strong>स्वर संधि के नियम:</strong>
                <ol>
                  <li><strong>दीर्घ:</strong> समान स्वरों के मेल से दीर्घ (हिम + आलय = हिमालय)।</li>
                  <li><strong>गुण:</strong> अ/आ + इ/ई = ए (नर + ईश = नरेश), अ/आ + उ/ऊ = ओ (सूर्य + उदय = सूर्योदय)।</li>
                  <li><strong>वृद्धि:</strong> अ/आ + ए/ऐ = ऐ (एक + एक = एकैक), अ/आ + ओ/औ = औ (वन + औषधि = वनौषधि)।</li>
                  <li><strong>यण:</strong> इ/ई का य् (इति + आदि = इत्यादि), उ/ऊ का व् (अनु + अय = अन्वय)।</li>
                  <li><strong>अयादि:</strong> ए का अय् (शे + अन = शयन), पो + अन = पवन, पौ + अक = पावक।</li>
                </ol>
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: Array.from({ length: 30 }, (_, i) => {
      const qNum = i + 1;
      const hinQuestions = [
        { q: "'ध्वनि' कविता के रचयिता कौन हैं?", qHi: "'ध्वनि' कविता के रचयिता कौन हैं?", opt: ["सूर्यकांत त्रिपाठी 'निराला'", "जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा"], ans: 0, exp: "'ध्वनि' कविता के रचयिता छायावादी युग के महाप्राण सूर्यकांत त्रिपाठी 'निराला' हैं।" },
        { q: "'अभी न होगा मेरा अंत' पंक्ति में कवि का क्या दृष्टिकोण प्रकट होता है?", qHi: "'अभी न होगा मेरा अंत' पंक्ति में कवि का क्या दृष्टिकोण प्रकट होता है?", opt: ["अटूट आशावाद और उत्साह (Optimism)", "निराशा और हताशा", "मृत्यु का भय", "अहंकार"], ans: 0, exp: "कवि का मानना है कि उसके जीवन में अभी यौवन रूपी वसंत का आगमन हुआ है, अतः अभी उसका अंत नहीं हो सकता। यह आशावाद को दर्शाता है।" },
        { q: "कविता में 'मृदुल वसंत' किसका प्रतीक है?", qHi: "कविता में 'मृदुल वसंत' किसका प्रतीक है?", opt: ["जीवन के यौवन और उल्लास का", "बुढ़ापे का", "मृत्यु का", "दुःख का"], ans: 0, exp: "मृदुल वसंत मानव जीवन के यौवन, नई उमंग और नव-सृजन का प्रतीक है।" },
        { q: "कवि सोई हुई कलियों पर क्या फेरना चाहता है?", qHi: "कवि सोई हुई कलियों पर क्या फेरना चाहता है?", opt: ["अपने स्वप्निल और कोमल हाथ (कर)", "पानी", "काँटे", "हवा"], ans: 0, exp: "कवि 'फेरूंगा निद्रित कलियों पर / अपने स्वप्न-मृदुल-कर' कहकर युवाओं को आलस्य से जगाना चाहता है।" },
        { q: "सूर्यकांत त्रिपाठी 'निराला' को हिन्दी साहित्य में किस नाम से अभिहित किया जाता है?", qHi: "सूर्यकांत त्रिपाठी 'निराला' को हिन्दी साहित्य में किस उपनाम से जाना जाता है?", opt: ["महाप्राण (Mahapran)", "प्रकृति का सुकुमार कवि", "कठिन काव्य का प्रेत", "राष्ट्रकवि"], ans: 0, exp: "निराला जी को उनकी ओजस्विता, निर्भीकता और छंद-मुक्ति के कारण 'महाप्राण' कहा जाता है।" },
        { q: "'प्रत्युष' शब्द का सही अर्थ क्या है?", qHi: "'प्रत्युष' शब्द का सही अर्थ क्या है?", opt: ["प्रातःकाल / भोर (Dawn)", "सायंकाल", "दोपहर", "मध्यरात्रि"], ans: 0, exp: "प्रत्युष का अर्थ प्रातःकाल, भोर अथवा सवेरा होता है।" },
        { q: "'तंद्रालस' शब्द में कौन सी संधि है?", qHi: "'तंद्रालस' शब्द में कौन सी संधि है?", opt: ["दीर्घ स्वर संधि (तंद्रा + अलस)", "गुण संधि", "यण संधि", "वृद्धि संधि"], ans: 0, exp: "तंद्रा + अलस = तंद्रालस (आ + अ = आ), यह दीर्घ स्वर संधि है।" },
        { q: "'पुष्प-पुष्प से तंद्रालस लालसा खींच लूंगा मैं' में कौन सा अलंकार है?", qHi: "'पुष्प-पुष्प से तंद्रालस लालसा खींच लूंगा मैं' में 'पुष्प-पुष्प' में कौन सा अलंकार है?", opt: ["पुनरुक्ति प्रकाश अलंकार", "यमक अलंकार", "श्लेष अलंकार", "उपमा अलंकार"], ans: 0, exp: "जब एक ही शब्द की बिना अर्थ परिवर्तन के आवृत्ति हो, तो वहाँ पुनरुक्ति प्रकाश अलंकार होता है।" },
        { q: "हिन्दी वर्णमाला में स्पर्श व्यंजनों की कुल संख्या कितनी है?", qHi: "हिन्दी वर्णमाला में स्पर्श व्यंजनों की कुल संख्या कितनी है?", opt: ["25", "33", "11", "52"], ans: 0, exp: "क-वर्ग से प-वर्ग तक प्रत्येक वर्ग में 5 व्यंजन होते हैं; 5 × 5 = 25 स्पर्श व्यंजन हैं।" },
        { q: "'क्ष' संयुक्त व्यंजन किन दो वर्णों के मेल से बना है?", qHi: "'क्ष' संयुक्त व्यंजन किन दो वर्णों के मेल से बना है?", opt: ["क् + ष्", "क् + छ्", "च् + छ्", "क् + स्"], ans: 0, exp: "क्ष = क् + ष् + अ। यह एक संयुक्त व्यंजन है।" },
        { q: "'सूर्योदय' शब्द का सही संधि विच्छेद क्या है?", qHi: "'सूर्योदय' शब्द का सही संधि विच्छेद क्या है?", opt: ["सूर्य + उदय (गुण संधि)", "सूर्य + दय", "सूर्यो + दय", "सूर + उदय"], ans: 0, exp: "सूर्य + उदय = सूर्योदय (अ + उ = ओ), यह गुण स्वर संधि है।" },
        { q: "'इत्यादि' शब्द का संधि विच्छेद क्या होगा?", qHi: "'इत्यादि' शब्द का संधि विच्छेद क्या होगा?", opt: ["इति + आदि (यण संधि)", "इत + आदि", "इत्या + दि", "इती + आदि"], ans: 0, exp: "इति + आदि = इत्यादि (इ + आ = या), यह यण स्वर संधि है।" },
        { q: "'सदा + एव' का सही संधि रूप क्या है?", qHi: "'सदा + एव' का सही संधि रूप क्या है?", opt: ["सदैव (वृद्धि संधि)", "सदाव", "सदेव", "सदाएव"], ans: 0, exp: "सदा + एव = सदैव (आ + ए = ऐ), यह वृद्धि स्वर संधि है।" },
        { q: "'पवन' शब्द का सही संधि विच्छेद क्या है?", qHi: "'पवन' शब्द का सही संधि विच्छेद क्या है?", opt: ["पो + अन (अयादि संधि)", "पौ + अन", "प + वन", "पाव + न"], ans: 0, exp: "पो + अन = पवन (ओ + अ = अव्), यह अयादि स्वर संधि है।" },
        { q: "'पावक' शब्द का सही संधि विच्छेद क्या है?", qHi: "'पावक' शब्द का सही संधि विच्छेद क्या है?", opt: ["पौ + अक (अयादि संधि)", "पो + अक", "पाव + क", "पा + वक"], ans: 0, exp: "पौ + अक = पावक (औ + अ = आव्), यह अयादि स्वर संधि है।" },
        { q: "निम्नलिखित में से कौन सा शब्द 'वसंत' का पर्यायवाची नहीं है?", qHi: "निम्नलिखित में से कौन सा शब्द 'वसंत' का पर्यायवाची नहीं है?", opt: ["जलद (बादल)", "ऋतुराज", "मधुमास", "कुसुमाकर"], ans: 0, exp: "जलद का अर्थ बादल होता है, जबकि ऋतुराज, मधुमास और कुसुमाकर वसंत के पर्यायवाची हैं।" },
        { q: "'अनुराग' शब्द का सही विलोम शब्द क्या है?", qHi: "'अनुराग' शब्द का सही विलोम शब्द क्या है?", opt: ["विराग", "नफ़रत", "द्वेष", "क्रोध"], ans: 0, exp: "अनुराग का विलोम विराग होता है।" },
        { q: "'अमृत' शब्द का पर्यायवाची शब्द कौन सा है?", qHi: "'अमृत' शब्द का पर्यायवाची शब्द कौन सा है?", opt: ["सुधा / पीयूष", "गरल", "वारि", "अनल"], ans: 0, exp: "सुधा, पीयूष, सोम और अमिय अमृत के पर्यायवाची हैं। गरल विष का पर्यायवाची है।" },
        { q: "'प्रत्येक' शब्द में कौन सा उपसर्ग लगा है?", qHi: "'प्रत्येक' शब्द में कौन सा उपसर्ग लगा है?", opt: ["प्रति (प्रति + एक)", "प्र", "प्रा", "परी"], ans: 0, exp: "प्रति + एक = प्रत्येक। इसमें 'प्रति' उपसर्ग प्रयुक्त हुआ है।" },
        { q: "'सफलता' शब्द में कौन सा प्रत्यय जुड़ा है?", qHi: "'सफलता' शब्द में कौन सा प्रत्यय जुड़ा है?", opt: ["ता (सफल + ता)", "ल", "ताफल", "आ"], ans: 0, exp: "सफल मूल शब्द में भाववाचक तद्धित प्रत्यय 'ता' जुड़ा है।" },
        { q: "छायावाद के चार प्रमुख स्तंभों में कौन शामिल नहीं हैं?", qHi: "छायावाद के चार प्रमुख स्तंभों में कौन शामिल नहीं हैं?", opt: ["रामधारी सिंह 'दिनकर'", "जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी 'निराला'", "सुमित्रानंदन पंत"], ans: 0, exp: "छायावाद के चार स्तंभ हैं: प्रसाद, पंत, निराला और महादेवी वर्मा। दिनकर जी राष्ट्रकवि व उत्तर-छायावादी हैं।" },
        { q: "'सरोज स्मृति' किसकी प्रसिद्ध शोकगीत रचना है?", qHi: "'सरोज स्मृति' किसकी प्रसिद्ध शोकगीत रचना है?", opt: ["सूर्यकांत त्रिपाठी 'निराला'", "मैथिलीशरण गुप्त", "हरिवंश राय बच्चन", "महादेवी वर्मा"], ans: 0, exp: "निराला जी ने अपनी दिवंगत पुत्री सरोज की स्मृति में 'सरोज स्मृति' की रचना की, जो हिन्दी का प्रथम शोकगीत है।" },
        { q: "'कुकुरमुत्ता' और 'अनामिका' के रचनाकार कौन हैं?", qHi: "'कुकुरमुत्ता' और 'अनामिका' के रचनाकार कौन हैं?", opt: ["सूर्यकांत त्रिपाठी 'निराला'", "अज्ञेय", "मुक्तिबोध", "नागार्जुन"], ans: 0, exp: "कुकुरमुत्ता, अनामिका, परिमल और गीतिका निराला जी की अमर कृतियाँ हैं।" },
        { q: "'उज्ज्वल' शब्द की शुद्ध वर्तनी कौन सी है?", qHi: "'उज्ज्वल' शब्द की शुद्ध वर्तनी कौन सी है?", opt: ["उज्ज्वल (उत् + ज्वल)", "उज्वल", "उज्जवल", "उजवल"], ans: 0, exp: "उत् + ज्वल = उज्ज्वल। इसमें दो बार आधा 'ज' (ज्ज) आता है।" },
        { q: "'आँखें खुलना' मुहावरे का सही अर्थ क्या है?", qHi: "'आँखें खुलना' मुहावरे का सही अर्थ क्या है?", opt: ["सचेत होना / वास्तविकता का ज्ञान होना", "सोकर उठना", "आँखों में जलन होना", "अंधा होना"], ans: 0, exp: "आँखें खुलना का लाक्षणिक अर्थ होश में आना या वास्तविकता का बोध होना है।" },
        { q: "'कमल' शब्द का पर्यायवाची कौन सा है?", qHi: "'कमल' शब्द का पर्यायवाची कौन सा है?", opt: ["राजीव / अरविंद / जलज", "वारिद", "अंबुद", "तोयद"], ans: 0, exp: "राजीव, अरविंद, पंकज, सरोज, जलज कमल के पर्यायवाची हैं।" },
        { q: "हिन्दी में अंतःस्थ व्यंजन कौन से हैं?", qHi: "हिन्दी में अंतःस्थ व्यंजन कौन से हैं?", opt: ["य, र, ल, व", "श, ष, स, ह", "क, ख, ग, घ", "क्ष, त्र, ज्ञ, श्र"], ans: 0, exp: "य, र, ल, व अंतःस्थ व्यंजन (Semi-vowels) कहलाते हैं।" },
        { q: "हिन्दी में ऊष्म व्यंजन कौन से हैं?", qHi: "हिन्दी में ऊष्म व्यंजन कौन से हैं?", opt: ["श, ष, स, ह", "य, र, ल, व", "ड, ढ", "क, च, ट, त"], ans: 0, exp: "श, ष, स, ह ऊष्म (संघर्षी) व्यंजन कहलाते हैं।" },
        { q: "'निराला' जी का जन्म कहाँ हुआ था?", qHi: "'निराला' जी का जन्म कहाँ हुआ था?", opt: ["मेदिनीपुर (पश्चिम बंगाल)", "उन्नाव (उत्तर प्रदेश)", "वाराणसी", "इलाहाबाद"], ans: 0, exp: "निराला जी का जन्म 1896 में बंगाल के मेदिनीपुर (महिषादल राज्य) में हुआ था, यद्यपि उनका पैतृक गांव गढ़ाकोला (उन्नाव) था।" },
        { q: "कविता में कवि किनका आलस्य दूर भगाना चाहता है?", qHi: "कविता में कवि किनका आलस्य दूर भगाना चाहता है?", opt: ["देश के नवयुवकों का (प्रतीक: निद्रित कलियों का)", "वृद्धों का", "शिशुओं का", "शत्रुओं का"], ans: 0, exp: "कवि देश की युवा पीढ़ी (निद्रित कलियों) में नया जीवन, उत्साह और चेतना भरना चाहता है।" }
      ];

      const item = hinQuestions[qNum - 1];
      return {
        id: qNum,
        q: item.q,
        qHi: item.qHi,
        options: item.opt,
        optionsHi: item.opt,
        ans: item.ans,
        difficulty: qNum > 20 ? "High" : "Moderate",
        explanation: item.exp,
        explanationHi: item.exp
      };
    })
  }
];

module.exports = chapters;
