function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number'
        || !(sign === '+' || sign === '*' || sign === '/' || sign === '-')) {
        return 'unknown value'
    }

    return eval(a + sign + b)
}

console.log(calculator(1, 2, "j"))