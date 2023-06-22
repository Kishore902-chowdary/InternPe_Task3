
const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome", "Madrid"],
    answer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: 0
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "Canada", "China", "United States"],
    answer: 0
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    choices: ["Lion", "Elephant", "Tiger", "Giraffe"],
    answer: 0
  },
  {
    question: "What is the chemical symbol for the element Gold?",
    choices: ["Au", "Ag", "Fe", "Pb"],
    answer: 0
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    answer: 0
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: 0
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: 0
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    choices: ["Japan", "China", "South Korea", "Vietnam"],
    answer: 0
  }
];

// ... remaining code ...


const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let submitted = false;

function showQuestion() {
  const quiz = quizData[currentQuestion];
  questionElement.textContent = quiz.question;

  choicesElement.innerHTML = "";
  for (let i = 0; i < quiz.choices.length; i++) {
    const choice = document.createElement("button");
    choice.textContent = quiz.choices[i];
    choice.addEventListener("click", selectAnswer);
    choicesElement.appendChild(choice);
  }

  submitButton.disabled = !submitted;
  resultElement.textContent = "";
}

function selectAnswer() {
  if (submitted) {
    return;
  }

  const selectedAnswerIndex = Array.from(choicesElement.children).indexOf(this);
  const correctAnswerIndex = quizData[currentQuestion].answer;

  const choices = choicesElement.querySelectorAll("button");
  choices.forEach((choice) => {
    choice.disabled = true;
  });

  if (selectedAnswerIndex === correctAnswerIndex) {
    this.classList.add("correct");
    score++;
    resultElement.textContent = "Correct!";
  } else {
    this.classList.add("incorrect");
    resultElement.textContent = "Wrong!";
  }

  submitted = true;
  submitButton.disabled = false;
}

function checkAnswer() {
  if (!submitted) {
    return;
  }

  currentQuestion++;
  submitted = false;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
    scoreElement.textContent = `Total Score: ${score} out of ${quizData.length}`;
  }
}

showQuestion();
submitButton.addEventListener("click", checkAnswer);

