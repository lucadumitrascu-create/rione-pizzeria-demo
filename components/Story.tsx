"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section id="storia" className="py-28 md:py-40 bg-mozzarella relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-olio/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Large decorative quote mark */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute -top-6 right-8 md:right-16 font-playfair text-[12rem] md:text-[18rem] leading-none text-olio/[0.06] pointer-events-none select-none hidden md:block"
        >
          &ldquo;
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-start">
          {/* Image column - spans 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            {/* Decorative frame offset behind image */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-olio/20" />

            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                alt="Gaetano Brancato, Gründer von Il Rione Pizzeria"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              {/* Subtle overlay at bottom for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forno/20 to-transparent" />
            </div>

            {/* Floating accent badge on image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-3 md:-left-6 bg-pomodoro text-mozzarella px-5 py-3 shadow-xl"
            >
              <p className="font-dancing text-lg">dal cuore di Napoli</p>
            </motion.div>
          </motion.div>

          {/* Text column - spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 md:pt-8"
          >
            {/* Label with decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-olio" />
              <p className="text-olio tracking-[0.3em] uppercase text-xs font-medium">
                Unser Gründer
              </p>
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[3.25rem] font-bold text-texto mb-10 leading-[1.15]">
              Gaetano Brancato bringt
              <span className="block text-pomodoro">Neapel nach Wien</span>
            </h2>

            <div className="space-y-5 text-texto/75 leading-[1.85] text-[0.95rem] max-w-xl">
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

            {/* Premium quote block */}
            <div className="mt-12 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-olio via-olio/60 to-transparent" />
              <blockquote className="pl-8 py-2">
                <p className="font-playfair italic text-lg md:text-xl text-texto leading-relaxed">
                  &ldquo;Eine echte neapolitanische Pizza braucht drei Dinge:
                  <span className="text-pomodoro"> Leidenschaft</span>,
                  <span className="text-pomodoro"> Tradition</span> und einen
                  <span className="text-pomodoro"> Kupferofen bei 485°C</span>.&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span className="w-6 h-px bg-olio" />
                  <cite className="text-olio text-sm not-italic font-medium tracking-wide">
                    Gaetano Brancato
                  </cite>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
