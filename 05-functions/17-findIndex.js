function findIndex(array, value) {
    // -1 in case the value does not exist in the array
    let index = -1

    for (let i = 0; i < array.length; i++) {
        // if statement to check if the current element is equal to the value
        if (array[i] === value) {
            index = i
            break
        }
    }

    return index
}

console.log(findIndex([10, 20, 30, 40], 30))
console.log(findIndex(["a", "b", "c"], "b"))
console.log(findIndex([5, 8, 5, 10], 5))
console.log(findIndex([1, 2, 3], 10))
console.log(findIndex([], 5))