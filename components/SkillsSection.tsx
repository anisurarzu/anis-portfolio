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
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { Typography } from "antd";
import { useInView } from "react-intersection-observer";

const { Title, Paragraph } = Typography;

const primaryColor = "#8ABF55";
const secondaryColor = "#6EA344";
const accentColor = "#FFFFFF";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <CodeOutlined className="text-lg" />,
    skills: [
      { name: "HTML5", icon: <FileTextOutlined />, level: 95 },
      { name: "CSS3", icon: <SettingOutlined />, level: 90 },
      { name: "JavaScript", icon: <CodeOutlined />, level: 90 },
      { name: "TypeScript", icon: <FileTextOutlined />, level: 85 },
      { name: "React.js", icon: <CodeOutlined />, level: 90 },
      { name: "Next.js", icon: <RocketOutlined />, level: 85 },
      { name: "Redux", icon: <SyncOutlined />, level: 80 },
      { name: "Tailwind CSS", icon: <SettingOutlined />, level: 85 },
      { name: "Bootstrap", icon: <ToolOutlined />, level: 80 },
      { name: "Material UI", icon: <ApiOutlined />, level: 75 },
      { name: "PrimeReact", icon: <ApiOutlined />, level: 70 },
    ],
  },
  {
    title: "Backend Development",
    icon: <CloudServerOutlined className="text-lg" />,
    skills: [
      { name: "Node.js", icon: <CloudServerOutlined />, level: 85 },
      { name: "Express.js", icon: <DeploymentUnitOutlined />, level: 80 },
      { name: "NestJS", icon: <ToolOutlined />, level: 70 },
      { name: "GraphQL", icon: <ApiOutlined />, level: 75 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: <DatabaseOutlined className="text-lg" />,
    skills: [
      { name: "MongoDB", icon: <DatabaseOutlined />, level: 80 },
      { name: "PostgreSQL", icon: <DatabaseOutlined />, level: 75 },
      { name: "Firebase", icon: <CloudOutlined />, level: 70 },
      { name: "Mongoose", icon: <DatabaseOutlined />, level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <ToolOutlined className="text-lg" />,
    skills: [
      { name: "Git", icon: <GithubOutlined />, level: 85 },
      { name: "GitHub", icon: <GithubOutlined />, level: 85 },
      { name: "Docker", icon: <CloudServerOutlined />, level: 75 },
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
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
  }, [controls, inView, level]);

  return (
    <motion.div
      ref={ref}
      className="w-full max-w-[180px] flex flex-col items-center bg-[#141414] p-5 rounded-xl shadow-sm hover:shadow-lg cursor-pointer border border-gray-800"
      initial={{ scale: 1, y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 25px ${primaryColor}30`,
        y: -5,
      }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="text-3xl mb-3" style={{ color: primaryColor }}>
        {icon}
      </div>
      <span className="text-gray-100 font-medium text-sm mb-2">{name}</span>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: primaryColor }}
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
      <span className="text-xs text-gray-400 mt-1">{level}%</span>
    </motion.div>
  );
}

export default function SkillsSection({ active }: { active: boolean }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const dividerVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="skills"
      className={`relative overflow-hidden ${active ? "block" : "hidden"}`}
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
        scrollMarginTop: "64px",
      }}
    >
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-10"
        style={{ backgroundColor: primaryColor }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-4 pt-8" variants={itemVariants}>
            <Title
              level={2}
              className="mb-6"
              style={{
                color: primaryColor,
                textShadow: `3px 3px 0px ${secondaryColor}20`,
              }}
            >
              My Technical Skills
            </Title>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-16"
          >
            <Paragraph className="text-gray-600 text-base leading-relaxed text-center">
              I specialize in modern web development technologies with expertise
              in both frontend and backend development. Here's a breakdown of my
              technical skills.
            </Paragraph>
          </motion.div>

          <div className="flex flex-col items-center">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="w-full max-w-4xl mt-12"
                variants={itemVariants}
              >
                <motion.div
                  className="flex items-center mb-6"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="mr-3 p-2 rounded-full"
                    style={{
                      backgroundColor: `${primaryColor}20`,
                      color: primaryColor,
                    }}
                    whileHover={{ rotate: 15 }}
                  >
                    {category.icon}
                  </motion.div>
                  <Title level={3} className="m-0 text-gray-800">
                    {category.title}
                  </Title>
                  <motion.div
                    className="ml-4 flex-1 h-px bg-gray-300"
                    initial="hidden"
                    whileInView="visible"
                    variants={dividerVariants}
                    viewport={{ once: true }}
                  />
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-items-center">
                  {category.skills.map(({ name, icon, level }) => (
                    <SkillCard
                      key={name}
                      name={name}
                      icon={icon}
                      level={level}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
