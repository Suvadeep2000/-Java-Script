let a = 300
if(true){
    let a = 30
    const b = 20
    console.log("Inner:", a);
}

console.log(a);


function one(){
    const username2 = "Bubun"

    function two(){
        const website = "Youtube"
        console.log(username2);
    }
    // console.log(website);
    
    two()

}

// one()

if (true){
    const username3 = "Bubun"
    if (username3 === "Bubun") {
        const website = " youtube"
        console.log(username3 + website);
    }
}

// console.log(username3);
