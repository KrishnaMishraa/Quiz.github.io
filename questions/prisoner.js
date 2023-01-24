const quizData = [
    {
        question: "What must Harry do in secret while at four Privet Drive?",
        a: "Watch television",
        b: "Talk on the telephone",
        c: "His homework",
        d: "His Quidditch exercises",
        correct: "c",
    },
    {
        question: "What false name does Harry give the staff of the Knight Bus?",
        a: "Neville Longbottom",
        b: "Dean Thomas",
        c: "Seamus Finnegin",
        d: "Dudley Dursley",
        correct: "a",
    },
    {
        question: "What does Harry see each time before he find himself in danger?",
        a: "Crookshanks",
        b: "Voldemort",
        c: "A large black dog",
        d: "A lightening bolt",
        correct: "c",
    },
    {
        question: "Why does Professor Lupin give Harry chocolate on the Hogwarts Express Train?",
        a: "To make friends with him",
        b: "To counteract the effects of the Dementor",
        c: "To put him to sleep",
        d: "To make Malfoy jealous",
        correct: "b",
    },
    {
        question: "In what psychic medium does Professor Trelawney foresee Harry's death?",
        a: "Palm-reading",
        b: "Crystal-ball gazing",
        c: "Interpreting Tealeaves",
        d: "Phrenology",
        correct: "c",
    },
    {
        question: "Who ultimately DID send Harry the Firebolt?",
        a: "Minerva McGonagall",
        b: "Sirius Black",
        c: "Peter Pettigrew",
        d: "Albus Dumbledore",
        correct: "b",
    },
    {
        question: "Where does the great black dog drag Ron?",
        a: "Under the Whomping Willow",
        b: "Into the lake",
        c: "Into an angry group of werewolves",
        d: "All the way to London",
        correct: "a",
    },
    {
        question: "What words prompt the Marauder's Map to show itself?",
        a: "Alohamora",
        b: "Teach me trouble",
        c: "Open sesame",
        d: "I solemnly swear that I am up to no good",
        correct: "d",
    },
    {
        question: "What did the Boggart turn into while facing Professor Lupin?",
        a: "A full moon",
        b: "A crystal ball",
        c: "A single eyeball",
        d: "A mirror",
        correct: "a",
    },
    {
        question: "Who replaced the Fat Lady as the guardian to Gryffindor Tower?",
        a: "The Bloody Baron",
        b: "Nearly-Headless Nick",
        c: "Sir Cadogan",
        d: "Peeves",
        correct: "c",
    },
    {
        question: "Who is Padfoot?",
        a: "Sirius Black",
        b: "Peter Pettigrew",
        c: "James Potter",
        d: "R.J. Lupin",
        correct: "a",
    }
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})