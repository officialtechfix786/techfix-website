/*======================================================
            TECHFIX SOFTWARE EXP
            MAIN JAVASCRIPT
======================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*======================================================
                    ELEMENTS
======================================================*/

const preloader=document.getElementById("preloader");

const header=document.querySelector(".header");

const menuToggle=document.querySelector(".menu-toggle");

const navMenu=document.querySelector(".nav-menu");

const backToTop=document.getElementById("backToTop");

const year=document.getElementById("year");

const searchBtn=document.getElementById("searchBtn");

const searchModal=document.getElementById("searchModal");

const closeSearch=document.getElementById("closeSearch");

const liveSearch=document.getElementById("liveSearch");

const searchResults=document.getElementById("searchResults");

/*======================================================
                    PRELOADER
======================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

if(preloader){

preloader.classList.add("hide");

}

},700);

});

/*======================================================
                    YEAR
======================================================*/

if(year){

year.textContent=new Date().getFullYear();

}

/*======================================================
                    HEADER
======================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*======================================================
                    MOBILE MENU
======================================================*/

if(menuToggle){

menuToggle.onclick=()=>{

navMenu.classList.toggle("active");

};

}

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.onclick=()=>{

navMenu.classList.remove("active");

};

});

/*======================================================
                BACK TO TOP
======================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

if(backToTop){

backToTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/*======================================================
                SEARCH MODAL
======================================================*/

if(searchBtn){

searchBtn.onclick=()=>{

searchModal.classList.add("active");

liveSearch.focus();

};

}

if(closeSearch){

closeSearch.onclick=()=>{

searchModal.classList.remove("active");

liveSearch.value="";

searchResults.innerHTML="";

};

}

searchModal.addEventListener("click",(e)=>{

if(e.target===searchModal){

searchModal.classList.remove("active");

liveSearch.value="";

searchResults.innerHTML="";

}

});

});
/*======================================================
                GLOBAL LIVE SEARCH
======================================================*/

const searchDatabase=[];

/* Mobiles Database */

if(typeof mobileDatabase!=="undefined"){

Object.keys(mobileDatabase).forEach(brand=>{

mobileDatabase[brand].forEach(model=>{

searchDatabase.push({

type:"Mobile",

brand:brand,

name:model.name,

url:"mobiles.html"

});

});

});

}

/* Solutions Database */

if(typeof solutionsDatabase!=="undefined"){

Object.keys(solutionsDatabase).forEach(brand=>{

solutionsDatabase[brand].forEach(item=>{

searchDatabase.push({

type:"Solution",

brand:brand,

name:item.name,

url:"mobiles.html"

});

});

});

}

/*======================================================
                LIVE SEARCH
======================================================*/

if(liveSearch){

liveSearch.addEventListener("input",function(){

const keyword=this.value.toLowerCase().trim();

searchResults.innerHTML="";

if(keyword==="") return;

const results=searchDatabase.filter(item=>

item.name.toLowerCase().includes(keyword) ||

item.brand.toLowerCase().includes(keyword)

).slice(0,20);

if(results.length===0){

searchResults.innerHTML=

`<div class="search-item">

<div>

<h4>No Result Found</h4>

<span>Try another keyword</span>

</div>

</div>`;

return;

}

results.forEach(item=>{

const div=document.createElement("div");

div.className="search-item";

div.innerHTML=`

<div>

<h4>${item.name}</h4>

<span>${item.brand} • ${item.type}</span>

</div>

<i class="fa-solid fa-arrow-right"></i>

`;

div.onclick=()=>{

window.location.href=item.url;

};

searchResults.appendChild(div);

});

});

}
/*======================================================
                COUNTER ANIMATION
======================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=parseInt(counter.dataset.target);

let count=0;

const speed=Math.max(10,Math.floor(target/150));

const update=()=>{

count+=speed;

if(count>=target){

counter.textContent=target.toLocaleString()+"+";

}else{

counter.textContent=count.toLocaleString();

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*======================================================
                SMOOTH SCROLL
======================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*======================================================
            SCROLL ANIMATION
======================================================*/

const revealItems=document.querySelectorAll(

".service-card,.stat-card,.brand-card,.update-card,.testimonial-card,.why-item,.mobile-card"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

revealObserver.unobserve(entry.target);

}

});

},{threshold:.15});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

revealObserver.observe(item);

});

/*======================================================
                ESC CLOSE SEARCH
======================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

if(searchModal){

searchModal.classList.remove("active");

}

}

});

/*======================================================
                PAGE LOADED
======================================================*/

console.log("TechFix Software EXP Loaded Successfully");
/*======================================================
                ACTIVE NAVIGATION
======================================================*/

const sections=document.querySelectorAll("section");

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

const href=link.getAttribute("href");

if(href && href.includes("#"+current)){

link.classList.add("active");

}

});

});

/*======================================================
                BUTTON RIPPLE EFFECT
======================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.35)";

ripple.style.pointerEvents="none";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(4)";

ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*======================================================
                IMAGE LAZY EFFECT
======================================================*/

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.loading="lazy";

img.draggable=false;

});

/*======================================================
                CONSOLE MESSAGE
======================================================*/

console.log("%cTechFix Software EXP","font-size:28px;color:#00D9FF;font-weight:bold;");

console.log("%cDesigned By MIAN AHMAD","font-size:16px;color:#ffffff;");

/*======================================================
                FINISHED
======================================================*/
