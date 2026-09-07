// The function returns the number of elements that are greater than value
function countGreaterThan(array, value) {
  let count = 0;
  
  // the for loop goes through the array and checks if the current element is greater than value
  for (let i = 0; i < array.length; i++) {
    // If it is true, I increase the count variable by 1
    if (array[i] > value) {
      count += 1;
    }
  }
  return count;
}

console.log(countGreaterThan([1, 5, 8, 2, 10], 5));
console.log(countGreaterThan([10, 20, 30], 15));
console.log(countGreaterThan([1, 2, 3], 10));
console.log(countGreaterThan([-5, -2, 0, 3], -3));
console.log(countGreaterThan([], 5));
