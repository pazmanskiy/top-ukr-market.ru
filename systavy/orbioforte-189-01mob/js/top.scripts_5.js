var phone_max_length = 20,
kmacb_manager_class = "kmacb__manager-woman3",
kmacb_form_selector = ".call-form";


$(function() {

	KMA.initCallback(20000);    

});
	
	
$(document).ready(function(){
	
	// Цели Скроллинга
	var scrolled = false;
	var hscrolled = false;
	var fullscroll = false;
	$(window).scroll(function(){                              // отслеживаем событие
		//console.log($(window).scrollTop());
		if($(window).scrollTop() > 6000 && !scrolled) {
			scrolled = true;
			//addGoal('land_scroll');
		}
		// 3500 - половина скрола (halfscroll)
		if($(window).scrollTop() > 500 && !hscrolled) {
			hscrolled = true;
			//addGoal('land_halfscroll');
		}
		// 3500 - половина скрола (fullscroll)
		if($(window).scrollTop() > 9500 && !fullscroll) {
			fullscroll = true;
			//addGoal('land_fullscroll');
		}
	});
	

	
	$(".goods_left_num").fadeOut().html(38).fadeIn();
	
	setInterval(function(){
		
		var num = parseInt($(".goods_left_num:first").html());
		
		var buy = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
		
		num -= buy;
		
		if( num <= 7 ) {
			num = 7;
		}
		
		if( Math.random() < 0.5 ) {
			$(".goods_left_num").fadeOut().html(num).fadeIn();
		}
		else {
			$(".goods_left_num").fadeOut().fadeIn();
		}
		
	}, 5000);
	
});
	
function date() {
	d = new Date();
	p = new Date(d.getTime());
	
	monthA = 'Января,Февраля,Марта,Апреля,Мая,Июня,Июля,Августа,Сентября,Октября,Ноября,Декабря'.split(',');
	$('.date_b').html('' + p.getDate() + ' ' + monthA[p.getMonth()]);    
}

$(document).ready(function(){
	date();
});


