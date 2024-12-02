const questions = [{
    'que': 'what is your name ?',
    'a': 'Manish Victor',
    'b': 'Anshu Singh',
    'c': 'Kunal Sagar',
    'd': 'None of these',
    'correct': 'b'

},
{
    'que': 'what is your elder brother name ?',
    'a': 'Manish Victor',
    'b': 'Anshu Singh',
    'c': 'Kunal Sagar',
    'd': 'None of these',
    'correct': 'a'
},
{
    'que': 'what is your younger brother name ?',
    'a': 'Manish Victor',
    'b': 'Anshu Singh',
    'c': 'Kunal Sagar',
    'd': 'None of these',
    'correct': 'c'
}
]

const reset = ()=>{
    optionInputs.forEach((input)=>{
        input.checked = false
    })
}
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const loadQuestion = ()=>{
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index+1}. ${data.que}`;
    optionInputs[1].nextElementSibling.innerText = data.b;    
    optionInputs[0].nextElementSibling.innerText = data.a;    
    optionInputs[2].nextElementSibling.innerText = data.c;    
    optionInputs[3].nextElementSibling.innerText = data.d;    
}

const getAnswer = ()=>{
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    })
    return answer;
}

const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `
       <h3>Thank you for playing the quiz</h3>
    `
}

loadQuestion();