/*==================================================
            PORTFOLIO JAVASCRIPT
            PART 1
==================================================*/


/*=============================================
        SELECT ELEMENTS
=============================================*/

const themeToggle = document.getElementById("theme-toggle");

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");

const backToTop = document.getElementById("backToTop");


/*=============================================
        DARK MODE
=============================================*/

// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

}


// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/*=============================================
        MOBILE MENU
=============================================*/

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/*=============================================
    CLOSE MENU AFTER CLICK
=============================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*=============================================
        SMOOTH SCROLL
=============================================*/

navItems.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const targetID = this.getAttribute("href");

        const targetSection = document.querySelector(targetID);

        window.scrollTo({

            top: targetSection.offsetTop - 70,

            behavior: "smooth"

        });

    });

});


/*=============================================
        ACTIVE NAVBAR LINK
=============================================*/

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/*=============================================
        BACK TO TOP
=============================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    }

    else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*==================================================
            PORTFOLIO JAVASCRIPT
            PART 2
==================================================*/


/*=============================================
        TYPING EFFECT
=============================================*/

const typingElement = document.querySelector(".typing-text");

const words = [

    "Aspiring Software Developer",

    "Frontend Web Developer",

    "Computer Science Student",

    "Continuous Learner"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}


/*=============================================
        SCROLL REVEAL
=============================================*/

const revealElements = document.querySelectorAll(

    ".section, .skill-card, .project-card, .timeline-item, .certificate-card, .achievement-card"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);


/*=============================================
        HEADER SHADOW
=============================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.08)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


/*=============================================
        PROFILE IMAGE TILT
=============================================*/

const profileImage = document.querySelector(".hero-image img");

if (profileImage) {

    profileImage.addEventListener("mousemove", () => {

        profileImage.style.transform =
            "rotate(2deg) scale(1.03)";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform =
            "";

    });

}


/*=============================================
        BUTTON RIPPLE EFFECT
=============================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*=============================================
        PRELOADER (OPTIONAL)
=============================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*=============================================
        CONSOLE MESSAGE
=============================================*/

console.log(
`==========================================
Portfolio Developed by Roshan Thaspiha
Aspiring Software Developer
GitHub:
https://github.com/ROSHAN28-thas
==========================================`
);


/*=============================================
        INITIALIZE FUNCTIONS
=============================================*/

typeEffect();

revealOnScroll();