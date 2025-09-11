import { useEffect, useState } from "react";
import { Card, Tag, Typography, Space } from "antd";
import { LaptopOutlined, RightOutlined } from "@ant-design/icons";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const { Title, Text, Paragraph } = Typography;

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
    role: "Senior Software Engineer",
    duration: "Dec 2024 – Present",
    description: [
      "Leading development of enterprise-grade ERP systems using React.js, Next.js, and Node.js",
      "Creating highly reusable components with accessibility and performance in mind",
      "Coordinating with cross-functional teams to implement scalable backend and frontend solutions",
    ],
    technologies: ["React", "Next.js", "Node.js", "ERP Systems"],
  },
  {
    company: "Buyonia Bangladesh Limited",
    role: "Software Engineer",
    duration: "Apr 2022 – Dec 2024",
    description: [
      "Designed web interfaces for 20K+ users using React.js and Express.js",
      "Improved performance by optimizing state with Redux and Context API",
      "Developed API-integrated dynamic dashboards and reusable modules",
    ],
    technologies: ["React", "Express.js", "Redux", "REST APIs"],
  },
];

const primaryColor = "#8ABF55";
const secondaryColor = "#6EA344";
const accentColor = "#FFFFFF";

const TypingTag = ({ tech }: { tech: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentIndex < tech.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + tech[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 50);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setCurrentIndex(0);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isTyping, tech]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Tag
        className="px-3 py-1 rounded-full text-xs font-medium border-0"
        style={{
          backgroundColor: primaryColor,
          color: "white",
          minWidth: "60px",
        }}
      >
        {displayText}
        <span className="animate-pulse">|</span>
      </Tag>
    </motion.div>
  );
};

const TypingTitle = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (currentCharIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setCurrentCharIndex(0);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, displayText, isTyping, currentTextIndex, texts]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function ExperienceSection({ active }: { active: boolean }) {
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
        staggerChildren: 0.2,
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

  const titleVariations = [
    "Work Experience",
    "Professional Journey",
    "Career Path",
    "Employment History",
  ];

  return (
    <section
      id="experience"
      className={`relative overflow-hidden ${active ? "block" : "hidden"}`}
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
        scrollMarginTop: "64px",
      }}
    >
      {/* Decorative elements */}
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
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <Text className="text-[#8ABF55] font-medium tracking-wider text-lg uppercase">
              Professional Journey
            </Text>
            <Title
              level={2}
              className="text-gray-900 mt-3 text-3xl md:text-4xl font-bold"
              style={{
                textShadow: `3px 3px 0px ${secondaryColor}20`,
              }}
            >
              <TypingTitle texts={titleVariations} />
            </Title>
            <motion.div
              className="w-20 h-1 bg-[#8ABF55] mx-auto mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div className="space-y-8" variants={containerVariants}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-10 group"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-4 border-[#8ABF55] flex items-center justify-center z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#8ABF55]"></div>
                </motion.div>

                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200"></div>
                )}

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card
                    bordered={false}
                    className="transition-all duration-300"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "12px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                    bodyStyle={{ padding: 0 }}
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ rotate: 15 }}
                        >
                          <div className="w-14 h-14 rounded-lg bg-[#8ABF55]/10 flex items-center justify-center">
                            <LaptopOutlined className="text-[#8ABF55] text-xl" />
                          </div>
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                            <div>
                              <Title level={3} className="text-gray-900 mb-1">
                                {exp.role}
                              </Title>
                              <Text className="text-[#8ABF55] font-medium text-base">
                                {exp.company}
                              </Text>
                            </div>
                            <Text className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm">
                              {exp.duration}
                            </Text>
                          </div>

                          <ul className="space-y-3 mt-6">
                            {exp.description.map((item, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start text-gray-600"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <RightOutlined className="text-[#8ABF55] mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <motion.div
                            className="mt-8 flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                          >
                            {exp.technologies.map((tech, i) => (
                              <TypingTag key={i} tech={tech} />
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
