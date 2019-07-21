const sorter = require("sort-algorithms-js");
const jssort = require("js-sorting-algorithms");
// import { setupRandomInput } from '../algorithms/setup_input';
// const { PerformanceObserver, performance } = require("perf_hooks");
// let fs = require('fs');

const setupRandomInput = function(inputSize) {
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
};

// module.exports.runAllSorts = function(input) {

  let allSorts = {
    inputSize: [],
    maxTime: [],
    bubbleSort: [],
    selectionSort: [],
    insertionSort: [],
    radixSort: [],
    heapSort: [],
    quickSort: [],
    mergeSort: [],
    shellSort: []
  };

function createResultsObjects() {
  let sizes = [10, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 800, 900, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4250, 4500, 4750, 5000, 5250, 5500, 5750, 6000];

  for (let i = 0; i < sizes.length; i++) {
    runAllSorts(sizes[i], sizes);
  }

  return allSorts;
}

// console.log(createResultsObjects());
// let res = createResultsObjects();
// fs.writeFile("sortData.json", JSON.stringify(res), function(err) {
//   if (err) {
//     console.log(err);
//   }
// });

function runAllSorts(inputSize, sizes) {
  let times = [];
  allSorts.inputSize.push(inputSize);

  let randommizedInput = setupRandomInput(inputSize);

  // bubble sort
  let t0Bubble = performance.now();
  sorter.bubbleSort(
    randommizedInput
  );
  let t1Bubble = performance.now();
  let timeBubble =
    t1Bubble -
    t0Bubble;

  // console.log(
  //   `bubbleSort took: ${timeBubble} milliseconds`
  // );

  // selection sort
  let t0Selection = performance.now();
  sorter.selectionSort(
    randommizedInput
  );
  let t1Selection = performance.now();
  let timeSelection =
    t1Selection -
    t0Selection;

  // console.log(
  //   `selectionSort took: ${timeSelection} milliseconds`
  // );

  // insertion sort
  let t0Insertion = performance.now();
  sorter.insertionSort(
    randommizedInput
  );
  let t1Insertion = performance.now();
  let timeInsertion =
    t1Insertion -
    t0Insertion;

  // console.log(
  //   `insertionSort took: ${timeInsertion} milliseconds`
  // );

  // radix sort
  let t0Radix = performance.now();
  sorter.radixSort(
    randommizedInput
  );
  let t1Radix = performance.now();
  let timeRadix =
    t1Radix -
    t0Radix;

  // console.log(
  //   `radixSort took: ${timeRadix} milliseconds`
  // );

  // // heap sort
  let t0Heap = performance.now();
  jssort.heapSort(
    randommizedInput
  );
  let t1Heap = performance.now();
  let timeHeap =
    t1Heap -
    t0Heap;

  // console.log(
  //   `heapSort took: ${timeHeap} milliseconds`
  // );

  // quick sort
  let t0Quick = performance.now();
  sorter.quickSort(
    randommizedInput
  );
  let t1Quick = performance.now();
  let timeQuick =
    t1Quick -
    t0Quick;

  // console.log(
  //   `quickSort took: ${timeQuick} milliseconds`
  // );

  // merge sort
  let t0Merge = performance.now();
  sorter.mergeSort(
    randommizedInput
  );
  let t1Merge = performance.now();
  let timeMerge =
    t1Merge -
    t0Merge;

  // console.log(
  //   `mergeSort took: ${timeMerge} milliseconds`
  // );

  // shell sort
  let t0Shell = performance.now();
  jssort.shellSort(
    randommizedInput
  );
  let t1Shell = performance.now();
  let timeShell =
    t1Shell -
    t0Shell;

  // console.log(
  //   `shellSort took: ${timeShell} milliseconds`
  // );

  times.push(
    timeBubble,
    timeSelection,
    timeInsertion,
    timeRadix,
    timeHeap,
    timeQuick,
    timeMerge,
    timeShell
  );

  let max = Math.max(...times);

  allSorts.maxTime.push(max);
  allSorts.bubbleSort.push([inputSize, timeBubble]);
  allSorts.selectionSort.push(inputSize, timeSelection);
  allSorts.insertionSort.push(inputSize, timeInsertion);
  allSorts.radixSort.push(inputSize, timeRadix);
  allSorts.heapSort.push(inputSize, timeHeap);
  allSorts.quickSort.push(inputSize, timeQuick);
  allSorts.mergeSort.push(inputSize, timeMerge);
  allSorts.shellSort.push(inputSize, timeShell);

  return allSorts;
}

// runAllSort(6000);

