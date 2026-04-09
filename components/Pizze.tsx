"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pizze = [
  {
    name: "Margherita Vera",
    price: "€10,50",
    desc: "San Marzano, Fior di Latte, Basilikum",
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
  },
  {
    name: "Marinara",
    price: "€9,50",
    desc: "Tomaten, Knoblauch, Oregano, Olivenöl",
    img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212",
  },
  {
    name: "Diavola",
    price: "€13,00",
    desc: "Tomaten, Mozzarella, scharfe Salami",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
  },
  {
    name: "Quattro Formaggi",
    price: "€14,00",
    desc: "Vier italienische Käsesorten",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    name: "Prosciutto e Funghi",
    price: "€13,50",
    desc: "Schinken, frische Champignons",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    name: "Capricciosa",
    price: "€14,50",
    desc: "Schinken, Artischocken, Oliven, Pilze",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
  },
];

export default function Pizze() {
  return (
    <section id="pizze" className="py-24 md:py-32 bg-mozzarella">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-texto mb-4">
            Le Nostre Pizze
          </h2>
          <p className="text-texto/60 text-lg">
            Traditionell. Authentisch. Leidenschaftlich.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizze.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-playfair text-xl font-semibold text-texto">
                    {p.name}
                  </h3>
                  <span className="text-olio font-semibold text-lg">{p.price}</span>
                </div>
                <p className="text-texto/60 text-sm">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://rione.at"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-pomodoro text-pomodoro px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-pomodoro hover:text-mozzarella transition-colors"
          >
            Vollständige Speisekarte ansehen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
