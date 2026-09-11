function secondLargest(arr) {
  let firstL = Number.NEGATIVE_INFINITY;
  let secondL = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstL) {
      secondL = firstL;
      firstL = arr[i];
    }
    if (arr[i] != firstL && secondL < arr[i]) {
      secondL = arr[i];
    }
  }

  return secondL;
}

const arr = [23, 456, 67, 78, 400];

console.log(secondLargest(arr));
