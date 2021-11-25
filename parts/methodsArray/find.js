function firstNonConsecutive(arr) {
  const result = arr.find((el, i, m) => el - 1 !== m[i - 1] && i !== 0);
  return typeof result === 'number' ? result : null;
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

const findDeletedNumber = (arr, mixArr) =>
  arr.find((el) => !mixArr.includes(el)) || 0;

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
