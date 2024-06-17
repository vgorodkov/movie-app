import {RootState} from '@/store/types';

export const isNotificationsTurnedOnSelector = (state: RootState) =>
  state.notifications.isTurnedOn;
