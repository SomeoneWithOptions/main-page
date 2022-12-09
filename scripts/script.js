const contactLink = document.querySelector(".page-1__header__menu");
const contactMenu = document.querySelector(".contact-menu");

function toggleMenu()
{
  contactMenu.classList.toggle("contact-menu--active");
  contactMenu.classList.toggle("contact-menu--inactive");
}

contactLink.addEventListener("click", function (e)
{
  (contactMenu.classList.contains("contact-menu--inactive")) && toggleMenu();
  contactMenu.classList.add("contact-menu--active");
  e.stopPropagation();
});

window.addEventListener("click", function (e)
{
  (contactMenu.classList.contains("contact-menu--active")) && toggleMenu();

});
