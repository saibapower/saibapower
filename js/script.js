emailjs.init("BVz1L4t2UX6qAelHq");
// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

// Navbar
const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

navbar.classList.toggle("scrolled",window.scrollY>60);

revealSections();

});

// Reveal animation
const reveals=document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const trigger=window.innerHeight-120;

if(section.getBoundingClientRect().top<trigger){

section.classList.add("active");

}

});

}

revealSections();

// Animated counters
const counters=document.querySelectorAll(".counter");

let started=false;

function runCounters(){

const stats=document.querySelector(".stats");

if(!stats)return;

const trigger=window.innerHeight-100;

if(stats.getBoundingClientRect().top<trigger && !started){

started=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

}

window.addEventListener("scroll",runCounters);

runCounters();

// Lucide
lucide.createIcons();
const form = document.getElementById("contact-form");
const templateParams = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1234567890",
  subject: "Project Inquiry",
  message: "Hello, I would like to talk about a new project."
};
form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_dn6pxuq",
        "template_n4vpcsv",
        this
    )
    .then(() => {
        alert("Quotation request sent successfully!");
        form.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Error: " + JSON.stringify(error));
    });
});
const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {

    const images = JSON.parse(
        slider.dataset.images
    );

    let current = 0;

    setInterval(() => {

        current++;

        if(current >= images.length){
            current = 0;
        }

        slider.src = images[current];

    }, 3000);

});
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

let current="";

sections.forEach(section=>{

const top = section.offsetTop-120;

if(scrollY>=top){
current=section.id;
}

});

links.forEach(link=>{

link.classList.remove("current");

if(link.getAttribute("href")==="#"+current){

link.classList.add("current");

}

});

});
const services = {
    electrical: [
        "images/electrical/1.webp",
        "images/electrical/2.webp",
        "images/electrical/3.webp",
        "images/electrical/4.webp",
        "images/electrical/5.webp"
    ],

    cabling: [
        "images/cabling/1.webp",
        "images/cabling/2.webp",
        "images/cabling/3.webp",
        "images/cabling/4.webp",
        "images/cabling/5.webp"
    ],

    security: [
        "images/security/1.webp",
        "images/security/2.webp",
        "images/security/3.webp",
        "images/security/4.webp",
        "images/security/5.webp"
    ],

    fence: [
        "images/fence/1.webp",
        "images/fence/2.webp",
        "images/fence/3.webp",
        "images/fence/4.webp",
        "images/fence/5.webp"
    ],

    wireless: [
        "images/wireless/1.webp",
        "images/wireless/2.webp",
        "images/wireless/3.webp",
        "images/wireless/4.webp",
        "images/wireless/5.webp"
    ]
};

let currentService = "electrical";
let currentImage = 0;

const galleryImage = document.getElementById("galleryImage");
const dotsContainer = document.getElementById("galleryDots");

function loadGallery(){

    galleryImage.src =
        services[currentService][currentImage];

    dotsContainer.innerHTML = "";

    services[currentService].forEach((_, index)=>{

        const dot = document.createElement("div");

        dot.classList.add("dot");

        if(index === currentImage){
            dot.classList.add("active");
        }

        dot.addEventListener("click", ()=>{

            currentImage = index;

            loadGallery();

        });

        dotsContainer.appendChild(dot);

    });

}

document.querySelectorAll(".tab").forEach(tab=>{

    tab.addEventListener("click", ()=>{

        document
            .querySelectorAll(".tab")
            .forEach(t=>t.classList.remove("active"));

        tab.classList.add("active");

        currentService =
            tab.dataset.service;

        currentImage = 0;

        loadGallery();

    });

});

document
.getElementById("nextBtn")
.addEventListener("click", ()=>{

    currentImage++;

    if(
        currentImage >=
        services[currentService].length
    ){
        currentImage = 0;
    }

    loadGallery();

});

document
.getElementById("prevBtn")
.addEventListener("click", ()=>{

    currentImage--;

    if(currentImage < 0){

        currentImage =
        services[currentService].length - 1;

    }

    loadGallery();

});

loadGallery();