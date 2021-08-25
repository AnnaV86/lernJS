// BEGIN (write your solution here)
const isLannisterSoldier = (color, shild) => {
  const lannister = (color === 'red' && shild === 'null') || shild === 'lion';
  return lannister;
}


console.log(isLannisterSoldier('red', 'lion'));
console.log(isLannisterSoldier('blue', null));
// END