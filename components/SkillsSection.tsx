import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  ToolOutlined,
  RocketOutlined,
  ApiOutlined,
  FileTextOutlined,
  SettingOutlined,
  SyncOutlined,
  CloudServerOutlined,
  DeploymentUnitOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const primaryColor = "#8ABF55"; // Green accent

const skillCategories = [
  {
    title: "Frontend",
    icon: <CodeOutlined className="text-lg" />,
    skills: [
      { name: "React", icon: <CodeOutlined />, level: 90 },
      { name: "Next.js", icon: <RocketOutlined />, level: 85 },
      { name: "TypeScript", icon: <FileTextOutlined />, level: 80 },
      { name: "Tailwind CSS", icon: <SettingOutlined />, level: 85 },
      { name: "Ant Design", icon: <ApiOutlined />, level: 75 },
      { name: "Redux", icon: <SyncOutlined />, level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: <CloudServerOutlined className="text-lg" />,
    skills: [
      { name: "Node.js", icon: <CloudServerOutlined />, level: 85 },
      { name: "Express", icon: <DeploymentUnitOutlined />, level: 80 },
      { name: "NestJS", icon: <ToolOutlined />, level: 70 },
      { name: "GraphQL", icon: <ApiOutlined />, level: 75 },
    ],
  },
  {
    title: "Database",
    icon: <DatabaseOutlined className="text-lg" />,
    skills: [
      { name: "MongoDB", icon: <DatabaseOutlined />, level: 80 },
      { name: "PostgreSQL", icon: <DatabaseOutlined />, level: 75 },
      { name: "Firebase", icon: <CloudOutlined />, level: 70 },
    ],
  },
  {
    title: "DevOps",
    icon: <ToolOutlined className="text-lg" />,
    skills: [
      { name: "Docker", icon: <CloudServerOutlined />, level: 75 },
      { name: "GitHub", icon: <GithubOutlined />, level: 85 },
      { name: "CI/CD", icon: <SyncOutlined />, level: 70 },
    ],
  },
];

function SkillCard({
  name,
  icon,
  level,
}: {
  name: string;
  icon: React.ReactNode;
  level: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: ["0%", `${level}%`],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  }, [controls, level]);

  const handleHoverStart = () => {
    controls.start({
      width: `${level}%`,
      transition: { duration: 0.4, ease: "easeOut" },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      width: ["0%", `${level}%`],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  };

  return (
    <motion.div
      className="w-full max-w-[180px] flex flex-col items-center bg-[#141414] p-5 rounded-xl shadow-sm hover:shadow-lg cursor-pointer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <div className="text-3xl mb-3" style={{ color: primaryColor }}>
        {icon}
      </div>
      <span className="text-gray-100 font-medium text-sm mb-2">{name}</span>

      {/* Skill Level Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: primaryColor, width: "0%" }}
          animate={controls}
        />
      </div>
      <span className="text-xs text-gray-400 mt-1">{level}%</span>
    </motion.div>
  );
}

export default function SkillsSection({ active }: { active: boolean }) {
  return (
    <section
      id="skills"
      className={`py-20 text-white ${active ? "block" : "hidden"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2
          className="text-4xl font-bold mb-4 text-center"
          style={{ color: primaryColor }}
        >
          What I do
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-400 mb-16 text-base leading-relaxed text-center">
          I am from Dhaka, Bangladesh. I completed my Bachelor's in Software
          Engineering in 2022, and I am currently working as a Software Engineer
          specializing in Web Development.
        </p>

        <div className="flex flex-col items-center">
          {skillCategories.map((category, index) => (
            <div key={index} className="w-full max-w-4xl mt-16">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className="mr-3 p-2 rounded-full bg-[#8ABF55]/20"
                  style={{ color: primaryColor }}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
                <div className="ml-4 flex-1 h-px bg-gray-700"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-items-center">
                {category.skills.map(({ name, icon, level }) => (
                  <SkillCard key={name} name={name} icon={icon} level={level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
