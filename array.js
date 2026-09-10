//-----------------Find the occurrences----------

// const arr = [45, 56, 90, 45, 60, 56, 56];

// const res = arr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log(res);

//----------------Group Objects by Property-----------

// const users = [
//   { name: "Vansh", city: "Delhi" },
//   { name: "Rahul", city: "Mumbai" },
//   { name: "Aman", city: "Delhi" },
//   { name: "Riya", city: "Pune" },
// ];

// const res = users.reduce((acc, curr) => {
//   if (!acc[curr.city]) {
//     acc[curr.city] = [];
//   }
//   acc[curr.city].push(curr);
//   return acc;
// }, {});

// console.log(res);

//-----------------Flatten nested Array------------------

// const numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const res = numbers.reduce((acc, curr) => {
//   return acc.concat(curr);
// }, []);

// console.log(res);

//-------------------Remove Duplicates--------------------

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const res = numbers.reduce((acc, curr) => {
//   if (acc.includes(curr)) {
//     return acc;
//   } else {
//     acc.push(curr);
//     return acc;
//   }
// }, []);

// console.log(res);

//--------------------Some-----------------------

// const arr = [12, 34, 56, 78, 20];

// const res = arr.some((val) => val > 70);

// console.log(res);


//---------------------Every-----------------------

const arr = [12, 34, 56, 78, 20];

const res = arr.every((val) => val > 10);

console.log(res);