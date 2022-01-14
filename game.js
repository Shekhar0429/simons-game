  var randomnumber;
  var gamePattern=[];
  var level=0;
  var started=false;
  var buttonColors = ["red","blue","green","yellow"];
  var userClickedPattern=[];


  $(document).keypress(function(){
    if(!started){
      $("#level-title").text("level     "+level);
      nextsequence();
      started=true;
    }
  });

  $(".btn").click(function(){
    var userChosenColor=$(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
  });


function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
       if(userClickedPattern.length===gamePattern.length){
         setTimeout(function(){
           nextsequence();
         },1000);
       }
}
else{
    playsound("wrong");

    $("body").addClass("gameover");

    setTimeout(function(){
      $("body").removeClass("gameover");
    },200);

    $("#level-title").text("Game over,Press any key to start");

    startover();
 }
}

function startover(){
  level=0;
  gamePattern=[];
  started=false;
}

function nextsequence(){
   userClickedPattern=[];

   level=level+1;

   $("#level-title").text("level   "+level);


randomnumber=Math.floor(Math.random()*4);
var randomChosenColor=buttonColors[randomnumber];

gamePattern.push(randomChosenColor);


$('#' +randomChosenColor).fadeOut(100).fadeIn(100);

playsound(randomChosenColor);


}


function playsound(name){
  switch(name){
    case "red":
     var redsound= new Audio("sounds/sounds_red.mp3");
     redsound.play();
     break;
    case "green":
     var greensound=new Audio("sounds/sounds_green.mp3");
     greensound.play();
     break;
    case "blue":
     var bluesound=new Audio("sounds/sounds_blue.mp3");
    bluesound.play();
     break;
   case "yellow":
     var yellowsound=new Audio("sounds/sounds_yellow.mp3");
      yellowsound.play();
     break;
   default :
      var wrongsound=new Audio("sounds/sounds_wrong.mp3");
      wrongsound.play();
  }
}
function animatePress(currentColor){
  $("." +currentColor).addClass("pressed");
  setTimeout(function(){
    $("."+currentColor).removeClass("pressed");
  },100);
}
