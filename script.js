const Questions = [{
    id: 0,
    ques: "How many alphabets english has ?",
    opt: [
        { option: 25, isTrue: false },
        { option: 26, isTrue: true },
        { option: 64, isTrue: false },
        { option: 17, isTrue: false }
    ]
},
{
    id: 1,
    ques: "capital of india is  ?",
    opt: [
        { option: "Mumbai", isTrue: false },
        { option: "Delhi", isTrue: true },
        { option: "Kolkata", isTrue: false },
        { option: "Chennai", isTrue: false }
    ]
},
{
    id: 2,
    ques: "India's Prime Minister is  ?",
    opt: [
        { option: "Nitish kumar", isTrue: false },
        { option: "Lalu yadav", isTrue: false },
        { option: "Kejriwal", isTrue: false },
        { option: "Narendra Modi", isTrue: true }
    ]
},
    {
        id: 3,
        ques: "What is the capital of japan?",
        opt: [
            { option: "Tokyo", isTrue: true },
            { option: "Amsterdam", isTrue: false },
            { option: "Delhi", isTrue: false },
            { option: "Berlin", isTrue: false }
        ]
    },
    {
        id: 4,
        ques: "Which country won 2021 T20 World Cup ?",
        opt: [
            { option: " Pakistan", isTrue: false },
            { option: "India", isTrue: false },
            { option: "Delhi", isTrue: false },
            { option: "Australian", isTrue: true }
        ]
    },
    {
        id: 5,
        ques: "Who is the leading run scorer in T20 Format ?",
        opt: [
            { option: "Babar Azam", isTrue: false },
            { option: "Virat Kohli", isTrue: false },
            { option: "Rohit Sharma", isTrue: true },
            { option: "Steve Smith", isTrue: false }
        ]
    },
    {
        id: 6,
        ques: "Which Player has most wickets in Test Format ?",
        opt: [
            { option: "Anil Kumble", isTrue: false },
            { option: "James Anderson", isTrue: true },
            { option: "Stuart Broad", isTrue: false },
            { option: "Muthaiya Murlidharan", isTrue: false }
        ]
    },
    {
        id: 7,
        ques: "Which player is known as yorker king?",
        opt: [
            { option: "Bhuvneshwar kumar", isTrue: false },
            { option: "Jasprit Bumrah", isTrue: true },
            { option: "Lasith Malinga", isTrue: false },
            { option: "Trent Bolt", isTrue: false }
        ]
    },
    {
        id: 8,
        ques: "Which Player holds the record of highest score in an odi innings ?",
        opt: [
            { option: "Brendon Macculum", isTrue: false },
            { option: "Chris Gayle", isTrue: false },
            { option: "Rohit Sharma", isTrue: true },
            { option: "Virat Kohli", isTrue: false }
        ]
    }


]
var start = true;
let score = 0;
function iteration(id) {
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById('question');
    question.innerText = Questions[id].ques;

    //Targetting Options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    //provding values to options

    op1.innerText = Questions[id].opt[0].option;
    op2.innerText = Questions[id].opt[1].option;
    op3.innerText = Questions[id].opt[2].option;
    op4.innerText = Questions[id].opt[3].option;


    //providing true or false value to the options
    op1.value = Questions[id].opt[0].isTrue;
    op2.value = Questions[id].opt[1].isTrue;
    op3.value = Questions[id].opt[2].isTrue;
    op4.value = Questions[id].opt[3].isTrue;

    //listening for user selection 
    var selected = "";

    // listening for opt1
    op1.addEventListener('click', () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    op2.addEventListener('click', () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    op3.addEventListener('click', () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    op4.addEventListener('click', () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    //Targetting  to evaluate button

    const evaluate = document.getElementsByClassName("evaluate");

    evaluate[0].addEventListener('click', () => {
        if (selected == "true") {
            result[0].innerHTML = "Correct Answer";
            result[0].style.backgroundColor = "yellow";
            score++;

        } else if (selected == '') {
            result[0].innerHTML = "Choose an option ";
            result[0].style.backgroundColor = "lightblue";
        }
        else {
            result[0].innerHTML = "Sorry Wrong Answer";
            result[0].style.backgroundColor = "#f43d3d";
        }
    })
}

if (start) {
    iteration("0");
}

//targetting Next button 
const next = document.getElementsByClassName('next')[0];
var id = 0;

//adding method to next Button

next.addEventListener('click', () => {
    start = false;
    if (id < 8) {
        id++;
        iteration(id);
        console.log(id);
    }
})



