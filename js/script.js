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
