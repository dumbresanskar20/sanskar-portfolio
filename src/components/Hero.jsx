import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Download, ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo, typingRoles } from "../data/data";

/* ── Typing Animation Hook ─────────────────────────────── */
function useTypingAnimation(words, speed = 80, deleteSpeed = 40, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return text;
}

/* ── Particle Canvas ───────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ── Hero Section ──────────────────────────────────────── */
export default function Hero() {
  const typedText = useTypingAnimation(typingRoles);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020817 0%, #0d1530 50%, #0a0f1e 100%)" }}
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Gradient blobs */}
      <div className="blob blob-1 w-96 h-96 bg-indigo-600 top-1/4 -left-20" />
      <div className="blob blob-2 w-80 h-80 bg-violet-600 bottom-1/4 right-0" />
      <div className="blob blob-3 w-64 h-64 bg-purple-800 top-10 right-1/4" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-max text-center px-4 sm:px-6 pt-24 pb-12"
      >
        {/* Location badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-violet-300 border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm">
            <MapPin size={14} className="text-violet-400" />
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-4"
        >
          Hi, I'm{" "}
          <span className="text-gradient-animated block sm:inline">
            {personalInfo.name.split(" ")[0]}
          </span>{" "}
          <span className="text-white">{personalInfo.name.split(" ")[1]}</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="h-14 flex items-center justify-center mb-6">
          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-gray-300">
            <span className="text-gradient">{typedText}</span>
            <span className="typing-cursor" aria-hidden="true" />
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View Projects <ArrowRight size={16} />
          </motion.button>

          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            <Download size={16} /> Download Resume
          </motion.a>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          {/* GitHub */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sanskar's GitHub profile"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon-btn group"
            style={{ "--brand-color": "#ffffff", "--brand-bg": "#181717" }}
          >
            <FaGithub size={20} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sanskar's LinkedIn profile"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon-btn"
            style={{ "--brand-color": "#ffffff", "--brand-bg": "#0A66C2" }}
          >
            <FaLinkedinIn size={20} />
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to Sanskar"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="social-icon-btn"
            style={{ "--brand-color": "#ffffff", "--brand-bg": "#6366f1" }}
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors mx-auto"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          aria-label="Scroll to About"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
}
