function doubleArray(array) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        const double = array[i] * 2
        result.push(double)
    }

    return result
}
     
console.log(doubleArray([1, 2, 3]))
console.log(doubleArray([5, 10]) )
console.log(doubleArray([-1, 2, -3]))
console.log(doubleArray([7]))
console.log(doubleArray([]))