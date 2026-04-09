"use client";

import { motion } from "framer-motion";

export default function DeliveryBanner() {
  return (
    <section className="bg-pomodoro py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-mozzarella/80 text-lg md:text-xl mb-6 leading-relaxed">
            Lieferung innerhalb 1230 Wien · Frisch aus dem Ofen in unter 12 Minuten bei Ihnen
          </p>
          <a
            href="https://rione.at"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mozzarella text-pomodoro px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-white transition-colors"
          >
            Jetzt Bestellen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
