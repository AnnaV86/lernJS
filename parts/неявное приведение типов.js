// 0, пустые строки, null, undefined и NaN, становятся false

// Все остальные значения становятся true.

// пробел " " - тоже true
// строчка с нулём "0" — это true

// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// console.log('конкатенируем undefined:', 'string' + undefined);
// console.log('конкатенируем null:', 'string' + null);
// console.log('конкатенируем number:', 'string' + 1);
// console.log('конкатенируем object:', 'string' + {});

// console.log('number минус string:', 1 - '1');

// console.log(!!'');
// console.log(!!{});
// console.log((2).toFixed(2));

console.log(parseInt('0'));
console.log(Number('0'));
console.log(parseInt(' '));
console.log(Number(' '));
console.log(2 + undefined);
console.log(null + 2);
