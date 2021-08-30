function numberToPower(number, power) {
    let numberToPower = 1;
    for (let i = 0; i < power; i++) {
        numberToPower *= number
    }

    return numberToPower
}
console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0))