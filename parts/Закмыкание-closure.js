function closure() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
// Замыкание closure
const viewCount = closure();
console.log(viewCount());
console.log(viewCount());
console.log(viewCount());

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var', i), 1);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let', j), 1);
}

console.log('i', i);
