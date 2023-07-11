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