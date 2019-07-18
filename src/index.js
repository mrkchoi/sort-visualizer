import _ from 'lodash';
import { message } from './test/test';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  message();

  return element;
}

document.body.appendChild(component());
