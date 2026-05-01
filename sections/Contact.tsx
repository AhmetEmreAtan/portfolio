"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiGithub, FiLinkedin, FiMapPin, FiCheck, FiAlertCircle } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const socials = [
    {
      icon: FiGithub,
      label: "GitHub",
      value: "@AhmetEmreAtan",
      href: "https://github.com/AhmetEmreAtan",
      color: "hover:text-white",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "ahmet-emre-atan",
      href: "https://www.linkedin.com/in/ahmet-emre-atan-4538ab1a9/",
      color: "hover:text-blue-400",
    },
  ];

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = lang === "tr" ? "Ad zorunlu" : "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = lang === "tr" ? "Geçerli e-posta zorunlu" : "Valid email is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = lang === "tr" ? "Mesaj en az 10 karakter olmalı" : "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("submitting");
    await new Promise((res) => setTimeout(res, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full bg-white/3 border border-white/8 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200";

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-indigo-500/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-indigo-400 font-mono text-sm">{t.contact.sectionNum}</span>
            <span className="h-px flex-1 max-w-[60px] bg-indigo-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t.contact.title}</h2>
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">{t.contact.subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={0.1}>
              <div className="glass rounded-3xl p-7 border border-white/6 space-y-6">
                <div>
                  <h3 className="font-bold text-white mb-1">{t.contact.sayHello}</h3>
                  <a
                    href="mailto:ahmetemreatan@gmail.com"
                    className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <FiMail size={14} />
                    ahmetemreatan@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-1">{t.contact.basedIn}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <FiMapPin size={14} />
                    {t.contact.location}
                  </div>
                </div>

              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass rounded-3xl p-7 border border-white/6">
                <h3 className="font-bold text-white mb-5">{t.contact.findOnline}</h3>
                <div className="space-y-3">
                  {socials.map(({ icon: Icon, label, value, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-2xl bg-white/2 border border-white/5 hover:border-white/12 text-white/50 ${color} transition-all group`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={16} className="shrink-0" />
                      <div>
                        <div className="text-xs text-white/30 font-medium">{label}</div>
                        <div className="text-sm font-medium">{value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <AnimatedSection delay={0.15} direction="left" className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 border border-white/6">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-5">
                    <FiCheck size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t.contact.successTitle}</h3>
                  <p className="text-white/50 text-sm max-w-xs leading-relaxed mb-6">{t.contact.successMsg}</p>
                  <motion.button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 text-sm font-medium glass border border-white/10 rounded-xl text-white/60 hover:text-white hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t.contact.sendAnother}
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-6">{t.contact.formTitle}</h3>

                  <div>
                    <input
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                        <FiAlertCircle size={11} />{errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                        <FiAlertCircle size={11} />{errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1.5">
                        <FiAlertCircle size={11} />{errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400 text-center">{t.contact.errorMsg}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 bg-indigo-500 hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-2xl transition-colors duration-200 flex items-center justify-center gap-2.5"
                    whileHover={status !== "submitting" ? { scale: 1.02, y: -1 } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === "submitting" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        {t.contact.sendingBtn}
                      </>
                    ) : (
                      <>
                        <FiSend size={14} />
                        {t.contact.sendBtn}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
