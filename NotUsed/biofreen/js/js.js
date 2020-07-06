$(document).ready(function(){
	var today = new Date();
	var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
	var dayTomorrow = tomorrow.getDate(); 
	/*if(dayTomorrow < 10)
		dayTomorrow = "0" + dayTomorrow;*/
	var monthTomorrow = tomorrow.getMonth() + 1; 
	/*if(monthTomorrow < 10)
		monthTomorrow = "0" + monthTomorrow;*/
	var yearTomorrow = tomorrow.getFullYear(); 

	var deadline = yearTomorrow + '-' + monthTomorrow + '-' + dayTomorrow;
	//console.log(deadline);
	initializeClock( deadline);

	$('.header-call-back a').click(function(){
		$('#overlay').fadeIn(200);
		$('#pop-up').fadeIn(200);
		return false;
	});

	$('#overlay').click(function(){
		$('#overlay').fadeOut(200);
		$('#pop-up').fadeOut(200);
		return false;
	});



  var slideNow = 1;
  var slideCount = $('#slidewrapper').children().length;
  var slideInterval = 3000;
  var navBtnId = 0;
  var translateWidth = 0;

  var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });

});

function initializeClock(endtime){
   var timeinterval = setInterval(function(){
   var t = getTimeRemaining(endtime);
   $('.hours').html(t.hours);
   $('.minutes').html(t.minutes);
   $('.seconds').html(t.seconds);
   /*clock.innerHTML = 'days: ' + t.days + '' +
    'hours: '+ t.hours + '
' +
    'minutes: ' + t.minutes + '
' +
    'seconds: ' + t.seconds;*/
   if(t.total<=0){
    clearInterval(timeinterval);
   }
  },1000);

  $("input[name='phone']").inputmask("+7(999)999-99-99"); 

}

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  if(seconds < 10)
    seconds = "0" + seconds;
  var minutes = Math.floor( (t/1000/60) % 60 );
  if(minutes < 10)
    minutes = "0" + minutes;
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  if(hours < 10)
    hours = "0" + hours;
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}