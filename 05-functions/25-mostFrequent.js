// The function returns the most frequent element in an array
function mostFrequent(array) {
  // store an object with each element and its frequency
  const result = {};
  let frequent = 0; // highest frequency found so far
  let element = null; // most frequent element

  for (let i = 0; i < array.length; i++) {
    if (!(array[i] in result)) {
      result[array[i]] = 1;
    } else {
      result[array[i]] += 1;
    }

    if (result[array[i]] > frequent) {
      frequent = result[array[i]];
      element = array[i];
    }
  }

  return element;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3]));
console.log(mostFrequent(["a", "b", "a", "c", "a"]));
console.log(mostFrequent(["banana", "apple", "banana", "orange"]));
console.log(mostFrequent([]));
