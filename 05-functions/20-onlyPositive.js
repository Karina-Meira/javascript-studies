// The function returns only the positive numbers in an array
function onlyPositive(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(onlyPositive([1, -2, 3, -4, 5]));
console.log(onlyPositive([-1, -2, -3]));
console.log(onlyPositive([1, 2, 3]));
console.log(onlyPositive([0, -1, 2]));
console.log(onlyPositive([]));
