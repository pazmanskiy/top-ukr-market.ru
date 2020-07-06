/* Begin call functions */
  // call all necessary functions for show messages feature
  function call_show_messages() {
    firstNumberPack();

    setTimeout(function() {
      setInterval(
        function() {
          i++;
          if (i > 38) i = 1;
          $('.show-message__item:nth-child(' + i + ')').fadeIn(500).delay(6000).fadeOut(500);
        }, 24000);
      ShowMessage();
    }, 0);

    setTimeout(lastpack, 23000);

    setTimeout(function() {
      $('.first-message').show();
    }, 2000);
    
    setTimeout(function() {
      $('.first-message').hide();
    }, 8000);

    nameValue();
  }

  // call all necessary functions for modal on mouse out feature
  function call_modal_mouse_out() {
    // webkit_moved();
    
    // firefox_moved();

    // internet_explorer_moved();*/

    // mouseleave event
    $('html').mouseleave(function() {
      mouse_leave();
    });

      // close modal_mouse_out event
      $('.modal_mouse_out .close-modal, .modal_mouse_out .close-img').click(function() {
          close_modal_mouse_out();
      });
  }

  // call all necessary functions for modal on phone block click feature
  function call_modal_phone() {
    // display phone block
    $('.cbh-phone').css('visibility', 'visible');
    
    // open modal_phone event
    $('.phone-call').click(function(e) {
      open_modal_phone(e);
    });

      // close modal_phone event
      $('.modal_phone .close-modal, .modal_phone .close-img').click(function(e) {
          close_modal_phone(e);
      });
  }
/* End call functions */


/* Begin modal_phone functions */
  // open modal_phone
  function open_modal_phone(e) {
    e.preventDefault();
    $(".modal_phone").fadeIn(300);
  };

  // close modal_phone
  function close_modal_phone(e) {
    e.preventDefault();
    $(".modal_phone").fadeOut(300);
  };  
/* End modal_phone functions */


/* Begin modal__mouse_out functions */
  // webkit_moved function
  function webkit_moved() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        $('html').mouseleave(function() {
          $('.modal_mouse_out').show();
        });
      }
      else {
        $('html').mouseleave(function() {
          $('.modal_mouse_out').show();
        });
      }
    };
  };

  // firefox_moved function
  function firefox_moved() {
    var browser = navigator.userAgent.toLowerCase();
    if (browser.indexOf('firefox') > -1) {
      $('.mouse_moved').mouseover(function() {
        $('.modal_mouse_out').show();
      });
    }
    else { // If another browser, return 0
      var b = 1;
    }
    return false;
  };

  // internet_explorer_moved function
  function internet_explorer_moved() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) { // If Internet Explorer, return version number
      $('.mouse_moved').mouseover(function() {
        $('.modal_mouse_out').show();
      });
    }
    else { // If another browser, return 0
      var b = 1;
    }
    return false;
  };

  // mouseleave function
  function mouse_leave() {
    var e = window.event;
    e = e.clientY;
    if (e < 10) {
        var displayed = $(".modal_phone").css('display');
        if (displayed == 'none') {
            $('.modal_mouse_out').show();
        }
        else {
            $('.modal_mouse_out').hide();
        }
    }
  };

  // close modal_mouse_out
  function close_modal_mouse_out() {
    $('.modal_mouse_out').addClass('hide-forever');
  };
/* End modal_on_mouse_out functions */


/* Begin show messages functions */
  var timeOut = 12000; // interval
  var x_price = Number($('.x_price_current').html()); // price
  var last = 60; // quantity
  var i = 0;
  var bay = 0;
  var total_price;
  var count = 0;
  var OneTimeOut = 48000;
  var fistShow = 0;
  var TwoTimeOut = 24000;

  // set quantity
  function firstNumberPack() {
    $('.lastpack').html(last); // remain quantity
    $('.paced').html('шт.'); // units
    $('.pacedNamed').html('упаковок'); // units named
  }

  function numberCase() {
    a = Math.floor(Math.random() * (400 - 100 + 1) + 300)
  }

  function ShowMessage() {
    i = 1;
    $('.show-message__item:nth-child(' + i + ')').fadeIn(0).delay(6000).fadeOut(0);

    numberCase();
    document.getElementById('js-user-id').innerHTML = a;
    numberCase();
    document.getElementById('js-user-id2').innerHTML = a;
    numberCase();
    document.getElementById('js-user-id3').innerHTML = a;
    numberCase();
    document.getElementById('js-user-id4').innerHTML = a;
    numberCase();
    document.getElementById('js-user-id5').innerHTML = a;
    numberCase();
    document.getElementById('js-user-id6').innerHTML = a;
  }

  function lastpack() {
    if (last > 5) {
      bay = (count == 0) ? 3 : (count == 1) ? 4 : (count == 2) ? 6 : (count == 3) ? 8 : (count == 4) ? 10 : (count == 5 || count == 9) ? 3 : (count == 6 || count == 10) ? 5 : (count == 7 || count == 8) ? 4 : 4;
      $('.blink').html(last);
      last = last - bay;
      count++;
      total_price = x_price * bay;
      $('.lastpack').html(last);
      $('.bay').html(bay);
      $('.blink_me').html(last);
      $('.x_price').html(total_price);
      $('.count').html(count);
      timeOut = (count == 3 || count == 5 || count == 8 || count == 10 || count == 12 || count == 15 || count == 17 || count == 20) ? OneTimeOut : TwoTimeOut;

      setTimeout(lastpack, timeOut, last);

    }

    if (last <= 5) {
      setTimeout(function() {
        $('.show-message__item').addClass('lost_position');
      }, timeOut);

      // display last message
      setTimeout(function() {
        $('.last-message').addClass('block_position');
      }, timeOut);
    }
  }

  // nameList array
  var nameList = 
  [
    //girl
    'Анна Па*****',
    'Алина Ер*****',
    'Александра Ло****',
    'Елена Бы****',
    'Марина Ел****',
    'Анна Мо****',
    'Ксения Кр*****',
    'Алена Бо****',
    'Виктория Ка****',
    'Маргарита Бе****',
    'Анна Ры*****',
    'Дарья Са*****',
    'Алла Кр*****',
    'Евгения Ко****',
    'Антонина Пе****',
    'Ирина Со****',
    'Алена Во****',
    'Валентина Бу****',
    'Вика Др****',
    'Валерия Ло****',
    'Кристина Со****',
    'Наталья Го*****',
    'Марина Ма*****',
    'Катерина Ля****',
    'Анастасия Ле*****',
    'Екатерина Во*****',
    'Наталья Ло****',
    'Валентина Ля****',
    'Вероника Ан****',
    'Викуся Пр*****',
    'Мария Ша****',
    'Василиса Ма****',
    'Ольга Дм****',
    'Виктория Ни****',
    'Дарья Пе****',
    'Татьяна Ко****',
    'Валентина Ко****',
    'Оля Са******',
    'Лилия Ма*****',
    'Ирина Пе*****',
    'Анна Да*******',
    'Анастасия Во****',
    'Полина Гр****',
    'Мария Ко****',
    'Кристина До****',
    'Юлия Пу****',
    'Татьяна Ла****',
    'Валерия Лу****',
    'Анастасия Шп****',
    'Алёна Ши****',
    //man
    'Валерий Фе****',
    'Владислав Ко****',
    'Владимир Ма****',
    'Валентин Ди****',
    'Валерий Ще******',
    'Иван Ба*****',
    'Вячеслав Ку****',
    'Михаил Ро*****',
    'Сергей Во*****',
    'Дмитрий Де*****',
    'Вячеслав Шу****',
    'Дима Ав*****',
    'Денис Ми***',
    'Евгений Ма*****',
    'Виталий Ми****',
    'Даниил Те*****',
    'Влад Бу*****',
    'Иван Гр*****',
    'Алексей Ре*****',
    'Владимир Су****',
    'Вадим Тр*****',
    'Вадим Га*****',
    'Евгений Го****',
    'Евгений Ба****',
    'Сергей Жу***',
    'Влад Че*****',
    'Владислав Ни****',
    'Виктор Че*****',
    'Олег Як*****',
    'Дмитрий Гл*****',
    'Василий Кр****',
    'Антон За****',
    'Антон Бе****',
    'Илья Со****',
    'Сергей Ми****',
    'Дмитрий Да****',
    'Владислав Ра****',
    'Дмитрий Вл*****',
    'Иван Ма*****',
    'Павел Пр*****',
    'Никита Ки****',
    'Максим Ша*****',
    'Ярослав Ко****',
    'Илья См*****',
    'Андрей Ле****',
    'Андрей Ни*****',
    'Артём Ре****',
    'Анатолий Ти*****',
    'Ярослав За*****',
    'Василий Гу****'
  ],
  NameCount = nameList.length - 1,
  $nameWrap = $('.js-show-name'),
  $name = $('.js-name');

  function nameValue() {
    var randomNameIndex = 0;
    var indexName = 0;
    var k = 0;
    var secondNameList = [];
    for (k = 0; k < 36; k++) {
      randomNameIndex = (Math.random() * NameCount).toFixed(0);
      if (nameList[randomNameIndex] == secondNameList) {
        randomNameIndex = (Math.random() * NameCount).toFixed(0);
      } 
      else {
        $('.js-name').eq(k).html(nameList[randomNameIndex]);
        secondNameList = nameList[randomNameIndex];
      }
      indexName = indexName + 1;
    }
  }
/* End show messages functions */