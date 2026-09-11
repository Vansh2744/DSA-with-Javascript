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

// const arr = [34, 56, 78, 90, 12, 78];

// console.log(arr.slice(0, 4));
// console.log(arr.slice(-4));
// console.log(arr.slice(-1));

// arr.splice(0,2);
// arr.splice(0,2,10);
// console.log(arr);

// arr.fill(0)
// arr.fill(0, 3)
// arr.fill(2, 3)
// arr.fill("vansh", 3);

// console.log(arr);

// console.log(arr.indexOf(34));

// const index = arr.findIndex((item) => item === 90);

// console.log(index);

// const arr = [
//   [2, 3, 4, 5],
//   [6, 7, 8, 9],
// ];

// console.log(arr.flat());

// const arr = [
//   [
//     [2, 3, 4],
//     [5, 6, 7],
//   ],
//   [
//     [8, 9, 10],
//     [11, 12, 13],
//   ],
// ];

// console.log(arr.flat(2));

// const arr = [23, 15, 67, 89, 90];

// arr.reverse()

// console.log(arr);

// arr.sort()

// console.log(arr);

// arr.sort((a, b) => a - b);
// arr.sort((a, b) => b - a);
// console.log(arr);

//------------------Second Largest Element-----------------

// function findSecondLargest(arr) {
//   let firstLargest = Number.NEGATIVE_INFINITY;
//   let secondLargest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//       secondLargest = firstLargest;
//       firstLargest = arr[i];
//     } else if (secondLargest != firstLargest && secondLargest < arr[i]) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// const arr = [23, 45, 100, 99, 78, 999, 1000];

// console.log(findSecondLargest(arr));

//-----------------Rotate Array--------------------

// function rotateArray(arr, rot) {
//   const size = arr.length;

//   if (rot > size) {
//     rot = rot % size;
//   }

//   const rest = arr.splice(size - rot, size);
//   arr.unshift(...rest);

//   return arr;
// }

// const nums = [1, 2, 3, 4, 5, 6];

// console.log(rotateArray(nums, 7));

//----------------------------------------------------

// function rotateArray(arr, rot) {
//   const size = arr.length;

//   if (rot > size) {
//     rot = rot % size;
//   }

//   reverseArr(arr, 0, size - 1);

//   reverseArr(arr, 0, rot - 1);

//   reverseArr(arr, rot, size - 1);

//   return arr;
// }

// function reverseArr(arr, l, r) {
//   while (l < r) {
//     let temp = arr[r];
//     arr[r] = arr[l];
//     arr[l] = temp;
//     l++;
//     r--;
//   }
// }

// const nums = [1, 2, 3, 4, 5, 6];

// console.log(rotateArray(nums, 6));

//-----------------Remove Duplicate values-------------------

// function removeDuplicates(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] == arr[i - 1]) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

//   return arr.length;
// }

// const arr = [0, 0, 0, 0, 1, 2, 2, 2, 4, 4, 5, 6];

// console.log(removeDuplicates(arr));

//----------------------------Using Two Pointers-----------------------------------

// function removeDuplicates(arr) {
//   let i = 0;

//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] != arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   return i + 1;
// }

// const arr = [0, 0, 0, 0, 1, 2, 2, 2, 4, 4, 5, 6];

// console.log(removeDuplicates(arr));

//----------------------------Maximum sum of subarray------------------------------

// function maxSumSubArray(arr) {
//   let maxSum = arr[0];
//   let s = 0;
//   let e = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum > maxSum) {
//         maxSum = sum;
//         s = i;
//         e = j;
//       }
//     }
//   }

//   const resArr = arr.slice(s, e + 1);
//   return [maxSum, resArr];
// }

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// const [sum, resArr] = maxSumSubArray(arr);

// console.log("Array : ", resArr);
// console.log("Sum : ", sum);

function maxSumSubArray(arr) {
  let maxSum = arr[0];
  let sum = 0;
  let s = 0;
  let e = 0;
  let tempS = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
      tempS = i + 1;
    }
    if (sum > maxSum) {
      maxSum = sum;
      s = tempS;
      e = i;
    }
  }

  const resArr = arr.slice(s, e + 1);

  return [maxSum, resArr];
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const [sum, resArr] = maxSumSubArray(arr);

console.log("Array : ", resArr);
console.log("Sum : ", sum);
