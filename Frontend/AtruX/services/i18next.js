import i18next from "i18next";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import { NativeModules } from "react-native";

import en from '../locales/en.json';
import ro from '../locales/ro.json';

export const languageResources = {
    en: {translation: en},
    ro: {translation: ro}
}

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
console.log(locale.substring(0, 2));
      i18n.locale = locale

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources,
});

export default i18next;