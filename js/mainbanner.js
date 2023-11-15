
$(document).ready(function () {
  const swiperMain = new Swiper('#mainbanner .swiper', {

    loop: true,

    pagination: {
      el: '#mainbanner .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '#mainbanner .swiper-button-next',
      prevEl: '#mainbanner .swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

})
