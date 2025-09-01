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

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  resetButtons();
  const current = quiz[currentQuestion];
  questionEl.textContent = current.question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = current.options[index];
    btn.disabled = false;
  });
}

function resetButtons() {
  optionBtns.forEach((btn) => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
}

optionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkAnswer(btn);
  });
});

function checkAnswer(selectedBtn) {
  const current = quiz[currentQuestion];
  if (selectedBtn.textContent === current.answer) {
    selectedBtn.classList.add("correct");
    score++;
    scoreEl.textContent = `Score: ${score}`;
  } else {
    selectedBtn.classList.add("wrong");
    // Highlight correct answer
    optionBtns.forEach((btn) => {
      if (btn.textContent === current.answer) {
        btn.classList.add("correct");
      }
    });
  }

  optionBtns.forEach((btn) => (btn.disabled = true));
  nextBtn.style.display = "block";

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Completed!";
      optionBtns.forEach((btn) => (btn.style.display = "none"));
      nextBtn.style.display = "none";
    }
  });
}

// Initialize quiz
loadQuestion();
