import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let num1 = readNumber('left');
  console.log(num1);
  let num2 = readNumber('right');
  console.log(num2);
  let result;

  // use a for loop to multiply the two numbers
result = num1 * num2;
  // display the product
  display('product', +result);
});
