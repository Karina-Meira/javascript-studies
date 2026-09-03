// This function returns whether an array is a palindrome or not
function isPalindrome(array) {
  let palindrome = true;

  for (let i = 0; i < array.length / 2; i++) { // to go through the array until the halfway point
    // to store the index of the element on the opposite side of the array
    let index2 = array.length - 1 - i; 

    // to compare the element at the current index with the corresponding element from the end of the array
    if (array[i] !== array[index2]) { 
      //If they are different, I set palindrome to false and use break to stop the loop
      palindrome = false; 
      break;
    }
  }

  // if all the necessary comparisons are equal, the array is a palindrome, so the function returns true. Otherwise, it returns false
  return palindrome;
}

console.log(isPalindrome([1, 2, 3, 2, 1]));
console.log(isPalindrome([1, 2, 3]));
console.log(isPalindrome(["a", "b", "a"]));
console.log(isPalindrome([1, 2, 2, 1]));
console.log(isPalindrome([]));
