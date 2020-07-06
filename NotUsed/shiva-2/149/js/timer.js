﻿window.onload = function () {
	initializeTimer(); // вызываем функцию инициализации таймера
};
function initializeTimer() {
	var currentDate = new Date(); // получаем текущую дату
	
	var currentDay = currentDate.getDate();
	var currentMonth = currentDate.getMonth();
	var currentYear = currentDate.getFullYear();
	
	var endDate = new Date(currentYear, currentMonth, currentDay + 1, 0, 0); // получаем дату истечения таймера
	var seconds = (endDate - currentDate) / 1000; // определяем количество секунд до истечения таймера
	if (seconds > 0) { // проверка - истекла ли дата обратного отсчета
		var minutes = seconds / 60; // определяем количество минут до истечения таймера
		var hours = minutes / 60; // определяем количество часов до истечения таймера
		minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
		hours = Math.floor(hours); // целое количество часов до истечения таймера
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
		minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе
		
		setTimePage(hours, minutes, seconds); // выставляем начальные значения таймера
		
		function secOut() {
			if (seconds === 0) { // если секунду закончились то
				if (minutes === 0) { // если минуты закончились то
					if (hours === 0) { // если часы закончились то
						initializeTimer();
					} else {
						hours--; // уменьшаем кол-во часов
						minutes = 59; // обновляем минуты 
						seconds = 59; // обновляем секунды
					}
				} else {
					minutes--; // уменьшаем кол-во минут
					seconds = 59; // обновляем секунды
				}
			} else {
				seconds--; // уменьшаем кол-во секунд
			}
			setTimePage(hours, minutes, seconds); // обновляем значения таймера на странице
		}
		timerId = setInterval(secOut, 1000); // устанавливаем вызов функции через каждую секунду
	} else {
		initializeTimer();
	}
}

function setTimePage(h, m, s) { // функция выставления таймера на странице
	if(h < 10) {
		$('.timer .hours').text("0" + h);
	}
	else {
		$('.timer .hours').text(h);
	}
	if(m < 10) {
		$('.timer .minutes').text("0" + m);
	}
	else {
		$('.timer .minutes').text(m);
	}
	if(s < 10) {
		$('.timer .seconds').text("0" + s);
	}
	else {
		$('.timer .seconds').text(s);
	}
	
	
	
}

function showMessage(timerId) { // функция, вызываемая по истечению времени
	alert("Время истекло!");
	clearInterval(timerId); // останавливаем вызов функции через каждую секунду
}