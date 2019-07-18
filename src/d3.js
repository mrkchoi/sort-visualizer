
// D3 test
d3.selectAll('p').style('color', 'darkblue').style('font-size', '24px');

let fruits = ['apple', 'mango', 'banana', 'orange'];

d3.select('ul')
  .selectAll('li')
  .data(fruits)
  .enter()
  .append('li')
  .text(d => d)

  // let svg = d3.select('svg');

  // svg.append('rect')
  //   .attr('x', 50)
  //   .attr('y', 50)
  //   .attr('width', 200)
  //   .attr('height', 100)
  //   .attr('fill', 'green');

let data = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 500;
let svgHeight = 300;
let barPadding = 5;

let barWidth = svgWidth / data.length;

let svg = d3.select('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

let barChart = svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('y', function(d) {
    return svgHeight - d
  })
  .attr('height', function(d) {
    return d;
  })
  .attr('width', barWidth - barPadding)
  .attr('class', 'bar')
  .attr('transform', function(d, i) {
    let translate = [barWidth * i, 0];
    return `translate(${translate})`;
  });

let text = svg.selectAll('text')
  .data(data)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr('y', function(d, i) {
    return svgHeight - d - 2;
  })
  .attr('x', function(d, i) {
    return barWidth * i;
  })
  .attr('fill', '#A64C38');