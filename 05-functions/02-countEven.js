//function to return how much even numbers have in that array
function countEven(array) {
  let evens = 0; //count number evens
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens += 1; //increase number even
    }
  }
  return evens; // return the quantity of even numbers
}

console.log(countEven([1, 2, 3, 4, 5, 6]));
console.log(countEven([10, 15, 22, 7, 8]));
console.log(countEven([1, 3, 5, 7]));