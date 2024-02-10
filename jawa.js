// let box1=document.querySelector(".box1");
// let box2=document.querySelector(".box2");
// let box3=document.querySelector(".box3");
// let box4=document.querySelector(".box4");
// let body=document.querySelector("body");

// box1.addEventListener("click",function(){
//     body.style.backgroundColor="blue";
// })

// box2.addEventListener("click",function(){
//     body.style.backgroundColor="red";
// })

// box3.addEventListener("click",function(){
//     body.style.backgroundColor="aquamarine";
// })

// box4.addEventListener("click",function(){
//     body.style.backgroundColor=" plum";
// })

let buttons=document.querySelectorAll(".square");
let body=document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.id === "box1"){
            body.style.backgroundColor="blue";
        }
        if(e.target.id === "box2"){
            body.style.backgroundColor="red";
        }
        if(e.target.id === "box3"){
            body.style.backgroundColor="aquamarine";
        }
        if(e.target.id === "box4"){
            body.style.backgroundColor="plum";
        }
    });
});