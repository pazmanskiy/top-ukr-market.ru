count_class = '.count-people';						// Класс "Уже купили сегодня"
lastpack_class = '.lastpack';							// Класс "Осталось товаров со скидкой"

/* Сообщение "Количество посетителей на сайте"" */
message02 = '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id3"></span></p></div>';
/* Сообщение "Заказ обратного звонка"" */
message03 = '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-callback"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заявку на обратный звонок</p></div>';
/* Сообщение "Осталось 5 упаковок"" */
message04 = '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span style="font-size: 16px;">Осталось <span class="pacedNamed"></span> по акции<br><span style="color: red;font-size: 20px;font-weight: bold;"><span style="color: red;">5</span></span> шт.</span></p></div>';

flag_phone     = true;			// флажок для показа между заказами сообщения о том, кто сделал заказ телефонного звонка
flag_five      = true;			// флажок для показа для показа сообщения, что осталось 5 упаковок
flag_key       = true;

idleTimer = null;
idleState = false; // состояние отсутствия
idleWait  = 30000; // время ожидания в мс. (1/1000 секунды)

curr = $('.price_land_curr:first').text() || 'грн.';			// Валюта в документе

$(document).ready(function() {

	if (parseInt($('.price_land_s1:first').text()) > 0) {
		price = parseInt($('.price_land_s1:first').text());					// Цена за упаковку
	} else {
		price = 0;
	}
	
	/* Проверяем LocalStorage, есть ли запись по количеству пользователей и текущую дату и количество оставшихся упаковок */
	var cp       = first_count();;								// Количество сделавших заказ сегодня  (cp = count people)
	var dateNow  = new Date();										// Текущая дата
	var dayNow   = parseInt(dateNow.getDate());		// Текущий день
	var lastpack = '27';													// Количество оставшихся упаковок
	var steppack = [4, 4, 4, 5, 5];								// Устанавливаем шаги итераций (на сколько уменьшать упаковки) (sp = step pack)

	if (localStorage.getItem('___cp')) {								// Проверяем LocalStorage, есть ли запись о количестве посетителей сегодня
		tm = parseInt(localStorage.getItem('___tm'));					//Считываем записанный день из LocalStorage

		if (dayNow - tm == 0) {															// Проверяем, когда была сделална запись - сегодня или нет
			cp = localStorage.getItem('___cp');									// Считываем из LocalStorage количество людей сделавших заказ сегодня
			lastpack = localStorage.getItem('___lp');						// Считываем из LocalStorage количество оставшихся упаковок (lp = last pack)
		} else {																						// если запись не сегодняшняя, то считаем всё заново
			setLS(dayNow, lastpack, steppack, cp);
		}
	} else {																						// Если в LocalStorage нет записи о количестве людей, то устанавливаем первоначальные значения
		setLS(dayNow, lastpack, steppack, cp);
	}

	$(count_class).text(cp);												// Запивываем в ленд количество людей, сделавших заказ сегодня
	$(lastpack_class).text(lastpack);								// Запивываем в ленд количество оставшихся упаковок

	/* Проверяем LocalStorage, есть ли запись по количеству пользователей и текущую дату  и количество оставшихся упаковок */

	/*2*/
	if ($(window).width() > 991) {
		/* Выход мышки */
		/*mouseMoved();*/
		/* Выход мышки */

		/* Показ формы заказа через 35 секунд*/
		/*setTimeout(function() {
			$.magnificPopup.open({
				items: {
					src: '#pu-form',
					type: 'inline'
				}
			});
		}, 30000);*/
		/* Показ формы заказа через 35 секунд*/
		/* Следим за пользователем, не нажимает ли он кнопку */
		$(document).bind('keydown', function(){
			if (flag_key) {
				clearTimeout(idleTimer); // отменяем прежний временной отрезок
				/*if (idleState) { 
					 $("body").append("<p>С возвращением!</p>");
				}*/
		 
				idleState = false;
				idleTimer = setTimeout(function(){ 
					// Действия на отсутствие пользователя
					flag_key = false;
					$.magnificPopup.open({
						items: {
							src: '#pu-form',
							type: 'inline'
						}
					});
					idleState = true; 
				}, idleWait);
			}
		});

		$("body").trigger("keydown");
		/* Следим за пользователем, не нажимает ли он кнопку */

	}

	/* Закрытие попапа пои клике */
	$('.show-message').on('click', function() {
		$('.show-message__item').fadeOut(100);
		setTimeout(function(){
			$('.show-message').empty();
		}, 200);
	});
	/* Закрытие попапа пои клике */

	/* Попап на заказы */
	setTimeout(	function() {
		popUp()
	}, 8000);


	/*2*/

 
});

/* Функция подсчета первоначального количества людей, сделавших заказ сегодня */
function first_count() {
	var d = new Date();

	var h = d.getHours();
	var m = d.getMinutes();
	var num_first = 100;
	var first_count_people = num_first + h * 12 + Math.floor(m / 5);

	return first_count_people;
}
/* Функция подсчета первоначального количества людей, сделавших заказ сегодня */

/*2*/

//Выход мышки
/*function mouseMoved() {
	if ($(window).width() > 479) {
		$("body").append('<div class="mouse"><div class="line_top mouse_moved"></div></div>');

		var flag = true;

		$('.mouse_moved').mouseover(function () {
			if( flag == true){
				$.magnificPopup.open({
					items: {
						src: '#pu-form2',
						type: 'inline'
					}
				});
				flag = false;
			}
			
		});
	};
};*/

//PopUp на заказы
function popUp() {	
	
	/* Сначала выводим попап с количеством посетителей на сайте*/
	var rp = rand(321, 769);							// Случайное число из диапазона 321-769 (rp = random people) - количество посетителй на сайте
	localStorage.setItem('___rp', rp);		// Записываем это количество в LocalStorage
	
	shwMsg(message02, '', rp);						// Показываем сначала количество посетителей на сайте
	/* Сначала выводим попап с количеством посетителей на сайте*/

	setTimeout(function() {
		var lp = parseInt(localStorage.getItem('___lp'));								/* Считываем количество упаковок */

		if (lp <= 5) {										// Если упаковок меньше или ранвно 5, то будем бесконечно показывать попапы Кто сделал заказ обратного звонка или Количество посетителей на сайте
			if (flag_five) {
				shwMsg(message04, '', 0);
				flag_five = false;
				setTimeout(function(){
					showPopupEnd();
				}, 12000);
			}
		} else {													// Если количество оставшихся упаковок больше 5, то показываем, что их покупают и увеличиваем количество людей сделавших заказ сегодня и уменьшаем количество оставшихся упаковок
			var sp = JSON.parse(localStorage.getItem('___sp'));							/* Считываем шаги итераций */
			showPopupBegin(lp, sp);
		}
	}, 12000);
		
};

/* Функция показывает Кто и какой сделал заказ*/
function showPopupBegin(lp, sp) {
	var name     = orderName();																		// Кто заказал
	var i_curent;
	var step;
	var summ;
	var cp;
	var endpack;
	var message01;

	if ((sp.length == 2) && (flag_phone)) {
		shwMsg(message03, name, 0);
		flag_phone = false;
		setTimeout(function(){
			endpack = lp;
			showPopupBegin(endpack, sp);
		}, 13000);
	} else {
		i_curent = Math.floor(Math.random()*(sp.length));			// Случайный индекс массива шагов
		step     = sp[i_curent];															// СЛучайный элемент массива шагов
		summ     = parseInt(price) * parseInt(step);							// Сумма заказа
		cp = parseInt(localStorage.getItem('___cp')) + 1;
		endpack  = lp - step;
		
		if ((price == 0) || (price == 1)) {
			message01 = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">' + name + '</span></span>, сделал(а) заказ полного курса</p></div>';
		} else {
			message01 = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">' + name + '</span></span>, сделал(а) заказ, заказано <span class="bay">' + step + '</span> <span class="paced">упаковок</span><br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">' + lp + '</span> <span class="blink_me">' + endpack + '</span></span></p></div>';
		}
		sp.splice(i_curent, 1);
		localStorage.setItem('___lp', endpack);
		localStorage.setItem('___sp', JSON.stringify(sp));
		localStorage.setItem('___cp', cp);

		$(count_class).text(cp);									// Запивываем в ленд количество людей, сделавших заказ сегодня
		$(lastpack_class).text(endpack);								// Запивываем в ленд количество оставшихся упаковок

		shwMsg(message01, '', 0)

		setTimeout(function() {
			if (endpack > 5) {
				showPopupBegin(endpack, sp);
			} else {
				if (flag_five) {
					shwMsg(message04, '', 0);
					flag_five = false;
					setTimeout(function(){
						showPopupEnd();
					}, 12000);
				} else {
					showPopupEnd();
				}
			}
		}, 13000);
	}
}
/* Функция показывает Кто и какой сделал заказ*/

/* Функция показывает попапы Сколько посетителей на сайте и кто сделал заказ на звонок */
function showPopupEnd() {
	var plus    = true;
	var name    = '';
	setInterval(function() {

		var rnd_arr = new Array(0, 1);
		var indx    = rnd_arr[Math.floor(Math.random()*(rnd_arr.length))];

		if (indx == 0) {						// Показываем количество посетителей на сайте
			kindx = rand(1, 33);
			rp = parseInt(localStorage.getItem('___rp'));
			if (plus) {
				rp   = rp + kindx;
				plus = false;
			} else {
				rp   = rp - kindx
				plus = true;
			}
			localStorage.setItem('___rp', rp);
			shwMsg(message02, '', rp);
		} else {										// Показываем кто сделал заказ на обратный звонок
			name = orderName();
			shwMsg(message03, name, 0);
		}

	}, 13000);	
}
/* Функция показывает попапы Сколько посетителей на сайте и кто сделал заказ на звонок */

/* Генерируем имя кто сделал заказ*/
function orderName() {
	var lastName = [
		'Анна'
		, 'Алина'
		, 'Александра'
		, 'Елена'
		, 'Марина'
		, 'Ксения'
		, 'Алена'
		, 'Виктория'
		, 'Маргарита'
		, 'Дарья'
		, 'Алла'
		, 'Евгения'
		, 'Антонина'
		, 'Ирина'
		, 'Валентина'
		, 'Вика'
		, 'Валерия'
		, 'Кристина'
		, 'Наталья'
		, 'Катерина'
		, 'Анастасия'
		, 'Екатерина'
		, 'Вероника'
		, 'Викуся'
		, 'Мария'
		, 'Василиса'
		, 'Ольга'
		, 'Татьяна'
		, 'Оля'
		, 'Лилия'
		, 'Полина'
		, 'Юлия'
		, 'Алёна'
		, 'Валерий'
		, 'Владислав'
		, 'Владимир'
		, 'Валентин'
		, 'Иван'
		, 'Вячеслав'
		, 'Михаил'
		, 'Сергей'
		, 'Дмитрий'
		, 'Дима'
		, 'Денис'
		, 'Евгений'
		, 'Виталий'
		, 'Даниил'
		, 'Влад'
		, 'Алексей'
		, 'Вадим'
		, 'Виктор'
		, 'Олег'
		, 'Василий'
		, 'Антон'
		, 'Илья'
		, 'Павел'
		, 'Никита'
		, 'Максим'
		, 'Ярослав'
		, 'Андрей'
		, 'Артём'
		, 'Анатолий'
	];

	var firstName = [
		'Па*****'
		, 'Ер*****'
		, 'Ло****'
		, 'Бы****'
		, 'Ел****'
		, 'Мо****'
		, 'Кр*****'
		, 'Бо****'
		, 'Ка****'
		, 'Бе****'
		, 'Ры*****'
		, 'Са*****'
		, 'Кр*****'
		, 'Ко****'
		, 'Пе****'
		, 'Со****'
		, 'Во****'
		, 'Бу****'
		, 'Др****'
		, 'Ло****'
		, 'Со****'
		, 'Го*****'
		, 'Ма*****'
		, 'Ля****'
		, 'Ле*****'
		, 'Во*****'
		, 'Ло****'
		, 'Ля****'
		, 'Ан****'
		, 'Пр*****'
		, 'Ша****'
		, 'Ма****'
		, 'Дм****'
		, 'Ни****'
		, 'Пе****'
		, 'Ко****'
		, 'Ко****'
		, 'Са******'
		, 'Ма*****'
		, 'Пе*****'
		, 'Да*******'
		, 'Во****'
		, 'Гр****'
		, 'Ко****'
		, 'До****'
		, 'Пу****'
		, 'Ла****'
		, 'Лу****'
		, 'Шп****'
		, 'Ши****'
		, 'Фе****'
		, 'Ко****'
		, 'Ма****'
		, 'Ди****'
		, 'Ще******'
		, 'Ба*****'
		, 'Ку****'
		, 'Ро*****'
		, 'Во*****'
		, 'Де*****'
		, 'Шу****'
		, 'Ав*****'
		, 'Ми***'
		, 'Ма*****'
		, 'Ми****'
		, 'Те*****'
		, 'Бу*****'
		, 'Гр*****'
		, 'Ре*****'
		, 'Су****'
		, 'Тр*****'
		, 'Га*****'
		, 'Го****'
		, 'Ба****'
		, 'Жу***'
		, 'Че*****'
		, 'Ни****'
		, 'Че*****'
		, 'Як*****'
		, 'Гл*****'
		, 'Кр****'
		, 'За****'
		, 'Бе****'
		, 'Со****'
		, 'Ми****'
		, 'Да****'
		, 'Ра****'
		, 'Вл*****'
		, 'Ма*****'
		, 'Пр*****'
		, 'Ки****'
		, 'Ша*****'
		, 'Ко****'
		, 'См*****'
		, 'Ле****'
		, 'Ни*****'
		, 'Ре****'
		, 'Ти*****'
		, 'За*****'
		, 'Гу****'
	];

	var ln = lastName[Math.floor(Math.random()*(lastName.length))];
	var fn = firstName[Math.floor(Math.random()*(firstName.length))];

	return ln + ' ' + fn;
}
/* Генерируем имя кто сделал заказ*/

/*Случайное число из заданного диапазона*/
function rand (min, max) {
	min = parseInt(min);
	max = parseInt(max);
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}

/* Вывод непосредственно самого попапа*/
function shwMsg(msg, name, onsite) {
	$('.show-message').append(msg);
	if (name != '') {
		$('.js-name').text(name);
	}
	if (onsite != 0) {
		$('#js-user-id3').text(onsite);
	}
	$('.show-message__item').fadeIn(500).delay(4000).fadeOut(500);
	setTimeout(function(){
		$('.show-message').empty();
	}, 5500);
}
/* Вывод непосредственно самого попапа*/

/* Записываем в LocalStorage первоначальные данные */
function setLS(dayNow, lastpack, steppack, cp) {
	localStorage.setItem('___cp', cp);																	// Записываем текущее количество людей на сайте в LocalStorage
	localStorage.setItem('___tm', dayNow);															// Записываем в LocalStorage текущий день
	localStorage.setItem('___lp', lastpack);														// Записываем в LocalStorage начальное количество упаковок
	localStorage.setItem('___sp', JSON.stringify(steppack));						// Записываем в LocalStorage шиги итераций	
}
/* Записываем в LocalStorage первоначальные данные */

/*2*/