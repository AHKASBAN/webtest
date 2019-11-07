
$(function(){
  'use strict';

  var win_width = $(window).innerWidth(); 

  if (win_width > 771){
  $('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(100);
        }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(100);
    });
    $('.dropdown-toggle').click(function () {
      window.location = $(this).attr('href');  
  });
  }

  


    var win_height = $(window).innerHeight();
      $('.banner').innerHeight(win_height);




    if (win_width > 771){
    var nav_height = $('.navbar').outerHeight(true);
    $('.navbar-light .navbar-nav  .nav-item ').outerHeight(nav_height);
    }
   
  $(".scroll").click( function() {
      $(window).scrollTop(0);
    });

    $( window ).scroll(function() {
     
      var scrollwin = $(window  ).scrollTop( );
      console.log(scrollwin);
     if (scrollwin > 0){
      $('  .scroll').show();
            
         
      }else {
        $(' .scroll').hide();
      }
      
      });
   

      $(' .bar-icon').click( function() {
        if ($('.collapse').is(':visible'))  {

      
          $('#open-collapse').show();
          $('#close-collapse').hide();
       
       }
       else   {
   
        $('#open-collapse').hide();
        $('#close-collapse').show();
       
       }
       
      });
     
        

$(' .question').click( function() {
if ($(this).siblings('.answer').is(':visible')) {
  $(this).siblings('.answer').slideUp("slow");
  $(this).css('color' ,'#333');
  $(this).children('.fa-caret-right').show();
  $(this).children('.fa-caret-up').hide();
}
else {
  $(this).siblings('.answer').slideDown("slow");
  $(this).children('.fa-caret-right').hide();
  $(this).children('.fa-caret-up').show();
  $(this).css('color' ,'#085e98');
}
});




});
