function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("V");
    console.log("A");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(3, 4)


function addTwoNumbers(number1, number2){
    // let result = (number1 + number2);
    // return result
    return number1 + number2
}

result = addTwoNumbers(3, 4)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username:");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Suvadeep"));
