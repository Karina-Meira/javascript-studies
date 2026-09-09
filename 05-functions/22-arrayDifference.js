// The function returns a new array with the values that exist in array1 but do not exist in array2
function arrayDifference(array1, array2) {
    const difference = []

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            difference.push(array1[i])
        }
    }

    return difference
}

console.log(arrayDifference([1, 2, 3, 4], [2, 4])); 
console.log(arrayDifference([1, 2, 3], [4, 5]));    
console.log(arrayDifference([1, 2, 3], [1, 2, 3])); 
console.log(arrayDifference([1, 2, 2, 3], [2]));    
console.log(arrayDifference([], [1, 2]));            