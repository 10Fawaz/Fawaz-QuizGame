# Quiz game

---

## Date: 29/jun/2025

### By: Fawaz Ahmed

---

#### [GitHub](https://github.com/10Fawaz)

---

### **_Description_**

This project will be a Quiz Game.

At first the game will make you choose between ( Cars / Horses )

Each section will have 5 different quiz questions

For each Question you get 1 point of score

Lastly there will be a 2 questions BONUS 2.5 points each

Your total score will appear when you finish all questions

---

### **Wireframes**

(![WireFrame Pic](<Screenshot 2025-06-30 at 8.55.11 AM.png>))

---

### **_Pseudocode_**

Firstly display "Choose a category: Cars or Horses"
The User get to choose

if userChoice === Cars then
set questions = CarsQuestions
else if userChoice === Bikes then
set questions = BikesQuestions

score = 0

for loop i FROM 1 TO 5 DO
display the questions[i]
get userAnswer
if userAnswer === questions[i].correctAnswer then
add score by 1

lastly "BONUS ROUND"

for loop i FROM 6 TO 7 do
display questions[i]
get userAnswer
if userAnswer === questions[i].correctAnswer then
add score BY 2.5

END

displays "Game Over Your final score is: '' "
