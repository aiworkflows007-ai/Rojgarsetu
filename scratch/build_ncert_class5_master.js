const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/db.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// We are pivoting fully to NCERT Master Preparation starting from Class 5!
// Clean up old exam-specific notes and replace with 100% NCERT Class-wise & Subject-wise chapters!

const ncertClass5MathChapters = [
  {
    id: "ncert-c5-math-ch1",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 1,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 1: We the Travellers — I (Large Numbers & Place Value)",
    readingTime: "12 min read",
    badge: "🏛️ UPSC CSAT / SSC CGL / CTET LINK",
    desc: "Indian vs International place value systems, Ten Thousands (TTh), Lakhs, Crores, distance and speed estimation for foot, bicycle, bus and express trains.",
    competitionEdge: "Face Value vs Place Value differences, Indian vs International comma separation (3:2:2 vs 3:3:3), millions-to-lakhs conversions.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: How Humans Count Large Quantities",
        contentHtml: `
          <p>From ancient travel by foot, animal carts, and boats to modern high-speed trains, humans have needed to measure long distances and count large numbers. NCERT introduces numbers beyond 1,000:</p>
          <ul>
            <li><strong>Adding thousands:</strong> 1,000 &rarr; 2,000 &rarr; ... &rarr; 9,000. Adding 1,000 to 9,000 gives <strong>10,000 (Ten Thousand - TTh)</strong>.</li>
            <li><strong>The Place Value Ladder:</strong>
              <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.86rem; text-align:center;">
                <tr style="background:#eef2ff;">
                  <th style="border:1px solid #cbd5e1; padding:6px;">Crore (C)</th>
                  <th style="border:1px solid #cbd5e1; padding:6px;">Ten Lakh (TL)</th>
                  <th style="border:1px solid #cbd5e1; padding:6px;">Lakh (L)</th>
                  <th style="border:1px solid #cbd5e1; padding:6px;">Ten Thousand (TTh)</th>
                  <th style="border:1px solid #cbd5e1; padding:6px;">Thousand (Th)</th>
                  <th style="border:1px solid #cbd5e1; padding:6px;">Hundred (H)</th>
                  <th style="border:1px solid #cbd5e1; padding:6px;">Ten (T)</th>
                  <th style="border:1px solid #cbd5e1; padding:6px;">One (O)</th>
                </tr>
                <tr>
                  <td style="border:1px solid #cbd5e1; padding:6px;">1,00,00,000</td>
                  <td style="border:1px solid #cbd5e1; padding:6px;">10,00,000</td>
                  <td style="border:1px solid #cbd5e1; padding:6px;">1,00,000</td>
                  <td style="border:1px solid #cbd5e1; padding:6px;">10,000</td>
                  <td style="border:1px solid #cbd5e1; padding:6px;">1,000</td>
                  <td style="border:1px solid #cbd5e1; padding:6px;">100</td>
                  <td style="border:1px solid #cbd5e1; padding:6px;">10</td>
                  <td style="border:1px solid #cbd5e1; padding:6px;">1</td>
                </tr>
              </table>
            </li>
          </ul>
        `
      },
      {
        heading: "2. Competition Edge: Indian vs. International System & Conversion Rules",
        contentHtml: `
          <div class="note-alert-box info">
            <strong>Key Conversion Equivalence (Asked repeatedly in SSC, CTET & BPSC TRE):</strong>
            <ul>
              <li><strong>1 Hundred Thousand</strong> = 1 Lakh (1,00,000)</li>
              <li><strong>1 Million</strong> = 10 Lakhs (1,000,000)</li>
              <li><strong>10 Millions</strong> = 1 Crore (10,000,000)</li>
              <li><strong>100 Millions</strong> = 10 Crores (100,000,000)</li>
              <li><strong>1 Billion</strong> = 1,000 Millions = 100 Crores (1,000,000,000)</li>
            </ul>
          </div>
          <div class="note-alert-box warning">
            <strong>Place Value vs. Face Value Formula:</strong><br/>
            In the number <strong>7,84,321</strong>:<br/>
            &bull; Face Value of 8 = <strong>8</strong> (the actual digit itself).<br/>
            &bull; Place Value of 8 = 8 &times; 10,000 = <strong>80,000</strong>.<br/>
            &bull; Difference = 80,000 - 8 = <strong>79,992</strong>.
          </div>
        `
      },
      {
        heading: "3. Speed & Distance Estimates for Travellers",
        contentHtml: `
          <p>NCERT compares real-world travel speeds:</p>
          <ul>
            <li>Walking: ~ 4 to 5 km/h</li>
            <li>Bicycle: ~ 12 to 15 km/h</li>
            <li>Bus: ~ 40 to 50 km/h</li>
            <li>Train: ~ 80 to 100 km/h</li>
          </ul>
          <p><strong>Universal Travel Formula:</strong> <code>Distance = Speed &times; Time</code> | <code>Time = Distance / Speed</code></p>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "In the International number system, how is '5 Crore' written and what is it called?",
        options: ["5 Million", "50 Million", "500 Million", "5 Billion"],
        ans: 1,
        pyqRef: "CTET Paper 1 & BPSC TRE Primary",
        explanation: "1 Crore = 10 Million. Therefore, 5 Crore = 5 × 10 Million = 50 Million (50,000,000)."
      },
      {
        id: 2,
        q: "What is the difference between the Place Value and Face Value of 6 in the number 9,65,432?",
        options: ["59,994", "60,000", "54,000", "59,400"],
        ans: 0,
        pyqRef: "SSC CGL / CHSL & Railway NTPC",
        explanation: "Place value of 6 is 6 × 10,000 = 60,000. Face value of 6 is 6. Difference = 60,000 - 6 = 59,994."
      },
      {
        id: 3,
        q: "A person travels a distance of 180 km by bus at an average speed of 45 km/h. How many hours will the journey take?",
        options: ["3.5 hours", "4 hours", "4.5 hours", "5 hours"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Exercise",
        explanation: "Time = Distance / Speed = 180 km / 45 km/h = 4 hours."
      },
      {
        id: 4,
        q: "Which of the following is equivalent to 1 Billion?",
        options: ["10 Crore", "50 Crore", "100 Crore", "1,000 Crore"],
        ans: 2,
        pyqRef: "UPSC CSAT & State PCS",
        explanation: "1 Billion = 1,000 Million = 1,000 × 10 Lakh = 10,000 Lakh = 100 Crore."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch2",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 2,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 2: Fractions (Part of a Whole & Equivalence)",
    readingTime: "14 min read",
    badge: "🎯 FOUNDATION FOR PERCENTAGE & RATIO",
    desc: "Understanding fractional parts of different wholes, equivalent fractions, comparing fractions, grid shading, and fraction-to-percentage conversion.",
    competitionEdge: "Comparing fractions without LCM (Cross-multiplication shortcut), fraction-to-percentage reference table, ascending/descending order tricks.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: The Tamanna's Chocolate Rule",
        contentHtml: `
          <p>Tamanna says that 1/2 of her small chocolate is smaller than 1/3 of a huge chocolate. Is that correct? <strong>Yes!</strong></p>
          <div class="note-alert-box info">
            <strong>Golden NCERT Rule:</strong> To compare two fractions, the 'wholes' from which the fractions are derived must be the same size. A fraction by itself represents a relative portion, not an absolute quantity!
          </div>
          <p><strong>Equivalent Fractions:</strong> Fractions that represent the same value even though they look different:</p>
          <p style="text-align:center; font-size:1.1rem; font-weight:800; color:#4338ca;">
            1/2 = 2/4 = 3/6 = 4/8 = 5/10 = 50%<br/>
            1/3 = 2/6 = 3/9 = 4/12 = 33.33%
          </p>
        `
      },
      {
        heading: "2. Competition Edge: Fast Fraction Comparison (Cross-Multiplication Method)",
        contentHtml: `
          <p>In competitive exams, never spend time taking large LCMs to compare fractions!</p>
          <div class="note-alert-box warning">
            <strong>Cross-Multiplication Trick:</strong> To compare a/b and c/d:<br/>
            Multiply numerator of first by denominator of second: <code>a &times; d</code>.<br/>
            Multiply numerator of second by denominator of first: <code>c &times; b</code>.<br/>
            &bull; If <code>a &times; d &gt; c &times; b</code> &rarr; <code>a/b &gt; c/d</code>.<br/>
            &bull; Example: Compare <strong>7/11</strong> and <strong>5/8</strong>:<br/>
            7 &times; 8 = <strong>56</strong>; 5 &times; 11 = <strong>55</strong>. Since 56 &gt; 55, <strong>7/11 &gt; 5/8</strong>!
          </div>
        `
      },
      {
        heading: "3. High-Yield Fraction to Percentage Table",
        contentHtml: `
          <p>Memorize these foundational values for lightning-fast arithmetic calculations:</p>
          <ul>
            <li>1/2 = 50% | 1/3 = 33.33% | 1/4 = 25% | 1/5 = 20%</li>
            <li>1/6 = 16.67% | 1/7 = 14.28% | 1/8 = 12.5% | 1/9 = 11.11%</li>
            <li>1/10 = 10% | 1/11 = 9.09% | 1/12 = 8.33% | 1/16 = 6.25%</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Which of the following fractions is equivalent to 3/4?",
        options: ["6/10", "9/12", "12/20", "15/25"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 2",
        explanation: "Multiplying numerator and denominator by 3: (3 × 3) / (4 × 3) = 9/12."
      },
      {
        id: 2,
        q: "Which of the following is the largest fraction: 5/7, 7/9, 9/11, or 11/13?",
        options: ["5/7", "7/9", "9/11", "11/13"],
        ans: 3,
        pyqRef: "SSC CGL / Railway NTPC / CTET",
        explanation: "Shortcut Rule: If the difference between numerator and denominator is the same in all proper fractions (here 7-5=2, 9-7=2, 11-9=2, 13-11=2), the fraction with the largest numerator is the largest. Thus, 11/13 is the largest."
      },
      {
        id: 3,
        q: "In a class of 40 students, 3/5 are girls. How many boys are there in the class?",
        options: ["16", "24", "18", "20"],
        ans: 0,
        pyqRef: "BPSC TRE Primary & CTET Paper 1",
        explanation: "Fraction of boys = 1 - 3/5 = 2/5. Number of boys = (2/5) × 40 = 2 × 8 = 16 boys."
      },
      {
        id: 4,
        q: "If 1/3 of a number is 25, what is 2/5 of that same number?",
        options: ["30", "35", "40", "28"],
        ans: 0,
        pyqRef: "Competitive Arithmetic Foundation",
        explanation: "Number = 25 × 3 = 75. Now, 2/5 of 75 = 2 × 15 = 30."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch3",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 3,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 3: Angles as Turns (Geometry & Clock Trigonometry)",
    readingTime: "13 min read",
    badge: "⏰ CLOCK & DIRECTION REASONING",
    desc: "Understanding angles through rotation and turns (full turn 360°, half turn 180°, quarter turn 90°), acute, right, obtuse, straight angles, and clock hand angle formulas.",
    competitionEdge: "Clock hands angle formula |30H - 5.5M|, speed of hour hand (0.5°/min) vs minute hand (6°/min), complementary and supplementary angles.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Angles Created by Turns",
        contentHtml: `
          <p>NCERT explains that an angle is simply a measure of rotation or a turn around a fixed vertex:</p>
          <ul>
            <li><strong>Full Turn:</strong> When an object rotates completely back to its original position = <strong>360&deg;</strong>.</li>
            <li><strong>Half Turn:</strong> Rotating to the exact opposite direction = <strong>180&deg; (Straight Angle)</strong>.</li>
            <li><strong>Quarter Turn:</strong> One-fourth of a circle = <strong>90&deg; (Right Angle)</strong>.</li>
            <li><strong>Acute Angle:</strong> Less than a quarter turn (between 0&deg; and 90&deg;) &mdash; e.g. open scissors blades.</li>
            <li><strong>Obtuse Angle:</strong> More than a quarter turn but less than a half turn (between 90&deg; and 180&deg;) &mdash; e.g. a wide-open laptop screen.</li>
          </ul>
        `
      },
      {
        heading: "2. Competition Edge: Clock Hands Speed & Angle Formula",
        contentHtml: `
          <div class="note-alert-box info">
            <strong>Clock Hands Angular Speed (Very High Yield):</strong>
            <ul>
              <li><strong>Minute Hand:</strong> Moves 360&deg; in 60 minutes &rarr; <strong>6&deg; per minute</strong>.</li>
              <li><strong>Hour Hand:</strong> Moves 360&deg; in 12 hours (720 min) &rarr; <strong>0.5&deg; per minute</strong> (30&deg; per hour).</li>
              <li><strong>Relative Speed:</strong> Minute hand gains <code>6&deg; - 0.5&deg; = 5.5&deg;</code> per minute over the hour hand.</li>
            </ul>
          </div>
          <div class="note-alert-box warning">
            <strong>Master Clock Angle Formula:</strong><br/>
            <code>Angle = |30 &times; H - 5.5 &times; M|</code><br/>
            &bull; At <strong>3:20</strong>: Angle = |30(3) - 5.5(20)| = |90 - 110| = <strong>20&deg;</strong>.<br/>
            &bull; At <strong>8:30</strong>: Angle = |30(8) - 5.5(30)| = |240 - 165| = <strong>75&deg;</strong>.
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What type of angle is formed by the hands of a clock at exactly 3:00?",
        options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 3",
        explanation: "At 3:00, the hour hand points at 3 and the minute hand at 12, forming a 90° right angle (quarter turn)."
      },
      {
        id: 2,
        q: "What is the angle between the hour hand and minute hand of a clock at 4:20?",
        options: ["0°", "10°", "20°", "15°"],
        ans: 1,
        pyqRef: "SSC CGL / RRB NTPC Reasoning",
        explanation: "Using Angle = |30H - 5.5M|: |30(4) - 5.5(20)| = |120 - 110| = 10°."
      },
      {
        id: 3,
        q: "How many degrees does the minute hand of a clock rotate in 25 minutes?",
        options: ["120°", "150°", "180°", "100°"],
        ans: 1,
        pyqRef: "Competitive Arithmetic & CTET",
        explanation: "Minute hand rotates 6° per minute. In 25 minutes: 25 × 6° = 150°."
      },
      {
        id: 4,
        q: "Two angles are supplementary. If one angle is 65°, what is the measure of the other angle?",
        options: ["25°", "115°", "125°", "95°"],
        ans: 1,
        pyqRef: "Geometry Basic Foundation",
        explanation: "Supplementary angles add up to 180°. Other angle = 180° - 65° = 115°."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch4",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 4,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 4: We the Travellers — II (Multiplication, Division & Timetables)",
    readingTime: "11 min read",
    badge: "🚆 TIMETABLES & UNITARY METHOD",
    desc: "Long multiplication algorithms, division with remainders, railway timetable reading, journey time calculation, and unit rates.",
    competitionEdge: "Divisibility rules (2 to 11) for instant option elimination, unitary method shortcuts, remainder theorem properties.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Travel Schedules & Timetables",
        contentHtml: `
          <p>Real-life travel demands reading departure/arrival charts, calculating halt durations, and multi-digit arithmetic:</p>
          <ul>
            <li><strong>Division Division Theorem:</strong> <code>Dividend = (Divisor &times; Quotient) + Remainder</code> (where Remainder &lt; Divisor).</li>
            <li><strong>Unitary Method:</strong> Find value of 1 item first (by dividing), then find value of required quantity (by multiplying).</li>
          </ul>
        `
      },
      {
        heading: "2. Competition Edge: Fast Divisibility Rules",
        contentHtml: `
          <div class="note-alert-box info">
            <strong>Key Divisibility Tests:</strong>
            <ul>
              <li><strong>Divisible by 3:</strong> Sum of digits is divisible by 3.</li>
              <li><strong>Divisible by 4:</strong> Last two digits form a number divisible by 4.</li>
              <li><strong>Divisible by 8:</strong> Last three digits form a number divisible by 8.</li>
              <li><strong>Divisible by 9:</strong> Sum of digits is divisible by 9.</li>
              <li><strong>Divisible by 11:</strong> Difference between sum of odd-placed digits and even-placed digits is 0 or multiple of 11.</li>
            </ul>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "If 12 bus tickets cost ₹540, what is the cost of 7 such tickets?",
        options: ["₹315", "₹280", "₹350", "₹325"],
        ans: 0,
        pyqRef: "NCERT Chapter 4 Unitary Method",
        explanation: "Cost of 1 ticket = 540 / 12 = ₹45. Cost of 7 tickets = 45 × 7 = ₹315."
      },
      {
        id: 2,
        q: "When 4,875 is divided by 15, what is the quotient and remainder?",
        options: ["Quotient = 325, Remainder = 0", "Quotient = 315, Remainder = 5", "Quotient = 335, Remainder = 0", "Quotient = 320, Remainder = 10"],
        ans: 0,
        pyqRef: "Arithmetic Division Basics",
        explanation: "4,875 / 15 = 325 with Remainder = 0."
      },
      {
        id: 3,
        q: "A train leaves Patna at 06:45 AM and reaches Delhi at 09:15 PM on the same day. What is the total travel duration?",
        options: ["14 hours 30 mins", "15 hours", "13 hours 45 mins", "14 hours 15 mins"],
        ans: 0,
        pyqRef: "Railway NTPC & CTET Paper 1",
        explanation: "From 06:45 AM to 06:45 PM = 12 hours. From 06:45 PM to 09:15 PM = 2 hours 30 mins. Total = 14 hours 30 mins."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch5",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 5,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 5: Far and Near (Metric Conversions & Perimeter)",
    readingTime: "10 min read",
    badge: "📏 METRIC SYSTEM & PERIMETER",
    desc: "Metric system relations (mm, cm, m, km), measuring boundaries, perimeter of irregular figures, and thread measurement method.",
    competitionEdge: "King Henry Died Unusually Drinking Chocolate Milk metric ladder mnemonic, perimeter of composite figures, regular polygon perimeters.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Measuring Boundaries",
        contentHtml: `
          <p>Perimeter is the total length of the outer continuous boundary enclosing a closed 2D shape.</p>
          <ul>
            <li>1 cm = 10 mm</li>
            <li>1 m = 100 cm = 1,000 mm</li>
            <li>1 km = 1,000 m = 1,00,000 cm = 10,00,000 mm</li>
          </ul>
        `
      },
      {
        heading: "2. Metric Ladder Mnemonic",
        contentHtml: `
          <div class="note-alert-box info">
            <strong>Remember: King Henry Died Mother Didn't Care Much:</strong><br/>
            <strong>K</strong>ilo (1000) &rarr; <strong>H</strong>ecto (100) &rarr; <strong>D</strong>eca (10) &rarr; <strong>M</strong>etre (1) &rarr; <strong>D</strong>eci (0.1) &rarr; <strong>C</strong>enti (0.01) &rarr; <strong>M</strong>illi (0.001).<br/>
            Moving down: Multiply by 10 per step. Moving up: Divide by 10 per step.
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How many millimetres (mm) are there in 3.5 metres?",
        options: ["350 mm", "3,500 mm", "35,000 mm", "35 mm"],
        ans: 1,
        pyqRef: "Metric Conversions CTET / SSC",
        explanation: "1 m = 1,000 mm. So 3.5 m = 3.5 × 1,000 = 3,500 mm."
      },
      {
        id: 2,
        q: "A wire of length 36 cm is bent into an equilateral triangle. What is the length of each side?",
        options: ["9 cm", "12 cm", "6 cm", "18 cm"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 5",
        explanation: "Equilateral triangle has 3 equal sides. Perimeter = 3 × side = 36 cm &rarr; side = 36 / 3 = 12 cm."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch6",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 6,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 6: The Dairy Farm (Capacity, Volume & Rates)",
    readingTime: "12 min read",
    badge: "🥛 CAPACITY & MIXTURE ARITHMETIC",
    desc: "Liquid volume in Litres and Millilitres, standard measuring cans, milk collection records, fat percentage pricing, and dilution basics.",
    competitionEdge: "1 m³ = 1,000 L, 1 L = 1,000 cm³, mixture dilution ratio basics, profit calculation on milk volume.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Capacity of Containers",
        contentHtml: `
          <p>Milk diaries use measuring cans of 100 mL, 200 mL, 500 mL, and 1 Litre:</p>
          <ul>
            <li>1 Litre (L) = 1,000 millilitres (mL)</li>
            <li>500 mL = 1/2 Litre</li>
            <li>250 mL = 1/4 Litre</li>
            <li>200 mL = 1/5 Litre (Five 200 mL cans make 1 Litre)</li>
          </ul>
        `
      },
      {
        heading: "2. Competition Edge: Volume Units & Mixtures",
        contentHtml: `
          <div class="note-alert-box info">
            <strong>Important Solid-to-Liquid Conversions:</strong><br/>
            &bull; 1 cm&sup3; = 1 mL<br/>
            &bull; 1,000 cm&sup3; = 1 Litre<br/>
            &bull; 1 m&sup3; = 1,000 Litres
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How many 250 mL glasses of milk can be filled from a 2-litre carton?",
        options: ["6 glasses", "8 glasses", "10 glasses", "4 glasses"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 6",
        explanation: "2 Litres = 2,000 mL. Number of glasses = 2,000 / 250 = 8 glasses."
      },
      {
        id: 2,
        q: "A dairy sells milk at ₹54 per litre. What is the cost of 750 mL of milk?",
        options: ["₹40.50", "₹42.00", "₹38.50", "₹45.00"],
        ans: 0,
        pyqRef: "BPSC TRE Primary & CTET",
        explanation: "750 mL = 3/4 Litre. Cost = (3/4) × 54 = 3 × 13.5 = ₹40.50."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch7",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 7,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 7: Shapes and Patterns (Spatial Geometry & Sequences)",
    readingTime: "11 min read",
    badge: "🔷 GEOMETRY & NUMBER PATTERNS",
    desc: "2D and 3D shapes, faces, vertices and edges of cubes/cuboids, tessellations (tiling), and growing number patterns.",
    competitionEdge: "Euler's Polyhedral Formula (F + V = E + 2), net diagrams of cubes, arithmetic progression patterns.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: 3D Solids & Faces",
        contentHtml: `
          <p>Properties of common 3D shapes:</p>
          <ul>
            <li><strong>Cube:</strong> 6 square faces, 8 vertices, 12 equal edges.</li>
            <li><strong>Cuboid:</strong> 6 rectangular faces, 8 vertices, 12 edges.</li>
            <li><strong>Cylinder:</strong> 2 flat circular faces + 1 curved surface, 0 vertices, 2 edges.</li>
            <li><strong>Cone:</strong> 1 flat circular face + 1 curved surface, 1 vertex, 1 edge.</li>
            <li><strong>Sphere:</strong> 1 continuous curved surface, 0 edges, 0 vertices.</li>
          </ul>
        `
      },
      {
        heading: "2. Competition Edge: Euler's Polyhedron Formula",
        contentHtml: `
          <div class="note-alert-box warning">
            <strong>Euler's Polyhedral Formula:</strong><br/>
            <code>Faces (F) + Vertices (V) - Edges (E) = 2</code> (or <code>F + V = E + 2</code>).<br/>
            For a Cube: 6 + 8 = 12 + 2 &rarr; 14 = 14 (Verified!).
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "A polyhedron has 6 faces and 8 vertices. How many edges does it have?",
        options: ["10", "12", "14", "16"],
        ans: 1,
        pyqRef: "CTET Paper 2 & SSC CGL Geometry",
        explanation: "By Euler's formula: F + V = E + 2 => 6 + 8 = E + 2 => 14 = E + 2 => E = 12 edges."
      },
      {
        id: 2,
        q: "What is the next number in the pattern: 2, 6, 12, 20, 30, ...?",
        options: ["40", "42", "44", "48"],
        ans: 1,
        pyqRef: "Number Pattern Reasoning",
        explanation: "Differences are +4, +6, +8, +10, +12. Next term = 30 + 12 = 42 (Also n(n+1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42)."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch8",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 8,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 8: Weight and Capacity (Mass Measurement & Scales)",
    readingTime: "10 min read",
    badge: "⚖️ MASS & BALANCE SCALES",
    desc: "Weight units: grams, kilograms, balance scale equilibrium, tare weight, price per kg vs price per gram, and Anu's household weights check.",
    competitionEdge: "Dishonest balance profit percentage formula, conversion between Quintal, Tonne, and Kilogram.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Mass Units",
        contentHtml: `
          <p>Weight refers to how heavy an object is:</p>
          <ul>
            <li>1 Kilogram (kg) = 1,000 Grams (g)</li>
            <li>1 Gram (g) = 1,000 Milligrams (mg)</li>
            <li>1 Quintal = 100 kg | 1 Metric Tonne = 10 Quintals = 1,000 kg</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How many grams are there in 4 kg 75 g?",
        options: ["475 g", "4,750 g", "4,075 g", "40,750 g"],
        ans: 2,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 8",
        explanation: "4 kg = 4,000 g. Adding 75 g: 4,000 + 75 = 4,075 g."
      },
      {
        id: 2,
        q: "A grocer packs 25 kg of sugar into 500-gram packets. How many packets will be prepared?",
        options: ["25 packets", "50 packets", "75 packets", "100 packets"],
        ans: 1,
        pyqRef: "Competitive Arithmetic Basics",
        explanation: "25 kg = 25,000 g. Number of packets = 25,000 / 500 = 50 packets."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch9",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 9,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 9: Coconut Farm (Area vs. Perimeter & Costing)",
    readingTime: "13 min read",
    badge: "🟩 AREA VS PERIMETER DISTINCTION",
    desc: "Perimeter (boundary length) vs Area (surface region enclosed), square grids, rectangular farmland boundaries, and fencing vs tiling costs.",
    competitionEdge: "Isoperimetric theorem (Square maximizes area for fixed perimeter), cost of fencing (perimeter × rate) vs cost of paving (area × rate).",
    sections: [
      {
        heading: "1. NCERT Core Concepts: The Difference Between Perimeter & Area",
        contentHtml: `
          <div class="note-alert-box info">
            <strong>Critical Distinction:</strong>
            <ul>
              <li><strong>Perimeter:</strong> The linear distance around the outside edge. Unit: cm, m, km. Used for <em>fencing, borders, frames</em>.</li>
              <li><strong>Area:</strong> The 2D surface space inside the boundary. Unit: cm&sup2;, m&sup2;, hectares. Used for <em>ploughing, tiling, painting, harvesting</em>.</li>
            </ul>
          </div>
          <p><strong>Formulas:</strong></p>
          <ul>
            <li>Perimeter of Rectangle = 2 &times; (Length + Breadth)</li>
            <li>Area of Rectangle = Length &times; Breadth</li>
            <li>Perimeter of Square = 4 &times; Side</li>
            <li>Area of Square = Side &times; Side</li>
          </ul>
        `
      },
      {
        heading: "2. Competition Edge: The Isoperimetric Rule",
        contentHtml: `
          <div class="note-alert-box warning">
            <strong>Maximum Area Rule:</strong> For a given fixed perimeter, the rectangle with the <strong>maximum area is always a square</strong>!<br/>
            Example: If perimeter is 20 m:<br/>
            &bull; Rectangle 8m &times; 2m &rarr; Area = 16 m&sup2;<br/>
            &bull; Rectangle 6m &times; 4m &rarr; Area = 24 m&sup2;<br/>
            &bull; Square 5m &times; 5m &rarr; Area = <strong>25 m&sup2; (Maximum!)</strong>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "A rectangular coconut farm is 60 m long and 40 m wide. What is the cost of fencing it at ₹15 per metre?",
        options: ["₹3,000", "₹1,500", "₹36,000", "₹6,000"],
        ans: 0,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 9",
        explanation: "Fencing is along the perimeter. Perimeter = 2(60 + 40) = 2(100) = 200 m. Cost = 200 × 15 = ₹3,000."
      },
      {
        id: 2,
        q: "The perimeter of a square plot is 48 metres. What is its area?",
        options: ["144 m²", "196 m²", "120 m²", "96 m²"],
        ans: 0,
        pyqRef: "SSC CGL / Railway NTPC / CTET",
        explanation: "Side of square = Perimeter / 4 = 48 / 4 = 12 m. Area = Side × Side = 12 × 12 = 144 m²."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch10",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 10,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 10: Symmetrical Designs (Lines of Symmetry & Rotations)",
    readingTime: "9 min read",
    badge: "🪞 SYMMETRY & REFLECTIONS",
    desc: "Line of symmetry, bilateral reflection, rotational symmetry order (1/2 turn, 1/4 turn, 1/3 turn), and mirror images.",
    competitionEdge: "Lines of symmetry in regular polygons (Equilateral triangle: 3, Square: 4, Regular Hexagon: 6), non-verbal reasoning mirror patterns.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Line of Symmetry",
        contentHtml: `
          <p>A line of symmetry divides a shape into two identical halves that fold onto each other perfectly.</p>
          <ul>
            <li>Equilateral Triangle: 3 lines of symmetry</li>
            <li>Square: 4 lines of symmetry (2 medians, 2 diagonals)</li>
            <li>Rectangle: 2 lines of symmetry (medians only, NOT diagonals!)</li>
            <li>Circle: Infinite lines of symmetry</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How many lines of symmetry does a regular rectangle have?",
        options: ["1", "2", "4", "Infinite"],
        ans: 1,
        pyqRef: "CTET Paper 1 & BPSC Teacher Exam",
        explanation: "A rectangle has only 2 lines of symmetry (connecting midpoints of opposite sides). Its diagonals are NOT lines of symmetry."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch11",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 11,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 11: Grandmother’s Quilt (Decimals, Tenths & Hundredths)",
    readingTime: "11 min read",
    badge: "🪙 DECIMALS & CURRENCY CONVERSIONS",
    desc: "Decimal place values: Tenths (0.1), Hundredths (0.01), Thousandths (0.001), currency conversion between Rupees and Paise, and decimal comparison.",
    competitionEdge: "Comparing decimals without mistakes, recurring decimals into fractions, shift of decimal point in multiplication/division.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Tenths and Hundredths",
        contentHtml: `
          <p>Decimals are fractions whose denominators are powers of 10:</p>
          <ul>
            <li>1 Tenth = 1/10 = 0.1</li>
            <li>1 Hundredth = 1/100 = 0.01</li>
            <li>Rupees and Paise: 1 Rupee = 100 Paise. Therefore: 50 Paise = ₹0.50, 5 Paise = ₹0.05 (NOT ₹0.5!).</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "How is 7 rupees and 5 paise written in decimal form?",
        options: ["₹7.5", "₹7.05", "₹7.50", "₹7.005"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 11",
        explanation: "5 paise = 5/100 rupee = ₹0.05. Thus, 7 rupees and 5 paise = ₹7.05."
      },
      {
        id: 2,
        q: "Which of the following is correct: 0.7 > 0.07, 0.7 < 0.07, or 0.7 = 0.07?",
        options: ["0.7 > 0.07", "0.7 < 0.07", "0.7 = 0.07", "Cannot be determined"],
        ans: 0,
        pyqRef: "Elementary Mathematics Foundation",
        explanation: "0.7 = 70/100, while 0.07 = 7/100. Since 70 > 7, 0.7 > 0.07."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch12",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 12,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 12: Racing Seconds (Time Measurements & Elapsed Time)",
    readingTime: "10 min read",
    badge: "⏱️ ELAPSED TIME & 24-HOUR CLOCK",
    desc: "Reading stopwatches, units of time (seconds, minutes, hours), elapsed time calculations, and converting between 12-hour AM/PM and 24-hour clocks.",
    competitionEdge: "Speed conversion factor 5/18 (km/h to m/s), cross-midnight elapsed time calculations.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: 24-Hour Railway Clock",
        contentHtml: `
          <p>Railway and flight timetables use a 24-hour clock to avoid AM/PM confusion:</p>
          <ul>
            <li>To convert PM time to 24-hour format: Add 12 hours (e.g. 7:45 PM = 19:45 hrs).</li>
            <li>12:00 Midnight is written as 00:00 or 24:00.</li>
            <li>1 Hour = 60 Minutes = 3,600 Seconds.</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Convert 8:40 PM into 24-hour railway clock time:",
        options: ["18:40", "20:40", "21:40", "08:40"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 12",
        explanation: "8:40 PM + 12 hours = 20:40 hours."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch13",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 13,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 13: Animal Jumps (Multiples, Factors, LCM & HCF)",
    readingTime: "14 min read",
    badge: "🏆 SUPER HIGH YIELD: LCM & HCF",
    desc: "Animal jumps on number line, common multiples, Lowest Common Multiple (LCM), rectangular array factors, Highest Common Factor (HCF), and prime numbers.",
    competitionEdge: "Bell tolls together problems (LCM), HCF × LCM = Product of two numbers formula, co-prime numbers test.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Frog and Rabbit Jumps",
        contentHtml: `
          <p>A frog jumps 3 steps at a time (multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24...).<br/>
          A rabbit jumps 4 steps at a time (multiples of 4: 4, 8, 12, 16, 20, 24...).</p>
          <div class="note-alert-box info">
            <strong>Common Multiples:</strong> The numbers both of them land on: <strong>12, 24, 36, 48...</strong><br/>
            The smallest such number is the <strong>Lowest Common Multiple (LCM) = 12</strong>!
          </div>
          <p><strong>Factors & Arrays:</strong> Numbers that divide a given number completely without remainder. For 12: 1, 2, 3, 4, 6, 12.</p>
        `
      },
      {
        heading: "2. Competition Edge: The Tolls Together Problem",
        contentHtml: `
          <div class="note-alert-box warning">
            <strong>Classic Competitive Exam Pattern (UPSC / SSC / BPSC):</strong><br/>
            <em>"3 bells toll at intervals of 9, 12, and 15 minutes. If they toll together now, after how long will they toll together again?"</em><br/>
            <strong>Method:</strong> Find LCM of 9, 12, 15.<br/>
            &bull; 9 = 3&sup2;<br/>
            &bull; 12 = 2&sup2; &times; 3<br/>
            &bull; 15 = 3 &times; 5<br/>
            &bull; LCM = 2&sup2; &times; 3&sup2; &times; 5 = 4 &times; 9 &times; 5 = <strong>180 minutes = 3 hours</strong>!
          </div>
          <div class="note-alert-box info">
            <strong>Product Rule:</strong> <code>First Number &times; Second Number = HCF &times; LCM</code>
          </div>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "What is the Lowest Common Multiple (LCM) of 12, 15, and 20?",
        options: ["60", "120", "40", "30"],
        ans: 0,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 13",
        explanation: "12 = 2² × 3, 15 = 3 × 5, 20 = 2² × 5. LCM = 2² × 3 × 5 = 60."
      },
      {
        id: 2,
        q: "Four electronic bells toll together at intervals of 6, 8, 12, and 18 seconds. How many seconds later will they toll together next?",
        options: ["72 seconds", "48 seconds", "36 seconds", "96 seconds"],
        ans: 0,
        pyqRef: "SSC CGL / Railway NTPC / BPSC CSAT",
        explanation: "LCM of 6, 8, 12, 18: 6 = 2×3, 8 = 2³, 12 = 2²×3, 18 = 2×3². LCM = 2³ × 3² = 8 × 9 = 72 seconds."
      },
      {
        id: 3,
        q: "The HCF of two numbers is 8 and their LCM is 48. If one number is 24, what is the other number?",
        options: ["12", "16", "18", "20"],
        ans: 1,
        pyqRef: "Fundamental Number Theory Formula",
        explanation: "Product of numbers = HCF × LCM => 24 × Other = 8 × 48 => Other = (8 × 48) / 24 = 8 × 2 = 16."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch14",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 14,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 14: Maps and Locations (Map Scales & Directions)",
    readingTime: "9 min read",
    badge: "🗺️ MAP SCALES & CARTOGRAPHY",
    desc: "Reading map scales (e.g. 1 cm = 100 km), compass cardinal directions, grid coordinate referencing, and calculating real ground distances.",
    competitionEdge: "Scale factor area scaling (length ratio 1:k => area ratio 1:k²), direction sense navigation.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Understanding Map Scales",
        contentHtml: `
          <p>Because real distances of hundreds of kilometres cannot fit on a piece of paper, cartographers use a <strong>Scale</strong>:</p>
          <ul>
            <li>If Scale is 1 cm = 50 km: A distance of 4.5 cm on the map represents <code>4.5 &times; 50 = 225 km</code> on the ground!</li>
            <li>North is always pointed toward the top of the map.</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "On a state map, the scale is 1 cm = 80 km. If two towns are 4.5 cm apart on the map, what is their actual distance?",
        options: ["320 km", "360 km", "400 km", "340 km"],
        ans: 1,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 14",
        explanation: "Actual distance = 4.5 × 80 = 360 km."
      }
    ]
  },
  {
    id: "ncert-c5-math-ch15",
    classLevel: "Class 5",
    subject: "Mathematics",
    subjectCode: "MATH",
    chapterNo: 15,
    bookName: "Maths Mela (NCERT)",
    title: "Chapter 15: Data Through Pictures (Pictographs & Bar Graphs)",
    readingTime: "10 min read",
    badge: "📊 DATA INTERPRETATION (DI)",
    desc: "Representing information with pictographs, tally marks, bar graph axes, frequency interpretation, and solving comparative questions.",
    competitionEdge: "Data interpretation percentage increase/decrease, ratio between bar graph values, average calculation from frequency charts.",
    sections: [
      {
        heading: "1. NCERT Core Concepts: Pictographs & Tally Marks",
        contentHtml: `
          <p>Data can be quickly understood using visual representations:</p>
          <ul>
            <li><strong>Pictograph:</strong> Uses pictures or symbols. Each symbol represents a fixed number of items (the Key).</li>
            <li><strong>Tally Marks:</strong> Grouped into sets of 5 (four vertical bars crossed by a fifth diagonal bar).</li>
            <li><strong>Bar Graph:</strong> Horizontal and vertical bars of equal width, where length corresponds to frequency.</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "In a pictograph, if one symbol 🚗 represents 25 cars, how many symbols are needed to represent 175 cars?",
        options: ["5 symbols", "6 symbols", "7 symbols", "8 symbols"],
        ans: 2,
        pyqRef: "NCERT Class 5 Maths Mela Chapter 15",
        explanation: "Number of symbols = 175 / 25 = 7 symbols."
      }
    ]
  }
];

// Add Class 5 Environmental Studies (EVS) Foundation chapters
const ncertClass5EVSChapters = [
  {
    id: "ncert-c5-evs-ch1",
    classLevel: "Class 5",
    subject: "EVS / Science",
    subjectCode: "EVS",
    chapterNo: 1,
    bookName: "Looking Around (NCERT)",
    title: "EVS Chapter: Super Senses of Animals & Adaptation",
    readingTime: "11 min read",
    badge: "🦅 BIOLOGY & ADAPTATION",
    desc: "Amazing senses of animals: Eagle's sharp vision (4 times human distance), dog's smelling sense, snake's vibration detection, tiger's whiskers and night vision.",
    competitionEdge: "Thermoregulation in animals, hibernation vs aestivation, nocturnal vision adaptations asked in CTET & BPSC TRE.",
    sections: [
      {
        heading: "1. Super Senses in Animal Kingdom",
        contentHtml: `
          <p>NCERT details the unique sensory adaptations of animals:</p>
          <ul>
            <li><strong>Eagles, Hawks & Vultures:</strong> Can see things from 8 metres away which humans can only see from 2 metres away (4 times further!).</li>
            <li><strong>Silkworm:</strong> Can find its female moth from several kilometres away by her smell.</li>
            <li><strong>Snakes:</strong> Do not have external ears; they only feel ground vibrations.</li>
            <li><strong>Tigers:</strong> Whiskers are extremely sensitive to wind movements, helping them hunt in the dark. Night vision is 6 times better than humans.</li>
            <li><strong>Sloth:</strong> Sleeps almost 17 hours a day hanging upside down on a tree branch, lives about 40 years and eats leaves of the same tree.</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "Which bird can see four times as far as humans can see?",
        options: ["Kites, Eagles, Vultures", "Crows, Pigeons, Parrots", "Doves, Woodpeckers, Owls", "Sparrows, Ducks, Peacocks"],
        ans: 0,
        pyqRef: "CTET 2021/2022/2023 & BPSC TRE PRT",
        explanation: "NCERT Class 5 EVS specifically notes that Kites, Eagles, and Vultures can see four times as far as humans."
      },
      {
        id: 2,
        q: "How many hours does a Sloth sleep in a day according to NCERT Class 5?",
        options: ["10 hours", "14 hours", "17 hours", "20 hours"],
        ans: 2,
        pyqRef: "CTET Paper 1 Frequent PYQ",
        explanation: "NCERT Class 5 EVS states that a Sloth spends almost 17 hours a day sleeping while hanging upside down on tree branches."
      }
    ]
  }
];

// Add Class 5 Language (Hindi & English Grammar) Chapters
const ncertClass5LanguageChapters = [
  {
    id: "ncert-c5-hindi-ch1",
    classLevel: "Class 5",
    subject: "Hindi (हिंदी)",
    subjectCode: "HINDI",
    chapterNo: 1,
    bookName: "रिमझिम (NCERT)",
    title: "हिंदी व्याकरण: संज्ञा, सर्वनाम, विशेषण एवं मुहावरे",
    readingTime: "10 min read",
    badge: "📖 HINDI GRAMMAR FOUNDATION",
    desc: "संज्ञा के भेद (व्यक्तिवाचक, जातिवाचक, भाववाचक), सर्वनाम, विशेषण और लोककथाओं में प्रयुक्त प्रमुख मुहावरे।",
    competitionEdge: "भाववाचक संज्ञा निर्माण, विशेषण के प्रकार और लोकोक्तियों के सटीक अर्थ।",
    sections: [
      {
        heading: "1. संज्ञा एवं उसके भेद",
        contentHtml: `
          <p>किसी व्यक्ति, वस्तु, स्थान या भाव के नाम को संज्ञा कहते हैं:</p>
          <ul>
            <li><strong>व्यक्तिवाचक संज्ञा:</strong> विशेष व्यक्ति या स्थान का नाम (जैसे: गंगा, पटना, हिमालय, महात्मा गांधी)।</li>
            <li><strong>जातिवाचक संज्ञा:</strong> संपूर्ण जाति या वर्ग का बोध (जैसे: नदी, पर्वत, शहर, बालक)।</li>
            <li><strong>भाववाचक संज्ञा:</strong> गुण, दोष, दशा या भाव का बोध (जैसे: मिठास, बचपन, ईमानदारी, वीरता)।</li>
          </ul>
        `
      }
    ],
    practiceQuestions: [
      {
        id: 1,
        q: "निम्नलिखित में से कौन सा शब्द 'भाववाचक संज्ञा' का उदाहरण है?",
        options: ["मिठास", "गंगा", "लड़का", "विद्यालय"],
        ans: 0,
        pyqRef: "BPSC TRE / CTET Hindi Vyakaran",
        explanation: "'मिठास' गुण/स्वाद का भाव प्रकट करता है, अतः यह भाववाचक संज्ञा है।"
      }
    ]
  }
];

// Combine all clean NCERT notes
const allNcertChapters = [
  ...ncertClass5MathChapters,
  ...ncertClass5EVSChapters,
  ...ncertClass5LanguageChapters
];

// Generate Chapter Speed Quizzes
const ncertChapterQuizzes = [
  {
    id: "quiz-ncert-c5-math-ch1",
    title: "Class 5 Math Ch 1: We the Travellers (Numbers & Speeds) Speed Quiz",
    classLevel: "Class 5",
    subject: "Mathematics",
    durationMinutes: 8,
    marksPerQuestion: 2,
    negativeMarking: 0.5,
    totalMarks: 8,
    questionsCount: 4,
    questions: ncertClass5MathChapters[0].practiceQuestions
  },
  {
    id: "quiz-ncert-c5-math-ch2",
    title: "Class 5 Math Ch 2: Fractions & Equivalence Speed Quiz",
    classLevel: "Class 5",
    subject: "Mathematics",
    durationMinutes: 8,
    marksPerQuestion: 2,
    negativeMarking: 0.5,
    totalMarks: 8,
    questionsCount: 4,
    questions: ncertClass5MathChapters[1].practiceQuestions
  },
  {
    id: "quiz-ncert-c5-math-ch3",
    title: "Class 5 Math Ch 3: Angles as Turns & Clocks Speed Quiz",
    classLevel: "Class 5",
    subject: "Mathematics",
    durationMinutes: 8,
    marksPerQuestion: 2,
    negativeMarking: 0.5,
    totalMarks: 8,
    questionsCount: 4,
    questions: ncertClass5MathChapters[2].practiceQuestions
  },
  {
    id: "quiz-ncert-c5-math-ch13",
    title: "Class 5 Math Ch 13: Animal Jumps (LCM & HCF) Master Quiz",
    classLevel: "Class 5",
    subject: "Mathematics",
    durationMinutes: 10,
    marksPerQuestion: 2,
    negativeMarking: 0.5,
    totalMarks: 6,
    questionsCount: 3,
    questions: ncertClass5MathChapters[12].practiceQuestions
  },
  {
    id: "quiz-ncert-c5-evs-ch1",
    title: "Class 5 EVS: Super Senses of Animals Speed Quiz",
    classLevel: "Class 5",
    subject: "EVS / Science",
    durationMinutes: 5,
    marksPerQuestion: 2,
    negativeMarking: 0,
    totalMarks: 4,
    questionsCount: 2,
    questions: ncertClass5EVSChapters[0].practiceQuestions
  }
];

// Generate Full Timed NCERT Mock Tests
const ncertTimedMockTests = [
  {
    id: "mock-ncert-c5-math-term1",
    title: "NCERT Class 5 Mathematics: Term-1 Master Mock Test Paper (Ch 1 to Ch 7)",
    classLevel: "Class 5",
    subject: "Mathematics",
    badge: "⏱️ FULL CHAPTER MOCK PAPER",
    syllabus: "Numbers, Place Value, Fractions, Angles & Turns, Multiplication, Metric System, Capacity & 3D Shapes",
    durationMinutes: 20,
    totalQuestions: 10,
    totalMarks: 20,
    marksPerQuestion: 2,
    negativeMarking: 0.5,
    pdfUrl: "#",
    questions: [
      ...ncertClass5MathChapters[0].practiceQuestions.slice(0, 2),
      ...ncertClass5MathChapters[1].practiceQuestions.slice(0, 2),
      ...ncertClass5MathChapters[2].practiceQuestions.slice(0, 2),
      ...ncertClass5MathChapters[3].practiceQuestions.slice(0, 2),
      ...ncertClass5MathChapters[5].practiceQuestions.slice(0, 2)
    ]
  },
  {
    id: "mock-ncert-c5-math-term2",
    title: "NCERT Class 5 Mathematics: Term-2 Master Mock Test Paper (Ch 8 to Ch 15)",
    classLevel: "Class 5",
    subject: "Mathematics",
    badge: "⏱️ FULL CHAPTER MOCK PAPER",
    syllabus: "Weight, Area vs Perimeter, Symmetrical Designs, Decimals, Racing Time, LCM/HCF & Pictographs",
    durationMinutes: 20,
    totalQuestions: 10,
    totalMarks: 20,
    marksPerQuestion: 2,
    negativeMarking: 0.5,
    pdfUrl: "#",
    questions: [
      ...ncertClass5MathChapters[7].practiceQuestions,
      ...ncertClass5MathChapters[8].practiceQuestions,
      ...ncertClass5MathChapters[9].practiceQuestions,
      ...ncertClass5MathChapters[10].practiceQuestions,
      ...ncertClass5MathChapters[11].practiceQuestions,
      ...ncertClass5MathChapters[12].practiceQuestions.slice(0, 2),
      ...ncertClass5MathChapters[13].practiceQuestions
    ]
  }
];

// Overwrite with pure NCERT focus!
db.notes = allNcertChapters;
db.quizzes = ncertChapterQuizzes;
db.testSeries = ncertTimedMockTests;

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');

console.log('🎉 Successfully converted database to 100% NCERT Master Prep Hub!');
console.log('NCERT Chapters:', db.notes.length);
console.log('NCERT Chapter Quizzes:', db.quizzes.length);
console.log('NCERT Full Timed Tests:', db.testSeries.length);
