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

export interface Ticket {
  _id: string;
  id: string; // UUID or unique ticket ID (can be optional on create)
  title: string;
  description: string;
  category:
    | "Concert"
    | "Sports"
    | "Theater"
    | "Comedy"
    | "Workshop"
    | "Seminar"
    | string;
  coordinates: [number, number];
  image: string; //| File | null;
  eventDate: string; // ISO string like "2025-08-01T19:00:00Z"
  price: number;
  quantity: number; // total tickets available
  onSell: boolean;
  off?: number;
  createdAt?: string;
  updatedAt?: string;
}
