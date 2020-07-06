function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function randRange(data) {
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
}

function lastpack(numpack) {
    var minNumPack = 3; // Минимальное количество упаковок
    var lastClass = $('.lastpack'); // Объект
    var numpackCookie = getCookie("lastpack");
    var timeArray = new Array(2000, 13000, 15000, 7000, 6000, 11000);

    if(numpackCookie == undefined) {
        document.cookie = numpack;
    } else {
        var numpack =  numpackCookie;
    }
    
    if (numpack > minNumPack) {
        numpack--;
        document.cookie = "lastpack="+numpack;
        lastClass.text(numpack);   
    } else {
        lastClass.text(minNumPack);
    }
    clearInterval(timer);
    timer = setInterval(lastpack, randRange(timeArray), numpack);
}

var timer = setInterval(lastpack, 0, 60);

// Функция проверки ввода кода функцый
function codeCheck(){
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
            return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.").slideDown();
        }else{
            return $message.text("Введите, пожалуйста, код.").slideDown();
        }
    });

    $code.on('focus', function(){
        $message.slideUp();
    });
}

$(document).ready(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });


    $('.scrollTo').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    initializeClock('timer1', deadline);
    initializeClock('timer2', deadline);
    initializeClock('timer3', deadline);
    initializeClock('timer4', deadline);
    initializeClock('timer5', deadline);

    $(".text-reviews-items.owl-carousel").owlCarousel({
        loop : !0,
        margin : 0,
        items : 1,
        nav : !0,
        navText : [, ]
    });

    var t = $(".faq-query");
    t.click(function () {
        $(".faq-answer").stop().animate({
            paddingTop : 0,
            height : 0,
            paddingBottom : 0
        }, 500),
        $(".faq-answer").css("box-shadow", "none");
        var t = $(this).siblings(".faq-answer");
        0 == t.height() ? (h = t.css("height", "auto").height(), t.height(0), t.stop().animate({
                paddingTop : "12px",
                height : h + 24,
                paddingBottom : "12px"
            }, 500), t.css("box-shadow", "-2px 2px 4.9px 0.1px rgba(0, 0, 0, 0.24)")) : (t.stop().animate({
                paddingTop : 0,
                height : 0,
                paddingBottom : 0
            }, 500), setTimeout(function () {
                t.css("box-shadow", "none")
            }, 500))
    });

    codeCheck();

    

});