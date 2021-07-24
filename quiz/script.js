// Initial Data
let currentQuestion = 0;

showQuestion();

// Functions
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    console.log(q.question);
  }
}
