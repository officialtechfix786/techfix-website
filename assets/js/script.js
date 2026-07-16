"use strict";

/*=====================================================
                TECHFIX SOFTWARE EXP
                    MAIN SCRIPT
======================================================*/

/*==============================
            SELECTORS
===============================*/

const body = document.body;

const header = document.querySelector(".header");

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const backToTop = document.getElementById("backToTop");

const preloader = document.getElementById("preloader");

const year = document.getElementById("year");

const searchBtn = document.getElementById("searchBtn");

const searchModal = document.getElementById("searchModal");

const closeSearch = document.getElementById("closeSearch");

const liveSearch = document.getElementById("liveSearch");

/*==============================
        PRELOADER
===============================*/

window.addEventListener("load", () => {

if(preloader){

preloader.classList.add("hide");

setTimeout(()=>{

preloader.remove();

},600);

}

});

/*==============================
        FOOTER YEAR
===============================*/

if(year){

year.textContent = new Date().getFullYear();

}

/*==============================
        HELPERS
===============================*/

function addClass(el,className){

if(el) el.classList.add(className);

}

function removeClass(el,className){

if(el) el.classList.remove(className);

}

function toggleClass(el,className){

if(el) el.classList.toggle(className);

}
/*=====================================================
                MOBILE MENU
======================================================*/

if(menuToggle && navMenu){

menuToggle.addEventListener("click",()=>{

toggleClass(navMenu,"active");
toggleClass(menuToggle,"active");

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

removeClass(navMenu,"active");
removeClass(menuToggle,"active");

});

});

}

/*=====================================================
                STICKY HEADER
======================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

addClass(header,"sticky");

}else{

removeClass(header,"sticky");

}

});

/*=====================================================
                BACK TO TOP
======================================================*/

window.addEventListener("scroll",()=>{

if(!backToTop) return;

if(window.scrollY>400){

addClass(backToTop,"show");

}else{

removeClass(backToTop,"show");

}

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*=====================================================
                SMOOTH SCROLL
======================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});
/*=====================================================
                SEARCH MODAL
======================================================*/

function openSearchModal(){

    if(!searchModal) return;

    addClass(searchModal,"active");

    body.style.overflow="hidden";

    setTimeout(()=>{

        if(liveSearch){

            liveSearch.focus();

        }

    },200);

}

function closeSearchModal(){

    if(!searchModal) return;

    removeClass(searchModal,"active");

    body.style.overflow="";

    if(liveSearch){

        liveSearch.value="";

    }

    const results=document.getElementById("searchResults");

    if(results){

        results.innerHTML="";

        results.style.display="none";

    }

}

/*==============================
        OPEN BUTTON
===============================*/

if(searchBtn){

    searchBtn.addEventListener("click",openSearchModal);

}

/*==============================
        CLOSE BUTTON
===============================*/

if(closeSearch){

    closeSearch.addEventListener("click",closeSearchModal);

}

/*==============================
        ESC KEY
===============================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeSearchModal();

    }

});

/*==============================
    CLICK OUTSIDE TO CLOSE
===============================*/

if(searchModal){

    searchModal.addEventListener("click",(e)=>{

        if(e.target===searchModal){

            closeSearchModal();

        }

    });

}
/*=====================================================
                SCROLL ANIMATIONS
======================================================*/

const revealItems=document.querySelectorAll(
".service-card,.feature-box,.counter-box,.testimonial-card,.why-item,.stat-box"
);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*=====================================================
                ACTIVE NAVIGATION
======================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.offsetHeight;

if(window.scrollY>=sectionTop){

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

/*=====================================================
                HERO FLOAT EFFECT
======================================================*/

const robot=document.querySelector(".robot-image");

window.addEventListener("mousemove",(e)=>{

if(!robot) return;

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

robot.style.transform=`translate(${x}px,${y}px)`;

});

/*=====================================================
                BUTTON RIPPLE
======================================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

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

/*=====================================================
                CONSOLE
======================================================*/

console.log("================================");
console.log("TechFix Software EXP Loaded");
console.log("Founder : MIAN AHMAD");
console.log("Status : OK");
console.log("================================");
