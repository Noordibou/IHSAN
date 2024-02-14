import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "IHSAN",
  description:
    " Ihsan for Healthcare was created to uplift students with plans to pursue healthcare post-graduation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,500;1,400&family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Libre+Baskerville&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Suranna&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <link rel="icon" href="/logo1.png" sizes="32X32" /> */}
      <body className=" text-black bg-bodyColor">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
