const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const navbar = document.querySelector("#navbar");

const toggleNavbar = (e) => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener(
  "click",
  function(e){
    toggleNavbar(e)
  }
  //  (e) => toggleNavbar(e)
);
navbar.addEventListener(
  "click",
  function(e){
  //  console.log(e);
  }
)
