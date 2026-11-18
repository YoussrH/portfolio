import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact — Yosr El Hamdouni",
};

export default function ContactPage() {
  return (
    <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-10">

      <div className="flex flex-col items-center justify-center space-y-4 w-full sm:w-3/4 text-center">

        {/* Availability badge */}
        <span className="skill-tag flex items-center gap-2 font-dm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Available for opportunities
        </span>

        {/* Heading */}
        <h1
          className="font-cormorant font-semibold text-5xl xs:text-6xl"
          style={{
            background:
              "linear-gradient(135deg, #FEFE5B 0%, #DEAA44 45%, #FFD861 80%, #FEFE5B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 20px rgba(254,254,91,0.25))",
          }}
        >
          Get In Touch
        </h1>

        {/* Divider */}
        <div
          className="h-px w-32 mx-auto"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(254,254,91,0.6), transparent)",
          }}
        />

        <p className="font-dm font-light text-sm xs:text-base text-foreground/60 max-w-md leading-relaxed">
          Have a project in mind, a collaboration idea, or just want to say hi?
          Reach me at{" "}
          <a
            href="mailto:elhamdouni.yosr@gmail.com"
            className="text-accent hover:underline underline-offset-4 transition-all"
          >
            elhamdouni.yosr@gmail.com
          </a>{" "}
          or use the form below.
        </p>
      </div>

      <Form />
    </article>
  );
}
