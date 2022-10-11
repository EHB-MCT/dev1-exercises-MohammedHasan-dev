"use strict";
drawName();
function drawName(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.fillStyle = "red"; 
    context.lineWidth = 5;
   context.beginPath();
   context.rect(50,50,100,100);
   context.fill();
   context.stroke();
//context.fillStyle = "yellow";
//context.fillRect(250,300,600,600);
context.beginPath();
context.fillStyle = "blue"
context.arc(200,200,50,0,Math.PI,true);
context.fill();

context.beginPath();
context.fillStyle = "orange";
context.arc(300,200,50,0, Math.PI * 2);
context.fill();
}




            