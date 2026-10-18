import { motion } from "framer-motion";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo, navLinks } from "../data/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Subtle gradient top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      />

      {/* Background blobs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)" }} />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-white text-xs"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                SD
              </div>
              <span className="font-display font-bold text-gradient text-lg">Sanskar Dumbre</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer · Python Developer · MERN Stack · Aspiring AI Engineer
            </p>
            <div className="flex gap-3 mt-4">
              {/* GitHub */}
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sanskar's GitHub profile"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-200 hover:bg-[#181717] hover:text-white hover:border-white/30"
              >
                <FaGithub size={17} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sanskar's LinkedIn profile"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-200 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]/60"
              >
                <FaLinkedinIn size={17} />
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to Sanskar"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 border border-white/10 transition-all duration-200 hover:bg-accent-500/10 hover:text-white hover:border-accent-500/50"
              >
                <Mail size={17} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-500 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-accent-400 transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-accent-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.location}</li>
            </ul>
            <div className="mt-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-outline text-xs px-4 py-2 inline-flex"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Sanskar Dumbre · Made with{" "}
            <Heart size={13} className="text-red-500 fill-red-500" />
            using React &amp; Tailwind
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/10 hover:border-accent-500/50 hover:bg-accent-500/10"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
