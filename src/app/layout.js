import { Inter } from "next/font/google";
import { Libre_Baskerville, Noto_Sans, Poppins, Arimo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const notoSans = Noto_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const arimo = Arimo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "UTD Healthcare Association",
  description:
    "UTD Healthcare Association IHSAN was created to uplift students with plans to pursue healthcare post-graduation.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="text-black bg-bodyColor overflow-y-auto custom-scrollbar">
        <Navbar />
        <main className="flex-1 min-h-[60vh] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
