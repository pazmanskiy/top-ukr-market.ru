
	var q = new Date;
	var year = q.getFullYear();
	var month =  q.getMonth();
	var day =  q.getDate();
	var hour= q.getHours();
	var minute= q.getMinutes() +15; 
	var sec= 0;

	function CountBox() {
		
		dateNow = new Date();
	
		amount =dateFuture.getTime() - dateNow.getTime();
		
		delete dateNow;
		
		if (amount < 0) {
			
			out = "<div class='countbox-num'><div id='countbox-hours1'>0</div><div id='countbox-hours2'>0</div><div id='countbox-hours-text'>часов</div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-mins1'>0</div><div id='countbox-mins2'>0</div><div id='countbox-mins-text'>минут</div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-secs1'>0</div><div id='countbox-secs2'>0</div><div id='countbox-secs-text'>скенд</div></div>";
            
			document.getElementById("countbox").innerHTML = out;
			document.getElementById("countbox2").innerHTML = out;
		
		} else {
			days = 0;
			days1 = 0;
			days2 = 0;
			hours = 0;
			hours1 = 0;
			hours2 = 0;
			mins = 0;
			mins1 = 0;
			mins2 = 0;
			secs = 0;
			secs1 = 0;
			secs2 = 0;
			out = "";
			
			amount = Math.floor(amount / 1e3);
			days = Math.floor(amount / 86400);

			
			days1 = (days >= 10) ? days.toString().charAt(0) : '0';
			//console.log(days1);
			
			
			days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
			
			amount = amount % 86400;
			hours = Math.floor(amount / 3600);
			hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
			hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
			amount = amount % 3600;
			
			mins = Math.floor(amount / 60);
			
			mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
			
			mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
			
			amount = amount % 60;
			
			secs = Math.floor(amount);
			
			secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
			
			secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
			
			out = "<div class='countbox-num'><div id='countbox-hours1'>" + hours1 + "</div><div id='countbox-hours2'>" + hours2 + "</div><div id='countbox-hours-text'>Часов</div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-mins1'>" + mins1 + "</div><div id='countbox-mins2'>" + mins2 + "</div><div id='countbox-mins-text'>Минут</div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div id='countbox-secs1'>" + secs1 + "</div><div id='countbox-secs2'>" + secs2 + "</div><div id='countbox-secs-text'>Секунд</div></div>";
	
			document.getElementById("countbox").innerHTML = out;
			document.getElementById("countbox2").innerHTML = out;
			document.getElementById("countbox3").innerHTML = out;
			setTimeout("CountBox()", 1);
		}
		
	}

	//month = --month;
	dateFuture = new Date(year, month, day, hour, minute, sec);
	
jQuery(document).ready(function(){
		CountBox();
	});
