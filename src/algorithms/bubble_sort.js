const { setupRandomInput } = require('./setup_input');

// /////////////// 
// // bubble sort
// /////////////// 

// array creation
function runBubbleSort() {
  // let shuffledArr = [
  //   9,
  //   8,
  //   12,
  //   16,
  //   14,
  //   13,
  //   11,
  //   10,
  //   20,
  //   19,
  //   15,
  //   7,
  //   1,
  //   6,
  //   17,
  //   5,
  //   2,
  //   4,
  //   18,
  //   3
  // ];
  let shuffledArr = setupRandomInput(10);

  // this is our final input data
  let data = [];
  // this is our final input data

  // algorithm
  const bubbleSort = arr => {
    let sorted = false;

    while (!sorted) {
      sorted = true;

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          sorted = false;
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          let curState = [...arr];
          data.push(curState);
        }
      }
    }

    data.push(arr);
  };

  // invoke algorithm and create sorted states in a 2d array
  let t0 = performance.now();
  bubbleSort(shuffledArr);
  let t1 = performance.now();
  console.log(`bubbleSort took ${t1 - t0} milliseconds`);

  // data = [
  //   [4, 8, 7, 2, 3, 9, 10, 5, 1, 6],
  //   [4, 7, 8, 2, 3, 9, 10, 5, 1, 6],
  //   [4, 7, 2, 8, 3, 9, 10, 5, 1, 6],
  //   [4, 7, 2, 3, 8, 9, 10, 5, 1, 6],
  //   [4, 7, 2, 3, 8, 9, 10, 1, 5, 6],
  //   [4, 2, 7, 3, 8, 9, 10, 1, 5, 6],
  //   [4, 2, 3, 7, 8, 9, 10, 1, 5, 6],
  //   [4, 2, 3, 7, 8, 9, 1, 10, 5, 6],
  //   [4, 2, 3, 7, 8, 9, 1, 5, 10, 6],
  //   [4, 2, 3, 7, 8, 9, 1, 5, 6, 10],
  //   [2, 4, 3, 7, 8, 9, 1, 5, 6, 10],
  //   [2, 3, 4, 7, 8, 9, 1, 5, 6, 10],
  //   [2, 3, 4, 7, 8, 1, 9, 5, 6, 10],
  //   [2, 3, 4, 7, 8, 1, 5, 9, 6, 10],
  //   [2, 3, 4, 7, 8, 1, 5, 6, 9, 10],
  //   [2, 3, 4, 7, 1, 8, 5, 6, 9, 10],
  //   [2, 3, 4, 7, 1, 5, 8, 6, 9, 10],
  //   [2, 3, 4, 7, 1, 5, 6, 8, 9, 10],
  //   [2, 3, 4, 1, 7, 5, 6, 8, 9, 10],
  //   [2, 3, 4, 1, 5, 7, 6, 8, 9, 10],
  //   [2, 3, 4, 1, 5, 6, 7, 8, 9, 10],
  //   [2, 3, 1, 4, 5, 6, 7, 8, 9, 10],
  //   [2, 1, 3, 4, 5, 6, 7, 8, 9, 10],
  //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // ];


  ////////////////////////
  // d3.js
  ////////////////////////

  // setup

  let margin = { left: 0, right: 0, top: 0, bottom: 100 };
  let height = 500 - margin.top - margin.bottom;
  let width = 800 - margin.left - margin.right;

  let g = d3
    .select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  let time = 0;
  let iteration = 0;

  // Scales
  // let x = d3
  //   .scaleBand()
  //   .domain([0, data[0].length])
  //   .range([0, width])
  //   .padding(.1);
  let x = d3
    .scaleBand()
    // .domain([0, data[0].length])
    .range([0, width]);

  let y = d3
    .scaleLinear()
    .domain([0, data[0].length])
    .range([height, 0]);
  let area = d3
    .scaleLinear()
    .domain([0, data.length])
    .range([0, 10]);
  // let color = d3
  //   .scaleSequential(d3.interpolateViridis)
  //   .domain([0, data[0].length]);
  let color = d3
    .scaleSequential(d3.interpolateCubehelixDefault)
    .domain([0, data[0].length+1]);
  // let color = d3.scaleOrdinal(d3.schemePastel1);
  // let color = d3.scaleOrdinal([
  //   "#8dd3c7",
  //   "#ffffb3",
  //   "#bebada",
  //   "#fb8072",
  //   "#80b1d3",
  //   "#fdb462",
  //   "#b3de69",
  //   "#fccde5",
  //   "#d9d9d9",
  //   "#bc80bd",
  //   "#ccebc5",
  //   "#ffed6f"
  // ]);

  // // Labels
  // let xLabel = g
  //   .append("text")
  //   .attr("y", height + 50)
  //   .attr("x", width / 2)
  //   .attr("font-size", "20px")
  //   .attr("text-anchor", "middle")
  //   .text("order");
  // let yLabel = g
  //   .append("text")
  //   .attr("transform", "rotate(-90)")
  //   .attr("y", -40)
  //   .attr("x", -170)
  //   .attr("font-size", "20px")
  //   .attr("text-anchor", "middle")
  //   .text("value");
  let timeLabel = g
    .append("text")
    .attr("y", height + 60)
    .attr("x", width - 40)
    .attr("font-size", "40px")
    .attr("opacity", "0.4")
    .attr("text-anchor", "middle")
    .text("0");

  // // X Axis
  // let xAxisCall = d3
  //   .axisBottom(x);
  // g.append("g")
  //   .attr("class", "x axis")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(xAxisCall);

  // // Y Axis
  // let yAxisCall = d3.axisLeft(y).tickFormat(function(d) {
  //   return +d;
  // });
  // g.append("g")
  //   .attr("class", "y axis")
  //   .call(yAxisCall);

  // d3.data(data).then(function(data) {
  // Run the code every 0.1 second
  let interval = d3.interval(function() {
    // At the end of our data, loop back
    time = time < data.length ? time + 1 : 0;
    // iteration = iteration < data[0].length ? iteration + 1 : 0;
    // console.log(data);
    update(data[time]);
    if (time === data.length - 1) {
      interval.stop();
    }
  }, 250);

  // First run of the visualization
  update(data[0]);
  // });

  function update(curData) {
    console.log(curData);
    // Standard transition time for the visualization
    let t = d3.transition().duration(250);

    x.domain(curData);

    // JOIN new data with old elements.
    let rects = g.selectAll("rect").data(curData, function(d) {
      return d;
    });

    // EXIT old elements not present in new data.
    rects
      .exit()
      .attr("class", "exit")
      .remove();

    // ENTER new elements present in new data.
    // debugger
    rects
      .enter()
      .append("rect")
      .attr("class", "enter")
      .attr("fill", function(d) {
        return color(d);
      })
      .attr("x", function(d, i) {
        return x(i);
      })
      .attr("y", function(d, i) {
        // return 0;
        return y(d);
      })
      .merge(rects)
      .transition(t)
      .attr("y", function(d, i) {
        // return 0;
        return y(d);
      })
      .attr("x", function(d, i) {
        return x(i+1);
      })
      .attr("width", function(d) {
        return x.bandwidth();
        // return d;
      })
      .attr("height", function(d) {
        // return height;
        return height - y(d);
      });

    // Update the time label
    timeLabel.text(+time);
  }

  // console.log(data);
    
}

module.exports = {
  runBubbleSort: runBubbleSort
};
