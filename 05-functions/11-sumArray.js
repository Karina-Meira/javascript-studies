function sumArray(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum
}

 
console.log(sumArray([1, 2, 3, 4]))
console.log(sumArray([10, 20, 30]))
console.log(sumArray([-1, 2, 3]))
console.log(sumArray([5]))
console.log(sumArray([]) )

/*
The `sum` variable starts at `0` because if the input is an empty array, the function will return `0`.

The `for` loop goes through the array and adds each number to the `sum` variable until it reaches the last element.

Finally, the function returns the sum of all the numbers in the array.

*/