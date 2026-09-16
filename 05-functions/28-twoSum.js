// The function returns an array with two elements whose sum equals the target
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // subtract the current element from the target to discover which number needs to be found
    const result = target - array[i];

    const index = array.indexOf(result); 
    
    // check if this number exists in the array
    // if we don't find it, we jump to the next element
    if (index === -1) {
        continue
    } 
    
    // verify if it is a different element and not the same element
    if (index !== i) {
      return [array[i], result];
    } 
  }

  // I
  // if the loop ends without finding the numbers, we return null
  return null;
}

console.log(twoSum([8, 3, 3], 6));       
console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([6, 6, 3, 2], 5));    
console.log(twoSum([1, 2, 3], 10));    
console.log(twoSum([1, 4, 8, 10], 9));
console.log(twoSum([3, 8], 6))