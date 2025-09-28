import { Typography, Button, Tag } from "antd";
import {
  CodeOutlined,
  MailOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

type HomeSectionProps = {
  active: boolean;
  setActiveSection: (key: string) => void;
};

export default function HomeSection({
  active,
  setActiveSection,
}: HomeSectionProps) {
  const fullText = "Hi, I'm Anisur Rahman Arzu";
  const subText = "Frontend Software Engineer • React & Next.js Specialist";

  return (
    <section
      id="home"
      className={`relative py-32 ${active ? "block" : "hidden"}`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side Web Development Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="https://cdn.dribbble.com/users/1059583/screenshots/4171367/coding-freak.gif"
            alt="Web Development Illustration"
            className="max-w-md w-full object-contain rounded-2xl"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <p className="uppercase tracking-[0.2em] text-gray-500 font-medium text-sm">
            {fullText}
          </p>

          <Title
            level={1}
            className="mt-3 mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold"
            style={{ color: "#111" }}
          >
            {subText}
          </Title>

          <Paragraph className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Passionate about crafting{" "}
            <span className="font-semibold">scalable web applications</span>{" "}
            with <span className="font-semibold">clean architecture</span> and{" "}
            <span className="font-semibold">intuitive UI/UX</span>. Currently at{" "}
            <span className="font-semibold">Dekko Isho Group</span>, building
            modern digital products that serve thousands of users worldwide.
          </Paragraph>

          {/* Tech Stack Tags */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Ant Design",
              "REST APIs",
            ].map((skill) => (
              <Tag
                key={skill}
                color="geekblue"
                className="px-3 py-1 text-lg rounded-full"
              >
                {skill}
              </Tag>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-18 flex flex-wrap gap-4 justify-center lg:justify-start">
            {/* View Work Button triggers Skills section */}
            <Button
              type="primary"
              size="large"
              icon={<CodeOutlined />}
              onClick={() => setActiveSection("projects")}
              className="h-12 px-8 font-bold text-white"
              style={{
                background: "linear-gradient(90deg,#111111,#333333)",
                border: "none",
              }}
            >
              View Work
            </Button>

            <Button
              size="large"
              icon={<MailOutlined />}
              onClick={() => setActiveSection("contact")}
              href="#contact"
              className="h-12 px-8 font-bold border-2 border-black text-black hover:bg-black hover:text-white transition"
            >
              Let’s Talk
            </Button>

            <Button
              size="large"
              icon={<DownloadOutlined />}
              href="https://drive.google.com/file/d/1UdQKpJHBLMAf6Sus04yq_hiJWjwnSdW2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 font-bold border-2 border-black text-black hover:bg-black hover:text-white transition"
            >
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
