$(document).ready(function() {

/* Smooth Scroll */
  $(function() {
    $('a[href*=#]:not([href=#inline]):not([href=#inline2]):not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 850);
          return false;
        }
      }
    });
  });


 /* Left package */
  var rand_num;
  var number_objects; // value in global scope
  var displayObject = $('.left-pack'); // fetch object only once, better performace
   function loadRandom() {
    number_objects = 36 + Math.floor(Math.random() * 1);
   }
  function decreaseRandom() {
    rand_num = Math.floor(Math.random() * 2) + 1;
    number_objects = number_objects - rand_num;
  }
  function showRandom() {
    // show / update the value
    displayObject.text(number_objects);

  }
  loadRandom(); // load the value
  showRandom(); // initial display
  var interval = setInterval(function () {
    decreaseRandom();
    // display (update) it
    showRandom();
    if(number_objects <= 3) {
      // clear interval when number of objects gets to, or below, 0
      clearInterval(interval);
      $(".left-pack").css("background-color","#B90D0D").addClass("alert");
    }
  }, 12000);

  var i = 0;
  setTimeout(function(){
  setInterval(
  function(){
  i=i+1;
  if(i>10) i=1;//10 - количество уведомлений
  $('.yved:nth-child('+i+')').fadeIn(500).delay(6000).fadeOut(500);//В этой строчке в мс 500 - время анимации появления, 5000 - время задержки, 500 - время затухания уведомления соответсвенно
  },12000);// - задержка в мс меду показами уведомлений
  yved();
  },0);// - задержка в мс перед показом первого уведомления
  
  

});

