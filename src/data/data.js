// ============================================================
// data.js — Central data file for Sanskar Dumbre's Portfolio
// Edit this file to update all content across the site.
// ============================================================

export const personalInfo = {
  name: "Sanskar Dumbre",
  logo: "SD",
  title: "Software Developer | AI Engineer",
  tagline: "Computer Engineering student who turns ideas into polished, working products.",
  email: "dumbresanskar23@gmail.com",
  phone: "+91 8830405039",
  location: "Pune, Maharashtra",
  github: "https://github.com/dumbresanskar20",
  linkedin: "https://www.linkedin.com/in/sanskar-dumbre-a60404354",
  // Path to your resume PDF — place it at /public/resume.pdf
  resumeUrl: "/resume.pdf",
};

export const typingRoles = [
  "Full Stack Developer",
  "Python Developer",
  "MERN Stack Developer",
  "Aspiring AI Engineer",
];

export const aboutText = `Motivated and detail-oriented developer with a strong foundation in full-stack web development and Python. Experienced in building responsive, user-focused applications with modern frameworks, designing REST APIs, and implementing secure authentication. Familiar with databases, real-time features, and payment integrations, with a growing interest in artificial intelligence and its practical applications. Quick learner who enjoys turning ideas into polished products and collaborating in teams.`;

export const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "2", label: "Internships" },
  { value: "8.64", label: "SGPA" },
  { value: "Live", label: "Products Deployed" },
];

export const experience = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "SkillField Mentor",
    duration: "15 June 2026 – 15 July 2026",
    type: "Internship",
    bullets: [
      "Developed responsive, component-based front-end interfaces using React.js, HTML5, CSS3, and JavaScript, improving page usability and performance.",
      "Used Git and GitHub for version control, branching, and collaborative code management.",
      "Debugged and resolved front-end and back-end issues through systematic testing.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Development in Python Intern",
    company: "Sumago Infotech Pvt. Ltd.",
    duration: "Jun 2024 – Jul 2024",
    type: "Internship",
    bullets: [
      "Completed a 6-week industrial training in full-stack web development using HTML, CSS, Python, and Django.",
      "Collaborated on a real-time team project with Git and GitHub.",
      "Strengthened problem-solving and debugging through weekly coding tasks and project reviews.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "MealBook",
    subtitle: "Digital Canteen & Mess Management Platform",
    description:
      "Multi-tenant SaaS for college canteens and hostel messes to eliminate queues. Student web and Android app (React, Capacitor), live kitchen display, and super-admin console for onboarding clients and managing subscriptions. Features real-time order tracking, QR-based meal tokens, Razorpay payments, and role-based access control.",
    tags: ["React", "Capacitor", "Node.js", "Express", "MySQL", "Socket.IO", "Razorpay", "JWT"],
    category: "SaaS",
    featured: true,
    liveUrl: "https://mealbook.in",
    badge: null,
  },
  {
    id: 2,
    title: "Fitpulse",
    subtitle: "Gym Management SaaS Platform",
    description:
      "Responsive all-in-one platform to digitize gym operations: member management, memberships, and attendance in one dashboard. Scalable SaaS architecture deployed on Vercel.",
    tags: ["React", "Node.js", "MongoDB", "Vercel"],
    category: "SaaS",
    featured: false,
    liveUrl: "https://fitpulse-zeta-five.vercel.app",
    badge: null,
  },
  {
    id: 3,
    title: "CO-PO Software",
    subtitle: "Outcome-Based Education Management Platform",
    description:
      "Web platform to automate Course Outcome and Program Outcome mapping and attainment calculation for engineering departments, replacing manual spreadsheets with automated calculations and accreditation reports.",
    tags: ["React", "Node.js", "MySQL", "Express"],
    category: "Full Stack",
    featured: false,
    liveUrl: "https://co-po-software.vercel.app",
    badge: "In Development",
  },
  {
    id: 4,
    title: "The Janta Journal",
    subtitle: "Digital News Platform",
    description:
      "Editorial-style news platform covering national affairs, geopolitics, economy, technology, policy, and culture, with a polished dark theme, category navigation, and SEO-ready metadata.",
    tags: ["React", "Node.js", "MongoDB", "SEO"],
    category: "Full Stack",
    featured: false,
    liveUrl: "https://news-platform-chi-lovat.vercel.app",
    badge: null,
  },
  {
    id: 5,
    title: "IntellxSkill Technologies",
    subtitle: "Ed-Tech Company Website",
    description:
      "Conversion-focused ed-tech website for a Cloud Data Analytics & BI program, covering curriculum, tools (Power BI, Snowflake, Python, SQL, Excel), and job-assistance offerings. SEO-optimized and mobile-friendly.",
    tags: ["HTML5", "CSS3", "JavaScript", "SEO"],
    category: "Websites",
    featured: false,
    liveUrl: "https://intellxskill.in",
    badge: null,
  },
  {
    id: 6,
    title: "Rainbow Preschool Website",
    subtitle: "Bunnyland Preschool",
    description:
      "Responsive admissions website with program sections, photo gallery, parent testimonials, and an enquiry form with Google Maps integration to capture leads.",
    tags: ["HTML5", "CSS3", "JavaScript", "Google Maps"],
    category: "Websites",
    featured: false,
    liveUrl: "https://bunnylandpreschool-talegaon-dabhade.com",
    badge: null,
  },
];

export const projectCategories = ["All", "Full Stack", "Websites", "SaaS"];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "PHP", "SQL"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Responsive Web Design"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "REST APIs", "JWT/OAuth"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MongoDB Atlas", "MySQL", "DBMS Concepts"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    category: "CS Fundamentals",
    items: [
      "Operating Systems",
      "Computer Networks",
      "Data Structures",
      "OOP",
      "Computer Organization",
      "Software Engineering",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Quick Learner",
      "Adaptability",
      "Time Management",
      "Analytical Thinking",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.E. Computer Engineering",
    institution: "Dr. D. Y. Patil College of Engineering and Innovation",
    duration: "Currently Pursuing",
    score: "SGPA: 8.64",
    current: true,
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Samarth Polytechnic, Belhe",
    duration: "Aug 2022 – 2025",
    score: "88.47%",
    current: false,
  },
  {
    id: 3,
    degree: "SSC",
    institution: "Late Prof. Ramkrushna More English Medium School",
    duration: "Jun 2012 – May 2022",
    score: "79.20%",
    current: false,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Full Stack Developer",
    issuer: "Sumago Infotech Pvt. Ltd.",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Python Django",
    issuer: "Sumago Infotech Pvt. Ltd.",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "HTML5",
    issuer: "Infosys Springboard",
    credentialUrl: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
