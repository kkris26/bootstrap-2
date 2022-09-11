$(() => {
  $(".new-card").slice(0, 4).show();
  $(".load-more").click(function (e) {
    e.preventDefault();
    $(".new-card:hidden").slice(0, 4).slideDown();
  });
});
$(document).ready(function(){
  $('.nav-link').click(function(){
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
  })
})

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
});

var swiper = new Swiper(".mySwiperBlog", {
  spaceBetween: 40,
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

AOS.init();
