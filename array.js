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

// const arr = [12, 34, 56, 78, 20];

// const res = arr.every((val) => val > 10);

// console.log(res);

//-----------------------------

// const arr1 = [23, 45, 67, 78];
// const arr2 = [10, 20, 30, 40, 50];

// const arr = [...arr1, ...arr2];

// console.log(arr);

// const arr1 = [23,45,67]
// const arr2 = [56,78,89,90]

// console.log(arr1.concat(arr2).concat(45).concat(90));

const arr = [34, 56, 78, 90, 12, 78];

// console.log(arr.slice(0, 4));
// console.log(arr.slice(-4));
// console.log(arr.slice(-1));

// arr.splice(0,2);
// arr.splice(0,2,10);
// console.log(arr);

