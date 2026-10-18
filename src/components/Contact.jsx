import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2
} from "lucide-react";

const GithubIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { personalInfo } from "../data/data";

/*
 * ── EmailJS Setup ──────────────────────────────────────────────────────────────
 * To enable the contact form:
 * 1. Create a free account at https://www.emailjs.com
 * 2. Create a service (Gmail, Outlook, etc.) — note the Service ID
 * 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
 * 4. Copy your Public Key from Account > API Keys
 * 5. Replace the TODO values below:
 */
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";   // TODO: Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // TODO: Replace with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";   // TODO: Replace with your EmailJS Public Key

export default function Contact() {
  const formRef = useRef(null);
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="section-title">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
          <p className="section-subtitle">
            Open to internships and entry-level software engineering roles.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card">
              <h3 className="font-display font-bold text-white text-xl mb-6">
                Let's build something amazing together.
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}>
                      <Icon size={17} className="text-accent-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-300 hover:text-accent-400 transition-colors text-sm font-medium">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">Find me on</p>
                <div className="flex gap-3">
                  {[
                    { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
                    { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
                    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/10 hover:border-accent-500/60 hover:bg-accent-500/10"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Sanskar Dumbre"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(99,102,241,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(99,102,241,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sanskar, I'd love to discuss a project opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(99,102,241,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={status === "idle" || status === "error" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" || status === "error" ? { scale: 0.98 } : {}}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" && <Loader2 size={16} className="animate-spin" />}
                {status === "success" && <CheckCircle size={16} />}
                {status === "error" && <AlertCircle size={16} />}
                {status === "idle" && <Send size={16} />}
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Try Again" : "Send Message"}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center flex items-center justify-center gap-2">
                  <CheckCircle size={14} /> Thanks! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center flex items-center justify-center gap-2">
                  <AlertCircle size={14} /> Something went wrong. Try emailing me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
