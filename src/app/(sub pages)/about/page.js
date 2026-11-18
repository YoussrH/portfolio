import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import clsx from "clsx";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About — Yosr El Hamdouni",
};

export default function AboutPage() {
  return (
    <>
      {/* 3D model layer */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10 pointer-events-none">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      {/* Hero title */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
          {/* Glowing ring behind name */}
          <div
            className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(254,254,91,0.08) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          <h1
            className={clsx(
              "font-lamoric",
              "text-4xl xs:text-5xl sm:text-3xl lg:text-7xl gradient-text glow-text relative z-10 font-bold"
            )}
          >
            Yosr El Hamdouni
          </h1>

          {/* Animated underline */}
          <div
            className="mt-3 h-px w-0 animate-[expand_1s_0.5s_ease-out_forwards]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(254,254,91,0.7), transparent)",
              animation: "expandWidth 1s 0.5s ease-out forwards",
              width: 0,
            }}
          />

          <p
            className={clsx(
              "font-lamoric",
              "font-light text-foreground/60 text-base xs:text-lg mt-3 tracking-widest uppercase"
            )}
          >
            AI &amp; IoT Master&apos;s Student
          </p>

          {/* Location pill */}
          <span className="mt-4 skill-tag flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Tunis, Tunisia
          </span>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
