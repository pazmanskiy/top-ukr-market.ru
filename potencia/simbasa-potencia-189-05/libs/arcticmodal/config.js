$(document).ready(function() {
  if (!$.cookie('smartCookies')) {

    $(document).mousemove(function(e) {
     if(e.pageY <= 5) {
       function getWindow(){
         $('.offer').arcticmodal({
           closeOnOverlayClick: true,
           closeOnEsc: true
         });
       };
       setTimeout (getWindow, 1);
     }
     $.cookie('smartCookies', true, {
         expires: 7,
         path: '/'
     });
   });

  };
});
