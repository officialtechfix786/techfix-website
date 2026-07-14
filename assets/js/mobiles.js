"use strict";

/*=========================================
        TECHFIX MOBILES v1
=========================================*/

const mobileGrid = document.getElementById("mobileGrid");
const brandList = document.getElementById("brandList");
const brandSearch = document.getElementById("brandSearch");

const params = new URLSearchParams(window.location.search);

const selectedBrand = params.get("brand");
const selectedModel = params.get("model");

/* BRAND LIST */

if (brandList) {

    Object.keys(mobileDatabase).forEach(brand => {

        const a = document.createElement("a");

        a.href = `mobiles.html?brand=${brand}`;

        a.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);

        if (brand === selectedBrand) {
            a.classList.add("active");
        }

        brandList.appendChild(a);

    });

}

/* PAGE */

if (mobileGrid) {

    mobileGrid.innerHTML = "";

    /* BRANDS */

    if (!selectedBrand && !selectedModel) {

        Object.keys(mobileDatabase).forEach(brand => {

            const card = document.createElement("a");

            card.className = "mobile-card";

            card.href = `mobiles.html?brand=${brand}`;

            card.innerHTML = `
                <h3>${brand.toUpperCase()}</h3>
                <p>${mobileDatabase[brand].length} Models</p>
            `;

            mobileGrid.appendChild(card);

        });

    }

    /* MODELS */

    else if (selectedBrand && !selectedModel) {

        mobileDatabase[selectedBrand].forEach(model => {

            const card = document.createElement("a");

            card.className = "mobile-card";

            card.href = `mobiles.html?brand=${selectedBrand}&model=${encodeURIComponent(model)}`;

            card.innerHTML = `
                <h3>${model}</h3>
                <p>View Solutions</p>
            `;

            mobileGrid.appendChild(card);

        });

    }

    /* SOLUTIONS */

    else if (selectedBrand && selectedModel) {

        const title = document.createElement("div");

        title.className = "glass-card";

        title.innerHTML = `
            <h2>${selectedModel}</h2>
            <p>Available Services</p>
        `;

        mobileGrid.appendChild(title);

        const list = solutionsDatabase[selectedModel] || [];

        list.forEach(item => {

            const card = document.createElement("div");

            card.className = "solution-card";

            card.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <span>${item}</span>
            `;

            mobileGrid.appendChild(card);

        });

    }

}
