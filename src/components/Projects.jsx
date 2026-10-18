import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink, Star, AlertCircle, Filter
} from "lucide-react";
import { projects, projectCategories } from "../data/data";

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`card group relative overflow-hidden ${
        project.featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Featured banner */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-yellow-300 bg-yellow-400/15 border border-yellow-400/30">
            <Star size={11} fill="currentColor" /> Featured
          </span>
        </div>
      )}

      {/* Badge (e.g., In Development) */}
      {project.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-orange-300 bg-orange-400/15 border border-orange-400/30">
            <AlertCircle size={11} /> {project.badge}
          </span>
        </div>
      )}

      {/* Gradient top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)" }}
      />

      <div className={`${project.featured ? "p-8" : "p-6"}`}>
        {/* Header */}
        <div className="mb-4">
          <h3 className={`font-display font-bold text-white group-hover:text-gradient transition-colors mb-1 ${
            project.featured ? "text-2xl" : "text-lg"
          }`}>
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-accent-400 text-sm font-medium">{project.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>

        {/* Actions — Live Demo only (no per-project GitHub link) */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm px-4 py-2"
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-accent-400 font-medium text-sm uppercase tracking-widest mb-3">
            What I've Built
          </p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
          <p className="section-subtitle">
            A collection of projects showcasing my skills in full-stack development, SaaS, and web design.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "text-white shadow-glow"
                  : "text-gray-400 hover:text-white border border-white/10 hover:border-accent-500/50"
              }`}
              style={
                activeFilter === cat
                  ? { background: "linear-gradient(135deg, #6366f1, #8b5cf6)", border: "none" }
                  : {}
              }
            >
              {cat === "All" && <Filter size={14} />}
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
