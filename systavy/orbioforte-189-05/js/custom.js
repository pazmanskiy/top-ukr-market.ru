$(document).ready(function() {
// $("#kmacb-form input[type=submit]").on("click", function(){
//       event.preventDefault();      
//       $(this).parent("form").submit();
//       console.log($(this).parent("form"));
//     });
/* Smooth Scroll */
  $(document).on('click', 'a', function(event){
      event.preventDefault();
      if($( $.attr(this, 'href') ).length>0){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
      }
  });

//   $(document).ready(function() {
// $('a[href^="#"]').click(function(){
// var el = $(this).attr('href');
// $('body').animate({
// scrollTop: $(el).offset().top}, 2000);
// return false;
// });
// });

/* Left package */
  var number_objects; // value in global scope
 



    $('form input').click(function() {
      $(this).next('.error_form').remove();
      $(this).css('border', '1px solid #b0b6c3');
    });

});
