var slSpead = 700; //скорость перелистывания слайдов
var slTimeOut = 86400000; //время задежки показа слайда
var slNeedLinks = true; //управляет ссылками "Следующий " и "Предыдущий" - если значение этой переменной равно true, то эти ссылки будут отображаться, а если false, то соответственно их не будет
//определяем скорось для оперымини
var isMobile = {
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    }
};
if (isMobile.Opera()) {
    slSpead = 100;
};
///
$(document).ready(function (e) {
    $('.slide').css({
        "position": "absolute"
        , "top": '0'
        , "left": '0'
    }).hide().eq(0).show();
    var slideNum = 0; //счетчик, номер активного слайда
    var slideTime;
    slideCount = $("#slider .slide").size();
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
        $adderSpan += '<span class = "control-slide"><i class="vis--hiden">' + index + '</i></span>';
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

function safari_windows() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            var a=1;
        } else {
            var tag_css = document.createElement('link');
            tag_css.type = 'text/css';
            tag_css.rel = 'stylesheet';
            tag_css.href = "./css/safari.css";
            var tag_head = document.getElementsByTagName('head');
            tag_head[0].appendChild(tag_css);
        }
    };
};
function firefox(){
    var browser=navigator.userAgent.toLowerCase();
    if(browser.indexOf('firefox') > -1) {
        var tag_css = document.createElement('link');
        tag_css.type = 'text/css';
        tag_css.rel = 'stylesheet';
        tag_css.href = "./css/firefox.css";
        var tag_head = document.getElementsByTagName('head');
        tag_head[0].appendChild(tag_css);}
    else  {               // If another browser, return 0
        var b=1;
    }
    return false;
};
function internet_explorer() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {     // If Internet Explorer, return version number
        var tag_css = document.createElement('link');
        tag_css.type = 'text/css';
        tag_css.rel = 'stylesheet';
        tag_css.href = "./css/ie.css";
        var tag_head = document.getElementsByTagName('head');
        tag_head[0].appendChild(tag_css);}
    else  {               // If another browser, return 0
        var b=1;
    }
    return false;
};



function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
        var tag_css = document.createElement('link');
        tag_css.type = 'text/css';
        tag_css.rel = 'stylesheet';
        tag_css.href = "./css/ios.css";
        var tag_head = document.getElementsByTagName('head');
        tag_head[0].appendChild(tag_css);}

};

function opera_mini() {
    var isMobile = {
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
    };
    if (isMobile.Opera()) {
        var basePath = window.cdn_path || '';
        var tag_css = document.createElement('link');
        tag_css.type = 'text/css';
        tag_css.rel = 'stylesheet';
        tag_css.href = basePath + "css/operamini.css";
        var tag_head = document.getElementsByTagName('head');
        tag_head[0].appendChild(tag_css);

    }
}




//getMobileOperatingSystem();
//internet_explorer();
//firefox();
opera_mini();

function webkit_moved() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {

            $('html').mouseleave(function(){
                var displayP1 = $(".popup-callback").css('display');
                var displayP2 = $(".popup-phone").css('display');
                if ( displayP1 == 'none' && displayP2 == 'none'){
                    $('.popup-mouseleave').show();
                }
            });
        } else {

            $('html').mouseleave(function(){
                var displayP1 = $(".popup-callback").css('display');
                var displayP2 = $(".popup-phone").css('display');
                if ( displayP1 == 'none' && displayP2 == 'none'){
                    $('.popup-mouseleave').show();
                }
            });
        }
    };
};
function firefox_moved(){
    var browser=navigator.userAgent.toLowerCase();
    if(browser.indexOf('firefox') > -1) {
        $('.mouse_moved').mouseover(function(){
            var displayP1 = $(".popup-callback").css('display');
            var displayP2 = $(".popup-phone").css('display');
            if ( displayP1 == 'none' && displayP2 == 'none'){
                $('.popup-mouseleave').show();
            }
        });

    }
    else  {               // If another browser, return 0
        var b=1;
    }
    return false;
};
function internet_explorer_moved() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {     // If Internet Explorer, return version number
        $('.mouse_moved').mouseover(function(){
            var displayP1 = $(".popup-callback").css('display');
            var displayP2 = $(".popup-phone").css('display');
            if ( displayP1 == 'none' && displayP2 == 'none'){
                $('.popup-mouseleave').show();
            }
        });}
    else  {               // If another browser, return 0
        var b=1;
    }
    return false;
};



//getMobileOperatingSystem();

webkit_moved();
firefox_moved();
internet_explorer_moved();
window.onload=function(){
    var timeOut = 12000;
    var x_price = Number($('.x_price_current').html()); //цена
    var last = 60; //количество упаковок
    var i = 0;
    var bay = 0;
    var total_price;
    var count = 0;
    var OneTimeOut = 48000;
    var fistShow =0;
    var TwoTimeOut = 24000;
    //-----записываем в ленд количество упаковок
    function firstNumberPack() {
        $('.lastpack').html(last); // количество оставшихся упаковок  (этот класс подставляем в span)
//            $('.paced').html('шт.') // Записываем - шт., флаконы, и тд.
//            $('.pacedNamed').html('упаковок') // Записываем - упаковок., флаконов, и тд.
    }



    function lastpack() {
        if (last > 5) {
            bay =  (count ==0 ) ? 3 : (count==1) ? 4 : (count==2) ? 6 : (count==3) ? 8 : (count==4) ? 10 : ( count==5 ||count==9) ? 3 : (count==6|| count==10) ? 5 : (count==7 || count==8) ? 4 :4;
            $('.blink').html(last);
            last = last - bay;
            count++;
            total_price = x_price * bay;
            $('.lastpack').html(last);
            $('.bay').html(bay);
            $('.blink_me').html(last);
            $('.x_price').html(total_price);
            $('.count').html(count);
            timeOut = (count == 3 || count == 5 || count == 8 || count == 10 || count == 12 || count == 15 || count == 17 || count == 20) ? OneTimeOut : TwoTimeOut;

            setTimeout(lastpack, timeOut, last);

        }

        if (last <= 5) {
            setTimeout(function () {
                $('.show-message__item').addClass('lost_position');
            }, timeOut);

            // выводим последнее сообщение
            setTimeout(function () {
                $('.last-message').addClass('block_position');
            }, timeOut);
        }
    }


    firstNumberPack();

    setTimeout(lastpack, 23000);

    setTimeout(function(){
        $('.first-message').show();
    }, 2000);
    setTimeout(function(){
        $('.first-message').hide();
    }, 8000);

};
$(document).ready(function(){





    /* modal */
    $('.headerCallJs').on('click', function(event) {
        event.preventDefault();
        $(".popup-callback").fadeIn(200);
    });
    $('.phone-call').on('click', function(event) {
        event.preventDefault();
        $(".popup-phone").fadeIn(200);
    });

    $('.close-modal,.close-img').on('click', function(event) {
        event.preventDefault();
        $(".popup-callback").fadeOut(200);
        $(".popup-phone").fadeOut(200);
    });

    $('.popup-mouseleave .close-modal,.popup-mouseleave .close-img').on('click', function(event) {
        event.preventDefault();
        $('.popup-mouseleave').addClass('hide');
    });






    var $code = $(".check_popup_code_input"),
        $message = $(".js-message"),
        $button = $(".button-popup-first");

    var codeValues = /^\d+$/;

    $button.on("click", function (ev) {
        ev.preventDefault();
        var $codeLenght = $(".check_popup_code_input").val().length;
        var codeValue = $code.val();

        if (codeValues.test(codeValue) && $codeLenght==15){
            return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
        } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  '){
            return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
        }else{
            return $message.text("Введите, пожалуйста, код.");
        }
    });





    $('.mouse_moved').mouseover(function(){
        var displayP1 = $(".popup-callback").css('display');
        var displayP2 = $(".popup-phone").css('display');
        if ( displayP1 == 'none' && displayP2 == 'none'){
            $('.popup-mouseleave').show();
        }
    });




});
