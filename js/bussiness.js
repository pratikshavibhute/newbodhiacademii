//Question bank
var questionBank= [
    {
        question : 'What type of variable can be used to capture fixed effects?',
        option : ['Random variables','continuous variables','Dummy variables',' all of these answers'],
        answer : 'Dummy variables'
    },
    {
        question : 'What type of data should the Y variable be in a binary regression?',
        option : [' Discrete','Random',' Continuous','none of these answers'],
        answer : ' Discrete'
    },
    {
        question : 'Fixed effects regressions help to deal with what problem?',
        option : ['Statistical Insignificance',' Survey Bias','Omitted variables bias','Randomness in data'],
        answer : 'Omitted variables bias'
    },
    {
        question : ' Which statistic offers a bounds on our estimate of the impact of an X variable on the Y variable?',
        option : ['T-statistic',' R-squared','95% confidence interval',' P-value'],
        answer : '95% confidence interval'
    },
    {
        question : 'What is one type of time series forecasting?',
        option : [' Regressions','The Delphi Method','Exponential Smoothing',' Surveys'],
        answer : 'Exponential Smoothing'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();