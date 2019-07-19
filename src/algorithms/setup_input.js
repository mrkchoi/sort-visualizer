function setupRandomInput(inputSize) {
  let arr = [];
  for (let i = 1; i <= inputSize; i++) {
    arr.push(i);
  }

  // shuffle setup
  function shuffle(arr) {
    let len = arr.length - 1;
    let temp;
    let idx;

    while (len > 0) {
      idx = Math.floor(Math.random() * len);
      temp = arr[len];
      arr[len] = arr[idx];
      arr[idx] = temp;
      len -= 1;
    }

    return arr;
  }

  return shuffle(arr);
}

module.exports = {
  setupRandomInput: setupRandomInput
};
