const obj = {
  a: 1,
  b: 1,
};

const obj2 = {
  a: 1,
  b: 1,
};

const obj3 = {
  b: 1,
  a: 1,
};

console.log(JSON.stringify(obj) === JSON.stringify(obj2));
console.log(JSON.stringify(obj3) === JSON.stringify(obj2));

// переводит в строку данные для отправки
const jsonStringify = JSON.stringify(obj);
console.log(typeof jsonStringify, jsonStringify);

// достаем из строки js
const jsonParse = JSON.parse(jsonStringify);
console.log(typeof jsonParse, jsonParse);

// Преобразование числа в допустимый JSON, затем преобразование строки JSON в значение JavaScript:
const jsonNumber = JSON.stringify(4); // '4'
JSON.parse(jsonNumber); // 4

// Преобразование значения массива в допустимый JSON, затем разбор строки JSON в значение JavaScript:
const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'
JSON.parse(jsonArray); // [1, 2, 3]

// Преобразование объекта в допустимый JSON, затем преобразование строки JSON в значение JavaScript:
const jsonArray = JSON.stringify({ name: 'Lydia' }); // '{"name":"Lydia"}'
JSON.parse(jsonArray); // { name: 'Lydia' }
