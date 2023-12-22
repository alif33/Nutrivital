import { Urbanist } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor/Cursor";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Nutrivital-Healthy Food & Nutrition Coach",
  description: "Generated by stackbuzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Cursor>{children}</Cursor>
      </body>
    </html>
  );
}
