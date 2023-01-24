const quizData = [
    {
        question: "Why is Harry sad the day he turns twelve?",
        a: "Because his uncle and aunt didn't give him the broomstick he wanted",
        b: "Because he hadn't heard from his best friends at Hogwarts all summer",
        c: "Because he felt old age approaching all too soon",
        d: "Because his owl, Hedwig, was angry with him",
        correct: "b",
    },
    {
        question: "What does Dobby the house-elf do when Harry refuses to remain away from Hogwarts?",
        a: "He bangs Harry's head with a lamp",
        b: "He shrugs and leaves",
        c: "He threatens to cast an obliviating charm on Harry",
        d: "He suspends and drops Aunt Petunia's violet pudding",
        correct: "d",
    },
    {
        question: "What is the name of the Weasley's home?",
        a: "The Burrow",
        b: "The Den",
        c: "The Lair",
        d: "The Magic Garden",
        correct: "a",
    },
    {
        question: "What has Mr. Weasley enchanted his car to do?",
        a: "Sing",
        b: "Eat dangerous predators",
        c: "Wash dishes",
        d: "Fly",
        correct: "d",
    },
    {
        question: "How do people who use Floo powder travel?",
        a: "Through the sky",
        b: "Underground",
        c: "Through fireplaces",
        d: "Underwater",
        correct: "c",
    },
    {
        question: "What is Harry instructed to do for his detention?",
        a: "Answer Gilderoy Lockhart's fan mail",
        b: "Polish trophies",
        c: "Mop up the first floor girls' bathroom",
        d: "Tend to Professor Sprout's Mandrakes",
        correct: "a",
    },
    {
        question: "What derogatory name does Malfoy call Hermione?",
        a: "Miss Priss",
        b: "Mudblood",
        c: "Rodent Girl",
        d: "Polyjuice Punk",
        correct: "b",
    },
    {
        question: "Which first year loves to photograph Harry?",
        a: "Ginny Weasley",
        b: "Colin Creevey",
        c: "Justin Finch-Fletchley",
        d: "Penelope Clearwater",
        correct: "b",
    },
    {
        question: "Whose Deathday party do Harry, Ron, and Hermione attend?",
        a: "Peeves the Poltergeist.",
        b: "Nearly Headless Nick",
        c: "Moaning Myrtle",
        d: "The Bloody Baron",
        correct: "b",
    },
    {
        question: "Who or what eventually saves Ron and Harry from being eaten by giant spiders in the Forbidden Forest?",
        a: "Hagrid",
        b: "Hagrid's dog Fang",
        c: "The Weasleys' Ford Anglia",
        d: "The Whomping Willow",
        correct: "c",
    },
    {
        question: "Where is the entrance to the Chamber of Secrets?",
        a: "In Slytherin tower",
        b: "In Moaning Myrtle's bathroom",
        c: "In the Forbidden Forest",
        d: "Just outside the Great Hall",
        correct: "b",
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