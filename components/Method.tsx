"use client";

import { motion } from "framer-motion";
import { Flame, MapPin, Droplet, Clock } from "lucide-react";

const methods = [
  {
    icon: Flame,
    title: "Kupferofen 485°C",
    desc: "Traditionelle neapolitanische Backkunst",
  },
  {
    icon: MapPin,
    title: "Zutaten aus Italien",
    desc: "San Marzano Tomaten, italienisches Olivenöl",
  },
  {
    icon: Droplet,
    title: "Fior di Latte Agerola",
    desc: "Frische Mozzarella direkt aus Kampanien",
  },
  {
    icon: Clock,
    title: "90 Sekunden Backzeit",
    desc: "Perfekte Kruste, saftiger Kern",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-forno">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-mozzarella mb-4">
            Il Nostro Metodo
          </h2>
          <p className="text-mozzarella/60 text-lg max-w-xl mx-auto mb-16">
            Vier Säulen der authentischen neapolitanischen Pizza
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-6 md:p-8 border border-mozzarella/10 hover:border-olio/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,165,116,0.1)]"
            >
              <m.icon
                className="mx-auto mb-5 text-olio group-hover:scale-110 transition-transform duration-300"
                size={36}
                strokeWidth={1.5}
              />
              <h3 className="font-inter text-base md:text-lg font-semibold text-mozzarella mb-2 tracking-wide">
                {m.title}
              </h3>
              <p className="text-mozzarella/50 text-sm leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
