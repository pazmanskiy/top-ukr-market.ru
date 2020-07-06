$(document).ready(function(){


    $('.bxslider').bxSlider({
        infiniteLoop : true
    });


    /* modal */
    $('.header__button').on('click', function(event) {
        event.preventDefault();
        $(".popup1").fadeIn(500);
    });

    $('.modal, .close').on('click', function(event) {
        event.preventDefault();
        $(".popup1").fadeOut(500);
        $(".popup2").fadeOut(200);
    });


    setTimeout(function(){
        var displayPopup = $(".popup1").css('display');
        if (displayPopup == 'none'){
            $(".popup2").fadeIn(200);
        }
    },40000);




});
