$(document).ready(function() {
	CountBox();
	
    $('.scrollTo').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    $('.reviews').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'linear'
    });

    var i, c, y, v, s, n;
    v = document.getElementsByClassName("youtube");
    for (n = 0; n < v.length; n++) {
        y = v[n];
        i = document.createElement("img");
        i.setAttribute("src", "img/hqdefault.jpg");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        y.appendChild(i);
        y.appendChild(c);
        y.onclick = function() {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&rel=0&showinfo=0");
            a.setAttribute("allowfullscreen","");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this)
        }
    };


    $('.borderBlue-block').scroolly([
        {
            from: 'el-top = vp-center',
            direction: 1,
            onTopIn: function($el){
                $el.find('.borderBlue').addClass('borderBlueGo');
            }
        }
    ], $('.borderGreen-block'));

});