//-----------------Find the occurrences----------

// const arr = [45, 56, 90, 45, 60, 56, 56];

// const res = arr.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});

// console.log(res);

//----------------Group Objects by Property-----------

const users = [
  { name: "Vansh", city: "Delhi" },
  { name: "Rahul", city: "Mumbai" },
  { name: "Aman", city: "Delhi" },
  { name: "Riya", city: "Pune" },
];

const res = users.reduce((acc, curr) => {
  if (!acc[curr.city]) {
    acc[curr.city] = [];
  }
  acc[curr.city].push(curr);
  return acc;
}, {});

console.log(res);
