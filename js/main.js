// SideNav and Carousel Initialization

$(document).ready(function () {
  $('.button-collapse').sideNav();
  $('.carousel.carousel-slider').carousel({ fullWidth: true });
  setInterval(function () {
    $('.carousel').carousel('next');
  }, 2000);
});
