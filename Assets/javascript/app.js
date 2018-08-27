// GLOBAL ELEMENTS -----------------------------------------------------------------------------


// latch onto HTML (move these to the appropriate areas of the code later)
var quizContainer = document.getElementsByClassName("quiz");
var submitButton = document.getElementsByClassName("submit");


// create container (or maybe a form?) with the trivia questions and multiple choice answers
const questions = [
    {q1: "What is the last name of the red-headed family who befriends Harry?",
        answers: {
            a: "Beasley",
            b: "Weasley",
            c: "Schneasley"
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
    }
  ];



// make list/array/object (not sure what's best) of questions and 3 possible answers for each
    // figure out how to note which answer is the correct one
    function showQuiz(){}

    function showResults(){}
    
    // create a start button that initializes the game so the time doesn't start immediately.    
    var startButton = document.getElementsByClassName("start");
    startButton.on("click", function() {
        showQuiz();
        countdown();
    });
    
    // hide the questions until user clicks "Start Game" (maybe just show a Harry Potter image with the "Start Game" button?)


    // create a submit button that for the user to push if they beat the countdown timer    
    var submitButton = document.getElementsByClassName("submit");
    submitButton.on("click", function() {
        showResults();
        document.text(".results")
    });


// display a timer that counts down from 30 seconds
var countdown = setInterval(function() {
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementsByClassName(".timer").innerHTML = seconds + "seconds";
    // when the time ends, say "Time's up"
    if (seconds < 0) {
        clearInterval(countdown);
        document.getElementsByClassName(".timer").innerHTML = "Time's Up!";
        showResults();
    // on submit, show results
    } else if (submitButton) {
        document.addEventListener("click", showResults);
    }
    }, 1000);


    // include # of correct, incorrect, and unanswered questions on this results page
    var resultsContainer = document.getElementsByClassName("results");


    // add a "play again" button to the results page that loops back to the main question page

    // look into adding more than 10 questions but only randomly choosing whic 10 to show

    // also maybe look into displaying the questions in a random order for each game

// create themed look in CSS