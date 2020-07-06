$(document).ready(function() {
	$('.call-form').magnificPopup({
	  fixedContentPos: true,
	  callbacks: {
		beforeOpen: function() { $('html').addClass('mfp-helper'); },
		close: function() { $('html').removeClass('mfp-helper'); }
		}
	});
    $(".reviews_block").owlCarousel({
        navigation: true,
        loop: true,
        nav: false,
        items: 1,
        margin: 0
    });
    $(".reviews_form").submit(function() {
		$.ajax({
			type: "POST",
			data: $(this).serialize()
		}).success(function() {
			event.stopPropagation();
			$(this).find("input").val("");
			$(this).find("textarea").val("");
			alert("Спасибо за Ваш отзыв!");
			$(".reviews_form").trigger("reset");
		});
		return false;
	});
});