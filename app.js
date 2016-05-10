var radius = 200;
// var r = 0;
// var g = 0;
// var b = 0;
var radiusDirection = -1;
function randomColor(){
  return Math.floor(Math.random() * 255) + 1;
}

function draw(){
       var canvas = document.getElementById('animate');
       if (canvas.getContext){
        //  if(r < 225){
        //    r+=10;
        //  } else if( g <225){
        //    r=255;
        //    g+=10;
        //  } else if(b < 225){
        //    r=255;
        //    g=255;
        //    b+=10;
        //  } else {
        //    r = 0;
        //    g = 0;
        //    b = 0;
        //  }
         var ctx = canvas.getContext('2d');
      //  newColor = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
         //draw an arc!

         ctx.fillStyle = 'rgb' + '(' + randomColor() + ',' + randomColor() + ',' + randomColor()
          + ')';
         
         // stagger text color change//
         if(radius % 7 ==0){
                 document.getElementsByTagName('h1')[0].style.color = 'rgb' + '(' + randomColor() + ',' + randomColor() + ',' + randomColor()
          + ')';
         }


         ctx.beginPath();
        if(radius > 180){
          radiusDirection = -1;
        }
         if(radius < 20){
           radiusDirection = 1;
         }
         radius += (radiusDirection * 20)
         ctx.arc(200,200,radius,0,Math.PI*2,false);
         ctx.fill();
       }
     }

setInterval(draw, 200);
