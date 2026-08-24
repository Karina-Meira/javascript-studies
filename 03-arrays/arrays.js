/*
const fruits = ["apple", "banana", "orange", "grape"];

console.log(fruits.length); //4
console.log(fruits[0]); // apple
console.log(fruits[2]); // orange
console.log(fruits[3]); // grape
console.log(fruits[4]); // undefined

-----------------------------------------------------------------------------------

const fruits = ["apple", "banana", "orange"];

fruits[1] = "grapes";
fruits = ["kiwi", "mango"]

console.log(fruits); // ["apple", "grapes", "orange"]

-----------------------------------------------------------------------

const fruits = ["apple", "banana"];

fruits.push("orange")
fruits.push("grape")
fruits.push("kiwi", "mango")

console.log(fruits) //[ 'apple', 'banana', 'orange', 'grape', 'kiwi', 'grape']
console.log(fruits.length) //6

------------------------------------------------------------------------------

const fruits = ["apple", "banana", "orange", "grape"];

const removedFruit = fruits.pop();

console.log(fruits); // [ 'apple', 'banana', 'orange' ]
console.log(removedFruit); // grape
console.log(fruits.length); // 3


---------------------------------------------------------------------------

const fruits = [];

const removedFruit = fruits.pop();

console.log(removedFruit);


---------------------------------------------------------------------------

const fruits = ["banana", "orange", "grape"];

fruits.unshift("apple");
const removedFruit = fruits.shift();

console.log(removedFruit); // apple
console.log(fruits); // [ 'banana', 'orange', 'grape' ]


------------------------------------------------------------------------------------


const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

fruits.splice(2, 1)
const removedFruit = fruits.splice(1, 2);

console.log(fruits) //[ 'apple', 'kiwi' ]
console.log(removedFruit) // [ 'banana', 'grape' ]


-------------------------------------------------------------------------------

const fruits = ["apple", "banana", "orange", "grape"];

console.log(fruits.includes("banana")) //true
console.log(fruits.includes("kiwi")) //false

if (fruits.includes("orange")) {
    console.log("Orange is available.") //<--
} else {
    console.log("Orange is not available.")
}


---------------------------------------------------------------------------------

const fruits = ["apple", "banana", "orange", "grape"];

console.log(fruits.indexOf("orange")); // 2
console.log(fruits.indexOf("kiwi")) //-1 (significa que o elemento não foi encontrado)

-------------------------------------------------------------------------------------------
*/

const fruits = ["apple", "banana", "orange", "grape"];
const index = fruits.indexOf("apple")
const fruit = fruits[index]

console.log(fruits.indexOf("apple")) //0
console.log(fruits.indexOf("grape")) //3
console.log(fruits.indexOf("kiwi")) //-1

if (fruits.indexOf(fruit) !== -1) {
    (console.log(`${fruit} found at index ${index}`))
} 