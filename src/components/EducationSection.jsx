import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function EducationSection({ items }) {
  return (
    <section id="education" className="section-shell pt-0">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation behind my AI and machine learning journey."
        description="A concise view of my university path and school background, drawn directly from my CV."
      />
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {items.map((item) => (
          <motion.article
            key={`${item.institution}-${item.period}`}
            variants={fadeInUp}
            className="glass-panel border-theme rounded-[30px] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
                <GraduationCap className="h-5 w-5" />
              </div>
              {item.period ? (
                <span className="surface-soft border-theme text-theme-soft rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]">
                  {item.period}
                </span>
              ) : null}
            </div>
            <h3 className="text-theme mt-5 text-xl font-semibold">{item.institution}</h3>
            {item.location ? (
              <div className="text-theme-muted mt-3 flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{item.location}</span>
              </div>
            ) : null}
            <p className="text-theme-soft mt-5 text-sm leading-7">{item.degree}</p>
            <p className="text-theme mt-4 text-sm font-medium">{item.scoreLabel}: {item.score}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default EducationSection;
