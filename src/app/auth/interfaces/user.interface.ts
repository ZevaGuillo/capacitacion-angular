export interface User {
  _id: string;
  email: string;
  name: string;
  isActive: boolean;
  roles: string[];
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse extends LoginResponse {}
