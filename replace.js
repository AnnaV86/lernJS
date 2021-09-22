// function removeExclamationMarks(s) {
//     return s.replace(/!/g, '');
// }
// console.log(removeExclamationMarks("Hello World!!"))


// function disemvowel(str) {
//     return str.replace(/[aeiuo]/ig, '');
// }
// console.log(disemvowel("This website is for losers LOL!"))


// **Номера Телефона**
function createPhoneNumber(numbers) {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))