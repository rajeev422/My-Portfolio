import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function ProjectModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35 }}
          onClick={(event) => event.stopPropagation()}
          className="glass-panel border-theme relative w-full max-w-2xl rounded-[32px] p-8"
        >
          <button
            type="button"
            onClick={onClose}
            className="surface-soft border-theme absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border"
          >
            <X className="text-theme h-4 w-4" />
          </button>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-200/70">Project Detail</p>
          <h3 className="text-theme mt-4 font-display text-3xl font-semibold">{project.title}</h3>
          <p className="text-theme-soft mt-4 text-base leading-8">{project.detail}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="surface-soft border-theme text-theme-soft rounded-full border px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="surface-soft border-theme text-theme inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950"
              >
                <ArrowUpRight className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectsSection({ projects }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Interactive project stories designed to catch attention and prove technical range."
        description="This section carries the strongest weight in the portfolio, so each card is built to feel tactile, animated, and easy to explore."
      />
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            whileHover={{ y: -8, rotateX: 3, rotateY: index % 2 === 0 ? 3 : -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group glass-panel border-theme relative overflow-hidden rounded-[32px] p-7"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300/10 via-transparent to-emerald-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-sky-100">
                  Case Study {index + 1}
                </span>
                <div className="text-theme-muted flex gap-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="hover:text-theme h-5 w-5 transition" />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ArrowUpRight className="hover:text-theme h-5 w-5 transition" />
                    </a>
                  ) : null}
                </div>
              </div>
              <h3 className="text-theme font-display text-2xl font-semibold">{project.title}</h3>
              <p className="text-theme-soft mt-4 text-sm leading-7">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="surface-soft border-theme text-theme-soft rounded-full border px-3 py-1.5 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-sky-200 transition group-hover:translate-x-1"
              >
                Open project details
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

export default ProjectsSection;
