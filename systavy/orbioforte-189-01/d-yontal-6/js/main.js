function starttimer(t) {
    var e = t.FlipClock({
        clockFace: "HourlyCounter",
        autoStart: !1,
        language: "ru"
    });
    e.setTime(2307),
        e.setCountdown(!0),
        e.start()
}
$(document).ready(function() {
    starttimer($(".clock-top")),
        starttimer($(".clock-form01")),
        starttimer($(".clock-form02")),
        starttimer($(".clock-form03")),
        starttimer($(".clock-list01")),
        starttimer($(".clock-list02")),
        $(".text-reviews__items.owl-carousel").owlCarousel({
            loop: !0,
            margin: 0,
            items: 1,
            nav: !0,
            navText: [, ]
        });
    var t = $(".question");
    t.click(function() {
        $(".answer").stop().animate({
            paddingBottom: 0,
            height: 0,
            paddingTop: 0
        }, 500);
        var t = $(this).siblings(".answer");
        0 == t.height() ? (h = t.css("height", "auto").height(), t.height(0), t.stop().animate({
            paddingTop: "10px",
            height: h + 37,
            paddingBottom: "27px"
        }, 500)) : t.stop().animate({
            paddingBottom: 0,
            height: 0,
            paddingTop: 0
        }, 500)
    });

var ytplayer;






   $(".owl-nav>*").click(function() {

        $('.player_youtube').each(function(){

            var youtubePlayer = $(this);

            var youtubePlayer_video = youtubePlayer.attr('src');
            youtubePlayer_video += "&autoplay=0";
            youtubePlayer.attr('src',youtubePlayer_video);

        })

   })

























}), $(window).scroll(function() {
    $(".answer").stop().animate({
        paddingBottom: 0,
        height: 0,
        paddingTop: 0
    }, 500)
});

var s = new Date,
    a = 2 * (60 * s.getHours() + s.getMinutes()) + 2e3;
$(".count-bayer").html(a);



$(".call-form, .fixedtop__btn").on("click", function(t) {
    t.preventDefault();
    var n = $(this).attr("data-id"),
        e = $(n).offset().top - 400;
    $("body,html").animate({ scrollTop: e }, 1500)
});






