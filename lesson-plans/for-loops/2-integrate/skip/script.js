import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  let skip = readNumber('skip-size');
  let userInput = readString('user-text'); 
  let result = '';


  // create a new string with skipped characters
  for (let i = 0; i < userInput.length; i = i + skip) {
    result = result + userInput[i];
  }

  // display the skipped string
  display('skipped-output', result)
});
