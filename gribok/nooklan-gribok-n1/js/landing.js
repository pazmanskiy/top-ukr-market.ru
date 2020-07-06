  // window.urlGET = function (name) {
  //     if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search));
  //     return (name === null) ? '' : decodeURIComponent(name[1]);
  // }
  
// $('input').on('click', function () {
// 	  var len = $(this).val().length;
// 	  this.setSelectionRange(len, len);
//     console.log('fd');
// 	});


    var slSpead = 700; //скорость перелистывания слайдов
    var slTimeOut = 86400000; //время задежки показа слайда
    var slNeedLinks = true; //управляет ссылками "Следующий " и "Предыдущий" - если значение этой переменной равно true, то эти ссылки будут отображаться, а если false, то соответственно их не будет
    //определяем скорось для оперымини
    // var isMobile = {
    //     Opera: function () {
    //         return navigator.userAgent.match(/Opera Mini/i);
    //     }
    // };
    // if (isMobile.Opera()) {
    //     slSpead = 100;
    // };
    ///
    $(document).ready(function (e) {

      /*   scroll   */
        var scrollTo = function () {
            var anchor = $(this).attr("href");
            var hAnchor = $(anchor).offset().top;
            // СЃРєСЂРѕР»РёРј
            $('html,body').animate({scrollTop: hAnchor}, 700);
            return false;
        };
        $(function () {
            $('.scrollTo').on('click', scrollTo);
        });
        $('.slide').css({
            "position": "absolute"
            , "top": '0'
            , "left": '0'
        }).hide().eq(0).show();
        var slideNum = 0; //счетчик, номер активного слайда
        var slideTime;
        var slideCount = 3;
        var animSlide = function (arrow) { // Основная функция, логика нашего слайдера
            clearTimeout(slideTime);
            $('.slide').eq(slideNum).fadeOut(slSpead);
            if (arrow == "next") {
                if (slideNum == (slideCount - 1)) {
                    slideNum = 0;
                } else {
                    slideNum++
                }
            } else if (arrow == "prew") {
                if (slideNum == 0) {
                    slideNum = slideCount - 1;
                } else {
                    slideNum -= 1
                }
            } else {
                slideNum = arrow;
            }
            $('.slide').eq(slideNum).fadeIn(slSpead, rotator);
            $(".control-slide.active").removeClass("active");
            $('.control-slide').eq(slideNum).addClass('active');
        };
        if (slNeedLinks) {
            var $linkArrow = $('<button id="prewbutton"></button><button id="nextbutton"></button>')
                .prependTo('#slider');
            $('#nextbutton').click(function () {
                animSlide("next");

            });
            $('#prewbutton').click(function () {
                animSlide("prew");
            })
        }
        var $adderSpan = '';
        $('.slide').each(function (index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
        $('<div class ="sli-links">' + $adderSpan + '</div>').appendTo('#slider-wrap');
        $(".control-slide:first").addClass("active");

        $('.control-slide').click(function () {
            var goToNum = parseFloat($(this).text());
            animSlide(goToNum);
        });
        var pause = false; //отвечает за остановку слайдера, если user навел курсор на слайд
        var rotator = function () {
            if (!pause) {
                slideTime = setTimeout(function () {
                    animSlide('next')
                }, slTimeOut);
            }
        };
        $('#slider-wrap').hover(
            function () {
                clearTimeout(slideTime);
                pause = true;
            }
            , function () {
                pause = false;
                rotator();
            });
        rotator();
    });

    // jQuery().ready(function () {
    //     function TemplateRefresh() {
    //         ModalRefresh();
    //     }

    //     $(window).resize(function () {
    //         TemplateRefresh();
    //     });
    //     TemplateRefresh();

        /* -----------------------------------------------------------------------------------------
         * Modal Refresh
         */
        // function ModalRefresh() {
        //     if ($('.modal').is(':visible')) {
        //         var modalBlock = $('.modal-block'),
        //             width = parseInt(modalBlock.width()),
        //             height = parseInt(modalBlock.height());
        //         if ($(window).height() > height + 20) {
        //             modalBlock.addClass('modal-top').removeClass('margin-t-b').css('margin-top', -1 * (height / 2));
        //         }
        //         else {
        //             modalBlock.addClass('margin-t-b').removeClass('modal-top');
        //         }
        //         if ($(window).width() > width) {
        //             modalBlock.addClass('modal-left').removeClass('margin-l').css('margin-left', -1 * (width / 2));
        //         }
        //         else {
        //             modalBlock.addClass('margin-l').removeClass('modal-left');
        //         }
        //     }
        // }


        // /* -----------------------------------------------------------------------------------------
        //  * Modal Show
        //  */
        // $(document).on('click', 'a[modal]', function(){
        //     var modalWindow = $('div#' + $(this).attr('modal'));
        //     if (modalWindow.length){
        //         modalWindow.fadeIn('fast');
        //         $('body').addClass('modal-show');
        //         ModalRefresh();
        //         return false;
        //     }
        // });


        /* -----------------------------------------------------------------------------------------
         * Modal Hide
         */
        // function ModalHide() {
        //     $('.modal:visible').fadeOut('fast', function(){
        //         $('body').removeClass('modal-show');
        //     });
        // }

        // $(document)
        //     .on('click', '.icon-close, .modal', function (event) {
        //         if (event.target != this)
        //             return false;
        //         else
        //             ModalHide();
        //     })
        //     .on('keydown', function (key) {
        //         if (key.keyCode == 27)
        //             ModalHide();
        //     })
        //     .on('click', '.modal > *', function (event) {
        //         event.stopPropagation();
        //         return true;
        //     })



    function startTimer() {
        var my_timer = document.getElementById("my_timer");
        //var time = my_timer.innerHTML;
        //var arr = time.split(":");
        var h = $(".hour").html();
        var m = $(".min").html();
        var s = $(".sec").html();
        if (s == 0) {
            if (m == 0) {
                if (h == 0) {
                    //alert("           ");

                    $('.timer__item-title').hide();
                    $('.timer__finish').show();
                    return;
                }
                h--;
                m = 59;
                if (h < 10)
                    h = "0" + h;
            }
            m--;
            if (m < 10)
                m = "0" + m;
            s = 59;
        }
        else
            s--;
        if (s < 10)
            s = "0" + s;
        $(".hour").html(h);
        $(".min").html(m);
        $(".sec").html(s);
        setTimeout(startTimer, 1000);
    }
    startTimer();

    // $(document).ready(function () {
    //   $('.mouse_moved').mouseover(function () {
    //       console.log('mouse_moved');
    //       var displayPop = $(".popup-callback").css('display');
    //       var displayP = $(".popup-phone").css('display');
    //       if (displayPop == 'none' && displayP == 'none') {
    //           $('.popup-mouseleave').show();
    //       }
    //   });

    //     /*   scroll   */
    //     var scrollTo = function () {
    //         var anchor = $(this).attr("href");
    //         var hAnchor = $(anchor).offset().top;
    //         // скролим
    //         $('html,body').animate({scrollTop: hAnchor}, 700);
    //         return false;
    //     };
    //     $(function () {
    //         $('.scrollTo').on('click', scrollTo);
    //     });

    //     /* modal */
    //     $('.headerCallJs').on('click', function (event) {
    //         event.preventDefault();
    //         $(".popup-callback").fadeIn(200);
    //     });
    //     $('.phone-call').on('click', function (event) {
    //         event.preventDefault();
    //         $(".popup-phone").fadeIn(200);
    //     });

    //     $('.close-modal,.close-img').on('click', function (event) {
    //         event.preventDefault();
    //         $(".popup-callback").fadeOut(200);
    //         $(".popup-phone").fadeOut(200);
    //     });
    //     $('.close-modal-mouse').on('click', function (event) {
    //         event.preventDefault();
    //         $(".popup-mouseleave").addClass('hide');
    //     });
    // });

    // function NowTime(){
    //   var d = new Date();
    //   var result = (d.getHours()*60 + d.getMinutes())*2+2000;
    //   $('#todayBay').html(result);
    // };
    // NowTime();

  //Добавить синюю трубку телефона
  // function bluePhone(){
  //   $('.bluePhone').html('<div class="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"><a href="#" class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></a></div>');
  //   $('.phoneJs').click(function(){
  //     event.preventDefault();
  //   $('.popup-second').fadeIn(300);
  //   });
  // }
  // bluePhone();


    // function mouseMoved() {
    //     // $(".mouse").html('<div class="line_top mouse_moved"></div><div class="line_bottom mouse_moved"></div>');
    //     $('.mouse_moved').mouseover(function () {
    //         console.log('mouse_moved');
    //         var displayPop = $(".popup-callback").css('display');
    //         var displayP = $(".popup-phone").css('display');
    //         if (displayPop == 'none' && displayP == 'none') {
    //             $('.popup-mouseleave').show();
    //         }
    //     });

    // }

    // mouseMoved();


    // window.onload = function () {
    //        var timeOut = 12000;
    //        var x_price = Number($('.x_price_current').html()); //цена
    //        var last = 60; //количество упаковок
    //        var i = 0;
    //        var bay = 0;
    //        var total_price;
    //        var count = 0;
    //        var OneTimeOut = 48000;
    //        var fistShow = 0;
    //        var TwoTimeOut = 24000;
    //        //-----записываем в ленд количество упаковок
    //        function firstNumberPack() {
    //            $('.lastpack').html(last); // количество оставшихся упаковок  (этот класс подставляем в span)
    //            $('.paced').html('шт.'); // Записываем - шт., флаконы, и тд.
    //            $('.pacedNamed').html('упаковок'); // Записываем - упаковок., флаконов, и тд.
    //        }
    //    function numberCase() {
    //            a = Math.floor(Math.random() * (400 - 100 + 1) + 300)
    //        }
    //        function lastpack() {
    //            if (last > 5) {
    //                bay = (count == 0) ? 3 : (count == 1) ? 4 : (count == 2) ? 6 : (count == 3) ? 8 : (count == 4) ? 10 : (count == 5 || count == 9) ? 3 : (count == 6 || count == 10) ? 5 : (count == 7 || count == 8) ? 4 : 4;
    //                $('.blink').html(last);
    //                last = last - bay;
    //                count++;
    //                total_price = x_price * bay;
    //                $('.lastpack').html(last);
    //                $('.bay').html(bay);
    //                $('.blink_me').html(last);
    //                $('.x_price').html(total_price);
    //                $('.count').html(count);
    //                timeOut = (count == 3 || count == 5 || count == 8 || count == 10 || count == 12 || count == 15 || count == 17 || count == 20) ? OneTimeOut : TwoTimeOut;

    //                setTimeout(lastpack, timeOut, last);
    //            }
    //            if (last <= 5) {
    //                setTimeout(function () {
    //                    $('.show-message__item').addClass('lost_position');
    //                }, timeOut);

    //                // выводим последнее сообщение
    //                setTimeout(function () {
    //                    $('.last-message').addClass('block_position');
    //                }, timeOut);
    //            }
    //        }
    //        firstNumberPack();
    //        setTimeout(lastpack, 23000);
    //      }