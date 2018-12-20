import './index.css';
import { InitApp } from '../common/app';
import { generateLangs } from '../common/i18n';
import enUS from './languages/en-US.json';
import zhCN from './languages/zh-CN.json';
import user from './user';

const dependencies = [user.name];

const app = InitApp(generateLangs(enUS, zhCN), dependencies, user.page);

export default app;
