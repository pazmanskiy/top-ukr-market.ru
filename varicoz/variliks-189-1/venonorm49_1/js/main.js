$(function() {
	$('.fancybox').fancybox();
	$('.green-table-list').each(function(){
		$(this).listSlide();
	});
});
$.fn.listSlide = function(){
	var show = 1;
	$(this).find('li').slice(show).hide();
	$(this).find('.green-table-action').on('click',function(){
		if (!$(this).hasClass('active')) {
			$(this).parent('.green-table-list').find('li').slideDown(300);
			$(this).addClass('active').html('Cвернуть');
		}else{
			$(this).parent('.green-table-list').find('li').slice(show).slideUp(300);
			$(this).removeClass('active').html('Подробнее...');
		};
	});
};