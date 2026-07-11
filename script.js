/* ==========================================
   STICKY NAVBAR
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   REVEAL ANIMATION
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


/* ==========================================
   SMOOTH ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   COUNT UP ANIMATION
========================================== */

const counters = document.querySelectorAll(".stat h3");

let counted = false;

window.addEventListener("scroll", () => {

    const stats = document.getElementById("stats");

    if (!stats) return;

    if (window.scrollY > stats.offsetTop - 500 && !counted) {

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

        counted = true;

    }

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "scrollTop";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   HERO FADE EFFECT
========================================== */

const hero = document.getElementById("hero");

window.addEventListener("scroll",()=>{

    const value = window.scrollY;

    hero.style.backgroundPositionY = value * .4 + "px";

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left+"px";
circle.style.top=e.clientY-rect.top+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/* ==========================================
   GALLERY HOVER EFFECT
========================================== */

const galleryItems=document.querySelectorAll(".gallery-item");

galleryItems.forEach(item=>{

item.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

item.style.transform=`perspective(800px) rotateX(${(y-150)/40}deg) rotateY(${-(x-150)/40}deg)`;

});

item.addEventListener("mouseleave",()=>{

item.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg)";

});

});


/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%cConny & Isla","font-size:28px;color:#D4AF37;font-weight:bold;");

console.log("Website Developed Successfully 🚀");



/* ===========================
   GALLERY LIGHTBOX
=========================== */

const gallery = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close-lightbox");

gallery.forEach(item=>{

    item.addEventListener("click",(e)=>{

        e.preventDefault();

        lightbox.classList.add("active");

        lightboxImg.src=item.href;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

const coffeeBtn = document.querySelector(".coffee-btn");
const coffeeCard = document.querySelector(".coffee-card");

if (coffeeBtn) {

    coffeeBtn.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();

            coffeeCard.classList.toggle("show");

        }

    });

}

const card = document.querySelector(".coffee-id");

if(card){

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x - rect.width/2)/18;
const rotateX = -(y - rect.height/2)/18;

card.style.transform =
`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

}

/* ===========================
   PREMIUM SPARKLES
=========================== */

const sparkleContainer = document.getElementById("sparkle-container");

const colors = [

"#2563EB",   // Blue
"#EF4444",   // Red
"#FFFFFF"    // White

];

document.addEventListener("mousemove",(e)=>{

    // daghan particles kada lihok
    for(let i=0;i<10;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        const size=Math.random()*4+2;

        sparkle.style.width=size+"px";
        sparkle.style.height=size+"px";

        const color=colors[Math.floor(Math.random()*colors.length)];

        sparkle.style.background=color;

        sparkle.style.boxShadow=`0 0 8px ${color}`;

        sparkle.style.left=e.clientX+(Math.random()*18-9)+"px";
        sparkle.style.top=e.clientY+(Math.random()*18-9)+"px";

        sparkle.style.setProperty("--x",(Math.random()*60-30)+"px");
        sparkle.style.setProperty("--y",(Math.random()*60-30)+"px");

        sparkleContainer.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },800);

    }

});