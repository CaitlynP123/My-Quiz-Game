class Questions{
    constructor(){

        this.enterName
        this.enterAns
        this.submit

        this.heading
        this.choice

        this.question
        
        this.wrong1
        this.wrong2
        this.wrong3
        this.wrong4
        this.wrong5
        this.ans    
    }

    hides(){
        this.enterName.hide()
        this.enterAns.hide()
        this.submit.hide()

        this.choice.hide()
        this.question.hide()
        
        this.wrong1.hide()
        this.wrong2.hide()
        this.wrong3.hide()
        this.wrong4.hide()
        this.wrong5.hide()
        this.ans.hide()    
    }

    display(){
        this.heading = createElement('h1', "My Quiz Game")
        this.heading.position(375,10)
        this.heading = createElement('h1',"----------------------------");
        this.heading.position(320,25)

        this.question = createElement('h2', "What is a synonym for the word 'disaster'?")
        this.question.position(50,100)
    
        this.wrong1 = createElement('h3',"1) 2020")
        this.wrong1.position(100,130)

        this.wrong2 = createElement('h3',"2) Tragedgedgedgedgedgedgedy")
        this.wrong2.position(100,160)
    
        this.wrong3 = createElement('h3',"3) A Project done the day before the submission date")
        this.wrong3.position(100,190)
    
        this.ans = createElement('h3', "4) Catastrophe")
        this.ans.position(100,220)
    
        this.wrong4 = createElement('h3',"5) Failing an exam")
        this.wrong4.position(100,250)
    
        this.wrong5 = createElement('h3',"6) Breaking a vase and not having a sibling to blame it on")
        this.wrong5.position(100,280)

        this.enterName = createInput("Enter Your Name")
        this.enterName.position(600,175)
        
        this.enterAns = createInput("Enter Your Answer")
        this.enterAns.position(600,205)

        this.submit = createButton("Submit")
        this.submit.position(660,230)

        this.submit.mousePressed(()=>{
            this.enterName.hide();
            this.enterAns.hide();
            this.submit.hide();

            contestant.name = this.enterName.value();
            contestant.answer = this.enterAns.value();
            
            contestantCount+=1;
            contestant.index = contestantCount;
            
            contestant.update();
            contestant.updateCount(contestantCount);
          });
    }
}