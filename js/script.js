// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 120;

        if(top < trigger){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// Initialize Lucide icons
lucide.createIcons();