import { useState } from "react";
import { Card, Tag, Typography } from "antd";
import { LaptopOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

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
    company: "DEKKO ISHO GROUP",
    role: "SR. SOFTWARE ENGINEER",
    duration: "Dec 2024 – Present",
    description: [
      "Developed and maintained the ERP front-end using React.js, ensuring scalability, usability, and responsive design.",
      "Built reusable UI component libraries to maintain design consistency and improve developer productivity.",
      "Optimized UI performance to reduce load times and improve user interaction.",
      "Collaborated with backend developers to integrate .NET Core APIs for business modules.",
      "Occasionally contributed to .NET Core backend development, assisting in API design and debugging.",
      "Worked with business analysts and stakeholders to translate requirements into technical solutions.",
    ],
    technologies: ["React.js", ".NET Core", "SQL Server", "ERP Systems"],
  },
  {
    company: "BUYONIA BANGLADESH LIMITED",
    role: "SOFTWARE ENGINEER",
    duration: "Apr 2022 – Nov 2024",
    description: [
      "Designed and developed web interfaces with React.js and Express.js for more than 2,000 active users.",
      "Increased application performance by 25% through optimization of Redux and Context API.",
      "Developed modular, reusable UI components, reducing new feature development time by 30%.",
      "Integrated multiple REST APIs, enabling seamless communication across services.",
      "Contributed to the deployment of ERP solutions across five companies, driving smooth adoption and user satisfaction.",
      "Supported testing, bug-fixing, and optimization to maintain high application reliability.",
    ],
    technologies: ["React.js", "Express.js", "Redux", "REST APIs"],
  },
  {
    company: "DMF FOUNDATION",
    role: "FULL STACK DEVELOPER",
    duration: "Feb 2022 – Present",
    description: [
      "Volunteered as a full-stack developer to design and implement a comprehensive ERP-like platform for a charity-based organization.",
      "Built and maintained the DMF Scholarship Management System covering student applications, result publication, and attendance tracking.",
      "Extended the platform to include donation tracking, investment project management, and HR functions.",
      "Automated business analysis and reporting with dashboards that provide real-time insights for management.",
      "Integrated a secure online donation and financial management system, supporting transparency and donor trust.",
      "Scaled the platform to serve students from 30+ institutions, boosting program efficiency by 70–80%.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export default function ExperienceSection({ active }: { active: boolean }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className={`relative overflow-hidden ${active ? "block" : "hidden"}`}
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "80px",
        paddingBottom: "80px",
        scrollMarginTop: "64px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Text className="text-gray-600 font-medium tracking-wider text-lg uppercase">
            Professional Journey
          </Text>
          <Title
            level={2}
            className="text-gray-900 mt-3 text-3xl md:text-4xl font-bold"
          >
            Work Experience
          </Title>
          <div className="w-20 h-1 bg-gray-800 mx-auto mt-4" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-white border-2 border-gray-800 flex items-center justify-center z-10">
                <div className="w-2 h-2 rounded-full bg-gray-800"></div>
              </div>

              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-300"></div>
              )}

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card
                  bordered={false}
                  className="transition-all duration-300"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    boxShadow:
                      hoveredCard === index
                        ? "0 10px 30px rgba(0,0,0,0.1)"
                        : "0 4px 12px rgba(0,0,0,0.05)",
                    border: "1px solid #f0f0f0",
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                          <LaptopOutlined className="text-gray-700 text-lg" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                          <div>
                            <Title
                              level={3}
                              className="text-gray-900 mb-1 text-lg"
                            >
                              {exp.role}
                            </Title>
                            <Text className="text-gray-700 font-medium text-base">
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
                              <RightOutlined className="text-gray-800 mr-3 mt-1 flex-shrink-0 text-xs" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Tag
                              key={i}
                              className="px-3 py-1 rounded-md text-xs font-normal"
                              style={{
                                backgroundColor: "#f5f5f5",
                                color: "#333333",
                                border: "1px solid #e0e0e0",
                              }}
                            >
                              {tech}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
