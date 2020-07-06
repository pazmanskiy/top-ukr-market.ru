var yandex={
    "v1":47687131,
    "v1c":47699320,
    "v1f":47847971
};

var site=document.location.pathname
.replace(/\/+/g,'')
.replace('149','')
.replace('index.html','')
.replace('index2.html','')
.replace('confirm.html','') || $.url().param('version');

yandexId=yandex[site];

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