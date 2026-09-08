function containsValue(array, value) {
    let contains = false

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            contains = true
            break
        }
    }
    return contains
}

console.log(containsValue([10, 20, 30], 20))
console.log(containsValue([10, 20, 30], 50))
console.log(containsValue(["a", "b", "c"], "b") )
console.log(containsValue(["a", "b", "c"], "x"))
console.log(containsValue([], 5))
 