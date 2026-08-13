"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import * as DevIcons from "devicons-react";
import SectionHeader from "@/components/SectionHeader";

const technologyIconMap: Record<string, ComponentType<{ size: string }>> = {
  JavaScript: DevIcons.JavascriptOriginal,
  TypeScript: DevIcons.TypescriptOriginal,
  "React.js": DevIcons.ReactOriginal,
  "Next.js": DevIcons.NextjsOriginal,
  HTML5: DevIcons.Html5Original,
  "CSS3/SASS": DevIcons.Css3Original,
  Redux: DevIcons.ReduxOriginal,
  "Tailwind CSS": DevIcons.TailwindcssOriginal,
  Bootstrap: DevIcons.BootstrapPlain,
  "Material UI": DevIcons.MaterialuiPlain,
  "Node.js": DevIcons.NodejsPlain,
  "Express.js": DevIcons.ExpressOriginal,
  ".NET Core": DevIcons.DotnetcorePlain,
  MongoDB: DevIcons.MongodbPlain,
  MySQL: DevIcons.MysqlOriginal,
  "SQL Server": DevIcons.MicrosoftsqlserverPlain,
  Git: DevIcons.GitPlain,
  Docker: DevIcons.DockerPlain,
  AWS: DevIcons.AmazonwebservicesOriginalWordmark,
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3/SASS", level: 90 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 90 },
      { name: "Material UI", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: ".NET Core", level: 50 },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 60 },
      { name: "SQL Server", level: 60 },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 60 },
    ],
  },
];

function getTechnologyIcon(tech: string) {
  const IconComponent = technologyIconMap[tech];
  if (IconComponent) return <IconComponent size="22px" />;
  return <span className="text-xs font-bold">{tech.charAt(0)}</span>;
}

function levelLabel(level: number) {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Strong";
  return "Working";
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          eyebrow="Capabilities"
          title="A stack ready for production teams."
          description="Nearly four years of professional work across frontend craft, backend logic, and production tooling — ready to contribute in a German engineering team."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-white/[0.03] p-6 md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-accent" />
                <h3 className="font-display text-xl font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                          {getTechnologyIcon(skill.name)}
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted">
                        {levelLabel(skill.level)}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border border-border bg-white/[0.03] p-8"
        >
          <h3 className="text-center font-display text-lg font-semibold">
            How I work
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Teamwork & Collaboration",
              "Problem Solving",
              "Time Management",
              "Adaptability",
              "Analytical Thinking",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-muted hover:text-accent hover:border-accent/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
