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

  var g = d3
    .select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  var xAxisGroup = g
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")

  var yAxisGroup = g.append("g").attr("class", "y axis");

  // X Scale
  var x = d3
    .scaleBand()
    .range([0, width])
    .padding(0.2);

  // Y Scale
  var y = d3.scaleLinear().range([height, 0]);

  // X Label
  g.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Input size");

  // Y Label
  var yLabel = g
    .append("text")
    .attr("y", -60)
    .attr("x", -(height / 2))
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Time (milliseconds)");

  d3.json("data/sortData.json").then(function(data) {
    // console.log(data);

    d3.interval(function() {
      update(data);
      flag = !flag;
    }, 500);

    // Run the vis for the first time
    update(data);
  });

  function update(data) {
    // var value = flag ? "revenue" : "profit";

    x.domain(
      data['inputSize'].map(function(d) {
        return d;
      })
    );
    y.domain([
      0,
      d3.max(data["maxTime"], function(d) {
        return d;
      })
    ]);

    // X Axis
    var xAxisCall = d3.axisBottom(x);
    xAxisGroup.call(xAxisCall);

    // Y Axis
    var yAxisCall = d3.axisLeft(y).tickFormat(function(d) {
      return d;
    });
    yAxisGroup.call(yAxisCall);


    let bubbleData = data["bubbleSort"];
    console.log(bubbleData)

    let lineGenerator = d3.line();
    let pathString = lineGenerator(bubbleData);

    d3.select('path')
      .attr('d', pathString)
      .attr('class', 'line__bubble');

    // JOIN new data with old elements.
    var rects = g.selectAll("rect").data(data);

    // EXIT old elements not present in new data.
    rects.exit().remove();

    // UPDATE old elements present in new data.
    rects
      .attr("y", function(d) {
        return y(d["maxTime"]);
      })
      .attr("x", function(d, i) {
        return 20 * i;
      })
      .attr("height", function(d) {
        return height;
        // return height - y(d['maxTime']);
      })
      .attr("width", x.bandwidth);

    // ENTER new elements present in new data.
    rects
      .enter()
      .append("rect")
      .attr("y", function(d) {
        return y(d['inputSize']);
      })
      .attr("x", function(d, i) {
        return x(d[i]);
        return 20 * i;
      })
      .attr("height", function(d) {
        return height - y(d['inputSize']);
        return height;
      })
      .attr("width", x.bandwidth)
      .attr("fill", "grey");

    // var label = flag ? "Revenue" : "Profit";
    // yLabel.text(label);
  }
}


module.exports = {
  generateChart: generateChart
}