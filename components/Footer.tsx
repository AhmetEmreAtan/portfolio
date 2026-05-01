"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  { icon: FiGithub, href: "https://github.com/AhmetEmreAtan", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/ahmet-emre-atan-4538ab1a9/", label: "LinkedIn" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="gradient-text font-bold text-xl">AEA</span>
          <span className="text-white/20 text-sm ml-3">
            © {new Date().getFullYear()} {t.footer.copyright}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
