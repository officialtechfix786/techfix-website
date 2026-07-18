"use strict";

/*==================================================
            TECHFIX DOWNLOADS PAGE
==================================================*/

const downloadGrid=document.getElementById("downloadGrid");
const downloadSearch=document.getElementById("downloadSearch");
const downloadCategories=document.getElementById("downloadCategories");

let currentCategory="All";

const downloadDatabase=[

{
category:"Flash Tool",
title:"SP Flash Tool",
version:"v5.2424",
image:"assets/images/tools/spflash.png",
link:"#"
},

{
category:"Flash Tool",
title:"Odin Flash Tool",
version:"v3.14.4",
image:"assets/images/tools/odin.png",
link:"#"
},

{
category:"Flash Tool",
title:"QFIL Tool",
version:"Latest",
image:"assets/images/tools/qfil.png",
link:"#"
},

{
category:"Driver",
title:"Samsung USB Driver",
version:"Latest",
image:"assets/images/tools/samsung-driver.png",
link:"#"
},

{
category:"Driver",
title:"MTK USB Driver",
version:"Latest",
image:"assets/images/tools/mtk-driver.png",
link:"#"
},

{
category:"Driver",
title:"Qualcomm USB Driver",
version:"Latest",
image:"assets/images/tools/qc-driver.png",
link:"#"
},

{
category:"FRP Tool",
title:"SamFW Tool",
version:"Latest",
image:"assets/images/tools/samfw.png",
link:"#"
},

{
category:"FRP Tool",
title:"Unlock Tool",
version:"Latest",
image:"assets/images/tools/unlocktool.png",
link:"#"
},

{
category:"Utility",
title:"Minimal ADB Fastboot",
version:"Latest",
image:"assets/images/tools/adb.png",
link:"#"
}

];

/*==================================================
            CREATE CARD
==================================================*/

function createDownloadCard(item){

const card=document.createElement("div");

card.className="mobile-card";

card.innerHTML=`

<img
src="${item.image}"
onerror="this.src='assets/images/no-image.png'">

<h3>${item.title}</h3>

<p>${item.category}</p>

<span>${item.version}</span>

`;

card.onclick=function(){

window.open(item.link,"_blank");

};

return card;

}
/*==================================================
            RENDER DOWNLOADS
==================================================*/

function renderDownloads(){

if(!downloadGrid) return;

downloadGrid.innerHTML="";

let data=[...downloadDatabase];

const keyword=downloadSearch

?downloadSearch.value.trim().toLowerCase()

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

item.version.toLowerCase().includes(keyword)

);

}

/*=========================
NO RESULT
=========================*/

if(data.length===0){

downloadGrid.innerHTML=`

<div class="no-result">

<h2>No Download Found</h2>

<p>Please try another keyword.</p>

</div>

`;

return;

}

/*=========================
CREATE CARDS
=========================*/

data.forEach(item=>{

downloadGrid.appendChild(

createDownloadCard(item)

);

});

}

/*==================================================
            CATEGORY BUTTONS
==================================================*/

function renderCategories(){

const categories=[

"All",

...new Set(

downloadDatabase.map(item=>item.category)

)

];

downloadCategories.innerHTML="";

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

renderDownloads();

};

downloadCategories.appendChild(button);

});

}

/*==================================================
            LIVE SEARCH
==================================================*/

if(downloadSearch){

downloadSearch.addEventListener(

"input",

renderDownloads

);

}

/*==================================================
            START
==================================================*/

renderCategories();

renderDownloads();
/*==================================================
            TOTAL DOWNLOADS
==================================================*/

function totalDownloads(){

return downloadDatabase.length;

}

/*==================================================
            TOTAL CATEGORIES
==================================================*/

function totalCategories(){

return [

...new Set(

downloadDatabase.map(item=>item.category)

)

].length;

}

/*==================================================
            REFRESH
==================================================*/

function refreshDownloads(){

renderCategories();

renderDownloads();

}

/*==================================================
            ESC KEY
==================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

if(downloadSearch){

downloadSearch.value="";

}

currentCategory="All";

document.querySelectorAll(".brand-btn")

.forEach(btn=>{

btn.classList.remove("active");

if(btn.innerText==="All"){

btn.classList.add("active");

}

});

renderDownloads();

}

});

/*==================================================
            PAGE TITLE
==================================================*/

document.title="Downloads Center | TechFix Software EXP";

/*==================================================
            EXPORT
==================================================*/

window.TechFixDownloads={

all:downloadDatabase,

refresh:refreshDownloads,

render:renderDownloads,

categories:totalCategories,

downloads:totalDownloads

};

console.log("DOWNLOAD CENTER READY");

console.log("Categories :",totalCategories());

console.log("Downloads :",totalDownloads());

/*==================================================
                    END
==================================================*/
