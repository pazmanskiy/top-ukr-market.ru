 $(document).ready(function(){
  var w = window.innerWidth;
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    centerMode: true,
    fade: true
  });
});