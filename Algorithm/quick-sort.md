```javascript
function partition(arr, left, right) {
  const pivotVal = arr[left];
  let i = left;
  let j = right;

  while (i < j) {
    // find a value which < pivotVal from right to left
    while (i < j && arr[j] >= pivotVal) {
      j--;
    }

    if (i < j) {
      arr[i] = arr[j];
      i++;
    }

    // find a value which >= pivotVal from left to right
    while (i < j && arr[i] < pivotVal) {
      i++;
    }

    if (i < j) {
      arr[j] = arr[i];
      j--;
    }
  }

  // put pivotVal to it's position
  arr[i] = pivotVal;

  return i;
}

function partition2(arr, left, right) {
  const pivotVal = arr[right];
  let pivotIndex = left - 1;

  function swap(arr, from, to) {
    const temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
  }

  // move all values less than pivotVal to left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }

  // put pivotVal to it's position
  swap(arr, pivotIndex + 1, right);

  return pivotIndex + 1;
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  const pivotIndex = partition2(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

const arr = [5, 2, 4, 6, 3, 7, 8, 9];
quickSort(arr, 0, arr.length - 1);

console.log(arr);
```
