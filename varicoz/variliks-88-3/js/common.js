function test() {
    var t = 0;
    return $(".icb-test").each(function() {
        $(this).prop("checked") && (t += 1)
    }), t
}
$(document).ready(function() {
	
	$('.scrollto').on('click', function(e){
		$('body,html').animate({scrollTop: ($($(this).attr('href')).offset().top)}, 1000);
		e.preventDefault();
	});

	plyr.setup({volume:5,iconUrl:"./img/plyr.svg"});

    $(".faq_head").on("click", function(){
    if($(this).hasClass('active')){
    $(this).removeClass("active");
    $(this).siblings('.faq_text').slideUp(400);
    }else{
     $(".faq_head").removeClass("active");
	$(this).addClass("active");
    $('.faq_text').slideUp(400);
    $(this).siblings('.faq_text').slideDown(400);
    }
    });

    $('.result-button a').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false; 
        });

    $('.reviews_slider').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    })

    $(".call-form").magnificPopup({
         fixedContentPos:!0,
        callbacks: {
            beforeOpen: function() {
                $("html").addClass("mfp-helper")
            },
            close: function() {
                $("html").removeClass("mfp-helper")
            }
        }
    }),
    $(".test-form-btn button").on("click", function() {
        var t = test(),
            e = 0;
            if (t == 0) {
                alert('Выберите ваши симптомы');
            }
        return 1 == t && ($(".result-header").html("1 стадия!"),$('.result-block').addClass('result-block1'), $(".result-text").html("У вас первая стадия варикозного расширения вен. Это пока не так страшно, но уже повод насторожиться. Варикозное расширение вен быстро прогрессирует, и меры нужно предпринимать срочно. Вместе со средством Вариликс у вас есть все шансы полностью избавиться от варикоза.  ")), t >= 2 && t <= 4 &&  ($(".result-header").html("2 стадия!"),$('.result-block').addClass('result-block2'), $(".result-text").html("Будьте осторожны! Варикоз прогрессирует! У вас серьезная стадия варикоза! Варикозное расширение вен — это не просто косметический дефект, а серьезная патология. Вам срочно нужно избавляться от варикоза, пока болезнь не перешла в запущенную стадию, когда поздно уже что-то делать. Вариликс быстро избавит от косметических дефектов и укрепит сосуды изнутри.")), t >=5 && ($(".result-header").html("3 стадия!"),$('.result-block').addClass('result-block3'), $(".result-text").html("Вы в опасности! У вас запущенная стадия варикоза. Ваши ноги «украшают» выступающие вены и сине-бордовые сеточки. Боль и тяжесть в ногах — ваше постоянное состояние или не за горами. Вам нужно срочно решать проблему, пока ваши ноги не покрыли трофические язвы. Вариликс поможет избавиться от варикоза навсегда.")), 0 != t && ($(".test").animate({
            opacity: 0
        }, 500), setTimeout(function() {
            $(".result").css("display", "block"), $(".result").animate({
                opacity: 1
            }, 500), $(".test").css("display", "none"), $(document).width() >= 480 ? ($(".result-img .gruk").animate({
                top: e
            }, 2e3), setTimeout(function() {
                $(".result-test").animate({
                    opacity: 1
                })
            }, 2e3)) : $(".result-test").animate({
                opacity: 1
            })
        }, 500), !1)
    });

 $(".promo_form button").click(function() {
        return "" == $('.promo_form input[name="code"]').val() ? ($.magnificPopup.open({
            items: {
                src: "#check-cod-error",
                type: "inline"
            }
        }), $('.promo_form input[name="code"]').focus()) : ($(".promo_form").find("input").val(""), $.magnificPopup.open({
            items: {
                src: "#check-cod-ok",
                type: "inline"
            }
        })), !1
    })
})



