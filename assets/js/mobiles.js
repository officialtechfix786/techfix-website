"use strict";
console.log("mobileDatabase:", mobileDatabase);
console.log("solutionsDatabase:", solutionsDatabase);
const brandGrid=document.getElementById("brandGrid");
const modelGrid=document.getElementById("modelGrid");
const solutionGrid=document.getElementById("solutionGrid");

const params=new URLSearchParams(window.location.search);

const brand=params.get("brand");
const model=params.get("model");
if(brand && brandGrid){

brandGrid.style.display="none";

}

if(model && modelGrid){

modelGrid.style.display="none";

}
if(brand && modelGrid){

const models=mobileDatabase[brand];

if(models){

models.forEach(name=>{

const card=document.createElement("a");

card.className="model-card";

card.href=`mobiles.html?brand=${brand}&model=${encodeURIComponent(name)}`;

card.innerHTML=`

<h3>${name}</h3>

<span>View Solutions</span>

`;

modelGrid.appendChild(card);

});

}

}
if(model && solutionGrid){

const solutions=solutionsDatabase[model];

if(solutions){

solutions.forEach(item=>{

const card=document.createElement("div");

card.className="solution-card";

card.innerHTML=`

<i class="fa-solid fa-circle-check"></i>

<h4>${item}</h4>

`;

solutionGrid.appendChild(card);

});

}

}
<script src="assets/js/database.js"></script>
<script src="assets/js/solutionsDatabase.js"></script>
<script src="assets/js/mobiles.js"></script>
