"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  category: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DevFlow — Task Management",
    description:
      "A full-stack project management tool with real-time collaboration, Kanban boards, and sprint planning built for engineering teams.",
    longDescription:
      "DevFlow reimagines how engineering teams collaborate. Features include real-time presence, smart sprint planning powered by historical data, and deep GitHub integration for automatic issue tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Redis", "Docker"],
    github: "https://github.com/ahmetemreatan",
    live: "https://devflow.example.com",
    featured: true,
    category: "Web App",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: 2,
    title: "ShopMate — E-Commerce App",
    description:
      "A cross-platform mobile shopping app built with React Native featuring AR product preview and personalized recommendations.",
    longDescription:
      "ShopMate delivers a premium mobile shopping experience with AR previews, real-time inventory, push notifications, and ML-powered recommendations.",
    tech: ["React Native", "Node.js", "GraphQL", "MongoDB", "AWS S3"],
    github: "https://github.com/ahmetemreatan",
    live: "https://shopmate.example.com",
    featured: false,
    category: "Mobile App",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: 3,
    title: "Pulse — Analytics Dashboard",
    description:
      "Real-time analytics dashboard with customizable widgets, data visualization, and automated reporting for SaaS businesses.",
    longDescription:
      "Pulse provides SaaS teams with instant insights through drag-and-drop dashboards, live data streams, and scheduled PDF reports.",
    tech: ["React", "D3.js", "Python", "FastAPI", "TimescaleDB", "Redis"],
    github: "https://github.com/ahmetemreatan",
    live: "https://pulse.example.com",
    featured: false,
    category: "Dashboard",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    id: 4,
    title: "Beacon — IoT Platform",
    description:
      "Cloud-native IoT management platform supporting 10k+ concurrent device connections with real-time telemetry.",
    longDescription:
      "Beacon enables fleet management of IoT devices at scale. Built on MQTT with edge computing support, it processes millions of telemetry events per day.",
    tech: ["Node.js", "MQTT", "Kubernetes", "InfluxDB", "React", "WebSockets"],
    github: "https://github.com/ahmetemreatan",
    live: "https://beacon.example.com",
    featured: false,
    category: "Platform",
    gradient: "from-green-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: 5,
    title: "AiChat — LLM Interface",
    description:
      "A production-grade chat interface for multiple LLM providers with streaming, conversation history, and prompt management.",
    longDescription:
      "AiChat provides a unified interface for OpenAI, Anthropic, and Mistral models with streaming responses, persistent history, and team-shared prompts.",
    tech: ["Next.js", "OpenAI SDK", "Supabase", "Tailwind", "Zustand"],
    github: "https://github.com/ahmetemreatan",
    live: "https://aichat.example.com",
    featured: false,
    category: "AI/ML",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
];

const CATEGORY_FILTERS = ["All", "Web App", "Mobile App", "Dashboard", "Platform", "AI/ML"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const featured = projects.find((p) => p.featured)!;
  const filteredRest = projects
    .filter((p) => !p.featured)
    .filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">02.</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            A curated collection of projects I&apos;ve built — from polished
            consumer apps to complex engineering systems.
          </p>
        </AnimatedSection>

        {/* Featured Project */}
        <AnimatedSection delay={0.1} className="mb-8">
          <motion.div
            className={cn(
              "relative rounded-3xl p-8 lg:p-12 border border-white/6 overflow-hidden cursor-pointer",
              "bg-gradient-to-br",
              featured.gradient,
              "bg-[#12121a]"
            )}
            onMouseEnter={() => setHovered(featured.id)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow on hover */}
            <AnimatePresence>
              {hovered === featured.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-indigo-500/5 rounded-3xl pointer-events-none"
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">
                    Featured Project
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/40 border border-white/8">
                    {featured.category}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-4 text-sm">
                  {featured.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-indigo-300/70 bg-indigo-500/10 border border-indigo-500/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiExternalLink size={14} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/8 hover:border-white/20 text-white/70 hover:text-white text-sm font-medium transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiGithub size={14} />
                    Source
                  </motion.a>
                </div>
              </div>

              {/* Preview mockup */}
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-white/5 to-white/1 border border-white/8 overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                      <span className="text-2xl font-black gradient-text">DF</span>
                    </div>
                    <span className="text-white/30 text-sm">DevFlow Preview</span>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 right-4 h-6 bg-white/3 rounded-lg flex items-center gap-2 px-3">
                    <div className="w-2 h-2 rounded-full bg-red-400/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                    <div className="w-2 h-2 rounded-full bg-green-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.15} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  filter === cat
                    ? "bg-indigo-500 text-white"
                    : "glass border border-white/8 text-white/50 hover:text-white hover:border-white/20"
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredRest.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative group rounded-3xl p-7 border border-white/6 overflow-hidden cursor-pointer",
                  "bg-gradient-to-br from-[#12121a] to-[#0e0e14]"
                )}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl", project.gradient)}
                />

                {/* Glow border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.2)" }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/40 border border-white/8">
                      {project.category}
                    </span>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ rotate: 45 }}
                    >
                      <FiArrowUpRight className="text-indigo-400" size={20} />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-white/40 bg-white/3 border border-white/6"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={13} />
                      Live
                    </a>
                    <span className="text-white/15">·</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={13} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRest.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-white/30 text-sm"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>
    </section>
  );
}
