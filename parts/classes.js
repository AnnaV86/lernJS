// class SmallestIntegerFinder {
//     findSmallestInt(arrNumbers) {
//         return arrNumbers.reduce((acc, number) => {
//             acc > number ? acc = number : number;
//             return acc;
//         })
//     }
// }

// const objectSmallestIntegerFinder = new SmallestIntegerFinder()

// console.log(objectSmallestIntegerFinder.findSmallestInt([78, 56, 232, 412, 228]))
// console.log(objectSmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 0]))

class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName; //, объявляем переменные для класса
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim(); //метод объекта
  }
  static test() {
    //метод класса
    console.log('ggg');
  }
}

console.log(new Dinglemouse('Clint', 'Eastwood').getFullName()); //вызов метода объекта
Dinglemouse.getFullName(); //вызов метода класса
