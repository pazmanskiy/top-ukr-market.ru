var isMobile = {
    opera: function() {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    mobile: function() {
      return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
    }
  };
  if (!isMobile.opera()) {
    if (!isMobile.mobile()) {
      $('input[name="name"]').inputmask();
    }
    $('input[name="phone"]').inputmask();
  }
  var phone = $('input[name="phone"]');
  var form =  $('form');
  var ukrainePhoneCodes = [
    '43','44', '45', '48', '32', '50','51','56','57', '95','64', '66', '99','61','62', '63', '73', '93', '68', '67', '96', '97', '98', '91', '92', '94','89', '41', '34', '52', '33', '53', '36', '54', '35', '31', '47', '46', '37'
  ];

  form.on('submit', function (e) {
    var phoneNumberEl = $(e.target).find('input[name="phone"]');
    var phoneNumber = $(phoneNumberEl).val();
    var clientCode = phoneNumber.substr(0, 2);

    if(ukrainePhoneCodes.indexOf(clientCode) >= 0 && phoneNumber.length === 9) {
      phone.attr('placeholder','Телефон');
      return
    }

    phone.addClass('red');
    phone.attr('placeholder','Вы набрали неверный номер ');
    phone.val('');

    return false
  })

  // -------------------------------------------------------------



// ---------------------------------------------------------
  $('a').click(function (){
    var destination = $('#formScroll').offset().top;
    jQuery("html, body").animate({scrollTop: destination}, 800);
    return false;
  })

