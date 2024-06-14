import React from 'react';

import {ProfileActions} from '@/components/ProfileActions';
import {ProfileImage} from '@/components/ProfileImage';
import {ProfileInformation} from '@/components/ProfileInformation';
import {ToggleThemeBtn} from '@/components/ToggleThemeBtn';
import {spacing} from '@/constants/spacing';
import {FlexContainer, FullscreenContainer} from '@/styled/FlexContainer';

export const ProfileScreen = () => {
  return (
    <FullscreenContainer
      gap={spacing.l}
      justifyContent="space-between"
      alignItems="center"
      padding={`${spacing.l}px`}>
      <FlexContainer alignItems="center" gap={spacing.s}>
        <ProfileImage />
        <ProfileInformation />
      </FlexContainer>
      <ProfileActions />
      <ToggleThemeBtn />
    </FullscreenContainer>
  );
};
