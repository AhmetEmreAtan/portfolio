"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiKotlin,
  SiOpenjdk,
  SiAndroid,
  SiPython,
  SiMysql,
  SiGit,
  SiUnity,
  SiBlender,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
} from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface SkillItem {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
}

const skillData: { mobile: SkillItem[]; backend: SkillItem[]; tools: SkillItem[] } = {
  mobile: [
    { name: "Kotlin", icon: SiKotlin, level: 88, color: "#7F52FF" },
    { name: "Java", icon: SiOpenjdk, level: 82, color: "#ED8B00" },
    { name: "Android", icon: SiAndroid, level: 85, color: "#3DDC84" },
    { name: "Jetpack Compose", icon: SiAndroid, level: 78, color: "#4285F4" },
    { name: "Unity", icon: SiUnity, level: 70, color: "#FFFFFF" },
    { name: "Blender", icon: SiBlender, level: 65, color: "#E87D0D" },
    { name: "React", icon: SiReact, level: 75, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, level: 72, color: "#3178C6" },
  ],
  backend: [
    { name: "Python", icon: SiPython, level: 75, color: "#3776AB" },
    { name: "Node.js", icon: SiNodedotjs, level: 70, color: "#339933" },
    { name: "MySQL", icon: SiMysql, level: 78, color: "#4479A1" },
    { name: "Docker", icon: SiDocker, level: 65, color: "#2496ED" },
    { name: "Git", icon: SiGit, level: 88, color: "#F05032" },
  ],
  tools: [
    { name: "Yapay Zeka", icon: FiCpu, level: 72, color: "#A78BFA" },
    { name: "C#", icon: SiUnity, level: 70, color: "#68217A" },
  ],
};

const colorMap: Record<string, string> = {
  mobile: "from-indigo-500 to-indigo-600",
  backend: "from-purple-500 to-purple-600",
  tools: "from-blue-500 to-blue-600",
};

const borderColorMap: Record<string, string> = {
  mobile: "border-indigo-500/20 hover:border-indigo-500/40",
  backend: "border-purple-500/20 hover:border-purple-500/40",
  tools: "border-blue-500/20 hover:border-blue-500/40",
};

const glowMap: Record<string, string> = {
  mobile: "bg-indigo-500/10",
  backend: "bg-purple-500/10",
  tools: "bg-blue-500/10",
};

function SkillBar({
  name, icon: Icon, level, color, index, barColor,
}: {
  name: string; icon: React.ElementType; level: number; color: string; index: number; barColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <Icon size={15} style={{ color }} className="opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.05 }}
          className="text-xs font-mono text-white/30"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={cn("h-full rounded-full bg-gradient-to-r", barColor)}
        />
      </div>
    </div>
  );
}

const alsoFamiliarTr = [
  "Jetpack Navigation", "Room Database", "WorkManager", "Material Design 3",
  "Firebase", "Google Maps API", "Canvas API", "MVVM", "Clean Architecture",
  "Retrofit", "Coroutines", "Flow", "Hilt", "Android Studio",
  "Figma", "Linear", "Postman", "VS Code",
];

const alsoFamiliarEn = [
  "Jetpack Navigation", "Room Database", "WorkManager", "Material Design 3",
  "Firebase", "Google Maps API", "Canvas API", "MVVM", "Clean Architecture",
  "Retrofit", "Coroutines", "Flow", "Hilt", "Android Studio",
  "Figma", "Linear", "Postman", "VS Code",
];

export default function Skills() {
  const { t, lang } = useLanguage();
  const alsoFamiliar = lang === "tr" ? alsoFamiliarTr : alsoFamiliarEn;

  const categoryIds = ["mobile", "backend", "tools"] as const;

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">{t.skills.sectionNum}</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t.skills.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">{t.skills.subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6">
          {t.skills.categories.map((category, catIndex) => {
            const id = categoryIds[catIndex];
            const skills = skillData[id];
            return (
              <AnimatedSection key={category.id} delay={catIndex * 0.15} direction="up">
                <div className={cn("h-full glass rounded-3xl p-7 border transition-colors duration-300", borderColorMap[id])}>
                  <div className="mb-6">
                    <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center mb-4", glowMap[id])}>
                      <div className={cn("w-5 h-5 rounded-lg bg-gradient-to-br", colorMap[id])} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5">{category.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{category.description}</p>
                  </div>
                  <div className="space-y-4">
                    {skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        {...skill}
                        index={skillIndex}
                        barColor={colorMap[id]}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Tag cloud */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="glass rounded-3xl p-7 border border-white/5">
            <p className="text-sm text-white/40 font-medium mb-5 uppercase tracking-wider">{t.skills.alsoTitle}</p>
            <div className="flex flex-wrap gap-2.5">
              {alsoFamiliar.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.025, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 rounded-xl text-sm font-medium text-white/50 bg-white/3 border border-white/6 hover:border-white/15 hover:text-white/80 transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
