// Assignment Code
var passwordBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");
var lengthEl = document.querySelector("#length");
var numberEl = document.querySelector("#number");
var lowerEl = document.querySelector("#lower");
var upperEl = document.querySelector("#upper");
var symbolEl = document.querySelector("#symbol");
var copyEl = document.querySelector("#copy");



function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
 function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
 function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

const randomFunc = {
    upper : getRandomUpperCase,
    lower : getRandomLowerCase,
    number : getRandomNumber,
    symbol : getRandomSymbol
};



function generatePassword(upper, lower, number, symbol, length){
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    //console.log(typesCount);

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
}

passwordBtn.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

passwordText.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

// function handlePrompts() {
//     let length = prompt("How long do you want your password to be? Please choose a number between 8 and 128")
//     // need to also validate that input is numerical, can't be letters 
//     let isValidNumber = /^\d*$/.test(length)
//     if(!isValidNumber) {
//         alert("Please input a valid number.")
//         return
//     }
//     if(length < 8 || length > 128) {
//         alert("Please choose a valid length.")
//         return
//     } 

//     let hasUpper = confirm("Would you like your password to contain uppercase letters?")
//     let hasLower = confirm("Would you like your password to contain lowercase letters?")
//     let hasNumber = confirm("Would like your password to contain numbers?")
//     let hasSymbols = confirm("Would you like your password to contain symbols?")
    
//     console.log("length", length, "hasUpper?", hasUpper, "hasLower?", hasLower, "hasNumber?", hasNumber, "hasSymbols?", hasSymbols);
 
//     passwordText.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbols, length);
// }




// function sayHello() {
//     console.log('hel fucking lo')
// }

// Add event listener to generate button
passwordBtn.addEventListener("click", handlePrompts);
