const questions=[{
    question:"Which is not a programming language?",
    answers:[
            {text:"Java",correct:false},
            {text:"C++",correct:false},
            {text:"HTML",correct:true},
            {text:"Python",correct:false}
        ]
},
{
    question:"Which HTML tag is used to create a hyperlink? ",
    answers:[
            {text:"link",correct:false},
            {text:"href",correct:false},
            {text:"a",correct:true},
            {text:"hyperlink",correct:false}
    ]
},
{
    question:"What is used to read an HTML page and render it? ",
    answers:[
            {text:"Web server",correct:false},
            {text:"Web browser",correct:true},
            {text:"Web matrix ",correct:false},
            {text:"None of the mentioned",correct:false}
        ]
},
{
    question:"What is DOM?",
    answers:[
            {text:"Application programming interface ",correct:false},
            {text:"Hierarchy of objects in ASP.NET ",correct:false},
            {text:"HTML Tree Structure Representation",correct:true},
            {text:"None of the mentioned",correct:false}
        
        
        ]
},
{
    question:"What application can one create even before the introduction of HTML5? ",
    answers:[
            {text:"Forms",correct:true},
            {text:"Browser-based games",correct:false},
            {text:"Web applications",correct:false},
            {text:"Mobile applications",correct:false}
        ]
}


];
const questionElement=document.getElementById("question");
const answerBtn=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answers => {
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer)

    });

}


function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextBtn.style.display="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML="playAgain";
    nextBtn.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}






nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
})




startQuiz()