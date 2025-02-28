






// document.querySelector("button").addEventListener("click",setimage);
document.querySelector("button").addEventListener("click",setimage);
function setimage(){
    
    var number=Math.random();
    number=number*6+1;
    number=Math.floor(number);

    var number2=Math.random();
    number2=number2*6+1;
    number2=Math.floor(number2);

    var imag="../images/dice"+number+".png";

     var imag2="../images/dice"+number2+".png";
     
if(number==1){
    document.querySelector(".image1").setAttribute("src",imag)
}
if(number==2){
    document.querySelector(".image1").setAttribute("src",imag)
}
if(number==3){
    document.querySelector(".image1").setAttribute("src",imag)
}
if(number==4){
    document.querySelector(".image1").setAttribute("src",imag)
}
if(number==5){
    document.querySelector(".image1").setAttribute("src",imag)
}
if(number==6){
    document.querySelector(".image1").setAttribute("src",imag)
}



if(number2==1){
    document.querySelector(".image2").setAttribute("src",imag2)
}
if(number2==2){
    document.querySelector(".image2").setAttribute("src",imag2)
}
if(number2==3){
    document.querySelector(".image2").setAttribute("src",imag2)
}
if(number2==4){
    document.querySelector(".image2").setAttribute("src",imag2)
}
if(number2==5){
    document.querySelector(".image2").setAttribute("src",imag2)
}
if(number2==6){
    document.querySelector(".image2").setAttribute("src",imag2)
}


if(number>number2){
    document.querySelector("h1").innerHTML="Player 1<br> Win!!";
}
if(number<number2){
    document.querySelector("h1").innerHTML="Player 2 <br>Win!!";
}
if(number==number2){
    document.querySelector("h1").innerHTML="Both Equal<br><br>";
}

}