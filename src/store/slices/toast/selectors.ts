import {RootState} from '@/store/types';

export const isToastActiveSelector = (state: RootState) => state.toast.isActive;
export const toastStatusSelector = (state: RootState) => state.toast.status;
export const toastContentSelector = (state: RootState) => state.toast.content;
