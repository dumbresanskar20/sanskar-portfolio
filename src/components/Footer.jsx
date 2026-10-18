import { motion } from "framer-motion";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { personalInfo, navLinks } from "../data/data";

const GithubIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


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
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all border border-white/10 hover:border-accent-500/50 hover:bg-accent-500/10"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
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
            using React & Tailwind
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
