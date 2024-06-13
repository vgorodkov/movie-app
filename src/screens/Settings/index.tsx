import i18next from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {Dropdown, Modal, Typography, TypographyVariant} from '@/components/UI';
import {Switch} from '@/components/UI/Switch';
import {languages} from '@/constants/languages';
import {spacing} from '@/constants/spacing';
import {FlexContainer} from '@/styled/FlexContainer';

import {SettingsModalProps} from './types';

export const SettingsModal = ({navigation}: SettingsModalProps) => {
  const {t} = useTranslation('profile');
  const onDropdownSelect = (optionCode: string) => {
    i18next.changeLanguage(optionCode);
  };

  const initialOption = languages.find(
    language => language.code === i18next.language,
  );

  const onBackdropPress = () => {
    navigation.goBack();
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
        <Switch />
      </FlexContainer>
    </Modal>
  );
};
