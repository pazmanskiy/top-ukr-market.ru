var yandex={
    "v1":45095460,
    "v1-t":45117384,
    "v1v-t":46594971,
    "v2":45095478,
    "v3":45095487,
	"v4":46729116,
	"v5":46883820
};
var mailru={
    "v1":2910877,
    "v1-t":2911417,
    "v1v-t":2940599,
    "v2":2910878,
    "v3":2910879,
	"v4":2943131,
	"v5":2946121
};
var google={
    "v1":"UA-99216904-5",
    "v1-t":"UA-99216904-8",
    "v1v-t":"UA-99216904-9",
    "v2":"UA-99216904-6",
    "v3":"UA-99216904-7",
	"v4":"UA-99216904-10",
	"v5":"UA-99216904-11"
};


var site=document.location.pathname
.replace(/\/+/g,'')
.replace('99','')
.replace('index.html','')
.replace('index2.html','')
.replace('confirm.html','') || $.url().param('version');

mailruId=mailru[site];
yandexId=yandex[site];
googleId=google[site];

(function(d, id){
    var _tmr = window._tmr || (window._tmr = []);
    _tmr.push({id: id, type: "pageView", start: (new Date()).getTime()});
    (function (d, w, id) {
        if (d.getElementById(id)) return;
        var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
        ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
        var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
        if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
    })(document, window, "topmailru-code");
    var r = d.createElement('img'), v = d.createElement('div'), n = d.createElement('noscript'); r.src = '//top-fwz1.mail.ru/counter?id='+id+';js=na';
    r.style = 'border:0;';r.height = 1;r.width = 1;v.style = 'position:absolute;left:-10000px;';v.appendChild(r);n.appendChild(v);d.body.appendChild(n);
})(document, mailruId);

(function (d, w, c, id) {
        (w[c] = w[c] || []).push(function() {
            try {
                var n='yaCounter'+id;
                w.n = new Ya.Metrika({
                    id:id,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks",yandexId);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://analytics.ksn.pw/analytics.js','ga');

  ga('create', googleId, 'auto');
  ga('send', 'pageview');
