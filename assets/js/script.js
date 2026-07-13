/*==================================================
        TECHFIX SOFTWARE EXP v3.0
====================================================

Project : TechFix Software EXP
File    : script.js
Version : 3.0

Founder : MIAN AHMAD
Developer : ChatGPT

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
                WEBSITE START
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initWebsite();

});

/*==================================================
                INITIALIZER
==================================================*/

function initWebsite(){

    loaderEngine();

    sidebarEngine();

    backToTopEngine();

    socialEngine();

    brandEngine();

    counterEngine();

    searchEngine();

    revealEngine();

    heroEngine();

    uiEngine();

}
/*==================================================
                    LOADER
==================================================*/

function loaderEngine(){

    window.addEventListener("load",()=>{

        if(!loader) return;

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },500);

    });

}
/*==================================================
                SIDEBAR
==================================================*/

function sidebarEngine(){

    if(!menuBtn || !sidebar) return;

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.toggle("active");

    });

    document.addEventListener("click",(e)=>{

        if(
            !sidebar.contains(e.target) &&
            e.target!==menuBtn &&
            !menuBtn.contains(e.target)
        ){
            sidebar.classList.remove("active");
        }

    });

}

/*==================================================
                SOCIAL LINKS
==================================================*/

function socialEngine(){

    if(typeof SOCIAL==="undefined") return;

    const links={

        youtubeLink:SOCIAL.youtube,
        facebookLink:SOCIAL.facebook,
        tiktokLink:SOCIAL.tiktok,
        whatsappLink:SOCIAL.whatsapp,

        footerYoutube:SOCIAL.youtube,
        footerFacebook:SOCIAL.facebook,
        footerTiktok:SOCIAL.tiktok,
        footerWhatsapp:SOCIAL.whatsapp,
        footerEmail:SOCIAL.email

    };

    Object.keys(links).forEach(id=>{

        const el=document.getElementById(id);

        if(el){

            el.href=links[id];

            el.target="_blank";

        }

    });

}

/*==================================================
                SUPPORTED BRANDS
==================================================*/

function brandEngine(){

    if(!brandGrid) return;

    if(typeof BRANDS==="undefined") return;

    brandGrid.innerHTML="";

    BRANDS.forEach(brand=>{

        brandGrid.innerHTML+=`

        <a href="${brand.page}" class="brand-card">

            <img src="${brand.logo}" alt="${brand.name}">

            <h3>${brand.name}</h3>

        </a>

        `;

    });

}
