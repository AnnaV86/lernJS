function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(game.next().value); // Do you love JavaScript?
console.log(game.next("Yes").value); // JavaScript loves you back ❤️

//Функция генератора "приостанавливает" выполнение, когда видит ключевое слово yield. Во-первых,
// мы должны позволить функции выдать строку "Do you love JavaScript?", что можно сделать, вызвав game.next().value.

//Каждая строка выполняется до тех пор, пока не найдет первое ключевое слово yield.
// В первой строке функции есть ключевое слово yield на первом месте: выполнение останавливается с первым выходом! 
//Это означает, что переменная answer еще не определена!

//Когда мы вызываем game.next("Yes").value, предыдущий yield заменяется значением параметров,
// переданных функции next(), в данном случае "Yes". Значение переменной answer теперь равно "Yes".
// Условие if возвращает false, а JavaScript loves you back ❤️, регистрируется.
