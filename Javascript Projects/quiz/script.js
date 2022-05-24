const quizData = [
    {
        question:'What is the name of the tallest mountain on Earth?',
        a: 'Musala',
        b: 'Everest',
        c: 'Lhotse',
        d: 'K2',
        correct: 'b'
    }, {

        question:'How many continents are there on Earth?',
        a:'5',
        b:'6',
        c:'7',
        d:'8',
        correct:'c'
    } ,{

        question:'What is the biggest continent?',
        a:'Europe',
        b:'Africa',
        c:'North America',
        d:'Asia',
        correct:'d'
    },
    {

        question:'What country has the highest population?',
        a:'India',
        b:'Indonesia',
        c:'China',
        d:'The Netherlands',
        correct:'c'
    }, {

        question:'What does CSS stand for?',
        a:'Mascarading Style Sheets',
        b:'Coding Style Sheets',
        c:'Creating Style Sheets',
        d:'Cascading Style Sheets',
        correct:'d'
    }
];const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});