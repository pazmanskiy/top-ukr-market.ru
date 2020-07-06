jQuery(document).ready(function ($) {



    /* close modal */
    $('.close_modal, .icon-close').click(function () {
        $('.popup3').fadeOut(400).css('display', 'none');
    });
    /* MediaPlayer */
    $('.progression-single').mediaelementplayer({
        audioWidth: 400,
        audioHeight: 40,
        startVolume: 0.5,
        features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen']
    });


    $('.progression-playlist').mediaelementplayer({
        audioWidth: 400,
        audioHeight: 40,
        startVolume: 0.5,
        loop: false,
        features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume', 'playlist'],
        playlist: true,
        playlistposition: 'bottom'
    });


    /* BxSlider */
    $('.bxslider').bxSlider({
        adaptiveHeight: false,
        mode: 'fade'
    });

    /* CDT initc */
    function timer(){
        curr_time = new Date();
        curr_hour = curr_time.getHours();
        curr_min = curr_time.getMinutes();
        curr_sec = curr_time.getSeconds();
        hour = 23 - curr_hour;
        min = 60 - curr_min;
        sec = 60 - curr_sec;
        if(hour<10){
            hour = "0"+hour;
        }
        if(min<10){
            min = "0"+min;
        }
        if(sec<10){
            sec = "0"+sec;
        }
        if(hour == 24){
            hour = "00";
        }
        if(min == 60){
            min = "00";
        }
        if(sec == 60){
            sec = "00";
        }
        $(".hours").html(hour);

        var ctdOutDay = '';
        ctdOutDay += '<div class="cdt-item"><span class="cdt-number hour">' +hour+  '</span><span class="cdt-caption">Часов</span></div><div class="cdt-dots">:</div>';
        ctdOutDay += '<div class="cdt-item"><span class="cdt-number min">'  +min+   '</span><span class="cdt-caption">Минут</span></div><div class="cdt-dots">:</div>';
        ctdOutDay += '<div class="cdt-item"><span class="cdt-number sec">'  +sec+   '</span><span class="cdt-caption">Секунд</span></div>';
        $(".wrap-cdt").html(ctdOutDay);
    }
    timer();
    setInterval(function(){timer()},1000);


    /* responsive CDT */
    function responsiveCdt () {
        $(window).resize(function() {
            var bWidth = $('body').width();
            if (bWidth < 1300) {
                $('.cdt-option').removeClass('cdt-large');
            } else {
                if ( !$('.cdt-option').hasClass('cdt-large') ) {
                    $('.cdt-option').addClass('cdt-large');
                }
            }
        });

        var bodyW = $('body').width();
        if (bodyW < 1300) {
            $('.cdt-option').removeClass('cdt-large');
        }
    } responsiveCdt();

});