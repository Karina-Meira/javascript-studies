// approach 1: find the gap 
function findMissingNumber(array) {
  // check if the first number is not equal to 1. If it is, the missing number is 1
    if (array[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < array.length - 1; i++) {
    // check if there is a gap in the array. If there is a gap, the missing number is the current element plus 1
    if (array[i] + 1 !== array[i + 1]) {
      return array[i] + 1;
    }
  }
  // if none of the previous checks were true, the missing number is the last element plus 1
  return array[array.length - 1] + 1;
}

console.log(findMissingNumber([1, 2, 3, 4, 5]));
console.log(findMissingNumber([2, 3, 4, 5]));
console.log(findMissingNumber([1, 2, 3, 5, 6]));
console.log(findMissingNumber([]));


// one more way to solve this problem

// approach 2: Expected sum
function findMissingNumber(array) {
    const n = array.length + 1
    // calculate the sum that the sequence should have using a mathematical formula
    const expectedSum = n * (n + 1) / 2

    let actualSum = 0

    // calculate the sum of the actual array
    for (let i = 0; i < array.length; i++) {
        actualSum += array[i]
    }

    // eturn the difference between the expected sum and the actual sum
    return expectedSum - actualSum
}

console.log(findMissingNumber([2, 3, 4, 5]))
console.log(findMissingNumber([1, 2, 4, 5, 6]))
console.log(findMissingNumber([1, 2, 3, 4, 5]))
console.log(findMissingNumber([3, 2, 5, 6, 1]))