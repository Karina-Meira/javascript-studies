// The function returns a new array containing the elements from both arrays
function mergeArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    result.push(array2[i]);
  }

  return result;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));
console.log(mergeArrays([1, 2], []));
console.log(mergeArrays([], [3, 4]));
console.log(mergeArrays([], []));


