import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {Modal} from '@/components/UI';
import {spacing} from '@/constants/spacing';
import {EditProfileForm} from '@/forms/EditProfileForm';
import {editForms} from '@/forms/EditProfileForm/constants';
import {EditFormSubmitBtn} from '@/forms/EditProfileForm/EditFormSubmitBtn';
import {editProfileValidationSchema} from '@/forms/EditProfileForm/schema';
import {EditProfileFormValues} from '@/forms/EditProfileForm/types';
import {FlexContainer} from '@/styled/FlexContainer';

import {EditProfileModalProps} from './types';

export const EditProfileScreenModal = ({navigation}: EditProfileModalProps) => {
  const methods = useForm<EditProfileFormValues>({
    resolver: yupResolver(editProfileValidationSchema),
  });

  const onBackdropPress = () => {
    navigation.goBack();
  };

  return (
    <Modal title="Edit your profile" onBackdropPress={onBackdropPress}>
      <FormProvider {...methods}>
        <FlexContainer gap={spacing.m}>
          {editForms.map(editForm => (
            <EditProfileForm
              key={editForm.title}
              inputs={editForm.fields}
              title={editForm.title}
            />
          ))}
          <EditFormSubmitBtn />
        </FlexContainer>
      </FormProvider>
    </Modal>
  );
};
