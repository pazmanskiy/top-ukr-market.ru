var days_s = '01';
		var hour_s = '11';
		var minutes_s = 41;
		var seconds_s = 55;		
		function act_timer(){
		    seconds_s--;
		    if(seconds_s==-01){seconds_s=59; minutes_s=minutes_s-1;}
		    else minutes_s=minutes_s;
		    if(seconds_s<=9) seconds_s="0" + seconds_s;
		    if(minutes_s=='00' && seconds_s=='00') { minutes_s=20; seconds_s=00; }
		    minutes_sh = minutes_s;
		    if(minutes_s < 10) minutes_sh = '0'+ minutes_s;		    
		    $('.time').html("<div class='digits'>"+hour_s+"</div>"+"<div class='digits'>"+minutes_sh+"</div>"+"<div class='digits'>"+seconds_s+"</div>");
		    setTimeout("act_timer()", 1000);
		}

	$(document).ready(function(){			
	act_timer();


	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
			}
		}
	});

	
	
});
