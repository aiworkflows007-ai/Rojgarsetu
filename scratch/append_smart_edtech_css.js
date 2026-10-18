const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'public', 'css', 'style.css');

const edtechCss = `
/* ==========================================================================
   SMART EDTECH DASHBOARD & TOPPER HANDWRITTEN NOTES SYSTEM
   Inspired by Modern EdTech Dashboard (Screenshot)
   ========================================================================== */

/* Outer Platform Layout */
.smart-edtech-layout {
  display: flex;
  background: #f1f5f9;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(148, 163, 184, 0.2);
  margin: 16px 0 32px;
  min-height: 850px;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}

/* 1. Deep Royal Indigo Sidebar */
.edtech-sidebar {
  width: 240px;
  background: linear-gradient(180deg, #2b49b3 0%, #1e3a8a 100%);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  flex-shrink: 0;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}

.edtech-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.35rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.02em;
  padding: 0 12px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 20px;
}

.edtech-brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.4);
}

.edtech-nav-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.edtech-nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 14px;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
}

.edtech-nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  transform: translateX(4px);
}

.edtech-nav-item.active {
  background: #f8fafc;
  color: #1e3a8a;
  font-weight: 800;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.edtech-nav-item.active .edtech-nav-icon {
  color: #2563eb;
}

.edtech-nav-icon {
  font-size: 1.15rem;
  width: 24px;
  display: inline-flex;
  justify-content: center;
}

.edtech-sidebar-bottom {
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

/* 2. Main Platform Body */
.edtech-body-wrap {
  flex: 1;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Topbar */
.edtech-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  gap: 16px;
  flex-wrap: wrap;
}

.edtech-search-wrap {
  position: relative;
  flex: 1;
  max-width: 480px;
}

.edtech-search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 1rem;
}

.edtech-search-input {
  width: 100%;
  padding: 10px 16px 10px 42px;
  border-radius: 20px;
  border: 1.5px solid #e2e8f0;
  background: #f8fafc;
  font-size: 0.92rem;
  color: #0f172a;
  outline: none;
  transition: all 0.2s ease;
}

.edtech-search-input:focus {
  border-color: #3b82f6;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.edtech-topbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.edtech-lang-select {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1.5px solid #cbd5e1;
  background: #ffffff;
  font-weight: 700;
  font-size: 0.85rem;
  color: #334155;
  cursor: pointer;
}

.edtech-icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  cursor: pointer;
  position: relative;
  transition: all 0.15s ease;
}

.edtech-icon-btn:hover {
  background: #f1f5f9;
  transform: translateY(-1px);
}

.edtech-badge-dot {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ef4444;
  border: 1.5px solid #ffffff;
}

.edtech-profile-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 10px 4px 4px;
  border-radius: 24px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  cursor: pointer;
}

.edtech-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #3b82f6;
}

.edtech-username {
  font-weight: 800;
  font-size: 0.88rem;
  color: #0f172a;
}

/* 3. Dashboard Multi-Column Grid */
.edtech-dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
  padding: 24px 28px;
  overflow-y: auto;
}

@media (max-width: 1100px) {
  .edtech-dashboard-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .smart-edtech-layout {
    flex-direction: column;
    border-radius: 12px;
  }
  .edtech-sidebar {
    width: 100%;
    border-radius: 12px 12px 0 0;
    padding: 14px;
  }
  .edtech-nav-list {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 4px;
  }
  .edtech-nav-item {
    white-space: nowrap;
    font-size: 0.85rem;
    padding: 8px 12px;
  }
  .edtech-dashboard-grid {
    padding: 16px;
  }
}

/* Hero Banner Card */
.edtech-hero-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.edtech-hero-card::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background: radial-gradient(circle at right, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.edtech-hero-left h1 {
  font-size: 1.85rem;
  font-weight: 900;
  color: #0f172a;
  margin: 0 0 8px;
  letter-spacing: -0.02em;
}

.edtech-hero-left p {
  font-size: 0.98rem;
  color: #64748b;
  margin: 0 0 18px;
  max-width: 460px;
  line-height: 1.5;
}

.edtech-hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2563eb;
  color: #ffffff !important;
  font-weight: 800;
  padding: 10px 22px;
  border-radius: 24px;
  text-decoration: none;
  font-size: 0.92rem;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  transition: all 0.2s ease;
}

.edtech-hero-cta:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.4);
}

.edtech-hero-illustration {
  font-size: 4.5rem;
  filter: drop-shadow(0 12px 18px rgba(0,0,0,0.1));
}

/* Performance and Progress Row */
.edtech-analytics-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

@media (max-width: 900px) {
  .edtech-analytics-row {
    grid-template-columns: 1fr;
  }
}

.edtech-stat-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 22px 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 14px rgba(0,0,0,0.03);
}

.edtech-stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.edtech-stat-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #0f172a;
}

.edtech-dropdown-pill {
  padding: 4px 10px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #475569;
}

/* Bar Chart Card */
.best-lessons-metric {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 16px;
}

.best-lessons-num {
  font-size: 2.2rem;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.03em;
}

.best-lessons-sub {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
}

.edtech-bar-chart {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 120px;
  padding-top: 10px;
  gap: 12px;
}

.barchart-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.barchart-bar-wrap {
  width: 100%;
  height: 90px;
  background: #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.barchart-fill {
  width: 100%;
  background: linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 8px;
  transition: height 0.6s ease;
}

.barchart-pct {
  font-size: 0.72rem;
  font-weight: 700;
  color: #475569;
}

.barchart-label {
  font-size: 0.68rem;
  font-weight: 700;
  color: #94a3b8;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 55px;
}

/* Mastery Circular Donuts */
.edtech-donuts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.donut-card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.donut-circle-wrap {
  position: relative;
  width: 64px;
  height: 64px;
  margin-bottom: 6px;
}

.donut-circle-wrap svg {
  transform: rotate(-90deg);
}

.donut-bg-ring {
  fill: none;
  stroke: #e2e8f0;
  stroke-width: 6;
}

.donut-fill-ring {
  fill: none;
  stroke: #2563eb;
  stroke-width: 6;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.8s ease;
}

.donut-pct-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  font-weight: 900;
  color: #0f172a;
}

.donut-sub-title {
  font-size: 0.72rem;
  font-weight: 700;
  color: #64748b;
  line-height: 1.2;
}

/* Mentors Card */
.edtech-mentors-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 22px 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 14px rgba(0,0,0,0.03);
  margin-bottom: 24px;
}

.mentor-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mentor-row-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #f8fafc;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
}

.mentor-info-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mentor-avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.mentor-name {
  font-size: 0.92rem;
  font-weight: 800;
  color: #0f172a;
}

.mentor-sub {
  font-size: 0.78rem;
  color: #64748b;
}

.mentor-actions-right {
  display: flex;
  gap: 8px;
}

.mentor-action-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.mentor-action-btn:hover {
  background: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
}

/* Right Column: Schedule & Events */
.edtech-right-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.edtech-schedule-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 22px 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 14px rgba(0,0,0,0.03);
}

.timeline-flow {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
  margin-top: 14px;
}

.timeline-flow::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  border-left: 2px dashed #cbd5e1;
}

.timeline-event-item {
  position: relative;
  padding-bottom: 16px;
}

.timeline-event-item:last-child {
  padding-bottom: 0;
}

.timeline-node {
  position: absolute;
  left: -20px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #3b82f6;
  z-index: 2;
}

.timeline-event-pill {
  background: #f1f5f9;
  border-radius: 14px;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  cursor: pointer;
}

.timeline-event-pill:hover {
  border-color: #93c5fd;
  transform: translateX(3px);
}

.timeline-event-pill.active {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: #ffffff;
  border-color: #1d4ed8;
  box-shadow: 0 6px 14px rgba(37, 99, 235, 0.25);
}

.timeline-event-pill.active .timeline-title,
.timeline-event-pill.active .timeline-time {
  color: #ffffff;
}

.timeline-time {
  font-size: 0.72rem;
  font-weight: 700;
  color: #64748b;
  margin-bottom: 2px;
}

.timeline-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: #0f172a;
}

/* Upcoming Events Card */
.edtech-upcoming-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 22px 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 14px rgba(0,0,0,0.03);
}

.event-box {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
  border-radius: 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  margin-bottom: 10px;
}

.event-thumb {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
}

.event-details {
  flex: 1;
}

.event-name {
  font-size: 0.85rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
}

.event-datetime {
  font-size: 0.74rem;
  color: #64748b;
  margin-top: 2px;
}

/* ==========================================================================
   AUTHENTIC TOPPER HANDWRITTEN NOTEBOOK SYSTEM
   ========================================================================== */

.handwritten-notebook-wrap {
  position: relative;
  background: #fdfbf7;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08), 0 0 0 1px #e2d9cc;
  margin: 16px 0 24px;
  overflow: hidden;
}

/* Spiral Ring Holes on the Left */
.notebook-spiral-strip {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 32px;
  background: #f5ede1;
  border-right: 2px solid #e8decb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px 0;
  z-index: 10;
}

.spiral-ring {
  width: 18px;
  height: 10px;
  background: linear-gradient(180deg, #64748b 0%, #334155 50%, #94a3b8 100%);
  border-radius: 6px;
  margin: 0 auto;
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.6), 0 2px 4px rgba(0,0,0,0.25);
}

/* College Ruled Page */
.notebook-ruled-page {
  margin-left: 32px;
  padding: 24px 32px 32px 54px;
  position: relative;
  /* College Ruled 30px Faint Lines */
  background-image: repeating-linear-gradient(transparent, transparent 29px, #dbeafe 30px);
  background-attachment: local;
  min-height: 500px;
  font-family: 'Kalam', cursive, sans-serif;
  color: #1e3a8a; /* Royal fountain pen blue ink */
  font-size: 1.08rem;
  line-height: 30px;
}

/* Red Margin Line */
.notebook-ruled-page::before {
  content: '';
  position: absolute;
  left: 42px;
  top: 0;
  bottom: 0;
  width: 2px;
  border-left: 2px solid #f87171; /* Teacher red pencil margin */
  pointer-events: none;
}

/* Topper Notebook Header */
.topper-notebook-header {
  border-bottom: 2px solid #2563eb;
  padding-bottom: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.notebook-topic-title {
  font-family: 'Kalam', cursive, sans-serif;
  font-size: 1.65rem;
  font-weight: 700;
  color: #1e3a8a;
  margin: 0;
  text-decoration: underline wavy #f59e0b;
}

.topper-stamp {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 2px solid #dc2626;
  color: #dc2626;
  font-family: 'Caveat', cursive;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 6px;
  transform: rotate(-3deg);
  background: rgba(254, 226, 226, 0.4);
}

/* Highlighters */
.hw-highlight {
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 700;
}

.hw-highlight.yellow {
  background: rgba(254, 240, 138, 0.7);
  box-shadow: 0 0 0 1px rgba(253, 224, 71, 0.5);
}

.hw-highlight.green {
  background: rgba(187, 247, 208, 0.7);
  box-shadow: 0 0 0 1px rgba(134, 239, 172, 0.5);
}

.hw-highlight.pink {
  background: rgba(251, 207, 232, 0.7);
  box-shadow: 0 0 0 1px rgba(244, 114, 182, 0.5);
}

/* Handwritten Sticky Notes */
.hw-sticky-note {
  position: relative;
  background: #fef08a;
  color: #713f12;
  padding: 16px 20px;
  border-radius: 4px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  margin: 18px 0;
  font-family: 'Kalam', cursive;
  font-size: 1.05rem;
  line-height: 1.6;
  transform: rotate(-1.2deg);
}

.hw-sticky-note.cyan {
  background: #cffafe;
  color: #164e63;
  transform: rotate(1.2deg);
}

.hw-sticky-note.pink {
  background: #fce7f3;
  color: #831843;
  transform: rotate(-0.8deg);
}

/* Scotch Tape at top of sticky note */
.hw-sticky-note::before {
  content: '';
  position: absolute;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 18px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.hw-sticky-title {
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Hand-Drawn Sketch Box */
.hw-sketch-box {
  border: 2px solid #2563eb;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  padding: 16px 20px;
  margin: 18px 0;
  background: rgba(239, 246, 255, 0.6);
}

.hw-sketch-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1d4ed8;
  margin-bottom: 8px;
}

/* Hand-Solved Step-by-Step Exemplar */
.hw-solved-card {
  background: #ffffff;
  border: 2px dashed #93c5fd;
  border-radius: 12px;
  padding: 18px 22px;
  margin: 18px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

.hw-solved-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.hw-solved-badge {
  background: #dbeafe;
  color: #1e40af;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 2px 10px;
  border-radius: 20px;
}

.hw-step-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
  line-height: 1.6;
}

.hw-step-bubble {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #2563eb;
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.hw-final-box {
  display: inline-block;
  border: 2px solid #16a34a;
  background: #f0fdf4;
  color: #166534;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: 6px;
  margin-top: 8px;
}

/* Margin Tip */
.hw-margin-tip {
  color: #dc2626;
  font-family: 'Caveat', cursive;
  font-size: 1.15rem;
  font-weight: 700;
}

/* Toggle Switcher in Reader Modal */
.reader-mode-switch-group {
  display: flex;
  background: #f1f5f9;
  border-radius: 20px;
  padding: 3px;
  border: 1px solid #cbd5e1;
}

.reader-mode-switch-btn {
  padding: 5px 14px;
  border-radius: 16px;
  border: none;
  background: transparent;
  font-size: 0.82rem;
  font-weight: 800;
  color: #475569;
  cursor: pointer;
  transition: all 0.15s ease;
}

.reader-mode-switch-btn.active {
  background: #2563eb;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
}
`;

fs.appendFileSync(cssPath, edtechCss, 'utf8');
console.log('Successfully appended Smart EdTech & Handwritten Notes CSS to style.css!');
