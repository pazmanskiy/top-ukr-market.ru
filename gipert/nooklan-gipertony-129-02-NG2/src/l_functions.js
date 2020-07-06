(function($) {

    var detectedGEOCity = '';

    var popupConfig = {
        wrapCSS: 'fancybox-popup',
        padding: ['0','0','0','0'],
        scrolling: 'visible',
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            overlay: {
                css: {'background': 'url(../../img/overlay.png) repeat' }
            }
        }
    };

    var ajaxRetryConfig = {
        tryCount : 0,
        retryLimit : 3,
        retryDelay: 3000,
        success : function(json) {},
        error : function(xhr, textStatus, errorThrown ) {
            this.tryCount++;
            if (this.tryCount < this.retryLimit) {
                setTimeout(function(_this){
                    $.ajax(_this)
                }, this.retryDelay, this)
                return;
            }
        }
    }

    var methods = {
        init:function() {
            $(".ps-dial-lg").knob();
            $(".ps-dial-sm").knob();
            if ($('.popup-open').length)
            {
                $('.popup-open').fancybox(popupConfig);
            }
            if($('.popup-close').length)
            {
                $('.popup-close').on('click', function(e){
                    $.fancybox.close(true);
                    e.preventDefault();
                });
            }
        },

        fancyboxPopupRun:function(obj) {
            if (obj.length)
            {
                $.fancybox(obj, popupConfig);
            }
        }
    };
    $.fn.lpFunctions = function(method){
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            console.log( 'Метод "' +  method + '" не найден в плагине lpFunctions' );
        }
    };
})(jQuery);

$(function(){
    $('body').lpFunctions();
});









