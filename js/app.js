// Main Application Logic for GATE CSE 2027 3-Month Prep Web App

(function () {
  'use strict';

  // ================= STORAGE KEYS & INITIAL STATE =================
  const STORAGE_KEYS = {
    COMPLETED_DAYS: 'gate27_completed_days',
    DAY_NOTES: 'gate27_day_notes',
    ERROR_LOG: 'gate27_error_log',
    TARGET_MARKS: 'gate27_target_marks',
    POMODORO_STATS: 'gate27_pomo_stats',
    QUIZ_STATE: 'gate27_quiz_state'
  };

  // State
  let state = {
    activeTab: 'dashboard',
    completedDays: JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED_DAYS) || '[]'),
    dayNotes: JSON.parse(localStorage.getItem(STORAGE_KEYS.DAY_NOTES) || '{}'),
    errorLog: JSON.parse(localStorage.getItem(STORAGE_KEYS.ERROR_LOG) || 'null'),
    targetMarks: JSON.parse(localStorage.getItem(STORAGE_KEYS.TARGET_MARKS) || '{"ga":12,"dm":6,"pds":7,"toc":6,"os":6,"dbms":5,"algo":4,"dl":3,"em":4,"cn":2,"coa":2,"cd":0}'),
    pomoStats: JSON.parse(localStorage.getItem(STORAGE_KEYS.POMODORO_STATS) || '{"minutes":0,"sessions":0}'),
    quizAnswers: JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_STATE) || '{}'),
    roadmapFilter: {
      phase: 'all',
      subject: 'all',
      status: 'all',
      search: ''
    },
    cheatsheetFilter: {
      subject: 'all',
      search: ''
    },
    pomoTimer: {
      mode: 'work', // work or break
      duration: 25 * 60,
      timeLeft: 25 * 60,
      isRunning: false,
      intervalId: null
    }
  };

  // Default seed error log if empty
  if (!state.errorLog || state.errorLog.length === 0) {
    state.errorLog = [
      {
        id: "err-1",
        subject: "Programming in C",
        topic: "Pointers & Post-Increment",
        question: "Expression *(p + 2) + *p++ evaluation order",
        mistakeType: "Conceptual Gap",
        actionPlan: "Post-increment p++ increments pointer p after fetching *p. Re-solve 5 pointer arithmetic questions.",
        date: "2026-11-01"
      },
      {
        id: "err-2",
        subject: "Theory of Computation",
        topic: "Minimal DFA",
        question: "Forgot to count Dead / Trap state in total minimal DFA states",
        mistakeType: "Misread Question",
        actionPlan: "Minimal DFA definition in GATE ALWAYS includes the dead state if language is incomplete without it.",
        date: "2026-11-01"
      },
      {
        id: "err-3",
        subject: "Operating Systems",
        topic: "Paging & TLB EMAT",
        question: "EMAT sequential vs parallel memory access formula",
        mistakeType: "Formula Forgot",
        actionPlan: "Sequential: t_tlb is added to both hit and miss (miss = t_tlb + 2*m). Parallel: miss = t_tlb + 2*m or Tc + 2*m depending on wording.",
        date: "2026-11-01"
      }
    ];
    saveErrorLog();
  }

  // ================= SAVE HELPERS =================
  function saveCompletedDays() {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_DAYS, JSON.stringify(state.completedDays));
  }
  function saveDayNotes() {
    localStorage.setItem(STORAGE_KEYS.DAY_NOTES, JSON.stringify(state.dayNotes));
  }
  function saveErrorLog() {
    localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify(state.errorLog));
  }
  function saveTargetMarks() {
    localStorage.setItem(STORAGE_KEYS.TARGET_MARKS, JSON.stringify(state.targetMarks));
  }
  function savePomoStats() {
    localStorage.setItem(STORAGE_KEYS.POMODORO_STATS, JSON.stringify(state.pomoStats));
  }
  function saveQuizState() {
    localStorage.setItem(STORAGE_KEYS.QUIZ_STATE, JSON.stringify(state.quizAnswers));
  }

  // ================= NOTIFICATION TOAST =================
  window.showToast = function (message, type = 'info') {
    const toast = document.createElement('div');
    const colors = {
      success: 'bg-emerald-600 text-white border-emerald-400',
      error: 'bg-rose-600 text-white border-rose-400',
      info: 'bg-blue-600 text-white border-blue-400',
      warning: 'bg-amber-600 text-white border-amber-400'
    };
    toast.className = `fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl border shadow-2xl flex items-center gap-3 text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0 ${colors[type] || colors.info}`;
    toast.innerHTML = `<span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // Confetti effect helper
  window.triggerConfetti = function () {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Sound chime using Web Audio API
  window.playChime = function (freq = 587.33) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch (e) {
      console.log('Audio not supported or blocked');
    }
  };

  // ================= TAB NAVIGATION =================
  window.switchTab = function (tabName) {
    state.activeTab = tabName;
    document.querySelectorAll('.nav-tab').forEach(el => {
      if (el.dataset.tab === tabName) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    document.querySelectorAll('.tab-content').forEach(el => {
      if (el.id === `tab-${tabName}`) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });

    // Re-render specific tab
    if (tabName === 'dashboard') renderDashboard();
    if (tabName === 'roadmap') renderRoadmap();
    if (tabName === 'syllabus') renderSyllabus();
    if (tabName === 'cheatsheet') renderCheatsheet();
    if (tabName === 'pyqs') renderPYQs();
    if (tabName === 'errorlog') renderErrorLog();
    if (tabName === 'blueprint') renderBlueprint();

    // Re-initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  // ================= COUNTDOWN TIMER =================
  function initCountdown() {
    // GATE 2027 CSE exam is expected on Feb 6, 2027 09:30 AM IST
    const targetDate = new Date('2027-02-06T09:30:00+05:30').getTime();

    function update() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.getElementById('countdown-days').innerText = '00';
        document.getElementById('countdown-hours').innerText = '00';
        document.getElementById('countdown-mins').innerText = '00';
        document.getElementById('countdown-secs').innerText = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dEl = document.getElementById('countdown-days');
      const hEl = document.getElementById('countdown-hours');
      const mEl = document.getElementById('countdown-mins');
      const sEl = document.getElementById('countdown-secs');

      if (dEl) dEl.innerText = String(days).padStart(2, '0');
      if (hEl) hEl.innerText = String(hours).padStart(2, '0');
      if (mEl) mEl.innerText = String(minutes).padStart(2, '0');
      if (sEl) sEl.innerText = String(seconds).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  // ================= MODULE 1: DASHBOARD =================
  function renderDashboard() {
    const totalDays = 90;
    const completedCount = state.completedDays.length;
    const percentage = Math.round((completedCount / totalDays) * 100);

    // Update Quick stats
    const progressPctEl = document.getElementById('dash-progress-pct');
    const progressBarEl = document.getElementById('dash-progress-bar');
    const completedDaysCountEl = document.getElementById('dash-completed-count');
    const streakCountEl = document.getElementById('dash-streak-count');
    const pomoTotalEl = document.getElementById('dash-pomo-total');

    if (progressPctEl) progressPctEl.innerText = `${percentage}%`;
    if (progressBarEl) progressBarEl.style.width = `${percentage}%`;
    if (completedDaysCountEl) completedDaysCountEl.innerText = `${completedCount} / 90 Days`;
    if (streakCountEl) streakCountEl.innerText = `${completedCount} Days Done`;
    if (pomoTotalEl) pomoTotalEl.innerText = `${Math.round(state.pomoStats.minutes / 60)} hrs`;

    // Today's Mission Determination: First incomplete day or last day
    let currentDayNum = 1;
    for (let i = 1; i <= 90; i++) {
      if (!state.completedDays.includes(i)) {
        currentDayNum = i;
        break;
      }
    }
    const todayData = window.ROADMAP_DATA.find(d => d.day === currentDayNum) || window.ROADMAP_DATA[0];
    const missionContainer = document.getElementById('dash-today-mission');

    if (missionContainer && todayData) {
      const isDone = state.completedDays.includes(todayData.day);
      missionContainer.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${todayData.tier === 1 ? 'badge-tier-1' : todayData.tier === 2 ? 'badge-tier-2' : 'badge-tier-3'}">
                Phase ${todayData.phase} • Day ${todayData.day}
              </span>
              <span class="text-sm font-semibold text-blue-400">${todayData.subject}</span>
              <span class="text-xs text-slate-400 flex items-center gap-1">
                <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${todayData.hours} Hours
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mt-1.5">${todayData.title}</h3>
          </div>
          <button onclick="window.toggleDay(${todayData.day})" 
                  class="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${isDone ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25'}">
            <i data-lucide="${isDone ? 'check-circle' : 'circle'}" class="w-4 h-4"></i>
            ${isDone ? 'Completed! (Click to undo)' : 'Mark Day as Completed'}
          </button>
        </div>

        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="glass-subtle p-4 rounded-xl">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <i data-lucide="list-checks" class="w-4 h-4 text-emerald-400"></i> Core Focus Topics
            </h4>
            <ul class="text-sm space-y-1.5 text-slate-300">
              ${todayData.topics.map(t => `<li class="flex items-start gap-2"><span class="text-blue-400 mt-0.5">•</span><span>${t}</span></li>`).join('')}
            </ul>
          </div>
          <div class="glass-subtle p-4 rounded-xl flex flex-col justify-between">
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <i data-lucide="zap" class="w-4 h-4 text-amber-400"></i> High-Yield Tip & PYQ Goal
              </h4>
              <p class="text-xs text-slate-300 leading-relaxed">${todayData.summary}</p>
              <div class="mt-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
                <i data-lucide="target" class="w-3.5 h-3.5"></i> ${todayData.pyqTarget}
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
              <a href="${todayData.resourceUrl}" target="_blank" rel="noopener noreferrer" 
                 class="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1.5 transition-colors">
                <i data-lucide="youtube" class="w-4 h-4 text-rose-400"></i> ${todayData.resourceName}
              </a>
              <button onclick="window.switchTab('roadmap')" class="text-xs text-slate-400 hover:text-white flex items-center gap-1">
                View all 90 days <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    renderMarksSimulator();
  }

  // Target Marks Calculator / Simulator
  function renderMarksSimulator() {
    const container = document.getElementById('marks-simulator-controls');
    if (!container) return;

    let totalSimulated = 0;
    container.innerHTML = '';

    window.SYLLABUS_DATA.forEach(sub => {
      const currentVal = state.targetMarks[sub.id] !== undefined ? state.targetMarks[sub.id] : Math.round(sub.avgMarks * 0.7);
      totalSimulated += currentVal;

      const item = document.createElement('div');
      item.className = 'glass-subtle p-3 rounded-xl flex flex-col gap-1.5';
      item.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-200 truncate pr-2">${sub.name}</span>
          <span class="text-xs font-mono font-bold text-blue-400" id="val-${sub.id}">${currentVal} / ${sub.avgMarks} M</span>
        </div>
        <input type="range" min="0" max="${sub.avgMarks}" value="${currentVal}" 
               class="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
               oninput="window.updateSimulatedMarks('${sub.id}', this.value, ${sub.avgMarks})" />
      `;
      container.appendChild(item);
    });

    updateSimulatorResult(totalSimulated);
  }

  window.updateSimulatedMarks = function (id, val, max) {
    const num = parseInt(val, 10);
    state.targetMarks[id] = num;
    saveTargetMarks();
    const lbl = document.getElementById(`val-${id}`);
    if (lbl) lbl.innerText = `${num} / ${max} M`;

    let total = 0;
    for (const key in state.targetMarks) {
      total += state.targetMarks[key];
    }
    updateSimulatorResult(total);
  };

  function updateSimulatorResult(total) {
    const scoreEl = document.getElementById('simulator-total-score');
    const badgeEl = document.getElementById('simulator-status-badge');
    const descEl = document.getElementById('simulator-status-desc');
    const barEl = document.getElementById('simulator-cutoff-bar');

    if (scoreEl) scoreEl.innerText = `${total}`;
    if (barEl) barEl.style.width = `${Math.min(100, (total / 60) * 100)}%`;

    if (total < 25) {
      if (badgeEl) {
        badgeEl.className = 'px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30';
        badgeEl.innerText = 'Below Cutoff ⚠️';
      }
      if (descEl) descEl.innerText = 'Score is under general cutoff (~25-28). Increase Aptitude & Discrete Math targets!';
    } else if (total >= 25 && total < 35) {
      if (badgeEl) {
        badgeEl.className = 'px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
        badgeEl.innerText = 'Qualifying Cutoff Cleared! ✅';
      }
      if (descEl) descEl.innerText = 'You will comfortably qualify GATE CSE! Safe for M.Tech admissions in state colleges/NITs.';
    } else if (total >= 35 && total < 45) {
      if (badgeEl) {
        badgeEl.className = 'px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
        badgeEl.innerText = 'Safe Rank Shield 🚀 (Top 10-15%)';
      }
      if (descEl) descEl.innerText = 'Solid score! High probability of admission into top NITs, IIITs, BITS, and PSU shortlists.';
    } else {
      if (badgeEl) {
        badgeEl.className = 'px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30';
        badgeEl.innerText = 'High Rank & IIT Territory 🌟';
      }
      if (descEl) descEl.innerText = 'Sensational! 45+ marks in GATE CSE opens direct interviews for IITs and top PSUs.';
    }
  }

  // ================= MODULE 2: 90-DAY ROADMAP =================
  function renderRoadmap() {
    const listContainer = document.getElementById('roadmap-cards-list');
    if (!listContainer) return;

    // Filter Roadmap data
    const filtered = window.ROADMAP_DATA.filter(item => {
      // Phase
      if (state.roadmapFilter.phase !== 'all' && item.phase !== parseInt(state.roadmapFilter.phase, 10)) {
        return false;
      }
      // Subject
      if (state.roadmapFilter.subject !== 'all' && item.subject !== state.roadmapFilter.subject) {
        return false;
      }
      // Status
      const isDone = state.completedDays.includes(item.day);
      if (state.roadmapFilter.status === 'completed' && !isDone) return false;
      if (state.roadmapFilter.status === 'pending' && isDone) return false;
      // Search
      if (state.roadmapFilter.search) {
        const query = state.roadmapFilter.search.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(query);
        const inSub = item.subject.toLowerCase().includes(query);
        const inTopics = item.topics.some(t => t.toLowerCase().includes(query));
        if (!inTitle && !inSub && !inTopics) return false;
      }
      return true;
    });

    document.getElementById('roadmap-filter-count').innerText = `Showing ${filtered.length} of 90 Days`;

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="glass-panel p-12 text-center text-slate-400">
          <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-3 text-slate-500"></i>
          <h4 class="text-base font-semibold text-white">No matching days found</h4>
          <p class="text-xs text-slate-400 mt-1">Try clearing filters or search keywords.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    listContainer.innerHTML = filtered.map(item => {
      const isDone = state.completedDays.includes(item.day);
      const note = state.dayNotes[item.day] || '';

      return `
        <div class="glass-panel p-5 transition-all duration-200 ${isDone ? 'border-emerald-500/30 bg-emerald-950/10' : 'hover:border-blue-500/30'}" id="roadmap-card-${item.day}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <button onclick="window.toggleDay(${item.day})" 
                      class="w-8 h-8 rounded-xl flex items-center justify-center transition-all ${isDone ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'border border-slate-600 hover:border-blue-400 text-transparent hover:text-blue-400'}">
                <i data-lucide="check" class="w-4 h-4"></i>
              </button>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-white px-2 py-0.5 rounded bg-white/10">Day ${item.day}</span>
                  <span class="text-xs font-semibold ${item.tier === 1 ? 'text-emerald-400' : item.tier === 2 ? 'text-blue-400' : 'text-amber-400'}">${item.subject}</span>
                  <span class="text-xs text-slate-400">• ${item.hours} hrs</span>
                </div>
                <h4 class="text-base font-bold text-white mt-1 ${isDone ? 'line-through text-slate-400' : ''}">${item.title}</h4>
              </div>
            </div>
            
            <div class="flex items-center gap-2 self-end sm:self-auto">
              <a href="${item.resourceUrl}" target="_blank" rel="noopener noreferrer" 
                 class="px-3 py-1.5 rounded-lg text-xs font-medium bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 flex items-center gap-1.5 transition-colors">
                <i data-lucide="play-circle" class="w-3.5 h-3.5"></i> Video Class
              </a>
              <button onclick="window.toggleDayExpand(${item.day})" 
                      class="px-3 py-1.5 rounded-lg text-xs font-medium glass-subtle hover:bg-white/10 text-slate-300 flex items-center gap-1">
                Details <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform" id="expand-icon-${item.day}"></i>
              </button>
            </div>
          </div>

          <!-- Expandable Details -->
          <div class="hidden mt-4 pt-4 border-t border-white/5 space-y-3" id="expand-body-${item.day}">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="glass-subtle p-3 rounded-xl">
                <p class="text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <i data-lucide="book-open" class="w-3.5 h-3.5 text-blue-400"></i> What to study:
                </p>
                <ul class="text-xs text-slate-400 space-y-1">
                  ${item.topics.map(t => `<li>• ${t}</li>`).join('')}
                </ul>
              </div>

              <div class="glass-subtle p-3 rounded-xl flex flex-col justify-between">
                <div>
                  <p class="text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
                    <i data-lucide="target" class="w-3.5 h-3.5"></i> Target PYQs:
                  </p>
                  <p class="text-xs text-slate-300">${item.pyqTarget}</p>
                </div>
                <div class="mt-2 text-xs text-slate-400 italic">
                  Tip: "${item.summary}"
                </div>
              </div>
            </div>

            <!-- Personal Note for this Day -->
            <div class="mt-2">
              <div class="flex items-center justify-between mb-1">
                <label class="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <i data-lucide="edit-3" class="w-3 h-3"></i> My Revision Note for Day ${item.day}:
                </label>
                <span class="text-[11px] text-slate-500">Auto-saved</span>
              </div>
              <textarea onchange="window.saveDayNote(${item.day}, this.value)" 
                        placeholder="Write formula tricky notes, doubts, or questions solved today..."
                        class="w-full text-xs bg-slate-900/60 border border-white/10 rounded-xl p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500">${note}</textarea>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  window.toggleDay = function (dayNum) {
    const idx = state.completedDays.indexOf(dayNum);
    if (idx > -1) {
      state.completedDays.splice(idx, 1);
      window.showToast(`Day ${dayNum} marked incomplete`, 'info');
    } else {
      state.completedDays.push(dayNum);
      window.showToast(`🎉 Shabash! Day ${dayNum} completed!`, 'success');
      window.triggerConfetti();
      window.playChime(659.25);
    }
    saveCompletedDays();
    renderDashboard();
    renderRoadmap();
  };

  window.toggleDayExpand = function (dayNum) {
    const body = document.getElementById(`expand-body-${dayNum}`);
    const icon = document.getElementById(`expand-icon-${dayNum}`);
    if (body) {
      const isHidden = body.classList.contains('hidden');
      if (isHidden) {
        body.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      } else {
        body.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
      }
    }
  };

  window.saveDayNote = function (dayNum, text) {
    state.dayNotes[dayNum] = text.trim();
    saveDayNotes();
    window.showToast(`Note for Day ${dayNum} saved!`, 'success');
  };

  window.filterRoadmap = function (key, value) {
    state.roadmapFilter[key] = value;
    renderRoadmap();
  };

  // Populate Subject options in roadmap filter
  function initRoadmapFilters() {
    const sel = document.getElementById('roadmap-subject-select');
    if (!sel) return;
    const subjects = [...new Set(window.ROADMAP_DATA.map(d => d.subject))];
    subjects.forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub;
      opt.innerText = sub;
      sel.appendChild(opt);
    });
  }

  // ================= MODULE 3: SYLLABUS & WEIGHTAGE MATRIX =================
  function renderSyllabus() {
    const container = document.getElementById('syllabus-cards-container');
    if (!container) return;

    container.innerHTML = window.SYLLABUS_DATA.map(sub => {
      return `
        <div class="glass-panel p-6 border-l-4" style="border-left-color: ${sub.color};">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${sub.tier === 1 ? 'badge-tier-1' : sub.tier === 2 ? 'badge-tier-2' : 'badge-tier-3'}">
                  ${sub.tierLabel}
                </span>
                <span class="text-xs text-slate-400">Difficulty: ${sub.difficulty}</span>
              </div>
              <h3 class="text-xl font-bold text-white mt-1">${sub.name}</h3>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="text-right">
                <span class="text-2xl font-black text-blue-400">${sub.avgMarks}</span>
                <span class="text-xs text-slate-400 block">Avg Marks in GATE</span>
              </div>
              <div class="text-right border-l border-white/10 pl-4">
                <span class="text-sm font-bold text-emerald-400">${sub.estimatedHours}h</span>
                <span class="text-xs text-slate-400 block">Study Hours</span>
              </div>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="glass-subtle p-4 rounded-xl">
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-4 h-4"></i> High-Yield Must-Do Topics (Easy Kills)
              </h4>
              <ul class="text-xs text-slate-300 space-y-1.5">
                ${sub.mustDoTopics.map(t => `<li class="flex items-start gap-2"><span class="text-emerald-400">✓</span><span>${t}</span></li>`).join('')}
              </ul>
            </div>

            <div class="glass-subtle p-4 rounded-xl">
              <h4 class="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                <i data-lucide="alert-octagon" class="w-4 h-4"></i> Skip / Avoid If Short On Time
              </h4>
              <ul class="text-xs text-slate-400 space-y-1.5">
                ${sub.avoidTopics.map(t => `<li class="flex items-start gap-2"><span class="text-rose-400">✗</span><span>${t}</span></li>`).join('')}
              </ul>
              <div class="mt-4 pt-3 border-t border-white/10">
                <p class="text-xs text-amber-300 leading-relaxed font-medium">
                  💡 Strategy: ${sub.strategyAdvice}
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // ================= MODULE 4: REVISION VAULT & CHEAT SHEETS =================
  function renderCheatsheet() {
    const container = document.getElementById('cheatsheet-cards-container');
    if (!container) return;

    const filtered = window.CHEATSHEETS_DATA.filter(item => {
      if (state.cheatsheetFilter.subject !== 'all' && item.subject !== state.cheatsheetFilter.subject) {
        return false;
      }
      if (state.cheatsheetFilter.search) {
        const query = state.cheatsheetFilter.search.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(query);
        const inDesc = item.description.toLowerCase().includes(query);
        const inCat = item.category.toLowerCase().includes(query);
        if (!inTitle && !inDesc && !inCat) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-panel p-12 text-center text-slate-400">
          <i data-lucide="file-question" class="w-12 h-12 mx-auto mb-3 text-slate-500"></i>
          <h4 class="text-base font-semibold text-white">No cheat sheets match your search</h4>
          <p class="text-xs text-slate-400 mt-1">Try searching for 'EMAT', 'Euler', 'Master Theorem', 'Decidability', etc.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map(item => {
      let contentHtml = '';

      if (item.type === 'table') {
        contentHtml = `
          <div class="overflow-x-auto mt-4 rounded-xl border border-white/10">
            <table class="w-full text-xs text-left">
              <thead class="bg-slate-800/80 text-slate-300 uppercase font-semibold">
                <tr>
                  ${item.headers.map(h => `<th class="px-4 py-3 border-b border-white/10">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                ${item.rows.map(r => `
                  <tr class="hover:bg-white/5 transition-colors">
                    ${r.map((c, i) => `
                      <td class="px-4 py-2.5 ${i === 0 ? 'font-medium text-white' : c === 'Yes' || c === 'D' ? 'text-emerald-400 font-semibold' : c === 'No' || c === 'U' ? 'text-rose-400 font-semibold' : 'text-slate-300 font-mono'}">${c}</td>
                    `).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          ${item.goldenNotes ? `
            <div class="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              <strong>💡 Golden Revision Note:</strong> ${item.goldenNotes}
            </div>
          ` : ''}
        `;
      } else if (item.type === 'cards') {
        contentHtml = `
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            ${item.cards.map(c => `
              <div class="glass-subtle p-4 rounded-xl flex flex-col justify-between">
                <div>
                  <h4 class="text-sm font-bold text-white mb-1.5 flex items-center justify-between">
                    <span>${c.name}</span>
                    <button onclick="window.copyFormulaText('${c.name}', \`${c.formula.replace(/`/g, '\\`')}\`)" 
                            class="text-xs text-slate-400 hover:text-blue-400 transition-colors" title="Copy formula">
                      <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                    </button>
                  </h4>
                  <pre class="bg-black/40 p-3 rounded-lg text-xs font-mono text-emerald-300 whitespace-pre-wrap overflow-x-auto border border-white/5">${c.formula}</pre>
                </div>
                ${c.tip ? `<p class="mt-2.5 text-[11px] text-slate-400 italic">💡 ${c.tip}</p>` : ''}
              </div>
            `).join('')}
          </div>
        `;
      }

      return `
        <div class="glass-panel p-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div>
              <span class="text-xs font-bold text-blue-400 uppercase tracking-wider">${item.category}</span>
              <h3 class="text-lg font-bold text-white">${item.title}</h3>
            </div>
            <p class="text-xs text-slate-400 max-w-md">${item.description}</p>
          </div>
          ${contentHtml}
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  window.copyFormulaText = function (name, formula) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formula);
      window.showToast(`Copied "${name}" formula to clipboard!`, 'success');
    }
  };

  window.filterCheatsheet = function (key, value) {
    state.cheatsheetFilter[key] = value;
    renderCheatsheet();
  };

  // ================= MODULE 5: GATE PYQ & MOCK TEST ENGINE =================
  let currentQuizFilter = 'all';

  function renderPYQs() {
    const container = document.getElementById('pyq-questions-container');
    if (!container) return;

    const filtered = window.PYQ_QUESTIONS_DATA.filter(q => {
      if (currentQuizFilter !== 'all' && q.subject !== currentQuizFilter) return false;
      return true;
    });

    // Score calculation
    let correctCount = 0;
    let wrongCount = 0;
    let attemptedCount = 0;
    let totalMarksEarned = 0;

    filtered.forEach(q => {
      const ans = state.quizAnswers[q.id];
      if (ans !== undefined) {
        attemptedCount++;
        const isCorrect = checkAnswerCorrect(q, ans);
        if (isCorrect) {
          correctCount++;
          totalMarksEarned += q.marks;
        } else {
          wrongCount++;
          totalMarksEarned -= (q.negative || 0);
        }
      }
    });

    const scoreSummaryEl = document.getElementById('pyq-score-summary');
    if (scoreSummaryEl) {
      scoreSummaryEl.innerHTML = `
        <div class="flex items-center gap-6">
          <div>
            <span class="text-xs text-slate-400 block">Score</span>
            <span class="text-xl font-bold ${totalMarksEarned >= 0 ? 'text-emerald-400' : 'text-rose-400'}">${totalMarksEarned.toFixed(2)} Marks</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">Accuracy</span>
            <span class="text-xl font-bold text-white">${attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0}%</span>
          </div>
          <div>
            <span class="text-xs text-slate-400 block">Attempted</span>
            <span class="text-xl font-bold text-blue-400">${attemptedCount} / ${filtered.length}</span>
          </div>
        </div>
      `;
    }

    container.innerHTML = filtered.map((q, qIndex) => {
      const userAnswer = state.quizAnswers[q.id];
      const isAttempted = userAnswer !== undefined;
      const isCorrect = isAttempted && checkAnswerCorrect(q, userAnswer);

      let optionsHtml = '';

      if (q.type === 'MCQ') {
        optionsHtml = `
          <div class="space-y-2 mt-4">
            ${q.options.map((opt, optIdx) => {
              let optClass = 'glass-subtle hover:bg-white/10 border-white/10';
              if (isAttempted) {
                if (optIdx === q.correctAnswer) {
                  optClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold';
                } else if (optIdx === userAnswer) {
                  optClass = 'bg-rose-500/20 border-rose-500 text-rose-300 font-semibold';
                }
              }

              return `
                <button onclick="window.submitMCQ('${q.id}', ${optIdx})" 
                        class="w-full text-left p-3.5 rounded-xl border text-sm transition-all flex items-center justify-between ${optClass}">
                  <span class="flex items-center gap-3">
                    <span class="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs">${String.fromCharCode(65 + optIdx)}</span>
                    <span>${opt}</span>
                  </span>
                  ${isAttempted && optIdx === q.correctAnswer ? '<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i>' : ''}
                  ${isAttempted && optIdx === userAnswer && optIdx !== q.correctAnswer ? '<i data-lucide="x" class="w-4 h-4 text-rose-400"></i>' : ''}
                </button>
              `;
            }).join('')}
          </div>
        `;
      } else if (q.type === 'NAT') {
        optionsHtml = `
          <div class="mt-4 flex items-center gap-3">
            <input type="number" id="nat-input-${q.id}" value="${isAttempted ? userAnswer : ''}" 
                   placeholder="Enter numerical answer" 
                   class="bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono w-60" />
            <button onclick="window.submitNAT('${q.id}')" 
                    class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs">
              Check Answer
            </button>
            ${isAttempted ? `
              <span class="text-xs font-semibold px-3 py-1.5 rounded-lg ${isCorrect ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}">
                ${isCorrect ? 'Correct! (Ans: ' + q.correctAnswer + ')' : 'Incorrect! Correct Ans: ' + q.correctAnswer}
              </span>
            ` : ''}
          </div>
        `;
      } else if (q.type === 'MSQ') {
        const selectedArr = Array.isArray(userAnswer) ? userAnswer : [];
        optionsHtml = `
          <div class="space-y-2 mt-4">
            <p class="text-[11px] text-amber-300 font-medium">⚠️ MSQ: Multiple options may be correct. No partial marking.</p>
            ${q.options.map((opt, optIdx) => {
              const isChecked = selectedArr.includes(optIdx);
              return `
                <label class="w-full text-left p-3 rounded-xl border border-white/10 text-sm transition-all flex items-center gap-3 cursor-pointer glass-subtle hover:bg-white/10">
                  <input type="checkbox" onchange="window.toggleMSQOption('${q.id}', ${optIdx})" 
                         ${isChecked ? 'checked' : ''} 
                         class="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-800 border-white/20" />
                  <span>${String.fromCharCode(65 + optIdx)}. ${opt}</span>
                </label>
              `;
            }).join('')}
            <div class="pt-2 flex items-center gap-3">
              <button onclick="window.submitMSQ('${q.id}')" 
                      class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs">
                Submit MSQ Options
              </button>
              ${isAttempted ? `
                <span class="text-xs font-semibold px-3 py-1.5 rounded-lg ${isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">
                  ${isCorrect ? 'All Correct!' : 'Incorrect Combination'}
                </span>
              ` : ''}
            </div>
          </div>
        `;
      }

      return `
        <div class="glass-panel p-6 ${isAttempted ? (isCorrect ? 'border-emerald-500/30' : 'border-rose-500/30') : ''}">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-white/10 text-white">${q.year}</span>
              <span class="text-xs font-semibold text-blue-400">${q.subject}</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold ${q.type === 'MCQ' ? 'bg-blue-500/20 text-blue-300' : q.type === 'NAT' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-purple-500/20 text-purple-300'}">${q.type}</span>
            </div>
            <div class="text-xs text-slate-400">
              Marks: <strong class="text-white">+${q.marks}</strong> ${q.negative ? `| Negative: <strong class="text-rose-400">-${q.negative}</strong>` : '(No Negative)'}
            </div>
          </div>

          <div class="mt-4 text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">${q.question}</div>

          ${optionsHtml}

          <!-- Explanation Accordion (Visible if attempted) -->
          ${isAttempted ? `
            <div class="mt-5 pt-4 border-t border-white/10 space-y-3">
              <div class="p-4 rounded-xl bg-slate-900/80 border border-white/10">
                <h5 class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                  <i data-lucide="check-circle" class="w-4 h-4"></i> Detailed GATE Official Solution
                </h5>
                <pre class="text-xs text-slate-300 font-sans whitespace-pre-wrap leading-relaxed">${q.explanation}</pre>
                ${q.trapNote ? `
                  <div class="mt-3 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-start gap-2">
                    <i data-lucide="alert-triangle" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5"></i>
                    <span><strong>Trap Alert:</strong> ${q.trapNote}</span>
                  </div>
                ` : ''}
              </div>

              <div class="flex justify-end">
                <button onclick="window.sendToErrorLog('${q.id}')" 
                        class="px-4 py-2 rounded-xl text-xs font-medium glass-subtle hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-2 transition-colors">
                  <i data-lucide="bookmark-plus" class="w-4 h-4"></i> Add to Mistake Notebook
                </button>
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  function checkAnswerCorrect(q, ans) {
    if (q.type === 'MCQ') {
      return ans === q.correctAnswer;
    } else if (q.type === 'NAT') {
      const numAns = parseFloat(ans);
      const tol = q.tolerance || 0;
      return Math.abs(numAns - q.correctAnswer) <= tol;
    } else if (q.type === 'MSQ') {
      if (!Array.isArray(ans)) return false;
      if (ans.length !== q.correctAnswer.length) return false;
      const sortedAns = [...ans].sort();
      const sortedCorrect = [...q.correctAnswer].sort();
      return sortedAns.every((val, index) => val === sortedCorrect[index]);
    }
    return false;
  }

  window.submitMCQ = function (qId, optionIdx) {
    state.quizAnswers[qId] = optionIdx;
    saveQuizState();
    const q = window.PYQ_QUESTIONS_DATA.find(x => x.id === qId);
    if (q) {
      if (optionIdx === q.correctAnswer) {
        window.showToast('✅ Correct Answer! + ' + q.marks + ' Marks', 'success');
        window.triggerConfetti();
        window.playChime(784);
      } else {
        window.showToast(`❌ Incorrect! - ${q.negative} Marks`, 'error');
        window.playChime(330);
      }
    }
    renderPYQs();
  };

  window.submitNAT = function (qId) {
    const input = document.getElementById(`nat-input-${qId}`);
    if (!input || input.value === '') {
      window.showToast('Please enter a numerical value first', 'warning');
      return;
    }
    const val = parseFloat(input.value);
    state.quizAnswers[qId] = val;
    saveQuizState();
    const q = window.PYQ_QUESTIONS_DATA.find(x => x.id === qId);
    if (q) {
      if (Math.abs(val - q.correctAnswer) <= (q.tolerance || 0)) {
        window.showToast('✅ Exact Answer! + ' + q.marks + ' Marks', 'success');
        window.triggerConfetti();
        window.playChime(784);
      } else {
        window.showToast(`❌ Wrong answer! Correct is ${q.correctAnswer}`, 'error');
        window.playChime(330);
      }
    }
    renderPYQs();
  };

  let msqSelections = {};
  window.toggleMSQOption = function (qId, optIdx) {
    if (!msqSelections[qId]) msqSelections[qId] = [];
    const idx = msqSelections[qId].indexOf(optIdx);
    if (idx > -1) {
      msqSelections[qId].splice(idx, 1);
    } else {
      msqSelections[qId].push(optIdx);
    }
  };

  window.submitMSQ = function (qId) {
    const selections = msqSelections[qId] || [];
    if (selections.length === 0) {
      window.showToast('Select at least one option before submitting', 'warning');
      return;
    }
    state.quizAnswers[qId] = selections;
    saveQuizState();
    const q = window.PYQ_QUESTIONS_DATA.find(x => x.id === qId);
    if (checkAnswerCorrect(q, selections)) {
      window.showToast('✅ All correct MSQ options selected! + ' + q.marks + ' Marks', 'success');
      window.triggerConfetti();
      window.playChime(784);
    } else {
      window.showToast('❌ Missed one or selected wrong option! (0 Marks)', 'error');
      window.playChime(330);
    }
    renderPYQs();
  };

  window.filterQuizSubject = function (sub) {
    currentQuizFilter = sub;
    renderPYQs();
  };

  window.sendToErrorLog = function (qId) {
    const q = window.PYQ_QUESTIONS_DATA.find(x => x.id === qId);
    if (!q) return;

    // Check if already in error log
    const existing = state.errorLog.find(e => e.id === `err-${qId}`);
    if (existing) {
      window.showToast('Question is already in Mistake Notebook!', 'info');
      return;
    }

    const newEntry = {
      id: `err-${qId}`,
      subject: q.subject,
      topic: `${q.year} - ${q.type}`,
      question: q.question.substring(0, 140) + '...',
      mistakeType: 'Conceptual Gap',
      actionPlan: q.trapNote || 'Review official solution and re-solve without looking at answer.',
      date: new Date().toISOString().split('T')[0]
    };

    state.errorLog.unshift(newEntry);
    saveErrorLog();
    window.showToast('Added to Mistake Notebook!', 'success');
  };

  // ================= MODULE 6: MISTAKE NOTEBOOK (ERROR LOG) =================
  let currentErrorFilter = 'all';

  function renderErrorLog() {
    const container = document.getElementById('error-log-cards-container');
    if (!container) return;

    const filtered = state.errorLog.filter(item => {
      if (currentErrorFilter !== 'all' && item.mistakeType !== currentErrorFilter) {
        return false;
      }
      return true;
    });

    const countEl = document.getElementById('error-log-count');
    if (countEl) countEl.innerText = `${filtered.length} Mistakes Recorded`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-panel p-12 text-center text-slate-400">
          <i data-lucide="smile" class="w-12 h-12 mx-auto mb-3 text-emerald-400"></i>
          <h4 class="text-base font-semibold text-white">No mistakes in this category</h4>
          <p class="text-xs text-slate-400 mt-1">Keep solving PYQs and add any tricky questions here.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    container.innerHTML = filtered.map(item => {
      const typeColors = {
        'Calculation Error': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        'Conceptual Gap': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
        'Misread Question': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        'Formula Forgot': 'bg-purple-500/20 text-purple-300 border-purple-500/30'
      };

      return `
        <div class="glass-panel p-5 relative group" id="error-card-${item.id}">
          <div class="flex items-center justify-between pb-3 border-b border-white/10">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded text-xs font-bold ${typeColors[item.mistakeType] || 'bg-white/10 text-white'}">
                ${item.mistakeType}
              </span>
              <span class="text-xs font-semibold text-blue-400">${item.subject}</span>
              <span class="text-xs text-slate-500">• ${item.topic}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[11px] text-slate-500">${item.date}</span>
              <button onclick="window.deleteErrorLog('${item.id}')" 
                      class="text-slate-500 hover:text-rose-400 transition-colors p-1" title="Delete entry">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>

          <div class="mt-3">
            <h5 class="text-xs font-semibold text-slate-400">Question / Problem Statement:</h5>
            <p class="text-xs text-slate-200 mt-1 font-mono bg-black/30 p-2.5 rounded-lg border border-white/5">${item.question}</p>
          </div>

          <div class="mt-3 pt-3 border-t border-white/5">
            <h5 class="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <i data-lucide="shield-alert" class="w-3.5 h-3.5"></i> What to do to avoid this in exam:
            </h5>
            <p class="text-xs text-slate-300 mt-1">${item.actionPlan}</p>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  window.filterErrorLog = function (type) {
    currentErrorFilter = type;
    renderErrorLog();
  };

  window.deleteErrorLog = function (id) {
    state.errorLog = state.errorLog.filter(x => x.id !== id);
    saveErrorLog();
    window.showToast('Mistake record deleted', 'info');
    renderErrorLog();
  };

  window.openAddMistakeModal = function () {
    const modal = document.getElementById('add-mistake-modal');
    if (modal) modal.classList.remove('hidden');
  };

  window.closeAddMistakeModal = function () {
    const modal = document.getElementById('add-mistake-modal');
    if (modal) modal.classList.add('hidden');
  };

  window.saveCustomMistake = function () {
    const sub = document.getElementById('mistake-sub-input').value;
    const topic = document.getElementById('mistake-topic-input').value.trim();
    const qText = document.getElementById('mistake-q-input').value.trim();
    const type = document.getElementById('mistake-type-input').value;
    const plan = document.getElementById('mistake-plan-input').value.trim();

    if (!topic || !qText || !plan) {
      window.showToast('Please fill all required fields', 'warning');
      return;
    }

    const newEntry = {
      id: `err-${Date.now()}`,
      subject: sub,
      topic: topic,
      question: qText,
      mistakeType: type,
      actionPlan: plan,
      date: new Date().toISOString().split('T')[0]
    };

    state.errorLog.unshift(newEntry);
    saveErrorLog();
    window.closeAddMistakeModal();
    window.showToast('New mistake logged in notebook!', 'success');
    renderErrorLog();
  };

  // ================= MODULE 7: STRATEGY BLUEPRINT & RESOURCES =================
  function renderBlueprint() {
    const container = document.getElementById('blueprint-content-container');
    if (!container) return;

    const res = window.RESOURCES_DATA;
    container.innerHTML = `
      <!-- Golden Rules -->
      <div class="glass-panel p-6">
        <h3 class="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <i data-lucide="compass" class="w-5 h-5 text-blue-400"></i> ${res.strategyGuide.title}
        </h3>
        <p class="text-xs text-slate-300 mb-6 italic">${res.strategyGuide.subtitle}</p>

        <!-- Cutoff comparison table -->
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Official GATE CSE Cutoff Truth Matrix:</h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          ${res.strategyGuide.cutoffReality.map(c => `
            <div class="glass-subtle p-3.5 rounded-xl border border-white/10 text-center">
              <span class="text-xs font-bold text-slate-300 block">${c.category}</span>
              <span class="text-lg font-black text-amber-400 my-1 block">${c.avgCutoff}</span>
              <span class="text-[11px] text-emerald-400 font-semibold block">Safe Target: ${c.safeTarget}</span>
            </div>
          `).join('')}
        </div>

        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">5 Golden Rules for 3-Month Qualify:</h4>
        <div class="space-y-3">
          ${res.strategyGuide.goldenRules.map(r => `
            <div class="glass-subtle p-4 rounded-xl">
              <h5 class="text-sm font-bold text-blue-400 mb-1">${r.rule}</h5>
              <p class="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">${r.detail}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Ideal Daily Timetable -->
      <div class="glass-panel p-6 mt-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i data-lucide="clock" class="w-5 h-5 text-emerald-400"></i> 4-5 Hour Daily Timetable for Working / College Aspirants
        </h3>
        <div class="space-y-3">
          ${res.strategyGuide.dailyTimetable.map(t => `
            <div class="glass-subtle p-3.5 rounded-xl flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <i data-lucide="${t.icon || 'circle'}" class="w-4 h-4"></i>
              </div>
              <div>
                <span class="text-xs font-bold text-emerald-400">${t.time}</span>
                <p class="text-xs text-slate-200 mt-0.5">${t.task}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Top Free Channels & Resources -->
      <div class="glass-panel p-6 mt-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i data-lucide="youtube" class="w-5 h-5 text-rose-500"></i> Best Free Verified Channels & Sources
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${res.channels.map(ch => `
            <div class="glass-subtle p-4 rounded-xl flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold text-white">${ch.name}</h4>
                  <a href="${ch.youtubeSearch}" target="_blank" rel="noopener noreferrer" 
                     class="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold">
                    Open <i data-lucide="external-link" class="w-3 h-3"></i>
                  </a>
                </div>
                <p class="text-xs text-blue-400 font-medium mt-1">${ch.specialty}</p>
                <p class="text-xs text-slate-300 mt-2 leading-relaxed">${ch.description}</p>
              </div>
              <div class="mt-3 pt-2 border-t border-white/5 text-[11px] text-slate-400 italic">
                Best for: ${ch.recommendedFor}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // ================= POMODORO TIMER =================
  window.setPomodoroDuration = function (minutes, mode = 'work') {
    state.pomoTimer.mode = mode;
    state.pomoTimer.duration = minutes * 60;
    state.pomoTimer.timeLeft = minutes * 60;
    state.pomoTimer.isRunning = false;
    if (state.pomoTimer.intervalId) {
      clearInterval(state.pomoTimer.intervalId);
      state.pomoTimer.intervalId = null;
    }
    updatePomodoroDisplay();
  };

  window.togglePomodoro = function () {
    const btn = document.getElementById('pomo-toggle-btn');
    const ring = document.getElementById('pomo-card');

    if (state.pomoTimer.isRunning) {
      // Pause
      clearInterval(state.pomoTimer.intervalId);
      state.pomoTimer.intervalId = null;
      state.pomoTimer.isRunning = false;
      if (btn) btn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i> Resume Study';
      if (ring) ring.classList.remove('timer-running');
    } else {
      // Start
      state.pomoTimer.isRunning = true;
      if (btn) btn.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i> Pause Focus';
      if (ring) ring.classList.add('timer-running');

      state.pomoTimer.intervalId = setInterval(() => {
        state.pomoTimer.timeLeft--;
        updatePomodoroDisplay();

        if (state.pomoTimer.timeLeft <= 0) {
          clearInterval(state.pomoTimer.intervalId);
          state.pomoTimer.intervalId = null;
          state.pomoTimer.isRunning = false;
          if (ring) ring.classList.remove('timer-running');

          window.playChime(880);
          window.triggerConfetti();

          if (state.pomoTimer.mode === 'work') {
            const minutesDone = Math.round(state.pomoTimer.duration / 60);
            state.pomoStats.minutes += minutesDone;
            state.pomoStats.sessions += 1;
            savePomoStats();
            window.showToast(`🎯 Great focus session! ${minutesDone} mins logged. Time for a 5-min break!`, 'success');
            window.setPomodoroDuration(5, 'break');
          } else {
            window.showToast('☕ Break over! Ready for the next deep work session?', 'info');
            window.setPomodoroDuration(25, 'work');
          }

          renderDashboard();
        }
      }, 1000);
    }
    if (window.lucide) window.lucide.createIcons();
  };

  window.resetPomodoro = function () {
    if (state.pomoTimer.intervalId) {
      clearInterval(state.pomoTimer.intervalId);
      state.pomoTimer.intervalId = null;
    }
    state.pomoTimer.isRunning = false;
    state.pomoTimer.timeLeft = state.pomoTimer.duration;
    const ring = document.getElementById('pomo-card');
    if (ring) ring.classList.remove('timer-running');
    const btn = document.getElementById('pomo-toggle-btn');
    if (btn) btn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i> Start Focus';
    updatePomodoroDisplay();
    if (window.lucide) window.lucide.createIcons();
  };

  function updatePomodoroDisplay() {
    const mins = Math.floor(state.pomoTimer.timeLeft / 60);
    const secs = state.pomoTimer.timeLeft % 60;
    const displayEl = document.getElementById('pomo-time-display');
    const labelEl = document.getElementById('pomo-mode-label');

    if (displayEl) {
      displayEl.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    if (labelEl) {
      labelEl.innerText = state.pomoTimer.mode === 'work' ? 'Deep Work Session' : 'Relaxing Break';
    }
  }

  // ================= DATA EXPORT / IMPORT / RESET =================
  window.exportAllData = function () {
    const exportObject = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      completedDays: state.completedDays,
      dayNotes: state.dayNotes,
      errorLog: state.errorLog,
      targetMarks: state.targetMarks,
      pomoStats: state.pomoStats,
      quizAnswers: state.quizAnswers
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObject, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `gate_cse_2027_prep_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    window.showToast('Backup JSON downloaded successfully!', 'success');
  };

  window.importAllData = function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.completedDays) state.completedDays = imported.completedDays;
        if (imported.dayNotes) state.dayNotes = imported.dayNotes;
        if (imported.errorLog) state.errorLog = imported.errorLog;
        if (imported.targetMarks) state.targetMarks = imported.targetMarks;
        if (imported.pomoStats) state.pomoStats = imported.pomoStats;
        if (imported.quizAnswers) state.quizAnswers = imported.quizAnswers;

        saveCompletedDays();
        saveDayNotes();
        saveErrorLog();
        saveTargetMarks();
        savePomoStats();
        saveQuizState();

        window.showToast('Progress and Error Log successfully imported!', 'success');
        window.switchTab(state.activeTab);
      } catch (err) {
        window.showToast('Invalid backup file', 'error');
      }
    };
    reader.readAsText(file);
  };

  window.resetAllData = function () {
    if (confirm('Bhai kya tum sach me sara progress aur error log reset karna chahte ho?')) {
      localStorage.clear();
      state.completedDays = [];
      state.dayNotes = {};
      state.errorLog = [];
      state.quizAnswers = {};
      state.pomoStats = { minutes: 0, sessions: 0 };
      window.showToast('Sara data reset ho gaya. Fresh start!', 'info');
      setTimeout(() => location.reload(), 800);
    }
  };

  // ================= APP INITIALIZATION =================
  document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initRoadmapFilters();
    updatePomodoroDisplay();
    window.switchTab('dashboard');
  });

})();

