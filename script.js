// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href");
            const section = document.querySelector(sectionId);
            console.log(`Navigating to ${sectionId}`);
            // Scroll smoothly to the section
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add event listener to toggle dark mode on checkbox change
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        console.log("Toggling dark mode");
        document.body.classList.toggle("dark");
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    console.log(`Toggling menu, current class is ${x.className}`);
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener("click", toggleTheme);

function toggleTheme() {
    console.log("Toggling theme");
    document.body.classList.toggle("light-theme");
}

// Get all menu links
const menuLinks = document.querySelectorAll('.topnav a');

// Add event listener to each menu link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Get the menu toggle checkbox
    const menuToggle = document.querySelector('.icon');
    console.log("Menu link clicked");
    // Toggle the menu
    toggleMenu();
  });
});