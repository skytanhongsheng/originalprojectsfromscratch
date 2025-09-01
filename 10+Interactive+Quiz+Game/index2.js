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

// Queryselector variables and elements
const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");
const nextQuestionBtn = document.getElementById("next-question");

let currentQuestion = 0;
let score = 0;

// Load Question
function loadQuestion() {
  // Reset by removing 'correct' and 'wrong' highlight color classes
  resetButtons();
  // Extract current question
  const current = quiz[currentQuestion];

  // Extract the Question within the current question
  questionEl.textContent = current.question;

  // Loading each options into the option buttons
  optionBtns.forEach(btn, (index) => {
    btn.textContent = current.options[index];

    // button not disabled
    btn.disabled = false;
  });
}

// Reset Buttons
function resetButtons() {
  optionBtns.forEach((btn) => {
    // remove class 'correct' and 'wrong' for all buttons
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  // hide Next Question button
  nextQuestionBtn.style.display = "none";
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
    scoreEl.textContent = `Score: ${score}`;
  } else {
    // add 'wrong' class to option text not equal to correct answer
    selectedBtn.classList.add("wrong");
    // Highlight correct answer when answer is wrong
    optionBtns.forEach((btn) => {
      if (btn.textContent === current.answer) {
        btn.classList.add("correct");
      }
    });
  }
  // Disable button, cannot click after answering the question
  optionBtns.forEach((btn) => (btn.disabled = true));
  // Display next question button
  nextQuestionBtn.style.display = "block";
}

// Next Question Logic
nextQuestionBtn.addEventListener("click", () => {
  // Add currentQuestion by 1 to move to next question
  currentQuestion++;

  // if currentQuestion < quiz.length, load question
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    // header changes to quiz completed
    questionEl.textContent = "Quiz Completed!";

    // hide option buttons from showing
    optionBtns.forEach((btn) => (btn.style.display = "none"));

    // hide next question button from showing
    nextQuestionBtn.style.display = "none";
  }
});

// Initalize Quiz
loadQuestion();
