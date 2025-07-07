import { useEffect, useState } from "react";
import { Card, Tag, Typography, Space } from "antd";
import { LaptopOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

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

const TypingTag = ({ tech }: { tech: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing forward
      if (currentIndex < tech.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + tech[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 50); // Typing speed
      } else {
        // Pause at full text
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 30); // Deleting speed
      } else {
        // Restart cycle
        timeout = setTimeout(() => {
          setCurrentIndex(0);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isTyping, tech]);

  return (
    <Tag
      className="px-3 py-1 rounded-full text-xs font-medium border-0"
      style={{
        backgroundColor: "#8ABF55",
        color: "white",
        minWidth: "60px",
      }}
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </Tag>
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
      // Typing forward
      if (currentCharIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentText[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        // Pause at full text
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 50);
      } else {
        // Move to next text
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
  const titleVariations = [
    "Work Experience",
    "Professional Journey",
    "Career Path",
    "Employment History",
  ];

  return (
    <section
      id="experience"
      className={`py-20 px-4 md:px-8 lg:px-16 ${
        active ? "block" : "hidden"
      } bg-gray-50`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Text className="text-[#8ABF55] font-medium tracking-wider text-lg uppercase">
            Professional Journey
          </Text>
          <Title
            level={2}
            className="text-gray-900 mt-3 text-3xl md:text-4xl font-bold"
          >
            <TypingTitle texts={titleVariations} />
          </Title>
          <div className="w-20 h-1 bg-[#8ABF55] mx-auto mt-4"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 group"
              data-aos="fade-up"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-4 border-[#8ABF55] flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-[#8ABF55]"></div>
              </div>

              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200"></div>
              )}

              <Card
                bordered={false}
                className="transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
                bodyStyle={{ padding: 0 }}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-[#8ABF55]/10 flex items-center justify-center">
                        <LaptopOutlined className="text-[#8ABF55] text-xl" />
                      </div>
                    </div>

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
                          <li
                            key={i}
                            className="flex items-start text-gray-600"
                          >
                            <RightOutlined className="text-[#8ABF55] mr-3 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <TypingTag key={i} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
