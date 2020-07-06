$(document).ready(function () {
    /*
     $(window).bind('scroll', function (e) {
     parallaxScroll();
     });
     */
    $('.timer').each(function () {
        var clock;
        clock = $(this).FlipClock({autoStart: false});
        clock.setTime(3600);
        clock.setCountdown(true);
        clock.start();
    });
    $('.toform').click(function () {
        $("html, body").animate({scrollTop: $(".main_form").offset().top}, 1000);
        return false;
    });
    /*function parallaxScroll() {
     var scrolled = $(window).scrollTop();
     $('.leaves_1').css('top', (90 - (scrolled * .75)) + 'px');
     $('.leaves_2').css('top', (430 - (scrolled * .35)) + 'px');
     $('.leaves_3').css('top', (650 - (scrolled * .2)) + 'px');
     $('.leaves_4').css('top', (220 - (scrolled * .1)) + 'px');
     $('.leaves_5').css('top', (460 - (scrolled * .2)) + 'px');
     $('.leaves_6').css('top', (750 - (scrolled * .1)) + 'px');
     $('.leaves_7').css('top', (460 - (scrolled * .2)) + 'px');
     $('.leaves_8').css('top', (2100 - (scrolled * 0.6)) + 'px');
     $('.leaves_9').css('top', (1000 - (scrolled * 0.2)) + 'px');
     $('.leaves_10').css('top', (1800 - (scrolled * 0.2)) + 'px');
     }*/
})
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
        auto: true
    },
    web: {
        minSlides: 2,
        maxSlides: 2,
        infiniteLoop: false,
        adaptiveHeight: false,
        touchEnabled: false,
        controls: false,
        pager: false,
        slideWidth: 460
    }
};
function slider(width) {
    if (width < 767) {
        slid.reloadSlider(options.wap);
    } else {
        slid.reloadSlider(options.web);
    }
};
$(window).load(function () {
    $(function () {
        $("#slide_1,#slide_2,#slide_3,#slide_4").twentytwenty({
            default_offset_pct: 0.7, // How much of the before image is visible when the page loads
            orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
            no_overlay: true
        });
    })
    slid = $('.bxslider').bxSlider(options);
    slid_2 = $('.bxslider_2').bxSlider({auto: true, pager: true, adaptiveHeight: true});
    slid_3 = $('.bxslider_3').bxSlider({auto: false, pager: true, touchEnabled: false});
});
$(window).load(function () {
    slider(window.innerWidth);
});
$(window).resize(function () {
    slider(window.innerWidth);
});
