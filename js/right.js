   $(function(){
       //颜色部分的JS

        $(".right-pic3 img").eq(0).click(function(){
          $(".juanjuan strong").text("蓝白");
      $(".picture img").attr("src","../image/pro_img/blue_one_small.jpg")
     })


     $(".right-pic3 img").eq(1).click(function(){
     	    $(".juanjuan strong").text("黄白");
     	    $(".picture img").attr("src","../image/pro_img/yellow_one_small.jpg")
     })

    
       $(".right-pic3 img").eq(2).click(function(){
          $(".juanjuan strong").text("粉绿");
           $(".picture img").attr("src","../image/pro_img/green_one_small.jpg")
      })


    


    //观看清晰图片最大图的JS

     $(".bigpic a").click(function(){
     	$(this).attr("href","../image/pro_img/blue_one_big.jpg");

        })



    


     //尺寸部分的JS
      
      $(".right-size li").mouseenter(function(){
          $(this).addClass("chouchou").siblings("li").removeClass("chouchou");
       })

       $(".right-size li").click(function(){
     	 var text=$(this).text();
     	 $(".right-size p strong").text(text);
      })
     
     





// 数量的总价的JS

     $(".sele select").change(function(){
 		var num=$(this).val();
 		  var total=num*200;
 		$(".stro").text("总计:"+total+"元");

     })



  



//  购物车的JS 
   $(".shopcar").click(function(){
   		  var str="感谢您的购买。\n您购买的\n产品是:免烫高支棉条纹衬衣;\n";
   		  var size=$(".right-size strong").text();
   		  var num=$(".sele select").val();
   		  var price=$(".stro").text();
   		  var color=$(".juanjuan strong").text();
   		 str+="尺寸是:"+size+";"+"\n";
   		 str+="颜色是:"+color+";"+"\n";
   		 str+="数量是:"+num+";"+"\n";
   		 str+="总价是:"+price+"。"+"\n";
   		 str+="                           是否确认下单?";
   		               confirm(str);
	          if(confirm) {
	     	     alert("恭喜你下单成功!");
	            } 
             })




// 五角星评分JS

     $(".score a").click(function(){
     	var score=$(this).attr("title");
     	confirm("您给此商品的评分是:"+score);
     })


    

// 放大镜的JS
      $(".picture").mouseenter(function(){
          $(".big-picture").show();
          $(".mask").show();
      })  

       $(".picture").mouseleave(function(){       
             $(".big-picture").hide();
             $(".mask").hide();
        })

    
      

//电话的JS
   
   $(".tel1").click(function(){
      alert("TEL: 186-7001-1741");
   })

    $(".tel2").click(function(){
      alert("TEL: 186-7085-5723");
   })

     




      })




 
  
       












	     
	    
   		 
   		  
   		 






