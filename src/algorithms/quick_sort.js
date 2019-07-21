
import { setupRandomInput } from './setup_input';


let arr = setupRandomInput(1000);
// console.log(arr);




function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  let left = arr.slice(1).filter(el => el < pivot);
  let right = arr.slice(1).filter(el => el >= pivot);
  left = quickSort(left);
  right = quickSort(right);

  return left.concat([pivot]).concat(right);
};

let t0 = performance.now();
quickSort(arr);
let t1 = performance.now();
console.log(`quickSort took ${t1 -t0} milliseconds`);


// (function quickSortSetup() {
//   var n = 120,
//     array = d3.shuffle(d3.range(n));

//   var margin = { top: 60, right: 60, bottom: 60, left: 60 },
//     width = 960 - margin.left - margin.right,
//     height = 180 - margin.top - margin.bottom;

//   var x = d3.scalePoint()
//     .domain(d3.range(n))
//     .range([0, width]);

//   var a = d3.scaleLinear()
//     .domain([0, n - 1])
//     .range([-45, 45]);

//   var p = d3.select("#quicksort").on("click", click);

//   var svg = p
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   var gLine = svg.append("g").attr("class", "line");

//   gLine
//     .selectAll("line")
//     .data(array)
//     .enter()
//     .append("line")
//     .attr("class", "line--inactive")
//     .attr("transform", transform)
//     .attr("y2", -height);

//   p.append("button").text("▶ Play");

//   // whenFullyVisible(p.node(), click);

//   function click() {
//     var actions = quicksort(array.slice()).reverse();

//     var line = gLine
//       .selectAll("line")
//       .attr("transform", transform)
//       .attr("class", "line--inactive")
//       .interrupt();

//     var transition = svg
//       .transition()
//       .duration(150)
//       .each("start", function start() {
//         var action = actions.pop();
//         switch (action.type) {
//           case "swap": {
//             var i = action[0],
//               j = action[1],
//               li = line[0][i],
//               lj = line[0][j];
//             line[0][i] = lj;
//             line[0][j] = li;
//             transition.each(function() {
//               line.transition().attr("transform", transform);
//             });
//             break;
//           }
//           case "partition": {
//             line.attr("class", function(d, i) {
//               return i === action.pivot
//                 ? "line--active"
//                 : action.left <= i && i < action.right
//                 ? "line--inactive"
//                 : null;
//             });
//             break;
//           }
//         }
//         if (actions.length)
//           transition = transition.transition().each("start", start);
//         else
//           transition.each("end", function() {
//             line.attr("class", "line--inactive");
//           });
//       });
//   }

//   function transform(d, i) {
//     return "translate(" + x(i) + "," + height + ")rotate(" + a(d) + ")";
//   }

//   function quicksort(array) {
//     var actions = [];

//     function partition(left, right, pivot) {
//       var v = array[pivot];
//       swap(pivot, --right);
//       for (var i = left; i < right; ++i) if (array[i] < v) swap(i, left++);
//       swap(left, right);
//       return left;
//     }

//     function swap(i, j) {
//       if (i === j) return;
//       var t = array[i];
//       array[i] = array[j];
//       array[j] = t;
//       actions.push({ type: "swap", "0": i, "1": j });
//     }

//     function recurse(left, right) {
//       if (left < right - 1) {
//         var pivot = (left + right) >> 1;
//         actions.push({
//           type: "partition",
//           left: left,
//           pivot: pivot,
//           right: right
//         });
//         pivot = partition(left, right, pivot);
//         recurse(left, pivot);
//         recurse(pivot + 1, right);
//       }
//     }

//     recurse(0, array.length);
//     return actions;
//   }
// })();
