document.addEventListener("DOMContentLoaded", function () {
 
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
  
    navLinks.forEach(function (navLink) {
      navLink.addEventListener("click", function () {
        
        navLinks.forEach(function (link) {
          link.classList.remove("active");
        });
  
      
        this.classList.add("active");
      });
    });
  
    
    document.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
  