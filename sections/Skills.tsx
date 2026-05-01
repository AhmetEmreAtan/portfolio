"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiFramer, SiNodedotjs, SiPython, SiGraphql, SiPostgresql,
  SiMongodb, SiRedis, SiDocker, SiKubernetes, SiGit,
  SiVercel, SiCloudflare,
} from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  skills: { name: string; icon: React.ElementType; level: number; color: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    description: "Crafting performant UIs for web and mobile platforms",
    color: "indigo",
    skills: [
      { name: "React", icon: SiReact, level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, level: 92, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, level: 90, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 93, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, level: 85, color: "#0055FF" },
      { name: "React Native", icon: SiReact, level: 88, color: "#61DAFB" },
      { name: "Vercel", icon: SiVercel, level: 90, color: "#FFFFFF" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Building scalable server-side systems and APIs",
    color: "purple",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 90, color: "#339933" },
      { name: "Python", icon: SiPython, level: 85, color: "#3776AB" },
      { name: "GraphQL", icon: SiGraphql, level: 80, color: "#E10098" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 85, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, level: 82, color: "#47A248" },
      { name: "Redis", icon: SiRedis, level: 78, color: "#DC382D" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Deploying and scaling production infrastructure",
    color: "blue",
    skills: [
      { name: "Docker", icon: SiDocker, level: 85, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, level: 70, color: "#326CE5" },
      { name: "Cloudflare", icon: SiCloudflare, level: 78, color: "#F48120" },
      { name: "Git", icon: SiGit, level: 95, color: "#F05032" },
    ],
  },
];

const colorMap: Record<string, string> = {
  indigo: "from-indigo-500 to-indigo-600",
  purple: "from-purple-500 to-purple-600",
  blue: "from-blue-500 to-blue-600",
};

const borderColorMap: Record<string, string> = {
  indigo: "border-indigo-500/20 hover:border-indigo-500/40",
  purple: "border-purple-500/20 hover:border-purple-500/40",
  blue: "border-blue-500/20 hover:border-blue-500/40",
};

const glowMap: Record<string, string> = {
  indigo: "bg-indigo-500/10",
  purple: "bg-purple-500/10",
  blue: "bg-blue-500/10",
};

function SkillBar({
  name,
  icon: Icon,
  level,
  color,
  index,
  barColor,
}: {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
  index: number;
  barColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <Icon size={15} style={{ color }} className="opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">
            {name}
          </span>
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
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={cn("h-full rounded-full bg-gradient-to-r", barColor)}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">03.</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            A breakdown of the technologies I&apos;ve mastered and the areas I
            bring the most value to.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection
              key={category.id}
              delay={catIndex * 0.15}
              direction="up"
            >
              <div
                className={cn(
                  "h-full glass rounded-3xl p-7 border transition-colors duration-300",
                  borderColorMap[category.color]
                )}
              >
                {/* Category header */}
                <div className="mb-6">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-2xl flex items-center justify-center mb-4",
                      glowMap[category.color]
                    )}
                  >
                    <div
                      className={cn(
                        "w-5 h-5 rounded-lg bg-gradient-to-br",
                        colorMap[category.color]
                      )}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      index={skillIndex}
                      barColor={colorMap[category.color]}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Floating tags cloud */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="glass rounded-3xl p-7 border border-white/5">
            <p className="text-sm text-white/40 font-medium mb-5 uppercase tracking-wider">
              Also familiar with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Prisma", "tRPC", "Zustand", "Jotai", "Vite", "Vitest",
                "Jest", "Playwright", "Storybook", "Figma", "Linear",
                "Supabase", "PlanetScale", "Vercel", "Netlify", "Cloudflare",
                "Socket.io", "Bull", "Zod", "React Query",
              ].map((tag, i) => (
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
