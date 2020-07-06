jQuery(document).ready(function ($) {
    $('.pp-modal-button').on('click', function(){
        event.preventDefault();
        $('#pp-modal-offer, #pp-overlay, #pp-x').fadeIn(400); 
    });
    $('#pp-overlay, #pp-x').on('click', function(){
        $('#pp-modal-offer, #pp-overlay, #pp-x').fadeOut(400);
    });
});
