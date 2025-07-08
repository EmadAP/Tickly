export interface UserDataProps {
  name: string;
  uv: number;
  pv: number;
}

export interface TopEventsDataProps {
  name: string;
  ticketsSold: number;
}

export interface MonthlyRevenueDataProps {
  name: string;
  revenue: number;
}

export interface CategorySalesDataProps {
  category: string;
  tickets: number;
}

export const UsersData = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 139 },
  { name: "Mar", uv: 500, pv: 380 },
  { name: "Apr", uv: 278, pv: 390 },
  { name: "May", uv: 189, pv: 480 },
  { name: "Jun", uv: 239, pv: 380 },
  { name: "Jul", uv: 349, pv: 430 },
  { name: "Aug", uv: 200, pv: 300 },
  { name: "Sep", uv: 300, pv: 400 },
  { name: "Oct", uv: 400, pv: 500 },
  { name: "Nov", uv: 500, pv: 600 },
  { name: "Dec", uv: 600, pv: 700 },
];

export const TopEventsData = [
  { name: "Concert A", ticketsSold: 1200 },
  { name: "Festival B", ticketsSold: 950 },
  { name: "Theater C", ticketsSold: 800 },
  { name: "Sports D", ticketsSold: 760 },
  { name: "Concert E", ticketsSold: 500 },
];

export const MonthlyRevenueData = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 9800 },
  { name: "Mar", revenue: 14200 },
  { name: "Apr", revenue: 11300 },
  { name: "May", revenue: 9500 },
  { name: "Jun", revenue: 10100 },
  { name: "Jul", revenue: 12500 },
  { name: "Aug", revenue: 13400 },
  { name: "Sep", revenue: 11900 },
  { name: "Oct", revenue: 14300 },
  { name: "Nov", revenue: 15600 },
  { name: "Dec", revenue: 17200 },
];

export const CategorySalesData = [
  { category: "Concert", tickets: 5000 },
  { category: "Sports", tickets: 4200 },
  { category: "Theater", tickets: 3100 },
  { category: "Comedy", tickets: 2700 },
  { category: "Workshop", tickets: 1800 },
];
