module.exports.generateBubbleChart = function() {
  var margin = { left: 80, right: 20, top: 50, bottom: 100 };
  var height = 500 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;

  var g = d3
    .select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

  var time = 0;

  // Scales
  var x = d3
    .scaleLinear()
    .range([0, width])
    .domain([1, 5000]);
  var y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
  var area = d3
    .scaleLinear()
    .range([0, 100])
    .domain([0, 80]);
  var sortColor = d3.scaleOrdinal(d3.schemePastel1);

  // Labels
  var xLabel = g
    .append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Input size");
  var yLabel = g
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -40)
    .attr("x", -170)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Computation (time in ms)");
  var timeLabel = g
    .append("text")
    .attr("y", height - 10)
    .attr("x", width - 40)
    .attr("font-size", "40px")
    .attr("opacity", "0.4")
    .attr("text-anchor", "middle")
    .text("0");

  // X Axis
  var xAxisCall = d3
    .axisBottom(x)
    .tickValues([0, 1000, 2000, 3000, 4000, 5000]);
  g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxisCall);

  // Y Axis
  var yAxisCall = d3.axisLeft(y).tickFormat(function(d) {
    return +d;
  });
  g.append("g")
    .attr("class", "y axis")
    .call(yAxisCall);

    let sortNames = [
      "bubble sort",
      "selection sort",
      "insertion sort",
      "radix sort",
      "heap sort",
      "quick sort",
      "merge sort",
      "shell sort"
    ];

  let legend = g
    .append("g")
    .attr("transform", `translate(${width - 10}, ${height - 225})`);

  sortNames.forEach(function(sort, i) {
    let legendRow = legend
      .append("g")
      .attr("transform", `translate(0, ${i * 20})`);

    legendRow
      .append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", sortColor(sort));
    legendRow
      .append("text")
      .attr("x", -10)
      .attr("y", 10)
      .attr("text-anchor", "end")
      .style("text-transform", "capitalize")
      .text(sort);
  });

  d3.json("data/allSortData.json").then(function(data) {
    console.log(data);

    // let formattedData = data.map(function(inputSize) {
      // debugger
    //   console.log(inputSize.sorts);
    //   return inputSize.sorts;
    // })
    // Run the code every 0.1 second
    d3.interval(function() {
      // At the end of our data, loop back
      time = time < 5000 ? time + 10 : 0;
      update(data[time/10]);
    }, 25);

    // First run of the visualization
    update(data[0]);
  });

  function update(data) {
    // debugger

    // y.domain(data.currentMaxTime);
    // debugger;

    let formattedData = data["sorts"];
    // Standard transition time for the visualization
    var t = d3.transition().duration(25);

    // JOIN new data with old elements.
    // debugger
    var circles = g.selectAll("circle").data(formattedData, function(d) {
      return d["sort"];
    });

    // debugger;
    // EXIT old elements not present in new data.
    circles
      .exit()
      .attr("class", "exit")
      .remove();

    // ENTER new elements present in new data.
    circles
      .enter()
      .append("circle")
      .attr("class", "enter")
      .attr("fill", function(d) {
        return sortColor(d.sort);
      })
      .merge(circles)
      .transition(t)
      .attr("cy", function(d) {
        return y(d["time"]);
      })
      .attr("cx", function(d) {
        // debugger
        return x(d["inputSize"]);
      })
      .attr("r", function(d) {
        // debugger;
        return 5;
        // return Math.sqrt(area(d.time * 100) / Math.PI);
      });
// debugger;
    // Update the time label
    timeLabel.text(+(time));
  }
};
