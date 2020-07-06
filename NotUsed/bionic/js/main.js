$(document).ready(function() {
    function t(t, n) {
        var e = t - .5 + Math.random() * (n - t + 1);
        return e = Math.round(e)
    }

    function n(n, e) {
        var o = t(n, e),
            s = o - t(5, 9);
        $(".op_on").text(o), $(".op_raz").text(s)
    }
    $(".section13__slider").slick({
        dots: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: !0,
        nextArrow: '<i class="slider_next_button"></i>',
        prevArrow: '<i class="slider_prev_button"></i>'
    }), $(".section9__slider").slick({
        dots: !1,
        infinite: !0,
        slidesToShow: 1,
        adaptiveHeight: !0,
        nextArrow: '<i class="s9_slider_next_button"></i>',
        prevArrow: '<i class="s9_slider_prev_button"></i>'
    });
    // countdownStart
    var storageCountdownReset = "countdownResetLiftNv2",
        storageCountdownTime = "countdownTimeLiftNv2",
        countdownResetTimeVal = 41,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
      localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
      if(nowDateTime - countdownReset > countdownResetTimeVal*60*1000) {
        var countdownTime = (new Date).getTime() + 24e5;
        localStorage.setItem(storageCountdownTime, countdownTime);
        localStorage.setItem(storageCountdownReset, nowDateTime);
      }
    }

    if (localStorage.getItem(storageCountdownTime)) {
      var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
      countdownTime = (new Date).getTime() + 24e5;
    }
    $(".countdown__wrap").countdown(countdownTime, function(t) {
      $(this).html(t.strftime("%H:%M:%S"));
      $(this).html(t.strftime('<span class="hour">%H</span>  <span class="minute">%M</span><span class="second">%S</span>'))
    }).on('update.countdown', function (e) {
    countdownTime = e.finalDate.getTime();
    localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
    $('.countdown__wrap').countdown('stop');
    });

    $(function() {
        $(".header__call-button,.section11__form_counter-button").on("click", function(t) {
            t.preventDefault();
            var n = $(this).attr("data-id"),
                e = $(n).offset().top - 400;
            $("body,html").animate({
                scrollTop: e
            }, 1500)
        })
    }), n(35, 45), setInterval(n, 15e3, 35, 45);
    
});
