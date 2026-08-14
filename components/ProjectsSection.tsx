"use client";

import { useEffect, useState, type ComponentType } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import * as DevIcons from "devicons-react";
import SectionHeader from "@/components/SectionHeader";

type Project = {
  title: string;
  description: string;
  duration: string;
  category: string;
  achievements: string[];
  technologies: string[];
  link?: string;
  github?: string;
  images: string[];
  isLive?: boolean;
  impact?: string;
};

const technologyIconMap: Record<string, ComponentType<{ size: string }>> = {
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
  "Prime React": DevIcons.ReactOriginal,
};

const projects: Project[] = [
  {
    title: "EBS-365 ERP",
    category: "Enterprise",
    description:
      "A comprehensive ERP for purchase-to-pay, merchandising, finance, HR, production, and commercial operations.",
    duration: "Apr 2022 – Nov 2024",
    impact: "40% fewer manual processes",
    achievements: [
      "Led frontend development of a comprehensive ERP using React.js and .NET Core for enterprises including Dekko Isho Group and Montrims Ltd.",
      "Designed modules for Purchase-to-Pay, Merchandising, Finance, HRM, Production, and Commercial operations, reducing manual processes by 40%.",
      "Integrated REST APIs and AWS for scalable cloud deployment with real-time data synchronization across modules.",
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
    isLive: true,
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
    category: "Hospitality",
    description:
      "Hotel booking and operations platform with live availability, invoicing, and multi-property management.",
    duration: "Oct 2024 – Jul 2025",
    impact: "5 hotels · 50% faster ops",
    achievements: [
      "Built a full-stack hotel platform with Next.js, Node.js, and MongoDB for real-time availability, booking, and invoicing.",
      "Shipped an admin dashboard with Excel/PDF reporting and a calendar view that reduced room allocation conflicts.",
      "Scaled across 5 hotels in Cox's Bazar, improving operational efficiency by 50%.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Vercel",
      "REST API",
    ],
    link: "https://www.fasttrackbookingbd.com/",
    isLive: true,
    images: [
      "/images/ftb-1.png",
      "/images/ftb-2.png",
      "/images/ftb-3.png",
      "/images/ftb-4.png",
    ],
  },
  {
    title: "DMF Foundation",
    category: "Nonprofit",
    description:
      "Integrated scholarship, donation, education, and operations platform for a charity organization.",
    duration: "Feb 2022 – Feb 2024",
    impact: "30+ institutions served",
    achievements: [
      "Engineered a full-featured platform for scholarships, donations, investments, attendance, results, and e-commerce.",
      "Implemented role-based dashboards for admins, donors, and students with analytics and secure payments.",
      "Scaled to 30+ educational institutions, cutting administrative overhead by 70–80%.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Firebase",
    ],
    link: "https://ourdmf.com/",
    isLive: true,
    images: [
      "/images/dmf-1.png",
      "/images/dmf-2.png",
      "/images/dmf-3.png",
      "/images/dmf-4.png",
      "/images/dmf-5.png",
      "/images/dmf-6.png",
    ],
  },
  {
    title: "Hoktok Fashion",
    category: "E-commerce",
    description:
      "Fashion retail platform covering catalog, inventory, checkout, and courier-based fulfillment.",
    duration: "Mar 2023 – Present",
    impact: "End-to-end retail flow",
    achievements: [
      "Developed a responsive fashion e-commerce platform with Next.js and Node.js.",
      "Integrated Pathao Courier for delivery-based order processing and tracking.",
      "Implemented catalog filtering, search, authentication, and live inventory tracking.",
      "Optimized performance and SEO to increase traffic and engagement.",
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
    category: "Hospitality",
    description:
      "Operations console for hotel bookings, rooms, inventory, commissions, and daily financials.",
    duration: "Jan 2024 – Present",
    impact: "Full hotel ops console",
    achievements: [
      "Built a full hotel management system covering bookings, rooms, and live availability.",
      "Automated expense tracking, revenue, commissions, and daily financial statements.",
      "Added inventory for supplies and housekeeping, plus reporting dashboards for management.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Vercel",
    ],
    link: "https://www.ftbsoft.com/",
    isLive: true,
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
    category: "Retail",
    description:
      "Inventory and sales system for local shops with live stock, QR selling, and profit analytics.",
    duration: "Jun 2023 – Present",
    impact: "QR-based stock & sales",
    achievements: [
      "Built inventory management for furniture and retail shops with live stock updates.",
      "Added product, sales, and stock modules plus QR-based selling with automatic profit calculation.",
      "Created reporting for sales, stock, and profit analytics.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Vercel",
    ],
    link: "https://nexa-erp.vercel.app/",
    github: "https://github.com/anisurarzu/nexa-erp",
    images: [
      "/images/Nexa-1.png",
      "/images/Nexa-2.png",
      "/images/Nexa-3.png",
      "/images/Nexa-4.png",
    ],
  },
  {
    title: "Flower Picker",
    category: "Retail",
    description:
      "Flower shop software for orders, inventory, expenses, and staff permissions.",
    duration: "May 2023 – Dec 2023",
    impact: "Daily shop operations",
    achievements: [
      "Developed a complete flower shop system for daily operations.",
      "Implemented inventory, order management, expense tracking, and role-based access.",
      "Added reporting for sales, expenses, and stock insights.",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Vercel",
    ],
    link: "https://flower-client-dusky.vercel.app/",
    github: "https://github.com/anisurarzu/Flower-Client",
    images: [
      "/images/flower-1.png",
      "/images/flower-2.png",
      "/images/flower-3.png",
      "/images/flower-4.png",
    ],
  },
  {
    title: "Smart Dhopa",
    category: "Services",
    description:
      "Online laundry platform with location-based orders, staff portal, and live tracking.",
    duration: "Jan 2023 – Jun 2023",
    impact: "First campus laundry app",
    achievements: [
      "Built an online laundry platform so users can place orders based on location.",
      "Created a staff portal to manage orders and operations.",
      "Delivered DIU’s first online laundry experience with React and Firebase for real-time updates.",
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
    isLive: true,
    images: [
      "/images/dhopa-1.png",
      "/images/dhopa-2.png",
      "/images/dhopa-3.png",
      "/images/dhopa-4.png",
    ],
  },
  {
    title: "Lanhong Textile",
    category: "Brand",
    description:
      "A clean, SEO-ready portfolio site for a textile business and its product collections.",
    duration: "Feb 2023 – Apr 2023",
    impact: "Brand + product showcase",
    achievements: [
      "Designed a responsive portfolio to showcase textile products and company details.",
      "Built with Next.js for performance and SEO.",
      "Implemented smooth navigation and layouts that work across devices.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://lanhongtextile.vercel.app/",
    github: "https://github.com/anisurarzu/lanhong-textile",
    images: [
      "/images/Langhong-1.png",
      "/images/langhong-2.png",
      "/images/langhong-3.png",
      "/images/langhong-4.png",
    ],
  },
];

const filters = [
  "All",
  "Enterprise",
  "Hospitality",
  "E-commerce",
  "Nonprofit",
  "Retail",
  "Services",
  "Brand",
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

function githubUrl(url?: string) {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `https://${url}`;
}

function getTechnologyIcon(tech: string) {
  const IconComponent = technologyIconMap[tech];
  if (IconComponent) return <IconComponent size="16px" />;
  return <span className="text-[10px] font-bold">{tech.charAt(0)}</span>;
}

function ProjectMedia({
  project,
  className,
  interactive = true,
}: {
  project: Project;
  className?: string;
  interactive?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (project.images.length < 2 || failed) return;
    if (interactive && hovered) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % project.images.length);
    }, 2800);
    return () => clearInterval(id);
  }, [project.images.length, failed, hovered, interactive]);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-accent/15 via-surface to-accent-2/20 ${className}`}
      >
        <span className="font-display text-4xl font-bold text-white/70">
          {project.title
            .split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join("")}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-surface ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={project.images[index]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          <Image
            src={project.images[index]}
            alt={`${project.title} screenshot ${index + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 55vw"
            onError={() => setFailed(true)}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(110,243,197,0.12),transparent_45%)]" />

      {project.images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {project.images.map((_, i) => (
            <button
              key={i}
              aria-label={`Show screenshot ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className={`h-1 rounded-full transition-all ${
                i === index ? "w-5 bg-accent" : "w-1.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const reversed = index % 2 === 1;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), {
    stiffness: 140,
    damping: 18,
  });

  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`group grid items-center gap-6 lg:gap-10 rounded-[1.75rem] border border-border bg-white/[0.025] p-3 md:p-4 transition-colors hover:border-accent/25 hover:bg-white/[0.04] ${
        reversed ? "lg:grid-cols-[0.95fr_1.05fr]" : "lg:grid-cols-[1.05fr_0.95fr]"
      }`}
    >
      <motion.div
        style={{ rotateX, rotateY, perspective: 900 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - rect.left) / rect.width - 0.5);
          my.set((e.clientY - rect.top) / rect.height - 0.5);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className={`relative overflow-hidden rounded-[1.35rem] ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <ProjectMedia project={project} className="h-56 sm:h-64 lg:h-[320px]" />

        <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="pointer-events-auto flex gap-2">
            <button
              onClick={onOpen}
              className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-[#04110c] shadow-lg"
            >
              Case study
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-medium backdrop-blur-md hover:border-accent/50"
              >
                Live site
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <div className={`px-2 pb-2 md:px-3 ${reversed ? "lg:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/30 bg-accent-dim px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-accent">
            {project.category}
          </span>
          {project.isLive && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Live
            </span>
          )}
          <span className="text-[11px] text-muted">{project.duration}</span>
        </div>

        <h3 className="font-display mt-4 text-2xl md:text-[1.75rem] font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.impact && (
          <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-bg-elevated/80 px-3 py-2 text-xs text-text">
            <span className="text-accent">◆</span>
            {project.impact}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded bg-white">
                {getTechnologyIcon(tech)}
              </span>
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={onOpen} className="btn-ghost !px-4 !py-2 text-sm">
            View details
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2 text-sm"
            >
              Visit project
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectTile({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onClick={onOpen}
      className="group cursor-pointer overflow-hidden rounded-[1.4rem] border border-border bg-white/[0.025] transition-colors hover:border-accent/30 hover:bg-white/[0.045]"
    >
      <div className="relative">
        <ProjectMedia project={project} className="h-44" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border border-white/20 bg-black/55 px-4 py-2 text-xs font-medium backdrop-blur-md">
            Open case study
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase tracking-[0.16em] text-accent">
            {project.category}
          </span>
          {project.isLive && (
            <span className="text-[10px] text-accent">Live</span>
          )}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">
          {project.description}
        </p>
        {project.impact && (
          <p className="mt-3 text-[11px] text-muted/90">{project.impact}</p>
        )}
      </div>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setSlide((s) => (s + 1) % project.images.length);
      }
      if (event.key === "ArrowLeft") {
        setSlide((s) => (s - 1 + project.images.length) % project.images.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, project.images.length]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close project details"
      />
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.6rem] border border-border bg-bg-elevated shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="relative h-52 overflow-hidden sm:h-72 md:h-80">
          {!failed ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={project.images[slide]}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[slide]}
                  alt={`${project.title} ${slide + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 900px"
                  onError={() => setFailed(true)}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex h-full items-center justify-center bg-surface">
              <span className="font-display text-4xl font-bold text-white/50">
                {project.title.slice(0, 2)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-black/20" />

          <div className="absolute right-4 top-4 flex gap-2">
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSlide(
                      (s) => (s - 1 + project.images.length) % project.images.length
                    )
                  }
                  className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-sm backdrop-blur-md"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setSlide((s) => (s + 1) % project.images.length)
                  }
                  className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-sm backdrop-blur-md"
                >
                  →
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-sm backdrop-blur-md"
            >
              Close
            </button>
          </div>

          <div className="absolute bottom-4 left-5 right-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
              {project.category}
            </p>
            <h3 className="font-display mt-1 text-2xl font-bold sm:text-3xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="space-y-6 p-5 sm:p-7">
          <div className="flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded-full border border-border px-3 py-1">
              {project.duration}
            </span>
            {project.impact && (
              <span className="rounded-full border border-accent/30 bg-accent-dim px-3 py-1 text-accent">
                {project.impact}
              </span>
            )}
            {project.isLive && (
              <span className="rounded-full border border-border px-3 py-1 text-accent">
                Live product
              </span>
            )}
          </div>

          <p className="text-muted leading-relaxed">{project.description}</p>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Highlights
            </p>
            <ul className="mt-3 space-y-3">
              {project.achievements.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex gap-3 text-sm text-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-white">
                    {getTechnologyIcon(tech)}
                  </span>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit live site
              </a>
            )}
            {githubUrl(project.github) && (
              <a
                href={githubUrl(project.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                View GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featured = visible.slice(0, 3);
  const rest = visible.slice(3);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title="Products with real users."
          description="Enterprise systems, hospitality platforms, and consumer products — designed, built, and shipped end to end."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = filter === item;
            const count =
              item === "All"
                ? projects.length
                : projects.filter((p) => p.category === item).length;
            return (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? "text-[#04110c]"
                    : "border border-border text-muted hover:text-text"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {item}
                  <span className={`ml-1.5 text-[11px] ${active ? "opacity-70" : "opacity-50"}`}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="space-y-6">
            {featured.map((project, index) => (
              <FeaturedProject
                key={`${filter}-${project.title}`}
                project={project}
                index={index}
                onOpen={() => setSelected(project)}
              />
            ))}
          </motion.div>

          {rest.length > 0 && (
            <motion.div
              layout
              className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {rest.map((project, index) => (
                <ProjectTile
                  key={`${filter}-${project.title}`}
                  project={project}
                  index={index}
                  onOpen={() => setSelected(project)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
