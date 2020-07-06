$(document).ready(function() {
    $(function() {
        // countdownStart
        var storageCountdownReset = "countdownResetPoplavok",
            storageCountdownTime = "countdownTimePoplavok",
            countdownResetTimeVal = 41,
            nowDateTime = new Date().getTime(),
            countdownReset = localStorage.getItem(storageCountdownReset);
        if (countdownReset == null) {
            localStorage.setItem(storageCountdownReset, nowDateTime)
        } else {
            if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
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

        $(".countdown").countdown(countdownTime, function(s) {
            $(this).html(s.strftime('' +
                '<div class="countdown__item hour">%H</div>' +
                '<div class="countdown__item minute">%M</div>' +
                '<div class="countdown__item second">%S</div>'
            ));
        }).on('update.countdown', function(e) {
            countdownTime = e.finalDate.getTime();
            localStorage.setItem(storageCountdownTime, countdownTime);
        }).on('finish.countdown', function(e) {
            $('.countdown').countdown('stop');
        });
        // countdownEnd
    })


    $("a.zakaz_btn").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - 0 + 'px';
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 1000);
    return false;
});

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: 1
});


$(window).resize(function() {
    if ($(window).width() <= '480') {
        $('.desktop footer .form').removeAttr("id");
        $('.mobile footer .form').attr("id", 'form');
    } else {
        $('.mobile footer .form').removeAttr("id");
        $('.desktop footer .form').attr("id", 'form');
    }

});

if ($(window).width() <= '480') {
    $('.desktop footer .form').removeAttr("id");
    $('.mobile footer .form').attr("id", 'form');
} else {
    $('.mobile footer .form').removeAttr("id");
    $('.desktop footer .form').attr("id", 'form');
}


})