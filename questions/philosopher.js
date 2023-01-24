const quizData = [
    {
        question: "How does Harry first learn that he is a wizard?",
        a: "The Dursleys tell him when he is eight",
        b: "Dudley accidentally lets it slip",
        c: "Hagrid has to track him down to tell him",
        d: "He reads about it in the Daily Prophet",
        correct: "c",
    },
    {
        question: "Where does Harry live in the Dursley’s home?",
        a: "With Dudley",
        b: "In the guest house",
        c: "In Mr. and Mrs. Dursley’s room",
        d: "In a cupboard under the stairs",
        correct: "d",
    },
    {
        question: "Who decides where the children will be housed at Hogwarts?",
        a: "Albus Dumbledore",
        b: "The Sorting Hat",
        c: "The Sorting Broom",
        d: "Each child decides for him- or herself",
        correct: "b",
    },
    {
        question: "What is significant about the day of the Gringotts break-in?",
        a: "It occurs on Harry’s birthday",
        b: "Harry is at Gringotts earlier the same day",
        c: "Hagrid empties vault seven hundred and thirteen",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which teacher is trying to steal the Sorcerer’s Stone?",
        a: "Snape",
        b: "Dumbledore",
        c: "Quirrell",
        d: "McGonagall",
        correct: "c",
    },
    {
        question: "To whom does the Sorcerer’s Stone belong?",
        a: "Harry",
        b: "Hagrid",
        c: "Voldemort",
        d: "Nicolas Flamel",
        correct: "d",
    },
    {
        question: "What position does Harry play in Quidditch?",
        a: "Quaffle",
        b: "Sweeper",
        c: "Seeker",
        d: "Chaser",
        correct: "c",
    },
    {
        question: "What’s the name of Hogwarts School’s gamekeeper?",
        a: "Ralph",
        b: "Ted",
        c: "Homer",
        d: "Rubeus Hagrid",
        correct: "d",
    },
    {
        question: "What does Voldemort drink in the Forbidden Forest to sustain himself?",
        a: "Apple nectar",
        b: "Unicorn blood",
        c: "Sacred water",
        d: "Cedar sap",
        correct: "b",
    },
    {
        question: "Whom do Harry and Ron accidentally lock in the bathroom with the troll?",
        a: "Hermione",
        b: "Dumbledore",
        c: "Malfoy",
        d: "McGonagall",
        correct: "a",
    },
    {
        question: "To whom does the invisibility cloak belong originally?",
        a: "Dumbledore",
        b: "Voldemort",
        c: "Hagrid",
        d: "James Potter",
        correct: "d",
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