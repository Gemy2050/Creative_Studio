let header = document.querySelector(".header");
let bars = document.querySelector(".header .bars");
let ul = document.querySelector(".header ul");
let sections = document.querySelectorAll("body > div");
let links = document.querySelectorAll(".header ul a");

bars.onclick = function() {
  ul.classList.toggle("open");
}

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    ul.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  })
});

window.onscroll = function() {
  if(window.scrollY >= 30) 
    header.classList.add("active");
  else
  header.classList.remove("active");

  scrolling();
}


function scrolling() {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); 
    }
  });

  if(current) {
    links.forEach((li) => {
      li.classList.remove("active");
      if (li.dataset.target == current) {
        li.classList.add("active");
      }
    });
  }
}