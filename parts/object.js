// function DNAStrand(dna) {
//   const replace = {
//     G: 'C',
//     C: 'G',
//     T: 'A',
//     A: 'T',
//   };
//   return [...dna].map((x) => replace[x]).join('');
// }
// console.log(DNAStrand('GTAT'));

// const a = {
//   a: 1,
// };

// const b = {
//   a: 1,
// };

// console.log(a === b);
// console.log(a == b);

// function getInfo(member, year) {
//   member.name = 'Lydia';
//   year = 1998;
// }

// const person = { name: 'Sarah' };
// const birthYear = '1997';

// getInfo(person, birthYear);

// console.log(person, birthYear);

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);
// multiply();

// console.log(value);

const replace = {
  G: 'C',
  C: 'G',
  T: {
    G: '3',
  },
  A: 'T',
};

console.log(String(replace));
