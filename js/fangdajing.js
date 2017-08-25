//放大镜的原生JS     
       window.onload=function(){
        var extra=document.querySelector(".extra");
       var small=document.querySelector(".picture");
       var big=document.querySelector(".big-picture");
       var mask=document.querySelector(".mask");
       var bigImg=big.children[0];
       small.onmousemove=function(event){
          
                       event=event||window.event;
                      pagex=event.pageX||scroll().left+event.clientX;
                      pagey=event.pageY||scroll().top+event.clientY;
                     x=pagex-extra.offsetLeft-mask.offsetWidth/2;
                     y=pagey-extra.offsetTop-mask.offsetHeight/2;
            if(x<0){
              x=0;
            }else if(x>198){
                x=198;
            }if(y<0){
              y=0;
            }else if(y>198){
              y=198;
            }
              mask.style.left=x+"px";
              mask.style.top=y+"px";
           var bili=(bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);
          
              bigImg.style.marginLeft=-x * bili  +"px";
              bigImg.style.marginTop=-y * bili  +"px";





            }


        }