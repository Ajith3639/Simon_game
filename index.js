var buttonColors=["red","blue","yellow","green"];
var gamePattern=[];

function nextSequence(){
    var randomColor= buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+randomColor+".mp3");
    audio.play();
}


