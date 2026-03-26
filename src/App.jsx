import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MoonStar, Sparkles, SunMedium } from "lucide-react";
import { portfolioData, stats, terminalLines } from "./data/portfolioData";
import { fadeInUp, sectionStagger } from "./lib/motion";
import AnimatedBackground from "./components/AnimatedBackground";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";

const AboutSection = lazy(() => import("./components/AboutSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const TimelineSection = lazy(() => import("./components/TimelineSection"));
const ResumeSection = lazy(() => import("./components/ResumeSection"));
const CertificatesSection = lazy(() => import("./components/CertificatesSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const TerminalSection = lazy(() => import("./components/TerminalSection"));
const CodingPlatformsSection = lazy(() => import("./components/CodingPlatformsSection"));

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--bg)]"
      exit={{ opacity: 0 }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/5 shadow-glow"
        >
          <Sparkles className="h-10 w-10 text-sky-300" />
        </motion.div>
        <div className="space-y-2 text-center">
          <p className="font-display text-xs uppercase tracking-[0.45em] text-[color:var(--accent)]">
            Initializing Portfolio
          </p>
          <div className="h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatsStrip() {
  return (
    <section className="section-shell pt-0">
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="glass-panel border-theme relative overflow-hidden rounded-[32px] px-6 py-8 md:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-transparent to-emerald-300/10" />
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="surface-soft border-theme rounded-3xl border p-6"
            >
              <p className="text-theme text-4xl font-semibold">{item.value}</p>
              <p className="text-theme-soft mt-2 text-sm">{item.label}</p>
              <p className="text-theme-muted mt-3 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ExpertiseMarquee() {
  const items = useMemo(
    () => [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "React Interfaces",
      "Python Systems",
      "MERN Development",
      "Data Storytelling",
      "Model Deployment",
    ],
    [],
  );

  return (
    <section className="overflow-hidden py-6">
      <div className="flex min-w-max animate-marquee gap-4 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="surface-soft border-theme text-theme-soft rounded-full border px-5 py-2 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, reduceMotion ? 300 : 1800);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence>{isLoading ? <Loader /> : null}</AnimatePresence>
      <CustomCursor />
      <AnimatedBackground />
      <Navbar
        links={portfolioData.navLinks}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        themeIcon={theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
      />
      <main className="relative z-10">
        <HeroSection hero={portfolioData.hero} />
        <ExpertiseMarquee />
        <StatsStrip />
        <Suspense fallback={<section className="section-shell py-10" />}>
          <AboutSection about={portfolioData.about} />
          <SkillsSection skillGroups={portfolioData.skills} />
          <ProjectsSection projects={portfolioData.projects} />
          <TimelineSection items={portfolioData.timeline} />
          <ResumeSection resume={portfolioData.resume} />
          {portfolioData.certificates.length > 0 ? (
            <CertificatesSection items={portfolioData.certificates} />
          ) : null}
          <EducationSection items={portfolioData.education} />
          <TerminalSection lines={terminalLines} />
          {portfolioData.contact.codingPlatforms.length > 0 ? (
            <CodingPlatformsSection items={portfolioData.contact.codingPlatforms} />
          ) : null}
          <ContactSection contact={portfolioData.contact} />
        </Suspense>
      </main>
      <Footer socialLinks={portfolioData.contact.socials} />
    </div>
  );
}

export default App;
