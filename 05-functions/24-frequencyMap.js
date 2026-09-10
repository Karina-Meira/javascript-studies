// The function returns an object with the frequency of the elements in the array
function frequencyMap (array) {
    const result = {}

    for (let i = 0; i < array.length; i ++) {
        // it checks if the current element exists in the object
        if (!(array[i] in result)) {
            // add it to the result object with a value of 1
            result[array[i]] = 1
        } else {
            // if it already exists, I increase its value by 1
            result[array[i]] += 1
        }
    }

    return result
}

console.log(frequencyMap([1, 2, 2, 3, 3, 3]));
console.log(frequencyMap(["a", "b", "a", "c", "b", "a"]));
console.log(frequencyMap([5, 5, 5, 5]));
console.log(frequencyMap([1, 2, 3]));
console.log(frequencyMap([]));