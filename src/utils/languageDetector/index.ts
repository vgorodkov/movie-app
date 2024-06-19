import AsyncStorage from '@react-native-async-storage/async-storage';
import {LanguageDetectorAsyncModule} from 'i18next';

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async () => {
    try {
      const language = await AsyncStorage.getItem('language');
      return language || 'en';
    } catch (error) {
      return 'en';
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
