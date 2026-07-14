/*═══════════════════════════════════════════════════════
                TECHFIX SOFTWARE EXP v7
              Premium JavaScript Edition
                Founder : MIAN AHMAD
═══════════════════════════════════════════════════════*/

"use strict";

/*═══════════════════════════════════════════════════════
                    SELECTORS
═══════════════════════════════════════════════════════*/

const header = document.querySelector(".header");
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-toggle");
const backTop = document.getElementById("backToTop");
const preloader = document.getElementById("preloader");

/*═══════════════════════════════════════════════════════
                    RGB ENGINE
═══════════════════════════════════════════════════════*/

const accentColors = [

"#ff7a00", // Orange

"#00c8ff", // Cyan

"#8b5cf6", // Purple

"#00d084", // Green

"#ff3b30", // Red

"#c0c0c0", // Silver

"#ffd700"  // Gold

];

let colorIndex = 0;

function changeAccentColor(){

document.documentElement.style.setProperty(

"--primary",

accentColors[colorIndex]

);

colorIndex++;

if(colorIndex >= accentColors.length){

colorIndex = 0;

}

}

changeAccentColor();

setInterval(changeAccentColor,12000);

/*═══════════════════════════════════════════════════════
                    PRELOADER
═══════════════════════════════════════════════════════*/

window.addEventListener("load",()=>{

if(!preloader) return;

setTimeout(()=>{

preloader.style.opacity="0";

preloader.style.visibility="hidden";

setTimeout(()=>{

preloader.remove();

},600);

},800);

});

/*═══════════════════════════════════════════════════════
                    HEADER
═══════════════════════════════════════════════════════*/

window.addEventListener("scroll",()=>{

if(!header) return;

header.classList.toggle(

"sticky",

window.scrollY > 80

);

});
/*═══════════════════════════════════════════════════════
                RGB COLOR ENGINE v2
═══════════════════════════════════════════════════════*/

const rgbThemes = [

{primary:"#ff7a00",secondary:"#ffb347"}, // Orange

{primary:"#00c8ff",secondary:"#4de1ff"}, // Cyan

{primary:"#8b5cf6",secondary:"#b794ff"}, // Purple

{primary:"#00d084",secondary:"#54f2b5"}, // Green

{primary:"#ff3b30",secondary:"#ff7b72"}, // Red

{primary:"#c0c0c0",secondary:"#ececec"}, // Silver

{primary:"#ffd700",secondary:"#ffe866"}  // Gold

];

let themeIndex = 0;

function updateTheme(){

const theme = rgbThemes[themeIndex];

document.documentElement.style.setProperty(
"--primary",
theme.primary
);

document.documentElement.style.setProperty(
"--secondary",
theme.secondary
);

themeIndex++;

if(themeIndex >= rgbThemes.length){

themeIndex = 0;

}

}

updateTheme();

setInterval(updateTheme,10000);

/*═══════════════════════════════════════════════════════
                MOBILE MENU
═══════════════════════════════════════════════════════*/

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

/*═══════════════════════════════════════════════════════
                BACK TO TOP
═══════════════════════════════════════════════════════*/

if(backTop){

window.addEventListener("scroll",()=>{

backTop.classList.toggle(

"show",

window.scrollY>500

);

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*═══════════════════════════════════════════════════════
                SMOOTH SCROLL
═══════════════════════════════════════════════════════*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

const target=document.querySelector(

link.getAttribute("href")

);

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

/*═══════════════════════════════════════════════════════
                ACTIVE MENU
═══════════════════════════════════════════════════════*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*═══════════════════════════════════════════════════════
                SEARCH MODAL
═══════════════════════════════════════════════════════*/

const searchModal=document.getElementById("searchModal");
const searchBtn=document.querySelector(".search-btn");
const closeSearch=document.getElementById("closeSearch");
const searchInput=document.getElementById("liveSearch");
const searchResults=document.getElementById("searchResults");

if(searchBtn && searchModal){

searchBtn.addEventListener("click",()=>{

searchModal.classList.add("active");

setTimeout(()=>{

searchInput?.focus();

},200);

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

if(e.key==="Escape"){

searchModal?.classList.remove("active");

}

});

if(searchModal){

searchModal.addEventListener("click",(e)=>{

if(e.target===searchModal){

searchModal.classList.remove("active");

}

});

}

/*═══════════════════════════════════════════════════════
                LIVE SEARCH DATABASE
═══════════════════════════════════════════════════════*/

function getAllModels(){

const models=[];

if(typeof mobileDatabase==="undefined") return models;

Object.keys(mobileDatabase).forEach(brand=>{

mobileDatabase[brand].forEach(model=>{

models.push({

brand,

name:model

});

});

});

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

searchResults.innerHTML=`
<div class="no-result">
No Device Found
</div>
`;

return;

}

results.slice(0,50).forEach(item=>{

const card=document.createElement("div");

card.className="search-item";

card.innerHTML=`

<strong>${item.name}</strong>

<br>

<small>${item.brand.toUpperCase()}</small>

`;

card.onclick=()=>{

window.location.href=`mobiles.html?brand=${item.brand}&model=${encodeURIComponent(item.name)}`;

};

searchResults.appendChild(card);

});

});

}

/*═══════════════════════════════════════════════════════
                COUNTER ANIMATION
═══════════════════════════════════════════════════════*/

const counters=document.querySelectorAll("[data-target]");

function startCounters(){

counters.forEach(counter=>{

const target=parseInt(counter.dataset.target);

let current=0;

const increment=Math.max(1,Math.ceil(target/120));

function update(){

current+=increment;

if(current>=target){

counter.textContent=target+"+";

return;

}

counter.textContent=current+"+";

requestAnimationFrame(update);

}

update();

});

}

const counterSection=document.querySelector(".counter-section");

if(counterSection){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounters();

observer.disconnect();

}

});

},{threshold:.35});

observer.observe(counterSection);

}

/*═══════════════════════════════════════════════════════
                REVEAL ANIMATION
═══════════════════════════════════════════════════════*/

const reveals=document.querySelectorAll(

".service-card,.brand-card,.why-card,.counter-card,.cta-box"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{threshold:.15});

reveals.forEach(item=>{

revealObserver.observe(item);

});
/*═══════════════════════════════════════════════════════
                LAZY IMAGE LOADING
═══════════════════════════════════════════════════════*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.draggable=false;

});

/*═══════════════════════════════════════════════════════
                ROBOT GLOW EFFECT
═══════════════════════════════════════════════════════*/

const robot=document.querySelector(".robot-image");

window.addEventListener("mousemove",(e)=>{

if(!robot) return;

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

robot.style.transform=`translate(${-x}px,${-y}px)`;

});

/*═══════════════════════════════════════════════════════
                CURRENT YEAR
═══════════════════════════════════════════════════════*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*═══════════════════════════════════════════════════════
                PERFORMANCE
═══════════════════════════════════════════════════════*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("loaded");

});

/*═══════════════════════════════════════════════════════
                CONSOLE
═══════════════════════════════════════════════════════*/

console.clear();

console.log(

"%cTECHFIX SOFTWARE EXP v7",

"font-size:20px;font-weight:bold;color:#ff7a00;"

);

console.log(

"%cFounder : MIAN AHMAD",

"font-size:14px;color:#00c8ff;"

);

console.log(

"%cPremium Edition Loaded Successfully",

"font-size:13px;color:#00d084;"

);

/*═══════════════════════════════════════════════════════
                END
═══════════════════════════════════════════════════════*/
