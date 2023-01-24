const quizData = [
    {
        question: "In whom does Harry ultimately confide about the pain in his scar?",
        a: "Ron Weasley",
        b: "Hermione Granger",
        c: "Albus Dumbledore",
        d: "Sirius Black",
        correct: "d",
    },
    {
        question: "What do the Weasley twins leave on the floor for Dudley Dursley to eat?",
        a: "A Ton-Tongue Toffee",
        b: "Whizzing Fizzbees",
        c: "A Chocolate Frog",
        d: "Bertie Bott's Every Flavor Beans",
        correct: "a",
    },
    {
        question: "Who is the only student left standing once the Portkey deposits them at the World Cup?",
        a: "Harry Potter",
        b: "Fred Weasley",
        c: "Cedric Diggory",
        d: "Hermione Granger",
        correct: "c",
    },
    {
        question: "How do the wizards sleep during the Quidditch World Cup?",
        a: "Invisibly",
        b: "In tents",
        c: "In trees",
        d: "Underground",
        correct: "b",
    },
    {
        question: "Into what does Mad-Eye Moody turn Malfoy?",
        a: "A bouncing white ferret",
        b: "A green octopus",
        c: "A wobbly wooden table",
        d: "A writhing, furry spider",
        correct: "a",
    },
    {
        question: "Which curse upsets Neville Longbottom the most?",
        a: "Accio",
        b: "Avada Kedavra",
        c: "Imperio",
        d: "Crucio",
        correct: "d",
    },
    {
        question: "How does Harry get past the Hungarian Horntail?",
        a: "Under his Invisibility cloak",
        b: "By cursing the dragon's eyes",
        c: "On his broomstick",
        d: "On a hippogriff",
        correct: "c",
    },
    {
        question: "Where did Dobby find work after being freed from the Malfoys?",
        a: "In the Hogwarts kitchens",
        b: "Behind the bar at The Three Broomsticks",
        c: "At the Dursleys",
        d: "At a magical creatures petting zoo",
        correct: "a",
    },
    {
        question: "How did Harry finally get the golden egg to explain the second task?",
        a: "By tickling it",
        b: "By feeding it ladybugs",
        c: "By listening to it underwater",
        d: "By dropping it down the stairs",
        correct: "c",
    },
    {
        question: "Who ultimately suggests that Harry eat gillyweed to breathe underwater?",
        a: "Dobby",
        b: "Hagrid",
        c: "Neville",
        d: "Hermione",
        correct: "a",
    },
    {
        question: "What does Harry observe in Dumbledore's Pensieve?",
        a: "The trials of various Death Eaters",
        b: "The death of Bertha Jorkins",
        c: "The marriage of his own parents",
        d: "The making of his wand",
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