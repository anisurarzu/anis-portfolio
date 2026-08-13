"use client";

import { useEffect, useState, type ComponentType } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
};

const technologyIconMap: Record<string, ComponentType<{ size: string }>> =
  {
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

function githubUrl(url?: string) {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `https://${url}`;
}

function getTechnologyIcon(tech: string) {
  const IconComponent = technologyIconMap[tech];
  if (IconComponent) return <IconComponent size="18px" />;
  return <span className="text-[10px] font-bold">{tech.charAt(0)}</span>;
}

function ProjectMedia({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const image = project.images[index];

  useEffect(() => {
    if (project.images.length < 2 || failed) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % project.images.length);
    }, 3200);
    return () => clearInterval(id);
  }, [project.images.length, failed]);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-accent/20 via-surface to-accent-2/20 ${className}`}
      >
        <span className="font-display text-4xl font-bold text-white/80">
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
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <Image
        src={image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close project details"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 24 }}
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-bg-elevated p-5 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">
              {project.category}
            </p>
            <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.duration}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-border px-3 py-1 text-sm text-muted hover:text-text"
          >
            Close
          </button>
        </div>

        <div className="relative mt-6 h-52 overflow-hidden rounded-2xl md:h-72">
          <ProjectMedia project={project} className="h-full w-full" />
        </div>

        <p className="mt-6 text-muted leading-relaxed">{project.description}</p>
        <ul className="mt-5 space-y-3">
          {project.achievements.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-white">
                {getTechnologyIcon(tech)}
              </span>
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
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

  const featured = visible.slice(0, 2);
  const rest = visible.slice(2);

  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title="Selected work"
          description="Enterprise systems, hospitality platforms, and consumer products designed, built, and shipped for real users."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                filter === item
                  ? "bg-accent text-[#04110c]"
                  : "border border-border text-muted hover:text-text"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-border bg-white/[0.03]"
            >
              <ProjectMedia project={project} className="h-56 md:h-64" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  {project.isLive && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Live
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelected(project)}
                    className="btn-ghost !py-2 !px-4 text-sm"
                  >
                    Case details
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !py-2 !px-4 text-sm"
                    >
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-border bg-white/[0.03]"
            >
              <ProjectMedia project={project} className="h-40" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-accent">
                    {project.category}
                  </span>
                  {project.isLive && (
                    <span className="text-[11px] text-accent">Live</span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelected(project)}
                  className="mt-4 text-sm text-text hover:text-accent"
                >
                  View details →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
