// import regeneratorRuntime from "regenerator-runtime";
import _ from 'lodash';
import './d3.js';

// import './visualize/sort';

// import { runBubbleSort } from './algorithms/bubble_sort.js';
// import './algorithms/merge_sort';
// import './algorithms/bubble_sort';

// import './algorithms/quick_sort';

// import { setupRandomInput } from './algorithms/setup_input';
// import './test/test.js';
// import './test/starbreak.js';
// import './test/gapminder.js';
// import './algorithms/quick_sort';
// import './algorithms/big_o_chart';
// import './algorithms/all_sorts';
// import { generateChart } from './algorithms/big_o_chart';
// import { generateChart } from './algorithms/big_o_chart-test';
import { generateBubbleChart } from './graph/bubble_chart';
import './graph/gdp';


// let bubbleSortBtn = document.querySelector('.btn__bubblesort');
// bubbleSortBtn.addEventListener('click', handleSortClick);

let svgCanvas = document.querySelector('#chart-area');

document.addEventListener('DOMContentLoaded', () => {
//     generateChart();
  // console.log(setupRandomInput(10)); 
  generateBubbleChart();

});


// function handleSortClick(e) {
//   e.preventDefault();

//   // reset svg canvas
//   svgCanvas.innerHTML = '';

//   console.log("clicked!");
  
//   // run sort
//   let targetClassList = e.target.classList;
//   if (targetClassList.contains("btn__bubblesort")) {
//     // generateBubbleChart();
//     // generateChart();
//     // runBubbleSort();
//   } else if (targetClassList.contains("btn__quicksort")) {
//     // runQuickSort();
//   } else if (targetClassList.contains("btn__mergesort")) {
//     // runMergeSort();
//   }
// }


// console.log(setupRandomInput (20));




// import { setupRandomInput } from "./algorithms/setup_input";

// let arr = setupRandomInput(10);

// let data = [arr];

// function qs(arr, leftPrint = [], pivotPrint = 0, rightPrint = []) {
//   if (arr.length < 2) {
//     // check if left or right is empty
//     // debugger
//     data.push(leftPrint.concat([pivotPrint]).concat(rightPrint));
//     return arr;
//   }

//   let pivot = arr[0];
//   let left = arr.slice(1).filter(el => el < pivot);
//   let right = arr.slice(1).filter(el => el >= pivot);



//   leftPrint = left;
//   pivotPrint = pivot;
//   rightPrint = right;
//   left = qs(left, leftPrint, pivotPrint, rightPrint);

//   // leftPrint = left;
//   // pivotPrint = pivot;
//   // rightPrint = rightPrint;  
//   right = qs(right, leftPrint, pivotPrint, rightPrint);
  
//   data.push(leftPrint.concat([pivot]).concat(rightPrint));
//   return left.concat([pivot]).concat(right);
// }

// console.log(qs(arr));
// console.log(data);

