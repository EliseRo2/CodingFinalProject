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
    
    var meds = document.getElementsByClassName('medications');
    var instructionSection = document.getElementsByClassName('instructions');

    instructionSection[0].style.display = 'none'; //Removes the instructions
    questionContainer.style.display = 'block'; //Displays the div with the question, information and input boxes

}

const printMessage = document.getElementById('printMessage'); //Gets the print message element that displays the questions to the user
let currentQuestionIndex = 0; //Sets the current question to the first medication
//let userInput1, userInput2;

var userInput1 = document.getElementById('userInput1'); //This is the value of the user's guess for the sale price
var userInput2 = document.getElementById('userInput2'); //This is the value of the user's guess for the average retail price

const submitButton = document.getElementById('submit'); //Gets the value of the submit button

function readQuestions(){ //This function displays the questions for the user

    if(currentQuestionIndex < medications.length) {
        
        printMessage.innerText = medications[currentQuestionIndex].question; //This should display the correct question that matches the index number of the medications array.
        printMessage.style.color = '#0d3b66';
        printMessage.style.fontWeight = 'bold';
        printMessage.style.verticalAlign = 'top';
    }
    else {

        printMessage.innerText = "";
    }
}

const resultMessage = document.getElementById('resultMessage'); //This is the message that will print once the calculations have been done and the user hits the submit button

submitButton.addEventListener('click', calculate); //Adds the click event to the submit button

function calculate(){ //This function should be called when the user clicks the submit button
    //let salePrice, retailPrice;

    var salePrice = document.getElementById('salePrice');
    var retailPrice = document.getElementById('retailPrice');

    if(userInput1 < salePrice && userInput2 < retailPrice){

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is lower than the actual price. The manufacturer sells this medication for $" + medications[currentQuestionIndex].salePrice + '. Your guess for the customer price is also lower than the actual price. The average retail price of this medication is $' + medications[currentQuestionIndex].retailPrice + "."

    }
    else if(userInput1 < salePrice && userInput2 > retailPrice){

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is lower than the actual price. The manufacturer sells this medication for $" + medications[currentQuestionIndex].salePrice + '. Your guess for the customer price is higher than the actual price. The average retail price of this medication is $' + medications[currentQuestionIndex].retailPrice + "."
    }
    else if(userInput1 > salePrice && userInput2 < retailPrice){

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is higher than the actual price. The manufacturer sells this medication for $" + medications[currentQuestionIndex].salePrice + '. Your guess for the customer price is lower than the actual price. The average retail price of this medication is $' + medications[currentQuestionIndex].retailPrice + "."
    }
    else if(userInput1 > salePrice && userInput2 > retailPrice){

        resultMessage.innerHTML = "Your guess for the wholesale acquisition cost (WAC) is higher than the actual price. The manufacturer sells this medication for $" + medications[currentQuestionIndex].salePrice + '. Your guess for the customer price is also higher than the actual price. The average retail price of this medication is $' + medications[currentQuestionIndex].retailPrice + "."
    }

    currentQuestionIndex++;
    readQuestions();

}

readQuestions();