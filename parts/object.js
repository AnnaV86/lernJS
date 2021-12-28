function DNAStrand(dna) {
  const replace = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'T',
  };
  return [...dna].map((x) => replace[x]).join('');
}
console.log(DNAStrand('GTAT'));

const a = {
  a: 1,
};

const b = {
  a: 1,
};

console.log(a === b)
console.log(a == b)
