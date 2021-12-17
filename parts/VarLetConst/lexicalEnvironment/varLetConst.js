function first(parameter) {
  var a = 1;
  let b = 2;
  const c = 'str';

  if (typeof c === typeof parameter) {
    const c = 3;
    console.log('я var a объявленный в теле функции = ', a);
    console.log('я let b объявленный в теле функции = ', b);
    console.log('тип c string равен типу parameter string');
    console.log(`в этом блоке тип с = ${typeof c}`);
  } else {
    const d = 'я const d виден только в блоке';
    var f = 'я var виден везде внутри функции';
    console.log('я var a объявленный в теле функции = ', a);
    console.log('я let b объявленный в теле функции = ', b);
    console.log('тип c не равен типу parameter');
    console.log(`в этом блоке тип b = ${typeof b}`);
  }

  (function () {
    console.log('var внутри другой функции', f);
  })();

  try {
    console.log(d);
  } catch (error) {
    console.log('здесь ошибка d не создана');
  }

  console.log('f внутри функции ', f);
}

first(2);
console.log('f вне функции', f);
