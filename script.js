/*==================================================
TECHFIX SOFTWARE EXP V6
CEO : MIAN AHMAD
==================================================*/

/*============================
LOADER
============================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.transition = ".6s";

},1800);

});

/*============================
MATRIX BACKGROUND
============================*/

const canvas=document.getElementById("matrix");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

const letters="TECHFIXSOFTWAREEXPANDROIDAPPLECYBER0123456789";

const chars=letters.split("");

const size=18;

const columns=Math.floor(canvas.width/size);

const drops=[];

for(let i=0;i<columns;i++){

drops[i]=1;

}

function drawMatrix(){

ctx.fillStyle="rgba(7,11,20,.08)";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00D9FF";

ctx.font=size+"px monospace";

for(let i=0;i<drops.length;i++){

const text=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*size,drops[i]*size);

if(drops[i]*size>canvas.height&&Math.random()>.98){

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

/*============================
MOBILE MENU
============================*/

const menuBtn=document.getElementById("menuToggle");

const sidebar=document.getElementById("sidebar");

if(menuBtn&&sidebar){

menuBtn.onclick=()=>{

sidebar.classList.toggle("show");

};

}
/*============================
COUNTER ANIMATION
============================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const increment=target/120;

function updateCounter(){

current+=increment;

if(current<target){

counter.innerText=Math.floor(current);

requestAnimationFrame(updateCounter);

}else{

counter.innerText=target+"+";

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

},{threshold:.4});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*============================
SCROLL REVEAL
============================*/

const revealItems=document.querySelectorAll(

".hero-left,.hero-right,.stat-card,.service-card,.why-card,.about-card,.terminal-window"

);

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

item.style.transform="translateY(50px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});

/*============================
SIDEBAR ACTIVE LINK
============================*/

const links=document.querySelectorAll(".sidebar nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

/*============================
HEADER SHADOW
============================*/

window.addEventListener("scroll",()=>{

const mobileHeader=document.querySelector(".mobile-header");

if(!mobileHeader) return;

if(window.scrollY>30){

mobileHeader.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}else{

mobileHeader.style.boxShadow="none";

}

});
/*============================
TERMINAL ANIMATION
============================*/

const terminal=document.getElementById("terminal");

if(terminal){

const lines=[

"> Booting TechFix Software EXP...",

"> Loading Mobile Database...",

"> Android Module Loaded ✔",

"> Apple Services Loaded ✔",

"> Samsung Database Connected ✔",

"> Google Pixel Database Connected ✔",

"> Xiaomi Module Loaded ✔",

"> Cyber Security Initialized ✔",

"> Platform Ready..."

];

let line=0;
let character=0;

function typeTerminal(){

if(line>=lines.length) return;

if(character<lines[line].length){

terminal.innerHTML+=lines[line].charAt(character);

character++;

setTimeout(typeTerminal,35);

}else{

terminal.innerHTML+="<br>";

line++;

character=0;

setTimeout(typeTerminal,250);

}

}

typeTerminal();

}

/*============================
BUTTON RIPPLE
============================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

/*============================
CARD HOVER EFFECT
============================*/

document.querySelectorAll(

".service-card,.stat-card,.why-card,.about-card"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*============================
SMOOTH SCROLL
============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/*============================
SEARCH READY (Future Mobiles)
============================*/

window.TechFix = window.TechFix || {};

TechFix.search = function(keyword){

keyword = keyword.toLowerCase();

if(typeof mobileDatabase === "undefined") return [];

return mobileDatabase.filter(device =>

device.name.toLowerCase().includes(keyword)

);

};

/*============================
BACK TO TOP BUTTON
============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.id="backToTop";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00D9FF;
color:#07111b;
font-size:20px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 0 20px rgba(0,217,255,.35);
transition:.3s;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*============================
CURRENT YEAR
============================*/

document.querySelectorAll(".year").forEach(el=>{

el.textContent=new Date().getFullYear();

});

/*============================
CONSOLE MESSAGE
============================*/

console.log(

"%cTechFix Software EXP V6 Loaded Successfully",

"color:#00D9FF;font-size:18px;font-weight:bold;"

);

/*============================
INITIALIZATION
============================*/

document.addEventListener("DOMContentLoaded",()=>{

console.log("Platform Ready.");

});
