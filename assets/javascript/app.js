$(document).ready(function () {
    //array of questions
    var questions = [{
       question:"Which Friend hates thanksgiving?",
       answerList:["Ross","Chandler","Phoebe","Joey"],
       answer:1,
       image: "assets/images/thanksgiving.gif"
    },{
        question: "What Name did Ross say at the altar?",
        answerList: ["Emily","Nicole","Emma","Rachel"],
        answer:3,
        image:"assets/images/itaketheerachel.gif"
    },{
        question:"What was the name of Chandler's on-again off-again girlfriend throughout the series?",
        answerList:["Julie","Susie","Mary-Angela","Janice"],
        answer:3,
        image:"assets/images/janice1.gif"
    },{
        question:"Who officiated Monica and Chandlers Wedding?",
        answerList:["Phoebe", "Ross","Joey","A Greek Orthodox Priest"],
        answer:2,
        image:"assets/images/wedding.gif"
    },{
        question:"What type of animal was Ross's pet by the name of Marcel?",
        answerList:["Dog","Cat","Monkey","Duck"],
        answer:2,
        image:"assets/images/marcel.gif"
    },{
        question:"What is Phoebe's twin sisters name?",
        answerList:["Ursula","Regina","Jenny","Carol"],
        answer:0,
        image:"assets/images/ursula.gif"
    },{
        question:"Which Friend was obese in high school?",
        answerList:["Joey","Monica","Rachel","Chandler"],
        answer:1,
        image:"assets/images/fatmonica.gif"
    },{
        question:"What type of animals were Joey and Chandler's two pets?",
        answerList:["Dog & Cat","Chick & Duck","Monkey & Cat","Dog & Duck"],
        answer:1,
        image:"assets/images/chickandduck.gif"
    },{
        question:"What' the name of Rachel and Monica's annoying neighbor?",
        answerList:["Mr. Heckles","Mr. Davis","Mr. Flanigan","Mr. Phalanges"],
        answer:0,
        image:"assets/images/mrheckles.gif"
    },{
        question:"Who lives across the street from Monica & Rachel?",
        answerList:["Ugly Guy","Fat Guy","Ugly Naked Girl","Ugly Naked Guy"],
        answer:3,
        image:"assets/images/uglynakedguy.gif"
    },{
        question:"How many times has Ross been married?",
        answerList:["5 times","3 times","7 times","4 times"],
        answer:1,
        image:"assets/images/rossmarriage.gif"
    },{
        question:"Who did Rachel leave at the altar?",
        answerList:["Ross","Barry","Paolo","Chandler"],
        answer:1,
        image:"assets/images/rachelweddingdress.gif"
    },{
        question:"Who does Monica marry?",
        answerList:["Joey","Richard","Chandler","Funny Bobby"],
        answer:2,
        image:"assets/images/wedding.gif"
    },{
        question:"Who does Joey play on Days of our Lives?",
        answerList:["Lucky Spencer","Dr. Drake Ramoray","Matt LeBlanc","Bo Brady"],
        answer:1,
        image:"assets/images/drdrake.gif"
    },{
        question:"Whats the name of Phoebe's altar ego?",
        answerList:["princess consuela banana hammock","Frances","Regina Falange","Rachel Greene"],
        answer:2,
        image:"assets/images/regina.gif"
    },{
        question:"Who has a 'nubbin?",
        answerList:["Joey","Ugly Naked Guy","Richard","Chandler"],
        answer:3,
        image:"assets/images/nubbin.gif"
    },{
        question:"What is the name of Joey's Chair?",
        answerList:["Susie","Jenny","Rosita","Stevie"],
        answer:2,
        image:"assets/images/rosita.gif"
    },{
        question:"When Ross was a kid whe created a comic book, What was the name of the main Character?",
        answerList:["DinoMan","Science Boy","Super Paleontologist","Bob"],
        answer:1,
        image:"assets/images/scienceboy.jpg"
    },{
        question:"Who always says, 'WE WERE ON A BREAK!'",
        answerList:["Chandler","Fun Bobby","Ross","The Mattress King"],
        answer:2,
        image:"assets/images/wewereonabreak.gif"
    },{
        question:"What is Janice's famous catchphrase?",
        answerList:["Janice's day of fun!","OH.MY.GOD.","Mr. Chandler Bing","BingALing"],
        answer:1,
        image:"assets/images/janice.gif"
    },{   
        question:"What item was being moved upstairs when Ross kept yelling P-I-V-O-T!",
        answerList:["TV","Mattress","Couch","Table"],
        answer:2,
        image:"assets/images/pivot.gif"
    },{   
        question:"How many babies did Phoebe carry for her brother?",
        answerList:["5","2","1","3"],
        answer:3,
        image:"assets/images/phoebepreg.gif"
    },{   
        question:"Who does Ross marry in Las Vegas?",
        answerList:["Julie","Rachel","Janice","Phoebe"],
        answer:1,
        image:"assets/images/lasvegas.gif"
    },{   
        question:"Which of Phoebe's songs is turned into a jingle?",
        answerList:["Smelly Cat","Two of them Kissed Last Night","Grandma","Sometimes"],
        answer:0,
        image:"assets/images/smellycat.gif"
    },{   
        question:"How many seasons of Friends were filmed?",
        answerList:["8","13","10","6"],
        answer:2,
        image:"assets/images/seasons.gif"
    }]
    //declaring variables
    //question-right/wrong counter
    var correctChoices= 0;
    var wrongChoices= 0;
    
    //current question
    var currentQuestion= 0;
    
    //score of player
    var unanswered= 0;
    var answered= 0;
    var playerSelect= 0;
    
    //image
    

    //time
    var sec=  0;
    var time= 0;

    //response after answer is chosen
    var message = {
        correct: "YAY!",
        incorrect: "Could you BE anymore wrong??",
        timesUp:"Times up...'WE WERE ON A BREAK!'-Ross",
        finished:"Oh Man! I'm So excited, I may Vomit!-Chandler"
    }
    //variables for audio function
    var correctaudio = document.getElementById("correctaud");
    var incorrectaudio = document.getElementById("incorrectaud");
    var timesupaudio = document.getElementById("timesupaud");
    var finishedaudio =document.getElementById("finishedaud");

    //its function time
    function startGame() {
        $('#message').empty();
        $('#correctAnswer').empty();
        $('#incorrectAnswer').empty();
        $('#unanswered').empty();
        currentQuestion = 0;
        correctChoices = 0;
        wrongChoices = 0;
        unanswered =0;
        newQuestion()
    }

    function countDown(){
        sec=15;
        $('#timer').html('<h2> Time Left: ' + sec + '</h2>');
        answered = true;
        time= setInterval (showCountDown,1500);
    }

    function showCountDown(){
        sec--;
        $('#timer').html('<h2>Time Left: ' + sec + '</h2>');
        if (sec < 1){
            clearInterval(time);
            answered = false;
            answerPage()
        }
    }

    function newQuestion(){
        $('#message').empty();
        $('#correctAnswer').empty();
        answered = true;

        $('#question').html('Question #' + (currentQuestion + 1) + '/' + questions.length);
        $('#question').html('<h3>' + questions[currentQuestion].question + '</h3>');
        for (var i = 0; i < 4; i++){
            var choices = $('<div>');
            $('#timer').show();
            choices.text(questions[currentQuestion].answerList[i]);
            choices.attr({'data-index': i });
            choices.addClass('thisChoice');
            $('#answerList').append(choices);
        }
        countDown();
        $('.thisChoice').on('click', function(){
            playerSelect= $(this).data('index');
            clearInterval(time);
            answerPage()
        });
    }
    
    function answerPage(){
        $('#currentQuestion').empty();
        $('.thisChoice').empty();
        $('#question').empty();

        //holds spot for answer
        var rightAnswerText = questions[currentQuestion].answerList[questions[currentQuestion].answer];
        //correct answer in array
        var rightAnswerIndex = questions[currentQuestion].answer;

        if ((playerSelect == rightAnswerIndex) && (answered == true)){
            correctChoices++
            $('#timer').hide();
            $('#message').html(message.correct);
            correctaudio.play();
            $('.logo').html('<img src="' + questions[currentQuestion].image + '"/>');

        } else if ((playerSelect != rightAnswerIndex) && (answered ==true)) {
            wrongChoices++
            $('#timer').hide();
            $('#message').html(message.incorrect);
            incorrectaudio.play();
            $('#correctAnswer').html('The correct answer is: ' + rightAnswerText);
            $('.logo').html('<img src="' + questions[currentQuestion].image + '"/>');
        } else {
            unanswered++
            $('#timer').hide();
            $('#message').html(message.timesUp);
            timesupaudio.play();
            $('#correctAnswer').html('The correct answer is: ' + rightAnswerText);
            answered = true;
            $('.logo').html('<img src="' + questions[currentQuestion].image + '"/>');
        }

        if (currentQuestion == (questions.length - 1)) {
            setTimeout(scoreBoard, 2000)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 3000);
        }

    }
    
    function scoreBoard() {
        $('#timer').empty();
        $('#message').empty();
        $('#correctAnswer').empty();
        $('#finalMessage').html(message.finished);
        finishedaudio.play();
        $('#correctAnswer').html("Correct Answers:" + correctChoices);
        $('#incorrectAnswer').html("Incorrect Answers:" + wrongChoices);
        $('#unanswered').html("Unanswered:" + unanswered);
        $('#restartGame_button').addClass('reset');
        $('#restartGame_button').show();
        $('#restartGame_button').html('Play Again!');
    }

    $('#getstarted').on('click', function(){
        $(this).hide();
        startGame();
    });

    $('#restartGame_button').on('click', function(){
        $('#finalMessage').hide();
        $(this).hide();
        startGame();
    });
});