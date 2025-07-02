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
        'Anti-Lock Breaking System',
        'Auto balancing System'
      ],
      answer: 'Anti-Lock Breaking System'
    },
    {
      question: 'Which country is home to the luxury car brand Rolls-Royce?',
      options: ['United States', 'Germany', 'Italy', 'United Kingdom'],
      answer: 'United kingdom'
    },
    {
      question:
        'WWhat is the term for the electrical storage component in hybrid cars?',
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
      question: 'WWhich horse breed is known for its spotted coat patterns?',
      options: ['Appaloosa', 'Arabian', 'Mustang', 'Morgan'],
      answer: 'Appaloosa'
    },
    {
      question:
        'WWhat is the term for a horse comfortable resting area in a stable?',
      options: ['Nest', 'Den', 'Stall', 'Pen'],
      answer: 'Stall'
    }
  ]
}

const categoryBtns = document.querySelectorAll('[data-category]')
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

let score = 0
let currentIndex = 0
let selectedCategory = []
let userAnswers = []

myCategoriesBtnsFunction1()
myNavigationButtonsFunction4()

function myCategoriesBtnsFunction1() {
  categoryBtns.forEach((button) => {
    button.addEventListener('click', () => {
      const userChoice = button.getAttribute('data-category')
      selectedCategory = myQuestions[userChoice]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)

      categorySection.style.display = 'none'
      quizSection.style.display = 'block'
      scoreBoard.style.display = 'block'
      startTheQuizFunction2()
    })
  })
}

function startTheQuizFunction2() {
  currentIndex = 0
  score = 0
  userAnswers = []
  myShowQuestionsFunction3()
}

function myShowQuestionsFunction3() {
  quizAnswers.innerHTML = ''
  const currentQuestion = selectedCategory[currentIndex]
  quizQuestions.textContent = currentQuestion.question

  currentQuestion.options.forEach((option) => {
    const answerButton = document.createElement('button')
    answerButton.textContent = option
    answerButton.classList.add('answerBtn')

    answerButton.addEventListener('click', () => {
      userAnswers[currentIndex] = option
      if (option === currentQuestion.answer) {
        score++
        scoreBoard.textContent = `Your Score : ${score}`
      }
      currentIndex++
      if (currentIndex < 5) {
        myShowQuestionsFunction3()
      } else {
        quizSection.style.display = 'none'
        quizResult.style.display = 'block'
        finalScore.textContent = `The Final Score is ${score}`
      }
    })
    quizAnswers.appendChild(answerButton)
  })
  nextBtn.style.display = 'inline-block'
  backBtn.style.display = 'inline-block'
  resetBtn.style.display = 'inline-block'
}

function myNavigationButtonsFunction4() {
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
  backBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--
      myShowQuestionsFunction3()
    }
  })
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
