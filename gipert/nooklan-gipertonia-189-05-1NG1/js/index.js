

var countryCodeLocation = "RU"; // "RU", "RO", "TL"

var nameList,
    madeOrderOnSum,
    wasOrdered,
    left,
    shared,
    usersOnline,
    orderedCallback,
    packsLeft,
    codeEmpty,
    codeOk,
    codeWrong;
    
/* END LOCALIZATION VARAIBLES*/


/* Общие настройки */

var productQuantity = 60; // Желательно > 50.

var intervalTime = 22000; // Задержка папапов.
var mobileFormBreakPoint = 767; //В случае наличия разыных форм для мобилы и десктопа - тут можно указать разрешение, на котором форма будет меняться.



var genderNames = 'both'; // 'men' если нужны только мужские имена. или 'women' если только женские. или 'both' если и те и те.


/*Теги для попапов заказов*/

var tagOnlineStart = '<div><i class="everad-sprite everad-sprite-online_user"></i><span>';
var tagCartStart = '<div><i class="everad-sprite everad-sprite-bucket"></i><span>';
var tagCallBackStart = '<div><i class="everad-sprite everad-sprite-callback"></i><span>';
var tagStartSpan = '<span>';
var tagEndSpan = '</span>';
var tagEndDivAndSpan = '</span></div>';
var tagBlinkSpan = '<span class="blink_me">';
var tagBlinkAnim = '<span class="blink">';

/*Конец тегов*/


/*Включатели функций*/

var modalsClone = true; // клонирование модалок с формой.
var orderPopups = false; // всплывающие попапы с заказами.
var checkCode = true;
var todaySold = true; // #todayBay -wrap
var localization = "";

/* Доп функция */
String.prototype.replaceAt = function(index, character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    }

/* Добавляем звездочки */
function addStars(arr) {
}

function concatMenAndWoman(arr1, arr2) {
}

function setLocalization(localiz) {
}

//setLocalization(countryCodeLocation);


function codeCheck(){var e=$(".check-code-input"),a=$(".check-code-result"),o=$(".check-code-btn"),t=/^\d+$/;o.on("click",function(o){o.preventDefault();var n=e.val().length,r=e.val();return t.test(r)&&15==n?a.text(codeOk):""!==e.val()&&" "!==e.val()&&"  "!==e.val()?a.text(codeWrong):a.text(codeEmpty)})}

function soldToday(){var e=new Date,a=2*(60*e.getHours()+e.getMinutes())+2e3;$(".todayBuy").html(a)}
function addDataAtr(e){}

var popaps = {
        prodsLeft: productQuantity,
        generateName: function(e) {
            var a = Math.floor(Math.random() * e.length - 1) + 1;
            return e[a]
        },
        insertText: function(e, a) {
            $(e).html(a)
        },
        usersOnline: function(e) {
            return Math.floor(301 * Math.random() + 300)
        },
        elemText: function(e) {
            return $(e).text()
        },
        generatePopupUsersOnline: function() {
            var e = tagOnlineStart + usersOnline + popaps.usersOnline(".users-online") + tagEndDivAndSpan;
            popaps.insertText(".users-online", e), $(".users-online").addClass("show-order"), setTimeout(function() {
                $(".users-online").removeClass("show-order")
            }, intervalTime / 2)
        },
        generatePopupMadeOrder: function() { 
        },
        generatePopupOrderMake: function() { 
        },
        generatePopupLeftFive: function() {
            var e = tagCartStart + packsLeft + tagBlinkSpan + popaps.prodsLeft + tagEndSpan + tagEndDivAndSpan;
            popaps.insertText(".users-online", e), $(".users-online").addClass("show-order")
        },
        checkNumberOfSymbols: function() {
            if (3 == $(".lastpack00").attr("data-number")) {
                if (2 == popaps.prodsLeft.toString().length) var e = "0" + popaps.prodsLeft.toString();
                else if (1 == popaps.prodsLeft.toString().length) var e = "00" + popaps.prodsLeft.toString();
                else var e = popaps.prodsLeft.toString();
                var a = tagStartSpan + e[0] + tagEndSpan + tagStartSpan + e[1] + tagEndSpan + tagStartSpan + e[2] + tagEndSpan
            } else if (2 == $(".lastpack00").attr("data-number")) {
                if (1 == popaps.prodsLeft.toString().length) var e = "0" + popaps.prodsLeft.toString();
                else var e = popaps.prodsLeft.toString();
                var a = tagStartSpan + e[0] + tagEndSpan + tagStartSpan + e[1] + tagEndSpan
            } else var a = popaps.prodsLeft;
            popaps.insertText(".lastpack00", a), $(".lastpack00").each(function(e, a) {
                2 == $(this).attr("data-number") && $(this).find("span:first").remove()
            })
        },
        closedModalCalculations: function() {
            var e;
            if (e = popaps.prodsLeft <= 10 ? popaps.prodsLeft - 5 : Math.floor(5 * Math.random()) + 1, popaps.prodsLeft -= e, 3 == $(".lastpack00").attr("data-number")) {
                if (2 == popaps.prodsLeft.toString().length) var a = "0" + popaps.prodsLeft.toString();
                else if (1 == popaps.prodsLeft.toString().length) var a = "00" + popaps.prodsLeft.toString();
                else var a = popaps.prodsLeft.toString();
                var o = tagStartSpan + a[0] + tagEndSpan + tagStartSpan + a[1] + tagEndSpan + tagStartSpan + a[2] + tagEndSpan
            } else if (2 == $(".lastpack00").attr("data-number")) {
                if (1 == popaps.prodsLeft.toString().length) var a = "0" + popaps.prodsLeft.toString();
                else var a = popaps.prodsLeft.toString();
                var o = tagStartSpan + a[0] + tagEndSpan + tagStartSpan + a[1] + tagEndSpan
            } else var o = popaps.prodsLeft;
            popaps.insertText(".lastpack00", o), $(".lastpack00").each(function(e, a) {
                2 == $(this).attr("data-number") && $(this).find("span:first").remove()
            })
        },
        mainFunc: function() { 
        }
    },
    modals = {
        modalClasses: [],
        formWrapAddClass: function() {
            $(".clone-this-mobile").length ? $(window).width() >= mobileFormBreakPoint ? ($(".clone-this-mobile:first").removeClass(formForCloneMobile), $(".clone-this:first").addClass(formForClone)) : ($(".clone-this:first").removeClass(formForClone), $(".clone-this-mobile:first").addClass(formForCloneMobile)) : $(".clone-this:first").addClass(formForClone)
        },
        makeClone: function() {
            return $(".clone-this-mobile").length ? $(window).width() >= mobileFormBreakPoint ? $("." + formForClone + ":first").clone() : $("." + formForCloneMobile + ":first").clone() : $("." + formForClone + ":first").clone()
        },
        createModalLayout: function() {
            $("body").append('<div class="modal-wrap"><div class="inner-modal"><div class="close">×</div></div></div>')
        },
        addClassToModal: function() {
            $(".modal-wrap").each(function(e) {
                $(this).addClass(modals.modalClasses[e])
            })
        },
        insertFormIntoModal: function() {
            $(".inner-modal").append(modals.makeClone())
        },
        getModalClasses: function() {
            $(".open-modal").each(function(e, a) {
                modals.createModalLayout();
                var o = $(this).attr("data-modal-create");
                modals.modalClasses.push(o)
            })
        },
        mouseUp: function() { 
        },
        invokeModal: function(e) {
            $(e).click(function() {
                var e = $(this).attr("data-modal-create");
                $(".modal-wrap." + e).addClass("show-modal")
            })
        },
        closeModal: function() {
            $(".close").on("click", function() {
                $(".modal-wrap").removeClass("show-modal")
            }), $(document).keyup(function(e) {
                "27" == e.which && $(".modal-wrap").removeClass("show-modal")
            }), $(".modal-wrap").on("click", function(e) {
                ($(e.target).is($(".modal-wrap")) || $(e.target).is(".close")) && $(".modal-wrap").removeClass("show-modal")
            })
        },
        addPhoneBtn: function() {
        },
        clearModals: function() {
            $(".modal-wrap .inner-modal .close + div").remove()
        }
    };
if (1 == checkCode && codeCheck(), 1 == todaySold && soldToday(), 1 == orderPopups && (popaps.mainFunc(), popaps.insertText(".paced", packName), popaps.checkNumberOfSymbols()), 1 == modalsClone) {
    if ($(".clone-this-mobile").length) var formForCloneMobile = "form-for-clone-mobile",
        formForClone = "form-for-clone";
    else var formForClone = "form-for-clone";
    modals.formWrapAddClass(), modals.addPhoneBtn(), modals.getModalClasses(), modals.addClassToModal(), modals.insertFormIntoModal(), modals.mouseUp(), modals.closeModal(), modals.invokeModal(".open-modal"), $(window).on("resize", function(e) {
        $(window).width() < 1e3 ? (modals.clearModals(), modals.formWrapAddClass(), modals.insertFormIntoModal()) : (modals.clearModals(), modals.formWrapAddClass(), modals.insertFormIntoModal())
    })
}















//addDataAtr(countryCodeLocation);
function timer(){ 
}
 
$(".scrolling").click(function (event) {
  event.preventDefault();
  var id = $(this).attr('href');
  var top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
function youtubeShowVideo() {
    var i, c, y, v, s, n;
    v = document.getElementsByClassName("youtube");
    if (v.length > 0) {
        s = document.createElement("style");
        s.type = "text/css";
        s.innerHTML = '.youtube{background-color:#000;max-width:100%;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;}';
        document.body.appendChild(s)
    }
    for (n = 0; n < v.length; n++) {
        y = v[n];
        i = document.createElement("img");
        i.setAttribute("src", "../../i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        y.appendChild(i);
        y.appendChild(c);
        y.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "../../https@www.youtube.com/embed/" + this.id + "@autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this)
        }
    }
}
youtubeShowVideo()