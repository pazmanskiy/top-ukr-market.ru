$(function () {

    var $window = $(window),
        $isMobileW = window.innerWidth <= 1097 || false,
        $sliderMobile = $isMobileW || false,
        interval,
        $scrollTorig = $('.js-scroll-to'),
        $timeoutWrap = $('.js-timeout'),
        $timeoutHours = $timeoutWrap.find('.js-timeout-hours'),
        $timeoutMinutes = $timeoutWrap.find('.js-timeout-minutes'),
        $timeoutSeconds = $timeoutWrap.find('.js-timeout-seconds'),
        monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        nowDate = new Date(),
        nowDay = nowDate.getDate(),
        nowMonth = nowDate.getMonth(),
        deadline = new Date(nowDate.getFullYear(), nowMonth, nowDay + 1),

        getTimeRemain = function getTimeRemaining (endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor( (t/1000) % 60 ),
                minutes = Math.floor( (t/1000/60) % 60 ),
                hours = Math.floor( (t/(1000*60*60)) % 24 );

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        },

        initClock = function (e, _endtime) {
            var endtime = _endtime || e.data.deadline;
            interval = setInterval(function () {
                var t = getTimeRemain(endtime),
                    h = t.hours.toString(),
                    m = t.minutes.toString(),
                    s = t.seconds.toString(),
                    hWrap = $timeoutHours,
                    mWrap = $timeoutMinutes,
                    sWrap = $timeoutSeconds;

                hWrap.text(typeof h[1] === 'undefined' ? '0'+h : h);
                mWrap.text(typeof m[1] === 'undefined' ? '0'+m : m);
                sWrap.text(typeof s[1] === 'undefined' ? '0'+s : s);

                if (t.total <= 0) {
                    clearInterval(interval);
                }
            }, 1000);
        },

        checkMobileW = function () {
            $isMobileW = window.innerWidth <= 1097 || false;
        };

        // updateSlider = function () {
        //     if ($isMobileW && !$sliderMobile) {
        //         reviewSlider.params.slidesPerColumn = 1;
        //         reviewSlider.update();
        //         $sliderMobile = true;
        //     } else if (!$isMobileW && $sliderMobile) {
        //         reviewSlider.params.slidesPerColumn = 3;
        //         reviewSlider.update();
        //         $sliderMobile = false;
        //     }
        // };

    // Инициализация обработчиков при ресайзе
    $window.on('resize', checkMobileW);
    // $window.on('resize', updateSlider);

    // Timeout
    initClock(false, deadline);

    // Smooth Scroll
    $scrollTorig.on('click', function() {
        $.smoothScroll({
            speed: 400,
            scrollTarget: '#order'
        });
    });

    // Audio
    audiojs.events.ready(function() {
        var as = audiojs.createAll({
            css: false
        });
    });
    
    // Reviews Slider
    // var reviewSlider = new Swiper('.js-reviews', {
    //     centeredSlides: false,
    //     slidesPerView: 1,
    //     slidesPerColumn: $isMobileW ? 1 : 3,
    //     speed: 600,
    //     slideClass: 'js-reviews-slide',
    //     wrapperClass: 'js-reviews-items',
    //     slideActiveClass: 'reviews__item-wrapper_state_active',
    //     pagination: !$isMobileW ? '' : '.js-reviews-pagination',
    //     paginationClickable: true,
    //     bulletClass: 'reviews__bullet',
    //     bulletActiveClass: 'reviews__bullet_state_active'
    // });
});
