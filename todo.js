// https://codesandbox.io/s/public-interview-react-nrpkt      рефакторинг кода

const get = (key, object) => {
  if (key === '') {
    return null;
  }
  const arrKey = key.split('.');
  const obj = arrKey.reduce((acc, el) => (acc[el] = acc[el] || ''), object);
  return obj === '' ? null : obj;
};

console.log(get('red.big.apple', { red: { big: { apple: 'ЯБЛОКО' } } }));
console.log(get('', { red: { big: { apple: 'ЯБЛОКО' } } }));
console.log(get('green.big.apple', { red: { big: { apple: 'ЯБЛОКО' } } }));
