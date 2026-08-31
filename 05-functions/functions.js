/*
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));


//function to return how much even numbers have in that array
function countEven(array) {
  let evens = 0; //count number evens
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens += 1; //increase number even
    }
  }
  return evens; // return the quantity of even numbers
}

console.log(countEven([1, 2, 3, 4, 5, 6]));
console.log(countEven([10, 15, 22, 7, 8]));
console.log(countEven([1, 3, 5, 7]));



// One more option to resolve the problem
function secondMax(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  let indice = array.indexOf(max);
  array.splice(indice, 1);

  let secMax = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > secMax) {
      secMax = array[i];
    }
  }

  return secMax;
}

*/

//function to find the max number in a array
function findMax(array) {
  let max = array[0]; //first value used as the initial maximum
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      //compare the current number with the maximum found so far
      max = array[i]; //store the compartion
    }
  }
  return max; // return the biggest number
}



// function to find the second bigger number
function secondMax(array) {
  let max = findMax(array); // reuse the function to find the maximun

  let secMax = null; 

  for (let i = 0; i < array.length; i++) {
    if (array[i] === max) { // ignore numbers iqual the max and stop the block
      continue;
    } else if (secMax === null) { 
      secMax = array[i]; // store the first valid candidate
    } else if (array[i] > secMax) { // //compare the current number with the maximum found so far
      secMax = array[i];  // store the comparation
    }
  }
  return secMax; // return the result
}

console.log(secondMax([10, 10, 10]));
console.log(secondMax([10]));
console.log(secondMax([]));
