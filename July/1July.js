/////////////////////////////////////////////////

// Time complexity = O(n), space = O(1)
// frequency of char

function getFrequency(str = "relevel") {
  let mp = {}; //this object will store the frequencies
  for (let i = 0; i < str.length; i++) {
    if (!mp[str[i]]) {
      // if the current char is not present in my mapping, we make entity
      mp[str[i]] = 1;
    } else {
      // if the char already present, increase the frequency
      mp[str[i]] += 1;
    }
  }
  return mp;
}
console.log(getFrequency());
// console.log(getFrequency("546211"));

///////////////////////////////////////////////////
// Time complexity = O(n), space = O(1)

/*
function firstNonRepeating(str) {
  let mp = {};
  for (let i = 0; i < str.length; i++) {
    if (!mp[str[i]]) {
      mp[str[i]] = 1;
    } else {
      mp[str[i]] += 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (mp[str[i]] == 1) {
      return str[i];
    }
  }
  return "All elements are doubled";
}
console.log(firstNonRepeating("aabbcc"));
*/

///////////////////////////////////////////////////

/*
function checkSubArray(arr) {
  // we try to generate all possible subarrays
  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
      let str = "";
      for (let k = start; k <= end; k++) {
        str = str + arr[k] + ",";
      }
      console.log(str);
    }
  }
}
checkSubArray([5, 2, 1]);
*/

/////////////////////////////////////////

// Time: O(n^3), space:O(1)

// function checkSubArrayWithSum0(arr) {
//   for (let start = 0; start < arr.length; start++) {
//     for (let end = start; end < arr.length; end++) {
//       let sum = 0;
//       for (let k = start; k <= end; k++) {
//         sum += arr[k];
//       }
//       if (sum === 0) return true;
//     }
//   }
//   return false;
// }
// console.log(checkSubArrayWithSum0([5, 2, 1, -3]));

// OR

/*
function checkSubArrayWithSum0(arr) {
  for (let start = 0; start < arr.length; start++) {
    let sum = 0;
    for (let end = start; end < arr.length; end++) {
      sum += arr[end];
      if (sum === 0) return true;
    }
  }
  return false;
}
console.log(checkSubArrayWithSum0([5, 2, 1, -3]));
*/
