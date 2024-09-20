import * as Localization from 'react-native-localize';
import en from './locales/en.json';
import ta from './locales/ta.json';
import hi from './locales/hi.json';
import pa from './locales/pa.json';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
const resources = {
  en: {translation: en},
  ta: {translation: ta},
  hi: {translation: hi},
  pa: {translation: pa},
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const bestLanguage = Localization.findBestLanguageTag(
      Object.keys(resources),
    );
    callback(bestLanguage?.languageTag || 'en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibiltyJSON: 'v3',
    fallbackLng: 'eng',
    lng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
