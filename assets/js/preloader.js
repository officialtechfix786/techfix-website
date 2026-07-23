/*
==========================================================
 TechFix Software EXP v11
 File      : assets/js/preloader.js
 Founder   : MIAN AHMAD
 Version   : 11.0
==========================================================
*/

"use strict";

/*==========================================================
  PRELOADER MODULE
==========================================================*/

const Preloader = {

    initialized: false,

    element: document.getElementById("preloader"),

    minimumTime: 600

};

/*==========================================================
  HIDE PRELOADER
==========================================================*/

function hidePreloader() {

    if (!Preloader.element) return;

    Preloader.element.style.opacity = "0";

    Preloader.element.style.visibility = "hidden";

    Preloader.element.style.pointerEvents = "none";

    setTimeout(() => {

        if (Preloader.element) {

            Preloader.element.remove();

        }

    }, 600);

}

/*==========================================================
  INITIALIZE
==========================================================*/

function initializePreloader() {

    if (Preloader.initialized) return;

    Preloader.initialized = true;

    window.setTimeout(() => {

        hidePreloader();

    }, Preloader.minimumTime);

}

/*==========================================================
  WINDOW LOAD
==========================================================*/

window.addEventListener("load", () => {

    initializePreloader();

});

/*==========================================================
  FAIL-SAFE
  Prevent infinite loading screen
==========================================================*/

window.setTimeout(() => {

    hidePreloader();

}, 5000);

/*==========================================================
  EXPORT
==========================================================*/

window.Preloader = {

    init: initializePreloader,

    hide: hidePreloader

};
