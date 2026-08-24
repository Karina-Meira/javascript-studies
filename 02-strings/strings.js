/*
const message = "JavaScript is amazing";

console.log(message.length); //21
console.log(message.toUpperCase()); //JAVASCRIPT IS AMAZING
console.log(message.toLowerCase()); //javascript is amazing
console.log(message.toUpperCase().length); //21
console.log(message.includes("JavaScript")) //true

-------------------------------------------------------------------------

const rawName = "   Karina Meira   ";

console.log(rawName.length) //18
console.log(rawName.trim()) //Karina Meira
console.log(rawName.trim().toUpperCase()) //KARINA MEIRA
console.log(rawName.trim().toLowerCase()) //karina meira
console.log(rawName.trim().includes("Meira")) //true

--------------------------------------------------------------------------------

const word = "JavaScript";

console.log(word.slice(0, 4)) //Java
console.log(word.slice(4,10)) //Script
console.log(word.slice(4)); //Script

------------------------------------------------------------------------------

const fullName = "   Cristiano Ronaldo   ";
const removeSpaces = fullName.trim()
const findIndex = removeSpaces.indexOf(" ")
const firstName = removeSpaces.slice(0, findIndex)

console.log(firstName.toUpperCase())

--------------------------------------------------------------------------------------
*/

const fullName = "Karina Meira";
const nameParts = fullName.split(" ");

console.log(nameParts); //[ 'Karina', 'Meira' ]
console.log(nameParts[0]); // Karina
console.log(nameParts[1]); // Meira
console.log(nameParts[0].toUpperCase()); // KARINA




