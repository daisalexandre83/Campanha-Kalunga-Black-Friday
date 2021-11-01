$(document).ready(function () {
  $('.banner-rotativo').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    accessibility: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



