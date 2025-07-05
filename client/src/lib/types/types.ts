export interface User {
  id: string;
  username: string;
  email?: string;
}

export interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export type SignupProps = {
  username: string;
  email: string;
  password: string;
};

export type loginProps = {
  username: string;
  password: string;
};
