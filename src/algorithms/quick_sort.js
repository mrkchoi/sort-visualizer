
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = arr.slice(1).filter(el => el < pivot);
  let right = arr.slice(1).filter(el => el >= pivot);
  left = quickSort(left);
  right = quickSort(right);

  return left.concat([pivot]).concat(right);
}

console.log(quickSort([8, 7, 6, 5, 4, 3, 2, 1]));