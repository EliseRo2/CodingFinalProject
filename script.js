//This is the Javascript file

const medications = [ //This is the array that holds the specific question and information for each medication

    {
        question: "Diazepam is often used to treat conditions like anxiety, seizures, alcohol withdrawal syndrome, and muscles spasms. It is the generic form of the drug Valium. How much is a 5mg/mL dose of Diazepam oral concentrate?",
        salePrice: 578.73,
        retailPrice: 618.95
    },

    {
        question: "Migergot is a brand name prescription suppository used to treat migraines. How much is a 12-pack of 2mg/100mg Migergot prescription?",
        salePrice: 2708.84,
        retailPrice: 2864
    },

    {
        question: "Silver sulfadiazine cream is used to treat or prevent infections in burn wounds. How much is a 50g tube of Silver Sulfadiazine 1% cream?",
        salePrice: 16.95,
        retailPrice: 20.27
    },

    {
        question: "Palforzia is a brand name medication used to reduce the severity of allergic reactions to peanut allergies. How much is a prescription for a 6mg capsule of palforzia?",
        salePrice: 959.64,
        retailPrice: 786.44
    },

    {
        question: "Depo-estradiol is a brand name medication prescribed in cases of estrogen replacement. It is also used to treat symptoms of menopause, osteoporosis, and cancer. How much is a prescription for a 5mg/mL vial injection of Depo-estradiol?",
        salePrice: 245.66,
        retailPrice: 266.97
    },

    {
        question: "Oxycodone APAP, also known as oxycodone and acetaminophen, is a combination medication prescribed to treat moderate to severe pain. How much is a prescription for 7.5mg-325mg pack of 100 tablets?",
        salePrice: 222.82,
        retailPrice: 215.05
    },

    {
        question: "RoxyBond is a brand name opioid medication used to treat constant, severe pain. How much is a prescription for a bottle of 100 5mg tablets?",
        salePrice: 1539.13,
        retailPrice: 1855.31
    },

    {
        question: "Lorazepam is used to treat anxiety disorders. It is the generic form of the drug Ativan. How much is a prescription for a 30mL bottle of 2mg/mL oral concentrate?",
        salePrice: 31.55,
        retailPrice: 56.32
    }
];

const startButton = document.getElementById('startButton'); //Gets the value of the start button
startButton.addEventListener('click', startQuiz); //Adds the click event to the start button

const questionContainer = document.getElementById('question-container'); //Gets the question container element

function startQuiz(){ //This function is called when the user clicks the start button
    
    var instructionSection = document.getElementsByClassName('instructions'); //Gets the instructionSection div from the HTML. Puts it into an array

    instructionSection[0].style.display = 'none'; //Removes the instructions
    questionContainer.style.display = 'block'; //Displays the div with the question, information and input boxes

}

const printMessage = document.getElementById('printMessage'); //Gets the print message element that displays the questions to the user
let currentQuestionIndex = 0; //Sets the current question to the first medication

var salePrice = medications[currentQuestionIndex].salePrice; //Gets the salePrice variable from the objects in the array
var retailPrice = medications[currentQuestionIndex].retailPrice; //Gets the retailPrice variable from the objects in the array

const submitButton = document.getElementById('submit'); //Gets the value of the submit button

const endMessage = document.getElementById('endMessage'); //Gets the end message element that displays the final text once the quiz is complete
const endContainer = document.getElementById('end-container'); //Gets the end container div from the HTML

function readQuestions(){ //This function displays the questions for the user

    if(currentQuestionIndex < medications.length) {
        
        printMessage.innerText = medications[currentQuestionIndex].question; //This should display the correct question that matches the index number of the medications array.
        printMessage.style.color = '#0d3b66';
        printMessage.style.fontWeight = 'bold';
        printMessage.style.verticalAlign = 'top'; //Displays the print message(question) above the user input boxes
    }
    else {

        endMessage.innerText = "You have completed the quiz. Thank you for participating in this educational game! To play again, refresh the page."; //This should display the thank you at the end
        endMessage.style.color = '#0d3b66';
        endMessage.style.fontWeight = 'bold';
        endContainer.style.display = 'block';
        questionContainer.style.display = 'none';
    }
}

const resultMessage = document.getElementById('resultMessage'); //This is the message that will print once the calculations have been done and the user hits the submit button

submitButton.addEventListener('click', calculate); //Adds the click event to the submit button

const nextButton = document.getElementById('next'); //Gets the Next button element from the HTML

function calculate(){ //This function should be called when the user clicks the submit button

    var userInput1 = parseFloat(document.getElementById('userInput1').value); //This is the value of the user's guess for the sale price. Taken from the HTML
    var userInput2 = parseFloat(document.getElementById('userInput2').value); //This is the value of the user's guess for the average retail price. Taken from the HTML

    if(userInput1 < medications[currentQuestionIndex].salePrice && userInput2 < medications[currentQuestionIndex].retailPrice){ //Both guesses are lower than the actual amount

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is <span style='color:red'>lower</span> than the actual price. The manufacturer sells this medication for <span style='color:red'>$" + medications[currentQuestionIndex].salePrice + '</span>. Your guess for the customer price is also <span style="color:red">lower</span> than the actual price. The average retail price of this medication is <span style="color:red">$' + medications[currentQuestionIndex].retailPrice + "</span>."

    }
    else if(userInput1 < medications[currentQuestionIndex].salePrice && userInput2 > medications[currentQuestionIndex].retailPrice){ //The WAC guess is lower while the retail guess is higher

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is <span style='color:red'>lower</span> than the actual price. The manufacturer sells this medication for <span style='color:red'>$" + medications[currentQuestionIndex].salePrice + '</span>. Your guess for the customer price is <span style="color:blue">higher</span> than the actual price. The average retail price of this medication is <span style="color:blue">$' + medications[currentQuestionIndex].retailPrice + "</span>."
    }
    else if(userInput1 > medications[currentQuestionIndex].salePrice && userInput2 < medications[currentQuestionIndex].retailPrice){ //The WAC guess is higher while the retail guess is lower

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is <span style='color:blue'>higher</span> than the actual price. The manufacturer sells this medication for <span style='color:blue'>$" + medications[currentQuestionIndex].salePrice + '</span>. Your guess for the customer price is <span style="color:red">lower</span> than the actual price. The average retail price of this medication is <span style="color:red">$' + medications[currentQuestionIndex].retailPrice + "</span>."
    }
    else if(userInput1 > medications[currentQuestionIndex].salePrice && userInput2 > medications[currentQuestionIndex].retailPrice){ //Both guesses are higher than the actual amount

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is <span style='color:blue'>higher</span> than the actual price. The manufacturer sells this medication for <span style='color:blue'>$" + medications[currentQuestionIndex].salePrice + '</span>. Your guess for the customer price is also <span style="color:blue">higher</span> than the actual price. The average retail price of this medication is <span style="color:blue">$' + medications[currentQuestionIndex].retailPrice + "</span>."
    }

    nextButton.style.display = 'block';
    resultMessage.style.display = 'block'; //This should display both buttons when the result message is displayed

}

nextButton.addEventListener('click', nextQuestion); //Adds the click function to the next button

function nextQuestion(){ //This function is called when the user clicks the next button

    document.getElementById('userInput1').value = ''; 
    document.getElementById('userInput2').value = ''; //These statements should reset both of the user input values for each question

    currentQuestionIndex++;
    readQuestions();

    nextButton.style.display = 'none';
    resultMessage.style.display = 'none'; //These statements should remove the next button and the result message when each new question is displayed
}

readQuestions();