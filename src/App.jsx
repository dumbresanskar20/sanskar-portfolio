import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  // Dark mode: default to dark, persist preference to localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      root.classList.remove("dark");
      document.body.classList.add("light");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-dark-900 text-white" : "bg-slate-50 text-gray-900"} transition-colors duration-300`}>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
