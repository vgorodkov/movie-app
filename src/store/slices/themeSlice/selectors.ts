import {RootState} from '@/store/types';

export const selectedThemeSelector = (state: RootState) =>
  state.theme.selectedTheme;
