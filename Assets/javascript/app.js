// create array called "quiz" to hold objects of questions and mutliple choice answers
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
    {question: "What spell is used to summon a wizard's patronus?",
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
    {question: "What animal is Harry's godfather able to transform into?",
    choices: ["deer", "cat", "dog"],
    correct: 2
    }
];


// results variables
var correctA = 0;
var incorrectA = 0;
var unanswered = 0;
// link to buttons IDs in the HTML
var startBtn = $("#start")
var finishedBtn = $("#finish")
var playAgainBtn  = $("#restart");
// link to container element IDs in the HTML
var heading = $(".heading")
var quizDiv = $(".quizContainer");
var HTMLtimer = $("#timer");
var quizForm = $("#quiz");
var resultsDiv = $(".resultsContainer");
var quizResults = $("#results")
// time function that counts down from 60 seconds
var time = 60;


// LAUNCH THE APP ON DOCUMENT.READY--------------------------------------------------------------------------------------
// wrap all the JS in document.ready function
$(document).ready(function() {
    // hide Finished and Play Again buttons at start
    startBtn.show();
    quizDiv.hide();
    resultsDiv.hide();
});


// BUTTON FUNCTIONS------------------------------------------------------------------------------------------------------
// Start Button (load quiz and start timer when the Start button is clicked)
startBtn.on("click", function() {
    event.preventDefault();
    heading.hide();
    startBtn.hide();
    startTimer();
    quizDiv.show();
    fillQuiz();
});  

// Finished Button (hides quiz and timer, checks the user's answers and fills in the results)
finishedBtn.on("click", function() {
    event.preventDefault();
    time = 0;
    HTMLtimer.empty();
    quizForm.empty();
    quizDiv.hide();
    checkAnswers();
    resultsDiv.show();
    fillResults();
});

// Restart Button (hides results, starts timer from 60 and fills in the quiz)
playAgainBtn.on("click", function() {
    event.preventDefault();
    playAgainBtn.hide(); 
    quizResults.empty();
    resultsDiv.hide();
    corrrectA = 0;
    incorrectA = 0;
    unanswered = 0;
    time = 60;
    startTimer();
    quizDiv.show();
    fillQuiz();
});


// TIMER FUNCTION--------------------------------------------------------------------------------------------------------
// startTimer function (sets time interval and decrements 1 second in real time until timer reaches 0)
var startTimer = function() {
    // set time interval "countdown"
    var countdown = setInterval(function() {
        // hide the start button
        $("#start").hide();
        // Display the result in the HTML <div> with the ID "timer"
        HTMLtimer.text(time + " seconds remaining")
        // Decrement time by 1 second in real time
        time--;
        // If the countdown is finished, alert user 
        if (time < 0) {
            clearInterval(countdown);
            HTMLtimer.empty();
            quizForm.empty();
            quizDiv.hide();
            checkAnswers();
            resultsDiv.show();
            fillResults();
        // } if (finishedBtn.on("click", function()) {
        //     clearInterval(countdown);
        //     HTMLtimer.empty();
        //     quizForm.empty();
        //     quizDiv.hide();
        //     checkAnswers();
        //     resultsDiv.show();
        //     fillResults();
        }
    }, 1000);
}


// QUIZ FUNCTION---------------------------------------------------------------------------------------------------------
// fillQuiz function that loops through the quiz array and builds the Q&As in the form element of the HTML
var fillQuiz = function () {
    for (var i = 0; i < quiz.length; i++) {
        // convert the index number to a string instead of number so it can be used as the name attribute
        var questionNum = "question" + i.toString()
        // fill HTML form element with "quiz" class with questions
        var questionDiv = $("<div class='questionDiv'>");
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


// CHECK ANSWERS & DETERMINE RESULTS-------------------------------------------------------------------------------------
// checkAnswers function (loops through all questions)
var checkAnswers  = function () {
    for (var i = 0; i < quiz.length; i++) {
        // correctAnswer variable (calls the correct answer for each question from the quiz array)
        var correctAnswer = quiz[i].correct
        console.log(correctAnswer)
        // userChoice variable (finds the value of the user's radio button choice)
        var userChoice = $("#quiz input:radio[name=question" + i +"]:checked").val()
        console.log("user's choice: " + userChoice)
        // check user's choices against correct answers in the array of objects
        if (userChoice == correctAnswer) {
            correctA++;
            console.log(correctA)
        } else if (userChoice == undefined) {
            unanswered++;
            console.log(unanswered)
        } else {
            incorrectA++
        }
    }
};


// RESULTS function (shows the # of correct, incorrect, and unanswered questions)----------------------------------------
// fillResults function that fills the "results" ID in the HTML
var fillResults = function() {
    var unanswered = quiz.length - (correctA + incorrectA)
    // make variables for each result (correct, incorrect, and unanswered)
    var totalCorrect = $("<p>").text("Correct: " + correctA)
    var totalIncorrect = $("<p>").text("Incorrect: " + incorrectA)
    var totalUnanswered = $("<p>").text("Unanswered: " + unanswered)
    // append results to "results" ID in HTML
    quizResults.append(totalCorrect);
    quizResults.append(totalIncorrect);
    quizResults.append(totalUnanswered);
    console.log(fillResults)
}