//function to find the max number in a array
function findMax(array) {
  let max = array[0]; //first value used as the initial maximum
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      //compare the current number with the maximum found so far
      max = array[i]; //store the compartion
    }
  }
  return max; // return the biggest number
}


console.log(findMax([3, 8, 2, 10, 5]));
console.log(findMax([-5, -2, -10, -1]));
console.log(findMax([7]));