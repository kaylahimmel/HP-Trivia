// create array called "questions" to hold our objects (questions and mutliple choice answers)
var questions = [
    {q1: "What is the last name of the red-headed family who befriends Harry?",
        answers: {
            a: "Beasley",
            b: "Weasley",
            c: "Measley"
        },
        correctAnswer: "b"
    },
    {q2: "What is the name of the dragon Hagrid raises?",
        answers: {
            a: "Norbert",
            b: "Norman",
            c: "Norsef"
        },
        correctAnswer: "a"
    },
    {q3: "What is the train track location Hogwarts students caught the train from?",
        answers: {
            a: "Platform 10 1/2",
            b: "Platform 8 1/4",
            c: "Platform 9 3/4",
        },
        correctAnswer: "c"
    },
    {q4: "What spell do wizards cast to remove parts of someone's memory?",
        answers: {
            a: "Obliviate",
            b: "Obliterate",
            c: "Obsinerate",
        },
        correctAnswer: "a"
    },
    {q5: "What does Harry say to close the Marauder's Map and make it blank?",
        answers: {
            a: "Mapius Finito",
            b: "Blankerous Onus",
            c: "Mischief Managed",
        },
        correctAnswer: "c"
    },
    {q6: "What is the name of the Malfoy's house elf?",
        answers: {
            a: "Nobby",
            b: "Robby",
            c: "Dobby",
        },
        correctAnswer: "c"
    },
    {q7: "What spell would be used to summon a wizard's patronus?",
        answers: {
            a: "Expelliarmus Patronus!",
            b: "Expecto Patronus!",
            c: "Accio Patronus!",
        },
        correctAnswer: "a"
    },
    {q8: "Hermione's parents are both ________.",
        answers: {
            a: "professors",
            b: "dentists",
            c: "architects",
        },
        correctAnswer: "b"
    },
    {q9: "Crabbe and Goyle are the last names of _______'s best friends.",
        answers: {
            a: "Weasley",
            b: "Tran",
            c: "Malfoy",
        },
        correctAnswer: "c"
    },
    {q10: "What color is unicorn blood?",
        answers: {
            a: "gold",
            b: "Silver",
            c: "copper",
        },
        correctAnswer: "b"
    },
    {q11: "What is the name of Filch's cat?",
        answers: {
            a: "Mrs. Norris",
            b: "Mrs. van Damme",
            c: "Mrs. Li",
        },
        correctAnswer: "a"
    },
    {q12: "What spell would a wizard use to levitate an object?",
        answers: {
            a: "Liftiosa Hoveriosa",
            b: "Leviosa Liftiosa",
            c: "Wingardium Leviosa",
        },
        correctAnswer: "c"
    },
    {q13: "What are the magical creatures called who guard Azkaban prison?",
        answers: {
            a: "Defectors",
            b: "Dementors",
            c: "Demonists",
        },
        correctAnswer: "b"
    },
    {q14: "What is the name of Harry's owl?",
        answers: {
            a: "Crookshanks",
            b: "Hedwig",
            c: "Fawkes",
        },
        correctAnswer: "b"
    },
    {q15: "What Quidditch position does Harry play?",
        answers: {
            a: "Seeker",
            b: "Fetcher",
            c: "Catcher",
        },
        correctAnswer: "a"
    }
];



// User's answers will be sent to one of these arrays
userAnswers = [];

correct = [];

incorrect = [];

unaswered = [];



// FUNCTIONS & VARIABLES-----------------------------------------------------------------------------------
// startButton function (set it to document.ready so nothing loads until the start button is clicked)
var startButton = function() {
    document.getElementsByClassName(".start");
}
startButton.on("click", function() {
    showQuiz();
    timer();
});
console.log(startButton)


// showQuiz function that generates the quiz questions and answers
    // fill quizContainer with questions
    // fill area beneath questions with radio buttons for the answers
    // show submit button at the bottom of the quiz 






// function for Submit button that for the user to push if they beat the countdown timer    
var submitButton = document.getElementsByClassName("submit");

submitButton.on("click", function() {
    showResults();
    document.text(".results")
    timer();
});



// showResults function that shows the # of correct, incorrect, and unanswered questions
// then shows results on this results page



var checkAnswers = function() {
    for (var i = 0; i < questions.length; i++) {
        if (userAnswers[i] == questions[i].correctAnswer) {
            correct.push(userAnswers);
        } else if (userAnswers[i] != questions[i].correctAnswer) {
            incorrect.push(userAnswers);
        } else {
            unanswered.push(userAnswers);
        };
    };
};

var resultsContainer = function() {
    document.getElementsByClassName(".results");
    (showResults).push(correct.length);
    (showResults).push(incorrect.length);
    (showResults).push(unanswered.length);
};

var showResults = function() {
    resultsContainer();
    checkAnswers();
};

// play game again (restart function essentially but your shouldn't have to push the start button again)
var againButton = function() {
    document.getElementsByClassName("again");
};

againButton.on("click", function() {
    resultsContainer(display = hide);
    showQuiz();
    countdown();
    timer();
});


// COUNTDOWN TIMER------------------------------------------------------------------------------
// timer function that counts down from 60 seconds
var timer = 60;

// Set timer to 60 seconds and decrement by 1 second in real time
var second = setInterval(function() {
    timer--;
    // Display the result in the HTML <div> with the class ".timer"
    document.getElementsByClassName(".timer").innerHTML = timer;

    // If the countdown is finished, alert user 
    if (timer == 0) {
        clearInterval(second);
        alert("Time's up!");
    }
}, 1000);

console.log(timer)