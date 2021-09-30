//убирает дубликаты

function removeDuplicateWords(s) {
    const arr = s.split(' ')
    return [...new Set(arr)].join(' ')
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta'))



function minValue(values) {
    return Number([...new Set(values)].sort((a, b) => a - b).join(''))
}
console.log(minValue([5, 6, 9, 9, 7, 6, 4]))