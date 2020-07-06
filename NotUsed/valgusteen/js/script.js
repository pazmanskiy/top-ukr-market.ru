$(document).ready(function() {

    $('.form-link').click(function() {
        $('html, body').animate({ scrollTop: $('.block14 .form-block').offset().top }, 600);
        return false;
    });

    $('.openmodal').click(function() {

        $('#apply').arcticmodal();

        return false;
    });


    $('.block11 .right-block form').submit(function() {
        return false;
    });


    setTimeout(function() {
        //  startMiniPopup();
    }, 10000);

    $('#slider2').tinycarousel();

    $('.confident-link').click(function() {
        $('.hidden-conf').show();
        if ($(window).height() < 760) {
            $('.conf-info').css({
                'height': ($(window).height() - 120),
                'overflow-y': 'scroll'
            });

        };


        return false;
    });
    $('.close-conf').click(function() {
        $('.hidden-conf').hide();
    });

    $('.block10 .left-block .form-block form').submit(function() {
        return false;
    });
    if ($('select').length) {} else {
        $('.c-s').css({ 'display': 'none' });
    }
    GetCount();

    $('.more-rew').click(function() {
        $('.block10 .item-block .more-item').slideDown(function() {
            $('.more-rew').click(function() {
                $('.block10 .item-block .more-more-item').slideDown(function() {
                    $('.more-rew').hide();
                });
            });
        });

    });

});

var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 30 * 60;
dateFuture = new Date(year, month - 1, day, hour, min, sec);

function GetCount() {
    amount = timerSec;
    timerSec = timerSec - 1;
    dateNow = new Date();
    delete dateNow;
    if (amount < 0) {
        $('.hours').html('00');
        $('.mins').html('00');
        $('.secs').html('00');
    } else {
        days = 0;
        hours = 0;
        mins = 0;
        secs = 0;
        out = "";
        days = 0;
        hours = 0;
        mins = Math.floor(amount / 60);
        secs = Math.floor(amount - mins * 60);
        if (days < 10) days = '0' + hours;
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        $('.hour1').html(hours.toString().charAt(0));
        $('.hour2').html(hours.toString().charAt(1));
        $('.min1').html(mins.toString().charAt(0));
        $('.min2').html(mins.toString().charAt(1));
        $('.sec1').html(secs.toString().charAt(0));
        $('.sec2').html(secs.toString().charAt(1));
        setTimeout("GetCount()", 1000);
    }
}

var online = 537;
var count = 23;
var currentPopup = 0;

function startMiniPopup() {

    if (currentPopup <= $('.popup-mini .item').length - 1) {
        var item = $('.popup-mini .item').eq(currentPopup);
        currentPopup++;

        if ($(item).hasClass('type1')) {
            count--;
            $('.count').html(count);
            $(item).show();

        }

        if ($(item).hasClass('type2')) {
            count--;
            $('.count').html(count);
            $(item).show();
        }

        if ($(item).hasClass('type4')) {
            online += Math.floor((Math.random() * 5) + 1);
            $('.online').html(online);
            $(item).show();
        }

        setTimeout(function() {
            $(item).hide();

            setTimeout(function() {
                startMiniPopup();
            }, Math.floor((Math.random() * 10) + 5) * 1000);
        }, 3000);

    }

}
