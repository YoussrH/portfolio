import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={clsx(
          "bg-[#030014]/100 text-foreground font-body"
        )}
      >
        {children}
        <FireFliesBackground />
        <div id="my-modal" />
      </body>
    </html>
  );
}
