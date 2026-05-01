"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  titleKey: string;
  descKey: string;
  longDescKey: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
  categoryTr: string;
  categoryEn: string;
  gradient: string;
  initials: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: "NOCDashboard",
    descKey: "nocDashDesc",
    longDescKey: "nocDashLong",
    tech: ["React", "TypeScript", "Node.js", "MySQL", "Docker"],
    github: "https://github.com/AhmetEmreAtan/noc_dashboard",
    featured: true,
    categoryTr: "Web",
    categoryEn: "Web",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    initials: "NOC",
  },
  {
    id: 2,
    titleKey: "Locavia",
    descKey: "locaviaDesc",
    longDescKey: "locaviaLong",
    tech: ["Kotlin", "Jetpack Compose", "Android", "Firebase"],
    github: "https://github.com/AhmetEmreAtan/Locavia",
    featured: true,
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    initials: "LOC",
  },
  {
    id: 3,
    titleKey: "WayFindr",
    descKey: "wayfindrDesc",
    longDescKey: "wayfindrLong",
    tech: ["Kotlin", "Android", "Google Maps API", "Firebase"],
    github: "https://github.com/AhmetEmreAtan/WayFindr",
    live: "https://play.google.com/store/apps/details?id=com.saatech.wayfindr&gl=TR",
    featured: false,
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    initials: "WF",
  },
  {
    id: 4,
    titleKey: "Finno",
    descKey: "finnoDesc",
    longDescKey: "finnoLong",
    tech: ["Kotlin", "Jetpack Compose", "Android", "Room DB"],
    github: "https://github.com/AhmetEmreAtan/Finno",
    featured: false,
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    gradient: "from-green-500/20 via-teal-500/10 to-transparent",
    initials: "FIN",
  },
  {
    id: 5,
    titleKey: "DailyWater",
    descKey: "dailywaterDesc",
    longDescKey: "dailywaterLong",
    tech: ["Kotlin", "Android", "Room DB", "WorkManager"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    initials: "DW",
  },
  {
    id: 6,
    titleKey: "Taskly",
    descKey: "tasklyDesc",
    longDescKey: "tasklyLong",
    tech: ["Kotlin", "Android", "Room DB", "Jetpack Compose"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    initials: "TSK",
  },
  {
    id: 7,
    titleKey: "NoteFlow",
    descKey: "noteflowDesc",
    longDescKey: "noteflowLong",
    tech: ["Kotlin", "Android", "Room DB", "Material Design"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    categoryTr: "Mobil",
    categoryEn: "Mobile",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    initials: "NF",
  },
  {
    id: 8,
    titleKey: "MetaverseSchool",
    descKey: "metaverseDesc",
    longDescKey: "metaverseLong",
    tech: ["Unity", "C#", "Blender", "3D Modelling"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    categoryTr: "PC",
    categoryEn: "PC",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    initials: "MS",
  },
  {
    id: 9,
    titleKey: "SavennaAdventure",
    descKey: "savennaDesc",
    longDescKey: "savennaLong",
    tech: ["Kotlin", "Android", "2D Game", "Canvas API"],
    github: "https://github.com/AhmetEmreAtan",
    featured: false,
    categoryTr: "Oyun",
    categoryEn: "Game",
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    initials: "SA",
  },
];

const projectContent: Record<string, { tr: { title: string; desc: string; long: string }; en: { title: string; desc: string; long: string } }> = {
  nocDashDesc: {
    tr: { title: "NOCDashboard", desc: "KoçSistem NOC ekibi için geliştirilen web tabanlı ağ operasyon izleme ve yönetim paneli.", long: "KoçSistem'deki NOC (Ağ Operasyon Merkezi) ekibi için tasarlanan web tabanlı izleme paneli. Ağ cihazlarını anlık takip etme, alarm yönetimi ve raporlama özellikleri sunuyor." },
    en: { title: "NOCDashboard", desc: "Web-based network operation monitoring and management dashboard developed for KoçSistem's NOC team.", long: "A web-based monitoring panel designed for KoçSistem's Network Operation Center team. Features real-time network device tracking, alarm management, and reporting capabilities." },
  },
  locaviaDesc: {
    tr: { title: "Locavia", desc: "Kotlin ile geliştirilen, kullanıcıların çevrelerindeki mekanları keşfetmesini ve deneyimlerini paylaşmasını sağlayan Android uygulaması.", long: "Locavia, kullanıcıların çevrelerindeki yerleri keşfetmelerine olanak tanıyan bir lokasyon tabanlı Android uygulamasıdır. Jetpack Compose ile modern bir arayüze sahip." },
    en: { title: "Locavia", desc: "Android app built with Kotlin that lets users discover nearby places and share their experiences.", long: "Locavia is a location-based Android application that allows users to explore nearby places. Features a modern UI built with Jetpack Compose." },
  },
  wayfindrDesc: {
    tr: { title: "WayFindr", desc: "Kullanıcıların yeni yerler keşfetmesini ve lokasyon bilgilerini paylaşmasını sağlayan seyahat rehberi. Google Play'de yayında.", long: "WayFindr, kullanıcıların yeni yerler keşfetmesini ve lokasyon bilgilerini paylaşmasını sağlayan bir seyahat rehberi uygulamasıdır. Google Play Store'da aktif olarak yayınlanmaktadır." },
    en: { title: "WayFindr", desc: "Travel guide app that helps users discover new places and share location insights. Live on Google Play.", long: "WayFindr is a travel guide application enabling users to discover new places and share location information. Currently live on the Google Play Store." },
  },
  finnoDesc: {
    tr: { title: "Finno", desc: "Kotlin ile geliştirilen kişisel finans takip uygulaması. Gelir-gider yönetimi ve görsel raporlama.", long: "Finno, kullanıcıların gelir ve giderlerini kolayca takip etmelerine yardımcı olan bir kişisel finans uygulamasıdır. Jetpack Compose ile modern bir arayüze sahip." },
    en: { title: "Finno", desc: "Personal finance tracking app built with Kotlin. Manage income/expenses and view visual reports.", long: "Finno is a personal finance application that helps users easily track their income and expenses. Features a modern interface built with Jetpack Compose." },
  },
  dailywaterDesc: {
    tr: { title: "DailyWater", desc: "Günlük su içme alışkanlığını takip etmek için geliştirilmiş Android uygulaması. Bildirim ve hatırlatma özellikleri.", long: "DailyWater, kullanıcıların günlük su içme hedeflerini takip etmelerine yardımcı olan bir sağlık uygulamasıdır. WorkManager ile akıllı hatırlatma bildirimleri sunar." },
    en: { title: "DailyWater", desc: "Android app to track daily water intake habits with notification and reminder features.", long: "DailyWater is a health application that helps users track their daily water intake goals. Features smart reminder notifications powered by WorkManager." },
  },
  tasklyDesc: {
    tr: { title: "Taskly", desc: "Yapılacak işleri düzenli şekilde takip etmeye yarayan görev yönetimi Android uygulaması.", long: "Taskly, kullanıcıların günlük görevlerini organize etmelerine yardımcı olan bir görev yönetimi uygulamasıdır. Room veritabanı ile yerel depolama sağlar." },
    en: { title: "Taskly", desc: "Task management Android app for organized to-do tracking with local storage.", long: "Taskly is a task management application that helps users organize their daily tasks. Uses Room database for local storage and Jetpack Compose for the UI." },
  },
  noteflowDesc: {
    tr: { title: "NoteFlow", desc: "Not alma ve düzenleme işlemlerini kolaylaştıran, notları güvenle saklayan Android uygulaması.", long: "NoteFlow, kullanıcıların notlarını kolayca oluşturup düzenleyebileceği bir not defteri uygulamasıdır. Material Design prensipleriyle tasarlanmış temiz bir arayüze sahip." },
    en: { title: "NoteFlow", desc: "Android note-taking app for creating and organizing notes with secure local storage.", long: "NoteFlow is a note-taking application for easily creating and editing notes. Features a clean interface designed with Material Design principles." },
  },
  metaverseDesc: {
    tr: { title: "Metaverse School", desc: "İstanbul Medipol Üniversitesi öğrencileri için sanal okul ortamı sunan PC uygulaması.", long: "İstanbul Medipol Üniversitesi öğrencileri için sanal bir okul ortamı oluşturan PC uygulaması. Unity ve C# ile geliştirilmiş, 3D modelleme Blender ile yapılmıştır. Proje mezuniyet sonrası ekibe devredildi." },
    en: { title: "Metaverse School", desc: "PC application providing a virtual school environment for Istanbul Medipol University students.", long: "A PC application creating a virtual school environment for Istanbul Medipol University students. Built with Unity and C#, 3D assets modeled with Blender. Project was handed over to the team after graduation." },
  },
  savennaDesc: {
    tr: { title: "Savenna's Adventure", desc: "Kullanıcının ana karakter Savenna'yı yönlendirdiği, aksiyon ve macara dolu 2D Android mobil oyunu.", long: "Savenna's Adventure, kullanıcının ana karakter Savenna'yı yönlendirerek görevleri tamamladığı aksiyon ve macara dolu bir 2D mobil oyundur. Kotlin ve Android Canvas API ile geliştirilmiştir." },
    en: { title: "Savenna's Adventure", desc: "2D Android mobile game where players guide the main character Savenna through action-adventure missions.", long: "Savenna's Adventure is an action-adventure 2D mobile game where players control the main character Savenna to complete missions. Built with Kotlin and the Android Canvas API." },
  },
};

export default function Projects() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [hovered, setHovered] = useState<number | null>(null);

  const filterAll = lang === "tr" ? "Hepsi" : "All";
  const filters = t.projects.filters;

  const getCategory = (p: Project) => lang === "tr" ? p.categoryTr : p.categoryEn;

  const getContent = (key: string) => {
    const entry = projectContent[key];
    if (!entry) return { title: key, desc: "", long: "" };
    return entry[lang];
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const restProjects = projects.filter((p) => !p.featured).filter((p) => {
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

        {/* Featured Projects (2 cards) */}
        <AnimatedSection delay={0.1} className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => {
              const content = getContent(project.descKey);
              const longContent = getContent(project.longDescKey);
              return (
                <motion.div
                  key={project.id}
                  className={cn(
                    "relative rounded-3xl p-7 border border-white/6 overflow-hidden cursor-pointer",
                    "bg-gradient-to-br bg-[#12121a]",
                    project.gradient
                  )}
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.01, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence>
                    {hovered === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-indigo-500/5 rounded-3xl pointer-events-none"
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">
                        {t.projects.featured}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/40 border border-white/8">
                        {getCategory(project)}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center mb-4">
                      <span className="text-lg font-black gradient-text">{project.initials}</span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 leading-tight">{content.title}</h3>
                    <p className="text-white/55 leading-relaxed mb-4 text-sm">{longContent.long}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono text-indigo-300/70 bg-indigo-500/10 border border-indigo-500/15">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold transition-colors"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FiExternalLink size={13} />
                          {t.projects.liveDemo}
                        </motion.a>
                      )}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/8 hover:border-white/20 text-white/70 hover:text-white text-sm font-medium transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiGithub size={13} />
                        {t.projects.source}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                    active ? "bg-indigo-500 text-white" : "glass border border-white/8 text-white/50 hover:text-white hover:border-white/20"
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
            {restProjects.map((project, index) => {
              const content = getContent(project.descKey);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group rounded-3xl p-7 border border-white/6 overflow-hidden cursor-pointer bg-gradient-to-br from-[#12121a] to-[#0e0e14]"
                  onMouseEnter={() => setHovered(project.id)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <motion.div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl", project.gradient)} />
                  <motion.div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.2)" }} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-white/40 border border-white/8">
                        {getCategory(project)}
                      </span>
                      <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity" whileHover={{ rotate: 45 }}>
                        <FiArrowUpRight className="text-indigo-400" size={20} />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">{content.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5">{content.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-mono text-white/40 bg-white/3 border border-white/6">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.live && (
                        <>
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors" onClick={(e) => e.stopPropagation()}>
                            <FiExternalLink size={13} />
                            {t.projects.liveLabel}
                          </a>
                          <span className="text-white/15">·</span>
                        </>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 font-medium transition-colors" onClick={(e) => e.stopPropagation()}>
                        <FiGithub size={13} />
                        {t.projects.codeLabel}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {restProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 text-white/30 text-sm">
            {t.projects.noProjects}
          </motion.div>
        )}
      </div>
    </section>
  );
}
