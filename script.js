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
    const toggleButton = document.getElementById('mode');
    toggleButton.addEventListener('change', () => {
        if (toggleButton.checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('mode', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('mode', 'light');
        }
    });

    // Set initial theme
    const currentTheme = localStorage.getItem('mode');
    if (currentTheme === 'dark') {
        toggleButton.checked = true;
        document.documentElement.classList.add('dark');
    }
});

