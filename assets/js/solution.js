"use strict";

/*=========================================
        TECHFIX SOLUTION PAGE
=========================================*/

const params = new URLSearchParams(window.location.search);

const brand = params.get("brand") || "Unknown";
const model = params.get("model") || "Unknown Device";
const service = params.get("service") || "Service";

const data = solutionDetails.default;

/* ---------- TITLE ---------- */

document.getElementById("solutionTitle").textContent = model;
document.getElementById("solutionSub").textContent = service;

/* ---------- DEVICE INFO ---------- */

document.getElementById("deviceInfo").innerHTML = `
<p><strong>Brand:</strong> ${brand}</p>
<p><strong>Device:</strong> ${model}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Android:</strong> ${data.android}</p>
<p><strong>Difficulty:</strong> ${data.difficulty}</p>
<p><strong>Estimated Time:</strong> ${data.time}</p>
<p><strong>Warning:</strong> ${data.warning}</p>
`;

/* ---------- TOOLS ---------- */

const toolList = document.getElementById("toolList");

data.tools.forEach(tool => {

    const li = document.createElement("li");
    li.textContent = tool;
    toolList.appendChild(li);

});

/* ---------- STEPS ---------- */

const steps = document.getElementById("steps");

data.steps.forEach(step => {

    const li = document.createElement("li");
    li.textContent = step;
    steps.appendChild(li);

});

console.log("Solution Page Loaded");
