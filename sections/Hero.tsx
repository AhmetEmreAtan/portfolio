"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";

const TYPING_TEXTS = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      timeout.current = setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % TYPING_TEXTS.length);
      return;
    }

    timeout.current = setTimeout(() => {
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [displayed, isDeleting, textIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-indigo-400 ml-0.5">|</span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] animate-blob animation-delay-200" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/8 rounded-full blur-[80px] animate-blob animation-delay-400" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Ahmet Emre</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/80 mb-6 h-14"
          >
            <TypingEffect />
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/50 max-w-2xl leading-relaxed mb-10"
          >
            I craft exceptional digital experiences through clean code and
            thoughtful design. Specializing in modern web and mobile
            applications with a focus on performance and user experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-2xl transition-colors duration-200 text-sm"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 glass border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-semibold rounded-2xl transition-all duration-200 text-sm"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.button>

            <div className="flex items-center gap-3 ml-1">
              {[
                { icon: FiGithub, href: "https://github.com/ahmetemreatan" },
                { icon: FiLinkedin, href: "https://linkedin.com/in/ahmetemreatan" },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center glass border border-white/8 rounded-xl text-white/50 hover:text-white hover:border-white/20 transition-all"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Built" },
              { value: "10+", label: "Technologies" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="text-3xl font-black gradient-text">{value}</div>
                <div className="text-sm text-white/40 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
