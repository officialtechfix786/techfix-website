/*==================================================
 TechFix Software EXP v5
 Premium JavaScript
 Founder : MIAN AHMAD
==================================================*/

"use strict";

/*==========================
SELECTORS
==========================*/

const header=document.querySelector(".header");
const menu=document.querySelector(".nav-menu");
const menuBtn=document.querySelector(".menu-toggle");
const backTop=document.getElementById("backToTop");
const searchModal=document.getElementById("searchModal");
const searchBtn=document.querySelector(".search-btn");
const closeSearch=document.getElementById("closeSearch");
const searchInput=document.getElementById("liveSearch");
const searchResults=document.getElementById("searchResults");

/*==========================
PRELOADER
==========================*/

window.addEventListener("load",()=>{

const preloader=document.getElementById("preloader");

if(preloader){

setTimeout(()=>{

preloader.style.opacity="0";

setTimeout(()=>{

preloader.remove();

},500);

},700);

}

});

/*==========================
HEADER
==========================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/*==========================
MOBILE MENU
==========================*/

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});

/*==========================
BACK TO TOP
==========================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

if(backTop){

backTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
/*==========================
SEARCH MODAL
==========================*/

if(searchBtn){

searchBtn.addEventListener("click",()=>{

searchModal.classList.add("active");

searchInput.focus();

});

}

if(closeSearch){

closeSearch.addEventListener("click",()=>{

searchModal.classList.remove("active");

searchInput.value="";

if(searchResults) searchResults.innerHTML="";

});

}

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape" && searchModal){

searchModal.classList.remove("active");

}

});

if(searchModal){

searchModal.addEventListener("click",(e)=>{

if(e.target===searchModal){

searchModal.classList.remove("active");

}

});

}

/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const target=document.querySelector(link.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

/*==========================
ACTIVE MENU
==========================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*==========================
LIVE SEARCH DATABASE
==========================*/

function getAllModels(){

const models=[];

if(typeof mobileDatabase==="undefined") return models;

Object.keys(mobileDatabase).forEach(brand=>{

mobileDatabase[brand].forEach(model=>{

models.push({

brand:brand,

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

if(keyword.length<1) return;

const result=allModels.filter(item=>

item.name.toLowerCase().includes(keyword) ||

item.brand.toLowerCase().includes(keyword)

);

if(result.length===0){

searchResults.innerHTML=`
<div class="no-result">
No Device Found
</div>`;

return;

}

result.slice(0,50).forEach(item=>{

const card=document.createElement("div");

card.className="search-item";

card.innerHTML=`
<strong>${item.name}</strong>
<br>
<small>${item.brand.toUpperCase()}</small>
`;

card.addEventListener("click",()=>{

window.location.href=`mobiles.html?brand=${item.brand}&model=${encodeURIComponent(item.name)}`;

});

searchResults.appendChild(card);

});

});

}
/*==========================
ANIMATED COUNTERS
==========================*/

const counters=document.querySelectorAll("[data-counter]");

function startCounters(){

counters.forEach(counter=>{

const target=parseInt(counter.dataset.counter);

let count=0;

const speed=Math.max(10,Math.floor(target/100));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target.toLocaleString()+"+";

}else{

counter.innerText=count.toLocaleString()+"+";

requestAnimationFrame(update);

}

};

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

},{threshold:.4});

observer.observe(counterSection);

}

/*==========================
SCROLL ANIMATION
==========================*/

const reveals=document.querySelectorAll(".reveal");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.15});

reveals.forEach(item=>{

revealObserver.observe(item);

});

/*==========================
CURRENT YEAR
==========================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
/*==========================
BRAND CARDS
==========================*/

const brandGrid=document.getElementById("brandGrid");

if(brandGrid && typeof mobileDatabase!=="undefined"){

Object.keys(mobileDatabase).forEach(brand=>{

const total=mobileDatabase[brand].length;

const card=document.createElement("a");

card.href=`mobiles.html?brand=${brand}`;

card.className="brand-card reveal";

card.innerHTML=`

<img
src="assets/images/brands/${brand}.png"
alt="${brand}"
loading="lazy">

<h3>${brand.charAt(0).toUpperCase()+brand.slice(1)}</h3>

<p>${total} Models</p>

`;

brandGrid.appendChild(card);

});

}

/*==========================
LAZY IMAGES
==========================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.draggable=false;

});

/*==========================
COPYRIGHT
==========================*/

console.log(

"%cTechFix Software EXP v5",

"color:#ff7a00;font-size:18px;font-weight:bold;"

);

console.log(

"Founder : MIAN AHMAD"

);

/*==========================
END
==========================*/
