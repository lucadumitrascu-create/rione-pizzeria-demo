"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function InstagramIcon({ size }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contatti" className="py-24 md:py-32 bg-mozzarella">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-texto mb-4">
            Besuchen Sie uns
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-pomodoro mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">Adresse</p>
                <p className="text-texto/70">Geßlgasse 10, 1230 Wien</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-pomodoro mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">Telefon</p>
                <a
                  href="tel:+436763042032"
                  className="text-2xl font-playfair font-bold text-texto hover:text-pomodoro transition-colors"
                >
                  +43 676 3042032
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-pomodoro mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">E-Mail</p>
                <a
                  href="mailto:office@rione.at"
                  className="text-texto/70 hover:text-pomodoro transition-colors"
                >
                  office@rione.at
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-pomodoro mt-1 flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-texto">Öffnungszeiten</p>
                <p className="text-texto/70">Montag – Sonntag · 11:00 – 22:00</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.instagram.com/il.rione.pizzeria/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-texto/60 hover:text-pomodoro transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="https://www.facebook.com/pizzeria.il.rione"
                target="_blank"
                rel="noopener noreferrer"
                className="text-texto/60 hover:text-pomodoro transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-[400px] md:h-full min-h-[300px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.5!2d16.2860!3d48.1460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR2XDn2xnYXNzZSAxMCwgMTIzMCBXaWVu!5e0!3m2!1sde!2sat!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Il Rione Pizzeria Standort"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
