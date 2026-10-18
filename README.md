# Sarkari Result RojgarSetu Portal 2026

> Authentic Sarkari Result 2026 Portal synced directly with **https://www.sarkariresult.com/**, featuring 3-Mode switcher (Govt Vacancies, State-Wise Private Jobs, NCERT Notes), full vacancy details scraper (Eligibility, Seat Count, Important Dates, Application Fees), and **Remote Administration via Telegram Bot**.

---

## 🌟 Key Features

1. **🔄 100% Mirroring of SarkariResult.com:**
   - 9 Standard Live Columns: Result, Admit Card, Latest Jobs, Answer Key, Syllabus, Admission, Certificate Verification, Outsourcing & Offline Jobs, and Important Links (225+ verified live links).
   - Real-time ticker marquees and top 8 color action boxes.
   - 1-click live sync button and auto-sync on boot.

2. **📋 Full Vacancy Details on Click:**
   - Clicking ANY job vacancy opens its complete authentic Sarkari Result details:
     - **Who is eligible** (Full educational criteria, age limits & relaxations).
     - **Total Seats / Posts** (Post name, category-wise breakdown).
     - **Important Dates** (Application begin, last date, fee date, exam date).
     - **Application Fees** (General, OBC, EWS, SC/ST, payment methods).
     - **How to Fill Form** (Step-by-step instructions).
     - **Direct Action Buttons** (Apply Online registration, Official PDF Notification, Commission Portal).

3. **🔀 3-Mode Switcher Navbar:**
   - **🏛️ Government Jobs (Sarkari):** 9 live columns, qualification filters (`10th / Matric`, `12th / Inter`, `ITI / Diploma`, `Graduate`, `Post Graduate`).
   - **🏢 Private Jobs (State-Wise):** Corporate & MNC jobs filtered across 13 Indian states (Bihar, UP, Delhi NCR, Maharashtra, Karnataka, WB, etc.) with sector & qualification filters. Zero placement fees.
   - **📚 Study Notes & NCERT PDFs:** Free Class 6–12 official NCERT textbooks, competitive GK, formula sheets & PYQs.

4. **💬 Floating Form Guidance AI Chat:**
   - Instant answers on photo/signature resizing (20KB–50KB), OTR registration steps, fee debited troubleshooting, and document checklists.

5. **📝 Direct Candidate Registration & Slip:**
   - 4-step online candidate registration form generating an official confirmation slip with a unique number (`SR-2026-XXXXXX`) and print option.

6. **🤖 Telegram Bot Admin Control (Website Admin Panel Removed):**
   - The public website has zero admin buttons or clutter.
   - All management (status checks, live scraping, posting private jobs, adding NCERT notes, checking candidate applications) is controlled through your Telegram bot!

---

## 🤖 Telegram Bot Admin Setup

You can control your entire portal remotely from Telegram on your phone or PC!

### 1. Create your Telegram Bot:
1. Open the Telegram app and search for `@BotFather`.
2. Send `/newbot`.
3. Give your bot a name (e.g., `My Sarkari Portal Bot`) and a username ending in `bot` (e.g., `mysarkari_admin_bot`).
4. Copy the API token provided by BotFather (e.g., `7123456789:ABCdefGhIJKlmNoPQRstuvWxYz`).

### 2. Configure the Token:
Paste the token into `data/bot-config.json`:
```json
{
  "token": "YOUR_TELEGRAM_BOT_TOKEN_HERE"
}
```
*Or run the server with the environment variable:*
```bash
TELEGRAM_BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN" npm start
```

### 3. Telegram Bot Commands:
| Command | Description | Example |
|---|---|---|
| `/start` or `/help` | View command menu & bot guide | `/help` |
| `/status` | View live portal health & link counts | `/status` |
| `/sync` | Execute live scrape from sarkariresult.com | `/sync` |
| `/addjob` | Post a verified private job | `/addjob Software Engineer \| TCS \| Bihar \| Patna \| IT & Software \| Graduate \| ₹4.5 LPA \| 300 Posts \| https://tcs.com` |
| `/addnote` | Publish an NCERT book or study note | `/addnote Class 10 Maths PDF \| NCERT 6-10 \| Chapter-wise PDF \| https://ncert.nic.in` |
| `/apps` | View recent candidate registrations | `/apps` |
| `/setapp` | Update mobile app banner sitewide | `/setapp EasySarkari \| Auto-resize in 2 mins \| https://play.google.com` |
| `/deljob` | Delete a private job by ID | `/deljob pjob-1` |

---

## 🚀 Running the Portal

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
# Production mode
npm start

# Development mode (auto-reloads on file edits)
npm run dev
```

Visit the website at **http://localhost:3000** in your browser.

---

## 📁 Project Architecture

```
Sarkari form Website/
├── data/
│   ├── db.json             # Live database (jobs, columns, marquees, notes, apps)
│   └── bot-config.json     # Telegram bot token configuration
├── public/
│   ├── css/
│   │   └── style.css       # Responsive authentic Sarkari Result crimson styles
│   ├── js/
│   │   ├── api.js          # API client
│   │   └── app.js          # 3-mode tabs, detail modal, chat, application slip
│   └── index.html          # Clean public frontend (zero admin clutter)
├── scraper.js              # Live scraper for 9 columns from sarkariresult.com
├── detailScraper.js        # Vacancy details & eligibility parser
├── telegramBot.js          # Native Telegram Bot remote admin controller
├── server.js               # Express API backend
└── package.json
```
