//---------------Multiply All Elements of Array--------------

// function mulArr(arr) {
//   if (arr.length <= 0) {
//     return 1;
//   }
//   return arr[0] * mulArr(arr.slice(1));
// }

// console.log(mulArr([1, 2, 3, 4, 5, 10]));

//---------------Factorial of a number----------------------

// function findFact(num) {
//   if (num == 1) {
//     return 1;
//   }
//   return num * findFact(num - 1);
// }

// console.log(findFact(5));

//----------------Range of a Numbers------------------------

// function rangeOfNumbers(s, e) {
//   if (s > e) {
//     return [];
//   } else {
//     let numbers = rangeOfNumbers(s, e - 1);
//     numbers.push(e);
//     return numbers;
//   }
// }

// console.log(rangeOfNumbers(0, 5));

//------------------Palindrome-----------------------

// function palidromNumber(num) {
//   const original = num;
//   function reverse(n, rev = 0) {
//     if (n === 0) return rev;
//     return reverse(Math.floor(n / 10), rev * 10 + (n % 10));
//   }

//   return original === reverse(num);
// }

// console.log(palidromNumber(121));
// console.log(palidromNumber(1221));
// console.log(palidromNumber(12281));

//------------------Fibonacci series--------------------

// function fib(num) {
//   if (num <= 1) {
//     return num;
//   }

//   return fib(num - 1) + fib(num - 2);
// }

// console.log(fib(6));
