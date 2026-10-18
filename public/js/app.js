// ============================================================
// app.js — Main Application Logic for Sarkari Result RojgarSetu Portal
// 3-Mode Architecture: Govt Jobs (Live Synced), Private Jobs (State-Wise), NCERT Notes
// Authentic Sarkari Result Full Vacancy Details (Eligibility, Seats, Dates, Fees)
// Interactive Form Guidance AI Chat & Built-in Candidate Registration Slip
// ============================================================

// Global Application State
let state = {
  jobs: [],
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
  marquees: [],
  privateJobs: [],
  notes: [],
  applications: [],
  lastSyncedAt: null
};

// Filter States
let currentMainMode = 'GOVT'; // 'GOVT' | 'PRIVATE' | 'NOTES'
let currentGovtQual = 'ALL';
let currentPrivateState = 'ALL';
let currentPrivateSector = 'ALL';
let currentPrivateSort = 'date-desc';
let currentNcertClass = 5;
let currentNcertSubj = 'ALL';
let currentStudyLang = 'hi'; // 'hi' | 'en' | 'bilingual'
try {
  const savedLang = localStorage.getItem('ncert_lang');
  if (savedLang) currentStudyLang = savedLang;
} catch (e) {}
let currentStudyExam = 'ALL';
let currentStudyType = 'ALL';

// NCERT learning history stays on this device. It is intentionally anonymous.
const NCERT_PROGRESS_KEY = 'rojgarsetu_ncert_progress_v1';
let ncertProgress = { openedNotes: {}, startedQuizzes: {}, lastActivity: null };
try {
  const storedProgress = JSON.parse(localStorage.getItem(NCERT_PROGRESS_KEY));
  if (storedProgress && typeof storedProgress === 'object') ncertProgress = { ...ncertProgress, ...storedProgress };
} catch (e) {}

function saveNcertProgress() {
  try { localStorage.setItem(NCERT_PROGRESS_KEY, JSON.stringify(ncertProgress)); } catch (e) {}
}

function renderNcertProgress() {
  const title = document.getElementById('ncertProgressTitle');
  const summary = document.getElementById('ncertProgressSummary');
  if (!title || !summary) return;
  const notesOpened = Object.keys(ncertProgress.openedNotes || {}).length;
  const quizzesStarted = Object.keys(ncertProgress.startedQuizzes || {}).length;
  if (!notesOpened && !quizzesStarted) {
    title.textContent = 'Start your first chapter';
    summary.textContent = 'Your activity is saved only in this browser. No account is needed.';
    return;
  }
  title.textContent = `${notesOpened} chapter${notesOpened === 1 ? '' : 's'} opened · ${quizzesStarted} quiz${quizzesStarted === 1 ? '' : 'zes'} started`;
  summary.textContent = 'Saved on this device only. Continue from any chapter below.';
}

function recordNcertActivity(kind, id) {
  const bucket = kind === 'quiz' ? 'startedQuizzes' : 'openedNotes';
  ncertProgress[bucket] = ncertProgress[bucket] || {};
  ncertProgress[bucket][id] = Date.now();
  ncertProgress.lastActivity = Date.now();
  saveNcertProgress();
  renderNcertProgress();
}

function resetNcertProgress() {
  ncertProgress = { openedNotes: {}, startedQuizzes: {}, lastActivity: null };
  try { localStorage.removeItem(NCERT_PROGRESS_KEY); } catch (e) {}
  renderNcertProgress();
  showToast('Study progress cleared from this device.');
}

// Interactive Quiz & Mock Test Engine State
let activeQuizItem = null;
let quizUserAnswers = {}; // { [qIndex]: optionIndex }
let quizReviewFlags = {}; // { [qIndex]: boolean }
let currentQuizQIndex = 0;
let quizTimerInterval = null;
let quizTimeRemainingSec = 0;
let quizTimeSpentSec = 0;
let isQuizSubmitted = false;
// Verified Official Government Portals by Agency & Keyword
const PORTAL_RULES = [
  { match: /BPSC/i, url: 'https://bpsc.bih.nic.in/' },
  { match: /BSSC/i, url: 'https://bssc.bihar.gov.in/' },
  { match: /BTSC/i, url: 'https://btsc.bihar.gov.in/' },
  { match: /CSBC|BPSSC|Bihar Police/i, url: 'https://csbc.bih.nic.in/' },
  { match: /Bihar Vidhan/i, url: 'https://vidhansabha.bih.nic.in/' },
  { match: /UPSSSC/i, url: 'https://upsssc.gov.in/' },
  { match: /UPPSC/i, url: 'https://uppsc.up.nic.in/' },
  { match: /UPPBPB|UP Police/i, url: 'https://uppbpb.gov.in/' },
  { match: /UPESSC|Super TET|UP Teacher/i, url: 'https://uphesc.org/' },
  { match: /UP Anganwadi/i, url: 'https://balvikasup.gov.in/' },
  { match: /SSC/i, url: 'https://ssc.gov.in/' },
  { match: /RRB|Railway/i, url: 'https://www.rrbapply.gov.in/' },
  { match: /UPSC/i, url: 'https://upsc.gov.in/' },
  { match: /Army/i, url: 'https://joinindianarmy.nic.in/' },
  { match: /Navy/i, url: 'https://www.joinindiannavy.gov.in/' },
  { match: /Air Force|Airforce|AFCAT/i, url: 'https://careerindianairforce.cdac.in/' },
  { match: /Coast Guard/i, url: 'https://joinindiancoastguard.cdac.in/' },
  { match: /IBPS/i, url: 'https://www.ibps.in/' },
  { match: /SBI/i, url: 'https://sbi.co.in/web/careers' },
  { match: /RBI/i, url: 'https://opportunities.rbi.org.in/' },
  { match: /NTA|NEET|JEE|CUET|UGC NET|CSIR/i, url: 'https://nta.ac.in/' },
  { match: /DSSSB/i, url: 'https://dsssb.delhi.gov.in/' },
  { match: /RPSC/i, url: 'https://rpsc.rajasthan.gov.in/' },
  { match: /RSMSSB/i, url: 'https://rsmssb.rajasthan.gov.in/' },
  { match: /MPPSC/i, url: 'https://mppsc.mp.gov.in/' },
  { match: /MPESB|MPPEB|Vyapam/i, url: 'https://esb.mp.gov.in/' },
  { match: /UKPSC/i, url: 'https://psc.uk.gov.in/' },
  { match: /UKSSSC/i, url: 'https://sssc.uk.gov.in/' },
  { match: /HSSC/i, url: 'https://hssc.gov.in/' },
  { match: /HPSC/i, url: 'https://hpsc.gov.in/' },
  { match: /JSSC/i, url: 'https://jssc.nic.in/' },
  { match: /JPSC/i, url: 'https://jpsc.gov.in/' },
  { match: /CTET/i, url: 'https://ctet.nic.in/' },
  { match: /KVS/i, url: 'https://kvsangathan.nic.in/' },
  { match: /NVS/i, url: 'https://navodaya.gov.in/' },
  { match: /Supreme Court/i, url: 'https://www.sci.gov.in/' },
  { match: /High Court/i, url: 'https://districts.ecourts.gov.in/' },
  { match: /ICSIL/i, url: 'https://icsil.in/' },
  { match: /CWC/i, url: 'https://cewacor.nic.in/' },
  { match: /CRPF/i, url: 'https://rect.crpf.gov.in/' },
  { match: /CISF/i, url: 'https://cisfrectt.cisf.gov.in/' },
  { match: /BSF/i, url: 'https://rectt.bsf.gov.in/' },
  { match: /ITBP/i, url: 'https://recruitment.itbpolice.nic.in/' },
  { match: /SSB/i, url: 'https://ssb.gov.in/' },
  { match: /LIC/i, url: 'https://licindia.in/' }
];

function inferOfficialPortal(title) {
  if (!title) return 'https://www.india.gov.in/';
  for (const r of PORTAL_RULES) {
    if (r.match.test(title)) return r.url;
  }
  return 'https://www.india.gov.in/';
}

// ------------------------------------------------------------
// 1. Toast & Modal Utilities
// ------------------------------------------------------------
function showToast(msg) {
  const t = document.getElementById('toastMsg');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

// ------------------------------------------------------------
// 2. Main 3-Mode Switcher
// ------------------------------------------------------------
function switchMainMode(mode) {
  currentMainMode = mode;
  
  // Toggle Mode Buttons
  const btnGovt = document.getElementById('btnModeGovt');
  const btnPriv = document.getElementById('btnModePrivate');
  const btnNotes = document.getElementById('btnModeNotes');

  if (btnGovt) btnGovt.classList.toggle('active', mode === 'GOVT');
  if (btnPriv) btnPriv.classList.toggle('active', mode === 'PRIVATE');
  if (btnNotes) btnNotes.classList.toggle('active', mode === 'NOTES');

  // Toggle Mode Views
  const viewGovt = document.getElementById('viewGovt');
  const viewPriv = document.getElementById('viewPrivate');
  const viewNotes = document.getElementById('viewNotes');

  if (viewGovt) viewGovt.style.display = mode === 'GOVT' ? 'block' : 'none';
  if (viewPriv) viewPriv.style.display = mode === 'PRIVATE' ? 'block' : 'none';
  if (viewNotes) viewNotes.style.display = mode === 'NOTES' ? 'block' : 'none';

  // Render the selected view
  if (mode === 'GOVT') {
    renderGovtView();
  } else if (mode === 'PRIVATE') {
    renderPrivateView();
  } else if (mode === 'NOTES') {
    renderNotesView();
  }
}

// ------------------------------------------------------------
// 3. Government Jobs View (SarkariResult.com Live Sync)
// ------------------------------------------------------------
function selectGovtQual(qual) {
  currentGovtQual = qual;
  document.querySelectorAll('#govtQualPills .qual-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.qual === qual);
  });
  renderGovtView();
}

function resetGovtFilters() {
  const searchInput = document.getElementById('govtSearchInput');
  if (searchInput) searchInput.value = '';
  currentGovtQual = 'ALL';
  document.querySelectorAll('#govtQualPills .qual-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.qual === 'ALL');
  });
  renderGovtView();
}

function renderMarquees() {
  const row1 = document.getElementById('marqueeRow1');
  const row2 = document.getElementById('marqueeRow2');
  if (!row1 || !row2) return;

  const items = state.marquees && state.marquees.length > 0 
    ? state.marquees 
    : (state.sarkariColumns?.latestJob || []).slice(0, 10).map(j => ({
        title: j.title,
        url: j.url
      }));

  if (items.length === 0) {
    row1.innerHTML = '<span>Latest verified recruitment announcements loading...</span>';
    row2.innerHTML = '';
    return;
  }

  const mid = Math.ceil(items.length / 2);
  const part1 = items.slice(0, mid);
  const part2 = items.slice(mid);

  row1.innerHTML = part1.map((m, idx) => `
    <a href="javascript:void(0)" onclick="openPostDetail('marquee-${idx}', '${escapeAttr(m.url || '')}', '${escapeAttr(m.title)}')">${m.title}</a>
    <span class="sep">||</span>
  `).join('');

  row2.innerHTML = part2.map((m, idx) => `
    <a href="javascript:void(0)" onclick="openPostDetail('marquee-${mid + idx}', '${escapeAttr(m.url || '')}', '${escapeAttr(m.title)}')">${m.title}</a>
    <span class="sep">||</span>
  `).join('');
}

function getAgencyChip(title) {
  const t = (title || '').toUpperCase();
  if (t.includes('BPSC')) return { name: 'BPSC', cls: 'chip-bpsc' };
  if (t.includes('BSSC')) return { name: 'BSSC', cls: 'chip-bpsc' };
  if (t.includes('UPSSSC')) return { name: 'UPSSSC', cls: 'chip-upsssc' };
  if (t.includes('UPPSC')) return { name: 'UPPSC', cls: 'chip-upsssc' };
  if (t.includes('SSC')) return { name: 'SSC', cls: 'chip-ssc' };
  if (t.includes('RRB') || t.includes('RAILWAY')) return { name: 'RAILWAY', cls: 'chip-railway' };
  if (t.includes('UPSC')) return { name: 'UPSC', cls: 'chip-upsc' };
  if (t.includes('ARMY')) return { name: 'ARMY', cls: 'chip-defense' };
  if (t.includes('NAVY')) return { name: 'NAVY', cls: 'chip-defense' };
  if (t.includes('AIR FORCE') || t.includes('AFCAT')) return { name: 'IAF', cls: 'chip-defense' };
  if (t.includes('IBPS')) return { name: 'IBPS', cls: 'chip-banking' };
  if (t.includes('SBI')) return { name: 'SBI', cls: 'chip-banking' };
  if (t.includes('NTA') || t.includes('NEET') || t.includes('JEE') || t.includes('CUET')) return { name: 'NTA', cls: 'chip-nta' };
  if (t.includes('ICSIL')) return { name: 'ICSIL', cls: 'chip-icsil' };
  if (t.includes('CWC')) return { name: 'CWC', cls: 'chip-icsil' };
  if (t.includes('COURT')) return { name: 'COURT', cls: 'chip-court' };
  if (t.includes('POLICE') || t.includes('CONSTABLE') || t.includes('SI ')) return { name: 'POLICE', cls: 'chip-police' };
  if (t.includes('TEACHER') || t.includes('TET') || t.includes('KVS') || t.includes('NVS')) return { name: 'TEACHING', cls: 'chip-teach' };
  return { name: 'GOVT', cls: 'chip-govt' };
}

function quickFilterSearch(tag) {
  const searchInput = document.getElementById('govtSearchInput');
  if (!searchInput) return;

  if (['10th / Matric', '12th / Inter', 'ITI / Diploma', 'Graduate', 'Post Graduate'].includes(tag)) {
    selectGovtQual(tag);
  } else {
    searchInput.value = tag;
    renderGovtView();
  }
  document.getElementById('topColorGrid')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderTopColorBoxes() {
  const grid = document.getElementById('topColorGrid');
  if (!grid) return;

  // Use the top latest jobs or govt jobs for the iconic 8 color buttons
  const list = (state.sarkariColumns?.latestJob && state.sarkariColumns.latestJob.length > 0)
    ? state.sarkariColumns.latestJob.slice(0, 8)
    : (state.jobs || []).slice(0, 8);

  if (list.length === 0) {
    grid.innerHTML = '';
    return;
  }

  const icons = ['🏛️', '🚆', '📑', '👮', '👨‍🏫', '🏦', '⚖️', '💼'];

  grid.innerHTML = list.map((job, idx) => {
    const cboxClass = `cbox-${(idx % 8) + 1}`;
    const safeTitle = job.title.length > 52 ? job.title.substring(0, 52) + '...' : job.title;
    const jobId = job.id || `live-top-${idx}`;
    const jobUrl = job.url || '';
    const chip = getAgencyChip(job.title);
    const icon = icons[idx % icons.length];

    return `
      <a href="javascript:void(0)" onclick="openPostDetail('${jobId}', '${escapeAttr(jobUrl)}', '${escapeAttr(job.title)}')" class="sr-color-box ${cboxClass}">
        <div class="cbox-header">
          <span class="cbox-icon">${icon}</span>
          <span class="cbox-chip ${chip.cls}">${chip.name}</span>
        </div>
        <div class="cbox-title">${escapeHtml(safeTitle)}</div>
        <div class="cbox-footer">
          <span>⚡ View &amp; Apply</span>
          <span class="cbox-arrow">→</span>
        </div>
      </a>
    `;
  }).join('');
}

function renderGovtView() {
  renderMarquees();
  renderTopColorBoxes();

  const searchInput = document.getElementById('govtSearchInput');
  const q = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const cols = state.sarkariColumns || {
    result: [],
    admitCard: [],
    latestJob: [],
    answerKey: [],
    syllabus: [],
    admission: [],
    certificate: [],
    outsourcing: [],
    important: []
  };

  // Helper to filter column items
  const filterCol = (arr) => {
    if (!arr) return [];
    return arr.filter(item => {
      const matchQ = !q || item.title.toLowerCase().includes(q);
      let matchQual = true;
      if (currentGovtQual !== 'ALL') {
        const titleLower = item.title.toLowerCase();
        if (currentGovtQual === '10th / Matric') {
          matchQual = titleLower.includes('10th') || titleLower.includes('matric') || titleLower.includes('mts') || titleLower.includes('group d') || titleLower.includes('constable');
        } else if (currentGovtQual === '12th / Inter') {
          matchQual = titleLower.includes('12th') || titleLower.includes('inter') || titleLower.includes('10+2') || titleLower.includes('chsl');
        } else if (currentGovtQual === 'ITI / Diploma') {
          matchQual = titleLower.includes('iti') || titleLower.includes('diploma') || titleLower.includes('polytechnic') || titleLower.includes('apprentice') || titleLower.includes('je');
        } else if (currentGovtQual === 'Graduate') {
          matchQual = titleLower.includes('graduate') || titleLower.includes('cgl') || titleLower.includes('degree') || titleLower.includes('b.tech') || titleLower.includes('bsc') || titleLower.includes('bpsc') || titleLower.includes('upsc') || titleLower.includes('po') || titleLower.includes('officer');
        } else if (currentGovtQual === 'Post Graduate') {
          matchQual = titleLower.includes('pg') || titleLower.includes('post graduate') || titleLower.includes('master') || titleLower.includes('m.tech') || titleLower.includes('msc') || titleLower.includes('net') || titleLower.includes('professor');
        }
      }
      return matchQ && matchQual;
    });
  };

  const colConfigs = [
    { key: 'result', listId: 'colResultList', countId: 'countColResult' },
    { key: 'admitCard', listId: 'colAdmitList', countId: 'countColAdmit' },
    { key: 'latestJob', listId: 'colLatestJobList', countId: 'countColJobs' },
    { key: 'answerKey', listId: 'colAnswerKeyList', countId: 'countColKey' },
    { key: 'syllabus', listId: 'colSyllabusList', countId: 'countColSyllabus' },
    { key: 'admission', listId: 'colAdmissionList', countId: 'countColAdmission' },
    { key: 'certificate', listId: 'colCertificateList', countId: 'countColCert' },
    { key: 'outsourcing', listId: 'colOutsourcingList', countId: 'countColOutsource' },
    { key: 'important', listId: 'colImportantList', countId: 'countColImportant' }
  ];

  let totalGovtShown = 0;

  colConfigs.forEach(({ key, listId, countId }) => {
    const rawList = cols[key] || [];
    const filteredList = filterCol(rawList);
    totalGovtShown += filteredList.length;

    const countEl = document.getElementById(countId);
    if (countEl) countEl.textContent = filteredList.length;

    const listEl = document.getElementById(listId);
    if (!listEl) return;

    if (filteredList.length === 0) {
      listEl.innerHTML = '<li style="color:#6b7280; font-size:0.84rem; padding:8px 10px;">No links match current filter.</li>';
      return;
    }

    listEl.innerHTML = filteredList.map((item, idx) => {
      const isNew = idx < 4;
      const itemId = item.id || `live-${key}-${idx}`;
      const itemUrl = item.url || '';
      const officialPortal = item.officialUrl || inferOfficialPortal(item.title);

      let actionButtons = '';
      if (key === 'latestJob' || key === 'outsourcing') {
        actionButtons = `
          <a href="${officialPortal}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none;" title="Open Official Application Portal">
            🚀 Apply Online ↗
          </a>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'job')">
            📋 Check Details ↗
          </button>
        `;
      } else if (key === 'admitCard') {
        actionButtons = `
          <button type="button" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none; background:#065f46; border-color:#047857;" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'admitCard')">
            🎫 Download Admit Card ↗
          </button>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'admitCard')">
            📋 Check Details ↗
          </button>
        `;
      } else if (key === 'result') {
        actionButtons = `
          <button type="button" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none; background:#7c2d12; border-color:#9a3412;" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'result')">
            🏆 Check / Download Result ↗
          </button>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'result')">
            📋 Check Details ↗
          </button>
        `;
      } else if (key === 'answerKey') {
        actionButtons = `
          <button type="button" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none; background:#1e3a8a; border-color:#1e40af;" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'answerKey')">
            🔑 Check Answer Key ↗
          </button>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'answerKey')">
            📋 Check Details ↗
          </button>
        `;
      } else if (key === 'syllabus') {
        actionButtons = `
          <button type="button" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none; background:#431407; border-color:#78350f;" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'syllabus')">
            📖 Download Syllabus ↗
          </button>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'syllabus')">
            📋 Check Details ↗
          </button>
        `;
      } else if (key === 'admission') {
        actionButtons = `
          <a href="${officialPortal}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none;">
            🎓 Admission Apply ↗
          </a>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'admission')">
            📋 Check Details ↗
          </button>
        `;
      } else if (key === 'certificate') {
        actionButtons = `
          <button type="button" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none; background:#312e81; border-color:#3730a3;" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'certificate')">
            📜 Verify / Check ↗
          </button>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'certificate')">
            📋 Check Details ↗
          </button>
        `;
      } else {
        actionButtons = `
          <button type="button" class="btn btn-primary btn-sm" style="padding:2px 8px; font-size:0.75rem; text-decoration:none;" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'important')">
            📢 View Notice ↗
          </button>
          <button type="button" class="sr-detail-btn" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', 'important')">
            📋 Check Details ↗
          </button>
        `;
      }

      const chip = getAgencyChip(item.title);
      return `
        <li class="sr-item-row">
          <div class="sr-item-top">
            <span class="agency-chip ${chip.cls}">${chip.name}</span>
            <a href="javascript:void(0)" onclick="openPostDetail('${itemId}', '${escapeAttr(itemUrl)}', '${escapeAttr(item.title)}', '${key}')" class="sr-link-title" title="Click to view official details">
              ${escapeHtml(item.title)}
            </a>
            ${isNew ? '<span class="live-pill"><span class="pulse-dot"></span>LIVE</span>' : ''}
          </div>
          <div class="sr-item-actions">
            ${actionButtons}
          </div>
        </li>
      `;
    }).join('');
  });

  // Calculate grand total links across all 9 columns
  const allLiveCount = Object.values(cols).reduce((acc, curr) => acc + (Array.isArray(curr) ? curr.length : 0), 0);

  // Update navigation counters
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('totalLiveLinksCount', allLiveCount > 0 ? `${allLiveCount}+` : '225+');
  setEl('countGovtBadge', allLiveCount);

  // Summary message
  const summaryEl = document.getElementById('govtShowingSummary');
  if (summaryEl) {
    summaryEl.textContent = `Showing ${totalGovtShown} of ${allLiveCount} live updates • Filter: ${currentGovtQual === 'ALL' ? 'All Qualifications' : currentGovtQual}`;
  }

  // Update sync timestamp
  if (state.lastSyncedAt) {
    const timeStr = new Date(state.lastSyncedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    setEl('syncTimeLabel', `Last Updated: Today at ${timeStr}`);
  }
}

// ------------------------------------------------------------
// 4. Private Jobs View (State-Wise & Date-Sorted across India)
// ------------------------------------------------------------
function selectPrivateSector(sector) {
  currentPrivateSector = sector;
  document.querySelectorAll('#sectorPills .sector-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sector === sector);
  });
  const labelEl = document.getElementById('activeSectorLabel');
  if (labelEl) labelEl.textContent = sector === 'ALL' ? 'All Sectors' : sector;
  renderPrivateView();
}

function selectPrivateState(stateName) {
  currentPrivateState = stateName;
  document.querySelectorAll('#statePills .state-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.state === stateName);
  });
  const labelEl = document.getElementById('activeStateLabel');
  if (labelEl) labelEl.textContent = stateName === 'ALL' ? 'All India' : stateName;
  renderPrivateView();
}

function resetPrivateFilters() {
  const searchInput = document.getElementById('privateSearchInput');
  const sortSelect = document.getElementById('privateSortSelect');
  const qualSelect = document.getElementById('privateQualSelect');

  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'date-desc';
  if (qualSelect) qualSelect.value = 'ALL';

  currentPrivateState = 'ALL';
  currentPrivateSector = 'ALL';
  currentPrivateSort = 'date-desc';

  document.querySelectorAll('#statePills .state-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.state === 'ALL');
  });
  document.querySelectorAll('#sectorPills .sector-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sector === 'ALL');
  });

  const stateLabel = document.getElementById('activeStateLabel');
  if (stateLabel) stateLabel.textContent = 'All India';
  const sectorLabel = document.getElementById('activeSectorLabel');
  if (sectorLabel) sectorLabel.textContent = 'All Sectors';

  renderPrivateView();
}

function getSectorIcon(sector) {
  if (!sector) return '🏢';
  if (sector.includes('Retail') || sector.includes('Shop')) return '🛒';
  if (sector.includes('Factor') || sector.includes('Plant')) return '🏭';
  if (sector.includes('Pharm') || sector.includes('Health')) return '💊';
  if (sector.includes('Logist') || sector.includes('Warehous')) return '📦';
  if (sector.includes('Showroom') || sector.includes('Dealership')) return '🏬';
  if (sector.includes('MSME') || sector.includes('Enterprise')) return '⚙️';
  return '🏢';
}

function updateDynamicPrivateCounters(pjobs) {
  // Update state pills counters
  const stateCounts = { ALL: pjobs.length };
  pjobs.forEach(j => {
    if (j.state) {
      stateCounts[j.state] = (stateCounts[j.state] || 0) + 1;
    }
  });

  document.querySelectorAll('#statePills .state-pill').forEach(pill => {
    const st = pill.dataset.state;
    const countSpan = pill.querySelector('.pill-count');
    if (countSpan) {
      if (st === 'ALL') {
        countSpan.textContent = pjobs.length;
      } else {
        countSpan.textContent = stateCounts[st] || 0;
      }
    }
  });

  // Update sector pills counters
  const sectorCounts = { ALL: pjobs.length };
  pjobs.forEach(j => {
    if (j.sector) {
      sectorCounts[j.sector] = (sectorCounts[j.sector] || 0) + 1;
    }
  });

  const setElText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setElText('countSectorAll', pjobs.length);
  setElText('countSectorRetail', sectorCounts['Shops & Retail Supermarkets'] || 0);
  setElText('countSectorFactory', sectorCounts['Factories & Industrial Plants'] || 0);
  setElText('countSectorPharmacy', sectorCounts['Pharmacies & Healthcare Shops'] || 0);
  setElText('countSectorLogistics', sectorCounts['Warehousing & Logistics Hubs'] || 0);
  setElText('countSectorShowroom', sectorCounts['Showrooms & Dealerships'] || 0);
  setElText('countSectorMSME', sectorCounts['MSME & Local Businesses'] || 0);

  // Top metric numbers
  setElText('statPrivTotalOpenings', `${pjobs.length}+`);
  
  const todayCount = pjobs.filter(j => j.postedDate === '2026-10-17' || (j.postedLabel && j.postedLabel.includes('Today'))).length;
  setElText('statPrivTodayCount', `${todayCount || 10}+ Today`);
  
  const distinctStates = new Set(pjobs.map(j => j.state).filter(Boolean));
  setElText('statPrivStatesCount', `${distinctStates.size}+ States`);
}

function renderPrivateView() {
  const pjobs = state.privateJobs || [];
  updateDynamicPrivateCounters(pjobs);

  const searchInput = document.getElementById('privateSearchInput');
  const sortSelect = document.getElementById('privateSortSelect');
  const qualSelect = document.getElementById('privateQualSelect');

  const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const qual = qualSelect ? qualSelect.value : 'ALL';
  const sort = sortSelect ? sortSelect.value : 'date-desc';
  currentPrivateSort = sort;

  // 1. Filter
  let filtered = pjobs.filter(job => {
    const matchState = currentPrivateState === 'ALL' || job.state === currentPrivateState || job.state === 'All India';
    const matchSector = currentPrivateSector === 'ALL' || job.sector === currentPrivateSector;
    
    let matchQual = true;
    if (qual !== 'ALL') {
      const jQ = (job.qual || '').toLowerCase();
      const qLower = qual.toLowerCase();
      if (qLower.includes('10th')) {
        matchQual = jQ.includes('10th') || jQ.includes('matric');
      } else if (qLower.includes('12th')) {
        matchQual = jQ.includes('12th') || jQ.includes('inter');
      } else if (qLower.includes('iti')) {
        matchQual = jQ.includes('iti') || jQ.includes('technical') || jQ.includes('polytechnic') || jQ.includes('diploma');
      } else if (qLower.includes('graduate')) {
        matchQual = jQ.includes('graduate') || jQ.includes('degree');
      } else {
        matchQual = job.qual === qual;
      }
    }

    const matchQ = !q || 
      job.title.toLowerCase().includes(q) || 
      job.company.toLowerCase().includes(q) || 
      (job.city && job.city.toLowerCase().includes(q)) ||
      (job.state && job.state.toLowerCase().includes(q)) ||
      (job.badge && job.badge.toLowerCase().includes(q)) ||
      (job.sector && job.sector.toLowerCase().includes(q));

    return matchState && matchSector && matchQual && matchQ;
  });

  // 2. Sort (Date of posting newest first by default!)
  filtered.sort((a, b) => {
    if (sort === 'date-desc') {
      const da = a.postedDate || '';
      const db = b.postedDate || '';
      return db.localeCompare(da); // Newest date first
    } else if (sort === 'date-asc') {
      const da = a.postedDate || '';
      const db = b.postedDate || '';
      return da.localeCompare(db); // Oldest date first
    } else if (sort === 'openings-desc') {
      const va = parseInt(a.openings, 10) || 0;
      const vb = parseInt(b.openings, 10) || 0;
      return vb - va;
    } else if (sort === 'salary-desc') {
      const getNum = (s) => {
        const matches = (s || '').match(/\d+[\d,]*/g);
        if (!matches) return 0;
        return Math.max(...matches.map(m => parseInt(m.replace(/,/g, ''), 10)));
      };
      return getNum(b.salary) - getNum(a.salary);
    }
    return 0;
  });

  const grid = document.getElementById('privateCardsGrid');
  const summary = document.getElementById('privateResultsSummary');
  const sortInd = document.getElementById('privateSortIndicator');

  if (summary) {
    const stateText = currentPrivateState === 'ALL' ? 'All India' : currentPrivateState;
    const sectorText = currentPrivateSector === 'ALL' ? 'All Sectors' : currentPrivateSector;
    summary.textContent = `Showing ${filtered.length} verified opening(s) • ${stateText} • ${sectorText}`;
  }

  if (sortInd) {
    if (sort === 'date-desc') {
      sortInd.innerHTML = '⚡ Sorted by: <strong>Date of Posting (Newest First)</strong>';
    } else if (sort === 'date-asc') {
      sortInd.innerHTML = '📅 Sorted by: <strong>Date of Posting (Oldest First)</strong>';
    } else if (sort === 'openings-desc') {
      sortInd.innerHTML = '👥 Sorted by: <strong>Highest Vacancies</strong>';
    } else if (sort === 'salary-desc') {
      sortInd.innerHTML = '💰 Sorted by: <strong>Highest Salary</strong>';
    }
  }

  // Update navbar badge counter
  const privBadge = document.getElementById('countPrivBadge');
  if (privBadge) privBadge.textContent = pjobs.length;

  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:36px 20px; background:#ffffff; border:2px dashed #cbd5e1; border-radius:10px;">
        <div style="font-size:2.4rem; margin-bottom:8px;">🔍</div>
        <h3 style="font-size:1.15rem; font-weight:800; color:#1e3a8a; margin:0 0 6px;">No verified openings match this filter</h3>
        <p style="font-size:0.86rem; color:#64748b; margin:0 0 16px;">Try selecting "All States", choosing "All Sectors", or clearing your search term.</p>
        <button type="button" class="btn btn-primary" onclick="resetPrivateFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(job => {
    const isToday = job.postedDate === '2026-10-17' || (job.postedLabel && job.postedLabel.includes('Today'));
    const sectorIcon = getSectorIcon(job.sector);
    const dateBadgeHtml = isToday
      ? `<span class="pcard-date-badge today"><span class="pulse-dot"></span>⚡ Posted Today (17 Oct)</span>`
      : `<span class="pcard-date-badge">📅 ${escapeHtml(job.postedLabel || job.postedDate || 'Active')}</span>`;

    return `
      <article class="private-card">
        <div class="pcard-top-ribbon">
          ${dateBadgeHtml}
          <div class="pcard-ribbon-right">
            <span class="pcard-sector-tag">${sectorIcon} ${escapeHtml(job.sector)}</span>
            <span class="pcard-badge-highlight">${escapeHtml(job.badge || 'VERIFIED')}</span>
          </div>
        </div>

        <div class="pcard-body">
          <div class="pcard-company-row">
            <span class="pcard-company-icon">${sectorIcon}</span>
            <div class="pcard-company-text">
              <span class="pcard-company-name">${escapeHtml(job.company)}</span>
              <span class="pcard-verified-badge">✔ Verified Direct Employer Portal</span>
            </div>
            <span class="pcard-state-pill">📍 ${escapeHtml(job.state)}</span>
          </div>

          <h3 class="pcard-title">
            <a href="javascript:void(0)" onclick="openPostDetail('${job.id}', '${escapeAttr(job.url || '')}', '${escapeAttr(job.title)}')" title="Click to view official job details">
              ${escapeHtml(job.title)}
            </a>
          </h3>

          <div class="pcard-location-row">
            <span class="loc-pin">📍</span>
            <span><strong>Locations / Cities:</strong> ${escapeHtml(job.city)}</span>
          </div>

          <div class="pcard-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Total Openings:</span>
              <span class="spec-val accent-val">👥 ${escapeHtml(job.openings)}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Salary / Stipend:</span>
              <span class="spec-val">💰 ${escapeHtml(job.salary)}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Eligibility:</span>
              <span class="spec-val qual-val">🎯 ${escapeHtml(job.qual)}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Application Status:</span>
              <span class="spec-val status-val">⏳ ${escapeHtml(job.lastDate)}</span>
            </div>
          </div>

          <div class="pcard-trust-pill-row">
            <span class="trust-tag green">🛡️ Zero Placement / Registration Fee</span>
            <span class="trust-tag blue">🌐 100% Direct Official Portal Apply</span>
          </div>
        </div>

        <div class="pcard-actions">
          <a href="${job.url || '#'}" target="_blank" rel="noopener" class="btn btn-primary btn-sm pcard-apply-btn" title="Open official company application / careers page">
            🚀 Apply on Official Website ↗
          </a>
          <button type="button" class="btn btn-outline btn-sm pcard-detail-btn" onclick="openPostDetail('${job.id}', '${escapeAttr(job.url || '')}', '${escapeAttr(job.title)}')">
            📋 Full Eligibility &amp; Details
          </button>
          <a href="${job.url || '#'}" target="_blank" rel="noopener" class="btn btn-outline btn-sm pcard-career-btn" title="Visit official corporate careers portal">
            🏢 Careers Page ↗
          </a>
        </div>
      </article>
    `;
  }).join('');
}

// ------------------------------------------------------------
// 5. NCERT Master Hub — Class-Wise & Subject-Wise Prep Engine
// ------------------------------------------------------------

function selectNcertClass(cls) {
  currentNcertClass = Number(cls);
  document.querySelectorAll('#ncertClassPills .exam-pill').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.class) === currentNcertClass);
  });

  const statClassEl = document.getElementById('statNcertClass');
  if (statClassEl) statClassEl.textContent = `Class ${currentNcertClass}`;

  if (currentNcertClass > 10) {
    showToast(`📚 Class ${currentNcertClass} curriculum in development! Classes 5, 6, 7, 8, 9, and 10 are currently live with complete chapter notes, speed quizzes & mock tests.`);
  }
  renderNotesView();
}

function selectNcertSubject(subj) {
  currentNcertSubj = subj;
  document.querySelectorAll('#ncertSubjectTabs .type-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subj === subj);
  });
  renderNotesView();
}

function selectStudyType(type) {
  currentStudyType = type;
  document.querySelectorAll('#studyTypeTabs .type-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === type);
  });
  renderNotesView();
}

// ------------------------------------------------------------
// Smart EdTech Navigation & Live Search Controllers
// ------------------------------------------------------------

function switchEdtechTab(tab) {
  const sideTabs = {
    'dashboard': 'sideNavDashboard',
    'lessons': 'sideNavLessons',
    'handwritten': 'sideNavHandwritten',
    'assessments': 'sideNavAssessments',
    'schedule': 'sideNavSchedule'
  };

  Object.entries(sideTabs).forEach(([k, id]) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', k === tab);
  });

  if (tab === 'dashboard') {
    const dash = document.getElementById('edtechDashboardSection');
    if (dash) dash.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (tab === 'lessons') {
    selectStudyType('ALL');
    const browser = document.getElementById('ncertCurriculumBrowser');
    if (browser) browser.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (tab === 'handwritten') {
    selectStudyType('NOTES');
    const browser = document.getElementById('ncertCurriculumBrowser');
    if (browser) browser.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('✍️ Showing Topper Handwritten Notes!');
  } else if (tab === 'assessments') {
    selectStudyType('QUIZ');
    const browser = document.getElementById('ncertCurriculumBrowser');
    if (browser) browser.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('⚡ Showing Chapter Speed Quizzes & Mock Papers!');
  } else if (tab === 'schedule') {
    const sched = document.querySelector('.edtech-schedule-card');
    if (sched) sched.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function handleEdtechSearch(query) {
  const stdInput = document.getElementById('studySearchInput');
  if (stdInput) {
    stdInput.value = query;
  }
  debounce(renderNotesView, 250)();
}

// ------------------------------------------------------------
// 5A. Medium & Language Switcher (Hindi / English / Bilingual)
// ------------------------------------------------------------

function setStudyLanguage(lang) {
  currentStudyLang = lang;
  try { localStorage.setItem('ncert_lang', lang); } catch (e) {}

  syncModalLanguageControls(lang);

  const langLabel = lang === 'hi' ? '🇮🇳 हिन्दी माध्यम (Hindi Medium)' :
                    lang === 'en' ? '🇬🇧 English Medium' : '🌐 द्विभाषी (Bilingual)';
  showToast(`माध्यम बदला गया: ${langLabel}`);

  renderNotesView();
}

function setReaderLanguage(lang) {
  currentStudyLang = lang;
  try { localStorage.setItem('ncert_lang', lang); } catch (e) {}
  syncModalLanguageControls(lang);

  if (currentReaderNote) {
    renderNotesReaderBody(currentReaderNote, currentReaderNote.practiceQuestions || []);
  }
}

function setQuizLanguage(lang) {
  currentStudyLang = lang;
  try { localStorage.setItem('ncert_lang', lang); } catch (e) {}
  syncModalLanguageControls(lang);

  if (activeQuizItem) {
    renderQuizQuestionView();
  }
}

function syncModalLanguageControls(lang) {
  // Sync Hub Buttons
  const btnHi = document.getElementById('btnLangHi');
  const btnEn = document.getElementById('btnLangEn');
  const btnBi = document.getElementById('btnLangBilingual');
  if (btnHi) btnHi.classList.toggle('active', lang === 'hi');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnBi) btnBi.classList.toggle('active', lang === 'bilingual');

  // Sync EdTech Topbar Buttons
  const eHi = document.getElementById('btnEdtechLangHi');
  const eEn = document.getElementById('btnEdtechLangEn');
  const eBi = document.getElementById('btnEdtechLangBi');
  if (eHi) eHi.classList.toggle('active', lang === 'hi');
  if (eEn) eEn.classList.toggle('active', lang === 'en');
  if (eBi) eBi.classList.toggle('active', lang === 'bilingual');

  // Sync Reader Modal Buttons
  const rHi = document.getElementById('readerLangHi');
  const rEn = document.getElementById('readerLangEn');
  const rBi = document.getElementById('readerLangBi');
  if (rHi) rHi.classList.toggle('active', lang === 'hi');
  if (rEn) rEn.classList.toggle('active', lang === 'en');
  if (rBi) rBi.classList.toggle('active', lang === 'bilingual');

  // Sync Quiz Dropdown
  const qSelect = document.getElementById('quizLangSelect');
  if (qSelect) qSelect.value = lang;
}

function resetStudyFilters(keepCurrentClass = true) {
  if (!keepCurrentClass) {
    currentNcertClass = 5;
  }
  currentNcertSubj = 'ALL';
  currentStudyType = 'ALL';
  const input = document.getElementById('studySearchInput');
  if (input) input.value = '';

  document.querySelectorAll('#ncertClassPills .exam-pill').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.class) === currentNcertClass);
  });
  document.querySelectorAll('#ncertSubjectTabs .type-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subj === 'ALL');
  });
  document.querySelectorAll('#studyTypeTabs .type-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === 'ALL');
  });
  renderNotesView();
}

// Backward compatibility aliases
function selectStudyExam(exam) {
  renderNotesView();
}
function selectNotesCategory(cat) {
  selectNcertClass(5);
}

function helperGetItemClass(item) {
  if (item.classLevel) {
    const m = String(item.classLevel).match(/class\s*(\d+)/i) || String(item.classLevel).match(/(\d+)/);
    if (m) return parseInt(m[1], 10);
  }
  const str = String(item.exam || item.examTag || item.id || '');
  const m = str.match(/class\s*(\d+)/i) || str.match(/c(\d+)/i) || str.match(/(\d+)/);
  if (m) return parseInt(m[1], 10);
  return 5;
}

function helperGetItemSubj(item) {
  const code = String(item.subjectCode || item.subject || '').toUpperCase();
  if (code === 'MATH' || code.includes('MATH') || code.includes('गणित')) return 'MATH';
  if (code === 'SCI' || code === 'EVS' || code.includes('SCI') || code.includes('EVS') || code.includes('विज्ञान') || code.includes('पर्यावरण') || code.includes('आस-पास')) return 'EVS';
  if (code === 'SST' || code.includes('SST') || code.includes('SOCIAL') || code.includes('सामाजिक') || code.includes('SOCIETY')) return 'SST';
  if (code === 'HIN' || code === 'HINDI' || code.includes('HIN') || code.includes('हिंदी') || code.includes('हिन्दी') || code.includes('रिमझिम') || code.includes('मल्हार') || code.includes('गंगा') || code.includes('क्षितिज')) return 'HINDI';

  const s = String(item.subject || item.title || '').toLowerCase();
  if (s.includes('math') || s.includes('गणित')) return 'MATH';
  if (s.includes('evs') || s.includes('science') || s.includes('पर्यावरण') || s.includes('आस-पास') || s.includes('विज्ञान')) return 'EVS';
  if (s.includes('social') || s.includes('सामाजिक') || s.includes('society') || s.includes('sst')) return 'SST';
  if (s.includes('hindi') || s.includes('हिंदी') || s.includes('हिन्दी') || s.includes('रिमझिम') || s.includes('मल्हार') || s.includes('गंगा') || s.includes('क्षितिज')) return 'HINDI';
  return 'MATH';
}

function updateStudyDynamicCounters(allResources) {
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  const notes = state.notes || [];
  const quizzes = state.quizzes || [];
  const testSeries = state.testSeries || [];

  // 1. Top Highlights
  const mathChapters = notes.filter(n => helperGetItemClass(n) === currentNcertClass && helperGetItemSubj(n) === 'MATH').length;
  setTxt('statNcertChapters', `${mathChapters} Ch`);
  setTxt('statNcertClass', `Class ${currentNcertClass}`);

  let totalQuestionsCount = 0;
  notes.forEach(n => { if (Array.isArray(n.practiceQuestions)) totalQuestionsCount += n.practiceQuestions.length; });
  quizzes.forEach(q => { if (Array.isArray(q.questions)) totalQuestionsCount += q.questions.length; });
  testSeries.forEach(t => { if (Array.isArray(t.questions)) totalQuestionsCount += t.questions.length; });
  setTxt('statNcertQuestions', `${totalQuestionsCount}+ MCQs`);

  // Count items for current active class
  const classResources = allResources.filter(item => helperGetItemClass(item) === currentNcertClass);
  setTxt('countSubjAll', classResources.length);
  setTxt('countSubjMath', classResources.filter(r => helperGetItemSubj(r) === 'MATH').length);
  setTxt('countSubjEVS', classResources.filter(r => helperGetItemSubj(r) === 'EVS').length);
  setTxt('countSubjSST', classResources.filter(r => helperGetItemSubj(r) === 'SST').length);
  setTxt('countSubjHindi', classResources.filter(r => helperGetItemSubj(r) === 'HINDI').length);

  // Type Counts (filtered by current active class & subject)
  const classSubjResources = classResources.filter(item => currentNcertSubj === 'ALL' || helperGetItemSubj(item) === currentNcertSubj);
  setTxt('countTypeAll', classSubjResources.length);
  setTxt('countTypeNotes', classSubjResources.filter(r => r.resourceType === 'NOTES').length);
  setTxt('countTypeQuiz', classSubjResources.filter(r => r.resourceType === 'QUIZ').length);
  setTxt('countTypeTests', classSubjResources.filter(r => r.resourceType === 'TEST_SERIES').length);

  // General badges
  setTxt('countNotesBadge', allResources.length);
}

function renderNotesView() {
  const quizzes = (state.quizzes || []).map(q => ({ ...q, resourceType: 'QUIZ' }));
  const notes = (state.notes || []).map(n => ({ ...n, resourceType: 'NOTES' }));

  // The NCERT hub intentionally stays chapter-focused: notes, official PDFs and quizzes.
  const allResources = [...notes, ...quizzes];
  updateStudyDynamicCounters(allResources);
  renderNcertProgress();

  const searchInput = document.getElementById('studySearchInput');
  const q = searchInput ? searchInput.value.trim().toLowerCase() : '';

  // Filter by NCERT Class, Subject, Resource Type, and Search Query
  const filtered = allResources.filter(item => {
    // 1. Class Match
    const itemClass = helperGetItemClass(item);
    if (itemClass !== currentNcertClass) return false;

    // 2. Subject Match
    if (currentNcertSubj !== 'ALL') {
      const itemSubj = helperGetItemSubj(item);
      if (itemSubj !== currentNcertSubj) return false;
    }

    // 3. Resource Type Match
    if (currentStudyType !== 'ALL' && item.resourceType !== currentStudyType) {
      return false;
    }

    // 4. Search Query Match (Bilingual Search)
    if (q) {
      const title = (item.title || '').toLowerCase();
      const titleHi = (item.titleHi || '').toLowerCase();
      const desc = (item.desc || item.syllabus || '').toLowerCase();
      const descHi = (item.descHi || item.syllabusHi || '').toLowerCase();
      const edge = (item.competitionEdge || '').toLowerCase();
      const edgeHi = (item.competitionEdgeHi || '').toLowerCase();
      const book = (item.bookName || '').toLowerCase();
      const subj = (item.subject || '').toLowerCase();
      const ch = `chapter ${item.chapterNo || ''} ch ${item.chapterNo || ''} अध्याय ${item.chapterNo || ''}`.toLowerCase();
      const match = title.includes(q) || titleHi.includes(q) || desc.includes(q) || descHi.includes(q) || edge.includes(q) || edgeHi.includes(q) || book.includes(q) || subj.includes(q) || ch.includes(q);
      if (!match) return false;
    }

    return true;
  });

  const isHi = currentStudyLang === 'hi';
  const isBi = currentStudyLang === 'bilingual';

  const summary = document.getElementById('studyResultsSummary');
  const activeInd = document.getElementById('studyActiveIndicator');
  const subjName = currentNcertSubj === 'MATH' ? (isHi ? 'गणित (मैथ्स मेला)' : 'Mathematics (Maths Mela)') :
                   currentNcertSubj === 'EVS' ? (isHi ? 'पर्यावरण अध्ययन (EVS)' : 'Environmental Studies (EVS)') :
                   currentNcertSubj === 'HINDI' ? (isHi ? 'हिंदी व्याकरण (रिमझिम)' : 'Hindi Grammar (रिमझिम)') : (isHi ? 'सभी विषय' : 'All Subjects');
  const typeName = currentStudyType === 'QUIZ' ? (isHi ? 'स्पीड क्विज़' : 'Speed Quizzes') :
                   currentStudyType === 'TEST_SERIES' ? (isHi ? 'मॉक टेस्ट पेपर्स' : 'Mock Test Papers') :
                   currentStudyType === 'NOTES' ? (isHi ? 'अध्याय नोट्स' : 'Chapter Notes') : (isHi ? 'संपूर्ण अध्ययन सामग्री' : 'All Study Material');

  if (summary) {
    summary.textContent = isHi ?
      `कक्षा ${currentNcertClass} के ${filtered.length} एनसीईआरटी संसाधन प्रदर्शित • ${subjName} • ${typeName}` :
      `Showing ${filtered.length} NCERT resources • Class ${currentNcertClass} • ${subjName} • ${typeName}`;
  }
  if (activeInd) {
    activeInd.textContent = isHi ?
      `⚡ कक्षा ${currentNcertClass} एनसीईआरटी तैयारी हब (हिन्दी माध्यम)` :
      `⚡ 100% NCERT Class ${currentNcertClass} Curriculum Hub (${isBi ? 'Bilingual' : 'English'})`;
  }

  const grid = document.getElementById('notesCardsGrid');
  if (!grid) return;

  if (filtered.length === 0) {
    if (currentNcertClass > 10) {
      grid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:48px 20px; background:#ffffff; border:2px dashed #93c5fd; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
          <div style="font-size:3rem; margin-bottom:12px;">📚</div>
          <h3 style="font-size:1.35rem; font-weight:900; color:#1e40af; margin:0 0 8px;">
            ${isHi ? `एनसीईआरटी कक्षा ${currentNcertClass} पाठ्यक्रम अनलॉक के लिए तैयार!` : `NCERT Class ${currentNcertClass} Curriculum Ready to Ingest!`}
          </h3>
          <p style="font-size:0.95rem; color:#475569; max-width:620px; margin:0 auto 20px; line-height:1.6;">
            ${isHi ? `कक्षा 5, 6, 7, 8, 9 और <strong>कक्षा 10 (गणित, विज्ञान, संसाधन एवं विकास व हिन्दी)</strong> पूर्णतः सक्रिय हैं। <strong>कक्षा ${currentNcertClass}</strong> को अनलॉक करने के लिए पाठ्यपुस्तक की PDF या ZIP साझा करें!` :
            `Classes 5, 6, 7, 8, 9, and <strong>Class 10 (Mathematics, Science, SST &amp; Hindi)</strong> are fully active with complete notes, quizzes &amp; mock tests. To unlock <strong>Class ${currentNcertClass}</strong>, simply provide the textbook PDF or ZIP file!`}
          </p>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn btn-primary" onclick="selectNcertClass(10)" style="background:#2563eb; border-color:#1d4ed8; font-weight:800; padding:10px 20px;">
              ${isHi ? '🎒 सक्रिय कक्षा 10 पढ़ें' : '🎒 Study Active Class 10'}
            </button>
            <button type="button" class="btn btn-outline" onclick="selectNcertClass(9)">
              ${isHi ? '🎒 कक्षा 9 पढ़ें' : '🎒 Study Class 9'}
            </button>
            <button type="button" class="btn btn-outline" onclick="selectNcertClass(8)">
              ${isHi ? '🎒 कक्षा 8 पढ़ें' : '🎒 Study Class 8'}
            </button>
          </div>
        </div>
      `;
    } else {
      grid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:40px 20px; background:#ffffff; border:2px dashed #cbd5e1; border-radius:8px;">
          <div style="font-size:2.4rem; margin-bottom:8px;">🔍</div>
          <p style="font-size:1.15rem; font-weight:800; color:#4338ca; margin:0 0 6px;">
            ${isHi ? 'आपके फिल्टर से मेल खाता कोई संसाधन नहीं मिला।' : 'No NCERT resources found matching your current filter.'}
          </p>
          <p style="font-size:0.86rem; color:#64748b; margin:0 0 16px;">
            ${isHi ? 'कृपया "सभी विषय" चुनें या खोज शब्द बदलें।' : 'Try switching to "All Subjects" or clear your search term.'}
          </p>
          <button type="button" class="btn btn-primary btn-sm" onclick="resetStudyFilters(true)">
            ${isHi ? `कक्षा ${currentNcertClass} के सभी अध्याय देखें` : `Show All Class ${currentNcertClass} Chapters`}
          </button>
        </div>
      `;
    }
    return;
  }

  grid.innerHTML = filtered.map(item => {
    if (item.resourceType === 'QUIZ') {
      // 1. Chapter Speed Quiz Card
      const qCount = item.questionsCount || (item.questions ? item.questions.length : 10);
      const quizTitle = isHi ? (item.titleHi || item.title) : item.title;
      const subjCode = helperGetItemSubj(item);
      const subjText = isHi ? (subjCode === 'MATH' ? 'गणित' : subjCode === 'EVS' ? 'विज्ञान/पर्यावरण' : subjCode === 'SST' ? 'सामाजिक विज्ञान' : 'हिंदी') : (item.subject || 'Mathematics');

      return `
        <article class="quiz-card">
          <div>
            <div class="quiz-badge-strip">
              <span class="quiz-pill-tag">${isHi ? '⚡ अध्याय स्पीड क्विज़' : escapeHtml(item.badge || '⚡ CHAPTER SPEED QUIZ')}</span>
              <span class="quiz-exam-tag">${escapeHtml(item.classLevel || 'Class 5')} • ${escapeHtml(subjText)}</span>
            </div>
            <h3 class="quiz-card-title">${escapeHtml(quizTitle)}</h3>
            <div style="font-size:0.82rem; color:#475569; margin-bottom:10px;">
              <strong>${isHi ? 'विषय' : 'Subject'}:</strong> ${escapeHtml(subjText)}
            </div>
            <div class="quiz-meta-grid">
              <div class="quiz-meta-item">
                <strong>${qCount} Qs</strong>
                <span>${isHi ? 'प्रश्न' : 'Questions'}</span>
              </div>
              <div class="quiz-meta-item">
                <strong>${item.timeLimit || item.durationMinutes || 15} Mins</strong>
                <span>${isHi ? 'समय सीमा' : 'Timer Limit'}</span>
              </div>
              <div class="quiz-meta-item">
                <strong>+${item.marksPerQuestion || 2} / -${item.negativeMarking || 0.5}</strong>
                <span>${isHi ? 'अंकन' : 'Exam Marking'}</span>
              </div>
            </div>
          </div>
          <div class="study-card-actions">
            <button type="button" class="btn-quiz-start" onclick="startInteractiveQuiz('${item.id}', false)">
              ${isHi ? `▶️ स्पीड क्विज़ शुरू करें (${qCount} प्रश्न)` : `▶️ Start Chapter Speed Quiz (${qCount} Qs)`}
            </button>
            <span style="font-size:0.75rem; color:#64748b; font-weight:700;">⏱️ ${isHi ? 'लाइव टाइमर व तत्काल व्याख्या सहित स्कोरकार्ड' : 'Live Countdown Timer & Instant Solution Analysis'}</span>
          </div>
        </article>
      `;
    } else if (item.resourceType === 'TEST_SERIES') {
      // 2. Full Mock Test Card
      const qCount = item.totalQuestions || (item.questions ? item.questions.length : 10);
      const testTitle = isHi ? (item.titleHi || item.title) : item.title;
      const testSyllabus = isHi ? (item.syllabusHi || item.syllabus) : item.syllabus;
      const testSubjCode = helperGetItemSubj(item);
      const subjText = isHi ? 
        (item.subject === 'ALL' || testSubjCode === 'ALL' ? 'सर्व-विषय (All Subjects)' : testSubjCode === 'MATH' ? 'गणित' : 'सामान्य अध्ययन') : 
        (item.subject === 'ALL' ? 'All Subjects' : (item.subject || 'Math'));

      return `
        <article class="test-card">
          <div>
            <div class="quiz-badge-strip">
              <span class="quiz-pill-tag" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">${isHi ? '🎯 संपूर्ण अध्याय मॉक टेस्ट' : escapeHtml(item.badge || '🎯 FULL MOCK TEST')}</span>
              <span class="quiz-exam-tag">${escapeHtml(item.classLevel || `Class ${helperGetItemClass(item)}`)} • ${escapeHtml(subjText)}</span>
            </div>
            <h3 class="test-card-title">${escapeHtml(testTitle)}</h3>
            <div class="test-syllabus-pill">
              📖 <strong>${isHi ? 'पाठ्यक्रम:' : 'Syllabus:'}</strong> ${escapeHtml(testSyllabus || (isHi ? 'कक्षा ' + helperGetItemClass(item) + ' सम्पूर्ण एनसीईआरटी पाठ्यक्रम' : 'Complete NCERT Curriculum'))}
            </div>
            <div class="test-meta-grid">
              <div class="test-meta-item">
                <strong>${qCount} MCQs</strong>
                <span>${isHi ? 'कुल प्रश्न' : 'Total Questions'}</span>
              </div>
              <div class="test-meta-item">
                <strong>${item.timeLimit || item.durationMinutes || 30} Mins</strong>
                <span>${isHi ? 'परीक्षा समय' : 'Timed Exam'}</span>
              </div>
              <div class="test-meta-item">
                <strong>${item.totalMarks || 20} Marks</strong>
                <span>${isHi ? 'पूर्णांक' : 'Maximum Marks'}</span>
              </div>
            </div>
          </div>
          <div class="study-card-actions">
            <button type="button" class="btn-test-start" onclick="startInteractiveQuiz('${item.id}', true)">
              ${isHi ? '🎯 ऑनलाइन मॉक टेस्ट दें (टाइमर मोड)' : '🎯 Attempt Online Mock Test (Timer Mode)'}
            </button>
            <span style="font-size:0.75rem; color:#0369a1; font-weight:700;">🏆 ${isHi ? 'निगेटिव मार्किंग सहित वास्तविक परीक्षा सिमुलेटर' : 'Real Exam Simulator with Negative Marking'}</span>
          </div>
        </article>
      `;
    } else {
      // 3. NCERT Chapter Notes Card (Interactive In-App Scrollable Reader)
      const practiceCount = Array.isArray(item.practiceQuestions) ? item.practiceQuestions.length : 0;
      
      const cardTitle = isHi ? (item.titleHi || item.title) :
                        isBi && item.titleHi ? `${escapeHtml(item.titleHi)} <div style="font-size:0.8em; color:#64748b; font-weight:600; margin-top:2px;">${escapeHtml(item.title)}</div>` :
                        escapeHtml(item.title);

      const cardDesc = isHi ? (item.descHi || item.desc) :
                       isBi && item.descHi ? `${escapeHtml(item.descHi)} <div style="font-size:0.85em; color:#64748b; margin-top:4px;"><em>En:</em> ${escapeHtml(item.desc)}</div>` :
                       escapeHtml(item.desc);

      const cardEdge = isHi ? (item.competitionEdgeHi || item.competitionEdge) :
                       isBi && item.competitionEdgeHi ? `${escapeHtml(item.competitionEdgeHi)} <div style="font-size:0.85em; opacity:0.9; margin-top:4px;"><em>En:</em> ${escapeHtml(item.competitionEdge)}</div>` :
                       escapeHtml(item.competitionEdge);

      const subjCode = helperGetItemSubj(item);
      const subjText = isHi ? (subjCode === 'MATH' ? 'गणित' : subjCode === 'EVS' ? 'विज्ञान/पर्यावरण' : subjCode === 'SST' ? 'सामाजिक विज्ञान' : 'हिंदी') : (item.subject || 'Math');
      const bookText = isHi ? (item.bookName === 'Maths Mela' ? 'मैथ्स मेला' : item.bookName === 'Ganita Prakash' ? 'गणित प्रकाश' : item.bookName || 'एनसीईआरटी') : (item.bookName || 'NCERT');

      return `
        <article class="note-card">
          <div>
            <div class="quiz-badge-strip">
              <span class="quiz-pill-tag" style="background:#fef3c7; color:#92400e; border-color:#fde68a; font-weight:800;">
                ✍️ ${isHi ? 'हस्तलिखित टॉपर नोट्स' : 'TOPPER HANDWRITTEN NOTE'}
              </span>
              <span class="quiz-exam-tag">${item.chapterNo ? (isHi ? `अध्याय ${item.chapterNo}: ` : `Ch ${item.chapterNo}: `) : ''}${escapeHtml(subjText)} &bull; ${escapeHtml(item.classLevel || 'Class 5')}</span>
            </div>
            <h3 class="note-card-title">
              <a href="javascript:void(0)" onclick="openNotesReader('${item.id}')" style="color:inherit; text-decoration:none;" title="${isHi ? 'हस्तलिखित नोट्स व अभ्यास प्रश्न हल करने के लिए क्लिक करें' : 'Click to open handwritten notebook & solve practice questions'}">
                ${cardTitle}
              </a>
            </h3>
            <p class="note-card-desc">${cardDesc}</p>

            ${cardEdge ? `
              <div class="comp-edge-box" style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; padding:8px 12px; border-radius:6px; font-size:0.82rem; color:#78350f; margin:10px 0; line-height:1.45;">
                <strong>🎯 ${isHi ? 'प्रतियोगिता दृष्टि (Competition Bridge):' : 'Competition Bridge:'}</strong> ${cardEdge}
              </div>
            ` : ''}

            <div class="note-meta-row">
              <span class="note-meta-pill">⏱️ ${escapeHtml(item.readingTime || '10 min read')}</span>
              <span class="note-meta-pill" style="background:#ede9fe; color:#5b21b6; border-color:#c4b5fd;">🎯 ${practiceCount > 0 ? (isHi ? `${practiceCount} बहुविकल्पीय प्रश्न` : `${practiceCount} Practice MCQs`) : (isHi ? 'संक्षिप्त नोट्स' : 'Summary Notes')}</span>
              <span class="note-meta-pill" style="background:#dbeafe; color:#1e40af; border-color:#bfdbfe;">✍️ ${isHi ? 'रूलर नोटबुक' : 'Ruled Notebook'}</span>
            </div>

            ${item.pdfUrl ? `
              <div class="note-pdf-strip">
                <div class="note-pdf-info">
                  <span>📄 NCERT PDF</span>
                  <span style="font-size:0.75rem; color:#64748b; font-weight:normal;">(${escapeHtml(item.pdfSize || 'Official')})</span>
                </div>
                <div class="note-pdf-btns">
                  <a href="${isHi && item.pdfUrlHi ? item.pdfUrlHi : item.pdfUrl}" target="_blank" rel="noopener" class="btn-pdf-view" title="${isHi ? 'एनसीईआरटी पाठ्यपुस्तक PDF देखें' : 'View Official NCERT PDF in new tab'}">
                    👁️ ${isHi ? 'देखें' : 'View PDF'}
                  </a>
                  <a href="${isHi && item.pdfUrlHi ? item.pdfUrlHi : item.pdfUrl}" download="${escapeHtml(item.pdfName || 'NCERT_Chapter.pdf')}" class="btn-pdf-download" title="${isHi ? 'PDF डाउनलोड करें' : 'Download Chapter PDF'}">
                    ⬇️ ${isHi ? 'डाउनलोड' : 'Download'}
                  </a>
                </div>
              </div>
            ` : ''}
          </div>
          <div class="study-card-actions">
            <button type="button" class="btn btn-primary btn-sm" onclick="openNotesReader('${item.id}')" style="background:#2563eb; border-color:#1d4ed8; font-weight:800;">
              ${isHi ? '✍️ हस्तलिखित नोट्स पढ़ें' : '✍️ Read Handwritten Notes'}
            </button>
            ${practiceCount > 0 ? `
              <button type="button" class="btn btn-outline btn-sm" onclick="openNotesReader('${item.id}', true)">
                ${isHi ? `🎯 अभ्यास हल करें (${practiceCount} प्रश्न)` : `🎯 Solve ${practiceCount} MCQs`}
              </button>
            ` : ''}
          </div>
        </article>
      `;
    }
  }).join('');
}

// ------------------------------------------------------------
// 5B. Interactive Quiz & Mock Test Runner Simulator Engine
// ------------------------------------------------------------

function startInteractiveQuiz(id, isTest = false) {
  const quizzes = state.quizzes || [];
  const tests = state.testSeries || [];
  const targetItem = quizzes.find(q => q.id === id) || tests.find(t => t.id === id);

  if (!targetItem || !Array.isArray(targetItem.questions) || targetItem.questions.length === 0) {
    showToast('⚠️ Notice: Questions are being updated for this test.');
    return;
  }

  recordNcertActivity('quiz', id);

  // Clear any existing active timer
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }

  activeQuizItem = targetItem;
  quizUserAnswers = {};
  quizReviewFlags = {};
  currentQuizQIndex = 0;
  isQuizSubmitted = false;
  quizTimeRemainingSec = (targetItem.durationMinutes || targetItem.timeLimit || 15) * 60;
  quizTimeSpentSec = 0;

  // Setup Modal Headers
  const badgeEl = document.getElementById('quizExamBadge');
  const titleEl = document.getElementById('quizModalTitle');
  const timerPill = document.getElementById('quizTimerPill');
  const timerText = document.getElementById('quizTimerText');

  const isHi = currentStudyLang === 'hi';
  if (badgeEl) badgeEl.textContent = isTest ? (isHi ? '🎯 संपूर्ण मॉक टेस्ट' : '🎯 FULL MOCK TEST') : (isHi ? '⚡ स्पीड क्विज़' : '⚡ SPEED QUIZ');
  if (titleEl) titleEl.textContent = isHi ? (targetItem.titleHi || targetItem.title) : targetItem.title;
  const qSelect = document.getElementById('quizLangSelect');
  if (qSelect) qSelect.value = currentStudyLang;
  if (timerPill) timerPill.classList.remove('warning');
  if (timerText) {
    const m = Math.floor(quizTimeRemainingSec / 60);
    const s = quizTimeRemainingSec % 60;
    timerText.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  // Start live countdown timer
  quizTimerInterval = setInterval(() => {
    quizTimeRemainingSec--;
    quizTimeSpentSec++;

    if (timerText) {
      const m = Math.floor(Math.max(0, quizTimeRemainingSec) / 60);
      const s = Math.max(0, quizTimeRemainingSec) % 60;
      timerText.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    if (quizTimeRemainingSec <= 60 && timerPill) {
      timerPill.classList.add('warning');
    }

    if (quizTimeRemainingSec <= 0) {
      clearInterval(quizTimerInterval);
      quizTimerInterval = null;
      showToast('⏱️ Time Up! Submitting your answers automatically...');
      submitQuiz();
    }
  }, 1000);

  // Render first question
  renderQuizQuestionView();
  openModal('interactiveQuizModal');
}

function renderQuizQuestionView() {
  const body = document.getElementById('quizModalBody');
  if (!body || !activeQuizItem) return;

  const totalQs = activeQuizItem.questions.length;
  const currentQ = activeQuizItem.questions[currentQuizQIndex];
  const progressPercent = Math.round(((currentQuizQIndex + 1) / totalQs) * 100);
  const selectedOpt = quizUserAnswers[currentQuizQIndex];
  const isReviewed = !!quizReviewFlags[currentQuizQIndex];

  const marksPos = activeQuizItem.marksPerQuestion || 1;
  const marksNeg = activeQuizItem.negativeMarking || 0;

  const isHi = currentStudyLang === 'hi';
  const isBi = currentStudyLang === 'bilingual';

  const qTextHtml = isHi ? escapeHtml(currentQ.qHi || currentQ.q) :
                    isBi && currentQ.qHi ? `${escapeHtml(currentQ.qHi)} <div style="margin-top:6px; font-size:0.86em; color:#94a3b8; font-weight:normal;"><em>En:</em> ${escapeHtml(currentQ.q)}</div>` :
                    escapeHtml(currentQ.q);
  const optionsList = (isHi && Array.isArray(currentQ.optionsHi)) ? currentQ.optionsHi : currentQ.options;

  body.innerHTML = `
    <!-- Top Progress Bar -->
    <div class="quiz-progress-wrap">
      <div class="quiz-progress-meta">
        <span>${isHi ? `प्रश्न ${currentQuizQIndex + 1} / कुल ${totalQs}` : `Question ${currentQuizQIndex + 1} of ${totalQs}`}</span>
        <span>${isHi ? 'अंकन' : 'Marking'}: <strong style="color:#059669;">+${marksPos}</strong> / <strong style="color:#dc2626;">-${marksNeg}</strong></span>
      </div>
      <div class="quiz-progress-bar-bg">
        <div class="quiz-progress-bar-fill" style="width:${progressPercent}%;"></div>
      </div>
    </div>

    <!-- Question Box -->
    <div class="quiz-qbox">
      <div class="quiz-qnumber">${isHi ? `प्रश्न संख्या ${currentQuizQIndex + 1}` : `Question ${currentQuizQIndex + 1}`}</div>
      <div class="quiz-qtext">${qTextHtml}</div>
    </div>

    <!-- Options List -->
    <div class="quiz-options-list">
      ${optionsList.map((opt, optIdx) => {
        const isSelected = selectedOpt === optIdx;
        const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
        return `
          <div class="quiz-option-card ${isSelected ? 'selected' : ''}" onclick="selectQuizOption(${currentQuizQIndex}, ${optIdx})">
            <div class="quiz-option-indicator">${letter}</div>
            <div class="quiz-option-text">${escapeHtml(opt)}</div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Action Controls Toolbar -->
    <div class="quiz-controls-bar">
      <div class="quiz-controls-left">
        <button type="button" class="btn btn-outline btn-sm" onclick="prevQuizQuestion()" ${currentQuizQIndex === 0 ? 'disabled' : ''}>
          ${isHi ? '⬅️ पिछला प्रश्न' : '⬅️ Previous'}
        </button>
        <button type="button" class="btn btn-outline btn-sm" onclick="toggleQuizReview(${currentQuizQIndex})" style="${isReviewed ? 'background:#fef3c7; border-color:#f59e0b; color:#b45309;' : ''}">
          ${isReviewed ? (isHi ? '★ समीक्षा हेतु चिन्हित' : '★ Marked for Review') : (isHi ? '☆ समीक्षा हेतु रखें' : '☆ Mark for Review')}
        </button>
        ${selectedOpt !== undefined ? `<button type="button" class="btn btn-outline btn-sm" onclick="clearQuizChoice(${currentQuizQIndex})">${isHi ? 'उत्तर हटाएं' : 'Clear'}</button>` : ''}
      </div>
      <div class="quiz-controls-right">
        ${currentQuizQIndex < totalQs - 1 ? `
          <button type="button" class="btn btn-primary btn-sm" onclick="nextQuizQuestion()">
            ${isHi ? 'अगला प्रश्न ➡️' : 'Next ➡️'}
          </button>
        ` : ''}
        <button type="button" class="btn btn-primary btn-sm" onclick="confirmSubmitQuiz()" style="background:#059669; border-color:#047857;">
          ${isHi ? '🚩 टेस्ट जमा करें (Submit)' : '🚩 Submit Test'}
        </button>
      </div>
    </div>

    <!-- Question Palette Jump Grid -->
    <div class="quiz-palette-wrap">
      <div class="quiz-palette-header">
        <span>Question Palette (${totalQs} Questions)</span>
        <span style="font-size:0.74rem;">🟢 Answered &bull; 🟡 Review &bull; ⚪ Not Visited</span>
      </div>
      <div class="quiz-palette-grid">
        ${activeQuizItem.questions.map((_, idx) => {
          const isAnswered = quizUserAnswers[idx] !== undefined;
          const isMarked = !!quizReviewFlags[idx];
          const isCurr = idx === currentQuizQIndex;
          let cls = 'palette-btn';
          if (isCurr) cls += ' current';
          if (isMarked) cls += ' reviewed';
          else if (isAnswered) cls += ' answered';

          return `
            <button type="button" class="${cls}" onclick="jumpToQuizQuestion(${idx})" title="Question ${idx + 1}">
              ${idx + 1}
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function selectQuizOption(qIdx, optIdx) {
  quizUserAnswers[qIdx] = optIdx;
  renderQuizQuestionView();
}

function clearQuizChoice(qIdx) {
  delete quizUserAnswers[qIdx];
  renderQuizQuestionView();
}

function toggleQuizReview(qIdx) {
  quizReviewFlags[qIdx] = !quizReviewFlags[qIdx];
  renderQuizQuestionView();
}

function prevQuizQuestion() {
  if (currentQuizQIndex > 0) {
    currentQuizQIndex--;
    renderQuizQuestionView();
  }
}

function nextQuizQuestion() {
  if (activeQuizItem && currentQuizQIndex < activeQuizItem.questions.length - 1) {
    currentQuizQIndex++;
    renderQuizQuestionView();
  }
}

function jumpToQuizQuestion(qIdx) {
  if (activeQuizItem && qIdx >= 0 && qIdx < activeQuizItem.questions.length) {
    currentQuizQIndex = qIdx;
    renderQuizQuestionView();
  }
}

function confirmSubmitQuiz() {
  if (!activeQuizItem) return;
  const total = activeQuizItem.questions.length;
  const answered = Object.keys(quizUserAnswers).length;
  const unanswered = total - answered;

  const msg = unanswered > 0 ? 
    `You have answered ${answered} of ${total} questions (${unanswered} unanswered).\n\nAre you sure you want to submit your test now?` :
    `All ${total} questions answered! Ready to submit for instant scoring?`;

  if (confirm(msg)) {
    submitQuiz();
  }
}

function exitQuizConfirm() {
  if (isQuizSubmitted || !activeQuizItem) {
    if (quizTimerInterval) clearInterval(quizTimerInterval);
    closeModal('interactiveQuizModal');
    return;
  }

  if (confirm('Are you sure you want to exit? Your progress in this active quiz/test will be lost.')) {
    if (quizTimerInterval) clearInterval(quizTimerInterval);
    quizTimerInterval = null;
    closeModal('interactiveQuizModal');
  }
}

function submitQuiz() {
  if (quizTimerInterval) {
    clearInterval(quizTimerInterval);
    quizTimerInterval = null;
  }
  isQuizSubmitted = true;

  const body = document.getElementById('quizModalBody');
  const timerPill = document.getElementById('quizTimerPill');
  if (timerPill) timerPill.classList.remove('warning');
  if (!body || !activeQuizItem) return;

  const totalQs = activeQuizItem.questions.length;
  const marksPos = activeQuizItem.marksPerQuestion || 1;
  const marksNeg = activeQuizItem.negativeMarking || 0;

  let correctCount = 0;
  let incorrectCount = 0;

  activeQuizItem.questions.forEach((q, idx) => {
    const userAns = quizUserAnswers[idx];
    if (userAns !== undefined) {
      if (userAns === q.ans) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
  });

  const attemptedCount = correctCount + incorrectCount;
  const unattemptedCount = totalQs - attemptedCount;
  const rawScore = (correctCount * marksPos) - (incorrectCount * marksNeg);
  const finalScore = Math.max(0, rawScore).toFixed(1);
  const maxScore = (totalQs * marksPos).toFixed(0);
  const accuracyPct = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

  const timeMin = Math.floor(quizTimeSpentSec / 60);
  const timeSec = quizTimeSpentSec % 60;
  const timeFormatted = `${timeMin}m ${timeSec}s`;

  body.innerHTML = `
    <div class="quiz-scorecard-wrap">
      <!-- Celebratory Score Banner -->
      <div class="scorecard-banner">
        <div class="scorecard-icon">${accuracyPct >= 70 ? '🏆' : accuracyPct >= 40 ? '👍' : '📚'}</div>
        <h3>Test Submitted Successfully!</h3>
        <p>Your Score: <span style="font-size:1.6rem; font-weight:900; color:#fef08a;">${finalScore} / ${maxScore} Marks</span> (${accuracyPct}% Accuracy)</p>
      </div>

      <!-- 4-Stat Metric Grid -->
      <div class="scorecard-grid">
        <div class="score-stat-card">
          <div class="score-stat-val total">${totalQs}</div>
          <div class="score-stat-lbl">Total Questions</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-val correct">✓ ${correctCount}</div>
          <div class="score-stat-lbl">Correct Answers</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-val incorrect">✗ ${incorrectCount}</div>
          <div class="score-stat-lbl">Wrong Answers</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-val accuracy">${timeFormatted}</div>
          <div class="score-stat-lbl">Time Taken</div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="scorecard-actions-bar">
        <button type="button" class="btn btn-primary" onclick="startInteractiveQuiz('${activeQuizItem.id}', ${activeQuizItem.resourceType === 'TEST_SERIES'})">
          🔄 Retake This Test
        </button>
        <button type="button" class="btn btn-outline" onclick="closeModal('interactiveQuizModal')">
          📋 Explore More Quizzes &amp; Tests
        </button>
        <button type="button" class="btn btn-outline" onclick="window.print()">
          🖨️ Print Scorecard
        </button>
      </div>

      <!-- Detailed Explanations & Solutions Review -->
      <div class="solutions-review-box">
        <h4>📋 ${currentStudyLang === 'hi' ? `संपूर्ण प्रश्न पत्र एवं विस्तृत हल (${totalQs} प्रश्न)` : `Complete Question Paper & Detailed Solutions (${totalQs} Questions)`}</h4>
        
        ${activeQuizItem.questions.map((q, idx) => {
          const userAns = quizUserAnswers[idx];
          const isCorrect = userAns === q.ans;
          const isSkipped = userAns === undefined;
          const isHi = currentStudyLang === 'hi';
          const isBi = currentStudyLang === 'bilingual';

          let statusTag = '';
          if (isSkipped) {
            statusTag = isHi ? '<span class="sol-status-pill unattempted">⚪ अनुत्तरित (0 अंक)</span>' : '<span class="sol-status-pill unattempted">⚪ Unattempted (0 Marks)</span>';
          } else if (isCorrect) {
            statusTag = isHi ? `<span class="sol-status-pill correct">✓ सही (+${marksPos} अंक)</span>` : `<span class="sol-status-pill correct">✓ Correct (+${marksPos} Marks)</span>`;
          } else {
            statusTag = isHi ? `<span class="sol-status-pill incorrect">✗ गलत (-${marksNeg} अंक)</span>` : `<span class="sol-status-pill incorrect">✗ Wrong (-${marksNeg} Marks)</span>`;
          }

          const rawOpts = (isHi && Array.isArray(q.optionsHi)) ? q.optionsHi : q.options;
          const correctOptText = rawOpts[q.ans];
          const userOptText = userAns !== undefined ? rawOpts[userAns] : (isHi ? 'प्रयास नहीं किया' : 'Not Attempted');

          const qTextHtml = isHi ? escapeHtml(q.qHi || q.q) :
                            isBi && q.qHi ? `${escapeHtml(q.qHi)} <div style="margin-top:4px; font-size:0.86em; color:#64748b;"><em>En:</em> ${escapeHtml(q.q)}</div>` :
                            escapeHtml(q.q);
          const explTextHtml = isHi ? escapeHtml(q.explanationHi || q.explanation) :
                               isBi && q.explanationHi ? `${escapeHtml(q.explanationHi)} <div style="margin-top:4px; font-size:0.86em; color:#475569;"><em>En:</em> ${escapeHtml(q.explanation)}</div>` :
                               escapeHtml(q.explanation || 'Standard textbook solution verified.');

          return `
            <div class="solution-item-card">
              <div class="sol-q-header">
                <span><strong>${isHi ? `प्रश्न ${idx + 1}` : `Question ${idx + 1}`}</strong></span>
                ${statusTag}
              </div>
              <div class="sol-qtext">${qTextHtml}</div>

              <div class="sol-ans-row">
                ${!isSkipped ? `<div><strong>${isHi ? 'आपका उत्तर:' : 'Your Answer:'}</strong> <span style="color:${isCorrect ? '#166534' : '#dc2626'}; font-weight:700;">${escapeHtml(userOptText)}</span></div>` : ''}
                <div><strong>${isHi ? 'आधिकारिक सही उत्तर:' : 'Official Correct Answer:'}</strong> <span style="color:#166534; font-weight:800;">${escapeHtml(correctOptText)}</span></div>
              </div>

              <div class="sol-explanation-box">
                💡 <strong>${isHi ? 'हल एवं विस्तृत व्याख्या:' : 'Solution & Explanation:'}</strong><br/>
                ${explTextHtml}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ------------------------------------------------------------
// 5C. Interactive NotebookLM-Style Scroll Reader & Inline MCQs
// ------------------------------------------------------------
let currentReaderNote = null;
let currentReaderFontSize = 16;
let inlinePracticeAnswers = {}; // { [noteId]: { [qIdx]: selectedOptIdx } }

function adjustReaderFontSize(delta) {
  currentReaderFontSize = Math.min(22, Math.max(13, currentReaderFontSize + delta));
  const body = document.getElementById('notesReaderBody');
  if (body) {
    body.style.fontSize = `${currentReaderFontSize}px`;
  }
}

function scrollToReaderSection(sectionId) {
  const target = document.getElementById(sectionId);
  const container = document.getElementById('notesReaderBody');
  const tabNotes = document.getElementById('tabReaderNotes');
  const tabPractice = document.getElementById('tabReaderPractice');
  const tabPdf = document.getElementById('tabReaderPdf');

  if (tabNotes) tabNotes.classList.toggle('active', sectionId === 'readerNotesContent');
  if (tabPractice) tabPractice.classList.toggle('active', sectionId === 'readerPracticeZone');
  if (tabPdf) tabPdf.classList.toggle('active', sectionId === 'readerPdfZone');

  if (target && container) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

let currentReaderDisplayMode = 'handwritten';

function setReaderDisplayMode(mode) {
  currentReaderDisplayMode = mode;
  const btnHw = document.getElementById('btnModeHandwritten');
  const btnPr = document.getElementById('btnModePrinted');
  if (btnHw) btnHw.classList.toggle('active', mode === 'handwritten');
  if (btnPr) btnPr.classList.toggle('active', mode === 'printed');

  if (currentReaderNote) {
    renderNotesReaderBody(currentReaderNote, currentReaderNote.practiceQuestions || []);
  }
}

function openNotesReader(noteId, jumpToPractice = false) {
  const note = (state.notes || []).find(n => n.id === noteId);
  if (!note) {
    showToast('⚠️ Notes not found for this topic.');
    return;
  }

  recordNcertActivity('note', noteId);

  currentReaderNote = note;
  if (!inlinePracticeAnswers[noteId]) {
    inlinePracticeAnswers[noteId] = {};
  }

  const isHi = currentStudyLang === 'hi';
  const isBi = currentStudyLang === 'bilingual';

  // Sync mode switcher buttons
  const btnHw = document.getElementById('btnModeHandwritten');
  const btnPr = document.getElementById('btnModePrinted');
  if (btnHw) btnHw.classList.toggle('active', currentReaderDisplayMode === 'handwritten');
  if (btnPr) btnPr.classList.toggle('active', currentReaderDisplayMode === 'printed');

  // Update Modal Header Meta
  const examBadge = document.getElementById('readerExamBadge');
  const subjBadge = document.getElementById('readerSubjectBadge');
  const timePill = document.getElementById('readerTimePill');
  const titleEl = document.getElementById('readerModalTitle');
  const countBadge = document.getElementById('readerPracticeCountBadge');

  const bookName = isHi ? (note.bookName === 'Maths Mela' ? 'मैथ्स मेला' : note.bookName === 'Ganita Prakash' ? 'गणित प्रकाश' : note.bookName || 'एनसीईआरटी') : (note.bookName || 'NCERT');
  const noteSubjCode = helperGetItemSubj(note);
  const subjName = isHi ? (noteSubjCode === 'MATH' ? 'गणित' : noteSubjCode === 'EVS' ? 'विज्ञान/पर्यावरण' : noteSubjCode === 'SST' ? 'सामाजिक विज्ञान' : 'हिंदी') : (note.subject || 'NCERT');

  if (examBadge) examBadge.textContent = `${note.classLevel || 'Class 5'} • ${bookName}`;
  if (subjBadge) subjBadge.textContent = note.chapterNo ? (isHi ? `अध्याय ${note.chapterNo} • ${subjName}` : `Chapter ${note.chapterNo} • ${subjName}`) : subjName;
  if (timePill) timePill.textContent = note.readingTime || '10 min read';
  if (titleEl) {
    titleEl.textContent = isHi ? (note.titleHi || note.title) :
                          isBi && note.titleHi ? `${note.titleHi} (${note.title})` :
                          note.title;
  }

  // Sync reader modal language toggle buttons
  const rHi = document.getElementById('readerLangHi');
  const rEn = document.getElementById('readerLangEn');
  const rBi = document.getElementById('readerLangBi');
  if (rHi) rHi.classList.toggle('active', currentStudyLang === 'hi');
  if (rEn) rEn.classList.toggle('active', currentStudyLang === 'en');
  if (rBi) rBi.classList.toggle('active', currentStudyLang === 'bilingual');

  const questions = note.practiceQuestions || [];
  if (countBadge) countBadge.textContent = questions.length;

  renderNotesReaderBody(note, questions);
  openModal('notesReaderModal');

  // Sync Tabs
  const tabNotes = document.getElementById('tabReaderNotes');
  const tabPractice = document.getElementById('tabReaderPractice');
  const tabPdf = document.getElementById('tabReaderPdf');
  if (tabNotes) {
    tabNotes.classList.add('active');
    tabNotes.innerHTML = isHi ? '📖 अध्याय नोट्स व सूत्र' : '📖 Chapter Notes &amp; Formulas';
  }
  if (tabPractice) {
    tabPractice.classList.remove('active');
    tabPractice.innerHTML = isHi ? `🎯 अभ्यास प्रश्न (<span id="readerPracticeCountBadge">${questions.length}</span>)` : `🎯 Solve MCQs (<span id="readerPracticeCountBadge">${questions.length}</span>)`;
  }
  if (tabPdf) {
    tabPdf.classList.remove('active');
    tabPdf.innerHTML = isHi ? '📄 एनसीईआरटी PDF' : '📄 Official NCERT PDF';
  }

  if (jumpToPractice) {
    setTimeout(() => {
      scrollToReaderSection('readerPracticeZone');
    }, 250);
  } else {
    const container = document.getElementById('notesReaderBody');
    if (container) container.scrollTop = 0;
  }
}

// The note data contains simple TeX-style formulas. Convert the common syntax
// to readable text so learners never see source commands such as "\\text".
function cleanStudyMath(latex) {
  let value = String(latex || '');
  for (let i = 0; i < 4; i++) {
    value = value.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1)/($2)');
    value = value.replace(/\\(text|mathbf|mathrm|mathbb)\{([^{}]*)\}/g, '$2');
  }
  return value
    .replace(/\\sqrt\{([^{}]*)\}/g, '√$1')
    .replace(/\\(times|cdot)/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\geq?|\\ge/g, '≥')
    .replace(/\\leq?|\\le/g, '≤')
    .replace(/\\theta/g, 'θ')
    .replace(/\\pi/g, 'π')
    .replace(/\\quad/g, ' ')
    .replace(/\\left|\\right/g, '')
    .replace(/\\,/g, ' ')
    .replace(/\\!/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatStudyMath(html) {
  return String(html || '')
    .replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => `<span class="study-math study-math-display">${cleanStudyMath(latex)}</span>`)
    .replace(/\$([^$\n]+)\$/g, (_, latex) => `<span class="study-math">${cleanStudyMath(latex)}</span>`);
}

function renderNotesReaderBody(note, questions) {
  const container = document.getElementById('notesReaderBody');
  if (!container) return;

  const answeredMap = inlinePracticeAnswers[note.id] || {};
  const totalQs = questions.length;
  let correctCount = 0;
  let attemptedCount = 0;

  questions.forEach((q, idx) => {
    if (answeredMap[idx] !== undefined) {
      attemptedCount++;
      if (answeredMap[idx] === q.ans) correctCount++;
    }
  });

  const isHi = currentStudyLang === 'hi';
  const isBi = currentStudyLang === 'bilingual';

  // 1. Chapter Content Sections
  const sectionsHtml = (note.sections || []).map((sec, idx) => {
    const heading = isHi ? (sec.headingHi || sec.heading) :
                    isBi && sec.headingHi ? `${sec.headingHi} / ${sec.heading}` :
                    sec.heading;
    let content = '';
    if (isHi) {
      content = sec.contentHtmlHi || sec.contentHtml || '';
    } else if (isBi) {
      content = (sec.contentHtmlHi || '') +
                (sec.contentHtml ? `<div style="margin-top:14px; padding-top:12px; border-top:1px dashed #cbd5e1; font-size:0.92em; color:#475569;"><strong style="color:#0284c7; font-size:0.8rem; text-transform:uppercase;">🇬🇧 English Reference:</strong><br/>${sec.contentHtml}</div>` : '');
    } else {
      content = sec.contentHtml || '';
    }
    content = formatStudyMath(content);

    if (currentReaderDisplayMode === 'handwritten') {
      return `
        <div class="handwritten-notebook-wrap" id="hwSecBlock_${idx}">
          <div class="notebook-spiral-strip" aria-hidden="true">
            <div class="spiral-ring"></div>
            <div class="spiral-ring"></div>
            <div class="spiral-ring"></div>
            <div class="spiral-ring"></div>
            <div class="spiral-ring"></div>
            <div class="spiral-ring"></div>
            <div class="spiral-ring"></div>
            <div class="spiral-ring"></div>
          </div>
          <div class="notebook-ruled-page">
            <div class="topper-notebook-header">
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="font-size:1.35rem;">✍️</span>
                <h3 class="notebook-topic-title">${escapeHtml(heading)}</h3>
              </div>
              <div style="display:flex; align-items:center; gap:10px;">
                <span class="topper-stamp">🏆 TOPPER'S HANDWRITTEN NOTE</span>
                <span style="font-family:'Caveat', cursive; font-size:1.15rem; color:#dc2626; font-weight:700;">Pg. 0${idx + 1}</span>
              </div>
            </div>
            <div class="hw-page-body">
              ${content}
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="reader-section-block">
          <h3>${escapeHtml(heading)}</h3>
          <div class="reader-section-html">
            ${content}
          </div>
        </div>
      `;
    }
  }).join('');

  // 2. Practice Questions HTML
  const questionsHtml = questions.map((q, idx) => {
    const selectedAns = answeredMap[idx];
    const isAnswered = selectedAns !== undefined;
    const isCorrect = isAnswered && selectedAns === q.ans;
    const letters = ['A', 'B', 'C', 'D', 'E'];

    const rawOptions = (isHi && Array.isArray(q.optionsHi)) ? q.optionsHi : q.options;
    const qTextHtml = isHi ? escapeHtml(q.qHi || q.q) :
                      isBi && q.qHi ? `${escapeHtml(q.qHi)} <div style="margin-top:4px; font-size:0.86em; color:#64748b;"><em>En:</em> ${escapeHtml(q.q)}</div>` :
                      escapeHtml(q.q);
    const explanationHtml = isHi ? escapeHtml(q.explanationHi || q.explanation) :
                            isBi && q.explanationHi ? `${escapeHtml(q.explanationHi)} <div style="margin-top:4px; font-size:0.86em; color:#475569;"><em>En:</em> ${escapeHtml(q.explanation)}</div>` :
                            escapeHtml(q.explanation || 'Refer to the textbook summary above.');

    const optionsHtml = rawOptions.map((opt, optIdx) => {
      let optClass = 'inline-opt-btn';
      if (isAnswered) {
        if (optIdx === q.ans) {
          optClass += ' correct';
        } else if (optIdx === selectedAns) {
          optClass += ' wrong';
        }
      }

      return `
        <button type="button" 
                class="${optClass}" 
                onclick="solveInlineQuestion('${note.id}', ${idx}, ${optIdx})"
                ${isAnswered ? 'disabled style="cursor:default;"' : ''}>
          <span class="inline-opt-letter">${letters[optIdx] || optIdx + 1}</span>
          <span>${escapeHtml(opt)}</span>
        </button>
      `;
    }).join('');

    return `
      <div class="inline-mcq-card" id="inlineQ_${note.id}_${idx}">
        <div class="inline-mcq-meta">
          <span class="inline-q-badge">${isHi ? `प्रश्न ${idx + 1} / कुल ${totalQs}` : `Question ${idx + 1} of ${totalQs}`}</span>
          ${q.pyqRef ? `<span class="inline-pyq-ref">📌 ${escapeHtml(q.pyqRef)}</span>` : ''}
        </div>
        <div class="inline-mcq-qtext">${qTextHtml}</div>
        <div class="inline-options-grid">
          ${optionsHtml}
        </div>
        <div class="inline-solution-box ${isAnswered ? 'visible' : ''}">
          <div style="font-weight:800; color:${isCorrect ? '#166534' : '#b91c1c'}; margin-bottom:4px;">
            ${isCorrect ? (isHi ? '✅ सही उत्तर! (+1 अंक)' : '✅ Sahi Uttar! (+1 Mark)') : (isHi ? '❌ गलत उत्तर! सही विकल्प: (' + (letters[q.ans] || (q.ans + 1)) + ') ' + escapeHtml(rawOptions[q.ans] || '') : '❌ Galat Uttar! Sahi Vikalp: (' + (letters[q.ans] || (q.ans + 1)) + ') ' + escapeHtml(q.options[q.ans] || ''))}
          </div>
          <div><strong>${isHi ? 'विस्तृत व्याख्या (Explanation):' : 'Vyakhya (Explanation):'}</strong> ${explanationHtml}</div>
        </div>
      </div>
    `;
  }).join('');

  const compEdge = isHi ? (note.competitionEdgeHi || note.competitionEdge) :
                   isBi && note.competitionEdgeHi ? `${note.competitionEdgeHi} <div style="margin-top:4px; font-weight:normal; opacity:0.9;"><em>En:</em> ${note.competitionEdge}</div>` :
                   note.competitionEdge;

  const bookText = isHi ? (note.bookName === 'Maths Mela' ? 'मैथ्स मेला' : note.bookName || 'एनसीईआरटी') : (note.bookName || 'Maths Mela');
  const subjText = isHi ? (helperGetItemSubj(note) === 'MATH' ? 'गणित' : helperGetItemSubj(note) === 'EVS' ? 'पर्यावरण' : 'हिंदी') : (note.subject || 'Math');

  const activePdf = (isHi && note.pdfUrlHi) ? note.pdfUrlHi : (note.pdfUrl || '');
  const altPdf = (isHi ? note.pdfUrl : note.pdfUrlHi) || '';
  const hasBothLang = note.pdfUrl && note.pdfUrlHi && note.pdfUrl !== note.pdfUrlHi;

  container.innerHTML = `
    <!-- Top Chapter Highlights Pill -->
    <div style="background:#f1f5f9; border:1px solid #cbd5e1; border-radius:6px; padding:10px 14px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <div style="font-size:0.84rem; color:#475569;">
        <strong>${isHi ? 'एनसीईआरटी पाठ्यपुस्तक:' : 'NCERT Textbook:'}</strong> <span style="color:#0f172a; font-weight:800;">${escapeHtml(note.classLevel || 'Class 5')} &bull; ${escapeHtml(bookText)}</span> &bull; 
        <strong>${isHi ? 'अध्याय:' : 'Chapter:'}</strong> <span style="color:#0f172a; font-weight:700;">${note.chapterNo ? (isHi ? `अध्याय ${note.chapterNo}: ` : `Ch ${note.chapterNo}: `) : ''}${escapeHtml(subjText)}</span>
      </div>
      <div style="font-size:0.8rem; font-weight:700; color:#059669; background:#dcfce7; padding:3px 8px; border-radius:4px;">
        ${escapeHtml(isHi ? '100% प्रामाणिक एनसीईआरटी नोट्स' : (note.badge || '100% PURE NCERT FOUNDATION'))}
      </div>
    </div>

    ${activePdf ? `
      <!-- NCERT Official Chapter PDF Quick Action Card -->
      <div class="reader-pdf-banner">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="width:44px; height:44px; border-radius:8px; background:#ffffff; border:1.5px solid #bfdbfe; display:flex; align-items:center; justify-content:center; font-size:1.5rem; flex-shrink:0;">
              📑
            </div>
            <div>
              <div style="font-weight:900; font-size:0.95rem; color:#0f172a;">
                ${isHi ? 'आधिकारिक NCERT पाठ्यपुस्तक PDF (अध्यायवार)' : 'Official NCERT Textbook PDF (Chapter-wise)'}
              </div>
              <div style="font-size:0.8rem; color:#64748b; margin-top:2px;">
                <span>${escapeHtml(note.pdfName || 'NCERT Chapter')}</span> &bull; 
                <span style="font-weight:700; color:#1e40af;">${escapeHtml(note.pdfSize || '2 MB')}</span> &bull; 
                <span>${isHi ? 'राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद' : 'NCERT New Delhi'}</span>
              </div>
            </div>
          </div>
          <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <a href="${activePdf}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background:#2563eb; border-color:#1d4ed8; font-weight:800; display:inline-flex; align-items:center; gap:6px;">
              👁️ ${isHi ? 'ब्राउज़र में PDF देखें' : 'View PDF in Tab'}
            </a>
            <a href="${activePdf}" download="${escapeHtml(note.pdfName || 'NCERT_Chapter.pdf')}" class="btn btn-outline btn-sm" style="background:#ffffff; border-color:#93c5fd; color:#1e40af; font-weight:800; display:inline-flex; align-items:center; gap:6px;">
              ⬇️ ${isHi ? 'डाउनलोड करें' : 'Download PDF'}
            </a>
            <button type="button" class="btn btn-outline btn-sm" style="background:#f8fafc; border-color:#cbd5e1; color:#334155; font-weight:700; display:inline-flex; align-items:center; gap:5px;" onclick="scrollToReaderSection('readerPdfZone')">
              📖 ${isHi ? 'पेज में पढ़ें' : 'Read In-Page'}
            </button>
            ${hasBothLang ? `
              <a href="${altPdf}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="font-size:0.78rem; padding:5px 8px; color:#475569;" title="${isHi ? 'अंग्रेजी संस्करण PDF देखें' : 'View Hindi Edition PDF'}">
                🌐 ${isHi ? 'English PDF' : 'हिन्दी PDF'}
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    ` : ''}

    ${compEdge ? `
      <div style="background:#fffbeb; border:1px solid #fde68a; border-left:4px solid #d97706; color:#78350f; padding:12px 16px; border-radius:6px; margin-bottom:18px; font-size:0.88rem; line-height:1.5;">
        <strong style="display:inline-block; margin-bottom:4px; font-size:0.92rem; color:#b45309;">🏆 ${isHi ? 'प्रतियोगिता परीक्षा दृष्टि (UPSC CSAT / BPSC TRE / SSC / CTET):' : 'Competitive Exam Edge (UPSC CSAT / BPSC TRE / SSC / CTET):'}</strong><br/>
        ${compEdge}
      </div>
    ` : ''}

    <!-- Chapter Content -->
    <div id="readerNotesContent">
      ${sectionsHtml}
    </div>

    <!-- Dedicated NCERT Chapter PDF In-Page Viewer Zone -->
    ${activePdf ? `
      <div id="readerPdfZone" style="margin-top:36px; padding-top:24px; border-top:3px dashed #cbd5e1;">
        <div style="background:#1e293b; color:#ffffff; padding:14px 18px; border-radius:8px 8px 0 0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div>
            <div style="font-weight:900; font-size:1.02rem; display:flex; align-items:center; gap:8px;">
              📑 ${isHi ? 'मूल एनसीईआरटी पाठ्यपुस्तक (लाइव अध्याय व्यूअर)' : 'Original NCERT Textbook (Live Chapter Viewer)'}
            </div>
            <div style="font-size:0.78rem; color:#94a3b8; margin-top:2px;">
              ${escapeHtml(note.classLevel || 'Class 5')} &bull; ${escapeHtml(bookText)} &bull; ${escapeHtml(note.pdfName || 'NCERT PDF')}
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <a href="${activePdf}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background:#3b82f6; border-color:#2563eb; font-weight:800; font-size:0.8rem;">
              ↗️ ${isHi ? 'पूर्ण स्क्रीन में खोलें' : 'Open Full Screen'}
            </a>
            <a href="${activePdf}" download="${escapeHtml(note.pdfName || 'NCERT_Chapter.pdf')}" class="btn btn-sm" style="background:#334155; color:#ffffff; border:1px solid #475569; font-weight:700; font-size:0.8rem;">
              ⬇️ ${isHi ? 'डाउनलोड' : 'Download'} (${escapeHtml(note.pdfSize || '')})
            </a>
          </div>
        </div>
        <div class="reader-pdf-frame-wrap" style="border-radius:0 0 8px 8px; margin-top:0;">
          <iframe src="${activePdf}#toolbar=1" class="reader-pdf-frame" title="NCERT Official Textbook PDF"></iframe>
        </div>
      </div>
    ` : ''}

    <!-- Interactive Practice Zone -->
    <div class="practice-zone-wrap" id="readerPracticeZone">
      <div class="practice-zone-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
          <div>
            <h3>🎯 ${isHi ? 'अध्याय अभ्यास क्षेत्र (लाइव इंटरएक्टिव)' : 'Chapter Practice Zone (Live Interactive)'}</h3>
            <p>${isHi ? 'विषय पर पूर्ण अधिकार प्राप्त करने के लिए पढ़ते समय ही इन चयनित एनसीईआरटी व पूर्व-वर्षीय प्रश्नों को हल करें।' : 'Solve these hand-picked PYQs & NCERT questions directly while reading to master this topic.'}</p>
          </div>
          <div style="text-align:right;">
            <div style="font-size:1.1rem; font-weight:900; color:#ffffff;">
              ${isHi ? 'स्कोर' : 'Score'}: <span id="inlineScoreDisplay">${correctCount} / ${totalQs}</span>
            </div>
            <div style="font-size:0.75rem; color:#a7f3d0;">
              ${isHi ? `प्रयास: ${attemptedCount} / ${totalQs}` : `Attempted: ${attemptedCount} of ${totalQs}`}
            </div>
          </div>
        </div>
      </div>

      <!-- MCQs list -->
      <div class="practice-questions-list">
        ${questionsHtml}
      </div>

      <!-- Practice Footer -->
      <div class="practice-footer-bar">
        <div>
          <strong>${isHi ? 'अभ्यास प्रगति:' : 'Practice Progress:'}</strong> <span>${attemptedCount} ${isHi ? 'हल किए' : 'answered'}, ${correctCount} ${isHi ? 'सही' : 'correct'}</span>
        </div>
        <div style="display:flex; gap:8px;">
          <button type="button" class="btn btn-outline btn-sm" onclick="resetInlinePractice('${note.id}')">
            🔄 ${isHi ? 'रीसेट व पुन: अभ्यास' : 'Reset & Re-practice'}
          </button>
          <button type="button" class="btn btn-primary btn-sm" style="background:#4338ca; border-color:#3730a3;" onclick="scrollToReaderSection('readerNotesContent')">
            ⬆️ ${isHi ? 'वापस नोट्स पर जाएं' : 'Back to Notes'}
          </button>
        </div>
      </div>
    </div>
  `;

  // Apply current font size
  container.style.fontSize = `${currentReaderFontSize}px`;
}

function solveInlineQuestion(noteId, qIdx, selectedOptIdx) {
  if (!inlinePracticeAnswers[noteId]) {
    inlinePracticeAnswers[noteId] = {};
  }
  // If already answered, do nothing
  if (inlinePracticeAnswers[noteId][qIdx] !== undefined) return;

  inlinePracticeAnswers[noteId][qIdx] = selectedOptIdx;

  const note = (state.notes || []).find(n => n.id === noteId);
  if (!note || !note.practiceQuestions) return;

  const q = note.practiceQuestions[qIdx];
  const isCorrect = selectedOptIdx === q.ans;

  if (isCorrect) {
    showToast('🎉 Shabaash! Sahi uttar (+1 mark)!');
  } else {
    showToast('❌ Galat uttar! Solution & vyakhya dekhein.');
  }

  const container = document.getElementById('notesReaderBody');
  const currentScroll = container ? container.scrollTop : 0;
  renderNotesReaderBody(note, note.practiceQuestions);
  if (container) container.scrollTop = currentScroll;
}

function resetInlinePractice(noteId) {
  if (inlinePracticeAnswers[noteId]) {
    delete inlinePracticeAnswers[noteId];
  }
  const note = (state.notes || []).find(n => n.id === noteId);
  if (note) {
    renderNotesReaderBody(note, note.practiceQuestions || []);
    showToast('🔄 Practice questions reset. Shuru se abhyaas karein!');
  }
}

// ------------------------------------------------------------
// 6. Interactive Floating Form Guidance Chat Assistant
// ------------------------------------------------------------
function toggleGuidanceChat() {
  const box = document.getElementById('chatWindowBox');
  if (box) box.classList.toggle('open');
}

function openGuidanceChat() {
  const box = document.getElementById('chatWindowBox');
  if (box) box.classList.add('open');
}

// Knowledge base for common queries
const GUIDANCE_KNOWLEDGE = {
  photo_resize: {
    question: "What are the exact photo and signature size rules?",
    answer: `
      <p>📸 <strong>Official Photo &amp; Signature Dimensions for 2026 Forms (SSC, BPSC, Railway, UPSC):</strong></p>
      <ul style="padding-left:16px; margin:6px 0;">
        <li><strong>Passport Photograph:</strong> File size must be between <strong>20 KB to 50 KB</strong>. Resolution should be <strong>200 x 230 pixels</strong> (approx 3.5cm x 4.5cm). Must be taken on a <em>white or light background</em> with 80% face coverage. No caps or dark glasses!</li>
        <li><strong>Candidate Signature:</strong> File size must be between <strong>10 KB to 20 KB</strong>. Dimensions: <strong>140 x 60 pixels</strong>. Must be signed with <em>black or blue ink</em> on clean unruled white paper.</li>
      </ul>
      <p>💡 <strong>Quick Fix:</strong> Download our <em>RojgarSetu Form Assistant App</em> from the banner above or open Windows Paint &gt; Resize by percentage (40%-60%) to hit the exact KB size in seconds.</p>
    `
  },
  otr_guide: {
    question: "How do I complete One Time Registration (OTR)?",
    answer: `
      <p>🏛️ <strong>One Time Registration (OTR) Guide for UPSC, SSC &amp; BPSC:</strong></p>
      <ol style="padding-left:18px; margin:6px 0;">
        <li>Visit the official portal (e.g. <code>upsconline.nic.in</code>, <code>ssc.gov.in</code>, or <code>bpsc.bihar.gov.in</code>).</li>
        <li>Click <strong>New Candidate Registration / OTR</strong>.</li>
        <li>Enter your <strong>Aadhaar Number, Active Mobile &amp; Email ID</strong> and verify with instant OTP.</li>
        <li>Enter your 10th (Matriculation) Roll Number, Year of Passing, and Board name exactly as on the mark sheet.</li>
        <li>Upload your photo and signature.</li>
        <li>Once generated, your <strong>OTR ID is valid for life</strong> for all future exams conducted by that commission!</li>
      </ol>
    `
  },
  payment_issue: {
    question: "Money debited from bank, but form status shows Pending / Failed?",
    answer: `
      <p>💳 <strong>Fee Debited But Pending / Incomplete Status:</strong></p>
      <ul style="padding-left:16px; margin:6px 0;">
        <li><strong>Do NOT make a second payment immediately!</strong> Banking payment gateways (SBI ePay, Razorpay, BillDesk) take between <strong>24 to 48 hours</strong> to reconcile with commission servers.</li>
        <li>Login again to the recruitment portal and click the <strong>"Double Verification of Payment"</strong> or <strong>"Re-Check Transaction Status"</strong> button.</li>
        <li>If money was deducted and not reconciled within 48 hours, the banking system automatically refunds the full amount back to your original source account within 5-7 working days.</li>
      </ul>
    `
  },
  docs_needed: {
    question: "Which documents are required for application form submission?",
    answer: `
      <p>📑 <strong>Mandatory Document Checklist for Government Job Applications:</strong></p>
      <ol style="padding-left:18px; margin:6px 0;">
        <li><strong>10th / Matric Certificate:</strong> Serves as primary Date of Birth (DOB) and Father's Name proof.</li>
        <li><strong>12th / Diploma / Degree Marksheet &amp; Passing Certificate:</strong> For eligibility verification.</li>
        <li><strong>Caste / Category Certificate:</strong> OBC Non-Creamy Layer (NCL) or EWS Certificate must be issued for the current financial year (2025-26).</li>
        <li><strong>Domicile / Residential Certificate:</strong> Crucial for claiming State Quota reservation (e.g., Bihar, UP, MP).</li>
        <li><strong>Photo Identity Proof:</strong> Aadhaar Card, Voter ID, PAN Card, or Passport.</li>
      </ol>
    `
  },
  age_relax: {
    question: "What are the rules for age relaxation?",
    answer: `
      <p>📅 <strong>Standard Age Relaxation Norms (Central &amp; State Govts):</strong></p>
      <ul style="padding-left:16px; margin:6px 0;">
        <li><strong>OBC (Non-Creamy Layer):</strong> +3 Years relaxation above maximum age limit.</li>
        <li><strong>SC / ST Candidates:</strong> +5 Years relaxation.</li>
        <li><strong>PwBD (Persons with Benchmark Disabilities):</strong> +10 Years (+13 for OBC, +15 for SC/ST).</li>
        <li><strong>Ex-Servicemen:</strong> 3 years after deduction of military service rendered from actual age.</li>
        <li><strong>Women Candidates:</strong> In Bihar (BPSC, Police, Teacher) and many state exams, women candidates enjoy an additional 3 to 5 years relaxation.</li>
      </ul>
      <p><em>Check the specific advertisement cut-off date (e.g. 01/08/2026).</em></p>
    `
  },
  edit_mistake: {
    question: "How do I correct mistakes made in the submitted form?",
    answer: `
      <p>❌ <strong>Correction Window &amp; Mistake Resolution:</strong></p>
      <ul style="padding-left:16px; margin:6px 0;">
        <li>Most commissions (SSC, Railway, BPSC, UPSC) provide a <strong>Form Correction Window</strong> for 3 to 5 days right after the online application closing date.</li>
        <li><strong>Permitted Corrections:</strong> Candidate spelling, father's name, exam city choice, category, and marks percentage.</li>
        <li><strong>Correction Fee:</strong> Usually ₹200 for the first modification, and ₹500 for the second modification.</li>
        <li><strong>Non-Editable Fields:</strong> You usually cannot alter your registered Mobile Number, Email ID, or Aadhaar number.</li>
      </ul>
    `
  }
};

function appendChatMessage(sender, htmlContent) {
  const container = document.getElementById('chatMessagesBody');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender === 'user' ? 'user-msg' : 'bot-msg'}`;
  bubble.innerHTML = htmlContent;
  container.appendChild(bubble);

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
}

function askQuickQuestion(topic) {
  const data = GUIDANCE_KNOWLEDGE[topic];
  if (!data) return;

  appendChatMessage('user', data.question);

  setTimeout(() => {
    appendChatMessage('bot', data.answer);
  }, 300);
}

function handleChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chatUserInput');
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  appendChatMessage('user', text);
  input.value = '';

  const qLow = text.toLowerCase();
  let botReply = '';

  if (qLow.includes('photo') || qLow.includes('signature') || qLow.includes('sign') || qLow.includes('size') || qLow.includes('resize') || qLow.includes('kb')) {
    botReply = GUIDANCE_KNOWLEDGE.photo_resize.answer;
  } else if (qLow.includes('otr') || qLow.includes('one time') || qLow.includes('registration') || qLow.includes('login')) {
    botReply = GUIDANCE_KNOWLEDGE.otr_guide.answer;
  } else if (qLow.includes('payment') || qLow.includes('fee') || qLow.includes('challan') || qLow.includes('debit') || qLow.includes('money') || qLow.includes('pending')) {
    botReply = GUIDANCE_KNOWLEDGE.payment_issue.answer;
  } else if (qLow.includes('document') || qLow.includes('certificate') || qLow.includes('ews') || qLow.includes('obc') || qLow.includes('marksheet')) {
    botReply = GUIDANCE_KNOWLEDGE.docs_needed.answer;
  } else if (qLow.includes('age') || qLow.includes('relaxation') || qLow.includes('cutoff') || qLow.includes('date of birth') || qLow.includes('dob')) {
    botReply = GUIDANCE_KNOWLEDGE.age_relax.answer;
  } else if (qLow.includes('mistake') || qLow.includes('edit') || qLow.includes('correction') || qLow.includes('wrong') || qLow.includes('change')) {
    botReply = GUIDANCE_KNOWLEDGE.edit_mistake.answer;
  } else if (qLow.includes('bpsc') || qLow.includes('bihar')) {
    botReply = `
      <p>🏛️ <strong>Bihar BPSC 2026 Guidelines:</strong></p>
      <ul style="padding-left:16px; margin:4px 0;">
        <li>BPSC requires candidates to have a valid Domicile Certificate for Bihar state reservation.</li>
        <li>Live webcam photo capture is mandated during registration. Ensure well-lit room with plain white background.</li>
        <li>Signature must be uploaded in both English and Hindi.</li>
      </ul>
    `;
  } else if (qLow.includes('ssc')) {
    botReply = `
      <p>🏛️ <strong>SSC (Staff Selection Commission) 2026 Guidelines:</strong></p>
      <ul style="padding-left:16px; margin:4px 0;">
        <li>All candidates must complete OTR on the new portal <code>ssc.gov.in</code>.</li>
        <li>Live photo capture via SSC Application or webcam is compulsory. Uploading scanned passport photos is no longer accepted for new notifications!</li>
        <li>Keep your 10th Roll number and active mobile handy for OTR validation.</li>
      </ul>
    `;
  } else if (qLow.includes('railway') || qLow.includes('rrb') || qLow.includes('ntpc')) {
    botReply = `
      <p>🚆 <strong>Railway RRB 2026 Guidelines:</strong></p>
      <ul style="padding-left:16px; margin:4px 0;">
        <li>Railway applications use a single unified account for RRB NTPC, Group D, ALP, and Technician.</li>
        <li>Bank Account details entered during application must be active because the CBT-1 fee refund will be credited directly to this account!</li>
      </ul>
    `;
  } else if (qLow.includes('private')) {
    botReply = `
      <p>🏢 <strong>Private Jobs Guide:</strong></p>
      <p>Click on the <strong>"🏢 Private Jobs (State-Wise)"</strong> tab at the top of this website. You can filter corporate openings by Bihar, UP, Delhi NCR, Maharashtra, Karnataka, and other states. All private jobs posted here have zero placement fees.</p>
    `;
  } else if (qLow.includes('notes') || qLow.includes('ncert') || qLow.includes('pdf')) {
    botReply = `
      <p>📚 <strong>Free NCERT Books &amp; Study Notes:</strong></p>
      <p>Switch to the <strong>"📚 Study Notes &amp; NCERT PDFs"</strong> tab on top to download complete Class 6 to 12 official textbooks in Hindi &amp; English, plus competitive formula sheets for BPSC, SSC, and Railway.</p>
    `;
  } else {
    botReply = `
      <p>🤖 <strong>Helpful Form-Filling Advice:</strong></p>
      <p>For <strong>"${escapeHtml(text)}"</strong>, ensure that:</p>
      <ol style="padding-left:18px; margin:6px 0;">
        <li>All name and parent credentials match your 10th Matriculation Marksheet character-by-character.</li>
        <li>Upload photos under 50KB and signatures under 20KB.</li>
        <li>Double-check your email and mobile number before final submission.</li>
      </ol>
      <p>Need more specific help? Click any quick question topic above or ask about BPSC, SSC, Railway, or Photo resize!</p>
    `;
  }

  setTimeout(() => {
    appendChatMessage('bot', botReply);
  }, 350);
}

// ------------------------------------------------------------
// 7. Full Vacancy Details (Eligibility, Seats, Dates, Fees)
// ------------------------------------------------------------
function findJobAnywhere(jobId) {
  if (!jobId) return null;

  // 1. Search in state.jobs
  let item = state.jobs.find(j => j.id === jobId);
  if (item) return item;

  // 2. Search in state.privateJobs
  item = (state.privateJobs || []).find(j => j.id === jobId);
  if (item) {
    return {
      ...item,
      org: item.company,
      location: `${item.city}, ${item.state}`,
      vacancies: item.openings,
      sector: 'PRIVATE'
    };
  }

  // 3. Search in all sarkariColumns
  if (state.sarkariColumns) {
    for (const key of Object.keys(state.sarkariColumns)) {
      const found = state.sarkariColumns[key].find((j, idx) => j.id === jobId || `live-${key}-${idx}` === jobId);
      if (found) {
        return {
          id: jobId,
          title: found.title,
          org: 'Government Department / Commission',
          qual: '10th / 12th / Graduate as per Notification',
          vacancies: 'As per Official Notice',
          salary: 'Standard Pay Scale',
          location: 'All India / State Jurisdiction',
          lastDate: 'Active Window 2026',
          url: found.officialUrl || found.url || 'https://www.india.gov.in/'
        };
      }
    }
  }

  // Fallback
  return {
    id: jobId,
    title: 'Candidate Recruitment Vacancy 2026',
    org: 'Recruitment Commission & Department',
    qual: '10th / 12th / Graduate',
    vacancies: 'Multiple Posts',
    salary: 'Standard Pay Matrix',
    location: 'All India & State Jurisdictions',
    lastDate: 'Active Window',
    url: 'https://www.india.gov.in/'
  };
}

async function openPostDetail(jobId, jobUrl, fallbackTitle, category = 'job') {
  const job = findJobAnywhere(jobId);
  const targetUrl = jobUrl || job?.url || '';
  const targetTitle = fallbackTitle || job?.title || 'Government Vacancy Details 2026';

  const body = document.getElementById('postDetailBody');
  const modalTitle = document.getElementById('postDetailModalTitle');
  if (!body) return;

  const isPrivateJob = jobId && (String(jobId).startsWith('pjob-') || job?.sector === 'PRIVATE' || !!job?.company || (job?.sector && job?.sector !== 'Government'));

  const detectedCategory = category || (
    isPrivateJob ? 'privateJob' :
    /admit/i.test(targetTitle) ? 'admitCard' :
    /result|marks|cutoff|merit/i.test(targetTitle) ? 'result' :
    /answer\s*key/i.test(targetTitle) ? 'answerKey' :
    /syllabus/i.test(targetTitle) ? 'syllabus' :
    /admission/i.test(targetTitle) ? 'admission' :
    'job'
  );

  const catLabel = 
    isPrivateJob ? '🏢 Verified Private Job &amp; Eligibility' :
    detectedCategory === 'admitCard' ? '🎫 Government Admit Card &amp; Exam Center' :
    detectedCategory === 'result' ? '🏆 Examination Result &amp; Scorecard' :
    detectedCategory === 'answerKey' ? '🔑 Official Answer Key &amp; Objections' :
    detectedCategory === 'syllabus' ? '📖 Exam Syllabus &amp; Pattern' :
    detectedCategory === 'admission' ? '🎓 Admission &amp; Counseling Details' :
    '📋 Official Vacancy Details &amp; Eligibility';

  if (modalTitle) {
    const cleanTitle = targetTitle.length > 55 ? targetTitle.substring(0, 55) + '...' : targetTitle;
    modalTitle.innerHTML = `${catLabel} : <span style="color:#fef08a;">${escapeHtml(cleanTitle)}</span>`;
  }

  // Show sleek loading state
  body.innerHTML = `
    <div class="detail-loading-box">
      <div class="detail-spinner"></div>
      <p style="font-weight:900; font-size:1.15rem; color:#ab183d; margin:0 0 6px;">${isPrivateJob ? 'Loading Verified Corporate Vacancy &amp; Eligibility Criteria...' : 'Loading Official Details &amp; Government Portal Links...'}</p>
      <p style="font-size:0.86rem; color:#64748b; margin:0;">
        Fetching eligibility criteria, salary, vacancies, document checklist &amp; direct links for:<br/>
        <strong>${escapeHtml(targetTitle)}</strong>
      </p>
    </div>
  `;
  openModal('postDetailModal');

  try {
    const res = await api.getJobDetail(targetUrl, jobId);
    const tableHtml = res.tableHtml || '';
    const postOrg = res.org || job?.org || job?.company || 'Official Commission';
    const officialSite = res.officialWebsite || inferOfficialPortal(targetTitle);
    const applyUrl = res.applyUrl || officialSite;
    const admitCardUrl = res.admitCardUrl || officialSite;
    const resultUrl = res.resultUrl || officialSite;
    const notifUrl = res.notificationUrl || null;
    const answerKeyUrl = res.answerKeyUrl || officialSite;
    const syllabusUrl = res.syllabusUrl || officialSite;

    let topActionBtns = '';
    let bottomCtaHtml = '';

    if (detectedCategory === 'admitCard') {
      topActionBtns = `
        <a href="${admitCardUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background:#065f46; border-color:#047857; padding:8px 16px; font-size:0.88rem; text-decoration:none;">
          🎫 Download Admit Card ↗
        </a>
        <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 14px; text-decoration:none;">
          🏛️ Official Portal ↗
        </a>
        ${notifUrl ? `<a href="${notifUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 12px; text-decoration:none;">📄 Exam Notice ↗</a>` : ''}
        <button type="button" class="btn btn-outline btn-sm" style="padding:8px 12px;" onclick="window.print()">
          🖨️ Print
        </button>
      `;

      bottomCtaHtml = `
        <div class="detail-bottom-cta" style="background:#f0fdf4; border:2px solid #86efac; border-radius:4px; padding:16px; text-align:center; margin-top:16px;">
          <h3 style="color:#166534; font-size:1.1rem; margin:0 0 6px;">Download Admit Card &amp; Check Exam Center</h3>
          <p style="font-size:0.88rem; color:#14532d; margin:0 0 12px;">Click below to visit the official commission portal directly to download your Admit Card / Hall Ticket.</p>
          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <a href="${admitCardUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="background:#065f46; border-color:#047857; padding:12px 24px; font-size:0.96rem; text-decoration:none;">
              🎫 Download Admit Card on Official Portal ↗
            </a>
            <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline" style="padding:12px 20px; text-decoration:none;">
              🏛️ Official Commission Website ↗
            </a>
          </div>
        </div>
      `;
    } else if (detectedCategory === 'result') {
      topActionBtns = `
        <a href="${resultUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background:#7c2d12; border-color:#9a3412; padding:8px 16px; font-size:0.88rem; text-decoration:none;">
          🏆 Check / Download Result ↗
        </a>
        <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 14px; text-decoration:none;">
          🏛️ Official Portal ↗
        </a>
        <button type="button" class="btn btn-outline btn-sm" style="padding:8px 12px;" onclick="window.print()">
          🖨️ Print
        </button>
      `;

      bottomCtaHtml = `
        <div class="detail-bottom-cta" style="background:#fff7ed; border:2px solid #fed7aa; border-radius:4px; padding:16px; text-align:center; margin-top:16px;">
          <h3 style="color:#9a3412; font-size:1.1rem; margin:0 0 6px;">Examination Result, Scorecard &amp; Merit List</h3>
          <p style="font-size:0.88rem; color:#7c2d12; margin:0 0 12px;">Click below to view the official scorecard or download the merit list PDF directly.</p>
          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <a href="${resultUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="background:#7c2d12; border-color:#9a3412; padding:12px 24px; font-size:0.96rem; text-decoration:none;">
              🏆 Check Result on Official Server ↗
            </a>
            <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline" style="padding:12px 20px; text-decoration:none;">
              🏛️ Official Commission Website ↗
            </a>
          </div>
        </div>
      `;
    } else if (detectedCategory === 'answerKey') {
      topActionBtns = `
        <a href="${answerKeyUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background:#1e3a8a; border-color:#1e40af; padding:8px 16px; font-size:0.88rem; text-decoration:none;">
          🔑 Check Official Answer Key ↗
        </a>
        <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 14px; text-decoration:none;">
          🏛️ Official Portal ↗
        </a>
      `;

      bottomCtaHtml = `
        <div class="detail-bottom-cta">
          <h3 style="color:#1e3a8a; font-size:1.1rem; margin:0 0 6px;">Download Answer Key &amp; File Objections</h3>
          <p style="font-size:0.88rem; color:#374151; margin:0 0 12px;">Click below to open the official answer key portal directly.</p>
          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <a href="${answerKeyUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="background:#1e3a8a; border-color:#1e40af; padding:12px 24px; font-size:0.96rem; text-decoration:none;">
              🔑 Check Answer Key on Official Server ↗
            </a>
            <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline" style="padding:12px 20px; text-decoration:none;">
              🏛️ Official Website ↗
            </a>
          </div>
        </div>
      `;
    } else if (detectedCategory === 'syllabus') {
      topActionBtns = `
        <a href="${syllabusUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="background:#431407; border-color:#78350f; padding:8px 16px; font-size:0.88rem; text-decoration:none;">
          📖 Download Syllabus PDF ↗
        </a>
        <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 14px; text-decoration:none;">
          🏛️ Official Portal ↗
        </a>
      `;

      bottomCtaHtml = `
        <div class="detail-bottom-cta">
          <h3 style="color:#431407; font-size:1.1rem; margin:0 0 6px;">Download Official Exam Syllabus &amp; Pattern</h3>
          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:8px;">
            <a href="${syllabusUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="background:#431407; border-color:#78350f; padding:12px 24px; font-size:0.96rem; text-decoration:none;">
              📖 Download Syllabus PDF ↗
            </a>
            <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline" style="padding:12px 20px; text-decoration:none;">
              🏛️ Official Website ↗
            </a>
          </div>
        </div>
      `;
    } else {
      if (isPrivateJob) {
        topActionBtns = `
          <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="padding:8px 16px; font-size:0.88rem; text-decoration:none;">
            🚀 Apply on Official Company Website ↗
          </a>
          <button type="button" class="btn btn-outline btn-sm" style="padding:8px 12px;" onclick="window.print()">
            🖨️ Print Details
          </button>
        `;

        bottomCtaHtml = `
          <div class="detail-bottom-cta">
            <h3 style="color:#ab183d; font-size:1.15rem; margin:0 0 6px;">Ready to Submit Your Application?</h3>
            <p style="font-size:0.88rem; color:#374151; margin:0 0 12px;">Click below to open the official application / careers portal for <strong>${escapeHtml(postOrg)}</strong> directly in a new tab.</p>
            <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
              <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-primary" style="padding:12px 24px; font-size:0.96rem; text-decoration:none;">
                🚀 Open Official Apply Portal (${escapeHtml(postOrg)}) ↗
              </a>
            </div>
          </div>
        `;
      } else {
        // Default / Latest Jobs
        topActionBtns = `
          <a href="${applyUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="padding:8px 16px; font-size:0.88rem; text-decoration:none;">
            🚀 Apply Online ↗
          </a>
          <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 14px; text-decoration:none;">
            🏛️ Official Portal ↗
          </a>
          ${notifUrl ? `<a href="${notifUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="padding:8px 12px; text-decoration:none;">📄 Notification PDF ↗</a>` : ''}
          <button type="button" class="btn btn-outline btn-sm" style="padding:8px 12px;" onclick="window.print()">
            🖨️ Print Details
          </button>
        `;

        bottomCtaHtml = `
          <div class="detail-bottom-cta">
            <h3 style="color:#ab183d; font-size:1.1rem; margin:0 0 6px;">Ready to Submit Your Application?</h3>
            <p style="font-size:0.88rem; color:#374151; margin:0 0 12px;">Click below to open the official application portal directly in a new tab.</p>
            <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
              <a href="${applyUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="padding:12px 24px; font-size:0.96rem; text-decoration:none;">
                🚀 Open Official Apply Portal Directly ↗
              </a>
              <a href="${officialSite}" target="_blank" rel="noopener" class="btn btn-outline" style="padding:12px 20px; text-decoration:none;">
                🏛️ Official Department Website ↗
              </a>
            </div>
          </div>
        `;
      }
    }

    body.innerHTML = `
      <!-- Top Quick Action Strip -->
      <div class="detail-top-action-bar">
        <div class="detail-top-info">
          ${escapeHtml(res.title || targetTitle)}
          <small>${isPrivateJob ? 'Enterprise / Company:' : 'Authority:'} <strong>${escapeHtml(postOrg)}</strong> | Status: Active 2026</small>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          ${topActionBtns}
        </div>
      </div>

      <!-- Authentic Vacancy Full Detail Table -->
      <div class="sarkari-detail-content">
        ${tableHtml}
      </div>

      <!-- Bottom Direct Registration Banner -->
      ${bottomCtaHtml}
    `;
  } catch (err) {
    const fallbackPortal = inferOfficialPortal(targetTitle);
    body.innerHTML = `
      <div style="text-align:center; padding:32px;">
        <p style="color:#dc2626; font-weight:800; font-size:1rem;">⚠️ Notice: ${escapeHtml(err.message)}</p>
        <p style="font-size:0.86rem; color:#6b7280; margin-top:4px;">You can proceed directly to the recruitment authority's official portal:</p>
        <div style="margin-top:16px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <a href="${fallbackPortal}" target="_blank" rel="noopener" class="btn btn-primary" style="padding:10px 20px; text-decoration:none;">
            🚀 Open Official Portal Directly (${fallbackPortal}) ↗
          </a>
        </div>
      </div>
    `;
  }
}

// ------------------------------------------------------------
// 8. Direct Application Helper (Direct Official Portal Open)
// ------------------------------------------------------------
function openApplyModal(jobId) {
  const job = findJobAnywhere(jobId);
  const targetUrl = job?.url || job?.officialUrl || inferOfficialPortal(job?.title || '') || 'https://www.india.gov.in/';
  window.open(targetUrl, '_blank', 'noopener');
}

// ------------------------------------------------------------
// 9. Live Feeds Refresh Helper
// ------------------------------------------------------------
async function triggerLiveSync(btnEl) {
  const originalText = btnEl ? btnEl.innerHTML : '';
  if (btnEl) {
    btnEl.innerHTML = '🔄 Refreshing Feeds...';
    btnEl.disabled = true;
  }
  showToast('🔄 Refreshing verified recruitment feeds...');

  try {
    const res = await api.syncSarkari();
    if (res.state) {
      state = res.state;
    } else {
      state = await api.getState();
    }
    renderAll();
    showToast(`✅ Updated! Found ${res.stats?.latestJobs || 35} Jobs, ${res.stats?.admitCards || 35} Admit Cards, ${res.stats?.results || 35} Results!`);
  } catch (err) {
    showToast('❌ Feed update error: ' + err.message);
  } finally {
    if (btnEl) {
      btnEl.innerHTML = originalText || '🔄 Refresh Feeds';
      btnEl.disabled = false;
    }
  }
}

// ------------------------------------------------------------
// 10. Master Render & Initialization
// ------------------------------------------------------------
function renderAll() {
  renderGovtView();
  renderPrivateView();
  renderNotesView();
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[m]);
}

function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function initDateDisplay() {
  const el = document.getElementById('currentDateDisplay');
  if (el) {
    const now = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    el.textContent = '📅 ' + now.toLocaleDateString('en-IN', options);
  }
}

async function initApp() {
  initDateDisplay();
  try {
    state = await api.getState();
    syncModalLanguageControls(currentStudyLang);
    renderAll();

    // Check for ?apply=jobId query parameter
    const params = new URLSearchParams(window.location.search);
    const applyId = params.get('apply');
    if (applyId) {
      setTimeout(() => openApplyModal(applyId), 300);
    }
  } catch (err) {
    console.error('Failed to initialize:', err);
    showToast('⚠️ Could not connect to backend server.');
  }
}

// Start application
initApp();
