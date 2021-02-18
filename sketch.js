var gameState = 0

var contestantCount, allContestants
var question, contestant, quiz
var answer

var database


function setup(){
  createCanvas(850,550);
  database = firebase.database();
  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background("yellow");

  if(contestantCount == 4){
    quiz.update(1);
    gameState = 1
  }

  if(gameState == 1){
    quiz.play();
  }
}