import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Space, Typography, Avatar } from "antd";
import {
  CodeOutlined,
  MailOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

type HomeSectionProps = {
  active: boolean;
};
const primaryColor = "#8ABF55"; // Green accent

export default function HomeSection({ active }: HomeSectionProps) {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "HELLO, I'M ANISUR RAHMAN, A SENIOR WEB DEVELOPER";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing forward
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setTypedText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 100); // Typing speed
      } else {
        // Pause at the end
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Pause duration
      }
    } else {
      // Deleting backward
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText((prev) => prev.slice(0, -1));
        }, 50); // Deleting speed (faster than typing)
      } else {
        // Restart the cycle
        timeout = setTimeout(() => {
          setCurrentIndex(0);
          setIsTyping(true);
        }, 500); // Pause before restart
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, typedText, isTyping]);

  return (
    <section id="home" className={`py-20 ${active ? "block" : "hidden"}`}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Profile Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Subtle glow effect - using primary color */}
            <div
              className="absolute -inset-2 rounded-full opacity-60 blur-lg group-hover:opacity-80 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}60, ${primaryColor}20)`,
              }}
            ></div>

            {/* Image border gradient - using primary color */}
            <div
              className="p-1 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}80)`,
              }}
            >
              <Avatar
                size={300}
                src={
                  <img
                    src="https://i.ibb.co/vvBpPyfC/Anisur-Rahman.jpg"
                    alt="Anisur Rahman"
                    width={300}
                    height={300}
                    className="rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-102"
                  />
                }
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left text-gray-800">
          <Text className="text-emerald-600 font-medium text-lg tracking-wider">
            {typedText}
            <span className="animate-pulse">|</span> {/* Cursor effect */}
          </Text>
          <Title
            level={1}
            className="mt-2 mb-4 text-5xl md:text-6xl font-bold"
            style={{ color: primaryColor }}
          >
            Anisur Rahman
          </Title>
          <Title level={3} className="text-gray-600 text-2xl md:text-3xl mb-6">
            <span className="text-emerald-600">Senior</span> Web Developer
          </Title>

          <Paragraph className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I craft high-performance web applications with cutting-edge
            technologies. Specializing in{" "}
            <span className="font-semibold text-emerald-600">React</span>,{" "}
            <span className="font-semibold text-emerald-600">Next.js</span>, and{" "}
            <span className="font-semibold text-emerald-600">Node.js</span> with
            over 5 years of experience delivering enterprise-grade solutions for
            global clients.
          </Paragraph>

          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button
              type="primary"
              size="large"
              icon={<CodeOutlined />}
              href="#projects"
              className="border-none shadow-lg transition-all duration-300 hover:-translate-y-1 h-12 px-8 font-medium text-white"
              style={{ backgroundColor: primaryColor }}
            >
              View Portfolio
            </Button>
            <Button
              size="large"
              icon={<MailOutlined />}
              href="#contact"
              className="border-2 shadow-lg transition-all duration-300 hover:-translate-y-1 h-12 px-8 font-medium"
              style={{
                borderColor: primaryColor,
                color: primaryColor,
                backgroundColor: `${primaryColor}10`,
              }}
            >
              Contact Me
            </Button>
            <Button
              type="default"
              size="large"
              icon={<DownloadOutlined />}
              href="/resume.pdf"
              className="bg-[#141414] border-gray-700 text-gray-300 shadow-lg hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 h-12 px-8 font-medium"
            >
              Download CV
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-12 flex flex-wrap gap-3 justify-center md:justify-start">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind",
              "GraphQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors duration-200 border"
                style={{
                  backgroundColor: `${primaryColor}20`,
                  color: primaryColor,
                  borderColor: `${primaryColor}30`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
