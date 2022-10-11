// function checkDuplicate(
//   arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 11, 13, 13],
//   x = 13
// ) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === x && arr[i - 1] === x) return true;
//   }
//   return false;
// }
// console.log(checkDuplicate());

// function checkDuplicate1(
//   arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 11, 13, 13],
//   x = 13
// ) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === x && arr[i - 1] === x) return true;
//   }
//   return false;
// }
// console.log(checkDuplicate1());

////////////////////////////////////////////////
// Time complexity
// O(logn)
// o(1)

/*
function checkDuplicationOptimised(arr, x) {
  let lo = 0,
    hi = arr.lenght - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === x) {
      if (mid - 1 >= 0 && arr[mid - 1] === x) return true;
      if (mid + 1 < arr.length && arr[mid + 1] === x) return true;
      return false; // beacuse x is not reporting
    } else if (arr[mid] > x) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return false; // x was not present
}
*/

////////////////////////////////////////////////

/*
function findUnique(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  return ans;
}
*/

////////////////////////////////////////////////
// Time: O(logn), Space:O(1)

/*
function uniqueElement(arr) {
  let lo = 0;
  hi = arr.length - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (
      mid - 1 >= 0 &&
      mid + 1 < arr.length &&
      arr[mid] !== arr[mid + 1] &&
      arr[mid] !== arr[mid - 1]
    ) {
      // we are on the unique element
      return arr[mid];
    }
    if (mid === 0 && mid + 1 < arr.length && arr[mid] !== arr[mid + 1]) {
      return arr[mid]; // [1,2,2,3,3,4,4]
    }
    if (mid === arr.length - 1 && mid - 1 >= 0 && arr[mid] !== arr[mid - 1]) {
      return arr[mid]; // [1,2,2,3,3,4,4]
    }
    if (
      (mid + 1 < arr.length && arr[mid] === arr[mid + 1] && mid % 2 === 0) ||
      (mid - 1 >= 0 && arr[mid - 1] === arr[mid] && (mid - 1) % 2 === 0)
      ) {
      // we are on the left of uniqye element
      lo = mid + 1;
    } else {
      // we are on the right of uniqye element
      hi = mid - 1;
    }
  }
  return undefined;
}
console.log(
  // uniqueElement([1, 1, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11, 13, 13, 14, 15, 15])
  uniqueElement([5, 5, 1, 1, 13, 13, -1, -1, 8])
  );
  */

////////////////////////////////////////////////
// Time: O(logn), Space:O(1)

function findRepeating(arr) {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (mid + 1 < arr.length && arr[mid] === arr[mid + 1]) {
      return arr[mid];
    }
    if (arr[mid] === mid - 1) {
      // we are on the right side of repeating element
      hi = mid - 1;
    } else {
      // we are on the left side of repeating element
      lo = mid + 1;
    }
  }
  return undefined;
}

console.log(findRepeating([0, 1, 2, 3, 4, 5, 5, 6, 7, 8]));
