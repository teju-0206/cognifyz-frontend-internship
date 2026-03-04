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
    sections.forEach((section) => section.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

/* ======================== */
/* DARK MODE (all toggles)  */
/* ======================== */

// Central dark mode state
let darkModeOn = false;

function applyDarkMode(state) {
  darkModeOn = state;
  document.body.classList.toggle("dark-mode", state);
  // Sync settings toggle
  const settingsToggle = document.getElementById("darkToggleSetting");
  if (settingsToggle) settingsToggle.checked = state;
}

// Header buttons on each section
[
  "darkModeToggle",
  "darkModeToggle2",
  "darkModeToggle3",
  "darkModeToggle4",
  "darkModeToggle5",
].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", () => applyDarkMode(!darkModeOn));
});

// Settings page toggle switch
const darkToggleSetting = document.getElementById("darkToggleSetting");
if (darkToggleSetting) {
  darkToggleSetting.addEventListener("change", function () {
    applyDarkMode(this.checked);
  });
}

/* ======================== */
/* BACKGROUND COLOR CHANGE  */
/* ======================== */

const colors = [
  "#e3e8ed",
  "#fef3c7",
  "#d1fae5",
  "#fee2e2",
  "#e0f2fe",
  "#ede9fe",
];

const colorBtn = document.getElementById("colorChangeBtn");
if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
}

// Settings swatches
function setBg(color) {
  document.body.style.backgroundColor = color;
}

/* ======================== */
/* FONT SIZE (Settings)     */
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
  addTaskBtn.addEventListener("click", () => {
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
  });

  // Allow Enter key to add task
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTaskBtn.click();
  });
}

// Move task to completed list
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
/* TIPS (Goals section)     */
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

if (newTipBtn && tipText) {
  let lastTipIndex = 0;
  newTipBtn.addEventListener("click", () => {
    let index;
    do {
      index = Math.floor(Math.random() * tips.length);
    } while (index === lastTipIndex);
    lastTipIndex = index;
    tipText.style.opacity = "0";
    setTimeout(() => {
      tipText.textContent = tips[index];
      tipText.style.opacity = "1";
    }, 200);
    tipText.style.transition = "opacity 0.2s";
  });
}

/* ======================== */
/* SETTINGS – Save Profile  */
/* ======================== */

const saveBtn = document.querySelector(".save-btn");
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    saveBtn.textContent = "✅ Saved!";
    setTimeout(() => (saveBtn.textContent = "💾 Save Profile"), 2000);
  });
}
