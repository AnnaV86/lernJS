let numbers = [2, 3, 4, 5, 10, 18, 23]

function evenSum(arr) {
    let summa = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (arr[i] % 2 === 0) {
            summa = summa + arr[i]
        }
    } return summa
}
console.log(evenSum(numbers))