
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
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

export const metadata = {
  title: {
    template: "%s — Yosr El Hamdouni",
    default: "Yosr El Hamdouni — AI & IoT Developer",
  },
  description:
    "Portfolio of Yosr El Hamdouni, AI & IoT Master's student and full-stack developer. Specialising in Machine Learning, Computer Vision, React, Node.js, and Embedded Systems.",
  keywords: [
    "Yosr El Hamdouni",
    "AI developer",
    "IoT",
    "Machine Learning",
    "React",
    "Next.js",
    "portfolio",
    "Tunisia",
  ],
  authors: [{ name: "Yosr El Hamdouni", url: "https://github.com/YoussrH" }],
  creator: "Yosr El Hamdouni",
  openGraph: {
    title: "Yosr El Hamdouni — AI & IoT Developer",
    description:
      "Portfolio of Yosr El Hamdouni, AI & IoT Master's student and full-stack developer.",
    url: "https://yosr-elhamdouni.vercel.app",
    siteName: "Yosr El Hamdouni Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yosr El Hamdouni — AI & IoT Developer",
    description: "Portfolio of Yosr El Hamdouni — AI, IoT, Full-Stack.",
    creator: "@YosrH21",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        className={clsx(
          "font-dm",
          "bg-[#030014]/100 text-foreground",
          "md:cursor-none"
        )}
      >
        <ScrollProgress />
        <CursorGlow />
        <PageTransition>{children}</PageTransition>
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
