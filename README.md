# Quiz Game

### Date: 29/jun/2025

### By: Fawaz Ahmed

---

#### [GitHub](https://github.com/10Fawaz)

---

### **_Description_**

---

This project will be a Quiz Game.

At first the game will make you choose between ( Cars / Horses )

There will be 10 different questions for each category

Each section will have 5 different quiz questions

For each Question you get 1 point of score

Your total score will appear when you finish all questions

---

### **Wireframes**

---

![WireFrame Pic](<Screenshot 2025-06-30 at 8.55.11 AM.png>)

---

### **_Pseudocode_**

---

Firstly display "Choose a category: Cars or Horses"

The User get to choose

---

if userChoice === Cars then

set questions = CarsQuestions

else if userChoice === Horses then

set questions = horsesQuestions

---

score = 0

for loop i FROM 1 TO 5 DO

display the questions[i]

Get userAnswer

if userAnswer === questions[i].correctAnswer then

Add score by 1

---

Questions will be 10 each category and the quiz will Randomly pick 5 questions for the user

---

ENDING
Displays "Game Over Your final score is: '' "
