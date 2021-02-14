let userInput = +prompt(" \n Enter a number");
let isEven = false;

function evenNum(userInput){
    if (userInput % 2 === 0){
        isEven = true;

    }
    return isEven;
}
// console.log(evenNum(userInput));
document.write(evenNum(userInput));