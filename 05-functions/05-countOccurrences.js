// function to count the number of occurrences in an array
function countOccurrences(array, value) {
  let i = 0; // index counter
  let occurrences = 0; // count how many times the array contains a number equal to value

  while (i < array.length) {
    if (array[i] === value) { // checks if the value at the current index is equal to value
      occurrences++; // very time a match occurs, occurrences increases by 1
    }
    i++;
  }

  return occurrences; // returns the number of times value appears in the array
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));
console.log(countOccurrences([5, 5, 5, 2, 1], 5));
console.log(countOccurrences([1, 2, 3, 4], 7));
console.log(countOccurrences([], 5));
