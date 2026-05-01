"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiKotlin,
  SiOpenjdk,
  SiPython,
  SiMysql,
  SiGit,
  SiAndroid,
  SiUnity,
  SiBlender,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
} from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const techStack = [
  { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
  { icon: SiOpenjdk, name: "Java", color: "#ED8B00" },
  { icon: SiAndroid, name: "Android", color: "#3DDC84" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiUnity, name: "Unity", color: "#FFFFFF" },
  { icon: SiBlender, name: "Blender", color: "#E87D0D" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
];

export default function About() {
  const { t } = useLanguage();
  const techRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(techRef, { once: true, margin: "-80px 0px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">{t.about.sectionNum}</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">{t.about.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">{t.about.subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <p className="text-white/70 leading-relaxed text-base">{t.about.bio1}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-white/60 leading-relaxed text-base">{t.about.bio2}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-white/60 leading-relaxed text-base">{t.about.bio3}</p>
            </AnimatedSection>

            <div className="grid gap-4 mt-8">
              {t.about.highlights.map((item, i) => (
                <AnimatedSection key={item.title} delay={0.4 + i * 0.1}>
                  <div className="glass rounded-2xl p-5 border border-white/5 hover:border-indigo-500/20 transition-colors group">
                    <h3 className="font-semibold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: Tech stack */}
          <div ref={techRef}>
            <AnimatedSection delay={0.2} direction="left">
              <div className="glass rounded-3xl p-8 border border-white/5">
                <h3 className="text-lg font-bold text-white/80 mb-6">{t.about.techTitle}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white/2 hover:bg-white/5 border border-white/4 hover:border-white/10 transition-all group cursor-default"
                      whileHover={{ y: -3, scale: 1.04 }}
                    >
                      <tech.icon
                        size={26}
                        style={{ color: tech.color }}
                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors font-medium text-center leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
