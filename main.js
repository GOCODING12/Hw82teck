var mouseEvent="";
var last_position_mouse_X, last_position_mouse_Y;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var color="black";
var width=1;
var radius=20;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    Current_position_mouse_X= e.clientX - canvas.offsetLeft;
    Current_position_mouse_Y= e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.arc(Current_position_mouse_X,Current_position_mouse_Y,radius,0,2 * Math.PI);
        ctx.stroke();
    }
    last_position_mouse_X=Current_position_mouse_X;
    last_position_mouse_Y=Current_position_mouse_Y;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}