$(function(){
  

        $(".main_slider").slick({
            arrows:false,
            dots:true,
            autoplay:true,
            autoplaySpeed:3000,
            pauseOnHover:false,
        
        });
        
        $("#visual .xi-arrow-left").on("click",function(){
            $(".main_slider").slick("slickPrev");
        });   
        $("#visual .xi-arrow-right").on("click",function(){
            $(".main_slider").slick("slickNext");
        });
        
        $(".main_slider figure").eq(1).addClass("on");    
        $(".main_slider").on("afterChange",function(e,s,c){
            $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
        });
        
        $(".con01_slider").slick({
            arrows:false,
            dots:true,
            slidesToShow:3,
        
        });
        
        $("#content05 .xi-arrow-left").on("click",function(){
            $(".con01_slider").slick("slickPrev");
        });   
        $("#content05 .xi-arrow-right").on("click",function(){
            $(".con01_slider").slick("slickNext");
        });
            
            
        $("#content02 .xi-pause").on("click", function(){
           $(".movie01").trigger("pause");
        });
        $("#content02 .xi-play").on("click", function(){
           $(".movie01").trigger("play");
        });
    
});