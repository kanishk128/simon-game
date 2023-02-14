var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);
    $("."+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").click(function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(this.id);
    animatePress(this.id);
})

function playSound(colour){
    switch (colour) {
        case "red":
            var red=new Audio("sounds/red.mp3")
            red.play();
            break;
        case "blue":
            var blue=new Audio("sounds/blue.mp3")
            blue.play();
            break;
        case "yellow":
            var yellow=new Audio("sounds/yellow.mp3")
            yellow.play();
            break;
        case "green":
            var green=new Audio("sounds/green.mp3")
            green.play();
            break;
        default:
            break;
    }
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    },100)
}