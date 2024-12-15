const question = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'Javascript',
    'd': 'PHP',
    'ans': 'a'

}, {
    'que': 'In which year was Javascript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'ans': 'b'
}, {
    'que': 'What does CSS stands for?',
    'a': 'Hypertext markup language',
    'b': 'Cascading Style Sheet',
    'c': 'Computer Software System',
    'd': 'Js Object Notation',
    'ans': 'b'
},
{
    'que':'Which of the following number object function returns the value of the number?',
    'a':'toString()',
    'b':'valueOf()',
    'c':'toLocaleString()',
    'd':'toPrecision()',
    'ans':'b'
},
{
    'que':'Which one of the following is used for the calling a function or a method in the JavaScript:',
    'a':'Property Access Expression',
    'b':'Functional expression',
    'c':'Invocation expression',
    'd':'Primary expression',
    'ans':'c'
},
{
    'que':'The "new Point(3,2)", is a kind of _______ expression',
    'a':'Object Creation Expression',
    'b':'Primary Expression',
    'c':'Invocation Expression',
    'd':'Constructor calling Expression',
    'ans':'a'
},
{
    'que':'Which one of the following operator is used to check weather a specific property exists or not:',
    'a':'Exists',
    'b':'exist',
    'c':'within',
    'd':'in',
    'ans':'d'
},
{
    'que':'"An expression that can legally appear on the left side of an assignment expression." is a well known explanation for variables, properties of objects, and elements of arrays. They are called_____.',
    'a':'Properties',
    'b':'Prototypes',
    'c':'Definitions',
    'd':'Lvalue',
    'ans':'d'
},
{
    'que':'Which one of the following is not a keyword:',
    'a':'if',
    'b':'with',
    'c':'debugger',
    'd':'use strict',
    'ans':'d'
},
{
    'que':' Which one of the following utilize the CPU cycles in a massive manner?',
    'a':'GUI (Graphic User Interface)',
    'b':'Statically generated graphics',
    'c':'Dynamically generated graphics',
    'd':'Generic Scoping',
    'ans':'c'
},

]

let index = 0;
let total = question.length;
let correct = 0;
let wrong = 0;
const quesBox = document.getElementById('quesBox');
const option = document.querySelectorAll('.options');
const loadQues = () => {
    if(index===total){
        return endQuiz();
    }
    reset();
    const data = question[index]
    quesBox.innerHTML = `${index + 1})${data.que}`;
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAns()
    if (ans === data.ans) {
        correct++;
    }
    else {
        wrong--;
    }
    index++;
    loadQues();
    return;
}

const getAns = () => {
    let answer;
    option.forEach(
        (input) => {
            if (input.checked) {
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    option.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById('box').innerHTML=`
    <div style='text-align:center'>
    <h3>Thank you for playing the quiz !</h3>
    <h2 style='padding-top:5px'>${correct}/${total} are correct </h2>
    </div>`
}
loadQues();
