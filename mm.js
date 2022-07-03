//variabile globale
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 300;
const context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

let dr = "black";
let gr = "3";
let cl = "white"
//let desenare=false;
let startX;
let startY;
var canvasOffset = $("#canvas").offset();
let pensula = document.querySelector('#pensula');
let offsetX = canvasOffset.left;
let offsetY = canvasOffset.top;
let isDown = false;
let el = document.querySelector('#cerc');
let patrat = document.querySelector('#patrat');
let triunghi = document.querySelector('#triunghi');

let clicked = 'none';


//functie desenare cerc
function Cerc() {
    clicked = 'c';
    function drawOval(x, y) {
        // context.clearRect(0, 0, canvas.width, canvas.height);
        // context.beginPath();
        context.strokeStyle = dr;
        context.moveTo(startX, startY + (y - startY) / 2);
        context.bezierCurveTo(startX, startY, x, startY, x, startY + (y - startY) / 2);
        context.bezierCurveTo(x, y, startX, y, startX, startY + (y - startY) / 2);
        // context.closePath();
        console.log('drawOval')
        context.stroke();
    }
    raza = 0;
    canvas.addEventListener('mousedown', function (e) {
        canvas.style.backgroundColor = cl;
        e.preventDefault();
        console.log('mousedown')
        e.stopPropagation()
        startX = parseInt(e.clientX - offsetX);
        startY = parseInt(e.clientY - offsetY);
        isDown = true;

    });
    // canvas.removeEventListener("mouseup",Patrat.mouseUPPatrat, true);
    function mouseUPCerc(e){
        if(clicked=='c'){
            if (!isDown) {
                console.log('mouseup')
                return;
            }
            canvas.style.backgroundColor = cl;
            // context.save();
            context.beginPath();
    
            e.preventDefault();
            e.stopPropagation();
    
            context.fillStyle = "white";
            mouseX = parseInt(e.clientX - offsetX);
                mouseY = parseInt(e.clientY - offsetY);
            drawOval(mouseX, mouseY);
            // drawOval(startX, startY);
    context.closePath();
            isDown = false;
        }
       else canvas.removeEventListener('mouseup', mouseUPCerc);
    }
    // canvas.addEventListener('mouseup', e => mouseUPCerc(e));
    canvas.addEventListener('mouseup',mouseUPCerc);
    
    canvas.addEventListener('mousemove', function (e) {
        if (isDown) {
            console.log('mousemove')
            // context.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.backgroundColor = cl;
            // context.save();
            // context.beginPath();
            e.preventDefault();
            e.stopPropagation();
            // mouseX = parseInt(e.clientX - offsetX);
            // mouseY = parseInt(e.clientY - offsetY);
            // context.fillStyle = "white";
            // drawOval(mouseX, mouseY);
        }

    })
}

function Patrat() {
    clicked = 'p';
    canvas.addEventListener('mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation()
        startX = parseInt(e.clientX - offsetX);
        startY = parseInt(e.clientY - offsetY);
        isDown = true;

    });    
    function mouseUPPatrat(e){
        if(clicked=='p'){
            if (!isDown) {
                return;
            }
            canvas.style.backgroundColor = cl;
                context.save();
                context.beginPath();
            console.log('mouse up patrat!')
            e.preventDefault();
            e.stopPropagation();
            context.fillStyle = "white";
            let w = Math.abs(startX - mouseX);
            context.strokeStyle = dr;
            context.strokeRect(mouseX, mouseY, w, w)
            isDown = false;
        }
        else         canvas.removeEventListener("mouseup",mouseUPPatrat);
    }
    canvas.addEventListener('mouseup', mouseUPPatrat);
    canvas.addEventListener('mousemove', function (e) {
        if (isDown) {
            // context.clearRect(0, 0, canvas.width, canvas.height);
            e.preventDefault();
            e.stopPropagation();
            mouseX = parseInt(e.clientX - offsetX);
            mouseY = parseInt(e.clientY - offsetY);
        }
    })
    // canvas.removeEventListener("mouseup",mouseUPPatrat);
}
function Triunghi() {
    clicked = 't'
    canvas.addEventListener('mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation()
        startX = parseInt(e.clientX - offsetX);
        startY = parseInt(e.clientY - offsetY);
        isDown = true;
    });

    function mouseUpTriunghi(e){
        if(clicked=='t'){
            if (!isDown) {
                return;
            }
            canvas.style.backgroundColor = cl;
                context.save();
                context.beginPath();
            e.preventDefault();
            e.stopPropagation();
            context.strokeStyle = dr;
            context.moveTo(mouseX, mouseY);
                context.lineTo(startX, startY);
                context.lineTo(startY, startX);
                context.closePath();//inchidere triunghi
                context.stroke();
            isDown = false;
        } else canvas.removeEventListener('mouseup',mouseUpTriunghi)
        
    }
    canvas.addEventListener('mouseup', mouseUpTriunghi);
    canvas.addEventListener('mousemove', function (e) {
        if (isDown) {
            // context.clearRect(0, 0, canvas.width, canvas.height);
            e.preventDefault();
            e.stopPropagation();
            mouseX = parseInt(e.clientX - offsetX);
            mouseY = parseInt(e.clientY - offsetY);     
        }
    });
}

//schimba fond pensula
function Schimba(e) {
    dr = e.style.background;
    console.log('apelata, dr e '+dr);
}
//schimba culoare canvas
function Back_color() {
    let color = document.querySelector("#backgr");
    context.fillStyle = color.value
    context.fillRect(0, 0, canvas.width, canvas.height);
    let c = color.value;
    canvas.style.backgroundColor = c;
}

function Desen() {
    //functii pentru desenare in canvas
    clicked = 'd';
    function Start(e) {
        isDown = true;
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        e.preventDefault();
    }

    function Stop(e) {
        if (isDown) {
            context.stroke();
            context.closePath();
            isDown = false;
        }
        e.preventDefault();
    }

    function Desenare(e) {
        if (isDown) {
            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.strokeStyle = dr;
            context.lineWidth = gr;
            canvas.style.backgroundColor = "black"
            context.lineCap = "round"
            context.lineJoin = "round";
            // context.stroke();
            context.fill();
            console.log("desenata")
        }
    }
    if(clicked == 'd'){
        canvas.addEventListener('touchstart', Start, false);
        canvas.addEventListener('touchmove', Desenare, false);
        canvas.addEventListener('mousedown', Start, false);
        canvas.addEventListener('mousemove', Desenare, false)
        canvas.addEventListener('touchend', Stop, false);
        canvas.addEventListener('mouseup', Stop, false);
        canvas.addEventListener('mouseout', Stop, false);    
    }else {
        canvas.removeEventListener('touchstart', Start);
        canvas.removeEventListener('touchmove', Desenare);
        canvas.removeEventListener('mousedown', Start);
        canvas.removeEventListener('mousemove', Desenare)
        canvas.removeEventListener('touchend', Stop);
        canvas.removeEventListener('mouseup', Stop );
        canvas.removeEventListener('mouseout', Stop);
    }
    
}

function Desenare() {
    function Start() {
        isDown = true;
        De(e);
    }
    function finish() {
        console.log('isdown e false')
        isDown = false;
        context.beginPath();
    }
    function De(e) {
        if (!isDown) {
            isDown = true;
            return
        }
        context.lineWidth = gr;
        context.strokeStyle = cl;
        context.lineCap = "round";
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
    context.addEventListener('mousedown', Start);
    context.addEventListener('mouseup', finish);
    context.addEventListener('mousemove', De);
}
function Aplicatie() {
    el.addEventListener('click', ()=>{
        console.log('cerc')
        Cerc();
    } );
    patrat.addEventListener('click',()=>{
        console.log('Patrat')
        Patrat();
    } )
    triunghi.addEventListener('click', ()=>{
        console.log('Triunghi')
        Triunghi();
    });
    pensula.addEventListener('click',  ()=>{
        console.log('Desen')
        Desen();
    })
}
document.addEventListener('DOMContentLoaded', Aplicatie);

