function DNAStrand(dna) {
    const replace = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'T'
    }
    return [...dna].map(x => replace[x]).join('')
}
console.log(DNAStrand("GTAT"))