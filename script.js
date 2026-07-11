/*==================================================
        TECHFIX V4 DATABASE ENGINE
==================================================*/

const mobileDatabase = {

apple: appleModels,

samsung: samsungModels,

pixel: pixelModels,

xiaomi: xiaomiModels,

vivo: vivoModels,

oppo: oppoModels,

realme: realmeModels,

tecno: tecnoModels,

infinix: infinixModels,

oneplus: oneplusModels,

motorola: motorolaModels,

nokia: nokiaModels,

huawei: huaweiModels,

honor: honorModels

};

/*=========================
CURRENT BRAND
=========================*/

let currentBrand = "";

let currentModels = [];

/*=========================
ELEMENTS
=========================*/

const modelsContainer =
document.getElementById("modelsContainer");

const brandTitle =
document.getElementById("brandTitle");

const brandSubtitle =
document.getElementById("brandSubtitle");

const selectedBrand =
document.getElementById("selectedBrand");

const totalModels =
document.getElementById("totalModels");

const searchInput =
document.getElementById("searchInput");
/*=========================
SHOW BRAND
=========================*/

function showBrand(brand){

if(!mobileDatabase[brand]) return;

currentBrand = brand;

currentModels = mobileDatabase[brand];

const title =
brand.charAt(0).toUpperCase() +
brand.slice(1);

brandTitle.innerText = title;

brandSubtitle.innerText =
"Supported Mobile Models";

selectedBrand.innerText = title;

totalModels.innerText =
currentModels.length;

if(searchInput){

searchInput.value = "";

}

renderModels(currentModels);

document.getElementById("modelsSection")
.scrollIntoView({

behavior:"smooth"

});

}
/*=========================
RENDER MODELS
=========================*/

function renderModels(models){

modelsContainer.innerHTML = "";

if(models.length===0){

modelsContainer.innerHTML=`

<div class="welcome-box">

<i class="fas fa-circle-exclamation"></i>

<h2>No Models Found</h2>

<p>

Try another keyword.

</p>

</div>

`;

return;

}

models.forEach(model=>{

const card=document.createElement("div");

card.className="model-card";

card.innerHTML=`

<h3>${model}</h3>

<p>

Supported Device

</p>

`;

modelsContainer.appendChild(card);

});

}
/*=========================
LIVE SEARCH
=========================*/

function searchModels(){

if(currentBrand==="") return;

const keyword=searchInput.value
.toLowerCase()
.trim();

const filtered=currentModels.filter(model=>

model.toLowerCase().includes(keyword)

);

totalModels.innerText=filtered.length;

renderModels(filtered);

}
/*=========================
AUTO BRAND COUNTERS
=========================*/

function loadCounters(){

Object.keys(mobileDatabase).forEach(brand=>{

const element=document.getElementById(

brand+"Count"

);

if(element){

element.innerText=

mobileDatabase[brand].length+

" Models";

}

});

}
/*=========================
INITIALIZE
=========================*/

document.addEventListener("DOMContentLoaded",()=>{

loadCounters();

if(searchInput){

searchInput.addEventListener(

"keyup",

searchModels

);

}

});

/*=========================
REMOVE OLD SHOWBRAND
=========================*/

// IMPORTANT:
// Ab script ke upar jo purana function tha:
//
// function showBrand(brand){
//   const sections=document.querySelectorAll(".brand-models");
//   ...
// }
//
// Us poore function ko DELETE kar dena.
// Sirf naya showBrand() hi rehna chahiye.
