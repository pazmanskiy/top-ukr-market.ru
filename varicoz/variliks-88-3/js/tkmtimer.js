timerstart = 15913; 							/* Время в секундах. Начало отсчета. В данном случае это 4 часа 25 минут 13 секунд */
fl         = 0;										/* Флаг, нужен для анимации */
timerclass = '.other-timer';			/* Контейнеры с таймером*/

$(document).ready(function() {
	/* Создаем контейнеры для таймеров */
	if ($(timerclass).length > 0) {
		$(timerclass).append('<div class="timer-wrapper clearfix"><div class="digit clearfix"><div class="digit-items hours">Часов</div><div class="item hour tens"></div><div class="item hour ones"></div></div><div class="digit clearfix"><div class="digit-items minutes">Минут</div><div class="item minute tens"></div><div class="item minute ones"></div></div><div class="digit clearfix"><div class="digit-items seconds">Секунд</div><div class="item second tens"></div><div class="item second ones"></div></div></div>');
		
		/* Проверяем текущую дату */
		var now  = new Date();
		var dnow = parseInt(now.getDate());												// Получает текущий день

		if (localStorage.getItem('___dn')) {											// Если в localStorage есть запись о текущем дне (т.е. раньше пользователь заходил с этого компьютера на сайт)
			var dls = parseInt(localStorage.getItem('___dn'));			// читаем из localStorage информацию о дне (dn = day now)
			
			if ((dnow - dls) == 0) {																	// Если день не отличается от текущего
				timerstart = parseInt(localStorage.getItem('___ts'));		// то считываем информацию о записанном значении таймера (ts = timer start)
			} else {																									// иначе, т.е. если день отличается от текущего
				localStorage.setItem('___dn', dnow);										// в localStotage обновляем информацию о текущем дне
			}
		} else {																									// Иначе, если пользователь ни разу еще не заходил на сайт с этого компьютера, 
			localStorage.setItem('___dn', dnow);										// то добавляем в localStorage информацию о текущем дне
			localStorage.setItem('___ts', timerstart);							// и начальное время отсчета таймера
		}

		if (timerstart >= 0) {
			initTimer(timerstart);																							// Запускаем (инициализируем) наш таймер
		}

	}

});

/* Инициализация таймера */
function initTimer(ts) {
	var ht = 0;					/* Часы десятки (ht = hours ten) */
	var ho = 0;					/* Часы единицы (ho = hours one) */
	var mt = 0;					/* Минуты десятки (mt = minute ten) */
	var mo = 0;					/* Минуты единицы (mo = minute one) */
	var st = 0;					/* Секунды десятки (st = second ten) */
	var so = 0;					/* Секунды единицы (so = second one) */

	var h    = Math.floor( ts / 3600 ); 						/* Узнаем, сколько осталось часов */
	var most = ts % 3600;														/* Секунд без учета часов */
	var m    = Math.floor( most / 60);							/* Узнаем, сколько осталось минут */
	var sost = most % 60;														/* Секунд без учета часов и минут */
	var s    = sost;																/* Узнаем, сколько осталось секунд*/

	ht = Math.floor( h / 10 );					/* Часы десятки */
	ho = h % 10;												/* Часы единицы */
	mt = Math.floor( m / 10 );					/* Минуты десятки */
	mo = m % 10;												/* Минуты единицы */
	st = Math.floor( s / 10 );					/* Секунды десятки */
	so = s % 10;												/* Секунды единицы */
	
	setTime(ht, ho, mt, mo, st, so, fl);				/* Записываем полученные данные на ленд */
	changetime(ht, ho, mt, mo, st, so);					/* Заускаем рекурсивную функцию. Пока время на таймере не 0, она будет вызывать сама себя */
};

/* Рекурсивная функция обновления таймера*/
function changetime(ht, ho, mt, mo, st, so) {
	fl = 0;									// Обнуляем флаг
	
	/* Тут мне лениво пока описывать эти условия */
	/* Тут савсем не сложно, кому, если охота - разбирайтесь, если нет, то примите и поверте - Работает!!! */
	/* Может позже я и опишу все эти условия */
	/* Если вопросы возникнут - обращайтесь, думаю знаете как меня найти */
	if (so > 0) {
		so--;
		fl = 1;
	} else {
		if (st > 0) {
			so = 9;
			st--;
			fl = 2;
		} else {
			if (mo > 0) {
				so = 9;
				st = 5;
				mo --;
				fl = 3;
			} else {
				if (mt > 0) {
					so = 9;
					st = 5;
					mo = 9;
					mt--;
					fl = 4;
				} else {
					if (ho > 0) {
						so = 9;
						st = 5;
						mo = 9;
						mt = 5;
						ho--;
						fl = 5;
					} else {
						if (ht > 0) {
							so = 9;
							st = 5;
							mo = 9;
							mt = 5;
							ho = 9;
							ht--;
							fl = 6;
						} else {
							return false;
						}
					}
				}
			}
		}
	}
	
	/* Через каждую секунду мы обновляем запись на ленде в соответствии с текущем значением и заново вызываем рекурсивную функкцию */
	setTimeout(function() {
		setTime(ht, ho, mt, mo, st, so, fl);
		changetime(ht, ho, mt, mo, st, so)
	}, 1000);
}

/* Функция записи и анимирование таймера на ленде */
function setTime(ht, ho, mt, mo, st, so, fl) {
	if (fl == 1) {
		$('.second.ones').text(so);
		$('.second.ones').toggleClass('flip');
		setTimeout(function() {
			$('.second.ones').toggleClass('flip')
		}, 100);
	}
	if (fl == 2) {
		$('.second.ones').text(so);
		$('.second.tens').text(st);
		$('.second.ones, .second.tens').toggleClass('flip');
		setTimeout(function() {
			$('.second.ones, .second.tens').toggleClass('flip')
		}, 100);
	}
	if (fl == 3) {
		$('.second.ones').text(so);
		$('.second.tens').text(st);
		$('.minute.ones').text(mo);
		$('.second.ones, .second.tens, .minute.ones').toggleClass('flip');
		setTimeout(function() {
			$('.second.ones, .second.tens, .minute.ones').toggleClass('flip')
		}, 100);
	}
	if (fl == 4) {
		$('.second.ones').text(so);
		$('.second.tens').text(st);
		$('.minute.ones').text(mo);
		$('.minute.tens').text(mt);
		$('.second.ones, .second.tens, .minute.ones, .minute.tens').toggleClass('flip');
		setTimeout(function() {
			$('.second.ones, .second.tens, .minute.ones, .minute.tens').toggleClass('flip')
		}, 100);
	}
	if (fl == 5) {
		$('.second.ones').text(so);
		$('.second.tens').text(st);
		$('.minute.ones').text(mo);
		$('.minute.tens').text(mt);
		$('.hour.ones').text(ho);
		$('.second.ones, .second.tens, .minute.ones, .minute.tens, .hour.ones').toggleClass('flip');
		setTimeout(function() {
			$('.second.ones, .second.tens, .minute.ones, .minute.tens, .hour.ones').toggleClass('flip')
		}, 100);
	}
	if (fl == 6) {
		$('.second.ones').text(so);
		$('.second.tens').text(st);
		$('.minute.ones').text(mo);
		$('.minute.tens').text(mt);
		$('.hour.ones').text(ho);
		$('.hour.tens').text(ht);
		$('.second.ones, .second.tens, .minute.ones, .minute.tens, .hour.ones, .hour.tens').toggleClass('flip');
		setTimeout(function() {
			$('.second.ones, .second.tens, .minute.ones, .minute.tens, .hour.ones, .hour.tens').toggleClass('flip')
		}, 100);
	}
	if (fl == 0) {
		$('.second.ones').text(so);
		$('.second.tens').text(st);
		$('.minute.ones').text(mo);
		$('.minute.tens').text(mt);
		$('.hour.ones').text(ho);
		$('.hour.tens').text(ht);
	}

	/* Записываем в localStorage текущее значение таймера */
	sec = (ht * 10 + ho) * 3600 + (mt * 10 + mo) * 60 + (st * 10 + so);
	localStorage.setItem('___ts', sec);
}