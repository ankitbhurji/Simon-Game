

buttonColours = ["red", "blue", "green", "yellow"];
randomChosenColour = "";
gamePattern = [];
userClickedPattern = [];



function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomNumber);
    }
nextSequence()






var audio_green = new Audio('sounds/green.mp3');
var audio_red = new Audio('sounds/red.mp3');
var audio_yellow = new Audio('sounds/yellow.mp3');
var audio_blue = new Audio('sounds/blue.mp3');


function green(){
    audio_green.play();
    userClickedPattern.push("green");
    // console.log(userClickedPattern)
}
function red(){
    audio_red.play();
    userClickedPattern.push("red");
    // console.log(userClickedPattern)
}
function yellow(){
    audio_yellow.play();
    userClickedPattern.push("yellow");
    // console.log(userClickedPattern)
}
function blue(){
    audio_blue.play();
    userClickedPattern.push("blue");
    // console.log(userClickedPattern)
}

document.addEventListener('keypress', function(event){
    if(event.code == "KeyA"){
        document.getElementById("header").innerHTML = 'Player 1'
    }
    
})