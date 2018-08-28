// GLOBAL ELEMENTS -----------------------------------------------------------------------------


// latch onto HTML (move these to the appropriate areas of the code later)
var quizContainer = document.getElementsByClassName("quiz");
var submitButton = document.getElementsByClassName("submit");


// create container (or maybe a form?) with the trivia questions and multiple choice answers
var questions = [
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
    {q4: "What spell do wizards cast to remove parts of someone's memory?",
        answers: {
            a: "Obliviate",
            b: "Obliterate",
            c: "Obsinerate",
        },
        correctAnswer: "a"
    }
    {q5: "What does Harry say to close the Marauder's Map and make it blank?",
        answers: {
            a: "Mapius Finito",
            b: "Blankerous Onus",
            c: "Mischief Managed",
        },
        correctAnswer: "c"
    }
    {q6: "What is the name of the Malfoy's house elf?",
        answers: {
            a: "Nobby",
            b: "Robby",
            c: "Dobby",
        },
        correctAnswer: "c"
    }
    {q7: "What spell would be used to summon a wizard's patronus?",
        answers: {
            a: "Expelliarmus Patronus!",
            b: "Expecto Patronus!",
            c: "Accio Patronus!",
        },
        correctAnswer: "a"
    }
    {q8: "Hermione's parents are both ________.",
        answers: {
            a: "professors",
            b: "dentists",
            c: "architects",
        },
        correctAnswer: "b"
    }
    {q9: "Crabbe and Goyle are the last names of _______'s best friends.",
        answers: {
            a: "Weasley",
            b: "Tran",
            c: "Malfoy",
        },
        correctAnswer: "c"
    }
    {q10: "What color is unicorn blood?",
        answers: {
            a: "gold",
            b: "Silver",
            c: "copper",
        },
        correctAnswer: "b"
    }
    {q11: "What is the name of Filch's cat?",
        answers: {
            a: "Mrs. Norris",
            b: "Mrs. van Damme",
            c: "Mrs. Li",
        },
        correctAnswer: "a"
    }
    {q12: "What spell would a wizard use to levitate an object?",
        answers: {
            a: "Liftiosa Hoveriosa",
            b: "Leviosa Liftiosa",
            c: "Wingardium Leviosa",
        },
        correctAnswer: "c"
    }
    {q13: "What are the magical creatures called who guard Azkaban prison?",
        answers: {
            a: "Defectors",
            b: "Dementors",
            c: "Demonists",
        },
        correctAnswer: "b"
    }
    {q14: "What is the name of Harry's owl?",
        answers: {
            a: "Crookshanks",
            b: "Hedwig",
            c: "Fawkes",
        },
        correctAnswer: "b"
    }
    {q15: "What Quidditch position does Harry play?",
        answers: {
            a: "Seeker",
            b: "Fetcher",
            c: "Catcher",
        },
        correctAnswer: "a"
    }
  ];


  function showQuiz(){}
  // we'll need a place to store the HTML output
    var quiz = [];
  
    // for each question...
    myQuestions.forEach(
      (questionCurrent, questionNum) => {
  
        // we'll want to store the list of answer choices
        var answerChoices = [];
  
        // and for each available answer...
        for(letter in questionCurrent.answerChoices){
  
          // ...add an HTML radio button
          answerChoices.push(
            `<label>
              <input type="radio" name="question${questionNum}" value="${letter}">
              ${letter} :
              ${questionCurrent.answerChoices[letter]}
            </label>`
          );
        }
  
        $(document).on("click", ".answer-radio", function(){
            //your stuff in here
            });


        // add this question and its answers to the HTML, pushing to the "quiz" array
        quiz.push(
          `<div class="question"> ${questionCurrent.question} </div>
          <div class="answers"> ${answerChoices.join('')} </div>`
        );
      }
    );
 
    
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = quiz.join("");
  




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