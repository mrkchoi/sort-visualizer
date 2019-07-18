// import '../data/ages.csv';

let margin = { left: 100, right: 10 ,top: 10, bottom: 150};
let width = 900 - margin.left - margin.right;
let height = 600 - margin.top - margin.bottom;

let svg = d3.select('#chart-area').append('svg')
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

let g = svg.append('g')
  .attr("transform", `translate(${margin.left}, ${margin.top})`)

let colors = ['blue', 'green', 'redorange', 'pink', 'gray', 'orange', 'red'];

d3.json('../dist/data/buildings2.json').then(data => {
  data.forEach(datum => {
    datum.height = +datum.height
  })
  console.log(data);

  let x = d3.scaleBand()
    .domain(data.map(d => {
      return d.name;
    }))
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  let y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) {
      return d.height;
    })])
    .range([0, height]);

  let leftAxis = d3.axisLeft(y)
    .ticks(20);
  g.append('g')
    .attr('class', 'left-axis')
    .call(leftAxis);

  let bottomAxis = d3.axisBottom(x);
  g.append('g')
    .attr('class', 'bottom-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(bottomAxis)
    .selectAll("text")
      .attr("y", 10)
      .attr("x", -5)
      .attr("text-anchor", 'end')
      .attr('transform', 'rotate(-40)');

  let rects = g.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', 0)
    .attr("x", function(d) {
      return x(d.name);
    })
    .attr('width', x.bandwidth())
    .attr('height', function(d, i) {
      return y(d.height);
    })
    .attr('fill', function(d, i) {
      let colorMaxIdx = colors.length - 1;

      return colors[(i % colorMaxIdx)];
    })

}).catch(err => console.log(err));




// CIRCLES
// let circle = svg.append('circle')
//   .attr("cx", 100)
//   .attr("cy", 250)
//   .attr("r", 70)
//   .attr("fill", 'gray')

// d3.csv('../dist/data/ages.csv').then(function(data) {
  
//   data.forEach(function(d) {
//     d.age = +d.age;
//   })
//   console.log(data);

//   let circles = svg.selectAll('circle')
//     .data(data);

//   circles.enter()
//     .append('circle')
//     .attr('cx', function(d, i) {
//       return i * 50 + 100;
//     })
//     .attr('cy', function(d, i) {
//       return i * 50 + 100;
//     })
//     .attr("r", function(d, i) {
//       // console.log(d.age);
//       return d.age * 3;
//     })
//     .attr('fill', function (d, i) {
//       return colors[i];
//     });

// }).catch(function(err) {
//   console.log(err);
// });



// CIRCLES
// let data = [25, 20, 10, 12, 15, 25, 20, 10, 12, 15, 25, 20, 10, 12, 15];
// let colors = ['blue', 'green', 'redorange', 'pink', 'gray'];
// let svg = d3.select("#chart-area")
//   .append('svg')
//   .attr('width', 500)
//   .attr('height', 500);

// let circles = svg.selectAll('circle')
//   .data(data);

// circles.enter()
//   .append('circle')
//     .attr('cx', function(d, i) {
//       return d * 10;
//     })
//     .attr('cy', function(d, i) {
//       return d * 10;
//     })
//     .attr("r", function(d, i) {
//       return d * 3;
//     })
//     .attr('stroke', function(d, i) {
//       return colors[i]
//     })