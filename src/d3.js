
// D3 test
// d3.selectAll('p').style('color', 'darkblue');

// let fruits = ['apple', 'mango', 'banana', 'orange'];

// d3.select('ul')
//   .selectAll('li')
//   .data(fruits)
//   .enter()
//   .append('li')
//   .text(d => d)

  // let svg = d3.select('svg');

  // svg.append('rect')
  //   .attr('x', 50)
  //   .attr('y', 50)
  //   .attr('width', 200)
  //   .attr('height', 100)
  //   .attr('fill', 'green');

////////////////////////
// Bar chart
////////////////////////

// let data = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// data = data.map(el => el / 10);

// let svgWidth = 500;
// let svgHeight = 300;
// let barPadding = 5;

// let barWidth = svgWidth / data.length;

// let svg = d3.select('#svg1')
//   .attr('width', svgWidth)
//   .attr('height', svgHeight);

// let yScale = d3.scaleLinear()
//   .domain([0, d3.max(data)])
//   .range([0, svgHeight]);

// let barChart = svg.selectAll('rect')
//   .data(data)
//   .enter()
//   .append('rect')
//   .attr('y', function(d) {
//     return svgHeight - yScale(d);
//   })
//   .attr('height', function(d) {
//     return yScale(d);
//   })
//   .attr('width', barWidth - barPadding)
//   .attr('class', 'bar')
//   .attr('transform', function(d, i) {
//     let translate = [barWidth * i, 0];
//     return `translate(${translate})`;
//   });

// let text = svg.selectAll('text')
//   .data(data)
//   .enter()
//   .append("text")
//   .text(function(d) {
//     return d;
//   })
//   .attr('y', function(d, i) {
//     return svgHeight - d - 2;
//   })
//   .attr('x', function(d, i) {
//     return barWidth * i;
//   })
//   .attr('fill', '#A64C38');



// ////////////////////////
// // Shapes
// ////////////////////////

// let shapesContainer = d3.select('#svg2')