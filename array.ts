function findLargest(arr: number[]): number {
  let l = arr[0];

  for (let i of arr) {
    if (i > l) {
      l = i;
    }
  }

  return l;
}

console.log(findLargest([34,56,78,90,12]));
