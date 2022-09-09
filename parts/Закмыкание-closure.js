function closure() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
// Замыкание closure
const viewCount = closure();
console.log(viewCount());
console.log(viewCount());
console.log(viewCount());

const viewCount2 = closure();
console.log(viewCount2());
console.log(viewCount2());
console.log(viewCount2());

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var', i), 1);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let', j), 1);
}

console.log('i', i);

test();
function test() {
  console.log('1: ', a);
  if (true) {
    var a = 1;
  }
  console.log('2: ', a);
  if (true) {
    const b = 1;
  }
  console.log('3: ', b);
}
