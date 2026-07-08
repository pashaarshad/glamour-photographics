import { Cormorant_Garamond, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Glamour Photographics — Est. 1982",
  description: "Four decades of visual storytelling from the heart of Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${bebas.variable}`}>
      <body>
        <Cursor />
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
