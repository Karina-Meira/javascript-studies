function findPairWithSmallestDifference(array) {
  if (array.length < 2) {
    return null;
  }

  let smaller = Math.abs(array[0] - array[1]);
  let pair = [array[0], array[1]];

  for (let i = 1; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const difference = Math.abs(array[i] - array[j]);
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
