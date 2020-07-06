$(document).ready(function() {
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

	initializeClock('timer', getDayEnd());
	
	var swiper = new Swiper(".swiper-container", {
	        pagination: ".swiper-pagination",
	        paginationClickable: !0,
	        nextButton: ".swiper-button-next",
	        prevButton: ".swiper-button-prev",
	        spaceBetween: 30
	    }),
	    swiper = new Swiper(".swiper-container-phone", {
	        nextButton: ".swiper-button-next-phone",
	        prevButton: ".swiper-button-prev-phone",
	        spaceBetween: 30
	    });
});
