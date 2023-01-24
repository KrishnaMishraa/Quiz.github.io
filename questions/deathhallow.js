const quizData = [
    {
        question: "According to legend, what would a person become if he could assemble the Deathly Hallows?",
        a: "Infinitely wise",
        b: "Ruler of the world",
        c: "Master of death",
        d: "Invincible",
        correct: "c",
    },
    {
        question: "Whose eye does Harry see in his magic mirror shard?",
        a: "Albus Dumbledore",
        b: "Aberforth Dumbledore",
        c: "Gellert Grindelwald",
        d: "Severus Snape",
        correct: "b",
    },
    {
        question: "What is inside the Snitch that Dumbledore leaves Harry?",
        a: "Nothing",
        b: "The locket Horcrux",
        c: "Snape’s final memories",
        d: "The Resurrection Stone",
        correct: "d",
    },
    {
        question: "Which is Dumbledore’s greatest regret?",
        a: "Not telling Harry that Harry had to die",
        b: "Trusting Snape",
        c: "Helping his mother imprison his sister",
        d: "Helping Gellert Grindelwald",
        correct: "d",
    },
    {
        question: "Which of the following people did NOT steal the locket Horcrux?",
        a: "Mundungus Fletcher",
        b: "Regulus Black",
        c: "Dolores Umbridge",
        d: "Vincent crabbe",
        correct: "a",
    },
    {
        question: "Whose mail did Snape open?",
        a: "Dumbledore’s",
        b: "Harry’s mother Lily’s",
        c: "Harry’s Aunt Petunia’s",
        d: "Griphook",
        correct: "c",
    },
    {
        question: "Why can the Sword of Gryffindor destroy Horcruxes?",
        a: "It is impregnated with basilisk venom",
        b: "It was made by goblins",
        c: "It contains a phoenix feather",
        d: "It is one of the Deathly Hallows",
        correct: "a",
    },
    {
        question: "Why does Dumbledore leave Ron a Deluminator?",
        a: "To protect him from dementors",
        b: "To lead him back to Harry",
        c: "So he can turn the lights off",
        d: "So he can eavesdrop on Snape",
        correct: "b",
    },
    {
        question: "What is Ariana Dumbledore rumored to be?",
        a: "A Mudblood",
        b: "A Squib",
        c: "A blood traitor",
        d: "A murderer",
        correct: "b",
    },
    {
        question: "Why does Krum want to fight Xenophilius Lovegood?",
        a: "Because Lovegood knows about the Deathly Hallows",
        b: "Because Lovegood served him nasty-tasting tea",
        c: "Because Lovegood wears Grindelwald’s mark",
        d: "Because Lovegood insults Gregorovitch",
        correct: "c",
    },
    {
        question: "Who is R.A.B.?",
        a: "Sirius Black’s brother",
        b: "Dumbledore’s brother",
        c: "Voldemort’s younger self",
        d: "Snape",
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