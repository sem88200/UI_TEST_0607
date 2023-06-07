$(function(){

 if ($('#banner_wrap').length > 0) {
     bxSlider = $('#banner_wrap #slide_banner').bxSlider();
 }

 function bxInit() {
     let winSize = $(window).width(),
         sizeID;
     if (winSize < 1200 && winSize >= 500) {
         sizeID = 3;
     } else if (winSize < 500) {
         sizeID = 2;
     } else {
         sizeID = 5;
     }
     bxSlider.reloadSlider({
         minSlides: sizeID,
         maxSlides: sizeID,
         moveSlides: sizeID,
         auto: true,
         slideWidth: 257,
         slideMargin: 5,
         pause: 3000,
         nextText: '',
         prevText: '',
         autoHover: true,  //hover 했을때 슬라이드 멈춤
         autoStart: true,
         autoDelay: 750,
         pager: false    //1,2,3,4 글씨 안나오게 숨김
     });
 }

 bxInit();
 $(window).resize(function () {
     bxSlider.stopAuto(true);
     bxInit();
     bxSlider.onSliderLoad(function () {
         this.autoDelay(750).autoStart(true);
     });
 });

 $('#prevBtn').on('click',function(){
       bxSlider.goToPrevSlide();
       return false;
 });

 $('#nextBtn').on('click',function(){
       bxSlider.goToNextSlide();
       return false;
 });
});