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
        image:"assets/images/thanksgiving.gif"
    },{
        question:"What was the name of Chandler's on-again off-again girlfriend throughout the series?",
        answerList:["Julie","Susie","Mary-Angela","Janice"],
        answer:3,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Who officiated Monica and Chandlers Wedding?",
        answerList:["Phoebe", "Ross","Joey","A Greek Orthodox Priest"],
        answer:2,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"What type of animal was Ross's pet by the name of Marcel?",
        answerList:["Dog","Cat","Monkey","Duck"],
        answer:2,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"What is Phoebe's twin sisters name?",
        answerList:["Ursula","Regina","Jenny","Carol"],
        answer:0,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Which Friend was obese in high school?",
        answerList:["Joey","Monica","Rachel","Chandler"],
        answer:1,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"What type of animals were Joey and Chandler's two pets?",
        answerList:["Dog & Cat","Chick & Duck","Monkey & Cat","Dog & Duck"],
        answer:1,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"What' the name of Rachel and Monica's annoying neighbor?",
        answerList:["Mr. Heckles","Mr. Davis","Mr. Flanigan","Mr. Phalanges"],
        answer:0,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Who lives across the street from Monica & Rachel?",
        answerList:["Ugly Guy","Fat Guy","Ugly Naked Girl","Ugly Naked Guy"],
        answer:3,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"How many times has Ross been married?",
        answerList:["5 times","3 times","7 times","4 times"],
        answer:1,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Who did Rachel leave at the altar?",
        answerList:["Ross","Barry","Paolo","Chandler"],
        answer:1,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Who does Monica marry?",
        answerList:["Joey","Richard","Chandler","Funny Bobby"],
        answer:2,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Who does Joey play on Days of our Lives",
        answerList:["Lucky Spencer","Dr. Drake Ramoray","Matt LeBlanc","Bo Brady"],
        answer:1,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Whats the name of Phoebe's altar ego",
        answerList:["princess consuela banana hammock","Frances","Regina Falange","Rachel Greene"],
        answer:2,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Who has a 'nubbin?",
        answerList:["Joey","Ugly Naked Guy","Richard","Chandler"],
        answer:3,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"What is the name of Joey's Chair?",
        answerList:["Susie","Jenny","Rosita","Stevie"],
        answer:2,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"When Ross was a kid whe created a comic book, What was the name of the main Character?",
        answerList:["DinoMan","Science Boy","Super Paleontologist","Bob"],
        answer:1,
        image:"assets/images/thanksgiving.gif"
    },{
        question:"Who always says, 'WE WERE ON A BREAK!'",
        answerList:["Chandler","Fun Bobby","Ross","The Mattress King"],
        answer:2,
        image:"assets/images/thanksgiving.gif"
    },{
        quetion:"What is Janice's famous catchphrase?",
        answerList:["Janice's day of fun!","OH.MY.GOD.","Mr. Chandler Bing","BingALing"],
        answer:1,
        image:"assets/images/thanksgiving.gif"
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
        $('#question').html('<h2>' + questions[currentQuestion].question + '</h2>');
        for (var i = 0; i < 4; i++){
            var choices = $('<div>');
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
        $('.question').empty();

        //holds spot for answer
        var rightAnswerText = questions[currentQuestion].answerList[questions[currentQuestion].answer];
        //correct answer in array
        var rightAnswerIndex = questions[currentQuestion].answer;

        if ((playerSelect == rightAnswerIndex) && (answered == true)){
            correctChoices++
            $('#message').html(message.correct);
            correctaudio.play();
        } else if ((playerSelect != rightAnswerIndex) && (answered ==true)) {
            wrongChoices++
            $('#message').html(message.incorrect);
            incorrectaudio.play();
            $('#correctAnswer').html('The correct answer is:' + rightAnswerText);
        
        } else {
            unanswered++
            $('#message').html(message.timesUp);
            timesupaudio.play();
            $('#correctAnswer').html('The correct answer is:' + rightAnswerText);
            answered = true;
        }

        if (currentQuestion == (questions.length - 1)) {
            setTimeout(scoreBoard, 3000)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 5000);
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
        $(this).hide();
        startGame();
    });
});