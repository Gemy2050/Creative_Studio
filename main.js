let header = document.querySelector(".header");
let bars = document.querySelector(".header .bars");
let ul = document.querySelector(".header ul");

bars.onclick = function() {
  ul.classList.toggle("open");
}

window.onscroll = function() {
  if(window.scrollY >= 30) 
    header.classList.add("active");
  else
  header.classList.remove("active");
}