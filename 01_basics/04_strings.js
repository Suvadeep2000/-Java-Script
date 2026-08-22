const name = "Bubun"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Bubun-Suvadeep')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));


const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-10, 8)
console.log(anotherString);

const newStringOne = "    Suvadeep         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://solid-space-bassoon-4jvgjg46x74x37554%20.github.dev/"

console.log(url.replace('%20', '-'))

console.log(url.includes("solid"));

