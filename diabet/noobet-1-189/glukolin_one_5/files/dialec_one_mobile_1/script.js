$(document).ready(function() {
  // Инициализация таймера
  initializeClock('timer', deadline);

  // Смена цены при смене страны
  $('[name="country"]').on('change', function() {
    var geoKey = $(this).find('option:selected').val();
    var data = $jsonData.prices[geoKey];
    var price = data.price;
    var oldPrice = data.old_price;
    var currency = data.currency
    $("[value = "+geoKey+"]").attr("selected", "selected");

    $('.new-cost').text(price+" "+currency);
    $('.old-cost').text(oldPrice+" "+currency);
  });

  // Плавный скролл
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