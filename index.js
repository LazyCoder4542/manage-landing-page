const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 4000,
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }
});
const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', ()=> {
    if (hamburger.classList.contains('close')) {
        hamburger.classList.replace('close', 'open')
        hamburger.parentElement.querySelector('ul').classList.replace('max-md:hidden', 'max-md:flex')
    }
    else  {
        hamburger.classList.replace('open', 'close')
        hamburger.parentElement.querySelector('ul').classList.replace('max-md:flex', 'max-md:hidden')
    }
})