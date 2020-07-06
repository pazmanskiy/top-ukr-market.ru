
(function ($) {
    'use strict';
    //Объявляем класс нашего лендинга
    var Landing = function () {
        this.nowDate = new Date();
        //Параметры загрузки лендинга
        this.params = {
            countDownDiff: Math.ceil((24 * 60 * 60) - (this.nowDate.getHours() * 60 * 60 + this.nowDate.getMinutes() * 60 + this.nowDate.getSeconds())), //Количество секунд до конца таймера
            lastPackTime: 15, //Секунд, через которое уменьшится количество оставшихся на складе упаковок
            selectors: {
                countDown: '.landing__countdown', //Таймер
                navigation: '.landing__navigation', //Попапы
                scroll:'.landing__scroll',
                lastPack: '.landing__lastpack'
            }
        };
        //Стартуем таймер
        this.initCountDown();
        //Уменьшаем количество lastpack
        this.initLastPack();
        this.initEvents();

    };
    //Список ивентов лендинга
    Landing.prototype.initEvents = function () {
        this.initSliderAuto();
        this.initSlider();
        $(this.params.selectors.scroll).on('click',$.proxy(this.scroll,this));
        $(this.params.selectors.navigation).on('mouseenter', 'a', this.popup).on('mouseleave', 'a', this.popup);
        $('body').on('click','.scroll', $.proxy(this.scroll,this));
        
    };
    //Таймер countdown
    Landing.prototype.initCountDown = function () {
        var _this = this,
            endDate = new Date(this.nowDate.getTime() + this.params.countDownDiff * 1000);
        var countDownTimer = setInterval(function () {
            var diffDate = new Date(endDate.getTime() - Date.now()),
                h = (diffDate.getHours() - 3 > 9) ? diffDate.getHours() - 3 : '0' + (diffDate.getHours() - 3),
                m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0' + diffDate.getMinutes(),
                s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0' + diffDate.getSeconds();

            // h = new String(h);
            // m = new String(m);
            // s = new String(s);
            var htmlTime = '<span class="hours">'+h+'</span><span class="minutes">'+m+'</span><span class="seconds">'+s+'</span>';

            $(_this.params.selectors.countDown).html(htmlTime);
        }, 1000);
    };
    //Всплывающие окна
    Landing.prototype.popup = function (event) {
        var $target = $(event.currentTarget);
        console.log($target);
        var $popup = $target.next('div.popup');
        $popup.is(':visible') ? $popup.hide() : $popup.show();
    };
    // скрролл к атрибуту href
    Landing.prototype.scroll = function(event){
        var $target = $(event.currentTarget).attr('href');
        $('html, body').animate({scrollTop:$($target).offset().top+80}, 1000);
        return false;
    };
    //Уменьшаем количество last-pack
    Landing.prototype.initLastPack = function() {
        var _this = this;
        var lastPackTimer = setTimeout(function() {
            $(_this.params.selectors.lastPack).each(function (index, elem){
                var val = parseFloat($(elem).text(), 10);
                $(elem).html((val-1));
            });
        }, this.params.lastPackTime * 1000);
    };
     //Инициализация слайдера
    Landing.prototype.initSliderAuto= function(){
        $('.slider').bxSlider({
            pager: true,
            controls: false,
            auto: true
        });
    };
     //Инициализация слайдера 2
    Landing.prototype.initSlider= function(){
        $('.slider_text').bxSlider({
            slideWidth: 272,
            minSlides:3,
            maxSlides:3,
            slideMargin: 15,
            adaptiveHeight: true,
            pager: true
        });
    };


    $(function () {
        window.landing = new Landing();
    });
})(jQuery);