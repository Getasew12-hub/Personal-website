
// var radeom=Math.random();
// radeom=radeom*6+1;
// radeom=Math.floor(radeom);
// var n1=1;    
// var n2=2;
// var n3=3;
// var n4=4;
// var n5=5;
// var n6=6;
// var radeom2=Math.random();
// radeom2=radeom2*6+1;
// radeom2=Math.floor(radeom2);
// var m1=1;
//  var m2=2;
//  var m3=3;
//  var m4=4;
//  var m5=5;
//  var m6=6;
// onmouseover
// style.backgroundColor="orange";

// var b=0;
 function chnage(){


    var radeom=Math.random();
    radeom=radeom*6+1;
    radeom=Math.floor(radeom);
    var n1=1;    
    var n2=2;
    var n3=3;
    var n4=4;
    var n5=5;
    var n6=6;
    var radeom2=Math.random();
    radeom2=radeom2*6+1;
    radeom2=Math.floor(radeom2);
    var m1=1;
     var m2=2;
     var m3=3;
     var m4=4;
     var m5=5;
     var m6=6;











if(radeom==n1){
    document.querySelector(".player1 img").setAttribute("src","./images/dice1.png");
}
if(radeom==n2){
    document.querySelector(".player1 img").setAttribute("src","./images/dice2.png");
}
if(radeom==n3){
    document.querySelector(".player1 img").setAttribute("src","./images/dice3.png");
}
if(radeom==n4){
    document.querySelector(".player1 img").setAttribute("src","./images/dice4.png");
}
if(radeom==n5){
    document.querySelector(".player1 img").setAttribute("src","./images/dice5.png");
}
if(radeom==n6){
    document.querySelector(".player1 img").setAttribute("src","./images/dice6.png");
}



if(radeom2==n1){
    document.querySelector(".player2 img").setAttribute("src","./images/dice1.png");
}
if(radeom2==n2){
    document.querySelector(".player2 img").setAttribute("src","./images/dice2.png");
}
if(radeom2==n3){
    document.querySelector(".player2 img").setAttribute("src","./images/dice3.png");
}
if(radeom2==n4){
    document.querySelector(".player2 img").setAttribute("src","./images/dice4.png");
}
if(radeom2==n5){
    document.querySelector(".player2 img").setAttribute("src","./images/dice5.png");
}
if(radeom2==n6){
    document.querySelector(".player2 img").setAttribute("src","./images/dice6.png");
}

if(radeom2>radeom){
    document.querySelector(".score").innerHTML="<h1>player 2 win </h1>";

    
}
if(radeom2<radeom){
    document.querySelector(".score").innerHTML="<h1>player 1 win</h1>";
    
}
if(radeom2==radeom){
    document.querySelector(".score").innerHTML="<h1>Both equal</h1>";
    
}



 }
