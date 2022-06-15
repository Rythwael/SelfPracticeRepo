var buttonColours = ["red","blue","green","yellow"]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart = false

$(document).keypress(function(){
    if(!gameStart){
        $("#level-title").text("Level "+level)
        nextSequence()
        gameStart=true
    }
})
    

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(level)
})
    

function nextSequence(){
    var randomNumber = Math.floor((Math.random()*4))
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100)
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    audio.play()
    level++;
    $("#level-title").text("Level "+level)

}
function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play()
}
function animatePress(currentColour){
    $("."+currentColour).addClass("pressed")
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed")
    },100)
}
function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    gameStart = false
}
function checkAnswer(currentLevel){
    var currentIndex = userClickedPattern.length-1
    var currentPressed = userClickedPattern[currentIndex]
    if(currentPressed === gamePattern[currentIndex]){
        console.log("success");
        if(userClickedPattern.length===currentLevel){
            setTimeout(function(){
                userClickedPattern = [];
                nextSequence();
            },1000)
        }
    }else{
        console.log("wrong");
        var wrongAudio = new Audio("sounds/wrong.mp3")
        wrongAudio.play();
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200)
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver();
    }
}