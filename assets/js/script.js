/*═══════════════════════════════════════════════════════
                TECHFIX SOFTWARE EXP v8
             Premium JavaScript Framework
                Founder : MIAN AHMAD
═══════════════════════════════════════════════════════*/

"use strict";

/*═══════════════════════════════════════════════════════
                    SELECTORS
═══════════════════════════════════════════════════════*/

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const header = $(".header");
const menu = $(".nav-menu");
const menuBtn = $(".menu-toggle");
const backTop = $("#backToTop");
const preloader = $("#preloader");

/*═══════════════════════════════════════════════════════
                RGB THEME ENGINE
═══════════════════════════════════════════════════════*/

const themes = [

{primary:"#ff7a00",secondary:"#ffb347"}, // Orange

{primary:"#00c8ff",secondary:"#5de3ff"}, // Cyan

{primary:"#8b5cf6",secondary:"#c4a5ff"}, // Purple

{primary:"#00d084",secondary:"#59f2bf"}, // Green

{primary:"#ff3b30",secondary:"#ff8a80"}, // Red

{primary:"#c0c0c0",secondary:"#ffffff"}, // Silver

{primary:"#ffd700",secondary:"#fff3a0"}  // Gold

];

let currentTheme = 0;

function applyTheme(){

document.documentElement.style.setProperty(
"--primary",
themes[currentTheme].primary
);

document.documentElement.style.setProperty(
"--secondary",
themes[currentTheme].secondary
);

currentTheme++;

if(currentTheme>=themes.length){

currentTheme=0;

}

}

applyTheme();

setInterval(applyTheme,10000);

/*═══════════════════════════════════════════════════════
                    PRELOADER
═══════════════════════════════════════════════════════*/

window.addEventListener("load",()=>{

if(!preloader) return;

setTimeout(()=>{

preloader.style.opacity="0";
preloader.style.visibility="hidden";

setTimeout(()=>{

preloader.remove();

},500);

},700);

});

/*═══════════════════════════════════════════════════════
                    STICKY HEADER
═══════════════════════════════════════════════════════*/

function updateHeader(){

if(!header) return;

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

}

updateHeader();

window.addEventListener("scroll",updateHeader);
/*═══════════════════════════════════════════════════════
                MOBILE MENU
═══════════════════════════════════════════════════════*/

if(menuBtn && menu){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");

    });

    $$(".nav-menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");
            menuBtn.classList.remove("active");

        });

    });

}

/*═══════════════════════════════════════════════════════
                BACK TO TOP
═══════════════════════════════════════════════════════*/

if(backTop){

    function toggleBackTop(){

        if(window.scrollY>500){

            backTop.classList.add("show");

        }else{

            backTop.classList.remove("show");

        }

    }

    toggleBackTop();

    window.addEventListener("scroll",toggleBackTop);

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*═══════════════════════════════════════════════════════
                SMOOTH SCROLL
═══════════════════════════════════════════════════════*/

$$('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        const id=link.getAttribute("href");

        if(id==="#") return;

        const target=$(id);

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});

/*═══════════════════════════════════════════════════════
                ACTIVE MENU
═══════════════════════════════════════════════════════*/

const sections=$$("section[id]");
const navLinks=$$(".nav-menu a");

function updateActiveMenu(){

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll",updateActiveMenu);
/*═══════════════════════════════════════════════════════
                SEARCH MODAL
═══════════════════════════════════════════════════════*/

const searchModal=$("#searchModal");
const searchBtn=$("#searchBtn");
const closeSearch=$("#closeSearch");
const searchInput=$("#liveSearch");
const searchResults=$("#searchResults");

if(searchBtn && searchModal){

    searchBtn.addEventListener("click",()=>{

        searchModal.classList.add("active");

        if(searchInput){

            setTimeout(()=>{

                searchInput.focus();

            },150);

        }

    });

}

if(closeSearch){

    closeSearch.addEventListener("click",closeSearchModal);

}

function closeSearchModal(){

    if(!searchModal) return;

    searchModal.classList.remove("active");

    if(searchInput) searchInput.value="";

    if(searchResults) searchResults.innerHTML="";

}

window.addEventListener("keydown",e=>{

    if(e.key==="Escape"){

        closeSearchModal();

    }

});

if(searchModal){

    searchModal.addEventListener("click",e=>{

        if(e.target===searchModal){

            closeSearchModal();

        }

    });

}

/*═══════════════════════════════════════════════════════
                LIVE SEARCH DATABASE
═══════════════════════════════════════════════════════*/

function getAllModels(){

    const models=[];

    if(typeof mobileDatabase==="undefined"){

        return models;

    }

    Object.keys(mobileDatabase).forEach(brand=>{

        mobileDatabase[brand].forEach(model=>{

            models.push({

                brand:brand,

                model:model

            });

        });

    });

    return models;

}

const allModels=getAllModels();

if(searchInput && searchResults){

    searchInput.addEventListener("input",function(){

        const keyword=this.value.trim().toLowerCase();

        searchResults.innerHTML="";

        if(keyword==="") return;

        const found=allModels.filter(item=>

            item.brand.toLowerCase().includes(keyword) ||

            item.model.toLowerCase().includes(keyword)

        );

        if(found.length===0){

            searchResults.innerHTML=`
                <div class="no-result">
                    No Device Found
                </div>
            `;

            return;

        }

        found.slice(0,50).forEach(item=>{

            const card=document.createElement("div");

            card.className="search-item";

            card.innerHTML=`

                <strong>${item.model}</strong>

                <small>${item.brand.toUpperCase()}</small>

            `;

            card.addEventListener("click",()=>{

                window.location.href=
                `mobiles.html?brand=${item.brand}&model=${encodeURIComponent(item.model)}`;

            });

            searchResults.appendChild(card);

        });

    });

}
/*═══════════════════════════════════════════════════════
                COUNTER ANIMATION
═══════════════════════════════════════════════════════*/

const counters = $$("[data-counter]");

function startCounters(){

    counters.forEach(counter=>{

        if(counter.dataset.done==="true") return;

        counter.dataset.done="true";

        const target=parseInt(counter.dataset.counter)||0;

        let current=0;

        const step=Math.max(1,Math.ceil(target/100));

        function update(){

            current+=step;

            if(current>=target){

                counter.textContent=target.toLocaleString()+"+";

                return;

            }

            counter.textContent=current.toLocaleString()+"+";

            requestAnimationFrame(update);

        }

        update();

    });

}

const counterSection=$(".counter-section");

if(counterSection){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                startCounters();

                observer.disconnect();

            }

        });

    },{

        threshold:0.3

    });

    observer.observe(counterSection);

}

/*═══════════════════════════════════════════════════════
                REVEAL ANIMATION
═══════════════════════════════════════════════════════*/

const revealItems=$$(`
.brand-card,
.service-card,
.counter-card,
.cta-box,
.footer-grid
`);

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{

    threshold:0.15

});

revealItems.forEach(item=>{

    revealObserver.observe(item);

});

/*═══════════════════════════════════════════════════════
                ROBOT EFFECT
═══════════════════════════════════════════════════════*/

const robot=$(".robot-image");

if(robot){

    window.addEventListener("mousemove",e=>{

        const x=(window.innerWidth/2-e.clientX)/40;

        const y=(window.innerHeight/2-e.clientY)/40;

        robot.style.transform=
        `translate(${-x}px,${-y}px)`;

    });

}

/*═══════════════════════════════════════════════════════
                LAZY IMAGES
═══════════════════════════════════════════════════════*/

$$("img").forEach(img=>{

    img.loading="lazy";

    img.draggable=false;

});

/*═══════════════════════════════════════════════════════
                CURRENT YEAR
═══════════════════════════════════════════════════════*/

const year=$("#year");

if(year){

    year.textContent=new Date().getFullYear();

}
/*═══════════════════════════════════════════════════════
                PAGE PERFORMANCE
═══════════════════════════════════════════════════════*/

window.addEventListener("pageshow",()=>{

    document.body.classList.add("loaded");

});

/*═══════════════════════════════════════════════════════
                SAFE INITIALIZATION
═══════════════════════════════════════════════════════*/

window.addEventListener("error",(event)=>{

    console.error(
        "TechFix Error:",
        event.message
    );

});

/*═══════════════════════════════════════════════════════
                CONSOLE BRANDING
═══════════════════════════════════════════════════════*/

console.clear();

console.log(
"%cTECHFIX SOFTWARE EXP v8",
"font-size:22px;font-weight:bold;color:#ff7a00;"
);

console.log(
"%cFounder : MIAN AHMAD",
"font-size:15px;color:#00c8ff;"
);

console.log(
"%cWebsite Loaded Successfully ✔",
"font-size:14px;color:#00d084;"
);

/*═══════════════════════════════════════════════════════
                END OF FILE
═══════════════════════════════════════════════════════*/
