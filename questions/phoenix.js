const quizData = [
    {
        question: "Who can see thestrals?",
        a: "People who have witnessed death",
        b: "Aurors",
        c: "Centaurs",
        d: "Members of Gryffindor",
        correct: "a",
    },
    {
        question: "Who or what attacks Harry in the alleyway in Little Whinging?",
        a: "Death Eaters",
        b: "Hoodlums",
        c: "Draco Malfoy",
        d: "Dementors",
        correct: "d",
    },
    {
        question: "Where is the headquarters of the Order of the Phoenix?",
        a: "Four Privet Drive",
        b: "The Room of Requirement",
        c: "Twelve Grimmauld Place",
        d: "Dumbledore’s office",
        correct: "c",
    },
    {
        question: "Who does Hagrid keep captive in the Forbidden Forest?",
        a: "Grawp",
        b: "Firenze",
        c: "Umbridge",
        d: "Fawkes",
        correct: "a",
    },
    {
        question: "Who teaches Hagrid’s class while he is gone?",
        a: "Professor Umbridge",
        b: "Professor Grubbly-Plank",
        c: "Professor McGonagall",
        d: "Professor Trelawney",
        correct: "b",
    },
    {
        question: "What position does Ron play on the Gryffindor Quidditch team?",
        a: "Captain",
        b: "Seeker",
        c: "Keeper",
        d: "Forward",
        correct: "c",
    },
    {
        question: "Who is selected to replace Harry as Quidditch Seeker?",
        a: "Ginny",
        b: "Ron",
        c: "Neville",
        d: "Seamus",
        correct: "a",
    },
    {
        question: "What does Harry want to pursue as a career?",
        a: "Professor",
        b: "Auror",
        c: "Minister of Magic",
        d: "Headmaster of Hogwarts",
        correct: "b",
    },
    {
        question: "What happens to Marietta when she tells Umbridge about the D.A.?",
        a: "She dies",
        b: "The word SNEAK appears on her face",
        c: "She loses her ability to speak",
        d: "Her hair falls out",
        correct: "b",
    },
    {
        question: "Where does Hermione lead Umbridge after Harry has been caught in Umbridge’s office?",
        a: "Hagrid’s cabin",
        b: "The Forbidden Forest",
        c: "Gryffindor Common Room",
        d: "Dumbledore’s office",
        correct: "b",
    },
    {
        question: "What skill does Voldemort have that makes learning Occlumency so important for Harry?",
        a: "Legilimency",
        b: "Animagus",
        c: "Dark Arts",
        d: "Potions",
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