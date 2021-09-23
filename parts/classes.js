class SmallestIntegerFinder {
    findSmallestInt(arrNumbers) {
        return arrNumbers.reduce((acc, number) => {
            acc > number ? acc = number : number;
            return acc;
        })
    }
}

const objectSmallestIntegerFinder = new SmallestIntegerFinder()

console.log(objectSmallestIntegerFinder.findSmallestInt([78, 56, 232, 412, 228]))
console.log(objectSmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 0]))

