$(function() {
    KMA.init();
	
    $(window).resize(function() {
        KMA.modalRefresh();
    });
    KMA.modalRefresh();
	
    $(document).on("click", "a[modal]", function() {
        var modalWindow = $("div#" + $(this).attr("modal"));
        if (modalWindow.length) {
            KMA.modalShow(modalWindow);
            return false;
        }
    }).on("click", ".icon-close, .modal, .button-close", function(event) {
        event.preventDefault();
        if (event.target != this) {
            return false;
        } else {
            KMA.modalHide($(this).closest(".modal"));
        }
    }).on("keydown", function(key) {
        if (key.keyCode == 27) {
            KMA.modalHide($(".modal:visible:last"));
        }
    }).on("click", ".modal > *", function(event) {
        event.stopPropagation();
        return true;
    });
});
var KMA = (function($, $n) {
    return $.extend($n, {
        init: function() {
            this.initAgreement();
        },
        modalHide: function($modal) {
            $modal.fadeOut("fast", function() {
                if (!$(".modal:visible").length) {
                    $("body").removeClass("modal-show");
                }
            });
        },
        modalRefresh: function() {
            if ($(".modal:visible:last").length) {
                var modalBlock = $(".modal:visible:last .modal-block"),
                    width = parseInt(modalBlock.width()),
                    height = parseInt(modalBlock.height());
                if ($(window).height() > height + 20) {
                    modalBlock.addClass("modal-top").removeClass("margin-t-b").css("margin-top", -1 * (height / 2));
                } else {
                    modalBlock.addClass("margin-t-b").removeClass("modal-top");
                }
                if ($(window).width() > width) {
                    modalBlock.addClass("modal-left").removeClass("margin-l").css("margin-left", -1 * (width / 2));
                } else {
                    modalBlock.addClass("margin-l").removeClass("modal-left");
                }
            }
        },
        modalShow: function($modal) {
            $modal.fadeIn("fast");
            $("body").addClass("modal-show");
            this.modalRefresh();
        },
		
		
        initCallback: function(timeout) {
            try {
                $("#kmacb > a").on("click", function(event, disableTrigger) {
                    if (disableTrigger == undefined || !disableTrigger) {
                        $(document).trigger("kma.callbackOperator");
                    }
                });
                if (window.kmacb_manager_class != undefined) {
                    $("#kmacb").addClass(window.kmacb_manager_class);
                }
                if (window.kmacb_form_selector != undefined) {
                    $("#kmacb > a").attr("kmacb-custom-form", window.kmacb_form_selector);
                    $("#kmacb > a").on("click", function(event, disableTrigger) {
                        event.preventDefault();
                        event.stopPropagation();
                        $(window.kmacb_form_selector).trigger("click", [true]);
                    });
                    $(window.kmacb_form_selector).on("click", function(event, disableTrigger) {
                        if (disableTrigger == undefined || !disableTrigger) {
                            $(document).trigger("kma.callbackButton");
                        }
                    });
                }
                setTimeout(function start_kmacb() {
                    $("#kmacb").show();
                }, timeout);
            } catch (e) {}
        },
		
        initComebacker: function(timeout) {
            try {
                setTimeout(function start_kmacomebacker() {
                    var comebacker = true;
                    $(window).on("mouseout", function(event) {
                        if (event.pageY - $(window).scrollTop() < 1 && comebacker) {
                            if (window.customPopupShowed != undefined && window.customPopupShowed === true) {
                                return;
                            }
                            comebacker = false;
                            $(document).trigger("kma.mouseLeave");
                            $("#kmacb > a").trigger("click", [true]);
                        }
                    });
                }, timeout);
            } catch (e) {}
        },
		
        showComebackerAlert: true,
		
        initComebackerAlert: function(KMAText) {
            var current = this;
            window.onbeforeunload = function(evt) {
                if (current.showComebackerAlert) {
                    current.showComebackerAlert = false;
                    return KMAText.comebacker_text;
                }
            };
        },
		
		
        initAgreement: function() {
            if (!$("[modal=agreement]").length) {
                var $polit = $("[modal=polit]:visible:last"),
                    $agreement = $polit.clone();
                $polit.after("<br>");
            }
        }
    });
})(jQuery, KMA || {});