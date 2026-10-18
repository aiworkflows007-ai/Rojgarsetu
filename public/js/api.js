// ============================================================
// api.js — Fetch wrapper for RojgarSetu backend API
// ============================================================

const API_BASE = '';

const api = {
  async getState() {
    const res = await fetch(`${API_BASE}/api/state`);
    if (!res.ok) throw new Error('Failed to load state');
    return res.json();
  },

  async addJob(job) {
    const res = await fetch(`${API_BASE}/api/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job)
    });
    if (!res.ok) throw new Error('Failed to add job');
    return res.json();
  },

  async deleteJob(id) {
    const res = await fetch(`${API_BASE}/api/jobs/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete job');
    return res.json();
  },

  async addLocalJob(job) {
    const res = await fetch(`${API_BASE}/api/local-jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job)
    });
    if (!res.ok) throw new Error('Failed to add local job');
    return res.json();
  },

  async deleteLocalJob(id) {
    const res = await fetch(`${API_BASE}/api/local-jobs/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete local job');
    return res.json();
  },

  async addBoardItem(item) {
    const res = await fetch(`${API_BASE}/api/board`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
    if (!res.ok) throw new Error('Failed to add board item');
    return res.json();
  },

  async addNote(note) {
    const res = await fetch(`${API_BASE}/api/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    });
    if (!res.ok) throw new Error('Failed to add note');
    return res.json();
  },

  async updateAppConfig(config) {
    const res = await fetch(`${API_BASE}/api/app-config`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    if (!res.ok) throw new Error('Failed to update app config');
    return res.json();
  },

  async resetData() {
    const res = await fetch(`${API_BASE}/api/reset`, { method: 'POST' });
    if (!res.ok) throw new Error('Failed to reset data');
    return res.json();
  },

  getExportUrl() {
    return `${API_BASE}/api/export`;
  },

  async submitApplication(application) {
    const res = await fetch(`${API_BASE}/api/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(application)
    });
    if (!res.ok) throw new Error('Failed to submit application');
    return res.json();
  },

  async getApplications() {
    const res = await fetch(`${API_BASE}/api/applications`);
    if (!res.ok) throw new Error('Failed to fetch applications');
    return res.json();
  },

  async syncSarkari() {
    const res = await fetch(`${API_BASE}/api/sync-sarkari`, { method: 'POST' });
    if (!res.ok) throw new Error('Failed to update live feeds');
    return res.json();
  },

  async getPrivateJobs(params = {}) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE}/api/private-jobs?${query}`);
    if (!res.ok) throw new Error('Failed to load private jobs');
    return res.json();
  },

  async addPrivateJob(job) {
    const res = await fetch(`${API_BASE}/api/private-jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job)
    });
    if (!res.ok) throw new Error('Failed to add private job');
    return res.json();
  },

  async getJobDetail(url, id) {
    const params = new URLSearchParams();
    if (url) params.append('url', url);
    if (id) params.append('id', id);
    const res = await fetch(`${API_BASE}/api/job-detail?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch job details');
    return res.json();
  },

  async getAptitudeTopics(params = {}) {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_BASE}/api/aptitude-topics?${query}`);
    if (!res.ok) throw new Error('Failed to load aptitude topics');
    return res.json();
  },

  async syncIndiaBix() {
    const res = await fetch(`${API_BASE}/api/sync-indiabix`, { method: 'POST' });
    if (!res.ok) throw new Error('Failed to sync IndiaBIX');
    return res.json();
  }
};

