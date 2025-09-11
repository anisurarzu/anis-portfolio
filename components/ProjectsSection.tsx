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
  Tooltip,
} from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  InfoCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { motion, Variants, useScroll, useSpring } from "framer-motion";
import * as DevIcons from "devicons-react";

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
  isLive?: boolean; // New property to indicate if project is live for clients
};

// Map technology names to Devicon components
const technologyIconMap: Record<string, any> = {
  "React.js": DevIcons.ReactOriginal,
  "Next.js": DevIcons.NextjsOriginal,
  "Node.js": DevIcons.NodejsPlain,
  "Express.js": DevIcons.ExpressOriginal,
  TypeScript: DevIcons.TypescriptOriginal,
  MongoDB: DevIcons.MongodbOriginal,
  "SQL Server": DevIcons.MicrosoftsqlserverOriginal,
  AWS: DevIcons.AmazonwebservicesOriginalWordmark,
  Firebase: DevIcons.FirebaseOriginal,
  "Tailwind CSS": DevIcons.TailwindcssOriginal,
  Redux: DevIcons.ReduxOriginal,
  "REST API": DevIcons.ExpressOriginal,
  Vercel: DevIcons.VercelOriginal,
  ".NET Core": DevIcons.DotnetcoreOriginal,
  "Ant Design": DevIcons.AntdesignOriginal,
  "Java Script": DevIcons.JavascriptOriginal,
  "Material UI": DevIcons.MaterialuiOriginal,
};

// For technologies not available in Devicons, we'll use fallbacks
const fallbackIcons: Record<string, any> = {
  Vercel: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  Render: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#46e3b7">
      <path d="M11.42 5.72l-8.24 14.26H20.9l-8.24-14.26-.24-.42-.24.42zm-6.48 13.04l6.48-11.22 6.48 11.22H4.94z" />
    </svg>
  ),
  PrimeReact: DevIcons.ReactOriginal,
  "REST API": DevIcons.ExpressOriginal,
  "Ant Design": () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1890ff">
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
    </svg>
  ),
};

const projects: Project[] = [
  {
    title: "EBS-365 ERP",
    description:
      "Comprehensive Enterprise Resource Planning for streamlined business operations and improved efficiency.",
    duration: "Apr 2022 – Nov 2024",
    achievements: [
      "Led front-end development of a comprehensive ERP system using React.js and .NET Core, serving multiple enterprises including Dekko Isho Group and Montrims Ltd.",
      "Designed and implemented modules for Purchase-to-Pay, Merchandising, Finance, HRM, Production, and Commercial operations, reducing manual processes by 40%.",
      "Integrated RESTful APIs and AWS services for scalable cloud deployment, ensuring high availability and real-time data synchronization across modules.",
    ],
    technologies: [
      "React.js",
      "Prime React",
      "Tailwind CSS",
      ".NET Core",
      "Redux",
      "SQL Server",
      "REST API",
      "AWS",
    ],
    link: "https://demogmt.ebs365.info/",
    isLive: true, // Marked as live project
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
    description:
      "Hotel Booking & Management System – Simplify hotel operations with online booking, reservation tracking, and efficient management tools.",
    duration: "Oct 2024 – Jul 2025",
    achievements: [
      "Developed a full-stack hotel management platform using Next.js, Node.js, and MongoDB, enabling real-time room availability checks, booking, and invoicing.",
      "Built an admin dashboard with reporting features (Excel/PDF exports) and a calendar view for optimized room allocation and conflict reduction.",
      "Deployed and scaled the system across 5 hotels in Cox's Bazar, improving operational efficiency by 50%.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Render",
      "Vercel",
      "REST API",
    ],
    link: "https://www.fasttrackbookingbd.com/",
    isLive: true, // Marked as live project
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
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Firebase",
      "Render",
    ],
    link: "https://ourdmf.com/",
    isLive: true, // Marked as live project
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
    description:
      "Fashion & Apparel E-Commerce Platform – A complete solution for online fashion retail, from product catalog to secure payment processing.",
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
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "Vercel",
    ],
    link: "https://www.hoktok.com.bd/",
    github: "https://github.com/anisurarzu/Hok-Tok-Client",
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
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Vercel",
      "Render",
    ],
    link: "https://www.ftbsoft.com/",
    isLive: true, // Marked as live project
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
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "vercel",
    ],
    link: "https://nexa-erp.vercel.app/",
    github: "https://github.com/anisurarzu/nexa-erp",
    isLive: false, // Marked as live project
    images: [
      "/images/Nexa-1.png",
      "/images/Nexa-2.png",
      "/images/Nexa-3.png",
      "/images/Nexa-4.png",
    ],
  },
  {
    title: "Flower Picker",
    description:
      "Flower Shop Management Software – Manage orders, inventory, and deliveries efficiently for a seamless floral business experience.",
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
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Vercel",
      "Render",
    ],
    link: "https://flower-client-dusky.vercel.app/",
    github: "https://github.com/anisurarzu/Flower-Client",
    isLive: false, // Marked as live project
    images: [
      "/images/flower-1.png",
      "/images/flower-2.png",
      "/images/flower-3.png",
      "/images/flower-4.png",
    ],
  },
  {
    title: "Smart Dhopa",
    description:
      "Online Laundry Management System – Streamline laundry operations with order tracking, pickup/delivery scheduling, and customer management.",
    duration: "Jan 2023 – Jun 2023",
    achievements: [
      "Developed an online laundry platform allowing users to create laundry orders based on their location.",
      "Built a management portal for staff to handle orders, track progress, and manage operations efficiently.",
      "First online laundry platform at DIU using modern technology for washing, dry cleaning, and laundry services.",
      "Integrated React.js frontend with Firebase backend for real-time order management and notifications.",
      "Optimized turnaround time by automating order tracking and management.",
    ],
    technologies: [
      "Java Script",
      "React.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    link: "https://smart-dhopa-online-laundry-app.web.app/",
    isLive: true, // Marked as live project
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
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://lanhongtextile.vercel.app/",
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

// Helper function to get the appropriate icon component
const getTechnologyIcon = (tech: string) => {
  // Check if we have a direct mapping
  if (technologyIconMap[tech]) {
    const IconComponent = technologyIconMap[tech];
    return <IconComponent size="24px" />;
  }

  // Check for fallback icons
  if (fallbackIcons[tech]) {
    const FallbackComponent = fallbackIcons[tech];
    return <FallbackComponent />;
  }

  // Default fallback - show the first letter of the technology
  return <span className="text-xs font-bold">{tech.charAt(0)}</span>;
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
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Tooltip key={i} title={tech} placement="top">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            {getTechnologyIcon(tech)}
                          </div>
                        </Tooltip>
                      ))}
                    </div>
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
                    {project.isLive ? (
                      <Button
                        type="default"
                        shape="round"
                        icon={<EyeOutlined />}
                        disabled
                        style={{ cursor: "default" }}
                      >
                        Live
                      </Button>
                    ) : project.github ? (
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
                    ) : null}
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
        width={800}
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

            {/* Technologies with icons */}
            <div>
              <p className="font-medium mb-2">Technologies Used:</p>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech, i) => (
                  <Tooltip key={i} title={tech} placement="top">
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg w-16">
                      <div className="flex items-center justify-center w-10 h-10">
                        {getTechnologyIcon(tech)}
                      </div>
                      <span className="text-xs mt-1 text-center truncate w-full">
                        {tech.length > 10 ? `${tech.substring(0, 8)}...` : tech}
                      </span>
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
