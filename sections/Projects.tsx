"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { SiGoogleplay } from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectsData } from "@/lib/projectsData";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const filterAll = lang === "tr" ? "Hepsi" : "All";
  const filters = t.projects.filters;

  const getCategory = (p: (typeof projectsData)[0]) =>
    lang === "tr" ? p.categoryTr : p.categoryEn;

  const featuredProjects = projectsData.filter((p) => p.featured);
  const restProjects = projectsData
    .filter((p) => !p.featured)
    .filter((p) => {
      if (filter === "all" || filter === filterAll.toLowerCase()) return true;
      return getCategory(p).toLowerCase() === filter.toLowerCase();
    });

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">{t.projects.sectionNum}</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t.projects.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">{t.projects.subtitle}</p>
        </AnimatedSection>

        {/* Featured Projects (2 large cards) */}
        <AnimatedSection delay={0.1} className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
                <motion.div
                  className={cn(
                    "relative rounded-3xl p-7 border border-white/6 overflow-hidden cursor-pointer h-full",
                    "bg-gradient-to-br bg-[#12121a]",
                    project.gradient.replace(/\/\d+/g, "/15")
                  )}
                  onMouseEnter={() => setHovered(project.slug)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.01, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence>
                    {hovered === project.slug && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{ background: `${project.accentColor}08` }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{
                          color: project.accentColor,
                          borderColor: `${project.accentColor}40`,
                          background: `${project.accentColor}15`,
                        }}
                      >
                        {t.projects.featured}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/40 border border-white/8">
                        {getCategory(project)}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border border-white/8"
                      style={{ background: `${project.accentColor}20` }}
                    >
                      <span className="text-lg font-black" style={{ color: project.accentColor }}>
                        {project.initials}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 leading-tight">{project.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-5">
                      {project.tagline[lang]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono border"
                          style={{
                            color: project.accentColor,
                            borderColor: `${project.accentColor}25`,
                            background: `${project.accentColor}10`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold"
                        style={{ background: project.accentColor }}
                      >
                        <FiArrowUpRight size={14} />
                        {lang === "tr" ? "Projeyi İncele" : "View Project"}
                      </span>

                      <span
                        onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/8 hover:border-white/20 text-white/60 hover:text-white text-sm font-medium transition-all cursor-pointer"
                      >
                        <FiGithub size={13} />
                        {t.projects.source}
                      </span>

                      {project.playStore && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.playStore, "_blank"); }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/8 hover:border-white/20 text-white/60 hover:text-white text-sm font-medium transition-all cursor-pointer"
                        >
                          <SiGoogleplay size={12} />
                          Play
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.15} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((cat) => {
              const isAll = cat === filterAll;
              const active = filter === "all" ? isAll : filter.toLowerCase() === cat.toLowerCase();
              return (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(isAll ? "all" : cat.toLowerCase())}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                    active
                      ? "bg-indigo-500 text-white"
                      : "glass border border-white/8 text-white/50 hover:text-white hover:border-white/20"
                  )}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {restProjects.map((project, index) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group rounded-3xl p-7 border border-white/6 overflow-hidden cursor-pointer bg-gradient-to-br from-[#12121a] to-[#0e0e14] h-full"
                  onMouseEnter={() => setHovered(project.slug)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}12 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${project.accentColor}25` }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/40 border border-white/8">
                        {getCategory(project)}
                      </span>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: project.accentColor }}
                        whileHover={{ rotate: 45 }}
                      >
                        <FiArrowUpRight size={20} />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">{project.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5">
                      {project.description[lang]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono text-white/40 bg-white/3 border border-white/6"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium transition-colors" style={{ color: project.accentColor }}>
                        {lang === "tr" ? "Detayları Gör →" : "View Details →"}
                      </span>
                      <span className="text-white/15">·</span>
                      <span
                        onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
                        className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 font-medium transition-colors cursor-pointer"
                      >
                        <FiGithub size={13} />
                        {t.projects.codeLabel}
                      </span>
                      {project.playStore && (
                        <>
                          <span className="text-white/15">·</span>
                          <span
                            onClick={(e) => { e.preventDefault(); window.open(project.playStore, "_blank"); }}
                            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 font-medium transition-colors cursor-pointer"
                          >
                            <FiExternalLink size={13} />
                            Play
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {restProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-white/30 text-sm"
          >
            {t.projects.noProjects}
          </motion.div>
        )}
      </div>
    </section>
  );
}
