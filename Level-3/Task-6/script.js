/* ======================== */
/* SIDEBAR NAVIGATION       */
/* ======================== */

const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    const target = this.getAttribute("data-section");
    sections.forEach((s) => s.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

/* ======================== */
/* DARK MODE                */
/* ======================== */

let darkModeOn = false;

function applyDarkMode(state) {
  darkModeOn = state;
  document.body.classList.toggle("dark-mode", state);
  const settingsToggle = document.getElementById("darkToggleSetting");
  if (settingsToggle) settingsToggle.checked = state;
}

document
  .getElementById("darkModeToggle")
  .addEventListener("click", () => applyDarkMode(!darkModeOn));
document.querySelectorAll(".dark-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyDarkMode(!darkModeOn));
});

const darkToggleSetting = document.getElementById("darkToggleSetting");
if (darkToggleSetting) {
  darkToggleSetting.addEventListener("change", function () {
    applyDarkMode(this.checked);
  });
}

/* ======================== */
/* BACKGROUND COLOR         */
/* ======================== */

const colors = [
  "#e3e8ed",
  "#fef3c7",
  "#d1fae5",
  "#fee2e2",
  "#e0f2fe",
  "#ede9fe",
];

document.getElementById("colorChangeBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

function setBg(color) {
  document.body.style.backgroundColor = color;
}
function changeFontSize(size) {
  document.body.style.fontSize = size;
}

/* ======================== */
/* QUICK TASK MANAGER       */
/* ======================== */

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskPriority = document.getElementById("taskPriority");
const pendingList = document.getElementById("pendingList");

if (addTaskBtn) {
  addTaskBtn.addEventListener("click", addQuickTask);
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addQuickTask();
  });
}

function addQuickTask() {
  const text = taskInput.value.trim();
  if (!text) {
    taskInput.style.borderColor = "#f87171";
    setTimeout(() => (taskInput.style.borderColor = "#cbd5e1"), 1500);
    return;
  }
  const priority = taskPriority.value;
  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <span class="priority-dot ${priority}"></span>
    <span class="task-text">${text}</span>
    <button class="complete-btn" onclick="completeTask(this)">✔</button>
  `;
  pendingList.appendChild(li);
  taskInput.value = "";
}

function completeTask(btn) {
  const li = btn.parentElement;
  li.classList.add("completed");
  btn.remove();
  document.getElementById("completedList").appendChild(li);
  updateCompletedCount();
}

function updateCompletedCount() {
  const countEl = document.querySelector(".completed-count");
  if (countEl) {
    const count = document.getElementById("completedList").children.length;
    countEl.textContent = `${count} task${count !== 1 ? "s" : ""} completed today 🎉`;
  }
}

/* ======================== */
/* TIPS ROTATOR             */
/* ======================== */

const tips = [
  '"Break your goals into small daily actions. Consistency beats intensity every time."',
  '"Focus on progress, not perfection. Every small step counts."',
  '"The best time to start was yesterday. The second best time is now."',
  '"One task at a time. Deep focus beats multitasking every time."',
  '"Review your goals every morning. What you measure, you improve."',
  '"Done is better than perfect. Ship it, then refine it."',
  '"Protect your focus hours like a meeting — block them in your calendar."',
];

const newTipBtn = document.getElementById("newTipBtn");
const tipText = document.getElementById("tipText");
let lastTipIndex = 0;

if (newTipBtn && tipText) {
  newTipBtn.addEventListener("click", () => {
    let index;
    do {
      index = Math.floor(Math.random() * tips.length);
    } while (index === lastTipIndex);
    lastTipIndex = index;
    tipText.style.transition = "opacity 0.2s";
    tipText.style.opacity = "0";
    setTimeout(() => {
      tipText.textContent = tips[index];
      tipText.style.opacity = "1";
    }, 200);
  });
}

/* ======================== */
/* SETTINGS SAVE PROFILE    */
/* ======================== */

const saveProfileBtn = document.getElementById("saveProfileBtn");
if (saveProfileBtn) {
  saveProfileBtn.addEventListener("click", () => {
    saveProfileBtn.textContent = "✅ Saved!";
    setTimeout(() => (saveProfileBtn.textContent = "💾 Save Profile"), 2000);
  });
}

/* ======================== */
/* API — ZENQUOTES          */
/* ======================== */

const FALLBACK_QUOTES = [
  { q: "The secret of getting ahead is getting started.", a: "Mark Twain" },
  { q: "It always seems impossible until it's done.", a: "Nelson Mandela" },
  {
    q: "Don't watch the clock; do what it does. Keep going.",
    a: "Sam Levenson",
  },
  {
    q: "The way to get started is to quit talking and begin doing.",
    a: "Walt Disney",
  },
  {
    q: "You don't have to be great to start, but you have to start to be great.",
    a: "Zig Ziglar",
  },
  { q: "Focus on being productive instead of busy.", a: "Tim Ferriss" },
  { q: "Action is the foundational key to all success.", a: "Pablo Picasso" },
  {
    q: "Small daily improvements over time lead to stunning results.",
    a: "Robin Sharma",
  },
  { q: "Either you run the day or the day runs you.", a: "Jim Rohn" },
  {
    q: "Productivity is never an accident. It is always the result of a commitment to excellence.",
    a: "Paul J. Meyer",
  },
  {
    q: "Your time is limited, don't waste it living someone else's life.",
    a: "Steve Jobs",
  },
  {
    q: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    a: "Stephen Covey",
  },
  { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
  {
    q: "Start where you are. Use what you have. Do what you can.",
    a: "Arthur Ashe",
  },
  {
    q: "Success is the sum of small efforts, repeated day in and day out.",
    a: "Robert Collier",
  },
  { q: "Done is better than perfect.", a: "Sheryl Sandberg" },
  {
    q: "Your future is created by what you do today, not tomorrow.",
    a: "Robert Kiyosaki",
  },
  {
    q: "Push yourself, because no one else is going to do it for you.",
    a: "Unknown",
  },
  { q: "Great things never come from comfort zones.", a: "Unknown" },
  { q: "Dream it. Wish it. Do it.", a: "Unknown" },
];

const QUOTE_TAGS = [
  "⚡ Productivity",
  "🎯 Focus",
  "🏆 Success",
  "💡 Wisdom",
  "🔥 Motivation",
];

const fetchBtn = document.getElementById("fetchApiBtn");
const refreshBtn = document.getElementById("refreshApiBtn");
const categoryEl = document.getElementById("apiCategory");
const displayStyle = document.getElementById("apiDisplayStyle");
const loader = document.getElementById("apiLoader");
const errorBox = document.getElementById("apiError");
const resultsGrid = document.getElementById("apiResults");
const resultsTitle = document.getElementById("apiResultsTitle");
const resultCount = document.getElementById("apiResultCount");
const statusText = document.getElementById("apiStatusText");
const endpointBadge = document.getElementById("apiEndpointDisplay");
const rawJson = document.getElementById("rawJsonPreview");
const dashPreview = document.getElementById("dashApiPreview");
const apiCountDash = document.getElementById("apiCountDash");
const quoteSpotlight = document.getElementById("quoteSpotlight");
const spotlightText = document.getElementById("spotlightText");
const spotlightAuthor = document.getElementById("spotlightAuthor");

if (fetchBtn) fetchBtn.addEventListener("click", fetchQuotes);
if (refreshBtn) refreshBtn.addEventListener("click", fetchQuotes);
window.addEventListener("load", () => fetchQuotes());

async function fetchQuotes() {
  const API_URL = "https://zenquotes.io/api/quotes";
  if (statusText) statusText.textContent = "Fetching quotes...";
  if (endpointBadge) endpointBadge.textContent = API_URL;
  if (loader) loader.style.display = "flex";
  if (errorBox) errorBox.style.display = "none";
  if (resultsGrid) resultsGrid.innerHTML = "";
  if (resultCount) resultCount.textContent = "";
  if (quoteSpotlight) quoteSpotlight.style.display = "none";

  let quotes = [];

  try {
    const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(API_URL)}`;
    const res = await fetch(proxy);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const wrapper = await res.json();
    const data = JSON.parse(wrapper.contents);
    if (!Array.isArray(data) || data.length === 0) throw new Error("Empty");
    quotes = data;
    if (statusText)
      statusText.textContent = `✅ Fetched ${quotes.length} quotes live from ZenQuotes API.`;
  } catch (err) {
    quotes = [...FALLBACK_QUOTES].sort(() => Math.random() - 0.5);
    if (errorBox) errorBox.style.display = "block";
    if (statusText)
      statusText.textContent = `📚 Showing ${quotes.length} curated productivity quotes.`;
  }

  if (loader) loader.style.display = "none";

  const category = categoryEl ? categoryEl.value : "random";
  const filtered = filterByCategory(quotes, category);

  if (resultCount) resultCount.textContent = `${filtered.length} quotes`;
  if (resultsTitle) resultsTitle.textContent = "💬 Quotes Feed";

  if (filtered.length > 0) showSpotlight(filtered[0]);

  const isListStyle = displayStyle && displayStyle.value === "list";
  if (resultsGrid)
    resultsGrid.className = isListStyle
      ? "api-results-grid list-style"
      : "api-results-grid";

  filtered.slice(1).forEach((quote, i) => {
    const card = buildQuoteCard(quote, i + 1, isListStyle);
    card.style.animationDelay = `${i * 50}ms`;
    if (resultsGrid) resultsGrid.appendChild(card);
  });

  if (rawJson)
    rawJson.textContent = JSON.stringify(filtered.slice(0, 3), null, 2);
  updateDashboard(filtered[0], filtered.length);
}

function filterByCategory(quotes, category) {
  if (category === "random") return quotes.slice(0, 20);
  const keywords = {
    productivity: [
      "productive",
      "work",
      "effort",
      "action",
      "start",
      "do",
      "task",
      "busy",
      "schedule",
    ],
    focus: [
      "focus",
      "attention",
      "concentrate",
      "mind",
      "present",
      "distract",
      "deep",
    ],
    success: [
      "success",
      "great",
      "achieve",
      "win",
      "goal",
      "dream",
      "accomplish",
      "excellent",
    ],
  };
  const words = keywords[category] || [];
  const matched = quotes.filter((q) =>
    words.some((w) => q.q.toLowerCase().includes(w)),
  );
  return matched.length >= 5
    ? matched.slice(0, 15)
    : [...matched, ...quotes.filter((q) => !matched.includes(q))].slice(0, 15);
}

function showSpotlight(quote) {
  if (!quoteSpotlight) return;
  spotlightText.textContent = `"${quote.q}"`;
  spotlightAuthor.textContent = `— ${quote.a}`;
  quoteSpotlight.style.display = "block";
}

function buildQuoteCard(quote, index, isList) {
  const card = document.createElement("div");
  card.className = "api-card quote-card";
  const tag = QUOTE_TAGS[index % QUOTE_TAGS.length];
  card.innerHTML = isList
    ? `<div class="list-number">${index}</div><div><div class="quote-text">"${quote.q}"</div><div class="quote-author">— ${quote.a}</div></div>`
    : `<div class="quote-text">"${quote.q}"</div><div class="quote-author">— ${quote.a}</div><span class="quote-tag">${tag}</span>`;
  return card;
}

function updateDashboard(first, total) {
  if (dashPreview && first)
    dashPreview.textContent = `"${first.q}" — ${first.a}`;
  if (apiCountDash) apiCountDash.textContent = total;
}

/* ============================================ */
/* FORM VALIDATION — TASK 6 CORE FEATURE        */
/* ============================================ */

const form = document.getElementById("addTaskForm");
const resetFormBtn = document.getElementById("resetFormBtn");

// Field references
const fTaskName = document.getElementById("taskName");
const fTaskDesc = document.getElementById("taskDesc");
const fTaskPri = document.getElementById("taskPri");
const fTaskDue = document.getElementById("taskDue");
const fTaskAssign = document.getElementById("taskAssign");
const fTaskEmail = document.getElementById("taskEmail");
const fReminder = document.getElementById("taskReminder");
const reminderHint = document.getElementById("reminderHint");

// Char counters
const charCount = document.getElementById("charCount");
const descCount = document.getElementById("descCount");

fTaskName.addEventListener("input", () => {
  if (charCount) charCount.textContent = fTaskName.value.length;
  validateField(fTaskName);
  updatePreview();
  updateChecklist();
});

fTaskDesc.addEventListener("input", () => {
  if (descCount) descCount.textContent = fTaskDesc.value.length;
  validateField(fTaskDesc);
  updatePreview();
  updateChecklist();
});

// Live validate all fields on input/change
[fTaskPri, fTaskDue, fTaskAssign, fTaskEmail].forEach((field) => {
  field.addEventListener("input", () => {
    validateField(field);
    updatePreview();
    updateChecklist();
  });
  field.addEventListener("change", () => {
    validateField(field);
    updatePreview();
    updateChecklist();
  });
});

// Reminder toggle hint
if (fReminder) {
  fReminder.addEventListener("change", () => {
    reminderHint.textContent = fReminder.checked ? "On ✔" : "Off";
  });
}

/* ---- Validation Rules ---- */

function validateField(field) {
  const id = field.id;
  const value = field.value.trim();
  const group = document.getElementById(`group-${id}`);
  const feedback = document.getElementById(`feedback-${id}`);

  if (!group) return true; // optional fields — skip

  let valid = true;
  let message = "";

  if (id === "taskName") {
    if (value.length === 0) {
      valid = false;
      message = "✗ Task name is required.";
    } else if (value.length < 3) {
      valid = false;
      message = "✗ Name must be at least 3 characters.";
    } else {
      message = "✔ Looks good!";
    }
  }

  if (id === "taskDesc") {
    if (value.length === 0) {
      valid = false;
      message = "✗ Please add a description.";
    } else if (value.length < 10) {
      valid = false;
      message = "✗ Description too short (min 10 chars).";
    } else {
      message = "✔ Good description!";
    }
  }

  if (id === "taskPri") {
    if (value === "") {
      valid = false;
      message = "✗ Please select a priority.";
    } else {
      message = "✔ Priority set.";
    }
  }

  if (id === "taskDue") {
    if (value === "") {
      valid = false;
      message = "✗ Please set a due date.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(value);
      if (selected < today) {
        valid = false;
        message = "✗ Due date cannot be in the past.";
      } else {
        message = "✔ Due date set.";
      }
    }
  }

  if (id === "taskAssign") {
    if (value.length === 0) {
      valid = false;
      message = "✗ Please enter a name.";
    } else if (value.length < 2) {
      valid = false;
      message = "✗ Name too short.";
    } else {
      message = "✔ Assigned!";
    }
  }

  if (id === "taskEmail") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.length === 0) {
      valid = false;
      message = "✗ Email is required.";
    } else if (!emailRegex.test(value)) {
      valid = false;
      message = "✗ Please enter a valid email address.";
    } else {
      message = "✔ Valid email!";
    }
  }

  // Apply classes
  group.classList.remove("valid", "invalid");
  group.classList.add(valid ? "valid" : "invalid");
  if (feedback) feedback.textContent = message;

  return valid;
}

/* ---- Validate all required fields ---- */
function validateAll() {
  const fields = [
    fTaskName,
    fTaskDesc,
    fTaskPri,
    fTaskDue,
    fTaskAssign,
    fTaskEmail,
  ];
  return fields.map((f) => validateField(f)).every((v) => v === true);
}

/* ---- Form Submit ---- */
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateAll()) {
      // Scroll to first invalid field
      const firstInvalid = form.querySelector(
        ".form-group.invalid .form-input",
      );
      if (firstInvalid)
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    showToast(fTaskName.value.trim());
    resetForm();
  });
}

/* ---- Reset Form ---- */
if (resetFormBtn) {
  resetFormBtn.addEventListener("click", () => {
    if (confirm("Clear all form fields?")) resetForm();
  });
}

function resetForm() {
  if (form) form.reset();
  if (charCount) charCount.textContent = "0";
  if (descCount) descCount.textContent = "0";
  if (reminderHint) reminderHint.textContent = "Off";

  // Clear validation states
  document
    .querySelectorAll(".form-group")
    .forEach((g) => g.classList.remove("valid", "invalid"));
  document
    .querySelectorAll(".form-feedback")
    .forEach((f) => (f.textContent = ""));

  // Reset checklist + preview
  updateChecklist();
  updatePreview();
}

/* ---- Live Preview ---- */
function updatePreview() {
  const previewCard = document.getElementById("livePreview");
  if (!previewCard) return;

  const name = fTaskName ? fTaskName.value.trim() : "";
  const desc = fTaskDesc ? fTaskDesc.value.trim() : "";
  const pri = fTaskPri ? fTaskPri.value : "";
  const due = fTaskDue ? fTaskDue.value : "";
  const assign = fTaskAssign ? fTaskAssign.value.trim() : "";
  const catEl = document.getElementById("taskCat");
  const cat = catEl ? catEl.options[catEl.selectedIndex]?.text : "";

  if (!name && !desc && !pri) {
    previewCard.innerHTML = `<div class="preview-empty">Start filling the form to see a preview...</div>`;
    previewCard.classList.remove("has-content");
    return;
  }

  previewCard.classList.add("has-content");

  const priLabels = { high: "🔴 High", medium: "🟡 Medium", low: "🟢 Low" };

  previewCard.innerHTML = `
    ${name ? `<div class="preview-name">${name}</div>` : ""}
    <div class="preview-meta">
      ${pri ? `<span class="preview-badge ${pri}">${priLabels[pri] || pri}</span>` : ""}
      ${cat ? `<span class="preview-badge cat">${cat}</span>` : ""}
      ${due ? `<span class="preview-badge due">📅 ${due}</span>` : ""}
    </div>
    ${desc ? `<div class="preview-desc">${desc}</div>` : ""}
    ${assign ? `<div class="preview-assignee">👤 ${assign}</div>` : ""}
  `;
}

/* ---- Checklist ---- */
function updateChecklist() {
  const checks = {
    "check-taskName": fTaskName && fTaskName.value.trim().length >= 3,
    "check-taskDesc": fTaskDesc && fTaskDesc.value.trim().length >= 10,
    "check-taskPri": fTaskPri && fTaskPri.value !== "",
    "check-taskDue":
      fTaskDue &&
      fTaskDue.value !== "" &&
      new Date(fTaskDue.value) >= new Date(),
    "check-taskAssign": fTaskAssign && fTaskAssign.value.trim().length >= 2,
    "check-taskEmail":
      fTaskEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fTaskEmail.value.trim()),
  };

  Object.entries(checks).forEach(([id, done]) => {
    const item = document.getElementById(id);
    if (!item) return;
    const icon = item.querySelector(".check-icon");
    item.classList.toggle("done", done);
    if (icon) icon.textContent = done ? "✔" : "○";
  });
}

/* ---- Success Toast ---- */
function showToast(taskName) {
  const toast = document.getElementById("successToast");
  const toastName = document.getElementById("toastTaskName");
  if (!toast) return;
  if (toastName) toastName.textContent = `"${taskName}" has been added.`;
  toast.style.display = "flex";
  setTimeout(() => closeToast(), 4000);
}

function closeToast() {
  const toast = document.getElementById("successToast");
  if (toast) toast.style.display = "none";
}
