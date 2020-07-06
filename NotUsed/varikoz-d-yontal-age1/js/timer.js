function getCookies(key) {
	var result = {};
	var cookies = document.cookie?document.cookie.split('; '):[];
	for (var i = 0, l = cookies.length; i < l; i++) {
		var parts = cookies[i].split('=');
		var name = parts.shift();
		var cookie = parts.join('=');

		result[name] = cookie;
	}
	if (key === undefined)
		return result;
	else 
		return result[key];
}
function setCookie(key, value, options) {
	options = $.extend({}, options);
	return (document.cookie = [
		key,		'=',	value,';',
		'expires',	'=',	options.expires?options.expires:''+';',
		'path',		'=',	options.path?options.path:'/'+';',
		'domain',	'=',	options.domain?options.domain:''+';',
		options.secure?'secure=;':''
	].join(''));
	
}
function delCookie(key) {
	var date = new Date(0);
	return (document.cookie = [
		key,		'=',	';',
		'expires',	'=',	date.toUTCString()+';',
		'path',		'=',	'/;',
		'domain',	'=',	';'
	].join(''));
}
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setTime(options, rewrite) {
	if (isNaN(options.fixedTime) && isNaN(options.fixedTime) && isNaN(options.endTime))
		return false;

	if (rewrite == true) {
		delCookie('stime');
	}

	var stime = getCookies('stime');
	if (stime === undefined) {
		if (isNaN(options.fixedTime)) {
			stime = [rand(options.startTime, options.endTime), Math.floor(Date.now() / 1000)];
		} else {
			stime = [options.fixedTime, Math.floor(Date.now() / 1000)];
		}
		setCookie('stime', stime.join('|'));
	} else {
		stime = stime.split('|');
	}
	return stime;
}
$.fn.Timer = function(options) {
	var stime = setTime(options);

	if (stime === false)
		return false;

	$(this).each(function(index) {
		var $this = $(this);

		setInterval(function(e) {
			var timeLeft = (parseInt(stime[0]) + parseInt(stime[1])) - Math.floor(Date.now() / 1000);

			if (timeLeft < 0) {
				stime = setTime(options, true);
				var timeLeft = (parseInt(stime[0]) + parseInt(stime[1])) - Math.floor(Date.now() / 1000);
			}

			var hours   = Math.floor(timeLeft / 3600);
			var minutes = Math.floor((timeLeft - (hours * 3600)) / 60);
			var seconds = timeLeft - (hours * 3600) - (minutes * 60);

			if (hours   < 10) {hours   = '0'+hours;}
			if (minutes < 10) {minutes = '0'+minutes;}
			if (seconds < 10) {seconds = '0'+seconds;}

			if ($this.children('*').length) {
				if ($this.children('*').eq(0).children('*').length) {
					$this.children('*:eq(0)').find('*:first').text(hours);
					$this.children('*:eq(1)').find('*:first').text(minutes);
					$this.children('*:eq(2)').find('*:first').text(seconds);
				} else {
					$this.children('*').eq(0).text(hours);
					$this.children('*').eq(1).text(minutes);
					$this.children('*').eq(2).text(seconds);
				}
			} else {
				$this.text(hours+':'+minutes+':'+seconds);
			}
		}, 1000);
	});
}