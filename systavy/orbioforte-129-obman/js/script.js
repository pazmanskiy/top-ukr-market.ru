$(function () {

  $('.screenLock').css({ height: $(document).height() + "px" });

  $('a.order-btn').click(function () {

    $(this).closest('form').submit();

    return false;

  });

  $('.close').click(function () {

    $('.screenLock').fadeOut(300);

  })

  var flag = true;

  $(window).mouseout(function (e) {

    if (e.pageY - $(window).scrollTop() < 1 && flag == true) {

      $('.screenLock').fadeIn(300);

      flag = false;

    }

  })

});

$('.show-img').click(function (event) {

  var text = $(this).html() == 'Показать' ? 'Скрыть' : 'Показать';

  $(this).html(text);

  $(this).parent().parent().find('.shock-img').toggleClass('show');

});

setTimeout(function () {
  var flag = true;
  $(window).mouseout(function (e) {
    if (e.pageY - $(window).scrollTop() < 1 && flag == true) {
      $('.fadepopup, .eoxp').fadeIn(300);
      $('.eeee').fadeIn(300);
      flag = false;
    }
  })
}, 15000);

$('div.close').click(function () {
  $('.fadepopup').css('display', 'none');
  $('.eeee').css('display', 'none');
})



var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
function spin() {
  if (wheel.classList.contains('rotated')) {
    resultWrapper.style.display = "block";
  } else {
    wheel.classList.add('super-rotation');
    setTimeout(function () {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function () {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();
    }, 10000);
    wheel.classList.add('rotated');
  }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  var _href = "#roulette";
  $("html, body").animate({
    scrollTop: $(_href).offset().top
  }, 800);
  // $('body,html').animate({ scrollTop: top }, 800);
});

var time = 600;
var intr;
function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  $("#min").html("0" + mins);
  $("#sec").html(secs);
}