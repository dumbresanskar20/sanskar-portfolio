import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/data";

const categoryColors = {
  Languages: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
  Frontend: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
  Backend: "from-green-500/20 to-green-600/10 border-green-500/30 text-green-400",
  Database: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-400",
  Tools: "from-pink-500/20 to-pink-600/10 border-pink-500/30 text-pink-400",
  "CS Fundamentals": "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 text-indigo-400",
  "Soft Skills": "from-teal-500/20 to-teal-600/10 border-teal-500/30 text-teal-400",
};

function SkillGroup({ group, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const colorClass = categoryColors[group.category] || "from-accent-500/20 to-violet-600/10 border-accent-500/30 text-accent-400";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card group"
    >
      {/* Category header */}
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold mb-4 bg-gradient-to-r border ${colorClass}`}>
        {group.category}
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.04 + 0.2 }}
            className="skill-chip"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Technologies I Work With
          </p>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
          <p className="section-subtitle">
            A broad set of tools and technologies I've worked with across my projects and internships.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <SkillGroup key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
