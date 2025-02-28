var ndrum=document.querySelectorAll(".drum");

for(var i=0;i<ndrum.length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", hello);
function hello(){
 var tracksound= this.innerHTML;
 animation(tracksound);

 if(tracksound=="w"){
    var audio= new Audio("../sounds/tom-1.mp3");
    audio.play();
 }
 if(tracksound=="a"){
    var audio= new Audio("../sounds/tom-2.mp3");
    audio.play();
 }
 if(tracksound=="s"){
    var audio= new Audio("../sounds/tom-3.mp3");
    audio.play();
 }
 if(tracksound=="d"){
    var audio= new Audio("../sounds/tom-4.mp3");
    audio.play();
 }
 if(tracksound=="j"){
    var audio= new Audio("../sounds/snare.mp3");
    audio.play();
 }
 if(tracksound=="k"){
    var audio= new Audio("../sounds/crash.mp3");
    audio.play();
 }
 if(tracksound=="l"){
    var audio= new Audio("../sounds/kick-bass.mp3");
    audio.play();
    
 }

}


}


function animation(click){

     var activate=document.querySelector("."+click);
     activate.classList.add("click");


    setTimeout( function (){
        activate.classList.remove("click");
    },100);


}

