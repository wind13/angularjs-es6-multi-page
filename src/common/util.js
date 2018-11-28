/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */

export const Ramda = R;

export const Ng = angular;

export const Rx = rxjs;

export const RxOper = rxjs.operators;

export const log = function (msg) {
  console.log(msg);
}

export const greetings = 'Hello from.. util!';

/**
 * camelCaseToDash('userId') => "user-id"
 * camelCaseToDash('waitAMoment') => "wait-a-moment"
 * camelCaseToDash('TurboPascal') => "turbo-pascal"
 */
export function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

/**
 * This version will handle imperfect camel case/pascal case with multiple capital letters in a row
 * @param {string} str 
 */
export function camelCaseToDashAdv(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([0-9])([^0-9])/g, '$1-$2')
    .replace(/([^0-9])([0-9])/g, '$1-$2')
    .replace(/-+/g, '-')
    .toLowerCase();
}

export const generateTemplate = (camelCaseName, properties = []) => {
  const tag = camelCaseToDash(camelCaseName);
  const props = Ramda.join('', Ramda.map(o => {
    return ' ' + o.prop + '="' + o.value + '"';
  }, properties));
  return '<' + tag + props + '></' + tag + '>';
}
