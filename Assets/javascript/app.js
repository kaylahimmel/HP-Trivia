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

var newP = $("<p>")
// results variables
var correctA = 0;
var incorrectA = 0;
// define "unanswered" question amount
var unanswered = $(Number(quiz.length) - correctA - incorrectA)


// wrap all the JS in document.ready function
$(document).ready(function() {

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
            // Display the result in the HTML <div> with the class ".timer"
            HTMLtimer.text("You have " + timer + " seconds to complete the quiz.")
            timer--;
            
            // If the countdown is finished, alert user 
            if (timer < 0) {
                clearInterval(countdown);
                $("#form").hide();
                checkAnswers();
                $("#timer").hide();
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
        } else {
            unanswered();
        }
    }
};


// showResults function that shows the # of correct, incorrect, and unanswered questions
var totalCorrect = $(newP).text("Correct: " + correctA)
var totalIncorrect = $(newP).text("Incorrect: " + incorrectA)
var totalUnanswered = $(newP).text("Unanswered: " + unanswered)

var showResults = $("#results")

showResults.append(totalCorrect);
showResults.append(totalIncorrect);
showResults.append(totalUnanswered);


// FINISHED BUTTON--------------------------------------------------------------------------------------------------------------
var FinishedButton = $("#submit")
FinishedButton.on("click", function() {
    clearInterval(countdown);
    $("#form").hide();
    checkAnswers();
    $("#timer").hide();
    showResults.show;
});

FinishedButton.on("click", function() {
    var totalCorrect = $(newP).text("Correct: " + correctA)
    var totalIncorrect = $(newP).text("Incorrect: " + incorrectA)
    var totalUnanswered = $(newP).text("Unanswered: " + unanswered)
    
    showResults.append(totalCorrect);
    showResults.append(totalIncorrect);
    showResults.append(totalUnanswered);
});


// RESTART BUTTON-----------------------------------------------------------------------------------------------------------
var restartButton  = $("again");

restartButton.on("click", function() {
        fillQuiz();
        startTimer();
        showResults.hide();
    });