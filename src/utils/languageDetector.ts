import AsyncStorage from '@react-native-async-storage/async-storage';
import {LanguageDetectorAsyncModule} from 'i18next';

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,

  detect: async (callback: (lng?: string) => void) => {
    try {
      const language = await AsyncStorage.getItem('language');
      return callback(language || 'en');
    } catch (error) {
      console.error('Error detecting language:', error);
      return callback('en');
    }
  },
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem('language', language);
    } catch (error) {
      console.error('Error caching language:', error);
    }
  },
};
