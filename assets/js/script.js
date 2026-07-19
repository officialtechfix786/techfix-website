"use strict";

/*=====================================================
        TECHFIX SOFTWARE EXP
        FINAL SCRIPT V10
        Founder : MIAN AHMAD
=====================================================*/

const $=(e)=>document.querySelector(e);
const $$=(e)=>document.querySelectorAll(e);

document.addEventListener("DOMContentLoaded",()=>{

initApp();

});

function initApp(){

initNavbar();

initBackToTop();

initAnimations();

initContact();

initSearch();

loadCurrentPage();

}

/*=====================================================
CURRENT PAGE
=====================================================*/

function loadCurrentPage(){

const page=document.body.dataset.page||"";

switch(page){

case "home":
renderFeatured();
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

}

/*=====================================================
DATABASE
=====================================================*/

function getAllModels(){

let models=[];

Object.values(solutionsDatabase).forEach(group=>{

models.push(...group);

});

return models;

}

function getAndroidModels(){

let models=[];

Object.keys(solutionsDatabase).forEach(key=>{

if(key.toLowerCase()!=="apple"){

models.push(...solutionsDatabase[key]);

}

});

return models;

}

function getAppleModels(){

return solutionsDatabase.apple||[];

}
/*=====================================================
UNIVERSAL CARD ENGINE
=====================================================*/

function renderModels(list,targetId){

const container=document.getElementById(targetId);

if(!container)return;

container.innerHTML="";

if(!list.length){

container.innerHTML=`
<div class="service-card">
<h3>No Results Found</h3>
<p>No supported models available.</p>
</div>
`;

return;

}

list.forEach(model=>{

const card=document.createElement("div");

card.className="service-card";

card.innerHTML=`

<img src="${model.image}" alt="${model.name}">

<h3>${model.name}</h3>

<div class="brand-badge">${model.brand}</div>

<div class="solutions">

${(model.solutions||[]).map(item=>`
<span>${item}</span>
`).join("")}

</div>

`;

container.appendChild(card);

});

}

/*=====================================================
PAGE RENDER
=====================================================*/

function renderApple(){

renderModels(

getAppleModels(),

"appleContainer"

);

}

function renderAndroid(){

renderModels(

getAndroidModels(),

"androidContainer"

);

}

function renderMobiles(){

renderModels(

getAllModels(),

"mobilesContainer"

);

}
/*=====================================================
FEATURED HOME
=====================================================*/

function renderFeatured(){

const container=document.getElementById("featuredContainer");

if(!container)return;

const featured=getAllModels().slice(0,12);

renderModels(featured,"featuredContainer");

}

/*=====================================================
ICLOUD
=====================================================*/

function renderiCloud(){

const data=[

{
title:"iCloud Services",
icon:"fa-solid fa-cloud",
description:"Professional iCloud support and activation services."
},

{
title:"Hello Screen",
icon:"fa-solid fa-lock-open",
description:"Supported Hello Screen solutions."
},

{
title:"Activation",
icon:"fa-solid fa-mobile-screen",
description:"Activation related supported services."
}

];

renderServiceCards(data,"icloudContainer");

}

/*=====================================================
SERVICE CARD ENGINE
=====================================================*/

function renderServiceCards(data,target){

const container=document.getElementById(target);

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
CYBER PAGE
=====================================================*/

function renderCyber(){

const data=[

{
title:"FRP Removal",
icon:"fa-solid fa-shield-halved",
description:"Supported FRP solutions."
},

{
title:"Boot Repair",
icon:"fa-solid fa-screwdriver-wrench",
description:"Professional boot repair services."
},

{
title:"IMEI Repair",
icon:"fa-solid fa-microchip",
description:"Supported IMEI repair information."
},

{
title:"Unlock Services",
icon:"fa-solid fa-lock-open",
description:"Professional unlock support."
}

];

renderServiceCards(data,"cyberContainer");

}

/*=====================================================
DOWNLOADS PAGE
=====================================================*/

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
description:"Android platform tools."
},

{
title:"Software Tools",
icon:"fa-solid fa-toolbox",
description:"Latest servicing software."
}

];

renderServiceCards(data,"downloadsContainer");

}
/*=====================================================
DATA RECOVERY
=====================================================*/

function renderRecovery(){

const data=[

{
title:"Data Recovery",
icon:"fa-solid fa-database",
description:"Recover deleted mobile data."
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
description:"Supported WhatsApp recovery."
}

];

renderServiceCards(data,"recoveryContainer");

}

/*=====================================================
ABOUT PAGE
=====================================================*/

function renderAbout(){

const container=document.getElementById("aboutContainer");

if(!container)return;

container.innerHTML=`

<div class="service-card">
<i class="fa-solid fa-user"></i>
<h3>Founder</h3>
<p>MIAN AHMAD</p>
</div>

<div class="service-card">
<i class="fa-solid fa-mobile-screen"></i>
<h3>Professional Mobile Solutions</h3>
<p>Android • Apple • iCloud • Flashing • Unlocking • Data Recovery</p>
</div>

<div class="service-card">
<i class="fa-solid fa-shield-halved"></i>
<h3>Trusted Platform</h3>
<p>Fast, secure and professional technical services.</p>
</div>

`;

}
/*=====================================================
GLOBAL SEARCH
=====================================================*/

function initSearch(){

const input=$("#searchInput")||$("#globalSearch");

const results=$("#searchResults");

if(!input)return;

input.addEventListener("input",()=>{

const key=input.value.trim().toLowerCase();

if(results)results.innerHTML="";

if(key==="")return;

const data=getAllModels().filter(model=>{

const name=(model.name||"").toLowerCase();

const brand=(model.brand||"").toLowerCase();

const solution=(model.solutions||[]).join(" ").toLowerCase();

return(
name.includes(key)||
brand.includes(key)||
solution.includes(key)
);

});

if(results){

renderSearchResults(data);

}

});

}

function renderSearchResults(list){

const results=$("#searchResults");

if(!results)return;

results.innerHTML="";

if(!list.length){

results.innerHTML=`
<div class="service-card">
<h3>No Results Found</h3>
<p>Try another keyword.</p>
</div>
`;

return;

}

list.forEach(model=>{

results.innerHTML+=`

<div class="search-card">

<img src="${model.image}" alt="${model.name}">

<div class="search-info">

<h3>${model.name}</h3>

<p>${model.brand}</p>

</div>

</div>

`;

});

}
/*=====================================================
NAVBAR
=====================================================*/

function initNavbar(){

const current=location.pathname.split("/").pop();

$$(".top-nav a").forEach(link=>{

link.classList.remove("active");

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

const btn=$("#topButton");

if(!btn)return;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

btn.classList.add("show");

}else{

btn.classList.remove("show");

}

});

btn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*=====================================================
SCROLL ANIMATION
=====================================================*/

function initAnimations(){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

$$(".service-card,.page-hero,.footer-top").forEach(el=>{

observer.observe(el);

});

}/*=====================================================
CONTACT FORM
=====================================================*/

function initContact(){

const form=$("#contactForm");

if(!form)return;

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}

/*=====================================================
SOCIAL LINKS
=====================================================*/

function initSocialLinks(){

$$("[data-link]").forEach(btn=>{

btn.addEventListener("click",()=>{

window.open(btn.dataset.link,"_blank");

});

});

}

/*=====================================================
ERROR HANDLER
=====================================================*/

window.addEventListener("error",function(e){

console.warn("TechFix:",e.message);

});
/*=====================================================
FINAL INITIALIZATION
=====================================================*/

document.addEventListener("DOMContentLoaded",()=>{

initSocialLinks();

});

/*=====================================================
CONSOLE INFO
=====================================================*/

console.log("========================================");

console.log("TechFix Software EXP");

console.log("Final Script Loaded Successfully");

console.log("Database Brands :",Object.keys(solutionsDatabase).length);

console.log("Total Models :",getAllModels().length);

console.log("========================================");

/*=====================================================
END OF FILE
=====================================================*/
/*=====================================================
FINAL PAGE CHECK
=====================================================*/

(function(){

const page=document.body.dataset.page||"";

switch(page){

case "home":
renderFeatured();
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

case "about":
renderAbout();
break;

default:
break;

}

})();

/*=====================================================
TECHFIX SOFTWARE EXP
VERSION 10.0
FOUNDER : MIAN AHMAD
==========================================
ALL RIGHTS RESERVED
=====================================================*/

console.log("%cTechFix Software EXP Ready",
"color:#00ffe7;font-size:18px;font-weight:bold;");
