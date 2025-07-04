# Quiz Game

## Date: 29/jun/2025

## By: Fawaz Ahmed

---

## [GitHub](https://github.com/10Fawaz)

---

# Description

---

###### This is How My Game Flows

###### Category Selection : The User Chooses Between Cars or Horses. 5 random Questions Are Picked.

###### Start Quiz : UI Updates And The First Question is Shown.

###### Answering : User Picks An Answer. Buttons Highlights (Green / red). Score Updates if Correct.

###### Progress : Progress Bar Updates Visually With Each Question.

###### Navigation : users Can Go Forward,back, Or Reset The Game.

###### Result : After 5 Questions, Final Score is Shown.

---

# Wireframes

---

![WireFrame Pic](<Screenshot 2025-07-04 at 12.39.41 PM.png>)

---

# Pseudocode

---

### Firstly

### In-Game Variables

###### Define score = 0

###### Define currentIndex = 0

###### Define selectedCategory = []

###### Define userAnswers = []

---

### Secondly

### Wait for user to select a category

### When selected:

###### → shuffle 5 random questions from that category

###### → hide category screen

###### → show quiz screen

###### → initialize quiz

---

### Thirdly

### Display current question and options

### Update progress bar based on currentIndex

###### For each option:

###### If user clicks:

###### → save user answer

###### → highlight correct (green) and wrong (red)

###### → update score if correct

###### → delay briefly

###### → move to next question or show result

---

### Lastly

### If 5 questions answered:

###### → hide quiz screen

###### → show result screen with final score

---

###### Back button:

###### → go to previous question

###### Next button:

###### → go to next question

###### Reset button:

###### → Resets everything and shows category selection again

---

# Credits

---

1: One of my main rescources is **Codecademy**. ( In which i practice there and sometimes look up Articles on how to do a specific thing ).

2: **W3Schools** Html, Css, JavaScript References( I mostly used it for DOM manipulation, event handling, and basic logic of my game ).

3: **JSFiddle** I learned some features here like my progress bar and the timeout() and turning my answer green or red depends if its correct or wrong.

4: **Stack Overflow** It helped me for some specific bugs and issues i faced.
