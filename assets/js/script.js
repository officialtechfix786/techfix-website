/*==================================================
    TechFix Software EXP v4
    script.js
==================================================*/

"use strict";

/*================ Loader ================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*================ Sidebar ================*/

const menuBtn=document.getElementById("menuBtn");

const sidebar=document.querySelector(".sidebar");

if(menuBtn && sidebar){

menuBtn.onclick=()=>{

sidebar.classList.toggle("active");

};

}

/*================ Active Menu ================*/

document.querySelectorAll(".sidebar-nav a").forEach(link=>{

link.addEventListener("click",()=>{

document.querySelectorAll(".sidebar-nav a").forEach(a=>{

a.classList.remove("active");

});

link.classList.add("active");

});

});

/*================ Back To Top ================*/

const topButton=document.getElementById("topButton");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

if(topButton){

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
/*==================================================
            LIVE SEARCH
==================================================*/

const searchInput=document.getElementById("searchInput");

const searchResults=document.getElementById("searchResults");

if(searchInput && searchResults){

searchInput.addEventListener("keyup",()=>{

const keyword=searchInput.value.trim().toLowerCase();

searchResults.innerHTML="";

if(keyword===""){

searchResults.style.display="none";

return;

}

const results=[];

/* Search Brands */

if(typeof brands!=="undefined"){

brands.forEach(item=>{

if(

item.name.toLowerCase().includes(keyword)

){

results.push({

title:item.name,

desc:"Supported Brand"

});

}

});

}

/* Search Pages */

if(typeof pages!=="undefined"){

pages.forEach(item=>{

if(

item.title.toLowerCase().includes(keyword)

){

results.push({

title:item.title,

desc:item.category

});

}

});

}

if(results.length===0){

searchResults.innerHTML=`

<div class="search-item">

<i class="fas fa-circle-info"></i>

<div>

<strong>No Result Found</strong>

<span>Try another keyword</span>

</div>

</div>

`;

searchResults.style.display="block";

return;

}

results.slice(0,8).forEach(item=>{

searchResults.innerHTML+=`

<div class="search-item">

<i class="fas fa-magnifying-glass"></i>

<div>

<strong>${item.title}</strong>

<span>${item.desc}</span>

</div>

</div>

`;

});

searchResults.style.display="block";

});

document.addEventListener("click",(e)=>{

if(!searchInput.contains(e.target) && !searchResults.contains(e.target)){

searchResults.style.display="none";

}

});

}

/*==================================================
            BRAND LOADER
==================================================*/

const brandGrid=document.getElementById("brandGrid");

if(brandGrid && typeof brands!=="undefined"){

brandGrid.innerHTML="";

brands.forEach(item=>{

brandGrid.innerHTML+=`

<div class="brand-card">

<img src="${item.logo}" alt="${item.name}">

<h3>${item.name}</h3>

<p>${item.models}+ Models</p>

</div>

`;

});

}
/*==================================================
            SCROLL REVEAL
==================================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".service-card,.brand-card,.contact-cta,.section-heading"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

/*==================================================
            COUNTER
==================================================*/

document.querySelectorAll("[data-count]").forEach(counter=>{

const target=parseInt(counter.dataset.count);

let value=0;

const speed=Math.max(1,Math.ceil(target/120));

const update=()=>{

value+=speed;

if(value>=target){

counter.innerText=target;

}else{

counter.innerText=value;

requestAnimationFrame(update);

}

};

update();

});

/*==================================================
            CURSOR GLOW
==================================================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*==================================================
            FOOTER LINKS
==================================================*/

if(typeof socialLinks!=="undefined"){

const map={

footerYoutube:"youtube",

footerFacebook:"facebook",

footerWhatsapp:"whatsapp",

footerTiktok:"tiktok",

whatsappLink:"whatsapp"

};

Object.keys(map).forEach(id=>{

const el=document.getElementById(id);

if(el && socialLinks[map[id]]){

el.href=socialLinks[map[id]];

el.target="_blank";

}

});

}

/*==================================================
            SEARCH BUTTON
==================================================*/

const searchBtn=document.getElementById("searchBtn");

if(searchBtn && searchInput){

searchBtn.addEventListener("click",()=>{

searchInput.focus();

});

}

/*==================================================
            END
==================================================*/

console.log("✅ TechFix Software EXP v4 Loaded");
