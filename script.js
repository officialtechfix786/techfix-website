/*==================================================
        TECHFIX SOFTWARE EXP V5
        CEO : MIAN AHMAD
==================================================*/

/*=========================
LOADER
=========================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1500);

}

});

/*=========================
MATRIX BACKGROUND
=========================*/

const canvas=document.getElementById("matrix");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

const letters="01TECHFIXSOFTWAREEXPANDROIDAPPLECYBER";

const chars=letters.split("");

const fontSize=16;

const columns=Math.floor(canvas.width/fontSize);

const drops=[];

for(let i=0;i<columns;i++){

drops[i]=1;

}

function drawMatrix(){

ctx.fillStyle="rgba(5,7,13,.08)";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff88";

ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height&&Math.random()>.975){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

}
/*==================================================
        COUNTER ANIMATION
==================================================*/

const counters=document.querySelectorAll(".counter");

if(counters.length){

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=Number(counter.dataset.target);

let current=0;

const speed=Math.max(1,target/120);

function update(){

current+=speed;

if(current<target){

counter.innerText=Math.floor(current);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

observer.unobserve(counter);

}

});

},{threshold:.3});

counters.forEach(counter=>observer.observe(counter));

}

/*==================================================
        SCROLL REVEAL
==================================================*/

const revealItems=document.querySelectorAll(

".hero,.stat-card,.service-card,.why-card,.about-box,.about-left"

);

if(revealItems.length){

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});

}

/*==================================================
        ACTIVE SIDEBAR
==================================================*/

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll(".sidebar nav a").forEach(link=>{

const href=link.getAttribute("href");

if(href===currentPage||(!currentPage&&href==="index.html")){

link.classList.add("active");

}else{

link.classList.remove("active");

}

});
/*==================================================
            HERO TYPING EFFECT
==================================================*/

const heroTitle=document.querySelector(".hero h2");

if(heroTitle){

const text=heroTitle.innerText;

heroTitle.innerText="";

let i=0;

function typing(){

if(i<text.length){

heroTitle.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,45);

}

}

setTimeout(typing,600);

}

/*==================================================
            CARD HOVER EFFECT
==================================================*/

const cards=document.querySelectorAll(

".service-card,.stat-card,.why-card,.about-box"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

rgba(0,255,136,.18),

rgba(255,255,255,.04) 45%,

rgba(0,0,0,.15) 100%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background=

"linear-gradient(145deg,rgba(255,255,255,.04),rgba(0,255,136,.05))";

});

});

/*==================================================
            BUTTON ANIMATION
==================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.04)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});
/*==================================================
        FLOATING EFFECT
==================================================*/

const floatingCards=document.querySelectorAll(

".stat-card,.service-card,.why-card,.about-box"

);

floatingCards.forEach((card,index)=>{

card.style.animation=

`floatAnimation ${3+(index*0.2)}s ease-in-out infinite`;

});

/*==================================================
        PAGE FADE IN
==================================================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

},200);

});

/*==================================================
        SCROLL TO TOP
==================================================*/

const scrollBtn=document.createElement("div");

scrollBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

scrollBtn.id="scrollTop";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.opacity="1";

scrollBtn.style.visibility="visible";

}else{

scrollBtn.style.opacity="0";

scrollBtn.style.visibility="hidden";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/*==================================================
        TECHFIX V5 FINAL INITIALIZATION
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("TechFix Software EXP V5 Loaded Successfully");

if(typeof searchModels==="function"){

const search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",searchModels);

}

}

});

/*==================================================
        SAFE ERROR HANDLER
==================================================*/

window.addEventListener("error",(e)=>{

console.warn("TechFix Warning:",e.message);

});

/*==================================================
        PERFORMANCE
==================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("loaded");

});

console.log("TechFix V5 Ready");
