$(document).ready(function () {
	var mouse = true;
	var popUpBy = true;
	var checkCode = true;
	var todayBayVal = true;
	var bPhone = false;
	var mBrowser = true;
	var internetEx = true;
	var safariWin = false;
	var fireFox = true;
	function mouseMoved() {
		$("body").append('<div class="mouse"><div class="line_top mouse_moved"></div></div>');
		var flag = true;
		$('.mouse_moved').mouseover(function () {
			if (flag == true) {
				var displayPop = $(".call-back-head").css('display');
				var displayP = $(".call-back-phone").css('display');
				if (displayPop == 'none' && displayP == 'none') {
					$('.mouse-moved-up').show();
				}
				flag = false;
			}
		});
	};
	function popUp() {
		var linkToImg = $('.take').attr('src');
		window.onload = function () {
			var timeOut = 12000;
			var x_price = Number($('.x_price_current').html());
			var last = 60;
			var i = 0;
			var bay = 0;
			var total_price;
			var count = 0;
			var OneTimeOut = 48000;
			var fistShow = 0;
			var TwoTimeOut = 24000;
			function firstNumberPack() {
				$('.lastpack').html(last);
				$('.paced').html('шт.');
				$('.pacedNamed').html('упаковок');
			};
			function numberCase() {
				a = Math.floor(Math.random() * (400 - 100 + 1) + 300)
			};
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
			};
			setTimeout(function () {
				setInterval(function () {
					i++;
					if (i > 38)
						i = 1;
					$('.show-message__item:nth-child(' + i + ')').fadeIn(500).delay(6000).fadeOut(500);
				}, 24000);
				ShowMessage();
			}, 0);
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
				};
				if (last <= 5) {
					setTimeout(function () {
						$('.show-message__item').addClass('lost_position');
					}, timeOut);
					setTimeout(function () {
						$('.last-message').addClass('block_position');
					}, timeOut);
				};
			};
			firstNumberPack();
			setTimeout(lastpack, 23000);
			setTimeout(function () {
				$('.first-message').show();
			}, 2000);
			setTimeout(function () {
				$('.first-message').hide();
			}, 8000);
			var nameList = ['Анна Па*****', 'Алина Ер*****', 'Александра Ло****', 'Елена Бы****', 'Марина Ел****', 'Анна Мо****', 'Ксения Кр*****', 'Алена Бо****', 'Виктория Ка****', 'Маргарита Бе****', 'Анна Ры*****', 'Дарья Са*****', 'Алла Кр*****', 'Евгения Ко****', 'Антонина Пе****', 'Ирина Со****', 'Алена Во****', 'Валентина Бу****', 'Вика Др****', 'Валерия Ло****', 'Кристина Со****', 'Наталья Го*****', 'Марина Ма*****', 'Катерина Ля****', 'Анастасия Ле*****', 'Екатерина Во*****', 'Наталья Ло****', 'Валентина Ля****', 'Вероника Ан****', 'Викуся Пр*****', 'Мария Ша****', 'Василиса Ма****', 'Ольга Дм****', 'Виктория Ни****', 'Дарья Пе****', 'Татьяна Ко****', 'Валентина Ко****', 'Оля Са******', 'Лилия Ма*****', 'Ирина Пе*****', 'Анна Да*******', 'Анастасия Во****', 'Полина Гр****', 'Мария Ко****', 'Кристина До****', 'Юлия Пу****', 'Татьяна Ла****', 'Валерия Лу****', 'Анастасия Шп****', 'Алёна Ши****', 'Валерий Фе****', 'Владислав Ко****', 'Владимир Ма****', 'Валентин Ди****', 'Валерий Ще******', 'Иван Ба*****', 'Вячеслав Ку****', 'Михаил Ро*****', 'Сергей Во*****', 'Дмитрий Де*****', 'Вячеслав Шу****', 'Дима Ав*****', 'Денис Ми***', 'Евгений Ма*****', 'Виталий Ми****', 'Даниил Те*****', 'Влад Бу*****', 'Иван Гр*****', 'Алексей Ре*****', 'Владимир Су****', 'Вадим Тр*****', 'Вадим Га*****', 'Евгений Го****', 'Евгений Ба****', 'Сергей Жу***', 'Влад Че*****', 'Владислав Ни****', 'Виктор Че*****', 'Олег Як*****', 'Дмитрий Гл*****', 'Василий Кр****', 'Антон За****', 'Антон Бе****', 'Илья Со****', 'Сергей Ми****', 'Дмитрий Да****', 'Владислав Ра****', 'Дмитрий Вл*****', 'Иван Ма*****', 'Павел Пр*****', 'Никита Ки****', 'Максим Ша*****', 'Ярослав Ко****', 'Илья См*****', 'Андрей Ле****', 'Андрей Ни*****', 'Артём Ре****', 'Анатолий Ти*****', 'Ярослав За*****', 'Василий Гу****'],
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
					} else {
						$('.js-name').eq(k).html(nameList[randomNameIndex]);
						secondNameList = nameList[randomNameIndex];
						console.log(secondNameList);
					}
					indexName = indexName + 1;
				}
				console.log(indexName);
			}
			nameValue();
		};
	};
	function codeCheck() {
		var $code = $(".check_popup_code_input"),
		$message = $(".js-message"),
		$button = $(".button-popup-first");
		$button.on("click", function (ev) {
			ev.preventDefault();
			var $codeLenght = $(".check_popup_code_input").val().length;
			var codeValue = $code.val();
			var reg1 = new RegExp("[^0-9]*", "g"), // создаем регулярку, чтобы она выбрала все цифры
            codeValue = codeValue.replace(reg1, ''); // берем все цифры из некой переменной
			if (codeValue.length == 15) { // Если кол-во цифр = 15
				return $message.text("Заказанный Вами продукт является подлинным, пользуйтесь с удовольствием!");
            }
			else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  ') {
				return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
			} else {
				return $message.text("Введите, пожалуйста, код.");
			}
		});
	};
	function NowTime() {
		var d = new Date();
		var result = (d.getHours() * 60 + d.getMinutes()) * 2 + 2000;
		$('.todayBay').html(result);
	};
	function bluePhone() {
		
	}
	function mobileBrowser() {
		function safari_windows() {
			var ua = navigator.userAgent.toLowerCase();
			if (ua.indexOf('safari') != -1) {
				if (ua.indexOf('chrome') > -1) {
					var a = 1;
				} else {
					var tag_css = document.createElement('link');
					var basePath = window.cdn_path || '';
					tag_css.type = 'text/css';
					tag_css.rel = 'stylesheet';
					tag_css.href = basePath + "css/safari.css";
					var tag_head = document.getElementsByTagName('head');
					tag_head[0].appendChild(tag_css);
				};
			};
		};
		function firefox() {
			var browser = navigator.userAgent.toLowerCase();
			if (browser.indexOf('firefox') > -1) {
				var basePath = window.cdn_path || '';
				var tag_css = document.createElement('link');
				tag_css.type = 'text/css';
				tag_css.rel = 'stylesheet';
				tag_css.href = basePath + "css/firefox.css";
				var tag_head = document.getElementsByTagName('head');
				tag_head[0].appendChild(tag_css);
			} else {
				var b = 1;
			}
			return false;
		};
		function internet_explorer() {
			var basePath = window.cdn_path || '';
			var ua = window.navigator.userAgent;
			var msie = ua.indexOf("MSIE ");
			if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
				var tag_css = document.createElement('link');
				tag_css.type = 'text/css';
				tag_css.rel = 'stylesheet';
				tag_css.href = basePath + "css/ie.css";
				var tag_head = document.getElementsByTagName('head');
				tag_head[0].appendChild(tag_css);
			} else {
				var b = 1;
			}
			return false;
		};
		function checkBrowser() {
			if (internetEx == true) {
				internet_explorer();
			}
			if (safariWin == true) {
				safari_windows();
			}
			if (fireFox == true) {
				firefox();
			}
		};
		checkBrowser();
	};
	function check() {
		if (mouse == true) {
			mouseMoved();
		}
		if (popUpBy == true) {
			popUp();
		}
		if (checkCode == true) {
			codeCheck();
		}
		if (todayBayVal == true) {
			NowTime();
			setInterval(NowTime, 1000);
		}
		if (bPhone == true) {
			bluePhone();
		}
		if (mBrowser == true) {
			mobileBrowser();
		}
	};
	check();
	$(".show-message>div").on("click", function () {
		$(".show-message>div").addClass("popup-off");
	});
});
