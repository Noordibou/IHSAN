import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "IHSAN",
  description: " Ihsan for Healthcare was created to uplift students with plans to pursue healthcare post-graduation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </head>
      <body >
        <Navbar />
        {children }
        <Footer />
      </body>
    </html>
  );
}
