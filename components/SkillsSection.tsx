import { motion } from "framer-motion";
import { Typography } from "antd";
import * as DevIcons from "devicons-react";

const { Title, Paragraph } = Typography;

const technologyIconMap = {
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
    title: "Frontend Development",
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
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 85 },
      { name: ".NET Core", level: 50 },
    ],
  },
  {
    title: "Database & Storage",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 60 },
      { name: "SQL Server", level: 60 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 60 },
    ],
  },
];

// Helper function to get icon
const getTechnologyIcon = (tech: string) => {
  if (technologyIconMap[tech]) {
    const IconComponent = technologyIconMap[tech];
    return <IconComponent size="28px" />;
  }
  return <span className="text-xs font-bold">{tech.charAt(0)}</span>;
};

// Circular skill ring
function SkillRing({ name, level }: { name: string; level: number }) {
  const getLevelText = () => {
    if (level >= 85) return "Expert";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="flex flex-col items-center justify-center relative w-28 h-28"
    >
      <svg className="absolute w-28 h-28 transform -rotate-90">
        <circle
          cx="56"
          cy="56"
          r="50"
          stroke="rgba(229,231,235,0.6)"
          strokeWidth="8"
          fill="none"
        />
        <motion.circle
          cx="56"
          cy="56"
          r="50"
          stroke="url(#grad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: "0, 314" }}
          whileInView={{ strokeDasharray: `${(314 * level) / 100}, 314` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
        </defs>
      </svg>
      <div className="z-10 flex flex-col items-center">
        <div className="text-gray-800">{getTechnologyIcon(name)}</div>
        <span className="text-xs mt-1 text-gray-700 font-medium">{name}</span>
        <span className="text-[10px] text-gray-500">{level}%</span>
        <span className="mt-1 text-[10px] px-2 py-0.5 bg-gray-100 border border-gray-300 rounded-full text-gray-600">
          {getLevelText()}
        </span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection({ active }: { active: boolean }) {
  return (
    <section
      id="skills"
      className={`relative overflow-hidden ${active ? "block" : "hidden"}`}
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f9fafb)",
        paddingTop: "100px",
        paddingBottom: "100px",
        scrollMarginTop: "64px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-gray-600 font-semibold tracking-wide uppercase">
            My Expertise
          </span>
          <Title
            level={2}
            className="text-gray-900 mt-3 text-4xl md:text-5xl font-extrabold"
          >
            Skills & Technologies
          </Title>
          <div className="w-24 h-1 bg-gray-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto mb-16">
          <Paragraph className="text-gray-600 text-lg leading-relaxed text-center">
            With nearly 4 years of professional experience, I specialize in{" "}
            <strong>scalable, high-performing web applications</strong> by
            combining strong frontend design with powerful backend logic.
          </Paragraph>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white/90 backdrop-blur border border-gray-300 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <div className="flex items-center mb-8">
                <div className="w-2 h-8 bg-gray-900 rounded mr-3"></div>
                <Title
                  level={3}
                  className="m-0 text-gray-900 text-lg font-semibold tracking-wide"
                >
                  {category.title}
                </Title>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-6 justify-center">
                {category.skills.map(({ name, level }) => (
                  <SkillRing key={name} name={name} level={level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="mt-20 p-8 bg-gray-50 rounded-2xl border border-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title level={4} className="text-gray-800 mb-6 text-center font-bold">
            Soft Skills
          </Title>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Teamwork & Collaboration",
              "Problem Solving",
              "Time Management",
              "Adaptability",
              "Analytical Thinking",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
