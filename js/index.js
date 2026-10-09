const swiperElement = document.querySelector('.swiper');

if (swiperElement) {
  const swiper = new Swiper(swiperElement, {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // عندما يكون عرض الشاشة 0 بكسل إلى 600 بكسل
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // عندما يكون عرض الشاشة أكبر من 600 بكسل وأقل من 992 بكسل
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // للشاشات الأكبر
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}

      document.getElementById("year").innerHTML = new Date().getFullYear()