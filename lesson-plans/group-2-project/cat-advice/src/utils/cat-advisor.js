/**
 *
 * @param {boolean} frontend
 * @param {boolean} notGoodJs
 * @param {boolean} html
 * @returns {boolean}
 */
export const webAdvisor = (frontend, notGoodJs, html) => {
  debugger;
  return frontend && notGoodJs && html
    ? 'follow web develepment course of your choice'
    : frontend && notGoodJs && !html
    ? 'learn the basics of  HTML, CSS and Javascript'
    : frontend && !notGoodJs && html
    ? 'learn js on Youtube'
    : frontend && !notGoodJs && !html
    ? 'You need to start learning the basics'
    : !frontend && notGoodJs && html
    ? 'you can try backend develepment'
    : !frontend && notGoodJs && !html
    ? 'you can try other programming learning'
    : !frontend && !notGoodJs && html
    ? 'learning python'
    : // !frontend && !notGoodJs && !html
      'you are doing great';
};
