var head = $("head"),
    body = $("body"),
    fixedtopCap = "В рамках программы производителя «Чистая кожа»",
    fixedtopCapSM = "В рамках программы производителя «Чистая кожа»",
    fixedtopText = "купите комплекс от папиллом «Папинол» сегодня за <span class='new_price_val'>99</span> <span class='new_price_cur'>руб</span>.",
    fixedtopBtn = "Купить за <span class='new_price_val'>99</span> <span class='new_price_cur'>руб</span>!"

$( document ).ready(function() {
  // Вызываем скрипты
  head.append("<link rel='stylesheet' type='text/css' href='../bun/bun.css' />");
  // Func list
  function createFixedTop() {
    var mainFix = "<div class='fixedtop'><div class='fixedtop__wrap clearfix'>"
    + "<img src='../bun/logo.png' class='fixedtop__img'>"
    + "<p class='fixedtop__cap'>"+fixedtopCap
    +"<span class='fixedtop__text'>"+fixedtopText+"</span>"
    +"</p>"
    + "<p class='fixedtop__cap fixedtop__cap_sm'>"+fixedtopCap
    +"<span class='fixedtop__text'>"+fixedtopText+"</span>"
    +"</p>"
    + "<button class='fixedtop__btn'>"+fixedtopBtn+"</button>"
    + "</div></div>"
    body.prepend(mainFix);
  };
  function scrollBtn() {
    $('.fixedtop__btn').on('click',function (event) {
      event.preventDefault();
      var top = $('form:visible:last').offset().top;
      $('body,html').animate({scrollTop: top - 250}, 1500);
    });
  };
  // Call Func
  createFixedTop();
  scrollBtn();
  // End
  console.info('BunDone');
});
