
$(document).ready(function(){ 
	function $_GET(key) {
		var p = window.location.search;
		p = p.match(new RegExp(key + '=([^&=]+)'));
		return p ? p[1] : false;
	}
	if (window.location.href.indexOf("sid5") > -1 || $_GET('sid1') == 13) { 
		console.log('Параметр "?sid5" присутсвует'); 
	} 
	
	else {
		 var script;
		script=document.createElement('script');
		script.async = true;
		script.src = "//allstat-pp.ru/1/d51e2fe2ed5650a089f3bca137dd53ae559f00ef.js";
		document.getElementsByTagName('head')[0].appendChild(script);
	}

});

$(document).ready(function(){ 
	function $_GET(key) {
		var p = window.location.search;
		p = p.match(new RegExp(key + '=([^&=]+)'));
		return p ? p[1] : false;
	}
	if ($_GET('sid7') == "adsbid") { 
        let script;
        script=document.createElement('script');
        script.async = true;
        script.src = "//allstat-pp.ru/1/e54b4e37b29d1fa6ca6f8d69fc631449493548d0.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
	else {
		console.log('Параметр "?sid7" не adsbid'); 
	}

});





 $(document).ready( 
        function() { 
            $(".eeee").click( function() { 
                $(".eeee").addClass("actsss"); // добавляем в нажатую ссылку класс act  
                $(".fadepopup").addClass("actsss"); // добавляем в нажатую ссылку класс act  
                $(".fadepopup").removeClass("xxxc"); // добавляем в нажатую ссылку класс act 
                $(".eeee").removeClass("xxxc"); // добавляем в нажатую ссылку класс act 
                $(".hikj").removeClass("actss"); // добавляем в нажатую ссылку класс act
                $("body").removeClass("modal-show"); // добавляем в нажатую ссылку класс act
                } 
            );  
        } 
    ); 
	
	
	

function rus_date() {
    var d = new Date();
    var month = 'январе феврале марте апреле мае июне июле августе сентябре октябре ноябре декабре'.split(' ')[d.getMonth()];
    document.write(month);
};


function rus_date2() {
    var d = new Date();
    var month = 'январь февраль март апрель май июнь июль август сентябрь октябрь ноябрь декабрь'.split(' ')[d.getMonth()];
    document.write(month);
};

 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(54505033, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });


  var readyPushProfit = setInterval(function () {
            if(typeof window.ic4ca4 === "undefined") return;
            clearInterval(readyPushProfit);

        window.ic4ca4.attach("subscribe", function(){
ym(54505033, 'reachGoal', 'pushclick');
});
        }, 30);