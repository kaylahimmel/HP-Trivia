// create array called "questions" to hold our objects (questions and mutliple choice answers)
var quiz = [
    {question1: "What is the last name of the red-headed family who befriends Harry?",
    choices1: ["Beasley", "Weasley", "Measley"],
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
var question = quiz[i].question[j];

var choiceA = (quiz[i].question[j].choices[0]);

var choiceB = (quiz[i].question[j].choices[1]);

var choiceC = (quiz[i].question[j].choices[2]);

var correct = 0;

var incorrect = 0;

var unanswered = 0;


// startButton function (set it to document.ready so nothing loads until the start button is clicked)
var startButton = function () {
    document.getElementById("#start");
    startButton.on("click", function() {
        startTimer();
    });
};  


// showQuiz function that generates the quiz questions and answers
var fillQuiz = function () {
    for (var i = 0; i < quiz.length; i++) {
        // fill HTML form element with "quiz" class with questions
        document.getElementById("#question")
        ("#question").innerHTML(question)
        // fill the HTML radio buttons with the answers from the array
        document.getElementById("#choice1");
        ("#choice1").innerHTML(choiceA);
        document.getElementById("#choice2");
        ("#choice2").innerHTML(choiceB);
        document.getElementById("#choice3");
        ("#choice3").innerHTML(choiceC);
    };
};


// function for Submit button that for the user to push if they beat the countdown timer    
var submitButton  = function () {
    document.getElementById("#submit");
    submitButton.on("click", function() {
        showResults();
        clearTimeout(startTimer);
    });
};


// showResults function that shows the # of correct, incorrect, and unanswered questions
// then shows results on this results page
var checkAnswers  = function () {
    for (var i = 0; i < questions.length; i++) {
        if (userAnswers[i] == questions[i].correct) {
            correct.push(userAnswers);
        } else if (userAnswers[i] != questions[i].correct) {
            incorrect.push(userAnswers);
        } else {
            unanswered.push(userAnswers);
        };
    };
};

var resultsContainer  = function () {
    document.getElementsByClassName(".results");
    (showResults).push(correct);
    (showResults).push(incorrect);
    (showResults).push(unanswered);
};

var showResults  = function () {
    checkAnswers();
    resultsContainer();
};


// play game again (restart function essentially but your shouldn't have to push the start button again)
var againButton  = function () {
    document.getElementsByClassName("again");
    againButton.on("click", function() {
        resultsContainer(display = hide);
        showQuiz();
        countdown();
        startTimer();
    });
};


// COUNTDOWN TIMER------------------------------------------------------------------------------
// timer function that counts down from 60 seconds
var timer = 60;

// Set timer to 60 seconds and decrement by 1 second in real time
var startTimer = setInterval(function() {
    // Display the result in the HTML <div> with the class ".timer"
    document.getElementById("#timer");
    (timer).innerHTML(startTimer);
    
    timer--;
    
    // If the countdown is finished, alert user 
    if (timer == 0) {
        clearInterval(seconds);
        alert("Time's up!");
    }
}, 1000);
