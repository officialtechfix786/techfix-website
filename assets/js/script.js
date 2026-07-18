/*=========================================================
TECHFIX SOFTWARE EXP V10
SCRIPT.JS
PART 1
=========================================================*/

"use strict";

/*==============================
LOADER
==============================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},700);

});

/*==============================
MOBILE SIDEBAR
==============================*/

const menuBtn = document.getElementById("menuBtn");

const sidebar = document.querySelector(".sidebar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("show");

});

}

/*==============================
ACTIVE MENU
==============================*/

const navLinks=document.querySelectorAll(".sidebar-nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

/*==============================
BACK TO TOP
==============================*/

const topButton=document.getElementById("topButton");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";

topButton.style.pointerEvents="auto";

}

else{

topButton.style.opacity="0";

topButton.style.pointerEvents="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
SMOOTH BUTTON EFFECT
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});
/*=========================================================
TECHFIX SOFTWARE EXP V10
SCRIPT.JS
PART 2
SEARCH + SCROLL + COUNTER
=========================================================*/

/*==============================
SEARCH
==============================*/

const searchInput=document.querySelector(".hero-search input");

const searchButton=document.querySelector(".hero-search button");

if(searchButton){

searchButton.addEventListener("click",()=>{

const value=searchInput.value.toLowerCase().trim();

if(value==="") return;

window.location.href="mobiles.html?search="+encodeURIComponent(value);

});

}

if(searchInput){

searchInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

searchButton.click();

}

});

}

/*==============================
SCROLL ANIMATION
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},

{

threshold:.15

});

document.querySelectorAll(

".service-card,.brand-card,.why-card,.stat-box,.cta-card"

).forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s";

observer.observe(item);

});

/*==============================
COUNTER
==============================*/

const counters=document.querySelectorAll(".stat-box h2");

let started=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector(".quick-stats");

if(!section) return;

if(window.scrollY>

section.offsetTop-500

&& !started){

started=true;

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let current=0;

let speed=Math.ceil(target/80);

let timer=setInterval(()=>{

current+=speed;

if(current>=target){

counter.innerText=target;

clearInterval(timer);

}

else{

counter.innerText=current;

}

},25);

});

}

});

/*==============================
BRAND EFFECT
==============================*/

document.querySelectorAll(".brand-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

rgba(139,92,246,.28),

#141C33)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#141C33";

});

});
/*=========================================================
TECHFIX SOFTWARE EXP V10
SCRIPT.JS
PART 3
PREMIUM FUNCTIONS
=========================================================*/

/*==============================
AUTO CLOSE SIDEBAR
==============================*/

const sidebarLinks=document.querySelectorAll(".sidebar a");

sidebarLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(window.innerWidth<=992){

sidebar.classList.remove("show");

}

});

});

/*==============================
ACTIVE PAGE
==============================*/

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar-nav a").forEach(link=>{

const file=link.getAttribute("href");

if(file===currentPage){

document.querySelectorAll(".sidebar-nav a").forEach(x=>{

x.classList.remove("active");

});

link.classList.add("active");

}

});

/*==============================
BUTTON RIPPLE
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==============================
PARALLAX HERO
==============================*/

const heroImage=document.querySelector(".hero-image-card img");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.pageX)/45;

const y=(window.innerHeight/2-e.pageY)/45;

heroImage.style.transform=

`translate(${x}px,${y}px)`;

});

/*==============================
CARD GLOW
==============================*/

document.querySelectorAll(

".service-card,.why-card,.stat-box"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

rgba(139,92,246,.18),

#141C33 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#141C33";

});

});

/*==============================
PRELOAD IMAGES
==============================*/

const preloadImages=[

"assets/images/logo.png",

"assets/images/hero-home.png",

"assets/images/robot-bg.png"

];

preloadImages.forEach(src=>{

const img=new Image();

img.src=src;

});

/*==============================
CONSOLE
==============================*/

console.log(

"TechFix Software EXP V10 Loaded Successfully"

);
/*=========================================================
TECHFIX SOFTWARE EXP V10
SCRIPT.JS
PART 4 FINAL
=========================================================*/

/*==============================
REMOVE LOADER SAFELY
==============================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.pointerEvents="none";

},700);

}

});

/*==============================
TOP BUTTON START HIDDEN
==============================*/

if(topButton){

topButton.style.opacity="0";

topButton.style.pointerEvents="none";

}

/*==============================
HEADER SHADOW
==============================*/

window.addEventListener("scroll",()=>{

const mobileHeader=document.querySelector(".mobile-header");

if(!mobileHeader) return;

if(window.scrollY>20){

mobileHeader.style.boxShadow="0 15px 40px rgba(0,0,0,.25)";

mobileHeader.style.backdropFilter="blur(20px)";

}

else{

mobileHeader.style.boxShadow="none";

}

});

/*==============================
SEARCH FOCUS
==============================*/

if(searchInput){

searchInput.addEventListener("focus",()=>{

document.querySelector(".hero-search").style.borderColor="#8B5CF6";

});

searchInput.addEventListener("blur",()=>{

document.querySelector(".hero-search").style.borderColor="rgba(255,255,255,.08)";

});

}

/*==============================
DISABLE RIGHT CLICK
(REMOVE IF NOT NEEDED)
==============================*/

// document.addEventListener("contextmenu",e=>{

// e.preventDefault();

// });

/*==============================
WINDOW RESIZE
==============================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>992){

sidebar.classList.remove("show");

}

});

/*==============================
DATABASE READY
==============================*/

window.TechFix={

version:"10",

databaseLoaded:false,

loadedTime:new Date(),

platform:"Website"

};

/*==============================
READY
==============================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("Everything Ready ✔");

});
