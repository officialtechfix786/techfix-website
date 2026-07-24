/*==================================================
TECHFIX SOFTWARE EXP
RENDER MOBILES
==================================================*/

"use strict";

const mobilesContainer = document.getElementById("mobilesGrid");

if (mobilesContainer && typeof mobilesDatabase !== "undefined") {

    mobilesContainer.innerHTML = mobilesDatabase.map(phone => `

        <div class="mobile-card">

            <img
                src="${phone.image}"
                alt="${phone.brand}">

            <h3>${phone.brand}</h3>

            <p>${phone.model}</p>

            <span>${phone.category}</span>

            <a href="${phone.page}" class="btn">

                View Solution

            </a>

        </div>

    `).join("");

}

console.log("Mobiles Rendered Successfully");
