   // 轮播图的JS
   $(function(){
         $(".list li").mouseenter(function(){
          $(".rightli li").eq($(this).index()).show().siblings("li").hide();
             $(this).addClass("current").siblings("li").removeClass("current");
         })
       })


   
   // 导航栏的JS
   $(function(){
   		$(".nav li").mouseenter(function(){
           $(this).children().show();
   })
      $(".nav li").mouseleave(function(){
           $(this).children("ul").hide();
   })
  })










  



