
let item = document.querySelector('.icon-hamburger');


item.addEventListener("click", function() {
  document.body.classList.toggle('header-menu-open');
});

let dropdownLinks = document.querySelectorAll('.header-menu a');

dropdownLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    document.body.classList.remove('header-menu-open'); 
  });
});