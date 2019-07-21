const sorter = require("sort-algorithms-js");
const jssort = require("js-sorting-algorithms");
// import { setupRandomInput } from '../algorithms/setup_input';
const { PerformanceObserver, performance } = require("perf_hooks");
let fs = require('fs');

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
  // let allSorts = {
  //   inputSize: [],
  //   maxTime: [],
  //   bubbleSort: [],
  //   selectionSort: [],
  //   insertionSort: [],
  //   radixSort: [],
  //   heapSort: [],
  //   quickSort: [],
  //   mergeSort: [],
  //   shellSort: []
  // };

let allData = [];



function createResultsObjects() {
  let inputSizes = [];

  for (let i = 10; i <= 5000; i += 10) {
    inputSizes.push(i);
  }

  

  for (let i = 0; i < inputSizes.length; i++) {
    allData.push(runAllSorts(inputSizes[i]));
  }

  return allData;
}

// console.log(createResultsObjects());
let res = createResultsObjects();
fs.writeFile("allSortData.json", JSON.stringify(res), function(err) {
  if (err) {
    console.log(err);
  }
});

function runAllSorts(inputSize) {
  let currentData = {
    "sorts": [],
    "inputSize": inputSize
  };

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


  // Format data shape

  let sortNames = [
    'bubble sort',
    'selection sort',
    'insertion sort',
    'radix sort',
    'heap sort',
    'quick sort',
    'merge sort',
    'shell sort'
  ];
  let allTimes = [
    timeBubble,
    timeSelection,
    timeInsertion,
    timeRadix,
    timeHeap,
    timeQuick,
    timeMerge,
    timeShell
  ];

  sortNames.forEach((name, idx) => {
    currentData["sorts"].push(
      {
        "sort": sortNames[idx],
        "time": allTimes[idx],
        "inputSize": inputSize
      }
    );
  });

  let currentMaxTime = Math.max(...allTimes);

  currentData["currentMaxTime"] = currentMaxTime;


  return currentData;
}

// runAllSort(6000);

