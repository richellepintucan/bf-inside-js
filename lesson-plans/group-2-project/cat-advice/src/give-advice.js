import { readBoolean, display } from '../../../../../lib/dom-io.js';

import { webAdvisor } from './utils/cat-advisor.js';

// once when the script is loaded
debugger;

// declare the function to call each time a user clicks
const info = () => {
  // each time the user interacts
  debugger;

  // read the user's boolean input from the UI

  const frontend = readBoolean('frontend');
  const notGoodJs = readBoolean('notGoodJs');
  const html = readBoolean('html');

  // generate info

  const infoGeneral = webAdvisor(frontend, notGoodJs, html);

  // share your advice with the user

  display('message',infoGeneral);
};

// attach the event listener to call the function each time the user clicks
document.getElementById('info').addEventListener('click', info);
