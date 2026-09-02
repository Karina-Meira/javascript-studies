function reverseArray(array) {
  const reverse = [];
  // The for loop starts at array.length - 1 because I want to start at the last element of the array
  // To go through each element in reverse order, I use i-- to decrease the index by one after each iteration
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }

  return reverse;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([10, 20]));
console.log(reverseArray([]));
