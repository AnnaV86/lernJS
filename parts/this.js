// String.prototype.toAlternatingCase = function () {
//     return this.split('').map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
// }
// console.log("hellO woRld".toAlternatingCase())

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ');
};

console.log('gfdsjkgds fjgjsdkfg'.toJadenCase());

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN
