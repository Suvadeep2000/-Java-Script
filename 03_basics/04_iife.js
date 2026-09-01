// Immediately Invoked Function Expressions (IIFE)


(function coffee(){
    console.log(`DB CONNECTED`);
    
})();

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
})("Bubun");