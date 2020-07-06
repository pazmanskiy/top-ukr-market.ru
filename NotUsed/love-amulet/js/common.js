$(document).ready(function(){
	
	var min = 0;
	var max = 6;
	
	setInterval(function(){
	    $('.features li .ft-icon-wrap').removeClass('anim');
	    var random = Math.floor(Math.random() * (max - min + 1)) + min;
	    
	    $($('.features li .ft-icon-wrap')[random]).addClass('anim');
	}, 5000)


	//POP-UP
	function show_popup(elem){
		if($(elem).hasClass('disabled')){
			return;
		}
		$('.pop-up-wrap').addClass('active');
		$('body').addClass('disabled');
		$(elem).addClass('active disabled');
	}
	function close_popup(elem){
		$(elem).removeClass('active');
		$(elem).addClass('active');
	}

	$(document).mouseleave(function(){
		if($('body').hasClass('disabled') == true){
			return;
		}else{
		    console.log('true');
			show_popup('#pop-up-close_wrap');
		}
	});
	
	$('.close-pop-up').click(function(){
	    $('.pop-up-wrap, .pop-up-box').removeClass('active');
		$('body, #pop-up-close_s2_wrap').removeClass('disabled active');
	});

	$('.pop-up-wrap').click(function(e){
		if($(e.target).closest('.pop-up').length == 0 || $(e.target).is('.close-popup')){
			$('.pop-up-wrap, .pop-up-box').removeClass('active');
			$('body, #pop-up-close_s2_wrap').removeClass('disabled active');
		}
	});


	$('.link-step-2').click(function(){
		$(this).closest('.pop-up-box').removeClass('active');
		show_popup('#pop-up-close_s2_wrap');
		if($(window).width() > 1024 ){
		    $('#pop-up-close_s2 input[name="name"]').focus();
		}
	});

	$('.link-to-form').click(function(e){
		$('.pop-up-wrap, #pop-up-close_s2_wrap').addClass('active disabled');
		$('body').addClass('disabled');
		if($(window).width() > 1024 ){
		    $('#pop-up-close_s2 input[name="name"]').focus();
		}
		e.preventDefault();
	});
	//END of POP-UP
    //SELECT
        var select = $('#sign_select')
        $('.selected').click(function(){
            $(select).slideToggle();
        });
        
        $('#sign_select li').click(function(){
            var value = $(this).text().trim();
            $('.selected').text(value);
            $('#hidden_sign').val(value).attr('value', value);
            $(select).slideUp();
        });
    //END of SELECT
    

$('body').click(function(e){
    if($(e.target).closest('.sign').length == 0){
        $('#sign_select').slideUp();
    }
});
});