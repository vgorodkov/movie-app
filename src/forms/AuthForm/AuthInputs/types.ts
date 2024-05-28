export interface AuthInput {
  placeholder: string;
  icon: number;
  name: string;
}

export interface AuthInputsProps {
  authForm: AuthInput[];
  isSignUp: boolean;
}
