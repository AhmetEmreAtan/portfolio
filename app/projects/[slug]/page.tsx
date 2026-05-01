"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";
import { SiGoogleplay } from "react-icons/si";
import { getProjectBySlug } from "@/lib/projectsData";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

function MockupScreen({
  label,
  color,
  icon,
  index,
  isMobile,
}: {
  label: string;
  color: string;
  icon: string;
  index: number;
  isMobile: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-3"
    >
      {/* Device frame */}
      <div
        className={cn(
          "relative border-2 border-white/10 overflow-hidden shadow-2xl",
          isMobile
            ? "w-[160px] h-[280px] rounded-[28px]"
            : "w-full max-w-[340px] h-[200px] rounded-2xl"
        )}
        style={{ background: color }}
      >
        {/* Status bar (mobile) */}
        {isMobile && (
          <div className="absolute top-0 left-0 right-0 h-7 flex items-center justify-between px-4">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="w-3 h-1 rounded-full bg-white/30" />
            </div>
            <div className="w-12 h-2 rounded-full bg-white/10" />
            <div className="flex gap-1 items-center">
              <div className="w-3 h-1.5 rounded bg-white/30" />
              <div className="w-3 h-1.5 rounded bg-white/30" />
              <div className="w-2 h-2 rounded-sm border border-white/30" />
            </div>
          </div>
        )}

        {/* Top bar (desktop) */}
        {!isMobile && (
          <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 flex items-center gap-1.5 px-3">
            <div className="w-2 h-2 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/50" />
            <div className="flex-1 mx-3 h-3 bg-white/5 rounded" />
          </div>
        )}

        {/* Content area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 mt-6">
          <span className="text-4xl">{icon}</span>
          {/* Fake UI elements */}
          <div className="w-3/4 space-y-2">
            <div className="h-1.5 bg-white/10 rounded-full w-full" />
            <div className="h-1.5 bg-white/7 rounded-full w-4/5 mx-auto" />
            <div className="h-1.5 bg-white/7 rounded-full w-3/5 mx-auto" />
          </div>
          <div className="flex gap-2 mt-1">
            <div className="w-12 h-5 bg-white/8 rounded-lg" />
            <div className="w-12 h-5 bg-white/5 rounded-lg" />
          </div>
        </div>

        {/* Gloss overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>

      <span className="text-xs text-white/40 font-medium">{label}</span>
    </motion.div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { lang } = useLanguage();

  const slug = typeof params.slug === "string" ? params.slug : "";
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0d]">
        <div className="text-center">
          <p className="text-white/40 mb-4">{lang === "tr" ? "Proje bulunamadı." : "Project not found."}</p>
          <button
            onClick={() => router.push("/")}
            className="text-indigo-400 hover:text-indigo-300 text-sm underline"
          >
            {lang === "tr" ? "Ana sayfaya dön" : "Go back home"}
          </button>
        </div>
      </div>
    );
  }

  const isMobile = project.categoryTr === "Mobil" || project.categoryTr === "Oyun";

  return (
    <div className="min-h-screen bg-[#0a0a0d] text-[#e8e8f0]">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15"
          style={{ background: project.accentColor }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-8"
          style={{ background: project.accentColor }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 group text-sm font-medium"
        >
          <motion.span whileHover={{ x: -3 }} className="transition-transform">
            <FiArrowLeft size={16} />
          </motion.span>
          {lang === "tr" ? "Geri" : "Back"}
        </motion.button>

        {/* Hero header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/6 mb-8 overflow-hidden relative"
        >
          {/* Gradient bg */}
          <div
            className={cn("absolute inset-0 bg-gradient-to-br opacity-15 pointer-events-none", project.gradient)}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 border border-white/10"
              style={{ background: `${project.accentColor}25` }}
            >
              <span className="text-3xl font-black" style={{ color: project.accentColor }}>
                {project.initials}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, background: `${project.accentColor}15` }}
                >
                  {lang === "tr" ? project.categoryTr : project.categoryEn}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-6 max-w-2xl">
                {project.tagline[lang]}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 hover:border-white/25 text-white/70 hover:text-white text-sm font-semibold transition-all"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiGithub size={15} />
                  GitHub
                </motion.a>

                {project.playStore && (
                  <motion.a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all"
                    style={{ background: project.accentColor }}
                    whileHover={{ scale: 1.03, y: -1, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <SiGoogleplay size={14} />
                    Google Play
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Left: Description + Features */}
          <div className="md:col-span-3 space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-7 border border-white/6"
            >
              <h2 className="text-lg font-bold text-white mb-4">
                {lang === "tr" ? "Proje Hakkında" : "About the Project"}
              </h2>
              <p className="text-white/60 leading-relaxed text-sm">
                {project.longDescription[lang]}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-7 border border-white/6"
            >
              <h2 className="text-lg font-bold text-white mb-5">
                {lang === "tr" ? "Özellikler" : "Features"}
              </h2>
              <div className="grid gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-xs font-bold"
                      style={{ background: `${project.accentColor}20`, color: project.accentColor }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-white/60">{feature[lang]}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Tech stack + Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-7 border border-white/6"
            >
              <h2 className="text-lg font-bold text-white mb-5">
                {lang === "tr" ? "Teknolojiler" : "Technologies"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-sm font-mono font-medium border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}30`,
                      background: `${project.accentColor}10`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl p-7 border border-white/6"
            >
              <h2 className="text-lg font-bold text-white mb-5">
                {lang === "tr" ? "Linkler" : "Links"}
              </h2>
              <div className="space-y-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/3 border border-white/6 hover:border-white/15 text-white/50 hover:text-white transition-all group"
                >
                  <FiGithub size={16} className="shrink-0" />
                  <div>
                    <div className="text-xs text-white/30">GitHub</div>
                    <div className="text-sm font-medium truncate">AhmetEmreAtan/{project.slug}</div>
                  </div>
                  <FiExternalLink size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {project.playStore && (
                  <a
                    href={project.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/3 border border-white/6 hover:border-white/15 text-white/50 hover:text-white transition-all group"
                  >
                    <SiGoogleplay size={15} className="shrink-0" />
                    <div>
                      <div className="text-xs text-white/30">Google Play</div>
                      <div className="text-sm font-medium">{lang === "tr" ? "İndir" : "Download"}</div>
                    </div>
                    <FiExternalLink size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Screenshots / Mockups section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-8 border border-white/6"
        >
          <h2 className="text-lg font-bold text-white mb-8">
            {lang === "tr" ? "Ekran Görüntüleri" : "Screenshots"}
          </h2>

          <div className={cn(
            "flex gap-8 justify-center flex-wrap",
            isMobile ? "items-end" : "items-center"
          )}>
            {project.screenshots.map((shot, i) => (
              <MockupScreen
                key={i}
                label={shot.label[lang]}
                color={shot.color}
                icon={shot.icon}
                index={i}
                isMobile={isMobile}
              />
            ))}
          </div>

          <p className="text-center text-xs text-white/20 mt-8">
            {lang === "tr"
              ? "* Ekran görüntüleri temsilidir. Gerçek uygulama arayüzü farklılık gösterebilir."
              : "* Screenshots are representative. Actual app interface may differ."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
