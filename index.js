const STORE = {
    questions: [
        ['Which car has the highest top speed?','Porsche 911 (Turbo S)','BMW i8','Lamborghini Huracan','Ferrari 488','McClaren 540C',3,'IMGlambo.png',false],
        ['Which car has the fastest 0-100 kph (0-62 mph)?','Porsche 911 (Turbo S)','BMW i8','Lamborghini Huracan','Ferrari 488','McClaren 540C',1,'IMGporsche.png',false],
        ['Which car has the lowest entry price?','Porsche 911 (Turbo S)','BMW i8','Lamborghini Huracan','Ferrari 488','McClaren 540C',5,'IMGmclaren.jpg',false],
        ['Which car has the best gas mileage?','Porsche 911 (Turbo S)','BMW i8','Lamborghini Huracan','Ferrari 488','McClaren 540C',2,'IMGbmw.jpg',false],
        ['Which car has the best styling (OK, maybe it’s subjective, but my opinion counts most)?','Porsche 911 (Turbo S)','BMW i8','Lamborghini Huracan','Ferrari 488','McClaren 540C',4,'IMGferrari.png',false],
        ['Which car doubles as a family sedan (has 4 seats)?','Porsche 911 (Turbo S)','BMW i8','Lamborghini Huracan','Ferrari 488','McClaren 540C',1,'IMGporsche.png',false]      
    ],
    currentQuestion: 1
};


function welcomeHeader() {
    return `
    <div class='header-container'>
    <h1 class='topTitle'>Test your knowledge of high performance sports cars.</h1>
    </div>`;
};

function welcomeBody() {
    return `
    <div class='introduction-container'>
    <div class='intro'>
        <h2 class='introduction-text'>
            Welcome to the world famous quiz where car afficionados test their knowledge of the most elite sports cars in the world. 
        </h2>
    </div>
    <div class='introduction-button'>
        <form  action="index.html">
            <div class='submit-button'>
                <button type="submit" class='submitButton' >Start</button>    
            </div>     
    </form>`
};

function quizHeader(){
    let numCorrect = parseCorrect();
    let outOf = STORE['currentQuestion']-1;

    return `
    <div class='header-container'>
        <h1 class='topTitle'>Test your knowledge of high performance sports cars.</h1>
        <p class='numberCorrect'>Correct Answers: ${numCorrect} out of ${outOf}</p>
    </div>
    <div class='after-submit'>
    </div>
     `;

};

function quizBody(){
    let questionNumber = STORE.currentQuestion;
    return `
    <div class='survey-container'>
        <form action = "Answer.html" class='question-form'>
            <div class='question-text'>
                <h2 class='question'>${questionNumber}) ${STORE.questions[questionNumber-1][0]}</h2>
            </div>
            <div class='response-text'>
                <div>
                    <input type="radio" name='carType' id='answer1' value=1 required>
                    <label for='answer1'>${STORE.questions[questionNumber-1][1]}</label>
                </div>
                <div>
                    <input type="radio" name='carType' id='answer2' value=2>
                    <label for='answer2'>${STORE.questions[questionNumber-1][2]}</label>
                </div>
                <div>
                    <input type="radio" name='carType' id='answer3' value=3>
                    <label for="answer3">${STORE.questions[questionNumber-1][3]}</label>
                </div>
                <div>
                    <input type="radio" name='carType' id='answer4' value=4>
                    <label for="answer4">${STORE.questions[questionNumber-1][4]}</label>
                </div>
                <div>
                    <input type="radio" name='carType' id='answer5' value=5>
                    <label for="answer5">${STORE.questions[questionNumber-1][5]}</label>
                </div>

            </div>
            <div class='submit-button'>
                <button type="submit" class='SubmitButton' text='next'>Next</button>    
            </div>
        </form>
    </div>`;
};

function headerHTMLAnswer() {
    return `
    <div class='header-container'>
    </div>`;
}

//function score(rightWrong, thisQuestion, correctAnswer){
// how to do this?    
//}


function bodyHTMLAnswer() {
    let rightWrong = '';
    let thisQuestion = STORE.currentQuestion;
    let correctAnswer = STORE.questions[thisQuestion-1][6];
    if(STORE.questions[thisQuestion-1][8]==true){
        rightWrong="Correct";
        console.log(rightWrong);
    }
    else { 
        rightWrong="Incorrect";
        console.log(rightWrong);
    }
    return `
    <div class='response'>
       <div class='answer-check'>
           <h2>${rightWrong}. The ${STORE.questions[thisQuestion-1][correctAnswer]} is the correct answer.</h2>
       </div>
       <div class='answer-image'>
           <img id='car-response' src="${STORE.questions[thisQuestion-1][7]}">
       </div>
    <form action="Finish.html">
        <div class='submit-button'>
            <button type="submit" class='SubmitButton' text='next'>Next</button>    
        </div>
    </form>
    </div>`;
         
}

function endHeader(){

    return `
    <div class='header-container'>
        <h1 class="Finish-page">Congratulations, you have completed the high performance sports car quiz!</h1>
        <p> You answered ${parseCorrect()} out of ${STORE.currentQuestion} questions correctly</p>
    </div>`;
    }

function endBody(){
    return`
    <div class='finish-body'>
        <h2>If you would like to take the quiz again, please click "Retry" below.</h2>
    <form action="index.html">
        <div class='submit-button'>
            <button type="submit" class='SubmitButton'>Retry</button>    
        </div>
    </form>
    </div>
    </div>`;
            

}


function welcome() {
    const headerHTMLWelcome = welcomeHeader();
    const bodyHTMLWelcome = welcomeBody();
    $('.headerjs').html(headerHTMLWelcome);
    $('.mainjs').html(bodyHTMLWelcome);
    $('.submitButton').on('click',function(event){
        event.preventDefault();
        console.log("intro button clicked");
        takeQuiz();
    });
};


function parseCorrect(){
    let correctCount=0;
    let lenn=STORE.questions.length;
    console.log(lenn);
    for(let i=0;i<=(lenn-1);i++){
//        console.log(i);
        console.log(STORE.questions[i][8]);
        if(STORE.questions[i][8]){
            correctCount=correctCount + 1;
        };
    };
    return correctCount;
};


function takeQuiz() {
    const headerHTMLQuiz = quizHeader();
    const bodyHTMLQuiz = quizBody();
    $('.headerjs').html(headerHTMLQuiz);
    $('.mainjs').html(bodyHTMLQuiz);
    $('.SubmitButton').on('click',function(event){
        event.preventDefault();
        answerPage(event);
    });
};


function evaluateResponse(radioValue){
    console.log("Evaluating Response");
    let thisQuestion = STORE.currentQuestion;
    if(STORE.questions[thisQuestion-1][6]==radioValue){
        STORE.questions[thisQuestion-1][8]=true;
    }
};


function answerPage(event) {
    var radioValue = $("input[name='carType']:checked").val();
    evaluateResponse(radioValue);
    $('.headerjs').html(headerHTMLAnswer);
    $('.mainjs').html(bodyHTMLAnswer);
    $('.SubmitButton').on('click',function (event) {
        event.preventDefault();
        if(STORE.currentQuestion<STORE.questions.length) {
            STORE.currentQuestion=STORE.currentQuestion+1;
            takeQuiz();
        }
        else {
            endQuiz()
        }
    })
    
}

function endQuiz() {
    console.log("END OF QUIZ");
    const headerHTMLEnd=endHeader();
    const bodyHTMLEnd=endBody();
    $('.headerjs').html(headerHTMLEnd);
    $('.mainjs').html(bodyHTMLEnd);
};


function startQuiz() {
    console.log("quiz started");
    welcome();
};



$(startQuiz);







