$(document).ready(function () {

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

    $('[data-toggle="scroll"]').on("click", function (e) {
        var anchor = $(this).attr("data-id");
        var bodyLeft = $("body").css("left");
        if (bodyLeft == "200px") {
            $("body").animate({
                left: "-=200px"
            }, 500);
        }
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        e.preventDefault();
    });


    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    $(".mobile").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#countdown-1').timeTo({
        seconds: 2400,
        displayCaptions: false,
        lang: 'ru',
        displayHours: true
    });

    $('#countdown-2').timeTo({
        seconds: 2400,
        displayCaptions: false,
        lang: 'ru',
        displayHours: true
    });


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var n = 25;
    (function () {
        n--;
        $(".info__action-left span").html(n);
        if (n == 3) {
            return false;
        }
        if (n !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }
    })();


});