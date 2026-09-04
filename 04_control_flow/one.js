//if

const isUsetLoggedIn = true

if(2 != 3){
    console.log("executed");
    
}

const balance = 1000

// if (balance > 500) console.log("test");

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 =null ?? 10 ?? 20



console.log(val1)


//  Terniary Operator


//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80") : console.log("more than 80");

