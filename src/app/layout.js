
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
    template:
      "Elhamdouni Yosr",
    default:
      "My Portfolio",
  },
  description:
    "A unique creative portfolio designed by CodeBucks with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand. Checkout CodeBucks on youtube.",
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
