// create array called "questions" to hold our objects (questions and mutliple choice answers)
var quiz = [
    {question: "What is the last name of the red-headed family who befriends Harry?",
    choices: ["Beasley", "Weasley", "Measley"],
    correct: 1
    },
    {question: "What is the name of the dragon Hagrid raises?",
    choices: ["Norbert", "Norman", "Norsef"],
    correct: 0
    },
    {question: "What is the train track location Hogwarts students caught the train from?",
    choices: ["Platform 10 1/2", "Platform 8 1/4", "Platform 9 3/4"],
    correct: 2
    },
    {question: "What spell do wizards cast to remove parts of someone's memory?",
    choices: ["Obliviate", "Obliterate", "Obsinerate"],
    correct: 0
    },
    {question: "What does Harry say to close the Marauder's Map and make it blank?",
    choices: ["Mapius Finito", "Blankerous Onus", "Mischief Managed"],
    correct: 2
    },
    {question: "What is the name of the Malfoy's house elf?",
    choices: ["Nobby", "Robby", "Dobby"],
    correct: 2
    },
    {question: "What spell would be used to summon a wizard's patronus?",
    choices: ["Expelliarmus Patronus!", "Expecto Patronus!", "Accio Patronus!"],
    correct: 0
    },
    {question: "Hermione's parents are both ________.",
    choices: ["professors", "dentists", "architects"],
    correct: 1
    },
    {question: "Crabbe and Goyle are the last names of _______'s best friends.",
    choices: ["Weasley", "Tran", "Malfoy"],
    correct: 2
    },
    {question: "What color is unicorn blood?",
    choices: ["gold", "Silver", "copper"],
    correct: 1
    },
    {question: "What is the name of Filch's cat?",
    choices: ["Mrs. Norris", "Mrs. van Damme", "Mrs. Li"],
    correct: 0
    },
    {question: "What spell would a wizard use to levitate an object?",
    choices: ["Liftiosa Hoveriosa", "Leviosa Liftiosa", "Wingardium Leviosa"],
    correct: 2
    },
    {question: "What are the magical creatures called who guard Azkaban prison?",
    choices: ["Defectors", "Dementors", "Demonists"],
    correct: 1
    },
    {question: "What is the name of Harry's owl?",
    choices: ["Crookshanks", "Hedwig", "Fawkes"],
    correct: 1
    },
    {question: "What Quidditch position does Harry play?",
    choices: ["Seeker", "Fetcher", "Catcher"],
    correct: 0
    }
];


// FUNCTIONS & VARIABLES-----------------------------------------------------------------------------------

// var userAnswers = [];

var correctA = 0;

var incorrectA = 0;

var unanswered = 0;

// wrap all the JS in document.ready function
$(document).ready(function() {

    // startButton function (set it to document.ready so nothing loads until the start button is clicked)
    var startButton = $("#start")
    
    startButton.on("click", function() {
        startTimer();
        fillQuiz();
    });  


    // generates the quiz questions and answers in the HTML element with the "form" ID
    var quizForm = $("#form");
    
    var fillQuiz = function () {
        for (var i = 0; i < quiz.length; i++) {
            // convert the index number to a string instead of number so it can be used as the name attribute
            var questionNum = "question" + i.toString()
            // fill HTML form element with "quiz" class with questions
            var questionDiv = $("<div>");
            var pTag = $("<p>").text(quiz[i].question);
            // fill the HTML radio buttons with the answers from the array
            var inputOne = $("<input>").attr("type", "radio").attr("name", questionNum).attr("value", 0).attr("id", "choiceOne");
            var labelOne = $("<label>").text(quiz[i].choices[0]).attr("for", "choiceOne")
            var inputTwo = $("<input>").attr("type", "radio").attr("name", questionNum).attr("value", 1).attr("id", "choiceTwo");
            var labelTwo = $("<label>").text(quiz[i].choices[1]).attr("for", "choiceTwo")
            var inputThree = $("<input>").attr("type", "radio").attr("name", questionNum).attr("value", 2).attr("id", "choiceThree");
            var labelThree = $("<label>").text(quiz[i].choices[2]).attr("for", "choiceThree")

            questionDiv.append(pTag);
            questionDiv.append(inputOne);
            questionDiv.append(labelOne);
            questionDiv.append(inputTwo);
            questionDiv.append(labelTwo);
            questionDiv.append(inputThree);
            questionDiv.append(labelThree);
            
            quizForm.append(questionDiv);
            // 
            // $("#question").text(quiz[i].question);
            // 
            // $("#choice1").text(quiz[i].choiceA);
            // $("#choice2").text(quiz[i].choiceB);
            // $("#choice3").text(quiz[i].choiceC);
        }
    };


    // empty "userAnswers" array after each answer has been checked against the correct answer
    function userAnswersEmpty() {
        //empty your array
        userAnswers = [];
    }


    // function for Submit button that for the user to push if they beat the countdown timer    
    var submitButton = $("#submit")
    submitButton.on("click", function() {
        showResults();
        clearTimeout(startTimer);
        console.log("submitButton works")
    });


    // showResults function that shows the # of correct, incorrect, and unanswered questions
    // then shows results on this results page
    var checkAnswers  = function () {
        for (var i = 0; i < quiz.length; i++) {
            if (userAnswers[n] == quiz[i].correct) {
                correctA++;
                userAnswersEmpty();
            } else if (userAnswers[n] != quiz[i].correct) {
                incorrectA++;
                userAnswersEmpty();
            } else {
                unanswered++;
                userAnswersEmpty();
            }
        }
    };

    var resultsContainer  = function () {
        document.getElementsByClassName(".results");
        (".results").text("Correct: " + correctA);
        (".results").push("Incorrect: " + incorrectA);
        (".results").push("Unanswered: " + unanswered);
    };

    var showResults  = function () {
        // checkAnswers();
        resultsContainer();
    };


    // play game again (restart function essentially but your shouldn't have to push the start button again)
    var againButton  = function () {
        document.getElementsByClassName("again");
        againButton.on("click", function() {
            resultsContainer.hide;
            fillQuiz();
            startTimer();
        });
    };


    // COUNTDOWN TIMER------------------------------------------------------------------------------
    // timer function that counts down from 60 seconds
    var timer = 60;
    var HTMLtimer = $("#timer");
    // Set timer to 60 seconds and decrement by 1 second in real time
    var startTimer = function() {
        var countdown = setInterval(function() {
            // Display the result in the HTML <div> with the class ".timer"
            HTMLtimer.text(timer)
            timer--;
            
            // If the countdown is finished, alert user 
            if (timer == 0) {
                clearInterval(countdown);
                alert("Time's up!");
            }
        }, 1000);
    } 
})