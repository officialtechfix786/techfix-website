"use strict";

/*=====================================================
            TECHFIX SOFTWARE EXP
            MAIN APPLICATION
            Founder : MIAN AHMAD
======================================================*/

/*=====================================================
                    SELECTORS
======================================================*/

const header=document.querySelector(".header");

const menuBtn=document.querySelector(".menu-btn");

const navMenu=document.querySelector(".nav-menu");

const searchBtn=document.getElementById("searchBtn");

const searchModal=document.getElementById("searchModal");

const closeSearch=document.getElementById("closeSearch");

const liveSearch=document.getElementById("liveSearch");

/*=====================================================
                STICKY HEADER
======================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*=====================================================
                MOBILE MENU
======================================================*/

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}
/*=====================================================
                SEARCH MODAL
======================================================*/

if(searchBtn){

searchBtn.addEventListener("click",()=>{

searchModal.classList.add("active");

document.body.style.overflow="hidden";

if(liveSearch){

setTimeout(()=>{

liveSearch.focus();

},200);

}

});

}

if(closeSearch){

closeSearch.addEventListener("click",closeSearchModal);

}

function closeSearchModal(){

searchModal.classList.remove("active");

document.body.style.overflow="";

}

window.addEventListener("click",(e)=>{

if(e.target===searchModal){

closeSearchModal();

}

});

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeSearchModal();

}

});
/*=====================================================
                ACTIVE NAVIGATION
======================================================*/

const navLinks=document.querySelectorAll(".nav-menu a");

const currentPage=window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(link=>{

const href=link.getAttribute("href");

if(href===currentPage){

link.classList.add("active");

}

});

/*=====================================================
                SCROLL REVEAL
======================================================*/

const revealElements=document.querySelectorAll(

".service-card,.counter-card,.why-card,.glass-box,.cta-box,.hero-left,.hero-right,.section-header"

);

function revealOnScroll(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.classList.add("show");

}

});

}

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);

/*=====================================================
                HERO PARALLAX
======================================================*/

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

/*=====================================================
                INITIALIZE
======================================================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("TechFix Software EXP Loaded Successfully.");

});
