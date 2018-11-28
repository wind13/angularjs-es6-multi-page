import { Ramda } from "./util";
import enUS from './languages/en-US.json'
import zhCN from './languages/zh-CN.json'

export const LANG_EN_US = 'en-US';
export const LANG_ZH_CN = 'zh-CN';

export const generateLangs = (enUS, zhCN) => {
  let langs = {};
  langs[LANG_EN_US] = enUS;
  langs[LANG_ZH_CN] = zhCN;
  return langs;
}

export const simpleLangs = generateLangs('en', 'cn');

export const COMMON_LANGS = generateLangs(enUS, zhCN);

/**
 * Set the language word JSON and the language preferred.
 * @param {string} lang The language preferred, should be 'en-US', 'zh-CN' etc.
 * @param {object} jsonLangs The i18n language JSON, like {'en-US': {}, 'zh-CN': {}}
 */
export const initI18n = function (lang, jsonLangs) {
  return {
    lang,
    fn: function ($translateProvider) {
      'ngInject';
      // Check https://angular-translate.github.io/docs/#/guide/19_security for sanitize
      $translateProvider.useSanitizeValueStrategy('escape'); // sanitize 
      const allLangs = Ramda.mergeDeepRight(COMMON_LANGS, jsonLangs);
      Ramda.forEachObjIndexed((v, k) => $translateProvider.translations(k, v), allLangs)
      $translateProvider.preferredLanguage(lang);
    }
  }
}
