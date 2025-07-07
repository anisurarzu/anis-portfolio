"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, Space, Typography, Tag, Carousel, Skeleton } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { motion, Variants, useScroll, useSpring } from "framer-motion";

const { Title, Text } = Typography;
const { Meta } = Card;

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "Fast Track Booking",
    description:
      "Hotel booking system with availability checks, bookings, invoices & reports.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express.js"],
    link: "https://www.fasttrackbookingbd.com/",
    github: "github.com/anisurarzu",
    images: [
      "https://picsum.photos/id/1015/600/400",
      "https://picsum.photos/id/1025/600/400",
    ],
  },
  {
    title: "EBS-365 ERP",
    description:
      "Comprehensive ERP for managing finance, HRM, merchandising & production.",
    technologies: ["React.js", ".NET Core", "Redux", "REST API"],
    link: "https://demogmt.ebs365.com/",
    github: "github.com/anisurarzu",
    images: [
      "https://picsum.photos/id/1005/600/400",
      "https://picsum.photos/id/1003/600/400",
    ],
  },
  {
    title: "DMF Foundation",
    description:
      "Donation management platform built for Islamic charitable organization.",
    technologies: ["React.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://ourdmf.xyz/",
    github: "github.com/anisurarzu",
    images: [
      "https://picsum.photos/id/1045/600/400",
      "https://picsum.photos/id/1043/600/400",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with payment integration and inventory management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    link: "https://example-ecommerce.com",
    github: "github.com/anisurarzu",
    images: [
      "https://picsum.photos/id/1020/600/400",
      "https://picsum.photos/id/1021/600/400",
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TypingTitle = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Featured Projects";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
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
          setCurrentIndex(0);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isTyping]);

  return (
    <span style={{ color: "#89BF55" }}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function ProjectsSection({ active }: { active: boolean }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Framer Motion scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="projects"
      className={`relative py-20 px-4 md:px-8 lg:px-16 ${
        active ? "block" : "hidden"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#89BF55] z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="text-center mb-16">
        <Text className="text-[#89BF55] font-medium tracking-wider text-lg uppercase">
          My Work
        </Text>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title level={2} className="mt-3 text-3xl md:text-4xl font-bold">
            <TypingTitle />
          </Title>
        </motion.div>
        <div className="w-20 h-1 bg-[#89BF55] mx-auto mt-4" />
      </div>

      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card
                  className="shadow-lg rounded-2xl text-center h-full"
                  cover={
                    <Skeleton.Image
                      active
                      style={{
                        width: "100%",
                        height: 192,
                        borderRadius: "1rem 1rem 0 0",
                      }}
                    />
                  }
                  actions={[
                    <Skeleton.Button
                      active
                      key="visit"
                      style={{ width: 60, height: 32, marginRight: 8 }}
                    />,
                    <Skeleton.Button
                      active
                      key="github"
                      style={{ width: 60, height: 32 }}
                    />,
                  ]}
                >
                  <Skeleton
                    active
                    paragraph={{ rows: 3 }}
                    title={{ width: "60%" }}
                    round
                  />
                </Card>
              </motion.div>
            ))
          : projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card
                  hoverable
                  className="shadow-lg rounded-2xl text-center h-full flex flex-col"
                  cover={
                    <Carousel autoplay dots className="rounded-t-2xl">
                      {project.images.map((img, i) => (
                        <div key={i} className="h-48 relative">
                          <Image
                            src={img}
                            alt={`${project.title} Screenshot ${i + 1}`}
                            fill
                            className="object-cover rounded-t-2xl"
                          />
                        </div>
                      ))}
                    </Carousel>
                  }
                  actions={[
                    project.link && (
                      <a
                        key="visit"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#89BF55] hover:text-[#78a84a]"
                      >
                        <Space>
                          <LinkOutlined /> Visit
                        </Space>
                      </a>
                    ),
                    project.github && (
                      <a
                        key="github"
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#89BF55] hover:text-[#78a84a]"
                      >
                        <Space>
                          <GithubOutlined /> GitHub
                        </Space>
                      </a>
                    ),
                  ].filter(Boolean)}
                >
                  <Meta
                    title={
                      <span className="text-[#89BF55] font-semibold">
                        {project.title}
                      </span>
                    }
                    description={
                      <p className="text-gray-700">{project.description}</p>
                    }
                  />
                  <div className="mt-4 flex-grow">
                    <Space size={[0, 8]} wrap>
                      {project.technologies.map((tech, i) => (
                        <Tag key={i} color="#89BF55" className="text-white">
                          {tech}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                </Card>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
