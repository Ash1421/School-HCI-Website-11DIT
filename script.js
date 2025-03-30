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

    // Add event listener to theme toggle
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark");
        themeToggle.classList.toggle("active");
    });
});

