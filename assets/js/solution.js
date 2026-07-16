"use strict";

/*=====================================================
            TECHFIX SOLUTION PAGE
=====================================================*/

const phoneTitle = document.getElementById("phoneTitle");
const phoneImage = document.getElementById("phoneImage");
const solutionList = document.getElementById("solutionList");

/*==========================================
        GET SELECTED MOBILE
==========================================*/

const selectedBrand = localStorage.getItem("techfix_brand");
const selectedModel = localStorage.getItem("techfix_model");

/*==========================================
        FIND MOBILE
==========================================*/

let selectedPhone = null;

if (
    selectedBrand &&
    solutionsDatabase[selectedBrand]
) {

    selectedPhone = solutionsDatabase[selectedBrand].find(item => {

        return item.name === selectedModel;

    });

}

console.log("Brand :", selectedBrand);
console.log("Model :", selectedModel);
console.log(selectedPhone);
/*==========================================
        LOAD PHONE INFORMATION
==========================================*/

if(selectedPhone){

    /* Phone Name */

    if(phoneTitle){

        phoneTitle.textContent=selectedPhone.name;

    }

    /* Phone Image */

    if(phoneImage){

        phoneImage.src=selectedPhone.image;

        phoneImage.alt=selectedPhone.name;

    }

}else{

    if(phoneTitle){

        phoneTitle.textContent="No Solution Found";

    }

    if(phoneImage){

        phoneImage.src="assets/images/logo.png";

    }

    if(solutionList){

        solutionList.innerHTML=`

        <div class="no-solution">

            <i class="fa-solid fa-circle-xmark"></i>

            <h2>No Solution Available</h2>

            <p>

            This mobile is not available in the TechFix database.

            </p>

        </div>

        `;

    }

}
/*==========================================
        CREATE SOLUTION CARDS
==========================================*/

if(selectedPhone && solutionList){

solutionList.innerHTML="";

selectedPhone.solutions.forEach(solution=>{

const card=document.createElement("div");

card.className="solution-card";

card.innerHTML=`

<div class="solution-icon">

<i class="fa-solid fa-screwdriver-wrench"></i>

</div>

<h3>${solution}</h3>

<p>

Professional ${solution} Solution for
${selectedPhone.name}

</p>

<button
class="solution-btn"
data-solution="${solution}">

Open Solution

</button>

`;

solutionList.appendChild(card);

});

}
/*==========================================
        SOLUTION LINKS
==========================================*/

const solutionLinks={

"Firmware":"downloads.html",

"Flash File":"downloads.html",

"Restore":"downloads.html",

"DFU Mode":"downloads.html",

"Recovery Mode":"downloads.html",

"Hello Screen":"downloads.html",

"Activation":"downloads.html",

"Jailbreak":"downloads.html",

"iCloud":"downloads.html",

"Driver":"downloads.html",

"USB Driver":"downloads.html",

"FRP Unlock":"downloads.html",

"KG Lock":"downloads.html",

"MDM Remove":"downloads.html",

"Boot Repair":"downloads.html",

"Dead Boot":"downloads.html",

"ADB":"downloads.html",

"Fastboot":"downloads.html"

};

/*==========================================
        BUTTON EVENTS
==========================================*/

document.addEventListener("click",(e)=>{

const button=e.target.closest(".solution-btn");

if(!button) return;

const solution=button.dataset.solution;

const url=solutionLinks[solution] || "downloads.html";

window.location.href=url;

});
