// Таймер
var hour_s = '00';
var minutes_s = 45;
var seconds_s = 00;     

function act_timer(){
  seconds_s--;
  if(seconds_s==-01){ seconds_s=59;minutes_s=minutes_s-1; } else minutes_s=minutes_s;
  if(seconds_s<=9) seconds_s="0" + seconds_s;
  if(minutes_s=='00' && seconds_s=='00') { minutes_s=20; seconds_s=00; }
  minutes_sh = minutes_s;
  if(minutes_s < 10) minutes_sh = '0'+ minutes_s;   
  var timesBox = '\
    \<span class="digits">'+hour_s+'</span>\
    \<span class="digits">'+minutes_sh+'</span>\
    \<span class="digits">'+seconds_s+'</span>';
    
  $('.time').html(timesBox);
  setTimeout("act_timer()", 1000);
}
       
        

$(document).ready(function(){
  act_timer();
  
  // Плавный скролл
  $("a").click(function (e) {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
    e.preventDeafult();
  }); 
    
  // Слайдер коментов 
  $('.slider').bxSlider({   
    slideWidth: 860,
    pager: false,
    hideControlOnEnd: true  
  });

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });
});

