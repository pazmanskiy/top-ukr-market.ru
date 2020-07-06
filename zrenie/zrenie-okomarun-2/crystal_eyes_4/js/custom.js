$(document).ready(function() {



/* Smooth Scroll */
 $(".scroll_pp").on("click", function (event) {
            event.preventDefault();
            $('html,body').animate({
              scrollTop: $(".scroll_f").offset().top}, 500);
        })


});


