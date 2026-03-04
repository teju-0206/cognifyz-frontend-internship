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

// All dark mode buttons (main + section headers)
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
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

function setBg(color) {
  document.body.style.backgroundColor = color;
}

/* ======================== */
/* FONT SIZE                */
/* ======================== */

function changeFontSize(size) {
  document.body.style.fontSize = size;
}

/* ======================== */
/* TASK MANAGER             */
/* ======================== */

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskPriority = document.getElementById("taskPriority");
const pendingList = document.getElementById("pendingList");

if (addTaskBtn) {
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });
}

function addTask() {
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
  const completedList = document.getElementById("completedList");
  li.classList.add("completed");
  btn.remove();
  completedList.appendChild(li);
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
/* SETTINGS – SAVE PROFILE  */
/* ======================== */

const saveProfileBtn = document.getElementById("saveProfileBtn");
if (saveProfileBtn) {
  saveProfileBtn.addEventListener("click", () => {
    saveProfileBtn.textContent = "✅ Saved!";
    setTimeout(() => (saveProfileBtn.textContent = "💾 Save Profile"), 2000);
  });
}

/* ======================== */
/* API INTEGRATION          */
/* Task 5 — ZenQuotes API   */
/* ======================== */

// Offline fallback quotes (shown if API is blocked by CORS in browser)
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
  {
    q: "You are never too old to set another goal or to dream a new dream.",
    a: "C.S. Lewis",
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
  {
    q: "The only way to do great work is to love what you do.",
    a: "Steve Jobs",
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
const endpointDisplay = document.getElementById("apiEndpointDisplay");
const rawJsonPreview = document.getElementById("rawJsonPreview");
const dashApiPreview = document.getElementById("dashApiPreview");
const apiCountDash = document.getElementById("apiCountDash");
const quoteSpotlight = document.getElementById("quoteSpotlight");
const spotlightText = document.getElementById("spotlightText");
const spotlightAuthor = document.getElementById("spotlightAuthor");

if (fetchBtn) fetchBtn.addEventListener("click", fetchQuotes);
if (refreshBtn) refreshBtn.addEventListener("click", fetchQuotes);

// Auto-fetch on load
window.addEventListener("load", () => fetchQuotes());

async function fetchQuotes() {
  const API_URL = "https://zenquotes.io/api/quotes";

  // Show loading state
  if (statusText)
    statusText.textContent = "Fetching quotes from ZenQuotes API...";
  if (endpointDisplay) endpointDisplay.textContent = API_URL;
  if (loader) {
    loader.style.display = "flex";
  }
  if (errorBox) errorBox.style.display = "none";
  if (resultsGrid) resultsGrid.innerHTML = "";
  if (resultCount) resultCount.textContent = "";
  if (quoteSpotlight) quoteSpotlight.style.display = "none";

  let quotes = [];

  try {
    // ZenQuotes requires a CORS proxy when called from browser
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(API_URL)}`;
    const response = await fetch(proxyUrl);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const wrapper = await response.json();
    const data = JSON.parse(wrapper.contents);

    if (!Array.isArray(data) || data.length === 0)
      throw new Error("Empty response");

    quotes = data;
    if (statusText)
      statusText.textContent = `✅ Fetched ${quotes.length} quotes live from ZenQuotes API.`;
  } catch (err) {
    // Silently fall back to offline quotes — show info message not hard error
    console.warn("Live API unavailable, using curated quotes:", err.message);
    quotes = [...FALLBACK_QUOTES].sort(() => Math.random() - 0.5);
    if (errorBox) errorBox.style.display = "block";
    if (statusText)
      statusText.textContent = `📚 Showing ${quotes.length} curated productivity quotes.`;
  }

  // Filter by category (client-side tag matching on fallback)
  const category = categoryEl ? categoryEl.value : "random";
  let filtered = filterByCategory(quotes, category);

  // Hide loader
  if (loader) loader.style.display = "none";

  // Update count
  if (resultCount) resultCount.textContent = `${filtered.length} quotes`;
  if (resultsTitle) resultsTitle.textContent = "💬 Quotes Feed";

  // Show spotlight (first quote)
  if (filtered.length > 0) showSpotlight(filtered[0]);

  // Render the rest as cards (skip first — it's in spotlight)
  const displayList = filtered.slice(1);
  const isListStyle = displayStyle && displayStyle.value === "list";
  if (resultsGrid) {
    resultsGrid.className = isListStyle
      ? "api-results-grid list-style"
      : "api-results-grid";
  }

  displayList.forEach((quote, index) => {
    const card = buildQuoteCard(quote, index + 1, isListStyle);
    card.style.animationDelay = `${index * 50}ms`;
    if (resultsGrid) resultsGrid.appendChild(card);
  });

  // Raw JSON preview (first 3)
  if (rawJsonPreview) {
    rawJsonPreview.textContent = JSON.stringify(filtered.slice(0, 3), null, 2);
  }

  // Dashboard update
  updateDashboard(filtered[0], filtered.length);
}

function filterByCategory(quotes, category) {
  if (category === "random") return quotes.slice(0, 20);

  // Simple keyword filtering on the quote text
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

  // Return matched + fill up to 15 if not enough
  return matched.length >= 5
    ? matched.slice(0, 15)
    : [...matched, ...quotes.filter((q) => !matched.includes(q))].slice(0, 15);
}

function showSpotlight(quote) {
  if (!quoteSpotlight || !spotlightText || !spotlightAuthor) return;
  spotlightText.textContent = `"${quote.q}"`;
  spotlightAuthor.textContent = `— ${quote.a}`;
  quoteSpotlight.style.display = "block";
}

function buildQuoteCard(quote, index, isList) {
  const card = document.createElement("div");
  card.className = "api-card quote-card";

  const tag = QUOTE_TAGS[index % QUOTE_TAGS.length];

  if (isList) {
    card.innerHTML = `
      <div class="list-number">${index}</div>
      <div>
        <div class="quote-text">"${quote.q}"</div>
        <div class="quote-author">— ${quote.a}</div>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="quote-text">"${quote.q}"</div>
      <div class="quote-author">— ${quote.a}</div>
      <span class="quote-tag">${tag}</span>
    `;
  }

  return card;
}

function updateDashboard(firstQuote, total) {
  if (dashApiPreview && firstQuote) {
    dashApiPreview.textContent = `"${firstQuote.q}" — ${firstQuote.a}`;
  }
  if (apiCountDash) apiCountDash.textContent = total;
}
