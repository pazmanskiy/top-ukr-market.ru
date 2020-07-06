if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1     
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width * dpt;
    document.write('<meta name="viewport" content="width=' + 640+ '">');
}

$(function(){
    //timers
    $(".timer").eq(0).FlipClock(10000, {countdown: true});
    $(".timer").eq(1).FlipClock(10000, {countdown: true});
    $(".timer").eq(2).FlipClock(10000, {countdown: true});
    $(".timer").eq(3).FlipClock(10000, {countdown: true});
    $(".timer").eq(4).FlipClock(10000, {countdown: true});
    
    //sliders
       $(".owl-carousel").eq(1).owlCarousel({
           items: 1, 
           nav: true,
           navText: "",
           loop: true,
           responsive:{ 
            1200:{
                items:3
            },
           768:{
                items:2
            },
            640:{
                items: 1
            },
            0:{
                items:1
            }
        }
       });
       $(".owl-carousel").eq(3).owlCarousel({
           items: 1, 
           nav: true,
           navText: "",
           loop: true,
           responsive:{ 
            1200:{
                items:3
            },
           768:{
                items:2
            },
            640:{
                items: 1
            },
            0:{
                items:1
            }
        }
       });

       $(".owl-carousel").eq(0).owlCarousel({
           items: 1, 
           nav: true,
           navText: "",
           loop: true,
           responsive:{ 
            1200:{
                items:1
            },
           768:{
                items:1
            },
            640:{
                items: 1
            },
            0:{
                items:1
            }
        }
       });
       $(".owl-carousel").eq(4).owlCarousel({
           items: 1, 
           nav: true,
           navText: "",
           loop: true,
           responsive:{ 
            1200:{
                items:3
            },
           768:{
                items:2
            },
            640:{
                items: 1
            },
            0:{
                items:1
            }
        }
       });
       $(".owl-carousel").eq(2).owlCarousel({
           items: 1, 
           nav: true,
           navText: "",
           loop: true,
           responsive:{ 
            1200:{
                items:3
            },
           768:{
                items:2
            },
            640:{
                items: 1
            },
            0:{
                items:1
            }
        }
       });
    
    //input placeholder toggle
    var curPlaceHolder;
    $("input").on("click", function(){
        curPlaceHolder = $(this).attr("placeholder");
        $(this).attr("placeholder", "");
    });
    $("input").on("blur", function(){
        if($(this).val() == ""){
            $(this).attr("placeholder", curPlaceHolder);
        }
    });
    


    //smooth scrolling
    if($(window).outerWidth() <= 768){
      $(".callMeDar").attr("data-click", "");
      $(".callMeDar").attr("data-target", "");
      $(".callMeDar").attr("href", "#zakaz");
      $(".top-line nav a").click(function() { 
          var elementClick = $(this).attr("href");
          var dest = $(elementClick).offset().top - $(".top-line").height() + 1;
          $('html,body').animate({scrollTop: dest}, 700);
          return false;
      });
  } else {
    $(".top-line nav a:not('.callMeDar')").click(function() { 
          var elementClick = $(this).attr("href");
          var dest = $(elementClick).offset().top - $(".top-line").height() + 1;
          $('html,body').animate({scrollTop: dest}, 700);
          return false;
      });
  }
    $(".split-area__button .btn").click(function() { 
        var elementClick = $(this).attr("href");
        var dest = $(elementClick).offset().top - $(".top-line").height() + 1;
        $('html,body').animate({scrollTop: dest}, 700);
        return false;
    });
    $(".fuckWhy__btn .btn").click(function() { 
        var elementClick = $(this).attr("href");
        var dest = $(elementClick).offset().top - $(".top-line").height() + 1;
        $('html,body').animate({scrollTop: dest}, 700);
        return false;
    });
    $(".mobMenu a").click(function() { 
        var elementClick = $(this).attr("href");
        var dest = $(elementClick).offset().top - $(".top-line").height() + 1;
        $('html,body').animate({scrollTop: dest}, 700);
        return false;
    });
    $(".mob-nav").click(function() { 
        var elementClick = $(this).attr("href");
        var dest = $(elementClick).offset().top - $(".top-line").height() + 1;
        $('html,body').animate({scrollTop: dest}, 700);
        return false;
    });

    $(".mobButton").on("click", function(){
      $(".mobMenu").fadeToggle(100);
      $(".mobButton__line2").fadeToggle(200);
      $(".mobButton__line1").toggleClass("lineAni1");
      $(".mobButton__line3").toggleClass("lineAni3");
      $(this).toggleClass("buttonAni");
      $(".mobMenuLabel").fadeToggle(200);
    });
    $(".pop-close").on("click", function(){
      $(".popup__wrap").hide();
    });
    
    // if($(window).outerWidth <= 768){
    //   console.log(reviewsId);
    //   var reviewsId = $('#reviews').attr('id');
    //   var reviewsIdS = $('#reviews').attr('id');
    //   reviewsIdS.attr('id', '');
    //   zakazIdS.attr('id', '');
    //   $('.reviews-block__title').attr('id', reviewsId);
    // }
    
    

    
    
    
    
    
});