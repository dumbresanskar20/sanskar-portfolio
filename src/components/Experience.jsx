import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "../data/data";

function TimelineItem({ exp, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="relative flex gap-6 md:gap-8 items-start timeline-item"
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div
          className="timeline-dot w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            boxShadow: "0 0 20px rgba(99,102,241,0.5)",
          }}
        >
          <Briefcase size={20} className="text-white" />
        </div>

        {/* Vertical connector (except for last item) */}
        {index < experience.length - 1 && (
          <div
            className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5"
            style={{
              height: "calc(100% + 2rem)",
              background: "linear-gradient(180deg, rgba(99,102,241,0.6), rgba(99,102,241,0.1))",
            }}
          />
        )}
      </div>

      {/* Content Card */}
      <div className="card flex-1 mb-8 group">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-white group-hover:text-gradient transition-colors">
              {exp.role}
            </h3>
            <p className="text-accent-400 font-semibold mt-0.5">{exp.company}</p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium"
              style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#a78bfa" }}>
              <Calendar size={11} />
              {exp.duration}
            </span>
          </div>
        </div>

        {/* Type badge */}
        <span className="inline-block mb-4 px-2 py-0.5 rounded-md text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20">
          {exp.type}
        </span>

        {/* Bullets */}
        <ul className="space-y-3">
          {exp.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + i * 0.08 + 0.3 }}
              className="flex gap-3 text-sm text-gray-400 leading-relaxed"
            >
              <CheckCircle2 size={15} className="text-accent-400 flex-shrink-0 mt-0.5" />
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-3">
            My Journey
          </p>
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
          <p className="section-subtitle">
            Hands-on internship experience building real-world applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
