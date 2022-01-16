// замыкание + каррирование
const add = () => {
  const cache = {};
  return (num) => {
    console.log(cache);
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};
const cashedAdd = add();
console.log(cashedAdd(10));
console.log(cashedAdd(10));
console.log(cashedAdd(10));
console.log(cashedAdd(10));
console.log(cashedAdd(10));
console.log(cashedAdd(10));
console.log(cashedAdd(15));
console.log(cashedAdd(15));
