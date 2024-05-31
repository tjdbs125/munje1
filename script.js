const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://media.istockphoto.com/id/1388420740/ko/%EC%82%AC%EC%A7%84/%EB%84%B7-%EC%A0%9C%EB%A1%9C-%EB%B0%8F-%ED%83%84%EC%86%8C-%EC%A4%91%EB%A6%BD-%EA%B0%9C%EB%85%90-%EA%B7%B8%EB%AC%BC-%EC%A0%9C%EB%A1%9C-%EB%B0%B0%EC%B6%9C-%EB%AA%A9%ED%91%9C-%EA%B8%B0%ED%9B%84-%EC%A4%91%EB%A6%BD%EC%A0%81-%EC%9D%B8-%EC%9E%A5%EA%B8%B0-%EC%A0%84%EB%9E%B5-%ED%9A%8C%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EB%85%B9%EC%83%89-%EA%B7%B8%EB%AC%BC-%EC%A4%91%EC%8B%AC-%EC%95%84%EC%9D%B4%EC%BD%98%EA%B3%BC-%EB%85%B9%EC%83%89-%EC%95%84%EC%9D%B4%EC%BD%98%EC%86%90%EC%9C%BC%EB%A1%9C-%EB%82%98%EB%AC%B4-%EB%B8%94%EB%A1%9D%EC%9D%84-%EB%84%A3%EC%96%B4-%EC%A4%80%EB%B9%84.jpg?s=612x612&w=0&k=20&c=g3Rxcd9FWROUSXPGQg9U8pAtANqilRZ6atBjAhUPqCg=", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://media.istockphoto.com/id/1368415587/ko/%EB%B2%A1%ED%84%B0/%EB%9D%BC%EC%9D%B8-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%98-%EB%8B%AC%EB%9F%AC-%ED%99%94%EC%82%B4%ED%91%9C-%EA%B2%A9%EB%A6%AC-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%86%B5%ED%99%94-%EC%83%81%EC%8A%B9-%EB%B0%8F-%ED%95%98%EB%9D%BD-%EB%B2%A1%ED%84%B0-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EA%B0%9C%EB%85%90.jpg?s=612x612&w=0&k=20&c=MOquI--82nJiYObFq4NrlKSRcClBMUhepLssaWL6Rxc=",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://media.istockphoto.com/id/1427517220/ko/%EC%82%AC%EC%A7%84/%ED%83%84%EC%86%8C-%EC%A4%91%EB%A6%BD-%EB%B0%8F-%EC%88%9C-%EC%A0%9C%EB%A1%9C-%EA%B0%9C%EB%85%90-%EC%9E%90%EC%97%B0-%ED%99%98%EA%B2%BD-%EA%B8%B0%ED%9B%84-%EC%A4%91%EB%A6%BD%EC%A0%81-%EC%9D%B8-%EC%9E%A5%EA%B8%B0-%EC%A0%84%EB%9E%B5-%EC%98%A8%EC%8B%A4-%EA%B0%80%EC%8A%A4-%EB%B0%B0%EC%B6%9C%EC%9D%80-%EB%85%B9%EC%83%89-%EA%B7%B8%EB%AC%BC-%EC%84%BC%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9C%BC%EB%A1%9C-%EA%B8%80%EB%A1%9C%EB%B8%8C-%EA%B8%80%EB%A1%9C%EB%B8%8C%EB%A5%BC-%EB%AA%A9%ED%91%9C%EB%A1%9C%ED%95%A9%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=vrSmQsJ04SUzrekyeMPDqRge8JyorHYdxxdDdd_qWPQ=",
        explanationImage: "https://example.com/explanation1.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://media.istockphoto.com/id/1390020396/ko/%EB%B2%A1%ED%84%B0/%ED%98%84%EB%8C%80-%EB%A0%88%EB%93%9C-%EC%8A%88%ED%8D%BC-%EC%84%B8%EC%9D%BC-%EC%8A%A4%ED%8B%B0%EC%BB%A4-%EB%B0%8F-%ED%83%9C%EA%B7%B8-%EC%BB%AC%EB%A0%89%EC%85%98.jpg?s=612x612&w=0&k=20&c=xUbZx_h8A5cwFotuac6hfqxv7Ql6OkhPg-ajmejHlq0=",
        explanationImage: "https://example.com/explanation1.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://media.istockphoto.com/id/1397998210/ko/%EB%B2%A1%ED%84%B0/%EC%A3%BC%EC%8B%9D-%EC%8B%9C%EC%9E%A5.jpg?s=612x612&w=0&k=20&c=rHiWJzMv0-n2zFezGyGvyVIUNnmlraMFXXUsIFep_dc=",
        explanationImage: "https://example.com/explanation1.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "http://myilsim.or.kr/user/saveDir/board/www62/624_1549200558_0.jpg",
        explanationImage: "https://example.com/explanation1.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "http://myilsim.or.kr/user/saveDir/board/www62/624_1549200558_0.jpg",
        explanationImage: "https://example.com/explanation1.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    };

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가
            listItem.innerHTML = `
                <p class="incorrect-header">틀린 문제</p>
                ${questions.indexOf(Element)}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.style.marginTop = "20px";
        explanationContainer.style.display = "flex"; // Flexbox 사용
        explanationContainer.style.flexWrap = "wrap"; // 줄바꿈 허용

        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            button.style.width = "calc(33% - 10px)"; // 버튼 너비 조정 (여유 공간 확보)
            button.style.margin = "5px"; // 간격 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const explanationImage = questions[index].explanationImage;
    if (explanationImage) {
        const imageElement = document.createElement("img");
        imageElement.src = explanationImage;
        imageElement.alt = `Explanation Image for Question ${index + 1}`;
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();