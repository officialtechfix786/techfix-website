/* ==========================================
   TECHFIX SOFTWARE EXP V3
   CEO : MIAN AHMAD
========================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1800);

});

/* ==========================
   MATRIX RAIN
========================== */

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const letters = "01TECHFIXSOFTWAREEXPANDROIDAPPLECYBER";

const chars = letters.split("");

const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = [];

for(let x=0;x<columns;x++){

drops[x]=1;

}

function drawMatrix(){

ctx.fillStyle="rgba(5,8,15,.08)";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00FF88";

ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text=chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);

/* ==========================
   RESIZE
========================== */

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});
/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target / 120;

const update = () => {

count += speed;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter => {

counterObserver.observe(counter);

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealItems = document.querySelectorAll(
".hero-left,.hero-right,.stat-box,.service-card"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="rgba(5,8,15,.92)";

header.style.boxShadow="0 0 25px rgba(0,255,136,.20)";

}else{

header.style.background="rgba(5,8,15,.75)";

header.style.boxShadow="none";

}

});
/* ==========================
   HACKER TERMINAL
========================== */

const terminalText = [

"> Booting TechFix Software Exp...",

"> Initializing Android Module...",

"> Loading Apple Services...",

"> Connecting Pixel Database...",

"> Connecting Samsung Server...",

"> Loading Xiaomi Module...",

"> Loading Mobile Tools...",

"> Security Check Passed ✔",

"> Access Granted..."

];

const terminal = document.getElementById("terminal");

if(terminal){

let line = 0;

let char = 0;

function typeLine(){

if(line >= terminalText.length) return;

if(char < terminalText[line].length){

terminal.innerHTML += terminalText[line].charAt(char);

char++;

setTimeout(typeLine,40);

}else{

terminal.innerHTML += "<br>";

line++;

char=0;

setTimeout(typeLine,300);

}

}

typeLine();

}
