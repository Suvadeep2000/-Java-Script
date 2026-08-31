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


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 300, 400, 1000));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 1000));


const user = {
    username1 : "Suvadeep",
    price : 199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username1} and price is ${anyobject.price}`);
    
}

handelObject(user)

const myNewArray = [300,500, 600, 700]

function returnSecondArray(getArray){
    return getArray[1]
}

console.log(returnSecondArray(myNewArray))