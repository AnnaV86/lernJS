const emojis = ['✨', '🥑', '😍', '✨', '🥑', '😍'];

// не мутирующие
emojis.map((x) => x + '✨');
emojis.filter((x) => x !== '🥑');
emojis.find((x) => x !== '🥑'); // возвращает значение первого найденного в массиве элемента
emojis.reduce((acc, _) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.concat(['✨']);
console.log(emojis);

// мутирующие которые не желательно использовать в работе
emojis.pop(); // удаляет последний элемент
array.shift(); // удаляет первый элемент
emojis.splice(0, 1, ['splice']); // вырезать из массива и третьим аргументом можно вставить
emojis.push(['push']); // добавить в конец
emojis.unshift('unshift'); // добавить в начало

console.log(emojis);
