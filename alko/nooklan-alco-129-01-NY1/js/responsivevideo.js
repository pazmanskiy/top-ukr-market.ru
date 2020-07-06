(function($){
    
    function getIframes () {
        videoiframes = $(".youtubeimport"); 
        videoiframes.each(
                function () {
                    var currentIframe = $(this);
                    var H = currentIframe.height();
                    var W = currentIframe.width();
                    var aspectRatio = H / W;
                    currentIframe.data('aspectRatio', aspectRatio);
        });
    }
    
    function resizeIframe () {
        videoiframes.each(function() {
            var currentIframe = $(this);
            var newWidth = currentIframe.parent("div.responsiveyoutube").width();
            var newHeight = newWidth * currentIframe.data('aspectRatio');
            currentIframe
                    .attr('height',newHeight)
                    .attr('width',newWidth);
        });
    }
    
    var videoiframes = {};
    $(document).ready(function () {
                            getIframes();
                            resizeIframe();
                        });
    $(window).resize(function () {
                            resizeIframe();
                        });
    
})(jQuery);