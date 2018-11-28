import './index.css';
import { Rx, RxOper, log } from "../common/util";
import { InitApp } from '../common/app';
import { generateLangs } from '../common/i18n';
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import home from './home';

const dependencies = [
  'ngRoute',
  home.name,
];

const clicks = Rx.fromEvent(document, 'click');
clicks.pipe(
  RxOper.throttleTime(1000),
  RxOper.scan(count => count + 1, 0)
).subscribe(count => log(`Clicked ${count} times`));

const app = InitApp(generateLangs(enUS, zhCN), dependencies, home.page);

// app.set

export default app;
