/*==========================================================
  TECHFIX SOFTWARE EXP
  FILE : assets/js/script.js
  VERSION : 2.0.0
  AUTHOR : Mian Ahmad
==========================================================*/

"use strict";

/*==========================================================
  MAIN APPLICATION
==========================================================*/

const APP = {

    name: "TechFix Software EXP",

    version: "2.0.0",

    author: "Mian Ahmad",

    initialized: false,

    currentPage: "",

    theme: "dark",

    isMobile: window.innerWidth <= 768,

    searchResults: [],

    elements: {},

    timers: {},

    animations: {},

    observers: {},

    countersStarted: false,

    loading: true

};

/* Complete legacy price records so service cards never render an undefined value. */
if (window.TECHFIX?.devices) {
    TECHFIX.devices.forEach(device => {
        if (device.pricing && device.pricing.imeiRepair == null) {
            device.pricing.imeiRepair = device.pricing.icloud ?? 0;
        }
    });
}

/*==========================================================
  DOM HELPERS
==========================================================*/

const $ = selector => document.querySelector(selector);

const $$ = selector => [...document.querySelectorAll(selector)];

const create = tag => document.createElement(tag);

const random = (min,max)=>
Math.floor(Math.random()*(max-min+1))+min;

const sleep = ms =>
new Promise(resolve=>setTimeout(resolve,ms));

/*==========================================================
  ELEMENT CACHE
==========================================================*/

function cacheElements(){

    APP.elements={

        body:$("body"),

        header:$("header"),

        navbar:$(".navbar"),

        hero:$(".hero"),

        loader:$("#loader"),

        progress:$("#progressBar"),

        backTop:$("#backToTop"),

        searchInput:$("#searchInput"),

        searchResults:$("#searchResults"),

        mobileMenu:$("#mobileMenu") || $("#navbar"),

        menuButton:$("#menuButton") || $("#menuToggle"),

        counter:$$(".counter"),

        reveal:$$(".reveal"),

        cards:$$(".glass-card"),

        brandCards:$$(".brand-card"),

        downloadCards:$$(".download-card"),

        serviceCards:$$(".service-card")

    };

}

/* Scripts are loaded at the end of every page; cache once before feature setup. */
cacheElements();

/*==========================================================
  PAGE DETECTION
==========================================================*/

function detectPage(){

    const file=window.location.pathname
    .split("/")
    .pop()
    .replace(".html","");

    APP.currentPage=file || "index";

}

/*==========================================================
  DEVICE CHECK
==========================================================*/

function detectDevice(){

    APP.isMobile=window.innerWidth<=768;

    document.body.classList.toggle(
        "mobile-device",
        APP.isMobile
    );

}

/*==========================================================
  RESIZE
==========================================================*/

window.addEventListener("resize",()=>{

    detectDevice();

});

/*==========================================================
  ERROR HANDLER
==========================================================*/

window.addEventListener("error",event=>{

    console.error(

        "TECHFIX ERROR",

        event.message

    );

});

/*==========================================================
  STARTUP
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    cacheElements();

    detectPage();

    detectDevice();

    APP.initialized=true;

    console.log(

        "%cTECHFIX SOFTWARE EXP",

        "color:#00ff88;font-size:22px;font-weight:bold"

    );

    console.log(

        "Application Started"

    );

});

/*==========================================================
  END PART 1
==========================================================*/

/*

Next Part:

✔ Preloader
✔ Smooth Loading
✔ Progress Bar
✔ Page Fade Animation

Git Commit:

feat(script): initialize core application framework

*/
/*==========================================================
  SCRIPT.JS
  PART 2 — PREMIUM PRELOADER
==========================================================*/

/*==========================================================
  LOADING PROGRESS
==========================================================*/

APP.loadingProgress = 0;

APP.loadingFinished = false;

/*==========================================================
  UPDATE LOADER
==========================================================*/

function updateLoader(progress){

    if(!APP.elements.loader) return;

    const percent =
    APP.elements.loader.querySelector(".loader-percent");

    const bar =
    APP.elements.loader.querySelector(".loader-fill");

    if(percent){

        percent.textContent = progress + "%";

    }

    if(bar){

        bar.style.width = progress + "%";

    }

}

/*==========================================================
  FAKE LOADING
==========================================================*/

async function startLoader(){

    if(!APP.elements.loader) return;

    APP.loading=true;

    APP.loadingProgress=0;

    while(APP.loadingProgress<100){

        APP.loadingProgress+=random(2,8);

        if(APP.loadingProgress>100){

            APP.loadingProgress=100;

        }

        updateLoader(APP.loadingProgress);

        await sleep(random(25,80));

    }

    finishLoader();

}

/*==========================================================
  FINISH LOADER
==========================================================*/

function finishLoader(){

    APP.loadingFinished=true;

    APP.loading=false;

    if(!APP.elements.loader) return;

    APP.elements.loader.classList.add(

        "loader-hide"

    );

    setTimeout(()=>{

        APP.elements.loader.remove();

    },700);

}

/*==========================================================
  PAGE FADE
==========================================================*/

function pageFadeIn(){

    document.body.classList.add(

        "page-loaded"

    );

}

/*==========================================================
  WINDOW LOAD
==========================================================*/

window.addEventListener("load",()=>{

    startLoader();

    pageFadeIn();

});

/*==========================================================
  TOP PROGRESS BAR
==========================================================*/

function updateProgressBar(){

    if(!APP.elements.progress) return;

    const winScroll=

    document.documentElement.scrollTop||

    document.body.scrollTop;

    const height=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progress=

    (winScroll/height)*100;

    APP.elements.progress.style.width=

    progress+"%";

}

window.addEventListener(

    "scroll",

    updateProgressBar

);

/*==========================================================
  PAGE TITLE EFFECT
==========================================================*/

const originalTitle=document.title;

let titleTimer=null;

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

titleTimer=setInterval(()=>{

document.title=

"👋 Come Back | TechFix Software EXP";

},1000);

}

else{

clearInterval(titleTimer);

document.title=originalTitle;

}

}

);

/*==========================================================
  PERFORMANCE
==========================================================*/

window.requestAnimationFrame(()=>{

    updateProgressBar();

});

/*==========================================================
  END PART 2
==========================================================*/

/*

Next Part

✔ Sticky Header
✔ Mobile Navigation
✔ Hamburger Animation
✔ Active Navigation
✔ Auto Close Menu

Git Commit

feat(script): add premium preloader and loading system

*/
/*==========================================================
  SCRIPT.JS
  PART 3 — NAVIGATION SYSTEM
==========================================================*/

/*==========================================================
  STICKY HEADER
==========================================================*/

function stickyHeader(){

    if(!APP.elements.header) return;

    const scroll=window.scrollY;

    if(scroll>80){

        APP.elements.header.classList.add(

            "header-sticky"

        );

    }else{

        APP.elements.header.classList.remove(

            "header-sticky"

        );

    }

}

window.addEventListener(

    "scroll",

    stickyHeader

);

/*==========================================================
  MOBILE MENU
==========================================================*/

function openMobileMenu(){

    if(!APP.elements.mobileMenu) return;

    APP.elements.mobileMenu.classList.add(

        "menu-active"

    );

    document.body.classList.add(

        "menu-open"

    );

}

function closeMobileMenu(){

    if(!APP.elements.mobileMenu) return;

    APP.elements.mobileMenu.classList.remove(

        "menu-active"

    );

    document.body.classList.remove(

        "menu-open"

    );

}

/*==========================================================
  MENU BUTTON
==========================================================*/

if(APP.elements.menuButton){

APP.elements.menuButton.addEventListener(

"click",

()=>{

APP.elements.mobileMenu.classList.contains(

"menu-active"

)

?

closeMobileMenu()

:

openMobileMenu();

}

);

}

/*==========================================================
  AUTO CLOSE MENU
==========================================================*/

$$(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

closeMobileMenu();

});

});

/*==========================================================
  ACTIVE NAVIGATION
==========================================================*/

function activeNavigation(){

    const page=APP.currentPage;

    $$("nav a").forEach(link=>{

        const href=

        link.getAttribute("href")||"";

        if(

            href.includes(page)

        ){

            link.classList.add(

                "active"

            );

        }

    });

}

activeNavigation();

/*==========================================================
  ESC KEY CLOSE
==========================================================*/

document.addEventListener(

"keydown",

e=>{

if(

e.key==="Escape"

){

closeMobileMenu();

}

}

);

/*==========================================================
  CLICK OUTSIDE
==========================================================*/

document.addEventListener(

"click",

e=>{

if(

!APP.elements.mobileMenu||

!APP.elements.menuButton

) return;

if(

APP.elements.mobileMenu.classList.contains(

"menu-active"

)

&&

!APP.elements.mobileMenu.contains(e.target)

&&

!APP.elements.menuButton.contains(e.target)

){

closeMobileMenu();

}

});

/*==========================================================
  SMOOTH SCROLL
==========================================================*/

$$('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",e=>{

e.preventDefault();

const target=$(

anchor.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*==========================================================
  END PART 3
==========================================================*/

/*

Next Part

✔ Back To Top Button
✔ Scroll Reveal Animation
✔ Intersection Observer
✔ Fade Up Animation
✔ Zoom Animation

Git Commit

feat(script): add responsive navigation system

*/
/*==========================================================
  SCRIPT.JS
  PART 4 — SCROLL ANIMATIONS
==========================================================*/

/*==========================================================
  BACK TO TOP
==========================================================*/

function toggleBackToTop(){

    if(!APP.elements.backTop) return;

    if(window.scrollY>500){

        APP.elements.backTop.classList.add(

            "show"

        );

    }else{

        APP.elements.backTop.classList.remove(

            "show"

        );

    }

}

window.addEventListener(

    "scroll",

    toggleBackToTop

);

if(APP.elements.backTop){

APP.elements.backTop.addEventListener(

"click",

()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==========================================================
  INTERSECTION OBSERVER
==========================================================*/

APP.observers.reveal=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(

"active"

);

APP.observers.reveal.unobserve(

entry.target

);

}

});

},

{

threshold:0.15,

rootMargin:"0px 0px -80px 0px"

}

);

/*==========================================================
  START OBSERVER
==========================================================*/

function initializeReveal(){

APP.elements.reveal.forEach(item=>{

APP.observers.reveal.observe(item);

});

}

initializeReveal();

/*==========================================================
  SERVICE CARD ANIMATION
==========================================================*/

APP.elements.serviceCards.forEach(

(card,index)=>{

card.style.transitionDelay=

(index*0.08)+"s";

}

);

/*==========================================================
  BRAND CARD ANIMATION
==========================================================*/

APP.elements.brandCards.forEach(

(card,index)=>{

card.style.transitionDelay=

(index*0.05)+"s";

}

);

/*==========================================================
  DOWNLOAD CARD ANIMATION
==========================================================*/

APP.elements.downloadCards.forEach(

(card,index)=>{

card.style.transitionDelay=

(index*0.06)+"s";

}

);

/*==========================================================
  PARALLAX HERO
==========================================================*/

function heroParallax(){

if(!APP.elements.hero) return;

const offset=

window.pageYOffset;

APP.elements.hero.style.backgroundPositionY=

offset*0.35+"px";

}

window.addEventListener(

"scroll",

heroParallax

);

/*==========================================================
  FADE IN SECTIONS
==========================================================*/

$$("section").forEach(section=>{

section.classList.add(

"reveal"

);

});

/*==========================================================
  END PART 4
==========================================================*/

/*

Next Part

✔ Animated Counters
✔ Statistics Numbers
✔ Auto Count Effect
✔ Progress Circle
✔ Skills Animation

Git Commit

feat(script): add scroll reveal animations and back-to-top button

*/
/*==========================================================
  SCRIPT.JS
  PART 5 — ANIMATED COUNTERS
==========================================================*/

/*==========================================================
  COUNTER ANIMATION
==========================================================*/

function animateCounter(counter){

    const target=

    Number(counter.dataset.count)||0;

    const duration=2000;

    const increment=

    target/(duration/16);

    let current=0;

    function update(){

        current+=increment;

        if(current<target){

            counter.textContent=

            Math.floor(current).toLocaleString();

            requestAnimationFrame(update);

        }else{

            counter.textContent=

            target.toLocaleString();

        }

    }

    update();

}

/*==========================================================
  START COUNTERS
==========================================================*/

function startCounters(){

    if(APP.countersStarted) return;

    APP.countersStarted=true;

    APP.elements.counter.forEach(counter=>{

        animateCounter(counter);

    });

}

/*==========================================================
  COUNTER OBSERVER
==========================================================*/

APP.observers.counter=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounters();

}

});

},

{

threshold:0.45

}

);

/*==========================================================
  OBSERVE COUNTERS
==========================================================*/

APP.elements.counter.forEach(counter=>{

APP.observers.counter.observe(counter);

});

/*==========================================================
  RANDOM FLOAT EFFECT
==========================================================*/

function floatingCards(){

APP.elements.cards.forEach(card=>{

const x=random(-6,6);

const y=random(-6,6);

card.animate(

[

{

transform:

`translate(${x}px,${y}px)`

},

{

transform:

`translate(${-x}px,${-y}px)`

}

],

{

duration:random(3500,7000),

iterations:Infinity,

direction:"alternate",

easing:"ease-in-out"

}

);

});

}

floatingCards();

/*==========================================================
  HERO BUTTON RIPPLE
==========================================================*/

$$(".btn").forEach(button=>{

button.addEventListener(

"click",

e=>{

const ripple=create("span");

ripple.className="ripple";

const rect=

button.getBoundingClientRect();

const size=

Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.clientX-rect.left-size/2+"px";

ripple.style.top=

e.clientY-rect.top-size/2+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/*==========================================================
  HERO IMAGE FLOAT
==========================================================*/

const heroImage=$(".hero-image");

if(heroImage){

heroImage.animate(

[

{

transform:

"translateY(0px)"

},

{

transform:

"translateY(-18px)"

}

],

{

duration:3000,

iterations:Infinity,

direction:"alternate",

easing:"ease-in-out"

}

);

}

/*==========================================================
  END PART 5
==========================================================*/

/*

Next Part

✔ Typewriter Animation
✔ Hero Text Rotation
✔ Cursor Blink
✔ Dynamic Headlines
✔ Hero CTA Effects

Git Commit

feat(script): add animated counters and floating UI effects

*/
/*==========================================================
  SCRIPT.JS
  PART 6 — HERO TYPEWRITER & TEXT ROTATOR
==========================================================*/

/*==========================================================
  TYPEWRITER DATA
==========================================================*/

APP.typewriter={

element:$("#typewriter"),

speed:70,

deleteSpeed:35,

delay:1800,

loop:true,

words:[

"IMEI Repair",

"iCloud Bypass",

"FRP Unlock",

"Android Flashing",

"Apple Software",

"Pixel Repair",

"Samsung Repair",

"Data Recovery",

"Cyber Security",

"Ethical Hacking",

"Kali Linux Training",

"Mobile Software Solutions"

]

};

/*==========================================================
  TYPEWRITER
==========================================================*/

async function typeWriter(){

if(!APP.typewriter.element) return;

let wordIndex=0;

while(APP.typewriter.loop){

const word=

APP.typewriter.words[wordIndex];

for(let i=0;i<=word.length;i++){

APP.typewriter.element.textContent=

word.substring(0,i);

await sleep(APP.typewriter.speed);

}

await sleep(APP.typewriter.delay);

for(let i=word.length;i>=0;i--){

APP.typewriter.element.textContent=

word.substring(0,i);

await sleep(APP.typewriter.deleteSpeed);

}

wordIndex++;

if(wordIndex>=APP.typewriter.words.length){

wordIndex=0;

}

}

}

/*==========================================================
  START TYPEWRITER
==========================================================*/

document.addEventListener(

"DOMContentLoaded",

()=>{

typeWriter();

});

/*==========================================================
  CURSOR BLINK
==========================================================*/

const cursor=$("#typingCursor");

if(cursor){

setInterval(()=>{

cursor.classList.toggle(

"hide"

);

},500);

}

/*==========================================================
  HERO BADGE ROTATION
==========================================================*/

const heroBadge=$("#heroBadge");

if(heroBadge){

const badgeText=[

"Professional",

"Certified",

"Trusted",

"Fast Service",

"24/7 Support"

];

let badgeIndex=0;

setInterval(()=>{

badgeIndex++;

if(badgeIndex>=badgeText.length){

badgeIndex=0;

}

heroBadge.textContent=

badgeText[badgeIndex];

},2500);

}

/*==========================================================
  HERO CTA PULSE
==========================================================*/

$$(".hero .btn").forEach(btn=>{

btn.animate(

[

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],

{

duration:2200,

iterations:Infinity

}

);

});

/*==========================================================
  HERO GLOW
==========================================================*/

const heroContent=$(".hero-content");

if(heroContent){

heroContent.animate(

[

{

filter:"drop-shadow(0 0 0px #00ff99)"

},

{

filter:"drop-shadow(0 0 18px #00ff99)"

},

{

filter:"drop-shadow(0 0 0px #00ff99)"

}

],

{

duration:4000,

iterations:Infinity

}

);

}

/*==========================================================
  END PART 6
==========================================================*/

/*

Next Part

✔ Live Search Engine
✔ Search Suggestions
✔ Search Result Cards
✔ Search by Brand
✔ Search by Model
✔ Search by Alias

Git Commit

feat(script): add hero typewriter animation and dynamic headlines

*/
/*==========================================================
  SCRIPT.JS
  PART 7 — LIVE SEARCH ENGINE
==========================================================*/

/*==========================================================
  SEARCH DATABASE
==========================================================*/

APP.search={

query:"",

results:[],

maxResults:12

};

/*==========================================================
  NORMALIZE
==========================================================*/

function normalize(text){

return String(text)

.toLowerCase()

.trim()

.replace(/\s+/g," ");

}

/*==========================================================
  SEARCH DEVICES
==========================================================*/

function searchDevices(query){

query=normalize(query);

if(query.length===0) return [];

return TECHFIX.devices.filter(device=>{

const model=

normalize(device.model);

const brand=

normalize(device.brand);

const aliases=

(device.aliases||[])

.join(" ")

.toLowerCase();

return(

model.includes(query)||

brand.includes(query)||

aliases.includes(query)

);

}).slice(0,APP.search.maxResults);

}

/*==========================================================
  CREATE RESULT CARD
==========================================================*/

function createSearchCard(device){

return `

<div class="search-card"

data-model="${device.model}">

<img

src="${device.image}"

alt="${device.model}"

loading="lazy"

>

<div class="search-info">

<h4>${device.model}</h4>

<p>${device.brand}</p>

<span>

IMEI Repair :

Rs.${device.pricing.imeiRepair}

</span>

</div>

</div>

`;

}

/*==========================================================
  SHOW RESULTS
==========================================================*/

function renderSearchResults(results){

if(!APP.elements.searchResults) return;

if(results.length===0){

APP.elements.searchResults.innerHTML=

`

<div class="search-empty">

No device found.

</div>

`;

return;

}

APP.elements.searchResults.innerHTML=

results

.map(createSearchCard)

.join("");

APP.search.results=results;

}

/*==========================================================
  INPUT EVENT
==========================================================*/

if(APP.elements.searchInput){

APP.elements.searchInput.addEventListener(

"input",

e=>{

const query=e.target.value;

const results=

searchDevices(query);

renderSearchResults(results);

}

);

}

/*==========================================================
  FOCUS
==========================================================*/

if(APP.elements.searchInput){

APP.elements.searchInput.addEventListener(

"focus",

()=>{

APP.elements.searchResults.classList.add(

"active"

);

}

);

}

/*==========================================================
  CLICK OUTSIDE
==========================================================*/

document.addEventListener(

"click",

e=>{

if(

!APP.elements.searchInput||

!APP.elements.searchResults

) return;

if(

!APP.elements.searchInput.contains(e.target)

&&

!APP.elements.searchResults.contains(e.target)

){

APP.elements.searchResults.classList.remove(

"active"

);

}

});

/*==========================================================
  SEARCH RESULT CLICK
==========================================================*/

document.addEventListener(

"click",

e=>{

const card=

e.target.closest(".search-card");

if(!card) return;

const model=

card.dataset.model;

const device=

TECHFIX.getDevice(model);

if(device){

console.log(device);

}

});

/*==========================================================
  END PART 7
==========================================================*/

/*

Next Part

✔ Smart Suggestions
✔ Search Highlight
✔ Keyboard Navigation
✔ Enter Key Support
✔ Auto Scroll To Result

Git Commit

feat(script): add live device search engine

*/
/*==========================================================
  SCRIPT.JS
  PART 8 — SMART SEARCH EXPERIENCE
==========================================================*/

/*==========================================================
  SEARCH KEYBOARD INDEX
==========================================================*/

APP.search.selectedIndex=-1;

/*==========================================================
  HIGHLIGHT TEXT
==========================================================*/

function highlightText(text,query){

query=normalize(query);

if(!query) return text;

const regex=new RegExp(`(${query})`,"ig");

return text.replace(

regex,

"<mark>$1</mark>"

);

}

/*==========================================================
  RENDER RESULTS
==========================================================*/

function renderSearchResults(results){

if(!APP.elements.searchResults) return;

const query=normalize(APP.searchInput?.value||

APP.elements.searchInput?.value||

"");

if(results.length===0){

APP.elements.searchResults.innerHTML=

`

<div class="search-empty">

No matching device found.

</div>

`;

APP.search.selectedIndex=-1;

return;

}

APP.elements.searchResults.innerHTML=

results.map((device,index)=>`

<div

class="search-card"

data-index="${index}"

data-model="${device.model}"

>

<img

src="${device.image}"

alt="${device.model}"

loading="lazy"

>

<div class="search-info">

<h4>

${highlightText(device.model,query)}

</h4>

<p>

${highlightText(device.brand,query)}

</p>

<span>

IMEI Repair : Rs.${device.pricing.imeiRepair}

</span>

</div>

</div>

`).join("");

APP.search.results=results;

APP.search.selectedIndex=-1;

}

/*==========================================================
  KEYBOARD NAVIGATION
==========================================================*/

function updateSelectedCard(){

$$(".search-card").forEach(card=>{

card.classList.remove("selected");

});

const cards=$$(".search-card");

if(

APP.search.selectedIndex>=0&&

cards[APP.search.selectedIndex]

){

cards[APP.search.selectedIndex]

.classList.add("selected");

cards[APP.search.selectedIndex]

.scrollIntoView({

block:"nearest"

});

}

}

/*==========================================================
  INPUT KEYDOWN
==========================================================*/

if(APP.elements.searchInput){

APP.elements.searchInput.addEventListener(

"keydown",

e=>{

const cards=$$(".search-card");

switch(e.key){

case"ArrowDown":

e.preventDefault();

APP.search.selectedIndex++;

if(

APP.search.selectedIndex>=cards.length

){

APP.search.selectedIndex=0;

}

updateSelectedCard();

break;

case"ArrowUp":

e.preventDefault();

APP.search.selectedIndex--;

if(

APP.search.selectedIndex<0

){

APP.search.selectedIndex=

cards.length-1;

}

updateSelectedCard();

break;

case"Enter":

if(

APP.search.selectedIndex>=0

&&

cards[APP.search.selectedIndex]

){

cards[APP.search.selectedIndex].click();

}

break;

case"Escape":

APP.elements.searchResults

.classList.remove("active");

break;

}

});

}

/*==========================================================
  SEARCH CARD CLICK
==========================================================*/

document.addEventListener(

"click",

e=>{

const card=e.target.closest(

".search-card"

);

if(!card) return;

const model=

card.dataset.model;

const device=

TECHFIX.getDevice(model);

if(!device) return;

/* Future Details Page */

console.table(device);

showToast(

device.model+

" selected."

);

});

/*==========================================================
  AUTO CLEAR
==========================================================*/

function clearSearch(){

if(!APP.elements.searchInput) return;

APP.elements.searchInput.value="";

APP.elements.searchResults.innerHTML="";

APP.elements.searchResults

.classList.remove("active");

APP.search.selectedIndex=-1;

}

/*==========================================================
  CTRL + K
==========================================================*/

document.addEventListener(

"keydown",

e=>{

if(

e.ctrlKey&&

e.key.toLowerCase()==="k"

){

e.preventDefault();

APP.elements.searchInput?.focus();

}

});

/*==========================================================
  END PART 8
==========================================================*/

/*

Next Part

✔ Toast Notification System
✔ Success Messages
✔ Error Messages
✔ Warning Messages
✔ Copy Notification

Git Commit

feat(script): improve live search with keyboard navigation and highlighting

*/
/*==========================================================
  SCRIPT.JS
  PART 9 — TOAST NOTIFICATION SYSTEM
==========================================================*/

/*==========================================================
  TOAST CONTAINER
==========================================================*/

function createToastContainer(){

    let container=$("#toastContainer");

    if(container) return container;

    container=create("div");

    container.id="toastContainer";

    document.body.appendChild(container);

    return container;

}

/*==========================================================
  SHOW TOAST
==========================================================*/

function showToast(

message,

type="success",

duration=3000

){

    const container=

    createToastContainer();

    const toast=create("div");

    toast.className=

    `toast toast-${type}`;

    const icons={

        success:"✅",

        error:"❌",

        warning:"⚠️",

        info:"ℹ️"

    };

    toast.innerHTML=`

        <span class="toast-icon">

        ${icons[type]||"🔔"}

        </span>

        <span class="toast-message">

        ${message}

        </span>

    `;

    container.appendChild(toast);

    requestAnimationFrame(()=>{

        toast.classList.add("show");

    });

    setTimeout(()=>{

        hideToast(toast);

    },duration);

}

/*==========================================================
  HIDE TOAST
==========================================================*/

function hideToast(toast){

    if(!toast) return;

    toast.classList.remove("show");

    toast.classList.add("hide");

    setTimeout(()=>{

        toast.remove();

    },350);

}

/*==========================================================
  REMOVE ALL TOASTS
==========================================================*/

function clearToasts(){

    $$(".toast").forEach(toast=>{

        hideToast(toast);

    });

}

/*==========================================================
  COPY TO CLIPBOARD
==========================================================*/

async function copyText(text){

    try{

        await navigator.clipboard.writeText(text);

        showToast(

            "Copied to clipboard."

        );

    }

    catch{

        showToast(

            "Copy failed.",

            "error"

        );

    }

}

/*==========================================================
  COPY BUTTONS
==========================================================*/

$$("[data-copy]").forEach(button=>{

    button.addEventListener(

        "click",

        ()=>{

            copyText(

                button.dataset.copy

            );

        }

    );

});

/*==========================================================
  ONLINE / OFFLINE
==========================================================*/

window.addEventListener(

"online",

()=>{

showToast(

"Internet Connected",

"success"

);

});

window.addEventListener(

"offline",

()=>{

showToast(

"No Internet Connection",

"warning",

5000

);

});

/*==========================================================
  WELCOME MESSAGE
==========================================================*/

window.addEventListener(

"load",

()=>{

setTimeout(()=>{

showToast(

"Welcome to TechFix Software EXP",

"info",

3500

);

},1200);

});

/*==========================================================
  END PART 9
==========================================================*/

/*

Next Part

✔ Matrix Background
✔ Floating Particles
✔ Robot Glow
✔ Mouse Glow Effect
✔ Interactive Background

Git Commit

feat(script): add reusable toast notification system

*/
/*==========================================================
  SCRIPT.JS
  PART 10 — MATRIX BACKGROUND & CYBER EFFECTS
==========================================================*/

/*==========================================================
  MATRIX CANVAS
==========================================================*/

const matrixCanvas=$("#matrixCanvas");

let matrixCtx=null;

if(matrixCanvas){

matrixCtx=

matrixCanvas.getContext("2d");

}

/*==========================================================
  MATRIX SETTINGS
==========================================================*/

const matrix={

letters:

"01TECHFIXSOFTWAREEXP010101010110101010",

fontSize:16,

columns:[],

animation:null

};

/*==========================================================
  RESIZE CANVAS
==========================================================*/

function resizeMatrix(){

if(!matrixCanvas) return;

matrixCanvas.width=

window.innerWidth;

matrixCanvas.height=

window.innerHeight;

const totalColumns=

Math.floor(

matrixCanvas.width/

matrix.fontSize

);

matrix.columns=[];

for(

let i=0;

i<totalColumns;

i++

){

matrix.columns[i]=1;

}

}

resizeMatrix();

window.addEventListener(

"resize",

resizeMatrix

);

/*==========================================================
  DRAW MATRIX
==========================================================*/

function drawMatrix(){

if(

!matrixCanvas||

!matrixCtx

) return;

matrixCtx.fillStyle=

"rgba(0,0,0,0.05)";

matrixCtx.fillRect(

0,

0,

matrixCanvas.width,

matrixCanvas.height

);

matrixCtx.fillStyle=

"#00ff88";

matrixCtx.font=

matrix.fontSize+

"px monospace";

matrix.columns.forEach(

(y,index)=>{

const text=

matrix.letters[

Math.floor(

Math.random()*

matrix.letters.length

)

];

const x=

index*

matrix.fontSize;

matrixCtx.fillText(

text,

x,

y*

matrix.fontSize

);

if(

y*

matrix.fontSize>

matrixCanvas.height

&&

Math.random()>0.975

){

matrix.columns[index]=0;

}

matrix.columns[index]++;

}

);

}

/*==========================================================
  START MATRIX
==========================================================*/

function startMatrix(){

if(!matrixCanvas) return;

matrix.animation=

setInterval(

drawMatrix,

35

);

}

startMatrix();

/*==========================================================
  MOUSE GLOW
==========================================================*/

const mouseGlow=$("#mouseGlow");

document.addEventListener(

"mousemove",

e=>{

if(!mouseGlow) return;

mouseGlow.style.left=

e.clientX+"px";

mouseGlow.style.top=

e.clientY+"px";

});

/*==========================================================
  ROBOT PARALLAX
==========================================================*/

const robot=$(".robot-image");

document.addEventListener(

"mousemove",

e=>{

if(!robot) return;

const x=

(e.clientX/

window.innerWidth-

0.5)*20;

const y=

(e.clientY/

window.innerHeight-

0.5)*20;

robot.style.transform=

`translate(${x}px,${y}px)`;

});

/*==========================================================
  CYBER GRID
==========================================================*/

const cyberGrid=$("#cyberGrid");

if(cyberGrid){

cyberGrid.animate(

[

{

backgroundPosition:

"0 0"

},

{

backgroundPosition:

"0 120px"

}

],

{

duration:8000,

iterations:Infinity,

easing:"linear"

}

);

}

/*==========================================================
  HERO GLOW PULSE
==========================================================*/

const heroGlow=$("#heroGlow");

if(heroGlow){

heroGlow.animate(

[

{

opacity:.4,

transform:"scale(1)"

},

{

opacity:1,

transform:"scale(1.2)"

},

{

opacity:.4,

transform:"scale(1)"

}

],

{

duration:3000,

iterations:Infinity

}

);

}

/*==========================================================
  PERFORMANCE CLEANUP
==========================================================*/

window.addEventListener(

"beforeunload",

()=>{

if(matrix.animation){

clearInterval(

matrix.animation

);

}

});

/*==========================================================
  END PART 10
==========================================================*/

/*

Next Part

✔ Brand Filter
✔ Dynamic Device Cards
✔ Auto Card Generation
✔ Price Cards
✔ Service Rendering

Git Commit

feat(script): add matrix background and cyber visual effects

*/
/*==========================================================
  SCRIPT.JS
  PART 11 — DYNAMIC DEVICE RENDERING
==========================================================*/

/*==========================================================
  DEVICE CONTAINER
==========================================================*/

const deviceContainer=$("#deviceContainer");

/*==========================================================
  CREATE DEVICE CARD
==========================================================*/

function createDeviceCard(device){

return`

<div class="device-card glass-card reveal"

data-brand="${device.brand}"

data-model="${device.model}"

data-price="${device.pricing.imeiRepair}">

<div class="device-image">

<img

src="${device.image}"

alt="${device.model}"

loading="lazy">

</div>

<div class="device-content">

<h3>${device.model}</h3>

<p>${device.brand}</p>

<div class="device-services">

${device.services.imeiRepair?'<span>IMEI</span>':''}
${device.services.frp?'<span>FRP</span>':''}
${device.services.flashing?'<span>FLASH</span>':''}
${device.services.dataRecovery?'<span>RECOVERY</span>':''}

</div>

<div class="device-price">

Rs. ${device.pricing.imeiRepair}

</div>

<button

class="btn btn-primary device-details"

data-model="${device.model}">

View Details

</button>

</div>

</div>

`;

}

/*==========================================================
  RENDER DEVICES
==========================================================*/

function renderDevices(devices=TECHFIX.devices){

if(!deviceContainer) return;

deviceContainer.innerHTML=

devices

.map(createDeviceCard)

.join("");

initializeReveal();

showToast(

devices.length+

" Devices Loaded",

"success",

1500

);

}

/*==========================================================
  INITIAL LOAD
==========================================================*/

document.addEventListener(

"DOMContentLoaded",

()=>{

if(deviceContainer){

renderDevices();

}

});

/*==========================================================
  BRAND FILTER
==========================================================*/

function filterBrand(brand){

if(

brand==="all"

){

renderDevices();

return;

}

const filtered=

TECHFIX.devices.filter(device=>

device.brand===brand

);

renderDevices(filtered);

}

/*==========================================================
  FILTER BUTTONS
==========================================================*/

$$("[data-brand]").forEach(button=>{

button.addEventListener(

"click",

()=>{

$$("[data-brand]").forEach(btn=>

btn.classList.remove("active")

);

button.classList.add("active");

filterBrand(

button.dataset.brand

);

}

);

});

/*==========================================================
  DEVICE DETAILS
==========================================================*/

document.addEventListener(

"click",

e=>{

const button=

e.target.closest(

".device-details"

);

if(!button) return;

const model=

button.dataset.model;

const device=

TECHFIX.getDevice(model);

if(!device) return;

console.table(device);

showToast(

device.model,

"info",

2000

);

});

/*==========================================================
  SORT DEVICES
==========================================================*/

function sortDevices(type){

let list=[...TECHFIX.devices];

switch(type){

case"price":

list.sort(

(a,b)=>

a.pricing.imeiRepair-

b.pricing.imeiRepair

);

break;

case"name":

list.sort(

(a,b)=>

a.model.localeCompare(b.model)

);

break;

case"brand":

list.sort(

(a,b)=>

a.brand.localeCompare(b.brand)

);

break;

}

renderDevices(list);

}

/*==========================================================
  END PART 11
==========================================================*/

/*

Next Part

✔ Downloads Renderer
✔ Official Tool Links
✔ Firmware Cards
✔ Driver Cards
✔ Download Categories

Git Commit

feat(script): add dynamic device rendering and brand filters

*/
/*==========================================================
  SCRIPT.JS
  PART 12 — DOWNLOAD CENTER
==========================================================*/

/*==========================================================
  DOWNLOAD CONTAINER
==========================================================*/

const downloadContainer=$("#downloadContainer") || $("#downloadsContainer");

/*==========================================================
  CREATE DOWNLOAD CARD
==========================================================*/

function createDownloadCard(tool){

return`

<div class="download-card glass-card reveal">

<div class="download-header">

<h3>${tool.name}</h3>

<span class="download-version">

${tool.version}

</span>

</div>

<div class="download-body">

<p>${tool.description}</p>

<div class="download-category">

${tool.category}

</div>

${
tool.official

?

'<span class="official-badge">Official</span>'

:

'<span class="community-badge">Community</span>'

}

</div>

<div class="download-footer">

<a

href="${tool.download}"

target="_blank"

rel="noopener"

class="btn btn-primary download-btn"

data-tool="${tool.name}"

>

Download

</a>

</div>

</div>

`;

}

/*==========================================================
  RENDER DOWNLOADS
==========================================================*/

function renderDownloads(){

if(!downloadContainer) return;

downloadContainer.innerHTML=

TECHFIX.downloads

.map(createDownloadCard)

.join("");

initializeReveal();

}

/*==========================================================
  INITIALIZE
==========================================================*/

document.addEventListener(

"DOMContentLoaded",

()=>{

renderDownloads();

});

/*==========================================================
  DOWNLOAD CLICK
==========================================================*/

document.addEventListener(

"click",

e=>{

const button=

e.target.closest(

".download-btn"

);

if(!button) return;

showToast(

"Opening "+button.dataset.tool,

"success",

1800

);

});

/*==========================================================
  DOWNLOAD SEARCH
==========================================================*/

function searchDownloads(query){

query=query.toLowerCase();

const result=

TECHFIX.downloads.filter(tool=>

tool.name.toLowerCase().includes(query)||

tool.category.toLowerCase().includes(query)||

tool.description.toLowerCase().includes(query)

);

if(!downloadContainer) return;

downloadContainer.innerHTML=

result.map(createDownloadCard).join("");

}

/*==========================================================
  DOWNLOAD FILTER
==========================================================*/

function filterDownloads(category){

if(category==="all"){

renderDownloads();

return;

}

const result=

TECHFIX.downloads.filter(tool=>

tool.category===category

);

downloadContainer.innerHTML=

result.map(createDownloadCard).join("");

}

/*==========================================================
  DOWNLOAD STATS
==========================================================*/

function updateDownloadStats(){

const counter=$("#downloadCount");

if(counter){

counter.textContent=

TECHFIX.downloads.length;

}

}

updateDownloadStats();

/*==========================================================
  END PART 12
==========================================================*/

/*

Next Part

✔ Contact Form
✔ Form Validation
✔ WhatsApp Redirect
✔ Email Validation
✔ Success/Error Handling

Git Commit

feat(script): add download center rendering system

*/
/*==========================================================
  SCRIPT.JS
  PART 13 — CONTACT FORM & VALIDATION
==========================================================*/

/*==========================================================
  CONTACT FORM
==========================================================*/

const contactForm=$("#contactForm");

/*==========================================================
  EMAIL VALIDATION
==========================================================*/

function validateEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/*==========================================================
  PHONE VALIDATION
==========================================================*/

function validatePhone(phone){

return /^[0-9+\-\s]{8,20}$/.test(phone);

}

/*==========================================================
  FORM VALIDATION
==========================================================*/

function validateContactForm(){

const name=$("#name")?.value.trim();

const email=$("#email")?.value.trim();

const phone=$("#phone")?.value.trim();

const service=$("#service")?.value.trim();

const message=$("#message")?.value.trim();

if(!name){

showToast("Please enter your name.","warning");

return false;

}

if(!validateEmail(email)){

showToast("Please enter a valid email.","error");

return false;

}

if(!validatePhone(phone)){

showToast("Please enter a valid phone number.","error");

return false;

}

if(!service){

showToast("Please select a service.","warning");

return false;

}

if(message.length<10){

showToast("Message is too short.","warning");

return false;

}

return{

name,

email,

phone,

service,

message

};

}

/*==========================================================
  FORM SUBMIT
==========================================================*/

if(contactForm){

contactForm.addEventListener(

"submit",

e=>{

e.preventDefault();

const data=

validateContactForm();

if(!data) return;

showToast(

"Message Verified",

"success"

);

setTimeout(()=>{

openWhatsApp(data);

},800);

});

}

/*==========================================================
  WHATSAPP MESSAGE
==========================================================*/

function openWhatsApp(data){

const text=

`*TechFix Software EXP*%0A%0A`

+

`Name : ${data.name}%0A`

+

`Email : ${data.email}%0A`

+

`Phone : ${data.phone}%0A`

+

`Service : ${data.service}%0A`

+

`Message : ${data.message}`;

window.open(

`https://wa.me/966568152404?text=${text}`,

"_blank"

);

}

/*==========================================================
  RESET FORM
==========================================================*/

function resetContactForm(){

contactForm?.reset();

}

/*==========================================================
  CHARACTER COUNTER
==========================================================*/

const messageBox=$("#message");

const characterCount=$("#characterCount");

if(

messageBox&&

characterCount

){

messageBox.addEventListener(

"input",

()=>{

characterCount.textContent=

messageBox.value.length;

});

}

/*==========================================================
  AUTO FOCUS
==========================================================*/

window.addEventListener(

"load",

()=>{

$("#name")?.focus();

});

/*==========================================================
  END PART 13
==========================================================*/

/*

Next Part

✔ FAQ Accordion
✔ Auto Open/Close
✔ Plus Minus Animation
✔ Smooth Height Transition
✔ Search FAQ

Git Commit

feat(script): add professional contact form validation

*/
/*==========================================================
  SCRIPT.JS
  PART 14 — FAQ ACCORDION SYSTEM
==========================================================*/

/*==========================================================
  FAQ ELEMENTS
==========================================================*/

const faqItems=$$(".faq-item");

/*==========================================================
  CLOSE ALL FAQ
==========================================================*/

function closeAllFaq(){

faqItems.forEach(item=>{

item.classList.remove("active");

const body=item.querySelector(".faq-body");

if(body){

body.style.maxHeight=null;

}

});

}

/*==========================================================
  OPEN FAQ
==========================================================*/

function openFaq(item){

const body=item.querySelector(".faq-body");

item.classList.add("active");

if(body){

body.style.maxHeight=

body.scrollHeight+"px";

}

}

/*==========================================================
  TOGGLE FAQ
==========================================================*/

faqItems.forEach(item=>{

const header=

item.querySelector(".faq-header");

if(!header) return;

header.addEventListener("click",()=>{

const active=

item.classList.contains("active");

closeAllFaq();

if(!active){

openFaq(item);

}

});

});

/*==========================================================
  SEARCH FAQ
==========================================================*/

const faqSearch=$("#faqSearch");

if(faqSearch){

faqSearch.addEventListener("input",e=>{

const value=

e.target.value.toLowerCase();

faqItems.forEach(item=>{

const text=

item.textContent.toLowerCase();

item.style.display=

text.includes(value)

?

"block"

:

"none";

});

});

}

/*==========================================================
  OPEN FIRST FAQ
==========================================================*/

if(faqItems.length){

openFaq(faqItems[0]);

}

/*==========================================================
  FAQ COUNTER
==========================================================*/

const faqCounter=$("#faqCounter");

if(faqCounter){

faqCounter.textContent=

faqItems.length;

}

/*==========================================================
  FAQ URL HASH
==========================================================*/

window.addEventListener("load",()=>{

const hash=

window.location.hash;

if(!hash) return;

const target=$(hash);

if(target&&target.classList.contains("faq-item")){

closeAllFaq();

openFaq(target);

target.scrollIntoView({

behavior:"smooth",

block:"center"

});

}

});

/*==========================================================
  END PART 14
==========================================================*/

/*

Next Part

✔ Testimonials Slider
✔ Auto Slide
✔ Previous / Next
✔ Touch Swipe
✔ Pagination Dots

Git Commit

feat(script): add interactive FAQ accordion system

*/
/*==========================================================
  SCRIPT.JS
  PART 15 — PREMIUM TESTIMONIAL SLIDER
==========================================================*/

/*==========================================================
  ELEMENTS
==========================================================*/

const testimonialSlider=$("#testimonialSlider");

const testimonialTrack=$("#testimonialTrack");

const testimonialCards=$$(".testimonial-card");

const testimonialPrev=$("#testimonialPrev");

const testimonialNext=$("#testimonialNext");

const testimonialDots=$("#testimonialDots");

/*==========================================================
  CONFIG
==========================================================*/

const testimonial={

current:0,

total:testimonialCards.length,

interval:null,

speed:5000

};

/*==========================================================
  CREATE DOTS
==========================================================*/

function createTestimonialDots(){

if(!testimonialDots) return;

testimonialDots.innerHTML="";

testimonialCards.forEach((_,index)=>{

const dot=create("button");

dot.className="testimonial-dot";

if(index===0){

dot.classList.add("active");

}

dot.dataset.index=index;

testimonialDots.appendChild(dot);

});

}

createTestimonialDots();

/*==========================================================
  UPDATE SLIDER
==========================================================*/

function updateTestimonials(){

if(!testimonialTrack) return;

testimonialTrack.style.transform=

`translateX(-${testimonial.current*100}%)`;

$$(".testimonial-dot").forEach(dot=>{

dot.classList.remove("active");

});

const active=

testimonialDots?.children[testimonial.current];

if(active){

active.classList.add("active");

}

}

/*==========================================================
  NEXT
==========================================================*/

function nextTestimonial(){

testimonial.current++;

if(

testimonial.current>=testimonial.total

){

testimonial.current=0;

}

updateTestimonials();

}

/*==========================================================
  PREVIOUS
==========================================================*/

function previousTestimonial(){

testimonial.current--;

if(

testimonial.current<0

){

testimonial.current=

testimonial.total-1;

}

updateTestimonials();

}

/*==========================================================
  BUTTONS
==========================================================*/

testimonialNext?.addEventListener(

"click",

nextTestimonial

);

testimonialPrev?.addEventListener(

"click",

previousTestimonial

);

/*==========================================================
  DOT CLICK
==========================================================*/

testimonialDots?.addEventListener(

"click",

e=>{

const dot=

e.target.closest(

".testimonial-dot"

);

if(!dot) return;

testimonial.current=

Number(dot.dataset.index);

updateTestimonials();

});

/*==========================================================
  AUTO PLAY
==========================================================*/

function startTestimonials(){

if(testimonial.total<=1) return;

testimonial.interval=

setInterval(

nextTestimonial,

testimonial.speed

);

}

function stopTestimonials(){

clearInterval(

testimonial.interval

);

}

startTestimonials();

/*==========================================================
  PAUSE ON HOVER
==========================================================*/

testimonialSlider?.addEventListener(

"mouseenter",

stopTestimonials

);

testimonialSlider?.addEventListener(

"mouseleave",

startTestimonials

);

/*==========================================================
  TOUCH SUPPORT
==========================================================*/

let touchStart=0;

let touchEnd=0;

testimonialSlider?.addEventListener(

"touchstart",

e=>{

touchStart=

e.changedTouches[0].clientX;

});

testimonialSlider?.addEventListener(

"touchend",

e=>{

touchEnd=

e.changedTouches[0].clientX;

if(touchStart-touchEnd>50){

nextTestimonial();

}

if(touchEnd-touchStart>50){

previousTestimonial();

}

});

/*==========================================================
  END PART 15
==========================================================*/

/*

Next Part

✔ Statistics Animation
✔ Progress Bars
✔ Skill Bars
✔ Circular Progress
✔ Live Counters

Git Commit

feat(script): add premium testimonial slider

*/
/*==========================================================
  SCRIPT.JS
  PART 16 — PROGRESS BARS & LIVE STATISTICS
==========================================================*/

/*==========================================================
  PROGRESS BARS
==========================================================*/

const progressBars=$$(".progress-bar");

function animateProgressBars(){

progressBars.forEach(bar=>{

const value=

Number(

bar.dataset.progress

)||0;

bar.style.width="0%";

setTimeout(()=>{

bar.style.width=

value+"%";

},150);

});

}

/*==========================================================
  PROGRESS OBSERVER
==========================================================*/

APP.observers.progress=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateProgressBars();

APP.observers.progress.unobserve(

entry.target

);

}

});

},

{

threshold:.35

}

);

progressBars.forEach(bar=>{

APP.observers.progress.observe(bar);

});

/*==========================================================
  CIRCLE PROGRESS
==========================================================*/

$$(".circle-progress").forEach(circle=>{

const percent=

Number(

circle.dataset.percent

)||0;

const radius=54;

const circumference=

2*Math.PI*radius;

circle.style.strokeDasharray=

circumference;

circle.style.strokeDashoffset=

circumference;

setTimeout(()=>{

circle.style.strokeDashoffset=

circumference-

(circumference*percent/100);

},500);

});

/*==========================================================
  LIVE STATS
==========================================================*/

const stats={

clients:2500,

repairs:12000,

downloads:8500,

countries:28

};

function updateLiveStats(){

const clients=$("#clientsCount");

const repairs=$("#repairsCount");

const downloads=$("#downloadsCount");

const countries=$("#countriesCount");

if(clients){

clients.textContent=

stats.clients.toLocaleString();

}

if(repairs){

repairs.textContent=

stats.repairs.toLocaleString();

}

if(downloads){

downloads.textContent=

stats.downloads.toLocaleString();

}

if(countries){

countries.textContent=

stats.countries;

}

}

updateLiveStats();

/*==========================================================
  RANDOM ONLINE USERS
==========================================================*/

const online=$("#onlineUsers");

if(online){

setInterval(()=>{

online.textContent=

random(18,45);

},4000);

}

/*==========================================================
  SERVICE SUCCESS RATE
==========================================================*/

const success=$("#successRate");

if(success){

let value=98.5;

setInterval(()=>{

value+=(Math.random()-.5)*0.1;

success.textContent=

value.toFixed(1)+"%";

},3000);

}

/*==========================================================
  TODAY REPAIRS
==========================================================*/

const today=$("#todayRepairs");

if(today){

today.textContent=

random(15,40);

}

/*==========================================================
  END PART 16
==========================================================*/

/*

Next Part

✔ Theme Switcher
✔ Dark / Light Mode
✔ Save Theme
✔ Auto Detect Theme
✔ Theme Animation

Git Commit

feat(script): add animated progress bars and live statistics

*/
/*==========================================================
  SCRIPT.JS
  PART 17 — THEME MANAGER (DARK / LIGHT MODE)
==========================================================*/

/*==========================================================
  THEME ELEMENT
==========================================================*/

const themeToggle=$("#themeToggle");

/*==========================================================
  CURRENT THEME
==========================================================*/

function getTheme(){

return localStorage.getItem("techfix-theme")||

"dark";

}

/*==========================================================
  APPLY THEME
==========================================================*/

function applyTheme(theme){

document.documentElement.setAttribute(

"data-theme",

theme

);

APP.theme=theme;

localStorage.setItem(

"techfix-theme",

theme

);

if(themeToggle){

themeToggle.innerHTML=

theme==="dark"

?

"🌙"

:

"☀️";

}

}

/*==========================================================
  TOGGLE THEME
==========================================================*/

function toggleTheme(){

const current=

getTheme();

const next=

current==="dark"

?

"light"

:

"dark";

applyTheme(next);

showToast(

next==="dark"

?

"Dark Mode Enabled"

:

"Light Mode Enabled",

"success",

1800

);

}

/*==========================================================
  INITIALIZE
==========================================================*/

applyTheme(

getTheme()

);

themeToggle?.addEventListener(

"click",

toggleTheme

);

/*==========================================================
  SYSTEM THEME
==========================================================*/

const mediaQuery=

window.matchMedia(

"(prefers-color-scheme: dark)"

);

mediaQuery.addEventListener(

"change",

e=>{

if(

!localStorage.getItem(

"techfix-theme"

)

){

applyTheme(

e.matches

?

"dark"

:

"light"

);

}

});

/*==========================================================
  THEME TRANSITION
==========================================================*/

function enableThemeTransition(){

document.documentElement.classList.add(

"theme-transition"

);

setTimeout(()=>{

document.documentElement.classList.remove(

"theme-transition"

);

},400);

}

themeToggle?.addEventListener(

"click",

enableThemeTransition

);

/*==========================================================
  RESET THEME
==========================================================*/

window.addEventListener(

"keydown",

e=>{

if(

e.altKey&&

e.key.toLowerCase()==="t"

){

localStorage.removeItem(

"techfix-theme"

);

applyTheme("dark");

showToast(

"Theme Reset",

"info"

);

}

});

/*==========================================================
  END PART 17
==========================================================*/

/*

Next Part

✔ Lazy Loading Images
✔ Image Skeleton Loader
✔ Image Fade Animation
✔ Error Placeholder
✔ Performance Optimization

Git Commit

feat(script): add professional dark light theme manager

*/
/*==========================================================
  SCRIPT.JS
  PART 18 — LAZY LOADING & IMAGE OPTIMIZATION
==========================================================*/

/*==========================================================
  LAZY IMAGES
==========================================================*/

const lazyImages=$$("img[loading='lazy']");

/*==========================================================
  IMAGE OBSERVER
==========================================================*/

APP.observers.images=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const image=entry.target;

const source=image.dataset.src;

if(source){

image.src=source;

}

image.classList.add("image-loaded");

APP.observers.images.unobserve(image);

});

},

{

rootMargin:"150px",

threshold:0.01

}

);

/*==========================================================
  OBSERVE IMAGES
==========================================================*/

lazyImages.forEach(image=>{

if(image.dataset.src){

APP.observers.images.observe(image);

}

});

/*==========================================================
  IMAGE LOADED
==========================================================*/

lazyImages.forEach(image=>{

image.addEventListener(

"load",

()=>{

image.classList.add(

"loaded"

);

image.parentElement?.classList.add(

"image-ready"

);

}

);

});

/*==========================================================
  IMAGE ERROR
==========================================================*/

lazyImages.forEach(image=>{

image.addEventListener(

"error",

()=>{

image.src=

"assets/images/logo.png";

image.classList.add(

"image-error"

);

});

});

/*==========================================================
  SKELETON EFFECT
==========================================================*/

$$(".image-wrapper").forEach(wrapper=>{

wrapper.classList.add(

"skeleton-loading"

);

});

lazyImages.forEach(image=>{

image.addEventListener(

"load",

()=>{

image.parentElement?.classList.remove(

"skeleton-loading"

);

});

});

/*==========================================================
  PRELOAD HERO
==========================================================*/

function preloadHero(){

const hero=new Image();

hero.src=

"assets/images/hero-home.png";

}

preloadHero();

/*==========================================================
  PRELOAD LOGO
==========================================================*/

function preloadLogo(){

const logo=new Image();

logo.src=

"assets/images/logo.png";

}

preloadLogo();

/*==========================================================
  PERFORMANCE
==========================================================*/

if("requestIdleCallback" in window){

requestIdleCallback(()=>{

console.log(

"Images Optimized"

);

});

}

/*==========================================================
  END PART 18
==========================================================*/

/*

Next Part

✔ Custom Cursor
✔ Cursor Glow
✔ Magnetic Buttons
✔ Mouse Trail
✔ Hover Effects

Git Commit

feat(script): add lazy image loading and performance optimization

*/
/*==========================================================
  SCRIPT.JS
  PART 19 — CUSTOM CURSOR & MAGNETIC EFFECTS
==========================================================*/

/*==========================================================
  CURSOR ELEMENTS
==========================================================*/

const customCursor=$("#customCursor");

const cursorDot=$("#cursorDot");

const magneticElements=$$(".magnetic");

/*==========================================================
  DESKTOP ONLY
==========================================================*/

const desktopDevice=

window.matchMedia("(pointer:fine)").matches;

/*==========================================================
  CURSOR MOVE
==========================================================*/

if(desktopDevice&&customCursor&&cursorDot){

document.addEventListener(

"mousemove",

e=>{

customCursor.style.left=

e.clientX+"px";

customCursor.style.top=

e.clientY+"px";

cursorDot.style.left=

e.clientX+"px";

cursorDot.style.top=

e.clientY+"px";

});

}

/*==========================================================
  CURSOR HOVER
==========================================================*/

$$("a,button,.btn,.glass-card,.device-card").forEach(item=>{

item.addEventListener(

"mouseenter",

()=>{

customCursor?.classList.add(

"customCursor-hover"

);

});

item.addEventListener(

"mouseleave",

()=>{

customCursor?.classList.remove(

"customCursor-hover"

);

});

});

/*==========================================================
  MAGNETIC BUTTON
==========================================================*/

magneticElements.forEach(element=>{

element.addEventListener(

"mousemove",

e=>{

const rect=

element.getBoundingClientRect();

const x=

e.clientX-rect.left;

const y=

e.clientY-rect.top;

const moveX=

(x-rect.width/2)*0.20;

const moveY=

(y-rect.height/2)*0.20;

element.style.transform=

`translate(${moveX}px,${moveY}px)`;

});

element.addEventListener(

"mouseleave",

()=>{

element.style.transform=

"translate(0,0)";

});

});

/*==========================================================
  CURSOR CLICK
==========================================================*/

document.addEventListener(

"mousedown",

()=>{

customCursor?.classList.add(

"customCursor-click"

);

});

document.addEventListener(

"mouseup",

()=>{

customCursor?.classList.remove(

"customCursor-click"

);

});

/*==========================================================
  MOUSE TRAIL
==========================================================*/

document.addEventListener(

"mousemove",

e=>{

if(!desktopDevice) return;

const trail=create("span");

trail.className="mouse-trail";

trail.style.left=e.clientX+"px";

trail.style.top=e.clientY+"px";

document.body.appendChild(trail);

setTimeout(()=>{

trail.remove();

},600);

});

/*==========================================================
  HIDE CURSOR
==========================================================*/

document.addEventListener(

"mouseleave",

()=>{

customCursor?.classList.add("hidden");

cursorDot?.classList.add("hidden");

});

document.addEventListener(

"mouseenter",

()=>{

customCursor?.classList.remove("hidden");

cursorDot?.classList.remove("hidden");

});

/*==========================================================
  END PART 19
==========================================================*/

/*

Next Part

✔ Scroll Spy
✔ Active Navigation
✔ URL Hash Tracking
✔ Auto Section Highlight
✔ Reading Progress

Git Commit

feat(script): add premium custom customCursor and magnetic interactions

*/
/*==========================================================
  SCRIPT.JS
  PART 20 — SCROLL SPY & ACTIVE NAVIGATION
==========================================================*/

/*==========================================================
  SECTION LIST
==========================================================*/

const pageSections=$$("section[id]");

const navLinks=$$("nav a[href^='#']");

/*==========================================================
  SCROLL SPY
==========================================================*/

function updateActiveSection(){

const scrollPosition=

window.scrollY+180;

pageSections.forEach(section=>{

const top=section.offsetTop;

const height=section.offsetHeight;

const id=section.getAttribute("id");

if(

scrollPosition>=top&&

scrollPosition<top+height

){

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+id

){

link.classList.add("active");

}

});

}

});

}

window.addEventListener(

"scroll",

updateActiveSection

);

/*==========================================================
  READING PROGRESS
==========================================================*/

const readingProgress=$("#readingProgress");

function updateReadingProgress(){

if(!readingProgress) return;

const scroll=

window.scrollY;

const height=

document.documentElement.scrollHeight-

window.innerHeight;

const percent=

Math.min(

100,

(scroll/height)*100

);

readingProgress.style.width=

percent+"%";

}

window.addEventListener(

"scroll",

updateReadingProgress

);

/*==========================================================
  URL HASH UPDATE
==========================================================*/

function updateHash(){

pageSections.forEach(section=>{

const rect=

section.getBoundingClientRect();

if(

rect.top<150&&

rect.bottom>150

){

history.replaceState(

null,

"",

"#"+section.id

);

}

});

}

window.addEventListener(

"scroll",

updateHash

);

/*==========================================================
  SCROLL DIRECTION
==========================================================*/

APP.scrollDirection="down";

let lastScroll=0;

window.addEventListener(

"scroll",

()=>{

const current=

window.pageYOffset;

APP.scrollDirection=

current>lastScroll

?

"down"

:

"up";

lastScroll=current;

});

/*==========================================================
  AUTO HIDE HEADER
==========================================================*/

let previousScroll=0;

window.addEventListener(

"scroll",

()=>{

if(!APP.elements.header) return;

const current=

window.pageYOffset;

if(

current>previousScroll&&

current>150

){

APP.elements.header.classList.add(

"header-hidden"

);

}else{

APP.elements.header.classList.remove(

"header-hidden"

);

}

previousScroll=current;

});

/*==========================================================
  SCROLL TO HASH ON LOAD
==========================================================*/

window.addEventListener(

"load",

()=>{

if(

window.location.hash

){

const target=$(

window.location.hash

);

target?.scrollIntoView({

behavior:"smooth"

});

}

});

/*==========================================================
  END PART 20
==========================================================*/

/*

Next Part

✔ Numbers Counter Refresh
✔ Website Visitor Counter
✔ Live Clock
✔ Pakistan Time
✔ Digital Clock

Git Commit

feat(script): add scroll spy and intelligent navigation tracking

*/
/*==========================================================
  SCRIPT.JS
  PART 21 — LIVE CLOCK & WEBSITE STATS
==========================================================*/

/*==========================================================
  LIVE DIGITAL CLOCK
==========================================================*/

const digitalClock=$("#digitalClock");

function updateDigitalClock(){

if(!digitalClock) return;

const now=new Date();

digitalClock.textContent=

now.toLocaleTimeString(

"en-PK",

{

hour:"2-digit",

minute:"2-digit",

second:"2-digit",

hour12:true

}

);

}

updateDigitalClock();

setInterval(

updateDigitalClock,

1000

);

/*==========================================================
  CURRENT DATE
==========================================================*/

const currentDate=$("#currentDate");

function updateCurrentDate(){

if(!currentDate) return;

const now=new Date();

currentDate.textContent=

now.toLocaleDateString(

"en-PK",

{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

}

);

}

updateCurrentDate();

/*==========================================================
  VISITOR COUNTER
==========================================================*/

const visitorCounter=$("#visitorCounter");

function updateVisitorCounter(){

let visitors=

Number(

localStorage.getItem(

"techfix-visitors"

)

)||15420;

visitors++;

localStorage.setItem(

"techfix-visitors",

visitors

);

if(visitorCounter){

visitorCounter.textContent=

visitors.toLocaleString();

}

}

updateVisitorCounter();

/*==========================================================
  PAGE VISITS
==========================================================*/

const pageViews=$("#pageViews");

function updatePageViews(){

let views=

Number(

sessionStorage.getItem(

"techfix-pageviews"

)

)||0;

views++;

sessionStorage.setItem(

"techfix-pageviews",

views

);

if(pageViews){

pageViews.textContent=views;

}

}

updatePageViews();

/*==========================================================
  ONLINE STATUS
==========================================================*/

const onlineStatus=$("#onlineStatus");

function updateOnlineStatus(){

if(!onlineStatus) return;

onlineStatus.textContent=

navigator.onLine

?

"🟢 Online"

:

"🔴 Offline";

}

updateOnlineStatus();

window.addEventListener(

"online",

updateOnlineStatus

);

window.addEventListener(

"offline",

updateOnlineStatus

);

/*==========================================================
  PAGE LOAD TIME
==========================================================*/

window.addEventListener(

"load",

()=>{

const loadTime=$("#loadTime");

if(!loadTime) return;

const timing=

performance.now()/1000;

loadTime.textContent=

timing.toFixed(2)+"s";

});

/*==========================================================
  COPYRIGHT YEAR
==========================================================*/

$$(".currentYear").forEach(item=>{

item.textContent=

new Date().getFullYear();

});

/*==========================================================
  END PART 21
==========================================================*/

/*

Next Part

✔ WhatsApp Floating Button
✔ Call Button
✔ Social Media Sidebar
✔ Share Website
✔ Copy Website Link

Git Commit

feat(script): add live clock and website statistics

*/
/*==========================================================
  SCRIPT.JS
  PART 22 — FLOATING CONTACT & SOCIAL HUB
==========================================================*/

/*==========================================================
  SOCIAL LINKS
==========================================================*/

const SOCIAL={

whatsapp:"https://wa.me/966568152404",

facebook:"https://www.facebook.com/share/184Xzq7aHg/",

youtube:"https://www.youtube.com/@TechfixSoftwareEXP",

tiktok:"https://www.tiktok.com/@techfixexp?_r=1&_t=ZS-989jFvQDjro",

email:"mailto:officialtechfix786@gmail.com",

website:"https://officialtechfix786.github.io/techfix-website/"

};

/*==========================================================
  FLOATING BUTTONS
==========================================================*/

$$("[data-social]").forEach(button=>{

button.addEventListener(

"click",

()=>{

const social=

button.dataset.social;

const url=

SOCIAL[social];

if(!url) return;

window.open(

url,

"_blank",

"noopener"

);

showToast(

"Opening "+social,

"success",

1500

);

});

});

/*==========================================================
  FLOATING WHATSAPP
==========================================================*/

const whatsappButton=$("#floatingWhatsapp");

whatsappButton?.addEventListener(

"click",

()=>{

window.open(

SOCIAL.whatsapp,

"_blank"

);

});

/*==========================================================
  EMAIL BUTTON
==========================================================*/

const emailButton=$("#emailButton");

emailButton?.addEventListener(

"click",

()=>{

window.location.href=

SOCIAL.email;

});

/*==========================================================
  SHARE WEBSITE
==========================================================*/

async function shareWebsite(){

const shareData={

title:"TechFix Software EXP",

text:"Professional Mobile Software Solutions",

url:SOCIAL.website

};

if(navigator.share){

try{

await navigator.share(

shareData

);

showToast(

"Website Shared",

"success"

);

}

catch{}

}else{

copyWebsiteLink();

}

}

/*==========================================================
  COPY WEBSITE LINK
==========================================================*/

async function copyWebsiteLink(){

try{

await navigator.clipboard.writeText(

SOCIAL.website

);

showToast(

"Website link copied."

);

}

catch{

showToast(

"Unable to copy link.",

"error"

);

}

}

/*==========================================================
  SHARE BUTTON
==========================================================*/

$("#shareWebsite")

?.addEventListener(

"click",

shareWebsite

);

/*==========================================================
  COPY LINK BUTTON
==========================================================*/

$("#copyWebsite")

?.addEventListener(

"click",

copyWebsiteLink

);

/*==========================================================
  SOCIAL SIDEBAR ANIMATION
==========================================================*/

const socialSidebar=$("#socialSidebar");

if(socialSidebar){

socialSidebar.animate(

[

{

transform:"translateX(80px)",

opacity:0

},

{

transform:"translateX(0)",

opacity:1

}

],

{

duration:1000,

fill:"forwards"

}

);

}

/*==========================================================
  CONTACT CARD HOVER
==========================================================*/

$$(".contact-card").forEach(card=>{

card.addEventListener(

"mouseenter",

()=>{

card.style.transform=

"translateY(-8px) scale(1.02)";

});

card.addEventListener(

"mouseleave",

()=>{

card.style.transform="";

});

});

/*==========================================================
  END PART 22
==========================================================*/

/*

Next Part

✔ Newsletter Subscription
✔ Email Validation
✔ Local Storage Save
✔ Auto Welcome Back
✔ Subscription Animation

Git Commit

feat(script): add floating contact hub and social media integration

*/
/*==========================================================
  SCRIPT.JS
  PART 23 — NEWSLETTER & LOCAL STORAGE
==========================================================*/

/*==========================================================
  NEWSLETTER FORM
==========================================================*/

const newsletterForm=$("#newsletterForm");

const newsletterEmail=$("#newsletterEmail");

/*==========================================================
  VALIDATE EMAIL
==========================================================*/

function isValidNewsletterEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

/*==========================================================
  SAVE SUBSCRIBER
==========================================================*/

function saveSubscriber(email){

const subscribers=

JSON.parse(

localStorage.getItem(

"techfixSubscribers"

)||"[]"

);

if(

subscribers.includes(email)

){

showToast(

"You are already subscribed.",

"warning"

);

return false;

}

subscribers.push(email);

localStorage.setItem(

"techfixSubscribers",

JSON.stringify(subscribers)

);

return true;

}

/*==========================================================
  NEWSLETTER SUBMIT
==========================================================*/

newsletterForm?.addEventListener(

"submit",

e=>{

e.preventDefault();

const email=

newsletterEmail.value.trim();

if(

!isValidNewsletterEmail(email)

){

showToast(

"Please enter a valid email.",

"error"

);

return;

}

if(

saveSubscriber(email)

){

showToast(

"Thank you for subscribing!",

"success"

);

newsletterForm.reset();

}

});

/*==========================================================
  SUBSCRIBER COUNT
==========================================================*/

function updateSubscriberCount(){

const counter=$("#subscriberCount");

if(!counter) return;

const subscribers=

JSON.parse(

localStorage.getItem(

"techfixSubscribers"

)||"[]"

);

counter.textContent=

subscribers.length.toLocaleString();

}

updateSubscriberCount();

/*==========================================================
  RETURNING VISITOR
==========================================================*/

function welcomeBack(){

const visited=

localStorage.getItem(

"techfixVisited"

);

if(visited){

setTimeout(()=>{

showToast(

"Welcome back to TechFix Software EXP!",

"info",

3000

);

},1500);

}else{

localStorage.setItem(

"techfixVisited",

"true"

);

}

}

window.addEventListener(

"load",

welcomeBack

);

/*==========================================================
  LAST VISIT
==========================================================*/

function saveLastVisit(){

localStorage.setItem(

"techfixLastVisit",

new Date().toISOString()

);

}

window.addEventListener(

"beforeunload",

saveLastVisit

);

/*==========================================================
  SHOW LAST VISIT
==========================================================*/

const lastVisit=$("#lastVisit");

if(lastVisit){

const value=

localStorage.getItem(

"techfixLastVisit"

);

if(value){

lastVisit.textContent=

new Date(value)

.toLocaleString(

"en-PK"

);

}

}

/*==========================================================
  STORAGE INFO
==========================================================*/

console.log(

"Subscribers:",

JSON.parse(

localStorage.getItem(

"techfixSubscribers"

)||"[]"

).length

);

/*==========================================================
  END PART 23
==========================================================*/

/*

Next Part

✔ Website Settings
✔ User Preferences
✔ Language Ready
✔ Performance Monitor
✔ Memory Cleanup

Git Commit

feat(script): add newsletter subscription and local storage support

*/
/*==========================================================
  SCRIPT.JS
  PART 24 — WEBSITE SETTINGS & PERFORMANCE
==========================================================*/

/*==========================================================
  USER SETTINGS
==========================================================*/

APP.settings={

animations:true,

sound:false,

notifications:true,

reducedMotion:false,

language:"en",

save(){

localStorage.setItem(

"techfix-settings",

JSON.stringify(this)

);

},

load(){

const saved=

localStorage.getItem(

"techfix-settings"

);

if(saved){

Object.assign(

this,

JSON.parse(saved)

);

}

}

};

APP.settings.load();

/*==========================================================
  PERFORMANCE MONITOR
==========================================================*/

APP.performance={

start:performance.now(),

fps:60,

memory:null

};

function monitorPerformance(){

const end=performance.now();

APP.performance.loadTime=

(end-APP.performance.start)

.toFixed(2);

if(

performance.memory

){

APP.performance.memory={

used:

Math.round(

performance.memory.usedJSHeapSize/

1048576

),

total:

Math.round(

performance.memory.totalJSHeapSize/

1048576

)

};

}

}

window.addEventListener(

"load",

monitorPerformance

);

/*==========================================================
  PAGE VISIBILITY
==========================================================*/

document.addEventListener(

"visibilitychange",

()=>{

APP.isVisible=

!document.hidden;

});

/*==========================================================
  REDUCED MOTION
==========================================================*/

const reducedMotion=

window.matchMedia(

"(prefers-reduced-motion: reduce)"

);

APP.settings.reducedMotion=

reducedMotion.matches;

reducedMotion.addEventListener(

"change",

e=>{

APP.settings.reducedMotion=

e.matches;

APP.settings.save();

});

/*==========================================================
  MEMORY CLEANUP
==========================================================*/

function cleanupMemory(){

$$(".mouse-trail").forEach(node=>{

if(!node.isConnected){

node.remove();

}

});

}

setInterval(

cleanupMemory,

30000

);

/*==========================================================
  CONNECTION INFO
==========================================================*/

if(

navigator.connection

){

const network=

navigator.connection;

console.log(

"Network:",

network.effectiveType

);

console.log(

"Downlink:",

network.downlink+" Mbps"

);

}

/*==========================================================
  IDLE CALLBACK
==========================================================*/

if(

"requestIdleCallback" in window

){

requestIdleCallback(()=>{

console.log(

"Idle Tasks Completed"

);

});

}

/*==========================================================
  DEBUG INFO
==========================================================*/

console.table({

Version:APP.version,

Theme:APP.theme,

Page:APP.currentPage,

Mobile:APP.isMobile,

Language:APP.settings.language

});

/*==========================================================
  END PART 24
==========================================================*/

/*

Next Part

✔ Keyboard Shortcuts
✔ Developer Console Commands
✔ Hidden Admin Mode
✔ Secret Shortcuts
✔ Utility Functions

Git Commit

feat(script): add website settings and performance monitoring

*/
/*==========================================================
  SCRIPT.JS
  PART 25 — KEYBOARD SHORTCUTS & DEVELOPER UTILITIES
==========================================================*/

/*==========================================================
  KEYBOARD SHORTCUTS
==========================================================*/

document.addEventListener(

"keydown",

e=>{

/* Ctrl + / */

if(

e.ctrlKey&&

e.key==="/"

){

e.preventDefault();

showToast(

"Keyboard Shortcuts Enabled",

"info"

);

}

/* Ctrl + Home */

if(

e.ctrlKey&&

e.key==="Home"

){

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* Ctrl + End */

if(

e.ctrlKey&&

e.key==="End"

){

e.preventDefault();

window.scrollTo({

top:

document.body.scrollHeight,

behavior:"smooth"

});

}

/* Ctrl + D */

if(

e.ctrlKey&&

e.key.toLowerCase()==="d"

){

e.preventDefault();

showToast(

"Bookmark TechFix Software EXP ⭐",

"success"

);

}

});

/*==========================================================
  SECRET ADMIN MODE
==========================================================*/

let adminKeys=[];

const adminCode=[

"t",

"e",

"c",

"h"

];

document.addEventListener(

"keydown",

e=>{

adminKeys.push(

e.key.toLowerCase()

);

if(

adminKeys.length>

adminCode.length

){

adminKeys.shift();

}

if(

adminKeys.join("")===

adminCode.join("")

){

document.body.classList.add(

"admin-mode"

);

showToast(

"Developer Mode Activated",

"success",

3000

);

console.log(

"%cADMIN MODE ENABLED",

"font-size:20px;color:#00ff88;font-weight:bold"

);

}

});

/*==========================================================
  GLOBAL UTILITIES
==========================================================*/

window.TechFix={

version:APP.version,

database:TECHFIX,

search:TECHFIX.search,

devices:TECHFIX.devices,

downloads:TECHFIX.downloads,

services:TECHFIX.services,

showToast,

copyText,

toggleTheme,

renderDevices,

renderDownloads

};

/*==========================================================
  QUICK COMMANDS
==========================================================*/

window.help=function(){

console.table({

search:"TechFix.search('iPhone')",

devices:"TechFix.devices",

downloads:"TechFix.downloads",

services:"TechFix.services",

theme:"toggleTheme()"

});

};

/*==========================================================
  COPY WEBSITE INFO
==========================================================*/

window.copyWebsiteInfo=function(){

copyText(

`TechFix Software EXP
CEO: Mian Ahmad
WhatsApp: +966568152404
Email: officialtechfix786@gmail.com`

);

};

/*==========================================================
  CONSOLE LOGO
==========================================================*/

console.log(

"%cTechFix Software EXP",

"font-size:26px;color:#00ff99;font-weight:bold;"

);

console.log(

"%cProfessional Mobile Software Solutions",

"font-size:14px;color:#00bfff;"

);

console.log(

"Type help() in console."

);

/*==========================================================
  FREE MEMORY
==========================================================*/

window.addEventListener(

"beforeunload",

()=>{

clearInterval(

testimonial.interval

);

});

/*==========================================================
  END PART 25
==========================================================*/

/*

Next Part

✔ Final Optimizations
✔ Animation Manager
✔ Event Cleanup
✔ Browser Compatibility
✔ Production Build

Git Commit

feat(script): add keyboard shortcuts and developer utilities

*/
/*==========================================================
  SCRIPT.JS
  PART 26 — FINAL OPTIMIZATION & PRODUCTION MODE
==========================================================*/

/*==========================================================
  APP READY
==========================================================*/

APP.ready=false;

/*==========================================================
  INITIALIZER
==========================================================*/

function initializeApplication(){

console.time("TechFix Startup");

APP.ready=true;

document.body.classList.add(

"app-ready"

);

console.timeEnd(

"TechFix Startup"

);

}

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener(

"DOMContentLoaded",

()=>{

initializeApplication();

});

/*==========================================================
  ANIMATION MANAGER
==========================================================*/

function pauseAnimations(){

document.body.classList.add(

"animations-paused"

);

}

function resumeAnimations(){

document.body.classList.remove(

"animations-paused"

);

}

/*==========================================================
  PAGE VISIBILITY
==========================================================*/

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

pauseAnimations();

}else{

resumeAnimations();

}

});

/*==========================================================
  SMOOTH IMAGE DECODE
==========================================================*/

$$("img").forEach(image=>{

if(image.decode){

image.decode()

.catch(()=>{});

}

});

/*==========================================================
  PASSIVE EVENTS
==========================================================*/

window.addEventListener(

"touchstart",

()=>{},

{

passive:true

}

);

window.addEventListener(

"wheel",

()=>{},

{

passive:true

}

);

/*==========================================================
  REDUCE LAYOUT SHIFT
==========================================================*/

$$("img").forEach(image=>{

if(

!image.width

){

image.width=600;

}

if(

!image.height

){

image.height=600;

}

});

/*==========================================================
  PRECONNECT
==========================================================*/

function addPreconnect(url){

const link=document.createElement(

"link"

);

link.rel="preconnect";

link.href=url;

document.head.appendChild(link);

}

addPreconnect(

"https://fonts.googleapis.com"

);

addPreconnect(

"https://fonts.gstatic.com"

);

/*==========================================================
  ERROR HANDLER
==========================================================*/

window.addEventListener(

"error",

event=>{

console.error(

event.message

);

});

/*==========================================================
  UNHANDLED PROMISE
==========================================================*/

window.addEventListener(

"unhandledrejection",

event=>{

console.warn(

event.reason

);

});

/*==========================================================
  APP VERSION
==========================================================*/

const version=$("#appVersion");

if(version){

version.textContent=

APP.version;

}

/*==========================================================
  FINAL MESSAGE
==========================================================*/

window.addEventListener(

"load",

()=>{

setTimeout(()=>{

console.log(

"%cWebsite Loaded Successfully",

"color:#00ff88;font-size:18px;font-weight:bold"

);

},1000);

});

/*==========================================================
  END PART 26
==========================================================*/

/*

Next Part

✔ SEO Helper
✔ Meta Generator
✔ Structured Data
✔ Open Graph
✔ Twitter Cards

Git Commit

feat(script): optimize application for production deployment

*/
/*==========================================================
  SCRIPT.JS
  PART 27 — SEO & STRUCTURED DATA HELPERS
==========================================================*/

/*==========================================================
  PAGE META
==========================================================*/

APP.seo={

title:document.title,

description:

document.querySelector(

'meta[name="description"]'

)?.content||"",

keywords:

document.querySelector(

'meta[name="keywords"]'

)?.content||"",

url:window.location.href

};

/*==========================================================
  UPDATE TITLE
==========================================================*/

function setPageTitle(title){

document.title=

title+

" | TechFix Software EXP";

}

/*==========================================================
  UPDATE DESCRIPTION
==========================================================*/

function setMetaDescription(text){

let meta=

document.querySelector(

'meta[name="description"]'

);

if(!meta){

meta=create("meta");

meta.name="description";

document.head.appendChild(meta);

}

meta.content=text;

}

/*==========================================================
  UPDATE OG TAG
==========================================================*/

function setOpenGraph(

property,

value

){

let tag=

document.querySelector(

`meta[property="${property}"]`

);

if(!tag){

tag=create("meta");

tag.setAttribute(

"property",

property

);

document.head.appendChild(tag);

}

tag.setAttribute(

"content",

value

);

}

/*==========================================================
  APPLY OPEN GRAPH
==========================================================*/

setOpenGraph(

"og:title",

document.title

);

setOpenGraph(

"og:type",

"website"

);

setOpenGraph(

"og:url",

window.location.href

);

setOpenGraph(

"og:image",

window.location.origin+

"/assets/images/logo.png"

);

/*==========================================================
  TWITTER CARD
==========================================================*/

function setTwitterCard(){

const tags={

"twitter:card":"summary_large_image",

"twitter:title":document.title,

"twitter:image":

window.location.origin+

"/assets/images/logo.png"

};

Object.entries(tags).forEach(

([name,value])=>{

let meta=

document.querySelector(

`meta[name="${name}"]`

);

if(!meta){

meta=create("meta");

meta.name=name;

document.head.appendChild(meta);

}

meta.content=value;

});

}

setTwitterCard();

/*==========================================================
  JSON-LD
==========================================================*/

function injectStructuredData(){

const data={

"@context":"https://schema.org",

"@type":"ProfessionalService",

"name":"TechFix Software EXP",

"url":window.location.origin,

"image":

window.location.origin+

"/assets/images/logo.png",

"email":

"officialtechfix786@gmail.com",

"telephone":

"+966568152404",

"address":{

"@type":"PostalAddress",

"addressCountry":"Pakistan"

}

};

const script=

create("script");

script.type=

"application/ld+json";

script.textContent=

JSON.stringify(data);

document.head.appendChild(script);

}

injectStructuredData();

/*==========================================================
  CANONICAL URL
==========================================================*/

(function(){

let link=

document.querySelector(

'link[rel="canonical"]'

);

if(!link){

link=create("link");

link.rel="canonical";

document.head.appendChild(link);

}

link.href=

window.location.href;

})();

/*==========================================================
  END PART 27
==========================================================*/

/*

Next Part

✔ Browser Compatibility
✔ Polyfills
✔ Feature Detection
✔ Security Helpers
✔ Final Bootstrap

Git Commit

feat(script): add SEO helpers and structured data support

*/
/*==========================================================
  SCRIPT.JS
  PART 28 — BROWSER COMPATIBILITY & SECURITY
==========================================================*/

/*==========================================================
  FEATURE DETECTION
==========================================================*/

APP.features={

localStorage:typeof Storage!=="undefined",

intersectionObserver:

"IntersectionObserver" in window,

clipboard:

navigator.clipboard!==undefined,

share:

navigator.share!==undefined,

serviceWorker:

"serviceWorker" in navigator,

online:navigator.onLine

};

/*==========================================================
  BROWSER INFO
==========================================================*/

APP.browser={

userAgent:navigator.userAgent,

language:navigator.language,

platform:navigator.platform,

cookies:navigator.cookieEnabled

};

console.table(APP.browser);

/*==========================================================
  SAFE LOCAL STORAGE
==========================================================*/

function safeStorage(key,value){

try{

localStorage.setItem(

key,

JSON.stringify(value)

);

return true;

}catch{

return false;

}

}

function safeRead(key){

try{

return JSON.parse(

localStorage.getItem(key)

);

}catch{

return null;

}

}

/*==========================================================
  COPY FALLBACK
==========================================================*/

async function safeCopy(text){

if(APP.features.clipboard){

return navigator.clipboard.writeText(text);

}

const textarea=create("textarea");

textarea.value=text;

document.body.appendChild(textarea);

textarea.select();

document.execCommand("copy");

textarea.remove();

}

/*==========================================================
  SECURITY HELPERS
==========================================================*/

document.addEventListener(

"contextmenu",

e=>{

if(

document.body.dataset.dev==="true"

) return;

e.preventDefault();

showToast(

"Right click disabled.",

"warning",

1500

);

});

document.addEventListener(

"dragstart",

e=>{

if(

e.target.tagName==="IMG"

){

e.preventDefault();

}

});

/*==========================================================
  OFFLINE INDICATOR
==========================================================*/

function updateConnection(){

const badge=$("#networkBadge");

if(!badge) return;

badge.textContent=

navigator.onLine

?

"🟢 Connected"

:

"🔴 Offline";

badge.className=

navigator.onLine

?

"online"

:

"offline";

}

window.addEventListener(

"online",

updateConnection

);

window.addEventListener(

"offline",

updateConnection

);

updateConnection();

/*==========================================================
  SERVICE WORKER
==========================================================*/

if(APP.features.serviceWorker){

window.addEventListener(

"load",

()=>{

navigator.serviceWorker

.register("./sw.js")

.then(()=>{

console.log(

"Service Worker Registered"

);

})

.catch(()=>{

console.warn(

"Service Worker Missing"

);

});

});

}

/*==========================================================
  END PART 28
==========================================================*/

/*

Next Part

✔ Final Bootstrap
✔ Health Check
✔ Startup Report
✔ Production Lock
✔ Complete Initialization

Git Commit

feat(script): add browser compatibility and security utilities

*/
/*==========================================================
  SCRIPT.JS
  PART 29 — FINAL BOOTSTRAP & HEALTH CHECK
==========================================================*/

/*==========================================================
  APPLICATION HEALTH
==========================================================*/

APP.health={

status:"OK",

errors:0,

warnings:0,

loadedModules:[]

};

/*==========================================================
  MODULE CHECK
==========================================================*/

function registerModule(name){

APP.health.loadedModules.push(name);

}

registerModule("Database");

registerModule("Search");

registerModule("Downloads");

registerModule("Theme");

registerModule("Toast");

registerModule("Animations");

registerModule("SEO");

registerModule("Performance");

/*==========================================================
  REQUIRED ELEMENTS
==========================================================*/

const requiredElements=[

"header",

"footer",

"deviceContainer",

"downloadContainer",

"contactForm"

];

function checkElements(){

requiredElements.forEach(id=>{

const element=

document.getElementById(id);

if(!element){

APP.health.warnings++;

console.warn(

"Missing Element:",

id

);

}

});

}

checkElements();

/*==========================================================
  DATABASE CHECK
==========================================================*/

function verifyDatabase(){

if(

!window.TECHFIX

){

APP.health.errors++;

return;

}

if(

!TECHFIX.devices||

TECHFIX.devices.length===0

){

APP.health.errors++;

}

if(

!TECHFIX.downloads||

TECHFIX.downloads.length===0

){

APP.health.errors++;

}

}

verifyDatabase();

/*==========================================================
  PERFORMANCE REPORT
==========================================================*/

function performanceReport(){

console.group(

"TechFix Performance"

);

console.table({

Version:APP.version,

Modules:

APP.health.loadedModules.length,

Devices:

TECHFIX.devices.length,

Downloads:

TECHFIX.downloads.length,

Theme:APP.theme,

Mobile:APP.isMobile,

Language:

navigator.language

});

console.groupEnd();

}

performanceReport();

/*==========================================================
  STARTUP MESSAGE
==========================================================*/

window.addEventListener(

"load",

()=>{

setTimeout(()=>{

showToast(

"TechFix Software EXP Ready",

"success",

2500

);

},500);

});

/*==========================================================
  FREE MEMORY
==========================================================*/

function clearUnusedTimers(){

if(

window.gc

){

try{

window.gc();

}catch{}

}

}

window.addEventListener(

"beforeunload",

clearUnusedTimers

);

/*==========================================================
  FINAL HEALTH REPORT
==========================================================*/

console.table({

Status:APP.health.status,

Errors:APP.health.errors,

Warnings:APP.health.warnings,

Modules:

APP.health.loadedModules.length

});

/*==========================================================
  END PART 29
==========================================================*/

/*

Next Part

✔ Production Complete
✔ Final Initialization
✔ Console Banner
✔ App Lock
✔ Finish Script.js

Git Commit

feat(script): add final bootstrap and application health checks

*/
/*==========================================================
  SCRIPT.JS
  PART 30 — PRODUCTION BUILD COMPLETE
==========================================================*/

/*==========================================================
  FINAL INITIALIZATION
==========================================================*/

function finalizeApplication(){

APP.production=true;

APP.initialized=true;

APP.build="v1.0.0";

APP.buildDate=

new Date().toISOString();

document.body.classList.add(

"production-ready"

);

}

/*==========================================================
  FREEZE APP CONFIG
==========================================================*/

try{

/* APP remains mutable until all delayed feature initializers have completed. */

Object.freeze(TECHFIX);

}catch(error){

console.warn(

"Freeze skipped.",

error

);

}

/*==========================================================
  FINAL EVENT CLEANUP
==========================================================*/

window.addEventListener(

"beforeunload",

()=>{

if(

APP.observers

){

Object.values(

APP.observers

).forEach(observer=>{

try{

observer.disconnect();

}catch{}

});

}

});

/*==========================================================
  FINAL CONSOLE BANNER
==========================================================*/

function consoleBanner(){

console.clear();

console.log(

"%cTECHFIX SOFTWARE EXP",

`

color:#00ff88;

font-size:32px;

font-weight:bold;

`

);

console.log(

"%cProfessional Mobile Software Solutions",

`

color:#00bfff;

font-size:16px;

`

);

console.log(

"%cWebsite Successfully Loaded",

`

color:#ffffff;

font-size:14px;

`

);

console.table({

Version:APP.build,

Status:"Production",

Database:

TECHFIX.devices.length+

" Devices",

Downloads:

TECHFIX.downloads.length,

Theme:APP.theme,

Language:

navigator.language

});

}

/*==========================================================
  READY EVENT
==========================================================*/

window.dispatchEvent(

new CustomEvent(

"techfix:ready",

{

detail:{

version:"1.0.0",

status:"production"

}

}

)

);

/*==========================================================
  READY LISTENER
==========================================================*/

window.addEventListener(

"techfix:ready",

event=>{

console.log(

"Application Ready:",

event.detail

);

});

/*==========================================================
  START FINALIZATION
==========================================================*/

window.addEventListener(

"load",

()=>{

finalizeApplication();

consoleBanner();

showToast(

"Welcome to TechFix Software EXP",

"success",

2500

);

});

/*==========================================================
  PRODUCTION LOCK
==========================================================*/

if(

APP.production

){

document.body.dataset.mode=

"production";

}

/*==========================================================
  END OF SCRIPT.JS
==========================================================*/

/*

████████████████████████████████████████

SCRIPT.JS COMPLETED

✔ Application Core
✔ Database Engine
✔ Search System
✔ Download Center
✔ Contact System
✔ WhatsApp Integration
✔ Theme Manager
✔ Animations
✔ Matrix Effects
✔ Custom Cursor
✔ SEO Helpers
✔ Performance Monitor
✔ Browser Compatibility
✔ Production Build

Total Parts : 30

Status : COMPLETE

Next File :

assets/css/style.css

████████████████████████████████████████

Git Commit

feat(script): complete production build and finalize application

*/
