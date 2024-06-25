export interface EditProfileFormValues {
  name: string;
  surname: string;
  newPassword: string;
  currentPassword: string;
}

export interface EditFormProps {
  title: string;
  inputs: EditProfileInput[];
}

export interface EditProfileInput {
  icon: string;
  name: keyof EditProfileFormValues;
  placeholder: string;
}
