import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar/Nav";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IHSAN",
  description: " Ihsan for Healthcare was created to uplift students with plans to pursue healthcare post-graduation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
