import {EditProfileInput} from './types';

export const edifFormFields: EditProfileInput[] = [
  {icon: 'name', name: 'name', placeholder: 'Enter your new name'},
  {icon: 'surname', name: 'surname', placeholder: 'Enter your new surname'},
  {
    icon: 'password',
    name: 'currentPassword',
    placeholder: 'Enter your current password',
  },
  {icon: 'password', name: 'newPassword', placeholder: 'Enter new password'},
];

export const editForms = [
  {title: 'Change your personal data', fields: edifFormFields.slice(0, 2)},
  {title: ' Change your password', fields: edifFormFields.slice(2)},
];
