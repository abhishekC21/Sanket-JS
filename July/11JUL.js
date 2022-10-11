// function search(arr = [5, 6, 7, 2, 8, 3, 1, 7, 9], x = 3) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) return i;
//   }
//   return undefined;
// }
// console.log(search());

////////////////////////////////////////////////////////
/*
function binarySearch(arr = [1, 2, 3, 4, 5, 6, 10, 11, 23, 45, 67], x = 10) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    // let mid = Math.floor((start + end) / 2);
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === x) return mid;
    if (arr[mid] > x) {
      // reduce to the left
      end = mid - 1;
    } else {
      // reduce to the right
      start = mid + 1;
    }
  }
  return `${x} is not here`;
}
console.log(binarySearch());
*/

////////////////////////////////////////////////////////

function upperBound(arr = [1, 2, 3, 3, 5, 6, 7], x = 8) {
  let start = 0,
    end = arr.length - 1;
  let ans = arr.length;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] <= x) {
      // discard left half
      start = mid + 1;
    } else {
      // element at mid can be potential answer
      ans = mid;
      end = mid - 1; // go and find something even better on left side
    }
  }
  return ans;
}
console.log(upperBound());

// let linearSearch = (arr, size, element) => {
//   for (let i = 0; i < size; i++) {
//     if (arr[i] === 0) return i;
//   }
//   return -1;
// };

// let arr = [1, 3, 5, 56, 4, 3, 23, 5, 4, 54634, 56, 34];
// let size = arr / i;
// let element = 56;
// let searchIndex = linearSearch(arr, size, element);
// console.log(`The element ${element} was found at index ${searchIndex}`);
// return 0;
