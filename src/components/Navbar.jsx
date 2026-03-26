import { motion } from "framer-motion";

function Navbar({ links, onThemeToggle, themeIcon }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full border-white/10 px-4 py-3 md:px-6">
        <a href="#home" className="text-theme font-display text-sm font-semibold uppercase tracking-[0.35em]">
          RC
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-theme-soft hover:text-theme text-sm transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={onThemeToggle}
          className="surface-soft border-theme text-theme-soft flex h-11 w-11 items-center justify-center rounded-full border transition hover:scale-105"
          aria-label="Toggle theme"
        >
          {themeIcon}
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;
