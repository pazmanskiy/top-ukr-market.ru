$(document).ready(function(){
//Function Change Prices
    var country_code = $('#user_country').val();
    function change_prices(code){
        var price_txt
        switch(code){
            case 'BLR': price_txt = ' бел.руб'; break;
            case 'RUS': price_txt = ' руб'; break;
            case 'KAZ': price_txt = ' тенге'; break;
            case 'UKR': price_txt = ' гривен'; break;
            case 'MDA': price_txt = ' лей'; break;
            case 'AZE': price_txt = ' манат'; break;
            case 'USA': price_txt = ' долларов'; break;
            case 'KGZ': price_txt = ' сом'; break;
            case 'GEO': price_txt = ' лари'; break;
            case 'EST': price_txt = ' евро'; break;
            case 'ARM': price_txt = ' драм';
        }
        
        $('.tot-amount').html('<span class="init_price-num">' + prices[code] + '</span> <span class="init_price-txt">'+price_txt+'</span>')
        
        if(oldPrices[country_code] != 0){
            $('.old-amount').html('<span class="init_price-num">' + oldPrices[code] + '</span> <span class="init_price-txt">'+price_txt+'</span>');
        }else{
            $('.old-amount').html('<span class="init_price-num">' + prices[code]*2 + '</span> <span class="init_price-txt">'+price_txt+'</span>');
        }
    }
    change_prices(country_code);
    
//END of Function Change Prices
//ONLOAD INIT PRICES
   
//END of ONLOAD INIT PRICES
//SELECT COUNTRY - CHANGE PRICES

    function change_country(country_code){
        var options = $('#country option');
        for(var i = 0; i < options.length; i++){
            $(options[i]).removeAttr('selected');
            if($(options[i]).attr('value') == country_code){
                $(options[i]).attr('selected', 'selected');
            }
        }    
    }
    
    change_country(country_code);
    
    $('select[name="country"]').on('change', function(){
        var country_code = $(this).find(':selected').val();
        change_country(country_code);
        change_prices(country_code);
    });
    
//END of SELECT COUNTRY - CHANGE PRICES
//FOCUS FORM
    $('.on_focus input[name="name"]').focus(function(){
        console.log($(this));
    });
    var forms = $('.order_form');
    var wh = $(window).height();
    $(document).on('scroll', function() {
        var this_form;
        for(var i = 0; i < forms.length; i++){
            if($(this).scrollTop() >= $(forms[i]).offset().top - wh + 300 && $(forms[i]).hasClass('on-focus') != true){
                $(forms[i]).addClass('on-focus').find('input[name="name"]').focus();
            }
        }
    });
    // $(forms).find('input[name="name"]').blur(function(){
    //     var this_sec = $(this).closest('section').attr('id');
    //     for(var i = 0; i < forms.length; i++){
    //         if($(forms[i]).closest('section').attr('id') != this_sec);
    //         $(forms[i]).removeClass('on-focus');
    //     }
    // });
//END of FOCUS FORM
//FORM VALIDATION
    $('.order_form').submit(function(){
        var valName = $(this).find('input[name="name"]').val();
        var valPhone = $(this).find('input[name="telephone"]').val();
    });
//END of FORM VALIDATION
//FOOTER
    $('.foot-btn').click(function(){
        $('.footer-holder').toggle('linear');
        $('.foot-btn').toggleClass('open');
        
        var destination = $(".foot-btn").offset().top;           
        $('body').animate({ scrollTop: destination }, 500);
    }); 
    
    $(".confident-link").click(function() {
        $(".hidden-conf").fadeIn(),
        $(window).height() < 760 && $(".conf-info").css({
            height: $(window).height() - 120,
            "overflow-y": "scroll"
        })
    });
    $(".close-conf").click(function() {
        $(".hidden-conf").fadeOut()
    })
//END of FOOTER
//COUNTER

var timer_box = document.getElementsByClassName('timer-box');
function initializeTimer() {
    if(timer_box.length == 0){
        return;
    }else{
        var endDate = new Date().setHours(23, 59, 59);	var currentDate = new Date();
        var seconds = (endDate-currentDate) / 1000;
        if (seconds > 0) {
            var minutes = seconds/60;
            var hours = minutes/60;
            minutes = (hours - Math.floor(hours)) * 60;
            hours = Math.floor(hours);
            seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
            minutes = Math.floor(minutes);
            
            setTimePage(hours,minutes,seconds);
            
            function secOut() {
            if (seconds == 0) {
                if (minutes == 0) {
                    if (hours == 0) {
                        showMessage(timerId);
                    }
                    else {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                }
                else {
                    minutes--;
                    seconds = 59;
                }
            }
            else {
                seconds--;
            }
            setTimePage(hours,minutes,seconds);
            }
            timerId = setInterval(secOut, 1000)
        }
        else {
            alert("Установленая дата уже прошла");
        }
    }
}

function setTimePage(h,m,s) {
	var timer_hour = document.querySelector(".timer-hour_num");
	var timer_minutes = document.querySelector(".timer-minutes_num");
	var timer_seconds = document.querySelector(".timer-seconds_num");

    for(var i = 0; i < timer_box.length; i++){
        var timer_hour = timer_box[i].querySelector(".timer-hour_num");
        var timer_minutes = timer_box[i].querySelector(".timer-minutes_num");
        var timer_seconds = timer_box[i].querySelector(".timer-seconds_num");
        timer_hour.innerHTML = h;
        timer_minutes.innerHTML = m;
        timer_seconds.innerHTML = s;
    }

}

function showMessage(timerId) {
	console.log("Время истекло!");
	clearInterval(timerId);
}

initializeTimer();

//END of COUNTER
//DELIVERY

(function(){
    var delivery_wrapper = $('.delivery-wrapper');
    if(delivery_wrapper.length == 0) return;

    var delivery_icons = '<li class="delivery-icons"><div></div><div></div><div></div></li>';
    var delivery_label = '<li class="delivery-label"><p>Доставка почтой</p><p>или курьером</p></li>';
    var delivery_confidence = '<li class="delivery-confidence"><p>Конфиденциальность гарантирована.</p><p>Оплата при получении</p></li>';
    var delivery_box = '<div class="delivery-box"><ul>' + delivery_icons + delivery_label + delivery_confidence + '</ul</div>';
    
    $(delivery_wrapper).html(delivery_box);
    change_delivery_country(country_code);
}());

//END of DELIVERY
//CHANGE DELIVERY

function change_delivery_country(value){
    $('.delivery-icons').each(function(i){
        $('.delivery-icons')[i].className = $('.delivery-icons')[i].className.replace(/\bdelivery_.*?\b/g, '');
    });
    console.log('true');
    $('.delivery-icons').addClass('delivery_' + value);
}

$('select[name="country"]').change(function(){
    var val = $(this).val();
    change_delivery_country(val);
});
//END of CHANGE DELIVERY
});