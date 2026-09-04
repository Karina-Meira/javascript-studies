function countPositive(array) {
  // variable that starts at 0 because I haven't found any positive numbers yet  
  let positive = 0;

  // for loop to go through all the elements of the array
  for (let i = 0; i < array.length; i++) {
    // check if the current number is positive
    if (array[i] > 0) {
      // increase the positive variable by 1
      positive += 1; 
    }
  }

  return positive;
}

console.log(countPositive([1, -2, 3, -4, 5]));
console.log(countPositive([-1, -2, -3]));
console.log(countPositive([1, 2, 3]));
console.log(countPositive([0, -1, 2]));
console.log(countPositive([]));
