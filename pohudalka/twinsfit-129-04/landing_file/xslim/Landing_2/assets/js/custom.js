$(document).ready(function() {

/* Smooth Scroll */
  $(function() {
    $('a[href*=#]:not([href=#]):not([href=#ps-popup-call]):not([href=#ps-popup-sale]):not([href=#created-block-0])').click(function() {
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

  var number_objects; 
  var displayObject = $('.left-pack000');
  function loadRandom() {
    number_objects = 27 + Math.floor(Math.random() * 1);
  }
  function decreaseRandom() {
    number_objects -= Math.floor(Math.random() * 2) + 1;        
  }
  function showRandom() {
    // show / update the value
    displayObject.text(number_objects);
  }
  loadRandom(); // load the value
  showRandom(); // initial display
  var interval = setInterval(function () {
    decreaseRandom();
    showRandom();
    if(number_objects <= 4) {
      clearInterval(interval);
      //$(".left-pack").css("color","#ac0000").addClass("alert");
    }
  }, 12000);

  
});


 /* var q = new Date;
  var year = q.getFullYear();
  var month =  q.getMonth();
  var day =  q.getDate();
  var hour= q.getHours() +2;
  var minute= 0; 
  var sec= 0;
*/
/*Вариант до конца дня*/
var q = new Date;
  var year = q.getFullYear();
  var month =  q.getMonth();
  var day =  q.getDate()+1;
  var hour= 0;
  var minute= 0; 
  var sec= 0;
/**/

  function CountBox() { 
    
  }

  //month = --month;
  dateFuture = new Date(year, month, day, hour, minute, sec);
  
jQuery(document).ready(function(){
     
  });


