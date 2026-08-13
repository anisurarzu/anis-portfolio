"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

type HomeSectionProps = {
  onNavigate: (id: string) => void;
};

const roles = [
  "React & Next.js specialist",
  "4+ years shipping products",
  "Open to roles in Germany",
];

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Redux",
  "REST APIs",
  "MongoDB",
];

const stats = [
  { value: 4, suffix: "+", label: "Years" },
  { value: 9, suffix: "+", label: "Products" },
  { value: 2, suffix: "K+", label: "Users" },
  { value: 5, suffix: "+", label: "Enterprises" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 24));
    const id = setInterval(() => {
      current = Math.min(value, current + step);
      setCount(current);
      if (current >= value) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Portrait() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 120,
    damping: 18,
  });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mb-8 w-[220px] sm:w-[240px] lg:w-[260px]"
      style={{ perspective: 900 }}
    >
      <div className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl" />
      <div className="animate-spin-slow pointer-events-none absolute -inset-3 rounded-full border border-dashed border-accent/25" />

      <motion.div
        onMouseMove={onMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ rotateX, rotateY }}
        className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      >
        <Image
          src="/images/anisur.png"
          alt="Anisur Rahman Arzu, Frontend Software Engineer in Cologne"
          width={520}
          height={640}
          priority
          className="h-[280px] w-full object-cover object-[center_12%] sm:h-[300px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="animate-float absolute -right-6 top-8 z-20 rounded-xl border border-border bg-bg-elevated/90 px-3 py-2 backdrop-blur-xl"
      >
        <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
          Based in
        </p>
        <p className="text-xs font-medium">Cologne, DE</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85 }}
        className="absolute -bottom-4 left-1/2 z-20 w-[92%] -translate-x-1/2 rounded-xl border border-border bg-bg-elevated/90 px-3 py-2.5 text-center backdrop-blur-xl"
      >
        <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
          Opportunity Card
        </p>
        <p className="mt-0.5 text-xs font-medium">Open to full-time roles</p>
      </motion.div>
    </motion.div>
  );
}

function RoleLine() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-1 h-5 overflow-hidden text-sm text-muted">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center pt-24 pb-10 px-4 md:px-8"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
        <div className="max-w-xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to full-time roles in Germany
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-xs tracking-[0.2em] uppercase text-muted"
          >
            Hello, I am
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display mt-1.5 text-[1.85rem] sm:text-4xl font-bold tracking-tight"
          >
            Anisur Rahman Arzu
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-2 text-base sm:text-lg text-accent"
          >
            Frontend Software Engineer
          </motion.p>

          <RoleLine />

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-md text-sm sm:text-[15px] leading-relaxed text-muted"
          >
            I build scalable React and Next.js products. After shipping
            enterprise systems at Dekko Isho Group, I now live in Cologne with
            a German Opportunity Card and am looking for my next engineering
            role.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 flex flex-wrap gap-3"
          >
            <button
              onClick={() => onNavigate("projects")}
              className="btn-primary !px-5 !py-2.5 text-sm"
            >
              View work
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="btn-ghost !px-5 !py-2.5 text-sm"
            >
              Get in touch
            </button>
            <a
              href="https://drive.google.com/file/d/1UdQKpJHBLMAf6Sus04yq_hiJWjwnSdW2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-5 !py-2.5 text-sm"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-bold text-text">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <Portrait />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mx-auto mt-12 w-full max-w-5xl overflow-hidden border-y border-border py-3"
      >
        <div className="animate-marquee flex w-max gap-8 pr-8 text-xs uppercase tracking-[0.18em] text-muted">
          {[...tech, ...tech].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8">
              {item}
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
