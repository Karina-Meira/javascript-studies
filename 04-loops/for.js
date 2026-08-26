/*

for (let i = 2; i <=10; i += 2) {
    console.log(i)
}


const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`In the position ${i} have the fruit ${fruits[i]}`)
}


const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "orange") {
        console.log("Orange found!")
    } 
}



const numbers = [5, 12, 8, 20, 3, 15];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i])
  }
}



const numbers = [5, 12, 8, 20, 3, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(`${numbers[i]} is greater than 10`)
    }
}


const numbers = [5, 12, 8, 20, 3, 15];
let count = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        count++
    }   
}

console.log(count)


const numbers = [5, 12, 8, 20, 3, 15];
let sum = 0


for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 10) {
        sum += numbers[i] 
        console.log(`Add ${numbers[i]}`) 
    } 
}

console.log(`Total = ${sum}`)



const numbers = [5, 12, 8, 20, 3, 15];
let biggest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
}

console.log(biggest);



const numbers = [5, 12, 8, 20, 3, 15];
let smallest = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i]
    }
}

console.log(smallest)



const numbers = [5, 12, 8, 20, 3, 15];
let biggestThenTen = 0;
let sumBiggestThenTen = 0;
let biggestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    biggestThenTen++;
    sumBiggestThenTen += numbers[i];
  } 
   
  if (numbers[i] > biggestNumber) {
    biggestNumber = numbers[i];
  }
}

console.log(`Qauntidade de números maiores que 10: ${biggestThenTen}`);
console.log(`Soma dos números maiores que 10: ${sumBiggestThenTen}`);
console.log(`Maior número: ${biggestNumber}`);

--------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}

console.log(numbers);

----------------------------------------------------------------------------


const numbers = [3, 7, 10, 15, 20];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}

console.log(numbers);

----------------------------------------------------------------------------


const numbers = [3, 8, 12, 5, 20, 7];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        numbers[i] *= 2
    }
}

console.log(numbers)

----------------------------------------------------------------------------


const names = ["karina", "pamela", "angus", "javascript"];

for (let i = 0; i < names.length; i++) {
  names[i] = names[i].toUpperCase();
}

console.log(names);


----------------------------------------------------------------------------


["  karina  ", " pamela", "angus ", " javascript "]

for (let i = 0; i < names.length; i++) {
  names[i] = names[i].trim().toUpperCase();
}

console.log(names);

-----------------------------------------------------------------


const numbers = [1, 2, 3, 4];
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log(numbers);
console.log(doubleNumbers);

-----------------------------------------------------------------


const numbers = [5, 12, 8, 20, 3, 15];
const numbersAboveTen = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    numbersAboveTen.push(numbers[i]);
  }
}

console.log(numbers);
console.log(numbersAboveTen);

--------------------------------------------------------------------


const names = ["Karina", "Pamela", "Angus", "JavaScript", "Ana"];
const longNames = [];

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 4) {
    longNames.push(names[i]);
  }
}

console.log(names);
console.log(longNames);

--------------------------------------------------------------------------


const names = ["Karina", "Pamela", "Angus", "JavaScript", "Ana"];

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

----------------------------------------------------------------------------


const numbers = [10, 20, 30, 40, 50];

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] > 20) {
    console.log(numbers[i]);
  }
}

-----------------------------------------------------------------


const numbers = [5, 8, 12, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 20) {
    break;
  }

  console.log(numbers[i]);
}

-------------------------------------------------------


const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    continue;
  }

  console.log(numbers[i]);
}

---------------------------------------------------------------

*/

const numbers = [5, 12, 8, 20, 3, 15, 7, 30];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    if (numbers[i] === 20) {
      continue;
    }
    console.log(numbers[i]);
  }
}
