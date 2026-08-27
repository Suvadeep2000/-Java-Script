// Object  literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Suvadeep",
    "full name": "Suvadeep Giri",
    [mySym]: "mykey1",
    age: 26,
    location: "Kalyani",
    email: "giri@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "bubun@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "fvsbhb@njrkejngj"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello bhai!!");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello bhai!! Kelabo toke!! ${this["name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
