// function to remove duplicates in an array
function removeDuplicates(array) {
  const newArray = []; // an empty array to store the numbers without duplicates

  for (let i = 0; i < array.length; i++) { // a for loop to go through each element of the original array
    if (!newArray.includes(array[i])) { // if statement with the negation operator ! to check if the current number does not already exist in newArray
      newArray.push(array[i]) // number is added to newArray
    } 
  }

  return newArray; //return the newArray with the duplicates removed
}

console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
console.log(removeDuplicates([5, 5, 5, 5]));
console.log(removeDuplicates([1, 2, 3]));
console.log(removeDuplicates([]));
