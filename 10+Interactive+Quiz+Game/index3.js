//Quiz Data
const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
];

let currentQuestion = 0;
let score = 0;

// Queryselector variables and elements
const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

// Load Question
function loadQuestion() {
  // Reset by removing 'correct' and 'wrong' highlight color classes
  resetButtons();
  // Extract current question
  const current = quiz[currentQuestion];
  // Extract the Question within the current question
  questionEl.textContent = current.question;
  // Loading each options into the option buttons
  optionBtns.forEach((btn, index) => {
    btn.textContent = current.options[index];
    // button not disabled
    btn.disabled = false;
  });
}
// Reset Buttons
function resetButtons() {
  // remove class 'correct' and 'wrong' for all buttons
  optionBtns.forEach((btn) => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  // hide Next Question button
  nextBtn.style.display = "none";
}

// Add Click Events
optionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkAnswer(btn);
  });
});

// Check Answer
function checkAnswer(selectedBtn) {
  // Retrieve current question set
  const current = quiz[currentQuestion];
  // if the button text is same as the answer text
  if (selectedBtn.textContent === current.answer) {
    // add 'correct' class
    selectedBtn.classList.add("correct");
    // score + 1
    score++;
    // display score
    scoreEl.textContent = `score ${score}`;
  }
  // add 'wrong' class to option text not equal to correct answer
  else selectedBtn.classList.add("wrong");
  // Highlight correct answer when answer is wrong
  optionBtns.forEach((btn) => {
    if (btn.textContent === current.answer) {
      btn.classList.add("correct");
    }
  });
  // Disable all buttons, cannot click after answering the question
  optionBtns.forEach((btn) => (btn.disabled = true));
  // Display next question button
  nextBtn.style.display = "block";
}

// Next Question Logic
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed";
    optionBtns.forEach((btn) => (btn.style.display = "none"));
    nextBtn.style.display = "none";
  }
});

// Initalize Quiz
loadQuestion();
