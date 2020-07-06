<?php
	include ('settings.php');
	if (strpos($settings, 'vitrina') !== false)
	{ 
?>
<script type="text/javascript">
var news = 'https://one-news.info/vitrina'; // <-- ссылка на витрину 
$(document).ready(function() {
    //биндим "назад" на витрину
    ! function() {
        var t;
        try {
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
            onpopstate = function(t) {
                t.state && location.replace(news)
            }
        } catch (o) {}
    }();
})
</script>
<script type="text/javascript">
$(function() {
    $('a').click(function() {
        comebacker = null;
        window.open($(this).attr('href'));
        setTimeout(function() {
            window.location.href = 'https://one-news.info/vitrina';
            return false;
        }, 0000);
        return false;
    })
})
</script>

<?php
	} 
?>