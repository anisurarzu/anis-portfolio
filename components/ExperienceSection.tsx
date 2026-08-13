"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

type Experience = {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    company: "Dekko Isho Group",
    role: "Sr. Software Engineer",
    duration: "Dec 2024 – Present",
    description: [
      "Lead frontend development of a large-scale ERP using React.js, with a focus on scalability, usability, and responsive design.",
      "Build reusable UI libraries that keep design consistent and speed up feature delivery across teams.",
      "Optimize UI performance to reduce load times and make everyday workflows feel faster.",
      "Collaborate with backend engineers to integrate .NET Core APIs across core business modules.",
      "Contribute to API design and debugging on the .NET Core side when the product needs it.",
      "Work with analysts and stakeholders to turn business requirements into practical technical solutions.",
    ],
    technologies: ["React.js", ".NET Core", "SQL Server", "ERP Systems"],
  },
  {
    company: "Buyonia Bangladesh Limited",
    role: "Software Engineer",
    duration: "Apr 2022 – Nov 2024",
    description: [
      "Designed and shipped React.js and Express.js interfaces used by more than 2,000 active users.",
      "Improved application performance by 25% through Redux and Context API optimization.",
      "Created modular UI components that cut new feature development time by 30%.",
      "Integrated REST APIs so services could communicate cleanly across the platform.",
      "Helped roll out ERP solutions across five companies, supporting adoption and user satisfaction.",
      "Owned testing, bug-fixing, and reliability work to keep production systems stable.",
    ],
    technologies: ["React.js", "Express.js", "Redux", "REST APIs"],
  },
  {
    company: "DMF Foundation",
    role: "Full Stack Developer",
    duration: "Feb 2022 – Present",
    description: [
      "Volunteered as a full-stack developer to design an ERP-like platform for a charity organization.",
      "Built the scholarship system covering applications, results, and attendance tracking.",
      "Extended the platform with donation tracking, investment projects, and HR workflows.",
      "Automated reporting with dashboards that give management real-time operational insight.",
      "Integrated secure online donations and financial tools to support transparency and donor trust.",
      "Scaled the platform to 30+ institutions, improving program efficiency by 70–80%.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          eyebrow="Career"
          title="Professional experience"
          description="Senior frontend work across enterprise ERP, hospitality platforms, and full-stack products — now looking for the next chapter in Germany."
        />

        <div className="relative space-y-6">
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative md:pl-12"
            >
              <div className="absolute left-0 top-7 hidden md:flex h-[22px] w-[22px] items-center justify-center rounded-full border border-accent/40 bg-bg">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <div className="group rounded-3xl border border-border bg-white/[0.03] p-6 md:p-8 transition-colors hover:border-accent/30 hover:bg-white/[0.045]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-accent text-sm tracking-wide">
                      {exp.company}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="w-fit rounded-full border border-border bg-bg-elevated px-3 py-1 text-sm text-muted">
                    {exp.duration}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.description.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm md:text-[15px] leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
