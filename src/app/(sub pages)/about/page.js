import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

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

      {/* Hero */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">

          {/* Glow ring */}
          <div
            className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(254,254,91,0.07) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          {/* Eyebrow */}
          <p className="font-dm text-[11px] tracking-[0.3em] uppercase text-foreground/40 mb-4 flex items-center gap-2 relative z-10">
            <span className="inline-block w-5 h-px bg-accent/60" />
            Portfolio
          </p>

          {/* Name */}
          <h1
            className="font-cormorant font-semibold text-5xl xs:text-6xl lg:text-8xl relative z-10 leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #FEFE5B 0%, #DEAA44 45%, #FFD861 80%, #FEFE5B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 24px rgba(254,254,91,0.25))",
            }}
          >
            Yosr{" "}
            <span className="font-light italic">El Hamdouni</span>
          </h1>

          {/* Line */}
          <div
            className="mt-4 mb-4 h-px w-48 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(254,254,91,0.6), transparent)",
            }}
          />

          {/* Subtitle */}
          <p className="font-dm font-light text-foreground/60 text-sm xs:text-base tracking-[0.2em] uppercase">
            AI &amp; IoT Master&apos;s Student
          </p>

          {/* Location pill */}
          <span className="mt-4 skill-tag flex items-center gap-1.5 font-dm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Tunis, Tunisia
          </span>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
