"use strict";

/*==================================================
            TECHFIX MOBILES PAGE
==================================================*/

const mobileGrid=document.getElementById("mobileGrid");
const brandButtons=document.getElementById("brandButtons");
const mobileSearch=document.getElementById("mobileSearch");

let currentBrand="All";
let mobiles=[];

/*==================================================
            LOAD DATABASE
==================================================*/

function loadDatabase(){

mobiles=[];

Object.keys(mobileDatabase).forEach(brand=>{

mobileDatabase[brand].forEach(phone=>{

mobiles.push({

brand:brand,

id:phone.id,

model:phone.model,

slug:phone.slug,

image:phone.image,

android:phone.android,

chipset:phone.chipset,

solutionId:phone.solutionId

});

});

});

}

loadDatabase();

/*==================================================
            BRAND BUTTONS
==================================================*/

function createBrands(){

const brands=["All",...Object.keys(mobileDatabase)];

brandButtons.innerHTML="";

brands.forEach(brand=>{

const button=document.createElement("button");

button.innerText=brand;

button.className="brand-btn";

if(brand==="All"){

button.classList.add("active");

}

button.onclick=function(){

document.querySelectorAll(".brand-btn")

.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

currentBrand=brand;

renderMobiles();

};

brandButtons.appendChild(button);

});

}

/*==================================================
            MOBILE CARD
==================================================*/

function createCard(phone){

const card=document.createElement("div");

card.className="mobile-card";

card.innerHTML=`

<img
src="${phone.image}"
onerror="this.src='assets/images/no-image.png'">

<h3>${phone.model}</h3>

<p>${phone.brand}</p>

<span>${phone.android}</span>

`;

card.onclick=function(){

localStorage.setItem(

"techfix_brand",

phone.brand

);

localStorage.setItem(

"techfix_solution",

phone.solutionId

);

window.location.href="solution.html";

};

return card;

}
/*==================================================
            RENDER MOBILES
==================================================*/

function renderMobiles(){

if(!mobileGrid) return;

mobileGrid.innerHTML="";

let data=[...mobiles];

/*=========================
SEARCH
=========================*/

const keyword=mobileSearch

?mobileSearch.value.trim().toLowerCase()

:"";

if(currentBrand!=="All"){

data=data.filter(item=>

item.brand===currentBrand

);

}

if(keyword!==""){

data=data.filter(item=>

item.model.toLowerCase().includes(keyword)||

item.brand.toLowerCase().includes(keyword)||

item.android.toLowerCase().includes(keyword)||

item.chipset.toLowerCase().includes(keyword)

);

}

/*=========================
NO RESULT
=========================*/

if(data.length===0){

mobileGrid.innerHTML=`

<div class="no-result">

<h2>No Mobile Found</h2>

<p>Please try another keyword.</p>

</div>

`;

return;

}

/*=========================
CREATE CARDS
=========================*/

data.forEach(phone=>{

mobileGrid.appendChild(

createCard(phone)

);

});

}

/*==================================================
            LIVE SEARCH
==================================================*/

if(mobileSearch){

mobileSearch.addEventListener(

"input",

renderMobiles

);

}

/*==================================================
            START
==================================================*/

createBrands();

renderMobiles();
/*==================================================
            TOTAL MOBILES
==================================================*/

function totalMobiles(){

return mobiles.length;

}

/*==================================================
            TOTAL BRANDS
==================================================*/

function totalBrands(){

return Object.keys(mobileDatabase).length;

}

/*==================================================
            REFRESH
==================================================*/

function refreshMobiles(){

loadDatabase();

createBrands();

renderMobiles();

}

/*==================================================
            KEYBOARD
==================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

if(mobileSearch){

mobileSearch.value="";

}

currentBrand="All";

document.querySelectorAll(".brand-btn")

.forEach(btn=>{

btn.classList.remove("active");

if(btn.innerText==="All"){

btn.classList.add("active");

}

});

renderMobiles();

}

});

/*==================================================
            PAGE TITLE
==================================================*/

document.title=

"Supported Mobiles | TechFix Software EXP";

/*==================================================
            EXPORT
==================================================*/

window.TechFixMobiles={

all:mobiles,

refresh:refreshMobiles,

render:renderMobiles,

brands:totalBrands,

devices:totalMobiles

};

console.log(

"TECHFIX MOBILES READY"

);

console.log(

"Brands:",

totalBrands()

);

console.log(

"Devices:",

totalMobiles()

);

/*==================================================
            END
==================================================*/
