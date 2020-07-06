var slid, options = {
    wap: {
        mode: 'horizontal',
        minSlides: 1,
        maxSlides: 1,
        adaptiveHeight: false,
        touchEnabled: true,
        infiniteLoop: true,
        controls: true,
        pager: true,
        slideMargin: 0,
        auto: true,
        slideWidth: 238
    },
    web: {
        minSlides: 8,
        maxSlides: 8,
        infiniteLoop: false,
        adaptiveHeight: false,
        touchEnabled: false,
        controls: false,
        pager: false,
        slideMargin: 15,
        slideWidth: 238
    }
};

$(document).ready(function () {
    $('.timer').each(function () {
        var clock;
        clock = $(this).FlipClock({autoStart: false});
        clock.setTime(3600);
        clock.setCountdown(true);
        clock.start();
    });
})

function slider(width) {
    if (width < 1000) {
        $('.section_10 .wrapper ul li').css({
            'margin-bottom' : '0px'
        });
        slid.reloadSlider(options.wap);
    } else {
        slid.destroySlider();
        $('.section_10 .wrapper ul li').css({
            'width' : '238',
            'margin-bottom' : '30px'
        });
        $('.bxslider').css('transform','none');
    }
};
$(window).load(function () {
    $(function(){
        $(".compare").twentytwenty({
            no_overlay: true
        });
    });

    slid = $('.bxslider').bxSlider();
});
$(window).load(function () {
    slider(window.innerWidth);
});
$(window).resize(function () {
    slider(window.innerWidth);
});
