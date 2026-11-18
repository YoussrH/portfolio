
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";


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
    <html lang="en">
      <body
        className={clsx("font-lamoric",
          
          "bg-[#030014]/100 text-foreground "
        )}/* font-inter */
      >
        {children}
        <FireFliesBackground />
        <div id="my-modal" />
      </body>
    </html>
  );
}
