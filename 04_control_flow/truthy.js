const userEmail = []
// const userEmail = "bubun@gmail.com"

if(userEmail) {
    console.log("Got tuser email");
} else {
    console.log("Don't have user email");
    
}

// falsyvalues

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length=== 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}