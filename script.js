const text = [

"Android Flashing Expert",

"Apple iCloud Specialist",

"FRP Unlock Professional",

"Mobile Software Engineer",

"Cyber Security Expert",

"Data Recovery Specialist"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type,1800);

}else{

setTimeout(type,90);

}

})();
// ===== Smooth Reveal Animation =====

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section,.card,.brand-card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

observer.observe(el);

});
// ===== Active Navbar =====

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
// ===== Animated Counter =====

const counters = document.querySelectorAll("#stats h3");

const speed = 80;

counters.forEach(counter => {

const update = () => {

const target = +counter.innerText.replace("+","");

const count = +counter.getAttribute("data-count") || 0;

const inc = Math.ceil(target / speed);

if(count < target){

counter.setAttribute("data-count", count + inc);

counter.innerText = (count + inc) + "+";

setTimeout(update,20);

}else{

counter.innerText = target + "+";

}

};

update();

});
// ================= SCROLL REVEAL =================

const revealItems = document.querySelectorAll(
  ".card, .brand-card, .about-box, .section-title"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.15
});

revealItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "all 0.8s ease";
  revealObserver.observe(item);
});
// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const top = section.offsetTop - 120;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});
