//    Navbar style on scrolling

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('scrolled', scrollY > 0)
});


//    Show/hide FAQ answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //   toggle icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
});