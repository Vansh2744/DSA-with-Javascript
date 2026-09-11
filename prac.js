function mulArr(arr) {
  if (arr.length <= 0) {
    return 0;
  }
  return arr[0] + mulArr(arr.slice(1));
}

console.log(mulArr([1, 2, 3, 4, 5, 10]));
