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


    $("body").on("click","a.sb", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var owl = $('#owl_block_5');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        items: 1,
        navText: []
    });

    var owl = $('#owl_block_9');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        items: 1,
        navText: []
    });

    initializeClock('countdown', getDayEnd());
    initializeClock('countdown_2', getDayEnd());

    // CountDownTimer('2017/07/28 00:00:00', 'countdown');
    // CountDownTimer('2017/07/28 00:00:00', 'countdown_2');


});