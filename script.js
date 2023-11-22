const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=> {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

var typed = new Typed(".heading", {
  strings: ["Data Scientist.","Digital Marketer.","AI/ML Engineer.","Programmer."],
  typeSpeed:100,
  backSpeed:100,
  loop:true
})