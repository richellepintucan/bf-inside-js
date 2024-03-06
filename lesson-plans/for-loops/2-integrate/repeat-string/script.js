import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  let userInput = readString('user-text');
  let numOfTimes = readNumber('number-of-times');
  let repeatString = '';

  // repeat the string
for (let i = 0 ; i < numOfTimes; i++) {
  for (let j = 0; j < numOfTimes; j++ ) {
  repeatString = repeatString + userInput;
}

  // display the repeated string
  display('repeated-output', repeatString);
});
