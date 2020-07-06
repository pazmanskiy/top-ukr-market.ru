$(document).ready(function(){
    $('.fancybox').fancybox();

    $('.comment_btn').click(function(){
        $.fancybox('<h2 class="text-success no-margin">Спасибо за ваш отзыв. <br> После проверки модератором он отобразится  на нашем сайте</h2>');
        return false;
    });

    $('body').on('click','.to_form',function(){
        var where = $('#anch').offset().top;
        $('html, body').animate({scrollTop: where}, '2000');
        return false;
    });

    $('body').on('click','.check_code',function(){
        var code = $('.code-val').val();
        code = code.replace(/\D+/g, "");
        if (code.length > 0) {
            if (code.length>=5 && code.length<=20) {
                $.fancybox('Ваш продукт был приобретен на официальном сайте');
            } else {
                $.fancybox('<span class="red">Ваш уникальный номер недействителен</span>');
            }
        } else {
            $.fancybox('<span class="red">Ваш уникальный номер недействителен</span>');
        }
        return false;
    });
    /*  gallery module */

    $('.bxslider').bxSlider();

});