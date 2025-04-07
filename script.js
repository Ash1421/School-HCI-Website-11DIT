// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href");
            const section = document.querySelector(sectionId);
            // Scroll smoothly to the section
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add event listener to toggle dark mode on checkbox change
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener("click", toggleTheme);

function toggleTheme() {
    document.body.classList.toggle("light-theme");
}

