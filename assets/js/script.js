"use strict";

/*=====================================================
        TECHFIX SOFTWARE EXP
        FINAL SCRIPT V11
        Founder : MIAN AHMAD
=====================================================*/

const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

document.addEventListener("DOMContentLoaded", initTechFix);

function initTechFix() {

    initNavigation();

    initBackToTop();

    initAnimations();

    initSearchSystem();

    initMobilePages();

    initApplePage();

    initAndroidPage();

    initIcloudPage();

    initDownloads();

    initCyber();

    initContact();

    initAbout();

    initDataRecovery();

}

/*==============================
NAVIGATION
==============================*/

function initNavigation(){

const links=$$(".top-nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(x=>x.classList.remove("active"));

link.classList.add("active");

});

});

}

/*==============================
BACK TO TOP
==============================*/

function initBackToTop(){

const btn=$("#topButton");

if(!btn)return;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

btn.classList.add("show");

}else{

btn.classList.remove("show");

}

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
/*==============================
GLOBAL SEARCH
==============================*/

function initSearchSystem(){

const search=document.querySelector("#globalSearch");

if(!search)return;

search.addEventListener("keyup",()=>{

const key=search.value.trim().toLowerCase();

filterDatabase(key);

});

}

function filterDatabase(keyword){

if(typeof solutionsDatabase==="undefined") return;

let results=[];

Object.keys(solutionsDatabase).forEach(brand=>{

const data=solutionsDatabase[brand];

if(Array.isArray(data)){

data.forEach(item=>{

if(

item.name.toLowerCase().includes(keyword) ||

item.brand.toLowerCase().includes(keyword)

){

results.push(item);

}

});

}

});

renderSearchResults(results);

}

function renderSearchResults(data){

const container=$("#searchResults");

if(!container)return;

container.innerHTML="";

if(data.length===0){

container.innerHTML="<p class='no-results'>No Results Found</p>";

return;

}

data.forEach(item=>{

container.innerHTML+=`

<div class="service-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.brand}</p>

<span>${item.solutions.length} Solutions</span>

</div>

`;

});

}
/*==============================
MOBILES PAGE
==============================*/

function initMobilePages(){

const container=$("#mobileContainer");

if(!container)return;

let phones=[];

Object.keys(solutionsDatabase).forEach(brand=>{

const data=solutionsDatabase[brand];

if(Array.isArray(data)){

phones=phones.concat(data);

}

});

renderMobiles(phones);

const search=$("#mobileSearch");

if(search){

search.addEventListener("keyup",()=>{

const key=search.value.toLowerCase();

renderMobiles(

phones.filter(item=>

item.name.toLowerCase().includes(key) ||

item.brand.toLowerCase().includes(key)

)

);

});

}

}

function renderMobiles(data){

const container=$("#mobileContainer");

if(!container)return;

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="service-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.brand}</p>

<div class="badge">

${item.solutions.length} Solutions

</div>

</div>

`;

});

}
/*==============================
APPLE PAGE
==============================*/

function initApplePage(){

const container=$("#appleContainer");

if(!container)return;

const apple=solutionsDatabase.apple||[];

renderApple(apple);

const search=$("#appleSearch");

if(search){

search.addEventListener("keyup",()=>{

const key=search.value.toLowerCase();

renderApple(

apple.filter(item=>

item.name.toLowerCase().includes(key)

)

);

});

}

}

function renderApple(data){

const container=$("#appleContainer");

if(!container)return;

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="service-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>Apple</p>

<div class="badge">

${item.solutions.length} Solutions

</div>

</div>

`;

});

}
/*==============================
ANDROID PAGE
==============================*/

function initAndroidPage(){

const container=$("#androidContainer");

if(!container)return;

let android=[];

Object.keys(solutionsDatabase).forEach(brand=>{

if(brand.toLowerCase()!=="apple"){

const data=solutionsDatabase[brand];

if(Array.isArray(data)){

android=android.concat(data);

}

}

});

renderAndroid(android);

const search=$("#androidSearch");

if(search){

search.addEventListener("keyup",()=>{

const key=search.value.toLowerCase();

renderAndroid(

android.filter(item=>

item.name.toLowerCase().includes(key) ||

item.brand.toLowerCase().includes(key)

)

);

});

}

}

function renderAndroid(data){

const container=$("#androidContainer");

if(!container)return;

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="service-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.brand}</p>

<div class="badge">

${item.solutions.length} Solutions

</div>

</div>

`;

});

}
/*==============================
ICLOUD PAGE
==============================*/

function initIcloudPage(){

const container=$("#icloudContainer");

if(!container)return;

const apple=solutionsDatabase.apple||[];

renderIcloud(apple);

const search=$("#icloudSearch");

if(search){

search.addEventListener("keyup",()=>{

const key=search.value.toLowerCase();

renderIcloud(

apple.filter(item=>

item.name.toLowerCase().includes(key)

)

);

});

}

}

function renderIcloud(data){

const container=$("#icloudContainer");

if(!container)return;

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="service-card">

<img src="${item.image}" alt="${item.name}">

<h3>${item.name}</h3>

<p>Apple iCloud</p>

<div class="badge">

${item.solutions.length} Services

</div>

</div>

`;

});

}

/*==============================
DOWNLOADS PAGE
==============================*/

function initDownloads(){

const cards=$$(".download-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.classList.add("active");

});

card.addEventListener("mouseleave",()=>{

card.classList.remove("active");

});

});

}
/*==============================
CYBER PAGE
==============================*/

function initCyber(){

const cards=$$(".service-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

}

/*==============================
ABOUT PAGE
==============================*/

function initAbout(){

const stats=$$(".counter");

if(!stats.length)return;

stats.forEach(counter=>{

const target=parseInt(counter.dataset.target)||0;

let value=0;

const timer=setInterval(()=>{

value+=Math.ceil(target/100);

if(value>=target){

value=target;

clearInterval(timer);

}

counter.textContent=value;

},20);

});

}

/*==============================
DATA RECOVERY
==============================*/

function initDataRecovery(){

const cards=$$(".recovery-card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("active");

});

});

}
/*==============================
CONTACT PAGE
==============================*/

function initContact(){

const form=document.querySelector(".contact-form");

if(!form)return;

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input,textarea");

let valid=true;

inputs.forEach(input=>{

if(input.hasAttribute("required") && input.value.trim()===""){

valid=false;

input.classList.add("input-error");

}else{

input.classList.remove("input-error");

}

});

if(!valid){

alert("Please fill all required fields.");

return;

}

alert("Thank you! Your message has been submitted.");

form.reset();

});

}

/*==============================
SCROLL ANIMATIONS
==============================*/

function initAnimations(){

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

document.querySelectorAll(".service-card,.page-hero,.brands-page,.footer-top").forEach(el=>{

observer.observe(el);

});

}
/*==============================
SOCIAL LINKS
==============================*/

function initSocialLinks(){

const socials={

youtube:"https://youtube.com/",

facebook:"https://facebook.com/",

telegram:"https://t.me/",

github:"https://github.com/",

whatsapp:"https://wa.me/"

};

document.querySelectorAll("[data-social]").forEach(btn=>{

btn.addEventListener("click",()=>{

const key=btn.dataset.social;

if(socials[key]){

window.open(socials[key],"_blank");

}

});

});

}

/*==============================
PRELOADER
==============================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".preloader");

if(loader){

loader.classList.add("hide");

setTimeout(()=>loader.remove(),600);

}

});

/*==============================
INITIALIZE EVERYTHING
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

initSocialLinks();

});

/*==============================
GLOBAL PAGE INITIALIZER
==============================*/

(function(){

const page=document.body.dataset.page||"";

switch(page){

case "home":
renderFeaturedModels();
break;

case "mobiles":
renderMobiles();
break;

case "apple":
renderApple();
break;

case "android":
renderAndroid();
break;

case "icloud":
renderiCloud();
break;

case "cyber":
renderCyber();
break;

case "downloads":
renderDownloads();
break;

case "recovery":
renderRecovery();
break;

}

initSearch();

initNavbar();

initBackToTop();

initAnimations();

initContact();

initSocialLinks();

})();

/*==============================
SAFE ERROR HANDLER
==============================*/

window.addEventListener("error",function(e){

console.warn("TechFix:",e.message);

});

/*==============================
END OF CORE
==============================*/
/*=====================================================
        ADVANCED GLOBAL SEARCH
=====================================================*/

function initSearch(){

const input=document.querySelector("#searchInput");

const results=document.querySelector("#searchResults");

if(!input||!results)return;

input.addEventListener("input",()=>{

const value=input.value.trim().toLowerCase();

results.innerHTML="";

if(value==="")return;

let found=[];

Object.values(solutionsDatabase).forEach(group=>{

group.forEach(model=>{

const modelName=model.name.toLowerCase();

const brand=model.brand.toLowerCase();

const matchSolution=(model.solutions||[]).some(item=>
item.toLowerCase().includes(value)
);

if(
modelName.includes(value)||
brand.includes(value)||
matchSolution
){

found.push(model);

}

});

});

if(found.length===0){

results.innerHTML=`
<div class="no-results">
No Results Found
</div>
`;

return;

}

found.forEach(model=>{

const card=document.createElement("div");

card.className="search-card";

card.innerHTML=`

<img src="${model.image}" alt="${model.name}">

<h3>${model.name}</h3>

<p>${model.brand}</p>

`;

card.onclick=()=>{

window.location.href=
`mobiles.html?id=${model.id}`;

};

results.appendChild(card);

});

});

}
/*=====================================================
        UNIVERSAL RENDER ENGINE
=====================================================*/

function renderModels(list,targetId){

const container=document.getElementById(targetId);

if(!container)return;

container.innerHTML="";

list.forEach(model=>{

const card=document.createElement("div");

card.className="service-card";

card.innerHTML=`

<img src="${model.image}" alt="${model.name}">

<h3>${model.name}</h3>

<div class="badge">${model.brand}</div>

<div class="solutions">

${model.solutions.map(item=>`
<span>${item}</span>
`).join("")}

</div>

`;

container.appendChild(card);

});

}

/*=====================================================
        PAGE RENDERERS
=====================================================*/

function renderApple(){

renderModels(solutionsDatabase.apple||[],"appleContainer");

}

function renderAndroid(){

let all=[];

Object.keys(solutionsDatabase).forEach(key=>{

if(key!=="apple"){

all.push(...solutionsDatabase[key]);

}

});

renderModels(all,"androidContainer");

}

function renderMobiles(){

let all=[];

Object.values(solutionsDatabase).forEach(group=>{

all.push(...group);

});

renderModels(all,"mobilesContainer");

}
/*=====================================================
        ICLOUD / CYBER / DOWNLOADS / RECOVERY
=====================================================*/

function renderiCloud(){

const data=[
{
title:"iCloud Services",
icon:"fa-solid fa-cloud",
description:"Professional iCloud solutions, activation support and account related services."
},
{
title:"Hello Screen",
icon:"fa-solid fa-lock-open",
description:"Supported devices and available service information."
},
{
title:"Activation",
icon:"fa-solid fa-mobile-screen",
description:"Activation related supported solutions."
}
];

renderServiceCards(data,"icloudContainer");

}

function renderCyber(){

const data=[
{
title:"FRP",
icon:"fa-solid fa-shield-halved",
description:"Factory Reset Protection solutions."
},
{
title:"Boot Repair",
icon:"fa-solid fa-screwdriver-wrench",
description:"Bootloop and software repair."
},
{
title:"IMEI Repair",
icon:"fa-solid fa-microchip",
description:"Supported repair information."
},
{
title:"Unlock",
icon:"fa-solid fa-lock-open",
description:"Supported unlock services."
}
];

renderServiceCards(data,"cyberContainer");

}

function renderDownloads(){

const data=[
{
title:"Flash Files",
icon:"fa-solid fa-download",
description:"Latest firmware collection."
},
{
title:"USB Drivers",
icon:"fa-solid fa-hard-drive",
description:"Official USB drivers."
},
{
title:"ADB & Fastboot",
icon:"fa-solid fa-terminal",
description:"Platform tools."
},
{
title:"Software Tools",
icon:"fa-solid fa-toolbox",
description:"Latest servicing utilities."
}
];

renderServiceCards(data,"downloadsContainer");

}

function renderRecovery(){

const data=[
{
title:"Data Recovery",
icon:"fa-solid fa-database",
description:"Professional recovery services."
},
{
title:"Photos Recovery",
icon:"fa-solid fa-image",
description:"Recover deleted photos."
},
{
title:"Contacts Recovery",
icon:"fa-solid fa-address-book",
description:"Recover deleted contacts."
},
{
title:"WhatsApp Recovery",
icon:"fa-brands fa-whatsapp",
description:"Recover supported WhatsApp data."
}
];

renderServiceCards(data,"recoveryContainer");

}

/*=====================================================
        SERVICE CARD ENGINE
=====================================================*/

function renderServiceCards(data,targetId){

const container=document.getElementById(targetId);

if(!container)return;

container.innerHTML="";

data.forEach(item=>{

container.innerHTML+=`

<div class="service-card">

<i class="${item.icon}"></i>

<h3>${item.title}</h3>

<p>${item.description}</p>

</div>

`;

});

}
/*=====================================================
        NAVBAR ACTIVE LINK
=====================================================*/

function initNavbar(){

const current=location.pathname.split("/").pop();

document.querySelectorAll(".top-nav a").forEach(link=>{

const href=link.getAttribute("href");

if(href===current){

link.classList.add("active");

}

});

}

/*=====================================================
        BACK TO TOP
=====================================================*/

function initBackToTop(){

const btn=document.getElementById("topButton");

if(!btn)return;

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

btn.classList.add("show");

}else{

btn.classList.remove("show");

}

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/*=====================================================
        SCROLL ANIMATION
=====================================================*/

function initAnimations(){

const items=document.querySelectorAll(

".service-card,.page-hero,.footer-top"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

items.forEach(item=>observer.observe(item));

}

/*=====================================================
        CONTACT FORM
=====================================================*/

function initContact(){

const form=document.querySelector("#contactForm");

if(!form)return;

form.addEventListener("submit",e=>{

e.preventDefault();

alert("Message Sent Successfully.");

form.reset();

});

}

/*=====================================================
        SOCIAL LINKS
=====================================================*/

function initSocialLinks(){

document.querySelectorAll("[data-link]").forEach(btn=>{

btn.addEventListener("click",()=>{

window.open(

btn.dataset.link,

"_blank"

);

});

});

}

/*=====================================================
        TECHFIX SOFTWARE EXP
        SCRIPT LOADED
=====================================================*/

console.log("====================================");
console.log("TechFix Software EXP Loaded");
console.log("Database Brands:",Object.keys(solutionsDatabase).length);
console.log("Ready.");
console.log("====================================");
