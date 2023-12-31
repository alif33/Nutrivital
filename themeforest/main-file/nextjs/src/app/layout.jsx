import { Urbanist } from "next/font/google";
import "./globals.css";
import "swiper/css";
import Cursor from "@/components/cursor";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Nutrivital-Healthy Food & Nutrition Coach",
  description: "Generated by stackbuzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Cursor/>
        {children}
      </body>
    </html>
  );
}
