"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "education";
  description: string;
  highlights: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "TechNova Solutions",
    location: "Istanbul, Turkey",
    period: "Jan 2024 — Present",
    type: "work",
    description:
      "Leading development of a multi-tenant SaaS platform serving 50k+ users. Architecting scalable microservices and driving team-wide engineering standards.",
    highlights: [
      "Reduced API response times by 60% through Redis caching and query optimization",
      "Led migration from monolith to microservices with zero downtime",
      "Mentored a team of 4 junior developers",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Createch Digital",
    location: "Remote",
    period: "Jun 2022 — Dec 2023",
    type: "work",
    description:
      "Built and maintained web and mobile applications for clients across fintech and e-commerce. Delivered 8 production projects over 18 months.",
    highlights: [
      "Shipped a React Native app with 15k+ downloads in 3 months",
      "Integrated payment gateways (Stripe, iyzico) for e-commerce clients",
      "Improved CI/CD pipeline reducing deployment time from 45 to 8 minutes",
    ],
    tech: ["React", "React Native", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "StartupHub",
    location: "Ankara, Turkey",
    period: "Sep 2021 — May 2022",
    type: "work",
    description:
      "Joined as the first frontend engineer. Built the company's core product from scratch, establishing the design system and component library.",
    highlights: [
      "Built accessible component library used across 3 products",
      "Implemented real-time features using WebSockets and React Query",
      "Achieved 95+ Lighthouse score on the main product",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
  {
    id: 4,
    role: "B.Sc. Computer Engineering",
    company: "Middle East Technical University",
    location: "Ankara, Turkey",
    period: "Sep 2017 — Jun 2021",
    type: "education",
    description:
      "Graduated with honors. Focused on software engineering, algorithms, and distributed systems. Completed thesis on real-time collaborative editing systems.",
    highlights: [
      "Dean's List — 4 consecutive semesters",
      "Thesis: Conflict-Free Replicated Data Types for collaborative apps",
      "Led university ACM chapter with 120+ members",
    ],
    tech: ["C++", "Python", "Java", "Algorithms", "OS", "Networks"],
  },
];

function TimelineNode({ isActive, type }: { isActive: boolean; type: string }) {
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isActive ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center z-10 border-2",
          type === "education"
            ? "bg-purple-500/20 border-purple-500/50"
            : "bg-indigo-500/20 border-indigo-500/50"
        )}
      >
        <FiBriefcase
          size={16}
          className={type === "education" ? "text-purple-400" : "text-indigo-400"}
        />
      </motion.div>
    </div>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative grid grid-cols-[1fr_auto_1fr] items-start gap-6",
        "max-w-4xl mx-auto"
      )}
    >
      {/* Left side */}
      <div className={cn(!isLeft && "md:block hidden")}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-6 border border-white/6 hover:border-indigo-500/20 transition-colors duration-300 group"
          >
            <CardContent item={item} />
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <div className="flex flex-col items-center gap-0">
        <TimelineNode isActive={isInView} type={item.type} />
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="w-px flex-1 min-h-[120px] bg-gradient-to-b from-white/10 to-transparent"
          />
        )}
      </div>

      {/* Right side */}
      <div>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl p-6 border border-white/6 hover:border-indigo-500/20 transition-colors duration-300 group"
          >
            <CardContent item={item} />
          </motion.div>
        )}
        {isLeft && <div />}
      </div>
    </div>
  );
}

function CardContent({ item }: { item: ExperienceItem }) {
  return (
    <>
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <span
            className={cn(
              "inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold mb-2",
              item.type === "education"
                ? "bg-purple-500/20 text-purple-300"
                : "bg-indigo-500/20 text-indigo-300"
            )}
          >
            {item.type === "education" ? "Education" : "Work"}
          </span>
          <h3 className="text-base font-bold text-white leading-tight">
            {item.role}
          </h3>
          <p className="text-sm font-semibold text-indigo-400/80 mt-0.5">
            {item.company}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-white/35 mb-4">
        <span className="flex items-center gap-1.5">
          <FiCalendar size={11} />
          {item.period}
        </span>
        <span className="flex items-center gap-1.5">
          <FiMapPin size={11} />
          {item.location}
        </span>
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-4">
        {item.description}
      </p>

      <ul className="space-y-2 mb-4">
        {item.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-white/45">
            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-xs font-mono text-white/35 bg-white/3 border border-white/6"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">04.</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            My journey through companies, roles, and education that shaped how
            I think and build.
          </p>
        </AnimatedSection>

        {/* Mobile timeline (stacked) */}
        <div className="md:hidden space-y-6">
          {experiences.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0",
                      item.type === "education"
                        ? "bg-purple-500/20 border-purple-500/50"
                        : "bg-indigo-500/20 border-indigo-500/50"
                    )}
                  >
                    <FiBriefcase
                      size={13}
                      className={
                        item.type === "education"
                          ? "text-purple-400"
                          : "text-indigo-400"
                      }
                    />
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 min-h-8 bg-white/8 mt-2" />
                  )}
                </div>
                <div className="glass rounded-3xl p-6 border border-white/6 flex-1 mb-4">
                  <CardContent item={item} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop alternating timeline */}
        <div className="hidden md:flex flex-col gap-0">
          {experiences.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
