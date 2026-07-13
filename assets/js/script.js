/*==================================================
        TECHFIX SOFTWARE EXP v3.0
==================================================*/

"use strict";

/*==================================================
                DOM ELEMENTS
==================================================*/

const loader = document.getElementById("loader");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

const topButton = document.getElementById("topButton");

const brandGrid = document.getElementById("brandGrid");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

/*==================================================
                START WEBSITE
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

loadBrands();

loadSocialLinks();

setupSidebar();

setupSearch();

setupBackToTop();

scrollReveal();

});

/*==================================================
                LOADER
==================================================*/

window.addEventListener("load",()=>{

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*==================================================
                SIDEBAR
==================================================*/

function setupSidebar(){

if(!menuBtn || !sidebar) return;

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

document.addEventListener("click",(e)=>{

if(

!sidebar.contains(e.target)

&&

e.target!==menuBtn

){

sidebar.classList.remove("show");

}

});

}

/*==================================================
            SOCIAL LINKS
==================================================*/

function loadSocialLinks(){

if(typeof SOCIAL==="undefined") return;

const links={

youtubeLink:SOCIAL.youtube,

facebookLink:SOCIAL.facebook,

tiktokLink:SOCIAL.tiktok,

whatsappLink:SOCIAL.whatsapp,

footerYoutube:SOCIAL.youtube,

footerFacebook:SOCIAL.facebook,

footerTiktok:SOCIAL.tiktok,

footerWhatsapp:SOCIAL.whatsapp

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
                BRAND LOADER
==================================================*/

function loadBrands(){

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

/*==================================================
                SEARCH ENGINE
==================================================*/

function setupSearch(){

if(!searchInput || !searchResults) return;

searchInput.addEventListener("input",searchDatabase);

searchBtn?.addEventListener("click",searchDatabase);

}

function searchDatabase(){

const keyword=searchInput.value.trim().toLowerCase();

searchResults.innerHTML="";

if(keyword.length<2){

searchResults.style.display="none";

return;

}

let results=[];

/* Mobile Models */

if(typeof MOBILE_MODELS!=="undefined"){

MOBILE_MODELS.forEach(brand=>{

brand.models.forEach(model=>{

if(model.toLowerCase().includes(keyword)){

results.push({

icon:"📱",

title:model,

subtitle:brand.brand,

page:"mobiles.html"

});

}

});

});

}

/* Brands */

if(typeof BRANDS!=="undefined"){

BRANDS.forEach(item=>{

if(item.name.toLowerCase().includes(keyword)){

results.push({

icon:"🏷️",

title:item.name,

subtitle:"Brand",

page:item.page

});

}

});

}

/* Tools */

if(typeof TOOLS!=="undefined"){

TOOLS.forEach(tool=>{

if(tool.name.toLowerCase().includes(keyword)){

results.push({

icon:"🛠",

title:tool.name,

subtitle:tool.category,

page:tool.page

});

}

});

}

renderResults(results);

}

/*==================================================
            SEARCH RESULTS
==================================================*/

function renderResults(results){

searchResults.innerHTML="";

if(results.length===0){

searchResults.innerHTML=`

<div class="search-empty">

No Results Found

</div>

`;

searchResults.style.display="block";

return;

}

results.slice(0,10).forEach(item=>{

searchResults.innerHTML+=`

<a href="${item.page}" class="search-item">

<span>${item.icon}</span>

<div>

<strong>${item.title}</strong>

<small>${item.subtitle}</small>

</div>

</a>

`;

});

searchResults.style.display="block";

}

/* Hide Search */

document.addEventListener("click",(e)=>{

if(

!searchResults.contains(e.target)

&&

e.target!==searchInput

){

searchResults.style.display="none";

}

});
/*==================================================
                BACK TO TOP
==================================================*/

function setupBackToTop(){

if(!topButton) return;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.classList.add("active");

}else{

topButton.classList.remove("active");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==================================================
            SCROLL REVEAL
==================================================*/

function scrollReveal(){

const items=document.querySelectorAll(

".service-card,.brand-card,.stat-box,.contact-card,.feature-card"

);

if(!items.length) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

items.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

}

/*==================================================
            HERO FLOATING
==================================================*/

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

let direction=1;

let position=0;

setInterval(()=>{

position+=direction;

heroImage.style.transform=`translateY(${position}px)`;

if(position>=12) direction=-1;

if(position<=-12) direction=1;

},60);

}

/*==================================================
            IMAGE OPTIMIZATION
==================================================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.draggable=false;

});

/*==================================================
            ACTIVE PAGE
==================================================*/

const currentPage=location.pathname.split("/").pop();

document.querySelectorAll(".sidebar-nav a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});

/*==================================================
            ESC CLOSE SIDEBAR
==================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

sidebar?.classList.remove("show");

}

});

/*==================================================
            AUTO CLOSE SIDEBAR
==================================================*/

document.querySelectorAll(".sidebar-nav a").forEach(link=>{

link.addEventListener("click",()=>{

sidebar?.classList.remove("show");

});

});

/*==================================================
            END OF FILE
==================================================*/
