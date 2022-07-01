const arr = [
  { Бяк: 1 },
  { Аякса: 2 },
  { бал: 3 },
  { Аякса: 3 },
  { абажур: 4 },
  { Аякса: 1 },
];

console.log(
  arr.sort((a, b) => {
    const word1 = Object.keys(a)[0].toUpperCase();
    const word2 = Object.keys(b)[0].toUpperCase();

    if (word1 === word2) {
      return a[Object.keys(a)[0]] - b[Object.keys(b)[0]];
    }
    return word1.localeCompare(word2);
  })
);
