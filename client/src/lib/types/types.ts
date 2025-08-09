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
  event: string | { _id: string };
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

export interface Ticket {
  _id: string;
  ticketNumber: string;       // Unique ticket code or serial
  seatNumber: string | number; // Assigned seat in the section
  event: string | Event;       // Event reference
  section: string | Section;   // Section reference
  user: string;                // User ID or email
  pricePaid: number;           // Final price after discounts
  purchaseDate: string;        // ISO date string
  status: "active" | "cancelled" | "used"; // Ticket status
  qrCode?: string;             // Optional: for check-in systems
  createdAt?: string;
  updatedAt?: string;
}

export interface ExploreFilters {
  category: string | null;
  date: string | null;
  country: string | null;
  priceRange: [number, number];
  onSale: boolean;
  available: boolean;
}
