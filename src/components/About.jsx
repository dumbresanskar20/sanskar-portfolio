import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Briefcase, GraduationCap, Rocket } from "lucide-react";
import { aboutText, stats } from "../data/data";

const statIcons = [Rocket, Briefcase, GraduationCap, Code2];

function StatCard({ value, label, icon: Icon, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card text-center group cursor-default"
    >
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))", border: "1px solid rgba(99,102,241,0.3)" }}>
        <Icon size={22} className="text-accent-400 group-hover:text-violet-400 transition-colors" />
      </div>
      <div className="font-display font-bold text-3xl text-gradient mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [imgRef, imgInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-accent-400 font-medium text-sm uppercase tracking-widest mb-3">
            Get To Know Me
          </p>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-16"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Avatar / Visual */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl animate-pulse-slow"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))", filter: "blur(20px)" }} />

              {/* Avatar placeholder card */}
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden"
                style={{ border: "2px solid rgba(99,102,241,0.4)", background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))" }}>
                {/* Profile initials placeholder */}
                {/* TODO: Replace this div with <img src="/profile.jpg" alt="Sanskar Dumbre" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full flex items-center justify-center font-display font-bold text-4xl text-white mb-4"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                    SD
                  </div>
                  <p className="text-accent-400 font-medium text-sm">Sanskar Dumbre</p>
                  <p className="text-gray-500 text-xs mt-1">Full Stack Developer</p>
                  {/* TODO: Add your profile photo — replace the above with an <img> tag */}
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <div className="glass rounded-xl px-4 py-2 text-center">
                    <p className="text-xs text-gray-300">Currently based in</p>
                    <p className="text-sm font-semibold text-accent-400">Pune, Maharashtra 🇮🇳</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Computer Engineering Student &{" "}
                <span className="text-gradient">Full Stack Developer</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">{aboutText}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Open to Internships",
                "React.js",
                "Node.js",
                "Python",
                "Problem Solver",
              ].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-primary"
              >
                Let's Talk
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline"
              >
                View Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} icon={statIcons[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
