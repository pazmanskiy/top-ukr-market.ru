$(document).ready(function(){

	// -- scroll to -->
	$('.scroll').click(function(e) {
		e.preventDefault();
		var offsetTop = $($(this).attr('href')).offset().top;
		$('html, body').animate({scrollTop: offsetTop}, 1000);
	});

});