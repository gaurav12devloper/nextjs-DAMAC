import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const oswald = Oswald({
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "DAMAC",
  description: "landing page",
  icons: {
    icon: ['./favicon.ico'],

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
