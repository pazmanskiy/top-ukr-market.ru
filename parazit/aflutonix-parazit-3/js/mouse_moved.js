//var ua = navigator.userAgent.toLowerCase();
//var isSafari = {
//    Safari: function() {
//        return ua.indexOf('safari');
//    }
//};
//if(isSafari.Safari()){
//	var tag_css = document.createElement('link');
//    tag_css.type = 'text/css';
//    tag_css.rel = 'stylesheet';
//    tag_css.href = "./css/safari.css";
//    var tag_head = document.getElementsByTagName('head');
//    tag_head[0].appendChild(tag_css);
//
//} ;
function webkit_moved() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {

            $('html').mouseleave(function(){
                var displayPop = $(".popup1").css('display');
                var displayP = $(".popup-second").css('display');
                if ( displayPop == 'none' && displayP == 'none'){
                    $('.modal_mouse_out').show();
                }
            });
        } else {

            $('html').mouseleave(function(){
                var displayPop = $(".popup1").css('display');
                var displayP = $(".popup-second").css('display');
                if ( displayPop == 'none' && displayP == 'none'){
                    $('.modal_mouse_out').show();
                }
            });
        }
    };
};
function firefox_moved(){
    var browser=navigator.userAgent.toLowerCase();
    if(browser.indexOf('firefox') > -1) {
        $('.mouse_moved').mouseover(function(){
            var displayPop = $(".popup1").css('display');
            var displayP = $(".popup-second").css('display');
            if ( displayPop == 'none' && displayP == 'none'){
                $('.modal_mouse_out').show();
            }
        });

    }
    else  {               // If another browser, return 0
        var b=1;
    }
    return false;
};
function internet_explorer_moved() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {     // If Internet Explorer, return version number
        $('.mouse_moved').mouseover(function(){
            var displayPop = $(".popup1").css('display');
            var displayP = $(".popup-second").css('display');
            if ( displayPop == 'none' && displayP == 'none'){
                $('.modal_mouse_out').show();
            }
        });}
    else  {               // If another browser, return 0
        var b=1;
    }
    return false;
};



//getMobileOperatingSystem();

webkit_moved();
firefox_moved();
internet_explorer_moved();