"use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import { motion } from "framer-motion";

/* ─── data ────────────────────────────────────────────────── */
const experience = [
  {
    role: "Desktop App Developer",
    company: "NovaCon, Tunisia",
    period: "Apr 2026 – Present",
    bullets: [
      "Cross-platform Electron desktop application",
      "Node.js + Express backend for business automation",
      "Secure data management & modern UI workflows",
    ],
  },
  {
    role: "Final Year Project Intern",
    company: "Bouzouita Group Trading & Marketing",
    period: "Jan 2025 – May 2025",
    bullets: [
      "Full e-commerce platform with intelligent ML features",
      "Product recommendation & price estimation models",
      "React Native courier mobile application",
      "REST APIs & PostgreSQL database management",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Accounting Computer Service (ACS)",
    period: "Jan 2024 – Feb 2024",
    bullets: [
      "Responsive company showcase website",
      "Improved UX and digital presence",
    ],
  },
  {
    role: "Media Manager",
    company: "ANCU Sousse",
    period: "Sep 2023 – Jun 2024",
    bullets: [
      "Digital communication & media activities",
      "Visual content creation & web platform management",
    ],
  },
  {
    role: "Intern",
    company: "Etikks Lab",
    period: "Jan 2023 – Feb 2023",
    bullets: [
      "Rental application prototype design",
      "UI/UX design and application architecture",
    ],
  },
];

const education = [
  {
    degree: "Master's in AI & IoT",
    school: "ISSAT Mahdia",
    period: "Sep 2025 – Present",
  },
  {
    degree: "Bachelor's in Multimedia & Web Dev",
    school: "",
    period: "Sep 2022 – Jun 2025",
  },
  {
    degree: "High School Diploma — Computer Science",
    school: "Jemmel High School, Monastir",
    period: "Sep 2021 – Jun 2022",
  },
];

const skillGroups = [
  {
    label: "AI & ML",
    skills: ["Python", "Machine Learning", "Computer Vision", "Data Analysis", "Predictive Modeling"],
  },
  {
    label: "IoT & Embedded",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "Microcontrollers"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "Symfony", "Socket.io"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Android", "Java", "SQLite"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "PHP", "C#"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Linux", "Figma", "Postman", "Unity", "Blender"],
  },
];

/* ─── sub-components ──────────────────────────────────────── */

const SectionHeading = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-4 mb-8"
  >
    <span className="w-8 h-px flex-shrink-0" style={{ background: "rgba(254,254,91,0.7)" }} />
    <h2 className="font-cormorant text-ort text-2xl md:text-3xl uppercase tracking-widest font-semibold whitespace-nowrap">
      {children}
    </h2>
    <span
      className="flex-1 h-px"
      style={{ background: "linear-gradient(90deg, rgba(254,254,91,0.4), transparent)" }}
    />
  </motion.div>
);

const ExperienceCard = ({ role, company, period, bullets, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative pl-6 group"
  >
    <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent group-hover:shadow-[0_0_8px_rgba(254,254,91,0.8)] transition-shadow duration-300" />
    <span className="absolute left-[3px] top-4 bottom-0 w-px bg-accent/20" />

    <div className="custom-bg rounded-xl p-4 hover-glow">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <p className="font-cormorant text-accent font-semibold text-base md:text-lg leading-tight">{role}</p>
          <p className="font-dm text-foreground/60 text-xs mt-0.5">{company}</p>
        </div>
        <span className="font-dm text-xs text-foreground/40 whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-1 mt-2">
        {bullets.map((b, i) => (
          <li key={i} className="font-dm text-xs text-foreground/55 flex gap-2">
            <span className="text-accent/60 mt-0.5 flex-shrink-0">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const EducationCard = ({ degree, school, period, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="custom-bg rounded-xl p-4 hover-glow flex items-start justify-between gap-4"
  >
    <div>
      <p className="font-cormorant text-accent text-base md:text-lg font-semibold leading-snug">{degree}</p>
      {school && <p className="font-dm text-foreground/50 text-xs mt-0.5">{school}</p>}
    </div>
    <span className="font-dm text-xs text-foreground/40 whitespace-nowrap">{period}</span>
  </motion.div>
);

/* ─── main ────────────────────────────────────────────────── */

const AboutDetails = () => {
  return (
    <section className="py-20 w-full space-y-20">

      {/* Bio + Stats */}
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <SectionHeading>About Me</SectionHeading>
          <p className="font-dm font-light text-sm md:text-base text-foreground/75 leading-relaxed">
            Master&apos;s student in{" "}
            <span className="text-accent">Artificial Intelligence and Internet of Things</span> at
            ISSAT Mahdia, with a strong background in software development, Python, Machine Learning,
            and intelligent applications. Interested in{" "}
            <span className="text-accent">Generative AI</span>, automation, and building practical
            AI-powered solutions and Embedded Systems that improve business processes and solve
            real-world problems.
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 hover-glow">
          <div className="w-full text-left">
            <p
              className="font-cormorant text-5xl sm:text-6xl font-semibold"
              style={{
                background: "linear-gradient(135deg, #FEFE5B 0%, #DEAA44 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              5+
            </p>
            <p className="font-dm text-foreground/60 text-sm mt-1">Work Experiences</p>
          </div>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 hover-glow">
          <div className="w-full text-left">
            <p
              className="font-cormorant text-5xl sm:text-6xl font-semibold"
              style={{
                background: "linear-gradient(135deg, #FEFE5B 0%, #DEAA44 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              3+
            </p>
            <p className="font-dm text-foreground/60 text-sm mt-1">Years of Experience</p>
          </div>
        </ItemLayout>
      </div>

      {/* GitHub Stats */}
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full sm:col-span-7 md:col-span-4 !p-0 overflow-hidden rounded-xl">
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=YoussrH&show_icons=true&theme=transparent&hide_border=true&title_color=DEAA44&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Top Languages" loading="lazy" />
        </ItemLayout>
        <ItemLayout className="col-span-full sm:col-span-5 md:col-span-8 !p-0 overflow-hidden rounded-xl">
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=YoussrH&show_icons=true&theme=transparent&hide_border=true&title_color=DEAA44&text_color=FFFFFF&icon_color=DEAA44&text_bold=false" alt="GitHub Stats" loading="lazy" />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-6 !p-0 overflow-hidden rounded-xl">
          <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=YoussrH&theme=highcontrast&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&type=png&background=EB545400&ring=DEAA44&currStreakLabel=DEAA44" alt="GitHub Streak" loading="lazy" />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-6 !p-0 overflow-hidden rounded-xl">
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=YoussrH&repo=YoussrH&show_icons=true&theme=transparent&hide_border=true&title_color=DEAA44&text_color=FFFFFF&icon_color=DEAA44&text_bold=false" alt="Pinned Repo" loading="lazy" />
        </ItemLayout>
      </div>

      {/* Skills */}
      <div>
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.07 }}
              className="custom-bg rounded-xl p-4 hover-glow"
            >
              <p className="font-cormorant text-accent text-sm font-semibold uppercase tracking-widest mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 custom-bg rounded-xl p-4 overflow-hidden"
        >
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=python,js,ts,react,nextjs,nodejs,express,tailwind,bootstrap,html,css,java,php,cpp,cs,git,github,linux,figma,postgresql,mysql,mongodb,arduino,raspberrypi,unity,blender,vscode,postman,angular,vue"
            alt="Tech Skills"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Experience */}
      <div>
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <ExperienceCard key={i} {...exp} index={i} />
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-3">
          {education.map((edu, i) => (
            <EducationCard key={i} {...edu} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutDetails;
