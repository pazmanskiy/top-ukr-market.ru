

    $(document).ready(function() {
         $(".reviews_slider").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                responsive: {
                    0: {
                        items: 1,
                        nav: !0
                    }
                }
            });

            var e = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
        t = new Date;
    t.getDate() < 6 ? t.setMonth(t.getMonth() - 2) : t.setMonth(t.getMonth() - 1), $(".likeclients").text(e[t.getMonth()] + " " + t.getFullYear() + "г.")
    });