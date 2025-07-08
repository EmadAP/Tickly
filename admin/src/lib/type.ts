export interface Ticket {
  id: string; // UUID or unique ticket ID (can be optional on create)
  title: string;
  description?: string;
  category: "Concert" | "Sports" | "Theater" | "Comedy" | "Workshop" | string;
  eventDate: string; // ISO string like "2025-08-01T19:00:00Z"
  location: string;
  price: number;
  quantity: number; // total tickets available
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  onSell: boolean;
  off: number;
}
