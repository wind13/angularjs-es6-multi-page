import { LANG_EN_US, LANG_ZH_CN } from '../common/i18n';
import './home-page.pcss';
import template from './home-page.html';

const name = 'homePage';

const bindings = {};

const controller = function ($route, $routeParams, $location, $translate, $sce) {
  'ngInject';
  this.$route = $route;
  this.$location = $location;
  this.$routeParams = $routeParams;
  this.$translate = $translate;
  this.$sce = $sce;
  this.enUS = LANG_EN_US;
  this.zhCN = LANG_ZH_CN;
  this.snippet = '<p style="color:blue">an html\n' +
    '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
    'snippet</p>';
  this.normal = '<p style="color:blue">an html snippet</p>';
  this.deliberatelyTrustDangerousSnippet = function () {
    return $sce.trustAsHtml(this.snippet);
  };
  this.user = {
    id: 'user2038178479',
    name: 'wind13'
  }
  this.changeLanguage = function (key) {
    this.$translate.use(key);
  };
}

export default {
  name,
  template,
  bindings,
  controller,
}