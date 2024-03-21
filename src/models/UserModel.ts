export interface UserModel {
  name?: string;

  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  confirmPassword?: string;
  remember?: boolean;
}