/*
==========================================================
 TechFix Software EXP v11
 File : assets/js/navigation.js
 Founder : MIAN AHMAD
==========================================================
*/

"use strict";

/*==========================================================
  NAVIGATION MODULE
==========================================================*/

const Navigation = {

    initialized: false,

    navLinks: [],

    drawerLinks: [],

    currentPage: ""

};

/*==========================================================
  INITIALIZE
==========================================================*/

function initializeNavigation() {

    if (Navigation.initialized) return;

    Navigation.initialized = true;

    Navigation.navLinks = [
        ...document.querySelectorAll(".nav-menu a")
    ];

    Navigation.drawerLinks = [
        ...document.querySelectorAll(".drawer-navigation a")
    ];

    Navigation.currentPage =
        window.location.pathname
        .split("/")
        .pop() || "index.html";

    highlightCurrentPage();

    initializeHoverEffects();

}

/*==========================================================
  ACTIVE PAGE
==========================================================*/

function highlightCurrentPage() {

    const allLinks = [

        ...Navigation.navLinks,

        ...Navigation.drawerLinks

    ];

    allLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        link.classList.remove("active");

        if (

            href === Navigation.currentPage ||

            (Navigation.currentPage === "index.html" &&
             (href === "./" || href === "index.html"))

        ) {

            link.classList.add("active");

        }

    });

}

/*==========================================================
  HOVER EFFECT
==========================================================*/

function initializeHoverEffects() {

    Navigation.navLinks.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.style.transition = ".25s ease";

        });

    });

}

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    initializeNavigation

);
/*==========================================================
  MOBILE NAVIGATION
==========================================================*/

function initializeMobileNavigation() {

    const drawerLinks = Navigation.drawerLinks;

    if (!drawerLinks.length) return;

    drawerLinks.forEach(link => {

        link.addEventListener("click", () => {

            const drawer = document.getElementById("mobileDrawer");
            const overlay = document.getElementById("drawerOverlay");
            const toggle = document.querySelector(".menu-toggle");

            drawer?.classList.remove("active");
            overlay?.classList.remove("active");
            toggle?.classList.remove("active");

            document.body.style.overflow = "";

        });

    });

}

/*==========================================================
  SCROLL ACTIVE LINKS
==========================================================*/

function initializeScrollSpy() {

    const sections = document.querySelectorAll("section[id]");

    if (!sections.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;
            const height = section.offsetHeight;

            if (

                window.scrollY >= top &&
                window.scrollY < top + height

            ) {

                current = section.getAttribute("id");

            }

        });

        Navigation.navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (!href || !href.startsWith("#")) return;

            link.classList.toggle(

                "active",

                href === `#${current}`

            );

        });

    }, { passive: true });

}

/*==========================================================
  UPDATE INITIALIZER
==========================================================*/

function initializeNavigation() {

    if (Navigation.initialized) return;

    Navigation.initialized = true;

    Navigation.navLinks = [
        ...document.querySelectorAll(".nav-menu a")
    ];

    Navigation.drawerLinks = [
        ...document.querySelectorAll(".drawer-navigation a")
    ];

    Navigation.currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    highlightCurrentPage();

    initializeHoverEffects();

    initializeMobileNavigation();

    initializeScrollSpy();

}
/*==========================================================
  KEYBOARD ACCESSIBILITY
==========================================================*/

function initializeKeyboardNavigation() {

    document.addEventListener("keydown", (event) => {

        /* ESC closes drawer */

        if (event.key === "Escape") {

            closeMobileDrawer();

        }

    });

}

function closeMobileDrawer() {

    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("drawerOverlay");
    const toggle = document.querySelector(".menu-toggle");

    drawer?.classList.remove("active");
    overlay?.classList.remove("active");
    toggle?.classList.remove("active");

    document.body.style.overflow = "";

}

/*==========================================================
  RESIZE HANDLER
==========================================================*/

function initializeResizeHandler() {

    window.addEventListener("resize", () => {

        if (window.innerWidth > 1024) {

            closeMobileDrawer();

        }

    });

}

/*==========================================================
  NAVIGATION HELPERS
==========================================================*/

function setActiveLink(href) {

    [...Navigation.navLinks, ...Navigation.drawerLinks]
    .forEach(link => {

        link.classList.toggle(

            "active",

            link.getAttribute("href") === href

        );

    });

}

/*==========================================================
  UPDATE INITIALIZER
==========================================================*/

function initializeNavigation() {

    if (Navigation.initialized) return;

    Navigation.initialized = true;

    Navigation.navLinks = [
        ...document.querySelectorAll(".nav-menu a")
    ];

    Navigation.drawerLinks = [
        ...document.querySelectorAll(".drawer-navigation a")
    ];

    Navigation.currentPage =
        window.location.pathname.split("/").pop() ||
        "index.html";

    highlightCurrentPage();

    initializeHoverEffects();

    initializeMobileNavigation();

    initializeScrollSpy();

    initializeKeyboardNavigation();

    initializeResizeHandler();

}
/*==========================================================
  FINAL INITIALIZER
==========================================================*/

/*
  IMPORTANT:
  Remove/comment the older initializeNavigation()
  functions from Parts 1, 2 and 3.

  Keep ONLY this final version.
*/

function initializeNavigation() {

    if (Navigation.initialized) {

        return;

    }

    Navigation.initialized = true;

    Navigation.navLinks = [
        ...document.querySelectorAll(".nav-menu a")
    ];

    Navigation.drawerLinks = [
        ...document.querySelectorAll(".drawer-navigation a")
    ];

    Navigation.currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    /* Navigation */

    highlightCurrentPage();

    initializeHoverEffects();

    initializeMobileNavigation();

    initializeScrollSpy();

    initializeKeyboardNavigation();

    initializeResizeHandler();

    console.log("Navigation Module Loaded");

}

/*==========================================================
  AUTO INITIALIZE
==========================================================*/

document.addEventListener(

    "DOMContentLoaded",

    initializeNavigation

);

/*==========================================================
  PUBLIC API
==========================================================*/

window.Navigation = {

    initialize: initializeNavigation,

    setActive: setActiveLink,

    closeDrawer: closeMobileDrawer

};
