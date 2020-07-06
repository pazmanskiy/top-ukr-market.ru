// is-countdown

$(document).ready(function () {
    // countdownStart
    var storageCountdownReset = "countdownResetMacho-4",
            storageCountdownTime = "countdownTimeMacho-4",
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

    $(".is-countdown").countdown(countdownTime, function (s) {
                $(this).html(s.strftime('<div>%H<span>часов</span></div><div>%M<span>минут</span></div><div>%S<span>секунд</span></div>'))
            }
    ).on('update.countdown', function (e) {
        countdownTime = e.finalDate.getTime();
        localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
        $('.countdown__wrap').countdown('stop');
    });

    $(".toform").on("click", function (t) {
        t.preventDefault();
        var n = $(this).attr("data-id"), e = $(n).offset().top - 400;
        $("body,html").animate({scrollTop: e}, 1500)
    })

});
