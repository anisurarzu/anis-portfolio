"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  Space,
  Typography,
  Tag,
  Carousel,
  Skeleton,
  Button,
  Modal,
} from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { motion, Variants, useScroll, useSpring } from "framer-motion";

const { Title, Text } = Typography;
const { Meta } = Card;

type Project = {
  title: string;
  description: string;
  duration: string;
  achievements: string[];
  technologies: string[];
  link?: string;
  github?: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "EBS-365 ERP",
    description: "Enterprise Resource Planning System",
    duration: "Apr 2022 – Nov 2024",
    achievements: [
      "Led front-end development of a comprehensive ERP system using React.js and .NET Core, serving multiple enterprises including Dekko Isho Group and Montrims Ltd.",
      "Designed and implemented modules for Purchase-to-Pay, Merchandising, Finance, HRM, Production, and Commercial operations, reducing manual processes by 40%.",
      "Integrated RESTful APIs and AWS services for scalable cloud deployment, ensuring high availability and real-time data synchronization across modules.",
    ],
    technologies: [
      "React.js",
      ".NET Core",
      "Redux",
      "PrimeReact",
      "SQL Server",
      "REST API",
      "AWS",
    ],
    link: "https://demogmt.ebs365.info/",
    github: "github.com/anisurarzu",
    images: [
      "/images/erp-1.png",
      "/images/erp-2.png",
      "/images/erp-3.png",
      "/images/erp-4.png",
      "/images/erp-5.png",
      "/images/erp-6.png",
    ],
  },
  {
    title: "Fast Track Booking",
    description: "Hotel Booking & Management System",
    duration: "Oct 2024 – Jul 2025",
    achievements: [
      "Developed a full-stack hotel management platform using Next.js, Node.js, and MongoDB, enabling real-time room availability checks, booking, and invoicing.",
      "Built an admin dashboard with reporting features (Excel/PDF exports) and a calendar view for optimized room allocation and conflict reduction.",
      "Deployed and scaled the system across 5 hotels in Cox’s Bazar, improving operational efficiency by 50%.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Render",
      "Vercel",
      "Ant Design",
      "REST API",
    ],
    link: "https://www.fasttrackbookingbd.com/",
    github: "github.com/anisurarzu",
    images: [
      "/images/ftb-1.png",
      "/images/ftb-2.png",
      "/images/ftb-3.png",
      "/images/ftb-4.png",
    ],
  },
  {
    title: "DMF Foundation Management System",
    description: "Integrated Islamic Charity & Educational Platform",
    duration: "Feb 2022 – Feb 2024",
    achievements: [
      "Engineered a full-featured web application for DMF Foundation supporting scholarship management, donations, investments, student attendance, results, and e-commerce.",
      "Implemented role-based dashboards for admins, donors, and students with real-time analytics, automated reporting, and secure payment integrations.",
      "Scaled the platform to support 30+ educational institutions, improving operational transparency and reducing administrative overhead by 70–80%.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "Firebase",
      "Render",
    ],
    link: "https://ourdmf.com/",
    github: "github.com/anisurarzu",
    images: [
      "/images/dmf-1.png",
      "/images/dmf-2.png",
      "/images/dmf-3.png",
      "/images/dmf-4.png",
      "/images/dmf-5.png",
      "/images/dmf-6.png",
      "/images/dmf-7.png",
      "/images/dmf-8.png",
      "/images/dmf-9.png",
    ],
  },
  {
    title: "Hoktok Fashion",
    description: "Fashion & Apparel E-Commerce Platform",
    duration: "Mar 2023 – Present",
    achievements: [
      "Developed a responsive e-commerce platform for fashion and apparel using Next.js and Node.js.",
      "Integrated delivery-based order processing with Pathao Courier API for shipping and tracking.",
      "Implemented dynamic product catalog with filtering, search, and inventory stock management.",
      "Built user authentication, order management, and real-time inventory tracking for smooth operations.",
      "Optimized performance and SEO to increase traffic and customer engagement.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "Vercel",
    ],
    link: "https://www.hoktokfashion.com/",
    github: "github.com/anisurarzu/hoktok-fashion",
    images: [
      "/images/hoktok-1.png",
      "/images/hoktok-3.png",
      "/images/hoktok-4.png",
      "/images/hoktok-5.png",
    ],
  },
  {
    title: "FTB Admin",
    description: "Comprehensive Hotel Management System",
    duration: "Jan 2024 – Present",
    achievements: [
      "Developed a full-featured hotel management system to streamline operations and administration.",
      "Implemented modules for customer booking, room management, and real-time availability tracking.",
      "Automated expense tracking, revenue calculation, commissions, and daily financial statements.",
      "Built inventory management for hotel supplies, housekeeping, and service materials.",
      "Generated detailed reporting dashboards for management to make data-driven decisions.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "Vercel",
      "Render",
    ],
    link: "https://www.fasttrackbookingbd.com/admin",
    github: "github.com/anisurarzu/ftb-admin",
    images: [
      "/images/ftbadmin-1.png",
      "/images/ftbadmin-2.png",
      "/images/ftbadmin-3.png",
      "/images/ftbadmin-4.png",
      "/images/ftbadmin-5.png",
    ],
  },
  {
    title: "Nexa Inventory",
    description: "Inventory Management System for Local Shops",
    duration: "Jun 2023 – Present",
    achievements: [
      "Developed a comprehensive inventory management system for local shops, including furniture and retail stores.",
      "Implemented live stock management with real-time updates and dynamic product categorization.",
      "Built product management, sales records, and stock tracking modules for efficient operations.",
      "Enabled QR code-based product selling and automatic profit calculation for quick transactions.",
      "Created reporting tools for sales, stock, and profit analytics to aid decision-making.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "typeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "vercel",
    ],
    link: "https://www.nexainventory.com/",
    github: "github.com/anisurarzu/nexa-inventory",
    images: [
      "/images/nexa-1.png",
      "/images/nexa-2.png",
      "/images/nexa-3.png",
      "/images/nexa-4.png",
    ],
  },

  {
    title: "Flower Picker",
    description: "Flower Shop Management Software",
    duration: "May 2023 – Dec 2023",
    achievements: [
      "Developed a complete flower shop management system to manage daily operations efficiently.",
      "Implemented inventory tracking, order management, and expense monitoring modules.",
      "Built role-based user permissions for staff and admin to control access.",
      "Created reporting tools for sales, expenses, and stock insights to assist management decisions.",
      "Deployed using Vercel and Render for scalable and reliable performance.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "Vercel",
      "Render",
    ],
    link: "https://www.flowerpicker.com/",
    github: "github.com/anisurarzu/flower-picker",
    images: [
      "/images/flower-1.png",
      "/images/flower-2.png",
      "/images/flower-3.png",
      "/images/flower-4.png",
    ],
  },
  {
    title: "Smart Dhopa",
    description: "Online Laundry Management System",
    duration: "Jan 2023 – Jun 2023",
    achievements: [
      "Developed an online laundry platform allowing users to create laundry orders based on their location.",
      "Built a management portal for staff to handle orders, track progress, and manage operations efficiently.",
      "First online laundry platform at DIU using modern technology for washing, dry cleaning, and laundry services.",
      "Integrated React.js frontend with Firebase backend for real-time order management and notifications.",
      "Optimized turnaround time by automating order tracking and management.",
    ],
    technologies: ["React.js", "Firebase", "Tailwind CSS", "REST API"],
    link: "https://www.smartdhopa.com/",
    github: "github.com/anisurarzu/smart-dhopa",
    images: [
      "/images/dhopa-1.png",
      "/images/dhopa-2.png",
      "/images/dhopa-3.png",
      "/images/dhopa-4.png",
    ],
  },
  {
    title: "Lanhong Textile",
    description: "Portfolio Website for Textile Business",
    duration: "Feb 2023 – Apr 2023",
    achievements: [
      "Developed a clean and responsive portfolio site to showcase textile products and company details.",
      "Built with Next.js for optimized performance and SEO.",
      "Designed user-friendly layouts to highlight textile collections and company information.",
      "Implemented smooth navigation and responsive design for all devices.",
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
    link: "https://www.lanhongtextile.com/",
    github: "github.com/anisurarzu/lanhong-textile",
    images: [
      "/images/Langhong-1.png",
      "/images/langhong-2.png",
      "/images/langhong-3.png",
      "/images/langhong-4.png",
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ProjectsSection({ active }: { active: boolean }) {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#111111] z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="text-center mb-16">
        <Text className="text-[#555] font-medium tracking-wider text-lg uppercase">
          My Work
        </Text>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title
            level={2}
            className="mt-2 text-3xl md:text-4xl font-bold text-[#111]"
          >
            Featured Projects
          </Title>
        </motion.div>
        <div className="w-20 h-1 bg-[#111111] mx-auto mt-4 rounded-full" />
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
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-full"
                  styles={{
                    body: {
                      padding: "16px",
                    },
                  }}
                  cover={
                    <Skeleton.Image
                      active
                      style={{
                        width: "100%",
                        height: 160,
                        borderRadius: "0.75rem 0.75rem 0 0",
                      }}
                    />
                  }
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
                  className="rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  styles={{
                    body: {
                      padding: "16px",
                    },
                  }}
                  cover={
                    <Carousel autoplay dots className="rounded-t-2xl">
                      {project.images.map((img, i) => (
                        <div key={i} className="h-40 relative">
                          <Image
                            src={img}
                            alt={`${project.title} Screenshot ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </Carousel>
                  }
                >
                  <Meta
                    title={
                      <span className="text-[#111111] font-semibold text-base">
                        {project.title}
                      </span>
                    }
                    description={
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    }
                  />

                  <div className="mt-4 flex-grow">
                    <Space size={[0, 8]} wrap>
                      {project.technologies.map((tech, i) => (
                        <Tag
                          key={i}
                          color="#111111"
                          className="text-white rounded-full px-3 py-1 text-xs"
                        >
                          {tech}
                        </Tag>
                      ))}
                    </Space>
                  </div>

                  <div className="mt-4 flex justify-center gap-2">
                    <Button
                      type="dashed"
                      shape="round"
                      icon={<InfoCircleOutlined />}
                      onClick={() => setSelectedProject(project)}
                    >
                      Info
                    </Button>
                    {project.link && (
                      <Button
                        type="primary"
                        shape="round"
                        icon={<LinkOutlined />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        type="default"
                        shape="round"
                        icon={<GithubOutlined />}
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
      </div>

      {/* Modal for Project Details */}
      <Modal
        title={selectedProject?.title}
        open={!!selectedProject}
        onCancel={() => setSelectedProject(null)}
        footer={null}
        centered
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Image carousel */}
            <Carousel autoplay className="rounded-lg overflow-hidden">
              {selectedProject.images.map((img, i) => (
                <div key={i} className="h-56 relative">
                  <Image
                    src={img}
                    alt={`${selectedProject.title} Screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </Carousel>

            {/* Duration */}
            <p className="text-gray-500 text-sm">
              <strong>Duration:</strong> {selectedProject.duration}
            </p>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Achievements */}
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {selectedProject.achievements?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, i) => (
                <Tag
                  key={i}
                  color="#111111"
                  className="text-white rounded-full px-3 py-1"
                >
                  {tech}
                </Tag>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
