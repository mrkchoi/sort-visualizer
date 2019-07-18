///////////////
//  input
/////////////// 
// let array = new Array(20)


/////////////// 
// test case
/////////////// 
// bubbleSort([10,9,8,7,6,5,4,3,2,1]) => 
// [1,2,3,4,5,6,7,8,9,10]


let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let sortStates = [arr];


/////////////// 
// bubble sort algorithm
/////////////// 
const bubbleSort = arr => {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        let curState = [...arr];
        sortStates.push(curState);
      }
    }
  }
  sortStates.push(arr);
};


bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);



/////////////// 
// output
/////////////// 

// // console.log(sortStates);
// sortStates.forEach(state => {
//   // console.log(state);
//   let spans = d3.selectAll('span')
//     .data(state)
//     .enter()
//     .text(d => d)
//   // let bubblesort = 
// });

let spans = d3.select('p')
  .selectAll('span')
  .data([1,2,3,4,5,6,7,8,9,10])
  .enter()
  .text(d => d)