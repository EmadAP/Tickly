export interface Ticket {
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
  location: string;
  imageUrl: string;
  eventDate: string; // ISO string like "2025-08-01T19:00:00Z"
  price: number;
  quantity: number; // total tickets available
  onSell: boolean;
  off: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Admin {
  id: string;
  username: string;
  email: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface AdminContextType {
  admin: Admin | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export type SignupProps = {
  username: string;
  email: string;
  password: string;
  image: File | null;
};

export type loginProps = {
  username: string;
  password: string;
};
