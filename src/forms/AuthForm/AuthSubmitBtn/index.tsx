import React from 'react';
import {FieldValues, useFormContext} from 'react-hook-form';

import {AuthButton} from './styles';

export const AuthSubmitButton = ({isSignUp}: {isSignUp: boolean}) => {
  const {handleSubmit} = useFormContext<FieldValues>();

  const onSumbit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <AuthButton onPress={handleSubmit(onSumbit)} backgroundColor="#D98639">
      {isSignUp ? 'Sign Up' : 'Sign In'}
    </AuthButton>
  );
};
