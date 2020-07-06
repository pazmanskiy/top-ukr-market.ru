var slider = 0, wdt = 0,
    options={
        mode: 'horizontal',
        minSlides: 1,
        maxSlides: 1,
        adaptiveHeight: true,
        touchEnabled: true,
        infiniteLoop: true,
        controls: true,
        pager: true
    };
$(document).ready(function(){
    wdt = $(window).width();

    //Мобильное меню
    $('body').on('click','.mob-menu',function(){
        if($(this).hasClass('open')){
            $('.nav').slideUp(400);
            $(this).removeClass('open');
        }else{
            $('.nav').slideDown(400);
            $(this).addClass('open')
        }
    });

    $(".scroll-link").on("touchend, click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    var ts = new Date();
    ts.setHours(ts.getHours() + 6);

    $('#countdown').countdown({
        timestamp: ts
    });


    slider = $('.bx-review').bxSlider(options);


    //Parallax
    window.addEventListener("scroll", function(event){

        var top = this.pageYOffset;

        var layers = document.getElementsByClassName("parallax");
        var layer, speed, yPos;
        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

        }
    });

});

$(window).resize(function(){

});