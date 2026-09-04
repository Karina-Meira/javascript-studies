function countZeros(array) {
  let zeros = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeros += 1;
    }
  }

  return zeros;
}

console.log(countZeros([1, 0, 2, 0, 3]));
console.log(countZeros([0, 0, 0]));
console.log(countZeros([1, 2, 3]));
console.log(countZeros([-1, 0, 2]));
console.log(countZeros([]));
