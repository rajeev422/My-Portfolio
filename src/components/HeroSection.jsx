import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { fadeInLeft, fadeInRight, sectionStagger } from "../lib/motion";

const HeroScene = lazy(() => import("./HeroScene"));

function HeroSection({ hero }) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % hero.rotatingTitles.length);
    }, 2600);
    return () => window.clearInterval(interval);
  }, [hero.rotatingTitles.length]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="section-shell grid items-center gap-16 pt-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.p variants={fadeInLeft} className="text-theme-muted text-sm uppercase tracking-[0.45em]">
            {hero.tagline}
          </motion.p>
          <motion.h1
            variants={fadeInLeft}
            className="text-theme mt-6 font-display text-5xl font-semibold tracking-tight md:text-7xl"
          >
            Hi, I&apos;m <span className="title-gradient">{hero.name.split(" ")[0]}</span>
          </motion.h1>
          <motion.div variants={fadeInLeft} className="text-theme-soft mt-5 min-h-[68px] text-2xl font-medium md:text-4xl">
            <motion.span
              key={hero.rotatingTitles[titleIndex]}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-block"
            >
              {hero.rotatingTitles[titleIndex]}
            </motion.span>
          </motion.div>
          <motion.p
            variants={fadeInLeft}
            className="text-theme-soft mt-6 max-w-2xl text-lg leading-8"
          >
            {hero.description}
          </motion.p>
          <motion.div variants={fadeInLeft} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="surface-soft border-theme text-theme inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
          <motion.div variants={fadeInLeft} className="text-theme-muted mt-10 flex items-center gap-4">
            <a
              href="https://github.com/rajeev422"
              target="_blank"
              rel="noreferrer"
              className="surface-soft border-theme hover:text-theme flex h-12 w-12 items-center justify-center rounded-full border transition hover:scale-105"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeev068/"
              target="_blank"
              rel="noreferrer"
              className="surface-soft border-theme hover:text-theme flex h-12 w-12 items-center justify-center rounded-full border transition hover:scale-105"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="show"
          className="relative mx-auto h-[28rem] w-full max-w-xl"
        >
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/25 blur-3xl" />
          <div className="glass-panel border-theme absolute inset-0 rounded-[36px]" />
          <Suspense fallback={<div className="surface-soft absolute inset-0 rounded-[36px]" />}>
            <HeroScene />
          </Suspense>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="glass-panel border-theme absolute bottom-6 left-6 right-6 rounded-2xl px-4 py-4"
          >
            <p className="text-theme-muted text-xs uppercase tracking-[0.25em]">Focus Areas</p>
            <p className="text-theme mt-2 text-sm font-medium">Core strengths shaping my portfolio</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {hero.focusAreas.map((area) => (
                <span
                  key={area}
                  className="surface-soft border-theme text-theme-soft rounded-full border px-3 py-1.5 text-xs font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
