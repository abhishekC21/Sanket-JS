// function findpower(a, n) {
//   if (n == 1) {
//     return a;
//   }
//   return a * findpower(a, n - 1);
// }
// console.log(findpower(4, 3));

// function findExp(a, n) {
//   if (n == 1) return a;
//   return a * findExp(a, n - 1);
// }
// console.log(findExp(2, 2));

function countMaze(m, n) {
  if (n < 1 || m < 1) return 0;
  if (n == 1 && m == 1) {
    return 1;
  }
  return countMaze(m - 1, n) + countMaze(m, n - 1);
}
console.log(countMaze(3, 3));
