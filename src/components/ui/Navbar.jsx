import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import scrollToId from "../../utils/scrollToId.js";

export default function Navbar({ links, brand }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target) => {
    setOpen(false);
    // نمهل إغلاق القائمة قبل التمرير حتى لا يتعارض مع منع التمرير
    setTimeout(() => scrollToId(target), 50);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <button type="button" className="navbar__brand" onClick={() => go("top")}>
          {brand}
        </button>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.target}>
              <button type="button" onClick={() => go(link.target)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 4%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 4%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 4%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {links.map((link, i) => (
                <motion.li
                  key={link.target}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                >
                  <button type="button" onClick={() => go(link.target)}>
                    <small>{String(i + 1).padStart(2, "0")}</small>
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
