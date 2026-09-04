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