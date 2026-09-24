//-------------Largest Element-----------

// function findLargest(arr: number[]): number {
//   let l = arr[0];

//   for (let i of arr) {
//     if (i > l) {
//       l = i;
//     }
//   }

//   return l;
// }

// console.log(findLargest([34,56,78,90,12]));

//--------------Second Largest Element---------

// function secondLargest(arr: number[]): number {
//   let fl = -Infinity;
//   let sl = -Infinity;

//   for (let i of arr) {
//     if (i > fl) {
//       sl = fl;
//       fl = i;
//     }
//     if (i > sl && i !== fl) {
//       sl = i;
//     }
//   }

//   return sl;
// }

// console.log(secondLargest([23, 56, 78, 90, 12, 10, 20, 89]));

//----------------Is Array Sorted-----------------

// function isArraySorted(arr: number[]): boolean {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isArraySorted([10, 2, 3, 4, 5, 6]));

//------------------Remove Duplicates from Sorted Array----------------

// function removeDuplicates(arr: number[]): number[] {
//   let i = 0;

//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   return arr.slice(0, i + 1);
// }

// console.log(removeDuplicates([23, 23, 23, 45, 45, 67, 89, 90, 90]));

//--------------------Moving all zeroes to end--------------------

// function moveAllZerosToEnd(arr: number[]): number[] {
//   let i = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] !== 0) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//     }
//   }

//   return arr;
// }

// console.log(moveAllZerosToEnd([1, 0, 0, 0, 0, 2, 3, 4, 0, 5, 6, 7]));

//-------------------Rotate Array to left by One-------------------

// function rotateLeftByOne(arr: number[]): number[] {
//   const first = arr.shift() as number;
//   arr.push(first);

//   return arr;
// }

// console.log(rotateLeftByOne([1, 2, 3, 4, 5]));

//--------------------Rotate Array by k times----------------

// [1,2,3,4,5]
// [5,4,3,2,1]
// [5,1,2,3,4]

function rotateByK(arr: number[], k: number): number[] {
  k %= arr.length;

  arr = reverse(arr, 0, arr.length - 1);
  arr = reverse(arr, 0, k - 1);
  arr = reverse(arr, k, arr.length - 1);

  return arr
}

function reverse(arr: number[], l: number, r: number): number[] {
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }

  return arr;
}

console.log(rotateByK([1,2,3,4,5],1));
