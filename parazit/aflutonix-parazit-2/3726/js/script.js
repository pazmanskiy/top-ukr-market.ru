$(document).ready(function(e) {
    $(".fancybox").fancybox({
		helpers: { 
			overlay: {  locked: false } 
		}
	});
	
	$("input[name=source]").attr("value", $(location).attr("href"));
	$("input[name=agent]").attr("value", navigator.userAgent);
	$("input[name=chkkey]").attr("value", "1automatic");
	
	$('#popup-form-01-itself').ajaxForm(function() { 
		$('#popup-form-01-itself').hide(500,function(){
			$("#popup-form-01-done").show(500);
		});
	});
});

function Showsection1() {
    timeOut1 = 500;
    timeOut2 = 1000;
    var timeOut3 = timeOut2 + 500;

    $("img.preloader").fadeOut();
    $("#wrapper").fadeIn(500);

    setTimeout(function () {
        $('div.section-1 h1').animate({opacity: 1}, 500);
    }, timeOut1);
    setTimeout(function () {
        $('div.section-1 div.text-1').animate({opacity: 1}, 500);
    }, timeOut2);
    setTimeout(function () {
        $('div.section-1 div.form-wrapper').animate({opacity: 1}, 500);
    }, timeOut3);
	setTimeout(function () {
        $('.sc1-about').animate({opacity: 1}, 500);
    }, 2000);
}
function Hidesection1() {
    $('div.section-1 h1').css("opacity", 0);
    $('div.section-1 .text-1').css("opacity", 0);
    $('div.section-1 .form-wrapper').css("opacity", 0);
}

function Showsection2() {
    $('div.section-2 h1').animate({opacity: 1}, 1000);

    var delay = 0;
    $('div.section-2 .text-block div').each(function(){
        $(this).delay(delay).animate({opacity: 1}, 500);
        delay += 300;
    });
}
function Hidesection2() {
    $('div.section-2 h1').css("opacity", 0);
    $('div.section-2 .text-block div').css("opacity", 0);
}

function Showsection3() {
    $('div.section-3 h1').animate({opacity: 1}, 1000);
    $('div.section-3 .text-1').delay(500).animate({opacity: 1}, 1000);
    $('div.section-3 .form-wrapper').delay(500).animate({opacity: 1}, 1000);
    $('div.section-3 .tasks').delay(500).animate({opacity: 1}, 1000);

    var delay = 500;
    $('div.section-3 .tasks .task').each(function(){
        $(this).find('.arrow').delay(delay).animate({left: 0}, 500);
        delay += 500;
    });
}
function Hidesection3() {
    $('div.section-3 h1').css("opacity", 0);
    $('div.section-3 .text-1').css("opacity", 0);
    $('div.section-3 .form-wrapper').css("opacity", 0);
    $('div.section-3 .tasks').css("opacity", 0);
    $('div.section-3 .tasks .task .arrow').css("left", '-1000px');
}

function Showsection4() {
	var pureDelay = 300;
	var delay = 500;
    $('div.section-4 h1').animate({opacity: 1}, pureDelay);
	
    

    $('div.section-4 .steps .step-1 .step-num').delay(delay).animate({opacity: 1}, pureDelay);
    $('div.section-4 .steps .step-1 .step-text').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;
    $('div.section-4 .steps .step-1 .step-text .arrow').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;

    $('div.section-4 .steps .step-2 .step-num').delay(delay).animate({opacity: 1}, pureDelay);
    $('div.section-4 .steps .step-2 .step-text').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;
    $('div.section-4 .steps .step-2 .step-text .arrow').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;

    $('div.section-4 .steps .step-3 .step-num').delay(delay).animate({opacity: 1}, pureDelay);
    $('div.section-4 .steps .step-3 .step-text').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;
    $('div.section-4 .steps .step-3 .step-text .arrow').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;

    $('div.section-4 .steps .step-4 .step-num').delay(delay).animate({opacity: 1}, pureDelay);
    $('div.section-4 .steps .step-4 .step-text').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;
    $('div.section-4 .steps .step-4 .step-text .arrow').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;

    $('div.section-4 .steps .step-5 .step-num').delay(delay).animate({opacity: 1}, pureDelay);
    $('div.section-4 .steps .step-5 .step-text').delay(delay).animate({opacity: 1}, pureDelay);
    delay += pureDelay;
    $('div.section-4 .steps .step-5 .step-text .arrow').delay(delay).animate({opacity: 1}, pureDelay);
}
function Hidesection4() {
    $('div.section-4 h1').css("opacity", 0);
    $('div.section-4 .steps .step .step-num').css("opacity", 0);
    $('div.section-4 .steps .step .step-text').css("opacity", 0);
    $('div.section-4 .steps .step .step-text .arrow').css("opacity", 0);
}

function Showsection5() {
    $('div.section-5 h1').animate({opacity: 1}, 1000);
    $('div.section-5 .form-wrapper').delay(500).animate({right: 0}, 1000);
    $('div.section-5 .text-block').delay(1500).animate({opacity: 1}, 1000);
}
function Hidesection5() {
    $('div.section-5 h1').css("opacity", 0);
    $('div.section-5 .text-block').css("opacity", 0);
    $('div.section-5 .form-wrapper').css("right", '-1000px');
}

function Showsection6() {
    $('div.section-6 h1').animate({opacity: 1}, 1000);
    $('div.section-6 .text-1').delay(500).animate({opacity: 1}, 1000);

	var pureDelay = 300;
	var delay = 500;
    $('div.section-6 ul li').each(function(){
        $(this).delay(delay).animate({opacity: 1}, pureDelay);
        delay += pureDelay;
    });
}
function Hidesection6() {
    $('div.section-6 h1').css("opacity", 0);
    $('div.section-6 .text-1').css("opacity", 0);
    $('div.section-6 ul li').css("opacity", 0);
}

function Showsection7() {
	var pureDelay = 300;
    var delay = 500;
    $('div.section-7 h1').animate({opacity: 1}, pureDelay);
    $('div.section-7 .text-1').delay(pureDelay).animate({opacity: 1}, pureDelay);

	
    $('div.section-7 ul li').each(function(){
        $(this).delay(delay).animate({opacity: 1}, pureDelay);
        delay += pureDelay;
    });
}
function Hidesection7() {
    $('div.section-7 h1').css("opacity", 0);
    $('div.section-7 .text-1').css("opacity", 0);
    $('div.section-7 ul li').css("opacity", 0);
}

function Showsection8() {
    var pureDelay = 300;
    var delay = 500;
    $('div.section-8 ul li').each(function(){
        $(this).delay(delay).animate({opacity: 1}, pureDelay);
        delay += pureDelay;
    });

    delay = pureDelay;
    $('div.section-8 .form-wrapper input.email').delay(delay).animate({left: 0}, pureDelay);
    delay += pureDelay;
    $('div.section-8 .form-wrapper input.skype').delay(delay).animate({right: 0}, pureDelay);
}
function Hidesection8() {
    $('div.section-8 ul li').css("opacity", 0);
    $('div.section-8 .form-wrapper input.email').css("left", '-1000px');
    $('div.section-8 .form-wrapper input.skype').css("right", '-1000px');
}


$(window).load(function () {
    Showsection1();
});

$(document).ready(function () {

	

/*
  window.onbeforeunload = confirmExit;
  function confirmExit()
  {
    if(!$('.form').hasClass('active')){
      return "";
    }
  }
*/
  //$('.form button.request').click(function(){
  //  var form = $(this).parent().parent();
  //  var focused = 0;
  //  var error = 0;
  //  form.find('input.required').each(function(){
  //    var Ivalue = $(this).val();
  //    if(Ivalue === ""){
  //      error = 1;
  //      $(this).addClass("error");
  //      if(focused === 0){
  //        $(this).focus();
  //        focused = 1;
  //      }
  //    }else{
  //      $(this).removeClass("error");
  //    }
  //  });
  //  if(error === 0){
  //    form.submit();
  //  }
  //
  //  return false;
  //});

  $('.form').submit(function(){
    var form = $(this);
	form.addClass('active');
    var focused = 0;
    var error = 0;
    form.find('input.required').each(function(){
      var Ivalue = $(this).val();
      if(Ivalue === ""){
        error = 1;
        $(this).addClass("error");
        if(focused === 0){
          $(this).focus();
          focused = 1;
        }
      }else{
        $(this).removeClass("error");
      }
    });

    return !error;
  });

  $('.scroll-animate').each(function () {
        var block = $(this);
        var section_num = parseInt(block.attr("data-num"));
        $(window).scroll(function () {
            var top = block.offset().top;
            var bottom = block.height() + top;
            top = top - $(window).height() + 200;
            var scroll_top = $(this).scrollTop();
            if ((scroll_top > top) && (scroll_top < bottom)) {
                if (!block.hasClass('animate')) {
                    block.addClass('animate');
                    switch (section_num) {
                        case 1:
                            Showsection1();
                            break;
                        case 2:
                            Showsection2();
                            break;
                        case 3:
                            Showsection3();
                            break;
                        case 4:
                            Showsection4();
                            break;
                        case 5:
                            Showsection5();
                            break;
                        case 6:
                            Showsection6();
                            break;
                        case 7:
                            Showsection7();
                            break;
                        case 8:
                            Showsection8();
                            break;
                    }
                }
            } else {

            }
        });
    });

    //setInterval(function () {
    //    $('.arrow_bot').animate({bottom: 20}, {duration: 300}).animate({bottom: 0}, {
    //        duration: 500,
    //        easing: 'easeOutBounce'
    //    });
    //}, 200);

    //
  $('.btn-video').click(function(){
    $('iframe.video').attr('src', "https://www.youtube.com/embed/solobq2xXgI?rel=0&amp;controls=1&amp;showinfo=0;disablekb=1;autoplay=1");
    $('#mask').fadeIn();
    $('iframe.video').fadeIn();
    $('.btn-video-close').fadeIn();
    return false;
  });

  $('.btn-video-close').click(function(){
    $('#mask').fadeOut();
    $('iframe').attr('src', " ");
    $('iframe').fadeOut();
    $(this).fadeOut();
    return false;
  });

    $("ul.menu a").click(function () {
        var sectionId = $(this).attr("data-section");
        $('html, body').animate({
            scrollTop: $("#" + sectionId).offset().top - 100
        }, 1000);
        return false;
    });

    $("a.logo").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
	/*
    $(".header button.request").click(function () {
        $('html, body').animate({
          scrollTop: $("#bot-form").offset().top
        }, 1000);
        return false;
    });
	*/


});