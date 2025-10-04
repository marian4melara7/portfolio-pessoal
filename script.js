const body = document.body;
const themeToggle = document.getElementById('theme-toggle');

const savedMode = localStorage.getItem("mode");
if (savedMode === 'light' || savedMode === 'dark') {
  body.className = savedMode;
} else {
  body.className = 'light';
  localStorage.setItem("mode", "light");
}

function toggleTheme() {
  if (body.className === 'light') {
    body.className = 'dark';
    localStorage.setItem("mode", "dark");
  } else {
    body.className = 'light';
    localStorage.setItem("mode", "light");
  }
}

themeToggle.addEventListener('click', toggleTheme);

themeToggle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleTheme();
  }
});

document.querySelectorAll('.main-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
