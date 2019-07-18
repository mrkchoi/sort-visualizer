import _ from 'lodash';
import './d3.js';
import './algorithms/bubble_sort.js';
import './test/test.js';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());




