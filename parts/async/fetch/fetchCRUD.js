import fetch from 'node-fetch';

// Create, Read, Update, Delete

// delete
// const deleteUser = async (id) => {
//   const response = await fetch(`http://localhost:3010/people/${id}`, {
//     method: 'DELETE',
//   });
//   return await response.json();
// };

// deleteUser(2);

// create
// const createUser = async (object) => {
//   const response = await fetch(`http://localhost:3010/people/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(object),
//   });
//   const result = await response.json();
//   console.log(result);
//   return result;
// };

// createUser({ name: 'Kirill' });

// const getUser = async () => {
//   const response = await fetch(`http://localhost:3010/people/`);
//   const result = await response.json();
//   console.log(result);
//   return result;
// };
// getUser();

const updateUser = async (object, id) => {
  const response = await fetch(`http://localhost:3010/people/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(object),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

updateUser({ name: 'Ann' }, 1);
