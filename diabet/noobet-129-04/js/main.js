


$("#gogogo").click(function() {
	$('html, body').animate({
		scrollTop: $("#cons").offset().top
	}, 700);
});




var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({triggerElement: "#cons", duration: "100%" })
					.addTo(controller)
					//.addIndicators() // add indicators (requires plugin)
					/*.on("enter", function (e) {
						$('#cons .counter .middle').countTo({from: 30, to: 3, speed: 100, refreshInterval: 1,});
					});*/
					
	$('.carousel-indicators li').on('click', function() {
	  $('.carousel').carousel(parseInt(this.getAttribute('data-to')));

	});
	

	
  
	