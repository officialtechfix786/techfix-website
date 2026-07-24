/*==================================================
TECHFIX SOFTWARE EXP
SEARCH.JS
==================================================*/

"use strict";

/*====================================
SEARCH DATABASE
====================================*/

const searchDatabase = [

    {
        title: "Samsung",
        url: "mobiles.html",
        keywords: "samsung galaxy frp firmware flash"
    },

    {
        title: "Xiaomi",
        url: "mobiles.html",
        keywords: "xiaomi redmi poco mi"
    },

    {
        title: "Vivo",
        url: "mobiles.html",
        keywords: "vivo y series v series"
    },

    {
        title: "OPPO",
        url: "mobiles.html",
        keywords: "oppo reno find"
    },

    {
        title: "Realme",
        url: "mobiles.html",
        keywords: "realme narzo gt"
    },

    {
        title: "Apple",
        url: "apple.html",
        keywords: "iphone ipad icloud ios"
    },

    {
        title: "Android",
        url: "android.html",
        keywords: "android adb fastboot recovery"
    },

    {
        title: "Cyber Security",
        url: "cyber-security.html",
        keywords: "kali linux nmap metasploit"
    },

    {
        title: "Downloads",
        url: "downloads.html",
        keywords: "firmware flash tools drivers"
    },

    {
        title: "Contact",
        url: "contact.html",
        keywords: "support help contact"
    }

];

/*====================================
ELEMENTS
====================================*/

const searchBox = document.getElementById("searchInput");

const searchResults = document.getElementById("searchResults");

/*====================================
LIVE SEARCH
====================================*/

if (searchBox && searchResults) {

    searchBox.addEventListener("input", function () {

        const value = this.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (value === "") return;

        const results = searchDatabase.filter(item =>

            item.title.toLowerCase().includes(value) ||

            item.keywords.toLowerCase().includes(value)

        );

        if (results.length === 0) {

            searchResults.innerHTML = `

                <div class="search-empty">

                    No Results Found

                </div>

            `;

            return;

        }

        results.forEach(item => {

            searchResults.innerHTML += `

                <a class="search-result-item"
                   href="${item.url}">

                    ${item.title}

                </a>

            `;

        });

    });

}
/*==================================================
TECHFIX SOFTWARE EXP
SEARCH.JS
==================================================*/

"use strict";

/*====================================
SEARCH DATABASE
====================================*/

const searchDatabase = [

    {
        title: "Samsung",
        url: "mobiles.html",
        keywords: "samsung galaxy frp firmware flash"
    },

    {
        title: "Xiaomi",
        url: "mobiles.html",
        keywords: "xiaomi redmi poco mi"
    },

    {
        title: "Vivo",
        url: "mobiles.html",
        keywords: "vivo y series v series"
    },

    {
        title: "OPPO",
        url: "mobiles.html",
        keywords: "oppo reno find"
    },

    {
        title: "Realme",
        url: "mobiles.html",
        keywords: "realme narzo gt"
    },

    {
        title: "Apple",
        url: "apple.html",
        keywords: "iphone ipad icloud ios"
    },

    {
        title: "Android",
        url: "android.html",
        keywords: "android adb fastboot recovery"
    },

    {
        title: "Cyber Security",
        url: "cyber-security.html",
        keywords: "kali linux nmap metasploit"
    },

    {
        title: "Downloads",
        url: "downloads.html",
        keywords: "firmware flash tools drivers"
    },

    {
        title: "Contact",
        url: "contact.html",
        keywords: "support help contact"
    }

];

/*====================================
ELEMENTS
====================================*/

const searchBox = document.getElementById("searchInput");

const searchResults = document.getElementById("searchResults");

/*====================================
LIVE SEARCH
====================================*/

if (searchBox && searchResults) {

    searchBox.addEventListener("input", function () {

        const value = this.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (value === "") return;

        const results = searchDatabase.filter(item =>

            item.title.toLowerCase().includes(value) ||

            item.keywords.toLowerCase().includes(value)

        );

        if (results.length === 0) {

            searchResults.innerHTML = `

                <div class="search-empty">

                    No Results Found

                </div>

            `;

            return;

        }

        results.forEach(item => {

            searchResults.innerHTML += `

                <a class="search-result-item"
                   href="${item.url}">

                    ${item.title}

                </a>

            `;

        });

    });

}
/*====================================
ENTER KEY SEARCH
====================================*/

if (searchBox) {

    searchBox.addEventListener("keydown", function (e) {

        if (e.key !== "Enter") return;

        const value = this.value.trim().toLowerCase();

        if (!value) return;

        const result = searchDatabase.find(item =>

            item.title.toLowerCase().includes(value) ||

            item.keywords.toLowerCase().includes(value)

        );

        if (result) {

            window.location.href = result.url;

        }

    });

}

/*====================================
SEARCH RESULT CLICK
====================================*/

if (searchResults) {

    searchResults.addEventListener("click", function (e) {

        const item = e.target.closest(".search-result-item");

        if (!item) return;

        searchResults.innerHTML = "";

        if (searchBox) {

            searchBox.value = "";

        }

    });

}

/*====================================
HIGHLIGHT MATCH
====================================*/

function highlightText(text, keyword) {

    if (!keyword) return text;

    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`(${escaped})`, "ig");

    return text.replace(regex, "<mark>$1</mark>");

}

/*====================================
RENDER RESULTS
====================================*/

function renderSearchResults(results, keyword) {

    searchResults.innerHTML = "";

    if (!results.length) {

        searchResults.innerHTML = `

            <div class="search-empty">

                No Results Found

            </div>

        `;

        return;

    }

    results.forEach(item => {

        searchResults.innerHTML += `

            <a href="${item.url}"
               class="search-result-item">

                <strong>

                    ${highlightText(item.title, keyword)}

                </strong>

                <small>

                    ${item.url}

                </small>

            </a>

        `;

    });

}

/*====================================
OVERRIDE INPUT EVENT
====================================*/

if (searchBox && searchResults) {

    searchBox.addEventListener("input", function () {

        const keyword = this.value.trim().toLowerCase();

        if (!keyword) {

            searchResults.innerHTML = "";

            return;

        }

        const results = searchDatabase.filter(item =>

            item.title.toLowerCase().includes(keyword) ||

            item.keywords.toLowerCase().includes(keyword)

        );

        renderSearchResults(results, keyword);

    });

}

console.log("Search System Ready");
/*====================================
ACTIVE NAVIGATION
====================================*/

const navLinks = document.querySelectorAll(".nav-menu a");

const currentPage = window.location.pathname
    .split("/")
    .pop() || "index.html";

navLinks.forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});

/*====================================
CLOSE MOBILE MENU AFTER CLICK
====================================*/

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        closeMenu();

    });

});

/*====================================
SMOOTH PAGE TRANSITION
====================================*/

document.querySelectorAll("a").forEach(link=>{

    const href = link.getAttribute("href");

    if(!href) return;

    if(href.startsWith("#")) return;

    if(href.startsWith("http")) return;

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.body.style.opacity=".2";

        document.body.style.transition=".25s";

        setTimeout(()=>{

            window.location=this.href;

        },250);

    });

});

/*====================================
RESTORE PAGE
====================================*/

window.addEventListener("pageshow",()=>{

    document.body.style.opacity="1";

});

/*====================================
HEADER SHADOW
====================================*/

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

/*====================================
PREVENT FORM SUBMIT
====================================*/

document.querySelectorAll("form").forEach(form=>{

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

    });

});

console.log("Main.js Fully Loaded");
