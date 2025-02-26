console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

let character;

let character = "Hello";

let character = 'Hello';
console.log(character);
character = 'World';
console.log(character);
let secondCharacter;
console.log(secondCharacter);
secondCharacter = "Test"
console.log(secondCharacter);

secondCharacter = character;
console.log(secondCharacter);

let profession = "teacher";
let age;
console.log(profession)
console.log(age)

let count = 8;
console.log(count+1);

let rows = [];
let rows = ["Naomi","Quincy","CamperChan"];
console.log(rows[0]);

rows[2]=10;
console.log(rows);
rows[rows.length-1];

let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

Next:
"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-introductory-javascript-by-building-a-pyramid-generator"


let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp")
console.log(rows);

let popped = rows.pop();
console.log(popped);

let pushed = rows.push("freeCodeCamp");
console.log(pushed);    

const character = "Hello";
const count = 8;
const rows = [];

const character = "#";

for ("iterator"; "condition"; "iteration") {
}

for (let i = 0; i < count; i = i + 1) {
    console.log(i)
}

for (const row of rows) {
    rows.push(character.repeat(i));
}


const call = padRow();
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);


function padRow() {
    return "Hello!";
  }

function padRow(name) {
    return name;
}

function addTwoNumbers(a,b){
    return a+b;
  }
  let sum = addTwoNumbers(5,10);
  console.log(sum);

  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
  }

  for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
  }
let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);