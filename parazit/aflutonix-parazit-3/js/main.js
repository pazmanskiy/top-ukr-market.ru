﻿(function($){
    'use strict';
    //Отдельном выносим языки, для более простой локализации
    var Lang = {
        ru: {
            //Месяца
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            //Месяца в родительcком падеже
            monthsRp: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
            //Месяца в предложном падеже
            monthsPp: ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 'сентябре', 'октябре', 'ноябре', 'декабре'],
            maxPurchase: 'Больше всего заказов (_COUNT_) было _DATE_ _MONTH_ 2015 года.',
            stockInfoTitle: 'Более 100 000 продаж в ',
            stockInfoTime: 'Сроки проведения акции с _STARTDATE_ _STARTMONTH_ по _ENDDATE_ _ENDMONTH_'
        }
    };
    //Объявляем класс нашего лендинга
    var Landing = function () {
        this.nowDate = new Date();

        //Параметры загрузки лендинга
        this.params = {
            lang: 'ru', //локализация
            maxPurchase: 2419, //Максимальное кол-во покупок
            maxPurchaseDate: 2, //Количество дней назад
            startStockDate: 29, //Дней назад началась акция
            endStockDate: 1, //Дней через которые акция закончится
            lastPackTime: 15, //Секунд, через которое уменьшится количество оставшихся на складе упаковок
            countDownDiff: Math.ceil((24*60*60)-(this.nowDate.getHours() * 60 * 60 + this.nowDate.getMinutes() * 60 + this.nowDate.getSeconds())), //Количество секунд до конца таймера
            selectors: {
                countDown: '.landing__countdown', //Таймер
                maxPurcahesDate: '.landing__maxpurcashe', //Максимальное кол-во покупок
                stockInfo: '.landing__stockinfo',
                stockInfoTitle: '.landing__stockinfo_title',
                lastPack: '.landing__lastpack'
            }
        };
        //Стартуем таймер
        this.initCountDown();
        //Заполняем обман
        //Максимальное количество покупок
        this.initMaxPurcasheDate();
        //Даты проведения акции
        this.initStockInfo();
        //Уменьшаем количество lastpack
        this.initLastPack();
        this.initEvents();
    };
    //Список ивентов лендинга
    Landing.prototype.initEvents = function() {
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
    //Информация о дате проведения лендингов
    Landing.prototype.initStockInfo = function() {
        var lang = Lang[this.params.lang];
        var stockTitle = lang.stockInfoTitle + lang.monthsPp[this.nowDate.getUTCMonth()];

        var endStockDate = new Date(this.nowDate.getTime() + (this.params.endStockDate*24*60*60*1000));
        var startStockDate = new Date(this.nowDate.getTime() - (this.params.startStockDate*24*60*60*1000));
        var stockInfo = lang.stockInfoTime;
        stockInfo = stockInfo.replace('_STARTDATE_', startStockDate.getUTCDate());
        stockInfo = stockInfo.replace('_ENDDATE_', endStockDate.getUTCDate());
        stockInfo = stockInfo.replace('_STARTMONTH_', lang.monthsRp[startStockDate.getMonth()]);
        stockInfo = stockInfo.replace('_ENDMONTH_', lang.monthsRp[endStockDate.getMonth()]);

        $(this.params.selectors.stockInfoTitle).html(stockTitle);
        $(this.params.selectors.stockInfo).html(stockInfo);
    };

    //Максимальное количество покупок
    Landing.prototype.initMaxPurcasheDate = function() {
        var maxPurchaseDate = new Date(this.nowDate.getTime() - (this.params.maxPurchaseDate*24*60*60*1000));
        var htmlString = Lang[this.params.lang].maxPurchase;
        htmlString = htmlString.replace('_COUNT_', this.params.maxPurchase);
        htmlString = htmlString.replace('_DATE_', maxPurchaseDate.getUTCDate());
        htmlString = htmlString.replace('_MONTH_', Lang[this.params.lang].monthsRp[maxPurchaseDate.getUTCMonth()]);
        $(this.params.selectors.maxPurcahesDate).html(htmlString);
    };
    //Таймер countdown
    Landing.prototype.initCountDown = function() {
        var _this = this,
            endDate = new Date(this.nowDate.getTime() + this.params.countDownDiff * 1000);
        var countDownTimer = setInterval( function () {
            var diffDate = new Date(endDate.getTime() - Date.now()),
                h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0'+diffDate.getHours(),
                m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0'+diffDate.getMinutes(),
                s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0'+diffDate.getSeconds();
            var htmlTime = '<span class="hours">'+ h +'</span>'+
                '<span class="minutes">'+ m +'</span>'+
                '<span class="seconds">'+ s +'</span>';
            $(_this.params.selectors.countDown).html(htmlTime);
        }, 1000);
    };
    $(function() {
        window.landing = new Landing();
    });
})(jQuery);



$(document).ready(function(){



    $('.slider-main').bxSlider({
        controls:true
    });


    /* modal */
    $('.header-call').on('click', function(event) {
        event.preventDefault();
        $(".popup1").fadeIn(300);
    });
    $('.header-call-2').on('click', function(event) {
        event.preventDefault();
        $(".popup-second").fadeIn(300);
    });

    $('.modal').on('click', function(event) {
        event.preventDefault();
        $(".popup1").fadeOut(300);
        $(".popup-second").fadeOut(300);
    });




    var $code = $(".check_popup_code_input"),
        $message = $(".js-message"),
        $button = $(".button-popup-first");


 var codeValues = /^\d+$/;

$button.on("click", function (ev) {
    ev.preventDefault();
    var $codeLenght = $(".check_popup_code_input").val().length;
    var codeValue = $code.val();

    if (codeValues.test(codeValue) && $codeLenght==15){
        return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
    } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  '){
        return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
    }else{
        return $message.text("Введите, пожалуйста, код.");
    }

});

    
    
 

    $('html').mouseleave(function(){
        var displayP1 = $(".popup1").css('display');
        var displayP2 = $(".popup-second").css('display');
        if ( displayP1 == 'none' && displayP2 == 'none'){
            $('.modal_mouse_out').show();
        }
    });

    $('.mouse_moved').mouseover(function(){
        var displayPop = $(".popup1").css('display');
        var displayP = $(".popup-second").css('display');
        if ( displayPop == 'none' && displayP == 'none'){
            $('.modal_mouse_out').show();
        }
    });

    $('.modal_mouse_out .modal ').click(function(){
        $('.modal_mouse_out').addClass('hide');
    });
    $('.close-modal-mouse').click(function(){
        $('.modal_mouse_out').addClass('hide');
    });




});


//var $button = $('.js-button'),
//    $popUp = $('.js-popup'),
//    $popUpContent = $popUp.find('.js-popup__content');
//
//function showPopUp () {
//    $popUp.show();
//}
//function hidePopUp () {
//    $popUp.hide();
//}
//
//$button.on('click', showPopUp);
//$popUp.on('click', hidePopUp);
//$popUpContent.on('click', function(ev) {
//    ev.stopPropagation();
//});