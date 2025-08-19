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

export interface Admin {
  _id: string;
  username: string;
  email: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Ticket {
  _id: string;
  ticketNumber: string; // Unique ticket code or serial
  seatNumber: string | number; // Assigned seat in the section
  event: string | Event; // Event reference
  section: string | Section; // Section reference
  user: string | { username: string; email: string };
  pricePaid: number; // Final price after discounts
  purchaseDate: string; // ISO date string
  status: "active" | "pending" | "cancelled" | "used"; // Ticket status
  qrCode?: string; // Optional: for check-in systems
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

export type AdminTable = {
  username: string;
  email: string;
  createdAt?: string;
};
