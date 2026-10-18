/**
 * scratch/build_class7_sci_sst_hindi.js
 * NCERT Class 7 Science, Social Science & Hindi
 * 1. Science Ch 1: Nutrition in Plants (पादपों में पोषण)
 * 2. SST Geography Ch 1: Environment (हमारा पर्यावरण)
 * 3. Hindi Vasant 2 Ch 1: हम पंछी उन्मुक्त गगन के व हिंदी व्याकरण
 * 
 * Exactly 30 bilingual competition-grade MCQs per chapter (90 MCQs total).
 */

module.exports = [
  // ==========================================
  // SCIENCE CHAPTER 1: Nutrition in Plants (पादपों में पोषण)
  // ==========================================
  {
    id: "ncert-c7-sci01",
    classLevel: "Class 7",
    subject: "Science (विज्ञान)",
    subjectCode: "EVS",
    chapterNo: 1,
    bookName: "Science (NCERT Class 7)",
    title: "Chapter 1: Nutrition in Plants (पादपों में पोषण)",
    titleHi: "अध्याय 1: पादपों में पोषण (Photosynthesis & Plant Nutrition)",
    readingTime: "25 mins read",
    badge: "Botany & Ecology Core",
    desc: "NCERT Class 7 Science Chapter 1: Modes of nutrition (autotrophic & heterotrophic), photosynthesis mechanism, chlorophyll, stomata & guard cells, parasitic plants (Cuscuta), insectivorous plants (Pitcher plant), saprotrophs, symbiosis, lichens, and Rhizobium nitrogen fixation.",
    descHi: "एनसीईआरटी कक्षा 7 विज्ञान अध्याय 1: पोषण की विधियाँ (स्वपोषी एवं विषमपोषी), प्रकाश-संश्लेषण प्रक्रिया, क्लोरोफिल, रंध्र (Stomata) व द्वार कोशिकाएँ, परजीवी पादप (अमरबेल), कीटभक्षी पादप (घटपर्णी), मृतजीवी (कवक), सहजीविता, लाइकेन एवं राइजोबियम जीवाणु द्वारा नाइट्रोजन स्थिरीकरण।",
    competitionEdge: "Guaranteed 2-3 questions in CTET Paper 2 (Maths & Science), BPSC TRE 4.0 Middle (6-8), SSC CGL/CHSL, and State TETs. Stomata mechanism, starch iodine test, Lichen symbiotic partners, and Rhizobium root nodules.",
    competitionEdgeHi: "CTET पेपर 2 (विज्ञान) और BPSC शिक्षक भर्ती में हर साल आने वाले प्रश्न: प्रकाश-संश्लेषण का रासायनिक समीकरण, रंध्रों का खुलना-बंद होना, अमरबेल (Cuscuta) के चूषक (Haustoria), कीटभक्षी घटपर्णी (Nepenthes) और लाइकेन में शैवाल-कवक सहजीविता।",
    pdfUrl: "/ncert_books/class7/science_ch01.pdf",
    pdfUrlHi: "/ncert_books/class7/science_ch01_hi.pdf",
    pdfName: "NCERT_Class7_Science_Ch01_Nutrition_in_Plants.pdf",
    pdfSize: "5.28 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Autotrophic Nutrition & Photosynthesis",
        headingHi: "1. एनसीईआरटी मूल पाठ: स्वपोषी पोषण एवं प्रकाश-संश्लेषण की क्रियाविधि",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear science aspirants! Green plants are the primary producers of our planet. They are <strong>Autotrophs</strong> (Auto = self, trophos = nourishment). Leaves are the 'food factories' of plants where solar energy is captured by the green pigment <strong>Chlorophyll</strong> and converted into chemical energy (glucose) via photosynthesis!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Photosynthesis Equation & Stomata Anatomy</div>
            <p><strong>The Universal Chemical Equation of Photosynthesis:</strong></p>
            <p>$$\\mathbf{6CO_2 + 6H_2O \\xrightarrow[\\text{Sunlight}]{\\text{Chlorophyll}} C_6H_{12}O_6 \\text{ (Glucose)} + 6O_2 \\uparrow}$$</p>
            <ul>
              <li><strong>Raw Materials:</strong>
                <ul>
                  <li><strong>Carbon dioxide ($CO_2$):</strong> Absorbed from air through tiny pores on leaves called <strong>Stomata</strong>, which are guarded by bean-shaped <strong>Guard Cells</strong>.</li>
                  <li><strong>Water ($H_2O$) & Minerals:</strong> Transported from roots to leaves through pipe-like vessels (Xylem).</li>
                  <li><strong>Chlorophyll:</strong> Green pigment residing in chloroplasts that absorbs sunlight.</li>
                  <li><strong>Solar Energy:</strong> The ultimate source of all energy on Earth!</li>
                </ul>
              </li>
              <li><strong>By-Products:</strong> Oxygen ($O_2$) is released into the atmosphere, and glucose is converted and stored as <strong>Starch</strong>.</li>
              <li><strong>Starch Test:</strong> When a few drops of <strong>dilute Iodine solution</strong> are added to a boiled, decolored leaf, it turns <strong>blue-black</strong> in the presence of starch!</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय शिक्षक भर्ती अभ्यर्थियों! हरे पादप पृथ्वी के प्राथमिक उत्पादक हैं। वे <strong>स्वपोषी (Autotrophs)</strong> कहलाते हैं। पत्तियाँ पादप की 'खाद्य फैक्ट्रियाँ' हैं। पत्तियों में उपस्थित हरा वर्णक <strong>क्लोरोफिल (पर्णहरित)</strong> सौर ऊर्जा को अवशोषित कर उसे रासायनिक ऊर्जा (ग्लूकोज) में बदलता है। CTET और BPSC में इसका रासायनिक समीकरण और रंध्रों की क्रियाविधि बार-बार पूछी जाती है!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ प्रकाश-संश्लेषण का रासायनिक समीकरण एवं रंध्र</div>
            <p><strong>प्रकाश-संश्लेषण का सार्वभौमिक रासायनिक समीकरण:</strong></p>
            <p>$$\\mathbf{6CO_2 + 6H_2O \\xrightarrow[\\text{सूर्य का प्रकाश}]{\\text{क्लोरोफिल}} C_6H_{12}O_6 \\text{ (ग्लूकोज)} + 6O_2 \\uparrow}$$</p>
            <ul>
              <li><strong>कच्ची सामग्रियां (Raw Materials):</strong>
                <ul>
                  <li><strong>कार्बन डाइऑक्साइड ($CO_2$):</strong> पत्तियों की सतह पर उपस्थित सूक्ष्म छिद्रों <strong>रंध्र (Stomata)</strong> द्वारा ली जाती है, जो वृक्क (गुर्दे) के आकार की <strong>द्वार कोशिकाओं (Guard Cells)</strong> द्वारा घिरे होते हैं।</li>
                  <li><strong>जल एवं खनिज:</strong> जड़ों द्वारा अवशोषित होकर जाइलम वाहिकाओं द्वारा पत्तियों तक पहुँचते हैं।</li>
                  <li><strong>क्लोरोफिल:</strong> पत्तियों का हरा वर्णक जो प्रकाश ऊर्जा को अवशोषित करता है।</li>
                </ul>
              </li>
              <li><strong>उप-उत्पाद:</strong> ऑक्सीजन वायुमंडल में विमुक्त होती है और कार्बोहाइड्रेट अंततः <strong>स्टार्च (मंड)</strong> के रूप में संचित होता है।</li>
              <li><strong>स्टार्च परीक्षण:</strong> उबाली गई पत्ती पर <strong>आयोडीन विलयन</strong> डालने पर नीला-काला (Blue-Black) रंग स्टार्च की उपस्थिति प्रमाणित करता है!</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Other Modes of Nutrition in Plants (Heterotrophic, Parasitic, Insectivorous, Symbiosis)",
        headingHi: "2. पादपों में पोषण की अन्य विधियाँ (परजीवी, कीटभक्षी, मृतजीवी एवं सहजीविता)",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Non-Green Plant Nutrition Matrix</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Mode of Nutrition</th>
                  <th>Key Features</th>
                  <th>Classic NCERT Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Parasites (परजीवी)</strong></td>
                  <td>Lacks chlorophyll; produces special root-like structures called <em>haustoria</em> that penetrate host vascular tissue to steal food and water. Harmful to host.</td>
                  <td><strong>Cuscuta (अमरबेल)</strong></td>
                </tr>
                <tr>
                  <td><strong>Insectivorous Plants (कीटभक्षी पादप)</strong></td>
                  <td>Green autotrophs growing in nitrogen-deficient bogs/swamps; trap and digest insects with enzymes to fulfill nitrogen requirements.</td>
                  <td><strong>Pitcher Plant (घटपर्णी - Nepenthes)</strong>, Venus Flytrap, Drosera (Sundew), Utricularia (Bladderwort)</td>
                </tr>
                <tr>
                  <td><strong>Saprotrophs (मृतजीवी)</strong></td>
                  <td>Secrete digestive juices onto dead and decaying organic matter, converting it into a solution, and absorb nutrients.</td>
                  <td><strong>Fungi</strong> (Bread mould / <em>Rhizopus</em>, Mushrooms, Yeast)</td>
                </tr>
                <tr>
                  <td><strong>Symbiosis (सहजीविता)</strong></td>
                  <td>Mutually beneficial association between two different organisms living together ($+/+$ relationship).</td>
                  <td>
                    1. <strong>Lichens (लाइकेन):</strong> Alga (provides food via photosynthesis) + Fungus (provides shelter, water, minerals).<br/>
                    2. <strong>Rhizobium Bacteria:</strong> In root nodules of legumes (gram, peas, moong) fixing atmospheric $N_2$.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ विषमपोषी पादपों की मास्टर वर्गीकरण तालिका</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>पोषण की विधि</th>
                  <th>प्रमुख लक्षण</th>
                  <th>एनसीईआरटी के प्रसिद्ध उदाहरण</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>परजीवी (Parasite)</strong></td>
                  <td>क्लोरोफिल नहीं होता; पोषी (Host) पादप से भोजन चुराने के लिए चूषक (Haustoria) बनाता है।</td>
                  <td><strong>अमरबेल (Cuscuta)</strong></td>
                </tr>
                <tr>
                  <td><strong>कीटभक्षी (Insectivorous)</strong></td>
                  <td>हरे पौधे जो नाइट्रोजन की कमी वाली दलदली मिट्टी में उगते हैं; नाइट्रोजन पूर्ति के लिए कीटों का भक्षण करते हैं।</td>
                  <td><strong>घटपर्णी (Pitcher Plant - Nepenthes)</strong>, वीनस फ्लाईट्रैप, ड्रोसेरा</td>
                </tr>
                <tr>
                  <td><strong>मृतजीवी (Saprotrophs)</strong></td>
                  <td>मृत एवं सड़े-गले पदार्थों पर पाचक रस स्रावित कर पोषक तत्व अवशोषित करते हैं।</td>
                  <td><strong>कवक (Fungi)</strong> - ब्रेड मोल्ड, कुकुरमुत्ता (मशरूम), यीस्ट</td>
                </tr>
                <tr>
                  <td><strong>सहजीविता (Symbiosis)</strong></td>
                  <td>दो भिन्न जीवों का परस्पर लाभकारी सह-अस्तित्व ($+/+$ संबंध)।</td>
                  <td>
                    1. <strong>लाइकेन (Lichens):</strong> शैवाल (भोजन बनाता है) + कवक (आवास, जल व खनिज देता है)।<br/>
                    2. <strong>राइजोबियम जीवाणु:</strong> दलहनी फसलों की जड़ों में वायुमंडलीय नाइट्रोजन का स्थिरीकरण।
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Which plant pigment is responsible for trapping solar energy during photosynthesis?",
        qHi: "प्रकाश-संश्लेषण के दौरान सौर ऊर्जा को अवशोषित करने के लिए कौन-सा वर्णक उत्तरदायी है?",
        options: ["Carotene", "Anthocyanin", "Chlorophyll", "Xanthophyll"],
        optionsHi: ["कैरोटीन", "एंथोसायनिन", "क्लोरोफिल (पर्णहरित)", "जैंथोफिल"],
        ans: 2,
        pyqRef: "CTET Paper 2 Science & BPSC TRE 6-8",
        explanation: "Chlorophyll, the green pigment in plant leaves, captures solar energy and drives the photosynthesis reaction.",
        explanationHi: "क्लोरोफिल (पर्णहरित) पत्तियों का हरा वर्णक है जो सौर ऊर्जा को ग्रहण करता है।"
      },
      {
        id: 2,
        q: "What are the tiny pores on the surface of leaves through which gaseous exchange takes place called?",
        qHi: "पत्तियों की सतह पर उपस्थित उन सूक्ष्म छिद्रों को क्या कहते हैं जिनके द्वारा गैसों का विनिमय होता है?",
        options: ["Hydathodes", "Lenticels", "Stomata", "Tracheids"],
        optionsHi: ["जल रंध्र", "वात रंध्र", "रंध्र (Stomata)", "वाहिनिकाएं"],
        ans: 2,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "Stomata are the microscopic pores on the leaf surface enclosed by guard cells for gas exchange.",
        explanationHi: "पत्तियों की सतह पर उपस्थित सूक्ष्म छिद्रों को रंध्र (Stomata) कहते हैं जो द्वार कोशिकाओं से घिरे होते हैं।"
      },
      {
        id: 3,
        q: "Which of the following is a parasitic plant that produces yellow tubular stems and lacks chlorophyll?",
        qHi: "निम्नलिखित में से कौन-सा एक परजीवी पादप है जिसमें पीली तंतुमय संरचना होती है और क्लोरोफिल नहीं होता?",
        options: ["Pitcher plant", "Cuscuta (Amarbel)", "Bladderwort", "Drosera"],
        optionsHi: ["घटपर्णी", "अमरबेल (Cuscuta)", "ब्लैडरवॉर्ट", "ड्रोसेरा"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 & BPSC TRE Middle School",
        explanation: "Cuscuta (Amarbel) is a total stem parasite that lacks chlorophyll and derives food from its host via haustoria.",
        explanationHi: "अमरबेल (Cuscuta) एक परजीवी पौधा है जिसमें क्लोरोफिल नहीं होता और यह पोषी पादप से भोजन लेता है।"
      },
      {
        id: 4,
        q: "Pitcher plant traps insects because it:",
        qHi: "घटपर्णी (Pitcher plant) कीटों को इसलिए पकड़ता है क्योंकि:",
        options: ["Is a heterotroph", "Grows in nitrogen-deficient soil", "Cannot perform photosynthesis", "Needs water from insects"],
        optionsHi: ["यह एक विषमपोषी है", "यह नाइट्रोजन की कमी वाली मिट्टी में उगता है", "यह प्रकाश-संश्लेषण नहीं कर सकता", "इसे कीटों से पानी चाहिए"],
        ans: 1,
        pyqRef: "CTET Paper 2 Science & UPTET",
        explanation: "Pitcher plants perform photosynthesis (they are green), but grow in nitrogen-poor bogs; they trap insects to obtain nitrogen.",
        explanationHi: "घटपर्णी हरा होता है और प्रकाश-संश्लेषण करता है, परंतु नाइट्रोजन की कमी पूरी करने के लिए कीटों का भक्षण करता है।"
      },
      {
        id: 5,
        q: "In lichens, which two organisms live in a symbiotic association?",
        qHi: "लाइकेन (Lichens) में कौन-से दो जीव सहजीवी संबंध में रहते हैं?",
        options: ["Alga and Fungus", "Fungus and Bacteria", "Alga and Virus", "Fungus and Protozoa"],
        optionsHi: ["शैवाल और कवक (Alga and Fungus)", "कवक और जीवाणु", "शैवाल और विषाणु", "कवक और प्रोटोजोआ"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & SSC CGL",
        explanation: "Lichens consist of an Alga (which provides food through photosynthesis) and a Fungus (which provides shelter, water, and minerals).",
        explanationHi: "लाइकेन में शैवाल (जो प्रकाश-संश्लेषण से भोजन बनाता है) और कवक (जो आवास व जल प्रदान करता है) साथ रहते हैं।"
      },
      {
        id: 6,
        q: "Which bacterium lives in the root nodules of leguminous plants to fix atmospheric nitrogen?",
        qHi: "दलहनी पादपों की जड़ों में वायुमंडलीय नाइट्रोजन का स्थिरीकरण करने वाला कौन-सा जीवाणु रहता है?",
        options: ["Lactobacillus", "Rhizobium", "Azotobacter", "E. coli"],
        optionsHi: ["लैक्टोबैसिलस", "राइजोबियम (Rhizobium)", "एज़ोटोबैक्टर", "ई. कोलाई"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "Rhizobium bacteria convert atmospheric nitrogen into usable soluble nitrates in symbiosis with leguminous root nodules.",
        explanationHi: "राइजोबियम जीवाणु दलहनी पौधों की जड़ों में रहकर वायुमंडलीय नाइट्रोजन को घुलनशील नाइट्रेट्स में बदलता है।"
      },
      {
        id: 7,
        q: "What is the chemical test used to confirm the presence of starch in leaves?",
        qHi: "पत्तियों में स्टार्च (मंड) की उपस्थिति की पुष्टि करने के लिए कौन-सा रासायनिक परीक्षण किया जाता है?",
        options: ["Benedict's test", "Biuret test", "Dilute Iodine test", "Litmus test"],
        optionsHi: ["बेनेडिक्ट परीक्षण", "बाइयूरेट परीक्षण", "तनु आयोडीन परीक्षण (Iodine Test)", "लिटमस परीक्षण"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 1 Activity & CTET",
        explanation: "Adding dilute iodine solution to a boiled leaf turns it blue-black if starch is present.",
        explanationHi: "पत्ती पर तनु आयोडीन विलयन डालने पर नीला-काला रंग आना स्टार्च की उपस्थिति दर्शाता है।"
      },
      {
        id: 8,
        q: "What gas is released into the atmosphere during photosynthesis?",
        qHi: "प्रकाश-संश्लेषण के दौरान वायुमंडल में कौन-सी गैस विमुक्त होती है?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
        optionsHi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन (Oxygen)", "नाइट्रोजन", "मीथेन"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "Oxygen (O2) is produced by the photolysis of water and released as a by-product.",
        explanationHi: "जल के प्रकाशीय अपघटन से ऑक्सीजन ($O_2$) गैस विमुक्त होती है।"
      },
      {
        id: 9,
        q: "What are organisms that feed on dead and decaying matter called?",
        qHi: "मृत एवं सड़े-गले कार्बनिक पदार्थों से पोषण प्राप्त करने वाले जीवों को क्या कहते हैं?",
        options: ["Autotrophs", "Parasites", "Saprotrophs", "Insectivores"],
        optionsHi: ["स्वपोषी", "परजीवी", "मृतजीवी (Saprotrophs)", "कीटभक्षी"],
        ans: 2,
        pyqRef: "CTET Paper 2 Science",
        explanation: "Organisms with saprotrophic nutrition (like fungi, mushrooms, bread mould) feed on dead and decaying organic matter.",
        explanationHi: "सड़े-गले पदार्थों से तरल रूप में पोषक तत्व लेने वाले जीव मृतजीवी (Saprotrophs) कहलाते हैं।"
      },
      {
        id: 10,
        q: "Which cells control the opening and closing of stomatal pores?",
        qHi: "रंध्रों (Stomata) के खुलने और बंद होने की क्रिया को कौन-सी कोशिकाएँ नियंत्रित करती हैं?",
        options: ["Epidermal cells", "Guard cells", "Mesophyll cells", "Subsidiary cells"],
        optionsHi: ["बाह्यत्वचा कोशिकाएँ", "द्वार कोशिकाएँ (Guard Cells)", "मध्योतक कोशिकाएँ", "सहायक कोशिकाएँ"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "Guard cells swell when water flows into them (opening stomata) and shrink when water leaves (closing stomata).",
        explanationHi: "रंध्रों का खुलना और बंद होना द्वार कोशिकाओं (Guard Cells) के स्फीत (Turgid) और श्लथ होने पर निर्भर करता है।"
      },
      {
        id: 11,
        q: "In a pitcher plant, which part of the plant is modified into the pitcher shape?",
        qHi: "घटपर्णी (Pitcher plant) में पौधे का कौन-सा भाग घड़े (Pitcher) के रूप में रूपांतरित होता है?",
        options: ["Stem", "Root", "Leaf", "Flower"],
        optionsHi: ["तना", "जड़", "पत्ती (Leaf)", "फूल"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 1 & CTET Paper 2",
        explanation: "The pitcher is the modified leaf blade (lamina), and the leaf apex forms the lid of the pitcher.",
        explanationHi: "पत्ती का फलक (Lamina) घड़े में और पत्ती का शीर्ष ढक्कन के रूप में रूपांतरित होता है।"
      },
      {
        id: 12,
        q: "Why do desert plants like cactus have scale-like or spine-like leaves?",
        qHi: "कैक्टस जैसे मरुस्थलीय पौधों में पत्तियाँ कांटों (Spines) के रूप में क्यों रूपांतरित होती हैं?",
        options: ["To protect from animals", "To reduce water loss by transpiration", "To trap insects", "To absorb sunlight better"],
        optionsHi: ["पशुओं से सुरक्षा हेतु", "वाष्पोत्सर्जन द्वारा जल हानि कम करने के लिए", "कीट पकड़ने हेतु", "धूप अवशोषण हेतु"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "In desert plants, leaves are reduced to spines to minimize water loss through transpiration; green stems perform photosynthesis.",
        explanationHi: "वाष्पोत्सर्जन (Transpiration) द्वारा जल हानि को कम करने के लिए पत्तियाँ कांटों में बदल जाती हैं।"
      },
      {
        id: 13,
        q: "Can photosynthesis occur in leaves that are red, brown, or violet in color?",
        qHi: "क्या लाल, भूरी या बैंगनी रंग की पत्तियों में प्रकाश-संश्लेषण होता है?",
        options: ["No, only green leaves photosynthesize", "Yes, they contain chlorophyll masked by other pigments", "Only in the dark", "Only when boiled in alcohol"],
        optionsHi: ["नहीं, केवल हरी पत्तियाँ करती हैं", "हाँ, उनमें अन्य वर्णकों द्वारा ढका हुआ क्लोरोफिल होता है", "केवल अंधेरे में", "केवल जब एल्कोहल में उबाला जाए"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 Activity & CTET",
        explanation: "Yes, non-green leaves also contain chlorophyll, but the large amount of red, brown, and other pigments masks the green color.",
        explanationHi: "हाँ, इन पत्तियों में भी क्लोरोफिल होता है, परंतु लाल व भूरे रंग की अधिकता हरे रंग को ढक देती है।"
      },
      {
        id: 14,
        q: "What is the green slimy layer commonly seen on the surface of stagnant ponds called?",
        qHi: "ठहरे हुए तालाबों की सतह पर दिखाई देने वाली हरी चिकनी परत (काई) क्या कहलाती है?",
        options: ["Fungi", "Algae (शैवाल)", "Protozoa", "Bacteria"],
        optionsHi: ["कवक", "शैवाल (Algae)", "प्रोटोजोआ", "जीवाणु"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "Algae contain chlorophyll and can prepare their own food by photosynthesis.",
        explanationHi: "यह शैवाल (Algae) होते हैं जिनमें क्लोरोफिल होता है और वे स्वपोषी होते हैं।"
      },
      {
        id: 15,
        q: "Besides carbohydrates, plants also synthesize proteins. Which essential element is required for synthesizing proteins?",
        qHi: "कार्बोहाइड्रेट के अलावा पौधे प्रोटीन का भी संश्लेषण करते हैं। प्रोटीन संश्लेषण के लिए कौन-सा तत्व अनिवार्य है?",
        options: ["Chlorine", "Nitrogen", "Iron", "Sodium"],
        optionsHi: ["क्लोरीन", "नाइट्रोजन (Nitrogen)", "लोहा", "सोडियम"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & SSC",
        explanation: "Proteins are nitrogenous substances containing nitrogen, carbon, hydrogen, and oxygen.",
        explanationHi: "प्रोटीन नाइट्रोजन युक्त यौगिक होते हैं, अतः नाइट्रोजन अनिवार्य तत्व है।"
      },
      {
        id: 16,
        q: "Can plants directly absorb nitrogen gas (N2) present in the air?",
        qHi: "क्या पौधे वायु में उपस्थित गैसीय नाइट्रोजन ($N_2$) को सीधे ग्रहण कर सकते हैं?",
        options: ["Yes, through stomata", "No, they absorb it only as soluble nitrates through roots", "Yes, through cuticle", "Only at night"],
        optionsHi: ["हाँ, रंध्रों द्वारा", "नहीं, वे जड़ों द्वारा घुलनशील नाइट्रेट्स के रूप में लेते हैं", "हाँ, उपत्वचा द्वारा", "केवल रात में"],
        ans: 1,
        pyqRef: "CTET Paper 2 Science",
        explanation: "Plants cannot absorb gaseous N2 directly; soil bacteria like Rhizobium convert it into soluble forms absorbed by roots.",
        explanationHi: "पौधे सीधे वायुमंडलीय नाइट्रोजन नहीं ले सकते; मिट्टी के जीवाणु इसे नाइट्रेट में बदलते हैं जिसे जड़ें जल के साथ लेती हैं।"
      },
      {
        id: 17,
        q: "Why do farmers not need to apply nitrogenous fertilizers to fields where leguminous crops are grown?",
        qHi: "किसान दलहनी फसलों वाले खेतों में नाइट्रोजन उर्वरक क्यों नहीं डालते?",
        options: ["Legumes do not need nitrogen", "Rhizobium bacteria enrich the soil with nitrogen naturally", "Legumes kill weeds", "Legumes need only phosphorus"],
        optionsHi: ["दालों को नाइट्रोजन नहीं चाहिए", "राइजोबियम जीवाणु मिट्टी को प्राकृतिक रूप से नाइट्रोजन से समृद्ध करते हैं", "दालें खरपतवार नष्ट करती हैं", "दालों को केवल फास्फोरस चाहिए"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 & BPSC TRE 6-8",
        explanation: "Symbiotic Rhizobium in the root nodules of legumes fix nitrogen from air, naturally fertilizing the soil.",
        explanationHi: "दलहनी पौधों की जड़ों में उपस्थित राइजोबियम मिट्टी को प्राकृतिक रूप से नाइट्रोजनयुक्त बना देता है।"
      },
      {
        id: 18,
        q: "Which organism is commonly observed growing as cotton-like threads on moist stale bread?",
        qHi: "बासी नम ब्रेड पर रुई के धागों जैसी संरचना के रूप में उगने वाला जीव कौन-सा है?",
        options: ["Alga", "Fungus (Bread Mould)", "Amoeba", "Spirogyra"],
        optionsHi: ["शैवाल", "कवक / ब्रेड मोल्ड (Fungus)", "अमीबा", "स्पाइरोगाइरा"],
        ans: 1,
        pyqRef: "State TET & Railway",
        explanation: "Bread mould (Rhizopus) is a fungus that exhibits saprotrophic nutrition.",
        explanationHi: "ब्रेड मोल्ड (राइजोपस) एक कवक (Fungus) है जो मृतजीवी पोषण करता है।"
      },
      {
        id: 19,
        q: "Which of the following is an example of an insectivorous plant other than the pitcher plant?",
        qHi: "घटपर्णी के अलावा निम्नलिखित में से कौन-सा एक कीटभक्षी पादप है?",
        options: ["Venus flytrap", "Amarbel", "Mushroom", "Lichen"],
        optionsHi: ["वीनस फ्लाईट्रैप (Venus Flytrap)", "अमरबेल", "मशरूम", "लाइकेन"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "Venus flytrap and Sundew (Drosera) are well-known insectivorous plants.",
        explanationHi: "वीनस फ्लाईट्रैप और ड्रोसेरा कीटभक्षी पौधे हैं।"
      },
      {
        id: 20,
        q: "What is the ultimate source of energy for all living organisms?",
        qHi: "सभी जीवित प्राणियों के लिए ऊर्जा का अंतिम व मुख्य स्रोत क्या है?",
        options: ["Water", "Chemical fertilizers", "Solar energy (Sun)", "Glucose"],
        optionsHi: ["जल", "रासायनिक उर्वरक", "सौर ऊर्जा (सूर्य)", "ग्लूकोज"],
        ans: 2,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Sun is the ultimate source of energy for all living organisms on Earth.",
        explanationHi: "सूर्य पृथ्वी पर सभी जीवों के लिए ऊर्जा का परम और अंतिम स्रोत है।"
      },
      {
        id: 21,
        q: "In Cuscuta (Amarbel), the specialized root-like organs that penetrate host tissues are called:",
        qHi: "अमरबेल (Cuscuta) में पोषी पादप के ऊतकों में प्रवेश करने वाले विशिष्ट अंगों को क्या कहते हैं?",
        options: ["Rhizoids", "Haustoria (चूषक)", "Tendrils", "Spines"],
        optionsHi: ["मूलाभास", "चूषक (Haustoria)", "प्रतान", "कांटे"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & NEET",
        explanation: "Haustoria are parasitic suckers that penetrate host vessels to draw nourishment.",
        explanationHi: "चूषक (Haustoria) परजीवी जड़ें हैं जो पोषी से भोजन खींचती हैं।"
      },
      {
        id: 22,
        q: "During photosynthesis, solar energy is converted into:",
        qHi: "प्रकाश-संश्लेषण के दौरान सौर ऊर्जा किस ऊर्जा में परिवर्तित होती है?",
        options: ["Mechanical energy", "Chemical energy", "Thermal energy", "Nuclear energy"],
        optionsHi: ["यांत्रिक ऊर्जा", "रासायनिक ऊर्जा (Chemical Energy)", "तापीय ऊर्जा", "नाभिकीय ऊर्जा"],
        ans: 1,
        pyqRef: "State TET & SSC CGL",
        explanation: "Solar energy is converted and stored as chemical energy in carbohydrate bonds.",
        explanationHi: "सौर ऊर्जा रासायनिक ऊर्जा (ग्लूकोज के बंधों में) परिवर्तित होती है।"
      },
      {
        id: 23,
        q: "What color does an iodine solution turn in the presence of starch?",
        qHi: "स्टार्च की उपस्थिति में आयोडीन विलयन का रंग कैसा हो जाता है?",
        options: ["Red", "Blue-Black", "Bright Green", "Yellow"],
        optionsHi: ["लाल", "नीला-काला (Blue-Black)", "चमकीला हरा", "पीला"],
        ans: 1,
        pyqRef: "CTET Paper 2 & Railway",
        explanation: "Iodine reacts with amylose in starch to form a deep blue-black complex.",
        explanationHi: "स्टार्च आयोडीन से क्रिया करके गहरा नीला-काला रंग देता है।"
      },
      {
        id: 24,
        q: "Which of the following is NOT an autotroph?",
        qHi: "निम्नलिखित में से कौन-सा एक स्वपोषी नहीं है?",
        options: ["Grass", "Green Alga", "Mushroom", "Mango tree"],
        optionsHi: ["घास", "हरा शैवाल", "मशरूम (कुकुरमुत्ता)", "आम का पेड़"],
        ans: 2,
        pyqRef: "State TET & CTET",
        explanation: "Mushroom is a fungus (saprotroph) and lacks chlorophyll, so it is heterotrophic.",
        explanationHi: "मशरूम एक कवक (मृतजीवी) है, इसमें क्लोरोफिल नहीं होता, अतः यह स्वपोषी नहीं है।"
      },
      {
        id: 25,
        q: "The pitcher of Nepenthes secretes which substances to digest trapped insects?",
        qHi: "घटपर्णी (Nepenthes) का घड़ा फंसे हुए कीटों को पचाने के लिए किन पदार्थों का स्राव करता है?",
        options: ["Hormones", "Digestive enzymes", "Alkaline bile", "Chlorophyll"],
        optionsHi: ["हार्मोन", "पाचक एंजाइम (Digestive Enzymes)", "क्षारीय पित्त", "क्लोरोफिल"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School",
        explanation: "The pitcher contains digestive juices (proteolytic enzymes) that break down the insect body.",
        explanationHi: "घड़े के अंदर पाचक रस (एंजाइम) स्रावित होते हैं जो कीटों का पाचन करते हैं।"
      },
      {
        id: 26,
        q: "Which mode of nutrition is exhibited by humans and animals?",
        qHi: "मनुष्य और जंतुओं में किस प्रकार का पोषण पाया जाता है?",
        options: ["Autotrophic", "Heterotrophic", "Saprotrophic", "Symbiotic only"],
        optionsHi: ["स्वपोषी", "विषमपोषी (Heterotrophic)", "मृतजीवी", "केवल सहजीवी"],
        ans: 1,
        pyqRef: "CTET Paper 2",
        explanation: "Animals and humans depend directly or indirectly on plants for food, so they are heterotrophs.",
        explanationHi: "मानव और जंतु भोजन के लिए दूसरों पर निर्भर रहते हैं, अतः विषमपोषी हैं।"
      },
      {
        id: 27,
        q: "What is the primary role of the fungal component in lichens?",
        qHi: "लाइकेन में कवक (Fungus) घटक की मुख्य भूमिका क्या है?",
        options: ["Perform photosynthesis", "Provide shelter, water, and minerals", "Produce oxygen", "Fix nitrogen"],
        optionsHi: ["प्रकाश-संश्लेषण करना", "आवास, जल और खनिज लवण प्रदान करना", "ऑक्सीजन बनाना", "नाइट्रोजन स्थिरीकरण"],
        ans: 1,
        pyqRef: "CTET Paper 2 Science & BPSC",
        explanation: "The fungus provides shelter, absorbs water and minerals from the substrate, while the alga prepares food.",
        explanationHi: "कवक शैवाल को रहने का स्थान, जल और खनिज लवण प्रदान करता है।"
      },
      {
        id: 28,
        q: "Fungi can grow on which of the following during hot and humid weather?",
        qHi: "गर्म एवं आर्द्र मौसम में कवक निम्नलिखित में से किस पर उग सकते हैं?",
        options: ["Pickles", "Leather shoes and clothes", "Moist bread", "All of these"],
        optionsHi: ["अचार", "चमड़े के जूते व कपड़े", "नम रोटी / ब्रेड", "ये सभी (All of these)"],
        ans: 3,
        pyqRef: "NCERT Class 7 Ch 1 & State TET",
        explanation: "Fungal spores germinate on any wet and warm items including pickles, leather goods, and clothes.",
        explanationHi: "कवक गर्म व आर्द्र वातावरण में अचार, चमड़ा, कपड़े और ब्रेड सभी पर उग सकते हैं।"
      },
      {
        id: 29,
        q: "What happens to the rate of photosynthesis in the complete absence of light?",
        qHi: "प्रकाश की पूर्ण अनुपस्थिति में प्रकाश-संश्लेषण की दर पर क्या प्रभाव पड़ता है?",
        options: ["Increases", "Remains unchanged", "Drops to zero (stops)", "Doubles"],
        optionsHi: ["बढ़ जाती है", "अपरिवर्तित रहती है", "शून्य हो जाती है (रुक जाती है)", "दोगुनी हो जाती है"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Light is the source of energy required to drive the photosynthesis reaction; without light, it cannot occur.",
        explanationHi: "प्रकाश की अनुपस्थिति में प्रकाश-संश्लेषण रुक जाता है (शून्य हो जाता है)।"
      },
      {
        id: 30,
        q: "Which vascular tissue transports water and minerals from roots to leaves in plants?",
        qHi: "पादपों में जड़ों से पत्तियों तक जल और खनिजों का परिवहन कौन-सा संवहनी ऊतक करता है?",
        options: ["Phloem", "Xylem", "Cortex", "Pith"],
        optionsHi: ["फ्लोएम", "जाइलम (Xylem)", "वल्कुट", "मज्जा"],
        ans: 1,
        pyqRef: "State TET & BPSC TRE Middle School",
        explanation: "Xylem vessels form a continuous pipeline from roots through stem and branches to leaves for water transport.",
        explanationHi: "जाइलम (Xylem) ऊतक जड़ों से जल व खनिज लवणों का परिवहन पत्तियों तक करता है।"
      }
    ]
  },

  // ==========================================
  // SST CHAPTER 1: Environment (हमारा पर्यावरण)
  // ==========================================
  {
    id: "ncert-c7-sst01",
    classLevel: "Class 7",
    subject: "Social Science (सामाजिक विज्ञान - भूगोल)",
    subjectCode: "SST",
    chapterNo: 1,
    bookName: "Our Environment (NCERT Class 7 Geography)",
    title: "Chapter 1: Environment (हमारा पर्यावरण)",
    titleHi: "अध्याय 1: हमारा पर्यावरण (Components, Domains & Ecosystem)",
    readingTime: "22 mins read",
    badge: "Geography & Ecology Core",
    desc: "NCERT Class 7 Geography Chapter 1: Components of environment (natural, human-made, human), domains of Earth (lithosphere, hydrosphere, atmosphere, biosphere), ecosystem dynamics, and World Environment Day.",
    descHi: "एनसीईआरटी कक्षा 7 भूगोल अध्याय 1: पर्यावरण के घटक (प्राकृतिक, मानव-निर्मित, मानव), पृथ्वी के परिमंडल (स्थलमंडल, जलमंडल, वायुमंडल, जैवमंडल), पारितंत्र (Ecosystem) की संकल्पना एवं विश्व पर्यावरण दिवस (5 जून)।",
    competitionEdge: "High-yield chapter for CTET Paper 2 (Social Science), BPSC TRE 4.0 Middle (6-8 Social Science), SSC, and UPSC/State PCS prelims. Domains of Earth, ecosystem coiners, and barter trade.",
    competitionEdgeHi: "CTET पेपर 2 (सामाजिक अध्ययन) और BPSC शिक्षक भर्ती में हर साल आने वाले प्रश्न: जैवमंडल (Biosphere) की संकीर्ण सीमा, वायुमंडल की सुरक्षात्मक परत, पारितंत्र की परिभाषा (ए.जी. टैंसले), और पर्यावरण दिवस।",
    pdfUrl: "/ncert_books/class7/sst_ch01.pdf",
    pdfUrlHi: "/ncert_books/class7/sst_ch01_hi.pdf",
    pdfName: "NCERT_Class7_SST_Ch01_Environment.pdf",
    pdfSize: "6.01 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Meaning & Components of Environment",
        headingHi: "1. एनसीईआरटी मूल पाठ: पर्यावरण का अर्थ एवं उसके तीन प्रमुख घटक",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear aspirants! The word 'Environment' comes from the French word <em>'Environer'</em>, meaning neighborhood. Everything that surrounds any living organism—people, things, nature—forms its environment. It is a combination of <strong>natural</strong> and <strong>human-made</strong> phenomena!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ The Three Components of Environment</div>
            <ul>
              <li><strong>1. Natural Components (प्राकृतिक घटक):</strong>
                <ul>
                  <li><strong>Biotic (जैविक):</strong> The world of living organisms (plants and animals).</li>
                  <li><strong>Abiotic (अजैविक):</strong> The world of non-living elements (land, air, water).</li>
                </ul>
              </li>
              <li><strong>2. Human-Made Components (मानव-निर्मित घटक):</strong> Buildings, parks, bridges, roads, monuments, industries created by human beings.</li>
              <li><strong>3. Human Components (मानव घटक):</strong> Individual, family, community, religion, educational institutions, economic systems, and political situations.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय शिक्षक अभ्यर्थियों! 'पर्यावरण' (Environment) शब्द की उत्पत्ति फ्रेंच शब्द <em>'Environer'</em> से हुई है, जिसका अर्थ 'पड़ोस' (Neighbourhood) होता है। किसी भी जीवित प्राणी के चारों ओर पाए जाने वाले लोग, स्थान, वस्तुएं और प्रकृति मिलकर पर्यावरण कहलाते हैं। इसमें प्राकृतिक और मानव-निर्मित दोनों घटक शामिल होते हैं!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ पर्यावरण के तीन प्रमुख घटक</div>
            <ul>
              <li><strong>1. प्राकृतिक घटक (Natural):</strong>
                <ul>
                  <li><strong>जैविक (Biotic):</strong> सजीव प्राणियों का संसार (पादप एवं जंतु)।</li>
                  <li><strong>अजैविक (Abiotic):</strong> निर्जीव पदार्थों का संसार (भूमि, जल, वायु)।</li>
                </ul>
              </li>
              <li><strong>2. मानव-निर्मित घटक (Human-made):</strong> इमारतें, पार्क, पुल, सड़कें, स्मारक, उद्योग आदि।</li>
              <li><strong>3. मानव घटक (Human):</strong> व्यक्ति, परिवार, समुदाय, धर्म, शैक्षिक, आर्थिक एवं राजनीतिक प्रणालियाँ।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. The Four Domains of the Earth & Ecosystem",
        headingHi: "2. पृथ्वी के चार परिमंडल एवं पारितंत्र (Ecosystem) की अवधारणा",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Four Real Earth Domains</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Key Characteristics</th>
                  <th>Significance for Life</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Lithosphere (स्थलमंडल)</strong></td>
                  <td>Solid crust or hard top layer of Earth consisting of rocks, minerals, covered by a thin layer of soil. Irregular surface with mountains, plateaus, plains.</td>
                  <td>Provides forests, grasslands for grazing, agricultural land, human settlements, and mineral wealth.</td>
                </tr>
                <tr>
                  <td><strong>Hydrosphere (जलमंडल)</strong></td>
                  <td>The domain of water comprising rivers, lakes, seas, oceans, underground water, and ice caps.</td>
                  <td>Essential for all living organisms ($71\%$ of Earth surface).</td>
                </tr>
                <tr>
                  <td><strong>Atmosphere (वायुमंडल)</strong></td>
                  <td>Thin layer of air surrounding Earth, held by Earth's gravitational force. Consists of gases, dust, and water vapor.</td>
                  <td>Protects life from harmful UV rays and scorching heat of the sun; creates weather and climate changes.</td>
                </tr>
                <tr>
                  <td><strong>Biosphere (जैवमंडल)</strong></td>
                  <td>Narrow zone of the Earth where land, water, and air interact with each other. Plant and animal kingdom together.</td>
                  <td>The ONLY domain where life can exist!</td>
                </tr>
              </tbody>
            </table>
            <p><strong>Ecosystem (पारितंत्र):</strong> A system formed by the interaction of all living organisms with each other and with physical and chemical factors of the environment in which they live. Coined by <em>A.G. Tansley (1935)</em>.</p>
            <p><strong>World Environment Day:</strong> Celebrated globally on <strong>5th June</strong> every year (Stockholm Conference 1972).</p>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ पृथ्वी के चार परिमंडल एवं पारितंत्र</div>
            <table class="teacher-formula-table">
              <thead>
                <tr>
                  <th>परिमंडल</th>
                  <th>प्रमुख विशेषताएँ</th>
                  <th>मानव जीवन हेतु महत्व</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>स्थलमंडल (Lithosphere)</strong></td>
                  <td>पृथ्वी की ठोस पर्पटी या कठोर ऊपरी परत जो चट्टानों, खनिजों और मिट्टी की पतली परत से बनी है। पर्वत, पठार, मैदान।</td>
                  <td>वन, कृषि हेतु भूमि, मानव बस्तियों हेतु स्थान और खनिज संपदा प्रदान करता है।</td>
                </tr>
                <tr>
                  <td><strong>जलमंडल (Hydrosphere)</strong></td>
                  <td>जल के विभिन्न स्रोत जैसे नदी, झील, समुद्र, महासागर आदि।</td>
                  <td>सभी जीवों के जीवन हेतु अनिवार्य ($71\%$ सतह)।</td>
                </tr>
                <tr>
                  <td><strong>वायुमंडल (Atmosphere)</strong></td>
                  <td>पृथ्वी के चारों ओर फैली वायु की पतली परत जिसे पृथ्वी का गुरुत्वाकर्षण बल थामे रखता है।</td>
                  <td>सूर्य की हानिकारक पराबैंगनी (UV) किरणों और झुलसाने वाली गर्मी से रक्षा करता है।</td>
                </tr>
                <tr>
                  <td><strong>जैवमंडल (Biosphere)</strong></td>
                  <td>पृथ्वी का वह संकीर्ण क्षेत्र जहाँ स्थल, जल और वायु मिलकर जीवन को संभव बनाते हैं।</td>
                  <td>एकमात्र क्षेत्र जहाँ जीवन पाया जाता है!</td>
                </tr>
              </tbody>
            </table>
            <p><strong>पारितंत्र (Ecosystem):</strong> वह तंत्र जिसमें सभी जीवधारी परस्पर एक-दूसरे के साथ तथा पर्यावरण के भौतिक व रासायनिक कारकों के साथ अंतःक्रिया करते हैं।</p>
            <p><strong>विश्व पर्यावरण दिवस:</strong> प्रत्येक वर्ष <strong>5 जून</strong> को पूरे विश्व में मनाया जाता है।</p>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "On which date is World Environment Day celebrated every year across the globe?",
        qHi: "पूरे विश्व में प्रत्येक वर्ष 'विश्व पर्यावरण दिवस' किस तिथि को मनाया जाता है?",
        options: ["22 April", "5 June", "16 September", "11 July"],
        optionsHi: ["22 अप्रैल", "5 जून (5th June)", "16 सितंबर", "11 जुलाई"],
        ans: 1,
        pyqRef: "CTET Paper 2 Social Science & BPSC TRE 6-8",
        explanation: "World Environment Day is celebrated on June 5 every year, commemorating the 1972 Stockholm Conference.",
        explanationHi: "विश्व पर्यावरण दिवस प्रत्येक वर्ष 5 जून को मनाया जाता है।"
      },
      {
        id: 2,
        q: "The word 'Environment' is derived from which language?",
        qHi: "'Environment' (पर्यावरण) शब्द की उत्पत्ति किस भाषा के शब्द से हुई है?",
        options: ["Latin", "Greek", "French", "German"],
        optionsHi: ["लैटिन", "ग्रीक", "फ्रेंच (French)", "जर्मन"],
        ans: 2,
        pyqRef: "NCERT Class 7 Geography Ch 1 & CTET",
        explanation: "Environment comes from the French word 'Environer/Environner', meaning to surround or neighborhood.",
        explanationHi: "यह फ्रेंच शब्द 'Environer' से लिया गया है जिसका अर्थ 'पड़ोस' होता है।"
      },
      {
        id: 3,
        q: "Which force of the Earth holds the atmosphere around it?",
        qHi: "पृथ्वी का कौन-सा बल वायुमंडल को अपने चारों ओर थामे रखता है?",
        options: ["Magnetic force", "Gravitational force", "Centrifugal force", "Frictional force"],
        optionsHi: ["चुंबकीय बल", "गुरुत्वाकर्षण बल (Gravitational Force)", "अपकेंद्री बल", "घर्षण बल"],
        ans: 1,
        pyqRef: "CTET Paper 2 & State TET",
        explanation: "The gravitational force of the Earth holds the gaseous atmosphere around it.",
        explanationHi: "पृथ्वी का गुरुत्वाकर्षण बल वायुमंडल को अपनी ओर खींचकर थामे रखता है।"
      },
      {
        id: 4,
        q: "What is the solid crust or the hard top layer of the Earth called?",
        qHi: "पृथ्वी की ठोस पर्पटी या कठोर ऊपरी परत को क्या कहते हैं?",
        options: ["Hydrosphere", "Atmosphere", "Lithosphere", "Biosphere"],
        optionsHi: ["जलमंडल", "वायुमंडल", "स्थलमंडल (Lithosphere)", "जैवमंडल"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 1 & BPSC TRE",
        explanation: "Lithosphere is the solid crust or hard top layer of the Earth made up of rocks and minerals.",
        explanationHi: "चट्टानों और खनिजों से बनी पृथ्वी की ठोस ऊपरी परत को स्थलमंडल (Lithosphere) कहते हैं।"
      },
      {
        id: 5,
        q: "Which of the following is an abiotic component of the environment?",
        qHi: "निम्नलिखित में से कौन-सा पर्यावरण का एक अजैविक (Abiotic) घटक है?",
        options: ["Plants", "Animals", "Land (Soil)", "Bacteria"],
        optionsHi: ["पादप", "जंतु", "भूमि / स्थल (Land)", "जीवाणु"],
        ans: 2,
        pyqRef: "State TET & CTET Paper 2",
        explanation: "Land is a non-living (abiotic) physical component, while plants, animals, and bacteria are biotic.",
        explanationHi: "भूमि (स्थल) एक निर्जीव (अजैविक) घटक है, जबकि अन्य सभी सजीव (जैविक) हैं।"
      },
      {
        id: 6,
        q: "What is the narrow zone of the Earth where land, water, and air interact with each other to support life called?",
        qHi: "पृथ्वी का वह संकीर्ण क्षेत्र जहाँ स्थल, जल और वायु मिलकर जीवन को संभव बनाते हैं, क्या कहलाता है?",
        options: ["Stratosphere", "Troposphere", "Biosphere", "Ionosphere"],
        optionsHi: ["समताप मंडल", "क्षोभ मंडल", "जैवमंडल (Biosphere)", "आयन मंडल"],
        ans: 2,
        pyqRef: "CTET Paper 2 Social Studies & BPSC",
        explanation: "Biosphere is the narrow zone where lithosphere, hydrosphere, and atmosphere interact to support living organisms.",
        explanationHi: "जैवमंडल (Biosphere) वह संकीर्ण क्षेत्र है जहाँ तीनों परिमंडल मिलकर जीवन को आश्रय देते हैं।"
      },
      {
        id: 7,
        q: "What was the system of trade in which goods were exchanged without the use of money called?",
        qHi: "वह व्यापार प्रणाली जिसमें मुद्रा का प्रयोग किए बिना वस्तुओं का आदान-प्रदान किया जाता था, क्या कहलाती थी?",
        options: ["Monetary system", "Barter system", "Credit system", "Mercantilism"],
        optionsHi: ["मौद्रिक प्रणाली", "वस्तु-विनिमय प्रणाली (Barter System)", "साख प्रणाली", "व्यापारवाद"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 & CTET",
        explanation: "Barter system is a trade in which goods are exchanged directly without the use of currency or money.",
        explanationHi: "वस्तु-विनिमय प्रणाली (Barter System) में बिना मुद्रा के वस्तुओं का सीधा आदान-प्रदान होता था।"
      },
      {
        id: 8,
        q: "Which of the following is a human-made environment?",
        qHi: "निम्नलिखित में से कौन-सा एक मानव-निर्मित पर्यावरण है?",
        options: ["Mountain", "Sea", "Road", "Forest"],
        optionsHi: ["पर्वत", "समुद्र", "सड़क (Road)", "प्राकृतिक वन"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 1 Exercise",
        explanation: "Roads, buildings, bridges, and parks are created by humans, hence they are human-made components.",
        explanationHi: "सड़कें, पुल, भवन मानव द्वारा निर्मित घटक हैं।"
      },
      {
        id: 9,
        q: "Which layer of the atmosphere protects life on Earth from harmful ultraviolet (UV) radiation?",
        qHi: "वायुमंडल की कौन-सी परत पृथ्वी पर जीवन को हानिकारक पराबैंगनी (UV) विकिरण से बचाती है?",
        options: ["Ionosphere", "Ozone layer", "Exosphere", "Mesosphere"],
        optionsHi: ["आयन मंडल", "ओजोन परत (Ozone Layer)", "बहिर्मंडल", "मध्य मंडल"],
        ans: 1,
        pyqRef: "CTET Paper 2 Science & SST",
        explanation: "The ozone layer (present in the stratosphere) absorbs harmful solar ultraviolet rays.",
        explanationHi: "समताप मंडल में स्थित ओजोन परत हानिकारक पराबैंगनी किरणों को सोख लेती है।"
      },
      {
        id: 10,
        q: "Who coined the term 'Ecosystem' in 1935?",
        qHi: "1935 में 'पारितंत्र' (Ecosystem) शब्द का सर्वप्रथम प्रयोग किसने किया था?",
        options: ["Charles Darwin", "A.G. Tansley", "Ernst Haeckel", "Gregor Mendel"],
        optionsHi: ["चार्ल्स डार्विन", "ए.जी. टैंसले (A.G. Tansley)", "अर्नेस्ट हेकेल", "ग्रेगर मेंडल"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School & UGC NET",
        explanation: "The term 'Ecosystem' was coined by British ecologist Arthur G. Tansley in 1935.",
        explanationHi: "पारितंत्र (Ecosystem) शब्द का प्रतिपादन 1935 में आर्थर जी. टैंसले ने किया था।"
      },
      {
        id: 11,
        q: "Which of the following is NOT a natural ecosystem?",
        qHi: "निम्नलिखित में से कौन-सा एक प्राकृतिक पारितंत्र नहीं है?",
        options: ["Desert", "Aquarium", "Forest", "Grassland"],
        optionsHi: ["रेगिस्तान", "एक्वेरियम (मछलीघर)", "वन", "घास का मैदान"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 Exercise & CTET",
        explanation: "An aquarium is an artificial, human-made ecosystem, whereas deserts, forests, and grasslands are natural.",
        explanationHi: "एक्वेरियम (मछलीघर) एक कृत्रिम मानव-निर्मित पारितंत्र है।"
      },
      {
        id: 12,
        q: "What percentage of the Earth's surface is covered by water (Hydrosphere)?",
        qHi: "पृथ्वी की सतह का लगभग कितने प्रतिशत भाग जल (जलमंडल) से आच्छादित है?",
        options: ["29%", "50%", "71%", "85%"],
        optionsHi: ["29%", "50%", "71%", "85%"],
        ans: 2,
        pyqRef: "State TET & Railway NTPC",
        explanation: "Approximately 71% of Earth's surface is covered by water, making it known as the 'Blue Planet'.",
        explanationHi: "पृथ्वी का लगभग 71% भाग जलमंडल से घिरा है, इसलिए इसे नीला ग्रह कहते हैं।"
      },
      {
        id: 13,
        q: "Which of the following is NOT a threat to the environment?",
        qHi: "निम्नलिखित में से कौन पर्यावरण के लिए खतरा नहीं है?",
        options: ["Growing population", "Growing plants", "Growing industries", "Deforestation"],
        optionsHi: ["बढ़ती जनसंख्या", "पौधे लगाना / पादप वृद्धि (Growing plants)", "बढ़ते उद्योग", "वनों की कटाई"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 Exercise & CTET",
        explanation: "Growing plants purifies air and maintains ecological balance; it is beneficial, not a threat.",
        explanationHi: "पेड़-पौधे लगाना पर्यावरण को शुद्ध करता है और संतुलन बनाता है, यह कोई खतरा नहीं है।"
      },
      {
        id: 14,
        q: "Which domain of the Earth provides mineral wealth?",
        qHi: "पृथ्वी का कौन-सा परिमंडल हमें खनिज संपदा (Mineral Wealth) प्रदान करता है?",
        options: ["Hydrosphere", "Atmosphere", "Lithosphere", "Mesosphere"],
        optionsHi: ["जलमंडल", "वायुमंडल", "स्थलमंडल (Lithosphere)", "मध्य मंडल"],
        ans: 2,
        pyqRef: "NCERT Class 7 Ch 1 & BPSC TRE",
        explanation: "Lithosphere consists of rocks and minerals that provide coal, iron, petroleum, and other mineral wealth.",
        explanationHi: "स्थलमंडल चट्टानों और खनिजों से बना है जो हमें लौह अयस्क, कोयला आदि खनिज संपदा देते हैं।"
      },
      {
        id: 15,
        q: "What is an ecosystem composed of?",
        qHi: "एक पारितंत्र (Ecosystem) किनसे मिलकर बनता है?",
        options: ["Only living organisms", "Only non-living environment", "Both biotic and abiotic components interacting with each other", "Only plants and sunlight"],
        optionsHi: ["केवल सजीव प्राणी", "केवल निर्जीव वातावरण", "जैविक और अजैविक दोनों घटक जो परस्पर अंतःक्रिया करते हैं", "केवल पौधे और धूप"],
        ans: 2,
        pyqRef: "CTET Paper 2 Social Science",
        explanation: "An ecosystem comprises the community of living organisms (biotic) interacting with physical surroundings (abiotic).",
        explanationHi: "पारितंत्र जैविक (सजीव) और अजैविक (निर्जीव) घटकों के पारस्परिक संबंधों से बनता है।"
      },
      {
        id: 16,
        q: "Why does the atmosphere stay attached to the Earth rather than escaping into outer space?",
        qHi: "वायुमंडल अंतरिक्ष में बिखरने के बजाय पृथ्वी से क्यों जुड़ा रहता है?",
        options: ["Due to atmospheric pressure", "Due to Earth's gravity", "Due to magnetic poles", "Due to solar wind"],
        optionsHi: ["वायुदाब के कारण", "पृथ्वी के गुरुत्वाकर्षण के कारण", "चुंबकीय ध्रुवों के कारण", "सौर पवनों के कारण"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CGL",
        explanation: "Earth's gravitational force pulls gas molecules towards its center, holding the atmosphere in place.",
        explanationHi: "पृथ्वी का गुरुत्वाकर्षण बल वायु के अणुओं को अपनी ओर बांधकर रखता है।"
      },
      {
        id: 17,
        q: "Which sphere includes oceans, rivers, lakes, ponds, and groundwater?",
        qHi: "महासागर, नदियाँ, झीलें, तालाब और भूजल किस परिमंडल के अंतर्गत आते हैं?",
        options: ["Lithosphere", "Hydrosphere", "Atmosphere", "Cryosphere only"],
        optionsHi: ["स्थलमंडल", "जलमंडल (Hydrosphere)", "वायुमंडल", "केवल हिमांक मंडल"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "Hydrosphere encompasses all water bodies on, under, and over the surface of the Earth.",
        explanationHi: "पृथ्वी पर उपस्थित जल के सभी रूपों को सम्मिलित रूप से जलमंडल कहते हैं।"
      },
      {
        id: 18,
        q: "Which of the following is considered a Biotic component?",
        qHi: "निम्नलिखित में से किसे एक जैविक (Biotic) घटक माना जाता है?",
        options: ["Water", "Air", "Fungi", "Rock"],
        optionsHi: ["जल", "वायु", "कवक (Fungi)", "चट्टान"],
        ans: 2,
        pyqRef: "CTET Paper 2 Science & SST",
        explanation: "Fungi are living organisms, hence they represent a biotic component.",
        explanationHi: "कवक सजीव जीव हैं, अतः वे जैविक घटक का प्रतिनिधित्व करते हैं।"
      },
      {
        id: 19,
        q: "Human beings modify the natural environment. Which of the following is an example of such modification?",
        qHi: "मनुष्य प्राकृतिक पर्यावरण में परिवर्तन करता है। निम्नलिखित में से कौन-सा ऐसा उदाहरण है?",
        options: ["Constructing dams across rivers", "Building roads across mountains", "Clearing forests for agriculture", "All of these"],
        optionsHi: ["नदियों पर बांध बनाना", "पहाड़ों को काटकर सड़कें बनाना", "कृषि हेतु वनों की कटाई करना", "ये सभी (All of these)"],
        ans: 3,
        pyqRef: "NCERT Class 7 Ch 1 & BPSC TRE",
        explanation: "Humans modify the environment to fulfill their needs by building dams, roads, cities, and clearing lands.",
        explanationHi: "बांध बनाना, सड़कें बनाना, वनों की कटाई करना सभी मानवीय पर्यावरण रूपांतरण के उदाहरण हैं।"
      },
      {
        id: 20,
        q: "A pond, a forest, a desert, or even an aquarium can each be studied as an individual:",
        qHi: "एक तालाब, एक वन, एक रेगिस्तान या यहाँ तक कि एक मछलीघर प्रत्येक का अलग से अध्ययन किस रूप में किया जा सकता है?",
        options: ["Lithosphere", "Ecosystem", "Atmosphere", "Tectonic plate"],
        optionsHi: ["स्थलमंडल", "पारितंत्र (Ecosystem)", "वायुमंडल", "विवर्तनिक प्लेट"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Each self-contained functional unit where organisms interact with their local environment forms an ecosystem.",
        explanationHi: "प्रत्येक स्थानीय इकाई जहाँ जीव पर्यावरण से क्रिया करते हैं, एक पारितंत्र (Ecosystem) कहलाती है।"
      },
      {
        id: 21,
        q: "Which gas makes up the largest proportion of clean dry air in Earth's atmosphere?",
        qHi: "पृथ्वी के वायुमंडल की शुष्क हवा में सर्वाधिक प्रतिशत किस गैस का है?",
        options: ["Oxygen", "Nitrogen", "Argon", "Carbon dioxide"],
        optionsHi: ["ऑक्सीजन", "नाइट्रोजन (78%)", "आर्गन", "कार्बन डाइऑक्साइड"],
        ans: 1,
        pyqRef: "State TET & Railway NTPC",
        explanation: "Nitrogen constitutes approximately 78% of Earth's atmosphere, followed by oxygen at 21%.",
        explanationHi: "वायुमंडल में सर्वाधिक 78% नाइट्रोजन गैस पाई जाती है।"
      },
      {
        id: 22,
        q: "What role does dust and water vapor in the atmosphere play?",
        qHi: "वायुमंडल में उपस्थित धूलकण और जलवाष्प क्या मुख्य भूमिका निभाते हैं?",
        options: ["Forming clouds and precipitation", "Creating gravity", "Producing nitrogen", "Forming rocks"],
        optionsHi: ["बादलों और वर्षा का निर्माण करना", "गुरुत्वाकर्षण बनाना", "नाइट्रोजन उत्पन्न करना", "चट्टानें बनाना"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School",
        explanation: "Dust particles act as hygroscopic condensation nuclei for water vapor, forming clouds and rain.",
        explanationHi: "जलवाष्प और धूलकण संघनन केंद्र बनकर बादलों और वर्षा का निर्माण करते हैं।"
      },
      {
        id: 23,
        q: "The irregular surface of the lithosphere is characterized by which landforms?",
        qHi: "स्थलमंडल की ऊबड़-खाबड़ सतह पर कौन-से प्रमुख स्थलरूप पाए जाते हैं?",
        options: ["Mountains and valleys", "Plateaus and plains", "Ocean floors", "All of these"],
        optionsHi: ["पर्वत और घाटियाँ", "पठार और मैदान", "महासागरीय अधस्तल", "ये सभी (All of these)"],
        ans: 3,
        pyqRef: "NCERT Class 7 Ch 1",
        explanation: "Lithosphere features diverse landforms on both continents (mountains, plateaus, plains) and ocean floors.",
        explanationHi: "स्थलमंडल पर पर्वत, पठार, मैदान और महासागरीय बेसिन सभी पाए जाते हैं।"
      },
      {
        id: 24,
        q: "Why is the biosphere described as a 'narrow zone'?",
        qHi: "जैवमंडल को एक 'संकीर्ण क्षेत्र' (Narrow Zone) क्यों कहा जाता है?",
        options: ["Because life can only exist where land, water, and air meet", "Because it is very small in size compared to the galaxy", "Because only a few animals live there", "Because it has no oxygen"],
        optionsHi: ["क्योंकि जीवन केवल वहीं संभव है जहाँ स्थल, जल और वायु मिलते हैं", "क्योंकि यह बहुत छोटा है", "क्योंकि केवल कुछ जंतु रहते हैं", "क्योंकि इसमें ऑक्सीजन नहीं है"],
        ans: 0,
        pyqRef: "CTET Paper 2 Social Science",
        explanation: "Life cannot exist deep in the Earth's crust or in outer atmosphere; it thrives only in the narrow boundary where land, water, and air interact.",
        explanationHi: "गहरे गर्भ या अंतरिक्ष में जीवन नहीं हो सकता, यह केवल स्थल, जल व वायु के संपर्क वाले पतले क्षेत्र में ही संभव है।"
      },
      {
        id: 25,
        q: "Which international agreement / conference led to the establishment of World Environment Day?",
        qHi: "किस अंतरराष्ट्रीय सम्मेलन के परिणामस्वरूप 'विश्व पर्यावरण दिवस' की स्थापना हुई?",
        options: ["Kyoto Protocol 1997", "Stockholm Conference 1972", "Paris Agreement 2015", "Montreal Protocol 1987"],
        optionsHi: ["क्योटो प्रोटोकॉल 1997", "स्टॉकहोम सम्मेलन 1972 (Stockholm Conference)", "पेरिस समझौता 2015", "मॉन्ट्रियल प्रोटोकॉल 1987"],
        ans: 1,
        pyqRef: "UPSC Prelims & BPSC TRE Middle School",
        explanation: "The United Nations Conference on the Human Environment held in Stockholm in June 1972 established World Environment Day.",
        explanationHi: "1972 के संयुक्त राष्ट्र स्टॉकहोम मानव पर्यावरण सम्मेलन में 5 जून को पर्यावरण दिवस घोषित किया गया।"
      },
      {
        id: 26,
        q: "Which of the following is part of the human environment?",
        qHi: "निम्नलिखित में से कौन मानव पर्यावरण का अंग है?",
        options: ["Family and community", "Religion and school", "Political party and government", "All of these"],
        optionsHi: ["परिवार और समुदाय", "धर्म और विद्यालय", "राजनीतिक दल और सरकार", "ये सभी (All of these)"],
        ans: 3,
        pyqRef: "NCERT Class 7 Ch 1",
        explanation: "Human environment encompasses social structures, cultural institutions, and political systems.",
        explanationHi: "परिवार, समुदाय, धर्म, विद्यालय और सरकार सभी मानव पर्यावरण के घटक हैं।"
      },
      {
        id: 27,
        q: "What is the primary cause of environmental degradation in modern times?",
        qHi: "आधुनिक समय में पर्यावरणीय क्षरण (Degradation) का मुख्य कारण क्या है?",
        options: ["Excessive exploitation of natural resources by humans", "Solar radiation cycles", "Earthquakes", "Tidal waves"],
        optionsHi: ["मानव द्वारा प्राकृतिक संसाधनों का अत्यधिक दोहन", "सौर विकिरण", "भूकंप", "ज्वारीय तरंगें"],
        ans: 0,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "Uncontrolled industrialization, deforestation, and overexploitation by humans disrupts ecological balance.",
        explanationHi: "मनुष्य द्वारा संसाधनों का अनियंत्रित दोहन और प्रदूषण ही पर्यावरण क्षरण का मुख्य कारण है।"
      },
      {
        id: 28,
        q: "Which of the following describes the interaction between organisms and their environment?",
        qHi: "जीवधारियों और उनके परिवेश के बीच के पारस्परिक संबंधों का अध्ययन क्या कहलाता है?",
        options: ["Ecology (पारिस्थितिकी)", "Geology", "Meteorology", "Astrology"],
        optionsHi: ["पारिस्थितिकी (Ecology)", "भू-विज्ञान", "मौसम विज्ञान", "ज्योतिष"],
        ans: 0,
        pyqRef: "State TET & Railway",
        explanation: "Ecology is the scientific study of the relationships between living organisms and their environment.",
        explanationHi: "जीवों और उनके पर्यावरण के संबंधों का वैज्ञानिक अध्ययन पारिस्थितिकी (Ecology) कहलाता है।"
      },
      {
        id: 29,
        q: "Which of the following pairs is correctly matched?",
        qHi: "निम्नलिखित में से कौन-सा युग्म सही सुमेलित है?",
        options: ["Lithosphere - Domain of water", "Atmosphere - Blanket of air", "Hydrosphere - Hard crust of rock", "Biosphere - Non-living world"],
        optionsHi: ["स्थलमंडल - जल का क्षेत्र", "वायुमंडल - पृथ्वी को घेरने वाली वायु की चादर", "जलमंडल - चट्टानों की कठोर परत", "जैवमंडल - निर्जीव संसार"],
        ans: 1,
        pyqRef: "CTET Paper 2 Math & SST",
        explanation: "Atmosphere is the protective blanket of air surrounding the Earth.",
        explanationHi: "वायुमंडल पृथ्वी को चारों ओर से घेरने वाली वायु की पतली चादर है।"
      },
      {
        id: 30,
        q: "Why is water in the hydrosphere constantly moving in a cycle?",
        qHi: "जलमंडल में जल निरंतर एक चक्र (Water Cycle) में क्यों घूमता रहता है?",
        options: ["Due to evaporation, condensation, and precipitation powered by solar heat", "Due to Earth's magnetic poles", "Due to wind turbines", "Due to human pumping"],
        optionsHi: ["सौर ऊर्जा द्वारा संचालित वाष्पीकरण, संघनन और वर्षण के कारण", "चुंबकीय ध्रुवों के कारण", "पवन चक्कियों के कारण", "पंपों के कारण"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CTET",
        explanation: "The hydrologic cycle is driven by solar radiation causing evaporation from oceans, forming clouds (condensation), and returning as rain/snow (precipitation).",
        explanationHi: "सूर्य की गर्मी से जल वाष्पीकृत होता है, संघनित होकर बादल बनता है और वर्षा के रूप में पुनः लौटता है।"
      }
    ]
  },

  // ==========================================
  // HINDI VASANT 2 CHAPTER 1: हम पंछी उन्मुक्त गगन के व व्याकरण
  // ==========================================
  {
    id: "ncert-c7-hin01",
    classLevel: "Class 7",
    subject: "Hindi (हिंदी - वसंत भाग 2)",
    subjectCode: "HINDI",
    chapterNo: 1,
    bookName: "Vasant Bhag 2 (NCERT Class 7 Hindi)",
    title: "Chapter 1: हम पंछी उन्मुक्त गगन के व व्याकरण",
    titleHi: "अध्याय 1: हम पंछी उन्मुक्त गगन के (डॉ. शिवमंगल सिंह 'सुमन' व हिंदी व्याकरण)",
    readingTime: "20 mins read",
    badge: "Literature & Grammar Core",
    desc: "NCERT Class 7 Hindi Vasant Chapter 1: Famous poem 'Hum Panchhi Unmukt Gagan Ke' by Dr. Shivmangal Singh 'Suman', theme of freedom vs bondage, nouns, adjectives, dvandva samas, synonyms, antonyms, and idioms.",
    descHi: "एनसीईआरटी कक्षा 7 हिंदी वसंत अध्याय 1: डॉ. शिवमंगल सिंह 'सुमन' कृत कालजयी कविता 'हम पंछी उन्मुक्त गगन के', स्वतंत्रता का मूल्य बनाम परतंत्रता का दुख, संज्ञा व भेद, विशेषण, द्वंद्व समास, पर्यायवाची एवं विलोम शब्द।",
    competitionEdge: "Guaranteed questions in CTET Paper 2 (Language 1 & 2 Hindi), BPSC TRE 4.0 Middle (6-8 Hindi), and State TETs. Poetic devices, dvandva samas identification, and grammatical terms.",
    competitionEdgeHi: "CTET पेपर 2 (हिंदी भाषा) और BPSC शिक्षक भर्ती में हर साल आने वाले प्रश्न: कविता का मूल भाव (स्वतंत्रता की चाह), 'कनक-तीलियाँ' और 'कटुक निबौरी' में विशेषण, 'भूखे-प्यासे' में द्वंद्व समास, और क्षितिज का अर्थ।",
    pdfUrl: "/ncert_books/class7/hindi_ch01.pdf",
    pdfUrlHi: "/ncert_books/class7/hindi_ch01.pdf",
    pdfName: "NCERT_Class7_Hindi_Ch01_Hum_Panchhi_Unmukt_Gagan_Ke.pdf",
    pdfSize: "3.04 MB",
    sections: [
      {
        heading: "1. NCERT Core Narrative: Poem Central Theme & Meaning",
        headingHi: "1. एनसीईआरटी मूल पाठ: कविता का केंद्रीय भाव एवं कवि परिचय",
        contentHtml: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 Master Mentor Guidance</div>
            <div class="mentor-msg">
              Dear language aspirants! The poem <em>'Hum Panchhi Unmukt Gagan Ke'</em> was penned by the celebrated Hindi poet <strong>Dr. Shivmangal Singh 'Suman'</strong>. Through the voice of captive birds, the poet underscores that freedom is more precious than all golden luxuries! Even in a cage of gold ('कनक-कटोरी'), true happiness is impossible because flight and natural freedom are the essence of life.
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ Iconic Stanzas & Literary Meanings</div>
            <ul>
              <li><strong>Stanza 1:</strong><br/>
                <em>"हम पंछी उन्मुक्त गगन के, पिंजरबद्ध न गा पाएँगे,<br/>
                कनक-तीलियों से टकराकर, पुलकित पंख टूट जाएँगे।"</em><br/>
                <strong>Meaning:</strong> Birds belonging to the boundless open sky cannot sing inside cages; their joyous fluttering wings will shatter against the golden bars of captivity.
              </li>
              <li><strong>Stanza 2:</strong><br/>
                <em>"हम बहता जल पीनेवाले, मर जाएँगे भूखे-प्यासे,<br/>
                कही भली है कटुक निबौरी, कनक-कटोरी की मैदा से।"</em><br/>
                <strong>Meaning:</strong> Birds prefer drinking flowing river water and eating bitter neem berries ('कटुक निबौरी') in freedom rather than eating refined flour ('मैदा') in a golden bowl ('कनक-कटोरी') while imprisoned!
              </li>
              <li><strong>Core Values:</strong> Supreme value of freedom (स्वाधीनता), respect for animal rights, critique of slavery.</li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="teacher-mentor-card">
            <div class="mentor-header">👨‍🏫 शिक्षक का मार्गदर्शन (गुरु की सीख)</div>
            <div class="mentor-msg">
              प्रिय हिंदी भाषा अभ्यर्थियों! प्रसिद्ध कवि <strong>डॉ. शिवमंगल सिंह 'सुमन'</strong> की यह कालजयी कविता पक्षियों के माध्यम से पराधीनता की पीड़ा और स्वतंत्रता के अनमोल महत्व को दर्शाती है। पक्षियों के लिए सोने का पिंजरा और सोने की कटोरी में मैदा भी गुलामी की जंजीरें हैं। उन्हें बहता जल पीना और नीम की कड़वी निबौरी खाना पसंद है, बशर्ते वे उन्मुक्त आकाश में उड़ सकें!
            </div>
          </div>
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ प्रमुख पंक्तियाँ एवं भावार्थ</div>
            <ul>
              <li><strong>प्रथम पद:</strong><br/>
                <em>"हम पंछी उन्मुक्त गगन के, पिंजरबद्ध न गा पाएँगे,<br/>
                कनक-तीलियों से टकराकर, पुलकित पंख टूट जाएँगे।"</em><br/>
                <strong>भावार्थ:</strong> खुले आकाश में उड़ने वाले पक्षी पिंजरे में बंद रहकर चहचहा नहीं सकते; सोने की तीलियों से टकराकर उनके कोमल पंख टूट जाएंगे।
              </li>
              <li><strong>द्वितीय पद:</strong><br/>
                <em>"हम बहता जल पीनेवाले, मर जाएँगे भूखे-प्यासे,<br/>
                कही भली है कटुक निबौरी, कनक-कटोरी की मैदा से।"</em><br/>
                <strong>भावार्थ:</strong> सोने की कटोरी में मिलने वाले स्वादिष्ट पकवानों से कहीं अच्छी जंगल में कड़वी निबौरी है, क्योंकि उसमें आज़ादी का सुख है!
              </li>
              <li><strong>मूल संदेश:</strong> स्वाधीनता का कोई विकल्प नहीं, पक्षियों को पिंजरे में कैद करना प्रकृति के विरुद्ध है।</li>
            </ul>
          </div>
        `
      },
      {
        heading: "2. Grammar Section: Samas, Visheshan, Synonyms & Antonyms",
        headingHi: "2. व्याकरण एवं भाषा बोध: समास, विशेषण, पर्यायवाची व विलोम",
        contentHtml: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ NCERT Chapter 1 Grammar Repository</div>
            <ul>
              <li><strong>1. द्वंद्व समास (Dvandva Samas):</strong><br/>
                Where both words are equally important and connected with a hyphen (-), meaning 'और' (and).<br/>
                Examples from chapter: <em>भूखे-प्यासे</em> (भूखे और प्यासे), <em>हँसते-गाते</em>, <em>तनती-डोरी</em>, <em>सुख-दुख</em>, <em>रात-दिन</em>।
              </li>
              <li><strong>2. गुणवाचक विशेषण (Adjectives of Quality):</strong><br/>
                - <em>कनक-तीलियाँ:</em> कनक (स्वर्ण) यहाँ तीलियों की विशेषता बता रहा है।<br/>
                - <em>कटुक निबौरी:</em> कटुक (कड़वी) निबौरी की विशेषता है।<br/>
                - <em>पुलकित पंख:</em> पुलकित (आनंदित/रोमांचित) पंखों की विशेषता है।<br/>
                - <em>उन्मुक्त गगन:</em> उन्मुक्त (बंधनमुक्त/खुला) गगन की विशेषता है।
              </li>
              <li><strong>3. पर्यायवाची शब्द (Synonyms):</strong><br/>
                - <strong>पंछी / पक्षी:</strong> खग, विहग, पखेरू, नभचर, अंडज।<br/>
                - <strong>गगन:</strong> आकाश, नभ, अम्बर, व्योम, फलक।<br/>
                - <strong>कनक:</strong> सोना, स्वर्ण, कंचन, हेम, कुंदन।<br/>
                - <strong>तरु:</strong> वृक्ष, पेड़, विटप, पादप, द्रुम।
              </li>
              <li><strong>4. विलोम शब्द (Antonyms):</strong><br/>
                - उन्मुक्त $\times$ बद्ध / परतंत्र<br/>
                - कटुक $\times$ मधुर / मीठा<br/>
                - स्वतंत्र $\times$ परतंत्र / गुलाम<br/>
                - सीमाहीन $\times$ सीमित
              </li>
            </ul>
          </div>
        `,
        contentHtmlHi: `
          <div class="guru-mantra-box">
            <div class="mantra-title">⚡ अध्याय 1 व्याकरण एवं शब्द भंडार</div>
            <ul>
              <li><strong>1. द्वंद्व समास (Dvandva Samas):</strong><br/>
                जिस समास में दोनों पद प्रधान हों और विग्रह करने पर 'और' या 'या' लगे:<br/>
                पाठ के उदाहरण: <em>भूखे-प्यासे</em> (भूखे और प्यासे), <em>हँसते-गाते</em>, <em>रात-दिन</em>, <em>दाल-रोटी</em>।
              </li>
              <li><strong>2. गुणवाचक विशेषण (Adjective):</strong><br/>
                - <em>कनक-तीलियाँ:</em> तीलियों की विशेषता (सोने की)।<br/>
                - <em>कटुक निबौरी:</em> निबौरी की विशेषता (कड़वी)।<br/>
                - <em>पुलकित पंख:</em> पंखों की विशेषता (खुशी से रोमांचित)।<br/>
                - <em>उन्मुक्त गगन:</em> आकाश की विशेषता (खुला/बंधनमुक्त)।
              </li>
              <li><strong>3. पर्यायवाची शब्द:</strong><br/>
                - <strong>पक्षी:</strong> खग, विहग, पखेरू, नभचर।<br/>
                - <strong>गगन:</strong> नभ, आकाश, अम्बर, व्योम।<br/>
                - <strong>कनक:</strong> सोना, स्वर्ण, कंचन, हेम।<br/>
                - <strong>जल:</strong> नीर, वारि, तोय, अम्बु।
              </li>
              <li><strong>4. विलोम शब्द:</strong><br/>
                - उन्मुक्त $\times$ बद्ध<br/>
                - कटुक $\times$ मधुर<br/>
                - स्वतंत्र $\times$ परतंत्र<br/>
                - इच्छा $\times$ अनिच्छा
              </li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "कविता 'हम पंछी उन्मुक्त गगन के' के रचयिता कौन हैं?",
        qHi: "कविता 'हम पंछी उन्मुक्त गगन के' के रचयिता कौन हैं?",
        options: ["सूर्यकांत त्रिपाठी 'निराला'", "डॉ. शिवमंगल सिंह 'सुमन'", "रामधारी सिंह 'दिनकर'", "जयशंकर प्रसाद"],
        optionsHi: ["सूर्यकांत त्रिपाठी 'निराला'", "डॉ. शिवमंगल सिंह 'सुमन'", "रामधारी सिंह 'दिनकर'", "जयशंकर प्रसाद"],
        ans: 1,
        pyqRef: "CTET Paper 2 Hindi & BPSC TRE 6-8",
        explanation: "This poem is written by renowned Hindi poet Dr. Shivmangal Singh 'Suman'.",
        explanationHi: "यह प्रसिद्ध कविता डॉ. शिवमंगल सिंह 'सुमन' द्वारा रचित है।"
      },
      {
        id: 2,
        q: "कविता में 'कनक-तीलियों' शब्द में 'कनक' का क्या अर्थ है?",
        qHi: "कविता में 'कनक-तीलियों' शब्द में 'कनक' का क्या अर्थ है?",
        options: ["चांदी", "सोना (Gold)", "लोहा", "तांबा"],
        optionsHi: ["चांदी", "सोना (Gold)", "लोहा", "तांबा"],
        ans: 1,
        pyqRef: "NCERT Class 7 Hindi Ch 1 & State TET",
        explanation: "Kanak means gold (सोना/स्वर्ण). Kanak-tiliyan means golden bars of the cage.",
        explanationHi: "कनक का अर्थ सोना (स्वर्ण) होता है। कनक-तीलियाँ अर्थात् सोने का पिंजरा।"
      },
      {
        id: 3,
        q: "पक्षियों को सोने की कटोरी की मैदा से अधिक क्या प्रिय है?",
        qHi: "पक्षियों को सोने की कटोरी की मैदा से अधिक क्या प्रिय है?",
        options: ["मीठे फल", "कटुक निबौरी (कड़वी निबौरी)", "दूध-भात", "रोटी के टुकड़े"],
        optionsHi: ["मीठे फल", "कटुक निबौरी (कड़वी निबौरी)", "दूध-भात", "रोटी के टुकड़े"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC Middle School",
        explanation: "Birds prefer eating the bitter neem berry (कटुक निबौरी) in freedom rather than refined flour in captivity.",
        explanationHi: "पक्षियों को स्वतंत्रता में खाई जाने वाली कड़वी निबौरी पराधीनता के स्वादिष्ट पकवानों से अधिक प्रिय है।"
      },
      {
        id: 4,
        q: "शब्द 'भूखे-प्यासे' में कौन-सा समास है?",
        qHi: "शब्द 'भूखे-प्यासे' में कौन-सा समास है?",
        options: ["तत्पुरुष समास", "द्विगु समास", "द्वंद्व समास", "कर्मधारय समास"],
        optionsHi: ["तत्पुरुष समास", "द्विगु समास", "द्वंद्व समास (Dvandva Samas)", "कर्मधारय समास"],
        ans: 2,
        pyqRef: "CTET Paper 2 Hindi Grammar & UPTET",
        explanation: "In 'भूखे-प्यासे', both terms are equal and connected by 'और' (भूखे और प्यासे), hence Dvandva Samas.",
        explanationHi: "जिसमें दोनों पद प्रधान हों और विग्रह करने पर 'और' आए (भूखे और प्यासे), वहाँ द्वंद्व समास होता है।"
      },
      {
        id: 5,
        q: "‘क्षितिज’ शब्द का वास्तविक अर्थ क्या है?",
        qHi: "‘क्षितिज’ शब्द का वास्तविक अर्थ क्या है?",
        options: ["आकाश की सबसे ऊँची सीमा", "जहाँ पृथ्वी और आकाश मिलते हुए दिखाई देते हैं", "बादलों का समूह", "तारों का मंडल"],
        optionsHi: ["आकाश की सबसे ऊँची सीमा", "जहाँ पृथ्वी और आकाश मिलते हुए दिखाई देते हैं (Horizon)", "बादलों का समूह", "तारों का मंडल"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 & State TET",
        explanation: "Kshitij (Horizon) is the apparent boundary line where Earth and sky seem to meet.",
        explanationHi: "क्षितिज वह काल्पनिक स्थान है जहाँ धरती और आकाश मिलते हुए प्रतीत होते हैं।"
      },
      {
        id: 6,
        q: "‘पुलकित पंख’ में 'पुलकित' शब्द व्याकरण की दृष्टि से क्या है?",
        qHi: "‘पुलकित पंख’ में 'पुलकित' शब्द व्याकरण की दृष्टि से क्या है?",
        options: ["संज्ञा", "सर्वनाम", "विशेषण (Adjective)", "क्रियाविशेषण"],
        optionsHi: ["संज्ञा", "सर्वनाम", "विशेषण (Adjective)", "क्रियाविशेषण"],
        ans: 2,
        pyqRef: "CTET Paper 2 Hindi",
        explanation: "'पुलकित' describes the quality of wings (पंख), so it is a गुणवाचक विशेषण (Adjective of Quality).",
        explanationHi: "'पुलकित' पंखों की विशेषता (रोमांचित/आनंदित) बता रहा है, अतः यह गुणवाचक विशेषण है।"
      },
      {
        id: 7,
        q: "‘उन्मुक्त’ शब्द का सही विलोम शब्द क्या होगा?",
        qHi: "‘उन्मुक्त’ शब्द का सही विलोम शब्द क्या होगा?",
        options: ["स्वतंत्र", "बद्ध / परतंत्र", "आजाद", "उदार"],
        optionsHi: ["स्वतंत्र", "बद्ध / परतंत्र", "आजाद", "उदार"],
        ans: 1,
        pyqRef: "State TET & BPSC TRE 6-8",
        explanation: "Unmukt means free/open. Its antonym is Baddh (बद्ध/कैद/परतंत्र).",
        explanationHi: "उन्मुक्त का अर्थ खुला या बंधनमुक्त है, इसका विलोम 'बद्ध' या 'परतंत्र' होता है।"
      },
      {
        id: 8,
        q: "निम्नलिखित में से कौन-सा शब्द ‘पक्षी’ का पर्यायवाची नहीं है?",
        qHi: "निम्नलिखित में से कौन-सा शब्द ‘पक्षी’ का पर्यायवाची नहीं है?",
        options: ["खग", "विहग", "वारि", "पखेरू"],
        optionsHi: ["खग", "विहग", "वारि (Vari)", "पखेरू"],
        ans: 2,
        pyqRef: "BPSC TRE Middle School & Railway",
        explanation: "'वारि' means water (जल/नीर), not bird. Khag, Vihag, and Pakheru mean bird.",
        explanationHi: "'वारि' जल का पर्यायवाची है, पक्षी का नहीं। खग, विहग, पखेरू पक्षी के पर्यायवाची हैं।"
      },
      {
        id: 9,
        q: "‘कटुक’ शब्द का तद्भव या हिंदी अर्थ क्या है?",
        qHi: "‘कटुक’ शब्द का तद्भव या हिंदी अर्थ क्या है?",
        options: ["मीठा", "खट्टा", "कड़वा", "नमकीन"],
        optionsHi: ["मीठा", "खट्टा", "कड़वा (Bitter)", "नमकीन"],
        ans: 2,
        pyqRef: "CTET Paper 2",
        explanation: "Katuk is a Sanskrit tatsama word meaning bitter (कड़वा).",
        explanationHi: "कटुक का अर्थ कड़वा होता है।"
      },
      {
        id: 10,
        q: "पक्षियों की स्वाभाविक इच्छा क्या है?",
        qHi: "कविता के अनुसार पक्षियों की स्वाभाविक इच्छा क्या है?",
        options: ["सोने के पिंजरे में रहना", "नीले नभ की सीमा पाना और उन्मुक्त उड़ना", "मीठा दाना खाना", "मनुष्य की बोली बोलना"],
        optionsHi: ["सोने के पिंजरे में रहना", "नीले नभ की सीमा पाना और उन्मुक्त उड़ना", "मीठा दाना खाना", "मनुष्य की बोली बोलना"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 & State TET",
        explanation: "Birds naturally desire to fly freely in the limitless blue sky and reach the horizon.",
        explanationHi: "पक्षियों की इच्छा खुले नीले आकाश में स्वतंत्र उड़ने और क्षितिज को छूने की है।"
      },
      {
        id: 11,
        q: "‘स्वर्ण-श्रृंखला’ में कौन-सा समास है?",
        qHi: "‘स्वर्ण-श्रृंखला’ में कौन-सा समास है?",
        options: ["तत्पुरुष समास", "अव्ययीभाव समास", "बहुव्रीहि समास", "द्विगु समास"],
        optionsHi: ["तत्पुरुष समास (संबंध तत्पुरुष)", "अव्ययीभाव समास", "बहुव्रीहि समास", "द्विगु समास"],
        ans: 0,
        pyqRef: "CTET Paper 2 Hindi Grammar",
        explanation: "विग्रह: स्वर्ण की श्रृंखला (का/के/की कारक चिन्ह) => संबंध तत्पुरुष समास।",
        explanationHi: "स्वर्ण की श्रृंखला (संबंध कारक 'की' का लोप) होने से संबंध तत्पुरुष समास है।"
      },
      {
        id: 12,
        q: "‘तारक-अनार’ में कौन-सा अलंकार है?",
        qHi: "‘तारक-अनार’ (तारों रूपी अनार के दाने) में कौन-सा अलंकार है?",
        options: ["अनुप्रास अलंकार", "रूपक अलंकार", "यमक अलंकार", "श्लेष अलंकार"],
        optionsHi: ["अनुप्रास अलंकार", "रूपक अलंकार (Rupak Alankar)", "यमक अलंकार", "श्लेष अलंकार"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School Hindi",
        explanation: "तारों पर अनार के दानों का सीधा अभेद आरोप किया गया है (तारक रूपी अनार), अतः रूपक अलंकार है।",
        explanationHi: "उपमेय (तारों) पर उपमान (अनार) का अभेद आरोप होने से रूपक अलंकार है।"
      },
      {
        id: 13,
        q: "कवि पक्षियों के माध्यम से किसका महत्व प्रतिपादित कर रहे हैं?",
        qHi: "कवि पक्षियों के माध्यम से किसका महत्व प्रतिपादित कर रहे हैं?",
        options: ["धन-दौलत का", "स्वतंत्रता का (Freedom)", "प्रकृति के विनाश का", "पिंजरों की कारीगरी का"],
        optionsHi: ["धन-दौलत का", "स्वतंत्रता का (Freedom)", "प्रकृति के विनाश का", "पिंजरों की कारीगरी का"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy",
        explanation: "The poem emphasizes the supreme and irreplaceable value of freedom for all living beings.",
        explanationHi: "कविता का मूल संदेश स्वाधीनता और आज़ादी का अनमोल महत्व है।"
      },
      {
        id: 14,
        q: "‘तरु’ शब्द का पर्यायवाची शब्द निम्नलिखित में से कौन-सा है?",
        qHi: "‘तरु’ शब्द का पर्यायवाची शब्द निम्नलिखित में से कौन-सा है?",
        options: ["विटप (वृक्ष)", "सरिता", "पर्वत", "समीर"],
        optionsHi: ["विटप (पेड़ / वृक्ष)", "सरिता", "पर्वत", "समीर"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "Taru means tree (पेड़/वृक्ष/विटप/पादप).",
        explanationHi: "तरु का अर्थ पेड़ होता है, जिसका पर्यायवाची विटप है।"
      },
      {
        id: 15,
        q: "‘फुंगी’ शब्द का क्या अर्थ है?",
        qHi: "कविता में प्रयुक्त ‘फुंगी’ शब्द का क्या अर्थ है?",
        options: ["पेड़ की जड़", "पेड़ की सबसे ऊँची टहनी का सिरा", "पेड़ का तना", "सूखा पत्ता"],
        optionsHi: ["पेड़ की जड़", "पेड़ की सबसे ऊँची टहनी का सिरा", "पेड़ का तना", "सूखा पत्ता"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 & CTET",
        explanation: "Phungi refers to the highest topmost tip of a branch where birds love to swing.",
        explanationHi: "पेड़ की शाखा या टहनी के सबसे ऊपरी सिरे को 'फुंगी' कहते हैं।"
      },
      {
        id: 16,
        q: "‘अरमान’ शब्द का हिंदी समानार्थी शब्द क्या है?",
        qHi: "‘अरमान’ शब्द का हिंदी समानार्थी शब्द क्या है?",
        options: ["इच्छा / अभिलाषा", "गुस्सा", "दुख", "आलस्य"],
        optionsHi: ["इच्छा / अभिलाषा", "गुस्सा", "दुख", "आलस्य"],
        ans: 0,
        pyqRef: "State TET & CTET",
        explanation: "Arman is an Urdu word meaning desire, wish, or aspiration (इच्छा/अभिलाषा).",
        explanationHi: "अरमान का अर्थ इच्छा, आकांक्षा या अभिलाषा होता है।"
      },
      {
        id: 17,
        q: "‘गगन’ शब्द में कौन-सी संज्ञा है?",
        qHi: "‘गगन’ शब्द में कौन-सी संज्ञा है?",
        options: ["जातिवाचक संज्ञा", "व्यक्तिवाचक संज्ञा", "भाववाचक संज्ञा", "समूहवाचक संज्ञा"],
        optionsHi: ["जातिवाचक संज्ञा", "व्यक्तिवाचक संज्ञा", "भाववाचक संज्ञा", "समूहवाचक संज्ञा"],
        ans: 1,
        pyqRef: "BPSC TRE Middle School Hindi Grammar",
        explanation: "Gagan refers to the one unique sky (आकाश), which is a Proper Noun (व्यक्तिवाचक संज्ञा).",
        explanationHi: "आकाश/गगन एक विशेष अद्वितीय तत्व का नाम है, अतः व्यक्तिवाचक संज्ञा है।"
      },
      {
        id: 18,
        q: "‘सीमाहीन’ शब्द में कौन-सा प्रत्यय लगा है?",
        qHi: "‘सीमाहीन’ शब्द में कौन-सा प्रत्यय लगा है?",
        options: ["हीन", "ईय", "न", "मान"],
        optionsHi: ["हीन (Heen)", "ईय", "न", "मान"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "सीमा + हीन = सीमाहीन (प्रत्यय = हीन)।",
        explanationHi: "मूल शब्द 'सीमा' में 'हीन' प्रत्यय जुड़ने से सीमाहीन बना है।"
      },
      {
        id: 19,
        q: "‘आकुल उड़ान’ में 'आकुल' का क्या अर्थ है?",
        qHi: "‘आकुल उड़ान’ में 'आकुल' का क्या अर्थ है?",
        options: ["शांत", "बेचैन / व्याकुल", "धीमी", "थकी हुई"],
        optionsHi: ["शांत", "बेचैन / व्याकुल (Eager / Restless)", "धीमी", "थकी हुई"],
        ans: 1,
        pyqRef: "NCERT Class 7 Ch 1 & State TET",
        explanation: "Aakul means restless, impatient, or intensely eager to fly.",
        explanationHi: "आकुल का अर्थ व्याकुल या उड़ने के लिए बेचैन होना है।"
      },
      {
        id: 20,
        q: "पक्षी मनुष्य से क्या प्रार्थना करते हैं?",
        qHi: "कविता के अंत में पक्षी मनुष्य से क्या प्रार्थना करते हैं?",
        options: ["उन्हें सोने का महल दें", "चाहे घोंसला न दें, पर उनकी उड़ान में विघ्न न डालें", "उन्हें रोज फल खिलाएँ", "उन्हें पालतू बना लें"],
        optionsHi: ["उन्हें सोने का महल दें", "चाहे घोंसला न दें, पर उनकी उड़ान में विघ्न न डालें", "उन्हें रोज फल खिलाएँ", "उन्हें पालतू बना लें"],
        ans: 1,
        pyqRef: "CTET Paper 2 & BPSC Middle School",
        explanation: "Lines: 'नीड़ न दो चाहे टहनी का, आश्रय छिन्न-भिन्न कर डालो, लेकिन पंख दिए हैं तो, आकुल उड़ान में विघ्न न डालो।'",
        explanationHi: "पक्षी कहते हैं चाहे घोंसला तोड़ दो, पर ईश्वर ने जो पंख दिए हैं तो हमारी आज़ाद उड़ान में बाधा मत डालो।"
      },
      {
        id: 21,
        q: "‘नीड़’ शब्द का क्या अर्थ है?",
        qHi: "‘नीड़’ शब्द का क्या अर्थ है?",
        options: ["पानी", "घोंसला (Nest)", "आकाश", "दाना"],
        optionsHi: ["पानी", "घोंसला (Nest)", "आकाश", "दाना"],
        ans: 1,
        pyqRef: "State TET & Railway Group D",
        explanation: "Need means nest (घोंसला), as in Harivansh Rai Bachchan's 'नीड़ का निर्माण फिर-फिर'।",
        explanationHi: "नीड़ का अर्थ घोंसला होता है।"
      },
      {
        id: 22,
        q: "‘कनक-कटोरी’ में कौन-सा अलंकार है?",
        qHi: "‘कनक-कटोरी’ में 'क' वर्ण की आवृत्ति होने से कौन-सा अलंकार है?",
        options: ["अनुप्रास अलंकार", "यमक अलंकार", "उपमा अलंकार", "अतिशयोक्ति अलंकार"],
        optionsHi: ["अनुप्रास अलंकार (Anupras)", "यमक अलंकार", "उपमा अलंकार", "अतिशयोक्ति अलंकार"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School Hindi",
        explanation: "Repetition of consonant 'क' at the beginning of words creates Anupras Alankar (Alliteration).",
        explanationHi: "'क' वर्ण की क्रमिक आवृत्ति होने के कारण अनुप्रास अलंकार है।"
      },
      {
        id: 23,
        q: "‘विघ्न’ शब्द का पर्यायवाची शब्द क्या है?",
        qHi: "‘विघ्न’ शब्द का पर्यायवाची शब्द क्या है?",
        options: ["बाधा / अड़चन", "सफलता", "आनंद", "सहायता"],
        optionsHi: ["बाधा / अड़चन (Obstacle)", "सफलता", "आनंद", "सहायता"],
        ans: 0,
        pyqRef: "CTET Paper 2",
        explanation: "Vighna means obstacle or hindrance (बाधा/रुकावट/अड़चन).",
        explanationHi: "विघ्न का अर्थ बाधा या रुकावट होता है।"
      },
      {
        id: 24,
        q: "‘आश्रय’ शब्द का विलोम शब्द क्या होगा?",
        qHi: "‘आश्रय’ शब्द का विलोम शब्द क्या होगा?",
        options: ["सदाश्रय", "निराश्रय", "आश्रित", "प्रश्रय"],
        optionsHi: ["सदाश्रय", "निराश्रय (Nirashray)", "आश्रित", "प्रश्रय"],
        ans: 1,
        pyqRef: "State TET & BPSC TRE",
        explanation: "Ashray (shelter) antonym is Nirashray (without shelter/destitute).",
        explanationHi: "आश्रय का विलोम 'निराश्रय' होता है।"
      },
      {
        id: 25,
        q: "‘लाल किरण-सी चोंच’ में कौन-सा अलंकार है?",
        qHi: "‘लाल किरण-सी चोंच’ में 'सी' वाचक शब्द आने से कौन-सा अलंकार है?",
        options: ["उपमा अलंकार", "रूपक अलंकार", "उत्प्रेक्षा अलंकार", "यमक अलंकार"],
        optionsHi: ["उपमा अलंकार (Upma Alankar)", "रूपक अलंकार", "उत्प्रेक्षा अलंकार", "यमक अलंकार"],
        ans: 0,
        pyqRef: "BPSC TRE Middle School & CTET",
        explanation: "The beak is compared to a red sunray using the comparison word 'सी' (Upma Alankar).",
        explanationHi: "चोंच की तुलना सूर्य की लाल किरण से 'सी' वाचक शब्द द्वारा की गई है, अतः उपमा अलंकार है।"
      },
      {
        id: 26,
        q: "‘पिंजरबद्ध’ का समास विग्रह क्या होगा?",
        qHi: "‘पिंजरबद्ध’ का सही समास विग्रह क्या होगा?",
        options: ["पिंजरे का बद्ध", "पिंजरे में बद्ध (बंद)", "पिंजरे से बद्ध", "पिंजरे के लिए बद्ध"],
        optionsHi: ["पिंजरे का बद्ध", "पिंजरे में बद्ध / बंद (अधिकरण तत्पुरुष)", "पिंजरे से बद्ध", "पिंजरे के लिए बद्ध"],
        ans: 1,
        pyqRef: "CTET Paper 2 Hindi Grammar",
        explanation: "पिंजरे में बद्ध (अधिकरण तत्पुरुष समास, कारक चिन्ह 'में')।",
        explanationHi: "पिंजरे में बंद (बद्ध), अधिकरण तत्पुरुष समास।"
      },
      {
        id: 27,
        q: "‘हँसते-गाते’ शब्द किस व्याकरणिक श्रेणी में आता है?",
        qHi: "‘हँसते-गाते’ शब्द किस व्याकरणिक श्रेणी में आता है?",
        options: ["युग्म शब्द / सामासिक पद", "मुहावरा", "लोकोक्ति", "संधि"],
        optionsHi: ["युग्म शब्द / सामासिक पद (द्वंद्व समास)", "मुहावरा", "लोकोक्ति", "संधि"],
        ans: 0,
        pyqRef: "NCERT Class 7 Ch 1 भाषा की बात",
        explanation: "हँसते-गाते is a compound word (युग्म शब्द) forming a Dvandva Samas.",
        explanationHi: "यह योजक चिन्ह युक्त युग्म शब्द और द्वंद्व समास का उदाहरण है।"
      },
      {
        id: 28,
        q: "डॉ. शिवमंगल सिंह 'सुमन' किस युग/धारा के प्रमुख कवि हैं?",
        qHi: "डॉ. शिवमंगल सिंह 'सुमन' आधुनिक हिंदी कविता की किस काव्यधारा के प्रमुख कवि हैं?",
        options: ["छायावाद", "प्रगतिवाद (Progressive Poetry)", "प्रयोगवाद", "रीतिकाल"],
        optionsHi: ["छायावाद", "प्रगतिवाद (Pragativad)", "प्रयोगवाद", "रीतिकाल"],
        ans: 1,
        pyqRef: "BPSC TRE 6-8 Hindi Literature",
        explanation: "Dr. Shivmangal Singh 'Suman' is one of the forefront poets of Hindi Pragativad (Progressive movement).",
        explanationHi: "डॉ. शिवमंगल सिंह 'सुमन' प्रगतिवादी काव्यधारा के प्रमुख स्तंभ कवि हैं।"
      },
      {
        id: 29,
        q: "‘स्वर्ण’ शब्द का तद्भव रूप क्या है?",
        qHi: "‘स्वर्ण’ (तत्सम) का तद्भव रूप क्या है?",
        options: ["सोना", "कनक", "सुवर्ण", "कंचन"],
        optionsHi: ["सोना (Sona)", "कनक", "सुवर्ण", "कंचन"],
        ans: 0,
        pyqRef: "State TET & Railway Group D",
        explanation: "Tatsama 'स्वर्ण' becomes tadbhava 'सोना'.",
        explanationHi: "तत्सम 'स्वर्ण' का तद्भव रूप 'सोना' होता है।"
      },
      {
        id: 30,
        q: "पक्षियों को पिंजरे में बंद करने से केवल उनकी आज़ादी ही नहीं छिनती, बल्कि क्या प्रभावित होता है?",
        qHi: "पक्षियों को पिंजरे में बंद करने से उनकी आज़ादी के साथ-साथ कौन-सा प्राकृतिक संतुलन प्रभावित होता है?",
        options: ["मौसम", "पर्यावरण और खाद्य श्रृंखला (Food Chain)", "समुद्र का जलस्तर", "सौर मंडल"],
        optionsHi: ["मौसम", "पर्यावरण और खाद्य श्रृंखला (Food Chain)", "समुद्र का जलस्तर", "सौर मंडल"],
        ans: 1,
        pyqRef: "CTET Paper 2 Pedagogy & EVS",
        explanation: "Birds eat insects, control pests, and disperse seeds; caging them disrupts the food chain and ecosystem.",
        explanationHi: "पक्षी कीटों को खाकर फसलों की रक्षा करते हैं और बीजों का प्रकीर्णन करते हैं, उन्हें कैद करने से खाद्य श्रृंखला व पर्यावरण संतुलन बिगड़ता है।"
      }
    ]
  }
];
