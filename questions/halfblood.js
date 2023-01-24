const quizData = [
    {
        question: "What does Horace Slughorn teach?",
        a: "Potions",
        b: "Transfiguration",
        c: "Defense Against the Dark Arts",
        d: "Divination",
        correct: "a",
    },
    {
        question: "Who does Hagrid bury in his backyard?",
        a: "Lucius Malfoy",
        b: "Aragog",
        c: "Gwarp",
        d: "Witherwings",
        correct: "b",
    },
    {
        question: "What potion brings its user unusually good luck?",
        a: "Polyjuice Potion",
        b: "Felix Felicis",
        c: "Amortentia",
        d: "Veritaserum",
        correct: "b",
    },
    {
        question: "Which House Elf does Harry inherent from his godfather, Sirius Black?",
        a: "Kreacher",
        b: "Dobby",
        c: "Hokey",
        d: "Teddy",
        correct: "a",
    },
    {
        question: "Who does Harry catch with Sirius’s stolen belongings?",
        a: "Mundungus",
        b: "Filch",
        c: "Nearly Headless Nick",
        d: "Dumbledore",
        correct: "a",
    },
    {
        question: "What Horcrux does Dumbledore destroy before collecting Harry from his aunt and uncle?",
        a: "Slytherin’s locket",
        b: "Hufflepuff’s cup",
        c: "Gryffindor’s sword",
        d: "Marvolo’s ring",
        correct: "d",
    },
    {
        question: "Whose memory is too muddled to be of much use to Dumbledore and Harry?",
        a: "Professor Slughorn’s",
        b: "Hagrid’s",
        c: "Bob Ogden’s",
        d: "Hokey’s",
        correct: "a",
    },
    {
        question: "Who bit Remus Lupin, turning him into a werewolf?",
        a: "Voldemort",
        b: "Lucius Malfoy",
        c: "Snape",
        d: "Fenir Greyback",
        correct: "d",
    },
    {
        question: "What do Crabbe and Goyle transform into when they are keeping guard for Draco?",
        a: "Little girls",
        b: "Birds",
        c: "Scales",
        d: "Paintings",
        correct: "a",
    },
    {
        question: "Where is Draco when he cannot be located on the Marauder’s Map?",
        a: "The Great Hall",
        b: "Hagrid’s cabin",
        c: "The Slytherin common room",
        d: "The Room of Requirement",
        correct: "d",
    },
    {
        question: "What does Harry slip into Ron’s drink the morning of his first Quidditch match?",
        a: "Felix Felicis",
        b: "Polyjuice Potion",
        c: "Mead",
        d: "Nothing",
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