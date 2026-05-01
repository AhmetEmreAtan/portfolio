"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/ahmetemreatan", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/ahmetemreatan", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com/ahmetemreatan", label: "Twitter" },
  { icon: FiMail, href: "mailto:hello@ahmetemreatan.dev", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="gradient-text font-bold text-xl">AEA</span>
          <span className="text-white/20 text-sm ml-3">
            © {new Date().getFullYear()} Ahmet Emre Atan
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
