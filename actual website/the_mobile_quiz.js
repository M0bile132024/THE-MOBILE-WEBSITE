// THE MOBILE WEBSITE VERSION 1.7: Tagging quizzes...and backgrounds too!
// Author: M0bile132022
// Date: 09/04/2026

let score = 0;
const quizForm = document.getElementById('quizForm');
const result = document.getElementById('result');
let age = prompt("Tell me your age real quick:");
let voteable;
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}
if (age < 18) result.textContent += " Too young to buy alcohol.";
quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(quizForm);
    formData.forEach((value, key) => {
        if (key === 'question1' && value === 'correctAnswer1') {
            score++;
        }
        if (key === 'question2' && value === 'correctAnswer2') {
            score++;
        }
        // Add more questions as needed
    });
    result.textContent = `Your score is: ${score}`;
});

