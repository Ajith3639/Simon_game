var buttonColors=["red","blue","yellow","green"];
var gamePattern=[];
var userClickedPattern=[];
$(".btn").click(function(){
   var userChoosenColor=$(this).attr("id");
   
   playSound(userChoosenColor);
   userClickedPattern.push(userChoosenColor);
   console.log(userClickedPattern);
});
function nextSequence(){
    var randomColor= buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomColor);
    $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+randomColor+".mp3");
    audio.play();
    playSound(randomColor);
}
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}


