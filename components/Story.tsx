"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="storia" className="py-24 md:py-32 bg-mozzarella">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
              alt="Gaetano Brancato, Gründer von Il Rione Pizzeria"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-olio tracking-[0.3em] uppercase text-sm mb-4">
              Unser Gründer
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-texto mb-8 leading-tight">
              Gaetano Brancato bringt Neapel nach Wien
            </h2>

            <div className="space-y-5 text-texto/80 leading-relaxed">
              <p>
                Gaetano Brancato wuchs in den engen Gassen Neapels auf, wo die Kunst der
                Pizzaherstellung mehr als ein Handwerk ist — sie ist eine Lebensphilosophie.
                Schon als Kind beobachtete er die Meister am Ofen, lernte die Geheimnisse
                des perfekten Teigs und die Bedeutung erstklassiger Zutaten.
              </p>
              <p>
                Mit seinen Familienrezepten und der authentischen Kupferofen-Technik kam er
                nach Wien, um den Wienern zu zeigen, was eine echte neapolitanische Pizza
                ausmacht. Jede Pizza wird mit Fior di Latte aus Agerola, San Marzano
                Tomaten und italienischem Olivenöl zubereitet — keine Kompromisse.
              </p>
              <p>
                Heute bäckt Gaetano 120 bis 300 Pizzen täglich in seinem Kupferofen bei
                485°C. Jede einzelne Pizza wird mit derselben Leidenschaft und Hingabe
                zubereitet wie die allererste. Das ist sein Versprechen an Wien.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-2 border-olio">
              <p className="font-playfair italic text-lg md:text-xl text-texto/90 leading-relaxed">
                &ldquo;Eine echte neapolitanische Pizza braucht drei Dinge: Leidenschaft,
                Tradition und einen Kupferofen bei 485°C.&rdquo;
              </p>
              <cite className="block mt-3 text-olio text-sm not-italic tracking-wide">
                — Gaetano Brancato
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
