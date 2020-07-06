var yandex = {
    "v1": 46831005,
    "v1v": 54807316,
    "v2": 46831050,
    "v3": 46831092,
    "v4": 46904736,
    "v4v": 54807322,
    "v5": 47159805,
    "v5v": 54807328,
    "v5n": 47258610,
    "v6": 54807298,
    "v6c": 54807304,
    "v7": 54807337,
    "v8": 54807343,
    "v9": 54807349,
    "v10": 54807355,
    "v11": 54807361,
    "v12": 54807367,
    "v13": 54807373,
    "v14": 54807310,
    "v15": 54807334,
    "v16": 54807379,
    "v17": 54807385,
    "v18": 54807391,
    "v19": 54807397,
    "v20": 54807400,
    "v21": 54807406,
    "v22": 54807412,
    "v23": 54807418
};


function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('149', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('confirm.html', '')
        .replace('149', '');
}

console.log(site);


yandexId = yandex[site];


(function(d, w, c, id) {
    (w[c] = w[c] || []).push(function() {
        try {
            var n = 'yaCounter' + id;
            w.n = new Ya.Metrika({
                id: id,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        } catch (e) {}
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function() { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks", yandexId);