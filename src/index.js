import _ from 'lodash';
import './d3.js';
import { runBubbleSort } from './algorithms/bubble_sort.js';
import './algorithms/quick_sort';

// import './test/test.js';
// import './test/starbreak.js';
// import './test/gapminder.js';

let bubbleSortBtn = document.querySelector('.btn__bubblesort');
bubbleSortBtn.addEventListener('click', handleSortClick);

let svgCanvas = document.querySelector('#chart-area');

function handleSortClick(e) {
  e.preventDefault();

  // reset svg canvas
  svgCanvas.innerHTML = '';

  console.log("clicked!");
  
  // run sort
  let targetClassList = e.target.classList;
  if (targetClassList.contains("btn__bubblesort")) {
    runBubbleSort();
  } else if (targetClassList.contains("btn__quicksort")) {
    // runQuickSort();
  } else if (targetClassList.contains("btn__mergesort")) {
    // runMergeSort();
  }
}