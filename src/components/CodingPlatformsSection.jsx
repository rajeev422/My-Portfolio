import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function CodingPlatformsSection({ items }) {
  return (
    <section id="platforms" className="section-shell pt-0">
      <SectionHeading
        eyebrow="Platforms"
        title="Coding profiles where I practice consistently and track progress publicly."
        description="A dedicated section for the platforms that reflect my problem-solving consistency and competitive coding activity."
      />
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {items.map((platform) => (
          <motion.a
            key={platform.label}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            variants={fadeInUp}
            className="glass-panel border-theme group rounded-[30px] p-6 transition hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
                <Code2 className="h-5 w-5" />
              </div>
              <ExternalLink className="text-theme-muted h-4 w-4 transition group-hover:text-[color:var(--accent)]" />
            </div>
            <h3 className="text-theme mt-5 text-xl font-semibold">{platform.label}</h3>
            <p className="text-theme-soft mt-3 text-sm leading-7">
              View my {platform.label} profile directly.
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default CodingPlatformsSection;
