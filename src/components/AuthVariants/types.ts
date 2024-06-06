export type AuthVariantName = 'account' | 'google' | 'facebook' | 'github';

export interface AuthVariant {
  name: AuthVariantName;
  label: string;
  icon: number;
  backgroundColor: string;
  color: string;
}
