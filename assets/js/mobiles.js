"use strict";

/*=========================================
        TECHFIX MOBILES
=========================================*/

const mobileGrid = document.getElementById("mobileGrid");
const brandList = document.getElementById("brandList");
const brandSearch = document.getElementById("brandSearch");

const params = new URLSearchParams(window.location.search);

const selectedBrand = params.get("brand");
const selectedModel = params.get("model");

/* ---------- BRAND LIST ---------- */

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

/* ---------- PAGE ---------- */

if (mobileGrid) {

    mobileGrid.innerHTML = "";

    /* SHOW BRANDS */

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

    /* SHOW MODELS */

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

    /* SHOW SOLUTIONS */

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

            const card = document.createElement("a");

            card.className = "solution-card";

            card.href = `solution.html?brand=${selectedBrand}&model=${encodeURIComponent(selectedModel)}&service=${encodeURIComponent(item)}`;

            card.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                <span>${item}</span>
            `;

            mobileGrid.appendChild(card);

        });

    }

}

/* ---------- SEARCH ---------- */

if (brandSearch) {

    brandSearch.addEventListener("input", function () {

        if (!selectedBrand) return;

        const value = this.value.toLowerCase();

        mobileGrid.innerHTML = "";

        mobileDatabase[selectedBrand]
            .filter(model => model.toLowerCase().includes(value))
            .forEach(model => {

                const card = document.createElement("a");

                card.className = "mobile-card";

                card.href = `mobiles.html?brand=${selectedBrand}&model=${encodeURIComponent(model)}`;

                card.innerHTML = `
                    <h3>${model}</h3>
                    <p>View Solutions</p>
                `;

                mobileGrid.appendChild(card);

            });

    });

}

console.log("Mobiles Page Loaded");
