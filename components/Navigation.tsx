"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Storia", href: "#storia" },
  { label: "Pizze", href: "#pizze" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forno/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-playfair text-2xl font-bold text-mozzarella">
          Il Rione
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-mozzarella/80 hover:text-olio transition-colors text-sm tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://rione.at"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pomodoro text-mozzarella px-6 py-2.5 text-sm font-medium tracking-wide uppercase hover:bg-pomodoro/90 transition-colors"
          >
            Bestellen
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-mozzarella"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-forno/95 backdrop-blur-md px-6 pb-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-mozzarella/80 hover:text-olio transition-colors text-sm tracking-wide uppercase border-b border-mozzarella/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://rione.at"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-pomodoro text-mozzarella px-6 py-3 text-sm font-medium tracking-wide uppercase text-center hover:bg-pomodoro/90 transition-colors"
          >
            Bestellen
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
