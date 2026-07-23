/*
==========================================================
 TechFix Software EXP v11
 File      : assets/js/main.js
 Founder   : MIAN AHMAD
 Version   : 11.0
==========================================================
*/

"use strict";

/*==========================================================
  APPLICATION
==========================================================*/

const TechFix = {

    version: "11.0",

    founder: "MIAN AHMAD",

    initialized: false

};

/*==========================================================
  GLOBAL SELECTORS
==========================================================*/

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

/*==========================================================
  DOM CACHE
==========================================================*/

const DOM = {

    body: document.body,

    html: document.documentElement,

    header: $("#header"),

    menuToggle: $(".menu-toggle"),

    mobileDrawer: $("#mobileDrawer"),

    drawerOverlay: $("#drawerOverlay"),

    drawerClose: $("#drawerClose"),

    backToTop: $("#backToTop"),

    scrollProgress: $("#scroll-progress"),

    navLinks: $$(".nav-menu a"),

    drawerLinks: $$(".drawer-navigation a")

};

/*==========================================================
  UTILITIES
==========================================================*/

const Utils = {

    isMobile() {

        return window.innerWidth <= 1024;

    },

    scrollTop() {

        return window.pageYOffset ||
               document.documentElement.scrollTop;

    },

    addClass(element, className) {

        if (element) {

            element.classList.add(className);

        }

    },

    removeClass(element, className) {

        if (element) {

            element.classList.remove(className);

        }

    },

    toggleClass(element, className) {

        if (element) {

            element.classList.toggle(className);

        }

    }

};

/*==========================================================
  APPLICATION INIT
==========================================================*/

function initializeWebsite() {

    if (TechFix.initialized) return;

    TechFix.initialized = true;

    console.log(
        "%cTechFix Software EXP v11",
        "color:#ff7a00;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cFounder: MIAN AHMAD",
        "color:#ffffff;font-size:13px;"
    );

    initializeHeader();

    initializeBackToTop();

    initializeScrollProgress();

}

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});
/*==========================================================
  STICKY HEADER
==========================================================*/

function initializeHeader() {

    if (!DOM.header) return;

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

}

function updateHeader() {

    if (Utils.scrollTop() > 80) {

        Utils.addClass(DOM.header, "scrolled");

    } else {

        Utils.removeClass(DOM.header, "scrolled");

    }

}

/*==========================================================
  SCROLL PROGRESS BAR
==========================================================*/

function initializeScrollProgress() {

    if (!DOM.scrollProgress) return;

    updateScrollProgress();

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

}

function updateScrollProgress() {

    const scrollTop = Utils.scrollTop();

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        pageHeight > 0
            ? (scrollTop / pageHeight) * 100
            : 0;

    DOM.scrollProgress.style.width = `${progress}%`;

}

/*==========================================================
  BACK TO TOP
==========================================================*/

function initializeBackToTop() {

    if (!DOM.backToTop) return;

    updateBackToTop();

    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );

    DOM.backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

function updateBackToTop() {

    if (Utils.scrollTop() > 500) {

        Utils.addClass(DOM.backToTop, "show");

    } else {

        Utils.removeClass(DOM.backToTop, "show");

    }

}

/*==========================================================
  WINDOW EVENTS
==========================================================*/

window.addEventListener("resize", () => {

    if (!Utils.isMobile()) {

        Utils.removeClass(DOM.mobileDrawer, "active");

        Utils.removeClass(DOM.drawerOverlay, "active");

        Utils.removeClass(DOM.menuToggle, "active");

        DOM.body.style.overflow = "";

    }

});

window.addEventListener("load", () => {

    console.log("TechFix Software EXP v11 Loaded Successfully.");

});
/*==========================================================
  MOBILE DRAWER
==========================================================*/

function initializeMobileDrawer() {

    if (
        !DOM.menuToggle ||
        !DOM.mobileDrawer ||
        !DOM.drawerOverlay
    ) return;

    DOM.menuToggle.addEventListener("click", toggleDrawer);

    if (DOM.drawerClose) {

        DOM.drawerClose.addEventListener(
            "click",
            closeDrawer
        );

    }

    DOM.drawerOverlay.addEventListener(
        "click",
        closeDrawer
    );

    DOM.drawerLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeDrawer
        );

    });

}

function toggleDrawer() {

    Utils.toggleClass(
        DOM.menuToggle,
        "active"
    );

    Utils.toggleClass(
        DOM.mobileDrawer,
        "active"
    );

    Utils.toggleClass(
        DOM.drawerOverlay,
        "active"
    );

    document.body.style.overflow =
        DOM.mobileDrawer.classList.contains("active")
            ? "hidden"
            : "";

}

function closeDrawer() {

    Utils.removeClass(
        DOM.menuToggle,
        "active"
    );

    Utils.removeClass(
        DOM.mobileDrawer,
        "active"
    );

    Utils.removeClass(
        DOM.drawerOverlay,
        "active"
    );

    document.body.style.overflow = "";

}

/*==========================================================
  ACTIVE NAVIGATION
==========================================================*/

function initializeActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    [...DOM.navLinks, ...DOM.drawerLinks]
        .forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        link.classList.remove("active");

        if (
            href === currentPage ||
            (currentPage === "index.html" &&
             (href === "./" || href === "index.html"))
        ) {

            link.classList.add("active");

        }

    });

}

/*==========================================================
  UPDATE INITIALIZER
==========================================================*/

function initializeWebsite() {

    if (TechFix.initialized) return;

    TechFix.initialized = true;

    console.log(
        "%cTechFix Software EXP v11",
        "color:#ff7a00;font-size:18px;font-weight:bold;"
    );

    initializeHeader();

    initializeBackToTop();

    initializeScrollProgress();

    initializeMobileDrawer();

    initializeActiveNavigation();

}
/*==========================================================
  KEYBOARD SHORTCUTS
==========================================================*/

function initializeKeyboardShortcuts() {

    document.addEventListener("keydown", (event) => {

        /* ESC closes mobile drawer */

        if (event.key === "Escape") {

            closeDrawer();

        }

    });

}

/*==========================================================
  SMOOTH SCROLL
==========================================================*/

function initializeSmoothScroll() {

    document.addEventListener("click", (event) => {

        const link = event.target.closest('a[href^="#"]');

        if (!link) return;

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

}

/*==========================================================
  SAFE EVENT BINDER
==========================================================*/

function bindEvent(element, eventName, callback, options = {}) {

    if (!element) return;

    element.addEventListener(

        eventName,

        callback,

        options

    );

}

/*==========================================================
  PERFORMANCE
==========================================================*/

let resizeTimer = null;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        if (!Utils.isMobile()) {

            closeDrawer();

        }

    }, 150);

});

/*==========================================================
  UPDATE INITIALIZER
==========================================================*/

function initializeWebsite() {

    if (TechFix.initialized) return;

    TechFix.initialized = true;

    console.log(

        "%cTechFix Software EXP v11",

        "color:#ff7a00;font-size:18px;font-weight:bold;"

    );

    console.log(

        "%cFounder: MIAN AHMAD",

        "color:#ffffff;"

    );

    initializeHeader();

    initializeBackToTop();

    initializeScrollProgress();

    initializeMobileDrawer();

    initializeActiveNavigation();

    initializeKeyboardShortcuts();

    initializeSmoothScroll();

}
/*==========================================================
  FINAL INITIALIZER
==========================================================*/

/*
 NOTE:
 Remove/comment the older initializeWebsite()
 functions from previous parts and keep ONLY
 this final version.
*/

function initializeWebsite() {

    if (TechFix.initialized) {

        return;

    }

    TechFix.initialized = true;

    console.log(
        "%cTechFix Software EXP v11 v11.0",
        "color:#ff7a00;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cFounder : MIAN AHMAD",
        "color:#ffffff;font-size:13px;"
    );

    /* Core */

    initializeHeader();

    initializeScrollProgress();

    initializeBackToTop();

    /* Navigation */

    initializeMobileDrawer();

    initializeActiveNavigation();

    /* UX */

    initializeKeyboardShortcuts();

    initializeSmoothScroll();

    console.log("Main module initialized.");

}

/*==========================================================
  DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});

/*==========================================================
  WINDOW LOAD
==========================================================*/

window.addEventListener("load", () => {

    console.log("Website Loaded.");

});

/*==========================================================
  EXPORT
==========================================================*/

window.TechFix = TechFix;
window.Utils = Utils;
