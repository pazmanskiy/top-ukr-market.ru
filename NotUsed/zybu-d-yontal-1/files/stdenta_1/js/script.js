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


    $('.scrollTo').on('click', function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var n = 40;
    (function () {
        n--;
        $(".rest-count").html(n);
        if (n == 3) {
            return false;
        }
        if (n !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }
    })();
    var n2 = 40;
    (function () {
        n2--;
        $(".lastpack").html(n2);
        if (n2 == 3) {
            return false;
        }
        if (n2 !== 10000) {
            setTimeout(arguments.callee, getRandomInt(10000, 30000));
        }

    })();
});