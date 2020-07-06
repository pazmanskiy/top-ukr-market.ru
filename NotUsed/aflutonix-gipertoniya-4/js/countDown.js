$(window).on('load', function(e) {
	var countDownTime = 10800;
	function countDownTimer() {
		var hours = parseInt( countDownTime / 3600 ) % 24;
		var minutes = parseInt( countDownTime / 60 ) % 60;
		var seconds = countDownTime % 60;

		var h = (hours < 10 ? "0" + hours : hours); 
		var m = (minutes < 10 ? "0" + minutes : minutes);
		var s = (seconds  < 10 ? "0" + seconds : seconds);

		document.getElementById("hour").innerHTML = h;
		document.getElementById("minutes").innerHTML = m;
		document.getElementById("seconds").innerHTML = s;
		document.getElementById("hour1").innerHTML = h;
		document.getElementById("minutes2").innerHTML = m;
		document.getElementById("seconds3").innerHTML = s;
			
			if(countDownTime < 0) {
		    clearInterval(countDownTime);
		    document.getElementById("clockdiv").innerHTML = "countdown's over!";}
			countDownTime = countDownTime - 1;
			setTimeout(function(){ countDownTimer() }, 1000);
	}
	countDownTimer();

        function onDomReady(){
            var amount = document.getElementById('iter1');
            var amount2 = document.getElementById('iter2');
            function iterate(i) {
                if (i > 5) {
                    setTimeout(function() { iterate(i - 1); }, 8000);
                }
                amount.innerHTML = i;
                amount2.innerHTML = i;
            }
            iterate(60);
        }; 
    onDomReady();
});	
