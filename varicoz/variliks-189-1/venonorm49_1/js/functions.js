$(document).ready(function(){
	    // таймер обратного отсчета, до 00:00:00
    var now = new Date(),
        secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
    $('.timer').countdown({
        until: (24 * 60 * 60 - secPassed),
        labels: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часы', 'Минуты', 'Секунды'],
        labels1: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часы', 'Минуты', 'Секунды'],
        format: 'HMS',
        layout: '<div class="timebox"><div class="black_bg">{hnn}</div></div><div class="timebox"><div class="black_bg">{mnn}</div></div><div class="timebox"><div class="black_bg">{snn}</div></div>'
    });

	$(function() {
	    $('a', $('li', $('.delivery'))).hover(function(){
	        $(this).siblings('p').slideToggle('fast');
	    });
	});
	$('.scrollto').on('click', function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $($(this).attr('href') ).offset().top
		}, 1000);
	});
	$('.close').click(function(){
		$('.plank').slideUp(250, function(){$('.plank').fadeOut(250)});		
		return false;
	});
	
	$('.goorder').click(function(){
		$('.plank').slideUp(250, function(){$('.plank').fadeOut(250)});		
	});
	
	lastpack(10);
});

function lastpack(last)
{
	if (last > 5)
	{
		last--;	
		$('.lastpack').html(last);		
		setTimeout(lastpack, 60000, last);
	}
}
