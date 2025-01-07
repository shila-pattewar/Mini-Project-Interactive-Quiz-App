//  https://perscholas.instructure.com/courses/2436/assignments/489728

const quiz = [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1
      },
      {
        question: "Which planet is the largest in the Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correctAnswer: 2
      },
      {
        question: "What is the name of the Sun's closest planet?",
        options: ["Mercury", "Venus", "Mars", "Neptune"],
        correctAnswer: 0
      },
      {
        question: "Which planet has the longest day?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        correctAnswer: 1
      },
      {
        question: "What is the largest moon of Saturn?",
        options: ["Europa", "Titan", "Ganymede", "Io"],
        correctAnswer: 1
      },
      {
        question: "Which planet has a ring system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: 2
      },
      {
        question: "What is the name of Earth's natural satellite?",
        options: ["Europa", "Luna", "Ganymede", "Phobos"],
        correctAnswer: 1
      },
      {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Mars", "Jupiter", "Neptune", "Saturn"],
        correctAnswer: 1
      },
      {
        question: "What is the smallest planet in the Solar System?",
        options: ["Mercury", "Mars", "Earth", "Venus"],
        correctAnswer: 0
      },
      {
        question: "Which planet is known as the Earth's twin?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 0
      },
      {
        question: "What is the name of Saturn's largest moon?",
        options: ["Titan", "Rhea", "Enceladus", "Mimas"],
        correctAnswer: 0
      }
  ];

  function runQuiz(quiz) {
    let score = 0;

    // Loop through the quiz array
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        console.log(` ${question.question}`);
        
        // Display the options
        for (let j = 0; j < question.options.length; j++) {
            console.log(` ${question.options[j]}`);
        }

        // Prompt the user for their answer
        const userAnswer = prompt("Enter the number of your answer:");

        // Check if the answer is correct
        if (question.options[userAnswer] === question.correctAnswer) {
            score++;
            console.log("Correct!\n");
        } else {
            console.log(`Incorrect. The correct answer is: ${question.correctAnswer}\n`);
        }
    }

    // Display the final score
    console.log(`Your final score is: ${score} out of ${quiz.length}`);
}


  
// function  runQuiz(){
//     for (i=0; i<= quiz.length; i++)
//     {
//         console.log(quiz[i]);
//     }
//   }

//     return runQuiz();

// for (const runQuiz of quiz) 
//     {
//         console.log(`question: ${runQuiz.question}, options: ${runQuiz.options}`);

//        // console.log(Object.keys(runQuiz)); // Prints keys
//        // console.log(Object.values(runQuiz)); // Prints values

//        //let name = prompt(runQuiz.question);
//        let score = 0;
//        const onScreen = prompt (`question: ${runQuiz.question} options: ${runQuiz.options}`);
      
//        if (quiz.hasOwnProperty(quiz.answer) === runQuiz.options )
//        {
//         console.log("answer:", quiz[runQuiz.options]);
//        }
//        else
//        {
//         console.log("wrong answer.");
//        }
//     }  score ++;

//     console.log(score);

runQuiz(quiz);