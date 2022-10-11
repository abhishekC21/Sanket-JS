/*
function shiftToEnd(arr) {
  arr.sort((a, b) => b - a);
  return arr;
}
let arr = [-1, 2, 3, -6, 8, -7];
let result = shiftToEnd(arr);
console.log(result);
*/

///////////////////////////////////////
// Time:O(n), space:O(1)

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function shiftToLost(arr) {
  let i = 0;
  let k = 0;
  let j = arr.length - 1;
  while (k <= j) {
    if (arr[k] < 0) {
      // if element is negative we swap it with the element at j, and negative section increases
      swap(arr, k, j);
      j--;
    } else {
      // if element is positive we just moved ahead with i, and positive section increases
      i++;
      k++;
    }
  }
}

let arr = [-3, 2, 4, -8, 6, -9];
shiftToLost(arr);
console.log(arr);
