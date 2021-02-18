class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
        gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
      
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
      
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }

        question = new Questions()
        question.display();
      }
    }
  
    play(){     
      Contestant.getPlayerInfo();
      
      if(allContestants !== undefined){
        fill(0);
        textSize(30);
        text("Result of the Quiz",340, 350);
        text("----------------------------",320, 365);
   
        var display_Answers = 360;
 
        for(var plr in allContestants){
      
          var correctAns = "4";
          if (correctAns === allContestants[plr].answer){
            fill("green")
          }
          else{
            fill("red");
          }
            
          display_Answers+=30;
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
    }
  }
}