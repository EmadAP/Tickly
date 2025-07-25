export interface Ticket {
  _id: string;
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
  image: string | File | null;
  eventDate: string; // ISO string like "2025-08-01T19:00:00Z"
  price: number;
  quantity: number; // total tickets available
  onSell: boolean;
  off?: number;
  country: string;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Event {
  _id: string;
  creator: string;
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
  country: string;
  city: string;
  address: string;
  coordinates: [number, number];
  image: string | File | null;
  eventDate: string;
  eventTime: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Section {
  _id: string;
  event: string;
  name: string;
  price: number;
  quantity: number;
  sold: number;
  onSell: boolean;
  discountPercent?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Admin {
  _id: string;
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

export type TicketTable = {
  id: string;
  title: string;
  category:
    | "Concert"
    | "Sports"
    | "Theater"
    | "Comedy"
    | "Workshop"
    | "Seminar"
    | string;
  eventDate: string;
  price: number;
  quantity: number;
  onSell: boolean;
  country: string;
};

export type AdminTable = {
  username: string;
  email: string;
  createdAt?: string;
};
