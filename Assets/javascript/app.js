// FUNCTIONS & VARIABLES-----------------------------------------------------------------------------------
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
    choices: ["Gold", "Silver", "Bronze"],
    correct: 1
    },
    {question: "What is the name of Filch's cat?",
    choices: ["Mrs. Norris", "Mrs. van Damme", "Mrs. Li"],
    correct: 0
    },
];


// results variables
var correctA = 0;
var incorrectA = 0;



// RESTART BUTTON (in results div)----------------------------------------------------------------------------------------------
var restartBtn  = $("restart");
restartBtn.on("click", function() {
    $("#results").hide();
    startTimer();
    fillQuiz();    
});

// FINISHED BUTTON (in quiz form)-----------------------------------------------------------------------------------------------
finishedBtn.attr("id", "submit")
quizForm.append(finishedBtn)
finishedBtn.on("click", function() {
    $("#form").hide();
    checkAnswers();
    $("#timer").hide();
    fillResults();
});


// wrap all the JS in document.ready function
$(document).ready(function() {
    // hide Finished and Play Again buttons at start
    $("#submit").hide();
    $("#restart").hide();

    // START BUTTON----------------------------------------------------------------------------------------------------------------
    var startButton = $("#start")
    // load quiz and start timer when the Start button is clicked
    startButton.on("click", function() {
        startTimer();
        fillQuiz();
    });  

    // TIME FUNCTION---------------------------------------------------------------------------------------------------------------
    // timer function that counts down from 60 seconds
    var timer = 3;
    var HTMLtimer = $("#timer");
    // Decrement timer by 1 second in real time
    var startTimer = function() {
        var countdown = setInterval(function() {
            // hide the start button
            $("#start").hide();
            // Display the result in the HTML <div> with the class ".timer"
            HTMLtimer.text("You have " + timer + " seconds to complete the quiz.")
            timer--;
            
            // If the countdown is finished, alert user 
            if (timer < 0) {
                clearInterval(countdown);
                $("#form").hide();
                checkAnswers();
                $("#timer").hide();
                $("#submit").hide();
                fillResults();
            }
        }, 1000);
    }


    // QUIZ FUNCTION---------------------------------------------------------------------------------------------------------------
    var quizForm = $("#form");
    
    var fillQuiz = function () {
        for (var i = 0; i < quiz.length; i++) {
            // convert the index number to a string instead of number so it can be used as the name attribute
            var questionNum = "question" + i.toString()
            // fill HTML form element with "quiz" class with questions
            var questionDiv = $("<div>");
            var finishedBtn = $("<button>");
            var pTag = $("<p>").text(quiz[i].question);
            // fill the HTML radio buttons with the answers from the array
            var inputOne = $("<input>").attr("type", "radio").attr("name", questionNum).attr("value", 0).attr("id", "choiceOne");
            var labelOne = $("<label>").text(quiz[i].choices[0] + "  ").attr("for", "choiceOne")
            var inputTwo = $("<input>").attr("type", "radio").attr("name", questionNum).attr("value", 1).attr("id", "choiceTwo");
            var labelTwo = $("<label>").text(quiz[i].choices[1] + "  ").attr("for", "choiceTwo")
            var inputThree = $("<input>").attr("type", "radio").attr("name", questionNum).attr("value", 2).attr("id", "choiceThree");
            var labelThree = $("<label>").text(quiz[i].choices[2]).attr("for", "choiceThree")
            // append questions and answer radio buttons to the div tag
            questionDiv.append(pTag);
            questionDiv.append(inputOne);
            questionDiv.append(labelOne);
            questionDiv.append(inputTwo);
            questionDiv.append(labelTwo);
            questionDiv.append(inputThree);
            questionDiv.append(labelThree);
            // append the div tag to the "form" ID in the HTML
            quizForm.append(questionDiv);
        }
    };
});


// RESULTS CONTAINER & FUNCTIONS------------------------------------------------------------------------------------------------
// check user's choices against correct answers in the array of objects
var userChoice = $("input[name=questionNum]:checked").val("id");

// checkAnswers function (loops through all questions)
var checkAnswers  = function () {
    for (var i = 0; i < quiz.length; i++) {
        if (userChoice == quiz[i].correct) {
            correctA++;
        } else if (userChoice != quiz[i].correct) {
            incorrectA++;
        } 
    }
};


// RESULTS function (shows the # of correct, incorrect, and unanswered questions)-------------------------------------------
var quizResults = $("#results")
var newP = $("<p>")

var fillResults = function() {
    // define "unanswered" question amount
    var unanswered = $(Number(quiz.length) - correctA - incorrectA)
    // make variables for each result (correct, incorrect, and unanswered)
    var totalCorrect = $(newP).text("Correct: " + correctA)
    var totalIncorrect = $(newP).text("Incorrect: " + incorrectA)
    var totalUnanswered = $(newP).text("Unanswered: " + unanswered)
    // append results to "results" ID in HTML
    quizResults.append(totalCorrect);
    quizResults.append(totalIncorrect);
    quizResults.append(totalUnanswered);
    quizResults.append(restartBtn)
}

// RESTART BUTTON (in results div)-----------------------------------------------------------------------------------------------------------
var restartBtn  = $("<button>").attr("id", "restart");
quizResults.append(restartBtn);
restartBtn.on("click", function() {
    $("#results").hide();
    startTimer();
    fillQuiz();    
});
