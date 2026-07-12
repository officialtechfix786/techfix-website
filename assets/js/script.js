/*==================================================
            TECHFIX SOFTWARE EXP v2.0
====================================================

Project   : TechFix Software EXP
File      : script.js
Version   : 2.0.0

Developer : ChatGPT
Founder   : MIAN AHMAD

==================================================*/

"use strict";

/*==================================================
                DOM ELEMENTS
==================================================*/

const loader = document.getElementById("loader");

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.querySelector(".sidebar");

const topButton = document.getElementById("topButton");

const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("searchBtn");

const searchResults = document.getElementById("searchResults");

const brandGrid = document.getElementById("brandGrid");

const counters = document.querySelectorAll(".counter");


/*==================================================
                WEBSITE INITIALIZER
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});


function initializeWebsite() {

    hideLoader();
  
  setupSearch();
  
    setupSidebar();

    setupBackToTop();

    loadSocialLinks();

    loadBrandCards();

    startCounters();

}


/*==================================================
                LOADER
==================================================*/

function hideLoader() {

    window.addEventListener("load", () => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    });

}


/*==================================================
                SIDEBAR
==================================================*/

function setupSidebar() {

    if (!menuBtn || !sidebar) return;

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("show");

    });

}


/*==================================================
                BACK TO TOP
==================================================*/

function setupBackToTop() {

    if (!topButton) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.classList.add("active");

        } else {

            topButton.classList.remove("active");

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==================================================
                SOCIAL LINKS
==================================================*/

function loadSocialLinks() {

    if (typeof SOCIAL === "undefined") return;

    const ids = {

        youtubeLink: SOCIAL.youtube,

        facebookLink: SOCIAL.facebook,

        tiktokLink: SOCIAL.tiktok,

        whatsappLink: SOCIAL.whatsapp,

        footerYoutube: SOCIAL.youtube,

        footerFacebook: SOCIAL.facebook,

        footerTiktok: SOCIAL.tiktok,

        footerWhatsapp: SOCIAL.whatsapp,

        footerEmail: SOCIAL.email

    };

    Object.keys(ids).forEach(id => {

        const element = document.getElementById(id);

        if (element) {

            element.href = ids[id];

            element.target = "_blank";

        }

    });

}


/*==================================================
                BRAND CARDS
==================================================*/

function loadBrandCards() {

    if (!brandGrid) return;

    if (typeof BRANDS === "undefined") return;

    brandGrid.innerHTML = "";

    BRANDS.forEach(brand => {

        brandGrid.innerHTML += `

        <a href="${brand.page}" class="brand-card">

            <img src="${brand.logo}" alt="${brand.name}">

            <h3>${brand.name}</h3>

        </a>

        `;

    });

}


/*==================================================
                COUNTER ANIMATION
==================================================*/

function startCounters() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let value = 0;

        const speed = target / 80;

        const update = () => {

            if (value < target) {

                value += speed;

                counter.innerText = Math.ceil(value);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

}
/*==================================================
                SMART SEARCH ENGINE
==================================================*/

function setupSearch() {

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener("input", searchDatabase);

    searchBtn?.addEventListener("click", searchDatabase);

}

function searchDatabase() {

    const keyword = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (keyword.length < 2) {

        searchResults.style.display = "none";

        return;

    }

    let results = [];

    /* Mobile Models */

    if (typeof MOBILE_MODELS !== "undefined") {

        MOBILE_MODELS.forEach(brand => {

            brand.models.forEach(model => {

                if (model.toLowerCase().includes(keyword)) {

                    results.push({

                        icon: "📱",

                        title: model,

                        subtitle: brand.brand,

                        page: "mobiles.html"

                    });

                }

            });

        });

    }

    /* Software Tools */

    if (typeof TOOLS !== "undefined") {

        TOOLS.forEach(tool => {

            if (tool.name.toLowerCase().includes(keyword)) {

                results.push({

                    icon: "🛠",

                    title: tool.name,

                    subtitle: tool.category,

                    page: tool.page

                });

            }

        });

    }

    renderSearchResults(results);

}


/*==================================================
                SEARCH RESULTS
==================================================*/

function renderSearchResults(results) {

    searchResults.innerHTML = "";

    if (results.length === 0) {

        searchResults.innerHTML = `

        <div class="search-empty">

            No results found.

        </div>

        `;

        searchResults.style.display = "block";

        return;

    }

    results.slice(0, 10).forEach(item => {

        searchResults.innerHTML += `

        <a class="search-item" href="${item.page}">

            <span>${item.icon}</span>

            <div>

                <strong>${item.title}</strong>

                <small>${item.subtitle}</small>

            </div>

        </a>

        `;

    });

    searchResults.style.display = "block";

}


/*==================================================
            CLOSE SEARCH ON OUTSIDE CLICK
==================================================*/

document.addEventListener("click", (e) => {

    if (!searchResults || !searchInput) return;

    if (!searchResults.contains(e.target) && e.target !== searchInput) {

        searchResults.style.display = "none";

    }

});


/*==================================================
            ENTER KEY SEARCH
==================================================*/

searchInput?.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        searchDatabase();

    }

});
/*==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

function setupScrollReveal() {

    const elements = document.querySelectorAll(
        ".service-card, .brand-card, .why-card, .stat-box, .founder-card, .contact-cta"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

}

/*==================================================
                HERO FLOATING
==================================================*/

function startHeroAnimation() {

    const heroImage = document.querySelector(".hero-image img");

    if (!heroImage) return;

    let direction = 1;
    let position = 0;

    setInterval(() => {

        position += direction;

        heroImage.style.transform =
            `translateY(${position}px)`;

        if (position >= 12)
            direction = -1;

        if (position <= -12)
            direction = 1;

    }, 60);

}

/*==================================================
                ACTIVE NAVIGATION
==================================================*/

function highlightCurrentPage() {

    const current = location.pathname.split("/").pop();

    document.querySelectorAll(".sidebar-nav a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === current) {

            link.classList.add("active");

        }

    });

}

/*==================================================
                CURSOR GLOW
==================================================*/

function createCursorGlow() {

    const glow = document.createElement("div");

    glow.className = "cursor-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

}

/*==================================================
                START PREMIUM EFFECTS
==================================================*/

window.addEventListener("load", () => {

    setupScrollReveal();

    startHeroAnimation();

    highlightCurrentPage();

    createCursorGlow();

});
/*==================================================
            CYBER GRID PARALLAX
==================================================*/

function startCyberBackground() {

    const grid = document.querySelector(".bg-grid");

    if (!grid) return;

    window.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth) * 20;
        const y = (e.clientY / window.innerHeight) * 20;

        grid.style.transform =
            `translate(${-x}px, ${-y}px)`;

    });

}

/*==================================================
            RIPPLE BUTTON EFFECT
==================================================*/

function setupRippleButtons() {

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = this.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

}

/*==================================================
            PAGE FADE
==================================================*/

function pageFadeIn() {

    document.body.classList.add("page-loaded");

}

/*==================================================
            STICKY MOBILE HEADER
==================================================*/

function stickyHeader() {

    const header = document.querySelector(".mobile-header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}

/*==================================================
            ESC CLOSE SIDEBAR
==================================================*/

function closeSidebarWithEscape() {

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            sidebar?.classList.remove("show");

        }

    });

}

/*==================================================
            START UI ENGINE
==================================================*/

window.addEventListener("load", () => {

    startCyberBackground();

    setupRippleButtons();

    pageFadeIn();

    stickyHeader();

    closeSidebarWithEscape();

});
/*==================================================
            PERFORMANCE OPTIMIZER
==================================================*/

function optimizeWebsite() {

    document.querySelectorAll("img").forEach(img => {

        img.loading = "lazy";

        img.draggable = false;

    });

}

/*==================================================
            AUTO CLOSE SIDEBAR
==================================================*/

function autoCloseSidebar() {

    document.querySelectorAll(".sidebar-nav a").forEach(link => {

        link.addEventListener("click", () => {

            sidebar?.classList.remove("show");

        });

    });

}

/*==================================================
            PREVENT RIGHT CLICK ON LOGO
==================================================*/

function protectLogo() {

    document.querySelectorAll(".logo-box img").forEach(img => {

        img.addEventListener("contextmenu", e => {

            e.preventDefault();

        });

    });

}

/*==================================================
            START FINAL FEATURES
==================================================*/

window.addEventListener("load", () => {

    optimizeWebsite();

    autoCloseSidebar();

    protectLogo();

});

/*==================================================
                END OF FILE
==================================================*/

/*
Project   : TechFix Software EXP v2.0
File      : script.js
Developer : ChatGPT
CEO       : MIAN AHMAD

© 2026 TechFix Software EXP
All Rights Reserved.
*/
