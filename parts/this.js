// String.prototype.toAlternatingCase = function () {
//     return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
// }
// console.log("hellO woRld".toAlternatingCase())


String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1, el.length)).join(' ')
};