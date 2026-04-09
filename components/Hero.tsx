"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        alt="Neapolitanische Pizza aus dem Kupferofen"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forno/70 via-forno/50 to-forno/80" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-olio tracking-[0.3em] uppercase text-sm mb-6"
        >
          1230 Wien · Tradizione Napoletana
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-mozzarella mb-6 leading-tight"
        >
          Napoli, direkt in Wien
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-mozzarella/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Autentica Pizza Napoletana aus dem Kupferofen bei 485°C
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://rione.at"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pomodoro text-mozzarella px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-pomodoro/90 transition-colors"
          >
            Jetzt Bestellen
          </a>
          <a
            href="#storia"
            className="border border-mozzarella/40 text-mozzarella px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-mozzarella/10 transition-colors"
          >
            Unsere Geschichte
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#storia" aria-label="Nach unten scrollen">
          <ChevronDown className="text-mozzarella/60 animate-bounce" size={32} />
        </a>
      </motion.div>
    </section>
  );
}
