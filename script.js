// This is the questons bank with 2 main categories (cars / horses )Each object conatins the question, the options , and the correct answer
const myQuestions = {
  cars: [
    {
      question: 'Which car brand has a prancing horse as its logo.',
      options: ['Ferrari', 'Porsche', 'Lamborghini', 'BMW'],
      answer: 'Ferrari'
    },
    {
      question: 'What country is home to the car manufacturer Toyota?',
      options: ['China', 'Japan', 'South Korea', 'Germany'],
      answer: 'Japan'
    },
    {
      question: 'Who founded the Ford Motor company?',
      options: ['Enzo Ferrari', 'Henry Ford', 'Karl Benz', 'Elon Musk'],
      answer: 'Henry Ford'
    },
    {
      question: 'What does "EV" stand for in the automotive world?',
      options: [
        'Engine Vehicle',
        'Electric Vehicle',
        'Emission Valve',
        'Eco Van'
      ],
      answer: 'Electric Vehicle'
    },
    {
      question: 'Which of these is a type of a drivetrain.',
      options: [
        'Front-Wheel Drive',
        'All-Screen Display',
        'Head-Up Display',
        'Turbo Intake'
      ],
      answer: 'Front-Wheel Drive'
    },
    {
      question: 'Which part of the car is responsible for reducing emissions.',
      options: ['Muffler', 'Radiator', 'Alternator', 'Catalytic Converter'],
      answer: 'Catalytic Converter'
    },
    {
      question:
        'Which car broke the land speed record in 1997 with over 760 mph.',
      options: [
        'Buggati Veyron',
        'BloodHound SSC',
        'Thrust SSC',
        'Koenigsegg Jesko'
      ],
      answer: 'Thrust SSC'
    },
    {
      question: 'What does ABS stand for in car safety systems?',
      options: [
        'Anti-Break System',
        'Automatic Braking System',
        'Anti-Lock Braking System',
        'Auto balancing System'
      ],
      answer: 'Anti-Lock Braking System'
    },
    {
      question: 'Which country is home to the luxury car brand Rolls-Royce?',
      options: ['United States', 'Germany', 'Italy', 'United Kingdom'],
      answer: 'United Kingdom'
    },
    {
      question:
        'What is the term for the electrical storage component in hybrid cars?',
      options: [
        'Capacitor',
        'Turbo Cell',
        'Lithium-ion Battery',
        'Fuel Injecter'
      ],
      answer: 'Lithium-ion Battery'
    }
  ],
  horses: [
    {
      question: 'What is a male horse under 4 years called?',
      options: ['Colt', 'Foal', 'Mare', 'Stallion'],
      answer: 'Colt'
    },
    {
      question: 'Which gait is faster then trot but slower then gallop.',
      options: ['Canter', 'Walk', 'Prance', 'Stride'],
      answer: 'Canter'
    },
    {
      question:
        'What piece of tack goes into the horse mouth to help the rider control it?',
      options: ['Saddle', 'Reins', 'Bit', 'Girth'],
      answer: 'Bit'
    },
    {
      question: 'What is the name for a horse foot?',
      options: ['Paw', 'Pad', 'Hoof', 'Claw'],
      answer: 'Hoof'
    },
    {
      question: 'In what unit is a horse height measured?',
      options: ['Hands', 'Inches', 'Meters', 'Yards'],
      answer: 'Hands'
    },
    {
      question: 'Which breed is known for racing and speed.',
      options: ['Shetland Pony', 'Friesian', 'Clydesdale', 'Thoroughbred'],
      answer: 'Thoroughbred'
    },
    {
      question:
        'Which famous horse won the Triple Crown in 1973 and is considered a legend.',
      options: ['Seabiscuit', 'Secretariat', 'Man o War', 'War Admiral'],
      answer: 'Secretariat'
    },
    {
      question: 'What is a young female horse called?',
      options: ['Colt', 'Filly', 'Foal', 'Mare'],
      answer: 'Filly'
    },
    {
      question: 'Which horse breed is known for its spotted coat patterns?',
      options: ['Appaloosa', 'Arabian', 'Mustang', 'Morgan'],
      answer: 'Appaloosa'
    },
    {
      question:
        'What is the term for a horse comfortable resting area in a stable?',
      options: ['Nest', 'Den', 'Stall', 'Pen'],
      answer: 'Stall'
    }
  ]
}

// Here i select the html elements using query selectors

const categoryBtns = document.querySelectorAll('[data-category]') // This [data-category] naming was my brothers idea it allows me to store extra data safely
const categorySection = document.querySelector('.category')
const quizSection = document.querySelector('.section')
const quizQuestions = document.querySelector('#questionText')
const quizAnswers = document.querySelector('#answerButtons')
const navigationBtns = document.querySelector('.backNextButtons')
const backBtn = document.querySelector('#back')
const nextBtn = document.querySelector('#next')
const resetBtn = document.querySelector('#reset')
const scoreBoard = document.querySelector('#scoreB')
const quizResult = document.querySelector('#result')
const finalScore = document.querySelector('#finalScore')
const progressBar = document.querySelector('#progressBar')

// tracking In-Game state variables.
let score = 0 // Tracks correct answers
let currentIndex = 0 //Tracks on which question we r in
let selectedCategory = [] // holds the 5 random chosen questions
let userAnswers = [] // stores what the user selecter per question

// Firstly: Handles category selection (Cars / Horses).
function myCategoriesBtnsFunction1() {
  categoryBtns.forEach((button) => {
    // Adds click listeners to each category button
    button.addEventListener('click', () => {
      const userChoice = button.getAttribute('data-category') // Grabs the category (cars or horses) from data-category

      // Shuffle the questions and pick 5 randomly.
      selectedCategory = myQuestions[userChoice]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)

      // Hides the category screen, and shows quiz screen.
      categorySection.style.display = 'none'
      quizSection.style.display = 'block'
      scoreBoard.style.display = 'block'

      startTheQuizFunction2() // Quiz initialization
    })
  })
}

// Secondly: Initialize the game state for a new round, This is my engine basically.
function startTheQuizFunction2() {
  // Resets index, score, and answers
  currentIndex = 0
  score = 0
  userAnswers = []
  myShowQuestionsFunction3() // Starts the quiz loop via myShowQuestionsFunction3()
}
// Thirdly: Display the current question and answer options.
function myShowQuestionsFunction3() {
  quizAnswers.innerHTML = '' // clears the previous options
  const currentQuestion = selectedCategory[currentIndex]
  const progressCounter = selectedCategory.length

  // Updates the progress bar filling percentage, looked up this on JSFiddle
  progressBar.style.width = `${((currentIndex + 1) / progressCounter) * 100}%`

  // Sets the questions text.
  quizQuestions.textContent = currentQuestion.question

  // Loops through options and render answer buttons. Dynamically creates buttons for each option
  currentQuestion.options.forEach((option) => {
    const answerButton = document.createElement('button')
    answerButton.textContent = option
    answerButton.classList.add('answerBtn')
    // Handles answer selections.
    answerButton.addEventListener('click', () => {
      userAnswers[currentIndex] = option

      const btnColor = quizAnswers.querySelectorAll('.answerBtn')
      btnColor.forEach((btn) => {
        // Highlights correct answer in green.
        if (btn.textContent == currentQuestion.answer) {
          btn.classList.add('correct')
          // Highlights incorrect answer in red.
        } else if (btn.textContent === option) {
          btn.classList.add('incorrect')
        }
      })
      // Updates the score if answer is correct.
      if (option === currentQuestion.answer) {
        score++
        scoreBoard.textContent = `Your Score : ${score}`
      }
      // Delays a second before either showing next question or ending quiz.
      setTimeout(() => {
        currentIndex++
        if (currentIndex < 5) {
          myShowQuestionsFunction3()
        } else {
          // End of the quiz.
          quizSection.style.display = 'none'
          quizResult.style.display = 'block'
          finalScore.textContent = `The Final Score is ${score}`
        }
      }, 1000)
    })

    quizAnswers.appendChild(answerButton)
  })
  // Shows the navigation buttons.
  nextBtn.style.display = 'inline-block'
  backBtn.style.display = 'inline-block'
}
// Least but not last: Navigations logic (next, back, reset).
function myNavigationButtonsFunction4() {
  // advances to the next question or ends quiz
  nextBtn.addEventListener('click', () => {
    currentIndex++
    if (currentIndex < 5) {
      myShowQuestionsFunction3()
    } else {
      quizSection.style.display = 'none'
      quizResult.style.display = 'block'
      finalScore.textContent = `The Final Score is ${score}`
    }
  })
  // goes to previous question (if not answered)
  backBtn.addEventListener('click', () => {
    let answered = false
    for (let i = currentIndex - 1; i >= 0; i--) {
      if (!userAnswers[i]) {
        currentIndex = i
        myShowQuestionsFunction3()
        break
      }
    }
  })
  // Resets all game states.
  resetBtn.addEventListener('click', () => {
    currentIndex = 0
    score = 0
    userAnswers = []
    categorySection.style.display = 'block'
    quizSection.style.display = 'none'
    quizResult.style.display = 'none'
    scoreBoard.textContent = 'Your Score : 0'
  })
}
// Finally: Kicks off the game.
myCategoriesBtnsFunction1()
myNavigationButtonsFunction4()
