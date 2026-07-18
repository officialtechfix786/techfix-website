"use strict";

/*==================================================
            TECHFIX CYBER PAGE
==================================================*/

const cyberGrid=document.getElementById("cyberGrid");
const cyberSearch=document.getElementById("cyberSearch");
const cyberCategories=document.getElementById("cyberCategories");

let currentCategory="All";

const cyberDatabase=[

{
category:"Ethical Hacking",
title:"Kali Linux Guide",
level:"Beginner",
image:"assets/images/cyber/kali.png",
link:"#"
},

{
category:"Ethical Hacking",
title:"Metasploit Framework",
level:"Intermediate",
image:"assets/images/cyber/metasploit.png",
link:"#"
},

{
category:"Networking",
title:"Cisco Networking",
level:"Beginner",
image:"assets/images/cyber/cisco.png",
link:"#"
},

{
category:"Networking",
title:"Wireshark",
level:"Intermediate",
image:"assets/images/cyber/wireshark.png",
link:"#"
},

{
category:"Security",
title:"Burp Suite",
level:"Advanced",
image:"assets/images/cyber/burp.png",
link:"#"
},

{
category:"Security",
title:"Nmap Scanner",
level:"Beginner",
image:"assets/images/cyber/nmap.png",
link:"#"
},

{
category:"Programming",
title:"Python For Hackers",
level:"Intermediate",
image:"assets/images/cyber/python.png",
link:"#"
},

{
category:"Programming",
title:"Bash Scripting",
level:"Advanced",
image:"assets/images/cyber/bash.png",
link:"#"
},

{
category:"Tools",
title:"John The Ripper",
level:"Advanced",
image:"assets/images/cyber/john.png",
link:"#"
},

{
category:"Tools",
title:"Hashcat",
level:"Advanced",
image:"assets/images/cyber/hashcat.png",
link:"#"
}

];

/*==================================================
            CREATE CARD
==================================================*/

function createCyberCard(item){

const card=document.createElement("div");

card.className="mobile-card";

card.innerHTML=`

<img
src="${item.image}"
onerror="this.src='assets/images/no-image.png'">

<h3>${item.title}</h3>

<p>${item.category}</p>

<span>${item.level}</span>

`;

card.onclick=function(){

window.open(item.link,"_blank");

};

return card;

}
/*==================================================
            RENDER CYBER DATA
==================================================*/

function renderCyber(){

if(!cyberGrid) return;

cyberGrid.innerHTML="";

let data=[...cyberDatabase];

const keyword=cyberSearch

?cyberSearch.value.trim().toLowerCase()

:"";

/*=========================
CATEGORY FILTER
=========================*/

if(currentCategory!=="All"){

data=data.filter(item=>

item.category===currentCategory

);

}

/*=========================
SEARCH FILTER
=========================*/

if(keyword!==""){

data=data.filter(item=>

item.title.toLowerCase().includes(keyword)||

item.category.toLowerCase().includes(keyword)||

item.level.toLowerCase().includes(keyword)

);

}

/*=========================
NO RESULT
=========================*/

if(data.length===0){

cyberGrid.innerHTML=`

<div class="no-result">

<h2>No Topic Found</h2>

<p>Please try another keyword.</p>

</div>

`;

return;

}

/*=========================
CREATE CARDS
=========================*/

data.forEach(item=>{

cyberGrid.appendChild(

createCyberCard(item)

);

});

}

/*==================================================
            CATEGORY BUTTONS
==================================================*/

function renderCyberCategories(){

const categories=[

"All",

...new Set(

cyberDatabase.map(item=>item.category)

)

];

cyberCategories.innerHTML="";

categories.forEach(category=>{

const button=document.createElement("button");

button.className="brand-btn";

button.innerText=category;

if(category==="All"){

button.classList.add("active");

}

button.onclick=function(){

document.querySelectorAll(".brand-btn")

.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

currentCategory=category;

renderCyber();

};

cyberCategories.appendChild(button);

});

}

/*==================================================
            LIVE SEARCH
==================================================*/

if(cyberSearch){

cyberSearch.addEventListener(

"input",

renderCyber

);

}

/*==================================================
            START
==================================================*/

renderCyberCategories();

renderCyber();
/*==================================================
            TOTAL TOPICS
==================================================*/

function totalCyberTopics(){

return cyberDatabase.length;

}

/*==================================================
            TOTAL CATEGORIES
==================================================*/

function totalCyberCategories(){

return [

...new Set(

cyberDatabase.map(item=>item.category)

)

].length;

}

/*==================================================
            REFRESH
==================================================*/

function refreshCyber(){

renderCyberCategories();

renderCyber();

}

/*==================================================
            ESC KEY
==================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

if(cyberSearch){

cyberSearch.value="";

}

currentCategory="All";

document.querySelectorAll(".brand-btn")

.forEach(btn=>{

btn.classList.remove("active");

if(btn.innerText==="All"){

btn.classList.add("active");

}

});

renderCyber();

}

});

/*==================================================
            PAGE TITLE
==================================================*/

document.title="Cyber Security | TechFix Software EXP";

/*==================================================
            EXPORT
==================================================*/

window.TechFixCyber={

all:cyberDatabase,

refresh:refreshCyber,

render:renderCyber,

categories:totalCyberCategories,

topics:totalCyberTopics

};

console.log("CYBER PAGE READY");

console.log("Categories :",totalCyberCategories());

console.log("Topics :",totalCyberTopics());

/*==================================================
                    END
==================================================*/
