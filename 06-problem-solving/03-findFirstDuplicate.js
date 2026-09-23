// The function returns the first duplicate found in an array
function findFirstDuplicate(array) {
    // The first loop takes one element and forms a pair with all the other elements in the array
    for (let i = 0; i < array.length; i++) {
        // These other elements are taken by the second for loop
        for (let j = i + 1; j < array.length; j++) {
            // If the element from the first loop is equal to the element from the second loop, the function returns that element
            if (array[i] === array[j]) {
                return array[i]
            }
        }
    }

    // If the loops don't find a duplicate, the function returns null
    return null
}


console.log(findFirstDuplicate([2, 5, 3, 5, 8]))
console.log(findFirstDuplicate([7, 4, 7, 2, 4]))
console.log(findFirstDuplicate([1, 2, 3, 4]))
console.log(findFirstDuplicate([3, 3, 5, 8]))
console.log(findFirstDuplicate([]))
console.log(findFirstDuplicate([10]))
console.log(findFirstDuplicate([2, 2, 2, 2, 2]))
console.log(findFirstDuplicate([-2, -9, -2]))
console.log(findFirstDuplicate([10.5, 9, 2.8, 10.5]))