const medications = [

    {
        drugName: "Diazepam",
        salePrice: 578.73,
        retailPrice: 618.95
    },

    {
        drugName: "Migergot",
        salePrice: 2708.84,
        retailPrice: 2864
    },

    {
        drugName: "Silver Sulfadiazine Cream",
        salePrice: 16.95,
        retailPrice: 20.27
    },

    {
        drugName: "Palforzia",
        salePrice: 959.64,
        retailPrice: 786.44
    },

    {
        drugName: "Depo-estradiol",
        salePrice: 245.66,
        retailPrice: 266.97
    },

    {
        drugName: "Oxycodone APAP",
        salePrice: 222.82,
        retailPrice: 215.05
    },

    {
        drugName: "RoxyBond",
        salePrice: 1539.13,
        retailPrice: 1855.31
    },

    {
        drugName: "Lorazepam",
        salePrice: 31.55,
        retailPrice: 56.32
    }
];

const startButton = document.getElementById('startButton'); //Gets the value of the start button

startButton.addEventListener('click', startQuiz); //Adds the click event to the start button

function startQuiz(){
    
    var meds = document.getElementsByClassName('medications');
    var instructionSection = document.getElementsByClassName('instructions');
    for(var i = 0; i < meds.length; i++){
        // meds.forEach(element => {
            meds[i].style.display = 'block';
            instructionSection.style.display = 'none';
        // });
    }
}

const submitButton = document.getElementById('submit'); //Gets the value of the submit button

submitButton.addEventListener('click', calculate); //Adds the click event to the submit button

function calculate(){
    let input1, input2, result1, result2, salePrice, retailPrice;

    salePrice = document.getElementById('salePrice').value;
    retailPrice = document.getElementById('retailPrice').value;

    input1 = document.getElementById('input1').value; //This is the value of the user's guess for the sale price
    input2 = document.getElementById('input2').value; //This is the value of the user's guess for the average retail price

    result1 = parseInt(salePrice) - parseInt(input1); //This subtracts the user's guess from the original sale price
    result2 = parseInt(retailPrice) - parseInt(input2); //This substracts the user's guess from the original retail price

    document.getElementById('result1').value = result1; //Gets the value of result1
    document.getElementById('result2').value = result2; //Gets the value of result2
}