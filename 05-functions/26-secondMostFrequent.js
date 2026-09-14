function secondMostFrequent(array) {
  const result = {};
  let most = 0;
  let frequency = null;
 
  // for loop to go through the array, count the frequency of each element, and find the most frequent element.
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] in result)) {
      result[array[i]] = 1;
    } else {
      result[array[i]] += 1;
    }

    if (result[array[i]] > most) {
      most = result[array[i]];
      frequency = array[i];
    }
  }

  let secondMost = null;
  let secondFrequency = null;

  // second for loop to go through the array again. First, I ignore the element that is already the most frequent. Then, I compare the frequencies of the other elements to find the highest remaining frequency.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === frequency) {
      continue;
    } else if (secondMost === null) {
      secondMost = array[i];
      secondFrequency = result[array[i]];
    } else if (result[array[i]] > secondFrequency) {
      secondMost = array[i];
      secondFrequency = result[array[i]];
    }
  }

  return secondMost;
}

console.log(secondMostFrequent([1, 2, 2, 3, 3, 3]));
console.log(secondMostFrequent(["a", "b", "a", "c", "b", "a"]));
console.log(secondMostFrequent([5, 5, 2, 2, 2, 5]));
console.log(secondMostFrequent([10]));
console.log(secondMostFrequent([]));
console.log(secondMostFrequent([1, 1, 2, 2, 3]));
