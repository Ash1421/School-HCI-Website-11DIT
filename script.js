// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href");
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });


    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark");
        themeToggle.classList.toggle("active");
    });
});

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  const lightText = themeToggle.querySelector('span:first-child');
  const darkText = themeToggle.querySelector('span:last-child');

  lightText.classList.toggle('active');
  darkText.classList.toggle('active');

  document.body.classList.toggle('dark-theme');
});