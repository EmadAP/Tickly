import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/lib/context/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/lib/context/UserContext";
import { ThemeProvider } from "@/lib/context/ThemeProvider";
import Navbar from "@/templates/Navbar";
import Footer from "@/templates/Footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
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
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
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
              <div className="flex flex-col min-h-screen w-full">{children}</div>
              <Footer />
            </UserProvider>
          </QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
