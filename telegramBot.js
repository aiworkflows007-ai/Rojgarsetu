// ============================================================
// telegramBot.js — Telegram Bot Admin Control System
// Manages Sarkari Result RojgarSetu Portal directly via Telegram
// Commands: /start, /help, /status, /sync, /autosync, /latest, /addjob, /addnote, /apps, /setapp, /deljob
// Zero External Dependencies (Native Node.js HTTPS)
// ============================================================

const https = require('https');
const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, 'data', 'bot-config.json');

let botState = {
  token: null,
  botUsername: null,
  isPolling: false,
  lastUpdateId: 0,
  adminChatIds: new Set(),
  autoSyncTimer: null,
  autoSyncIntervalMinutes: 120, // Default: auto sync every 2 hours
  lastSyncStats: null
};

// Interactive 1-tap admin keyboard
const ADMIN_KEYBOARD = {
  keyboard: [
    [{ text: '🔄 Sync SarkariResult' }, { text: '📊 Status & Counts' }],
    [{ text: '⚡ Top 5 Latest Jobs' }, { text: '⏰ Auto-Sync Info' }],
    [{ text: '🏢 Private Jobs' }, { text: '❓ Help & Commands' }]
  ],
  resize_keyboard: true,
  persistent: true
};

/**
 * Loads or initializes the bot configuration
 */
function loadBotConfig() {
  if (!fs.existsSync(CONFIG_PATH)) {
    const defaultConfig = {
      token: process.env.TELEGRAM_BOT_TOKEN || '',
      adminChats: [],
      autoSyncMinutes: 120,
      instructions: 'Get your bot token from @BotFather on Telegram and paste it here, or set TELEGRAM_BOT_TOKEN environment variable.'
    };
    try {
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig, null, 2), 'utf-8');
    } catch (e) {}
    return defaultConfig;
  }
  try {
    const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.adminChats)) {
      parsed.adminChats.forEach(id => botState.adminChatIds.add(id));
    }
    if (parsed.autoSyncMinutes) {
      botState.autoSyncIntervalMinutes = parsed.autoSyncMinutes;
    }
    return parsed;
  } catch (err) {
    return { token: '', adminChats: [], autoSyncMinutes: 120 };
  }
}

/**
 * Save updated bot config
 */
function saveBotConfig(config) {
  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');
  } catch (err) {
    console.error('[Telegram Bot] Failed to save config:', err.message);
  }
}

function rememberAdminChat(chatId) {
  if (!chatId) return;
  botState.adminChatIds.add(chatId);
  try {
    const cfg = loadBotConfig();
    cfg.adminChats = Array.from(botState.adminChatIds);
    saveBotConfig(cfg);
  } catch (e) {}
}

/**
 * Generic HTTPS Telegram API request
 */
function telegramApi(token, method, payload = null) {
  return new Promise((resolve, reject) => {
    const postData = payload ? JSON.stringify(payload) : null;
    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${token}/${method}`,
      method: payload ? 'POST' : 'GET',
      headers: {
        'User-Agent': 'SarkariResult-AdminBot/1.0',
        ...(postData ? {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        } : {})
      },
      timeout: 35000
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(new Error(`Failed to parse Telegram API response: ${data.substring(0, 100)}`));
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Telegram request timed out'));
    });

    if (postData) req.write(postData);
    req.end();
  });
}

/**
 * Sends a Markdown-formatted message to a Telegram chat with optional keyboard
 */
async function sendMessage(token, chatId, text, options = {}) {
  try {
    return await telegramApi(token, 'sendMessage', {
      chat_id: chatId,
      text,
      parse_mode: options.parseMode || 'Markdown',
      disable_web_page_preview: true,
      ...(options.reply_markup ? { reply_markup: options.reply_markup } : { reply_markup: ADMIN_KEYBOARD })
    });
  } catch (err) {
    console.error(`[Telegram Bot] Error sending message to ${chatId}:`, err.message);
  }
}

/**
 * Broadcasts a message to all registered admin chats
 */
async function broadcastToAdmins(text) {
  if (!botState.token) return;
  for (const chatId of botState.adminChatIds) {
    try {
      await sendMessage(botState.token, chatId, text);
    } catch (e) {}
  }
}

/**
 * Main polling loop
 */
async function pollUpdates(context) {
  if (!botState.isPolling || !botState.token) return;

  try {
    const res = await telegramApi(
      botState.token,
      `getUpdates?offset=${botState.lastUpdateId + 1}&timeout=20`
    );

    if (res.ok && Array.isArray(res.result)) {
      for (const update of res.result) {
        botState.lastUpdateId = Math.max(botState.lastUpdateId, update.update_id);
        if (update.message && update.message.text) {
          await handleIncomingMessage(update.message, context);
        }
      }
    }
  } catch (err) {
    // If polling fails (e.g. network blip), wait 3s before retrying
    await new Promise(r => setTimeout(r, 3000));
  }

  // Continue polling if still active
  if (botState.isPolling) {
    setImmediate(() => pollUpdates(context));
  }
}

/**
 * Executes a full sync with sarkariresult.com and saves to DB
 */
async function executeSarkariSync(context) {
  const { loadDB, saveDB, scrapeSarkariResult } = context;
  const scraped = await scrapeSarkariResult();
  const state = loadDB();

  state.lastSyncedAt = scraped.lastSyncedAt;
  state.marquees = scraped.marquees;
  state.sarkariColumns = scraped.sarkariColumns;
  if (scraped.govtJobs && scraped.govtJobs.length > 0) {
    state.jobs = scraped.govtJobs;
  }
  saveDB(state);

  const total = Object.values(state.sarkariColumns).reduce((a, b) => a + (Array.isArray(b) ? b.length : 0), 0);
  botState.lastSyncStats = {
    total,
    latestJobs: state.sarkariColumns.latestJob?.length || 0,
    admitCards: state.sarkariColumns.admitCard?.length || 0,
    results: state.sarkariColumns.result?.length || 0,
    time: scraped.lastSyncedAt
  };

  return { total, state };
}

/**
 * Starts automatic recurring background sync timer
 */
function startAutoSyncScheduler(context) {
  if (botState.autoSyncTimer) {
    clearInterval(botState.autoSyncTimer);
    botState.autoSyncTimer = null;
  }

  if (botState.autoSyncIntervalMinutes <= 0) {
    console.log('[Telegram Bot] Auto-sync is currently paused.');
    return;
  }

  const intervalMs = botState.autoSyncIntervalMinutes * 60 * 1000;
  console.log(`[Telegram Bot] ⏰ Auto-Sync scheduled every ${botState.autoSyncIntervalMinutes} minutes.`);

  botState.autoSyncTimer = setInterval(async () => {
    try {
      console.log('[Telegram Bot] 🔄 Running scheduled auto-sync with SarkariResult.com...');
      const { total, state } = await executeSarkariSync(context);
      const timeStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      // Notify admin chats on Telegram
      await broadcastToAdmins(
        `🔔 *Automatic SarkariResult Sync Completed!* (${timeStr})\n\n` +
        `✅ Mirrored *${total} Live Links* sitewide:\n` +
        `• Latest Jobs: ${state.sarkariColumns.latestJob?.length || 0}\n` +
        `• Admit Cards: ${state.sarkariColumns.admitCard?.length || 0}\n` +
        `• Results: ${state.sarkariColumns.result?.length || 0}\n\n` +
        `_All official portal links updated automatically on your website!_`
      );
    } catch (err) {
      console.error('[Telegram Bot] Scheduled auto-sync failed:', err.message);
    }
  }, intervalMs);
}

/**
 * Handles incoming Telegram commands
 */
async function handleIncomingMessage(msg, context) {
  const chatId = msg.chat.id;
  const text = msg.text.trim();
  const token = botState.token;
  const { loadDB, saveDB } = context;

  rememberAdminChat(chatId);

  const senderName = msg.from ? (msg.from.first_name || msg.from.username || 'Admin') : 'Admin';

  // 1. /start or /help or ❓ Help & Commands
  if (text.startsWith('/start') || text.startsWith('/help') || text === '❓ Help & Commands') {
    const welcome = `
🇮🇳 *Sarkari Result RojgarSetu — Portal Admin Bot*
Hello *${senderName}*! You have full remote control over your portal website.

📋 *1-Tap Quick Actions:*
Tap any button below or use these commands:

🔄 */sync* or *[🔄 Sync SarkariResult]*
Trigger live scrape to mirror *https://www.sarkariresult.com/* right now.

📊 */status* or *[📊 Status & Counts]*
View live portal link counts, sync health, and applications.

⚡ */latest* or *[⚡ Top 5 Latest Jobs]*
View the top 5 newest jobs with official government portal links.

⏰ */autosync [minutes]* or *[⏰ Auto-Sync Info]*
View or set automatic sync schedule (e.g. \`/autosync 60\` or \`/autosync off\`).

🏢 */addjob Title | Company | State | City | Sector | Qual | Salary | Openings | ApplyURL*
Post a verified private sector job opening.

📚 */addnote Title | Category | Description | PDF_URL*
Publish NCERT textbook or competitive study material PDF.

📱 */setapp Headline | Description | URL*
Update the mobile app promotional banner sitewide.

🗑️ */deljob Job_ID*
Remove a private job by ID.
    `.trim();

    return sendMessage(token, chatId, welcome);
  }

  // 2. /status or 📊 Status & Counts
  if (text === '/status' || text === '📊 Status & Counts') {
    try {
      const state = loadDB();
      const cols = state.sarkariColumns || {};
      const totalSarkari = Object.values(cols).reduce((a, b) => a + (Array.isArray(b) ? b.length : 0), 0);

      const statusMsg = `
📊 *Portal Live Status Report (2026)*

🏛️ *Government Updates (SarkariResult.com):*
• *Total Live Links:* ${totalSarkari}
• Results: ${cols.result?.length || 0}
• Admit Cards: ${cols.admitCard?.length || 0}
• Latest Jobs: ${cols.latestJob?.length || 0}
• Answer Keys: ${cols.answerKey?.length || 0}
• Syllabus: ${cols.syllabus?.length || 0}
• Admissions: ${cols.admission?.length || 0}
• Certificates: ${cols.certificate?.length || 0}
• Outsourcing/Offline: ${cols.outsourcing?.length || 0}
• Important: ${cols.important?.length || 0}

🏢 *Private Sector Jobs:* ${state.privateJobs?.length || 0} active
📚 *Study Notes & NCERTs:* ${state.notes?.length || 0} items
⏰ *Auto-Sync Schedule:* Every ${botState.autoSyncIntervalMinutes > 0 ? `${botState.autoSyncIntervalMinutes} minutes` : 'Disabled'}
🕒 *Last Synced:* ${state.lastSyncedAt ? new Date(state.lastSyncedAt).toLocaleString('en-IN') : 'Just now'}
      `.trim();

      return sendMessage(token, chatId, statusMsg);
    } catch (e) {
      return sendMessage(token, chatId, `❌ Error reading portal status: ${e.message}`);
    }
  }

  // 3. /sync or 🔄 Sync SarkariResult
  if (text === '/sync' || text === '🔄 Sync SarkariResult' || text.toLowerCase().includes('sync now')) {
    sendMessage(token, chatId, '🔄 *Starting live sync with https://www.sarkariresult.com/...*\n_Scraping all 9 columns, marquees & official portals. Please wait..._');
    try {
      const { total, state } = await executeSarkariSync(context);

      // Top 3 latest jobs for preview
      const topJobs = (state.sarkariColumns?.latestJob || []).slice(0, 3);
      const jobsPreview = topJobs.map((j, i) => `${i + 1}. *${j.title.substring(0, 42)}*...\n   🔗 [Official Portal](${j.officialUrl || 'https://www.india.gov.in/'})`).join('\n');

      const reply = `
✅ *Live Sync Succeeded!*
Successfully mirrored *${total} links* directly from SarkariResult.com:
• Results: ${state.sarkariColumns.result?.length || 0}
• Admit Cards: ${state.sarkariColumns.admitCard?.length || 0}
• Latest Jobs: ${state.sarkariColumns.latestJob?.length || 0}
• Answer Keys: ${state.sarkariColumns.answerKey?.length || 0}
• Syllabus: ${state.sarkariColumns.syllabus?.length || 0}
• Admissions: ${state.sarkariColumns.admission?.length || 0}
• Certificates: ${state.sarkariColumns.certificate?.length || 0}
• Outsourcing: ${state.sarkariColumns.outsourcing?.length || 0}
• Important: ${state.sarkariColumns.important?.length || 0}
• Marquees: ${state.marquees?.length || 0}

🔥 *Newest Jobs Synced:*
${jobsPreview}

_Portal website updated with official government application links!_
      `.trim();
      return sendMessage(token, chatId, reply);
    } catch (err) {
      return sendMessage(token, chatId, `❌ *Sync Failed:* ${err.message}`);
    }
  }

  // 4. /latest or ⚡ Top 5 Latest Jobs
  if (text === '/latest' || text === '⚡ Top 5 Latest Jobs') {
    try {
      const state = loadDB();
      const list = (state.sarkariColumns?.latestJob || []).slice(0, 5);
      if (list.length === 0) {
        return sendMessage(token, chatId, 'ℹ️ No latest jobs in database. Run /sync to fetch live jobs.');
      }

      let msg = `⚡ *Top 5 Latest Government Jobs (Live)*\n\n`;
      list.forEach((j, i) => {
        msg += `${i + 1}. *${j.title}*\n`;
        msg += `   🏛️ Board: ${j.org || 'Official Commission'}\n`;
        msg += `   🎓 Qual: ${j.qual || '10th / 12th / Grad'}\n`;
        msg += `   🔗 Official Portal: ${j.officialUrl || 'https://www.india.gov.in/'}\n\n`;
      });
      return sendMessage(token, chatId, msg.trim());
    } catch (e) {
      return sendMessage(token, chatId, `❌ Error: ${e.message}`);
    }
  }

  // 5. /autosync or ⏰ Auto-Sync Info
  if (text.startsWith('/autosync') || text === '⏰ Auto-Sync Info') {
    const arg = text.replace('/autosync', '').trim().toLowerCase();

    if (!arg || text === '⏰ Auto-Sync Info') {
      const statusText = botState.autoSyncIntervalMinutes > 0
        ? `✅ *Active* (Syncing automatically every *${botState.autoSyncIntervalMinutes} minutes*)`
        : `⏸️ *Paused / Disabled*`;

      return sendMessage(
        token,
        chatId,
        `⏰ *Auto-Sync Configuration*\n\n` +
        `Current Status: ${statusText}\n\n` +
        `*To change interval:* send \`/autosync 60\` (for 1 hour) or \`/autosync 180\` (for 3 hours)\n` +
        `*To disable:* send \`/autosync off\`\n` +
        `*To re-enable:* send \`/autosync on\``
      );
    }

    if (arg === 'off' || arg === 'stop' || arg === 'disable') {
      botState.autoSyncIntervalMinutes = 0;
      startAutoSyncScheduler(context);
      const cfg = loadBotConfig();
      cfg.autoSyncMinutes = 0;
      saveBotConfig(cfg);
      return sendMessage(token, chatId, `⏸️ *Auto-Sync has been disabled.* You can still run manual sync anytime with /sync.`);
    }

    if (arg === 'on' || arg === 'start') {
      botState.autoSyncIntervalMinutes = 120;
      startAutoSyncScheduler(context);
      const cfg = loadBotConfig();
      cfg.autoSyncMinutes = 120;
      saveBotConfig(cfg);
      return sendMessage(token, chatId, `✅ *Auto-Sync enabled!* Portal will automatically mirror SarkariResult every *120 minutes*.`);
    }

    const mins = parseInt(arg, 10);
    if (!isNaN(mins) && mins >= 10 && mins <= 1440) {
      botState.autoSyncIntervalMinutes = mins;
      startAutoSyncScheduler(context);
      const cfg = loadBotConfig();
      cfg.autoSyncMinutes = mins;
      saveBotConfig(cfg);
      return sendMessage(token, chatId, `✅ *Auto-Sync updated!* Portal will now automatically mirror SarkariResult every *${mins} minutes*.`);
    } else {
      return sendMessage(token, chatId, `⚠️ *Invalid interval.* Please enter a value between 10 and 1440 minutes. Example: \`/autosync 60\``);
    }
  }

  // 6. /private or 🏢 Private Jobs
  if (text === '/private' || text === '🏢 Private Jobs') {
    try {
      const state = loadDB();
      const list = (state.privateJobs || []).slice(0, 5);
      if (list.length === 0) {
        return sendMessage(token, chatId, 'ℹ️ No private jobs found. Use /addjob to post one.');
      }

      let msg = `🏢 *Recent Private Sector Openings*\n\n`;
      list.forEach((j, i) => {
        msg += `${i + 1}. *${j.title}* (${j.company})\n`;
        msg += `   📍 State: ${j.state} | City: ${j.city}\n`;
        msg += `   💼 Package: ${j.salary} | Openings: ${j.openings}\n`;
        msg += `   🆔 ID: \`${j.id}\`\n\n`;
      });
      return sendMessage(token, chatId, msg.trim());
    } catch (e) {
      return sendMessage(token, chatId, `❌ Error: ${e.message}`);
    }
  }

  // 7. /addjob
  if (text.startsWith('/addjob')) {
    const raw = text.replace('/addjob', '').trim();
    const parts = raw.split('|').map(s => s.trim());

    if (parts.length < 8) {
      return sendMessage(
        token, 
        chatId, 
        `⚠️ *Invalid Format!* Please use:\n\`/addjob Title | Company | State | City | Sector | Qual | Salary | Openings | ApplyURL\`\n\n*Example:*\n\`/addjob Software Engineer | TCS | Bihar | Patna | IT & Software | Graduate | ₹4.5 LPA | 300 Posts | https://tcs.com/careers\``
      );
    }

    const [title, company, stateName, city, sector, qual, salary, openings, applyUrl] = parts;
    try {
      const state = loadDB();
      const newJob = {
        id: 'pjob-' + Date.now(),
        title,
        company,
        state: stateName,
        city,
        sector: sector || 'IT & Software',
        qual: qual || 'Graduate',
        salary: salary || 'As per norms',
        openings: openings || 'Multiple Posts',
        lastDate: '30 Dec 2026',
        url: applyUrl || 'https://www.sarkariresult.com'
      };

      if (!state.privateJobs) state.privateJobs = [];
      state.privateJobs.unshift(newJob);
      saveDB(state);

      return sendMessage(
        token,
        chatId,
        `✅ *Private Job Published Live!*\n\n🏢 *${newJob.title}*\n• Company: ${newJob.company}\n• State: ${newJob.state} (${newJob.city})\n• Package: ${newJob.salary}\n• Openings: ${newJob.openings}\n• ID: \`${newJob.id}\``
      );
    } catch (e) {
      return sendMessage(token, chatId, `❌ Failed to add job: ${e.message}`);
    }
  }

  // 8. /addnote
  if (text.startsWith('/addnote')) {
    const raw = text.replace('/addnote', '').trim();
    const parts = raw.split('|').map(s => s.trim());

    if (parts.length < 4) {
      return sendMessage(
        token,
        chatId,
        `⚠️ *Invalid Format!* Please use:\n\`/addnote Title | Category | Description | PDF_URL\`\n\n*Categories:* NCERT Class 6-10, NCERT Class 11-12, Math Formulas, General Studies\n\n*Example:*\n\`/addnote NCERT Class 10 Science | NCERT Class 6-10 | Complete Physics, Chemistry & Biology | https://ncert.nic.in/textbook.php?jesc1=0-16\``
      );
    }

    const [title, category, desc, pdfUrl] = parts;
    try {
      const state = loadDB();
      const newNote = {
        id: 'note-' + Date.now(),
        title,
        category,
        desc,
        url: pdfUrl,
        size: 'PDF Document',
        downloads: 0,
        isNew: true
      };

      if (!state.notes) state.notes = [];
      state.notes.unshift(newNote);
      saveDB(state);

      return sendMessage(
        token,
        chatId,
        `✅ *Study Material Published Live!*\n\n📚 *${newNote.title}*\n• Category: ${newNote.category}\n• Description: ${newNote.desc}\n• Download Link: ${newNote.url}`
      );
    } catch (e) {
      return sendMessage(token, chatId, `❌ Failed to add note: ${e.message}`);
    }
  }

  // 9. /setapp
  if (text.startsWith('/setapp')) {
    const raw = text.replace('/setapp', '').trim();
    const parts = raw.split('|').map(s => s.trim());

    if (parts.length < 3) {
      return sendMessage(
        token,
        chatId,
        `⚠️ *Invalid Format!* Please use:\n\`/setapp Title | Description | AppStore_or_Website_URL\``
      );
    }

    const [appTitle, appDesc, appUrl] = parts;
    try {
      const state = loadDB();
      state.appConfig = {
        title: appTitle,
        desc: appDesc,
        url: appUrl
      };
      saveDB(state);

      return sendMessage(
        token,
        chatId,
        `✅ *App Banner Updated Sitewide!*\n\n📱 *Title:* ${appTitle}\n📝 *Description:* ${appDesc}\n🔗 *Download URL:* ${appUrl}`
      );
    } catch (e) {
      return sendMessage(token, chatId, `❌ Failed to update app config: ${e.message}`);
    }
  }

  // 10. /deljob
  if (text.startsWith('/deljob')) {
    const id = text.replace('/deljob', '').trim();
    if (!id) {
      return sendMessage(token, chatId, '⚠️ Please provide Job ID. Example: `/deljob pjob-1`');
    }
    try {
      const state = loadDB();
      const initialLen = state.privateJobs?.length || 0;
      state.privateJobs = (state.privateJobs || []).filter(j => j.id !== id);
      if (state.privateJobs.length < initialLen) {
        saveDB(state);
        return sendMessage(token, chatId, `🗑️ Deleted private job with ID: \`${id}\``);
      } else {
        return sendMessage(token, chatId, `⚠️ No job found with ID: \`${id}\``);
      }
    } catch (e) {
      return sendMessage(token, chatId, `❌ Error deleting job: ${e.message}`);
    }
  }

  // Fallback for unknown text
  return sendMessage(
    token,
    chatId,
    `🤖 Command not recognized.\nType */help* or tap *[🔄 Sync SarkariResult]* to update your portal website.`
  );
}

/**
 * Starts Telegram bot runner and recurring background scheduler
 */
async function startTelegramBot(context) {
  const config = loadBotConfig();
  const token = process.env.TELEGRAM_BOT_TOKEN || config.token;

  if (!token) {
    console.log('\n============================================================');
    console.log('🤖 [Telegram Bot Admin Control]');
    console.log('ℹ️ No Telegram Bot token configured yet.');
    console.log('To control & sync your portal via Telegram Bot:');
    console.log('1. Open Telegram & search for @BotFather');
    console.log('2. Send "/newbot" and follow prompts to get your Bot Token');
    console.log('3. Paste the token into: /home/ashok/Sarkari form Website/data/bot-config.json');
    console.log('   OR run with environment variable: TELEGRAM_BOT_TOKEN=your_token');
    console.log('============================================================\n');

    // Watch config file for user adding token
    fs.watchFile(CONFIG_PATH, { interval: 3000 }, () => {
      const updated = loadBotConfig();
      if (updated.token && updated.token !== botState.token) {
        console.log('[Telegram Bot] Detected new bot token in config! Connecting...');
        startTelegramBot(context);
      }
    });
    return;
  }

  try {
    const me = await telegramApi(token, 'getMe');
    if (!me.ok) {
      console.error(`[Telegram Bot] ❌ Token validation failed: ${me.description}`);
      return;
    }

    botState.token = token;
    botState.botUsername = me.result.username;
    botState.isPolling = true;

    console.log('\n============================================================');
    console.log(`🤖 [Telegram Bot] Connected successfully as @${botState.botUsername}!`);
    console.log(`📡 Ready to sync SarkariResult via Telegram (/sync, /status, /latest, /autosync)`);
    console.log('============================================================\n');

    // Start auto-sync background scheduler
    startAutoSyncScheduler(context);

    // Start polling loop
    pollUpdates(context);
  } catch (err) {
    console.error(`[Telegram Bot] Connection error: ${err.message}`);
  }
}

module.exports = {
  startTelegramBot,
  sendMessage,
  executeSarkariSync,
  loadBotConfig,
  saveBotConfig
};
