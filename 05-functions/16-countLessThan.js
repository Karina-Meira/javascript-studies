function countLessThan(array, value) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < value) {
      count++;
    }
  }
  return count;
}

console.log(countLessThan([1, 5, 8, 2, 10], 5));
console.log(countLessThan([10, 20, 30], 15));
console.log(countLessThan([1, 2, 3], 10));
console.log(countLessThan([-5, -2, 0, 3], -3));
console.log(countLessThan([], 5));
