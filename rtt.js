const canvas=document.getElementById("canvas");
canvas.width=window.innerWidth-300;
canvas.height=window.innerHeight-300;
const context=canvas.getContext("2d");
context.fillStyle="white";
context.fillRect(0,0,canvas.width,canvas.height);

let dr="black";
let gr="3";
let cl="white"
//let desenare=false;
let startX;
let startY;
var canvasOffset = $("#canvas").offset();
let pensula=document.querySelector('#pensula');
let offsetX=canvasOffset.left;
let offsetY=canvasOffset.top;
let isDown=false;
let el=document.querySelector('#cerc');
let patrat=document.querySelector('#patrat');
let triunghi=document.querySelector('#triunghi');

function Deseneaza()
{
    canvas.addEventListener('mousedown',function(e){
        e.preventDefault();
    e.stopPropagation();
    context.beginPath();
    context.moveTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
    isDown=true;

    })
    canvas.addEventListener('mouseup',function(e){
        if(isDown){
            e.preventDefault();
            e.stopPropagation();
            isDown=false;
        }
        e.preventDefault();
    })
    canvas.addEventListener('mousemove', function(e){
        context.lineTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
        context.strokeStyle=dr;
        context.lineWidth=gr;
        canvas.style.backgroundColor="black"
        context.lineCap="round"
        context.lineJoin="round";
       // context.stroke();
        context.fill();
        console.log("desenata")

    })
}function Triunghi()
{ canvas.addEventListener('mousedown',function(e){
    e.preventDefault();
    e.stopPropagation()
    startX = parseInt(e.clientX - offsetX);
    startY = parseInt(e.clientY - offsetY);
    isDown=true;

 });
 canvas.addEventListener('mouseup',function(e){
     if (!isDown) {
                 return;
             }
             e.preventDefault();
             e.stopPropagation();
             isDown = false;
 });
 canvas.addEventListener('mousemove',function(e){
     if(isDown){
                  
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.backgroundColor=cl;
        context.save();
        context.beginPath();
            e.preventDefault();
            e.stopPropagation();
            mouseX = parseInt(e.clientX - offsetX);
            mouseY = parseInt(e.clientY - offsetY);
           
            context.moveTo(mouseX, mouseY);
            context.lineTo(startX,startY);
            context.lineTo(startY,startX);
            context.closePath();//inchidere triunghi
            context.stroke();

     }
 

});}

function Desen(){
    //functii pentru desenare in canvas
    function Start(e){
        isDown=true;
        context.beginPath();
       context.moveTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
         e.preventDefault();
    }
    
    function Stop(e){
        if(isDown){
            context.stroke();
            context.closePath();
            isDown=false;
        }
        e.preventDefault();
    }
    
    function Desenare(e)
    {if(isDown){
      
        context.lineTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
        context.strokeStyle=dr;
        context.lineWidth=gr;
        canvas.style.backgroundColor="black"
        context.lineCap="round"
        context.lineJoin="round";
       // context.stroke();
        context.fill();
        console.log("desenata")
    
    
    }
    }
    canvas.addEventListener('touchstart',Start,false);
        canvas.addEventListener('touchmove',Desenare,false);
        canvas.addEventListener('mousedown',Start,false);
        canvas.addEventListener('mousemove',Desenare,false)
        canvas.addEventListener('touchend',Stop,false);
        canvas.addEventListener('mouseup',Stop,false);
        canvas.addEventListener('mouseout',Stop,false);
    
    }
    