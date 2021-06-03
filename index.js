var buttonColors=["red","blue","yellow","green"];

var gamePattern=[];
var userClickedPattern=[];

var level=0;
var started = true;


$(document).keypress(function(){
    if(started){
    $("#level-title").text("Level "+ level);
    nextSequence();
started=false;
}
});

$(".btn").click(function(){
   var userChoosenColor=$(this).attr("id");
   
   userClickedPattern.push(userChoosenColor);
   playSound(userChoosenColor);
   animatePress(userChoosenColor);
   checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
        
        
    }
    else{
        playSound("wrong");
        
        $("body").addClass("game-over");
        $("#level-title").text("Game over!Press any key to restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
            
          }, 100);


         
             restart();

    }


}
function nextSequence(){
    userClickedPattern=[];
   level++;
   $("#level-title").text("Level " + level);
    var randomColor= buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomColor);

  $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);  

    playSound(randomColor);
    
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    
    
       },150);
}
function playSound(name){
    var audio=new Audio("sounds/" + name + ".mp3");
    audio.play();
}




function restart(){
    level=0;
    gamePattern=[];
    started=true;
}




