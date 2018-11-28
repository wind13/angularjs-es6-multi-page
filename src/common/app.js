import { Ng, log, Ramda } from "./util";
import { initI18n } from './i18n';
import Mdle from "./mdle";
import { APP_NAME, APP_CTRL_NAME, PAGE_TITLE, APP_PAGE_NAME, PREFIX_NATIVE_CALLBACK } from "./global";

/**
 * Init the RDO var into window.
 */
if (!window.utag) {
  window.utag = {
    data: {
      page_name: "",
      page_name_en: "",
      page_language: "",
      page_title: "",
      page_url: "",
      page_type: "application",
      customer_id: "",
      customer_type: ""
    }
  }
  window.mobile_switch_profile = false;
}

export const InitApp = function (languages = {}, deps = [], pageCmpt = {}) {

  Ng.element(document.getElementsByTagName('head')).append(Ng.element('<base href="' + location.pathname + '" />'));

  log('init app start...')
  // All pages should use $sce and $translate
  const app = Mdle(APP_NAME, Ramda.concat(deps, [
    'ngSanitize',
    'pascalprecht.translate',
  ]));

  const defaultLanguage = 'zh-CN';

  const i18n = initI18n(defaultLanguage, languages);
  app.registConfig(i18n.fn);

  app.registController({
    name: APP_CTRL_NAME, fn: function ($translate, $scope) {
      'ngInject';
      this.title = PAGE_TITLE;

      this.broadcast = (event, args) => {
        $scope.$broadcast(event, args);
      }

      $scope.$on(PREFIX_NATIVE_CALLBACK + 'get_language', (e, language) => {
        window.systemLanguage = language;
        window.utag.data.page_language = language;
      })
    }
  });

  app.registComponent(Ramda.merge(pageCmpt, { name: APP_PAGE_NAME }));

  log('app regist page success...')
  return app;
}
