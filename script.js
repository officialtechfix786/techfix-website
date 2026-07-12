/*======================================
TECHFIX SOFTWARE EXP
Premium Script V7
======================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
    PAGE LOADER
    ==============================*/

    const loader = document.querySelector(".page-loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {

                loader.classList.add("hide");

                setTimeout(() => {

                    loader.remove();

                }, 600);

            }

        }, 800);

    });

    /*==============================
    MOBILE MENU
    ==============================*/

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.querySelector(".sidebar");

    if (menuBtn && sidebar) {

        menuBtn.addEventListener("click", () => {

            sidebar.classList.toggle("show");

        });

    }

    /*==============================
    CLOSE MENU AFTER CLICK
    ==============================*/

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 992) {

                sidebar.classList.remove("show");

            }

        });

    });

});
/*==============================
ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveMenu() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", setActiveMenu);

/*==============================
SMOOTH SCROLL
==============================*/

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            const section = document.querySelector(target);

            if (section) {

                section.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });

});

/*==============================
SCROLL TO TOP
==============================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

topBtn.id = "topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*======================================
UNIVERSAL SEARCH
======================================*/

const searchInput = document.getElementById("globalSearch");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

function searchDatabase() {

    if (!searchInput || !searchResults) return;

    const keyword = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (keyword.length < 2) {

        searchResults.style.display = "none";

        return;

    }

    let total = 0;

    Object.keys(mobileDatabase).forEach(brand => {

        mobileDatabase[brand].forEach(model => {

            if (model.toLowerCase().includes(keyword)) {

                total++;

                searchResults.innerHTML += `

<div class="search-item">

<strong>${model}</strong>

<small>${brand.toUpperCase()}</small>

</div>

`;

            }

        });

    });

    if (total === 0) {

        searchResults.innerHTML = `

<div class="search-item">

<strong>No Results Found</strong>

<small>Try another keyword</small>

</div>

`;

    }

    searchResults.style.display = "block";

}

if (searchInput) {

    searchInput.addEventListener("keyup", searchDatabase);

}

if (searchBtn) {

    searchBtn.addEventListener("click", searchDatabase);

}

document.addEventListener("click",(e)=>{

    if(searchResults &&

    !searchResults.contains(e.target) &&

    e.target!==searchInput){

        searchResults.style.display="none";

    }

});
/*======================================
SOCIAL LINKS
======================================*/

// ======== CHANGE THESE LINKS ONLY ========

const SOCIAL_LINKS = {

youtube: "https://youtube.com/@TechfixSoftwareEXP",

facebook: "https://facebook.com/",

tiktok: "https://tiktok.com/@TechfixSoftwareEXP",

whatsapp: "https://wa.me/923001234567",

email: "mailto:your@email.com"

};

// ========================================

const youtubeBtn = document.getElementById("youtubeLink");
const facebookBtn = document.getElementById("facebookLink");
const tiktokBtn = document.getElementById("tiktokLink");
const whatsappBtn = document.getElementById("whatsappLink");
const emailBtn = document.getElementById("emailLink");

if (youtubeBtn)
youtubeBtn.href = SOCIAL_LINKS.youtube;

if (facebookBtn)
facebookBtn.href = SOCIAL_LINKS.facebook;

if (tiktokBtn)
tiktokBtn.href = SOCIAL_LINKS.tiktok;

if (whatsappBtn)
whatsappBtn.href = SOCIAL_LINKS.whatsapp;

if (emailBtn)
emailBtn.href = SOCIAL_LINKS.email;

/*======================================
OPEN EXTERNAL LINKS
======================================*/

document.querySelectorAll(".footer-social a").forEach(link=>{

link.target="_blank";

link.rel="noopener noreferrer";

});

/*======================================
END OF SCRIPT
======================================*/

console.log("TechFix Software EXP Loaded Successfully");
