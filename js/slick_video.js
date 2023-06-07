$(function(){
   $('.youtube').colorbox({iframe:true, innerWidth:'85%',innerHeight:'65%'});

   $('#slick01').slick({
      centerMode:true,  // 양옆의 그림 보이면서 가운데 정렬
      slide:'li',
      infinite:true,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow:2,
      slidesToScroll:1,
      speed:2000,
      arrows:true,
      pauseOnHover:true,  //올렸을때 잠깐 멈춤
      dots:false,
      responsive:[

         {
            breakpoint:641,  //641 미만에서 보이는거 부터 1, 움직이는거 1
            settings: {
            slidesToShow:1,
            slidesToScroll:1
            }
         }
      ]
});  

});