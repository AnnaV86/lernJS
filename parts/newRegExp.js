// вырезать какое то количество символов из строки с переносом на новую строку
function stringBreakers(n, string) {
  return (
    string
      .replace(/\s/g, '')
      // используем объект класса RegExp для передачи в regexp количества символов
      // в regexp создаем группу после которой делаем перенос строки
      .replace(new RegExp('(.{' + n + '})', 'g'), '$1\n')
  );
}

console.log(stringBreakers(5, 'This is an example string'));
