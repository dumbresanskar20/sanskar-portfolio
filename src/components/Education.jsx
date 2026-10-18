import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, Award, CheckCircle2 } from "lucide-react";
import { education, certifications } from "../data/data";

function EducationCard({ edu, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-5 items-start"
    >
      {/* Left: Icon + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: edu.current
              ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
              : "rgba(99,102,241,0.15)",
            border: edu.current ? "none" : "2px solid rgba(99,102,241,0.4)",
            boxShadow: edu.current ? "0 0 15px rgba(99,102,241,0.5)" : "none",
          }}
        >
          <GraduationCap
            size={20}
            className={edu.current ? "text-white" : "text-accent-400"}
          />
        </div>
        {index < education.length - 1 && (
          <div
            className="w-0.5 flex-1 mt-2"
            style={{
              minHeight: "3rem",
              background: "linear-gradient(180deg, rgba(99,102,241,0.5), rgba(99,102,241,0.1))",
            }}
          />
        )}
      </div>

      {/* Right: Card */}
      <div className={`card flex-1 mb-6 ${edu.current ? "glow-hover" : ""}`}>
        {edu.current && (
          <span className="inline-flex items-center gap-1 mb-3 px-2 py-0.5 rounded-md text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20">
            <CheckCircle2 size={11} /> Currently Pursuing
          </span>
        )}
        <h3 className="font-display font-bold text-white text-lg mb-1">{edu.degree}</h3>
        <p className="text-accent-400 font-medium text-sm mb-2">{edu.institution}</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} /> {edu.duration}
          </span>
          <span className="hidden sm:block">·</span>
          <span className="inline-flex items-center gap-1.5 text-accent-300 font-semibold">
            <Award size={13} /> {edu.score}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ cert, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group text-center"
    >
      <div
        className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))",
          border: "1px solid rgba(99,102,241,0.3)",
        }}
      >
        <Award size={26} className="text-accent-400 group-hover:text-violet-400 transition-colors" />
      </div>
      <h4 className="font-display font-bold text-white text-base mb-1">{cert.title}</h4>
      <p className="text-accent-400 text-sm mb-4">{cert.issuer}</p>
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline text-xs px-3 py-1.5 inline-flex"
      >
        View Certificate
      </a>
    </motion.div>
  );
}

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Bg blob */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        {/* Education Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-3">
            Academic Background
          </p>
          <h2 className="section-title">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
          <p className="section-subtitle">
            My academic journey and professional certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-8 flex items-center gap-2">
              <GraduationCap size={22} className="text-accent-400" /> Education
            </h3>
            <div className="space-y-0">
              {education.map((edu, i) => (
                <EducationCard key={edu.id} edu={edu} index={i} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-8 flex items-center gap-2">
              <Award size={22} className="text-accent-400" /> Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {certifications.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
