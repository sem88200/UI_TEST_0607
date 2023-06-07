$(function(){

   const defaultTop=parseInt($('#quick_menu').css('top'));
   $(window).on('scroll',function(){

    const scv=$(window).scrollTop();
    $('#quick_menu').stop().animate({top:scv+defaultTop+"px"},1000);
   });

      $('#quick_menu ul a').on('click',function(){
         $.scrollTo(this.hash || 0, 1500);
         e.preventDefault();
      });

});

