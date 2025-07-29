export const TESTIMONIALS = [
  {
    name: "Alex",
    image: "/user/user-1.jpg",
    message:
      "Bought last-minute concert tickets and got in without any issues. Tickly is amazing!",
    time: "2 weeks ago",
  },
  {
    name: "Maya",
    image: "/user/user-2.jpg",
    message:
      "I grabbed front-row seats for half the price. Tickly is now my go-to for events.",
    time: "3 months ago",
  },
  {
    name: "Ethan",
    image: "/user/user-3.jpg",
    message:
      "Tickly made getting my festival pass super easy. Tickets delivered instantly.",
    time: "1 year ago",
  },
  {
    name: "Sophie",
    image: "/user/user-4.jpg",
    message:
      "Scored VIP theater tickets the night before the show. Seamless experience!",
    time: "5 days ago",
  },
  {
    name: "Daniel",
    image: "/user/user-5.jpg",
    message:
      "Got into a sold-out football match thanks to Tickly. The process was flawless.",
    time: "2 hours ago",
  },
  {
    name: "Olivia",
    image: "/user/user-6.jpg",
    message:
      "Bought 4 comedy show tickets last minute. Entry was smooth with digital tickets.",
    time: "1 month ago",
  },
  {
    name: "Leo",
    image: "/user/user-7.jpg",
    message:
      "Best place for last-minute deals. Got my concert tickets in seconds.",
    time: "6 months ago",
  },
  {
    name: "Ava",
    image: "/user/user-8.jpg",
    message:
      "Saved 30% on my music festival pass. Tickly makes it so easy to buy tickets.",
    time: "8 hours ago",
  },
  {
    name: "Noah",
    image: "/user/user-9.jpg",
    message:
      "Bought extra tickets for friends with zero hassle. Highly recommend Tickly!",
    time: "4 months ago",
  },
  {
    name: "Chloe",
    image: "/user/user-10.jpg",
    message:
      "Love the mobile app. Bought tickets while on the bus and they were ready instantly.",
    time: "3 weeks ago",
  },
  {
    name: "Benjamin",
    image: "/user/user-11.jpg",
    message:
      "It felt super safe buying from Tickly. The verified sellers gave me peace of mind.",
    time: "10 months ago",
  },
  {
    name: "Ella",
    image: "/user/user-12.jpg",
    message:
      "Got my VIP pass in under 5 minutes. Perfect for last-minute plans!",
    time: "1 week ago",
  },
  {
    name: "Henry",
    image: "/user/user-13.jpg",
    message:
      "Downloaded my digital tickets instantly. Smooth experience at the venue.",
    time: "2 days ago",
  },
  {
    name: "Grace",
    image: "/user/user-14.jpg",
    message:
      "Bought tickets for a sold-out comedy show. Tickly came through big time.",
    time: "9 months ago",
  },
  {
    name: "Liam",
    image: "/user/user-15.jpg",
    message:
      "Customer support was fantastic when I had a question. Got my tickets fast.",
    time: "4 hours ago",
  },
  {
    name: "Isabella",
    image: "/user/user-16.jpg",
    message:
      "Tickly makes buying tickets feel effortless. The dashboard is so clean.",
    time: "7 months ago",
  },
  {
    name: "Mason",
    image: "/user/user-17.jpg",
    message:
      "Found playoff tickets the night before the game. Best ticket site ever.",
    time: "3 days ago",
  },
  {
    name: "Zoe",
    image: "/user/user-18.jpg",
    message:
      "This platform feels safe. Bought 5 concert tickets and no issues at all.",
    time: "5 months ago",
  },
  {
    name: "Lucas",
    image: "/user/user-19.jpg",
    message:
      "No sketchy meetups. Digital delivery made it stress-free to get in.",
    time: "6 days ago",
  },
  {
    name: "Aria",
    image: "/user/user-20.jpg",
    message:
      "Love the instant ticket delivery. I was inside the venue in no time.",
    time: "2 months ago",
  },
  {
    name: "Elijah",
    image: "/user/user-21.jpg",
    message:
      "Tickly saved me when the box office was sold out. Found great seats!",
    time: "11 months ago",
  },
  {
    name: "Lily",
    image: "/user/user-22.jpg",
    message:
      "Buying tickets was quick and simple. The QR code worked perfectly.",
    time: "14 hours ago",
  },
  {
    name: "Mila",
    image: "/user/user-23.jpg",
    message:
      "Finally got to see my favorite band live. Tickly made it possible!",
    time: "2 weeks ago",
  },
  {
    name: "Sam",
    image: "/user/user-24.jpg",
    message:
      "Customer support was fantastic when I had a question. Got my tickets fast.",
    time: "8 months ago",
  },
];

// maps.ts
export interface SectionLayout {
  name: string;
  top: string;
  left: string;
  width: string;
  height: string;
  type?: "stage" | "section";
}

export const concertMap: SectionLayout[] = [
  {
    name: "Stage",
    top: "3%",
    left: "22%",
    width: "56%",
    height: "8%",
    type: "stage",
  },
  { name: "VIP", top: "12%", left: "22%", width: "56%", height: "10%" },
  { name: "Floor", top: "23%", left: "22%", width: "56%", height: "30%" },
  { name: "Section A", top: "54%", left: "10%", width: "25%", height: "15%" },
  { name: "Section B", top: "54%", left: "36%", width: "28%", height: "15%" },
  { name: "Section C", top: "54%", left: "65%", width: "25%", height: "15%" },
  { name: "Section D", top: "70%", left: "10%", width: "25%", height: "15%" },
  { name: "Section E", top: "70%", left: "36%", width: "28%", height: "15%" },
  { name: "Section F", top: "70%", left: "65%", width: "25%", height: "15%" },
  {
    name: "Balcony Left",
    top: "12%",
    left: "10%",
    width: "11%",
    height: "41%",
  },
  {
    name: "Balcony Right",
    top: "12%",
    left: "79%",
    width: "11%",
    height: "41%",
  },
  { name: "General", top: "86%", left: "10%", width: "80%", height: "10%" },
];

// Sports stadium layout
export const sportsMap: SectionLayout[] = [
  {
    name: "Field",
    top: "35%",
    left: "25%",
    width: "50%",
    height: "25%",
    type: "stage",
  },
  { name: "VIP", top: "24%", left: "40%", width: "20%", height: "10%" },
  { name: "Floor", top: "61%", left: "25%", width: "50%", height: "5%" },
  { name: "Section A", top: "14%", left: "9%", width: "30%", height: "20%" },
  { name: "Section B", top: "14%", left: "61%", width: "30%", height: "20%" },
  { name: "Section C", top: "67%", left: "25%", width: "24%", height: "20%" },
  { name: "Section D", top: "67%", left: "51%", width: "24%", height: "20%" },
  { name: "Section E", top: "61%", left: "9%", width: "15%", height: "26%" },
  { name: "Section F", top: "61%", left: "76%", width: "15%", height: "26%" },
  {
    name: "Balcony Left",
    top: "35%",
    left: "9%",
    width: "15%",
    height: "25%",
  },
  {
    name: "Balcony Right",
    top: "35%",
    left: "76%",
    width: "15%",
    height: "25%",
  },
  { name: "General", top: "14%", left: "40%", width: "20%", height: "9%" },
];

// Theater layout
export const theaterMap: SectionLayout[] = [
  {
    name: "Stage",
    top: "5%",
    left: "20%",
    width: "60%",
    height: "10%",
    type: "stage",
  },
  { name: "VIP", top: "33%", left: "40%", width: "20%", height: "20%" },
  { name: "Floor", top: "64%", left: "10%", width: "80%", height: "10%" },
  { name: "Section A", top: "16%", left: "20%", width: "19%", height: "16%" },
  { name: "Section B", top: "16%", left: "40%", width: "20%", height: "16%" },
  { name: "Section C", top: "16%", left: "61%", width: "19%", height: "16%" },
  { name: "Section D", top: "33%", left: "20%", width: "19%", height: "20%" },
  { name: "Section E", top: "33%", left: "61%", width: "19%", height: "20%" },
  { name: "Section F", top: "54%", left: "20%", width: "60%", height: "9%" },
  {
    name: "Balcony Left",
    top: "33%",
    left: "4%",
    width: "15%",
    height: "30%",
  },
  {
    name: "Balcony Right",
    top: "33%",
    left: "81%",
    width: "15%",
    height: "30%",
  },
  { name: "General", top: "75%", left: "14%", width: "73%", height: "15%" },
];

// Comedy layout
export const comedyMap: SectionLayout[] = [
  {
    name: "Stage",
    top: "10%",
    left: "40%",
    width: "20%",
    height: "10%",
    type: "stage",
  },
  { name: "VIP", top: "21%", left: "40%", width: "20%", height: "14%" },
  { name: "Floor", top: "49%", left: "30%", width: "41%", height: "17%" },
  { name: "Section A", top: "10%", left: "24%", width: "15%", height: "12%" },
  { name: "Section B", top: "10%", left: "61%", width: "15%", height: "12%" },
  { name: "Section C", top: "23%", left: "24%", width: "15%", height: "12%" },
  { name: "Section D", top: "23%", left: "61%", width: "15%", height: "12%" },
  { name: "Section E", top: "36%", left: "30%", width: "20%", height: "12%" },
  { name: "Section F", top: "36%", left: "51%", width: "20%", height: "12%" },
  {
    name: "Balcony Left",
    top: "36%",
    left: "14%",
    width: "15%",
    height: "30%",
  },
  {
    name: "Balcony Right",
    top: "36%",
    left: "72%",
    width: "15%",
    height: "30%",
  },
  { name: "General", top: "67%", left: "14%", width: "73%", height: "25%" },
];

// Workshop layout (smaller, more open)
export const workshopMap: SectionLayout[] = [
  {
    name: "Stage",
    top: "16%",
    left: "45%",
    width: "10%",
    height: "47%",
    type: "stage",
  },
  { name: "VIP", top: "5%", left: "40%", width: "20%", height: "10%" },
  { name: "Floor", top: "64%", left: "20%", width: "60%", height: "20%" },
  { name: "Section A", top: "16%", left: "29%", width: "15%", height: "15%" },
  { name: "Section B", top: "16%", left: "56%", width: "15%", height: "15%" },
  { name: "Section C", top: "32%", left: "29%", width: "15%", height: "15%" },
  { name: "Section D", top: "32%", left: "56%", width: "15%", height: "15%" },
  { name: "Section E", top: "48%", left: "29%", width: "15%", height: "15%" },
  { name: "Section F", top: "48%", left: "56%", width: "15%", height: "15%" },
  {
    name: "Balcony Left",
    top: "16%",
    left: "13%",
    width: "15%",
    height: "47%",
  },
  {
    name: "Balcony Right",
    top: "16%",
    left: "72%",
    width: "15%",
    height: "47%",
  },
  { name: "General", top: "85%", left: "20%", width: "60%", height: "10%" },
];

// Seminar layout (conference hall style)
export const seminarMap: SectionLayout[] = [
  {
    name: "Stage",
    top: "5%",
    left: "22%",
    width: "56%",
    height: "8%",
    type: "stage",
  },
  { name: "VIP", top: "17%", left: "30%", width: "40%", height: "8%" },
  { name: "Floor", top: "26%", left: "35%", width: "30%", height: "32%" },
  { name: "Section A", top: "26%", left: "4%", width: "30%", height: "10%" },
  { name: "Section B", top: "26%", left: "66%", width: "30%", height: "10%" },
  { name: "Section C", top: "37%", left: "4%", width: "30%", height: "10%" },
  { name: "Section D", top: "37%", left: "66%", width: "30%", height: "10%" },
  { name: "Section E", top: "48%", left: "4%", width: "30%", height: "10%" },
  { name: "Section F", top: "48%", left: "66%", width: "30%", height: "10%" },
  { name: "Balcony Left", top: "17%", left: "9%", width: "20%", height: "8%" },
  {
    name: "Balcony Right",
    top: "17%",
    left: "71%",
    width: "20%",
    height: "8%",
  },
  { name: "General", top: "60%", left: "4%", width: "92%", height: "35%" },
];
