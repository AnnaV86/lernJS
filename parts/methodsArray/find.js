function firstNonConsecutive(arr) {
    const result = arr.find((el, i, m) => el - 1 !== m[i - 1] && i !== 0)
    return typeof result === 'number' ? result : null
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))


