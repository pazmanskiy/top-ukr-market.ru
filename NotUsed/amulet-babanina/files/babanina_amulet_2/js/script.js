$(document).ready(function() {
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var target = $(this).attr("href");
		$("html, body").animate({scrollTop: $(target).offset().top+"px"});
		return false;
	});

	/* slider */

	$(".reviews_list").owlCarousel({
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		navText: "",
		responsive: {
			0: {
				items: 1,
				margin: 0,
				nav: true,
				loop: true
			},
			640: {
				items: 2,
				margin: 20,
				nav: true,
				loop: true
			},
			960: {
				items: 3,
				margin: 20,
				nav: false,
				loop: false
			}
		}
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