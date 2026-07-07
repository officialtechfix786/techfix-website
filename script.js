// ================================
// TECHFIX SOFTWARE EXP
// ================================

// Typing Effect

const text = [
    "Professional Mobile Software Solutions",
    "Apple iCloud Solutions",
    "Android FRP & Flashing",
    "Cyber Security Services",
    "Data Recovery Experts"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 80);

    }

})();


// Navbar Shadow

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        nav.style.boxShadow = "0 0 20px cyan";

    } else {

        nav.style.boxShadow = "none";

    }

});
