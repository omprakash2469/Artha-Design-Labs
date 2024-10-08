import "../public/styles/style.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import { Poppins } from "next/font/google";
import LocalFont from "next/font/local";

// Fonts
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const hannari = LocalFont({
  src: "../public/fonts/hannari-regular.ttf",
  variable: "--font-hannari",
});

// Meta data
export const metadata = {
  title: "Artha Interiors",
  description: "Aartha Design Labs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${hannari.variable}`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
