
function order(words) {
    const arr = words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/))  //сортирует только по цифрам
    return arr
}

console.log(order("is2 Thi1s T4est 3a"))




//Забирает все буквы кроме [a-m]
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))


// function alphabetPosition(text) {
//     const arrText = text.match(/[a-z]/ig) || []
//     if (arrText.length === 0) {
//         return ''
//     }
//     return arrText.map(x => x.toLowerCase().charCodeAt() - 96).join(' ')
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))