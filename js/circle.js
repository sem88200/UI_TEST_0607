$(function(){
    const perNum = 80;
    $('.wp2').waypoint(function(){
      $('.wp2').addClass('animated fadeIn');
      $('.second.circle').circleProgress({
        value: perNum/100,
        startAngle:300,
        size:300,
        fill:{
          color:["darkred"]
        },
        animation:{
          duration:1500,
          easing:"swing" 
        },
        lineCap:"round",  
        reverse:true
      }).on('circle-animation-progress',function(event,progress){
    $(this).find('strong').html(Math.round(perNum * progress)+ '<i>%</i>'); 
      });
    },{
      offset:'75%'
    });

   
})