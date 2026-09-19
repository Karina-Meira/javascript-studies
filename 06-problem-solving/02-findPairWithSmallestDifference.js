//the function returns an array with the pair that has the smallest difference between two numbers
function findPairWithSmallestDifference(array) {
    // if there are two or more numbers in the array
  if (array.length < 2) {
    return null;
  }

  let smaller = Math.abs(array[0] - array[1]);
  let pair = [array[0], array[1]];

  // takes one element and forms a pair with all the other numbers
  // It subtracts the numbers in every pair to find the difference between them
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const difference = Math.abs(array[i] - array[j]);
      
      // If the difference is smaller than the smaller variable, I store the new difference in smaller and store the elements that were subtracted in pair.
      if (difference < smaller) {
        smaller = difference;
        pair = [array[i], array[j]];
      }
    }
  }

  return pair;
}

console.log(findPairWithSmallestDifference([1, 8, 4, 10]));
console.log(findPairWithSmallestDifference([]))
console.log(findPairWithSmallestDifference([10]))
console.log(findPairWithSmallestDifference([-3, -8, 10]))
console.log(findPairWithSmallestDifference([10, 3, 7, 15]))
console.log(findPairWithSmallestDifference([4, 10, 4, 20]))
console.log(findPairWithSmallestDifference([8, 20]))
