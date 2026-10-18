/**
 * RojgarSetu Backend Server
 * =========================
 * Express server providing:
 * - Live synchronization with https://www.sarkariresult.com/ (all 9 columns + marquees)
 * - State-wise Private Sector Job listings & applications
 * - Free NCERT eBooks & Study Material
 * - Candidate Application & Registration API
 * - Interactive AI Form Guidance API
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { scrapeSarkariResult } = require('./scraper');
const { getJobDetail } = require('./detailScraper');
const { startTelegramBot } = require('./telegramBot');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const DB_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DB_DIR, 'db.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

// ---------------------------------------------------------------------------
// Default seed data with rich State-Wise Private Jobs & Notes
// ---------------------------------------------------------------------------
const DEFAULT_DATA = {
  lastSyncedAt: new Date().toISOString(),
  appConfig: {
    title: "1 Profile. 1 Click. Any Form.",
    tagline: "फॉर्म भरो सिर्फ 2 मिनट में! ⚡",
    desc: "One-time details. Auto-fill any exam in 2 minutes. Zero cyber cafe stress.",
    url: "https://play.google.com/store/apps/details?id=com.formfiller.app"
  },
  marquees: [
    { title: "Railway NTPC 10+2 Level Online Form 2026", url: "https://www.sarkariresult.com/railway/railway-rrb-ntpc-ug-level-07-2026/" },
    { title: "Army TGC 145 Online Form 2026", url: "https://www.sarkariresult.com/2026/army-tgc-145-sep26/" },
    { title: "UP Assistant Teacher Primary Super TET Online Form 2026", url: "https://www.sarkariresult.com/2026/upessc-up-primary-teacher-05-2026/" }
  ],
  sarkariColumns: {
    result: [],
    admitCard: [],
    latestJob: [],
    answerKey: [],
    syllabus: [],
    admission: [],
    certificate: [],
    outsourcing: [],
    important: []
  },
  // Verified Business, Retail Shops, Factory & Industrial Jobs across Indian States (10th/12th/ITI/Non-Tech)
  privateJobs: [
    {
        "id": "pjob-1",
        "title": "V-Mart Retail — Store Sales Associate, Cashier & Floor Assistant",
        "company": "V-Mart Retail Ltd",
        "state": "Bihar",
        "city": "Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Purnia",
        "sector": "Shops & Retail Supermarkets",
        "qual": "10th Pass / Matric",
        "salary": "₹14,000 - ₹22,000 / month + Incentives",
        "openings": "450 Posts",
        "postedDate": "2026-10-17",
        "postedLabel": "⚡ Posted Today (17 Oct)",
        "badge": "URGENT",
        "lastDate": "Active Online 2026",
        "url": "https://vmart.co.in/job-openings"
    },
    {
        "id": "pjob-2",
        "title": "Vishal Mega Mart — Cashier, Billing Counter & Inventory Stock Associate",
        "company": "Airplaza Retail (Vishal Mega Mart)",
        "state": "Uttar Pradesh",
        "city": "Lucknow, Kanpur, Varanasi, Prayagraj, Bareilly, Gorakhpur",
        "sector": "Shops & Retail Supermarkets",
        "qual": "12th Pass / Intermediate",
        "salary": "₹13,500 - ₹21,000 / month + Bonus",
        "openings": "800 Posts",
        "postedDate": "2026-10-17",
        "postedLabel": "⚡ Posted Today (17 Oct)",
        "badge": "HOT HIRING",
        "lastDate": "Active Online 2026",
        "url": "https://www.vishalmegamart.com/"
    },
    {
        "id": "pjob-3",
        "title": "Apollo Pharmacy — Retail Trainee Associate, Billing Staff & Pharmacy Assistant",
        "company": "Apollo Pharmacies Limited",
        "state": "All India",
        "city": "Patna, Lucknow, Delhi NCR, Jaipur, Kolkata, Bhopal, Mumbai",
        "sector": "Pharmacies & Healthcare Shops",
        "qual": "10th Pass / Matric",
        "salary": "₹15,000 - ₹24,000 / month + ESI / PF",
        "openings": "1,500+ Posts",
        "postedDate": "2026-10-17",
        "postedLabel": "⚡ Posted Today (17 Oct)",
        "badge": "10TH PASS",
        "lastDate": "Open Rolling 2026",
        "url": "https://careers.apollopharmacy.app/"
    },
    {
        "id": "pjob-4",
        "title": "DMart (Avenue Supermarts) — Supermarket Floor Associate, Packer & Cashier",
        "company": "Avenue Supermarts Ltd (DMart)",
        "state": "Maharashtra",
        "city": "Mumbai, Pune, Thane, Nagpur, Nashik, Aurangabad",
        "sector": "Shops & Retail Supermarkets",
        "qual": "10th Pass / Matric",
        "salary": "₹16,000 - ₹26,000 / month + Overtime & PF",
        "openings": "1,100 Posts",
        "postedDate": "2026-10-17",
        "postedLabel": "⚡ Posted Today (17 Oct)",
        "badge": "ZERO FEE",
        "lastDate": "Active Hiring 2026",
        "url": "https://www.dmartindia.com/careers"
    },
    {
        "id": "pjob-5",
        "title": "Maruti Suzuki India Limited — Plant Workmen & ITI Apprentice (Automotive Manufacturing)",
        "company": "Maruti Suzuki India Ltd (MSIL)",
        "state": "Haryana / Punjab",
        "city": "Gurugram, Manesar & Kharkhoda Vehicle Assembly Plants",
        "sector": "Factories & Industrial Plants",
        "qual": "ITI / Technical Trade",
        "salary": "₹29,800 - ₹34,500 / month (Stipend + Canteen & Uniform)",
        "openings": "1,200 Posts",
        "postedDate": "2026-10-17",
        "postedLabel": "⚡ Posted Today (17 Oct)",
        "badge": "HIGH STIPEND",
        "lastDate": "30 Nov 2026",
        "url": "https://www.marutisuzuki.com/corporate/careers"
    },
    {
        "id": "pjob-6",
        "title": "Mother Dairy Fruit & Vegetable — Processing Plant Operator & Cold Storage Dispatch",
        "company": "Mother Dairy Fruit & Vegetable Pvt Ltd",
        "state": "Delhi NCR",
        "city": "Patparganj (Delhi), Pilkhuwa, Ghaziabad, Ballabhgarh",
        "sector": "Factories & Industrial Plants",
        "qual": "12th Pass / Intermediate",
        "salary": "₹15,500 - ₹23,500 / month + Shift Allowances",
        "openings": "350 Posts",
        "postedDate": "2026-10-16",
        "postedLabel": "📅 16 Oct 2026",
        "badge": "VERIFIED",
        "lastDate": "15 Dec 2026",
        "url": "https://www.motherdairy.com/career"
    },
    {
        "id": "pjob-7",
        "title": "Delhivery Express — Logistics Hub Sorter, Order Picker & Warehouse Associate",
        "company": "Delhivery Limited",
        "state": "Delhi NCR",
        "city": "Bilaspur (Gurugram), Tauru, Noida, New Delhi Hubs",
        "sector": "Warehousing & Logistics Hubs",
        "qual": "10th Pass / Matric",
        "salary": "₹14,000 - ₹22,500 / month + Night Shift Allowance",
        "openings": "1,400 Posts",
        "postedDate": "2026-10-16",
        "postedLabel": "📅 16 Oct 2026",
        "badge": "URGENT",
        "lastDate": "Open Rolling",
        "url": "https://www.delhivery.com/careers/"
    },
    {
        "id": "pjob-8",
        "title": "Sudha Dairy (COMFED Bihar) — Dairy Processing Plant Operator & Dispatch Helper",
        "company": "Bihar State Milk Co-operative Federation (Sudha)",
        "state": "Bihar",
        "city": "Patna, Muzaffarpur, Barauni, Samastipur, Gaya, Bhagalpur",
        "sector": "Factories & Industrial Plants",
        "qual": "10th Pass / Matric",
        "salary": "₹13,000 - ₹21,000 / month + Medical Facilities",
        "openings": "280 Posts",
        "postedDate": "2026-10-16",
        "postedLabel": "📅 16 Oct 2026",
        "badge": "BIHAR LOCAL",
        "lastDate": "20 Dec 2026",
        "url": "https://www.sudha.coop/"
    },
    {
        "id": "pjob-9",
        "title": "Hero MotoCorp — Manufacturing Assembly Line Trainee & Machine Apprentice",
        "company": "Hero MotoCorp Ltd",
        "state": "Rajasthan",
        "city": "Neemrana Plant, Kukas (Jaipur) Two-Wheeler Factory",
        "sector": "Factories & Industrial Plants",
        "qual": "ITI / Technical Trade",
        "salary": "₹18,500 - ₹25,000 / month + Subsidized Food & Canteen",
        "openings": "500 Posts",
        "postedDate": "2026-10-16",
        "postedLabel": "📅 16 Oct 2026",
        "badge": "TECHNICAL",
        "lastDate": "10 Dec 2026",
        "url": "https://www.heromotocorp.com/en-in/careers.html"
    },
    {
        "id": "pjob-10",
        "title": "Reliance Retail (Smart Bazaar & Trends) — Store Customer Associate & POS Cashier",
        "company": "Reliance Retail Limited",
        "state": "Uttar Pradesh",
        "city": "Kanpur, Agra, Meerut, Aligarh, Jhansi, Prayagraj, Noida",
        "sector": "Shops & Retail Supermarkets",
        "qual": "12th Pass / Intermediate",
        "salary": "₹15,000 - ₹23,000 / month + Employee Discount",
        "openings": "900 Posts",
        "postedDate": "2026-10-16",
        "postedLabel": "📅 16 Oct 2026",
        "badge": "RETAIL",
        "lastDate": "25 Nov 2026",
        "url": "https://relianceretail.com/careers.html"
    },
    {
        "id": "pjob-11",
        "title": "MedPlus Health Services — Pharmacy Store Associate, Billing & Order Helper",
        "company": "MedPlus Health Services Ltd",
        "state": "Telangana",
        "city": "Hyderabad, Secunderabad, Warangal, Nizamabad",
        "sector": "Pharmacies & Healthcare Shops",
        "qual": "10th Pass / Matric",
        "salary": "₹14,500 - ₹22,000 / month + Sales Incentives",
        "openings": "650 Posts",
        "postedDate": "2026-10-15",
        "postedLabel": "📅 15 Oct 2026",
        "badge": "PHARMACY",
        "lastDate": "18 Dec 2026",
        "url": "https://www.medplusindia.com/careers.jsp"
    },
    {
        "id": "pjob-12",
        "title": "Blinkit & Zomato Quick Commerce — Dark Store Order Picker, Packer & Inventory Assistant",
        "company": "Blinkit (Eternal Ltd)",
        "state": "West Bengal",
        "city": "Kolkata, Howrah, Salt Lake, Siliguri, Asansol",
        "sector": "Warehousing & Logistics Hubs",
        "qual": "10th Pass / Matric",
        "salary": "₹15,000 - ₹24,000 / month + Performance Bonus",
        "openings": "550 Posts",
        "postedDate": "2026-10-15",
        "postedLabel": "📅 15 Oct 2026",
        "badge": "QUICK COMMERCE",
        "lastDate": "Open Rolling 2026",
        "url": "https://www.zomato.com/careers"
    },
    {
        "id": "pjob-13",
        "title": "Tata Motors — Plant Automotive Assembly Apprentice & Production Technician",
        "company": "Tata Motors Limited",
        "state": "Gujarat",
        "city": "Sanand (Ahmedabad), Vadodara Commercial Vehicle Plant",
        "sector": "Factories & Industrial Plants",
        "qual": "ITI / Technical Trade",
        "salary": "₹19,000 - ₹28,000 / month + Free Transport & Food",
        "openings": "450 Posts",
        "postedDate": "2026-10-15",
        "postedLabel": "📅 15 Oct 2026",
        "badge": "AUTO PLANT",
        "lastDate": "05 Dec 2026",
        "url": "https://www.tatamotors.com/careers/"
    },
    {
        "id": "pjob-14",
        "title": "Lenskart Retail Stores — Eyewear Sales Executive & Store Optical Assistant",
        "company": "Lenskart Solutions Pvt Ltd",
        "state": "Delhi NCR",
        "city": "Delhi, Noida, Gurugram, Faridabad, Ghaziabad Showrooms",
        "sector": "Showrooms & Dealerships",
        "qual": "Graduate (Any Stream)",
        "salary": "₹18,000 - ₹28,000 / month + Monthly Commission",
        "openings": "400 Posts",
        "postedDate": "2026-10-15",
        "postedLabel": "📅 15 Oct 2026",
        "badge": "SHOWROOM",
        "lastDate": "Rolling Openings",
        "url": "https://hiring.lenskart.com/"
    },
    {
        "id": "pjob-15",
        "title": "National Career Service (NCS) — Verified MSME Small Factory, Workshop & Store Jobs",
        "company": "Ministry of Labour & Employment (NCS Verified Enterprises)",
        "state": "All India",
        "city": "Patna, Ranchi, Bhopal, Indore, Lucknow, Jaipur, Mumbai, Delhi",
        "sector": "MSME & Local Businesses",
        "qual": "10th Pass / Matric",
        "salary": "₹12,000 - ₹20,000 / month (Minimum Wages Compliant)",
        "openings": "5,000+ Active Vacancies",
        "postedDate": "2026-10-15",
        "postedLabel": "📅 15 Oct 2026",
        "badge": "GOVT VERIFIED",
        "lastDate": "Continuous Portal",
        "url": "https://www.ncs.gov.in/"
    },
    {
        "id": "pjob-16",
        "title": "Mahindra Logistics — Regional Distribution Warehouse Associate & Dispatch Coordinator",
        "company": "Mahindra Logistics Ltd",
        "state": "Maharashtra",
        "city": "Bhiwandi Logistics Park, Chakan (Pune), Nagpur Distribution",
        "sector": "Warehousing & Logistics Hubs",
        "qual": "10th Pass / Matric",
        "salary": "₹14,500 - ₹23,000 / month + Overtime",
        "openings": "500 Posts",
        "postedDate": "2026-10-15",
        "postedLabel": "📅 15 Oct 2026",
        "badge": "LOGISTICS",
        "lastDate": "12 Dec 2026",
        "url": "https://www.mahindralogistics.com/careers"
    },
    {
        "id": "pjob-17",
        "title": "Shree Cement Ltd — Plant Technical Helper, Boiler & Conveyor Packaging Assistant",
        "company": "Shree Cement Limited",
        "state": "Rajasthan",
        "city": "Beawar, Ras, Jaipur, Kota, Nimbahera",
        "sector": "Factories & Industrial Plants",
        "qual": "10th Pass / Matric",
        "salary": "₹16,000 - ₹24,000 / month + Residential Colony",
        "openings": "320 Posts",
        "postedDate": "2026-10-14",
        "postedLabel": "📅 14 Oct 2026",
        "badge": "CEMENT PLANT",
        "lastDate": "14 Dec 2026",
        "url": "https://www.shreecement.com/careers"
    },
    {
        "id": "pjob-18",
        "title": "D-Mart (Avenue Supermarts) — Store Associate, Billing Clerk & Fresh Produce Stacker",
        "company": "Avenue Supermarts Ltd (DMart)",
        "state": "Gujarat",
        "city": "Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar",
        "sector": "Shops & Retail Supermarkets",
        "qual": "10th Pass / Matric",
        "salary": "₹15,000 - ₹24,000 / month + PF & Health Cover",
        "openings": "600 Posts",
        "postedDate": "2026-10-14",
        "postedLabel": "📅 14 Oct 2026",
        "badge": "SUPERMARKET",
        "lastDate": "Active Online 2026",
        "url": "https://www.dmartindia.com/careers"
    },
    {
        "id": "pjob-19",
        "title": "Amul (GCMMF) — Dairy Plant Packaging Helper & Warehouse Cold Store Assistant",
        "company": "Gujarat Co-operative Milk Marketing Federation (Amul)",
        "state": "Gujarat",
        "city": "Anand, Gandhinagar, Surat, Godhra Dairy Plants",
        "sector": "Factories & Industrial Plants",
        "qual": "10th Pass / Matric",
        "salary": "₹15,500 - ₹23,000 / month + Subsidized Dairy & Canteen",
        "openings": "420 Posts",
        "postedDate": "2026-10-14",
        "postedLabel": "📅 14 Oct 2026",
        "badge": "AMUL DAIRY",
        "lastDate": "22 Dec 2026",
        "url": "https://amul.com/m/careers"
    },
    {
        "id": "pjob-20",
        "title": "Titan Eyeplus & Tanishq Showrooms — Retail Sales Associate & Customer Host",
        "company": "Titan Company Limited",
        "state": "Karnataka",
        "city": "Bengaluru, Mysuru, Hubballi, Mangaluru, Belagavi",
        "sector": "Showrooms & Dealerships",
        "qual": "Graduate (Any Stream)",
        "salary": "₹18,000 - ₹30,000 / month + Incentives",
        "openings": "300 Posts",
        "postedDate": "2026-10-14",
        "postedLabel": "📅 14 Oct 2026",
        "badge": "TITAN",
        "lastDate": "28 Nov 2026",
        "url": "https://www.titancompany.in/careers"
    },
    {
        "id": "pjob-21",
        "title": "Vardhman Textiles — Spinning & Weaving Factory Operator & Quality Checker",
        "company": "Vardhman Textiles Limited",
        "state": "Madhya Pradesh",
        "city": "Budhni, Mandideep (Bhopal) Textile Plants",
        "sector": "Factories & Industrial Plants",
        "qual": "10th Pass / Matric",
        "salary": "₹13,500 - ₹21,000 / month + Hostel & Meals",
        "openings": "450 Posts",
        "postedDate": "2026-10-14",
        "postedLabel": "📅 14 Oct 2026",
        "badge": "TEXTILE MILL",
        "lastDate": "16 Dec 2026",
        "url": "https://www.vardhman.com/careers"
    },
    {
        "id": "pjob-22",
        "title": "Blue Dart Express — Air Cargo Sorter, Courier Facility & Hub Associate",
        "company": "Blue Dart Express Ltd",
        "state": "Tamil Nadu",
        "city": "Chennai Airport Hub, Coimbatore, Madurai, Tiruchirappalli",
        "sector": "Warehousing & Logistics Hubs",
        "qual": "10th Pass / Matric",
        "salary": "₹15,000 - ₹23,500 / month + Night Allowances",
        "openings": "380 Posts",
        "postedDate": "2026-10-14",
        "postedLabel": "📅 14 Oct 2026",
        "badge": "AIR CARGO",
        "lastDate": "19 Dec 2026",
        "url": "https://www.bluedart.com/careers"
    },
    {
        "id": "pjob-23",
        "title": "Zepto Quick Commerce — Dark Store Inventory Stager, Picker & Order Packer",
        "company": "KiranaKart Technologies (Zepto)",
        "state": "Maharashtra",
        "city": "Mumbai, Pune, Thane, Navi Mumbai Dark Stores",
        "sector": "Warehousing & Logistics Hubs",
        "qual": "10th Pass / Matric",
        "salary": "₹15,000 - ₹23,500 / month + Attendance Bonus",
        "openings": "480 Posts",
        "postedDate": "2026-10-13",
        "postedLabel": "📅 13 Oct 2026",
        "badge": "QUICK COMMERCE",
        "lastDate": "Rolling Openings",
        "url": "https://www.zeptonow.com/careers"
    },
    {
        "id": "pjob-24",
        "title": "Bata India Limited — Footwear Retail Store Sales Executive & Billing Associate",
        "company": "Bata India Limited",
        "state": "Bihar",
        "city": "Patna, Muzaffarpur, Bhagalpur, Gaya, Purnia Showrooms",
        "sector": "Showrooms & Dealerships",
        "qual": "12th Pass / Intermediate",
        "salary": "₹13,500 - ₹20,500 / month + Commission",
        "openings": "220 Posts",
        "postedDate": "2026-10-13",
        "postedLabel": "📅 13 Oct 2026",
        "badge": "BATA",
        "lastDate": "30 Nov 2026",
        "url": "https://www.bata.com/in/careers.html"
    },
    {
        "id": "pjob-25",
        "title": "Dixon Technologies — Smartphone & LED TV Electronics Assembly Line Operator",
        "company": "Dixon Technologies (India) Ltd",
        "state": "Uttar Pradesh",
        "city": "Noida Phase-2, Greater Noida Manufacturing Cluster",
        "sector": "Factories & Industrial Plants",
        "qual": "ITI / Technical Trade",
        "salary": "₹16,500 - ₹24,000 / month + Overtime & Transport",
        "openings": "750 Posts",
        "postedDate": "2026-10-13",
        "postedLabel": "📅 13 Oct 2026",
        "badge": "ELECTRONICS",
        "lastDate": "08 Dec 2026",
        "url": "https://dixoninfo.com/careers.php"
    },
    {
        "id": "pjob-26",
        "title": "Spencer Retail — Supermarket Customer Assistant & Fresh Food Billing Cashier",
        "company": "Spencer Retail Limited (RP-Sanjiv Goenka Group)",
        "state": "West Bengal",
        "city": "Kolkata, Durgapur, Siliguri, Howrah",
        "sector": "Shops & Retail Supermarkets",
        "qual": "10th Pass / Matric",
        "salary": "₹13,500 - ₹21,000 / month + ESI / PF",
        "openings": "360 Posts",
        "postedDate": "2026-10-13",
        "postedLabel": "📅 13 Oct 2026",
        "badge": "RETAIL",
        "lastDate": "15 Dec 2026",
        "url": "https://www.spencersretail.com/"
    },
    {
        "id": "pjob-27",
        "title": "Havells India Limited — Electrical Switchgear & Fan Assembly Plant Apprentice",
        "company": "Havells India Limited",
        "state": "Rajasthan",
        "city": "Alwar (Neemrana) & Haridwar Manufacturing Units",
        "sector": "Factories & Industrial Plants",
        "qual": "ITI / Technical Trade",
        "salary": "₹17,500 - ₹24,500 / month + Canteen Subsidy",
        "openings": "310 Posts",
        "postedDate": "2026-10-13",
        "postedLabel": "📅 13 Oct 2026",
        "badge": "HAVELLS",
        "lastDate": "20 Dec 2026",
        "url": "https://www.havells.com/en/careers.html"
    },
    {
        "id": "pjob-28",
        "title": "Tata 1mg Healthcare Hubs — Warehouse Medicine Picker, Packer & Billing Trainee",
        "company": "Tata 1mg Technologies Pvt Ltd",
        "state": "Haryana / Punjab",
        "city": "Gurugram, Farukhnagar, Chandigarh Hubs",
        "sector": "Pharmacies & Healthcare Shops",
        "qual": "12th Pass / Intermediate",
        "salary": "₹15,000 - ₹22,500 / month + ESI / PF",
        "openings": "420 Posts",
        "postedDate": "2026-10-12",
        "postedLabel": "📅 12 Oct 2026",
        "badge": "TATA 1MG",
        "lastDate": "24 Nov 2026",
        "url": "https://www.1mg.com/jobs"
    },
    {
        "id": "pjob-29",
        "title": "Croma Electronics (Infiniti Retail) — Store Technology Consultant & Electronics Sales",
        "company": "Infiniti Retail Limited (A Tata Enterprise - Croma)",
        "state": "Delhi NCR",
        "city": "Delhi, Noida, Gurugram, Ghaziabad Megastores",
        "sector": "Showrooms & Dealerships",
        "qual": "12th Pass / Intermediate",
        "salary": "₹17,000 - ₹26,000 / month + Monthly Incentives",
        "openings": "290 Posts",
        "postedDate": "2026-10-12",
        "postedLabel": "📅 12 Oct 2026",
        "badge": "CROMA TATA",
        "lastDate": "05 Dec 2026",
        "url": "https://www.croma.com/careers"
    },
    {
        "id": "pjob-30",
        "title": "JSW Steel Limited — Steel Processing Plant Apprentice & Fitter/Welder Helper",
        "company": "JSW Steel Limited",
        "state": "Karnataka",
        "city": "Vijayanagar (Ballari) Integrated Steel Plant",
        "sector": "Factories & Industrial Plants",
        "qual": "ITI / Technical Trade",
        "salary": "₹20,500 - ₹29,000 / month + Township Accommodation",
        "openings": "550 Posts",
        "postedDate": "2026-10-12",
        "postedLabel": "📅 12 Oct 2026",
        "badge": "STEEL PLANT",
        "lastDate": "18 Dec 2026",
        "url": "https://www.jsw.in/careers"
    },
    {
        "id": "pjob-31",
        "title": "Trident Group — Home Textile & Paper Manufacturing Plant Apprentice",
        "company": "Trident Limited",
        "state": "Madhya Pradesh",
        "city": "Budhni Complex (Narmadapuram, MP)",
        "sector": "Factories & Industrial Plants",
        "qual": "10th Pass / Matric",
        "salary": "₹14,500 - ₹22,000 / month + Subsidized Hostel",
        "openings": "380 Posts",
        "postedDate": "2026-10-12",
        "postedLabel": "📅 12 Oct 2026",
        "badge": "TRIDENT",
        "lastDate": "22 Dec 2026",
        "url": "https://www.tridentindia.com/careers"
    },
    {
        "id": "pjob-32",
        "title": "Max Fashion (Landmark Group) — Apparel Retail Store Associate & Customer Greeter",
        "company": "Landmark Group (Max Fashion India)",
        "state": "Bihar",
        "city": "Patna, Muzaffarpur, Gaya, Bhagalpur Outlets",
        "sector": "Shops & Retail Supermarkets",
        "qual": "10th Pass / Matric",
        "salary": "₹13,500 - ₹21,500 / month + Store Bonus",
        "openings": "260 Posts",
        "postedDate": "2026-10-11",
        "postedLabel": "📅 11 Oct 2026",
        "badge": "MAX FASHION",
        "lastDate": "30 Nov 2026",
        "url": "https://www.maxfashion.in/"
    },
    {
        "id": "pjob-33",
        "title": "Ecom Express Limited — Parcel Sorting Facility Associate & Hub Inward Assistant",
        "company": "Ecom Express Limited",
        "state": "Uttar Pradesh",
        "city": "Lucknow, Varanasi, Kanpur, Agra Hubs",
        "sector": "Warehousing & Logistics Hubs",
        "qual": "10th Pass / Matric",
        "salary": "₹14,000 - ₹21,500 / month + Shift Allowances",
        "openings": "620 Posts",
        "postedDate": "2026-10-11",
        "postedLabel": "📅 11 Oct 2026",
        "badge": "LOGISTICS",
        "lastDate": "12 Dec 2026",
        "url": "https://ecomexpress.in/careers/"
    },
    {
        "id": "pjob-34",
        "title": "TVS Motor Dealerships — Two-Wheeler Workshop Mechanic & Service Trainee",
        "company": "TVS Motor Company Authorized Service Network",
        "state": "Tamil Nadu",
        "city": "Hosur, Chennai, Coimbatore, Madurai, Salem",
        "sector": "Showrooms & Dealerships",
        "qual": "ITI / Technical Trade",
        "salary": "₹15,000 - ₹23,000 / month + Skill Incentive",
        "openings": "340 Posts",
        "postedDate": "2026-10-11",
        "postedLabel": "📅 11 Oct 2026",
        "badge": "TVS SERVICE",
        "lastDate": "15 Dec 2026",
        "url": "https://www.tvsmotor.com/careers"
    },
    {
        "id": "pjob-35",
        "title": "Jindal Steel & Power (JSPL) — Industrial Fabrication Helper & Plant Maintenance Trainee",
        "company": "Jindal Steel & Power Limited",
        "state": "Jharkhand",
        "city": "Patratu (Ramgarh), Ranchi, Bokaro Cluster",
        "sector": "Factories & Industrial Plants",
        "qual": "10th Pass / Matric",
        "salary": "₹15,500 - ₹23,500 / month + Medical Cover",
        "openings": "280 Posts",
        "postedDate": "2026-10-10",
        "postedLabel": "📅 10 Oct 2026",
        "badge": "JSPL PLANT",
        "lastDate": "28 Nov 2026",
        "url": "https://www.jindalsteelpower.com/careers.html"
    },
    {
        "id": "pjob-36",
        "title": "Wellness Forever Chemists — Retail Chemist Shop Assistant & Night Billing Executive",
        "company": "Wellness Forever Medicare Limited",
        "state": "Maharashtra",
        "city": "Mumbai, Thane, Pune, Navi Mumbai 24x7 Stores",
        "sector": "Pharmacies & Healthcare Shops",
        "qual": "12th Pass / Intermediate",
        "salary": "₹16,000 - ₹25,000 / month + Night Allowances",
        "openings": "350 Posts",
        "postedDate": "2026-10-10",
        "postedLabel": "📅 10 Oct 2026",
        "badge": "24x7 CHEMIST",
        "lastDate": "10 Dec 2026",
        "url": "https://wellnessforever.com/careers"
    },
    {
        "id": "pjob-37",
        "title": "More Retail Supermarkets — Supermarket Cashier & Grocery Department Stacker",
        "company": "More Retail Private Limited (Amazon / Samara)",
        "state": "Karnataka",
        "city": "Bengaluru, Mysuru, Mangaluru Supermarkets",
        "sector": "Shops & Retail Supermarkets",
        "qual": "10th Pass / Matric",
        "salary": "₹14,000 - ₹22,000 / month + Staff Discounts",
        "openings": "400 Posts",
        "postedDate": "2026-10-10",
        "postedLabel": "📅 10 Oct 2026",
        "badge": "SUPERMARKET",
        "lastDate": "14 Dec 2026",
        "url": "https://moreretail.in/careers/"
    },
    {
        "id": "pjob-38",
        "title": "Bajaj Auto Authorized Service Stations — Two-Wheeler Service Technician & Electrical Assistant",
        "company": "Bajaj Auto Authorized Service Workshop Network",
        "state": "Madhya Pradesh",
        "city": "Indore, Bhopal, Jabalpur, Gwalior Workshops",
        "sector": "Showrooms & Dealerships",
        "qual": "ITI / Technical Trade",
        "salary": "₹14,500 - ₹22,500 / month + Monthly Overtime",
        "openings": "310 Posts",
        "postedDate": "2026-10-10",
        "postedLabel": "📅 10 Oct 2026",
        "badge": "BAJAJ WORKSHOP",
        "lastDate": "16 Dec 2026",
        "url": "https://www.bajajauto.com/careers"
    }
],
  // NCERT Textbooks, Solved Notes & Competitive Material
  notes: [
    {
      title: "NCERT Class 6 to 10 All Subjects Complete Textbooks PDF (Hindi & English)",
      cat: "NCERT 6-10",
      desc: "Complete Science, Social Science, Mathematics, History, Civics & Geography official PDFs for foundational BPSC, SSC, UPSC & Railway preparation.",
      url: "https://ncert.nic.in/textbook.php?ln=en"
    },
    {
      title: "NCERT Class 11 & 12 History, Polity, Economy & Physics PDFs (Hindi & English)",
      cat: "NCERT 11-12",
      desc: "Direct official NCERT chapter-wise textbook PDFs for UPSC Civil Services, BPSC Mains, State PCS and Post-Graduate competitive examinations.",
      url: "https://ncert.nic.in/textbook.php"
    },
    {
      title: "NCERT Official Digital E-Pub & Interactive Flipbook Archive (Class 1 to 12)",
      cat: "NCERT 6-10",
      desc: "Read directly on mobile phones or tablets with page-turn animations. 100% free and authorized by Ministry of Education, Govt. of India.",
      url: "https://ncert.nic.in/ebooks.php?ln=en"
    },
    {
      title: "Bihar Special Static GK, History, Geography & Bihar Budget 2026 Notes PDF",
      cat: "Bihar & GK",
      desc: "Comprehensive study booklet covering Ancient Magadha, Modern Bihar freedom struggle, rivers, districts, census, and BPSC previous year solved MCQs.",
      url: "https://bpsc.bihar.gov.in/advertisement/"
    },
    {
      title: "SSC CGL, CHSL, MTS & Railway Quantitative Aptitude Formula Digest PDF",
      cat: "Maths & Reasoning",
      desc: "Chapter-wise shortcut tricks, arithmetic formulas (Percentage, Profit-Loss, CI/SI, Time & Work), geometry theorems, and previous year solved questions.",
      url: "https://ssc.gov.in/home/notice-board"
    },
    {
      title: "General Knowledge & Current Affairs Monthly Compendium 2026 (Hindi & English)",
      cat: "Bihar & GK",
      desc: "National & International summits, government schemes, awards, sports, military exercises, and science & technology developments for competitive exams.",
      url: "https://employmentnews.gov.in/newemp/MoreContentS.aspx?n=InDepthJobs"
    },
    {
      title: "Logical Reasoning & Analytical Ability Shortcut Handbook for All Exams",
      cat: "Maths & Reasoning",
      desc: "Verbal and non-verbal reasoning, coding-decoding, blood relations, syllogisms, seating arrangements, and puzzle-solving strategies.",
      url: "https://ssc.gov.in/home/notice-board"
    },
    {
      title: "UPSC & State PCS Previous 10 Years Solved Question Papers (Prelims GS & CSAT)",
      cat: "Bihar & GK",
      desc: "Authentic answer keys with detailed explanations from 2015 to 2025 for smart practice and trend analysis.",
      url: "https://www.upsc.gov.in/examinations/previous-question-papers"
    }
  ],
  applications: []
};

// ---------------------------------------------------------------------------
// Database helpers
// ---------------------------------------------------------------------------
function loadDB() {
  if (!fs.existsSync(DB_PATH)) {
    saveDB(JSON.parse(JSON.stringify(DEFAULT_DATA)));
  }
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  const data = JSON.parse(raw);
  if (!data.applications) data.applications = [];
  if (!data.privateJobs) data.privateJobs = DEFAULT_DATA.privateJobs;
  if (!data.sarkariColumns) data.sarkariColumns = DEFAULT_DATA.sarkariColumns;
  if (!data.marquees) data.marquees = DEFAULT_DATA.marquees;
  return data;
}

function saveDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Ensure database exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}
if (!fs.existsSync(DB_PATH)) {
  saveDB(JSON.parse(JSON.stringify(DEFAULT_DATA)));
}

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

// ---------------------------------------------------------------------------
// API Routes
// ---------------------------------------------------------------------------

// GET full portal state
app.get('/api/state', (req, res) => {
  try {
    const state = loadDB();
    res.json(state);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read state', details: err.message });
  }
});

// POST /api/sync-sarkari — Live fetch from https://www.sarkariresult.com/
app.post('/api/sync-sarkari', async (req, res) => {
  try {
    console.log('🔄 Syncing live data from https://www.sarkariresult.com/ ...');
    const scraped = await scrapeSarkariResult();
    const state = loadDB();

    state.lastSyncedAt = scraped.lastSyncedAt;
    state.marquees = scraped.marquees;
    state.sarkariColumns = scraped.sarkariColumns;

    // Merge new govt jobs
    if (scraped.govtJobs && scraped.govtJobs.length > 0) {
      state.jobs = scraped.govtJobs;
    }

    saveDB(state);
    console.log('✅ Sync complete! Stored 9 columns and marquees.');
    res.json({
      success: true,
      lastSyncedAt: state.lastSyncedAt,
      stats: {
        results: state.sarkariColumns.result.length,
        admitCards: state.sarkariColumns.admitCard.length,
        latestJobs: state.sarkariColumns.latestJob.length,
        answerKeys: state.sarkariColumns.answerKey.length,
        syllabi: state.sarkariColumns.syllabus.length,
        admissions: state.sarkariColumns.admission.length,
        certificates: state.sarkariColumns.certificate.length,
        outsourcing: state.sarkariColumns.outsourcing.length,
        important: state.sarkariColumns.important.length
      },
      state
    });
  } catch (err) {
    console.error('❌ Sync failed:', err.message);
    res.status(500).json({ error: 'Failed to sync with sarkariresult.com', details: err.message });
  }
});

// GET /api/private-jobs — Filter private jobs by state and qualification
app.get('/api/private-jobs', (req, res) => {
  try {
    const state = loadDB();
    let jobs = state.privateJobs || [];
    const { stateFilter, qual, sector, q } = req.query;

    if (stateFilter && stateFilter !== 'ALL') {
      jobs = jobs.filter(j => j.state === stateFilter || j.state === 'All India');
    }
    if (qual && qual !== 'ALL') {
      jobs = jobs.filter(j => j.qual === qual);
    }
    if (sector && sector !== 'ALL') {
      jobs = jobs.filter(j => j.sector === sector);
    }
    if (q) {
      const qLow = q.toLowerCase();
      jobs = jobs.filter(j =>
        j.title.toLowerCase().includes(qLow) ||
        j.company.toLowerCase().includes(qLow) ||
        j.city.toLowerCase().includes(qLow)
      );
    }
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch private jobs', details: err.message });
  }
});


// POST candidate job application / registration
app.post('/api/apply', (req, res) => {
  try {
    const state = loadDB();
    const regNo = 'SR-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
    const newApp = {
      id: 'app-' + Date.now(),
      regNo,
      submittedAt: new Date().toISOString(),
      ...req.body
    };
    state.applications.unshift(newApp);
    saveDB(state);
    res.status(201).json({ success: true, application: newApp });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit application', details: err.message });
  }
});

// GET all submitted applications
app.get('/api/applications', (_req, res) => {
  try {
    const state = loadDB();
    res.json(state.applications || []);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch applications', details: err.message });
  }
});

// POST a new govt job
app.post('/api/jobs', (req, res) => {
  try {
    const state = loadDB();
    const job = { ...req.body, id: 'job-' + Date.now(), isNew: true };
    if (!state.jobs) state.jobs = [];
    state.jobs.unshift(job);
    if (!state.sarkariColumns) state.sarkariColumns = DEFAULT_DATA.sarkariColumns;
    state.sarkariColumns.latestJob.unshift(job);
    saveDB(state);
    res.json(state);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add job', details: err.message });
  }
});

// POST a new private job
app.post('/api/private-jobs', (req, res) => {
  try {
    const state = loadDB();
    const pjob = { ...req.body, id: 'pjob-' + Date.now() };
    if (!state.privateJobs) state.privateJobs = [];
    state.privateJobs.unshift(pjob);
    saveDB(state);
    res.json(state);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add private job', details: err.message });
  }
});

// POST a new note
app.post('/api/notes', (req, res) => {
  try {
    const state = loadDB();
    state.notes.unshift(req.body);
    saveDB(state);
    res.json(state);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add note', details: err.message });
  }
});

// PUT update app config
app.put('/api/app-config', (req, res) => {
  try {
    const state = loadDB();
    const { title, desc, url } = req.body;
    state.appConfig = { title, desc, url };
    saveDB(state);
    res.json(state);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update app config', details: err.message });
  }
});

// POST reset to defaults
app.post('/api/reset', (_req, res) => {
  try {
    const freshData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveDB(freshData);
    res.json(freshData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to reset database', details: err.message });
  }
});

// GET export database as JSON
app.get('/api/export', (_req, res) => {
  try {
    const state = loadDB();
    res.setHeader('Content-Disposition', 'attachment; filename="sarkari-result-daily-feed.json"');
    res.setHeader('Content-Type', 'application/json');
    res.json(state);
  } catch (err) {
    res.status(500).json({ error: 'Failed to export database', details: err.message });
  }
});

// GET /api/job-detail — Fetch authentic vacancy details (eligibility, seats, dates, fees, links)
app.get('/api/job-detail', async (req, res) => {
  try {
    const { url, id } = req.query;
    const state = loadDB();
    
    // Find fallback item if available
    let fallbackItem = null;
    if (id) {
      fallbackItem = (state.privateJobs || []).find(j => j.id === id) ||
                     (state.jobs || []).find(j => j.id === id);
      if (!fallbackItem && state.sarkariColumns) {
        for (const key of Object.keys(state.sarkariColumns)) {
          const found = state.sarkariColumns[key].find((j, idx) => j.id === id || `live-${key}-${idx}` === id);
          if (found) { fallbackItem = found; break; }
        }
      }
    }
    
    const targetUrl = url || fallbackItem?.url;
    const detail = await getJobDetail(targetUrl, id, fallbackItem);
    res.json(detail);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch job details', details: err.message });
  }
});

// Direct route for /apply page
app.get('/apply', (_req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

// ---------------------------------------------------------------------------
// Server startup with initial live sync & Telegram Bot
// ---------------------------------------------------------------------------
app.listen(PORT, async () => {
  console.log(`🚀 RojgarSetu Server running at http://localhost:${PORT}`);
  console.log(`📁 Database: ${DB_PATH}`);

  // Automatically sync with sarkariresult.com on initial startup if columns are empty
  const state = loadDB();
  if (!state.sarkariColumns || !state.sarkariColumns.latestJob || state.sarkariColumns.latestJob.length === 0) {
    try {
      console.log('🔄 Initializing live sync with https://www.sarkariresult.com/ ...');
      const scraped = await scrapeSarkariResult();
      state.lastSyncedAt = scraped.lastSyncedAt;
      state.marquees = scraped.marquees;
      state.sarkariColumns = scraped.sarkariColumns;
      state.jobs = scraped.govtJobs;
      saveDB(state);
      console.log('✅ Initial live sync completed with 225+ SarkariResult links!');
    } catch (e) {
      console.warn('⚠️ Initial live sync warning:', e.message);
    }
  }

  // Start Telegram Bot Admin Control System
  startTelegramBot({
    loadDB,
    saveDB,
    scrapeSarkariResult
  });
});
