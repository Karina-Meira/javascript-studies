// The function returns only unique values from an array.
function onlyUnique(array) {
  const unique = [];

  for (let i = 0; i < array.length; i++) {
    // negation operator ! to check if the current value does not already exist in the unique array
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }

  return unique;
}

console.log(onlyUnique([1, 2, 2, 3, 1, 4])); 
console.log(onlyUnique([5, 5, 5]));           
console.log(onlyUnique([1, 2, 3]));           
console.log(onlyUnique([]));                  
