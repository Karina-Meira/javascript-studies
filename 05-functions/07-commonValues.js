function commonValues(array1, array2) {
  // empty array to store the common numbers
  const commonNum = []; 

  for (let i = 0; i < array1.length; i++) {
    // if statement to check if the current element is included in array2
    // && operator to check if the same element is not already included in the commonNum array, using the negation operator !
    if (array2.includes(array1[i]) && !commonNum.includes(array1[i])) {
    // number is added to commonNum 
      commonNum.push(array1[i]);
    }
  }

  return commonNum;
}

console.log(commonValues([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(commonValues([1, 2, 3], [4, 5, 6]));
console.log(commonValues([1, 2, 2, 3], [2, 2, 3]));
console.log(commonValues([], [1, 2, 3]));
