export interface AuthVariant {
  name: 'account' | 'google' | 'facebook' | 'github';
  label: string;
  icon: number;
  backgroundColor: string;
  color: string;
}
