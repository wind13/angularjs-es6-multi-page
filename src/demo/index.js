import { InitApp } from '../common/app';
import { greetings, log, Ramda } from '../common/util';
import printMe from './print';
import { cube } from './math';
import './index.css';

log('Welcome to new modern web world. This is from index.js.');
if (process.env.NODE_ENV !== 'production') {
    log('Looks like we are in development mode!');
}

log(greetings);
log('greetings...');

var arr = [1, 2, 3];
Ramda.forEach(function (val) {
    log('Output from Ramda Ramda.forEach for Element ' + val);
}, arr);

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = Ramda.join(' ', ['Hello', 'webpack']);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    // btn.onclick = () => import(/* webpackChunkName: "print" */ './print').then(module => {
    //     var print = module.default;
    //     print();
    // });

    element.appendChild(btn);

    var br = document.createElement('br');
    element.appendChild(br);

    var cubeDiv = document.createElement('div');
    cubeDiv.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n<br/>\n');

    element.appendChild(cubeDiv);

    return element;
}

const app = InitApp();

document.body.appendChild(component());

export default app;