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


// $(document).ready(function(){
//   $('.carousel').carousel({
//       pause: "false"
//   });
//   $('.carousel').css({'margin': 0, 'width': $(window).outerWidth(), 'heigth': $(window).outerHeigth() });
//   $('.carousel .item').css({'position':'fixed','width': '100%','heigth':'100%'});
//   $('.carousel-iner div.itemimg').each(function () {
//      varimgSrc = $(this).attr('src'); 
//      $(this).parent().css({'background': 'url('+ imgSrc +') center center no-repeat', 
//      '-webkit-background-size-':'100%', '-moz-background-size': '100%', '-o-background-size':'100%',
//      '-background-size':'100%','-webkit-background-size-':'cover','-moz-background-size':'cover',
//      '-o-background-size':'cover','-background-size':'100%',})
//       $(this).remove();
//   });
//   $(window).on('resize',function () {
//       $(carousel).css({'width': $(window).outerWidth(),'heigth': $(window).outerHeigth() });
//   });
// }); 


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  /* pagination: {
    el: '.swiper-pagination',
  }, */

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



