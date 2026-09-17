// The function returns an array with a pair whose difference equals the given difference
function findPairWithDifference(array, difference) {
  for (let i = 0; i < array.length; i++) {
    // I add the current element to the difference to discover which number needs to be found
    const result = array[i] + difference;
    const index = array.indexOf(result);

    // I check if this number exists in the array. If I don't find it, I jump to the next element
    if (index === -1) {
      continue;
    }

    // I verify if it is a different element and not the same element
    if (index !== i) {
      return [array[i], result];
    }
  }

  // if the loop ends without finding the numbers, the function returns null
  return null;
}

console.log(findPairWithDifference([1, 5, 9, 12], 4));
console.log(findPairWithDifference([10, 3, 7, 15], 8));
console.log(findPairWithDifference([2, 8, 4, 10], 6));
console.log(findPairWithDifference([1, 2, 3], 10));
console.log(findPairWithDifference([2, 7, 9, 1, 3], 8));
console.log(findPairWithDifference([2, 8, 1, 1], 9));
console.log(findPairWithDifference([-1, 7, -2, 0], 0));
console.log(findPairWithDifference([4, 8, 4, 12], 0));
