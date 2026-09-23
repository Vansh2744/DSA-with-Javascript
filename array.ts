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

function isArraySorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isArraySorted([10, 2, 3, 4, 5, 6]));
