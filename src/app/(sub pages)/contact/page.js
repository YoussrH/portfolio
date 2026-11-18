import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact — Yosr El Hamdouni",
};

export default function ContactPage() {
  return (
    <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-10">

      {/* Header */}
      <div className="flex flex-col items-center justify-center space-y-4 w-full sm:w-3/4 text-center">
        {/* Ping dot */}
        <span className="flex items-center gap-2 skill-tag">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Available for opportunities
        </span>

        <h1 className="font-lamoric text-ort font-bold text-center text-4xl xs:text-5xl gradient-text glow-text">
          Get In Touch
        </h1>

        <div
          className="h-px w-32 mx-auto"
          style={{ background: "linear-gradient(90deg, transparent, rgba(254,254,91,0.6), transparent)" }}
        />

        <p className="font-lamoric font-light text-sm xs:text-base text-foreground/60 max-w-md">
          Have a project in mind, a collaboration idea, or just want to say hi?
          Reach me directly at{" "}
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
