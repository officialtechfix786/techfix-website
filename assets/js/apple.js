"use strict";

/*==================================================
            TECHFIX APPLE PAGE
==================================================*/

const appleGrid=document.getElementById("appleGrid");
const appleBrands=document.getElementById("appleBrands");
const appleSearch=document.getElementById("appleSearch");

let appleDevices=[];
let currentBrand="Apple";

/*==================================================
            LOAD DATABASE
==================================================*/

function loadAppleDatabase(){

appleDevices=[];

if(!mobileDatabase.Apple) return;

mobileDatabase.Apple.forEach(phone=>{

appleDevices.push({

brand:"Apple",

id:phone.id,

model:phone.model,

slug:phone.slug,

image:phone.image,

android:phone.android,

chipset:phone.chipset,

solutionId:phone.solutionId

});

});

}

loadAppleDatabase();

/*==================================================
            BRAND BUTTON
==================================================*/

function renderAppleBrands(){

appleBrands.innerHTML="";

const button=document.createElement("button");

button.className="brand-btn active";

button.innerText="Apple";

appleBrands.appendChild(button);

}

/*==================================================
            CREATE CARD
==================================================*/

function createAppleCard(phone){

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
            RENDER APPLE
==================================================*/

function renderApple(){

if(!appleGrid) return;

appleGrid.innerHTML="";

let data=[...appleDevices];

const keyword=appleSearch

?appleSearch.value.trim().toLowerCase()

:"";

/*=========================
SEARCH FILTER
=========================*/

if(keyword!==""){

data=data.filter(item=>

item.model.toLowerCase().includes(keyword)||

item.brand.toLowerCase().includes(keyword)||

item.chipset.toLowerCase().includes(keyword)||

item.android.toLowerCase().includes(keyword)

);

}

/*=========================
NO RESULT
=========================*/

if(data.length===0){

appleGrid.innerHTML=`

<div class="no-result">

<h2>No iPhone Found</h2>

<p>Please try another keyword.</p>

</div>

`;

return;

}

/*=========================
CREATE CARDS
=========================*/

data.forEach(phone=>{

appleGrid.appendChild(

createAppleCard(phone)

);

});

}

/*==================================================
            LIVE SEARCH
==================================================*/

if(appleSearch){

appleSearch.addEventListener(

"input",

renderApple

);

}

/*==================================================
            START
==================================================*/

renderAppleBrands();

renderApple();
/*==================================================
            TOTAL DEVICES
==================================================*/

function totalAppleDevices(){

return appleDevices.length;

}

/*==================================================
            REFRESH
==================================================*/

function refreshApple(){

loadAppleDatabase();

renderAppleBrands();

renderApple();

}

/*==================================================
            ESC KEY
==================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

if(appleSearch){

appleSearch.value="";

}

renderApple();

}

});

/*==================================================
            PAGE TITLE
==================================================*/

document.title="Apple iPhone Solutions | TechFix Software EXP";

/*==================================================
            EXPORT
==================================================*/

window.TechFixApple={

all:appleDevices,

refresh:refreshApple,

render:renderApple,

devices:totalAppleDevices

};

console.log("APPLE PAGE READY");

console.log("Devices :",totalAppleDevices());

/*==================================================
                    END
==================================================*/
