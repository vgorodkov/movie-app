import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enAuth from '@/i18n/en/auth.json';
import enHome from '@/i18n/en/home.json';
import enProfile from '@/i18n/en/profile.json';
import enTickets from '@/i18n/en/tickets.json';
import enTop from '@/i18n/en/top.json';
import ruAuth from '@/i18n/ru/auth.json';
import ruHome from '@/i18n/ru/home.json';
import ruProfile from '@/i18n/ru/profile.json';
import ruTickets from '@/i18n/ru/tickets.json';
import ruTop from '@/i18n/ru/top.json';

const resources = {
  en: {
    home: enHome,
    auth: enAuth,
    profile: enProfile,
    tickets: enTickets,
    top: enTop,
  },
  ru: {
    home: ruHome,
    auth: ruAuth,
    profile: ruProfile,
    tickets: ruTickets,
    top: ruTop,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
