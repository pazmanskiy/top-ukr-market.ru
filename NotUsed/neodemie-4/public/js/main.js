// Random Func
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
// Operator Online
function operatorOnline(min, max) {
    var op_on = randomInteger(min, max),
        op_raz = op_on - randomInteger(5, 9);

    $('.op_on').text(op_on);
    $('.op_raz').text(op_raz);
    setTimeout(operatorOnline, 15000, 35, 45);
}
// Ready
$(document).ready(function () {

    // Timer Init
    var storageCountdownReset = "countdownResetExov1",
        storageCountdownTime = "countdownTimeExov1",
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
    $('.countdown__wrap').countdown(countdownTime, function (event) {
        $(this).html(event.strftime('%H:%M:%S'));
        var $this = $(this).html(event.strftime(''
            + '<div class="countdown__item countdown__hour"><div class="countdown__block"> %H </div><div class="countdown__cap">Часов</div></div><div class="countdown__item countdown__minute"><div class="countdown__block">%M</div><div class="countdown__cap">Минут</div></div><div class="countdown__item countdown__second"><div class="countdown__block">%S</div><div class="countdown__cap">Секунд</div></div>'
        ));
    }).on('update.countdown', function (e) {
        countdownTime = e.finalDate.getTime();
        localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
        $('.countdown__wrap').countdown('stop');
    });

    $("button[data-toggle=scroll]").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('data-id'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 2000);
    });

    // Call Operator Online
    operatorOnline(35, 45);

    $('.bloc-9__slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [],
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.bloc-11__slider').owlCarousel({
        loop:true,
        nav:true,
        navText: [],
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});
// Ready End
