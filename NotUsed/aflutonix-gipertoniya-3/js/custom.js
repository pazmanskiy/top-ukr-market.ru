jQuery(document).ready(function ($) {
	$('.close_modal, .overlay').click(function () {
		$('.popup3, .popup4, .overlay').css({
			'opacity' : '0',
			'visibility' : 'hidden'
		});
		$('.popup3 > .fofm textarea').val('');
		$(':input', '.fofm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".fofm input[type=submit]").attr('disabled', 'disabled');
	});
	$('.call-me-button-head').click(function (e) {
		e.preventDefault();
		$('.popup3, .overlay').css({
			'opacity' : '1',
			'visibility' : 'visible'
		});
	});
	$(document).ready(function () {
		setTimeout(function () {
			$('.popup3, .overlay').css({
				'opacity' : '1',
				'visibility' : 'visible'
			});
		}, 15000);
	});
	
});
