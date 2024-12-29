import { createI18n } from 'vue-i18n';

import enCommon from '@/locales/en/common.json';
import enHome   from '@/locales/en/home.json';
import enAbout  from '@/locales/en/about.json';

import deCommon from '@/locales/de/common.json';
import deHome   from '@/locales/de/home.json';
import deAbout  from '@/locales/de/about.json';

import esCommon from '@/locales/es/common.json';
import esHome   from '@/locales/es/home.json';
import esAbout  from '@/locales/es/about.json';

const messages = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout
  },
  de: {
    common: deCommon,
    home: deHome,
    about: deAbout
  },
  es: {
    common: esCommon,
    home: esHome,
    about: esAbout
  }
};

const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'en',
  messages
});

export default i18n;