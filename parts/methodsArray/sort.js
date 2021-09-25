const arr = [['u', 1], ['p', 1], ['l', 2], ['w', 2], ['f', 1], ['j', 1], ['k', 1], ['h', 4], ['d', 2], ['v', 5]]


console.log(arr.sort((a, b) => b[1] === a[1]
    ? a[0].charCodeAt() - b[0].charCodeAt()
    : b[1] - a[1]))

// // [
// ['v', 5], 
// ['h', 4], 
// ['d', 2], 
// ['l', 2], 
// ['w', 2], 
// ['f', 1], 
// ['j', 1], 
// ['k', 1], 
// ['p', 1], 
// ['u', 1]
// ]


const month = {
    январь: 1,
    февраль: 2,
    март: 3,
    апрель: 4,
    май: 5,
    июнь: 6,
    июль: 7,
    август: 8,
    сентябрь: 9,
    октябрь: 10,
    ноябрь: 11,
    декабрь: 12
}


const arrMonth = ['март', 'февраль', 'январь', 'июнь', 'май', 'апрель', 'сентябрь', 'август', 'июль', 'декабрь', 'ноябрь', 'октябрь']

console.log(arrMonth.sort((a, b) => month[a] - month[b]))


function order(words) {
    const arr = words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/))  //сортирует только по цифрам
    return arr
}

console.log(order("is2 Thi1s T4est 3a"))