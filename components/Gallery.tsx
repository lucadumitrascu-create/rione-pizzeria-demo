"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    alt: "Pizza im Kupferofen",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
    alt: "Frischer Pizzateig",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    alt: "Neapolitanische Pizza",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f",
    alt: "Frische Zutaten aus Italien",
    aspect: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    alt: "Pizzaiolo bei der Arbeit",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1542834291-c514e77b215f",
    alt: "Feuer im Holzofen",
    aspect: "aspect-[4/5]",
  },
];

export default function Gallery() {
  return (
    <section id="galleria" className="py-24 md:py-32 bg-forno">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-mozzarella mb-4">
            Ein Blick in unser Handwerk
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden"
            >
              <div className={`relative ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
