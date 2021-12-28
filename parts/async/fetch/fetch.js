import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/posts/1', {})
  .then((response) => response.json())
  .then((json) => console.log(json));

const a = {
  a: 1,
};

const b = {
  a: 1,
};

console.log(typeof a);
