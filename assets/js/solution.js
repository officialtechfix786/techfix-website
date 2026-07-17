"use strict";

/*==================================================
            TECHFIX SOLUTION PAGE
==================================================*/

const brand=localStorage.getItem("techfix_brand");
const model=localStorage.getItem("techfix_model");
const solutionKey=localStorage.getItem("techfix_solution");

const title=document.getElementById("solutionTitle");
const image=document.getElementById("solutionImage");
const modelName=document.getElementById("solutionModel");
const android=document.getElementById("solutionAndroid");
const chipset=document.getElementById("solutionChipset");

const firmwareBtn=document.getElementById("firmwareBtn");
const flashBtn=document.getElementById("flashBtn");
const frpBtn=document.getElementById("frpBtn");
const unlockBtn=document.getElementById("unlockBtn");
const rootBtn=document.getElementById("rootBtn");
const bootloaderBtn=document.getElementById("bootloaderBtn");
const driverBtn=document.getElementById("driverBtn");
const usbBtn=document.getElementById("usbBtn");
const toolBtn=document.getElementById("toolBtn");
const testpointBtn=document.getElementById("testpointBtn");

const noteBox=document.getElementById("solutionNotes");

let mobile=null;
let solution=null;

/*==================================================
            LOAD DATA
==================================================*/

function loadSolution(){

if(!brand||!solutionKey){

window.location.href="index.html";

return;

}

const mobiles=mobileDatabase[brand];

if(!mobiles){

window.location.href="index.html";

return;

}

mobile=mobiles.find(item=>item.solutionId===solutionKey);

if(!mobile){

window.location.href="index.html";

return;

}

if(

typeof solutionsDatabase!=="undefined" &&

solutionsDatabase[brand]

){

solution=

solutionsDatabase[brand][

solutionKey.replace(brand.toLowerCase()+"-","")

];

}

renderSolution();

}

loadSolution();
/*==================================================
            RENDER DATA
==================================================*/

function renderSolution(){

if(!mobile) return;

if(title) title.innerText=mobile.model;

if(modelName) modelName.innerText=mobile.model;

if(android) android.innerText=mobile.android;

if(chipset) chipset.innerText=mobile.chipset;

if(image){

image.src=mobile.image;

image.alt=mobile.model;

image.onerror=function(){

this.src="assets/images/no-image.png";

};

}

if(!solution) return;

setLink(firmwareBtn,solution.firmware);

setLink(flashBtn,solution.flash);

setLink(frpBtn,solution.frp);

setLink(unlockBtn,solution.unlock);

setLink(rootBtn,solution.root);

setLink(bootloaderBtn,solution.bootloader);

setLink(driverBtn,solution.drivers);

setLink(usbBtn,solution.usb);

setLink(toolBtn,solution.odin);

setLink(testpointBtn,solution.testpoint);

renderNotes();

}

/*==================================================
            BUTTON LINKS
==================================================*/

function setLink(button,link){

if(!button) return;

if(link && link!=="#"){

button.href=link;

button.target="_blank";

button.classList.remove("disabled");

}else{

button.href="javascript:void(0)";

button.classList.add("disabled");

button.onclick=function(){

alert("Coming Soon.");

};

}

}

/*==================================================
            NOTES
==================================================*/

function renderNotes(){

if(!noteBox) return;

noteBox.innerHTML="";

if(!solution) return;

if(!solution.notes) return;

solution.notes.forEach(note=>{

const li=document.createElement("li");

li.innerText=note;

noteBox.appendChild(li);

});

}
/*==================================================
            COPY MODEL
==================================================*/

function copyModel(){

navigator.clipboard.writeText(mobile.model);

alert("Model Copied.");

}

/*==================================================
            SHARE
==================================================*/

async function shareSolution(){

if(!navigator.share){

copyModel();

return;

}

try{

await navigator.share({

title:mobile.model,

text:mobile.model,

url:window.location.href

});

}catch(err){}

}

/*==================================================
            DOWNLOAD IMAGE
==================================================*/

function downloadImage(){

if(!mobile) return;

const a=document.createElement("a");

a.href=mobile.image;

a.download=mobile.slug+".png";

a.click();

}

/*==================================================
            PRINT
==================================================*/

function printSolution(){

window.print();

}

/*==================================================
            BACK
==================================================*/

function goBack(){

history.back();

}

/*==================================================
            RELATED DEVICES
==================================================*/

function relatedMobiles(){

const list=mobileDatabase[brand]||[];

return list.filter(item=>item.id!==mobile.id).slice(0,6);

}

const relatedContainer=document.getElementById("relatedMobiles");

if(relatedContainer){

relatedMobiles().forEach(item=>{

const card=document.createElement("div");

card.className="related-card";

card.innerHTML=`

<img src="${item.image}"

onerror="this.src='assets/images/no-image.png'">

<h4>${item.model}</h4>

`;

card.onclick=function(){

localStorage.setItem("techfix_brand",brand);

localStorage.setItem("techfix_solution",item.solutionId);

window.location.reload();

};

relatedContainer.appendChild(card);

});

}
/*==================================================
            BUTTON EVENTS
==================================================*/

const copyBtn=document.getElementById("copyBtn");
const shareBtn=document.getElementById("shareBtn");
const downloadBtn=document.getElementById("downloadBtn");
const printBtn=document.getElementById("printBtn");
const backBtn=document.getElementById("backBtn");

if(copyBtn){

copyBtn.addEventListener("click",copyModel);

}

if(shareBtn){

shareBtn.addEventListener("click",shareSolution);

}

if(downloadBtn){

downloadBtn.addEventListener("click",downloadImage);

}

if(printBtn){

printBtn.addEventListener("click",printSolution);

}

if(backBtn){

backBtn.addEventListener("click",goBack);

}

/*==================================================
            KEYBOARD SHORTCUTS
==================================================*/

document.addEventListener("keydown",function(e){

if(e.ctrlKey&&e.key==="p"){

e.preventDefault();

printSolution();

}

if(e.ctrlKey&&e.key==="c"){

e.preventDefault();

copyModel();

}

if(e.key==="Escape"){

goBack();

}

});

/*==================================================
            PAGE TITLE
==================================================*/

if(mobile){

document.title=

mobile.model+

" | TechFix Software EXP";

}

/*==================================================
            SCROLL TOP
==================================================*/

window.addEventListener("load",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==================================================
            GLOBAL
==================================================*/

window.TechFixSolution={

mobile,

solution,

copyModel,

shareSolution,

downloadImage,

printSolution,

goBack

};

/*==================================================
            END
==================================================*/
