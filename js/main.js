
const menuLinks = document.querySelectorAll("nav ul li a");


menuLinks.forEach(link => {
  
  link.addEventListener("mouseover", () => {
    link.style.color = "#f18886"; 
    link.style.transition = "color 0.3s ease";
  });

  
  link.addEventListener("mouseout", () => {
    link.style.color = ""; 
  });
});
