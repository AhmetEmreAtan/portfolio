"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiBook } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: number;
  role: { tr: string; en: string };
  company: string;
  location: string;
  period: { tr: string; en: string };
  type: "work" | "education";
  description: { tr: string; en: string };
  highlights: { tr: string; en: string }[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: { tr: "NOC Mühendisi", en: "NOC Engineer" },
    company: "KoçSistem",
    location: "İstanbul, Türkiye",
    period: { tr: "Eyl 2025 — Halen", en: "Sep 2025 — Present" },
    type: "work",
    description: {
      tr: "KoçSistem'in Ağ Operasyon Merkezi (NOC) ekibinde görev yaparak ağ altyapısının kesintisiz çalışmasını sağlıyorum. Ağ izleme, olay yönetimi ve NOCDashboard web uygulamasının geliştirilmesinde aktif rol alıyorum.",
      en: "Working in KoçSistem's Network Operations Center (NOC) team, ensuring uninterrupted network infrastructure. Actively involved in network monitoring, incident management, and development of the NOCDashboard web application.",
    },
    highlights: [
      { tr: "NOCDashboard web uygulaması geliştirildi ve NOC ekibine entegre edildi", en: "Developed NOCDashboard web application and integrated it into the NOC team's workflow" },
      { tr: "Ağ cihazlarının anlık izlenmesi ve alarm yönetimi süreçlerine katkı sağlandı", en: "Contributed to real-time monitoring of network devices and alarm management processes" },
      { tr: "Şirket bünyesinde yazılım geliştirme süreçlerinde aktif rol alındı", en: "Took an active role in software development processes within the company" },
    ],
    tech: ["React", "TypeScript", "Node.js", "MySQL", "Docker", "Ağ Yönetimi"],
  },
  {
    id: 2,
    role: { tr: "Proje Yöneticisi & Ekip Lideri, Yazılım Geliştirici", en: "Project Manager & Team Lead, Software Developer" },
    company: "WayFindr",
    location: "İstanbul, Türkiye",
    period: { tr: "Ağu 2023 — Halen", en: "Aug 2023 — Present" },
    type: "work",
    description: {
      tr: "15 kişilik ekiple seyahat ve lokasyon tabanlı bir uygulama geliştirdim. Uygulama Google Play Store'da yayında. Proje yönetimi ve liderlik görevlerini üstlenirken yazılım geliştirme süreçlerine de aktif olarak katılıyorum.",
      en: "Developed a travel and location-based application with a 15-person team. The app is live on the Google Play Store. I handle project management and leadership while actively participating in software development.",
    },
    highlights: [
      { tr: "Uygulama Google Play Store'da yayınlandı ve aktif kullanıcı kitlesi oluşturuldu", en: "App published on Google Play Store with an active user base" },
      { tr: "15 kişilik ekibin proje yönetimi ve koordinasyonu üstlenildi", en: "Managed and coordinated a 15-person development team" },
      { tr: "Google Maps API entegrasyonu ve lokasyon tabanlı özellikler geliştirildi", en: "Developed Google Maps API integration and location-based features" },
    ],
    tech: ["Kotlin", "Android", "Google Maps API", "Firebase", "Proje Yönetimi"],
  },
  {
    id: 3,
    role: { tr: "E-Ticaret Danışmanı", en: "E-Commerce Consultant" },
    company: "ENA Ticaret",
    location: "İstanbul, Türkiye",
    period: { tr: "Eyl 2023 — Eyl 2024", en: "Sep 2023 — Sep 2024" },
    type: "work",
    description: {
      tr: "E-ticaret stratejileri ve yazılım çözümleri üzerinde danışmanlık hizmeti sağladım. E-ticaret platformlarının yönetimi, entegrasyonu ve optimizasyon süreçlerini yönettim. Yazılım projelerinin analiz, geliştirme ve uygulama aşamalarında aktif rol aldım.",
      en: "Provided consulting services on e-commerce strategies and software solutions. Managed e-commerce platform administration, integration, and optimization processes. Actively involved in analysis, development, and implementation phases of software projects.",
    },
    highlights: [
      { tr: "E-ticaret platformlarının yönetimi ve optimizasyon süreçleri yönetildi", en: "Managed e-commerce platform administration and optimization processes" },
      { tr: "Yazılım projelerinin analiz ve geliştirme aşamalarında aktif rol alındı", en: "Took an active role in software project analysis and development phases" },
      { tr: "Platform entegrasyonu ve iş akışı iyileştirmeleri gerçekleştirildi", en: "Implemented platform integrations and workflow improvements" },
    ],
    tech: ["E-Ticaret", "Proje Yönetimi", "Platform Entegrasyonu", "Analitik"],
  },
  {
    id: 4,
    role: { tr: "Stajyer, Yazılım Geliştirici", en: "Intern, Software Developer" },
    company: "Turkcell",
    location: "İstanbul, Türkiye",
    period: { tr: "Şub 2023 — Ağu 2023", en: "Feb 2023 — Aug 2023" },
    type: "work",
    description: {
      tr: "Turkcell bünyesinde yazılım geliştirme süreçlerinde aktif olarak yer aldım. Kotlin ile Android uygulama geliştirme ve şirket projelerine katkıda bulundum.",
      en: "Actively participated in software development processes at Turkcell. Contributed to Android application development with Kotlin and company projects.",
    },
    highlights: [
      { tr: "Kotlin ile Android uygulama geliştirme süreçlerine katkı sağlandı", en: "Contributed to Android application development processes with Kotlin" },
      { tr: "Turkcell'in Gençlere Yatırım Geleceğe Yazılım Programı kapsamında 6 aylık Kotlin eğitimi tamamlandı", en: "Completed 6-month Kotlin training under Turkcell's Youth Investment Future Software Program" },
      { tr: "Kurumsal yazılım geliştirme süreçleri ve metodolojileri öğrenildi", en: "Learned corporate software development processes and methodologies" },
    ],
    tech: ["Kotlin", "Android", "Java", "Yazılım Geliştirme"],
  },
  {
    id: 5,
    role: { tr: "Proje Yöneticisi, Ekip Lideri & Yazılım Geliştirici", en: "Project Manager, Team Lead & Software Developer" },
    company: "İstanbul Medipol Üniversitesi",
    location: "İstanbul, Türkiye",
    period: { tr: "Eki 2021 — Nis 2023", en: "Oct 2021 — Apr 2023" },
    type: "work",
    description: {
      tr: "15 kişilik bir ekiple Medipol Üniversitesi adına sanal okul ortamı geliştirdim. Proje yönetimi ve liderlik görevlerini üstlenirken yazılım geliştirme süreçlerine de aktif olarak katıldım. Proje, mezuniyetim sonrası ekibe devredildi.",
      en: "Developed a virtual school environment on behalf of Medipol University with a 15-person team. Handled project management and leadership while actively participating in software development. Project was handed over to the team after graduation.",
    },
    highlights: [
      { tr: "15 kişilik ekibin proje yönetimi, görev koordinasyonu ve liderliği üstlenildi", en: "Led project management, task coordination, and team leadership for a 15-person team" },
      { tr: "Unity ile 3D sanal kampüs ortamı oluşturuldu", en: "Created a 3D virtual campus environment with Unity" },
      { tr: "Uzaktan eğitim merkezi ile iş birliği yapılarak proje hayata geçirildi", en: "Collaborated with the distance education center to bring the project to life" },
    ],
    tech: ["Unity", "C#", "Blender", "3D Modelleme", "Proje Yönetimi"],
  },
  {
    id: 6,
    role: { tr: "Lisans — Yönetim Bilişim Sistemleri", en: "B.Sc. — Management Information Systems" },
    company: "İstanbul Medipol Üniversitesi",
    location: "İstanbul, Türkiye",
    period: { tr: "Eyl 2019 — Haz 2023", en: "Sep 2019 — Jun 2023" },
    type: "education",
    description: {
      tr: "3.03 GPA ile mezun oldum. Yazılım mühendisliği, veritabanı yönetimi ve bilgi sistemleri alanlarında kapsamlı eğitim aldım.",
      en: "Graduated with a 3.03 GPA. Received comprehensive education in software engineering, database management, and information systems.",
    },
    highlights: [
      { tr: "GPA: 3.03 ile lisans derecesi tamamlandı", en: "Completed bachelor's degree with 3.03 GPA" },
      { tr: "Yazılım mühendisliği ve veritabanı yönetimi odaklı müfredat", en: "Curriculum focused on software engineering and database management" },
      { tr: "Medipol Sanal Okul projesi ile üniversite için üretim kalitesinde uygulama geliştirildi", en: "Developed a production-quality application for the university with the Medipol Virtual School project" },
    ],
    tech: ["Yönetim Bilişim Sistemleri", "Veritabanı", "Yazılım Mühendisliği", "Bilgi Sistemleri"],
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
        {type === "education" ? (
          <FiBook size={16} className="text-purple-400" />
        ) : (
          <FiBriefcase size={16} className="text-indigo-400" />
        )}
      </motion.div>
    </div>
  );
}

function CardContent({ item }: { item: ExperienceItem }) {
  const { t, lang } = useLanguage();
  return (
    <>
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <span className={cn(
            "inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold mb-2",
            item.type === "education"
              ? "bg-purple-500/20 text-purple-300"
              : "bg-indigo-500/20 text-indigo-300"
          )}>
            {item.type === "education" ? t.experience.eduLabel : t.experience.workLabel}
          </span>
          <h3 className="text-base font-bold text-white leading-tight">{item.role[lang]}</h3>
          <p className="text-sm font-semibold text-indigo-400/80 mt-0.5">{item.company}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-white/35 mb-4">
        <span className="flex items-center gap-1.5">
          <FiCalendar size={11} />
          {item.period[lang]}
        </span>
        <span className="flex items-center gap-1.5">
          <FiMapPin size={11} />
          {item.location}
        </span>
      </div>

      <p className="text-sm text-white/50 leading-relaxed mb-4">{item.description[lang]}</p>

      <ul className="space-y-2 mb-4">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-white/45">
            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
            <span>{h[lang]}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((tech) => (
          <span key={tech} className="px-2 py-0.5 rounded-md text-xs font-mono text-white/35 bg-white/3 border border-white/6">
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}

function TimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] items-start gap-6 max-w-4xl mx-auto">
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

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">{t.experience.sectionNum}</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t.experience.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">{t.experience.subtitle}</p>
        </AnimatedSection>

        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {experiences.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.08}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0",
                    item.type === "education" ? "bg-purple-500/20 border-purple-500/50" : "bg-indigo-500/20 border-indigo-500/50"
                  )}>
                    {item.type === "education"
                      ? <FiBook size={13} className="text-purple-400" />
                      : <FiBriefcase size={13} className="text-indigo-400" />}
                  </div>
                  {i < experiences.length - 1 && <div className="w-px flex-1 min-h-8 bg-white/8 mt-2" />}
                </div>
                <div className="glass rounded-3xl p-6 border border-white/6 flex-1 mb-4">
                  <CardContent item={item} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-0">
          {experiences.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
