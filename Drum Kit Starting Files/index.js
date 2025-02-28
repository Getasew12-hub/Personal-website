var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num ;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var soundtrak=this.innerHTML;
    sound(soundtrak);
    animationButton(soundtrak);
   
   });
}
document.addEventListener("keypress",function (even){
   sound(even.key);
   animationButton(even.key);
   
});
    function sound(onsound){
 if( onsound=="w"){
    var audio= new Audio('./sounds/tom-1.mp3');
    audio.play();
 }
 if(onsound=="a"){
    var audio= new Audio('./sounds/tom-2.mp3');
    audio.play();
 }
 if(onsound=="s"){
    var audio= new Audio('./sounds/tom-3.mp3');
    audio.play();
 }
 if(onsound=="d"){
    var audio= new Audio('./sounds/tom-4.mp3');
    audio.play();
 }
 if(onsound=="j"){
    var audio= new Audio('./sounds/snare.mp3');
    audio.play();
 }
 if(onsound=="k"){
    var audio= new Audio('./sounds/crash.mp3');
    audio.play();
 }
 if(onsound=="l"){
    var audio= new Audio('./sounds/kick-bass.mp3');
    audio.play();
 }

}


function animationButton(curent){
 var activate= document.querySelector("."+curent);

 activate.classList.add("pressed");
 setTimeout(function(){
   activate.classList.remove("pressed")
 },100);

 


}
// var audio= new Audio('./sounds/tom-4.mp3');
// audio.play();




