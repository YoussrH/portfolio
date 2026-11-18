
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});


/* const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
}); */

export const metadata = {
  title: {
    template: "Yosr El Hamdouni",
    default: "Yosr El Hamdouni — AI & IoT Developer",
  },
  description:
    "Portfolio of Yosr El Hamdouni, AI & IoT Master's student and full-stack developer. Specialising in Machine Learning, Computer Vision, React, Node.js, and Embedded Systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        className={clsx(
          "font-dm",
          "bg-[#030014]/100 text-foreground"
        )}
      >
        {children}
        <FireFliesBackground />
        <div id="my-modal" />
      </body>
    </html>
  );
}
