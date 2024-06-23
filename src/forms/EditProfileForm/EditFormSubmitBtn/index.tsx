import {useFormContext} from 'react-hook-form';

import {Button} from '@/components/UI';
import {useEditProfile} from '@/hooks/useEditProfile';

import {EditProfileFormValues} from '../types';

export const EditFormSubmitBtn = () => {
  const {handleSubmit} = useFormContext<EditProfileFormValues>();

  const {handleProfileEdit} = useEditProfile();

  return (
    <Button
      testID="EditProfileSubmitBtn"
      onPress={handleSubmit(handleProfileEdit)}>
      Edit
    </Button>
  );
};
