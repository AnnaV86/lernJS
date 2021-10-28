//сравниваем дату купонов, если просрок (со следующего дня) то false
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return new Date(currentDate) <= new Date(expirationDate) && enteredCode === correctCode
}
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'))
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))
console.log(checkCoupon('123a', '123', 'October 5, 2014', 'October 1, 2014'))