"use strict";

/*==================================================
            TECHFIX ANDROID PAGE
==================================================*/

const androidGrid=document.getElementById("androidGrid");
const androidBrands=document.getElementById("androidBrands");
const androidSearch=document.getElementById("androidSearch");

let androidDevices=[];
let currentBrand="All";

/*==================================================
            LOAD DATABASE
==================================================*/

function loadAndroidDatabase(){

androidDevices=[];

Object.keys(mobileDatabase).forEach(brand=>{

if(brand==="Apple") return;

mobileDatabase[brand].forEach(phone=>{

androidDevices.push({

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

loadAndroidDatabase();

/*==================================================
            BRAND BUTTONS
==================================================*/

function renderBrands(){

const brands=["All",...Object.keys(mobileDatabase).filter(b=>b!=="Apple")];

androidBrands.innerHTML="";

brands.forEach(brand=>{

const button=document.createElement("button");

button.className="brand-btn";

button.innerText=brand;

if(brand==="All"){

button.classList.add("active");

}

button.onclick=function(){

document.querySelectorAll(".brand-btn")

.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

currentBrand=brand;

renderAndroid();

};

androidBrands.appendChild(button);

});

}

/*==================================================
            CREATE CARD
==================================================*/

function createAndroidCard(phone){

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

localStorage.setItem("techfix_brand",phone.brand);

localStorage.setItem("techfix_solution",phone.solutionId);

window.location.href="solution.html";

};

return card;

}
/*==================================================
            RENDER ANDROID
==================================================*/

function renderAndroid(){

if(!androidGrid) return;

androidGrid.innerHTML="";

let data=[...androidDevices];

const keyword=androidSearch

?androidSearch.value.trim().toLowerCase()

:"";

/*=========================
BRAND FILTER
=========================*/

if(currentBrand!=="All"){

data=data.filter(item=>

item.brand===currentBrand

);

}

/*=========================
SEARCH FILTER
=========================*/

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

androidGrid.innerHTML=`

<div class="no-result">

<h2>No Android Device Found</h2>

<p>Try another keyword.</p>

</div>

`;

return;

}

/*=========================
CREATE CARDS
=========================*/

data.forEach(phone=>{

androidGrid.appendChild(

createAndroidCard(phone)

);

});

}

/*==================================================
            LIVE SEARCH
==================================================*/

if(androidSearch){

androidSearch.addEventListener(

"input",

renderAndroid

);

}

/*==================================================
            START
==================================================*/

renderBrands();

renderAndroid();
/*==================================================
            TOTAL DEVICES
==================================================*/

function totalAndroidDevices(){

return androidDevices.length;

}

/*==================================================
            TOTAL BRANDS
==================================================*/

function totalAndroidBrands(){

return Object.keys(mobileDatabase)

.filter(item=>item!=="Apple")

.length;

}

/*==================================================
            REFRESH
==================================================*/

function refreshAndroid(){

loadAndroidDatabase();

renderBrands();

renderAndroid();

}

/*==================================================
            ESC KEY
==================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

if(androidSearch){

androidSearch.value="";

}

currentBrand="All";

document.querySelectorAll(".brand-btn")

.forEach(btn=>{

btn.classList.remove("active");

if(btn.innerText==="All"){

btn.classList.add("active");

}

});

renderAndroid();

}

});

/*==================================================
            PAGE TITLE
==================================================*/

document.title="Android Solutions | TechFix Software EXP";

/*==================================================
            EXPORT
==================================================*/

window.TechFixAndroid={

all:androidDevices,

refresh:refreshAndroid,

render:renderAndroid,

brands:totalAndroidBrands,

devices:totalAndroidDevices

};

console.log("ANDROID PAGE READY");

console.log("Brands :",totalAndroidBrands());

console.log("Devices :",totalAndroidDevices());

/*==================================================
                    END
==================================================*/
