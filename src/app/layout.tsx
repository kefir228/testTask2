import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/Header";
import CartProvider from "../../context/CartContext";

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Інтернет-магазин на Next.js 15",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

