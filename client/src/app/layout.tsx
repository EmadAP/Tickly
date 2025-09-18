import type { Metadata } from "next";
import { Montserrat, Comic_Neue } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/context/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/lib/context/UserContext";
import { ThemeProvider } from "@/lib/context/ThemeProvider";
import Navbar from "@/templates/Navbar";
import Footer from "@/templates/Footer";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tickly",
  description: "Your ticket to great events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${comicNeue.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <UserProvider>
              <Navbar />
              <div>{children}</div>
              <Footer />
            </UserProvider>
          </QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
