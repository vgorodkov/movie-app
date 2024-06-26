import notifee from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {Dropdown, Modal, Typography, TypographyVariant} from '@/components/UI';
import {Switch} from '@/components/UI/Switch';
import {languages} from '@/constants/languages';
import {spacing} from '@/constants/spacing';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {turnOff, turnOn} from '@/store/slices/notifications';
import {isNotificationsTurnedOnSelector} from '@/store/slices/notifications/selectors';
import {FlexContainer} from '@/styled/FlexContainer';

import {SettingsModalProps} from './types';

export const SettingsScreenModal = ({navigation}: SettingsModalProps) => {
  const {t} = useTranslation('profile');
  const dispatch = useAppDispatch();
  const isNotificationsTurnedOn = useAppSelector(
    isNotificationsTurnedOnSelector,
  );
  const initialOption = languages.find(
    language => language.code === i18next.language,
  );

  const onDropdownSelect = async (optionCode: string) => {
    i18next.changeLanguage(optionCode);
    await AsyncStorage.setItem('language', optionCode);
  };

  const onBackdropPress = () => {
    navigation.goBack();
  };

  const onSwitchValueChange = async (value: boolean) => {
    if (!value) {
      dispatch(turnOff());
      await notifee.cancelTriggerNotifications();
    } else {
      dispatch(turnOn());
    }
  };

  return (
    <Modal onBackdropPress={onBackdropPress} title={t('SettingsBtn')}>
      <FlexContainer gap={spacing.s}>
        <Typography variant={TypographyVariant.LABEL_LARGE}>
          {t('Language')}
        </Typography>
        <Dropdown
          initialOption={initialOption}
          label={t('Select language')}
          data={languages}
          onSelect={onDropdownSelect}
        />
        <Typography variant={TypographyVariant.LABEL_LARGE}>
          {t('Notifications')}
        </Typography>
        <Switch
          onValueChange={onSwitchValueChange}
          initialSwitchState={isNotificationsTurnedOn}
        />
      </FlexContainer>
    </Modal>
  );
};
