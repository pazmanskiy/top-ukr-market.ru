$(function () {
    $("a").click(function () {
        var _href = "#roulette";
        $("html, body").animate({
            scrollTop: $(_href).offset().top
        });
        return false;
    });
});
$(function () {
    var prefix = '';
    var documentOutTimer = false;
    var documentOut = true;
    var prefix = '';

    function showCallBackForm() {
        $('#fancy-button-out-comebacker').trigger('click');
        $('body').lpFunctions('fancyboxPopupRun', $('#ps-popup-out-comebacker'));
        return false;
    }

    $(document).mouseleave(function (e) {
        if ($('#ps-popup-out-comebacker').is(':hidden') && documentOut) {
            if (e.clientY < 10) {
                documentOutTimer = setTimeout(function () {
                    documentOut = false;
                    showCallBackForm();
                }, 500);
            }
        }
    });

    $(document).mouseenter(function (e) {
        if ($('#ps-popup-out-comebacker').is(':hidden')) {
            if (documentOutTimer) {
                clearTimeout(documentOutTimer);
            }
        }
    });

    $('#ps-popup-out-comebacker-close').click(function () {
        $.fancybox.close();
        documentOut = false;
    });
    $("#get-product").click(function () {
        $.fancybox.close();
    });

});

(function ($) {

    var detectedGEOCity = '';

    var popupConfig = {
        wrapCSS: 'fancybox-popup',
        padding: ['0', '0', '0', '0'],
        scrolling: 'visible',
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            overlay: {
                css: { 'background': 'url(img/comeback/overlay.png) repeat' }
            }
        }
    };
    var methods = {
        init: function () {
            $(".ps-dial-lg").knob();
            $(".ps-dial-sm").knob();
            if ($('.popup-open').length) {
                $('.popup-open').fancybox(popupConfig);
            }
            if ($('.popup-close').length) {
                $('.popup-close').on('click', function (e) {
                    $.fancybox.close(true);
                    e.preventDefault();
                });
            }
        },

        fancyboxPopupRun: function (obj) {
            if (obj.length) {
                $.fancybox(obj, popupConfig);
            }
        }
    };
    $.fn.lpFunctions = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
    };
})(jQuery);

$(function () {
    $('body').lpFunctions();
});









