const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.menu-naruto-liens');

window.addEventListener('scroll', () => {
  nav.classList.toggle('menu-naruto--defile', window.scrollY > 20);
});
burger.addEventListener('click', () => navLinks.classList.toggle('menu-naruto-liens-ouvert'));
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('menu-naruto-liens-ouvert'))
);




