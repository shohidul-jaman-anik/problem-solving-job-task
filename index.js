function rotateLeft(arr, n) {
    for (let i = 0; i < n; i++) {
      let temp = arr.shift();
      arr.push(temp);
    }
    return arr;
  }
  let ans=rotateLeft([1, 2, 3, 4, 5], 4);
  console.log(ans);
