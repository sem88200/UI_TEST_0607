$(function(){
 size_li=$('#box ul li').size();
 const win=$(window).width();   

 if(win<=640){  
  x=2;
  $('#box ul li:lt('+x+')').show();
  $('.more').on('click',function(){
   x=(x+2 <= size_li) ? x+2 : size_li;
   $('#box ul li:lt('+x+')').show();
  });

 }else if(win>640 && win<=719){ 
  $('#box ul li:lt('+x+')').show();
  $('.more').on('click',function(){
   x=(x+3 <= size_li) ? x+3 :size_li;
   $('#box ul li:lt('+x+')').show();
  });

 }else{
  x=4;
  $('#box ul li:lt('+x+')').show();
  $('.more').on('click',function(){
   x=(x+4 <= size_li) ? x+4 :size_li;
   $('#box ul li:lt('+x+')').show();
  });
 };
  
});