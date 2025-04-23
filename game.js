
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;


$(document).on("keypress",function(){
    if (!started) {
       $("#level-title").text("Level " + level);
       nextSequence();
       started = true;
      }
    });
    
    $(".btn").on("click",function(){
        var userChosenColour=$(this).attr("id");
        userClickedPattern.push(userChosenColour);
       playSound(userChosenColour);
       animatePress(userChosenColour);
       
       checkAnswer(userClickedPattern.length-1);
     });

     function checkAnswer(currentLevel){
        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
          console.log("success");
        }
        if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }else{
            console.log("wrong");

            playSound("wrong");

            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
 
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
        }
        
        
        }

        function nextSequence(){
            level++;
            userClickedPattern=[];
            $("#level-title").text("Level " + level);
            var RandomNumber=Math.floor(Math.random()*4);
            var randomChosenColour=buttonColours[RandomNumber];
            gamePattern.push(randomChosenColour);
        
            $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
           playSound(randomChosenColour);
           
        }
function startOver(){
    started=false;
    gamePattern=[];
    level=0;

}
function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed"); 
    }, 100); 
    }







