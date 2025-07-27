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
  name:
    | "VIP"
    | "Floor"
    | "Section A"
    | "Section B"
    | "Section C"
    | "Section D"
    | "Section E"
    | "Section F"
    | "Balcony Left"
    | "Balcony Right"
    | "General"
    | string;
  price: number;
  quantity: number;
  sold: number;
  onSell: boolean;
  discountPercent?: number;
  createdAt?: string;
  updatedAt?: string;
}