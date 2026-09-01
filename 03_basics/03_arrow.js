const user = {
    username: "Bubun",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`);     
    }

}

// user.welcomeMessage()

// function suva(){
//     let username = "Bubun"
//     console.log(this);
    
// }

// suva()

// const chai = () => {
//     let username = "Bubun"
//     console.log(this);  
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  
// }
const addTwo = (num1, num2) =>  num1 + num2 

console.log(addTwo(3, 4));

