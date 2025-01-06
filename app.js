//  https://perscholas.instructure.com/courses/2436/assignments/489728

const quiz = [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1
      },
      {
        question: "Which planet is the largest in the Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2
      },
      {
        question: "What is the name of the Sun's closest planet?",
        options: ["Mercury", "Venus", "Mars", "Neptune"],
        answer: 0
      },
      {
        question: "Which planet has the longest day?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: 1
      },
      {
        question: "What is the largest moon of Saturn?",
        options: ["Europa", "Titan", "Ganymede", "Io"],
        answer: 1
      },
      {
        question: "Which planet has a ring system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        answer: 2
      },
      {
        question: "What is the name of Earth's natural satellite?",
        options: ["Europa", "Luna", "Ganymede", "Phobos"],
        answer: 1
      },
      {
        question: "Which planet is known for its Great Red Spot?",
        options: ["Mars", "Jupiter", "Neptune", "Saturn"],
        answer: 1
      },
      {
        question: "What is the smallest planet in the Solar System?",
        options: ["Mercury", "Mars", "Earth", "Venus"],
        answer: 0
      },
      {
        question: "Which planet is known as the Earth's twin?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 0
      },
      {
        question: "Which planet is furthest from the Sun?",
        options: ["Uranus", "Neptune", "Saturn", "Pluto"],
        answer: 1
      },
      {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: 1
      },
      {
        question: "Which planet has the shortest year?",
        options: ["Earth", "Mercury", "Venus", "Neptune"],
        answer: 1
      },
      {
        question: "What is the name of the fifth planet from the Sun?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        answer: 1
      },
      {
        question: "What is the main component of Jupiter's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        answer: 1
      },
      {
        question: "Which planet is known for its extreme surface temperature fluctuations?",
        options: ["Mars", "Venus", "Mercury", "Saturn"],
        answer: 2
      },
      {
        question: "Which planet has the largest volcano in the Solar System?",
        options: ["Venus", "Mars", "Earth", "Jupiter"],
        answer: 1
      },
      {
        question: "Which dwarf planet is located in the Kuiper Belt?",
        options: ["Eris", "Ceres", "Pluto", "Haumea"],
        answer: 2
      },
      {
        question: "Which planet has the most tilted axis?",
        options: ["Earth", "Mars", "Neptune", "Uranus"],
        answer: 3
      },
      {
        question: "What is the name of Saturn's largest moon?",
        options: ["Titan", "Rhea", "Enceladus", "Mimas"],
        answer: 0
      }
  ];

  quiz[0];

  
// function  runQuiz(){
//     for (i=0; i<= quiz.length; i++)
//     {
//         console.log(quiz[i]);
//     }
//   }

//     return runQuiz();

for (const runQuiz of quiz) 
    {
        console.log(`question: ${runQuiz.question}, options: ${runQuiz.options}`);

       // console.log(Object.keys(runQuiz)); // Prints keys
       // console.log(Object.values(runQuiz)); // Prints values

       //let name = prompt(runQuiz.question);
       let onScreen = prompt (`question: ${runQuiz.question}, options: ${runQuiz.options}`);
    
    }