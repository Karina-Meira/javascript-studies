function countNegative(array) {
  let negative = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negative += 1;
    }
  }

  return negative;
}

console.log(countNegative([1, -2, 3, -4, 5]));
console.log(countNegative([-1, -2, -3]));
console.log(countNegative([1, 2, 3]));
console.log(countNegative([0, -1, 2]));
console.log(countNegative([]));
