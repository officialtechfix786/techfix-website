/*==================================================
TECHFIX SOFTWARE EXP
MAIN.JS
==================================================*/

"use strict";

/*====================================
SELECTORS
====================================*/

const body = document.body;

const header = document.querySelector(".header");

const loader = document.getElementById("pageLoader");

const backToTop = document.getElementById("backToTop");

const mobileMenu = document.getElementById("mobileMenu");

const mobileOverlay = document.getElementById("mobileOverlay");

const openMenuBtn = document.getElementById("openMenu");

const closeMenuBtn = document.getElementById("closeMenu");

/*====================================
PAGE LOADER
====================================*/

window.addEventListener("load", () => {

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 500);

    }

});

/*====================================
STICKY HEADER
====================================*/

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(6,10,20,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(6,10,20,.78)";
        header.style.boxShadow = "none";

    }

}

window.addEventListener("scroll", updateHeader);

/*====================================
BACK TO TOP
====================================*/

function updateBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener("scroll", updateBackToTop);

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*====================================
MOBILE MENU
====================================*/

function openMenu() {

    if (!mobileMenu || !mobileOverlay) return;

    mobileMenu.classList.add("active");

    mobileOverlay.classList.add("active");

    body.style.overflow = "hidden";

}

function closeMenu() {

    if (!mobileMenu || !mobileOverlay) return;

    mobileMenu.classList.remove("active");

    mobileOverlay.classList.remove("active");

    body.style.overflow = "";

}

if (openMenuBtn) {

    openMenuBtn.addEventListener("click", openMenu);

}

if (closeMenuBtn) {

    closeMenuBtn.addEventListener("click", closeMenu);

}

if (mobileOverlay) {

    mobileOverlay.addEventListener("click", closeMenu);

}

/*====================================
ESC KEY CLOSE MENU
====================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeMenu();

    }

});

/*====================================
INITIALIZE
====================================*/

updateHeader();

updateBackToTop();
/*====================================
SEARCH MODAL
====================================*/

const searchModal = document.getElementById("searchModal");

const searchInput = document.getElementById("searchInput");

const openSearchBtn = document.getElementById("openSearch");

const closeSearchBtn = document.getElementById("closeSearch");

function openSearch() {

    if (!searchModal) return;

    searchModal.classList.add("active");

    body.style.overflow = "hidden";

    setTimeout(() => {

        if (searchInput) {

            searchInput.focus();

        }

    }, 200);

}

function closeSearch() {

    if (!searchModal) return;

    searchModal.classList.remove("active");

    body.style.overflow = "";

}

if (openSearchBtn) {

    openSearchBtn.addEventListener("click", openSearch);

}

if (closeSearchBtn) {

    closeSearchBtn.addEventListener("click", closeSearch);

}

if (searchModal) {

    searchModal.addEventListener("click", function(e){

        if(e.target === searchModal){

            closeSearch();

        }

    });

}

/*====================================
ESC CLOSE SEARCH
====================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeSearch();

    }

});

/*====================================
ACTIVE NAVIGATION
====================================*/

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});

/*====================================
SMOOTH SCROLL
====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});

/*====================================
CONSOLE
====================================*/

console.log("TechFix Software EXP Loaded Successfully");
/*====================================
SCROLL REVEAL ANIMATION
====================================*/

const revealElements = document.querySelectorAll(
    ".feature-card, .service-card, .solution-card, .brand-card, .android-card, .apple-card, .recovery-card, .cyber-card, .download-item, .tool-card, .faq-item, .testimonial-card, .social-card, .stat-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s ease";

    observer.observe(item);

});

/*====================================
COUNTER ANIMATION
====================================*/

const counters = document.querySelectorAll(
    ".hero-stats h3, .stat-box h2"
);

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const el = entry.target;

        const text = el.innerText;

        const number = parseInt(text.replace(/\D/g,""));

        if(isNaN(number)) return;

        let current = 0;

        const speed = Math.max(10, number / 80);

        const timer = setInterval(()=>{

            current += speed;

            if(current >= number){

                current = number;

                clearInterval(timer);
            }

            const suffix = text.replace(/[0-9]/g,"");

            el.innerText = Math.floor(current) + suffix;

        },20);

        counterObserver.unobserve(el);

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*====================================
CURRENT YEAR
====================================*/

const year = document.getElementById("currentYear");

if(year){

    year.textContent = new Date().getFullYear();

}

/*====================================
CARD HOVER EFFECT
====================================*/

document.querySelectorAll(
    ".feature-card,.service-card,.solution-card,.brand-card,.android-card,.apple-card,.recovery-card,.cyber-card,.download-item,.tool-card"
).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".25s";

    });

});

/*====================================
READY
====================================*/

console.log("Animations Loaded Successfully");
