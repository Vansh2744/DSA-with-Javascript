//--------------Fibonacci------------------------------------

// function getFib(num) {
//   let res = [0, 1];

//   for (let i = 2; i <= num; i++) {
//     res.push(res[i - 1] + res[i - 2]);
//   }

//   return res;
// }

// console.log(getFib(5));

//-----------------------------Using Recursion------------------------------

// function getFib(num) {
//   if (num <= 1) {
//     return num;
//   }

//   return getFib(num - 1) + getFib(num - 2);
// }

// console.log(getFib(3));

//------------------------------Anagram-----------------------------------

// function isAnagram(firstVal, secondVal) {
//   const f = firstVal.split("").sort().join("");
//   const s = secondVal.split("").sort().join("");

//   return f === s;
// }

// const first = "current";
// const second = "rentruc";

// console.log(isAnagram(first, second));

//-----------------------------Using Object-----------------------------------

// function isAnagram(f, s) {
//   const obj1 = {};
//   const obj2 = {};

//   for (let i = 0; i < f.length; i++) {
//     obj1[f[i]] = (obj1[f[i]] || 0) + 1;
//     obj2[s[i]] = (obj2[s[i]] || 0) + 1;
//   }

//   for (const i in obj1) {
//     if (obj1[i] !== obj2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const first = "current";
// const second = "rentruc";

// console.log(isAnagram(first, second));

//---------------------------Two Sum--------------------------

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([2, 3, 4, 7, 9], 9));

//------------------------------

// function twoSum(arr, target) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     const val = arr[i];

//     if (target - val in obj) {
//       return [obj[target - val], i];
//     } else {
//       obj[val] = i;
//     }
//   }
// }

// console.log(twoSum([2, 3, 4, 7, 9], 9));

//-------------------------Best time to sell stock---------------

// function maxProfit(arr) {
//   let best = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const profit = arr[j] - arr[i];
//       if (profit > best) {
//         best = profit;
//       }
//     }
//   }
//   return best;
// }

// console.log(bestTime([7, 1, 5, 3, 6, 4]));

//-----------------------Using Greedy Approach----------------------

function maxProfit(arr) {
  let min = arr[0];
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    const currentProfit = arr[i] - min;
    if (currentProfit > profit) {
      profit = currentProfit;
    }
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
