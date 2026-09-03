function findMin(array) {
    let min = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

console.log(findMin([5, 2, 8, 1, 9]))
console.log(findMin([-3, -10, -2]))
console.log(findMin([7]))
console.log(findMin([]))
