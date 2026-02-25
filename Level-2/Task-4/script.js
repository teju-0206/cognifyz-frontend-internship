/* SIDEBAR NAVIGATION */

const navLinks = document.querySelectorAll(".nav a");

const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");

    const target = this.getAttribute("data-section");

    sections.forEach((section) => section.classList.remove("active"));

    document.getElementById(target).classList.add("active");
  });
});

/* DARK MODE */

const darkBtn = document.getElementById("darkModeToggle");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/* BACKGROUND COLOR CHANGE */

const colorBtn = document.getElementById("colorChangeBtn");

const colors = [
  "#e3e8ed",
  "#fef3c7",
  "#d1fae5",
  "#fee2e2",
  "#e0f2fe",
  "#ede9fe",
];

colorBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
});
