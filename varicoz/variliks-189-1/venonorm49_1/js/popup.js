$(function() {

    $(".open_check").fancybox({
        height      : '50%',
        topRatio    : '0.2',
        fitToView   : false,
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        padding: 0,
        closeEffect : 'none',
        afterLoad: function() {
            $(this.wrap).addClass('fancybox-open_check');
        }
    });

    var myalert = function ( text , _event , _status ){
    	$.fancybox.open([{
                type: 'ajax',
                dataType: 'html',
                href : '/ajax/alert.html',                
                afterLoad: function() {
                    $(this.wrap).addClass('fancybox-open_check');
                    var HTML = this.content.replace(/__TEXT__/g, text );
                    	HTML = HTML.replace(/__EVENT__/g, _event );
                    	HTML = HTML.replace(/__STATUS__/g, _status );
                        this.content = HTML;
                }
        }],{ padding : 0});
    }

    var myReload = function(){
    	document.location.reload();
    }

});