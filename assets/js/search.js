"use strict";

/*==================================================
            TECHFIX SEARCH ENGINE
==================================================*/

const searchInput=document.getElementById("searchInput");
const suggestions=document.getElementById("searchSuggestions");

let searchData=[];

/*==================================================
            LOAD DATABASE
==================================================*/

function loadSearchDatabase(){

searchData=[];

Object.keys(mobileDatabase).forEach(brand=>{

mobileDatabase[brand].forEach(phone=>{

searchData.push({

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

loadSearchDatabase();

/*==================================================
            NORMALIZE
==================================================*/

function normalize(text){

return String(text)

.toLowerCase()

.replace(/\s+/g," ")

.trim();

}
/*==================================================
            SEARCH
==================================================*/

function searchMobile(keyword){

keyword=normalize(keyword);

if(keyword==="") return [];

return searchData.filter(item=>{

return(

normalize(item.model).includes(keyword)||

normalize(item.brand).includes(keyword)||

normalize(item.chipset).includes(keyword)||

normalize(item.android).includes(keyword)

);

});

}
/*==================================================
        CREATE SEARCH CARD
==================================================*/

function createSearchCard(item){

const div=document.createElement("div");

div.className="search-card";

div.innerHTML=`

<div class="search-left">

<img src="${item.image}"

onerror="this.src='assets/images/no-image.png'">

</div>

<div class="search-right">

<h4>${item.model}</h4>

<p>${item.brand}</p>

<span>${item.android}</span>

</div>

`;

div.onclick=function(){

openSolution(item);

};

return div;

}
/*==================================================
        SHOW SUGGESTIONS
==================================================*/

function renderSuggestions(results){

if(!suggestions) return;

suggestions.innerHTML="";

if(results.length===0){

suggestions.style.display="none";

return;

}

results.slice(0,8).forEach(item=>{

suggestions.appendChild(

createSearchCard(item)

);

});

suggestions.style.display="block";

}
/*==================================================
            LIVE SEARCH
==================================================*/

if(searchInput){

searchInput.addEventListener("input",function(){

const keyword=this.value.trim();

if(keyword===""){

suggestions.innerHTML="";

suggestions.style.display="none";

return;

}

const results=searchMobile(keyword);

renderSuggestions(results);

});

}
/*==================================================
            OPEN SOLUTION
==================================================*/

function openSolution(item){

localStorage.setItem("techfix_brand",item.brand);

localStorage.setItem("techfix_model",item.model);

localStorage.setItem("techfix_solution",item.solutionId);

window.location.href="solution.html";

}
/*==================================================
            ENTER SEARCH
==================================================*/

if(searchInput){

searchInput.addEventListener("keydown",function(e){

if(e.key!=="Enter") return;

const keyword=this.value.trim();

if(keyword==="") return;

const results=searchMobile(keyword);

if(results.length){

openSolution(results[0]);

}else{

alert("No Result Found.");

}

});

}
/*==================================================
        CLOSE SUGGESTIONS
==================================================*/

document.addEventListener("click",function(e){

if(!searchInput||!suggestions) return;

if(

!searchInput.contains(e.target)&&

!suggestions.contains(e.target)

){

suggestions.style.display="none";

}

});
/*==================================================
        SEARCH HELPERS
==================================================*/

function clearSearch(){

if(!searchInput||!suggestions) return;

searchInput.value="";

suggestions.innerHTML="";

suggestions.style.display="none";

}

function focusSearch(){

if(searchInput){

searchInput.focus();

}

}

function getAllMobiles(){

return searchData;

}

function getBrandMobiles(brand){

return searchData.filter(item=>item.brand===brand);

}

/*==================================================
        ESC KEY
==================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

clearSearch();

}

});

/*==================================================
        AUTO FOCUS
==================================================*/

window.addEventListener("load",function(){

if(searchInput){

searchInput.setAttribute(

"autocomplete",

"off"

);

}

});

/*==================================================
        SEARCH COUNT
==================================================*/

function totalMobiles(){

return searchData.length;

}

console.log(

"TECHFIX SEARCH READY"

);

console.log(

"TOTAL DEVICES :",

totalMobiles()

);

/*==================================================
        GLOBAL EXPORT
==================================================*/

window.TechFixSearch={

search:searchMobile,

open:openSolution,

clear:clearSearch,

focus:focusSearch,

all:getAllMobiles,

brand:getBrandMobiles

};

/*==================================================
            END
==================================================*/
