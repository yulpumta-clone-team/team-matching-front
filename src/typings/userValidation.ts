export interface UserValidation {
  email: string;
  name: string;
  nickname: string;
  password: string;
  verifiedPassword: string;
  extraError?: string;
}
