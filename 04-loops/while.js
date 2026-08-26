/*
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}






let count = 2

while (count <= 10) {
    console.log(count)
    count += 2
}



const numbers = [5, 12, 8, 20, 3, 15];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
  i++;
}


const numbers = [5, 8, 12, 20, 25, 30];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === 20) {
    break;
  } 

  console.log(numbers[i]);
  i++;
}



const numbers = [5, 8, 12, 20, 25, 30];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === 20) {
    i++;
    continue;
  }

  console.log(numbers[i]);
  i++;
}



const numbers = [3, 7, 10, 15, 20, 25];
const evenNumbers = [];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }

  i++;
}

console.log(evenNumbers);



const numbers = [3, 7, 10, 15, 20, 25];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] % 2 === 0) {
    numbers[i] *= 2;
  }
  
  i++;
}

console.log(numbers)



const numbers = [4, 7, 12, 18, 3, 20, 25, 30];
const doubleNumbers = [];
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === 20) {
    break;
  }

  if (numbers[i] > 10) {
    doubleNumbers.push((numbers[i] *= 2));
  }

  i++;
}

console.log(doubleNumbers);


const numbers = [3, 15, 8, 22, 7, 30, 11, 5];
let i = 0;

while (i < numbers.length) {

  let numBiggerThan = 0;

  if (numbers[i] > 20) {
    numBiggerThan = numbers[i];
    console.log(numBiggerThan);
    break;
  }

  i++;
}
  */

const numbers = [3, 15, 8, 22, 7, 30, 11, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 20) {
    console.log(numbers[i]);
    break;
  }
}
