 $(function(){
 	 $(".picture3 img").eq(0).click(function(){
      $(".picture img").attr("src","../image/pro_img/blue_one_small.jpg");
 	 })


 	 $(".picture3 img").eq(1).click(function(){
      $(".picture img").attr("src","../image/pro_img/blue_three_small.jpg");
 	 })

 	


 	   $(".picture3 img").eq(2).click(function(){
      $(".picture img").attr("src","../image/pro_img/blue_two_small.jpg");
 	 })
          
          


          




  //左边底部说明部分
      $(".left-bott li").click(function(){
       $(this).addClass("nowli").siblings().removeClass("nowli");
   
       $(".left-bott textarea").eq($(this).index()).show().siblings("textarea").hide();







    })


     
   


    


 





 })