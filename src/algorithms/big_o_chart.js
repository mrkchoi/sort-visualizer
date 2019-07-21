// import { runAllSorts } from "./all_sorts";
// import { setupRandomInput } from "./setup_input";

// let inputs = setupRandomInput(6000);
// let data = runAllSorts(inputs);
// console.log(data);

function generateChart() {
  // let inputs = setupRandomInput(6000);
  // let data = runAllSorts(inputs);
  // console.log(data);

  ////////////////////////
  // d3.js
  ////////////////////////

  var margin = { left: 80, right: 20, top: 50, bottom: 100 };

  var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  var flag = true;

  // var g = d3
  //   .select("#chart-area")
  //   .append("svg")
  //   .attr("width", width + margin.left + margin.right)
  //   .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //   .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  // var xAxisGroup = g
  //   .append("g")
  //   .attr("class", "x axis")
  //   .attr("transform", "translate(0," + height + ")");

  // var yAxisGroup = g.append("g").attr("class", "y axis");

  // // X Scale
  // var x = d3.scaleLinear().range([0, width]);

  // // Y Scale
  // var y = d3.scaleLinear().range([height, 0]);

  // var g = d3
  //   .select("#chart-area")
  //   .append("svg")
  //   .attr("width", width + margin.left + margin.right)
  //   .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //   .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  // // X Label
  // g.append("text")
  //   .attr("y", height + 50)
  //   .attr("x", width / 2)
  //   .attr("font-size", "20px")
  //   .attr("text-anchor", "middle")
  //   .text("Input size");

  // // Y Label
  // var yLabel = g
  //   .append("text")
  //   .attr("y", -60)
  //   .attr("x", -(height / 2))
  //   .attr("font-size", "20px")
  //   .attr("text-anchor", "middle")
  //   .attr("transform", "rotate(-90)")
  //   .text("Time (milliseconds)");

  d3.json("data/sortData.json").then(function(data) {
    let bubbleData = data["bubbleSort"];
    console.log(bubbleData);
    // debugger
    let count = 0;
    let interval = d3.interval(function() {
      update(bubbleData);
      flag = !flag;
      count += 1;
      if (count === bubbleData.length) {
        interval.stop();
        return;
      }
    }, 500);


    // Run the vis for the first time
    update(bubbleData);
  });

  function update(data) {
    // // var value = flag ? "revenue" : "profit";

    // x.domain([0, d3.max(data, d => d[0])]);
    // y.domain([0, d3.max(data, d => d[1])]);

    // // X Axis
    // var xAxisCall = d3.axisBottom(x);
    // xAxisGroup.call(xAxisCall);

    // // Y Axis
    // var yAxisCall = d3.axisLeft(y).tickFormat(function(d) {
    //   return d;
    // });
    // yAxisGroup.call(yAxisCall);

    // let lineGenerator = d3.line();
    // let pathString = lineGenerator(data);

    // g.append('path')
    //   .attr('d', pathString);

    // // g.append("svg:path").attr('d', line(data));
    // // let pathString = lineGenerator(data);

    // // d3.select("path")
    // //   .attr("d", lineGenerator)
    // //   .attr("class", "line__bubble");

    // // 2. Use the margin convention practice
    // var margin = { top: 50, right: 50, bottom: 50, left: 50 },
    //   width = window.innerWidth - margin.left - margin.right, // Use the window's width
    //   height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

    // The number of datapoints
    var n = data.length;
    console.log(data);

    // 5. X scale will use the index of our data
    var xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d[0])]) // input
      .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d[1])]) // input
      .range([height, 0]); // output

    // 7. d3's line generator
    var line = d3
      .line()
      .x(function(d, i) {
        return xScale(d[0]);
      }) // set the x values for the line generator
      .y(function(d) {
        return yScale(d[1]);
      }) // set the y values for the line generator
      .curve(d3.curveMonotoneX); // apply smoothing to the line

    // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset = data;

    // 1. Add the SVG to the page and employ #2
    var svg = d3
      .select("#chart-area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // 3. Call the x axis in a group tag
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    svg
      .append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft




    // var g = d3
    //   .select("#chart-area")
    //   .append("svg")
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    // X Label
    svg.append("text")
      .attr("y", height + 50)
      .attr("x", width / 2)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .text("Input size");

    // Y Label
    svg.append("text")
      .attr("y", -60)
      .attr("x", -(height / 2))
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Time (milliseconds)");





    // 9. Append the path, bind the data, and call the line generator
    svg
      .append("path")
      .datum(data) // 10. Binds data to the line
      .attr("class", "line") // Assign a class for styling
      .attr("d", line); // 11. Calls the line generator

    // 12. Appends a circle for each datapoint
    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d, i) {
        return xScale(d[0]);
      })
      .attr("cy", function(d) {
        return yScale(d[1]);
      })
      .attr("r", 2);
  }
}

module.exports = {
  generateChart: generateChart
};
