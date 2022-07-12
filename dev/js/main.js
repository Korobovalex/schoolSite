//    Navbar style on scrolling

window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle('scrolled', scrollY > 0)
});