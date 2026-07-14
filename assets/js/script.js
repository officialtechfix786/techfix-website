/*═══════════════════════════════════════════════════
                TECHFIX SOFTWARE EXP v7.1 PREMIUM FIXED
              Premium JavaScript Edition with All Features
                Founder : MIAN AHMAD
═══════════════════════════════════*/

"use strict";

/*═══════════════════════════════════════════════════════════
                    GLOBAL SELECTORS & VARIABLES
═══════════════════════════════════*/

const header = document.querySelector(".header");
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-toggle");
const backTop = document.getElementById("backToTop");
const preloader = document.getElementById("preloader");
const searchModal = document.getElementById("searchModal");
const searchBtn = document.querySelector(".search-btn");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("liveSearch");
const searchResults = document.getElementById("searchResults");
const robot = document.querySelector(".robot-image");
const year = document.getElementById("year");

/*═══════════
                    RGB ACCENT COLOR ENGINE
═══════════════════════════════════════════════════════════════════*/

const accentColors = [
    "#ff7a00", "#00c8ff", "#8b5cf6", "#00d084",
    "#ff3b30", "#c0c0c0", "#ffd700"
];
let colorIndex = 0;
function changeAccentColor(){
    document.documentElement.style.setProperty("--primary", accentColors[colorIndex]);
    colorIndex = (colorIndex + 1) % accentColors.length;
}
changeAccentColor();
setInterval(changeAccentColor,12000);

/*═══════════════════════════════════════════════════
                    DUAL RGB THEME ENGINE v2
═══════════════════════════════════════════════════════════*/

const rgbThemes = [
    {primary:"#ff7a00",secondary:"#ffb347"}, {primary:"#00c8ff",secondary:"#4de1ff"},
    {primary:"#8b5cf6",secondary:"#b794ff"}, {primary:"#00d084",secondary:"#54f2b5"},
    {primary:"#ff3b30",secondary:"#ff7b72"}, {primary:"#c0c0c0",secondary:"#ececec"},
    {primary:"#ffd700",secondary:"#ffe866"}
];
let themeIndex = 0;
function updateTheme(){
    const theme = rgbThemes[themeIndex];
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    themeIndex = (themeIndex + 1) % rgbThemes.length;
}
updateTheme();
setInterval(updateTheme,10000);

/*═══════════════════════════════════
                    PRELOADER ANIMATION
═══════════════════════════════════════════════════════════════════*/

window.addEventListener("load",()=>{
    if(!preloader) return;
    setTimeout(()=>{
        preloader.style.opacity="0";
        preloader.style.visibility="hidden";
        setTimeout(()=>{ preloader.remove(); },600);
    },800);
});

/*═══════════════════════════════════
                    STICKY HEADER ON SCROLL
═══════════════════════════*/

window.addEventListener("scroll",()=>{
    if(header) header.classList.toggle("sticky", window.scrollY > 80);
});

/*═══════════
                    MOBILE MENU TOGGLE
═══════════*/

if(menuBtn && menu){
    menuBtn.addEventListener("click",()=>{
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
}
document.querySelectorAll(".nav-menu a").forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.remove("active");
        menuBtn?.classList.remove("active");
    });
});

/*═══════════════════════════════════════════
                    BACK TO TOP BUTTON
═══════════════════════════*/

if(backTop){
    window.addEventListener("scroll",()=>{
        backTop.classList.toggle("show", window.scrollY>500);
    });
    backTop.addEventListener("click",()=>{
        window.scrollTo({top:0, behavior:"smooth"});
    });
}

/*═══════════════════
                    SMOOTH SCROLL FOR ANCHOR LINKS
═══════════════════════════════════════════════════════════════════*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click",e=>{
        const target=document.querySelector(link.getAttribute("href"));
        if(!target) return;
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth", block:"start"});
    });
});

/*═══════════
                    ACTIVE MENU HIGHLIGHT ON SCROLL
═══════════════════════════════════════════════════*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".nav-menu a");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const top=section.offsetTop-140;
        if(window.scrollY>=top){ current=section.id; }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){ link.classList.add("active"); }
    });
});

/*═══════════════════════════════════════════════════
                    SEARCH MODAL FUNCTIONALITY
═══════════*/

if(searchBtn && searchModal){
    searchBtn.addEventListener("click",()=>{
        searchModal.classList.add("active");
        setTimeout(()=>{ searchInput?.focus(); },200);
    });
}
if(closeSearch){
    closeSearch.addEventListener("click",()=>{
        searchModal.classList.remove("active");
        if(searchInput) searchInput.value="";
        if(searchResults) searchResults.innerHTML="";
    });
}
window.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){ searchModal?.classList.remove("active"); }
});
if(searchModal){
    searchModal.addEventListener("click",(e)=>{
        if(e.target===searchModal){ searchModal.classList.remove("active"); }
    });
}

/*═══════════════════════════════════════════
                    LIVE SEARCH DATABASE - CRASH PROOF
═══════════*/

function getAllModels(){
    const models=[];
    if(typeof mobileDatabase==="undefined"){
        console.warn("database.js not loaded or mobileDatabase missing");
        return models;
    }
    try {
        Object.keys(mobileDatabase).forEach(brand=>{
            if(Array.isArray(mobileDatabase[brand])){
                mobileDatabase[brand].forEach(model=>{
                    models.push({brand, name:model});
                });
            }
        });
    } catch(e){ console.error("Error reading mobileDatabase:", e); }
    return models;
}
const allModels=getAllModels();

if(searchInput){
    searchInput.addEventListener("input",function(){
        const keyword=this.value.trim().toLowerCase();
        searchResults.innerHTML="";
        if(keyword.length===0) return;
        const results=allModels.filter(item=>
            item.name.toLowerCase().includes(keyword) ||
            item.brand.toLowerCase().includes(keyword)
        );
        if(results.length===0){
            searchResults.innerHTML=`<div class="no-result"><i class="fa-solid fa-xmark"></i> No Device Found</div>`;
            return;
        }
        results.slice(0,50).forEach(item=>{
            const card=document.createElement("div");
            card.className="search-item";
            card.innerHTML=`<strong>${item.name}</strong><br><small>${item.brand.toUpperCase()}</small>`;
            card.onclick=()=>{
                window.location.href=`mobiles.html?brand=${item.brand}&model=${encodeURIComponent(item.name)}`;
            };
            searchResults.appendChild(card);
        });
    });
}

/*═══════════
                    COUNTER ANIMATION ON SCROLL - FIXED
═══════════════════════════════════════════════════════════*/

const counters=document.querySelectorAll("[data-target]");
function startCounters(){
    counters.forEach(counter=>{
        const target=parseInt(counter.dataset.target);
        let current=0;
        const increment=Math.max(1,Math.ceil(target/120));
        function update(){
            current+=increment;
            if(current>=target){ counter.textContent=target.toLocaleString()+"+"; return; }
            counter.textContent=current.toLocaleString()+"+";
            requestAnimationFrame(update);
        }
        update();
    });
}
const counterSection=document.querySelector(".counter-section");
if(counterSection){
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){ startCounters(); observer.disconnect(); }
        });
    },{threshold:.35});
    observer.observe(counterSection);
