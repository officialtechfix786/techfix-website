"use strict";

/*==========================================
        TECHFIX SEARCH ENGINE v1
==========================================*/

const searchInput=document.getElementById("searchInput");
const suggestions=document.getElementById("searchSuggestions");

let allMobiles=[];

/*===============================
LOAD DATABASE
================================*/

function loadDatabase(){

allMobiles=[];

Object.keys(mobileDatabase).forEach(brand=>{

mobileDatabase[brand].forEach(model=>{

allMobiles.push({

brand:brand,

name:model

});

});

});

}

loadDatabase();

/*===============================
NORMALIZE
================================*/

function normalize(text){

return text
.toLowerCase()
.replace(/\s+/g," ")
.trim();

}

/*===============================
SEARCH
================================*/

function searchMobiles(keyword){

keyword=normalize(keyword);

if(keyword==="") return [];

return allMobiles.filter(item=>{

return normalize(item.name).includes(keyword);

});

}
/*==========================================
        CREATE SUGGESTIONS
==========================================*/

function renderSuggestions(results){

if(!suggestions) return;

suggestions.innerHTML="";

if(results.length===0){

suggestions.style.display="none";

return;

}

results.slice(0,10).forEach(item=>{

const div=document.createElement("div");

div.className="search-item";

div.innerHTML=`
<div class="search-brand">${item.brand.toUpperCase()}</div>
<div class="search-model">${item.name}</div>
`;

div.addEventListener("click",()=>{

searchInput.value=item.name;

suggestions.style.display="none";

openSolution(item);

});

suggestions.appendChild(div);

});

suggestions.style.display="block";

}

/*==========================================
            LIVE SEARCH
==========================================*/

if(searchInput){

searchInput.addEventListener("input",function(){

const keyword=this.value.trim();

if(keyword.length<1){

suggestions.innerHTML="";

suggestions.style.display="none";

return;

}

const results=searchMobiles(keyword);

renderSuggestions(results);

});

}
/*==========================================
        OPEN SOLUTION
==========================================*/

function openSolution(item){

localStorage.setItem("techfix_brand",item.brand);
localStorage.setItem("techfix_model",item.name);

window.location.href="solution.html";

}

/*==========================================
        ENTER SEARCH
==========================================*/

if(searchInput){

searchInput.addEventListener("keydown",function(e){

if(e.key!=="Enter") return;

const keyword=this.value.trim();

const results=searchMobiles(keyword);

if(results.length>0){

openSolution(results[0]);

}else{

alert("No mobile found.");

}

});

}

/*==========================================
    CLOSE SUGGESTIONS
==========================================*/

document.addEventListener("click",function(e){

if(!searchInput) return;
if(!suggestions) return;

if(
!searchInput.contains(e.target) &&
!suggestions.contains(e.target)
){

suggestions.style.display="none";

}

});
/*==========================================
        CREATE SUGGESTIONS
==========================================*/

function renderSuggestions(results){

    if(!suggestions) return;

    suggestions.innerHTML="";

    if(results.length===0){
        suggestions.style.display="none";
        return;
    }

    results.slice(0,10).forEach(item=>{

        const div=document.createElement("div");

        div.className="search-item";

        div.innerHTML=`
            <div class="search-brand">${item.brand.toUpperCase()}</div>
            <div class="search-model">${item.name}</div>
        `;

        div.onclick=function(){

            searchInput.value=item.name;

            suggestions.style.display="none";

            openSolution(item);

        };

        suggestions.appendChild(div);

    });

    suggestions.style.display="block";

}

/*==========================================
            LIVE SEARCH
==========================================*/

if(searchInput){

    searchInput.addEventListener("input",function(){

        const keyword=this.value.trim();

        if(keyword===""){

            suggestions.innerHTML="";

            suggestions.style.display="none";

            return;

        }

        const results=searchMobiles(keyword);

        renderSuggestions(results);

    });

}
/*==========================================
        OPEN SOLUTION
==========================================*/

function openSolution(item){

    localStorage.setItem("techfix_brand",item.brand);
    localStorage.setItem("techfix_model",item.name);

    window.location.href="solution.html";

}

/*==========================================
        ENTER KEY SEARCH
==========================================*/

if(searchInput){

    searchInput.addEventListener("keydown",function(e){

        if(e.key!=="Enter") return;

        const keyword=this.value.trim();

        if(keyword==="") return;

        const results=searchMobiles(keyword);

        if(results.length){

            openSolution(results[0]);

        }else{

            alert("No mobile found.");

        }

    });

}

/*==========================================
        CLOSE SUGGESTIONS
==========================================*/

document.addEventListener("click",function(e){

    if(!searchInput || !suggestions) return;

    if(
        !searchInput.contains(e.target) &&
        !suggestions.contains(e.target)
    ){

        suggestions.style.display="none";

    }

});
