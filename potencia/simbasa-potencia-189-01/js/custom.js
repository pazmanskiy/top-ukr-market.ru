$(document).ready(function () {

    /* Smooth Scroll */
    $(document).on('click', 'a', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    //$('.tel_phone').mask('+38 (099) 999-99-99');

    /* Left package */
    var number_objects; // value in global scope
    var displayObject = $('.left-pack'); // fetch object only once, better performace

    function loadRandom() {
        number_objects = 672 + Math.floor(Math.random() * 1);
    }

    function decreaseRandom() {
        // decrease the value by randomly generated value in range 1 - 5
        number_objects -= Math.floor(Math.random() * 2) + 1;
    }

    function showRandom() {
        // show / update the value
        displayObject.text(number_objects);
    }
    loadRandom(); // load the value
    showRandom(); // initial display
    var interval = setInterval(function () {
        decreaseRandom();
        // display (update) it
        showRandom();
        if (number_objects >= 892) {
            // clear interval when number of objects gets to, or below, 0
            clearInterval(interval);
            //$(".left-pack").css("background-color","#B90D0D").addClass("alert");
        }
    }, 3900);

    /* Left package */
    var number_objects2; // value in global scope
    var displayObject2 = $('.left-box'); // fetch object only once, better performace

    function loadRandom2() {
        number_objects2 = 98 - Math.floor(Math.random() * 1);
    }

    function decreaseRandom2() {
        // decrease the value by randomly generated value in range 1 - 5
        number_objects2 -= Math.floor(Math.random() * 2) + 1;
    }

    function showRandom2() {
        // show / update the value
        displayObject2.text(number_objects2);
    }
    loadRandom2(); // load the value
    showRandom2(); // initial display
    var interval = setInterval(function () {
        decreaseRandom2();
        // display (update) it
        showRandom2();
        if (number_objects2 <= 20) {
            // clear interval when number of objects gets to, or below, 0
            clearInterval(interval);
            $(".left-box").addClass("alert");
        } else if (number_objects2 <= 100) {
            $(".left-box").css("font-size", "25px");
        }
    }, 3900);


});
