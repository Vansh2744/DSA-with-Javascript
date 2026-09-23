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

function moveAllZerosToEnd(arr: number[]): number[] {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}

console.log(moveAllZerosToEnd([1, 0, 0, 0, 0, 2, 3, 4, 0, 5, 6, 7]));
